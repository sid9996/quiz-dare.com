import Penpal from '../utils/penpal';
import SubscriptionManager from './manager';
import {
    log
} from '../utils/debug';
import SubscribingInProgressError from '../error/SubscribingInProgressError';
import CleverPushError from '../error/CleverPushError';
import Event from '../const/event';
import {
    translate
} from "../utils/translate";
import {
    browser,
    browserVersion
} from '../utils/env';
import {
    isSubscribedAccengage
} from '../utils/imported';
import {
    SUBSCRIPTION_STATUS
} from '../storage/manager';

export default class HttpsSubscriptionManager extends SubscriptionManager {
    constructor(config, api, triggerEvent) {
        super(config, api, triggerEvent);

        this.isSubscribed().then((subscribed) => {
            if (subscribed) {
                this.storageManager.initDb();
            }
        });

        //if (browser.name === 'Chrome' && browserVersion < 52) {
        //  appendGcmManifest(config.gcmManifestPath);
        //}

        // we need to use iframes for people who switch from subdomain to domain mode
        // maybe we don't want to load this for people who denied push or are subscribed directly via the domain

        // iframe loading can be disable via config (e.g. if we want to use notifications on .cleverpush.com subdomain like demo.cleverpush.com)

        if (config.loadIframe && this.config.subdomain) {
            const origin = `https://${this.config.subdomain}.${this.config.cleverpushDomain || 'cleverpush.com'}`;

            const iframeContainer = document.createElement('div');
            iframeContainer.style.display = 'none';
            document.body.appendChild(iframeContainer);

            Penpal.debug = log.getLevel() < 2;
            const connection = Penpal.connectToChild({
                url: `${origin}/iframe?origin=${encodeURIComponent(location.origin)}`,
                appendTo: iframeContainer,
                timeout: 20 * 1000
            });

            connection.iframe.style.display = 'none';

            connection.promise.then((child) => {
                log.debug('child ready', child);
                this.iframeMessenger = child;

                child.setConfig(this.config).then(() => {
                    /*
                     child.getStorage().then((storageItems) => {
                     const storageKeys = Object.keys(storageItems);
                     localStorage.
                     });
                     */
                    this.triggerEvent(Event.INITIALIZED);
                });
            }).catch((err) => {
                log.debug('iFrame connection error', err);
                this.triggerEvent(Event.INITIALIZED);
            });
        } else {
            this.triggerEvent(Event.INITIALIZED);
        }

        // unsubscribe if permission is set to default or denied
        if (navigator.permissions && !(browser.name === 'Firefox' && browserVersion < 46)) {
            navigator.permissions.query({
                name: 'notifications'
            }).then((permissionStatus) => {
                permissionStatus.onchange = () => {
                    if (!this.isSubscribing) {
                        if (window.Notification.permission !== 'granted') {
                            this.triggerEvent(Event.UNSUBSCRIBED);
                        }
                        if (window.Notification.permission === 'denied') {
                            this.unsubscribe();
                        } else {
                            this.isSubscribed().then((enabled) => {
                                if (!enabled) {
                                    this.triggerEvent(Event.PERMISSION_RE_GRANTED);
                                }
                            });
                        }
                    }
                };
            });
        }
    }

    unsubscribe(notManually) {
        if (this.iframeMessenger) {
            return this.iframeMessenger.getSubscriptionId().then((iframeSubscriptionId) => {
                // use 'notManually': true on iframe to prevent 'status' to be 'unsubscribed' on subdomain (only for https sites)
                return this.iframeMessenger.unsubscribe(true).then(() => {
                    return super.unsubscribe(notManually, iframeSubscriptionId);
                });
            });
        }

        return super.unsubscribe(notManually);
    }

    isSubscribedViaSubdomain() {
        // TODO: implement & use
        return true;
    }

    replaceRootWorker() {
        return new Promise((resolve) => {
            if (window.Notification.permission === 'granted' && navigator.serviceWorker && this.getWorkerScope() === '/' && navigator.serviceWorker.controller && navigator.serviceWorker.controller.scriptURL && navigator.serviceWorker.controller.scriptURL.indexOf(this.getWorkerPath()) < 0) {
                log.debug('replacing root service worker...');
                navigator.serviceWorker.ready.then((registration) => {
                    registration.unregister().then((unregistered) => {
                        log.debug('replacing root worker result', unregistered);
                        resolve();
                    }).catch(resolve);
                }).catch(e => {
                    log.debug('replacing root service worker failed', e);
                    resolve();
                });
            } else {
                resolve();
            }
        });
    }

    isSubscribed() {
        return new Promise((resolve) => {
            if (this.config.env === 'PREVIEW') {
                return resolve(false);
            }

            const syncAndResolve = () => {
                log.debug('httpsManager syncAndResolve');
                this.storageManager.checkIfShouldSync().then((shouldSync) => {
                    if (shouldSync) {
                        this.sync().then(() => {
                            log.debug('httpsManager subscribed = true (1)');
                            this.subscribed = true;
                            resolve(true);
                        }).catch((err) => {
                            log.warn('error while syncing', err);
                            // Raven.captureException(err);
                            log.debug('httpsManager subscribed = true (2)');
                            this.subscribed = true;
                            resolve(true);
                        });
                    } else {
                        log.debug('httpsManager subscribed = true (3)');
                        this.subscribed = true;
                        resolve(true);
                    }
                });
            };

            const resubscribe = () => {
                log.debug('httpsManager resubscribe');
                if (!this.isSubscribing) {
                    this.isSubscribing = true;
                    this.isReSubscribe = true;
                    this.storageManager.canSubscribe().then((storageStatus) => {
                        if (storageStatus) {
                            if (storageStatus === SUBSCRIPTION_STATUS.WAS_DENIED) {
                                this.config.showConfirmAlert = true;
                                resolve(false);
                                this.isSubscribing = false;
                                this.subscribed = false;
                                return;
                            }

                            this.registerWorker().then(serviceWorkerRegistration => this.pushManagerSubscribe(serviceWorkerRegistration)).then((subscription) => {
                                return this.sync(subscription).then(() => {
                                    this.isSubscribing = false;
                                    this.triggerEvent(Event.SUBSCRIBED, this.storageManager.getSubscriptionId());
                                    log.debug('httpsManager subscribed = true (4)');
                                    this.subscribed = true;
                                    resolve(true);
                                });
                            }).catch((err) => {
                                log.error(err);
                                this.isSubscribing = false;
                                // Raven.captureException(err);
                                log.debug('httpsManager subscribed = false (5)');
                                this.subscribed = false;
                                resolve(false);
                            });
                        } else {
                            this.isSubscribing = false;
                            resolve(false);
                        }
                    });
                } else {
                    log.debug('httpsManager subscribed = true (6)');
                    this.subscribed = true;
                    resolve(true);
                }
            };

            const isSubscribedHttps = () => {
                if (window.Notification.permission === 'granted' && navigator.serviceWorker) {
                    // replace root worker with our worker
                    return this.getActiveWorkerRegistration().then(serviceWorkerRegistration => serviceWorkerRegistration.pushManager.getSubscription().then((subscription) => {
                        // tries worker update
                        this.tryWorkerUpdate(serviceWorkerRegistration);

                        if (!subscription) {
                            if (this.config.showConfirmAlertResubscribe) {
                                this.config.showConfirmAlert = true;
                                resolve(false);
                                return;
                            }

                            log.debug('isSubscribed: no subscription found -> resubscribe');
                            resubscribe();
                        } else {
                            return this.storageManager.isSubscribed().then((storageStatus) => {
                                if (storageStatus) {
                                    syncAndResolve();
                                } else {
                                    log.debug('httpsManager subscribed = false (7)');
                                    this.subscribed = false;
                                    resolve(false);
                                }
                            });
                        }
                    })).catch((e) => {
                        if (this.config.showConfirmAlertResubscribe) {
                            this.config.showConfirmAlert = true;
                            resolve(false);
                            return;
                        }

                        log.debug('isSubscribed: -> resubscribe ', e);
                        resubscribe();
                    });
                }
                log.debug('isSubscribed: no perm or SW found');
                log.debug('httpsManager subscribed = false (8)');
                this.subscribed = false;
                resolve(false);
            };

            this.replaceRootWorker().then(() => {
                if (!this.iframeMessenger) {
                    return isSubscribedHttps();
                }

                this.iframeMessenger.isSubscribed().then((isSubscribed) => {
                    log.debug('isSubscribed', isSubscribed);
                    if (isSubscribed) {
                        return this.iframeMessenger.getSubscriptionId().then((iframeSubscriptionId) => {
                            if (iframeSubscriptionId === this.storageManager.getSubscriptionId()) {
                                return isSubscribedHttps();
                            } else {
                                return syncAndResolve();
                            }
                        });
                    } else {
                        return isSubscribedHttps();
                    }
                }).catch((err) => {
                    if (err) {
                        log.debug('isSubscribed err', err);
                        log.error(err);
                        // Raven.captureException(err);
                    }
                    log.debug('httpsManager subscribed = false (9)');
                    this.subscribed = false;
                    resolve(false);
                });
            });
        });
    }

    pushManagerSubscribe(serviceWorkerRegistration, isRetry) {
        return new Promise((resolve, reject) => {
            serviceWorkerRegistration.pushManager.subscribe(this.getPushManagerSubscribeOptions()).then((subscription) => {
                resolve(subscription);

                this.unregisterOtherPushSubscriptions(serviceWorkerRegistration);
            }).catch((err) => {
                if (!isRetry && err && err.message && (err.message.indexOf('subscription with a different application server key') > -1 || err.message.indexOf('subscription with a different applicationServerKey') > -1)) {
                    serviceWorkerRegistration.pushManager.getSubscription().then((subscription) => {
                        if (subscription) {
                            this.migratedSubscription = true;

                            subscription.unsubscribe().then(() => {
                                this.pushManagerSubscribe(serviceWorkerRegistration, true).then(resolve).catch(reject);
                            }).catch(reject);
                        } else {
                            reject(err);
                        }
                    }).catch(reject);
                } else {
                    reject(err);
                }
            });
        });
    }

    canSubscribe() {
        return new Promise((resolve, reject) => {
            // Permission denied - show unblock tutorial
            if (window.Notification.permission === 'denied' && this.config.alertHoursDeny && localStorage.getItem('cleverpush-subscription-status') === 'was-denied' && sessionStorage.getItem('cleverpush-subscription-status') !== 'denied') {
                this.config.showUnblockTutorial = true;
                this.config.showConfirmAlert = true;
                resolve(true);
                return;
            }

            // Preview mode
            if (this.config.env === 'PREVIEW') {
                return resolve(true);
            }

            const canSubscribeHttpsReal = () => {
                if (window.Notification.permission === 'denied') {
                    reject(new CleverPushError('User has manually denied notifications', 'unsubscribed'));
                } else {
                    this.storageManager.canSubscribe().then((storageStatus) => {
                        log.debug('storageStatus canSubscribe', storageStatus);
                        if (storageStatus) {
                            this.isSubscribed().then((isSubscribed) => {
                                if (isSubscribed) {
                                    reject(new CleverPushError('User is already subscribed', 'subscribed'));
                                } else {
                                    resolve(true);
                                }
                            });
                        } else {
                            reject(new CleverPushError('User has manually unsubscribed or denied notifications: ' + storageStatus, 'unsubscribed'));
                        }
                    });
                }
            };

            const canSubscribeHttps = () => {
                if (this.config.importedSubscriptionsProvider === 'accengage' && this.config.importedSubscriptionsSubdomain) {
                    isSubscribedAccengage(this.config).then((subscribed) => {
                        if (subscribed) {
                            resolve(false);
                        } else {
                            return canSubscribeHttpsReal();
                        }
                    });
                } else {
                    return canSubscribeHttpsReal();
                }
            };

            if (!this.iframeMessenger) {
                return canSubscribeHttps();
            }

            this.iframeMessenger.canSubscribe().then(({
                result,
                message,
                reason
            }) => {
                log.debug('canSubscribe from iframe', result);
                if (result === true) {
                    return canSubscribeHttps();
                }
                reject(new CleverPushError(message, reason));
            }, (err) => {
                if (err) {
                    log.debug('canSubscribe err iframe', err);
                    // Raven.captureException(err);
                }
                reject(err);
            });
        });
    }

    getSubscriptionId() {
        return new Promise((resolve) => {
            const storedSubId = this.storageManager.getSubscriptionId();
            if (storedSubId) {
                resolve(storedSubId);
            } else if (this.iframeMessenger) {
                this.iframeMessenger.getSubscriptionId().then((subscriptionId) => {
                    resolve(subscriptionId);
                });
            } else {
                resolve(null);
            }
        });
    }

    hasNotificationPermission() {
        return new Promise((resolve) => {
            if (this.config.env === 'PREVIEW') {
                return resolve(false);
            }

            if (window.Notification.permission === 'granted') {
                resolve(true);
            } else {
                /*
                this.iframeMessenger.hasNotificationPermission().then((hasNotificationPermission) => {
                  resolve(hasNotificationPermission);
                });
                */
                // don't check for subdomain page
                // -> the notification permission is only used to determine if backdrop should be shown
                resolve(false);
            }
        });
    }

    registerForPush() {
        return new Promise((resolve, reject) => {
            this.storageManager.setAllowed();

            if (!(this.topics || []).length && this.config.confirmAlertNativeTheme && this.config.confirmAlertNativeTheme !== 'cleverpush-confirm-default' && this.confirm && this.confirm.hasTopicCheckboxes()) {
                this.setTopics(this.confirm.getSelectedTopics());
            }

            this.registerWorker().then(serviceWorkerRegistration => this.pushManagerSubscribe(serviceWorkerRegistration)).then((subscription) => {
                log.debug('push manager subscription', subscription);
                return this.sync(subscription).then(() => {
                    this.isSubscribing = false;
                    this.triggerEvent(Event.SUBSCRIBED, this.storageManager.getSubscriptionId());
                    resolve('granted');
                });
            }).catch((err) => {
                log.error(err);
                this.isSubscribing = false;
                // Raven.captureException(err);
                reject(err);
            });
        });
    }

    subscribeForce(alreadySubscribed) {
        return new Promise((resolve, reject) => {
            if (alreadySubscribed) {
                resolve();
            } else if (this.isSubscribing) {
                reject(new SubscribingInProgressError('A subscription process is already in progress.'));
            } else {
                this.isSubscribing = true;

                if (Notification.permission === 'default') {
                    Notification.requestPermission((permission) => {
                        if (permission === 'granted') {
                            this.registerForPushLater = false;

                            if (!this.registerForPushLater) {
                                this.registerForPush().then(resolve).catch(reject);
                            } else {
                                this.storageManager.setPending();
                            }

                            // hide backdrop after register (important to get selected topics first)
                            if (this.confirm) {
                                this.confirm.hideBackdrop(permission);

                                if (this.config.confirmAlertSelectTopicsLater && (this.confirm.channelTopics ||  []).length && !this.config.confirmAlertHideChannelTopics) {
                                    this.confirm.appendConfirmBox(this.config.confirmAlertSelectTopicsLaterTheme || 'cleverpush-confirm-default', true);

                                    if (this.config.confirmAlertSubscribeLater) {
                                        this.registerForPushLater = true;
                                    }
                                }
                                if (this.config.confirmAlertSelectAttributesLater) {
                                    import ('../selectAttributes').then(({
                                        default: SelectAttributes
                                    }) => {
                                        this.selectAttributes = new SelectAttributes(this.config, this);
                                        this.selectAttributes.appendConfirmBox(this.config.confirmAlertSelectTopicsLaterTheme || 'cleverpush-confirm-default', true);
                                    });
                                }
                            }
                        } else {
                            this.isSubscribing = false;

                            if (permission === 'default') {
                                this.storageManager.setClosed();

                                // firefox only allows showing once per session
                                if (browser.name === 'Firefox') {
                                    this.storageManager.setTempBlocked();
                                }
                            }

                            if (permission === 'denied') {
                                this.api.confirmAlertDenied();

                                // set denied on subdomain iframe
                                this.storageManager.setDenied();
                            }

                            reject(new CleverPushError(translate('popup.info').formatCleverPush('<strong>' + (translate('confirm.allowBrowser') || translate('confirm.allow')) + '</strong>'), permission));
                        }

                        log.debug('HTTP Permission Request Result:', permission);
                    });
                } else if (Notification.permission === 'denied') {
                    this.isSubscribing = false;
                    // TODO: introduce user how to enable notifications
                    reject(new CleverPushError(translate('popup.info').formatCleverPush('<strong>' + (translate('confirm.allowBrowser') || translate('confirm.allow')) + '</strong>'), 'denied'));

                    // hide backdrop
                    /*
                    if (this.confirm) {
                      this.confirm.hideBackdrop();
                    }
                    */
                } else {
                    log.debug('PermissionAlreadyGranted', this.config.confirmAlertSelectTopicsLater && (this.confirm.channelTopics ||  []).length && !this.config.confirmAlertHideChannelTopics);
                    this.registerForPush().then(resolve).catch(reject);

                    // hide backdrop
                    if (this.confirm) {
                        this.confirm.hideBackdrop('granted');

                        // Show Topics box if permission already granted and no topics available in storage
                        if (this.config.confirmAlertSelectTopicsLater && (this.confirm.channelTopics ||  []).length && !this.config.confirmAlertHideChannelTopics) {
                            this.getTopics().then((topics) => {
                                if (!(topics ||  []).length) {
                                    this.confirm.appendConfirmBox(this.config.confirmAlertSelectTopicsLaterTheme || 'cleverpush-confirm-default', true);
                                }
                            });
                        }
                    }
                }
            }
        });
    }

    subscribe() {
        return this.isSubscribed().then((alreadySubscribed) => {
            return this.subscribeForce(alreadySubscribed);
        });
    }

    setClickedNotification(id) {
        this.storageManager.setClickedNotification(id);
        if (this.iframeMessenger) {
            this.iframeMessenger.setClickedNotification(id);
        }
    }

    getClickedNotification() {
        return new Promise((resolve) => {
            const id = this.storageManager.getClickedNotification();
            if (!id && this.iframeMessenger) {
                this.iframeMessenger.getClickedNotification().then((idFromIframe) => {
                    resolve(idFromIframe);
                });
            } else {
                resolve(id);
            }
        });
    }
}