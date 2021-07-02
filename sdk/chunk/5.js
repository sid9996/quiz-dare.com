(self.webpackChunk_cleverpush_cleverpush_js_sdk = self.webpackChunk_cleverpush_cleverpush_js_sdk || []).push([
    [5], {
        9649: (e, t, r) => {
            "use strict";
            r.d(t, {
                q: () => w,
                Z: () => D
            });
            var i = r(4575),
                n = r.n(i),
                o = r(3913),
                s = r.n(o),
                a = r(7159),
                c = r(1078),
                u = r(155),
                l = "cleverpush-deny-sessions",
                g = "cleverpush-deny-time",
                d = "cleverpush-deny-sessions-counted",
                v = "cleverpush-close-time",
                h = "cleverpush-close-sessions",
                f = "cleverpush-close-sessions-counted",
                b = "cleverpush-subscription-id",
                p = "push-subscription-id",
                m = "cleverpush-subscription-status",
                S = "push-subscription-status",
                I = "cleverpush-domain",
                k = "cleverpush.com",
                y = "cleverpush-topics",
                w = {
                    DENIED: "denied",
                    WAS_DENIED: "was-denied",
                    UNSUBSCRIBED: "unsubscribed",
                    PENDING: "pending",
                    ALLOWED: "allowed"
                },
                D = function() {
                    function e(t) {
                        n()(this, e), this.config = t;
                        try {
                            if ("localStorage" in window && (t.cleverpushDomain && (t.cleverpushDomain && localStorage.getItem(b) && !localStorage.getItem(I) && localStorage.setItem(I, k), localStorage.getItem(I) && (this.config.cleverpushDomain = localStorage.getItem(I))), localStorage.getItem(S) && !localStorage.getItem(m) && localStorage.setItem(m, localStorage.getItem(S)), localStorage.getItem(p) && !localStorage.getItem(b) && localStorage.setItem(b, localStorage.getItem(p)), localStorage.getItem(m) !== w.ALLOWED)) {
                                var r = Date.now(),
                                    i = localStorage.getItem(m) === w.UNSUBSCRIBED,
                                    o = i ? this.config.alertHoursUnsubscribe : this.config.alertHoursDeny;
                                i || void 0 !== o || (o = 8760);
                                var s = i ? this.config.alertSessionsUnsubscribe : this.config.alertSessionsDeny,
                                    a = !1,
                                    c = !1;
                                if (localStorage.getItem(g) && o > 0) {
                                    var y = parseInt(localStorage.getItem(g), u.Z),
                                        D = parseInt(o, u.Z);
                                    isNaN(y) || isNaN(D) || y + 60 * D * 60 * 1e3 < r && (a = !0)
                                }
                                if (localStorage.getItem(l) && s > 0) {
                                    var N = parseInt(localStorage.getItem(l), u.Z);
                                    isNaN(N) || (sessionStorage.getItem(d) || (N += 1, localStorage.setItem(l, N)), N >= s && (c = !0))
                                }
                                if (!a && !c || o && !a || s && !c || (localStorage.removeItem(S), localStorage.removeItem(g), localStorage.removeItem(l), localStorage.getItem(m) === w.DENIED || localStorage.getItem(m) === w.UNSUBSCRIBED ? localStorage.setItem(m, w.WAS_DENIED) : localStorage.removeItem(m)), !i) {
                                    var P = !1,
                                        M = !1;
                                    if (localStorage.getItem(v) && this.config.alertHoursClose > 0) {
                                        var W = parseInt(localStorage.getItem(v), u.Z),
                                            E = parseInt(this.config.alertHoursClose, u.Z);
                                        isNaN(W) || isNaN(E) || W + 60 * E * 60 * 1e3 < r && (P = !0)
                                    }
                                    if (localStorage.getItem(h) && this.config.alertSessionsClose > 0) {
                                        var x = parseInt(localStorage.getItem(h), u.Z);
                                        isNaN(x) || (sessionStorage.getItem(f) || (x += 1, localStorage.setItem(h, x)), x >= this.config.alertSessionsClose && (M = !0))
                                    }!P && !M || this.config.alertHoursClose && !P || this.config.alertSessionsClose && !M || (localStorage.removeItem(S), localStorage.removeItem(m), localStorage.removeItem(v), localStorage.removeItem(h))
                                }
                            }
                        } catch (e) {}
                    }
                    return s()(e, [{
                        key: "dbOpenError",
                        value: function(e) {
                            var t = this;
                            (this.dbInitializing = !1, e.message && e.message.toString().indexOf("VersionError") > -1) ? (c.cM.info("deleting db"), window.indexedDB.deleteDatabase("cleverpush").onsuccess = function() {
                                var e = t.db.open();
                                e.onsuccess = function() {
                                    return t.dbOpenSuccess(e)
                                }, e.onerror = function(e) {
                                    c.cM.warn(e)
                                }
                            }) : e.name && "NoSuchDatabaseError" === e.name || c.cM.warn(e)
                        }
                    }, {
                        key: "dbOpenSuccess",
                        value: function(e) {
                            var t = this;
                            this.db = e.result, this.dbInitializing = !1, this.db.onerror = function(e) {
                                c.cM.warn("IndexedDB error occured", e)
                            }, this.db.onversionchange = function(e) {
                                if (null === e.newVersion) e.target.close();
                                else {
                                    t.db.close();
                                    var r = window.indexedDB.open("cleverpush", 40);
                                    r.onsuccess = function() {
                                        return t.dbOpenSuccess(r)
                                    }, r.onerror = t.dbOpenError
                                }
                            }
                        }
                    }, {
                        key: "initDb",
                        value: function(e) {
                            var t = this;
                            if (this.db || !window.indexedDB || this.dbInitializing) this.db && "function" == typeof e && e(this.db);
                            else {
                                this.dbInitializing = !0;
                                try {
                                    var r = window.indexedDB.open("cleverpush", 40);
                                    r.onsuccess = function() {
                                        t.dbOpenSuccess(r), "function" == typeof e && e(r.result)
                                    }, r.onerror = this.dbOpenError, r.onupgradeneeded = function(e) {
                                        var t = e.target.result,
                                            r = t.createObjectStore("notifications", {
                                                keyPath: "id"
                                            });
                                        r.createIndex("id", "id", {
                                            unique: !0
                                        }), r.createIndex("url", "url", {
                                            unique: !1
                                        }), r.createIndex("clicked", "clicked", {
                                            unique: !1
                                        }), r.createIndex("title", "title", {
                                            unique: !1
                                        }), r.createIndex("text", "text", {
                                            unique: !1
                                        }), r.createIndex("icon", "icon", {
                                            unique: !1
                                        }), r.createIndex("subscriptionId", "subscriptionId", {
                                            unique: !1
                                        }), r.createIndex("channelId", "channelId", {
                                            unique: !1
                                        }), r.createIndex("autoHide", "autoHide", {
                                            unique: !1
                                        }), r.createIndex("markedAsDelivered", "markedAsDelivered", {
                                            unique: !1
                                        }), r.createIndex("markedAsClicked", "markedAsClicked", {
                                            unique: !1
                                        }), r.createIndex("clickedAction", "clickedAction", {
                                            unique: !1
                                        }), r.createIndex("deliveredAt", "deliveredAt", {
                                            unique: !1
                                        });
                                        var i = t.createObjectStore("subscription", {
                                            keyPath: "id"
                                        });
                                        i.createIndex("id", "id", {
                                            unique: !0
                                        }), i.createIndex("channelId", "channelId", {
                                            unique: !1
                                        })
                                    }
                                } catch (e) {
                                    this.dbInitializing = !1, c.cM.info("initDb err", e)
                                }
                            }
                        }
                    }, {
                        key: "getNotifications",
                        value: function(e) {
                            var t = this;
                            return new Promise((function(r) {
                                var i = [];
                                if (t.db) {
                                    var n = t.db.transaction(["notifications"], "readonly").objectStore("notifications").index("deliveredAt").openCursor(null, "prev");
                                    n.onsuccess = function(t) {
                                        var n = t.target.result;
                                        !1 == !!n || i.length >= (e || 50) ? r(i) : (i.push(n.value), n.continue())
                                    }, n.onerror = function() {
                                        return r(i)
                                    }
                                } else r(i)
                            }))
                        }
                    }, {
                        key: "getNotification",
                        value: function(e) {
                            var t = this;
                            return new Promise((function(r) {
                                if (t.db) {
                                    var i = t.db.transaction(["notifications"]).objectStore("notifications").get(e);
                                    i.onsuccess = function(e) {
                                        var t = e.target.result;
                                        r(t)
                                    }, i.onerror = function() {
                                        return r(null)
                                    }
                                } else r(null)
                            }))
                        }
                    }, {
                        key: "addNotification",
                        value: function(e) {
                            var t = this;
                            return new Promise((function(r, i) {
                                if (t.db) {
                                    var n = t.db.transaction(["notifications"], "readwrite").objectStore("notifications").put(e);
                                    n.onsuccess = r, n.onerror = i
                                } else r(null)
                            }))
                        }
                    }, {
                        key: "deleteNotification",
                        value: function(e) {
                            var t = this;
                            return new Promise((function(r, i) {
                                if (t.db) {
                                    var n = t.db.transaction(["notifications"], "readwrite").objectStore("notifications").delete(e);
                                    n.onsuccess = r, n.onerror = i
                                } else r(null)
                            }))
                        }
                    }, {
                        key: "canSubscribe",
                        value: function() {
                            try {
                                return new Promise((function(e) {
                                    try {
                                        var t = localStorage.getItem(m),
                                            r = sessionStorage.getItem(m);
                                        t !== w.DENIED && t !== w.UNSUBSCRIBED && t !== w.PENDING && r !== w.DENIED ? e(t || !0) : e(!1)
                                    } catch (t) {
                                        e(!0)
                                    }
                                }))
                            } catch (e) {
                                return Promise.resolve(!0)
                            }
                        }
                    }, {
                        key: "isSubscribed",
                        value: function(e, t, r) {
                            var i = this;
                            try {
                                if (void 0 !== t && t) {
                                    var n = localStorage.getItem(m);
                                    return !(!n || n === w.DENIED || n === w.UNSUBSCRIBED || n === w.PENDING) && (!!e || !!this.getSubscriptionId())
                                }
                                return new Promise((function(t) {
                                    try {
                                        var n = localStorage.getItem(m);
                                        if (n && n !== w.DENIED && n !== w.UNSUBSCRIBED && n !== w.PENDING) {
                                            var o = "granted" === localStorage.getItem("amp-web-push-notification-permission");
                                            t(!(!e && !o) || !!i.getSubscriptionId())
                                        } else t(!(void 0 === r || !r) && !!i.getSubscriptionId())
                                    } catch (e) {
                                        t(!1)
                                    }
                                }))
                            } catch (e) {
                                return Promise.resolve(!0)
                            }
                        }
                    }, {
                        key: "getSubscriptionId",
                        value: function() {
                            var e;
                            try {
                                (e = localStorage.getItem(b)) || (e = sessionStorage.getItem(b))
                            } catch (e) {}
                            if (!e && (0, a.io)()) {
                                var t = new URLSearchParams(location.search.slice(1));
                                t && (e = t.get("subscriptionId"))
                            }
                            return e
                        }
                    }, {
                        key: "setClickedNotification",
                        value: function(e) {
                            try {
                                localStorage.setItem("cleverpush-notification-clicked", JSON.stringify({
                                    id: e,
                                    date: Date.now()
                                }))
                            } catch (e) {}
                        }
                    }, {
                        key: "getClickedNotification",
                        value: function() {
                            try {
                                var e = localStorage.getItem("cleverpush-notification-clicked"),
                                    t = JSON.parse(e);
                                if (t && t.id && t.date && parseInt(t.date, u.Z) + 36e5 > Date.now()) return t.id
                            } catch (e) {}
                            return null
                        }
                    }, {
                        key: "getLastSession",
                        value: function() {
                            var e;
                            try {
                                e = localStorage.getItem("cleverpush-last-session")
                            } catch (e) {}
                            var t = {};
                            if (e) try {
                                t = JSON.parse(e)
                            } catch (e) {}
                            return t
                        }
                    }, {
                        key: "setLastSession",
                        value: function(e) {
                            try {
                                localStorage.setItem("cleverpush-last-session", JSON.stringify(e))
                            } catch (e) {}
                        }
                    }, {
                        key: "setSubscribed",
                        value: function(e, t) {
                            var r = this;
                            e && (localStorage.setItem(b, e), localStorage.setItem(I, this.config.cleverpushDomain || k), void 0 !== t && t || localStorage.setItem(m, w.ALLOWED), this.initDb((function(t) {
                                if (t) try {
                                    t.transaction(["subscription"], "readwrite").objectStore("subscription").clear().onsuccess = function() {
                                        t.transaction(["subscription"], "readwrite").objectStore("subscription").put({
                                            id: e,
                                            channelId: r.config.channelId
                                        })
                                    }
                                } catch (e) {
                                    c.cM.info("setSubscribed db error", e)
                                }
                            })))
                        }
                    }, {
                        key: "getFacebookUserRef",
                        value: function() {
                            try {
                                return localStorage.getItem("cleverpush-facebook-user-ref")
                            } catch (e) {}
                        }
                    }, {
                        key: "setFacebookUserRef",
                        value: function(e) {
                            e && localStorage.setItem("cleverpush-facebook-user-ref", e)
                        }
                    }, {
                        key: "setAllowed",
                        value: function() {
                            localStorage.setItem(m, w.ALLOWED)
                        }
                    }, {
                        key: "setPending",
                        value: function() {
                            localStorage.setItem(m, w.PENDING)
                        }
                    }, {
                        key: "setDenied",
                        value: function() {
                            localStorage.setItem(g, Date.now()), localStorage.setItem(m, w.DENIED), this.config.alertSessionsDeny > 0 && (localStorage.setItem(l, "0"), sessionStorage.setItem(d, "true"))
                        }
                    }, {
                        key: "setClosed",
                        value: function() {
                            localStorage.setItem(v, Date.now()), this.config.alertHoursClose > 0 || this.config.alertSessionsClose > 0 ? localStorage.setItem(m, w.DENIED) : localStorage.removeItem(m), this.config.alertSessionsClose > 0 && (localStorage.setItem(h, "0"), sessionStorage.setItem(f, "true"))
                        }
                    }, {
                        key: "setUnsubscribed",
                        value: function(e) {
                            if (localStorage.removeItem(p), localStorage.removeItem(b), localStorage.removeItem("cleverpush-last-sync"), localStorage.removeItem("cleverpush-last-session"), localStorage.removeItem("cleverpush-last-worker-update"), localStorage.removeItem("cleverpush-last-worker-version"), localStorage.removeItem(I), localStorage.removeItem("cleverpush-facebook-user-ref"), localStorage.removeItem(y), localStorage.removeItem("cleverpush-topics-version"), localStorage.removeItem("cleverpush-tags"), localStorage.removeItem("cleverpush-attributes"), localStorage.removeItem("cleverpush-visits"), e || (localStorage.setItem(m, w.UNSUBSCRIBED), localStorage.setItem(g, Date.now())), Object.keys(localStorage).forEach((function(e) {
                                    (e && e.startsWith("cleverpush-tag") || e.startsWith("cleverpush-attribute")) && localStorage.removeItem(e)
                                })), this.db) try {
                                this.db.transaction(["subscription"], "readwrite").objectStore("subscription").clear()
                            } catch (e) {
                                c.cM.info("setUnsubscribed db error", e)
                            }
                        }
                    }, {
                        key: "checkIfShouldSync",
                        value: function() {
                            var e = this;
                            return new Promise((function(t) {
                                try {
                                    var r = localStorage.getItem("cleverpush-last-sync");
                                    if (e.getSubscriptionId())
                                        if (r) {
                                            var i = parseInt(r, u.Z);
                                            isNaN(i) ? t(!0) : t(i + 1728e5 <= Date.now())
                                        } else t(!0);
                                    else t(!0)
                                } catch (e) {
                                    t(!0)
                                }
                            }))
                        }
                    }, {
                        key: "setSynced",
                        value: function() {
                            localStorage.setItem("cleverpush-last-sync", Date.now())
                        }
                    }, {
                        key: "checkIfShouldUpdateWorker",
                        value: function() {
                            return new Promise((function(e) {
                                try {
                                    var t = localStorage.getItem("cleverpush-last-worker-update"),
                                        r = localStorage.getItem("cleverpush-last-worker-version");
                                    if (t) e("1.0.0" !== r);
                                    else e(!0)
                                } catch (t) {
                                    e(!0)
                                }
                            }))
                        }
                    }, {
                        key: "setWorkerUpdated",
                        value: function() {
                            localStorage.setItem("cleverpush-last-worker-update", Date.now()), localStorage.setItem("cleverpush-last-worker-version", "1.0.0")
                        }
                    }, {
                        key: "getVisits",
                        value: function() {
                            var e;
                            try {
                                e = localStorage.getItem("cleverpush-visits")
                            } catch (e) {}
                            var t = 0;
                            return e && (t = parseInt(e, u.Z), isNaN(t) && (t = 0)), t
                        }
                    }, {
                        key: "incrementVisits",
                        value: function() {
                            var e = this.getVisits();
                            e += 1, localStorage.setItem("cleverpush-visits", e)
                        }
                    }, {
                        key: "setTopics",
                        value: function(e) {
                            return c.cM.debug("storageManager.setTopics", e), new Promise((function(t) {
                                e && e.length ? localStorage.setItem(y, JSON.stringify(e)) : e && localStorage.removeItem(y), t(!0)
                            }))
                        }
                    }, {
                        key: "getTopics",
                        value: function() {
                            var e = localStorage.getItem(y);
                            if (!e) return Promise.resolve([]);
                            try {
                                var t = JSON.parse(e);
                                return Promise.resolve(t || [])
                            } catch (e) {
                                return Promise.resolve([])
                            }
                        }
                    }, {
                        key: "getTagDates",
                        value: function() {
                            var e = {};
                            if (localStorage.getItem("cleverpush-tag-dates")) try {
                                e = JSON.parse(localStorage.getItem("cleverpush-tag-dates"))
                            } catch (e) {}
                            return e
                        }
                    }, {
                        key: "getTagDate",
                        value: function(e) {
                            var t = (this.getTagDates() || {})[e];
                            return t ? new Date(t) : null
                        }
                    }, {
                        key: "setTags",
                        value: function(e) {
                            var t = this;
                            return new Promise((function(r) {
                                localStorage.setItem("cleverpush-tags", JSON.stringify(e));
                                var i = t.getTagDates() || {};
                                e.forEach((function(e) {
                                    i[e] = (new Date).toISOString()
                                })), localStorage.setItem("cleverpush-tag-dates", JSON.stringify(i)), r(!0)
                            }))
                        }
                    }, {
                        key: "addTag",
                        value: function(e) {
                            var t = this;
                            return this.getTags().then((function(r) {
                                return r.indexOf(e) < 0 && r.push(e), t.setTags(r)
                            }))
                        }
                    }, {
                        key: "removeTag",
                        value: function(e) {
                            var t = this;
                            return this.getTags().then((function(r) {
                                var i = r.indexOf(e);
                                return i > -1 ? (r.splice(i, 1), t.setTags(r)) : Promise.resolve()
                            }))
                        }
                    }, {
                        key: "getTags",
                        value: function() {
                            var e = localStorage.getItem("cleverpush-tags");
                            if (!e) return Promise.resolve([]);
                            try {
                                var t = JSON.parse(e);
                                return Promise.resolve(t || [])
                            } catch (e) {
                                return Promise.resolve([])
                            }
                        }
                    }, {
                        key: "hasTag",
                        value: function(e) {
                            return this.getTags().then((function(t) {
                                return Promise.resolve(t.indexOf(e) > -1)
                            }))
                        }
                    }, {
                        key: "setTempBlocked",
                        value: function() {
                            sessionStorage.setItem(m, w.DENIED)
                        }
                    }]), e
                }()
        },
        4005: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                default: () => h
            });
            var i = r(4575),
                n = r.n(i),
                o = r(3913),
                s = r.n(o),
                a = r(1078),
                c = r(7546),
                u = r(9649),
                l = r(2034),
                g = r(4740),
                d = r(7159),
                v = r(3114),
                h = function() {
                    function e(t, r, i) {
                        var o = this;
                        n()(this, e), this.config = t, this.api = r, this.triggerEvent = i, this.storageManager = new u.Z(t), this.subscribed = !1, this.initialTags = [];
                        try {
                            this.getTopics().then((function(e) {
                                return o.topics = e
                            }))
                        } catch (e) {}
                    }
                    return s()(e, [{
                        key: "isSubscribed",
                        value: function() {
                            var e = this;
                            return new Promise((function(t) {
                                return "PREVIEW" === e.config.env ? t(!1) : "granted" === window.Notification.permission && navigator.serviceWorker ? e.getActiveWorkerRegistration().then((function(r) {
                                    return r.pushManager.getSubscription().then((function(r) {
                                        if (r) return e.storageManager.isSubscribed().then((function(r) {
                                            a.cM.debug("manager subscribed = ".concat(r, " (2)")), e.subscribed = r, t(r)
                                        }));
                                        a.cM.debug("manager subscribed = false (1)"), e.subscribed = !1, t(!1)
                                    }))
                                })).catch((function(r) {
                                    r && a.cM.error(r), a.cM.debug("manager subscribed = false (3)"), e.subscribed = !1, t(!1)
                                })) : (a.cM.debug("manager subscribed = false (4)"), e.subscribed = !1, void t(!1))
                            }))
                        }
                    }, {
                        key: "canSubscribe",
                        value: function() {
                            var e = this;
                            return new Promise((function(t, r) {
                                e.storageManager.canSubscribe().then((function(i) {
                                    i ? e.isSubscribed().then((function(e) {
                                        e ? r(new g.Z("User is already subscribed", "subscribed")) : "denied" === Notification.permission ? r(new g.Z("User denied notifications", "denied")) : t(!0)
                                    })) : r(new g.Z("User has manually unsubscribed or denied notifications ".concat(i), "unsubscribed"))
                                })).catch((function(e) {
                                    r(e)
                                }))
                            }))
                        }
                    }, {
                        key: "subscribe",
                        value: function() {}
                    }, {
                        key: "subscribeForce",
                        value: function() {
                            this.subscribe()
                        }
                    }, {
                        key: "showUnsubscribeFeedback",
                        value: function() {
                            var e = this;
                            if (!this.config.unsubscribeFeedbackDisabled) {
                                var t = [];
                                this.config.optOutFeedbackAnswers && this.config.optOutFeedbackAnswers.length ? (this.config.optOutFeedbackAnswers.forEach((function(e) {
                                    return t.push({
                                        title: e.title,
                                        id: e.id,
                                        icon: e.icon
                                    })
                                })), this.config.optOutFeedbackCustomText && t.push({
                                    title: (0, v.I)("unsubscribe.reasonOther"),
                                    id: "other",
                                    icon: ""
                                })) : t.push({
                                    title: (0, v.I)("unsubscribe.reasonQuantity"),
                                    id: "quantity",
                                    icon: ""
                                }, {
                                    title: (0, v.I)("unsubscribe.reasonContent"),
                                    id: "content",
                                    icon: ""
                                }, {
                                    title: (0, v.I)("unsubscribe.reasonOther"),
                                    id: "other",
                                    icon: ""
                                });
                                var r = document.createElement("div");
                                r.className = "cleverpush-confirm cleverpush-confirm-default cleverpush-uf-box", r.innerHTML = '\n    <div class="cleverpush-confirm-text">\n    <span class="cleverpush-confirm-title">'.concat(this.config.optOutFeedbackTitle || (0, v.I)("unsubscribe.feedback"), '</span>\n    </div>\n    <div style="margin-top: 10px; margin-bottom: 5px; padding-top: 10px;">\n    ').concat(t.map((function(e) {
                                    return '<button type="button" class="cleverpush-confirm-btn cleverpush-uf-button" style="text-transform: none; margin-bottom: 10px !important;" data-reason="'.concat(e.id, '">').concat(e.icon ? "<img src=".concat(e.icon, ' style="margin-right: 10px; float: left;" width="25" heigh="25">') : "").concat(e.title, "</button>")
                                })).join(""), "\n    </div>\n    "), document.body.appendChild(r);
                                for (var i = r.querySelectorAll(".cleverpush-confirm-btn"), n = 0; n < i.length; n++) {
                                    i[n].addEventListener("click", (function(t) {
                                        t.preventDefault(), "other" === t.currentTarget.dataset.reason && e.config.optOutFeedbackCustomText ? e.showCustomText(r) : (e.api.unsubscribeFeedback(t.currentTarget.dataset.reason), r.parentNode.removeChild(r))
                                    }))
                                }
                            }
                        }
                    }, {
                        key: "showCustomText",
                        value: function(e) {
                            var t = this;
                            e.innerHTML = '\n    <div class="cleverpush-confirm-text">\n    <span class="cleverpush-confirm-title">'.concat((0, v.I)("unsubscribe.enterReason"), '</span>\n    </div>\n    <div style="margin-top: 10px; margin-bottom: 5px;">\n      <div style="text-align: center; padding: 12px;">\n        <textarea style="width: 100%; margin-bottom: 10px;"></textarea>\n        <button type="button" class="cleverpush-confirm-btn cleverpush-uf-button" style="text-transform: none;, margin-bottom: 10px !important;" data-reason="other">').concat((0, v.I)("unsubscribe.submit"), "</button>\n      </div>\n    </div>\n    "), e.querySelector(".cleverpush-confirm-btn").addEventListener("click", (function(r) {
                                r.preventDefault();
                                var i = e.querySelector("textarea").value;
                                t.api.unsubscribeFeedback(r.currentTarget.dataset.reason, i), e.parentNode.removeChild(e)
                            }))
                        }
                    }, {
                        key: "unsubscribe",
                        value: function(e, t) {
                            var r = this,
                                i = function() {
                                    return r.storageManager.setUnsubscribed(e), r.topics = [], r.triggerEvent(l.Z.UNSUBSCRIBED), navigator.serviceWorker ? r.getActiveWorkerRegistration().then((function(e) {
                                        return e.pushManager
                                    })).then((function(e) {
                                        return e.getSubscription()
                                    })).then((function(e) {
                                        if (e) return e.unsubscribe().then((function() {
                                            return Promise.resolve()
                                        }))
                                    })) : Promise.resolve()
                                },
                                n = this.storageManager.getSubscriptionId();
                            return !n || void 0 !== t && t === n ? i().then((function() {
                                return r.showUnsubscribeFeedback(), Promise.resolve()
                            })) : this.api.unsubscribe(n).then((function() {
                                return i().then((function() {
                                    return r.showUnsubscribeFeedback(), Promise.resolve()
                                }))
                            }))
                        }
                    }, {
                        key: "getWorkerPath",
                        value: function() {
                            return !(0, d.CO)() || this.config.popupCustomDomainEnabled && this.config.popupDomain ? this.config.serviceWorkerFile || "/worker.js" : "/cleverpush-worker.js"
                        }
                    }, {
                        key: "getWorkerScope",
                        value: function() {
                            var e = this.getWorkerPath();
                            return e.indexOf("?") > -1 && (e = e.split("?")[0]), e.substr(0, e.lastIndexOf("/") + 1) || "/"
                        }
                    }, {
                        key: "getServiceWorker",
                        value: function(e) {
                            return e.active || e.waiting || e.installing
                        }
                    }, {
                        key: "getActiveWorkerRegistration",
                        value: function() {
                            var e = this;
                            return new Promise((function(t, r) {
                                if (navigator.serviceWorker)
                                    if (navigator.serviceWorker.getRegistration) {
                                        var i = e.getWorkerScope(),
                                            n = e.config.serviceWorkerFile;
                                        navigator.serviceWorker.getRegistration(i).then((function(i) {
                                            i && e.getServiceWorker(i) && (!n || !e.getServiceWorker(i).scriptURL || e.getServiceWorker(i).scriptURL.indexOf(n) > -1) ? t(i) : "function" == typeof navigator.serviceWorker.getRegistrations ? navigator.serviceWorker.getRegistrations().then((function(i) {
                                                var o = !1;
                                                (i || []).forEach((function(r) {
                                                    o || (r && e.getServiceWorker(r) && (!n || !e.getServiceWorker(r).scriptURL || e.getServiceWorker(r).scriptURL.indexOf(n) > -1) ? (o = !0, t(r)) : a.cM.debug("worker: getActiveWorkerRegistration:", r, e.getServiceWorker(r)))
                                                })), o || (a.cM.debug("worker: getActiveWorkerRegistration: !found"), r())
                                            })).catch(r) : navigator.serviceWorker.controller ? (a.cM.debug("worker: getActiveWorkerRegistration: waiting for worker to be ready"), navigator.serviceWorker.ready.then(t).catch(r)) : (a.cM.debug("worker: getActiveWorkerRegistration: last reject 1"), r())
                                        })).catch(r)
                                    } else navigator.serviceWorker.controller ? (a.cM.debug("worker: getActiveWorkerRegistration: waiting for worker to be ready"), navigator.serviceWorker.ready.then(t).catch(r)) : (a.cM.debug("worker: getActiveWorkerRegistration: last reject 2"), r());
                                else a.cM.debug("worker: getActiveWorkerRegistration: !navigator.serviceWorker"), r()
                            }))
                        }
                    }, {
                        key: "registerWorker",
                        value: function() {
                            var e = this;
                            return new Promise((function(t, r) {
                                a.cM.debug("registering worker");
                                var i = function() {
                                    var i = e.getWorkerPath(),
                                        n = e.getWorkerScope();
                                    navigator.serviceWorker.register(i, {
                                        scope: n,
                                        updateViaCache: "none"
                                    }).then((function(i) {
                                        a.cM.debug("worker registered", i), i.active ? (a.cM.debug("worker is active"), t(i)) : i.installing ? (a.cM.debug("worker is installing"), i.installing.addEventListener("statechange", (function(e) {
                                            a.cM.debug("worker: onstatechange", e.target.state), "activated" === e.target.state && t(i)
                                        }))) : i.waiting ? (a.cM.debug("worker is waiting"), i.installing.addEventListener("statechange", (function(e) {
                                            a.cM.debug("worker: onstatechange", e.target.state), "activated" === e.target.state && t(i)
                                        }))) : (a.cM.debug("worker: getActiveWorkerRegistration"), e.getActiveWorkerRegistration().then(t).catch(r))
                                    })).catch((function(e) {
                                        a.cM.error("error registering worker", e), r(e)
                                    }))
                                };
                                e.getActiveWorkerRegistration().then((function(e) {
                                    e && e.active ? (a.cM.debug("worker was already registered", e), t(e)) : i()
                                })).catch(i)
                            }))
                        }
                    }, {
                        key: "unregisterOtherPushSubscriptions",
                        value: function(e) {
                            var t = this;
                            (0, a.tI)("unregisterOtherPushSubscriptions", e.scriptURL), this.config.importedSubscriptionsProvider && "function" == typeof navigator.serviceWorker.getRegistrations && navigator.serviceWorker.getRegistrations().then((function(r) {
                                (r || []).forEach((function(r) {
                                    t.getServiceWorker(r) && t.getServiceWorker(r).scriptURL !== e.scriptURL && t.getServiceWorker(r).scriptURL && t.getServiceWorker(r).scriptURL.indexOf(t.config.serviceWorkerFile) < 0 && t.getServiceWorker(r).scriptURL.indexOf("cleverpush") < 0 && r.pushManager.getSubscription().then((function(e) {
                                        a.cM.debug("unsubscribing:", e), e && (e.unsubscribe(), t.migratedSubscription = !0)
                                    }))
                                }))
                            }))
                        }
                    }, {
                        key: "tryWorkerUpdate",
                        value: function(e) {
                            var t = this;
                            this.tryWorkerUpdateCalled || (this.tryWorkerUpdateCalled = !0, (0, a.tI)("tryWorkerUpdate", e), this.storageManager.checkIfShouldUpdateWorker().then((function(r) {
                                e && r && (a.cM.debug("updating worker now"), e.update(), t.storageManager.setWorkerUpdated())
                            })), this.unregisterOtherPushSubscriptionsCalled || (this.unregisterOtherPushSubscriptionsCalled = !0, this.unregisterOtherPushSubscriptions(e)))
                        }
                    }, {
                        key: "sync",
                        value: function(e, t) {
                            var r = this;
                            (0, a.tI)("sync", e);
                            var i = void 0 !== t ? t : this.topics;
                            return new Promise((function(t) {
                                if (r.syncInProgress) return a.cM.debug("sync: resolved because syncInProgress was true"), void t();
                                r.syncInProgress = !0;
                                var n = e;
                                r.getSubscriptionId().then((function(e) {
                                    var o = function() {
                                        var o = {};
                                        e && (o.subscriptionId = e), r.existingPermission && (o.existingPermission = !0), r.isReSubscribe && (o.isReSubscribe = !0), r.migratedSubscription && (o.migratedSubscription = !0), r.api.syncSubscription(n, i, r.initialTags, o).then((function(e) {
                                            var i = e.id;
                                            if (r.initialTags = [], r.storageManager.setSubscribed(i), r.iframeMessenger && r.iframeMessenger.setSubscribed(i), r.storageManager.setSynced(), (e.topics || []).length && r.storageManager.setTopics(e.topics), e.topics && r.triggerEvent(l.Z.TOPICS_SET), e.topicsVersion) try {
                                                localStorage.setItem("cleverpush-topics-version", "".concat(e.topicsVersion))
                                            } catch (e) {}
                                            r.config.channelTags && r.config.channelTags.length && !r.existingPermission && !o.subscriptionId && r.config.channelTags.forEach((function(e) {
                                                e.autoAssignOptInPath && new RegExp(e.autoAssignOptInPath).test(location.pathname) && CleverPush.tagSubscription(e._id)
                                            })), r.syncInProgress = !1, t()
                                        })).catch((function(e) {
                                            void 0 !== e ? 404 === e ? (r.storageManager.setUnsubscribed(!0), r.iframeMessenger && r.iframeMessenger.setUnsubscribed(!0), r.subscribe()) : a.cM.error(e) : a.cM.error("Unknown Error occured while syncing"), r.syncInProgress = !1, t()
                                        }))
                                    };
                                    void 0 !== n && n ? o() : (n = e) ? o() : (r.syncInProgress = !1, t())
                                })).catch((function(e) {
                                    r.syncInProgress = !1
                                }))
                            }))
                        }
                    }, {
                        key: "getSubscriptionId",
                        value: function() {
                            var e = this.storageManager.getSubscriptionId();
                            return e ? a.cM.debug("subscriptionId", e) : a.cM.debug("subscriptionId not found"), Promise.resolve(e)
                        }
                    }, {
                        key: "hasNotificationPermission",
                        value: function() {
                            return "PREVIEW" === this.config.env ? Promise.resolve(!1) : Promise.resolve("granted" === window.Notification.permission)
                        }
                    }, {
                        key: "getNotificationPermission",
                        value: function(e) {
                            try {
                                if ("Firefox" === d.Xh.name && "denied" === sessionStorage.getItem("cleverpush-subscription-status") && void 0 === e) return "denied"
                            } catch (e) {}
                            return window.Notification.permission
                        }
                    }, {
                        key: "setConfirm",
                        value: function(e) {
                            this.confirm = e
                        }
                    }, {
                        key: "setTopics",
                        value: function(e) {
                            return a.cM.debug("setTopics", e), this.topics = e, this.storageManager.setTopics(e)
                        }
                    }, {
                        key: "getTopics",
                        value: function() {
                            return this.storageManager.getTopics()
                        }
                    }, {
                        key: "getStoredNotifications",
                        value: function() {
                            var e = this,
                                t = "/channel/".concat(this.api.channelId, "/received-notifications");
                            return this.getTopics().then((function(r) {
                                return r && r.length && (t += "?".concat(r.map((function(e) {
                                    return "topics[]=".concat(e)
                                })).join("&"))), e.api.request("GET", t).then((function(e) {
                                    return new Promise((function(t) {
                                        e && e.notifications ? t(e.notifications.filter((function(e) {
                                            return e.createdAt
                                        })).sort((function(e, t) {
                                            return new Date(t.createdAt) - new Date(e.createdAt)
                                        })).map((function(e) {
                                            return Object.assign({}, e, {
                                                title: e.title || (e.testVariants && e.testVariants.length && e.testVariants[0] ? e.testVariants[0].title : ""),
                                                text: e.text || (e.testVariants && e.testVariants.length && e.testVariants[0] ? e.testVariants[0].text : ""),
                                                mediaUrl: e.mediaUrl || (e.testVariants && e.testVariants.length && e.testVariants[0] ? e.testVariants[0].mediaUrl : ""),
                                                url: e.url || (e.testVariants && e.testVariants.length && e.testVariants[0] ? e.testVariants[0].url : "")
                                            })
                                        }))) : t([])
                                    }))
                                }))
                            }))
                        }
                    }, {
                        key: "deleteStoredNotification",
                        value: function(e) {
                            var t = this;
                            return new Promise((function(r, i) {
                                t.storageManager.db ? t.storageManager.deleteNotification(e).then((function() {
                                    r()
                                })).catch((function(e) {
                                    i(e)
                                })) : r()
                            }))
                        }
                    }, {
                        key: "getPushManagerSubscribeOptions",
                        value: function() {
                            var e = {
                                userVisibleOnly: !0
                            };
                            if (this.config.vapidPublicKey && this.config.vapidPublicKey.length) {
                                var t = (0, c.M)(this.config.vapidPublicKey);
                                t && (e.applicationServerKey = t)
                            }
                            return e
                        }
                    }, {
                        key: "setClickedNotification",
                        value: function(e) {
                            return this.storageManager.setClickedNotification(e), Promise.resolve()
                        }
                    }, {
                        key: "getClickedNotification",
                        value: function() {
                            var e = this;
                            return new Promise((function(t) {
                                t(e.storageManager.getClickedNotification())
                            }))
                        }
                    }]), e
                }()
        },
        7546: (e, t, r) => {
            "use strict";
            r.d(t, {
                M: () => i
            });
            r(1078);

            function i(e) {
                for (var t = (e + "=".repeat((4 - e.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"), r = atob(t), i = new Uint8Array(r.length), n = 0; n < r.length; ++n) i[n] = r.charCodeAt(n);
                return i
            }
        }
    }
]);
//# sourceMappingURL=5.js.map