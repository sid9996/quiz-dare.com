(function(_) {
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var aa, ca, ba, ea, fa, ha, la, na, pa, sa, ma, ra, ta, va, wa, ya, za, Ba, Ea, Ga, Ia, Fa, La, Ma, Oa, Qa, Ra, Ta, Va, Xa, Ya, $a, ab, bb, eb, fb, ib, kb, qb, rb, tb, ub, wb, Gb, Hb, Ib, Lb, Mb, Nb, Ob, Qb, Pb, Tb, Vb, Ub, ic, w, nc, kc, rc, sc, tc, vc, xc, zc, Ac, Pc, Sc, bd, jd, md, od, td, vd, yd, Cd, Fd, Hd, Id, Jd, Nd, Pd, Rd, Xd, Zd, fe, ke, le, oe, qe, se, te, ve, we, ye, ze, Ae, Ce, De, Ee, Ge, He, Je, Le, Ne, Pe, Me, Ve, Ze, df, jf, Ye, Bf, Cf, Gf, Hf, Jf, Mf, Nf, Of, Pf, Qf, Rf, Tf, Yf, $f, bg, cg, dg, eg, gg, fg, lg, mg, pg, rg, sg, xg, Ag, Cg, Eg, Jg, Kg, Lg, Ng, Og, Pg, Qg, Wg, ah, dh, gh, jh, lh, ph, th, vh, yh, Ch, Dh, Nh, J, Oh, Ph, Qh, Rh, Sh, D, Th, Uh, Vh, Wh, Vf, Xh, Yh, Zh, ci, di, ei, ti, ui, qa, ka, vi, wi, xi, yi, Ff;
    ca = function(a, b) {
        b = ba(a, b);
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    };
    ba = function(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return e;
        return -1
    };
    ea = function(a, b) {
        b = _.da(a, b);
        var c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    };
    fa = function(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };
    ha = function(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    };
    la = function(a) {
        for (var b = 0, c = 0, d = {}; c < a.length;) {
            var e = a[c++],
                f = _.ia(e) ? "o" + ka(e) : (typeof e).charAt(0) + e;
            Object.prototype.hasOwnProperty.call(d, f) || (d[f] = !0, a[b++] = e)
        }
        a.length = b
    };
    na = function(a, b) {
        a.sort(b || ma)
    };
    pa = function(a) {
        for (var b = oa, c = Array(a.length), d = 0; d < a.length; d++) c[d] = {
            index: d,
            value: a[d]
        };
        var e = b || ma;
        na(c, function(f, g) {
            return e(f.value, g.value) || f.index - g.index
        });
        for (b = 0; b < a.length; b++) a[b] = c[b].value
    };
    sa = function(a, b) {
        if (!qa(a) || !qa(b) || a.length != b.length) return !1;
        for (var c = a.length, d = ra, e = 0; e < c; e++)
            if (!d(a[e], b[e])) return !1;
        return !0
    };
    ma = function(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    };
    ra = function(a, b) {
        return a === b
    };
    ta = function(a, b) {
        for (var c = {}, d = 0; d < a.length; d++) {
            var e = a[d],
                f = b.call(void 0, e, d, a);
            void 0 !== f && (c[f] || (c[f] = [])).push(e)
        }
        return c
    };
    va = function(a) {
        for (var b = [], c = 0; c < arguments.length; c++) {
            var d = arguments[c];
            if (Array.isArray(d))
                for (var e = 0; e < d.length; e += 8192)
                    for (var f = va.apply(null, ha(d, e, e + 8192)), g = 0; g < f.length; g++) b.push(f[g]);
            else b.push(d)
        }
        return b
    };
    wa = function(a, b) {
        for (var c in a) b.call(void 0, a[c], c, a)
    };
    ya = function(a, b) {
        return null !== a && b in a
    };
    za = function(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a)) return c
    };
    Ba = function(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < Aa.length; f++) c = Aa[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    Ea = function(a) {
        var b = 0 > a;
        a = Math.abs(a);
        var c = a >>> 0;
        a = Math.floor((a - c) / 4294967296);
        a >>>= 0;
        b && (a = ~a >>> 0, c = (~c >>> 0) + 1, 4294967295 < c && (c = 0, a++, 4294967295 < a && (a = 0)));
        Ca = c;
        Da = a
    };
    Ga = function(a) {
        return Fa(a, function(b) {
            return b
        }, function(b) {
            return new Uint8Array(b)
        })
    };
    Ia = function(a, b, c) {
        return "object" === typeof a ? Ha && !Array.isArray(a) && a instanceof Uint8Array ? c(a) : Fa(a, b, c) : b(a)
    };
    Fa = function(a, b, c) {
        if (Array.isArray(a)) {
            for (var d = Array(a.length), e = 0; e < a.length; e++) {
                var f = a[e];
                null != f && (d[e] = Ia(f, b, c))
            }
            Array.isArray(a) && a.Bd && Ja(d);
            return d
        }
        d = {};
        for (e in a) Object.prototype.hasOwnProperty.call(a, e) && (f = a[e], null != f && (d[e] = Ia(f, b, c)));
        return d
    };
    La = function(a) {
        return Fa(a, function(b) {
            return "number" === typeof b ? isNaN(b) || Infinity === b || -Infinity === b ? String(b) : b : b
        }, function(b) {
            return Ka(b)
        })
    };
    Ma = function(a) {
        return null == a || "string" === typeof a ? a : Ha && a instanceof Uint8Array ? Ka(a) : null
    };
    Oa = function(a, b) {
        Na = b;
        a = new a(b);
        Na = null;
        return a
    };
    Qa = function(a) {
        if (a !== _.Pa) throw Error("Bad secret");
    };
    Ra = function() {
        var a = "undefined" !== typeof window ? window.trustedTypes : void 0;
        return null !== a && void 0 !== a ? a : null
    };
    Ta = function() {
        var a, b;
        void 0 === Sa && (Sa = null !== (b = null === (a = Ra()) || void 0 === a ? void 0 : a.createPolicy("google#safe", {
            createHTML: function(c) {
                return c
            },
            createScript: function(c) {
                return c
            },
            createScriptURL: function(c) {
                return c
            }
        })) && void 0 !== b ? b : null);
        return Sa
    };
    Va = function(a) {
        var b, c = null === (b = Ta()) || void 0 === b ? void 0 : b.createHTML(a);
        return new Ua(null !== c && void 0 !== c ? c : a, _.Pa)
    };
    Xa = function(a) {
        var b, c = null === (b = Ta()) || void 0 === b ? void 0 : b.createScript(a);
        return new Wa(null !== c && void 0 !== c ? c : a, _.Pa)
    };
    Ya = function(a) {
        var b;
        if (null === (b = Ra()) || void 0 === b ? 0 : b.isScript(a)) return a;
        if (a instanceof Wa) return a.j;
        throw Error("wrong type");
    };
    $a = function(a) {
        var b, c = null === (b = Ta()) || void 0 === b ? void 0 : b.createScriptURL(a);
        return new Za(null !== c && void 0 !== c ? c : a, _.Pa)
    };
    ab = function(a) {
        var b;
        if (null === (b = Ra()) || void 0 === b ? 0 : b.isScriptURL(a)) return a;
        if (a instanceof Za) return a.j;
        throw Error("wrong type");
    };
    bb = function(a) {
        var b;
        a = ab(a);
        return (null === (b = Ra()) || void 0 === b ? 0 : b.isScriptURL(a)) ? TrustedScriptURL.prototype.toString.apply(a) : a
    };
    eb = function(a) {
        return a instanceof cb ? ab(a) : db(a)
    };
    fb = function(a) {
        var b, c = (a.ownerDocument && a.ownerDocument.defaultView || window).document;
        (b = (c = null === (b = c.querySelector) || void 0 === b ? void 0 : b.call(c, "script[nonce]")) ? c.nonce || c.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
    };
    ib = function(a) {
        return a ? a.passive && gb() ? a : a.capture || !1 : !1
    };
    kb = function(a) {
        return new _.jb(function(b) {
            return b.substr(0, a.length + 1).toLowerCase() === a + ":"
        })
    };
    qb = function() {
        var a = _.lb(mb);
        return function() {
            return pb(window) <= a
        }
    };
    rb = function(a) {
        return a
    };
    tb = function(a, b) {
        if (!(b || sb)(a)) throw Error(String(a));
    };
    ub = function(a, b) {
        tb(a, b);
        return a
    };
    wb = function(a, b, c) {
        if (!a) {
            if (c && 0 < c.length) throw Error("[" + c.map(String).join(",") + "]");
            throw Error(String(a));
        }
    };
    Gb = function(a, b, c) {
        try {
            c(function() {
                var d = new xb;
                var e = void 0 === e ? window : e;
                var f = new yb;
                var g = zb(e);
                f = Ab(f, 1, g, 0);
                g = Bb();
                f = Cb(f, 2, g);
                e = Ab(f, 3, e.document.URL, "");
                d = Db(d, 2, e);
                e = new Eb;
                e = Fb(e, 1, a);
                e = Ab(e, 2, b.name, "");
                e = Ab(e, 3, b.message, "");
                b.stack && Cb(e, 4, b.stack.split(/\n\s*/));
                return Db(d, 1, e)
            })
        } catch (d) {}
    };
    Hb = function(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        return function(e) {
            for (var f = [], g = 0; g < arguments.length; ++g) f[g] = arguments[g];
            try {
                return c.apply(this, f)
            } catch (h) {
                if (Gb(a, h, b), !d) throw h;
            }
        }
    };
    Ib = function(a) {
        var b = a.split("/");
        return "/" === a.charAt(0) && 2 <= b.length ? b[1] : "/" !== a.charAt(0) && 1 <= b.length ? b[0] : ""
    };
    Lb = function(a) {
        if (15360 >= a.length) return a;
        var b = a;
        15360 < b.length && (b = b.substring(0, 15352), b = b.replace(/%\w?$/, ""), b = b.replace(/&[^=]*=?$/, ""), b += "&trunc=1");
        Jb(Kb.N(), (9).toString(), 9, a.length - b.length + 8);
        return b
    };
    Mb = function(a) {
        var b = a.indexOf("google_preview=", a.lastIndexOf("?")),
            c = a.indexOf("&", b); - 1 === c && (c = a.length - 1, --b);
        return a.substring(0, b) + a.substring(c + 1, a.length)
    };
    Nb = function(a, b) {
        b = void 0 === b ? window : b;
        return b.location ? b.URLSearchParams ? (a = b.URLSearchParams ? (new URLSearchParams(b.location.search)).get(a) : null) && a.length ? a : null : (a = (new RegExp("[?&]" + a + "=([^&]*)")).exec(b.location.search)) ? decodeURIComponent(a[1]) : null : null
    };
    Ob = function(a, b) {
        b = void 0 === b ? window : b;
        return !!Nb(a, b)
    };
    Qb = function() {
        return Pb()
    };
    Pb = function() {
        var a = Number("2021063001");
        return 1 > a || Math.floor(a) !== a ? (Rb({
            v: "2021063001"
        }, "gpt_inv_ver"), "1") : "2021063001"
    };
    Tb = function(a, b) {
        a = {
            methodId: a
        };
        b.name && (a.name = b.name);
        b.message && (a.message = b.message.substring(0, 512));
        b.fileName && (a.fileName = b.fileName);
        b.lineNumber && (a.lineNumber = b.lineNumber);
        b.stack && (a.stack = Sb(b.stack, ""));
        return a
    };
    Vb = function(a, b, c) {
        c = void 0 === c ? !1 : c;
        Ub(a, b);
        if (!c) throw b;
    };
    Ub = function(a, b, c) {
        c = void 0 === c ? Wb : c;
        if (!b.isReported) try {
            b.isReported = !0;
            if ("__throw_for_testing" === b.name && _.Xb(148)) throw Error("throwing error for testing");
            var d = Tb(a, b),
                e = new Yb("gpt_exception");
            try {
                Zb(e)
            } catch (f) {}
            _.$b(d, function(f, g) {
                q(e, g, f)
            });
            ac(e, c)
        } catch (f) {}
    };
    ic = function(a, b) {
        bc(b, function() {
            var c = a();
            var d = new cc;
            var e = Pb();
            d = Ab(d, 1, e, "");
            e = dc();
            d = Ab(d, 2, e, 0);
            e = [].concat(_.ec(_.r(fc, "keys").call(fc)));
            d = Cb(d, 3, e);
            e = gc[0];
            c.j || (c.j = {});
            var f = d ? d.za() : d;
            c.j[4] = d;
            c = hc(c, 4, e, f);
            d = _.lb(mb);
            return Ab(c, 3, d, 0)
        })
    };
    w = function(a, b, c) {
        var d = void 0 === d ? new jc(qb()) : d;
        return kc(a, b, void 0 === c ? !1 : c, _.v(lc), d)
    };
    nc = function(a, b) {
        if (.1 > Math.random()) try {
            var c = Error();
            mc("gpt_api_usage", function(d) {
                q(d, "methodId", a);
                q(d, "args", b);
                c.stack && q(d, "stack", Sb(c.stack, c.message));
                Zb(d)
            }, {
                ta: 1
            })
        } catch (d) {}
    };
    kc = function(a, b, c, d, e) {
        c = void 0 === c ? !1 : c;
        d = void 0 === d ? !1 : d;
        e = void 0 === e ? new jc(qb()) : e;
        return _.v(oc) ? function(f) {
            for (var g = [], h = 0; h < arguments.length; ++h) g[h] = arguments[h];
            d && nc.call(this, a, g.length);
            return Hb(a, function(k) {
                ic(k, e)
            }, b, c).apply(this, g)
        } : function(f) {
            for (var g = [], h = 0; h < arguments.length; ++h) g[h] = arguments[h];
            h = void 0;
            var k = !1,
                l = null,
                m = Kb.N();
            try {
                var n = _.v(pc);
                n && m && (l = m.start(a.toString(), 3));
                h = b.apply(this, g);
                k = !0;
                n && m && m.end(l)
            } catch (p) {
                try {
                    k ? Ub(110, p) : Vb.call(this, a, p, c)
                } catch (u) {
                    if (qc(l), !k && !c) throw p;
                }
            }
            d && nc.call(this, a, g.length);
            return h
        }
    };
    rc = function(a, b, c) {
        var d;
        var e = void 0 === e ? new jc(qb()) : e;
        kc(a, b, void 0 === c ? !1 : c, void 0 === d ? !1 : d, e)()
    };
    sc = function(a) {
        a && "function" == typeof a.wa && a.wa()
    };
    tc = function(a, b) {
        b = void 0 === b ? window : b;
        if (x(a, 5)) try {
            return b.localStorage
        } catch (c) {}
        return null
    };
    vc = function(a) {
        return _.v(uc) && !a.navigator.cookieEnabled ? !1 : "null" !== a.origin
    };
    xc = function(a, b, c) {
        b = x(b, 5) && vc(c) ? c.document.cookie : null;
        return null === b ? null : (new wc({
            cookie: b
        })).get(a) || ""
    };
    zc = function(a, b) {
        return A(this, function d() {
            var e, f, g;
            return B(d, function(h) {
                if (1 == h.j) return e = 0 < b ? a.filter(function(k) {
                    return !k.Ac
                }) : a, C(h, D.Promise.all(e.map(function(k) {
                    return k.Ec.promise
                })), 2);
                if (3 != h.j) {
                    if (a.length === e.length) return h.return(0);
                    f = a.filter(function(k) {
                        return k.Ac
                    });
                    g = _.yc();
                    return C(h, D.Promise.race([D.Promise.all(f.map(function(k) {
                        return k.Ec.promise
                    })), new D.Promise(function(k) {
                        return void setTimeout(k, b)
                    })]), 3)
                }
                return h.return(_.yc() - g)
            })
        })
    };
    Ac = function(a) {
        var b, c, d, e;
        return {
            ud: {
                wrapper: 1,
                bidder: a.bidder,
                amount: a.cpm,
                size: [a.width, a.height],
                targetingKeys: _.r(Object, "keys").call(Object, null !== (b = a.adserverTargeting) && void 0 !== b ? b : {}),
                ad: null !== (c = a.ad) && void 0 !== c ? c : void 0,
                adUrl: null !== (d = a.adUrl) && void 0 !== d ? d : void 0,
                ttlMs: 1E3 * (null !== (e = a.ttl) && void 0 !== e ? e : Infinity),
                responseTimestampMs: a.responseTimestamp,
                currency: a.currency,
                mediaType: a.mediaType,
                auctionId: a.auctionId
            },
            adId: a.adId
        }
    };
    Pc = function(a) {
        var b = new Bc,
            c = Cc(),
            d = a.bidder,
            e = a.wrapper,
            f = a.amount,
            g = void 0 === a.currency ? "USD" : a.currency,
            h = a.size,
            k = a.targetingKeys,
            l = a.ad,
            m = a.adUrl,
            n = void 0 === a.ttlMs ? 0 : a.ttlMs,
            p = a.responseTimestampMs,
            u = void 0 === a.mediaType ? "banner" : a.mediaType,
            t = a.auctionId;
        "number" === typeof p ? E(b, 9, p) : (E(b, 9, Date.now()), void 0 !== p && c.M(Dc("Slot.setClientBid", Ec(a), "responseTimestampMs", Ec(p))));
        if (1 === e) Fc(b, e);
        else return c.M(Gc("Slot.setClientBid", Ec(e), "1")), null;
        if ("string" === typeof d) Hc(b, d);
        else return c.M(Dc("Slot.setClientBid", Ec(a), "bidder", Ec(d))), null;
        if ("string" === typeof l) hc(b, 7, Ic[1], l);
        else {
            if (void 0 !== l) return c.M(Dc("Slot.setClientBid", Ec(a), "ad", String(l))), null;
            if ("string" === typeof m) hc(b, 12, Ic[1], m);
            else if (void 0 !== m) return c.M(Dc("Slot.setClientBid", Ec(a), "adUrl", String(m))), null
        }
        if (Jc(h) && Array.isArray(h)) Kc(b, Lc(Mc(new Nc, h[0]), h[1]));
        else return c.M(Dc("Slot.setClientBid", Ec(a), "size", Ec(h))), null;
        "number" === typeof f ? hc(b, 2, Ic[0], f) : "string" === typeof f ? hc(b, 3, Ic[0], f) : void 0 !== f && c.M(Dc("Slot.setClientBid", Ec(a), "amount", Ec(f)));
        "string" === typeof g ? E(b, 4, g) : c.M(Dc("Slot.setClientBid", Ec(a), "currency", Ec(g)));
        Array.isArray(k) && k.every(function(y) {
            return "string" === typeof y
        }) ? Cb(b, 6, k) : c.M(Dc("Slot.setClientBid", Ec(a), "targetingKeys", Ec(k)));
        "number" === typeof n ? E(b, 8, n) : c.M(Dc("Slot.setClientBid", Ec(a), "ttlMs", Ec(n)));
        d = 0;
        if ("string" === typeof u) switch (u) {
            case "banner":
                d = 1;
                break;
            case "native":
                d = 2;
                break;
            case "video":
                d = 3;
                break;
            default:
                c.M(Gc("Slot.setClientBid", Ec(u), "banner,native,video"))
        } else c.M(Dc("Slot.setClientBid", Ec(a), "mediaType", Ec(u)));
        E(b, 11, d);
        "string" === typeof t && Oc(b, t);
        return b
    };
    Sc = function(a) {
        return Qc(a, function() {
            return new Rc(a)
        })
    };
    bd = function(a, b, c, d) {
        var e = Tc(b, a);
        if (!e) return null;
        var f = Uc(e);
        if (!f) return f;
        var g = e === Vc(b, a),
            h = Wc(function() {
                var n = g ? Vc(b, a) : e;
                return n && Xc(n, window) || {}
            }),
            k = Yc(c)[0];
        c = !1;
        Array.isArray(k) && (c = d ? g : 0 == f.x && "center" == h()["text-align"]);
        c && (f.x += Math.round(Math.max(0, (g ? e.clientWidth : e.parentElement.clientWidth) - k[0]) / 2));
        d = function(n) {
            var p = h();
            null == (null == p ? void 0 : p.getPropertyValue) ? n = null : (n = p.getPropertyValue(n), n = (n = Zc.exec(n)) ? +n[1] : null);
            return n
        };
        if (g) {
            var l;
            f.y += Math.round(Math.min(null != (l = d("padding-top")) ? l : 0, e.clientHeight));
            if (!c) {
                l = e.clientWidth;
                var m;
                f.x += Math.round(Math.min(null != (m = d("padding-left")) ? m : 0, l))
            }
        }
        return f && $c(e) ? f : new _.ad(-12245933, -12245933)
    };
    jd = function(a, b, c) {
        c = (c = void 0 === c ? null : c) ? tc(c) : null;
        var d = 0;
        try {
            d |= a != a.top ? 512 : 0, d |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0
        } catch (g) {
            d |= 32
        }
        b = void 0 === b ? !1 : b;
        var e = 0;
        try {
            e |= cd(a, 2500);
            if (_.v(dd)) {
                var f = _.ed(a).clientHeight;
                e |= f ? 320 > f ? -2147483648 : 0 : 1073741824
            }
            e |= fd(a);
            b && !_.gd(_.id(c)) && (e |= 134217728)
        } catch (g) {
            e |= 32
        }
        return d | e
    };
    md = function(a, b, c, d) {
        if (5 !== kd(b)) return !1;
        var e = jd(c, "6499" !== Ib(a.getAdUnitPath()), d);
        e && mc("gpt_int_ns", function(f) {
            q(f, "nsr", e);
            Zb(f)
        }, {
            ta: _.lb(ld)
        });
        return !!e
    };
    od = function(a) {
        if (4 === a && _.v(nd)) return 11;
        switch (a) {
            case 2:
                return 2;
            case 3:
                return 1;
            case 5:
                return 8;
            default:
                return null
        }
    };
    td = function(a) {
        a = od(a);
        if (!a) return null;
        var b = 0;
        if (11 !== a) {
            b |= _.F != _.F.top ? 512 : 0;
            var c = _.pd(_.F);
            c = 26 !== a && 27 !== a && 40 !== a && 10 !== a && c.adCount ? 1 == a || 2 == a ? !(!c.adCount[1] && !c.adCount[2]) : (c = c.adCount[a]) ? 1 <= c : !1 : !1;
            c && (b |= 64);
            if (b) return b
        }
        if (2 === a || 1 === a) {
            0 === qd() && (b |= 536870912);
            c = 0;
            try {
                c |= _.F != _.F.top ? 512 : 0;
                var d = Math.min(_.F.screen.width || 0, _.F.screen.height || 0);
                c |= d ? 320 > d ? 8192 : 0 : 2048;
                var e;
                if (e = _.F.navigator) {
                    var f = _.F.navigator.userAgent;
                    e = /Firefox/.test(f) || /Android 2/.test(f) || /iPhone OS [34]_/.test(f) || /Windows Phone (?:OS )?[67]/.test(f)
                }
                c |= e ? 1048576 : 0
            } catch (g) {
                c |= 32
            }
            b |= c;
            d = 0;
            try {
                d |= _.rd(_.F) ? 0 : 8, d |= cd(_.F, sd), d |= fd(_.F)
            } catch (g) {
                d |= 32
            }
            b |= d
        } else 8 === a ? b |= jd(_.F) : 11 !== a && (b |= 32);
        b || (d = _.pd(_.F), d.adCount = d.adCount || {}, d.adCount[a] = d.adCount[a] + 1 || 1);
        return b
    };
    vd = function(a) {
        return ud().some(function(b) {
            return Ib(b.getAdUnitPath()) === a
        })
    };
    yd = function(a) {
        var b = window,
            c = !0;
        c = void 0 === c ? !1 : c;
        new D.Promise(function(d, e) {
            function f() {
                var h;
                g.onload = null;
                g.onerror = null;
                null === (h = g.parentElement) || void 0 === h ? void 0 : h.removeChild(g)
            }
            var g = b.document.createElement("script");
            g.onload = function() {
                f();
                d()
            };
            g.onerror = function() {
                f();
                e(void 0)
            };
            g.type = "text/javascript";
            wd(g, a);
            c && "complete" !== b.document.readyState ? _.xd(b, "load", function() {
                b.document.body.appendChild(g)
            }) : b.document.body.appendChild(g)
        })
    };
    Cd = function(a) {
        return A(this, function c() {
            var d, e, f, g, h, k;
            return B(c, function(l) {
                switch (l.j) {
                    case 1:
                        return d = "https://pagead2.googlesyndication.com/getconfig/sodar?sv=200&tid=" + a.j + ("&tv=" + a.l + "&st=") + a.fb, e = void 0, l.H = 2, C(l, zd(d), 4);
                    case 4:
                        e = l.l;
                        Ad(l, 3);
                        break;
                    case 2:
                        Bd(l);
                    case 3:
                        if (!e) return l.return(void 0);
                        f = a.qb || e.sodar_query_id;
                        g = void 0 === e.rc_enable ? "n" : e.rc_enable;
                        h = void 0 === e.bg_snapshot_delay_ms ? "0" : e.bg_snapshot_delay_ms;
                        k = void 0 === e.is_gen_204 ? "1" : e.is_gen_204;
                        return f && e.bg_hash_basename && e.bg_binary ? l.return({
                            context: a.A,
                            fd: e.bg_hash_basename,
                            ed: e.bg_binary,
                            Fd: a.j + "_" + a.l,
                            qb: f,
                            fb: a.fb,
                            Kb: g,
                            Tb: h,
                            Jb: k
                        }) : l.return(void 0)
                }
            })
        })
    };
    Fd = function(a) {
        return A(this, function c() {
            var d;
            return B(c, function(e) {
                if (1 == e.j) return C(e, Cd(a), 2);
                if (d = e.l) {
                    var f = "sodar2";
                    f = void 0 === f ? "sodar2" : f;
                    var g = window,
                        h = g.GoogleGcLKhOms;
                    h && "function" === typeof h.push || (h = g.GoogleGcLKhOms = []);
                    var k = {};
                    h.push((k._ctx_ = d.context, k._bgv_ = d.fd, k._bgp_ = d.ed, k._li_ = d.Fd, k._jk_ = d.qb, k._st_ = d.fb, k._rc_ = d.Kb, k._dl_ = d.Tb, k._g2_ = d.Jb, k));
                    if (h = g.GoogleDX5YKUSk) g.GoogleDX5YKUSk = void 0, h[1]();
                    f = Dd(Ed, {
                        basename: f
                    });
                    yd(f)
                }
                return e.return(d)
            })
        })
    };
    Hd = function(a) {
        switch (a) {
            case 1:
                return "gda";
            case 2:
                return "gpt";
            case 3:
                return "ima";
            case 4:
                return "pal";
            case 5:
                return "xfad";
            case 6:
                return "dv3n";
            case 7:
                return "spa";
            default:
                return "unk"
        }
    };
    Id = function(a, b) {
        return 0 === a.size ? !1 : void 0 === b || 0 === b.length ? !0 : b.some(function(c) {
            return a.has(c)
        })
    };
    Jd = function(a, b) {
        if (a.length !== b.length) throw Error("Length of two vectors should be the same!");
        for (var c = 0, d = 0; d < a.length; d++) c += a[d] * b[d];
        return c
    };
    Nd = function(a, b, c) {
        var d = Kd,
            e, f, g = [];
        b = _.G(b);
        for (var h = b.next(); !h.done; h = b.next()) {
            h = h.value;
            var k = c(h, {}, null !== (e = a.perBuyerSignals.get("gdaSignals")) && void 0 !== e ? e : new Ld, null !== (f = a.j.get("gdaSignals")) && void 0 !== f ? f : new Md, {});
            0 >= k.bid || null === k.ad || (k = d(k.ad, k.bid, a, {}), 0 < k && g.push({
                ad: h,
                Td: k
            }))
        }
        return g
    };
    Pd = function() {
        var a;
        var b = Ya(Od);
        b = (null === (a = Ra()) || void 0 === a ? 0 : a.isScript(b)) ? TrustedScript.prototype.toString.apply(b) : b;
        return $a(URL.createObjectURL(new Blob([b], {
            type: "text/javascript"
        })))
    };
    Rd = function(a, b, c, d) {
        c = void 0 === c ? null : c;
        d = void 0 === d ? {} : d;
        if (Math.random() < _.lb(Qd)) {
            var e = {};
            Rb(_.r(Object, "assign").call(Object, (e.c = String(a), e.pc = String(zb(window)), e.em = c, e.lid = b, e.eids = Bb().join(), e), d), "esp")
        }
    };
    Xd = function(a, b, c, d) {
        Rd(18, a);
        try {
            var e = _.yc();
            _.lb(Sd) && (Td(b, Number(((0, H.U)(Ud(b, 8)) - 1).toFixed(3))), E(b, 7, Math.round(e / 1E3 / 60)));
            return c().then(function(f) {
                Rd(29, a, null, {
                    delta: String(_.yc() - e)
                });
                E(b, 3, Date.now());
                Vd(a, b, f, d);
                return b
            }).catch(function(f) {
                Vd(a, b, I(b, 2), d);
                Rd(28, a, Wd(f));
                return b
            })
        } catch (f) {
            return Vd(a, b, I(b, 2), d), Rd(1, a, Wd(f)), D.Promise.resolve(b)
        }
    };
    Zd = function() {
        var a = window;
        var b = void 0 === b ? function() {} : b;
        return new D.Promise(function(c) {
            var d = function() {
                c(b());
                _.Yd(a, "load", d)
            };
            _.xd(a, "load", d)
        })
    };
    fe = function(a, b, c, d) {
        return A(this, function f() {
            var g, h, k, l, m;
            return B(f, function(n) {
                if (1 == n.j) return g = new $d(a, b, c, d), h = new ae(g.o, g.B, c, d), k = new be(h.o, h.B, c, d), l = new ce, de(l, [g, h, k]), ee(l), C(n, h.m.promise, 2);
                m = n.l;
                return n.return(m ? m : {
                    id: a,
                    kd: null
                })
            })
        })
    };
    ke = function(a, b, c) {
        var d;
        b ? ge() === he(window) || _.v(ie) ? a.encryptedSignalProviders instanceof je ? a.encryptedSignalProviders.j.push(c) : (b = new je(null !== (d = a.encryptedSignalProviders) && void 0 !== d ? d : [], b), a.encryptedSignalProviders = b, b.j.push(c)) : Rd(16, "") : Rd(15, "")
    };
    le = function(a, b, c, d) {
        var e, f = null !== (e = a.encryptedSignalSource) && void 0 !== e ? e : a.encryptedSignalSource = {};
        c ? ge() === he(window) || _.v(ie) ? b.map(function(g) {
            var h = g.xa;
            if ((g = Object.getOwnPropertyDescriptor(f, h)) && !g.configurable) return D.Promise.resolve(null);
            var k = !1;
            return new D.Promise(function(l) {
                var m = f[h];
                Object.defineProperty(f, h, {
                    set: function(n) {
                        if (!k) {
                            k = !0;
                            if ("function" === typeof n) {
                                var p = {};
                                Rd(17, h, null, (p.api = "0", p));
                                n = fe(h, n, c, d)
                            } else Rd(14, h), n = D.Promise.resolve(null);
                            n.then(l)
                        }
                    }
                });
                m && (f[h] = m)
            })
        }) : Rd(16, "") : Rd(15, "")
    };
    oe = function(a, b, c) {
        var d, e = b.toString();
        if (c && !document.querySelector('[src="' + e + '"]'))
            if (c = me().get(a, c), c.getError()) Rd(c.getError(), a, c.errorMessage);
            else if (c = c.Ub, !c || !(0 === ne(c) || 1 > (null !== (d = Ud(c, 8)) && void 0 !== d ? d : 0))) {
            Rd(30, a, null, {
                url: e
            });
            var f = document.createElement("script");
            f.setAttribute("esp-signal", "true");
            wd(f, b);
            var g = function() {
                Rd(31, a, null, {
                    url: e
                });
                _.Yd(f, "error", g)
            };
            document.head.appendChild(f);
            _.xd(f, "error", g)
        }
    };
    qe = function(a) {
        a = _.pe(a.split(/\s+/), function(b) {
            return (b = /^(-?\d+)(px|%)$/.exec(b)) ? {
                value: parseFloat(b[1]),
                type: b[2]
            } : {
                value: 0,
                type: "px"
            }
        });
        a[1] = a[1] || a[0];
        a[2] = a[2] || a[0];
        a[3] = a[3] || a[1];
        return a
    };
    se = function(a) {
        if (!a) return [0];
        a = "number" === typeof a ? [a] : a;
        a = _.re(a, function(b) {
            return "number" === typeof b && 0 <= b && 1 >= b ? !0 : !1
        });
        la(a);
        na(a, function(b, c) {
            return b - c
        });
        return a
    };
    te = function(a) {
        try {
            var b = a.getBoundingClientRect()
        } catch (c) {}
        return b ? {
            top: b.top,
            right: b.right,
            bottom: b.bottom,
            left: b.left,
            width: b.width || b.right - b.left,
            height: b.height || b.bottom - b.top
        } : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            width: 0,
            height: 0
        }
    };
    ve = function(a, b, c, d) {
        var e, f, g, h, k, l, m, n = new ue,
            p = "",
            u = function(t) {
                try {
                    var y = "object" === typeof t.data ? t.data : JSON.parse(t.data);
                    p === y.paw_id && (_.Yd(a, "message", u), n.resolve(d(y)))
                } catch (z) {}
            };
        return "function" === typeof(null === (e = a.gmaSdk) || void 0 === e ? void 0 : e.getQueryInfo) ? (_.xd(a, "message", u), p = c(a.gmaSdk), n.promise) : "function" === typeof(null === (h = null === (g = null === (f = a.webkit) || void 0 === f ? void 0 : f.messageHandlers) || void 0 === g ? void 0 : g.getGmaQueryInfo) || void 0 === h ? void 0 : h.postMessage) || "function" === typeof(null === (m = null === (l = null === (k = a.webkit) || void 0 === k ? void 0 : k.messageHandlers) || void 0 === l ? void 0 : l.getGmaSig) || void 0 === m ? void 0 : m.postMessage) ? (p = String(Math.floor(2147483647 * pb(a))), _.xd(a, "message", u), b(a.webkit.messageHandlers, p), n.promise) : null
    };
    we = function(a) {
        return ve(a, function(b, c) {
            var d;
            return void(null !== (d = b.getGmaQueryInfo) && void 0 !== d ? d : b.getGmaSig).postMessage(c)
        }, function(b) {
            return b.getQueryInfo()
        }, function(b) {
            return b.signal
        })
    };
    ye = function(a, b, c, d) {
        try {
            if (a.setAttribute("data-google-query-id", c), !d) {
                var e, f;
                if (_.v(xe)) {
                    null !== (e = b.googletag) && void 0 !== e ? e : b.googletag = {};
                    var g = null !== (f = b.googletag.queryIds) && void 0 !== f ? f : [];
                    g.push(c);
                    500 < g.length && g.shift();
                    b.googletag.queryIds = g
                }
            }
        } catch (h) {}
    };
    ze = function(a) {
        return "number" === typeof a || "string" === typeof a
    };
    Ae = function(a) {
        switch (a) {
            case void 0:
            case null:
            case 2:
                return !1;
            case 0:
            case 1:
                return !0;
            default:
                throw Error("Unexpected encryption mode: " + a);
        }
    };
    Ce = function(a, b) {
        var c = void 0 === c ? Be : c;
        a.goog_sdr_l || (Object.defineProperty(a, "goog_sdr_l", {
            value: !0
        }), "complete" === a.document.readyState ? c(a, b) : _.xd(a, "load", function() {
            return void c(a, b)
        }))
    };
    De = function(a) {
        var b, c;
        try {
            return (null !== (c = null === (b = a.top) || void 0 === b ? void 0 : b.frames) && void 0 !== c ? c : {}).google_ads_top_frame
        } catch (d) {}
        return null
    };
    Ee = function(a) {
        var b = /^https?:\/\/[^/#?]+\/?$/;
        return !!a && !b.test(a)
    };
    Ge = function(a) {
        if (a === a.top || Fe(a.top)) return D.Promise.resolve({
            status: 4
        });
        var b = De(a);
        if (!b) return D.Promise.resolve({
            status: 2
        });
        if (a.parent === a.top && Ee(a.document.referrer)) return D.Promise.resolve({
            status: 3
        });
        var c = new ue;
        a = new MessageChannel;
        a.port1.onmessage = function(d) {
            "__goog_top_url_resp" === d.data.msgType && c.resolve({
                mb: d.data.topUrl,
                status: d.data.topUrl ? 0 : 1
            })
        };
        b.postMessage({
            msgType: "__goog_top_url_req"
        }, "*", [a.port2]);
        return c.promise
    };
    He = function(a) {
        return !!a && !!I(a, 1)
    };
    Je = function(a) {
        a = (Fe(a.top) ? a.top : a).AMP;
        return "object" === typeof a && !!Ie(a, function(b, c) {
            return !/^inabox/i.test(c)
        })
    };
    Le = function(a) {
        return new D.Map([
            ["arp", {
                value: Je(a) ? 1 : null
            }],
            ["abxe", {
                value: Fe(a.top) || Ke(a.IntersectionObserver) ? 1 : null
            }]
        ])
    };
    Ne = function() {
        var a = window,
            b, c, d;
        null !== (b = a.pbjs) && void 0 !== b ? b : a.pbjs = {};
        null !== (c = (d = a.pbjs).que) && void 0 !== c ? c : d.que = [];
        a.pbjs.que.push(kc(860, function() {
            var e, f = (0, H.U)(a.pbjs);
            null === (e = f.onEvent) || void 0 === e ? void 0 : e.call(f, "setTargeting", kc(861, function(g) {
                Me(f, g)
            }))
        }))
    };
    Pe = function(a) {
        var b;
        return null === (b = (J = _.r(Object, "entries").call(Object, Oe()), _.r(J, "find")).call(J, function(c) {
            var d = _.G(c);
            c = d.next().value;
            d = d.next().value;
            return (J = I(d, 4), _.r(J, "includes")).call(J, "publisher_ads") && (c === a || d.getAdUnitPath() === a)
        })) || void 0 === b ? void 0 : b[1]
    };
    Me = function(a, b) {
        var c, d, e, f, g, h, k = null;
        b = _.G(_.r(Object, "keys").call(Object, b));
        for (var l = b.next(); !l.done; l = b.next()) {
            var m = l.value;
            if (l = Pe(m)) {
                var n = null !== (g = null !== (d = null === (c = a.getBidResponsesForAdUnitCode) || void 0 === c ? void 0 : c.call(a, m)) && void 0 !== d ? d : null === (f = null === (e = a.getBidResponses) || void 0 === e ? void 0 : e.call(a)) || void 0 === f ? void 0 : f[m]) && void 0 !== g ? g : {
                    bids: []
                };
                m = {};
                n = _.G(null !== (h = n.bids) && void 0 !== h ? h : []);
                for (var p = n.next(); !p.done; m = {
                        yb: m.yb
                    }, p = n.next()) {
                    p = Ac(p.value);
                    var u = p.ud;
                    m.yb = p.adId;
                    p = Pc(u);
                    null != p && (null !== k && void 0 !== k ? k : k = I(p, 15), (u = (J = L(l, Qe, 21), _.r(J, "find")).call(J, function(t) {
                        return function(y) {
                            return I(y, 1) === t.yb
                        }
                    }(m))) ? Re(u, p) : (p = Re(Se(new Qe, m.yb), p), Te(l, p)))
                }
            }
        }
        k && _.lb(Ue) && Math.random() < _.lb(Ue) && Ve(a, k)
    };
    Ve = function(a, b) {
        var c, d, e, f, g = function(n, p) {
                n = Pe(n);
                n = (null === n || void 0 === n ? void 0 : (J = L(n, Qe, 21), _.r(J, "find")).call(J, function(u) {
                    var t, y;
                    return 1 === (null === (t = M(u, Bc, 2)) || void 0 === t ? void 0 : I(t, 10)) && (null === (y = M(u, Bc, 2)) || void 0 === y ? void 0 : I(y, 1)) === p
                })) || (null === n || void 0 === n ? void 0 : Te(n, Re(new Qe, Oc(Hc(Fc(new Bc, 1), p), b))));
                return null === n || void 0 === n ? void 0 : M(n, Bc, 2)
            },
            h = (null === (c = null === a || void 0 === a ? void 0 : a.getEvents) || void 0 === c ? void 0 : c.call(a)) || [];
        h = _.G(h);
        for (var k = h.next(); !k.done; k = h.next()) switch (k = k.value, k.eventType) {
            case "bidRequested":
                if (!Array.isArray(k.args) && Array.isArray(k.args.bids))
                    for (var l = _.G(k.args.bids), m = l.next(); !m.done; m = l.next()) m = m.value, m.bidder && m.adUnitCode && m.auctionId === b && (null === (d = g(m.adUnitCode, m.bidder)) || void 0 === d ? void 0 : We(d, k.elapsedTime));
                break;
            case "bidResponse":
                !Array.isArray(k.args) && k.args.bidder && k.args.adUnitCode && k.args.auctionId === b && (l = g(k.args.adUnitCode, k.args.bidder), null === l || void 0 === l ? void 0 : We(l, k.elapsedTime - ((null === l || void 0 === l ? void 0 : I(l, 13)) || 0)), null === l || void 0 === l ? void 0 : E(l, 14, 1));
                break;
            case "bidTimeout":
                if (Array.isArray(k.args))
                    for (k = _.G(k.args), m = k.next(); !m.done; m = k.next()) l = m.value, l.bidder && l.adUnitCode && l.auctionId === b && (l = g(l.adUnitCode, l.bidder), null === l || void 0 === l ? void 0 : E(l, 14, 3), null === l || void 0 === l ? void 0 : We(l, (null === (f = null === (e = null === a || void 0 === a ? void 0 : a.getConfig) || void 0 === e ? void 0 : e.call(a)) || void 0 === f ? void 0 : f.bidderTimeout) || 0));
                break;
            case "noBid":
                !Array.isArray(k.args) && k.args.bidder && k.args.adUnitCode && k.args.auctionId === b && (l = g(k.args.adUnitCode, k.args.bidder), 3 !== (null === l || void 0 === l ? void 0 : I(l, 14)) && (null === l || void 0 === l ? void 0 : E(l, 14, 2), null === l || void 0 === l ? void 0 : We(l, k.elapsedTime - (I(l, 13) || 0))))
        }
    };
    Ze = function(a, b) {
        return Xe(a, function(c) {
            return Ye(b[c.j])
        }, "", function(c) {
            return null != c
        }, "~")
    };
    df = function(a, b) {
        var c;
        return null !== (c = (J = L(a, $e, 1), _.r(J, "find")).call(J, function(d) {
            return af(d, 1, 0) === b
        })) && void 0 !== c ? c : bf(a, cf(new $e, b))
    };
    jf = function(a, b) {
        var c;
        return null !== (c = (J = L(a, ef, 2), _.r(J, "find")).call(J, function(d) {
            return ff(d, 1) === b
        })) && void 0 !== c ? c : gf(a, hf(new ef, b))
    };
    Ye = function(a) {
        for (var b = new kf, c = _.G(L(a, Qe, 21)), d = c.next(); !d.done; d = c.next()) {
            var e = d.value;
            d = (0, H.U)(M(e, Bc, 2));
            var f = df(b, (0, H.U)(I(d, 10)));
            f = jf(f, (0, H.U)(I(d, 1)));
            lf(f, I(d, 13) || 0);
            mf(f, I(d, 14) || 1);
            var g = new nf; of (d, 2) && pf(g, 1E6 * (0, H.U)(I(d, 2))); of (d, 4) && qf(g, (0, H.U)(I(d, 4))); of (e, 1) && rf(g, (0, H.U)(I(e, 1)));
            e = {};
            for (var h = _.G(I(d, 6)), k = h.next(); !k.done; e = {
                    Bb: e.Bb
                }, k = h.next()) e.Bb = k.value, (J = L(a, sf, 9), _.r(J, "find")).call(J, function(l) {
                return function(m) {
                    return tf(m) === l.Bb
                }
            }(e)) && uf(g, 4, e.Bb); of (d, 11) && vf(g, I(d, 11));
            wf(f, 3, g, nf)
        }
        if (!L(b, $e, 1).length) return null;
        a = new xf;
        yf(b, a);
        return Ka(zf(a), 3)
    };
    Bf = function(a) {
        var b = a,
            c = 0;
        Af(b, function(d) {
            var e;
            return 1 === (null == (e = d.parentElement) ? void 0 : e.childElementCount) ? (b = d.parentElement, c++, !0) : !1
        });
        return {
            Vd: b,
            depth: c
        }
    };
    Cf = function(a, b) {
        var c = _.Xb(23);
        mc("gpt_not_reserved", function(d) {
            Zb(d);
            q(d, "inViewport", a);
            q(d, "depth", b)
        }, {
            ta: c
        })
    };
    Gf = function(a, b, c) {
        var d = a.map(function(e) {
            return b[e.j]
        });
        return new D.Map([
            ["ists", {
                value: Df(d, function(e) {
                    return 0 != kd(e)
                }) || null
            }],
            ["fas", {
                value: Xe(d, function(e) {
                    return od(kd(e))
                }, 0)
            }],
            ["pfxs", {
                value: _.v(Ef) ? Df(a, function(e) {
                    var f = b[e.j],
                        g;
                    if (g = !od(kd(f))) {
                        g = null;
                        Array.isArray(Yc(f)[0]) && (g = _.G(Yc(f)[0]), f = g.next().value, g = g.next().value, g = {
                            width: f,
                            height: g
                        });
                        a: {
                            var h = Tc(e, c);e = {
                                Uc: g,
                                Cc: !1
                            };
                            var k = void 0 === e ? {} : e;e = void 0 === k.Uc ? null : k.Uc;f = void 0 === k.Hd ? 100 : k.Hd;g = void 0 === k.wb ? 50 : k.wb;k = void 0 === k.Cc ? !0 : k.Cc;
                            for (var l = Ff(), m = !1; h;) {
                                if (!f-- || Ff() - l >= g) {
                                    g = !1;
                                    break a
                                }
                                switch (h.nodeType) {
                                    case 9:
                                        try {
                                            var n = h.parentWindow || h.defaultView;
                                            if (n) {
                                                var p = n.frameElement;
                                                if (p && Fe(n.parent)) {
                                                    h = p;
                                                    break
                                                }
                                            }
                                        } catch (K) {}
                                        h = null;
                                        break;
                                    case 1:
                                        var u = h,
                                            t;
                                        if (t = k) {
                                            b: {
                                                try {
                                                    if (0 < u.offsetWidth && 0 < u.offsetHeight && u.style && "none" !== u.style.display && "hidden" !== u.style.visibility && (!u.style.opacity || 0 !== Number(u.style.opacity))) {
                                                        var y = u.getBoundingClientRect();
                                                        var z = 0 < y.right && 0 < y.bottom;
                                                        break b
                                                    }
                                                } catch (K) {}
                                                z = !1
                                            }
                                            t = !z
                                        }
                                        if (t) {
                                            g = !1;
                                            break a
                                        }
                                        m || (/^html|body$/i.test(u.tagName) ? m = null : (m = u.style.position || (Xc(u, window) || {}).position, m = /^fixed/i.test(m) ? u : null), m = !!m && (!e || m.offsetWidth * m.offsetHeight <= 4 * e.width * e.height));
                                        h = h.parentNode
                                }
                            }
                            g = m
                        }
                    }
                    return g
                }) || null : null
            }]
        ])
    };
    Hf = function(a) {
        return new D.Map([
            ["rbvs", {
                value: Df(a, function(b) {
                    return 4 == kd(b)
                }) || null
            }]
        ])
    };
    Jf = function(a) {
        if (_.v(If)) return new D.Map;
        var b = a.Cb,
            c = a.Ob,
            d = 0 === a.ld;
        return new D.Map([
            ["adsid", {
                value: d ? b : null
            }],
            ["pucrd", {
                value: d ? c : null
            }],
            ["jar", {
                value: a.Lb
            }]
        ])
    };
    Mf = function(a, b, c) {
        var d = window;
        return new D.Map([
            ["ris", {
                value: Xe(b, function(e) {
                    var f, g;
                    e = null !== (g = null === (f = a.j.get(e)) || void 0 === f ? void 0 : f.Ic) && void 0 !== g ? g : 0;
                    f = _.Kf(d);
                    return Math.round(Math.min((e && f ? f - e : 0) / 1E3, 1800))
                }, 0, void 0, "~")
            }],
            ["rcs", {
                value: Xe(b, function(e) {
                    if (!c) {
                        var f = void 0 === f ? _.F : f;
                        var g = a.j.get(e);
                        g && (g.Ic = _.Kf(f) || 0, g.tb++)
                    }
                    return Lf(a, e)
                }, 0)
            }]
        ])
    };
    Nf = function(a, b) {
        var c, d = x(a, 21);
        return new D.Map([
            ["hxva", {
                value: d ? 1 : null,
                options: {
                    ha: !1
                }
            }],
            ["cmsid", {
                value: d ? I(a, 23) : null
            }],
            ["vid", {
                value: d ? I(a, 22) : null
            }],
            ["pod", {
                value: isNaN(b.Xa) ? null : b.Xa,
                options: {
                    ha: !1
                }
            }],
            ["ppos", {
                value: isNaN(b.Ya) ? null : b.Ya,
                options: {
                    ha: !1
                }
            }],
            ["scor", {
                value: null !== (c = I(a, 29)) && void 0 !== c ? c : null,
                options: {
                    ha: !1
                }
            }]
        ])
    };
    Of = function(a, b) {
        return a && (a = M(a, Nc, 1)) ? I(a, 1) || b.innerWidth : 0
    };
    Pf = function(a, b) {
        return a && (a = M(a, Nc, 1)) ? I(a, 2) || b.innerHeight : 0
    };
    Qf = function(a) {
        return a && (a = M(a, Nc, 2)) ? I(a, 1) || 0 : 0
    };
    Rf = function(a) {
        return a && (a = M(a, Nc, 2)) ? I(a, 2) || 0 : 0
    };
    Tf = function(a, b, c) {
        a = a.map(function(e) {
            return b[e.j]
        });
        var d = a.some(function(e) {
            return of(e, 16)
        });
        return new D.Map([
            ["rtgs", {
                value: d ? a.map(function(e) {
                    return of(e, 16) ? 0 != Yc(e).length ? "1" : "2" : "0"
                }) : null,
                options: {
                    Aa: "!"
                }
            }],
            ["max_w", {
                value: d ? a.map(function(e) {
                    return Of(M(e, Sf, 16), c)
                }) : null,
                options: {
                    Aa: "!"
                }
            }],
            ["max_h", {
                value: d ? a.map(function(e) {
                    return Pf(M(e, Sf, 16), c)
                }) : null,
                options: {
                    Aa: "!"
                }
            }],
            ["min_w", {
                value: d ? a.map(function(e) {
                    return Qf(M(e, Sf, 16))
                }) : null,
                options: {
                    Aa: "!"
                }
            }],
            ["min_h", {
                value: d ? a.map(function(e) {
                    return Rf(M(e, Sf, 16))
                }) : null,
                options: {
                    Aa: "!"
                }
            }]
        ])
    };
    Yf = function(a, b) {
        b = void 0 === b ? Uf : b;
        var c = ka(a),
            d = function(f) {
                f = _.G(f);
                f.next();
                f = Vf(f);
                return b(c, f)
            },
            e = function(f) {
                var g = _.G(f);
                f = g.next().value;
                g = Vf(g);
                return a.apply(f, g)
            };
        return function(f) {
            for (var g = [], h = 0; h < arguments.length; ++h) g[h] = arguments[h];
            h = this || _.F;
            var k = Wf.get(h);
            k || (k = {}, Wf.set(h, k));
            return Xf(k, [this].concat(_.ec(g)), e, d)
        }
    };
    $f = function(a) {
        a = Zf(a);
        var b = [];
        _.$b(a, function(c, d) {
            c = c.filter(function() {
                return !0
            });
            c.length && (c = c.map(encodeURIComponent), d = encodeURIComponent(d), b.push(d + "=" + c.join()))
        });
        return b
    };
    bg = function(a, b, c, d) {
        var e;
        if (a = Vc(a, b)) {
            if (c = _.v(ag) || (null !== (e = x(c, 24)) && void 0 !== e ? e : x(d, 30))) b = a.getBoundingClientRect(), c = b.top, d = b.bottom, 0 === b.height ? c = !1 : (b = _.F.innerHeight, c = 0 < d && d < b || 0 < c && c < b);
            c || (a.style.display = "none")
        }
    };
    cg = function() {
        var a, b, c;
        return null !== (c = null === (b = null === (a = window.performance) || void 0 === a ? void 0 : a.now) || void 0 === b ? void 0 : b.call(a)) && void 0 !== c ? c : Date.now()
    };
    dg = function(a) {
        var b = cg();
        for (a = b + a; cg() < a;);
        return cg() - b
    };
    eg = function(a, b) {
        var c = a.shift();
        void 0 !== c && (b(c), a.length && window.requestAnimationFrame(function() {
            return void eg(a, b)
        }))
    };
    gg = function() {
        var a = void 0 === a ? dg : a;
        if ("function" === typeof window.requestAnimationFrame) {
            var b = fg();
            b.length && window.requestAnimationFrame(function() {
                return void eg(b, a)
            })
        }
    };
    fg = function() {
        return hg(ig).map(function(a) {
            return _.jg(a, 0)
        }).filter(function(a) {
            return null !== a
        })
    };
    lg = function(a) {
        var b = _.lb(kg);
        return -1 !== b ? b : of (a, 1) ? of (a, 3) && 0 !== qd() ? I(a, 1) * Ud(a, 3) : I(a, 1) : null
    };
    mg = function(a) {
        var b = {};
        a = _.G(a);
        for (var c = a.next(); !c.done; c = a.next()) c = c.value, b[I(c, 1)] = I(c, 2);
        return b
    };
    pg = function(a, b) {
        var c;
        return ng(a, og, function(d) {
            d = d.detail.data;
            try {
                return c = JSON.parse(d), "rewarded" === c.type && c.message === b
            } catch (e) {
                return !1
            }
        }).then(function() {
            return c
        })
    };
    rg = function(a) {
        qg = a
    };
    sg = function(a) {
        mc("gpt_fc_has_namespace_but_no_iframes", function(b) {
            Zb(b);
            q(b, "networkId", a)
        }, {
            ta: 1
        })
    };
    xg = function() {
        return tg() ? 0 <= ug(vg(), 11) : wg() && 0 <= ug(vg(), 65)
    };
    Ag = function(a) {
        var b = yg(a);
        return (J = ["google_debug", "dfpdeb", "google_console", "google_force_console", "googfc"], _.r(J, "find")).call(J, function(c) {
            return null !== zg(b, c)
        }) || null
    };
    Cg = function(a, b) {
        function c(h) {
            var k = h;
            return function(l) {
                for (var m = [], n = 0; n < arguments.length; ++n) m[n] = arguments[n];
                k && (n = k, k = null, n.apply(null, _.ec(m)))
            }
        }
        var d = this,
            e = null,
            f = 0,
            g = 0;
        return function() {
            return A(d, function k() {
                var l, m, n, p;
                return B(k, function(u) {
                    if (1 == u.j) return f && clearTimeout(f), f = 0, l = new ue, m = c(l.resolve), n = ++g, C(u, 0, 2);
                    if (g !== n) return m(!1), u.return(l.promise);
                    e ? e(!1) : m(!0);
                    p = c(function() {
                        e = null;
                        f = 0;
                        m(!0)
                    });
                    f = setTimeout(p, a);
                    _.Bg(b, function() {
                        return void m(!1)
                    });
                    e = m;
                    return u.return(l.promise)
                })
            })
        }
    };
    Eg = function(a) {
        var b = Dg(),
            c = a.replace("googletag.", "");
        return new D.Promise(function(d) {
            var e = !1;
            Object.defineProperty(b, c, {
                value: function(f, g) {
                    e || d({
                        Wb: f,
                        lc: g
                    });
                    e = !0
                },
                writable: !1,
                enumerable: !1
            })
        })
    };
    Jg = function(a) {
        switch (a.id) {
            case 5:
                return new Fg(a);
            case 6:
                return new Gg(a);
            case 0:
                return new Hg(a);
            default:
                return new Ig(a)
        }
    };
    Kg = function(a) {
        if (!Fe(a)) return -1;
        a = a.pageYOffset;
        return 0 > a ? -1 : a
    };
    Lg = function(a, b) {
        return null === a || void 0 === a ? void 0 : a.replace(/\$\{AUCTION_PRICE\}/g, String(b))
    };
    Ng = function(a) {
        var b = {
            threshold: [0, .3, .5, .75, 1]
        };
        return window.IntersectionObserver ? new IntersectionObserver(a, b) : new Mg(a, b)
    };
    Og = function(a) {
        return new D.Promise(function(b) {
            return void setTimeout(b, a)
        })
    };
    Pg = function(a, b) {
        return "undefined" === typeof IntersectionObserver ? new Mg(b, {
            rootMargin: a
        }) : new IntersectionObserver(b, {
            rootMargin: a
        })
    };
    Qg = function(a) {
        var b = window;
        return 0 <= a.bottom && a.top < b.innerHeight && 0 <= a.right && a.left < b.innerWidth
    };
    Wg = function(a) {
        var b, c, d, e, f;
        if (null == a) return [];
        var g = null !== (b = Rg(a, 1)) && void 0 !== b ? b : 0,
            h = null !== (c = Rg(a, 2)) && void 0 !== c ? c : 0,
            k = null !== (d = Rg(a, 3)) && void 0 !== d ? d : 0,
            l = null !== (e = Rg(a, 4)) && void 0 !== e ? e : 0;
        a = null !== (f = Rg(a, 5)) && void 0 !== f ? f : 0;
        for (var m = [], n = Math.round(1E3 * Math.random()), p = 0; p < g; p++) {
            for (var u = new Sg, t = 0; t < l; t++) uf(u, 6, (n + t).toString());
            uf(u, 2, n);
            uf(u, 3, n % 97);
            Fb(u, 4, 1);
            t = new Tg;
            for (var y = 0; y < a; y++) uf(t, 1, y);
            Db(u, 7, t);
            t = new Ug;
            for (y = 0; y < h; y++) uf(t, 1, n + y);
            for (y = 0; y < k; y++) uf(t, 2, n + y);
            Db(u, 1, t);
            t = m;
            y = t.push;
            var z = new Vg;
            u = Db(z, 2, u);
            y.call(t, u)
        }
        return m
    };
    ah = function() {
        Xg("pubadsReady", !0);
        if (_.v(Yg)) {
            var a = 0;
            Object.defineProperty(Dg(), "pubadsReady", {
                get: function() {
                    Cc().M(Zg());
                    if (5 > a) {
                        var b = _.lb($g);
                        mc("gpt_pubads_ready", function(c) {
                            ++a;
                            Zb(c);
                            var d = Error("pubadsReady");
                            q(c, "stack", Sb(d.stack, d.message))
                        }, {
                            ta: b
                        })
                    }
                    return !0
                },
                configurable: !0,
                enumerable: !0
            })
        }
    };
    dh = function(a) {
        return _.v(bh) && "rewardedSlotCanceled" === a ? null : (J = _.r(Object, "values").call(Object, ch), _.r(J, "find")).call(J, function(b) {
            return b === a
        })
    };
    gh = function() {
        var a = eh.N();
        return Qc(a, function() {
            return new fh(a)
        })
    };
    jh = function() {
        var a = hh.N();
        return Qc(a, function() {
            return new ih(a)
        })
    };
    lh = function(a) {
        return Qc(a, function() {
            return new kh(a, a.l)
        })
    };
    ph = function(a, b, c) {
        var d = mh(b, c, void 0, !0),
            e = d.slotId;
        d = d.Wa;
        if (!e || !d) return Cc().M(nh("PubAdsService.definePassback", [b, c])), null;
        E(d, 17, !0);
        a.Fa(e, d);
        return {
            Nc: lh(new oh(e, a)),
            Wa: d
        }
    };
    th = function() {
        var a = _.qh(rh);
        return Qc(a, function() {
            return new sh(a)
        })
    };
    vh = function(a) {
        return !!Ie(uh, function(b) {
            return b === a
        })
    };
    yh = function(a, b, c) {
        c = _.qh(wh).add(a, [1, 1], {
            lb: c,
            format: b
        });
        a = c.slotId;
        c = c.Wa;
        if (a && c) {
            if (5 === b && _.v(xh)) return null;
            E(c, 15, b);
            _.Bg(a, function() {
                var d = window,
                    e = od(b);
                if (null != e) {
                    d = _.pd(d);
                    var f = d.adCount && d.adCount[e];
                    f && (d.adCount[e] = f - 1)
                }
            })
        }
        return null !== a && void 0 !== a ? a : null
    };
    Ch = function() {
        var a = window,
            b = zh.N().j,
            c;
        if (a === a.top)
            for (var d = {}, e = _.G(_.r(Ah, "entries").call(Ah)), f = e.next(); !f.done; d = {
                    gb: d.gb,
                    Vb: d.Vb
                }, f = e.next()) f = _.G(f.value), d.gb = f.next().value, d.Vb = f.next().value, (J = null !== (c = a.location.hash) && void 0 !== c ? c : "", _.r(J, "includes")).call(J, "gam" + d.gb + "Demo") && rc(789, function(g) {
                return function() {
                    window.console && window.console.warn && window.console.warn("GPT - Demo " + g.gb + " ENABLED");
                    var h = Dg().defineOutOfPageSlot("/6499/example/" + g.gb.toLowerCase(), g.Vb);
                    h && (h.addService(Dg().pubads()), Bh(a.document, kc(790, function() {
                        Dg().enableServices();
                        Dg().display(h);
                        x(b, 4) && Dg().pubads().refresh([h])
                    })))
                }
            }(d))
    };
    Dh = function(a) {
        var b = function() {
            return a.Reflect.construct(a.HTMLElement, [], this.constructor)
        };
        b.prototype = a.HTMLElement.prototype;
        b.prototype.constructor = b;
        _.r(Object, "setPrototypeOf").call(Object, b, a.HTMLElement);
        return b
    };
    Nh = function() {
        var a = window;
        var b = void 0 === b ? Fd : b;
        var c;
        if (a.customElements && null !== (c = a.Reflect) && void 0 !== c && c.construct && !a.customElements.get("google-product-ad")) {
            var d = Dh(a),
                e = function() {
                    return d.apply(this, arguments) || this
                };
            _.N(e, d);
            e.prototype.connectedCallback = function() {
                var f = this.dataset.rendering;
                if (f) {
                    try {
                        var g = Eh(Fh, Gh(f))
                    } catch (k) {}
                    if (null === g || void 0 === g ? 0 : of (g, 1)) {
                        f = Hh(Ih(Fb(new Jh, 4, 1), 7), Pb());
                        g = M(g, Kh, 1);
                        var h = g = Db(f, 5, g)
                    } else Cc().error(Lh("invalid data-rendering attribute"))
                } else Cc().error(Lh("missing data-rendering attribute"));
                (g = h) && b(Mh(window, g))
            };
            a.customElements.define("google-product-ad", e)
        }
    };
    Oh = function(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    };
    Ph = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };
    Qh = function(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    };
    Rh = Qh(this);
    Sh = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
    D = {};
    Th = {};
    _.r = function(a, b) {
        var c = Th[b];
        if (null == c) return a[b];
        c = a[c];
        return void 0 !== c ? c : a[b]
    };
    Uh = function(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = 1 === d.length;
            var e = d[0],
                f;!a && e in D ? f = D : f = Rh;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = Sh && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? Ph(D, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (void 0 === Th[d] && (a = 1E9 * Math.random() >>> 0, Th[d] = Sh ? Rh.Symbol(d) : "$jscp$" + a + "$" + d), Ph(f, Th[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    };
    Uh("Symbol", function(a) {
        if (a) return a;
        var b = function(f, g) {
            this.j = f;
            Ph(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        };
        b.prototype.toString = function() {
            return this.j
        };
        var c = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            d = 0,
            e = function(f) {
                if (this instanceof e) throw new TypeError("Symbol is not a constructor");
                return new b(c + (f || "") + "_" + d++, f)
            };
        return e
    }, "es6");
    Uh("Symbol.iterator", function(a) {
        if (a) return a;
        a = (0, D.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = Rh[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && Ph(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return Vh(Oh(this))
                }
            })
        }
        return a
    }, "es6");
    Vh = function(a) {
        a = {
            next: a
        };
        a[_.r(D.Symbol, "iterator")] = function() {
            return this
        };
        return a
    };
    Wh = function(a) {
        return a.raw = a
    };
    _.G = function(a) {
        var b = "undefined" != typeof D.Symbol && _.r(D.Symbol, "iterator") && a[_.r(D.Symbol, "iterator")];
        return b ? b.call(a) : {
            next: Oh(a)
        }
    };
    Vf = function(a) {
        for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
        return c
    };
    _.ec = function(a) {
        return a instanceof Array ? a : Vf(_.G(a))
    };
    Xh = "function" == typeof Object.create ? Object.create : function(a) {
        var b = function() {};
        b.prototype = a;
        return new b
    };
    Yh = function() {
        function a() {
            function c() {}
            new c;
            _.r(D.Reflect, "construct").call(D.Reflect, c, [], function() {});
            return new c instanceof c
        }
        if (Sh && "undefined" != typeof D.Reflect && _.r(D.Reflect, "construct")) {
            if (a()) return _.r(D.Reflect, "construct");
            var b = _.r(D.Reflect, "construct");
            return function(c, d, e) {
                c = b(c, d);
                e && _.r(D.Reflect, "setPrototypeOf").call(D.Reflect, c, e.prototype);
                return c
            }
        }
        return function(c, d, e) {
            void 0 === e && (e = c);
            e = Xh(e.prototype || Object.prototype);
            return Function.prototype.apply.call(c, e, d) || e
        }
    }();
    if (Sh && "function" == typeof _.r(Object, "setPrototypeOf")) Zh = _.r(Object, "setPrototypeOf");
    else {
        var $h;
        a: {
            var ai = {
                    a: !0
                },
                bi = {};
            try {
                bi.__proto__ = ai;
                $h = bi.a;
                break a
            } catch (a) {}
            $h = !1
        }
        Zh = $h ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    ci = Zh;
    _.N = function(a, b) {
        a.prototype = Xh(b.prototype);
        a.prototype.constructor = a;
        if (ci) ci(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.df = b.prototype
    };
    di = function() {
        this.D = !1;
        this.A = null;
        this.l = void 0;
        this.j = 1;
        this.o = this.H = 0;
        this.m = null
    };
    ei = function(a) {
        if (a.D) throw new TypeError("Generator is already running");
        a.D = !0
    };
    di.prototype.G = function(a) {
        this.l = a
    };
    var fi = function(a, b) {
        a.m = {
            Fc: b,
            yd: !0
        };
        a.j = a.H || a.o
    };
    di.prototype.return = function(a) {
        this.m = {
            return: a
        };
        this.j = this.o
    };
    var C = function(a, b, c) {
            a.j = c;
            return {
                value: b
            }
        },
        gi = function(a) {
            a.j = 0
        },
        Ad = function(a, b) {
            a.j = b;
            a.H = 0
        },
        Bd = function(a) {
            a.H = 0;
            var b = a.m.Fc;
            a.m = null;
            return b
        },
        hi = function(a) {
            this.j = new di;
            this.l = a
        },
        ki = function(a, b) {
            ei(a.j);
            var c = a.j.A;
            if (c) return ii(a, "return" in c ? c["return"] : function(d) {
                return {
                    value: d,
                    done: !0
                }
            }, b, a.j.return);
            a.j.return(b);
            return ji(a)
        },
        ii = function(a, b, c, d) {
            try {
                var e = b.call(a.j.A, c);
                if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
                if (!e.done) return a.j.D = !1, e;
                var f = e.value
            } catch (g) {
                return a.j.A = null, fi(a.j, g), ji(a)
            }
            a.j.A = null;
            d.call(a.j, f);
            return ji(a)
        },
        ji = function(a) {
            for (; a.j.j;) try {
                var b = a.l(a.j);
                if (b) return a.j.D = !1, {
                    value: b.value,
                    done: !1
                }
            } catch (c) {
                a.j.l = void 0, fi(a.j, c)
            }
            a.j.D = !1;
            if (a.j.m) {
                b = a.j.m;
                a.j.m = null;
                if (b.yd) throw b.Fc;
                return {
                    value: b.return,
                    done: !0
                }
            }
            return {
                value: void 0,
                done: !0
            }
        },
        li = function(a) {
            this.next = function(b) {
                ei(a.j);
                a.j.A ? b = ii(a, a.j.A.next, b, a.j.G) : (a.j.G(b), b = ji(a));
                return b
            };
            this.throw = function(b) {
                ei(a.j);
                a.j.A ? b = ii(a, a.j.A["throw"], b, a.j.G) : (fi(a.j, b), b = ji(a));
                return b
            };
            this.return = function(b) {
                return ki(a, b)
            };
            this[_.r(D.Symbol, "iterator")] = function() {
                return this
            }
        },
        B = function(a, b) {
            b = new li(new hi(b));
            ci && a.prototype && ci(b, a.prototype);
            return b
        },
        mi = function(a) {
            function b(d) {
                return a.next(d)
            }

            function c(d) {
                return a.throw(d)
            }
            return new D.Promise(function(d, e) {
                function f(g) {
                    g.done ? d(g.value) : D.Promise.resolve(g.value).then(b, c).then(f, e)
                }
                f(a.next())
            })
        },
        ni = function(a) {
            return mi(new li(new hi(a)))
        };
    Uh("Reflect", function(a) {
        return a ? a : {}
    }, "es6");
    Uh("Reflect.construct", function() {
        return Yh
    }, "es6");
    Uh("Reflect.setPrototypeOf", function(a) {
        return a ? a : ci ? function(b, c) {
            try {
                return ci(b, c), !0
            } catch (d) {
                return !1
            }
        } : null
    }, "es6");
    Uh("Promise", function(a) {
        function b() {
            this.j = null
        }

        function c(g) {
            return g instanceof e ? g : new e(function(h) {
                h(g)
            })
        }
        if (a) return a;
        b.prototype.l = function(g) {
            if (null == this.j) {
                this.j = [];
                var h = this;
                this.A(function() {
                    h.H()
                })
            }
            this.j.push(g)
        };
        var d = Rh.setTimeout;
        b.prototype.A = function(g) {
            d(g, 0)
        };
        b.prototype.H = function() {
            for (; this.j && this.j.length;) {
                var g = this.j;
                this.j = [];
                for (var h = 0; h < g.length; ++h) {
                    var k = g[h];
                    g[h] = null;
                    try {
                        k()
                    } catch (l) {
                        this.m(l)
                    }
                }
            }
            this.j = null
        };
        b.prototype.m = function(g) {
            this.A(function() {
                throw g;
            })
        };
        var e = function(g) {
            this.l = 0;
            this.A = void 0;
            this.j = [];
            this.G = !1;
            var h = this.m();
            try {
                g(h.resolve, h.reject)
            } catch (k) {
                h.reject(k)
            }
        };
        e.prototype.m = function() {
            function g(l) {
                return function(m) {
                    k || (k = !0, l.call(h, m))
                }
            }
            var h = this,
                k = !1;
            return {
                resolve: g(this.I),
                reject: g(this.H)
            }
        };
        e.prototype.I = function(g) {
            if (g === this) this.H(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof e) this.K(g);
            else {
                a: switch (typeof g) {
                    case "object":
                        var h = null != g;
                        break a;
                    case "function":
                        h = !0;
                        break a;
                    default:
                        h = !1
                }
                h ? this.fa(g) : this.D(g)
            }
        };
        e.prototype.fa = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (k) {
                this.H(k);
                return
            }
            "function" == typeof h ? this.O(h, g) : this.D(g)
        };
        e.prototype.H = function(g) {
            this.o(2, g)
        };
        e.prototype.D = function(g) {
            this.o(1, g)
        };
        e.prototype.o = function(g, h) {
            if (0 != this.l) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.l);
            this.l = g;
            this.A = h;
            2 === this.l && this.V();
            this.B()
        };
        e.prototype.V = function() {
            var g = this;
            d(function() {
                if (g.F()) {
                    var h = Rh.console;
                    "undefined" !== typeof h && h.error(g.A)
                }
            }, 1)
        };
        e.prototype.F = function() {
            if (this.G) return !1;
            var g = Rh.CustomEvent,
                h = Rh.Event,
                k = Rh.dispatchEvent;
            if ("undefined" === typeof k) return !0;
            "function" === typeof g ? g = new g("unhandledrejection", {
                cancelable: !0
            }) : "function" === typeof h ? g = new h("unhandledrejection", {
                cancelable: !0
            }) : (g = Rh.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
            g.promise = this;
            g.reason = this.A;
            return k(g)
        };
        e.prototype.B = function() {
            if (null != this.j) {
                for (var g = 0; g < this.j.length; ++g) f.l(this.j[g]);
                this.j = null
            }
        };
        var f = new b;
        e.prototype.K = function(g) {
            var h = this.m();
            g.Db(h.resolve, h.reject)
        };
        e.prototype.O = function(g, h) {
            var k = this.m();
            try {
                g.call(h, k.resolve, k.reject)
            } catch (l) {
                k.reject(l)
            }
        };
        e.prototype.then = function(g, h) {
            function k(p, u) {
                return "function" == typeof p ? function(t) {
                    try {
                        l(p(t))
                    } catch (y) {
                        m(y)
                    }
                } : u
            }
            var l, m, n = new e(function(p, u) {
                l = p;
                m = u
            });
            this.Db(k(g, l), k(h, m));
            return n
        };
        e.prototype.catch = function(g) {
            return this.then(void 0, g)
        };
        e.prototype.Db = function(g, h) {
            function k() {
                switch (l.l) {
                    case 1:
                        g(l.A);
                        break;
                    case 2:
                        h(l.A);
                        break;
                    default:
                        throw Error("Unexpected state: " + l.l);
                }
            }
            var l = this;
            null == this.j ? f.l(k) : this.j.push(k);
            this.G = !0
        };
        e.resolve = c;
        e.reject = function(g) {
            return new e(function(h, k) {
                k(g)
            })
        };
        e.race = function(g) {
            return new e(function(h, k) {
                for (var l = _.G(g), m = l.next(); !m.done; m = l.next()) c(m.value).Db(h, k)
            })
        };
        e.all = function(g) {
            var h = _.G(g),
                k = h.next();
            return k.done ? c([]) : new e(function(l, m) {
                function n(t) {
                    return function(y) {
                        p[t] = y;
                        u--;
                        0 == u && l(p)
                    }
                }
                var p = [],
                    u = 0;
                do p.push(void 0), u++, c(k.value).Db(n(p.length - 1), m), k = h.next(); while (!k.done)
            })
        };
        return e
    }, "es6");
    Uh("Object.setPrototypeOf", function(a) {
        return a || ci
    }, "es6");
    var oi = function(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        },
        pi = Sh && "function" == typeof _.r(Object, "assign") ? _.r(Object, "assign") : function(a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c];
                if (d)
                    for (var e in d) oi(d, e) && (a[e] = d[e])
            }
            return a
        };
    Uh("Object.assign", function(a) {
        return a || pi
    }, "es6");
    Uh("WeakMap", function(a) {
        function b() {}

        function c(g) {
            var h = typeof g;
            return "object" === h && null !== g || "function" === h
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var g = Object.seal({}),
                        h = Object.seal({}),
                        k = new a([
                            [g, 2],
                            [h, 3]
                        ]);
                    if (2 != k.get(g) || 3 != k.get(h)) return !1;
                    k.delete(g);
                    k.set(h, 4);
                    return !k.has(g) && 4 == k.get(h)
                } catch (l) {
                    return !1
                }
            }()) return a;
        var d = "$jscomp_hidden_" + Math.random(),
            e = 0,
            f = function(g) {
                this.j = (e += Math.random() + 1).toString();
                if (g) {
                    g = _.G(g);
                    for (var h; !(h = g.next()).done;) h = h.value, this.set(h[0], h[1])
                }
            };
        f.prototype.set = function(g, h) {
            if (!c(g)) throw Error("Invalid WeakMap key");
            if (!oi(g, d)) {
                var k = new b;
                Ph(g, d, {
                    value: k
                })
            }
            if (!oi(g, d)) throw Error("WeakMap key fail: " + g);
            g[d][this.j] = h;
            return this
        };
        f.prototype.get = function(g) {
            return c(g) && oi(g, d) ? g[d][this.j] : void 0
        };
        f.prototype.has = function(g) {
            return c(g) && oi(g, d) && oi(g[d], this.j)
        };
        f.prototype.delete = function(g) {
            return c(g) && oi(g, d) && oi(g[d], this.j) ? delete g[d][this.j] : !1
        };
        return f
    }, "es6");
    Uh("Map", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !_.r(a.prototype, "entries") || "function" != typeof Object.seal) return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        k = new a(_.G([
                            [h, "s"]
                        ]));
                    if ("s" != k.get(h) || 1 != k.size || k.get({
                            x: 4
                        }) || k.set({
                            x: 4
                        }, "t") != k || 2 != k.size) return !1;
                    var l = _.r(k, "entries").call(k),
                        m = l.next();
                    if (m.done || m.value[0] != h || "s" != m.value[1]) return !1;
                    m = l.next();
                    return m.done || 4 != m.value[0].x || "t" != m.value[1] || !l.next().done ? !1 : !0
                } catch (n) {
                    return !1
                }
            }()) return a;
        var b = new D.WeakMap,
            c = function(h) {
                this.l = {};
                this.j = f();
                this.size = 0;
                if (h) {
                    h = _.G(h);
                    for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
                }
            };
        c.prototype.set = function(h, k) {
            h = 0 === h ? 0 : h;
            var l = d(this, h);
            l.list || (l.list = this.l[l.id] = []);
            l.pa ? l.pa.value = k : (l.pa = {
                next: this.j,
                Qa: this.j.Qa,
                head: this.j,
                key: h,
                value: k
            }, l.list.push(l.pa), this.j.Qa.next = l.pa, this.j.Qa = l.pa, this.size++);
            return this
        };
        c.prototype.delete = function(h) {
            h = d(this, h);
            return h.pa && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.l[h.id], h.pa.Qa.next = h.pa.next, h.pa.next.Qa = h.pa.Qa, h.pa.head = null, this.size--, !0) : !1
        };
        c.prototype.clear = function() {
            this.l = {};
            this.j = this.j.Qa = f();
            this.size = 0
        };
        c.prototype.has = function(h) {
            return !!d(this, h).pa
        };
        c.prototype.get = function(h) {
            return (h = d(this, h).pa) && h.value
        };
        c.prototype.entries = function() {
            return e(this, function(h) {
                return [h.key, h.value]
            })
        };
        c.prototype.keys = function() {
            return e(this, function(h) {
                return h.key
            })
        };
        c.prototype.values = function() {
            return e(this, function(h) {
                return h.value
            })
        };
        c.prototype.forEach = function(h, k) {
            for (var l = _.r(this, "entries").call(this), m; !(m = l.next()).done;) m = m.value, h.call(k, m[1], m[0], this)
        };
        c.prototype[_.r(D.Symbol, "iterator")] = _.r(c.prototype, "entries");
        var d = function(h, k) {
                var l = k && typeof k;
                "object" == l || "function" == l ? b.has(k) ? l = b.get(k) : (l = "" + ++g, b.set(k, l)) : l = "p_" + k;
                var m = h.l[l];
                if (m && oi(h.l, l))
                    for (h = 0; h < m.length; h++) {
                        var n = m[h];
                        if (k !== k && n.key !== n.key || k === n.key) return {
                            id: l,
                            list: m,
                            index: h,
                            pa: n
                        }
                    }
                return {
                    id: l,
                    list: m,
                    index: -1,
                    pa: void 0
                }
            },
            e = function(h, k) {
                var l = h.j;
                return Vh(function() {
                    if (l) {
                        for (; l.head != h.j;) l = l.Qa;
                        for (; l.next != l.head;) return l = l.next, {
                            done: !1,
                            value: k(l)
                        };
                        l = null
                    }
                    return {
                        done: !0,
                        value: void 0
                    }
                })
            },
            f = function() {
                var h = {};
                return h.Qa = h.next = h.head = h
            },
            g = 0;
        return c
    }, "es6");
    var qi = function(a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    };
    Uh("String.prototype.endsWith", function(a) {
        return a ? a : function(b, c) {
            var d = qi(this, b, "endsWith");
            void 0 === c && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var e = b.length; 0 < e && 0 < c;)
                if (d[--c] != b[--e]) return !1;
            return 0 >= e
        }
    }, "es6");
    var ri = function(a, b, c) {
        a instanceof String && (a = String(a));
        for (var d = a.length, e = 0; e < d; e++) {
            var f = a[e];
            if (b.call(c, f, e, a)) return {
                i: e,
                Zc: f
            }
        }
        return {
            i: -1,
            Zc: void 0
        }
    };
    Uh("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            return ri(this, b, c).Zc
        }
    }, "es6");
    Uh("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = qi(this, b, "startsWith"),
                e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e;)
                if (d[c++] != b[g++]) return !1;
            return g >= f
        }
    }, "es6");
    var si = function(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[_.r(D.Symbol, "iterator")] = function() {
            return e
        };
        return e
    };
    Uh("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return si(this, function(b, c) {
                return [b, c]
            })
        }
    }, "es6");
    Uh("Array.prototype.findIndex", function(a) {
        return a ? a : function(b, c) {
            return ri(this, b, c).i
        }
    }, "es6");
    Uh("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) oi(b, d) && c.push([d, b[d]]);
            return c
        }
    }, "es8");
    Uh("Set", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !_.r(a.prototype, "entries") || "function" != typeof Object.seal) return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(_.G([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                            x: 4
                        }) != d || 2 != d.size) return !1;
                    var e = _.r(d, "entries").call(d),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }()) return a;
        var b = function(c) {
            this.j = new D.Map;
            if (c) {
                c = _.G(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.j.size
        };
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.j.set(c, c);
            this.size = this.j.size;
            return this
        };
        b.prototype.delete = function(c) {
            c = this.j.delete(c);
            this.size = this.j.size;
            return c
        };
        b.prototype.clear = function() {
            this.j.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.j.has(c)
        };
        b.prototype.entries = function() {
            return _.r(this.j, "entries").call(this.j)
        };
        b.prototype.values = function() {
            return _.r(this.j, "values").call(this.j)
        };
        b.prototype.keys = _.r(b.prototype, "values");
        b.prototype[_.r(D.Symbol, "iterator")] = _.r(b.prototype, "values");
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.j.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    }, "es6");
    Uh("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = null != c ? c : function(h) {
                return h
            };
            var e = [],
                f = "undefined" != typeof D.Symbol && _.r(D.Symbol, "iterator") && b[_.r(D.Symbol, "iterator")];
            if ("function" == typeof f) {
                b = f.call(b);
                for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++))
            } else
                for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
            return e
        }
    }, "es6");
    Uh("Number.isFinite", function(a) {
        return a ? a : function(b) {
            return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b
        }
    }, "es6");
    Uh("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return si(this, function(b) {
                return b
            })
        }
    }, "es6");
    Uh("Array.prototype.values", function(a) {
        return a ? a : function() {
            return si(this, function(b, c) {
                return c
            })
        }
    }, "es8");
    Uh("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    }, "es6");
    Uh("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || _.r(Object, "is").call(Object, f, b)) return !0
            }
            return !1
        }
    }, "es7");
    Uh("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== qi(this, b, "includes").indexOf(b, c || 0)
        }
    }, "es6");
    Uh("Number.isInteger", function(a) {
        return a ? a : function(b) {
            return _.r(Number, "isFinite").call(Number, b) ? b === Math.floor(b) : !1
        }
    }, "es6");
    Uh("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) oi(b, d) && c.push(b[d]);
            return c
        }
    }, "es8");
    Uh("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return "number" === typeof b && isNaN(b)
        }
    }, "es6");
    _.F = this || self;
    ti = function() {};
    ui = function(a) {
        a.Da = void 0;
        a.N = function() {
            return a.Da ? a.Da : a.Da = new a
        }
    };
    qa = function(a) {
        var b = typeof a;
        b = "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
        return "array" == b || "object" == b && "number" == typeof a.length
    };
    _.ia = function(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    };
    ka = function(a) {
        return Object.prototype.hasOwnProperty.call(a, vi) && a[vi] || (a[vi] = ++wi)
    };
    vi = "closure_uid_" + (1E9 * Math.random() >>> 0);
    wi = 0;
    xi = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    };
    yi = function(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    };
    _.zi = function(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? _.zi = xi : _.zi = yi;
        return _.zi.apply(null, arguments)
    };
    _.Ai = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    };
    Ff = function() {
        return Date.now()
    };
    var A = function(a, b) {
        var c = void 0;
        return new(c || (c = D.Promise))(function(d, e) {
            function f(k) {
                try {
                    h(b.next(k))
                } catch (l) {
                    e(l)
                }
            }

            function g(k) {
                try {
                    h(b["throw"](k))
                } catch (l) {
                    e(l)
                }
            }

            function h(k) {
                k.done ? d(k.value) : (new c(function(l) {
                    l(k.value)
                })).then(f, g)
            }
            h((b = b.apply(a, void 0)).next())
        })
    };
    var Bi;
    var Ci, Di, Ei, Wc, Gi;
    Ci = function() {
        return !0
    };
    Di = function() {
        return null
    };
    Ei = function(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    };
    Wc = function(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    _.Fi = function(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    };
    Gi = function(a, b, c) {
        var d = 0,
            e = !1,
            f = [],
            g = function() {
                d = 0;
                e && (e = !1, h())
            },
            h = function() {
                d = _.F.setTimeout(g, b);
                var k = f;
                f = [];
                a.apply(c, k)
            };
        return function(k) {
            f = arguments;
            d ? e = !0 : h()
        }
    };
    var Ii;
    _.da = function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    };
    _.Hi = function(a, b) {
        Array.prototype.forEach.call(a, b, void 0)
    };
    _.re = function(a, b) {
        return Array.prototype.filter.call(a, b, void 0)
    };
    _.pe = function(a, b) {
        return Array.prototype.map.call(a, b, void 0)
    };
    Ii = function(a, b) {
        return Array.prototype.reduce.call(a, b, 0)
    };
    _.Ji = function(a, b) {
        return Array.prototype.some.call(a, b, void 0)
    };
    var Aa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    var Mi = function(a, b) {
        this.j = a === Ki && b || "";
        this.l = Li
    };
    Mi.prototype.bb = !0;
    Mi.prototype.$a = function() {
        return this.j
    };
    var Ni = function(a) {
            return a instanceof Mi && a.constructor === Mi && a.l === Li ? a.j : "type_error:Const"
        },
        Oi = function(a) {
            return new Mi(Ki, a)
        },
        Li = {},
        Ki = {};
    var Pi = {},
        Qi = function(a, b) {
            this.j = b === Pi ? a : "";
            this.bb = !0
        };
    Qi.prototype.$a = function() {
        return this.j.toString()
    };
    Qi.prototype.toString = function() {
        return this.j.toString()
    };
    var Si = function(a, b) {
        this.j = b === Ri ? a : ""
    };
    Si.prototype.bb = !0;
    Si.prototype.$a = function() {
        return this.j.toString()
    };
    var Xi = function(a, b) {
        a = Ti.exec(Ui(a));
        var c = a[3] || "";
        return Vi(a[1] + Wi("?", a[2] || "", b) + Wi("#", c, void 0))
    };
    Si.prototype.toString = function() {
        return this.j + ""
    };
    var Ui = function(a) {
            return db(a).toString()
        },
        db = function(a) {
            return a instanceof Si && a.constructor === Si ? a.j : "type_error:TrustedResourceUrl"
        },
        Dd = function(a, b) {
            var c = Ni(a);
            if (!Yi.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
            a = c.replace(Zi, function(d, e) {
                if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
                d = b[e];
                return d instanceof Mi ? Ni(d) : encodeURIComponent(String(d))
            });
            return Vi(a)
        },
        Zi = /%{(\w+)}/g,
        Yi = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,
        Ti = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        Ri = {},
        Vi = function(a) {
            return new Si(a, Ri)
        },
        Wi = function(a, b, c) {
            if (null == c) return b;
            if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
            for (var d in c)
                if (Object.prototype.hasOwnProperty.call(c, d)) {
                    var e = c[d];
                    e = Array.isArray(e) ? e : [e];
                    for (var f = 0; f < e.length; f++) {
                        var g = e[f];
                        null != g && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
                    }
                }
            return b
        };
    var $i = function(a, b) {
            var c = a.length - b.length;
            return 0 <= c && a.indexOf(b, c) == c
        },
        aj = function(a) {
            return /^[\s\xa0]*$/.test(a)
        },
        bj = function(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        },
        cj = /&/g,
        dj = /</g,
        ej = />/g,
        fj = /"/g,
        gj = /'/g,
        hj = /\x00/g,
        ij = /[\x00&<>"']/,
        ug = function(a, b) {
            var c = 0;
            a = bj(String(a)).split(".");
            b = bj(String(b)).split(".");
            for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
                var f = a[e] || "",
                    g = b[e] || "";
                do {
                    f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    if (0 == f[0].length && 0 == g[0].length) break;
                    c = jj(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || jj(0 == f[2].length, 0 == g[2].length) || jj(f[2], g[2]);
                    f = f[3];
                    g = g[3]
                } while (0 == c)
            }
            return c
        },
        jj = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };
    var lj = function(a, b) {
            this.j = b === kj ? a : ""
        },
        nj, kj;
    lj.prototype.bb = !0;
    lj.prototype.$a = function() {
        return this.j.toString()
    };
    lj.prototype.toString = function() {
        return this.j.toString()
    };
    _.mj = function(a) {
        return a instanceof lj && a.constructor === lj ? a.j : "type_error:SafeUrl"
    };
    nj = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    kj = {};
    var oj;
    a: {
        var pj = _.F.navigator;
        if (pj) {
            var qj = pj.userAgent;
            if (qj) {
                oj = qj;
                break a
            }
        }
        oj = ""
    }
    var rj = function(a) {
            return -1 != oj.indexOf(a)
        },
        sj = function(a) {
            for (var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d; d = b.exec(a);) c.push([d[1], d[2], d[3] || void 0]);
            return c
        };
    var tj = function() {
            return rj("Trident") || rj("MSIE")
        },
        wg = function() {
            return rj("Firefox") || rj("FxiOS")
        },
        tg = function() {
            return rj("Safari") && !(uj() || rj("Coast") || rj("Opera") || rj("Edge") || rj("Edg/") || rj("OPR") || wg() || rj("Silk") || rj("Android"))
        },
        uj = function() {
            return (rj("Chrome") || rj("CriOS")) && !rj("Edge")
        },
        vg = function() {
            function a(e) {
                e = ca(e, d);
                return c[e] || ""
            }
            var b = oj;
            if (tj()) return vj(b);
            b = sj(b);
            var c = {};
            b.forEach(function(e) {
                c[e[0]] = e[1]
            });
            var d = _.Ai(ya, c);
            return rj("Opera") ? a(["Version", "Opera"]) : rj("Edge") ? a(["Edge"]) : rj("Edg/") ? a(["Edg"]) : uj() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (b = b[2]) && b[1] || ""
        },
        vj = function(a) {
            var b = /rv: *([\d\.]*)/.exec(a);
            if (b && b[1]) return b[1];
            b = "";
            var c = /MSIE +([\d\.]+)/.exec(a);
            if (c && c[1])
                if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1])
                    if (a && a[1]) switch (a[1]) {
                        case "4.0":
                            b = "8.0";
                            break;
                        case "5.0":
                            b = "9.0";
                            break;
                        case "6.0":
                            b = "10.0";
                            break;
                        case "7.0":
                            b = "11.0"
                    } else b = "7.0";
                    else b = c[1];
            return b
        };
    var zj;
    _.xj = function(a, b, c) {
        this.j = c === _.wj ? a : ""
    };
    _.xj.prototype.bb = !0;
    _.xj.prototype.$a = function() {
        return this.j.toString()
    };
    _.xj.prototype.toString = function() {
        return this.j.toString()
    };
    _.yj = function(a) {
        return a instanceof _.xj && a.constructor === _.xj ? a.j : "type_error:SafeHtml"
    };
    _.wj = {};
    zj = new _.xj(_.F.trustedTypes && _.F.trustedTypes.emptyHTML || "", 0, _.wj);
    var Bj, Dj, Ej, Cj;
    _.Aj = Wc(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = _.yj(zj);
        return !b.parentElement
    });
    Bj = function(a, b) {
        a.write(_.yj(b))
    };
    Dj = function(a, b, c) {
        a.rel = c; - 1 != c.toLowerCase().indexOf("stylesheet") ? (a.href = Ui(b), (b = Cj('style[nonce],link[rel="stylesheet"][nonce]', a.ownerDocument && a.ownerDocument.defaultView)) && a.setAttribute("nonce", b)) : (b instanceof Si ? b = Ui(b) : b instanceof lj ? b = _.mj(b) : (b instanceof lj || (b = "object" == typeof b && b.bb ? b.$a() : String(b), nj.test(b) || (b = "about:invalid#zClosurez"), b = new lj(b, kj)), b = _.mj(b)), a.href = b)
    };
    Ej = /^[\w+/_-]+[=]{0,2}$/;
    Cj = function(a, b) {
        b = (b || _.F).document;
        return b.querySelector ? (a = b.querySelector(a)) && (a = a.nonce || a.getAttribute("nonce")) && Ej.test(a) ? a : "" : ""
    };
    var Fj, Gj, Hj, Ij, Jj, Lj;
    Fj = function(a) {
        ij.test(a) && (-1 != a.indexOf("&") && (a = a.replace(cj, "&amp;")), -1 != a.indexOf("<") && (a = a.replace(dj, "&lt;")), -1 != a.indexOf(">") && (a = a.replace(ej, "&gt;")), -1 != a.indexOf('"') && (a = a.replace(fj, "&quot;")), -1 != a.indexOf("'") && (a = a.replace(gj, "&#39;")), -1 != a.indexOf("\x00") && (a = a.replace(hj, "&#0;")));
        return a
    };
    Gj = String.prototype.repeat ? function(a, b) {
        return a.repeat(b)
    } : function(a, b) {
        return Array(b + 1).join(a)
    };
    Hj = function(a) {
        a = String(a);
        var b = a.indexOf("."); - 1 == b && (b = a.length);
        return Gj("0", Math.max(0, 2 - b)) + a
    };
    Ij = function() {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Ff()).toString(36)
    };
    Jj = 2147483648 * Math.random() | 0;
    _.Kj = function(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    };
    Lj = function(a) {
        return a.replace(/(^|[\s]+)([a-z])/g, function(b, c, d) {
            return c + d.toUpperCase()
        })
    };
    var Mj = "function" === typeof Uint8Array.prototype.slice,
        Ca = 0,
        Da = 0;
    var Nj = function() {
        this.j = new Uint8Array(64);
        this.l = 0
    };
    Nj.prototype.push = function(a) {
        if (!(this.l + 1 < this.j.length)) {
            var b = this.j;
            this.j = new Uint8Array(Math.ceil(1 + 2 * this.j.length));
            this.j.set(b)
        }
        this.j[this.l++] = a
    };
    Nj.prototype.length = function() {
        return this.l
    };
    Nj.prototype.end = function() {
        var a = this.j,
            b = this.l;
        this.l = 0;
        return Mj ? a.slice(0, b) : new Uint8Array(a.subarray(0, b))
    };
    var Oj = function(a) {
            for (var b = Ca, c = Da; 0 < c || 127 < b;) a.push(b & 127 | 128), b = (b >>> 7 | c << 25) >>> 0, c >>>= 7;
            a.push(b)
        },
        Pj = function(a, b) {
            for (; 127 < b;) a.push(b & 127 | 128), b >>>= 7;
            a.push(b)
        },
        Qj = function(a, b) {
            if (0 <= b) Pj(a, b);
            else {
                for (var c = 0; 9 > c; c++) a.push(b & 127 | 128), b >>= 7;
                a.push(1)
            }
        };
    var Rj = function() {
        return rj("iPhone") && !rj("iPod") && !rj("iPad")
    };
    var Sj = function(a) {
        Sj[" "](a);
        return a
    };
    Sj[" "] = ti;
    var Tj = function(a, b) {
            try {
                return Sj(a[b]), !0
            } catch (c) {}
            return !1
        },
        Xf = function(a, b, c, d) {
            d = d ? d(b) : b;
            return Object.prototype.hasOwnProperty.call(a, d) ? a[d] : a[d] = c(b)
        };
    var Uj, Wj, Xj, Yj, Zj, ak, bk, ck, dk, ek, fk, gk;
    Uj = rj("Opera");
    _.Vj = tj();
    Wj = rj("Edge");
    Xj = Wj || _.Vj;
    Yj = rj("Gecko") && !(-1 != oj.toLowerCase().indexOf("webkit") && !rj("Edge")) && !(rj("Trident") || rj("MSIE")) && !rj("Edge");
    Zj = -1 != oj.toLowerCase().indexOf("webkit") && !rj("Edge");
    ak = Zj && rj("Mobile");
    bk = rj("Android");
    ck = Rj();
    dk = rj("iPad");
    ek = rj("iPod");
    fk = function() {
        var a = _.F.document;
        return a ? a.documentMode : void 0
    };
    a: {
        var hk = "",
            ik = function() {
                var a = oj;
                if (Yj) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (Wj) return /Edge\/([\d\.]+)/.exec(a);
                if (_.Vj) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (Zj) return /WebKit\/(\S+)/.exec(a);
                if (Uj) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();ik && (hk = ik ? ik[1] : "");
        if (_.Vj) {
            var jk = fk();
            if (null != jk && jk > parseFloat(hk)) {
                gk = String(jk);
                break a
            }
        }
        gk = hk
    }
    var kk = gk,
        lk = {},
        mk = function(a) {
            return Xf(lk, a, function() {
                return 0 <= ug(kk, a)
            })
        },
        nk;
    if (_.F.document && _.Vj) {
        var ok = fk();
        nk = ok ? ok : parseInt(kk, 10) || void 0
    } else nk = void 0;
    var pk = nk;
    var qk = uj(),
        rk = tg() && !(Rj() || rj("iPad") || rj("iPod"));
    var sk = {},
        tk = null,
        uk = Yj || Zj && !rk || Uj || "function" == typeof _.F.btoa,
        Ka = function(a, b) {
            void 0 === b && (b = 0);
            vk();
            b = sk[b];
            for (var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0; e < a.length - 2; e += 3) {
                var g = a[e],
                    h = a[e + 1],
                    k = a[e + 2],
                    l = b[g >> 2];
                g = b[(g & 3) << 4 | h >> 4];
                h = b[(h & 15) << 2 | k >> 6];
                k = b[k & 63];
                c[f++] = l + g + h + k
            }
            l = 0;
            k = d;
            switch (a.length - e) {
                case 2:
                    l = a[e + 1], k = b[(l & 15) << 2] || d;
                case 1:
                    a = a[e], c[f] = b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
            }
            return c.join("")
        },
        wk = function(a, b) {
            if (uk && !b) a = _.F.btoa(a);
            else {
                for (var c = [], d = 0, e = 0; e < a.length; e++) {
                    var f = a.charCodeAt(e);
                    255 < f && (c[d++] = f & 255, f >>= 8);
                    c[d++] = f
                }
                a = Ka(c, b)
            }
            return a
        },
        Gh = function(a) {
            var b = "";
            xk(a, function(c) {
                b += String.fromCharCode(c)
            });
            return b
        },
        xk = function(a, b) {
            function c(k) {
                for (; d < a.length;) {
                    var l = a.charAt(d++),
                        m = tk[l];
                    if (null != m) return m;
                    if (!aj(l)) throw Error("Unknown base64 encoding at char: " + l);
                }
                return k
            }
            vk();
            for (var d = 0;;) {
                var e = c(-1),
                    f = c(0),
                    g = c(64),
                    h = c(64);
                if (64 === h && -1 === e) break;
                b(e << 2 | f >> 4);
                64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
            }
        },
        vk = function() {
            if (!tk) {
                tk = {};
                for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                    var d = a.concat(b[c].split(""));
                    sk[c] = d;
                    for (var e = 0; e < d.length; e++) {
                        var f = d[e];
                        void 0 === tk[f] && (tk[f] = e)
                    }
                }
            }
        };
    var xf = function() {
            this.A = [];
            this.l = 0;
            this.j = new Nj
        },
        yk = function(a, b) {
            Pj(a.j, 8 * b + 2);
            b = a.j.end();
            a.A.push(b);
            a.l += b.length;
            return {
                Ed: a.l,
                dd: a.A.length - 1
            }
        },
        zk = function(a, b) {
            var c = a.j.end();
            a.A.push(c);
            a.l += c.length;
            Pj(a.j, a.l + a.j.length() - b.Ed);
            c = a.j.end();
            a.l += c.length;
            a.A.splice(1 + b.dd, 0, c)
        },
        zf = function(a) {
            var b = a.l + a.j.length();
            if (0 === b) return new Uint8Array(0);
            b = new Uint8Array(b);
            for (var c = a.A, d = c.length, e = 0, f = 0; f < d; f++) {
                var g = c[f];
                0 !== g.length && (b.set(g, e), e += g.length)
            }
            c = a.j;
            d = c.l;
            0 !== d && (b.set(c.j.subarray(0, d), e), c.l = 0);
            a.A = [b];
            return b
        },
        Ak = function(a, b, c) {
            null != c && (Pj(a.j, 8 * b), Qj(a.j, c))
        },
        Bk = function(a, b, c) {
            null != c && (Pj(a.j, 8 * b), a = a.j, Ea(c), Oj(a))
        },
        Ck = function(a, b, c) {
            null != c && null != c && (Pj(a.j, 8 * b), a = a.j, Ea(c), Oj(a))
        },
        Dk = function(a, b, c) {
            null != c && (c = parseInt(c, 10), Pj(a.j, 8 * b), Qj(a.j, c))
        },
        Ek = function(a, b, c) {
            if (null != c) {
                b = yk(a, b);
                var d = a.j;
                d.length();
                for (var e = 0; e < c.length; e++) {
                    var f = c.charCodeAt(e);
                    if (128 > f) d.push(f);
                    else if (2048 > f) d.push(f >> 6 | 192), d.push(f & 63 | 128);
                    else if (65536 > f)
                        if (55296 <= f && 56319 >= f && e + 1 < c.length) {
                            var g = c.charCodeAt(e + 1);
                            56320 <= g && 57343 >= g && (f = 1024 * (f - 55296) + g - 56320 + 65536, d.push(f >> 18 | 240), d.push(f >> 12 & 63 | 128), d.push(f >> 6 & 63 | 128), d.push(f & 63 | 128), e++)
                        } else d.push(f >> 12 | 224), d.push(f >> 6 & 63 | 128), d.push(f & 63 | 128)
                }
                d.length();
                zk(a, b)
            }
        },
        Gk = function(a, b, c) {
            var d = Fk;
            null != c && (b = yk(a, b), d(c, a), zk(a, b))
        },
        Hk = function(a, b, c, d) {
            if (null != c)
                for (var e = 0; e < c.length; e++) {
                    var f = yk(a, b);
                    d(c[e], a);
                    zk(a, f)
                }
        };
    var Ha = "function" === typeof Uint8Array,
        Ik = {
            Bd: {
                value: !0,
                configurable: !0
            }
        },
        Ja = function(a) {
            Array.isArray(a) && !Object.isFrozen(a) && Object.defineProperties(a, Ik);
            return a
        };
    var Kk = function(a, b) {
        this.j = a;
        this.A = b;
        this.map = {};
        this.l = !0;
        if (0 < this.j.length) {
            for (a = 0; a < this.j.length; a++) {
                b = this.j[a];
                var c = b[0];
                this.map[c.toString()] = new Jk(c, b[1])
            }
            this.l = !0
        }
    };
    Kk.prototype.isFrozen = function() {
        return !1
    };
    Kk.prototype.za = function() {
        return Lk(this)
    };
    Kk.prototype.Wc = function() {
        return Lk(this)
    };
    var Lk = function(a) {
        if (a.l) {
            if (a.A) {
                var b = a.map,
                    c;
                for (c in b)
                    if (Object.prototype.hasOwnProperty.call(b, c)) {
                        var d = b[c].j;
                        d && d.za()
                    }
            }
        } else {
            a.j.length = 0;
            b = Mk(a);
            b.sort();
            for (c = 0; c < b.length; c++) {
                var e = a.map[b[c]];
                (d = e.j) && d.za();
                a.j.push([e.key, e.value])
            }
            a.l = !0
        }
        return a.j
    };
    aa = Kk.prototype;
    aa.entries = function() {
        var a = [],
            b = Mk(this);
        b.sort();
        for (var c = 0; c < b.length; c++) {
            var d = this.map[b[c]];
            a.push([d.key, Nk(this, d)])
        }
        return new Ok(a)
    };
    aa.keys = function() {
        var a = [],
            b = Mk(this);
        b.sort();
        for (var c = 0; c < b.length; c++) a.push(this.map[b[c]].key);
        return new Ok(a)
    };
    aa.values = function() {
        var a = [],
            b = Mk(this);
        b.sort();
        for (var c = 0; c < b.length; c++) a.push(Nk(this, this.map[b[c]]));
        return new Ok(a)
    };
    aa.forEach = function(a, b) {
        var c = Mk(this);
        c.sort();
        for (var d = 0; d < c.length; d++) {
            var e = this.map[c[d]];
            a.call(b, Nk(this, e), e.key, this)
        }
    };
    aa.set = function(a, b) {
        var c = new Jk(a);
        this.A ? (c.j = b, c.value = b.Wc()) : c.value = b;
        this.map[a.toString()] = c;
        this.l = !1;
        return this
    };
    var Nk = function(a, b) {
        return a.A ? (b.j || (b.j = new a.A(b.value), a.isFrozen() && null(b.j)), b.j) : b.value
    };
    Kk.prototype.get = function(a) {
        if (a = this.map[a.toString()]) return Nk(this, a)
    };
    Kk.prototype.has = function(a) {
        return a.toString() in this.map
    };
    var Mk = function(a) {
        a = a.map;
        var b = [],
            c;
        for (c in a) Object.prototype.hasOwnProperty.call(a, c) && b.push(c);
        return b
    };
    Kk.prototype[_.r(D.Symbol, "iterator")] = function() {
        return _.r(this, "entries").call(this)
    };
    var Jk = function(a, b) {
            this.key = a;
            this.value = b;
            this.j = void 0
        },
        Ok = function(a) {
            this.l = 0;
            this.j = a
        };
    Ok.prototype.next = function() {
        return this.l < this.j.length ? {
            done: !1,
            value: this.j[this.l++]
        } : {
            done: !0,
            value: void 0
        }
    };
    Ok.prototype[_.r(D.Symbol, "iterator")] = function() {
        return this
    };
    var O = function() {},
        Na, P = function(a, b, c, d) {
            a.j = null;
            Na && (b || (b = Na), Na = null);
            var e = a.constructor.messageId;
            b || (b = e ? [e] : []);
            a.m = e ? 0 : -1;
            a.l = b;
            a: {
                if (b = a.l.length)
                    if (--b, e = a.l[b], !(null === e || "object" != typeof e || Array.isArray(e) || Ha && e instanceof Uint8Array)) {
                        a.H = b - a.m;
                        a.A = e;
                        break a
                    }
                a.H = Number.MAX_VALUE
            }
            a.D = {};
            if (c)
                for (b = 0; b < c.length; b++)
                    if (e = c[b], e < a.H) {
                        e += a.m;
                        var f = a.l[e];
                        f ? Ja(f) : a.l[e] = Pk
                    } else Qk(a), (f = a.A[e]) ? Ja(f) : a.A[e] = Pk;
            if (d && d.length)
                for (c = 0; c < d.length; c++) Rk(a, d[c])
        },
        Pk = Object.freeze(Ja([])),
        Qk = function(a) {
            var b = a.H + a.m;
            a.l[b] || (a.A = a.l[b] = {})
        },
        I = function(a, b) {
            if (b < a.H) {
                b += a.m;
                var c = a.l[b];
                return c !== Pk ? c : a.l[b] = Ja([])
            }
            if (a.A) return c = a.A[b], c !== Pk ? c : a.A[b] = Ja([])
        },
        of = function(a, b) {
            return null != I(a, b)
        },
        Ud = function(a, b) {
            a = I(a, b);
            return null == a ? a : +a
        },
        x = function(a, b) {
            a = I(a, b);
            return null == a ? a : !!a
        },
        Sk = function(a, b) {
            var c = I(a, b);
            a.D || (a.D = {});
            if (!a.D[b]) {
                for (var d = 0; d < c.length; d++) c[d] = +c[d];
                a.D[b] = !0
            }
            return c
        },
        af = function(a, b, c) {
            a = I(a, b);
            return null == a ? c : a
        },
        Rg = function(a, b) {
            return af(a, b, 0)
        },
        ff = function(a, b) {
            return af(a, b, "")
        },
        Tk = function(a, b, c) {
            c = void 0 === c ? !1 : c;
            a = x(a, b);
            return null == a ? c : a
        },
        Uk = function(a, b, c) {
            c = void 0 === c ? 0 : c;
            a = Ud(a, b);
            return null == a ? c : a
        },
        Vk = function(a, b, c) {
            a.j || (a.j = {});
            if (b in a.j) return a.j[b];
            var d = I(a, b);
            d || (d = Ja([]), E(a, b, d));
            c = new Kk(d, c);
            return a.j[b] = c
        },
        E = function(a, b, c) {
            b < a.H ? a.l[b + a.m] = c : (Qk(a), a.A[b] = c);
            return a
        },
        Cb = function(a, b, c) {
            return E(a, b, Ja(c || []))
        },
        Wk = function(a, b, c) {
            return Ab(a, b, c, !1)
        },
        Fb = function(a, b, c) {
            return Ab(a, b, c, 0)
        },
        Ab = function(a, b, c, d) {
            c !== d ? E(a, b, c) : b < a.H ? a.l[b + a.m] = null : (Qk(a), delete a.A[b]);
            return a
        },
        uf = function(a, b, c) {
            I(a, b).push(c)
        },
        hc = function(a, b, c, d) {
            (c = Rk(a, c)) && c !== b && void 0 !== d && (a.j && c in a.j && (a.j[c] = void 0), E(a, c, void 0));
            return E(a, b, d)
        },
        Rk = function(a, b) {
            for (var c, d, e = 0; e < b.length; e++) {
                var f = b[e],
                    g = I(a, f);
                null != g && (c = f, d = g, E(a, f, void 0))
            }
            return c ? (E(a, c, d), c) : 0
        },
        M = function(a, b, c) {
            a.j || (a.j = {});
            if (!a.j[c]) {
                var d = I(a, c);
                d && (a.j[c] = new b(d))
            }
            return a.j[c]
        },
        L = function(a, b, c) {
            a.j || (a.j = {});
            if (!a.j[c]) {
                for (var d = I(a, c), e = [], f = 0; f < d.length; f++) e[f] = new b(d[f]);
                a.j[c] = e
            }
            b = a.j[c];
            b == Pk && (b = a.j[c] = []);
            return b
        },
        Db = function(a, b, c) {
            a.j || (a.j = {});
            var d = c ? c.za() : c;
            a.j[b] = c;
            return E(a, b, d)
        },
        Xk = function(a, b, c) {
            a.j || (a.j = {});
            c = c || [];
            for (var d = Ja([]), e = 0; e < c.length; e++) d[e] = c[e].za();
            a.j[b] = c;
            return E(a, b, d)
        },
        wf = function(a, b, c, d) {
            var e = L(a, d, b);
            c = c ? c : new d;
            a = I(a, b);
            e.push(c);
            a.push(c.za());
            return c
        },
        Yk = function(a) {
            if (a.j)
                for (var b in a.j)
                    if (Object.prototype.hasOwnProperty.call(a.j, b)) {
                        var c = a.j[b];
                        if (Array.isArray(c))
                            for (var d = 0; d < c.length; d++) c[d] && c[d].za();
                        else c && c.za()
                    }
        };
    O.prototype.za = function() {
        Yk(this);
        return this.l
    };
    var Zk = function(a) {
        Yk(a);
        return La(a.l)
    };
    O.prototype.Wc = function() {
        Yk(this);
        return this.l
    };
    var al = function(a) {
            return JSON.stringify(a.l && a.za(), $k)
        },
        $k = function(a, b) {
            switch (typeof b) {
                case "number":
                    return isNaN(b) || Infinity === b || -Infinity === b ? String(b) : b;
                case "object":
                    if (Ha && null != b && b instanceof Uint8Array) return Ka(b)
            }
            return b
        },
        Eh = function(a, b) {
            return Oa(a, b ? JSON.parse(b) : null)
        };
    var bl = document,
        cl = window;
    _.Pa = {};
    var Sa;
    var dl = function() {},
        Ua = function(a, b) {
            Qa(b);
            this.l = a
        };
    _.N(Ua, dl);
    Ua.prototype.toString = function() {
        return this.l.toString()
    };
    var el = function() {},
        Wa = function(a, b) {
            Qa(b);
            this.j = a
        };
    _.N(Wa, el);
    Wa.prototype.toString = function() {
        return this.j.toString()
    };
    _.fl = function() {};
    _.gl = function(a, b) {
        Qa(b);
        this.j = a
    };
    _.N(_.gl, _.fl);
    _.gl.prototype.toString = function() {
        return this.j
    };
    _.hl = new _.gl("about:invalid#zTSz", _.Pa);
    var cb = function() {},
        Za = function(a, b) {
            Qa(b);
            this.j = a
        };
    _.N(Za, cb);
    Za.prototype.toString = function() {
        return this.j.toString()
    };
    var il = function(a, b) {
        if (null !== a) {
            if ("script" === a.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeScript.");
            if ("style" === a.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeStyleSheet.");
        }
        if (b instanceof dl) {
            var c;
            if (null === (c = Ra()) || void 0 === c || !c.isHTML(b))
                if (b instanceof Ua) b = b.l;
                else throw Error("wrong type");
        } else b = _.yj(b);
        a.innerHTML = b
    };
    var wd = function(a, b) {
        a.src = eb(b);
        fb(a)
    };
    var jl = function(a, b) {
        var c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c
    };
    var gb;
    gb = Wc(function() {
        var a = !1;
        try {
            var b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
            _.F.addEventListener("test", null, b)
        } catch (c) {}
        return a
    });
    _.xd = function(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, ib(d)), !0) : !1
    };
    _.Yd = function(a, b, c, d) {
        return a.removeEventListener ? (a.removeEventListener(b, c, ib(d)), !0) : !1
    };
    var kl = _.Vj || Uj || Zj;
    _.ad = function(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    };
    _.ad.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    _.ad.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    _.ad.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    _.ll = function(a, b) {
        this.width = a;
        this.height = b
    };
    aa = _.ll.prototype;
    aa.aspectRatio = function() {
        return this.width / this.height
    };
    aa.isEmpty = function() {
        return !(this.width * this.height)
    };
    aa.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    aa.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    aa.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var ol, ql, pl, tl, vl, zl, ml;
    ol = function(a) {
        return a ? new ml(_.nl(a)) : Bi || (Bi = new ml)
    };
    ql = function(a, b) {
        wa(b, function(c, d) {
            c && "object" == typeof c && c.bb && (c = c.$a());
            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : pl.hasOwnProperty(d) ? a.setAttribute(pl[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
        })
    };
    pl = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };
    _.sl = function(a) {
        a = a.document;
        a = _.rl(a) ? a.documentElement : a.body;
        return new _.ll(a.clientWidth, a.clientHeight)
    };
    tl = function(a) {
        return a.scrollingElement ? a.scrollingElement : !Zj && _.rl(a) ? a.documentElement : a.body || a.documentElement
    };
    _.ul = function(a) {
        return a ? a.parentWindow || a.defaultView : window
    };
    vl = function(a, b, c) {
        function d(h) {
            h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
        }
        for (var e = 1; e < c.length; e++) {
            var f = c[e];
            if (!qa(f) || _.ia(f) && 0 < f.nodeType) d(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (_.ia(f)) {
                            var g = "function" == typeof f.item || "string" == typeof f.item;
                            break a
                        }
                        if ("function" === typeof f) {
                            g = "function" == typeof f.item;
                            break a
                        }
                    }
                    g = !1
                }
                _.Hi(g ? fa(f) : f, d)
            }
        }
    };
    _.wl = function(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    };
    _.rl = function(a) {
        return "CSS1Compat" == a.compatMode
    };
    _.xl = function(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    };
    _.yl = function(a) {
        var b;
        if (kl && !(_.Vj && mk("9") && !mk("10") && _.F.SVGElement && a instanceof _.F.SVGElement) && (b = a.parentElement)) return b;
        b = a.parentNode;
        return _.ia(b) && 1 == b.nodeType ? b : null
    };
    _.nl = function(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    };
    zl = function(a) {
        try {
            return a.contentWindow || (a.contentDocument ? _.ul(a.contentDocument) : null)
        } catch (b) {}
        return null
    };
    ml = function(a) {
        this.j = a || _.F.document || document
    };
    ml.prototype.append = function(a, b) {
        vl(_.nl(a), a, arguments)
    };
    ml.prototype.l = _.xl;
    var Al = function() {
        return rj("iPad") || rj("Android") && !rj("Mobile") || rj("Silk")
    };
    var Cl, Dl, El, zg;
    _.Bl = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
    Cl = function(a) {
        return a ? decodeURI(a) : a
    };
    Dl = function(a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++) Dl(a, String(b[d]), c);
        else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
    };
    El = /#|$/;
    zg = function(a, b) {
        var c = a.search(El);
        a: {
            var d = 0;
            for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
                var f = a.charCodeAt(d - 1);
                if (38 == f || 63 == f)
                    if (f = a.charCodeAt(d + e), !f || 61 == f || 38 == f || 35 == f) break a;
                d += e + 1
            }
            d = -1
        }
        if (0 > d) return null;
        e = a.indexOf("&", d);
        if (0 > e || e > c) e = c;
        d += b.length + 1;
        return decodeURIComponent(a.substr(d, e - d).replace(/\+/g, " "))
    };
    var Fe, Gl, ge, Fl, he, Hl, Xc, Jl, pb, Kl, Ll, Ie, Nl, Il, Pl, Ql, Ol, Zc, Rl, Sl, Tl, Ul, Vl, Wl, Xl, Yl, Ke, Zl, $l, am, qd, bm, dm, fm, Af, im, jm, hm, km, lm, nm, om, pm, qm, rm, um, tm, vm, zb, Bh, wm, xm, ym, Ec, zm;
    Fe = function(a) {
        try {
            return !!a && null != a.location.href && Tj(a, "foo")
        } catch (b) {
            return !1
        }
    };
    Gl = function(a, b, c, d) {
        d = d || _.F;
        c && (d = Fl(d));
        for (c = 0; d && 40 > c++ && (!b && !Fe(d) || !a(d));) d = Fl(d)
    };
    ge = function() {
        var a, b = a = void 0 === a ? _.F : a;
        Gl(function(c) {
            b = c;
            return !1
        });
        return b
    };
    Fl = function(a) {
        try {
            var b = a.parent;
            if (b && b != a) return b
        } catch (c) {}
        return null
    };
    he = function(a) {
        return Fe(a.top) ? a.top : null
    };
    Hl = function(a, b) {
        var c = a.createElement("script");
        wd(c, b);
        return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null
    };
    Xc = function(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    };
    Jl = function(a, b) {
        if (!Il()) {
            var c = Math.random();
            if (c < b) return c = pb(_.F), a[Math.floor(c * a.length)]
        }
        return null
    };
    pb = function(a) {
        if (!a.crypto) return Math.random();
        try {
            var b = new Uint32Array(1);
            a.crypto.getRandomValues(b);
            return b[0] / 65536 / 65536
        } catch (c) {
            return Math.random()
        }
    };
    _.$b = function(a, b, c) {
        if (a)
            for (var d in a) Object.prototype.hasOwnProperty.call(a, d) && b.call(c, a[d], d, a)
    };
    Kl = function(a) {
        for (var b in a)
            if (Object.prototype.hasOwnProperty.call(a, b)) return !1;
        return !0
    };
    Ll = function(a) {
        var b = [];
        _.$b(a, function(c, d) {
            b.push(d)
        });
        return b
    };
    _.Ml = function(a) {
        var b = [];
        _.$b(a, function(c) {
            b.push(c)
        });
        return b
    };
    Ie = function(a, b) {
        return za(a, function(c, d) {
            return Object.prototype.hasOwnProperty.call(a, d) && b(c, d)
        })
    };
    Nl = function(a) {
        var b = a.length;
        if (0 == b) return 0;
        for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    };
    Il = Wc(function() {
        return _.Ji(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], Ol) || 1E-4 > Math.random()
    });
    Pl = function(a) {
        return Il() ? null : Math.floor(1E3 * pb(a))
    };
    Ql = function(a, b) {
        try {
            if (a) return a.setItem("google_experiment_mod", b), b
        } catch (c) {}
        return null
    };
    Ol = function(a) {
        return -1 != oj.indexOf(a)
    };
    Zc = /^([0-9.]+)px$/;
    Rl = /^(-?[0-9.]{1,30})$/;
    _.jg = function(a, b) {
        return Rl.test(a) && (a = Number(a), !isNaN(a)) ? a : void 0 == b ? null : b
    };
    Sl = function() {
        return /^true$/.test("false")
    };
    Tl = function(a, b) {
        b = void 0 === b ? !0 : b;
        try {
            for (var c = null; c != a; c = a, a = a.parent) switch (a.location.protocol) {
                case "https:":
                    return !0;
                case "file:":
                    return b;
                case "http:":
                    return !1
            }
        } catch (d) {}
        return !0
    };
    Ul = function(a) {
        if (!a) return "";
        var b = /.*[&#?]google_debug(=[^&]*)?(&.*)?$/;
        try {
            var c = b.exec(decodeURIComponent(a));
            if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
        } catch (d) {}
        return ""
    };
    Vl = {
        he: "allow-forms",
        ie: "allow-modals",
        je: "allow-orientation-lock",
        ke: "allow-pointer-lock",
        le: "allow-popups",
        me: "allow-popups-to-escape-sandbox",
        ne: "allow-presentation",
        oe: "allow-same-origin",
        pe: "allow-scripts",
        qe: "allow-top-navigation",
        re: "allow-top-navigation-by-user-activation"
    };
    Wl = Wc(function() {
        return _.Ml(Vl)
    });
    Xl = function(a) {
        var b = Wl();
        return a.length ? _.re(b, function(c) {
            return !(0 <= _.da(a, c))
        }) : b
    };
    Yl = function() {
        var a = _.wl(document, "IFRAME"),
            b = {};
        _.Hi(Wl(), function(c) {
            a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
        });
        return b
    };
    Ke = function(a) {
        a = a && a.toString && a.toString();
        return "string" === typeof a && -1 != a.indexOf("[native code]")
    };
    Zl = function(a, b) {
        try {
            return !(!a.frames || !a.frames[b])
        } catch (c) {
            return !1
        }
    };
    $l = function(a, b) {
        for (var c = 0; 50 > c; ++c) {
            if (Zl(a, b)) return a;
            if (!(a = Fl(a))) break
        }
        return null
    };
    am = function(a, b) {
        if (!b || !b.frames) return null;
        if (b.frames[a]) return b.frames[a].frameElement;
        try {
            var c = b.document,
                d = c.body || c.head && c.head.parentElement;
            if (d) {
                var e = c.createElement("IFRAME");
                e.name = a;
                e.id = a;
                e.setAttribute("style", "display:none;position:fixed;left:-999px;top:-999px;width:0px;height:0px;");
                d.appendChild(e);
                return e
            }
        } catch (f) {}
        return null
    };
    qd = Wc(function() {
        return !Al() && (rj("iPod") || rj("iPhone") || rj("Android") || rj("IEMobile")) ? 2 : Al() ? 1 : 0
    });
    bm = function(a, b) {
        var c;
        for (c = void 0 === c ? 100 : c; a && c--;) {
            if (a == b) return !0;
            a = a.parentElement
        }
        return !1
    };
    _.gm = function(a, b) {
        a.style.setProperty ? _.$b(b, function(c, d) {
            a.style.setProperty(d, c, "important")
        }) : a.style.cssText = _.cm(dm(_.em(a.style.cssText), fm(b, function(c) {
            return c + " !important"
        })))
    };
    dm = _.r(Object, "assign") || function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
        }
        return a
    };
    fm = function(a, b) {
        var c = {},
            d;
        for (d in a) Object.prototype.hasOwnProperty.call(a, d) && (c[d] = b.call(void 0, a[d], d, a));
        return c
    };
    Af = function(a, b, c) {
        for (c = void 0 === c ? 100 : c; a && c-- && !1 !== b(a);) a = a.parentElement
    };
    im = function(a) {
        return hm(a, function(b) {
            return "fixed" == b.position || "sticky" == b.position
        })
    };
    jm = function(a) {
        return hm(a, function(b) {
            return "left" == b["float"] || "right" == b["float"] || "left" == b.cssFloat || "right" == b.cssFloat
        })
    };
    hm = function(a, b) {
        var c;
        for (c = void 0 === c ? 100 : c; a && c--;) {
            var d = Xc(a, window);
            if (d) {
                if (b(d)) return !0;
                a = a.parentElement
            }
        }
        return !1
    };
    km = function(a) {
        if (!a) return null;
        a = a.transform;
        if (!a) return null;
        a = a.replace(/^.*\(([0-9., -]+)\)$/, "$1").split(/, /);
        return 6 != a.length ? null : _.pe(a, parseFloat)
    };
    _.cm = function(a) {
        var b = [];
        _.$b(a, function(c, d) {
            null != c && "" !== c && b.push(d + ":" + c)
        });
        return b.length ? b.join(";") + ";" : ""
    };
    _.em = function(a) {
        var b = {};
        if (a) {
            var c = /\s*:\s*/;
            _.Hi((a || "").split(/\s*;\s*/), function(d) {
                if (d) {
                    var e = d.split(c);
                    d = e[0];
                    e = e[1];
                    d && e && (b[d.toLowerCase()] = e)
                }
            })
        }
        return b
    };
    lm = {};
    _.mm = (lm["http://googleads.g.doubleclick.net"] = !0, lm["http://pagead2.googlesyndication.com"] = !0, lm["https://googleads.g.doubleclick.net"] = !0, lm["https://pagead2.googlesyndication.com"] = !0, lm);
    nm = function(a) {
        _.F.console && _.F.console.warn && _.F.console.warn(a)
    };
    om = function(a, b) {
        b = ba(a, b);
        if (0 <= b) {
            var c = a[b];
            Array.prototype.splice.call(a, b, 1);
            return c
        }
        return null
    };
    pm = [];
    qm = function() {
        var a = pm;
        pm = [];
        a = _.G(a);
        for (var b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            try {
                b()
            } catch (c) {}
        }
    };
    rm = function(a) {
        return a.replace(/\\(n|r|\\)/g, function(b, c) {
            return "n" == c ? "\n" : "r" == c ? "\r" : "\\"
        })
    };
    um = function(a) {
        var b = sm;
        a = void 0 === a ? window.document : a;
        0 != b.length && a.head && b.forEach(function(c) {
            c && tm(c, a)
        })
    };
    tm = function(a, b) {
        b = void 0 === b ? window.document : b;
        if (a && b.head) {
            var c = document.createElement("meta");
            b.head.appendChild(c);
            c.httpEquiv = "origin-trial";
            c.content = a
        }
    };
    vm = function() {
        return Math.floor(Math.random() * Math.pow(2, 52))
    };
    zb = function(a) {
        if ("number" !== typeof a.goog_pvsid) try {
            Object.defineProperty(a, "goog_pvsid", {
                value: vm(),
                configurable: !1
            })
        } catch (b) {}
        return Number(a.goog_pvsid) || -1
    };
    Bh = function(a, b) {
        "complete" === a.readyState || "interactive" === a.readyState ? (pm.push(b), 1 == pm.length && (D.Promise ? D.Promise.resolve().then(qm) : window.setImmediate ? setImmediate(qm) : setTimeout(qm, 0))) : a.addEventListener("DOMContentLoaded", b)
    };
    wm = function(a) {
        return 0 === a || "number" === typeof a && isFinite(a) && 0 == a % 1 && 0 < a
    };
    xm = function(a, b) {
        var c = document.createElement("div");
        c.id = a;
        c.textContent = b;
        _.gm(c, {
            height: "24px",
            "line-height": "24px",
            "text-align": "center",
            "vertical-align": "middle",
            color: "white",
            "background-color": "black",
            margin: "0",
            "font-family": "Roboto",
            "font-style": "normal",
            "font-weight": "500",
            "font-size": "11px",
            "letter-spacing": "0.08em"
        });
        return c
    };
    ym = function(a) {
        return new D.Promise(function(b) {
            setTimeout(function() {
                return void b("timeout")
            }, a)
        })
    };
    Ec = function(a) {
        try {
            var b = JSON.stringify(a)
        } catch (c) {}
        return b || String(a)
    };
    zm = function(a) {
        var b = "";
        Gl(function(c) {
            if (c === c.top) return !0;
            c.document && c.document.referrer && (b = c.document.referrer);
            return !1
        }, !1, !1, a);
        return b
    };
    var Bm;
    _.Am = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    Bm = function(a) {
        return new _.Am(a.top, a.right, a.bottom, a.left)
    };
    _.Am.prototype.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    _.Am.prototype.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    _.Am.prototype.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    var Cm = function(a, b, c, d) {
            this.left = a;
            this.top = b;
            this.width = c;
            this.height = d
        },
        Dm = function(a) {
            return new _.Am(a.top, a.left + a.width, a.top + a.height, a.left)
        },
        Em = function(a, b) {
            var c = Math.max(a.left, b.left),
                d = Math.min(a.left + a.width, b.left + b.width);
            if (c <= d) {
                var e = Math.max(a.top, b.top);
                a = Math.min(a.top + a.height, b.top + b.height);
                if (e <= a) return new Cm(c, e, d - c, a - e)
            }
            return null
        };
    Cm.prototype.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    Cm.prototype.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    Cm.prototype.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var Fm = function(a) {
            a = void 0 === a ? _.F : a;
            var b = a.context || a.AMP_CONTEXT_DATA;
            if (!b) try {
                b = a.parent.context || a.parent.AMP_CONTEXT_DATA
            } catch (c) {}
            try {
                if (b && b.pageViewId && b.canonicalUrl) return b
            } catch (c) {}
            return null
        },
        Gm = function(a) {
            return (a = a || Fm()) ? Fe(a.master) ? a.master : null : null
        },
        Im = function(a, b) {
            if (a.ampInaboxInitialized) return !0;
            var c, d = "amp-ini-load" === b.data;
            a.ampInaboxPendingMessages && !d && (c = /^amp-(\d{15,20})?/.exec(b.data)) && (a.ampInaboxPendingMessages.push(b), Hm(a, c[1]));
            return !1
        },
        Jm = function(a, b, c) {
            var d = !0;
            d = void 0 === d ? !1 : d;
            var e = a.ampInaboxIframes = a.ampInaboxIframes || [],
                f = function() {},
                g = function() {};
            b && (e.push(b), g = function() {
                a.AMP && a.AMP.inaboxUnregisterIframe && a.AMP.inaboxUnregisterIframe(b);
                ea(e, b);
                f()
            });
            if (a.ampInaboxInitialized) return g;
            a.ampInaboxPendingMessages = a.ampInaboxPendingMessages || [];
            c && /^\d{15,20}$/.test(c) && Hm(a, c);
            var h = function(k) {
                Im(a, k) && f()
            };
            d || e.google_amp_listener_added || (e.google_amp_listener_added = !0, _.xd(a, "message", h), f = function() {
                _.Yd(a, "message", h)
            });
            return g
        },
        Hm = function(a, b) {
            a.ampInaboxInitialized || b && !/^\d{15,20}$/.test(b) || a.document.querySelector('script[src$="amp4ads-host-v0.js"]') || Hl(a.document, b ? Dd(Oi("https://cdn.ampproject.org/rtv/%{ampVersion}/amp4ads-host-v0.js"), {
                ampVersion: b
            }) : Vi(Ni(Oi("https://cdn.ampproject.org/amp4ads-host-v0.js"))))
        };
    var Rb, Lm;
    _.Km = function(a, b) {
        a.google_image_requests || (a.google_image_requests = []);
        var c = a.document.createElement("img");
        c.src = b;
        a.google_image_requests.push(c)
    };
    Rb = function(a, b) {
        var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
        _.$b(a, function(d, e) {
            d && (c += "&" + e + "=" + encodeURIComponent(d))
        });
        Lm(c)
    };
    Lm = function(a) {
        var b = window;
        b.fetch ? b.fetch(a, {
            keepalive: !0,
            credentials: "include",
            redirect: "follow",
            method: "get",
            mode: "no-cors"
        }) : _.Km(b, a)
    };
    _.jb = function(a) {
        this.Dd = a
    };
    _.Mm = [kb("data"), kb("http"), kb("https"), kb("mailto"), kb("ftp"), new _.jb(function(a) {
        return /^[^:]*([/?#]|$)/.test(a)
    })];
    var Pm, Rm, Sm, Tm, Um, Wm, $m;
    _.Om = function(a, b, c) {
        if ("string" === typeof b)(b = _.Nm(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = _.Nm(c, d);
                f && (c.style[f] = e)
            }
    };
    Pm = {};
    _.Nm = function(a, b) {
        var c = Pm[b];
        if (!c) {
            var d = _.Kj(b);
            c = d;
            void 0 === a.style[d] && (d = (Zj ? "Webkit" : Yj ? "Moz" : _.Vj ? "ms" : Uj ? "O" : null) + Lj(d), void 0 !== a.style[d] && (c = d));
            Pm[b] = c
        }
        return c
    };
    _.Qm = function(a, b) {
        var c = _.nl(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    };
    Rm = function(a, b) {
        return _.Qm(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    };
    Sm = function(a) {
        try {
            return a.getBoundingClientRect()
        } catch (b) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
    };
    Tm = function(a) {
        if (_.Vj && !(8 <= Number(pk))) return a.offsetParent;
        var b = _.nl(a),
            c = Rm(a, "position"),
            d = "fixed" == c || "absolute" == c;
        for (a = a.parentNode; a && a != b; a = a.parentNode)
            if (11 == a.nodeType && a.host && (a = a.host), c = Rm(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
        return null
    };
    Um = function(a) {
        var b = _.nl(a),
            c = new _.ad(0, 0);
        var d = b ? _.nl(b) : document;
        d = !_.Vj || 9 <= Number(pk) || _.rl(ol(d).j) ? d.documentElement : d.body;
        if (a == d) return c;
        a = Sm(a);
        d = ol(b).j;
        b = tl(d);
        d = d.parentWindow || d.defaultView;
        b = _.Vj && mk("10") && d.pageYOffset != b.scrollTop ? new _.ad(b.scrollLeft, b.scrollTop) : new _.ad(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    };
    Wm = function(a, b) {
        var c = new _.ad(0, 0),
            d = _.ul(_.nl(a));
        if (!Tj(d, "parent")) return c;
        do {
            var e = d == b ? Um(a) : _.Vm(a);
            c.x += e.x;
            c.y += e.y
        } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
        return c
    };
    _.Vm = function(a) {
        a = Sm(a);
        return new _.ad(a.left, a.top)
    };
    _.Xm = function(a, b) {
        "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
        return a
    };
    _.Ym = function(a, b) {
        if ("none" != Rm(b, "display")) return a(b);
        var c = b.style,
            d = c.display,
            e = c.visibility,
            f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = a(b);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    };
    _.Zm = function(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = Zj && !b && !c;
        return (void 0 === b || d) && a.getBoundingClientRect ? (a = Sm(a), new _.ll(a.right - a.left, a.bottom - a.top)) : new _.ll(b, c)
    };
    $m = function(a) {
        if (!a.getBoundingClientRect) return null;
        a = _.Ym(Sm, a);
        return new _.ll(a.right - a.left, a.bottom - a.top)
    };
    var bn = function() {
            var a = an();
            "google_onload_fired" in a || (a.google_onload_fired = !1, _.xd(a, "load", function() {
                a.google_onload_fired = !0
            }))
        },
        cn = function() {
            var a = void 0 === a ? cl : a;
            try {
                return a.history.length
            } catch (b) {
                return 0
            }
        },
        dn = function(a) {
            a = Gm(Fm(a)) || a;
            a = a.google_unique_id;
            return "number" === typeof a ? a : 0
        },
        en = !!window.google_async_iframe_id,
        fn = en && window.parent || window,
        an = function() {
            if (en && !Fe(fn)) {
                var a = "." + bl.domain;
                try {
                    for (; 2 < a.split(".").length && !Fe(fn);) bl.domain = a = a.substr(a.indexOf(".") + 1), fn = window.parent
                } catch (b) {}
                Fe(fn) || (fn = window)
            }
            return fn
        },
        gn = function() {
            var a, b = window.ActiveXObject;
            if (navigator.plugins && navigator.mimeTypes.length) {
                if ((a = navigator.plugins["Shockwave Flash"]) && a.description) return a.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/, ".")
            } else {
                if (navigator.userAgent && 0 <= navigator.userAgent.indexOf("Windows CE")) {
                    var c = 3;
                    for (a = 1; a;) try {
                        a = new b("ShockwaveFlash.ShockwaveFlash." + (c + 1)), c++
                    } catch (d) {
                        a = null
                    }
                    return c.toString()
                }
                if (tj()) {
                    a = null;
                    try {
                        a = new b("ShockwaveFlash.ShockwaveFlash.7")
                    } catch (d) {
                        c = 0;
                        try {
                            a = new b("ShockwaveFlash.ShockwaveFlash.6"), c = 6, a.AllowScriptAccess = "always"
                        } catch (e) {
                            if (6 === c) return c.toString()
                        }
                        try {
                            a = new b("ShockwaveFlash.ShockwaveFlash")
                        } catch (e) {}
                    }
                    if (a) return c = a.GetVariable("$version").split(" ")[1], c.replace(/,/g, ".")
                }
            }
            return "0"
        };
    var hn = function(a, b) {
            if (window.fetch) fetch(a, {
                method: "POST",
                body: b,
                keepalive: 64536 > b.length,
                credentials: "omit",
                mode: "no-cors",
                redirect: "follow"
            });
            else {
                var c = new XMLHttpRequest;
                c.open("POST", a, !0);
                c.send(b)
            }
        },
        jn = function(a, b, c) {
            c = void 0 === c ? hn : c;
            this.j = a;
            this.A = void 0 === b ? "https://pagead2.googlesyndication.com/pagead/ping" : b;
            this.l = c
        };
    var jc = function() {
        jn.apply(this, arguments)
    };
    _.N(jc, jn);
    var bc = function(a, b) {
        a.j() && a.l(a.A + "?e=1", '[[[{"2":' + al(b()) + "}]]]")
    };
    var S = function(a, b) {
            this.j = a;
            this.defaultValue = void 0 === b ? !1 : b
        },
        ln = function(a, b) {
            this.j = a;
            this.defaultValue = void 0 === b ? 0 : b
        },
        mn = function(a, b) {
            this.j = a;
            this.defaultValue = void 0 === b ? "" : b
        },
        nn = function(a, b) {
            b = void 0 === b ? [] : b;
            this.j = a;
            this.defaultValue = b
        };
    var Ef, Yg, pn, $g, lc, qn, rn, sn, tn, un, vn, wn, xn, yn, zn, An, Ue, Bn, Cn, Dn, En, Fn, Gn, Hn, In, Jn, Kn, Ln, mb, oc, Mn, Nn, On, Pn, Qn, Rn, Sn, Tn, Un, Vn, Wn, Xn, Yn, Zn, $n, ao, bo, co, eo, fo, go, If, ho, xh, ld, io, jo, ig, ko, lo, mo, no, pc, oo, po, qo, ro, so, to, ag, uo, vo, wo, xo, yo, zo, Ao, Bo, Co, kg, Do, Eo, Fo, Go, Ho, Io, Jo, Ko, Lo, Mo, No, Oo, Po, Qo, Ro, So, To, Uo, Vo, bh, nd, Wo, Xo, Yo, Zo, $o, ap, bp, cp, dp, ep, fp, gp, hp, ip, jp, kp, ie, lp, mp, np, op, Sd, pp, qp, rp, Qd, sp, tp, up, wp, xp, dd, uc, Ap, Bp, Cp, Ep, xe, Fp, Gp, Hp, Ip, Jp, Kp, Lp, Mp, Np;
    _.on = new ln(36);
    Ef = new S(98);
    Yg = new S(206);
    pn = new S(528);
    $g = new ln(465);
    lc = new S(144);
    qn = new S(368279556);
    rn = new S(366809413);
    sn = new mn(3);
    tn = new nn(481);
    un = new ln(7, .1);
    vn = new S(376190677, !0);
    wn = new S(378899425);
    xn = new S(514, !0);
    yn = new S(212);
    zn = new S(377966085);
    An = new S(361174373, !0);
    Ue = new ln(374482958);
    Bn = new S(359351145);
    Cn = new S(362946046);
    Dn = new S(23);
    En = new S(369430);
    Fn = new ln(357045128);
    Gn = new S(346);
    Hn = new S(520);
    In = new S(104);
    Jn = new S(319);
    Kn = new S(493);
    Ln = new S(364);
    mb = new ln(378290974, .01);
    oc = new S(378290973);
    Mn = new ln(377289019);
    Nn = new S(370993688);
    On = new S(504);
    Pn = new S(503);
    Qn = new ln(488);
    Rn = new ln(529);
    Sn = new mn(10);
    Tn = new S(500);
    Un = new S(360245597);
    Vn = new ln(494, 5E3);
    Wn = new ln(517);
    Xn = new S(123);
    Yn = new S(445);
    Zn = new S(381277148);
    $n = new S(371390390);
    ao = new S(375971837);
    bo = new S(372611448);
    co = new S(521);
    eo = new S(375090993, !0);
    fo = new S(20);
    go = new S(220);
    If = new S(200);
    ho = new S(111);
    xh = new S(323);
    ld = new ln(492, .01);
    io = new ln(363650251);
    jo = new S(374665379, !0);
    ig = new nn(480);
    ko = new ln(17);
    lo = new ln(16);
    mo = new ln(18);
    no = new S(83);
    pc = new S(85);
    oo = new S(305);
    po = new S(417);
    qo = new S(471);
    ro = new S(442);
    so = new S(390);
    to = new S(177);
    ag = new S(434);
    uo = new S(464);
    vo = new S(35976);
    wo = new S(35977);
    xo = new S(3580985);
    yo = new S(339043665, !0);
    zo = new S(365635966);
    Ao = new S(3580885);
    Bo = new ln(470, 10);
    Co = new S(432);
    kg = new ln(8, -1);
    Do = new S(377512340, !0);
    Eo = new S(440);
    Fo = new S(380853767);
    Go = new S(381311271);
    Ho = new S(378410763);
    Io = new S(377598633);
    Jo = new ln(374201269, 6E4);
    Ko = new S(374201268);
    Lo = new ln(371364213, 6E4);
    Mo = new ln(373440923);
    No = new ln(376149757);
    Oo = new S(371364212);
    Po = new S(437, !0);
    Qo = new S(320);
    Ro = new ln(47, 1);
    So = new ln(25);
    To = new nn(1);
    Uo = new mn(2, "1-0-38");
    Vo = new S(116);
    bh = new S(416);
    nd = new S(474);
    Wo = new S(373056376);
    Xo = new S(373056377, !0);
    Yo = new S(370723759, !0);
    Zo = new nn(489);
    $o = new S(371157910);
    ap = new S(360245598);
    bp = new ln(360245595, 200);
    cp = new S(360245596);
    dp = new ln(359346956);
    ep = new ln(61, .001);
    fp = new S(1936, !0);
    gp = new S(522);
    hp = new S(373821891);
    ip = new S(363658173);
    jp = new S(501);
    kp = new mn(363931022);
    ie = new S(1930);
    lp = new nn(1918, "criteo index indextest openx openxtest pubcid.org pubmatic thetradedesktest".split(" "));
    mp = new S(446, !0);
    np = new S(453);
    op = new S(454);
    Sd = new ln(360261971);
    pp = new ln(1921, 72);
    qp = new ln(1920, 24);
    rp = new ln(1917, -1);
    Qd = new ln(1916, .001);
    sp = new S(497);
    tp = new S(1931, !0);
    up = new S(377431981);
    _.vp = new S(1944);
    wp = new S(77);
    xp = new S(78);
    dd = new S(309);
    _.yp = new S(377914450);
    uc = new S(373442741);
    _.zp = new S(1903);
    Ap = new S(80);
    Bp = new S(76);
    Cp = new S(81);
    _.Dp = new S(1940);
    Ep = new S(84);
    xe = new S(3655606);
    Fp = new S(188);
    Gp = new S(1928);
    Hp = new S(1941);
    Ip = new S(370946349);
    Jp = new S(374326588);
    Kp = new S(379841917);
    Lp = new S(377105258);
    Mp = new ln(1935);
    Np = new S(1942);
    var H = {
        ye: function() {},
        Ue: function() {
            return ""
        },
        ue: function() {}
    };
    H.Te = rb;
    var Op = rb(function(a) {
            return null !== a && void 0 !== a
        }, "exists"),
        sb = rb(function(a) {
            return !!a
        }, "truthy");
    H.assert = function() {};
    H.Qe = function(a) {
        return a
    };
    H.Ve = tb;
    H.Ye = ub;
    H.Pe = function() {};
    H.Re = function(a) {
        return a
    };
    H.Xe = wb;
    H.$e = function(a) {
        wb(a);
        return a
    };
    H.Oe = function() {};
    H.U = function(a) {
        return a
    };
    H.We = function(a) {
        tb(a, Op)
    };
    H.Ze = function(a) {
        return ub(a, Op)
    };
    H.Se = function(a, b) {
        return a(b)
    };
    H.functionName = function(a) {
        var b = a.name;
        b || (b = (a = /function\s+([^\(]+)/m.exec(String(a))) ? a[1] : "(Anonymous)");
        return b
    };
    var cc = function(a) {
        P(this, a, Pp, null)
    };
    _.N(cc, O);
    var Pp = [3];
    var Eb = function(a) {
        P(this, a, Qp, null)
    };
    _.N(Eb, O);
    var Qp = [4];
    var yb = function(a) {
        P(this, a, Rp, null)
    };
    _.N(yb, O);
    var Rp = [2];
    var xb = function(a) {
        P(this, a, null, gc)
    };
    _.N(xb, O);
    var gc = [
        [4]
    ];
    var Sp = null,
        Tp = function() {
            if (null === Sp) {
                Sp = "";
                try {
                    var a = "";
                    try {
                        a = _.F.top.location.hash
                    } catch (c) {
                        a = _.F.location.hash
                    }
                    if (a) {
                        var b = a.match(/\bdeid=([\d,]+)/);
                        Sp = b ? b[1] : ""
                    }
                } catch (c) {}
            }
            return Sp
        };
    var Up;
    _.yc = function() {
        var a = _.F.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Ff()
    };
    _.Kf = function(a) {
        a = void 0 === a ? _.F : a;
        return (a = a.performance) && a.now ? a.now() : null
    };
    Up = function(a) {
        var b = _.F.performance;
        return b && b.timing && b.timing[a] || 0
    };
    var Vp = function(a, b, c, d, e) {
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = void 0 === d ? 0 : d;
        this.uniqueId = Math.random();
        this.slotId = e
    };
    var Wp = _.F.performance,
        Xp = !!(Wp && Wp.mark && Wp.measure && Wp.clearMarks),
        Yp = Wc(function() {
            var a;
            if (a = Xp) a = Tp(), a = !!a.indexOf && 0 <= a.indexOf("1337");
            return a
        }),
        Zp = function(a, b) {
            this.events = [];
            this.A = b || _.F;
            var c = null;
            b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [], this.events = b.google_js_reporting_queue, c = b.google_measure_js_timing);
            this.j = Yp() || (null != c ? c : Math.random() < a)
        },
        qc = function(a) {
            a && Wp && Yp() && (Wp.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), Wp.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
        },
        Jb = function(a, b, c, d, e, f) {
            a.j && (b = new Vp(b, c, d, void 0 === e ? 0 : e, f), !a.j || 2048 < a.events.length || a.events.push(b))
        };
    Zp.prototype.start = function(a, b) {
        if (!this.j) return null;
        a = new Vp(a, b, _.Kf() || _.yc());
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        Wp && Yp() && Wp.mark(b);
        return a
    };
    Zp.prototype.end = function(a) {
        if (this.j && "number" === typeof a.value) {
            a.duration = (_.Kf() || _.yc()) - a.value;
            var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            Wp && Yp() && Wp.mark(b);
            !this.j || 2048 < this.events.length || this.events.push(a)
        }
    };
    var $p = function(a, b, c) {
        var d = _.Kf();
        d && Jb(a, b, 9, d, 0, c)
    };
    var Sb = function(a, b) {
        try {
            -1 == a.indexOf(b) && (a = b + "\n" + a);
            for (var c; a != c;) c = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
            return a.replace(/\n */g, "\n")
        } catch (d) {
            return b
        }
    };
    var aq;
    aq = {
        Ce: 0,
        $c: 3,
        bd: 4,
        cd: 5
    };
    var bq = aq.$c,
        cq = aq.bd,
        dq = aq.cd;
    _.qh = function(a) {
        if (a.Da && a.hasOwnProperty("Da")) return a.Da;
        var b = new a;
        return a.Da = b
    };
    var eq = Sl();
    var fq = function(a) {
            this.methodName = a
        },
        gq = new fq(1),
        hq = new fq(15),
        iq = new fq(2),
        jq = new fq(3),
        kq = new fq(5),
        lq = new fq(6),
        mq = new fq(7),
        nq = new fq(8),
        oq = new fq(14),
        pq = function(a, b, c) {
            return b[a.methodName] || c || function() {}
        };
    var qq = function() {
            this.j = function() {};
            this.l = function() {
                return []
            };
            this.A = function() {
                return []
            }
        },
        rq = function(a, b, c) {
            a.j = pq(gq, b, function() {});
            a.l = function(d) {
                return pq(iq, b, function() {
                    return []
                })(d, c)
            };
            a.A = function() {
                return pq(jq, b, function() {
                    return []
                })(c)
            }
        },
        sq = function(a) {
            return _.qh(qq).l(a)
        },
        Bb = function() {
            return _.qh(qq).A()
        };
    var tq, uq, hg;
    tq = function() {
        var a = {};
        this.l = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.A = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.m = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.H = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.j = function() {}
    };
    _.v = function(a) {
        return _.qh(tq).l(a.j, a.defaultValue)
    };
    _.lb = function(a) {
        return _.qh(tq).A(a.j, a.defaultValue)
    };
    uq = function(a) {
        return _.qh(tq).m(a.j, a.defaultValue)
    };
    hg = function(a) {
        return _.qh(tq).H(a.j, a.defaultValue)
    };
    var Dg = function() {
            return _.F.googletag || (_.F.googletag = {})
        },
        Xg = function(a, b) {
            var c = Dg();
            c.hasOwnProperty(a) || (c[a] = b)
        },
        vq = function(a, b) {
            a.addEventListener ? a.addEventListener("load", b, !1) : a.attachEvent && a.attachEvent("onload", b)
        };
    var wq = {
            247: "https://securepubads.g.doubleclick.net",
            7: .02,
            13: 1500,
            23: .001,
            38: .001,
            58: 1,
            150: "",
            211: !1,
            253: !1,
            172: null,
            245: {},
            180: null,
            246: [],
            227: {},
            226: [],
            248: 0,
            228: "//www.googletagservices.com/pubconsole/",
            261: "//console.googletagservices.com/pubconsole/",
            250: null,
            252: null,
            258: null,
            251: null,
            259: null
        },
        xq, yq, zq, Aq, Bq;
    wq[6] = Tl(window);
    wq[49] = (new Date).getTime();
    wq[36] = Sl();
    wq[148] = eq;
    wq[221] = Sl();
    wq[254] = Sl();
    wq[204] = _.jg("-1", -1);
    wq[257] = Sl();
    wq[260] = void 0;
    xq = function() {
        for (var a in wq) this[a] = wq[a]
    };
    _.Xb = function(a) {
        return _.qh(xq)[a]
    };
    yq = Dg();
    zq = _.qh(xq);
    Aq = yq._vars_;
    for (Bq in Aq) zq[Bq] = Aq[Bq];
    yq._vars_ = zq;
    var Cq = {},
        Dq = (Cq.companion_ads = "companionAds", Cq.content = "content", Cq.publisher_ads = "pubads", Cq),
        Eq = function(a) {
            return a + 'Correlator has been deprecated. Please see the Google Ad Manager help page on "Pageviews in GPT" for more information: https://support.google.com/admanager/answer/183281?hl=en'
        },
        ch = {
            He: "rewardedSlotReady",
            Ge: "rewardedSlotGranted",
            De: "rewardedSlotCanceled",
            Ee: "rewardedSlotClosed",
            Fe: "rewardedSlotCompleted",
            Ie: "slotAdded",
            Le: "slotRequested",
            Me: "slotResponseReceived",
            Ke: "slotRenderEnded",
            Je: "slotOnload",
            Ne: "slotVisibilityChanged",
            ze: "impressionViewable"
        };
    var Fq = function() {
        Zp.apply(this, arguments)
    };
    _.N(Fq, Zp);
    Fq.N = function() {
        throw Error("Must be overridden");
    };
    var Kb = function() {
        Fq.call(this, _.v(pc) || _.v(Ep) ? 1 : 0, _.F);
        this.l = 0;
        var a = _.v(pc) || _.v(Ep);
        _.F.google_measure_js_timing = a || _.F.google_measure_js_timing
    };
    _.N(Kb, Fq);
    ui(Kb);
    var Gq = Wc(function() {
        return !!Ul(_.F.location.href)
    });
    var Yb = function(a, b) {
            b = void 0 === b ? "https://pagead2.googlesyndication.com" : b;
            var c = void 0 === c ? zb(_.F) : c;
            this.id = a;
            this.Xb = b;
            this.l = Math.random();
            if (null == d || 0 > d || 1 < d) var d = _.Xb(23);
            this.A = this.l < d;
            this.j = {
                pvsid: String(c)
            }
        },
        Hq = function(a) {
            var b;
            a = Ib(a);
            fc.set(a, (null !== (b = fc.get(a)) && void 0 !== b ? b : 0) + 1)
        },
        dc = function() {
            return [].concat(_.ec(_.r(fc, "values").call(fc))).reduce(function(a, b) {
                return a + b
            }, 0)
        },
        q = function(a, b, c) {
            "string" !== typeof c && (c = String(c));
            /^\w+$/.test(b) && (c ? a.j[b] = c : delete a.j[b])
        },
        ac = function(a, b, c) {
            b = void 0 === b ? null : b;
            c = void 0 === c ? !1 : c;
            b = void 0 === b ? null : b;
            c = void 0 === c ? !1 : c;
            if (Gq()) b = !0;
            else {
                var d = a.A;
                b && 0 <= b && (d = (c ? a.l : Math.random()) < b);
                b = d && !!a.id
            }
            b && (_.v(oo) ? Rb(a.j, a.id) : (a = Iq(a) || "", _.Km(window, a)))
        },
        Iq = function(a) {
            var b = a.Xb + "/pagead/gen_204?id=" + encodeURIComponent(a.id);
            _.$b(a.j, function(c, d) {
                c && (b += "&" + d + "=" + encodeURIComponent(c))
            });
            return b
        },
        Jq = function(a, b) {
            3 >= b.length ? q(a, "nw_id", b.join()) : (b = b.slice(0, 3), b.push("__extra__"), q(a, "nw_id", b.join()))
        },
        Zb = function(a, b) {
            q(a, "vrg", Pb());
            b ? (Jq(a, b), q(a, "nslots", b.length.toString())) : (Jq(a, [].concat(_.ec(_.r(fc, "keys").call(fc)))), q(a, "nslots", dc().toString()));
            b = Bb();
            b.length && q(a, "eid", b.join());
            q(a, "pub_url", document.URL)
        },
        mc = function(a, b, c) {
            c = void 0 === c ? {
                Xb: "https://pagead2.googlesyndication.com",
                ta: _.Xb(23)
            } : c;
            var d = c.Xb || "https://pagead2.googlesyndication.com";
            c = c.ta;
            if (void 0 === c || 0 > c || 1 < c) c = _.Xb(23);
            Math.random() < c && (a = new Yb(a, d), b(a), ac(a, 1, !0))
        },
        fc = new D.Map;
    var Wb = _.Xb(38);
    _.Kq = function() {
        this.A = this.A;
        this.fa = this.fa
    };
    _.Kq.prototype.A = !1;
    _.Kq.prototype.wa = function() {
        this.A || (this.A = !0, this.H())
    };
    _.Lq = function(a, b) {
        _.Bg(a, _.Ai(sc, b))
    };
    _.Bg = function(a, b) {
        a.A ? b() : (a.fa || (a.fa = []), a.fa.push(b))
    };
    _.Kq.prototype.H = function() {
        if (this.fa)
            for (; this.fa.length;) this.fa.shift()()
    };
    var Mq = function() {
            this.id = "goog_" + Jj++
        },
        Nq = function() {
            _.Kq.apply(this, arguments);
            this.m = new D.Map
        };
    _.N(Nq, _.Kq);
    Nq.prototype.H = function() {
        _.Kq.prototype.H.call(this);
        this.m.clear()
    };
    var Pq = function(a, b, c) {
            var d, e;
            if (a.A) return function() {};
            var f = "string" === typeof b ? b : b.id,
                g = null !== (e = null === (d = a.m.get(f)) || void 0 === d ? void 0 : d.add(c)) && void 0 !== e ? e : new D.Set([c]);
            a.m.set(f, g);
            return function() {
                return void Oq(a, b, c)
            }
        },
        ng = function(a, b, c) {
            c = void 0 === c ? function() {
                return !0
            } : c;
            return new D.Promise(function(d) {
                var e = Pq(a, b, function(f) {
                    c(f) && (e(), d(f))
                })
            })
        },
        Oq = function(a, b, c) {
            var d;
            return !(null === (d = a.m.get("string" === typeof b ? b : b.id)) || void 0 === d || !d.delete(c))
        };
    Nq.prototype.dispatchEvent = function(a, b, c) {
        var d;
        return A(this, function f() {
            var g = this,
                h, k, l, m, n, p, u;
            return B(f, function(t) {
                1 == t.j && (h = g, k = "string" === typeof a ? a : a.id, l = document.createEvent("CustomEvent"), l.initCustomEvent(k, !0, !0, c), m = null !== (d = g.m.get(k)) && void 0 !== d ? d : new D.Set, n = {}, p = _.G(m), u = p.next());
                if (5 != t.j) {
                    if (u.done) {
                        t.j = 0;
                        return
                    }
                    n.zb = u.value;
                    return C(t, 0, 5)
                }
                rc(b, function(y) {
                    return function() {
                        h.m.has(k) && m.has(y.zb) && y.zb(l)
                    }
                }(n), !0);
                n = {
                    zb: n.zb
                };
                u = p.next();
                t.j = 2
            })
        })
    };
    var Qq = new Mq,
        Rq = new Mq,
        Sq = new Mq,
        Tq = new Mq,
        Uq = new Mq,
        Vq = new Mq,
        Wq = new Mq,
        Xq = new Mq,
        og = new Mq,
        Yq = new Mq;
    var Zq = function(a, b) {
        b = void 0 === b ? [] : b;
        this.l = a;
        this.j = b
    };
    Zq.prototype.getMessageId = function() {
        return this.l
    };
    Zq.prototype.getMessageArgs = function() {
        return this.j
    };
    var $q = function(a, b, c) {
        this.A = new Date;
        this.m = c;
        this.j = a;
        this.l = b
    };
    aa = $q.prototype;
    aa.getSlot = function() {
        return this.m
    };
    aa.getLevel = function() {
        return this.j
    };
    aa.getTimestamp = function() {
        return this.A
    };
    aa.getMessage = function() {
        return this.l
    };
    aa.toString = function() {
        return this.A.toTimeString() + ": " + ar[this.j] + ": " + this.l
    };
    var ar = ["Debug", "Info", "Warning", "Error", "Fatal"];
    var br = function(a, b, c) {
        Nq.call(this);
        this.D = a;
        this.Da = b;
        this.G = this.D + "_" + this.Da;
        this.j = c;
        this.l = null
    };
    _.N(br, Nq);
    br.prototype.getAdUnitPath = function() {
        return this.D
    };
    br.prototype.getName = function() {
        return this.D
    };
    br.prototype.N = function() {
        return this.Da
    };
    br.prototype.toString = function() {
        return this.G
    };
    var cr = function(a, b) {
        a.l = b
    };
    var dr = {
            20: function(a) {
                return "Ignoring a call to setCollapseEmptyDiv(false, true). Slots that start out collapsed should also collapse when empty. Slot: " + a[0] + "."
            },
            23: function(a) {
                return 'Error in googletag.display: could not find div with id "' + a[1] + '" in DOM for slot: ' + a[0] + "."
            },
            34: function(a) {
                return "Size mapping is null because invalid mappings were added: " + a[0] + "."
            },
            60: function(a) {
                return "Ignoring the " + a[0] + "(" + (a[1] || "") + ") call since the service is already enabled."
            },
            66: function(a) {
                return "Slot " + a[0] + " cannot be refreshed until PubAdsService is enabled."
            },
            68: function() {
                return "Slots cannot be cleared until service is enabled."
            },
            80: function(a) {
                return "Slot object at position " + a[0] + " is of incorrect type."
            },
            84: function(a) {
                return 'Cannot find targeting attribute "' + a[0] + '" for "' + a[1] + '".'
            },
            93: function(a) {
                return "Failed to register listener. Unknown event type: " + a[0] + "."
            },
            96: function(a) {
                return "Invalid arguments: " + a[0] + "(" + a[1] + ")."
            },
            122: function(a) {
                return "Invalid argument: " + a[0] + "(" + a[1] + "). Valid values: " + a[2] + "."
            },
            121: function(a) {
                return "Invalid object passed to " + a[0] + "(" + a[1] + "), for " + a[2] + ": " + a[3] + "."
            },
            105: function(a) {
                return "SRA requests may include a maximum of 30 ad slots. " + a[1] + " were requested, so the last " + a[2] + " were ignored."
            },
            106: function(a) {
                return "Publisher betas " + a[0] + " were declared after enableServices() was called."
            },
            107: function(a) {
                return "Publisher betas may only be declared once. " + a[0] + " were added after betas had already been declared."
            },
            108: function(a) {
                return "Beta keys cannot be cleared. clearTargeting() was called on " + a[0] + "."
            },
            123: function(a) {
                return "Refresh was throttled for slot: " + a[0] + "."
            },
            113: function(a) {
                return a[0] + " ad slot ineligible as page is not mobile optimized: " + a[1] + "."
            },
            116: function(a) {
                return 'The unique SafeFrame domain setting in Google Ad Manager conflicts with the "useUniqueDomain" setting passed to the setSafeFrameConfig API method. GPT will use useUniqueDomain=' + a[0] + " based on the API call."
            },
            114: function() {
                return 'setCorrelator has been deprecated. See the Google Ad Manager help page on "Creative selection for multiple ad slots" for more information: https://support.google.com/admanager/answer/183281.'
            },
            115: function() {
                return 'updateCorrelator has been deprecated. See the Google Ad Manager help page on "Creative selection for multiple ad slots" for more information: https://support.google.com/admanager/answer/183281.'
            },
            120: function() {
                return "Checking googletag.pubadsReady is discouraged. Please use googletag.cmd.push instead."
            },
            124: function(a) {
                return "To reserve space and reduce layout shifts, consider setting min-width=" + a[2] + "px, min-height=" + a[3] + "px styles on the div element with id=" + a[1] + ". Learn more: https://developers.google.com/publisher-tag/guides/minimize-layout-shift"
            }
        },
        er = {
            26: function(a) {
                return "Div ID passed to googletag.display() does not match any defined slots: " + a[0] + "."
            },
            28: function(a) {
                return "Error in googletag.defineSlot: Cannot create slot " + a[1] + '. Div element "' + a[0] + '" is already associated with another slot: ' + a[2] + "."
            },
            92: function(a) {
                return "Exception in " + a[1] + ' event listener: "' + a[0] + '".'
            },
            30: function(a) {
                return "Exception in googletag.cmd function: " + a[0] + "."
            },
            125: function(a) {
                return "google-product-ad element is invalid: " + a[0] + "."
            }
        };
    var fr = function() {
        this.l = 0;
        this.j = []
    };
    fr.prototype.add = function(a) {
        var b = this.j[this.l];
        this.j[this.l] = a;
        this.l = (this.l + 1) % 1E3;
        return b
    };
    fr.prototype.get = function(a) {
        a = gr(this, a);
        return this.j[a]
    };
    fr.prototype.set = function(a, b) {
        a = gr(this, a);
        this.j[a] = b
    };
    fr.prototype.isEmpty = function() {
        return 0 == this.j.length
    };
    var hr = function(a) {
            for (var b = a.j.length, c = [], d = a.j.length - a.j.length; d < b; d++) c.push(a.get(d));
            return c
        },
        gr = function(a, b) {
            if (b >= a.j.length) throw Error("Out of bounds exception");
            return 1E3 > a.j.length ? b : (a.l + Number(b)) % 1E3
        };
    var ir = function() {
            this.j = new fr;
            this.l = this.A = 0
        },
        jr = function(a, b) {
            return hr(a.j).filter(function(c) {
                return c.getSlot() === b
            })
        },
        kr = function(a, b) {
            return hr(a.j).filter(function(c) {
                return c.getLevel() >= b
            })
        };
    ir.prototype.log = function(a, b, c, d) {
        var e = this;
        d = void 0 === d ? !1 : d;
        var f, g;
        c = new $q(a, b, null != (g = null == (f = void 0 === c ? null : c) ? void 0 : f.l) ? g : null);
        this.j.add(c);
        f = _.v(On) && this.l < _.lb(Rn);
        g = _.v(Pn) && _.r(_.F.navigator.userAgent, "includes").call(_.F.navigator.userAgent, "Lighthouse");
        var h = _.lb(Qn) && 100 > this.A,
            k = 2 === a || 3 === a,
            l = b.getMessageArgs(),
            m = b.getMessageId(),
            n = dr[m] || er[m];
        h && k && (b = _.lb(Qn), mc("gpt_eventlog_messages", function(z) {
            ++e.A;
            Zb(z);
            q(z, "level", a);
            q(z, "messageId", m);
            q(z, "args", l.join("|"));
            n || q(z, "noMsg", !0);
            var K = Error();
            q(z, "stack", Sb(K.stack, K.message))
        }, {
            ta: b
        }));
        if (n) {
            b = "[GPT] " + n(l);
            if (d) throw Error(b);
            if ((g || f) && k && _.F.console) {
                var p, u, t, y;
                2 === a ? null == (u = (p = _.F.console).warn) || u.call(p, b) : null == (y = (t = _.F.console).error) || y.call(t, b);
                this.l++
            }
        }
        return c
    };
    ir.prototype.info = function(a, b) {
        return this.log(1, a, void 0 === b ? null : b)
    };
    ir.prototype.M = function(a, b) {
        return this.log(2, a, b)
    };
    ir.prototype.error = function(a, b, c) {
        return this.log(3, a, b, void 0 === c ? !1 : c)
    };
    var Cc = function() {
        return _.qh(ir)
    };
    var T = function(a) {
            return function(b) {
                for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
                return new Zq(a, [].concat(_.ec(c)))
            }
        },
        lr = function(a) {
            return "[" + a.map(function(b) {
                return "string" === typeof b ? "'" + b + "'" : Array.isArray(b) ? lr(b) : String(b)
            }).join(", ") + "]"
        },
        nh = function(a, b) {
            b = lr(b);
            b = b.substring(1, b.length - 1);
            return new Zq(96, [a, b])
        },
        mr = T(2),
        nr = T(3),
        or = T(4),
        pr = T(5),
        qr = T(6),
        rr = T(12),
        sr = T(14),
        tr = T(16),
        ur = T(19),
        vr = T(20),
        wr = T(23),
        xr = T(26),
        yr = T(28),
        zr = T(30),
        Ar = T(31),
        Br = T(34),
        Cr = T(35),
        Dr = T(36),
        Er = T(38),
        Fr = T(40),
        Gr = T(46),
        Hr = T(48),
        Ir = T(50),
        Jr = T(60),
        Kr = T(63),
        Lr = T(64),
        Mr = T(66),
        Nr = T(68),
        Or = T(69),
        Pr = T(70),
        Qr = T(71),
        Rr = T(78),
        Sr = T(80),
        Tr = T(82),
        Ur = T(84),
        Vr = T(85),
        Wr = T(87),
        Xr = T(88),
        Yr = T(92),
        Zr = T(93),
        $r = T(99),
        as = T(103),
        bs = T(104),
        cs = T(105),
        ds = T(106),
        es = T(107),
        fs = T(108),
        gs = T(113),
        hs = T(114),
        is = T(115),
        js = T(116),
        ks = T(117),
        ls = T(118),
        ms = T(119),
        Zg = T(120),
        Dc = T(121),
        Gc = T(122),
        ns = T(123),
        os = T(124),
        Lh = T(125);
    var ps = function() {
        Nq.call(this);
        this.l = this.j = 0
    };
    _.N(ps, Nq);
    ps.prototype.push = function(a) {
        for (var b = Cc(), c = 0; c < arguments.length; ++c) try {
            "function" === typeof arguments[c] && (arguments[c](), this.j++)
        } catch (d) {
            this.l++, window.console && window.console.error && window.console.error("Exception in queued GPT command", d), b.error(zr(String(d)))
        }
        b.info(Ar(String(this.j), String(this.l)));
        return this.j
    };
    var rs = function(a) {
        P(this, a, qs, null)
    };
    _.N(rs, O);
    var ss = function(a) {
        P(this, a, null, null)
    };
    _.N(ss, O);
    var qs = [4];
    var us = function(a) {
        P(this, a, ts, null)
    };
    _.N(us, O);
    var vs = function(a) {
        P(this, a, null, null)
    };
    _.N(vs, O);
    var ts = [1];
    var ws = function(a) {
        P(this, a, null, null)
    };
    _.N(ws, O);
    var xs = function(a) {
        P(this, a, null, null)
    };
    _.N(xs, O);
    var ys = function(a) {
        P(this, a, null, null)
    };
    _.N(ys, O);
    var zs = function(a) {
            return "CSS1Compat" == a.compatMode ? a.documentElement : a.body
        },
        As = function(a, b) {
            b = void 0 === b ? _.F : b;
            a = a.scrollingElement || zs(a);
            return new _.ad(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
        },
        $c = function(a) {
            try {
                return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
            } catch (b) {
                return !1
            }
        };
    var Bs = function(a, b, c) {
        a && null !== b && b != b.top && (b = b.top);
        try {
            return (void 0 === c ? 0 : c) ? (new _.ll(b.innerWidth, b.innerHeight)).round() : _.sl(b || window).round()
        } catch (d) {
            return new _.ll(-12245933, -12245933)
        }
    };
    var Cs = function(a) {
        for (var b = 0, c = a, d = 0; a && a != a.parent;) a = a.parent, d++, Fe(a) && (c = a, b = d);
        return {
            J: c,
            level: b
        }
    };
    var Ds = function(a) {
            return !!a && a.top == a
        },
        Es = function(a, b, c, d) {
            c = c || a.google_ad_width;
            d = d || a.google_ad_height;
            if (Ds(a)) return !1;
            var e = b.documentElement;
            if (c && d) {
                var f = 1,
                    g = 1;
                a.innerHeight ? (f = a.innerWidth, g = a.innerHeight) : e && e.clientHeight ? (f = e.clientWidth, g = e.clientHeight) : b.body && (f = b.body.clientWidth, g = b.body.clientHeight);
                if (g > 2 * d || f > 2 * c) return !1
            }
            return !0
        },
        Fs = function(a) {
            var b = a.location.href;
            if (a == a.top) return {
                url: b,
                jc: !0
            };
            var c = !1,
                d = a.document;
            d && d.referrer && (b = d.referrer, a.parent == a.top && (c = !0));
            (a = a.location.ancestorOrigins) && (a = a[a.length - 1]) && -1 == b.indexOf(a) && (c = !1, b = a);
            return {
                url: b,
                jc: c
            }
        },
        Gs = function() {
            var a = an();
            if (a == a.top) return 0;
            for (; a && a != a.top && Fe(a); a = a.parent) {
                if (a.sf_) return 2;
                if (a.$sf) return 3;
                if (a.inGptIF) return 4;
                if (a.inDapIF) return 5
            }
            return 1
        };
    var Hs = function(a, b, c, d, e, f) {
            try {
                var g = a.j,
                    h = _.wl(a.j, "SCRIPT");
                h.async = !0;
                wd(h, b);
                g.head.appendChild(h);
                h.addEventListener("load", function() {
                    e();
                    d && g.head.removeChild(h)
                });
                h.addEventListener("error", function() {
                    0 < c ? Hs(a, b, c - 1, d, e, f) : (d && g.head.removeChild(h), f())
                })
            } catch (k) {
                f()
            }
        },
        Is = function(a, b, c, d) {
            c = void 0 === c ? function() {} : c;
            d = void 0 === d ? function() {} : d;
            Hs(ol(a), b, 0, !1, c, d)
        };
    var Js = function(a) {
        var b = a.document,
            c = ol(a),
            d = function() {
                if (!a.frames.googlefcPresent)
                    if (b.body) {
                        var e = _.wl(c.j, "IFRAME");
                        e.style.display = "none";
                        e.style.width = "0px";
                        e.style.height = "0px";
                        e.style.border = "none";
                        e.style.zIndex = "-1000";
                        e.style.left = "-1000px";
                        e.style.top = "-1000px";
                        e.name = "googlefcPresent";
                        b.body.appendChild(e)
                    } else a.setTimeout(d, 5)
            };
        d()
    };
    var Ks = function(a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        },
        Ls = function(a, b) {
            b = void 0 === b ? 500 : b;
            _.Kq.call(this);
            this.j = a;
            this.l = null;
            this.D = {};
            this.o = 0;
            this.G = b;
            this.m = null
        };
    _.N(Ls, _.Kq);
    Ls.prototype.H = function() {
        this.D = {};
        this.m && (_.Yd(this.j, "message", this.m), delete this.m);
        delete this.D;
        delete this.j;
        delete this.l;
        _.Kq.prototype.H.call(this)
    };
    var Ns = function(a) {
        return "function" === typeof a.j.__tcfapi || null != Ms(a)
    };
    Ls.prototype.addEventListener = function(a) {
        var b = {},
            c = _.Fi(function() {
                return a(b)
            }),
            d = 0; - 1 !== this.G && (d = setTimeout(function() {
            b.tcString = "tcunavailable";
            b.internalErrorState = 1;
            c()
        }, this.G));
        var e = function(f, g) {
            clearTimeout(d);
            f ? (b = f, b.internalErrorState = Ks(b), g && 0 === b.internalErrorState || (b.tcString = "tcunavailable", g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
            a(b)
        };
        try {
            Os(this, "addEventListener", e)
        } catch (f) {
            b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d), d = 0), c()
        }
    };
    Ls.prototype.removeEventListener = function(a) {
        a && a.listenerId && Os(this, "removeEventListener", null, a.listenerId)
    };
    var Qs = function(a, b) {
            var c = {
                    internalErrorState: 0
                },
                d = _.Fi(function() {
                    return b(c)
                }),
                e = 0; - 1 !== a.G && (e = setTimeout(function() {
                c.tcString = "tcunavailable";
                c.internalErrorState = 1;
                d()
            }, a.G));
            Os(a, "addEventListener", function(f, g) {
                e && (clearTimeout(e), e = 0);
                g && (c = f);
                c.internalErrorState = Ks(c);
                0 != c.internalErrorState && (c.tcString = "tcunavailable");
                if (0 != c.internalErrorState || Ps(c)) Os(a, "removeEventListener", null, c.listenerId), d()
            })
        },
        Os = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.j.__tcfapi) a = a.j.__tcfapi, a(b, 2, c, d);
            else if (Ms(a)) {
                Rs(a);
                var e = ++a.o;
                a.D[e] = c;
                a.l && (c = {}, a.l.postMessage((c.__tcfapiCall = {
                    command: b,
                    version: 2,
                    callId: e,
                    parameter: d
                }, c), "*"))
            } else c({}, !1)
        },
        Ms = function(a) {
            if (a.l) return a.l;
            a.l = $l(a.j, "__tcfapiLocator");
            return a.l
        },
        Rs = function(a) {
            a.m || (a.m = function(b) {
                try {
                    var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.D[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, _.xd(a.j, "message", a.m))
        },
        Ps = function(a) {
            if (!1 === a.gdprApplies) return !0;
            void 0 === a.internalErrorState && (a.internalErrorState = Ks(a));
            return "error" === a.cmpStatus || 0 !== a.internalErrorState || "loaded" === a.cmpStatus && ("tcloaded" === a.eventStatus || "useractioncomplete" === a.eventStatus) ? !0 : !1
        };
    var Ss = function(a, b, c) {
            this.j = a;
            this.A = b;
            this.l = void 0 === c ? function() {} : c
        },
        Ts = function(a, b, c) {
            return new Ss(a, b, c)
        };
    Ss.prototype.start = function() {
        try {
            Js(this.j), Us(this)
        } catch (a) {}
    };
    var Us = function(a) {
        var b = Dd(Oi("https://fundingchoicesmessages.google.com/i/%{id}?ers=%{ers}"), {
            id: a.A,
            ers: 3
        });
        Is(a.j, b, function() {
            a.l(!0)
        }, function() {
            a.l(!1)
        })
    };
    var Ws = function(a) {
        P(this, a, Vs, null)
    };
    _.N(Ws, O);
    var Ys = function(a, b) {
            wf(a, 1, b, Xs)
        },
        Xs = function(a) {
            P(this, a, null, null)
        };
    _.N(Xs, O);
    var Zs = function(a) {
            var b = new Xs;
            return Fb(b, 1, a)
        },
        $s = function(a, b) {
            return Ab(a, 2, b, 0)
        },
        Vs = [1];
    var bt = function(a, b) {
            var c = window;
            a: {
                try {
                    if (a) {
                        var d = a.getItem("google_experiment_mod");
                        break a
                    }
                } catch (h) {}
                d = null
            }
            var e = d || "";
            d = null;
            try {
                if (d = Eh(Ws, e), e) {
                    var f = Eh(Ws, e);
                    Ys(f, $s(Zs(1), -1));
                    al(f)
                }
            } catch (h) {
                at(e), d = new Ws
            }
            f = L(d, Xs, 1);
            if (f = ca(f, function(h) {
                    return af(h, 1, 0) === b
                })) {
                var g = Rg(f, 2);
                if (null === g || isNaN(g)) at(e);
                else return g
            }
            c = Pl(c);
            if (null === c) return null;
            f ? $s(f, c) : Ys(d, $s(Zs(b), c));
            return Ql(a, al(d)) ? c : null
        },
        at = function(a) {
            .01 > Math.random() && Rb({
                data: a
            }, "ls_tamp")
        };
    var wc = function(a) {
            this.j = a || {
                cookie: ""
            }
        },
        et = function() {
            var a = ct;
            if (!_.F.navigator.cookieEnabled) return !1;
            if (!a.isEmpty()) return !0;
            a.set("TESTCOOKIESENABLED", "1", {
                kc: 60
            });
            if ("1" !== a.get("TESTCOOKIESENABLED")) return !1;
            dt(a, "TESTCOOKIESENABLED");
            return !0
        };
    wc.prototype.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.af;
            d = c.Ud || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.kc
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === h && (h = -1);
        this.j.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" + e : "")
    };
    wc.prototype.get = function(a, b) {
        for (var c = a + "=", d = (this.j.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = bj(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
            if (f == a) return ""
        }
        return b
    };
    var dt = function(a, b) {
        a.get(b);
        a.set(b, "", {
            kc: 0,
            path: void 0,
            domain: void 0
        })
    };
    wc.prototype.isEmpty = function() {
        return !this.j.cookie
    };
    var ft = new wc("undefined" == typeof document ? null : document);
    var gt = function(a) {
        P(this, a, null, null)
    };
    _.N(gt, O);
    var ht = function() {
            this.j = window;
            this.l = 0
        },
        it = function(a, b) {
            return xc("__gads", b, a.j)
        },
        jt = function(a, b, c) {
            var d = {
                    kc: I(b, 2) - a.j.Date.now() / 1E3,
                    path: I(b, 3),
                    domain: I(b, 4),
                    Ud: !1
                },
                e = I(b, 1),
                f = a.j;
            x(c, 5) && vc(f) && (new wc(f.document)).set("__gads", e, d);
            x(c, 5) && .01 > a.j.Math.random() && (c = it(a, c), Rb({
                domain: I(b, 4),
                host: a.j.location.host,
                success: c === I(b, 1) ? "1" : "0"
            }, "gfp_cw_status"))
        };
    var kt = {},
        lt = (kt[3] = Vi(Ni(Oi("https://s0.2mdn.net/ads/richmedia/studio/mu/templates/hifi/hifi.js"))), kt),
        mt = {},
        nt = (mt[3] = Vi(Ni(Oi("https://s0.2mdn.net/ads/richmedia/studio_canary/mu/templates/hifi/hifi_canary.js"))), mt);
    var ot = function(a) {
            this.j = a;
            this.l = Ij()
        },
        pt = function(a) {
            var b = {};
            _.Hi(a, function(c) {
                b[c.j] = c.l
            });
            return b
        };
    var rt, st, tt;
    rt = function() {
        return 0 != _.qt(document)
    };
    _.qt = function(a) {
        return {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
    };
    st = function(a) {
        var b;
        a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
        return b
    };
    tt = function(a) {
        return null != a.hidden ? a.hidden : null != a.mozHidden ? a.mozHidden : null != a.webkitHidden ? a.webkitHidden : null
    };
    var ut = function() {
            this.j = [];
            this.l = [];
            this.A = []
        },
        vt = function(a, b, c) {
            a.l.push({
                Ac: void 0 === c ? !1 : c,
                Ec: b
            })
        };
    var ue = function() {
        var a = this;
        this.promise = new D.Promise(function(b, c) {
            a.resolve = b;
            a.reject = c
        })
    };
    var wt = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.r(Object, "setPrototypeOf").call(Object, this, wt.prototype);
        this.name = "InputError"
    };
    _.N(wt, Error);
    var xt = function() {
            var a = this;
            this.F = this.m = null;
            this.D = -1;
            this.H = new ue;
            this.A = !1;
            this.H.promise.then(function() {
                -1 !== a.D && (a.F = _.yc() - a.D)
            }, function() {})
        },
        yt = function() {
            xt.apply(this, arguments)
        };
    _.N(yt, xt);
    yt.prototype.j = function(a) {
        this.A || (this.A = !0, this.m = a, this.H.resolve(a))
    };
    yt.prototype.l = function(a) {
        null == a ? zt(this) : this.j(a)
    };
    var zt = function(a) {
            a.A || (a.A = !0, a.m = null, a.H.resolve(null))
        },
        At = function(a, b) {
            a.A || (a.A = !0, a.m = null, a.B = b, a.H.reject(b))
        };
    Rh.Object.defineProperties(yt.prototype, {
        promise: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.H.promise
            }
        },
        G: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.A
            }
        },
        o: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.F
            }
        }
    });
    var Bt = function(a) {
        xt.call(this);
        this.j = a
    };
    _.N(Bt, xt);
    var Ct = function(a) {
        return null !== a.j.m
    };
    Rh.Object.defineProperties(Bt.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.j.m
            }
        },
        error: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.j.B
            }
        }
    });
    var Dt = function() {
        Bt.apply(this, arguments)
    };
    _.N(Dt, Bt);
    Rh.Object.defineProperties(Dt.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.j.m
            }
        }
    });
    var Et = function() {
        yt.apply(this, arguments)
    };
    _.N(Et, yt);
    Et.prototype.notify = function() {
        zt(this)
    };
    var Ft = function(a, b) {
        b = void 0 === b ? 0 : b;
        _.Kq.call(this);
        var c = this;
        this.id = a;
        this.wb = b;
        this.D = new ut;
        this.qa = !1;
        this.ba = -1;
        _.Bg(this, function() {
            var d = c.D;
            d.j.length = 0;
            d.A.length = 0;
            d.l.length = 0
        })
    };
    _.N(Ft, _.Kq);
    Ft.prototype.start = function() {
        return A(this, function b() {
            var c = this,
                d, e, f, g;
            return B(b, function(h) {
                switch (h.j) {
                    case 1:
                        if (c.qa) return h.return();
                        c.qa = !0;
                        h.H = 2;
                        return C(h, zc(c.D.l, c.wb), 4);
                    case 4:
                        c.ba = h.l;
                        if (c.A) {
                            h.j = 5;
                            break
                        }
                        for (var k = 0, l = _.G(c.D.A), m = l.next(); !m.done; m = l.next()) {
                            if (!Ct(m.value)) throw Error("missing input: " + c.id + "/" + k);
                            ++k
                        }
                        d = _.G(c.D.j);
                        for (e = d.next(); !e.done; e = d.next()) f = e.value, f.D = _.yc();
                        return C(h, c.j(), 5);
                    case 5:
                        Ad(h, 0);
                        break;
                    case 2:
                        g = Bd(h);
                        if (c.A) return h.return();
                        g instanceof wt ? c.ea(g) : g instanceof Error && (c.V(g), c.G(g));
                        gi(h)
                }
            })
        })
    };
    Ft.prototype.l = function() {
        var a = new yt;
        this.D.j.push(a);
        return a
    };
    var Gt = function(a) {
            var b = new Et;
            a.D.j.push(b);
            return b
        },
        U = function(a, b) {
            vt(a.D, b);
            b = new Dt(b);
            a.D.A.push(b);
            return b
        },
        V = function(a, b) {
            vt(a.D, b);
            return new Bt(b)
        },
        Ht = function(a, b) {
            vt(a.D, b, !0);
            return new Bt(b)
        },
        It = function(a, b) {
            vt(a.D, b)
        };
    Ft.prototype.ea = function() {};
    Ft.prototype.G = function(a) {
        if (this.D.j.length) {
            a = new wt(a.message);
            for (var b = _.G(this.D.j), c = b.next(); !c.done; c = b.next())
                if (c = c.value, !c.G) {
                    var d = a;
                    c.A = !0;
                    c.B = d;
                    c.H.reject(d)
                }
        }
    };
    var ce = function() {
        _.Kq.apply(this, arguments);
        this.j = []
    };
    _.N(ce, _.Kq);
    var de = function(a, b) {
            b = _.G(b);
            for (var c = b.next(); !c.done; c = b.next()) c = c.value, _.Lq(a, c), a.j.push(c)
        },
        W = function(a, b) {
            de(a, [b])
        },
        ee = function(a) {
            if (a.j.length) {
                a = _.G(a.j);
                for (var b = a.next(); !b.done; b = a.next()) b.value.start()
            }
        };
    ce.prototype.H = function() {
        _.Kq.prototype.H.call(this);
        this.j.length = 0
    };
    var Kt, Jt;
    Kt = function() {
        this.wasPlaTagProcessed = !1;
        this.wasReactiveAdConfigReceived = {};
        this.adCount = {};
        this.wasReactiveAdVisible = {};
        this.stateForType = {};
        this.reactiveTypeEnabledInAsfe = {};
        this.wasReactiveTagRequestSent = !1;
        this.reactiveTypeDisabledByPublisher = {};
        this.tagSpecificState = {};
        this.messageValidationEnabled = !1;
        this.floatingAdsStacking = new Jt
    };
    _.pd = function(a) {
        a.google_reactive_ads_global_state ? null == a.google_reactive_ads_global_state.floatingAdsStacking && (a.google_reactive_ads_global_state.floatingAdsStacking = new Jt) : a.google_reactive_ads_global_state = new Kt;
        return a.google_reactive_ads_global_state
    };
    Jt = function() {
        this.maxZIndexRestrictions = {};
        this.nextRestrictionId = 0;
        this.maxZIndexListeners = []
    };
    var sd, cd, fd;
    sd = 728 * 1.38;
    _.rd = function(a) {
        return a.innerHeight >= a.innerWidth
    };
    _.Lt = function(a) {
        var b = _.ed(a).clientWidth;
        a = a.innerWidth;
        return b && a ? b / a : 0
    };
    cd = function(a, b) {
        return (a = _.ed(a).clientWidth) ? a > (void 0 === b ? 420 : b) ? 32768 : 320 > a ? 65536 : 0 : 16384
    };
    fd = function(a) {
        return (a = _.Lt(a)) ? 1.05 < a ? 262144 : .95 > a ? 524288 : 0 : 131072
    };
    _.ed = function(a) {
        a = a.document;
        var b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    };
    _.Mt = function(a) {
        return void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset
    };
    var Ot, Nt;
    _.id = function(a) {
        var b;
        if (!(b = null == a)) {
            try {
                a.setItem("__storage_test__", "__storage_test__");
                var c = a.getItem("__storage_test__");
                a.removeItem("__storage_test__");
                var d = "__storage_test__" == c
            } catch (e) {
                d = !1
            }
            b = !d
        }
        return b ? null : (a = Nt(a)) ? Ot(a) : null
    };
    Ot = function(a) {
        a = void 0 === a ? [] : a;
        var b = Date.now();
        return _.re(a, function(c) {
            return 36E5 > b - c
        })
    };
    _.gd = function(a) {
        return !!a && 1 > a.length
    };
    Nt = function(a) {
        try {
            var b = a.getItem("__lsv__");
            if (!b) return [];
            try {
                var c = JSON.parse(b)
            } catch (d) {}
            return !Array.isArray(c) || _.Ji(c, function(d) {
                return !_.r(Number, "isInteger").call(Number, d)
            }) ? (a.removeItem("__lsv__"), []) : c
        } catch (d) {
            return null
        }
    };
    var Pt = function(a) {
        P(this, a, null, null)
    };
    _.N(Pt, O);
    var Rt = function(a) {
        P(this, a, Qt, null)
    };
    _.N(Rt, O);
    var Qt = [1, 2];
    var St = function(a) {
        P(this, a, null, null)
    };
    _.N(St, O);
    var Tt = function(a) {
        P(this, a, null, null)
    };
    _.N(Tt, O);
    var Ut = function(a) {
        _.Kq.call(this);
        this.j = a;
        this.m = this.l = null;
        this.D = {};
        this.o = 0;
        this.G = !1
    };
    _.N(Ut, _.Kq);
    var Vt = function(a) {
            a.G || (a.l || (a.j.googlefc ? a.l = a.j : a.l = $l(a.j, "googlefcPresent")), a.G = !0);
            return !!a.l
        },
        Xt = function(a, b, c) {
            if (Vt(a))
                if (a.l === a.j) a = a.j.googlefc || (a.j.googlefc = {}), a.__fci = a.__fci || [], a.__fci.push(b, function(f) {
                    c(Eh(Tt, f))
                });
                else {
                    Wt(a);
                    var d = a.o++;
                    a.D[d] = c;
                    var e = {};
                    a.l.postMessage((e.__fciCall = {
                        command: b,
                        callId: d
                    }, e), "*")
                }
        },
        Yt = function(a, b) {
            return new D.Promise(function(c) {
                Xt(a, b, c)
            })
        },
        Wt = function(a) {
            a.m || (a.m = function(b) {
                try {
                    var c = Eh(Tt, b.data.__fciReturn);
                    (0, a.D[I(c, 1)])(c)
                } catch (d) {}
            }, _.xd(a.j, "message", a.m))
        },
        Zt = function(a, b, c, d) {
            if (!b) return D.Promise.resolve(null);
            var e = M(b, Pt, 3);
            b = M(b, St, 2);
            return e && b && 1 === I(b, 1) && 2 === I(e, 1) ? Yt(a, "getM25Consent").then(function(f) {
                var g = M(f, Rt, 4);
                if (g) {
                    if (f = d, c) {
                        var h = I(g, 1);
                        h && _.r(h, "includes").call(h, c) && (f = !1);
                        (g = I(g, 2)) && _.r(g, "includes").call(g, c) && (f = !0)
                    }
                } else f = null;
                return f
            }) : D.Promise.resolve(null)
        };
    var $t = function() {
        this.j = [];
        this.l = -1
    };
    $t.prototype.set = function(a, b) {
        b = void 0 === b ? !0 : b;
        0 <= a && 52 > a && 0 === a % 1 && this.j[a] != b && (this.j[a] = b, this.l = -1)
    };
    $t.prototype.get = function(a) {
        return !!this.j[a]
    };
    var au = function(a) {
        -1 == a.l && (a.l = Ii(a.j, function(b, c, d) {
            return c ? b + Math.pow(2, d) : b
        }));
        return a.l
    };
    var bu = function() {},
        gu, ku, lu, Lf, fu, eu, du, mu;
    bu.N = function() {
        throw Error("Must be overridden");
    };
    var cu = function() {
        this.l = this.mb = null;
        this.j = new D.Map
    };
    _.N(cu, bu);
    gu = function(a, b) {
        a.j.get(b) || (a.j.set(b, {
            Va: !0,
            Nb: "",
            Ra: "",
            tb: 0,
            Ic: 0,
            nc: [],
            oc: [],
            isBackfill: !1,
            ab: !1
        }), _.Bg(b, function() {
            a.j.delete(b);
            du(a, b)
        }), Pq(b, Sq, function(c) {
            c = c.detail;
            var d = a.j.get(b);
            d.Nb = I(c, 33) || "";
            d.ab = !0;
            d.isBackfill = !!x(c, 9);
            eu(a, b, function() {
                d.Nb = ""
            });
            fu(a, b, function() {
                d.isBackfill = !1;
                d.ab = !1
            })
        }))
    };
    _.hu = function(a, b) {
        var c, d;
        return null !== (d = null === (c = a.j.get(b)) || void 0 === c ? void 0 : c.Va) && void 0 !== d ? d : !1
    };
    _.iu = function(a, b) {
        a.j.get(b) && (a.j.get(b).Va = !1)
    };
    _.ju = function(a, b) {
        a.j.get(b) && (a.j.get(b).Va = !0)
    };
    ku = function(a, b) {
        if (!b.length) return [];
        var c = Ib(b[0].getAdUnitPath());
        return [].concat(_.ec(_.r(a.j, "entries").call(a.j))).filter(function(d) {
            d = _.G(d);
            var e = d.next().value;
            return !!d.next().value.Nb && Ib(e.getAdUnitPath()) === c && !_.r(b, "includes").call(b, e)
        }).map(function(d) {
            d = _.G(d);
            d.next();
            return d.next().value.Nb
        })
    };
    lu = function(a, b) {
        var c, d;
        return null !== (d = null === (c = a.j.get(b)) || void 0 === c ? void 0 : c.Ra) && void 0 !== d ? d : ""
    };
    Lf = function(a, b) {
        return (a = a.j.get(b)) && a.tb - 1 || 0
    };
    fu = function(a, b, c) {
        (a = a.j.get(b)) && a.nc.push(c)
    };
    eu = function(a, b, c) {
        (a = a.j.get(b)) && a.oc.push(c)
    };
    du = function(a, b) {
        if (a = a.j.get(b))
            for (b = a.oc.slice(), a.oc.length = 0, a = _.G(b), b = a.next(); !b.done; b = a.next()) b = b.value, b()
    };
    mu = function(a, b) {
        if (a = a.j.get(b))
            for (b = a.nc.slice(), a.nc.length = 0, a = _.G(b), b = a.next(); !b.done; b = a.next()) b = b.value, b()
    };
    cu.prototype.isBackfill = function(a) {
        var b, c;
        return null !== (c = null === (b = this.j.get(a)) || void 0 === b ? void 0 : b.isBackfill) && void 0 !== c ? c : !1
    };
    cu.prototype.ab = function(a) {
        var b, c;
        return null !== (c = null === (b = this.j.get(a)) || void 0 === b ? void 0 : b.ab) && void 0 !== c ? c : !1
    };
    var nu = function(a, b, c) {
            var d;
            if (a = a.j.get(b)) null === (d = a.rc) || void 0 === d ? void 0 : d.wa(), a.rc = c
        },
        ou = function(a, b) {
            var c;
            if (a = a.j.get(b)) null === (c = a.rc) || void 0 === c ? void 0 : c.wa(), delete a.rc
        };
    ui(cu);
    var pu = function() {
        var a = {};
        return a.adsense_channel_ids = "channel", a.adsense_ad_types = "ad_type", a.adsense_ad_format = "format", a.adsense_background_color = "color_bg", a.adsense_border_color = "color_border", a.adsense_link_color = "color_link", a.adsense_text_color = "color_text", a.adsense_url_color = "color_url", a.page_url = "url", a.adsense_allow_expandable_ads = "ea", a.adsense_encoding = "oe", a.adsense_family_safe = "adsafe", a.adsense_flash_version = "flash", a.adsense_font_face = "f", a.adsense_hints = "hints", a.adsense_keyword_type = "kw_type", a.adsense_keywords = "kw", a.adsense_test_mode = "adtest", a.alternate_ad_iframe_color = "alt_color", a.alternate_ad_url = "alternate_ad_url", a.demographic_age = "cust_age", a.demographic_gender = "cust_gender", a.document_language = "hl", a
    };
    var qu = new D.Map,
        ru = new D.Map,
        su = function() {},
        Qc = function(a, b) {
            var c = ru.get(a);
            c || (b = c = b(), qu.set(b, a), ru.set(a, b));
            return c
        },
        tu = function(a) {
            return (a = Dq[a]) ? Dg()[a]() : null
        };
    var sf = function(a) {
        P(this, a, uu, null)
    };
    _.N(sf, O);
    var tf = function(a) {
            return I(a, 1)
        },
        vu = function(a, b) {
            return E(a, 1, b)
        },
        wu = function(a, b) {
            return Cb(a, 2, b)
        },
        uu = [2];
    var Nc = function(a) {
        P(this, a, null, null)
    };
    _.N(Nc, O);
    var Mc = function(a, b) {
            return E(a, 1, b)
        },
        Lc = function(a, b) {
            return E(a, 2, b)
        },
        xu = function() {
            var a = new Nc;
            return E(a, 3, !0)
        };
    var Bc = function(a) {
        P(this, a, yu, Ic)
    };
    _.N(Bc, O);
    var Hc = function(a, b) {
            return E(a, 1, b)
        },
        Kc = function(a, b) {
            Db(a, 5, b)
        },
        Fc = function(a, b) {
            return E(a, 10, b)
        },
        We = function(a, b) {
            E(a, 13, b)
        },
        Oc = function(a, b) {
            return E(a, 15, b)
        },
        yu = [6],
        Ic = [
            [2, 3],
            [7, 12]
        ];
    var Qe = function(a) {
        P(this, a, null, null)
    };
    _.N(Qe, O);
    var Se = function(a, b) {
            return E(a, 1, b)
        },
        Re = function(a, b) {
            return Db(a, 2, b)
        };
    var Sf = function(a) {
        P(this, a, null, null)
    };
    _.N(Sf, O);
    var Au = function(a) {
        P(this, a, zu, null)
    };
    _.N(Au, O);
    var zu = [2];
    var Bu = function(a) {
        P(this, a, null, null)
    };
    _.N(Bu, O);
    var Du = function(a) {
        P(this, a, Cu, null)
    };
    _.N(Du, O);
    Du.prototype.getAdUnitPath = function() {
        return I(this, 1)
    };
    var Eu = function(a, b) {
            E(a, 2, b)
        },
        Fu = function(a, b) {
            E(a, 24, b)
        };
    Du.prototype.ya = function() {
        return M(this, Bu, 13)
    };
    var kd = function(a) {
            return af(a, 15, 0)
        },
        Te = function(a, b) {
            return wf(a, 21, b, Qe)
        },
        Cu = [3, 4, 5, 6, 8, 9, 21];
    var Gu = function(a, b, c, d, e) {
            if ("string" !== typeof c || aj(c)) e.M(nh("Slot.setTargeting", [c, d]), a);
            else {
                var f = [];
                Array.isArray(d) ? f = d : qa(d) ? f = _.v(Po) ? Array.prototype.slice.call(d) : _.r(Array, "from").call(Array, d) : d && (f = [d]);
                f = f.map(String);
                (d = (J = L(b, sf, 9), _.r(J, "find")).call(J, function(g) {
                    return tf(g) === c
                })) ? wu(d, f): (d = wu(vu(new sf, c), f), wf(b, 9, d, sf));
                e.info(Xr(c, f.join(), b.getAdUnitPath()), a)
            }
        },
        Hu = function(a, b, c, d) {
            if (null == c || "object" !== typeof c) d.error(nh("Slot.updateTargetingFromMap", [c]), a);
            else
                for (var e = _.G(_.r(Object, "keys").call(Object, c)), f = e.next(); !f.done; f = e.next()) f = f.value, Gu(a, b, f, c[f], d)
        };
    var Iu = function(a) {
        this.getId = w(593, function() {
            return a.G
        });
        this.getAdUnitPath = w(594, function() {
            return a.getAdUnitPath()
        });
        this.getName = w(595, function() {
            return a.getName()
        });
        this.toString = w(596, function() {
            return a.toString()
        });
        this.getDomId = w(597, function() {
            return a.j
        })
    };
    var Ju = function(a) {
            return Array.isArray(a) && 2 == a.length ? wm(a[0]) && wm(a[1]) : "string" === typeof a && "fluid" == a
        },
        Ku = function(a) {
            return Array.isArray(a) && 2 == a.length && wm(a[0]) && wm(a[1])
        },
        Lu = function(a) {
            return Array.isArray(a) ? Lc(Mc(new Nc, a[0]), a[1]) : xu()
        },
        Mu = function(a) {
            var b = [];
            if (Jc(a)) b.push(Lu(a));
            else if (Array.isArray(a))
                for (var c = 0; c < a.length; ++c) {
                    var d = a[c];
                    Jc(d) && b.push(Lu(d));
                    sa(d, ["fluid"]) && b.push(xu())
                }
            return b
        },
        Nu = function(a) {
            if (!a || !Array.isArray(a) || 2 !== a.length) return null;
            var b = a[0];
            a = a[1];
            if ("number" === typeof b && 0 <= b) b = Math.floor(b);
            else if (null !== b) return null;
            if ("number" === typeof a && 0 <= a) a = Math.floor(a);
            else if (null !== a) return null;
            return Lc(Mc(new Nc, b), a)
        },
        Ou = function(a) {
            var b = null,
                c = null;
            var d = a && (Array.isArray(a.fixed) || "fluid" === a.fixed);
            var e = a && Array.isArray(a.max);
            if (a && !Array.isArray(a) && (d || e)) {
                if (d = Mu(a.fixed), c = Nu(a.max)) a.min ? ((b = Nu(a.min)) && null === I(b, 1) && Mc(b, 0), b && null === I(b, 2) && Lc(b, 0)) : b = Lc(Mc(new Nc, 0), 0)
            } else d = Mu(a);
            if (a && !Array.isArray(a)) {
                if (a.max && !c) throw Error("Invalid GPT maximum size: " + JSON.stringify(a));
                if (a.min && !b) throw Error("Invalid GPT maximum size: " + JSON.stringify(a));
            }
            if (c) {
                if (0 === I(c, 1) || 0 === I(c, 2)) throw Error("Invalid GPT size, maximums cannot be zero: " + JSON.stringify(a));
                if (b) {
                    e = I(b, 1);
                    var f = I(c, 1);
                    if (null != e && null != f && e > f) throw Error("Invalid GPT size: minimum width larger than maximum width: " + JSON.stringify(a));
                    e = I(b, 2);
                    f = I(c, 2);
                    if (null != e && null != f && e > f) throw Error("Invalid GPT size: minimum height larger than maximum height: " + JSON.stringify(a));
                }
            }
            d.length || c || nm("Invalid GPT fixed size specification: " + JSON.stringify(a));
            c && b ? (a = new Sf, c = Db(a, 1, c), b = Db(c, 2, b)) : b = null;
            return {
                rd: d,
                Ta: b
            }
        },
        Jc = function(a) {
            return Array.isArray(a) && 1 < a.length ? "number" === typeof a[0] && "number" === typeof a[1] : "string" === typeof a && "fluid" == a
        };
    var Pu = function(a) {
        P(this, a, null, null)
    };
    _.N(Pu, O);
    var Qu = function(a) {
        P(this, a, null, null)
    };
    _.N(Qu, O);
    var Su = function(a) {
        P(this, a, Ru, null)
    };
    _.N(Su, O);
    var Tu = function(a, b) {
        E(a, 30, b)
    };
    Su.prototype.ya = function() {
        return M(this, Bu, 18)
    };
    var Uu = function(a) {
            return M(a, Qu, 25)
        },
        Ru = [2, 3, 14];
    var Vu = function() {};
    Vu.N = function() {
        throw Error("Must be overridden");
    };
    var Wu = function() {
        this.j = new D.Map
    };
    _.N(Wu, Vu);
    ui(Wu);
    var Xu = function() {};
    Xu.N = function() {
        throw Error("Must be overridden");
    };
    var zh = function() {
        this.ka = {};
        this.j = new Su;
        this.l = new D.Map;
        E(this.j, 26, vm());
        (_.v(po) && 2 === qd() || _.Xb(36)) && E(this.j, 15, !0)
    };
    _.N(zh, Xu);
    var Yu = function(a) {
            var b = zh.N(),
                c = I(a, 2);
            if (c && !b.ka.hasOwnProperty(c)) {
                var d = Wu.N(),
                    e = ++Kb.N().l;
                d.j.set(c, e);
                E(a, 20, e);
                b.ka[c] = a
            }
        },
        Oe = function() {
            return zh.N().ka
        },
        Zu = function(a, b) {
            var c;
            return null !== (c = a.ka[b]) && void 0 !== c ? c : null
        },
        $u = function(a) {
            var b = zh.N(),
                c;
            a = _.G(a);
            for (var d = a.next(); !d.done; d = a.next()) null === (c = b.ka[d.value.j]) || void 0 === c ? void 0 : Xk(c, 21, [])
        };
    ui(zh);
    var av = function() {
        this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.creativeId = this.campaignId = this.advertiserId = null;
        this.isBackfill = !1;
        this.encryptedTroubleshootingInfo = this.creativeTemplateId = this.companyIds = this.yieldGroupIds = null
    };
    var bv = "",
        cv = null,
        dv = function() {
            for (var a = uq(Uo) || "0-0-0", b = a.split("-").map(function(e) {
                    return Number(e)
                }), c = ["1", "0", "38"].map(function(e) {
                    return Number(e)
                }), d = 0; d < b.length; d++) {
                if (b[d] > c[d]) return a;
                if (b[d] < c[d]) break
            }
            return "1-0-38"
        },
        ev = function() {
            bv || (bv = dv());
            return bv
        },
        fv = function() {
            if (null == cv) {
                for (var a = hg(To), b = [], c = 0; c < a.length; c += 2) Dl(a[c], a[c + 1], b);
                cv = b.join("&")
            }
            return cv
        },
        gv = function(a) {
            var b = Cc(),
                c = new Bu;
            if (!a || !_.ia(a)) return null;
            var d = !1;
            _.$b(a, function(e, f) {
                var g = !1;
                switch (f) {
                    case "allowOverlayExpansion":
                        "boolean" === typeof e ? E(c, 1, a.allowOverlayExpansion) : d = g = !0;
                        break;
                    case "allowPushExpansion":
                        "boolean" === typeof e ? E(c, 2, a.allowPushExpansion) : d = g = !0;
                        break;
                    case "sandbox":
                        !0 === e ? E(c, 3, a.sandbox) : d = g = !0;
                        break;
                    case "useUniqueDomain":
                        "boolean" === typeof e ? E(c, 4, a.useUniqueDomain) : null !== e && (d = g = !0);
                        break;
                    default:
                        g = !0
                }
                g && b.error(Dc("setSafeFrameConfig", Ec(a), f, Ec(e)))
            });
            return d ? null : c
        },
        hv = function(a) {
            var b = new Bu;
            a = _.G(a);
            for (var c = a.next(); !c.done; c = a.next())
                if (c = c.value) {
                    if ( of (c, 1)) {
                        var d = x(c, 1);
                        E(b, 1, d)
                    } of (c, 2) && (d = x(c, 2), E(b, 2, d)); of (c, 3) && (d = x(c, 3), E(b, 3, d)); of (c, 4) && (c = x(c, 4), E(b, 4, c))
                }
            return b
        };
    var iv = function(a, b) {
        this.l = a;
        this.j = b
    };
    iv.prototype.getWidth = function() {
        return this.l
    };
    iv.prototype.getHeight = function() {
        return this.j
    };
    var jv = function(a, b) {
            a = _.r(a, "find").call(a, function(c) {
                c = M(c, Nc, 1);
                return I(c, 1) <= I(b, 1) && I(c, 2) <= I(b, 2)
            });
            return null == a ? null : L(a, Nc, 2)
        },
        kv = function(a) {
            if (!Array.isArray(a) || 2 !== a.length) throw Error("Each mapping entry must be an array of size 2");
            var b = a[0];
            if (!Ku(b)) throw Error("Size must be an array of two non-negative integers");
            b = Lc(Mc(new Nc, b[0]), b[1]);
            if (Array.isArray(a[1]) && 0 === a[1].length) a = [];
            else if (a = Mu(a[1]), 0 === a.length) throw Error("At least one slot size must be present");
            var c = new Au;
            b = Db(c, 1, b);
            return Xk(b, 2, a)
        };
    var lv = function(a, b, c) {
            return "number" === typeof b && "number" === typeof c && 0 < L(a, Au, 6).length ? jv(L(a, Au, 6), Lc(Mc(new Nc, b), c)) : L(a, Nc, 5)
        },
        Yc = function(a) {
            var b = window,
                c = null;
            b.top == b && (b = Bs(!1, b), c = lv(a, b.width, b.height));
            null == c && (c = lv(a));
            return c.map(function(d) {
                return x(d, 3) ? "fluid" : [I(d, 1), I(d, 2)]
            })
        },
        mv = function(a) {
            if (0 == Yc(a).length && of (a, 16)) return "1x1";
            var b = [],
                c = !1;
            a = _.G(Yc(a));
            for (var d = a.next(); !d.done; d = a.next()) d = d.value, Array.isArray(d) ? b.push(d.join("x")) : "fluid" == d ? c = !0 : b.push(d);
            c && b.unshift("320x50");
            return b.join("|")
        },
        nv = function(a) {
            var b = 0,
                c = 0;
            a = _.G(Yc(a));
            for (var d = a.next(); !d.done; d = a.next())
                if (d = d.value, Array.isArray(d)) {
                    var e = _.G(d);
                    d = e.next().value;
                    e = e.next().value;
                    (b || Infinity) > d && 1 < d && (b = d);
                    (c || Infinity) > e && 1 < e && (c = e)
                }
            return [b, c]
        },
        ov = function(a, b) {
            b = void 0 === b ? null : b;
            var c = 0,
                d = [];
            a && (d.push(a.getAdUnitPath()), d.push(mv(a)), d.push(I(a, 2)));
            if (b) {
                a = [];
                for (var e = 0; b && 25 > e; b = b.parentNode, ++e) 9 === b.nodeType ? a.push("") : a.push(b.id);
                (b = a.join()) && d.push(b)
            }
            0 < d.length && (c = Nl(d.join(":")));
            return c.toString()
        },
        pv = function(a) {
            return 0 !== a && 1 !== a
        },
        qv = function(a, b) {
            var c;
            return !(null != (c = x(b, 22)) ? !c : !x(a, 15))
        };
    var Rc = function(a) {
        var b = this,
            c = Cc(),
            d = Zu(zh.N(), a.j),
            e = "",
            f = !1;
        Pq(a, Tq, function(m) {
            var n = m.detail;
            m = n.ac;
            n = n.isBackfill;
            m && (e = m, f = n)
        });
        this.set = w(40, function(m, n) {
            if ("string" !== typeof m || "string" !== typeof n || void 0 === pu()[m]) return c.M(nh("Slot.set", [m, n]), a), b;
            var p = (J = L(d, sf, 3), _.r(J, "find")).call(J, function(u) {
                return tf(u) === m
            });
            p ? wu(p, [n]) : (p = vu(new sf, m), uf(p, 2, n), wf(d, 3, p, sf));
            return b
        });
        this.get = w(41, function(m) {
            if ("string" !== typeof m) return c.M(nh("Slot.get", [m]), a), null;
            var n = (J = L(d, sf, 3), _.r(J, "find")).call(J, function(p) {
                return tf(p) === m
            });
            return (n = n && I(n, 2)) ? n[0] : null
        });
        this.getAttributeKeys = w(42, function() {
            return L(d, sf, 3).map(function(m) {
                return tf(m)
            })
        });
        this.addService = w(43, function(m) {
            m = qu.get(m);
            if (!m) return c.M(nh("Slot.addService", [m]), a), b;
            if ((J = I(d, 4), _.r(J, "includes")).call(J, m.getName())) return c.info(rr(m.getName(), a.toString()), a), b;
            m.Fa(a, d);
            return b
        });
        this.defineSizeMapping = w(44, function(m) {
            try {
                if (!Array.isArray(m)) throw Error("Size mapping must be an array");
                var n = m.map(kv);
                Xk(d, 6, n)
            } catch (p) {
                Ub(44, p), nm("Incorrect usage of googletag.Slot defineSizeMapping: " + p.message)
            }
            return b
        });
        this.setClickUrl = w(45, function(m) {
            if ("string" !== typeof m) return c.M(nh("Slot.setClickUrl", [m]), a), b;
            E(d, 7, m);
            return b
        });
        this.setCategoryExclusion = w(46, function(m) {
            "string" !== typeof m || aj(m) ? c.M(nh("Slot.setCategoryExclusion", [m]), a) : ((J = I(d, 8), _.r(J, "includes")).call(J, m) || uf(d, 8, m), c.info(sr(m), a));
            return b
        });
        this.clearCategoryExclusions = w(47, function() {
            E(d, 8, Ja([]));
            c.info(tr(), a);
            return b
        });
        this.getCategoryExclusions = w(48, function() {
            return I(d, 8).slice()
        });
        this.setTargeting = w(49, function(m, n) {
            Gu(a, d, m, n, c);
            return b
        });
        this.updateTargetingFromMap = w(649, function(m) {
            Hu(a, d, m, c);
            return b
        });
        this.clearTargeting = w(50, function(m) {
            if (void 0 === m) return Xk(d, 9, []), c.info(ur(a.getAdUnitPath()), a), b;
            var n = L(d, sf, 9),
                p = _.r(n, "findIndex").call(n, function(u) {
                    return tf(u) === m
                });
            if (0 > p) return c.M(Ur(m, a.getAdUnitPath()), a), b;
            n.splice(p, 1);
            Xk(d, 9, n);
            c.info(as(m, a.getAdUnitPath()), a);
            return b
        });
        this.getTargeting = w(51, function(m) {
            if ("string" !== typeof m) return c.M(nh("Slot.getTargeting", [m]), a), [];
            var n = (J = L(d, sf, 9), _.r(J, "find")).call(J, function(p) {
                return tf(p) === m
            });
            return n ? I(n, 2).slice() : []
        });
        this.getTargetingKeys = w(52, function() {
            return L(d, sf, 9).map(function(m) {
                return tf(m)
            })
        });
        this.setCollapseEmptyDiv = w(53, function(m, n) {
            n = void 0 === n ? !1 : n;
            if ("object" === typeof m && m && _.v(wo)) {
                if ("boolean" === typeof m.collapseEmpty) {
                    E(d, 10, m.collapseEmpty);
                    var p;
                    Fu(d, null != (p = x(d, 24)) ? p : !0)
                }
                if ("boolean" === typeof m.startCollapsed) {
                    E(d, 11, m.startCollapsed);
                    var u;
                    Fu(d, null != (u = x(d, 24)) ? u : !0)
                }
                "boolean" === typeof m.allowCollapseOnScreen && Fu(d, !m.allowCollapseOnScreen);
                return b
            }
            if ("boolean" !== typeof m || "boolean" !== typeof n) return c.M(nh("Slot.setCollapseEmptyDiv", [m, n]), a), b;
            E(d, 10, m);
            E(d, 11, m && n);
            mc("gpt_ced", function(t) {
                var y = x(d, 11) ? "t" : "f";
                q(t, "sc", y);
                q(t, "level", "slot");
                Zb(t)
            });
            n && !m && c.M(vr(a.toString()), a);
            return b
        });
        this.getAdUnitPath = w(54, function() {
            return a.getAdUnitPath()
        });
        this.getSlotElementId = w(598, function() {
            return a.j
        });
        this.setForceSafeFrame = w(55, function(m) {
            if ("boolean" !== typeof m) return c.M(nh("Slot.setForceSafeFrame", [String(m)]), a), b;
            E(d, 12, m);
            return b
        });
        this.setSafeFrameConfig = w(56, function(m) {
            var n = gv(m);
            if (!n) return c.error(nh("Slot.setSafeFrameConfig", [m]), a), b;
            Db(d, 13, n);
            return b
        });
        var g = null;
        Pq(a, Sq, function(m) {
            m = m.detail;
            if (x(m, 8)) g = null;
            else {
                g = new av;
                var n = !!x(m, 9);
                g.isBackfill = n;
                var p = I(m, 15),
                    u = I(m, 16);
                p.length && u.length && (g.sourceAgnosticCreativeId = p[0], g.sourceAgnosticLineItemId = u[0], n || (g.creativeId = p[0], g.lineItemId = u[0], (n = I(m, 22)) && n.length && (g.creativeTemplateId = n[0])));
                I(m, 17).length && (n = I(m, 17)[0], g.advertiserId = n);
                I(m, 18).length && (n = I(m, 18)[0], g.campaignId = n);
                I(m, 19).length && (n = I(m, 19), g.yieldGroupIds = n);
                I(m, 20).length && (n = I(m, 20), g.companyIds = n);
                m = I(m, 45);
                m = m.length && "string" !== typeof m[0] ? _.pe(m, Ma) : m;
                m.length && (g.encryptedTroubleshootingInfo = m[0])
            }
        });
        this.getResponseInformation = w(355, function() {
            return g
        });
        this.getName = w(170, function() {
            window.console && console.error && console.error("getName on googletag.Slot is deprecated and will be removed. Use getAdUnitPath instead.");
            var m = new Yb("slot_get_name");
            Zb(m);
            ac(m);
            return a.getAdUnitPath()
        });
        var h = new Iu(a);
        this.getSlotId = w(579, function() {
            return h
        });
        this.getServices = w(580, function() {
            return I(d, 4).map(function(m) {
                return tu(m)
            })
        });
        this.getSizes = w(581, function(m, n) {
            return (m = lv(d, m, n)) ? m.map(function(p) {
                return x(p, 3) ? "fluid" : new iv(I(p, 1), I(p, 2))
            }) : null
        });
        this.getClickUrl = w(582, function() {
            return of(d, 7) ? I(d, 7) : ""
        });
        this.getTargetingMap = w(583, function() {
            for (var m = {}, n = _.G(L(d, sf, 9)), p = n.next(); !p.done; p = n.next()) p = p.value, m[tf(p)] = I(p, 2);
            return m
        });
        this.getOutOfPage = w(584, function(m) {
            return "number" === typeof m ? kd(d) === m : 0 != kd(d)
        });
        this.getCollapseEmptyDiv = w(585, function() {
            return of(d, 10) ? x(d, 10) : null
        });
        this.getDivStartsCollapsed = w(586, function() {
            return of(d, 11) ? x(d, 11) : null
        });
        var k = function() {
            return ""
        };
        Pq(a, Uq, function(m) {
            k = m.detail.Dc
        });
        this.getContentUrl = w(587, function() {
            return k()
        });
        this.getFirstLook = w(588, function() {
            nm("The getFirstLook method of googletag.Slot is deprecated. Please update your code to no longer call this method.");
            return 0
        });
        var l = "";
        Pq(a, Sq, function(m) {
            var n;
            l = null != (n = I(m.detail, 34)) ? n : ""
        });
        this.getEscapedQemQueryId = w(591, function() {
            return l
        });
        this.getHtml = w(592, function() {
            return f ? (window.console && console.warn && console.warn("This ad's html cannot be accessed using the getHtml method on googletag.Slot. Returning the empty string instead."), "") : e
        });
        _.v(vo) && (this.setCentering = w(871, function(m) {
            if ("object" !== typeof m || null == m) return c.M(nh("Slot.setCentering", [Ec(m)])), b;
            var n = m.horizontal;
            m = m.vertical;
            "boolean" === typeof n && E(d, 22, n);
            "boolean" === typeof m && E(d, 23, m);
            return b
        }))
    };
    _.N(Rc, su);
    var Y = function() {
        Ft.apply(this, arguments)
    };
    _.N(Y, Ft);
    Y.prototype.V = function(a) {
        var b, c;
        Ub(this.id, a);
        null === (c = null === (b = window.console) || void 0 === b ? void 0 : b.error) || void 0 === c ? void 0 : c.call(b, a)
    };
    var rv = function(a, b, c, d, e) {
        var f = null,
            g = kc(b, e);
        _.xd(c, d, g) && (f = function() {
            return _.Yd(c, d, g)
        }, _.Bg(a, f));
        return f
    };
    var sv = function(a) {
        Y.call(this, 892, _.lb(Lo));
        this.o = this.l();
        this.m = this.l();
        this.B = Ht(this, a)
    };
    _.N(sv, Y);
    sv.prototype.j = function() {
        var a = this.B.value;
        if (!a) throw Error("config timeout");
        this.m.l(M(a, rs, 1));
        this.o.l(M(a, us, 2))
    };
    sv.prototype.ea = function(a) {
        this.G(a)
    };
    sv.prototype.G = function(a) {
        At(this.o, a);
        At(this.m, a)
    };
    var tv = function(a, b, c) {
        Y.call(this, 906, _.lb(Jo));
        this.J = a;
        this.m = Gt(this);
        this.B = Ht(this, b);
        this.o = ng(c, Wq).then(function(d) {
            return Ib((0, H.U)(d.detail.P.getAdUnitPath()))
        });
        this.J !== this.J.top && this.m.notify()
    };
    _.N(tv, Y);
    tv.prototype.j = function() {
        return A(this, function b() {
            var c = this,
                d;
            return B(b, function(e) {
                if (c.J !== c.J.top) return e.return();
                d = c.B.value;
                if (_.v(Ko) && d) return C(e, uv(c, d), 0);
                c.m.notify();
                e.j = 0
            })
        })
    };
    var uv = function(a, b) {
            return A(a, function d() {
                var e, f = this,
                    g;
                return B(d, function(h) {
                    e = L(b, vs, 1);
                    if (!e.length) return f.m.notify(), h.return();
                    g = e[0];
                    return (J = [2, 3], _.r(J, "includes")).call(J, af(g, 3, 0)) ? (vv(f, ff(g, 1)), h.return()) : C(h, wv(f, b), 0)
                })
            })
        },
        wv = function(a, b) {
            return A(a, function d() {
                var e = this,
                    f, g;
                return B(d, function(h) {
                    if (1 == h.j) return C(h, e.o, 2);
                    f = h.l;
                    (g = L(b, vs, 1).some(function(k) {
                        return ff(k, 1) === f
                    })) ? vv(e, f): (mc("pp_iris_failure", function(k) {
                        q(k, "fnc", f);
                        Zb(k)
                    }, {
                        ta: _.lb(No)
                    }), e.m.notify());
                    gi(h)
                })
            })
        },
        vv = function(a, b) {
            var c = Ts(a.J, b, function(d) {
                if (!d) {
                    d = ol(c.j);
                    for (var e = _.G(document.getElementsByName("googlefcPresent")), f = e.next(); !f.done; f = e.next()) d.l(f.value)
                }
                a.m.notify()
            });
            c.start()
        };
    tv.prototype.ea = function(a) {
        this.G(a)
    };
    tv.prototype.G = function() {
        this.m.notify()
    };
    var xv = function(a, b) {
        Y.call(this, 901);
        this.m = V(this, a);
        this.o = ng(b, Wq).then(function(c) {
            return (0, H.U)(c.detail.P.getAdUnitPath())
        })
    };
    _.N(xv, Y);
    xv.prototype.j = function() {
        var a;
        return A(this, function c() {
            var d = this,
                e, f, g, h;
            return B(c, function(k) {
                if (1 == k.j) return (e = d.m.value) ? C(k, d.o, 2) : k.return();
                f = k.l;
                g = Ib(f);
                h = null === (a = L(e, ss, 4)) || void 0 === a ? void 0 : a.some(function(l) {
                    return ff(l, 2) === g
                });
                mc("pp_fsm", function(l) {
                    q(l, "fsnc", g);
                    q(l, "aup", f);
                    q(l, "tld", ff(e, 1));
                    q(l, "pdu", ff(e, 2));
                    q(l, "idu", ff(e, 3));
                    q(l, "pnc", ff(e, 5));
                    q(l, "dm", h);
                    Zb(l)
                }, {
                    ta: _.lb(Mo)
                });
                gi(k)
            })
        })
    };
    var yv = function() {
        Y.call(this, 891);
        this.m = this.l()
    };
    _.N(yv, Y);
    yv.prototype.j = function() {
        return A(this, function b() {
            var c, d, e = this,
                f, g, h, k, l;
            return B(b, function(m) {
                if (1 == m.j) return C(m, new D.Promise(function(n, p) {
                    _.Xb(260)(function(u, t) {
                        t ? p(t) : n(u)
                    })
                }), 2);
                c = m.l;
                if (_.v(Oo)) {
                    try {
                        "string" === typeof c && (d = JSON.parse(c || "[]"))
                    } catch (n) {}
                    if (d && Array.isArray(d)) e.m.j(new ws(d));
                    else throw Error("malformed response");
                } else f = new ws, g = _.Xb(172), (null === g || void 0 === g ? 0 : g.hasAttribute("data-load-fc")) && (h = zg(g.src, "network-code")) && (k = new us, l = wf(k, 1, void 0, vs), E(l, 1, h), E(l, 3, 3), Db(f, 2, k)), e.m.j(f);
                gi(m)
            })
        })
    };
    var zv = function() {
            this.j = null
        },
        Av = function() {
            var a = _.qh(zv),
                b = _.qh(rh),
                c = new ce,
                d = new yv;
            W(c, d);
            d = new sv(d.m);
            W(c, d);
            var e = new tv(window, d.o, b);
            a.j = e.m.promise;
            W(c, e);
            W(c, new xv(d.m, b));
            ee(c)
        };
    var Bv = function() {
            this.l = [];
            this.A = [];
            this.j = {}
        },
        Cv = function(a, b) {
            if (!_.r(a.l, "includes").call(a.l, b)) switch (b) {
                case 1:
                case 2:
                case 3:
                    var c;
                    if (c = _.v(Vo) ? nt[b] : lt[b]) {
                        var d = b + "_hostpage_library";
                        if (c = Hl(document, c)) c.id = d
                    }
                    a.l.push(b);
                    b = new ot(b);
                    a.A.push(b);
                    a = Dg();
                    a.hostpageLibraryTokens || (a.hostpageLibraryTokens = {});
                    a.hostpageLibraryTokens[b.j] = b.l
            }
        },
        Dv = function(a, b) {
            var c, d;
            a = null != (d = null == (c = a.j[b]) ? void 0 : _.r(c, "values").call(c)) ? d : [];
            return [].concat(_.ec(a))
        };
    var Ev = function(a) {
            var b;
            return (null == (b = (J = L(a, sf, 14), _.r(J, "find")).call(J, function(c) {
                return "page_url" === tf(c)
            })) ? void 0 : I(b, 2)[0]) || null
        },
        Fv = function(a) {
            var b;
            return (null == (b = (J = L(a, sf, 3), _.r(J, "find")).call(J, function(c) {
                return "page_url" === tf(c)
            })) ? void 0 : I(b, 2)[0]) || null
        },
        Gv = function(a, b) {
            return Ev(b.T) ? !0 : a.some(function(c) {
                return null != Fv(b.P[c.j])
            })
        },
        yg = function(a) {
            var b = a.document;
            return Ds(a) ? b.URL : b.referrer
        },
        Uc = function(a) {
            try {
                var b = Wm(a, window.top)
            } catch (c) {
                b = new _.ad(-12245933, -12245933)
            }
            return b
        },
        Hv = Wc(function() {
            return "XMLHttpRequest" in window && "withCredentials" in new XMLHttpRequest
        }),
        Iv = function(a) {
            return a ? (a = $m(a)) && a.floor() : null
        },
        Jv = function(a) {
            return !!x(a, 6) || _.v(Ln)
        },
        Kv = function(a, b) {
            for (var c = {}, d = _.G(_.r(Object, "keys").call(Object, b)), e = d.next(); !e.done; e = d.next()) {
                e = e.value;
                var f = b[e];
                f = Oa(f.constructor, Ga(f.za()));
                var g = Wu.N(),
                    h = g.j.get(e);
                null == h ? h = ++Kb.N().l : g.j.delete(e);
                E(f, 20, h);
                c[e] = f
            }
            a = Oa(a.constructor, Ga(a.za()));
            b = new Date(Date.now());
            b = b.getUTCFullYear() + Hj(b.getUTCMonth() + 1) + Hj(b.getUTCDate());
            return {
                T: a,
                P: c,
                Sb: b
            }
        },
        Mv = Wc(function() {
            for (var a = "", b = _.G(Lv()), c = b.next(); !c.done; c = b.next()) c = c.value, 15 >= c && (a += "0"), a += c.toString(16);
            return a
        }),
        Lv = function() {
            var a;
            if ("function" === typeof(null == (a = window.crypto) ? void 0 : a.getRandomValues)) {
                a = new Uint8Array(16);
                var b;
                null == (b = window.crypto) || b.getRandomValues(a);
                return a
            }
            var c;
            if ("function" === typeof(null == (c = window.msCrypto) ? void 0 : c.getRandomValues)) return b = window.msCrypto, a = new Uint8Array(16), b.getRandomValues(a), a;
            b = Array(16);
            for (a = 0; a < b.length; a++) b[a] = Math.floor(255 * Math.random());
            return b
        },
        Nv = function(a, b) {
            return _.v(Tn) && (a = it(a, b)) ? (a = a.split(":"), 3 !== a.length ? Mv() : (a = a[0].split("=")[1]) ? a.slice(0, 8) : Mv()) : Mv()
        },
        Tc = function(a, b) {
            return _.v(Co) ? Vc(a, b) : Ov(a, b) || Vc(a, b)
        },
        Pv = function(a, b, c, d) {
            var e = Vc(a, c),
                f = "none" === (null == e ? void 0 : e.style.display);
            f && (e.style.display = "block");
            a = bd(c, a, b, d);
            f && (e.style.display = "none");
            return a
        },
        Qv = function(a) {
            return !!a && ( of (a, 1) || !!x(a, 6))
        },
        Rv = function(a, b, c) {
            return Qv(b) || 4 == kd(a) || 5 === kd(a) || c
        },
        Sv = function(a) {
            return "google_ads_iframe_" + a.toString()
        },
        Tv = function(a) {
            return Sv(a) + "__container__"
        },
        Ov = function(a, b) {
            return (b = Vc(a, b)) && b.querySelector('[id="' + Tv(a) + '"]') || null
        },
        Uv, Vv, Wv = function(a, b) {
            return null != (Vv = null == (Uv = Ov(a, b)) ? void 0 : Uv.querySelector('iframe[id="' + Sv(a) + '"]')) ? Vv : null
        },
        Df = function(a, b) {
            var c = new $t;
            a.forEach(function(d, e) {
                c.set(a.length - e - 1, b(d))
            });
            return au(c)
        },
        Xe = function(a, b, c, d, e) {
            c = void 0 === c ? "" : c;
            d = void 0 === d ? function(l) {
                return !!l
            } : d;
            e = void 0 === e ? "," : e;
            var f = [],
                g = !1;
            a = _.G(a);
            for (var h = a.next(); !h.done; h = a.next()) {
                h = b(h.value);
                var k = d(h);
                g = g || k;
                f.push(String(k ? h : c))
            }
            return g ? f.join(e) : null
        },
        Xv = function(a) {
            var b = window,
                c, d, e;
            rc(831, function() {
                return void(null == (c = b.performance) ? void 0 : null == (e = (d = c).mark) ? void 0 : e.call(d, a))
            })
        },
        Vc = function(a, b) {
            b = void 0 === b ? document : b;
            return zh.N().l.get(a) || b.getElementById(a.j)
        },
        Yv = function(a) {
            return _.Xb(260) ? _.qh(zv).j.then(kc(895, function() {
                return Vt(a)
            })) : D.Promise.resolve(Vt(a))
        };
    var Zv = function() {
            var a = this;
            this.m = function() {
                return !1
            };
            this.H = "";
            this.j = this.l = null;
            this.A = !1;
            var b, c = zh.N(),
                d = {};
            this[bq] = (d[19] = function() {
                return !!x(c.j, 10)
            }, d[14] = Hv, d[13] = function(e) {
                for (var f = [], g = 0; g < arguments.length; ++g) f[g] = arguments[g];
                return f.some(function(h) {
                    return 0 == a.H.lastIndexOf(h, 0)
                })
            }, d[12] = function() {
                return !!x(c.j, 6)
            }, d[11] = rt, d[15] = function(e) {
                return a.m(e)
            }, d[7] = function() {
                return !(!_.F.crypto || !_.F.crypto.subtle)
            }, d[48] = function() {
                return !!a.l
            }, d[51] = function() {
                return a.A
            }, d[53] = function() {
                try {
                    return !!document.createElement("link").relList.supports("webbundle")
                } catch (e) {
                    return !1
                }
            }, d);
            d = {};
            this[cq] = (d[8] = function(e) {
                return null != (b = bt(a.l, e)) ? b : void 0
            }, d[10] = function(e) {
                return a.j ? Nl(e + a.j) % 1E3 : void 0
            }, d);
            this[dq] = {}
        },
        $v = function(a, b) {
            b && !a.j && (a.j = _.r(b.split(":"), "find").call(b.split(":"), function(c) {
                return 0 === c.indexOf("ID=")
            }) || null)
        };
    var aw = _.Fi(function() {
            nm("The googletag.pubads().definePassback function has been deprecated. The function may break in certain contexts, see https://developers.google.com/publisher-tag/guides/passback-tags#construct_passback_tags for how to correctly create a passback.")
        }),
        wh = function() {
            this.l = new D.Map;
            this.j = new D.Set;
            _.qh(Zv).m = vd
        };
    wh.prototype.add = function(a, b, c) {
        var d = this,
            e = void 0 === c ? {} : c;
        c = void 0 === e.lb ? void 0 : e.lb;
        var f = void 0 === e.format ? 0 : e.format;
        e = void 0 === e.Mc ? !1 : e.Mc;
        var g = td(f);
        if (g) return mc("gpt_pla_ns", function(k) {
            q(k, "iu", a);
            q(k, "f", null != f ? f : "");
            q(k, "nsr", g);
            Zb(k)
        }), {};
        e && aw();
        e = this.l.get(a) || Number(e);
        b = bw(a, e, b, c || "gpt_unit_" + a + "_" + e);
        if (!b) return {};
        c = b.ka;
        var h = b.slotId;
        this.l.set(a, e + 1);
        this.j.add(h);
        _.Bg(h, function() {
            return void d.j.delete(h)
        });
        Hq(a);
        return {
            slotId: h,
            Wa: c
        }
    };
    var ud = function() {
            var a = _.qh(wh);
            return [].concat(_.ec(a.j))
        },
        cw = function(a) {
            var b;
            return Dv(_.qh(Bv), a).map(function(c) {
                return null == (b = Wv(c, document)) ? void 0 : b.contentWindow
            }).filter(function(c) {
                return !!c
            })
        },
        dw = function(a, b) {
            a = _.G(b);
            for (b = a.next(); !b.done; b = a.next()) sc(b.value)
        },
        ew = function(a, b) {
            a = _.G(a.j);
            for (var c = a.next(); !c.done; c = a.next())
                if (c = c.value, c.j === b) return c;
            return null
        },
        mh = function(a, b, c, d) {
            d = void 0 === d ? !1 : d;
            return "string" === typeof a && 0 < a.length && b && (void 0 === c || "string" === typeof c) ? _.qh(wh).add(a, b, {
                lb: c,
                Mc: d
            }) : {}
        },
        fw = function(a, b, c) {
            var d = mh(a, b, c).slotId;
            if (!d) return Cc().error(nh("googletag.defineSlot", [a, b, c]), void 0, _.v(rn)), null;
            var e;
            return null != (e = null == d ? void 0 : d.l) ? e : null
        },
        bw = function(a, b, c, d) {
            var e = ew(_.qh(wh), d);
            if (e) return Cc().error(yr(d, a, e.getAdUnitPath())), null;
            var f = new Du;
            Eu(E(f, 1, a), d);
            c = Ou(c);
            e = c.Ta;
            Xk(f, 5, c.rd);
            null !== e && Db(f, 16, e);
            Yu(f);
            var g = new br(a, b, d);
            cr(g, Sc(g));
            _.Bg(g, function() {
                var h = zh.N();
                delete h.ka[g.j];
                h.l.delete(g);
                h = g.getAdUnitPath();
                var k;
                h = Ib(h);
                var l = (null !== (k = fc.get(h)) && void 0 !== k ? k : 0) - 1;
                0 >= l ? fc.delete(h) : fc.set(h, l);
                Cc().info($r(g.toString()), g)
            });
            Cc().info(mr(g.toString()), g);
            Pq(g, Uq, function(h) {
                h = h.detail.Rc;
                Cc().info(nr(g.getAdUnitPath()), g);
                Jb(Kb.N(), "7", 9, Lf(cu.N(), g), 0, h)
            });
            Pq(g, Sq, function(h) {
                var k = h.detail;
                Cc().info(or(g.getAdUnitPath()), g);
                var l;
                h = Kb.N();
                var m = I(f, 20);
                k = null != (l = I(k, 34)) ? l : "";
                h.j && (_.F.google_timing_params = _.F.google_timing_params || {}, _.F.google_timing_params["qqid." + m] = k)
            });
            Pq(g, Tq, function() {
                return void Cc().info(pr(g.getAdUnitPath()), g)
            });
            Pq(g, Vq, function() {
                return void Cc().info(qr(g.getAdUnitPath()), g)
            });
            return {
                ka: f,
                slotId: g
            }
        };
    fw = kc(74, fw);
    var gw = function(a, b) {
            this.slot = a.l;
            this.serviceName = b
        },
        hw = function(a, b) {
            gw.call(this, a, b);
            this.isEmpty = !1;
            this.slotContentChanged = !0;
            this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.labelIds = this.creativeTemplateId = this.creativeId = this.campaignId = this.advertiserId = this.size = null;
            this.isBackfill = !1;
            this.companyIds = this.yieldGroupIds = null
        };
    _.N(hw, gw);
    var iw = function() {
        gw.apply(this, arguments)
    };
    _.N(iw, gw);
    var jw = function(a, b, c) {
        gw.call(this, a, b);
        this.inViewPercentage = c
    };
    _.N(jw, gw);
    var kw = function() {
        gw.apply(this, arguments)
    };
    _.N(kw, gw);
    var lw = function() {
        gw.apply(this, arguments)
    };
    _.N(lw, gw);
    var mw = function(a, b, c, d) {
        gw.call(this, a, b);
        this.makeRewardedVisible = c;
        this.payload = d
    };
    _.N(mw, gw);
    var nw = function(a, b, c) {
        gw.call(this, a, b);
        this.payload = c
    };
    _.N(nw, gw);
    var ow = function() {
        gw.apply(this, arguments)
    };
    _.N(ow, gw);
    var pw = function() {
        gw.apply(this, arguments)
    };
    _.N(pw, gw);
    var qw = function() {
        gw.apply(this, arguments)
    };
    _.N(qw, gw);
    var rw = function() {
        gw.apply(this, arguments)
    };
    _.N(rw, gw);
    var sw = function() {
        gw.apply(this, arguments)
    };
    _.N(sw, gw);
    var tw = new D.Set,
        uw = function() {
            Nq.call(this);
            tw.add(this);
            this.j = [];
            this.l = !1;
            this.B = 0;
            this.D = new D.Map;
            this.log = Cc();
            this.log.info(Cr(this.getName()));
            this.F = []
        };
    _.N(uw, Nq);
    var vw = function(a) {
            if (!a.l) {
                a.l = !0;
                sq(6);
                a.ic();
                for (var b = _.G(a.F), c = b.next(); !c.done; c = b.next()) {
                    c = c.value;
                    try {
                        c()
                    } catch (d) {}
                }
                a.F.length = 0
            }
        },
        ww = function(a, b) {
            if (a.l) try {
                b()
            } catch (c) {} else a.F.push(b)
        };
    uw.prototype.Fa = function(a, b) {
        this.j.push(a);
        var c = new lw(a, this.getName());
        this.dispatchEvent("slotAdded", 818, c);
        this.log.info(Fr(this.getName(), a.getAdUnitPath()), a);
        a = this.getName();
        uf(b, 4, a)
    };
    uw.prototype.destroySlots = function(a) {
        var b = this;
        return a.filter(function(c) {
            return ea(b.j, c)
        })
    };
    uw.prototype.addEventListener = function(a, b) {
        var c = this;
        if (this.B >= _.lb(Mn) && 0 < _.lb(Mn)) throw Error("Reached Limit for addEventListener");
        var d = function(f) {
            f = f.detail;
            try {
                b(f)
            } catch (g) {
                c.log.error(Yr(String(g), a)), window.console && console.error && console.error(g)
            } finally {
                xw(c, a, f)
            }
        };
        if (_.v(Nn)) {
            var e;
            if (null == (e = this.D.get(a)) ? 0 : e.has(b)) return;
            this.D.has(a) || this.D.set(a, new D.Map);
            this.D.get(a).set(b, d)
        }
        Pq(this, a, d);
        this.B++
    };
    uw.prototype.removeEventListener = function(a, b) {
        var c;
        Oq(this, a, null == (c = this.D.get(a)) ? void 0 : c.get(b)) && (this.B--, this.D.get(a).delete(b))
    };
    var xw = function(a, b, c) {
            _.v(pn) && mc("gpt_svc_evt", function(d) {
                Zb(d);
                q(d, "div", c.slot.getSlotElementId());
                q(d, "iu", c.slot.getAdUnitPath());
                q(d, "et", b);
                var e;
                q(d, "sn", null != (e = _.Kf()) ? e : "");
                if (e = _.r(a.j, "find").call(a.j, function(p) {
                        return p.l === c.slot
                    })) {
                    var f = Vc(e, document),
                        g;
                    q(d, "qqid", null != (g = null == f ? void 0 : f.getAttribute("data-google-query-id")) ? g : "");
                    q(d, "rc", Lf(cu.N(), e));
                    try {
                        var h = Zu(zh.N(), e.j),
                            k = Pv(e, h, document, !1);
                        if (k) {
                            var l = As(window.top.document, window.top),
                                m = Bs(!0, window).height;
                            q(d, "yo", Math.floor((k.y - l.y) / m))
                        }
                        if (f) {
                            var n;
                            q(d, "amp", !(null == (n = f.querySelector("iframe").contentWindow) || !n.document.querySelector("html[amp4ads]")))
                        }
                    } catch (p) {}
                }
                c instanceof jw && q(d, "ivp", c.inViewPercentage)
            }, {
                ta: Number("impressionViewable" === b && c instanceof iw || "slotVisibilityChanged" === b && c instanceof jw)
            })
        },
        yw = function(a, b) {
            for (var c = _.G(tw), d = c.next(); !d.done; d = c.next()) d.value.destroySlots(a, b)
        };
    var zw = function(a) {
            var b = null,
                c = null,
                d = "";
            if ("string" === typeof a) d = a, b = ew(_.qh(wh), d);
            else if (_.ia(a) && 1 == a.nodeType) c = a, d = c.id, b = ew(_.qh(wh), d);
            else {
                var e;
                b = null != (e = (J = ud(), _.r(J, "find")).call(J, function(f) {
                    return f.l === a
                })) ? e : null
            }
            return {
                slotId: b,
                nd: c,
                od: d
            }
        },
        Aw = kc(95, function(a) {
            var b = Cc(),
                c = zw(a),
                d = c.slotId,
                e = c.nd;
            c = c.od;
            if (d) {
                if (a = zh.N().j, c = Zu(zh.N(), d.j))
                    if (a = Kv(a, Oe()), !x(c, 19))
                        if (e && zh.N().l.set(d, e), Vc(d) || pv(kd(c)))
                            for (E(c, 19, !0), b = _.G(I(c, 4)), e = b.next(); !e.done; e = b.next()) {
                                c = tu(e.value);
                                a: if (e = uw, c instanceof e) e = c;
                                    else {
                                        if (c instanceof su && (c = qu.get(c), c instanceof e)) {
                                            e = c;
                                            break a
                                        }
                                        e = null
                                    }
                                e.l && e.uc(a, d)
                            } else b.M(wr(String(c.getAdUnitPath()), String(I(c, 2))), d)
            } else c ? b.error(xr(c)) : b.error(nh("googletag.display", [String(a)]))
        });
    var Ed = Oi("https://tpc.googlesyndication.com/sodar/%{basename}.js");
    var zd = function(a) {
        return new D.Promise(function(b, c) {
            var d = new XMLHttpRequest;
            d.onreadystatechange = function() {
                d.readyState === d.DONE && (200 <= d.status && 300 > d.status ? b(JSON.parse(d.responseText)) : c())
            };
            d.open("GET", a, !0);
            d.send()
        })
    };
    var Jh = function(a) {
        P(this, a, null, null)
    };
    _.N(Jh, O);
    var Ih = function(a, b) {
            return Fb(a, 2, b)
        },
        Hh = function(a, b) {
            return Ab(a, 3, b, "")
        },
        Kh = function(a) {
            P(this, a, null, null)
        };
    _.N(Kh, O);
    var Bw = function(a) {
            this.j = a.j;
            this.l = a.l;
            this.A = a.A;
            this.qb = a.qb;
            this.J = a.J;
            this.fb = a.fb;
            this.Kb = a.Kb;
            this.Tb = a.Tb;
            this.Jb = a.Jb
        },
        Cw = function(a, b, c) {
            this.j = a;
            this.l = b;
            this.A = c;
            this.J = window;
            this.fb = "env";
            this.Kb = "n";
            this.Tb = "0";
            this.Jb = "1"
        },
        Mh = function(a, b) {
            var c, d, e = Hd(af(b, 2, 0)),
                f = ff(b, 3);
            a: switch (af(b, 4, 0)) {
                case 1:
                    var g = "pt";
                    break a;
                case 2:
                    g = "cr";
                    break a;
                default:
                    g = ""
            }
            e = new Cw(e, f, g);
            b = null !== (d = null === (c = M(b, Kh, 5)) || void 0 === c ? void 0 : ff(c, 1)) && void 0 !== d ? d : "";
            e.qb = b;
            e.J = a;
            return new Bw(e)
        };
    var ef = function(a) {
        P(this, a, Dw, null)
    };
    _.N(ef, O);
    var hf = function(a, b) {
            return E(a, 1, b)
        },
        lf = function(a, b) {
            E(a, 2, b)
        },
        mf = function(a, b) {
            E(a, 4, b)
        },
        Fw = function(a, b) {
            var c = I(a, 1);
            null != c && Ek(b, 1, c);
            c = I(a, 2);
            null != c && Ck(b, 2, c);
            c = L(a, nf, 3);
            0 < c.length && Hk(b, 3, c, Ew);
            c = I(a, 4);
            null != c && Dk(b, 4, c)
        },
        nf = function(a) {
            P(this, a, Gw, null)
        };
    _.N(nf, O);
    var rf = function(a, b) {
            E(a, 1, b)
        },
        pf = function(a, b) {
            E(a, 2, b)
        },
        qf = function(a, b) {
            E(a, 3, b)
        },
        vf = function(a, b) {
            E(a, 5, b)
        },
        Ew = function(a, b) {
            var c = I(a, 1);
            null != c && Ek(b, 1, c);
            c = I(a, 2);
            null != c && Ck(b, 2, c);
            c = I(a, 3);
            null != c && Ek(b, 3, c);
            c = I(a, 4);
            if (0 < c.length && null != c)
                for (var d = 0; d < c.length; d++) Ek(b, 4, c[d]);
            c = I(a, 5);
            null != c && Dk(b, 5, c)
        },
        Dw = [3],
        Gw = [4];
    var $e = function(a) {
        P(this, a, Hw, null)
    };
    _.N($e, O);
    var cf = function(a, b) {
            return E(a, 1, b)
        },
        gf = function(a, b) {
            return wf(a, 2, b, ef)
        },
        Iw = function(a, b) {
            var c = I(a, 1);
            null != c && Dk(b, 1, c);
            c = L(a, ef, 2);
            0 < c.length && Hk(b, 2, c, Fw)
        },
        Hw = [2];
    var kf = function(a) {
        P(this, a, Jw, null)
    };
    _.N(kf, O);
    var bf = function(a, b) {
            return wf(a, 1, b, $e)
        },
        yf = function(a, b) {
            a = L(a, $e, 1);
            0 < a.length && Hk(b, 1, a, Iw)
        },
        Jw = [1];
    var Kw = function(a) {
        P(this, a, null, null)
    };
    _.N(Kw, O);
    var Mw = function(a) {
        P(this, a, Lw, null)
    };
    _.N(Mw, O);
    var Lw = [13];
    var Ow = function(a) {
        P(this, a, Nw, null)
    };
    _.N(Ow, O);
    var Nw = [13];
    var Qw = function(a) {
        P(this, a, Pw, null)
    };
    _.N(Qw, O);
    var Rw = function(a) {
        P(this, a, null, null)
    };
    _.N(Rw, O);
    var Tw = function(a, b) {
            var c = I(a, 1);
            null != c && null != c && Bk(b, 1, c);
            c = M(a, Sw, 2);
            null != c && Gk(b, 2, c);
            c = M(a, Sw, 3);
            null != c && Gk(b, 3, c);
            c = I(a, 4);
            null != c && Ek(b, 4, c);
            c = I(a, 5);
            null != c && Ek(b, 5, c)
        },
        Sw = function(a) {
            P(this, a, null, null)
        };
    _.N(Sw, O);
    var Fk = function(a, b) {
            var c = I(a, 1);
            null != c && null != c && Bk(b, 1, c);
            c = I(a, 2);
            null != c && null != c && Bk(b, 2, c);
            c = I(a, 3);
            null != c && null != c && Bk(b, 3, c)
        },
        Uw = function(a) {
            P(this, a, null, null)
        };
    _.N(Uw, O);
    var Td = function(a, b) {
            return E(a, 8, b)
        },
        Vw = function(a, b) {
            var c = I(a, 1);
            null != c && Ek(b, 1, c);
            c = I(a, 2);
            null != c && Ek(b, 2, c);
            c = I(a, 3);
            null != c && Ck(b, 3, c);
            c = I(a, 7);
            null != c && Ck(b, 7, c);
            c = I(a, 8);
            if (null != c) {
                var d = c;
                if (null != d) {
                    Pj(b.j, 69);
                    c = b.j;
                    var e = d;
                    e = (d = 0 > e ? 1 : 0) ? -e : e;
                    if (0 === e) 0 < 1 / e ? Ca = Da = 0 : (Da = 0, Ca = 2147483648);
                    else if (isNaN(e)) Da = 0, Ca = 2147483647;
                    else if (3.4028234663852886E38 < e) Da = 0, Ca = (d << 31 | 2139095040) >>> 0;
                    else if (1.1754943508222875E-38 > e) e = Math.round(e / Math.pow(2, -149)), Da = 0, Ca = (d << 31 | e) >>> 0;
                    else {
                        var f = Math.floor(Math.log(e) / Math.LN2);
                        e *= Math.pow(2, -f);
                        e = Math.round(8388608 * e) & 8388607;
                        Da = 0;
                        Ca = (d << 31 | f + 127 << 23 | e) >>> 0
                    }
                    d = Ca;
                    c.push(d >>> 0 & 255);
                    c.push(d >>> 8 & 255);
                    c.push(d >>> 16 & 255);
                    c.push(d >>> 24 & 255)
                }
            }
            c = I(a, 4);
            null != c && null != c && Ak(b, 4, c);
            c = I(a, 5);
            null != c && null != c && Ak(b, 5, c);
            c = I(a, 6);
            null != c && null != c && Ak(b, 6, c)
        },
        Pw = [1, 2];
    var Ww = function(a) {
        P(this, a, null, null)
    };
    _.N(Ww, O);
    var Yw = function(a) {
        P(this, a, Xw, null)
    };
    _.N(Yw, O);
    var Xw = [1];
    var Zw = function(a) {
        P(this, a, null, null)
    };
    _.N(Zw, O);
    var $w = function(a) {
        P(this, a, null, null)
    };
    _.N($w, O);
    var ax = function(a) {
        P(this, a, null, null)
    };
    _.N(ax, O);
    var cx = function(a) {
        P(this, a, bx, null)
    };
    _.N(cx, O);
    var ex = function(a) {
        P(this, a, dx, null)
    };
    _.N(ex, O);
    var bx = [1, 2],
        dx = [4];
    var gx = function(a) {
        P(this, a, fx, null)
    };
    _.N(gx, O);
    var fx = [1, 2];
    var hx = function(a) {
        P(this, a, null, null)
    };
    _.N(hx, O);
    var Ld = function(a) {
        P(this, a, null, null)
    };
    _.N(Ld, O);
    var ix = function(a) {
        P(this, a, null, null)
    };
    _.N(ix, O);
    var kx = function(a) {
        P(this, a, jx, null)
    };
    _.N(kx, O);
    var jx = [1, 2];
    var Md = function(a) {
        P(this, a, null, null)
    };
    _.N(Md, O);
    var mx = function(a) {
        P(this, a, lx, null)
    };
    _.N(mx, O);
    var lx = [1, 2, 3];
    var ox = function(a) {
        P(this, a, nx, null)
    };
    _.N(ox, O);
    var nx = [1];
    var qx = function(a) {
        P(this, a, px, null)
    };
    _.N(qx, O);
    var px = [1];
    var rx = function(a) {
        P(this, a, null, null)
    };
    _.N(rx, O);
    var tx = function(a) {
        P(this, a, sx, null)
    };
    _.N(tx, O);
    var vx = function(a) {
        P(this, a, ux, null)
    };
    _.N(vx, O);
    var wx = function(a) {
        P(this, a, null, null)
    };
    _.N(wx, O);
    var sx = [1],
        ux = [1, 2, 3, 4];
    var xx = function(a) {
        P(this, a, null, null)
    };
    _.N(xx, O);
    var yx = function(a) {
        P(this, a, null, null)
    };
    _.N(yx, O);
    var zx = function(a) {
        P(this, a, null, null)
    };
    _.N(zx, O);
    var Bx = function(a) {
        P(this, a, Ax, null)
    };
    _.N(Bx, O);
    var Ax = [2];
    var Cx = function(a) {
        P(this, a, null, null)
    };
    _.N(Cx, O);
    var Dx = function(a) {
        P(this, a, null, null)
    };
    _.N(Dx, O);
    var Fx = function(a) {
        P(this, a, Ex, null)
    };
    _.N(Fx, O);
    var Ex = [3, 7];
    var Ix = function(a) {
        P(this, a, Gx, Hx)
    };
    _.N(Ix, O);
    var Jx = function(a) {
        P(this, a, null, null)
    };
    _.N(Jx, O);
    Jx.prototype.getHtml = function() {
        return I(this, 1)
    };
    var Gx = [14, 15, 16, 17, 18, 19, 20, 21, 22, 45, 23, 27, 28, 38, 53, 60],
        Hx = [
            [4, 41],
            [39, 48]
        ];
    var Kx = navigator,
        Lx = function(a) {
            var b = 1,
                c;
            if (void 0 != a && "" != a)
                for (b = 0, c = a.length - 1; 0 <= c; c--) {
                    var d = a.charCodeAt(c);
                    b = (b << 6 & 268435455) + d + (d << 14);
                    d = b & 266338304;
                    b = 0 != d ? b ^ d >> 21 : b
                }
            return b
        },
        Mx = function(a, b) {
            if (!a || "none" == a) return 1;
            a = String(a);
            "auto" == a && (a = b, "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
            return Lx(a.toLowerCase())
        },
        Nx = /^\s*_ga=\s*1\.(\d+)[^.]*\.(.*?)\s*$/,
        Ox = /^[^=]+=\s*GA1\.(\d+)[^.]*\.(.*?)\s*$/,
        Px = /^\s*_ga=\s*()(amp-[\w.-]{22,64})$/;
    var Rx = function(a) {
        P(this, a, Qx, null)
    };
    _.N(Rx, O);
    var Sx = function() {
            var a = new Rx,
                b = _.v(Bp);
            return Wk(a, 7, b)
        },
        Qx = [15];
    var Tx = function(a) {
        P(this, a, null, null)
    };
    _.N(Tx, O);
    var Ux = function(a) {
        P(this, a, null, null)
    };
    _.N(Ux, O);
    Vi(Ni(Oi("https://pagead2.googlesyndication.com/pagead/osd.js")));
    var Vx = function(a, b) {
        if (!(window && Math.random && navigator)) return -1;
        if (window.__google_ad_urls) {
            var c = window.__google_ad_urls;
            try {
                if (c && c.getOseId()) return c.getOseId()
            } catch (e) {}
        }
        if (!window.__google_ad_urls_id) {
            c = window.google_enable_ose;
            if (!0 === c) var d = 2;
            else !1 !== c && (d = Jl([0], a), null == d && ((d = Jl([2], b)) || (d = 3)));
            if (!d) return 0;
            window.__google_ad_urls_id = d
        }
        return window.__google_ad_urls_id
    };
    var Wx = function() {};
    aa = Wx.prototype;
    aa.getNewBlocks = function() {};
    aa.setupOse = function() {};
    aa.getOseId = function() {
        return -1
    };
    aa.getCorrelator = function() {
        return ""
    };
    aa.numBlocks = function() {
        return 0
    };
    aa.registerAdBlock = function() {};
    aa.unloadAdBlock = function() {};
    var Xx = new Zp(1, an()),
        Yx = function() {
            var a = an();
            a && "undefined" != typeof a.google_measure_js_timing && !a.google_measure_js_timing && (Xx.j = !1, Xx.events != Xx.A.google_js_reporting_queue && (Yp() && _.Hi(Xx.events, qc), Xx.events.length = 0))
        };
    (function() {
        var a = an();
        a && a.document && ("complete" == a.document.readyState ? Yx() : Xx.j && _.xd(a, "load", function() {
            Yx()
        }))
    })();
    var $x = function() {
            var a = Zx,
                b = an() || _.F;
            return b.google_osd_loaded ? !1 : (Hl(b.document, a), b.google_osd_loaded = !0)
        },
        ay = function(a, b, c) {
            a && (c ? _.xd(a, "load", b) : _.Yd(a, "load", b))
        },
        by = function() {
            var a = (an() || _.F).google_osd_amcb;
            return "function" === typeof a ? a : null
        },
        cy = Vi(Ni(Oi("https://www.googletagservices.com/activeview/js/current/osd.js")));
    var dy = function(a, b) {
        this.l = b && b.l ? b.l : 0;
        this.A = b ? b.A : "";
        this.j = b && b.j ? b.j : [];
        if (b)
            for (a = 0; a < this.j.length; ++a) this.j[a].m = !0
    };
    aa = dy.prototype;
    aa.getNewBlocks = function(a, b) {
        for (var c = this.j.length, d = 0; d < c; d++) {
            var e = this.j[d];
            !e.A && e.j && (e.A = !0, a(e.j, e.D, e.F, e.l, void 0, e.m, e.G, e.B, e.o))
        }
        b && ((an() || _.F).google_osd_amcb = a)
    };
    aa.setupOse = function(a) {
        if (this.getOseId()) return this.getOseId();
        var b = Vx(ey, fy);
        if (!b) return 0;
        this.l = b;
        this.A = String(a || 0);
        return this.getOseId()
    };
    aa.getOseId = function() {
        return window && Math.random && navigator ? this.l : -1
    };
    aa.getCorrelator = function() {
        return this.A
    };
    aa.numBlocks = function() {
        return this.j.length
    };
    aa.registerAdBlock = function(a, b, c, d, e, f, g) {
        g = void 0 === g ? function() {} : g;
        c = by();
        e = _.yc() || -1;
        f = _.F.pageYOffset;
        0 <= f || (f = -1);
        c && d ? c(d, a, b, !1, void 0, !1, g, e, f) : (g = new gy(a, b, d, g, e, f), this.j.push(g), ay(d, g.H, !0), Zx || (_.Km(_.F, "//pagead2.googlesyndication.com/pagead/gen_204?id=osd&r=om&rs=" + b + ("&req=" + a)), Zx = cy), $x() && bn())
    };
    aa.unloadAdBlock = function(a, b, c) {
        c = void 0 === c ? !1 : c;
        b = an();
        void 0 !== b.Goog_Osd_UnloadAdBlock && b.Goog_Osd_UnloadAdBlock(a);
        c && (c = om(this.j, function(d) {
            return d.j == a
        })) && ay(a, c.H, !1)
    };
    var hy = function() {
            var a = an(),
                b = a.__google_ad_urls;
            if (!b) return a.__google_ad_urls = new dy(a);
            try {
                if (0 <= b.getOseId()) return b
            } catch (c) {}
            try {
                return a.__google_ad_urls = new dy(a, b)
            } catch (c) {
                return a.__google_ad_urls = new dy(a)
            }
        },
        Zx = null,
        fy = 0,
        ey = 0,
        gy = function(a, b, c, d, e, f) {
            var g = this;
            d = void 0 === d ? ti : d;
            this.D = a;
            this.F = b;
            this.j = c;
            this.m = this.A = this.l = !1;
            this.G = d;
            this.B = void 0 === e ? -1 : e;
            this.o = void 0 === f ? -1 : f;
            this.H = function() {
                return g.l = !0
            }
        };
    window.Goog_AdSense_getAdAdapterInstance = hy;
    var iy = ["Goog_AdSense_OsdAdapter"],
        jy = _.F;
    iy[0] in jy || "undefined" == typeof jy.execScript || jy.execScript("var " + iy[0]);
    for (var ky; iy.length && (ky = iy.shift());) iy.length || void 0 === dy ? jy[ky] && jy[ky] !== Object.prototype[ky] ? jy = jy[ky] : jy = jy[ky] = {} : jy[ky] = dy;
    var ly = ["auto", "inherit", "100%"],
        my = ly.concat(["none"]),
        ny = function(a, b, c, d, e, f) {
            e = void 0 === e ? 10 : e;
            f = void 0 === f ? 10 : f;
            b = b.styleSheets;
            if (!b) return !1;
            var g = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.msMatchesSelector || a.oMatchesSelector;
            e = -1 == e ? Infinity : e;
            f = -1 == f ? Infinity : f;
            for (var h = 0; h < Math.min(b.length, e); ++h) {
                var k = void 0;
                try {
                    var l = b[h],
                        m = null;
                    try {
                        m = l.cssRules || l.rules
                    } catch (Q) {
                        if (15 == Q.code) throw Q.styleSheet = l, Q;
                    }
                    k = m
                } catch (Q) {
                    continue
                }
                if (k && 0 < k.length)
                    for (m = 0; m < Math.min(k.length, f); ++m) {
                        var n = k[m],
                            p;
                        if (p = 1 == n.type) {
                            p = n;
                            var u = c;
                            p = g.call(a, p.selectorText) && u(p)
                        }
                        if (!p && (p = d && 4 == n.type)) a: {
                            p = a;u = c;
                            for (var t = f, y = 0; y < Math.min(n.cssRules.length, t); y++) {
                                var z = n.cssRules[y],
                                    K;
                                if (K = 1 === z.type || !_.v(xn)) K = u, K = g.call(p, z.selectorText) && K(z);
                                if (K) {
                                    p = !0;
                                    break a
                                }
                            }
                            p = !1
                        }
                        if (p) return !0
                    }
            }
            return !1
        },
        py = function(a, b, c) {
            var d = void 0 === d ? 10 : d;
            var e = void 0 === e ? 10 : e;
            if (!a) return !0;
            var f = !0;
            Af(a, function(g) {
                return f = oy(g, b, !1, d, e)
            }, void 0 === c ? 100 : c);
            return f
        },
        oy = function(a, b, c, d, e) {
            var f = a.style;
            return f && f.height && !(0 <= _.da(ly, f.height)) || f && f.maxHeight && !(0 <= _.da(my, f.maxHeight)) || ny(a, b.document, function(g) {
                var h = g.style.height;
                g = g.style["max-height"];
                return h && !(0 <= _.da(ly, h)) || g && !(0 <= _.da(my, g))
            }, c, d, e) ? !1 : !0
        };
    var qy = function(a) {
        var b, c, d;
        this.j = new D.Set(null !== (d = null === (c = null === (b = null === a || void 0 === a ? void 0 : M(a, rx, 2)) || void 0 === b ? void 0 : M(b, ox, 3)) || void 0 === c ? void 0 : I(c, 1)) && void 0 !== d ? d : [])
    };
    qy.prototype.getName = function() {
        return "Consent"
    };
    qy.prototype.Eb = function(a) {
        var b = this;
        return ! of (a, 7) || I(M(a, Tg, 7), 1).every(function(c) {
            return b.j.has(c)
        })
    };
    var ry = function(a) {
        var b;
        this.ub = 0;
        null == a || null == M(a, tx, 3) ? this.j = [] : (this.j = L(M(a, tx, 3), wx, 1), this.ub = null !== (b = Rg(M(a, tx, 3), 2)) && void 0 !== b ? b : 0)
    };
    ry.prototype.getName = function() {
        return "Pricing Rules"
    };
    ry.prototype.Eb = function(a) {
        if (0 === this.j.length) return !0;
        for (var b = _.G(this.j), c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            var d = M(c, vx, 1),
                e = a;
            if (null === d || (0 === I(d, 3).length || (J = I(d, 3), _.r(J, "includes")).call(J, af(e, 4, 0))) && (0 === I(d, 4).length || (J = I(d, 4), _.r(J, "includes")).call(J, ff(e, 5)))) {
                if (null == M(a, sy, 8) || null == Rg(M(a, sy, 8), 1)) return !1;
                d = Rg(M(a, sy, 8), 1) * this.ub;
                if (null != Rg(c, 2) && (null == d || d < Rg(c, 2))) return !1
            }
        }
        return !0
    };
    var ty = function(a) {
        var b, c, d;
        this.j = new D.Set(null !== (d = null === (c = null === (b = null === a || void 0 === a ? void 0 : M(a, rx, 2)) || void 0 === b ? void 0 : M(b, qx, 2)) || void 0 === c ? void 0 : I(c, 1)) && void 0 !== d ? d : [])
    };
    ty.prototype.getName = function() {
        return "Url"
    };
    ty.prototype.Eb = function(a) {
        var b = this;
        return 0 === this.j.size || !I(a, 6).some(function(c) {
            return b.j.has(c)
        })
    };
    var uy = function(a) {
        var b, c, d, e, f;
        this.j = new D.Set(null !== (d = null === (c = null === (b = null === a || void 0 === a ? void 0 : M(a, rx, 2)) || void 0 === b ? void 0 : M(b, mx, 1)) || void 0 === c ? void 0 : I(c, 1)) && void 0 !== d ? d : []);
        this.l = !(null === (f = null === (e = null === a || void 0 === a ? void 0 : M(a, rx, 2)) || void 0 === e ? void 0 : M(e, mx, 1)) || void 0 === f || !Tk(f, 4))
    };
    uy.prototype.getName = function() {
        return "Category"
    };
    uy.prototype.Eb = function(a) {
        var b;
        return Id(this.j, null === (b = M(a, Ug, 1)) || void 0 === b ? void 0 : I(b, 1)) || this.l && (a = M(a, Ug, 1), !a || Tk(a, 3)) ? !1 : !0
    };
    var vy = function(a) {
        var b = [];
        b.push(new uy(a));
        b.push(new qy(a));
        b.push(new ty(a));
        b.push(new ry(a));
        this.j = b
    };
    var wy = function(a) {
        var b, c, d, e, f, g;
        this.seller = "google";
        this.decisionLogicUrl = "dummy_url.com";
        this.interestGroupBuyers = [];
        this.additionalBids = [];
        this.auctionSignals = {};
        this.sellerSignals = {
            Oc: vy.prototype,
            ub: 1
        };
        this.perBuyerSignals = new D.Map;
        this.j = new D.Map;
        this.sellerSignals.Oc = new vy(null !== (c = null === (b = M(a, zx, 6)) || void 0 === b ? void 0 : M(b, xx, 1)) && void 0 !== c ? c : new xx);
        this.sellerSignals.ub = null !== (g = null === (f = null === (e = null === (d = M(a, zx, 6)) || void 0 === d ? void 0 : M(d, xx, 1)) || void 0 === e ? void 0 : M(e, tx, 3)) || void 0 === f ? void 0 : Rg(f, 2)) && void 0 !== g ? g : 1;
        var h = Vk(a, 4, Ld);
        h = null !== h && void 0 !== h ? h : new Kk([]);
        h = _.G(_.r(h, "entries").call(h));
        for (var k = h.next(); !k.done; k = h.next()) {
            var l = _.G(k.value);
            k = l.next().value;
            l = l.next().value;
            this.perBuyerSignals.set(k, l)
        }
        a = Vk(a, 5, Md);
        a = null !== a && void 0 !== a ? a : new Kk([]);
        a = _.G(_.r(a, "entries").call(a));
        for (h = a.next(); !h.done; h = a.next()) k = _.G(h.value), h = k.next().value, k = k.next().value, this.j.set(h, k)
    };
    var sy = function(a) {
        P(this, a, null, null)
    };
    _.N(sy, O);
    var Ug = function(a) {
        P(this, a, xy, null)
    };
    _.N(Ug, O);
    var xy = [1, 2];
    var Tg = function(a) {
        P(this, a, yy, null)
    };
    _.N(Tg, O);
    var yy = [1];
    var Sg = function(a) {
        P(this, a, zy, null)
    };
    _.N(Sg, O);
    var zy = [2, 3, 6];
    var Ay = function(a) {
        var b;
        return {
            ad: null !== (b = M(a, Sg, 2)) && void 0 !== b ? b : new Sg,
            bid: .1
        }
    };
    var By = function(a, b, c, d) {
        var e, f, g, h, k, l, m, n, p, u, t, y;
        b = null === d || void 0 === d ? void 0 : M(d, kx, 1);
        c = null === (e = null === c || void 0 === c ? void 0 : M(c, hx, 1)) || void 0 === e ? void 0 : M(e, gx, 1);
        if (!b || !c) return {
            ad: null !== (f = M(a, Sg, 2)) && void 0 !== f ? f : new Sg,
            bid: 0
        };
        d = 1 / (1 + Math.exp(-Jd(null !== (g = Sk(b, 1)) && void 0 !== g ? g : 1, null !== (h = Sk(c, 1)) && void 0 !== h ? h : 1)));
        var z = Math.exp(Jd(null !== (k = Sk(b, 2)) && void 0 !== k ? k : 1, null !== (l = Sk(c, 2)) && void 0 !== l ? l : 1));
        b = (null !== (m = Uk(b, 3)) && void 0 !== m ? m : 1) * d * Math.pow(z, null !== (n = Uk(b, 4)) && void 0 !== n ? n : 1);
        b = (null !== (p = Uk(c, 3)) && void 0 !== p ? p : 1) * b * (1 - 1 / (1 + Math.exp(-(null !== (u = Uk(c, 4)) && void 0 !== u ? u : 1) * Math.log(b) - (null !== (t = Uk(c, 5)) && void 0 !== t ? t : 0))));
        return {
            ad: null !== (y = M(a, Sg, 2)) && void 0 !== y ? y : new Sg,
            bid: b
        }
    };
    var Vg = function(a) {
        P(this, a, null, null)
    };
    _.N(Vg, O);
    var Kd = function(a, b, c) {
        if (null == a) return 0;
        var d = new sy;
        d = Ab(d, 1, b, 0);
        Db(a, 8, d);
        a: {
            d = _.G(c.sellerSignals.Oc.j);
            for (var e = d.next(); !e.done; e = d.next())
                if (!e.value.Eb(a)) {
                    a = !1;
                    break a
                }
            a = !0
        }
        return a ? b * c.sellerSignals.ub : 0
    };
    var Cy = function(a) {
            a = void 0 === a ? window : a;
            return a._gmptnl ? "afma-gpt-sdk-a" : a.webkit && a.webkit.messageHandlers && a.webkit.messageHandlers._gmptnl ? "afma-gpt-sdk-i" : null
        },
        Dy = function(a, b) {
            b = void 0 === b ? window : b;
            var c = Cy(b);
            if (!c) return null;
            var d = null;
            try {
                "afma-gpt-sdk-a" == c ? d = b._gmptnl.pm("GAM=", a) || "5" : (d = b.__gmptnl_n || "5", b.webkit.messageHandlers._gmptnl.postMessage("GAM="))
            } catch (e) {
                return "3"
            }
            return "string" === typeof d ? d : "3"
        };
    var Ey = function(a, b) {
        Ft.call(this, a);
        this.id = a;
        this.I = b
    };
    _.N(Ey, Ft);
    Ey.prototype.V = function(a) {
        this.I(this.id, a)
    };
    var Fy = function() {
            this.errorMessage = this.info = this.error = this.Ub = null
        },
        Gy = function(a, b) {
            a.Ub = b;
            return a
        };
    Fy.prototype.getError = function() {
        return this.error
    };
    var Hy = function(a, b) {
            a.errorMessage = b;
            return a
        },
        Iy = function() {
            this.cache = {}
        },
        me = function() {
            Jy || (Ky = _.lb(qp), Ly = _.lb(pp), Jy = new Iy);
            return Jy
        },
        ne = function(a) {
            var b = I(a, 3);
            if (!b) return 3;
            if (void 0 === I(a, 2)) return 4;
            a = Date.now();
            return a > b + 36E5 * Ly ? 2 : a > b + 36E5 * Ky ? 1 : 0
        };
    Iy.prototype.get = function(a, b) {
        var c = new Fy;
        if (this.cache[a]) return Gy(c, this.cache[a]);
        var d = "";
        try {
            d = b.getItem("_GESPSK-" + a)
        } catch (e) {
            return c.error = 6, Hy(c, e.message)
        }
        if (!d) return new Fy;
        b = null;
        try {
            b = Eh(Uw, d)
        } catch (e) {
            return a = new Fy, a.error = 5, Hy(a, e.message)
        }
        b && (this.cache[a] = b);
        return Gy(new Fy, b)
    };
    Iy.prototype.set = function(a, b) {
        var c = (0, H.U)(I(a, 1)),
            d = "_GESPSK-" + c,
            e = Gy(new Fy, a);
        try {
            b.setItem(d, al(a))
        } catch (f) {
            e.info = 7, Hy(e, f.message)
        }
        this.cache[c] = a;
        return e
    };
    var Jy = null,
        Ky = 24,
        Ly = 72;
    var $d = function(a, b, c, d) {
        Ey.call(this, 655, d);
        this.xa = a;
        this.F = b;
        this.storage = c;
        this.o = this.l();
        this.B = this.l();
        this.m = _.lb(Sd)
    };
    _.N($d, Ey);
    $d.prototype.j = function() {
        var a, b = me().get(this.xa, this.storage);
        if (b.getError()) Rd(b.getError(), this.xa, b.errorMessage), zt(this.o), zt(this.B);
        else {
            var c = Date.now();
            if (b = b.Ub)
                if (this.m && ( of (b, 8) || (Rd(33, this.xa), Td(b, this.m)), of (b, 7) || (Rd(34, this.xa), E(b, 7, Math.round(Date.now() / 1E3 / 60)))), of (b, 3) || Rd(35, this.xa), this.m) {
                    var d = (0, H.U)(Ud(b, 8)),
                        e = null !== (a = I(b, 7)) && void 0 !== a ? a : c;
                    d < this.m && Td(b, Math.min(d + Number((this.m * (c / 1E3 / 60 - e) / 60).toFixed(3)), this.m));
                    1 > (0, H.U)(Ud(b, 8)) ? (c = {}, Rd(22, this.xa, null, (c.t = String(e), c.cr = String(d), c.cs = String(ne(b)), c)), zt(this.o), zt(this.B)) : (this.o.j(this.F), this.B.j(b))
                } else this.o.j(this.F), this.B.j(b);
            else this.o.j(this.F), b = this.B, d = b.j, e = new Uw, e = E(e, 1, this.xa), e = Td(e, this.m), c = E(e, 3, c), d.call(b, c)
        }
    };
    var Vd = function(a, b, c, d) {
            "string" !== typeof c ? Rd(21, a) : c || Rd(20, a);
            E(b, 2, c);
            b = me().set(b, d);
            b.errorMessage ? Rd((0, H.U)(b.info), a, b.errorMessage) : Rd(27, a)
        },
        Wd = function(a) {
            return "string" === typeof a ? a : a instanceof Error ? a.message : null
        };
    var ae = function(a, b, c, d) {
        Ey.call(this, 658, d);
        this.storage = c;
        this.m = this.l();
        this.o = this.l();
        this.B = this.l();
        this.F = V(this, a);
        this.K = V(this, b)
    };
    _.N(ae, Ey);
    ae.prototype.j = function() {
        var a = this;
        if (this.F.value) {
            var b = function(g) {
                    a.m.j({
                        id: (0, H.U)(I(g, 1)),
                        kd: I(g, 2)
                    })
                },
                c = this.F.value,
                d = (0, H.U)(this.K.value),
                e = (0, H.U)(I(d, 1)),
                f = ne(d);
            switch (f) {
                case 0:
                    Rd(24, e);
                    break;
                case 1:
                    Rd(25, e);
                    break;
                case 2:
                    Rd(26, e);
                    break;
                case 3:
                    Rd(9, e);
                    break;
                case 4:
                    Rd(23, e)
            }
            switch (f) {
                case 0:
                    b(d);
                    My(this);
                    break;
                case 1:
                    b(d);
                    this.o.j(c);
                    this.B.j(d);
                    break;
                case 3:
                case 2:
                case 4:
                    E(d, 2, null), Xd(e, d, c, this.storage).then(b), My(this)
            }
        } else zt(this.m), My(this)
    };
    var My = function(a) {
        zt(a.o);
        zt(a.B)
    };
    var be = function(a, b, c, d) {
        Ey.call(this, 662, d);
        this.storage = c;
        this.m = V(this, a);
        this.o = V(this, b)
    };
    _.N(be, Ey);
    be.prototype.j = function() {
        var a = this;
        this.o.value && this.m.value && Zd().then(function() {
            var b = (0, H.U)(a.o.value),
                c = (0, H.U)(I(b, 1));
            Xd(c, b, (0, H.U)(a.m.value), a.storage)
        })
    };
    var je = function(a, b) {
        this.storage = b;
        this.m = [];
        this.A = [];
        this.j = [];
        a = _.G(a);
        for (b = a.next(); !b.done; b = a.next()) this.push(b.value)
    };
    je.prototype.push = function(a) {
        var b = a.id;
        a = a.collectorFunction;
        if ("string" !== typeof b) Rd(37, "invalid-id");
        else if ("function" !== typeof a) Rd(14, b);
        else {
            var c = {};
            Rd(17, b, null, (c.api = "1", c));
            b = fe(b, a, this.storage, this.l);
            this.m.push(b);
            a = _.G(this.A);
            for (c = a.next(); !c.done; c = a.next()) b.then(c.value)
        }
    };
    je.prototype.l = function(a, b) {
        for (var c = _.G(this.j), d = c.next(); !d.done; d = c.next()) d = d.value, d(a, b)
    };
    var Ny = 0,
        Oy = Vi(Ni(Oi("https://pagead2.googlesyndication.com/pagead/expansion_embed.js")));
    var Py = Wc(function() {
            return !(dk || ek || ck) && (qk || Yj || Xj)
        }),
        Qy = function(a, b, c, d, e) {
            d = void 0 === d ? "" : d;
            var f = a.createElement("link");
            try {
                Dj(f, b, c)
            } catch (g) {
                return null
            }
            d && "preload" == c && (f.as = d);
            e && f.setAttribute("nonce", e);
            a = a.getElementsByTagName("head")[0];
            if (!a) return null;
            try {
                a.appendChild(f)
            } catch (g) {}
            return f
        };
    var Ry = /^\.google\.(com?\.)?[a-z]{2,3}$/,
        Sy = /\.(cn|com\.bi|do|sl|ba|by|ma|am)$/,
        Ty = function(a) {
            return Ry.test(a) && !Sy.test(a)
        },
        Uy = _.F,
        Wy = function(a) {
            a = "https://adservice" + (a + "/adsid/integrator.js");
            var b = ["domain=" + encodeURIComponent(_.F.location.hostname)];
            Vy[3] >= Ff() && b.push("adsid=" + encodeURIComponent(Vy[1]));
            return a + "?" + b.join("&")
        },
        Vy, Xy, Yy = function() {
            Uy = _.F;
            Vy = Uy.googleToken = Uy.googleToken || {};
            var a = Ff();
            Vy[1] && Vy[3] > a && 0 < Vy[2] || (Vy[1] = "", Vy[2] = -1, Vy[3] = -1, Vy[4] = "", Vy[6] = "");
            Xy = Uy.googleIMState = Uy.googleIMState || {};
            Ty(Xy[1]) || (Xy[1] = ".google.com");
            Array.isArray(Xy[5]) || (Xy[5] = []);
            "boolean" !== typeof Xy[6] && (Xy[6] = !1);
            Array.isArray(Xy[7]) || (Xy[7] = []);
            "number" !== typeof Xy[8] && (Xy[8] = 0)
        },
        Zy = function() {
            Yy();
            return Vy[1]
        },
        $y = function() {
            Yy();
            return Vy[4]
        },
        az = function() {
            Yy();
            return Vy[6]
        },
        bz = function(a) {
            Yy();
            Ty(a) && (Xy[1] = a)
        },
        cz = {
            ec: function() {
                return 0 < Xy[8]
            },
            Nd: function() {
                Xy[8]++
            },
            Od: function() {
                0 < Xy[8] && Xy[8]--
            },
            Pd: function() {
                Xy[8] = 0
            },
            cf: function() {
                return !1
            },
            Gc: function() {
                return Xy[5]
            },
            Bc: function(a) {
                try {
                    a()
                } catch (b) {
                    _.F.setTimeout(function() {
                        throw b;
                    }, 0)
                }
            },
            Pc: function() {
                if (!cz.ec()) {
                    var a = _.F.document,
                        b = function(e) {
                            e = Wy(e);
                            a: {
                                try {
                                    var f = Cj("script[nonce]", void 0);
                                    break a
                                } catch (g) {}
                                f = void 0
                            }
                            Qy(a, e, "preload", "script", f);
                            f = a.createElement("script");
                            f.type = "text/javascript";
                            f.onerror = function() {
                                return _.F.processGoogleToken({}, 2)
                            };
                            e = Vi(e);
                            wd(f, e);
                            try {
                                (a.head || a.body || a.documentElement).appendChild(f), cz.Nd()
                            } catch (g) {}
                        },
                        c = Xy[1];
                    b(c);
                    ".google.com" != c && b(".google.com");
                    b = {};
                    var d = (b.newToken = "FBT", b);
                    _.F.setTimeout(function() {
                        return _.F.processGoogleToken(d, 1)
                    }, 1E3)
                }
            }
        },
        dz = function(a) {
            Yy();
            var b = Uy.googleToken[5] || 0;
            a && (0 != b || Vy[3] >= Ff() ? cz.Bc(a) : (cz.Gc().push(a), cz.Pc()));
            Vy[3] >= Ff() && Vy[2] >= Ff() || cz.Pc()
        },
        ez = function(a) {
            _.F.processGoogleToken = _.F.processGoogleToken || function(b, c) {
                var d = b;
                d = void 0 === d ? {} : d;
                c = void 0 === c ? 0 : c;
                b = d.newToken || "";
                var e = "NT" == b,
                    f = parseInt(d.freshLifetimeSecs || "", 10),
                    g = parseInt(d.validLifetimeSecs || "", 10),
                    h = d["1p_jar"] || "";
                d = d.pucrd || "";
                Yy();
                1 == c ? cz.Pd() : cz.Od();
                var k = Uy.googleToken = Uy.googleToken || {},
                    l = 0 == c && b && "string" === typeof b && !e && "number" === typeof f && 0 < f && "number" === typeof g && 0 < g && "string" === typeof h;
                e = e && !cz.ec() && (!(Vy[3] >= Ff()) || "NT" == Vy[1]);
                var m = !(Vy[3] >= Ff()) && 0 != c;
                if (l || e || m) e = Ff(), f = e + 1E3 * f, g = e + 1E3 * g, 1E-5 > Math.random() && _.Km(_.F, "https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" + c), k[5] = c, k[1] = b, k[2] = f, k[3] = g, k[4] = h, k[6] = d, Yy();
                if (l || !cz.ec()) {
                    c = cz.Gc();
                    for (b = 0; b < c.length; b++) cz.Bc(c[b]);
                    c.length = 0
                }
            };
            dz(a)
        };
    var Mg = function(a, b) {
            b = void 0 === b ? {} : b;
            this.root = b.root ? b.root : null;
            this.G = b.rootMargin ? qe(b.rootMargin) : [{
                value: 0,
                type: "px"
            }, {
                value: 0,
                type: "px"
            }, {
                value: 0,
                type: "px"
            }, {
                value: 0,
                type: "px"
            }];
            this.rootMargin = _.pe(this.G, function(c) {
                return "" + c.value + c.type
            }).join(" ");
            this.B = se(b.threshold);
            this.o = a;
            this.j = [];
            this.m = [];
            this.H = !1;
            this.l = null;
            this.A = Gi(this.D, 100, this)
        },
        fz = function(a) {
            if (a.root) var b = te(a.root);
            else {
                var c = _.sl(window);
                b = {
                    top: 0,
                    right: c.width,
                    bottom: c.height,
                    left: 0,
                    width: c.width,
                    height: c.height
                }
            }
            a = _.pe(a.G, function(d, e) {
                return "px" == d.type ? d.value : d.value * (e % 2 ? b.width : b.height) / 100
            });
            return {
                top: b.top - a[0],
                right: b.right + a[1],
                bottom: b.bottom + a[2],
                left: b.left - a[3],
                width: b.width + a[1] + a[3],
                height: b.height + a[0] + a[2]
            }
        },
        gz = function(a, b, c) {
            if (!b || b.isIntersecting != c.isIntersecting) return !0;
            var d = b.intersectionRatio,
                e = c.intersectionRatio;
            return d == e ? !1 : _.Ji(a.B, function(f) {
                return f < d != f < e
            })
        };
    Mg.prototype.D = function() {
        var a = this,
            b = fz(this);
        _.Hi(this.j, function(c) {
            var d = c.target,
                e = te(d),
                f = e.width * e.height;
            var g = Math.max(b.top, e.top);
            var h = Math.min(b.right, e.right),
                k = Math.min(b.bottom, e.bottom),
                l = Math.max(b.left, e.left),
                m = h - l,
                n = k - g;
            g = 0 <= m && 0 <= n ? {
                top: g,
                right: h,
                bottom: k,
                left: l,
                width: m,
                height: n
            } : null;
            h = !!g;
            k = g ? g.width * g.height : 0;
            l = window.performance;
            d = {
                boundingClientRect: e,
                intersectionRatio: f ? k / f : h ? 1 : 0,
                intersectionRect: g || {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: 0,
                    height: 0
                },
                isIntersecting: h,
                rootBounds: b,
                target: d,
                time: l && l.now ? l.now() : 0
            };
            gz(a, c.pa, d) && a.m.push(d);
            c.pa = d
        });
        this.m.length && this.o(hz(this), this)
    };
    Mg.prototype.observe = function(a) {
        _.Ji(this.j, function(b) {
            return b.target == a
        }) || (this.j.push({
            target: a,
            pa: null
        }), this.D(), this.H || (this.H = !0, _.xd(_.F, "scroll", this.A), _.xd(_.F, "resize", this.A), _.F.MutationObserver && !this.l && (this.l = new MutationObserver(this.A), this.l.observe(_.F.document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
        }))))
    };
    Mg.prototype.unobserve = function(a) {
        this.j = _.re(this.j, function(b) {
            return b.target != a
        });
        0 == this.j.length && this.disconnect()
    };
    Mg.prototype.disconnect = function() {
        this.H = !1;
        this.j.length = 0;
        _.Yd(_.F, "scroll", this.A);
        _.Yd(_.F, "resize", this.A);
        this.l && (this.l.disconnect(), this.l = null)
    };
    var hz = function(a) {
        var b = [].concat(_.ec(a.m));
        a.m.length = 0;
        return b
    };
    _.iz = function() {
        var a = _.Xb(38);
        this.j = void 0 === a ? .01 : a;
        this.l = this.A
    };
    _.iz.prototype.A = function(a, b, c, d, e) {
        c = void 0 === c ? this.j : c;
        if (Math.random() > c) return !1;
        b.error && b.meta && b.id || (b = new jl(b, {
            context: a,
            id: void 0 === e ? "gpt_exception" : e
        }));
        d && (b.meta = {}, d && d(b.meta));
        _.F.google_js_errors = _.F.google_js_errors || [];
        _.F.google_js_errors.push(b);
        _.F.error_rep_loaded || (Hl(_.F.document, Vi(_.F.location.protocol + "//pagead2.googlesyndication.com/pagead/js/err_rep.js")), _.F.error_rep_loaded = !0);
        return !1
    };
    var jz = function(a, b, c, d, e, f) {
        _.Kq.call(this);
        this.D = a;
        this.status = 1;
        this.m = b;
        this.l = c;
        this.K = d;
        this.pb = !!e;
        this.G = Math.random();
        this.o = {};
        this.j = null;
        this.F = (0, _.zi)(this.V, this);
        this.B = f
    };
    _.N(jz, _.Kq);
    jz.prototype.V = function(a) {
        if (!("*" !== this.l && a.origin !== this.l || !this.pb && a.source != this.m)) {
            var b = null;
            try {
                b = JSON.parse(a.data)
            } catch (c) {}
            if (_.ia(b) && (a = b.i, b.c === this.D && a != this.G)) {
                if (2 !== this.status) try {
                    this.status = 2, kz(this), this.j && (this.j(), this.j = null)
                } catch (c) {}
                a = b.s;
                b = b.p;
                if ("string" === typeof a && ("string" === typeof b || _.ia(b)) && this.o.hasOwnProperty(a)) this.o[a](b)
            }
        }
    };
    var kz = function(a) {
        var b = {};
        b.c = a.D;
        b.i = a.G;
        a.B && (b.e = a.B);
        a.m.postMessage(JSON.stringify(b), a.l)
    };
    jz.prototype.I = function() {
        if (1 === this.status) {
            try {
                this.m.postMessage && kz(this)
            } catch (a) {}
            window.setTimeout((0, _.zi)(this.I, this), 50)
        }
    };
    jz.prototype.connect = function(a) {
        a && (this.j = a);
        _.xd(window, "message", this.F);
        this.K && this.I()
    };
    var lz = function(a, b, c) {
            a.o[b] = c
        },
        mz = function(a, b, c) {
            var d = {};
            d.c = a.D;
            d.i = a.G;
            d.s = b;
            d.p = c;
            try {
                a.m.postMessage(JSON.stringify(d), a.l)
            } catch (e) {}
        };
    jz.prototype.H = function() {
        this.status = 3;
        _.Yd(window, "message", this.F);
        _.Kq.prototype.H.call(this)
    };
    var nz = function(a) {
        P(this, a, null, null)
    };
    _.N(nz, O);
    var oz = function(a) {
        P(this, a, null, null)
    };
    _.N(oz, O);
    var pz = function(a) {
        P(this, a, null, null)
    };
    _.N(pz, O);
    var sz, rz, uz;
    _.qz = function(a) {
        this.j = _.pd(a).floatingAdsStacking
    };
    sz = function(a) {
        var b = a.j.nextRestrictionId++;
        a.j.maxZIndexRestrictions[b] = 2147483646;
        rz(a);
        return b
    };
    _.tz = function(a) {
        a = _.Ml(a.j.maxZIndexRestrictions);
        return a.length ? Math.min.apply(null, a) : null
    };
    rz = function(a) {
        var b = _.tz(a);
        _.Hi(a.j.maxZIndexListeners, function(c) {
            return c(b)
        })
    };
    uz = function(a) {
        this.l = a;
        this.j = null
    };
    var vz;
    _.wz = function(a, b) {
        if (!a.body) return null;
        var c = new vz;
        c.apply(a, b);
        return function() {
            _.Om(a.body, {
                filter: c.j,
                webkitFilter: c.j,
                overflow: c.A,
                position: c.m,
                top: c.H
            });
            b.scrollTo(0, c.l)
        }
    };
    vz = function() {
        this.j = this.H = this.m = this.A = null;
        this.l = 0
    };
    vz.prototype.apply = function(a, b) {
        this.A = a.body.style.overflow;
        this.m = a.body.style.position;
        this.H = a.body.style.top;
        this.j = a.body.style.filter ? a.body.style.filter : a.body.style.webkitFilter;
        this.l = _.Mt(b);
        _.Om(a.body, "top", -this.l + "px")
    };
    var xz = function(a, b) {
        b = void 0 === b ? 500 : b;
        _.Kq.call(this);
        this.l = a;
        this.wb = b;
        this.j = null;
        this.D = {};
        this.G = 0;
        this.m = null
    };
    _.N(xz, _.Kq);
    xz.prototype.H = function() {
        this.D = {};
        this.m && (_.Yd(this.l, "message", this.m), delete this.m);
        delete this.D;
        delete this.l;
        delete this.j;
        _.Kq.prototype.H.call(this)
    };
    var zz = function(a) {
            var b;
            return "function" === typeof(null === (b = a.l) || void 0 === b ? void 0 : b.__uspapi) || null != yz(a)
        },
        Bz = function(a, b) {
            var c = {};
            if (zz(a)) {
                var d = _.Fi(function() {
                    return b(c)
                });
                Az(a, function(e, f) {
                    f && (c = e);
                    d()
                });
                setTimeout(d, a.wb)
            } else b(c)
        },
        Az = function(a, b) {
            var c, d;
            if ("function" === typeof(null === (c = a.l) || void 0 === c ? void 0 : c.__uspapi))(null === (d = a.l) || void 0 === d ? void 0 : d.__uspapi)("getUSPData", 1, b);
            else if (yz(a)) {
                Cz(a);
                var e = ++a.G;
                a.D[e] = b;
                a.j && (b = {}, a.j.postMessage((b.__uspapiCall = {
                    command: "getUSPData",
                    version: 1,
                    callId: e
                }, b), "*"))
            }
        },
        yz = function(a) {
            if (a.j) return a.j;
            a.j = $l(a.l, "__uspapiLocator");
            return a.j
        },
        Cz = function(a) {
            a.m || (a.m = function(b) {
                var c;
                try {
                    var d = {};
                    "string" === typeof b.data ? d = JSON.parse(b.data) : d = b.data;
                    var e = d.__uspapiReturn;
                    null === (c = a.D) || void 0 === c ? void 0 : c[e.callId](e.returnValue, e.success)
                } catch (f) {}
            }, _.xd(a.l, "message", a.m))
        };
    var Dz = function(a, b) {
        if (!a) return a;
        var c = a.toLowerCase();
        return -1 < c.indexOf("<!doctype") || -1 < c.indexOf("<html") ? a : "<!doctype html><html><head>" + (void 0 === b ? "" : b) + "</head><body>" + a + "</body></html>"
    };
    var Ez = function(a, b, c, d, e, f) {
            this.A = Bm(a);
            this.l = Bm(b);
            this.m = c;
            this.j = Bm(d);
            this.H = e;
            this.D = f
        },
        Fz = function(a) {
            return JSON.stringify({
                windowCoords_t: a.A.top,
                windowCoords_r: a.A.right,
                windowCoords_b: a.A.bottom,
                windowCoords_l: a.A.left,
                frameCoords_t: a.l.top,
                frameCoords_r: a.l.right,
                frameCoords_b: a.l.bottom,
                frameCoords_l: a.l.left,
                styleZIndex: a.m,
                allowedExpansion_t: a.j.top,
                allowedExpansion_r: a.j.right,
                allowedExpansion_b: a.j.bottom,
                allowedExpansion_l: a.j.left,
                xInView: a.H,
                yInView: a.D
            })
        },
        Gz = function(a, b) {
            var c = window,
                d = c.screenX || c.screenLeft || 0,
                e = c.screenY || c.screenTop || 0;
            c = new _.Am(e, d + (c.outerWidth || document.documentElement.clientWidth || 0), e + (c.outerHeight || document.documentElement.clientHeight || 0), d);
            var f = Um(a);
            d = _.Ym(_.Zm, a);
            var g = new Cm(f.x, f.y, d.width, d.height);
            d = Dm(g);
            e = String(Rm(a, "zIndex"));
            var h = new _.Am(0, Infinity, Infinity, 0);
            for (var k = ol(a), l = k.j.body, m = k.j.documentElement, n = tl(k.j); a = Tm(a);)
                if (!(_.Vj && 0 == a.clientWidth || Zj && 0 == a.clientHeight && a == l) && a != l && a != m && "visible" != Rm(a, "overflow")) {
                    var p = Um(a),
                        u = new _.ad(a.clientLeft, a.clientTop);
                    p.x += u.x;
                    p.y += u.y;
                    h.top = Math.max(h.top, p.y);
                    h.right = Math.min(h.right, p.x + a.clientWidth);
                    h.bottom = Math.min(h.bottom, p.y + a.clientHeight);
                    h.left = Math.max(h.left, p.x)
                }
            a = n.scrollLeft;
            n = n.scrollTop;
            h.left = Math.max(h.left, a);
            h.top = Math.max(h.top, n);
            k = k.j;
            k = _.sl(k.parentWindow || k.defaultView || window);
            h.right = Math.min(h.right, a + k.width);
            h.bottom = Math.min(h.bottom, n + k.height);
            h = (h = 0 <= h.top && 0 <= h.left && h.bottom > h.top && h.right > h.left ? h : null) ? new Cm(h.left, h.top, h.right - h.left, h.bottom - h.top) : null;
            b ? (k = b.boundingClientRect, b = new Cm(f.x - k.left, f.y - k.top, b.rootBounds.width, b.rootBounds.height)) : b = h;
            k = h ? Em(g, h) : null;
            h = f = 0;
            k && !(new _.ll(k.width, k.height)).isEmpty() && (f = k.width / g.width, h = k.height / g.height);
            k = new _.Am(0, 0, 0, 0);
            if (a = b)(g = Em(g, b)) ? (n = Dm(b), l = Dm(g), a = l.right != n.left && n.right != l.left, n = l.bottom != n.top && n.bottom != l.top, a = (0 != g.width || a) && (0 != g.height || n)) : a = !1;
            a && (k = new _.Am(Math.max(d.top - b.top, 0), Math.max(b.left + b.width - d.right, 0), Math.max(b.top + b.height - d.bottom, 0), Math.max(d.left - b.left, 0)));
            return new Ez(c, d, e, k, f, h)
        };
    var Hz = function(a) {
        this.H = a;
        this.D = null;
        this.fa = this.status = 0;
        this.l = null;
        this.ja = "sfchannel" + a
    };
    var ct = ft;
    var Iz = function(a) {
        this.j = a
    };
    var Jz = function(a, b) {
        this.Gb = a;
        this.Hb = b;
        this.l = this.j = !1
    };
    var Kz = function(a, b, c, d, e, f, g, h, k, l) {
        k = void 0 === k ? [] : k;
        this.l = a;
        this.A = b;
        this.m = c;
        this.permissions = d;
        this.metadata = e;
        this.H = f;
        this.pb = g;
        this.hostpageLibraryTokens = k;
        this.j = "";
        this.Sa = h;
        this.eb = void 0 === l ? "" : l
    };
    var Lz = function(a, b) {
        this.l = a;
        this.m = b
    };
    Lz.prototype.j = function(a) {
        this.m && a && (a.sentinel = this.m);
        return JSON.stringify(a)
    };
    var Mz = function(a, b, c) {
        Lz.call(this, a, void 0 === c ? "" : c);
        this.version = b
    };
    _.N(Mz, Lz);
    Mz.prototype.j = function() {
        return Lz.prototype.j.call(this, {
            uid: this.l,
            version: this.version
        })
    };
    var Nz = function(a, b, c, d) {
        Lz.call(this, a, void 0 === d ? "" : d);
        this.H = b;
        this.A = c
    };
    _.N(Nz, Lz);
    Nz.prototype.j = function() {
        return Lz.prototype.j.call(this, {
            uid: this.l,
            initialWidth: this.H,
            initialHeight: this.A
        })
    };
    var Oz = function(a, b, c) {
        Lz.call(this, a, void 0 === c ? "" : c);
        this.description = b
    };
    _.N(Oz, Lz);
    Oz.prototype.j = function() {
        return Lz.prototype.j.call(this, {
            uid: this.l,
            description: this.description
        })
    };
    var Pz = function(a, b, c, d) {
        Lz.call(this, a, void 0 === d ? "" : d);
        this.A = b;
        this.push = c
    };
    _.N(Pz, Lz);
    Pz.prototype.j = function() {
        return Lz.prototype.j.call(this, {
            uid: this.l,
            expand_t: this.A.top,
            expand_r: this.A.right,
            expand_b: this.A.bottom,
            expand_l: this.A.left,
            push: this.push
        })
    };
    var Qz = function(a, b) {
        Lz.call(this, a, void 0 === b ? "" : b)
    };
    _.N(Qz, Lz);
    Qz.prototype.j = function() {
        return Lz.prototype.j.call(this, {
            uid: this.l
        })
    };
    var Rz = function(a, b, c) {
        Lz.call(this, a, void 0 === c ? "" : c);
        this.H = b
    };
    _.N(Rz, Lz);
    Rz.prototype.j = function() {
        var a = {
            uid: this.l,
            newGeometry: Fz(this.H)
        };
        return Lz.prototype.j.call(this, a)
    };
    var Sz = function(a, b, c, d, e, f) {
        Rz.call(this, a, c, void 0 === f ? "" : f);
        this.success = b;
        this.A = d;
        this.push = e
    };
    _.N(Sz, Rz);
    Sz.prototype.j = function() {
        var a = {
            uid: this.l,
            success: this.success,
            newGeometry: Fz(this.H),
            expand_t: this.A.top,
            expand_r: this.A.right,
            expand_b: this.A.bottom,
            expand_l: this.A.left,
            push: this.push
        };
        this.m && (a.sentinel = this.m);
        return JSON.stringify(a)
    };
    var Tz = function(a, b, c, d) {
        Lz.call(this, a, void 0 === d ? "" : d);
        this.width = b;
        this.height = c
    };
    _.N(Tz, Lz);
    Tz.prototype.j = function() {
        return Lz.prototype.j.call(this, {
            uid: this.l,
            width: this.width,
            height: this.height
        })
    };
    var Uz = function(a, b, c, d, e) {
        var f = c;
        f && (f = "?" + f);
        b = (void 0 === e ? "//tpc.googlesyndication.com" : e) + ("/safeframe/" + b + "/html/container.html" + f);
        e = a;
        for (f = 0; e != e.parent;) f++, e = e.parent;
        (e = f) && (b += (c ? "&" : "?") + "n=" + e);
        (c = d) || (c = Tl(a, !1));
        return (c ? "https:" : "http:") + b
    };
    var Vz = function() {
            this.j = []
        },
        Xz = function(a, b, c, d, e) {
            a.j.push(new Wz(b, c, d, e))
        },
        Yz = function(a, b, c, d) {
            Xz(a, b, c, d + "px", void 0)
        },
        Zz = function(a) {
            for (var b = a.j.length - 1; 0 <= b; b--) {
                var c = a.j[b];
                c.l ? (c.A.style.removeProperty(c.j), c.A.style.setProperty(c.j, String(c.m), c.H)) : c.A.style[c.j] = c.m
            }
            a.j.length = 0
        },
        Wz = function(a, b, c, d) {
            this.A = a;
            this.j = (this.l = !(void 0 === d || !a.style || !a.style.getPropertyPriority)) ? String(b).replace(/([A-Z])/g, "-$1").toLowerCase() : b;
            this.m = this.l ? a.style.getPropertyValue(this.j) : a.style[this.j];
            this.H = this.l ? a.style.getPropertyPriority(this.j) : void 0;
            this.l ? (a.style.removeProperty(this.j), a.style.setProperty(this.j, String(c), d)) : a.style[this.j] = String(c)
        };
    var $z = function() {
            var a = window,
                b = _.Kf(a);
            b && (b = {
                label: "2",
                type: 9,
                value: b
            }, a = a.google_js_reporting_queue = a.google_js_reporting_queue || [], 2048 > a.length && a.push(b))
        },
        aA = function(a, b, c) {
            var d = window;
            return function() {
                var e = _.Kf(),
                    f = 3;
                try {
                    var g = b.apply(this, arguments)
                } catch (h) {
                    f = 13;
                    if (c) return c(a, h), g;
                    throw h;
                } finally {
                    d.google_measure_js_timing && e && (e = {
                        label: a.toString(),
                        value: e,
                        duration: (_.Kf() || 0) - e,
                        type: f
                    }, f = d.google_js_reporting_queue = d.google_js_reporting_queue || [], 2048 > f.length && f.push(e))
                }
                return g
            }
        };
    var fA = function(a) {
        Hz.call(this, a.uniqueId);
        var b = this;
        this.G = a.Gd;
        this.F = 1 == a.size;
        this.W = new Jz(a.permissions.Gb && !this.F, a.permissions.Hb && !this.F);
        this.m = a.qc;
        this.qa = a.hostpageLibraryTokens || [];
        var c = window.location;
        this.la = "file:" == c.protocol ? "*" : c.protocol + "//" + c.host;
        this.oa = !!a.pb;
        c = !1 === a.Yc ? "https:" : window.location.protocol;
        this.O = a.Rb ? "//" + a.Rb + ".safeframe.googlesyndication.com" : "//tpc.googlesyndication.com";
        this.na = a.ob ? "*" : Ae(a.Sa) ? "https://secureframe.doubleclick.net" : c + this.O;
        this.Y = !!a.pd;
        this.ga = bA(a);
        this.A = new Vz;
        cA(this, a.qc, a.size);
        this.D = this.ca = Gz(a.qc);
        this.K = a.Sd || "1-0-38";
        this.ma = a.jd || "";
        this.$ = void 0 === a.Sa ? null : a.Sa;
        this.va = a.eb;
        dA(this, a);
        this.ea = null;
        this.I = aA(412, function() {
            return eA(b)
        }, a.Ba);
        this.V = -1;
        this.B = 0;
        this.o = null;
        !a.ff || "function" !== typeof IntersectionObserver || bk || ak || (this.o = new IntersectionObserver(aA(414, function(e) {
            b.ea = e[e.length - 1];
            eA(b)
        }, a.Ba)));
        this.l = new jz(this.ja, this.j.contentWindow, this.na, !1);
        lz(this.l, "init_done", (0, _.zi)(this.hc, this));
        lz(this.l, "register_done", (0, _.zi)(this.tc, this));
        lz(this.l, "report_error", (0, _.zi)(this.vc, this));
        lz(this.l, "expand_request", (0, _.zi)(this.bc, this));
        lz(this.l, "collapse_request", (0, _.zi)(this.Zb, this));
        lz(this.l, "creative_geometry_update", (0, _.zi)(this.ba, this));
        this.l.connect((0, _.zi)(this.mc, this));
        var d = aA(415, function() {
            b.j && (b.j.name = "", a.Lc && a.Lc(), _.Yd(b.j, "load", d))
        }, a.Ba);
        _.xd(this.j, "load", d);
        this.hc = aA(413, this.hc, a.Ba);
        this.tc = aA(417, this.tc, a.Ba);
        this.vc = aA(419, this.vc, a.Ba);
        this.bc = aA(411, this.bc, a.Ba);
        this.Zb = aA(409, this.Zb, a.Ba);
        this.ba = aA(410, this.ba, a.Ba);
        this.mc = aA(416, this.mc, a.Ba)
    };
    _.N(fA, Hz);
    var cA = function(a, b, c) {
            a.F ? (b.style.width = _.Xm("100%", !0), b.style.height = _.Xm("auto", !0)) : (b.style.width = _.Xm(c.width, !0), b.style.height = _.Xm(c.height, !0))
        },
        dA = function(a, b) {
            var c, d = b.ob ? "" : null != (c = b.content) ? c : "";
            c = {
                shared: {
                    sf_ver: a.K,
                    ck_on: et() ? 1 : 0,
                    flash_ver: "0"
                }
            };
            d = a.K + ";" + d.length + ";" + d;
            c = new Kz(a.H, a.la, a.ca, a.W, new Iz(c), a.F, a.oa, a.$, a.qa, a.va);
            var e = {};
            e.uid = c.l;
            e.hostPeerName = c.A;
            e.initialGeometry = Fz(c.m);
            var f = c.permissions;
            f = JSON.stringify({
                expandByOverlay: f.Gb,
                expandByPush: f.Hb,
                readCookie: f.j,
                writeCookie: f.l
            });
            e = (e.permissions = f, e.metadata = JSON.stringify(c.metadata.j), e.reportCreativeGeometry = c.H, e.isDifferentSourceWindow = c.pb, e.goog_safeframe_hlt = pt(c.hostpageLibraryTokens), e.encryptionMode = c.Sa, e);
            c.j && (e.sentinel = c.j);
            c.eb && (e.pbjsAdConfig = c.eb);
            c = JSON.stringify(e);
            e = d + c;
            c = !1 === b.Yc;
            if (a.Y && b.size instanceof _.ll) {
                d = Ae(b.Sa) ? "https://secureframe.doubleclick.net" : _.ul(_.nl(a.m)).location.protocol + a.O;
                f = _.ul(_.nl(a.m));
                var g = b.Hc,
                    h = b.size;
                Ny || Hl(f.document, Oy);
                Ny++;
                f.google_eas_queue = f.google_eas_queue || [];
                f.google_eas_queue.push({
                    a: g,
                    b: d,
                    c: h.width,
                    d: h.height,
                    e: "sf-gdn-exp-" + Ny,
                    f: void 0,
                    g: void 0,
                    h: void 0,
                    i: void 0
                })
            }
            var k = b.size;
            f = b.Sb;
            h = b.vd || "";
            d = b.nb;
            g = void 0 === b.ob;
            var l = k.width;
            k = k.height;
            a.F && (k = l = 0);
            var m = {};
            e = (m.id = b.Hc, m.title = h, m.name = e, m.scrolling = "no", m.marginWidth = "0", m.marginHeight = "0", m.width = String(l), m.height = String(k), m["data-is-safeframe"] = "true", m);
            g && (g = _.ul(_.nl(a.m)), c = Ae(a.$) ? "https://secureframe.doubleclick.net/container.html?ecs=" + f : Uz(g, a.K, a.ma, c, a.O), f = [], a.Y && (h = Ul(g.location.href), g = f.push, h = [0 < h.length ? "google_debug" + (h ? "=" + h : "") + "&" : "", "xpc=", "sf-gdn-exp-" + a.H, "&p=", encodeURIComponent(_.F.document.location.protocol), "//", encodeURIComponent(_.F.document.location.host)].join(""), g.call(f, h)), f.length && (c += "#" + f.join("&")), e.src = c);
            null !== a.ga && (e.sandbox = a.ga);
            d && (e.allow = d);
            b.ob ? (a.j = b.ob, ql(a.j, e)) : (b = _.nl(a.m), d = {}, d = (d.frameborder = 0, d.allowTransparency = "true", d.style = "border:0;vertical-align:bottom;", d.src = "about:blank", d), e && Ba(d, e), b = b.createElement("IFRAME"), ql(b, d), a.j = b);
            a.F && (a.j.style.minWidth = "100%");
            a.m.appendChild(a.j)
        };
    aa = fA.prototype;
    aa.mc = function() {
        this.o && this.j ? this.o.observe(this.j) : (_.xd(window, "resize", this.I), _.xd(window, "scroll", this.I))
    };
    aa.hc = function(a) {
        try {
            if (0 != this.status) throw Error("Container already initialized");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ia(b) || !ze(b.uid) || "string" !== typeof b.version) throw Error("Cannot parse JSON message");
            var c = new Mz(b.uid, b.version, b.sentinel);
            if (this.H != c.l || this.K != c.version) throw Error("Wrong source container");
            this.status = 1
        } catch (d) {
            this.G.error("Invalid INITIALIZE_DONE message. Reason: " + d.message)
        }
    };
    aa.tc = function(a) {
        try {
            if (1 != this.status) throw Error("Container not initialized");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ia(b) || !ze(b.uid) || "number" !== typeof b.initialWidth || "number" !== typeof b.initialHeight) throw Error("Cannot parse JSON message");
            if (this.H != (new Nz(b.uid, b.initialWidth, b.initialHeight, b.sentinel)).l) throw Error("Wrong source container");
            this.status = 2
        } catch (c) {
            this.G.error("Invalid REGISTER_DONE message. Reason: " + c.message)
        }
    };
    aa.vc = function(a) {
        try {
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ia(b) || !ze(b.uid) || "string" !== typeof b.description) throw Error("Cannot parse JSON message");
            var c = new Oz(b.uid, b.description, b.sentinel);
            if (this.H != c.l) throw Error("Wrong source container");
            this.G.info("Ext reported an error. Description: " + c.description)
        } catch (d) {
            this.G.error("Invalid REPORT_ERROR message. Reason: " + d.message)
        }
    };
    aa.bc = function(a) {
        try {
            if (2 != this.status) throw Error("Container is not registered");
            if (0 != this.fa) throw Error("Container is not collapsed");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ia(b) || !ze(b.uid) || "number" !== typeof b.expand_t || "number" !== typeof b.expand_r || "number" !== typeof b.expand_b || "number" !== typeof b.expand_l || "boolean" !== typeof b.push) throw Error("Cannot parse JSON message");
            var c = new Pz(b.uid, new _.Am(b.expand_t, b.expand_r, b.expand_b, b.expand_l), b.push, b.sentinel);
            if (this.H != c.l) throw Error("Wrong source container");
            if (!(0 <= c.A.top && 0 <= c.A.left && 0 <= c.A.bottom && 0 <= c.A.right)) throw Error("Invalid expansion amounts");
            var d;
            if (d = c.push && this.W.Hb || !c.push && this.W.Gb) {
                var e = c.A,
                    f = c.push,
                    g = this.D = Gz(this.j);
                if (e.top <= g.j.top && e.right <= g.j.right && e.bottom <= g.j.bottom && e.left <= g.j.left) {
                    if (!f)
                        for (var h = this.j.parentNode; h && h.style; h = h.parentNode) Xz(this.A, h, "overflowX", "visible", "important"), Xz(this.A, h, "overflowY", "visible", "important");
                    var k = this.D.l,
                        l = this.D.l,
                        m = Dm(new Cm(0, 0, k.right - k.left, l.bottom - l.top));
                    _.ia(e) ? (m.top -= e.top, m.right += e.right, m.bottom += e.bottom, m.left -= e.left) : (m.top -= e, m.right += Number(void 0), m.bottom += Number(void 0), m.left -= Number(void 0));
                    Xz(this.A, this.m, "position", "relative");
                    Xz(this.A, this.j, "position", "absolute");
                    f ? (Yz(this.A, this.m, "width", m.right - m.left), Yz(this.A, this.m, "height", m.bottom - m.top)) : Xz(this.A, this.j, "zIndex", "10000");
                    Yz(this.A, this.j, "width", m.right - m.left);
                    Yz(this.A, this.j, "height", m.bottom - m.top);
                    Yz(this.A, this.j, "left", m.left);
                    Yz(this.A, this.j, "top", m.top);
                    this.fa = 2;
                    this.D = Gz(this.j);
                    d = !0
                } else d = !1
            }
            a = d;
            mz(this.l, "expand_response", (new Sz(this.H, a, this.D, c.A, c.push)).j());
            if (!a) throw Error("Viewport or document body not large enough to expand into.");
        } catch (n) {
            this.G.error("Invalid EXPAND_REQUEST message. Reason: " + n.message)
        }
    };
    aa.Zb = function(a) {
        try {
            if (2 != this.status) throw Error("Container is not registered");
            if (2 != this.fa) throw Error("Container is not expanded");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ia(b) || !ze(b.uid)) throw Error("Cannot parse JSON message");
            if (this.H != (new Qz(b.uid, b.sentinel)).l) throw Error("Wrong source container");
            Zz(this.A);
            this.fa = 0;
            this.j && (this.D = Gz(this.j));
            mz(this.l, "collapse_response", (new Rz(this.H, this.D)).j())
        } catch (c) {
            this.G.error("Invalid COLLAPSE_REQUEST message. Reason: " + c.message)
        }
    };
    var eA = function(a) {
        if (1 == a.status || 2 == a.status) switch (a.B) {
            case 0:
                gA(a);
                a.V = window.setTimeout((0, _.zi)(a.aa, a), 1E3);
                a.B = 1;
                break;
            case 1:
                a.B = 2;
                break;
            case 2:
                a.B = 2
        }
    };
    fA.prototype.ba = function(a) {
        try {
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.ia(b) || !ze(b.uid) || "number" !== typeof b.width || "number" !== typeof b.height || b.sentinel && "string" !== typeof b.sentinel) throw Error("Cannot parse JSON message");
            var c = new Tz(b.uid, b.width, b.height, b.sentinel);
            if (this.H != c.l) throw Error("Wrong source container");
            var d = String(c.height);
            this.F ? d != this.j.height && (this.j.height = d, eA(this)) : this.G.error("Got CreativeGeometryUpdate message in non-fluidcontainer. The container is not resized.")
        } catch (e) {
            this.G.error("Invalid CREATIVE_GEOMETRY_UPDATE message. Reason: " + e.message)
        }
    };
    fA.prototype.aa = function() {
        if (1 == this.status || 2 == this.status) switch (this.B) {
            case 1:
                this.B = 0;
                break;
            case 2:
                gA(this), this.V = window.setTimeout((0, _.zi)(this.aa, this), 1E3), this.B = 1
        }
    };
    var gA = function(a) {
            a.D = Gz(a.j, a.ea);
            a.ea = null;
            mz(a.l, "geometry_update", (new Rz(a.H, a.D)).j())
        },
        bA = function(a) {
            var b = null;
            a.Tc && (b = a.Tc);
            return null == b ? null : b.join(" ")
        },
        hA = ["allow-modals", "allow-orientation-lock", "allow-presentation", "allow-pointer-lock"],
        iA = ["allow-top-navigation"],
        jA = ["allow-same-origin"],
        kA = Xl([].concat(_.ec(hA), _.ec(iA)));
    Xl([].concat(_.ec(hA), _.ec(jA)));
    Xl([].concat(_.ec(hA), _.ec(iA), _.ec(jA)));
    var Be = function(a, b) {
        try {
            Fd(Mh(a, b))
        } catch (c) {}
    };
    var lA = function(a) {
        P(this, a, null, null)
    };
    _.N(lA, O);
    var mA = function() {};
    var nA = [.05, .1, .2, .5],
        oA = [0, .5, 1],
        pA = function(a) {
            a = he(a);
            if (!a) return -1;
            try {
                var b = zs(a.document);
                var c = new _.ll(b.clientWidth, b.clientHeight)
            } catch (d) {
                c = new _.ll(-12245933, -12245933)
            }
            return -12245933 == c.width || -12245933 == c.height ? -1 : c.width * c.height
        },
        qA = function(a, b) {
            return 0 > a ? [] : _.pe(nA, function(c) {
                return Math.min(a / b * c, 1)
            })
        },
        tA = function(a) {
            this.j = a.J;
            this.A = a.lb;
            this.o = a.xb;
            this.m = null;
            this.H = a.Ba;
            this.l = rA(this);
            this.B = a.Wd || !1;
            this.G = a.bf || !1;
            this.D = null;
            this.G && sA(this)
        },
        vA = function(a, b) {
            if (a.l) {
                if (null != a.m) {
                    try {
                        uA(a, Math.round(performance.now()), 0, 0, 0, !1)
                    } catch (c) {
                        a.H && a.H(c)
                    }
                    a.l && a.l.unobserve(a.A);
                    a.D = null
                }
                a.m = b;
                a.l.observe(a.A);
                a.G && (a.A.getBoundingClientRect(), tt(a.j.document) || he(a.j), a.D = new mA)
            }
        },
        rA = function(a) {
            var b = a.A.offsetWidth * a.A.offsetHeight,
                c = pA(a.j);
            b = [].concat(_.ec(oA), _.ec(qA(c, b)));
            la(b);
            return _.F.IntersectionObserver ? new _.F.IntersectionObserver(function(d) {
                return wA(a, d)
            }, {
                threshold: b
            }) : new Mg(function(d) {
                return wA(a, d)
            }, {
                threshold: b
            })
        },
        wA = function(a, b) {
            try {
                var c = pA(a.j);
                _.Hi(b, function(d) {
                    var e = Math.round(d.time),
                        f = d.boundingClientRect.width * d.boundingClientRect.height,
                        g = d.intersectionRect.width * d.intersectionRect.height;
                    d = d.isIntersecting;
                    a.B && uA(a, e, f, g, c, d)
                })
            } catch (d) {
                a.H && a.H(d)
            }
        },
        uA = function(a, b, c, d, e, f) {
            if (null == a.m) throw Error("Not Attached.");
            var g = new lA;
            c = E(g, 1, c);
            d = E(c, 2, d);
            e = E(d, 3, e);
            b = E(e, 4, b);
            b = E(b, 5, f);
            f = new xf;
            e = I(b, 4);
            null != e && Ck(f, 4, e);
            e = I(b, 2);
            null != e && Ck(f, 2, e);
            e = I(b, 1);
            null != e && Ck(f, 1, e);
            e = I(b, 3);
            null != e && Ck(f, 3, e);
            e = I(b, 5);
            null != e && (b = e, null != b && (Pj(f.j, 40), f.j.push(b ? 1 : 0)));
            f = zf(f);
            f = Ka(f, 4);
            Jb(a.o, "1", 10, f, void 0, a.m)
        },
        sA = function(a) {
            var b = st(a.j.document);
            b && _.xd(a.j.document, b, function() {})
        };
    var xA = function(a, b) {
            this.j = a;
            this.l = b
        },
        yA = function(a) {
            var b = am("google_ads_top_frame", a.j);
            b = b && b.contentWindow;
            if (!b) return !1;
            b.addEventListener("message", function(c) {
                var d = c.ports;
                "__goog_top_url_req" === c.data.msgType && d.length && d[0].postMessage({
                    msgType: "__goog_top_url_resp",
                    topUrl: a.l
                })
            }, !1);
            return !0
        };
    var zA = function(a) {
            a = void 0 === a ? window : a;
            return !a.PeriodicSyncManager
        },
        AA = {
            issuerOrigin: "https://adservice.google.com",
            issuancePath: "/tt/i",
            redemptionPath: "/tt/r",
            shouldRedeemToken: function() {
                var a = void 0 === a ? window : a;
                return !zA(a) || _.v(Np) ? !0 : !1
            },
            shouldRequestToken: function() {
                return !1
            }
        },
        BA = function() {
            var a = void 0 === a ? window : a;
            if (!zA(a) && _.v(Gp) || zA(a) && _.v(Hp)) {
                a = a.navigator.userAgent;
                var b = /Chrome/.test(a);
                return /Android/.test(a) && b
            }
            return !1
        },
        CA = {
            issuerOrigin: "https://attestation.android.com",
            issuancePath: "/att/i",
            redemptionPath: "/att/r",
            shouldRedeemToken: function() {
                return BA()
            },
            shouldRequestToken: function() {
                return BA()
            }
        };
    var sm = ["A+b/H0b8RPXNaJgaNFpO0YOFuGK6myDQXlwnJB3SwzvNMfcndat4DZYMrP4ClJIzYWo3/yP2S+8FTZ/lpqbPAAEAAABueyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzVGhpcmRQYXJ0eSI6dHJ1ZX0=", "A9ZgbRtm4pU3oZiuNzOsKcC8ppFSZdcjP2qYcdQrFKVzkmiWH1kdYY1Mi9x7G8+PS8HV9Ha9Cz0gaMdKsiVZIgMAAAB7eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "AxL6oBxcpn5rQDPKSAs+d0oxNyJYq2/4esBUh3Yx5z8QfcLu+AU8iFCXYRcr/CEEfDnkxxLTsvXPJFQBxHfvkgMAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "A9KPtG5kl3oLTk21xqynDPGQ5t18bSOpwt0w6kGa6dEWbuwjpffmdUpR3W+faZDubGT+KIk2do0BX2ca16x8qAcAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "AookgM0K6zABiuRTZwpn+R95G2CKmUH/2+zf2kS/QpMlVZ6HTI6QekeLkrJyxeIi62p2ejcQTF464pkdlx0Nwg0AAABmeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGUuY29tOjQ0MyIsImZlYXR1cmUiOiJUcnVzdFRva2VucyIsImV4cGlyeSI6MTYzNDA4MzE5OSwiaXNTdWJkb21haW4iOnRydWV9"],
        FA = function(a, b, c) {
            a = void 0 === a ? function() {} : a;
            b = void 0 === b ? null : b;
            c = void 0 === c ? !1 : c;
            _.Kq.call(this);
            DA();
            this.D = b || _.v(Jp) ? [CA] : [AA, CA];
            this.l = c;
            this.m = a;
            if (document.hasTrustToken && !_.v(Ip))
                if (_.v(Lp)) {
                    if (!Array.isArray(window.goog_tt_state)) {
                        var d = EA(this);
                        Object.defineProperty(window, "goog_tt_state", {
                            configurable: !1,
                            get: function() {
                                return d.slice()
                            }
                        })
                    }
                } else this.j = EA(this)
        };
    _.N(FA, _.Kq);
    var GA = function() {
            var a = void 0 === a ? window : a;
            return a.goog_tt_state
        },
        HA = function(a) {
            return a.some(function(b) {
                return 6 === b.state
            })
        },
        DA = function() {
            var a = void 0 === a ? window.document : a;
            um(a)
        },
        IA = function(a, b) {
            a = a.filter(function(c) {
                return 6 === c.state
            }).map(function(c) {
                return c.issuerOrigin
            });
            if (0 == a.length) return null;
            a = {
                type: "send-redemption-record",
                issuers: a,
                refreshPolicy: "none",
                signRequestData: "include",
                includeTimestampHeader: !0,
                additionalSignedHeaders: ["sec-time", "Sec-Redemption-Record"]
            };
            b && 0 < _.r(Object, "keys").call(Object, b).length && (a.additionalSigningData = wk(JSON.stringify(b), 3));
            return a
        },
        JA = function(a) {
            var b = _.v(Lp) ? GA() : _.Xb(250),
                c = _.Xb(252);
            if (a.setTrustToken && b && HA(b)) try {
                var d = IA(b, c);
                d && a.setTrustToken(d)
            } catch (e) {}
        },
        EA = function(a) {
            var b = a.D.map(function(c) {
                return {
                    issuerOrigin: c.issuerOrigin,
                    state: _.v(Kp) && !a.l ? 12 : 1
                }
            });
            _.v(Lp) || a.m(b);
            return b
        },
        KA = function(a, b, c) {
            if (_.v(Lp)) {
                if (a = _.r(window.goog_tt_state, "find").call(window.goog_tt_state, function(e) {
                        return e.issuerOrigin === b
                    })) a.state = c
            } else {
                var d = _.r(a.j, "find").call(a.j, function(e) {
                    return e.issuerOrigin === b
                });
                d && (d.state = c, a.m(a.j))
            }
        },
        LA = function() {
            var a = window.goog_tt_state;
            return Array.isArray(a) && a.some(function(b) {
                return 1 != b.state
            })
        },
        MA = function(a, b) {
            var c = b.issuerOrigin + b.redemptionPath,
                d = {
                    keepalive: !0,
                    redirect: "follow",
                    method: "get",
                    trustToken: {
                        type: "token-redemption",
                        issuer: b.issuerOrigin,
                        refreshPolicy: "none"
                    }
                };
            KA(a, b.issuerOrigin, 2);
            return window.fetch(c, d).then(function(e) {
                if (!e.ok) throw Error(e.status + ": Network response was not ok!");
                KA(a, b.issuerOrigin, 6)
            }).catch(function(e) {
                e && "NoModificationAllowedError" === e.name ? KA(a, b.issuerOrigin, 6) : KA(a, b.issuerOrigin, 5)
            })
        },
        NA = function(a, b, c) {
            var d = b.issuerOrigin + b.issuancePath;
            KA(a, b.issuerOrigin, 8);
            return window.fetch(d, {
                trustToken: {
                    type: "token-request"
                }
            }).then(function(e) {
                if (!e.ok) throw Error(e.status + ": Network response was not ok!");
                KA(a, b.issuerOrigin, 10);
                if (c) return MA(a, b)
            }).catch(function(e) {
                if (e && "NoModificationAllowedError" === e.name) {
                    if (KA(a, b.issuerOrigin, 10), c) return MA(a, b)
                } else KA(a, b.issuerOrigin, 9)
            })
        },
        OA = function(a) {
            if (!(!document.hasTrustToken || _.v(Ip) || _.v(Kp) && !a.l || _.v(Lp) && LA())) {
                var b = [];
                a.D.forEach(function(c) {
                    var d = c.shouldRedeemToken(),
                        e = c.shouldRequestToken();
                    if (d || e) {
                        var f = document.hasTrustToken(c.issuerOrigin).then(function(g) {
                            if (g) {
                                if (d) return MA(a, c)
                            } else {
                                if (e) return NA(a, c, d);
                                KA(a, c.issuerOrigin, 3)
                            }
                        });
                        b.push(f)
                    } else KA(a, c.issuerOrigin, 7)
                });
                if (D.Promise && D.Promise.all) return D.Promise.all(b)
            }
        };
    var PA = function(a, b, c) {
            return a.IntersectionObserver ? new a.IntersectionObserver(c, b) : new Mg(c, b)
        },
        QA = function(a, b, c) {
            _.xd(a, b, c);
            return function() {
                return _.Yd(a, b, c)
            }
        },
        RA = null,
        SA = function() {
            RA = _.yc()
        },
        TA = function(a, b) {
            return b ? null === RA ? (_.xd(a, "mousemove", SA, {
                passive: !0
            }), _.xd(a, "scroll", SA, {
                passive: !0
            }), SA(), !1) : _.yc() - RA >= 1E3 * b : !1
        },
        UA = function(a) {
            var b = a.J,
                c = a.element,
                d = a.Yd,
                e = a.Xd,
                f = void 0 === a.Vc ? 0 : a.Vc,
                g = a.Yb,
                h = a.qd,
                k = void 0 === a.Kc ? !0 : a.Kc,
                l = null,
                m = !1,
                n = !1,
                p = [],
                u = (void 0 === a.Ib ? PA : a.Ib)(b, void 0 === a.options ? {} : a.options, function(t, y) {
                    try {
                        var z = function() {
                            p.length || (e && (p.push(QA(c, "mouseenter", function() {
                                m = !0;
                                z()
                            })), p.push(QA(c, "mouseleave", function() {
                                m = !1;
                                z()
                            }))), p.push(QA(b.document, "visibilitychange", function() {
                                return z()
                            })));
                            var K = TA(b, f),
                                Q = tt(b.document);
                            if (n && !m && !K && !Q) l = l || b.setTimeout(function() {
                                TA(b, f) ? z() : (g(), y.disconnect())
                            }, 1E3 * d);
                            else if (k || m || K || Q) b.clearTimeout(l), l = null
                        };
                        n = t[t.length - 1].isIntersecting;
                        z()
                    } catch (K) {
                        h && h(K)
                    }
                });
            u.observe(c);
            return function() {
                u.disconnect();
                for (var t = _.G(p), y = t.next(); !y.done; y = t.next()) y = y.value, y();
                null != l && b.clearTimeout(l)
            }
        };
    var VA = function() {
            var a = I(zh.N().j, 26);
            this.l = null;
            this.j = 0;
            this.A = a
        },
        WA = function(a) {
            if (_.v(Io)) return new Wx;
            if (!a.l) {
                var b = _.Xb(7);
                Zx = cy;
                fy = b;
                ey = 0;
                if (!tj() || 0 <= ug(vg(), 11)) b = hy();
                else {
                    b = an();
                    var c = b.__google_ad_urls;
                    b = c ? c : b.__google_ad_urls = new Wx
                }
                a.l = b;
                a.j = a.l.setupOse(a.A)
            }
            return a.l
        };
    VA.prototype.getOseId = function() {
        if (_.v(Io)) return 2;
        this.j || (this.j = Vx(0, _.Xb(7)));
        return this.j
    };
    var XA = 0,
        YA = function() {
            this.X = [];
            this.m = [];
            this.Xa = this.Ya = NaN;
            this.A = 0;
            this.Ob = this.Lb = this.Cb = "";
            this.D = [];
            this.I = 0;
            this.fa = this.H = this.l = this.G = null;
            this.B = zb(_.F);
            this.j = "json_html";
            this.o = "fif";
            this.Ca = 1;
            this.F = new D.Map
        },
        ZA = function(a, b, c, d, e, f, g, h, k) {
            a.m = b;
            a.A = c;
            a.D = d;
            a.Cb = e;
            a.Lb = f;
            a.Ob = g;
            a.G = void 0 === h ? null : h;
            a.fa = void 0 === k ? null : k
        },
        $A = function(a, b) {
            var c = a.F.get(b);
            c || (c = window === window.top ? (++XA).toString(36) : Ij(), a.F.set(b, c), _.Bg(b, function() {
                a.F.delete(b)
            }));
            return c
        };
    var aB = function(a, b, c, d, e, f, g, h, k) {
        Y.call(this, 718);
        this.F = V(this, b);
        this.I = V(this, c);
        this.B = V(this, d);
        this.m = V(this, e);
        It(this, f);
        this.K = U(this, g);
        this.o = U(this, h);
        this.W = U(this, k);
        this.O = ng(a, Yq)
    };
    _.N(aB, Y);
    aB.prototype.j = function() {
        return A(this, function b() {
            var c = this,
                d, e, f;
            return B(b, function(g) {
                if (1 == g.j) {
                    if (!bB(c)) return g.return();
                    d = c.K.value;
                    e = c.o.value;
                    _.Om(e, "visibility", "hidden");
                    _.Om(e, "min-width", "100%");
                    _.Om(d, "min-width", "100%");
                    return C(g, c.O, 2)
                }
                if (c.A) return g.return();
                f = d.contentDocument;
                if (!f) return mc("gpt_amp_fluid_no_iframedoc", function(h) {
                    Zb(h)
                }), g.return();
                cB(c, d, e, f.body.offsetWidth, f.body.offsetHeight);
                gi(g)
            })
        })
    };
    var bB = function(a) {
            var b = !a.W.value;
            return null == a.m.value || a.B.value || "height" !== a.I.value || b ? !1 : !0
        },
        cB = function(a, b, c, d, e) {
            b.setAttribute("height", String(e));
            b.setAttribute("width", String(d));
            _.Om(c, "visibility", "visible");
            dB(a, e, d)
        },
        dB = function(a, b, c) {
            var d = a.F.value;
            mc("gpt_fluid_sz", function(e) {
                q(e, "sz", c + "x" + b);
                q(e, "qqid", d || "");
                Zb(e);
                q(e, "ff", 1)
            })
        };
    var eB = function(a, b, c, d, e) {
        Y.call(this, 685);
        var f = this;
        this.slotId = a;
        this.J = b;
        this.m = V(this, c);
        this.o = U(this, d);
        this.B = U(this, e);
        ng(this.slotId, og, function(g) {
            return Im(f.J, g.detail)
        })
    };
    _.N(eB, Y);
    eB.prototype.j = function() {
        var a, b;
        if (!_.v(ho) && !this.B.value) {
            var c = null !== (b = null === (a = this.m.value) || void 0 === a ? void 0 : I(a, 1)) && void 0 !== b ? b : "",
                d = Jm(this.J, this.o.value, c);
            _.Bg(this, function() {
                try {
                    d()
                } catch (e) {
                    Ub(493, e)
                }
            })
        }
    };
    var fB = /(<head(\s+[^>]*)?>)/i,
        gB = function(a, b, c, d, e) {
            Y.call(this, 665);
            this.m = this.l();
            this.o = U(this, a);
            this.B = V(this, b);
            this.F = V(this, c);
            this.I = V(this, d);
            this.K = V(this, e)
        };
    _.N(gB, Y);
    gB.prototype.j = function() {
        if (0 !== this.o.value.kind || !He(this.B.value) || Ct(this.F)) this.m.j(this.o.value);
        else {
            var a = this.o.value.ra || "",
                b = !!this.I.value,
                c = !!this.K.value;
            c || wg() || (a = a.replace(fB, "$1<meta http-equiv=Content-Security-Policy content=\"script-src https://cdn.ampproject.org/;object-src 'none';child-src blob:;frame-src 'none'\">"));
            b && !c && (a = a.replace(fB, '$1<meta name="referrer" content="origin">'));
            this.m.j({
                kind: 0,
                ra: a
            })
        }
    };
    var hB = function(a, b, c, d) {
        _.Kq.call(this);
        var e = this;
        this.l = a;
        this.j = null;
        _.v(Eo) || _.Bg(this, Pq(b, og, function(f) {
            var g = f.detail;
            return void D.Promise.all([c.promise, d.promise]).then(function(h) {
                h = _.G(h);
                var k = h.next().value;
                null == h.next().value || k || (h = g.data, e.A) || ("impression-viewable" === h ? e.l(!0) : "string" === typeof h && 0 === h.indexOf("visibility-changed-") && (h = /^visibility-changed-(\d+(\.\d+)?)$/.exec(h)) && (h = Math.round(100 * Number(h[1])), 0 <= h && 100 >= h && (0 !== h && 100 !== h || h !== e.j) && (null !== e.j || 0 < h) && (e.j = h, e.l(!1, h))))
            })
        }))
    };
    _.N(hB, _.Kq);
    var iB = function(a, b) {
            return Math.max("string" === typeof a ? _.r(a, "endsWith").call(a, "px") ? parseInt(a, 10) : 0 : a, b) + "px"
        },
        jB = function(a, b, c) {
            a.style.minWidth = iB(a.style.minWidth, b);
            a.style.minHeight = iB(a.style.minHeight, c)
        },
        kB = function(a, b, c, d, e) {
            a = a.createElement("DIV");
            a.id = c;
            a.name = c;
            c = a.style;
            c.border = "0pt none";
            d && (c.margin = "auto", c.textAlign = "center");
            e && (d = Array.isArray(e), c.width = d ? e[0] + "px" : "100%", c.height = d ? e[1] + "px" : "0%");
            b.appendChild(a);
            return a
        },
        lB = function(a, b, c, d, e, f, g, h, k, l, m, n, p, u, t, y) {
            var z = qg,
                K = _.qh(Bv).A,
                Q;
            Array.isArray(d) ? Q = new _.ll(d[0], d[1]) : Q = 1;
            d = null;
            null !== c && (d = null === m ? Dz(c) : "<startguard>" + c + "<endguard>");
            return new fA({
                qc: a,
                Hc: b,
                vd: z,
                content: d,
                size: Q,
                Gd: {
                    info: function() {},
                    M: function() {},
                    error: function() {}
                },
                pd: l,
                Lc: e,
                Tc: h || void 0,
                permissions: {
                    Gb: of (f, 1) ? !!x(f, 1) : !k,
                    Hb: of (f, 2) ? !!x(f, 2) : !1
                },
                pb: !!Dg().fifWin,
                Sd: ev(),
                jd: fv(),
                Yc: !1,
                hostpageLibraryTokens: K,
                Ba: Ub,
                Sa: null === m ? void 0 : m,
                uniqueId: p,
                Sb: n,
                Rb: g || void 0,
                nb: u || void 0,
                ob: t || void 0,
                eb: y || void 0
            })
        },
        mB = function(a, b, c) {
            var d = void 0 === d ? !0 : d;
            var e = void 0 === e ? !0 : e;
            b = Dz(b, "<script>var inDapIF=true,inGptIF=true;\x3c/script>");
            try {
                var f = a.contentWindow ? a.contentWindow.document : a.contentDocument;
                d && wg() && f.open("text/html", "replace");
                c();
                Bj(f, new _.xj(b, null, _.wj));
                a.contentWindow && a.contentWindow.history && a.contentWindow.history.replaceState && $i(a.contentWindow.location.href, "#") && a.contentWindow.history.replaceState(null, "", "#" + Math.random());
                e && f.close()
            } catch (g) {
                Vb(653, g, !0)
            }
        },
        oB = function(a, b, c) {
            var d = Yc(c),
                e = Vc(b, a);
            if ((_.v(yo) || _.v(zo)) && e) {
                var f = Bf(e),
                    g = f.depth;
                f = f.Vd.getBoundingClientRect();
                if (0 === (null == f ? void 0 : f.height)) {
                    var h = _.G(nv(c));
                    c = h.next().value;
                    h = h.next().value;
                    f = 0 <= f.top && f.bottom <= (_.F.innerHeight || a.documentElement.clientHeight);
                    _.v(yo) && Cf(f, g);
                    _.v(zo) && f && 0 < c && 0 < h && Cc().M(os(b.getAdUnitPath(), b.j, c.toString(), h.toString()), b)
                }
            }
            f = null == e ? void 0 : e.getBoundingClientRect();
            if (c = _.lb(Bo)) {
                g = b = 0;
                d = _.G(d);
                for (h = d.next(); !h.done; h = d.next())
                    if (h = h.value, Array.isArray(h)) {
                        var k = _.G(h),
                            l = k.next().value;
                        k = k.next().value;
                        if (!(1 >= l || 1 >= k)) switch (c) {
                            case 3:
                                return h.slice();
                            case 7:
                                return [l, 0];
                            case 4:
                                250 >= k && (g = Math.max(g, k));
                            case 5:
                                b = Math.min(b || Infinity, l);
                                break;
                            case 2:
                            case 6:
                                b = Math.min(b || Infinity, l);
                                g = Math.min(g || Infinity, k);
                                break;
                            case 8:
                            case 10:
                            case 9:
                                b = b || l, g = Math.min(g || Infinity, k)
                        }
                    }
                if (10 === c) {
                    if (a = _.ul(a), e && !nB(Xc(e, a)) && e.parentElement && !nB(Xc(e.parentElement, a))) return [b, 0]
                } else if (6 === c || 9 === c)
                    if (a = (null == f ? void 0 : f.top) > _.F.innerHeight, e && !a) return [b, 0];
                return b || g ? [b, g] : null
            }
            if (!d.length) return null;
            e = d[0].slice();
            if (1 < d.length) {
                a: if ((a = Vc(b, a)) && a.style.height && a.style.width)
                    for (a = [a.style.width, a.style.height], d = 0; d < a.length; ++d)
                        if (2 < a[d].length && "px" == a[d].substring(a[d].length - 2)) a[d] = parseInt(a[d], 10);
                        else {
                            a = null;
                            break a
                        }
                else a = null;e = a || e
            }
            return e
        },
        pB = function(a, b, c) {
            if (!Ov(b, a)) {
                var d = Vc(b, a);
                if (d) {
                    var e = c.T;
                    c = c.P[b.j];
                    var f = oB(a, b, c);
                    if (_.v(Co) || _.v(uo)) {
                        if (_.v(Co) && Array.isArray(f)) {
                            var g = _.G(f);
                            f = g.next().value;
                            g = g.next().value;
                            d.style.minWidth || (d.style.minWidth = f + "px");
                            d.style.minHeight || (d.style.minHeight = g + "px")
                        }
                        _.v(uo) && kB(a, d, Tv(b), qv(e, c), [0, 0])
                    } else kB(a, d, Tv(b), qv(e, c), f), _.v(xo) && Array.isArray(f) && (b = _.G(f), a = b.next().value, b = b.next().value, jB(d, a, b))
                }
            }
        },
        nB = function(a) {
            return !!a && ("sticky" === a.position || "fixed" === a.position)
        };
    var qB = 0;
    var Wf = new D.WeakMap,
        Uf = function(a, b) {
            a = [a];
            for (var c = b.length - 1; 0 <= c; --c) a.push(typeof b[c], b[c]);
            return a.join("\x0B")
        };
    var rB = Yf(function(a) {
        return (null === a || void 0 === a ? 0 : a.src) ? /^(?:https?:)?\/\/(?:www\.googletagservices\.com|securepubads\.g\.doubleclick\.net|pagead2\.googlesyndication\.com)\/tag\/js\/gpt(?:_[a-z]+)*\.js/.test(a.src) ? 0 : 1 : 2
    }, function(a, b) {
        var c;
        return a + "\x0B" + (null === (c = b[0]) || void 0 === c ? void 0 : c.src)
    });
    var sB = function(a, b, c, d) {
            try {
                var e;
                if (!(e = !b)) {
                    var f;
                    if (!(f = !py(b, c, void 0 === d ? 100 : d))) {
                        a: {
                            do {
                                var g = Xc(b, c);
                                if (g && "fixed" == g.position) {
                                    var h = !1;
                                    break a
                                }
                            } while (b = b.parentElement);h = !0
                        }
                        f = !h
                    }
                    e = f
                }
                e && (a.height = -1)
            } catch (k) {
                a.width = -1, a.height = -1
            }
        },
        Zf = function(a) {
            for (var b, c = {}, d = _.G(L(a, sf, 9)), e = d.next(); !e.done; e = d.next()) e = e.value, c[tf(e)] = I(e, 2);
            a = I(a, 8);
            a.length && (null !== (b = c.excl_cat) && void 0 !== b ? b : c.excl_cat = a);
            return c
        },
        tB = function(a) {
            var b = !1,
                c = L(a, sf, 2).map(function(d) {
                    var e = tf(d);
                    b = "excl_cat" === e;
                    d = I(d, 2);
                    return encodeURIComponent(e) + "=" + encodeURIComponent(d.join())
                });
            a = I(a, 3);
            !b && a.length && c.push(encodeURIComponent("excl_cat") + "=" + encodeURIComponent(a.join()));
            return c
        },
        uB = function(a) {
            var b;
            if (null === (b = a.location) || void 0 === b ? 0 : b.ancestorOrigins) return a.location.ancestorOrigins.length;
            var c = 0;
            Gl(function() {
                c++;
                return !1
            }, !0, !0, a);
            return c
        },
        vB = function(a, b, c, d, e, f, g, h) {
            this.X = a;
            this.A = b;
            this.R = c;
            this.m = d;
            this.model = e;
            this.da = f;
            this.L = g;
            this.D = void 0 === h ? !1 : h;
            this.H = [];
            this.j = "";
            this.l = [];
            this.G = [];
            this.o = new D.Set(hg(Zo))
        },
        yB = function(a) {
            var b = void 0 === b ? window : b;
            if (0 === a.X.length) return "";
            wB(a, a.X, b);
            var c, d;
            b = null !== (d = null === (c = Uu(a.L.T)) || void 0 === c ? void 0 : x(c, 9)) && void 0 !== d && d || !x(a.da, 5) ? "https://pagead2.googlesyndication.com/gampad/ads?" : "" + _.Xb(247) + "/gampad/ads?";
            a.j = b;
            c = a.H;
            if (_.v($n))
                for (d = Math.random, b = c.length - 1; 0 < b; b--) {
                    var e = Math.floor(d() * (b + 1)),
                        f = c[b];
                    c[b] = c[e];
                    c[e] = f
                }
            c = _.G(c);
            for (b = c.next(); !b.done; b = c.next())
                if (d = a, b = b.value, e = xB(b)) "?" !== d.j[d.j.length - 1] && (d.j += "&"), d.j += b.Kd + "=" + e;
            return a.j
        },
        zB = function(a, b) {
            try {
                var c = b.top;
                var d = As(c.document, c)
            } catch (e) {
                d = new _.ad(-12245933, -12245933)
            }
            Z(a, "scr_x", Math.round(d.x), {
                ua: !0
            });
            Z(a, "scr_y", Math.round(d.y), {
                ua: !0
            })
        },
        AB = function(a) {
            var b = window,
                c = (x(a.da, 5) && vc(b) ? b.document.cookie : null) || "";
            var d = b.document.domain;
            var e = b.history.length,
                f = b.screen,
                g = b.document.referrer;
            if (Fm()) d = an().gaGlobal || {};
            else {
                var h = Math.round((new Date).getTime() / 1E3),
                    k = b.google_analytics_domain_name;
                d = "undefined" == typeof k ? Mx("auto", d) : Mx(k, d);
                var l = -1 < c.indexOf("__utma=" + d + "."),
                    m = -1 < c.indexOf("__utmb=" + d),
                    n;
                (n = (Gm() || an()).gaGlobal) || (n = {}, (Gm() || an()).gaGlobal = n);
                var p = !1;
                if (l) g = c.split("__utma=" + d + ".")[1].split(";")[0].split("."), m ? n.sid = g[3] : n.sid || (n.sid = h + ""), n.vid = g[0] + "." + g[1], n.from_cookie = !0;
                else {
                    n.sid || (n.sid = h + "");
                    if (!n.vid) {
                        p = !0;
                        m = Math.round(2147483647 * Math.random());
                        l = Kx.appName;
                        var u = Kx.version,
                            t = Kx.language ? Kx.language : Kx.browserLanguage,
                            y = Kx.platform,
                            z = Kx.userAgent;
                        try {
                            var K = Kx.javaEnabled()
                        } catch (R) {
                            K = !1
                        }
                        K = [l, u, t, y, z, K ? 1 : 0].join("");
                        f ? K += f.width + "x" + f.height + f.colorDepth : _.F.java && _.F.java.awt && (f = _.F.java.awt.Toolkit.getDefaultToolkit().getScreenSize(), K += f.screen.width + "x" + f.screen.height);
                        K = K + c + (g || "");
                        for (g = K.length; 0 < e;) K += e-- ^ g++;
                        n.vid = (m ^ Lx(K) & 2147483647) + "." + h
                    }
                    n.from_cookie = !1
                }
                if (!n.cid) {
                    b: for (h = 999, k && (k = 0 == k.indexOf(".") ? k.substr(1) : k, h = k.split(".").length), k = 999, c = c.split(";"), g = 0; g < c.length; g++)
                        if (f = Nx.exec(c[g]) || Ox.exec(c[g]) || Px.exec(c[g])) {
                            K = f[1] || 0;
                            if (K == h) {
                                var Q = f[2];
                                break b
                            }
                            K < k && (k = K, Q = f[2])
                        }p && Q && -1 != Q.search(/^\d+\.\d+$/) ? (n.vid = Q, n.from_cookie = !0) : Q != n.vid && (n.cid = Q)
                }
                n.dh = d;
                n.hid || (n.hid = Math.round(2147483647 * Math.random()));
                d = n
            }
            Z(a, "ga_vid", d.vid, {
                ha: !1
            });
            Z(a, "ga_sid", d.sid, {
                ha: !1
            });
            Z(a, "ga_hid", d.hid, {
                ha: !1
            });
            Z(a, "ga_fc", d.from_cookie, {
                ha: !1
            });
            Z(a, "ga_cid", d.cid, {
                ha: !1
            });
            Z(a, "ga_wpids", b.google_analytics_uacct)
        },
        BB = function(a, b) {
            var c, d;
            try {
                var e = null === (d = null === (c = b.external) || void 0 === c ? void 0 : c.getHostEnvironmentValue) || void 0 === d ? void 0 : d.bind(b.external);
                if (e) {
                    var f = parseInt(JSON.parse(e("os-mode"))["os-mode"], 10);
                    0 <= f && Z(a, "wsm", f + 1)
                }
            } catch (g) {}
        },
        wB = function(a, b, c) {
            c = void 0 === c ? window : c;
            var d, e = c.document,
                f = a.L,
                g = f.T;
            f = f.P;
            Z(a, "gdfp_req", 1, {
                ha: !1
            });
            Z(a, "pvsid", a.model.B);
            Z(a, "correlator", I(g, 26));
            Z(a, "output", a.model.j, {
                ha: !1
            });
            "wbn" === a.model.j && (Z(a, "wbsu", Ui(a.model.l).replace(/^urn:uuid:/, "")), Z(a, "callback", a.model.H));
            Z(a, "impl", a.model.o, {
                ha: !1
            });
            CB(a, Jf({
                ld: af(g, 24, 0),
                Cb: a.model.Cb,
                Ob: a.model.Ob,
                Lb: a.model.Lb
            }));
            CB(a, Nf(g, a.model));
            _.v(ao) ? CB(a, new D.Map([
                ["eid", {
                    value: a.model.m
                }],
                ["debug_experiment_id", {
                    value: Tp().split(",")
                }]
            ])) : DB(a);
            EB(a);
            Z(a, "ptt", 17);
            FB(a);
            GB(a);
            Z(a, "sc", _.Xb(6) ? 1 : 0, {
                ua: !0
            });
            window.postMessage && Z(a, "sfv", ev());
            Z(a, "ecs", a.L.Sb);
            HB(a, b, e);
            IB(a);
            JB(a, b);
            KB(a, b);
            LB(a, c);
            Ob("google_preview") && Z(a, "gct", Nb("google_preview"));
            CB(a, Le(c));
            _.v(ao) ? CB(a, new D.Map([
                ["expflags", {
                    value: _.Xb(253) ? uq(Sn) || null : null
                }]
            ])) : _.Xb(253) && (g = uq(Sn)) && Z(a, "expflags", g);
            MB(a, b, c);
            g = {};
            g.u_tz = -(new Date).getTimezoneOffset();
            g.u_his = cn();
            g.u_java = !!cl.navigator && "unknown" !== typeof cl.navigator.javaEnabled && !!cl.navigator.javaEnabled && cl.navigator.javaEnabled();
            cl.screen && (g.u_h = cl.screen.height, g.u_w = cl.screen.width, g.u_ah = cl.screen.availHeight, g.u_aw = cl.screen.availWidth, g.u_cd = cl.screen.colorDepth);
            cl.navigator && cl.navigator.plugins && (g.u_nplug = cl.navigator.plugins.length);
            cl.navigator && cl.navigator.mimeTypes && (g.u_nmime = cl.navigator.mimeTypes.length);
            _.$b(g, function(k, l) {
                Z(a, l, k, {
                    ha: !1
                })
            });
            NB(a);
            try {
                var h = gn()
            } catch (k) {
                h = "0"
            }
            Z(a, "flash", h, {
                ha: !1,
                ua: !0
            });
            OB(a, b, c);
            (_.v(Ep) || Kb.N().j) && Z(a, "rumc", a.model.B, {
                ha: !1
            });
            _.v(no) && Z(a, "rume", 1, {
                ha: !1
            });
            Z(a, "vis", _.qt(e), {
                ha: !1
            });
            0 === rB(_.Xb(172)) || Z(a, "stss", rB(_.Xb(172)));
            (null === (d = _.F.navigator) || void 0 === d ? 0 : d.deviceMemory) && Z(a, "dmc", _.F.navigator.deviceMemory);
            zB(a, c);
            PB(a, b, c);
            CB(a, Tf(b, f, c));
            0 < a.model.D.length && Z(a, "psts", a.model.D);
            AB(a);
            BB(a, c);
            _.v(Dn) && (Z(a, "js", Cy(c)), Z(a, "ms", Dy(a.model.B.toString(), c)));
            QB(a, c, b);
            RB(a, b, c);
            SB(a);
            TB(a);
            UB(a);
            VB(a);
            WB(a);
            Z(a, "cbidsp", Ze(b, a.L.P))
        },
        SB = function(a) {
            var b = a.model.fa;
            b && (Z(a, "floc_id", b.id), Z(a, "floc_ver", b.version))
        },
        TB = function(a) {
            _.v(hp) && "runAdAuction" in navigator && "joinAdInterestGroup" in navigator && Z(a, "td", 1)
        },
        UB = function(a) {
            var b = _.Xb(251);
            b && Z(a, "uach", wk(b, 3))
        },
        VB = function(a) {
            var b = _.v(Lp) ? GA() : _.Xb(250);
            (null === b || void 0 === b ? 0 : b.length) && Z(a, "tt_state", wk(JSON.stringify(b), 3))
        },
        PB = function(a, b, c) {
            var d, e = a.L.P,
                f = [],
                g = [];
            b = _.G(b);
            for (var h = b.next(); !h.done; h = b.next()) {
                var k = h.value;
                h = Vc(k);
                h = km((null === h || void 0 === h ? void 0 : h.parentElement) && Xc(h.parentElement, c) || null);
                if (!h || 1 === h[0] && 1 === h[3]) {
                    var l = Vc(k),
                        m = null !== (d = null === l || void 0 === l ? void 0 : l.parentElement) && void 0 !== d ? d : null;
                    h = Iv(m) || new _.ll(0, 0);
                    sB(h, m, c);
                    m = Iv(Vc(k)) || new _.ll(0, 0);
                    sB(m, l, c, 1); - 1 === h.height && (m.height = -1);
                    _.v(Ao) && (l = _.G(nv(e[k.j])), k = l.next().value, l = l.next().value, 0 <= h.height && (h.width = Math.max(h.width, k), h.height = Math.max(h.height, l)), 0 <= m.height && (m.width = Math.max(m.width, k), m.height = Math.max(m.height, l)));
                    f.push(h.width + "x" + h.height);
                    g.push(m.width + "x" + m.height)
                } else f.push("-1x-1"), g.push("-1x-1")
            }
            Z(a, "psz", f, {
                Aa: "|"
            });
            Z(a, "msz", g, {
                Aa: "|"
            })
        },
        QB = function(a, b, c) {
            var d = 0 !== qd(),
                e = Bs(!0, b, d).width,
                f = [],
                g = [],
                h = [];
            if (null !== b && b != b.top) {
                var k = Bs(!1, b).width;
                (-12245933 === e || -12245933 === k || k < e) && h.push(8)
            } - 12245933 !== e && (1.5 * e < b.document.documentElement.scrollWidth ? h.push(10) : d && 1.5 * b.outerWidth < e && h.push(10));
            c = _.G(c);
            for (k = c.next(); !k.done; k = c.next()) {
                d = new $t;
                var l = Vc(k.value);
                k = 0;
                var m = _.v(wn),
                    n = !1,
                    p = !1,
                    u = _.v(zn);
                if (l)
                    for (var t = 0; l && 100 > t; t++, l = l.parentElement) {
                        var y = Xc(l, b);
                        if (y) {
                            if ("visible" !== y.overflowY) {
                                d.set(2);
                                var z = Iv(l);
                                z && (k = k ? Math.min(k, z.width) : z.width);
                                if (d.get(9)) break
                            }
                            nB(y) && d.set(9);
                            "none" === y.display && d.set(7);
                            "IFRAME" === l.nodeName && (z = parseInt(y.width, 10), z < e && (d.set(8), k = k ? Math.min(z, k) : z));
                            m && (u = u || "nowrap" === y.whiteSpace, p = p || "scroll" === y.overflowX || "auto" === y.overflowX, n = n || "flex" === y.display)
                        } else d.set(3)
                    } else d.set(1);
                m && u && p && n && d.set(11);
                m = _.G(h);
                for (n = m.next(); !n.done; n = m.next()) d.set(n.value);
                f.push(au(d));
                g.push(k)
            }
            Z(a, "fws", f);
            Z(a, "ohw", g)
        },
        RB = function(a, b, c) {
            try {
                var d = As(c.top.document, c.top).y;
                Z(a, "btvi", b.map(function(e) {
                    var f, g = a.L,
                        h = g.P[e.j];
                    g = qv(g.T, h);
                    e = null === (f = Pv(e, h, c.document, g)) || void 0 === f ? void 0 : f.y;
                    h = Bs(!0, c).height;
                    return void 0 === e || -12245933 === e || -12245933 === h ? -1 : e < d + h ? 0 : ++XB
                }), {
                    ua: !0,
                    Aa: "|"
                })
            } catch (e) {}
        },
        YB = function(a, b) {
            var c = a.L,
                d = c.T,
                e = c.P;
            return _.v(Kn) ? b.map(function(f) {
                return ov(e[f.j], null)
            }).join(",") : a.A ? b.map(function(f) {
                var g = e[f.j];
                g = _.v(Ln) ? lu(a.R, f) || ov(g, x(d, 6) || x(g, 17) ? null : Vc(f)) : ov(g);
                if (f = a.R.j.get(f)) f.Ra = g;
                return g
            }).join(",") : b.map(function(f) {
                var g = a.L.P[f.j];
                g = lu(a.R, f) || ov(g, x(a.L.T, 6) || x(g, 17) ? null : Vc(f));
                if (f = a.R.j.get(f)) f.Ra = g;
                return g
            }).join(",")
        },
        OB = function(a, b, c) {
            c = void 0 === c ? window : c;
            var d = c.document;
            b = (_.v(Ln) ? x(a.L.T, 6) : a.A) ? Ev(a.L.T) : Fv(a.L.P[b[0].j]) || Ev(a.L.T);
            var e = Ob("google_preview"),
                f = e ? Mb(d.URL) : d.URL;
            e = e ? Mb(d.referrer) : d.referrer;
            d = !1;
            if (null != b) {
                var g = f;
                Ds(c) || (e = "", d = !_.v($o) || !a.R.mb)
            } else b = f;
            f = uB(c);
            Z(a, "nhd", f || null);
            Z(a, "url", b);
            var h = b,
                k = _.Xb(252) || {};
            k.url = h;
            _.qh(xq)[252] = k;
            null != g && g !== b && Z(a, "loc", g);
            Z(a, "ref", e);
            f && (g = a.R.mb, g = void 0 === g ? "" : g, b = Fe(c.top) && c.top.location && c.top.location.href || "", e = c.location && c.location.ancestorOrigins || null, (c = b || g || zm(c) || e && e[e.length - 1] || "") && Z(a, "top", d ? Cl(c.match(_.Bl)[3] || null) : c));
            Z(a, "scar", a.model.G)
        },
        EB = function(a) {
            var b = Pb();
            Z(a, "vrg", b)
        },
        JB = function(a, b) {
            var c = a.L.P,
                d = b = b.map(function(e) {
                    return $f(c[e.j]).join("&")
                });
            d.join("|").length === b.length - 1 && (d = null);
            Z(a, "prev_scp", d, {
                Aa: "|"
            })
        },
        FB = function(a) {
            var b = a.L.T;
            0 !== af(b, 24, 0) && Z(a, "co", af(b, 24, 0), {
                ua: !0
            })
        },
        GB = function(a) {
            var b = Uu(a.L.T) || new Qu;
            !0 === x(b, 1) && Z(a, "rdp", "1");
            !0 === x(b, 9) && Z(a, "ltd", "1");
            var c = I(a.da, 2);
            c && Z(a, "gdpr_consent", c); of (a.da, 3) && (c = x(a.da, 3), Z(a, "gdpr", c ? "1" : "0", {
                ua: !0
            }));
            (c = I(a.da, 4)) && Z(a, "addtl_consent", c);
            (c = I(a.da, 7)) && Z(a, "tcfe", c);
            (c = I(a.da, 1)) && Z(a, "us_privacy", c);
            (x(a.da, 6) || x(b, 8)) && Z(a, "npa", 1);
            c = af(b, 6, 2);
            2 !== c && Z(a, "tfua", c, {
                ua: !0
            }); of (b, 5) && (b = I(b, 5), Z(a, "tfcd", b, {
                ua: !0
            }))
        },
        IB = function(a) {
            var b = a.L.T;
            1 !== af(b, 24, 0) && of (b, 16) && Z(a, "ppid", I(b, 16), {
                ua: !0
            })
        },
        KB = function(a, b) {
            var c = a.L,
                d = c.T,
                e = 1 !== a.model.Ca;
            c = !!x(c.P[b[0].j], 17);
            b = Gv(b, a.L);
            d = x(d, 27) || !1;
            var f = 3 === a.model.Ca,
                g = new $t;
            g.set(0, e);
            g.set(1, c);
            g.set(2, b);
            g.set(3, d);
            g.set(4, f);
            e = au(g);
            0 < e && Z(a, "eri", e)
        },
        LB = function(a, b) {
            var c = a.L.T,
                d = tB(c);
            Z(a, "cust_params", d, {
                Aa: "&"
            });
            if (0 == af(c, 24, 0)) {
                if (a.m) {
                    d = it(a.m, a.da);
                    Z(a, "cookie", d, {
                        ua: !0
                    });
                    if (d = !d) {
                        d = a.m;
                        if (0 === d.l) {
                            var e = a.da;
                            if (it(d, e)) e = !0;
                            else {
                                var f = d.j;
                                x(e, 5) && vc(f) && (new wc(f.document)).set("GoogleAdServingTest", "Good", void 0);
                                if (f = "Good" === xc("GoogleAdServingTest", e, d.j)) {
                                    var g = d.j;
                                    x(e, 5) && vc(g) && dt(new wc(g.document), "GoogleAdServingTest")
                                }
                                e = f
                            }
                            d.l = e ? 2 : 1
                        }
                        d = 2 === d.l
                    }
                    d && Z(a, "cookie_enabled", "1", {
                        ua: !0
                    })
                }
                d = b.document;
                (b = (Ev(a.L.T) || yg(b)) === d.URL ? "" : d.domain) && Z(a, "cdm", b)
            }(c = I(c, 8)) ? (50 < c.length && (c = c.substring(0, 50)), c = "a " + wk('role:1 producer:12 loc:"' + (c + '"'))) : c = "";
            c && Z(a, "uule", c);
            c = new $t;
            _.F.SVGElement && _.F.document.createElementNS && c.set(0);
            b = Yl();
            b["allow-top-navigation-by-user-activation"] && c.set(1);
            b["allow-popups-to-escape-sandbox"] && c.set(2);
            _.F.crypto && _.F.crypto.subtle && c.set(3);
            _.F.TextDecoder && _.F.TextEncoder && c.set(4);
            c = au(c);
            Z(a, "bc", c)
        },
        ZB = function(a, b) {
            var c = a.L,
                d = c.P,
                e = new D.Map;
            c = _.G(L(c.T, sf, 14));
            for (var f = c.next(); !f.done; f = c.next()) {
                var g = f.value;
                e.set(tf(g), [I(g, 2)[0]])
            }
            for (c = 0; c < b.length; c++) {
                g = d[b[c].j];
                if (!g) return;
                g = _.G(L(g, sf, 3));
                for (f = g.next(); !f.done; f = g.next()) {
                    var h = f.value;
                    f = tf(h);
                    var k = e.get(f) || [];
                    h = I(h, 2)[0];
                    1 === b.length ? k[0] = h : h !== k[0] && (k[c + 1] = h);
                    e.set(f, k)
                }
            }
            b = [];
            d = _.G(_.r(e, "keys").call(e));
            for (c = d.next(); !c.done; c = d.next())
                if (g = c.value, c = pu()[g]) g = e.get(g), 1 < g.length ? (g = g.map(function(l) {
                    return encodeURIComponent(l || "")
                }).join(), b.push(c + "," + g)) : 1 === g.length && "url" !== c && Z(a, c, g[0]);
            b.length && Z(a, "sps", b.join("|"))
        },
        MB = function(a, b, c) {
            var d, e = c.document;
            if (!Ev(a.L.T)) {
                try {
                    var f = Math.round(Date.parse(c.document.lastModified) / 1E3) || null
                } catch (u) {
                    f = null
                }
                Z(a, "lmt", f ? f.toString() : null)
            }
            Z(a, "dt", (new Date).getTime(), {
                ha: !1
            });
            try {
                f = qB;
                var g = Math.min(Up("domLoading") || Infinity, Up("domInteractive") || Infinity);
                var h = Infinity == g ? Math.max(Up("responseEnd"), Up("navigationStart")) : g;
                0 < h && f >= h && (Z(a, "dlt", h, {
                    ha: !1
                }), Z(a, "idt", f - h, {
                    ha: !1
                }))
            } catch (u) {
                Z(a, "idt", -9, {
                    ha: !1
                }), u instanceof Error && Ub(479, u)
            }
            if (null !== (d = $B) && void 0 !== d) d;
            else {
                a: {
                    h = c.navigator;g = c.document;f = h.userAgent;
                    var k = h.platform,
                        l = /WebKit\/(\d+)/,
                        m = /rv:(\d+\.\d+)/,
                        n = /rv:1\.8([^.]|\.0)/;
                    if (/Win|Mac|Linux|iPad|iPod|iPhone/.test(k) && !/^Opera/.test(f) && (l = (l.exec(f) || [0, 0])[1], m = (m.exec(f) || [0, 0])[1], /Win/.test(k) && /Trident/.test(f) && 11 <= g.documentMode || !l && "Gecko" === h.product && 27 <= m && !n.test(f) || 536 <= l)) {
                        h = !0;
                        break a
                    }
                    h = !1
                }
                g = Es(c, c.document, 500, 300);$B = h && !g
            }
            $B || Z(a, "ea", "0", {
                ua: !0
            });
            h = c.document;
            g = Cs(an()).J;
            g = Fs(g);
            h = Es(an(), h, c.google_ad_width, c.google_ad_height);
            g = g.jc;
            f = an();
            f = f.top == f ? 0 : Fe(f.top) ? 1 : 2;
            k = 4;
            h || 1 != f ? h || 2 != f ? h && 1 == f ? k = 7 : h && 2 == f && (k = 8) : k = 6 : k = 5;
            g && (k |= 16);
            h = "" + k;
            Gs();
            Z(a, "frm", h || null);
            if (h = Bs(!0, c)) a.L.Za = h, Z(a, "biw", h.width), Z(a, "bih", h.height);
            !Ds(c) && (h = Bs(!1, c)) && (Z(a, "isw", h.width), Z(a, "ish", h.height));
            a.model.A && Z(a, "oid", a.model.A);
            h = [];
            g = [];
            k = a.L;
            f = k.T;
            k = k.P;
            n = _.G(b);
            for (m = n.next(); !m.done; m = n.next()) {
                m = m.value;
                l = k[m.j];
                var p = qv(f, l);
                m = Pv(m, l, e, p);
                a.A && (m = m || aC);
                m && (h.push(Math.round(m.x)), g.push(Math.round(m.y)));
                if (!a.A) break
            }
            Z(a, "adxs", h);
            Z(a, "adys", g);
            Z(a, "adks", YB(a, b));
            e = 0;
            void 0 === _.F.postMessage && (e |= 1);
            0 < e && Z(a, "osd", e);
            bC(a, b);
            ZB(a, b);
            e = dn(c);
            a.D ? Z(a, "ifi", e) : (Z(a, "ifi", e + 1), e = c, b = b.length, b = void 0 === b ? 1 : b, e = Gm(Fm(e)) || e, e.google_unique_id = (e.google_unique_id || 0) + b);
            null !== c && c != c.top ? (b = [c.document.URL], c.name && b.push(c.name), c = Bs(!1, c, !1), b.push(c.width.toString()), b.push(c.height.toString()), c = Nl(b.join(""))) : c = 0;
            0 !== c && Z(a, "ifk", c.toString())
        },
        NB = function(a) {
            var b = _.F.devicePixelRatio;
            (b = "number" === typeof b ? +b.toFixed(3) : null) && Z(a, "u_sd", b, {
                ha: !1
            })
        },
        DB = function(a) {
            Z(a, "eid", a.model.m);
            var b = Tp().split(",");
            b && Z(a, "debug_experiment_id", b)
        },
        HB = function(a, b, c) {
            for (var d = _.G(b), e = d.next(); !e.done; e = d.next()) cC(a, e.value.getAdUnitPath());
            d = a.L;
            var f = d.T,
                g = d.P;
            d = b.map(function(k) {
                return g[k.j]
            });
            Z(a, "iu_parts", a.l);
            Z(a, "enc_prev_ius", a.G);
            Z(a, "prev_iu_szs", d.map(function(k) {
                return mv(k)
            }).join());
            d.some(function(k) {
                return (J = Yc(k), _.r(J, "includes")).call(J, "fluid")
            }) && (e = d.map(function(k) {
                return (J = Yc(k), _.r(J, "includes")).call(J, "fluid") ? "height" : "0"
            }), Z(a, "fluid", e));
            Z(a, "fsfs", Xe(b, function(k) {
                var l;
                k = g[k.j];
                return Number(null !== (l = null === k || void 0 === k ? void 0 : x(k, 12)) && void 0 !== l ? l : x(f, 13))
            }, 0));
            Z(a, "fsbs", Xe(b, function(k) {
                var l = a.L.P[k.j];
                k = a.L.T.ya();
                l = null === l || void 0 === l ? void 0 : l.ya();
                return (null === l || void 0 === l ? 0 : x(l, 3)) || (null === k || void 0 === k ? 0 : x(k, 3)) ? 1 : 0
            }, 0));
            CB(a, Mf(a.R, b, a.D));
            dC(a, g[b[0].j]);
            CB(a, Gf(b, g, c));
            CB(a, Hf(d));
            b = {};
            c = _.G(d);
            for (d = c.next(); !d.done; d = c.next())(d = I(d.value, 7)) && (b[d] = (b[d] || 0) + 1);
            if (!Kl(b)) {
                c = new Yb("gpt_sra_setclickurl");
                var h = [];
                _.$b(b, function(k, l) {
                    h.push(String(l.length) + ":" + String(k))
                });
                q(c, "lenfreqs", h.join());
                Zb(c);
                ac(c, _.Xb(58))
            }
        },
        dC = function(a, b) {
            (_.v(Ln) ? x(a.L.T, 6) : a.A) || !I(b, 7) || Z(a, "click", I(b, 7))
        },
        eC = function(a, b) {
            for (var c = 0; c < b.length; c++)
                if ("" !== b[c]) {
                    for (var d = !1, e = 0; e < a.l.length; e++)
                        if (b[c] === a.l[e]) {
                            d = !0;
                            break
                        }
                    d || a.l.push(b[c])
                }
        },
        fC = function(a, b) {
            for (var c = "", d = 0; d < b.length; d++) {
                if (0 < d) c += "/";
                else if ("" === b[0]) continue;
                for (var e = 0; e < a.l.length; e++)
                    if (b[d] === a.l[e]) {
                        c += e;
                        break
                    }
            }
            return c
        },
        cC = function(a, b) {
            var c = "";
            "" !== b && (b = b.split("/").map(function(d) {
                return d.replace(/,/g, ":")
            }), eC(a, b), c = fC(a, b));
            a.G.push(c)
        },
        bC = function(a, b) {
            var c;
            b = null !== (c = b.map(function(d) {
                return $A(a.model, d)
            })) && void 0 !== c ? c : [];
            Z(a, "ucis", b, {
                Aa: "|"
            })
        },
        WB = function(a) {
            if (!_.v(op)) {
                var b = tc(a.da, window);
                if (b) {
                    var c = new Qw;
                    var d = _.lb(rp),
                        e = [],
                        f = /^_GESPSK-(.+)$/;
                    try {
                        for (var g = 0; g < b.length; g++) {
                            var h = (f.exec(b.key(g)) || [])[1];
                            h && e.push(h)
                        }
                    } catch (k) {}
                    e = _.G(e);
                    for (f = e.next(); !f.done; f = e.next())
                        if (f = f.value, g = me().get(f, b), g.getError()) Rd(g.getError(), f, g.errorMessage);
                        else if (g = g.Ub)
                        if (h = ne(g), 0 === h || 1 === h) h = I(g, 2), 0 <= d && h && h.length > d ? Rd(12, f) : (wf(c, 2, g, Uw), Rd(19, f));
                    L(c, Uw, 2).length ? (b = new xf, d = L(c, Rw, 1), 0 < d.length && Hk(b, 1, d, Tw), d = L(c, Uw, 2), 0 < d.length && Hk(b, 2, d, Vw), c = Ka(zf(b), void 0)) : c = null
                } else c = null;
                Z(a, "a3p", c)
            }
        },
        Z = function(a, b, c, d) {
            d = void 0 === d ? {} : d;
            a.o.has(b) || null == c || a.H.push({
                Kd: b,
                value: c,
                options: d
            })
        },
        CB = function(a, b) {
            b = _.G(_.r(b, "entries").call(b));
            for (var c = b.next(); !c.done; c = b.next()) {
                var d = _.G(c.value);
                c = d.next().value;
                d = d.next().value;
                Z(a, c, d.value, d.options)
            }
        },
        xB = function(a) {
            var b = a.value,
                c = a.options,
                d = void 0 === c.ha ? !0 : c.ha;
            a = void 0 === c.Aa ? "," : c.Aa;
            c = void 0 === c.ua ? !1 : c.ua;
            return "object" !== typeof b ? null == b || !c && 0 === b ? null : gC(b, d) : Array.isArray(b) && b.length ? b.map(function(e) {
                return gC(e, d)
            }).join(gC(a, d)) : null
        },
        aC = new _.ad(-9, -9),
        XB = 0,
        $B = null,
        gC = function(a, b) {
            a = a.toString();
            return b ? encodeURIComponent(a) : a
        };
    var jC = function(a) {
            var b = this;
            this.j = new D.Map;
            this.l = new D.Map;
            this.xb = Kb.N();
            if (window.performance && Ke(window.performance.now)) {
                var c = kc(334, function() {
                    for (var d = _.G(b.j), e = d.next(); !e.done; e = d.next()) {
                        var f = _.G(e.value);
                        e = f.next().value;
                        f = f.next().value;
                        hC(b, e, f) && b.j.delete(e)
                    }
                });
                _.xd(window, "DOMContentLoaded", c);
                Pq(a, Wq, function(d) {
                    var e = d.detail;
                    d = e.xc;
                    e = e.P;
                    return void iC(b, (0, H.U)(ew(_.qh(wh), d)), (0, H.U)(I(e, 20)))
                });
                Pq(a, Xq, function(d) {
                    var e = d.detail;
                    d = e.xc;
                    e = e.P;
                    d = (0, H.U)(ew(_.qh(wh), d));
                    e = (0, H.U)(I(e, 20));
                    var f = b.l.get(d);
                    null != f ? vA(f, e) : iC(b, d, e)
                })
            }
        },
        iC = function(a, b, c) {
            hC(a, b, c) ? a.j.delete(b) : (a.j.set(b, c), _.Bg(b, function() {
                a.j.delete(b)
            }))
        },
        hC = function(a, b, c) {
            var d = Vc(b);
            if (d && "DIV" === d.nodeName) {
                var e = _.v(Ep);
                d = new tA({
                    J: window,
                    xb: a.xb,
                    lb: d,
                    Ba: function(f) {
                        Ub(336, f, 1)
                    },
                    Wd: e
                });
                if (d.l) return vA(d, c), a.l.set(b, d), fu(cu.N(), b, function() {
                    return void a.l.delete(b)
                }), !0
            }
            return !1
        };
    var kC = function(a, b, c) {
            for (var d = 100; a && a != b && --d;) _.gm(a, c), a = a.parentElement
        },
        lC = function(a, b, c, d, e) {
            _.gm(a, {
                "margin-left": "0px",
                "margin-right": "0px"
            });
            var f = {};
            _.v(vn) || (f["z-index"] = "0", "absolute" !== d.position && "fixed" !== d.position && "relative" !== d.position && (f.position = "relative"));
            var g = "rtl" == d.direction,
                h = ((e && -12245933 !== e.width ? e.width : b.innerWidth) - c) / 2;
            d = function() {
                var k = a.getBoundingClientRect().left;
                return g ? h - k : k - h
            };
            b = d();
            0 !== b && (c = function(k) {
                g ? f["margin-right"] = k + "px" : f["margin-left"] = k + "px"
            }, c(-b), _.gm(a, f), d = d(), 0 !== d && b !== d && (c(b / (d - b) * b), _.gm(a, f)));
            return !0
        },
        nC = function(a, b, c, d, e, f, g, h) {
            var k = mv(c);
            c = kc(459, function() {
                return mC(a, b, d, e, f, k, g, h)
            });
            _.F.setTimeout(c, 500)
        },
        mC = function(a, b, c, d, e, f, g, h) {
            if (_.F.IntersectionObserver) {
                var k = null,
                    l = Wv(b, a) || Vc(b, a),
                    m = kc(459, function(n) {
                        if (n = n && n[0]) {
                            var p = n.boundingClientRect,
                                u = window.innerWidth,
                                t = Math.round(p.left),
                                y = Math.round(p.right),
                                z = 0 > t + 2,
                                K = 0 < y - (u + 2);
                            if (n.intersectionRatio >= 1 - ((0 <= Math.round(p.left) ? 0 : 2) + (Math.round(p.right) <= window.innerWidth ? 0 : 2)) / d || z || K) mc(g, function(Q) {
                                if (z || K) {
                                    var R = new $t;
                                    R.set(8);
                                    oC(l) && R.set(10);
                                    R = au(R)
                                } else R = pC(a, b);
                                var X = qC(b, l, e),
                                    ua = X.zd;
                                X = X.Cd;
                                Zb(Q);
                                q(Q, "qid", h);
                                q(Q, "iu", b.getAdUnitPath());
                                q(Q, "e", String(R));
                                z && q(Q, "ofl", String(t));
                                K && q(Q, "ofr", String(y - u));
                                q(Q, "ret", d + "x" + e);
                                q(Q, "req", f);
                                q(Q, "bm", String(c));
                                q(Q, "efh", Number(ua));
                                q(Q, "stk", Number(X));
                                q(Q, "ifi", dn(window))
                            }, {
                                ta: _.lb(un)
                            }), k && k.unobserve(l)
                        }
                    });
                l && (k = new _.F.IntersectionObserver(m, {
                    threshold: [1]
                }), k.observe(l))
            }
        },
        pC = function(a, b) {
            var c = Wv(b, a) || Vc(b, a),
                d = new $t;
            try {
                var e = function(R, X) {
                        return a.elementsFromPoint(R, X)
                    },
                    f = c.getBoundingClientRect(),
                    g = f.left,
                    h = f.top,
                    k = f.width,
                    l = f.height,
                    m = Vc(b, a),
                    n = Xc(m, window);
                if ("hidden" == n.visibility || "none" == n.display) return au(d);
                var p = parseInt(n["border-top-width"] || 0, 10) + 1;
                b = g + k;
                l = h + l;
                var u = e(g + p + 2, h + p);
                var t = e(b - p - 2, h + p);
                var y = e(b - p - 2, l - p);
                var z = e(g + p + 2, l - p);
                var K = e(b / 2, l - p)
            } catch (R) {
                return d.set(1), au(d)
            }
            if (!(u && u.length && t && t.length && y && y.length && z && z.length && K && K.length)) return d.set(7), au(d);
            e = function(R, X) {
                for (var ua = !1, ja = 0; ja < R.length; ja++) {
                    var xa = R[ja];
                    if (ua) {
                        var nb = Xc(xa, window);
                        if ("hidden" != nb.visibility && !im(xa) && !Q(c, xa)) {
                            d.set(X);
                            "absolute" == nb.position && d.set(11);
                            break
                        }
                    } else c == xa && (ua = !0)
                }
            };
            jm(c) && d.set(9);
            var Q = function(R, X) {
                return bm(R, X) || bm(X, R)
            };
            g = u[0];
            c == g || Q(c, g) || im(g) || d.set(2);
            g = t[0];
            c == g || Q(c, g) || im(g) || d.set(3);
            g = y[0];
            c == g || Q(c, g) || im(g) || d.set(4);
            g = z[0];
            c == g || Q(c, g) || im(g) || d.set(5);
            if (im(c)) return au(d);
            e(u, 12);
            e(t, 13);
            e(y, 14);
            e(z, 15);
            e(K, 6);
            return au(d)
        },
        oC = function(a) {
            var b = !1,
                c = !1,
                d = _.v(zn);
            return hm(a, function(e) {
                d = d || "nowrap" == e.whiteSpace;
                c = c || "scroll" == e.overflowX || "auto" == e.overflowX;
                return (b = b || "flex" == e.display) && c && d
            })
        },
        qC = function(a, b, c) {
            var d = (a = Vc(a)) && Xc(a, window),
                e = d ? "absolute" != d.position : !0,
                f = !1,
                g = a && a.parentElement,
                h = !1;
            Af(b, function(k) {
                var l = k.style;
                if (e)
                    if (h || (h = k == g)) e = oy(k, _.F, !0, -1, -1);
                    else {
                        l = l && l.height;
                        var m = (l && _.r(l, "endsWith").call(l, "px") ? parseInt(l, 10) : 0) >= c;
                        !l || m || "string" === typeof l && _.r(ly, "includes").call(ly, l) || (e = !1)
                    }
                f || (k = Xc(k, _.F), "sticky" != k.position && "fixed" != k.position) || (f = !0);
                return !(f && !e)
            }, 100);
            return {
                zd: e,
                Cd: f
            }
        },
        rC = function(a, b, c) {
            (J = Yc(b), _.r(J, "includes")).call(J, "fluid") && setTimeout(function() {
                mc("gpt_fluid_sz", function(d) {
                    var e = Wv(a, document);
                    e = e ? $m(e) : null;
                    q(d, "sz", e ? e.width + "x" + e.height : "null");
                    q(d, "qqid", c)
                })
            }, 250)
        };
    var sC = new D.Map([
            [2, {
                Id: "page_level_ads"
            }]
        ]),
        tC = function() {},
        wC;
    tC.N = function() {
        throw Error("Must be overridden");
    };
    _.uC = function(a) {
        this.j = a = void 0 === a ? sC : a;
        this.l = new D.Map;
        this.loaded = new D.Set;
        this.A = null
    };
    _.N(_.uC, tC);
    _.vC = function(a, b) {
        b = b.module;
        a.l.has(b) || a.l.set(b, new ue);
        return a.l.get(b)
    };
    wC = function(a, b) {
        var c = b.module;
        b = "_gpt_js_load_" + c + "_";
        var d = kc(340, function(e) {
            if (a.j.has(c) && "function" === typeof e) {
                var f = a.j.get(c);
                f = (void 0 === f.md ? [] : f.md).map(function(g) {
                    return _.vC(a, g).promise
                });
                D.Promise.all(f).then(function() {
                    e.call(window, _)
                })
            }
        });
        Object.defineProperty(Dg(), b, {
            value: function(e) {
                if (d) {
                    var f = d;
                    d = null;
                    f(e)
                }
            },
            writable: !1,
            enumerable: !1
        })
    };
    _.uC.prototype.load = function(a) {
        var b, c = _.vC(this, a),
            d = (null !== (b = this.j.get(a.module)) && void 0 !== b ? b : {}).Id;
        if (!d) throw Error("cannot load invalid module: " + d);
        if (!this.loaded.has(a.module)) {
            var e = _.Xb(172);
            e = e && "pagead2.googlesyndication.com" === Cl((e.src || "").match(_.Bl)[3] || null);
            var f = this.A;
            d = Vi(eb(e ? f.gd(d) : f.hd(d)).toString());
            d = (e = _.lb(So)) ? Xi(d, {
                cb: e
            }) : d;
            wC(this, a);
            Hl(document, d);
            this.loaded.add(a.module)
        }
        return c.promise
    };
    ui(_.uC);
    var xC = function(a, b, c, d, e, f, g, h) {
        Y.call(this, 682);
        this.R = a;
        this.format = b;
        this.slotId = c;
        this.J = d;
        this.C = Gt(this);
        this.m = V(this, e);
        this.o = U(this, f);
        this.F = U(this, g);
        this.B = V(this, h)
    };
    _.N(xC, Y);
    xC.prototype.j = function() {
        return A(this, function b() {
            var c = this,
                d, e, f, g, h, k, l, m, n, p;
            return B(b, function(u) {
                d = c;
                if (2 !== c.format && 3 !== c.format || !Ct(c.m) || !Tk(c.m.value, 12, !1)) return u.return();
                e = (0, H.U)(c.B.value);
                f = e.sd;
                g = _.hu(c.R, c.slotId);
                h = c.F.value;
                k = c.o.value;
                _.gm(k, {
                    "max-height": "30vh",
                    overflow: "hidden"
                });
                if (yC) yC.yc(k);
                else {
                    yC = new f(c.format, k, c.J, h, c.R, c.slotId);
                    l = {};
                    m = _.G(L(c.m.value, Kw, 13));
                    for (n = m.next(); !n.done; n = m.next()) p = n.value, l[I(p, 1)] = I(p, 2);
                    yC.zc(l);
                    yC.oa();
                    eu(c.R, c.slotId, function() {
                        yC && (yC.wa(), yC = null);
                        g && _.ju(d.R, d.slotId)
                    })
                }
                _.Bg(c, function() {
                    return _.xl(k)
                });
                c.C.notify();
                gi(u)
            })
        })
    };
    var yC = null;
    var zC = function(a, b, c, d, e, f, g, h) {
        Y.call(this, 683);
        this.slotId = a;
        this.format = b;
        this.O = c;
        this.o = V(this, d);
        this.m = U(this, e);
        this.I = U(this, f);
        this.B = V(this, g);
        this.F = V(this, h);
        this.K = ng(a, og, function(k) {
            k = k.detail;
            try {
                var l = JSON.parse(k.data);
                return "sth" === l.googMsgType && "i-adframe-load" === l.msg_type
            } catch (m) {
                return !1
            }
        })
    };
    _.N(zC, Y);
    zC.prototype.j = function() {
        return A(this, function b() {
            var c = this,
                d, e, f, g, h, k, l, m, n, p, u;
            return B(b, function(t) {
                if (1 == t.j) {
                    d = c;
                    e = c.o.value;
                    if (!e || 5 !== c.format) return t.return();
                    f = c.I.value;
                    g = c.m.value;
                    h = (0, H.U)(c.F.value);
                    k = h.wd;
                    l = new _.iz;
                    m = new k(window, g, f, l, c.O, "6499" === Ib(c.slotId.getAdUnitPath()), function() {
                        return void d.wa()
                    }, c.B.value);
                    _.Lq(c, m);
                    n = L(e, Kw, 13);
                    p = mg(n);
                    m.rb(p);
                    u = _.lb(io);
                    switch (u) {
                        case 0:
                            m.Ia();
                            break;
                        case 1:
                            t.j = 2;
                            return
                    }
                } else {
                    if (4 != t.j) return C(t, c.K, 4);
                    if (c.A) return t.return();
                    m.Ia()
                }
                t.j = 0
            })
        })
    };
    var AC = function() {
        this.module = 2
    };
    AC.prototype.toString = function() {
        return String(this.module)
    };
    _.BC = new AC;
    var CC = function(a, b, c) {
        Y.call(this, 846);
        this.format = a;
        this.C = this.l();
        this.m = V(this, b);
        this.o = V(this, c)
    };
    _.N(CC, Y);
    CC.prototype.j = function() {
        var a;
        return A(this, function c() {
            var d = this,
                e, f, g, h;
            return B(c, function(k) {
                if (1 == k.j) {
                    e = (2 === d.format || 3 === d.format) && !(null === (a = d.m.value) || void 0 === a || !Tk(a, 12, !1));
                    f = 5 === d.format && d.o.value;
                    if (!e && !f) {
                        zt(d.C);
                        k.j = 0;
                        return
                    }
                    g = d.C;
                    h = g.j;
                    return C(k, _.uC.N().load(_.BC), 3)
                }
                h.call(g, k.l);
                gi(k)
            })
        })
    };
    var DC = function(a, b, c) {
        Y.call(this, 696);
        this.slotId = a;
        this.ia = b;
        It(this, c);
        this.m = new D.Promise(function(d) {
            var e = ["canceled", "ha_before_make_visible"];
            _.v(bh) || e.push("closed");
            e = _.G(e);
            for (var f = e.next(); !f.done; f = e.next()) pg(a, f.value).then(d)
        })
    };
    _.N(DC, Y);
    DC.prototype.j = function() {
        return A(this, function b() {
            var c = this;
            return B(b, function(d) {
                switch (d.j) {
                    case 1:
                        return C(d, c.m, 2);
                    case 2:
                        if (c.A) return d.return();
                        if (_.v(bh)) {
                            d.j = 3;
                            break
                        }
                        return C(d, c.ia.dispatchEvent("rewardedSlotCanceled", 703, new ow(c.slotId, "publisher_ads")), 3);
                    case 3:
                        return C(d, c.ia.dispatchEvent("rewardedSlotClosed", 703, new pw(c.slotId, "publisher_ads")), 5);
                    case 5:
                        c.wa(), gi(d)
                }
            })
        })
    };
    var EC = function(a, b, c) {
        Y.call(this, 697);
        this.slotId = a;
        this.ia = b;
        this.m = pg(a, "completed");
        It(this, c)
    };
    _.N(EC, Y);
    EC.prototype.j = function() {
        return A(this, function b() {
            var c = this;
            return B(b, function(d) {
                if (1 == d.j) return C(d, c.m, 2);
                if (3 != d.j) return c.A ? d.return() : C(d, c.ia.dispatchEvent("rewardedSlotCompleted", 704, new qw(c.slotId, "publisher_ads")), 3);
                c.wa();
                gi(d)
            })
        })
    };
    var FC = function(a, b, c) {
        Y.call(this, 694);
        this.slotId = a;
        this.ia = b;
        It(this, c);
        this.m = pg(a, "granted")
    };
    _.N(FC, Y);
    FC.prototype.j = function() {
        return A(this, function b() {
            var c = this,
                d, e;
            return B(b, function(f) {
                if (1 == f.j) return C(f, c.m, 2);
                if (3 != f.j) return d = f.l, e = d.payload, c.A ? f.return() : C(f, c.ia.dispatchEvent("rewardedSlotGranted", 702, new nw(c.slotId, "publisher_ads", null !== e && void 0 !== e ? e : null)), 3);
                c.wa();
                gi(f)
            })
        })
    };
    var GC = {
            width: "100%",
            height: "100%",
            left: "0",
            top: "0"
        },
        HC = function(a, b, c, d, e) {
            Y.call(this, 693);
            this.J = a;
            this.F = e;
            this.C = Gt(this);
            this.m = U(this, b);
            this.o = U(this, c);
            It(this, d);
            this.B = new _.qz(this.J)
        };
    _.N(HC, Y);
    HC.prototype.j = function() {
        var a = this;
        if (!this.F.G) {
            var b = 0 === qd() ? "rgba(1,1,1,0.5)" : "white";
            _.gm(this.o.value, _.r(Object, "assign").call(Object, {
                "background-color": b,
                opacity: "1",
                position: "fixed",
                margin: "0",
                padding: "0",
                "z-index": "2147483647",
                display: "block"
            }, GC));
            _.Bg(this, _.wz(this.J.document, this.J));
            zl(this.m.value).postMessage(JSON.stringify({
                type: "rewarded",
                message: "visible"
            }), "*");
            if (this.J === this.J.top) {
                this.J.location.hash = "goog_rewarded";
                var c = new uz(this.B);
                null == c.j && (c.j = sz(c.l));
                _.Bg(this, function() {
                    if (null != c.j) {
                        var d = c.l;
                        delete d.j.maxZIndexRestrictions[c.j];
                        rz(d);
                        c.j = null
                    }
                    "goog_rewarded" === a.J.location.hash && (a.J.location.hash = "")
                })
            }
            this.C.notify()
        }
    };
    var IC = function(a, b, c) {
        Y.call(this, 695);
        this.J = a;
        this.m = U(this, b);
        It(this, c)
    };
    _.N(IC, Y);
    IC.prototype.j = function() {
        if (this.J === this.J.top) var a = zl(this.m.value),
            b = rv(this, 503, this.J, "hashchange", function(c) {
                $i(c.oldURL, "#goog_rewarded") && (a.postMessage(JSON.stringify({
                    type: "rewarded",
                    message: "back_button"
                }), "*"), b())
            })
    };
    var JC = function(a, b, c) {
        Y.call(this, 692);
        this.slotId = a;
        this.ia = b;
        this.C = Gt(this);
        this.m = U(this, c)
    };
    _.N(JC, Y);
    JC.prototype.j = function() {
        var a;
        return A(this, function c() {
            var d = this,
                e, f, g, h;
            return B(c, function(k) {
                if (1 == k.j) return e = d.m.value, f = new ue, g = f.promise, h = f.resolve, d.ia.dispatchEvent("rewardedSlotReady", 701, new mw(d.slotId, "publisher_ads", h, null !== (a = e.payload) && void 0 !== a ? a : null)), C(k, g, 2);
                if (d.A) return k.return();
                d.C.notify();
                d.wa();
                gi(k)
            })
        })
    };
    var KC = {
            width: "100%",
            height: "100%",
            left: "0",
            top: "0"
        },
        LC = {
            width: "60%",
            height: "60%",
            transform: "translate(-50%, -50%)",
            left: "50%",
            top: "50%"
        },
        MC = function(a, b) {
            Y.call(this, 691);
            var c = this;
            this.o = this.l();
            this.m = Gt(this);
            this.B = U(this, b);
            this.F = pg(a, "prefetched");
            pg(a, "ha_before_make_visible").then(function() {
                return void c.m.notify()
            })
        };
    _.N(MC, Y);
    MC.prototype.j = function() {
        return A(this, function b() {
            var c = this,
                d;
            return B(b, function(e) {
                if (1 == e.j) {
                    if (c.m.G) return e.return();
                    _.gm(c.B.value, _.r(Object, "assign").call(Object, {
                        position: "absolute"
                    }, 0 === qd() ? LC : KC));
                    return C(e, c.F, 2)
                }
                d = e.l;
                if (c.A) return e.return();
                c.o.j(d);
                gi(e)
            })
        })
    };
    var NC = function(a, b, c, d, e, f) {
        Y.call(this, 688);
        if (4 === b) {
            this.m = new ce;
            _.Lq(this, this.m);
            var g = new MC(a, e);
            W(this.m, g);
            b = new JC(a, c, g.o);
            W(this.m, b);
            f = new HC(d, e, f, b.C, g.m);
            W(this.m, f);
            W(this.m, new IC(d, e, f.C));
            W(this.m, new FC(a, c, b.C));
            W(this.m, new DC(a, c, b.C));
            W(this.m, new EC(a, c, b.C))
        }
    };
    _.N(NC, Y);
    NC.prototype.j = function() {
        var a;
        null === (a = this.m) || void 0 === a ? void 0 : ee(a)
    };
    var qg = "3rd party ad content";
    var OC = function() {
            this.j = {}
        },
        QC = function(a, b, c) {
            if (!_.v(Wo)) {
                var d;
                c && (d = "//" + c + ".safeframe.googlesyndication.com");
                c = Uz(b, ev(), fv(), !0, d);
                a.j[c] || (a.j[c] = 1, Py() && !_.v(Xo) ? PC(a, c) : Dg().fifWin || (b = b.document, a = b.createElement("IFRAME"), a.src = c, a.style.visibility = "hidden", a.style.display = "none", b = b.getElementsByTagName("script"), 0 < b.length && (b = b[b.length - 1], b.parentNode && b.parentNode.insertBefore(a, b.nextSibling))))
            }
        },
        PC = function(a, b) {
            var c = Qy(document, b, "prefetch", "");
            c && _.xd(c, "load", function() {
                a.j[b] = 3;
                c && _.xl(c)
            })
        };
    var RC = function(a, b, c) {
        Y.call(this, 706);
        this.J = a;
        this.C = this.l();
        this.m = V(this, b);
        It(this, c)
    };
    _.N(RC, Y);
    RC.prototype.j = function() {
        var a = this.m.value;
        this.C.l(a ? tc(a, this.J) : null)
    };
    var SC = function(a, b, c, d, e) {
        Y.call(this, 876);
        this.I = a;
        this.o = b;
        this.m = this.l();
        this.B = V(this, c);
        this.F = V(this, d);
        this.K = V(this, e)
    };
    _.N(SC, Y);
    SC.prototype.j = function() {
        var a, b;
        return A(this, function d() {
            var e, f = this,
                g, h;
            return B(d, function(k) {
                e = new gt;
                g = null === (a = f.I) || void 0 === a ? void 0 : x(a, 9);
                h = f.K.value;
                if (null != h) {
                    var l;
                    if (l = !g) {
                        var m = void 0 === m ? !1 : m;
                        if (Ps(h))
                            if (!1 === h.gdprApplies || "tcunavailable" === h.tcString || void 0 === h.gdprApplies && !m || "string" !== typeof h.tcString || !h.tcString.length) var n = !0;
                            else {
                                n = void 0 === n ? "755" : n;
                                b: {
                                    if (h.publisher && h.publisher.restrictions && (l = h.publisher.restrictions["1"], void 0 !== l)) {
                                        l = l[void 0 === n ? "755" : n];
                                        break b
                                    }
                                    l = void 0
                                }
                                0 === l ? n = !1 : h.purpose && h.vendor ? (l = h.vendor.consents, (n = !(!l || !l[void 0 === n ? "755" : n])) && h.purposeOneTreatment && ("DE" === h.publisherCC || _.v(fp) && "CH" === h.publisherCC) ? n = !0 : n && (n = h.purpose.consents, n = !(!n || !n["1"]))) : n = !0
                            }
                        else n = !1;
                        l = n
                    }
                    n = E(e, 5, l);
                    n = E(n, 2, h.tcString);
                    l = null !== (b = h.addtlConsent) && void 0 !== b ? b : "";
                    n = E(n, 4, l);
                    E(n, 7, h.internalErrorState);
                    null != h.gdprApplies && E(e, 3, h.gdprApplies);
                    "tcunavailable" === h.tcString ? f.o.info(ms("failed")) : f.o.info(ms("succeeded"))
                } else E(e, 5, !g);
                f.F.value && E(e, 1, f.F.value);
                null != f.B.value && E(e, 6, f.B.value);
                f.m.j(e);
                gi(k)
            })
        })
    };
    var TC = function(a, b, c, d, e, f) {
        f = void 0 === f ? sg : f;
        Y.call(this, 879);
        this.Ea = a;
        this.o = b;
        this.J = d;
        this.F = e;
        this.I = f;
        this.m = this.l();
        this.B = null;
        _.Xb(260) && (this.B = U(this, c))
    };
    _.N(TC, Y);
    TC.prototype.j = function() {
        var a, b;
        return A(this, function d() {
            var e = this,
                f;
            return B(d, function(g) {
                if (1 == g.j) {
                    var h = e.F;
                    h = void 0 === h ? _.F.top : h;
                    h = Zl(h, "googlefcPresent");
                    var k = e.J;
                    k = void 0 === k ? _.F : k;
                    k.googlefc && !h && e.I(e.Ea);
                    if (null !== (b = null === (a = e.B) || void 0 === a ? void 0 : a.value) && void 0 !== b ? !b : !Vt(e.o)) {
                        zt(e.m);
                        g.j = 0;
                        return
                    }
                    return C(g, Yt(e.o, "loaded"), 3)
                }
                f = g.l;
                e.m.j(f);
                gi(g)
            })
        })
    };
    var UC = function(a, b, c, d) {
        Y.call(this, 877);
        this.Ea = a;
        this.o = b;
        this.F = c;
        this.m = this.l();
        this.B = V(this, d)
    };
    _.N(UC, Y);
    UC.prototype.j = function() {
        return A(this, function b() {
            var c = this,
                d, e;
            return B(b, function(f) {
                if (1 == f.j) return d = c.B.value, C(f, Zt(c.o, d, c.Ea, c.F), 2);
                e = f.l;
                c.m.l(e);
                gi(f)
            })
        })
    };
    var VC = function(a, b) {
        Y.call(this, 874);
        this.J = a;
        this.m = this.l();
        It(this, b)
    };
    _.N(VC, Y);
    VC.prototype.j = function() {
        return A(this, function b() {
            var c = this,
                d, e, f;
            return B(b, function(g) {
                d = c;
                e = new Ls(c.J, -1);
                _.Lq(c, e);
                if (!Ns(e)) return zt(c.m), g.return();
                Cc().info(ls());
                f = kc(661, function(h) {
                    d.m.l(h)
                });
                Qs(e, f);
                gi(g)
            })
        })
    };
    var WC = function(a, b, c) {
        Y.call(this, 875);
        this.o = a;
        this.J = b;
        this.m = this.l();
        It(this, c)
    };
    _.N(WC, Y);
    WC.prototype.j = function() {
        return A(this, function b() {
            var c = this,
                d, e, f;
            return B(b, function(g) {
                d = c;
                e = new xz(c.J);
                _.Lq(c, e);
                if (!zz(e)) return zt(c.m), g.return();
                f = kc(660, function(h) {
                    h && "string" === typeof h.uspString ? d.m.j(h.uspString) : zt(d.m)
                });
                c.o.info(ks());
                Bz(e, f);
                gi(g)
            })
        })
    };
    var XC = function(a, b, c) {
        c = void 0 === c ? xg : c;
        Y.call(this, 883);
        this.B = a;
        this.F = c;
        this.m = Gt(this);
        this.o = U(this, b)
    };
    _.N(XC, Y);
    XC.prototype.j = function() {
        return A(this, function b() {
            var c = this;
            return B(b, function(d) {
                if (1 == d.j) {
                    if (!x(c.o.value, 5) || _.v(If)) return c.m.notify(), d.return();
                    _.v(go) || bz(c.B);
                    if (!c.F()) {
                        ez(null);
                        d.j = 2;
                        return
                    }
                    return C(d, new D.Promise(function(e) {
                        return void ez(e)
                    }), 2)
                }
                c.m.notify();
                gi(d)
            })
        })
    };
    var YC = function(a, b, c) {
        Y.call(this, 884);
        this.B = a;
        this.m = Gt(this);
        this.F = V(this, b);
        this.o = U(this, c)
    };
    _.N(YC, Y);
    YC.prototype.j = function() {
        _.qh(Zv).l = this.F.value;
        $v(_.qh(Zv), it(this.B, this.o.value));
        sq(2);
        this.m.notify()
    };
    var ZC = function(a, b, c) {
        Y.call(this, 890);
        this.m = a;
        this.console = b;
        this.o = V(this, c)
    };
    _.N(ZC, Y);
    ZC.prototype.j = function() {
        var a = this;
        ke(this.m, this.o.value, function(b, c) {
            var d, e;
            Ub(b, c);
            null === (e = null === (d = a.console) || void 0 === d ? void 0 : d.error) || void 0 === e ? void 0 : e.call(d, c)
        })
    };
    var $C = function(a, b, c) {
        Y.call(this, 910);
        this.m = a;
        this.console = b;
        this.o = V(this, c)
    };
    _.N($C, Y);
    $C.prototype.j = function() {
        var a = this;
        le(this.m, hg(lp).map(function(b) {
            return {
                xa: b
            }
        }), this.o.value, function(b, c) {
            var d, e;
            Ub(b, c);
            null === (e = null === (d = a.console) || void 0 === d ? void 0 : d.error) || void 0 === e ? void 0 : e.call(d, c)
        })
    };
    var aD = function(a) {
        Y.call(this, 896);
        this.o = a;
        this.m = this.l()
    };
    _.N(aD, Y);
    aD.prototype.j = function() {
        return A(this, function b() {
            var c = this,
                d;
            return B(b, function(e) {
                if (1 == e.j) return C(e, Yv(c.o), 2);
                d = e.l;
                c.m.j(d);
                gi(e)
            })
        })
    };
    var bD = null,
        cD = !1,
        dD = !1,
        eD = !1,
        fD = function(a) {
            a = void 0 === a ? _.F : a;
            if (!dD) {
                var b = new Yb("gpt_pubconsole_loaded");
                Zb(b);
                q(b, "param", String(Ag(a)));
                q(b, "api", String(eD));
                ac(b, 1);
                Hl(a.document, Vi((/^https?:/i.test("//console.googletagservices.com/pubconsole/") ? "" : "https:") + "//console.googletagservices.com/pubconsole/loader.js"));
                dD = !0
            }
        },
        gD = kc(94, function(a) {
            a = void 0 === a ? _.F : a;
            Dg()._pubconsole_disable_ || null !== Ag(a) && fD(a)
        });
    "complete" === _.F.document.readyState ? gD() : vq(_.F, function() {
        gD()
    });
    Xg("disablePublisherConsole", w(93, function() {
        Dg()._pubconsole_disable_ = !0
    }));
    Xg("onPubConsoleJsLoad", w(731, function() {
        cD && (Dg().console.openConsole(bD), bD = null, cD = !1)
    }));
    Xg("openConsole", w(732, function(a) {
        a = void 0 === a ? "" : a;
        eD = !0;
        Dg && Dg().console ? Dg().console.openConsole(a) : (a && (bD = a), cD = !0, fD())
    }));
    var hD = function(a, b) {
        Y.call(this, 873);
        this.J = a;
        this.m = U(this, b)
    };
    _.N(hD, Y);
    hD.prototype.j = function() {
        var a = this.m.value,
            b = this.J;
        !Dg()._pubconsole_disable_ && (a = xc("google_pubconsole", a, b)) && (a = a.split("|"), 0 < a.length && ("1" == a[0] || "0" == a[0]) && fD())
    };
    var iD = function(a, b, c, d) {
        Y.call(this, 885);
        this.L = a;
        this.J = b;
        this.o = c;
        this.B = d;
        this.m = this.l()
    };
    _.N(iD, Y);
    iD.prototype.j = function() {
        return A(this, function b() {
            var c = this,
                d, e, f, g;
            return B(b, function(h) {
                if (1 == h.j) {
                    if (!c.o) return zt(c.m), h.return();
                    d = c.o;
                    e = d.Ea;
                    f = d.X;
                    return C(h, jD(c, e, f), 2)
                }
                g = h.l;
                c.m.j(g);
                gi(h)
            })
        })
    };
    var jD = function(a, b, c) {
        return A(a, function e() {
            var f, g, h = this,
                k, l, m, n, p, u, t, y, z, K, Q, R, X, ua, ja, xa, nb, hb, vb;
            return B(e, function(ob) {
                switch (ob.j) {
                    case 1:
                        f = {
                            X: c,
                            da: null,
                            storage: null
                        };
                        g = new ce;
                        _.Lq(h, g);
                        k = new Ut(h.J);
                        _.Lq(h, k);
                        l = new aD(k);
                        W(g, l);
                        m = new TC(b, k, l.m, h.J, h.J.top);
                        W(g, m);
                        n = new UC(b, k, _.Xb(221), m.m);
                        W(g, n);
                        p = new WC(Cc(), h.J, m.m);
                        W(g, p);
                        u = new VC(h.J, m.m);
                        W(g, u);
                        t = new SC(Uu(h.L.T), Cc(), n.m, p.m, u.m);
                        W(g, t);
                        y = new hD(h.J, t.m);
                        W(g, y);
                        z = new XC(_.Xb(150), t.m);
                        W(g, z);
                        if (_.v(bo)) return K = new RC(h.J, t.m, z.m), W(g, K), Q = new YC(h.B, K.C, t.m), W(g, Q), _.v(np) || (R = new ZC(Dg(), h.J.console, K.C), W(g, R), X = new $C(Dg(), h.J.console, K.C), W(g, X)), ee(g), C(ob, Q.m.promise, 5);
                        ee(g);
                        return C(ob, z.m.promise, 3);
                    case 5:
                        return ua = f, ja = H, xa = ja.U, C(ob, K.C.promise, 6);
                    case 6:
                        ua.storage = xa.call(ja, ob.l);
                    case 3:
                        return nb = f, hb = H, vb = hb.U, C(ob, t.m.promise, 7);
                    case 7:
                        return nb.da = vb.call(hb, ob.l), ob.return(f)
                }
            })
        })
    };
    var kD = new D.Map,
        lD = function(a, b) {
            b = void 0 === b ? kD : b;
            Y.call(this, 834);
            this.X = a;
            this.m = b;
            this.o = this.l();
            this.B = D.Promise.all(this.X.map(this.F, this))
        };
    _.N(lD, Y);
    lD.prototype.j = function() {
        return A(this, function b() {
            var c = this,
                d;
            return B(b, function(e) {
                if (1 == e.j) return C(e, c.B, 2);
                d = e.l;
                c.o.j(d.filter(function(f) {
                    return null != f && !f.A
                }));
                gi(e)
            })
        })
    };
    lD.prototype.F = function(a) {
        return A(this, function c() {
            var d = this,
                e, f, g, h;
            return B(c, function(k) {
                if (1 == k.j) {
                    e = d;
                    f = 1E3 * _.lb(Ro);
                    if (a.A) return k.return(null);
                    if (0 >= f) return k.return(a);
                    d.m.has(a) || (d.m.set(a, Cg(f, a)), _.Bg(a, function() {
                        return void e.m.delete(a)
                    }));
                    g = (0, H.U)(d.m.get(a));
                    return C(k, g(), 2)
                }
                h = k.l;
                if (d.A) return k.return(null);
                if (h) return k.return(a);
                Cc().M(ns(a.getAdUnitPath()));
                return k.return(null)
            })
        })
    };
    /*

    Math.uuid.js (v1.4)
    http://www.broofa.com
    mailto:robert@broofa.com
    Copyright (c) 2010 Robert Kieffer
    Dual licensed under the MIT and GPL licenses.
    */
    var mD = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    var nD = function(a, b) {
        (/^https:/.test(b) || _.Xb(257)) && Dj(a, new lj(b, kj), "webbundle")
    };
    var oD = function(a, b, c, d, e, f, g, h, k, l) {
        Y.call(this, 866);
        this.O = a;
        this.L = b;
        this.I = c;
        this.o = d;
        this.B = h;
        this.F = k;
        this.withCredentials = l;
        this.m = Gt(this);
        this.Y = U(this, e);
        this.K = V(this, f);
        this.W = U(this, g)
    };
    _.N(oD, Y);
    oD.prototype.j = function() {
        return A(this, function b() {
            var c = this,
                d, e, f, g, h, k, l, m, n, p, u, t;
            return B(b, function(y) {
                if (1 == y.j) {
                    if ("wbn" !== c.O) return y.return();
                    d = c.W.value;
                    if (!d.length) return c.m.notify(), y.return();
                    e = _.wl(document, "LINK");
                    nD(e, c.Y.value);
                    (0, H.U)(e.resources).add(Ui(c.o));
                    e.crossOrigin = c.withCredentials ? "use-credentials" : "anonymous";
                    f = document.createElement("script");
                    wd(f, c.o);
                    g = (0, H.U)(document.head);
                    g.appendChild(e);
                    g.appendChild(f);
                    h = Eg(c.I);
                    c.m.notify();
                    (0, H.U)(c.K.value)();
                    return C(y, h, 2)
                }
                k = y.l;
                l = k.Wb;
                m = k.lc;
                $p(Kb.N(), "4", (0, H.U)(I(c.L.P[d[0].j], 20)));
                if (l.length !== m.length) throw Error("Received " + l.length + " ad URLs, but " + m.length + " metadatas");
                for (n = 0; n < l.length; n++) p = l[n], u = m[n], p && (0, H.U)(e.resources).add(p), c.B(d[n], u, {
                    kind: 1,
                    url: p
                }, n === d.length - 1);
                for (t = l.length; t < d.length; ++t) c.F(d[t], t === d.length - 1);
                gi(y)
            })
        })
    };
    var pD = function(a, b, c, d, e, f, g) {
        Y.call(this, 810);
        this.o = a;
        this.B = b;
        this.I = c;
        this.L = d;
        this.F = e;
        this.da = f;
        this.J = g;
        this.m = this.l()
    };
    _.N(pD, Y);
    pD.prototype.j = function() {
        var a = this,
            b = this.B;
        !this.I && 1 < this.B.length && (b = [b[0]]);
        b = b.filter(function(c) {
            var d = a.L.P[c.j];
            if (fd(a.J) && 4 == kd(d)) {
                Cc().M(gs("googletag.enums.OutOfPageFormat.REWARDED", String(c.getAdUnitPath())));
                var e = !0
            } else e = !1;
            return !e && !md(c, d, a.J, a.da)
        });
        30 < b.length && (this.F.M(cs("30", String(b.length), String(b.length - 30))), b = b.slice(0, 30));
        sa(this.o.X, b) || (this.o.X = b.slice());
        this.m.j(b)
    };
    var qD = function(a) {
        Y.call(this, 826);
        this.R = a;
        this.C = this.l()
    };
    _.N(qD, Y);
    qD.prototype.j = function() {
        return A(this, function b() {
            var c = this,
                d, e;
            return B(b, function(f) {
                if (1 == f.j) return d = c.C, e = d.l, C(f, c.R.l, 2);
                e.call(d, f.l);
                gi(f)
            })
        })
    };
    qD.prototype.G = function() {
        zt(this.C)
    };
    var rD = function(a, b, c, d, e, f, g, h, k, l, m, n, p) {
        Y.call(this, 785, _.lb(bp));
        this.B = a;
        this.Y = b;
        this.R = c;
        this.W = d;
        this.da = e;
        this.L = f;
        this.$ = g;
        this.aa = h;
        this.O = k;
        this.F = l;
        this.m = this.l();
        this.o = Ht(this, l);
        this.I = V(this, m);
        this.K = Ht(this, k);
        this.ca = Ht(this, n);
        vt(this.D, p, !0)
    };
    _.N(rD, Y);
    rD.prototype.j = function() {
        var a;
        return A(this, function c() {
            var d = this,
                e, f, g;
            return B(c, function(h) {
                if (1 == h.j) {
                    e = d;
                    if (null === (a = d.I.value) || void 0 === a || !a.length) return d.m.j(""), h.return();
                    f = !_.v(If);
                    ZA(d.B, Bb(), d.$, d.aa, f ? Zy() : "", f ? $y() : "", f ? az() : "", null === d.K.value ? "0" : d.K.value, d.ca.value);
                    d.o.value && (d.R.mb = d.o.value);
                    g = new vB(d.I.value.slice(), d.Y, d.R, d.W, d.B, d.da, d.L, !1);
                    d.m.j(Lb(yB(g)));
                    return C(h, d.O.promise, 2)
                }
                if (4 != h.j) {
                    if (d.A) return h.return();
                    mc("gpt_paw", function(k) {
                        var l;
                        Zb(k);
                        q(k, "sig", null !== (l = e.O.o) && void 0 !== l ? l : -1);
                        q(k, "req", e.ba)
                    }, {
                        ta: _.lb(Wn)
                    });
                    d.o.value ? h = C(h, d.F.promise, 4) : (h.j = 0, h = void 0);
                    return h
                }
                mc("gpt_etu", function(k) {
                    var l;
                    Zb(k);
                    q(k, "sig", null !== (l = e.F.o) && void 0 !== l ? l : -1);
                    q(k, "req", e.ba)
                });
                gi(h)
            })
        })
    };
    var sD = function(a, b, c, d, e, f) {
        Y.call(this, 798);
        this.R = a;
        this.L = b;
        this.o = c;
        this.B = d;
        this.m = this.l();
        this.I = U(this, e);
        this.F = U(this, f)
    };
    _.N(sD, Y);
    sD.prototype.j = function() {
        for (var a = this, b = new D.Map, c = _.G(this.F.value), d = c.next(); !d.done; d = c.next()) {
            d = d.value;
            var e = Jv(this.L.T) ? tD(this, d) : function() {
                return a.I.value
            };
            b.set(d, e)
        }
        this.m.j(b)
    };
    var tD = function(a, b) {
        var c = Bb();
        return Wc(function() {
            var d = new YA;
            d.j = "ldjh";
            d.o = "fifs";
            d.Ca = 1;
            d.X = [b];
            d.m = c;
            d.A = a.B;
            var e = new gt;
            d = new vB([b], _.v(Ln), a.R, a.o, d, e, a.L, !0);
            return Lb(yB(d))
        })
    };
    var uD = function(a) {
        Y.call(this, 802);
        this.J = a;
        this.m = this.l()
    };
    _.N(uD, Y);
    uD.prototype.j = function() {
        var a = this;
        if (_.v(Un)) {
            var b = function(d) {
                Ub(a.id, d);
                a.m.j("0")
            };
            try {
                var c = we(this.J);
                c ? c.then(function(d) {
                    d.length > _.lb(Vn) ? b(Error("ML:" + d.length)) : a.m.j(d)
                }).catch(b) : this.m.j("")
            } catch (d) {
                b(d)
            }
        } else this.m.j("")
    };
    var vD = function(a, b, c, d) {
        Y.call(this, 847);
        this.R = a;
        this.B = b;
        this.o = c;
        this.m = this.l();
        this.F = U(this, d)
    };
    _.N(vD, Y);
    vD.prototype.j = function() {
        var a = this.F.value;
        if (a.length) {
            for (var b = _.G(a), c = b.next(); !c.done; c = b.next()) mu(this.R, c.value);
            this.o ? zt(this.m) : this.B ? (b = Ib(a[0].getAdUnitPath()), a = wD(a, b), this.m.j(a)) : (a = a.map(function(d) {
                return {
                    Ea: Ib(d.getAdUnitPath()),
                    X: [d]
                }
            }), this.m.j(a))
        } else zt(this.m)
    };
    var wD = function(a, b) {
        var c = [];
        a = ta(a, function(f) {
            return Ib(f.getAdUnitPath())
        });
        a = _.G(_.r(Object, "entries").call(Object, a));
        for (var d = a.next(); !d.done; d = a.next()) {
            var e = _.G(d.value);
            d = e.next().value;
            e = e.next().value;
            d === b ? c.unshift({
                Ea: d,
                X: e
            }) : c.push({
                Ea: d,
                X: e
            })
        }
        return c
    };
    var xD = function(a, b) {
        Y.call(this, 845);
        this.P = a;
        this.m = this.l();
        this.o = this.l();
        this.B = U(this, b)
    };
    _.N(xD, Y);
    xD.prototype.j = function() {
        var a = this,
            b = function(d) {
                d = a.P[d.j];
                return 0 != Yc(d).length || of (d, 16)
            },
            c = this.B.value;
        this.m.j(c.filter(b));
        this.o.j(c.filter(Ei(b)))
    };
    var yD = function(a, b, c, d) {
        Y.call(this, 864);
        this.R = a;
        this.L = b;
        this.Z = c;
        this.m = Gt(this);
        this.o = U(this, d)
    };
    _.N(yD, Y);
    yD.prototype.j = function() {
        for (var a = _.G(this.o.value), b = a.next(); !b.done; b = a.next())
            if (b = b.value, _.hu(this.R, b)) {
                var c = this.L,
                    d = c.T;
                c = c.P[b.j];
                var e = void 0,
                    f = void 0;
                (_.v(to) ? 0 : null !== (e = null !== (f = x(c, 11)) && void 0 !== f ? f : x(d, 10)) && void 0 !== e && e) && bg(b, this.Z, c, d);
                mu(this.R, b);
                f = e = void 0;
                (_.v(so) ? 0 : null !== (e = null !== (f = x(c, 10)) && void 0 !== f ? f : x(d, 11)) && void 0 !== e && e) && bg(b, this.Z, c, d)
            }
        this.m.notify()
    };
    var zD = function(a, b, c, d, e) {
        Y.call(this, 867);
        this.L = a;
        this.o = b;
        It(this, c);
        this.B = U(this, d);
        this.m = U(this, e)
    };
    _.N(zD, Y);
    zD.prototype.j = function() {
        var a;
        return A(this, function c() {
            var d = this,
                e, f, g, h, k;
            return B(c, function(l) {
                switch (l.j) {
                    case 1:
                        e = _.G(d.m.value), f = e.next();
                    case 2:
                        if (f.done) {
                            l.j = 0;
                            break
                        }
                        g = f.value;
                        h = (0, H.U)(I(d.L.P[g.j], 20));
                        k = null !== (a = d.B.value.get(g)) && void 0 !== a ? a : function() {
                            return ""
                        };
                        return C(l, g.dispatchEvent(Uq, d.id, {
                            Dc: k,
                            Rc: h
                        }), 5);
                    case 5:
                        return C(l, d.o.dispatchEvent("slotRequested", 705, new rw(g, "publisher_ads")), 3);
                    case 3:
                        f = e.next(), l.j = 2
                }
            })
        })
    };
    var AD = function(a, b, c) {
        Y.call(this, 905);
        this.L = a;
        It(this, b);
        this.m = U(this, c)
    };
    _.N(AD, Y);
    AD.prototype.j = function() {
        var a;
        return A(this, function c() {
            var d = this,
                e, f, g, h;
            return B(c, function(k) {
                switch (k.j) {
                    case 1:
                        if (!_.v(jo)) return k.return();
                        e = _.G(d.m.value);
                        f = e.next();
                    case 2:
                        if (f.done) {
                            k.j = 0;
                            break
                        }
                        g = f.value;
                        h = null === (a = d.L.P[g.j]) || void 0 === a ? void 0 : kd(a);
                        switch (h) {
                            case 2:
                            case 3:
                            case 5:
                                k.j = 5;
                                return
                        }
                        k.j = 3;
                        break;
                    case 5:
                        return C(k, _.uC.N().load(_.BC), 7);
                    case 7:
                        return k.return();
                    case 3:
                        f = e.next(), k.j = 2
                }
            })
        })
    };
    var BD = function(a, b, c, d, e, f, g) {
        Y.call(this, 833);
        this.B = c;
        this.o = d;
        this.da = e;
        this.m = f;
        this.window = g;
        It(this, a)
    };
    _.N(BD, Y);
    BD.prototype.j = function() {
        var a, b = !_.v(Yo) && !(null === (a = this.B) || void 0 === a ? 0 : x(a, 4));
        QC(this.m, this.window, Nv(this.o, this.da));
        b && QC(this.m, this.window)
    };
    var CD = function(a, b, c, d) {
        _.Kq.call(this);
        this.X = a;
        this.L = b;
        this.G = c;
        this.D = d;
        this.m = "";
        this.j = -1;
        this.state = 1;
        this.l = ""
    };
    _.N(CD, _.Kq);
    var DD = function(a, b) {
            a.state = 4;
            Vb(289, b, !0)
        },
        ED = function(a) {
            return "(" + [a.state, a.l.length, a.X.length].join("|") + ")"
        };
    var FD = function(a, b, c, d, e, f, g, h, k) {
        h = void 0 === h ? !0 : h;
        Y.call(this, 788, _.lb(Mp));
        this.W = a;
        this.L = b;
        this.I = f;
        this.K = g;
        this.withCredentials = h;
        this.o = Gt(this);
        this.F = 0;
        this.B = !1;
        this.m = null !== k && void 0 !== k ? k : new XMLHttpRequest;
        this.$ = U(this, c);
        this.O = V(this, d);
        this.Y = U(this, e)
    };
    _.N(FD, Y);
    FD.prototype.j = function() {
        var a = this,
            b = this.Y.value,
            c = new CD(b, this.L, this.I, this.K);
        _.Lq(this, c);
        "ldjh" === this.W && (b.length ? (this.m.open("GET", this.$.value), this.m.withCredentials = this.withCredentials, JA(this.m), this.m.onreadystatechange = function() {
            GD(a, c, !1)
        }, this.m.onload = function() {
            GD(a, c, !0)
        }, this.m.onerror = function() {
            a.A || DD(c, Error("XHR error"))
        }, this.m.send(), this.o.notify(), (0, H.U)(this.O.value)()) : this.o.notify())
    };
    var GD = function(a, b, c) {
        if (!a.A) try {
            if (3 === a.m.readyState || 4 === a.m.readyState)
                if (300 <= a.m.status || 200 > a.m.status && _.v(Yn)) a.B || a.A || DD(b, Error("xhr_err-" + a.m.status)), a.B = !0;
                else {
                    var d = a.m.responseText.substr(a.F);
                    if (d && !b.A && 0 !== d.length)
                        if (1 !== b.state && 2 !== b.state) DD(b, Error("state err: " + ED(b)));
                        else {
                            b.l && (d = b.l + d);
                            var e = 0,
                                f = !1;
                            do {
                                var g = d.indexOf("\n", e);
                                f = -1 !== g;
                                if (!f) break;
                                var h = b,
                                    k = d.substr(e, g - e);
                                if (1 === h.state) h.m = k, h.j + 1 >= h.X.length ? DD(h, Error("too many responses for " + h.X.length + " slots: " + ED(h))) : (++h.j, h.state = 2);
                                else {
                                    var l = h;
                                    0 === l.j && $p(Kb.N(), "4", (0, H.U)(I(l.L.P[l.X[l.j].j], 20)));
                                    try {
                                        var m = {
                                            kind: 0,
                                            ra: rm(k)
                                        };
                                        h.G(h.X[h.j], h.m, m, h.j >= h.X.length - 1);
                                        h.m = ""
                                    } catch (p) {}
                                    h.state = 1
                                }
                                e = g + 1
                            } while (4 !== b.state && f && e < d.length);
                            b.l = d.substr(e)
                        }
                    a.F = a.m.responseText.length;
                    if (c && 4 === a.m.readyState && !b.A)
                        if (1 !== b.state || b.l) DD(b, Error("state err at EOS: " + ED(b)));
                        else {
                            b.state = 3;
                            for (var n = b.j + 1; n < b.X.length; ++n) b.D(b.X[n], n === b.X.length - 1)
                        }
                }
        } catch (p) {
            p instanceof Error && !a.A && DD(b, p)
        }
    };
    var ID = function(a, b, c, d, e) {
            Y.call(this, 865);
            this.L = a;
            this.B = b;
            this.F = c;
            Gt(this);
            this.m = this.l();
            It(this, d);
            this.o = U(this, e);
            HD || (HD = _.Fi(function() {
                Xv("gpt-first-ad-request")
            }))
        },
        HD;
    _.N(ID, Y);
    ID.prototype.j = function() {
        var a = this.o.value;
        if (a.length) {
            $u(a);
            var b = window,
                c = new Jh;
            var d = new Kh;
            d = Ab(d, 1, this.F, "");
            Ce(b, Hh(Ih(Fb(Db(c, 5, d), 4, 1), 2), this.B));
            $p(Kb.N(), "3", (0, H.U)(I(this.L.P[a[0].j], 20)));
            this.m.j(HD)
        } else zt(this.m)
    };
    var JD = function(a) {
        Y.call(this, 820);
        this.J = a;
        this.C = this.l()
    };
    _.N(JD, Y);
    JD.prototype.j = function() {
        return A(this, function b() {
            var c = this,
                d, e, f;
            return B(b, function(g) {
                if (1 == g.j) return _.v(cp) ? C(g, Ge(c.J), 2) : (c.C.j(""), g.return());
                d = g.l;
                e = d.mb;
                f = d.status;
                e || mc("gpt_etu", function(h) {
                    Zb(h);
                    q(h, "rsn", f)
                });
                c.C.j(null !== e && void 0 !== e ? e : "");
                gi(g)
            })
        })
    };
    var KD = function(a) {
        Y.call(this, 858);
        this.m = a;
        this.C = Gt(this)
    };
    _.N(KD, Y);
    KD.prototype.j = function() {
        return A(this, function b() {
            var c, d = this,
                e, f;
            return B(b, function(g) {
                switch (g.j) {
                    case 1:
                        g.H = 2;
                        if (_.v(Kp)) return e = new FA(function() {}, null, d.m), C(g, OA(e), 7);
                        c = _.Xb(258);
                        return C(g, c, 6);
                    case 6:
                        d.C.notify();
                        g.j = 5;
                        break;
                    case 7:
                        d.C.notify();
                    case 5:
                        Ad(g, 0);
                        break;
                    case 2:
                        f = Bd(g), f instanceof Error && d.V(f), d.C.notify(), gi(g)
                }
            })
        })
    };
    var LD = function(a) {
        _.Kq.call(this);
        this.j = a;
        var b = a.size;
        this.l = "height" === a.td ? "fluid" : [b.width, b.height]
    };
    _.N(LD, _.Kq);
    LD.prototype.render = function() {
        var a = this.j,
            b = a.slotId,
            c = a.L,
            d = a.Z,
            e = a.size,
            f = a.sa,
            g = a.vb,
            h = a.Fb,
            k = a.isBackfill;
        a = a.Xc;
        g && ye(g, _.ul(d), null !== h && void 0 !== h ? h : "", !1);
        $p(Kb.N(), "5", (0, H.U)(I(c.P[b.j], 20)));
        b.dispatchEvent(Tq, 801, {
            ac: 0 === f.kind ? f.ra : "",
            isBackfill: !!k
        });
        c = this.D();
        a && c && c.setAttribute("data-google-container-id", a);
        b.dispatchEvent(Vq, 825, {
            size: e
        });
        return c
    };
    LD.prototype.loaded = function(a) {
        var b = this.j,
            c = b.slotId,
            d = b.ia;
        b = b.L;
        c.dispatchEvent(Yq, 844, void 0);
        a && a.setAttribute("data-load-complete", !0);
        d.dispatchEvent("slotOnload", 710, new kw(c, "publisher_ads"));
        $p(Kb.N(), "6", (0, H.U)(I(b.P[c.j], 20)))
    };
    LD.prototype.H = function() {
        var a, b = this.j,
            c = b.slotId;
        b = b.Z;
        _.Kq.prototype.H.call(this);
        null === (a = Vc(c, b)) || void 0 === a ? void 0 : a.removeAttribute("data-google-query-id")
    };
    LD.prototype.G = function(a, b) {
        var c = this,
            d = this.j,
            e = d.sa,
            f = d.Fb,
            g = d.nb,
            h = d.eb,
            k = d.Sa;
        e = 0 === e.kind ? e.ra : "";
        var l = lB(d.$b, Sv(d.slotId), b ? null : e, this.l, function() {
            c.loaded((0, H.U)(l.j), null !== f && void 0 !== f ? f : "")
        }, a, d.Rb || null, d.Sc || null, !!d.isBackfill, !!d.xd, null !== k && void 0 !== k ? k : null, (0, H.U)(d.L.Sb), (0, H.U)(d.Xc), null !== g && void 0 !== g ? g : "", b, null !== h && void 0 !== h ? h : void 0);
        _.Bg(this, function() {
            100 != l.status && (2 == l.fa && (Zz(l.A), l.fa = 0), window.clearTimeout(l.V), l.V = -1, l.B = 3, l.l && (l.l.wa(), l.l = null), l.o && l.j ? l.o.unobserve(l.j) : (_.Yd(window, "resize", l.I), _.Yd(window, "scroll", l.I)), l.m && l.j && l.m == _.yl(l.j) && l.m.removeChild(l.j), l.j = null, l.m = null, l.o && (l.o.disconnect(), l.o = null), l.status = 100)
        });
        return l
    };
    var Ig = function() {
        LD.apply(this, arguments)
    };
    _.N(Ig, LD);
    Ig.prototype.D = function() {
        var a = this.j,
            b = a.L,
            c = b.T;
        a = b.P[a.slotId.j];
        b = new Bu;
        c = hv([b, c.ya(), a && a.ya()]);
        c = LD.prototype.G.call(this, c);
        return (0, H.U)(c.j)
    };
    Ig.prototype.loaded = function(a, b) {
        var c = this.j,
            d = c.slotId;
        c = c.L;
        LD.prototype.loaded.call(this, a, b);
        rC(d, c.P[d.j], b)
    };
    Ig.prototype.m = function() {
        return !1
    };
    var MD = function() {
        LD.apply(this, arguments)
    };
    _.N(MD, LD);
    var ND = function(a, b) {
            var c = Sv(a.j.slotId),
                d = a.j.Z;
            a = qg;
            d = void 0 === d ? document : d;
            d = d.createElement("IFRAME");
            d.id = c;
            d.title = a;
            d.name = c;
            Array.isArray(b) ? null != b[0] && null != b[1] && (d.width = String(b[0]), d.height = String(b[1])) : (d.width = "100%", d.height = "0");
            d.allowTransparency = "true";
            d.scrolling = "no";
            d.marginWidth = "0";
            d.marginHeight = "0";
            d.frameBorder = "0";
            d.style.border = "0";
            d.style.verticalAlign = "bottom";
            return d
        },
        OD = function(a, b, c, d, e) {
            "string" !== typeof c && (b.width = String(c[0]), b.height = String(c[1]));
            var f = kc(774, function() {
                a.loaded(b, e);
                _.Yd(b, "load", f)
            });
            _.xd(b, "load", f);
            _.Bg(a, function() {
                return _.Yd(b, "load", f)
            });
            d.appendChild(b)
        };
    var Hg = function() {
        MD.apply(this, arguments)
    };
    _.N(Hg, MD);
    Hg.prototype.D = function() {
        var a = this.j,
            b = a.sa,
            c = a.$b,
            d = a.Sc,
            e = a.Fb;
        a = a.nb;
        var f = ND(this, this.l);
        if (null === d || void 0 === d ? 0 : d.length)
            if (_.Vj) {
                d = _.G(d);
                for (var g = d.next(); !g.done; g = d.next()) f.sandbox.add(g.value)
            } else f.sandbox.add.apply(f.sandbox, _.ec(d));
        a && (f.allow = a); - 1 == oj.indexOf("iPhone") && (f.srcdoc = _.yj(zj));
        OD(this, f, this.l, c, null !== e && void 0 !== e ? e : "");
        mB(f, b.ra, function() {});
        return f
    };
    Hg.prototype.m = function() {
        return !0
    };
    var Gg = function() {
        MD.apply(this, arguments)
    };
    _.N(Gg, MD);
    Gg.prototype.D = function() {
        var a = this.j,
            b = a.sa,
            c = a.$b,
            d = a.Fb,
            e = a.nb;
        a = ND(this, this.l);
        e && (a.allow = e);
        b = b.Zd;
        /^https:/.test(b) && (b = Vi(b), a.src = b instanceof cb ? bb(b) : Ui(b), a.sandbox = kA.join(" "));
        OD(this, a, this.l, c, null !== d && void 0 !== d ? d : "");
        return a
    };
    Gg.prototype.m = function() {
        return !1
    };
    var Fg = function() {
        MD.apply(this, arguments)
    };
    _.N(Fg, MD);
    Fg.prototype.D = function() {
        var a = this.j,
            b = a.L,
            c = a.sa;
        a = b.P[a.slotId.j];
        b = hv([b.T.ya(), a && a.ya()]);
        a = ND(this, this.l);
        c = c.url;
        /^urn:uuid:[0-9a-f-]*$/.test(c) && (c = Vi(c), a.src = c instanceof cb ? bb(c) : Ui(c));
        MD.prototype.G.call(this, b, a);
        return a
    };
    Fg.prototype.m = function() {
        return !1
    };
    var PD = function(a, b, c, d, e, f, g, h, k, l, m, n, p, u, t, y, z, K, Q, R, X, ua, ja, xa, nb, hb) {
        Y.call(this, 680);
        this.slotId = a;
        this.R = b;
        this.L = c;
        this.ia = d;
        this.J = e;
        this.m = this.l();
        this.o = this.l();
        this.F = U(this, f);
        It(this, h);
        this.aa = U(this, k);
        this.B = U(this, l);
        this.$ = U(this, m);
        this.Y = U(this, n);
        It(this, X);
        this.I = V(this, p);
        this.K = V(this, u);
        this.O = V(this, t);
        this.na = V(this, y);
        this.W = V(this, z);
        this.ja = V(this, K);
        this.oa = V(this, Q);
        this.ca = V(this, R);
        this.ma = V(this, g);
        It(this, ua);
        It(this, ja);
        this.ga = U(this, xa);
        It(this, nb);
        this.la = V(this, hb)
    };
    _.N(PD, Y);
    PD.prototype.j = function() {
        var a = this,
            b = this.I.value,
            c = this.F.value;
        if (0 === c.kind) {
            var d = null === b || void 0 === b ? void 0 : Ma(b.getHtml());
            d && (c.ra = d);
            if (null == c.ra) throw Error("invalid html");
        }
        b = Jg({
            id: this.Y.value,
            Z: document,
            slotId: this.slotId,
            R: this.R,
            L: this.L,
            ia: this.ia,
            size: this.$.value,
            sa: c,
            vb: this.aa.value,
            $b: this.B.value,
            Fb: this.K.value,
            td: this.O.value,
            Sc: this.na.value,
            Sa: null === b || void 0 === b ? void 0 : I(b, 2),
            isBackfill: this.W.value,
            xd: this.ja.value,
            Xc: this.oa.value,
            gf: this.ca.value,
            Rb: this.ma.value,
            nb: this.ga.value,
            eb: this.la.value
        });
        _.Lq(this, b);
        var e = b.render();
        rv(this, this.id, this.J, "message", function(f) {
            e.contentWindow === f.source && a.slotId.dispatchEvent(og, 824, f)
        });
        this.m.j(e);
        this.o.j(b.m())
    };
    var RD = function(a, b, c, d, e) {
        Y.call(this, 863);
        this.I = b;
        this.m = c;
        this.Ra = Number(a);
        this.o = U(this, d);
        this.B = U(this, e);
        this.F = QD(this)
    };
    _.N(RD, Y);
    var QD = function(a) {
        return A(a, function c() {
            var d = this,
                e;
            return B(c, function(f) {
                e = d;
                return f.return(new D.Promise(function(g) {
                    try {
                        rv(e, e.id, e.m, "message", function(h) {
                            var k;
                            "asmreq" === (null === (k = h.data) || void 0 === k ? void 0 : k.type) && Rg(Eh(nz, h.data.payload), 1) === e.Ra && g(h)
                        })
                    } catch (h) {}
                }))
            })
        })
    };
    RD.prototype.j = function() {
        return A(this, function b() {
            var c = this,
                d, e, f, g, h, k, l;
            return B(b, function(m) {
                if (1 == m.j) return d = _.v(Do) ? c.m : c.I, e = Kg(d), f = c.o.value, g = c.B.value, C(m, c.F, 2);
                h = m.l;
                var n = Kg(d);
                var p = f.getBoundingClientRect();
                var u = Fe(d) ? Wm(f, d) : {
                        x: 0,
                        y: 0
                    },
                    t = u.x;
                u = u.y;
                p = new _.Am(u, t + p.right, u + p.bottom, t);
                t = new pz;
                t = E(t, 1, p.top);
                t = E(t, 3, p.bottom);
                t = E(t, 2, p.left);
                p = E(t, 4, p.right);
                t = new oz;
                t = E(t, 1, c.Ra);
                t = E(t, 2, !g);
                p = Db(t, 3, p);
                p = E(p, 4, e);
                k = E(p, 5, n);
                l = {
                    type: "asmres",
                    payload: al(k)
                };
                h.ports[0].postMessage(l);
                gi(m)
            })
        })
    };
    var SD = function(a, b, c, d, e, f, g, h, k, l, m) {
        Y.call(this, 699);
        this.Z = a;
        this.slotId = b;
        this.ka = c;
        this.Za = d;
        this.C = Gt(this);
        this.F = V(this, e);
        this.K = U(this, f);
        this.o = U(this, g);
        this.I = U(this, h);
        this.m = V(this, k);
        this.O = U(this, l);
        this.B = U(this, m)
    };
    _.N(SD, Y);
    SD.prototype.j = function() {
        var a, b = this.K.value,
            c = this.o.value;
        c.style.width = "";
        c.style.height = "";
        if ("height" !== this.F.value) {
            var d = null !== (a = this.m.value) && void 0 !== a ? a : 0,
                e = this.I.value,
                f = this.O.value,
                g = this.B.value,
                h = !1;
            switch (d) {
                case 1:
                case 2:
                    h = this.Z;
                    var k = this.slotId,
                        l = this.ka,
                        m = this.Za;
                    var n = e.width,
                        p = e.height,
                        u = 0;
                    var t = 0;
                    var y = Yc(l);
                    y = _.G(y);
                    for (var z = y.next(); !z.done; z = y.next())
                        if (z = z.value, Array.isArray(z)) {
                            var K = _.G(z);
                            z = K.next().value;
                            K = K.next().value;
                            u < z && (u = z);
                            t < K && (t = K)
                        }
                    t = [u, t];
                    u = t[0] < n;
                    p = t[1] < p;
                    u || p ? (t = n + "px", y = {
                        "max-height": "none",
                        "max-width": t,
                        padding: "0px",
                        width: t
                    }, p && (y.height = "auto"), kC(c, b, y), c = {}, u && n > parseInt(f.width, 10) && (c.width = t, c["max-width"] = t), p && (c.height = "auto", c["max-height"] = "none"), Kl(c) ? c = !1 : (c["padding-" + ("ltr" == f.direction ? "left" : "right")] = "0px", _.gm(b, c), c = !0)) : c = !1;
                    b: switch (p = e.width, n = h.defaultView || h.parentWindow || _.F, d) {
                        case 2:
                            b = lC(b, n, p, f, m);
                            break b;
                        case 1:
                            if (f = b.parentElement)
                                if (m = Iv(f)) {
                                    K = m.width;
                                    m = Vc(k, n.document);
                                    u = Xc(m, n);
                                    t = u.position;
                                    var Q = parseInt(u.width, 10) || 0;
                                    y = Xc(f, n);
                                    z = "rtl" == y.direction ? "Right" : "Left";
                                    m = z.toLowerCase();
                                    n = "absolute" == t ? 0 : parseInt(y["padding" + z], 10);
                                    y = parseInt(y["border" + z + "Width"], 10);
                                    var R = km(u);
                                    z = (R && R[4] || 0) * ("Right" == z ? -1 : 1);
                                    p = Math.max(Math.round((K - Math.max(Q, p)) / 2), 0);
                                    K = {};
                                    Q = R && R[3] || 1;
                                    if (1 != (R && R[0] || 1) || 1 != Q) R[0] = 1, R[3] = 1, K.transform = "matrix(" + R.join(",") + ")";
                                    R = 0;
                                    switch (t) {
                                        case "fixed":
                                            if (_.v(An)) {
                                                var X, ua = null != (X = parseFloat(u[m])) ? X : 0,
                                                    ja;
                                                X = null != (ja = f.getBoundingClientRect().left) ? ja : 0;
                                                R = ua - X;
                                                break
                                            }
                                        case "relative":
                                            R = null != (ua = parseFloat(u[m])) ? ua : 0;
                                            break;
                                        case "absolute":
                                            K[m] = "0"
                                    }
                                    K["margin-" + m] = p - n - y - R - z + "px";
                                    _.gm(b, K);
                                    b = !0
                                } else b = !1;
                            else b = !1;
                            break b;
                        default:
                            b = !1
                    }
                    c || b ? (nC(h, k, l, d, e.width, e.height, "gpt_slotexp", g), h = !0) : h = !1;
                    break;
                case 3:
                    d = this.Z, h = this.slotId, k = this.ka, X = this.Za, l = e.width, ja = e.height, ja >= (parseInt(f.height, 10) || 0) || "none" == f.display || "hidden" == f.visibility || !X || -12245933 === X.width || b.getBoundingClientRect().bottom <= X.height ? h = !1 : (X = {
                        height: ja + "px"
                    }, kC(c, b, X), _.gm(b, X), nC(d, h, k, 3, l, ja, "gpt_slotred", g), h = !0)
            }!h && _.v(yn) && nC(this.Z, this.slotId, this.ka, 0, e.width, e.height, "gpt_pgbrk", g)
        }
        this.C.notify()
    };
    var TD = function(a, b, c, d, e, f) {
        Y.call(this, 686);
        this.J = a;
        this.slotId = b;
        this.o = c;
        this.Ib = f;
        this.B = V(this, d);
        this.m = U(this, e)
    };
    _.N(TD, Y);
    TD.prototype.j = function() {
        var a, b;
        return A(this, function d() {
            var e = this,
                f, g, h, k, l, m, n, p, u, t, y;
            return B(d, function(z) {
                if (1 == z.j) {
                    f = e.B.value;
                    g = null === f || void 0 === f ? void 0 : I(f, 1);
                    h = null === f || void 0 === f ? void 0 : Uk(f, 2, 1);
                    k = null !== (a = null === f || void 0 === f ? void 0 : I(f, 3)) && void 0 !== a ? a : 0;
                    l = null !== (b = null === f || void 0 === f ? void 0 : x(f, 5)) && void 0 !== b ? b : !1;
                    if (!g || !h) return z.return();
                    m = new ue;
                    n = m.resolve;
                    p = m.promise;
                    u = e.m.value;
                    t = UA({
                        J: e.J,
                        element: u,
                        Xd: 0 === e.o,
                        Vc: k,
                        Yd: g,
                        Yb: function() {
                            return void n(!0)
                        },
                        options: {
                            threshold: h
                        },
                        Kc: l,
                        qd: function(K) {
                            Vb(615, K, !0)
                        },
                        Ib: e.Ib
                    });
                    _.Bg(e, function() {
                        t();
                        n(!1)
                    });
                    return C(z, p, 2)
                }(y = z.l) ? z = C(z, e.slotId.dispatchEvent(Qq, 614, void 0), 0): (z.j = 0, z = void 0);
                return z
            })
        })
    };
    var UD = function(a, b, c, d, e) {
        Y.call(this, 856);
        this.ka = a;
        this.F = this.l();
        this.m = this.l();
        this.o = this.l();
        this.W = this.l();
        this.B = this.l();
        this.K = V(this, b);
        this.O = V(this, c);
        this.I = V(this, d);
        this.Y = V(this, e)
    };
    _.N(UD, Y);
    var VD = function(a) {
        a.F.l(a.K.value);
        a.m.l(a.O.value);
        a.o.l(a.I.value);
        zt(a.W);
        zt(a.B)
    };
    UD.prototype.j = function() {
        var a, b, c, d, e, f, g, h = this.Y.value,
            k = this.I.value;
        if (_.v(Bn) && h) {
            var l = null !== (b = null === (a = (J = L(this.ka, Qe, 21), _.r(J, "find")).call(J, function(t) {
                return I(t, 1) === h
            })) || void 0 === a ? void 0 : M(a, Bc, 2)) && void 0 !== b ? b : null;
            if (!l) throw Error("Could not find bid with id: " + h);
            this.W.j(l);
            if (1 !== I(l, 11)) VD(this);
            else {
                var m = I(l, 7),
                    n = I(l, 12),
                    p = null !== (d = null === (c = M(l, Nc, 5)) || void 0 === c ? void 0 : I(c, 2)) && void 0 !== d ? d : this.K.value,
                    u = null !== (f = null === (e = M(l, Nc, 5)) || void 0 === e ? void 0 : I(e, 1)) && void 0 !== f ? f : this.O.value;
                if (!m && !n) throw Error("Could not find ad to render for bid id: " + h);
                l = null !== (g = I(l, 2)) && void 0 !== g ? g : 0;
                m = {
                    ad: Lg(m, l),
                    adUrl: Lg(n, l),
                    adId: h,
                    width: u,
                    height: p
                };
                m = btoa(JSON.stringify(m));
                0 === (null === k || void 0 === k ? void 0 : k.kind) ? (this.o.j({
                    kind: 0,
                    ra: k.ra.replace(new RegExp("{{GOOGLE_PBJS_AD_CONFIG}}".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), m.replace(/\$/g, "$$$$"))
                }), zt(this.B)) : (this.o.l(k), this.B.l(m));
                this.F.l(null !== p && void 0 !== p ? p : null);
                this.m.l(null !== u && void 0 !== u ? u : null);
                window.postMessage(JSON.stringify({
                    message: "Prebid Request",
                    adId: h
                }), "*")
            }
        } else VD(this)
    };
    var WD = function(a, b, c, d) {
        Y.call(this, 720);
        this.format = a;
        this.B = b;
        this.C = this.l();
        this.m = V(this, c);
        this.o = V(this, d)
    };
    _.N(WD, Y);
    WD.prototype.j = function() {
        var a = this.o.value;
        if (null == a) zt(this.C);
        else {
            var b = Math.round(.3 * this.B);
            2 !== this.format && 3 !== this.format || !Ct(this.m) || !Tk(this.m.value, 12, !1) || 0 >= b || a <= b ? this.C.j(a) : this.C.j(b)
        }
    };
    var XD = function(a, b, c, d, e, f, g, h, k, l) {
        Y.call(this, 674);
        this.slotId = a;
        this.T = b;
        this.ka = c;
        this.Z = e;
        this.R = f;
        this.C = this.l();
        this.B = 2 === d || 3 === d;
        this.m = U(this, g);
        this.I = U(this, h);
        this.F = V(this, k);
        this.o = V(this, l)
    };
    _.N(XD, Y);
    XD.prototype.j = function() {
        var a = qv(this.T, this.ka),
            b = Ov(this.slotId, this.Z) || kB(this.Z, this.m.value, Tv(this.slotId), a);
        this.I.value && !a && (b.style.display = "inline-block");
        this.B ? eu(this.R, this.slotId, function() {
            return void _.xl(b)
        }) : _.Bg(this, function() {
            return void _.xl(b)
        });
        a = YD(this);
        0 < a && (b.style.paddingTop = a + "px");
        this.C.j(b)
    };
    var YD = function(a) {
        var b, c, d, e = a.m.value,
            f = null === (b = (0, H.U)(a.F).value) || void 0 === b ? void 0 : b.height;
        if (!e || (0, H.U)(a.o).value || !f) return 0;
        var g = a.T,
            h;
        return (null != (h = x(a.ka, 23)) ? h : x(g, 31)) ? Math.floor((e.offsetHeight - f) / 2) : _.v(qo) && (a = Xc(e, window), a = null === (d = null === (c = null === a || void 0 === a ? void 0 : a.minHeight) || void 0 === c ? void 0 : c.match(/^([0-9]+)px$/)) || void 0 === d ? void 0 : d[1]) ? Math.floor((Number(a) - f) / 2) : 0
    };
    var ZD = function(a) {
        Y.call(this, 859);
        this.J = a;
        this.C = this.l()
    };
    _.N(ZD, Y);
    ZD.prototype.j = function() {
        this.C.j(!Fe(this.J.top))
    };
    var $D = function(a, b) {
        Y.call(this, 698);
        this.J = a;
        this.C = this.l();
        this.m = U(this, b)
    };
    _.N($D, Y);
    $D.prototype.j = function() {
        this.C.l(Xc(this.m.value, this.J))
    };
    var aE = function(a, b, c) {
        Y.call(this, 813);
        this.Ea = a;
        this.m = this.l();
        this.B = V(this, b);
        this.o = V(this, c)
    };
    _.N(aE, Y);
    aE.prototype.j = function() {
        var a;
        if (!_.v(sp) || _.v(np)) this.m.j(!1);
        else if (_.v(mp) && !_.Xb(254)) this.m.j(!1);
        else {
            var b = this.B.value;
            if (b)
                if (bE.has(this.Ea)) this.m.j(!1);
                else {
                    bE.add(this.Ea);
                    b = _.G(b);
                    for (var c = b.next(); !c.done; c = b.next()) {
                        var d = c.value;
                        c = d.xa;
                        (d = d.Jc) && oe(c, d, null !== (a = this.o.value) && void 0 !== a ? a : null)
                    }
                    this.m.j(!0)
                }
        }
    };
    var bE = new D.Set;
    var cE = function(a) {
        Y.call(this, 840);
        this.Z = a;
        this.C = this.l()
    };
    _.N(cE, Y);
    cE.prototype.j = function() {
        var a;
        if (_.v(up)) {
            var b = void 0 === b ? window.navigator.userAgent : b;
            b = (b = b.match(/Chrome\/([0-9]+)/)) && 92 > Number(b[1]) ? "conversion-measurement" : "attribution-reporting"
        } else b = "conversion-measurement";
        _.v(tp) && (null === (a = this.Z.featurePolicy) || void 0 === a ? 0 : (J = a.features(), _.r(J, "includes")).call(J, b)) ? this.C.j(b) : this.C.j("")
    };
    var dE = function(a, b, c, d, e, f, g) {
        Y.call(this, 758);
        this.slotId = a;
        this.L = b;
        this.R = c;
        this.xb = d;
        this.J = e;
        this.Z = f;
        this.m = V(this, g)
    };
    _.N(dE, Y);
    dE.prototype.j = function() {
        return A(this, function b() {
            var c = this,
                d, e;
            return B(b, function(f) {
                if (1 == f.j) {
                    var g, h = Vc(c.slotId, c.Z);
                    h && ye(h, c.J, null !== (g = c.m.value) && void 0 !== g ? g : "", !0);
                    $p(c.xb, "5", (0, H.U)(I(c.L.P[c.slotId.j], 20)));
                    d = c.slotId;
                    return C(f, d.dispatchEvent(Tq, 801, {
                        ac: null,
                        isBackfill: !1
                    }), 2)
                }
                e = _.v(Xn);
                var k, l, m;
                if (_.hu(c.R, c.slotId)) {
                    var n = c.L;
                    g = n.T;
                    n = n.P[c.slotId.j];
                    var p = null !== (k = null !== (h = x(n, 11)) && void 0 !== h ? h : x(g, 10)) && void 0 !== k ? k : !1;
                    e && (ou(c.R, c.slotId), p && bg(c.slotId, c.Z, n, g), mu(c.R, c.slotId));
                    !e && Wv(c.slotId, c.Z) || null === (m = null !== (l = x(n, 10)) && void 0 !== l ? l : x(g, 11)) || void 0 === m || !m || _.v(so) || bg(c.slotId, c.Z, n, g)
                }
                return C(f, d.dispatchEvent(Vq, 825, {
                    isEmpty: !0,
                    slotContentChanged: e
                }), 0)
            })
        })
    };
    var eE = function(a, b, c, d, e) {
        Y.call(this, 721);
        this.J = a;
        this.F = V(this, b);
        this.o = U(this, c);
        this.m = U(this, d);
        this.B = U(this, e)
    };
    _.N(eE, Y);
    eE.prototype.j = function() {
        var a = this,
            b, c, d, e = this.F.value,
            f = null === (b = null === e || void 0 === e ? void 0 : I(e, 1)) || void 0 === b ? void 0 : b.toUpperCase();
        e = null === (c = null === e || void 0 === e ? void 0 : I(e, 2)) || void 0 === c ? void 0 : c.toUpperCase();
        if (f && e) {
            var g = this.o.value,
                h = this.m.value,
                k = this.B.value,
                l = k.style.height,
                m = k.style.width,
                n = k.style.display,
                p = k.style.position,
                u = xm(g.id + "_top", f),
                t = xm(g.id + "_bottom", e);
            _.gm(t, {
                position: "relative",
                top: "calc(100vh - 48px)"
            });
            k.appendChild(u);
            k.appendChild(t);
            _.gm(h, {
                position: "absolute",
                top: "24px",
                clip: "rect(0, auto, auto, 0)",
                width: "100vw",
                height: "calc(100vh - 48px)"
            });
            _.gm(g, {
                position: "fixed",
                top: "0",
                height: "100vh"
            });
            _.gm(k, {
                position: "relative",
                display: (null === (d = this.J.screen.orientation) || void 0 === d ? 0 : d.angle) ? "none" : "block",
                width: "100vw",
                height: "100vh"
            });
            rv(this, 722, this.J, "orientationchange", function() {
                var y;
                (null === (y = a.J.screen.orientation) || void 0 === y ? 0 : y.angle) ? _.gm(k, {
                    display: "none"
                }): _.gm(k, {
                    display: "block"
                })
            });
            _.Bg(this, function() {
                _.xl(u);
                _.xl(t);
                k.style.position = p;
                k.style.height = l;
                k.style.width = m;
                k.style.display = n
            })
        }
    };
    var fE = function(a, b, c, d, e) {
        e = void 0 === e ? Ng : e;
        Y.call(this, 783);
        var f = this;
        this.slotId = a;
        this.Z = c;
        this.ia = d;
        this.O = e;
        this.F = !1;
        this.m = null;
        this.B = 0;
        this.o = null;
        this.W = _.Fi(function() {
            f.ia.dispatchEvent("impressionViewable", 715, new iw(f.slotId, "publisher_ads"))
        });
        this.Y = Gi(function() {
            return void f.ia.dispatchEvent("slotVisibilityChanged", 716, new jw(f.slotId, "publisher_ads", f.o))
        }, 200);
        this.I = U(this, b);
        this.K = ng(this.slotId, Yq)
    };
    _.N(fE, Y);
    fE.prototype.j = function() {
        return A(this, function b() {
            var c = this,
                d, e, f, g, h;
            return B(b, function(k) {
                if (1 == k.j) return d = c, _.v(Eo) || _.v(Fo) ? _.v(Go) ? (k.j = 2, k = void 0) : k = C(k, c.K, 2) : k = k.return(), k;
                if (c.A) return k.return();
                e = c.I.value;
                f = _.v(Fo) ? Di : function(l) {
                    l = _.G(l);
                    for (var m = l.next(); !m.done; m = l.next()) d.B = 100 * m.value.intersectionRatio, gE(d)
                };
                g = kc(c.id, f);
                h = c.O(g);
                h.observe(e);
                rv(c, c.id, c.Z, "visibilitychange", function() {
                    gE(d)
                });
                _.Bg(c, function() {
                    h.disconnect()
                });
                _.v(Ho) && setTimeout(function() {
                    return void h.disconnect()
                }, 36E5);
                gi(k)
            })
        })
    };
    var gE = function(a) {
            var b = !tt(a.Z);
            hE(a, 50 <= a.B && b);
            b = b ? a.B : 0;
            _.r(Number, "isFinite").call(Number, b) && (b = Math.floor(b), 0 > b || 100 < b || b === a.o || null === a.o && 0 === b || (a.o = b, a.Y()))
        },
        hE = function(a, b) {
            a.F || (b ? null === a.m && (a.m = setTimeout(function() {
                tt(a.Z) || (a.W(), a.F = !0);
                a.m = null
            }, 1E3)) : null !== a.m && (clearTimeout(a.m), a.m = null))
        };
    var iE = function() {
        Y.call(this, 663);
        this.C = Gt(this)
    };
    _.N(iE, Y);
    iE.prototype.j = function() {
        return A(this, function b() {
            var c = this;
            return B(b, function(d) {
                if (1 == d.j) {
                    var e = jE ? 0 : _.lb(lo),
                        f = _.lb(ko);
                    e = Math.max(e, f);
                    0 < e && (jE = !0, dg(e));
                    return C(d, kE(c), 2)
                }
                c.C.notify();
                gi(d)
            })
        })
    };
    var kE = function(a) {
            return A(a, function c() {
                var d;
                return B(c, function(e) {
                    d = _.lb(mo);
                    0 < d ? e = C(e, Og(d), 0) : (e.j = 0, e = void 0);
                    return e
                })
            })
        },
        jE = !1;
    var lE = function(a, b) {
        Y.call(this, 666);
        this.o = a;
        this.m = this.l();
        this.B = V(this, b)
    };
    _.N(lE, Y);
    lE.prototype.j = function() {
        var a = new Pu;
        Ct(this.B) && (E(a, 2, this.B.value), E(a, 3, 1));
        if (this.o) {
            var b = [this.o, a],
                c = new Pu;
            b = _.G(b);
            for (a = b.next(); !a.done; a = b.next()) {
                a = a.value;
                if ( of (a, 1)) {
                    var d = I(a, 1);
                    E(c, 1, d)
                } of (a, 2) && (d = I(a, 2), E(c, 2, d)); of (a, 3) && (a = Ud(a, 3), E(c, 3, a))
            }
            a = c
        }
        c = this.m;
        b = c.l;
        a = of (a, 2) ? of (a, 3) && 0 !== qd() ? I(a, 2) * Ud(a, 3) : I(a, 2) : null;
        b.call(c, a)
    };
    var mE = function(a, b, c, d) {
        Y.call(this, 666);
        this.C = this.l();
        It(this, a);
        this.m = U(this, b);
        this.o = V(this, d);
        this.B = V(this, c)
    };
    _.N(mE, Y);
    mE.prototype.j = function() {
        var a, b = this.o.value,
            c = null !== (a = this.B.value) && void 0 !== a ? a : void 0;
        if (null == b || 0 > b || 0 === c) this.C.j(!1);
        else {
            var d = this.m.value;
            $c(d) ? nE(this, b, c, d) : this.C.j(!1)
        }
    };
    var nE = function(a, b, c, d) {
        var e = Pg(b + "%", kc(291, function(f, g) {
            f = _.G(f);
            for (var h = f.next(); !h.done; h = f.next())
                if (h = h.value, !(0 >= h.intersectionRatio)) {
                    g.unobserve(h.target);
                    a.C.j(!0);
                    break
                }
        }));
        null != c && setTimeout(function() {
            a.C.j(!0);
            e.disconnect()
        }, c);
        e.observe(d);
        _.Bg(a, function() {
            e.disconnect()
        })
    };
    var oE = function(a, b, c, d, e) {
        Y.call(this, 713);
        this.Ra = a;
        this.m = b;
        this.B = e;
        this.o = V(this, c);
        this.F = U(this, d)
    };
    _.N(oE, Y);
    oE.prototype.j = function() {
        var a = this;
        if (!He(this.o.value) && this.m.getOseId()) {
            var b = this.F.value,
                c = WA(this.m),
                d = _.v(Eo) ? Di : kc(this.id, function(e, f) {
                    0 <= f && a.B(e, f);
                    return null
                });
            c.registerAdBlock("?eid=" + Bb().join(",") + "&adk=" + this.Ra, 3, "ldjh", b, 0, 0, d);
            _.Bg(this, function() {
                try {
                    c.unloadAdBlock(b, !1, !1)
                } catch (e) {}
            })
        }
    };
    var pE = function(a, b, c, d, e, f) {
        Y.call(this, 664);
        this.slotId = a;
        this.Za = b;
        this.R = c;
        this.C = Gt(this);
        It(this, d);
        this.o = V(this, e);
        this.m = V(this, f)
    };
    _.N(pE, Y);
    pE.prototype.j = function() {
        var a = this,
            b, c = null !== (b = this.m.value) && void 0 !== b ? b : 0;
        if (_.v(fo) || 0 < c) {
            var d = document;
            c = st(d);
            if (tt(d) && c && (0 < Lf(this.R, this.slotId) || !qE(this)) && c) {
                var e = rv(this, 324, d, c, function() {
                    tt(d) || (e && e(), a.C.notify())
                });
                if (e) return
            }
        }
        this.C.notify()
    };
    var qE = function(a) {
        var b = a.o.value,
            c;
        if (c = null != b) try {
            var d = As(top.document, top).y,
                e = d + a.Za.height;
            c = b.y >= d && b.y <= e
        } catch (f) {
            c = !0
        }
        return c
    };
    var rE = function(a, b) {
        Y.call(this, 762);
        this.C = this.l();
        this.o = U(this, a);
        this.m = U(this, b)
    };
    _.N(rE, Y);
    rE.prototype.j = function() {
        var a = this.m.value.kind,
            b = 0;
        1 === a ? b = 5 : 2 === a ? b = 6 : this.o.value && (b = 1);
        this.C.j(b)
    };
    var sE = function(a, b, c, d, e, f) {
        Y.call(this, 669);
        this.T = a;
        this.P = b;
        this.J = c;
        this.C = this.l();
        this.m = V(this, d);
        this.o = V(this, e);
        this.B = V(this, f)
    };
    _.N(sE, Y);
    sE.prototype.j = function() {
        var a;
        if (!(a = Ct(this.o))) {
            a = this.P;
            var b = this.J;
            b = void 0 === b ? window : b;
            a = !!(uq(sn) || a && of (a, 16) && Ob("google_range_debug", b))
        }
        a ? this.C.j(!0) : (a = (He(this.m.value) ? x(this.P, 12) || x(this.T, 13) : !1) || !!this.B.value, this.C.j(!!a))
    };
    var tE = function(a, b, c, d, e, f, g) {
        Y.call(this, 828);
        this.slotId = a;
        this.L = b;
        this.R = c;
        this.da = d;
        this.o = e;
        this.C = this.l();
        this.m = V(this, f);
        this.B = V(this, g)
    };
    _.N(tE, Y);
    tE.prototype.j = function() {
        var a;
        return A(this, function c() {
            var d = this,
                e, f, g, h, k, l, m, n, p, u;
            return B(c, function(t) {
                e = d.L;
                f = e.T;
                g = e.P;
                h = g[d.slotId.j];
                k = d.B.value;
                l = null;
                m = null !== (a = null === h || void 0 === h ? void 0 : h.ya()) && void 0 !== a ? a : null;
                n = f.ya();
                (null === m || void 0 === m ? 0 : of (m, 4)) ? l = x(m, 4): (null === n || void 0 === n ? 0 : of (n, 4)) ? l = x(n, 4) : null != k && (l = k);
                p = String(l);
                null == k || k === l || d.m.value || Cc().M(js(p, String(k)));
                d.m.value || mc("gpt_sf_r", function(y) {
                    Zb(y);
                    q(y, "GAM", String(k));
                    q(y, "Final", p)
                });
                u = d.m.value || l || null == l;
                if (!u) return zt(d.C), t.return();
                d.C.j(Nv(d.o, d.da));
                gi(t)
            })
        })
    };
    var uE = function(a, b, c, d, e, f) {
        Y.call(this, 719);
        this.T = a;
        this.ka = b;
        this.C = this.l();
        this.o = U(this, c);
        this.m = V(this, d);
        this.B = V(this, f)
    };
    _.N(uE, Y);
    uE.prototype.j = function() {
        var a = this.m.value,
            b = this.o.value;
        if (1 === b || 5 === b) {
            if (a = this.B.value, b = new Bu, a = E(b, 3, a), x(hv([a, this.T.ya(), this.ka.ya()]), 3)) {
                this.C.j(kA);
                return
            }
        } else {
            if (a = 0 === b && a) a = Yl(), a = !(!a["allow-top-navigation-by-user-activation"] || !a["allow-popups-to-escape-sandbox"]);
            if (a) {
                this.C.j(kA);
                return
            }
        }
        zt(this.C)
    };
    var vE = function(a, b, c, d, e, f, g, h, k) {
        Y.call(this, 681);
        this.adUnitPath = a;
        this.ka = b;
        this.O = c;
        this.window = d;
        this.F = this.l();
        this.m = this.l();
        this.B = this.l();
        this.o = uq(sn).split(",");
        this.I = hg(tn);
        this.Ta = of (b, 16) ? M(b, Sf, 16) : null;
        this.K = Nb("google_range_debug", this.window);
        this.W = V(this, e);
        this.ca = V(this, f);
        this.$ = V(this, g);
        this.Y = U(this, h);
        this.aa = U(this, k)
    };
    _.N(vE, Y);
    vE.prototype.j = function() {
        var a;
        if (a = !!(this.o.length || this.Ta && this.K)) {
            var b;
            b: if (this.o.length) {
                if (this.I.length && (a = this.adUnitPath.split("/"), !_.r(this.I, "includes").call(this.I, a[a.length - 1]))) {
                    a = !1;
                    break b
                }
                a = !0
            } else a = !1;
            var c = a;
            a = c ? wE(this) : null;
            if (c && a) {
                c = this.aa.value;
                var d = Iv(c.parentElement);
                d = null !== (b = null === d || void 0 === d ? void 0 : d.width) && void 0 !== b ? b : 0;
                b = "p" === this.o[0];
                var e = Number(this.o[0]);
                if (b = "f" === this.o[0] ? this.O : e && 0 < e ? e : b ? Math.min(d, this.O) : null) {
                    e = a.width;
                    var f = a.height,
                        g = this.o[1],
                        h = Number(g);
                    e = "ratio" === g && e ? Math.floor(f / e * b) : h && 0 < h ? f * h : f;
                    xE(this, b, e, {
                        kind: 0,
                        ra: yE(b, e, "<p>Requested size:" + a.width + "x" + a.height + "</p>")
                    }, b <= d ? 1 : 2, c);
                    a = !0
                } else a = !1
            } else a = !1;
            if (!a) a: if (this.Ta && this.K) {
                a = Of(this.Ta, this.window);
                c = Pf(this.Ta, this.window);
                d = Qf(this.Ta);
                b = Rf(this.Ta);
                switch (this.K) {
                    case "max":
                        e = a;
                        f = c;
                        break;
                    case "min":
                        e = d;
                        f = b;
                        break;
                    case "banner":
                        e = a;
                        f = 90 > c ? c : 90 < b ? b : 90;
                        break;
                    case "skyscraper":
                        e = 90 > a ? a : 90 < d ? d : 90;
                        f = c;
                        break;
                    default:
                        a = !1;
                        break a
                }
                xE(this, e, f, {
                    kind: 0,
                    ra: yE(e, f, "<p>Minimum size:" + d + "x" + b + "</p><p>Maximum size:" + (a + "x" + c + "</p><div id=toowide style=\"display:none; background:#faa\">Slot does not fit horizontally<script>new IntersectionObserver((e) => {toowide.style.display =   (e[e.length-1].boundingClientRect.width >    e[e.length-1].intersectionRect.width) ? 'block' : 'none';},{threshold:1}).observe(document.body);\x3c/script></div>"))
                });
                a = !0
            } else a = !1
        }
        if (!a) {
            a = this.ca.value;
            if (null == a) throw Error("Missing 'width'.");
            c = this.$.value;
            if (null == c) throw Error("Missing 'height'.");
            xE(this, a, c, this.Y.value)
        }
    };
    var wE = function(a) {
            a = Yc(a.ka)[0];
            return Array.isArray(a) && a.every(function(b) {
                return "number" === typeof b
            }) ? new _.ll(a[0], a[1]) : null
        },
        yE = function(a, b, c) {
            return '<html><body style="height:' + (b - 2 + "px;width:" + (a - 2 + 'px;background-color:#ddd;color:#000;border:1px solid #f00;">')) + c + ("<p>Rendered size:" + a + "x" + b + "</p></body></html>")
        },
        xE = function(a, b, c, d, e, f) {
            e = void 0 === e ? a.W.value : e;
            a.m.j(new _.ll(b, c));
            a.F.j(d);
            a.B.l(e);
            f && _.Om(f, "opacity", .5)
        };
    var zE = function(a, b, c, d, e, f, g, h, k) {
        Y.call(this, 673);
        this.slotId = a;
        this.vb = b;
        this.I = c;
        this.F = d;
        this.Z = e;
        this.m = f;
        this.R = g;
        this.C = this.l();
        this.B = V(this, h);
        this.o = V(this, k)
    };
    _.N(zE, Y);
    zE.prototype.j = function() {
        return A(this, function b() {
            var c = this,
                d, e;
            return B(b, function(f) {
                if (1 == f.j) {
                    if (null != c.vb) {
                        AE(c, c.vb);
                        c.C.j(c.vb);
                        f.j = 0;
                        return
                    }
                    if (pv(c.m)) {
                        c.C.j(BE(c));
                        f.j = 0;
                        return
                    }
                    return C(f, ng(c.slotId, Rq), 4)
                }
                d = f.l;
                e = d.detail;
                if (c.A) return f.return();
                AE(c, e);
                c.C.j(e);
                gi(f)
            })
        })
    };
    var BE = function(a) {
            var b = _.wl(document, "INS");
            b.id = a.I;
            _.gm(b, {
                display: "none"
            });
            a.Z.documentElement.appendChild(b);
            var c = function() {
                return void _.xl(b)
            };
            2 === a.m || 3 === a.m ? eu(a.R, a.slotId, function() {
                return void _.xl(b)
            }) : _.Bg(a, c);
            return b
        },
        AE = function(a, b) {
            if (2 !== a.m && 3 !== a.m) {
                var c = _.v(Po) ? [].concat(_.ec(b.childNodes)) : _.r(Array, "from").call(Array, b.childNodes);
                c = _.G(c);
                for (var d = c.next(); !d.done; d = c.next()) d = d.value, 1 === d.nodeType && d.id !== a.F && _.xl(d);
                b.style.display = "";
                _.v(ro) && Ct(a.B) && Ct(a.o) && jB(b, a.B.value, a.o.value)
            }
        };
    var CE = function(a) {
        Y.call(this, 676);
        this.C = this.l();
        this.m = U(this, a)
    };
    _.N(CE, Y);
    CE.prototype.j = function() {
        var a = Uc(this.m.value);
        this.C.j(a)
    };
    var DE = function(a, b, c) {
        Y.call(this, 807);
        this.J = a;
        this.C = Gt(this);
        this.m = V(this, b);
        this.o = U(this, c)
    };
    _.N(DE, Y);
    DE.prototype.j = function() {
        var a = _.lb(dp);
        if (0 !== a && this.m.value && !this.o.value) {
            var b = Cs(this.J).J,
                c = Fs(b),
                d = c.url;
            c.jc && (b = new xA(b, d), 1 === a ? b = yA(b) : (b = am("google_ads_top_frame_ctrl", b.j), b = !(!b || !b.contentWindow)), b || this.V(Error("Cannot create top window frame: " + a)))
        }
        this.C.notify()
    };
    var EE = function(a, b) {
        Y.call(this, 870);
        this.o = V(this, a);
        this.m = V(this, b)
    };
    _.N(EE, Y);
    EE.prototype.j = function() {
        if (this.o.value && this.m.value && 1 === this.m.value.length) {
            var a = this.o.value,
                b = this.m.value[0],
                c = new D.Set(I(a, 2)),
                d = 0,
                e = -1;
            a = _.G(L(a, ex, 1));
            for (var f = a.next(); !f.done; f = a.next()) f = f.value, of (f, 1) && of (f, 3) && !(Uk(f, 3) <= d) && I(f, 4).some(function(g) {
                return c.has(g)
            }) && (d = Uk(f, 3), e = Rg(f, 1)); - 1 !== e && e !== b && mc("gpt_ta_creative_id_mismatch", function(g) {
                q(g, "ta_winner", e);
                q(g, "expected_winner", b);
                Zb(g)
            }, {
                ta: 1
            })
        }
    };
    EE.prototype.G = function() {};
    var FE = function(a) {
        Y.call(this, 881);
        this.C = this.l();
        this.m = V(this, a)
    };
    _.N(FE, Y);
    FE.prototype.j = function() {
        var a;
        if (this.m.value) {
            for (var b = this.m.value, c = {}, d = _.G(L(b, Cx, 7)), e = d.next(); !e.done; e = d.next()) e = e.value, c[ff(e, 1)] = JSON.parse(ff(e, 2));
            (d = M(b, Bx, 6)) && (c["https://googleads.g.doubleclick.net"] = Zk(d));
            this.C.j({
                seller: "https://pubads.g.doubleclick.net",
                decisionLogicUrl: ff(b, 1),
                trustedScoringSignalsUrl: ff(b, 2),
                interestGroupBuyers: I(b, 3),
                additionalBids: [],
                auctionSignals: JSON.parse(ff(b, 4) || "{}"),
                sellerSignals: (null === (a = M(b, Dx, 5)) || void 0 === a ? void 0 : a.za()) || [],
                perBuyerSignals: c
            })
        } else zt(this.C)
    };
    FE.prototype.G = function() {
        zt(this.C)
    };
    var GE = navigator,
        HE = function(a, b, c) {
            Y.call(this, 882);
            this.C = this.l();
            this.B = V(this, a);
            this.o = V(this, b);
            this.m = V(this, c)
        };
    _.N(HE, Y);
    HE.prototype.j = function() {
        var a;
        return A(this, function c() {
            var d = this,
                e;
            return B(c, function(f) {
                if (1 == f.j) return d.o.value ? C(f, null === (a = GE.runAdAuction) || void 0 === a ? void 0 : a.call(GE, d.o.value), 2) : (d.C.l(d.m.value), f.return());
                if (e = f.l) d.C.j({
                    kind: 2,
                    Zd: e
                });
                else {
                    var g, h, k = null === (h = null === (g = d.B.value) || void 0 === g ? void 0 : M(g, Dx, 5)) || void 0 === h ? void 0 : ff(h, 2);
                    k && Lm("https://googleads.g.doubleclick.net/td/auctionwinner?status=nowinner&qqid=" + encodeURIComponent(k));
                    d.C.l(d.m.value)
                }
                gi(f)
            })
        })
    };
    HE.prototype.G = function() {
        this.C.l(this.m.value)
    };
    var IE = Wh(["onmessage=function(e){var b=e.data.a;if(b>0){var t=performance.now();while(t+b>performance.now());}postMessage(b);};postMessage(-1)"]),
        JE = IE;
    if (!Array.isArray(JE) || !Array.isArray(JE.raw) || 1 !== JE.length) throw new TypeError("safeScript is a template literal tag function that only accepts template literals without expressions. For example, safeScript`foo`;");
    var Od = Xa(JE[0]);
    var KE = function(a, b) {
        Y.call(this, 839);
        this.C = this.l();
        this.o = V(this, a);
        this.m = U(this, b)
    };
    _.N(KE, Y);
    KE.prototype.j = function() {
        var a, b, c;
        return A(this, function e() {
            var f = this,
                g, h, k, l, m, n, p, u, t, y, z, K, Q, R, X, ua, ja, xa, nb;
            return B(e, function(hb) {
                if (1 == hb.j) {
                    g = f;
                    if (_.v(gp) || !Ct(f.o)) return zt(f.C), hb.return();
                    h = f.o.value;
                    k = new wy(h);
                    l = M(h, ix, 3);
                    m = Wg(l);
                    n = [];
                    p = null !== (a = null === l || void 0 === l ? void 0 : Rg(l, 8)) && void 0 !== a ? a : 0;
                    u = null !== (b = null === l || void 0 === l ? void 0 : Rg(l, 6)) && void 0 !== b ? b : 0;
                    t = null !== (c = null === l || void 0 === l ? void 0 : Rg(l, 9)) && void 0 !== c ? c : 0;
                    y = null === l || void 0 === l ? void 0 : Rg(l, 7);
                    z = null === l || void 0 === l ? void 0 : Tk(l, 10);
                    K = !z || !$c(f.m.value) || !Qg(f.m.value.getBoundingClientRect());
                    z && mc("gpt_td_worker_hidden_experiment", function(vb) {
                        q(vb, "is_hidden", K)
                    }, {});
                    if (!(0 <= u && y) || tj()) {
                        n = 1 === p ? Nd(k, m, By) : Nd(k, m, Ay);
                        hb.j = 2;
                        return
                    }
                    if (!K) {
                        hb.j = 2;
                        return
                    }
                    Q = [];
                    R = Pd();
                    X = [];
                    ua = 1 + t;
                    ja = {};
                    for (xa = 0; xa < ua; ja = {
                            kb: ja.kb
                        }, xa++) ja.kb = new Worker(eb(R), void 0), Q.push(ja.kb), X.push(new D.Promise(function(vb) {
                        return function(ob) {
                            var Gd = (0, H.U)(rv(g, g.id, vb.kb, "message", function(hd) {
                                if (0 <= hd.data) {
                                    hd = _.G(m);
                                    for (var kn = hd.next(); !kn.done; kn = hd.next()) n.push({
                                        ad: kn.value,
                                        Td: 1
                                    });
                                    Gd();
                                    ob()
                                } else vb.kb.postMessage({
                                    a: u
                                })
                            }))
                        }
                    }(ja)));
                    mc("gpt_td_worker_event", function(vb) {
                        q(vb, "wait_ms", u);
                        q(vb, "timeout_ms", y)
                    }, {});
                    nb = performance.now();
                    return C(hb, D.Promise.race([D.Promise.all(X), ym(y)]).then(function(vb) {
                        for (var ob = _.G(Q), Gd = ob.next(); !Gd.done; Gd = ob.next()) Gd.value.terminate();
                        mc("timeout" === vb ? "gpt_td_worker_timeout" : "gpt_td_worker_time", function(hd) {
                            q(hd, "wait_ms", u);
                            q(hd, "timeout_ms", y);
                            q(hd, "duration_ms", Math.round(performance.now() - nb))
                        }, {})
                    }), 2)
                }
                f.C.j(n);
                gi(hb)
            })
        })
    };
    KE.prototype.G = function() {
        zt(this.C)
    };
    var LE = function(a, b) {
            var c = this;
            this.slotId = a;
            this.ia = b;
            this.j = null;
            this.l = _.Fi(function() {
                c.ia.dispatchEvent("impressionViewable", 715, new iw(c.slotId, "publisher_ads"))
            });
            this.A = Gi(function() {
                return void c.ia.dispatchEvent("slotVisibilityChanged", 716, new jw(c.slotId, "publisher_ads", c.j))
            }, 200)
        },
        ME = function(a, b, c) {
            b && a.l();
            void 0 === c || isNaN(c) || (c = Math.floor(c), a.j !== c && (a.j = c, a.A()))
        };
    var OE = function(a, b, c, d, e, f, g, h, k, l, m, n, p) {
        for (var u = [], t = 12; t < arguments.length; ++t) u[t - 12] = arguments[t];
        Y.call(this, 814);
        this.slotId = a;
        this.L = b;
        this.R = c;
        this.F = d;
        this.da = e;
        this.o = f;
        this.m = g;
        this.ia = h;
        this.Z = k;
        this.J = l;
        this.metadata = m;
        this.B = U(this, n);
        u = _.G(u);
        for (t = u.next(); !t.done; t = u.next()) It(this, t.value);
        Pq(this.slotId, Vq, NE)
    };
    _.N(OE, Y);
    OE.prototype.j = function() {
        var a = this.L,
            b = a.T,
            c = this.slotId.j,
            d = a.P[c];
        a = new ce;
        _.Lq(this, a);
        if (this.F || this.B.value) {
            var e = new dE(this.slotId, this.L, this.R, Kb.N(), this.J, this.Z, this.metadata.B);
            W(a, e)
        } else {
            var f = kd(d),
                g = Bs(!0, this.J);
            e = new ZD(this.J);
            W(a, e);
            var h = new UD(d, this.metadata.Ga, this.metadata.Pa, this.metadata.K, this.metadata.Ua);
            W(a, h);
            var k = new yt;
            k.j(this.da);
            var l = new Et;
            l.notify();
            l = new RC(this.J.top, k, l);
            W(a, l);
            k = new aE(Ib(this.slotId.getAdUnitPath()), this.metadata.va, l.C);
            W(a, k);
            var m = new iE;
            W(a, m);
            k = new WD(f, g.height, this.metadata.O, h.F);
            W(a, k);
            c = new zE(this.slotId, Vc(this.slotId, this.Z), c, Tv(this.slotId), this.Z, f, this.R, h.m, k.C);
            W(a, c);
            var n = new gB(h.o, this.metadata.m, this.metadata.o, this.metadata.I, this.metadata.ga);
            W(a, n);
            var p = new sE(b, d, this.J, this.metadata.m, this.metadata.o, this.metadata.ga);
            W(a, p);
            var u = new lE(M(b, Pu, 5), this.metadata.Na);
            W(a, u);
            n = new vE(this.slotId.getAdUnitPath(), d, g.width, window, this.metadata.na, h.m, k.C, n.m, c.C);
            W(a, n);
            k = new XD(this.slotId, b, d, f, this.Z, this.R, c.C, p.C, n.m, this.metadata.F);
            W(a, k);
            var t = new CE(k.C);
            W(a, t);
            t = new pE(this.slotId, g, this.R, m.C, t.C, u.m);
            W(a, t);
            m = new $D(window, c.C);
            W(a, m);
            u = new mE(t.C, k.C, this.metadata.Oa, u.m);
            W(a, u);
            g = new SD(this.Z, this.slotId, d, g, this.metadata.F, c.C, k.C, n.m, n.B, m.C, this.metadata.B);
            W(a, g);
            m = new FE(this.metadata.aa);
            W(a, m);
            m = new HE(this.metadata.aa, m.C, n.F);
            W(a, m);
            p = new rE(p.C, m.C);
            W(a, p);
            d = new uE(b, d, p.C, this.metadata.m, this.metadata.I, this.metadata.Ma);
            W(a, d);
            t = new DE(this.J, this.metadata.oa, e.C);
            W(a, t);
            var y = new tE(this.slotId, this.L, this.R, this.da, this.o, this.metadata.I, this.metadata.ja);
            W(a, y);
            b = new EE(this.metadata.Ka, this.metadata.la);
            W(a, b);
            var z = new KE(this.metadata.La, k.C);
            W(a, z);
            var K = new cE(this.Z);
            W(a, K);
            b = new CC(f, this.metadata.O, this.metadata.W);
            W(a, b);
            h = new PD(this.slotId, this.R, this.L, this.ia, this.J, m.C, y.C, u.C, c.C, k.C, n.m, p.C, this.metadata.o, this.metadata.B, this.metadata.F, d.C, this.metadata.I, this.metadata.Ia, this.metadata.ca, this.metadata.ja, g.C, t.C, z.C, K.C, b.C, h.B);
            W(a, h);
            n = new xC(this.R, f, this.slotId, this.J, this.metadata.O, h.m, c.C, b.C);
            W(a, n);
            l = new zC(this.slotId, f, this.L.Za, this.metadata.W, h.m, c.C, l.C, b.C);
            W(a, l);
            l = new eB(this.slotId, this.J, this.metadata.m, h.m, h.o);
            W(a, l);
            l = new TD(this.J, this.slotId, qd(), this.metadata.ma, h.m);
            W(a, l);
            f = new NC(this.slotId, f, this.ia, this.J, h.m, c.C);
            W(a, f);
            var Q = new LE(this.slotId, this.ia);
            f = function(R, X) {
                return void ME(Q, R, X)
            };
            l = new fE(this.slotId, h.m, this.Z, this.ia);
            W(a, l);
            l = new oE(lu(this.R, this.slotId), this.m, this.metadata.m, h.m, f);
            W(a, l);
            e = new RD(lu(this.R, this.slotId), this.J, this.J.top, h.m, e.C);
            W(a, e);
            e = new aB(this.slotId, this.metadata.B, this.metadata.F, this.metadata.o, this.metadata.m, this.metadata.ca, h.m, k.C, h.o);
            W(a, e);
            _.Lq(a, new hB(f, this.slotId, this.metadata.o, this.metadata.m));
            e = new eE(this.J, this.metadata.Ha, h.m, k.C, c.C);
            W(a, e)
        }
        ee(a)
    };
    var NE = _.Fi(function() {
        return void Xv("gpt-first-ad-render")
    });
    var QE = function(a, b) {
        Y.call(this, 804);
        this.sa = b;
        this.$ = [];
        PE(this, function(c) {
            return I(c, 4)
        });
        this.Ga = PE(this, function(c) {
            return I(c, 6)
        });
        this.Pa = PE(this, function(c) {
            return I(c, 7)
        });
        this.Ja = PE(this, function(c) {
            return x(c, 8)
        });
        this.F = PE(this, function(c) {
            return I(c, 10)
        });
        this.la = PE(this, function(c) {
            return I(c, 15)
        });
        this.B = PE(this, function(c) {
            return I(c, 34)
        });
        this.m = PE(this, function(c) {
            return M(c, Zw, 43)
        });
        this.o = PE(this, function(c) {
            return M(c, Jx, 41)
        });
        this.I = PE(this, function(c) {
            return x(c, 9)
        });
        this.ga = PE(this, function(c) {
            return x(c, 12)
        });
        this.ma = PE(this, function(c) {
            return M(c, xs, 50)
        });
        this.W = PE(this, function(c) {
            return M(c, Ow, 48)
        });
        this.O = PE(this, function(c) {
            return M(c, Mw, 39)
        });
        this.na = PE(this, function(c) {
            return I(c, 36)
        });
        this.Ma = PE(this, function(c) {
            return x(c, 13)
        });
        this.Ia = PE(this, function(c) {
            return x(c, 3)
        });
        this.ca = PE(this, function(c) {
            return I(c, 49)
        });
        this.Na = PE(this, function(c) {
            return I(c, 29)
        });
        this.Oa = PE(this, function(c) {
            return I(c, 30)
        });
        this.Ha = PE(this, function(c) {
            return M(c, ax, 51)
        });
        this.ja = PE(this, function(c) {
            return x(c, 52)
        });
        this.oa = PE(this, function() {
            return "encrypted_url"
        });
        this.va = PE(this, function(c) {
            return (c = M(c, Yw, 54)) ? L(c, Ww, 1).filter(function(d) {
                I(d, 1) || Rd(32, "");
                return !!I(d, 1)
            }).map(function(d) {
                var e = I(d, 2);
                return {
                    xa: (0, H.U)(I(d, 1)),
                    Jc: e && (_.r(e, "startsWith").call(e, window.location.protocol) || _.r(e, "startsWith").call(e, "data:") && 40 >= e.length) ? $a(e) : void 0
                }
            }) : []
        });
        PE(this, function(c) {
            return I(c, 23)
        });
        PE(this, function(c) {
            return L(c, ys, 14)
        });
        PE(this, function(c) {
            return x(c, 11)
        });
        PE(this, function(c) {
            return I(c, 33)
        });
        PE(this, function(c) {
            return I(c, 27)
        });
        this.K = this.l();
        this.Ka = PE(this, function(c) {
            return M(c, cx, 57)
        });
        this.La = PE(this, function(c) {
            return M(c, yx, 55)
        });
        this.aa = PE(this, function(c) {
            return M(c, Fx, 58)
        });
        this.Ua = PE(this, function(c) {
            var d, e;
            return null !== (e = null === (d = M(c, $w, 56)) || void 0 === d ? void 0 : I(d, 1)) && void 0 !== e ? e : null
        });
        this.Y = U(this, a)
    };
    _.N(QE, Y);
    var PE = function(a, b) {
        var c = a.l();
        a.$.push({
            C: c,
            cc: b
        });
        return c
    };
    QE.prototype.j = function() {
        for (var a = _.G(this.$), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = b.cc;
            b.C.l(c(this.Y.value))
        }
        0 === this.sa.kind || 1 === this.sa.kind && this.sa.url ? this.K.j(this.sa) : this.K.j({
            kind: 0,
            ra: I(this.Y.value, 4) || ""
        })
    };
    var RE = function(a, b) {
        Y.call(this, 822);
        this.slotId = a;
        this.m = Gt(this);
        this.o = U(this, b)
    };
    _.N(RE, Y);
    RE.prototype.j = function() {
        var a, b = null !== (a = I(this.o.value, 23)) && void 0 !== a ? a : [],
            c = _.qh(Bv);
        b = _.G(b);
        for (var d = b.next(); !d.done; d = b.next()) {
            d = d.value;
            Cv(c, d);
            var e = this.slotId;
            c.j[d] = c.j[d] || new D.Set;
            c.j[d].add(e)
        }
        this.m.notify()
    };
    var SE = function(a, b) {
        Y.call(this, 803);
        this.m = a;
        this.slotId = b;
        this.C = this.l()
    };
    _.N(SE, Y);
    SE.prototype.j = function() {
        var a, b = JSON.parse(this.m),
            c = b ? Ie(b, Ci) : void 0;
        if (!c) throw Error("missing ad unit path");
        if (null === b || void 0 === b || !b[c]) throw Error("invalid ad unit path: " + c);
        b = b[c];
        if (!Array.isArray(b)) throw Error("dictionary not an array: " + this.m);
        b = new Ix(b.slice());
        c = _.G(null !== (a = I(b, 27)) && void 0 !== a ? a : []);
        for (var d = c.next(); !d.done; d = c.next()) d = d.value, _.qh(qq).j(d);
        sq(4);
        this.slotId.dispatchEvent(Sq, 800, b);
        this.C.j(b)
    };
    var TE = function(a, b, c, d) {
        Y.call(this, 823);
        this.slotId = a;
        this.L = b;
        this.R = c;
        this.m = Gt(this);
        this.o = U(this, d)
    };
    _.N(TE, Y);
    TE.prototype.j = function() {
        var a = this,
            b, c = this.L.P[this.slotId.j];
        try {
            if (c) {
                var d = null !== (b = M(this.o.value, xs, 50)) && void 0 !== b ? b : null;
                Rv(c, d, !!x(this.o.value, 11)) && (_.iu(this.R, this.slotId), Qv(d) && eu(this.R, this.slotId, function() {
                    _.ju(a.R, a.slotId)
                }))
            }
        } finally {
            this.m.notify()
        }
    };
    var UE = function(a, b, c) {
        Y.call(this, 821);
        this.da = a;
        this.o = b;
        this.m = Gt(this);
        this.B = U(this, c)
    };
    _.N(UE, Y);
    UE.prototype.j = function() {
        var a, b = null === (a = L(this.B.value, ys, 14)) || void 0 === a ? void 0 : a[0];
        b && jt(this.o, b, this.da);
        this.m.notify()
    };
    var VE = function() {
            this.tb = 0
        },
        XE = function(a, b, c, d, e, f, g, h, k, l, m, n, p, u) {
            var t, y, z = new ce,
                K = h.T,
                Q = new uD(window);
            W(z, Q);
            b = new pD(d, b, m, h, Cc(), g, window);
            W(z, b);
            var R = new JD(window);
            W(z, R);
            var X = new qD(c);
            W(z, X);
            var ua = new KD(!!x(g, 5));
            W(z, ua);
            m = new rD(d, m, c, k, g, h, n, p, Q.m, R.C, b.m, X.C, ua.C);
            W(z, m);
            d = new sD(c, h, k, l.getOseId(), m.m, b.m);
            W(z, d);
            n = !(null !== (y = null === (t = Uu(K)) || void 0 === t ? void 0 : x(t, 9)) && void 0 !== y && y) && !!x(g, 5);
            p = function(ja, xa, nb, hb) {
                WE(a, c, l, g, k, h, ja, !1, xa, nb, u, z, hb)
            };
            Q = function(ja, xa) {
                WE(a, c, l, g, k, h, ja, !0, "", {
                    kind: 0,
                    ra: ""
                }, u, z, xa)
            };
            R = new ID(h, Pb(), String(zb(window)), m.m, b.m);
            W(z, R);
            ++a.tb;
            "wbn" === e ? (e = new oD(e, h, "googletag.wbn" + a.tb, (0, H.U)(f), m.m, R.m, b.m, p, Q, n), f = e.m, W(z, e)) : (m = new FD(e, h, m.m, R.m, b.m, p, Q, n), f = m.o, W(z, m), e = new BD(m.o, e, K.ya(), k, g, _.qh(OC), window), W(z, e), W(z, new AD(h, m.o, b.m)));
            b = new zD(h, u, f, d.m, b.m);
            W(z, b);
            ee(z);
            return f.promise
        },
        WE = function(a, b, c, d, e, f, g, h, k, l, m, n, p) {
            A(a, function t() {
                var y, z, K, Q, R, X, ua, ja;
                return B(t, function(xa) {
                    if (1 == xa.j) {
                        y = new ce;
                        z = new SE(k, g);
                        W(y, z);
                        K = new UE(d, e, z.C);
                        W(y, K);
                        Q = new RE(g, z.C);
                        W(y, Q);
                        R = new TE(g, f, b, z.C);
                        W(y, R);
                        X = new QE(z.C, l);
                        W(y, X);
                        ua = h || Ob("google_norender");
                        ja = new OE(g, f, b, ua, d, e, c, m, document, window, X, X.Ja, K.m, Q.m, R.m);
                        W(y, ja);
                        nu(b, g, y);
                        _.Bg(g, function() {
                            ou(b, g)
                        });
                        ee(y);
                        if (n && p) {
                            n.wa();
                            xa.j = 2;
                            return
                        }
                        return C(xa, D.Promise.all([K.m.promise, Q.m.promise, R.m.promise]), 2)
                    }
                    return xa.return()
                })
            })
        },
        YE = function(a, b, c) {
            return A(a, function e() {
                var f, g, h;
                return B(e, function(k) {
                    if (1 == k.j) return f = new ce, g = new SE(c, b), W(f, g), ee(f), C(k, g.C.promise, 2);
                    h = k.l;
                    f.wa();
                    return k.return(h)
                })
            })
        },
        ZE = function(a, b, c, d, e) {
            return A(a, function g() {
                var h, k, l, m, n;
                return B(g, function(p) {
                    return 1 == p.j ? (h = new ce, k = new lD(b), W(h, k), l = new xD(d.P, k.o), W(h, l), m = new vD(c, Jv(d.T), e, l.m), W(h, m), n = new yD(c, d, document, l.o), W(h, n), ee(h), C(p, n.m, 2)) : p.return(m.m.promise)
                })
            })
        },
        $E = function(a, b, c, d) {
            return A(a, function f() {
                var g, h;
                return B(f, function(k) {
                    g = new ce;
                    h = new iD(c, window, b, d);
                    W(g, h);
                    ee(g);
                    return k.return(h.m.promise)
                })
            })
        };
    var bF = function(a, b) {
        Y.call(this, 700);
        this.Pa = a;
        this.sa = b;
        this.Y = [];
        this.va = aF(this, function(c) {
            return I(c, 6)
        });
        this.Na = aF(this, function(c) {
            return I(c, 7)
        });
        aF(this, function(c) {
            return x(c, 8)
        });
        this.B = aF(this, function(c) {
            return I(c, 10)
        });
        this.na = aF(this, function(c) {
            return I(c, 15)
        });
        this.K = aF(this, function(c) {
            return I(c, 34)
        });
        this.m = aF(this, function(c) {
            return M(c, Zw, 43)
        });
        this.o = aF(this, function(c) {
            return M(c, Jx, 41)
        });
        this.F = aF(this, function(c) {
            return x(c, 9)
        });
        this.ca = aF(this, function(c) {
            return x(c, 12)
        });
        this.ja = aF(this, function(c) {
            return M(c, xs, 50)
        });
        this.W = aF(this, function(c) {
            return M(c, Ow, 48)
        });
        this.O = aF(this, function(c) {
            return M(c, Mw, 39)
        });
        this.ma = aF(this, function(c) {
            return I(c, 36)
        });
        this.Ka = aF(this, function(c) {
            return x(c, 13)
        });
        this.Ha = aF(this, function(c) {
            return x(c, 3)
        });
        this.aa = aF(this, function(c) {
            return I(c, 49)
        });
        this.La = aF(this, function(c) {
            return I(c, 29)
        });
        this.Ma = aF(this, function(c) {
            return I(c, 30)
        });
        this.Ga = aF(this, function(c) {
            return M(c, ax, 51)
        });
        this.ga = aF(this, function(c) {
            return x(c, 52)
        });
        this.la = aF(this, function() {
            return "encrypted_url"
        });
        this.oa = aF(this, function(c) {
            return (c = M(c, Yw, 54)) ? L(c, Ww, 1).filter(function(d) {
                I(d, 1) || Rd(32, "");
                return !!I(d, 1)
            }).map(function(d) {
                var e = I(d, 2);
                return {
                    xa: (0, H.U)(I(d, 1)),
                    Jc: e && (_.r(e, "startsWith").call(e, window.location.protocol) || _.r(e, "startsWith").call(e, "data:") && 40 >= e.length) ? $a(e) : void 0
                }
            }) : []
        });
        this.Ia = aF(this, function(c) {
            return M(c, cx, 57)
        });
        this.Ja = aF(this, function(c) {
            return M(c, yx, 55)
        });
        this.$ = aF(this, function(c) {
            return M(c, Fx, 58)
        });
        this.Oa = aF(this, function(c) {
            var d, e;
            return null !== (e = null === (d = M(c, $w, 56)) || void 0 === d ? void 0 : I(d, 1)) && void 0 !== e ? e : null
        });
        this.I = this.l()
    };
    _.N(bF, Y);
    var aF = function(a, b) {
        var c = Y.prototype.l.call(a);
        a.Y.push({
            C: c,
            cc: b
        });
        return c
    };
    bF.prototype.j = function() {
        for (var a = this.Pa, b = _.G(this.Y), c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            var d = c.cc;
            c.C.l(d(a))
        }
        0 === this.sa.kind || 1 === this.sa.kind && this.sa.url ? this.I.j(this.sa) : this.I.j({
            kind: 0,
            ra: I(a, 4) || ""
        })
    };
    var cF = function() {
            this.j = new D.Map
        },
        dF = function(a, b) {
            var c;
            b && (null === (c = a.j.get(b)) || void 0 === c ? void 0 : c.wa(), a.j.delete(b))
        },
        fF = function(a, b, c, d, e, f, g, h, k, l, m) {
            dF(a, b);
            Pq(b, Vq, eF);
            var n = new ce,
                p = Bs(!0, window),
                u = e.T,
                t = e.P[b.j],
                y = new ZD(window);
            W(n, y);
            f = new bF(f, g);
            W(n, f);
            var z = new UD(t, f.va, f.Na, f.I, f.Oa);
            W(n, z);
            g = new yt;
            g.j(k);
            var K = new Et;
            K.notify();
            var Q = new RC(window.top, g, K);
            W(n, Q);
            g = new aE(Ib(b.getAdUnitPath()), f.oa, Q.C);
            W(n, g);
            var R = new iE;
            W(n, R);
            K = new WD(kd(t), p.height, f.O, z.F);
            W(n, K);
            g = new zE(b, Vc(b, h), b.j, Tv(b), h, kd(t), c, z.m, K.C);
            W(n, g);
            var X = new gB(z.o, f.m, f.o, f.F, f.ca);
            W(n, X);
            var ua = new sE(u, t, window, f.m, f.o, f.ca);
            W(n, ua);
            var ja = new lE(M(u, Pu, 5), f.La);
            W(n, ja);
            X = new vE(b.getAdUnitPath(), t, p.width, window, f.ma, z.m, K.C, X.m, g.C);
            W(n, X);
            K = new XD(b, u, t, kd(t), h, c, g.C, ua.C, X.m, f.B);
            W(n, K);
            var xa = new CE(K.C);
            W(n, xa);
            xa = new pE(b, p, c, R.C, xa.C, ja.m);
            W(n, xa);
            R = new $D(window, g.C);
            W(n, R);
            ja = new mE(xa.C, K.C, f.Ma, ja.m);
            W(n, ja);
            p = new SD(h, b, t, p, f.B, g.C, K.C, X.m, X.B, R.C, f.K);
            W(n, p);
            R = new FE(f.$);
            W(n, R);
            R = new HE(f.$, R.C, X.F);
            W(n, R);
            ua = new rE(ua.C, R.C);
            W(n, ua);
            u = new uE(u, t, ua.C, f.m, f.F, f.Ka);
            W(n, u);
            xa = new DE(window, f.la, y.C);
            W(n, xa);
            l = new tE(b, e, c, k, l, f.F, f.ga);
            W(n, l);
            k = new EE(f.Ia, f.na);
            W(n, k);
            var nb = new KE(f.Ja, K.C);
            W(n, nb);
            var hb = new cE(h);
            W(n, hb);
            k = new CC(kd(t), f.O, f.W);
            W(n, k);
            z = new PD(b, c, e, m, window, R.C, l.C, ja.C, g.C, K.C, X.m, ua.C, f.o, f.K, f.B, u.C, f.F, f.Ha, f.aa, f.ga, p.C, xa.C, nb.C, hb.C, k.C, z.B);
            W(n, z);
            l = new xC(c, kd(t), b, window, f.O, z.m, g.C, k.C);
            W(n, l);
            e = new zC(b, kd(t), e.Za, f.W, z.m, g.C, Q.C, k.C);
            W(n, e);
            e = new eB(b, window, f.m, z.m, z.o);
            W(n, e);
            e = new TD(window, b, qd(), f.ja, z.m);
            W(n, e);
            t = new NC(b, kd(t), m, window, z.m, g.C);
            W(n, t);
            var vb = new LE(b, m);
            t = function(ob, Gd) {
                return void ME(vb, ob, Gd)
            };
            h = new fE(b, z.m, h, m);
            W(n, h);
            d = new oE(lu(c, b), d, f.m, z.m, t);
            W(n, d);
            c = new RD(lu(c, b), window, window.top, z.m, y.C);
            W(n, c);
            c = new aB(b, f.K, f.B, f.o, f.m, f.aa, z.m, K.C, z.o);
            W(n, c);
            _.Lq(n, new hB(t, b, f.o, f.m));
            c = new eE(window, f.Ga, z.m, K.C, g.C);
            W(n, c);
            a.j.set(b, n);
            _.Bg(b, function() {
                return void dF(a, b)
            });
            ee(n)
        },
        eF = _.Fi(function() {
            return void Xv("gpt-first-ad-render")
        });
    var gF = function(a, b, c) {
            this.url = a;
            this.l = b;
            this.withCredentials = c;
            this.m = 0;
            this.A = !1;
            this.j = new XMLHttpRequest
        },
        jF = function(a) {
            a.j.open("GET", a.url);
            a.j.withCredentials = a.withCredentials;
            JA(a.j);
            a.j.onreadystatechange = function() {
                hF(a, !1)
            };
            a.j.onload = function() {
                hF(a, !0)
            };
            a.j.onerror = function() {
                iF(a.l, Error("XHR error"))
            };
            a.j.send()
        },
        hF = function(a, b) {
            try {
                if (3 === a.j.readyState || 4 === a.j.readyState)
                    if (300 <= a.j.status || 200 > a.j.status && _.v(Yn)) a.A || iF(a.l, Error("xhr_err-" + a.j.status)), a.A = !0;
                    else {
                        var c = a.j.responseText.substr(a.m);
                        if (c) {
                            var d = a.l;
                            if (c)
                                if (1 !== d.state && 2 !== d.state) iF(d, Error("state err: (" + ([d.state, d.j.length].join() + ")")));
                                else {
                                    d.j && (c = d.j + c);
                                    var e = 0,
                                        f = !1;
                                    do {
                                        var g = c.indexOf("\n", e);
                                        f = -1 !== g;
                                        if (!f) break;
                                        var h = d,
                                            k = c.substr(e, g - e);
                                        if (1 === h.state) h.l = k, ++h.A, h.state = 2;
                                        else {
                                            try {
                                                h.H(h.A, h.l, {
                                                    kind: 0,
                                                    ra: rm(k)
                                                }), h.l = ""
                                            } catch (m) {}
                                            h.state = 1
                                        }
                                        e = g + 1
                                    } while (f && e < c.length);
                                    d.j = c.substr(e)
                                }
                        }
                        a.m = a.j.responseText.length;
                        if (b && 4 === a.j.readyState) {
                            var l = a.l;
                            1 !== l.state || l.j ? iF(l, Error("state err (" + ([l.state, l.j.length].join() + ")"))) : (l.state = 3, l.m())
                        }
                    }
            } catch (m) {
                iF(a.l, m)
            }
        },
        kF = function(a, b, c) {
            jF(new gF(a, b, void 0 === c ? !0 : c))
        };
    var lF = function(a, b, c) {
            this.H = a;
            this.D = b;
            this.m = c;
            this.l = "";
            this.A = -1;
            this.state = 1;
            this.j = ""
        },
        iF = function(a, b) {
            a.state = 4;
            try {
                a.D(b)
            } catch (c) {}
        };
    var mF = function(a, b) {
            a.length && (a = a[0], $p(Kb.N(), "3", I(b.P[a.j], 20)))
        },
        nF = function(a) {
            a = a instanceof Error ? a : Error();
            a.message = a.message || "strm_err";
            Vb(289, a, !0)
        },
        oF = function(a, b) {
            if (_.v(to)) return !1;
            a = x(a, 11);
            null == a && (a = x(b, 10));
            return !!a
        },
        pF = function(a) {
            var b = Dg(),
                c = a.replace("googletag.", "");
            return new D.Promise(function(d) {
                Object.defineProperty(b, c, {
                    value: function(e, f) {
                        var g = d;
                        d = null;
                        g && g({
                            Wb: e,
                            lc: f
                        })
                    },
                    writable: !1,
                    enumerable: !1
                })
            })
        },
        qF = null,
        rF = function(a) {
            var b = cu.N();
            var c = qF = qF || new ht;
            this.j = b;
            this.l = c;
            this.F = a;
            this.fa = _.qh(Bv);
            this.A = new D.Map;
            this.B = Yf(this.B);
            this.D = kc(291, this.D);
            this.K = Ob("google_nofetch");
            this.O = Ob("google_norender");
            this.H = new VA;
            this.ba = 0;
            this.G = {};
            this.o = {};
            this.I = new cF;
            this.m = new VE;
            this.V = _.Fi(function() {
                return void Xv("gpt-first-ad-request")
            })
        },
        sF = function(a, b, c, d, e) {
            if (e = e.P[b.j]) null != I(d, 23) && I(d, 23).forEach(function(f) {
                Cv(a.fa, f);
                var g = a.fa;
                g.j[f] = g.j[f] || new D.Set;
                g.j[f].add(b)
            }), L(d, ys, 14).length && jt(a.l, L(d, ys, 14)[0], c), Rv(e, M(d, xs, 50), !!x(d, 11)) && (_.iu(a.j, b), Qv(M(d, xs, 50)) && eu(a.j, b, function() {
                _.ju(a.j, b)
            }))
        };
    rF.prototype.B = function(a, b) {
        var c = this;
        b = void 0 === b ? !1 : b;
        return _.F.IntersectionObserver ? new _.F.IntersectionObserver(function(d, e) {
            return c.D(d, e, b)
        }, {
            rootMargin: a
        }) : new Mg(function(d, e) {
            return c.D(d, e, b)
        }, {
            rootMargin: a
        })
    };
    rF.prototype.D = function(a, b, c) {
        var d = this;
        c = void 0 === c ? !1 : c;
        a.forEach(function(e) {
            if (c || !(0 >= e.intersectionRatio)) {
                b.unobserve(e.target);
                e = e.target.id;
                var f = d.A.get(e);
                f && (f.Yb(), d.A.delete(e))
            }
        })
    };
    var tF = function(a, b, c, d, e, f) {
            var g, h, k, l, m, n, p, u;
            ni(function(t) {
                if (1 == t.j) return g = _.wl(document, "LINK"), nD(g, a), g.resources.add(Ui(c.l)), g.crossOrigin = b ? "use-credentials" : "anonymous", h = document.createElement("script"), wd(h, c.l), document.head.appendChild(g), document.head.appendChild(h), C(t, pF(c.H), 2);
                k = t.l;
                l = k.Wb;
                m = k.lc;
                if (l.length !== m.length) return e(Error("Received " + l.length + " but " + m.length + " metadatas")), t.return();
                for (n = 0; n < l.length; n++) p = l[n], u = m[n], p && g.resources.add(p), d(n, u, {
                    kind: 1,
                    url: p
                });
                f();
                gi(t)
            })
        },
        uF = function(a, b, c, d) {
            var e = new YA;
            a = ++a.ba;
            e.I = a;
            if ((d = Jv(d.T)) && _.v(jp) || !d && _.v(ip)) {
                e.j = "wbn";
                for (var f = Array(36), g = 0, h, k = 0; 36 > k; k++) 8 == k || 13 == k || 18 == k || 23 == k ? f[k] = "-" : 14 == k ? f[k] = "4" : (2 >= g && (g = 33554432 + 16777216 * Math.random() | 0), h = g & 15, g >>= 4, f[k] = mD[19 == k ? h & 3 | 8 : h]);
                e.l = Vi("urn:uuid:" + f.join("").toLowerCase());
                e.H = "googletag.wbn" + a
            } else e.j = "ldjh";
            e.o = d ? "fifs" : "fif";
            e.Ca = c.Ca;
            e.Ya = c.Ya || NaN;
            e.Xa = c.Xa || NaN;
            e.X = b;
            return e
        },
        vF = function(a, b, c, d) {
            var e = b.X,
                f = a.j,
                g = a.l,
                h = Jv(d.T),
                k = a.H.getOseId(),
                l = ku(a.j, b.X);
            a = new ce;
            var m = new uD(window);
            W(a, m);
            var n = new JD(window);
            W(a, n);
            e = new pD(b, e, h, d, Cc(), c, window);
            W(a, e);
            var p = new qD(f);
            W(a, p);
            var u = new KD(!!x(c, 5));
            W(a, u);
            b = new rD(b, h, f, g, c, d, k, l, m.m, n.C, e.m, p.C, u.C);
            W(a, b);
            ee(a);
            return b.m.promise
        },
        wF = function(a, b) {
            var c = !_.v(If);
            ZA(b, Bb(), a.H.getOseId(), ku(a.j, b.X), c ? Zy() : "", c ? $y() : "", c ? az() : "")
        },
        zF = function(a, b, c, d) {
            return xF(a, b, d).then(kc(750, function() {
                return yF(a, b, c, d)
            }))
        },
        xF = function(a, b, c) {
            b = b.X;
            c = M(c.T, Pu, 5) || new Pu;
            c = lg(c);
            if (null == c || !b.every(function(g) {
                    return $c(Vc(g))
                })) return D.Promise.resolve();
            c = a.B(c + "%");
            var d = new ue,
                e = {};
            b = _.G(b);
            for (var f = b.next(); !f.done; e = {
                    hb: e.hb,
                    Ab: e.Ab
                }, f = b.next()) f = f.value, e.Ab = f.j, e.hb = Vc(f), e.hb && (a.A.set(e.Ab, {
                Yb: function() {
                    return void d.resolve()
                },
                Jd: c
            }), c.observe(e.hb), fu(a.j, f, function(g) {
                return function() {
                    AF(a, g.hb, g.Ab)
                }
            }(e)));
            return d.promise
        },
        yF = function(a, b, c, d) {
            var e = b.X;
            if (e.length) return a.A.get(e[0].j) && e.forEach(function(f) {
                var g = f.j;
                f = Vc(f);
                AF(a, f, g)
            }), _.v(co) ? XE(a.m, b.X, a.j, b, b.j, b.l, c, d, a.l, a.H, Jv(d.T), a.H.getOseId(), ku(a.j, b.X), a.F) : vF(a, b, c, d).then(function(f) {
                if (f && (BF(a, f, b, c, d), $u(b.X), "wbn" !== b.j && (f = d.T.ya(), f = !_.v(Yo) && (!f || f && (! of (f, 4) || !x(f, 4))), QC(_.qh(OC), window, Nv(a.l, c)), f && QC(_.qh(OC), window)), _.v(jo))) {
                    f = _.G(b.X);
                    for (var g = f.next(); !g.done; g = f.next()) {
                        var h = void 0;
                        switch (null == (h = d.P[g.value.j]) ? void 0 : kd(h)) {
                            case 2:
                            case 3:
                            case 5:
                                _.uC.N().load(_.BC)
                        }
                    }
                }
            })
        };
    rF.prototype.refresh = function(a, b, c) {
        var d = this;
        ZE(this.m, a, this.j, c, this.K).then(kc(872, function(e) {
            if (null != e && e.length) {
                e = _.G(e);
                for (var f = e.next(); !f.done; f = e.next()) $E(d.m, f.value, c, d.l).then(kc(907, function(g) {
                    if (g) {
                        var h = g.da;
                        g = uF(d, g.X, b, c);
                        _.v(bo) ? CF(d, g, h, c, document) : DF(d, g, h, c)
                    }
                }))
            }
        }))
    };
    var EF = function(a, b, c, d) {
            var e = void 0 === e ? window : e;
            for (var f = _.v(co), g = _.G(b), h = g.next(); !h.done; h = g.next()) h = h.value, f ? ou(a.j, h) : dF(a.I, h);
            b = _.G(b);
            for (h = b.next(); !h.done; h = b.next()) f = h.value, g = d[f.j], oF(g, c) && bg(f, e.document, g, c), mu(a.j, f);
            return !0
        },
        AF = function(a, b, c) {
            if (b) {
                var d = a.A.get(c);
                d && (d.Jd.unobserve(b), a.A.delete(c))
            }
        },
        CF = function(a, b, c, d, e) {
            if (b.X.length) {
                for (var f = _.G(b.X), g = f.next(); !g.done; g = f.next()) pB(e, g.value, d);
                zF(a, b, c, d).then(kc(751, function() {
                    for (var h = _.G(b.X), k = h.next(); !k.done; k = h.next()) k = k.value, FF(a, k, d.T, d.P[k.j])
                }))
            } else D.Promise.resolve()
        },
        DF = function(a, b, c, d) {
            var e = document;
            e = void 0 === e ? document : e;
            var f = tc(c);
            _.qh(Zv).l = f;
            $v(_.qh(Zv), it(a.l, c));
            sq(20);
            sq(2);
            _.v(np) || (ke(Dg(), f, function(g, h) {
                Ub(g, h);
                var k, l;
                null == (k = window.console) || null == (l = k.error) || l.call(k, h)
            }), le(Dg(), hg(lp).map(function(g) {
                return {
                    xa: g
                }
            }), f, function(g, h) {
                Ub(g, h);
                var k, l;
                null == (k = window.console) || null == (l = k.error) || l.call(k, h)
            }));
            CF(a, b, c, d, e)
        },
        FF = function(a, b, c, d) {
            var e = void 0 === e ? window : e;
            oF(d, c) && !a.j.ab(b) && bg(b, e.document, d, c)
        },
        BF = function(a, b, c, d, e) {
            var f = void 0 === f ? _.F.document : f;
            var g = void 0 === g ? nF : g;
            var h = c.X,
                k = c.I;
            a.o[k] = h.slice();
            b = Lb(b);
            mF(h, e);
            var l, m, n = !(null != (m = null == (l = Uu(e.T)) ? void 0 : x(l, 9)) && m) && !!x(d, 5);
            l = kc(646, function(p, u, t) {
                var y, z = function() {
                    return GF(a, k, d, e, p, u, t, null != (y = c.G) ? y : "", f)
                };
                0 < p && _.v(En) ? setTimeout(z, 0) : z()
            });
            m = kc(647, function() {
                var p = function() {
                    for (var u = a.o[k] || [], t = 0; t < u.length; ++t)
                        if (u[t]) {
                            var y = new Ix;
                            y = E(y, 8, !0);
                            y = '{"empty":' + al(y) + "}";
                            GF(a, k, d, e, t, y, {
                                kind: 0,
                                ra: ""
                            })
                        }
                    delete a.o[k];
                    u = window;
                    t = new Jh;
                    y = new Kh;
                    var z = String(zb(window));
                    y = Ab(y, 1, z, "");
                    Ce(u, Hh(Ih(Fb(Db(t, 5, y), 4, 1), 2), Pb()))
                };
                _.v(En) ? setTimeout(p, 0) : p()
            });
            g = kc(289, g);
            "wbn" === c.j ? tF(b, n, c, l, g, m) : kF(b, new lF(l, g, m), n);
            a.V();
            h = _.G(h);
            for (g = h.next(); !g.done; g = h.next()) g = g.value, n = I(e.P[g.j], 20), l = kc(643, HF(a, g, b, e)), g.dispatchEvent(Uq, 808, {
                Dc: l,
                Rc: n
            }), a.F.dispatchEvent("slotRequested", 705, new rw(g, "publisher_ads"))
        },
        HF = function(a, b, c, d) {
            if (Jv(d.T)) {
                var e = uF(a, [b], {
                    Ca: 1
                }, d);
                wF(a, e);
                var f = new vB([b], _.v(Ln), a.j, a.l, e, new gt, d, !0);
                return Wc(function() {
                    return Lb(yB(f))
                })
            }
            return function() {
                return c
            }
        },
        GF = function(a, b, c, d, e, f, g, h, k) {
            k = void 0 === k ? document : k;
            var l, m, n, p, u, t, y;
            return ni(function(z) {
                switch (z.j) {
                    case 1:
                        l = a.o[b] || [];
                        m = l[e];
                        n = null;
                        if (_.v(Zn)) {
                            if (!m) return Ub(646, Error("missing slot")), z.return();
                            l[e] = null;
                            u = I(d.P[m.j], 20);
                            a.G[b] || (a.G[b] = !0, $p(Kb.N(), "4", u));
                            return C(z, YE(a.m, m, f), 5)
                        }
                        l[e] = null;
                        return m ? C(z, YE(a.m, m, f), 4) : (Ub(646, Error("missing slot")), z.return());
                    case 4:
                        n = z.l;
                        p = I(d.P[m.j], 20);
                        a.G[b] || (a.G[b] = !0, $p(Kb.N(), "4", p));
                        z.j = 3;
                        break;
                    case 5:
                        n = z.l;
                    case 3:
                        if (!n) return Ub(646, Error("invalid response: " + f)), z.return();
                        sF(a, m, c, n, d);
                        if (m.A) return z.return();
                        if (t = x(n, 8) || a.O) {
                            var K = k,
                                Q = null != (y = I(n, 34)) ? y : "",
                                R = Vc(m, K);
                            R && ye(R, _.F, Q, !0);
                            $p(Kb.N(), "5", I(d.P[m.j], 20));
                            m.dispatchEvent(Tq, 801, {
                                ac: null,
                                isBackfill: !1
                            });
                            Q = _.v(Xn);
                            R = d.P[m.j];
                            var X = d.T;
                            if (_.hu(a.j, m)) {
                                if (Q) {
                                    var ua = {};
                                    ua[m.j] = R;
                                    EF(a, [m], X, ua)
                                }
                                if (Q || !Wv(m, K)) {
                                    var ja;
                                    (null != (ja = x(R, 10)) ? ja : x(X, 11)) && !_.v(so) && bg(m, K, R, X)
                                }
                            }
                            m.dispatchEvent(Vq, 825, {
                                isEmpty: !0,
                                slotContentChanged: Q
                            })
                        } else fF(a.I, m, a.j, a.H, d, n, g, k, c, a.l, a.F);
                        gi(z)
                }
            })
        };
    var IF = function(a) {
            this.pubads = a;
            this.j = new D.Set;
            this.l = {}
        },
        JF = function(a, b, c) {
            if (x(b.T, 4)) return [];
            var d;
            return !x(b.T, 6) || (null == (d = b.P[c.j]) ? 0 : x(d, 17)) ? (a.j.add(c), _.Bg(c, function() {
                return void a.j.delete(c)
            }), [c]) : a.pubads.j.filter(function(e) {
                if (a.j.has(e)) return !1;
                a.j.add(e);
                _.Bg(e, function() {
                    return void a.j.delete(e)
                });
                return !0
            })
        };
    IF.prototype.display = function(a, b) {
        var c = JF(this, a, b);
        KF(this.pubads, c, a, {
            Ca: 1
        });
        a = b.getAdUnitPath();
        if ((b = this.l[a]) && !_.v(Jn)) {
            b = _.G(b);
            for (c = b.next(); !c.done; c = b.next()) c = c.value, KF(this.pubads, c.X, c.L, c.Md);
            delete this.l[a]
        }
    };
    IF.prototype.refresh = function(a, b, c) {
        var d = this,
            e = b[0],
            f, g = null != (f = null == e ? void 0 : e.j) ? f : "";
        if (_.v(Jn)) LF(this.pubads, Or(g), e), ww(this.pubads, kc(690, function() {
            for (var h = {}, k = _.G(b), l = k.next(); !l.done; h = {
                    ib: h.ib
                }, l = k.next()) h.ib = l.value, d.j.add(h.ib), _.Bg(h.ib, function(m) {
                return function() {
                    return void d.j.delete(m.ib)
                }
            }(h));
            KF(d.pubads, b, a, c)
        }));
        else if (this.pubads.l) {
            e = {};
            f = _.G(b);
            for (g = f.next(); !g.done; e = {
                    jb: e.jb
                }, g = f.next()) e.jb = g.value, this.j.add(e.jb), _.Bg(e.jb, function(h) {
                return function() {
                    return void d.j.delete(h.jb)
                }
            }(e));
            KF(this.pubads, b, a, c)
        } else b.length && x(a.T, 6) ? (LF(this.pubads, Or(g), e), e = e.getAdUnitPath(), f = this.l[e] || [], f.push({
            X: b,
            L: a,
            Md: c
        }), this.l[e] = f) : LF(this.pubads, Mr(g), e)
    };
    var rh = function() {
        uw.call(this);
        _.v(Ep) && new jC(this);
        this.o = new IF(this);
        this.G = new rF(this)
    };
    _.N(rh, uw);
    aa = rh.prototype;
    aa.display = function(a, b, c, d) {
        c = void 0 === c ? "" : c;
        d = void 0 === d ? "" : d;
        var e = "";
        if (c)
            if (_.ia(c) && 1 == c.nodeType) {
                var f = c;
                e = f.id
            } else e = c;
        vw(this);
        var g = mh(a, b, e),
            h = g.slotId;
        g = g.Wa;
        h && g ? (f && !e && (f.id = h.j), this.Fa(h, g), E(g, 7, d), Aw(f || h.j)) : this.log.M(nh("PubAdsService.display", [a, b, c]))
    };
    aa.ic = function() {
        var a = this,
            b = zh.N().j;
        if (x(b, 6) || _.v(Qo))
            for (var c = _.G(this.j), d = c.next(); !d.done; d = c.next()) MF(this, d.value);
        NF(this, b);
        Pq(this, "rewardedSlotClosed", function(e) {
            var f = e.detail.slot;
            e = _.r(a.j, "find").call(a.j, function(g) {
                return f === g.l
            });
            EF(a.G, [e], zh.N().j, Oe())
        });
        ah()
    };
    aa.getName = function() {
        return "publisher_ads"
    };
    aa.Fa = function(a, b) {
        var c = this;
        x(b, 17) || MF(this, a);
        this.dispatchEvent(Wq, 724, {
            xc: a.j,
            P: b
        });
        Pq(a, Vq, function(d) {
            var e = d.detail;
            d = e.size;
            var f = e.slotContentChanged,
                g = e.isEmpty;
            e = new hw(a, "publisher_ads");
            g && (e.isEmpty = g);
            f && (e.slotContentChanged = f);
            f = a.l.getResponseInformation();
            d && f && (e.size = [d.width, d.height], e.sourceAgnosticCreativeId = f.sourceAgnosticCreativeId, e.sourceAgnosticLineItemId = f.sourceAgnosticLineItemId, e.isBackfill = f.isBackfill, e.creativeId = f.creativeId, e.lineItemId = f.lineItemId, e.creativeTemplateId = f.creativeTemplateId, e.advertiserId = f.advertiserId, e.campaignId = f.campaignId, e.yieldGroupIds = f.yieldGroupIds, e.companyIds = f.companyIds);
            c.dispatchEvent("slotRenderEnded", 708, e)
        });
        Pq(a, Sq, function() {
            return void c.dispatchEvent("slotResponseReceived", 709, new sw(a, c.getName()))
        });
        Pq(a, Qq, function() {
            var d = zh.N().j;
            d = Kv(d, Oe());
            c.G.refresh([a], {
                Ca: 2
            }, d)
        });
        uw.prototype.Fa.call(this, a, b)
    };
    aa.uc = function(a, b) {
        vw(this);
        MF(this, b);
        this.log.info(Ir());
        var c = x(a.T, 6);
        if (c || !cu.N().ab(b)) c && (c = Vc(b, document)) && b.dispatchEvent(Rq, 778, c), x(a.T, 4) && FF(this.G, b, a.T, a.P[b.j]), this.o.display(a, b)
    };
    var MF = function(a, b) {
            a.l && gu(cu.N(), b)
        },
        OF = function(a, b, c) {
            var d = void 0 === d ? document : d;
            var e;
            null != (e = c.P[b.j]) && E(e, 19, !0);
            Bj(d, new _.xj('<div id="' + Fj(b.j) + '"></div>', null, _.wj));
            Vc(b, d) ? (vw(a), gu(cu.N(), b), a.o.display(c, b)) : mc("gpt_pb_write", function(f) {
                Zb(f)
            })
        };
    rh.prototype.refresh = function(a, b, c) {
        var d = b ? PF(this, b) : this.j;
        if (!d.length) return !1;
        if (_.v(In)) {
            vw(this);
            b = _.G(b);
            for (var e = b.next(); !e.done; e = b.next()) e = e.value, this.Fa(e, a.P[e.j])
        }
        this.o.refresh(a, d, c || {
            Ca: 2
        });
        return !0
    };
    var KF = function(a, b, c, d) {
            a.log.info(Pr());
            if (QF(a, b, d, c) && 1 !== d.Ca)
                for (b = _.G(b), d = b.next(); !d.done; d = b.next()) d = d.value.j, a.dispatchEvent(Xq, 725, {
                    xc: d,
                    P: c.P[d]
                })
        },
        QF = function(a, b, c, d) {
            b = b.filter(function(e) {
                return _.hu(cu.N(), e)
            });
            if (!b.length) return null;
            a.G.refresh(b, c, d);
            return b
        },
        RF = function(a, b) {
            return a.l ? {
                vid: I(b, 22) || "",
                cmsid: I(b, 23) || ""
            } : null
        },
        NF = function(a, b) {
            x(b, 21) && a.l && E(b, 29, vm())
        },
        SF = function(a, b, c, d) {
            for (var e = _.G(b), f = e.next(); !f.done; f = e.next()) f = f.value, du(cu.N(), f);
            return EF(a.G, b, c, d)
        },
        TF = function(a, b, c, d) {
            if (!a.l) return a.log.M(Nr(), d[0]), !1;
            var e = PF(a, d);
            if (!e.length) return a.log.M(nh("PubAdsService.clear", [d].filter(function(f) {
                return void 0 !== f
            }))), !1;
            a.log.info(Qr());
            return SF(a, e, b, c)
        },
        PF = function(a, b) {
            return b.filter(function(c, d) {
                return c.A ? (a.log.M(Sr(String(d))), !1) : !0
            })
        };
    rh.prototype.destroySlots = function(a, b) {
        a = uw.prototype.destroySlots.call(this, a, b);
        if (a.length && this.l) {
            var c, d = null != (c = null == b ? void 0 : b.T) ? c : zh.N().j,
                e;
            b = null != (e = null == b ? void 0 : b.P) ? e : Oe();
            SF(this, a, d, b)
        }
        return a
    };
    var LF = function(a, b, c) {
        a.log.M(b, c)
    };
    var UF = function() {
        uw.apply(this, arguments)
    };
    _.N(UF, uw);
    UF.N = function() {
        throw Error("Must be overridden");
    };
    var eh = function() {
        UF.call(this);
        this.ads = new D.Map;
        this.G = {};
        this.Va = !1;
        this.I = this.o = void 0;
        this.V = this.K = !1;
        _.qh(Zv).A = !0
    };
    _.N(eh, UF);
    aa = eh.prototype;
    aa.set = function(a, b) {
        "string" === typeof a && a.length ? (this.G[a] = b, this.log.info(Dr(a, String(b), this.getName()))) : this.log.M(nh("CompanionAdsService.set", [a, b]));
        return this
    };
    aa.get = function(a) {
        var b;
        return null !== (b = this.G[a]) && void 0 !== b ? b : null
    };
    aa.display = function(a, b, c, d) {
        c = void 0 === c ? "" : c;
        d = void 0 === d ? "" : d;
        vw(this);
        b = mh(a, b, c);
        a = b.slotId;
        b = b.Wa;
        this.Fa((0, H.U)(a), (0, H.U)(b));
        E(b, 7, d);
        Aw(a.j)
    };
    aa.Fa = function(a, b) {
        var c = this;
        Pq(a, Sq, function(d) {
            x(d.detail, 11) && (VF(c, a).Ld = !0)
        });
        UF.prototype.Fa.call(this, a, b)
    };
    aa.ic = function() {
        WF(this)
    };
    var XF = function(a) {
            if (_.v(Hn) || !_.qh(rh).l) return !1;
            var b = _.qh(rh).j;
            a = a.j;
            return b.length !== a.length ? !1 : !a.some(function(c) {
                return !_.r(b, "includes").call(b, c)
            })
        },
        YF = function(a, b) {
            (b = void 0 === b ? "" : b) && !a.V && mc("ima_sdk_v", function(d) {
                a.V = !0;
                q(d, "v", b)
            });
            var c = zh.N().j;
            return String(I(c, 26))
        },
        ZF = function(a, b) {
            var c = zh.N().j,
                d = Oe();
            if (_.qh(rh).l) {
                var e = {
                    Ca: 3
                };
                a.o && (e.Xa = a.o);
                a.I && (e.Ya = a.I);
                a = null !== b && void 0 !== b ? b : a.j;
                c = Kv(c, d);
                e.Xa && "number" !== typeof e.Xa || e.Ya && "number" !== typeof e.Ya || _.qh(rh).refresh(c, a, e)
            } else b && b[0] && a.log.error(Mr(b[0].j))
        },
        $F = function(a, b) {
            var c;
            return _.qh(rh).l && !(null === (c = a.ads.get(b)) || void 0 === c || !c.Ld)
        },
        aG = function(a, b) {
            return a.j.filter(function(c) {
                return _.r(b, "includes").call(b, c.toString())
            })
        };
    eh.prototype.getName = function() {
        return "companion_ads"
    };
    var WF = function(a) {
            _.v(Hn) || rc(70, function() {
                if (!a.K) {
                    var b = document;
                    a.log.info(Gr("GPT CompanionAds"));
                    Hl(b, Vi(eb($a("https://pagead2.googlesyndication.com/pagead/show_companion_ad.js")).toString()));
                    a.K = !0
                }
            }, !0)
        },
        cG = function(a, b) {
            if (!a.l || $F(a, b)) return !1;
            var c = Vc(b);
            if (!c) return !1;
            var d = (a.ads.get(b) || {}).content;
            if (void 0 === d) return !1;
            a.ads.delete(b);
            il(c, Va(d));
            d = c = null;
            var e = Zu(zh.N(), b.j);
            e && 1 === L(e, Nc, 5).length && of (L(e, Nc, 5)[0], 1) && of (L(e, Nc, 5)[0], 2) && (c = I(L(e, Nc, 5)[0], 1), d = I(L(e, Nc, 5)[0], 2));
            bG(a, b, c, d);
            return !0
        };
    eh.prototype.uc = function(a, b) {
        _.v(Hn) || cG(this, b)
    };
    var dG = function(a, b, c) {
            if (!_.v(Hn)) return b && c && "string" === typeof c ? (VF(a, b).content = c, cG(a, b)) : !1
        },
        bG = function(a, b, c, d) {
            b = new hw(b, a.getName());
            null != c && null != d && (b.size = [c, d]);
            a.dispatchEvent("slotRenderEnded", 67, b)
        },
        VF = function(a, b) {
            var c = a.ads.get(b);
            c || (c = {}, a.ads.set(b, c), _.Bg(b, function() {
                return a.ads.delete(b)
            }));
            return c
        };
    ui(eh);
    var eG = function() {
        uw.apply(this, arguments)
    };
    _.N(eG, uw);
    eG.N = function() {
        throw Error("Must be overridden");
    };
    var hh = function() {
        eG.apply(this, arguments);
        this.G = new D.Map
    };
    _.N(hh, eG);
    hh.prototype.getName = function() {
        return "content"
    };
    hh.prototype.display = function(a, b, c, d) {
        c = void 0 === c ? "" : c;
        d = void 0 === d ? "" : d;
        vw(this);
        b = mh(a, b, c);
        a = b.slotId;
        b = b.Wa;
        this.Fa((0, H.U)(a), (0, H.U)(b));
        E(b, 7, d);
        Aw(a.j)
    };
    hh.prototype.destroySlots = function(a) {
        a = eG.prototype.destroySlots.call(this, a);
        for (var b = _.G(a), c = b.next(); !c.done; c = b.next()) this.G.delete(c.value);
        return a
    };
    var fG = function(a, b) {
        var c = a.G.get(b),
            d = Vc(b);
        !(c && void 0 !== c.content && d && a.l) || c && c.Qc || (c.Qc = !0, il(d, Va(c.content)), mc("gpt_cont_svc", function(e) {
            var f;
            q(e, "cl", String(null === (f = null === c || void 0 === c ? void 0 : c.content) || void 0 === f ? void 0 : f.length));
            Zb(e, [b.getAdUnitPath()])
        }), a.dispatchEvent("slotRenderEnded", 819, new hw(b, a.getName())))
    };
    hh.prototype.ic = function() {};
    hh.prototype.uc = function(a, b) {
        fG(this, b)
    };
    var gG = function(a, b, c) {
        if (_.r(a.j, "includes").call(a.j, b) && "string" === typeof c && c.length) {
            var d = a.G.get(b);
            d ? d.content = c : a.G.set(b, {
                content: c,
                Qc: void 0
            });
            _.Bg(b, function() {
                return void a.G.delete(b)
            });
            fG(a, b)
        }
    };
    ui(hh);
    var Fh = function(a) {
        P(this, a, null, null)
    };
    _.N(Fh, O);
    var hG = function() {
            this.j = function() {}
        },
        iG = function() {
            var a = _.qh(Zv);
            _.qh(hG).j(a)
        };
    var kG = function() {
            var a = void 0,
                b = 2;
            if (void 0 === a) {
                var c = void 0 === c ? _.F : c;
                a = c.ggeac || (c.ggeac = {})
            }
            b = void 0 === b ? 0 : b;
            c = a;
            var d = b;
            d = void 0 === d ? 0 : d;
            rq(_.qh(qq), c, d);
            jG(a, b);
            b = a;
            _.qh(hG).j = pq(oq, b);
            _.qh(tq).j()
        },
        jG = function(a, b) {
            b = void 0 === b ? 0 : b;
            var c = _.qh(tq);
            c.l = function(d, e) {
                return pq(kq, a, function() {
                    return !1
                })(d, e, b)
            };
            c.A = function(d, e) {
                return pq(lq, a, function() {
                    return 0
                })(d, e, b)
            };
            c.m = function(d, e) {
                return pq(mq, a, function() {
                    return ""
                })(d, e, b)
            };
            c.H = function(d, e) {
                return pq(nq, a, function() {
                    return []
                })(d, e, b)
            };
            c.j = function() {
                pq(hq, a)(b)
            }
        };
    var lG = Oi("https://securepubads.g.doubleclick.net/");
    var mG = function(a) {
        this.push = w(76, function(b) {
            return a.push.apply(a, arguments)
        })
    };
    _.N(mG, su);
    var nG = function(a) {
        var b = this;
        this.addEventListener = w(86, function(c, d) {
            if ("function" !== typeof d) return Cc().M(nh("Service.addEventListener", [c, d])), b;
            var e = dh(c);
            if (!e) return Cc().M(Zr(c)), b;
            a.addEventListener(e, d);
            return b
        });
        this.removeEventListener = w(904, function(c, d) {
            var e = dh(c);
            "function" === typeof d && e ? a.removeEventListener(e, d) : Cc().M(nh("Service.removeEventListener", [c, d]))
        });
        this.getSlots = w(573, function() {
            return a.j.map(function(c) {
                return c.l
            })
        });
        this.getSlotIdMap = w(574, function() {
            for (var c = {}, d = _.G(a.j), e = d.next(); !e.done; e = d.next()) e = e.value, c[e.toString()] = e.l;
            return c
        });
        this.enable = w(87, function() {
            return vw(a)
        }, !0);
        this.getName = w(575, function() {
            return a.getName()
        })
    };
    _.N(nG, su);
    var fh = function(a) {
        nG.call(this, a);
        var b = this;
        this.set = w(576, function(c, d) {
            a.set(c, d);
            return b
        });
        this.get = w(577, function(c) {
            return a.get(c)
        });
        this.getAttributeKeys = w(578, function() {
            return Ll(a.G)
        });
        this.display = w(558, function(c, d, e, f) {
            return a.display(c, d, void 0 === e ? "" : e, void 0 === f ? "" : f)
        });
        this.notifyUnfilledSlots = w(69, function(c) {
            a.Va && ZF(a, aG(a, c))
        });
        this.isRoadblockingSupported = w(111, function() {
            return XF(a)
        });
        this.refreshAllSlots = w(60, function() {
            a.Va && ZF(a)
        });
        this.setVideoSession = w(61, function(c, d, e) {
            a.o = d;
            a.I = e;
            "number" === typeof c && E(zh.N().j, 29, c)
        });
        this.getDisplayAdsCorrelator = w(62, function(c) {
            return YF(a, void 0 === c ? "" : c)
        });
        this.getVideoStreamCorrelator = w(63, function() {
            var c;
            return null !== (c = I(zh.N().j, 29)) && void 0 !== c ? c : 0
        });
        this.isSlotAPersistentRoadblock = w(64, function(c) {
            var d = _.r(a.j, "find").call(a.j, function(e) {
                return e.l === c
            });
            return !!d && $F(a, d)
        });
        this.onImplementationLoaded = w(65, function() {
            a.log.info(Hr("GPT CompanionAds"))
        });
        this.fillSlot = w(66, function(c, d) {
            var e = _.r(a.j, "find").call(a.j, function(f) {
                return f.l === c
            });
            return !!e && dG(a, e, d)
        });
        this.slotRenderEnded = w(67, function(c, d, e) {
            var f = _.r(a.j, "find").call(a.j, function(g) {
                return g.l === c
            });
            return f && bG(a, f, d, e)
        });
        this.setRefreshUnfilledSlots = w(59, function(c) {
            "boolean" === typeof c && (a.Va = c)
        })
    };
    _.N(fh, nG);
    var ih = function(a) {
        nG.call(this, a);
        this.setContent = w(72, function(b, c) {
            var d = _.r(a.j, "find").call(a.j, function(e) {
                return e.l === b
            });
            return !!d && gG(a, d, c)
        });
        this.display = w(562, function(b, c, d, e) {
            return a.display(b, c, void 0 === d ? "" : d, void 0 === e ? "" : e)
        })
    };
    _.N(ih, nG);
    var oG = function() {
        var a = Cc();
        this.getAllEvents = w(563, function() {
            return dD ? hr(a.j).slice() : []
        });
        this.getEventsBySlot = w(565, function(b) {
            return dD ? jr(a, b).slice() : []
        });
        this.getEventsByLevel = w(566, function(b) {
            return dD ? kr(a, b).slice() : []
        })
    };
    _.N(oG, su);
    var oh = function(a, b) {
        Nq.call(this);
        this.j = a;
        this.l = b
    };
    _.N(oh, Nq);
    var kh = function(a, b) {
        var c = this,
            d = Cc(),
            e = a.j,
            f = zh.N().j,
            g = Zu(zh.N(), e.j);
        this.set = w(83, function(h, k) {
            "page_url" === h && k && (h = [wu(vu(new sf, h), [String(k)])], Xk(g, 3, h));
            return c
        });
        this.get = w(84, function(h) {
            if ("page_url" !== h) return null;
            var k;
            return null == (k = (J = L(g, sf, 3), _.r(J, "find")).call(J, function(l) {
                return tf(l) === h
            })) ? void 0 : I(k, 2)[0]
        });
        this.setClickUrl = w(79, function(h) {
            if ("string" !== typeof h) return d.M(nh("Slot.setClickUrl", [h]), e), c;
            E(g, 7, h);
            return c
        });
        this.setTargeting = w(81, function(h, k) {
            Gu(e, g, h, k, d);
            return c
        });
        this.updateTargetingFromMap = w(85, function(h) {
            Hu(e, g, h, d);
            return c
        });
        this.display = w(78, function() {
            OF(b, e, Kv(f, Oe()))
        });
        this.setTagForChildDirectedTreatment = w(80, function(h) {
            if (0 === h || 1 === h) {
                var k = Uu(f) || new Qu;
                E(k, 5, h);
                Db(f, 25, k)
            }
            return c
        });
        this.setForceSafeFrame = w(567, function(h) {
            if ("boolean" !== typeof h) return d.M(nh("PassbackSlot.setForceSafeFrame", [String(h)]), e), c;
            E(g, 12, h);
            return c
        });
        this.setTagForUnderAgeOfConsent = w(448, function(h) {
            if (0 === h || 1 === h) {
                var k = Uu(f) || new Qu;
                E(k, 6, h);
                Db(f, 25, k)
            }
            return c
        })
    };
    _.N(kh, su);
    var pG = function(a, b) {
            var c = b.j;
            return a.map(function(d) {
                return _.r(c, "find").call(c, function(e) {
                    return e.l === d
                })
            }).filter(function(d) {
                return !!d
            })
        },
        qG = function(a) {
            var b = _.qh(Zv),
                c = [];
            a = _.G(a);
            for (var d = a.next(); !d.done; d = a.next()) {
                d = d.value;
                b.H = d;
                var e = sq(9);
                1 === e.length && (c.push(d), c.push(d + "-" + e[0]))
            }
            return c
        },
        rG = _.Fi(function() {
            return nm("google_DisableInitialLoad is deprecated and will be removed. Please use googletag.pubads().isInitialLoadDisabled() instead to check if initial load has been disabled.")
        }),
        sG = function() {
            Object.defineProperty(window, "google_DisableInitialLoad", {
                get: function() {
                    rG();
                    return !0
                },
                set: function() {
                    rG()
                },
                configurable: !0
            })
        },
        sh = function(a) {
            nG.call(this, a);
            var b = this,
                c = Cc(),
                d = zh.N().j,
                e = Oe(),
                f = !1;
            this.setTargeting = w(1, function(g, h) {
                var k = null;
                "string" === typeof h ? k = [h] : Array.isArray(h) ? k = h : qa(h) && (k = _.r(Array, "from").call(Array, h));
                var l = "string" === typeof g && !aj(g);
                k = k && va(k);
                var m, n = null != (m = null == k ? void 0 : k.every(function(p) {
                    return "string" === typeof p
                })) ? m : !1;
                if (!l || !n) return c.M(nh("PubAdsService.setTargeting", [g, h])), b;
                h = (J = L(d, sf, 2), _.r(J, "find")).call(J, function(p) {
                    return tf(p) === g
                });
                if ("gpt-beta" === g) {
                    if (a.l) return c.M(ds(k.join())), b;
                    if (h) return c.M(es(k.join())), b;
                    k = qG(k)
                }
                h ? wu(h, k) : (h = wu(vu(new sf, g), k), wf(d, 2, h, sf));
                c.info(Xr(g, k.join(), a.getName()));
                return b
            });
            this.clearTargeting = w(2, function(g) {
                if (void 0 === g) return Xk(d, 2, []), c.info(bs(a.getName())), b;
                if ("gpt-beta" === g) return c.M(fs(g)), b;
                var h = L(d, sf, 2),
                    k = _.r(h, "findIndex").call(h, function(l) {
                        return tf(l) === g
                    });
                if (0 > k) return c.M(Ur(g, a.getName())), b;
                h.splice(k, 1);
                Xk(d, 2, h);
                c.info(Tr(g, a.getName()));
                return b
            });
            this.getTargeting = w(38, function(g) {
                if ("string" !== typeof g) return c.M(nh("PubAdsService.getTargeting", [g])), [];
                var h = (J = L(d, sf, 2), _.r(J, "find")).call(J, function(k) {
                    return tf(k) === g
                });
                return h ? I(h, 2).slice() : []
            });
            this.getTargetingKeys = w(39, function() {
                return L(d, sf, 2).map(function(g) {
                    return tf(g)
                })
            });
            this.setCategoryExclusion = w(3, function(g) {
                if ("string" !== typeof g || aj(g)) return c.M(nh("PubAdsService.setCategoryExclusion", [g])), b;
                (J = I(d, 3), _.r(J, "includes")).call(J, g) || uf(d, 3, g);
                c.info(Vr(g));
                return b
            });
            this.clearCategoryExclusions = w(4, function() {
                E(d, 3, Ja([]));
                c.info(Wr());
                return b
            });
            this.disableInitialLoad = w(5, function() {
                E(d, 4, !0);
                f || (f = !0, sG())
            });
            this.enableSingleRequest = w(6, function() {
                if (a.l && !x(d, 6)) return c.M(Jr("PubAdsService.enableSingleRequest")), !1;
                c.info(Kr("single request"));
                E(d, 6, !0);
                return !0
            });
            this.enableAsyncRendering = w(7, function() {
                return !0
            });
            this.enableSyncRendering = w(8, function() {
                nm("GPT synchronous rendering is no longer supported, ads will be requested and rendered asynchronously. See https://support.google.com/admanager/answer/9212594 for more details.");
                return !1
            });
            this.enableLazyLoad = w(485, function(g) {
                var h = new Pu;
                E(h, 1, 800);
                E(h, 2, 400);
                E(h, 3, 3);
                if (_.ia(g)) {
                    var k = g.fetchMarginPercent;
                    "number" === typeof k && (0 <= k ? E(h, 1, k) : -1 == k && E(h, 1, void 0));
                    k = g.renderMarginPercent;
                    "number" === typeof k && (0 <= k ? E(h, 2, k) : -1 == k && E(h, 2, void 0));
                    g = g.mobileScaling;
                    "number" === typeof g && (0 < g ? E(h, 3, g) : -1 == g && E(h, 3, 1))
                }
                Db(d, 5, h)
            });
            this.setCentering = w(9, function(g) {
                if (_.v(vo) && "object" === typeof g && g) {
                    var h = g.horizontal;
                    g = g.vertical;
                    "boolean" === typeof h && E(d, 15, h);
                    "boolean" === typeof g && E(d, 31, g)
                } else h = !!g, c.info(Lr("centering", String(h))), E(d, 15, h)
            });
            this.definePassback = w(10, function(g, h) {
                return (g = ph(a, g, h)) && g.Nc
            });
            this.refresh = w(11, function(g, h) {
                h = void 0 === h ? {} : h;
                if (g && !Array.isArray(g) || !_.ia(h) || h.changeCorrelator && "boolean" !== typeof h.changeCorrelator) c.M(nh("PubAdsService.refresh", _.r(Array, "from").call(Array, arguments)));
                else {
                    h && 0 == h.changeCorrelator || E(d, 26, vm());
                    var k = g ? pG(g, a) : a.j;
                    a.refresh(Kv(d, e), k) || c.M(nh("PubAdsService.refresh", _.r(Array, "from").call(Array, arguments)))
                }
            });
            this.enableVideoAds = w(12, function() {
                E(d, 21, !0);
                NF(a, d)
            });
            this.setVideoContent = w(13, function(g, h) {
                E(d, 21, !0);
                E(d, 22, String(g || ""));
                E(d, 23, String(h || ""));
                NF(a, d)
            });
            this.collapseEmptyDivs = w(14, function(g) {
                g = void 0 === g ? !1 : g;
                if ("object" === typeof g && g && _.v(wo)) {
                    if ("boolean" === typeof g.collapseEmpty) {
                        E(d, 11, g.collapseEmpty);
                        var h;
                        Tu(d, null != (h = x(d, 30)) ? h : !0)
                    }
                    if ("boolean" === typeof g.startCollapsed) {
                        E(d, 10, g.startCollapsed);
                        var k;
                        Tu(d, null != (k = x(d, 30)) ? k : !0)
                    }
                    "boolean" === typeof g.allowCollapseOnScreen && Tu(d, !g.allowCollapseOnScreen);
                    return !!x(d, 11)
                }
                E(d, 11, !0);
                var l = !!g;
                E(d, 10, l);
                mc("gpt_ced", function(m) {
                    q(m, "sc", l ? "t" : "f");
                    q(m, "level", "page");
                    Zb(m)
                });
                c.info(Rr(String(l)));
                return !!x(d, 11)
            });
            this.clear = w(15, function(g) {
                if (Array.isArray(g)) return TF(a, d, e, pG(g, a));
                if (void 0 === g) return TF(a, d, e, a.j);
                c.M(nh("PubAdsService.clear", [g]));
                return !1
            });
            this.setLocation = w(16, function(g) {
                if ("string" !== typeof g) return c.M(nh("PubAdsService.setLocation", [g])), b;
                E(d, 8, g);
                return b
            });
            this.setCookieOptions = w(17, function(g) {
                if (0 !== g && 1 !== g) return c.M(Gc("PubadsService.setTagForUnderAgeOfConsent", Ec(g), "0,1")), b;
                E(d, 24, g);
                return b
            });
            this.setTagForChildDirectedTreatment = w(18, function(g) {
                if (1 !== g && 0 !== g) return c.M(Gc("PubadsService.setTagForChildDirectedTreatment", Ec(g), "0,1")), b;
                var h = Uu(d) || new Qu;
                E(h, 5, g);
                Db(d, 25, h);
                return b
            });
            this.clearTagForChildDirectedTreatment = w(19, function() {
                var g = Uu(d);
                if (!g) return b;
                E(g, 5, void 0);
                Db(d, 25, g);
                return b
            });
            this.setPublisherProvidedId = w(20, function(g) {
                g = String(g);
                c.info(Lr("PPID", g));
                E(d, 16, g);
                return b
            });
            this.set = w(21, function(g, h) {
                if ("string" !== typeof g || !g.length || void 0 === pu()[g] || "string" !== typeof h) return c.M(nh("PubAdsService.set", [g, h])), b;
                var k = (J = L(d, sf, 14), _.r(J, "find")).call(J, function(l) {
                    return tf(l) === g
                });
                k ? wu(k, [h]) : (k = vu(new sf, g), uf(k, 2, h), wf(d, 14, k, sf));
                c.info(Dr(g, String(h), a.getName()));
                return b
            });
            this.get = w(22, function(g) {
                if ("string" !== typeof g) return c.M(nh("PubAdsService.get", [g])), null;
                var h = (J = L(d, sf, 14), _.r(J, "find")).call(J, function(k) {
                    return tf(k) === g
                });
                return (h = h && I(h, 2)) ? h[0] : null
            });
            this.getAttributeKeys = w(23, function() {
                return L(d, sf, 14).map(function(g) {
                    return tf(g)
                })
            });
            this.display = w(24, function(g, h, k, l) {
                return void a.display(g, h, void 0 === k ? "" : k, void 0 === l ? "" : l)
            });
            this.updateCorrelator = w(25, function() {
                nm(Eq("update"));
                c.M(is());
                E(d, 26, vm());
                return b
            });
            this.defineOutOfPagePassback = w(35, function(g) {
                g = ph(a, g, [1, 1]);
                if (!g) return null;
                E(g.Wa, 15, 1);
                return g.Nc
            });
            this.setForceSafeFrame = w(36, function(g) {
                if ("boolean" !== typeof g) return c.M(nh("PubAdsService.setForceSafeFrame", [Ec(g)])), b;
                E(d, 13, g);
                return b
            });
            this.setSafeFrameConfig = w(37, function(g) {
                var h = gv(g);
                if (!h) return c.M(nh("PubAdsService.setSafeFrameConfig", [g])), b;
                Db(d, 18, h);
                return b
            });
            this.setRequestNonPersonalizedAds = w(445, function(g) {
                if (0 !== g && 1 !== g) return c.M(Gc("PubAdsService.setRequestNonPersonalizedAds", Ec(g), "0,1")), b;
                var h = Uu(d) || new Qu;
                E(h, 8, !!g);
                Db(d, 25, h);
                return b
            });
            this.setTagForUnderAgeOfConsent = w(447, function(g) {
                g = void 0 === g ? 2 : g;
                if (2 !== g && 0 !== g && 1 !== g) return c.M(Gc("PubadsService.setTagForUnderAgeOfConsent", Ec(g), "2,0,1")), b;
                var h = Uu(d) || new Qu;
                E(h, 6, g);
                Db(d, 25, h);
                return b
            });
            this.getCorrelator = w(27, function() {
                return String(I(d, 26))
            });
            this.getTagSessionCorrelator = w(631, function() {
                return zb(_.F)
            });
            this.getVideoContent = w(30, function() {
                return RF(a, d)
            });
            this.getVersion = w(568, Qb);
            this.forceExperiment = w(569, function(g) {
                g = parseInt(g, 10);
                0 < g && _.qh(qq).j(g)
            });
            this.setCorrelator = w(28, function(g) {
                nm(Eq("set"));
                c.M(hs());
                if (Ds(window)) return b;
                if (!("number" === typeof g && isFinite(g) && 0 == g % 1 && 0 < g)) return c.M(nh("PubadsService.setCorrelator", [Ec(g)])), b;
                E(d, 26, g);
                E(d, 27, !0);
                return b
            });
            this.markAsAmp = w(570, function() {
                window.console && window.console.warn && window.console.warn("googletag.pubads().markAsAmp() is deprecated and ignored.")
            });
            this.isSRA = w(571, function() {
                return !!x(d, 6)
            });
            this.setImaContent = w(328, function(g, h) { of (d, 22) ? (E(d, 21, !0), E(d, 22, String(g || "")), E(d, 23, String(h || "")), NF(a, d)) : (E(d, 21, !0), NF(a, d), "string" === typeof g && E(d, 19, g), "string" === typeof h && E(d, 20, h))
            });
            this.getImaContent = w(329, function() {
                return of(d, 22) ? RF(a, d) : a.l ? {
                    vid: I(d, 19) || "",
                    cmsid: I(d, 20) || ""
                } : null
            });
            this.isInitialLoadDisabled = w(572, function() {
                return !!x(d, 4)
            });
            this.setPrivacySettings = w(648, function(g) {
                if (!_.ia(g)) return c.M(nh("PubAdsService.setPrivacySettings", [g])), b;
                var h = Uu(d) || new Qu,
                    k = g.restrictDataProcessing,
                    l = g.childDirectedTreatment,
                    m = g.underAgeOfConsent,
                    n = g.limitedAds,
                    p = g.nonPersonalizedAds;
                "boolean" === typeof p ? E(h, 8, p) : void 0 !== p && c.M(Dc("PubAdsService.setPrivacySettings", Ec(g), "nonPersonalizedAds", Ec(p)));
                "boolean" === typeof k ? E(h, 1, k) : void 0 !== k && c.M(Dc("PubAdsService.setPrivacySettings", Ec(g), "restrictDataProcessing", Ec(k)));
                "boolean" === typeof n ? E(h, 9, n) : void 0 !== n && c.M(Dc("PubAdsService.setPrivacySettings", Ec(g), "limitedAds", Ec(n)));
                void 0 !== m && (null === m ? E(h, 6, 2) : !1 === m ? E(h, 6, 0) : !0 === m ? E(h, 6, 1) : c.M(Dc("PubAdsService.setPrivacySettings", Ec(g), "underAgeOfConsent", Ec(m))));
                void 0 !== l && (null === l ? E(h, 5, void 0) : !1 === l ? E(h, 5, 0) : !0 === l ? E(h, 5, 1) : c.M(Dc("PubAdsService.setPrivacySettings", Ec(g), "childDirectedTreatment", Ec(l))));
                Db(d, 25, h);
                return b
            })
        };
    _.N(sh, nG);
    var oa = function(a, b) {
            a: {
                b = b[0];a = a[0];
                for (var c = ma, d = Math.min(b.length, a.length), e = 0; e < d; e++) {
                    var f = c(b[e], a[e]);
                    if (0 != f) {
                        b = f;
                        break a
                    }
                }
                b = ma(b.length, a.length)
            }
            return b
        },
        tG = function() {
            var a = this,
                b = [],
                c = [],
                d = Cc();
            this.addSize = kc(88, function(e, f) {
                if (!Ku(e) || !(Ju(f) || Array.isArray(f) && f.every(Ju))) return c.push([e, f]), d.M(nh("SizeMappingBuilder.addSize", [e, f])), a;
                b.push([e, f]);
                return a
            });
            this.build = kc(89, function() {
                if (c.length) return d.M(Br(Ec(c))), null;
                pa(b);
                return b
            })
        };
    var uh = {
            REWARDED: 4,
            TOP_ANCHOR: 2,
            BOTTOM_ANCHOR: 3,
            INTERSTITIAL: 5
        },
        uG = function() {
            var a = Dg();
            a.enums || (a.enums = {
                OutOfPageFormat: uh
            })
        };
    var Ah = new D.Map([
        ["Interstitial", 5],
        ["TopAnchor", 2],
        ["BottomAnchor", 3]
    ]);
    var vG = function() {
        var a = new Tx,
            b = new Ux,
            c = zb(_.F);
        Ab(a, 1, c, 0);
        c = Bb().join();
        Ab(a, 5, c, "");
        Fb(a, 2, 1);
        Db(b, 1, a);
        a = Sx();
        c = _.v(wp);
        a = Wk(a, 8, c);
        c = _.v(xp);
        a = Wk(a, 9, c);
        a = Wk(a, 10, !0);
        c = _.v(Ap);
        a = Wk(a, 13, c);
        c = _.v(Cp);
        a = Wk(a, 14, c);
        a = Wk(a, 16, !0);
        Db(b, 2, a);
        window.google_rum_config = Zk(b)
    };
    var wG = function(a) {
            var b = [];
            b = ud();
            if (a) {
                if (!Array.isArray(a)) return Cc().M(nh("googletag.destroySlots", [a])), !1;
                la(a);
                b = b.filter(function(d) {
                    return _.r(a, "includes").call(a, d.l)
                })
            }
            if (!b.length) return !1;
            var c = zh.N().j;
            c = Kv(c, Oe());
            yw(b, c);
            dw(_.qh(wh), b);
            return !0
        },
        xG = kc(297, function() {
            try {
                for (var a = _.v(Po) ? [].concat(_.ec(document.getElementsByTagName("script"))) : _.r(Array, "from").call(Array, document.getElementsByTagName("script")), b = _.G(a), c = b.next(); !c.done; c = b.next()) {
                    var d = c.value;
                    a = d;
                    var e = d.src;
                    if (e && (-1 != e.indexOf("/tag/js/gpt.js") || -1 != e.indexOf("/tag/js/gpt_mobile.js")) && !a.googletag_executed && d.textContent) {
                        a.googletag_executed = !0;
                        var f = document.createElement("script"),
                            g = Xa(d.textContent);
                        var h = g instanceof el ? Ya(g) : g instanceof Qi && g.constructor === Qi ? g.j : "type_error:SafeScript";
                        f.textContent = h;
                        fb(f);
                        document.head.appendChild(f);
                        document.head.removeChild(f)
                    }
                }
            } catch (k) {
                b = k, Ub(297, b), window.console && window.console.error && window.console.error(b)
            }
        }),
        yG = function() {
            var a = window,
                b = new Ut(a);
            Yv(b).then(kc(894, function(c) {
                var d = new Ls(a),
                    e = new xz(a);
                mc("cmpMet", function(f) {
                    Zb(f);
                    q(f, "fc", c ? 1 : 0);
                    q(f, "tcfv1", a.__cmp ? 1 : 0);
                    q(f, "tcfv2", Ns(d) ? 1 : 0);
                    q(f, "usp", zz(e) ? 1 : 0);
                    q(f, "ptt", 17)
                }, {
                    ta: _.lb(ep)
                })
            }))
        };
    (function(a, b) {
        var c, d, e, f, g, h, k, l;
        return ni(function(m) {
            try {
                if (window.googletag.evalScripts) return window.googletag.evalScripts(), m.return();
                $z();
                Xg("evalScripts", xG);
                try {
                    kG()
                } catch (n) {
                    Vb(408, n, !0)
                }
                _.Xb(260) && Av();
                qB = _.yc();
                try {
                    iG(), sq(13), sq(3)
                } catch (n) {
                    Vb(408, n, !0)
                }
                Xv("gpt-tag-load");
                c = b(a);
                _.uC.N().A = c;
                _.lb(ep) && yG();
                rc(827, function() {
                    "function" === typeof document.interestCohort && _.v(ap) && (cu.N().l = document.interestCohort())
                }, !0);
                (d = uq(kp)) && rc(862, function() {
                    tm(d, document)
                }, !0);
                gg();
                Xg("defineOutOfPageSlot", kc(73, function(n, p) {
                    "string" === typeof n && 0 < n.length && (null == p || "string" === typeof p || "number" === typeof p && vh(p)) ? n = yh(n, "number" === typeof p ? p : 1, "string" === typeof p ? p : void 0) : (Cc().error(nh("googletag.defineOutOfPageSlot", [n, p]), void 0, _.v(qn)), n = null);
                    if (!n) return null;
                    var u;
                    return null != (u = n.l) ? u : null
                }));
                Xg("defineSlot", fw);
                Xg("defineUnit", fw);
                Xg("getWindowsThatCanCommunicateWithHostpageLibrary", cw);
                Xg("display", Aw);
                uG();
                Xg("getVersion", Qb);
                Xg("companionAds", w(816, function() {
                    return gh()
                }));
                Xg("content", w(817, function() {
                    return jh()
                }));
                Xg("pubads", function() {
                    return th()
                });
                Xg("setAdIframeTitle", w(729, rg));
                Xg("getEventLog", function() {
                    return new oG
                });
                Xg("sizeMapping", kc(90, function() {
                    return new tG
                }));
                Xg("enableServices", kc(91, function() {
                    for (var n = _.G(tw), p = n.next(); !p.done; p = n.next()) p = p.value, p.l && Cc().info(Er()), vw(p)
                }));
                Xg("destroySlots", kc(75, wG));
                Xg("apiReady", !0);
                _.v(Cn) && Ne();
                e = function() {
                    Ch();
                    rc(77, function() {
                        var n = Dg().cmd;
                        if (!n || Array.isArray(n)) {
                            var p = new ps;
                            Dg().cmd = Qc(p, function() {
                                return new mG(p)
                            });
                            n && 0 < n.length && p.push.apply(p, n)
                        }
                    })
                };
                Dg().fifWin && "complete" != document.readyState ? vq(window, function() {
                    window.setTimeout(e, 0)
                }) : e();
                xG();
                if (_.v(Ep) || Kb.N().j) vG(), Hl(document, Vi(eb(_.v(Fp) ? c.Qd : c.Rd).toString()));
                _.v(eo) && Nh();
                _.v(Gn) && Cj("script[nonce]", void 0) && (f = new Yb("gpt_nonce_csp"), Zb(f), ac(f));
                g = _.lb(Fn);
                0 !== g && (h = document.createElement("script"), k = Vi(Ni(Oi(1 == g ? "https://pagead2.googlesyndication.com/pagead/managed/js/m202102160101/pubads_impl.js" : "https://securepubads.g.doubleclick.net/gpt/pubads_impl_2021021602.js"))), wd(h, Xi(k, String(Math.random()))), l = _.yc(), (document.head || document.body || document.documentElement).appendChild(h), h.onload = function() {
                    mc("gpt_bvslt", function(n) {
                        Zb(n);
                        q(n, "t", _.yc() - l);
                        q(n, "f", g)
                    }, {
                        ta: 1
                    })
                })
            } catch (n) {
                Vb(106, n)
            }
            gi(m)
        })
    })(Pb(), function(a) {
        return {
            hd: function(b) {
                return $a(Ni(lG) + "gpt/pubads_impl_" + b + "_" + a + ".js")
            },
            gd: function(b) {
                return $a("https://pagead2.googlesyndication.com/gpt/pubads_impl_" + b + "_" + a + ".js")
            },
            Rd: $a("https://securepubads.g.doubleclick.net/pagead/js/rum.js"),
            Qd: $a("https://securepubads.g.doubleclick.net/pagead/js/rum_debug.js")
        }
    });
}).call(this, {});