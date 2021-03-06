function showFigures() {
    $("#wig-calculator-results").addClass("results-visible")
}

function calcFigures() {
    var a = $("#buyer_salary").val(),
        b = ($("#area_average_price").val(), $("#area_rental_yield").val(), $("#area_search").val());
    a = a.replace(",", ""), a = parseInt(a);
    var c = 0;
    c = a / 100 * 30, c = parseInt(Math.round(c)), $("span.show_annual_rent").text(addCommas(c));
    var d = 0;
    d = 9.89 * a, d = parseInt(Math.round(d)), $("#calc_wig_budget").val(addCommas(d)), $("span.show_wig_budget").text(addCommas(d));
    var e = 0;
    e = 4 * a, e = parseInt(Math.round(e)), $("span.show_bank_budget").text(addCommas(e));
    var f = 0;
    f = d / 100 * 5, f = parseInt(Math.round(f)), $("#calc_buyer_deposit").val(f), $("span.show_buyer_deposit").text(addCommas(f)), $("span.show_area_name").text(b), $("#wig-calculator-submit").click(window.submitForm = function() {
        var c = {
            buyer_name: $("#unm_reg_full_name").val(),
            buyer_email: $("#unm_reg_email").val(),
            buyer_phone: $("#unm_reg_phone").val(),
            buyer_deposit_amount: f,
            buyer_salary: a,
            buyer_area: b,
            buyer_has_deposit: $('input[name="unm_reg_deposit"]:checked').val()
        };
        $.ajax({
            method: "POST",
            url: "https://zapier.com/hooks/catch/3k29nf/",
            data: c,
            success: function() {
                var a = $("#autoplayer");
                a.trigger("click")
            }
        })
    })
}

function addCommas(a) {
    a += "";
    for (var b = a.split("."), c = b[0], d = b.length > 1 ? "." + b[1] : "", e = /(\d+)(\d{3})/; e.test(c);) c = c.replace(e, "$1,$2");
    return c + d
}

function valField(a) {
    var b = "#" + a;
    $(b).focusout(function() {
        var c = $(b).val(),
            d = "." + a + "_val";
        c.length < 5 ? $(d).addClass("visible") : $(d).removeClass("visible")
    })
}! function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    function c(a) {
        var b = "length" in a && a.length,
            c = _.type(a);
        return "function" === c || _.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }

    function d(a, b, c) {
        if (_.isFunction(b)) return _.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return _.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (ha.test(b)) return _.filter(b, a, c);
            b = _.filter(b, a)
        }
        return _.grep(a, function(a) {
            return U.call(b, a) >= 0 !== c
        })
    }

    function e(a, b) {
        for (;
            (a = a[b]) && 1 !== a.nodeType;);
        return a
    }

    function f(a) {
        var b = oa[a] = {};
        return _.each(a.match(na) || [], function(a, c) {
            b[c] = !0
        }), b
    }

    function g() {
        Z.removeEventListener("DOMContentLoaded", g, !1), a.removeEventListener("load", g, !1), _.ready()
    }

    function h() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = _.expando + h.uid++
    }

    function i(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(ua, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : ta.test(c) ? _.parseJSON(c) : c
                } catch (e) {}
                sa.set(a, b, c)
            } else c = void 0;
        return c
    }

    function j() {
        return !0
    }

    function k() {
        return !1
    }

    function l() {
        try {
            return Z.activeElement
        } catch (a) {}
    }

    function m(a, b) {
        return _.nodeName(a, "table") && _.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function n(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function o(a) {
        var b = Ka.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function p(a, b) {
        for (var c = 0, d = a.length; d > c; c++) ra.set(a[c], "globalEval", !b || ra.get(b[c], "globalEval"))
    }

    function q(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (ra.hasData(a) && (f = ra.access(a), g = ra.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; d > c; c++) _.event.add(b, e, j[e][c])
            }
            sa.hasData(a) && (h = sa.access(a), i = _.extend({}, h), sa.set(b, i))
        }
    }

    function r(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && _.nodeName(a, b) ? _.merge([a], c) : c
    }

    function s(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && ya.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }

    function t(b, c) {
        var d, e = _(c.createElement(b)).appendTo(c.body),
            f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : _.css(e[0], "display");
        return e.detach(), f
    }

    function u(a) {
        var b = Z,
            c = Oa[a];
        return c || (c = t(a, b), "none" !== c && c || (Na = (Na || _("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = Na[0].contentDocument, b.write(), b.close(), c = t(a, b), Na.detach()), Oa[a] = c), c
    }

    function v(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ra(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || _.contains(a.ownerDocument, a) || (g = _.style(a, b)), Qa.test(g) && Pa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }

    function w(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }

    function x(a, b) {
        if (b in a) return b;
        for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = Xa.length; e--;)
            if (b = Xa[e] + c, b in a) return b;
        return d
    }

    function y(a, b, c) {
        var d = Ta.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function z(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += _.css(a, c + wa[f], !0, e)), d ? ("content" === c && (g -= _.css(a, "padding" + wa[f], !0, e)), "margin" !== c && (g -= _.css(a, "border" + wa[f] + "Width", !0, e))) : (g += _.css(a, "padding" + wa[f], !0, e), "padding" !== c && (g += _.css(a, "border" + wa[f] + "Width", !0, e)));
        return g
    }

    function A(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Ra(a),
            g = "border-box" === _.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = v(a, b, f), (0 > e || null == e) && (e = a.style[b]), Qa.test(e)) return e;
            d = g && (Y.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + z(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function B(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = ra.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && xa(d) && (f[g] = ra.access(d, "olddisplay", u(d.nodeName)))) : (e = xa(d), "none" === c && e || ra.set(d, "olddisplay", e ? c : _.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function C(a, b, c, d, e) {
        return new C.prototype.init(a, b, c, d, e)
    }

    function D() {
        return setTimeout(function() {
            Ya = void 0
        }), Ya = _.now()
    }

    function E(a, b) {
        var c, d = 0,
            e = {
                height: a
            };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = wa[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function F(a, b, c) {
        for (var d, e = (cb[b] || []).concat(cb["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function G(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this,
            m = {},
            n = a.style,
            o = a.nodeType && xa(a),
            p = ra.get(a, "fxshow");
        c.queue || (h = _._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, l.always(function() {
            l.always(function() {
                h.unqueued--, _.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], j = _.css(a, "display"), k = "none" === j ? ra.get(a, "olddisplay") || u(a.nodeName) : j, "inline" === k && "none" === _.css(a, "float") && (n.display = "inline-block")), c.overflow && (n.overflow = "hidden", l.always(function() {
            n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], $a.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (o ? "hide" : "show")) {
                    if ("show" !== e || !p || void 0 === p[d]) continue;
                    o = !0
                }
                m[d] = p && p[d] || _.style(a, d)
            } else j = void 0;
        if (_.isEmptyObject(m)) "inline" === ("none" === j ? u(a.nodeName) : j) && (n.display = j);
        else {
            p ? "hidden" in p && (o = p.hidden) : p = ra.access(a, "fxshow", {}), f && (p.hidden = !o), o ? _(a).show() : l.done(function() {
                _(a).hide()
            }), l.done(function() {
                var b;
                ra.remove(a, "fxshow");
                for (b in m) _.style(a, b, m[b])
            });
            for (d in m) g = F(o ? p[d] : 0, d, l), d in p || (p[d] = g.start, o && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function H(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = _.camelCase(c), e = b[d], f = a[c], _.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = _.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function I(a, b, c) {
        var d, e, f = 0,
            g = bb.length,
            h = _.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = Ya || D(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: _.extend({}, b),
                opts: _.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: Ya || D(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = _.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (H(k, j.opts.specialEasing); g > f; f++)
            if (d = bb[f].call(j, a, k, j.opts)) return d;
        return _.map(k, F, j), _.isFunction(j.opts.start) && j.opts.start.call(a, j), _.fx.timer(_.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    function J(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(na) || [];
            if (_.isFunction(c))
                for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function K(a, b, c, d) {
        function e(h) {
            var i;
            return f[h] = !0, _.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
            }), i
        }
        var f = {},
            g = a === tb;
        return e(b.dataTypes[0]) || !f["*"] && e("*")
    }

    function L(a, b) {
        var c, d, e = _.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && _.extend(!0, a, d), a
    }

    function M(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes;
            "*" === i[0];) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                }
        if (i[0] in c) f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function N(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f;)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }

    function O(a, b, c, d) {
        var e;
        if (_.isArray(b)) _.each(b, function(b, e) {
            c || yb.test(a) ? d(a, e) : O(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== _.type(b)) d(a, b);
        else
            for (e in b) O(a + "[" + e + "]", b[e], c, d)
    }

    function P(a) {
        return _.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    var Q = [],
        R = Q.slice,
        S = Q.concat,
        T = Q.push,
        U = Q.indexOf,
        V = {},
        W = V.toString,
        X = V.hasOwnProperty,
        Y = {},
        Z = a.document,
        $ = "2.1.4",
        _ = function(a, b) {
            return new _.fn.init(a, b)
        },
        aa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ba = /^-ms-/,
        ca = /-([\da-z])/gi,
        da = function(a, b) {
            return b.toUpperCase()
        };
    _.fn = _.prototype = {
        jquery: $,
        constructor: _,
        selector: "",
        length: 0,
        toArray: function() {
            return R.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : R.call(this)
        },
        pushStack: function(a) {
            var b = _.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a, b) {
            return _.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(_.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(R.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: T,
        sort: Q.sort,
        splice: Q.splice
    }, _.extend = _.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || _.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (a = arguments[h]))
                for (b in a) c = g[b], d = a[b], g !== d && (j && d && (_.isPlainObject(d) || (e = _.isArray(d))) ? (e ? (e = !1, f = c && _.isArray(c) ? c : []) : f = c && _.isPlainObject(c) ? c : {}, g[b] = _.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, _.extend({
        expando: "jQuery" + ($ + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === _.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            return !_.isArray(a) && a - parseFloat(a) + 1 >= 0
        },
        isPlainObject: function(a) {
            return "object" !== _.type(a) || a.nodeType || _.isWindow(a) ? !1 : a.constructor && !X.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? V[W.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            var b, c = eval;
            a = _.trim(a), a && (1 === a.indexOf("use strict") ? (b = Z.createElement("script"), b.text = a, Z.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },
        camelCase: function(a) {
            return a.replace(ba, "ms-").replace(ca, da)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, d) {
            var e, f = 0,
                g = a.length,
                h = c(a);
            if (d) {
                if (h)
                    for (; g > f && (e = b.apply(a[f], d), e !== !1); f++);
                else
                    for (f in a)
                        if (e = b.apply(a[f], d), e === !1) break
            } else if (h)
                for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++);
            else
                for (f in a)
                    if (e = b.call(a[f], f, a[f]), e === !1) break; return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(aa, "")
        },
        makeArray: function(a, b) {
            var d = b || [];
            return null != a && (c(Object(a)) ? _.merge(d, "string" == typeof a ? [a] : a) : T.call(d, a)), d
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : U.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, d) {
            var e, f = 0,
                g = a.length,
                h = c(a),
                i = [];
            if (h)
                for (; g > f; f++) e = b(a[f], f, d), null != e && i.push(e);
            else
                for (f in a) e = b(a[f], f, d), null != e && i.push(e);
            return S.apply([], i)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, e;
            return "string" == typeof b && (c = a[b], b = a, a = c), _.isFunction(a) ? (d = R.call(arguments, 2), e = function() {
                return a.apply(b || this, d.concat(R.call(arguments)))
            }, e.guid = a.guid = a.guid || _.guid++, e) : void 0
        },
        now: Date.now,
        support: Y
    }), _.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        V["[object " + b + "]"] = b.toLowerCase()
    });
    var ea = function(a) {
        function b(a, b, c, d) {
            var e, f, g, h, i, j, l, n, o, p;
            if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], h = b.nodeType, "string" != typeof a || !a || 1 !== h && 9 !== h && 11 !== h) return c;
            if (!d && I) {
                if (11 !== h && (e = sa.exec(a)))
                    if (g = e[1]) {
                        if (9 === h) {
                            if (f = b.getElementById(g), !f || !f.parentNode) return c;
                            if (f.id === g) return c.push(f), c
                        } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g) return c.push(f), c
                    } else {
                        if (e[2]) return $.apply(c, b.getElementsByTagName(a)), c;
                        if ((g = e[3]) && v.getElementsByClassName) return $.apply(c, b.getElementsByClassName(g)), c
                    }
                if (v.qsa && (!J || !J.test(a))) {
                    if (n = l = N, o = b, p = 1 !== h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                        for (j = z(a), (l = b.getAttribute("id")) ? n = l.replace(ua, "\\$&") : b.setAttribute("id", n), n = "[id='" + n + "'] ", i = j.length; i--;) j[i] = n + m(j[i]);
                        o = ta.test(a) && k(b.parentNode) || b, p = j.join(",")
                    }
                    if (p) try {
                        return $.apply(c, o.querySelectorAll(p)), c
                    } catch (q) {} finally {
                        l || b.removeAttribute("id")
                    }
                }
            }
            return B(a.replace(ia, "$1"), b, c, d)
        }

        function c() {
            function a(c, d) {
                return b.push(c + " ") > w.cacheLength && delete a[b.shift()], a[c + " "] = d
            }
            var b = [];
            return a
        }

        function d(a) {
            return a[N] = !0, a
        }

        function e(a) {
            var b = G.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function f(a, b) {
            for (var c = a.split("|"), d = a.length; d--;) w.attrHandle[c[d]] = b
        }

        function g(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || V) - (~a.sourceIndex || V);
            if (d) return d;
            if (c)
                for (; c = c.nextSibling;)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function h(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function i(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function j(a) {
            return d(function(b) {
                return b = +b, d(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function k(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }

        function l() {}

        function m(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function n(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = Q++;
            return b.first ? function(b, c, f) {
                for (; b = b[d];)
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j = [P, f];
                if (g) {
                    for (; b = b[d];)
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    for (; b = b[d];)
                        if (1 === b.nodeType || e) {
                            if (i = b[N] || (b[N] = {}), (h = i[d]) && h[0] === P && h[1] === f) return j[2] = h[2];
                            if (i[d] = j, j[2] = a(b, c, g)) return !0
                        }
            }
        }

        function o(a) {
            return a.length > 1 ? function(b, c, d) {
                for (var e = a.length; e--;)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function p(a, c, d) {
            for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d);
            return d
        }

        function q(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function r(a, b, c, e, f, g) {
            return e && !e[N] && (e = r(e)), f && !f[N] && (f = r(f, g)), d(function(d, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    r = d || p(b || "*", h.nodeType ? [h] : h, []),
                    s = !a || !d && b ? r : q(r, m, a, h, i),
                    t = c ? f || (d ? a : o || e) ? [] : g : s;
                if (c && c(s, t, h, i), e)
                    for (j = q(t, n), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                if (d) {
                    if (f || a) {
                        if (f) {
                            for (j = [], k = t.length; k--;)(l = t[k]) && j.push(s[k] = l);
                            f(null, t = [], j, i)
                        }
                        for (k = t.length; k--;)(l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                    }
                } else t = q(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t)
            })
        }

        function s(a) {
            for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function(a) {
                    return a === b
                }, g, !0), j = n(function(a) {
                    return aa(b, a) > -1
                }, g, !0), k = [function(a, c, d) {
                    var e = !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                    return b = null, e
                }]; e > h; h++)
                if (c = w.relative[a[h].type]) k = [n(o(k), c)];
                else {
                    if (c = w.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                        for (d = ++h; e > d && !w.relative[a[d].type]; d++);
                        return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({
                            value: " " === a[h - 2].type ? "*" : ""
                        })).replace(ia, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a))
                    }
                    k.push(c)
                }
            return o(k)
        }

        function t(a, c) {
            var e = c.length > 0,
                f = a.length > 0,
                g = function(d, g, h, i, j) {
                    var k, l, m, n = 0,
                        o = "0",
                        p = d && [],
                        r = [],
                        s = C,
                        t = d || f && w.find.TAG("*", j),
                        u = P += null == s ? 1 : Math.random() || .1,
                        v = t.length;
                    for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
                        if (f && k) {
                            for (l = 0; m = a[l++];)
                                if (m(k, g, h)) {
                                    i.push(k);
                                    break
                                }
                            j && (P = u)
                        }
                        e && ((k = !m && k) && n--, d && p.push(k))
                    }
                    if (n += o, e && o !== n) {
                        for (l = 0; m = c[l++];) m(p, r, g, h);
                        if (d) {
                            if (n > 0)
                                for (; o--;) p[o] || r[o] || (r[o] = Y.call(i));
                            r = q(r)
                        }
                        $.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                    }
                    return j && (P = u, C = s), p
                };
            return e ? d(g) : g
        }
        var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + 1 * new Date,
            O = a.document,
            P = 0,
            Q = 0,
            R = c(),
            S = c(),
            T = c(),
            U = function(a, b) {
                return a === b && (E = !0), 0
            },
            V = 1 << 31,
            W = {}.hasOwnProperty,
            X = [],
            Y = X.pop,
            Z = X.push,
            $ = X.push,
            _ = X.slice,
            aa = function(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1
            },
            ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ca = "[\\x20\\t\\r\\n\\f]",
            da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ea = da.replace("w", "w#"),
            fa = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ea + "))|)" + ca + "*\\]",
            ga = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + fa + ")*)|.*)\\)|)",
            ha = new RegExp(ca + "+", "g"),
            ia = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$", "g"),
            ja = new RegExp("^" + ca + "*," + ca + "*"),
            ka = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"),
            la = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"),
            ma = new RegExp(ga),
            na = new RegExp("^" + ea + "$"),
            oa = {
                ID: new RegExp("^#(" + da + ")"),
                CLASS: new RegExp("^\\.(" + da + ")"),
                TAG: new RegExp("^(" + da.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + fa),
                PSEUDO: new RegExp("^" + ga),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ba + ")$", "i"),
                needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)", "i")
            },
            pa = /^(?:input|select|textarea|button)$/i,
            qa = /^h\d$/i,
            ra = /^[^{]+\{\s*\[native \w/,
            sa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ta = /[+~]/,
            ua = /'|\\/g,
            va = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"),
            wa = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            xa = function() {
                F()
            };
        try {
            $.apply(X = _.call(O.childNodes), O.childNodes), X[O.childNodes.length].nodeType
        } catch (ya) {
            $ = {
                apply: X.length ? function(a, b) {
                    Z.apply(a, _.call(b))
                } : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++];);
                    a.length = c - 1
                }
            }
        }
        v = b.support = {}, y = b.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, F = b.setDocument = function(a) {
            var b, c, d = a ? a.ownerDocument || a : O;
            return d !== G && 9 === d.nodeType && d.documentElement ? (G = d, H = d.documentElement, c = d.defaultView, c && c !== c.top && (c.addEventListener ? c.addEventListener("unload", xa, !1) : c.attachEvent && c.attachEvent("onunload", xa)), I = !y(d), v.attributes = e(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), v.getElementsByTagName = e(function(a) {
                return a.appendChild(d.createComment("")), !a.getElementsByTagName("*").length
            }), v.getElementsByClassName = ra.test(d.getElementsByClassName), v.getById = e(function(a) {
                return H.appendChild(a).id = N, !d.getElementsByName || !d.getElementsByName(N).length
            }), v.getById ? (w.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && I) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, w.filter.ID = function(a) {
                var b = a.replace(va, wa);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete w.find.ID, w.filter.ID = function(a) {
                var b = a.replace(va, wa);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), w.find.TAG = v.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : v.qsa ? b.querySelectorAll(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, w.find.CLASS = v.getElementsByClassName && function(a, b) {
                return I ? b.getElementsByClassName(a) : void 0
            }, K = [], J = [], (v.qsa = ra.test(d.querySelectorAll)) && (e(function(a) {
                H.appendChild(a).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && J.push("[*^$]=" + ca + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || J.push("\\[" + ca + "*(?:value|" + ba + ")"), a.querySelectorAll("[id~=" + N + "-]").length || J.push("~="), a.querySelectorAll(":checked").length || J.push(":checked"), a.querySelectorAll("a#" + N + "+*").length || J.push(".#.+[+~]")
            }), e(function(a) {
                var b = d.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && J.push("name" + ca + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
            })), (v.matchesSelector = ra.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function(a) {
                v.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", ga)
            }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), b = ra.test(H.compareDocumentPosition), M = b || ra.test(H.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    for (; b = b.parentNode;)
                        if (b === a) return !0;
                return !1
            }, U = b ? function(a, b) {
                if (a === b) return E = !0, 0;
                var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !v.sortDetached && b.compareDocumentPosition(a) === c ? a === d || a.ownerDocument === O && M(O, a) ? -1 : b === d || b.ownerDocument === O && M(O, b) ? 1 : D ? aa(D, a) - aa(D, b) : 0 : 4 & c ? -1 : 1)
            } : function(a, b) {
                if (a === b) return E = !0, 0;
                var c, e = 0,
                    f = a.parentNode,
                    h = b.parentNode,
                    i = [a],
                    j = [b];
                if (!f || !h) return a === d ? -1 : b === d ? 1 : f ? -1 : h ? 1 : D ? aa(D, a) - aa(D, b) : 0;
                if (f === h) return g(a, b);
                for (c = a; c = c.parentNode;) i.unshift(c);
                for (c = b; c = c.parentNode;) j.unshift(c);
                for (; i[e] === j[e];) e++;
                return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
            }, d) : G
        }, b.matches = function(a, c) {
            return b(a, null, null, c)
        }, b.matchesSelector = function(a, c) {
            if ((a.ownerDocument || a) !== G && F(a), c = c.replace(la, "='$1']"), !(!v.matchesSelector || !I || K && K.test(c) || J && J.test(c))) try {
                var d = L.call(a, c);
                if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return b(c, G, null, [a]).length > 0
        }, b.contains = function(a, b) {
            return (a.ownerDocument || a) !== G && F(a), M(a, b)
        }, b.attr = function(a, b) {
            (a.ownerDocument || a) !== G && F(a);
            var c = w.attrHandle[b.toLowerCase()],
                d = c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
            return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }, b.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, b.uniqueSort = function(a) {
            var b, c = [],
                d = 0,
                e = 0;
            if (E = !v.detectDuplicates, D = !v.sortStable && a.slice(0), a.sort(U), E) {
                for (; b = a[e++];) b === a[e] && (d = c.push(e));
                for (; d--;) a.splice(c[d], 1)
            }
            return D = null, a
        }, x = b.getText = function(a) {
            var b, c = "",
                d = 0,
                e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += x(a)
                } else if (3 === e || 4 === e) return a.nodeValue
            } else
                for (; b = a[d++];) c += x(b);
            return c
        }, w = b.selectors = {
            cacheLength: 50,
            createPseudo: d,
            match: oa,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(va, wa), a[3] = (a[3] || a[4] || a[5] || "").replace(va, wa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return oa.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && ma.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(va, wa).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = R[a + " "];
                    return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && R(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, c, d) {
                    return function(e) {
                        var f = b.attr(e, a);
                        return null == f ? "!=" === c : c ? (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(ha, " ") + " ").indexOf(d) > -1 : "|=" === c ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h;
                        if (q) {
                            if (f) {
                                for (; p;) {
                                    for (l = b; l = l[p];)
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();)
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [P, n, m];
                                        break
                                    }
                            } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P) m = j[1];
                            else
                                for (;
                                    (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b)););
                            return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, c) {
                    var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                    return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c], w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
                        for (var d, e = f(a, c), g = e.length; g--;) d = aa(a, e[g]), a[d] = !(b[d] = e[g])
                    }) : function(a) {
                        return f(a, 0, e)
                    }) : f
                }
            },
            pseudos: {
                not: d(function(a) {
                    var b = [],
                        c = [],
                        e = A(a.replace(ia, "$1"));
                    return e[N] ? d(function(a, b, c, d) {
                        for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, d, f) {
                        return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: d(function(a) {
                    return function(c) {
                        return b(a, c).length > 0
                    }
                }),
                contains: d(function(a) {
                    return a = a.replace(va, wa),
                        function(b) {
                            return (b.textContent || b.innerText || x(b)).indexOf(a) > -1
                        }
                }),
                lang: d(function(a) {
                    return na.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(va, wa).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                            while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === H
                },
                focus: function(a) {
                    return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !w.pseudos.empty(a)
                },
                header: function(a) {
                    return qa.test(a.nodeName)
                },
                input: function(a) {
                    return pa.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: j(function() {
                    return [0]
                }),
                last: j(function(a, b) {
                    return [b - 1]
                }),
                eq: j(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: j(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: j(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: j(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: j(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, w.pseudos.nth = w.pseudos.eq;
        for (u in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) w.pseudos[u] = h(u);
        for (u in {
                submit: !0,
                reset: !0
            }) w.pseudos[u] = i(u);
        return l.prototype = w.filters = w.pseudos, w.setFilters = new l, z = b.tokenize = function(a, c) {
            var d, e, f, g, h, i, j, k = S[a + " "];
            if (k) return c ? 0 : k.slice(0);
            for (h = a, i = [], j = w.preFilter; h;) {
                (!d || (e = ja.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ka.exec(h)) && (d = e.shift(), f.push({
                    value: d,
                    type: e[0].replace(ia, " ")
                }), h = h.slice(d.length));
                for (g in w.filter) !(e = oa[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
                    value: d,
                    type: g,
                    matches: e
                }), h = h.slice(d.length));
                if (!d) break
            }
            return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
        }, A = b.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = T[a + " "];
            if (!f) {
                for (b || (b = z(a)), c = b.length; c--;) f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                f = T(a, t(e, d)), f.selector = a
            }
            return f
        }, B = b.select = function(a, b, c, d) {
            var e, f, g, h, i, j = "function" == typeof a && a,
                l = !d && z(a = j.selector || a);
            if (c = c || [], 1 === l.length) {
                if (f = l[0] = l[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
                    if (b = (w.find.ID(g.matches[0].replace(va, wa), b) || [])[0], !b) return c;
                    j && (b = b.parentNode), a = a.slice(f.shift().value.length)
                }
                for (e = oa.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !w.relative[h = g.type]);)
                    if ((i = w.find[h]) && (d = i(g.matches[0].replace(va, wa), ta.test(f[0].type) && k(b.parentNode) || b))) {
                        if (f.splice(e, 1), a = d.length && m(f), !a) return $.apply(c, d), c;
                        break
                    }
            }
            return (j || A(a, l))(d, b, !I, c, ta.test(a) && k(b.parentNode) || b), c
        }, v.sortStable = N.split("").sort(U).join("") === N, v.detectDuplicates = !!E, F(), v.sortDetached = e(function(a) {
            return 1 & a.compareDocumentPosition(G.createElement("div"))
        }), e(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || f("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), v.attributes && e(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || f("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), e(function(a) {
            return null == a.getAttribute("disabled")
        }) || f(ba, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), b
    }(a);
    _.find = ea, _.expr = ea.selectors, _.expr[":"] = _.expr.pseudos, _.unique = ea.uniqueSort, _.text = ea.getText, _.isXMLDoc = ea.isXML, _.contains = ea.contains;
    var fa = _.expr.match.needsContext,
        ga = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ha = /^.[^:#\[\.,]*$/;
    _.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? _.find.matchesSelector(d, a) ? [d] : [] : _.find.matches(a, _.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, _.fn.extend({
        find: function(a) {
            var b, c = this.length,
                d = [],
                e = this;
            if ("string" != typeof a) return this.pushStack(_(a).filter(function() {
                for (b = 0; c > b; b++)
                    if (_.contains(e[b], this)) return !0
            }));
            for (b = 0; c > b; b++) _.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? _.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
        },
        filter: function(a) {
            return this.pushStack(d(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(d(this, a || [], !0))
        },
        is: function(a) {
            return !!d(this, "string" == typeof a && fa.test(a) ? _(a) : a || [], !1).length
        }
    });
    var ia, ja = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ka = _.fn.init = function(a, b) {
            var c, d;
            if (!a) return this;
            if ("string" == typeof a) {
                if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : ja.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || ia).find(a) : this.constructor(b).find(a);
                if (c[1]) {
                    if (b = b instanceof _ ? b[0] : b, _.merge(this, _.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : Z, !0)), ga.test(c[1]) && _.isPlainObject(b))
                        for (c in b) _.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                    return this
                }
                return d = Z.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = Z, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : _.isFunction(a) ? "undefined" != typeof ia.ready ? ia.ready(a) : a(_) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), _.makeArray(a, this))
        };
    ka.prototype = _.fn, ia = _(Z);
    var la = /^(?:parents|prev(?:Until|All))/,
        ma = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    _.extend({
        dir: function(a, b, c) {
            for (var d = [], e = void 0 !== c;
                (a = a[b]) && 9 !== a.nodeType;)
                if (1 === a.nodeType) {
                    if (e && _(a).is(c)) break;
                    d.push(a)
                }
            return d
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), _.fn.extend({
        has: function(a) {
            var b = _(a, this),
                c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++)
                    if (_.contains(this, b[a])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = fa.test(a) || "string" != typeof a ? _(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && _.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? _.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? U.call(_(a), this[0]) : U.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(_.unique(_.merge(this.get(), _(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    }), _.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return _.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return _.dir(a, "parentNode", c)
        },
        next: function(a) {
            return e(a, "nextSibling")
        },
        prev: function(a) {
            return e(a, "previousSibling")
        },
        nextAll: function(a) {
            return _.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return _.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return _.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return _.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return _.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return _.sibling(a.firstChild)
        },
        contents: function(a) {
            return a.contentDocument || _.merge([], a.childNodes)
        }
    }, function(a, b) {
        _.fn[a] = function(c, d) {
            var e = _.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = _.filter(d, e)), this.length > 1 && (ma[a] || _.unique(e), la.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var na = /\S+/g,
        oa = {};
    _.Callbacks = function(a) {
        a = "string" == typeof a ? oa[a] || f(a) : _.extend({}, a);
        var b, c, d, e, g, h, i = [],
            j = !a.once && [],
            k = function(f) {
                for (b = a.memory && f, c = !0, h = e || 0, e = 0, g = i.length, d = !0; i && g > h; h++)
                    if (i[h].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
                        b = !1;
                        break
                    }
                d = !1, i && (j ? j.length && k(j.shift()) : b ? i = [] : l.disable())
            },
            l = {
                add: function() {
                    if (i) {
                        var c = i.length;
                        ! function f(b) {
                            _.each(b, function(b, c) {
                                var d = _.type(c);
                                "function" === d ? a.unique && l.has(c) || i.push(c) : c && c.length && "string" !== d && f(c)
                            })
                        }(arguments), d ? g = i.length : b && (e = c, k(b))
                    }
                    return this
                },
                remove: function() {
                    return i && _.each(arguments, function(a, b) {
                        for (var c;
                            (c = _.inArray(b, i, c)) > -1;) i.splice(c, 1), d && (g >= c && g--, h >= c && h--)
                    }), this
                },
                has: function(a) {
                    return a ? _.inArray(a, i) > -1 : !(!i || !i.length)
                },
                empty: function() {
                    return i = [], g = 0, this
                },
                disable: function() {
                    return i = j = b = void 0, this
                },
                disabled: function() {
                    return !i
                },
                lock: function() {
                    return j = void 0, b || l.disable(), this
                },
                locked: function() {
                    return !j
                },
                fireWith: function(a, b) {
                    return !i || c && !j || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? j.push(b) : k(b)), this
                },
                fire: function() {
                    return l.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!c
                }
            };
        return l
    }, _.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", _.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", _.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", _.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return _.Deferred(function(c) {
                            _.each(b, function(b, f) {
                                var g = _.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && _.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? _.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, _.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b, c, d, e = 0,
                f = R.call(arguments),
                g = f.length,
                h = 1 !== g || a && _.isFunction(a.promise) ? g : 0,
                i = 1 === h ? a : _.Deferred(),
                j = function(a, c, d) {
                    return function(e) {
                        c[a] = this, d[a] = arguments.length > 1 ? R.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                    }
                };
            if (g > 1)
                for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && _.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
            return h || i.resolveWith(d, f), i.promise()
        }
    });
    var pa;
    _.fn.ready = function(a) {
        return _.ready.promise().done(a), this
    }, _.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? _.readyWait++ : _.ready(!0)
        },
        ready: function(a) {
            (a === !0 ? --_.readyWait : _.isReady) || (_.isReady = !0, a !== !0 && --_.readyWait > 0 || (pa.resolveWith(Z, [_]), _.fn.triggerHandler && (_(Z).triggerHandler("ready"), _(Z).off("ready"))))
        }
    }), _.ready.promise = function(b) {
        return pa || (pa = _.Deferred(), "complete" === Z.readyState ? setTimeout(_.ready) : (Z.addEventListener("DOMContentLoaded", g, !1), a.addEventListener("load", g, !1))), pa.promise(b)
    }, _.ready.promise();
    var qa = _.access = function(a, b, c, d, e, f, g) {
        var h = 0,
            i = a.length,
            j = null == c;
        if ("object" === _.type(c)) {
            e = !0;
            for (h in c) _.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0, _.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                return j.call(_(a), c)
            })), b))
            for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    };
    _.acceptData = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    }, h.uid = 1, h.accepts = _.acceptData, h.prototype = {
        key: function(a) {
            if (!h.accepts(a)) return 0;
            var b = {},
                c = a[this.expando];
            if (!c) {
                c = h.uid++;
                try {
                    b[this.expando] = {
                        value: c
                    }, Object.defineProperties(a, b)
                } catch (d) {
                    b[this.expando] = c, _.extend(a, b)
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c
        },
        set: function(a, b, c) {
            var d, e = this.key(a),
                f = this.cache[e];
            if ("string" == typeof b) f[b] = c;
            else if (_.isEmptyObject(f)) _.extend(this.cache[e], b);
            else
                for (d in b) f[d] = b[d];
            return f
        },
        get: function(a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c : c[b]
        },
        access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, _.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
        },
        remove: function(a, b) {
            var c, d, e, f = this.key(a),
                g = this.cache[f];
            if (void 0 === b) this.cache[f] = {};
            else {
                _.isArray(b) ? d = b.concat(b.map(_.camelCase)) : (e = _.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(na) || [])), c = d.length;
                for (; c--;) delete g[d[c]]
            }
        },
        hasData: function(a) {
            return !_.isEmptyObject(this.cache[a[this.expando]] || {})
        },
        discard: function(a) {
            a[this.expando] && delete this.cache[a[this.expando]]
        }
    };
    var ra = new h,
        sa = new h,
        ta = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ua = /([A-Z])/g;
    _.extend({
        hasData: function(a) {
            return sa.hasData(a) || ra.hasData(a)
        },
        data: function(a, b, c) {
            return sa.access(a, b, c)
        },
        removeData: function(a, b) {
            sa.remove(a, b)
        },
        _data: function(a, b, c) {
            return ra.access(a, b, c)
        },
        _removeData: function(a, b) {
            ra.remove(a, b)
        }
    }), _.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = sa.get(f), 1 === f.nodeType && !ra.get(f, "hasDataAttrs"))) {
                    for (c = g.length; c--;) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = _.camelCase(d.slice(5)), i(f, d, e[d])));
                    ra.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                sa.set(this, a)
            }) : qa(this, function(b) {
                var c, d = _.camelCase(a);
                if (f && void 0 === b) {
                    if (c = sa.get(f, a), void 0 !== c) return c;
                    if (c = sa.get(f, d), void 0 !== c) return c;
                    if (c = i(f, d, void 0), void 0 !== c) return c
                } else this.each(function() {
                    var c = sa.get(this, d);
                    sa.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && sa.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                sa.remove(this, a)
            })
        }
    }), _.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = ra.get(a, b), c && (!d || _.isArray(c) ? d = ra.access(a, b, _.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = _.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = _._queueHooks(a, b),
                g = function() {
                    _.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return ra.get(a, c) || ra.access(a, c, {
                empty: _.Callbacks("once memory").add(function() {
                    ra.remove(a, [b + "queue", c])
                })
            })
        }
    }), _.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? _.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = _.queue(this, a, b);
                _._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && _.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                _.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
                e = _.Deferred(),
                f = this,
                g = this.length,
                h = function() {
                    --d || e.resolveWith(f, [f])
                };
            for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;) c = ra.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var va = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        wa = ["Top", "Right", "Bottom", "Left"],
        xa = function(a, b) {
            return a = b || a, "none" === _.css(a, "display") || !_.contains(a.ownerDocument, a)
        },
        ya = /^(?:checkbox|radio)$/i;
    ! function() {
        var a = Z.createDocumentFragment(),
            b = a.appendChild(Z.createElement("div")),
            c = Z.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), Y.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", Y.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var za = "undefined";
    Y.focusinBubbles = "onfocusin" in a;
    var Aa = /^key/,
        Ba = /^(?:mouse|pointer|contextmenu)|click/,
        Ca = /^(?:focusinfocus|focusoutblur)$/,
        Da = /^([^.]*)(?:\.(.+)|)$/;
    _.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = ra.get(a);
            if (q)
                for (c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = _.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) {
                        return typeof _ !== za && _.event.triggered !== b.type ? _.event.dispatch.apply(a, arguments) : void 0
                    }), b = (b || "").match(na) || [""], j = b.length; j--;) h = Da.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = _.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = _.event.special[n] || {}, k = _.extend({
                    type: n,
                    origType: p,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && _.expr.match.needsContext.test(e),
                    namespace: o.join(".")
                }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), _.event.global[n] = !0)
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = ra.hasData(a) && ra.get(a);
            if (q && (i = q.events)) {
                for (b = (b || "").match(na) || [""], j = b.length; j--;)
                    if (h = Da.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                        for (l = _.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || _.removeEvent(a, n, q.handle), delete i[n])
                    } else
                        for (n in i) _.event.remove(a, n + b[j], c, d, !0);
                _.isEmptyObject(i) && (delete q.handle, ra.remove(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, j, k, l, m = [d || Z],
                n = X.call(b, "type") ? b.type : b,
                o = X.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || Z, 3 !== d.nodeType && 8 !== d.nodeType && !Ca.test(n + _.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."), n = o.shift(), o.sort()), j = n.indexOf(":") < 0 && "on" + n, b = b[_.expando] ? b : new _.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : _.makeArray(c, [b]), l = _.event.special[n] || {}, e || !l.trigger || l.trigger.apply(d, c) !== !1)) {
                if (!e && !l.noBubble && !_.isWindow(d)) {
                    for (i = l.delegateType || n, Ca.test(i + n) || (g = g.parentNode); g; g = g.parentNode) m.push(g), h = g;
                    h === (d.ownerDocument || Z) && m.push(h.defaultView || h.parentWindow || a)
                }
                for (f = 0;
                    (g = m[f++]) && !b.isPropagationStopped();) b.type = f > 1 ? i : l.bindType || n, k = (ra.get(g, "events") || {})[b.type] && ra.get(g, "handle"), k && k.apply(g, c), k = j && g[j], k && k.apply && _.acceptData(g) && (b.result = k.apply(g, c), b.result === !1 && b.preventDefault());
                return b.type = n, e || b.isDefaultPrevented() || l._default && l._default.apply(m.pop(), c) !== !1 || !_.acceptData(d) || j && _.isFunction(d[n]) && !_.isWindow(d) && (h = d[j], h && (d[j] = null), _.event.triggered = n, d[n](), _.event.triggered = void 0, h && (d[j] = h)), b.result
            }
        },
        dispatch: function(a) {
            a = _.event.fix(a);
            var b, c, d, e, f, g = [],
                h = R.call(arguments),
                i = (ra.get(this, "events") || {})[a.type] || [],
                j = _.event.special[a.type] || {};
            if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
                for (g = _.event.handlers.call(this, a, i), b = 0;
                    (e = g[b++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = e.elem, c = 0;
                        (f = e.handlers[c++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(f.namespace)) && (a.handleObj = f, a.data = f.data, d = ((_.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
                return j.postDispatch && j.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i !== this; i = i.parentNode || this)
                    if (i.disabled !== !0 || "click" !== a.type) {
                        for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? _(e, this).index(i) >= 0 : _.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || Z, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        fix: function(a) {
            if (a[_.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = Ba.test(e) ? this.mouseHooks : Aa.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new _.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
            return a.target || (a.target = Z), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== l() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === l() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && _.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return _.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = _.extend(new _.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? _.event.trigger(e, null, b) : _.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, _.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }, _.Event = function(a, b) {
        return this instanceof _.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? j : k) : this.type = a, b && _.extend(this, b), this.timeStamp = a && a.timeStamp || _.now(), void(this[_.expando] = !0)) : new _.Event(a, b)
    }, _.Event.prototype = {
        isDefaultPrevented: k,
        isPropagationStopped: k,
        isImmediatePropagationStopped: k,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = j, a && a.preventDefault && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = j, a && a.stopPropagation && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = j, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, _.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        _.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !_.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), Y.focusinBubbles || _.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            _.event.simulate(b, a.target, _.event.fix(a), !0)
        };
        _.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = ra.access(d, b);
                e || d.addEventListener(a, c, !0), ra.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = ra.access(d, b) - 1;
                e ? ra.access(d, b, e) : (d.removeEventListener(a, c, !0), ra.remove(d, b))
            }
        }
    }), _.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (g in a) this.on(g, b, c, a[g], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = k;
            else if (!d) return this;
            return 1 === e && (f = d, d = function(a) {
                return _().off(a), f.apply(this, arguments)
            }, d.guid = f.guid || (f.guid = _.guid++)), this.each(function() {
                _.event.add(this, a, d, c, b)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, _(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = k), this.each(function() {
                _.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                _.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? _.event.trigger(a, b, c, !0) : void 0
        }
    });
    var Ea = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Fa = /<([\w:]+)/,
        Ga = /<|&#?\w+;/,
        Ha = /<(?:script|style|link)/i,
        Ia = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ja = /^$|\/(?:java|ecma)script/i,
        Ka = /^true\/(.*)/,
        La = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Ma = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Ma.optgroup = Ma.option, Ma.tbody = Ma.tfoot = Ma.colgroup = Ma.caption = Ma.thead, Ma.th = Ma.td, _.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0),
                i = _.contains(a.ownerDocument, a);
            if (!(Y.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || _.isXMLDoc(a)))
                for (g = r(h), f = r(a), d = 0, e = f.length; e > d; d++) s(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || r(a), g = g || r(h), d = 0, e = f.length; e > d; d++) q(f[d], g[d]);
                else q(a, h);
            return g = r(h, "script"), g.length > 0 && p(g, !i && r(a, "script")), h
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, n = a.length; n > m; m++)
                if (e = a[m], e || 0 === e)
                    if ("object" === _.type(e)) _.merge(l, e.nodeType ? [e] : e);
                    else if (Ga.test(e)) {
                for (f = f || k.appendChild(b.createElement("div")), g = (Fa.exec(e) || ["", ""])[1].toLowerCase(), h = Ma[g] || Ma._default, f.innerHTML = h[1] + e.replace(Ea, "<$1></$2>") + h[2], j = h[0]; j--;) f = f.lastChild;
                _.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
            } else l.push(b.createTextNode(e));
            for (k.textContent = "", m = 0; e = l[m++];)
                if ((!d || -1 === _.inArray(e, d)) && (i = _.contains(e.ownerDocument, e), f = r(k.appendChild(e), "script"), i && p(f), c))
                    for (j = 0; e = f[j++];) Ja.test(e.type || "") && c.push(e);
            return k
        },
        cleanData: function(a) {
            for (var b, c, d, e, f = _.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                if (_.acceptData(c) && (e = c[ra.expando], e && (b = ra.cache[e]))) {
                    if (b.events)
                        for (d in b.events) f[d] ? _.event.remove(c, d) : _.removeEvent(c, d, b.handle);
                    ra.cache[e] && delete ra.cache[e]
                }
                delete sa.cache[c[sa.expando]]
            }
        }
    }), _.fn.extend({
        text: function(a) {
            return qa(this, function(a) {
                return void 0 === a ? _.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = m(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = m(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, d = a ? _.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || _.cleanData(r(c)), c.parentNode && (b && _.contains(c.ownerDocument, c) && p(r(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (_.cleanData(r(a, !1)), a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return _.clone(this, a, b)
            })
        },
        html: function(a) {
            return qa(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !Ha.test(a) && !Ma[(Fa.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(Ea, "<$1></$2>");
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (_.cleanData(r(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode, _.cleanData(r(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = S.apply([], a);
            var c, d, e, f, g, h, i = 0,
                j = this.length,
                k = this,
                l = j - 1,
                m = a[0],
                p = _.isFunction(m);
            if (p || j > 1 && "string" == typeof m && !Y.checkClone && Ia.test(m)) return this.each(function(c) {
                var d = k.eq(c);
                p && (a[0] = m.call(this, c, d.html())), d.domManip(a, b)
            });
            if (j && (c = _.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
                for (e = _.map(r(c, "script"), n), f = e.length; j > i; i++) g = c, i !== l && (g = _.clone(g, !0, !0), f && _.merge(e, r(g, "script"))), b.call(this[i], g, i);
                if (f)
                    for (h = e[e.length - 1].ownerDocument, _.map(e, o), i = 0; f > i; i++) g = e[i], Ja.test(g.type || "") && !ra.access(g, "globalEval") && _.contains(h, g) && (g.src ? _._evalUrl && _._evalUrl(g.src) : _.globalEval(g.textContent.replace(La, "")))
            }
            return this
        }
    }), _.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        _.fn[a] = function(a) {
            for (var c, d = [], e = _(a), f = e.length - 1, g = 0; f >= g; g++) c = g === f ? this : this.clone(!0), _(e[g])[b](c), T.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var Na, Oa = {},
        Pa = /^margin/,
        Qa = new RegExp("^(" + va + ")(?!px)[a-z%]+$", "i"),
        Ra = function(b) {
            return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
        };
    ! function() {
        function b() {
            g.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", g.innerHTML = "", e.appendChild(f);
            var b = a.getComputedStyle(g, null);
            c = "1%" !== b.top, d = "4px" === b.width, e.removeChild(f)
        }
        var c, d, e = Z.documentElement,
            f = Z.createElement("div"),
            g = Z.createElement("div");
        g.style && (g.style.backgroundClip = "content-box", g.cloneNode(!0).style.backgroundClip = "", Y.clearCloneStyle = "content-box" === g.style.backgroundClip, f.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", f.appendChild(g), a.getComputedStyle && _.extend(Y, {
            pixelPosition: function() {
                return b(), c
            },
            boxSizingReliable: function() {
                return null == d && b(), d
            },
            reliableMarginRight: function() {
                var b, c = g.appendChild(Z.createElement("div"));
                return c.style.cssText = g.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", g.style.width = "1px", e.appendChild(f), b = !parseFloat(a.getComputedStyle(c, null).marginRight), e.removeChild(f), g.removeChild(c), b
            }
        }))
    }(), _.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e
    };
    var Sa = /^(none|table(?!-c[ea]).+)/,
        Ta = new RegExp("^(" + va + ")(.*)$", "i"),
        Ua = new RegExp("^([+-])=(" + va + ")", "i"),
        Va = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Wa = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Xa = ["Webkit", "O", "Moz", "ms"];
    _.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = v(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = _.camelCase(b),
                    i = a.style;
                return b = _.cssProps[h] || (_.cssProps[h] = x(i, h)), g = _.cssHooks[b] || _.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Ua.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(_.css(a, b)), f = "number"), void(null != c && c === c && ("number" !== f || _.cssNumber[h] || (c += "px"), Y.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c))))
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = _.camelCase(b);
            return b = _.cssProps[h] || (_.cssProps[h] = x(a.style, h)), g = _.cssHooks[b] || _.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = v(a, b, d)), "normal" === e && b in Wa && (e = Wa[b]), "" === c || c ? (f = parseFloat(e), c === !0 || _.isNumeric(f) ? f || 0 : e) : e
        }
    }), _.each(["height", "width"], function(a, b) {
        _.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Sa.test(_.css(a, "display")) && 0 === a.offsetWidth ? _.swap(a, Va, function() {
                    return A(a, b, d)
                }) : A(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && Ra(a);
                return y(a, c, d ? z(a, b, d, "border-box" === _.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), _.cssHooks.marginRight = w(Y.reliableMarginRight, function(a, b) {
        return b ? _.swap(a, {
            display: "inline-block"
        }, v, [a, "marginRight"]) : void 0
    }), _.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        _.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + wa[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Pa.test(a) || (_.cssHooks[a + b].set = y)
    }), _.fn.extend({
        css: function(a, b) {
            return qa(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (_.isArray(b)) {
                    for (d = Ra(a), e = b.length; e > g; g++) f[b[g]] = _.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? _.style(a, b, c) : _.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return B(this, !0)
        },
        hide: function() {
            return B(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                xa(this) ? _(this).show() : _(this).hide()
            })
        }
    }), _.Tween = C, C.prototype = {
        constructor: C,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (_.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = C.propHooks[this.prop];
            return a && a.get ? a.get(this) : C.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = C.propHooks[this.prop];
            return this.options.duration ? this.pos = b = _.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : C.propHooks._default.set(this), this
        }
    }, C.prototype.init.prototype = C.prototype, C.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = _.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                _.fx.step[a.prop] ? _.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[_.cssProps[a.prop]] || _.cssHooks[a.prop]) ? _.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, C.propHooks.scrollTop = C.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, _.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, _.fx = C.prototype.init, _.fx.step = {};
    var Ya, Za, $a = /^(?:toggle|show|hide)$/,
        _a = new RegExp("^(?:([+-])=|)(" + va + ")([a-z%]*)$", "i"),
        ab = /queueHooks$/,
        bb = [G],
        cb = {
            "*": [function(a, b) {
                var c = this.createTween(a, b),
                    d = c.cur(),
                    e = _a.exec(b),
                    f = e && e[3] || (_.cssNumber[a] ? "" : "px"),
                    g = (_.cssNumber[a] || "px" !== f && +d) && _a.exec(_.css(c.elem, a)),
                    h = 1,
                    i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do h = h || ".5", g /= h, _.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]
        };
    _.Animation = _.extend(I, {
            tweener: function(a, b) {
                _.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
                for (var c, d = 0, e = a.length; e > d; d++) c = a[d], cb[c] = cb[c] || [], cb[c].unshift(b)
            },
            prefilter: function(a, b) {
                b ? bb.unshift(a) : bb.push(a)
            }
        }), _.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? _.extend({}, a) : {
                complete: c || !c && b || _.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !_.isFunction(b) && b
            };
            return d.duration = _.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in _.fx.speeds ? _.fx.speeds[d.duration] : _.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                _.isFunction(d.old) && d.old.call(this), d.queue && _.dequeue(this, d.queue)
            }, d
        }, _.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(xa).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = _.isEmptyObject(a),
                    f = _.speed(b, c, d),
                    g = function() {
                        var b = I(this, _.extend({}, a), f);
                        (e || ra.get(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = _.timers,
                        g = ra.get(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && ab.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    (b || !c) && _.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = ra.get(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = _.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, _.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), _.each(["toggle", "show", "hide"], function(a, b) {
            var c = _.fn[b];
            _.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(E(b, !0), a, d, e)
            }
        }), _.each({
            slideDown: E("show"),
            slideUp: E("hide"),
            slideToggle: E("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            _.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), _.timers = [], _.fx.tick = function() {
            var a, b = 0,
                c = _.timers;
            for (Ya = _.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
            c.length || _.fx.stop(), Ya = void 0
        }, _.fx.timer = function(a) {
            _.timers.push(a), a() ? _.fx.start() : _.timers.pop()
        }, _.fx.interval = 13, _.fx.start = function() {
            Za || (Za = setInterval(_.fx.tick, _.fx.interval))
        }, _.fx.stop = function() {
            clearInterval(Za), Za = null
        }, _.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, _.fn.delay = function(a, b) {
            return a = _.fx ? _.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        function() {
            var a = Z.createElement("input"),
                b = Z.createElement("select"),
                c = b.appendChild(Z.createElement("option"));
            a.type = "checkbox", Y.checkOn = "" !== a.value, Y.optSelected = c.selected, b.disabled = !0, Y.optDisabled = !c.disabled, a = Z.createElement("input"), a.value = "t", a.type = "radio", Y.radioValue = "t" === a.value
        }();
    var db, eb, fb = _.expr.attrHandle;
    _.fn.extend({
        attr: function(a, b) {
            return qa(this, _.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                _.removeAttr(this, a)
            })
        }
    }), _.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            return a && 3 !== f && 8 !== f && 2 !== f ? typeof a.getAttribute === za ? _.prop(a, b, c) : (1 === f && _.isXMLDoc(a) || (b = b.toLowerCase(), d = _.attrHooks[b] || (_.expr.match.bool.test(b) ? eb : db)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = _.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void _.removeAttr(a, b)) : void 0
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(na);
            if (f && 1 === a.nodeType)
                for (; c = f[e++];) d = _.propFix[c] || c, _.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!Y.radioValue && "radio" === b && _.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), eb = {
        set: function(a, b, c) {
            return b === !1 ? _.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, _.each(_.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = fb[b] || _.find.attr;
        fb[b] = function(a, b, d) {
            var e, f;
            return d || (f = fb[b], fb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, fb[b] = f), e
        }
    });
    var gb = /^(?:input|select|textarea|button)$/i;
    _.fn.extend({
        prop: function(a, b) {
            return qa(this, _.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[_.propFix[a] || a]
            })
        }
    }), _.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            return a && 3 !== g && 8 !== g && 2 !== g ? (f = 1 !== g || !_.isXMLDoc(a), f && (b = _.propFix[b] || b, e = _.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    return a.hasAttribute("tabindex") || gb.test(a.nodeName) || a.href ? a.tabIndex : -1
                }
            }
        }
    }), Y.optSelected || (_.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        }
    }), _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        _.propFix[this.toLowerCase()] = this
    });
    var hb = /[\t\r\n\f]/g;
    _.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = "string" == typeof a && a,
                i = 0,
                j = this.length;
            if (_.isFunction(a)) return this.each(function(b) {
                _(this).addClass(a.call(this, b, this.className))
            });
            if (h)
                for (b = (a || "").match(na) || []; j > i; i++)
                    if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hb, " ") : " ")) {
                        for (f = 0; e = b[f++];) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = _.trim(d), c.className !== g && (c.className = g)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a,
                i = 0,
                j = this.length;
            if (_.isFunction(a)) return this.each(function(b) {
                _(this).removeClass(a.call(this, b, this.className))
            });
            if (h)
                for (b = (a || "").match(na) || []; j > i; i++)
                    if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hb, " ") : "")) {
                        for (f = 0; e = b[f++];)
                            for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
                        g = a ? _.trim(d) : "", c.className !== g && (c.className = g)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(_.isFunction(a) ? function(c) {
                _(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function() {
                if ("string" === c)
                    for (var b, d = 0, e = _(this), f = a.match(na) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                else(c === za || "boolean" === c) && (this.className && ra.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : ra.get(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(hb, " ").indexOf(b) >= 0) return !0;
            return !1
        }
    });
    var ib = /\r/g;
    _.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            return arguments.length ? (d = _.isFunction(a), this.each(function(c) {
                var e;
                1 === this.nodeType && (e = d ? a.call(this, c, _(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : _.isArray(e) && (e = _.map(e, function(a) {
                    return null == a ? "" : a + ""
                })), b = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
            })) : e ? (b = _.valHooks[e.type] || _.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ib, "") : null == c ? "" : c)) : void 0
        }
    }), _.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = _.find.attr(a, "value");
                    return null != b ? b : _.trim(_.text(a))
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (Y.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && _.nodeName(c.parentNode, "optgroup"))) {
                            if (b = _(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    for (var c, d, e = a.options, f = _.makeArray(b), g = e.length; g--;) d = e[g], (d.selected = _.inArray(d.value, f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), _.each(["radio", "checkbox"], function() {
        _.valHooks[this] = {
            set: function(a, b) {
                return _.isArray(b) ? a.checked = _.inArray(_(a).val(), b) >= 0 : void 0
            }
        }, Y.checkOn || (_.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    }), _.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        _.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), _.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var jb = _.now(),
        kb = /\?/;
    _.parseJSON = function(a) {
        return JSON.parse(a + "")
    }, _.parseXML = function(a) {
        var b, c;
        if (!a || "string" != typeof a) return null;
        try {
            c = new DOMParser, b = c.parseFromString(a, "text/xml")
        } catch (d) {
            b = void 0
        }
        return (!b || b.getElementsByTagName("parsererror").length) && _.error("Invalid XML: " + a), b
    };
    var lb = /#.*$/,
        mb = /([?&])_=[^&]*/,
        nb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        ob = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        pb = /^(?:GET|HEAD)$/,
        qb = /^\/\//,
        rb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        sb = {},
        tb = {},
        ub = "*/".concat("*"),
        vb = a.location.href,
        wb = rb.exec(vb.toLowerCase()) || [];
    _.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: vb,
            type: "GET",
            isLocal: ob.test(wb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": ub,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": _.parseJSON,
                "text xml": _.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? L(L(a, _.ajaxSettings), b) : L(_.ajaxSettings, a)
        },
        ajaxPrefilter: J(sb),
        ajaxTransport: J(tb),
        ajax: function(a, b) {
            function c(a, b, c, g) {
                var i, k, r, s, u, w = b;
                2 !== t && (t = 2, h && clearTimeout(h), d = void 0, f = g || "", v.readyState = a > 0 ? 4 : 0, i = a >= 200 && 300 > a || 304 === a, c && (s = M(l, v, c)), s = N(l, s, v, i), i ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"), u && (_.lastModified[e] = u), u = v.getResponseHeader("etag"), u && (_.etag[e] = u)), 204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state, k = s.data, r = s.error, i = !r)) : (r = w, (a || !w) && (w = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || w) + "", i ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]), v.statusCode(q), q = void 0, j && n.trigger(i ? "ajaxSuccess" : "ajaxError", [v, l, i ? k : r]), p.fireWith(m, [v, w]), j && (n.trigger("ajaxComplete", [v, l]), --_.active || _.event.trigger("ajaxStop")))
            }
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var d, e, f, g, h, i, j, k, l = _.ajaxSetup({}, b),
                m = l.context || l,
                n = l.context && (m.nodeType || m.jquery) ? _(m) : _.event,
                o = _.Deferred(),
                p = _.Callbacks("once memory"),
                q = l.statusCode || {},
                r = {},
                s = {},
                t = 0,
                u = "canceled",
                v = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === t) {
                            if (!g)
                                for (g = {}; b = nb.exec(f);) g[b[1].toLowerCase()] = b[2];
                            b = g[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === t ? f : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return t || (l.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > t)
                                for (b in a) q[b] = [q[b], a[b]];
                            else v.always(a[v.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || u;
                        return d && d.abort(b), c(0, b), this
                    }
                };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, l.url = ((a || l.url || vb) + "").replace(lb, "").replace(qb, wb[1] + "//"), l.type = b.method || b.type || l.method || l.type, l.dataTypes = _.trim(l.dataType || "*").toLowerCase().match(na) || [""], null == l.crossDomain && (i = rb.exec(l.url.toLowerCase()), l.crossDomain = !(!i || i[1] === wb[1] && i[2] === wb[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (wb[3] || ("http:" === wb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = _.param(l.data, l.traditional)), K(sb, l, b, v), 2 === t) return v;
            j = _.event && l.global, j && 0 === _.active++ && _.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !pb.test(l.type), e = l.url, l.hasContent || (l.data && (e = l.url += (kb.test(e) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = mb.test(e) ? e.replace(mb, "$1_=" + jb++) : e + (kb.test(e) ? "&" : "?") + "_=" + jb++)), l.ifModified && (_.lastModified[e] && v.setRequestHeader("If-Modified-Since", _.lastModified[e]), _.etag[e] && v.setRequestHeader("If-None-Match", _.etag[e])), (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType), v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + ub + "; q=0.01" : "") : l.accepts["*"]);
            for (k in l.headers) v.setRequestHeader(k, l.headers[k]);
            if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (k in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) v[k](l[k]);
            if (d = K(tb, l, b, v)) {
                v.readyState = 1, j && n.trigger("ajaxSend", [v, l]), l.async && l.timeout > 0 && (h = setTimeout(function() {
                    v.abort("timeout")
                }, l.timeout));
                try {
                    t = 1, d.send(r, c)
                } catch (w) {
                    if (!(2 > t)) throw w;
                    c(-1, w)
                }
            } else c(-1, "No Transport");
            return v
        },
        getJSON: function(a, b, c) {
            return _.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return _.get(a, void 0, b, "script")
        }
    }), _.each(["get", "post"], function(a, b) {
        _[b] = function(a, c, d, e) {
            return _.isFunction(c) && (e = e || d, d = c, c = void 0), _.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), _._evalUrl = function(a) {
        return _.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, _.fn.extend({
        wrapAll: function(a) {
            var b;
            return _.isFunction(a) ? this.each(function(b) {
                _(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = _(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                for (var a = this; a.firstElementChild;) a = a.firstElementChild;
                return a
            }).append(this)), this)
        },
        wrapInner: function(a) {
            return this.each(_.isFunction(a) ? function(b) {
                _(this).wrapInner(a.call(this, b))
            } : function() {
                var b = _(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = _.isFunction(a);
            return this.each(function(c) {
                _(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                _.nodeName(this, "body") || _(this).replaceWith(this.childNodes)
            }).end()
        }
    }), _.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0
    }, _.expr.filters.visible = function(a) {
        return !_.expr.filters.hidden(a)
    };
    var xb = /%20/g,
        yb = /\[\]$/,
        zb = /\r?\n/g,
        Ab = /^(?:submit|button|image|reset|file)$/i,
        Bb = /^(?:input|select|textarea|keygen)/i;
    _.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = _.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = _.ajaxSettings && _.ajaxSettings.traditional), _.isArray(a) || a.jquery && !_.isPlainObject(a)) _.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) O(c, a[c], b, e);
        return d.join("&").replace(xb, "+")
    }, _.fn.extend({
        serialize: function() {
            return _.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = _.prop(this, "elements");
                return a ? _.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !_(this).is(":disabled") && Bb.test(this.nodeName) && !Ab.test(a) && (this.checked || !ya.test(a))
            }).map(function(a, b) {
                var c = _(this).val();
                return null == c ? null : _.isArray(c) ? _.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(zb, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(zb, "\r\n")
                }
            }).get()
        }
    }), _.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (a) {}
    };
    var Cb = 0,
        Db = {},
        Eb = {
            0: 200,
            1223: 204
        },
        Fb = _.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in Db) Db[a]()
    }), Y.cors = !!Fb && "withCredentials" in Fb, Y.ajax = Fb = !!Fb, _.ajaxTransport(function(a) {
        var b;
        return Y.cors || Fb && !a.crossDomain ? {
            send: function(c, d) {
                var e, f = a.xhr(),
                    g = ++Cb;
                if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                    for (e in a.xhrFields) f[e] = a.xhrFields[e];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c) f.setRequestHeader(e, c[e]);
                b = function(a) {
                    return function() {
                        b && (delete Db[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Eb[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
                            text: f.responseText
                        } : void 0, f.getAllResponseHeaders()))
                    }
                }, f.onload = b(), f.onerror = b("error"), b = Db[g] = b("abort");
                try {
                    f.send(a.hasContent && a.data || null)
                } catch (h) {
                    if (b) throw h
                }
            },
            abort: function() {
                b && b()
            }
        } : void 0
    }), _.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return _.globalEval(a), a
            }
        }
    }), _.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), _.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(d, e) {
                    b = _("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                    }), Z.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var Gb = [],
        Hb = /(=)\?(?=&|$)|\?\?/;
    _.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Gb.pop() || _.expando + "_" + jb++;
            return this[a] = !0, a
        }
    }), _.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Hb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Hb.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = _.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Hb, "$1" + e) : b.jsonp !== !1 && (b.url += (kb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || _.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Gb.push(e)), g && _.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), _.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || Z;
        var d = ga.exec(a),
            e = !c && [];
        return d ? [b.createElement(d[1])] : (d = _.buildFragment([a], b, e), e && e.length && _(e).remove(), _.merge([], d.childNodes))
    };
    var Ib = _.fn.load;
    _.fn.load = function(a, b, c) {
        if ("string" != typeof a && Ib) return Ib.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h >= 0 && (d = _.trim(a.slice(h)), a = a.slice(0, h)), _.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && _.ajax({
            url: a,
            type: e,
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? _("<div>").append(_.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
            g.each(c, f || [a.responseText, b, a])
        }), this
    }, _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        _.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), _.expr.filters.animated = function(a) {
        return _.grep(_.timers, function(b) {
            return a === b.elem
        }).length
    };
    var Jb = a.document.documentElement;
    _.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = _.css(a, "position"),
                l = _(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = _.css(a, "top"), i = _.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), _.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, _.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                _.offset.setOffset(this, a, b)
            });
            var b, c, d = this[0],
                e = {
                    top: 0,
                    left: 0
                },
                f = d && d.ownerDocument;
            return f ? (b = f.documentElement, _.contains(b, d) ? (typeof d.getBoundingClientRect !== za && (e = d.getBoundingClientRect()), c = P(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e) : void 0
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0],
                    d = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === _.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), _.nodeName(a[0], "html") || (d = a.offset()), d.top += _.css(a[0], "borderTopWidth", !0), d.left += _.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - _.css(c, "marginTop", !0),
                    left: b.left - d.left - _.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || Jb; a && !_.nodeName(a, "html") && "static" === _.css(a, "position");) a = a.offsetParent;
                return a || Jb
            })
        }
    }), _.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, c) {
        var d = "pageYOffset" === c;
        _.fn[b] = function(e) {
            return qa(this, function(b, e, f) {
                var g = P(b);
                return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
            }, b, e, arguments.length, null)
        }
    }), _.each(["top", "left"], function(a, b) {
        _.cssHooks[b] = w(Y.pixelPosition, function(a, c) {
            return c ? (c = v(a, b), Qa.test(c) ? _(a).position()[b] + "px" : c) : void 0
        })
    }), _.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        _.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            _.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return qa(this, function(b, c, d) {
                    var e;
                    return _.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? _.css(b, c, g) : _.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), _.fn.size = function() {
        return this.length
    }, _.fn.andSelf = _.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return _
    });
    var Kb = a.jQuery,
        Lb = a.$;
    return _.noConflict = function(b) {
        return a.$ === _ && (a.$ = Lb), b && a.jQuery === _ && (a.jQuery = Kb), _
    }, typeof b === za && (a.jQuery = a.$ = _), _
}), ! function(a) {
    if ("function" == typeof define && define.amd && define("uikit", function() {
            var b = window.UIkit || a(window, window.jQuery, window.document);
            return b.load = function(a, c, d, e) {
                var f, g = a.split(","),
                    h = [],
                    i = (e.config && e.config.uikit && e.config.uikit.base ? e.config.uikit.base : "").replace(/\/+$/g, "");
                if (!i) throw new Error("Please define base path to UIkit in the requirejs config.");
                for (f = 0; f < g.length; f += 1) {
                    var j = g[f].replace(/\./g, "/");
                    h.push(i + "/components/" + j)
                }
                c(h, function() {
                    d(b)
                })
            }, b
        }), !window.jQuery) throw new Error("UIkit requires jQuery");
    window && window.jQuery && a(window, window.jQuery, window.document)
}(function(a, b, c) {
    "use strict";
    var d = {},
        e = a.UIkit ? Object.create(a.UIkit) : void 0;
    if (d.version = "2.23.0", d.noConflict = function() {
            return e && (a.UIkit = e, b.UIkit = e, b.fn.uk = e.fn), d
        }, d.prefix = function(a) {
            return a
        }, d.$ = b, d.$doc = d.$(document), d.$win = d.$(window), d.$html = d.$("html"), d.support = {}, d.support.transition = function() {
            var a = function() {
                var a, b = c.body || c.documentElement,
                    d = {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd otransitionend",
                        transition: "transitionend"
                    };
                for (a in d)
                    if (void 0 !== b.style[a]) return d[a]
            }();
            return a && {
                end: a
            }
        }(), d.support.animation = function() {
            var a = function() {
                var a, b = c.body || c.documentElement,
                    d = {
                        WebkitAnimation: "webkitAnimationEnd",
                        MozAnimation: "animationend",
                        OAnimation: "oAnimationEnd oanimationend",
                        animation: "animationend"
                    };
                for (a in d)
                    if (void 0 !== b.style[a]) return d[a]
            }();
            return a && {
                end: a
            }
        }(), function() {
            Date.now = Date.now || function() {
                return (new Date).getTime()
            };
            for (var a = ["webkit", "moz"], b = 0; b < a.length && !window.requestAnimationFrame; ++b) {
                var c = a[b];
                window.requestAnimationFrame = window[c + "RequestAnimationFrame"], window.cancelAnimationFrame = window[c + "CancelAnimationFrame"] || window[c + "CancelRequestAnimationFrame"]
            }
            if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
                var d = 0;
                window.requestAnimationFrame = function(a) {
                    var b = Date.now(),
                        c = Math.max(d + 16, b);
                    return setTimeout(function() {
                        a(d = c)
                    }, c - b)
                }, window.cancelAnimationFrame = clearTimeout
            }
        }(), d.support.touch = "ontouchstart" in document || a.DocumentTouch && document instanceof a.DocumentTouch || a.navigator.msPointerEnabled && a.navigator.msMaxTouchPoints > 0 || a.navigator.pointerEnabled && a.navigator.maxTouchPoints > 0 || !1, d.support.mutationobserver = a.MutationObserver || a.WebKitMutationObserver || null, d.Utils = {}, d.Utils.isFullscreen = function() {
            return document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.fullscreenElement || !1
        }, d.Utils.str2json = function(a, b) {
            try {
                return b ? JSON.parse(a.replace(/([\$\w]+)\s*:/g, function(a, b) {
                    return '"' + b + '":'
                }).replace(/'([^']+)'/g, function(a, b) {
                    return '"' + b + '"'
                })) : new Function("", "var json = " + a + "; return JSON.parse(JSON.stringify(json));")()
            } catch (c) {
                return !1
            }
        }, d.Utils.debounce = function(a, b, c) {
            var d;
            return function() {
                var e = this,
                    f = arguments,
                    g = function() {
                        d = null, c || a.apply(e, f)
                    },
                    h = c && !d;
                clearTimeout(d), d = setTimeout(g, b), h && a.apply(e, f)
            }
        }, d.Utils.removeCssRules = function(a) {
            var b, c, d, e, f, g, h, i, j, k;
            a && setTimeout(function() {
                try {
                    for (k = document.styleSheets, e = 0, h = k.length; h > e; e++) {
                        for (d = k[e], c = [], d.cssRules = d.cssRules, b = f = 0, i = d.cssRules.length; i > f; b = ++f) d.cssRules[b].type === CSSRule.STYLE_RULE && a.test(d.cssRules[b].selectorText) && c.unshift(b);
                        for (g = 0, j = c.length; j > g; g++) d.deleteRule(c[g])
                    }
                } catch (l) {}
            }, 0)
        }, d.Utils.isInView = function(a, c) {
            var e = b(a);
            if (!e.is(":visible")) return !1;
            var f = d.$win.scrollLeft(),
                g = d.$win.scrollTop(),
                h = e.offset(),
                i = h.left,
                j = h.top;
            return c = b.extend({
                topoffset: 0,
                leftoffset: 0
            }, c), j + e.height() >= g && j - c.topoffset <= g + d.$win.height() && i + e.width() >= f && i - c.leftoffset <= f + d.$win.width() ? !0 : !1
        }, d.Utils.checkDisplay = function(a, c) {
            var e = d.$("[data-uk-margin], [data-uk-grid-match], [data-uk-grid-margin], [data-uk-check-display]", a || document);
            return a && !e.length && (e = b(a)), e.trigger("display.uk.check"), c && ("string" != typeof c && (c = '[class*="uk-animation-"]'), e.find(c).each(function() {
                var a = d.$(this),
                    b = a.attr("class"),
                    c = b.match(/uk\-animation\-(.+)/);
                a.removeClass(c[0]).width(), a.addClass(c[0])
            })), e
        }, d.Utils.options = function(a) {
            if (b.isPlainObject(a)) return a;
            var c = a ? a.indexOf("{") : -1,
                e = {};
            if (-1 != c) try {
                e = d.Utils.str2json(a.substr(c))
            } catch (f) {}
            return e
        }, d.Utils.animate = function(a, c) {
            var e = b.Deferred();
            return a = d.$(a), c = c, a.css("display", "none").addClass(c).one(d.support.animation.end, function() {
                a.removeClass(c), e.resolve()
            }).width(), a.css("display", ""), e.promise()
        }, d.Utils.uid = function(a) {
            return (a || "id") + (new Date).getTime() + "RAND" + Math.ceil(1e5 * Math.random())
        }, d.Utils.template = function(a, b) {
            for (var c, d, e, f, g = a.replace(/\n/g, "\\n").replace(/\{\{\{\s*(.+?)\s*\}\}\}/g, "{{!$1}}").split(/(\{\{\s*(.+?)\s*\}\})/g), h = 0, i = [], j = 0; h < g.length;) {
                if (c = g[h], c.match(/\{\{\s*(.+?)\s*\}\}/)) switch (h += 1, c = g[h], d = c[0], e = c.substring(c.match(/^(\^|\#|\!|\~|\:)/) ? 1 : 0), d) {
                    case "~":
                        i.push("for(var $i=0;$i<" + e + ".length;$i++) { var $item = " + e + "[$i];"), j++;
                        break;
                    case ":":
                        i.push("for(var $key in " + e + ") { var $val = " + e + "[$key];"), j++;
                        break;
                    case "#":
                        i.push("if(" + e + ") {"), j++;
                        break;
                    case "^":
                        i.push("if(!" + e + ") {"), j++;
                        break;
                    case "/":
                        i.push("}"), j--;
                        break;
                    case "!":
                        i.push("__ret.push(" + e + ");");
                        break;
                    default:
                        i.push("__ret.push(escape(" + e + "));")
                } else i.push("__ret.push('" + c.replace(/\'/g, "\\'") + "');");
                h += 1
            }
            return f = new Function("$data", ["var __ret = [];", "try {", "with($data){", j ? '__ret = ["Not all blocks are closed correctly."]' : i.join(""), "};", "}catch(e){__ret = [e.message];}", 'return __ret.join("").replace(/\\n\\n/g, "\\n");', "function escape(html) { return String(html).replace(/&/g, '&amp;').replace(/\"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');}"].join("\n")), b ? f(b) : f
        }, d.Utils.events = {}, d.Utils.events.click = d.support.touch ? "tap" : "click", a.UIkit = d, d.fn = function(a, c) {
            var e = arguments,
                f = a.match(/^([a-z\-]+)(?:\.([a-z]+))?/i),
                g = f[1],
                h = f[2];
            return d[g] ? this.each(function() {
                var a = b(this),
                    f = a.data(g);
                f || a.data(g, f = d[g](this, h ? void 0 : c)), h && f[h].apply(f, Array.prototype.slice.call(e, 1))
            }) : (b.error("UIkit component [" + g + "] does not exist."), this)
        }, b.UIkit = d, b.fn.uk = d.fn, d.langdirection = "rtl" == d.$html.attr("dir") ? "right" : "left", d.components = {}, d.component = function(a, c) {
            var e = function(c, f) {
                var g = this;
                return this.UIkit = d, this.element = c ? d.$(c) : null, this.options = b.extend(!0, {}, this.defaults, f), this.plugins = {}, this.element && this.element.data(a, this), this.init(), (this.options.plugins.length ? this.options.plugins : Object.keys(e.plugins)).forEach(function(a) {
                    e.plugins[a].init && (e.plugins[a].init(g), g.plugins[a] = !0)
                }), this.trigger("init.uk.component", [a, this]), this
            };
            return e.plugins = {}, b.extend(!0, e.prototype, {
                defaults: {
                    plugins: []
                },
                boot: function() {},
                init: function() {},
                on: function(a, b, c) {
                    return d.$(this.element || this).on(a, b, c)
                },
                one: function(a, b, c) {
                    return d.$(this.element || this).one(a, b, c)
                },
                off: function(a) {
                    return d.$(this.element || this).off(a)
                },
                trigger: function(a, b) {
                    return d.$(this.element || this).trigger(a, b)
                },
                find: function(a) {
                    return d.$(this.element ? this.element : []).find(a)
                },
                proxy: function(a, b) {
                    var c = this;
                    b.split(" ").forEach(function(b) {
                        c[b] || (c[b] = function() {
                            return a[b].apply(a, arguments)
                        })
                    })
                },
                mixin: function(a, b) {
                    var c = this;
                    b.split(" ").forEach(function(b) {
                        c[b] || (c[b] = a[b].bind(c))
                    })
                },
                option: function() {
                    return 1 == arguments.length ? this.options[arguments[0]] || void 0 : void(2 == arguments.length && (this.options[arguments[0]] = arguments[1]))
                }
            }, c), this.components[a] = e, this[a] = function() {
                var c, e;
                if (arguments.length) switch (arguments.length) {
                    case 1:
                        "string" == typeof arguments[0] || arguments[0].nodeType || arguments[0] instanceof jQuery ? c = b(arguments[0]) : e = arguments[0];
                        break;
                    case 2:
                        c = b(arguments[0]), e = arguments[1]
                }
                return c && c.data(a) ? c.data(a) : new d.components[a](c, e)
            }, d.domready && d.component.boot(a), e
        }, d.plugin = function(a, b, c) {
            this.components[a].plugins[b] = c
        }, d.component.boot = function(a) {
            d.components[a].prototype && d.components[a].prototype.boot && !d.components[a].booted && (d.components[a].prototype.boot.apply(d, []), d.components[a].booted = !0)
        }, d.component.bootComponents = function() {
            for (var a in d.components) d.component.boot(a)
        }, d.domObservers = [], d.domready = !1, d.ready = function(a) {
            d.domObservers.push(a), d.domready && a(document)
        }, d.on = function(a, b, c) {
            return a && a.indexOf("ready.uk.dom") > -1 && d.domready && b.apply(d.$doc), d.$doc.on(a, b, c)
        }, d.one = function(a, b, c) {
            return a && a.indexOf("ready.uk.dom") > -1 && d.domready ? (b.apply(d.$doc), d.$doc) : d.$doc.one(a, b, c)
        }, d.trigger = function(a, b) {
            return d.$doc.trigger(a, b)
        }, d.domObserve = function(a, b) {
            d.support.mutationobserver && (b = b || function() {}, d.$(a).each(function() {
                var a = this,
                    c = d.$(a);
                if (!c.data("observer")) try {
                    var e = new d.support.mutationobserver(d.Utils.debounce(function() {
                        b.apply(a, []), c.trigger("changed.uk.dom")
                    }, 50));
                    e.observe(a, {
                        childList: !0,
                        subtree: !0
                    }), c.data("observer", e)
                } catch (f) {}
            }))
        }, d.init = function(a) {
            a = a || document, d.domObservers.forEach(function(b) {
                b(a)
            })
        }, d.on("domready.uk.dom", function() {
            d.init(), d.domready && d.Utils.checkDisplay()
        }), b(function() {
            d.$body = d.$("body"), d.ready(function() {
                d.domObserve("[data-uk-observe]")
            }), d.on("changed.uk.dom", function(a) {
                d.init(a.target), d.Utils.checkDisplay(a.target)
            }), d.trigger("beforeready.uk.dom"), d.component.bootComponents(), requestAnimationFrame(function() {
                var a, b = {
                        x: window.pageXOffset,
                        y: window.pageYOffset
                    },
                    c = function() {
                        (b.x != window.pageXOffset || b.y != window.pageYOffset) && (a = {
                            x: 0,
                            y: 0
                        }, window.pageXOffset != b.x && (a.x = window.pageXOffset > b.x ? 1 : -1), window.pageYOffset != b.y && (a.y = window.pageYOffset > b.y ? 1 : -1), b = {
                            dir: a,
                            x: window.pageXOffset,
                            y: window.pageYOffset
                        }, d.$doc.trigger("scrolling.uk.document", [b])), requestAnimationFrame(c)
                    };
                return d.support.touch && d.$html.on("touchmove touchend MSPointerMove MSPointerUp pointermove pointerup", c), (b.x || b.y) && c(), c
            }()), d.trigger("domready.uk.dom"), d.support.touch && navigator.userAgent.match(/(iPad|iPhone|iPod)/g) && d.$win.on("load orientationchange resize", d.Utils.debounce(function() {
                var a = function() {
                    return b(".uk-height-viewport").css("height", window.innerHeight), a
                };
                return a()
            }(), 100)), d.trigger("afterready.uk.dom"), d.domready = !0
        }), d.$html.addClass(d.support.touch ? "uk-touch" : "uk-notouch"), d.support.touch) {
        var f, g = !1,
            h = "uk-hover",
            i = ".uk-overlay, .uk-overlay-hover, .uk-overlay-toggle, .uk-animation-hover, .uk-has-hover";
        d.$html.on("mouseenter touchstart MSPointerDown pointerdown", i, function() {
            g && b("." + h).removeClass(h), g = b(this).addClass(h)
        }).on("mouseleave touchend MSPointerUp pointerup", function(a) {
            f = b(a.target).parents(i), g && g.not(f).removeClass(h)
        })
    }
    return d
}),
function(a) {
    function b(a, b, c, d) {
        return Math.abs(a - b) >= Math.abs(c - d) ? a - b > 0 ? "Left" : "Right" : c - d > 0 ? "Up" : "Down"
    }

    function c() {
        j = null, l.last && (void 0 !== l.el && l.el.trigger("longTap"), l = {})
    }

    function d() {
        j && clearTimeout(j), j = null
    }

    function e() {
        g && clearTimeout(g), h && clearTimeout(h), i && clearTimeout(i), j && clearTimeout(j), g = h = i = j = null, l = {}
    }

    function f(a) {
        return a.pointerType == a.MSPOINTER_TYPE_TOUCH && a.isPrimary
    }
    if (!a.fn.swipeLeft) {
        var g, h, i, j, k, l = {},
            m = 750;
        a(function() {
            var n, o, p, q = 0,
                r = 0;
            "MSGesture" in window && (k = new MSGesture, k.target = document.body), a(document).on("MSGestureEnd gestureend", function(a) {
                var b = a.originalEvent.velocityX > 1 ? "Right" : a.originalEvent.velocityX < -1 ? "Left" : a.originalEvent.velocityY > 1 ? "Down" : a.originalEvent.velocityY < -1 ? "Up" : null;
                b && void 0 !== l.el && (l.el.trigger("swipe"), l.el.trigger("swipe" + b))
            }).on("touchstart MSPointerDown pointerdown", function(b) {
                ("MSPointerDown" != b.type || f(b.originalEvent)) && (p = "MSPointerDown" == b.type || "pointerdown" == b.type ? b : b.originalEvent.touches[0], n = Date.now(), o = n - (l.last || n), l.el = a("tagName" in p.target ? p.target : p.target.parentNode), g && clearTimeout(g), l.x1 = p.pageX, l.y1 = p.pageY, o > 0 && 250 >= o && (l.isDoubleTap = !0), l.last = n, j = setTimeout(c, m), !k || "MSPointerDown" != b.type && "pointerdown" != b.type && "touchstart" != b.type || k.addPointer(b.originalEvent.pointerId))
            }).on("touchmove MSPointerMove pointermove", function(a) {
                ("MSPointerMove" != a.type || f(a.originalEvent)) && (p = "MSPointerMove" == a.type || "pointermove" == a.type ? a : a.originalEvent.touches[0], d(), l.x2 = p.pageX, l.y2 = p.pageY, q += Math.abs(l.x1 - l.x2), r += Math.abs(l.y1 - l.y2))
            }).on("touchend MSPointerUp pointerup", function(c) {
                ("MSPointerUp" != c.type || f(c.originalEvent)) && (d(), l.x2 && Math.abs(l.x1 - l.x2) > 30 || l.y2 && Math.abs(l.y1 - l.y2) > 30 ? i = setTimeout(function() {
                    void 0 !== l.el && (l.el.trigger("swipe"), l.el.trigger("swipe" + b(l.x1, l.x2, l.y1, l.y2))), l = {}
                }, 0) : "last" in l && (isNaN(q) || 30 > q && 30 > r ? h = setTimeout(function() {
                    var b = a.Event("tap");
                    b.cancelTouch = e, void 0 !== l.el && l.el.trigger(b), l.isDoubleTap ? (void 0 !== l.el && l.el.trigger("doubleTap"), l = {}) : g = setTimeout(function() {
                        g = null, void 0 !== l.el && l.el.trigger("singleTap"), l = {}
                    }, 250)
                }, 0) : l = {}, q = r = 0))
            }).on("touchcancel MSPointerCancel", e), a(window).on("scroll", e)
        }), ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function(b) {
            a.fn[b] = function(c) {
                return a(this).on(b, c)
            }
        })
    }
}(jQuery),
function(a) {
    "use strict";
    var b = [];
    a.component("stackMargin", {
            defaults: {
                cls: "uk-margin-small-top"
            },
            boot: function() {
                a.ready(function(b) {
                    a.$("[data-uk-margin]", b).each(function() {
                        var b, c = a.$(this);
                        c.data("stackMargin") || (b = a.stackMargin(c, a.Utils.options(c.attr("data-uk-margin"))))
                    })
                })
            },
            init: function() {
                var c = this;
                this.columns = [], a.$win.on("resize orientationchange", function() {
                    var b = function() {
                        c.process()
                    };
                    return a.$(function() {
                        b(), a.$win.on("load", b)
                    }), a.Utils.debounce(b, 20)
                }()), a.$html.on("changed.uk.dom", function() {
                    c.process()
                }), this.on("display.uk.check", function() {
                    this.element.is(":visible") && this.process()
                }.bind(this)), b.push(this)
            },
            process: function() {
                return this.columns = this.element.children(), a.Utils.stackMargin(this.columns, this.options), this
            },
            revert: function() {
                return this.columns.removeClass(this.options.cls), this
            }
        }),
        function() {
            var b = [],
                c = function(a) {
                    if (a.is(":visible")) {
                        var b = a.parent().width(),
                            c = a.data("width"),
                            d = b / c,
                            e = Math.floor(d * a.data("height"));
                        a.css({
                            height: c > b ? e : a.data("height")
                        })
                    }
                };
            a.component("responsiveElement", {
                defaults: {},
                boot: function() {
                    a.ready(function(b) {
                        a.$("iframe.uk-responsive-width, [data-uk-responsive]", b).each(function() {
                            var b, c = a.$(this);
                            c.data("responsiveIframe") || (b = a.responsiveElement(c, {}))
                        })
                    })
                },
                init: function() {
                    var a = this.element;
                    a.attr("width") && a.attr("height") && (a.data({
                        width: a.attr("width"),
                        height: a.attr("height")
                    }).on("display.uk.check", function() {
                        c(a)
                    }), c(a), b.push(a))
                }
            }), a.$win.on("resize load", a.Utils.debounce(function() {
                b.forEach(function(a) {
                    c(a)
                })
            }, 15))
        }(), a.Utils.stackMargin = function(b, c) {
            c = a.$.extend({
                cls: "uk-margin-small-top"
            }, c), c.cls = c.cls, b = a.$(b).removeClass(c.cls);
            var d = !1,
                e = b.filter(":visible:first"),
                f = e.length ? e.position().top + e.outerHeight() - 1 : !1;
            f !== !1 && b.each(function() {
                var b = a.$(this);
                b.is(":visible") && (d ? b.addClass(c.cls) : b.position().top >= f && (d = b.addClass(c.cls)))
            })
        }, a.Utils.matchHeights = function(b, c) {
            b = a.$(b).css("min-height", ""), c = a.$.extend({
                row: !0
            }, c);
            var d = function(b) {
                if (!(b.length < 2)) {
                    var c = 0;
                    b.each(function() {
                        c = Math.max(c, a.$(this).outerHeight())
                    }).each(function() {
                        var b = a.$(this),
                            d = c - ("border-box" == b.css("box-sizing") ? 0 : b.outerHeight() - b.height());
                        b.css("min-height", d + "px")
                    })
                }
            };
            c.row ? (b.first().width(), setTimeout(function() {
                var c = !1,
                    e = [];
                b.each(function() {
                    var b = a.$(this),
                        f = b.offset().top;
                    f != c && e.length && (d(a.$(e)), e = [], f = b.offset().top), e.push(b), c = f
                }), e.length && d(a.$(e))
            }, 0)) : d(b)
        },
        function(b) {
            a.Utils.inlineSvg = function(c, d) {
                a.$(c || 'img[src$=".svg"]', d || document).each(function() {
                    var c = a.$(this),
                        d = c.attr("src");
                    if (!b[d]) {
                        var e = a.$.Deferred();
                        a.$.get(d, {
                            nc: Math.random()
                        }, function(b) {
                            e.resolve(a.$(b).find("svg"))
                        }), b[d] = e.promise()
                    }
                    b[d].then(function(b) {
                        var d = a.$(b).clone();
                        c.attr("id") && d.attr("id", c.attr("id")), c.attr("class") && d.attr("class", c.attr("class")), c.attr("style") && d.attr("style", c.attr("style")), c.attr("width") && (d.attr("width", c.attr("width")), c.attr("height") || d.removeAttr("height")), c.attr("height") && (d.attr("height", c.attr("height")), c.attr("width") || d.removeAttr("width")), c.replaceWith(d)
                    })
                })
            }, a.ready(function(b) {
                a.Utils.inlineSvg("[data-uk-svg]", b)
            })
        }({})
}(UIkit),
function(a) {
    "use strict";

    function b(b, c) {
        c = a.$.extend({
            duration: 1e3,
            transition: "easeOutExpo",
            offset: 0,
            complete: function() {}
        }, c);
        var d = b.offset().top - c.offset,
            e = a.$doc.height(),
            f = window.innerHeight;
        d + f > e && (d = e - f), a.$("html,body").stop().animate({
            scrollTop: d
        }, c.duration, c.transition).promise().done(c.complete)
    }
    a.component("smoothScroll", {
        boot: function() {
            a.$html.on("click.smooth-scroll.uikit", "[data-uk-smooth-scroll]", function() {
                var b = a.$(this);
                return b.data("smoothScroll") || (a.smoothScroll(b, a.Utils.options(b.attr("data-uk-smooth-scroll"))), b.trigger("click")), !1
            })
        },
        init: function() {
            var c = this;
            this.on("click", function(d) {
                d.preventDefault(), b(a.$(this.hash).length ? a.$(this.hash) : a.$("body"), c.options)
            })
        }
    }), a.Utils.scrollToElement = b, a.$.easing.easeOutExpo || (a.$.easing.easeOutExpo = function(a, b, c, d, e) {
        return b == e ? c + d : d * (-Math.pow(2, -10 * b / e) + 1) + c
    })
}(UIkit),
function(a) {
    "use strict";
    var b = a.$win,
        c = a.$doc,
        d = [],
        e = function() {
            for (var a = 0; a < d.length; a++) window.requestAnimationFrame.apply(window, [d[a].check])
        };
    a.component("scrollspy", {
        defaults: {
            target: !1,
            cls: "uk-scrollspy-inview",
            initcls: "uk-scrollspy-init-inview",
            topoffset: 0,
            leftoffset: 0,
            repeat: !1,
            delay: 0
        },
        boot: function() {
            c.on("scrolling.uk.document", e), b.on("load resize orientationchange", a.Utils.debounce(e, 50)), a.ready(function(b) {
                a.$("[data-uk-scrollspy]", b).each(function() {
                    var b = a.$(this);
                    b.data("scrollspy") || a.scrollspy(b, a.Utils.options(b.attr("data-uk-scrollspy")))
                })
            })
        },
        init: function() {
            var b, c = this,
                e = this.options.cls.split(/,/),
                f = function() {
                    var d = c.options.target ? c.element.find(c.options.target) : c.element,
                        f = 1 === d.length ? 1 : 0,
                        g = 0;
                    d.each(function() {
                        var d = a.$(this),
                            h = d.data("inviewstate"),
                            i = a.Utils.isInView(d, c.options),
                            j = d.data("ukScrollspyCls") || e[g].trim();
                        !i || h || d.data("scrollspy-idle") || (b || (d.addClass(c.options.initcls), c.offset = d.offset(), b = !0, d.trigger("init.uk.scrollspy")), d.data("scrollspy-idle", setTimeout(function() {
                            d.addClass("uk-scrollspy-inview").toggleClass(j).width(), d.trigger("inview.uk.scrollspy"), d.data("scrollspy-idle", !1), d.data("inviewstate", !0)
                        }, c.options.delay * f)), f++), !i && h && c.options.repeat && (d.data("scrollspy-idle") && clearTimeout(d.data("scrollspy-idle")), d.removeClass("uk-scrollspy-inview").toggleClass(j), d.data("inviewstate", !1), d.trigger("outview.uk.scrollspy")), g = e[g + 1] ? g + 1 : 0
                    })
                };
            f(), this.check = f, d.push(this)
        }
    });
    var f = [],
        g = function() {
            for (var a = 0; a < f.length; a++) window.requestAnimationFrame.apply(window, [f[a].check])
        };
    a.component("scrollspynav", {
        defaults: {
            cls: "uk-active",
            closest: !1,
            topoffset: 0,
            leftoffset: 0,
            smoothscroll: !1
        },
        boot: function() {
            c.on("scrolling.uk.document", g), b.on("resize orientationchange", a.Utils.debounce(g, 50)), a.ready(function(b) {
                a.$("[data-uk-scrollspy-nav]", b).each(function() {
                    var b = a.$(this);
                    b.data("scrollspynav") || a.scrollspynav(b, a.Utils.options(b.attr("data-uk-scrollspy-nav")))
                })
            })
        },
        init: function() {
            var c, d = [],
                e = this.find("a[href^='#']").each(function() {
                    d.push(a.$(this).attr("href"))
                }),
                g = a.$(d.join(",")),
                h = this.options.cls,
                i = this.options.closest || this.options.closest,
                j = this,
                k = function() {
                    c = [];
                    for (var d = 0; d < g.length; d++) a.Utils.isInView(g.eq(d), j.options) && c.push(g.eq(d));
                    if (c.length) {
                        var f, k = b.scrollTop(),
                            l = function() {
                                for (var a = 0; a < c.length; a++)
                                    if (c[a].offset().top >= k) return c[a]
                            }();
                        if (!l) return;
                        j.options.closest ? (e.closest(i).removeClass(h), f = e.filter("a[href='#" + l.attr("id") + "']").closest(i).addClass(h)) : f = e.removeClass(h).filter("a[href='#" + l.attr("id") + "']").addClass(h), j.element.trigger("inview.uk.scrollspynav", [l, f])
                    }
                };
            this.options.smoothscroll && a.smoothScroll && e.each(function() {
                a.smoothScroll(this, j.options.smoothscroll)
            }), k(), this.element.data("scrollspynav", this), this.check = k, f.push(this)
        }
    })
}(UIkit),
function(a) {
    "use strict";
    var b = [];
    a.component("toggle", {
        defaults: {
            target: !1,
            cls: "uk-hidden",
            animation: !1,
            duration: 200
        },
        boot: function() {
            a.ready(function(c) {
                a.$("[data-uk-toggle]", c).each(function() {
                    var b = a.$(this);
                    b.data("toggle") || a.toggle(b, a.Utils.options(b.attr("data-uk-toggle")))
                }), setTimeout(function() {
                    b.forEach(function(a) {
                        a.getToggles()
                    })
                }, 0)
            })
        },
        init: function() {
            var a = this;
            this.aria = -1 !== this.options.cls.indexOf("uk-hidden"), this.getToggles(), this.on("click", function(b) {
                a.element.is('a[href="#"]') && b.preventDefault(), a.toggle()
            }), b.push(this)
        },
        toggle: function() {
            if (this.totoggle.length) {
                if (this.options.animation && a.support.animation) {
                    var b = this,
                        c = this.options.animation.split(",");
                    1 == c.length && (c[1] = c[0]), c[0] = c[0].trim(), c[1] = c[1].trim(), this.totoggle.css("animation-duration", this.options.duration + "ms"), this.totoggle.each(function() {
                        var d = a.$(this);
                        d.hasClass(b.options.cls) ? (d.toggleClass(b.options.cls), a.Utils.animate(d, c[0]).then(function() {
                            d.css("animation-duration", ""), a.Utils.checkDisplay(d)
                        })) : a.Utils.animate(this, c[1] + " uk-animation-reverse").then(function() {
                            d.toggleClass(b.options.cls).css("animation-duration", ""), a.Utils.checkDisplay(d)
                        })
                    })
                } else this.totoggle.toggleClass(this.options.cls), a.Utils.checkDisplay(this.totoggle);
                this.updateAria()
            }
        },
        getToggles: function() {
            this.totoggle = this.options.target ? a.$(this.options.target) : [], this.updateAria()
        },
        updateAria: function() {
            this.aria && this.totoggle.length && this.totoggle.each(function() {
                a.$(this).attr("aria-hidden", a.$(this).hasClass("uk-hidden"))
            })
        }
    })
}(UIkit),
function(a) {
    "use strict";
    a.component("alert", {
        defaults: {
            fade: !0,
            duration: 200,
            trigger: ".uk-alert-close"
        },
        boot: function() {
            a.$html.on("click.alert.uikit", "[data-uk-alert]", function(b) {
                var c = a.$(this);
                if (!c.data("alert")) {
                    var d = a.alert(c, a.Utils.options(c.attr("data-uk-alert")));
                    a.$(b.target).is(d.options.trigger) && (b.preventDefault(), d.close())
                }
            })
        },
        init: function() {
            var a = this;
            this.on("click", this.options.trigger, function(b) {
                b.preventDefault(), a.close()
            })
        },
        close: function() {
            var a = this.trigger("close.uk.alert"),
                b = function() {
                    this.trigger("closed.uk.alert").remove()
                }.bind(this);
            this.options.fade ? a.css("overflow", "hidden").css("max-height", a.height()).animate({
                height: 0,
                opacity: 0,
                "padding-top": 0,
                "padding-bottom": 0,
                "margin-top": 0,
                "margin-bottom": 0
            }, this.options.duration, b) : b()
        }
    })
}(UIkit),
function(a) {
    "use strict";
    a.component("buttonRadio", {
        defaults: {
            activeClass: "uk-active",
            target: ".uk-button"
        },
        boot: function() {
            a.$html.on("click.buttonradio.uikit", "[data-uk-button-radio]", function(b) {
                var c = a.$(this);
                if (!c.data("buttonRadio")) {
                    var d = a.buttonRadio(c, a.Utils.options(c.attr("data-uk-button-radio"))),
                        e = a.$(b.target);
                    e.is(d.options.target) && e.trigger("click")
                }
            })
        },
        init: function() {
            var b = this;
            this.find(b.options.target).attr("aria-checked", "false").filter("." + b.options.activeClass).attr("aria-checked", "true"), this.on("click", this.options.target, function(c) {
                var d = a.$(this);
                d.is('a[href="#"]') && c.preventDefault(), b.find(b.options.target).not(d).removeClass(b.options.activeClass).blur(), d.addClass(b.options.activeClass), b.find(b.options.target).not(d).attr("aria-checked", "false"), d.attr("aria-checked", "true"), b.trigger("change.uk.button", [d])
            })
        },
        getSelected: function() {
            return this.find("." + this.options.activeClass)
        }
    }), a.component("buttonCheckbox", {
        defaults: {
            activeClass: "uk-active",
            target: ".uk-button"
        },
        boot: function() {
            a.$html.on("click.buttoncheckbox.uikit", "[data-uk-button-checkbox]", function(b) {
                var c = a.$(this);
                if (!c.data("buttonCheckbox")) {
                    var d = a.buttonCheckbox(c, a.Utils.options(c.attr("data-uk-button-checkbox"))),
                        e = a.$(b.target);
                    e.is(d.options.target) && e.trigger("click")
                }
            })
        },
        init: function() {
            var b = this;
            this.find(b.options.target).attr("aria-checked", "false").filter("." + b.options.activeClass).attr("aria-checked", "true"), this.on("click", this.options.target, function(c) {
                var d = a.$(this);
                d.is('a[href="#"]') && c.preventDefault(), d.toggleClass(b.options.activeClass).blur(), d.attr("aria-checked", d.hasClass(b.options.activeClass)), b.trigger("change.uk.button", [d])
            })
        },
        getSelected: function() {
            return this.find("." + this.options.activeClass)
        }
    }), a.component("button", {
        defaults: {},
        boot: function() {
            a.$html.on("click.button.uikit", "[data-uk-button]", function() {
                var b = a.$(this);
                b.data("button") || (a.button(b, a.Utils.options(b.attr("data-uk-button"))), b.trigger("click"))
            })
        },
        init: function() {
            var a = this;
            this.element.attr("aria-pressed", this.element.hasClass("uk-active")), this.on("click", function(b) {
                a.element.is('a[href="#"]') && b.preventDefault(), a.toggle(), a.trigger("change.uk.button", [a.element.blur().hasClass("uk-active")])
            })
        },
        toggle: function() {
            this.element.toggleClass("uk-active"), this.element.attr("aria-pressed", this.element.hasClass("uk-active"))
        }
    })
}(UIkit),
function(a) {
    "use strict";

    function b(b, c, d, e) {
        if (b = a.$(b), c = a.$(c), d = d || window.innerWidth, e = e || b.offset(), c.length) {
            var f = c.outerWidth();
            if (b.css("min-width", f), "right" == a.langdirection) {
                var g = d - (c.offset().left + f),
                    h = d - (b.offset().left + b.outerWidth());
                b.css("margin-right", g - h)
            } else b.css("margin-left", c.offset().left - e.left)
        }
    }
    var c, d = !1,
        e = {
            x: {
                "bottom-left": "bottom-right",
                "bottom-right": "bottom-left",
                "bottom-center": "bottom-right",
                "top-left": "top-right",
                "top-right": "top-left",
                "top-center": "top-right",
                "left-top": "right",
                "left-bottom": "right-bottom",
                "left-center": "right-center",
                "right-top": "left",
                "right-bottom": "left-bottom",
                "right-center": "left-center"
            },
            y: {
                "bottom-left": "top-left",
                "bottom-right": "top-right",
                "bottom-center": "top-center",
                "top-left": "bottom-left",
                "top-right": "bottom-right",
                "top-center": "bottom-center",
                "left-top": "top-left",
                "left-bottom": "left-bottom",
                "left-center": "top-left",
                "right-top": "top-left",
                "right-bottom": "bottom-left",
                "right-center": "top-left"
            },
            xy: {}
        };
    a.component("dropdown", {
        defaults: {
            mode: "hover",
            pos: "bottom-left",
            offset: 0,
            remaintime: 800,
            justify: !1,
            boundary: a.$win,
            delay: 0,
            dropdownSelector: ".uk-dropdown,.uk-dropdown-blank",
            hoverDelayIdle: 250
        },
        remainIdle: !1,
        boot: function() {
            var b = a.support.touch ? "click" : "mouseenter";
            a.$html.on(b + ".dropdown.uikit", "[data-uk-dropdown]", function(c) {
                var d = a.$(this);
                if (!d.data("dropdown")) {
                    var e = a.dropdown(d, a.Utils.options(d.attr("data-uk-dropdown")));
                    ("click" == b || "mouseenter" == b && "hover" == e.options.mode) && e.element.trigger(b), e.element.find(e.options.dropdownSelector).length && c.preventDefault()
                }
            })
        },
        init: function() {
            var b = this;
            this.dropdown = this.find(this.options.dropdownSelector), this.offsetParent = this.dropdown.parents().filter(function() {
                return -1 !== a.$.inArray(a.$(this).css("position"), ["relative", "fixed", "absolute"])
            }).slice(0, 1), this.centered = this.dropdown.hasClass("uk-dropdown-center"), this.justified = this.options.justify ? a.$(this.options.justify) : !1, this.boundary = a.$(this.options.boundary), this.boundary.length || (this.boundary = a.$win), this.dropdown.hasClass("uk-dropdown-up") && (this.options.pos = "top-left"), this.dropdown.hasClass("uk-dropdown-flip") && (this.options.pos = this.options.pos.replace("left", "right")), this.dropdown.hasClass("uk-dropdown-center") && (this.options.pos = this.options.pos.replace(/(left|right)/, "center")), this.element.attr("aria-haspopup", "true"), this.element.attr("aria-expanded", this.element.hasClass("uk-open")), "click" == this.options.mode || a.support.touch ? this.on("click.uikit.dropdown", function(c) {
                var d = a.$(c.target);
                d.parents(b.options.dropdownSelector).length || ((d.is("a[href='#']") || d.parent().is("a[href='#']") || b.dropdown.length && !b.dropdown.is(":visible")) && c.preventDefault(), d.blur()), b.element.hasClass("uk-open") ? (!b.dropdown.find(c.target).length || d.is(".uk-dropdown-close") || d.parents(".uk-dropdown-close").length) && b.hide() : b.show()
            }) : this.on("mouseenter", function() {
                b.trigger("pointerenter.uk.dropdown", [b]), b.remainIdle && clearTimeout(b.remainIdle), c && clearTimeout(c), d && d == b || (c = d && d != b ? setTimeout(function() {
                    c = setTimeout(b.show.bind(b), b.options.delay)
                }, b.options.hoverDelayIdle) : setTimeout(b.show.bind(b), b.options.delay))
            }).on("mouseleave", function() {
                c && clearTimeout(c), b.remainIdle = setTimeout(function() {
                    d && d == b && b.hide()
                }, b.options.remaintime), b.trigger("pointerleave.uk.dropdown", [b])
            }).on("click", function(c) {
                var e = a.$(c.target);
                b.remainIdle && clearTimeout(b.remainIdle), d && d == b || ((e.is("a[href='#']") || e.parent().is("a[href='#']")) && c.preventDefault(), b.show())
            })
        },
        show: function() {
            a.$html.off("click.outer.dropdown"), d && d != this && d.hide(!0), c && clearTimeout(c), this.trigger("beforeshow.uk.dropdown", [this]), this.checkDimensions(), this.element.addClass("uk-open"), this.element.attr("aria-expanded", "true"), this.trigger("show.uk.dropdown", [this]), a.Utils.checkDisplay(this.dropdown, !0), d = this, this.registerOuterClick()
        },
        hide: function(a) {
            this.trigger("beforehide.uk.dropdown", [this, a]), this.element.removeClass("uk-open"), this.remainIdle && clearTimeout(this.remainIdle), this.remainIdle = !1, this.element.attr("aria-expanded", "false"), this.trigger("hide.uk.dropdown", [this, a]), d == this && (d = !1)
        },
        registerOuterClick: function() {
            var b = this;
            a.$html.off("click.outer.dropdown"), setTimeout(function() {
                a.$html.on("click.outer.dropdown", function(e) {
                    c && clearTimeout(c), a.$(e.target), d != b || b.element.find(e.target).length || (b.hide(!0), a.$html.off("click.outer.dropdown"))
                })
            }, 10)
        },
        checkDimensions: function() {
            if (this.dropdown.length) {
                this.dropdown.removeClass("uk-dropdown-top uk-dropdown-bottom uk-dropdown-left uk-dropdown-right uk-dropdown-stack").css({
                    "top-left": "",
                    left: "",
                    "margin-left": "",
                    "margin-right": ""
                }), this.justified && this.justified.length && this.dropdown.css("min-width", "");
                var c, d = a.$.extend({}, this.offsetParent.offset(), {
                        width: this.offsetParent[0].offsetWidth,
                        height: this.offsetParent[0].offsetHeight
                    }),
                    f = this.options.offset,
                    g = this.dropdown,
                    h = (g.show().offset(), g.outerWidth()),
                    i = g.outerHeight(),
                    j = this.boundary.width(),
                    k = (this.boundary.offset() ? this.boundary.offset() : {
                        top: 0,
                        left: 0
                    }, this.options.pos),
                    l = {
                        "bottom-left": {
                            top: 0 + d.height + f,
                            left: 0
                        },
                        "bottom-right": {
                            top: 0 + d.height + f,
                            left: 0 + d.width - h
                        },
                        "bottom-center": {
                            top: 0 + d.height + f,
                            left: 0 + d.width / 2 - h / 2
                        },
                        "top-left": {
                            top: 0 - i - f,
                            left: 0
                        },
                        "top-right": {
                            top: 0 - i - f,
                            left: 0 + d.width - h
                        },
                        "top-center": {
                            top: 0 - i - f,
                            left: 0 + d.width / 2 - h / 2
                        },
                        "left-top": {
                            top: 0,
                            left: 0 - h - f
                        },
                        "left-bottom": {
                            top: 0 + d.height - i,
                            left: 0 - h - f
                        },
                        "left-center": {
                            top: 0 + d.height / 2 - i / 2,
                            left: 0 - h - f
                        },
                        "right-top": {
                            top: 0,
                            left: 0 + d.width + f
                        },
                        "right-bottom": {
                            top: 0 + d.height - i,
                            left: 0 + d.width + f
                        },
                        "right-center": {
                            top: 0 + d.height / 2 - i / 2,
                            left: 0 + d.width + f
                        }
                    },
                    m = {};
                if (c = k.split("-"), m = l[k] ? l[k] : l["bottom-left"], this.justified && this.justified.length) b(g.css({
                    left: 0
                }), this.justified, j);
                else {
                    switch (this.checkBoundary(d.left + m.left, d.top + m.top, h, i, j)) {
                        case "x":
                            k = e.x[k] || "right-top";
                            break;
                        case "y":
                            k = e.y[k] || "top-left";
                            break;
                        case "xy":
                            k = e.xy[k] || "right-bottom"
                    }
                    c = k.split("-"), m = l[k] ? l[k] : l["bottom-left"]
                }
                h > j && (g.addClass("uk-dropdown-stack"), this.trigger("stack.uk.dropdown", [this])), g.css(m).css("display", "").addClass("uk-dropdown-" + c[0])
            }
        },
        checkBoundary: function(b, c, d, e, f) {
            var g = "";
            return (0 > b || b - a.$win.scrollLeft() + d > f) && (g += "x"), (0 > c || c - a.$win.scrollTop() + e > window.innerHeight) && (g += "y"), g
        }
    }), a.component("dropdownOverlay", {
        defaults: {
            justify: !1,
            cls: "",
            duration: 200
        },
        boot: function() {
            a.ready(function(b) {
                a.$("[data-uk-dropdown-overlay]", b).each(function() {
                    var b = a.$(this);
                    b.data("dropdownOverlay") || a.dropdownOverlay(b, a.Utils.options(b.attr("data-uk-dropdown-overlay")))
                })
            })
        },
        init: function() {
            var c = this;
            this.justified = this.options.justify ? a.$(this.options.justify) : !1, this.overlay = this.element.find("uk-dropdown-overlay"), this.overlay.length || (this.overlay = a.$('<div class="uk-dropdown-overlay"></div>').appendTo(this.element)), this.overlay.addClass(this.options.cls), this.on({
                "beforeshow.uk.dropdown": function(a, d) {
                    c.dropdown = d, c.justified && c.justified.length && b(c.overlay.css({
                        display: "block",
                        "margin-left": "",
                        "margin-right": ""
                    }), c.justified, c.justified.outerWidth())
                },
                "show.uk.dropdown": function() {
                    var b = c.dropdown.dropdown.outerHeight(!0);
                    c.dropdown.element.removeClass("uk-open"), c.overlay.stop().css("display", "block").animate({
                        height: b
                    }, c.options.duration, function() {
                        c.dropdown.dropdown.css("visibility", ""), c.dropdown.element.addClass("uk-open"), a.Utils.checkDisplay(c.dropdown.dropdown, !0)
                    }), c.pointerleave = !1
                },
                "hide.uk.dropdown": function() {
                    c.overlay.stop().animate({
                        height: 0
                    }, c.options.duration)
                },
                "pointerenter.uk.dropdown": function() {
                    clearTimeout(c.remainIdle)
                },
                "pointerleave.uk.dropdown": function() {
                    c.pointerleave = !0
                }
            }), this.overlay.on({
                mouseenter: function() {
                    c.remainIdle && (clearTimeout(c.dropdown.remainIdle), clearTimeout(c.remainIdle))
                },
                mouseleave: function() {
                    c.pointerleave && d && (c.remainIdle = setTimeout(function() {
                        d && d.hide()
                    }, d.options.remaintime))
                }
            })
        }
    })
}(UIkit),
function(a) {
    "use strict";
    var b = [];
    a.component("gridMatchHeight", {
        defaults: {
            target: !1,
            row: !0,
            ignorestacked: !1
        },
        boot: function() {
            a.ready(function(b) {
                a.$("[data-uk-grid-match]", b).each(function() {
                    var b, c = a.$(this);
                    c.data("gridMatchHeight") || (b = a.gridMatchHeight(c, a.Utils.options(c.attr("data-uk-grid-match"))))
                })
            })
        },
        init: function() {
            var c = this;
            this.columns = this.element.children(), this.elements = this.options.target ? this.find(this.options.target) : this.columns, this.columns.length && (a.$win.on("load resize orientationchange", function() {
                var b = function() {
                    c.match()
                };
                return a.$(function() {
                    b()
                }), a.Utils.debounce(b, 50)
            }()), a.$html.on("changed.uk.dom", function() {
                c.columns = c.element.children(), c.elements = c.options.target ? c.find(c.options.target) : c.columns, c.match()
            }), this.on("display.uk.check", function() {
                this.element.is(":visible") && this.match()
            }.bind(this)), b.push(this))
        },
        match: function() {
            var b = this.columns.filter(":visible:first");
            if (b.length) {
                var c = Math.ceil(100 * parseFloat(b.css("width")) / parseFloat(b.parent().css("width"))) >= 100;
                return c && !this.options.ignorestacked ? this.revert() : a.Utils.matchHeights(this.elements, this.options), this
            }
        },
        revert: function() {
            return this.elements.css("min-height", ""), this
        }
    }), a.component("gridMargin", {
        defaults: {
            cls: "uk-grid-margin"
        },
        boot: function() {
            a.ready(function(b) {
                a.$("[data-uk-grid-margin]", b).each(function() {
                    var b, c = a.$(this);
                    c.data("gridMargin") || (b = a.gridMargin(c, a.Utils.options(c.attr("data-uk-grid-margin"))))
                })
            })
        },
        init: function() {
            a.stackMargin(this.element, this.options)
        }
    })
}(UIkit),
function(a) {
    "use strict";

    function b(b, c) {
        return c ? ("object" == typeof b ? (b = b instanceof jQuery ? b : a.$(b), b.parent().length && (c.persist = b, c.persist.data("modalPersistParent", b.parent()))) : b = "string" == typeof b || "number" == typeof b ? a.$("<div></div>").html(b) : a.$("<div></div>").html("UIkit.modal Error: Unsupported data type: " + typeof b), b.appendTo(c.element.find(".uk-modal-dialog")), c) : void 0
    }
    var c, d = !1,
        e = 0,
        f = a.$html;
    a.component("modal", {
        defaults: {
            keyboard: !0,
            bgclose: !0,
            minScrollHeight: 150,
            center: !1,
            modal: !0
        },
        scrollable: !1,
        transition: !1,
        hasTransitioned: !0,
        init: function() {
            if (c || (c = a.$("body")), this.element.length) {
                var b = this;
                this.paddingdir = "padding-" + ("left" == a.langdirection ? "right" : "left"), this.dialog = this.find(".uk-modal-dialog"), this.active = !1, this.element.attr("aria-hidden", this.element.hasClass("uk-open")), this.on("click", ".uk-modal-close", function(a) {
                    a.preventDefault(), b.hide()
                }).on("click", function(c) {
                    var d = a.$(c.target);
                    d[0] == b.element[0] && b.options.bgclose && b.hide()
                })
            }
        },
        toggle: function() {
            return this[this.isActive() ? "hide" : "show"]()
        },
        show: function() {
            if (this.element.length) {
                var b = this;
                if (!this.isActive()) return this.options.modal && d && d.hide(!0), this.element.removeClass("uk-open").show(), this.resize(), this.options.modal && (d = this), this.active = !0, e++, a.support.transition ? (this.hasTransitioned = !1, this.element.one(a.support.transition.end, function() {
                    b.hasTransitioned = !0
                }).addClass("uk-open")) : this.element.addClass("uk-open"), f.addClass("uk-modal-page").height(), this.element.attr("aria-hidden", "false"), this.element.trigger("show.uk.modal"), a.Utils.checkDisplay(this.dialog, !0), this
            }
        },
        hide: function(b) {
            if (!b && a.support.transition && this.hasTransitioned) {
                var c = this;
                this.one(a.support.transition.end, function() {
                    c._hide()
                }).removeClass("uk-open")
            } else this._hide();
            return this
        },
        resize: function() {
            var a = c.width();
            if (this.scrollbarwidth = window.innerWidth - a, c.css(this.paddingdir, this.scrollbarwidth), this.element.css("overflow-y", this.scrollbarwidth ? "scroll" : "auto"), !this.updateScrollable() && this.options.center) {
                var b = this.dialog.outerHeight(),
                    d = parseInt(this.dialog.css("margin-top"), 10) + parseInt(this.dialog.css("margin-bottom"), 10);
                b + d < window.innerHeight ? this.dialog.css({
                    top: window.innerHeight / 2 - b / 2 - d
                }) : this.dialog.css({
                    top: ""
                })
            }
        },
        updateScrollable: function() {
            var a = this.dialog.find(".uk-overflow-container:visible:first");
            if (a.length) {
                a.css("height", 0);
                var b = Math.abs(parseInt(this.dialog.css("margin-top"), 10)),
                    c = this.dialog.outerHeight(),
                    d = window.innerHeight,
                    e = d - 2 * (20 > b ? 20 : b) - c;
                return a.css("height", e < this.options.minScrollHeight ? "" : e), !0
            }
            return !1
        },
        _hide: function() {
            this.active = !1, e > 0 ? e-- : e = 0, this.element.hide().removeClass("uk-open"), this.element.attr("aria-hidden", "true"), e || (f.removeClass("uk-modal-page"), c.css(this.paddingdir, "")), d === this && (d = !1), this.trigger("hide.uk.modal")
        },
        isActive: function() {
            return this.active
        }
    }), a.component("modalTrigger", {
        boot: function() {
            a.$html.on("click.modal.uikit", "[data-uk-modal]", function(b) {
                var c = a.$(this);
                if (c.is("a") && b.preventDefault(), !c.data("modalTrigger")) {
                    var d = a.modalTrigger(c, a.Utils.options(c.attr("data-uk-modal")));
                    d.show()
                }
            }), a.$html.on("keydown.modal.uikit", function(a) {
                d && 27 === a.keyCode && d.options.keyboard && (a.preventDefault(), d.hide())
            }), a.$win.on("resize orientationchange", a.Utils.debounce(function() {
                d && d.resize()
            }, 150))
        },
        init: function() {
            var b = this;
            this.options = a.$.extend({
                target: b.element.is("a") ? b.element.attr("href") : !1
            }, this.options), this.modal = a.modal(this.options.target, this.options), this.on("click", function(a) {
                a.preventDefault(), b.show()
            }), this.proxy(this.modal, "show hide isActive")
        }
    }), a.modal.dialog = function(c, d) {
        var e = a.modal(a.$(a.modal.dialog.template).appendTo("body"), d);
        return e.on("hide.uk.modal", function() {
            e.persist && (e.persist.appendTo(e.persist.data("modalPersistParent")), e.persist = !1), e.element.remove()
        }), b(c, e), e
    }, a.modal.dialog.template = '<div class="uk-modal"><div class="uk-modal-dialog" style="min-height:0;"></div></div>', a.modal.alert = function(b, c) {
        c = a.$.extend(!0, {
            bgclose: !1,
            keyboard: !1,
            modal: !1,
            labels: a.modal.labels
        }, c);
        var d = a.modal.dialog(['<div class="uk-margin uk-modal-content">' + String(b) + "</div>", '<div class="uk-modal-footer uk-text-right"><button class="uk-button uk-button-primary uk-modal-close">' + c.labels.Ok + "</button></div>"].join(""), c);
        return d.on("show.uk.modal", function() {
            setTimeout(function() {
                d.element.find("button:first").focus()
            }, 50)
        }), d.show()
    }, a.modal.confirm = function(b, c, d) {
        c = a.$.isFunction(c) ? c : function() {}, d = a.$.extend(!0, {
            bgclose: !1,
            keyboard: !1,
            modal: !1,
            labels: a.modal.labels
        }, d);
        var e = a.modal.dialog(['<div class="uk-margin uk-modal-content">' + String(b) + "</div>", '<div class="uk-modal-footer uk-text-right"><button class="uk-button uk-modal-close">' + d.labels.Cancel + '</button> <button class="uk-button uk-button-primary js-modal-confirm">' + d.labels.Ok + "</button></div>"].join(""), d);
        return e.element.find(".js-modal-confirm").on("click", function() {
            c(), e.hide()
        }), e.on("show.uk.modal", function() {
            setTimeout(function() {
                e.element.find(".js-modal-confirm").focus()
            }, 50)
        }), e.show()
    }, a.modal.prompt = function(b, c, d, e) {
        d = a.$.isFunction(d) ? d : function() {}, e = a.$.extend(!0, {
            bgclose: !1,
            keyboard: !1,
            modal: !1,
            labels: a.modal.labels
        }, e);
        var f = a.modal.dialog([b ? '<div class="uk-modal-content uk-form">' + String(b) + "</div>" : "", '<div class="uk-margin-small-top uk-modal-content uk-form"><p><input type="text" class="uk-width-1-1"></p></div>', '<div class="uk-modal-footer uk-text-right"><button class="uk-button uk-modal-close">' + e.labels.Cancel + '</button> <button class="uk-button uk-button-primary js-modal-ok">' + e.labels.Ok + "</button></div>"].join(""), e),
            g = f.element.find("input[type='text']").val(c || "").on("keyup", function(a) {
                13 == a.keyCode && f.element.find(".js-modal-ok").trigger("click")
            });
        return f.element.find(".js-modal-ok").on("click", function() {
            d(g.val()) !== !1 && f.hide()
        }), f.on("show.uk.modal", function() {
            setTimeout(function() {
                g.focus()
            }, 50)
        }), f.show()
    }, a.modal.blockUI = function(b, c) {
        var d = a.modal.dialog(['<div class="uk-margin uk-modal-content">' + String(b || '<div class="uk-text-center">...</div>') + "</div>"].join(""), a.$.extend({
            bgclose: !1,
            keyboard: !1,
            modal: !1
        }, c));
        return d.content = d.element.find(".uk-modal-content:first"), d.show()
    }, a.modal.labels = {
        Ok: "Ok",
        Cancel: "Cancel"
    }
}(UIkit),
function(a) {
    "use strict";

    function b(b) {
        var c = a.$(b),
            d = "auto";
        if (c.is(":visible")) d = c.outerHeight();
        else {
            var e = {
                position: c.css("position"),
                visibility: c.css("visibility"),
                display: c.css("display")
            };
            d = c.css({
                position: "absolute",
                visibility: "hidden",
                display: "block"
            }).outerHeight(), c.css(e)
        }
        return d
    }
    a.component("nav", {
        defaults: {
            toggle: ">li.uk-parent > a[href='#']",
            lists: ">li.uk-parent > ul",
            multiple: !1
        },
        boot: function() {
            a.ready(function(b) {
                a.$("[data-uk-nav]", b).each(function() {
                    var b = a.$(this);
                    b.data("nav") || a.nav(b, a.Utils.options(b.attr("data-uk-nav")))
                })
            })
        },
        init: function() {
            var b = this;
            this.on("click.uikit.nav", this.options.toggle, function(c) {
                c.preventDefault();
                var d = a.$(this);
                b.open(d.parent()[0] == b.element[0] ? d : d.parent("li"))
            }), this.find(this.options.lists).each(function() {
                var c = a.$(this),
                    d = c.parent(),
                    e = d.hasClass("uk-active");
                c.wrap('<div style="overflow:hidden;height:0;position:relative;"></div>'), d.data("list-container", c.parent()[e ? "removeClass" : "addClass"]("uk-hidden")), d.attr("aria-expanded", d.hasClass("uk-open")), e && b.open(d, !0)
            })
        },
        open: function(c, d) {
            var e = this,
                f = this.element,
                g = a.$(c),
                h = g.data("list-container");
            this.options.multiple || f.children(".uk-open").not(c).each(function() {
                var b = a.$(this);
                b.data("list-container") && b.data("list-container").stop().animate({
                    height: 0
                }, function() {
                    a.$(this).parent().removeClass("uk-open").end().addClass("uk-hidden")
                })
            }), g.toggleClass("uk-open"), g.attr("aria-expanded", g.hasClass("uk-open")), h && (g.hasClass("uk-open") && h.removeClass("uk-hidden"), d ? (h.stop().height(g.hasClass("uk-open") ? "auto" : 0), g.hasClass("uk-open") || h.addClass("uk-hidden"), this.trigger("display.uk.check")) : h.stop().animate({
                height: g.hasClass("uk-open") ? b(h.find("ul:first")) : 0
            }, function() {
                g.hasClass("uk-open") ? h.css("height", "") : h.addClass("uk-hidden"), e.trigger("display.uk.check")
            }))
        }
    })
}(UIkit),
function(a) {
    "use strict";
    var b = {
            x: window.scrollX,
            y: window.scrollY
        },
        c = (a.$win, a.$doc, a.$html),
        d = {
            show: function(d) {
                if (d = a.$(d), d.length) {
                    var e = a.$("body"),
                        f = d.find(".uk-offcanvas-bar:first"),
                        g = "right" == a.langdirection,
                        h = f.hasClass("uk-offcanvas-bar-flip") ? -1 : 1,
                        i = h * (g ? -1 : 1),
                        j = window.innerWidth - e.width();
                    b = {
                        x: window.pageXOffset,
                        y: window.pageYOffset
                    }, d.addClass("uk-active"), e.css({
                        width: window.innerWidth - j,
                        height: window.innerHeight
                    }).addClass("uk-offcanvas-page"), e.css(g ? "margin-right" : "margin-left", (g ? -1 : 1) * f.outerWidth() * i).width(), c.css("margin-top", -1 * b.y), f.addClass("uk-offcanvas-bar-show"), this._initElement(d), f.trigger("show.uk.offcanvas", [d, f]), d.attr("aria-hidden", "false")
                }
            },
            hide: function(d) {
                var e = a.$("body"),
                    f = a.$(".uk-offcanvas.uk-active"),
                    g = "right" == a.langdirection,
                    h = f.find(".uk-offcanvas-bar:first"),
                    i = function() {
                        e.removeClass("uk-offcanvas-page").css({
                            width: "",
                            height: "",
                            "margin-left": "",
                            "margin-right": ""
                        }), f.removeClass("uk-active"), h.removeClass("uk-offcanvas-bar-show"), c.css("margin-top", ""), window.scrollTo(b.x, b.y), h.trigger("hide.uk.offcanvas", [f, h]), f.attr("aria-hidden", "true")
                    };
                f.length && (a.support.transition && !d ? (e.one(a.support.transition.end, function() {
                    i()
                }).css(g ? "margin-right" : "margin-left", ""), setTimeout(function() {
                    h.removeClass("uk-offcanvas-bar-show")
                }, 0)) : i())
            },
            _initElement: function(b) {
                b.data("OffcanvasInit") || (b.on("click.uk.offcanvas swipeRight.uk.offcanvas swipeLeft.uk.offcanvas", function(b) {
                    var c = a.$(b.target);
                    if (!b.type.match(/swipe/) && !c.hasClass("uk-offcanvas-close")) {
                        if (c.hasClass("uk-offcanvas-bar")) return;
                        if (c.parents(".uk-offcanvas-bar:first").length) return
                    }
                    b.stopImmediatePropagation(), d.hide()
                }), b.on("click", "a[href^='#']", function() {
                    var b = a.$(this),
                        c = b.attr("href");
                    "#" != c && (a.$doc.one("hide.uk.offcanvas", function() {
                        var d;
                        try {
                            d = a.$(c)
                        } catch (e) {
                            d = ""
                        }
                        d.length || (d = a.$('[name="' + c.replace("#", "") + '"]')), d.length && b.attr("data-uk-smooth-scroll") && a.Utils.scrollToElement ? a.Utils.scrollToElement(d, a.Utils.options(b.attr("data-uk-smooth-scroll") || "{}")) : window.location.href = c
                    }), d.hide())
                }), b.data("OffcanvasInit", !0))
            }
        };
    a.component("offcanvasTrigger", {
        boot: function() {
            c.on("click.offcanvas.uikit", "[data-uk-offcanvas]", function(b) {
                b.preventDefault();
                var c = a.$(this);
                c.data("offcanvasTrigger") || (a.offcanvasTrigger(c, a.Utils.options(c.attr("data-uk-offcanvas"))), c.trigger("click"))
            }), c.on("keydown.uk.offcanvas", function(a) {
                27 === a.keyCode && d.hide()
            })
        },
        init: function() {
            var b = this;
            this.options = a.$.extend({
                target: b.element.is("a") ? b.element.attr("href") : !1
            }, this.options), this.on("click", function(a) {
                a.preventDefault(), d.show(b.options.target)
            })
        }
    }), a.offcanvas = d
}(UIkit),
function(a) {
    "use strict";

    function b(b, c, d) {
        var e, f = a.$.Deferred(),
            g = b,
            h = b;
        return d[0] === c[0] ? (f.resolve(), f.promise()) : ("object" == typeof b && (g = b[0], h = b[1] || b[0]), a.$body.css("overflow-x", "hidden"), e = function() {
            c && c.hide().removeClass("uk-active " + h + " uk-animation-reverse"), d.addClass(g).one(a.support.animation.end, function() {
                d.removeClass("" + g).css({
                    opacity: "",
                    display: ""
                }), f.resolve(), a.$body.css("overflow-x", ""), c && c.css({
                    opacity: "",
                    display: ""
                })
            }.bind(this)).show()
        }, d.css("animation-duration", this.options.duration + "ms"), c && c.length ? (c.css("animation-duration", this.options.duration + "ms"), c.css("display", "none").addClass(h + " uk-animation-reverse").one(a.support.animation.end, function() {
            e()
        }.bind(this)).css("display", "")) : (d.addClass("uk-active"), e()), f.promise())
    }
    var c;
    a.component("switcher", {
        defaults: {
            connect: !1,
            toggle: ">*",
            active: 0,
            animation: !1,
            duration: 200,
            swiping: !0
        },
        animating: !1,
        boot: function() {
            a.ready(function(b) {
                a.$("[data-uk-switcher]", b).each(function() {
                    var b = a.$(this);
                    b.data("switcher") || a.switcher(b, a.Utils.options(b.attr("data-uk-switcher")))
                })
            })
        },
        init: function() {
            var b = this;
            if (this.on("click.uikit.switcher", this.options.toggle, function(a) {
                    a.preventDefault(), b.show(this)
                }), this.options.connect) {
                this.connect = a.$(this.options.connect), this.connect.find(".uk-active").removeClass(".uk-active"), this.connect.length && (this.connect.children().attr("aria-hidden", "true"), this.connect.on("click", "[data-uk-switcher-item]", function(c) {
                    c.preventDefault();
                    var d = a.$(this).attr("data-uk-switcher-item");
                    if (b.index != d) switch (d) {
                        case "next":
                        case "previous":
                            b.show(b.index + ("next" == d ? 1 : -1));
                            break;
                        default:
                            b.show(parseInt(d, 10))
                    }
                }), this.options.swiping && this.connect.on("swipeRight swipeLeft", function(a) {
                    a.preventDefault(), window.getSelection().toString() || b.show(b.index + ("swipeLeft" == a.type ? 1 : -1))
                }));
                var c = this.find(this.options.toggle),
                    d = c.filter(".uk-active");
                if (d.length) this.show(d, !1);
                else {
                    if (this.options.active === !1) return;
                    d = c.eq(this.options.active), this.show(d.length ? d : c.eq(0), !1)
                }
                c.not(d).attr("aria-expanded", "false"), d.attr("aria-expanded", "true"), this.on("changed.uk.dom", function() {
                    b.connect = a.$(b.options.connect)
                })
            }
        },
        show: function(d, e) {
            if (!this.animating) {
                if (isNaN(d)) d = a.$(d);
                else {
                    var f = this.find(this.options.toggle);
                    d = 0 > d ? f.length - 1 : d, d = f.eq(f[d] ? d : 0)
                }
                var g = this,
                    f = this.find(this.options.toggle),
                    h = a.$(d),
                    i = c[this.options.animation] || function(a, d) {
                        if (!g.options.animation) return c.none.apply(g);
                        var e = g.options.animation.split(",");
                        return 1 == e.length && (e[1] = e[0]), e[0] = e[0].trim(), e[1] = e[1].trim(), b.apply(g, [e, a, d])
                    };
                e !== !1 && a.support.animation || (i = c.none), h.hasClass("uk-disabled") || (f.attr("aria-expanded", "false"), h.attr("aria-expanded", "true"), f.filter(".uk-active").removeClass("uk-active"), h.addClass("uk-active"), this.options.connect && this.connect.length && (this.index = this.find(this.options.toggle).index(h), -1 == this.index && (this.index = 0), this.connect.each(function() {
                    var b = a.$(this),
                        c = a.$(b.children()),
                        d = a.$(c.filter(".uk-active")),
                        e = a.$(c.eq(g.index));
                    g.animating = !0, i.apply(g, [d, e]).then(function() {
                        d.removeClass("uk-active"), e.addClass("uk-active"), d.attr("aria-hidden", "true"), e.attr("aria-hidden", "false"), a.Utils.checkDisplay(e, !0), g.animating = !1
                    })
                })), this.trigger("show.uk.switcher", [h]))
            }
        }
    }), c = {
        none: function() {
            var b = a.$.Deferred();
            return b.resolve(), b.promise()
        },
        fade: function(a, c) {
            return b.apply(this, ["uk-animation-fade", a, c])
        },
        "slide-bottom": function(a, c) {
            return b.apply(this, ["uk-animation-slide-bottom", a, c])
        },
        "slide-top": function(a, c) {
            return b.apply(this, ["uk-animation-slide-top", a, c])
        },
        "slide-vertical": function(a, c) {
            var d = ["uk-animation-slide-top", "uk-animation-slide-bottom"];
            return a && a.index() > c.index() && d.reverse(), b.apply(this, [d, a, c])
        },
        "slide-left": function(a, c) {
            return b.apply(this, ["uk-animation-slide-left", a, c])
        },
        "slide-right": function(a, c) {
            return b.apply(this, ["uk-animation-slide-right", a, c])
        },
        "slide-horizontal": function(a, c) {
            var d = ["uk-animation-slide-right", "uk-animation-slide-left"];
            return a && a.index() > c.index() && d.reverse(), b.apply(this, [d, a, c])
        },
        scale: function(a, c) {
            return b.apply(this, ["uk-animation-scale-up", a, c])
        }
    }, a.switcher.animations = c
}(UIkit),
function(a) {
    "use strict";
    a.component("tab", {
        defaults: {
            target: ">li:not(.uk-tab-responsive, .uk-disabled)",
            connect: !1,
            active: 0,
            animation: !1,
            duration: 200,
            swiping: !0
        },
        boot: function() {
            a.ready(function(b) {
                a.$("[data-uk-tab]", b).each(function() {
                    var b = a.$(this);
                    b.data("tab") || a.tab(b, a.Utils.options(b.attr("data-uk-tab")))
                })
            })
        },
        init: function() {
            var b = this;
            this.current = !1, this.on("click.uikit.tab", this.options.target, function(c) {
                if (c.preventDefault(), !b.switcher || !b.switcher.animating) {
                    var d = b.find(b.options.target).not(this);
                    d.removeClass("uk-active").blur(), b.trigger("change.uk.tab", [a.$(this).addClass("uk-active"), b.current]), b.current = a.$(this), b.options.connect || (d.attr("aria-expanded", "false"), a.$(this).attr("aria-expanded", "true"))
                }
            }), this.options.connect && (this.connect = a.$(this.options.connect)), this.responsivetab = a.$('<li class="uk-tab-responsive uk-active"><a></a></li>').append('<div class="uk-dropdown uk-dropdown-small"><ul class="uk-nav uk-nav-dropdown"></ul><div>'), this.responsivetab.dropdown = this.responsivetab.find(".uk-dropdown"), this.responsivetab.lst = this.responsivetab.dropdown.find("ul"), this.responsivetab.caption = this.responsivetab.find("a:first"), this.element.hasClass("uk-tab-bottom") && this.responsivetab.dropdown.addClass("uk-dropdown-up"), this.responsivetab.lst.on("click.uikit.tab", "a", function(c) {
                c.preventDefault(), c.stopPropagation();
                var d = a.$(this);
                b.element.children("li:not(.uk-tab-responsive)").eq(d.data("index")).trigger("click")
            }), this.on("show.uk.switcher change.uk.tab", function(a, c) {
                b.responsivetab.caption.html(c.text())
            }), this.element.append(this.responsivetab), this.options.connect && (this.switcher = a.switcher(this.element, {
                toggle: ">li:not(.uk-tab-responsive)",
                connect: this.options.connect,
                active: this.options.active,
                animation: this.options.animation,
                duration: this.options.duration,
                swiping: this.options.swiping
            })), a.dropdown(this.responsivetab, {
                mode: "click"
            }), b.trigger("change.uk.tab", [this.element.find(this.options.target).not(".uk-tab-responsive").filter(".uk-active")]), this.check(), a.$win.on("resize orientationchange", a.Utils.debounce(function() {
                b.element.is(":visible") && b.check()
            }, 100)), this.on("display.uk.check", function() {
                b.element.is(":visible") && b.check()
            })
        },
        check: function() {
            var b = this.element.children("li:not(.uk-tab-responsive)").removeClass("uk-hidden");
            if (!b.length) return void this.responsivetab.addClass("uk-hidden");
            var c, d, e, f = b.eq(0).offset().top + Math.ceil(b.eq(0).height() / 2),
                g = !1;
            if (this.responsivetab.lst.empty(), b.each(function() {
                    a.$(this).offset().top > f && (g = !0)
                }), g)
                for (var h = 0; h < b.length; h++) c = a.$(b.eq(h)), d = c.find("a"), "none" == c.css("float") || c.attr("uk-dropdown") || (c.hasClass("uk-disabled") || (e = c[0].outerHTML.replace("<a ", '<a data-index="' + h + '" '), this.responsivetab.lst.append(e)), c.addClass("uk-hidden"));
            this.responsivetab[this.responsivetab.lst.children("li").length ? "removeClass" : "addClass"]("uk-hidden")
        }
    })
}(UIkit),
function(a) {
    "use strict";
    a.component("cover", {
        defaults: {
            automute: !0
        },
        boot: function() {
            a.ready(function(b) {
                a.$("[data-uk-cover]", b).each(function() {
                    var b = a.$(this);
                    b.data("cover") || a.cover(b, a.Utils.options(b.attr("data-uk-cover")))
                })
            })
        },
        init: function() {
            if (this.parent = this.element.parent(), a.$win.on("load resize orientationchange", a.Utils.debounce(function() {
                    this.check()
                }.bind(this), 100)), this.on("display.uk.check", function() {
                    this.element.is(":visible") && this.check()
                }.bind(this)), this.check(), this.element.is("iframe") && this.options.automute) {
                var b = this.element.attr("src");
                this.element.attr("src", "").on("load", function() {
                    this.contentWindow.postMessage('{ "event": "command", "func": "mute", "method":"setVolume", "value":0}', "*")
                }).attr("src", [b, b.indexOf("?") > -1 ? "&" : "?", "enablejsapi=1&api=1"].join(""))
            }
        },
        check: function() {
            this.element.css({
                width: "",
                height: ""
            }), this.dimension = {
                w: this.element.width(),
                h: this.element.height()
            }, this.element.attr("width") && !isNaN(this.element.attr("width")) && (this.dimension.w = this.element.attr("width")), this.element.attr("height") && !isNaN(this.element.attr("height")) && (this.dimension.h = this.element.attr("height")), this.ratio = this.dimension.w / this.dimension.h;
            var a, b, c = this.parent.width(),
                d = this.parent.height();
            c / this.ratio < d ? (a = Math.ceil(d * this.ratio), b = d) : (a = c, b = Math.ceil(c / this.ratio)), this.element.css({
                width: a,
                height: b
            })
        }
    })
}(UIkit), $("#calc_budgets").click(function() {
        calcFigures()
    }), $("input#buyer_salary").keyup(function(a) {
        a.which >= 37 && a.which <= 40 || $(this).val(function(a, b) {
            return b.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        })
    }), $("#buyer_salary").focusout(function() {
        var a = $("#buyer_salary").val();
        a = a.replace(",", ""), a = parseInt(a), 18e3 > a ? ($(".buyer_salary_val").addClass("visible"), $("#buyer-salary-input-val").removeClass("visible")) : ($("#buyer-salary-input-val").addClass("visible"), $(".buyer_salary_val").removeClass("visible"), calcFigures())
    }), valField("unm_reg_full_name"), valField("unm_reg_email"), valField("unm_reg_phone"), $(function() {
        $.typeahead({
            input: "#area_search",
            minLength: 1,
            maxItem: 8,
            maxItemPerGroup: 6,
            order: "asc",
            hint: !0,
            cache: !1,
            compression: !1,
            display: ["name_friendly", "postcode_area"],
            template: '<span><span class="name">{{name_friendly}}</span><span class="division">, {{postcode_area}}</span></span>',
            source: {
                teams: {
                    url: "data/search_data3.json"
                }
            },
            callback: {
                onClickAfter: function(a, b, c, d) {
                    calcFigures(), showFigures(), $("#buyer-area-input-val").addClass("visible")
                }
            }
        })
    }),
    function(a, b, c, d) {
        a.Typeahead = {
            version: "2.0.0"
        };
        var e = {
                input: null,
                minLength: 2,
                maxItem: 8,
                dynamic: !1,
                delay: 300,
                order: null,
                offset: !1,
                hint: !1,
                accent: !1,
                highlight: !0,
                group: !1,
                maxItemPerGroup: null,
                dropdownFilter: !1,
                dynamicFilter: null,
                backdrop: !1,
                cache: !1,
                ttl: 36e5,
                compression: !1,
                suggestion: !1,
                searchOnFocus: !1,
                resultContainer: null,
                generateOnLoad: null,
                mustSelectItem: !1,
                href: null,
                display: ["display"],
                template: null,
                emptyTemplate: !1,
                source: null,
                callback: {
                    onInit: null,
                    onReady: null,
                    onSearch: null,
                    onResult: null,
                    onLayoutBuiltBefore: null,
                    onLayoutBuiltAfter: null,
                    onNavigate: null,
                    onMouseEnter: null,
                    onMouseLeave: null,
                    onClickBefore: null,
                    onClickAfter: null,
                    onSendRequest: null,
                    onReceiveRequest: null,
                    onSubmit: null
                },
                selector: {
                    container: "typeahead-container",
                    group: "typeahead-group",
                    result: "typeahead-result",
                    list: "typeahead-list",
                    display: "typeahead-display",
                    query: "typeahead-query",
                    filter: "typeahead-filter",
                    filterButton: "typeahead-filter-button",
                    filterValue: "typeahead-filter-value",
                    dropdown: "typeahead-dropdown",
                    dropdownCarret: "typeahead-caret",
                    button: "typeahead-button",
                    backdrop: "typeahead-backdrop",
                    hint: "typeahead-hint"
                },
                debug: !1
            },
            f = ".typeahead",
            g = {
                from: "ãàáäâẽèéëêìíïîõòóöôùúüûñç",
                to: "aaaaaeeeeeiiiiooooouuuunc"
            },
            h = function(a, b) {
                this.rawQuery = "", this.query = "", this.source = {}, this.isGenerated = null, this.generatedGroupCount = 0, this.groupCount = 0, this.groupBy = "group", this.result = [], this.resultCount = 0, this.options = b, this.node = a, this.container = null, this.resultContainer = null, this.item = null, this.xhr = {}, this.hintIndex = null, this.filters = {
                    dropdown: {},
                    dynamic: {}
                }, this.requests = {}, this.backdrop = {}, this.hint = {}, this.__construct()
            };
        h.prototype = {
            extendOptions: function() {
                this.options.dynamic && (this.options.cache = !1, this.options.compression = !1), this.options.cache && (this.options.cache = function() {
                    var b = "undefined" != typeof a.localStorage;
                    if (b) try {
                        a.localStorage.setItem("typeahead", "typeahead"), a.localStorage.removeItem("typeahead")
                    } catch (c) {
                        b = !1
                    }
                    return b
                }()), this.options.compression && ("object" == typeof LZString && this.options.cache || (j.log({
                    node: this.node.selector,
                    "function": "extendOptions()",
                    message: "Missing LZString Library or options.cache, no compression will occur."
                }), j.print(), this.options.compression = !1)), "undefined" == typeof this.options.maxItem || /^\d+$/.test(this.options.maxItem) && 0 !== this.options.maxItem || (this.options.maxItem = 1 / 0), this.options.maxItemPerGroup && !/^\d+$/.test(this.options.maxItemPerGroup) && (this.options.maxItemPerGroup = null), !this.options.display || this.options.display instanceof Array || (this.options.display = [this.options.display]), !this.options.group || this.options.group instanceof Array || (this.options.group = [this.options.group]), !this.options.dynamicFilter || this.options.dynamicFilter instanceof Array || (this.options.dynamicFilter = [this.options.dynamicFilter]), this.options.resultContainer && ("string" == typeof this.options.resultContainer && (this.options.resultContainer = c(this.options.resultContainer)), this.options.resultContainer instanceof jQuery && this.options.resultContainer[0] ? this.resultContainer = this.options.resultContainer : (j.log({
                    node: this.node.selector,
                    "function": "extendOptions()",
                    message: 'Invalid jQuery selector or jQuery Object for "options.resultContainer".'
                }), j.print())), this.options.group && "string" == typeof this.options.group[0] && this.options.maxItemPerGroup && (this.groupBy = this.options.group[0]), this.options.callback && this.options.callback.onClick && (this.options.callback.onClickBefore = this.options.callback.onClick, delete this.options.callback.onClick), this.options = c.extend(!0, {}, e, this.options)
            },
            unifySourceFormat: function() {
                if (this.options.source instanceof Array) return this.options.source = {
                    group: {
                        data: this.options.source
                    }
                }, this.groupCount += 1, !0;
                ("undefined" != typeof this.options.source.data || "undefined" != typeof this.options.source.url) && (this.options.source = {
                    group: this.options.source
                });
                for (var a in this.options.source)
                    if (this.options.source.hasOwnProperty(a)) {
                        if (("string" == typeof this.options.source[a] || this.options.source[a] instanceof Array) && (this.options.source[a] = {
                                url: this.options.source[a]
                            }), !this.options.source[a].data && !this.options.source[a].url) return j.log({
                            node: this.node.selector,
                            "function": "unifySourceFormat()",
                            arguments: JSON.stringify(this.options.source),
                            message: 'Undefined "options.source.' + a + '.[data|url]" is Missing - Typeahead dropped'
                        }), j.print(), !1;
                        !this.options.source[a].display || this.options.source[a].display instanceof Array || (this.options.source[a].display = [this.options.source[a].display]), this.options.source[a].ignore && (this.options.source[a].ignore instanceof RegExp || (j.log({
                            node: this.node.selector,
                            "function": "unifySourceFormat()",
                            arguments: JSON.stringify(this.options.source[a].ignore),
                            message: "Invalid ignore RegExp."
                        }), j.print(), delete this.options.source[a].ignore)), this.groupCount += 1
                    }
                return !0
            },
            init: function() {
                this.helper.executeCallback(this.options.callback.onInit, [this.node]), this.container = this.node.closest("." + this.options.selector.container), j.log({
                    node: this.node.selector,
                    "function": "init()",
                    message: "OK - Typeahead activated on " + this.node.selector
                }), j.print()
            },
            delegateEvents: function() {
                var a = this,
                    b = ["focus" + f, "input" + f, "propertychange" + f, "keydown" + f, "dynamic" + f, "generateOnLoad" + f];
                this.container.off(f).on("click" + f + " touchstart" + f, function(b) {
                    b.stopPropagation(), a.options.dropdownFilter && a.container.find("." + a.options.selector.dropdown.replace(" ", ".")).hide()
                }), this.node.closest("form").on("submit", function(b) {
                    return a.options.mustSelectItem && a.helper.isEmpty(a.item) ? void b.preventDefault() : (a.hideLayout(), a.rawQuery = "", a.query = "", a.helper.executeCallback(a.options.callback.onSubmit, [a.node, this, a.item, b]) ? !1 : void 0)
                });
                var c = !1;
                this.node.off(f).on(b.join(" "), function(b) {
                    switch (b.type) {
                        case "generateOnLoad":
                        case "focus":
                            a.isGenerated && a.options.searchOnFocus && a.query.length >= a.options.minLength && a.showLayout(), null !== a.isGenerated || a.options.dynamic || a.generateSource();
                            break;
                        case "keydown":
                            a.isGenerated && a.result.length && b.keyCode && ~[13, 27, 38, 39, 40].indexOf(b.keyCode) && (c = !0, a.navigate(b));
                            break;
                        case "propertychange":
                            if (c) {
                                c = !1;
                                break
                            }
                        case "input":
                            if (a.rawQuery = a.node[0].value.toString(), a.query = a.node[0].value.replace(/^\s+/, "").toString(), a.options.hint && a.hint.container && "" !== a.hint.container.val() && 0 !== a.hint.container.val().indexOf(a.rawQuery) && a.hint.container.val(""), a.options.dynamic) return a.isGenerated = null, void a.helper.typeWatch(function() {
                                a.query.length >= a.options.minLength ? a.generateSource() : a.hideLayout()
                            }, a.options.delay);
                        case "dynamic":
                            if (!a.isGenerated) break;
                            if (a.query.length < a.options.minLength) {
                                a.hideLayout();
                                break
                            }
                            a.searchResult(), a.buildLayout(), a.result.length > 0 || a.options.emptyTemplate ? a.showLayout() : a.hideLayout()
                    }
                }), this.options.generateOnLoad && this.node.trigger("generateOnLoad" + f)
            },
            generateSource: function() {
                if (!this.isGenerated || this.options.dynamic) {
                    if (this.generatedGroupCount = 0, this.isGenerated = !1, !this.helper.isEmpty(this.xhr)) {
                        for (var b in this.xhr) this.xhr.hasOwnProperty(b) && this.xhr[b].abort();
                        this.xhr = {}
                    }
                    var c, d, e;
                    for (c in this.options.source)
                        if (this.options.source.hasOwnProperty(c)) {
                            if (this.options.cache && (d = a.localStorage.getItem(this.node.selector + ":" + c))) {
                                this.options.compression && (d = LZString.decompressFromUTF16(d)), e = !1;
                                try {
                                    d = JSON.parse(d + ""), d.data && d.ttl > (new Date).getTime() ? (this.populateSource(d.data, c), e = !0, j.log({
                                        node: this.node.selector,
                                        "function": "generateSource()",
                                        message: 'Source for group "' + c + '" found in localStorage.'
                                    }), j.print()) : a.localStorage.removeItem(this.node.selector + ":" + c)
                                } catch (f) {}
                                if (e) continue
                            }!this.options.source[c].data || this.options.source[c].url ? this.options.source[c].url && (this.requests[c] || (this.requests[c] = this.generateRequestObject(c))) : this.populateSource("function" == typeof this.options.source[c].data && this.options.source[c].data() || this.options.source[c].data, c)
                        }
                    this.handleRequests()
                }
            },
            generateRequestObject: function(a) {
                var b = {
                    request: {
                        url: null,
                        dataType: "json"
                    },
                    extra: {
                        path: null,
                        group: a,
                        callback: {
                            done: null,
                            fail: null,
                            complete: null,
                            always: null
                        }
                    },
                    validForGroup: [a]
                };
                !(this.options.source[a].url instanceof Array) && this.options.source[a].url instanceof Object && (this.options.source[a].url = [this.options.source[a].url]), this.options.source[a].url instanceof Array ? (this.options.source[a].url[0] instanceof Object ? (this.options.source[a].url[0].callback && (b.extra.callback = this.options.source[a].url[0].callback, delete this.options.source[a].url[0].callback), b.request = c.extend(!0, b.request, this.options.source[a].url[0])) : "string" == typeof this.options.source[a].url[0] && (b.request.url = this.options.source[a].url[0]), this.options.source[a].url[1] && "string" == typeof this.options.source[a].url[1] && (b.extra.path = this.options.source[a].url[1])) : "string" == typeof this.options.source[a].url && (b.request.url = this.options.source[a].url), "jsonp" === b.request.dataType.toLowerCase() && (b.request.jsonpCallback = "callback_" + a);
                var d;
                for (var e in this.requests)
                    if (this.requests.hasOwnProperty(e) && (d = JSON.stringify(this.requests[e].request), d === JSON.stringify(b.request))) {
                        this.requests[e].validForGroup.push(a), b.isDuplicated = !0, delete b.validForGroup;
                        break
                    }
                return b
            },
            handleRequests: function() {
                var a = this,
                    b = Object.keys(this.requests).length;
                b && this.helper.executeCallback(this.options.callback.onSendRequest, [this.node, this.query]);
                for (var d in this.requests) this.requests.hasOwnProperty(d) && (this.requests[d].isDuplicated || ! function(d, e) {
                    var f;
                    if (e.request.data)
                        for (var g in e.request.data)
                            if (e.request.data.hasOwnProperty(g) && ~String(e.request.data[g]).indexOf("{{query}}")) {
                                e = c.extend(!0, {}, e), e.request.data[g] = e.request.data[g].replace("{{query}}", a.query);
                                break
                            }
                    a.xhr[d] = c.ajax(e.request).done(function(c, d, g) {
                        for (var h, i = 0; i < e.validForGroup.length; i++) f = a.requests[e.validForGroup[i]], f.extra.callback.done instanceof Function && (h = f.extra.callback.done(c, d, g), c = h instanceof Array && h || c, h instanceof Array || (j.log({
                            node: a.node.selector,
                            "function": "Ajax.callback.done()",
                            message: "Invalid returned data has to be an Array"
                        }), j.print())), a.populateSource(c, f.extra.group, f.extra.path), b -= 1, 0 === b && a.helper.executeCallback(a.options.callback.onReceiveRequest, [a.node, a.query])
                    }).fail(function(b, c, d) {
                        for (var g = 0; g < e.validForGroup.length; g++) f = a.requests[e.validForGroup[g]], f.extra.callback.fail instanceof Function && f.extra.callback.fail(b, c, d);
                        j.log({
                            node: a.node.selector,
                            "function": "Ajax.callback.fail()",
                            message: "Request failed"
                        }), j.print()
                    }).complete(function(b, c) {
                        for (var d = 0; d < e.validForGroup.length; d++) f = a.requests[e.validForGroup[d]], f.extra.callback.complete instanceof Function && f.extra.callback.complete(b, c)
                    }).always(function(b, c, d) {
                        for (var g = 0; g < e.validForGroup.length; g++) f = a.requests[e.validForGroup[g]], f.extra.callback.always instanceof Function && f.extra.callback.always(b, c, d)
                    })
                }(d, this.requests[d]))
            },
            populateSource: function(a, b, c) {
                var d, e;
                if (a && "string" == typeof c)
                    for (var f = c.split("."), g = 0; g < f.length;) {
                        if (e = a[f[g++]], "undefined" == typeof e) {
                            j.log({
                                node: this.node.selector,
                                "function": "populateSource()",
                                arguments: c,
                                message: "Invalid data path."
                            }), j.print();
                            break
                        }
                        a = e
                    }
                a instanceof Array || (j.log({
                    node: thfunction showFigures() {
                        $("#wig-calculator-results").addClass("results-visible")
                    }

                    function calcFigures() {
                        var a = $("#buyer_salary").val(),
                            b = ($("#area_average_price").val(), $("#area_rental_yield").val(), $("#area_search").val());
                        a = a.replace(",", ""), a = parseInt(a);
                        var c = 0;
                        c = a / 100 * 30, c = parseInt(Math.round(c)), $("span.show_annual_rent").text(addCommas(c));
                        var d = 0;
                        d = 9.89 * a, d = parseInt(Math.round(d)), $("#calc_wig_budget").val(addCommas(d)), $("span.show_wig_budget").text(addCommas(d));
                        var e = 0;
                        e = 4 * a, e = parseInt(Math.round(e)), $("span.show_bank_budget").text(addCommas(e));
                        var f = 0;
                        f = d / 100 * 5, f = parseInt(Math.round(f)), $("#calc_buyer_deposit").val(f), $("span.show_buyer_deposit").text(addCommas(f)), $("span.show_area_name").text(b), $("#wig-calculator-submit").click(window.submitForm = function() {
                            var c = {
                                buyer_name: $("#unm_reg_full_name").val(),
                                buyer_email: $("#unm_reg_email").val(),
                                buyer_phone: $("#unm_reg_phone").val(),
                                buyer_deposit_amount: f,
                                buyer_salary: a,
                                buyer_area: b,
                                buyer_has_deposit: $('input[name="unm_reg_deposit"]:checked').val()
                            };
                            $.ajax({
                                method: "POST",
                                url: "https://zapier.com/hooks/catch/3k29nf/",
                                data: c,
                                success: function() {
                                    var a = $("#autoplayer");
                                    a.trigger("click")
                                }
                            })
                        })
                    }

                    function addCommas(a) {
                        a += "";
                        for (var b = a.split("."), c = b[0], d = b.length > 1 ? "." + b[1] : "", e = /(\d+)(\d{3})/; e.test(c);) c = c.replace(e, "$1,$2");
                        return c + d
                    }

                    function valField(a) {
                        var b = "#" + a;
                        $(b).focusout(function() {
                            var c = $(b).val(),
                                d = "." + a + "_val";
                            c.length < 5 ? $(d).addClass("visible") : $(d).removeClass("visible")
                        })
                    }! function(a, b) {
                        "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
                            if (!a.document) throw new Error("jQuery requires a window with a document");
                            return b(a)
                        } : b(a)
                    }("undefined" != typeof window ? window : this, function(a, b) {
                        function c(a) {
                            var b = "length" in a && a.length,
                                c = _.type(a);
                            return "function" === c || _.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
                        }

                        function d(a, b, c) {
                            if (_.isFunction(b)) return _.grep(a, function(a, d) {
                                return !!b.call(a, d, a) !== c
                            });
                            if (b.nodeType) return _.grep(a, function(a) {
                                return a === b !== c
                            });
                            if ("string" == typeof b) {
                                if (ha.test(b)) return _.filter(b, a, c);
                                b = _.filter(b, a)
                            }
                            return _.grep(a, function(a) {
                                return U.call(b, a) >= 0 !== c
                            })
                        }

                        function e(a, b) {
                            for (;
                                (a = a[b]) && 1 !== a.nodeType;);
                            return a
                        }

                        function f(a) {
                            var b = oa[a] = {};
                            return _.each(a.match(na) || [], function(a, c) {
                                b[c] = !0
                            }), b
                        }

                        function g() {
                            Z.removeEventListener("DOMContentLoaded", g, !1), a.removeEventListener("load", g, !1), _.ready()
                        }

                        function h() {
                            Object.defineProperty(this.cache = {}, 0, {
                                get: function() {
                                    return {}
                                }
                            }), this.expando = _.expando + h.uid++
                        }

                        function i(a, b, c) {
                            var d;
                            if (void 0 === c && 1 === a.nodeType)
                                if (d = "data-" + b.replace(ua, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                                    try {
                                        c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : ta.test(c) ? _.parseJSON(c) : c
                                    } catch (e) {}
                                    sa.set(a, b, c)
                                } else c = void 0;
                            return c
                        }

                        function j() {
                            return !0
                        }

                        function k() {
                            return !1
                        }

                        function l() {
                            try {
                                return Z.activeElement
                            } catch (a) {}
                        }

                        function m(a, b) {
                            return _.nodeName(a, "table") && _.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
                        }

                        function n(a) {
                            return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
                        }

                        function o(a) {
                            var b = Ka.exec(a.type);
                            return b ? a.type = b[1] : a.removeAttribute("type"), a
                        }

                        function p(a, b) {
                            for (var c = 0, d = a.length; d > c; c++) ra.set(a[c], "globalEval", !b || ra.get(b[c], "globalEval"))
                        }

                        function q(a, b) {
                            var c, d, e, f, g, h, i, j;
                            if (1 === b.nodeType) {
                                if (ra.hasData(a) && (f = ra.access(a), g = ra.set(b, f), j = f.events)) {
                                    delete g.handle, g.events = {};
                                    for (e in j)
                                        for (c = 0, d = j[e].length; d > c; c++) _.event.add(b, e, j[e][c])
                                }
                                sa.hasData(a) && (h = sa.access(a), i = _.extend({}, h), sa.set(b, i))
                            }
                        }

                        function r(a, b) {
                            var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
                            return void 0 === b || b && _.nodeName(a, b) ? _.merge([a], c) : c
                        }

                        function s(a, b) {
                            var c = b.nodeName.toLowerCase();
                            "input" === c && ya.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
                        }

                        function t(b, c) {
                            var d, e = _(c.createElement(b)).appendTo(c.body),
                                f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : _.css(e[0], "display");
                            return e.detach(), f
                        }

                        function u(a) {
                            var b = Z,
                                c = Oa[a];
                            return c || (c = t(a, b), "none" !== c && c || (Na = (Na || _("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = Na[0].contentDocument, b.write(), b.close(), c = t(a, b), Na.detach()), Oa[a] = c), c
                        }

                        function v(a, b, c) {
                            var d, e, f, g, h = a.style;
                            return c = c || Ra(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || _.contains(a.ownerDocument, a) || (g = _.style(a, b)), Qa.test(g) && Pa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
                        }

                        function w(a, b) {
                            return {
                                get: function() {
                                    return a() ? void delete this.get : (this.get = b).apply(this, arguments)
                                }
                            }
                        }

                        function x(a, b) {
                            if (b in a) return b;
                            for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = Xa.length; e--;)
                                if (b = Xa[e] + c, b in a) return b;
                            return d
                        }

                        function y(a, b, c) {
                            var d = Ta.exec(b);
                            return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
                        }

                        function z(a, b, c, d, e) {
                            for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += _.css(a, c + wa[f], !0, e)), d ? ("content" === c && (g -= _.css(a, "padding" + wa[f], !0, e)), "margin" !== c && (g -= _.css(a, "border" + wa[f] + "Width", !0, e))) : (g += _.css(a, "padding" + wa[f], !0, e), "padding" !== c && (g += _.css(a, "border" + wa[f] + "Width", !0, e)));
                            return g
                        }

                        function A(a, b, c) {
                            var d = !0,
                                e = "width" === b ? a.offsetWidth : a.offsetHeight,
                                f = Ra(a),
                                g = "border-box" === _.css(a, "boxSizing", !1, f);
                            if (0 >= e || null == e) {
                                if (e = v(a, b, f), (0 > e || null == e) && (e = a.style[b]), Qa.test(e)) return e;
                                d = g && (Y.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
                            }
                            return e + z(a, b, c || (g ? "border" : "content"), d, f) + "px"
                        }

                        function B(a, b) {
                            for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = ra.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && xa(d) && (f[g] = ra.access(d, "olddisplay", u(d.nodeName)))) : (e = xa(d), "none" === c && e || ra.set(d, "olddisplay", e ? c : _.css(d, "display"))));
                            for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
                            return a
                        }

                        function C(a, b, c, d, e) {
                            return new C.prototype.init(a, b, c, d, e)
                        }

                        function D() {
                            return setTimeout(function() {
                                Ya = void 0
                            }), Ya = _.now()
                        }

                        function E(a, b) {
                            var c, d = 0,
                                e = {
                                    height: a
                                };
                            for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = wa[d], e["margin" + c] = e["padding" + c] = a;
                            return b && (e.opacity = e.width = a), e
                        }

                        function F(a, b, c) {
                            for (var d, e = (cb[b] || []).concat(cb["*"]), f = 0, g = e.length; g > f; f++)
                                if (d = e[f].call(c, b, a)) return d
                        }

                        function G(a, b, c) {
                            var d, e, f, g, h, i, j, k, l = this,
                                m = {},
                                n = a.style,
                                o = a.nodeType && xa(a),
                                p = ra.get(a, "fxshow");
                            c.queue || (h = _._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
                                h.unqueued || i()
                            }), h.unqueued++, l.always(function() {
                                l.always(function() {
                                    h.unqueued--, _.queue(a, "fx").length || h.empty.fire()
                                })
                            })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], j = _.css(a, "display"), k = "none" === j ? ra.get(a, "olddisplay") || u(a.nodeName) : j, "inline" === k && "none" === _.css(a, "float") && (n.display = "inline-block")), c.overflow && (n.overflow = "hidden", l.always(function() {
                                n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2]
                            }));
                            for (d in b)
                                if (e = b[d], $a.exec(e)) {
                                    if (delete b[d], f = f || "toggle" === e, e === (o ? "hide" : "show")) {
                                        if ("show" !== e || !p || void 0 === p[d]) continue;
                                        o = !0
                                    }
                                    m[d] = p && p[d] || _.style(a, d)
                                } else j = void 0;
                            if (_.isEmptyObject(m)) "inline" === ("none" === j ? u(a.nodeName) : j) && (n.display = j);
                            else {
                                p ? "hidden" in p && (o = p.hidden) : p = ra.access(a, "fxshow", {}), f && (p.hidden = !o), o ? _(a).show() : l.done(function() {
                                    _(a).hide()
                                }), l.done(function() {
                                    var b;
                                    ra.remove(a, "fxshow");
                                    for (b in m) _.style(a, b, m[b])
                                });
                                for (d in m) g = F(o ? p[d] : 0, d, l), d in p || (p[d] = g.start, o && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
                            }
                        }

                        function H(a, b) {
                            var c, d, e, f, g;
                            for (c in a)
                                if (d = _.camelCase(c), e = b[d], f = a[c], _.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = _.cssHooks[d], g && "expand" in g) {
                                    f = g.expand(f), delete a[d];
                                    for (c in f) c in a || (a[c] = f[c], b[c] = e)
                                } else b[d] = e
                        }

                        function I(a, b, c) {
                            var d, e, f = 0,
                                g = bb.length,
                                h = _.Deferred().always(function() {
                                    delete i.elem
                                }),
                                i = function() {
                                    if (e) return !1;
                                    for (var b = Ya || D(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                                    return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
                                },
                                j = h.promise({
                                    elem: a,
                                    props: _.extend({}, b),
                                    opts: _.extend(!0, {
                                        specialEasing: {}
                                    }, c),
                                    originalProperties: b,
                                    originalOptions: c,
                                    startTime: Ya || D(),
                                    duration: c.duration,
                                    tweens: [],
                                    createTween: function(b, c) {
                                        var d = _.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                                        return j.tweens.push(d), d
                                    },
                                    stop: function(b) {
                                        var c = 0,
                                            d = b ? j.tweens.length : 0;
                                        if (e) return this;
                                        for (e = !0; d > c; c++) j.tweens[c].run(1);
                                        return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                                    }
                                }),
                                k = j.props;
                            for (H(k, j.opts.specialEasing); g > f; f++)
                                if (d = bb[f].call(j, a, k, j.opts)) return d;
                            return _.map(k, F, j), _.isFunction(j.opts.start) && j.opts.start.call(a, j), _.fx.timer(_.extend(i, {
                                elem: a,
                                anim: j,
                                queue: j.opts.queue
                            })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
                        }

                        function J(a) {
                            return function(b, c) {
                                "string" != typeof b && (c = b, b = "*");
                                var d, e = 0,
                                    f = b.toLowerCase().match(na) || [];
                                if (_.isFunction(c))
                                    for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
                            }
                        }

                        function K(a, b, c, d) {
                            function e(h) {
                                var i;
                                return f[h] = !0, _.each(a[h] || [], function(a, h) {
                                    var j = h(b, c, d);
                                    return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
                                }), i
                            }
                            var f = {},
                                g = a === tb;
                            return e(b.dataTypes[0]) || !f["*"] && e("*")
                        }

                        function L(a, b) {
                            var c, d, e = _.ajaxSettings.flatOptions || {};
                            for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
                            return d && _.extend(!0, a, d), a
                        }

                        function M(a, b, c) {
                            for (var d, e, f, g, h = a.contents, i = a.dataTypes;
                                "*" === i[0];) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
                            if (d)
                                for (e in h)
                                    if (h[e] && h[e].test(d)) {
                                        i.unshift(e);
                                        break
                                    }
                            if (i[0] in c) f = i[0];
                            else {
                                for (e in c) {
                                    if (!i[0] || a.converters[e + " " + i[0]]) {
                                        f = e;
                                        break
                                    }
                                    g || (g = e)
                                }
                                f = f || g
                            }
                            return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
                        }

                        function N(a, b, c, d) {
                            var e, f, g, h, i, j = {},
                                k = a.dataTypes.slice();
                            if (k[1])
                                for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
                            for (f = k.shift(); f;)
                                if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                                    if ("*" === f) f = i;
                                    else if ("*" !== i && i !== f) {
                                if (g = j[i + " " + f] || j["* " + f], !g)
                                    for (e in j)
                                        if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                                            break
                                        }
                                if (g !== !0)
                                    if (g && a["throws"]) b = g(b);
                                    else try {
                                        b = g(b)
                                    } catch (l) {
                                        return {
                                            state: "parsererror",
                                            error: g ? l : "No conversion from " + i + " to " + f
                                        }
                                    }
                            }
                            return {
                                state: "success",
                                data: b
                            }
                        }

                        function O(a, b, c, d) {
                            var e;
                            if (_.isArray(b)) _.each(b, function(b, e) {
                                c || yb.test(a) ? d(a, e) : O(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
                            });
                            else if (c || "object" !== _.type(b)) d(a, b);
                            else
                                for (e in b) O(a + "[" + e + "]", b[e], c, d)
                        }

                        function P(a) {
                            return _.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
                        }
                        var Q = [],
                            R = Q.slice,
                            S = Q.concat,
                            T = Q.push,
                            U = Q.indexOf,
                            V = {},
                            W = V.toString,
                            X = V.hasOwnProperty,
                            Y = {},
                            Z = a.document,
                            $ = "2.1.4",
                            _ = function(a, b) {
                                return new _.fn.init(a, b)
                            },
                            aa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                            ba = /^-ms-/,
                            ca = /-([\da-z])/gi,
                            da = function(a, b) {
                                return b.toUpperCase()
                            };
                        _.fn = _.prototype = {
                            jquery: $,
                            constructor: _,
                            selector: "",
                            length: 0,
                            toArray: function() {
                                return R.call(this)
                            },
                            get: function(a) {
                                return null != a ? 0 > a ? this[a + this.length] : this[a] : R.call(this)
                            },
                            pushStack: function(a) {
                                var b = _.merge(this.constructor(), a);
                                return b.prevObject = this, b.context = this.context, b
                            },
                            each: function(a, b) {
                                return _.each(this, a, b)
                            },
                            map: function(a) {
                                return this.pushStack(_.map(this, function(b, c) {
                                    return a.call(b, c, b)
                                }))
                            },
                            slice: function() {
                                return this.pushStack(R.apply(this, arguments))
                            },
                            first: function() {
                                return this.eq(0)
                            },
                            last: function() {
                                return this.eq(-1)
                            },
                            eq: function(a) {
                                var b = this.length,
                                    c = +a + (0 > a ? b : 0);
                                return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
                            },
                            end: function() {
                                return this.prevObject || this.constructor(null)
                            },
                            push: T,
                            sort: Q.sort,
                            splice: Q.splice
                        }, _.extend = _.fn.extend = function() {
                            var a, b, c, d, e, f, g = arguments[0] || {},
                                h = 1,
                                i = arguments.length,
                                j = !1;
                            for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || _.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
                                if (null != (a = arguments[h]))
                                    for (b in a) c = g[b], d = a[b], g !== d && (j && d && (_.isPlainObject(d) || (e = _.isArray(d))) ? (e ? (e = !1, f = c && _.isArray(c) ? c : []) : f = c && _.isPlainObject(c) ? c : {}, g[b] = _.extend(j, f, d)) : void 0 !== d && (g[b] = d));
                            return g
                        }, _.extend({
                            expando: "jQuery" + ($ + Math.random()).replace(/\D/g, ""),
                            isReady: !0,
                            error: function(a) {
                                throw new Error(a)
                            },
                            noop: function() {},
                            isFunction: function(a) {
                                return "function" === _.type(a)
                            },
                            isArray: Array.isArray,
                            isWindow: function(a) {
                                return null != a && a === a.window
                            },
                            isNumeric: function(a) {
                                return !_.isArray(a) && a - parseFloat(a) + 1 >= 0
                            },
                            isPlainObject: function(a) {
                                return "object" !== _.type(a) || a.nodeType || _.isWindow(a) ? !1 : a.constructor && !X.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
                            },
                            isEmptyObject: function(a) {
                                var b;
                                for (b in a) return !1;
                                return !0
                            },
                            type: function(a) {
                                return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? V[W.call(a)] || "object" : typeof a
                            },
                            globalEval: function(a) {
                                var b, c = eval;
                                a = _.trim(a), a && (1 === a.indexOf("use strict") ? (b = Z.createElement("script"), b.text = a, Z.head.appendChild(b).parentNode.removeChild(b)) : c(a))
                            },
                            camelCase: function(a) {
                                return a.replace(ba, "ms-").replace(ca, da)
                            },
                            nodeName: function(a, b) {
                                return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
                            },
                            each: function(a, b, d) {
                                var e, f = 0,
                                    g = a.length,
                                    h = c(a);
                                if (d) {
                                    if (h)
                                        for (; g > f && (e = b.apply(a[f], d), e !== !1); f++);
                                    else
                                        for (f in a)
                                            if (e = b.apply(a[f], d), e === !1) break
                                } else if (h)
                                    for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++);
                                else
                                    for (f in a)
                                        if (e = b.call(a[f], f, a[f]), e === !1) break; return a
                            },
                            trim: function(a) {
                                return null == a ? "" : (a + "").replace(aa, "")
                            },
                            makeArray: function(a, b) {
                                var d = b || [];
                                return null != a && (c(Object(a)) ? _.merge(d, "string" == typeof a ? [a] : a) : T.call(d, a)), d
                            },
                            inArray: function(a, b, c) {
                                return null == b ? -1 : U.call(b, a, c)
                            },
                            merge: function(a, b) {
                                for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
                                return a.length = e, a
                            },
                            grep: function(a, b, c) {
                                for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
                                return e
                            },
                            map: function(a, b, d) {
                                var e, f = 0,
                                    g = a.length,
                                    h = c(a),
                                    i = [];
                                if (h)
                                    for (; g > f; f++) e = b(a[f], f, d), null != e && i.push(e);
                                else
                                    for (f in a) e = b(a[f], f, d), null != e && i.push(e);
                                return S.apply([], i)
                            },
                            guid: 1,
                            proxy: function(a, b) {
                                var c, d, e;
                                return "string" == typeof b && (c = a[b], b = a, a = c), _.isFunction(a) ? (d = R.call(arguments, 2), e = function() {
                                    return a.apply(b || this, d.concat(R.call(arguments)))
                                }, e.guid = a.guid = a.guid || _.guid++, e) : void 0
                            },
                            now: Date.now,
                            support: Y
                        }), _.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
                            V["[object " + b + "]"] = b.toLowerCase()
                        });
                        var ea = function(a) {
                            function b(a, b, c, d) {
                                var e, f, g, h, i, j, l, n, o, p;
                                if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], h = b.nodeType, "string" != typeof a || !a || 1 !== h && 9 !== h && 11 !== h) return c;
                                if (!d && I) {
                                    if (11 !== h && (e = sa.exec(a)))
                                        if (g = e[1]) {
                                            if (9 === h) {
                                                if (f = b.getElementById(g), !f || !f.parentNode) return c;
                                                if (f.id === g) return c.push(f), c
                                            } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g) return c.push(f), c
                                        } else {
                                            if (e[2]) return $.apply(c, b.getElementsByTagName(a)), c;
                                            if ((g = e[3]) && v.getElementsByClassName) return $.apply(c, b.getElementsByClassName(g)), c
                                        }
                                    if (v.qsa && (!J || !J.test(a))) {
                                        if (n = l = N, o = b, p = 1 !== h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                                            for (j = z(a), (l = b.getAttribute("id")) ? n = l.replace(ua, "\\$&") : b.setAttribute("id", n), n = "[id='" + n + "'] ", i = j.length; i--;) j[i] = n + m(j[i]);
                                            o = ta.test(a) && k(b.parentNode) || b, p = j.join(",")
                                        }
                                        if (p) try {
                                            return $.apply(c, o.querySelectorAll(p)), c
                                        } catch (q) {} finally {
                                            l || b.removeAttribute("id")
                                        }
                                    }
                                }
                                return B(a.replace(ia, "$1"), b, c, d)
                            }

                            function c() {
                                function a(c, d) {
                                    return b.push(c + " ") > w.cacheLength && delete a[b.shift()], a[c + " "] = d
                                }
                                var b = [];
                                return a
                            }

                            function d(a) {
                                return a[N] = !0, a
                            }

                            function e(a) {
                                var b = G.createElement("div");
                                try {
                                    return !!a(b)
                                } catch (c) {
                                    return !1
                                } finally {
                                    b.parentNode && b.parentNode.removeChild(b), b = null
                                }
                            }

                            function f(a, b) {
                                for (var c = a.split("|"), d = a.length; d--;) w.attrHandle[c[d]] = b
                            }

                            function g(a, b) {
                                var c = b && a,
                                    d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || V) - (~a.sourceIndex || V);
                                if (d) return d;
                                if (c)
                                    for (; c = c.nextSibling;)
                                        if (c === b) return -1;
                                return a ? 1 : -1
                            }

                            function h(a) {
                                return function(b) {
                                    var c = b.nodeName.toLowerCase();
                                    return "input" === c && b.type === a
                                }
                            }

                            function i(a) {
                                return function(b) {
                                    var c = b.nodeName.toLowerCase();
                                    return ("input" === c || "button" === c) && b.type === a
                                }
                            }

                            function j(a) {
                                return d(function(b) {
                                    return b = +b, d(function(c, d) {
                                        for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                                    })
                                })
                            }

                            function k(a) {
                                return a && "undefined" != typeof a.getElementsByTagName && a
                            }

                            function l() {}

                            function m(a) {
                                for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
                                return d
                            }

                            function n(a, b, c) {
                                var d = b.dir,
                                    e = c && "parentNode" === d,
                                    f = Q++;
                                return b.first ? function(b, c, f) {
                                    for (; b = b[d];)
                                        if (1 === b.nodeType || e) return a(b, c, f)
                                } : function(b, c, g) {
                                    var h, i, j = [P, f];
                                    if (g) {
                                        for (; b = b[d];)
                                            if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                                    } else
                                        for (; b = b[d];)
                                            if (1 === b.nodeType || e) {
                                                if (i = b[N] || (b[N] = {}), (h = i[d]) && h[0] === P && h[1] === f) return j[2] = h[2];
                                                if (i[d] = j, j[2] = a(b, c, g)) return !0
                                            }
                                }
                            }

                            function o(a) {
                                return a.length > 1 ? function(b, c, d) {
                                    for (var e = a.length; e--;)
                                        if (!a[e](b, c, d)) return !1;
                                    return !0
                                } : a[0]
                            }

                            function p(a, c, d) {
                                for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d);
                                return d
                            }

                            function q(a, b, c, d, e) {
                                for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
                                return g
                            }

                            function r(a, b, c, e, f, g) {
                                return e && !e[N] && (e = r(e)), f && !f[N] && (f = r(f, g)), d(function(d, g, h, i) {
                                    var j, k, l, m = [],
                                        n = [],
                                        o = g.length,
                                        r = d || p(b || "*", h.nodeType ? [h] : h, []),
                                        s = !a || !d && b ? r : q(r, m, a, h, i),
                                        t = c ? f || (d ? a : o || e) ? [] : g : s;
                                    if (c && c(s, t, h, i), e)
                                        for (j = q(t, n), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                                    if (d) {
                                        if (f || a) {
                                            if (f) {
                                                for (j = [], k = t.length; k--;)(l = t[k]) && j.push(s[k] = l);
                                                f(null, t = [], j, i)
                                            }
                                            for (k = t.length; k--;)(l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                                        }
                                    } else t = q(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t)
                                })
                            }

                            function s(a) {
                                for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function(a) {
                                        return a === b
                                    }, g, !0), j = n(function(a) {
                                        return aa(b, a) > -1
                                    }, g, !0), k = [function(a, c, d) {
                                        var e = !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                                        return b = null, e
                                    }]; e > h; h++)
                                    if (c = w.relative[a[h].type]) k = [n(o(k), c)];
                                    else {
                                        if (c = w.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                                            for (d = ++h; e > d && !w.relative[a[d].type]; d++);
                                            return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({
                                                value: " " === a[h - 2].type ? "*" : ""
                                            })).replace(ia, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a))
                                        }
                                        k.push(c)
                                    }
                                return o(k)
                            }

                            function t(a, c) {
                                var e = c.length > 0,
                                    f = a.length > 0,
                                    g = function(d, g, h, i, j) {
                                        var k, l, m, n = 0,
                                            o = "0",
                                            p = d && [],
                                            r = [],
                                            s = C,
                                            t = d || f && w.find.TAG("*", j),
                                            u = P += null == s ? 1 : Math.random() || .1,
                                            v = t.length;
                                        for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
                                            if (f && k) {
                                                for (l = 0; m = a[l++];)
                                                    if (m(k, g, h)) {
                                                        i.push(k);
                                                        break
                                                    }
                                                j && (P = u)
                                            }
                                            e && ((k = !m && k) && n--, d && p.push(k))
                                        }
                                        if (n += o, e && o !== n) {
                                            for (l = 0; m = c[l++];) m(p, r, g, h);
                                            if (d) {
                                                if (n > 0)
                                                    for (; o--;) p[o] || r[o] || (r[o] = Y.call(i));
                                                r = q(r)
                                            }
                                            $.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                                        }
                                        return j && (P = u, C = s), p
                                    };
                                return e ? d(g) : g
                            }
                            var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + 1 * new Date,
                                O = a.document,
                                P = 0,
                                Q = 0,
                                R = c(),
                                S = c(),
                                T = c(),
                                U = function(a, b) {
                                    return a === b && (E = !0), 0
                                },
                                V = 1 << 31,
                                W = {}.hasOwnProperty,
                                X = [],
                                Y = X.pop,
                                Z = X.push,
                                $ = X.push,
                                _ = X.slice,
                                aa = function(a, b) {
                                    for (var c = 0, d = a.length; d > c; c++)
                                        if (a[c] === b) return c;
                                    return -1
                                },
                                ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                                ca = "[\\x20\\t\\r\\n\\f]",
                                da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                                ea = da.replace("w", "w#"),
                                fa = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ea + "))|)" + ca + "*\\]",
                                ga = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + fa + ")*)|.*)\\)|)",
                                ha = new RegExp(ca + "+", "g"),
                                ia = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$", "g"),
                                ja = new RegExp("^" + ca + "*," + ca + "*"),
                                ka = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"),
                                la = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"),
                                ma = new RegExp(ga),
                                na = new RegExp("^" + ea + "$"),
                                oa = {
                                    ID: new RegExp("^#(" + da + ")"),
                                    CLASS: new RegExp("^\\.(" + da + ")"),
                                    TAG: new RegExp("^(" + da.replace("w", "w*") + ")"),
                                    ATTR: new RegExp("^" + fa),
                                    PSEUDO: new RegExp("^" + ga),
                                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)", "i"),
                                    bool: new RegExp("^(?:" + ba + ")$", "i"),
                                    needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)", "i")
                                },
                                pa = /^(?:input|select|textarea|button)$/i,
                                qa = /^h\d$/i,
                                ra = /^[^{]+\{\s*\[native \w/,
                                sa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                                ta = /[+~]/,
                                ua = /'|\\/g,
                                va = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"),
                                wa = function(a, b, c) {
                                    var d = "0x" + b - 65536;
                                    return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
                                },
                                xa = function() {
                                    F()
                                };
                            try {
                                $.apply(X = _.call(O.childNodes), O.childNodes), X[O.childNodes.length].nodeType
                            } catch (ya) {
                                $ = {
                                    apply: X.length ? function(a, b) {
                                        Z.apply(a, _.call(b))
                                    } : function(a, b) {
                                        for (var c = a.length, d = 0; a[c++] = b[d++];);
                                        a.length = c - 1
                                    }
                                }
                            }
                            v = b.support = {}, y = b.isXML = function(a) {
                                var b = a && (a.ownerDocument || a).documentElement;
                                return b ? "HTML" !== b.nodeName : !1
                            }, F = b.setDocument = function(a) {
                                var b, c, d = a ? a.ownerDocument || a : O;
                                return d !== G && 9 === d.nodeType && d.documentElement ? (G = d, H = d.documentElement, c = d.defaultView, c && c !== c.top && (c.addEventListener ? c.addEventListener("unload", xa, !1) : c.attachEvent && c.attachEvent("onunload", xa)), I = !y(d), v.attributes = e(function(a) {
                                    return a.className = "i", !a.getAttribute("className")
                                }), v.getElementsByTagName = e(function(a) {
                                    return a.appendChild(d.createComment("")), !a.getElementsByTagName("*").length
                                }), v.getElementsByClassName = ra.test(d.getElementsByClassName), v.getById = e(function(a) {
                                    return H.appendChild(a).id = N, !d.getElementsByName || !d.getElementsByName(N).length
                                }), v.getById ? (w.find.ID = function(a, b) {
                                    if ("undefined" != typeof b.getElementById && I) {
                                        var c = b.getElementById(a);
                                        return c && c.parentNode ? [c] : []
                                    }
                                }, w.filter.ID = function(a) {
                                    var b = a.replace(va, wa);
                                    return function(a) {
                                        return a.getAttribute("id") === b
                                    }
                                }) : (delete w.find.ID, w.filter.ID = function(a) {
                                    var b = a.replace(va, wa);
                                    return function(a) {
                                        var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                                        return c && c.value === b
                                    }
                                }), w.find.TAG = v.getElementsByTagName ? function(a, b) {
                                    return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : v.qsa ? b.querySelectorAll(a) : void 0
                                } : function(a, b) {
                                    var c, d = [],
                                        e = 0,
                                        f = b.getElementsByTagName(a);
                                    if ("*" === a) {
                                        for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                                        return d
                                    }
                                    return f
                                }, w.find.CLASS = v.getElementsByClassName && function(a, b) {
                                    return I ? b.getElementsByClassName(a) : void 0
                                }, K = [], J = [], (v.qsa = ra.test(d.querySelectorAll)) && (e(function(a) {
                                    H.appendChild(a).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && J.push("[*^$]=" + ca + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || J.push("\\[" + ca + "*(?:value|" + ba + ")"), a.querySelectorAll("[id~=" + N + "-]").length || J.push("~="), a.querySelectorAll(":checked").length || J.push(":checked"), a.querySelectorAll("a#" + N + "+*").length || J.push(".#.+[+~]")
                                }), e(function(a) {
                                    var b = d.createElement("input");
                                    b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && J.push("name" + ca + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
                                })), (v.matchesSelector = ra.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function(a) {
                                    v.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", ga)
                                }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), b = ra.test(H.compareDocumentPosition), M = b || ra.test(H.contains) ? function(a, b) {
                                    var c = 9 === a.nodeType ? a.documentElement : a,
                                        d = b && b.parentNode;
                                    return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                                } : function(a, b) {
                                    if (b)
                                        for (; b = b.parentNode;)
                                            if (b === a) return !0;
                                    return !1
                                }, U = b ? function(a, b) {
                                    if (a === b) return E = !0, 0;
                                    var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                                    return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !v.sortDetached && b.compareDocumentPosition(a) === c ? a === d || a.ownerDocument === O && M(O, a) ? -1 : b === d || b.ownerDocument === O && M(O, b) ? 1 : D ? aa(D, a) - aa(D, b) : 0 : 4 & c ? -1 : 1)
                                } : function(a, b) {
                                    if (a === b) return E = !0, 0;
                                    var c, e = 0,
                                        f = a.parentNode,
                                        h = b.parentNode,
                                        i = [a],
                                        j = [b];
                                    if (!f || !h) return a === d ? -1 : b === d ? 1 : f ? -1 : h ? 1 : D ? aa(D, a) - aa(D, b) : 0;
                                    if (f === h) return g(a, b);
                                    for (c = a; c = c.parentNode;) i.unshift(c);
                                    for (c = b; c = c.parentNode;) j.unshift(c);
                                    for (; i[e] === j[e];) e++;
                                    return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
                                }, d) : G
                            }, b.matches = function(a, c) {
                                return b(a, null, null, c)
                            }, b.matchesSelector = function(a, c) {
                                if ((a.ownerDocument || a) !== G && F(a), c = c.replace(la, "='$1']"), !(!v.matchesSelector || !I || K && K.test(c) || J && J.test(c))) try {
                                    var d = L.call(a, c);
                                    if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
                                } catch (e) {}
                                return b(c, G, null, [a]).length > 0
                            }, b.contains = function(a, b) {
                                return (a.ownerDocument || a) !== G && F(a), M(a, b)
                            }, b.attr = function(a, b) {
                                (a.ownerDocument || a) !== G && F(a);
                                var c = w.attrHandle[b.toLowerCase()],
                                    d = c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
                                return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
                            }, b.error = function(a) {
                                throw new Error("Syntax error, unrecognized expression: " + a)
                            }, b.uniqueSort = function(a) {
                                var b, c = [],
                                    d = 0,
                                    e = 0;
                                if (E = !v.detectDuplicates, D = !v.sortStable && a.slice(0), a.sort(U), E) {
                                    for (; b = a[e++];) b === a[e] && (d = c.push(e));
                                    for (; d--;) a.splice(c[d], 1)
                                }
                                return D = null, a
                            }, x = b.getText = function(a) {
                                var b, c = "",
                                    d = 0,
                                    e = a.nodeType;
                                if (e) {
                                    if (1 === e || 9 === e || 11 === e) {
                                        if ("string" == typeof a.textContent) return a.textContent;
                                        for (a = a.firstChild; a; a = a.nextSibling) c += x(a)
                                    } else if (3 === e || 4 === e) return a.nodeValue
                                } else
                                    for (; b = a[d++];) c += x(b);
                                return c
                            }, w = b.selectors = {
                                cacheLength: 50,
                                createPseudo: d,
                                match: oa,
                                attrHandle: {},
                                find: {},
                                relative: {
                                    ">": {
                                        dir: "parentNode",
                                        first: !0
                                    },
                                    " ": {
                                        dir: "parentNode"
                                    },
                                    "+": {
                                        dir: "previousSibling",
                                        first: !0
                                    },
                                    "~": {
                                        dir: "previousSibling"
                                    }
                                },
                                preFilter: {
                                    ATTR: function(a) {
                                        return a[1] = a[1].replace(va, wa), a[3] = (a[3] || a[4] || a[5] || "").replace(va, wa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                                    },
                                    CHILD: function(a) {
                                        return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
                                    },
                                    PSEUDO: function(a) {
                                        var b, c = !a[6] && a[2];
                                        return oa.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && ma.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                                    }
                                },
                                filter: {
                                    TAG: function(a) {
                                        var b = a.replace(va, wa).toLowerCase();
                                        return "*" === a ? function() {
                                            return !0
                                        } : function(a) {
                                            return a.nodeName && a.nodeName.toLowerCase() === b
                                        }
                                    },
                                    CLASS: function(a) {
                                        var b = R[a + " "];
                                        return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && R(a, function(a) {
                                            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                                        })
                                    },
                                    ATTR: function(a, c, d) {
                                        return function(e) {
                                            var f = b.attr(e, a);
                                            return null == f ? "!=" === c : c ? (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(ha, " ") + " ").indexOf(d) > -1 : "|=" === c ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
                                        }
                                    },
                                    CHILD: function(a, b, c, d, e) {
                                        var f = "nth" !== a.slice(0, 3),
                                            g = "last" !== a.slice(-4),
                                            h = "of-type" === b;
                                        return 1 === d && 0 === e ? function(a) {
                                            return !!a.parentNode
                                        } : function(b, c, i) {
                                            var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                                                q = b.parentNode,
                                                r = h && b.nodeName.toLowerCase(),
                                                s = !i && !h;
                                            if (q) {
                                                if (f) {
                                                    for (; p;) {
                                                        for (l = b; l = l[p];)
                                                            if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                                        o = p = "only" === a && !o && "nextSibling"
                                                    }
                                                    return !0
                                                }
                                                if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                                    for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();)
                                                        if (1 === l.nodeType && ++m && l === b) {
                                                            k[a] = [P, n, m];
                                                            break
                                                        }
                                                } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P) m = j[1];
                                                else
                                                    for (;
                                                        (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b)););
                                                return m -= e, m === d || m % d === 0 && m / d >= 0
                                            }
                                        }
                                    },
                                    PSEUDO: function(a, c) {
                                        var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                                        return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c], w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
                                            for (var d, e = f(a, c), g = e.length; g--;) d = aa(a, e[g]), a[d] = !(b[d] = e[g])
                                        }) : function(a) {
                                            return f(a, 0, e)
                                        }) : f
                                    }
                                },
                                pseudos: {
                                    not: d(function(a) {
                                        var b = [],
                                            c = [],
                                            e = A(a.replace(ia, "$1"));
                                        return e[N] ? d(function(a, b, c, d) {
                                            for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                                        }) : function(a, d, f) {
                                            return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop()
                                        }
                                    }),
                                    has: d(function(a) {
                                        return function(c) {
                                            return b(a, c).length > 0
                                        }
                                    }),
                                    contains: d(function(a) {
                                        return a = a.replace(va, wa),
                                            function(b) {
                                                return (b.textContent || b.innerText || x(b)).indexOf(a) > -1
                                            }
                                    }),
                                    lang: d(function(a) {
                                        return na.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(va, wa).toLowerCase(),
                                            function(b) {
                                                var c;
                                                do
                                                    if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                                                while ((b = b.parentNode) && 1 === b.nodeType);
                                                return !1
                                            }
                                    }),
                                    target: function(b) {
                                        var c = a.location && a.location.hash;
                                        return c && c.slice(1) === b.id
                                    },
                                    root: function(a) {
                                        return a === H
                                    },
                                    focus: function(a) {
                                        return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                                    },
                                    enabled: function(a) {
                                        return a.disabled === !1
                                    },
                                    disabled: function(a) {
                                        return a.disabled === !0
                                    },
                                    checked: function(a) {
                                        var b = a.nodeName.toLowerCase();
                                        return "input" === b && !!a.checked || "option" === b && !!a.selected
                                    },
                                    selected: function(a) {
                                        return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                                    },
                                    empty: function(a) {
                                        for (a = a.firstChild; a; a = a.nextSibling)
                                            if (a.nodeType < 6) return !1;
                                        return !0
                                    },
                                    parent: function(a) {
                                        return !w.pseudos.empty(a)
                                    },
                                    header: function(a) {
                                        return qa.test(a.nodeName)
                                    },
                                    input: function(a) {
                                        return pa.test(a.nodeName)
                                    },
                                    button: function(a) {
                                        var b = a.nodeName.toLowerCase();
                                        return "input" === b && "button" === a.type || "button" === b
                                    },
                                    text: function(a) {
                                        var b;
                                        return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                                    },
                                    first: j(function() {
                                        return [0]
                                    }),
                                    last: j(function(a, b) {
                                        return [b - 1]
                                    }),
                                    eq: j(function(a, b, c) {
                                        return [0 > c ? c + b : c]
                                    }),
                                    even: j(function(a, b) {
                                        for (var c = 0; b > c; c += 2) a.push(c);
                                        return a
                                    }),
                                    odd: j(function(a, b) {
                                        for (var c = 1; b > c; c += 2) a.push(c);
                                        return a
                                    }),
                                    lt: j(function(a, b, c) {
                                        for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                                        return a
                                    }),
                                    gt: j(function(a, b, c) {
                                        for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                                        return a
                                    })
                                }
                            }, w.pseudos.nth = w.pseudos.eq;
                            for (u in {
                                    radio: !0,
                                    checkbox: !0,
                                    file: !0,
                                    password: !0,
                                    image: !0
                                }) w.pseudos[u] = h(u);
                            for (u in {
                                    submit: !0,
                                    reset: !0
                                }) w.pseudos[u] = i(u);
                            return l.prototype = w.filters = w.pseudos, w.setFilters = new l, z = b.tokenize = function(a, c) {
                                var d, e, f, g, h, i, j, k = S[a + " "];
                                if (k) return c ? 0 : k.slice(0);
                                for (h = a, i = [], j = w.preFilter; h;) {
                                    (!d || (e = ja.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ka.exec(h)) && (d = e.shift(), f.push({
                                        value: d,
                                        type: e[0].replace(ia, " ")
                                    }), h = h.slice(d.length));
                                    for (g in w.filter) !(e = oa[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
                                        value: d,
                                        type: g,
                                        matches: e
                                    }), h = h.slice(d.length));
                                    if (!d) break
                                }
                                return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
                            }, A = b.compile = function(a, b) {
                                var c, d = [],
                                    e = [],
                                    f = T[a + " "];
                                if (!f) {
                                    for (b || (b = z(a)), c = b.length; c--;) f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                                    f = T(a, t(e, d)), f.selector = a
                                }
                                return f
                            }, B = b.select = function(a, b, c, d) {
                                var e, f, g, h, i, j = "function" == typeof a && a,
                                    l = !d && z(a = j.selector || a);
                                if (c = c || [], 1 === l.length) {
                                    if (f = l[0] = l[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
                                        if (b = (w.find.ID(g.matches[0].replace(va, wa), b) || [])[0], !b) return c;
                                        j && (b = b.parentNode), a = a.slice(f.shift().value.length)
                                    }
                                    for (e = oa.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !w.relative[h = g.type]);)
                                        if ((i = w.find[h]) && (d = i(g.matches[0].replace(va, wa), ta.test(f[0].type) && k(b.parentNode) || b))) {
                                            if (f.splice(e, 1), a = d.length && m(f), !a) return $.apply(c, d), c;
                                            break
                                        }
                                }
                                return (j || A(a, l))(d, b, !I, c, ta.test(a) && k(b.parentNode) || b), c
                            }, v.sortStable = N.split("").sort(U).join("") === N, v.detectDuplicates = !!E, F(), v.sortDetached = e(function(a) {
                                return 1 & a.compareDocumentPosition(G.createElement("div"))
                            }), e(function(a) {
                                return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
                            }) || f("type|href|height|width", function(a, b, c) {
                                return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
                            }), v.attributes && e(function(a) {
                                return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
                            }) || f("value", function(a, b, c) {
                                return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
                            }), e(function(a) {
                                return null == a.getAttribute("disabled")
                            }) || f(ba, function(a, b, c) {
                                var d;
                                return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
                            }), b
                        }(a);
                        _.find = ea, _.expr = ea.selectors, _.expr[":"] = _.expr.pseudos, _.unique = ea.uniqueSort, _.text = ea.getText, _.isXMLDoc = ea.isXML, _.contains = ea.contains;
                        var fa = _.expr.match.needsContext,
                            ga = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
                            ha = /^.[^:#\[\.,]*$/;
                        _.filter = function(a, b, c) {
                            var d = b[0];
                            return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? _.find.matchesSelector(d, a) ? [d] : [] : _.find.matches(a, _.grep(b, function(a) {
                                return 1 === a.nodeType
                            }))
                        }, _.fn.extend({
                            find: function(a) {
                                var b, c = this.length,
                                    d = [],
                                    e = this;
                                if ("string" != typeof a) return this.pushStack(_(a).filter(function() {
                                    for (b = 0; c > b; b++)
                                        if (_.contains(e[b], this)) return !0
                                }));
                                for (b = 0; c > b; b++) _.find(a, e[b], d);
                                return d = this.pushStack(c > 1 ? _.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
                            },
                            filter: function(a) {
                                return this.pushStack(d(this, a || [], !1))
                            },
                            not: function(a) {
                                return this.pushStack(d(this, a || [], !0))
                            },
                            is: function(a) {
                                return !!d(this, "string" == typeof a && fa.test(a) ? _(a) : a || [], !1).length
                            }
                        });
                        var ia, ja = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
                            ka = _.fn.init = function(a, b) {
                                var c, d;
                                if (!a) return this;
                                if ("string" == typeof a) {
                                    if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : ja.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || ia).find(a) : this.constructor(b).find(a);
                                    if (c[1]) {
                                        if (b = b instanceof _ ? b[0] : b, _.merge(this, _.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : Z, !0)), ga.test(c[1]) && _.isPlainObject(b))
                                            for (c in b) _.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                                        return this
                                    }
                                    return d = Z.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = Z, this.selector = a, this
                                }
                                return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : _.isFunction(a) ? "undefined" != typeof ia.ready ? ia.ready(a) : a(_) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), _.makeArray(a, this))
                            };
                        ka.prototype = _.fn, ia = _(Z);
                        var la = /^(?:parents|prev(?:Until|All))/,
                            ma = {
                                children: !0,
                                contents: !0,
                                next: !0,
                                prev: !0
                            };
                        _.extend({
                            dir: function(a, b, c) {
                                for (var d = [], e = void 0 !== c;
                                    (a = a[b]) && 9 !== a.nodeType;)
                                    if (1 === a.nodeType) {
                                        if (e && _(a).is(c)) break;
                                        d.push(a)
                                    }
                                return d
                            },
                            sibling: function(a, b) {
                                for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
                                return c
                            }
                        }), _.fn.extend({
                            has: function(a) {
                                var b = _(a, this),
                                    c = b.length;
                                return this.filter(function() {
                                    for (var a = 0; c > a; a++)
                                        if (_.contains(this, b[a])) return !0
                                })
                            },
                            closest: function(a, b) {
                                for (var c, d = 0, e = this.length, f = [], g = fa.test(a) || "string" != typeof a ? _(a, b || this.context) : 0; e > d; d++)
                                    for (c = this[d]; c && c !== b; c = c.parentNode)
                                        if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && _.find.matchesSelector(c, a))) {
                                            f.push(c);
                                            break
                                        }
                                return this.pushStack(f.length > 1 ? _.unique(f) : f)
                            },
                            index: function(a) {
                                return a ? "string" == typeof a ? U.call(_(a), this[0]) : U.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                            },
                            add: function(a, b) {
                                return this.pushStack(_.unique(_.merge(this.get(), _(a, b))))
                            },
                            addBack: function(a) {
                                return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
                            }
                        }), _.each({
                            parent: function(a) {
                                var b = a.parentNode;
                                return b && 11 !== b.nodeType ? b : null
                            },
                            parents: function(a) {
                                return _.dir(a, "parentNode")
                            },
                            parentsUntil: function(a, b, c) {
                                return _.dir(a, "parentNode", c)
                            },
                            next: function(a) {
                                return e(a, "nextSibling")
                            },
                            prev: function(a) {
                                return e(a, "previousSibling")
                            },
                            nextAll: function(a) {
                                return _.dir(a, "nextSibling")
                            },
                            prevAll: function(a) {
                                return _.dir(a, "previousSibling")
                            },
                            nextUntil: function(a, b, c) {
                                return _.dir(a, "nextSibling", c)
                            },
                            prevUntil: function(a, b, c) {
                                return _.dir(a, "previousSibling", c)
                            },
                            siblings: function(a) {
                                return _.sibling((a.parentNode || {}).firstChild, a)
                            },
                            children: function(a) {
                                return _.sibling(a.firstChild)
                            },
                            contents: function(a) {
                                return a.contentDocument || _.merge([], a.childNodes)
                            }
                        }, function(a, b) {
                            _.fn[a] = function(c, d) {
                                var e = _.map(this, b, c);
                                return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = _.filter(d, e)), this.length > 1 && (ma[a] || _.unique(e), la.test(a) && e.reverse()), this.pushStack(e)
                            }
                        });
                        var na = /\S+/g,
                            oa = {};
                        _.Callbacks = function(a) {
                            a = "string" == typeof a ? oa[a] || f(a) : _.extend({}, a);
                            var b, c, d, e, g, h, i = [],
                                j = !a.once && [],
                                k = function(f) {
                                    for (b = a.memory && f, c = !0, h = e || 0, e = 0, g = i.length, d = !0; i && g > h; h++)
                                        if (i[h].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
                                            b = !1;
                                            break
                                        }
                                    d = !1, i && (j ? j.length && k(j.shift()) : b ? i = [] : l.disable())
                                },
                                l = {
                                    add: function() {
                                        if (i) {
                                            var c = i.length;
                                            ! function f(b) {
                                                _.each(b, function(b, c) {
                                                    var d = _.type(c);
                                                    "function" === d ? a.unique && l.has(c) || i.push(c) : c && c.length && "string" !== d && f(c)
                                                })
                                            }(arguments), d ? g = i.length : b && (e = c, k(b))
                                        }
                                        return this
                                    },
                                    remove: function() {
                                        return i && _.each(arguments, function(a, b) {
                                            for (var c;
                                                (c = _.inArray(b, i, c)) > -1;) i.splice(c, 1), d && (g >= c && g--, h >= c && h--)
                                        }), this
                                    },
                                    has: function(a) {
                                        return a ? _.inArray(a, i) > -1 : !(!i || !i.length)
                                    },
                                    empty: function() {
                                        return i = [], g = 0, this
                                    },
                                    disable: function() {
                                        return i = j = b = void 0, this
                                    },
                                    disabled: function() {
                                        return !i
                                    },
                                    lock: function() {
                                        return j = void 0, b || l.disable(), this
                                    },
                                    locked: function() {
                                        return !j
                                    },
                                    fireWith: function(a, b) {
                                        return !i || c && !j || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? j.push(b) : k(b)), this
                                    },
                                    fire: function() {
                                        return l.fireWith(this, arguments), this
                                    },
                                    fired: function() {
                                        return !!c
                                    }
                                };
                            return l
                        }, _.extend({
                            Deferred: function(a) {
                                var b = [
                                        ["resolve", "done", _.Callbacks("once memory"), "resolved"],
                                        ["reject", "fail", _.Callbacks("once memory"), "rejected"],
                                        ["notify", "progress", _.Callbacks("memory")]
                                    ],
                                    c = "pending",
                                    d = {
                                        state: function() {
                                            return c
                                        },
                                        always: function() {
                                            return e.done(arguments).fail(arguments), this
                                        },
                                        then: function() {
                                            var a = arguments;
                                            return _.Deferred(function(c) {
                                                _.each(b, function(b, f) {
                                                    var g = _.isFunction(a[b]) && a[b];
                                                    e[f[1]](function() {
                                                        var a = g && g.apply(this, arguments);
                                                        a && _.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                                    })
                                                }), a = null
                                            }).promise()
                                        },
                                        promise: function(a) {
                                            return null != a ? _.extend(a, d) : d
                                        }
                                    },
                                    e = {};
                                return d.pipe = d.then, _.each(b, function(a, f) {
                                    var g = f[2],
                                        h = f[3];
                                    d[f[1]] = g.add, h && g.add(function() {
                                        c = h
                                    }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                                        return e[f[0] + "With"](this === e ? d : this, arguments), this
                                    }, e[f[0] + "With"] = g.fireWith
                                }), d.promise(e), a && a.call(e, e), e
                            },
                            when: function(a) {
                                var b, c, d, e = 0,
                                    f = R.call(arguments),
                                    g = f.length,
                                    h = 1 !== g || a && _.isFunction(a.promise) ? g : 0,
                                    i = 1 === h ? a : _.Deferred(),
                                    j = function(a, c, d) {
                                        return function(e) {
                                            c[a] = this, d[a] = arguments.length > 1 ? R.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                                        }
                                    };
                                if (g > 1)
                                    for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && _.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
                                return h || i.resolveWith(d, f), i.promise()
                            }
                        });
                        var pa;
                        _.fn.ready = function(a) {
                            return _.ready.promise().done(a), this
                        }, _.extend({
                            isReady: !1,
                            readyWait: 1,
                            holdReady: function(a) {
                                a ? _.readyWait++ : _.ready(!0)
                            },
                            ready: function(a) {
                                (a === !0 ? --_.readyWait : _.isReady) || (_.isReady = !0, a !== !0 && --_.readyWait > 0 || (pa.resolveWith(Z, [_]), _.fn.triggerHandler && (_(Z).triggerHandler("ready"), _(Z).off("ready"))))
                            }
                        }), _.ready.promise = function(b) {
                            return pa || (pa = _.Deferred(), "complete" === Z.readyState ? setTimeout(_.ready) : (Z.addEventListener("DOMContentLoaded", g, !1), a.addEventListener("load", g, !1))), pa.promise(b)
                        }, _.ready.promise();
                        var qa = _.access = function(a, b, c, d, e, f, g) {
                            var h = 0,
                                i = a.length,
                                j = null == c;
                            if ("object" === _.type(c)) {
                                e = !0;
                                for (h in c) _.access(a, b, h, c[h], !0, f, g)
                            } else if (void 0 !== d && (e = !0, _.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                                    return j.call(_(a), c)
                                })), b))
                                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
                            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
                        };
                        _.acceptData = function(a) {
                            return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
                        }, h.uid = 1, h.accepts = _.acceptData, h.prototype = {
                            key: function(a) {
                                if (!h.accepts(a)) return 0;
                                var b = {},
                                    c = a[this.expando];
                                if (!c) {
                                    c = h.uid++;
                                    try {
                                        b[this.expando] = {
                                            value: c
                                        }, Object.defineProperties(a, b)
                                    } catch (d) {
                                        b[this.expando] = c, _.extend(a, b)
                                    }
                                }
                                return this.cache[c] || (this.cache[c] = {}), c
                            },
                            set: function(a, b, c) {
                                var d, e = this.key(a),
                                    f = this.cache[e];
                                if ("string" == typeof b) f[b] = c;
                                else if (_.isEmptyObject(f)) _.extend(this.cache[e], b);
                                else
                                    for (d in b) f[d] = b[d];
                                return f
                            },
                            get: function(a, b) {
                                var c = this.cache[this.key(a)];
                                return void 0 === b ? c : c[b]
                            },
                            access: function(a, b, c) {
                                var d;
                                return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, _.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
                            },
                            remove: function(a, b) {
                                var c, d, e, f = this.key(a),
                                    g = this.cache[f];
                                if (void 0 === b) this.cache[f] = {};
                                else {
                                    _.isArray(b) ? d = b.concat(b.map(_.camelCase)) : (e = _.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(na) || [])), c = d.length;
                                    for (; c--;) delete g[d[c]]
                                }
                            },
                            hasData: function(a) {
                                return !_.isEmptyObject(this.cache[a[this.expando]] || {})
                            },
                            discard: function(a) {
                                a[this.expando] && delete this.cache[a[this.expando]]
                            }
                        };
                        var ra = new h,
                            sa = new h,
                            ta = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                            ua = /([A-Z])/g;
                        _.extend({
                            hasData: function(a) {
                                return sa.hasData(a) || ra.hasData(a)
                            },
                            data: function(a, b, c) {
                                return sa.access(a, b, c)
                            },
                            removeData: function(a, b) {
                                sa.remove(a, b)
                            },
                            _data: function(a, b, c) {
                                return ra.access(a, b, c)
                            },
                            _removeData: function(a, b) {
                                ra.remove(a, b)
                            }
                        }), _.fn.extend({
                            data: function(a, b) {
                                var c, d, e, f = this[0],
                                    g = f && f.attributes;
                                if (void 0 === a) {
                                    if (this.length && (e = sa.get(f), 1 === f.nodeType && !ra.get(f, "hasDataAttrs"))) {
                                        for (c = g.length; c--;) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = _.camelCase(d.slice(5)), i(f, d, e[d])));
                                        ra.set(f, "hasDataAttrs", !0)
                                    }
                                    return e
                                }
                                return "object" == typeof a ? this.each(function() {
                                    sa.set(this, a)
                                }) : qa(this, function(b) {
                                    var c, d = _.camelCase(a);
                                    if (f && void 0 === b) {
                                        if (c = sa.get(f, a), void 0 !== c) return c;
                                        if (c = sa.get(f, d), void 0 !== c) return c;
                                        if (c = i(f, d, void 0), void 0 !== c) return c
                                    } else this.each(function() {
                                        var c = sa.get(this, d);
                                        sa.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && sa.set(this, a, b)
                                    })
                                }, null, b, arguments.length > 1, null, !0)
                            },
                            removeData: function(a) {
                                return this.each(function() {
                                    sa.remove(this, a)
                                })
                            }
                        }), _.extend({
                            queue: function(a, b, c) {
                                var d;
                                return a ? (b = (b || "fx") + "queue", d = ra.get(a, b), c && (!d || _.isArray(c) ? d = ra.access(a, b, _.makeArray(c)) : d.push(c)), d || []) : void 0
                            },
                            dequeue: function(a, b) {
                                b = b || "fx";
                                var c = _.queue(a, b),
                                    d = c.length,
                                    e = c.shift(),
                                    f = _._queueHooks(a, b),
                                    g = function() {
                                        _.dequeue(a, b)
                                    };
                                "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
                            },
                            _queueHooks: function(a, b) {
                                var c = b + "queueHooks";
                                return ra.get(a, c) || ra.access(a, c, {
                                    empty: _.Callbacks("once memory").add(function() {
                                        ra.remove(a, [b + "queue", c])
                                    })
                                })
                            }
                        }), _.fn.extend({
                            queue: function(a, b) {
                                var c = 2;
                                return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? _.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                                    var c = _.queue(this, a, b);
                                    _._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && _.dequeue(this, a)
                                })
                            },
                            dequeue: function(a) {
                                return this.each(function() {
                                    _.dequeue(this, a)
                                })
                            },
                            clearQueue: function(a) {
                                return this.queue(a || "fx", [])
                            },
                            promise: function(a, b) {
                                var c, d = 1,
                                    e = _.Deferred(),
                                    f = this,
                                    g = this.length,
                                    h = function() {
                                        --d || e.resolveWith(f, [f])
                                    };
                                for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;) c = ra.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
                                return h(), e.promise(b)
                            }
                        });
                        var va = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                            wa = ["Top", "Right", "Bottom", "Left"],
                            xa = function(a, b) {
                                return a = b || a, "none" === _.css(a, "display") || !_.contains(a.ownerDocument, a)
                            },
                            ya = /^(?:checkbox|radio)$/i;
                        ! function() {
                            var a = Z.createDocumentFragment(),
                                b = a.appendChild(Z.createElement("div")),
                                c = Z.createElement("input");
                            c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), Y.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", Y.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
                        }();
                        var za = "undefined";
                        Y.focusinBubbles = "onfocusin" in a;
                        var Aa = /^key/,
                            Ba = /^(?:mouse|pointer|contextmenu)|click/,
                            Ca = /^(?:focusinfocus|focusoutblur)$/,
                            Da = /^([^.]*)(?:\.(.+)|)$/;
                        _.event = {
                            global: {},
                            add: function(a, b, c, d, e) {
                                var f, g, h, i, j, k, l, m, n, o, p, q = ra.get(a);
                                if (q)
                                    for (c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = _.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) {
                                            return typeof _ !== za && _.event.triggered !== b.type ? _.event.dispatch.apply(a, arguments) : void 0
                                        }), b = (b || "").match(na) || [""], j = b.length; j--;) h = Da.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = _.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = _.event.special[n] || {}, k = _.extend({
                                        type: n,
                                        origType: p,
                                        data: d,
                                        handler: c,
                                        guid: c.guid,
                                        selector: e,
                                        needsContext: e && _.expr.match.needsContext.test(e),
                                        namespace: o.join(".")
                                    }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), _.event.global[n] = !0)
                            },
                            remove: function(a, b, c, d, e) {
                                var f, g, h, i, j, k, l, m, n, o, p, q = ra.hasData(a) && ra.get(a);
                                if (q && (i = q.events)) {
                                    for (b = (b || "").match(na) || [""], j = b.length; j--;)
                                        if (h = Da.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                                            for (l = _.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                                            g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || _.removeEvent(a, n, q.handle), delete i[n])
                                        } else
                                            for (n in i) _.event.remove(a, n + b[j], c, d, !0);
                                    _.isEmptyObject(i) && (delete q.handle, ra.remove(a, "events"))
                                }
                            },
                            trigger: function(b, c, d, e) {
                                var f, g, h, i, j, k, l, m = [d || Z],
                                    n = X.call(b, "type") ? b.type : b,
                                    o = X.call(b, "namespace") ? b.namespace.split(".") : [];
                                if (g = h = d = d || Z, 3 !== d.nodeType && 8 !== d.nodeType && !Ca.test(n + _.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."), n = o.shift(), o.sort()), j = n.indexOf(":") < 0 && "on" + n, b = b[_.expando] ? b : new _.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : _.makeArray(c, [b]), l = _.event.special[n] || {}, e || !l.trigger || l.trigger.apply(d, c) !== !1)) {
                                    if (!e && !l.noBubble && !_.isWindow(d)) {
                                        for (i = l.delegateType || n, Ca.test(i + n) || (g = g.parentNode); g; g = g.parentNode) m.push(g), h = g;
                                        h === (d.ownerDocument || Z) && m.push(h.defaultView || h.parentWindow || a)
                                    }
                                    for (f = 0;
                                        (g = m[f++]) && !b.isPropagationStopped();) b.type = f > 1 ? i : l.bindType || n, k = (ra.get(g, "events") || {})[b.type] && ra.get(g, "handle"), k && k.apply(g, c), k = j && g[j], k && k.apply && _.acceptData(g) && (b.result = k.apply(g, c), b.result === !1 && b.preventDefault());
                                    return b.type = n, e || b.isDefaultPrevented() || l._default && l._default.apply(m.pop(), c) !== !1 || !_.acceptData(d) || j && _.isFunction(d[n]) && !_.isWindow(d) && (h = d[j], h && (d[j] = null), _.event.triggered = n, d[n](), _.event.triggered = void 0, h && (d[j] = h)), b.result
                                }
                            },
                            dispatch: function(a) {
                                a = _.event.fix(a);
                                var b, c, d, e, f, g = [],
                                    h = R.call(arguments),
                                    i = (ra.get(this, "events") || {})[a.type] || [],
                                    j = _.event.special[a.type] || {};
                                if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
                                    for (g = _.event.handlers.call(this, a, i), b = 0;
                                        (e = g[b++]) && !a.isPropagationStopped();)
                                        for (a.currentTarget = e.elem, c = 0;
                                            (f = e.handlers[c++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(f.namespace)) && (a.handleObj = f, a.data = f.data, d = ((_.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
                                    return j.postDispatch && j.postDispatch.call(this, a), a.result
                                }
                            },
                            handlers: function(a, b) {
                                var c, d, e, f, g = [],
                                    h = b.delegateCount,
                                    i = a.target;
                                if (h && i.nodeType && (!a.button || "click" !== a.type))
                                    for (; i !== this; i = i.parentNode || this)
                                        if (i.disabled !== !0 || "click" !== a.type) {
                                            for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? _(e, this).index(i) >= 0 : _.find(e, this, null, [i]).length), d[e] && d.push(f);
                                            d.length && g.push({
                                                elem: i,
                                                handlers: d
                                            })
                                        }
                                return h < b.length && g.push({
                                    elem: this,
                                    handlers: b.slice(h)
                                }), g
                            },
                            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                            fixHooks: {},
                            keyHooks: {
                                props: "char charCode key keyCode".split(" "),
                                filter: function(a, b) {
                                    return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
                                }
                            },
                            mouseHooks: {
                                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                                filter: function(a, b) {
                                    var c, d, e, f = b.button;
                                    return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || Z, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
                                }
                            },
                            fix: function(a) {
                                if (a[_.expando]) return a;
                                var b, c, d, e = a.type,
                                    f = a,
                                    g = this.fixHooks[e];
                                for (g || (this.fixHooks[e] = g = Ba.test(e) ? this.mouseHooks : Aa.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new _.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
                                return a.target || (a.target = Z), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
                            },
                            special: {
                                load: {
                                    noBubble: !0
                                },
                                focus: {
                                    trigger: function() {
                                        return this !== l() && this.focus ? (this.focus(), !1) : void 0
                                    },
                                    delegateType: "focusin"
                                },
                                blur: {
                                    trigger: function() {
                                        return this === l() && this.blur ? (this.blur(), !1) : void 0
                                    },
                                    delegateType: "focusout"
                                },
                                click: {
                                    trigger: function() {
                                        return "checkbox" === this.type && this.click && _.nodeName(this, "input") ? (this.click(), !1) : void 0
                                    },
                                    _default: function(a) {
                                        return _.nodeName(a.target, "a")
                                    }
                                },
                                beforeunload: {
                                    postDispatch: function(a) {
                                        void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                                    }
                                }
                            },
                            simulate: function(a, b, c, d) {
                                var e = _.extend(new _.Event, c, {
                                    type: a,
                                    isSimulated: !0,
                                    originalEvent: {}
                                });
                                d ? _.event.trigger(e, null, b) : _.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
                            }
                        }, _.removeEvent = function(a, b, c) {
                            a.removeEventListener && a.removeEventListener(b, c, !1)
                        }, _.Event = function(a, b) {
                            return this instanceof _.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? j : k) : this.type = a, b && _.extend(this, b), this.timeStamp = a && a.timeStamp || _.now(), void(this[_.expando] = !0)) : new _.Event(a, b)
                        }, _.Event.prototype = {
                            isDefaultPrevented: k,
                            isPropagationStopped: k,
                            isImmediatePropagationStopped: k,
                            preventDefault: function() {
                                var a = this.originalEvent;
                                this.isDefaultPrevented = j, a && a.preventDefault && a.preventDefault()
                            },
                            stopPropagation: function() {
                                var a = this.originalEvent;
                                this.isPropagationStopped = j, a && a.stopPropagation && a.stopPropagation()
                            },
                            stopImmediatePropagation: function() {
                                var a = this.originalEvent;
                                this.isImmediatePropagationStopped = j, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
                            }
                        }, _.each({
                            mouseenter: "mouseover",
                            mouseleave: "mouseout",
                            pointerenter: "pointerover",
                            pointerleave: "pointerout"
                        }, function(a, b) {
                            _.event.special[a] = {
                                delegateType: b,
                                bindType: b,
                                handle: function(a) {
                                    var c, d = this,
                                        e = a.relatedTarget,
                                        f = a.handleObj;
                                    return (!e || e !== d && !_.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
                                }
                            }
                        }), Y.focusinBubbles || _.each({
                            focus: "focusin",
                            blur: "focusout"
                        }, function(a, b) {
                            var c = function(a) {
                                _.event.simulate(b, a.target, _.event.fix(a), !0)
                            };
                            _.event.special[b] = {
                                setup: function() {
                                    var d = this.ownerDocument || this,
                                        e = ra.access(d, b);
                                    e || d.addEventListener(a, c, !0), ra.access(d, b, (e || 0) + 1)
                                },
                                teardown: function() {
                                    var d = this.ownerDocument || this,
                                        e = ra.access(d, b) - 1;
                                    e ? ra.access(d, b, e) : (d.removeEventListener(a, c, !0), ra.remove(d, b))
                                }
                            }
                        }), _.fn.extend({
                            on: function(a, b, c, d, e) {
                                var f, g;
                                if ("object" == typeof a) {
                                    "string" != typeof b && (c = c || b, b = void 0);
                                    for (g in a) this.on(g, b, c, a[g], e);
                                    return this
                                }
                                if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = k;
                                else if (!d) return this;
                                return 1 === e && (f = d, d = function(a) {
                                    return _().off(a), f.apply(this, arguments)
                                }, d.guid = f.guid || (f.guid = _.guid++)), this.each(function() {
                                    _.event.add(this, a, d, c, b)
                                })
                            },
                            one: function(a, b, c, d) {
                                return this.on(a, b, c, d, 1)
                            },
                            off: function(a, b, c) {
                                var d, e;
                                if (a && a.preventDefault && a.handleObj) return d = a.handleObj, _(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
                                if ("object" == typeof a) {
                                    for (e in a) this.off(e, b, a[e]);
                                    return this
                                }
                                return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = k), this.each(function() {
                                    _.event.remove(this, a, c, b)
                                })
                            },
                            trigger: function(a, b) {
                                return this.each(function() {
                                    _.event.trigger(a, b, this)
                                })
                            },
                            triggerHandler: function(a, b) {
                                var c = this[0];
                                return c ? _.event.trigger(a, b, c, !0) : void 0
                            }
                        });
                        var Ea = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
                            Fa = /<([\w:]+)/,
                            Ga = /<|&#?\w+;/,
                            Ha = /<(?:script|style|link)/i,
                            Ia = /checked\s*(?:[^=]|=\s*.checked.)/i,
                            Ja = /^$|\/(?:java|ecma)script/i,
                            Ka = /^true\/(.*)/,
                            La = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
                            Ma = {
                                option: [1, "<select multiple='multiple'>", "</select>"],
                                thead: [1, "<table>", "</table>"],
                                col: [2, "<table><colgroup>", "</colgroup></table>"],
                                tr: [2, "<table><tbody>", "</tbody></table>"],
                                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                                _default: [0, "", ""]
                            };
                        Ma.optgroup = Ma.option, Ma.tbody = Ma.tfoot = Ma.colgroup = Ma.caption = Ma.thead, Ma.th = Ma.td, _.extend({
                            clone: function(a, b, c) {
                                var d, e, f, g, h = a.cloneNode(!0),
                                    i = _.contains(a.ownerDocument, a);
                                if (!(Y.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || _.isXMLDoc(a)))
                                    for (g = r(h), f = r(a), d = 0, e = f.length; e > d; d++) s(f[d], g[d]);
                                if (b)
                                    if (c)
                                        for (f = f || r(a), g = g || r(h), d = 0, e = f.length; e > d; d++) q(f[d], g[d]);
                                    else q(a, h);
                                return g = r(h, "script"), g.length > 0 && p(g, !i && r(a, "script")), h
                            },
                            buildFragment: function(a, b, c, d) {
                                for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, n = a.length; n > m; m++)
                                    if (e = a[m], e || 0 === e)
                                        if ("object" === _.type(e)) _.merge(l, e.nodeType ? [e] : e);
                                        else if (Ga.test(e)) {
                                    for (f = f || k.appendChild(b.createElement("div")), g = (Fa.exec(e) || ["", ""])[1].toLowerCase(), h = Ma[g] || Ma._default, f.innerHTML = h[1] + e.replace(Ea, "<$1></$2>") + h[2], j = h[0]; j--;) f = f.lastChild;
                                    _.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
                                } else l.push(b.createTextNode(e));
                                for (k.textContent = "", m = 0; e = l[m++];)
                                    if ((!d || -1 === _.inArray(e, d)) && (i = _.contains(e.ownerDocument, e), f = r(k.appendChild(e), "script"), i && p(f), c))
                                        for (j = 0; e = f[j++];) Ja.test(e.type || "") && c.push(e);
                                return k
                            },
                            cleanData: function(a) {
                                for (var b, c, d, e, f = _.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                                    if (_.acceptData(c) && (e = c[ra.expando], e && (b = ra.cache[e]))) {
                                        if (b.events)
                                            for (d in b.events) f[d] ? _.event.remove(c, d) : _.removeEvent(c, d, b.handle);
                                        ra.cache[e] && delete ra.cache[e]
                                    }
                                    delete sa.cache[c[sa.expando]]
                                }
                            }
                        }), _.fn.extend({
                            text: function(a) {
                                return qa(this, function(a) {
                                    return void 0 === a ? _.text(this) : this.empty().each(function() {
                                        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                                    })
                                }, null, a, arguments.length)
                            },
                            append: function() {
                                return this.domManip(arguments, function(a) {
                                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                        var b = m(this, a);
                                        b.appendChild(a)
                                    }
                                })
                            },
                            prepend: function() {
                                return this.domManip(arguments, function(a) {
                                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                        var b = m(this, a);
                                        b.insertBefore(a, b.firstChild)
                                    }
                                })
                            },
                            before: function() {
                                return this.domManip(arguments, function(a) {
                                    this.parentNode && this.parentNode.insertBefore(a, this)
                                })
                            },
                            after: function() {
                                return this.domManip(arguments, function(a) {
                                    this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
                                })
                            },
                            remove: function(a, b) {
                                for (var c, d = a ? _.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || _.cleanData(r(c)), c.parentNode && (b && _.contains(c.ownerDocument, c) && p(r(c, "script")), c.parentNode.removeChild(c));
                                return this
                            },
                            empty: function() {
                                for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (_.cleanData(r(a, !1)), a.textContent = "");
                                return this
                            },
                            clone: function(a, b) {
                                return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                                    return _.clone(this, a, b)
                                })
                            },
                            html: function(a) {
                                return qa(this, function(a) {
                                    var b = this[0] || {},
                                        c = 0,
                                        d = this.length;
                                    if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                                    if ("string" == typeof a && !Ha.test(a) && !Ma[(Fa.exec(a) || ["", ""])[1].toLowerCase()]) {
                                        a = a.replace(Ea, "<$1></$2>");
                                        try {
                                            for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (_.cleanData(r(b, !1)), b.innerHTML = a);
                                            b = 0
                                        } catch (e) {}
                                    }
                                    b && this.empty().append(a)
                                }, null, a, arguments.length)
                            },
                            replaceWith: function() {
                                var a = arguments[0];
                                return this.domManip(arguments, function(b) {
                                    a = this.parentNode, _.cleanData(r(this)), a && a.replaceChild(b, this)
                                }), a && (a.length || a.nodeType) ? this : this.remove()
                            },
                            detach: function(a) {
                                return this.remove(a, !0)
                            },
                            domManip: function(a, b) {
                                a = S.apply([], a);
                                var c, d, e, f, g, h, i = 0,
                                    j = this.length,
                                    k = this,
                                    l = j - 1,
                                    m = a[0],
                                    p = _.isFunction(m);
                                if (p || j > 1 && "string" == typeof m && !Y.checkClone && Ia.test(m)) return this.each(function(c) {
                                    var d = k.eq(c);
                                    p && (a[0] = m.call(this, c, d.html())), d.domManip(a, b)
                                });
                                if (j && (c = _.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
                                    for (e = _.map(r(c, "script"), n), f = e.length; j > i; i++) g = c, i !== l && (g = _.clone(g, !0, !0), f && _.merge(e, r(g, "script"))), b.call(this[i], g, i);
                                    if (f)
                                        for (h = e[e.length - 1].ownerDocument, _.map(e, o), i = 0; f > i; i++) g = e[i], Ja.test(g.type || "") && !ra.access(g, "globalEval") && _.contains(h, g) && (g.src ? _._evalUrl && _._evalUrl(g.src) : _.globalEval(g.textContent.replace(La, "")))
                                }
                                return this
                            }
                        }), _.each({
                            appendTo: "append",
                            prependTo: "prepend",
                            insertBefore: "before",
                            insertAfter: "after",
                            replaceAll: "replaceWith"
                        }, function(a, b) {
                            _.fn[a] = function(a) {
                                for (var c, d = [], e = _(a), f = e.length - 1, g = 0; f >= g; g++) c = g === f ? this : this.clone(!0), _(e[g])[b](c), T.apply(d, c.get());
                                return this.pushStack(d)
                            }
                        });
                        var Na, Oa = {},
                            Pa = /^margin/,
                            Qa = new RegExp("^(" + va + ")(?!px)[a-z%]+$", "i"),
                            Ra = function(b) {
                                return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
                            };
                        ! function() {
                            function b() {
                                g.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", g.innerHTML = "", e.appendChild(f);
                                var b = a.getComputedStyle(g, null);
                                c = "1%" !== b.top, d = "4px" === b.width, e.removeChild(f)
                            }
                            var c, d, e = Z.documentElement,
                                f = Z.createElement("div"),
                                g = Z.createElement("div");
                            g.style && (g.style.backgroundClip = "content-box", g.cloneNode(!0).style.backgroundClip = "", Y.clearCloneStyle = "content-box" === g.style.backgroundClip, f.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", f.appendChild(g), a.getComputedStyle && _.extend(Y, {
                                pixelPosition: function() {
                                    return b(), c
                                },
                                boxSizingReliable: function() {
                                    return null == d && b(), d
                                },
                                reliableMarginRight: function() {
                                    var b, c = g.appendChild(Z.createElement("div"));
                                    return c.style.cssText = g.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", g.style.width = "1px", e.appendChild(f), b = !parseFloat(a.getComputedStyle(c, null).marginRight), e.removeChild(f), g.removeChild(c), b
                                }
                            }))
                        }(), _.swap = function(a, b, c, d) {
                            var e, f, g = {};
                            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
                            e = c.apply(a, d || []);
                            for (f in b) a.style[f] = g[f];
                            return e
                        };
                        var Sa = /^(none|table(?!-c[ea]).+)/,
                            Ta = new RegExp("^(" + va + ")(.*)$", "i"),
                            Ua = new RegExp("^([+-])=(" + va + ")", "i"),
                            Va = {
                                position: "absolute",
                                visibility: "hidden",
                                display: "block"
                            },
                            Wa = {
                                letterSpacing: "0",
                                fontWeight: "400"
                            },
                            Xa = ["Webkit", "O", "Moz", "ms"];
                        _.extend({
                            cssHooks: {
                                opacity: {
                                    get: function(a, b) {
                                        if (b) {
                                            var c = v(a, "opacity");
                                            return "" === c ? "1" : c
                                        }
                                    }
                                }
                            },
                            cssNumber: {
                                columnCount: !0,
                                fillOpacity: !0,
                                flexGrow: !0,
                                flexShrink: !0,
                                fontWeight: !0,
                                lineHeight: !0,
                                opacity: !0,
                                order: !0,
                                orphans: !0,
                                widows: !0,
                                zIndex: !0,
                                zoom: !0
                            },
                            cssProps: {
                                "float": "cssFloat"
                            },
                            style: function(a, b, c, d) {
                                if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                                    var e, f, g, h = _.camelCase(b),
                                        i = a.style;
                                    return b = _.cssProps[h] || (_.cssProps[h] = x(i, h)), g = _.cssHooks[b] || _.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Ua.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(_.css(a, b)), f = "number"), void(null != c && c === c && ("number" !== f || _.cssNumber[h] || (c += "px"), Y.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c))))
                                }
                            },
                            css: function(a, b, c, d) {
                                var e, f, g, h = _.camelCase(b);
                                return b = _.cssProps[h] || (_.cssProps[h] = x(a.style, h)), g = _.cssHooks[b] || _.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = v(a, b, d)), "normal" === e && b in Wa && (e = Wa[b]), "" === c || c ? (f = parseFloat(e), c === !0 || _.isNumeric(f) ? f || 0 : e) : e
                            }
                        }), _.each(["height", "width"], function(a, b) {
                            _.cssHooks[b] = {
                                get: function(a, c, d) {
                                    return c ? Sa.test(_.css(a, "display")) && 0 === a.offsetWidth ? _.swap(a, Va, function() {
                                        return A(a, b, d)
                                    }) : A(a, b, d) : void 0
                                },
                                set: function(a, c, d) {
                                    var e = d && Ra(a);
                                    return y(a, c, d ? z(a, b, d, "border-box" === _.css(a, "boxSizing", !1, e), e) : 0)
                                }
                            }
                        }), _.cssHooks.marginRight = w(Y.reliableMarginRight, function(a, b) {
                            return b ? _.swap(a, {
                                display: "inline-block"
                            }, v, [a, "marginRight"]) : void 0
                        }), _.each({
                            margin: "",
                            padding: "",
                            border: "Width"
                        }, function(a, b) {
                            _.cssHooks[a + b] = {
                                expand: function(c) {
                                    for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + wa[d] + b] = f[d] || f[d - 2] || f[0];
                                    return e
                                }
                            }, Pa.test(a) || (_.cssHooks[a + b].set = y)
                        }), _.fn.extend({
                            css: function(a, b) {
                                return qa(this, function(a, b, c) {
                                    var d, e, f = {},
                                        g = 0;
                                    if (_.isArray(b)) {
                                        for (d = Ra(a), e = b.length; e > g; g++) f[b[g]] = _.css(a, b[g], !1, d);
                                        return f
                                    }
                                    return void 0 !== c ? _.style(a, b, c) : _.css(a, b)
                                }, a, b, arguments.length > 1)
                            },
                            show: function() {
                                return B(this, !0)
                            },
                            hide: function() {
                                return B(this)
                            },
                            toggle: function(a) {
                                return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                                    xa(this) ? _(this).show() : _(this).hide()
                                })
                            }
                        }), _.Tween = C, C.prototype = {
                            constructor: C,
                            init: function(a, b, c, d, e, f) {
                                this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (_.cssNumber[c] ? "" : "px")
                            },
                            cur: function() {
                                var a = C.propHooks[this.prop];
                                return a && a.get ? a.get(this) : C.propHooks._default.get(this)
                            },
                            run: function(a) {
                                var b, c = C.propHooks[this.prop];
                                return this.options.duration ? this.pos = b = _.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : C.propHooks._default.set(this), this
                            }
                        }, C.prototype.init.prototype = C.prototype, C.propHooks = {
                            _default: {
                                get: function(a) {
                                    var b;
                                    return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = _.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
                                },
                                set: function(a) {
                                    _.fx.step[a.prop] ? _.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[_.cssProps[a.prop]] || _.cssHooks[a.prop]) ? _.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
                                }
                            }
                        }, C.propHooks.scrollTop = C.propHooks.scrollLeft = {
                            set: function(a) {
                                a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
                            }
                        }, _.easing = {
                            linear: function(a) {
                                return a
                            },
                            swing: function(a) {
                                return .5 - Math.cos(a * Math.PI) / 2
                            }
                        }, _.fx = C.prototype.init, _.fx.step = {};
                        var Ya, Za, $a = /^(?:toggle|show|hide)$/,
                            _a = new RegExp("^(?:([+-])=|)(" + va + ")([a-z%]*)$", "i"),
                            ab = /queueHooks$/,
                            bb = [G],
                            cb = {
                                "*": [function(a, b) {
                                    var c = this.createTween(a, b),
                                        d = c.cur(),
                                        e = _a.exec(b),
                                        f = e && e[3] || (_.cssNumber[a] ? "" : "px"),
                                        g = (_.cssNumber[a] || "px" !== f && +d) && _a.exec(_.css(c.elem, a)),
                                        h = 1,
                                        i = 20;
                                    if (g && g[3] !== f) {
                                        f = f || g[3], e = e || [], g = +d || 1;
                                        do h = h || ".5", g /= h, _.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                                    }
                                    return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
                                }]
                            };
                        _.Animation = _.extend(I, {
                                tweener: function(a, b) {
                                    _.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
                                    for (var c, d = 0, e = a.length; e > d; d++) c = a[d], cb[c] = cb[c] || [], cb[c].unshift(b)
                                },
                                prefilter: function(a, b) {
                                    b ? bb.unshift(a) : bb.push(a)
                                }
                            }), _.speed = function(a, b, c) {
                                var d = a && "object" == typeof a ? _.extend({}, a) : {
                                    complete: c || !c && b || _.isFunction(a) && a,
                                    duration: a,
                                    easing: c && b || b && !_.isFunction(b) && b
                                };
                                return d.duration = _.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in _.fx.speeds ? _.fx.speeds[d.duration] : _.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                                    _.isFunction(d.old) && d.old.call(this), d.queue && _.dequeue(this, d.queue)
                                }, d
                            }, _.fn.extend({
                                fadeTo: function(a, b, c, d) {
                                    return this.filter(xa).css("opacity", 0).show().end().animate({
                                        opacity: b
                                    }, a, c, d)
                                },
                                animate: function(a, b, c, d) {
                                    var e = _.isEmptyObject(a),
                                        f = _.speed(b, c, d),
                                        g = function() {
                                            var b = I(this, _.extend({}, a), f);
                                            (e || ra.get(this, "finish")) && b.stop(!0)
                                        };
                                    return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
                                },
                                stop: function(a, b, c) {
                                    var d = function(a) {
                                        var b = a.stop;
                                        delete a.stop, b(c)
                                    };
                                    return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                                        var b = !0,
                                            e = null != a && a + "queueHooks",
                                            f = _.timers,
                                            g = ra.get(this);
                                        if (e) g[e] && g[e].stop && d(g[e]);
                                        else
                                            for (e in g) g[e] && g[e].stop && ab.test(e) && d(g[e]);
                                        for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                                        (b || !c) && _.dequeue(this, a)
                                    })
                                },
                                finish: function(a) {
                                    return a !== !1 && (a = a || "fx"), this.each(function() {
                                        var b, c = ra.get(this),
                                            d = c[a + "queue"],
                                            e = c[a + "queueHooks"],
                                            f = _.timers,
                                            g = d ? d.length : 0;
                                        for (c.finish = !0, _.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                                        for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                                        delete c.finish
                                    })
                                }
                            }), _.each(["toggle", "show", "hide"], function(a, b) {
                                var c = _.fn[b];
                                _.fn[b] = function(a, d, e) {
                                    return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(E(b, !0), a, d, e)
                                }
                            }), _.each({
                                slideDown: E("show"),
                                slideUp: E("hide"),
                                slideToggle: E("toggle"),
                                fadeIn: {
                                    opacity: "show"
                                },
                                fadeOut: {
                                    opacity: "hide"
                                },
                                fadeToggle: {
                                    opacity: "toggle"
                                }
                            }, function(a, b) {
                                _.fn[a] = function(a, c, d) {
                                    return this.animate(b, a, c, d)
                                }
                            }), _.timers = [], _.fx.tick = function() {
                                var a, b = 0,
                                    c = _.timers;
                                for (Ya = _.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
                                c.length || _.fx.stop(), Ya = void 0
                            }, _.fx.timer = function(a) {
                                _.timers.push(a), a() ? _.fx.start() : _.timers.pop()
                            }, _.fx.interval = 13, _.fx.start = function() {
                                Za || (Za = setInterval(_.fx.tick, _.fx.interval))
                            }, _.fx.stop = function() {
                                clearInterval(Za), Za = null
                            }, _.fx.speeds = {
                                slow: 600,
                                fast: 200,
                                _default: 400
                            }, _.fn.delay = function(a, b) {
                                return a = _.fx ? _.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                                    var d = setTimeout(b, a);
                                    c.stop = function() {
                                        clearTimeout(d)
                                    }
                                })
                            },
                            function() {
                                var a = Z.createElement("input"),
                                    b = Z.createElement("select"),
                                    c = b.appendChild(Z.createElement("option"));
                                a.type = "checkbox", Y.checkOn = "" !== a.value, Y.optSelected = c.selected, b.disabled = !0, Y.optDisabled = !c.disabled, a = Z.createElement("input"), a.value = "t", a.type = "radio", Y.radioValue = "t" === a.value
                            }();
                        var db, eb, fb = _.expr.attrHandle;
                        _.fn.extend({
                            attr: function(a, b) {
                                return qa(this, _.attr, a, b, arguments.length > 1)
                            },
                            removeAttr: function(a) {
                                return this.each(function() {
                                    _.removeAttr(this, a)
                                })
                            }
                        }), _.extend({
                            attr: function(a, b, c) {
                                var d, e, f = a.nodeType;
                                return a && 3 !== f && 8 !== f && 2 !== f ? typeof a.getAttribute === za ? _.prop(a, b, c) : (1 === f && _.isXMLDoc(a) || (b = b.toLowerCase(), d = _.attrHooks[b] || (_.expr.match.bool.test(b) ? eb : db)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = _.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void _.removeAttr(a, b)) : void 0
                            },
                            removeAttr: function(a, b) {
                                var c, d, e = 0,
                                    f = b && b.match(na);
                                if (f && 1 === a.nodeType)
                                    for (; c = f[e++];) d = _.propFix[c] || c, _.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
                            },
                            attrHooks: {
                                type: {
                                    set: function(a, b) {
                                        if (!Y.radioValue && "radio" === b && _.nodeName(a, "input")) {
                                            var c = a.value;
                                            return a.setAttribute("type", b), c && (a.value = c), b
                                        }
                                    }
                                }
                            }
                        }), eb = {
                            set: function(a, b, c) {
                                return b === !1 ? _.removeAttr(a, c) : a.setAttribute(c, c), c
                            }
                        }, _.each(_.expr.match.bool.source.match(/\w+/g), function(a, b) {
                            var c = fb[b] || _.find.attr;
                            fb[b] = function(a, b, d) {
                                var e, f;
                                return d || (f = fb[b], fb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, fb[b] = f), e
                            }
                        });
                        var gb = /^(?:input|select|textarea|button)$/i;
                        _.fn.extend({
                            prop: function(a, b) {
                                return qa(this, _.prop, a, b, arguments.length > 1)
                            },
                            removeProp: function(a) {
                                return this.each(function() {
                                    delete this[_.propFix[a] || a]
                                })
                            }
                        }), _.extend({
                            propFix: {
                                "for": "htmlFor",
                                "class": "className"
                            },
                            prop: function(a, b, c) {
                                var d, e, f, g = a.nodeType;
                                return a && 3 !== g && 8 !== g && 2 !== g ? (f = 1 !== g || !_.isXMLDoc(a), f && (b = _.propFix[b] || b, e = _.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]) : void 0
                            },
                            propHooks: {
                                tabIndex: {
                                    get: function(a) {
                                        return a.hasAttribute("tabindex") || gb.test(a.nodeName) || a.href ? a.tabIndex : -1
                                    }
                                }
                            }
                        }), Y.optSelected || (_.propHooks.selected = {
                            get: function(a) {
                                var b = a.parentNode;
                                return b && b.parentNode && b.parentNode.selectedIndex, null
                            }
                        }), _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                            _.propFix[this.toLowerCase()] = this
                        });
                        var hb = /[\t\r\n\f]/g;
                        _.fn.extend({
                            addClass: function(a) {
                                var b, c, d, e, f, g, h = "string" == typeof a && a,
                                    i = 0,
                                    j = this.length;
                                if (_.isFunction(a)) return this.each(function(b) {
                                    _(this).addClass(a.call(this, b, this.className))
                                });
                                if (h)
                                    for (b = (a || "").match(na) || []; j > i; i++)
                                        if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hb, " ") : " ")) {
                                            for (f = 0; e = b[f++];) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                                            g = _.trim(d), c.className !== g && (c.className = g)
                                        }
                                return this
                            },
                            removeClass: function(a) {
                                var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a,
                                    i = 0,
                                    j = this.length;
                                if (_.isFunction(a)) return this.each(function(b) {
                                    _(this).removeClass(a.call(this, b, this.className))
                                });
                                if (h)
                                    for (b = (a || "").match(na) || []; j > i; i++)
                                        if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hb, " ") : "")) {
                                            for (f = 0; e = b[f++];)
                                                for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
                                            g = a ? _.trim(d) : "", c.className !== g && (c.className = g)
                                        }
                                return this
                            },
                            toggleClass: function(a, b) {
                                var c = typeof a;
                                return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(_.isFunction(a) ? function(c) {
                                    _(this).toggleClass(a.call(this, c, this.className, b), b)
                                } : function() {
                                    if ("string" === c)
                                        for (var b, d = 0, e = _(this), f = a.match(na) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                                    else(c === za || "boolean" === c) && (this.className && ra.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : ra.get(this, "__className__") || "")
                                })
                            },
                            hasClass: function(a) {
                                for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                                    if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(hb, " ").indexOf(b) >= 0) return !0;
                                return !1
                            }
                        });
                        var ib = /\r/g;
                        _.fn.extend({
                            val: function(a) {
                                var b, c, d, e = this[0];
                                return arguments.length ? (d = _.isFunction(a), this.each(function(c) {
                                    var e;
                                    1 === this.nodeType && (e = d ? a.call(this, c, _(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : _.isArray(e) && (e = _.map(e, function(a) {
                                        return null == a ? "" : a + ""
                                    })), b = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                                })) : e ? (b = _.valHooks[e.type] || _.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ib, "") : null == c ? "" : c)) : void 0
                            }
                        }), _.extend({
                            valHooks: {
                                option: {
                                    get: function(a) {
                                        var b = _.find.attr(a, "value");
                                        return null != b ? b : _.trim(_.text(a))
                                    }
                                },
                                select: {
                                    get: function(a) {
                                        for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                                            if (c = d[i], !(!c.selected && i !== e || (Y.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && _.nodeName(c.parentNode, "optgroup"))) {
                                                if (b = _(c).val(), f) return b;
                                                g.push(b)
                                            }
                                        return g
                                    },
                                    set: function(a, b) {
                                        for (var c, d, e = a.options, f = _.makeArray(b), g = e.length; g--;) d = e[g], (d.selected = _.inArray(d.value, f) >= 0) && (c = !0);
                                        return c || (a.selectedIndex = -1), f
                                    }
                                }
                            }
                        }), _.each(["radio", "checkbox"], function() {
                            _.valHooks[this] = {
                                set: function(a, b) {
                                    return _.isArray(b) ? a.checked = _.inArray(_(a).val(), b) >= 0 : void 0
                                }
                            }, Y.checkOn || (_.valHooks[this].get = function(a) {
                                return null === a.getAttribute("value") ? "on" : a.value
                            })
                        }), _.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
                            _.fn[b] = function(a, c) {
                                return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
                            }
                        }), _.fn.extend({
                            hover: function(a, b) {
                                return this.mouseenter(a).mouseleave(b || a)
                            },
                            bind: function(a, b, c) {
                                return this.on(a, null, b, c)
                            },
                            unbind: function(a, b) {
                                return this.off(a, null, b)
                            },
                            delegate: function(a, b, c, d) {
                                return this.on(b, a, c, d)
                            },
                            undelegate: function(a, b, c) {
                                return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
                            }
                        });
                        var jb = _.now(),
                            kb = /\?/;
                        _.parseJSON = function(a) {
                            return JSON.parse(a + "")
                        }, _.parseXML = function(a) {
                            var b, c;
                            if (!a || "string" != typeof a) return null;
                            try {
                                c = new DOMParser, b = c.parseFromString(a, "text/xml")
                            } catch (d) {
                                b = void 0
                            }
                            return (!b || b.getElementsByTagName("parsererror").length) && _.error("Invalid XML: " + a), b
                        };
                        var lb = /#.*$/,
                            mb = /([?&])_=[^&]*/,
                            nb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                            ob = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
                            pb = /^(?:GET|HEAD)$/,
                            qb = /^\/\//,
                            rb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
                            sb = {},
                            tb = {},
                            ub = "*/".concat("*"),
                            vb = a.location.href,
                            wb = rb.exec(vb.toLowerCase()) || [];
                        _.extend({
                            active: 0,
                            lastModified: {},
                            etag: {},
                            ajaxSettings: {
                                url: vb,
                                type: "GET",
                                isLocal: ob.test(wb[1]),
                                global: !0,
                                processData: !0,
                                async: !0,
                                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                                accepts: {
                                    "*": ub,
                                    text: "text/plain",
                                    html: "text/html",
                                    xml: "application/xml, text/xml",
                                    json: "application/json, text/javascript"
                                },
                                contents: {
                                    xml: /xml/,
                                    html: /html/,
                                    json: /json/
                                },
                                responseFields: {
                                    xml: "responseXML",
                                    text: "responseText",
                                    json: "responseJSON"
                                },
                                converters: {
                                    "* text": String,
                                    "text html": !0,
                                    "text json": _.parseJSON,
                                    "text xml": _.parseXML
                                },
                                flatOptions: {
                                    url: !0,
                                    context: !0
                                }
                            },
                            ajaxSetup: function(a, b) {
                                return b ? L(L(a, _.ajaxSettings), b) : L(_.ajaxSettings, a)
                            },
                            ajaxPrefilter: J(sb),
                            ajaxTransport: J(tb),
                            ajax: function(a, b) {
                                function c(a, b, c, g) {
                                    var i, k, r, s, u, w = b;
                                    2 !== t && (t = 2, h && clearTimeout(h), d = void 0, f = g || "", v.readyState = a > 0 ? 4 : 0, i = a >= 200 && 300 > a || 304 === a, c && (s = M(l, v, c)), s = N(l, s, v, i), i ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"), u && (_.lastModified[e] = u), u = v.getResponseHeader("etag"), u && (_.etag[e] = u)), 204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state, k = s.data, r = s.error, i = !r)) : (r = w, (a || !w) && (w = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || w) + "", i ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]), v.statusCode(q), q = void 0, j && n.trigger(i ? "ajaxSuccess" : "ajaxError", [v, l, i ? k : r]), p.fireWith(m, [v, w]), j && (n.trigger("ajaxComplete", [v, l]), --_.active || _.event.trigger("ajaxStop")))
                                }
                                "object" == typeof a && (b = a, a = void 0), b = b || {};
                                var d, e, f, g, h, i, j, k, l = _.ajaxSetup({}, b),
                                    m = l.context || l,
                                    n = l.context && (m.nodeType || m.jquery) ? _(m) : _.event,
                                    o = _.Deferred(),
                                    p = _.Callbacks("once memory"),
                                    q = l.statusCode || {},
                                    r = {},
                                    s = {},
                                    t = 0,
                                    u = "canceled",
                                    v = {
                                        readyState: 0,
                                        getResponseHeader: function(a) {
                                            var b;
                                            if (2 === t) {
                                                if (!g)
                                                    for (g = {}; b = nb.exec(f);) g[b[1].toLowerCase()] = b[2];
                                                b = g[a.toLowerCase()]
                                            }
                                            return null == b ? null : b
                                        },
                                        getAllResponseHeaders: function() {
                                            return 2 === t ? f : null
                                        },
                                        setRequestHeader: function(a, b) {
                                            var c = a.toLowerCase();
                                            return t || (a = s[c] = s[c] || a, r[a] = b), this
                                        },
                                        overrideMimeType: function(a) {
                                            return t || (l.mimeType = a), this
                                        },
                                        statusCode: function(a) {
                                            var b;
                                            if (a)
                                                if (2 > t)
                                                    for (b in a) q[b] = [q[b], a[b]];
                                                else v.always(a[v.status]);
                                            return this
                                        },
                                        abort: function(a) {
                                            var b = a || u;
                                            return d && d.abort(b), c(0, b), this
                                        }
                                    };
                                if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, l.url = ((a || l.url || vb) + "").replace(lb, "").replace(qb, wb[1] + "//"), l.type = b.method || b.type || l.method || l.type, l.dataTypes = _.trim(l.dataType || "*").toLowerCase().match(na) || [""], null == l.crossDomain && (i = rb.exec(l.url.toLowerCase()), l.crossDomain = !(!i || i[1] === wb[1] && i[2] === wb[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (wb[3] || ("http:" === wb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = _.param(l.data, l.traditional)), K(sb, l, b, v), 2 === t) return v;
                                j = _.event && l.global, j && 0 === _.active++ && _.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !pb.test(l.type), e = l.url, l.hasContent || (l.data && (e = l.url += (kb.test(e) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = mb.test(e) ? e.replace(mb, "$1_=" + jb++) : e + (kb.test(e) ? "&" : "?") + "_=" + jb++)), l.ifModified && (_.lastModified[e] && v.setRequestHeader("If-Modified-Since", _.lastModified[e]), _.etag[e] && v.setRequestHeader("If-None-Match", _.etag[e])), (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType), v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + ub + "; q=0.01" : "") : l.accepts["*"]);
                                for (k in l.headers) v.setRequestHeader(k, l.headers[k]);
                                if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t)) return v.abort();
                                u = "abort";
                                for (k in {
                                        success: 1,
                                        error: 1,
                                        complete: 1
                                    }) v[k](l[k]);
                                if (d = K(tb, l, b, v)) {
                                    v.readyState = 1, j && n.trigger("ajaxSend", [v, l]), l.async && l.timeout > 0 && (h = setTimeout(function() {
                                        v.abort("timeout")
                                    }, l.timeout));
                                    try {
                                        t = 1, d.send(r, c)
                                    } catch (w) {
                                        if (!(2 > t)) throw w;
                                        c(-1, w)
                                    }
                                } else c(-1, "No Transport");
                                return v
                            },
                            getJSON: function(a, b, c) {
                                return _.get(a, b, c, "json")
                            },
                            getScript: function(a, b) {
                                return _.get(a, void 0, b, "script")
                            }
                        }), _.each(["get", "post"], function(a, b) {
                            _[b] = function(a, c, d, e) {
                                return _.isFunction(c) && (e = e || d, d = c, c = void 0), _.ajax({
                                    url: a,
                                    type: b,
                                    dataType: e,
                                    data: c,
                                    success: d
                                })
                            }
                        }), _._evalUrl = function(a) {
                            return _.ajax({
                                url: a,
                                type: "GET",
                                dataType: "script",
                                async: !1,
                                global: !1,
                                "throws": !0
                            })
                        }, _.fn.extend({
                            wrapAll: function(a) {
                                var b;
                                return _.isFunction(a) ? this.each(function(b) {
                                    _(this).wrapAll(a.call(this, b))
                                }) : (this[0] && (b = _(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                                    for (var a = this; a.firstElementChild;) a = a.firstElementChild;
                                    return a
                                }).append(this)), this)
                            },
                            wrapInner: function(a) {
                                return this.each(_.isFunction(a) ? function(b) {
                                    _(this).wrapInner(a.call(this, b))
                                } : function() {
                                    var b = _(this),
                                        c = b.contents();
                                    c.length ? c.wrapAll(a) : b.append(a)
                                })
                            },
                            wrap: function(a) {
                                var b = _.isFunction(a);
                                return this.each(function(c) {
                                    _(this).wrapAll(b ? a.call(this, c) : a)
                                })
                            },
                            unwrap: function() {
                                return this.parent().each(function() {
                                    _.nodeName(this, "body") || _(this).replaceWith(this.childNodes)
                                }).end()
                            }
                        }), _.expr.filters.hidden = function(a) {
                            return a.offsetWidth <= 0 && a.offsetHeight <= 0
                        }, _.expr.filters.visible = function(a) {
                            return !_.expr.filters.hidden(a)
                        };
                        var xb = /%20/g,
                            yb = /\[\]$/,
                            zb = /\r?\n/g,
                            Ab = /^(?:submit|button|image|reset|file)$/i,
                            Bb = /^(?:input|select|textarea|keygen)/i;
                        _.param = function(a, b) {
                            var c, d = [],
                                e = function(a, b) {
                                    b = _.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
                                };
                            if (void 0 === b && (b = _.ajaxSettings && _.ajaxSettings.traditional), _.isArray(a) || a.jquery && !_.isPlainObject(a)) _.each(a, function() {
                                e(this.name, this.value)
                            });
                            else
                                for (c in a) O(c, a[c], b, e);
                            return d.join("&").replace(xb, "+")
                        }, _.fn.extend({
                            serialize: function() {
                                return _.param(this.serializeArray())
                            },
                            serializeArray: function() {
                                return this.map(function() {
                                    var a = _.prop(this, "elements");
                                    return a ? _.makeArray(a) : this
                                }).filter(function() {
                                    var a = this.type;
                                    return this.name && !_(this).is(":disabled") && Bb.test(this.nodeName) && !Ab.test(a) && (this.checked || !ya.test(a))
                                }).map(function(a, b) {
                                    var c = _(this).val();
                                    return null == c ? null : _.isArray(c) ? _.map(c, function(a) {
                                        return {
                                            name: b.name,
                                            value: a.replace(zb, "\r\n")
                                        }
                                    }) : {
                                        name: b.name,
                                        value: c.replace(zb, "\r\n")
                                    }
                                }).get()
                            }
                        }), _.ajaxSettings.xhr = function() {
                            try {
                                return new XMLHttpRequest
                            } catch (a) {}
                        };
                        var Cb = 0,
                            Db = {},
                            Eb = {
                                0: 200,
                                1223: 204
                            },
                            Fb = _.ajaxSettings.xhr();
                        a.attachEvent && a.attachEvent("onunload", function() {
                            for (var a in Db) Db[a]()
                        }), Y.cors = !!Fb && "withCredentials" in Fb, Y.ajax = Fb = !!Fb, _.ajaxTransport(function(a) {
                            var b;
                            return Y.cors || Fb && !a.crossDomain ? {
                                send: function(c, d) {
                                    var e, f = a.xhr(),
                                        g = ++Cb;
                                    if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                                        for (e in a.xhrFields) f[e] = a.xhrFields[e];
                                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                                    for (e in c) f.setRequestHeader(e, c[e]);
                                    b = function(a) {
                                        return function() {
                                            b && (delete Db[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Eb[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
                                                text: f.responseText
                                            } : void 0, f.getAllResponseHeaders()))
                                        }
                                    }, f.onload = b(), f.onerror = b("error"), b = Db[g] = b("abort");
                                    try {
                                        f.send(a.hasContent && a.data || null)
                                    } catch (h) {
                                        if (b) throw h
                                    }
                                },
                                abort: function() {
                                    b && b()
                                }
                            } : void 0
                        }), _.ajaxSetup({
                            accepts: {
                                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                            },
                            contents: {
                                script: /(?:java|ecma)script/
                            },
                            converters: {
                                "text script": function(a) {
                                    return _.globalEval(a), a
                                }
                            }
                        }), _.ajaxPrefilter("script", function(a) {
                            void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
                        }), _.ajaxTransport("script", function(a) {
                            if (a.crossDomain) {
                                var b, c;
                                return {
                                    send: function(d, e) {
                                        b = _("<script>").prop({
                                            async: !0,
                                            charset: a.scriptCharset,
                                            src: a.url
                                        }).on("load error", c = function(a) {
                                            b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                                        }), Z.head.appendChild(b[0])
                                    },
                                    abort: function() {
                                        c && c()
                                    }
                                }
                            }
                        });
                        var Gb = [],
                            Hb = /(=)\?(?=&|$)|\?\?/;
                        _.ajaxSetup({
                            jsonp: "callback",
                            jsonpCallback: function() {
                                var a = Gb.pop() || _.expando + "_" + jb++;
                                return this[a] = !0, a
                            }
                        }), _.ajaxPrefilter("json jsonp", function(b, c, d) {
                            var e, f, g, h = b.jsonp !== !1 && (Hb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Hb.test(b.data) && "data");
                            return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = _.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Hb, "$1" + e) : b.jsonp !== !1 && (b.url += (kb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
                                return g || _.error(e + " was not called"), g[0]
                            }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
                                g = arguments
                            }, d.always(function() {
                                a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Gb.push(e)), g && _.isFunction(f) && f(g[0]), g = f = void 0
                            }), "script") : void 0
                        }), _.parseHTML = function(a, b, c) {
                            if (!a || "string" != typeof a) return null;
                            "boolean" == typeof b && (c = b, b = !1), b = b || Z;
                            var d = ga.exec(a),
                                e = !c && [];
                            return d ? [b.createElement(d[1])] : (d = _.buildFragment([a], b, e), e && e.length && _(e).remove(), _.merge([], d.childNodes))
                        };
                        var Ib = _.fn.load;
                        _.fn.load = function(a, b, c) {
                            if ("string" != typeof a && Ib) return Ib.apply(this, arguments);
                            var d, e, f, g = this,
                                h = a.indexOf(" ");
                            return h >= 0 && (d = _.trim(a.slice(h)), a = a.slice(0, h)), _.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && _.ajax({
                                url: a,
                                type: e,
                                dataType: "html",
                                data: b
                            }).done(function(a) {
                                f = arguments, g.html(d ? _("<div>").append(_.parseHTML(a)).find(d) : a)
                            }).complete(c && function(a, b) {
                                g.each(c, f || [a.responseText, b, a])
                            }), this
                        }, _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
                            _.fn[b] = function(a) {
                                return this.on(b, a)
                            }
                        }), _.expr.filters.animated = function(a) {
                            return _.grep(_.timers, function(b) {
                                return a === b.elem
                            }).length
                        };
                        var Jb = a.document.documentElement;
                        _.offset = {
                            setOffset: function(a, b, c) {
                                var d, e, f, g, h, i, j, k = _.css(a, "position"),
                                    l = _(a),
                                    m = {};
                                "static" === k && (a.style.position = "relative"), h = l.offset(), f = _.css(a, "top"), i = _.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), _.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
                            }
                        }, _.fn.extend({
                            offset: function(a) {
                                if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                                    _.offset.setOffset(this, a, b)
                                });
                                var b, c, d = this[0],
                                    e = {
                                        top: 0,
                                        left: 0
                                    },
                                    f = d && d.ownerDocument;
                                return f ? (b = f.documentElement, _.contains(b, d) ? (typeof d.getBoundingClientRect !== za && (e = d.getBoundingClientRect()), c = P(f), {
                                    top: e.top + c.pageYOffset - b.clientTop,
                                    left: e.left + c.pageXOffset - b.clientLeft
                                }) : e) : void 0
                            },
                            position: function() {
                                if (this[0]) {
                                    var a, b, c = this[0],
                                        d = {
                                            top: 0,
                                            left: 0
                                        };
                                    return "fixed" === _.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), _.nodeName(a[0], "html") || (d = a.offset()), d.top += _.css(a[0], "borderTopWidth", !0), d.left += _.css(a[0], "borderLeftWidth", !0)), {
                                        top: b.top - d.top - _.css(c, "marginTop", !0),
                                        left: b.left - d.left - _.css(c, "marginLeft", !0)
                                    }
                                }
                            },
                            offsetParent: function() {
                                return this.map(function() {
                                    for (var a = this.offsetParent || Jb; a && !_.nodeName(a, "html") && "static" === _.css(a, "position");) a = a.offsetParent;
                                    return a || Jb
                                })
                            }
                        }), _.each({
                            scrollLeft: "pageXOffset",
                            scrollTop: "pageYOffset"
                        }, function(b, c) {
                            var d = "pageYOffset" === c;
                            _.fn[b] = function(e) {
                                return qa(this, function(b, e, f) {
                                    var g = P(b);
                                    return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
                                }, b, e, arguments.length, null)
                            }
                        }), _.each(["top", "left"], function(a, b) {
                            _.cssHooks[b] = w(Y.pixelPosition, function(a, c) {
                                return c ? (c = v(a, b), Qa.test(c) ? _(a).position()[b] + "px" : c) : void 0
                            })
                        }), _.each({
                            Height: "height",
                            Width: "width"
                        }, function(a, b) {
                            _.each({
                                padding: "inner" + a,
                                content: b,
                                "": "outer" + a
                            }, function(c, d) {
                                _.fn[d] = function(d, e) {
                                    var f = arguments.length && (c || "boolean" != typeof d),
                                        g = c || (d === !0 || e === !0 ? "margin" : "border");
                                    return qa(this, function(b, c, d) {
                                        var e;
                                        return _.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? _.css(b, c, g) : _.style(b, c, d, g)
                                    }, b, f ? d : void 0, f, null)
                                }
                            })
                        }), _.fn.size = function() {
                            return this.length
                        }, _.fn.andSelf = _.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
                            return _
                        });
                        var Kb = a.jQuery,
                            Lb = a.$;
                        return _.noConflict = function(b) {
                            return a.$ === _ && (a.$ = Lb), b && a.jQuery === _ && (a.jQuery = Kb), _
                        }, typeof b === za && (a.jQuery = a.$ = _), _
                    }),
                    ! function(a) {
                        if ("function" == typeof define && define.amd && define("uikit", function() {
                                var b = window.UIkit || a(window, window.jQuery, window.document);
                                return b.load = function(a, c, d, e) {
                                    var f, g = a.split(","),
                                        h = [],
                                        i = (e.config && e.config.uikit && e.config.uikit.base ? e.config.uikit.base : "").replace(/\/+$/g, "");
                                    if (!i) throw new Error("Please define base path to UIkit in the requirejs config.");
                                    for (f = 0; f < g.length; f += 1) {
                                        var j = g[f].replace(/\./g, "/");
                                        h.push(i + "/components/" + j)
                                    }
                                    c(h, function() {
                                        d(b)
                                    })
                                }, b
                            }), !window.jQuery) throw new Error("UIkit requires jQuery");
                        window && window.jQuery && a(window, window.jQuery, window.document)
                    }(function(a, b, c) {
                        "use strict";
                        var d = {},
                            e = a.UIkit ? Object.create(a.UIkit) : void 0;
                        if (d.version = "2.23.0", d.noConflict = function() {
                                return e && (a.UIkit = e, b.UIkit = e, b.fn.uk = e.fn), d
                            }, d.prefix = function(a) {
                                return a
                            }, d.$ = b, d.$doc = d.$(document), d.$win = d.$(window), d.$html = d.$("html"), d.support = {}, d.support.transition = function() {
                                var a = function() {
                                    var a, b = c.body || c.documentElement,
                                        d = {
                                            WebkitTransition: "webkitTransitionEnd",
                                            MozTransition: "transitionend",
                                            OTransition: "oTransitionEnd otransitionend",
                                            transition: "transitionend"
                                        };
                                    for (a in d)
                                        if (void 0 !== b.style[a]) return d[a]
                                }();
                                return a && {
                                    end: a
                                }
                            }(), d.support.animation = function() {
                                var a = function() {
                                    var a, b = c.body || c.documentElement,
                                        d = {
                                            WebkitAnimation: "webkitAnimationEnd",
                                            MozAnimation: "animationend",
                                            OAnimation: "oAnimationEnd oanimationend",
                                            animation: "animationend"
                                        };
                                    for (a in d)
                                        if (void 0 !== b.style[a]) return d[a]
                                }();
                                return a && {
                                    end: a
                                }
                            }(), function() {
                                Date.now = Date.now || function() {
                                    return (new Date).getTime()
                                };
                                for (var a = ["webkit", "moz"], b = 0; b < a.length && !window.requestAnimationFrame; ++b) {
                                    var c = a[b];
                                    window.requestAnimationFrame = window[c + "RequestAnimationFrame"], window.cancelAnimationFrame = window[c + "CancelAnimationFrame"] || window[c + "CancelRequestAnimationFrame"]
                                }
                                if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
                                    var d = 0;
                                    window.requestAnimationFrame = function(a) {
                                        var b = Date.now(),
                                            c = Math.max(d + 16, b);
                                        return setTimeout(function() {
                                            a(d = c)
                                        }, c - b)
                                    }, window.cancelAnimationFrame = clearTimeout
                                }
                            }(), d.support.touch = "ontouchstart" in document || a.DocumentTouch && document instanceof a.DocumentTouch || a.navigator.msPointerEnabled && a.navigator.msMaxTouchPoints > 0 || a.navigator.pointerEnabled && a.navigator.maxTouchPoints > 0 || !1, d.support.mutationobserver = a.MutationObserver || a.WebKitMutationObserver || null, d.Utils = {}, d.Utils.isFullscreen = function() {
                                return document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.fullscreenElement || !1
                            }, d.Utils.str2json = function(a, b) {
                                try {
                                    return b ? JSON.parse(a.replace(/([\$\w]+)\s*:/g, function(a, b) {
                                        return '"' + b + '":'
                                    }).replace(/'([^']+)'/g, function(a, b) {
                                        return '"' + b + '"'
                                    })) : new Function("", "var json = " + a + "; return JSON.parse(JSON.stringify(json));")()
                                } catch (c) {
                                    return !1
                                }
                            }, d.Utils.debounce = function(a, b, c) {
                                var d;
                                return function() {
                                    var e = this,
                                        f = arguments,
                                        g = function() {
                                            d = null, c || a.apply(e, f)
                                        },
                                        h = c && !d;
                                    clearTimeout(d), d = setTimeout(g, b), h && a.apply(e, f)
                                }
                            }, d.Utils.removeCssRules = function(a) {
                                var b, c, d, e, f, g, h, i, j, k;
                                a && setTimeout(function() {
                                    try {
                                        for (k = document.styleSheets, e = 0, h = k.length; h > e; e++) {
                                            for (d = k[e], c = [], d.cssRules = d.cssRules, b = f = 0, i = d.cssRules.length; i > f; b = ++f) d.cssRules[b].type === CSSRule.STYLE_RULE && a.test(d.cssRules[b].selectorText) && c.unshift(b);
                                            for (g = 0, j = c.length; j > g; g++) d.deleteRule(c[g])
                                        }
                                    } catch (l) {}
                                }, 0)
                            }, d.Utils.isInView = function(a, c) {
                                var e = b(a);
                                if (!e.is(":visible")) return !1;
                                var f = d.$win.scrollLeft(),
                                    g = d.$win.scrollTop(),
                                    h = e.offset(),
                                    i = h.left,
                                    j = h.top;
                                return c = b.extend({
                                    topoffset: 0,
                                    leftoffset: 0
                                }, c), j + e.height() >= g && j - c.topoffset <= g + d.$win.height() && i + e.width() >= f && i - c.leftoffset <= f + d.$win.width() ? !0 : !1
                            }, d.Utils.checkDisplay = function(a, c) {
                                var e = d.$("[data-uk-margin], [data-uk-grid-match], [data-uk-grid-margin], [data-uk-check-display]", a || document);
                                return a && !e.length && (e = b(a)), e.trigger("display.uk.check"), c && ("string" != typeof c && (c = '[class*="uk-animation-"]'), e.find(c).each(function() {
                                    var a = d.$(this),
                                        b = a.attr("class"),
                                        c = b.match(/uk\-animation\-(.+)/);
                                    a.removeClass(c[0]).width(), a.addClass(c[0])
                                })), e
                            }, d.Utils.options = function(a) {
                                if (b.isPlainObject(a)) return a;
                                var c = a ? a.indexOf("{") : -1,
                                    e = {};
                                if (-1 != c) try {
                                    e = d.Utils.str2json(a.substr(c))
                                } catch (f) {}
                                return e
                            }, d.Utils.animate = function(a, c) {
                                var e = b.Deferred();
                                return a = d.$(a), c = c, a.css("display", "none").addClass(c).one(d.support.animation.end, function() {
                                    a.removeClass(c), e.resolve()
                                }).width(), a.css("display", ""), e.promise()
                            }, d.Utils.uid = function(a) {
                                return (a || "id") + (new Date).getTime() + "RAND" + Math.ceil(1e5 * Math.random())
                            }, d.Utils.template = function(a, b) {
                                for (var c, d, e, f, g = a.replace(/\n/g, "\\n").replace(/\{\{\{\s*(.+?)\s*\}\}\}/g, "{{!$1}}").split(/(\{\{\s*(.+?)\s*\}\})/g), h = 0, i = [], j = 0; h < g.length;) {
                                    if (c = g[h], c.match(/\{\{\s*(.+?)\s*\}\}/)) switch (h += 1, c = g[h], d = c[0], e = c.substring(c.match(/^(\^|\#|\!|\~|\:)/) ? 1 : 0), d) {
                                        case "~":
                                            i.push("for(var $i=0;$i<" + e + ".length;$i++) { var $item = " + e + "[$i];"), j++;
                                            break;
                                        case ":":
                                            i.push("for(var $key in " + e + ") { var $val = " + e + "[$key];"), j++;
                                            break;
                                        case "#":
                                            i.push("if(" + e + ") {"), j++;
                                            break;
                                        case "^":
                                            i.push("if(!" + e + ") {"), j++;
                                            break;
                                        case "/":
                                            i.push("}"), j--;
                                            break;
                                        case "!":
                                            i.push("__ret.push(" + e + ");");
                                            break;
                                        default:
                                            i.push("__ret.push(escape(" + e + "));")
                                    } else i.push("__ret.push('" + c.replace(/\'/g, "\\'") + "');");
                                    h += 1
                                }
                                return f = new Function("$data", ["var __ret = [];", "try {", "with($data){", j ? '__ret = ["Not all blocks are closed correctly."]' : i.join(""), "};", "}catch(e){__ret = [e.message];}", 'return __ret.join("").replace(/\\n\\n/g, "\\n");', "function escape(html) { return String(html).replace(/&/g, '&amp;').replace(/\"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');}"].join("\n")), b ? f(b) : f
                            }, d.Utils.events = {}, d.Utils.events.click = d.support.touch ? "tap" : "click", a.UIkit = d, d.fn = function(a, c) {
                                var e = arguments,
                                    f = a.match(/^([a-z\-]+)(?:\.([a-z]+))?/i),
                                    g = f[1],
                                    h = f[2];
                                return d[g] ? this.each(function() {
                                    var a = b(this),
                                        f = a.data(g);
                                    f || a.data(g, f = d[g](this, h ? void 0 : c)), h && f[h].apply(f, Array.prototype.slice.call(e, 1))
                                }) : (b.error("UIkit component [" + g + "] does not exist."), this)
                            }, b.UIkit = d, b.fn.uk = d.fn, d.langdirection = "rtl" == d.$html.attr("dir") ? "right" : "left", d.components = {}, d.component = function(a, c) {
                                var e = function(c, f) {
                                    var g = this;
                                    return this.UIkit = d, this.element = c ? d.$(c) : null, this.options = b.extend(!0, {}, this.defaults, f), this.plugins = {}, this.element && this.element.data(a, this), this.init(), (this.options.plugins.length ? this.options.plugins : Object.keys(e.plugins)).forEach(function(a) {
                                        e.plugins[a].init && (e.plugins[a].init(g), g.plugins[a] = !0)
                                    }), this.trigger("init.uk.component", [a, this]), this
                                };
                                return e.plugins = {}, b.extend(!0, e.prototype, {
                                    defaults: {
                                        plugins: []
                                    },
                                    boot: function() {},
                                    init: function() {},
                                    on: function(a, b, c) {
                                        return d.$(this.element || this).on(a, b, c)
                                    },
                                    one: function(a, b, c) {
                                        return d.$(this.element || this).one(a, b, c)
                                    },
                                    off: function(a) {
                                        return d.$(this.element || this).off(a)
                                    },
                                    trigger: function(a, b) {
                                        return d.$(this.element || this).trigger(a, b)
                                    },
                                    find: function(a) {
                                        return d.$(this.element ? this.element : []).find(a)
                                    },
                                    proxy: function(a, b) {
                                        var c = this;
                                        b.split(" ").forEach(function(b) {
                                            c[b] || (c[b] = function() {
                                                return a[b].apply(a, arguments)
                                            })
                                        })
                                    },
                                    mixin: function(a, b) {
                                        var c = this;
                                        b.split(" ").forEach(function(b) {
                                            c[b] || (c[b] = a[b].bind(c))
                                        })
                                    },
                                    option: function() {
                                        return 1 == arguments.length ? this.options[arguments[0]] || void 0 : void(2 == arguments.length && (this.options[arguments[0]] = arguments[1]))
                                    }
                                }, c), this.components[a] = e, this[a] = function() {
                                    var c, e;
                                    if (arguments.length) switch (arguments.length) {
                                        case 1:
                                            "string" == typeof arguments[0] || arguments[0].nodeType || arguments[0] instanceof jQuery ? c = b(arguments[0]) : e = arguments[0];
                                            break;
                                        case 2:
                                            c = b(arguments[0]), e = arguments[1]
                                    }
                                    return c && c.data(a) ? c.data(a) : new d.components[a](c, e)
                                }, d.domready && d.component.boot(a), e
                            }, d.plugin = function(a, b, c) {
                                this.components[a].plugins[b] = c
                            }, d.component.boot = function(a) {
                                d.components[a].prototype && d.components[a].prototype.boot && !d.components[a].booted && (d.components[a].prototype.boot.apply(d, []), d.components[a].booted = !0)
                            }, d.component.bootComponents = function() {
                                for (var a in d.components) d.component.boot(a)
                            }, d.domObservers = [], d.domready = !1, d.ready = function(a) {
                                d.domObservers.push(a), d.domready && a(document)
                            }, d.on = function(a, b, c) {
                                return a && a.indexOf("ready.uk.dom") > -1 && d.domready && b.apply(d.$doc), d.$doc.on(a, b, c)
                            }, d.one = function(a, b, c) {
                                return a && a.indexOf("ready.uk.dom") > -1 && d.domready ? (b.apply(d.$doc), d.$doc) : d.$doc.one(a, b, c)
                            }, d.trigger = function(a, b) {
                                return d.$doc.trigger(a, b)
                            }, d.domObserve = function(a, b) {
                                d.support.mutationobserver && (b = b || function() {}, d.$(a).each(function() {
                                    var a = this,
                                        c = d.$(a);
                                    if (!c.data("observer")) try {
                                        var e = new d.support.mutationobserver(d.Utils.debounce(function() {
                                            b.apply(a, []), c.trigger("changed.uk.dom")
                                        }, 50));
                                        e.observe(a, {
                                            childList: !0,
                                            subtree: !0
                                        }), c.data("observer", e)
                                    } catch (f) {}
                                }))
                            }, d.init = function(a) {
                                a = a || document, d.domObservers.forEach(function(b) {
                                    b(a)
                                })
                            }, d.on("domready.uk.dom", function() {
                                d.init(), d.domready && d.Utils.checkDisplay()
                            }), b(function() {
                                d.$body = d.$("body"), d.ready(function() {
                                    d.domObserve("[data-uk-observe]")
                                }), d.on("changed.uk.dom", function(a) {
                                    d.init(a.target), d.Utils.checkDisplay(a.target)
                                }), d.trigger("beforeready.uk.dom"), d.component.bootComponents(), requestAnimationFrame(function() {
                                    var a, b = {
                                            x: window.pageXOffset,
                                            y: window.pageYOffset
                                        },
                                        c = function() {
                                            (b.x != window.pageXOffset || b.y != window.pageYOffset) && (a = {
                                                x: 0,
                                                y: 0
                                            }, window.pageXOffset != b.x && (a.x = window.pageXOffset > b.x ? 1 : -1), window.pageYOffset != b.y && (a.y = window.pageYOffset > b.y ? 1 : -1), b = {
                                                dir: a,
                                                x: window.pageXOffset,
                                                y: window.pageYOffset
                                            }, d.$doc.trigger("scrolling.uk.document", [b])), requestAnimationFrame(c)
                                        };
                                    return d.support.touch && d.$html.on("touchmove touchend MSPointerMove MSPointerUp pointermove pointerup", c), (b.x || b.y) && c(), c
                                }()), d.trigger("domready.uk.dom"), d.support.touch && navigator.userAgent.match(/(iPad|iPhone|iPod)/g) && d.$win.on("load orientationchange resize", d.Utils.debounce(function() {
                                    var a = function() {
                                        return b(".uk-height-viewport").css("height", window.innerHeight), a
                                    };
                                    return a()
                                }(), 100)), d.trigger("afterready.uk.dom"), d.domready = !0
                            }), d.$html.addClass(d.support.touch ? "uk-touch" : "uk-notouch"), d.support.touch) {
                            var f, g = !1,
                                h = "uk-hover",
                                i = ".uk-overlay, .uk-overlay-hover, .uk-overlay-toggle, .uk-animation-hover, .uk-has-hover";
                            d.$html.on("mouseenter touchstart MSPointerDown pointerdown", i, function() {
                                g && b("." + h).removeClass(h), g = b(this).addClass(h)
                            }).on("mouseleave touchend MSPointerUp pointerup", function(a) {
                                f = b(a.target).parents(i), g && g.not(f).removeClass(h)
                            })
                        }
                        return d
                    }),
                    function(a) {
                        function b(a, b, c, d) {
                            return Math.abs(a - b) >= Math.abs(c - d) ? a - b > 0 ? "Left" : "Right" : c - d > 0 ? "Up" : "Down"
                        }

                        function c() {
                            j = null, l.last && (void 0 !== l.el && l.el.trigger("longTap"), l = {})
                        }

                        function d() {
                            j && clearTimeout(j), j = null
                        }

                        function e() {
                            g && clearTimeout(g), h && clearTimeout(h), i && clearTimeout(i), j && clearTimeout(j), g = h = i = j = null, l = {}
                        }

                        function f(a) {
                            return a.pointerType == a.MSPOINTER_TYPE_TOUCH && a.isPrimary
                        }
                        if (!a.fn.swipeLeft) {
                            var g, h, i, j, k, l = {},
                                m = 750;
                            a(function() {
                                var n, o, p, q = 0,
                                    r = 0;
                                "MSGesture" in window && (k = new MSGesture, k.target = document.body), a(document).on("MSGestureEnd gestureend", function(a) {
                                    var b = a.originalEvent.velocityX > 1 ? "Right" : a.originalEvent.velocityX < -1 ? "Left" : a.originalEvent.velocityY > 1 ? "Down" : a.originalEvent.velocityY < -1 ? "Up" : null;
                                    b && void 0 !== l.el && (l.el.trigger("swipe"), l.el.trigger("swipe" + b))
                                }).on("touchstart MSPointerDown pointerdown", function(b) {
                                    ("MSPointerDown" != b.type || f(b.originalEvent)) && (p = "MSPointerDown" == b.type || "pointerdown" == b.type ? b : b.originalEvent.touches[0], n = Date.now(), o = n - (l.last || n), l.el = a("tagName" in p.target ? p.target : p.target.parentNode), g && clearTimeout(g), l.x1 = p.pageX, l.y1 = p.pageY, o > 0 && 250 >= o && (l.isDoubleTap = !0), l.last = n, j = setTimeout(c, m), !k || "MSPointerDown" != b.type && "pointerdown" != b.type && "touchstart" != b.type || k.addPointer(b.originalEvent.pointerId))
                                }).on("touchmove MSPointerMove pointermove", function(a) {
                                    ("MSPointerMove" != a.type || f(a.originalEvent)) && (p = "MSPointerMove" == a.type || "pointermove" == a.type ? a : a.originalEvent.touches[0], d(), l.x2 = p.pageX, l.y2 = p.pageY, q += Math.abs(l.x1 - l.x2), r += Math.abs(l.y1 - l.y2))
                                }).on("touchend MSPointerUp pointerup", function(c) {
                                    ("MSPointerUp" != c.type || f(c.originalEvent)) && (d(), l.x2 && Math.abs(l.x1 - l.x2) > 30 || l.y2 && Math.abs(l.y1 - l.y2) > 30 ? i = setTimeout(function() {
                                        void 0 !== l.el && (l.el.trigger("swipe"), l.el.trigger("swipe" + b(l.x1, l.x2, l.y1, l.y2))), l = {}
                                    }, 0) : "last" in l && (isNaN(q) || 30 > q && 30 > r ? h = setTimeout(function() {
                                        var b = a.Event("tap");
                                        b.cancelTouch = e, void 0 !== l.el && l.el.trigger(b), l.isDoubleTap ? (void 0 !== l.el && l.el.trigger("doubleTap"), l = {}) : g = setTimeout(function() {
                                            g = null, void 0 !== l.el && l.el.trigger("singleTap"), l = {}
                                        }, 250)
                                    }, 0) : l = {}, q = r = 0))
                                }).on("touchcancel MSPointerCancel", e), a(window).on("scroll", e)
                            }), ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function(b) {
                                a.fn[b] = function(c) {
                                    return a(this).on(b, c)
                                }
                            })
                        }
                    }(jQuery),
                    function(a) {
                        "use strict";
                        var b = [];
                        a.component("stackMargin", {
                                defaults: {
                                    cls: "uk-margin-small-top"
                                },
                                boot: function() {
                                    a.ready(function(b) {
                                        a.$("[data-uk-margin]", b).each(function() {
                                            var b, c = a.$(this);
                                            c.data("stackMargin") || (b = a.stackMargin(c, a.Utils.options(c.attr("data-uk-margin"))))
                                        })
                                    })
                                },
                                init: function() {
                                    var c = this;
                                    this.columns = [], a.$win.on("resize orientationchange", function() {
                                        var b = function() {
                                            c.process()
                                        };
                                        return a.$(function() {
                                            b(), a.$win.on("load", b)
                                        }), a.Utils.debounce(b, 20)
                                    }()), a.$html.on("changed.uk.dom", function() {
                                        c.process()
                                    }), this.on("display.uk.check", function() {
                                        this.element.is(":visible") && this.process()
                                    }.bind(this)), b.push(this)
                                },
                                process: function() {
                                    return this.columns = this.element.children(), a.Utils.stackMargin(this.columns, this.options), this
                                },
                                revert: function() {
                                    return this.columns.removeClass(this.options.cls), this
                                }
                            }),
                            function() {
                                var b = [],
                                    c = function(a) {
                                        if (a.is(":visible")) {
                                            var b = a.parent().width(),
                                                c = a.data("width"),
                                                d = b / c,
                                                e = Math.floor(d * a.data("height"));
                                            a.css({
                                                height: c > b ? e : a.data("height")
                                            })
                                        }
                                    };
                                a.component("responsiveElement", {
                                    defaults: {},
                                    boot: function() {
                                        a.ready(function(b) {
                                            a.$("iframe.uk-responsive-width, [data-uk-responsive]", b).each(function() {
                                                var b, c = a.$(this);
                                                c.data("responsiveIframe") || (b = a.responsiveElement(c, {}))
                                            })
                                        })
                                    },
                                    init: function() {
                                        var a = this.element;
                                        a.attr("width") && a.attr("height") && (a.data({
                                            width: a.attr("width"),
                                            height: a.attr("height")
                                        }).on("display.uk.check", function() {
                                            c(a)
                                        }), c(a), b.push(a))
                                    }
                                }), a.$win.on("resize load", a.Utils.debounce(function() {
                                    b.forEach(function(a) {
                                        c(a)
                                    })
                                }, 15))
                            }(), a.Utils.stackMargin = function(b, c) {
                                c = a.$.extend({
                                    cls: "uk-margin-small-top"
                                }, c), c.cls = c.cls, b = a.$(b).removeClass(c.cls);
                                var d = !1,
                                    e = b.filter(":visible:first"),
                                    f = e.length ? e.position().top + e.outerHeight() - 1 : !1;
                                f !== !1 && b.each(function() {
                                    var b = a.$(this);
                                    b.is(":visible") && (d ? b.addClass(c.cls) : b.position().top >= f && (d = b.addClass(c.cls)))
                                })
                            }, a.Utils.matchHeights = function(b, c) {
                                b = a.$(b).css("min-height", ""), c = a.$.extend({
                                    row: !0
                                }, c);
                                var d = function(b) {
                                    if (!(b.length < 2)) {
                                        var c = 0;
                                        b.each(function() {
                                            c = Math.max(c, a.$(this).outerHeight())
                                        }).each(function() {
                                            var b = a.$(this),
                                                d = c - ("border-box" == b.css("box-sizing") ? 0 : b.outerHeight() - b.height());
                                            b.css("min-height", d + "px")
                                        })
                                    }
                                };
                                c.row ? (b.first().width(), setTimeout(function() {
                                    var c = !1,
                                        e = [];
                                    b.each(function() {
                                        var b = a.$(this),
                                            f = b.offset().top;
                                        f != c && e.length && (d(a.$(e)), e = [], f = b.offset().top), e.push(b), c = f
                                    }), e.length && d(a.$(e))
                                }, 0)) : d(b)
                            },
                            function(b) {
                                a.Utils.inlineSvg = function(c, d) {
                                    a.$(c || 'img[src$=".svg"]', d || document).each(function() {
                                        var c = a.$(this),
                                            d = c.attr("src");
                                        if (!b[d]) {
                                            var e = a.$.Deferred();
                                            a.$.get(d, {
                                                nc: Math.random()
                                            }, function(b) {
                                                e.resolve(a.$(b).find("svg"))
                                            }), b[d] = e.promise()
                                        }
                                        b[d].then(function(b) {
                                            var d = a.$(b).clone();
                                            c.attr("id") && d.attr("id", c.attr("id")), c.attr("class") && d.attr("class", c.attr("class")), c.attr("style") && d.attr("style", c.attr("style")), c.attr("width") && (d.attr("width", c.attr("width")), c.attr("height") || d.removeAttr("height")), c.attr("height") && (d.attr("height", c.attr("height")), c.attr("width") || d.removeAttr("width")), c.replaceWith(d)
                                        })
                                    })
                                }, a.ready(function(b) {
                                    a.Utils.inlineSvg("[data-uk-svg]", b)
                                })
                            }({})
                    }(UIkit),
                    function(a) {
                        "use strict";

                        function b(b, c) {
                            c = a.$.extend({
                                duration: 1e3,
                                transition: "easeOutExpo",
                                offset: 0,
                                complete: function() {}
                            }, c);
                            var d = b.offset().top - c.offset,
                                e = a.$doc.height(),
                                f = window.innerHeight;
                            d + f > e && (d = e - f), a.$("html,body").stop().animate({
                                scrollTop: d
                            }, c.duration, c.transition).promise().done(c.complete)
                        }
                        a.component("smoothScroll", {
                            boot: function() {
                                a.$html.on("click.smooth-scroll.uikit", "[data-uk-smooth-scroll]", function() {
                                    var b = a.$(this);
                                    return b.data("smoothScroll") || (a.smoothScroll(b, a.Utils.options(b.attr("data-uk-smooth-scroll"))), b.trigger("click")), !1
                                })
                            },
                            init: function() {
                                var c = this;
                                this.on("click", function(d) {
                                    d.preventDefault(), b(a.$(this.hash).length ? a.$(this.hash) : a.$("body"), c.options)
                                })
                            }
                        }), a.Utils.scrollToElement = b, a.$.easing.easeOutExpo || (a.$.easing.easeOutExpo = function(a, b, c, d, e) {
                            return b == e ? c + d : d * (-Math.pow(2, -10 * b / e) + 1) + c
                        })
                    }(UIkit),
                    function(a) {
                        "use strict";
                        var b = a.$win,
                            c = a.$doc,
                            d = [],
                            e = function() {
                                for (var a = 0; a < d.length; a++) window.requestAnimationFrame.apply(window, [d[a].check])
                            };
                        a.component("scrollspy", {
                            defaults: {
                                target: !1,
                                cls: "uk-scrollspy-inview",
                                initcls: "uk-scrollspy-init-inview",
                                topoffset: 0,
                                leftoffset: 0,
                                repeat: !1,
                                delay: 0
                            },
                            boot: function() {
                                c.on("scrolling.uk.document", e), b.on("load resize orientationchange", a.Utils.debounce(e, 50)), a.ready(function(b) {
                                    a.$("[data-uk-scrollspy]", b).each(function() {
                                        var b = a.$(this);
                                        b.data("scrollspy") || a.scrollspy(b, a.Utils.options(b.attr("data-uk-scrollspy")))
                                    })
                                })
                            },
                            init: function() {
                                var b, c = this,
                                    e = this.options.cls.split(/,/),
                                    f = function() {
                                        var d = c.options.target ? c.element.find(c.options.target) : c.element,
                                            f = 1 === d.length ? 1 : 0,
                                            g = 0;
                                        d.each(function() {
                                            var d = a.$(this),
                                                h = d.data("inviewstate"),
                                                i = a.Utils.isInView(d, c.options),
                                                j = d.data("ukScrollspyCls") || e[g].trim();
                                            !i || h || d.data("scrollspy-idle") || (b || (d.addClass(c.options.initcls), c.offset = d.offset(), b = !0, d.trigger("init.uk.scrollspy")), d.data("scrollspy-idle", setTimeout(function() {
                                                d.addClass("uk-scrollspy-inview").toggleClass(j).width(), d.trigger("inview.uk.scrollspy"), d.data("scrollspy-idle", !1), d.data("inviewstate", !0)
                                            }, c.options.delay * f)), f++), !i && h && c.options.repeat && (d.data("scrollspy-idle") && clearTimeout(d.data("scrollspy-idle")), d.removeClass("uk-scrollspy-inview").toggleClass(j), d.data("inviewstate", !1), d.trigger("outview.uk.scrollspy")), g = e[g + 1] ? g + 1 : 0
                                        })
                                    };
                                f(), this.check = f, d.push(this)
                            }
                        });
                        var f = [],
                            g = function() {
                                for (var a = 0; a < f.length; a++) window.requestAnimationFrame.apply(window, [f[a].check])
                            };
                        a.component("scrollspynav", {
                            defaults: {
                                cls: "uk-active",
                                closest: !1,
                                topoffset: 0,
                                leftoffset: 0,
                                smoothscroll: !1
                            },
                            boot: function() {
                                c.on("scrolling.uk.document", g), b.on("resize orientationchange", a.Utils.debounce(g, 50)), a.ready(function(b) {
                                    a.$("[data-uk-scrollspy-nav]", b).each(function() {
                                        var b = a.$(this);
                                        b.data("scrollspynav") || a.scrollspynav(b, a.Utils.options(b.attr("data-uk-scrollspy-nav")))
                                    })
                                })
                            },
                            init: function() {
                                var c, d = [],
                                    e = this.find("a[href^='#']").each(function() {
                                        d.push(a.$(this).attr("href"))
                                    }),
                                    g = a.$(d.join(",")),
                                    h = this.options.cls,
                                    i = this.options.closest || this.options.closest,
                                    j = this,
                                    k = function() {
                                        c = [];
                                        for (var d = 0; d < g.length; d++) a.Utils.isInView(g.eq(d), j.options) && c.push(g.eq(d));
                                        if (c.length) {
                                            var f, k = b.scrollTop(),
                                                l = function() {
                                                    for (var a = 0; a < c.length; a++)
                                                        if (c[a].offset().top >= k) return c[a]
                                                }();
                                            if (!l) return;
                                            j.options.closest ? (e.closest(i).removeClass(h), f = e.filter("a[href='#" + l.attr("id") + "']").closest(i).addClass(h)) : f = e.removeClass(h).filter("a[href='#" + l.attr("id") + "']").addClass(h), j.element.trigger("inview.uk.scrollspynav", [l, f])
                                        }
                                    };
                                this.options.smoothscroll && a.smoothScroll && e.each(function() {
                                    a.smoothScroll(this, j.options.smoothscroll)
                                }), k(), this.element.data("scrollspynav", this), this.check = k, f.push(this)
                            }
                        })
                    }(UIkit),
                    function(a) {
                        "use strict";
                        var b = [];
                        a.component("toggle", {
                            defaults: {
                                target: !1,
                                cls: "uk-hidden",
                                animation: !1,
                                duration: 200
                            },
                            boot: function() {
                                a.ready(function(c) {
                                    a.$("[data-uk-toggle]", c).each(function() {
                                        var b = a.$(this);
                                        b.data("toggle") || a.toggle(b, a.Utils.options(b.attr("data-uk-toggle")))
                                    }), setTimeout(function() {
                                        b.forEach(function(a) {
                                            a.getToggles()
                                        })
                                    }, 0)
                                })
                            },
                            init: function() {
                                var a = this;
                                this.aria = -1 !== this.options.cls.indexOf("uk-hidden"), this.getToggles(), this.on("click", function(b) {
                                    a.element.is('a[href="#"]') && b.preventDefault(), a.toggle()
                                }), b.push(this)
                            },
                            toggle: function() {
                                if (this.totoggle.length) {
                                    if (this.options.animation && a.support.animation) {
                                        var b = this,
                                            c = this.options.animation.split(",");
                                        1 == c.length && (c[1] = c[0]), c[0] = c[0].trim(), c[1] = c[1].trim(), this.totoggle.css("animation-duration", this.options.duration + "ms"), this.totoggle.each(function() {
                                            var d = a.$(this);
                                            d.hasClass(b.options.cls) ? (d.toggleClass(b.options.cls), a.Utils.animate(d, c[0]).then(function() {
                                                d.css("animation-duration", ""), a.Utils.checkDisplay(d)
                                            })) : a.Utils.animate(this, c[1] + " uk-animation-reverse").then(function() {
                                                d.toggleClass(b.options.cls).css("animation-duration", ""), a.Utils.checkDisplay(d)
                                            })
                                        })
                                    } else this.totoggle.toggleClass(this.options.cls), a.Utils.checkDisplay(this.totoggle);
                                    this.updateAria()
                                }
                            },
                            getToggles: function() {
                                this.totoggle = this.options.target ? a.$(this.options.target) : [], this.updateAria()
                            },
                            updateAria: function() {
                                this.aria && this.totoggle.length && this.totoggle.each(function() {
                                    a.$(this).attr("aria-hidden", a.$(this).hasClass("uk-hidden"))
                                })
                            }
                        })
                    }(UIkit),
                    function(a) {
                        "use strict";
                        a.component("alert", {
                            defaults: {
                                fade: !0,
                                duration: 200,
                                trigger: ".uk-alert-close"
                            },
                            boot: function() {
                                a.$html.on("click.alert.uikit", "[data-uk-alert]", function(b) {
                                    var c = a.$(this);
                                    if (!c.data("alert")) {
                                        var d = a.alert(c, a.Utils.options(c.attr("data-uk-alert")));
                                        a.$(b.target).is(d.options.trigger) && (b.preventDefault(), d.close())
                                    }
                                })
                            },
                            init: function() {
                                var a = this;
                                this.on("click", this.options.trigger, function(b) {
                                    b.preventDefault(), a.close()
                                })
                            },
                            close: function() {
                                var a = this.trigger("close.uk.alert"),
                                    b = function() {
                                        this.trigger("closed.uk.alert").remove()
                                    }.bind(this);
                                this.options.fade ? a.css("overflow", "hidden").css("max-height", a.height()).animate({
                                    height: 0,
                                    opacity: 0,
                                    "padding-top": 0,
                                    "padding-bottom": 0,
                                    "margin-top": 0,
                                    "margin-bottom": 0
                                }, this.options.duration, b) : b()
                            }
                        })
                    }(UIkit),
                    function(a) {
                        "use strict";
                        a.component("buttonRadio", {
                            defaults: {
                                activeClass: "uk-active",
                                target: ".uk-button"
                            },
                            boot: function() {
                                a.$html.on("click.buttonradio.uikit", "[data-uk-button-radio]", function(b) {
                                    var c = a.$(this);
                                    if (!c.data("buttonRadio")) {
                                        var d = a.buttonRadio(c, a.Utils.options(c.attr("data-uk-button-radio"))),
                                            e = a.$(b.target);
                                        e.is(d.options.target) && e.trigger("click")
                                    }
                                })
                            },
                            init: function() {
                                var b = this;
                                this.find(b.options.target).attr("aria-checked", "false").filter("." + b.options.activeClass).attr("aria-checked", "true"), this.on("click", this.options.target, function(c) {
                                    var d = a.$(this);
                                    d.is('a[href="#"]') && c.preventDefault(), b.find(b.options.target).not(d).removeClass(b.options.activeClass).blur(), d.addClass(b.options.activeClass), b.find(b.options.target).not(d).attr("aria-checked", "false"), d.attr("aria-checked", "true"), b.trigger("change.uk.button", [d])
                                })
                            },
                            getSelected: function() {
                                return this.find("." + this.options.activeClass)
                            }
                        }), a.component("buttonCheckbox", {
                            defaults: {
                                activeClass: "uk-active",
                                target: ".uk-button"
                            },
                            boot: function() {
                                a.$html.on("click.buttoncheckbox.uikit", "[data-uk-button-checkbox]", function(b) {
                                    var c = a.$(this);
                                    if (!c.data("buttonCheckbox")) {
                                        var d = a.buttonCheckbox(c, a.Utils.options(c.attr("data-uk-button-checkbox"))),
                                            e = a.$(b.target);
                                        e.is(d.options.target) && e.trigger("click")
                                    }
                                })
                            },
                            init: function() {
                                var b = this;
                                this.find(b.options.target).attr("aria-checked", "false").filter("." + b.options.activeClass).attr("aria-checked", "true"), this.on("click", this.options.target, function(c) {
                                    var d = a.$(this);
                                    d.is('a[href="#"]') && c.preventDefault(), d.toggleClass(b.options.activeClass).blur(), d.attr("aria-checked", d.hasClass(b.options.activeClass)), b.trigger("change.uk.button", [d])
                                })
                            },
                            getSelected: function() {
                                return this.find("." + this.options.activeClass)
                            }
                        }), a.component("button", {
                            defaults: {},
                            boot: function() {
                                a.$html.on("click.button.uikit", "[data-uk-button]", function() {
                                    var b = a.$(this);
                                    b.data("button") || (a.button(b, a.Utils.options(b.attr("data-uk-button"))), b.trigger("click"))
                                })
                            },
                            init: function() {
                                var a = this;
                                this.element.attr("aria-pressed", this.element.hasClass("uk-active")), this.on("click", function(b) {
                                    a.element.is('a[href="#"]') && b.preventDefault(), a.toggle(), a.trigger("change.uk.button", [a.element.blur().hasClass("uk-active")])
                                })
                            },
                            toggle: function() {
                                this.element.toggleClass("uk-active"), this.element.attr("aria-pressed", this.element.hasClass("uk-active"))
                            }
                        })
                    }(UIkit),
                    function(a) {
                        "use strict";

                        function b(b, c, d, e) {
                            if (b = a.$(b), c = a.$(c), d = d || window.innerWidth, e = e || b.offset(), c.length) {
                                var f = c.outerWidth();
                                if (b.css("min-width", f), "right" == a.langdirection) {
                                    var g = d - (c.offset().left + f),
                                        h = d - (b.offset().left + b.outerWidth());
                                    b.css("margin-right", g - h)
                                } else b.css("margin-left", c.offset().left - e.left)
                            }
                        }
                        var c, d = !1,
                            e = {
                                x: {
                                    "bottom-left": "bottom-right",
                                    "bottom-right": "bottom-left",
                                    "bottom-center": "bottom-right",
                                    "top-left": "top-right",
                                    "top-right": "top-left",
                                    "top-center": "top-right",
                                    "left-top": "right",
                                    "left-bottom": "right-bottom",
                                    "left-center": "right-center",
                                    "right-top": "left",
                                    "right-bottom": "left-bottom",
                                    "right-center": "left-center"
                                },
                                y: {
                                    "bottom-left": "top-left",
                                    "bottom-right": "top-right",
                                    "bottom-center": "top-center",
                                    "top-left": "bottom-left",
                                    "top-right": "bottom-right",
                                    "top-center": "bottom-center",
                                    "left-top": "top-left",
                                    "left-bottom": "left-bottom",
                                    "left-center": "top-left",
                                    "right-top": "top-left",
                                    "right-bottom": "bottom-left",
                                    "right-center": "top-left"
                                },
                                xy: {}
                            };
                        a.component("dropdown", {
                            defaults: {
                                mode: "hover",
                                pos: "bottom-left",
                                offset: 0,
                                remaintime: 800,
                                justify: !1,
                                boundary: a.$win,
                                delay: 0,
                                dropdownSelector: ".uk-dropdown,.uk-dropdown-blank",
                                hoverDelayIdle: 250
                            },
                            remainIdle: !1,
                            boot: function() {
                                var b = a.support.touch ? "click" : "mouseenter";
                                a.$html.on(b + ".dropdown.uikit", "[data-uk-dropdown]", function(c) {
                                    var d = a.$(this);
                                    if (!d.data("dropdown")) {
                                        var e = a.dropdown(d, a.Utils.options(d.attr("data-uk-dropdown")));
                                        ("click" == b || "mouseenter" == b && "hover" == e.options.mode) && e.element.trigger(b), e.element.find(e.options.dropdownSelector).length && c.preventDefault()
                                    }
                                })
                            },
                            init: function() {
                                var b = this;
                                this.dropdown = this.find(this.options.dropdownSelector), this.offsetParent = this.dropdown.parents().filter(function() {
                                    return -1 !== a.$.inArray(a.$(this).css("position"), ["relative", "fixed", "absolute"])
                                }).slice(0, 1), this.centered = this.dropdown.hasClass("uk-dropdown-center"), this.justified = this.options.justify ? a.$(this.options.justify) : !1, this.boundary = a.$(this.options.boundary), this.boundary.length || (this.boundary = a.$win), this.dropdown.hasClass("uk-dropdown-up") && (this.options.pos = "top-left"), this.dropdown.hasClass("uk-dropdown-flip") && (this.options.pos = this.options.pos.replace("left", "right")), this.dropdown.hasClass("uk-dropdown-center") && (this.options.pos = this.options.pos.replace(/(left|right)/, "center")), this.element.attr("aria-haspopup", "true"), this.element.attr("aria-expanded", this.element.hasClass("uk-open")), "click" == this.options.mode || a.support.touch ? this.on("click.uikit.dropdown", function(c) {
                                    var d = a.$(c.target);
                                    d.parents(b.options.dropdownSelector).length || ((d.is("a[href='#']") || d.parent().is("a[href='#']") || b.dropdown.length && !b.dropdown.is(":visible")) && c.preventDefault(), d.blur()), b.element.hasClass("uk-open") ? (!b.dropdown.find(c.target).length || d.is(".uk-dropdown-close") || d.parents(".uk-dropdown-close").length) && b.hide() : b.show()
                                }) : this.on("mouseenter", function() {
                                    b.trigger("pointerenter.uk.dropdown", [b]), b.remainIdle && clearTimeout(b.remainIdle), c && clearTimeout(c), d && d == b || (c = d && d != b ? setTimeout(function() {
                                        c = setTimeout(b.show.bind(b), b.options.delay)
                                    }, b.options.hoverDelayIdle) : setTimeout(b.show.bind(b), b.options.delay))
                                }).on("mouseleave", function() {
                                    c && clearTimeout(c), b.remainIdle = setTimeout(function() {
                                        d && d == b && b.hide()
                                    }, b.options.remaintime), b.trigger("pointerleave.uk.dropdown", [b])
                                }).on("click", function(c) {
                                    var e = a.$(c.target);
                                    b.remainIdle && clearTimeout(b.remainIdle), d && d == b || ((e.is("a[href='#']") || e.parent().is("a[href='#']")) && c.preventDefault(), b.show())
                                })
                            },
                            show: function() {
                                a.$html.off("click.outer.dropdown"), d && d != this && d.hide(!0), c && clearTimeout(c), this.trigger("beforeshow.uk.dropdown", [this]), this.checkDimensions(), this.element.addClass("uk-open"), this.element.attr("aria-expanded", "true"), this.trigger("show.uk.dropdown", [this]), a.Utils.checkDisplay(this.dropdown, !0), d = this, this.registerOuterClick()
                            },
                            hide: function(a) {
                                this.trigger("beforehide.uk.dropdown", [this, a]), this.element.removeClass("uk-open"), this.remainIdle && clearTimeout(this.remainIdle), this.remainIdle = !1, this.element.attr("aria-expanded", "false"), this.trigger("hide.uk.dropdown", [this, a]), d == this && (d = !1)
                            },
                            registerOuterClick: function() {
                                var b = this;
                                a.$html.off("click.outer.dropdown"), setTimeout(function() {
                                    a.$html.on("click.outer.dropdown", function(e) {
                                        c && clearTimeout(c), a.$(e.target), d != b || b.element.find(e.target).length || (b.hide(!0), a.$html.off("click.outer.dropdown"))
                                    })
                                }, 10)
                            },
                            checkDimensions: function() {
                                if (this.dropdown.length) {
                                    this.dropdown.removeClass("uk-dropdown-top uk-dropdown-bottom uk-dropdown-left uk-dropdown-right uk-dropdown-stack").css({
                                        "top-left": "",
                                        left: "",
                                        "margin-left": "",
                                        "margin-right": ""
                                    }), this.justified && this.justified.length && this.dropdown.css("min-width", "");
                                    var c, d = a.$.extend({}, this.offsetParent.offset(), {
                                            width: this.offsetParent[0].offsetWidth,
                                            height: this.offsetParent[0].offsetHeight
                                        }),
                                        f = this.options.offset,
                                        g = this.dropdown,
                                        h = (g.show().offset(), g.outerWidth()),
                                        i = g.outerHeight(),
                                        j = this.boundary.width(),
                                        k = (this.boundary.offset() ? this.boundary.offset() : {
                                            top: 0,
                                            left: 0
                                        }, this.options.pos),
                                        l = {
                                            "bottom-left": {
                                                top: 0 + d.height + f,
                                                left: 0
                                            },
                                            "bottom-right": {
                                                top: 0 + d.height + f,
                                                left: 0 + d.width - h
                                            },
                                            "bottom-center": {
                                                top: 0 + d.height + f,
                                                left: 0 + d.width / 2 - h / 2
                                            },
                                            "top-left": {
                                                top: 0 - i - f,
                                                left: 0
                                            },
                                            "top-right": {
                                                top: 0 - i - f,
                                                left: 0 + d.width - h
                                            },
                                            "top-center": {
                                                top: 0 - i - f,
                                                left: 0 + d.width / 2 - h / 2
                                            },
                                            "left-top": {
                                                top: 0,
                                                left: 0 - h - f
                                            },
                                            "left-bottom": {
                                                top: 0 + d.height - i,
                                                left: 0 - h - f
                                            },
                                            "left-center": {
                                                top: 0 + d.height / 2 - i / 2,
                                                left: 0 - h - f
                                            },
                                            "right-top": {
                                                top: 0,
                                                left: 0 + d.width + f
                                            },
                                            "right-bottom": {
                                                top: 0 + d.height - i,
                                                left: 0 + d.width + f
                                            },
                                            "right-center": {
                                                top: 0 + d.height / 2 - i / 2,
                                                left: 0 + d.width + f
                                            }
                                        },
                                        m = {};
                                    if (c = k.split("-"), m = l[k] ? l[k] : l["bottom-left"], this.justified && this.justified.length) b(g.css({
                                        left: 0
                                    }), this.justified, j);
                                    else {
                                        switch (this.checkBoundary(d.left + m.left, d.top + m.top, h, i, j)) {
                                            case "x":
                                                k = e.x[k] || "right-top";
                                                break;
                                            case "y":
                                                k = e.y[k] || "top-left";
                                                break;
                                            case "xy":
                                                k = e.xy[k] || "right-bottom"
                                        }
                                        c = k.split("-"), m = l[k] ? l[k] : l["bottom-left"]
                                    }
                                    h > j && (g.addClass("uk-dropdown-stack"), this.trigger("stack.uk.dropdown", [this])), g.css(m).css("display", "").addClass("uk-dropdown-" + c[0])
                                }
                            },
                            checkBoundary: function(b, c, d, e, f) {
                                var g = "";
                                return (0 > b || b - a.$win.scrollLeft() + d > f) && (g += "x"), (0 > c || c - a.$win.scrollTop() + e > window.innerHeight) && (g += "y"), g
                            }
                        }), a.component("dropdownOverlay", {
                            defaults: {
                                justify: !1,
                                cls: "",
                                duration: 200
                            },
                            boot: function() {
                                a.ready(function(b) {
                                    a.$("[data-uk-dropdown-overlay]", b).each(function() {
                                        var b = a.$(this);
                                        b.data("dropdownOverlay") || a.dropdownOverlay(b, a.Utils.options(b.attr("data-uk-dropdown-overlay")))
                                    })
                                })
                            },
                            init: function() {
                                var c = this;
                                this.justified = this.options.justify ? a.$(this.options.justify) : !1, this.overlay = this.element.find("uk-dropdown-overlay"), this.overlay.length || (this.overlay = a.$('<div class="uk-dropdown-overlay"></div>').appendTo(this.element)), this.overlay.addClass(this.options.cls), this.on({
                                    "beforeshow.uk.dropdown": function(a, d) {
                                        c.dropdown = d, c.justified && c.justified.length && b(c.overlay.css({
                                            display: "block",
                                            "margin-left": "",
                                            "margin-right": ""
                                        }), c.justified, c.justified.outerWidth())
                                    },
                                    "show.uk.dropdown": function() {
                                        var b = c.dropdown.dropdown.outerHeight(!0);
                                        c.dropdown.element.removeClass("uk-open"), c.overlay.stop().css("display", "block").animate({
                                            height: b
                                        }, c.options.duration, function() {
                                            c.dropdown.dropdown.css("visibility", ""), c.dropdown.element.addClass("uk-open"), a.Utils.checkDisplay(c.dropdown.dropdown, !0)
                                        }), c.pointerleave = !1
                                    },
                                    "hide.uk.dropdown": function() {
                                        c.overlay.stop().animate({
                                            height: 0
                                        }, c.options.duration)
                                    },
                                    "pointerenter.uk.dropdown": function() {
                                        clearTimeout(c.remainIdle)
                                    },
                                    "pointerleave.uk.dropdown": function() {
                                        c.pointerleave = !0
                                    }
                                }), this.overlay.on({
                                    mouseenter: function() {
                                        c.remainIdle && (clearTimeout(c.dropdown.remainIdle), clearTimeout(c.remainIdle))
                                    },
                                    mouseleave: function() {
                                        c.pointerleave && d && (c.remainIdle = setTimeout(function() {
                                            d && d.hide()
                                        }, d.options.remaintime))
                                    }
                                })
                            }
                        })
                    }(UIkit),
                    function(a) {
                        "use strict";
                        var b = [];
                        a.component("gridMatchHeight", {
                            defaults: {
                                target: !1,
                                row: !0,
                                ignorestacked: !1
                            },
                            boot: function() {
                                a.ready(function(b) {
                                    a.$("[data-uk-grid-match]", b).each(function() {
                                        var b, c = a.$(this);
                                        c.data("gridMatchHeight") || (b = a.gridMatchHeight(c, a.Utils.options(c.attr("data-uk-grid-match"))))
                                    })
                                })
                            },
                            init: function() {
                                var c = this;
                                this.columns = this.element.children(), this.elements = this.options.target ? this.find(this.options.target) : this.columns, this.columns.length && (a.$win.on("load resize orientationchange", function() {
                                    var b = function() {
                                        c.match()
                                    };
                                    return a.$(function() {
                                        b()
                                    }), a.Utils.debounce(b, 50)
                                }()), a.$html.on("changed.uk.dom", function() {
                                    c.columns = c.element.children(), c.elements = c.options.target ? c.find(c.options.target) : c.columns, c.match()
                                }), this.on("display.uk.check", function() {
                                    this.element.is(":visible") && this.match()
                                }.bind(this)), b.push(this))
                            },
                            match: function() {
                                var b = this.columns.filter(":visible:first");
                                if (b.length) {
                                    var c = Math.ceil(100 * parseFloat(b.css("width")) / parseFloat(b.parent().css("width"))) >= 100;
                                    return c && !this.options.ignorestacked ? this.revert() : a.Utils.matchHeights(this.elements, this.options), this
                                }
                            },
                            revert: function() {
                                return this.elements.css("min-height", ""), this
                            }
                        }), a.component("gridMargin", {
                            defaults: {
                                cls: "uk-grid-margin"
                            },
                            boot: function() {
                                a.ready(function(b) {
                                    a.$("[data-uk-grid-margin]", b).each(function() {
                                        var b, c = a.$(this);
                                        c.data("gridMargin") || (b = a.gridMargin(c, a.Utils.options(c.attr("data-uk-grid-margin"))))
                                    })
                                })
                            },
                            init: function() {
                                a.stackMargin(this.element, this.options)
                            }
                        })
                    }(UIkit),
                    function(a) {
                        "use strict";

                        function b(b, c) {
                            return c ? ("object" == typeof b ? (b = b instanceof jQuery ? b : a.$(b), b.parent().length && (c.persist = b, c.persist.data("modalPersistParent", b.parent()))) : b = "string" == typeof b || "number" == typeof b ? a.$("<div></div>").html(b) : a.$("<div></div>").html("UIkit.modal Error: Unsupported data type: " + typeof b), b.appendTo(c.element.find(".uk-modal-dialog")), c) : void 0
                        }
                        var c, d = !1,
                            e = 0,
                            f = a.$html;
                        a.component("modal", {
                            defaults: {
                                keyboard: !0,
                                bgclose: !0,
                                minScrollHeight: 150,
                                center: !1,
                                modal: !0
                            },
                            scrollable: !1,
                            transition: !1,
                            hasTransitioned: !0,
                            init: function() {
                                if (c || (c = a.$("body")), this.element.length) {
                                    var b = this;
                                    this.paddingdir = "padding-" + ("left" == a.langdirection ? "right" : "left"), this.dialog = this.find(".uk-modal-dialog"), this.active = !1, this.element.attr("aria-hidden", this.element.hasClass("uk-open")), this.on("click", ".uk-modal-close", function(a) {
                                        a.preventDefault(), b.hide()
                                    }).on("click", function(c) {
                                        var d = a.$(c.target);
                                        d[0] == b.element[0] && b.options.bgclose && b.hide()
                                    })
                                }
                            },
                            toggle: function() {
                                return this[this.isActive() ? "hide" : "show"]()
                            },
                            show: function() {
                                if (this.element.length) {
                                    var b = this;
                                    if (!this.isActive()) return this.options.modal && d && d.hide(!0), this.element.removeClass("uk-open").show(), this.resize(), this.options.modal && (d = this), this.active = !0, e++, a.support.transition ? (this.hasTransitioned = !1, this.element.one(a.support.transition.end, function() {
                                        b.hasTransitioned = !0
                                    }).addClass("uk-open")) : this.element.addClass("uk-open"), f.addClass("uk-modal-page").height(), this.element.attr("aria-hidden", "false"), this.element.trigger("show.uk.modal"), a.Utils.checkDisplay(this.dialog, !0), this
                                }
                            },
                            hide: function(b) {
                                if (!b && a.support.transition && this.hasTransitioned) {
                                    var c = this;
                                    this.one(a.support.transition.end, function() {
                                        c._hide()
                                    }).removeClass("uk-open")
                                } else this._hide();
                                return this
                            },
                            resize: function() {
                                var a = c.width();
                                if (this.scrollbarwidth = window.innerWidth - a, c.css(this.paddingdir, this.scrollbarwidth), this.element.css("overflow-y", this.scrollbarwidth ? "scroll" : "auto"), !this.updateScrollable() && this.options.center) {
                                    var b = this.dialog.outerHeight(),
                                        d = parseInt(this.dialog.css("margin-top"), 10) + parseInt(this.dialog.css("margin-bottom"), 10);
                                    b + d < window.innerHeight ? this.dialog.css({
                                        top: window.innerHeight / 2 - b / 2 - d
                                    }) : this.dialog.css({
                                        top: ""
                                    })
                                }
                            },
                            updateScrollable: function() {
                                var a = this.dialog.find(".uk-overflow-container:visible:first");
                                if (a.length) {
                                    a.css("height", 0);
                                    var b = Math.abs(parseInt(this.dialog.css("margin-top"), 10)),
                                        c = this.dialog.outerHeight(),
                                        d = window.innerHeight,
                                        e = d - 2 * (20 > b ? 20 : b) - c;
                                    return a.css("height", e < this.options.minScrollHeight ? "" : e), !0
                                }
                                return !1
                            },
                            _hide: function() {
                                this.active = !1, e > 0 ? e-- : e = 0, this.element.hide().removeClass("uk-open"), this.element.attr("aria-hidden", "true"), e || (f.removeClass("uk-modal-page"), c.css(this.paddingdir, "")), d === this && (d = !1), this.trigger("hide.uk.modal")
                            },
                            isActive: function() {
                                return this.active
                            }
                        }), a.component("modalTrigger", {
                            boot: function() {
                                a.$html.on("click.modal.uikit", "[data-uk-modal]", function(b) {
                                    var c = a.$(this);
                                    if (c.is("a") && b.preventDefault(), !c.data("modalTrigger")) {
                                        var d = a.modalTrigger(c, a.Utils.options(c.attr("data-uk-modal")));
                                        d.show()
                                    }
                                }), a.$html.on("keydown.modal.uikit", function(a) {
                                    d && 27 === a.keyCode && d.options.keyboard && (a.preventDefault(), d.hide())
                                }), a.$win.on("resize orientationchange", a.Utils.debounce(function() {
                                    d && d.resize()
                                }, 150))
                            },
                            init: function() {
                                var b = this;
                                this.options = a.$.extend({
                                    target: b.element.is("a") ? b.element.attr("href") : !1
                                }, this.options), this.modal = a.modal(this.options.target, this.options), this.on("click", function(a) {
                                    a.preventDefault(), b.show()
                                }), this.proxy(this.modal, "show hide isActive")
                            }
                        }), a.modal.dialog = function(c, d) {
                            var e = a.modal(a.$(a.modal.dialog.template).appendTo("body"), d);
                            return e.on("hide.uk.modal", function() {
                                e.persist && (e.persist.appendTo(e.persist.data("modalPersistParent")), e.persist = !1), e.element.remove()
                            }), b(c, e), e
                        }, a.modal.dialog.template = '<div class="uk-modal"><div class="uk-modal-dialog" style="min-height:0;"></div></div>', a.modal.alert = function(b, c) {
                            c = a.$.extend(!0, {
                                bgclose: !1,
                                keyboard: !1,
                                modal: !1,
                                labels: a.modal.labels
                            }, c);
                            var d = a.modal.dialog(['<div class="uk-margin uk-modal-content">' + String(b) + "</div>", '<div class="uk-modal-footer uk-text-right"><button class="uk-button uk-button-primary uk-modal-close">' + c.labels.Ok + "</button></div>"].join(""), c);
                            return d.on("show.uk.modal", function() {
                                setTimeout(function() {
                                    d.element.find("button:first").focus()
                                }, 50)
                            }), d.show()
                        }, a.modal.confirm = function(b, c, d) {
                            c = a.$.isFunction(c) ? c : function() {}, d = a.$.extend(!0, {
                                bgclose: !1,
                                keyboard: !1,
                                modal: !1,
                                labels: a.modal.labels
                            }, d);
                            var e = a.modal.dialog(['<div class="uk-margin uk-modal-content">' + String(b) + "</div>", '<div class="uk-modal-footer uk-text-right"><button class="uk-button uk-modal-close">' + d.labels.Cancel + '</button> <button class="uk-button uk-button-primary js-modal-confirm">' + d.labels.Ok + "</button></div>"].join(""), d);
                            return e.element.find(".js-modal-confirm").on("click", function() {
                                c(), e.hide()
                            }), e.on("show.uk.modal", function() {
                                setTimeout(function() {
                                    e.element.find(".js-modal-confirm").focus()
                                }, 50)
                            }), e.show()
                        }, a.modal.prompt = function(b, c, d, e) {
                            d = a.$.isFunction(d) ? d : function() {}, e = a.$.extend(!0, {
                                bgclose: !1,
                                keyboard: !1,
                                modal: !1,
                                labels: a.modal.labels
                            }, e);
                            var f = a.modal.dialog([b ? '<div class="uk-modal-content uk-form">' + String(b) + "</div>" : "", '<div class="uk-margin-small-top uk-modal-content uk-form"><p><input type="text" class="uk-width-1-1"></p></div>', '<div class="uk-modal-footer uk-text-right"><button class="uk-button uk-modal-close">' + e.labels.Cancel + '</button> <button class="uk-button uk-button-primary js-modal-ok">' + e.labels.Ok + "</button></div>"].join(""), e),
                                g = f.element.find("input[type='text']").val(c || "").on("keyup", function(a) {
                                    13 == a.keyCode && f.element.find(".js-modal-ok").trigger("click")
                                });
                            return f.element.find(".js-modal-ok").on("click", function() {
                                d(g.val()) !== !1 && f.hide()
                            }), f.on("show.uk.modal", function() {
                                setTimeout(function() {
                                    g.focus()
                                }, 50)
                            }), f.show()
                        }, a.modal.blockUI = function(b, c) {
                            var d = a.modal.dialog(['<div class="uk-margin uk-modal-content">' + String(b || '<div class="uk-text-center">...</div>') + "</div>"].join(""), a.$.extend({
                                bgclose: !1,
                                keyboard: !1,
                                modal: !1
                            }, c));
                            return d.content = d.element.find(".uk-modal-content:first"), d.show()
                        }, a.modal.labels = {
                            Ok: "Ok",
                            Cancel: "Cancel"
                        }
                    }(UIkit),
                    function(a) {
                        "use strict";

                        function b(b) {
                            var c = a.$(b),
                                d = "auto";
                            if (c.is(":visible")) d = c.outerHeight();
                            else {
                                var e = {
                                    position: c.css("position"),
                                    visibility: c.css("visibility"),
                                    display: c.css("display")
                                };
                                d = c.css({
                                    position: "absolute",
                                    visibility: "hidden",
                                    display: "block"
                                }).outerHeight(), c.css(e)
                            }
                            return d
                        }
                        a.component("nav", {
                            defaults: {
                                toggle: ">li.uk-parent > a[href='#']",
                                lists: ">li.uk-parent > ul",
                                multiple: !1
                            },
                            boot: function() {
                                a.ready(function(b) {
                                    a.$("[data-uk-nav]", b).each(function() {
                                        var b = a.$(this);
                                        b.data("nav") || a.nav(b, a.Utils.options(b.attr("data-uk-nav")))
                                    })
                                })
                            },
                            init: function() {
                                var b = this;
                                this.on("click.uikit.nav", this.options.toggle, function(c) {
                                    c.preventDefault();
                                    var d = a.$(this);
                                    b.open(d.parent()[0] == b.element[0] ? d : d.parent("li"))
                                }), this.find(this.options.lists).each(function() {
                                    var c = a.$(this),
                                        d = c.parent(),
                                        e = d.hasClass("uk-active");
                                    c.wrap('<div style="overflow:hidden;height:0;position:relative;"></div>'), d.data("list-container", c.parent()[e ? "removeClass" : "addClass"]("uk-hidden")), d.attr("aria-expanded", d.hasClass("uk-open")), e && b.open(d, !0)
                                })
                            },
                            open: function(c, d) {
                                var e = this,
                                    f = this.element,
                                    g = a.$(c),
                                    h = g.data("list-container");
                                this.options.multiple || f.children(".uk-open").not(c).each(function() {
                                    var b = a.$(this);
                                    b.data("list-container") && b.data("list-container").stop().animate({
                                        height: 0
                                    }, function() {
                                        a.$(this).parent().removeClass("uk-open").end().addClass("uk-hidden")
                                    })
                                }), g.toggleClass("uk-open"), g.attr("aria-expanded", g.hasClass("uk-open")), h && (g.hasClass("uk-open") && h.removeClass("uk-hidden"), d ? (h.stop().height(g.hasClass("uk-open") ? "auto" : 0), g.hasClass("uk-open") || h.addClass("uk-hidden"), this.trigger("display.uk.check")) : h.stop().animate({
                                    height: g.hasClass("uk-open") ? b(h.find("ul:first")) : 0
                                }, function() {
                                    g.hasClass("uk-open") ? h.css("height", "") : h.addClass("uk-hidden"), e.trigger("display.uk.check")
                                }))
                            }
                        })
                    }(UIkit),
                    function(a) {
                        "use strict";
                        var b = {
                                x: window.scrollX,
                                y: window.scrollY
                            },
                            c = (a.$win, a.$doc, a.$html),
                            d = {
                                show: function(d) {
                                    if (d = a.$(d), d.length) {
                                        var e = a.$("body"),
                                            f = d.find(".uk-offcanvas-bar:first"),
                                            g = "right" == a.langdirection,
                                            h = f.hasClass("uk-offcanvas-bar-flip") ? -1 : 1,
                                            i = h * (g ? -1 : 1),
                                            j = window.innerWidth - e.width();
                                        b = {
                                            x: window.pageXOffset,
                                            y: window.pageYOffset
                                        }, d.addClass("uk-active"), e.css({
                                            width: window.innerWidth - j,
                                            height: window.innerHeight
                                        }).addClass("uk-offcanvas-page"), e.css(g ? "margin-right" : "margin-left", (g ? -1 : 1) * f.outerWidth() * i).width(), c.css("margin-top", -1 * b.y), f.addClass("uk-offcanvas-bar-show"), this._initElement(d), f.trigger("show.uk.offcanvas", [d, f]), d.attr("aria-hidden", "false")
                                    }
                                },
                                hide: function(d) {
                                    var e = a.$("body"),
                                        f = a.$(".uk-offcanvas.uk-active"),
                                        g = "right" == a.langdirection,
                                        h = f.find(".uk-offcanvas-bar:first"),
                                        i = function() {
                                            e.removeClass("uk-offcanvas-page").css({
                                                width: "",
                                                height: "",
                                                "margin-left": "",
                                                "margin-right": ""
                                            }), f.removeClass("uk-active"), h.removeClass("uk-offcanvas-bar-show"), c.css("margin-top", ""), window.scrollTo(b.x, b.y), h.trigger("hide.uk.offcanvas", [f, h]), f.attr("aria-hidden", "true")
                                        };
                                    f.length && (a.support.transition && !d ? (e.one(a.support.transition.end, function() {
                                        i()
                                    }).css(g ? "margin-right" : "margin-left", ""), setTimeout(function() {
                                        h.removeClass("uk-offcanvas-bar-show")
                                    }, 0)) : i())
                                },
                                _initElement: function(b) {
                                    b.data("OffcanvasInit") || (b.on("click.uk.offcanvas swipeRight.uk.offcanvas swipeLeft.uk.offcanvas", function(b) {
                                        var c = a.$(b.target);
                                        if (!b.type.match(/swipe/) && !c.hasClass("uk-offcanvas-close")) {
                                            if (c.hasClass("uk-offcanvas-bar")) return;
                                            if (c.parents(".uk-offcanvas-bar:first").length) return
                                        }
                                        b.stopImmediatePropagation(), d.hide()
                                    }), b.on("click", "a[href^='#']", function() {
                                        var b = a.$(this),
                                            c = b.attr("href");
                                        "#" != c && (a.$doc.one("hide.uk.offcanvas", function() {
                                            var d;
                                            try {
                                                d = a.$(c)
                                            } catch (e) {
                                                d = ""
                                            }
                                            d.length || (d = a.$('[name="' + c.replace("#", "") + '"]')), d.length && b.attr("data-uk-smooth-scroll") && a.Utils.scrollToElement ? a.Utils.scrollToElement(d, a.Utils.options(b.attr("data-uk-smooth-scroll") || "{}")) : window.location.href = c
                                        }), d.hide())
                                    }), b.data("OffcanvasInit", !0))
                                }
                            };
                        a.component("offcanvasTrigger", {
                            boot: function() {
                                c.on("click.offcanvas.uikit", "[data-uk-offcanvas]", function(b) {
                                    b.preventDefault();
                                    var c = a.$(this);
                                    c.data("offcanvasTrigger") || (a.offcanvasTrigger(c, a.Utils.options(c.attr("data-uk-offcanvas"))), c.trigger("click"))
                                }), c.on("keydown.uk.offcanvas", function(a) {
                                    27 === a.keyCode && d.hide()
                                })
                            },
                            init: function() {
                                var b = this;
                                this.options = a.$.extend({
                                    target: b.element.is("a") ? b.element.attr("href") : !1
                                }, this.options), this.on("click", function(a) {
                                    a.preventDefault(), d.show(b.options.target)
                                })
                            }
                        }), a.offcanvas = d
                    }(UIkit),
                    function(a) {
                        "use strict";

                        function b(b, c, d) {
                            var e, f = a.$.Deferred(),
                                g = b,
                                h = b;
                            return d[0] === c[0] ? (f.resolve(), f.promise()) : ("object" == typeof b && (g = b[0], h = b[1] || b[0]), a.$body.css("overflow-x", "hidden"), e = function() {
                                c && c.hide().removeClass("uk-active " + h + " uk-animation-reverse"), d.addClass(g).one(a.support.animation.end, function() {
                                    d.removeClass("" + g).css({
                                        opacity: "",
                                        display: ""
                                    }), f.resolve(), a.$body.css("overflow-x", ""), c && c.css({
                                        opacity: "",
                                        display: ""
                                    })
                                }.bind(this)).show()
                            }, d.css("animation-duration", this.options.duration + "ms"), c && c.length ? (c.css("animation-duration", this.options.duration + "ms"), c.css("display", "none").addClass(h + " uk-animation-reverse").one(a.support.animation.end, function() {
                                e()
                            }.bind(this)).css("display", "")) : (d.addClass("uk-active"), e()), f.promise())
                        }
                        var c;
                        a.component("switcher", {
                            defaults: {
                                connect: !1,
                                toggle: ">*",
                                active: 0,
                                animation: !1,
                                duration: 200,
                                swiping: !0
                            },
                            animating: !1,
                            boot: function() {
                                a.ready(function(b) {
                                    a.$("[data-uk-switcher]", b).each(function() {
                                        var b = a.$(this);
                                        b.data("switcher") || a.switcher(b, a.Utils.options(b.attr("data-uk-switcher")))
                                    })
                                })
                            },
                            init: function() {
                                var b = this;
                                if (this.on("click.uikit.switcher", this.options.toggle, function(a) {
                                        a.preventDefault(), b.show(this)
                                    }), this.options.connect) {
                                    this.connect = a.$(this.options.connect), this.connect.find(".uk-active").removeClass(".uk-active"), this.connect.length && (this.connect.children().attr("aria-hidden", "true"), this.connect.on("click", "[data-uk-switcher-item]", function(c) {
                                        c.preventDefault();
                                        var d = a.$(this).attr("data-uk-switcher-item");
                                        if (b.index != d) switch (d) {
                                            case "next":
                                            case "previous":
                                                b.show(b.index + ("next" == d ? 1 : -1));
                                                break;
                                            default:
                                                b.show(parseInt(d, 10))
                                        }
                                    }), this.options.swiping && this.connect.on("swipeRight swipeLeft", function(a) {
                                        a.preventDefault(), window.getSelection().toString() || b.show(b.index + ("swipeLeft" == a.type ? 1 : -1))
                                    }));
                                    var c = this.find(this.options.toggle),
                                        d = c.filter(".uk-active");
                                    if (d.length) this.show(d, !1);
                                    else {
                                        if (this.options.active === !1) return;
                                        d = c.eq(this.options.active), this.show(d.length ? d : c.eq(0), !1)
                                    }
                                    c.not(d).attr("aria-expanded", "false"), d.attr("aria-expanded", "true"), this.on("changed.uk.dom", function() {
                                        b.connect = a.$(b.options.connect)
                                    })
                                }
                            },
                            show: function(d, e) {
                                if (!this.animating) {
                                    if (isNaN(d)) d = a.$(d);
                                    else {
                                        var f = this.find(this.options.toggle);
                                        d = 0 > d ? f.length - 1 : d, d = f.eq(f[d] ? d : 0)
                                    }
                                    var g = this,
                                        f = this.find(this.options.toggle),
                                        h = a.$(d),
                                        i = c[this.options.animation] || function(a, d) {
                                            if (!g.options.animation) return c.none.apply(g);
                                            var e = g.options.animation.split(",");
                                            return 1 == e.length && (e[1] = e[0]), e[0] = e[0].trim(), e[1] = e[1].trim(), b.apply(g, [e, a, d])
                                        };
                                    e !== !1 && a.support.animation || (i = c.none), h.hasClass("uk-disabled") || (f.attr("aria-expanded", "false"), h.attr("aria-expanded", "true"), f.filter(".uk-active").removeClass("uk-active"), h.addClass("uk-active"), this.options.connect && this.connect.length && (this.index = this.find(this.options.toggle).index(h), -1 == this.index && (this.index = 0), this.connect.each(function() {
                                        var b = a.$(this),
                                            c = a.$(b.children()),
                                            d = a.$(c.filter(".uk-active")),
                                            e = a.$(c.eq(g.index));
                                        g.animating = !0, i.apply(g, [d, e]).then(function() {
                                            d.removeClass("uk-active"), e.addClass("uk-active"), d.attr("aria-hidden", "true"), e.attr("aria-hidden", "false"), a.Utils.checkDisplay(e, !0), g.animating = !1
                                        })
                                    })), this.trigger("show.uk.switcher", [h]))
                                }
                            }
                        }), c = {
                            none: function() {
                                var b = a.$.Deferred();
                                return b.resolve(), b.promise()
                            },
                            fade: function(a, c) {
                                return b.apply(this, ["uk-animation-fade", a, c])
                            },
                            "slide-bottom": function(a, c) {
                                return b.apply(this, ["uk-animation-slide-bottom", a, c])
                            },
                            "slide-top": function(a, c) {
                                return b.apply(this, ["uk-animation-slide-top", a, c])
                            },
                            "slide-vertical": function(a, c) {
                                var d = ["uk-animation-slide-top", "uk-animation-slide-bottom"];
                                return a && a.index() > c.index() && d.reverse(), b.apply(this, [d, a, c])
                            },
                            "slide-left": function(a, c) {
                                return b.apply(this, ["uk-animation-slide-left", a, c])
                            },
                            "slide-right": function(a, c) {
                                return b.apply(this, ["uk-animation-slide-right", a, c])
                            },
                            "slide-horizontal": function(a, c) {
                                var d = ["uk-animation-slide-right", "uk-animation-slide-left"];
                                return a && a.index() > c.index() && d.reverse(), b.apply(this, [d, a, c])
                            },
                            scale: function(a, c) {
                                return b.apply(this, ["uk-animation-scale-up", a, c])
                            }
                        }, a.switcher.animations = c
                    }(UIkit),
                    function(a) {
                        "use strict";
                        a.component("tab", {
                            defaults: {
                                target: ">li:not(.uk-tab-responsive, .uk-disabled)",
                                connect: !1,
                                active: 0,
                                animation: !1,
                                duration: 200,
                                swiping: !0
                            },
                            boot: function() {
                                a.ready(function(b) {
                                    a.$("[data-uk-tab]", b).each(function() {
                                        var b = a.$(this);
                                        b.data("tab") || a.tab(b, a.Utils.options(b.attr("data-uk-tab")))
                                    })
                                })
                            },
                            init: function() {
                                var b = this;
                                this.current = !1, this.on("click.uikit.tab", this.options.target, function(c) {
                                    if (c.preventDefault(), !b.switcher || !b.switcher.animating) {
                                        var d = b.find(b.options.target).not(this);
                                        d.removeClass("uk-active").blur(), b.trigger("change.uk.tab", [a.$(this).addClass("uk-active"), b.current]), b.current = a.$(this), b.options.connect || (d.attr("aria-expanded", "false"), a.$(this).attr("aria-expanded", "true"))
                                    }
                                }), this.options.connect && (this.connect = a.$(this.options.connect)), this.responsivetab = a.$('<li class="uk-tab-responsive uk-active"><a></a></li>').append('<div class="uk-dropdown uk-dropdown-small"><ul class="uk-nav uk-nav-dropdown"></ul><div>'), this.responsivetab.dropdown = this.responsivetab.find(".uk-dropdown"), this.responsivetab.lst = this.responsivetab.dropdown.find("ul"), this.responsivetab.caption = this.responsivetab.find("a:first"), this.element.hasClass("uk-tab-bottom") && this.responsivetab.dropdown.addClass("uk-dropdown-up"), this.responsivetab.lst.on("click.uikit.tab", "a", function(c) {
                                    c.preventDefault(), c.stopPropagation();
                                    var d = a.$(this);
                                    b.element.children("li:not(.uk-tab-responsive)").eq(d.data("index")).trigger("click")
                                }), this.on("show.uk.switcher change.uk.tab", function(a, c) {
                                    b.responsivetab.caption.html(c.text())
                                }), this.element.append(this.responsivetab), this.options.connect && (this.switcher = a.switcher(this.element, {
                                    toggle: ">li:not(.uk-tab-responsive)",
                                    connect: this.options.connect,
                                    active: this.options.active,
                                    animation: this.options.animation,
                                    duration: this.options.duration,
                                    swiping: this.options.swiping
                                })), a.dropdown(this.responsivetab, {
                                    mode: "click"
                                }), b.trigger("change.uk.tab", [this.element.find(this.options.target).not(".uk-tab-responsive").filter(".uk-active")]), this.check(), a.$win.on("resize orientationchange", a.Utils.debounce(function() {
                                    b.element.is(":visible") && b.check()
                                }, 100)), this.on("display.uk.check", function() {
                                    b.element.is(":visible") && b.check()
                                })
                            },
                            check: function() {
                                var b = this.element.children("li:not(.uk-tab-responsive)").removeClass("uk-hidden");
                                if (!b.length) return void this.responsivetab.addClass("uk-hidden");
                                var c, d, e, f = b.eq(0).offset().top + Math.ceil(b.eq(0).height() / 2),
                                    g = !1;
                                if (this.responsivetab.lst.empty(), b.each(function() {
                                        a.$(this).offset().top > f && (g = !0)
                                    }), g)
                                    for (var h = 0; h < b.length; h++) c = a.$(b.eq(h)), d = c.find("a"), "none" == c.css("float") || c.attr("uk-dropdown") || (c.hasClass("uk-disabled") || (e = c[0].outerHTML.replace("<a ", '<a data-index="' + h + '" '), this.responsivetab.lst.append(e)), c.addClass("uk-hidden"));
                                this.responsivetab[this.responsivetab.lst.children("li").length ? "removeClass" : "addClass"]("uk-hidden")
                            }
                        })
                    }(UIkit),
                    function(a) {
                        "use strict";
                        a.component("cover", {
                            defaults: {
                                automute: !0
                            },
                            boot: function() {
                                a.ready(function(b) {
                                    a.$("[data-uk-cover]", b).each(function() {
                                        var b = a.$(this);
                                        b.data("cover") || a.cover(b, a.Utils.options(b.attr("data-uk-cover")))
                                    })
                                })
                            },
                            init: function() {
                                if (this.parent = this.element.parent(), a.$win.on("load resize orientationchange", a.Utils.debounce(function() {
                                        this.check()
                                    }.bind(this), 100)), this.on("display.uk.check", function() {
                                        this.element.is(":visible") && this.check()
                                    }.bind(this)), this.check(), this.element.is("iframe") && this.options.automute) {
                                    var b = this.element.attr("src");
                                    this.element.attr("src", "").on("load", function() {
                                        this.contentWindow.postMessage('{ "event": "command", "func": "mute", "method":"setVolume", "value":0}', "*")
                                    }).attr("src", [b, b.indexOf("?") > -1 ? "&" : "?", "enablejsapi=1&api=1"].join(""))
                                }
                            },
                            check: function() {
                                this.element.css({
                                    width: "",
                                    height: ""
                                }), this.dimension = {
                                    w: this.element.width(),
                                    h: this.element.height()
                                }, this.element.attr("width") && !isNaN(this.element.attr("width")) && (this.dimension.w = this.element.attr("width")), this.element.attr("height") && !isNaN(this.element.attr("height")) && (this.dimension.h = this.element.attr("height")), this.ratio = this.dimension.w / this.dimension.h;
                                var a, b, c = this.parent.width(),
                                    d = this.parent.height();
                                c / this.ratio < d ? (a = Math.ceil(d * this.ratio), b = d) : (a = c, b = Math.ceil(c / this.ratio)), this.element.css({
                                    width: a,
                                    height: b
                                })
                            }
                        })
                    }(UIkit),
                    $("#calc_budgets").click(function() {
                        calcFigures()
                    }),
                    $("input#buyer_salary").keyup(function(a) {
                        a.which >= 37 && a.which <= 40 || $(this).val(function(a, b) {
                            return b.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                        })
                    }),
                    $("#buyer_salary").focusout(function() {
                        var a = $("#buyer_salary").val();
                        a = a.replace(",", ""), a = parseInt(a), 18e3 > a ? ($(".buyer_salary_val").addClass("visible"), $("#buyer-salary-input-val").removeClass("visible")) : ($("#buyer-salary-input-val").addClass("visible"), $(".buyer_salary_val").removeClass("visible"), calcFigures())
                    }),
                    valField("unm_reg_full_name"),
                    valField("unm_reg_email"),
                    valField("unm_reg_phone"),
                    $(function() {
                        $.typeahead({
                            input: "#area_search",
                            minLength: 1,
                            maxItem: 8,
                            maxItemPerGroup: 6,
                            order: "asc",
                            hint: !0,
                            cache: !1,
                            compression: !1,
                            display: ["name_friendly", "postcode_area"],
                            template: '<span><span class="name">{{name_friendly}}</span><span class="division">, {{postcode_area}}</span></span>',
                            source: {
                                teams: {
                                    url: "data/search_data3.json"
                                }
                            },
                            callback: {
                                onClickAfter: function(a, b, c, d) {
                                    calcFigures(), showFigures(), $("#buyer-area-input-val").addClass("visible")
                                }
                            }
                        })
                    }),
                    function(a, b, c, d) {
                        a.Typeahead = {
                            version: "2.0.0"
                        };
                        var e = {
                                input: null,
                                minLength: 2,
                                maxItem: 8,
                                dynamic: !1,
                                delay: 300,
                                order: null,
                                offset: !1,
                                hint: !1,
                                accent: !1,
                                highlight: !0,
                                group: !1,
                                maxItemPerGroup: null,
                                dropdownFilter: !1,
                                dynamicFilter: null,
                                backdrop: !1,
                                cache: !1,
                                ttl: 36e5,
                                compression: !1,
                                suggestion: !1,
                                searchOnFocus: !1,
                                resultContainer: null,
                                generateOnLoad: null,
                                mustSelectItem: !1,
                                href: null,
                                display: ["display"],
                                template: null,
                                emptyTemplate: !1,
                                source: null,
                                callback: {
                                    onInit: null,
                                    onReady: null,
                                    onSearch: null,
                                    onResult: null,
                                    onLayoutBuiltBefore: null,
                                    onLayoutBuiltAfter: null,
                                    onNavigate: null,
                                    onMouseEnter: null,
                                    onMouseLeave: null,
                                    onClickBefore: null,
                                    onClickAfter: null,
                                    onSendRequest: null,
                                    onReceiveRequest: null,
                                    onSubmit: null
                                },
                                selector: {
                                    container: "typeahead-container",
                                    group: "typeahead-group",
                                    result: "typeahead-result",
                                    list: "typeahead-list",
                                    display: "typeahead-display",
                                    query: "typeahead-query",
                                    filter: "typeahead-filter",
                                    filterButton: "typeahead-filter-button",
                                    filterValue: "typeahead-filter-value",
                                    dropdown: "typeahead-dropdown",
                                    dropdownCarret: "typeahead-caret",
                                    button: "typeahead-button",
                                    backdrop: "typeahead-backdrop",
                                    hint: "typeahead-hint"
                                },
                                debug: !1
                            },
                            f = ".typeahead",
                            g = {
                                from: "ãàáäâẽèéëêìíïîõòóöôùúüûñç",
                                to: "aaaaaeeeeeiiiiooooouuuunc"
                            },
                            h = function(a, b) {
                                this.rawQuery = "", this.query = "", this.source = {}, this.isGenerated = null, this.generatedGroupCount = 0, this.groupCount = 0, this.groupBy = "group", this.result = [], this.resultCount = 0, this.options = b, this.node = a, this.container = null, this.resultContainer = null, this.item = null, this.xhr = {}, this.hintIndex = null, this.filters = {
                                    dropdown: {},
                                    dynamic: {}
                                }, this.requests = {}, this.backdrop = {}, this.hint = {}, this.__construct()
                            };
                        h.prototype = {
                            extendOptions: function() {
                                this.options.dynamic && (this.options.cache = !1, this.options.compression = !1), this.options.cache && (this.options.cache = function() {
                                    var b = "undefined" != typeof a.localStorage;
                                    if (b) try {
                                        a.localStorage.setItem("typeahead", "typeahead"), a.localStorage.removeItem("typeahead")
                                    } catch (c) {
                                        b = !1
                                    }
                                    return b
                                }()), this.options.compression && ("object" == typeof LZString && this.options.cache || (j.log({
                                    node: this.node.selector,
                                    "function": "extendOptions()",
                                    message: "Missing LZString Library or options.cache, no compression will occur."
                                }), j.print(), this.options.compression = !1)), "undefined" == typeof this.options.maxItem || /^\d+$/.test(this.options.maxItem) && 0 !== this.options.maxItem || (this.options.maxItem = 1 / 0), this.options.maxItemPerGroup && !/^\d+$/.test(this.options.maxItemPerGroup) && (this.options.maxItemPerGroup = null), !this.options.display || this.options.display instanceof Array || (this.options.display = [this.options.display]), !this.options.group || this.options.group instanceof Array || (this.options.group = [this.options.group]), !this.options.dynamicFilter || this.options.dynamicFilter instanceof Array || (this.options.dynamicFilter = [this.options.dynamicFilter]), this.options.resultContainer && ("string" == typeof this.options.resultContainer && (this.options.resultContainer = c(this.options.resultContainer)), this.options.resultContainer instanceof jQuery && this.options.resultContainer[0] ? this.resultContainer = this.options.resultContainer : (j.log({
                                    node: this.node.selector,
                                    "function": "extendOptions()",
                                    message: 'Invalid jQuery selector or jQuery Object for "options.resultContainer".'
                                }), j.print())), this.options.group && "string" == typeof this.options.group[0] && this.options.maxItemPerGroup && (this.groupBy = this.options.group[0]), this.options.callback && this.options.callback.onClick && (this.options.callback.onClickBefore = this.options.callback.onClick, delete this.options.callback.onClick), this.options = c.extend(!0, {}, e, this.options)
                            },
                            unifySourceFormat: function() {
                                if (this.options.source instanceof Array) return this.options.source = {
                                    group: {
                                        data: this.options.source
                                    }
                                }, this.groupCount += 1, !0;
                                ("undefined" != typeof this.options.source.data || "undefined" != typeof this.options.source.url) && (this.options.source = {
                                    group: this.options.source
                                });
                                for (var a in this.options.source)
                                    if (this.options.source.hasOwnProperty(a)) {
                                        if (("string" == typeof this.options.source[a] || this.options.source[a] instanceof Array) && (this.options.source[a] = {
                                                url: this.options.source[a]
                                            }), !this.options.source[a].data && !this.options.source[a].url) return j.log({
                                            node: this.node.selector,
                                            "function": "unifySourceFormat()",
                                            arguments: JSON.stringify(this.options.source),
                                            message: 'Undefined "options.source.' + a + '.[data|url]" is Missing - Typeahead dropped'
                                        }), j.print(), !1;
                                        !this.options.source[a].display || this.options.source[a].display instanceof Array || (this.options.source[a].display = [this.options.source[a].display]), this.options.source[a].ignore && (this.options.source[a].ignore instanceof RegExp || (j.log({
                                            node: this.node.selector,
                                            "function": "unifySourceFormat()",
                                            arguments: JSON.stringify(this.options.source[a].ignore),
                                            message: "Invalid ignore RegExp."
                                        }), j.print(), delete this.options.source[a].ignore)), this.groupCount += 1
                                    }
                                return !0
                            },
                            init: function() {
                                this.helper.executeCallback(this.options.callback.onInit, [this.node]), this.container = this.node.closest("." + this.options.selector.container), j.log({
                                    node: this.node.selector,
                                    "function": "init()",
                                    message: "OK - Typeahead activated on " + this.node.selector
                                }), j.print()
                            },
                            delegateEvents: function() {
                                var a = this,
                                    b = ["focus" + f, "input" + f, "propertychange" + f, "keydown" + f, "dynamic" + f, "generateOnLoad" + f];
                                this.container.off(f).on("click" + f + " touchstart" + f, function(b) {
                                    b.stopPropagation(), a.options.dropdownFilter && a.container.find("." + a.options.selector.dropdown.replace(" ", ".")).hide()
                                }), this.node.closest("form").on("submit", function(b) {
                                    return a.options.mustSelectItem && a.helper.isEmpty(a.item) ? void b.preventDefault() : (a.hideLayout(), a.rawQuery = "", a.query = "", a.helper.executeCallback(a.options.callback.onSubmit, [a.node, this, a.item, b]) ? !1 : void 0)
                                });
                                var c = !1;
                                this.node.off(f).on(b.join(" "), function(b) {
                                    switch (b.type) {
                                        case "generateOnLoad":
                                        case "focus":
                                            a.isGenerated && a.options.searchOnFocus && a.query.length >= a.options.minLength && a.showLayout(), null !== a.isGenerated || a.options.dynamic || a.generateSource();
                                            break;
                                        case "keydown":
                                            a.isGenerated && a.result.length && b.keyCode && ~[13, 27, 38, 39, 40].indexOf(b.keyCode) && (c = !0, a.navigate(b));
                                            break;
                                        case "propertychange":
                                            if (c) {
                                                c = !1;
                                                break
                                            }
                                        case "input":
                                            if (a.rawQuery = a.node[0].value.toString(), a.query = a.node[0].value.replace(/^\s+/, "").toString(), a.options.hint && a.hint.container && "" !== a.hint.container.val() && 0 !== a.hint.container.val().indexOf(a.rawQuery) && a.hint.container.val(""), a.options.dynamic) return a.isGenerated = null, void a.helper.typeWatch(function() {
                                                a.query.length >= a.options.minLength ? a.generateSource() : a.hideLayout()
                                            }, a.options.delay);
                                        case "dynamic":
                                            if (!a.isGenerated) break;
                                            if (a.query.length < a.options.minLength) {
                                                a.hideLayout();
                                                break
                                            }
                                            a.searchResult(), a.buildLayout(), a.result.length > 0 || a.options.emptyTemplate ? a.showLayout() : a.hideLayout()
                                    }
                                }), this.options.generateOnLoad && this.node.trigger("generateOnLoad" + f)
                            },
                            generateSource: function() {
                                if (!this.isGenerated || this.options.dynamic) {
                                    if (this.generatedGroupCount = 0, this.isGenerated = !1, !this.helper.isEmpty(this.xhr)) {
                                        for (var b in this.xhr) this.xhr.hasOwnProperty(b) && this.xhr[b].abort();
                                        this.xhr = {}
                                    }
                                    var c, d, e;
                                    for (c in this.options.source)
                                        if (this.options.source.hasOwnProperty(c)) {
                                            if (this.options.cache && (d = a.localStorage.getItem(this.node.selector + ":" + c))) {
                                                this.options.compression && (d = LZString.decompressFromUTF16(d)), e = !1;
                                                try {
                                                    d = JSON.parse(d + ""), d.data && d.ttl > (new Date).getTime() ? (this.populateSource(d.data, c), e = !0, j.log({
                                                        node: this.node.selector,
                                                        "function": "generateSource()",
                                                        message: 'Source for group "' + c + '" found in localStorage.'
                                                    }), j.print()) : a.localStorage.removeItem(this.node.selector + ":" + c)
                                                } catch (f) {}
                                                if (e) continue
                                            }!this.options.source[c].data || this.options.source[c].url ? this.options.source[c].url && (this.requests[c] || (this.requests[c] = this.generateRequestObject(c))) : this.populateSource("function" == typeof this.options.source[c].data && this.options.source[c].data() || this.options.source[c].data, c)
                                        }
                                    this.handleRequests()
                                }
                            },
                            generateRequestObject: function(a) {
                                var b = {
                                    request: {
                                        url: null,
                                        dataType: "json"
                                    },
                                    extra: {
                                        path: null,
                                        group: a,
                                        callback: {
                                            done: null,
                                            fail: null,
                                            complete: null,
                                            always: null
                                        }
                                    },
                                    validForGroup: [a]
                                };
                                !(this.options.source[a].url instanceof Array) && this.options.source[a].url instanceof Object && (this.options.source[a].url = [this.options.source[a].url]), this.options.source[a].url instanceof Array ? (this.options.source[a].url[0] instanceof Object ? (this.options.source[a].url[0].callback && (b.extra.callback = this.options.source[a].url[0].callback, delete this.options.source[a].url[0].callback), b.request = c.extend(!0, b.request, this.options.source[a].url[0])) : "string" == typeof this.options.source[a].url[0] && (b.request.url = this.options.source[a].url[0]), this.options.source[a].url[1] && "string" == typeof this.options.source[a].url[1] && (b.extra.path = this.options.source[a].url[1])) : "string" == typeof this.options.source[a].url && (b.request.url = this.options.source[a].url), "jsonp" === b.request.dataType.toLowerCase() && (b.request.jsonpCallback = "callback_" + a);
                                var d;
                                for (var e in this.requests)
                                    if (this.requests.hasOwnProperty(e) && (d = JSON.stringify(this.requests[e].request), d === JSON.stringify(b.request))) {
                                        this.requests[e].validForGroup.push(a), b.isDuplicated = !0, delete b.validForGroup;
                                        break
                                    }
                                return b
                            },
                            handleRequests: function() {
                                var a = this,
                                    b = Object.keys(this.requests).length;
                                b && this.helper.executeCallback(this.options.callback.onSendRequest, [this.node, this.query]);
                                for (var d in this.requests) this.requests.hasOwnProperty(d) && (this.requests[d].isDuplicated || ! function(d, e) {
                                    var f;
                                    if (e.request.data)
                                        for (var g in e.request.data)
                                            if (e.request.data.hasOwnProperty(g) && ~String(e.request.data[g]).indexOf("{{query}}")) {
                                                e = c.extend(!0, {}, e), e.request.data[g] = e.request.data[g].replace("{{query}}", a.query);
                                                break
                                            }
                                    a.xhr[d] = c.ajax(e.request).done(function(c, d, g) {
                                        for (var h, i = 0; i < e.validForGroup.length; i++) f = a.requests[e.validForGroup[i]], f.extra.callback.done instanceof Function && (h = f.extra.callback.done(c, d, g), c = h instanceof Array && h || c, h instanceof Array || (j.log({
                                            node: a.node.selector,
                                            "function": "Ajax.callback.done()",
                                            message: "Invalid returned data has to be an Array"
                                        }), j.print())), a.populateSource(c, f.extra.group, f.extra.path), b -= 1, 0 === b && a.helper.executeCallback(a.options.callback.onReceiveRequest, [a.node, a.query])
                                    }).fail(function(b, c, d) {
                                        for (var g = 0; g < e.validForGroup.length; g++) f = a.requests[e.validForGroup[g]], f.extra.callback.fail instanceof Function && f.extra.callback.fail(b, c, d);
                                        j.log({
                                            node: a.node.selector,
                                            "function": "Ajax.callback.fail()",
                                            message: "Request failed"
                                        }), j.print()
                                    }).complete(function(b, c) {
                                        for (var d = 0; d < e.validForGroup.length; d++) f = a.requests[e.validForGroup[d]], f.extra.callback.complete instanceof Function && f.extra.callback.complete(b, c)
                                    }).always(function(b, c, d) {
                                        for (var g = 0; g < e.validForGroup.length; g++) f = a.requests[e.validForGroup[g]], f.extra.callback.always instanceof Function && f.extra.callback.always(b, c, d)
                                    })
                                }(d, this.requests[d]))
                            },
                            populateSource: function(a, b, c) {
                                var d, e;
                                if (a && "string" == typeof c)
                                    for (var f = c.split("."), g = 0; g < f.length;) {
                                        if (e = a[f[g++]], "undefined" == typeof e) {
                                            j.log({
                                                node: this.node.selector,
                                                "function": "populateSource()",
                                                arguments: c,
                                                message: "Invalid data path."
                                            }), j.print();
                                            break
                                        }
                                        a = e
                                    }
                                a instanceof Array || (j.log({
                                    node: this.node.selector,
                                    "function": "populateSource()",
                                    arguments: JSON.stringify({
                                        group: b
                                    }),
                                    message: "Invalid data type, must be Array type."
                                }), j.print(), a = []), d = this.options.source[b].url && this.options.source[b].data, d && ("function" == typeof d && (d = d()), d instanceof Array ? a = a.concat(d) : (j.log({
                                    node: this.node.selector,
                                    "function": "populateSource()",
                                    arguments: JSON.stringify(d),
                                    message: "WARNING - this.options.source." + b + ".data Must be an Array or a function that returns an Array."
                                }), j.print()));
                                var h, i;
                                i = this.options.source[b].display ? this.options.source[b].display[0] : this.options.display[0];
                                for (var k = 0; k < a.length; k++) "string" == typeof a[k] && (h = {}, h[i] = a[k], a[k] = h);
                                if (this.source[b] = a, this.options.cache && !localStorage.getItem(this.node.selector + ":" + b)) {
                                    var l = JSON.stringify({
                                        data: a,
                                        ttl: (new Date).getTime() + this.options.ttl
                                    });
                                    this.options.compression && (l = LZString.compressToUTF16(l)), localStorage.setItem(this.node.selector + ":" + b, l)
                                }
                                this.incrementGeneratedGroup()
                            },
                            incrementGeneratedGroup: function() {
                                this.generatedGroupCount += 1, this.groupCount === this.generatedGroupCount && (this.isGenerated = !0, this.node.trigger("dynamic" + f))
                            },
                            navigate: function(a) {
                                this.helper.executeCallback(this.options.callback.onNavigate, [this.node, this.query, a]);
                                var b = this.resultContainer.find("> ul > li:not([data-search-group])"),
                                    c = b.filter(".active"),
                                    d = c[0] && b.index(c) || null;
                                if (27 === a.keyCode) return a.preventDefault(), void this.hideLayout();
                                if (13 === a.keyCode) {
                                    if (c.length > 0) return a.preventDefault(), a.stopPropagation(), void c.find("a:first").trigger("click");
                                    if (this.options.mustSelectItem && this.helper.isEmpty(this.item)) return;
                                    return void this.hideLayout()
                                }
                                if (39 === a.keyCode) return void(d ? b.eq(d).find("a:first").trigger("click") : this.options.hint && "" !== this.hint.container.val() && this.helper.getCaret(this.node[0]) >= this.query.length && b.find('a[data-index="' + this.hintIndex + '"]').trigger("click"));
                                if (b.length > 0 && c.removeClass("active"), 38 === a.keyCode ? (a.preventDefault(), c.length > 0 ? d - 1 >= 0 && b.eq(d - 1).addClass("active") : b.last().addClass("active")) : 40 === a.keyCode && (a.preventDefault(), c.length > 0 ? d + 1 < b.length && b.eq(d + 1).addClass("active") : b.first().addClass("active")), c = b.filter(".active"), this.options.hint && this.hint.container && (c.length > 0 ? this.hint.container.css("color", this.hint.container.css("background-color") || "fff") : this.hint.container.css("color", this.hint.css.color)), c.length > 0) {
                                    var e = c.find("a:first").attr("data-index");
                                    e && this.node.val(this.result[e][this.result[e].matchedKey])
                                } else this.node.val(this.rawQuery)
                            },
                            searchResult: function() {
                                this.item = {}, this.helper.executeCallback(this.options.callback.onSearch, [this.node, this.query]), this.result = [], this.resultCount = 0;
                                var a, b, c, d, e, f, g = this,
                                    h = this.query,
                                    i = {},
                                    k = this.filters.dropdown && this.filters.dropdown.key || this.groupBy,
                                    l = this.filters.dynamic && !this.helper.isEmpty(this.filters.dynamic),
                                    m = {};
                                this.options.accent && (h = this.helper.removeAccent(h));
                                for (a in this.source)
                                    if (this.source.hasOwnProperty(a) && (!this.filters.dropdown || "group" !== this.filters.dropdown.key || this.filters.dropdown.value === a)) {
                                        if (this.options.maxItemPerGroup && "group" === k)
                                            if (i[a]) {
                                                if (i[a] >= this.options.maxItemPerGroup && !this.options.callback.onResult) break
                                            } else i[a] = 0;
                                        f = "undefined" == typeof this.options.source[a].filter || this.options.source[a].filter === !0;
                                        for (var n = 0; n < this.source[a].length && (!(this.result.length >= this.options.maxItem) || this.options.callback.onResult); n++)
                                            if (!l || this.dynamicFilter.validate.apply(this, [this.source[a][n]])) {
                                                if (b = this.source[a][n], b.group = a, this.options.maxItemPerGroup && "group" !== k)
                                                    if (i[b[k]]) {
                                                        if (i[b[k]] >= this.options.maxItemPerGroup && !this.options.callback.onResult) continue
                                                    } else i[b[k]] = 0;
                                                e = this.options.source[a].display || this.options.display;
                                                for (var o = 0; o < e.length; o++) {
                                                    if (f) {
                                                        if (d = b[e[o]], !d) {
                                                            m[o] = {
                                                                display: e[o],
                                                                data: b
                                                            };
                                                            continue
                                                        }
                                                        if (d = d.toString(), this.options.accent && (d = this.helper.removeAccent(d)), c = d.toLowerCase().indexOf(h.toLowerCase()) + 1, !c) continue;
                                                        if (c && this.options.offset && 1 !== c) continue;
                                                        if (this.options.source[a].ignore && this.options.source[a].ignore.test(d)) continue
                                                    }
                                                    if (!this.filters.dropdown || this.filters.dropdown.value == b[this.filters.dropdown.key]) {
                                                        if (this.resultCount += 1, this.options.callback.onResult && this.result.length >= this.options.maxItem || this.options.maxItemPerGroup && i[b[k]] >= this.options.maxItemPerGroup) break;
                                                        b.matchedKey = e[o], this.result.push(b), this.options.maxItemPerGroup && (i[b[k]] += 1);
                                                        break
                                                    }
                                                }
                                            }
                                    }
                                if (this.helper.isEmpty(m) || (j.log({
                                        node: this.node.selector,
                                        "function": "searchResult()",
                                        arguments: JSON.stringify(m),
                                        message: "Missing keys for display, make sure options.display is set properly."
                                    }), j.print()), this.options.order) {
                                    for (var p, e = [], o = 0; o < this.result.length; o++) p = this.options.source[this.result[o].group].display || this.options.display, ~e.indexOf(p[0]) || e.push(p[0]);
                                    this.result.sort(g.helper.sort(e, "asc" === g.options.order, function(a) {
                                        return a.toString().toUpperCase()
                                    }))
                                }
                                this.helper.executeCallback(this.options.callback.onResult, [this.node, this.query, this.result, this.resultCount])
                            },
                            buildLayout: function() {
                                this.resultContainer || (this.resultContainer = c("<div/>", {
                                    "class": this.options.selector.result
                                }), this.container.append(this.resultContainer));
                                var a = this.query.toLowerCase();
                                this.options.accent && (a = this.helper.removeAccent(a));
                                var b = this,
                                    d = c("<ul/>", {
                                        "class": this.options.selector.list + (b.helper.isEmpty(b.result) ? " empty" : ""),
                                        html: function() {
                                            if (b.options.emptyTemplate && b.helper.isEmpty(b.result)) return c("<li/>", {
                                                html: c("<a/>", {
                                                    href: "javascript:;",
                                                    html: "function" == typeof b.options.emptyTemplate && b.options.emptyTemplate(b.query) || b.options.emptyTemplate.replace(/\{\{query}}/gi, b.query)
                                                })
                                            });
                                            for (var d in b.result) b.result.hasOwnProperty(d) && ! function(d, e, f) {
                                                var g, h, i, k, l, m = e.group,
                                                    n = {},
                                                    o = b.options.source[e.group].display || b.options.display,
                                                    p = b.options.source[e.group].href || b.options.href;
                                                b.options.group && ("boolean" != typeof b.options.group[0] && e[b.options.group[0]] && (m = e[b.options.group[0]]), c(f).find('li[data-search-group="' + m + '"]')[0] || c(f).append(c("<li/>", {
                                                    "class": b.options.selector.group,
                                                    html: c("<a/>", {
                                                        href: "javascript:;",
                                                        html: b.options.group[1] && b.options.group[1].replace(/(\{\{group}})/gi, e[b.options.group[0]] || m) || m
                                                    }),
                                                    "data-search-group": m
                                                })));
                                                for (var q = 0; q < o.length; q++) i = o[q], n[i] = e[i], b.options.highlight && (n[i] ? n[i] = b.helper.highlight(n[i], a, b.options.accent) : (j.log({
                                                    node: b.node.selector,
                                                    "function": "buildLayout()",
                                                    arguments: JSON.stringify(e),
                                                    message: 'WARNING - Missing display key: "' + i + '"'
                                                }), j.print()));
                                                g = c("<li/>", {
                                                    html: c("<a/>", {
                                                        href: function() {
                                                            return p && ("string" == typeof p ? p = p.replace(/\{\{([a-z0-9_\-\.]+)\|?(\w+)?}}/gi, function(a, c, d) {
                                                                var f = b.helper.namespace(c, e, "get") || a;
                                                                return d && "raw" === d ? f : f !== a && b.helper.slugify(f) || f
                                                            }) : "function" == typeof p && (p = p(e)), e.href = p), p || "javascript:;"
                                                        },
                                                        "data-group": m,
                                                        "data-index": d,
                                                        html: function() {
                                                            l = e.group && b.options.source[e.group].template || b.options.template, h = l ? l.replace(/\{\{([a-z0-9_\-\.]+)\|?(\w+)?}}/gi, function(a, c, d) {
                                                                var f = b.helper.namespace(c, e, "get") || a;
                                                                return d && "raw" === d ? f : b.helper.namespace(c, n, "get") || f
                                                            }) : '<span class="' + b.options.selector.display + '">' + b.helper.joinObject(n, " ") + "</span>", c(this).append(h)
                                                        },
                                                        click: function(a) {
                                                            return b.options.mustSelectItem && b.helper.isEmpty(e) ? void a.preventDefault() : (b.helper.executeCallback(b.options.callback.onClickBefore, [b.node, this, e, a]), void(a.isDefaultPrevented() || (a.preventDefault(), b.query = b.rawQuery = e[e.matchedKey].toString(), b.node.val(b.query).focus(), b.searchResult(), b.buildLayout(), b.hideLayout(), b.item = e, b.helper.executeCallback(b.options.callback.onClickAfter, [b.node, this, e, a]))))
                                                        },
                                                        mouseenter: function(a) {
                                                            c(this).closest("ul").find("li.active").removeClass("active"), c(this).closest("li").addClass("active"), b.helper.executeCallback(b.options.callback.onMouseEnter, [b.node, this, e, a])
                                                        },
                                                        mouseleave: function(a) {
                                                            c(this).closest("li").removeClass("active"), b.helper.executeCallback(b.options.callback.onMouseLeave, [b.node, this, e, a])
                                                        }
                                                    })
                                                }), b.options.group ? (k = c(f).find('a[data-group="' + m + '"]:last').closest("li"), k[0] || (k = c(f).find('li[data-search-group="' + m + '"]')), c(g).insertAfter(k)) : c(f).append(g)
                                            }(d, b.result[d], this)
                                        }
                                    });
                                if (this.options.callback.onLayoutBuiltBefore) {
                                    var f = this.helper.executeCallback(this.options.callback.onLayoutBuiltBefore, [this.node, this.query, this.result, d]);
                                    f instanceof jQuery ? d = f : (j.log({
                                        node: this.node.selector,
                                        "function": "callback.onLayoutBuiltBefore()",
                                        message: "Invalid returned value - You must return resultHtmlList jQuery Object"
                                    }), j.print())
                                }
                                if (this.container.addClass("result"), this.resultContainer.html(d), this.options.callback.onLayoutBuiltAfter && this.helper.executeCallback(this.options.callback.onLayoutBuiltAfter, [this.node, this.query, this.result]), this.options.backdrop && (this.backdrop.container ? this.backdrop.container.show() : (this.backdrop.css = c.extend({
                                        opacity: .6,
                                        filter: "alpha(opacity=60)",
                                        position: "fixed",
                                        top: 0,
                                        right: 0,
                                        bottom: 0,
                                        left: 0,
                                        "z-index": 1040,
                                        "background-color": "#000"
                                    }, this.options.backdrop), this.backdrop.container = c("<div/>", {
                                        "class": this.options.selector.backdrop,
                                        css: this.backdrop.css,
                                        click: function() {
                                            b.hideLayout()
                                        }
                                    }).insertAfter(this.container)), this.container.addClass("backdrop").css({
                                        "z-index": this.backdrop.css["z-index"] + 1,
                                        position: "relative"
                                    })), this.options.hint) {
                                    var g = "";
                                    if (this.result.length > 0 && this.query.length > 0) {
                                        this.hint.container || (this.hint.css = c.extend({
                                                "border-color": "transparent",
                                                position: "absolute",
                                                top: 0,
                                                display: "inline",
                                                "z-index": -1,
                                                "float": "none",
                                                color: "silver",
                                                "box-shadow": "none",
                                                cursor: "default",
                                                "-webkit-user-select": "none",
                                                "-moz-user-select": "none",
                                                "-ms-user-select": "none",
                                                "user-select": "none"
                                            }, this.options.hint), this.hint.container = c("<input/>", {
                                                type: this.node.attr("type"),
                                                "class": this.node.attr("class"),
                                                readonly: !0,
                                                unselectable: "on",
                                                tabindex: -1,
                                                click: function() {
                                                    b.node.focus()
                                                }
                                            }).addClass(e.selector.hint).css(this.hint.css).insertAfter(this.node),
                                            this.node.parent().css({
                                                position: "relative"
                                            })), this.hint.container.css("color", this.hint.css.color);
                                        var h, i, k;
                                        this.hintIndex = null;
                                        for (var l = 0; l < this.result.length; l++) {
                                            i = this.result[l].group, h = b.options.source[i].display || b.options.display;
                                            for (var m = 0; m < h.length; m++)
                                                if (k = String(this.result[l][h[m]]).toLowerCase(), this.options.accent && (k = this.helper.removeAccent(k)), 0 === k.indexOf(a)) {
                                                    g = String(this.result[l][h[m]]), this.hintIndex = l;
                                                    break
                                                }
                                            if (null !== this.hintIndex) break
                                        }
                                    }
                                    this.hint.container && this.hint.container.val(g.length > 0 && this.rawQuery + g.substring(this.query.length) || "").show()
                                }
                            },
                            buildDropdownLayout: function() {
                                function a(a) {
                                    "*" === a.value ? delete this.filters.dropdown : this.filters.dropdown = a, this.container.removeClass("filter").find("." + this.options.selector.filterValue).html(a.display || a.value), this.node.trigger("dynamic" + f), this.node.focus()
                                }
                                if (this.options.dropdownFilter) {
                                    var b, d = this;
                                    if ("boolean" == typeof this.options.dropdownFilter) b = "all";
                                    else if ("string" == typeof this.options.dropdownFilter) b = this.options.dropdownFilter;
                                    else if (this.options.dropdownFilter instanceof Array)
                                        for (var e = 0; e < this.options.dropdownFilter.length; e++)
                                            if ("*" === this.options.dropdownFilter[e].value && this.options.dropdownFilter[e].display) {
                                                b = this.options.dropdownFilter[e].display;
                                                break
                                            }
                                    c("<span/>", {
                                        "class": this.options.selector.filter,
                                        html: function() {
                                            c(this).append(c("<button/>", {
                                                type: "button",
                                                "class": d.options.selector.filterButton,
                                                html: "<span class='" + d.options.selector.filterValue + "'>" + b + "</span> <span class='" + d.options.selector.dropdownCarret + "'></span>",
                                                click: function(a) {
                                                    a.stopPropagation();
                                                    var b = d.container.find("." + d.options.selector.dropdown.replace(" ", "."));
                                                    b.is(":visible") ? (d.container.removeClass("filter"), b.hide(), c("html").off(f + ".dropdownFilter")) : (d.container.addClass("filter"), b.show(), c("html").off(f + ".dropdownFilter").on("click" + f + ".dropdownFilter touchstart" + f + ".dropdownFilter", function() {
                                                        d.container.removeClass("filter"), b.hide(), c(this).off(f + ".dropdownFilter")
                                                    }))
                                                }
                                            })), c(this).append(c("<ul/>", {
                                                "class": d.options.selector.dropdown,
                                                html: function() {
                                                    var b = d.options.dropdownFilter;
                                                    if (~["string", "boolean"].indexOf(typeof d.options.dropdownFilter)) {
                                                        b = [];
                                                        for (var e in d.options.source) d.options.source.hasOwnProperty(e) && b.push({
                                                            key: "group",
                                                            value: e
                                                        });
                                                        b.push({
                                                            key: "group",
                                                            value: "*",
                                                            display: "string" == typeof d.options.dropdownFilter && d.options.dropdownFilter || "All"
                                                        })
                                                    }
                                                    for (var f = 0; f < b.length; f++) ! function(b, e, f) {
                                                        return !e.key && "*" !== e.value || !e.value ? (j.log({
                                                            node: d.node.selector,
                                                            "function": "buildDropdownLayout()",
                                                            arguments: JSON.stringify(e),
                                                            message: 'WARNING - Missing key or value, skipping dropdown filter."'
                                                        }), void j.print()) : ("*" === e.value && c(f).append(c("<li/>", {
                                                            "class": "divider"
                                                        })), void c(f).append(c("<li/>", {
                                                            html: c("<a/>", {
                                                                href: "javascript:;",
                                                                html: e.display || e.value,
                                                                click: function(b) {
                                                                    b.preventDefault(), a.apply(d, [e])
                                                                }
                                                            })
                                                        })))
                                                    }(f, b[f], this)
                                                }
                                            }))
                                        }
                                    }).insertAfter(d.container.find("." + d.options.selector.query))
                                }
                            },
                            dynamicFilter: {
                                validate: function(a) {
                                    var b, c, d = null,
                                        e = null;
                                    for (var f in this.filters.dynamic)
                                        if (this.filters.dynamic.hasOwnProperty(f) && (c = ~f.indexOf(".") ? this.helper.namespace(f, a, "get") : a[f], "|" !== this.filters.dynamic[f].modifier || d || (d = c == this.filters.dynamic[f].value || !1), "&" === this.filters.dynamic[f].modifier)) {
                                            if (c != this.filters.dynamic[f].value) {
                                                e = !1;
                                                break
                                            }
                                            e = !0
                                        }
                                    return b = d, null !== e && (b = e, e === !0 && null !== d && (b = d)), !!b
                                },
                                set: function(a, b) {
                                    var c = a.match(/^([|&])?(.+)/);
                                    b ? this.filters.dynamic[c[2]] = {
                                        modifier: c[1] || "|",
                                        value: b
                                    } : delete this.filters.dynamic[c[2]], this.searchResult(), this.buildLayout()
                                },
                                bind: function() {
                                    if (this.options.dynamicFilter)
                                        for (var a, b = this, d = 0; d < this.options.dynamicFilter.length; d++) a = this.options.dynamicFilter[d], "string" == typeof a.selector && (a.selector = c(a.selector)), a.selector instanceof jQuery && a.selector[0] && a.key ? ! function(a) {
                                            a.selector.off(f).on("change" + f, function() {
                                                b.dynamicFilter.set.apply(b, [a.key, b.dynamicFilter.getValue(this)])
                                            }).trigger("change" + f)
                                        }(a) : (j.log({
                                            node: this.node.selector,
                                            "function": "buildDynamicLayout()",
                                            message: 'Invalid jQuery selector or jQuery Object for "filter.selector" or missing filter.key'
                                        }), j.print())
                                },
                                getValue: function(a) {
                                    var b;
                                    return "SELECT" === a.tagName ? b = a.value : "INPUT" === a.tagName && ("checkbox" === a.type ? b = a.checked || null : "radio" === a.type && a.checked && (b = a.value)), b
                                }
                            },
                            showLayout: function() {
                                var a = this;
                                c("html").off(f).on("click" + f + " touchstart" + f, function() {
                                    a.hideLayout(), c(this).off(f)
                                }), (this.result.length || this.options.emptyTemplate) && this.container.addClass("result hint backdrop")
                            },
                            hideLayout: function() {
                                this.container.removeClass("result hint backdrop filter")
                            },
                            __construct: function() {
                                this.extendOptions(), this.unifySourceFormat() && (this.init(), this.delegateEvents(), this.buildDropdownLayout(), this.dynamicFilter.bind.apply(this), this.helper.executeCallback(this.options.callback.onReady, [this.node]))
                            },
                            helper: {
                                isEmpty: function(a) {
                                    for (var b in a)
                                        if (a.hasOwnProperty(b)) return !1;
                                    return !0
                                },
                                removeAccent: function(a) {
                                    return "string" == typeof a ? a = a.toLowerCase().replace(new RegExp("[" + g.from + "]", "g"), function(a) {
                                        return g.to[g.from.indexOf(a)]
                                    }) : void 0
                                },
                                slugify: function(a) {
                                    return a = this.removeAccent(a), a = a.replace(/[^-a-z0-9]+/g, "-").replace(/-+/g, "-").trim("-")
                                },
                                sort: function(a, b, c) {
                                    var d = function(b) {
                                        for (var d = 0; d < a.length; d++)
                                            if ("undefined" != typeof b[a[d]]) return c(b[a[d]])
                                    };
                                    return b = [-1, 1][+!!b],
                                        function(a, c) {
                                            return a = d(a), c = d(c), b * ((a > c) - (c > a))
                                        }
                                },
                                replaceAt: function(a, b, c, d) {
                                    return a.substring(0, b) + d + a.substring(b + c)
                                },
                                highlight: function(a, b, c) {
                                    a = String(a);
                                    var d = a.toLowerCase().indexOf(b.toLowerCase());
                                    return c && (d = this.removeAccent(a).indexOf(this.removeAccent(b))), -1 === d || 0 === b.length ? a : this.replaceAt(a, d, b.length, "<strong>" + a.substr(d, b.length) + "</strong>")
                                },
                                joinObject: function(a, b) {
                                    var c = "",
                                        d = 0;
                                    for (var e in a) a.hasOwnProperty(e) && (0 !== d && (c += b), c += a[e], d++);
                                    return c
                                },
                                getCaret: function(a) {
                                    if (a.selectionStart) return a.selectionStart;
                                    if (b.selection) {
                                        a.focus();
                                        var c = b.selection.createRange();
                                        if (null == c) return 0;
                                        var d = a.createTextRange(),
                                            e = d.duplicate();
                                        return d.moveToBookmark(c.getBookmark()), e.setEndPoint("EndToStart", d), e.text.length
                                    }
                                    return 0
                                },
                                executeCallback: function(b, d) {
                                    if (!b) return !1;
                                    var e, f = d[0];
                                    if ("function" == typeof b) e = b;
                                    else if (("string" == typeof b || b instanceof Array) && ("string" == typeof b && (b = [b, []]), e = this.helper.namespace(b[0], a, "get"), "function" != typeof e)) return j.log({
                                        node: f.selector,
                                        "function": "executeCallback()",
                                        arguments: JSON.stringify(b),
                                        message: 'WARNING - Invalid callback function"'
                                    }), j.print(), !1;
                                    return e.apply(this, c.merge(b[1] || [], d ? d : [])) || !0
                                },
                                namespace: function(b, c, d, e) {
                                    if ("string" != typeof b || "" === b) return a.debug("window.namespace." + d + " - Missing namespaceString."), !1;
                                    for (var f = b.split("."), g = c || a, h = e || {}, i = "", j = 0, k = f.length; k > j; j++) {
                                        if (i = f[j], !g[i]) {
                                            if (~["get", "delete"].indexOf(d)) return !1;
                                            g[i] = {}
                                        }
                                        if (~["set", "create", "delete"].indexOf(d) && j === k - 1) {
                                            if ("set" !== d && "create" !== d) return delete g[i], !0;
                                            g[i] = h
                                        }
                                        g = g[i]
                                    }
                                    return g
                                },
                                typeWatch: function() {
                                    var a = 0;
                                    return function(b, c) {
                                        clearTimeout(a), a = setTimeout(b, c)
                                    }
                                }()
                            }
                        }, c.fn.typeahead = c.typeahead = function(a) {
                            return i.typeahead(this, a)
                        };
                        var i = {
                                typeahead: function(b, d) {
                                    if (!d || !d.source || "object" != typeof d.source) return j.log({
                                        node: b.selector || d && d.input,
                                        "function": "$.typeahead()",
                                        arguments: JSON.stringify(d && d.source || ""),
                                        message: 'Undefined "options" or "options.source" or invalid source type - Typeahead dropped'
                                    }), void j.print();
                                    if ("function" == typeof b) {
                                        if (!d.input) return j.log({
                                            node: b.selector,
                                            "function": "$.typeahead()",
                                            message: 'Undefined "options.input" - Typeahead dropped'
                                        }), void j.print();
                                        b = c(d.input)
                                    }
                                    return 1 !== b.length ? (j.log({
                                        node: b.selector,
                                        "function": "$.typeahead()",
                                        arguments: JSON.stringify(d.input),
                                        message: "Unable to find jQuery input element OR more than 1 input is found - Typeahead dropped"
                                    }), void j.print()) : a.Typeahead[b.selector] = new h(b, d)
                                }
                            },
                            j = {
                                table: {},
                                log: function(a) {
                                    a.message && "string" == typeof a.message && (this.table[a.message] = c.extend({
                                        node: "",
                                        "function": "",
                                        arguments: ""
                                    }, a))
                                },
                                print: function() {
                                    !h.prototype.helper.isEmpty(this.table) && console && console.table && ((console.group !== d || console.table !== d) && (console.groupCollapsed("--- jQuery Typeahead Debug ---"), console.table(this.table), console.groupEnd()), this.table = {})
                                }
                            };
                        a.console = a.console || {
                            log: function() {}
                        }, "trim" in String.prototype || (String.prototype.trim = function() {
                            return this.replace(/^\s+/, "").replace(/\s+$/, "")
                        }), "indexOf" in Array.prototype || (Array.prototype.indexOf = function(a, b) {
                            b === d && (b = 0), 0 > b && (b += this.length), 0 > b && (b = 0);
                            for (var c = this.length; c > b; b++)
                                if (b in this && this[b] === a) return b;
                            return -1
                        }), Object.keys || (Object.keys = function(a) {
                            var b, c = [];
                            for (b in a) Object.prototype.hasOwnProperty.call(a, b) && c.push(b);
                            return c
                        })
                    }(window, document, window.jQuery),
                    ! function(a) {
                        var b;
                        window.UIkit && (b = a(UIkit)), "function" == typeof define && define.amd && define("uikit-slideshow", ["uikit"], function() {
                            return b || a(UIkit)
                        })
                    }(function(a) {
                        "use strict";
                        var b, c = 0;
                        a.component("slideshow", {
                            defaults: {
                                animation: "fade",
                                duration: 500,
                                height: "auto",
                                start: 0,
                                autoplay: !1,
                                autoplayInterval: 7e3,
                                videoautoplay: !0,
                                videomute: !0,
                                slices: 15,
                                pauseOnHover: !0,
                                kenburns: !1,
                                kenburnsanimations: ["uk-animation-middle-left", "uk-animation-top-right", "uk-animation-bottom-left", "uk-animation-top-center", "", "uk-animation-bottom-right"]
                            },
                            current: !1,
                            interval: null,
                            hovering: !1,
                            boot: function() {
                                a.ready(function(b) {
                                    a.$("[data-uk-slideshow]", b).each(function() {
                                        var b = a.$(this);
                                        b.data("slideshow") || a.slideshow(b, a.Utils.options(b.attr("data-uk-slideshow")))
                                    })
                                })
                            },
                            init: function() {
                                var b, d, e = this;
                                this.container = this.element.hasClass("uk-slideshow") ? this.element : a.$(this.find(".uk-slideshow")), this.slides = this.container.children(), this.slidesCount = this.slides.length, this.current = this.options.start, this.animating = !1, this.triggers = this.find("[data-uk-slideshow-item]"), this.fixFullscreen = navigator.userAgent.match(/(iPad|iPhone|iPod)/g) && this.container.hasClass("uk-slideshow-fullscreen"), this.options.kenburns && (d = this.options.kenburns === !0 ? "15s" : this.options.kenburns, String(d).match(/(ms|s)$/) || (d += "ms"), "string" == typeof this.options.kenburnsanimations && (this.options.kenburnsanimations = this.options.kenburnsanimations.split(","))), this.slides.each(function(f) {
                                    var g = a.$(this),
                                        h = g.children("img,video,iframe").eq(0);
                                    if (g.data("media", h), g.data("sizer", h), h.length) {
                                        var i;
                                        switch (h[0].nodeName) {
                                            case "IMG":
                                                var j = a.$('<div class="uk-cover-background uk-position-cover"></div>').css({
                                                    "background-image": "url(" + h.attr("src") + ")"
                                                });
                                                h.css({
                                                    width: "100%",
                                                    height: "auto"
                                                }), g.prepend(j).data("cover", j);
                                                break;
                                            case "IFRAME":
                                                var k = h[0].src,
                                                    l = "sw-" + ++c;
                                                h.attr("src", "").on("load", function() {
                                                    if ((f !== e.current || f == e.current && !e.options.videoautoplay) && e.pausemedia(h), e.options.videomute) {
                                                        e.mutemedia(h);
                                                        var a = setInterval(function(b) {
                                                            return function() {
                                                                e.mutemedia(h), ++b >= 4 && clearInterval(a)
                                                            }
                                                        }(0), 250)
                                                    }
                                                }).data("slideshow", e).attr("data-player-id", l).attr("src", [k, k.indexOf("?") > -1 ? "&" : "?", "enablejsapi=1&api=1&player_id=" + l].join("")).addClass("uk-position-absolute"), a.support.touch || h.css("pointer-events", "none"), i = !0, a.cover && (a.cover(h), h.attr("data-uk-cover", "{}"));
                                                break;
                                            case "VIDEO":
                                                h.addClass("uk-cover-object uk-position-absolute"), i = !0, e.options.videomute && e.mutemedia(h)
                                        }
                                        if (i) {
                                            b = a.$("<canvas></canvas>").attr({
                                                width: h[0].width,
                                                height: h[0].height
                                            });
                                            var m = a.$('<img style="width:100%;height:auto;">').attr("src", b[0].toDataURL());
                                            g.prepend(m), g.data("sizer", m)
                                        }
                                    } else g.data("sizer", g);
                                    e.hasKenBurns(g) && g.data("cover").css({
                                        "-webkit-animation-duration": d,
                                        "animation-duration": d
                                    })
                                }), this.on("click.uikit.slideshow", "[data-uk-slideshow-item]", function(b) {
                                    b.preventDefault();
                                    var c = a.$(this).attr("data-uk-slideshow-item");
                                    if (e.current != c) {
                                        switch (c) {
                                            case "next":
                                            case "previous":
                                                e["next" == c ? "next" : "previous"]();
                                                break;
                                            default:
                                                e.show(parseInt(c, 10))
                                        }
                                        e.stop()
                                    }
                                }), this.slides.attr("aria-hidden", "true").eq(this.current).addClass("uk-active").attr("aria-hidden", "false"), this.triggers.filter('[data-uk-slideshow-item="' + this.current + '"]').addClass("uk-active"), a.$win.on("resize load", a.Utils.debounce(function() {
                                    e.resize(), e.fixFullscreen && (e.container.css("height", window.innerHeight), e.slides.css("height", window.innerHeight))
                                }, 100)), setTimeout(function() {
                                    e.resize()
                                }, 80), this.options.autoplay && this.start(), this.options.videoautoplay && this.slides.eq(this.current).data("media") && this.playmedia(this.slides.eq(this.current).data("media")), this.options.kenburns && this.applyKenBurns(this.slides.eq(this.current)), this.container.on({
                                    mouseenter: function() {
                                        e.options.pauseOnHover && (e.hovering = !0)
                                    },
                                    mouseleave: function() {
                                        e.hovering = !1
                                    }
                                }), this.on("swipeRight swipeLeft", function(a) {
                                    e["swipeLeft" == a.type ? "next" : "previous"]()
                                }), this.on("display.uk.check", function() {
                                    e.element.is(":visible") && (e.resize(), e.fixFullscreen && (e.container.css("height", window.innerHeight), e.slides.css("height", window.innerHeight)))
                                })
                            },
                            resize: function() {
                                if (!this.container.hasClass("uk-slideshow-fullscreen")) {
                                    var b = this.options.height;
                                    "auto" === this.options.height && (b = 0, this.slides.css("height", "").each(function() {
                                        b = Math.max(b, a.$(this).height())
                                    })), this.container.css("height", b), this.slides.css("height", b)
                                }
                            },
                            show: function(c, d) {
                                if (!this.animating && this.current != c) {
                                    this.animating = !0;
                                    var e = this,
                                        f = this.slides.eq(this.current),
                                        g = this.slides.eq(c),
                                        h = d ? d : this.current < c ? -1 : 1,
                                        i = f.data("media"),
                                        j = b[this.options.animation] ? this.options.animation : "fade",
                                        k = g.data("media"),
                                        l = function() {
                                            e.animating && (i && i.is("video,iframe") && e.pausemedia(i), k && k.is("video,iframe") && e.playmedia(k), g.addClass("uk-active").attr("aria-hidden", "false"), f.removeClass("uk-active").attr("aria-hidden", "true"), e.animating = !1, e.current = c, a.Utils.checkDisplay(g, '[class*="uk-animation-"]:not(.uk-cover-background.uk-position-cover)'), e.trigger("show.uk.slideshow", [g]))
                                        };
                                    e.applyKenBurns(g), a.support.animation || (j = "none"), f = a.$(f), g = a.$(g), b[j].apply(this, [f, g, h]).then(l), e.triggers.removeClass("uk-active"), e.triggers.filter('[data-uk-slideshow-item="' + c + '"]').addClass("uk-active")
                                }
                            },
                            applyKenBurns: function(a) {
                                if (this.hasKenBurns(a)) {
                                    var b = this.options.kenburnsanimations,
                                        c = this.kbindex || 0;
                                    a.data("cover").attr("class", "uk-cover-background uk-position-cover").width(), a.data("cover").addClass(["uk-animation-scale", "uk-animation-reverse", b[c].trim()].join(" ")), this.kbindex = b[c + 1] ? c + 1 : 0
                                }
                            },
                            hasKenBurns: function(a) {
                                return this.options.kenburns && a.data("cover")
                            },
                            next: function() {
                                this.show(this.slides[this.current + 1] ? this.current + 1 : 0)
                            },
                            previous: function() {
                                this.show(this.slides[this.current - 1] ? this.current - 1 : this.slides.length - 1)
                            },
                            start: function() {
                                this.stop();
                                var a = this;
                                this.interval = setInterval(function() {
                                    a.hovering || a.next()
                                }, this.options.autoplayInterval)
                            },
                            stop: function() {
                                this.interval && clearInterval(this.interval)
                            },
                            playmedia: function(a) {
                                if (a && a[0]) switch (a[0].nodeName) {
                                    case "VIDEO":
                                        this.options.videomute || (a[0].muted = !1), a[0].play();
                                        break;
                                    case "IFRAME":
                                        this.options.videomute || a[0].contentWindow.postMessage('{ "event": "command", "func": "unmute", "method":"setVolume", "value":1}', "*"), a[0].contentWindow.postMessage('{ "event": "command", "func": "playVideo", "method":"play"}', "*")
                                }
                            },
                            pausemedia: function(a) {
                                switch (a[0].nodeName) {
                                    case "VIDEO":
                                        a[0].pause();
                                        break;
                                    case "IFRAME":
                                        a[0].contentWindow.postMessage('{ "event": "command", "func": "pauseVideo", "method":"pause"}', "*")
                                }
                            },
                            mutemedia: function(a) {
                                switch (a[0].nodeName) {
                                    case "VIDEO":
                                        a[0].muted = !0;
                                        break;
                                    case "IFRAME":
                                        a[0].contentWindow.postMessage('{ "event": "command", "func": "mute", "method":"setVolume", "value":0}', "*")
                                }
                            }
                        }), b = {
                            none: function() {
                                var b = a.$.Deferred();
                                return b.resolve(), b.promise()
                            },
                            scroll: function(b, c, d) {
                                var e = a.$.Deferred();
                                return b.css("animation-duration", this.options.duration + "ms"), c.css("animation-duration", this.options.duration + "ms"), c.css("opacity", 1).one(a.support.animation.end, function() {
                                    b.removeClass(1 === d ? "uk-slideshow-scroll-backward-out" : "uk-slideshow-scroll-forward-out"), c.css("opacity", "").removeClass(1 === d ? "uk-slideshow-scroll-backward-in" : "uk-slideshow-scroll-forward-in"), e.resolve()
                                }.bind(this)), b.addClass(1 == d ? "uk-slideshow-scroll-backward-out" : "uk-slideshow-scroll-forward-out"), c.addClass(1 == d ? "uk-slideshow-scroll-backward-in" : "uk-slideshow-scroll-forward-in"), c.width(), e.promise()
                            },
                            swipe: function(b, c, d) {
                                var e = a.$.Deferred();
                                return b.css("animation-duration", this.options.duration + "ms"), c.css("animation-duration", this.options.duration + "ms"), c.css("opacity", 1).one(a.support.animation.end, function() {
                                    b.removeClass(1 === d ? "uk-slideshow-swipe-backward-out" : "uk-slideshow-swipe-forward-out"), c.css("opacity", "").removeClass(1 === d ? "uk-slideshow-swipe-backward-in" : "uk-slideshow-swipe-forward-in"), e.resolve()
                                }.bind(this)), b.addClass(1 == d ? "uk-slideshow-swipe-backward-out" : "uk-slideshow-swipe-forward-out"), c.addClass(1 == d ? "uk-slideshow-swipe-backward-in" : "uk-slideshow-swipe-forward-in"), c.width(), e.promise()
                            },
                            scale: function(b, c) {
                                var d = a.$.Deferred();
                                return b.css("animation-duration", this.options.duration + "ms"), c.css("animation-duration", this.options.duration + "ms"), c.css("opacity", 1), b.one(a.support.animation.end, function() {
                                    b.removeClass("uk-slideshow-scale-out"), c.css("opacity", ""), d.resolve()
                                }.bind(this)), b.addClass("uk-slideshow-scale-out"), b.width(), d.promise()
                            },
                            fade: function(b, c) {
                                var d = a.$.Deferred();
                                return b.css("animation-duration", this.options.duration + "ms"), c.css("animation-duration", this.options.duration + "ms"), c.css("opacity", 1), b.one(a.support.animation.end, function() {
                                    b.removeClass("uk-slideshow-fade-out"), c.css("opacity", ""), d.resolve()
                                }.bind(this)), b.addClass("uk-slideshow-fade-out"), b.width(), d.promise()
                            }
                        }, a.slideshow.animations = b, window.addEventListener("message", function(b) {
                            var c, d = b.data;
                            if ("string" == typeof d) try {
                                d = JSON.parse(d)
                            } catch (e) {
                                d = {}
                            }
                            b.origin && b.origin.indexOf("vimeo") > -1 && "ready" == d.event && d.player_id && (c = a.$('[data-player-id="' + d.player_id + '"]'), c.length && c.data("slideshow").mutemedia(c))
                        }, !1)
                    }),
                    ! function(a) {
                        var b;
                        window.UIkit && (b = a(UIkit)), "function" == typeof define && define.amd && define("uikit-sticky", ["uikit"], function() {
                            return b || a(UIkit)
                        })
                    }(function(a) {
                        "use strict";

                        function b() {
                            var b = arguments.length ? arguments : e;
                            if (b.length && !(c.scrollTop() < 0))
                                for (var f, g, h, i, j = c.scrollTop(), k = d.height(), l = c.height(), m = k - l, n = j > m ? m - j : 0, o = 0; o < b.length; o++)
                                    if (i = b[o], i.element.is(":visible") && !i.animate) {
                                        if (i.check()) {
                                            if (i.top < 0 ? f = 0 : (h = i.element.outerHeight(), f = k - h - i.top - i.options.bottom - j - n, f = 0 > f ? f + i.top : i.top), i.boundary && i.boundary.length) {
                                                var p = i.boundary.offset().top;
                                                g = i.boundtoparent ? k - (p + i.boundary.outerHeight()) + parseInt(i.boundary.css("padding-bottom")) : k - p - parseInt(i.boundary.css("margin-top")), f = j + h > k - g - (i.top < 0 ? 0 : i.top) ? k - g - (j + h) : f
                                            }
                                            if (i.currentTop != f) {
                                                if (i.element.css({
                                                        position: "fixed",
                                                        top: f,
                                                        width: "undefined" != typeof i.getWidthFrom ? a.$(i.getWidthFrom).width() : i.element.width(),
                                                        left: i.wrapper.offset().left
                                                    }), !i.init && (i.element.addClass(i.options.clsinit), location.hash && j > 0 && i.options.target)) {
                                                    var q = a.$(location.hash);
                                                    q.length && setTimeout(function(a, b) {
                                                        return function() {
                                                            b.element.width();
                                                            var c = a.offset(),
                                                                d = c.top + a.outerHeight(),
                                                                e = b.element.offset(),
                                                                f = b.element.outerHeight(),
                                                                g = e.top + f;
                                                            e.top < d && c.top < g && (j = c.top - f - b.options.target, window.scrollTo(0, j))
                                                        }
                                                    }(q, i), 0)
                                                }
                                                i.element.addClass(i.options.clsactive).removeClass(i.options.clsinactive), i.element.trigger("active.uk.sticky"), i.element.css("margin", ""), i.options.animation && i.init && !a.Utils.isInView(i.wrapper) && i.element.addClass(i.options.animation), i.currentTop = f
                                            }
                                        } else null !== i.currentTop && i.reset();
                                        i.init = !0
                                    }
                        }
                        var c = a.$win,
                            d = a.$doc,
                            e = [],
                            f = 1;
                        return a.component("sticky", {
                            defaults: {
                                top: 0,
                                bottom: 0,
                                animation: "",
                                clsinit: "uk-sticky-init",
                                clsactive: "uk-active",
                                clsinactive: "",
                                getWidthFrom: "",
                                showup: !1,
                                boundary: !1,
                                media: !1,
                                target: !1,
                                disabled: !1
                            },
                            boot: function() {
                                a.$doc.on("scrolling.uk.document", function(a, c) {
                                    c && c.dir && (f = c.dir.y, b())
                                }), a.$win.on("resize orientationchange", a.Utils.debounce(function() {
                                    if (e.length) {
                                        for (var a = 0; a < e.length; a++) e[a].reset(!0), e[a].self.computeWrapper();
                                        b()
                                    }
                                }, 100)), a.ready(function(c) {
                                    setTimeout(function() {
                                        a.$("[data-uk-sticky]", c).each(function() {
                                            var b = a.$(this);
                                            b.data("sticky") || a.sticky(b, a.Utils.options(b.attr("data-uk-sticky")))
                                        }), b()
                                    }, 0)
                                })
                            },
                            init: function() {
                                var b, g = a.$('<div class="uk-sticky-placeholder"></div>'),
                                    h = this.options.boundary;
                                this.wrapper = this.element.css("margin", 0).wrap(g).parent(), this.computeWrapper(), h && (h === !0 ? (h = this.wrapper.parent(), b = !0) : "string" == typeof h && (h = a.$(h))), this.sticky = {
                                    self: this,
                                    options: this.options,
                                    element: this.element,
                                    currentTop: null,
                                    wrapper: this.wrapper,
                                    init: !1,
                                    getWidthFrom: this.options.getWidthFrom || this.wrapper,
                                    boundary: h,
                                    boundtoparent: b,
                                    top: 0,
                                    calcTop: function() {
                                        var b = this.options.top;
                                        if (this.options.top && "string" == typeof this.options.top)
                                            if (this.options.top.match(/^(-|)(\d+)vh$/)) b = window.innerHeight * parseInt(this.options.top, 10) / 100;
                                            else {
                                                var c = a.$(this.options.top).first();
                                                c.length && c.is(":visible") && (b = -1 * (c.offset().top + c.outerHeight() - this.wrapper.offset().top))
                                            }
                                        this.top = b
                                    },
                                    reset: function(b) {
                                        this.calcTop();
                                        var c = function() {
                                            this.element.css({
                                                position: "",
                                                top: "",
                                                width: "",
                                                left: "",
                                                margin: "0"
                                            }), this.element.removeClass([this.options.animation, "uk-animation-reverse", this.options.clsactive].join(" ")), this.element.addClass(this.options.clsinactive), this.element.trigger("inactive.uk.sticky"), this.currentTop = null, this.animate = !1
                                        }.bind(this);
                                        !b && this.options.animation && a.support.animation && !a.Utils.isInView(this.wrapper) ? (this.animate = !0, this.element.removeClass(this.options.animation).one(a.support.animation.end, function() {
                                            c()
                                        }).width(), this.element.addClass(this.options.animation + " uk-animation-reverse")) : c()
                                    },
                                    check: function() {
                                        if (this.options.disabled) return !1;
                                        if (this.options.media) switch (typeof this.options.media) {
                                            case "number":
                                                if (window.innerWidth < this.options.media) return !1;
                                                break;
                                            case "string":
                                                if (window.matchMedia && !window.matchMedia(this.options.media).matches) return !1
                                        }
                                        var b = c.scrollTop(),
                                            e = d.height(),
                                            g = e - window.innerHeight,
                                            h = b > g ? g - b : 0,
                                            i = this.wrapper.offset().top,
                                            j = i - this.top - h,
                                            k = b >= j;
                                        return k && this.options.showup && (1 == f && (k = !1), -1 == f && !this.element.hasClass(this.options.clsactive) && a.Utils.isInView(this.wrapper) && (k = !1)), k
                                    }
                                }, this.sticky.calcTop(), e.push(this.sticky)
                            },
                            update: function() {
                                b(this.sticky)
                            },
                            enable: function() {
                                this.options.disabled = !1, this.update()
                            },
                            disable: function(a) {
                                this.options.disabled = !0, this.sticky.reset(a)
                            },
                            computeWrapper: function() {
                                this.wrapper.css({
                                    height: -1 == ["absolute", "fixed"].indexOf(this.element.css("position")) ? this.element.outerHeight() : "",
                                    "float": "none" != this.element.css("float") ? this.element.css("float") : "",
                                    margin: this.element.css("margin")
                                })
                            }
                        }), a.sticky
                    });is.node.selector,
                    "function": "populateSource()",
                    arguments: JSON.stringify({
                        group: b
                    }),
                    message: "Invalid data type, must be Array type."
                }), j.print(), a = []), d = this.options.source[b].url && this.options.source[b].data, d && ("function" == typeof d && (d = d()), d instanceof Array ? a = a.concat(d) : (j.log({
                    node: this.node.selector,
                    "function": "populateSource()",
                    arguments: JSON.stringify(d),
                    message: "WARNING - this.options.source." + b + ".data Must be an Array or a function that returns an Array."
                }), j.print()));
                var h, i;
                i = this.options.source[b].display ? this.options.source[b].display[0] : this.options.display[0];
                for (var k = 0; k < a.length; k++) "string" == typeof a[k] && (h = {}, h[i] = a[k], a[k] = h);
                if (this.source[b] = a, this.options.cache && !localStorage.getItem(this.node.selector + ":" + b)) {
                    var l = JSON.stringify({
                        data: a,
                        ttl: (new Date).getTime() + this.options.ttl
                    });
                    this.options.compression && (l = LZString.compressToUTF16(l)), localStorage.setItem(this.node.selector + ":" + b, l)
                }
                this.incrementGeneratedGroup()
            },
            incrementGeneratedGroup: function() {
                this.generatedGroupCount += 1, this.groupCount === this.generatedGroupCount && (this.isGenerated = !0, this.node.trigger("dynamic" + f))
            },
            navigate: function(a) {
                this.helper.executeCallback(this.options.callback.onNavigate, [this.node, this.query, a]);
                var b = this.resultContainer.find("> ul > li:not([data-search-group])"),
                    c = b.filter(".active"),
                    d = c[0] && b.index(c) || null;
                if (27 === a.keyCode) return a.preventDefault(), void this.hideLayout();
                if (13 === a.keyCode) {
                    if (c.length > 0) return a.preventDefault(), a.stopPropagation(), void c.find("a:first").trigger("click");
                    if (this.options.mustSelectItem && this.helper.isEmpty(this.item)) return;
                    return void this.hideLayout()
                }
                if (39 === a.keyCode) return void(d ? b.eq(d).find("a:first").trigger("click") : this.options.hint && "" !== this.hint.container.val() && this.helper.getCaret(this.node[0]) >= this.query.length && b.find('a[data-index="' + this.hintIndex + '"]').trigger("click"));
                if (b.length > 0 && c.removeClass("active"), 38 === a.keyCode ? (a.preventDefault(), c.length > 0 ? d - 1 >= 0 && b.eq(d - 1).addClass("active") : b.last().addClass("active")) : 40 === a.keyCode && (a.preventDefault(), c.length > 0 ? d + 1 < b.length && b.eq(d + 1).addClass("active") : b.first().addClass("active")), c = b.filter(".active"), this.options.hint && this.hint.container && (c.length > 0 ? this.hint.container.css("color", this.hint.container.css("background-color") || "fff") : this.hint.container.css("color", this.hint.css.color)), c.length > 0) {
                    var e = c.find("a:first").attr("data-index");
                    e && this.node.val(this.result[e][this.result[e].matchedKey])
                } else this.node.val(this.rawQuery)
            },
            searchResult: function() {
                this.item = {}, this.helper.executeCallback(this.options.callback.onSearch, [this.node, this.query]), this.result = [], this.resultCount = 0;
                var a, b, c, d, e, f, g = this,
                    h = this.query,
                    i = {},
                    k = this.filters.dropdown && this.filters.dropdown.key || this.groupBy,
                    l = this.filters.dynamic && !this.helper.isEmpty(this.filters.dynamic),
                    m = {};
                this.options.accent && (h = this.helper.removeAccent(h));
                for (a in this.source)
                    if (this.source.hasOwnProperty(a) && (!this.filters.dropdown || "group" !== this.filters.dropdown.key || this.filters.dropdown.value === a)) {
                        if (this.options.maxItemPerGroup && "group" === k)
                            if (i[a]) {
                                if (i[a] >= this.options.maxItemPerGroup && !this.options.callback.onResult) break
                            } else i[a] = 0;
                        f = "undefined" == typeof this.options.source[a].filter || this.options.source[a].filter === !0;
                        for (var n = 0; n < this.source[a].length && (!(this.result.length >= this.options.maxItem) || this.options.callback.onResult); n++)
                            if (!l || this.dynamicFilter.validate.apply(this, [this.source[a][n]])) {
                                if (b = this.source[a][n], b.group = a, this.options.maxItemPerGroup && "group" !== k)
                                    if (i[b[k]]) {
                                        if (i[b[k]] >= this.options.maxItemPerGroup && !this.options.callback.onResult) continue
                                    } else i[b[k]] = 0;
                                e = this.options.source[a].display || this.options.display;
                                for (var o = 0; o < e.length; o++) {
                                    if (f) {
                                        if (d = b[e[o]], !d) {
                                            m[o] = {
                                                display: e[o],
                                                data: b
                                            };
                                            continue
                                        }
                                        if (d = d.toString(), this.options.accent && (d = this.helper.removeAccent(d)), c = d.toLowerCase().indexOf(h.toLowerCase()) + 1, !c) continue;
                                        if (c && this.options.offset && 1 !== c) continue;
                                        if (this.options.source[a].ignore && this.options.source[a].ignore.test(d)) continue
                                    }
                                    if (!this.filters.dropdown || this.filters.dropdown.value == b[this.filters.dropdown.key]) {
                                        if (this.resultCount += 1, this.options.callback.onResult && this.result.length >= this.options.maxItem || this.options.maxItemPerGroup && i[b[k]] >= this.options.maxItemPerGroup) break;
                                        b.matchedKey = e[o], this.result.push(b), this.options.maxItemPerGroup && (i[b[k]] += 1);
                                        break
                                    }
                                }
                            }
                    }
                if (this.helper.isEmpty(m) || (j.log({
                        node: this.node.selector,
                        "function": "searchResult()",
                        arguments: JSON.stringify(m),
                        message: "Missing keys for display, make sure options.display is set properly."
                    }), j.print()), this.options.order) {
                    for (var p, e = [], o = 0; o < this.result.length; o++) p = this.options.source[this.result[o].group].display || this.options.display, ~e.indexOf(p[0]) || e.push(p[0]);
                    this.result.sort(g.helper.sort(e, "asc" === g.options.order, function(a) {
                        return a.toString().toUpperCase()
                    }))
                }
                this.helper.executeCallback(this.options.callback.onResult, [this.node, this.query, this.result, this.resultCount])
            },
            buildLayout: function() {
                this.resultContainer || (this.resultContainer = c("<div/>", {
                    "class": this.options.selector.result
                }), this.container.append(this.resultContainer));
                var a = this.query.toLowerCase();
                this.options.accent && (a = this.helper.removeAccent(a));
                var b = this,
                    d = c("<ul/>", {
                        "class": this.options.selector.list + (b.helper.isEmpty(b.result) ? " empty" : ""),
                        html: function() {
                            if (b.options.emptyTemplate && b.helper.isEmpty(b.result)) return c("<li/>", {
                                html: c("<a/>", {
                                    href: "javascript:;",
                                    html: "function" == typeof b.options.emptyTemplate && b.options.emptyTemplate(b.query) || b.options.emptyTemplate.replace(/\{\{query}}/gi, b.query)
                                })
                            });
                            for (var d in b.result) b.result.hasOwnProperty(d) && ! function(d, e, f) {
                                var g, h, i, k, l, m = e.group,
                                    n = {},
                                    o = b.options.source[e.group].display || b.options.display,
                                    p = b.options.source[e.group].href || b.options.href;
                                b.options.group && ("boolean" != typeof b.options.group[0] && e[b.options.group[0]] && (m = e[b.options.group[0]]), c(f).find('li[data-search-group="' + m + '"]')[0] || c(f).append(c("<li/>", {
                                    "class": b.options.selector.group,
                                    html: c("<a/>", {
                                        href: "javascript:;",
                                        html: b.options.group[1] && b.options.group[1].replace(/(\{\{group}})/gi, e[b.options.group[0]] || m) || m
                                    }),
                                    "data-search-group": m
                                })));
                                for (var q = 0; q < o.length; q++) i = o[q], n[i] = e[i], b.options.highlight && (n[i] ? n[i] = b.helper.highlight(n[i], a, b.options.accent) : (j.log({
                                    node: b.node.selector,
                                    "function": "buildLayout()",
                                    arguments: JSON.stringify(e),
                                    message: 'WARNING - Missing display key: "' + i + '"'
                                }), j.print()));
                                g = c("<li/>", {
                                    html: c("<a/>", {
                                        href: function() {
                                            return p && ("string" == typeof p ? p = p.replace(/\{\{([a-z0-9_\-\.]+)\|?(\w+)?}}/gi, function(a, c, d) {
                                                var f = b.helper.namespace(c, e, "get") || a;
                                                return d && "raw" === d ? f : f !== a && b.helper.slugify(f) || f
                                            }) : "function" == typeof p && (p = p(e)), e.href = p), p || "javascript:;"
                                        },
                                        "data-group": m,
                                        "data-index": d,
                                        html: function() {
                                            l = e.group && b.options.source[e.group].template || b.options.template, h = l ? l.replace(/\{\{([a-z0-9_\-\.]+)\|?(\w+)?}}/gi, function(a, c, d) {
                                                var f = b.helper.namespace(c, e, "get") || a;
                                                return d && "raw" === d ? f : b.helper.namespace(c, n, "get") || f
                                            }) : '<span class="' + b.options.selector.display + '">' + b.helper.joinObject(n, " ") + "</span>", c(this).append(h)
                                        },
                                        click: function(a) {
                                            return b.options.mustSelectItem && b.helper.isEmpty(e) ? void a.preventDefault() : (b.helper.executeCallback(b.options.callback.onClickBefore, [b.node, this, e, a]), void(a.isDefaultPrevented() || (a.preventDefault(), b.query = b.rawQuery = e[e.matchedKey].toString(), b.node.val(b.query).focus(), b.searchResult(), b.buildLayout(), b.hideLayout(), b.item = e, b.helper.executeCallback(b.options.callback.onClickAfter, [b.node, this, e, a]))))
                                        },
                                        mouseenter: function(a) {
                                            c(this).closest("ul").find("li.active").removeClass("active"), c(this).closest("li").addClass("active"), b.helper.executeCallback(b.options.callback.onMouseEnter, [b.node, this, e, a])
                                        },
                                        mouseleave: function(a) {
                                            c(this).closest("li").removeClass("active"), b.helper.executeCallback(b.options.callback.onMouseLeave, [b.node, this, e, a])
                                        }
                                    })
                                }), b.options.group ? (k = c(f).find('a[data-group="' + m + '"]:last').closest("li"), k[0] || (k = c(f).find('li[data-search-group="' + m + '"]')), c(g).insertAfter(k)) : c(f).append(g)
                            }(d, b.result[d], this)
                        }
                    });
                if (this.options.callback.onLayoutBuiltBefore) {
                    var f = this.helper.executeCallback(this.options.callback.onLayoutBuiltBefore, [this.node, this.query, this.result, d]);
                    f instanceof jQuery ? d = f : (j.log({
                        node: this.node.selector,
                        "function": "callback.onLayoutBuiltBefore()",
                        message: "Invalid returned value - You must return resultHtmlList jQuery Object"
                    }), j.print())
                }
                if (this.container.addClass("result"), this.resultContainer.html(d), this.options.callback.onLayoutBuiltAfter && this.helper.executeCallback(this.options.callback.onLayoutBuiltAfter, [this.node, this.query, this.result]), this.options.backdrop && (this.backdrop.container ? this.backdrop.container.show() : (this.backdrop.css = c.extend({
                        opacity: .6,
                        filter: "alpha(opacity=60)",
                        position: "fixed",
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        "z-index": 1040,
                        "background-color": "#000"
                    }, this.options.backdrop), this.backdrop.container = c("<div/>", {
                        "class": this.options.selector.backdrop,
                        css: this.backdrop.css,
                        click: function() {
                            b.hideLayout()
                        }
                    }).insertAfter(this.container)), this.container.addClass("backdrop").css({
                        "z-index": this.backdrop.css["z-index"] + 1,
                        position: "relative"
                    })), this.options.hint) {
                    var g = "";
                    if (this.result.length > 0 && this.query.length > 0) {
                        this.hint.container || (this.hint.css = c.extend({
                                "border-color": "transparent",
                                position: "absolute",
                                top: 0,
                                display: "inline",
                                "z-index": -1,
                                "float": "none",
                                color: "silver",
                                "box-shadow": "none",
                                cursor: "default",
                                "-webkit-user-select": "none",
                                "-moz-user-select": "none",
                                "-ms-user-select": "none",
                                "user-select": "none"
                            }, this.options.hint), this.hint.container = c("<input/>", {
                                type: this.node.attr("type"),
                                "class": this.node.attr("class"),
                                readonly: !0,
                                unselectable: "on",
                                tabindex: -1,
                                click: function() {
                                    b.node.focus()
                                }
                            }).addClass(e.selector.hint).css(this.hint.css).insertAfter(this.node),
                            this.node.parent().css({
                                position: "relative"
                            })), this.hint.container.css("color", this.hint.css.color);
                        var h, i, k;
                        this.hintIndex = null;
                        for (var l = 0; l < this.result.length; l++) {
                            i = this.result[l].group, h = b.options.source[i].display || b.options.display;
                            for (var m = 0; m < h.length; m++)
                                if (k = String(this.result[l][h[m]]).toLowerCase(), this.options.accent && (k = this.helper.removeAccent(k)), 0 === k.indexOf(a)) {
                                    g = String(this.result[l][h[m]]), this.hintIndex = l;
                                    break
                                }
                            if (null !== this.hintIndex) break
                        }
                    }
                    this.hint.container && this.hint.container.val(g.length > 0 && this.rawQuery + g.substring(this.query.length) || "").show()
                }
            },
            buildDropdownLayout: function() {
                function a(a) {
                    "*" === a.value ? delete this.filters.dropdown : this.filters.dropdown = a, this.container.removeClass("filter").find("." + this.options.selector.filterValue).html(a.display || a.value), this.node.trigger("dynamic" + f), this.node.focus()
                }
                if (this.options.dropdownFilter) {
                    var b, d = this;
                    if ("boolean" == typeof this.options.dropdownFilter) b = "all";
                    else if ("string" == typeof this.options.dropdownFilter) b = this.options.dropdownFilter;
                    else if (this.options.dropdownFilter instanceof Array)
                        for (var e = 0; e < this.options.dropdownFilter.length; e++)
                            if ("*" === this.options.dropdownFilter[e].value && this.options.dropdownFilter[e].display) {
                                b = this.options.dropdownFilter[e].display;
                                break
                            }
                    c("<span/>", {
                        "class": this.options.selector.filter,
                        html: function() {
                            c(this).append(c("<button/>", {
                                type: "button",
                                "class": d.options.selector.filterButton,
                                html: "<span class='" + d.options.selector.filterValue + "'>" + b + "</span> <span class='" + d.options.selector.dropdownCarret + "'></span>",
                                click: function(a) {
                                    a.stopPropagation();
                                    var b = d.container.find("." + d.options.selector.dropdown.replace(" ", "."));
                                    b.is(":visible") ? (d.container.removeClass("filter"), b.hide(), c("html").off(f + ".dropdownFilter")) : (d.container.addClass("filter"), b.show(), c("html").off(f + ".dropdownFilter").on("click" + f + ".dropdownFilter touchstart" + f + ".dropdownFilter", function() {
                                        d.container.removeClass("filter"), b.hide(), c(this).off(f + ".dropdownFilter")
                                    }))
                                }
                            })), c(this).append(c("<ul/>", {
                                "class": d.options.selector.dropdown,
                                html: function() {
                                    var b = d.options.dropdownFilter;
                                    if (~["string", "boolean"].indexOf(typeof d.options.dropdownFilter)) {
                                        b = [];
                                        for (var e in d.options.source) d.options.source.hasOwnProperty(e) && b.push({
                                            key: "group",
                                            value: e
                                        });
                                        b.push({
                                            key: "group",
                                            value: "*",
                                            display: "string" == typeof d.options.dropdownFilter && d.options.dropdownFilter || "All"
                                        })
                                    }
                                    for (var f = 0; f < b.length; f++) ! function(b, e, f) {
                                        return !e.key && "*" !== e.value || !e.value ? (j.log({
                                            node: d.node.selector,
                                            "function": "buildDropdownLayout()",
                                            arguments: JSON.stringify(e),
                                            message: 'WARNING - Missing key or value, skipping dropdown filter."'
                                        }), void j.print()) : ("*" === e.value && c(f).append(c("<li/>", {
                                            "class": "divider"
                                        })), void c(f).append(c("<li/>", {
                                            html: c("<a/>", {
                                                href: "javascript:;",
                                                html: e.display || e.value,
                                                click: function(b) {
                                                    b.preventDefault(), a.apply(d, [e])
                                                }
                                            })
                                        })))
                                    }(f, b[f], this)
                                }
                            }))
                        }
                    }).insertAfter(d.container.find("." + d.options.selector.query))
                }
            },
            dynamicFilter: {
                validate: function(a) {
                    var b, c, d = null,
                        e = null;
                    for (var f in this.filters.dynamic)
                        if (this.filters.dynamic.hasOwnProperty(f) && (c = ~f.indexOf(".") ? this.helper.namespace(f, a, "get") : a[f], "|" !== this.filters.dynamic[f].modifier || d || (d = c == this.filters.dynamic[f].value || !1), "&" === this.filters.dynamic[f].modifier)) {
                            if (c != this.filters.dynamic[f].value) {
                                e = !1;
                                break
                            }
                            e = !0
                        }
                    return b = d, null !== e && (b = e, e === !0 && null !== d && (b = d)), !!b
                },
                set: function(a, b) {
                    var c = a.match(/^([|&])?(.+)/);
                    b ? this.filters.dynamic[c[2]] = {
                        modifier: c[1] || "|",
                        value: b
                    } : delete this.filters.dynamic[c[2]], this.searchResult(), this.buildLayout()
                },
                bind: function() {
                    if (this.options.dynamicFilter)
                        for (var a, b = this, d = 0; d < this.options.dynamicFilter.length; d++) a = this.options.dynamicFilter[d], "string" == typeof a.selector && (a.selector = c(a.selector)), a.selector instanceof jQuery && a.selector[0] && a.key ? ! function(a) {
                            a.selector.off(f).on("change" + f, function() {
                                b.dynamicFilter.set.apply(b, [a.key, b.dynamicFilter.getValue(this)])
                            }).trigger("change" + f)
                        }(a) : (j.log({
                            node: this.node.selector,
                            "function": "buildDynamicLayout()",
                            message: 'Invalid jQuery selector or jQuery Object for "filter.selector" or missing filter.key'
                        }), j.print())
                },
                getValue: function(a) {
                    var b;
                    return "SELECT" === a.tagName ? b = a.value : "INPUT" === a.tagName && ("checkbox" === a.type ? b = a.checked || null : "radio" === a.type && a.checked && (b = a.value)), b
                }
            },
            showLayout: function() {
                var a = this;
                c("html").off(f).on("click" + f + " touchstart" + f, function() {
                    a.hideLayout(), c(this).off(f)
                }), (this.result.length || this.options.emptyTemplate) && this.container.addClass("result hint backdrop")
            },
            hideLayout: function() {
                this.container.removeClass("result hint backdrop filter")
            },
            __construct: function() {
                this.extendOptions(), this.unifySourceFormat() && (this.init(), this.delegateEvents(), this.buildDropdownLayout(), this.dynamicFilter.bind.apply(this), this.helper.executeCallback(this.options.callback.onReady, [this.node]))
            },
            helper: {
                isEmpty: function(a) {
                    for (var b in a)
                        if (a.hasOwnProperty(b)) return !1;
                    return !0
                },
                removeAccent: function(a) {
                    return "string" == typeof a ? a = a.toLowerCase().replace(new RegExp("[" + g.from + "]", "g"), function(a) {
                        return g.to[g.from.indexOf(a)]
                    }) : void 0
                },
                slugify: function(a) {
                    return a = this.removeAccent(a), a = a.replace(/[^-a-z0-9]+/g, "-").replace(/-+/g, "-").trim("-")
                },
                sort: function(a, b, c) {
                    var d = function(b) {
                        for (var d = 0; d < a.length; d++)
                            if ("undefined" != typeof b[a[d]]) return c(b[a[d]])
                    };
                    return b = [-1, 1][+!!b],
                        function(a, c) {
                            return a = d(a), c = d(c), b * ((a > c) - (c > a))
                        }
                },
                replaceAt: function(a, b, c, d) {
                    return a.substring(0, b) + d + a.substring(b + c)
                },
                highlight: function(a, b, c) {
                    a = String(a);
                    var d = a.toLowerCase().indexOf(b.toLowerCase());
                    return c && (d = this.removeAccent(a).indexOf(this.removeAccent(b))), -1 === d || 0 === b.length ? a : this.replaceAt(a, d, b.length, "<strong>" + a.substr(d, b.length) + "</strong>")
                },
                joinObject: function(a, b) {
                    var c = "",
                        d = 0;
                    for (var e in a) a.hasOwnProperty(e) && (0 !== d && (c += b), c += a[e], d++);
                    return c
                },
                getCaret: function(a) {
                    if (a.selectionStart) return a.selectionStart;
                    if (b.selection) {
                        a.focus();
                        var c = b.selection.createRange();
                        if (null == c) return 0;
                        var d = a.createTextRange(),
                            e = d.duplicate();
                        return d.moveToBookmark(c.getBookmark()), e.setEndPoint("EndToStart", d), e.text.length
                    }
                    return 0
                },
                executeCallback: function(b, d) {
                    if (!b) return !1;
                    var e, f = d[0];
                    if ("function" == typeof b) e = b;
                    else if (("string" == typeof b || b instanceof Array) && ("string" == typeof b && (b = [b, []]), e = this.helper.namespace(b[0], a, "get"), "function" != typeof e)) return j.log({
                        node: f.selector,
                        "function": "executeCallback()",
                        arguments: JSON.stringify(b),
                        message: 'WARNING - Invalid callback function"'
                    }), j.print(), !1;
                    return e.apply(this, c.merge(b[1] || [], d ? d : [])) || !0
                },
                namespace: function(b, c, d, e) {
                    if ("string" != typeof b || "" === b) return a.debug("window.namespace." + d + " - Missing namespaceString."), !1;
                    for (var f = b.split("."), g = c || a, h = e || {}, i = "", j = 0, k = f.length; k > j; j++) {
                        if (i = f[j], !g[i]) {
                            if (~["get", "delete"].indexOf(d)) return !1;
                            g[i] = {}
                        }
                        if (~["set", "create", "delete"].indexOf(d) && j === k - 1) {
                            if ("set" !== d && "create" !== d) return delete g[i], !0;
                            g[i] = h
                        }
                        g = g[i]
                    }
                    return g
                },
                typeWatch: function() {
                    var a = 0;
                    return function(b, c) {
                        clearTimeout(a), a = setTimeout(b, c)
                    }
                }()
            }
        }, c.fn.typeahead = c.typeahead = function(a) {
            return i.typeahead(this, a)
        };
        var i = {
                typeahead: function(b, d) {
                    if (!d || !d.source || "object" != typeof d.source) return j.log({
                        node: b.selector || d && d.input,
                        "function": "$.typeahead()",
                        arguments: JSON.stringify(d && d.source || ""),
                        message: 'Undefined "options" or "options.source" or invalid source type - Typeahead dropped'
                    }), void j.print();
                    if ("function" == typeof b) {
                        if (!d.input) return j.log({
                            node: b.selector,
                            "function": "$.typeahead()",
                            message: 'Undefined "options.input" - Typeahead dropped'
                        }), void j.print();
                        b = c(d.input)
                    }
                    return 1 !== b.length ? (j.log({
                        node: b.selector,
                        "function": "$.typeahead()",
                        arguments: JSON.stringify(d.input),
                        message: "Unable to find jQuery input element OR more than 1 input is found - Typeahead dropped"
                    }), void j.print()) : a.Typeahead[b.selector] = new h(b, d)
                }
            },
            j = {
                table: {},
                log: function(a) {
                    a.message && "string" == typeof a.message && (this.table[a.message] = c.extend({
                        node: "",
                        "function": "",
                        arguments: ""
                    }, a))
                },
                print: function() {
                    !h.prototype.helper.isEmpty(this.table) && console && console.table && ((console.group !== d || console.table !== d) && (console.groupCollapsed("--- jQuery Typeahead Debug ---"), console.table(this.table), console.groupEnd()), this.table = {})
                }
            };
        a.console = a.console || {
            log: function() {}
        }, "trim" in String.prototype || (String.prototype.trim = function() {
            return this.replace(/^\s+/, "").replace(/\s+$/, "")
        }), "indexOf" in Array.prototype || (Array.prototype.indexOf = function(a, b) {
            b === d && (b = 0), 0 > b && (b += this.length), 0 > b && (b = 0);
            for (var c = this.length; c > b; b++)
                if (b in this && this[b] === a) return b;
            return -1
        }), Object.keys || (Object.keys = function(a) {
            var b, c = [];
            for (b in a) Object.prototype.hasOwnProperty.call(a, b) && c.push(b);
            return c
        })
    }(window, document, window.jQuery), ! function(a) {
        var b;
        window.UIkit && (b = a(UIkit)), "function" == typeof define && define.amd && define("uikit-slideshow", ["uikit"], function() {
            return b || a(UIkit)
        })
    }(function(a) {
        "use strict";
        var b, c = 0;
        a.component("slideshow", {
            defaults: {
                animation: "fade",
                duration: 500,
                height: "auto",
                start: 0,
                autoplay: !1,
                autoplayInterval: 7e3,
                videoautoplay: !0,
                videomute: !0,
                slices: 15,
                pauseOnHover: !0,
                kenburns: !1,
                kenburnsanimations: ["uk-animation-middle-left", "uk-animation-top-right", "uk-animation-bottom-left", "uk-animation-top-center", "", "uk-animation-bottom-right"]
            },
            current: !1,
            interval: null,
            hovering: !1,
            boot: function() {
                a.ready(function(b) {
                    a.$("[data-uk-slideshow]", b).each(function() {
                        var b = a.$(this);
                        b.data("slideshow") || a.slideshow(b, a.Utils.options(b.attr("data-uk-slideshow")))
                    })
                })
            },
            init: function() {
                var b, d, e = this;
                this.container = this.element.hasClass("uk-slideshow") ? this.element : a.$(this.find(".uk-slideshow")), this.slides = this.container.children(), this.slidesCount = this.slides.length, this.current = this.options.start, this.animating = !1, this.triggers = this.find("[data-uk-slideshow-item]"), this.fixFullscreen = navigator.userAgent.match(/(iPad|iPhone|iPod)/g) && this.container.hasClass("uk-slideshow-fullscreen"), this.options.kenburns && (d = this.options.kenburns === !0 ? "15s" : this.options.kenburns, String(d).match(/(ms|s)$/) || (d += "ms"), "string" == typeof this.options.kenburnsanimations && (this.options.kenburnsanimations = this.options.kenburnsanimations.split(","))), this.slides.each(function(f) {
                    var g = a.$(this),
                        h = g.children("img,video,iframe").eq(0);
                    if (g.data("media", h), g.data("sizer", h), h.length) {
                        var i;
                        switch (h[0].nodeName) {
                            case "IMG":
                                var j = a.$('<div class="uk-cover-background uk-position-cover"></div>').css({
                                    "background-image": "url(" + h.attr("src") + ")"
                                });
                                h.css({
                                    width: "100%",
                                    height: "auto"
                                }), g.prepend(j).data("cover", j);
                                break;
                            case "IFRAME":
                                var k = h[0].src,
                                    l = "sw-" + ++c;
                                h.attr("src", "").on("load", function() {
                                    if ((f !== e.current || f == e.current && !e.options.videoautoplay) && e.pausemedia(h), e.options.videomute) {
                                        e.mutemedia(h);
                                        var a = setInterval(function(b) {
                                            return function() {
                                                e.mutemedia(h), ++b >= 4 && clearInterval(a)
                                            }
                                        }(0), 250)
                                    }
                                }).data("slideshow", e).attr("data-player-id", l).attr("src", [k, k.indexOf("?") > -1 ? "&" : "?", "enablejsapi=1&api=1&player_id=" + l].join("")).addClass("uk-position-absolute"), a.support.touch || h.css("pointer-events", "none"), i = !0, a.cover && (a.cover(h), h.attr("data-uk-cover", "{}"));
                                break;
                            case "VIDEO":
                                h.addClass("uk-cover-object uk-position-absolute"), i = !0, e.options.videomute && e.mutemedia(h)
                        }
                        if (i) {
                            b = a.$("<canvas></canvas>").attr({
                                width: h[0].width,
                                height: h[0].height
                            });
                            var m = a.$('<img style="width:100%;height:auto;">').attr("src", b[0].toDataURL());
                            g.prepend(m), g.data("sizer", m)
                        }
                    } else g.data("sizer", g);
                    e.hasKenBurns(g) && g.data("cover").css({
                        "-webkit-animation-duration": d,
                        "animation-duration": d
                    })
                }), this.on("click.uikit.slideshow", "[data-uk-slideshow-item]", function(b) {
                    b.preventDefault();
                    var c = a.$(this).attr("data-uk-slideshow-item");
                    if (e.current != c) {
                        switch (c) {
                            case "next":
                            case "previous":
                                e["next" == c ? "next" : "previous"]();
                                break;
                            default:
                                e.show(parseInt(c, 10))
                        }
                        e.stop()
                    }
                }), this.slides.attr("aria-hidden", "true").eq(this.current).addClass("uk-active").attr("aria-hidden", "false"), this.triggers.filter('[data-uk-slideshow-item="' + this.current + '"]').addClass("uk-active"), a.$win.on("resize load", a.Utils.debounce(function() {
                    e.resize(), e.fixFullscreen && (e.container.css("height", window.innerHeight), e.slides.css("height", window.innerHeight))
                }, 100)), setTimeout(function() {
                    e.resize()
                }, 80), this.options.autoplay && this.start(), this.options.videoautoplay && this.slides.eq(this.current).data("media") && this.playmedia(this.slides.eq(this.current).data("media")), this.options.kenburns && this.applyKenBurns(this.slides.eq(this.current)), this.container.on({
                    mouseenter: function() {
                        e.options.pauseOnHover && (e.hovering = !0)
                    },
                    mouseleave: function() {
                        e.hovering = !1
                    }
                }), this.on("swipeRight swipeLeft", function(a) {
                    e["swipeLeft" == a.type ? "next" : "previous"]()
                }), this.on("display.uk.check", function() {
                    e.element.is(":visible") && (e.resize(), e.fixFullscreen && (e.container.css("height", window.innerHeight), e.slides.css("height", window.innerHeight)))
                })
            },
            resize: function() {
                if (!this.container.hasClass("uk-slideshow-fullscreen")) {
                    var b = this.options.height;
                    "auto" === this.options.height && (b = 0, this.slides.css("height", "").each(function() {
                        b = Math.max(b, a.$(this).height())
                    })), this.container.css("height", b), this.slides.css("height", b)
                }
            },
            show: function(c, d) {
                if (!this.animating && this.current != c) {
                    this.animating = !0;
                    var e = this,
                        f = this.slides.eq(this.current),
                        g = this.slides.eq(c),
                        h = d ? d : this.current < c ? -1 : 1,
                        i = f.data("media"),
                        j = b[this.options.animation] ? this.options.animation : "fade",
                        k = g.data("media"),
                        l = function() {
                            e.animating && (i && i.is("video,iframe") && e.pausemedia(i), k && k.is("video,iframe") && e.playmedia(k), g.addClass("uk-active").attr("aria-hidden", "false"), f.removeClass("uk-active").attr("aria-hidden", "true"), e.animating = !1, e.current = c, a.Utils.checkDisplay(g, '[class*="uk-animation-"]:not(.uk-cover-background.uk-position-cover)'), e.trigger("show.uk.slideshow", [g]))
                        };
                    e.applyKenBurns(g), a.support.animation || (j = "none"), f = a.$(f), g = a.$(g), b[j].apply(this, [f, g, h]).then(l), e.triggers.removeClass("uk-active"), e.triggers.filter('[data-uk-slideshow-item="' + c + '"]').addClass("uk-active")
                }
            },
            applyKenBurns: function(a) {
                if (this.hasKenBurns(a)) {
                    var b = this.options.kenburnsanimations,
                        c = this.kbindex || 0;
                    a.data("cover").attr("class", "uk-cover-background uk-position-cover").width(), a.data("cover").addClass(["uk-animation-scale", "uk-animation-reverse", b[c].trim()].join(" ")), this.kbindex = b[c + 1] ? c + 1 : 0
                }
            },
            hasKenBurns: function(a) {
                return this.options.kenburns && a.data("cover")
            },
            next: function() {
                this.show(this.slides[this.current + 1] ? this.current + 1 : 0)
            },
            previous: function() {
                this.show(this.slides[this.current - 1] ? this.current - 1 : this.slides.length - 1)
            },
            start: function() {
                this.stop();
                var a = this;
                this.interval = setInterval(function() {
                    a.hovering || a.next()
                }, this.options.autoplayInterval)
            },
            stop: function() {
                this.interval && clearInterval(this.interval)
            },
            playmedia: function(a) {
                if (a && a[0]) switch (a[0].nodeName) {
                    case "VIDEO":
                        this.options.videomute || (a[0].muted = !1), a[0].play();
                        break;
                    case "IFRAME":
                        this.options.videomute || a[0].contentWindow.postMessage('{ "event": "command", "func": "unmute", "method":"setVolume", "value":1}', "*"), a[0].contentWindow.postMessage('{ "event": "command", "func": "playVideo", "method":"play"}', "*")
                }
            },
            pausemedia: function(a) {
                switch (a[0].nodeName) {
                    case "VIDEO":
                        a[0].pause();
                        break;
                    case "IFRAME":
                        a[0].contentWindow.postMessage('{ "event": "command", "func": "pauseVideo", "method":"pause"}', "*")
                }
            },
            mutemedia: function(a) {
                switch (a[0].nodeName) {
                    case "VIDEO":
                        a[0].muted = !0;
                        break;
                    case "IFRAME":
                        a[0].contentWindow.postMessage('{ "event": "command", "func": "mute", "method":"setVolume", "value":0}', "*")
                }
            }
        }), b = {
            none: function() {
                var b = a.$.Deferred();
                return b.resolve(), b.promise()
            },
            scroll: function(b, c, d) {
                var e = a.$.Deferred();
                return b.css("animation-duration", this.options.duration + "ms"), c.css("animation-duration", this.options.duration + "ms"), c.css("opacity", 1).one(a.support.animation.end, function() {
                    b.removeClass(1 === d ? "uk-slideshow-scroll-backward-out" : "uk-slideshow-scroll-forward-out"), c.css("opacity", "").removeClass(1 === d ? "uk-slideshow-scroll-backward-in" : "uk-slideshow-scroll-forward-in"), e.resolve()
                }.bind(this)), b.addClass(1 == d ? "uk-slideshow-scroll-backward-out" : "uk-slideshow-scroll-forward-out"), c.addClass(1 == d ? "uk-slideshow-scroll-backward-in" : "uk-slideshow-scroll-forward-in"), c.width(), e.promise()
            },
            swipe: function(b, c, d) {
                var e = a.$.Deferred();
                return b.css("animation-duration", this.options.duration + "ms"), c.css("animation-duration", this.options.duration + "ms"), c.css("opacity", 1).one(a.support.animation.end, function() {
                    b.removeClass(1 === d ? "uk-slideshow-swipe-backward-out" : "uk-slideshow-swipe-forward-out"), c.css("opacity", "").removeClass(1 === d ? "uk-slideshow-swipe-backward-in" : "uk-slideshow-swipe-forward-in"), e.resolve()
                }.bind(this)), b.addClass(1 == d ? "uk-slideshow-swipe-backward-out" : "uk-slideshow-swipe-forward-out"), c.addClass(1 == d ? "uk-slideshow-swipe-backward-in" : "uk-slideshow-swipe-forward-in"), c.width(), e.promise()
            },
            scale: function(b, c) {
                var d = a.$.Deferred();
                return b.css("animation-duration", this.options.duration + "ms"), c.css("animation-duration", this.options.duration + "ms"), c.css("opacity", 1), b.one(a.support.animation.end, function() {
                    b.removeClass("uk-slideshow-scale-out"), c.css("opacity", ""), d.resolve()
                }.bind(this)), b.addClass("uk-slideshow-scale-out"), b.width(), d.promise()
            },
            fade: function(b, c) {
                var d = a.$.Deferred();
                return b.css("animation-duration", this.options.duration + "ms"), c.css("animation-duration", this.options.duration + "ms"), c.css("opacity", 1), b.one(a.support.animation.end, function() {
                    b.removeClass("uk-slideshow-fade-out"), c.css("opacity", ""), d.resolve()
                }.bind(this)), b.addClass("uk-slideshow-fade-out"), b.width(), d.promise()
            }
        }, a.slideshow.animations = b, window.addEventListener("message", function(b) {
            var c, d = b.data;
            if ("string" == typeof d) try {
                d = JSON.parse(d)
            } catch (e) {
                d = {}
            }
            b.origin && b.origin.indexOf("vimeo") > -1 && "ready" == d.event && d.player_id && (c = a.$('[data-player-id="' + d.player_id + '"]'), c.length && c.data("slideshow").mutemedia(c))
        }, !1)
    }), ! function(a) {
        var b;
        window.UIkit && (b = a(UIkit)), "function" == typeof define && define.amd && define("uikit-sticky", ["uikit"], function() {
            return b || a(UIkit)
        })
    }(function(a) {
        "use strict";

        function b() {
            var b = arguments.length ? arguments : e;
            if (b.length && !(c.scrollTop() < 0))
                for (var f, g, h, i, j = c.scrollTop(), k = d.height(), l = c.height(), m = k - l, n = j > m ? m - j : 0, o = 0; o < b.length; o++)
                    if (i = b[o], i.element.is(":visible") && !i.animate) {
                        if (i.check()) {
                            if (i.top < 0 ? f = 0 : (h = i.element.outerHeight(), f = k - h - i.top - i.options.bottom - j - n, f = 0 > f ? f + i.top : i.top), i.boundary && i.boundary.length) {
                                var p = i.boundary.offset().top;
                                g = i.boundtoparent ? k - (p + i.boundary.outerHeight()) + parseInt(i.boundary.css("padding-bottom")) : k - p - parseInt(i.boundary.css("margin-top")), f = j + h > k - g - (i.top < 0 ? 0 : i.top) ? k - g - (j + h) : f
                            }
                            if (i.currentTop != f) {
                                if (i.element.css({
                                        position: "fixed",
                                        top: f,
                                        width: "undefined" != typeof i.getWidthFrom ? a.$(i.getWidthFrom).width() : i.element.width(),
                                        left: i.wrapper.offset().left
                                    }), !i.init && (i.element.addClass(i.options.clsinit), location.hash && j > 0 && i.options.target)) {
                                    var q = a.$(location.hash);
                                    q.length && setTimeout(function(a, b) {
                                        return function() {
                                            b.element.width();
                                            var c = a.offset(),
                                                d = c.top + a.outerHeight(),
                                                e = b.element.offset(),
                                                f = b.element.outerHeight(),
                                                g = e.top + f;
                                            e.top < d && c.top < g && (j = c.top - f - b.options.target, window.scrollTo(0, j))
                                        }
                                    }(q, i), 0)
                                }
                                i.element.addClass(i.options.clsactive).removeClass(i.options.clsinactive), i.element.trigger("active.uk.sticky"), i.element.css("margin", ""), i.options.animation && i.init && !a.Utils.isInView(i.wrapper) && i.element.addClass(i.options.animation), i.currentTop = f
                            }
                        } else null !== i.currentTop && i.reset();
                        i.init = !0
                    }
        }
        var c = a.$win,
            d = a.$doc,
            e = [],
            f = 1;
        return a.component("sticky", {
            defaults: {
                top: 0,
                bottom: 0,
                animation: "",
                clsinit: "uk-sticky-init",
                clsactive: "uk-active",
                clsinactive: "",
                getWidthFrom: "",
                showup: !1,
                boundary: !1,
                media: !1,
                target: !1,
                disabled: !1
            },
            boot: function() {
                a.$doc.on("scrolling.uk.document", function(a, c) {
                    c && c.dir && (f = c.dir.y, b())
                }), a.$win.on("resize orientationchange", a.Utils.debounce(function() {
                    if (e.length) {
                        for (var a = 0; a < e.length; a++) e[a].reset(!0), e[a].self.computeWrapper();
                        b()
                    }
                }, 100)), a.ready(function(c) {
                    setTimeout(function() {
                        a.$("[data-uk-sticky]", c).each(function() {
                            var b = a.$(this);
                            b.data("sticky") || a.sticky(b, a.Utils.options(b.attr("data-uk-sticky")))
                        }), b()
                    }, 0)
                })
            },
            init: function() {
                var b, g = a.$('<div class="uk-sticky-placeholder"></div>'),
                    h = this.options.boundary;
                this.wrapper = this.element.css("margin", 0).wrap(g).parent(), this.computeWrapper(), h && (h === !0 ? (h = this.wrapper.parent(), b = !0) : "string" == typeof h && (h = a.$(h))), this.sticky = {
                    self: this,
                    options: this.options,
                    element: this.element,
                    currentTop: null,
                    wrapper: this.wrapper,
                    init: !1,
                    getWidthFrom: this.options.getWidthFrom || this.wrapper,
                    boundary: h,
                    boundtoparent: b,
                    top: 0,
                    calcTop: function() {
                        var b = this.options.top;
                        if (this.options.top && "string" == typeof this.options.top)
                            if (this.options.top.match(/^(-|)(\d+)vh$/)) b = window.innerHeight * parseInt(this.options.top, 10) / 100;
                            else {
                                var c = a.$(this.options.top).first();
                                c.length && c.is(":visible") && (b = -1 * (c.offset().top + c.outerHeight() - this.wrapper.offset().top))
                            }
                        this.top = b
                    },
                    reset: function(b) {
                        this.calcTop();
                        var c = function() {
                            this.element.css({
                                position: "",
                                top: "",
                                width: "",
                                left: "",
                                margin: "0"
                            }), this.element.removeClass([this.options.animation, "uk-animation-reverse", this.options.clsactive].join(" ")), this.element.addClass(this.options.clsinactive), this.element.trigger("inactive.uk.sticky"), this.currentTop = null, this.animate = !1
                        }.bind(this);
                        !b && this.options.animation && a.support.animation && !a.Utils.isInView(this.wrapper) ? (this.animate = !0, this.element.removeClass(this.options.animation).one(a.support.animation.end, function() {
                            c()
                        }).width(), this.element.addClass(this.options.animation + " uk-animation-reverse")) : c()
                    },
                    check: function() {
                        if (this.options.disabled) return !1;
                        if (this.options.media) switch (typeof this.options.media) {
                            case "number":
                                if (window.innerWidth < this.options.media) return !1;
                                break;
                            case "string":
                                if (window.matchMedia && !window.matchMedia(this.options.media).matches) return !1
                        }
                        var b = c.scrollTop(),
                            e = d.height(),
                            g = e - window.innerHeight,
                            h = b > g ? g - b : 0,
                            i = this.wrapper.offset().top,
                            j = i - this.top - h,
                            k = b >= j;
                        return k && this.options.showup && (1 == f && (k = !1), -1 == f && !this.element.hasClass(this.options.clsactive) && a.Utils.isInView(this.wrapper) && (k = !1)), k
                    }
                }, this.sticky.calcTop(), e.push(this.sticky)
            },
            update: function() {
                b(this.sticky)
            },
            enable: function() {
                this.options.disabled = !1, this.update()
            },
            disable: function(a) {
                this.options.disabled = !0, this.sticky.reset(a)
            },
            computeWrapper: function() {
                this.wrapper.css({
                    height: -1 == ["absolute", "fixed"].indexOf(this.element.css("position")) ? this.element.outerHeight() : "",
                    "float": "none" != this.element.css("float") ? this.element.css("float") : "",
                    margin: this.element.css("margin")
                })
            }
        }), a.sticky
    });
