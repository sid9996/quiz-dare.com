(self.webpackChunk_cleverpush_cleverpush_js_sdk = self.webpackChunk_cleverpush_cleverpush_js_sdk || []).push([
    [628], {
        6525: (e, n, r) => {
            var i = r(8331);

            function t(n, r, s) {
                return "undefined" != typeof Reflect && Reflect.get ? e.exports = t = Reflect.get : e.exports = t = function(e, n, r) {
                    var t = i(e, n);
                    if (t) {
                        var s = Object.getOwnPropertyDescriptor(t, n);
                        return s.get ? s.get.call(r) : s.value
                    }
                }, t(n, r, s || n)
            }
            e.exports = t
        },
        8331: (e, n, r) => {
            var i = r(9754);
            e.exports = function(e, n) {
                for (; !Object.prototype.hasOwnProperty.call(e, n) && null !== (e = i(e)););
                return e
            }
        },
        155: (e, n, r) => {
            "use strict";
            r.d(n, {
                Z: () => i
            });
            var i = 10
        },
        8115: (e, n, r) => {
            "use strict";
            r.r(n), r.d(n, {
                default: () => P
            });
            var i = r(4575),
                t = r.n(i),
                s = r(3913),
                o = r.n(s),
                c = r(8585),
                a = r.n(c),
                u = r(9754),
                f = r.n(u),
                g = r(6525),
                b = r.n(g),
                d = r(2205),
                l = r.n(d),
                h = r(3251),
                p = r(4005),
                m = r(1078),
                v = r(8606),
                M = r(4740),
                S = r(2034),
                w = r(3114),
                y = r(7159),
                k = r(1720),
                I = r(9649),
                P = function(e) {
                    function n(e, r, i) {
                        var s;
                        if (t()(this, n), (s = a()(this, f()(n).call(this, e, r, i))).isSubscribed().then((function(e) {
                                e && s.storageManager.initDb()
                            })), e.loadIframe && s.config.subdomain) {
                            var o = "https://".concat(s.config.subdomain, ".").concat(s.config.cleverpushDomain || "cleverpush.com"),
                                c = document.createElement("div");
                            c.style.display = "none", document.body.appendChild(c), h.ZP.debug = m.cM.getLevel() < 2;
                            var u = h.ZP.connectToChild({
                                url: "".concat(o, "/iframe?origin=").concat(encodeURIComponent(location.origin)),
                                appendTo: c,
                                timeout: 2e4
                            });
                            u.iframe.style.display = "none", u.promise.then((function(e) {
                                m.cM.debug("child ready", e), s.iframeMessenger = e, e.setConfig(s.config).then((function() {
                                    s.triggerEvent(S.Z.INITIALIZED)
                                }))
                            })).catch((function(e) {
                                m.cM.debug("iFrame connection error", e), s.triggerEvent(S.Z.INITIALIZED)
                            }))
                        } else s.triggerEvent(S.Z.INITIALIZED);
                        return !navigator.permissions || "Firefox" === y.Xh.name && y.x_ < 46 || navigator.permissions.query({
                            name: "notifications"
                        }).then((function(e) {
                            e.onchange = function() {
                                s.isSubscribing || ("granted" !== window.Notification.permission && s.triggerEvent(S.Z.UNSUBSCRIBED), "denied" === window.Notification.permission ? s.unsubscribe() : s.isSubscribed().then((function(e) {
                                    e || s.triggerEvent(S.Z.PERMISSION_RE_GRANTED)
                                })))
                            }
                        })), s
                    }
                    return l()(n, e), o()(n, [{
                        key: "unsubscribe",
                        value: function(e) {
                            var r = this;
                            return this.iframeMessenger ? this.iframeMessenger.getSubscriptionId().then((function(i) {
                                return r.iframeMessenger.unsubscribe(!0).then((function() {
                                    return b()(f()(n.prototype), "unsubscribe", r).call(r, e, i)
                                }))
                            })) : b()(f()(n.prototype), "unsubscribe", this).call(this, e)
                        }
                    }, {
                        key: "isSubscribedViaSubdomain",
                        value: function() {
                            return !0
                        }
                    }, {
                        key: "replaceRootWorker",
                        value: function() {
                            var e = this;
                            return new Promise((function(n) {
                                "granted" === window.Notification.permission && navigator.serviceWorker && "/" === e.getWorkerScope() && navigator.serviceWorker.controller && navigator.serviceWorker.controller.scriptURL && navigator.serviceWorker.controller.scriptURL.indexOf(e.getWorkerPath()) < 0 ? (m.cM.debug("replacing root service worker..."), navigator.serviceWorker.ready.then((function(e) {
                                    e.unregister().then((function(e) {
                                        m.cM.debug("replacing root worker result", e), n()
                                    })).catch(n)
                                })).catch((function(e) {
                                    m.cM.debug("replacing root service worker failed", e), n()
                                }))) : n()
                            }))
                        }
                    }, {
                        key: "isSubscribed",
                        value: function() {
                            var e = this;
                            return new Promise((function(n) {
                                if ("PREVIEW" === e.config.env) return n(!1);
                                var r = function() {
                                        m.cM.debug("httpsManager syncAndResolve"), e.storageManager.checkIfShouldSync().then((function(r) {
                                            r ? e.sync().then((function() {
                                                m.cM.debug("httpsManager subscribed = true (1)"), e.subscribed = !0, n(!0)
                                            })).catch((function(r) {
                                                m.cM.warn("error while syncing", r), m.cM.debug("httpsManager subscribed = true (2)"), e.subscribed = !0, n(!0)
                                            })) : (m.cM.debug("httpsManager subscribed = true (3)"), e.subscribed = !0, n(!0))
                                        }))
                                    },
                                    i = function() {
                                        m.cM.debug("httpsManager resubscribe"), e.isSubscribing ? (m.cM.debug("httpsManager subscribed = true (6)"), e.subscribed = !0, n(!0)) : (e.isSubscribing = !0, e.isReSubscribe = !0, e.storageManager.canSubscribe().then((function(r) {
                                            if (r) {
                                                if (r === I.q.WAS_DENIED) return e.config.showConfirmAlert = !0, n(!1), e.isSubscribing = !1, void(e.subscribed = !1);
                                                e.registerWorker().then((function(n) {
                                                    return e.pushManagerSubscribe(n)
                                                })).then((function(r) {
                                                    return e.sync(r).then((function() {
                                                        e.isSubscribing = !1, e.triggerEvent(S.Z.SUBSCRIBED, e.storageManager.getSubscriptionId()), m.cM.debug("httpsManager subscribed = true (4)"), e.subscribed = !0, n(!0)
                                                    }))
                                                })).catch((function(r) {
                                                    m.cM.error(r), e.isSubscribing = !1, m.cM.debug("httpsManager subscribed = false (5)"), e.subscribed = !1, n(!1)
                                                }))
                                            } else e.isSubscribing = !1, n(!1)
                                        })))
                                    },
                                    t = function() {
                                        if ("granted" === window.Notification.permission && navigator.serviceWorker) return e.getActiveWorkerRegistration().then((function(t) {
                                            return t.pushManager.getSubscription().then((function(s) {
                                                return e.tryWorkerUpdate(t), s ? e.storageManager.isSubscribed().then((function(i) {
                                                    i ? r() : (m.cM.debug("httpsManager subscribed = false (7)"), e.subscribed = !1, n(!1))
                                                })) : e.config.showConfirmAlertResubscribe ? (e.config.showConfirmAlert = !0, void n(!1)) : (m.cM.debug("isSubscribed: no subscription found -> resubscribe"), void i())
                                            }))
                                        })).catch((function(r) {
                                            if (e.config.showConfirmAlertResubscribe) return e.config.showConfirmAlert = !0, void n(!1);
                                            m.cM.debug("isSubscribed: -> resubscribe ", r), i()
                                        }));
                                        m.cM.debug("isSubscribed: no perm or SW found"), m.cM.debug("httpsManager subscribed = false (8)"), e.subscribed = !1, n(!1)
                                    };
                                e.replaceRootWorker().then((function() {
                                    if (!e.iframeMessenger) return t();
                                    e.iframeMessenger.isSubscribed().then((function(n) {
                                        return m.cM.debug("isSubscribed", n), n ? e.iframeMessenger.getSubscriptionId().then((function(n) {
                                            return n === e.storageManager.getSubscriptionId() ? t() : r()
                                        })) : t()
                                    })).catch((function(r) {
                                        r && (m.cM.debug("isSubscribed err", r), m.cM.error(r)), m.cM.debug("httpsManager subscribed = false (9)"), e.subscribed = !1, n(!1)
                                    }))
                                }))
                            }))
                        }
                    }, {
                        key: "pushManagerSubscribe",
                        value: function(e, n) {
                            var r = this;
                            return new Promise((function(i, t) {
                                e.pushManager.subscribe(r.getPushManagerSubscribeOptions()).then((function(n) {
                                    i(n), r.unregisterOtherPushSubscriptions(e)
                                })).catch((function(s) {
                                    !n && s && s.message && (s.message.indexOf("subscription with a different application server key") > -1 || s.message.indexOf("subscription with a different applicationServerKey") > -1) ? e.pushManager.getSubscription().then((function(n) {
                                        n ? (r.migratedSubscription = !0, n.unsubscribe().then((function() {
                                            r.pushManagerSubscribe(e, !0).then(i).catch(t)
                                        })).catch(t)) : t(s)
                                    })).catch(t) : t(s)
                                }))
                            }))
                        }
                    }, {
                        key: "canSubscribe",
                        value: function() {
                            var e = this;
                            return new Promise((function(n, r) {
                                if ("denied" === window.Notification.permission && e.config.alertHoursDeny && "was-denied" === localStorage.getItem("cleverpush-subscription-status") && "denied" !== sessionStorage.getItem("cleverpush-subscription-status")) return e.config.showUnblockTutorial = !0, e.config.showConfirmAlert = !0, void n(!0);
                                if ("PREVIEW" === e.config.env) return n(!0);
                                var i = function() {
                                        "denied" === window.Notification.permission ? r(new M.Z("User has manually denied notifications", "unsubscribed")) : e.storageManager.canSubscribe().then((function(i) {
                                            m.cM.debug("storageStatus canSubscribe", i), i ? e.isSubscribed().then((function(e) {
                                                e ? r(new M.Z("User is already subscribed", "subscribed")) : n(!0)
                                            })) : r(new M.Z("User has manually unsubscribed or denied notifications: " + i, "unsubscribed"))
                                        }))
                                    },
                                    t = function() {
                                        if ("accengage" !== e.config.importedSubscriptionsProvider || !e.config.importedSubscriptionsSubdomain) return i();
                                        (0, k.N)(e.config).then((function(e) {
                                            if (!e) return i();
                                            n(!1)
                                        }))
                                    };
                                if (!e.iframeMessenger) return t();
                                e.iframeMessenger.canSubscribe().then((function(e) {
                                    var n = e.result,
                                        i = e.message,
                                        s = e.reason;
                                    if (m.cM.debug("canSubscribe from iframe", n), !0 === n) return t();
                                    r(new M.Z(i, s))
                                }), (function(e) {
                                    e && m.cM.debug("canSubscribe err iframe", e), r(e)
                                }))
                            }))
                        }
                    }, {
                        key: "getSubscriptionId",
                        value: function() {
                            var e = this;
                            return new Promise((function(n) {
                                var r = e.storageManager.getSubscriptionId();
                                r ? n(r) : e.iframeMessenger ? e.iframeMessenger.getSubscriptionId().then((function(e) {
                                    n(e)
                                })) : n(null)
                            }))
                        }
                    }, {
                        key: "hasNotificationPermission",
                        value: function() {
                            var e = this;
                            return new Promise((function(n) {
                                if ("PREVIEW" === e.config.env) return n(!1);
                                "granted" === window.Notification.permission ? n(!0) : n(!1)
                            }))
                        }
                    }, {
                        key: "registerForPush",
                        value: function() {
                            var e = this;
                            return new Promise((function(n, r) {
                                e.storageManager.setAllowed(), !(e.topics || []).length && e.config.confirmAlertNativeTheme && "cleverpush-confirm-default" !== e.config.confirmAlertNativeTheme && e.confirm && e.confirm.hasTopicCheckboxes() && e.setTopics(e.confirm.getSelectedTopics()), e.registerWorker().then((function(n) {
                                    return e.pushManagerSubscribe(n)
                                })).then((function(r) {
                                    return m.cM.debug("push manager subscription", r), e.sync(r).then((function() {
                                        e.isSubscribing = !1, e.triggerEvent(S.Z.SUBSCRIBED, e.storageManager.getSubscriptionId()), n("granted")
                                    }))
                                })).catch((function(n) {
                                    m.cM.error(n), e.isSubscribing = !1, r(n)
                                }))
                            }))
                        }
                    }, {
                        key: "subscribeForce",
                        value: function(e) {
                            var n = this;
                            return new Promise((function(i, t) {
                                e ? i() : n.isSubscribing ? t(new v.Z("A subscription process is already in progress.")) : (n.isSubscribing = !0, "default" === Notification.permission ? Notification.requestPermission((function(e) {
                                    "granted" === e ? (n.registerForPushLater = !1, n.registerForPushLater ? n.storageManager.setPending() : n.registerForPush().then(i).catch(t), n.confirm && (n.confirm.hideBackdrop(e), n.config.confirmAlertSelectTopicsLater && (n.confirm.channelTopics || []).length && !n.config.confirmAlertHideChannelTopics && (n.confirm.appendConfirmBox(n.config.confirmAlertSelectTopicsLaterTheme || "cleverpush-confirm-default", !0), n.config.confirmAlertSubscribeLater && (n.registerForPushLater = !0)), n.config.confirmAlertSelectAttributesLater && Promise.all([r.e(944), r.e(467)]).then(r.bind(r, 3467)).then((function(e) {
                                        var r = e.default;
                                        n.selectAttributes = new r(n.config, n), n.selectAttributes.appendConfirmBox(n.config.confirmAlertSelectTopicsLaterTheme || "cleverpush-confirm-default", !0)
                                    })))) : (n.isSubscribing = !1, "default" === e && (n.storageManager.setClosed(), "Firefox" === y.Xh.name && n.storageManager.setTempBlocked()), "denied" === e && (n.api.confirmAlertDenied(), n.storageManager.setDenied()), t(new M.Z((0, w.I)("popup.info").formatCleverPush("<strong>" + ((0, w.I)("confirm.allowBrowser") || (0, w.I)("confirm.allow")) + "</strong>"), e))), m.cM.debug("HTTP Permission Request Result:", e)
                                })) : "denied" === Notification.permission ? (n.isSubscribing = !1, t(new M.Z((0, w.I)("popup.info").formatCleverPush("<strong>" + ((0, w.I)("confirm.allowBrowser") || (0, w.I)("confirm.allow")) + "</strong>"), "denied"))) : (m.cM.debug("PermissionAlreadyGranted", n.config.confirmAlertSelectTopicsLater && (n.confirm.channelTopics || []).length && !n.config.confirmAlertHideChannelTopics), n.registerForPush().then(i).catch(t), n.confirm && (n.confirm.hideBackdrop("granted"), n.config.confirmAlertSelectTopicsLater && (n.confirm.channelTopics || []).length && !n.config.confirmAlertHideChannelTopics && n.getTopics().then((function(e) {
                                    (e || []).length || n.confirm.appendConfirmBox(n.config.confirmAlertSelectTopicsLaterTheme || "cleverpush-confirm-default", !0)
                                })))))
                            }))
                        }
                    }, {
                        key: "subscribe",
                        value: function() {
                            var e = this;
                            return this.isSubscribed().then((function(n) {
                                return e.subscribeForce(n)
                            }))
                        }
                    }, {
                        key: "setClickedNotification",
                        value: function(e) {
                            this.storageManager.setClickedNotification(e), this.iframeMessenger && this.iframeMessenger.setClickedNotification(e)
                        }
                    }, {
                        key: "getClickedNotification",
                        value: function() {
                            var e = this;
                            return new Promise((function(n) {
                                var r = e.storageManager.getClickedNotification();
                                !r && e.iframeMessenger ? e.iframeMessenger.getClickedNotification().then((function(e) {
                                    n(e)
                                })) : n(r)
                            }))
                        }
                    }]), n
                }(p.default)
        },
        1720: (e, n, r) => {
            "use strict";

            function i(e) {
                return new Promise((function(n) {
                    window.addEventListener("message", (function e(r) {
                        if (console.log("acc message", r.data), r.data && "mid:get:storage" === r.data.type)
                            if (window.removeEventListener("message", e), r.data.body) {
                                var i = JSON.parse(r.data.body);
                                n(!!i && !0 === i.isOptin)
                            } else n(!1)
                    }));
                    var r = document.querySelector('iframe[name="acc_proxy"]');
                    r ? r.contentWindow.postMessage({
                        topic: "mid:get:storage",
                        type: "mid:get:storage",
                        body: {}
                    }, "*") : ((r = document.createElement("iframe")).src = "https://" + e.importedSubscriptionsSubdomain + ".accengage.net/pushweb/assets/m_main.html", r.style.display = "none", r.style.border = "none", r.name = "acc_proxy", r.onload = function() {
                        r.contentWindow.postMessage({
                            topic: "mid:get:storage",
                            type: "mid:get:storage",
                            body: {}
                        }, "*")
                    }, r.onerror = function() {
                        return n(!1)
                    }, document.body.appendChild(r))
                }))
            }
            r.d(n, {
                N: () => i
            })
        }
    }
]);
//# sourceMappingURL=628.js.map