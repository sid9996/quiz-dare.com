(self.webpackChunk_cleverpush_cleverpush_js_sdk = self.webpackChunk_cleverpush_cleverpush_js_sdk || []).push([
    [173], {
        6525: (e, i, t) => {
            var s = t(8331);

            function r(i, t, n) {
                return "undefined" != typeof Reflect && Reflect.get ? e.exports = r = Reflect.get : e.exports = r = function(e, i, t) {
                    var r = s(e, i);
                    if (r) {
                        var n = Object.getOwnPropertyDescriptor(r, i);
                        return n.get ? n.get.call(t) : n.value
                    }
                }, r(i, t, n || i)
            }
            e.exports = r
        },
        2911: (e, i, t) => {
            var s = t(8331),
                r = t(9713);

            function n(e, i, t, o) {
                return (n = "undefined" != typeof Reflect && Reflect.set ? Reflect.set : function(e, i, t, n) {
                    var o, c = s(e, i);
                    if (c) {
                        if ((o = Object.getOwnPropertyDescriptor(c, i)).set) return o.set.call(n, t), !0;
                        if (!o.writable) return !1
                    }
                    if (o = Object.getOwnPropertyDescriptor(n, i)) {
                        if (!o.writable) return !1;
                        o.value = t, Object.defineProperty(n, i, o)
                    } else r(n, i, t);
                    return !0
                })(e, i, t, o)
            }
            e.exports = function(e, i, t, s, r) {
                if (!n(e, i, t, s || e) && r) throw new Error("failed to set property");
                return t
            }
        },
        8331: (e, i, t) => {
            var s = t(9754);
            e.exports = function(e, i) {
                for (; !Object.prototype.hasOwnProperty.call(e, i) && null !== (e = s(e)););
                return e
            }
        },
        155: (e, i, t) => {
            "use strict";
            t.d(i, {
                Z: () => s
            });
            var s = 10
        },
        2818: (e, i, t) => {
            "use strict";
            t.r(i), t.d(i, {
                default: () => M
            });
            var s = t(4575),
                r = t.n(s),
                n = t(3913),
                o = t.n(n),
                c = t(8585),
                u = t.n(c),
                a = t(1506),
                b = t.n(a),
                d = t(2205),
                f = t.n(d),
                l = t(2911),
                p = t.n(l),
                g = t(9754),
                h = t.n(g),
                v = t(6525),
                y = t.n(v),
                m = t(3251),
                S = t(4005),
                P = t(1078),
                w = t(8606),
                k = t(7159),
                M = function(e) {
                    function i(e, t, s) {
                        var n, o;
                        if (r()(this, i), (n = u()(this, h()(i).call(this, e, t, s))).isSubscribed().then((function(e) {
                                e && n.storageManager.initDb()
                            })), n.config = e, n.api = t, n.isSubscribing = !1, (window.opener || window.parent) === window) return document.write('<p style="font-size: 14px; color: red; font-family: sans-serif;">CleverPush: This page cannot be directly opened, and\nmust be opened as a result of a subscription call.</p>'), u()(n);
                        if ("undefined" != typeof URLSearchParams && location.search) {
                            var c = new URLSearchParams(location.search.slice(1));
                            c.get("origin") && (o = c.get("origin"))
                        }
                        return P.cM.debug("PenPal parentOrigin", o), m.ZP.debug = P.cM.getLevel() < 2, m.ZP.connectToParent({
                            parentOrigin: o,
                            methods: {
                                subscribe: n.subscribe.bind(b()(n)),
                                setSubscribed: n.setSubscribed.bind(b()(n)),
                                setDenied: n.setDenied.bind(b()(n)),
                                setClosed: n.setClosed.bind(b()(n)),
                                setUnsubscribed: n.setUnsubscribed.bind(b()(n)),
                                unsubscribe: n.unsubscribe.bind(b()(n)),
                                isSubscribed: n.isSubscribed.bind(b()(n)),
                                canSubscribe: n.canSubscribe.bind(b()(n)),
                                setTopics: y()(h()(i.prototype), "setTopics", b()(n)).bind(b()(n)),
                                getTopics: y()(h()(i.prototype), "getTopics", b()(n)).bind(b()(n)),
                                getSubscriptionId: y()(h()(i.prototype), "getSubscriptionId", b()(n)).bind(b()(n)),
                                hasNotificationPermission: y()(h()(i.prototype), "hasNotificationPermission", b()(n)).bind(b()(n)),
                                getNotificationPermission: y()(h()(i.prototype), "getNotificationPermission", b()(n)).bind(b()(n)),
                                setClickedNotification: y()(h()(i.prototype), "setClickedNotification", b()(n)).bind(b()(n)),
                                getClickedNotification: y()(h()(i.prototype), "getClickedNotification", b()(n)).bind(b()(n)),
                                getStoredNotifications: y()(h()(i.prototype), "getStoredNotifications", b()(n)).bind(b()(n)),
                                deleteStoredNotification: y()(h()(i.prototype), "deleteStoredNotification", b()(n)).bind(b()(n)),
                                setConfig: function(e) {
                                    return p()(h()(i.prototype), "config", e, b()(n), !0), n.config = e, n.config.confirmAlertTestId && n.api.setConfirmAlertTestId(n.config.confirmAlertTestId), Promise.resolve()
                                },
                                getStorage: function() {
                                    try {
                                        Promise.resolve({
                                            "cleverpush-subscription-id": localStorage.get("cleverpush-subscription-id"),
                                            "cleverpush-subscription-status": localStorage.get("cleverpush-subscription-status")
                                        })
                                    } catch (e) {
                                        Promise.resolve({
                                            "cleverpush-subscription-id": void 0,
                                            "cleverpush-subscription-status": void 0
                                        })
                                    }
                                }
                            }
                        }), !navigator.permissions || "Firefox" === k.Xh.name && k.x_ < 46 || navigator.permissions.query({
                            name: "notifications"
                        }).then((function(e) {
                            e.onchange = function() {
                                n.isSubscribing || ("granted" !== window.Notification.permission ? n.unsubscribe() : n.isSubscribed((function(e) {
                                    e || n.subscribe()
                                })))
                            }
                        })), n
                    }
                    return f()(i, e), o()(i, [{
                        key: "isSubscribed",
                        value: function() {
                            var e = this;
                            return new Promise((function(i) {
                                try {
                                    e.storageManager.isSubscribed(!1, !1, !0).then((function(e) {
                                        P.cM.debug("Status: storage status:", e), i(e)
                                    }))
                                } catch (e) {
                                    i(!1)
                                }
                            }))
                        }
                    }, {
                        key: "canSubscribe",
                        value: function() {
                            var e = this;
                            return new Promise((function(i) {
                                try {
                                    e.storageManager.canSubscribe().then((function(t) {
                                        t ? e.isSubscribed().then((function(e) {
                                            i(e ? {
                                                result: !1,
                                                message: "User is already subscribed",
                                                reason: "subscribed"
                                            } : {
                                                result: !0
                                            })
                                        })) : i({
                                            result: !1,
                                            message: "User has manually unsubscribed or denied notifications",
                                            reason: "unsubscribed"
                                        })
                                    }))
                                } catch (e) {
                                    i({
                                        result: !0
                                    })
                                }
                            }))
                        }
                    }, {
                        key: "subscribeForce",
                        value: function() {
                            return this.subscribe()
                        }
                    }, {
                        key: "subscribe",
                        value: function() {
                            var e = this;
                            return new Promise((function(i, t) {
                                if (e.isSubscribing) P.cM.error("A subscription process is already in progress."), t(new w.Z);
                                else {
                                    e.isSubscribing = !0;
                                    var s = function() {
                                        e.storageManager.isSubscribed().then((function(e) {
                                            i({
                                                permission: "granted",
                                                serviceWorkerInstalled: e
                                            })
                                        }))
                                    };
                                    "default" === Notification.permission ? Notification.requestPermission((function(t) {
                                        e.isSubscribing = !1, "granted" === t ? s() : i({
                                            permission: t
                                        }), P.cM.debug("HTTP Permission Request Result:", t)
                                    })) : "denied" === Notification.permission ? (e.isSubscribing = !1, i({
                                        permission: "denied"
                                    })) : (e.isSubscribing = !1, P.cM.debug("PermissionAlreadyGranted"), s())
                                }
                            }))
                        }
                    }, {
                        key: "setSubscribed",
                        value: function(e) {
                            try {
                                this.storageManager.setSubscribed(e, !0)
                            } catch (e) {}
                        }
                    }, {
                        key: "setDenied",
                        value: function() {
                            try {
                                this.storageManager.setDenied()
                            } catch (e) {}
                        }
                    }, {
                        key: "setClosed",
                        value: function() {
                            try {
                                this.storageManager.setClosed()
                            } catch (e) {}
                        }
                    }, {
                        key: "setUnsubscribed",
                        value: function(e) {
                            try {
                                this.storageManager.setUnsubscribed(e)
                            } catch (e) {}
                        }
                    }, {
                        key: "unsubscribe",
                        value: function(e) {
                            var i = this;
                            return new Promise((function(t) {
                                var s;
                                try {
                                    s = i.storageManager.getSubscriptionId()
                                } catch (e) {}
                                return s ? i.api.unsubscribe(s).then((function() {
                                    try {
                                        i.storageManager.setUnsubscribed(e)
                                    } catch (e) {}
                                    return t()
                                })).catch((function() {
                                    return t()
                                })) : t()
                            }))
                        }
                    }]), i
                }(S.default)
        }
    }
]);
//# sourceMappingURL=173.js.map