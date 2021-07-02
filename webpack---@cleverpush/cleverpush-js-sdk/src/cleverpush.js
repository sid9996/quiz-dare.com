import EventEmitter from 'wolfy87-eventemitter';
import Promise from 'promise-polyfill';

import './utils/polyfills';
import {
    log,
    logMethodCall,
    getConsoleStyle
} from './utils/debug';
import {
    domReady,
    domLoaded,
    getPercentOfView,
    isInViewport
} from './utils/dom';
import CleverPushApi from './api';
import Command from './messenger/command';
import request from './utils/request';
import {
    isHost,
    isPopup,
    isPopupUnsubscribe,
    isIframe,
    isBrowser,
    supportsPush,
    getScrollPercentage,
    isAndroid,
    browser,
    os,
    device,
    browserVersion,
    browserSubVersion
} from './utils/env';
import { 
    detectPrompt
} from './utils/detect';
import {
    translate as utilsTranslate
} from './utils/translate';
import {
    checkTags
} from './utils/tags';
import {
    onPianoEnabledChange
} from './utils/piano';
import detectAdblock from './utils/adblock';
import customCssOverrides from './const/customCssOverrides';
import Event from './const/event';
import CleverPushError from './error/CleverPushError';
import {
    INT_RADIX
} from './const/common';

export default class CleverPush extends EventEmitter {
    constructor() {
        super();

        this.bell = null;
        this.config = {};
        this.log = log;
        this.initialized = false;
        this.initCalled = false;
        this.initFailed = false;
        this.initError = null;
        this.api = null;
        this.subscriptionManager = null;
        this.version = typeof VERSION !== 'undefined' ? VERSION : '';
    }

    init(configParam, callbackParam) {
        logMethodCall('init');
        log.info('Browser:', browser.name, browserVersion);

        const callback = (err, successParam) => {
            const success = typeof successParam !== 'undefined' ? successParam : !err;

            if (typeof callbackParam === 'function') {
                callbackParam(err, success);
            } else if (err) {
                if (err.warn || (err.reason === 'unsupported-browser' || err.reason === 'private-mode' || err.reason === 'already-initialized' || err.reason === 'init-already-called')) {
                    log.warn(err.message);
                } else {
                    log.error(err);
                }
            }

            if (typeof window.cleverPushInitCallback === 'function') {
                window.cleverPushInitCallback(err, success);
            }

            if (err) {
                if (err.reason !== 'already-initialized' && err.reason !== 'init-already-called') {
                    this.initFailed = true;
                    this.initError = err;
                }

                this.trigger(Event.INITIALIZATION_FAILED);

                if (err && err.reason !== 'unsupported-browser' && err.reason !== 'private-mode' && err.reason !== 'already-initialized' && err.reason !== 'init-already-called') {
                    // Raven.captureException(err);
                }
            } else {
                this.initFailed = false;
            }
        };

        if (this.initCalled) {
            callback(new CleverPushError('Init was already called, please only call init() once.', 'init-already-called'), false);
        } else {
            this.initCalled = true;

            // message listener for iframes
            window.addEventListener('message', (event) => {
                if (event.data && typeof event.data === 'object' && event.data.type === 'cleverpush' && event.data.method && event.data.arguments && this[event.data.method]) {
                    this[event.data.method](...event.data.arguments);
                }
            });

            if (typeof configParam !== 'object') {
                callback(new CleverPushError('Required parameter `config` not given.', 'invalid-config'));
            } else if (!configParam.channelId && !configParam.loadConfigFromParent) {
                callback(new CleverPushError('Required attribute `channelId` in `config` not given.', 'invalid-config'));
            } else if (this.initialized) {
                callback(new CleverPushError('CleverPush SDK was already initialized.', 'already-initialized'));
            } else {
                this.api = new CleverPushApi(configParam.channelId);

                if (configParam.apiEndpoint) {
                    this.api.endpoint = configParam.apiEndpoint;
                }

                if (!configParam.env && window.cleverPushConfig && window.cleverPushConfig.env) {
                    configParam.env = window.cleverPushConfig.env;
                }

                const initSubscriptionManager = () => {
                    let protocol = window.location.protocol;
                    let hostname = window.location.hostname;
                    try {
                        protocol = window.parent.location.protocol;
                        hostname = window.parent.location.hostname;
                    } catch (err) {}

                    let importFile;
                    if (this.browserType === 'safari') {
                        importFile = 'safariManager';
                    } else if (this.browserType === 'facebook') {
                        importFile = 'facebookManager';
                    } else if (this.browserType === 'urlSession') {
                        importFile = 'urlSessionManager';
                    } else if (isPopup(configParam) || configParam.env === 'POPUP') {
                        importFile = 'httpPopupManager';
                    } else if (isIframe(configParam)) {
                        importFile = 'httpIframeManager';
                    } else if (this.config.ownDomain && (protocol === 'https:' || hostname === 'localhost')) {
                        importFile = 'httpsManager';
                    } else {
                        importFile = 'httpHostManager';
                    }

                    return new Promise((resolve) => {
                        import (`./subscription/${importFile}`).then(({
                            default: SubscriptionManager
                        }) => {
                            this.subscriptionManager = new SubscriptionManager(this.config, this.api, this.trigger.bind(this));
                            resolve();
                        });
                    });
                };

                if ((configParam.env !== 'POPUP' && isHost(configParam)) || configParam.env === 'PREVIEW' || configParam.env === 'WIDGET') {
                    const loadConfigPromise = new Promise((resolve, reject) => {
                        const confirmAlertTestsEnabled = configParam.confirmAlertTestsEnabled && configParam.confirmAlertTests && configParam.confirmAlertTests.length;
                        if (typeof fetch !== 'undefined' && (typeof configParam.loadConfig === 'undefined' || configParam.loadConfig || confirmAlertTestsEnabled) && configParam.env !== 'PREVIEW') {
                            this.api.getChannelConfig(configParam.confirmAlertTestsEnabled).then((channelConfig) => {
                                resolve(channelConfig);
                            }).catch(reject);
                        } else if (configParam.loadConfigUrl) {
                            request(configParam.loadConfigUrl).then((json) => {
                                if (json) {
                                    resolve(json);
                                } else {
                                    resolve({});
                                }
                            }).catch(reject);
                        } else {
                            resolve({});
                        }
                    });

                    if (configParam.apiEndpoint) {
                        this.api.endpoint = configParam.apiEndpoint;
                    }

                    loadConfigPromise.then((channelConfig) => {
                        this.config = Object.assign({
                                autoRegister: true,
                                alertTimeout: 0,
                                alertMinimumVisits: 0,
                                loadIframe: true,
                                trackSessions: true
                            },
                            channelConfig,
                            configParam, {
                                confirmAlertTests: channelConfig.confirmAlertTests,
                            });

                        if (this.config.staticEndpoint) {
                            // set the public path to load chunks from dynamically, depending on the staticEndpoint from config
                            __webpack_public_path__ = this.config.staticEndpoint + '/sdk/';
                        }

                        if (this.config.enableRestrictOptInDomain && this.config.domain) {
                            if (!this.config.domain.includes(location.hostname)) {
                                callback(new CleverPushError(`This channel has enabled Opt-in domain restrictions. (${location.hostname} is not included in allowed domains (${this.config.domain}))`, 'enableRestrictOptInDomain'));
                                return;
                            }
                        }

                        if (configParam.alertLocalization) {
                            // merge
                            this.config.alertLocalization = Object.assign({}, channelConfig.alertLocalization, configParam.alertLocalization);
                        }

                        if (typeof this.config.channelId === 'undefined' || typeof this.config.channelName === 'undefined') {
                            callback(new CleverPushError('`channelId` or `channelName` not found in config.', 'invalid-config'));
                            return;
                        }

                        if (typeof self.cleverPushConfig === 'object') {
                            this.config = Object.assign(this.config, self.cleverPushConfig);
                        }

                        log.debug('Config:', this.config);

                        if (this.config.apiEndpoint) {
                            this.api.endpoint = this.config.apiEndpoint;
                        }
                        if (this.config.regionEnabled) {
                            this.api.regionEnabled = true;
                        }

                        if (isPopupUnsubscribe()) {
                            this.config.autoRegister = false;
                        }

                        if (!this.config.facebookAppId) {
                            this.config.facebookAppId = '436333683366106';
                        }

                        if (typeof URLSearchParams !== 'undefined' && location.search && location.search.length) {
                            const params = new URLSearchParams(location.search.slice(1));
                            if (params.get('confirmAlertTestId')) {
                                this.config.confirmAlertTestId = params.get('confirmAlertTestId');
                                this.api.setConfirmAlertTestId(this.config.confirmAlertTestId);
                            }

                            if (params.get('cpId')) {
                                try {
                                    sessionStorage.setItem('cleverpush-url-session', 'true');
                                    sessionStorage.setItem('cleverpush-subscription-id', params.get('cpId'));
                                } catch (e) {}
                            }
                        }

                        try {
                            if (sessionStorage.getItem('cleverpush-url-session')) {
                                this.urlSession = true;
                            }
                        } catch (ignored) {}

                        // only set cleverpush-referrer if really needed
                        try {
                            if (this.config.trackOptInReferrers || (this.config.confirmAlertFilters || []).find(f => f.type === 'referrer') || (this.config.bounceEnabled && (this.config.bounceFilters || []).find(f => f.source === 'direct'))) {
                                if (!sessionStorage.getItem('cleverpush-referrer') && document.referrer) {
                                    sessionStorage.setItem('cleverpush-referrer', document.referrer.split('?')[0]);
                                }
                            }
                            this.referrer = sessionStorage.getItem('cleverpush-referrer');
                        } catch (e) {
                            log.debug(e);
                        }

                        const supportsPushOrFbMessenger = () => {
                            return new Promise((resolve, reject) => {
                                const catchError = (compatibilityError) => {
                                    if (this.urlSession && compatibilityError.reason === 'unsupported-browser' && !configParam.forceChannelId) {
                                        if (this.config.multiChannels && this.config.multiChannels.telegramChannel && this.config.multiChannels.telegramChannel._id !== this.config.channelId) {
                                            this.config.channelId = this.config.multiChannels.telegramChannel._id;
                                            this.api.channelId = this.config.multiChannels.telegramChannel._id;
                                        } else if (this.config.multiChannels && this.config.multiChannels.facebookChannel && this.config.multiChannels.facebookChannel._id !== this.config.channelId && !configParam.forceChannelId) {
                                            this.config.channelId = this.config.multiChannels.facebookChannel._id;
                                            this.api.channelId = this.config.multiChannels.facebookChannel._id;
                                        }

                                        resolve('urlSession');

                                    } else if (this.config.facebookAppId && this.config.facebookPageId && this.config.facebookCheckboxEnabled && compatibilityError.reason === 'unsupported-browser') {
                                        if (this.config.multiChannels && this.config.multiChannels.facebookChannel && this.config.multiChannels.facebookChannel._id !== this.config.channelId && !configParam.forceChannelId) {
                                            this.config.channelId = this.config.multiChannels.facebookChannel._id;
                                            this.config.alertLocalization = Object.assign({}, this.config.alertLocalization, this.config.multiChannels.facebookChannel.alertLocalization);
                                            this.api.channelId = this.config.multiChannels.facebookChannel._id;
                                        }

                                        this.config.hideNotificationBellSubscribed = true;

                                        log.debug('showConfirmAlert = true 1');
                                        this.config.showConfirmAlert = true;
                                        if (this.config.confirmAlertNativeTheme === 'cleverpush-confirm-backdrop-text') {
                                            this.config.confirmAlertNativeTheme = '';
                                        }

                                        log.debug('UAParser Browser:', browser);

                                        // Always use button opt-in and not checkbox opt-in. It will cause problems with duplicate opt-ins because we can't de-duplicate users (messenger_optin event does not include the FB user id, only the random user_ref).
                                        this.config.facebookButtonOptIn = true;
                                        this.config.facebookCheckboxEnabled = false;
                                        resolve('facebook');
                                        return;

                                        /*
                                        if (browser && (browser.name === 'Safari' || browser.name === 'Mobile Safari')) {
                                          if (browserVersion >= 12) {
                                            reject(compatibilityError);
                                            return;
                                          }
                                        }
                                        */

                                        if (!this.config.facebookCheckboxEnabled) {
                                            reject(compatibilityError);
                                            return;
                                        }

                                        // only pre-load the Facebook SDK when double opt-in is disabled. Otherwise loaded in confirm/index.js
                                        if (!this.config.facebookDoubleOptIn) {
                                            FacebookSubscriptionManager.initFacebook(() => {
                                                if (typeof FB !== 'undefined') {
                                                    var demoMessengerCheckbox = document.createElement('div');

                                                    let resolved = false;
                                                    FB.Event.subscribe('messenger_checkbox', (event) => {
                                                        if (resolved) {
                                                            return;
                                                        }

                                                        log.debug('FB - Mock Checkbox Event', event);

                                                        if (event.event === 'rendered') {
                                                            resolved = true;

                                                            document.body.removeChild(demoMessengerCheckbox);

                                                            resolve('facebook');
                                                        } else if (event.event === 'hidden') {
                                                            log.warn('Facebook Messenger Plugin was hidden. Do you have disabled third-party tracking in your browser settings?');

                                                            this.config.facebookButtonOptIn = true;

                                                            document.body.removeChild(demoMessengerCheckbox);
                                                            resolved = true;

                                                            resolve('facebook');
                                                        }
                                                    });

                                                    demoMessengerCheckbox.style.display = 'none';
                                                    demoMessengerCheckbox.innerHTML = `<div class="fb-messenger-checkbox" origin="${location.origin}" page_id="${this.config.facebookPageId}" messenger_app_id="${this.config.facebookAppId}" user_ref="${Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2)}" prechecked="true" allow_login="false" size="large" style="margin-top: 10px; margin-left: -14px;"></div>`;
                                                    document.body.appendChild(demoMessengerCheckbox);

                                                    FB.XFBML.parse();

                                                    log.debug('FB mock checkbox appended');
                                                } else {
                                                    log.debug('FB undefined');
                                                    reject(compatibilityError);
                                                }
                                            });
                                        } else {
                                            resolve('facebook');
                                        }

                                    } else {
                                        reject(compatibilityError);
                                    }
                                };

                                if (this.urlSession) {
                                    if (this.config.multiChannels && this.config.multiChannels.telegramChannel && this.config.multiChannels.telegramChannel._id !== this.config.channelId && !configParam.forceChannelId) {
                                        this.config.channelId = this.config.multiChannels.telegramChannel._id;
                                        this.api.channelId = this.config.multiChannels.telegramChannel._id;
                                    } else if (this.config.multiChannels && this.config.multiChannels.facebookChannel && this.config.multiChannels.facebookChannel._id !== this.config.channelId && !configParam.forceChannelId) {
                                        this.config.channelId = this.config.multiChannels.facebookChannel._id;
                                        this.api.channelId = this.config.multiChannels.facebookChannel._id;
                                    }

                                    resolve('urlSession');

                                    return;
                                }

                                if (this.config.multiChannels && this.config.multiChannels.facebookChannel && this.config.multiChannels.facebookChannel.facebookPage && !this.config.facebookPageId) {
                                    this.config.facebookPageId = this.config.multiChannels.facebookChannel.facebookPage.id || this.config.multiChannels.facebookChannel.facebookPageId;
                                    this.config.facebookCheckboxEnabled = this.config.multiChannels.facebookChannel.facebookCheckboxEnabled;
                                    this.config.facebookCheckboxOnlyUnsupported = this.config.multiChannels.facebookChannel.facebookCheckboxOnlyUnsupported;
                                    this.config.facebookDoubleOptIn = this.config.multiChannels.facebookChannel.facebookDoubleOptIn;
                                }

                                supportsPush().then((browserType) => {
                                    if (this.config.facebookCheckboxOnlyUnsupported && this.config.facebookPageId) {
                                        this.config.facebookPageId = null;
                                    }

                                    if (browserType === 'safari' && !this.config.safariWebsitePushId) {
                                        catchError(new CleverPushError('Safari Web Push not set up', 'unsupported-browser'));
                                        return;
                                    }

                                    resolve(browserType);
                                }).catch(catchError);
                            });
                        };

                        // init stuff which does not require push capabilities
                        this.initWebBanners();
                        this.initBounces();
                        domReady().then(() => {
                            this.initMultiPlatformWidgets();
                        });
                        this.initChatWidget();

                        supportsPushOrFbMessenger().then((browserType) => {
                            this.browserType = browserType;
                            this.config.browserType = browserType;

                            if (this.config.desktopOnly && (os.name === 'Android' || device.type === 'mobile')) {
                                return;
                            }

                            // opt-in split-testing
                            if (this.config.confirmAlertTestsEnabled && this.config.confirmAlertTests && this.config.confirmAlertTests.length > 0) {
                                const availableConfirmAlertTests = this.config.confirmAlertTests.filter(t => !(t.config || {}).alertPathname || ((t.config || {}).alertPathname && (new RegExp((t.config || {}).alertPathname).test(window.location.pathname))));

                                let test;
                                if (this.config.confirmAlertTestId) {
                                    const testIndex = availableConfirmAlertTests.findIndex(tryTest => (tryTest || {}).id === this.config.confirmAlertTestId);
                                    if (testIndex >= 0) {
                                        test = availableConfirmAlertTests[testIndex];
                                    }
                                }

                                if (!test) {
                                    const defaultPercent = 100 / availableConfirmAlertTests.length;

                                    const tests = availableConfirmAlertTests.map(test => Object.assign({}, test, {
                                        percentage: test.percentage || defaultPercent
                                    }));

                                    let i;
                                    const randomNr = Math.random();
                                    let threshold = 0;

                                    for (i = 0; i < tests.length; i += 1) {
                                        if (!tests[i].percentage) {
                                            continue;
                                        }

                                        threshold += (tests[i].percentage / 100);
                                        if (threshold > randomNr) {
                                            test = tests[i];
                                            break;
                                        }

                                        if (!test) {
                                            // nothing found based on probability value, so pick element marked with wildcard
                                            test = tests.filter(tryTest => !tryTest.percentage);
                                        }
                                    }
                                }

                                if (test && test.config) {
                                    log.debug('Split-Test:', test);
                                    this.config = Object.assign({}, this.config, test.config, {
                                        confirmAlertTestId: test.id,
                                        customCss: (test.config.customCss || '') + ( /*this.config.topicsTemplateFunction && */ this.config.customCss ? this.config.customCss : ''),
                                        alertLocalization: Object.assign({}, this.config.alertLocalization, test.config.alertLocalization ||  {}),
                                    });
                                    if (!test.alertLocalization) {
                                        if (!this.config.alertLocalization) {
                                            this.config.alertLocalization = {};
                                        }
                                        this.config.alertLocalization = {
                                            allow: test.config.alertLocalizationAllow || this.config.alertLocalization.allow,
                                            deny: test.config.alertLocalizationDeny || this.config.alertLocalization.deny,
                                            confirmInfo: test.config.alertLocalizationConfirmInfo || this.config.alertLocalization.confirmInfo,
                                            title: test.config.alertLocalizationTitle || this.config.alertLocalization.title,
                                            info: test.config.alertLocalizationInfo || this.config.alertLocalization.info
                                        };
                                    }
                                    this.api.setConfirmAlertTestId(this.config.confirmAlertTestId);
                                }
                            }

                            const language = (navigator.language || navigator.userLanguage || '').substr(0, 2);
                            if (this.config.alertLocalizationTranslations && language && this.config.alertLocalizationTranslations[language]) {
                                const translation = this.config.alertLocalizationTranslations[language];
                                if (translation.privacyPolicyUrl) {
                                    this.config.privacyPolicyUrl = translation;
                                }
                            }

                            // filter channel topics by path name
                            if (this.config.channelTopics && this.config.channelTopics.length) {
                                this.config.channelTopics = this.config.channelTopics.sort((a, b) => a.sort - b.sort);
                            }

                            const initSdk = () => {;

                                Promise.all([
                                    this.waitForInit(),
                                    initSubscriptionManager(),
                                ]).then(() => {
                                    log.debug('Init done');

                                    const isMobile = os.name === 'Android' || os.name === 'iOS' || device.type === 'mobile';
                                    const loadBell = this.config.showNotificationBell && (!isMobile || !this.config.hideNotificationBellMobile);

                                    const importPromises = [
                                        import ('./confirm')
                                    ];
                                    if (loadBell) {
                                        importPromises.push(
                                            import ('./bell'));
                                    }

                                    Promise.all(importPromises).then(([{
                                        default: Confirm
                                    }, bellResult]) => {
                                        this.confirm = new Confirm(this, this.subscriptionManager);
                                        this.trigger(Event.CONFIRM_AVAILABLE);
                                        this.subscriptionManager.setConfirm(this.confirm);

                                        if (loadBell) {
                                            const {
                                                default: Bell
                                            } = bellResult;
                                            this.bell = new Bell(this.config, this.subscriptionManager, this.api, this.confirm, this.trigger.bind(this), this.triggerOptIn.bind(this));
                                        }

                                        // TODO: ALL browsers: show confirm alert when has no cookies but has push permission
                                        // this.config.showConfirmAlertResubscribe = true;

                                        // applies only to Android Chrome + Safari Mac right now
                                        const fullScreenOptIn = isMobile; // || os.name === 'Android' && (browser.name === 'Chrome' || browser.name === 'Firefox' || browser.name === 'Opera');

                                        // force topics after opt in
                                        if (fullScreenOptIn && this.config.channelTopics && this.config.channelTopics.length) {
                                            this.config.confirmAlertSelectTopicsLater = true;
                                        }

                                        const isSafariMac = os.name === 'Mac OS' && browser.name === 'Safari';

                                        if (this.config.env !== 'PREVIEW') {
                                            if (this.config.showConfirmAlertMobile && !this.config.confirmAlertSelectTopicsLater && fullScreenOptIn) {
                                                log.debug('showConfirmAlert = true 2');
                                                this.config.showConfirmAlert = true;
                                            }

                                            // Safari 12.1+: Push notification prompting can only be done from a user gesture. (https://github.com/wicg/interventions/issues/49#issuecomment-477122163)
                                            if (isSafariMac && (browserVersion > 12 || (browserVersion === 12 && browserSubVersion >= 1))) {
                                                log.debug('showConfirmAlert = true 3');
                                                this.config.showConfirmAlert = true;
                                                this.config.isSafari_12_1 = true;
                                            }

                                            // Firefox 72: Push notification prompting can only be done from a user gesture
                                            if (browser.name === 'Firefox' && browserVersion >= 72) {
                                                log.debug('showConfirmAlert = true 4');
                                                this.config.showConfirmAlert = true;
                                            }

                                            // Edge 84+ - show unblock tutorial
                                            if (browser.name === 'Edge' && browserVersion >= 84) {
                                                this.config.showSilentPromptTutorial = true;
                                                this.config.showConfirmAlert = true;
                                            }
                                        }

                                        if (!this.config.confirmAlertHideChannelTopics) {
                                            if (!this.config.isSafari_12_1 && (this.config.channelTopics || []).length && ((fullScreenOptIn && !this.config.showConfirmAlertMobile) || isSafariMac)) {
                                                this.config.confirmAlertSelectTopicsLater = true;
                                            }
                                        }

                                        if (this.config.customAttributes && this.config.customAttributes.length && this.config.customAttributes.filter(attr => !!attr.askAfterOptIn).length) {
                                            this.config.confirmAlertSelectAttributesLater = true;
                                        }

                                        // only for special request users, will completely disable confirm alerts even if necessary
                                        if (this.config.confirmAlertDisabled && this.config.showConfirmAlert) {
                                            this.config.showConfirmAlert = false;
                                        }

                                        this.on(Event.SUBSCRIBED, (subscriptionId) => {
                                            log.info('SUBSCRIBED fired');

                                            if (this.bell) {
                                                this.bell.reset(true);
                                            }
                                            if (this.confirm) {
                                                this.confirm.hide();
                                            }

                                            // Google Analytics auto tracking
                                            this.initGoogleAnalytics(subscriptionId);
                                        });
                                        this.on(Event.UNSUBSCRIBED, () => {
                                            this.subscriptionManager.subscribed = false;
                                            if (this.bell) {
                                                this.bell.reset(false);
                                            }
                                        });

                                        this.initWidgets();
                                        this.initTagButtons();
                                        this.initTopicButtons();
                                        this.initPageBanners();
                                        this.initTags();
                                        this.initTopics();
                                        this.initConversions();
                                        this.initPiano();

                                        // check subscription status + sync every 2 days
                                        this.subscriptionManager.isSubscribed().then((isSubscribed) => {
                                            if (this.bell) {
                                                this.bell.show(isSubscribed);
                                                this.trigger(Event.BELL_READY);
                                            }

                                            if (isSubscribed) {
                                                log.debug('main subscribed = true');
                                                this.subscriptionManager.subscribed = true;

                                                if (this.subscriptionManager.iframeMessenger) {
                                                    this.subscriptionManager.getSubscriptionId().then((subscriptionId) => {
                                                        this.subscriptionManager.iframeMessenger.setSubscribed(subscriptionId);
                                                    });
                                                }

                                                this.subscriptionManager.getSubscriptionId().then((subscriptionId) => {
                                                    this.initGoogleAnalytics(subscriptionId);
                                                });
                                            }
                                        });

                                        // send session start+end to API
                                        if (this.config.trackSessions) {
                                            try {
                                                this.waitForSubscription().then((subscriptionId) => {
                                                    let lastSession = this.subscriptionManager.storageManager.getLastSession();

                                                    const checkEndSession = () => {
                                                        if (lastSession && lastSession.lastInteractionAt && lastSession.startedAt && new Date(lastSession.lastInteractionAt) < new Date(Date.now() - (60 * 60 * 30))) {
                                                            let duration = Math.round((new Date(lastSession.lastInteractionAt).getTime() - new Date(lastSession.startedAt).getTime()) / 1000);
                                                            if (duration > 60 * 60 * 30) {
                                                                duration = 60 * 60 * 30;
                                                            } else if (duration < 0) {
                                                                duration = 0;
                                                            }
                                                            if (subscriptionId) {
                                                                this.api.endSession(subscriptionId, {
                                                                    duration,
                                                                    visits: lastSession.visits
                                                                });
                                                            }

                                                            lastSession = {};
                                                        }
                                                    };

                                                    checkEndSession();

                                                    if (!lastSession.startedAt || sessionStorage.getItem('cleverpush-session-counted') !== 'true') {
                                                        sessionStorage.setItem('cleverpush-session-counted', 'true');

                                                        this.subscriptionManager.storageManager.getNotifications(1).then((notifications) => {
                                                            log.info('getNotifications res', notifications);
                                                            const data = {};
                                                            if (notifications && notifications.length && notifications[0] && notifications[0].id) {
                                                                data.lastNotificationId = notifications[0].id;
                                                            }
                                                            if (subscriptionId) {
                                                                this.api.startSession(subscriptionId, data);
                                                            }
                                                        });

                                                        lastSession.startedAt = new Date();
                                                        lastSession.visits = 0;
                                                    }

                                                    lastSession.lastInteractionAt = new Date();
                                                    lastSession.visits += 1;
                                                    this.subscriptionManager.storageManager.setLastSession(lastSession);

                                                    window.addEventListener('unload', () => {
                                                        lastSession = this.subscriptionManager.storageManager.getLastSession();

                                                        if (!lastSession || !lastSession.lastInteractionAt || !lastSession.startedAt || new Date(lastSession.lastInteractionAt) >= new Date(Date.now() - (60 * 60 * 30))) {
                                                            lastSession.lastInteractionAt = new Date();
                                                        }

                                                        checkEndSession();

                                                        this.subscriptionManager.storageManager.setLastSession(lastSession);
                                                    }, false);
                                                });

                                            } catch (err) {
                                                log.warn(err);
                                            }
                                        }

                                        // apply confirm alert filters
                                        if (this.config.confirmAlertFilters && this.config.confirmAlertFilters.length && this.config.env !== 'PREVIEW') {
                                            const applyFilter = (filter) => {
                                                if (typeof filter.autoRegister !== 'undefined') {
                                                    this.config.autoRegister = filter.autoRegister;
                                                }
                                                if (typeof filter.minimumVisits !== 'undefined') {
                                                    this.config.alertMinimumVisits = filter.minimumVisits;
                                                }
                                                if (typeof filter.scrollPercentage !== 'undefined') {
                                                    this.config.alertScrollPercentage = filter.scrollPercentage;
                                                }
                                                if (typeof filter.timeout !== 'undefined') {
                                                    this.config.alertTimeout = filter.timeout * 1000;
                                                }
                                                if (typeof filter.localizationTitle !== 'undefined') {
                                                    this.config.alertLocalization = Object.assign({}, this.config.alertLocalization, {
                                                        title: filter.localizationTitle
                                                    });
                                                }
                                                if (typeof filter.localizationInfo !== 'undefined') {
                                                    this.config.alertLocalization = Object.assign({}, this.config.alertLocalization, {
                                                        info: filter.localizationInfo
                                                    });
                                                }
                                                if (typeof filter.radioButtonTopics !== 'undefined') {
                                                    this.config.confirmAlertRadioButtonTopics = filter.radioButtonTopics;
                                                }
                                                if (typeof filter.requireTopics !== 'undefined') {
                                                    this.config.confirmAlertRequireChannelTopics = filter.requireTopics;
                                                }
                                                if (typeof filter.nativeTheme !== 'undefined') {
                                                    this.config.confirmAlertNativeTheme = filter.nativeTheme;
                                                }
                                                if (typeof filter.customCss !== 'undefined') {
                                                    if (!this.config.customCss) {
                                                        this.config.customCss = '';
                                                    }
                                                    this.config.customCss += filter.customCss;
                                                }
                                                if (typeof filter.config === 'object') {
                                                    Object.keys(filter.config || {}).forEach((key) => {
                                                        if (key === 'alertLocalization') {
                                                            this.config[key] = Object.assign({}, this.config[key], filter.config[key]);
                                                        } else if (key.indexOf('alertLocalization') === 0) {
                                                            if (!this.config.alertLocalization) {
                                                                this.config.alertLocalization = {};
                                                            }
                                                            const keySub = key.substr('alertLocalization'.length);
                                                            this.config.alertLocalization[keySub.substr(0, 1).toLowerCase() + keySub.substr(1)] = filter.config[key];
                                                        } else if (key === 'serviceWorkerPath') {
                                                            this.config.serviceWorkerFile = filter.config[key];
                                                        } else if (key === 'customCss') {
                                                            if (!this.config.customCss) {
                                                                this.config.customCss = '';
                                                            }
                                                            this.config.customCss += filter.config.customCss;
                                                        } else {
                                                            this.config[key] = filter.config[key];
                                                        }
                                                    });

                                                    // this.config = Object.assign({}, this.config, filter.config);
                                                    if (filter.config.alertTimeout && filter.config.alertTimeout < 1000) {
                                                        this.config.alertTimeout = filter.config.alertTimeout * 1000;
                                                    }
                                                }
                                            };

                                            this.config.confirmAlertFilters.forEach((filter) => {
                                                if (filter.type === 'device' && ((filter.value === 'desktop' && device.type !== 'mobile') || (filter.value === 'mobile' && device.type === 'mobile') || (filter.value === 'bot' && /bot|google|baidu|bing|msn|duckduckbot|teoma|slurp|yandex/i.test(navigator.userAgent)))) {
                                                    applyFilter(filter);
                                                }
                                                if (filter.type === 'referrer' && ((this.referrer && (new RegExp(filter.value)).test(this.referrer)) || (document.referrer && (new RegExp(filter.value)).test(document.referrer)))) {
                                                    applyFilter(filter);
                                                }
                                                if (filter.type === 'path' && (location.pathname && (new RegExp(filter.value)).test(location.pathname))) {
                                                    applyFilter(filter);
                                                }
                                                if (filter.type === 'function' && filter.value) {
                                                    try {
                                                        const matches = !!eval(filter.value);
                                                        if (matches) {
                                                            applyFilter(filter);
                                                        }
                                                    } catch (err) {
                                                        log.debug(err);
                                                    }
                                                }
                                                if (filter.type === 'userAgent' && (navigator.userAgent && (new RegExp(filter.value)).test(navigator.userAgent))) {
                                                    applyFilter(filter);
                                                }
                                                if (filter.type === 'host' && (location.hostname && (new RegExp(filter.value)).test(location.hostname))) {
                                                    applyFilter(filter);
                                                }
                                                if (filter.type === 'utmSource' && window.location.search && window.location.search.indexOf('utm_source=' + filter.value) > -1) {
                                                    applyFilter(filter);
                                                }
                                                if (filter.type === 'utmMedium' && window.location.search && window.location.search.indexOf('utm_medium=' + filter.value) > -1) {
                                                    applyFilter(filter);
                                                }
                                                if (filter.type === 'utmCampaign' && window.location.search && window.location.search.indexOf('utm_campaign=' + filter.value) > -1) {
                                                    applyFilter(filter);
                                                }
                                            });
                                        }

                                        if (this.config.customCss) {
                                            const node = document.createElement('style');
                                            node.innerHTML = this.config.customCss + customCssOverrides;
                                            document.body.appendChild(node);
                                        }

                                        if (this.config.customJs) {
                                            try {
                                                eval(this.config.customJs);
                                            } catch (err) {
                                                log.debug(err);
                                            }
                                        }

                                        this.autoTriggerOptIn();

                                        this.initialized = true;
                                        this.initCalled = false;

                                        callback(false, true);

                                        // exit intent
                                        if (this.config.exitIntentOptIn) {
                                            import ('ouibounce').then(({
                                                default: ouibounce
                                            }) => {
                                                ouibounce(null, {
                                                    aggressive: true,
                                                    callback: () => {
                                                        let showExitIntent = true;
                                                        try {
                                                            const shownStr = localStorage.getItem('cleverpush-exit-intent-shown');
                                                            if (shownStr) {
                                                                const shownTime = parseInt(shownStr, INT_RADIX);
                                                                if (!isNaN(shownTime) && shownTime + (1000 * 60 * 60 * 24) > Date.now()) {
                                                                    showExitIntent = false;
                                                                }
                                                            }
                                                        } catch (ignored) {}

                                                        if (showExitIntent) {
                                                            if (this.config.exitIntentOncePerSession) {
                                                                localStorage.setItem('cleverpush-exit-intent-shown', Date.now() + '');
                                                            }
                                                            this.subscriptionManager.isSubscribed().then((subscribed) => {
                                                                if (!subscribed) {
                                                                    this.triggerOptIn(true);
                                                                }
                                                            });
                                                        }
                                                    }
                                                });
                                            });
                                        }

                                        if (isHost() && window.location.hash) {
                                            if (window.location.hash.indexOf('#cleverPushScroll=') === 0) {
                                                const split = window.location.hash.split('=');
                                                if (split.length > 1) {
                                                    const scrollPercent = parseInt(split[1].split('?')[0], INT_RADIX);
                                                    if (scrollPercent) {
                                                        window.scrollTo(0, scrollPercent);
                                                    }
                                                }
                                            }
                                        }

                                        // check for debug URL parameter
                                        if (isHost() && typeof URLSearchParams !== 'undefined') {
                                            if (location.search && location.search.length) {
                                                const params = new URLSearchParams(location.search.slice(1));

                                                if (params.get('cleverPushBypassInactiveFollowUps') === 'true') {
                                                    this.config.bypassInactiveFollowUps = true;
                                                }

                                                const importedSubscriptionId = params.get('cleverPushOnesignalSubscriptionId') || params.get('cleverPushAccengageSubscriptionId') || params.get('cleverPushImportedSubscriptionId') || localStorage.getItem('cleverpush-onesignal-subscription-id') || localStorage.getItem('cleverpush-imported-subscription-id');

                                                if (params.get('cleverPushDebugRedirect') === 'true') {
                                                    const subdomain = (this.config.subdomain || this.config.channelSubdomain);
                                                    if (subdomain) {
                                                        const status = {
                                                            worker: null,
                                                            workerScope: null,
                                                            notification: (window.Notification || {}).permission,
                                                            localStorage: {
                                                                'cleverpush-subscription-id': localStorage.getItem('cleverpush-subscription-id'),
                                                                'cleverpush-subscription-id-old': localStorage.getItem('cleverpush-subscription-id-old'),
                                                                'cleverpush-subscription-status': localStorage.getItem('cleverpush-subscription-status'),
                                                                'cleverpush-last-sync': localStorage.getItem('cleverpush-last-sync'),
                                                                'cleverpush-last-worker-update': localStorage.getItem('cleverpush-last-worker-update'),
                                                                'cleverpush-last-worker-version': localStorage.getItem('cleverpush-last-worker-version'),
                                                                'cleverpush-visits': localStorage.getItem('cleverpush-visits'),
                                                                'cleverpush-close-time': localStorage.getItem('cleverpush-close-time'),
                                                                'cleverpush-deny-time': localStorage.getItem('cleverpush-deny-time'),
                                                                'cleverpush-topics': localStorage.getItem('cleverpush-topics'),
                                                                'cleverpush-tags': localStorage.getItem('cleverpush-tags'),
                                                            }
                                                        };

                                                        const redirect = () => {
                                                            location.href = `https://${subdomain}.${this.config.cleverpushDomain || 'cleverpush.com'}/debug?status=${encodeURIComponent(JSON.stringify(status))}`;
                                                        };

                                                        let registrationCount = 0;
                                                        navigator.serviceWorker.getRegistrations().then((registrations) => {
                                                            if (!registrations.length) {
                                                                redirect();
                                                            }
                                                            registrations.forEach((registration, i) => {
                                                                const worker = this.subscriptionManager.getServiceWorker(registration);
                                                                registration.pushManager.getSubscription().then((subscription) => {

                                                                    status['worker' + i + 'Url'] = worker.scriptURL;
                                                                    status['worker' + i + 'Subscription'] = JSON.stringify(subscription);

                                                                    registrationCount += 1;
                                                                    if (registrationCount >= registrations.length) {
                                                                        redirect();
                                                                    }
                                                                }).catch(() => {
                                                                    registrationCount += 1;
                                                                    if (registrationCount >= registrations.length) {
                                                                        redirect();
                                                                    }
                                                                });
                                                            });
                                                        }).catch(redirect);
                                                    }
                                                } 
                                                else if (params.get('cleverPushSubscriptionIdAlert') === 'true') {
                                                    this.subscriptionManager.isSubscribed().then((subscribed) => {
                                                        if (subscribed) {
                                                            this.waitForSubscription().then((subscriptionId) => {
                                                                prompt('CleverPush Subscription ID:', subscriptionId);
                                                            });
                                                        } else {
                                                            alert('Dieser Browser ist keinem Push Abonnement zugeordnet.');
                                                        }
                                                    });
                                                } else if (params.get('cleverPushUnsubscribe') === 'true') {
                                                    const subdomain = (this.config.subdomain || this.config.channelSubdomain);
                                                    if (subdomain) {
                                                        this.subscriptionManager.getSubscriptionId().then((subscriptionId) => {
                                                            this.unsubscribe(() => {
                                                                location.href = `https://${subdomain}.${this.config.cleverpushDomain || 'cleverpush.com'}/unsubscribe?subscriptionId=${subscriptionId}`;
                                                            });
                                                        });
                                                    }
                                                } else if (params.get('cleverPushTestSubscription') === 'true') {
                                                    this.api.testSubscription = true;
                                                    this.subscriptionManager.sync().then(() => {
                                                        alert('Subscription has been successfully marked as Test Subscription.');
                                                    });
                                                } else if (params.get('cleverPushNotificationId')) {
                                                    this.subscriptionManager.setClickedNotification(params.get('cleverPushNotificationId'));
                                                    sessionStorage.setItem('cleverpush-notification-id', params.get('cleverPushNotificationId'));

                                                } else if (importedSubscriptionId) {
                                                    localStorage.setItem('cleverpush-imported-subscription-id', importedSubscriptionId);

                                                    this.waitForSubscription().then((subscriptionId) => {
                                                        if (subscriptionId && subscriptionId !== importedSubscriptionId) {
                                                            this.api.unsubscribe(importedSubscriptionId);
                                                            localStorage.removeItem('cleverpush-imported-subscription-id');
                                                            localStorage.removeItem('cleverpush-onesignal-subscription-id');
                                                        }
                                                    });
                                                } else if (params.get('cleverPushOptIn') === 'true') {
                                                    let tags;
                                                    if (params.get('cleverPushTags')) {
                                                        tags = params.get('cleverPushTags').split(',');
                                                        let existingText = 'Du hast dieses Thema bereits abonniert';
                                                        let keepText = 'Klicke auf [OK] um fortzufahren oder auf [Abbrechen] um dieses Thema zu deabonnieren.';
                                                        let successText = 'Du hast dieses Thema erfolgreich abonniert';

                                                        const notSubscribed = () => {
                                                            tags.forEach((tag) => {
                                                                this.tagSubscription(tag);
                                                            });
                                                            this.subscribe((err) => {
                                                                if (err && err.reason === 'denied') {
                                                                    if (this.subscriptionManager.confirm) {
                                                                        this.subscriptionManager.confirm.showBackdrop(undefined, 'denied', utilsTranslate('popup.info').formatCleverPush('<strong>' + (utilsTranslate('confirm.allowBrowser') || utilsTranslate('confirm.allow')) + '</strong>'));
                                                                    }
                                                                } else {
                                                                    alert(successText);
                                                                }
                                                            });
                                                        };

                                                        this.subscriptionManager.isSubscribed().then((subscribed) => {
                                                            if (subscribed) {
                                                                this.waitForSubscription().then(() => {
                                                                    this.subscriptionManager.storageManager.getTags().then((storedTags) => {
                                                                        if ((storedTags || []).filter(t => tags.indexOf(t) > -1).length >= tags.length) {
                                                                            if (!confirm(`${existingText}\n\n${keepText}`)) {
                                                                                tags.forEach((tag) => {
                                                                                    this.untagSubscription(tag);
                                                                                });
                                                                            }
                                                                        } else {
                                                                            alert(successText);
                                                                            tags.forEach((tag) => {
                                                                                this.tagSubscription(tag);
                                                                            });
                                                                        }
                                                                    });
                                                                });
                                                            } else {
                                                                notSubscribed();
                                                            }
                                                        }).catch(() => {
                                                            notSubscribed();
                                                        });

                                                    } else {
                                                        this.subscriptionManager.isSubscribed().then((subscribed) => {
                                                            if (subscribed) {
                                                                this.waitForSubscription().then(() => {
                                                                    this.subscriptionManager.storageManager.getTopics().then((storedTopics) => {
                                                                        const channelTopics = (this.config.channelTopics || []).filter((topic) => {
                                                                            let show = true;
                                                                            if (show && topic.matchPath && topic.matchPath.length) {
                                                                                show = new RegExp(topic.matchPath).test(window.parent.location.pathname);
                                                                            }
                                                                            if (show && topic.notMatchPath && topic.notMatchPath.length) {
                                                                                show = !(new RegExp(topic.notMatchPath).test(window.parent.location.pathname));
                                                                            }
                                                                            return show;
                                                                        });

                                                                        if (this.config.confirmAlertHideChannelTopics || (storedTopics || []).length >= (channelTopics || []).length) {
                                                                            alert(utilsTranslate('confirm.alreadySubscribed'));
                                                                        } else {
                                                                            (this.config.alertLocalization || {}).title = utilsTranslate('confirm.selectTopics');
                                                                            (this.config.alertLocalization || {}).info = ' ';
                                                                            (this.config.alertLocalization || {}).allow = utilsTranslate('panel.save');
                                                                            if (this.confirm) {
                                                                                this.confirm.subscribedTopics = storedTopics;
                                                                            }
                                                                            this.triggerOptIn(true);
                                                                        }
                                                                    });
                                                                });
                                                            } else {
                                                                this.triggerOptIn(true, (err) => {
                                                                    if (err && err.reason === 'denied') {
                                                                        if (this.subscriptionManager.confirm) {
                                                                            this.subscriptionManager.confirm.showBackdrop(undefined, 'denied', utilsTranslate('popup.info').formatCleverPush('<strong>' + (utilsTranslate('confirm.allowBrowser') || utilsTranslate('confirm.allow')) + '</strong>'));
                                                                        }
                                                                    }
                                                                });
                                                            }
                                                        }).catch((err) => {
                                                            this.triggerOptIn(true, (err) => {
                                                                if (err && err.reason === 'denied') {
                                                                    if (this.subscriptionManager.confirm) {
                                                                        this.subscriptionManager.confirm.showBackdrop(undefined, 'denied', utilsTranslate('popup.info').formatCleverPush('<strong>' + (utilsTranslate('confirm.allowBrowser') || utilsTranslate('confirm.allow')) + '</strong>'));
                                                                    }
                                                                }
                                                            });
                                                        });
                                                    }
                                                } else if (params.get('cleverPushShowBell') === 'true') {
                                                    this.config.hideNotificationBellSubscribed = false;
                                                    this.config.hideNotificationBellMobile = false;
                                                    this.config.showNotificationBell = true;
                                                }

                                                if (params.get('cleverPushReferralSubscriptionId') && !sessionStorage.getItem('cleverpush-referral-subscription-id')) {
                                                    sessionStorage.setItem('cleverpush-referral-subscription-id', params.get('cleverPushReferralSubscriptionId'));
                                                }

                                                const clickedFollowUpCampaignId = params.get('cleverPushFollowUpCampaignId') || sessionStorage.getItem('cleverPushFollowUpCampaignId');
                                                if (clickedFollowUpCampaignId) {
                                                    sessionStorage.setItem('cleverPushFollowUpCampaignId', clickedFollowUpCampaignId);
                                                    this.config.clickedFollowUpCampaignId = clickedFollowUpCampaignId;
                                                }

                                                const cleverPushVoucherCode = params.get('cleverPushVoucherCode');
                                                if (cleverPushVoucherCode) {
                                                    import ('./pageBanner').then(({
                                                        default: PageBanner
                                                    }) => {
                                                        this.config.cleverPushVoucherCode = cleverPushVoucherCode;
                                                        const voucherNotificationObj = {
                                                            title: utilsTranslate('voucherpool.title'),
                                                            text: utilsTranslate('voucherpool.text')
                                                        };
                                                        const followupNotification = new PageBanner(voucherNotificationObj, this.config, this.subscriptionManager, this.api, 'voucher');
                                                        followupNotification.show();
                                                    });
                                                }
                                            }

                                            if (location.hash && location.hash.indexOf('#?') === 0) {
                                                const hashParams = new URLSearchParams(location.hash.slice(2));
                                                const notificationId = hashParams.get('cleverPushNotificationId');
                                                if (notificationId) {
                                                    this.subscriptionManager.setClickedNotification(notificationId);
                                                    sessionStorage.setItem('cleverpush-notification-id', notificationId);
                                                }
                                            }
                                        } else if (sessionStorage.getItem('cleverPushFollowUpCampaignId')) {
                                            this.config.clickedFollowUpCampaignId = sessionStorage.getItem('cleverPushFollowUpCampaignId');
                                        }

                                        this.initFollowUpCampaigns();


                                        // Session Notification Tracking
                                        if (this.config.trackNotificationSessions) {
                                            try {
                                                this.waitForSubscription().then((subscriptionId) => {
                                                    const notificationId = typeof sessionStorage !== 'undefined' ? sessionStorage.getItem('cleverpush-notification-id') : undefined;
                                                    if (notificationId) {
                                                        this.api.trackSessionImpression(subscriptionId, notificationId);
                                                    }
                                                });
                                            } catch (err) {
                                                log.warn(err);
                                            }
                                        }

                                        // Optionally set location change interval. No listener is possible, the only way is an interval.
                                        // This can be enabled manually by CleverPush if the user is using some JS router (like Angular, React)
                                        // and we need to hook into URL changes
                                        let currentPathname = location.pathname;
                                        if (this.config.detectLocationIntervalEnabled) {
                                            setInterval(() => {
                                                if (location.pathname !== currentPathname) {
                                                    log.debug('Location change detected');
                                                    this.initFollowUpCampaigns();
                                                    this.initConversions();
                                                    currentPathname = location.pathname;
                                                }
                                            }, 250);
                                        }
                                    });
                                });
                            };

                            if (this.config.initSdkBeforeOnLoad || true) {
                                domReady().then(initSdk).catch((err) => {
                                    callback(err);
                                });
                            } else {
                                domLoaded().then(initSdk).catch((err) => {
                                    callback(err);
                                });
                            }
                        }).catch((compatibilityError) => {
                            // page banners are always shown, even if push is not supported
                            this.initPageBanners();

                            const hideUnsupportedContainers = document.querySelectorAll('.cleverpush-hide-unsupported');
                            for (let i = 0; i < hideUnsupportedContainers.length; i += 1) {
                                const hideUnsupportedContainer = hideUnsupportedContainers[i];
                                hideUnsupportedContainer.style.display = 'none';
                            }

                            compatibilityError.warn = true;
                            callback(compatibilityError);
                        });
                    }).catch((err) => {
                        callback(err);
                    });
                } else if (isIframe(configParam) || isPopup(configParam) || configParam.env === 'POPUP') {
                    this.config = configParam;

                    if (typeof URLSearchParams !== 'undefined' && location.search && location.search.length) {
                        const params = new URLSearchParams(location.search.slice(1));
                        if (params.get('confirmAlertTestId')) {
                            this.config.confirmAlertTestId = params.get('confirmAlertTestId');
                            this.api.setConfirmAlertTestId(this.config.confirmAlertTestId);
                        }
                    }

                    initSubscriptionManager();

                    log.debug('Init done');

                    this.initialized = true;
                    this.initCalled = false;

                    callback(false, true);
                }
            }
        }
    }

    autoTriggerOptIn() {
        // we need to cache this here, because if called inside checkVisits the value will be too high.
        const storageManagerVisits = this.subscriptionManager.storageManager.getVisits();

        let optInTriggered = false;
        const optIn = () => {
            if (optInTriggered) {
                return;
            }
            optInTriggered = true;

            const checkVisits = () => {
                if (storageManagerVisits >= this.config.alertMinimumVisits) {
                    setTimeout(() => {
                        if (this.config.preventDuplicateOptIns && this.config.androidPackageName && 'getInstalledRelatedApps' in navigator) {
                            navigator.getInstalledRelatedApps().then((relatedApps) => {
                                let foundApp = false;
                                if (relatedApps) {
                                    relatedApps.forEach((app) => {
                                        if (app.id === this.config.androidPackageName) {
                                            foundApp = true;
                                        }
                                    });
                                }
                                if (!foundApp) {
                                    sessionStorage.setItem('cleverpush-alert-shown', 'true');
                                    this.triggerOptIn();
                                }
                            });
                        } else {
                            sessionStorage.setItem('cleverpush-alert-shown', 'true');
                            this.triggerOptIn();
                        }
                    }, this.config.alertTimeout);

                    if (!this.optInVisitorTracked) {
                        this.subscriptionManager.canSubscribe().then((canSubscribe) => {
                            if (canSubscribe === true && !this.optInVisitorTracked) {
                                this.optInVisitorTracked = true;
                                this.api.trackOptInVisitor();
                            }
                        }).catch((err) => {
                            // ignored
                        });
                    }
                }
            };

            if (this.config.alertOncePerSession) {
                if (sessionStorage.getItem('cleverpush-alert-shown') !== 'true') {
                    checkVisits();
                }
            } else {
                checkVisits();
            }
        };

        const optInReady = () => {
            if (this.config.optInWaitForTcfDecision && typeof __tcfapi === 'function') {
                let tcfOptInFired = false;

                const tcfOptIn = () => {
                    if (this.config.tcfRequireVendorConsent && this.config.tcfVendorId) {
                        __tcfapi('getCustomVendorConsents', 2, (vendorConsents) => {
                            if (vendorConsents.grants[this.config.tcfVendorId].vendorGrant) {
                                tcfOptInFired = true;
                                log.debug('__tcfapi has vendor consent, starting opt in', vendorConsents);
                                optIn();
                            } else {
                                log.debug('__tcfapi no vendor consent!', vendorConsents);
                            }
                        });
                    } else {
                        tcfOptInFired = true;
                        optIn();
                    }
                };

                __tcfapi('getTCData', 2, (tcData, success) => {
                    log.debug('__tcfapi getTCData', tcData);

                    if (success && tcData.tcString && tcData.eventStatus !== 'cmpuishown') {
                        tcfOptIn();
                    } else {
                        __tcfapi('addEventListener', 2, (tcData) => {
                            log.debug('__tcfapi tcData event', tcData);
                            if (!tcfOptInFired && tcData.tcString && tcData.eventStatus !== 'cmpuishown') {
                                tcfOptIn();
                            }
                        });
                    }
                });
            } else {
                if (this.config.optInWaitForTcfDecision) {
                    log.debug('__tcfapi not found');
                }
                optIn();
            }
        }

        // automatically trigger opt-in, if enabled
        if (this.config.autoRegister) {
            if (this.config.env === 'PREVIEW') {
                this.triggerOptIn();

            } else {
                if (!isNaN(this.config.alertScrollPercentage) && this.config.alertScrollPercentage > 0) {
                    let scrollListener;
                    const checkScroll = () => {
                        if (getScrollPercentage() >= this.config.alertScrollPercentage) {
                            window.removeEventListener('scroll', scrollListener);
                            optInReady();
                        }
                    };
                    scrollListener = window.addEventListener('scroll', checkScroll);
                    // initial check
                    checkScroll();
                } else {
                    optInReady();
                }

                if (this.config.alertMinimumVisits && this.config.alertMinimumVisits > 0) {
                    // only increment visits if we need to (for triggering opt-in)
                    this.subscriptionManager.storageManager.incrementVisits();
                }
            }
        }

        if (this.config.showConfirmAlert && this.config.disableConfirmAlertSearchTraffic) {
            if (this.referrer && /google|bing|yahoo|baidu|duckduckgo|wolframalpha/.test(this.referrer)) {
                this.config.showConfirmAlert = false;
            }
        }

        this.on(Event.PERMISSION_RE_GRANTED, () => {
            if (this.config.autoRegister) {
                optInReady();
            }
        });
    }

    initHttpIframe(config) {
        logMethodCall('initHttpIframe', config);

        this.init(config);
    }

    initWidget(config) {
        logMethodCall('initWidget', config);

        this.init(Object.assign({}, config, {
            env: 'WIDGET'
        }));
    }

    initHttpPopup(config) {
        logMethodCall('initHttpPopup', config);

        config.env = 'POPUP';

        if (browser.name === 'Firefox' && browserVersion >= 72) {
            config.showConfirmAlert = true;
            config.showConfirmAlertForce = true;
        }

        if (config.loadConfigFromParent) {
            config.loadConfig = false;
        }

        log.debug('initHttpPopup calling init…');

        this.init(config, (err) => {
            if (err) {
                log.error('initHttpPopup err', err);

                const statusDiv = document.getElementById('status');
                if (statusDiv) {
                    statusDiv.innerText = err.message || err.reason || err;
                } else if (window.opener) {
                    window.close();
                } else {
                    history.back();
                }
            } else {
                // Firefox 72: Push notification prompting can only be done from a user gesture
                if (browser.name === 'Firefox' && browserVersion >= 72) {
                    import ('./confirm').then(({
                        default: Confirm
                    }) => {
                        log.debug('showConfirmAlert = true 5');
                        this.config.showConfirmAlert = true;
                        this.config.showConfirmAlertForce = true;
                        this.confirm = new Confirm(this, this.subscriptionManager);
                        this.subscriptionManager.setConfirm(this.confirm);
                        domLoaded().then(() => {
                            this.confirm.appendConfirmBox(`${this.config.confirmAlertNativeTheme} ${this.config.confirmAlertNativeTheme}-native`);


                            if (this.confirm.denyButton) {
                                this.confirm.denyButton.style.display = 'none';
                            }
                            const confirmInfo = this.confirm.confirmBox.querySelector('.cleverpush-confirm-info');
                            if (confirmInfo) {
                                confirmInfo.style.display = 'none';
                            }
                        });
                    });
                }

                window.onbeforeunload = () => utilsTranslate('windowclose.confirm');
            }
        });
    }

    initContentButtons() {
        return this.initWidgets();
    }

    initWidgets() {
        logMethodCall('initWidgets');

        this.widgets = this.widgets || [];

        (this.config.widgets || []).filter(w => w.autoAppendType === 'selector').forEach((widget) => {
            try {
                if (widget.autoAppendPath) {
                    if (!new RegExp(widget.pageBannerMatchPath).test(window.location.pathname)) {
                        return;
                    }
                }
                if (widget.autoAppendSelector) {
                    const target = document.querySelector(widget.autoAppendSelector);
                    if (target) {
                        const widgetDiv = document.createElement('div');
                        widgetDiv.className = 'cleverpush-widget';
                        widgetDiv.dataset.id = widget._id;
                        if (!widget.autoAppendPosition || widget.autoAppendPosition === 'top') {
                            target.insertBefore(widgetDiv, target.firstChild);
                        } else if (widget.autoAppendPosition === 'bottom') {
                            target.appendChild(widgetDiv);
                        }
                    }
                }
            } catch (e) {
                log.warn('Failed appending widget', e);
            }
        });

        const widgets = document.querySelectorAll('.cleverpush-content-button, .cleverpush-widget');
        if (widgets.length) {
            import ('./widget').then(({
                default: Widget
            }) => {
                for (let i = 0; i < widgets.length; i += 1) {
                    const element = widgets[i];
                    const widget = new Widget(i, element, this.config, this.subscriptionManager, this.api);

                    this.on(Event.SUBSCRIBED, () => {
                        // use show instead of reset to re-paint topics
                        widget.show(true);
                    });
                    this.on(Event.TOPICS_SET, () => {
                        widget.show(true);
                    });
                    this.on(Event.UNSUBSCRIBED, () => {
                        widget.show(false);
                    });

                    this.waitForInit().then(() => {
                        this.subscriptionManager.isSubscribed().then((isSubscribed) => {
                            widget.show(isSubscribed);

                            // track confirm alert only when widget is visible
                            if (widget.elementConfig.id && widget.element) {
                                if (isInViewport(widget.element)) {
                                    widget.trackShown();
                                } else {
                                    const enterViewportListener = () => {
                                        if (isInViewport(widget.element)) {
                                            window.removeEventListener('scroll', enterViewportListener);
                                            widget.trackShown();
                                        }
                                    };
                                    window.addEventListener('scroll', enterViewportListener, false);
                                }
                            }
                        });
                    });

                    this.widgets.push(widget);
                }
            });
        }
    }

    initMultiPlatformWidgets() {
        logMethodCall('initMultiPlatformWidgets');

        this.multiPlatformWidgets = this.multiPlatformWidgets || [];

        const widgets = document.querySelectorAll('.cleverpush-multi-platform-widget');
        if (widgets.length) {
            import ('./multiPlatformWidget').then(({
                default: MultiPlatformWidget
            }) => {
                for (let i = 0; i < widgets.length; i += 1) {
                    const element = widgets[i];

                    const widget = new MultiPlatformWidget(i, element, this.config, this.subscriptionManager, this.api);

                    this.on(Event.SUBSCRIBED, () => {
                        widget.reset(this.browserType !== 'facebook', true);
                    });
                    this.on(Event.UNSUBSCRIBED, () => {
                        widget.reset(this.browserType !== 'facebook', false);
                    });

                    this.waitForInit().then(() => {
                        if (element && element.dataset && element.dataset.platform === 'web-push' && this.browserType === 'facebook') {
                            widget.show(false, false);
                            return;
                        }

                        widget.subscriptionManager = this.subscriptionManager;
                        this.subscriptionManager.isSubscribed().then((isSubscribed) => {
                            widget.show(this.browserType !== 'facebook', isSubscribed);
                        }).catch(() => {
                            widget.show(this.browserType !== 'facebook', false);
                        });
                    }).catch(() => {
                        widget.show(false, false);
                    });

                    this.multiPlatformWidgets.push(widget);
                }
            });
        }
    }

    initTagButtons() {
        logMethodCall('initTagButtons');

        this.tagButtons = this.tagButtons || [];

        const tagButtons = document.querySelectorAll('.cleverpush-tag-button');
        if (tagButtons.length) {
            import ('./tagButton').then(({
                default: TagButton
            }) => {
                for (let i = 0; i < tagButtons.length; i += 1) {
                    const element = tagButtons[i];
                    const tagButton = new TagButton(i, element, this.config, this.subscriptionManager, this.api, this.triggerOptIn.bind(this));

                    this.on(Event.SUBSCRIBED, () => {
                        tagButton.reset(true);
                    });
                    this.on(Event.UNSUBSCRIBED, () => {
                        tagButton.reset(false);
                    });

                    this.tagButtons.push(tagButton);
                }
            });
        }
    }

    initTopicButtons() {
        logMethodCall('initTopicButtons');

        this.topicButtons = this.topicButtons || [];

        const topicButtons = document.querySelectorAll('.cleverpush-topic-button');
        if (topicButtons.length) {
            import ('./topicButton').then(({
                default: TopicButton
            }) => {
                for (let i = 0; i < topicButtons.length; i += 1) {
                    const element = topicButtons[i];
                    const topicButton = new TopicButton(i, element, this.config, this.subscriptionManager, this.api, this.triggerOptIn.bind(this));

                    this.on(Event.SUBSCRIBED, () => {
                        topicButton.reset(true);
                    });
                    this.on(Event.TOPICS_SET, () => {
                        topicButton.init();
                    });
                    this.on(Event.UNSUBSCRIBED, () => {
                        topicButton.reset(false);
                    });

                    this.topicButtons.push(topicButton);
                }
            });
        }
    }

    initPageBanners() {
        logMethodCall('initPageBanners');

        this.pageBanners = this.pageBanners || [];

        let storageManager;
        if (this.subscriptionManager && this.subscriptionManager.storageManager) {
            storageManager = this.subscriptionManager.storageManager;
        }

        (this.config.pageBannerNotifications || []).reduce((op, notification) => op.then(filteredNs => new Promise((resolve) => {
            if (storageManager) {
                storageManager.getNotification(notification._id).then((dbNotification) => {
                    if (dbNotification) {
                        resolve(filteredNs);
                    } else {
                        resolve(filteredNs.concat(notification));
                    }
                }).catch(() => {
                    resolve(filteredNs.concat(notification));
                });
            } else {
                resolve(filteredNs.concat(notification));
            }
        })), Promise.resolve([])).then((filteredNotifications) => {
            if (filteredNotifications.length) {
                import ('./pageBanner').then(({
                    default: PageBanner
                }) => {
                    filteredNotifications.forEach((notification) => {
                        const pageBanner = new PageBanner(notification, this.config, this.subscriptionManager, this.api);
                        if (
                            (!notification.scheduledAt || (notification.scheduledAt && notification.scheduledAt < new Date())) &&
                            (!notification.expiresAt || notification.expiresAt > new Date())
                        ) {
                            let show = true;
                            if (show && notification.pageBannerMatchPath) {
                                show = new RegExp(notification.pageBannerMatchPath).test(window.location.pathname);
                            }
                            if (show && notification.pageBannerNotMatchPath) {
                                show = !(new RegExp(notification.pageBannerNotMatchPath).test(window.location.pathname));
                            }
                            if (show) {
                                pageBanner.show();

                                if (storageManager) {
                                    pageBanner.onClickCallback = () => storageManager.addNotification({
                                        id: notification._id,
                                        url: notification.url,
                                        title: notification.title,
                                        text: notification.text,
                                        icon: notification.iconUrl,
                                        media: notification.mediaUrl,
                                        autoHide: notification.autoHide,
                                        subscriptionId: '',
                                        channelId: this.config.channelId,
                                        scheduledAt: notification.scheduledAt,
                                        createdAt: notification.createdAt,
                                        expiresAt: notification.expiresAt,
                                        clicked: 0,
                                        markedAsDelivered: 1
                                    });
                                }
                            }
                        }
                        this.pageBanners.push(pageBanner);
                    });
                });
            }
        });

        // adblock page banner
        if (this.config.pageBannerAdblockEnabled) {
            detectAdblock((detected) => {
                if (detected) {
                    log.debug('AdBlock detected');

                    import ('./pageBanner').then(({
                        default: PageBanner
                    }) => {
                        const pageBanner = new PageBanner({
                            id: 'adblockNotification',
                            title: this.config.pageBannerAdblockTitle || '',
                            text: this.config.pageBannerAdblockText || '',
                            url: this.config.pageBannerAdblockUrl
                        }, this.config, this.subscriptionManager, this.api);
                        pageBanner.show();
                    });
                }
            });
        }
    }

    initChatWidget() {
        if (!window.cleverpushChatLoaded && this.config.displayChatWidget && this.config.chatWidgetPath && new RegExp(this.config.chatWidgetPath).test(location.pathname)) {
            const script = document.createElement('script');
            script.src = 'https://static.cleverpush.com/sdk/cleverpush-chat.js';
            document.head.appendChild(script);
        }
    }

    initWebBanners() {
        logMethodCall('initWebBanners');

        const storageKey = 'cleverpush-webbanners-shown';

        const shownWebBannersStorage = localStorage.getItem(storageKey);
        let shownWebBanners;
        if (shownWebBannersStorage) {
            try {
                shownWebBanners = JSON.parse(shownWebBannersStorage);
            } catch (ignored) {}
        }
        if (!shownWebBanners) {
            shownWebBanners = [];
        }
        const shownWebBannersSessionStorage = sessionStorage.getItem(storageKey);
        if (shownWebBannersSessionStorage) {
            try {
                shownWebBanners = shownWebBanners.concat(JSON.parse(shownWebBannersSessionStorage));
            } catch (ignored) {}
        }

        this.webBanners = this.webBanners || [];

        let storageManager;
        if (this.subscriptionManager && this.subscriptionManager.storageManager) {
            storageManager = this.subscriptionManager.storageManager;
        }

        let hasExitIntent = false;

        let shownBanner = false;
        const banners = (this.config.webBanners || []).filter(banner => !shownWebBanners.includes(banner._id) && banner.status !== 'draft');
        if (banners.length) {
            import ('./webBanner').then(({
                default: WebBanner
            }) => {
                banners.forEach((banner) => {
                    const webBanner = new WebBanner(banner, this.config, this.subscriptionManager, this.api);
                    if (
                        (!banner.startsAt || (new Date(banner.startsAt) < new Date())) &&
                        (!banner.endsAt || new Date(banner.endsAt) > new Date())
                    ) {
                        if (banner.exitIntent) {
                            if (hasExitIntent) {
                                return;
                            }
                            hasExitIntent = true;
                            import ('ouibounce').then(({
                                default: ouibounce
                            }) => {
                                ouibounce(null, {
                                    aggressive: true,
                                    callback: () => {
                                        webBanner.show();
                                        shownWebBanners.push(banner._id);
                                        if (banner.frequency === 'once') {
                                            localStorage.setItem(storageKey, JSON.stringify(shownWebBanners));
                                        } else if (banner.frequency === 'oncePerSession') {
                                            sessionStorage.setItem(storageKey, JSON.stringify(shownWebBanners));
                                        }
                                    }
                                });
                            });

                        } else {
                            const getShowBanner = () => {
                                let show = !shownBanner;
                                if (show && banner.matchPath) {
                                    show = new RegExp(banner.matchPath).test(window.location.pathname);
                                }
                                if (show && banner.notMatchPath) {
                                    show = !(new RegExp(banner.notMatchPath).test(window.location.pathname));
                                }
                                if (show && banner.matchDomain) {
                                    show = !(new RegExp(banner.matchDomain).test(window.location.hostname || window.location.host));
                                }
                                if (show && banner.matchQuery) {
                                    Object.keys(banner.matchQuery || {}).forEach((query) => {
                                        if (banner.matchQuery[query]) {
                                            show = show && window.location.search && window.location.search.indexOf(query + '=' + banner.matchQuery[query]) > -1;
                                        }
                                    });
                                }

                                if (show && banner.minimumVisits) {
                                    const visitsStr = localStorage.getItem('cleverpush-banner-' + banner._id + '-visits');
                                    let visits = 0;
                                    if (visitsStr) {
                                        try {
                                            const visitsInt = parseInt(visitsStr, INT_RADIX);
                                            if (!isNaN(visitsInt)) {
                                                visits = parseInt(visitsInt, INT_RADIX);
                                            }
                                        } catch (ignored) {}
                                    }
                                    visits += 1;
                                    localStorage.setItem('cleverpush-banner-' + banner._id + '-visits', visits + '');
                                    show = show && visits >= banner.minimumVisits;
                                }

                                if (show && !isNaN(banner.trafficPercentage) && banner.trafficPercentage > 0 && banner.trafficPercentage < 100) {
                                    show = (banner.trafficPercentage / 100) > Math.random();
                                }

                                const finalizeShow = () => {
                                    const promises = [Promise.resolve(show)];
                                    const isTrue = a => a;
                                    const allTrue = values => values.every(isTrue);
                                    const choose = (logic) => {
                                        switch (logic) {
                                            case 'and':
                                                return 'every';
                                            case 'or':
                                                return 'some';
                                            default:
                                                return 'some';
                                        }
                                    };

                                    if (banner.showOnlySubscribers) {
                                        promises.push(new Promise(this.isSubscribed));
                                    }

                                    if (banner.topics && banner.topics.length > 0) {
                                        const res = new Promise(resolve => this.getTopics((_null, topics) => {
                                            resolve(banner.topics[choose(banner.topicsLogic)](topic => topics.includes(topic)));
                                        }));
                                        promises.push(res);
                                    }

                                    if (banner.tags && banner.tags.length > 0) {
                                        const hasTag = tag => new Promise(resolve => this.hasTag(tag, resolve));
                                        const res = Promise.all(banner.tags.map(hasTag))
                                            .then(values => values[choose(banner.tagsLogic)](isTrue));
                                        promises.push(res);
                                    }

                                    return Promise.all(promises).then(allTrue);
                                };

                                return new Promise((resolve) => {
                                    if (show && !isNaN(banner.scrollPercentage) && banner.scrollPercentage > 0) {
                                        let scrollListener;
                                        const checkScroll = () => {
                                            if (getScrollPercentage() >= banner.scrollPercentage) {
                                                window.removeEventListener('scroll', scrollListener);
                                                finalizeShow().then(resolve);
                                            }
                                        };
                                        scrollListener = window.addEventListener('scroll', checkScroll);
                                        checkScroll();
                                    } else {
                                        finalizeShow().then(resolve);
                                    }
                                });
                            };

                            getShowBanner().then((show) => {
                                if (show) {
                                    setTimeout(() => {
                                        webBanner.show();
                                        shownWebBanners.push(banner._id);

                                        if (banner.frequency === 'once') {
                                            localStorage.setItem(storageKey, JSON.stringify(shownWebBanners));
                                        } else if (banner.frequency === 'oncePerSession') {
                                            sessionStorage.setItem(storageKey, JSON.stringify(shownWebBanners));
                                        }
                                    }, (banner.timeout || 0) * 1000);
                                }
                            });
                        }
                    }
                    this.webBanners.push(webBanner);
                });
            });
        }

        if (typeof URLSearchParams !== 'undefined' && location.search && location.search.length) {
            const params = new URLSearchParams(location.search.slice(1));
            if (params.get('cleverPushWebBannerId')) {
                const banner = (this.config.webBanners || []).find(b => b._id === params.get('cleverPushWebBannerId'));
                if (banner) {
                    import ('./webBanner').then(({
                        default: WebBanner
                    }) => {
                        const webBanner = new WebBanner(banner, this.config, this.subscriptionManager, this.api);
                        webBanner.show();

                        if (!this.webBanners) {
                            this.webBanners = [];
                        }
                        this.webBanners.push(webBanner);
                    });
                } else {
                    log.warn('cleverPushWebBannerId parameter given but banner with that ID could not be found');
                }
            }
        }

        // App Download Smart Banners
        if (this.config.appDownloadBannerEnabled && ((this.config.appDownloadBannerAndroidId && os.name === 'Android') || (this.config.appDownloadBannerAppleId && os.name === 'iOS'))) {
            if (this.config.appDownloadBannerAndroidId) {
                const meta = document.createElement('meta');
                meta.name = 'google-play-app';
                meta.content = 'app-id=' + this.config.appDownloadBannerAndroidId;
                document.head.appendChild(meta);

                let androidIcon = document.querySelector('link[rel="android-touch-icon"]');
                if (!androidIcon) {
                    androidIcon = document.createElement('link');
                    androidIcon.rel = 'android-touch-icon';
                    androidIcon.href = this.config.channelIcon;
                    document.head.appendChild(androidIcon);
                }
            }

            if (this.config.appDownloadBannerAppleId) {
                const meta = document.createElement('meta');
                meta.name = 'apple-itunes-app';
                meta.content = 'app-id=' + this.config.appDownloadBannerAppleId;
                document.head.appendChild(meta);

                let appleIcon = document.querySelector('link[rel="apple-touch-icon"]');
                if (!appleIcon) {
                    appleIcon = document.createElement('link');
                    appleIcon.rel = 'apple-touch-icon';
                    appleIcon.href = this.config.channelIcon;
                    document.head.appendChild(appleIcon);
                }
            }

            const bannerStyle = document.createElement('link');
            bannerStyle.rel = 'stylesheet';
            bannerStyle.href = 'https://cdnjs.cloudflare.com/ajax/libs/smart-app-banner/2.0.0/smart-app-banner.css';
            document.head.appendChild(bannerStyle);

            const bannerScript = document.createElement('script');
            bannerScript.async = true;
            bannerScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/smart-app-banner/2.0.0/smart-app-banner.js';
            bannerScript.onload = () => {
                new SmartBanner({
                    daysHidden: 15, // days to hide banner after close button is clicked (defaults to 15)
                    daysReminder: 90, // days to hide banner after "VIEW" button is clicked (defaults to 90)
                    title: this.config.appDownloadBannerTitle || '',
                    author: this.config.appDownloadBannerAuthor || '',
                    button: 'DOWNLOAD',
                    store: {
                        ios: 'App Store',
                        android: 'Google Play',
                        windows: 'Windows store'
                    },
                    price: {
                        ios: 'GRATIS',
                        android: 'GRATIS',
                        windows: 'GRATIS'
                    }
                });
            };
            document.head.appendChild(bannerScript);
        }
    }

    initTags() {
        this.subscriptionManager.storageManager.getTags().then((storedTags) => {
            const tags = this.config.channelTags;
            checkTags(tags, storedTags, this.tagSubscription.bind(this), this.waitForSubscription.bind(this), location.pathname);
        });
    }

    /**
     * Show the topic layer for one topic
     * @param {*} topicParam Topic ID or Object
     * @param {*} optionsParam Options which can have `frequencyCappingVisits` setting
     */
    showTopicLayer(topicParam, optionsParam) {
        this.waitForSubscription().then(() => {
            this.subscriptionManager.storageManager.getTopics().then((storedTopics) => {
                const topics = this.config.channelTopics || [];
                const topic = typeof topicParam === 'string' ? topics.find(t => t._id === topicParam) : topicParam;
                if (!topic) {
                    return;
                }

                // User already has subscribed to topic
                if (storedTopics.includes(topic._id)) {
                    return;
                }

                const topicLayerShownKey = 'cleverpush-topic-layerShown-' + topic._id;
                const visitsStorageKey = 'cleverpush-topic-layer-visits-' + topic._id;

                // If options.frequencyCappingVisits is given and user has already seen layer before:
                // wait until minimum visis are reached
                let frequencyCappingVisits;
                if (typeof optionsParam !== 'undefined' && optionsParam.frequencyCappingVisits) {
                    frequencyCappingVisits = optionsParam.frequencyCappingVisits;
                    const layerShown = localStorage.getItem(topicLayerShownKey) === 'true';
                    if (layerShown) {
                        const currentVisits = parseInt(localStorage.getItem(visitsStorageKey), INT_RADIX) || 0;
                        // increment visits (localStorage only accepts strings)
                        localStorage.setItem(visitsStorageKey, (currentVisits + 1) + '');
                        // if visits are lower then minimum needed visits, exit here
                        if (currentVisits < frequencyCappingVisits) {
                            return;
                        } else {
                            localStorage.removeItem(visitsStorageKey);
                        }
                    }
                }

                logMethodCall('showTopicLayer', topicParam);

                // I18n for the layer
                const customLocalization = {
                    title: topic.layerTitle || `Möchtest du Neuigkeiten zu ${topic.name} erhalten?`,
                    deny: topic.layerDenyText ||  'Nein',
                    allow: topic.layerAllowText ||  'Ja',
                    info: ' '
                };
                Object.keys(customLocalization).forEach((key) => {
                    if (typeof customLocalization[key] === 'undefined') {
                        delete customLocalization[key];
                    }
                });

                const hasChildTopics = topics.filter(t => t.parentTopic === topic._id).length > 0;
                const layerTheme = this.config.layerTheme || this.config.confirmAlertSelectTopicsLaterTheme || 'cleverpush-confirm-default';

                this.subscriptionManager.confirm.appendConfirmBox(layerTheme, hasChildTopics, {
                    topicsLayer: true,
                    customLocalization,
                    parentTopic: topic._id,
                    topicsRadioButtons: topic.childTopicsRadioButtons,
                    topicsRequired: topic.childTopicsRequired
                }, (allowed, selectedTopics) => {
                    if (allowed && selectedTopics) {
                        this.setTopics([...storedTopics, ...selectedTopics, topic._id]);
                        localStorage.setItem(topicLayerShownKey, 'true');
                    } else if (!frequencyCappingVisits) {
                        sessionStorage.setItem(topicLayerShownKey, 'true');
                    } else {
                        localStorage.setItem(topicLayerShownKey, 'true');
                    }
                });
            });
        });
    }

    initTopics() {
        this.waitForSubscription().then(() => {
            this.subscriptionManager.storageManager.getTopics().then((storedTopics) => {
                const topics = this.config.channelTopics;
                if (topics && topics.length && typeof localStorage !== 'undefined') {
                    let topicFound = false;
                    topics.forEach((topic) => {
                        const topicLayerShownKey = 'cleverpush-topic-layerShown-' + topic._id;
                        const visitsStorageKey = 'cleverpush-topic-layer-visits-' + topic._id;

                        let topicMatches = topic.layerMatchPath && new RegExp(topic.layerMatchPath).test(location.pathname);
                        if (topic.layerFunction && topicMatches) {
                            try {
                                topicMatches = !!eval(topic.layerFunction);
                            } catch (err) {
                                log.debug(err);
                            }
                        }

                        if (topic.layerEnabled && localStorage.getItem(topicLayerShownKey) !== 'true' && sessionStorage.getItem(topicLayerShownKey) !== 'true' && storedTopics.indexOf(topic < -1) && topicMatches) {
                            if (topicFound) {
                                return;
                            }

                            const finalizeShow = () => {
                                this.showTopicLayer(topic);
                            };

                            const show = () => {
                                topicFound = true;

                                if (!isNaN(topic.layerScrollPercentage) && topic.layerScrollPercentage > 0) {
                                    let scrollListener;
                                    const checkScroll = () => {
                                        if (getScrollPercentage() >= topic.layerScrollPercentage) {
                                            window.removeEventListener('scroll', scrollListener);
                                            finalizeShow();
                                        }
                                    };
                                    scrollListener = window.addEventListener('scroll', checkScroll);
                                    checkScroll();
                                } else {
                                    finalizeShow();
                                }
                            };

                            const visitsNeeded = !isNaN(topic.layerMinimumVisits) ? topic.layerMinimumVisits : 0;
                            const visitsStorage = localStorage;
                            const visitsStr = visitsStorage.getItem(visitsStorageKey);
                            let visits = 0;
                            if (typeof visitsStr === 'string' && !isNaN(visitsStr)) {
                                visits = parseInt(visitsStr, INT_RADIX);
                            }
                            if (visits >= visitsNeeded) {
                                if (!isNaN(topic.layerTimeout) && topic.layerTimeout) {
                                    setTimeout(() => {
                                        show();
                                    }, topic.layerTimeout * 1000);
                                } else {
                                    show();
                                }
                            } else {
                                visits += 1;
                                visitsStorage.setItem(visitsStorageKey, visits.toString());
                            }
                        }
                    });
                }
            });
        });
    }

    triggerPathAndQuery(triggerPath) {
        const triggerPathSplit = triggerPath.indexOf('?!') > -1 ? [triggerPath] : triggerPath.split('?');
        let triggers = new RegExp(triggerPathSplit[0]).test(location.pathname);

        if (triggers && triggerPathSplit.length > 1) {
            if (typeof URLSearchParams !== 'undefined' && location.search && location.search.length) {
                const triggerParams = new URLSearchParams(triggerPathSplit[1]);
                const currentParams = new URLSearchParams(location.search.slice(1));
                triggerParams.forEach((value, key) => {
                    if (currentParams.get(key) !== value && value) {
                        triggers = false;
                    }
                });
            } else if (triggerPathSplit[1].length > 1) {
                triggers = false;
            }
        }

        return triggers;
    }

    initConversions() {
        (this.config.channelEvents || []).forEach((event) => {
            if (event && event._id) {
                if (event.triggerType === 'path' && event.triggerPath && this.triggerPathAndQuery(event.triggerPath)) {
                    this.trackConversion(event._id);
                } else if (event.triggerType === 'function' && event.triggerFunction) {
                    try {
                        const trigger = !!eval(event.triggerFunction);
                        if (trigger) {
                            if (event.amountFunction) {
                                try {
                                    const amount = eval(event.amountFunction);
                                    this.trackConversion(event._id, amount);
                                    return;
                                } catch (err) {
                                    log.debug(err);
                                }
                            }
                            this.trackConversion(event._id);
                        }
                    } catch (err) {
                        log.debug(err);
                    }
                }
            }
        });
    }

    initPiano() {
        onPianoEnabledChange(() => {
            if (this.subscriptionManager) {
                this.subscriptionManager.isSubscribed().then((isSubscribed) => {
                    if (isSubscribed) {
                        this.subscriptionManager.sync().then(() => {
                            log.debug('Piano Opt-Out');
                        });
                    }
                });
            }
        });
    }

    getNotificationPermission() {
        return this.waitForInit()
            .then(() => new Promise((resolve) => {
                if (this.config.ownDomain && location.protocol === 'https:') {
                    if (this.browserType === 'safari') {
                        if (this.config.safariWebsitePushId) {
                            resolve(window.safari.pushNotification.permission(this.config.safariWebsitePushId).permission);
                        } else {
                            log.debug('Safari website push ID is unknown.');
                        }
                    } else if (this.browserType === 'facebook') {
                        resolve('default');
                    } else {
                        resolve(window.Notification.permission);
                    }
                } else {
                    this.iframeMessenger.message(Command.REMOTE_NOTIFICATION_PERMISSION, null, (reply) => {
                        const remoteNotificationPermission = reply.data;
                        resolve(remoteNotificationPermission);
                    });
                }
            }));
    }

    push(item) {
        if (typeof(item) === 'function') {
            item();
        } else if (typeof(item) === 'string') {
            this.push(arguments);
        } else {
            const functionName = item.shift();
            this[functionName].apply(this, item);
        }
    }

    executeFunction() {
        let args = [];
        if (arguments && typeof arguments[0] === 'object') {
            args = arguments[0];
        } else {
            args = arguments;
        }
        const fn = this[args[0]];
        if (typeof fn === 'function') {
            fn.apply(this, Array.prototype.slice.call(args, 1));
        }
    }

    waitForInit() {
        return new Promise((resolve, reject) => {
            if (this.initFailed) {
                reject(this.initError);
            } else if (!this.initialized) {
                this.once(Event.INITIALIZED, resolve);
                this.once(Event.INITIALIZATION_FAILED, reject);
            } else {
                resolve();
            }
        });
    }

    waitForConfirmAvailable() {
        return this.waitForInit().then(() => {
            return new Promise((resolve) => {
                if (!this.confirm) {
                    this.once(Event.CONFIRM_AVAILABLE, resolve);
                } else {
                    resolve();
                }
            });
        });
    }

    waitForSubscription() {
        return new Promise((resolve, reject) => {
            this.waitForInit().then(() => {
                const resolveId = (retry) => {
                    this.subscriptionManager.getSubscriptionId().then((subscriptionId) => {
                        if (subscriptionId || retry) {
                            resolve(subscriptionId);
                        } else  {
                            this.once(Event.SUBSCRIBED, () => resolveId(true));
                        }
                    });
                };

                if (this.urlSession) {
                    resolveId();
                    return;
                }

                this.subscriptionManager.isSubscribed().then((isSubscribed) => {
                    if (isSubscribed) {
                        resolveId();
                    } else {
                        this.once(Event.SUBSCRIBED, resolveId);
                    }
                });
            }).catch(reject);
        });
    }

    waitForBell() {
        return this.waitForInit().then(() => {
            return new Promise((resolve) => {
                if (this.bell) {
                    resolve();
                } else {
                    this.once(Event.BELL_READY, resolve);
                }
            });
        });
    }

    isSubscribed(callback) {
        return this.waitForInit().then(() => this.subscriptionManager.isSubscribed().then(isSubscribed => callback(isSubscribed))).catch(() => callback(false));
    }

    getSubscriptionId(callback) {
        return this.waitForInit().then(() => {
            this.subscriptionManager.isSubscribed().then((isSubscribed) => {
                if (isSubscribed) {
                    this.subscriptionManager.getSubscriptionId().then((subscriptionId) => {
                        callback(subscriptionId);
                    });
                } else {
                    callback(false);
                }
            });
        }).catch(() => {
            callback(false);
        });
    }

    subscribe(callback) {
        if (this.initialized) {
            return this.subscriptionManager.subscribe().then(() => this.subscriptionManager.getSubscriptionId().then(subscriptionId => callback(false, subscriptionId))).catch(err => callback(err));
        }
        return this.waitForInit().then(() => this.subscriptionManager.subscribe().then(() => this.subscriptionManager.getSubscriptionId().then(subscriptionId => callback(false, subscriptionId)))).catch(err => callback(err));
    }

    triggerOptIn(firstArg, secondArg) {
        logMethodCall('triggerOptIn', firstArg, secondArg);

        const callbackParam = typeof secondArg === 'function' ? secondArg : firstArg;
        const forceSubscribe = typeof firstArg === 'boolean' && firstArg;

        const callback = typeof callbackParam === 'function' ? callbackParam : (err) => {
            if (err) {
                if (err.reason === 'unsubscribed' || err.reason === 'subscribed') {
                    log.info(err.message || err);
                }
                if (err.reason === 'unsupported-browser' || err.reason === 'private-mode' || err.reason === 'already-initialized' || err.reason === 'init-already-called' || err.reason === 'unsubscribed') {
                    log.warn(err.message || err);
                } else {
                    log.error(err.message || err);
                }
            }
        };

        const checkIfCanSubscribe = () => {
            if (forceSubscribe) {
                return Promise.resolve(true);
            }
            return this.subscriptionManager.canSubscribe();
        };

        return this.waitForConfirmAvailable().then(() => {
            const successCallback = () => {
                this.subscriptionManager.getSubscriptionId().then((subscriptionId) => {
                    callback(false, subscriptionId);
                });
            };

            checkIfCanSubscribe().then((canSubscribe) => {
                if (canSubscribe === true) {
                    const notificationPermission = this.subscriptionManager.getNotificationPermission();
                    if (this.confirm && (this.config.showConfirmAlert || !this.config.ownDomain || !(window.parent.location.protocol === 'https:' || window.top.location.hostname === 'localhost'))) {
                        log.debug('this.confirm.show 1');
                        this.confirm.setAutoHideBackdrop(notificationPermission === 'granted' || isAndroid());
                        this.confirm.show((err) => {
                            if (err) {
                                callback(err);
                            } else {
                                successCallback();
                            }
                        });
                    } else if (!this.subscriptionManager.isSubscribing) {
                        // only show backdrop if notification permission is not granted
                        // const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
                        let showBackdrop = notificationPermission === 'default' || this.config.env === 'PREVIEW'; // && !isSafari;
                        log.debug('showBackdrop', showBackdrop);

                        const subscribe = (subCallback) => {
                            if (this.config.env === 'PREVIEW') {
                                // don't subscribe in preview mode
                                return;
                            }

                            this.subscriptionManager.subscribe().then((permission) => {
                                if (typeof subCallback === 'function') {
                                    subCallback();
                                }

                                if (this.confirm && showBackdrop) {
                                    this.confirm.hideBackdrop(permission);
                                }

                                if (permission === 'denied') {
                                    if (this.confirm && this.browserType !== 'safari') {
                                        this.confirm.showDenyAlert();
                                    }
                                    callback(new CleverPushError('Permission for notifications was denied', permission));
                                } else {
                                    successCallback();
                                }
                            }).catch((err) => {
                                if (typeof subCallback === 'function') {
                                    subCallback();
                                }

                                if (this.confirm && showBackdrop) {
                                    this.confirm.hideBackdrop('denied');
                                }
                                callback(err);
                            });
                        };

                        if (this.confirm && showBackdrop) {
                            detectPrompt({
                                subscriptionManager: this.subscriptionManager,
                                config: this.config,
                                subscribe,
                                showBackdrop,
                                setShowBackdrop: (backdrop) => showBackdrop = backdrop
                            });

                        } else {
                            subscribe();
                        }
                    }

                    const existingPermission = notificationPermission === 'granted';
                    this.subscriptionManager.existingPermission = existingPermission;

                    if (!this.config.noExistingPermissionOptIns ||  !existingPermission) {
                        if (!this.optInVisitorTracked) {
                            this.optInVisitorTracked = true;
                            this.api.trackOptInVisitor();
                        }

                        this.api.confirmAlertShown(this.subscriptionManager.existingPermission);
                        this.trigger(Event.OPTIN_SHOWN);
                    }
                } else {
                    callback(new CleverPushError('Can not subscribe because of an unknown error', 'cannot-subscribe'));
                }
            }).catch((err) => {
                if (err && err.reason === 'subscribed') {
                    // don't throw an error if user is already subscribed
                    log.debug('running successCallback()');
                    successCallback();

                    // TODO: check if err.reason is 'unsubscribed' and teach user how to re-subscribe
                } else {
                    callback(err);
                }
            });
        }).catch(err => callback(err));
    }

    unsubscribe(callbackParam, notManuallyParam) {
        logMethodCall('unsubscribe');

        const callback = typeof callbackParam === 'function' ? callbackParam : (err) => {
            if (err) {
                log.error(err.stack || err.message || err);
            }
        };

        const notManually = typeof notManuallyParam === 'boolean' ? notManuallyParam : false;

        this.waitForInit().then(() => {
            this.subscriptionManager.unsubscribe(notManually).then(() => {
                callback(false, true);
            }).catch((err) => {
                console.error(err);
                callback(false);
            });
        });
    }

    tagSubscription(tagId, callbackParam) {
        logMethodCall('tagSubscription', tagId);

        const callback = typeof callbackParam === 'function' ? callbackParam : () => {};

        this.waitForInit().then(() => {
            if (this.subscriptionManager) {
                this.subscriptionManager.initialTags.push(tagId);
            }

            this.waitForSubscription().then((subscriptionId) => {
                if (tagId) {
                    this.subscriptionManager.storageManager.getTags().then((storedTags) => {
                        const tagDate = this.subscriptionManager.storageManager.getTagDate(tagId);
                        if (storedTags.indexOf(tagId) < 0 || !tagDate || tagDate.getTime() < (Date.now() - (1000 * 60 * 60 * 12))) {
                            this.subscriptionManager.storageManager.setTags([...storedTags, tagId]);
                            this.api.tagSubscription(subscriptionId, tagId).then(callback).catch(callback);
                        } else {
                            log.debug('tag is already in stored tags');
                        }
                    });
                } else {
                    log.error('tag id not specified');
                }
            });
        });
    }

    untagSubscription(tagId, callbackParam) {
        logMethodCall('untagSubscription', tagId);

        const callback = typeof callbackParam === 'function' ? callbackParam : () => {};

        this.waitForInit().then(() => {
            this.waitForSubscription().then((subscriptionId) => {
                if (tagId) {
                    this.subscriptionManager.storageManager.getTags().then((storedTags) => {
                        storedTags.splice(storedTags.indexOf(tagId), 1);
                        this.subscriptionManager.storageManager.setTags(storedTags);
                    });
                    this.api.untagSubscription(subscriptionId, tagId).then(callback).catch(callback);
                } else {
                    log.error('tag id not specified');
                }
            });
        });
    }

    hasTag(tagId, callback) {
        logMethodCall('hasTag', tagId);

        this.waitForInit().then(() => {
            if (tagId) {
                this.subscriptionManager.storageManager.hasTag(tagId).then((hasTag) => {
                    if (typeof callback === 'function') {
                        callback(hasTag);
                    }
                });
            } else {
                log.error('tag id not specified');
            }
        });
    }

    setTopics(topicIds, callback) {
        logMethodCall('setTopics', topicIds);

        return this.waitForInit().then(() => {
            if (this.subscriptionManager) {
                this.subscriptionManager.setTopics(topicIds);
                return this.subscriptionManager.sync().then(() => {
                    if (typeof callback === 'function') {
                        callback();
                    }
                });
            }
        });
    }

    getTopics(callback) {
        logMethodCall('getTopics');
        if (typeof callback === 'function') {
            return this.waitForInit().then(() => {
                if (this.subscriptionManager) {
                    this.subscriptionManager.getTopics().then((topics) => {
                        callback(null, topics);
                    });
                }
            });
        }
        log.error('Please provide a callback function (err, topics) => {} to getTopics');
    }

    setAttribute(attributeId, valueParam, callback) {
        logMethodCall('setAttribute', attributeId, valueParam);

        let value = valueParam;
        if (typeof value === 'object') {
            value = JSON.stringify(value);
        }

        this.waitForInit().then(() => {
            this.waitForSubscription().then((subscriptionId) => {
                if (subscriptionId) {
                    if (localStorage.getItem('cleverpush-attribute-' + attributeId) === (value + '')) {
                        return;
                    }
                    localStorage.setItem('cleverpush-attribute-' + attributeId, value);

                    this.api.setSubscriptionAttribute(subscriptionId, attributeId, valueParam).then(() => {
                        if (typeof callback === 'function') {
                            callback(false, true);
                        }
                    });
                }
            });
        });
    }

    incAttribute(attributeId, incParam, callback) {
        logMethodCall('incAttribute', attributeId, incParam);

        let inc = parseInt(incParam, INT_RADIX);
        if (isNaN(inc)) {
            inc = 1;
        }

        let value = parseInt(localStorage.getItem('cleverpush-attribute-' + attributeId), INT_RADIX) || 0;
        value += inc;

        this.waitForInit().then(() => {
            this.waitForSubscription().then((subscriptionId) => {
                localStorage.setItem('cleverpush-attribute-' + attributeId, value + '');

                this.api.setSubscriptionAttribute(subscriptionId, attributeId, value).then(() => {
                    if (typeof callback === 'function') {
                        callback(false, true);
                    }
                });
            });
        });
    }

    getAttribute(attributeId, callback) {
        logMethodCall('getAttribute', attributeId);

        this.waitForInit().then(() => {
            this.waitForSubscription().then((subscriptionId) => {
                callback(localStorage.getItem('cleverpush-attribute-' + attributeId));
            });
        });
    }

    hasAttributeValue(attributeId, valueParam, callback) {
        let value = valueParam;
        if (typeof value === 'object') {
            value = JSON.stringify(value);
        }

        const storageStr = localStorage.getItem('cleverpush-attribute-' + attributeId);
        if (storageStr) {
            try {
                const array = JSON.parse(storageStr);
                if (array && array.length) {
                    callback(array.indexOf(value) > -1);
                    return;
                }
            } catch (ignored) {}
        }
        callback(false);
    }

    pushAttributeValue(attributeId, valueParam, optionsParam, callbackParam) {
        logMethodCall('pushAttributeValue', attributeId, value);

        let value = valueParam;
        if (typeof value === 'object') {
            value = JSON.stringify(value);
        }

        let callback = callbackParam;
        let options = {};
        if (typeof optionsParam === 'function') {
            callback = optionsParam;
        } else if (typeof optionsParam === 'object') {
            options = optionsParam;
        }

        this.waitForInit().then(() => {
            this.waitForSubscription().then((subscriptionId) => {
                let alreadySet = false;

                const storageStr = localStorage.getItem('cleverpush-attribute-' + attributeId);
                if (storageStr) {
                    try {
                        const array = JSON.parse(storageStr);
                        if (array && array.length) {
                            if (array.indexOf(value) > -1) {
                                alreadySet = true;
                            } else {
                                localStorage.setItem('cleverpush-attribute-' + attributeId, JSON.stringify([...array, value]));
                            }
                        } else {
                            localStorage.setItem('cleverpush-attribute-' + attributeId, JSON.stringify([value]));
                        }
                    } catch (ignored) {
                        localStorage.setItem('cleverpush-attribute-' + attributeId, JSON.stringify([value]));
                    }
                } else {
                    localStorage.setItem('cleverpush-attribute-' + attributeId, JSON.stringify([value]));
                }

                if (alreadySet && !options.force) {
                    return;
                }

                this.api.pushSubscriptionAttributeValue(subscriptionId, attributeId, valueParam).then(() => {
                    if (typeof callback === 'function') {
                        callback(false, true);
                    }
                });
            });
        });
    }

    pullAttributeValue(attributeId, valueParam, callback) {
        logMethodCall('pullAttributeValue', attributeId, value);

        let value = valueParam;
        if (typeof value === 'object') {
            value = JSON.stringify(value);
        }

        this.waitForInit().then(() => {
            this.waitForSubscription().then((subscriptionId) => {

                const storageStr = localStorage.getItem('cleverpush-attribute-' + attributeId);
                if (storageStr) {
                    try {
                        const array = JSON.parse(storageStr);
                        if (array && array.length) {
                            if (array.indexOf(value) > -1) {
                                array.splice(array.indexOf(value), 1);
                                localStorage.setItem('cleverpush-attribute-' + attributeId, JSON.stringify(array));
                            }
                        }
                    } catch (ignored) {

                    }
                }

                this.api.pullSubscriptionAttributeValue(subscriptionId, attributeId, valueParam).then(() => {
                    if (typeof callback === 'function') {
                        callback(false, true);
                    }
                });
            });
        });
    }

    trigger(eventName, data) {
        if (data || data === false) {
            log.debug(`%c${eventName.toUpperCase()}:`, getConsoleStyle('event'), data);
        } else {
            log.debug(`%c${eventName.toUpperCase()}`, getConsoleStyle('event'));
        }

        if (isBrowser()) {
            if (eventName === Event.INITIALIZED) {
                if (this.initialized) {
                    return;
                }
                this.initialized = true;
            }
            this.emit(eventName, data);
        }
    }

    triggerBellClick() {
        logMethodCall('triggerBellClick');

        if (!this.subscriptionManager) {
            alert(utilsTranslate('alert.unsupported'));
            return;
        }

        this.subscriptionManager.isSubscribed().then((isSubscribed) => {
            if (this.bell) {
                this.bell.onClick();
            } else {
                if (!isSubscribed) {
                    this.triggerOptIn(true, (err, id) => {
                        if (!err && id) {
                            if (!this.panel) {
                                import ('./panel').then(({
                                    default: Panel
                                }) => {
                                    this.panel = new Panel(this.config, this.subscriptionManager, this.trigger.bind(this), this.api);
                                    this.panel.show();
                                });
                            } else {
                                this.panel.show();
                            }
                        }
                    });
                } else {
                    if (!this.panel) {
                        import ('./panel').then(({
                            default: Panel
                        }) => {
                            this.panel = new Panel(this.config, this.subscriptionManager, this.trigger.bind(this), this.api);
                            this.panel.show();
                        });
                    } else {
                        this.panel.show();
                    }
                }
            }
        });
    }

    hidePanel() {
        if (this.panel) {
            this.panel.hide();
        }
    }

    translate(key) {
        return utilsTranslate(key);
    }

    triggerFollowUpEvent(followUpCampaignId, eventName, eventParamsParam) {
        const eventParams = typeof eventParamsParam === 'object' ? eventParamsParam : {};
        logMethodCall('triggerFollowUpEvent', followUpCampaignId, eventName, eventParams);

        if (this.config.clickedFollowUpCampaignId === followUpCampaignId) {
            // do not re-trigger the campaign which this session resulted in by clicking (results in an endless loop if user clicks every time!)
            return;
        }

        const trigger = (subscriptionId) => {
            if (subscriptionId) {
                log.debug('triggerFollowUpEvent waitForSubscription done', subscriptionId);
                const fromNotification = this.config.clickedFollowUpCampaignId === followUpCampaignId;
                const notificationId = typeof sessionStorage !== 'undefined' ? sessionStorage.getItem('cleverpush-notification-id') : undefined;
                this.api.triggerFollowUpEvent(subscriptionId, followUpCampaignId, notificationId, eventName, Object.assign({
                    url: location.href
                }, eventParams), fromNotification, this.config.bypassInactiveFollowUps);
            }
        };

        this.waitForInit().then(() => {
            log.debug('triggerFollowUpEvent waitForInit done');

            if (this.config.autoRegister) {
                this.waitForSubscription().then(trigger);
            } else {
                this.subscriptionManager.getSubscriptionId().then(trigger);
            }
        });
    }

    initBounces() {
        logMethodCall('initBounces');
        try {
            let bounceUrl;
            if (isHost() && typeof URLSearchParams !== 'undefined') {
                let bounceDevice;
                let notificationId;
                if (location.search && location.search.length) {
                    const params = new URLSearchParams(location.search.slice(1));
                    bounceUrl = params.get('cleverPushBounceUrl');
                    bounceDevice = params.get('cleverPushBounceDevice');
                    notificationId = params.get('cleverPushNotificationId');
                }
                if (!bounceUrl && location.hash && location.hash.indexOf('#?') === 0) {
                    const hashParams = new URLSearchParams(location.hash.slice(2));
                    bounceUrl = hashParams.get('cleverPushBounceUrl');
                    bounceDevice = hashParams.get('cleverPushBounceDevice');
                    if (!notificationId) {
                        notificationId = hashParams.get('cleverPushNotificationId');
                    }
                }
                if (bounceDevice && (
                        bounceDevice === 'mobile' && device.type !== 'mobile' ||
                        bounceDevice === 'tablet' && device.type !== 'tablet' ||
                        bounceDevice === 'desktop' && (device.type === 'table' || device.type === 'mobile'))) {
                    bounceUrl = undefined;
                }
                if (bounceUrl) {
                    this.initBounce(bounceUrl, notificationId);
                }
            }

            if (!bounceUrl && this.config && this.config.bounceEnabled && this.config.bounceFilters && this.config.bounceFilters.length) {
                const fromNotification = document.referrer && (document.referrer.endsWith('cleverpush.com/worker.js') || document.referrer.endsWith(this.config.serviceWorkerFile || document.referrer.endsWith('/cleverpush-worker.js')));
                const fromSeo = document.referrer && /google|bing|yahoo|baidu|duckduckgo|wolframalpha/.test(document.referrer);
                const bounceFilter = this.config.bounceFilters.find((f) => {
                    let should = (
                            (!f.source || f.source === 'notification') && fromNotification) ||
                        (f.source === 'seo' && fromSeo) ||
                        ((!this.referrer || this.referrer === location.href) && f.source === 'direct') ||
                        (f.source === 'ignore');
                    if (should && f.device) {
                        should = f.device === 'mobile' && device.type === 'mobile' ||
                            f.device === 'tablet' && device.type === 'tablet' ||
                            f.device === 'desktop' && device.type !== 'mobile' && device.type !== 'tablet';
                    }
                    if (should && f.matchQuery) {
                        const params = new URLSearchParams(location.search.slice(1));
                        Object.keys(f.matchQuery || {}).forEach((query) => {
                            if (f.matchQuery[query]) {
                                should = should && params.get(query) && params.get(query).includes(f.matchQuery[query]);
                            }
                        });
                    }
                    return should;
                });

                if (bounceFilter && bounceFilter.url) {
                    this.initBounce(bounceFilter.url, null);
                }
            }

            if (sessionStorage.getItem('cleverpush-bounced') === 'true' && window.performance && window.performance.navigation.type === window.performance.navigation.TYPE_BACK_FORWARD) {
                sessionStorage.removeItem('cleverpush-bounced');
                history.back();
            }
        } catch (err) {
            log.error(err);
        }
    }

    initBounce(url, notificationId) {
        logMethodCall('initBounce', url, notificationId);
        let bounced = false;
        if (window.history && window.history.pushState) {
            const setupBounce = () => {
                setTimeout(() => {
                    window.addEventListener('popstate', () => {
                        setTimeout(() => {
                            if (sessionStorage.getItem('cleverpush-bounced') === 'true') {
                                return;
                            }
                            sessionStorage.setItem('cleverpush-bounced', 'true');

                            bounced = !location.hash ||  location.hash.indexOf('cleverPushBounceUrl') > -1;
                            if (bounced) {
                                const bounceParams = {
                                    channelId: this.config.channelId,
                                    notificationId,
                                    subscriptionId: this.subscriptionManager.storageManager.getSubscriptionId()
                                };

                                this.api.trackBounce(bounceParams);

                                location.href = url;
                            }
                        }, 0);
                    }, false);
                }, 250);

                const initialUrl = location.pathname + (location.search || '') + (location.hash || '');

                setTimeout(() => {
                    history.pushState({
                        cleverpushBounce: true
                    }, document.title, location.pathname + (location.search || '') + (location.hash || ''));
                    setTimeout(() => {
                        history.replaceState(null, document.title, initialUrl);
                    }, 150);
                }, 150);
                bounced = true;
            };

            if (document.readyState === 'completed' || document.readyState === 'complete' || document.readyState === 'interactive') {
                setupBounce();
            } else {
                window.addEventListener('load', setupBounce);
            }
        }
    }

    initFollowUpCampaigns() {
        if (this.config.followUpCampaigns && this.config.followUpCampaigns.length) {
            this.config.followUpCampaigns.forEach((campaign) => {
                let triggered = false;
                const trigger = (triggerElem, extraVariables) => {
                    triggered = true;

                    let variables = {};
                    if (campaign.triggerAutoVariables && campaign.triggerAutoVariables.length) {
                        campaign.triggerAutoVariables.forEach((variable) => {
                            if (variable.variable === 'scrollPercentage') {
                                variables[variable.variable] = window.pageYOffset;
                                return;
                            }

                            let elem;
                            variable.selector.split(',').forEach((selector) => {
                                if (elem) {
                                    return;
                                }

                                // go up to 10 parent elements, if no match use document
                                let tryElem = triggerElem;
                                for (let i = 0; i < 10; i++) {
                                    elem = tryElem.querySelector(selector.trim());
                                    if (elem) {
                                        break;
                                    }
                                    tryElem = tryElem.parentNode;
                                    if (!tryElem) {
                                        break;
                                    }
                                }

                                if (!elem) {
                                    elem = document.querySelector(selector.trim());
                                }
                            });

                            if (elem) {
                                if (elem.tagName.toLowerCase() === 'img' && (elem.src || elem.dataset && elem.dataset.src)) {
                                    variables[variable.variable] = (elem.src || elem.dataset && elem.dataset.src);
                                } else if (elem.tagName.toLowerCase() === 'a' && elem.href) {
                                    variables[variable.variable] = elem.href;
                                } else if ((elem.tagName.toLowerCase() === 'input' || elem.tagName.toLowerCase() === 'textarea') && elem.value) {
                                    variables[variable.variable] = elem.value;
                                } else if ((elem.tagName.toLowerCase() === 'meta') && elem.content) {
                                    variables[variable.variable] = elem.content;
                                } else {
                                    variables[variable.variable] = (elem.textContent || elem.innerText).trim();
                                }
                            }
                        });
                    }
                    if (typeof extraVariables === 'object') {
                        variables = Object.assign(variables, extraVariables);
                    }
                    this.triggerFollowUpEvent(campaign._id, 'trigger' + (campaign.triggerType[0].substr(0, 1).toUpperCase() + campaign.triggerType.substr(1)), variables);
                };

                if (campaign.triggerType === 'articleBounce' && window.location.hash.indexOf('#cleverPushScroll') !== 0) {
                    const setupBounce = () => {
                        window.addEventListener('unload', () => {
                            const articleElement = document.querySelector(campaign.triggerArticleSelector || 'article');
                            if (articleElement) {
                                const scrollPercent = getPercentOfView(articleElement);
                                if (scrollPercent >= (campaign.triggerArticleMinScroll || 0) && scrollPercent <= (campaign.triggerArticleMaxScroll || 80)) {
                                    trigger(document);
                                }
                            }
                        });
                    };

                    if (campaign.triggerFunction) {
                        let success = false;
                        try {
                            success = !!eval(campaign.triggerFunction);
                        } catch (err) {
                            log.debug(err);
                        }
                        if (success) {
                            setupBounce();
                        }
                    } else {
                        setupBounce();
                    }
                }

                if (campaign.triggerType === 'selector' && campaign.triggerSelector) {
                    const setupSelector = () => {
                        const triggerElems = document.querySelectorAll(campaign.triggerSelector);
                        for (let triggerElemIndex = 0; triggerElemIndex < triggerElems.length; triggerElemIndex += 1) {
                            const triggerElem = triggerElems[triggerElemIndex];
                            if (triggerElem) {
                                triggerElem.addEventListener('click', () => {
                                    trigger(triggerElem.parentNode);
                                });
                            }
                        }
                    };

                    if (campaign.triggerFunction) {
                        let success = false;
                        try {
                            success = !!eval(campaign.triggerFunction);
                        } catch (err) {
                            log.debug(err);
                        }
                        if (success) {
                            setupSelector();
                        }
                    } else {
                        setupSelector();
                    }
                }

                if (campaign.triggerType === 'function' && campaign.triggerFunction) {
                    let success = false;
                    try {
                        success = !!eval(campaign.triggerFunction);
                    } catch (err) {
                        log.debug(err);
                    }
                    if (success) {
                        trigger(document);
                    }
                } else if (campaign.triggerType === 'path' && campaign.triggerPath && this.triggerPathAndQuery(campaign.triggerPath)) {
                    this.triggerFollowUpEvent(campaign._id, 'triggerPath');
                }

                if (campaign.triggerType === 'exitIntent') {
                    import ('ouibounce').then(({
                        default: ouibounce
                    }) => {
                        ouibounce(null, {
                            aggressive: true,
                            callback: () => {
                                trigger(document);
                            }
                        });
                    });
                }

                if (campaign.triggerType === 'productAvailability' && campaign.triggerFunction) {
                    let productId;
                    try {
                        productId = eval(campaign.triggerFunction);
                    } catch (err) {
                        log.debug(err);
                    }
                    // allow delayed triggers with promises
                    if (typeof productId === 'promise' && productId.then) {
                        try {
                            productId.then((id) => {
                                if (id) {
                                    trigger(document, {
                                        id
                                    });
                                }
                            });
                        } catch (err) {
                            log.debug(err);
                        }
                    } else if (productId) {
                        trigger(document, {
                            id: productId
                        });
                    }
                }

                if ( /*!triggered && */ (campaign.cancelType === 'selector' || campaign.cancelType === 'function') && campaign.cancelSelector) {
                    const triggerElems = document.querySelectorAll(campaign.cancelSelector);
                    for (let triggerElemIndex = 0; triggerElemIndex < triggerElems.length; triggerElemIndex += 1) {
                        const triggerElem = triggerElems[triggerElemIndex];
                        if (triggerElem) {
                            triggerElem.addEventListener('click', () => {
                                this.triggerFollowUpEvent(campaign._id, campaign.cancelType === 'function' ? 'cancelFunction' : 'cancelSelector');
                            });
                        }
                    }
                }

                if (!triggered && campaign.cancelType === 'function' && campaign.cancelFunction) {
                    let success = false;
                    try {
                        success = !!eval(campaign.cancelFunction);
                    } catch (err) {
                        log.debug(err);
                    }
                    if (success) {
                        this.triggerFollowUpEvent(campaign._id, 'cancelFunction');
                    }
                } else if (!triggered && campaign.cancelType === 'path' && campaign.cancelPath && this.triggerPathAndQuery(campaign.cancelPath)) {
                    this.triggerFollowUpEvent(campaign._id, 'cancelPath');
                }
            });
        }

        if (this.config.shopifyCartAbandonmentFollowUpCampaignId) {
            const addToCartButtons = document.querySelectorAll('button[name="add"], button.addtocart, a.add-to-cart');
            for (let addToCartButtonIndex = 0; addToCartButtonIndex < addToCartButtons.length; addToCartButtonIndex++) {
                const addToCartButton = addToCartButtons[addToCartButtonIndex];
                if (addToCartButton) {
                    addToCartButton.addEventListener('click', () => {
                        this.triggerFollowUpEvent(this.config.shopifyCartAbandonmentFollowUpCampaignId, 'addToCart');
                    });
                }
            }

            if (document.documentElement && document.documentElement.className && document.documentElement.className.indexOf('page--thank-you') > -1 || window.location && window.location.pathname && window.location.pathname.indexOf('thank_you') > -1) {
                this.triggerFollowUpEvent(this.config.shopifyCartAbandonmentFollowUpCampaignId, 'checkout');
            }
        }

        if (this.config.epagesCartAbandonmentFollowUpCampaignId) {
            const addToCartButton = document.querySelector('button.product-add-cart-button');
            if (addToCartButton) {
                addToCartButton.addEventListener('click', () => {
                    this.triggerFollowUpEvent(this.config.epagesCartAbandonmentFollowUpCampaignId, 'addToCart');
                });
            }

            if (document.documentElement && document.documentElement.className && document.documentElement.className.indexOf('page--thank-you') > -1 || window.location && window.location.pathname && window.location.pathname.indexOf('thank_you') > -1) {
                this.triggerFollowUpEvent(this.config.epagesCartAbandonmentFollowUpCampaignId, 'checkout');
            }
        }
    }

    trackConversion(eventId, amountParam, currency) {
        const amount = typeof amountParam !== 'undefined' ? amountParam : undefined;
        logMethodCall('trackConversion', eventId, amount);

        this.waitForInit().then(() => {
            this.subscriptionManager.getSubscriptionId().then((subscriptionId) => {
                if (subscriptionId) {
                    const tryTrack = () => {
                        if (!sessionStorage.getItem('cleverpush-conversion-' + eventId + '-tracked') ||
                            (
                                sessionStorage.getItem('cleverpush-conversion-' + eventId + '-tracked') &&
                                !isNaN(sessionStorage.getItem('cleverpush-conversion-' + eventId + '-tracked')) &&
                                (parseInt(sessionStorage.getItem('cleverpush-conversion-' + eventId + '-tracked'), INT_RADIX) + (1000 * 60 * 60)) < Date.now()
                            )) {
                            if (notificationId) {
                                sessionStorage.setItem('cleverpush-notification-id', notificationId);
                            }
                            sessionStorage.setItem('cleverpush-conversion-' + eventId + '-tracked', Date.now());
                            this.api.trackConversion(subscriptionId, notificationId, eventId, amount, this.config.clickedFollowUpCampaignId, currency);
                        }
                    };
                    const params = new URLSearchParams(location.search.slice(1));
                    let notificationId = params.get('cleverPushNotificationId') || sessionStorage.getItem('cleverpush-notification-id');
                    if (!notificationId) {
                        this.subscriptionManager.getClickedNotification().then((clickedNotificationId) => {
                            notificationId = clickedNotificationId;
                            tryTrack();
                        });
                    } else {
                        tryTrack();
                    }
                }
            });
        });
    }

    generateWalletPass(walletPassId, options, callback) {
        return new Promise((resolve, reject) => {
            this.api.generateWalletPass(walletPassId, options).then((result) => {
                if (typeof callback === 'function') {
                    callback(null, result);
                }
                resolve(result);
            }).catch((err) => {
                if (typeof callback === 'function') {
                    callback(err, null);
                }
                reject(err);
            });
        });
    }

    initGoogleAnalytics(subscriptionId) {
        if (this.config.googleAnalyticsDimensionIndex && typeof ga === 'function') {
            ga('set', `dimension${this.config.googleAnalyticsDimensionIndex}`, subscriptionId);

            if (typeof gtag === 'function') {
                gtag('event', 'cleverpushSetSubscriptionId', {
                    event_category: 'cleverpush',
                    event_label: 'Set CleverPush Subscription ID',
                    [`dimension${this.config.googleAnalyticsDimensionIndex}`]: subscriptionId,
                    nonInteraction: true
                });
            }
        }
    }
}