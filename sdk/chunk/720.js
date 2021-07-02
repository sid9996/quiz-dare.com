(self.webpackChunk_cleverpush_cleverpush_js_sdk = self.webpackChunk_cleverpush_cleverpush_js_sdk || []).push([
    [720], {
        7720: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, {
                default: () => Confirm
            });
            var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8),
                _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__),
                _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4575),
                _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__),
                _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3913),
                _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__),
                ua_parser_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2238),
                ua_parser_js__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(ua_parser_js__WEBPACK_IMPORTED_MODULE_3__),
                _utils_debug__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1078),
                _utils_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5895),
                _utils_translate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3114),
                _subscription_facebookManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6866),
                _utils_topics__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2508),
                _utils_env__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7159),
                _utils_detect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6716),
                _const_event__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2034),
                _confirm_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3944),
                _confirm_scss__WEBPACK_IMPORTED_MODULE_12___default = __webpack_require__.n(_confirm_scss__WEBPACK_IMPORTED_MODULE_12__),
                Confirm = function() {
                    function Confirm(e, t) {
                        var i = this;
                        _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Confirm), this.autoHideBackdrop = !0, this.cleverpush = e, this.config = e.config, this.subscriptionManager = t, this.id = document.querySelectorAll(".cleverpush-confirm").length + 1, this.visible = !1, this.channelTopics = (this.config.channelTopics || []).filter((function(e) {
                            var t = !0;
                            return t && e.matchPath && e.matchPath.length && (t = new RegExp(e.matchPath).test(window.parent.location.pathname)), t && e.notMatchPath && e.notMatchPath.length && (t = !new RegExp(e.notMatchPath).test(window.parent.location.pathname)), t
                        })), this.facebookEnabled = !1, this.config.facebookPageId && this.config.facebookPageId.length && this.config.facebookCheckboxEnabled && (this.facebookEnabled = !0, this.facebookUserRef = this.subscriptionManager.storageManager.getFacebookUserRef(), this.facebookUserRef || (this.facebookUserRef = "".concat(this.config.channelId, "-"), this.facebookUserRef += Math.random().toString(36).slice(2))), window.addEventListener("beforeunload", (function() {
                            i.autoHideBackdrop = !0, i.hide()
                        }))
                    }
                    return _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Confirm, [{
                        key: "getArrowNode",
                        value: function(e, t) {
                            var i = "own" === e ? t : Object.assign({}, function() {
                                var t = (new(ua_parser_js__WEBPACK_IMPORTED_MODULE_3___default())).getBrowser().name;
                                if (_utils_debug__WEBPACK_IMPORTED_MODULE_4__.cM.info("getArrowNode browser", t), "grant" === e) {
                                    if ("Chrome" === t || "Chromium" === t) return {
                                        x: 347,
                                        y: 92,
                                        padding: 20
                                    };
                                    if ("Firefox" === t) return {
                                        x: 311,
                                        y: 148,
                                        padding: 20
                                    }
                                } else if ("denied" === e) {
                                    if ("Chrome" === t || "Chromium" === t) return {
                                        x: 131,
                                        y: 0,
                                        padding: 0
                                    };
                                    if ("Firefox" === t) return {
                                        x: 60,
                                        y: 0,
                                        padding: 0
                                    }
                                } else if ("silentPrompt" === e && ("Chrome" === t || "Chromium" === t || "Edge" === t)) return {
                                    x: window.innerWidth - 250,
                                    y: 0,
                                    padding: 0
                                };
                                return null
                            }(), t || {});
                            if (!i) return null;
                            var o = i.textNode || document.querySelector(".cleverpush-backdrop-text h2");
                            if (o && o.getBoundingClientRect) {
                                var n = o.getBoundingClientRect(),
                                    c = i.position || {
                                        x: window.innerWidth / 2,
                                        y: (window.innerHeight - n.height) / 2
                                    },
                                    r = Math.sqrt(Math.pow(i.x - c.x, 2) + Math.pow(i.y - c.y, 2)),
                                    s = Math.max(.1 * r, 15),
                                    a = i.x,
                                    l = i.y + s + i.padding,
                                    _ = c.x - 15,
                                    h = Math.max(c.y + 20 + n.height, l + 40),
                                    f = _ - a,
                                    u = h - l,
                                    d = "M ".concat(_, " ").concat(h, " q ").concat(-1 * f, " ").concat(u, ", ").concat(-1 * f, " ").concat(-1 * u),
                                    p = "M ".concat(a - s, " ").concat(l + s, " q ").concat(s, " ").concat(-3 * s, ", ").concat(2 * s, " 0");
                                _utils_debug__WEBPACK_IMPORTED_MODULE_4__.cM.info("getArrowNode", {
                                    type: e,
                                    i: i,
                                    o: c,
                                    r: r,
                                    S: s,
                                    s: a,
                                    C: l,
                                    posX: _,
                                    posY: h,
                                    l: f,
                                    h: u,
                                    _: d,
                                    c: p
                                });
                                var m = '<div class="cleverpush-backdrop-arrow"><svg width="'.concat(window.innerWidth, 'px" height="').concat(window.innerHeight, 'px" viewBox="0 0 ').concat(window.innerWidth, " ").concat(window.innerHeight, '" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke-width="5" stroke-linecap="round" fill="none" fill-rule="evenodd"><path d="').concat(d, '" id="tail" stroke="#FFFFFF"></path><path d="').concat(p, '" id="head" stroke="#FFFFFF"></path></g></svg></div></div>');
                                return (0, _utils_dom__WEBPACK_IMPORTED_MODULE_5__.dS)(m)
                            }
                        }
                    }, {
                        key: "removeConfirmBox",
                        value: function() {
                            (0, _utils_debug__WEBPACK_IMPORTED_MODULE_4__.tI)("removeConfirmBox"), this.visible = !1;
                            var e = document.getElementsByClassName("cleverpush-confirm");
                            if (e.length) {
                                var t = e[e.length - 1];
                                (!this.withTopics || t.className.indexOf("cleverpush-topic-box") < 0) && t.className.indexOf("cleverpush-attributes-box") < 0 && t.parentNode.removeChild(t)
                            }
                            this.confirmBox = null
                        }
                    }, {
                        key: "removeBrandingBox",
                        value: function() {
                            (0, _utils_debug__WEBPACK_IMPORTED_MODULE_4__.tI)("removeBrandingBox"), this.visible = !1;
                            var e = document.getElementsByClassName("cleverpush-branding-box");
                            if (e.length) {
                                var t = e[e.length - 1];
                                t.parentNode.removeChild(t)
                            }
                            this.confirmBox = null
                        }
                    }, {
                        key: "hide",
                        value: function() {
                            (0, _utils_debug__WEBPACK_IMPORTED_MODULE_4__.tI)("hide"), this.autoHideBackdrop && this.hideBackdrop(), this.removeConfirmBox(), this.removeBrandingBox()
                        }
                    }, {
                        key: "onCloseClick",
                        value: function(e) {
                            (0, _utils_debug__WEBPACK_IMPORTED_MODULE_4__.tI)("closeConfirmBox"), e.preventDefault();
                            var t = this.getSelectedTopics(),
                                i = this.hasTopicCheckboxes(!0);
                            if (this.config.confirmAlertRequireChannelTopics && !t.length && i && this.withTopics && this.config.confirmAlertSelectTopicsLater) alert(this.config.confirmAlertRequireChannelTopicsTitle || "Bitte wähle mindestens eine Kategorie aus.");
                            else {
                                this.hide(), this.hideBackdrop();
                                try {
                                    this.subscriptionManager.storageManager.setClosed(), this.subscriptionManager.iframeMessenger && this.subscriptionManager.iframeMessenger.setClosed && this.subscriptionManager.iframeMessenger.setClosed()
                                } catch (e) {
                                    _utils_debug__WEBPACK_IMPORTED_MODULE_4__.cM.error(e)
                                }
                                this.subscriptionManager.triggerEvent(_const_event__WEBPACK_IMPORTED_MODULE_11__.Z.OPTIN_CLOSED)
                            }
                        }
                    }, {
                        key: "onAllowClick",
                        value: function(e) {
                            var t = this;
                            (0, _utils_debug__WEBPACK_IMPORTED_MODULE_4__.tI)("onAllowClick"), e.preventDefault();
                            var i = this.getSelectedTopics(),
                                o = this.hasTopicCheckboxes(!0);
                            if (!this.config.confirmAlertRequireChannelTopics || i.length || !o || !this.withTopics && this.config.confirmAlertSelectTopicsLater)
                                if ("function" != typeof this.allowCallback || (this.allowCallback(!0, i), this.allowCallback = void 0, this.withTopics)) {
                                    if (!this.withTopics && this.config.showConfirmAlert && this.config.confirmAlertDouble) {
                                        if ("Android" === _utils_env__WEBPACK_IMPORTED_MODULE_9__.os.name || "mobile" === _utils_env__WEBPACK_IMPORTED_MODULE_9__.Uh.type || "PREVIEW" === this.config.env && this.config.mobilePreview) return this.hide(), this.hideBackdrop(), this.appendDoubleBox(), void this.subscriptionManager.api.confirmAlertShown(this.subscriptionManager.existingPermission, "confirm");
                                        var n = document.querySelector(".cleverpush-backdrop");
                                        if (n) {
                                            var c = this.getArrowNode("grant", {
                                                textNode: {},
                                                position: {
                                                    x: window.innerWidth / 2,
                                                    y: window.innerHeight / 2
                                                }
                                            });
                                            c && n.appendChild(c)
                                        }
                                    }
                                    if (this.confirmBox || (this.confirmBox = document.querySelector(".cleverpush-confirm-".concat(this.id))), this.confirmBox)
                                        for (var r = this.confirmBox.querySelectorAll('input[name="topics[]"]'), s = 0; s < r.length; s += 1)
                                            if (r[s].checked && r[s].dataset && "true" === r[s].dataset.childTopicsRequired) {
                                                var a = this.confirmBox.querySelectorAll('.topic-child[data-parent-topic="'.concat(r[s].value, '"] input'));
                                                if (a.length) {
                                                    for (var l = 0, _ = 0; _ < a.length; _ += 1) a[_].checked && (l += 1);
                                                    if (0 === l) return void alert("Bitte wähle mindestens eine Kategorie in ".concat((r[s].parentNode.innerText || "").trim(), " aus."))
                                                }
                                            }
                                    if (this.subscriptionManager.setTopics(i), this.withTopics && this.config.confirmAlertSelectTopicsLater && o) return this.subscriptionManager.sync(), this.withTopics = !1, this.hide(), this.subscribeCallback && this.subscribeCallback(!1), void(this.subscriptionManager.registerForPushLater && this.subscriptionManager.registerForPush());
                                    if (this.config.showUnblockTutorial) {
                                        this.hide(), this.showBackdrop(void 0, "denied", (0, _utils_translate__WEBPACK_IMPORTED_MODULE_6__.I)("popup.info").formatCleverPush("<strong>".concat((0, _utils_translate__WEBPACK_IMPORTED_MODULE_6__.I)("confirm.allowBrowser") || (0, _utils_translate__WEBPACK_IMPORTED_MODULE_6__.I)("confirm.allow"), "</strong>")));
                                        try {
                                            sessionStorage.setItem("cleverpush-subscription-status", "denied")
                                        } catch (e) {}
                                    } else {
                                        this.config.showSilentPromptTutorial && (this.hide(), this.config.confirmAlertHideArrow = !1, this.showBackdrop(void 0, "silentPrompt", (0, _utils_translate__WEBPACK_IMPORTED_MODULE_6__.I)("confirm.silentPromptInfo")));
                                        var h = !1;
                                        if (this.config.ownDomain && ("https:" === window.parent.location.protocol || "localhost" === window.parent.location.hostname) && this.config.showConfirmAlert ? (this.config.confirmAlertNativeTheme && "cleverpush-confirm-default" !== this.config.confirmAlertNativeTheme && "cleverpush-confirm-backdrop-text" !== this.config.confirmAlertNativeTheme ? (this.removeConfirmBox(), h = !0) : this.hide(), this.subscriptionManager.api.confirmAlertShown(this.subscriptionManager.existingPermission, "confirm")) : this.hide(), localStorage.setItem("cleverpush-subscription-status", "allowed"), "PREVIEW" === this.config.env) {
                                            var f = document.getElementById("cleverpush-preview-native");
                                            if (f) return f.style.display = "block", void(h && this.appendConfirmBox("".concat(this.config.confirmAlertNativeTheme, " ").concat(this.config.confirmAlertNativeTheme, "-native")))
                                        }
                                        var u = !1;
                                        (0, _utils_detect__WEBPACK_IMPORTED_MODULE_10__.F)({
                                            subscriptionManager: this.subscriptionManager,
                                            config: this.config,
                                            subscribe: function() {
                                                t.subscriptionManager.subscribeForce(!1).then((function(e) {
                                                    u = !0, t.hideBackdrop(), t.subscribeCallback && t.subscribeCallback(!1, e)
                                                })).catch((function(e) {
                                                    u = !0, t.hideBackdrop(), t.subscribeCallback && t.subscribeCallback(e)
                                                }))
                                            },
                                            showBackdrop: function() {
                                                h && t.appendConfirmBox("".concat(t.config.confirmAlertNativeTheme, " ").concat(t.config.confirmAlertNativeTheme, "-native"))
                                            },
                                            setShowBackdrop: function(e) {
                                                return e
                                            },
                                            showSilentAlert: function() {
                                                u || (t.hide(), t.config.confirmAlertHideArrow = !1, t.showBackdrop(void 0, "silentPrompt", (0, _utils_translate__WEBPACK_IMPORTED_MODULE_6__.I)("confirm.silentPromptInfo")))
                                            }
                                        }), this.confirmFacebook()
                                    }
                                } else this.hide();
                            else alert(this.config.confirmAlertRequireChannelTopicsTitle || "Bitte wähle mindestens eine Kategorie aus.")
                        }
                    }, {
                        key: "appendDoubleBox",
                        value: function() {
                            var e = (0, _utils_dom__WEBPACK_IMPORTED_MODULE_5__.dS)('\n      <div class="cleverpush-confirm-double cleverpush-confirm-double-'.concat(this.id, '">\n        <div class="cleverpush-confirm-double-above">\n          ').concat((0, _utils_translate__WEBPACK_IMPORTED_MODULE_6__.I)("confirm.doubleText").formatCleverPush("<strong>".concat((0, _utils_translate__WEBPACK_IMPORTED_MODULE_6__.I)("confirm.allowBrowser") || (0, _utils_translate__WEBPACK_IMPORTED_MODULE_6__.I)("confirm.allow"), "</strong>")), '\n        </div>\n        <div class="cleverpush-confirm-double-content">\n          <div class="cleverpush-confirm-double-text">\n            <div class="cleverpush-confirm-double-bell">\n              <svg height="512pt" viewBox="-21 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg">\n              <path d="m434.753906 360.8125c-32.257812-27.265625-50.753906-67.117188-50.753906-109.335938v-59.476562c0-75.070312-55.765625-137.214844-128-147.625v-23.042969c0-11.796875-9.558594-21.332031-21.332031-21.332031-11.777344 0-21.335938 9.535156-21.335938 21.332031v23.042969c-72.253906 10.410156-128 72.554688-128 147.625v59.476562c0 42.21875-18.496093 82.070313-50.941406 109.503907-8.300781 7.105469-13.058594 17.429687-13.058594 28.351562 0 20.589844 16.746094 37.335938 37.335938 37.335938h352c20.585937 0 37.332031-16.746094 37.332031-37.335938 0-10.921875-4.757812-21.246093-13.246094-28.519531zm0 0"/><path d="m234.667969 512c38.632812 0 70.953125-27.542969 78.378906-64h-156.757813c7.421876 36.457031 39.742188 64 78.378907 64zm0 0"/></svg>\n            </div>\n            <div class="cleverpush-confirm-double-title">').concat((0, _utils_translate__WEBPACK_IMPORTED_MODULE_6__.I)("confirm.nativeTitle").formatCleverPush(location.hostname || this.config.domain), '</div>\n          </div>\n          <div class="cleverpush-confirm-double-buttons">\n            <button type="button" class="cleverpush-confirm-double-btn">').concat((0, _utils_translate__WEBPACK_IMPORTED_MODULE_6__.I)("confirm.allowBrowser") || (0, _utils_translate__WEBPACK_IMPORTED_MODULE_6__.I)("confirm.allow"), '</button>\n          </div>\n        </div>\n        <div class="cleverpush-confirm-double-below">\n          <div class="cleverpush-confirm-double-arrow"></div>\n        </div>\n      </div>\n      ')),
                                t = e.querySelector(".cleverpush-confirm-double-content").getBoundingClientRect(),
                                i = e.querySelector(".cleverpush-confirm-double-arrow");
                            if (i) {
                                var o = this.getArrowNode("own", {
                                    x: window.innerWidth - 55,
                                    y: window.innerHeight / 2 + t.height / 2 + 65,
                                    padding: 0,
                                    textNode: e.querySelector(".cleverpush-confirm-double-below")
                                });
                                console.log(o), o && i.appendChild(o)
                            }
                            var n = e.querySelector(".cleverpush-confirm-double-btn");
                            n && n.addEventListener("click", this.onDoubleAllowClick.bind(this)), document.body.appendChild(e), this.doubleBox = document.body.querySelector(".cleverpush-confirm-double")
                        }
                    }, {
                        key: "onDoubleAllowClick",
                        value: function(e) {
                            var t = this;
                            e.preventDefault(), (0, _utils_debug__WEBPACK_IMPORTED_MODULE_4__.tI)("onDoubleAllowClick"), this.doubleBox && this.doubleBox.parentNode.removeChild(this.doubleBox), this.subscriptionManager.subscribeForce(!1).then((function(e) {
                                t.hideBackdrop(), t.subscribeCallback && t.subscribeCallback(!1, e)
                            })).catch((function(e) {
                                t.hideBackdrop(), t.subscribeCallback && t.subscribeCallback(e)
                            }))
                        }
                    }, {
                        key: "confirmFacebook",
                        value: function() {
                            this.facebookEnabled && !this.facebookConfirmed && "undefined" != typeof FB && (this.facebookConfirmed = !0, FB.AppEvents.logEvent("MessengerCheckboxUserConfirmation", null, {
                                app_id: this.config.facebookAppId,
                                page_id: this.config.facebookPageId,
                                ref: this.config.channelId,
                                user_ref: this.facebookUserRef
                            }), this.facebookCheckboxChecked && "function" == typeof this.subscriptionManager.setFacebookUserRef && this.subscriptionManager.setFacebookUserRef(this.facebookUserRef))
                        }
                    }, {
                        key: "onDenyClick",
                        value: function(e) {
                            (0, _utils_debug__WEBPACK_IMPORTED_MODULE_4__.tI)("denyPush"), e.preventDefault();
                            try {
                                this.subscriptionManager.storageManager.setDenied(), this.subscriptionManager.iframeMessenger && this.subscriptionManager.iframeMessenger.setDenied && this.subscriptionManager.iframeMessenger.setDenied()
                            } catch (e) {
                                _utils_debug__WEBPACK_IMPORTED_MODULE_4__.cM.error(e)
                            }
                            this.autoHideBackdrop = !0, this.hide(), !this.config.ownDomain || "https:" !== window.parent.location.protocol && "localhost" !== window.parent.location.hostname || this.showDenyAlert(), "function" == typeof this.allowCallback && (this.allowCallback(!1, []), this.allowCallback = void 0)
                        }
                    }, {
                        key: "onTopicsDenyClick",
                        value: function(e) {
                            (0, _utils_debug__WEBPACK_IMPORTED_MODULE_4__.tI)("denyPush"), e.preventDefault(), this.autoHideBackdrop = !0, this.hide(), "function" == typeof this.allowCallback && (this.allowCallback(!1, []), this.allowCallback = void 0)
                        }
                    }, {
                        key: "hasTopicCheckboxes",
                        value: function(e) {
                            if ((0, _utils_debug__WEBPACK_IMPORTED_MODULE_4__.tI)("hasTopicCheckboxes"), this.config.confirmAlertSelectTopicsLater && !this.withTopics && void 0 === e) return !0;
                            var t = document.querySelector(".cleverpush-confirm");
                            return !!t && t.querySelectorAll('input[name="topics[]"]').length > 0
                        }
                    }, {
                        key: "getSelectedTopics",
                        value: function() {
                            (0, _utils_debug__WEBPACK_IMPORTED_MODULE_4__.tI)("getSelectedTopics");
                            var e = (this.channelTopics || []).filter(_utils_topics__WEBPACK_IMPORTED_MODULE_8__.u).map((function(e) {
                                    return e._id
                                })),
                                t = document.querySelector(".cleverpush-confirm");
                            if (t) {
                                var i = t.querySelectorAll('input[name="topics[]"]');
                                if (i && i.length) {
                                    e = [];
                                    for (var o = 0; o < i.length; o += 1) "checkbox" !== i[o].type && "radio" !== i[o].type || !i[o].checked || e.push(i[o].value)
                                }
                            }
                            return e
                        }
                    }, {
                        key: "showDenyAlert",
                        value: function() {
                            (0, _utils_debug__WEBPACK_IMPORTED_MODULE_4__.tI)("showDenyAlert")
                        }
                    }, {
                        key: "onClickToCloseDenyAlert",
                        value: function(e) {
                            this.denyAlert && e.target !== this.denyAlert && e.target.parentNode !== this.denyAlert && (document.removeEventListener("click", this.onClickToCloseDenyAlertListener), this.onDenyAlertClick())
                        }
                    }, {
                        key: "onDenyAlertClick",
                        value: function(e) {
                            void 0 !== e && e.preventDefault(), (0, _utils_debug__WEBPACK_IMPORTED_MODULE_4__.tI)("onDenyAlertClick");
                            var t = document.getElementsByClassName("cleverpush-deny-alert")[0];
                            t.parentNode.removeChild(t), this.denyAlert = null
                        }
                    }, {
                        key: "showBrandingBox",
                        value: function() {
                            (0, _utils_debug__WEBPACK_IMPORTED_MODULE_4__.tI)("showBrandingBox"), document.body.appendChild((0, _utils_dom__WEBPACK_IMPORTED_MODULE_5__.dS)('<div class="cleverpush-branding-box cleverpush-branding-box-'.concat(this.id, '"><div class="cleverpush-branding-box-text">').concat(this.getBrandingLinks(), '</div><button class="cleverpush-branding-box-close">&times;</button></div>'))), this.brandingBox = document.querySelector(".cleverpush-branding-box-".concat(this.id)), this.brandingBoxCloseButton = this.brandingBox.querySelector(".cleverpush-branding-box-close"), this.brandingBoxCloseButton && this.brandingBoxCloseButton.addEventListener("click", this.removeBrandingBox.bind(this))
                        }
                    }, {
                        key: "getBrandingLinks",
                        value: function() {
                            var e = [],
                                t = this.config.confirmAlertThemeLinkColor;
                            return this.config.confirmAlertLinkStyle && this.config.confirmAlertLinkStyle.color && (t = this.config.confirmAlertLinkStyle.color), this.config.hideBranding || ("convertpush.io" === this.config.cleverpushDomain ? e.push('<a href="https://convertpush.io/" target="_blank" style="'.concat(t ? "color: ".concat(t, " !important") : "", '">Powered by ConvertPush</a>')) : e.push('<a href="https://cleverpush.com/" target="_blank" style="'.concat(t ? "color: ".concat(t, " !important") : "", '">Powered by CleverPush</a>'))), this.config.privacyPolicyUrl && e.push('<a href="'.concat(this.config.privacyPolicyUrl, '" target="_blank" style="').concat(t ? "color: ".concat(t, " !important") : "", '">').concat(this.config.privacyPolicyText || (0, _utils_translate__WEBPACK_IMPORTED_MODULE_6__.I)("privacy"), "</a>")), this.config.faqText && this.config.faqUrl && e.push('<a href="'.concat(this.config.faqUrl, '" target="_blank" style="').concat(t ? "color: ".concat(t, " !important") : "", '">').concat(this.config.faqText || "FAQ", "</a>")), e.join(" &nbsp;/&nbsp; ")
                        }
                    }, {
                        key: "showBackdrop",
                        value: function(e, t, i) {
                            var o = this;
                            (0, _utils_debug__WEBPACK_IMPORTED_MODULE_4__.tI)("showBackdrop");
                            var n = "grant";
                            if (void 0 !== t && ("denied" !== t && "silentPrompt" !== t || (n = t)), "denied" === n || "silentPrompt" === n || this.config.hideNativeConfirmAlert || this.config.showConfirmAlert || !this.config.confirmAlertNativeTheme || "cleverpush-confirm-default" === this.config.confirmAlertNativeTheme || "cleverpush-confirm-backdrop-text" === this.config.confirmAlertNativeTheme || !this.config.ownDomain || "https:" !== window.parent.location.protocol && "localhost" !== window.parent.location.hostname || (_utils_debug__WEBPACK_IMPORTED_MODULE_4__.cM.debug("appending native backdrop", this.config.showConfirmAlert), this.appendConfirmBox("".concat(this.config.confirmAlertNativeTheme, " ").concat(this.config.confirmAlertNativeTheme, "-native"))), this.config.confirmAlertBackdrop || this.config.showConfirmAlert || this.config.confirmAlertNativeTheme && "cleverpush-confirm-default" !== this.config.confirmAlertNativeTheme || this.config.hideBranding || this.showBrandingBox(), "denied" === n || "silentPrompt" === n || void 0 === this.config.confirmAlertBackdrop || this.config.confirmAlertBackdrop) {
                                var c = this.config.alertLocalization || {},
                                    r = (navigator.language || navigator.userLanguage || "").substr(0, 2);
                                this.config.alertLocalizationTranslations && r && this.config.alertLocalizationTranslations[r] && (c = Object.assign({}, c, this.config.alertLocalizationTranslations[r])), Object.keys(c).forEach((function(e) {
                                    c[e] && (c[e] = (0, _utils_translate__WEBPACK_IMPORTED_MODULE_6__.R)(c[e]))
                                }));
                                var s = "";
                                if (this.config.ownDomain && ("https:" === window.parent.location.protocol || "localhost" === window.parent.location.hostname)) {
                                    if ("denied" === n || "silentPrompt" === n || "cleverpush-confirm-backdrop-text" === this.config.confirmAlertNativeTheme)
                                        if ("grant" === n) s += '<div class="cleverpush-backdrop-text" style="'.concat(this.config.confirmAlertThemeTextColor ? "color: ".concat(this.config.confirmAlertThemeTextColor) : "", '">\n').concat(this.config.channelIcon && !this.config.confirmAlertHideChannelIcon ? '<p class="cleverpush-backdrop-icon"><img src="'.concat(this.config.channelIcon, '" alt="').concat(this.config.channelName, '"></p>') : "", "\n<h2>").concat(c.title || (0, _utils_translate__WEBPACK_IMPORTED_MODULE_6__.I)("popup.info").formatCleverPush("<strong>".concat((0, _utils_translate__WEBPACK_IMPORTED_MODULE_6__.I)("confirm.allowBrowser") || (0, _utils_translate__WEBPACK_IMPORTED_MODULE_6__.I)("confirm.allow"), "</strong>")), "</h2>\n<p>").concat(c.info || (0, _utils_translate__WEBPACK_IMPORTED_MODULE_6__.I)("popup.text").formatCleverPush("<strong>".concat(this.config.channelName, "</strong>")), "</p>\n</div>");
                                        else if ("silentPrompt" === n) s += '<div class="cleverpush-backdrop-text"><h2>'.concat(i, "</h2></div>");
                                    else {
                                        var a = new(ua_parser_js__WEBPACK_IMPORTED_MODULE_3___default()),
                                            l = a.getBrowser().name,
                                            _ = a.getOS().name;
                                        l = l.toLowerCase().replace(/\s/g, "").replace("chromium", "chrome"), _ = _.toLowerCase().replace(/\s/g, "").replace("macos", "mac");
                                        var h = "";
                                        "chrome" !== l && "firefox" !== l && "safari" !== l || "android" !== _ && "windows" !== _ && "mac" !== _ || (h = "chrome" === l && "android" === _ ? '<div><video src="https://static.cleverpush.com/app/images/unblock-tutorial/'.concat(l, "-").concat(_, '.mp4" width="100%" autoplay loop muted playsinline /></div>') : '<div><img src="https://static.cleverpush.com/app/images/unblock-tutorial/'.concat(l, "-").concat(_, '.gif" /></div>')), s += '<div class="cleverpush-backdrop-text"><h2>'.concat(h ? (0, _utils_translate__WEBPACK_IMPORTED_MODULE_6__.I)("unblock.title") : i, "</h2>").concat(h, "</div>")
                                    }
                                    this.config.hideNativeConfirmAlert || this.config.showConfirmAlert && (!this.config.confirmAlertNativeTheme || this.config.confirmAlertNativeTheme)
                                }
                                var f = document.getElementsByClassName("cleverpush-backdrop");
                                if (f && f.length)
                                    for (var u = 0; u < f.length; u += 1) {
                                        var d = f[u];
                                        d && d.parentNode && d.parentNode.removeChild(d)
                                    }
                                var p = document.createElement("div");
                                if (p.className = "cleverpush-backdrop", p.style.display = "none", p.innerHTML = s, this.config.confirmAlertBackdropOpacity && "denied" !== n && "silentPrompt" !== n && (p.style.backgroundColor = "rgba(0, 0, 0, ".concat(this.config.confirmAlertBackdropOpacity, ")")), this.config.confirmAlertBackdropBlur && (p.className += " cleverpush-backdrop-blur"), p.addEventListener("click", (function(e) {
                                        e.preventDefault(), o.hideBackdrop(n)
                                    })), document.body && (document.body.appendChild(p), document.body.classList ? (document.body.classList.add("has-cleverpush-backdrop"), this.config.confirmAlertBackdropBlur && document.body.classList.add("has-cleverpush-backdrop-blur")) : (document.body.className += " has-cleverpush-backdrop", this.config.confirmAlertBackdropBlur && (document.body.className += " has-cleverpush-backdrop-blur"))), s && s.length && !this.config.confirmAlertHideArrow) {
                                    var m = this.getArrowNode(n);
                                    m && p.appendChild(m)
                                }(0, _utils_dom__WEBPACK_IMPORTED_MODULE_5__.Ji)(p, 200, void 0 !== e ? e : function() {})
                            } else "function" == typeof e && e()
                        }
                    }, {
                        key: "hideBackdrop",
                        value: function(e) {
                            if ((0, _utils_debug__WEBPACK_IMPORTED_MODULE_4__.tI)("hideBackdrop"), this.removeBrandingBox(), document.body && (document.body.classList ? (this.config.confirmAlertBackdropBlur && document.body.classList.remove("has-cleverpush-backdrop-blur"), document.body.classList.remove("has-cleverpush-backdrop")) : (this.config.confirmAlertBackdropBlur && (document.body.className = document.body.className.replace("has-cleverpush-backdrop-blur", "")), document.body.className = document.body.className.replace("has-cleverpush-backdrop", ""))), !this.config.hideNativeConfirmAlert && this.config.confirmAlertNativeTheme && "cleverpush-confirm-default" !== this.config.confirmAlertNativeTheme && "cleverpush-backdrop-text" !== this.config.confirmAlertNativeTheme && this.removeConfirmBox(), void 0 !== e && "denied" === e || void 0 === this.config.confirmAlertBackdrop || this.config.confirmAlertBackdrop || this.config.showSilentPromptTutorial) {
                                for (var t = document.getElementsByClassName("cleverpush-backdrop"), i = 0; i < t.length; i += 1) {
                                    ! function(e) {
                                        (0, _utils_dom__WEBPACK_IMPORTED_MODULE_5__.U6)(e, 200, (function() {
                                            e && e.parentNode && e.parentNode.removeChild(e)
                                        }))
                                    }(t[i])
                                }
                                void 0 !== e && "granted" === e && this.confirmFacebook()
                            }
                        }
                    }, {
                        key: "camelCaseToDash",
                        value: function(e) {
                            return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
                        }
                    }, {
                        key: "getLocalization",
                        value: function(e) {
                            var t = this.config.alertLocalization || {},
                                i = (navigator.language || navigator.userLanguage || "").substr(0, 2);
                            this.config.alertLocalizationTranslations && i && this.config.alertLocalizationTranslations[i] && (t = Object.assign({}, t, this.config.alertLocalizationTranslations[i])), t = Object.assign({}, t, e.customLocalization), e.topicsRequired && (this.config.confirmAlertRequireChannelTopics = !0);
                            var o = {
                                title: t.title || (0, _utils_translate__WEBPACK_IMPORTED_MODULE_6__.I)("confirm.title").formatCleverPush(this.config.channelName),
                                info: t.info || (0, _utils_translate__WEBPACK_IMPORTED_MODULE_6__.I)("confirm.info"),
                                deny: t.deny || (0, _utils_translate__WEBPACK_IMPORTED_MODULE_6__.I)("confirm.deny"),
                                allow: t.allow || (0, _utils_translate__WEBPACK_IMPORTED_MODULE_6__.I)("confirm.allow"),
                                confirmInfo: t.confirmInfo || (0, _utils_translate__WEBPACK_IMPORTED_MODULE_6__.I)("popup.info").formatCleverPush((0, _utils_translate__WEBPACK_IMPORTED_MODULE_6__.I)("confirm.allowBrowser")),
                                nativeTitle: t.nativeTitle,
                                nativeText: t.nativeText
                            };
                            return Object.keys(o).forEach((function(e) {
                                o[e] && (o[e] = (0, _utils_translate__WEBPACK_IMPORTED_MODULE_6__.R)(o[e]))
                            })), o
                        }
                    }, {
                        key: "appendConfirmBox",
                        value: function appendConfirmBox(confirmAlertThemeParam, withTopicsParam, configParam, allowCallback) {
                            var _this5 = this;
                            if ((0, _utils_debug__WEBPACK_IMPORTED_MODULE_4__.tI)("appendConfirmBox", confirmAlertThemeParam, withTopicsParam, configParam), !this.confirmBox) {
                                this.withTopics = "boolean" == typeof withTopicsParam && withTopicsParam, "function" == typeof allowCallback && (this.allowCallback = allowCallback);
                                var confirmConfig = "object" === _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(configParam) ? configParam : {},
                                    localization = this.getLocalization(confirmConfig),
                                    confirmClass = "cleverpush-confirm-default",
                                    confirmStyle = "",
                                    confirmAlertTheme = void 0 !== confirmAlertThemeParam ? confirmAlertThemeParam : this.config.confirmAlertTheme;
                                confirmAlertTheme && (confirmClass = confirmAlertTheme);
                                var parser = new(ua_parser_js__WEBPACK_IMPORTED_MODULE_3___default());
                                this.config.confirmAlertThemeVariant && "cleverpush-confirm-auto" !== this.config.confirmAlertThemeVariant ? confirmClass += " ".concat(this.config.confirmAlertThemeVariant) : "Mac OS" === parser.getOS().name ? confirmClass += " cleverpush-confirm-mac" : "Windows" === parser.getOS().name && (confirmClass += " cleverpush-confirm-windows", confirmClass += " cleverpush-confirm-chrome"), "Firefox" === parser.getBrowser().name && (confirmClass += " cleverpush-confirm-firefox"), "Opera" === parser.getBrowser().name && (confirmClass += " cleverpush-confirm-opera"), "Safari" === parser.getBrowser().name && (confirmClass += " cleverpush-confirm-safari"), "Chrome" === parser.getBrowser().name && (confirmClass += " cleverpush-confirm-chrome"), "Edge" === parser.getBrowser().name && (confirmClass += " cleverpush-confirm-edge"), this.config.confirmAlertStyle && this.config.confirmAlertStyle.color && (this.config.confirmAlertThemeTextColor = this.config.confirmAlertStyle.color), this.config.confirmAlertThemeBackgroundColor ? (confirmStyle += "background-color: ".concat(this.config.confirmAlertThemeBackgroundColor, ";"), this.config.confirmAlertThemeTextColor && (confirmStyle += "color: ".concat(this.config.confirmAlertThemeTextColor, ";"))) : this.config.confirmAlertThemeBackground && (confirmClass += " ".concat(this.config.confirmAlertThemeBackground)), this.config.confirmAlertHideChannelIcon && (confirmClass += " cleverpush-confirm-hide-channel-icon"), this.config.confirmAlertHideArrow && (confirmClass += " cleverpush-confirm-hide-arrow"), "PREVIEW" === this.config.env && (confirmClass += " cleverpush-confirm-preview"), confirmClass += " cleverpush-confirm-".concat(this.id);
                                var topicSelection = "",
                                    parentContainer;
                                if (!confirmConfig.topicsLayer || this.withTopics)
                                    if (this.config.topicsTemplateFunction) topicSelection = '<div class="cleverpush-topics cleverpush-confirm-topics"></div>';
                                    else if (this.channelTopics && this.channelTopics.length && !this.config.confirmAlertHideChannelTopics) {
                                    var _topics = this.channelTopics.filter((function(e) {
                                        return !e.parentTopic
                                    }));
                                    confirmConfig && confirmConfig.parentTopic && (_topics = this.channelTopics.filter((function(e) {
                                        return e.parentTopic === confirmConfig.parentTopic
                                    }))), topicSelection += '<div class="cleverpush-topics cleverpush-confirm-topics">', _topics.sort((function(e, t) {
                                        return e.sort - t.sort
                                    })).forEach((function(e) {
                                        var t = (0, _utils_translate__WEBPACK_IMPORTED_MODULE_6__.R)(e.name),
                                            i = _this5.channelTopics.filter((function(t) {
                                                return t.parentTopic === e._id
                                            }));
                                        topicSelection += '<div class="'.concat(i.length ? "topic-has-children" : "", '"><label style="').concat(_this5.config.confirmAlertThemeTextColor ? "color: ".concat(_this5.config.confirmAlertThemeTextColor, ";") : "", '"><input type="').concat(_this5.config.confirmAlertRadioButtonTopics || confirmConfig.topicsRadioButtons ? "radio" : "checkbox", '" name="topics[]" value="').concat(e._id, '" ').concat((0, _utils_topics__WEBPACK_IMPORTED_MODULE_8__.u)(e, _this5.subscribedTopics) ? "checked" : "", " ").concat(e.childTopicsRequired ? ' data-child-topics-required="true"' : "", "> ").concat(t, "</label></div>"), i.length && i.forEach((function(t) {
                                            var i = (0, _utils_translate__WEBPACK_IMPORTED_MODULE_6__.R)(t.name),
                                                o = _this5.config.confirmAlertRadioButtonTopics || e.childTopicsRadioButtons ? "radio" : "checkbox";
                                            topicSelection += '<div class="topic-child" data-parent-topic="'.concat(e._id, '" style="margin-left: 20px; font-size: 90%; ').concat((0, _utils_topics__WEBPACK_IMPORTED_MODULE_8__.u)(e, _this5.subscribedTopics) ? "" : "display: none;", '"><label><input type="').concat(o, '" name="topics[]" value="').concat(t._id, '" ').concat((0, _utils_topics__WEBPACK_IMPORTED_MODULE_8__.u)(e, _this5.subscribedTopics) && (0, _utils_topics__WEBPACK_IMPORTED_MODULE_8__.u)(t, _this5.subscribedTopics) ? "checked" : "", "> ").concat(i, "</label></div>")
                                        }))
                                    })), topicSelection += "</div>"
                                }
                                this.config.appendConfirmBoxTo && (parentContainer = document.querySelector(this.config.appendConfirmBoxTo)), parentContainer ? confirmClass += "cleverpush-confirm-static" : (this.config.appendConfirmBoxTo && _utils_debug__WEBPACK_IMPORTED_MODULE_4__.cM.error("appendConfirmBoxTo: container not found. Falling back to default."), parentContainer = document.body);
                                var showLinks = !0;
                                if (!this.withTopics && ("https:" === window.parent.location.protocol || "localhost" === window.parent.location.hostname)) {
                                    var isNativeBox = confirmAlertThemeParam && "cleverpush-confirm-default cleverpush-confirm-default-native" !== confirmAlertThemeParam && "cleverpush-confirm-backdrop-text cleverpush-confirm-backdrop-text-native" !== confirmAlertThemeParam;
                                    if (isNativeBox || void 0 === window.Notification || "granted" !== window.Notification.permission || (isNativeBox = !0), _utils_debug__WEBPACK_IMPORTED_MODULE_4__.cM.debug("isNativeBox", isNativeBox), this.config.confirmAlertSelectTopicsLater) topicSelection = "";
                                    else if (this.config.showConfirmAlert && this.config.isSafari_12_1) isNativeBox && (topicSelection = "");
                                    else if (this.config.showConfirmAlert) {
                                        var canHideTopics = this.config.confirmAlertNativeTheme && "cleverpush-confirm-default" !== this.config.confirmAlertNativeTheme;
                                        isNativeBox ? canHideTopics && this.config.showConfirmAlertMobile && (topicSelection = "") : canHideTopics && !this.config.showConfirmAlertMobile && (topicSelection = "")
                                    } else isNativeBox && this.config.confirmAlertSelectTopicsLater && this.config.ownDomain && (topicSelection = "");
                                    isNativeBox && (localization.title = localization.nativeTitle || localization.title || "", localization.info = localization.nativeText || localization.info || "")
                                }
                                this.facebookEnabled && !this.config.facebookButtonOptIn && (this.config.facebookDoubleOptIn && !this.facebookDoubleOptInConfirmed && (topicSelection += '\n        <div style="margin-top: 15px; margin-bottom: 0; font-weight: bold;" class="cleverpush-confirm-messenger-title cleverpush-topics cleverpush-confirm-topics">Facebook Messenger</div>\n        <div class="cleverpush-topics cleverpush-confirm-topics"><div style="margin-top: 5px;"><label style="line-height: 1.5;"><input type="checkbox" id="cleverpush-facebook-checkbox"> Ich möchte den Facebook-Newsletter und akzeptiere die <a href="'.concat(this.config.privacyPolicyUrl, '" target="_blank">Datenschutzerklärung</a></label></div></div>')), topicSelection += '<div class="fb-messenger-checkbox-wrap"><div class="fb-messenger-checkbox" origin="'.concat(location.origin, '" page_id="').concat(this.config.facebookPageId, '" messenger_app_id="').concat(this.config.facebookAppId, '" user_ref="').concat(this.facebookUserRef, '" prechecked="true" allow_login="true" size="large" style="margin-top: 10px; margin-left: -14px;"></div></div>')), this.withTopics && !confirmConfig.customLocalization && (confirmClass += " cleverpush-topic-box", localization.title = this.config.confirmAlertSelectTopicsLaterTitle || (0, _utils_translate__WEBPACK_IMPORTED_MODULE_6__.I)("confirm.selectTopics") || localization.title, this.config.confirmAlertSelectTopicsLaterTitle && (localization.title = (0, _utils_translate__WEBPACK_IMPORTED_MODULE_6__.R)(localization.title)), localization.info = "", localization.allow = (0, _utils_translate__WEBPACK_IMPORTED_MODULE_6__.I)("panel.save"));
                                var confirm = (0, _utils_dom__WEBPACK_IMPORTED_MODULE_5__.dS)('<div class="cleverpush-confirm '.concat(confirmClass, '" style="').concat(confirmStyle, '">\n        <div class="cleverpush-confirm-caret cleverpush-confirm-caret-top" style="display: none; border-bottom-color: ').concat(this.config.confirmAlertThemeBackgroundColor, '"></div>\n        <div class="cleverpush-confirm-caret cleverpush-confirm-caret-bottom" style="display: none; border-top-color: ').concat(this.config.confirmAlertThemeBackgroundColor, '"></div>\n        ').concat(this.config.confirmAlertCloseButton ? '<button type="button" class="cleverpush-confirm-hide">&times;</button>' : "", '\n        <div class="cleverpush-confirm-wrap">\n            ').concat("cleverpush-confirm-topbar cleverpush-confirm-topbar-native" === confirmAlertThemeParam ? '<div class="cleverpush-confirm-topbar-arrow"></div>' : "", '\n            <div class="', "cleverpush-confirm-icon".concat(this.config.confirmAlertRoundChannelIcon ? " cleverpush-confirm-icon-round" : ""), '"><img src="').concat(this.config.channelIcon, '"></div>\n          <div class="cleverpush-confirm-text" style="').concat(this.config.confirmAlertThemeTextColor ? "color: ".concat(this.config.confirmAlertThemeTextColor, ";") : "", '"><span class="cleverpush-confirm-title" style="').concat(this.config.confirmAlertThemeTitleColor ? "color: ".concat(this.config.confirmAlertThemeTitleColor, ";") : "", '">').concat(localization.title, '</span>\n            <p class="cleverpush-confirm-info" style="').concat(this.config.confirmAlertThemeTextColor ? "color: ".concat(this.config.confirmAlertThemeTextColor, ";") : "", " ").concat(this.config.confirmAlertStyle && this.config.confirmAlertStyle.fontSize ? "font-size: ".concat(this.config.confirmAlertStyle.fontSize, "px !important;") : "", '">').concat(localization.info, "</p>\n            ").concat(showLinks ? '<div class="cleverpush-confirm-branding"><span>'.concat(this.getBrandingLinks(), "</span></div>") : "", "\n            ").concat(topicSelection, '\n            </div>\n          <div class="cleverpush-clearfix cleverpush-clearfix-bottom">\n            <div class="cleverpush-confirm-buttons">\n            <button class="cleverpush-confirm-btn cleverpush-confirm-btn-deny">').concat(localization.deny, '</button>\n            <button class="cleverpush-confirm-btn cleverpush-confirm-btn-allow" style="').concat(this.config.confirmAlertThemeButtonTextColor ? "color: ".concat(this.config.confirmAlertThemeButtonTextColor, ";") : "", " ").concat(this.config.confirmAlertThemeButtonBackgroundColor ? "border-color: transparent !important; background: none; background-color: ".concat(this.config.confirmAlertThemeButtonBackgroundColor, ";") : "", '">').concat(localization.allow, '</button></div>\n            <div class="cleverpush-clearfix"></div>\n          </div>\n          ').concat(localization.confirmInfo ? '<div class="cleverpush-confirm-bottom-info" style="display: none;">\n            <div class="'.concat("cleverpush-confirm-icon".concat(this.config.confirmAlertRoundChannelIcon ? " cleverpush-confirm-icon-round" : ""), '"><img src="', this.config.channelIcon, '"></div>\n            <div class="cleverpush-confirm-bottom-info-text">').concat(localization.confirmInfo, '</div>\n            <div class="cleverpush-clearfix"></div>\n          </div>') : "", "\n        </div>\n      </div>"));
                                if (parentContainer.appendChild(confirm), this.confirmBox = document.querySelector(".cleverpush-confirm-".concat(this.id)), this.confirmBox && "object" === _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(this.config.confirmAlertStyle))
                                    for (var property in this.config.confirmAlertStyle) this.config.confirmAlertStyle.hasOwnProperty(property) && (this.confirmBox.style[property] = this.config.confirmAlertStyle[property] + (isNaN(this.config.confirmAlertStyle[property]) ? "" : "px"));
                                if (this.confirmBoxTitle = document.querySelector(".cleverpush-confirm-".concat(this.id, " .cleverpush-confirm-title")), this.confirmBoxTitle && "object" === _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(this.config.confirmAlertTitleStyle))
                                    for (var _property in this.config.confirmAlertTitleStyle) this.config.confirmAlertTitleStyle.hasOwnProperty(_property) && (this.confirmBoxTitle.style[_property] = this.config.confirmAlertTitleStyle[_property] + (isNaN(this.config.confirmAlertTitleStyle[_property]) ? "" : "px"));
                                try {
                                    !(this.config.confirmAlertButtonStyle || {}).backgroundColor || (this.config.confirmAlertAllowButtonStyle || {}).backgroundColor && (this.config.confirmAlertAllowButtonStyle || {}).backgroundColor !== (this.config.confirmAlertButtonStyle || {}).backgroundColor || ((this.config.confirmAlertAllowButtonStyle || {}).backgroundColor = (this.config.confirmAlertButtonStyle || {}).backgroundColor, delete(this.config.confirmAlertButtonStyle || {}).backgroundColor), !(this.config.confirmAlertButtonStyle || {}).color || (this.config.confirmAlertAllowButtonStyle || {}).color && (this.config.confirmAlertAllowButtonStyle || {}).color !== (this.config.confirmAlertButtonStyle || {}).color || ((this.config.confirmAlertAllowButtonStyle || {}).color = (this.config.confirmAlertButtonStyle || {}).color, delete(this.config.confirmAlertButtonStyle || {}).color)
                                } catch (e) {}
                                if ((this.cleverpush.config.customCss || "").replace(/\r?\n|\r/g, "").replace(/\s/g, "").indexOf(".cleverpush-confirm-btn { width: 100% !important; }".replace(/\r?\n|\r/g, "").replace(/\s/g, "")) > -1 && (this.config.confirmAlertAllowButtonStyle || (this.config.confirmAlertAllowButtonStyle = {}), this.config.confirmAlertAllowButtonStyle.marginLeft = "0px"), Object.keys(this.config.confirmAlertIconStyle || {}).length) {
                                    var icon = this.confirmBox.querySelector(".cleverpush-confirm-icon img"),
                                        style = this.config.confirmAlertIconStyle;
                                    if (icon) {
                                        if (style.width && (icon.style.width = "".concat(style.width, "px"), window.innerWidth >= 768)) {
                                            var text = this.confirmBox.querySelector(".cleverpush-confirm-text");
                                            if (text) {
                                                var margin = 15;
                                                text.style.setProperty("width", "calc(100% - ".concat(style.width + margin, "px)"), "important")
                                            }
                                        }
                                        style.height && (icon.style.height = "".concat(style.height, "px"))
                                    }
                                }
                                if (this.allowButton = this.confirmBox.querySelector(".cleverpush-confirm-btn-allow"), this.allowButton) {
                                    if (this.allowButton.addEventListener("click", this.onAllowClick.bind(this), !0), "object" === _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(this.config.confirmAlertButtonStyle))
                                        for (var _property2 in this.config.confirmAlertButtonStyle.backgroundColor && !this.config.confirmAlertButtonStyle.borderColor && (this.config.confirmAlertButtonStyle.borderColor = "transparent"), this.config.confirmAlertButtonStyle) this.config.confirmAlertButtonStyle.hasOwnProperty(_property2) && this.allowButton.style.setProperty(this.camelCaseToDash(_property2), this.config.confirmAlertButtonStyle[_property2], "important");
                                    if ("object" === _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(this.config.confirmAlertAllowButtonStyle))
                                        for (var _property3 in this.config.confirmAlertAllowButtonStyle) this.config.confirmAlertAllowButtonStyle.backgroundColor && !this.config.confirmAlertAllowButtonStyle.borderColor && (this.config.confirmAlertAllowButtonStyle.borderColor = "transparent"), this.config.confirmAlertAllowButtonStyle.hasOwnProperty(_property3) && this.allowButton.style.setProperty(this.camelCaseToDash(_property3), this.config.confirmAlertAllowButtonStyle[_property3], "important")
                                }
                                if (this.denyButton = this.confirmBox.querySelector(".cleverpush-confirm-btn-deny"), this.denyButton && (confirmConfig.topicsLayer ? this.denyButton.addEventListener("click", this.onTopicsDenyClick.bind(this)) : this.denyButton.addEventListener("click", this.onDenyClick.bind(this)), "object" === _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(this.config.confirmAlertButtonStyle)))
                                    for (var _property4 in this.config.confirmAlertButtonStyle) this.config.confirmAlertButtonStyle.hasOwnProperty(_property4) && this.denyButton.style.setProperty(this.camelCaseToDash(_property4), this.config.confirmAlertButtonStyle[_property4], "important");
                                this.closeButton = this.confirmBox.querySelector(".cleverpush-confirm-hide"), this.closeButton && (this.closeButton.addEventListener("click", this.onCloseClick.bind(this)), this.confirmBox && "object" === _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(this.config.confirmAlertStyle) && this.config.confirmAlertStyle.color && (this.closeButton.style.color = this.config.confirmAlertStyle.color));
                                for (var topics = this.confirmBox.querySelectorAll('input[name="topics[]"]'), topicIndex = 0; topicIndex < topics.length; topicIndex += 1) topics[topicIndex].addEventListener("change", (function(e) {
                                    _this5.confirmBox || (_this5.confirmBox = document.querySelector(".cleverpush-confirm-".concat(_this5.id)));
                                    for (var t = _this5.confirmBox.querySelectorAll('.topic-child[data-parent-topic="'.concat(e.target.value, '"]')), i = function(i) {
                                            t[i].style.display = e.target.checked ? "block" : "none";
                                            var o = t[i].querySelector('input[type="checkbox"], input[type="radio"]'),
                                                n = (_this5.config.channelTopics || []).find((function(e) {
                                                    return e._id === o.value
                                                }));
                                            e.target.checked ? n && (o.checked = (0, _utils_topics__WEBPACK_IMPORTED_MODULE_8__.u)(n, _this5.subscribedTopics)) : o.checked = !1
                                        }, o = 0; o < t.length; o += 1) i(o)
                                }));
                                if (this.config.topicsTemplateFunction && topicSelection) {
                                    var topicsDiv = parentContainer.querySelector(".cleverpush-confirm .cleverpush-confirm-topics");
                                    if (topicsDiv) try {
                                        var templateFunc = eval("(".concat(this.config.topicsTemplateFunction, ")"));
                                        "function" == typeof templateFunc ? (_utils_debug__WEBPACK_IMPORTED_MODULE_4__.cM.debug("calling templateFunc"), templateFunc(topicsDiv, this.config, [], "confirm")) : _utils_debug__WEBPACK_IMPORTED_MODULE_4__.cM.warn("typeof templateFunc is not function")
                                    } catch (e) {
                                        _utils_debug__WEBPACK_IMPORTED_MODULE_4__.cM.warn(e)
                                    } else _utils_debug__WEBPACK_IMPORTED_MODULE_4__.cM.warn(".cleverpush-topics div not found")
                                }
                                if (this.facebookEnabled && !this.config.facebookButtonOptIn) {
                                    var loadFbSdk = function() {
                                        _subscription_facebookManager__WEBPACK_IMPORTED_MODULE_7__.default.initFacebook((function() {
                                            "undefined" != typeof FB && (FB.Event.subscribe("messenger_checkbox", (function(e) {
                                                _utils_debug__WEBPACK_IMPORTED_MODULE_4__.cM.info('FB - Event "messenger_checkbox"', e), "rendered" === e.event ? _utils_debug__WEBPACK_IMPORTED_MODULE_4__.cM.info('FB - Event "messenger_checkbox" - successfully rendered') : "checkbox" === e.event ? (_utils_debug__WEBPACK_IMPORTED_MODULE_4__.cM.info("FB - Checkbox state:", e.state), _this5.facebookCheckboxChecked = "checked" === e.state) : "not_you" === e.event ? _utils_debug__WEBPACK_IMPORTED_MODULE_4__.cM.info("FB - User clicked 'not you'") : "hidden" === e.event && _utils_debug__WEBPACK_IMPORTED_MODULE_4__.cM.warn("FB - Plugin was hidden. This usually means a problem in FB or integration or your browser settings. Did you whitelist your domain? When using a FB dev app is your FB account registered developer/tester/admin? Have generated a unique `user_ref` for this render? Do you have disabled third-party tracking in your browser settings?")
                                            })), FB.XFBML.parse())
                                        }))
                                    };
                                    this.config.facebookDoubleOptIn ? (this.facebookDoubleOptInConfirmed = !0, this.facebookConfirmCheckbox = this.confirmBox.querySelector("#cleverpush-facebook-checkbox"), this.facebookConfirmCheckbox && this.facebookConfirmCheckbox.addEventListener("click", (function() {
                                        loadFbSdk()
                                    }))) : loadFbSdk()
                                }
                            }
                        }
                    }, {
                        key: "show",
                        value: function(e) {
                            (0, _utils_debug__WEBPACK_IMPORTED_MODULE_4__.tI)("showConfirmBox"), "function" == typeof e && (this.subscribeCallback = e), this.visible || (this.visible = !0, this.appendConfirmBox(), this.showBackdrop())
                        }
                    }, {
                        key: "setAutoHideBackdrop",
                        value: function(e) {
                            this.autoHideBackdrop = e
                        }
                    }]), Confirm
                }()
        },
        8606: (e, t, i) => {
            "use strict";
            i.d(t, {
                Z: () => h
            });
            var o = i(4575),
                n = i.n(o),
                c = i(8585),
                r = i.n(c),
                s = i(9754),
                a = i.n(s),
                l = i(2205),
                _ = i.n(l),
                h = function(e) {
                    function t() {
                        return n()(this, t), r()(this, a()(t).apply(this, arguments))
                    }
                    return _()(t, e), t
                }(i(4740).Z)
        },
        6866: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                default: () => g
            });
            var o = i(4575),
                n = i.n(o),
                c = i(3913),
                r = i.n(c),
                s = i(8585),
                a = i.n(s),
                l = i(9754),
                _ = i.n(l),
                h = i(2205),
                f = i.n(h),
                u = i(4005),
                d = i(2034),
                p = (i(8606), i(1078)),
                m = i(4740),
                g = function(e) {
                    function t(e, i, o) {
                        var c;
                        return n()(this, t), c = a()(this, _()(t).call(this, e, i, o)), e.multiChannels && e.multiChannels.facebookChannel && e.multiChannels.facebookChannel._id !== e.channelId && (e.channelId = e.multiChannels.facebookChannel._id, i.channelId = e.channelId), c.triggerEvent(d.Z.INITIALIZED), c
                    }
                    return f()(t, e), r()(t, [{
                        key: "isSubscribed",
                        value: function() {
                            var e = this;
                            return new Promise((function(t) {
                                e.subscribed = !!e.storageManager.getFacebookUserRef() || !!e.storageManager.isSubscribed(!0, !0), t(e.subscribed)
                            }))
                        }
                    }, {
                        key: "canSubscribe",
                        value: function() {
                            var e = this;
                            return new Promise((function(t, i) {
                                "true" !== new URLSearchParams(location.search.slice(1)).get("cleverPushFacebookClick") ? "denied" !== localStorage.getItem("cleverpush-subscription-status") ? e.isSubscribed().then((function(e) {
                                    e ? i(new m.Z("User is already subscribed", "subscribed")) : t(!0)
                                })).catch(i) : i(new m.Z("User has manually unsubscribed or denied notifications", "unsubscribed")) : i(new m.Z("User is already subscribed", "subscribed"))
                            }))
                        }
                    }, {
                        key: "subscribeForce",
                        value: function() {
                            return this.subscribe()
                        }
                    }, {
                        key: "setFacebookUserRef",
                        value: function(e) {
                            var t = this;
                            this.storageManager.setFacebookUserRef(e), this.sync({
                                facebookUserRef: e
                            }).then((function() {
                                t.isSubscribing = !1, t.triggerEvent(d.Z.SUBSCRIBED, t.storageManager.getSubscriptionId()), t.resolveSubscribe && t.resolveSubscribe("granted")
                            }))
                        }
                    }, {
                        key: "subscribe",
                        value: function() {
                            var e = this;
                            return new Promise((function(t, i) {
                                e.config.facebookAppId && e.config.facebookPageId ? (window.open("https://m.me/".concat(e.config.facebookPageId), "_blank"), localStorage.setItem("cleverpush-subscription-status", "allowed"), e.triggerEvent(d.Z.SUBSCRIBED, null), t()) : (p.cM.warn("Facebook App ID or Page ID missing"), i()), e.confirm && e.confirm.hideBackdrop()
                            }))
                        }
                    }, {
                        key: "unsubscribe",
                        value: function(e) {
                            var t = this,
                                i = this.storageManager.getSubscriptionId();
                            return i ? this.api.unsubscribe(i).then((function() {
                                t.storageManager.setUnsubscribed(e), t.triggerEvent(d.Z.UNSUBSCRIBED)
                            })) : Promise.resolve()
                        }
                    }, {
                        key: "hasNotificationPermission",
                        value: function() {
                            return Promise.resolve(!!this.storageManager.getFacebookUserRef())
                        }
                    }, {
                        key: "getNotificationPermission",
                        value: function() {
                            return Promise.resolve(this.storageManager.getFacebookUserRef() ? "granted" : "default")
                        }
                    }], [{
                        key: "initFacebook",
                        value: function(e) {
                            if (t.facebookInitialized) e();
                            else {
                                window.fbAsyncInit = function() {
                                    p.cM.debug("window.fbAsyncInit"), FB.init({
                                        appId: CleverPush.config.facebookAppId,
                                        version: "v2.9"
                                    }), t.facebookInitialized = !0, e()
                                };
                                var i = "en_US",
                                    o = (navigator.language || navigator.userLanguage || "").replace("-", "_").substr(0, 5);
                                o && o !== i && ["en_US", "ca_ES", "cs_CZ", "cx_PH", "cy_GB", "da_DK", "de_DE", "eu_ES", "en_UD", "es_LA", "es_ES", "gn_PY", "fi_FI", "fr_FR", "gl_ES", "hu_HU", "it_IT", "ja_JP", "ko_KR", "nb_NO", "nn_NO", "nl_NL", "fy_NL", "pl_PL", "pt_BR", "pt_PT", "ro_RO", "ru_RU", "sk_SK", "sl_SI", "sv_SE", "th_TH", "tr_TR", "ku_TR", "zh_CN", "zh_HK", "zh_TW", "af_ZA", "sq_AL", "hy_AM", "az_AZ", "be_BY", "bn_IN", "bs_BA", "bg_BG", "hr_HR", "nl_BE", "en_GB", "et_EE", "fo_FO", "fr_CA", "ka_GE", "el_GR", "gu_IN", "hi_IN", "is_IS", "id_ID", "ga_IE", "jv_ID", "kn_IN", "kk_KZ", "lv_LV", "lt_LT", "mk_MK", "mg_MG", "ms_MY", "mt_MT", "mr_IN", "mn_MN", "ne_NP", "pa_IN", "sr_RS", "so_SO", "sw_KE", "tl_PH", "ta_IN", "te_IN", "ml_IN", "uk_UA", "uz_UZ", "vi_VN", "km_KH", "tg_TJ", "ar_AR", "he_IL", "ur_PK", "fa_IR", "ps_AF", "my_MM", "qz_MM", "or_IN", "si_LK", "rw_RW", "cb_IQ", "ha_NG", "ja_KS", "br_FR", "tz_MA", "co_FR", "as_IN", "ff_NG", "sc_IT", "sz_PL"].forEach((function(e) {
                                    e !== o && e.substr(0, 2) !== o.substr(0, 2) || (i = e)
                                })), n = document, c = "script", r = "facebook-jssdk", a = n.getElementsByTagName(c)[0], n.getElementById(r) || ((s = n.createElement(c)).id = r, s.src = "//connect.facebook.net/" + i + "/sdk.js", a.parentNode.insertBefore(s, a))
                            }
                            var n, c, r, s, a
                        }
                    }]), t
                }(u.default)
        },
        2508: (e, t, i) => {
            "use strict";

            function o(e, t) {
                return !!(void 0 !== t && t && t.length && (t || []).indexOf(e._id) > -1) || (!e.defaultUnchecked || e.matchPathChecked && e.matchPathChecked && location.pathname && new RegExp(e.matchPathChecked).test(location.pathname))
            }
            i.d(t, {
                u: () => o
            })
        }
    }
]);
//# sourceMappingURL=720.js.map