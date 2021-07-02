import {
    isPopupUnsubscribe
} from '../utils/env';
import {
    log
} from '../utils/debug';
import {
    INT_RADIX
} from '../const/common';

const KEY_DENY_SESSIONS = 'cleverpush-deny-sessions';
const KEY_DENY_TIME = 'cleverpush-deny-time';
const KEY_DENY_SESSIONS_COUNTED = 'cleverpush-deny-sessions-counted';
const KEY_CLOSE_TIME = 'cleverpush-close-time';
const KEY_CLOSE_SESSIONS = 'cleverpush-close-sessions';
const KEY_CLOSE_SESSIONS_COUNTED = 'cleverpush-close-sessions-counted';
const KEY_SUBSCRIPTION_ID = 'cleverpush-subscription-id';
const KEY_SUBSCRIPTION_ID_OLD = 'push-subscription-id';
const KEY_SUBSCRIPTION_STATUS = 'cleverpush-subscription-status';
const KEY_SUBSCRIPTION_STATUS_OLD = 'push-subscription-status';
const KEY_DOMAIN = 'cleverpush-domain';
const DEFAULT_DOMAIN = 'cleverpush.com';
const KEY_LAST_SYNC = 'cleverpush-last-sync';
const KEY_LAST_SESSION = 'cleverpush-last-session';
const KEY_VISITS = 'cleverpush-visits';
const KEY_ATTRIBUTES = 'cleverpush-attributes';
const KEY_ATTRIBUTE_PREFIX = 'cleverpush-attribute';
const KEY_TAG_PREFIX = 'cleverpush-tag';
const KEY_TAGS = 'cleverpush-tags';
const KEY_TAG_DATES = 'cleverpush-tag-dates';
const KEY_TOPICS = 'cleverpush-topics';
const KEY_TOPICS_VERSION = 'cleverpush-topics-version';
const KEY_LAST_WORKER_UPDATE = 'cleverpush-last-worker-update';
const KEY_LAST_WORKER_VERSION = 'cleverpush-last-worker-version';
const KEY_NOTIFICATION_CLICKED = 'cleverpush-notification-clicked';
const KEY_FACEBOOK_USER_REF = 'cleverpush-facebook-user-ref';
const KEY_AMP_WEB_PUSH_PERMISSION = 'amp-web-push-notification-permission';
const AMP_WEB_PUSH_PERMISSION_GRANTED = 'granted';
const INDEXEDDB_DATABASE = 'cleverpush';
const INDEXEDDB_VERSION = 40;
export const SUBSCRIPTION_STATUS = {
    DENIED: 'denied',
    WAS_DENIED: 'was-denied',
    UNSUBSCRIBED: 'unsubscribed',
    PENDING: 'pending',
    ALLOWED: 'allowed',
};

export default class StorageManager {
    constructor(config) {
        this.config = config;

        try {
            if ('localStorage' in window) {
                // set cleverpush domain to default if there is a subscription
                if (config.cleverpushDomain) {
                    if (
                        config.cleverpushDomain &&
                        localStorage.getItem(KEY_SUBSCRIPTION_ID) &&
                        !localStorage.getItem(KEY_DOMAIN)
                    ) {
                        localStorage.setItem(KEY_DOMAIN, DEFAULT_DOMAIN);
                    }
                    if (localStorage.getItem(KEY_DOMAIN)) {
                        this.config.cleverpushDomain = localStorage.getItem(KEY_DOMAIN);
                    }
                }

                // transfer old values
                if (
                    localStorage.getItem(KEY_SUBSCRIPTION_STATUS_OLD) &&
                    !localStorage.getItem(KEY_SUBSCRIPTION_STATUS)
                ) {
                    localStorage.setItem(KEY_SUBSCRIPTION_STATUS, localStorage.getItem(KEY_SUBSCRIPTION_STATUS_OLD));
                }
                if (
                    localStorage.getItem(KEY_SUBSCRIPTION_ID_OLD) &&
                    !localStorage.getItem(KEY_SUBSCRIPTION_ID)
                ) {
                    localStorage.setItem(KEY_SUBSCRIPTION_ID, localStorage.getItem(KEY_SUBSCRIPTION_ID_OLD));
                }

                // check frequency capping
                if (
                    localStorage.getItem(KEY_SUBSCRIPTION_STATUS) !== SUBSCRIPTION_STATUS.ALLOWED
                ) {
                    const currentTime = Date.now();
                    const isUnsubscribed = localStorage.getItem(KEY_SUBSCRIPTION_STATUS) === SUBSCRIPTION_STATUS.UNSUBSCRIBED;

                    let alertHoursDeny = isUnsubscribed ? this.config.alertHoursUnsubscribe : this.config.alertHoursDeny;
                    if (!isUnsubscribed && typeof alertHoursDeny === 'undefined') {
                        // default: 365 days
                        alertHoursDeny = 365 * 24;
                    }
                    const alertSessionsDeny = isUnsubscribed ? this.config.alertSessionsUnsubscribe : this.config.alertSessionsDeny;

                    let denyTimeAllowed = false;
                    let denySessionsAllowed = false;

                    if (localStorage.getItem(KEY_DENY_TIME) && alertHoursDeny > 0) {
                        const denyTime = parseInt(localStorage.getItem(KEY_DENY_TIME), INT_RADIX);
                        const denyHours = parseInt(alertHoursDeny, INT_RADIX);
                        if (!isNaN(denyTime) && !isNaN(denyHours)) {
                            if (denyTime + (denyHours * 60 * 60 * 1000) < currentTime) {
                                denyTimeAllowed = true;
                            }
                        }
                    }

                    if (localStorage.getItem(KEY_DENY_SESSIONS) && alertSessionsDeny > 0) {
                        let denySessions = parseInt(localStorage.getItem(KEY_DENY_SESSIONS), INT_RADIX);
                        if (!isNaN(denySessions)) {
                            if (!sessionStorage.getItem(KEY_DENY_SESSIONS_COUNTED)) {
                                denySessions += 1;
                                localStorage.setItem(KEY_DENY_SESSIONS, denySessions);
                            }
                            if (denySessions >= alertSessionsDeny) {
                                denySessionsAllowed = true;
                            }
                        }
                    }

                    if (
                        (denyTimeAllowed || denySessionsAllowed) &&
                        (!alertHoursDeny || denyTimeAllowed) &&
                        (!alertSessionsDeny || denySessionsAllowed)
                    ) {
                        localStorage.removeItem(KEY_SUBSCRIPTION_STATUS_OLD);
                        localStorage.removeItem(KEY_DENY_TIME);
                        localStorage.removeItem(KEY_DENY_SESSIONS);
                        if (
                            localStorage.getItem(KEY_SUBSCRIPTION_STATUS) === SUBSCRIPTION_STATUS.DENIED ||
                            localStorage.getItem(KEY_SUBSCRIPTION_STATUS) === SUBSCRIPTION_STATUS.UNSUBSCRIBED
                        ) {
                            localStorage.setItem(KEY_SUBSCRIPTION_STATUS, SUBSCRIPTION_STATUS.WAS_DENIED);
                        } else {
                            localStorage.removeItem(KEY_SUBSCRIPTION_STATUS);
                        }
                    }

                    if (!isUnsubscribed) {
                        let closeTimeAllowed = false;
                        let closeSessionsAllowed = false;

                        if (localStorage.getItem(KEY_CLOSE_TIME) && this.config.alertHoursClose > 0) {
                            const closeTime = parseInt(localStorage.getItem(KEY_CLOSE_TIME), INT_RADIX);
                            const closeHours = parseInt(this.config.alertHoursClose, INT_RADIX);
                            if (!isNaN(closeTime) && !isNaN(closeHours)) {
                                if (closeTime + (closeHours * 60 * 60 * 1000) < currentTime) {
                                    closeTimeAllowed = true;
                                }
                            }
                        }

                        if (localStorage.getItem(KEY_CLOSE_SESSIONS) && this.config.alertSessionsClose > 0) {
                            let closeSessions = parseInt(localStorage.getItem(KEY_CLOSE_SESSIONS), INT_RADIX);
                            if (!isNaN(closeSessions)) {
                                if (!sessionStorage.getItem(KEY_CLOSE_SESSIONS_COUNTED)) {
                                    closeSessions += 1;
                                    localStorage.setItem(KEY_CLOSE_SESSIONS, closeSessions);
                                }
                                if (closeSessions >= this.config.alertSessionsClose) {
                                    closeSessionsAllowed = true;
                                }
                            }
                        }

                        if (
                            (closeTimeAllowed || closeSessionsAllowed) &&
                            (!this.config.alertHoursClose || closeTimeAllowed) &&
                            (!this.config.alertSessionsClose || closeSessionsAllowed)
                        ) {
                            localStorage.removeItem(KEY_SUBSCRIPTION_STATUS_OLD);
                            localStorage.removeItem(KEY_SUBSCRIPTION_STATUS);
                            localStorage.removeItem(KEY_CLOSE_TIME);
                            localStorage.removeItem(KEY_CLOSE_SESSIONS);
                        }
                    }
                }
            }
        } catch (err) {

        }
    }

    dbOpenError(e) {
        this.dbInitializing = false;
        if (e.message && e.message.toString().indexOf('VersionError') > -1) {
            log.info('deleting db');

            const deleteReq = window.indexedDB.deleteDatabase(INDEXEDDB_DATABASE);
            deleteReq.onsuccess = () => {
                const openReq = this.db.open();
                openReq.onsuccess = () => this.dbOpenSuccess(openReq);
                openReq.onerror = (openErr) => {
                    log.warn(openErr);
                };
            };
        } else if (!e.name || e.name !== 'NoSuchDatabaseError') {
            log.warn(e);
        }
    }

    dbOpenSuccess(openReq) {
        this.db = openReq.result;
        this.dbInitializing = false;

        this.db.onerror = (err) => {
            log.warn('IndexedDB error occured', err);
        };

        this.db.onversionchange = (e) => {
            if (e.newVersion === null) {
                e.target.close();
            } else {
                this.db.close();
                const versionDbOpen = window.indexedDB.open(INDEXEDDB_DATABASE, INDEXEDDB_VERSION);

                versionDbOpen.onsuccess = () => this.dbOpenSuccess(versionDbOpen);
                versionDbOpen.onerror = this.dbOpenError;
            }
        };
    }

    initDb(callback) {
        if (!this.db && window.indexedDB && !this.dbInitializing) {
            this.dbInitializing = true;
            try {
                const openReq = window.indexedDB.open(INDEXEDDB_DATABASE, INDEXEDDB_VERSION);

                openReq.onsuccess = () => {
                    this.dbOpenSuccess(openReq);
                    if (typeof callback === 'function') {
                        callback(openReq.result);
                    }
                };
                openReq.onerror = this.dbOpenError;
                openReq.onupgradeneeded = (event) => {
                    const db = event.target.result;

                    const notifications = db.createObjectStore('notifications', {
                        keyPath: 'id'
                    });
                    notifications.createIndex('id', 'id', {
                        unique: true
                    });
                    notifications.createIndex('url', 'url', {
                        unique: false
                    });
                    notifications.createIndex('clicked', 'clicked', {
                        unique: false
                    });
                    notifications.createIndex('title', 'title', {
                        unique: false
                    });
                    notifications.createIndex('text', 'text', {
                        unique: false
                    });
                    notifications.createIndex('icon', 'icon', {
                        unique: false
                    });
                    notifications.createIndex('subscriptionId', 'subscriptionId', {
                        unique: false
                    });
                    notifications.createIndex('channelId', 'channelId', {
                        unique: false
                    });
                    notifications.createIndex('autoHide', 'autoHide', {
                        unique: false
                    });
                    notifications.createIndex('markedAsDelivered', 'markedAsDelivered', {
                        unique: false
                    });
                    notifications.createIndex('markedAsClicked', 'markedAsClicked', {
                        unique: false
                    });
                    notifications.createIndex('clickedAction', 'clickedAction', {
                        unique: false
                    });
                    notifications.createIndex('deliveredAt', 'deliveredAt', {
                        unique: false
                    });

                    const subscription = db.createObjectStore('subscription', {
                        keyPath: 'id'
                    });
                    subscription.createIndex('id', 'id', {
                        unique: true
                    });
                    subscription.createIndex('channelId', 'channelId', {
                        unique: false
                    });
                };
            } catch (err) {
                this.dbInitializing = false;
                log.info('initDb err', err);
            }

            // Versioning is done ONLY in SW from now on. This prevents from the SDK's DB version being ahead of the worker's version (not good).
            /*
            this.db.version(4).stores({
              notifications: 'id,url,clicked,title,text,icon,subscriptionId,channelId,autoHide,markedAsDelivered,markedAsClicked,clickedAction,deliveredAt',
              subscription: 'id,channelId'
            });
            this.db.version(3).stores({
              notifications: 'id,url,clicked,title,text,icon,subscriptionId,channelId,autoHide,markedAsDelivered,markedAsClicked,clickedAction',
              subscription: 'id,channelId'
            });
            this.db.version(2).stores({
              notifications: 'id,url,clicked,title,text,icon,subscriptionId,channelId,autoHide',
              subscription: 'id,channelId'
            });
            this.db.version(1).stores({
              notifications: 'id,url,clicked,title,text,icon,subscriptionId,channelId,autoHide'
            });
            */
        } else if (this.db) {
            if (typeof callback === 'function') {
                callback(this.db);
            }
        }
    }

    getNotifications(max) {
        return new Promise((resolve) => {
            const notifications = [];

            if (this.db) {
                const trans = this.db.transaction(['notifications'], 'readonly');
                const store = trans.objectStore('notifications');
                const index = store.index('deliveredAt');

                const cursorRequest = index.openCursor(null, 'prev');

                cursorRequest.onsuccess = (e) => {
                    const result = e.target.result;
                    if (!!result === false || notifications.length >= (max || 50)) {
                        resolve(notifications);
                        return;
                    }

                    notifications.push(result.value);

                    result.continue();
                };
                cursorRequest.onerror = () => resolve(notifications);
            } else {
                resolve(notifications);
            }
        });
    }

    getNotification(id) {
        return new Promise((resolve) => {
            if (this.db) {
                const trans = this.db.transaction(['notifications']);
                const store = trans.objectStore('notifications');

                const req = store.get(id);
                req.onsuccess = (e) => {
                    const notification = e.target.result;
                    resolve(notification);
                };
                req.onerror = () => resolve(null);
            } else {
                resolve(null);
            }
        });
    }

    addNotification(doc) {
        return new Promise((resolve, reject) => {
            if (this.db) {
                const trans = this.db.transaction(['notifications'], 'readwrite');
                const store = trans.objectStore('notifications');

                const req = store.put(doc);
                req.onsuccess = resolve;
                req.onerror = reject;
            } else {
                resolve(null);
            }
        });
    }

    deleteNotification(id) {
        return new Promise((resolve, reject) => {
            if (this.db) {
                const trans = this.db.transaction(['notifications'], 'readwrite');
                const store = trans.objectStore('notifications');

                const req = store.delete(id);
                req.onsuccess = resolve;
                req.onerror = reject;
            } else {
                resolve(null);
            }
        });
    }

    // returns false if the user CAN subscribe (and is not subscribed)
    canSubscribe() {
        try {
            return new Promise((resolve) => {
                try {
                    const status = localStorage.getItem(KEY_SUBSCRIPTION_STATUS);
                    const sessionStatus = sessionStorage.getItem(KEY_SUBSCRIPTION_STATUS);
                    if (
                        status !== SUBSCRIPTION_STATUS.DENIED &&
                        status !== SUBSCRIPTION_STATUS.UNSUBSCRIBED &&
                        status !== SUBSCRIPTION_STATUS.PENDING &&
                        sessionStatus !== SUBSCRIPTION_STATUS.DENIED
                    ) {
                        resolve(status || true);
                    } else {
                        resolve(false);
                    }
                } catch (e) {
                    resolve(true);
                }
            });
        } catch (err) {
            return Promise.resolve(true);
        }
    }

    // returns true if user is subscribed
    isSubscribed(allowEmptyId, noPromise, fromIframe) {
        try {
            if (typeof noPromise !== 'undefined' && noPromise) {
                const status = localStorage.getItem(KEY_SUBSCRIPTION_STATUS);
                // not denied or unsubscribed + subscriptionId is set
                if (
                    status &&
                    status !== SUBSCRIPTION_STATUS.DENIED &&
                    status !== SUBSCRIPTION_STATUS.UNSUBSCRIBED &&
                    status !== SUBSCRIPTION_STATUS.PENDING
                ) {
                    if (allowEmptyId) {
                        return true;
                    }
                    return !!this.getSubscriptionId();
                }
                return false;
            }

            return new Promise((resolve) => {
                try {
                    const status = localStorage.getItem(KEY_SUBSCRIPTION_STATUS);
                    // not denied or unsubscribed + subscriptionId is set
                    if (
                        status &&
                        status !== SUBSCRIPTION_STATUS.DENIED &&
                        status !== SUBSCRIPTION_STATUS.UNSUBSCRIBED &&
                        status !== SUBSCRIPTION_STATUS.PENDING
                    ) {
                        const ampSubscribed = localStorage.getItem(KEY_AMP_WEB_PUSH_PERMISSION) === AMP_WEB_PUSH_PERMISSION_GRANTED;
                        if (allowEmptyId || ampSubscribed) {
                            resolve(true);
                        } else {
                            // check if push ID + service worker
                            resolve(!!this.getSubscriptionId());
                        }
                    } else if (typeof fromIframe !== 'undefined' && fromIframe) {
                        resolve(!!this.getSubscriptionId());
                    } else {
                        resolve(false);
                    }
                } catch (e) {
                    resolve(false);
                }
            });
        } catch (err) {
            return Promise.resolve(true);
        }
    }

    getSubscriptionId() {
        let id;
        try {
            id = localStorage.getItem(KEY_SUBSCRIPTION_ID);
            if (!id) {
                id = sessionStorage.getItem(KEY_SUBSCRIPTION_ID);
            }
        } catch (err) {}
        if (!id && isPopupUnsubscribe()) {
            const params = new URLSearchParams(location.search.slice(1));
            if (params) {
                id = params.get('subscriptionId');
            }
        }
        return id;
    }

    setClickedNotification(id) {
        try {
            localStorage.setItem(KEY_NOTIFICATION_CLICKED, JSON.stringify({
                id,
                date: Date.now()
            }));
        } catch (ignored) {

        }
    }

    getClickedNotification() {
        try {
            const clickedNotif = localStorage.getItem(KEY_NOTIFICATION_CLICKED);
            const clickedNotifObj = JSON.parse(clickedNotif);
            // allow 1h
            if (clickedNotifObj && clickedNotifObj.id && clickedNotifObj.date && (parseInt(clickedNotifObj.date, INT_RADIX) + 1000 * 60 * 60) > Date.now()) {
                return clickedNotifObj.id;
            }
        } catch (ignored) {}
        return null;
    }

    getLastSession() {
        let lastSessionStr;
        try {
            lastSessionStr = localStorage.getItem(KEY_LAST_SESSION);
        } catch (err) {}
        let lastSession = {};
        if (lastSessionStr) {
            try {
                lastSession = JSON.parse(lastSessionStr);
            } catch (ignored) {}
        }
        return lastSession;
    }

    setLastSession(lastSession) {
        try {
            localStorage.setItem(KEY_LAST_SESSION, JSON.stringify(lastSession));
        } catch (err) {}
    }

    setSubscribed(subscriptionId, fromIframe) {
        if (subscriptionId) {
            localStorage.setItem(KEY_SUBSCRIPTION_ID, subscriptionId);

            localStorage.setItem(KEY_DOMAIN, this.config.cleverpushDomain || DEFAULT_DOMAIN);

            if (typeof fromIframe === 'undefined' || !fromIframe) {
                localStorage.setItem(KEY_SUBSCRIPTION_STATUS, SUBSCRIPTION_STATUS.ALLOWED);
            }

            this.initDb((db) => {
                if (db) {
                    try {
                        const trans = db.transaction(['subscription'], 'readwrite');
                        const store = trans.objectStore('subscription');

                        const req = store.clear();
                        req.onsuccess = () => {
                            const putTrans = db.transaction(['subscription'], 'readwrite');
                            const putStore = putTrans.objectStore('subscription');
                            putStore.put({
                                id: subscriptionId,
                                channelId: this.config.channelId
                            });
                        };
                    } catch (err) {
                        log.info('setSubscribed db error', err);
                    }
                }
            });
        }
    }

    getFacebookUserRef() {
        try {
            return localStorage.getItem(KEY_FACEBOOK_USER_REF);
        } catch (e) {}
        return undefined;
    }

    setFacebookUserRef(userRef) {
        if (userRef) {
            localStorage.setItem(KEY_FACEBOOK_USER_REF, userRef);
        }
    }

    setAllowed() {
        localStorage.setItem(KEY_SUBSCRIPTION_STATUS, SUBSCRIPTION_STATUS.ALLOWED);
    }

    setPending() {
        localStorage.setItem(KEY_SUBSCRIPTION_STATUS, SUBSCRIPTION_STATUS.PENDING);
    }

    setDenied() {
        localStorage.setItem(KEY_DENY_TIME, Date.now());

        localStorage.setItem(KEY_SUBSCRIPTION_STATUS, SUBSCRIPTION_STATUS.DENIED);

        if (this.config.alertSessionsDeny > 0) {
            localStorage.setItem(KEY_DENY_SESSIONS, '0');
            sessionStorage.setItem(KEY_DENY_SESSIONS_COUNTED, 'true');
        }
    }

    setClosed() {
        localStorage.setItem(KEY_CLOSE_TIME, Date.now());

        if (this.config.alertHoursClose > 0 || this.config.alertSessionsClose > 0) {
            localStorage.setItem(KEY_SUBSCRIPTION_STATUS, SUBSCRIPTION_STATUS.DENIED);
        } else {
            localStorage.removeItem(KEY_SUBSCRIPTION_STATUS);
        }

        if (this.config.alertSessionsClose > 0) {
            localStorage.setItem(KEY_CLOSE_SESSIONS, '0');
            sessionStorage.setItem(KEY_CLOSE_SESSIONS_COUNTED, 'true');
        }
    }

    setUnsubscribed(notManually) {
        localStorage.removeItem(KEY_SUBSCRIPTION_ID_OLD);
        localStorage.removeItem(KEY_SUBSCRIPTION_ID);
        localStorage.removeItem(KEY_LAST_SYNC);
        localStorage.removeItem(KEY_LAST_SESSION);
        localStorage.removeItem(KEY_LAST_WORKER_UPDATE);
        localStorage.removeItem(KEY_LAST_WORKER_VERSION);
        localStorage.removeItem(KEY_DOMAIN);
        localStorage.removeItem(KEY_FACEBOOK_USER_REF);
        localStorage.removeItem(KEY_TOPICS);
        localStorage.removeItem(KEY_TOPICS_VERSION);
        localStorage.removeItem(KEY_TAGS);
        localStorage.removeItem(KEY_ATTRIBUTES);
        localStorage.removeItem(KEY_VISITS);
        if (!notManually) {
            localStorage.setItem(KEY_SUBSCRIPTION_STATUS, SUBSCRIPTION_STATUS.UNSUBSCRIBED);
            localStorage.setItem(KEY_DENY_TIME, Date.now());
        }

        Object.keys(localStorage).forEach((key) => {
            if ((key && key.startsWith(KEY_TAG_PREFIX)) || key.startsWith(KEY_ATTRIBUTE_PREFIX)) {
                localStorage.removeItem(key);
            }
        });

        if (this.db) {
            try {
                const trans = this.db.transaction(['subscription'], 'readwrite');
                const store = trans.objectStore('subscription');
                store.clear();
            } catch (err) {
                log.info('setUnsubscribed db error', err);
            }
        }
    }

    checkIfShouldSync() {
        const syncInterval = 2 * 24 * 60 * 60 * 1000; // 2 days
        return new Promise((resolve) => {
            try {
                const lastSync = localStorage.getItem(KEY_LAST_SYNC);
                // sync when subscription id is empty
                if (!this.getSubscriptionId()) {
                    resolve(true);
                } else if (!lastSync) {
                    resolve(true);
                } else {
                    const lastSyncTime = parseInt(lastSync, INT_RADIX);
                    if (isNaN(lastSyncTime)) {
                        resolve(true);
                    } else {
                        resolve(lastSyncTime + syncInterval <= Date.now());
                    }
                }
            } catch (err) {
                resolve(true);
            }
        });
    }

    setSynced() {
        localStorage.setItem(KEY_LAST_SYNC, Date.now());
    }

    checkIfShouldUpdateWorker() {
        const currentVersion = typeof VERSION !== 'undefined' ? VERSION : '';
        return new Promise((resolve) => {
            try {
                const lastSync = localStorage.getItem(KEY_LAST_WORKER_UPDATE);
                const lastVersion = localStorage.getItem(KEY_LAST_WORKER_VERSION);
                if (!lastSync) {
                    resolve(true);
                } else if (currentVersion) {
                    // no time check here, just check if version of sdk updated (is similar to worker version)
                    resolve(lastVersion !== currentVersion);
                } else {
                    const lastSyncTime = parseInt(lastSync, INT_RADIX);
                    if (isNaN(lastSyncTime)) {
                        resolve(true);
                    } else {
                        const syncInterval = 24 * 60 * 60 * 1000; // 24 hours
                        resolve(lastSyncTime + syncInterval <= Date.now());
                    }
                }
            } catch (err) {
                resolve(true);
            }
        });
    }

    setWorkerUpdated() {
        localStorage.setItem(KEY_LAST_WORKER_UPDATE, Date.now());
        localStorage.setItem(KEY_LAST_WORKER_VERSION, typeof VERSION !== 'undefined' ? VERSION : '');
    }

    getVisits() {
        let storedVisits;
        try {
            storedVisits = localStorage.getItem(KEY_VISITS);
        } catch (err) {}
        let visits = 0;
        if (storedVisits) {
            visits = parseInt(storedVisits, INT_RADIX);
            if (isNaN(visits)) {
                visits = 0;
            }
        }
        return visits;
    }

    incrementVisits() {
        let visits = this.getVisits();
        visits += 1;
        localStorage.setItem(KEY_VISITS, visits);
    }

    setTopics(topics) {
        log.debug('storageManager.setTopics', topics);

        return new Promise((resolve) => {
            if (topics && topics.length) {
                localStorage.setItem(KEY_TOPICS, JSON.stringify(topics));
            } else if (topics) {
                localStorage.removeItem(KEY_TOPICS);
            }
            resolve(true);
        });
    }

    getTopics() {
        const topicsStr = localStorage.getItem(KEY_TOPICS);
        if (!topicsStr) {
            return Promise.resolve([]);
        }
        try {
            const topics = JSON.parse(topicsStr);
            return Promise.resolve(topics || []);
        } catch (err) {
            return Promise.resolve([]);
        }
    }

    getTagDates() {
        let tagDates = {};
        if (localStorage.getItem(KEY_TAG_DATES)) {
            try {
                tagDates = JSON.parse(localStorage.getItem(KEY_TAG_DATES));
            } catch (ignored) {}
        }
        return tagDates;
    }

    getTagDate(id) {
        const date = (this.getTagDates() || {})[id];
        if (date) {
            return new Date(date);
        }
        return null;
    }

    setTags(tags) {
        return new Promise((resolve) => {
            localStorage.setItem(KEY_TAGS, JSON.stringify(tags));

            const tagDates = this.getTagDates() || {};
            tags.forEach((tag) => {
                tagDates[tag] = (new Date()).toISOString();
            });
            localStorage.setItem(KEY_TAG_DATES, JSON.stringify(tagDates));

            resolve(true);
        });
    }

    addTag(tag) {
        return this.getTags().then((tags) => {
            if (tags.indexOf(tag) < 0) {
                tags.push(tag);
            }
            return this.setTags(tags);
        });
    }

    removeTag(tag) {
        return this.getTags().then((tags) => {
            const index = tags.indexOf(tag);
            if (index > -1) {
                tags.splice(index, 1);
                return this.setTags(tags);
            }
            return Promise.resolve();
        });
    }

    getTags() {
        const tagsStr = localStorage.getItem(KEY_TAGS);
        if (!tagsStr) {
            return Promise.resolve([]);
        }
        try {
            const tags = JSON.parse(tagsStr);
            return Promise.resolve(tags || []);
        } catch (err) {
            return Promise.resolve([]);
        }
    }

    hasTag(tag) {
        return this.getTags().then(tags => Promise.resolve(tags.indexOf(tag) > -1));
    }

    setTempBlocked() {
        sessionStorage.setItem(KEY_SUBSCRIPTION_STATUS, SUBSCRIPTION_STATUS.DENIED);
    }
}