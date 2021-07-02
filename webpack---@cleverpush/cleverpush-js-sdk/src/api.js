import UAParser from 'ua-parser-js';
import Promise from 'promise-polyfill';

import {
    log,
    logMethodCall
} from './utils/debug';
import request from './utils/request';
import {
    getPianoEnabled
} from './utils/piano';

export default class CleverPushApi {
    constructor(channelId) {
        this.channelId = channelId;
        this.confirmAlertTestId = undefined;
        this.endpoint = 'https://api.cleverpush.com';
        this.regionEnabled = false;
    }

    setConfirmAlertTestId(id) {
        this.confirmAlertTestId = id;
    }

    request(method, path, data) {
        logMethodCall('request', method, path, data);

        const options = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            }
        };
        if (method) {
            options.method = method;
        }
        if (data) {
            options.body = JSON.stringify(Object.assign({
                sdkVersion: typeof VERSION !== 'undefined' ? VERSION : undefined
            }, data));
            options.headers['Content-Type'] = 'application/json';
        }
        return request(this.endpoint + path, options);
    }

    getChannelConfig(confirmAlertTestsEnabled) {
        let url = `/channel/${this.channelId}/config`;
        if (typeof confirmAlertTestsEnabled !== 'undefined' && confirmAlertTestsEnabled) {
            url += '?confirmAlertTestsEnabled=true';

            const parser = new UAParser(navigator.userAgent);
            const platform = parser.getOS();
            if (platform.name) {
                url += '&platformName=' + platform.name;
            }
        }
        return this.request('GET', url, null);
    }

    tagSubscription(subscriptionId, tagId) {
        return this.request('POST', '/subscription/tag', {
            channelId: this.channelId,
            tagId,
            subscriptionId
        });
    }

    untagSubscription(subscriptionId, tagId) {
        return this.request('POST', '/subscription/untag', {
            channelId: this.channelId,
            tagId,
            subscriptionId
        });
    }

    setSubscriptionAttribute(subscriptionId, attributeId, value) {
        return this.request('POST', '/subscription/attribute', {
            channelId: this.channelId,
            attributeId,
            value,
            subscriptionId
        });
    }

    pushSubscriptionAttributeValue(subscriptionId, attributeId, value) {
        return this.request('POST', '/subscription/attribute/push-value', {
            channelId: this.channelId,
            attributeId,
            value,
            subscriptionId
        });
    }

    pullSubscriptionAttributeValue(subscriptionId, attributeId, value) {
        return this.request('POST', '/subscription/attribute/pull-value', {
            channelId: this.channelId,
            attributeId,
            value,
            subscriptionId
        });
    }

    triggerFollowUpEvent(subscriptionId, campaignId, notificationId, name, parameters, fromNotification, bypassInactive) {
        const data = {
            channelId: this.channelId,
            subscriptionId,
            campaignId,
            notificationId,
            name,
            parameters,
            fromNotification,
            bypassInactive
        };

        if (name === 'articleBounce' && typeof navigator.sendBeacon === 'function') {
            const blob = new Blob([JSON.stringify(data)], {
                type: 'application/x-www-form-urlencoded'
            });
            return navigator.sendBeacon(this.endpoint + '/subscription/event', blob);
        }

        return this.request('POST', '/subscription/event', data);
    }

    trackConversion(subscriptionId, notificationId, eventId, amount, followUpCampaignId, currency) {
        return this.request('POST', '/subscription/conversion', {
            channelId: this.channelId,
            subscriptionId,
            notificationId,
            eventId,
            amount,
            followUpCampaignId,
            currency
        });
    }

    trackWidget(widgetId, type) {
        return this.request('POST', '/channel/' + this.channelId + '/widget/' + type, {
            channelId: this.channelId,
            widgetId
        });
    }

    trackPanel(notificationId, type) {
        return this.request('POST', '/channel/' + this.channelId + '/panel/' + type, {
            channelId: this.channelId,
            notificationId
        });
    }

    trackBounce(params) {
        const data = Object.assign({
            channelId: this.channelId
        }, params || {});

        const parser = new UAParser(navigator.userAgent);
        const browser = parser.getBrowser();
        const platform = parser.getOS();

        data.platformName = platform.name || undefined;
        data.browserType = browser.name || undefined;

        if (typeof navigator.sendBeacon === 'function') {
            const blob = new Blob([JSON.stringify(data)], {
                type: 'application/x-www-form-urlencoded'
            });
            return navigator.sendBeacon(this.endpoint + '/notification/bounced', blob);
        }

        return this.request('POST', '/notification/bounced', data);
    }

    getSyncParameters(noPromise) {
        logMethodCall('getSyncParameters');

        const parser = new UAParser(navigator.userAgent);
        const browser = parser.getBrowser();
        const platform = parser.getOS();

        const browserVersionMain = (browser.version || '').split('.')[0];
        const platformVersionMain = (platform.version || '').split('.')[0];

        const params = {
            channelId: this.channelId,
            browserType: browser.name || undefined,
            browserVersion: browserVersionMain || browser.version || undefined,
            platformName: platform.name || undefined,
            platformVersion: platformVersionMain || platform.version || undefined
        };

        const pathname = location.pathname;
        if (pathname) {
            params.pathname = pathname;
        }

        try {
            if (typeof sessionStorage !== 'undefined') {
                const referrer = sessionStorage.getItem('cleverpush-referrer') || document.referrer.split('?')[0];
                if (referrer) {
                    params.referrer = referrer;
                }

                const referralSubscriptionId = sessionStorage.getItem('cleverpush-referral-subscription-id');
                if (referralSubscriptionId) {
                    params.referralSubscriptionId = referralSubscriptionId;
                }
            }

            if (typeof localStorage !== 'undefined') {
                const visits = localStorage.getItem('cleverpush-visits') || 0;
                if (!isNaN(visits)) {
                    params.visits = visits + '';
                }

                if (localStorage.getItem('subscription-status') === 'was-denied' || localStorage.getItem('subscription-status') === 'denied') {
                    params.wasDenied = true;
                }
            }
        } catch (ignored) {}

        const language = (navigator.language || navigator.userLanguage || '').substr(0, 2);
        if (language) {
            params.language = language;
        }

        if (this.confirmAlertTestId) {
            params.confirmAlertTestId = this.confirmAlertTestId;
        }

        if (this.testSubscription) {
            params.testSubscription = this.testSubscription;
        }

        if (self.CleverPush && self.CleverPush.config && self.CleverPush.config.pianoEnabled && self.CleverPush.config.pianoPublicPersistedId) {
            try {
                if (getPianoEnabled()) {
                    // in case piano is enabled in CMP (or not found)
                    if (typeof cX !== 'undefined') {
                        params.pianoUserId = cX.getUserId();
                        params.pianoSegments = cX.getUserSegmentIds({ 
                            persistedQueryId: self.CleverPush.config.pianoPublicPersistedId
                        });
                    }
                } else {
                    // in case use removed piano from CMP again
                    params.pianoUserId = 'optout';
                    params.pianoSegments = [];
                }
            } catch (err) {
                log.debug(err);
            }
        }

        if (typeof noPromise !== 'undefined' && noPromise) {
            return params;
        }

        return new Promise((resolve) => {
            request('https://geoip-api.cleverpush.com/', {
                mode: 'cors',
                timeout: 3000
            }).then((json) => {
                resolve(Object.assign(params, json));
            }).catch((err) => {
                log.error(err);
                resolve(params);
            });
        });
    }

    syncSubscription(subscription, topics, tags, optionalParams) {
        logMethodCall('syncSubscription', subscription, topics);

        if (!subscription) {
            return Promise.reject();
        }

        let params = typeof optionalParams === 'object' ? optionalParams : {};

        return this.getSyncParameters().then((paramsParam) => {
            params = Object.assign(params, paramsParam);
            const browserVersionMain = parseInt(params.browserVersion, 10);

            if (!this.regionEnabled) {
                delete params.region;
            }

            if (typeof topics === 'object' && topics && !isNaN(topics.length)) {
                let topicsVersion = 0;
                try {
                    const topicsVersionStr = localStorage.getItem('cleverpush-topics-version');
                    if (topicsVersionStr && !isNaN(topicsVersionStr)) {
                        topicsVersion = parseInt(topicsVersionStr, 10);
                    }
                } catch (ignored) {}
                topicsVersion += 1;

                params.topics = topics;
                params.topicsVersion = topicsVersion;
            }
            if (typeof tags === 'object' && tags && tags.length) {
                params.tags = tags;
            }

            if (params.existingPermission) {
                // do not track existing permissions in confirm alert tests
                delete params.confirmAlertTestId;
            }

            if (this.fromBellWidget) {
                params.fromBellWidget = this.fromBellWidget;
            }

            if (this.widgetId) {
                params.widgetId = this.widgetId;
            }

            if (subscription.facebookUserRef) {
                params.facebookUserRef = subscription.facebookUserRef;
                /*
                if (!subscription.endpoint && !subscription.deviceToken) {
                  params.browserType = 'Facebook Messenger';
                }
                */

                if (typeof self !== 'undefined' && self.CleverPush && self.CleverPush.config && self.CleverPush.config.multiChannels && self.CleverPush.config.multiChannels.facebookChannel._id !== params.channelId) {
                    params.channelId = self.CleverPush.config.multiChannels.facebookChannel._id;
                }
            }

            if (params.browserType === 'Safari' && typeof subscription === 'object' && subscription.deviceToken) {
                // sync with APN token
                params.apnsToken = subscription.deviceToken;
            } else if (typeof subscription === 'string') {
                // sync with subscriptionId
                params.subscriptionId = subscription;
            } else if (params.browserType === 'Chrome' && browserVersionMain >= 42 && browserVersionMain < 50) {
                // without encryption (old GCM)
                params.endpoint = subscription.endpoint;
            } else {
                // with encryption
                params.endpoint = subscription.endpoint;

                if (typeof subscription.getKey !== 'undefined') {
                    const key = subscription.getKey ? subscription.getKey('p256dh') : null;
                    let auth = null;
                    if (params.browserType !== 'Firefox' || (params.browserType === 'Firefox' && browserVersionMain >= 46)) {
                        auth = subscription.getKey ? subscription.getKey('auth') : null;
                    }
                    if (key) {
                        params.publicKey = btoa(String.fromCharCode.apply(null, new Uint8Array(key)));
                    }
                    if (auth) {
                        params.authSecret = btoa(String.fromCharCode.apply(null, new Uint8Array(auth)));
                    }
                }
            }

            return new Promise((resolve, reject) => {
                return this.request('POST', `/subscription/sync/${this.channelId}`, params)
                    .then((json) => {
                        if (json && json.id) {
                            resolve(json);
                        } else if (json && json.error) {
                            reject(json.error);
                        } else {
                            reject();
                        }
                    }).catch((err) => {
                        if (err.reason) {
                            reject(err.reason);
                        } else if (err.status) {
                            reject(err.status);
                        } else {
                            reject(err);
                        }
                    });
            });
        });
    }

    unsubscribe(subscriptionId) {
        return new Promise((resolve) => {
            this.request('POST', '/subscription/unsubscribe', {
                subscriptionId,
                channelId: this.channelId
            }).then(resolve).catch(resolve);
        });
    }

    unsubscribeFeedback(type, text = '') {
        return new Promise((resolve) => {
            this.request('POST', '/subscription/unsubscribe/feedback', {
                type,
                text,
                channelId: this.channelId
            }).then(resolve).catch(resolve);
        });
    }

    startSession(subscriptionId, data) {
        return new Promise((resolve) => {
            this.request('POST', '/subscription/session/start', Object.assign({}, {
                subscriptionId,
                channelId: this.channelId
            }, data || {})).then(resolve).catch(resolve);
        });
    }

    endSession(subscriptionId, options) {
        const blob = new Blob([JSON.stringify(Object.assign({
            subscriptionId,
            channelId: this.channelId
        }, options))], {
            type: 'application/x-www-form-urlencoded'
        });
        return navigator.sendBeacon(this.endpoint + '/subscription/session/end', blob);
    }

    trackSessionImpression(subscriptionId, notificationId) {
        return new Promise((resolve) => {
            this.request('POST', '/subscription/session/impression', Object.assign({}, {
                subscriptionId,
                notificationId,
                channelId: this.channelId
            })).then(resolve).catch(resolve);
        });
    }

    confirmAlertShown(existingPermission, type = 'confirm-alert') {
        let report = true;
        const localStorageKey = 'cleverpush-' + type + '-reported';
        const reportMuteHours = 2;

        const confirmAlertLastReported = sessionStorage.getItem(localStorageKey);
        if (confirmAlertLastReported) {
            const confirmAlertLastReportedInt = parseInt(confirmAlertLastReported, 10);
            if (!isNaN(confirmAlertLastReportedInt)) {
                report = (confirmAlertLastReportedInt + (1000 * 60 * 60 * reportMuteHours)) < Date.now();
            }
        }

        if (report) {
            sessionStorage.setItem(localStorageKey, Date.now());

            const data = {
                channelId: this.channelId,
                confirmAlertTestId: this.confirmAlertTestId
            };

            const parser = new UAParser(navigator.userAgent);
            const browser = parser.getBrowser();
            const platform = parser.getOS();

            data.platformName = platform.name || undefined;
            data.browserType = browser.name || undefined;

            if (typeof existingPermission !== 'undefined' && existingPermission) {
                data.existingPermission = true;
                // do not track existing permissions in confirm alert tests
                delete data.confirmAlertTestId;
            }

            if (typeof window !== 'undefined' && window.CleverPush && window.CleverPush.config.trackOptInPathnames) {
                const pathname = location.pathname;
                if (pathname) {
                    data.pathname = pathname;
                }
            }

            if (this.widgetId) {
                data.widgetId = this.widgetId;
            }

            if (typeof window !== 'undefined' && window.CleverPush && window.CleverPush.config.trackOptInReferrers) {
                try {
                    if (typeof sessionStorage !== 'undefined') {
                        const referrer = sessionStorage.getItem('cleverpush-referrer') || document.referrer.split('?')[0];
                        if (referrer) {
                            data.referrer = referrer;
                        }
                    }
                } catch (ignored) {}
            }

            if (typeof localStorage !== 'undefined' && (localStorage.getItem('subscription-status') === 'was-denied' || localStorage.getItem('subscription-status') === 'denied')) {
                data.wasDenied = true;
            }

            return this.request('POST', '/channel/' + type, data);
        }
        return Promise.resolve();
    }

    trackOptInVisitor() {
        const params = {
            channelId: this.channelId,
            confirmAlertTestId: this.confirmAlertTestId
        };

        if (this.widgetId) {
            params.widgetId = this.widgetId;
        }

        return this.request('POST', '/channel/optin-visitor', params);
    }

    confirmAlertDenied() {
        const params = {
            channelId: this.channelId,
            confirmAlertTestId: this.confirmAlertTestId
        };

        if (this.widgetId) {
            params.widgetId = this.widgetId;
        }

        if (params.existingPermission) {
            // do not track existing permissions in confirm alert tests
            delete params.confirmAlertTestId;
        }

        return this.request('POST', '/channel/blocked-optin-request', params);
    }

    generateWalletPass(walletPassId, options) {
        return new Promise((resolve, reject) => {
            this.request('POST', '/channel/' + this.channelId + '/wallet-pass/' + walletPassId + '/subscribe', Object.assign({}, {
                walletPassId
            }, options)).then(resolve).catch(reject);
        });
    }
}