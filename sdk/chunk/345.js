(self.webpackChunk_cleverpush_cleverpush_js_sdk = self.webpackChunk_cleverpush_cleverpush_js_sdk || []).push([
    [345], {
        8397: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => a
            });
            var i, r = t(9713),
                o = t.n(r);
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
                    "chat.enterMessage": "Please enter message…",
                    "alert.unsupported": "Unfortunately, your browser does not support notifications.",
                    "voucherpool.title": "Your voucher code",
                    "voucherpool.text": "Click here to copy your code",
                    "story.overlay.text": "Open story"
                },
                de: {
                    "confirm.title": "{0} würde dir gerne Push Nachrichten senden.",
                    "confirm.nativeTitle": "{0} möchte Ihnen Benachrichtigungen senden",
                    "confirm.info": "Benachrichtigungen können jederzeit in den Browser Einstellungen deaktiviert werden.",
                    "confirm.allow": "Erlauben",
                    "confirm.allowChrome": "Zulassen",
                    "confirm.allowFirefox": "Benachrichtigungen erlauben",
                    "confirm.allowEdge": "Ja",
                    "confirm.deny": "Verbieten",
                    "confirm.selectTopics": "Welche Themen interessieren Dich?",
                    "confirm.doubleText": "Bitte bestätige 2x mit {0} um fortzufahren",
                    "confirm.alreadySubscribed": "Du hast dich bereits für alle Themen angemeldet.",
                    "confirm.silentPromptInfo": 'Bitte klicke auf die kleine Glocke und dann auf "Erlauben" um fortzufahren.',
                    "popup.info": "Klicke auf {0}, um unsere Push-Benachrichtigungen zu bestätigen",
                    "popup.text": "Erhalte Updates und Angebote von {0}, indem du Push-Benachrichtigungen abonnierst.",
                    "unsubscribe.title": "Von Benachrichtigungen abmelden",
                    "unsubscribe.confirm": "Bist du dir sicher?",
                    "unsubscribe.yes": "Ja",
                    "unsubscribe.no": "Nein",
                    "unsubscribe.feedback": "Bitte wähle den Abmelde-Grund aus um deine Abmeldung zu bestätigen:",
                    "unsubscribe.enterReason": "Bitte gib den Grund ein:",
                    "unsubscribe.submit": "Absenden",
                    "unsubscribe.reasonQuantity": "Zu viele Nachrichten",
                    "unsubscribe.reasonContent": "Uninteressante Nachrichten",
                    "unsubscribe.reasonOther": "Anderer Grund",
                    "windowclose.confirm": "Der Vorgang ist noch nicht abgeschlossen, bist du sicher, dass du ihn abbrechen möchtest?",
                    "deny.alertHttps": 'Wenn du doch Benachrichtigungen empfangen möchtest, kannst du mit einem Klick auf das Schloss die Einstellung "Benachrichtigungen" auf "Erlauben" setzen.',
                    "deny.alertHttp": 'Wenn du doch Benachrichtigungen empfangen möchtest, kannst du mit einem Klick auf das Info-Symbol die Einstellung "Benachrichtigungen" auf "Erlauben" setzen.',
                    "bell.subscribe": "Für Benachrichtigungen anmelden",
                    "bell.subscribed": "Du bist für Benachrichtigungen angemeldet",
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
                    "chat.emailError": "Bitte gib eine gültige E-Mail Adresse ein.",
                    "chat.start": "Chat starten",
                    "chat.enable": "Chat jetzt aktivieren",
                    "chat.enterMessage": "Bitte Nachricht eingeben…",
                    "alert.unsupported": "Dein Browser unterstützt leider keine Benachrichtigungen.",
                    "story.overlay.text": "Story öffnen"
                },
                "de-formal": (i = {
                    "confirm.title": "{0} würde Ihnen gerne Push Nachrichten senden.",
                    "confirm.nativeTitle": "{0} möchte Ihnen Benachrichtigungen senden",
                    "confirm.info": "Benachrichtigungen können jederzeit in den Browser Einstellungen deaktiviert werden.",
                    "confirm.allow": "Erlauben",
                    "confirm.allowChrome": "Zulassen",
                    "confirm.allowFirefox": "Benachrichtigungen erlauben",
                    "confirm.allowEdge": "Ja",
                    "confirm.deny": "Verbieten",
                    "confirm.selectTopics": "Welche Themen interessieren Sie?"
                }, o()(i, "confirm.selectTopics", "Zu welchen Themen möchten Sie Push Nachrichten erhalten?"), o()(i, "confirm.doubleText", "Bitte bestätigen Sie 2x mit {0} um fortzufahren"), o()(i, "confirm.alreadySubscribed", "Sie haben sich bereits für alle Themen angemeldet."), o()(i, "confirm.silentPromptInfo", 'Bitte klicken Sie auf die kleine Glocke und dann auf "Erlauben" um fortzufahren.'), o()(i, "popup.info", "Klicken Sie auf {0}, um unsere Push-Benachrichtigungen zu bestätigen"), o()(i, "popup.text", "Erhalten Sie Updates und Angebote von {0}, indem Sie Push-Benachrichtigungen abonnieren."), o()(i, "unsubscribe.title", "Von Benachrichtigungen abmelden"), o()(i, "unsubscribe.confirm", "Sind Sie sich sicher?"), o()(i, "unsubscribe.yes", "Ja"), o()(i, "unsubscribe.no", "Nein"), o()(i, "unsubscribe.feedback", "Bitte wählen Sie den Abmelde-Grund aus um Ihre Abmeldung zu bestätigen:"), o()(i, "unsubscribe.enterReason", "Bitte geben Sie den Grund ein:"), o()(i, "unsubscribe.submit", "Absenden"), o()(i, "unsubscribe.reasonQuantity", "Zu viele Nachrichten"), o()(i, "unsubscribe.reasonContent", "Uninteressante Nachrichten"), o()(i, "unsubscribe.reasonOther", "Anderer Grund"), o()(i, "windowclose.confirm", "Der Vorgang ist noch nicht abgeschlossen, sind Sie sich sicher, dass Sie ihn abbrechen möchten?"), o()(i, "deny.alertHttps", 'Wenn Sie doch Benachrichtigungen empfangen möchten, können Sie mit einem Klick auf das Schloss die Einstellung "Benachrichtigungen" auf "Erlauben" setzen.'), o()(i, "deny.alertHttp", 'Wenn Sie doch Benachrichtigungen empfangen möchten, können Sie mit einem Klick auf das Info-Symbol die Einstellung "Benachrichtigungen" auf "Erlauben" setzen.'), o()(i, "bell.subscribe", "Für Benachrichtigungen anmelden"), o()(i, "bell.subscribed", "Sie sind für Benachrichtigungen angemeldet"), o()(i, "bell.unsubscribeSuccess", "Sie werden keine Benachrichtigungen mehr erhalten"), o()(i, "panel.notifications", "Benachrichtigungen"), o()(i, "panel.editTopics", "Themenbereiche bearbeiten"), o()(i, "panel.settings", "Einstellungen"), o()(i, "panel.notificationsEmpty", "Keine Benachrichtigungen vorhanden."), o()(i, "panel.save", "Speichern"), o()(i, "panel.close", "Schlie&szlig;en"), o()(i, "panel.successfullySaved", "Erfolgreich gespeichert!"), o()(i, "unblock.title", "Sie haben Benachrichtigungen blockiert.<br />Bitte folgen Sie diesen Schritten um Benachrichtigungen zu empfangen"), o()(i, "privacy", "Datenschutz"), o()(i, "chat.emailAddress", "E-Mail Adresse"), o()(i, "chat.name", "Ihr Name"), o()(i, "chat.emailError", "Bitte geben Sie eine gültige E-Mail Adresse ein."), o()(i, "chat.start", "Chat starten"), o()(i, "chat.enable", "Chat jetzt aktivieren"), o()(i, "chat.enterMessage", "Bitte Nachricht eingeben…"), o()(i, "alert.unsupported", "Ihr Browser unterstützt leider keine Benachrichtigungen."), o()(i, "voucherpool.title", "Dein Gutscheincode"), o()(i, "voucherpool.text", "Klicke hier um deinen Code zu kopieren"), o()(i, "story.overlay.text", "Story öffnen"), i)
            }
        },
        8606: (e, n, t) => {
            "use strict";
            t.d(n, {
                Z: () => h
            });
            var i = t(4575),
                r = t.n(i),
                o = t(8585),
                a = t.n(o),
                c = t(9754),
                s = t.n(c),
                u = t(2205),
                l = t.n(u),
                h = function(e) {
                    function n() {
                        return r()(this, n), a()(this, s()(n).apply(this, arguments))
                    }
                    return l()(n, e), n
                }(t(4740).Z)
        },
        3251: (e, n, t) => {
            "use strict";
            t.d(n, {
                ZP: () => m
            });
            var i = "message",
                r = {
                    "http:": "80",
                    "https:": "443"
                },
                o = /^(https?:|file:)?\/\/([^/:]+)?(:(\d+))?/,
                a = {
                    ERR_CONNECTION_DESTROYED: "ConnectionDestroyed",
                    ERR_CONNECTION_TIMEOUT: "ConnectionTimeout",
                    ERR_NOT_IN_IFRAME: "NotInIframe",
                    ERR_IFRAME_ALREADY_ATTACHED_TO_DOM: "IframeAlreadyAttachedToDom",
                    Promise: function() {
                        try {
                            return window ? window.Promise : null
                        } catch (e) {
                            return null
                        }
                    }(),
                    debug: !1
                },
                c = function() {
                    var e = 0;
                    return function() {
                        return ++e
                    }
                }(),
                s = function() {
                    if (a.debug) {
                        for (var e, n = arguments.length, t = new Array(n), i = 0; i < n; i++) t[i] = arguments[i];
                        (e = console).log.apply(e, ["[CleverPush][Penpal]"].concat(t))
                    }
                },
                u = function(e) {
                    var n = [];
                    return e((function() {
                        n.forEach((function(e) {
                            e()
                        }))
                    })), {
                        then: function(e) {
                            n.push(e)
                        }
                    }
                },
                l = function(e) {
                    return {
                        name: e.name,
                        message: e.message,
                        stack: e.stack
                    }
                },
                h = function(e) {
                    var n = new Error;
                    return Object.keys(e).forEach((function(t) {
                        return n[t] = e[t]
                    })), n
                },
                d = function(e, n, t, r, o) {
                    var u = n.localName,
                        l = n.local,
                        d = n.remote,
                        f = n.remoteOrigin,
                        m = !1;
                    s("".concat(u, ": Connecting call sender"));
                    o.then((function() {
                        m = !0
                    })), t.reduce((function(e, n) {
                        return e[n] = function(e) {
                            return function() {
                                for (var n = arguments.length, t = new Array(n), o = 0; o < n; o++) t[o] = arguments[o];
                                if (s("".concat(u, ": Sending ").concat(e, "() call")), d.closed && r(), m) {
                                    var b = new Error("Unable to send ".concat(e, "() call due ") + "to destroyed connection");
                                    throw b.code = "ConnectionDestroyed", b
                                }
                                return new a.Promise((function(n, r) {
                                    var o = c();
                                    l.addEventListener(i, (function t(a) {
                                        if (a.source === d && a.origin === f && "reply" === a.data.penpal && a.data.id === o) {
                                            s("".concat(u, ": Received ").concat(e, "() reply")), l.removeEventListener(i, t);
                                            var c = a.data.returnValue;
                                            a.data.returnValueIsError && (c = h(c)), ("fulfilled" === a.data.resolution ? n : r)(c)
                                        }
                                    })), d.postMessage({
                                        penpal: "call",
                                        id: o,
                                        methodName: e,
                                        args: t
                                    }, f)
                                }))
                            }
                        }(n), e
                    }), e)
                },
                f = function(e, n, t) {
                    var r = e.localName,
                        o = e.local,
                        c = e.remote,
                        u = e.remoteOrigin,
                        h = !1;
                    s("".concat(r, ": Connecting call receiver"));
                    var d = function(e) {
                        if (e.source === c && e.origin === u && "call" === e.data.penpal) {
                            var t = e.data,
                                i = t.methodName,
                                o = t.args,
                                d = t.id;
                            if (s("".concat(r, ": Received ").concat(i, "() call")), i in n) {
                                var f = function(e) {
                                    return function(n) {
                                        if (s("".concat(r, ": Sending ").concat(i, "() reply")), h) s("".concat(r, ": Unable to send ").concat(i, "() reply due to destroyed connection"));
                                        else {
                                            var t = {
                                                penpal: "reply",
                                                id: d,
                                                resolution: e,
                                                returnValue: n
                                            };
                                            "rejected" === e && n instanceof Error && (t.returnValue = l(n), t.returnValueIsError = !0);
                                            try {
                                                c.postMessage(t, u)
                                            } catch (e) {
                                                throw "DataCloneError" === e.name && c.postMessage({
                                                    penpal: "reply",
                                                    id: d,
                                                    resolution: "rejected",
                                                    returnValue: l(e),
                                                    returnValueIsError: !0
                                                }, u), e
                                            }
                                        }
                                    }
                                };
                                new a.Promise((function(e) {
                                    return e(n[i].apply(n, o))
                                })).then(f("fulfilled"), f("rejected"))
                            }
                        }
                    };
                    o.addEventListener(i, d), t.then((function() {
                        h = !0, o.removeEventListener(i, d)
                    }))
                };
            a.connectToChild = function(e) {
                var n, t = e.url,
                    c = e.appendTo,
                    l = e.iframe,
                    h = e.methods,
                    m = void 0 === h ? {} : h,
                    b = e.timeout,
                    g = e.childWindow;
                if (l && l.parentNode) {
                    var p = new Error("connectToChild() must not be called with an iframe already attached to DOM");
                    throw p.code = "IframeAlreadyAttachedToDom", p
                }
                var v = new u((function(e) {
                        n = e
                    })),
                    y = window;
                g || ((l = l || document.createElement("iframe")).src = t);
                var w = function(e) {
                    var n, t, i, a = document.location,
                        c = o.exec(e);
                    if (c ? (n = c[1] ? c[1] : a.protocol, t = c[2], i = c[4]) : (n = a.protocol, t = a.hostname, i = a.port), "file:" === n) return "null";
                    var s = i && i !== r[n] ? ":".concat(i) : "";
                    return "".concat(n, "//").concat(t).concat(s)
                }(t);
                return {
                    promise: new a.Promise((function(e, t) {
                        var r;
                        void 0 !== b && (r = setTimeout((function() {
                            var e = new Error("Connection to child timed out after ".concat(b, "ms"));
                            e.code = "ConnectionTimeout", t(e), n()
                        }), b));
                        var o, a, h = {},
                            p = function(t) {
                                var i = g || l.contentWindow;
                                if (t.source === i && t.origin === w && "handshake" === t.data.penpal) {
                                    s("Parent: Received handshake, sending reply");
                                    var c = "null" === t.origin ? "*" : t.origin;
                                    t.source.postMessage({
                                        penpal: "handshake-reply",
                                        methodNames: Object.keys(m)
                                    }, c);
                                    var b = {
                                        localName: "Parent",
                                        local: y,
                                        remote: i,
                                        remoteOrigin: c
                                    };
                                    a && a();
                                    var p = new u((function(e) {
                                        v.then(e), a = e
                                    }));
                                    f(b, m, p), o && o.forEach((function(e) {
                                        delete h[e]
                                    })), o = t.data.methodNames, d(h, b, o, n, v), clearTimeout(r), e(h)
                                }
                            };
                        if (y.addEventListener(i, p), !g) {
                            s("Parent: Loading iframe"), (c || document.body).appendChild(l);
                            var E = setInterval((function() {
                                document.body.contains(l) || (clearInterval(E), n())
                            }), 6e4);
                            v.then((function() {
                                l.parentNode && l.parentNode.removeChild(l), y.removeEventListener(i, p), clearInterval(E);
                                var e = new Error("Connection destroyed");
                                e.code = "ConnectionDestroyed", t(e)
                            }))
                        }
                    })),
                    iframe: l,
                    destroy: n
                }
            }, a.connectToParent = function() {
                var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = n.parentOrigin,
                    r = void 0 === t ? "*" : t,
                    o = n.methods,
                    c = void 0 === o ? {} : o,
                    l = n.timeout,
                    h = n.parentWindow;
                if (window === window.top && !window.opener) {
                    var m = new Error("connectToParent() must be called within an iframe");
                    throw m.code = "NotInIframe", m
                }
                var b = new u((function(n) {
                        e = n
                    })),
                    g = window,
                    p = h || g.parent,
                    v = new a.Promise((function(n, t) {
                        var o;
                        void 0 !== l && (o = setTimeout((function() {
                            var n = new Error("Connection to parent timed out after ".concat(l, "ms"));
                            n.code = "ConnectionTimeout", t(n), e()
                        }), l));
                        var a = function t(a) {
                            if (("*" === r || r === a.origin) && a.source === p && "handshake-reply" === a.data.penpal) {
                                s("Child: Received handshake reply"), g.removeEventListener(i, t);
                                var u = {
                                        localName: "Child",
                                        local: g,
                                        remote: p,
                                        remoteOrigin: a.origin
                                    },
                                    l = {};
                                f(u, c, b), d(l, u, a.data.methodNames, e, b), clearTimeout(o), n(l)
                            }
                        };
                        g.addEventListener(i, a), b.then((function() {
                            g.removeEventListener(i, a);
                            var e = new Error("Connection destroyed");
                            e.code = "ConnectionDestroyed", t(e)
                        })), s("Child: Sending handshake"), p.postMessage({
                            penpal: "handshake",
                            methodNames: Object.keys(c)
                        }, r)
                    }));
                return {
                    promise: v,
                    destroy: e
                }
            };
            const m = a
        },
        3114: (e, n, t) => {
            "use strict";
            t.d(n, {
                I: () => a,
                R: () => c
            });
            var i = t(2238),
                r = t.n(i),
                o = t(8397);
            t(1078);

            function a(e) {
                var n = (window.CleverPush || {
                    config: {}
                }).config.language || navigator.language || navigator.userLanguage || "en";
                n = "de-formal" !== n ? n.substr(0, 2).toLowerCase() : n, o.Z.hasOwnProperty(n) || (n = "en");
                var t, i = e;
                if ("confirm.allowBrowser" === i) {
                    i = "confirm.allow";
                    var a = new(r());
                    "Chrome" === a.getBrowser().name ? i = "confirm.allowChrome" : "Firefox" === a.getBrowser().name ? i = "confirm.allowFirefox" : "Edge" === a.getBrowser().name && (i = "confirm.allowEdge")
                } else "deny.alert" === i && (i = "https:" === location.protocol ? "deny.alertHttps" : "deny.alertHttp");
                if (o.Z[n].hasOwnProperty(i) ? t = o.Z[n][i] : o.Z.en.hasOwnProperty(i) && (t = o.Z.en[i]), t) {
                    var c = (document.characterSet || "").toLowerCase();
                    if (c.indexOf("windows-1252") > -1 || c.indexOf("iso-8859") > -1) try {
                        return decodeURIComponent(escape(t))
                    } catch (e) {}
                    return t
                }
                return i
            }

            function c(e) {
                var n = e,
                    t = (document.characterSet || "").toLowerCase();
                if (t.indexOf("windows-1252") > -1 || t.indexOf("iso-8859") > -1) try {
                    n = decodeURIComponent(escape(e))
                } catch (e) {}
                return n
            }
            String.prototype.formatCleverPush = function() {
                var e = this;
                for (var n in arguments) arguments.hasOwnProperty(n) && "function" == typeof e.replace && (e = e.replace("{".concat(n, "}"), arguments[n]));
                return e
            }
        }
    }
]);
//# sourceMappingURL=345.js.map