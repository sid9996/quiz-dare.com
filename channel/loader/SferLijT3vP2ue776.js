/* generated at: 2021-07-02T00:44:02.089Z */
(() => {
    var __webpack_modules__ = {
            2858: e => {
                e.exports = function(e) {
                    if (Array.isArray(e)) return e
                }
            },
            3646: e => {
                e.exports = function(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                        return n
                    }
                }
            },
            1506: e => {
                e.exports = function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }
            },
            4575: e => {
                e.exports = function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }
            },
            9100: (e, t, n) => {
                var i = n(9489);

                function r(t, n, o) {
                    return ! function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }() ? e.exports = r = function(e, t, n) {
                        var r = [null];
                        r.push.apply(r, t);
                        var o = new(Function.bind.apply(e, r));
                        return n && i(o, n.prototype), o
                    } : e.exports = r = Reflect.construct, r.apply(null, arguments)
                }
                e.exports = r
            },
            3913: e => {
                function t(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                e.exports = function(e, n, i) {
                    return n && t(e.prototype, n), i && t(e, i), e
                }
            },
            9713: e => {
                e.exports = function(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }
            },
            9754: e => {
                function t(n) {
                    return e.exports = t = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    }, t(n)
                }
                e.exports = t
            },
            2205: (e, t, n) => {
                var i = n(9489);
                e.exports = function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && i(e, t)
                }
            },
            430: e => {
                e.exports = function(e) {
                    return -1 !== Function.toString.call(e).indexOf("[native code]")
                }
            },
            6860: e => {
                e.exports = function(e) {
                    if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
                }
            },
            3884: e => {
                e.exports = function(e, t) {
                    if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) {
                        var n = [],
                            i = !0,
                            r = !1,
                            o = void 0;
                        try {
                            for (var a, s = e[Symbol.iterator](); !(i = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); i = !0);
                        } catch (e) {
                            r = !0, o = e
                        } finally {
                            try {
                                i || null == s.return || s.return()
                            } finally {
                                if (r) throw o
                            }
                        }
                        return n
                    }
                }
            },
            521: e => {
                e.exports = function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }
            },
            8206: e => {
                e.exports = function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance")
                }
            },
            8585: (e, t, n) => {
                var i = n(8),
                    r = n(1506);
                e.exports = function(e, t) {
                    return !t || "object" !== i(t) && "function" != typeof t ? r(e) : t
                }
            },
            9489: e => {
                function t(n, i) {
                    return e.exports = t = Object.setPrototypeOf || function(e, t) {
                        return e.__proto__ = t, e
                    }, t(n, i)
                }
                e.exports = t
            },
            3038: (e, t, n) => {
                var i = n(2858),
                    r = n(3884),
                    o = n(521);
                e.exports = function(e, t) {
                    return i(e) || r(e, t) || o()
                }
            },
            319: (e, t, n) => {
                var i = n(3646),
                    r = n(6860),
                    o = n(8206);
                e.exports = function(e) {
                    return i(e) || r(e) || o()
                }
            },
            8: e => {
                function t(e) {
                    return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    })(e)
                }

                function n(i) {
                    return "function" == typeof Symbol && "symbol" === t(Symbol.iterator) ? e.exports = n = function(e) {
                        return t(e)
                    } : e.exports = n = function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : t(e)
                    }, n(i)
                }
                e.exports = n
            },
            5957: (e, t, n) => {
                var i = n(9754),
                    r = n(9489),
                    o = n(430),
                    a = n(9100);

                function s(t) {
                    var n = "function" == typeof Map ? new Map : void 0;
                    return e.exports = s = function(e) {
                        if (null === e || !o(e)) return e;
                        if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                        if (void 0 !== n) {
                            if (n.has(e)) return n.get(e);
                            n.set(e, t)
                        }

                        function t() {
                            return a(e, arguments, i(this).constructor)
                        }
                        return t.prototype = Object.create(e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), r(t, e)
                    }, s(t)
                }
                e.exports = s
            },
            3035: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => p
                });
                var i = n(8),
                    r = n.n(i),
                    o = n(4575),
                    a = n.n(o),
                    s = n(3913),
                    c = n.n(s),
                    _ = n(2238),
                    u = n.n(_),
                    l = n(3705),
                    f = n(1078),
                    h = n(1624),
                    d = n(5632),
                    p = function() {
                        function e(t) {
                            a()(this, e), this.channelId = t, this.confirmAlertTestId = void 0, this.endpoint = "https://api.cleverpush.com", this.regionEnabled = !1
                        }
                        return c()(e, [{
                            key: "setConfirmAlertTestId",
                            value: function(e) {
                                this.confirmAlertTestId = e
                            }
                        }, {
                            key: "request",
                            value: function(e, t, n) {
                                (0, f.tI)("request", e, t, n);
                                var i = {
                                    method: "GET",
                                    headers: {
                                        Accept: "application/json"
                                    }
                                };
                                return e && (i.method = e), n && (i.body = JSON.stringify(Object.assign({
                                    sdkVersion: "1.0.0"
                                }, n)), i.headers["Content-Type"] = "application/json"), (0, h.Z)(this.endpoint + t, i)
                            }
                        }, {
                            key: "getChannelConfig",
                            value: function(e) {
                                var t = "/channel/".concat(this.channelId, "/config");
                                if (void 0 !== e && e) {
                                    t += "?confirmAlertTestsEnabled=true";
                                    var n = new(u())(navigator.userAgent).getOS();
                                    n.name && (t += "&platformName=" + n.name)
                                }
                                return this.request("GET", t, null)
                            }
                        }, {
                            key: "tagSubscription",
                            value: function(e, t) {
                                return this.request("POST", "/subscription/tag", {
                                    channelId: this.channelId,
                                    tagId: t,
                                    subscriptionId: e
                                })
                            }
                        }, {
                            key: "untagSubscription",
                            value: function(e, t) {
                                return this.request("POST", "/subscription/untag", {
                                    channelId: this.channelId,
                                    tagId: t,
                                    subscriptionId: e
                                })
                            }
                        }, {
                            key: "setSubscriptionAttribute",
                            value: function(e, t, n) {
                                return this.request("POST", "/subscription/attribute", {
                                    channelId: this.channelId,
                                    attributeId: t,
                                    value: n,
                                    subscriptionId: e
                                })
                            }
                        }, {
                            key: "pushSubscriptionAttributeValue",
                            value: function(e, t, n) {
                                return this.request("POST", "/subscription/attribute/push-value", {
                                    channelId: this.channelId,
                                    attributeId: t,
                                    value: n,
                                    subscriptionId: e
                                })
                            }
                        }, {
                            key: "pullSubscriptionAttributeValue",
                            value: function(e, t, n) {
                                return this.request("POST", "/subscription/attribute/pull-value", {
                                    channelId: this.channelId,
                                    attributeId: t,
                                    value: n,
                                    subscriptionId: e
                                })
                            }
                        }, {
                            key: "triggerFollowUpEvent",
                            value: function(e, t, n, i, r, o, a) {
                                var s = {
                                    channelId: this.channelId,
                                    subscriptionId: e,
                                    campaignId: t,
                                    notificationId: n,
                                    name: i,
                                    parameters: r,
                                    fromNotification: o,
                                    bypassInactive: a
                                };
                                if ("articleBounce" === i && "function" == typeof navigator.sendBeacon) {
                                    var c = new Blob([JSON.stringify(s)], {
                                        type: "application/x-www-form-urlencoded"
                                    });
                                    return navigator.sendBeacon(this.endpoint + "/subscription/event", c)
                                }
                                return this.request("POST", "/subscription/event", s)
                            }
                        }, {
                            key: "trackConversion",
                            value: function(e, t, n, i, r, o) {
                                return this.request("POST", "/subscription/conversion", {
                                    channelId: this.channelId,
                                    subscriptionId: e,
                                    notificationId: t,
                                    eventId: n,
                                    amount: i,
                                    followUpCampaignId: r,
                                    currency: o
                                })
                            }
                        }, {
                            key: "trackWidget",
                            value: function(e, t) {
                                return this.request("POST", "/channel/" + this.channelId + "/widget/" + t, {
                                    channelId: this.channelId,
                                    widgetId: e
                                })
                            }
                        }, {
                            key: "trackPanel",
                            value: function(e, t) {
                                return this.request("POST", "/channel/" + this.channelId + "/panel/" + t, {
                                    channelId: this.channelId,
                                    notificationId: e
                                })
                            }
                        }, {
                            key: "trackBounce",
                            value: function(e) {
                                var t = Object.assign({
                                        channelId: this.channelId
                                    }, e || {}),
                                    n = new(u())(navigator.userAgent),
                                    i = n.getBrowser(),
                                    r = n.getOS();
                                if (t.platformName = r.name || void 0, t.browserType = i.name || void 0, "function" == typeof navigator.sendBeacon) {
                                    var o = new Blob([JSON.stringify(t)], {
                                        type: "application/x-www-form-urlencoded"
                                    });
                                    return navigator.sendBeacon(this.endpoint + "/notification/bounced", o)
                                }
                                return this.request("POST", "/notification/bounced", t)
                            }
                        }, {
                            key: "getSyncParameters",
                            value: function(e) {
                                (0, f.tI)("getSyncParameters");
                                var t = new(u())(navigator.userAgent),
                                    n = t.getBrowser(),
                                    i = t.getOS(),
                                    r = (n.version || "").split(".")[0],
                                    o = (i.version || "").split(".")[0],
                                    a = {
                                        channelId: this.channelId,
                                        browserType: n.name || void 0,
                                        browserVersion: r || n.version || void 0,
                                        platformName: i.name || void 0,
                                        platformVersion: o || i.version || void 0
                                    },
                                    s = location.pathname;
                                s && (a.pathname = s);
                                try {
                                    if ("undefined" != typeof sessionStorage) {
                                        var c = sessionStorage.getItem("cleverpush-referrer") || document.referrer.split("?")[0];
                                        c && (a.referrer = c);
                                        var _ = sessionStorage.getItem("cleverpush-referral-subscription-id");
                                        _ && (a.referralSubscriptionId = _)
                                    }
                                    if ("undefined" != typeof localStorage) {
                                        var p = localStorage.getItem("cleverpush-visits") || 0;
                                        isNaN(p) || (a.visits = p + ""), "was-denied" !== localStorage.getItem("subscription-status") && "denied" !== localStorage.getItem("subscription-status") || (a.wasDenied = !0)
                                    }
                                } catch (e) {}
                                var g = (navigator.language || navigator.userLanguage || "").substr(0, 2);
                                if (g && (a.language = g), this.confirmAlertTestId && (a.confirmAlertTestId = this.confirmAlertTestId), this.testSubscription && (a.testSubscription = this.testSubscription), self.CleverPush && self.CleverPush.config && self.CleverPush.config.pianoEnabled && self.CleverPush.config.pianoPublicPersistedId) try {
                                    (0, d.c)() ? "undefined" != typeof cX && (a.pianoUserId = cX.getUserId(), a.pianoSegments = cX.getUserSegmentIds({
                                        persistedQueryId: self.CleverPush.config.pianoPublicPersistedId
                                    })): (a.pianoUserId = "optout", a.pianoSegments = [])
                                } catch (e) {
                                    f.cM.debug(e)
                                }
                                return void 0 !== e && e ? a : new l.Z((function(e) {
                                    (0, h.Z)("https://geoip-api.cleverpush.com/", {
                                        mode: "cors",
                                        timeout: 3e3
                                    }).then((function(t) {
                                        e(Object.assign(a, t))
                                    })).catch((function(t) {
                                        f.cM.error(t), e(a)
                                    }))
                                }))
                            }
                        }, {
                            key: "syncSubscription",
                            value: function(e, t, n, i) {
                                var o = this;
                                if ((0, f.tI)("syncSubscription", e, t), !e) return l.Z.reject();
                                var a = "object" === r()(i) ? i : {};
                                return this.getSyncParameters().then((function(i) {
                                    a = Object.assign(a, i);
                                    var s = parseInt(a.browserVersion, 10);
                                    if (o.regionEnabled || delete a.region, "object" === r()(t) && t && !isNaN(t.length)) {
                                        var c = 0;
                                        try {
                                            var _ = localStorage.getItem("cleverpush-topics-version");
                                            _ && !isNaN(_) && (c = parseInt(_, 10))
                                        } catch (e) {}
                                        c += 1, a.topics = t, a.topicsVersion = c
                                    }
                                    if ("object" === r()(n) && n && n.length && (a.tags = n), a.existingPermission && delete a.confirmAlertTestId, o.fromBellWidget && (a.fromBellWidget = o.fromBellWidget), o.widgetId && (a.widgetId = o.widgetId), e.facebookUserRef && (a.facebookUserRef = e.facebookUserRef, "undefined" != typeof self && self.CleverPush && self.CleverPush.config && self.CleverPush.config.multiChannels && self.CleverPush.config.multiChannels.facebookChannel._id !== a.channelId && (a.channelId = self.CleverPush.config.multiChannels.facebookChannel._id)), "Safari" === a.browserType && "object" === r()(e) && e.deviceToken) a.apnsToken = e.deviceToken;
                                    else if ("string" == typeof e) a.subscriptionId = e;
                                    else if ("Chrome" === a.browserType && s >= 42 && s < 50) a.endpoint = e.endpoint;
                                    else if (a.endpoint = e.endpoint, void 0 !== e.getKey) {
                                        var u = e.getKey ? e.getKey("p256dh") : null,
                                            f = null;
                                        ("Firefox" !== a.browserType || "Firefox" === a.browserType && s >= 46) && (f = e.getKey ? e.getKey("auth") : null), u && (a.publicKey = btoa(String.fromCharCode.apply(null, new Uint8Array(u)))), f && (a.authSecret = btoa(String.fromCharCode.apply(null, new Uint8Array(f))))
                                    }
                                    return new l.Z((function(e, t) {
                                        return o.request("POST", "/subscription/sync/".concat(o.channelId), a).then((function(n) {
                                            n && n.id ? e(n) : n && n.error ? t(n.error) : t()
                                        })).catch((function(e) {
                                            e.reason ? t(e.reason) : e.status ? t(e.status) : t(e)
                                        }))
                                    }))
                                }))
                            }
                        }, {
                            key: "unsubscribe",
                            value: function(e) {
                                var t = this;
                                return new l.Z((function(n) {
                                    t.request("POST", "/subscription/unsubscribe", {
                                        subscriptionId: e,
                                        channelId: t.channelId
                                    }).then(n).catch(n)
                                }))
                            }
                        }, {
                            key: "unsubscribeFeedback",
                            value: function(e) {
                                var t = this,
                                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                                return new l.Z((function(i) {
                                    t.request("POST", "/subscription/unsubscribe/feedback", {
                                        type: e,
                                        text: n,
                                        channelId: t.channelId
                                    }).then(i).catch(i)
                                }))
                            }
                        }, {
                            key: "startSession",
                            value: function(e, t) {
                                var n = this;
                                return new l.Z((function(i) {
                                    n.request("POST", "/subscription/session/start", Object.assign({}, {
                                        subscriptionId: e,
                                        channelId: n.channelId
                                    }, t || {})).then(i).catch(i)
                                }))
                            }
                        }, {
                            key: "endSession",
                            value: function(e, t) {
                                var n = new Blob([JSON.stringify(Object.assign({
                                    subscriptionId: e,
                                    channelId: this.channelId
                                }, t))], {
                                    type: "application/x-www-form-urlencoded"
                                });
                                return navigator.sendBeacon(this.endpoint + "/subscription/session/end", n)
                            }
                        }, {
                            key: "trackSessionImpression",
                            value: function(e, t) {
                                var n = this;
                                return new l.Z((function(i) {
                                    n.request("POST", "/subscription/session/impression", Object.assign({}, {
                                        subscriptionId: e,
                                        notificationId: t,
                                        channelId: n.channelId
                                    })).then(i).catch(i)
                                }))
                            }
                        }, {
                            key: "confirmAlertShown",
                            value: function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "confirm-alert",
                                    n = !0,
                                    i = "cleverpush-" + t + "-reported",
                                    r = 2,
                                    o = sessionStorage.getItem(i);
                                if (o) {
                                    var a = parseInt(o, 10);
                                    isNaN(a) || (n = a + 36e5 * r < Date.now())
                                }
                                if (n) {
                                    sessionStorage.setItem(i, Date.now());
                                    var s = {
                                            channelId: this.channelId,
                                            confirmAlertTestId: this.confirmAlertTestId
                                        },
                                        c = new(u())(navigator.userAgent),
                                        _ = c.getBrowser(),
                                        f = c.getOS();
                                    if (s.platformName = f.name || void 0, s.browserType = _.name || void 0, void 0 !== e && e && (s.existingPermission = !0, delete s.confirmAlertTestId), "undefined" != typeof window && window.CleverPush && window.CleverPush.config.trackOptInPathnames) {
                                        var h = location.pathname;
                                        h && (s.pathname = h)
                                    }
                                    if (this.widgetId && (s.widgetId = this.widgetId), "undefined" != typeof window && window.CleverPush && window.CleverPush.config.trackOptInReferrers) try {
                                        if ("undefined" != typeof sessionStorage) {
                                            var d = sessionStorage.getItem("cleverpush-referrer") || document.referrer.split("?")[0];
                                            d && (s.referrer = d)
                                        }
                                    } catch (e) {}
                                    return "undefined" == typeof localStorage || "was-denied" !== localStorage.getItem("subscription-status") && "denied" !== localStorage.getItem("subscription-status") || (s.wasDenied = !0), this.request("POST", "/channel/" + t, s)
                                }
                                return l.Z.resolve()
                            }
                        }, {
                            key: "trackOptInVisitor",
                            value: function() {
                                var e = {
                                    channelId: this.channelId,
                                    confirmAlertTestId: this.confirmAlertTestId
                                };
                                return this.widgetId && (e.widgetId = this.widgetId), this.request("POST", "/channel/optin-visitor", e)
                            }
                        }, {
                            key: "confirmAlertDenied",
                            value: function() {
                                var e = {
                                    channelId: this.channelId,
                                    confirmAlertTestId: this.confirmAlertTestId
                                };
                                return this.widgetId && (e.widgetId = this.widgetId), e.existingPermission && delete e.confirmAlertTestId, this.request("POST", "/channel/blocked-optin-request", e)
                            }
                        }, {
                            key: "generateWalletPass",
                            value: function(e, t) {
                                var n = this;
                                return new l.Z((function(i, r) {
                                    n.request("POST", "/channel/" + n.channelId + "/wallet-pass/" + e + "/subscribe", Object.assign({}, {
                                        walletPassId: e
                                    }, t)).then(i).catch(r)
                                }))
                            }
                        }]), e
                    }()
            },
            6128: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                "use strict";
                __webpack_require__.d(__webpack_exports__, {
                    Z: () => CleverPush
                });
                var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9713),
                    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__),
                    _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3038),
                    _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__),
                    _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(319),
                    _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__),
                    _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8),
                    _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_3__),
                    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4575),
                    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__),
                    _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3913),
                    _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__),
                    _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8585),
                    _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__),
                    _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9754),
                    _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__),
                    _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2205),
                    _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__),
                    wolfy87_eventemitter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4795),
                    wolfy87_eventemitter__WEBPACK_IMPORTED_MODULE_9___default = __webpack_require__.n(wolfy87_eventemitter__WEBPACK_IMPORTED_MODULE_9__),
                    promise_polyfill__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3705),
                    _utils_polyfills__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5401),
                    _utils_polyfills__WEBPACK_IMPORTED_MODULE_11___default = __webpack_require__.n(_utils_polyfills__WEBPACK_IMPORTED_MODULE_11__),
                    _utils_debug__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1078),
                    _utils_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5895),
                    _api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3035),
                    _messenger_command__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2136),
                    _utils_request__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1624),
                    _utils_env__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(7159),
                    _utils_detect__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(6716),
                    _utils_translate__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(3114),
                    _utils_tags__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(9800),
                    _utils_piano__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(5632),
                    _utils_adblock__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(1328),
                    _const_customCssOverrides__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(1317),
                    _const_event__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(2034),
                    _error_CleverPushError__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(4740),
                    _const_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(155),
                    CleverPush = function(_EventEmitter) {
                        function CleverPush() {
                            var e;
                            return _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, CleverPush), (e = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(CleverPush).call(this))).bell = null, e.config = {}, e.log = _utils_debug__WEBPACK_IMPORTED_MODULE_12__.cM, e.initialized = !1, e.initCalled = !1, e.initFailed = !1, e.initError = null, e.api = null, e.subscriptionManager = null, e.version = "1.0.0", e
                        }
                        return _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default()(CleverPush, _EventEmitter), _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(CleverPush, [{
                            key: "init",
                            value: function init(configParam, callbackParam) {
                                var _this2 = this;
                                (0, _utils_debug__WEBPACK_IMPORTED_MODULE_12__.tI)("init"), _utils_debug__WEBPACK_IMPORTED_MODULE_12__.cM.info("Browser:", _utils_env__WEBPACK_IMPORTED_MODULE_17__.Xh.name, _utils_env__WEBPACK_IMPORTED_MODULE_17__.x_);
                                var callback = function(e, t) {
                                    var n = void 0 !== t ? t : !e;
                                    "function" == typeof callbackParam ? callbackParam(e, n) : e && (e.warn || "unsupported-browser" === e.reason || "private-mode" === e.reason || "already-initialized" === e.reason || "init-already-called" === e.reason ? _utils_debug__WEBPACK_IMPORTED_MODULE_12__.cM.warn(e.message) : _utils_debug__WEBPACK_IMPORTED_MODULE_12__.cM.error(e)), "function" == typeof window.cleverPushInitCallback && window.cleverPushInitCallback(e, n), e ? ("already-initialized" !== e.reason && "init-already-called" !== e.reason && (_this2.initFailed = !0, _this2.initError = e), _this2.trigger(_const_event__WEBPACK_IMPORTED_MODULE_24__.Z.INITIALIZATION_FAILED), e && "unsupported-browser" !== e.reason && "private-mode" !== e.reason && "already-initialized" !== e.reason && e.reason) : _this2.initFailed = !1
                                };
                                if (this.initCalled) callback(new _error_CleverPushError__WEBPACK_IMPORTED_MODULE_25__.Z("Init was already called, please only call init() once.", "init-already-called"), !1);
                                else if (this.initCalled = !0, window.addEventListener("message", (function(e) {
                                        e.data && "object" === _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_3___default()(e.data) && "cleverpush" === e.data.type && e.data.method && e.data.arguments && _this2[e.data.method] && _this2[e.data.method].apply(_this2, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(e.data.arguments))
                                    })), "object" !== _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_3___default()(configParam)) callback(new _error_CleverPushError__WEBPACK_IMPORTED_MODULE_25__.Z("Required parameter `config` not given.", "invalid-config"));
                                else if (configParam.channelId || configParam.loadConfigFromParent)
                                    if (this.initialized) callback(new _error_CleverPushError__WEBPACK_IMPORTED_MODULE_25__.Z("CleverPush SDK was already initialized.", "already-initialized"));
                                    else {
                                        this.api = new _api__WEBPACK_IMPORTED_MODULE_14__.Z(configParam.channelId), configParam.apiEndpoint && (this.api.endpoint = configParam.apiEndpoint), !configParam.env && window.cleverPushConfig && window.cleverPushConfig.env && (configParam.env = window.cleverPushConfig.env);
                                        var initSubscriptionManager = function() {
                                            var e, t = window.location.protocol,
                                                n = window.location.hostname;
                                            try {
                                                t = window.parent.location.protocol, n = window.parent.location.hostname
                                            } catch (e) {}
                                            return e = "safari" === _this2.browserType ? "safariManager" : "facebook" === _this2.browserType ? "facebookManager" : "urlSession" === _this2.browserType ? "urlSessionManager" : (0, _utils_env__WEBPACK_IMPORTED_MODULE_17__.CO)(configParam) || "POPUP" === configParam.env ? "httpPopupManager" : (0, _utils_env__WEBPACK_IMPORTED_MODULE_17__.cL)(configParam) ? "httpIframeManager" : !_this2.config.ownDomain || "https:" !== t && "localhost" !== n ? "httpHostManager" : "httpsManager", new promise_polyfill__WEBPACK_IMPORTED_MODULE_10__.Z((function(t) {
                                                __webpack_require__(3564)("./".concat(e)).then((function(e) {
                                                    var n = e.default;
                                                    _this2.subscriptionManager = new n(_this2.config, _this2.api, _this2.trigger.bind(_this2)), t()
                                                }))
                                            }))
                                        };
                                        if ("POPUP" !== configParam.env && (0, _utils_env__WEBPACK_IMPORTED_MODULE_17__.MD)(configParam) || "PREVIEW" === configParam.env || "WIDGET" === configParam.env) {
                                            var loadConfigPromise = new promise_polyfill__WEBPACK_IMPORTED_MODULE_10__.Z((function(e, t) {
                                                var n = configParam.confirmAlertTestsEnabled && configParam.confirmAlertTests && configParam.confirmAlertTests.length;
                                                "undefined" != typeof fetch && (void 0 === configParam.loadConfig || configParam.loadConfig || n) && "PREVIEW" !== configParam.env ? _this2.api.getChannelConfig(configParam.confirmAlertTestsEnabled).then((function(t) {
                                                    e(t)
                                                })).catch(t) : configParam.loadConfigUrl ? (0, _utils_request__WEBPACK_IMPORTED_MODULE_16__.Z)(configParam.loadConfigUrl).then((function(t) {
                                                    e(t || {})
                                                })).catch(t) : e({})
                                            }));
                                            configParam.apiEndpoint && (this.api.endpoint = configParam.apiEndpoint), loadConfigPromise.then((function(channelConfig) {
                                                if (_this2.config = Object.assign({
                                                        autoRegister: !0,
                                                        alertTimeout: 0,
                                                        alertMinimumVisits: 0,
                                                        loadIframe: !0,
                                                        trackSessions: !0
                                                    }, channelConfig, configParam, {
                                                        confirmAlertTests: channelConfig.confirmAlertTests
                                                    }), _this2.config.staticEndpoint && (__webpack_require__.p = _this2.config.staticEndpoint + "/sdk/"), _this2.config.enableRestrictOptInDomain && _this2.config.domain && !_this2.config.domain.includes(location.hostname)) callback(new _error_CleverPushError__WEBPACK_IMPORTED_MODULE_25__.Z("This channel has enabled Opt-in domain restrictions. (".concat(location.hostname, " is not included in allowed domains (").concat(_this2.config.domain, "))"), "enableRestrictOptInDomain"));
                                                else if (configParam.alertLocalization && (_this2.config.alertLocalization = Object.assign({}, channelConfig.alertLocalization, configParam.alertLocalization)), void 0 !== _this2.config.channelId && void 0 !== _this2.config.channelName) {
                                                    if ("object" === _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_3___default()(self.cleverPushConfig) && (_this2.config = Object.assign(_this2.config, self.cleverPushConfig)), _utils_debug__WEBPACK_IMPORTED_MODULE_12__.cM.debug("Config:", _this2.config), _this2.config.apiEndpoint && (_this2.api.endpoint = _this2.config.apiEndpoint), _this2.config.regionEnabled && (_this2.api.regionEnabled = !0), (0, _utils_env__WEBPACK_IMPORTED_MODULE_17__.io)() && (_this2.config.autoRegister = !1), _this2.config.facebookAppId || (_this2.config.facebookAppId = "436333683366106"), "undefined" != typeof URLSearchParams && location.search && location.search.length) {
                                                        var params = new URLSearchParams(location.search.slice(1));
                                                        if (params.get("confirmAlertTestId") && (_this2.config.confirmAlertTestId = params.get("confirmAlertTestId"), _this2.api.setConfirmAlertTestId(_this2.config.confirmAlertTestId)), params.get("cpId")) try {
                                                            sessionStorage.setItem("cleverpush-url-session", "true"), sessionStorage.setItem("cleverpush-subscription-id", params.get("cpId"))
                                                        } catch (e) {}
                                                    }
                                                    try {
                                                        sessionStorage.getItem("cleverpush-url-session") && (_this2.urlSession = !0)
                                                    } catch (e) {}
                                                    try {
                                                        (_this2.config.trackOptInReferrers || (_this2.config.confirmAlertFilters || []).find((function(e) {
                                                            return "referrer" === e.type
                                                        })) || _this2.config.bounceEnabled && (_this2.config.bounceFilters || []).find((function(e) {
                                                            return "direct" === e.source
                                                        }))) && !sessionStorage.getItem("cleverpush-referrer") && document.referrer && sessionStorage.setItem("cleverpush-referrer", document.referrer.split("?")[0]), _this2.referrer = sessionStorage.getItem("cleverpush-referrer")
                                                    } catch (e) {
                                                        _utils_debug__WEBPACK_IMPORTED_MODULE_12__.cM.debug(e)
                                                    }
                                                    var supportsPushOrFbMessenger = function() {
                                                        return new promise_polyfill__WEBPACK_IMPORTED_MODULE_10__.Z((function(e, t) {
                                                            var n = function(n) {
                                                                if (_this2.urlSession && "unsupported-browser" === n.reason && !configParam.forceChannelId) _this2.config.multiChannels && _this2.config.multiChannels.telegramChannel && _this2.config.multiChannels.telegramChannel._id !== _this2.config.channelId ? (_this2.config.channelId = _this2.config.multiChannels.telegramChannel._id, _this2.api.channelId = _this2.config.multiChannels.telegramChannel._id) : _this2.config.multiChannels && _this2.config.multiChannels.facebookChannel && _this2.config.multiChannels.facebookChannel._id !== _this2.config.channelId && !configParam.forceChannelId && (_this2.config.channelId = _this2.config.multiChannels.facebookChannel._id, _this2.api.channelId = _this2.config.multiChannels.facebookChannel._id), e("urlSession");
                                                                else {
                                                                    if (_this2.config.facebookAppId && _this2.config.facebookPageId && _this2.config.facebookCheckboxEnabled && "unsupported-browser" === n.reason) return _this2.config.multiChannels && _this2.config.multiChannels.facebookChannel && _this2.config.multiChannels.facebookChannel._id !== _this2.config.channelId && !configParam.forceChannelId && (_this2.config.channelId = _this2.config.multiChannels.facebookChannel._id, _this2.config.alertLocalization = Object.assign({}, _this2.config.alertLocalization, _this2.config.multiChannels.facebookChannel.alertLocalization), _this2.api.channelId = _this2.config.multiChannels.facebookChannel._id), _this2.config.hideNotificationBellSubscribed = !0, _utils_debug__WEBPACK_IMPORTED_MODULE_12__.cM.debug("showConfirmAlert = true 1"), _this2.config.showConfirmAlert = !0, "cleverpush-confirm-backdrop-text" === _this2.config.confirmAlertNativeTheme && (_this2.config.confirmAlertNativeTheme = ""), _utils_debug__WEBPACK_IMPORTED_MODULE_12__.cM.debug("UAParser Browser:", _utils_env__WEBPACK_IMPORTED_MODULE_17__.Xh), _this2.config.facebookButtonOptIn = !0, _this2.config.facebookCheckboxEnabled = !1, void e("facebook");
                                                                    t(n)
                                                                }
                                                            };
                                                            if (_this2.urlSession) return _this2.config.multiChannels && _this2.config.multiChannels.telegramChannel && _this2.config.multiChannels.telegramChannel._id !== _this2.config.channelId && !configParam.forceChannelId ? (_this2.config.channelId = _this2.config.multiChannels.telegramChannel._id, _this2.api.channelId = _this2.config.multiChannels.telegramChannel._id) : _this2.config.multiChannels && _this2.config.multiChannels.facebookChannel && _this2.config.multiChannels.facebookChannel._id !== _this2.config.channelId && !configParam.forceChannelId && (_this2.config.channelId = _this2.config.multiChannels.facebookChannel._id, _this2.api.channelId = _this2.config.multiChannels.facebookChannel._id), void e("urlSession");
                                                            _this2.config.multiChannels && _this2.config.multiChannels.facebookChannel && _this2.config.multiChannels.facebookChannel.facebookPage && !_this2.config.facebookPageId && (_this2.config.facebookPageId = _this2.config.multiChannels.facebookChannel.facebookPage.id || _this2.config.multiChannels.facebookChannel.facebookPageId, _this2.config.facebookCheckboxEnabled = _this2.config.multiChannels.facebookChannel.facebookCheckboxEnabled, _this2.config.facebookCheckboxOnlyUnsupported = _this2.config.multiChannels.facebookChannel.facebookCheckboxOnlyUnsupported, _this2.config.facebookDoubleOptIn = _this2.config.multiChannels.facebookChannel.facebookDoubleOptIn), (0, _utils_env__WEBPACK_IMPORTED_MODULE_17__.H$)().then((function(t) {
                                                                _this2.config.facebookCheckboxOnlyUnsupported && _this2.config.facebookPageId && (_this2.config.facebookPageId = null), "safari" !== t || _this2.config.safariWebsitePushId ? e(t) : n(new _error_CleverPushError__WEBPACK_IMPORTED_MODULE_25__.Z("Safari Web Push not set up", "unsupported-browser"))
                                                            })).catch(n)
                                                        }))
                                                    };
                                                    _this2.initWebBanners(), _this2.initBounces(), (0, _utils_dom__WEBPACK_IMPORTED_MODULE_13__.AE)().then((function() {
                                                        _this2.initMultiPlatformWidgets()
                                                    })), _this2.initChatWidget(), supportsPushOrFbMessenger().then((function(browserType) {
                                                        if (_this2.browserType = browserType, _this2.config.browserType = browserType, !_this2.config.desktopOnly || "Android" !== _utils_env__WEBPACK_IMPORTED_MODULE_17__.os.name && "mobile" !== _utils_env__WEBPACK_IMPORTED_MODULE_17__.Uh.type) {
                                                            if (_this2.config.confirmAlertTestsEnabled && _this2.config.confirmAlertTests && _this2.config.confirmAlertTests.length > 0) {
                                                                var availableConfirmAlertTests = _this2.config.confirmAlertTests.filter((function(e) {
                                                                        return !(e.config || {}).alertPathname || (e.config || {}).alertPathname && new RegExp((e.config || {}).alertPathname).test(window.location.pathname)
                                                                    })),
                                                                    test;
                                                                if (_this2.config.confirmAlertTestId) {
                                                                    var testIndex = availableConfirmAlertTests.findIndex((function(e) {
                                                                        return (e || {}).id === _this2.config.confirmAlertTestId
                                                                    }));
                                                                    testIndex >= 0 && (test = availableConfirmAlertTests[testIndex])
                                                                }
                                                                if (!test) {
                                                                    var defaultPercent = 100 / availableConfirmAlertTests.length,
                                                                        tests = availableConfirmAlertTests.map((function(e) {
                                                                            return Object.assign({}, e, {
                                                                                percentage: e.percentage || defaultPercent
                                                                            })
                                                                        })),
                                                                        i, randomNr = Math.random(),
                                                                        threshold = 0;
                                                                    for (i = 0; i < tests.length; i += 1)
                                                                        if (tests[i].percentage) {
                                                                            if (threshold += tests[i].percentage / 100, threshold > randomNr) {
                                                                                test = tests[i];
                                                                                break
                                                                            }
                                                                            test || (test = tests.filter((function(e) {
                                                                                return !e.percentage
                                                                            })))
                                                                        }
                                                                }
                                                                test && test.config && (_utils_debug__WEBPACK_IMPORTED_MODULE_12__.cM.debug("Split-Test:", test), _this2.config = Object.assign({}, _this2.config, test.config, {
                                                                    confirmAlertTestId: test.id,
                                                                    customCss: (test.config.customCss || "") + (_this2.config.customCss ? _this2.config.customCss : ""),
                                                                    alertLocalization: Object.assign({}, _this2.config.alertLocalization, test.config.alertLocalization || {})
                                                                }), test.alertLocalization || (_this2.config.alertLocalization || (_this2.config.alertLocalization = {}), _this2.config.alertLocalization = {
                                                                    allow: test.config.alertLocalizationAllow || _this2.config.alertLocalization.allow,
                                                                    deny: test.config.alertLocalizationDeny || _this2.config.alertLocalization.deny,
                                                                    confirmInfo: test.config.alertLocalizationConfirmInfo || _this2.config.alertLocalization.confirmInfo,
                                                                    title: test.config.alertLocalizationTitle || _this2.config.alertLocalization.title,
                                                                    info: test.config.alertLocalizationInfo || _this2.config.alertLocalization.info
                                                                }), _this2.api.setConfirmAlertTestId(_this2.config.confirmAlertTestId))
                                                            }
                                                            var language = (navigator.language || navigator.userLanguage || "").substr(0, 2);
                                                            if (_this2.config.alertLocalizationTranslations && language && _this2.config.alertLocalizationTranslations[language]) {
                                                                var translation = _this2.config.alertLocalizationTranslations[language];
                                                                translation.privacyPolicyUrl && (_this2.config.privacyPolicyUrl = translation)
                                                            }
                                                            _this2.config.channelTopics && _this2.config.channelTopics.length && (_this2.config.channelTopics = _this2.config.channelTopics.sort((function(e, t) {
                                                                return e.sort - t.sort
                                                            })));
                                                            var initSdk = function initSdk() {
                                                                promise_polyfill__WEBPACK_IMPORTED_MODULE_10__.Z.all([_this2.waitForInit(), initSubscriptionManager()]).then((function() {
                                                                    _utils_debug__WEBPACK_IMPORTED_MODULE_12__.cM.debug("Init done");
                                                                    var isMobile = "Android" === _utils_env__WEBPACK_IMPORTED_MODULE_17__.os.name || "iOS" === _utils_env__WEBPACK_IMPORTED_MODULE_17__.os.name || "mobile" === _utils_env__WEBPACK_IMPORTED_MODULE_17__.Uh.type,
                                                                        loadBell = _this2.config.showNotificationBell && (!isMobile || !_this2.config.hideNotificationBellMobile),
                                                                        importPromises = [Promise.all([__webpack_require__.e(5), __webpack_require__.e(944), __webpack_require__.e(720)]).then(__webpack_require__.bind(__webpack_require__, 7720))];
                                                                    loadBell && importPromises.push(Promise.all([__webpack_require__.e(34), __webpack_require__.e(407)]).then(__webpack_require__.bind(__webpack_require__, 9407))), promise_polyfill__WEBPACK_IMPORTED_MODULE_10__.Z.all(importPromises).then((function(_ref2) {
                                                                        var _ref3 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref2, 2),
                                                                            Confirm = _ref3[0].default,
                                                                            bellResult = _ref3[1];
                                                                        if (_this2.confirm = new Confirm(_this2, _this2.subscriptionManager), _this2.trigger(_const_event__WEBPACK_IMPORTED_MODULE_24__.Z.CONFIRM_AVAILABLE), _this2.subscriptionManager.setConfirm(_this2.confirm), loadBell) {
                                                                            var Bell = bellResult.default;
                                                                            _this2.bell = new Bell(_this2.config, _this2.subscriptionManager, _this2.api, _this2.confirm, _this2.trigger.bind(_this2), _this2.triggerOptIn.bind(_this2))
                                                                        }
                                                                        var fullScreenOptIn = isMobile;
                                                                        fullScreenOptIn && _this2.config.channelTopics && _this2.config.channelTopics.length && (_this2.config.confirmAlertSelectTopicsLater = !0);
                                                                        var isSafariMac = "Mac OS" === _utils_env__WEBPACK_IMPORTED_MODULE_17__.os.name && "Safari" === _utils_env__WEBPACK_IMPORTED_MODULE_17__.Xh.name;
                                                                        if ("PREVIEW" !== _this2.config.env && (_this2.config.showConfirmAlertMobile && !_this2.config.confirmAlertSelectTopicsLater && fullScreenOptIn && (_utils_debug__WEBPACK_IMPORTED_MODULE_12__.cM.debug("showConfirmAlert = true 2"), _this2.config.showConfirmAlert = !0), isSafariMac && (_utils_env__WEBPACK_IMPORTED_MODULE_17__.x_ > 12 || 12 === _utils_env__WEBPACK_IMPORTED_MODULE_17__.x_ && _utils_env__WEBPACK_IMPORTED_MODULE_17__.KK >= 1) && (_utils_debug__WEBPACK_IMPORTED_MODULE_12__.cM.debug("showConfirmAlert = true 3"), _this2.config.showConfirmAlert = !0, _this2.config.isSafari_12_1 = !0), "Firefox" === _utils_env__WEBPACK_IMPORTED_MODULE_17__.Xh.name && _utils_env__WEBPACK_IMPORTED_MODULE_17__.x_ >= 72 && (_utils_debug__WEBPACK_IMPORTED_MODULE_12__.cM.debug("showConfirmAlert = true 4"), _this2.config.showConfirmAlert = !0), "Edge" === _utils_env__WEBPACK_IMPORTED_MODULE_17__.Xh.name && _utils_env__WEBPACK_IMPORTED_MODULE_17__.x_ >= 84 && (_this2.config.showSilentPromptTutorial = !0, _this2.config.showConfirmAlert = !0)), _this2.config.confirmAlertHideChannelTopics || !_this2.config.isSafari_12_1 && (_this2.config.channelTopics || []).length && (fullScreenOptIn && !_this2.config.showConfirmAlertMobile || isSafariMac) && (_this2.config.confirmAlertSelectTopicsLater = !0), _this2.config.customAttributes && _this2.config.customAttributes.length && _this2.config.customAttributes.filter((function(e) {
                                                                                return !!e.askAfterOptIn
                                                                            })).length && (_this2.config.confirmAlertSelectAttributesLater = !0), _this2.config.confirmAlertDisabled && _this2.config.showConfirmAlert && (_this2.config.showConfirmAlert = !1), _this2.on(_const_event__WEBPACK_IMPORTED_MODULE_24__.Z.SUBSCRIBED, (function(e) {
                                                                                _utils_debug__WEBPACK_IMPORTED_MODULE_12__.cM.info("SUBSCRIBED fired"), _this2.bell && _this2.bell.reset(!0), _this2.confirm && _this2.confirm.hide(), _this2.initGoogleAnalytics(e)
                                                                            })), _this2.on(_const_event__WEBPACK_IMPORTED_MODULE_24__.Z.UNSUBSCRIBED, (function() {
                                                                                _this2.subscriptionManager.subscribed = !1, _this2.bell && _this2.bell.reset(!1)
                                                                            })), _this2.initWidgets(), _this2.initTagButtons(), _this2.initTopicButtons(), _this2.initPageBanners(), _this2.initTags(), _this2.initTopics(), _this2.initConversions(), _this2.initPiano(), _this2.subscriptionManager.isSubscribed().then((function(e) {
                                                                                _this2.bell && (_this2.bell.show(e), _this2.trigger(_const_event__WEBPACK_IMPORTED_MODULE_24__.Z.BELL_READY)), e && (_utils_debug__WEBPACK_IMPORTED_MODULE_12__.cM.debug("main subscribed = true"), _this2.subscriptionManager.subscribed = !0, _this2.subscriptionManager.iframeMessenger && _this2.subscriptionManager.getSubscriptionId().then((function(e) {
                                                                                    _this2.subscriptionManager.iframeMessenger.setSubscribed(e)
                                                                                })), _this2.subscriptionManager.getSubscriptionId().then((function(e) {
                                                                                    _this2.initGoogleAnalytics(e)
                                                                                })))
                                                                            })), _this2.config.trackSessions) try {
                                                                            _this2.waitForSubscription().then((function(e) {
                                                                                var t = _this2.subscriptionManager.storageManager.getLastSession(),
                                                                                    n = function() {
                                                                                        if (t && t.lastInteractionAt && t.startedAt && new Date(t.lastInteractionAt) < new Date(Date.now() - 108e3)) {
                                                                                            var n = Math.round((new Date(t.lastInteractionAt).getTime() - new Date(t.startedAt).getTime()) / 1e3);
                                                                                            n > 108e3 ? n = 108e3 : n < 0 && (n = 0), e && _this2.api.endSession(e, {
                                                                                                duration: n,
                                                                                                visits: t.visits
                                                                                            }), t = {}
                                                                                        }
                                                                                    };
                                                                                n(), t.startedAt && "true" === sessionStorage.getItem("cleverpush-session-counted") || (sessionStorage.setItem("cleverpush-session-counted", "true"), _this2.subscriptionManager.storageManager.getNotifications(1).then((function(t) {
                                                                                    _utils_debug__WEBPACK_IMPORTED_MODULE_12__.cM.info("getNotifications res", t);
                                                                                    var n = {};
                                                                                    t && t.length && t[0] && t[0].id && (n.lastNotificationId = t[0].id), e && _this2.api.startSession(e, n)
                                                                                })), t.startedAt = new Date, t.visits = 0), t.lastInteractionAt = new Date, t.visits += 1, _this2.subscriptionManager.storageManager.setLastSession(t), window.addEventListener("unload", (function() {
                                                                                    (t = _this2.subscriptionManager.storageManager.getLastSession()) && t.lastInteractionAt && t.startedAt && !(new Date(t.lastInteractionAt) >= new Date(Date.now() - 108e3)) || (t.lastInteractionAt = new Date), n(), _this2.subscriptionManager.storageManager.setLastSession(t)
                                                                                }), !1)
                                                                            }))
                                                                        } catch (e) {
                                                                            _utils_debug__WEBPACK_IMPORTED_MODULE_12__.cM.warn(e)
                                                                        }
                                                                        if (_this2.config.confirmAlertFilters && _this2.config.confirmAlertFilters.length && "PREVIEW" !== _this2.config.env) {
                                                                            var applyFilter = function(e) {
                                                                                void 0 !== e.autoRegister && (_this2.config.autoRegister = e.autoRegister), void 0 !== e.minimumVisits && (_this2.config.alertMinimumVisits = e.minimumVisits), void 0 !== e.scrollPercentage && (_this2.config.alertScrollPercentage = e.scrollPercentage), void 0 !== e.timeout && (_this2.config.alertTimeout = 1e3 * e.timeout), void 0 !== e.localizationTitle && (_this2.config.alertLocalization = Object.assign({}, _this2.config.alertLocalization, {
                                                                                    title: e.localizationTitle
                                                                                })), void 0 !== e.localizationInfo && (_this2.config.alertLocalization = Object.assign({}, _this2.config.alertLocalization, {
                                                                                    info: e.localizationInfo
                                                                                })), void 0 !== e.radioButtonTopics && (_this2.config.confirmAlertRadioButtonTopics = e.radioButtonTopics), void 0 !== e.requireTopics && (_this2.config.confirmAlertRequireChannelTopics = e.requireTopics), void 0 !== e.nativeTheme && (_this2.config.confirmAlertNativeTheme = e.nativeTheme), void 0 !== e.customCss && (_this2.config.customCss || (_this2.config.customCss = ""), _this2.config.customCss += e.customCss), "object" === _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_3___default()(e.config) && (Object.keys(e.config || {}).forEach((function(t) {
                                                                                    if ("alertLocalization" === t) _this2.config[t] = Object.assign({}, _this2.config[t], e.config[t]);
                                                                                    else if (0 === t.indexOf("alertLocalization")) {
                                                                                        _this2.config.alertLocalization || (_this2.config.alertLocalization = {});
                                                                                        var n = t.substr("alertLocalization".length);
                                                                                        _this2.config.alertLocalization[n.substr(0, 1).toLowerCase() + n.substr(1)] = e.config[t]
                                                                                    } else "serviceWorkerPath" === t ? _this2.config.serviceWorkerFile = e.config[t] : "customCss" === t ? (_this2.config.customCss || (_this2.config.customCss = ""), _this2.config.customCss += e.config.customCss) : _this2.config[t] = e.config[t]
                                                                                })), e.config.alertTimeout && e.config.alertTimeout < 1e3 && (_this2.config.alertTimeout = 1e3 * e.config.alertTimeout))
                                                                            };
                                                                            _this2.config.confirmAlertFilters.forEach((function(filter) {
                                                                                if ("device" === filter.type && ("desktop" === filter.value && "mobile" !== _utils_env__WEBPACK_IMPORTED_MODULE_17__.Uh.type || "mobile" === filter.value && "mobile" === _utils_env__WEBPACK_IMPORTED_MODULE_17__.Uh.type || "bot" === filter.value && /bot|google|baidu|bing|msn|duckduckbot|teoma|slurp|yandex/i.test(navigator.userAgent)) && applyFilter(filter), "referrer" === filter.type && (_this2.referrer && new RegExp(filter.value).test(_this2.referrer) || document.referrer && new RegExp(filter.value).test(document.referrer)) && applyFilter(filter), "path" === filter.type && location.pathname && new RegExp(filter.value).test(location.pathname) && applyFilter(filter), "function" === filter.type && filter.value) try {
                                                                                    var matches = !!eval(filter.value);
                                                                                    matches && applyFilter(filter)
                                                                                } catch (e) {
                                                                                    _utils_debug__WEBPACK_IMPORTED_MODULE_12__.cM.debug(e)
                                                                                }
                                                                                "userAgent" === filter.type && navigator.userAgent && new RegExp(filter.value).test(navigator.userAgent) && applyFilter(filter), "host" === filter.type && location.hostname && new RegExp(filter.value).test(location.hostname) && applyFilter(filter), "utmSource" === filter.type && window.location.search && window.location.search.indexOf("utm_source=" + filter.value) > -1 && applyFilter(filter), "utmMedium" === filter.type && window.location.search && window.location.search.indexOf("utm_medium=" + filter.value) > -1 && applyFilter(filter), "utmCampaign" === filter.type && window.location.search && window.location.search.indexOf("utm_campaign=" + filter.value) > -1 && applyFilter(filter)
                                                                            }))
                                                                        }
                                                                        if (_this2.config.customCss) {
                                                                            var node = document.createElement("style");
                                                                            node.innerHTML = _this2.config.customCss + _const_customCssOverrides__WEBPACK_IMPORTED_MODULE_23__.Z, document.body.appendChild(node)
                                                                        }
                                                                        if (_this2.config.customJs) try {
                                                                            eval(_this2.config.customJs)
                                                                        } catch (e) {
                                                                            _utils_debug__WEBPACK_IMPORTED_MODULE_12__.cM.debug(e)
                                                                        }
                                                                        if (_this2.autoTriggerOptIn(), _this2.initialized = !0, _this2.initCalled = !1, callback(!1, !0), _this2.config.exitIntentOptIn && __webpack_require__.e(499).then(__webpack_require__.t.bind(__webpack_require__, 5499, 23)).then((function(e) {
                                                                                (0, e.default)(null, {
                                                                                    aggressive: !0,
                                                                                    callback: function() {
                                                                                        var e = !0;
                                                                                        try {
                                                                                            var t = localStorage.getItem("cleverpush-exit-intent-shown");
                                                                                            if (t) {
                                                                                                var n = parseInt(t, _const_common__WEBPACK_IMPORTED_MODULE_26__.Z);
                                                                                                !isNaN(n) && n + 864e5 > Date.now() && (e = !1)
                                                                                            }
                                                                                        } catch (e) {}
                                                                                        e && (_this2.config.exitIntentOncePerSession && localStorage.setItem("cleverpush-exit-intent-shown", Date.now() + ""), _this2.subscriptionManager.isSubscribed().then((function(e) {
                                                                                            e || _this2.triggerOptIn(!0)
                                                                                        })))
                                                                                    }
                                                                                })
                                                                            })), (0, _utils_env__WEBPACK_IMPORTED_MODULE_17__.MD)() && window.location.hash && 0 === window.location.hash.indexOf("#cleverPushScroll=")) {
                                                                            var split = window.location.hash.split("=");
                                                                            if (split.length > 1) {
                                                                                var scrollPercent = parseInt(split[1].split("?")[0], _const_common__WEBPACK_IMPORTED_MODULE_26__.Z);
                                                                                scrollPercent && window.scrollTo(0, scrollPercent)
                                                                            }
                                                                        }
                                                                        if ((0, _utils_env__WEBPACK_IMPORTED_MODULE_17__.MD)() && "undefined" != typeof URLSearchParams) {
                                                                            if (location.search && location.search.length) {
                                                                                var _params = new URLSearchParams(location.search.slice(1));
                                                                                "true" === _params.get("cleverPushBypassInactiveFollowUps") && (_this2.config.bypassInactiveFollowUps = !0);
                                                                                var importedSubscriptionId = _params.get("cleverPushOnesignalSubscriptionId") || _params.get("cleverPushAccengageSubscriptionId") || _params.get("cleverPushImportedSubscriptionId") || localStorage.getItem("cleverpush-onesignal-subscription-id") || localStorage.getItem("cleverpush-imported-subscription-id");
                                                                                if ("true" === _params.get("cleverPushDebugRedirect")) {
                                                                                    var subdomain = _this2.config.subdomain || _this2.config.channelSubdomain;
                                                                                    if (subdomain) {
                                                                                        var status = {
                                                                                                worker: null,
                                                                                                workerScope: null,
                                                                                                notification: (window.Notification || {}).permission,
                                                                                                localStorage: {
                                                                                                    "cleverpush-subscription-id": localStorage.getItem("cleverpush-subscription-id"),
                                                                                                    "cleverpush-subscription-id-old": localStorage.getItem("cleverpush-subscription-id-old"),
                                                                                                    "cleverpush-subscription-status": localStorage.getItem("cleverpush-subscription-status"),
                                                                                                    "cleverpush-last-sync": localStorage.getItem("cleverpush-last-sync"),
                                                                                                    "cleverpush-last-worker-update": localStorage.getItem("cleverpush-last-worker-update"),
                                                                                                    "cleverpush-last-worker-version": localStorage.getItem("cleverpush-last-worker-version"),
                                                                                                    "cleverpush-visits": localStorage.getItem("cleverpush-visits"),
                                                                                                    "cleverpush-close-time": localStorage.getItem("cleverpush-close-time"),
                                                                                                    "cleverpush-deny-time": localStorage.getItem("cleverpush-deny-time"),
                                                                                                    "cleverpush-topics": localStorage.getItem("cleverpush-topics"),
                                                                                                    "cleverpush-tags": localStorage.getItem("cleverpush-tags")
                                                                                                }
                                                                                            },
                                                                                            redirect = function() {
                                                                                                location.href = "https://".concat(subdomain, ".").concat(_this2.config.cleverpushDomain || "cleverpush.com", "/debug?status=").concat(encodeURIComponent(JSON.stringify(status)))
                                                                                            },
                                                                                            registrationCount = 0;
                                                                                        navigator.serviceWorker.getRegistrations().then((function(e) {
                                                                                            e.length || redirect(), e.forEach((function(t, n) {
                                                                                                var i = _this2.subscriptionManager.getServiceWorker(t);
                                                                                                t.pushManager.getSubscription().then((function(t) {
                                                                                                    status["worker" + n + "Url"] = i.scriptURL, status["worker" + n + "Subscription"] = JSON.stringify(t), (registrationCount += 1) >= e.length && redirect()
                                                                                                })).catch((function() {
                                                                                                    (registrationCount += 1) >= e.length && redirect()
                                                                                                }))
                                                                                            }))
                                                                                        })).catch(redirect)
                                                                                    }
                                                                                } else if ("true" === _params.get("cleverPushSubscriptionIdAlert")) _this2.subscriptionManager.isSubscribed().then((function(e) {
                                                                                    e ? _this2.waitForSubscription().then((function(e) {
                                                                                        prompt("CleverPush Subscription ID:", e)
                                                                                    })) : alert("Dieser Browser ist keinem Push Abonnement zugeordnet.")
                                                                                }));
                                                                                else if ("true" === _params.get("cleverPushUnsubscribe")) {
                                                                                    var _subdomain = _this2.config.subdomain || _this2.config.channelSubdomain;
                                                                                    _subdomain && _this2.subscriptionManager.getSubscriptionId().then((function(e) {
                                                                                        _this2.unsubscribe((function() {
                                                                                            location.href = "https://".concat(_subdomain, ".").concat(_this2.config.cleverpushDomain || "cleverpush.com", "/unsubscribe?subscriptionId=").concat(e)
                                                                                        }))
                                                                                    }))
                                                                                } else if ("true" === _params.get("cleverPushTestSubscription")) _this2.api.testSubscription = !0, _this2.subscriptionManager.sync().then((function() {
                                                                                    alert("Subscription has been successfully marked as Test Subscription.")
                                                                                }));
                                                                                else if (_params.get("cleverPushNotificationId")) _this2.subscriptionManager.setClickedNotification(_params.get("cleverPushNotificationId")), sessionStorage.setItem("cleverpush-notification-id", _params.get("cleverPushNotificationId"));
                                                                                else if (importedSubscriptionId) localStorage.setItem("cleverpush-imported-subscription-id", importedSubscriptionId), _this2.waitForSubscription().then((function(e) {
                                                                                    e && e !== importedSubscriptionId && (_this2.api.unsubscribe(importedSubscriptionId), localStorage.removeItem("cleverpush-imported-subscription-id"), localStorage.removeItem("cleverpush-onesignal-subscription-id"))
                                                                                }));
                                                                                else if ("true" === _params.get("cleverPushOptIn")) {
                                                                                    var tags;
                                                                                    if (_params.get("cleverPushTags")) {
                                                                                        tags = _params.get("cleverPushTags").split(",");
                                                                                        var existingText = "Du hast dieses Thema bereits abonniert",
                                                                                            keepText = "Klicke auf [OK] um fortzufahren oder auf [Abbrechen] um dieses Thema zu deabonnieren.",
                                                                                            successText = "Du hast dieses Thema erfolgreich abonniert",
                                                                                            notSubscribed = function() {
                                                                                                tags.forEach((function(e) {
                                                                                                    _this2.tagSubscription(e)
                                                                                                })), _this2.subscribe((function(e) {
                                                                                                    e && "denied" === e.reason ? _this2.subscriptionManager.confirm && _this2.subscriptionManager.confirm.showBackdrop(void 0, "denied", (0, _utils_translate__WEBPACK_IMPORTED_MODULE_19__.I)("popup.info").formatCleverPush("<strong>" + ((0, _utils_translate__WEBPACK_IMPORTED_MODULE_19__.I)("confirm.allowBrowser") || (0, _utils_translate__WEBPACK_IMPORTED_MODULE_19__.I)("confirm.allow")) + "</strong>")) : alert(successText)
                                                                                                }))
                                                                                            };
                                                                                        _this2.subscriptionManager.isSubscribed().then((function(e) {
                                                                                            e ? _this2.waitForSubscription().then((function() {
                                                                                                _this2.subscriptionManager.storageManager.getTags().then((function(e) {
                                                                                                    (e || []).filter((function(e) {
                                                                                                        return tags.indexOf(e) > -1
                                                                                                    })).length >= tags.length ? confirm("".concat(existingText, "\n\n").concat(keepText)) || tags.forEach((function(e) {
                                                                                                        _this2.untagSubscription(e)
                                                                                                    })) : (alert(successText), tags.forEach((function(e) {
                                                                                                        _this2.tagSubscription(e)
                                                                                                    })))
                                                                                                }))
                                                                                            })) : notSubscribed()
                                                                                        })).catch((function() {
                                                                                            notSubscribed()
                                                                                        }))
                                                                                    } else _this2.subscriptionManager.isSubscribed().then((function(e) {
                                                                                        e ? _this2.waitForSubscription().then((function() {
                                                                                            _this2.subscriptionManager.storageManager.getTopics().then((function(e) {
                                                                                                var t = (_this2.config.channelTopics || []).filter((function(e) {
                                                                                                    var t = !0;
                                                                                                    return t && e.matchPath && e.matchPath.length && (t = new RegExp(e.matchPath).test(window.parent.location.pathname)), t && e.notMatchPath && e.notMatchPath.length && (t = !new RegExp(e.notMatchPath).test(window.parent.location.pathname)), t
                                                                                                }));
                                                                                                _this2.config.confirmAlertHideChannelTopics || (e || []).length >= (t || []).length ? alert((0, _utils_translate__WEBPACK_IMPORTED_MODULE_19__.I)("confirm.alreadySubscribed")) : ((_this2.config.alertLocalization || {}).title = (0, _utils_translate__WEBPACK_IMPORTED_MODULE_19__.I)("confirm.selectTopics"), (_this2.config.alertLocalization || {}).info = " ", (_this2.config.alertLocalization || {}).allow = (0, _utils_translate__WEBPACK_IMPORTED_MODULE_19__.I)("panel.save"), _this2.confirm && (_this2.confirm.subscribedTopics = e), _this2.triggerOptIn(!0))
                                                                                            }))
                                                                                        })) : _this2.triggerOptIn(!0, (function(e) {
                                                                                            e && "denied" === e.reason && _this2.subscriptionManager.confirm && _this2.subscriptionManager.confirm.showBackdrop(void 0, "denied", (0, _utils_translate__WEBPACK_IMPORTED_MODULE_19__.I)("popup.info").formatCleverPush("<strong>" + ((0, _utils_translate__WEBPACK_IMPORTED_MODULE_19__.I)("confirm.allowBrowser") || (0, _utils_translate__WEBPACK_IMPORTED_MODULE_19__.I)("confirm.allow")) + "</strong>"))
                                                                                        }))
                                                                                    })).catch((function(e) {
                                                                                        _this2.triggerOptIn(!0, (function(e) {
                                                                                            e && "denied" === e.reason && _this2.subscriptionManager.confirm && _this2.subscriptionManager.confirm.showBackdrop(void 0, "denied", (0, _utils_translate__WEBPACK_IMPORTED_MODULE_19__.I)("popup.info").formatCleverPush("<strong>" + ((0, _utils_translate__WEBPACK_IMPORTED_MODULE_19__.I)("confirm.allowBrowser") || (0, _utils_translate__WEBPACK_IMPORTED_MODULE_19__.I)("confirm.allow")) + "</strong>"))
                                                                                        }))
                                                                                    }))
                                                                                } else "true" === _params.get("cleverPushShowBell") && (_this2.config.hideNotificationBellSubscribed = !1, _this2.config.hideNotificationBellMobile = !1, _this2.config.showNotificationBell = !0);
                                                                                _params.get("cleverPushReferralSubscriptionId") && !sessionStorage.getItem("cleverpush-referral-subscription-id") && sessionStorage.setItem("cleverpush-referral-subscription-id", _params.get("cleverPushReferralSubscriptionId"));
                                                                                var clickedFollowUpCampaignId = _params.get("cleverPushFollowUpCampaignId") || sessionStorage.getItem("cleverPushFollowUpCampaignId");
                                                                                clickedFollowUpCampaignId && (sessionStorage.setItem("cleverPushFollowUpCampaignId", clickedFollowUpCampaignId), _this2.config.clickedFollowUpCampaignId = clickedFollowUpCampaignId);
                                                                                var cleverPushVoucherCode = _params.get("cleverPushVoucherCode");
                                                                                cleverPushVoucherCode && __webpack_require__.e(411).then(__webpack_require__.bind(__webpack_require__, 3411)).then((function(e) {
                                                                                    var t = e.default;
                                                                                    _this2.config.cleverPushVoucherCode = cleverPushVoucherCode, new t({
                                                                                        title: (0, _utils_translate__WEBPACK_IMPORTED_MODULE_19__.I)("voucherpool.title"),
                                                                                        text: (0, _utils_translate__WEBPACK_IMPORTED_MODULE_19__.I)("voucherpool.text")
                                                                                    }, _this2.config, _this2.subscriptionManager, _this2.api, "voucher").show()
                                                                                }))
                                                                            }
                                                                            if (location.hash && 0 === location.hash.indexOf("#?")) {
                                                                                var hashParams = new URLSearchParams(location.hash.slice(2)),
                                                                                    notificationId = hashParams.get("cleverPushNotificationId");
                                                                                notificationId && (_this2.subscriptionManager.setClickedNotification(notificationId), sessionStorage.setItem("cleverpush-notification-id", notificationId))
                                                                            }
                                                                        } else sessionStorage.getItem("cleverPushFollowUpCampaignId") && (_this2.config.clickedFollowUpCampaignId = sessionStorage.getItem("cleverPushFollowUpCampaignId"));
                                                                        if (_this2.initFollowUpCampaigns(), _this2.config.trackNotificationSessions) try {
                                                                            _this2.waitForSubscription().then((function(e) {
                                                                                var t = "undefined" != typeof sessionStorage ? sessionStorage.getItem("cleverpush-notification-id") : void 0;
                                                                                t && _this2.api.trackSessionImpression(e, t)
                                                                            }))
                                                                        } catch (e) {
                                                                            _utils_debug__WEBPACK_IMPORTED_MODULE_12__.cM.warn(e)
                                                                        }
                                                                        var currentPathname = location.pathname;
                                                                        _this2.config.detectLocationIntervalEnabled && setInterval((function() {
                                                                            location.pathname !== currentPathname && (_utils_debug__WEBPACK_IMPORTED_MODULE_12__.cM.debug("Location change detected"), _this2.initFollowUpCampaigns(), _this2.initConversions(), currentPathname = location.pathname)
                                                                        }), 250)
                                                                    }))
                                                                }))
                                                            };
                                                            _this2.config.initSdkBeforeOnLoad, (0, _utils_dom__WEBPACK_IMPORTED_MODULE_13__.AE)().then(initSdk).catch((function(e) {
                                                                callback(e)
                                                            }))
                                                        }
                                                    })).catch((function(e) {
                                                        _this2.initPageBanners();
                                                        for (var t = document.querySelectorAll(".cleverpush-hide-unsupported"), n = 0; n < t.length; n += 1) {
                                                            t[n].style.display = "none"
                                                        }
                                                        e.warn = !0, callback(e)
                                                    }))
                                                } else callback(new _error_CleverPushError__WEBPACK_IMPORTED_MODULE_25__.Z("`channelId` or `channelName` not found in config.", "invalid-config"))
                                            })).catch((function(e) {
                                                callback(e)
                                            }))
                                        } else if ((0, _utils_env__WEBPACK_IMPORTED_MODULE_17__.cL)(configParam) || (0, _utils_env__WEBPACK_IMPORTED_MODULE_17__.CO)(configParam) || "POPUP" === configParam.env) {
                                            if (this.config = configParam, "undefined" != typeof URLSearchParams && location.search && location.search.length) {
                                                var params = new URLSearchParams(location.search.slice(1));
                                                params.get("confirmAlertTestId") && (this.config.confirmAlertTestId = params.get("confirmAlertTestId"), this.api.setConfirmAlertTestId(this.config.confirmAlertTestId))
                                            }
                                            initSubscriptionManager(), _utils_debug__WEBPACK_IMPORTED_MODULE_12__.cM.debug("Init done"), this.initialized = !0, this.initCalled = !1, callback(!1, !0)
                                        }
                                    }
                                else callback(new _error_CleverPushError__WEBPACK_IMPORTED_MODULE_25__.Z("Required attribute `channelId` in `config` not given.", "invalid-config"))
                            }
                        }, {
                            key: "autoTriggerOptIn",
                            value: function() {
                                var e = this,
                                    t = this.subscriptionManager.storageManager.getVisits(),
                                    n = !1,
                                    i = function() {
                                        if (!n) {
                                            n = !0;
                                            var i = function() {
                                                t >= e.config.alertMinimumVisits && (setTimeout((function() {
                                                    e.config.preventDuplicateOptIns && e.config.androidPackageName && "getInstalledRelatedApps" in navigator ? navigator.getInstalledRelatedApps().then((function(t) {
                                                        var n = !1;
                                                        t && t.forEach((function(t) {
                                                            t.id === e.config.androidPackageName && (n = !0)
                                                        })), n || (sessionStorage.setItem("cleverpush-alert-shown", "true"), e.triggerOptIn())
                                                    })) : (sessionStorage.setItem("cleverpush-alert-shown", "true"), e.triggerOptIn())
                                                }), e.config.alertTimeout), e.optInVisitorTracked || e.subscriptionManager.canSubscribe().then((function(t) {
                                                    !0 !== t || e.optInVisitorTracked || (e.optInVisitorTracked = !0, e.api.trackOptInVisitor())
                                                })).catch((function(e) {})))
                                            };
                                            e.config.alertOncePerSession ? "true" !== sessionStorage.getItem("cleverpush-alert-shown") && i() : i()
                                        }
                                    },
                                    r = function() {
                                        if (e.config.optInWaitForTcfDecision && "function" == typeof __tcfapi) {
                                            var t = !1,
                                                n = function() {
                                                    e.config.tcfRequireVendorConsent && e.config.tcfVendorId ? __tcfapi("getCustomVendorConsents", 2, (function(n) {
                                                        n.grants[e.config.tcfVendorId].vendorGrant ? (t = !0, _utils_debug__WEBPACK_IMPORTED_MODULE_12__.cM.debug("__tcfapi has vendor consent, starting opt in", n), i()) : _utils_debug__WEBPACK_IMPORTED_MODULE_12__.cM.debug("__tcfapi no vendor consent!", n)
                                                    })) : (t = !0, i())
                                                };
                                            __tcfapi("getTCData", 2, (function(e, i) {
                                                _utils_debug__WEBPACK_IMPORTED_MODULE_12__.cM.debug("__tcfapi getTCData", e), i && e.tcString && "cmpuishown" !== e.eventStatus ? n() : __tcfapi("addEventListener", 2, (function(e) {
                                                    _utils_debug__WEBPACK_IMPORTED_MODULE_12__.cM.debug("__tcfapi tcData event", e), !t && e.tcString && "cmpuishown" !== e.eventStatus && n()
                                                }))
                                            }))
                                        } else e.config.optInWaitForTcfDecision && _utils_debug__WEBPACK_IMPORTED_MODULE_12__.cM.debug("__tcfapi not found"), i()
                                    };
                                if (this.config.autoRegister)
                                    if ("PREVIEW" === this.config.env) this.triggerOptIn();
                                    else {
                                        if (!isNaN(this.config.alertScrollPercentage) && this.config.alertScrollPercentage > 0) {
                                            var o, a = function() {
                                                (0, _utils_env__WEBPACK_IMPORTED_MODULE_17__.r0)() >= e.config.alertScrollPercentage && (window.removeEventListener("scroll", o), r())
                                            };
                                            o = window.addEventListener("scroll", a), a()
                                        } else r();
                                        this.config.alertMinimumVisits && this.config.alertMinimumVisits > 0 && this.subscriptionManager.storageManager.incrementVisits()
                                    }
                                this.config.showConfirmAlert && this.config.disableConfirmAlertSearchTraffic && this.referrer && /google|bing|yahoo|baidu|duckduckgo|wolframalpha/.test(this.referrer) && (this.config.showConfirmAlert = !1), this.on(_const_event__WEBPACK_IMPORTED_MODULE_24__.Z.PERMISSION_RE_GRANTED, (function() {
                                    e.config.autoRegister && r()
                                }))
                            }
                        }, {
                            key: "initHttpIframe",
                            value: function(e) {
                                (0, _utils_debug__WEBPACK_IMPORTED_MODULE_12__.tI)("initHttpIframe", e), this.init(e)
                            }
                        }, {
                            key: "initWidget",
                            value: function(e) {
                                (0, _utils_debug__WEBPACK_IMPORTED_MODULE_12__.tI)("initWidget", e), this.init(Object.assign({}, e, {
                                    env: "WIDGET"
                                }))
                            }
                        }, {
                            key: "initHttpPopup",
                            value: function(e) {
                                var t = this;
                                (0, _utils_debug__WEBPACK_IMPORTED_MODULE_12__.tI)("initHttpPopup", e), e.env = "POPUP", "Firefox" === _utils_env__WEBPACK_IMPORTED_MODULE_17__.Xh.name && _utils_env__WEBPACK_IMPORTED_MODULE_17__.x_ >= 72 && (e.showConfirmAlert = !0, e.showConfirmAlertForce = !0), e.loadConfigFromParent && (e.loadConfig = !1), _utils_debug__WEBPACK_IMPORTED_MODULE_12__.cM.debug("initHttpPopup calling init???"), this.init(e, (function(e) {
                                    if (e) {
                                        _utils_debug__WEBPACK_IMPORTED_MODULE_12__.cM.error("initHttpPopup err", e);
                                        var n = document.getElementById("status");
                                        n ? n.innerText = e.message || e.reason || e : window.opener ? window.close() : history.back()
                                    } else "Firefox" === _utils_env__WEBPACK_IMPORTED_MODULE_17__.Xh.name && _utils_env__WEBPACK_IMPORTED_MODULE_17__.x_ >= 72 && Promise.all([__webpack_require__.e(5), __webpack_require__.e(944), __webpack_require__.e(720)]).then(__webpack_require__.bind(__webpack_require__, 7720)).then((function(e) {
                                        var n = e.default;
                                        _utils_debug__WEBPACK_IMPORTED_MODULE_12__.cM.debug("showConfirmAlert = true 5"), t.config.showConfirmAlert = !0, t.config.showConfirmAlertForce = !0, t.confirm = new n(t, t.subscriptionManager), t.subscriptionManager.setConfirm(t.confirm), (0, _utils_dom__WEBPACK_IMPORTED_MODULE_13__.$k)().then((function() {
                                            t.confirm.appendConfirmBox("".concat(t.config.confirmAlertNativeTheme, " ").concat(t.config.confirmAlertNativeTheme, "-native")), t.confirm.denyButton && (t.confirm.denyButton.style.display = "none");
                                            var e = t.confirm.confirmBox.querySelector(".cleverpush-confirm-info");
                                            e && (e.style.display = "none")
                                        }))
                                    })), window.onbeforeunload = function() {
                                        return (0, _utils_translate__WEBPACK_IMPORTED_MODULE_19__.I)("windowclose.confirm")
                                    }
                                }))
                            }
                        }, {
                            key: "initContentButtons",
                            value: function() {
                                return this.initWidgets()
                            }
                        }, {
                            key: "initWidgets",
                            value: function() {
                                var e = this;
                                (0, _utils_debug__WEBPACK_IMPORTED_MODULE_12__.tI)("initWidgets"), this.widgets = this.widgets || [], (this.config.widgets || []).filter((function(e) {
                                    return "selector" === e.autoAppendType
                                })).forEach((function(e) {
                                    try {
                                        if (e.autoAppendPath && !new RegExp(e.pageBannerMatchPath).test(window.location.pathname)) return;
                                        if (e.autoAppendSelector) {
                                            var t = document.querySelector(e.autoAppendSelector);
                                            if (t) {
                                                var n = document.createElement("div");
                                                n.className = "cleverpush-widget", n.dataset.id = e._id, e.autoAppendPosition && "top" !== e.autoAppendPosition ? "bottom" === e.autoAppendPosition && t.appendChild(n) : t.insertBefore(n, t.firstChild)
                                            }
                                        }
                                    } catch (e) {
                                        _utils_debug__WEBPACK_IMPORTED_MODULE_12__.cM.warn("Failed appending widget", e)
                                    }
                                }));
                                var t = document.querySelectorAll(".cleverpush-content-button, .cleverpush-widget");
                                t.length && Promise.all([__webpack_require__.e(5), __webpack_require__.e(789)]).then(__webpack_require__.bind(__webpack_require__, 8789)).then((function(n) {
                                    for (var i = n.default, r = function(n) {
                                            var r = t[n],
                                                o = new i(n, r, e.config, e.subscriptionManager, e.api);
                                            e.on(_const_event__WEBPACK_IMPORTED_MODULE_24__.Z.SUBSCRIBED, (function() {
                                                o.show(!0)
                                            })), e.on(_const_event__WEBPACK_IMPORTED_MODULE_24__.Z.TOPICS_SET, (function() {
                                                o.show(!0)
                                            })), e.on(_const_event__WEBPACK_IMPORTED_MODULE_24__.Z.UNSUBSCRIBED, (function() {
                                                o.show(!1)
                                            })), e.waitForInit().then((function() {
                                                e.subscriptionManager.isSubscribed().then((function(e) {
                                                    if (o.show(e), o.elementConfig.id && o.element)
                                                        if ((0, _utils_dom__WEBPACK_IMPORTED_MODULE_13__.v4)(o.element)) o.trackShown();
                                                        else {
                                                            window.addEventListener("scroll", (function e() {
                                                                (0, _utils_dom__WEBPACK_IMPORTED_MODULE_13__.v4)(o.element) && (window.removeEventListener("scroll", e), o.trackShown())
                                                            }), !1)
                                                        }
                                                }))
                                            })), e.widgets.push(o)
                                        }, o = 0; o < t.length; o += 1) r(o)
                                }))
                            }
                        }, {
                            key: "initMultiPlatformWidgets",
                            value: function() {
                                var e = this;
                                (0, _utils_debug__WEBPACK_IMPORTED_MODULE_12__.tI)("initMultiPlatformWidgets"), this.multiPlatformWidgets = this.multiPlatformWidgets || [];
                                var t = document.querySelectorAll(".cleverpush-multi-platform-widget");
                                t.length && __webpack_require__.e(491).then(__webpack_require__.bind(__webpack_require__, 7491)).then((function(n) {
                                    for (var i = n.default, r = function(n) {
                                            var r = t[n],
                                                o = new i(n, r, e.config, e.subscriptionManager, e.api);
                                            e.on(_const_event__WEBPACK_IMPORTED_MODULE_24__.Z.SUBSCRIBED, (function() {
                                                o.reset("facebook" !== e.browserType, !0)
                                            })), e.on(_const_event__WEBPACK_IMPORTED_MODULE_24__.Z.UNSUBSCRIBED, (function() {
                                                o.reset("facebook" !== e.browserType, !1)
                                            })), e.waitForInit().then((function() {
                                                r && r.dataset && "web-push" === r.dataset.platform && "facebook" === e.browserType ? o.show(!1, !1) : (o.subscriptionManager = e.subscriptionManager, e.subscriptionManager.isSubscribed().then((function(t) {
                                                    o.show("facebook" !== e.browserType, t)
                                                })).catch((function() {
                                                    o.show("facebook" !== e.browserType, !1)
                                                })))
                                            })).catch((function() {
                                                o.show(!1, !1)
                                            })), e.multiPlatformWidgets.push(o)
                                        }, o = 0; o < t.length; o += 1) r(o)
                                }))
                            }
                        }, {
                            key: "initTagButtons",
                            value: function() {
                                var e = this;
                                (0, _utils_debug__WEBPACK_IMPORTED_MODULE_12__.tI)("initTagButtons"), this.tagButtons = this.tagButtons || [];
                                var t = document.querySelectorAll(".cleverpush-tag-button");
                                t.length && __webpack_require__.e(737).then(__webpack_require__.bind(__webpack_require__, 5737)).then((function(n) {
                                    for (var i = n.default, r = function(n) {
                                            var r = t[n],
                                                o = new i(n, r, e.config, e.subscriptionManager, e.api, e.triggerOptIn.bind(e));
                                            e.on(_const_event__WEBPACK_IMPORTED_MODULE_24__.Z.SUBSCRIBED, (function() {
                                                o.reset(!0)
                                            })), e.on(_const_event__WEBPACK_IMPORTED_MODULE_24__.Z.UNSUBSCRIBED, (function() {
                                                o.reset(!1)
                                            })), e.tagButtons.push(o)
                                        }, o = 0; o < t.length; o += 1) r(o)
                                }))
                            }
                        }, {
                            key: "initTopicButtons",
                            value: function() {
                                var e = this;
                                (0, _utils_debug__WEBPACK_IMPORTED_MODULE_12__.tI)("initTopicButtons"), this.topicButtons = this.topicButtons || [];
                                var t = document.querySelectorAll(".cleverpush-topic-button");
                                t.length && __webpack_require__.e(600).then(__webpack_require__.bind(__webpack_require__, 5600)).then((function(n) {
                                    for (var i = n.default, r = function(n) {
                                            var r = t[n],
                                                o = new i(n, r, e.config, e.subscriptionManager, e.api, e.triggerOptIn.bind(e));
                                            e.on(_const_event__WEBPACK_IMPORTED_MODULE_24__.Z.SUBSCRIBED, (function() {
                                                o.reset(!0)
                                            })), e.on(_const_event__WEBPACK_IMPORTED_MODULE_24__.Z.TOPICS_SET, (function() {
                                                o.init()
                                            })), e.on(_const_event__WEBPACK_IMPORTED_MODULE_24__.Z.UNSUBSCRIBED, (function() {
                                                o.reset(!1)
                                            })), e.topicButtons.push(o)
                                        }, o = 0; o < t.length; o += 1) r(o)
                                }))
                            }
                        }, {
                            key: "initPageBanners",
                            value: function() {
                                var e, t = this;
                                (0, _utils_debug__WEBPACK_IMPORTED_MODULE_12__.tI)("initPageBanners"), this.pageBanners = this.pageBanners || [], this.subscriptionManager && this.subscriptionManager.storageManager && (e = this.subscriptionManager.storageManager), (this.config.pageBannerNotifications || []).reduce((function(t, n) {
                                    return t.then((function(t) {
                                        return new promise_polyfill__WEBPACK_IMPORTED_MODULE_10__.Z((function(i) {
                                            e ? e.getNotification(n._id).then((function(e) {
                                                i(e ? t : t.concat(n))
                                            })).catch((function() {
                                                i(t.concat(n))
                                            })) : i(t.concat(n))
                                        }))
                                    }))
                                }), promise_polyfill__WEBPACK_IMPORTED_MODULE_10__.Z.resolve([])).then((function(n) {
                                    n.length && __webpack_require__.e(411).then(__webpack_require__.bind(__webpack_require__, 3411)).then((function(i) {
                                        var r = i.default;
                                        n.forEach((function(n) {
                                            var i = new r(n, t.config, t.subscriptionManager, t.api);
                                            if ((!n.scheduledAt || n.scheduledAt && n.scheduledAt < new Date) && (!n.expiresAt || n.expiresAt > new Date)) {
                                                var o = !0;
                                                o && n.pageBannerMatchPath && (o = new RegExp(n.pageBannerMatchPath).test(window.location.pathname)), o && n.pageBannerNotMatchPath && (o = !new RegExp(n.pageBannerNotMatchPath).test(window.location.pathname)), o && (i.show(), e && (i.onClickCallback = function() {
                                                    return e.addNotification({
                                                        id: n._id,
                                                        url: n.url,
                                                        title: n.title,
                                                        text: n.text,
                                                        icon: n.iconUrl,
                                                        media: n.mediaUrl,
                                                        autoHide: n.autoHide,
                                                        subscriptionId: "",
                                                        channelId: t.config.channelId,
                                                        scheduledAt: n.scheduledAt,
                                                        createdAt: n.createdAt,
                                                        expiresAt: n.expiresAt,
                                                        clicked: 0,
                                                        markedAsDelivered: 1
                                                    })
                                                }))
                                            }
                                            t.pageBanners.push(i)
                                        }))
                                    }))
                                })), this.config.pageBannerAdblockEnabled && (0, _utils_adblock__WEBPACK_IMPORTED_MODULE_22__.Z)((function(e) {
                                    e && (_utils_debug__WEBPACK_IMPORTED_MODULE_12__.cM.debug("AdBlock detected"), __webpack_require__.e(411).then(__webpack_require__.bind(__webpack_require__, 3411)).then((function(e) {
                                        new(0, e.default)({
                                            id: "adblockNotification",
                                            title: t.config.pageBannerAdblockTitle || "",
                                            text: t.config.pageBannerAdblockText || "",
                                            url: t.config.pageBannerAdblockUrl
                                        }, t.config, t.subscriptionManager, t.api).show()
                                    })))
                                }))
                            }
                        }, {
                            key: "initChatWidget",
                            value: function() {
                                if (!window.cleverpushChatLoaded && this.config.displayChatWidget && this.config.chatWidgetPath && new RegExp(this.config.chatWidgetPath).test(location.pathname)) {
                                    var e = document.createElement("script");
                                    e.src = "https://static.cleverpush.com/sdk/cleverpush-chat.js", document.head.appendChild(e)
                                }
                            }
                        }, {
                            key: "initWebBanners",
                            value: function() {
                                var e = this;
                                (0, _utils_debug__WEBPACK_IMPORTED_MODULE_12__.tI)("initWebBanners");
                                var t, n = "cleverpush-webbanners-shown",
                                    i = localStorage.getItem(n);
                                if (i) try {
                                    t = JSON.parse(i)
                                } catch (e) {}
                                t || (t = []);
                                var r = sessionStorage.getItem(n);
                                if (r) try {
                                    t = t.concat(JSON.parse(r))
                                } catch (e) {}
                                this.webBanners = this.webBanners || [], this.subscriptionManager && this.subscriptionManager.storageManager && this.subscriptionManager.storageManager;
                                var o = !1,
                                    a = (this.config.webBanners || []).filter((function(e) {
                                        return !t.includes(e._id) && "draft" !== e.status
                                    }));
                                if (a.length && __webpack_require__.e(728).then(__webpack_require__.bind(__webpack_require__, 8728)).then((function(i) {
                                        var r = i.default;
                                        a.forEach((function(i) {
                                            var a = new r(i, e.config, e.subscriptionManager, e.api);
                                            if ((!i.startsAt || new Date(i.startsAt) < new Date) && (!i.endsAt || new Date(i.endsAt) > new Date))
                                                if (i.exitIntent) {
                                                    if (o) return;
                                                    o = !0, __webpack_require__.e(499).then(__webpack_require__.t.bind(__webpack_require__, 5499, 23)).then((function(e) {
                                                        (0, e.default)(null, {
                                                            aggressive: !0,
                                                            callback: function() {
                                                                a.show(), t.push(i._id), "once" === i.frequency ? localStorage.setItem(n, JSON.stringify(t)) : "oncePerSession" === i.frequency && sessionStorage.setItem(n, JSON.stringify(t))
                                                            }
                                                        })
                                                    }))
                                                } else {
                                                    (function() {
                                                        var t = !0;
                                                        if (t && i.matchPath && (t = new RegExp(i.matchPath).test(window.location.pathname)), t && i.notMatchPath && (t = !new RegExp(i.notMatchPath).test(window.location.pathname)), t && i.matchDomain && (t = !new RegExp(i.matchDomain).test(window.location.hostname || window.location.host)), t && i.matchQuery && Object.keys(i.matchQuery || {}).forEach((function(e) {
                                                                i.matchQuery[e] && (t = t && window.location.search && window.location.search.indexOf(e + "=" + i.matchQuery[e]) > -1)
                                                            })), t && i.minimumVisits) {
                                                            var n = localStorage.getItem("cleverpush-banner-" + i._id + "-visits"),
                                                                r = 0;
                                                            if (n) try {
                                                                var o = parseInt(n, _const_common__WEBPACK_IMPORTED_MODULE_26__.Z);
                                                                isNaN(o) || (r = parseInt(o, _const_common__WEBPACK_IMPORTED_MODULE_26__.Z))
                                                            } catch (e) {}
                                                            r += 1, localStorage.setItem("cleverpush-banner-" + i._id + "-visits", r + ""), t = t && r >= i.minimumVisits
                                                        }
                                                        t && !isNaN(i.trafficPercentage) && i.trafficPercentage > 0 && i.trafficPercentage < 100 && (t = i.trafficPercentage / 100 > Math.random());
                                                        var a = function() {
                                                            var n = [promise_polyfill__WEBPACK_IMPORTED_MODULE_10__.Z.resolve(t)],
                                                                r = function(e) {
                                                                    return e
                                                                },
                                                                o = function(e) {
                                                                    switch (e) {
                                                                        case "and":
                                                                            return "every";
                                                                        case "or":
                                                                        default:
                                                                            return "some"
                                                                    }
                                                                };
                                                            if (i.showOnlySubscribers && n.push(new promise_polyfill__WEBPACK_IMPORTED_MODULE_10__.Z(e.isSubscribed)), i.topics && i.topics.length > 0) {
                                                                var a = new promise_polyfill__WEBPACK_IMPORTED_MODULE_10__.Z((function(t) {
                                                                    return e.getTopics((function(e, n) {
                                                                        t(i.topics[o(i.topicsLogic)]((function(e) {
                                                                            return n.includes(e)
                                                                        })))
                                                                    }))
                                                                }));
                                                                n.push(a)
                                                            }
                                                            if (i.tags && i.tags.length > 0) {
                                                                var s = promise_polyfill__WEBPACK_IMPORTED_MODULE_10__.Z.all(i.tags.map((function(t) {
                                                                    return new promise_polyfill__WEBPACK_IMPORTED_MODULE_10__.Z((function(n) {
                                                                        return e.hasTag(t, n)
                                                                    }))
                                                                }))).then((function(e) {
                                                                    return e[o(i.tagsLogic)](r)
                                                                }));
                                                                n.push(s)
                                                            }
                                                            return promise_polyfill__WEBPACK_IMPORTED_MODULE_10__.Z.all(n).then((function(e) {
                                                                return e.every(r)
                                                            }))
                                                        };
                                                        return new promise_polyfill__WEBPACK_IMPORTED_MODULE_10__.Z((function(e) {
                                                            if (t && !isNaN(i.scrollPercentage) && i.scrollPercentage > 0) {
                                                                var n, r = function() {
                                                                    (0, _utils_env__WEBPACK_IMPORTED_MODULE_17__.r0)() >= i.scrollPercentage && (window.removeEventListener("scroll", n), a().then(e))
                                                                };
                                                                n = window.addEventListener("scroll", r), r()
                                                            } else a().then(e)
                                                        }))
                                                    })().then((function(e) {
                                                        e && setTimeout((function() {
                                                            a.show(), t.push(i._id), "once" === i.frequency ? localStorage.setItem(n, JSON.stringify(t)) : "oncePerSession" === i.frequency && sessionStorage.setItem(n, JSON.stringify(t))
                                                        }), 1e3 * (i.timeout || 0))
                                                    }))
                                                }
                                            e.webBanners.push(a)
                                        }))
                                    })), "undefined" != typeof URLSearchParams && location.search && location.search.length) {
                                    var s = new URLSearchParams(location.search.slice(1));
                                    if (s.get("cleverPushWebBannerId")) {
                                        var c = (this.config.webBanners || []).find((function(e) {
                                            return e._id === s.get("cleverPushWebBannerId")
                                        }));
                                        c ? __webpack_require__.e(728).then(__webpack_require__.bind(__webpack_require__, 8728)).then((function(t) {
                                            var n = new(0, t.default)(c, e.config, e.subscriptionManager, e.api);
                                            n.show(), e.webBanners || (e.webBanners = []), e.webBanners.push(n)
                                        })) : _utils_debug__WEBPACK_IMPORTED_MODULE_12__.cM.warn("cleverPushWebBannerId parameter given but banner with that ID could not be found")
                                    }
                                }
                                if (this.config.appDownloadBannerEnabled && (this.config.appDownloadBannerAndroidId && "Android" === _utils_env__WEBPACK_IMPORTED_MODULE_17__.os.name || this.config.appDownloadBannerAppleId && "iOS" === _utils_env__WEBPACK_IMPORTED_MODULE_17__.os.name)) {
                                    if (this.config.appDownloadBannerAndroidId) {
                                        var _ = document.createElement("meta");
                                        _.name = "google-play-app", _.content = "app-id=" + this.config.appDownloadBannerAndroidId, document.head.appendChild(_);
                                        var u = document.querySelector('link[rel="android-touch-icon"]');
                                        u || ((u = document.createElement("link")).rel = "android-touch-icon", u.href = this.config.channelIcon, document.head.appendChild(u))
                                    }
                                    if (this.config.appDownloadBannerAppleId) {
                                        var l = document.createElement("meta");
                                        l.name = "apple-itunes-app", l.content = "app-id=" + this.config.appDownloadBannerAppleId, document.head.appendChild(l);
                                        var f = document.querySelector('link[rel="apple-touch-icon"]');
                                        f || ((f = document.createElement("link")).rel = "apple-touch-icon", f.href = this.config.channelIcon, document.head.appendChild(f))
                                    }
                                    var h = document.createElement("link");
                                    h.rel = "stylesheet", h.href = "https://cdnjs.cloudflare.com/ajax/libs/smart-app-banner/2.0.0/smart-app-banner.css", document.head.appendChild(h);
                                    var d = document.createElement("script");
                                    d.async = !0, d.src = "https://cdnjs.cloudflare.com/ajax/libs/smart-app-banner/2.0.0/smart-app-banner.js", d.onload = function() {
                                        new SmartBanner({
                                            daysHidden: 15,
                                            daysReminder: 90,
                                            title: e.config.appDownloadBannerTitle || "",
                                            author: e.config.appDownloadBannerAuthor || "",
                                            button: "DOWNLOAD",
                                            store: {
                                                ios: "App Store",
                                                android: "Google Play",
                                                windows: "Windows store"
                                            },
                                            price: {
                                                ios: "GRATIS",
                                                android: "GRATIS",
                                                windows: "GRATIS"
                                            }
                                        })
                                    }, document.head.appendChild(d)
                                }
                            }
                        }, {
                            key: "initTags",
                            value: function() {
                                var e = this;
                                this.subscriptionManager.storageManager.getTags().then((function(t) {
                                    var n = e.config.channelTags;
                                    (0, _utils_tags__WEBPACK_IMPORTED_MODULE_20__.e)(n, t, e.tagSubscription.bind(e), e.waitForSubscription.bind(e), location.pathname)
                                }))
                            }
                        }, {
                            key: "showTopicLayer",
                            value: function(e, t) {
                                var n = this;
                                this.waitForSubscription().then((function() {
                                    n.subscriptionManager.storageManager.getTopics().then((function(i) {
                                        var r = n.config.channelTopics || [],
                                            o = "string" == typeof e ? r.find((function(t) {
                                                return t._id === e
                                            })) : e;
                                        if (o && !i.includes(o._id)) {
                                            var a, s = "cleverpush-topic-layerShown-" + o._id,
                                                c = "cleverpush-topic-layer-visits-" + o._id;
                                            if (void 0 !== t && t.frequencyCappingVisits)
                                                if (a = t.frequencyCappingVisits, "true" === localStorage.getItem(s)) {
                                                    var _ = parseInt(localStorage.getItem(c), _const_common__WEBPACK_IMPORTED_MODULE_26__.Z) || 0;
                                                    if (localStorage.setItem(c, _ + 1 + ""), _ < a) return;
                                                    localStorage.removeItem(c)
                                                }(0, _utils_debug__WEBPACK_IMPORTED_MODULE_12__.tI)("showTopicLayer", e);
                                            var u = {
                                                title: o.layerTitle || "M??chtest du Neuigkeiten zu ".concat(o.name, " erhalten?"),
                                                deny: o.layerDenyText || "Nein",
                                                allow: o.layerAllowText || "Ja",
                                                info: " "
                                            };
                                            Object.keys(u).forEach((function(e) {
                                                void 0 === u[e] && delete u[e]
                                            }));
                                            var l = r.filter((function(e) {
                                                    return e.parentTopic === o._id
                                                })).length > 0,
                                                f = n.config.layerTheme || n.config.confirmAlertSelectTopicsLaterTheme || "cleverpush-confirm-default";
                                            n.subscriptionManager.confirm.appendConfirmBox(f, l, {
                                                topicsLayer: !0,
                                                customLocalization: u,
                                                parentTopic: o._id,
                                                topicsRadioButtons: o.childTopicsRadioButtons,
                                                topicsRequired: o.childTopicsRequired
                                            }, (function(e, t) {
                                                e && t ? (n.setTopics([].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(i), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(t), [o._id])), localStorage.setItem(s, "true")) : a ? localStorage.setItem(s, "true") : sessionStorage.setItem(s, "true")
                                            }))
                                        }
                                    }))
                                }))
                            }
                        }, {
                            key: "initTopics",
                            value: function initTopics() {
                                var _this13 = this;
                                this.waitForSubscription().then((function() {
                                    _this13.subscriptionManager.storageManager.getTopics().then((function(storedTopics) {
                                        var topics = _this13.config.channelTopics;
                                        if (topics && topics.length && "undefined" != typeof localStorage) {
                                            var topicFound = !1;
                                            topics.forEach((function(topic) {
                                                var topicLayerShownKey = "cleverpush-topic-layerShown-" + topic._id,
                                                    visitsStorageKey = "cleverpush-topic-layer-visits-" + topic._id,
                                                    topicMatches = topic.layerMatchPath && new RegExp(topic.layerMatchPath).test(location.pathname);
                                                if (topic.layerFunction && topicMatches) try {
                                                    topicMatches = !!eval(topic.layerFunction)
                                                } catch (e) {
                                                    _utils_debug__WEBPACK_IMPORTED_MODULE_12__.cM.debug(e)
                                                }
                                                if (topic.layerEnabled && "true" !== localStorage.getItem(topicLayerShownKey) && "true" !== sessionStorage.getItem(topicLayerShownKey) && storedTopics.indexOf(topic < -1) && topicMatches) {
                                                    if (topicFound) return;
                                                    var finalizeShow = function() {
                                                            _this13.showTopicLayer(topic)
                                                        },
                                                        show = function() {
                                                            if (topicFound = !0, !isNaN(topic.layerScrollPercentage) && topic.layerScrollPercentage > 0) {
                                                                var e, t = function() {
                                                                    (0, _utils_env__WEBPACK_IMPORTED_MODULE_17__.r0)() >= topic.layerScrollPercentage && (window.removeEventListener("scroll", e), finalizeShow())
                                                                };
                                                                e = window.addEventListener("scroll", t), t()
                                                            } else finalizeShow()
                                                        },
                                                        visitsNeeded = isNaN(topic.layerMinimumVisits) ? 0 : topic.layerMinimumVisits,
                                                        visitsStorage = localStorage,
                                                        visitsStr = visitsStorage.getItem(visitsStorageKey),
                                                        visits = 0;
                                                    "string" != typeof visitsStr || isNaN(visitsStr) || (visits = parseInt(visitsStr, _const_common__WEBPACK_IMPORTED_MODULE_26__.Z)), visits >= visitsNeeded ? !isNaN(topic.layerTimeout) && topic.layerTimeout ? setTimeout((function() {
                                                        show()
                                                    }), 1e3 * topic.layerTimeout) : show() : (visits += 1, visitsStorage.setItem(visitsStorageKey, visits.toString()))
                                                }
                                            }))
                                        }
                                    }))
                                }))
                            }
                        }, {
                            key: "triggerPathAndQuery",
                            value: function(e) {
                                var t = e.indexOf("?!") > -1 ? [e] : e.split("?"),
                                    n = new RegExp(t[0]).test(location.pathname);
                                if (n && t.length > 1)
                                    if ("undefined" != typeof URLSearchParams && location.search && location.search.length) {
                                        var i = new URLSearchParams(t[1]),
                                            r = new URLSearchParams(location.search.slice(1));
                                        i.forEach((function(e, t) {
                                            r.get(t) !== e && e && (n = !1)
                                        }))
                                    } else t[1].length > 1 && (n = !1);
                                return n
                            }
                        }, {
                            key: "initConversions",
                            value: function initConversions() {
                                var _this14 = this;
                                (this.config.channelEvents || []).forEach((function(event) {
                                    if (event && event._id)
                                        if ("path" === event.triggerType && event.triggerPath && _this14.triggerPathAndQuery(event.triggerPath)) _this14.trackConversion(event._id);
                                        else if ("function" === event.triggerType && event.triggerFunction) try {
                                        var trigger = !!eval(event.triggerFunction);
                                        if (trigger) {
                                            if (event.amountFunction) try {
                                                var amount = eval(event.amountFunction);
                                                return void _this14.trackConversion(event._id, amount)
                                            } catch (e) {
                                                _utils_debug__WEBPACK_IMPORTED_MODULE_12__.cM.debug(e)
                                            }
                                            _this14.trackConversion(event._id)
                                        }
                                    } catch (e) {
                                        _utils_debug__WEBPACK_IMPORTED_MODULE_12__.cM.debug(e)
                                    }
                                }))
                            }
                        }, {
                            key: "initPiano",
                            value: function() {
                                var e = this;
                                (0, _utils_piano__WEBPACK_IMPORTED_MODULE_21__.t)((function() {
                                    e.subscriptionManager && e.subscriptionManager.isSubscribed().then((function(t) {
                                        t && e.subscriptionManager.sync().then((function() {
                                            _utils_debug__WEBPACK_IMPORTED_MODULE_12__.cM.debug("Piano Opt-Out")
                                        }))
                                    }))
                                }))
                            }
                        }, {
                            key: "getNotificationPermission",
                            value: function() {
                                var e = this;
                                return this.waitForInit().then((function() {
                                    return new promise_polyfill__WEBPACK_IMPORTED_MODULE_10__.Z((function(t) {
                                        e.config.ownDomain && "https:" === location.protocol ? "safari" === e.browserType ? e.config.safariWebsitePushId ? t(window.safari.pushNotification.permission(e.config.safariWebsitePushId).permission) : _utils_debug__WEBPACK_IMPORTED_MODULE_12__.cM.debug("Safari website push ID is unknown.") : "facebook" === e.browserType ? t("default") : t(window.Notification.permission) : e.iframeMessenger.message(_messenger_command__WEBPACK_IMPORTED_MODULE_15__.Z.REMOTE_NOTIFICATION_PERMISSION, null, (function(e) {
                                            var n = e.data;
                                            t(n)
                                        }))
                                    }))
                                }))
                            }
                        }, {
                            key: "push",
                            value: function(e) {
                                if ("function" == typeof e) e();
                                else if ("string" == typeof e) this.push(arguments);
                                else {
                                    var t = e.shift();
                                    this[t].apply(this, e)
                                }
                            }
                        }, {
                            key: "executeFunction",
                            value: function() {
                                var e = [],
                                    t = this[(e = arguments && "object" === _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_3___default()(arguments[0]) ? arguments[0] : arguments)[0]];
                                "function" == typeof t && t.apply(this, Array.prototype.slice.call(e, 1))
                            }
                        }, {
                            key: "waitForInit",
                            value: function() {
                                var e = this;
                                return new promise_polyfill__WEBPACK_IMPORTED_MODULE_10__.Z((function(t, n) {
                                    e.initFailed ? n(e.initError) : e.initialized ? t() : (e.once(_const_event__WEBPACK_IMPORTED_MODULE_24__.Z.INITIALIZED, t), e.once(_const_event__WEBPACK_IMPORTED_MODULE_24__.Z.INITIALIZATION_FAILED, n))
                                }))
                            }
                        }, {
                            key: "waitForConfirmAvailable",
                            value: function() {
                                var e = this;
                                return this.waitForInit().then((function() {
                                    return new promise_polyfill__WEBPACK_IMPORTED_MODULE_10__.Z((function(t) {
                                        e.confirm ? t() : e.once(_const_event__WEBPACK_IMPORTED_MODULE_24__.Z.CONFIRM_AVAILABLE, t)
                                    }))
                                }))
                            }
                        }, {
                            key: "waitForSubscription",
                            value: function() {
                                var e = this;
                                return new promise_polyfill__WEBPACK_IMPORTED_MODULE_10__.Z((function(t, n) {
                                    e.waitForInit().then((function() {
                                        var n = function n(i) {
                                            e.subscriptionManager.getSubscriptionId().then((function(r) {
                                                r || i ? t(r) : e.once(_const_event__WEBPACK_IMPORTED_MODULE_24__.Z.SUBSCRIBED, (function() {
                                                    return n(!0)
                                                }))
                                            }))
                                        };
                                        e.urlSession ? n() : e.subscriptionManager.isSubscribed().then((function(t) {
                                            t ? n() : e.once(_const_event__WEBPACK_IMPORTED_MODULE_24__.Z.SUBSCRIBED, n)
                                        }))
                                    })).catch(n)
                                }))
                            }
                        }, {
                            key: "waitForBell",
                            value: function() {
                                var e = this;
                                return this.waitForInit().then((function() {
                                    return new promise_polyfill__WEBPACK_IMPORTED_MODULE_10__.Z((function(t) {
                                        e.bell ? t() : e.once(_const_event__WEBPACK_IMPORTED_MODULE_24__.Z.BELL_READY, t)
                                    }))
                                }))
                            }
                        }, {
                            key: "isSubscribed",
                            value: function(e) {
                                var t = this;
                                return this.waitForInit().then((function() {
                                    return t.subscriptionManager.isSubscribed().then((function(t) {
                                        return e(t)
                                    }))
                                })).catch((function() {
                                    return e(!1)
                                }))
                            }
                        }, {
                            key: "getSubscriptionId",
                            value: function(e) {
                                var t = this;
                                return this.waitForInit().then((function() {
                                    t.subscriptionManager.isSubscribed().then((function(n) {
                                        n ? t.subscriptionManager.getSubscriptionId().then((function(t) {
                                            e(t)
                                        })) : e(!1)
                                    }))
                                })).catch((function() {
                                    e(!1)
                                }))
                            }
                        }, {
                            key: "subscribe",
                            value: function(e) {
                                var t = this;
                                return this.initialized ? this.subscriptionManager.subscribe().then((function() {
                                    return t.subscriptionManager.getSubscriptionId().then((function(t) {
                                        return e(!1, t)
                                    }))
                                })).catch((function(t) {
                                    return e(t)
                                })) : this.waitForInit().then((function() {
                                    return t.subscriptionManager.subscribe().then((function() {
                                        return t.subscriptionManager.getSubscriptionId().then((function(t) {
                                            return e(!1, t)
                                        }))
                                    }))
                                })).catch((function(t) {
                                    return e(t)
                                }))
                            }
                        }, {
                            key: "triggerOptIn",
                            value: function(e, t) {
                                var n = this;
                                (0, _utils_debug__WEBPACK_IMPORTED_MODULE_12__.tI)("triggerOptIn", e, t);
                                var i = "function" == typeof t ? t : e,
                                    r = "boolean" == typeof e && e,
                                    o = "function" == typeof i ? i : function(e) {
                                        e && ("unsubscribed" !== e.reason && "subscribed" !== e.reason || _utils_debug__WEBPACK_IMPORTED_MODULE_12__.cM.info(e.message || e), "unsupported-browser" === e.reason || "private-mode" === e.reason || "already-initialized" === e.reason || "init-already-called" === e.reason || "unsubscribed" === e.reason ? _utils_debug__WEBPACK_IMPORTED_MODULE_12__.cM.warn(e.message || e) : _utils_debug__WEBPACK_IMPORTED_MODULE_12__.cM.error(e.message || e))
                                    };
                                return this.waitForConfirmAvailable().then((function() {
                                    var e = function() {
                                        n.subscriptionManager.getSubscriptionId().then((function(e) {
                                            o(!1, e)
                                        }))
                                    };
                                    (r ? promise_polyfill__WEBPACK_IMPORTED_MODULE_10__.Z.resolve(!0) : n.subscriptionManager.canSubscribe()).then((function(t) {
                                        if (!0 === t) {
                                            var i = n.subscriptionManager.getNotificationPermission();
                                            if (n.confirm && (n.config.showConfirmAlert || !n.config.ownDomain || "https:" !== window.parent.location.protocol && "localhost" !== window.top.location.hostname)) _utils_debug__WEBPACK_IMPORTED_MODULE_12__.cM.debug("this.confirm.show 1"), n.confirm.setAutoHideBackdrop("granted" === i || (0, _utils_env__WEBPACK_IMPORTED_MODULE_17__.Dt)()), n.confirm.show((function(t) {
                                                t ? o(t) : e()
                                            }));
                                            else if (!n.subscriptionManager.isSubscribing) {
                                                var r = "default" === i || "PREVIEW" === n.config.env;
                                                _utils_debug__WEBPACK_IMPORTED_MODULE_12__.cM.debug("showBackdrop", r);
                                                var a = function(t) {
                                                    "PREVIEW" !== n.config.env && n.subscriptionManager.subscribe().then((function(i) {
                                                        "function" == typeof t && t(), n.confirm && r && n.confirm.hideBackdrop(i), "denied" === i ? (n.confirm && "safari" !== n.browserType && n.confirm.showDenyAlert(), o(new _error_CleverPushError__WEBPACK_IMPORTED_MODULE_25__.Z("Permission for notifications was denied", i))) : e()
                                                    })).catch((function(e) {
                                                        "function" == typeof t && t(), n.confirm && r && n.confirm.hideBackdrop("denied"), o(e)
                                                    }))
                                                };
                                                n.confirm && r ? (0, _utils_detect__WEBPACK_IMPORTED_MODULE_18__.F)({
                                                    subscriptionManager: n.subscriptionManager,
                                                    config: n.config,
                                                    subscribe: a,
                                                    showBackdrop: r,
                                                    setShowBackdrop: function(e) {
                                                        return r = e
                                                    }
                                                }) : a()
                                            }
                                            var s = "granted" === i;
                                            n.subscriptionManager.existingPermission = s, n.config.noExistingPermissionOptIns && s || (n.optInVisitorTracked || (n.optInVisitorTracked = !0, n.api.trackOptInVisitor()), n.api.confirmAlertShown(n.subscriptionManager.existingPermission), n.trigger(_const_event__WEBPACK_IMPORTED_MODULE_24__.Z.OPTIN_SHOWN))
                                        } else o(new _error_CleverPushError__WEBPACK_IMPORTED_MODULE_25__.Z("Can not subscribe because of an unknown error", "cannot-subscribe"))
                                    })).catch((function(t) {
                                        t && "subscribed" === t.reason ? (_utils_debug__WEBPACK_IMPORTED_MODULE_12__.cM.debug("running successCallback()"), e()) : o(t)
                                    }))
                                })).catch((function(e) {
                                    return o(e)
                                }))
                            }
                        }, {
                            key: "unsubscribe",
                            value: function(e, t) {
                                var n = this;
                                (0, _utils_debug__WEBPACK_IMPORTED_MODULE_12__.tI)("unsubscribe");
                                var i = "function" == typeof e ? e : function(e) {
                                        e && _utils_debug__WEBPACK_IMPORTED_MODULE_12__.cM.error(e.stack || e.message || e)
                                    },
                                    r = "boolean" == typeof t && t;
                                this.waitForInit().then((function() {
                                    n.subscriptionManager.unsubscribe(r).then((function() {
                                        i(!1, !0)
                                    })).catch((function(e) {
                                        console.error(e), i(!1)
                                    }))
                                }))
                            }
                        }, {
                            key: "tagSubscription",
                            value: function(e, t) {
                                var n = this;
                                (0, _utils_debug__WEBPACK_IMPORTED_MODULE_12__.tI)("tagSubscription", e);
                                var i = "function" == typeof t ? t : function() {};
                                this.waitForInit().then((function() {
                                    n.subscriptionManager && n.subscriptionManager.initialTags.push(e), n.waitForSubscription().then((function(t) {
                                        e ? n.subscriptionManager.storageManager.getTags().then((function(r) {
                                            var o = n.subscriptionManager.storageManager.getTagDate(e);
                                            r.indexOf(e) < 0 || !o || o.getTime() < Date.now() - 432e5 ? (n.subscriptionManager.storageManager.setTags([].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(r), [e])), n.api.tagSubscription(t, e).then(i).catch(i)) : _utils_debug__WEBPACK_IMPORTED_MODULE_12__.cM.debug("tag is already in stored tags")
                                        })) : _utils_debug__WEBPACK_IMPORTED_MODULE_12__.cM.error("tag id not specified")
                                    }))
                                }))
                            }
                        }, {
                            key: "untagSubscription",
                            value: function(e, t) {
                                var n = this;
                                (0, _utils_debug__WEBPACK_IMPORTED_MODULE_12__.tI)("untagSubscription", e);
                                var i = "function" == typeof t ? t : function() {};
                                this.waitForInit().then((function() {
                                    n.waitForSubscription().then((function(t) {
                                        e ? (n.subscriptionManager.storageManager.getTags().then((function(t) {
                                            t.splice(t.indexOf(e), 1), n.subscriptionManager.storageManager.setTags(t)
                                        })), n.api.untagSubscription(t, e).then(i).catch(i)) : _utils_debug__WEBPACK_IMPORTED_MODULE_12__.cM.error("tag id not specified")
                                    }))
                                }))
                            }
                        }, {
                            key: "hasTag",
                            value: function(e, t) {
                                var n = this;
                                (0, _utils_debug__WEBPACK_IMPORTED_MODULE_12__.tI)("hasTag", e), this.waitForInit().then((function() {
                                    e ? n.subscriptionManager.storageManager.hasTag(e).then((function(e) {
                                        "function" == typeof t && t(e)
                                    })) : _utils_debug__WEBPACK_IMPORTED_MODULE_12__.cM.error("tag id not specified")
                                }))
                            }
                        }, {
                            key: "setTopics",
                            value: function(e, t) {
                                var n = this;
                                return (0, _utils_debug__WEBPACK_IMPORTED_MODULE_12__.tI)("setTopics", e), this.waitForInit().then((function() {
                                    if (n.subscriptionManager) return n.subscriptionManager.setTopics(e), n.subscriptionManager.sync().then((function() {
                                        "function" == typeof t && t()
                                    }))
                                }))
                            }
                        }, {
                            key: "getTopics",
                            value: function(e) {
                                var t = this;
                                if ((0, _utils_debug__WEBPACK_IMPORTED_MODULE_12__.tI)("getTopics"), "function" == typeof e) return this.waitForInit().then((function() {
                                    t.subscriptionManager && t.subscriptionManager.getTopics().then((function(t) {
                                        e(null, t)
                                    }))
                                }));
                                _utils_debug__WEBPACK_IMPORTED_MODULE_12__.cM.error("Please provide a callback function (err, topics) => {} to getTopics")
                            }
                        }, {
                            key: "setAttribute",
                            value: function(e, t, n) {
                                var i = this;
                                (0, _utils_debug__WEBPACK_IMPORTED_MODULE_12__.tI)("setAttribute", e, t);
                                var r = t;
                                "object" === _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_3___default()(r) && (r = JSON.stringify(r)), this.waitForInit().then((function() {
                                    i.waitForSubscription().then((function(o) {
                                        if (o) {
                                            if (localStorage.getItem("cleverpush-attribute-" + e) === r + "") return;
                                            localStorage.setItem("cleverpush-attribute-" + e, r), i.api.setSubscriptionAttribute(o, e, t).then((function() {
                                                "function" == typeof n && n(!1, !0)
                                            }))
                                        }
                                    }))
                                }))
                            }
                        }, {
                            key: "incAttribute",
                            value: function(e, t, n) {
                                var i = this;
                                (0, _utils_debug__WEBPACK_IMPORTED_MODULE_12__.tI)("incAttribute", e, t);
                                var r = parseInt(t, _const_common__WEBPACK_IMPORTED_MODULE_26__.Z);
                                isNaN(r) && (r = 1);
                                var o = parseInt(localStorage.getItem("cleverpush-attribute-" + e), _const_common__WEBPACK_IMPORTED_MODULE_26__.Z) || 0;
                                o += r, this.waitForInit().then((function() {
                                    i.waitForSubscription().then((function(t) {
                                        localStorage.setItem("cleverpush-attribute-" + e, o + ""), i.api.setSubscriptionAttribute(t, e, o).then((function() {
                                            "function" == typeof n && n(!1, !0)
                                        }))
                                    }))
                                }))
                            }
                        }, {
                            key: "getAttribute",
                            value: function(e, t) {
                                var n = this;
                                (0, _utils_debug__WEBPACK_IMPORTED_MODULE_12__.tI)("getAttribute", e), this.waitForInit().then((function() {
                                    n.waitForSubscription().then((function(n) {
                                        t(localStorage.getItem("cleverpush-attribute-" + e))
                                    }))
                                }))
                            }
                        }, {
                            key: "hasAttributeValue",
                            value: function(e, t, n) {
                                var i = t;
                                "object" === _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_3___default()(i) && (i = JSON.stringify(i));
                                var r = localStorage.getItem("cleverpush-attribute-" + e);
                                if (r) try {
                                    var o = JSON.parse(r);
                                    if (o && o.length) return void n(o.indexOf(i) > -1)
                                } catch (e) {}
                                n(!1)
                            }
                        }, {
                            key: "pushAttributeValue",
                            value: function(e, t, n, i) {
                                var r = this;
                                (0, _utils_debug__WEBPACK_IMPORTED_MODULE_12__.tI)("pushAttributeValue", e, o);
                                var o = t;
                                "object" === _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_3___default()(o) && (o = JSON.stringify(o));
                                var a = i,
                                    s = {};
                                "function" == typeof n ? a = n : "object" === _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_3___default()(n) && (s = n), this.waitForInit().then((function() {
                                    r.waitForSubscription().then((function(n) {
                                        var i = !1,
                                            c = localStorage.getItem("cleverpush-attribute-" + e);
                                        if (c) try {
                                            var _ = JSON.parse(c);
                                            _ && _.length ? _.indexOf(o) > -1 ? i = !0 : localStorage.setItem("cleverpush-attribute-" + e, JSON.stringify([].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(_), [o]))) : localStorage.setItem("cleverpush-attribute-" + e, JSON.stringify([o]))
                                        } catch (t) {
                                            localStorage.setItem("cleverpush-attribute-" + e, JSON.stringify([o]))
                                        } else localStorage.setItem("cleverpush-attribute-" + e, JSON.stringify([o]));
                                        i && !s.force || r.api.pushSubscriptionAttributeValue(n, e, t).then((function() {
                                            "function" == typeof a && a(!1, !0)
                                        }))
                                    }))
                                }))
                            }
                        }, {
                            key: "pullAttributeValue",
                            value: function(e, t, n) {
                                var i = this;
                                (0, _utils_debug__WEBPACK_IMPORTED_MODULE_12__.tI)("pullAttributeValue", e, r);
                                var r = t;
                                "object" === _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_3___default()(r) && (r = JSON.stringify(r)), this.waitForInit().then((function() {
                                    i.waitForSubscription().then((function(o) {
                                        var a = localStorage.getItem("cleverpush-attribute-" + e);
                                        if (a) try {
                                            var s = JSON.parse(a);
                                            s && s.length && s.indexOf(r) > -1 && (s.splice(s.indexOf(r), 1), localStorage.setItem("cleverpush-attribute-" + e, JSON.stringify(s)))
                                        } catch (e) {}
                                        i.api.pullSubscriptionAttributeValue(o, e, t).then((function() {
                                            "function" == typeof n && n(!1, !0)
                                        }))
                                    }))
                                }))
                            }
                        }, {
                            key: "trigger",
                            value: function(e, t) {
                                if (t || !1 === t ? _utils_debug__WEBPACK_IMPORTED_MODULE_12__.cM.debug("%c".concat(e.toUpperCase(), ":"), (0, _utils_debug__WEBPACK_IMPORTED_MODULE_12__.To)("event"), t) : _utils_debug__WEBPACK_IMPORTED_MODULE_12__.cM.debug("%c".concat(e.toUpperCase()), (0, _utils_debug__WEBPACK_IMPORTED_MODULE_12__.To)("event")), (0, _utils_env__WEBPACK_IMPORTED_MODULE_17__.jU)()) {
                                    if (e === _const_event__WEBPACK_IMPORTED_MODULE_24__.Z.INITIALIZED) {
                                        if (this.initialized) return;
                                        this.initialized = !0
                                    }
                                    this.emit(e, t)
                                }
                            }
                        }, {
                            key: "triggerBellClick",
                            value: function() {
                                var e = this;
                                (0, _utils_debug__WEBPACK_IMPORTED_MODULE_12__.tI)("triggerBellClick"), this.subscriptionManager ? this.subscriptionManager.isSubscribed().then((function(t) {
                                    e.bell ? e.bell.onClick() : t ? e.panel ? e.panel.show() : __webpack_require__.e(34).then(__webpack_require__.bind(__webpack_require__, 6034)).then((function(t) {
                                        var n = t.default;
                                        e.panel = new n(e.config, e.subscriptionManager, e.trigger.bind(e), e.api), e.panel.show()
                                    })) : e.triggerOptIn(!0, (function(t, n) {
                                        !t && n && (e.panel ? e.panel.show() : __webpack_require__.e(34).then(__webpack_require__.bind(__webpack_require__, 6034)).then((function(t) {
                                            var n = t.default;
                                            e.panel = new n(e.config, e.subscriptionManager, e.trigger.bind(e), e.api), e.panel.show()
                                        })))
                                    }))
                                })) : alert((0, _utils_translate__WEBPACK_IMPORTED_MODULE_19__.I)("alert.unsupported"))
                            }
                        }, {
                            key: "hidePanel",
                            value: function() {
                                this.panel && this.panel.hide()
                            }
                        }, {
                            key: "translate",
                            value: function(e) {
                                return (0, _utils_translate__WEBPACK_IMPORTED_MODULE_19__.I)(e)
                            }
                        }, {
                            key: "triggerFollowUpEvent",
                            value: function(e, t, n) {
                                var i = this,
                                    r = "object" === _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_3___default()(n) ? n : {};
                                if ((0, _utils_debug__WEBPACK_IMPORTED_MODULE_12__.tI)("triggerFollowUpEvent", e, t, r), this.config.clickedFollowUpCampaignId !== e) {
                                    var o = function(n) {
                                        if (n) {
                                            _utils_debug__WEBPACK_IMPORTED_MODULE_12__.cM.debug("triggerFollowUpEvent waitForSubscription done", n);
                                            var o = i.config.clickedFollowUpCampaignId === e,
                                                a = "undefined" != typeof sessionStorage ? sessionStorage.getItem("cleverpush-notification-id") : void 0;
                                            i.api.triggerFollowUpEvent(n, e, a, t, Object.assign({
                                                url: location.href
                                            }, r), o, i.config.bypassInactiveFollowUps)
                                        }
                                    };
                                    this.waitForInit().then((function() {
                                        _utils_debug__WEBPACK_IMPORTED_MODULE_12__.cM.debug("triggerFollowUpEvent waitForInit done"), i.config.autoRegister ? i.waitForSubscription().then(o) : i.subscriptionManager.getSubscriptionId().then(o)
                                    }))
                                }
                            }
                        }, {
                            key: "initBounces",
                            value: function() {
                                var e = this;
                                (0, _utils_debug__WEBPACK_IMPORTED_MODULE_12__.tI)("initBounces");
                                try {
                                    var t;
                                    if ((0, _utils_env__WEBPACK_IMPORTED_MODULE_17__.MD)() && "undefined" != typeof URLSearchParams) {
                                        var n, i;
                                        if (location.search && location.search.length) {
                                            var r = new URLSearchParams(location.search.slice(1));
                                            t = r.get("cleverPushBounceUrl"), n = r.get("cleverPushBounceDevice"), i = r.get("cleverPushNotificationId")
                                        }
                                        if (!t && location.hash && 0 === location.hash.indexOf("#?")) {
                                            var o = new URLSearchParams(location.hash.slice(2));
                                            t = o.get("cleverPushBounceUrl"), n = o.get("cleverPushBounceDevice"), i || (i = o.get("cleverPushNotificationId"))
                                        }
                                        n && ("mobile" === n && "mobile" !== _utils_env__WEBPACK_IMPORTED_MODULE_17__.Uh.type || "tablet" === n && "tablet" !== _utils_env__WEBPACK_IMPORTED_MODULE_17__.Uh.type || "desktop" === n && ("table" === _utils_env__WEBPACK_IMPORTED_MODULE_17__.Uh.type || "mobile" === _utils_env__WEBPACK_IMPORTED_MODULE_17__.Uh.type)) && (t = void 0), t && this.initBounce(t, i)
                                    }
                                    if (!t && this.config && this.config.bounceEnabled && this.config.bounceFilters && this.config.bounceFilters.length) {
                                        var a = document.referrer && (document.referrer.endsWith("cleverpush.com/worker.js") || document.referrer.endsWith(this.config.serviceWorkerFile || document.referrer.endsWith("/cleverpush-worker.js"))),
                                            s = document.referrer && /google|bing|yahoo|baidu|duckduckgo|wolframalpha/.test(document.referrer),
                                            c = this.config.bounceFilters.find((function(t) {
                                                var n = (!t.source || "notification" === t.source) && a || "seo" === t.source && s || (!e.referrer || e.referrer === location.href) && "direct" === t.source || "ignore" === t.source;
                                                if (n && t.device && (n = "mobile" === t.device && "mobile" === _utils_env__WEBPACK_IMPORTED_MODULE_17__.Uh.type || "tablet" === t.device && "tablet" === _utils_env__WEBPACK_IMPORTED_MODULE_17__.Uh.type || "desktop" === t.device && "mobile" !== _utils_env__WEBPACK_IMPORTED_MODULE_17__.Uh.type && "tablet" !== _utils_env__WEBPACK_IMPORTED_MODULE_17__.Uh.type), n && t.matchQuery) {
                                                    var i = new URLSearchParams(location.search.slice(1));
                                                    Object.keys(t.matchQuery || {}).forEach((function(e) {
                                                        t.matchQuery[e] && (n = n && i.get(e) && i.get(e).includes(t.matchQuery[e]))
                                                    }))
                                                }
                                                return n
                                            }));
                                        c && c.url && this.initBounce(c.url, null)
                                    }
                                    "true" === sessionStorage.getItem("cleverpush-bounced") && window.performance && window.performance.navigation.type === window.performance.navigation.TYPE_BACK_FORWARD && (sessionStorage.removeItem("cleverpush-bounced"), history.back())
                                } catch (e) {
                                    _utils_debug__WEBPACK_IMPORTED_MODULE_12__.cM.error(e)
                                }
                            }
                        }, {
                            key: "initBounce",
                            value: function(e, t) {
                                var n = this;
                                (0, _utils_debug__WEBPACK_IMPORTED_MODULE_12__.tI)("initBounce", e, t);
                                if (window.history && window.history.pushState) {
                                    var i = function() {
                                        setTimeout((function() {
                                            window.addEventListener("popstate", (function() {
                                                setTimeout((function() {
                                                    if ("true" !== sessionStorage.getItem("cleverpush-bounced") && (sessionStorage.setItem("cleverpush-bounced", "true"), !location.hash || location.hash.indexOf("cleverPushBounceUrl") > -1)) {
                                                        var i = {
                                                            channelId: n.config.channelId,
                                                            notificationId: t,
                                                            subscriptionId: n.subscriptionManager.storageManager.getSubscriptionId()
                                                        };
                                                        n.api.trackBounce(i), location.href = e
                                                    }
                                                }), 0)
                                            }), !1)
                                        }), 250);
                                        var i = location.pathname + (location.search || "") + (location.hash || "");
                                        setTimeout((function() {
                                            history.pushState({
                                                cleverpushBounce: !0
                                            }, document.title, location.pathname + (location.search || "") + (location.hash || "")), setTimeout((function() {
                                                history.replaceState(null, document.title, i)
                                            }), 150)
                                        }), 150), !0
                                    };
                                    "completed" === document.readyState || "complete" === document.readyState || "interactive" === document.readyState ? i() : window.addEventListener("load", i)
                                }
                            }
                        }, {
                            key: "initFollowUpCampaigns",
                            value: function initFollowUpCampaigns() {
                                var _this40 = this;
                                if (this.config.followUpCampaigns && this.config.followUpCampaigns.length && this.config.followUpCampaigns.forEach((function(campaign) {
                                        var triggered = !1,
                                            trigger = function(e, t) {
                                                triggered = !0;
                                                var n = {};
                                                campaign.triggerAutoVariables && campaign.triggerAutoVariables.length && campaign.triggerAutoVariables.forEach((function(t) {
                                                    var i;
                                                    "scrollPercentage" !== t.variable ? (t.selector.split(",").forEach((function(t) {
                                                        if (!i) {
                                                            for (var n = e, r = 0; r < 10 && !(i = n.querySelector(t.trim())) && (n = n.parentNode); r++);
                                                            i || (i = document.querySelector(t.trim()))
                                                        }
                                                    })), i && ("img" === i.tagName.toLowerCase() && (i.src || i.dataset && i.dataset.src) ? n[t.variable] = i.src || i.dataset && i.dataset.src : "a" === i.tagName.toLowerCase() && i.href ? n[t.variable] = i.href : "input" !== i.tagName.toLowerCase() && "textarea" !== i.tagName.toLowerCase() || !i.value ? "meta" === i.tagName.toLowerCase() && i.content ? n[t.variable] = i.content : n[t.variable] = (i.textContent || i.innerText).trim() : n[t.variable] = i.value)) : n[t.variable] = window.pageYOffset
                                                })), "object" === _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_3___default()(t) && (n = Object.assign(n, t)), _this40.triggerFollowUpEvent(campaign._id, "trigger" + (campaign.triggerType[0].substr(0, 1).toUpperCase() + campaign.triggerType.substr(1)), n)
                                            };
                                        if ("articleBounce" === campaign.triggerType && 0 !== window.location.hash.indexOf("#cleverPushScroll")) {
                                            var setupBounce = function() {
                                                window.addEventListener("unload", (function() {
                                                    var e = document.querySelector(campaign.triggerArticleSelector || "article");
                                                    if (e) {
                                                        var t = (0, _utils_dom__WEBPACK_IMPORTED_MODULE_13__.Y6)(e);
                                                        t >= (campaign.triggerArticleMinScroll || 0) && t <= (campaign.triggerArticleMaxScroll || 80) && trigger(document)
                                                    }
                                                }))
                                            };
                                            if (campaign.triggerFunction) {
                                                var success = !1;
                                                try {
                                                    success = !!eval(campaign.triggerFunction)
                                                } catch (e) {
                                                    _utils_debug__WEBPACK_IMPORTED_MODULE_12__.cM.debug(e)
                                                }
                                                success && setupBounce()
                                            } else setupBounce()
                                        }
                                        if ("selector" === campaign.triggerType && campaign.triggerSelector) {
                                            var setupSelector = function() {
                                                for (var e = document.querySelectorAll(campaign.triggerSelector), t = function(t) {
                                                        var n = e[t];
                                                        n && n.addEventListener("click", (function() {
                                                            trigger(n.parentNode)
                                                        }))
                                                    }, n = 0; n < e.length; n += 1) t(n)
                                            };
                                            if (campaign.triggerFunction) {
                                                var _success = !1;
                                                try {
                                                    _success = !!eval(campaign.triggerFunction)
                                                } catch (e) {
                                                    _utils_debug__WEBPACK_IMPORTED_MODULE_12__.cM.debug(e)
                                                }
                                                _success && setupSelector()
                                            } else setupSelector()
                                        }
                                        if ("function" === campaign.triggerType && campaign.triggerFunction) {
                                            var _success2 = !1;
                                            try {
                                                _success2 = !!eval(campaign.triggerFunction)
                                            } catch (e) {
                                                _utils_debug__WEBPACK_IMPORTED_MODULE_12__.cM.debug(e)
                                            }
                                            _success2 && trigger(document)
                                        } else "path" === campaign.triggerType && campaign.triggerPath && _this40.triggerPathAndQuery(campaign.triggerPath) && _this40.triggerFollowUpEvent(campaign._id, "triggerPath");
                                        if ("exitIntent" === campaign.triggerType && __webpack_require__.e(499).then(__webpack_require__.t.bind(__webpack_require__, 5499, 23)).then((function(e) {
                                                (0, e.default)(null, {
                                                    aggressive: !0,
                                                    callback: function() {
                                                        trigger(document)
                                                    }
                                                })
                                            })), "productAvailability" === campaign.triggerType && campaign.triggerFunction) {
                                            var productId;
                                            try {
                                                productId = eval(campaign.triggerFunction)
                                            } catch (e) {
                                                _utils_debug__WEBPACK_IMPORTED_MODULE_12__.cM.debug(e)
                                            }
                                            if ("promise" == typeof productId && productId.then) try {
                                                productId.then((function(e) {
                                                    e && trigger(document, {
                                                        id: e
                                                    })
                                                }))
                                            } catch (e) {
                                                _utils_debug__WEBPACK_IMPORTED_MODULE_12__.cM.debug(e)
                                            } else productId && trigger(document, {
                                                id: productId
                                            })
                                        }
                                        if (("selector" === campaign.cancelType || "function" === campaign.cancelType) && campaign.cancelSelector)
                                            for (var triggerElems = document.querySelectorAll(campaign.cancelSelector), triggerElemIndex = 0; triggerElemIndex < triggerElems.length; triggerElemIndex += 1) {
                                                var triggerElem = triggerElems[triggerElemIndex];
                                                triggerElem && triggerElem.addEventListener("click", (function() {
                                                    _this40.triggerFollowUpEvent(campaign._id, "function" === campaign.cancelType ? "cancelFunction" : "cancelSelector")
                                                }))
                                            }
                                        if (!triggered && "function" === campaign.cancelType && campaign.cancelFunction) {
                                            var _success3 = !1;
                                            try {
                                                _success3 = !!eval(campaign.cancelFunction)
                                            } catch (e) {
                                                _utils_debug__WEBPACK_IMPORTED_MODULE_12__.cM.debug(e)
                                            }
                                            _success3 && _this40.triggerFollowUpEvent(campaign._id, "cancelFunction")
                                        } else !triggered && "path" === campaign.cancelType && campaign.cancelPath && _this40.triggerPathAndQuery(campaign.cancelPath) && _this40.triggerFollowUpEvent(campaign._id, "cancelPath")
                                    })), this.config.shopifyCartAbandonmentFollowUpCampaignId) {
                                    for (var addToCartButtons = document.querySelectorAll('button[name="add"], button.addtocart, a.add-to-cart'), addToCartButtonIndex = 0; addToCartButtonIndex < addToCartButtons.length; addToCartButtonIndex++) {
                                        var addToCartButton = addToCartButtons[addToCartButtonIndex];
                                        addToCartButton && addToCartButton.addEventListener("click", (function() {
                                            _this40.triggerFollowUpEvent(_this40.config.shopifyCartAbandonmentFollowUpCampaignId, "addToCart")
                                        }))
                                    }(document.documentElement && document.documentElement.className && document.documentElement.className.indexOf("page--thank-you") > -1 || window.location && window.location.pathname && window.location.pathname.indexOf("thank_you") > -1) && this.triggerFollowUpEvent(this.config.shopifyCartAbandonmentFollowUpCampaignId, "checkout")
                                }
                                if (this.config.epagesCartAbandonmentFollowUpCampaignId) {
                                    var _addToCartButton = document.querySelector("button.product-add-cart-button");
                                    _addToCartButton && _addToCartButton.addEventListener("click", (function() {
                                        _this40.triggerFollowUpEvent(_this40.config.epagesCartAbandonmentFollowUpCampaignId, "addToCart")
                                    })), (document.documentElement && document.documentElement.className && document.documentElement.className.indexOf("page--thank-you") > -1 || window.location && window.location.pathname && window.location.pathname.indexOf("thank_you") > -1) && this.triggerFollowUpEvent(this.config.epagesCartAbandonmentFollowUpCampaignId, "checkout")
                                }
                            }
                        }, {
                            key: "trackConversion",
                            value: function(e, t, n) {
                                var i = this,
                                    r = void 0 !== t ? t : void 0;
                                (0, _utils_debug__WEBPACK_IMPORTED_MODULE_12__.tI)("trackConversion", e, r), this.waitForInit().then((function() {
                                    i.subscriptionManager.getSubscriptionId().then((function(t) {
                                        if (t) {
                                            var o = function() {
                                                    (!sessionStorage.getItem("cleverpush-conversion-" + e + "-tracked") || sessionStorage.getItem("cleverpush-conversion-" + e + "-tracked") && !isNaN(sessionStorage.getItem("cleverpush-conversion-" + e + "-tracked")) && parseInt(sessionStorage.getItem("cleverpush-conversion-" + e + "-tracked"), _const_common__WEBPACK_IMPORTED_MODULE_26__.Z) + 36e5 < Date.now()) && (a && sessionStorage.setItem("cleverpush-notification-id", a), sessionStorage.setItem("cleverpush-conversion-" + e + "-tracked", Date.now()), i.api.trackConversion(t, a, e, r, i.config.clickedFollowUpCampaignId, n))
                                                },
                                                a = new URLSearchParams(location.search.slice(1)).get("cleverPushNotificationId") || sessionStorage.getItem("cleverpush-notification-id");
                                            a ? o() : i.subscriptionManager.getClickedNotification().then((function(e) {
                                                a = e, o()
                                            }))
                                        }
                                    }))
                                }))
                            }
                        }, {
                            key: "generateWalletPass",
                            value: function(e, t, n) {
                                var i = this;
                                return new promise_polyfill__WEBPACK_IMPORTED_MODULE_10__.Z((function(r, o) {
                                    i.api.generateWalletPass(e, t).then((function(e) {
                                        "function" == typeof n && n(null, e), r(e)
                                    })).catch((function(e) {
                                        "function" == typeof n && n(e, null), o(e)
                                    }))
                                }))
                            }
                        }, {
                            key: "initGoogleAnalytics",
                            value: function(e) {
                                var t;
                                this.config.googleAnalyticsDimensionIndex && "function" == typeof ga && (ga("set", "dimension".concat(this.config.googleAnalyticsDimensionIndex), e), "function" == typeof gtag && gtag("event", "cleverpushSetSubscriptionId", (t = {
                                    event_category: "cleverpush",
                                    event_label: "Set CleverPush Subscription ID"
                                }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(t, "dimension".concat(this.config.googleAnalyticsDimensionIndex), e), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(t, "nonInteraction", !0), t)))
                            }
                        }]), CleverPush
                    }(wolfy87_eventemitter__WEBPACK_IMPORTED_MODULE_9___default())
            },
            155: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => i
                });
                var i = 10
            },
            1317: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => i
                });
                const i = "@media (min-width: 768px) {\n        .cleverpush-confirm-branding {\n            bottom: 0 !important;\n            left: 0 !important;\n        }\n\n        .cleverpush-confirm-buttons {\n            max-width: calc(100% - 80px);\n            margin-left: auto !important;\n        }\n    }"
            },
            2034: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => s
                });
                var i = n(4575),
                    r = n.n(i),
                    o = n(9713),
                    a = n.n(o),
                    s = function e() {
                        r()(this, e)
                    };
                a()(s, "INITIALIZED", "initialized"), a()(s, "INITIALIZATION_FAILED", "initializationFailed"), a()(s, "SUBSCRIBED", "subscribed"), a()(s, "UNSUBSCRIBED", "unsubscribed"), a()(s, "OPTIN_SHOWN", "optInShown"), a()(s, "OPTIN_CLOSED", "optInClosed"), a()(s, "PERMISSION_GRANTED", "permissionGranted"), a()(s, "TOPICS_SET", "topicsSet"), a()(s, "BELL_READY", "bellReady"), a()(s, "PERMISSION_RE_GRANTED", "permissionReGranted"), a()(s, "PANEL_SHOWN", "panelShown"), a()(s, "PANEL_HIDDEN", "panelHidden"), a()(s, "CONFIRM_AVAILABLE", "confirmAvailable")
            },
            8397: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => a
                });
                var i, r = n(9713),
                    o = n.n(r);
                const a = {
                    en: {
                        "confirm.title": "{0} wants to send you push notifications.",
                        "confirm.nativeTitle": "{0} wants to send you notifications",
                        "confirm.info": "Notifications can be turned off anytime from browser settings.",
                        "confirm.allow": "Allow",
                        "confirm.allowChrome": "Allow",
                        "confirm.allowFirefox": "Allow Notifications",
                        "confirm.allowEdge": "Yes",
                        "confirm.deny": "Deny",
                        "confirm.selectTopics": "Which topics are you interested in?",
                        "confirm.doubleText": "Please click on {0} 2x to continue",
                        "confirm.alreadySubscribed": "You have already subscribed to all topics.",
                        "confirm.silentPromptInfo": 'Please click on the small bell and then on "Allow" to continue.',
                        "popup.info": "Click on {0} to confirm push notifications",
                        "popup.text": "Get updates and offers from {0} by subscribing to push notifications.",
                        "unsubscribe.title": "Unsubscribe from notifications",
                        "unsubscribe.confirm": "Are you sure?",
                        "unsubscribe.yes": "Yes",
                        "unsubscribe.no": "No",
                        "unsubscribe.feedback": "Please choose the unsubscribe reason to complete your unsubscription:",
                        "unsubscribe.enterReason": "Please enter the reason:",
                        "unsubscribe.submit": "Submit",
                        "unsubscribe.reasonQuantity": "Too many messages",
                        "unsubscribe.reasonContent": "Not interesting messages",
                        "unsubscribe.reasonOther": "Other reason",
                        "windowclose.confirm": "The process is not yet complete, are you sure you want to cancel it?",
                        "deny.alertHttps": "If you change your mind, click the lock to give your browser permission to send you notifications.",
                        "deny.alertHttp": "If you change your mind, click the info symbol to give your browser permission to send you notifications.",
                        "bell.subscribe": "Subscribe for notifications",
                        "bell.subscribed": "You're subscribed for notifications",
                        "bell.unsubscribeSuccess": "You won't receive notifications again",
                        "bell.hide": "Do not show again",
                        "panel.notifications": "Notifications",
                        "panel.editTopics": "Edit Topics",
                        "panel.settings": "Settings",
                        "panel.notificationsEmpty": "No notifications available.",
                        "panel.save": "Save",
                        "panel.close": "Close",
                        "panel.successfullySaved": "Successfully saved!",
                        "unblock.title": "You have blocked notifications.<br />Please follow these steps to receive notifications",
                        privacy: "Privacy",
                        "chat.emailAddress": "Email address",
                        "chat.name": "Your name",
                        "chat.emailError": "Please enter a valid email address.",
                        "chat.start": "Start chat",
                        "chat.enable": "Enable chat now",
                        "chat.enterMessage": "Please enter message???",
                        "alert.unsupported": "Unfortunately, your browser does not support notifications.",
                        "voucherpool.title": "Your voucher code",
                        "voucherpool.text": "Click here to copy your code",
                        "story.overlay.text": "Open story"
                    },
                    de: {
                        "confirm.title": "{0} w??rde dir gerne Push Nachrichten senden.",
                        "confirm.nativeTitle": "{0} m??chte Ihnen Benachrichtigungen senden",
                        "confirm.info": "Benachrichtigungen k??nnen jederzeit in den Browser Einstellungen deaktiviert werden.",
                        "confirm.allow": "Erlauben",
                        "confirm.allowChrome": "Zulassen",
                        "confirm.allowFirefox": "Benachrichtigungen erlauben",
                        "confirm.allowEdge": "Ja",
                        "confirm.deny": "Verbieten",
                        "confirm.selectTopics": "Welche Themen interessieren Dich?",
                        "confirm.doubleText": "Bitte best??tige 2x mit {0} um fortzufahren",
                        "confirm.alreadySubscribed": "Du hast dich bereits f??r alle Themen angemeldet.",
                        "confirm.silentPromptInfo": 'Bitte klicke auf die kleine Glocke und dann auf "Erlauben" um fortzufahren.',
                        "popup.info": "Klicke auf {0}, um unsere Push-Benachrichtigungen zu best??tigen",
                        "popup.text": "Erhalte Updates und Angebote von {0}, indem du Push-Benachrichtigungen abonnierst.",
                        "unsubscribe.title": "Von Benachrichtigungen abmelden",
                        "unsubscribe.confirm": "Bist du dir sicher?",
                        "unsubscribe.yes": "Ja",
                        "unsubscribe.no": "Nein",
                        "unsubscribe.feedback": "Bitte w??hle den Abmelde-Grund aus um deine Abmeldung zu best??tigen:",
                        "unsubscribe.enterReason": "Bitte gib den Grund ein:",
                        "unsubscribe.submit": "Absenden",
                        "unsubscribe.reasonQuantity": "Zu viele Nachrichten",
                        "unsubscribe.reasonContent": "Uninteressante Nachrichten",
                        "unsubscribe.reasonOther": "Anderer Grund",
                        "windowclose.confirm": "Der Vorgang ist noch nicht abgeschlossen, bist du sicher, dass du ihn abbrechen m??chtest?",
                        "deny.alertHttps": 'Wenn du doch Benachrichtigungen empfangen m??chtest, kannst du mit einem Klick auf das Schloss die Einstellung "Benachrichtigungen" auf "Erlauben" setzen.',
                        "deny.alertHttp": 'Wenn du doch Benachrichtigungen empfangen m??chtest, kannst du mit einem Klick auf das Info-Symbol die Einstellung "Benachrichtigungen" auf "Erlauben" setzen.',
                        "bell.subscribe": "F??r Benachrichtigungen anmelden",
                        "bell.subscribed": "Du bist f??r Benachrichtigungen angemeldet",
                        "bell.unsubscribeSuccess": "Du wirst keine Benachrichtigungen mehr erhalten",
                        "bell.hide": "Nicht mehr anzeigen",
                        "panel.notifications": "Nachrichten",
                        "panel.editTopics": "Themenbereiche bearbeiten",
                        "panel.settings": "Einstellungen",
                        "panel.notificationsEmpty": "Keine Nachrichten vorhanden.",
                        "panel.save": "Speichern",
                        "panel.close": "Schlie&szlig;en",
                        "panel.successfullySaved": "Erfolgreich gespeichert!",
                        "unblock.title": "Du hast Benachrichtigungen blockiert.<br />Bitte folge diesen Schritten um Benachrichtigungen zu empfangen",
                        privacy: "Datenschutz",
                        "chat.emailAddress": "E-Mail Adresse",
                        "chat.name": "Dein Name",
                        "chat.emailError": "Bitte gib eine g??ltige E-Mail Adresse ein.",
                        "chat.start": "Chat starten",
                        "chat.enable": "Chat jetzt aktivieren",
                        "chat.enterMessage": "Bitte Nachricht eingeben???",
                        "alert.unsupported": "Dein Browser unterst??tzt leider keine Benachrichtigungen.",
                        "story.overlay.text": "Story ??ffnen"
                    },
                    "de-formal": (i = {
                        "confirm.title": "{0} w??rde Ihnen gerne Push Nachrichten senden.",
                        "confirm.nativeTitle": "{0} m??chte Ihnen Benachrichtigungen senden",
                        "confirm.info": "Benachrichtigungen k??nnen jederzeit in den Browser Einstellungen deaktiviert werden.",
                        "confirm.allow": "Erlauben",
                        "confirm.allowChrome": "Zulassen",
                        "confirm.allowFirefox": "Benachrichtigungen erlauben",
                        "confirm.allowEdge": "Ja",
                        "confirm.deny": "Verbieten",
                        "confirm.selectTopics": "Welche Themen interessieren Sie?"
                    }, o()(i, "confirm.selectTopics", "Zu welchen Themen m??chten Sie Push Nachrichten erhalten?"), o()(i, "confirm.doubleText", "Bitte best??tigen Sie 2x mit {0} um fortzufahren"), o()(i, "confirm.alreadySubscribed", "Sie haben sich bereits f??r alle Themen angemeldet."), o()(i, "confirm.silentPromptInfo", 'Bitte klicken Sie auf die kleine Glocke und dann auf "Erlauben" um fortzufahren.'), o()(i, "popup.info", "Klicken Sie auf {0}, um unsere Push-Benachrichtigungen zu best??tigen"), o()(i, "popup.text", "Erhalten Sie Updates und Angebote von {0}, indem Sie Push-Benachrichtigungen abonnieren."), o()(i, "unsubscribe.title", "Von Benachrichtigungen abmelden"), o()(i, "unsubscribe.confirm", "Sind Sie sich sicher?"), o()(i, "unsubscribe.yes", "Ja"), o()(i, "unsubscribe.no", "Nein"), o()(i, "unsubscribe.feedback", "Bitte w??hlen Sie den Abmelde-Grund aus um Ihre Abmeldung zu best??tigen:"), o()(i, "unsubscribe.enterReason", "Bitte geben Sie den Grund ein:"), o()(i, "unsubscribe.submit", "Absenden"), o()(i, "unsubscribe.reasonQuantity", "Zu viele Nachrichten"), o()(i, "unsubscribe.reasonContent", "Uninteressante Nachrichten"), o()(i, "unsubscribe.reasonOther", "Anderer Grund"), o()(i, "windowclose.confirm", "Der Vorgang ist noch nicht abgeschlossen, sind Sie sich sicher, dass Sie ihn abbrechen m??chten?"), o()(i, "deny.alertHttps", 'Wenn Sie doch Benachrichtigungen empfangen m??chten, k??nnen Sie mit einem Klick auf das Schloss die Einstellung "Benachrichtigungen" auf "Erlauben" setzen.'), o()(i, "deny.alertHttp", 'Wenn Sie doch Benachrichtigungen empfangen m??chten, k??nnen Sie mit einem Klick auf das Info-Symbol die Einstellung "Benachrichtigungen" auf "Erlauben" setzen.'), o()(i, "bell.subscribe", "F??r Benachrichtigungen anmelden"), o()(i, "bell.subscribed", "Sie sind f??r Benachrichtigungen angemeldet"), o()(i, "bell.unsubscribeSuccess", "Sie werden keine Benachrichtigungen mehr erhalten"), o()(i, "panel.notifications", "Benachrichtigungen"), o()(i, "panel.editTopics", "Themenbereiche bearbeiten"), o()(i, "panel.settings", "Einstellungen"), o()(i, "panel.notificationsEmpty", "Keine Benachrichtigungen vorhanden."), o()(i, "panel.save", "Speichern"), o()(i, "panel.close", "Schlie&szlig;en"), o()(i, "panel.successfullySaved", "Erfolgreich gespeichert!"), o()(i, "unblock.title", "Sie haben Benachrichtigungen blockiert.<br />Bitte folgen Sie diesen Schritten um Benachrichtigungen zu empfangen"), o()(i, "privacy", "Datenschutz"), o()(i, "chat.emailAddress", "E-Mail Adresse"), o()(i, "chat.name", "Ihr Name"), o()(i, "chat.emailError", "Bitte geben Sie eine g??ltige E-Mail Adresse ein."), o()(i, "chat.start", "Chat starten"), o()(i, "chat.enable", "Chat jetzt aktivieren"), o()(i, "chat.enterMessage", "Bitte Nachricht eingeben???"), o()(i, "alert.unsupported", "Ihr Browser unterst??tzt leider keine Benachrichtigungen."), o()(i, "voucherpool.title", "Dein Gutscheincode"), o()(i, "voucherpool.text", "Klicke hier um deinen Code zu kopieren"), o()(i, "story.overlay.text", "Story ??ffnen"), i)
                }
            },
            4740: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => d
                });
                var i = n(4575),
                    r = n.n(i),
                    o = n(8585),
                    a = n.n(o),
                    s = n(9754),
                    c = n.n(s),
                    _ = n(1506),
                    u = n.n(_),
                    l = n(2205),
                    f = n.n(l),
                    h = n(5957),
                    d = function(e) {
                        function t(e, n) {
                            var i;
                            return r()(this, t), (i = a()(this, c()(t).call(this, e))).name = i.constructor.name, i.reason = n, "function" == typeof Error.captureStackTrace ? Error.captureStackTrace(u()(i), i.constructor) : i.stack = new Error(e).stack, i
                        }
                        return f()(t, e), t
                    }(n.n(h)()(Error))
            },
            2136: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => s
                });
                var i = n(4575),
                    r = n.n(i),
                    o = n(9713),
                    a = n.n(o),
                    s = function e() {
                        r()(this, e)
                    };
                a()(s, "CONNECTED", "connect"), a()(s, "REMOTE_NOTIFICATION_PERMISSION", "cleverpush.remoteNotificationPermission"), a()(s, "REMOTE_OPERATION_COMPLETE", "cleverpush.operationComplete"), a()(s, "REMOTE_RETRIGGER_EVENT", "cleverpush.remoteRetriggerEvent"), a()(s, "MODAL_LOADED", "cleverpush.modalPrompt.loaded"), a()(s, "MODAL_PROMPT_ACCEPTED", "cleverpush.modalPrompt.accepted"), a()(s, "MODAL_PROMPT_REJECTED", "cleverpush.modalPrompt.canceled"), a()(s, "POPUP_LOADED", "cleverpush.popup.loaded"), a()(s, "POPUP_ACCEPTED", "cleverpush.popup.accepted"), a()(s, "POPUP_REJECTED", "cleverpush.popup.canceled"), a()(s, "POPUP_CLOSING", "cleverpush.popup.closing"), a()(s, "REMOTE_NOTIFICATION_PERMISSION_CHANGED", "cleverpush.remoteNotificationPermissionChanged"), a()(s, "IFRAME_POPUP_INITIALIZE", "cleverpush.iframePopupInitialize"), a()(s, "UNSUBSCRIBE_FROM_PUSH", "cleverpush.unsubscribeFromPush"), a()(s, "BEGIN_BROWSING_SESSION", "cleverpush.beginBrowsingSession"), a()(s, "REQUEST_HOST_URL", "cleverpush.requestHostUrl"), a()(s, "SHOW_HTTP_PERMISSION_REQUEST", "cleverpush.showHttpPermissionRequest"), a()(s, "IS_SHOWING_HTTP_PERMISSION_REQUEST", "cleverpush.isShowingHttpPermissionRequest"), a()(s, "WINDOW_TIMEOUT", "cleverpush.windowTimeout"), a()(s, "FINISH_REMOTE_REGISTRATION", "cleverpush.finishRemoteRegistration"), a()(s, "FINISH_REMOTE_REGISTRATION_IN_PROGRESS", "cleverpush.finishRemoteRegistrationInProgress"), a()(s, "POPUP_BEGIN_MESSAGEPORT_COMMS", "cleverpush.beginMessagePortComms"), a()(s, "SERVICEWORKER_COMMAND_REDIRECT", "cleverpush.command.redirect"), a()(s, "HTTP_PERMISSION_REQUEST_RESUBSCRIBE", "cleverpush.httpPermissionRequestResubscribe"), a()(s, "MARK_PROMPT_DISMISSED", "cleverpush.markPromptDismissed")
            },
            1328: (e, t, n) => {
                "use strict";

                function i(e) {
                    var t = !1,
                        n = document.createElement("div");
                    n.innerHTML = "&nbsp;", n.className = "adsbox", document.body.appendChild(n), window.setTimeout((function() {
                        0 === n.offsetHeight && (t = !0), n.remove(), e(t)
                    }), 100)
                }
                n.d(t, {
                    Z: () => i
                })
            },
            1078: (e, t, n) => {
                "use strict";
                n.d(t, {
                    cM: () => a,
                    To: () => c,
                    tI: () => u
                });
                var i = n(2043),
                    r = n(7159),
                    o = i.methodFactory,
                    a = i.getLogger("cleverpush"),
                    s = (0, r.dU)().toUpperCase();

                function c(e) {
                    return "code" === e ? '\n    padding: 0 1px 1px 5px;\n    border: 1px solid #ddd;\n    border-radius: 3px;\n    font-family: Monaco,"DejaVu Sans Mono","Courier New",monospace;\n    color: #444;\n    ' : "bold" === e ? "\n    font-weight: 600;\n    color: rgb(51, 51, 51);\n    " : "alert" === e ? "\n    font-weight: 600;\n    color: red;\n    " : ""
                }

                function _(e) {
                    return JSON.stringify(e, (function(e, t) {
                        return "function" == typeof t ? "[Function]" : t
                    }), 4)
                }

                function u(e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                    return a.debug("Called %c".concat(e, "(").concat(n.map(_).join(", "), ")"), c("code"), ".")
                }
                a.methodFactory = function(e, t, n) {
                    var i = o(e, t, n);
                    return function() {
                        for (var e = [], t = 0; t < arguments.length; t++) {
                            var n = arguments[t];
                            0 === t && "string" == typeof arguments[t] && (n = "[CleverPush][".concat(s, "] ").concat(n)), e.push(n)
                        }
                        i.apply(this, e)
                    }
                }, a.setLevel(a.getLevel(), !1)
            },
            6716: (e, t, n) => {
                "use strict";
                n.d(t, {
                    F: () => a
                });
                var i = n(5895),
                    r = n(1078),
                    o = n(7159),
                    a = function(e) {
                        var t = e.subscriptionManager,
                            n = e.config,
                            a = e.subscribe,
                            s = e.showBackdrop,
                            c = e.setShowBackdrop,
                            _ = e.showSilentAlert;
                        if ("safari" === n.browserType) {
                            r.cM.debug("starting safariBlurChecker"),
                                function e(n) {
                                    "default" === t.getNotificationPermission() && (document.hasFocus() ? n < 300 ? setTimeout((function() {
                                        e(n + 1)
                                    }), 100) : r.cM.debug("safariBlurChecker waited 30 secs without success") : (r.cM.debug("safariBlurChecker success"), s()))
                                }(0), a && a()
                        } else {
                            var u = function() {
                                (0, i.$k)().then((function() {
                                    var e = !0;
                                    if ("PREVIEW" === n.env) s();
                                    else {
                                        var t = !1,
                                            i = function n() {
                                                t || (r.cM.debug("Blur checker fired"), clearTimeout(c), window.removeEventListener("blur", n), t = !0, e && s())
                                            };
                                        window.addEventListener("blur", i);
                                        var c = setTimeout((function() {
                                            r.cM.debug("Blur checker cancelled"), window.removeEventListener("blur", i), !_ || "mobile" === o.Uh.type || ["Firefox", "Mozilla"].includes(o.Xh.name) || "Edge" === o.Xh.name && !n.showSilentPromptTutorial || _()
                                        }), 2e3)
                                    }
                                    a && a((function() {
                                        e = !1
                                    }))
                                }))
                            };
                            "w3c" === n.browserType && "storage" in navigator && "estimate" in navigator.storage ? navigator.storage.estimate().then((function(e) {
                                e.quota <= 120 * Math.pow(2, 20) ? (c && c(!1), r.cM.debug("We are *probably* in incognito (used chrome 76 detection method). Will not show backdrop + layer."), a && (0, i.$k)().then((function() {
                                    a()
                                }))) : u()
                            })) : u()
                        }
                    }
            },
            5895: (e, t, n) => {
                "use strict";

                function i() {
                    return new Promise((function(e) {
                        if ("complete" === document.readyState) e();
                        else {
                            var t = function t() {
                                e(), document.removeEventListener("DOMContentLoaded", t, !0), window.removeEventListener("load", t, !0)
                            };
                            document.addEventListener("DOMContentLoaded", t, !0), window.addEventListener("load", t, !0)
                        }
                    }))
                }

                function r() {
                    return new Promise((function(e) {
                        "loading" !== document.readyState ? e() : document.addEventListener ? document.addEventListener("DOMContentLoaded", e) : document.attachEvent("onreadystatechange", (function() {
                            "loading" !== document.readyState && e()
                        }))
                    }))
                }

                function o(e) {
                    var t = document.createDocumentFragment(),
                        n = document.createElement("div");
                    for (n.innerHTML = e; n.firstChild;) t.appendChild(n.firstChild);
                    return t
                }

                function a(e, t, n) {
                    e.style.opacity = 0;
                    var i = +new Date;
                    ! function r() {
                        var o = +e.style.opacity + (new Date - i) / t;
                        o > 1 && (o = 1), e.style.opacity = o, i = +new Date, +e.style.opacity < 1 ? window.requestAnimationFrame && requestAnimationFrame(r) || setTimeout(r, 16) : "function" == typeof n && n()
                    }()
                }

                function s(e, t, n) {
                    e.style.opacity = 1;
                    var i = +new Date;
                    ! function r() {
                        var o = +e.style.opacity - (new Date - i) / t;
                        o < 0 && (o = 0), e.style.opacity = o, i = +new Date, +e.style.opacity > 0 ? window.requestAnimationFrame && requestAnimationFrame(r) || setTimeout(r, 16) : "function" == typeof n && n()
                    }()
                }

                function c(e) {
                    for (var t = e.offsetTop, n = e.offsetLeft, i = e.offsetWidth, r = e.offsetHeight, o = e; o.offsetParent;) t += (o = o.offsetParent).offsetTop, n += o.offsetLeft;
                    return t < window.pageYOffset + window.innerHeight && n < window.pageXOffset + window.innerWidth && t + r > window.pageYOffset && n + i > window.pageXOffset
                }

                function _(e) {
                    var t = window.pageYOffset,
                        n = (window.innerHeight, e.getBoundingClientRect()),
                        i = n.top + t,
                        r = i + n.height,
                        o = (window.pageYOffset - i) / (r - window.innerHeight - i) * 100;
                    return o < 0 ? 0 : o > 100 ? 100 : o
                }
                n.d(t, {
                    $k: () => i,
                    AE: () => r,
                    dS: () => o,
                    Ji: () => a,
                    U6: () => s,
                    v4: () => c,
                    Y6: () => _
                })
            },
            7159: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Xh: () => d,
                    os: () => p,
                    Uh: () => g,
                    x_: () => m,
                    KK: () => v,
                    dU: () => E,
                    MD: () => w,
                    jU: () => P,
                    Dt: () => I,
                    CO: () => M,
                    io: () => O,
                    cL: () => y,
                    r0: () => D,
                    H$: () => C
                });
                var i = n(8),
                    r = n.n(i),
                    o = n(2238),
                    a = n.n(o),
                    s = n(4740),
                    c = "serviceWorker",
                    _ = "host",
                    u = "popup",
                    l = "iframe",
                    f = "customSubdomain",
                    h = new(a()),
                    d = h.getBrowser(),
                    p = h.getOS(),
                    g = h.getDevice(),
                    b = d.version ? d.version.split(".") : ["0"],
                    m = d.version ? parseInt(b[0], 10) : 0,
                    v = b.length > 1 ? parseInt(b[1], 10) : 0;

                function E(e) {
                    if ("undefined" != typeof window) {
                        var t = e;
                        if (t || (t = (window.CleverPush || {}).config || {}), t && "HOST" === t.env) return _;
                        if (window === window.top) {
                            var n = t.cleverpushDomain;
                            if ("POPUP" === t.env || location.hostname.indexOf(".cleverpush.com") > -1) {
                                if (0 === location.pathname.indexOf("/subscribe")) return u
                            } else if (n && location.hostname.indexOf("." + n) > -1 && 0 === location.pathname.indexOf("/subscribe")) return u;
                            return _
                        }
                        return 0 === location.pathname.indexOf("/iframe") || 0 === location.pathname.indexOf("/referrals") ? l : f
                    }
                    return "undefined" != typeof WorkerLocation && location instanceof WorkerLocation ? c : null
                }

                function w(e) {
                    return E(e) === _
                }

                function P() {
                    return "undefined" != typeof window
                }

                function I() {
                    return /Android/.test(navigator.userAgent)
                }

                function M(e) {
                    return E(e) === u && P()
                }

                function O() {
                    return location.hostname.indexOf(".cleverpush.com") > -1 && 0 === location.pathname.indexOf("/unsubscribe") && P()
                }

                function y(e) {
                    return E(e) === l && P()
                }

                function D() {
                    var e = document.documentElement,
                        t = document.body,
                        n = "scrollTop",
                        i = "scrollHeight";
                    return (e[n] || t[n]) / ((e[i] || t[i]) - e.clientHeight) * 100
                }

                function C() {
                    var e = !0,
                        t = null;
                    return new Promise((function(n, i) {
                        new Promise((function(e) {
                            var t = function() {
                                    return e(!0)
                                },
                                n = function() {
                                    return e(!1)
                                };
                            if (!window.webkitRequestFileSystem) {
                                if ("MozAppearance" in document.documentElement.style) {
                                    var i = indexedDB.open("test");
                                    return i.onerror = t, void(i.onsuccess = n)
                                }
                                if (/constructor/i.test(window.HTMLElement) || navigator.vendor && navigator.vendor.indexOf("Apple") > -1 && navigator.userAgent && navigator.userAgent.indexOf("CriOS") < 0 && navigator.userAgent.indexOf("FxiOS") < 0) {
                                    if (void 0 !== window.openDatabase) try {
                                        window.openDatabase(null, null, null, null), window.localStorage.setItem("test", 1)
                                    } catch (e) {
                                        return t()
                                    }
                                    return function() {
                                        try {
                                            localStorage.length ? n() : (localStorage.x = 1, localStorage.removeItem("x"), n())
                                        } catch (e) {
                                            navigator.cookieEnabled ? t() : n()
                                        }
                                    }()
                                }
                                return window.indexedDB || !window.PointerEvent && !window.MSPointerEvent ? n() : t()
                            }
                            window.webkitRequestFileSystem(0, 0, n, t)
                        })).then((function(o) {
                            o ? (e = !1, t = null, i(new s.Z("Private browsing mode not supported.", "private-mode"))) : ("safari" in window && "object" === r()(window.safari) && "pushNotification" in window.safari ? t = "safari" : void 0 !== window.Notification && ("serviceWorker" in navigator || "http:" === location.protocol) ? t = "w3c" : (e = !1, t = null, i(new s.Z("Browser is not supported.", "unsupported-browser"))), e && "safari" !== t && "ios" !== t && ("http:" === location.protocol || "showNotification" in ServiceWorkerRegistration.prototype ? "PushManager" in window || (e = !1, i(new s.Z("Push messaging isn't supported.", "unsupported-browser"))) : (e = !1, i(new s.Z("Notifications aren't supported.", "unsupported-browser"))), "serviceWorker" in navigator || "http:" === location.protocol || (e = !1, i(new s.Z("Service workers are not supported.", "unsupported-browser"))), navigator.userAgent.indexOf("Iron") > -1 && navigator.userAgent.indexOf("Chrome") > -1 && (e = !1, i(new s.Z("SRWare Iron does not support push", "unsupported-browser")))), e && (window.self === window.top && "w3c" === t && navigator.serviceWorker && "function" == typeof navigator.serviceWorker.getRegistrations ? navigator.serviceWorker.getRegistrations().then((function() {
                                return n(t)
                            })).catch((function() {
                                return i(new s.Z("Service workers are not supported", "unsupported-browser"))
                            })) : n(t)))
                        }))
                    }))
                }
            },
            5632: (e, t, n) => {
                "use strict";
                n.d(t, {
                    c: () => c,
                    t: () => _
                });
                var i = n(8),
                    r = [],
                    o = !0;
                if ("function" == typeof __tcfapi && "object" === ("undefined" == typeof UC_UI ? "undefined" : n.n(i)()(UC_UI))) {
                    var a = function() {
                        return UC_UI.getServices().find((function(e) {
                            return e.name && (e.name || "").toLowerCase().indexOf("cxense") > -1 || (e.name || "").toLowerCase().indexOf("piano dmp") > -1
                        }))
                    };
                    o = !1;
                    var s = a();
                    s && (o = s.consent.status), __tcfapi("addEventListener", 2, (function(e) {
                        if (e && (s = a())) {
                            var t = s.consent.status;
                            t !== o && (o = t, r.forEach((function(e) {
                                return "function" == typeof e && e(o)
                            })))
                        }
                    }))
                }
                var c = function() {
                        return o
                    },
                    _ = function(e) {
                        return r.push(e)
                    }
            },
            5401: () => {
                Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
                    value: function(e) {
                        if (null == this) throw new TypeError('"this" is null or not defined');
                        var t = Object(this),
                            n = t.length >>> 0;
                        if ("function" != typeof e) throw new TypeError("predicate must be a function");
                        for (var i = arguments[1], r = 0; r < n;) {
                            var o = t[r];
                            if (e.call(i, o, r, t)) return o;
                            r++
                        }
                    },
                    configurable: !0,
                    writable: !0
                })
            },
            1624: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => o
                });
                var i = n(4740);

                function r(e) {
                    return new Promise((function(t) {
                        return e.json().then((function(n) {
                            return t({
                                status: e.status,
                                ok: e.ok,
                                json: n
                            })
                        })).catch((function() {
                            return t({
                                status: e.status,
                                ok: e.ok,
                                json: null
                            })
                        }))
                    }))
                }

                function o(e, t) {
                    return new Promise((function(n, o) {
                        (function(e, t) {
                            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e4;
                            return Promise.race([fetch(e, t), new Promise((function(e, t) {
                                return setTimeout((function() {
                                    return t(new Error("request timeout"))
                                }), n)
                            }))])
                        })(e, t, t.timeout || 1e4).then(r).then((function(e) {
                            return e.ok ? n(e.json) : o(new i.Z(e.json ? e.json.error : "HTTP Error", e.status))
                        })).catch((function(e) {
                            return o(e)
                        }))
                    }))
                }
            },
            9800: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                "use strict";
                __webpack_require__.d(__webpack_exports__, {
                    e: () => checkTags
                });
                var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8),
                    _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__),
                    _debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1078),
                    autoAssignTagMatches = function autoAssignTagMatches(tag, pathname, callback) {
                        if (tag.autoAssignPath) {
                            var path = tag.autoAssignPath;
                            if ("[EMPTY]" === path && (path = ""), !new RegExp(path).test(pathname)) return;
                            if (!tag.autoAssignFunction && !tag.autoAssignSelector) return callback(!0)
                        }
                        if (tag.autoAssignFunction) try {
                            if (tag.autoAssignCheckInterval && !isNaN(tag.autoAssignCheckInterval)) {
                                var interval = setInterval((function() {
                                    try {
                                        var matches = eval(tag.autoAssignFunction);
                                        if ("promise" == typeof matches && matches.then) try {
                                            matches.then((function() {
                                                clearInterval(interval), callback(!0)
                                            }))
                                        } catch (e) {} else matches && (clearInterval(interval), callback(!0))
                                    } catch (e) {
                                        _debug__WEBPACK_IMPORTED_MODULE_1__.cM.debug(e)
                                    }
                                }), tag.autoAssignCheckInterval);
                                return null
                            }
                            return callback(!!eval(tag.autoAssignFunction))
                        } catch (e) {
                            _debug__WEBPACK_IMPORTED_MODULE_1__.cM.debug(e)
                        }
                        if (tag.autoAssignSelector) try {
                            for (var triggerElems = document.querySelectorAll(tag.autoAssignSelector), triggerElemIndex = 0; triggerElemIndex < triggerElems.length; triggerElemIndex += 1) {
                                var triggerElem = triggerElems[triggerElemIndex];
                                triggerElem && triggerElem.addEventListener("click", (function() {
                                    callback(!0)
                                }))
                            }
                            return null
                        } catch (e) {
                            _debug__WEBPACK_IMPORTED_MODULE_1__.cM.debug(e)
                        }
                        return callback(!1)
                    },
                    checkTags = function(e, t, n, i, r) {
                        (0, _debug__WEBPACK_IMPORTED_MODULE_1__.tI)("checkTags"), e && e.length && "undefined" != typeof localStorage && e.forEach((function(e) {
                            autoAssignTagMatches(e, r, (function(t) {
                                if (_debug__WEBPACK_IMPORTED_MODULE_1__.cM.debug("autoAssignTagMatches callback"), t) {
                                    var r, o = isNaN(e.autoAssignVisits) ? 0 : e.autoAssignVisits,
                                        a = "cleverpush-tag-autoAssignVisits-" + e._id,
                                        s = e.autoAssignSessionVisits ? sessionStorage : localStorage,
                                        c = (new Date).toISOString().substr(0, 10);
                                    e.autoAssignDays && (r = new Date).setDate(r.getDate() - e.autoAssignDays);
                                    var _ = s.getItem(a),
                                        u = 0,
                                        l = {};
                                    if (e.autoAssignDays) try {
                                        l = JSON.parse(_) || {}, "object" !== _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(l) && (l = {}), Object.keys(l || {}).forEach((function(e) {
                                            new Date(e) >= r ? u += l[e] || 0 : delete l[e]
                                        }))
                                    } catch (e) {
                                        l = {}
                                    } else "string" != typeof _ || isNaN(_) || (u = parseInt(_, 10));
                                    var f = isNaN(e.autoAssignSessions) ? 0 : e.autoAssignSessions,
                                        h = "cleverpush-tag-autoAssignSessions-" + e._id,
                                        d = "cleverpush-tag-autoAssignSessionsCounted-" + e._id,
                                        p = localStorage.getItem(h),
                                        g = 0,
                                        b = {};
                                    if (e.autoAssignDays) try {
                                        b = JSON.parse(p) || {}, "object" !== _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(b) && (b = {}), Object.keys(b || {}).forEach((function(e) {
                                            new Date(e) >= r ? g += b[e] || 0 : delete b[e]
                                        }))
                                    } catch (e) {
                                        b = {}
                                    } else "string" != typeof p || isNaN(p) || (g = parseInt(p, 10));
                                    g >= f ? u >= o ? !isNaN(e.autoAssignSeconds) && e.autoAssignSeconds ? setTimeout((function() {
                                        n(e._id)
                                    }), 1e3 * e.autoAssignSeconds) : n(e._id) : e.autoAssignDays ? (l[c] || (l[c] = 0), l[c] += 1, i().then((function() {
                                        localStorage.setItem(a, JSON.stringify(l))
                                    }))) : (u += 1, i().then((function() {
                                        s.setItem(a, u.toString())
                                    }))) : e.autoAssignDays ? (l[c] || (l[c] = 0), l[c] += 1, i().then((function() {
                                        localStorage.setItem(a, JSON.stringify(l))
                                    })), "true" !== sessionStorage.getItem(d) && (b[c] || (b[c] = 0), b[c] += 1, i().then((function() {
                                        sessionStorage.setItem(d, "true"), localStorage.setItem(h, JSON.stringify(b))
                                    })))) : (u += 1, i().then((function() {
                                        s.setItem(a, u.toString())
                                    })), "true" !== sessionStorage.getItem(d) && (g += 1, i().then((function() {
                                        sessionStorage.setItem(d, "true"), localStorage.setItem(h, g.toString())
                                    }))))
                                }
                            }))
                        }))
                    }
            },
            3114: (e, t, n) => {
                "use strict";
                n.d(t, {
                    I: () => a,
                    R: () => s
                });
                var i = n(2238),
                    r = n.n(i),
                    o = n(8397);
                n(1078);

                function a(e) {
                    var t = (window.CleverPush || {
                        config: {}
                    }).config.language || navigator.language || navigator.userLanguage || "en";
                    t = "de-formal" !== t ? t.substr(0, 2).toLowerCase() : t, o.Z.hasOwnProperty(t) || (t = "en");
                    var n, i = e;
                    if ("confirm.allowBrowser" === i) {
                        i = "confirm.allow";
                        var a = new(r());
                        "Chrome" === a.getBrowser().name ? i = "confirm.allowChrome" : "Firefox" === a.getBrowser().name ? i = "confirm.allowFirefox" : "Edge" === a.getBrowser().name && (i = "confirm.allowEdge")
                    } else "deny.alert" === i && (i = "https:" === location.protocol ? "deny.alertHttps" : "deny.alertHttp");
                    if (o.Z[t].hasOwnProperty(i) ? n = o.Z[t][i] : o.Z.en.hasOwnProperty(i) && (n = o.Z.en[i]), n) {
                        var s = (document.characterSet || "").toLowerCase();
                        if (s.indexOf("windows-1252") > -1 || s.indexOf("iso-8859") > -1) try {
                            return decodeURIComponent(escape(n))
                        } catch (e) {}
                        return n
                    }
                    return i
                }

                function s(e) {
                    var t = e,
                        n = (document.characterSet || "").toLowerCase();
                    if (n.indexOf("windows-1252") > -1 || n.indexOf("iso-8859") > -1) try {
                        t = decodeURIComponent(escape(e))
                    } catch (e) {}
                    return t
                }
                String.prototype.formatCleverPush = function() {
                    var e = this;
                    for (var t in arguments) arguments.hasOwnProperty(t) && "function" == typeof e.replace && (e = e.replace("{".concat(t, "}"), arguments[t]));
                    return e
                }
            },
            2043: function(e, t, n) {
                var i, r;
                ! function(o, a) {
                    "use strict";
                    void 0 === (r = "function" == typeof(i = function() {
                        var e = function() {},
                            t = "undefined",
                            n = ["trace", "debug", "info", "warn", "error"];

                        function i(e, t) {
                            var n = e[t];
                            if ("function" == typeof n.bind) return n.bind(e);
                            try {
                                return Function.prototype.bind.call(n, e)
                            } catch (t) {
                                return function() {
                                    return Function.prototype.apply.apply(n, [e, arguments])
                                }
                            }
                        }

                        function r(t, i) {
                            for (var r = 0; r < n.length; r++) {
                                var o = n[r];
                                this[o] = r < t ? e : this.methodFactory(o, t, i)
                            }
                            this.log = this.debug
                        }

                        function o(e, n, i) {
                            return function() {
                                typeof console !== t && (r.call(this, n, i), this[e].apply(this, arguments))
                            }
                        }

                        function a(n, r, a) {
                            return function(n) {
                                return "debug" === n && (n = "log"), typeof console !== t && (void 0 !== console[n] ? i(console, n) : void 0 !== console.log ? i(console, "log") : e)
                            }(n) || o.apply(this, arguments)
                        }

                        function s(e, i, o) {
                            var s, c = this,
                                _ = "loglevel";

                            function u() {
                                var e;
                                if (typeof window !== t) {
                                    try {
                                        e = window.localStorage[_]
                                    } catch (e) {}
                                    if (typeof e === t) try {
                                        var n = window.document.cookie,
                                            i = n.indexOf(encodeURIComponent(_) + "="); - 1 !== i && (e = /^([^;]+)/.exec(n.slice(i))[1])
                                    } catch (e) {}
                                    return void 0 === c.levels[e] && (e = void 0), e
                                }
                            }
                            e && (_ += ":" + e), c.name = e, c.levels = {
                                TRACE: 0,
                                DEBUG: 1,
                                INFO: 2,
                                WARN: 3,
                                ERROR: 4,
                                SILENT: 5
                            }, c.methodFactory = o || a, c.getLevel = function() {
                                return s
                            }, c.setLevel = function(i, o) {
                                if ("string" == typeof i && void 0 !== c.levels[i.toUpperCase()] && (i = c.levels[i.toUpperCase()]), !("number" == typeof i && i >= 0 && i <= c.levels.SILENT)) throw "log.setLevel() called with invalid level: " + i;
                                if (s = i, !1 !== o && function(e) {
                                        var i = (n[e] || "silent").toUpperCase();
                                        if (typeof window !== t) {
                                            try {
                                                return void(window.localStorage[_] = i)
                                            } catch (e) {}
                                            try {
                                                window.document.cookie = encodeURIComponent(_) + "=" + i + ";"
                                            } catch (e) {}
                                        }
                                    }(i), r.call(c, i, e), typeof console === t && i < c.levels.SILENT) return "No console available for logging"
                            }, c.setDefaultLevel = function(e) {
                                u() || c.setLevel(e, !1)
                            }, c.enableAll = function(e) {
                                c.setLevel(c.levels.TRACE, e)
                            }, c.disableAll = function(e) {
                                c.setLevel(c.levels.SILENT, e)
                            };
                            var l = u();
                            null == l && (l = null == i ? "WARN" : i), c.setLevel(l, !1)
                        }
                        var c = new s,
                            _ = {};
                        c.getLogger = function(e) {
                            if ("string" != typeof e || "" === e) throw new TypeError("You must supply a name when creating a logger.");
                            var t = _[e];
                            return t || (t = _[e] = new s(e, c.getLevel(), c.methodFactory)), t
                        };
                        var u = typeof window !== t ? window.log : void 0;
                        return c.noConflict = function() {
                            return typeof window !== t && window.log === c && (window.log = u), c
                        }, c.getLoggers = function() {
                            return _
                        }, c
                    }) ? i.call(t, n, t, e) : i) || (e.exports = r)
                }()
            },
            1474: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => i
                });
                const i = function(e) {
                    var t = this.constructor;
                    return this.then((function(n) {
                        return t.resolve(e()).then((function() {
                            return n
                        }))
                    }), (function(n) {
                        return t.resolve(e()).then((function() {
                            return t.reject(n)
                        }))
                    }))
                }
            },
            3705: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => d
                });
                var i = n(1474),
                    r = setTimeout;

                function o(e) {
                    return Boolean(e && void 0 !== e.length)
                }

                function a() {}

                function s(e) {
                    if (!(this instanceof s)) throw new TypeError("Promises must be constructed via new");
                    if ("function" != typeof e) throw new TypeError("not a function");
                    this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], h(e, this)
                }

                function c(e, t) {
                    for (; 3 === e._state;) e = e._value;
                    0 !== e._state ? (e._handled = !0, s._immediateFn((function() {
                        var n = 1 === e._state ? t.onFulfilled : t.onRejected;
                        if (null !== n) {
                            var i;
                            try {
                                i = n(e._value)
                            } catch (e) {
                                return void u(t.promise, e)
                            }
                            _(t.promise, i)
                        } else(1 === e._state ? _ : u)(t.promise, e._value)
                    }))) : e._deferreds.push(t)
                }

                function _(e, t) {
                    try {
                        if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
                        if (t && ("object" == typeof t || "function" == typeof t)) {
                            var n = t.then;
                            if (t instanceof s) return e._state = 3, e._value = t, void l(e);
                            if ("function" == typeof n) return void h((i = n, r = t, function() {
                                i.apply(r, arguments)
                            }), e)
                        }
                        e._state = 1, e._value = t, l(e)
                    } catch (t) {
                        u(e, t)
                    }
                    var i, r
                }

                function u(e, t) {
                    e._state = 2, e._value = t, l(e)
                }

                function l(e) {
                    2 === e._state && 0 === e._deferreds.length && s._immediateFn((function() {
                        e._handled || s._unhandledRejectionFn(e._value)
                    }));
                    for (var t = 0, n = e._deferreds.length; t < n; t++) c(e, e._deferreds[t]);
                    e._deferreds = null
                }

                function f(e, t, n) {
                    this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n
                }

                function h(e, t) {
                    var n = !1;
                    try {
                        e((function(e) {
                            n || (n = !0, _(t, e))
                        }), (function(e) {
                            n || (n = !0, u(t, e))
                        }))
                    } catch (e) {
                        if (n) return;
                        n = !0, u(t, e)
                    }
                }
                s.prototype.catch = function(e) {
                    return this.then(null, e)
                }, s.prototype.then = function(e, t) {
                    var n = new this.constructor(a);
                    return c(this, new f(e, t, n)), n
                }, s.prototype.finally = i.Z, s.all = function(e) {
                    return new s((function(t, n) {
                        if (!o(e)) return n(new TypeError("Promise.all accepts an array"));
                        var i = Array.prototype.slice.call(e);
                        if (0 === i.length) return t([]);
                        var r = i.length;

                        function a(e, o) {
                            try {
                                if (o && ("object" == typeof o || "function" == typeof o)) {
                                    var s = o.then;
                                    if ("function" == typeof s) return void s.call(o, (function(t) {
                                        a(e, t)
                                    }), n)
                                }
                                i[e] = o, 0 == --r && t(i)
                            } catch (e) {
                                n(e)
                            }
                        }
                        for (var s = 0; s < i.length; s++) a(s, i[s])
                    }))
                }, s.resolve = function(e) {
                    return e && "object" == typeof e && e.constructor === s ? e : new s((function(t) {
                        t(e)
                    }))
                }, s.reject = function(e) {
                    return new s((function(t, n) {
                        n(e)
                    }))
                }, s.race = function(e) {
                    return new s((function(t, n) {
                        if (!o(e)) return n(new TypeError("Promise.race accepts an array"));
                        for (var i = 0, r = e.length; i < r; i++) s.resolve(e[i]).then(t, n)
                    }))
                }, s._immediateFn = "function" == typeof setImmediate && function(e) {
                    setImmediate(e)
                } || function(e) {
                    r(e, 0)
                }, s._unhandledRejectionFn = function(e) {
                    "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
                };
                const d = s
            },
            2238: function(e, t, n) {
                var i;
                ! function(r, o) {
                    "use strict";
                    var a = "model",
                        s = "name",
                        c = "type",
                        _ = "vendor",
                        u = "version",
                        l = "mobile",
                        f = "tablet",
                        h = "smarttv",
                        d = {
                            extend: function(e, t) {
                                var n = {};
                                for (var i in e) t[i] && t[i].length % 2 == 0 ? n[i] = t[i].concat(e[i]) : n[i] = e[i];
                                return n
                            },
                            has: function(e, t) {
                                return "string" == typeof e && -1 !== t.toLowerCase().indexOf(e.toLowerCase())
                            },
                            lowerize: function(e) {
                                return e.toLowerCase()
                            },
                            major: function(e) {
                                return "string" == typeof e ? e.replace(/[^\d\.]/g, "").split(".")[0] : void 0
                            },
                            trim: function(e) {
                                return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                            }
                        },
                        p = {
                            rgx: function(e, t) {
                                for (var n, i, r, o, a, s, c = 0; c < t.length && !a;) {
                                    var _ = t[c],
                                        u = t[c + 1];
                                    for (n = i = 0; n < _.length && !a;)
                                        if (a = _[n++].exec(e))
                                            for (r = 0; r < u.length; r++) s = a[++i], "object" == typeof(o = u[r]) && o.length > 0 ? 2 == o.length ? "function" == typeof o[1] ? this[o[0]] = o[1].call(this, s) : this[o[0]] = o[1] : 3 == o.length ? "function" != typeof o[1] || o[1].exec && o[1].test ? this[o[0]] = s ? s.replace(o[1], o[2]) : void 0 : this[o[0]] = s ? o[1].call(this, s, o[2]) : void 0 : 4 == o.length && (this[o[0]] = s ? o[3].call(this, s.replace(o[1], o[2])) : void 0) : this[o] = s || void 0;
                                    c += 2
                                }
                            },
                            str: function(e, t) {
                                for (var n in t)
                                    if ("object" == typeof t[n] && t[n].length > 0) {
                                        for (var i = 0; i < t[n].length; i++)
                                            if (d.has(t[n][i], e)) return "?" === n ? void 0 : n
                                    } else if (d.has(t[n], e)) return "?" === n ? void 0 : n;
                                return e
                            }
                        },
                        g = {
                            browser: {
                                oldsafari: {
                                    version: {
                                        "1.0": "/8",
                                        1.2: "/1",
                                        1.3: "/3",
                                        "2.0": "/412",
                                        "2.0.2": "/416",
                                        "2.0.3": "/417",
                                        "2.0.4": "/419",
                                        "?": "/"
                                    }
                                }
                            },
                            device: {
                                amazon: {
                                    model: {
                                        "Fire Phone": ["SD", "KF"]
                                    }
                                },
                                sprint: {
                                    model: {
                                        "Evo Shift 4G": "7373KT"
                                    },
                                    vendor: {
                                        HTC: "APA",
                                        Sprint: "Sprint"
                                    }
                                }
                            },
                            os: {
                                windows: {
                                    version: {
                                        ME: "4.90",
                                        "NT 3.11": "NT3.51",
                                        "NT 4.0": "NT4.0",
                                        2e3: "NT 5.0",
                                        XP: ["NT 5.1", "NT 5.2"],
                                        Vista: "NT 6.0",
                                        7: "NT 6.1",
                                        8: "NT 6.2",
                                        8.1: "NT 6.3",
                                        10: ["NT 6.4", "NT 10.0"],
                                        RT: "ARM"
                                    }
                                }
                            }
                        },
                        b = {
                            browser: [
                                [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i],
                                [s, u],
                                [/(opios)[\/\s]+([\w\.]+)/i],
                                [
                                    [s, "Opera Mini"], u
                                ],
                                [/\s(opr)\/([\w\.]+)/i],
                                [
                                    [s, "Opera"], u
                                ],
                                [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i, /(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]*)/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i],
                                [s, u],
                                [/(konqueror)\/([\w\.]+)/i],
                                [
                                    [s, "Konqueror"], u
                                ],
                                [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
                                [
                                    [s, "IE"], u
                                ],
                                [/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],
                                [
                                    [s, "Edge"], u
                                ],
                                [/(yabrowser)\/([\w\.]+)/i],
                                [
                                    [s, "Yandex"], u
                                ],
                                [/(Avast)\/([\w\.]+)/i],
                                [
                                    [s, "Avast Secure Browser"], u
                                ],
                                [/(AVG)\/([\w\.]+)/i],
                                [
                                    [s, "AVG Secure Browser"], u
                                ],
                                [/(puffin)\/([\w\.]+)/i],
                                [
                                    [s, "Puffin"], u
                                ],
                                [/(focus)\/([\w\.]+)/i],
                                [
                                    [s, "Firefox Focus"], u
                                ],
                                [/(opt)\/([\w\.]+)/i],
                                [
                                    [s, "Opera Touch"], u
                                ],
                                [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
                                [
                                    [s, "UCBrowser"], u
                                ],
                                [/(comodo_dragon)\/([\w\.]+)/i],
                                [
                                    [s, /_/g, " "], u
                                ],
                                [/(windowswechat qbcore)\/([\w\.]+)/i],
                                [
                                    [s, "WeChat(Win) Desktop"], u
                                ],
                                [/(micromessenger)\/([\w\.]+)/i],
                                [
                                    [s, "WeChat"], u
                                ],
                                [/(brave)\/([\w\.]+)/i],
                                [
                                    [s, "Brave"], u
                                ],
                                [/(qqbrowserlite)\/([\w\.]+)/i],
                                [s, u],
                                [/(QQ)\/([\d\.]+)/i],
                                [s, u],
                                [/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
                                [s, u],
                                [/(baiduboxapp)[\/\s]?([\w\.]+)/i],
                                [s, u],
                                [/(2345Explorer)[\/\s]?([\w\.]+)/i],
                                [s, u],
                                [/(MetaSr)[\/\s]?([\w\.]+)/i],
                                [s],
                                [/(LBBROWSER)/i],
                                [s],
                                [/xiaomi\/miuibrowser\/([\w\.]+)/i],
                                [u, [s, "MIUI Browser"]],
                                [/;fbav\/([\w\.]+);/i],
                                [u, [s, "Facebook"]],
                                [/safari\s(line)\/([\w\.]+)/i, /android.+(line)\/([\w\.]+)\/iab/i],
                                [s, u],
                                [/headlesschrome(?:\/([\w\.]+)|\s)/i],
                                [u, [s, "Chrome Headless"]],
                                [/\swv\).+(chrome)\/([\w\.]+)/i],
                                [
                                    [s, /(.+)/, "$1 WebView"], u
                                ],
                                [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
                                [
                                    [s, /(.+(?:g|us))(.+)/, "$1 $2"], u
                                ],
                                [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
                                [u, [s, "Android Browser"]],
                                [/(sailfishbrowser)\/([\w\.]+)/i],
                                [
                                    [s, "Sailfish Browser"], u
                                ],
                                [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
                                [s, u],
                                [/(dolfin)\/([\w\.]+)/i],
                                [
                                    [s, "Dolphin"], u
                                ],
                                [/(qihu|qhbrowser|qihoobrowser|360browser)/i],
                                [
                                    [s, "360 Browser"]
                                ],
                                [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
                                [
                                    [s, "Chrome"], u
                                ],
                                [/(coast)\/([\w\.]+)/i],
                                [
                                    [s, "Opera Coast"], u
                                ],
                                [/fxios\/([\w\.-]+)/i],
                                [u, [s, "Firefox"]],
                                [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
                                [u, [s, "Mobile Safari"]],
                                [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
                                [u, s],
                                [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                                [
                                    [s, "GSA"], u
                                ],
                                [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                                [s, [u, p.str, g.browser.oldsafari.version]],
                                [/(webkit|khtml)\/([\w\.]+)/i],
                                [s, u],
                                [/(navigator|netscape)\/([\w\.-]+)/i],
                                [
                                    [s, "Netscape"], u
                                ],
                                [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i],
                                [s, u]
                            ],
                            cpu: [
                                [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                                [
                                    ["architecture", "amd64"]
                                ],
                                [/(ia32(?=;))/i],
                                [
                                    ["architecture", d.lowerize]
                                ],
                                [/((?:i[346]|x)86)[;\)]/i],
                                [
                                    ["architecture", "ia32"]
                                ],
                                [/windows\s(ce|mobile);\sppc;/i],
                                [
                                    ["architecture", "arm"]
                                ],
                                [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                                [
                                    ["architecture", /ower/, "", d.lowerize]
                                ],
                                [/(sun4\w)[;\)]/i],
                                [
                                    ["architecture", "sparc"]
                                ],
                                [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
                                [
                                    ["architecture", d.lowerize]
                                ]
                            ],
                            device: [
                                [/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],
                                [a, _, [c, f]],
                                [/applecoremedia\/[\w\.]+ \((ipad)/],
                                [a, [_, "Apple"],
                                    [c, f]
                                ],
                                [/(apple\s{0,1}tv)/i],
                                [
                                    [a, "Apple TV"],
                                    [_, "Apple"],
                                    [c, h]
                                ],
                                [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i],
                                [_, a, [c, f]],
                                [/(kf[A-z]+)\sbuild\/.+silk\//i],
                                [a, [_, "Amazon"],
                                    [c, f]
                                ],
                                [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],
                                [
                                    [a, p.str, g.device.amazon.model],
                                    [_, "Amazon"],
                                    [c, l]
                                ],
                                [/android.+aft([bms])\sbuild/i],
                                [a, [_, "Amazon"],
                                    [c, h]
                                ],
                                [/\((ip[honed|\s\w*]+);.+(apple)/i],
                                [a, _, [c, l]],
                                [/\((ip[honed|\s\w*]+);/i],
                                [a, [_, "Apple"],
                                    [c, l]
                                ],
                                [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i],
                                [_, a, [c, l]],
                                [/\(bb10;\s(\w+)/i],
                                [a, [_, "BlackBerry"],
                                    [c, l]
                                ],
                                [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],
                                [a, [_, "Asus"],
                                    [c, f]
                                ],
                                [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
                                [
                                    [_, "Sony"],
                                    [a, "Xperia Tablet"],
                                    [c, f]
                                ],
                                [/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                                [a, [_, "Sony"],
                                    [c, l]
                                ],
                                [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
                                [_, a, [c, "console"]],
                                [/android.+;\s(shield)\sbuild/i],
                                [a, [_, "Nvidia"],
                                    [c, "console"]
                                ],
                                [/(playstation\s[34portablevi]+)/i],
                                [a, [_, "Sony"],
                                    [c, "console"]
                                ],
                                [/(sprint\s(\w+))/i],
                                [
                                    [_, p.str, g.device.sprint.vendor],
                                    [a, p.str, g.device.sprint.model],
                                    [c, l]
                                ],
                                [/(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],
                                [_, [a, /_/g, " "],
                                    [c, l]
                                ],
                                [/(nexus\s9)/i],
                                [a, [_, "HTC"],
                                    [c, f]
                                ],
                                [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p|vog-l29|ane-lx1|eml-l29)/i],
                                [a, [_, "Huawei"],
                                    [c, l]
                                ],
                                [/android.+(bah2?-a?[lw]\d{2})/i],
                                [a, [_, "Huawei"],
                                    [c, f]
                                ],
                                [/(microsoft);\s(lumia[\s\w]+)/i],
                                [_, a, [c, l]],
                                [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
                                [a, [_, "Microsoft"],
                                    [c, "console"]
                                ],
                                [/(kin\.[onetw]{3})/i],
                                [
                                    [a, /\./g, " "],
                                    [_, "Microsoft"],
                                    [c, l]
                                ],
                                [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w*)/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i],
                                [a, [_, "Motorola"],
                                    [c, l]
                                ],
                                [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                                [a, [_, "Motorola"],
                                    [c, f]
                                ],
                                [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
                                [
                                    [_, d.trim],
                                    [a, d.trim],
                                    [c, h]
                                ],
                                [/hbbtv.+maple;(\d+)/i],
                                [
                                    [a, /^/, "SmartTV"],
                                    [_, "Samsung"],
                                    [c, h]
                                ],
                                [/\(dtv[\);].+(aquos)/i],
                                [a, [_, "Sharp"],
                                    [c, h]
                                ],
                                [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
                                [
                                    [_, "Samsung"], a, [c, f]
                                ],
                                [/smart-tv.+(samsung)/i],
                                [_, [c, h], a],
                                [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i],
                                [
                                    [_, "Samsung"], a, [c, l]
                                ],
                                [/sie-(\w*)/i],
                                [a, [_, "Siemens"],
                                    [c, l]
                                ],
                                [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i],
                                [
                                    [_, "Nokia"], a, [c, l]
                                ],
                                [/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],
                                [a, [_, "Acer"],
                                    [c, f]
                                ],
                                [/android.+([vl]k\-?\d{3})\s+build/i],
                                [a, [_, "LG"],
                                    [c, f]
                                ],
                                [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
                                [
                                    [_, "LG"], a, [c, f]
                                ],
                                [/(lg) netcast\.tv/i],
                                [_, a, [c, h]],
                                [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i],
                                [a, [_, "LG"],
                                    [c, l]
                                ],
                                [/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],
                                [_, a, [c, f]],
                                [/android.+(ideatab[a-z0-9\-\s]+)/i],
                                [a, [_, "Lenovo"],
                                    [c, f]
                                ],
                                [/(lenovo)[_\s-]?([\w-]+)/i],
                                [_, a, [c, l]],
                                [/linux;.+((jolla));/i],
                                [_, a, [c, l]],
                                [/((pebble))app\/[\d\.]+\s/i],
                                [_, a, [c, "wearable"]],
                                [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
                                [_, a, [c, l]],
                                [/crkey/i],
                                [
                                    [a, "Chromecast"],
                                    [_, "Google"],
                                    [c, h]
                                ],
                                [/android.+;\s(glass)\s\d/i],
                                [a, [_, "Google"],
                                    [c, "wearable"]
                                ],
                                [/android.+;\s(pixel c)[\s)]/i],
                                [a, [_, "Google"],
                                    [c, f]
                                ],
                                [/android.+;\s(pixel( [23])?( xl)?)[\s)]/i],
                                [a, [_, "Google"],
                                    [c, l]
                                ],
                                [/android.+;\s(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i, /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i],
                                [
                                    [a, /_/g, " "],
                                    [_, "Xiaomi"],
                                    [c, l]
                                ],
                                [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],
                                [
                                    [a, /_/g, " "],
                                    [_, "Xiaomi"],
                                    [c, f]
                                ],
                                [/android.+;\s(m[1-5]\snote)\sbuild/i],
                                [a, [_, "Meizu"],
                                    [c, l]
                                ],
                                [/(mz)-([\w-]{2,})/i],
                                [
                                    [_, "Meizu"], a, [c, l]
                                ],
                                [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})[\s)]/i],
                                [a, [_, "OnePlus"],
                                    [c, l]
                                ],
                                [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
                                [a, [_, "RCA"],
                                    [c, f]
                                ],
                                [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],
                                [a, [_, "Dell"],
                                    [c, f]
                                ],
                                [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
                                [a, [_, "Verizon"],
                                    [c, f]
                                ],
                                [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],
                                [
                                    [_, "Barnes & Noble"], a, [c, f]
                                ],
                                [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
                                [a, [_, "NuVision"],
                                    [c, f]
                                ],
                                [/android.+;\s(k88)\sbuild/i],
                                [a, [_, "ZTE"],
                                    [c, f]
                                ],
                                [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
                                [a, [_, "Swiss"],
                                    [c, l]
                                ],
                                [/android.+[;\/]\s*(zur\d{3})\s+build/i],
                                [a, [_, "Swiss"],
                                    [c, f]
                                ],
                                [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
                                [a, [_, "Zeki"],
                                    [c, f]
                                ],
                                [/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],
                                [
                                    [_, "Dragon Touch"], a, [c, f]
                                ],
                                [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],
                                [a, [_, "Insignia"],
                                    [c, f]
                                ],
                                [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],
                                [a, [_, "NextBook"],
                                    [c, f]
                                ],
                                [/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],
                                [
                                    [_, "Voice"], a, [c, l]
                                ],
                                [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],
                                [
                                    [_, "LvTel"], a, [c, l]
                                ],
                                [/android.+;\s(PH-1)\s/i],
                                [a, [_, "Essential"],
                                    [c, l]
                                ],
                                [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
                                [a, [_, "Envizen"],
                                    [c, f]
                                ],
                                [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],
                                [_, a, [c, f]],
                                [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],
                                [a, [_, "MachSpeed"],
                                    [c, f]
                                ],
                                [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
                                [_, a, [c, f]],
                                [/android.+[;\/]\s*TU_(1491)\s+build/i],
                                [a, [_, "Rotor"],
                                    [c, f]
                                ],
                                [/android.+(KS(.+))\s+build/i],
                                [a, [_, "Amazon"],
                                    [c, f]
                                ],
                                [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],
                                [_, a, [c, f]],
                                [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
                                [
                                    [c, d.lowerize], _, a
                                ],
                                [/[\s\/\(](smart-?tv)[;\)]/i],
                                [
                                    [c, h]
                                ],
                                [/(android[\w\.\s\-]{0,9});.+build/i],
                                [a, [_, "Generic"]]
                            ],
                            engine: [
                                [/windows.+\sedge\/([\w\.]+)/i],
                                [u, [s, "EdgeHTML"]],
                                [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                                [u, [s, "Blink"]],
                                [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
                                [s, u],
                                [/rv\:([\w\.]{1,9}).+(gecko)/i],
                                [u, s]
                            ],
                            os: [
                                [/microsoft\s(windows)\s(vista|xp)/i],
                                [s, u],
                                [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
                                [s, [u, p.str, g.os.windows.version]],
                                [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                                [
                                    [s, "Windows"],
                                    [u, p.str, g.os.windows.version]
                                ],
                                [/\((bb)(10);/i],
                                [
                                    [s, "BlackBerry"], u
                                ],
                                [/(blackberry)\w*\/?([\w\.]*)/i, /(tizen|kaios)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i],
                                [s, u],
                                [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],
                                [
                                    [s, "Symbian"], u
                                ],
                                [/\((series40);/i],
                                [s],
                                [/mozilla.+\(mobile;.+gecko.+firefox/i],
                                [
                                    [s, "Firefox OS"], u
                                ],
                                [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i],
                                [s, u],
                                [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                                [
                                    [s, "Chromium OS"], u
                                ],
                                [/(sunos)\s?([\w\.\d]*)/i],
                                [
                                    [s, "Solaris"], u
                                ],
                                [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],
                                [s, u],
                                [/(haiku)\s(\w+)/i],
                                [s, u],
                                [/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i],
                                [
                                    [u, /_/g, "."],
                                    [s, "iOS"]
                                ],
                                [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i],
                                [
                                    [s, "Mac OS"],
                                    [u, /_/g, "."]
                                ],
                                [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i, /(unix)\s?([\w\.]*)/i],
                                [s, u]
                            ]
                        },
                        m = function(e, t) {
                            if ("object" == typeof e && (t = e, e = void 0), !(this instanceof m)) return new m(e, t).getResult();
                            var n = e || (r && r.navigator && r.navigator.userAgent ? r.navigator.userAgent : ""),
                                i = t ? d.extend(b, t) : b;
                            return this.getBrowser = function() {
                                var e = {
                                    name: void 0,
                                    version: void 0
                                };
                                return p.rgx.call(e, n, i.browser), e.major = d.major(e.version), e
                            }, this.getCPU = function() {
                                var e = {
                                    architecture: void 0
                                };
                                return p.rgx.call(e, n, i.cpu), e
                            }, this.getDevice = function() {
                                var e = {
                                    vendor: void 0,
                                    model: void 0,
                                    type: void 0
                                };
                                return p.rgx.call(e, n, i.device), e
                            }, this.getEngine = function() {
                                var e = {
                                    name: void 0,
                                    version: void 0
                                };
                                return p.rgx.call(e, n, i.engine), e
                            }, this.getOS = function() {
                                var e = {
                                    name: void 0,
                                    version: void 0
                                };
                                return p.rgx.call(e, n, i.os), e
                            }, this.getResult = function() {
                                return {
                                    ua: this.getUA(),
                                    browser: this.getBrowser(),
                                    engine: this.getEngine(),
                                    os: this.getOS(),
                                    device: this.getDevice(),
                                    cpu: this.getCPU()
                                }
                            }, this.getUA = function() {
                                return n
                            }, this.setUA = function(e) {
                                return n = e, this
                            }, this
                        };
                    m.VERSION = "0.7.21", m.BROWSER = {
                        NAME: s,
                        MAJOR: "major",
                        VERSION: u
                    }, m.CPU = {
                        ARCHITECTURE: "architecture"
                    }, m.DEVICE = {
                        MODEL: a,
                        VENDOR: _,
                        TYPE: c,
                        CONSOLE: "console",
                        MOBILE: l,
                        SMARTTV: h,
                        TABLET: f,
                        WEARABLE: "wearable",
                        EMBEDDED: "embedded"
                    }, m.ENGINE = {
                        NAME: s,
                        VERSION: u
                    }, m.OS = {
                        NAME: s,
                        VERSION: u
                    }, void 0 !== t ? (e.exports && (t = e.exports = m), t.UAParser = m) : void 0 === (i = function() {
                        return m
                    }.call(t, n, t, e)) || (e.exports = i);
                    var v = r && (r.jQuery || r.Zepto);
                    if (v && !v.ua) {
                        var E = new m;
                        v.ua = E.getResult(), v.ua.get = function() {
                            return E.getUA()
                        }, v.ua.set = function(e) {
                            E.setUA(e);
                            var t = E.getResult();
                            for (var n in t) v.ua[n] = t[n]
                        }
                    }
                }("object" == typeof window ? window : this)
            },
            4795: function(e, t, n) {
                var i;
                ! function(t) {
                    "use strict";

                    function r() {}
                    var o = r.prototype,
                        a = t.EventEmitter;

                    function s(e, t) {
                        for (var n = e.length; n--;)
                            if (e[n].listener === t) return n;
                        return -1
                    }

                    function c(e) {
                        return function() {
                            return this[e].apply(this, arguments)
                        }
                    }
                    o.getListeners = function(e) {
                        var t, n, i = this._getEvents();
                        if (e instanceof RegExp)
                            for (n in t = {}, i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n]);
                        else t = i[e] || (i[e] = []);
                        return t
                    }, o.flattenListeners = function(e) {
                        var t, n = [];
                        for (t = 0; t < e.length; t += 1) n.push(e[t].listener);
                        return n
                    }, o.getListenersAsObject = function(e) {
                        var t, n = this.getListeners(e);
                        return n instanceof Array && ((t = {})[e] = n), t || n
                    }, o.addListener = function(e, t) {
                        if (! function e(t) {
                                return "function" == typeof t || t instanceof RegExp || !(!t || "object" != typeof t) && e(t.listener)
                            }(t)) throw new TypeError("listener must be a function");
                        var n, i = this.getListenersAsObject(e),
                            r = "object" == typeof t;
                        for (n in i) i.hasOwnProperty(n) && -1 === s(i[n], t) && i[n].push(r ? t : {
                            listener: t,
                            once: !1
                        });
                        return this
                    }, o.on = c("addListener"), o.addOnceListener = function(e, t) {
                        return this.addListener(e, {
                            listener: t,
                            once: !0
                        })
                    }, o.once = c("addOnceListener"), o.defineEvent = function(e) {
                        return this.getListeners(e), this
                    }, o.defineEvents = function(e) {
                        for (var t = 0; t < e.length; t += 1) this.defineEvent(e[t]);
                        return this
                    }, o.removeListener = function(e, t) {
                        var n, i, r = this.getListenersAsObject(e);
                        for (i in r) r.hasOwnProperty(i) && -1 !== (n = s(r[i], t)) && r[i].splice(n, 1);
                        return this
                    }, o.off = c("removeListener"), o.addListeners = function(e, t) {
                        return this.manipulateListeners(!1, e, t)
                    }, o.removeListeners = function(e, t) {
                        return this.manipulateListeners(!0, e, t)
                    }, o.manipulateListeners = function(e, t, n) {
                        var i, r, o = e ? this.removeListener : this.addListener,
                            a = e ? this.removeListeners : this.addListeners;
                        if ("object" != typeof t || t instanceof RegExp)
                            for (i = n.length; i--;) o.call(this, t, n[i]);
                        else
                            for (i in t) t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? o.call(this, i, r) : a.call(this, i, r));
                        return this
                    }, o.removeEvent = function(e) {
                        var t, n = typeof e,
                            i = this._getEvents();
                        if ("string" === n) delete i[e];
                        else if (e instanceof RegExp)
                            for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];
                        else delete this._events;
                        return this
                    }, o.removeAllListeners = c("removeEvent"), o.emitEvent = function(e, t) {
                        var n, i, r, o, a = this.getListenersAsObject(e);
                        for (o in a)
                            if (a.hasOwnProperty(o))
                                for (n = a[o].slice(0), r = 0; r < n.length; r++) !0 === (i = n[r]).once && this.removeListener(e, i.listener), i.listener.apply(this, t || []) === this._getOnceReturnValue() && this.removeListener(e, i.listener);
                        return this
                    }, o.trigger = c("emitEvent"), o.emit = function(e) {
                        var t = Array.prototype.slice.call(arguments, 1);
                        return this.emitEvent(e, t)
                    }, o.setOnceReturnValue = function(e) {
                        return this._onceReturnValue = e, this
                    }, o._getOnceReturnValue = function() {
                        return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
                    }, o._getEvents = function() {
                        return this._events || (this._events = {})
                    }, r.noConflict = function() {
                        return t.EventEmitter = a, r
                    }, void 0 === (i = function() {
                        return r
                    }.call(t, n, t, e)) || (e.exports = i)
                }(this || {})
            },
            3564: (e, t, n) => {
                var i = {
                    "./facebookManager": [6866, 5, 785],
                    "./facebookManager.js": [6866, 5, 785],
                    "./httpHostManager": [335, 5, 345, 714],
                    "./httpHostManager.js": [335, 5, 345, 714],
                    "./httpIframeManager": [2818, 5, 345, 173],
                    "./httpIframeManager.js": [2818, 5, 345, 173],
                    "./httpPopupManager": [8240, 5, 345, 731],
                    "./httpPopupManager.js": [8240, 5, 345, 731],
                    "./httpsManager": [8115, 5, 345, 628],
                    "./httpsManager.js": [8115, 5, 345, 628],
                    "./manager": [4005, 5, 909],
                    "./manager.js": [4005, 5, 909],
                    "./safariManager": [6315, 5, 817],
                    "./safariManager.js": [6315, 5, 817],
                    "./urlSessionManager": [7809, 5, 439],
                    "./urlSessionManager.js": [7809, 5, 439]
                };

                function r(e) {
                    if (!n.o(i, e)) return Promise.resolve().then(() => {
                        var t = new Error("Cannot find module '" + e + "'");
                        throw t.code = "MODULE_NOT_FOUND", t
                    });
                    var t = i[e],
                        r = t[0];
                    return Promise.all(t.slice(1).map(n.e)).then(() => n(r))
                }
                r.keys = () => Object.keys(i), r.id = 3564, e.exports = r
            }
        },
        __webpack_module_cache__ = {};

    function __webpack_require__(e) {
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var n = __webpack_module_cache__[e] = {
            id: e,
            exports: {}
        };
        return __webpack_modules__[e].call(n.exports, n, n.exports, __webpack_require__), n.exports
    }
    __webpack_require__.m = __webpack_modules__, __webpack_require__.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return __webpack_require__.d(t, {
            a: t
        }), t
    }, (() => {
        var e, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__;
        __webpack_require__.t = function(n, i) {
            if (1 & i && (n = this(n)), 8 & i) return n;
            if ("object" == typeof n && n) {
                if (4 & i && n.__esModule) return n;
                if (16 & i && "function" == typeof n.then) return n
            }
            var r = Object.create(null);
            __webpack_require__.r(r);
            var o = {};
            e = e || [null, t({}), t([]), t(t)];
            for (var a = 2 & i && n;
                "object" == typeof a && !~e.indexOf(a); a = t(a)) Object.getOwnPropertyNames(a).forEach(e => o[e] = () => n[e]);
            return o.default = () => n, __webpack_require__.d(r, o), r
        }
    })(), __webpack_require__.d = (e, t) => {
        for (var n in t) __webpack_require__.o(t, n) && !__webpack_require__.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
        })
    }, __webpack_require__.f = {}, __webpack_require__.e = e => Promise.all(Object.keys(__webpack_require__.f).reduce((t, n) => (__webpack_require__.f[n](e, t), t), [])), __webpack_require__.u = e => "chunk/" + e + ".js", __webpack_require__.miniCssF = e => {}, __webpack_require__.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
        var e = {};
        __webpack_require__.l = (t, n, i, r) => {
            if (e[t]) e[t].push(n);
            else {
                var o, a;
                if (void 0 !== i)
                    for (var s = document.getElementsByTagName("script"), c = 0; c < s.length; c++) {
                        var _ = s[c];
                        if (_.getAttribute("src") == t || _.getAttribute("data-webpack") == "@cleverpush/cleverpush-js-sdk:" + i) {
                            o = _;
                            break
                        }
                    }
                o || (a = !0, (o = document.createElement("script")).charset = "utf-8", o.timeout = 120, __webpack_require__.nc && o.setAttribute("nonce", __webpack_require__.nc), o.setAttribute("data-webpack", "@cleverpush/cleverpush-js-sdk:" + i), o.src = t), e[t] = [n];
                var u = (n, i) => {
                        o.onerror = o.onload = null, clearTimeout(l);
                        var r = e[t];
                        if (delete e[t], o.parentNode && o.parentNode.removeChild(o), r && r.forEach(e => e(i)), n) return n(i)
                    },
                    l = setTimeout(u.bind(null, void 0, {
                        type: "timeout",
                        target: o
                    }), 12e4);
                o.onerror = u.bind(null, o.onerror), o.onload = u.bind(null, o.onload), a && document.head.appendChild(o)
            }
        }
    })(), __webpack_require__.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, __webpack_require__.p = "https://static.cleverpush.com/sdk/", (() => {
        var e = {
            370: 0,
            909: 0
        };
        __webpack_require__.f.j = (t, n) => {
            var i = __webpack_require__.o(e, t) ? e[t] : void 0;
            if (0 !== i)
                if (i) n.push(i[2]);
                else {
                    var r = new Promise((n, r) => i = e[t] = [n, r]);
                    n.push(i[2] = r);
                    var o = __webpack_require__.p + __webpack_require__.u(t),
                        a = new Error;
                    __webpack_require__.l(o, n => {
                        if (__webpack_require__.o(e, t) && (0 !== (i = e[t]) && (e[t] = void 0), i)) {
                            var r = n && ("load" === n.type ? "missing" : n.type),
                                o = n && n.target && n.target.src;
                            a.message = "Loading chunk " + t + " failed.\n(" + r + ": " + o + ")", a.name = "ChunkLoadError", a.type = r, a.request = o, i[1](a)
                        }
                    }, "chunk-" + t, t)
                }
        };
        var t = (t, n) => {
                var i, r, [o, a, s] = n,
                    c = 0;
                for (i in a) __webpack_require__.o(a, i) && (__webpack_require__.m[i] = a[i]);
                if (s) s(__webpack_require__);
                for (t && t(n); c < o.length; c++) r = o[c], __webpack_require__.o(e, r) && e[r] && e[r][0](), e[o[c]] = 0
            },
            n = self.webpackChunk_cleverpush_cleverpush_js_sdk = self.webpackChunk_cleverpush_cleverpush_js_sdk || [];
        n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n))
    })();
    var __webpack_exports__ = {};
    (() => {
        "use strict";
        var e, t = __webpack_require__(319),
            n = __webpack_require__.n(t),
            i = __webpack_require__(8),
            r = __webpack_require__.n(i),
            o = __webpack_require__(6128),
            a = __webpack_require__(1078);
        if (window.__cleverPushSdkLoadCount = (window.__cleverPushSdkLoadCount || 0) + 1, window.__cleverPushSdkLoadCount > 1) a.cM.warn("The SDK is included more than once. Please only load the CleverPush SDK once in your code.");
        else if ("object" === r()(window.CleverPush) && Array.isArray(window.CleverPush) && (e = n()(window.CleverPush)), (void 0 === window.CleverPush || "object" === r()(window.CleverPush) && Array.isArray(window.CleverPush)) && (window.CleverPush = new o.Z), e)
            for (var s = 0; s < e.length; s += 1) window.CleverPush.executeFunction(e[s]);
        "undefined" != typeof Symbol && Object.defineProperty(Array.prototype, Symbol.toStringTag, {
            value: "Array"
        })
    })()
})();
//# sourceMappingURL=https://static.cleverpush.com/sdk/cleverpush.js.map
CleverPush.init({
    "loadConfig": false,
    "environment": "production",
    "apiEndpoint": "https://api.cleverpush.com",
    "staticEndpoint": "https://static.cleverpush.com",
    "autoRegister": true,
    "channelId": "SferLijT3vP2ue776",
    "channelName": "Quiz",
    "channelIcon": "https://static.cleverpush.com/notification/icon/HhbigxiJFftMEaHnd.png",
    "channelTopics": [],
    "channelTags": [{
        "_id": "KRohXmJ24d6WsEgQX",
        "name": "Migrated via iFrame",
        "channel": ["SferLijT3vP2ue776"],
        "createdAt": "2021-05-07T17:55:55.934Z"
    }],
    "channelEvents": [],
    "multiChannels": {},
    "customAttributes": [{
        "name": "name",
        "id": "name"
    }, {
        "name": "domain",
        "id": "domain"
    }, {
        "name": "locale",
        "id": "locale"
    }],
    "alertTimeout": 20000,
    "alertOncePerSession": false,
    "alertMinimumVisits": 3,
    "alertScrollPercentage": 0,
    "confirmAlertTheme": "cleverpush-confirm-default",
    "confirmAlertThemeVariant": "",
    "confirmAlertThemeBackground": "",
    "confirmAlertThemeBackgroundColor": "",
    "confirmAlertThemeTextColor": "",
    "confirmAlertThemeLinkColor": "",
    "confirmAlertThemeButtonTextColor": "",
    "confirmAlertNativeTheme": "",
    "confirmAlertBackdrop": true,
    "confirmAlertBackdropBlur": false,
    "confirmAlertBackdropOpacity": 0.75,
    "confirmAlertTests": [],
    "confirmAlertStyle": {
        "backgroundColor": "",
        "color": ""
    },
    "confirmAlertTitleStyle": {},
    "confirmAlertLinkStyle": {
        "color": ""
    },
    "confirmAlertButtonStyle": {
        "color": ""
    },
    "confirmAlertAllowButtonStyle": {},
    "url": "https://friend20.com/subscribe",
    "alertLocalization": {
        "info": "With your revocable consent, we send you push notifications and use the so-called push token for this."
    },
    "ownDomain": true,
    "domain": "friend20.com",
    "subdomain": "friend20",
    "cleverpushDomain": "mycleverpush.com",
    "vapidPublicKey": "BOQC69wi17aiprusmWS1hw5BYnoQbaFzp1JxybpQFV9rj5j77DbKzMaD5ZVdpUymum59rLnibVsMv8sg8knW0NM",
    "showConfirmAlert": false,
    "showConfirmAlertMobile": false,
    "confirmAlertDisabled": true,
    "hideBranding": false,
    "hideFaqLink": false,
    "faqUrl": "https://cleverpush.com/faq",
    "privacyPolicyText": "Privacy policy",
    "showNotificationBell": false,
    "hideNotificationBellMobile": false,
    "hideNotificationBellSubscribed": false,
    "notificationBellColor": "#42a2f2",
    "serviceWorkerFile": "/cleverpush-worker.js",
    "gcmManifestPath": "/cleverpush-manifest.json",
    "safariWebServiceUrl": "https://api.cleverpush.com/channel/SferLijT3vP2ue776/safari",
    "origin": "https://friend20.com",
    "loadIframe": true,
    "trackSessions": "undefined",
    "pageBannerNotifications": [],
    "webBanners": [],
    "widgets": [],
    "followUpCampaigns": [],
    "emailOptInForms": [],
    "confirmAlertCloseButton": false,
    "notificationCategoryGroups": [],
    "chatWidgetButtonName": "Support",
    "chatWidgetThemeColor": "#42a2f2"
});