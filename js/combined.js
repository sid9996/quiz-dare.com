//clbjs
! function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.ClipboardJS = e() : t.ClipboardJS = e()
}(this, function() {
    return function(t) {
        function e(o) {
            if (n[o]) return n[o].exports;
            var r = n[o] = {
                i: o,
                l: !1,
                exports: {}
            };
            return t[o].call(r.exports, r, r.exports, e), r.l = !0, r.exports
        }
        var n = {};
        return e.m = t, e.c = n, e.i = function(t) {
            return t
        }, e.d = function(t, n, o) {
            e.o(t, n) || Object.defineProperty(t, n, {
                configurable: !1,
                enumerable: !0,
                get: o
            })
        }, e.n = function(t) {
            var n = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return e.d(n, "a", n), n
        }, e.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, e.p = "", e(e.s = 3)
    }([function(t, e, n) {
        var o, r, i;
        ! function(a, c) {
            r = [t, n(7)], o = c, void 0 !== (i = "function" == typeof o ? o.apply(e, r) : o) && (t.exports = i)
        }(0, function(t, e) {
            "use strict";

            function n(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            var o = function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }(e),
                r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                },
                i = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var o = e[n];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                        }
                    }
                    return function(e, n, o) {
                        return n && t(e.prototype, n), o && t(e, o), e
                    }
                }(),
                a = function() {
                    function t(e) {
                        n(this, t), this.resolveOptions(e), this.initSelection()
                    }
                    return i(t, [{
                        key: "resolveOptions",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.action = t.action, this.container = t.container, this.emitter = t.emitter, this.target = t.target, this.text = t.text, this.trigger = t.trigger, this.selectedText = ""
                        }
                    }, {
                        key: "initSelection",
                        value: function() {
                            this.text ? this.selectFake() : this.target && this.selectTarget()
                        }
                    }, {
                        key: "selectFake",
                        value: function() {
                            var t = this,
                                e = "rtl" == document.documentElement.getAttribute("dir");
                            this.removeFake(), this.fakeHandlerCallback = function() {
                                return t.removeFake()
                            }, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[e ? "right" : "left"] = "-9999px";
                            var n = window.pageYOffset || document.documentElement.scrollTop;
                            this.fakeElem.style.top = n + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = (0, o.default)(this.fakeElem), this.copyText()
                        }
                    }, {
                        key: "removeFake",
                        value: function() {
                            this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null)
                        }
                    }, {
                        key: "selectTarget",
                        value: function() {
                            this.selectedText = (0, o.default)(this.target), this.copyText()
                        }
                    }, {
                        key: "copyText",
                        value: function() {
                            var t = void 0;
                            try {
                                t = document.execCommand(this.action)
                            } catch (e) {
                                t = !1
                            }
                            this.handleResult(t)
                        }
                    }, {
                        key: "handleResult",
                        value: function(t) {
                            this.emitter.emit(t ? "success" : "error", {
                                action: this.action,
                                text: this.selectedText,
                                trigger: this.trigger,
                                clearSelection: this.clearSelection.bind(this)
                            })
                        }
                    }, {
                        key: "clearSelection",
                        value: function() {
                            this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges()
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.removeFake()
                        }
                    }, {
                        key: "action",
                        set: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy";
                            if (this._action = t, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"')
                        },
                        get: function() {
                            return this._action
                        }
                    }, {
                        key: "target",
                        set: function(t) {
                            if (void 0 !== t) {
                                if (!t || "object" !== (void 0 === t ? "undefined" : r(t)) || 1 !== t.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                                if ("copy" === this.action && t.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                if ("cut" === this.action && (t.hasAttribute("readonly") || t.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                this._target = t
                            }
                        },
                        get: function() {
                            return this._target
                        }
                    }]), t
                }();
            t.exports = a
        })
    }, function(t, e, n) {
        function o(t, e, n) {
            if (!t && !e && !n) throw new Error("Missing required arguments");
            if (!c.string(e)) throw new TypeError("Second argument must be a String");
            if (!c.fn(n)) throw new TypeError("Third argument must be a Function");
            if (c.node(t)) return r(t, e, n);
            if (c.nodeList(t)) return i(t, e, n);
            if (c.string(t)) return a(t, e, n);
            throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")
        }

        function r(t, e, n) {
            return t.addEventListener(e, n), {
                destroy: function() {
                    t.removeEventListener(e, n)
                }
            }
        }

        function i(t, e, n) {
            return Array.prototype.forEach.call(t, function(t) {
                t.addEventListener(e, n)
            }), {
                destroy: function() {
                    Array.prototype.forEach.call(t, function(t) {
                        t.removeEventListener(e, n)
                    })
                }
            }
        }

        function a(t, e, n) {
            return u(document.body, t, e, n)
        }
        var c = n(6),
            u = n(5);
        t.exports = o
    }, function(t, e) {
        function n() {}
        n.prototype = {
            on: function(t, e, n) {
                var o = this.e || (this.e = {});
                return (o[t] || (o[t] = [])).push({
                    fn: e,
                    ctx: n
                }), this
            },
            once: function(t, e, n) {
                function o() {
                    r.off(t, o), e.apply(n, arguments)
                }
                var r = this;
                return o._ = e, this.on(t, o, n)
            },
            emit: function(t) {
                var e = [].slice.call(arguments, 1),
                    n = ((this.e || (this.e = {}))[t] || []).slice(),
                    o = 0,
                    r = n.length;
                for (o; o < r; o++) n[o].fn.apply(n[o].ctx, e);
                return this
            },
            off: function(t, e) {
                var n = this.e || (this.e = {}),
                    o = n[t],
                    r = [];
                if (o && e)
                    for (var i = 0, a = o.length; i < a; i++) o[i].fn !== e && o[i].fn._ !== e && r.push(o[i]);
                return r.length ? n[t] = r : delete n[t], this
            }
        }, t.exports = n
    }, function(t, e, n) {
        var o, r, i;
        ! function(a, c) {
            r = [t, n(0), n(2), n(1)], o = c, void 0 !== (i = "function" == typeof o ? o.apply(e, r) : o) && (t.exports = i)
        }(0, function(t, e, n, o) {
            "use strict";

            function r(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function a(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function c(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            function u(t, e) {
                var n = "data-clipboard-" + t;
                if (e.hasAttribute(n)) return e.getAttribute(n)
            }
            var l = r(e),
                s = r(n),
                f = r(o),
                d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                },
                h = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var o = e[n];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                        }
                    }
                    return function(e, n, o) {
                        return n && t(e.prototype, n), o && t(e, o), e
                    }
                }(),
                p = function(t) {
                    function e(t, n) {
                        i(this, e);
                        var o = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                        return o.resolveOptions(n), o.listenClick(t), o
                    }
                    return c(e, t), h(e, [{
                        key: "resolveOptions",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.action = "function" == typeof t.action ? t.action : this.defaultAction, this.target = "function" == typeof t.target ? t.target : this.defaultTarget, this.text = "function" == typeof t.text ? t.text : this.defaultText, this.container = "object" === d(t.container) ? t.container : document.body
                        }
                    }, {
                        key: "listenClick",
                        value: function(t) {
                            var e = this;
                            this.listener = (0, f.default)(t, "click", function(t) {
                                return e.onClick(t)
                            })
                        }
                    }, {
                        key: "onClick",
                        value: function(t) {
                            var e = t.delegateTarget || t.currentTarget;
                            this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new l.default({
                                action: this.action(e),
                                target: this.target(e),
                                text: this.text(e),
                                container: this.container,
                                trigger: e,
                                emitter: this
                            })
                        }
                    }, {
                        key: "defaultAction",
                        value: function(t) {
                            return u("action", t)
                        }
                    }, {
                        key: "defaultTarget",
                        value: function(t) {
                            var e = u("target", t);
                            if (e) return document.querySelector(e)
                        }
                    }, {
                        key: "defaultText",
                        value: function(t) {
                            return u("text", t)
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null)
                        }
                    }], [{
                        key: "isSupported",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
                                e = "string" == typeof t ? [t] : t,
                                n = !!document.queryCommandSupported;
                            return e.forEach(function(t) {
                                n = n && !!document.queryCommandSupported(t)
                            }), n
                        }
                    }]), e
                }(s.default);
            t.exports = p
        })
    }, function(t, e) {
        function n(t, e) {
            for (; t && t.nodeType !== o;) {
                if ("function" == typeof t.matches && t.matches(e)) return t;
                t = t.parentNode
            }
        }
        var o = 9;
        if ("undefined" != typeof Element && !Element.prototype.matches) {
            var r = Element.prototype;
            r.matches = r.matchesSelector || r.mozMatchesSelector || r.msMatchesSelector || r.oMatchesSelector || r.webkitMatchesSelector
        }
        t.exports = n
    }, function(t, e, n) {
        function o(t, e, n, o, r) {
            var a = i.apply(this, arguments);
            return t.addEventListener(n, a, r), {
                destroy: function() {
                    t.removeEventListener(n, a, r)
                }
            }
        }

        function r(t, e, n, r, i) {
            return "function" == typeof t.addEventListener ? o.apply(null, arguments) : "function" == typeof n ? o.bind(null, document).apply(null, arguments) : ("string" == typeof t && (t = document.querySelectorAll(t)), Array.prototype.map.call(t, function(t) {
                return o(t, e, n, r, i)
            }))
        }

        function i(t, e, n, o) {
            return function(n) {
                n.delegateTarget = a(n.target, e), n.delegateTarget && o.call(t, n)
            }
        }
        var a = n(4);
        t.exports = r
    }, function(t, e) {
        e.node = function(t) {
            return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType
        }, e.nodeList = function(t) {
            var n = Object.prototype.toString.call(t);
            return void 0 !== t && ("[object NodeList]" === n || "[object HTMLCollection]" === n) && "length" in t && (0 === t.length || e.node(t[0]))
        }, e.string = function(t) {
            return "string" == typeof t || t instanceof String
        }, e.fn = function(t) {
            return "[object Function]" === Object.prototype.toString.call(t)
        }
    }, function(t, e) {
        function n(t) {
            var e;
            if ("SELECT" === t.nodeName) t.focus(), e = t.value;
            else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) {
                var n = t.hasAttribute("readonly");
                n || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), n || t.removeAttribute("readonly"), e = t.value
            } else {
                t.hasAttribute("contenteditable") && t.focus();
                var o = window.getSelection(),
                    r = document.createRange();
                r.selectNodeContents(t), o.removeAllRanges(), o.addRange(r), e = o.toString()
            }
            return e
        }
        t.exports = n
    }])
});


// help
var _0x3506 = ['data-description', 'https://vk.com/share.php?url=', '34047WZcJZw', 'then', 'share', 'https://friendsquiz.site', 'replace', 'https://truefalse.site', 'whatsapp_link', 'language', '287381pXjnSS', 'search', '#qq_link', 'whatsapp://send?text=', '122xtHNai', 'userLanguage', 'click', 'https://quiz2020.com', '=([^&]*)', '#url=', '#start', 'fb-messenger://share?link=', 'append', 'hidden', 'https://openit.site', 'exec', 'cookie', 'length', 'toUTCString', 'setTime', 'viber://forward?text=', '#viber_link', 'back_url', 'attr', 'https://friend20.com', '#name', '24998NHmFDF', 'createElement', '81308kBenVE', 'https://grandedesafio.com', 'expires=', 'http://connect.qq.com/widget/shareqq/index.html?url=', 'Error\x20sharing', 'https://touch-msg.com', 'location', 'script', 'removeClass', 'data-media', 'charAt', 'log', 'head', 'href', '.addthis_share', '#line_link', '5DjUdBy', '1272758ZMyHJn', 'keypress', '<script\x20type=\x22text/javascript\x22>var\x20addthis_config\x20=\x20addthis_config\x20||\x20{};addthis_config.data_track_clickback\x20=\x20false;</', 'https://newyeartest.com', 'https://friendshipmeter.site', 'https://buddy20.com', '&title=', 'https://dare2020.site', '.zalo-share-button', 'value', 'substring', '&comment=', 'script>', 'data-url', '[?&]', 'catch', 'http://testd20.com', 'https://dare20.com', '2164caImIi', '#wechat_link', 'substr', '#allshare_link', 'pushState', '#start_create', 'https://testyourbond.site', 'addClass', 'navigator', 'https://friendshiptrivia.com', '#messenger_link', '#vk_link', 'https://dare2021.com', 'src', 'Successful\x20share', '704452FPZvBR', '.addthis_block', 'https://buka.site', 'getTime', 'data-title', 'getElementById', 'https://yesno.site', 'https://wowdare.com__', 'bind', 'https://superdare.site', 'https://vejo.site', 'https://bfmate.com', '3oFmNTz', 'data-href', 'http://v.t.sina.com.cn/share/share.php?url=', 'https://sehen.site', '/images/bond.png?v=1'];
(function(_0x4c8a82, _0x5b1bf4) {
    var _0xe25f1e = _0x9ba5;
    while (!![]) {
        try {
            var _0x598e42 = parseInt(_0xe25f1e(0x221)) + parseInt(_0xe25f1e(0x1ff)) * parseInt(_0xe25f1e(0x1f8)) + parseInt(_0xe25f1e(0x223)) * parseInt(_0xe25f1e(0x233)) + parseInt(_0xe25f1e(0x246)) * -parseInt(_0xe25f1e(0x20b)) + -parseInt(_0xe25f1e(0x1ec)) + -parseInt(_0xe25f1e(0x207)) + parseInt(_0xe25f1e(0x234));
            if (_0x598e42 === _0x5b1bf4) break;
            else _0x4c8a82['push'](_0x4c8a82['shift']());
        } catch (_0x133b5f) {
            _0x4c8a82['push'](_0x4c8a82['shift']());
        }
    }
}(_0x3506, 0x866c4));

function get(_0x53a0a0) {
    var _0x3b4325 = _0x9ba5;
    if (_0x53a0a0 = new RegExp(_0x3b4325(0x242) + encodeURIComponent(_0x53a0a0) + _0x3b4325(0x20f))[_0x3b4325(0x216)](location[_0x3b4325(0x208)])) return decodeURIComponent(_0x53a0a0[0x1]);
}

function setCookie(_0x54fb67, _0x5c1804, _0x1ebef2) {
    var _0x2190e5 = _0x9ba5,
        _0x52f5d5 = new Date();
    _0x1ebef2 == undefined && (_0x1ebef2 = 0xb4);
    _0x52f5d5[_0x2190e5(0x21a)](_0x52f5d5[_0x2190e5(0x1ef)]() + _0x1ebef2 * 0x18 * 0x3c * 0x3c * 0x3e8);
    var _0x2e7c7b = _0x2190e5(0x225) + _0x52f5d5[_0x2190e5(0x219)]();
    document[_0x2190e5(0x217)] = _0x54fb67 + '=' + encodeURIComponent(_0x5c1804) + ';' + _0x2e7c7b + ';path=/';
}

function getCookie(_0x3436be) {
    var _0x365cda = _0x9ba5,
        _0x4a065a = _0x3436be + '=',
        _0x1a700d = document[_0x365cda(0x217)],
        _0x1ab0b1 = _0x1a700d['split'](';');
    for (var _0x5af290 = 0x0; _0x5af290 < _0x1ab0b1['length']; _0x5af290++) {
        var _0x33fb17 = _0x1ab0b1[_0x5af290];
        while (_0x33fb17[_0x365cda(0x22d)](0x0) == '\x20') {
            _0x33fb17 = _0x33fb17[_0x365cda(0x23e)](0x1);
        }
        if (_0x33fb17['indexOf'](_0x4a065a) == 0x0) return decodeURIComponent(_0x33fb17[_0x365cda(0x23e)](_0x4a065a['length'], _0x33fb17[_0x365cda(0x218)]));
    }
    return '';
}

function allShare(_0x169e3f, _0x20d76a, _0x2d86c6, _0x1b19db, _0x2675d9, _0x1ddca3) {
    var _0x1ef115 = _0x9ba5;
    navigator[_0x1ef115(0x201)] ? navigator[_0x1ef115(0x201)]({
        'title': _0x20d76a,
        'text': _0x1b19db,
        'url': _0x1ddca3
    })[_0x1ef115(0x200)](() => console['log'](_0x1ef115(0x1eb)))[_0x1ef115(0x243)](_0x48db79 => console[_0x1ef115(0x22e)](_0x1ef115(0x227), _0x48db79)) : console[_0x1ef115(0x22e)]('not\x20supported');
}

function allShareCode(_0x32e47e, _0x2677d9, _0x499c82, _0x2869c3, _0x4a8ed8, _0x545c8c) {
    var _0xefc092 = _0x9ba5;
    navigator[_0xefc092(0x201)] && $(_0xefc092(0x249))[_0xefc092(0x22b)](_0xefc092(0x214)), $(_0xefc092(0x249))[_0xefc092(0x20d)](function() {
        allShare(_0x32e47e, _0x2677d9, _0x499c82, _0x2869c3, _0x4a8ed8, _0x545c8c);
    });
}

function _0x9ba5(_0x4d32db, _0x4ffb2b) {
    return _0x9ba5 = function(_0x35064a, _0x9ba562) {
        _0x35064a = _0x35064a - 0x1e7;
        var _0xdad5f7 = _0x3506[_0x35064a];
        return _0xdad5f7;
    }, _0x9ba5(_0x4d32db, _0x4ffb2b);
}

function setShareLinks(_0x3e8100, _0x3f907a, _0x3c9e5f, _0xcef2e4, _0x3b34db, _0x8ec8a1) {
    var _0x142468 = _0x9ba5;
    if (['https://friendshipbond.com', _0x142468(0x238), _0x142468(0x24f), 'https://friend2021.com', _0x142468(0x20e), _0x142468(0x1f7), _0x142468(0x224), _0x142468(0x204), _0x142468(0x245), 'https://bigdare.site', _0x142468(0x215), _0x142468(0x24c), _0x142468(0x1f6), _0x142468(0x1ee), 'https://bestbuddymeter.com', _0x142468(0x202), _0x142468(0x228), _0x142468(0x23b), _0x142468(0x1e9), _0x142468(0x1fb), _0x142468(0x1f2), _0x142468(0x1f6), _0x142468(0x1f5), _0x142468(0x244), _0x142468(0x237), _0x142468(0x239), _0x142468(0x1f3), _0x142468(0x21f), 'https://dareforyou.site']['indexOf'](_0x3e8100) >= 0x0) {}
    var _0xcef2e4 = _0xcef2e4[_0x142468(0x203)](/nameeee/g, _0x3b34db),
        _0x3c9e5f = _0x3c9e5f[_0x142468(0x203)](/nameeee/g, _0x3b34db),
        _0x3f907a = _0x3f907a['replace'](/nameeee/g, _0x3b34db),
        _0x106ee3 = document[_0x142468(0x1f1)](_0x142468(0x205));
    _0x106ee3 != null && (_0x106ee3['href'] = _0x142468(0x20a) + _0x3c9e5f + '\x20' + _0x8ec8a1);
    $(_0x142468(0x23c))[_0x142468(0x21e)](_0x142468(0x1f9), _0x8ec8a1);
    var _0x2c809a = 'https://line.me/R/msg/text/?' + _0xcef2e4 + '\x20' + _0x8ec8a1;
    $(_0x142468(0x232))[_0x142468(0x21e)](_0x142468(0x230), _0x2c809a);
    var _0x3cfe23 = _0x8ec8a1,
        _0x2cf4aa = _0x142468(0x212) + _0x3cfe23;
    $(_0x142468(0x1e7))[_0x142468(0x21e)]('href', _0x2cf4aa);
    var _0x4ddbab = _0x142468(0x1fe) + _0x8ec8a1 + _0x142468(0x23a) + _0x3f907a + _0x142468(0x23f) + _0xcef2e4;
    $(_0x142468(0x1e8))[_0x142468(0x21e)](_0x142468(0x230), _0x4ddbab);
    var _0x55936f = _0x142468(0x21b) + _0xcef2e4 + '\x20' + _0x8ec8a1;
    $(_0x142468(0x21c))[_0x142468(0x21e)](_0x142468(0x230), _0x55936f);
    var _0x197477 = _0x142468(0x226) + _0x8ec8a1 + _0x142468(0x23a) + _0xcef2e4;
    $(_0x142468(0x209))[_0x142468(0x21e)](_0x142468(0x230), _0x197477);
    var _0x270931 = _0x142468(0x1fa) + _0x8ec8a1 + _0x142468(0x23a) + _0xcef2e4;
    $('#weibo_link')[_0x142468(0x21e)](_0x142468(0x230), _0x270931);
    var _0x3f82e2 = _0x3e8100 + '/wechat-share' + _0x142468(0x210) + _0x8ec8a1 + _0x142468(0x23a) + _0xcef2e4;
    $(_0x142468(0x247))['attr'](_0x142468(0x230), _0x3f82e2), allShareCode(_0x3e8100, _0x3f907a, _0x3c9e5f, _0xcef2e4, _0x3b34db, _0x8ec8a1);
    if (locale != 'cn') {
        $('.addthis_share')['attr'](_0x142468(0x241), _0x8ec8a1), $(_0x142468(0x231))[_0x142468(0x21e)](_0x142468(0x1f0), _0xcef2e4), $(_0x142468(0x231))[_0x142468(0x21e)](_0x142468(0x1fd), _0xcef2e4), $(_0x142468(0x231))[_0x142468(0x21e)](_0x142468(0x22c), _0x3e8100 + _0x142468(0x1fc));
        var _0x14998d = document[_0x142468(0x222)](_0x142468(0x22a));
        _0x14998d['type'] = 'text/javascript', _0x14998d[_0x142468(0x1ea)] = '//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5854f190a71438e5', $(_0x142468(0x22f))['append'](_0x14998d);
        var _0x396415 = $(_0x142468(0x236) + _0x142468(0x240));
        $(_0x142468(0x22f))[_0x142468(0x213)](_0x396415[0x0]), $(_0x142468(0x1ed))[_0x142468(0x22b)]('hidden');
    }
}
$(document)['ready'](function() {
    var _0x5a4cb3 = _0x9ba5,
        _0x3258a5 = get(_0x5a4cb3(0x21d));
    _0x3258a5 !== undefined && (history[_0x5a4cb3(0x24a)]({}, '', '#'), onpopstate = function() {
        var _0x427baa = _0x5a4cb3;
        window[_0x427baa(0x229)][_0x427baa(0x230)] = _0x3258a5;
    });
    $(_0x5a4cb3(0x220))[_0x5a4cb3(0x1f4)](_0x5a4cb3(0x235), function(_0x8e8084) {
        var _0x5f51be = _0x5a4cb3;
        _0x8e8084['which'] === 0xd && (_0x8e8084['preventDefault'](), $(_0x5f51be(0x24b))[_0x5f51be(0x20d)](), $(_0x5f51be(0x211))[_0x5f51be(0x20d)]());
    });
    if ($('#language')[_0x5a4cb3(0x218)]) {
        if (getCookie(_0x5a4cb3(0x206)) != '') {
            var _0x449e2c = getCookie(_0x5a4cb3(0x206));
            document[_0x5a4cb3(0x1f1)]('language')[_0x5a4cb3(0x23d)] = _0x449e2c;
            var _0x1607e6 = window[_0x5a4cb3(0x24e)][_0x5a4cb3(0x20c)] || window[_0x5a4cb3(0x24e)][_0x5a4cb3(0x206)];
            _0x1607e6 = _0x1607e6[_0x5a4cb3(0x248)](0x0, 0x2), _0x1607e6 == _0x449e2c && $('#language')['parent']()[_0x5a4cb3(0x24d)](_0x5a4cb3(0x214));
        }
    }
});