import UAParser from 'ua-parser-js';

import CleverPushError from '../error/CleverPushError';

export const SERVICE_WORKER = 'serviceWorker';
export const HOST = 'host';
export const POPUP = 'popup';
export const POPUP_UNSUBSCRIBE = 'popupUnsubscribe';
export const IFRAME = 'iframe';
export const CUSTOM_SUBDOMAIN = 'customSubdomain';

const parser = new UAParser();
export const browser = parser.getBrowser();
export const os = parser.getOS();
export const device = parser.getDevice();

const browserVersionSplit = browser.version ? browser.version.split('.') : ['0'];
export const browserVersion = browser.version ? parseInt(browserVersionSplit[0], 10) : 0;
export const browserSubVersion = browserVersionSplit.length > 1 ? parseInt(browserVersionSplit[1], 10) : 0;

export function isDev() {
    if (typeof process.env.NODE_ENV === 'undefined') {
        return true;
    }
    return process.env.NODE_ENV === 'development';
}

export function getEnv(configParam) {
    if (typeof window === 'undefined') {
        if (typeof WorkerLocation !== 'undefined' && location instanceof WorkerLocation) {
            return SERVICE_WORKER;
        }
    } else {
        let config = configParam;
        if (!config) {
            config = (window.CleverPush || {}).config || {};
        }

        if (config && config.env === 'HOST') {
            return HOST;
        }

        if (window === window.top) {
            const cleverpushDomain = config.cleverpushDomain;

            if (config.env === 'POPUP' || location.hostname.indexOf('.cleverpush.com') > -1 || isDev()) {
                if (location.pathname.indexOf('/subscribe') === 0) {
                    return POPUP;
                }
            } else if (cleverpushDomain && location.hostname.indexOf('.' + cleverpushDomain) > -1) {
                if (location.pathname.indexOf('/subscribe') === 0) {
                    return POPUP;
                }
            }
            return HOST;
        } else if (location.pathname.indexOf('/iframe') === 0 || location.pathname.indexOf('/referrals') === 0) {
            return IFRAME;
        }
        return CUSTOM_SUBDOMAIN;
    }
    return null;
}

export function isServiceWorker() {
    return getEnv() === SERVICE_WORKER;
}

export function isHost(config) {
    return getEnv(config) === HOST;
}

export function isBrowser() {
    return typeof window !== 'undefined';
}

export function isAndroid() {
    return /Android/.test(navigator.userAgent);
}

export function isPopup(config) {
    return getEnv(config) === POPUP && isBrowser();
}

export function isPopupUnsubscribe() {
    return location.hostname.indexOf('.cleverpush.com') > -1 && location.pathname.indexOf('/unsubscribe') === 0 && isBrowser();
}

export function isIframe(config) {
    return getEnv(config) === IFRAME && isBrowser();
}

export function isChrome() {
    return browser.name === 'Chrome' || browser.name === 'Chromium' || browser.name === 'Opera';
}

export function isProduction() {
    if (typeof ENVIRONMENT === 'undefined') {
        return false;
    }
    return process.env.NODE_ENV === 'production';
}

export function getScrollPercentage() {
    const h = document.documentElement;
    const b = document.body;
    const st = 'scrollTop';
    const sh = 'scrollHeight';
    return (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
}

export function detectPrivateMode() {
    return new Promise((resolve) => {
        const on = () => resolve(true); // is in private mode
        const off = () => resolve(false); // not private mode
        const testLocalStorage = () => {
            try {
                if (localStorage.length) off();
                else {
                    localStorage.x = 1;
                    localStorage.removeItem('x');
                    off();
                }
            } catch (e) {
                // Safari only enables cookie in private mode
                // if cookie is disabled then all client side storage is disabled
                // if all client side storage is disabled, then there is no point
                // in using private mode
                navigator.cookieEnabled ? on() : off();
            }
        };
        // Chrome & Opera
        if (window.webkitRequestFileSystem) {
            return void window.webkitRequestFileSystem(0, 0, off, on);
        }
        // Firefox
        if ('MozAppearance' in document.documentElement.style) {
            const db = indexedDB.open('test');
            db.onerror = on;
            db.onsuccess = off;
            return void 0;
        }
        // Safari
        if (/constructor/i.test(window.HTMLElement) || (navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
                navigator.userAgent &&
                navigator.userAgent.indexOf('CriOS') < 0 &&
                navigator.userAgent.indexOf('FxiOS') < 0)) {
            if (typeof window.openDatabase !== 'undefined') {
                try {
                    window.openDatabase(null, null, null, null);
                    window.localStorage.setItem('test', 1);
                } catch (e) {
                    return on();
                }
            }
            return testLocalStorage();
        }
        // IE10+ & Edge
        if (!window.indexedDB && (window.PointerEvent || window.MSPointerEvent)) {
            return on();
        }
        // others
        return off();
    });
}

export function supportsPush() {
    let supported = true;
    let browserType = null;

    return new Promise((resolve, reject) => {
        detectPrivateMode()
            .then((isPrivate) => {
                if (isPrivate) {
                    supported = false;
                    browserType = null;
                    reject(new CleverPushError('Private browsing mode not supported.', 'private-mode'));
                } else {
                    // safari
                    if ('safari' in window && typeof window.safari === 'object' && 'pushNotification' in window.safari) {
                        browserType = 'safari';

                        // w3c web push
                    } else if (typeof window.Notification !== 'undefined' && ('serviceWorker' in navigator || location.protocol === 'http:')) {
                        // navigator.serviceWorker is undefined for chrome on http sites
                        browserType = 'w3c';

                    } else {
                        supported = false;
                        browserType = null;
                        reject(new CleverPushError('Browser is not supported.', 'unsupported-browser'));
                    }

                    if (supported && browserType !== 'safari' && browserType !== 'ios') {
                        if (location.protocol !== 'http:' && !('showNotification' in ServiceWorkerRegistration.prototype)) {
                            supported = false;
                            reject(new CleverPushError('Notifications aren\'t supported.', 'unsupported-browser'));
                            /*
                            } else if (Notification.permission === 'denied') {
                              supported = false;
                              reject(new CleverPushError('The user has blocked notifications.', 'denied'));
                            */
                        } else if (!('PushManager' in window)) {
                            supported = false;
                            reject(new CleverPushError('Push messaging isn\'t supported.', 'unsupported-browser'));
                        }

                        if (!('serviceWorker' in navigator) && location.protocol !== 'http:') {
                            supported = false;
                            reject(new CleverPushError('Service workers are not supported.', 'unsupported-browser'));
                        }

                        if (navigator.userAgent.indexOf('Iron') > -1 && navigator.userAgent.indexOf('Chrome') > -1) {
                            supported = false;
                            reject(new CleverPushError('SRWare Iron does not support push', 'unsupported-browser'));
                        }
                    }

                    if (supported) {
                        if (window.self === window.top && browserType === 'w3c' && navigator.serviceWorker && typeof navigator.serviceWorker.getRegistrations === 'function') {
                            navigator.serviceWorker.getRegistrations()
                                .then(() => resolve(browserType))
                                .catch(() => reject(new CleverPushError('Service workers are not supported', 'unsupported-browser')));
                        } else {
                            resolve(browserType);
                        }
                    }

                    /*
                     if (supported) {
                     if (localStorage.getItem('push-subscription-status') === 'denied') {
                     return callback(new CleverPushError('Permission for push notifications was denied', 'denied'));

                     } else if (localStorage.getItem('push-subscription-id')) {
                     var lastSync = localStorage.getItem('push-subscription-last-update');
                     if (!lastSync || parseInt(lastSync) < (new Date()).getTime() + 60 * 60 * 24 * 1000) {
                     localStorage.setItem('push-subscription-last-update', (new Date()).getTime());

                     if (browserType !== 'safari') {
                     if (this.config.ownDomain && location.protocol === 'https:') {
                     navigator.serviceWorker.ready.then(function (serviceWorkerRegistration) {
                     if (typeof serviceWorkerRegistration !== 'undefined' && typeof serviceWorkerRegistration.update !== 'undefined') {
                     serviceWorkerRegistration.update();
                     }
                     });
                     } else {
                     this.initWindowProxy(function () {
                     this.windowProxy.post({ type: 'updateServiceWorker' });
                     });
                     }
                     }
                     }
                     }

                     callback(null, true);
                     }
                     */
                }
            });
    });
}