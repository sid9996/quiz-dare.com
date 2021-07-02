import {
    log,
    logMethodCall
} from '../utils/debug';
import {
    urlBase64ToUint8Array
} from '../utils/https';
import StorageManager from '../storage/manager';
import Event from '../const/event';
import CleverPushError from '../error/CleverPushError';
import {
    browser,
    isPopup
} from '../utils/env';
import {
    translate
} from '../utils/translate';

export default class SubscriptionManager {
    constructor(config, api, triggerEvent) {
        this.config = config;
        this.api = api;
        this.triggerEvent = triggerEvent;
        this.storageManager = new StorageManager(config);
        this.subscribed = false;
        this.initialTags = [];
        // initially get sessionStorage from localStorage
        try {
            this.getTopics().then(topics => this.topics = topics);
        } catch (e) {}
    }

    // returns subscription (if subscribed) or false
    isSubscribed() {
        return new Promise((resolve) => {
            if (this.config.env === 'PREVIEW') {
                return resolve(false);
            }

            if (window.Notification.permission === 'granted' && navigator.serviceWorker) {
                return this.getActiveWorkerRegistration().then(serviceWorkerRegistration => serviceWorkerRegistration.pushManager.getSubscription().then((subscription) => {
                    if (!subscription) {
                        log.debug('manager subscribed = false (1)');
                        this.subscribed = false;
                        resolve(false);
                    } else {
                        return this.storageManager.isSubscribed().then((storageStatus) => {
                            log.debug(`manager subscribed = ${storageStatus} (2)`);
                            this.subscribed = storageStatus;
                            resolve(storageStatus);
                        });
                    }
                })).catch((e) => {
                    if (e) {
                        log.error(e);
                        // Raven.captureException(e);
                    }
                    log.debug('manager subscribed = false (3)');
                    this.subscribed = false;
                    resolve(false);
                });
            }
            log.debug('manager subscribed = false (4)');
            this.subscribed = false;
            resolve(false);
        });
    }

    canSubscribe() {
        return new Promise((resolve, reject) => {
            this.storageManager.canSubscribe().then((canSubscribe) => {
                if (canSubscribe) {
                    this.isSubscribed().then((isSubscribed) => {
                        if (isSubscribed) {
                            reject(new CleverPushError('User is already subscribed', 'subscribed'));
                        } else if (Notification.permission === 'denied') {
                            reject(new CleverPushError('User denied notifications', 'denied'));
                        } else {
                            resolve(true);
                        }
                    });
                } else {
                    reject(new CleverPushError(`User has manually unsubscribed or denied notifications ${canSubscribe}`, 'unsubscribed'));
                }
            }).catch((err) => {
                reject(err);
            });
        });
    }

    subscribe() {
        // implemented in children
    }

    subscribeForce() {
        this.subscribe();
    }

    showUnsubscribeFeedback() {
        if (this.config.unsubscribeFeedbackDisabled) {
            return;
        }

        const feedback = [];
        if (this.config.optOutFeedbackAnswers && this.config.optOutFeedbackAnswers.length) {
            this.config.optOutFeedbackAnswers.forEach(f =>
                feedback.push({
                    title: f.title,
                    id: f.id,
                    icon: f.icon
                })
            );
            if (this.config.optOutFeedbackCustomText) {
                feedback.push({
                    title: translate('unsubscribe.reasonOther'),
                    id: 'other',
                    icon: ''
                });
            }
        } else {
            feedback.push({
                title: translate('unsubscribe.reasonQuantity'),
                id: 'quantity',
                icon: ''
            }, {
                title: translate('unsubscribe.reasonContent'),
                id: 'content',
                icon: ''
            }, {
                title: translate('unsubscribe.reasonOther'),
                id: 'other',
                icon: ''
            });
        }

        const modal = document.createElement('div');
        modal.className = 'cleverpush-confirm cleverpush-confirm-default cleverpush-uf-box';
        modal.innerHTML = `
    <div class="cleverpush-confirm-text">
    <span class="cleverpush-confirm-title">${this.config.optOutFeedbackTitle || translate('unsubscribe.feedback')}</span>
    </div>
    <div style="margin-top: 10px; margin-bottom: 5px; padding-top: 10px;">
    ${feedback.map(f =>
      `<button type="button" class="cleverpush-confirm-btn cleverpush-uf-button" style="text-transform: none; margin-bottom: 10px !important;" data-reason="${f.id}">${f.icon ? `<img src=${f.icon} style="margin-right: 10px; float: left;" width="25" heigh="25">` : ''}${f.title}</button>`
    ).join('')}
    </div>
    `;
        document.body.appendChild(modal);

        const buttons = modal.querySelectorAll('.cleverpush-confirm-btn');
        for (let i = 0; i < buttons.length; i++) {
            const button = buttons[i];
            button.addEventListener('click', (e) => {
                e.preventDefault();
                if (e.currentTarget.dataset.reason === 'other' && this.config.optOutFeedbackCustomText) {
                    this.showCustomText(modal);
                } else {
                    this.api.unsubscribeFeedback(e.currentTarget.dataset.reason);
                    modal.parentNode.removeChild(modal);
                }
            });
        }
    }

    showCustomText(modal) {
        modal.innerHTML = `
    <div class="cleverpush-confirm-text">
    <span class="cleverpush-confirm-title">${translate('unsubscribe.enterReason')}</span>
    </div>
    <div style="margin-top: 10px; margin-bottom: 5px;">
      <div style="text-align: center; padding: 12px;">
        <textarea style="width: 100%; margin-bottom: 10px;"></textarea>
        <button type="button" class="cleverpush-confirm-btn cleverpush-uf-button" style="text-transform: none;, margin-bottom: 10px !important;" data-reason="other">${translate('unsubscribe.submit')}</button>
      </div>
    </div>
    `;
        const button = modal.querySelector('.cleverpush-confirm-btn');
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const text = modal.querySelector('textarea').value;
            this.api.unsubscribeFeedback(e.currentTarget.dataset.reason, text);
            modal.parentNode.removeChild(modal);
        });
    }

    unsubscribe(notManually, alreadyUnsubscribedId) {
        const removeBrowserSubscription = () => {
            this.storageManager.setUnsubscribed(notManually);
            this.topics = [];
            this.triggerEvent(Event.UNSUBSCRIBED);

            if (!navigator.serviceWorker) {
                return Promise.resolve();
            }

            return this.getActiveWorkerRegistration()
                .then(registration => registration.pushManager)
                .then(pushManager => pushManager.getSubscription())
                .then((subscription) => {
                    if (subscription) {
                        return subscription.unsubscribe().then(() => Promise.resolve());
                    }
                });
        };

        const subscriptionId = this.storageManager.getSubscriptionId();
        if (subscriptionId && (typeof alreadyUnsubscribedId === 'undefined' || alreadyUnsubscribedId !== subscriptionId)) {
            return this.api.unsubscribe(subscriptionId).then(() => removeBrowserSubscription().then(() => {
                this.showUnsubscribeFeedback();
                return Promise.resolve();
            }));
        }
        return removeBrowserSubscription().then(() => {
            this.showUnsubscribeFeedback();
            return Promise.resolve();
        });

        return Promise.resolve();
    }

    getWorkerPath() {
        if (isPopup() && !(this.config.popupCustomDomainEnabled && this.config.popupDomain)) {
            return '/cleverpush-worker.js';
        }
        return this.config.serviceWorkerFile || '/worker.js';
        /*
        if (typeof SERVICE_WORKER_HASH !== 'undefined') {
          workerPath += `?hash=${SERVICE_WORKER_HASH}`;
        }
        return workerPath;
        */
    }

    getWorkerScope() {
        let workerPath = this.getWorkerPath();
        if (workerPath.indexOf('?') > -1) {
            workerPath = workerPath.split('?')[0];
        }
        return workerPath.substr(0, workerPath.lastIndexOf('/') + 1) || '/';
    }

    getServiceWorker(registration) {
        return registration.active || registration.waiting || registration.installing;
    }

    getActiveWorkerRegistration() {
        return new Promise((resolve, reject) => {
            if (!navigator.serviceWorker) {
                log.debug('worker: getActiveWorkerRegistration: !navigator.serviceWorker');
                reject();
            } else if (navigator.serviceWorker.getRegistration) {
                const workerScope = this.getWorkerScope();
                const workerPath = this.config.serviceWorkerFile;
                navigator.serviceWorker.getRegistration(workerScope).then((registration) => {
                    if (registration && this.getServiceWorker(registration) && (!workerPath || !this.getServiceWorker(registration).scriptURL || this.getServiceWorker(registration).scriptURL.indexOf(workerPath) > -1)) {
                        resolve(registration);
                    } else if (typeof navigator.serviceWorker.getRegistrations === 'function') {
                        navigator.serviceWorker.getRegistrations().then((registrations) => {
                            let found = false;
                            (registrations || []).forEach((scopeRegistration) => {
                                if (!found) {
                                    if (scopeRegistration && this.getServiceWorker(scopeRegistration) && (!workerPath || !this.getServiceWorker(scopeRegistration).scriptURL || this.getServiceWorker(scopeRegistration).scriptURL.indexOf(workerPath) > -1)) {
                                        found = true;
                                        resolve(scopeRegistration);
                                    } else {
                                        log.debug('worker: getActiveWorkerRegistration:', scopeRegistration, this.getServiceWorker(scopeRegistration));
                                    }
                                }
                            });
                            if (!found) {
                                log.debug('worker: getActiveWorkerRegistration: !found');
                                reject();
                            }
                        }).catch(reject);
                    } else if (navigator.serviceWorker.controller) {
                        log.debug('worker: getActiveWorkerRegistration: waiting for worker to be ready');
                        navigator.serviceWorker.ready.then(resolve).catch(reject);
                    } else {
                        log.debug('worker: getActiveWorkerRegistration: last reject 1');
                        reject();
                    }
                }).catch(reject);
            } else if (navigator.serviceWorker.controller) {
                log.debug('worker: getActiveWorkerRegistration: waiting for worker to be ready');
                navigator.serviceWorker.ready.then(resolve).catch(reject);
            } else {
                log.debug('worker: getActiveWorkerRegistration: last reject 2');
                reject();
            }
        });
    }

    registerWorker() {
        return new Promise((resolve, reject) => {
            log.debug('registering worker');

            const registerNewWorker = () => {
                const workerPath = this.getWorkerPath();
                const workerScope = this.getWorkerScope();

                navigator.serviceWorker.register(workerPath, {
                    scope: workerScope,
                    updateViaCache: 'none'
                }).then((serviceWorkerRegistration) => {
                    log.debug('worker registered', serviceWorkerRegistration);

                    if (serviceWorkerRegistration.active) {
                        log.debug('worker is active');
                        resolve(serviceWorkerRegistration);
                    } else if (serviceWorkerRegistration.installing) {
                        log.debug('worker is installing');

                        serviceWorkerRegistration.installing.addEventListener('statechange', (e) => {
                            log.debug('worker: onstatechange', e.target.state);
                            if (e.target.state === 'activated') {
                                resolve(serviceWorkerRegistration);
                            }
                            /*
                            const sw = e.target;
                            log.debug('swInstallationStateChanged: ' + sw.state);


                              // is any sw already installed? This function will run 'before' 'SW's activate' handler, so we are checking for any previous sw, not this one.
                              if (navigator.serviceWorker.controller) {
                                console.log('Content has updated!');
                              } else {
                                console.log('Content is now available offline!');
                              }
                            } else if (sw.state === 'activated') {
                            }
                            */
                        });
                    } else if (serviceWorkerRegistration.waiting) {
                        log.debug('worker is waiting');
                        serviceWorkerRegistration.installing.addEventListener('statechange', (e) => {
                            log.debug('worker: onstatechange', e.target.state);
                            if (e.target.state === 'activated') {
                                resolve(serviceWorkerRegistration);
                            }
                        });
                    } else {
                        log.debug('worker: getActiveWorkerRegistration');
                        this.getActiveWorkerRegistration().then(resolve).catch(reject);
                    }

                    // resolve(serviceWorkerRegistration);
                }).catch((err) => {
                    log.error('error registering worker', err);
                    // Raven.captureException(err);
                    reject(err);
                });
            };

            this.getActiveWorkerRegistration().then((currentWorkerRegistration) => {
                if (!currentWorkerRegistration || !currentWorkerRegistration.active) {
                    registerNewWorker();
                } else {
                    log.debug('worker was already registered', currentWorkerRegistration);
                    resolve(currentWorkerRegistration);
                }
            }).catch(registerNewWorker);
        });
    }

    unregisterOtherPushSubscriptions(cleverpushRegistration) {
        logMethodCall('unregisterOtherPushSubscriptions', cleverpushRegistration.scriptURL);
        // unregister all other push subscriptions
        if (this.config.importedSubscriptionsProvider && typeof navigator.serviceWorker.getRegistrations === 'function') {
            navigator.serviceWorker.getRegistrations().then((registrations) => {
                (registrations || []).forEach((scopeRegistration) => {
                    if (this.getServiceWorker(scopeRegistration) && this.getServiceWorker(scopeRegistration).scriptURL !== cleverpushRegistration.scriptURL && this.getServiceWorker(scopeRegistration).scriptURL && this.getServiceWorker(scopeRegistration).scriptURL.indexOf(this.config.serviceWorkerFile) < 0 && this.getServiceWorker(scopeRegistration).scriptURL.indexOf('cleverpush') < 0) {
                        scopeRegistration.pushManager.getSubscription().then((subscription) => {
                            log.debug('unsubscribing:', subscription);
                            if (subscription) {
                                subscription.unsubscribe();
                                this.migratedSubscription = true;
                            }
                        });
                    }
                });
            });
        }
    }

    tryWorkerUpdate(serviceWorkerRegistration) {
        if (this.tryWorkerUpdateCalled) {
            return;
        }
        this.tryWorkerUpdateCalled = true;

        logMethodCall('tryWorkerUpdate', serviceWorkerRegistration);

        // updates SW every 6h
        this.storageManager.checkIfShouldUpdateWorker().then((shouldUpdate) => {
            if (serviceWorkerRegistration && shouldUpdate) {
                log.debug('updating worker now');
                serviceWorkerRegistration.update();
                this.storageManager.setWorkerUpdated();
            }
        });

        if (!this.unregisterOtherPushSubscriptionsCalled) {
            this.unregisterOtherPushSubscriptionsCalled = true;
            this.unregisterOtherPushSubscriptions(serviceWorkerRegistration);
        }
    }

    sync(subscriptionParam, topicsParam) {
        logMethodCall('sync', subscriptionParam);

        const topics = typeof topicsParam !== 'undefined' ? topicsParam : this.topics;

        return new Promise((resolve) => {
            if (this.syncInProgress) {
                log.debug('sync: resolved because syncInProgress was true');
                resolve();
                return;
            }
            this.syncInProgress = true;

            let subscription = subscriptionParam;

            this.getSubscriptionId().then((subscriptionIdParam) => {
                const doSync = () => {
                    const syncParams = {};
                    if (subscriptionIdParam) {
                        // TODO: this should be useless as subscription id is given via subscription param
                        syncParams.subscriptionId = subscriptionIdParam;
                    }
                    if (this.existingPermission) {
                        syncParams.existingPermission = true;
                    }
                    if (this.isReSubscribe) {
                        syncParams.isReSubscribe = true;
                    }
                    if (this.migratedSubscription) {
                        syncParams.migratedSubscription = true;
                    }

                    this.api.syncSubscription(subscription, topics, this.initialTags, syncParams).then((res) => {
                        const subscriptionId = res.id;

                        this.initialTags = [];

                        this.storageManager.setSubscribed(subscriptionId);
                        if (this.iframeMessenger) {
                            this.iframeMessenger.setSubscribed(subscriptionId);
                        }
                        this.storageManager.setSynced();

                        if ((res.topics || []).length) {
                            this.storageManager.setTopics(res.topics);
                        }
                        if (res.topics) {
                            this.triggerEvent(Event.TOPICS_SET);
                        }

                        if (res.topicsVersion) {
                            try {
                                localStorage.setItem('cleverpush-topics-version', `${res.topicsVersion}`);
                            } catch (ignored) {}
                        }

                        if (this.config.channelTags && this.config.channelTags.length && !this.existingPermission && !syncParams.subscriptionId) {
                            this.config.channelTags.forEach((tag) => {
                                if (tag.autoAssignOptInPath && new RegExp(tag.autoAssignOptInPath).test(location.pathname)) {
                                    CleverPush.tagSubscription(tag._id);
                                }
                            });
                        }

                        this.syncInProgress = false;
                        resolve();
                    }).catch((err) => {
                        if (typeof err !== 'undefined') {
                            if (err === 404) {
                                // consider this unsubscription as "not manually" so we can opt-in again
                                this.storageManager.setUnsubscribed(true);
                                if (this.iframeMessenger) {
                                    this.iframeMessenger.setUnsubscribed(true);
                                }

                                // retry to re-subscribe after 404
                                this.subscribe();
                            } else {
                                log.error(err);
                                // Raven.captureException(err);
                            }
                        } else {
                            log.error('Unknown Error occured while syncing');
                        }

                        this.syncInProgress = false;
                        resolve();
                    });
                };

                if (typeof subscription !== 'undefined' && subscription) {
                    doSync();
                } else {
                    subscription = subscriptionIdParam;
                    if (subscription) {
                        doSync();
                    } else {
                        this.syncInProgress = false;
                        resolve();
                    }
                }
            }).catch((err) => {
                this.syncInProgress = false;
            });
        });
    }

    getSubscriptionId() {
        const subId = this.storageManager.getSubscriptionId();
        if (subId) {
            log.debug('subscriptionId', subId);
        } else {
            log.debug('subscriptionId not found');
        }
        return Promise.resolve(subId);
    }

    hasNotificationPermission() {
        if (this.config.env === 'PREVIEW') {
            return Promise.resolve(false);
        }
        return Promise.resolve(window.Notification.permission === 'granted');
    }

    getNotificationPermission(force) {
        try {
            if (browser.name === 'Firefox' && sessionStorage.getItem('cleverpush-subscription-status') === 'denied' && typeof force === 'undefined') {
                return 'denied';
            }
        } catch (err) {}
        return window.Notification.permission;
    }

    setConfirm(confirm) {
        this.confirm = confirm;
    }

    setTopics(topics) {
        log.debug('setTopics', topics);

        this.topics = topics;
        return this.storageManager.setTopics(topics);
    }

    getTopics() {
        return this.storageManager.getTopics();
    }

    getStoredNotifications() {
        let path = `/channel/${this.api.channelId}/received-notifications`;

        return this.getTopics().then((topics) => {
            if (topics && topics.length) {
                path += `?${topics.map(t => (`topics[]=${t}`)).join('&')}`;
            }

            return this.api.request('GET', path)
                .then(json => new Promise((resolve) => {
                    if (json && json.notifications) {
                        resolve(json.notifications.filter(notification => notification.createdAt).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map(n => Object.assign({}, n, {
                            title: n.title || (n.testVariants && n.testVariants.length && n.testVariants[0] ? (n.testVariants[0].title) : ''),
                            text: n.text || (n.testVariants && n.testVariants.length && n.testVariants[0] ? (n.testVariants[0].text) : ''),
                            mediaUrl: n.mediaUrl || (n.testVariants && n.testVariants.length && n.testVariants[0] ? (n.testVariants[0].mediaUrl) : ''),
                            url: n.url || (n.testVariants && n.testVariants.length && n.testVariants[0] ? (n.testVariants[0].url) : '')
                        })));
                    } else {
                        resolve([]);
                    }
                }));
        });

        /*
        return new Promise((resolve) => {
          let notifications = [];
          if (!this.storageManager.db) {
            resolve(notifications);
          } else {
            this.storageManager.getNotifications().then((notificationsArray) => {
              notifications = notificationsArray.filter(notification => notification.createdAt).sort((a, b) => {
                return new Date(b.createdAt) - new Date(a.createdAt);
              });
              resolve(notifications);
            }).catch(() => {
              resolve(notifications);
            });
          }
          });
        */
    }

    deleteStoredNotification(id) {
        return new Promise((resolve, reject) => {
            if (!this.storageManager.db) {
                resolve();
            } else {
                this.storageManager.deleteNotification(id).then(() => {
                    resolve();
                }).catch((err) => {
                    reject(err);
                });
            }
        });
    }

    getPushManagerSubscribeOptions() {
        const subscribeOptions = {
            userVisibleOnly: true
        };

        if (this.config.vapidPublicKey && this.config.vapidPublicKey.length) {
            const vapidPublicKey = urlBase64ToUint8Array(this.config.vapidPublicKey);
            if (vapidPublicKey) {
                subscribeOptions.applicationServerKey = vapidPublicKey;
            }
        }

        return subscribeOptions;
    }

    setClickedNotification(id) {
        this.storageManager.setClickedNotification(id);
        return Promise.resolve();
    }

    getClickedNotification() {
        return new Promise((resolve) => {
            resolve(this.storageManager.getClickedNotification());
        });
    }
}