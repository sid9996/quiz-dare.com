import Penpal from '../utils/penpal';
import SubscriptionManager from './manager';
import {
    log
} from '../utils/debug';
import SubscribingInProgressError from '../error/SubscribingInProgressError';
import {
    browser,
    browserVersion
} from '../utils/env';

export default class HttpIframeSubscriptionManager extends SubscriptionManager {
    constructor(config, api, triggerEvent) {
        super(config, api, triggerEvent);

        this.isSubscribed().then((subscribed) => {
            if (subscribed) {
                this.storageManager.initDb();
            }
        });

        this.config = config;
        this.api = api;

        this.isSubscribing = false;

        const creator = window.opener || window.parent;

        if (creator === window) {
            document.write(`<p style="font-size: 14px; color: red; font-family: sans-serif;">CleverPush: This page cannot be directly opened, and
must be opened as a result of a subscription call.</p>`);
            return;
        }

        let parentOrigin;
        if (typeof URLSearchParams !== 'undefined' && location.search) {
            const params = new URLSearchParams(location.search.slice(1));
            if (params.get('origin')) {
                parentOrigin = params.get('origin');
            }
        }

        log.debug('PenPal parentOrigin', parentOrigin);

        Penpal.debug = log.getLevel() < 2;
        Penpal.connectToParent({
            parentOrigin,
            methods: {
                subscribe: this.subscribe.bind(this),
                setSubscribed: this.setSubscribed.bind(this),
                setDenied: this.setDenied.bind(this),
                setClosed: this.setClosed.bind(this),
                setUnsubscribed: this.setUnsubscribed.bind(this),
                unsubscribe: this.unsubscribe.bind(this),
                isSubscribed: this.isSubscribed.bind(this),
                canSubscribe: this.canSubscribe.bind(this),
                setTopics: super.setTopics.bind(this),
                getTopics: super.getTopics.bind(this),
                getSubscriptionId: super.getSubscriptionId.bind(this),
                hasNotificationPermission: super.hasNotificationPermission.bind(this),
                getNotificationPermission: super.getNotificationPermission.bind(this),
                setClickedNotification: super.setClickedNotification.bind(this),
                getClickedNotification: super.getClickedNotification.bind(this),
                getStoredNotifications: super.getStoredNotifications.bind(this),
                deleteStoredNotification: super.deleteStoredNotification.bind(this),
                setConfig: (newConfig) => {
                    super.config = newConfig;
                    this.config = newConfig;

                    if (this.config.confirmAlertTestId) {
                        this.api.setConfirmAlertTestId(this.config.confirmAlertTestId);
                    }

                    return Promise.resolve();
                },
                getStorage: () => {
                    try {
                        Promise.resolve({
                            'cleverpush-subscription-id': localStorage.get('cleverpush-subscription-id'),
                            'cleverpush-subscription-status': localStorage.get('cleverpush-subscription-status')
                        });
                    } catch (err) {
                        Promise.resolve({
                            'cleverpush-subscription-id': undefined,
                            'cleverpush-subscription-status': undefined
                        });
                    }
                }
            }
        });

        // unsubscribe if permission is set to default or denied
        if (navigator.permissions && !(browser.name === 'Firefox' && browserVersion < 46)) {
            navigator.permissions.query({
                name: 'notifications'
            }).then((permissionStatus) => {
                permissionStatus.onchange = () => {
                    if (!this.isSubscribing) {
                        if (window.Notification.permission !== 'granted') {
                            this.unsubscribe();
                        } else {
                            this.isSubscribed((enabled) => {
                                if (!enabled) {
                                    this.subscribe();
                                }
                            });
                        }
                    }
                };
            });
        }
    }

    // returns true or false - storage status (window.Notification and service worker is not available inside iframe)
    isSubscribed() {
        return new Promise((resolve) => {
            try {
                this.storageManager.isSubscribed(false, false, true).then((storageStatus) => {
                    log.debug('Status: storage status:', storageStatus);
                    resolve(storageStatus);
                });
            } catch (err) {
                resolve(false);
            }

            /*
            if (window.Notification.permission === 'granted') {
              if (navigator.serviceWorker) {
                if (location.protocol === 'https:') {
                  this.getActiveWorkerRegistration().then((serviceWorkerRegistration) => {
                    serviceWorkerRegistration.pushManager.getSubscription().then((subscription) => {
                      if (!subscription) {
                        log.debug('Status: Subscription invalid');
                        resolve(false);
                      } else {
                        this.storageManager.isSubscribed().then((storageStatus) => {
                          log.debug('Status: storage status:', storageStatus);
                          resolve(storageStatus);
                        });
                      }
                    }).catch((e) => {
                      log.error(e);
                      Raven.captureException(e);
                      resolve(false);
                    });
                  }).catch((e) => {
                    if (e) {
                      log.error(e);
                      Raven.captureException(e);
                    }

                    this.storageManager.isSubscribed().then((storageStatus) => {
                      log.debug('Status: storage status:', storageStatus);
                      resolve(storageStatus);
                    });
                  });
                } else {
                  this.storageManager.isSubscribed().then((storageStatus) => {
                    log.debug('Status: storage status:', storageStatus);
                    resolve(storageStatus);
                  });
                }
              } else {
                this.storageManager.isSubscribed().then((storageStatus) => {
                  log.debug('Status: storage status:', storageStatus);
                  resolve(storageStatus);
                });
              }
            } else {
              this.storageManager.isSubscribed().then((storageStatus) => {
                log.debug('Status: storage status:', storageStatus);
                resolve(storageStatus);
              });

              // TODO: Notification not available in iframe!

              // log.debug('Status: Permission not granted');
              // resolve(false);
            }
            */
        });
    }

    canSubscribe() {
        return new Promise((resolve) => {
            try {
                this.storageManager.canSubscribe().then((canSubscribe) => {
                    if (canSubscribe) {
                        this.isSubscribed().then((isSubscribed) => {
                            if (isSubscribed) {
                                resolve({
                                    result: false,
                                    message: 'User is already subscribed',
                                    reason: 'subscribed'
                                });
                                /*
                                // will always resolve to: 'denied', no matter what
                                } else if (Notification.permission === 'denied') {
                                  resolve({ reason: 'denied', message: 'User denied notifications' }));
                                */
                            } else {
                                resolve({
                                    result: true
                                });
                            }
                        });
                    } else {
                        resolve({
                            result: false,
                            message: 'User has manually unsubscribed or denied notifications',
                            reason: 'unsubscribed'
                        });
                    }
                });
            } catch (err) {
                resolve({
                    result: true
                });
            }
        });
    }

    subscribeForce() {
        return this.subscribe();
    }

    subscribe() {
        return new Promise((resolve, reject) => {
            if (this.isSubscribing) {
                log.error('A subscription process is already in progress.');
                reject(new SubscribingInProgressError());
            } else {
                this.isSubscribing = true;

                // this.storageManager.setAllowed();

                const grantedCallback = () => {
                    // TODO: when service worker is unregistered, write to indexedDB!!
                    this.storageManager.isSubscribed().then((isSubscribed) => {
                        // isSubscribed is only true if push subscription ID is set, which is only set when service worker is installed
                        resolve({
                            permission: 'granted',
                            serviceWorkerInstalled: isSubscribed
                        });
                    });
                };

                if (Notification.permission === 'default') {
                    Notification.requestPermission((permission) => {
                        this.isSubscribing = false;

                        if (permission === 'granted') {
                            grantedCallback();
                        } else {
                            resolve({
                                permission
                            });
                        }

                        log.debug('HTTP Permission Request Result:', permission);
                    });
                } else if (Notification.permission === 'denied') {
                    this.isSubscribing = false;
                    // TODO: introduce user how to enable notifications
                    resolve({
                        permission: 'denied'
                    });
                } else {
                    this.isSubscribing = false;
                    log.debug('PermissionAlreadyGranted');
                    grantedCallback();
                }
            }
        });
    }

    setSubscribed(subscriptionId) {
        try {
            this.storageManager.setSubscribed(subscriptionId, true);
        } catch (err) {}
    }

    setDenied() {
        try {
            this.storageManager.setDenied();
        } catch (err) {}
    }

    setClosed() {
        try {
            this.storageManager.setClosed();
        } catch (err) {}
    }

    setUnsubscribed(notManually) {
        try {
            this.storageManager.setUnsubscribed(notManually);
        } catch (err) {}
    }

    // service worker is not available inside iframe, can only unsubscribe via API
    unsubscribe(notManually) {
        return new Promise((resolve) => {
            let subscriptionId;
            try {
                subscriptionId = this.storageManager.getSubscriptionId();
            } catch (ignored) {}
            if (subscriptionId) {
                return this.api.unsubscribe(subscriptionId).then(() => {
                    try {
                        this.storageManager.setUnsubscribed(notManually);
                    } catch (ignored) {}
                    return resolve();
                }).catch(() => {
                    return resolve();
                });
            }
            return resolve();
        });
    }
}