import UAParser from 'ua-parser-js';

import {
    log,
    logMethodCall
} from '../utils/debug';
import {
    createNode,
    fadeIn,
    fadeOut
} from '../utils/dom';
import {
    translate,
    charsetEscape
} from '../utils/translate';
import FacebookSubscriptionManager from '../subscription/facebookManager';
import {
    topicChecked
} from '../utils/topics';
import {
    os,
    device
} from '../utils/env';
import { 
    detectPrompt
} from '../utils/detect';
import Event from '../const/event';

import './confirm.scss';

export default class Confirm {
    constructor(cleverpush, subscriptionManager) {
        this.autoHideBackdrop = true;
        this.cleverpush = cleverpush;
        this.config = cleverpush.config;
        this.subscriptionManager = subscriptionManager;
        this.id = document.querySelectorAll('.cleverpush-confirm').length + 1;
        this.visible = false;
        this.channelTopics = (this.config.channelTopics || []).filter((topic) => {
            let show = true;
            if (show && topic.matchPath && topic.matchPath.length) {
                show = new RegExp(topic.matchPath).test(window.parent.location.pathname);
            }
            if (show && topic.notMatchPath && topic.notMatchPath.length) {
                show = !(new RegExp(topic.notMatchPath).test(window.parent.location.pathname));
            }
            return show;
        });

        this.facebookEnabled = false;
        if (this.config.facebookPageId && this.config.facebookPageId.length && this.config.facebookCheckboxEnabled) {
            this.facebookEnabled = true;

            // generate an unique user reference
            this.facebookUserRef = this.subscriptionManager.storageManager.getFacebookUserRef();
            if (!this.facebookUserRef) {
                this.facebookUserRef = `${this.config.channelId}-`;
                this.facebookUserRef += Math.random().toString(36).slice(2);
            }
        }

        window.addEventListener('beforeunload', () => {
            this.autoHideBackdrop = true;
            this.hide();
        });
    }

    getArrowNode(type, config) {
        const deviceArrowConfig = () => {
            const parser = new UAParser();
            const browser = parser.getBrowser().name;

            log.info('getArrowNode browser', browser);

            if (type === 'grant') {
                if (browser === 'Chrome' || browser === 'Chromium') {
                    return {
                        x: 347,
                        y: 92,
                        padding: 20
                    };
                } else if (browser === 'Firefox') {
                    return {
                        x: 311,
                        y: 148,
                        padding: 20
                    };
                }
            } else if (type === 'denied') {
                if (browser === 'Chrome' || browser === 'Chromium') {
                    return {
                        x: 131,
                        y: 0,
                        padding: 0
                    };
                } else if (browser === 'Firefox') {
                    return {
                        x: 60,
                        y: 0,
                        padding: 0
                    };
                }
            } else if (type === 'silentPrompt') {
                if (browser === 'Chrome' || browser === 'Chromium' || browser === 'Edge') {
                    return {
                        x: window.innerWidth - 250,
                        y: 0,
                        padding: 0
                    };
                }
            }

            return null;
        };

        const i = type === 'own' ? config : Object.assign({}, deviceArrowConfig(), config || {});
        if (!i) {
            return null;
        }
        const text = i.textNode || document.querySelector('.cleverpush-backdrop-text h2');
        if (text && text.getBoundingClientRect) {
            const boundingRect = text.getBoundingClientRect();
            const o = i.position || {
                x: (window.innerWidth /* - text.getBoundingClientRect().width */ ) / 2,
                y: (window.innerHeight - boundingRect.height) / 2
            };
            const r = Math.sqrt(Math.pow(i.x - o.x, 2) + Math.pow(i.y - o.y, 2));
            const S = Math.max(0.1 * r, 15);
            const s = i.x;
            const C = i.y + S + i.padding;
            const posX = o.x - 15;
            const posY = Math.max(o.y + 20 + boundingRect.height, C + 40);
            const l = posX - s;
            const h = posY - C;
            const _ = `M ${posX} ${posY} q ${-1 * l} ${h}, ${-1 * l} ${-1 * h}`;
            const c = `M ${s - S} ${C + S} q ${S} ${-3 * S}, ${2 * S} 0`;

            log.info('getArrowNode', {
                type,
                i,
                o,
                r,
                S,
                s,
                C,
                posX,
                posY,
                l,
                h,
                _,
                c
            });

            const N = `<div class="cleverpush-backdrop-arrow"><svg width="${window.innerWidth}px" height="${window.innerHeight}px" viewBox="0 0 ${window.innerWidth} ${window.innerHeight}" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke-width="5" stroke-linecap="round" fill="none" fill-rule="evenodd"><path d="${_}" id="tail" stroke="#FFFFFF"></path><path d="${c}" id="head" stroke="#FFFFFF"></path></g></svg></div></div>`;
            return createNode(N);
        }
    }

    removeConfirmBox() {
        logMethodCall('removeConfirmBox');

        this.visible = false;
        const boxes = document.getElementsByClassName('cleverpush-confirm');
        if (boxes.length) {
            const box = boxes[boxes.length - 1];
            if ((!this.withTopics || box.className.indexOf('cleverpush-topic-box') < 0) && box.className.indexOf('cleverpush-attributes-box') < 0) {
                box.parentNode.removeChild(box);
            }
        }

        this.confirmBox = null;
    }

    removeBrandingBox() {
        logMethodCall('removeBrandingBox');

        this.visible = false;
        const boxes = document.getElementsByClassName('cleverpush-branding-box');
        if (boxes.length) {
            const elem = boxes[boxes.length - 1];
            elem.parentNode.removeChild(elem);
        }

        this.confirmBox = null;
    }

    hide() {
        logMethodCall('hide');

        if (this.autoHideBackdrop) {
            this.hideBackdrop();
        }
        this.removeConfirmBox();
        this.removeBrandingBox();
    }

    onCloseClick(e) {
        logMethodCall('closeConfirmBox');

        e.preventDefault();

        const selectedTopics = this.getSelectedTopics();
        const hasTopics = this.hasTopicCheckboxes(true);
        if (this.config.confirmAlertRequireChannelTopics && !selectedTopics.length && hasTopics && this.withTopics && this.config.confirmAlertSelectTopicsLater) {
            alert(this.config.confirmAlertRequireChannelTopicsTitle || 'Bitte wähle mindestens eine Kategorie aus.');
            return;
        }

        this.hide();
        this.hideBackdrop();

        try {
            this.subscriptionManager.storageManager.setClosed();
            if (this.subscriptionManager.iframeMessenger && this.subscriptionManager.iframeMessenger.setClosed) {
                this.subscriptionManager.iframeMessenger.setClosed();
            }
        } catch (err) {
            log.error(err);
        }

        this.subscriptionManager.triggerEvent(Event.OPTIN_CLOSED);
    }

    onAllowClick(e) {
        logMethodCall('onAllowClick');

        e.preventDefault();

        const selectedTopics = this.getSelectedTopics();
        const hasTopics = this.hasTopicCheckboxes(true);

        if (this.config.confirmAlertRequireChannelTopics && !selectedTopics.length && hasTopics && (this.withTopics || !this.config.confirmAlertSelectTopicsLater)) {
            alert(this.config.confirmAlertRequireChannelTopicsTitle || 'Bitte wähle mindestens eine Kategorie aus.');
            return;
        }

        if (typeof this.allowCallback === 'function') {
            this.allowCallback(true, selectedTopics);
            this.allowCallback = undefined;

            if (!this.withTopics) {
                this.hide();
                return;
            }
        }

        if (!this.withTopics && this.config.showConfirmAlert && this.config.confirmAlertDouble) {
            if (os.name === 'Android' || device.type === 'mobile' || this.config.env === 'PREVIEW' && this.config.mobilePreview) {
                this.hide();
                this.hideBackdrop();
                this.appendDoubleBox();

                // track the confirm of the first step
                this.subscriptionManager.api.confirmAlertShown(this.subscriptionManager.existingPermission, 'confirm');
                return;
            }
            const backdrop = document.querySelector('.cleverpush-backdrop');
            if (backdrop) {
                const arrowNode = this.getArrowNode('grant', {
                    textNode: {},
                    position: {
                        x: window.innerWidth / 2,
                        y: window.innerHeight / 2
                    }
                });
                if (arrowNode) {
                    backdrop.appendChild(arrowNode);
                }
            }
        }

        if (!this.confirmBox) {
            this.confirmBox = document.querySelector(`.cleverpush-confirm-${this.id}`);
        }
        if (this.confirmBox) {
            const topics = this.confirmBox.querySelectorAll('input[name="topics[]"]');
            for (let topicIndex = 0; topicIndex < topics.length; topicIndex += 1) {
                if (topics[topicIndex].checked && topics[topicIndex].dataset && topics[topicIndex].dataset.childTopicsRequired === 'true') {
                    const childTopics = this.confirmBox.querySelectorAll(`.topic-child[data-parent-topic="${topics[topicIndex].value}"] input`);
                    if (childTopics.length) {
                        let checkedChildTopics = 0;
                        for (let childTopicIndex = 0; childTopicIndex < childTopics.length; childTopicIndex += 1) {
                            if (childTopics[childTopicIndex].checked) {
                                checkedChildTopics += 1;
                            }
                        }
                        if (checkedChildTopics === 0) {
                            alert(`Bitte wähle mindestens eine Kategorie in ${(topics[topicIndex].parentNode.innerText || '').trim()} aus.`);
                            return;
                        }
                    }
                }
            }
        }

        this.subscriptionManager.setTopics(selectedTopics);
        // this.subscriptionManager.triggerEvent(Event.TOPICS_SET);

        if (this.withTopics && this.config.confirmAlertSelectTopicsLater && hasTopics) {
            this.subscriptionManager.sync();
            this.withTopics = false;
            this.hide();
            if (this.subscribeCallback) {
                this.subscribeCallback(false);
            }

            if (this.subscriptionManager.registerForPushLater) {
                this.subscriptionManager.registerForPush();
            }

            return;
        }

        /*
        if (this.facebookEnabled && this.config.facebookButtonOptIn) {
          window.open(`https://m.me/${this.config.facebookPageId}`, '_blank');
          this.hide();
          this.hideBackdrop();
          // set user_ref so the modal does not appear again
          if (typeof this.subscriptionManager.storageManager.setFacebookUserRef === 'function') {
            this.subscriptionManager.storageManager.setFacebookUserRef(this.facebookUserRef);
          }
          return;
        }
        */

        // Disabled because we only have button opt-in for now
        /*
        if (this.confirmBox && this.facebookEnabled && !this.facebookConfirmed && !this.facebookCheckboxChecked && CleverPush.browserType === 'facebook') {
          let fbCheckbox;
          if (typeof FB !== 'undefined') {
            fbCheckbox = this.confirmBox.querySelector('.fb-messenger-checkbox-wrap');
          } else {
            fbCheckbox = this.confirmBox.querySelector('#cleverpush-facebook-checkbox');
          }
          if (fbCheckbox) {
            const dynamicStyles = document.createElement('style');
            dynamicStyles.type = 'text/css';
            document.head.appendChild(dynamicStyles);
            dynamicStyles.sheet.insertRule(`
              @keyframes cleverpushFlashAnimation {
                0% { opacity: 1; }
                50% { opacity: .1; }
                100% { opacity: 1; }
              }
            `, dynamicStyles.length);

            fbCheckbox.style.paddingLeft = '10px';
            fbCheckbox.style.border = '2px solid red';
            fbCheckbox.style.borderRadius = '3px';
            fbCheckbox.style.animation = 'cleverpushFlashAnimation linear 1s forwards';
            return;
          }
        }
        */

        if (this.config.showUnblockTutorial) {
            this.hide();

            this.showBackdrop(undefined, 'denied', translate('popup.info').formatCleverPush(`<strong>${translate('confirm.allowBrowser') || translate('confirm.allow')}</strong>`));

            try {
                sessionStorage.setItem('cleverpush-subscription-status', 'denied');
            } catch (e) {}

            return;
        }

        if (this.config.showSilentPromptTutorial) {
            this.hide();

            this.config.confirmAlertHideArrow = false;
            this.showBackdrop(undefined, 'silentPrompt', translate('confirm.silentPromptInfo'));

            // return;
        }

        // show native confirm box
        let shouldAppendNativeBox = false;
        if (this.config.ownDomain && (window.parent.location.protocol === 'https:' || window.parent.location.hostname === 'localhost') && this.config.showConfirmAlert) {
            if (this.config.confirmAlertNativeTheme && this.config.confirmAlertNativeTheme !== 'cleverpush-confirm-default' && this.config.confirmAlertNativeTheme !== 'cleverpush-confirm-backdrop-text') {
                this.removeConfirmBox();
                shouldAppendNativeBox = true;
            } else {
                this.hide();
            }

            // track the confirm of the first step
            this.subscriptionManager.api.confirmAlertShown(this.subscriptionManager.existingPermission, 'confirm');
        } else {
            this.hide();
        }

        localStorage.setItem('cleverpush-subscription-status', 'allowed');

        if (this.config.env === 'PREVIEW') {
            const nativePreview = document.getElementById('cleverpush-preview-native');
            if (nativePreview) {
                nativePreview.style.display = 'block';

                if (shouldAppendNativeBox) {
                    this.appendConfirmBox(`${this.config.confirmAlertNativeTheme} ${this.config.confirmAlertNativeTheme}-native`);
                }

                return;
            }
        }

        let subscribeCallbackCalled = false;
        let showBackdrop;

        detectPrompt({
            subscriptionManager: this.subscriptionManager,
            config: this.config,
            subscribe: () => {
                this.subscriptionManager.subscribeForce(false).then((res) => {
                    subscribeCallbackCalled = true;
                    this.hideBackdrop();
                    if (this.subscribeCallback) {
                        this.subscribeCallback(false, res);
                    }
                }).catch((err) => {
                    subscribeCallbackCalled = true;
                    this.hideBackdrop();
                    if (this.subscribeCallback) {
                        this.subscribeCallback(err);
                    }
                });
            },
            showBackdrop: () => {
                if (shouldAppendNativeBox) {
                    this.appendConfirmBox(`${this.config.confirmAlertNativeTheme} ${this.config.confirmAlertNativeTheme}-native`);
                }
            },
            setShowBackdrop: backdrop => showBackdrop = backdrop,
            showSilentAlert: () => {
                if (!subscribeCallbackCalled) {
                    this.hide();

                    this.config.confirmAlertHideArrow = false;
                    this.showBackdrop(undefined, 'silentPrompt', translate('confirm.silentPromptInfo'));
                }
            },
        });

        // send fb checkbox confirm event
        this.confirmFacebook();
    }

    appendDoubleBox() {
        const box = createNode(
            `
      <div class="cleverpush-confirm-double cleverpush-confirm-double-${this.id}">
        <div class="cleverpush-confirm-double-above">
          ${translate('confirm.doubleText').formatCleverPush(`<strong>${translate('confirm.allowBrowser') || translate('confirm.allow')}</strong>`)}
        </div>
        <div class="cleverpush-confirm-double-content">
          <div class="cleverpush-confirm-double-text">
            <div class="cleverpush-confirm-double-bell">
              <svg height="512pt" viewBox="-21 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg">
              <path d="m434.753906 360.8125c-32.257812-27.265625-50.753906-67.117188-50.753906-109.335938v-59.476562c0-75.070312-55.765625-137.214844-128-147.625v-23.042969c0-11.796875-9.558594-21.332031-21.332031-21.332031-11.777344 0-21.335938 9.535156-21.335938 21.332031v23.042969c-72.253906 10.410156-128 72.554688-128 147.625v59.476562c0 42.21875-18.496093 82.070313-50.941406 109.503907-8.300781 7.105469-13.058594 17.429687-13.058594 28.351562 0 20.589844 16.746094 37.335938 37.335938 37.335938h352c20.585937 0 37.332031-16.746094 37.332031-37.335938 0-10.921875-4.757812-21.246093-13.246094-28.519531zm0 0"/><path d="m234.667969 512c38.632812 0 70.953125-27.542969 78.378906-64h-156.757813c7.421876 36.457031 39.742188 64 78.378907 64zm0 0"/></svg>
            </div>
            <div class="cleverpush-confirm-double-title">${translate('confirm.nativeTitle').formatCleverPush(location.hostname || this.config.domain)}</div>
          </div>
          <div class="cleverpush-confirm-double-buttons">
            <button type="button" class="cleverpush-confirm-double-btn">${(translate('confirm.allowBrowser') || translate('confirm.allow'))}</button>
          </div>
        </div>
        <div class="cleverpush-confirm-double-below">
          <div class="cleverpush-confirm-double-arrow"></div>
        </div>
      </div>
      `
        );

        const content = box.querySelector('.cleverpush-confirm-double-content');
        const contentSize = content.getBoundingClientRect();

        const arrow = box.querySelector('.cleverpush-confirm-double-arrow');
        if (arrow) {
            const arrowNode = this.getArrowNode('own', {
                x: window.innerWidth - 55,
                y: (window.innerHeight / 2) + (contentSize.height / 2) + 65,
                padding: 0,
                textNode: box.querySelector('.cleverpush-confirm-double-below')
            });
            console.log(arrowNode);
            if (arrowNode) {
                arrow.appendChild(arrowNode);
            }
        }

        const allowButton = box.querySelector('.cleverpush-confirm-double-btn');
        if (allowButton) {
            allowButton.addEventListener('click', this.onDoubleAllowClick.bind(this));
        }

        document.body.appendChild(box);

        this.doubleBox = document.body.querySelector('.cleverpush-confirm-double');
    }

    onDoubleAllowClick(e) {
        e.preventDefault();
        logMethodCall('onDoubleAllowClick');

        if (this.doubleBox) {
            this.doubleBox.parentNode.removeChild(this.doubleBox);
        }

        this.subscriptionManager.subscribeForce(false).then((res) => {
            this.hideBackdrop();
            if (this.subscribeCallback) {
                this.subscribeCallback(false, res);
            }
        }).catch((err) => {
            this.hideBackdrop();
            if (this.subscribeCallback) {
                this.subscribeCallback(err);
            }
        });
    }

    confirmFacebook() {
        if (this.facebookEnabled && !this.facebookConfirmed && typeof FB !== 'undefined') {
            this.facebookConfirmed = true;
            // send confirmation to facebook
            FB.AppEvents.logEvent('MessengerCheckboxUserConfirmation', null, {
                app_id: this.config.facebookAppId,
                page_id: this.config.facebookPageId,
                ref: this.config.channelId,
                user_ref: this.facebookUserRef
            });
            if (this.facebookCheckboxChecked && typeof this.subscriptionManager.setFacebookUserRef === 'function') {
                this.subscriptionManager.setFacebookUserRef(this.facebookUserRef);
            }
        }
    }

    onDenyClick(e) {
        logMethodCall('denyPush');

        e.preventDefault();

        try {
            this.subscriptionManager.storageManager.setDenied();
            if (this.subscriptionManager.iframeMessenger && this.subscriptionManager.iframeMessenger.setDenied) {
                this.subscriptionManager.iframeMessenger.setDenied();
            }
        } catch (err) {
            log.error(err);
        }

        this.autoHideBackdrop = true;
        this.hide();

        if (this.config.ownDomain && (window.parent.location.protocol === 'https:' || window.parent.location.hostname === 'localhost')) {
            this.showDenyAlert();
        }

        if (typeof this.allowCallback === 'function') {
            this.allowCallback(false, []);
            this.allowCallback = undefined;
        }
    }

    onTopicsDenyClick(e) {
        logMethodCall('denyPush');

        e.preventDefault();

        this.autoHideBackdrop = true;
        this.hide();

        if (typeof this.allowCallback === 'function') {
            this.allowCallback(false, []);
            this.allowCallback = undefined;
        }
    }

    hasTopicCheckboxes(internal) {
        logMethodCall('hasTopicCheckboxes');

        if (this.config.confirmAlertSelectTopicsLater && !this.withTopics && typeof internal === 'undefined') {
            // used to initially set all pre-checked topics
            return true;
        }

        const confirm = document.querySelector('.cleverpush-confirm');
        if (confirm) {
            const checkboxes = confirm.querySelectorAll('input[name="topics[]"]');
            return checkboxes.length > 0;
        }

        return false;
    }

    getSelectedTopics() {
        logMethodCall('getSelectedTopics');

        // by default, return all pre-checked topics
        let topics = (this.channelTopics || []).filter(topicChecked).map(topic => topic._id);

        const confirm = document.querySelector('.cleverpush-confirm');
        if (confirm) {
            const checkboxes = confirm.querySelectorAll('input[name="topics[]"]');
            if (checkboxes && checkboxes.length) {
                topics = [];
                for (let i = 0; i < checkboxes.length; i += 1) {
                    if ((checkboxes[i].type === 'checkbox' || checkboxes[i].type === 'radio') && checkboxes[i].checked) {
                        topics.push(checkboxes[i].value);
                    }
                }
            }
        }

        return topics;
    }

    showDenyAlert() {
        logMethodCall('showDenyAlert');


        /*
        document.body.appendChild(createNode(
          `<div class="cleverpush-deny-alert cleverpush-deny-alert-${this.id}">` +
          '  <button class="cleverpush-deny-alert-close">&times;</button>' +
          `  <div class="cleverpush-deny-alert-text">${translate('deny.alert')}</div>` +
          '</div>',
        ));

        this.denyAlert = document.querySelector(`.cleverpush-deny-alert-${this.id}`);

        this.denyAlertButton = this.denyAlert.querySelector('.cleverpush-deny-alert-close');
        if (this.denyAlertButton) {
          this.denyAlertButton.addEventListener('click', this.onDenyAlertClick.bind(this));
        }

        setTimeout(() => {
          this.onClickToCloseDenyAlertListener = this.onClickToCloseDenyAlert.bind(this);
          document.addEventListener('click', this.onClickToCloseDenyAlertListener);
          document.addEventListener('touchstart', this.onClickToCloseDenyAlertListener);
        }, 0);
        */
    }

    onClickToCloseDenyAlert(e) {
        if (this.denyAlert && e.target !== this.denyAlert && e.target.parentNode !== this.denyAlert) {
            document.removeEventListener('click', this.onClickToCloseDenyAlertListener);

            this.onDenyAlertClick();
        }
    }

    onDenyAlertClick(e) {
        if (typeof e !== 'undefined') {
            e.preventDefault();
        }

        logMethodCall('onDenyAlertClick');

        const elem = document.getElementsByClassName('cleverpush-deny-alert')[0];
        elem.parentNode.removeChild(elem);

        this.denyAlert = null;
    }

    showBrandingBox() {
        logMethodCall('showBrandingBox');

        document.body.appendChild(createNode(
            `<div class="cleverpush-branding-box cleverpush-branding-box-${this.id}"><div class="cleverpush-branding-box-text">${this.getBrandingLinks()}</div><button class="cleverpush-branding-box-close">&times;</button></div>`,
        ));

        this.brandingBox = document.querySelector(`.cleverpush-branding-box-${this.id}`);

        this.brandingBoxCloseButton = this.brandingBox.querySelector('.cleverpush-branding-box-close');
        if (this.brandingBoxCloseButton) {
            this.brandingBoxCloseButton.addEventListener('click', this.removeBrandingBox.bind(this));
        }
    }

    getBrandingLinks() {
        const links = [];

        let linkColor = this.config.confirmAlertThemeLinkColor;
        if (this.config.confirmAlertLinkStyle && this.config.confirmAlertLinkStyle.color) {
            linkColor = this.config.confirmAlertLinkStyle.color;
        }

        if (!this.config.hideBranding) {
            if (this.config.cleverpushDomain === 'convertpush.io') {
                links.push(`<a href="https://convertpush.io/" target="_blank" style="${linkColor ? (`color: ${linkColor} !important`) : ''}">Powered by ConvertPush</a>`);
            } else {
                links.push(`<a href="https://cleverpush.com/" target="_blank" style="${linkColor ? (`color: ${linkColor} !important`) : ''}">Powered by CleverPush</a>`);
            }
        }
        if (this.config.privacyPolicyUrl) {
            links.push(`<a href="${this.config.privacyPolicyUrl}" target="_blank" style="${linkColor ? (`color: ${linkColor} !important`) : ''}">${this.config.privacyPolicyText || translate('privacy')}</a>`);
        }
        if (this.config.faqText && this.config.faqUrl) {
            links.push(`<a href="${this.config.faqUrl}" target="_blank" style="${linkColor ? (`color: ${linkColor} !important`) : ''}">${this.config.faqText || 'FAQ'}</a>`);
        }

        return links.join(' &nbsp;/&nbsp; ');
    }

    showBackdrop(callback, typeParam, errorMessage) {
        logMethodCall('showBackdrop');

        let type = 'grant';
        if (typeof typeParam !== 'undefined') {
            if (typeParam === 'denied' || typeParam === 'silentPrompt') {
                type = typeParam;
            }
        }

        if (type !== 'denied' && type !== 'silentPrompt' && !this.config.hideNativeConfirmAlert && !this.config.showConfirmAlert && (this.config.confirmAlertNativeTheme && this.config.confirmAlertNativeTheme !== 'cleverpush-confirm-default' && this.config.confirmAlertNativeTheme !== 'cleverpush-confirm-backdrop-text') && this.config.ownDomain && (window.parent.location.protocol === 'https:' || window.parent.location.hostname === 'localhost')) {
            log.debug('appending native backdrop', this.config.showConfirmAlert);
            this.appendConfirmBox(`${this.config.confirmAlertNativeTheme} ${this.config.confirmAlertNativeTheme}-native`);
        }

        if (!this.config.confirmAlertBackdrop && !this.config.showConfirmAlert && (!this.config.confirmAlertNativeTheme || this.config.confirmAlertNativeTheme === 'cleverpush-confirm-default') && !this.config.hideBranding) {
            this.showBrandingBox();
        }

        if (type !== 'denied' && type !== 'silentPrompt' && (typeof this.config.confirmAlertBackdrop !== 'undefined' && !this.config.confirmAlertBackdrop)) {
            if (typeof callback === 'function') {
                callback();
            }
            return;
        }

        let configAlertLocalization = this.config.alertLocalization || {};
        const language = (navigator.language || navigator.userLanguage || '').substr(0, 2);
        if (this.config.alertLocalizationTranslations && language && this.config.alertLocalizationTranslations[language]) {
            configAlertLocalization = Object.assign({}, configAlertLocalization, this.config.alertLocalizationTranslations[language]);
        }
        Object.keys(configAlertLocalization).forEach((localizationKey) => {
            if (configAlertLocalization[localizationKey]) {
                configAlertLocalization[localizationKey] = charsetEscape(configAlertLocalization[localizationKey]);
            }
        });

        let backdropText = '';
        if (this.config.ownDomain && (window.parent.location.protocol === 'https:' || window.parent.location.hostname === 'localhost')) {
            if (type === 'denied' || type === 'silentPrompt' || this.config.confirmAlertNativeTheme === 'cleverpush-confirm-backdrop-text') {
                if (type === 'grant') {
                    backdropText += `<div class="cleverpush-backdrop-text" style="${this.config.confirmAlertThemeTextColor ? (`color: ${this.config.confirmAlertThemeTextColor}`) : ''}">
${this.config.channelIcon && !this.config.confirmAlertHideChannelIcon ? `<p class="cleverpush-backdrop-icon"><img src="${this.config.channelIcon}" alt="${this.config.channelName}"></p>` : ''}
<h2>${configAlertLocalization.title || translate('popup.info').formatCleverPush(`<strong>${translate('confirm.allowBrowser') || translate('confirm.allow')}</strong>`)}</h2>
<p>${configAlertLocalization.info || translate('popup.text').formatCleverPush(`<strong>${this.config.channelName}</strong>`)}</p>
</div>`;
                } else if (type === 'silentPrompt') {
                    backdropText += `<div class="cleverpush-backdrop-text"><h2>${errorMessage}</h2></div>`;
                } else {
                    const parser = new UAParser();
                    let {
                        name: browser
                    } = parser.getBrowser();
                    let {
                        name: platform
                    } = parser.getOS();
                    browser = browser.toLowerCase().replace(/\s/g, '').replace('chromium', 'chrome');
                    platform = platform.toLowerCase().replace(/\s/g, '').replace('macos', 'mac');

                    let unblockImage = '';
                    if ((browser === 'chrome' || browser === 'firefox' || browser === 'safari') && (platform === 'android' || platform === 'windows' || platform === 'mac')) {
                        if (browser === 'chrome' && platform === 'android') {
                            unblockImage = `<div><video src="https://static.cleverpush.com/app/images/unblock-tutorial/${browser}-${platform}.mp4" width="100%" autoplay loop muted playsinline /></div>`;
                        } else {
                            unblockImage = `<div><img src="https://static.cleverpush.com/app/images/unblock-tutorial/${browser}-${platform}.gif" /></div>`;
                        }
                    }

                    backdropText += `<div class="cleverpush-backdrop-text"><h2>${unblockImage ? translate('unblock.title') : errorMessage}</h2>${unblockImage}</div>`;
                }
            }

            if (this.config.hideNativeConfirmAlert || (this.config.showConfirmAlert && (!this.config.confirmAlertNativeTheme || this.config.confirmAlertNativeTheme === 'cleverpush-confirm-default'))) {
                // this.backdropHasBranding = true;
                // backdropText += `<div class="cleverpush-backdrop-branding">${this.getBrandingLinks()}</div>`;
            }
        }

        const existingBackdrops = document.getElementsByClassName('cleverpush-backdrop');
        if (existingBackdrops && existingBackdrops.length) {
            for (let i = 0; i < existingBackdrops.length; i += 1) {
                const existingBackdrop = existingBackdrops[i];
                if (existingBackdrop && existingBackdrop.parentNode) {
                    existingBackdrop.parentNode.removeChild(existingBackdrop);
                }
            }
        }

        const backdrop = document.createElement('div');
        backdrop.className = 'cleverpush-backdrop';
        backdrop.style.display = 'none';
        backdrop.innerHTML = backdropText;
        if (this.config.confirmAlertBackdropOpacity && type !== 'denied' && type !== 'silentPrompt') {
            backdrop.style.backgroundColor = `rgba(0, 0, 0, ${this.config.confirmAlertBackdropOpacity})`;
        }
        if (this.config.confirmAlertBackdropBlur) {
            backdrop.className += ' cleverpush-backdrop-blur';
        }

        // remove backdrop on click
        backdrop.addEventListener('click', (e) => {
            e.preventDefault();
            this.hideBackdrop(type);
        });

        if (document.body) {
            document.body.appendChild(backdrop);

            if (document.body.classList) {
                document.body.classList.add('has-cleverpush-backdrop');
                if (this.config.confirmAlertBackdropBlur) {
                    document.body.classList.add('has-cleverpush-backdrop-blur');
                }
            } else {
                document.body.className += ' has-cleverpush-backdrop';
                if (this.config.confirmAlertBackdropBlur) {
                    document.body.className += ' has-cleverpush-backdrop-blur';
                }
            }
        }

        if (backdropText && backdropText.length && !this.config.confirmAlertHideArrow) {
            const arrowNode = this.getArrowNode(type);
            if (arrowNode) {
                backdrop.appendChild(arrowNode);
            }
        }

        fadeIn(backdrop, 200, typeof callback !== 'undefined' ? callback : () => {});
    }

    hideBackdrop(permission) {
        logMethodCall('hideBackdrop');

        this.removeBrandingBox();

        if (document.body) {
            if (document.body.classList) {
                if (this.config.confirmAlertBackdropBlur) {
                    document.body.classList.remove('has-cleverpush-backdrop-blur');
                }
                document.body.classList.remove('has-cleverpush-backdrop');
            } else {
                if (this.config.confirmAlertBackdropBlur) {
                    document.body.className = document.body.className.replace('has-cleverpush-backdrop-blur', '');
                }
                document.body.className = document.body.className.replace('has-cleverpush-backdrop', '');
            }
        }

        if (!this.config.hideNativeConfirmAlert && (this.config.confirmAlertNativeTheme && this.config.confirmAlertNativeTheme !== 'cleverpush-confirm-default' && this.config.confirmAlertNativeTheme !== 'cleverpush-backdrop-text')) {
            this.removeConfirmBox();
        }

        if ((typeof permission === 'undefined' || permission !== 'denied') && typeof this.config.confirmAlertBackdrop !== 'undefined' && !this.config.confirmAlertBackdrop && !this.config.showSilentPromptTutorial) {
            return;
        }

        const backdrops = document.getElementsByClassName('cleverpush-backdrop');
        for (let backdropIndex = 0; backdropIndex < backdrops.length; backdropIndex += 1) {
            const backdrop = backdrops[backdropIndex];
            ((backdropNode) => {
                fadeOut(backdropNode, 200, () => {
                    if (backdropNode && backdropNode.parentNode) {
                        backdropNode.parentNode.removeChild(backdropNode);
                    }
                });
            })(backdrop);
        }

        if (typeof permission !== 'undefined' && permission === 'granted') {
            this.confirmFacebook();
        }
    }

    camelCaseToDash(myStr) {
        return myStr.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    }

    getLocalization(confirmConfig) {
        let configAlertLocalization = this.config.alertLocalization || {};
        const language = (navigator.language || navigator.userLanguage || '').substr(0, 2);
        if (this.config.alertLocalizationTranslations && language && this.config.alertLocalizationTranslations[language]) {
            configAlertLocalization = Object.assign({}, configAlertLocalization, this.config.alertLocalizationTranslations[language]);
        }

        configAlertLocalization = Object.assign({}, configAlertLocalization, confirmConfig.customLocalization);

        if (confirmConfig.topicsRequired) {
            this.config.confirmAlertRequireChannelTopics = true;
        }

        const localization = {
            title: configAlertLocalization.title || translate('confirm.title').formatCleverPush(this.config.channelName),
            info: configAlertLocalization.info || translate('confirm.info'),
            deny: configAlertLocalization.deny || translate('confirm.deny'),
            allow: configAlertLocalization.allow || translate('confirm.allow'),
            confirmInfo: configAlertLocalization.confirmInfo || translate('popup.info').formatCleverPush(translate('confirm.allowBrowser')),
            nativeTitle: configAlertLocalization.nativeTitle,
            nativeText: configAlertLocalization.nativeText,
        };

        Object.keys(localization).forEach((localizationKey) => {
            if (localization[localizationKey]) {
                localization[localizationKey] = charsetEscape(localization[localizationKey]);
            }
        });

        return localization;
    }

    appendConfirmBox(confirmAlertThemeParam, withTopicsParam, configParam, allowCallback) {
        logMethodCall('appendConfirmBox', confirmAlertThemeParam, withTopicsParam, configParam);

        if (this.confirmBox) {
            // already appended
            return;
        }

        this.withTopics = typeof withTopicsParam === 'boolean' && withTopicsParam;

        if (typeof allowCallback === 'function') {
            this.allowCallback = allowCallback;
        }

        const confirmConfig = typeof configParam === 'object' ? configParam : {};

        const localization = this.getLocalization(confirmConfig);

        let confirmClass = 'cleverpush-confirm-default';
        let confirmStyle = '';
        const confirmAlertTheme = typeof confirmAlertThemeParam !== 'undefined' ? confirmAlertThemeParam : this.config.confirmAlertTheme;
        if (confirmAlertTheme) {
            confirmClass = confirmAlertTheme;
        }
        const parser = new UAParser();
        if (!this.config.confirmAlertThemeVariant || this.config.confirmAlertThemeVariant === 'cleverpush-confirm-auto') {
            if (parser.getOS().name === 'Mac OS') {
                confirmClass += ' cleverpush-confirm-mac';
            } else if (parser.getOS().name === 'Windows') {
                confirmClass += ' cleverpush-confirm-windows';
                confirmClass += ' cleverpush-confirm-chrome';
            }
        } else {
            confirmClass += (` ${this.config.confirmAlertThemeVariant}`);
        }

        if (parser.getBrowser().name === 'Firefox') {
            confirmClass += ' cleverpush-confirm-firefox';
        }
        if (parser.getBrowser().name === 'Opera') {
            confirmClass += ' cleverpush-confirm-opera';
        }
        if (parser.getBrowser().name === 'Safari') {
            confirmClass += ' cleverpush-confirm-safari';
        }
        if (parser.getBrowser().name === 'Chrome') {
            confirmClass += ' cleverpush-confirm-chrome';
        }
        if (parser.getBrowser().name === 'Edge') {
            confirmClass += ' cleverpush-confirm-edge';
        }

        // hotfix
        if (this.config.confirmAlertStyle && this.config.confirmAlertStyle.color) {
            this.config.confirmAlertThemeTextColor = this.config.confirmAlertStyle.color;
        }

        if (this.config.confirmAlertThemeBackgroundColor) {
            confirmStyle += `background-color: ${this.config.confirmAlertThemeBackgroundColor};`;
            if (this.config.confirmAlertThemeTextColor) {
                confirmStyle += `color: ${this.config.confirmAlertThemeTextColor};`;
            }
        } else if (this.config.confirmAlertThemeBackground) {
            confirmClass += (` ${this.config.confirmAlertThemeBackground}`);
        }

        if (this.config.confirmAlertHideChannelIcon) {
            confirmClass += ' cleverpush-confirm-hide-channel-icon';
        }
        if (this.config.confirmAlertHideArrow) {
            confirmClass += ' cleverpush-confirm-hide-arrow';
        }

        if (this.config.env === 'PREVIEW') {
            confirmClass += ' cleverpush-confirm-preview';
        }

        // add id to confirm class
        confirmClass += ` cleverpush-confirm-${this.id}`;

        let topicSelection = '';
        if (!confirmConfig.topicsLayer || this.withTopics) {
            if (this.config.topicsTemplateFunction) {
                topicSelection = '<div class="cleverpush-topics cleverpush-confirm-topics"></div>';
            } else if (this.channelTopics && this.channelTopics.length && !this.config.confirmAlertHideChannelTopics) {
                let topics = this.channelTopics.filter(t => !t.parentTopic);
                if (confirmConfig && confirmConfig.parentTopic) {
                    topics = this.channelTopics.filter(t => t.parentTopic === confirmConfig.parentTopic);
                }

                topicSelection += '<div class="cleverpush-topics cleverpush-confirm-topics">';
                topics.sort((a, b) => a.sort - b.sort).forEach((topic) => {
                    const topicName = charsetEscape(topic.name);

                    const childTopics = this.channelTopics.filter(t => t.parentTopic === topic._id);

                    topicSelection += `<div class="${childTopics.length ? 'topic-has-children' : ''}"><label style="${this.config.confirmAlertThemeTextColor ? (`color: ${this.config.confirmAlertThemeTextColor};`) : ''}"><input type="${this.config.confirmAlertRadioButtonTopics || confirmConfig.topicsRadioButtons ? 'radio' : 'checkbox'}" name="topics[]" value="${topic._id}" ${topicChecked(topic, this.subscribedTopics) ? 'checked' : ''} ${topic.childTopicsRequired ? ' data-child-topics-required="true"' : ''}> ${topicName}</label></div>`;

                    if (childTopics.length) {
                        childTopics.forEach((childTopic) => {
                            const childTopicName = charsetEscape(childTopic.name);

                            const childInputType = this.config.confirmAlertRadioButtonTopics || topic.childTopicsRadioButtons ? 'radio' : 'checkbox';

                            topicSelection += `<div class="topic-child" data-parent-topic="${topic._id}" style="margin-left: 20px; font-size: 90%; ${!topicChecked(topic, this.subscribedTopics) ? 'display: none;' : ''}"><label><input type="${childInputType}" name="topics[]" value="${childTopic._id}" ${topicChecked(topic, this.subscribedTopics) && topicChecked(childTopic, this.subscribedTopics) ? 'checked' : ''}> ${childTopicName}</label></div>`;
                        });
                    }
                });
                topicSelection += '</div>';
            }
        }

        let parentContainer;
        if (this.config.appendConfirmBoxTo) {
            parentContainer = document.querySelector(this.config.appendConfirmBoxTo);
        }
        if (!parentContainer) {
            if (this.config.appendConfirmBoxTo) {
                log.error('appendConfirmBoxTo: container not found. Falling back to default.');
            }
            parentContainer = document.body;
        } else {
            confirmClass += 'cleverpush-confirm-static';
        }

        const showLinks = true;
        if (!this.withTopics && (window.parent.location.protocol === 'https:' || window.parent.location.hostname === 'localhost')) {
            let isNativeBox = confirmAlertThemeParam && confirmAlertThemeParam !== 'cleverpush-confirm-default cleverpush-confirm-default-native' && confirmAlertThemeParam !== 'cleverpush-confirm-backdrop-text cleverpush-confirm-backdrop-text-native';
            // if user does not need to accept native browser prompt -> show topics in first step
            if (!isNativeBox && typeof window.Notification !== 'undefined' && window.Notification.permission === 'granted') {
                isNativeBox = true;
            }
            log.debug('isNativeBox', isNativeBox);

            if (this.config.confirmAlertSelectTopicsLater) {
                topicSelection = '';
            } else if (this.config.showConfirmAlert && this.config.isSafari_12_1) {
                if (isNativeBox) {
                    topicSelection = '';
                }
            } else if (this.config.showConfirmAlert) {
                const canHideTopics = this.config.confirmAlertNativeTheme && this.config.confirmAlertNativeTheme !== 'cleverpush-confirm-default';
                if (isNativeBox) {
                    // links were already shown on first confirm box
                    // showLinks = false;

                    if (canHideTopics && this.config.showConfirmAlertMobile) {
                        // show topics only on 1st box (mobile)
                        topicSelection = '';
                    }
                } else if (canHideTopics && !this.config.showConfirmAlertMobile) {
                    // show topics only on 2nd box (desktop)
                    topicSelection = '';
                }
            } else if (isNativeBox && this.config.confirmAlertSelectTopicsLater && this.config.ownDomain) {
                topicSelection = '';
            }

            if (isNativeBox) {
                localization.title = localization.nativeTitle || localization.title ||  '';
                localization.info = localization.nativeText || localization.info || '';
            }
        }

        if (this.facebookEnabled && !this.config.facebookButtonOptIn) {
            if (this.config.facebookDoubleOptIn && !this.facebookDoubleOptInConfirmed) {
                // add the facebook confirm checkbox to topic selection (if double optin enabled)
                topicSelection += `
        <div style="margin-top: 15px; margin-bottom: 0; font-weight: bold;" class="cleverpush-confirm-messenger-title cleverpush-topics cleverpush-confirm-topics">Facebook Messenger</div>
        <div class="cleverpush-topics cleverpush-confirm-topics"><div style="margin-top: 5px;"><label style="line-height: 1.5;"><input type="checkbox" id="cleverpush-facebook-checkbox"> Ich möchte den Facebook-Newsletter und akzeptiere die <a href="${this.config.privacyPolicyUrl}" target="_blank">Datenschutzerklärung</a></label></div></div>`;
            }

            // add the messenger checkbox to topic selection
            topicSelection += `<div class="fb-messenger-checkbox-wrap"><div class="fb-messenger-checkbox" origin="${location.origin}" page_id="${this.config.facebookPageId}" messenger_app_id="${this.config.facebookAppId}" user_ref="${this.facebookUserRef}" prechecked="true" allow_login="true" size="large" style="margin-top: 10px; margin-left: -14px;"></div></div>`;
        }

        if (this.withTopics && !confirmConfig.customLocalization) {
            confirmClass += ' cleverpush-topic-box';
            localization.title = this.config.confirmAlertSelectTopicsLaterTitle || translate('confirm.selectTopics') || localization.title;
            if (this.config.confirmAlertSelectTopicsLaterTitle) {
                localization.title = charsetEscape(localization.title);
            }
            localization.info = '';
            localization.allow = translate('panel.save');
        }

        const confirm = createNode(
            `<div class="cleverpush-confirm ${confirmClass}" style="${confirmStyle}">
        <div class="cleverpush-confirm-caret cleverpush-confirm-caret-top" style="display: none; border-bottom-color: ${this.config.confirmAlertThemeBackgroundColor}"></div>
        <div class="cleverpush-confirm-caret cleverpush-confirm-caret-bottom" style="display: none; border-top-color: ${this.config.confirmAlertThemeBackgroundColor}"></div>
        ${this.config.confirmAlertCloseButton ? '<button type="button" class="cleverpush-confirm-hide">&times;</button>' : ''}
        <div class="cleverpush-confirm-wrap">
            ${confirmAlertThemeParam === 'cleverpush-confirm-topbar cleverpush-confirm-topbar-native' ? '<div class="cleverpush-confirm-topbar-arrow"></div>' : ''}
            <div class="${`cleverpush-confirm-icon${this.config.confirmAlertRoundChannelIcon ? ' cleverpush-confirm-icon-round' : ''}`}"><img src="${this.config.channelIcon}"></div>
          <div class="cleverpush-confirm-text" style="${this.config.confirmAlertThemeTextColor ? (`color: ${this.config.confirmAlertThemeTextColor};`) : ''}"><span class="cleverpush-confirm-title" style="${this.config.confirmAlertThemeTitleColor ? (`color: ${this.config.confirmAlertThemeTitleColor};`) : ''}">${localization.title}</span>
            <p class="cleverpush-confirm-info" style="${this.config.confirmAlertThemeTextColor ? (`color: ${this.config.confirmAlertThemeTextColor};`) : ''} ${this.config.confirmAlertStyle && this.config.confirmAlertStyle.fontSize ? (`font-size: ${this.config.confirmAlertStyle.fontSize}px !important;`) : ''}">${localization.info}</p>
            ${showLinks ? `<div class="cleverpush-confirm-branding"><span>${this.getBrandingLinks()}</span></div>` : ''}
            ${topicSelection}
            </div>
          <div class="cleverpush-clearfix cleverpush-clearfix-bottom">
            <div class="cleverpush-confirm-buttons">
            <button class="cleverpush-confirm-btn cleverpush-confirm-btn-deny">${localization.deny}</button>
            <button class="cleverpush-confirm-btn cleverpush-confirm-btn-allow" style="${this.config.confirmAlertThemeButtonTextColor ? (`color: ${this.config.confirmAlertThemeButtonTextColor};`) : ''} ${this.config.confirmAlertThemeButtonBackgroundColor ? (`border-color: transparent !important; background: none; background-color: ${this.config.confirmAlertThemeButtonBackgroundColor};`) : ''}">${localization.allow}</button></div>
            <div class="cleverpush-clearfix"></div>
          </div>
          ${localization.confirmInfo ? `<div class="cleverpush-confirm-bottom-info" style="display: none;">
            <div class="${`cleverpush-confirm-icon${this.config.confirmAlertRoundChannelIcon ? ' cleverpush-confirm-icon-round' : ''}`}"><img src="${this.config.channelIcon}"></div>
            <div class="cleverpush-confirm-bottom-info-text">${localization.confirmInfo}</div>
            <div class="cleverpush-clearfix"></div>
          </div>` : ''}
        </div>
      </div>`
        );

        parentContainer.appendChild(confirm);

        this.confirmBox = document.querySelector(`.cleverpush-confirm-${this.id}`);
        if (this.confirmBox && typeof this.config.confirmAlertStyle === 'object') {
            for (const property in this.config.confirmAlertStyle) {
                if (this.config.confirmAlertStyle.hasOwnProperty(property)) {
                    this.confirmBox.style[property] = this.config.confirmAlertStyle[property] + (!isNaN(this.config.confirmAlertStyle[property]) ? 'px' : '');
                }
            }
        }

        this.confirmBoxTitle = document.querySelector(`.cleverpush-confirm-${this.id} .cleverpush-confirm-title`);
        if (this.confirmBoxTitle && typeof this.config.confirmAlertTitleStyle === 'object') {
            for (const property in this.config.confirmAlertTitleStyle) {
                if (this.config.confirmAlertTitleStyle.hasOwnProperty(property)) {
                    this.confirmBoxTitle.style[property] = this.config.confirmAlertTitleStyle[property] + (!isNaN(this.config.confirmAlertTitleStyle[property]) ? 'px' : '');
                }
            }
        }

        // if only button background color is set OR button background color === allow button background color:
        // -> unset button background color and set allow button background color
        try {
            if ((this.config.confirmAlertButtonStyle || {}).backgroundColor && (!(this.config.confirmAlertAllowButtonStyle || {}).backgroundColor || (this.config.confirmAlertAllowButtonStyle || {}).backgroundColor === (this.config.confirmAlertButtonStyle || {}).backgroundColor)) {
                (this.config.confirmAlertAllowButtonStyle || {}).backgroundColor = (this.config.confirmAlertButtonStyle || {}).backgroundColor;
                delete(this.config.confirmAlertButtonStyle || {}).backgroundColor;
            }
            if ((this.config.confirmAlertButtonStyle || {}).color && (!(this.config.confirmAlertAllowButtonStyle || {}).color || (this.config.confirmAlertAllowButtonStyle || {}).color === (this.config.confirmAlertButtonStyle || {}).color)) {
                (this.config.confirmAlertAllowButtonStyle || {}).color = (this.config.confirmAlertButtonStyle || {}).color;
                delete(this.config.confirmAlertButtonStyle || {}).color;
            }
        } catch (ignored) {}

        // fix margin left
        if ((this.cleverpush.config.customCss ||  '').replace(/\r?\n|\r/g, '').replace(/\s/g, '').indexOf('.cleverpush-confirm-btn { width: 100% !important; }'.replace(/\r?\n|\r/g, '').replace(/\s/g, '')) > -1) {
            if (!this.config.confirmAlertAllowButtonStyle) {
                this.config.confirmAlertAllowButtonStyle = {};
            }
            this.config.confirmAlertAllowButtonStyle.marginLeft = '0px';
        }

        if (Object.keys(this.config.confirmAlertIconStyle || {}).length) {
            const icon = this.confirmBox.querySelector('.cleverpush-confirm-icon img');
            const style = this.config.confirmAlertIconStyle;
            if (icon) {
                if (style.width) {
                    icon.style.width = `${style.width}px`;
                    if (window.innerWidth >= 768) {
                        const text = this.confirmBox.querySelector('.cleverpush-confirm-text');
                        if (text) {
                            const margin = 15;
                            text.style.setProperty('width', `calc(100% - ${style.width + margin}px)`, 'important');
                        }
                    }
                }
                if (style.height) {
                    icon.style.height = `${style.height}px`;
                }
            }
        }

        this.allowButton = this.confirmBox.querySelector('.cleverpush-confirm-btn-allow');
        if (this.allowButton) {
            this.allowButton.addEventListener('click', this.onAllowClick.bind(this), true);
            if (typeof this.config.confirmAlertButtonStyle === 'object') {
                if (this.config.confirmAlertButtonStyle.backgroundColor && !this.config.confirmAlertButtonStyle.borderColor) {
                    this.config.confirmAlertButtonStyle.borderColor = 'transparent';
                }
                for (const property in this.config.confirmAlertButtonStyle) {
                    if (this.config.confirmAlertButtonStyle.hasOwnProperty(property)) {
                        this.allowButton.style.setProperty(this.camelCaseToDash(property), this.config.confirmAlertButtonStyle[property], 'important');
                    }
                }
            }
            if (typeof this.config.confirmAlertAllowButtonStyle === 'object') {
                for (const property in this.config.confirmAlertAllowButtonStyle) {
                    if (this.config.confirmAlertAllowButtonStyle.backgroundColor && !this.config.confirmAlertAllowButtonStyle.borderColor) {
                        this.config.confirmAlertAllowButtonStyle.borderColor = 'transparent';
                    }
                    if (this.config.confirmAlertAllowButtonStyle.hasOwnProperty(property)) {
                        this.allowButton.style.setProperty(this.camelCaseToDash(property), this.config.confirmAlertAllowButtonStyle[property], 'important');
                    }
                }
            }
        }

        this.denyButton = this.confirmBox.querySelector('.cleverpush-confirm-btn-deny');
        if (this.denyButton) {
            if (confirmConfig.topicsLayer) {
                this.denyButton.addEventListener('click', this.onTopicsDenyClick.bind(this));
            } else {
                this.denyButton.addEventListener('click', this.onDenyClick.bind(this));
            }
            if (typeof this.config.confirmAlertButtonStyle === 'object') {
                for (const property in this.config.confirmAlertButtonStyle) {
                    if (this.config.confirmAlertButtonStyle.hasOwnProperty(property)) {
                        this.denyButton.style.setProperty(this.camelCaseToDash(property), this.config.confirmAlertButtonStyle[property], 'important');
                    }
                }
            }
        }

        this.closeButton = this.confirmBox.querySelector('.cleverpush-confirm-hide');
        if (this.closeButton) {
            this.closeButton.addEventListener('click', this.onCloseClick.bind(this));

            if (this.confirmBox && typeof this.config.confirmAlertStyle === 'object' && this.config.confirmAlertStyle.color) {
                this.closeButton.style.color = this.config.confirmAlertStyle.color;
            }
        }

        const topics = this.confirmBox.querySelectorAll('input[name="topics[]"]');
        for (let topicIndex = 0; topicIndex < topics.length; topicIndex += 1) {
            topics[topicIndex].addEventListener('change', (e) => {
                if (!this.confirmBox) {
                    this.confirmBox = document.querySelector(`.cleverpush-confirm-${this.id}`);
                }
                const childTopics = this.confirmBox.querySelectorAll(`.topic-child[data-parent-topic="${e.target.value}"]`);
                for (let childTopicIndex = 0; childTopicIndex < childTopics.length; childTopicIndex += 1) {
                    childTopics[childTopicIndex].style.display = e.target.checked ? 'block' : 'none';
                    const childTopicInput = childTopics[childTopicIndex].querySelector('input[type="checkbox"], input[type="radio"]');

                    const childTopic = (this.config.channelTopics || []).find(t => t._id === childTopicInput.value);
                    if (!e.target.checked) {
                        childTopicInput.checked = false;
                    } else if (childTopic) {
                        childTopicInput.checked = topicChecked(childTopic, this.subscribedTopics);
                    }
                }
            });
        }

        if (this.config.topicsTemplateFunction && topicSelection) {
            const topicsDiv = parentContainer.querySelector('.cleverpush-confirm .cleverpush-confirm-topics');
            if (topicsDiv) {
                try {
                    const templateFunc = eval(`(${this.config.topicsTemplateFunction})`);
                    if (typeof templateFunc === 'function') {
                        log.debug('calling templateFunc');
                        templateFunc(topicsDiv, this.config, [], 'confirm');
                    } else {
                        log.warn('typeof templateFunc is not function');
                    }
                } catch (err) {
                    log.warn(err);
                }
            } else {
                log.warn('.cleverpush-topics div not found');
            }
        }

        if (this.facebookEnabled && !this.config.facebookButtonOptIn) {
            const loadFbSdk = () => {
                // load the FB SDK if we want to use messenger bots
                FacebookSubscriptionManager.initFacebook(() => {
                    if (typeof FB !== 'undefined') {
                        FB.Event.subscribe('messenger_checkbox', (event) => {
                            log.info('FB - Event "messenger_checkbox"', event);
                            if (event.event === 'rendered') {
                                log.info('FB - Event "messenger_checkbox" - successfully rendered');
                            } else if (event.event === 'checkbox') {
                                log.info('FB - Checkbox state:', event.state);
                                this.facebookCheckboxChecked = event.state === 'checked';
                            } else if (event.event === 'not_you') {
                                log.info('FB - User clicked \'not you\'');
                            } else if (event.event === 'hidden') {
                                log.warn('FB - Plugin was hidden. This usually means a problem in FB or integration or your browser settings. Did you whitelist your domain? When using a FB dev app is your FB account registered developer/tester/admin? Have generated a unique `user_ref` for this render? Do you have disabled third-party tracking in your browser settings?');
                            }
                        });

                        FB.XFBML.parse();
                    }
                });
            };

            if (this.config.facebookDoubleOptIn) {
                this.facebookDoubleOptInConfirmed = true;
                this.facebookConfirmCheckbox = this.confirmBox.querySelector('#cleverpush-facebook-checkbox');
                if (this.facebookConfirmCheckbox) {
                    this.facebookConfirmCheckbox.addEventListener('click', () => {
                        loadFbSdk();
                    });
                }
            } else {
                loadFbSdk();
            }
        }
    }

    show(subscribeCallback) {
        logMethodCall('showConfirmBox');

        if (typeof subscribeCallback === 'function') {
            this.subscribeCallback = subscribeCallback;
        }

        if (this.visible) {
            return;
        }
        this.visible = true;

        this.appendConfirmBox();
        this.showBackdrop();
    }

    setAutoHideBackdrop(autoHideBackdrop) {
        this.autoHideBackdrop = autoHideBackdrop;
    }
}