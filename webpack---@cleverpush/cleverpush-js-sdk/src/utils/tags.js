import {
    log,
    logMethodCall
} from './debug';

export const autoAssignTagMatches = (tag, pathname, callback) => {
    if (tag.autoAssignPath) {
        let path = tag.autoAssignPath;
        if (path === '[EMPTY]') {
            path = '';
        }
        if (new RegExp(path).test(pathname)) {
            if (!tag.autoAssignFunction && !tag.autoAssignSelector) {
                return callback(true);
            } else {
                // wait for function check
            }
        } else {
            return;
        }
    }

    if (tag.autoAssignFunction) {
        try {
            if (tag.autoAssignCheckInterval && !isNaN(tag.autoAssignCheckInterval)) {
                const interval = setInterval(() => {
                    try {
                        const matches = eval(tag.autoAssignFunction);

                        if (typeof matches === 'promise' && matches.then) {
                            try {
                                matches.then(() => {
                                    clearInterval(interval);
                                    callback(true);
                                });
                            } catch (err) {}
                        } else if (matches) {
                            clearInterval(interval);
                            callback(true);
                        }

                    } catch (err) {
                        log.debug(err);
                    }
                }, tag.autoAssignCheckInterval);
                return null;
            } else {
                return callback(!!eval(tag.autoAssignFunction));
            }
        } catch (err) {
            log.debug(err);
        }
    }

    if (tag.autoAssignSelector) {
        try {
            const triggerElems = document.querySelectorAll(tag.autoAssignSelector);
            for (let triggerElemIndex = 0; triggerElemIndex < triggerElems.length; triggerElemIndex += 1) {
                const triggerElem = triggerElems[triggerElemIndex];
                if (triggerElem) {
                    triggerElem.addEventListener('click', () => {
                        callback(true);
                    });
                }
            }
            return null;
        } catch (err) {
            log.debug(err);
        }
    }

    return callback(false);
};

export const checkTags = (tags, storedTags, tagSubscription, waitForSubscription, pathname) => {
    logMethodCall('checkTags');

    if (tags && tags.length && typeof localStorage !== 'undefined') {
        tags.forEach((tag) => {
            autoAssignTagMatches(tag, pathname, (matches) => {
                log.debug('autoAssignTagMatches callback');

                if (matches) {
                    const visitsNeeded = !isNaN(tag.autoAssignVisits) ? tag.autoAssignVisits : 0;
                    const visitsStorageKey = 'cleverpush-tag-autoAssignVisits-' + tag._id;
                    const visitsStorage = tag.autoAssignSessionVisits ? sessionStorage : localStorage;

                    const dateKey = new Date().toISOString().substr(0, 10);
                    let dateAfter;
                    if (tag.autoAssignDays) {
                        dateAfter = new Date();
                        dateAfter.setDate(dateAfter.getDate() - tag.autoAssignDays);
                    }

                    const visitsStr = visitsStorage.getItem(visitsStorageKey);
                    let visits = 0;
                    let dailyVisits = {};
                    if (tag.autoAssignDays) {
                        try {
                            dailyVisits = JSON.parse(visitsStr) || {};
                            if (typeof dailyVisits !== 'object') {
                                dailyVisits = {};
                            }
                            Object.keys(dailyVisits || {}).forEach((curDateKey) => {
                                const curDate = new Date(curDateKey);
                                if (curDate >= dateAfter) {
                                    visits += dailyVisits[curDateKey] || 0;
                                } else {
                                    delete dailyVisits[curDateKey];
                                }
                            });
                        } catch (ignored) {
                            dailyVisits = {};
                        }
                    } else if (typeof visitsStr === 'string' && !isNaN(visitsStr)) {
                        visits = parseInt(visitsStr, 10);
                    }

                    const sessionsNeeded = !isNaN(tag.autoAssignSessions) ? tag.autoAssignSessions : 0;
                    const sessionsStorageKey = 'cleverpush-tag-autoAssignSessions-' + tag._id;
                    const sessionsCountedStorageKey = 'cleverpush-tag-autoAssignSessionsCounted-' + tag._id;
                    const sessionsStr = localStorage.getItem(sessionsStorageKey);
                    let sessions = 0;
                    let dailySessions = {};
                    if (tag.autoAssignDays) {
                        try {
                            dailySessions = JSON.parse(sessionsStr) || {};
                            if (typeof dailySessions !== 'object') {
                                dailySessions = {};
                            }
                            Object.keys(dailySessions || {}).forEach((curDateKey) => {
                                const curDate = new Date(curDateKey);
                                if (curDate >= dateAfter) {
                                    sessions += dailySessions[curDateKey] || 0;
                                } else {
                                    delete dailySessions[curDateKey];
                                }
                            });
                        } catch (ignored) {
                            dailySessions = {};
                        }
                    } else if (typeof sessionsStr === 'string' && !isNaN(sessionsStr)) {
                        sessions = parseInt(sessionsStr, 10);
                    }

                    if (sessions >= sessionsNeeded) {
                        if (visits >= visitsNeeded) {
                            if (!isNaN(tag.autoAssignSeconds) && tag.autoAssignSeconds) {
                                setTimeout(() => {
                                    tagSubscription(tag._id);
                                }, tag.autoAssignSeconds * 1000);
                            } else {
                                tagSubscription(tag._id);
                            }
                        } else {
                            if (tag.autoAssignDays) {
                                if (!dailyVisits[dateKey]) {
                                    dailyVisits[dateKey] = 0;
                                }
                                dailyVisits[dateKey] += 1;

                                waitForSubscription().then(() => {
                                    localStorage.setItem(visitsStorageKey, JSON.stringify(dailyVisits));
                                });
                            } else {
                                visits += 1;
                                waitForSubscription().then(() => {
                                    visitsStorage.setItem(visitsStorageKey, visits.toString());
                                });
                            }
                        }
                    } else {
                        if (tag.autoAssignDays) {
                            if (!dailyVisits[dateKey]) {
                                dailyVisits[dateKey] = 0;
                            }
                            dailyVisits[dateKey] += 1;

                            waitForSubscription().then(() => {
                                localStorage.setItem(visitsStorageKey, JSON.stringify(dailyVisits));
                            });

                            if (sessionStorage.getItem(sessionsCountedStorageKey) !== 'true') {
                                if (!dailySessions[dateKey]) {
                                    dailySessions[dateKey] = 0;
                                }
                                dailySessions[dateKey] += 1;

                                waitForSubscription().then(() => {
                                    sessionStorage.setItem(sessionsCountedStorageKey, 'true');
                                    localStorage.setItem(sessionsStorageKey, JSON.stringify(dailySessions));
                                });
                            }
                        } else {
                            visits += 1;
                            waitForSubscription().then(() => {
                                visitsStorage.setItem(visitsStorageKey, visits.toString());
                            });

                            if (sessionStorage.getItem(sessionsCountedStorageKey) !== 'true') {
                                sessions += 1;

                                waitForSubscription().then(() => {
                                    sessionStorage.setItem(sessionsCountedStorageKey, 'true');
                                    localStorage.setItem(sessionsStorageKey, sessions.toString());
                                });
                            }
                        }
                    }
                }
            });
        });
    }
};