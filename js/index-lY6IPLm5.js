(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
    new MutationObserver(l => {
        for (const o of l)
            if (o.type === "childList")
                for (const i of o.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && r(i)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(l) {
        const o = {};
        return l.integrity && (o.integrity = l.integrity), l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy), l.crossOrigin === "use-credentials" ? o.credentials = "include" : l.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o
    }

    function r(l) {
        if (l.ep) return;
        l.ep = !0;
        const o = n(l);
        fetch(l.href, o)
    }
})();
var Ws = {
        exports: {}
    },
    tl = {},
    Qs = {
        exports: {}
    },
    L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zn = Symbol.for("react.element"),
    uc = Symbol.for("react.portal"),
    ac = Symbol.for("react.fragment"),
    cc = Symbol.for("react.strict_mode"),
    dc = Symbol.for("react.profiler"),
    fc = Symbol.for("react.provider"),
    pc = Symbol.for("react.context"),
    mc = Symbol.for("react.forward_ref"),
    hc = Symbol.for("react.suspense"),
    yc = Symbol.for("react.memo"),
    gc = Symbol.for("react.lazy"),
    Ri = Symbol.iterator;

function vc(e) {
    return e === null || typeof e != "object" ? null : (e = Ri && e[Ri] || e["@@iterator"], typeof e == "function" ? e : null)
}
var Ks = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    Gs = Object.assign,
    Ys = {};

function on(e, t, n) {
    this.props = e, this.context = t, this.refs = Ys, this.updater = n || Ks
}
on.prototype.isReactComponent = {};
on.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
on.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function Zs() {}
Zs.prototype = on.prototype;

function Ao(e, t, n) {
    this.props = e, this.context = t, this.refs = Ys, this.updater = n || Ks
}
var Bo = Ao.prototype = new Zs;
Bo.constructor = Ao;
Gs(Bo, on.prototype);
Bo.isPureReactComponent = !0;
var Ii = Array.isArray,
    Xs = Object.prototype.hasOwnProperty,
    Vo = {
        current: null
    },
    Js = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function qs(e, t, n) {
    var r, l = {},
        o = null,
        i = null;
    if (t != null)
        for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t) Xs.call(t, r) && !Js.hasOwnProperty(r) && (l[r] = t[r]);
    var s = arguments.length - 2;
    if (s === 1) l.children = n;
    else if (1 < s) {
        for (var u = Array(s), d = 0; d < s; d++) u[d] = arguments[d + 2];
        l.children = u
    }
    if (e && e.defaultProps)
        for (r in s = e.defaultProps, s) l[r] === void 0 && (l[r] = s[r]);
    return {
        $$typeof: Zn,
        type: e,
        key: o,
        ref: i,
        props: l,
        _owner: Vo.current
    }
}

function xc(e, t) {
    return {
        $$typeof: Zn,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}

function Ho(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Zn
}

function wc(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Fi = /\/+/g;

function wl(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? wc("" + e.key) : t.toString(36)
}

function xr(e, t, n, r, l) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var i = !1;
    if (e === null) i = !0;
    else switch (o) {
        case "string":
        case "number":
            i = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case Zn:
                case uc:
                    i = !0
            }
    }
    if (i) return i = e, l = l(i), e = r === "" ? "." + wl(i, 0) : r, Ii(l) ? (n = "", e != null && (n = e.replace(Fi, "$&/") + "/"), xr(l, t, n, "", function(d) {
        return d
    })) : l != null && (Ho(l) && (l = xc(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(Fi, "$&/") + "/") + e)), t.push(l)), 1;
    if (i = 0, r = r === "" ? "." : r + ":", Ii(e))
        for (var s = 0; s < e.length; s++) {
            o = e[s];
            var u = r + wl(o, s);
            i += xr(o, t, n, u, l)
        } else if (u = vc(e), typeof u == "function")
            for (e = u.call(e), s = 0; !(o = e.next()).done;) o = o.value, u = r + wl(o, s++), i += xr(o, t, n, u, l);
        else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return i
}

function nr(e, t, n) {
    if (e == null) return e;
    var r = [],
        l = 0;
    return xr(e, r, "", "", function(o) {
        return t.call(n, o, l++)
    }), r
}

function kc(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var ae = {
        current: null
    },
    wr = {
        transition: null
    },
    Sc = {
        ReactCurrentDispatcher: ae,
        ReactCurrentBatchConfig: wr,
        ReactCurrentOwner: Vo
    };

function bs() {
    throw Error("act(...) is not supported in production builds of React.")
}
L.Children = {
    map: nr,
    forEach: function(e, t, n) {
        nr(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return nr(e, function() {
            t++
        }), t
    },
    toArray: function(e) {
        return nr(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Ho(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
L.Component = on;
L.Fragment = ac;
L.Profiler = dc;
L.PureComponent = Ao;
L.StrictMode = cc;
L.Suspense = hc;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sc;
L.act = bs;
L.cloneElement = function(e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Gs({}, e.props),
        l = e.key,
        o = e.ref,
        i = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (o = t.ref, i = Vo.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
        for (u in t) Xs.call(t, u) && !Js.hasOwnProperty(u) && (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u])
    }
    var u = arguments.length - 2;
    if (u === 1) r.children = n;
    else if (1 < u) {
        s = Array(u);
        for (var d = 0; d < u; d++) s[d] = arguments[d + 2];
        r.children = s
    }
    return {
        $$typeof: Zn,
        type: e.type,
        key: l,
        ref: o,
        props: r,
        _owner: i
    }
};
L.createContext = function(e) {
    return e = {
        $$typeof: pc,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {
        $$typeof: fc,
        _context: e
    }, e.Consumer = e
};
L.createElement = qs;
L.createFactory = function(e) {
    var t = qs.bind(null, e);
    return t.type = e, t
};
L.createRef = function() {
    return {
        current: null
    }
};
L.forwardRef = function(e) {
    return {
        $$typeof: mc,
        render: e
    }
};
L.isValidElement = Ho;
L.lazy = function(e) {
    return {
        $$typeof: gc,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: kc
    }
};
L.memo = function(e, t) {
    return {
        $$typeof: yc,
        type: e,
        compare: t === void 0 ? null : t
    }
};
L.startTransition = function(e) {
    var t = wr.transition;
    wr.transition = {};
    try {
        e()
    } finally {
        wr.transition = t
    }
};
L.unstable_act = bs;
L.useCallback = function(e, t) {
    return ae.current.useCallback(e, t)
};
L.useContext = function(e) {
    return ae.current.useContext(e)
};
L.useDebugValue = function() {};
L.useDeferredValue = function(e) {
    return ae.current.useDeferredValue(e)
};
L.useEffect = function(e, t) {
    return ae.current.useEffect(e, t)
};
L.useId = function() {
    return ae.current.useId()
};
L.useImperativeHandle = function(e, t, n) {
    return ae.current.useImperativeHandle(e, t, n)
};
L.useInsertionEffect = function(e, t) {
    return ae.current.useInsertionEffect(e, t)
};
L.useLayoutEffect = function(e, t) {
    return ae.current.useLayoutEffect(e, t)
};
L.useMemo = function(e, t) {
    return ae.current.useMemo(e, t)
};
L.useReducer = function(e, t, n) {
    return ae.current.useReducer(e, t, n)
};
L.useRef = function(e) {
    return ae.current.useRef(e)
};
L.useState = function(e) {
    return ae.current.useState(e)
};
L.useSyncExternalStore = function(e, t, n) {
    return ae.current.useSyncExternalStore(e, t, n)
};
L.useTransition = function() {
    return ae.current.useTransition()
};
L.version = "18.3.1";
Qs.exports = L;
var U = Qs.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nc = U,
    Cc = Symbol.for("react.element"),
    Ec = Symbol.for("react.fragment"),
    jc = Object.prototype.hasOwnProperty,
    _c = Nc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Pc = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function eu(e, t, n) {
    var r, l = {},
        o = null,
        i = null;
    n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
    for (r in t) jc.call(t, r) && !Pc.hasOwnProperty(r) && (l[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
    return {
        $$typeof: Cc,
        type: e,
        key: o,
        ref: i,
        props: l,
        _owner: _c.current
    }
}
tl.Fragment = Ec;
tl.jsx = eu;
tl.jsxs = eu;
Ws.exports = tl;
var c = Ws.exports,
    tu = {
        exports: {}
    },
    we = {},
    nu = {
        exports: {}
    },
    ru = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(j, z) {
        var D = j.length;
        j.push(z);
        e: for (; 0 < D;) {
            var Q = D - 1 >>> 1,
                X = j[Q];
            if (0 < l(X, z)) j[Q] = z, j[D] = X, D = Q;
            else break e
        }
    }

    function n(j) {
        return j.length === 0 ? null : j[0]
    }

    function r(j) {
        if (j.length === 0) return null;
        var z = j[0],
            D = j.pop();
        if (D !== z) {
            j[0] = D;
            e: for (var Q = 0, X = j.length, er = X >>> 1; Q < er;) {
                var gt = 2 * (Q + 1) - 1,
                    xl = j[gt],
                    vt = gt + 1,
                    tr = j[vt];
                if (0 > l(xl, D)) vt < X && 0 > l(tr, xl) ? (j[Q] = tr, j[vt] = D, Q = vt) : (j[Q] = xl, j[gt] = D, Q = gt);
                else if (vt < X && 0 > l(tr, D)) j[Q] = tr, j[vt] = D, Q = vt;
                else break e
            }
        }
        return z
    }

    function l(j, z) {
        var D = j.sortIndex - z.sortIndex;
        return D !== 0 ? D : j.id - z.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function() {
            return o.now()
        }
    } else {
        var i = Date,
            s = i.now();
        e.unstable_now = function() {
            return i.now() - s
        }
    }
    var u = [],
        d = [],
        g = 1,
        y = null,
        h = 3,
        x = !1,
        w = !1,
        k = !1,
        P = typeof setTimeout == "function" ? setTimeout : null,
        f = typeof clearTimeout == "function" ? clearTimeout : null,
        a = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function p(j) {
        for (var z = n(d); z !== null;) {
            if (z.callback === null) r(d);
            else if (z.startTime <= j) r(d), z.sortIndex = z.expirationTime, t(u, z);
            else break;
            z = n(d)
        }
    }

    function m(j) {
        if (k = !1, p(j), !w)
            if (n(u) !== null) w = !0, gl(N);
            else {
                var z = n(d);
                z !== null && vl(m, z.startTime - j)
            }
    }

    function N(j, z) {
        w = !1, k && (k = !1, f(S), S = -1), x = !0;
        var D = h;
        try {
            for (p(z), y = n(u); y !== null && (!(y.expirationTime > z) || j && !Pe());) {
                var Q = y.callback;
                if (typeof Q == "function") {
                    y.callback = null, h = y.priorityLevel;
                    var X = Q(y.expirationTime <= z);
                    z = e.unstable_now(), typeof X == "function" ? y.callback = X : y === n(u) && r(u), p(z)
                } else r(u);
                y = n(u)
            }
            if (y !== null) var er = !0;
            else {
                var gt = n(d);
                gt !== null && vl(m, gt.startTime - z), er = !1
            }
            return er
        } finally {
            y = null, h = D, x = !1
        }
    }
    var _ = !1,
        C = null,
        S = -1,
        R = 5,
        T = -1;

    function Pe() {
        return !(e.unstable_now() - T < R)
    }

    function an() {
        if (C !== null) {
            var j = e.unstable_now();
            T = j;
            var z = !0;
            try {
                z = C(!0, j)
            } finally {
                z ? cn() : (_ = !1, C = null)
            }
        } else _ = !1
    }
    var cn;
    if (typeof a == "function") cn = function() {
        a(an)
    };
    else if (typeof MessageChannel < "u") {
        var Oi = new MessageChannel,
            sc = Oi.port2;
        Oi.port1.onmessage = an, cn = function() {
            sc.postMessage(null)
        }
    } else cn = function() {
        P(an, 0)
    };

    function gl(j) {
        C = j, _ || (_ = !0, cn())
    }

    function vl(j, z) {
        S = P(function() {
            j(e.unstable_now())
        }, z)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(j) {
        j.callback = null
    }, e.unstable_continueExecution = function() {
        w || x || (w = !0, gl(N))
    }, e.unstable_forceFrameRate = function(j) {
        0 > j || 125 < j ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : R = 0 < j ? Math.floor(1e3 / j) : 5
    }, e.unstable_getCurrentPriorityLevel = function() {
        return h
    }, e.unstable_getFirstCallbackNode = function() {
        return n(u)
    }, e.unstable_next = function(j) {
        switch (h) {
            case 1:
            case 2:
            case 3:
                var z = 3;
                break;
            default:
                z = h
        }
        var D = h;
        h = z;
        try {
            return j()
        } finally {
            h = D
        }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(j, z) {
        switch (j) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                j = 3
        }
        var D = h;
        h = j;
        try {
            return z()
        } finally {
            h = D
        }
    }, e.unstable_scheduleCallback = function(j, z, D) {
        var Q = e.unstable_now();
        switch (typeof D == "object" && D !== null ? (D = D.delay, D = typeof D == "number" && 0 < D ? Q + D : Q) : D = Q, j) {
            case 1:
                var X = -1;
                break;
            case 2:
                X = 250;
                break;
            case 5:
                X = 1073741823;
                break;
            case 4:
                X = 1e4;
                break;
            default:
                X = 5e3
        }
        return X = D + X, j = {
            id: g++,
            callback: z,
            priorityLevel: j,
            startTime: D,
            expirationTime: X,
            sortIndex: -1
        }, D > Q ? (j.sortIndex = D, t(d, j), n(u) === null && j === n(d) && (k ? (f(S), S = -1) : k = !0, vl(m, D - Q))) : (j.sortIndex = X, t(u, j), w || x || (w = !0, gl(N))), j
    }, e.unstable_shouldYield = Pe, e.unstable_wrapCallback = function(j) {
        var z = h;
        return function() {
            var D = h;
            h = z;
            try {
                return j.apply(this, arguments)
            } finally {
                h = D
            }
        }
    }
})(ru);
nu.exports = ru;
var zc = nu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tc = U,
    xe = zc;

function v(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var lu = new Set,
    Ln = {};

function Dt(e, t) {
    qt(e, t), qt(e + "Capture", t)
}

function qt(e, t) {
    for (Ln[e] = t, e = 0; e < t.length; e++) lu.add(t[e])
}
var Ke = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    Gl = Object.prototype.hasOwnProperty,
    Dc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Ui = {},
    $i = {};

function Lc(e) {
    return Gl.call($i, e) ? !0 : Gl.call(Ui, e) ? !1 : Dc.test(e) ? $i[e] = !0 : (Ui[e] = !0, !1)
}

function Mc(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function Oc(e, t, n, r) {
    if (t === null || typeof t > "u" || Mc(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function ce(e, t, n, r, l, o, i) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i
}
var te = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    te[e] = new ce(e, 0, !1, e, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) {
    var t = e[0];
    te[t] = new ce(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    te[e] = new ce(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    te[e] = new ce(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    te[e] = new ce(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    te[e] = new ce(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
    te[e] = new ce(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    te[e] = new ce(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
    te[e] = new ce(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var Wo = /[\-:]([a-z])/g;

function Qo(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Wo, Qo);
    te[t] = new ce(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Wo, Qo);
    te[t] = new ce(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Wo, Qo);
    te[t] = new ce(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    te[e] = new ce(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
te.xlinkHref = new ce("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
    te[e] = new ce(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function Ko(e, t, n, r) {
    var l = te.hasOwnProperty(t) ? te[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Oc(t, n, l, r) && (n = null), r || l === null ? Lc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Xe = Tc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    rr = Symbol.for("react.element"),
    Ot = Symbol.for("react.portal"),
    Rt = Symbol.for("react.fragment"),
    Go = Symbol.for("react.strict_mode"),
    Yl = Symbol.for("react.profiler"),
    ou = Symbol.for("react.provider"),
    iu = Symbol.for("react.context"),
    Yo = Symbol.for("react.forward_ref"),
    Zl = Symbol.for("react.suspense"),
    Xl = Symbol.for("react.suspense_list"),
    Zo = Symbol.for("react.memo"),
    qe = Symbol.for("react.lazy"),
    su = Symbol.for("react.offscreen"),
    Ai = Symbol.iterator;

function dn(e) {
    return e === null || typeof e != "object" ? null : (e = Ai && e[Ai] || e["@@iterator"], typeof e == "function" ? e : null)
}
var H = Object.assign,
    kl;

function xn(e) {
    if (kl === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        kl = t && t[1] || ""
    }
    return `
` + kl + e
}
var Sl = !1;

function Nl(e, t) {
    if (!e || Sl) return "";
    Sl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                    throw Error()
                }, Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (d) {
                    var r = d
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (d) {
                    r = d
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (d) {
                r = d
            }
            e()
        }
    } catch (d) {
        if (d && r && typeof d.stack == "string") {
            for (var l = d.stack.split(`
`), o = r.stack.split(`
`), i = l.length - 1, s = o.length - 1; 1 <= i && 0 <= s && l[i] !== o[s];) s--;
            for (; 1 <= i && 0 <= s; i--, s--)
                if (l[i] !== o[s]) {
                    if (i !== 1 || s !== 1)
                        do
                            if (i--, s--, 0 > s || l[i] !== o[s]) {
                                var u = `
` + l[i].replace(" at new ", " at ");
                                return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u
                            }
                    while (1 <= i && 0 <= s);
                    break
                }
        }
    } finally {
        Sl = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? xn(e) : ""
}

function Rc(e) {
    switch (e.tag) {
        case 5:
            return xn(e.type);
        case 16:
            return xn("Lazy");
        case 13:
            return xn("Suspense");
        case 19:
            return xn("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = Nl(e.type, !1), e;
        case 11:
            return e = Nl(e.type.render, !1), e;
        case 1:
            return e = Nl(e.type, !0), e;
        default:
            return ""
    }
}

function Jl(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case Rt:
            return "Fragment";
        case Ot:
            return "Portal";
        case Yl:
            return "Profiler";
        case Go:
            return "StrictMode";
        case Zl:
            return "Suspense";
        case Xl:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case iu:
            return (e.displayName || "Context") + ".Consumer";
        case ou:
            return (e._context.displayName || "Context") + ".Provider";
        case Yo:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Zo:
            return t = e.displayName || null, t !== null ? t : Jl(e.type) || "Memo";
        case qe:
            t = e._payload, e = e._init;
            try {
                return Jl(e(t))
            } catch {}
    }
    return null
}

function Ic(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Jl(t);
        case 8:
            return t === Go ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t
    }
    return null
}

function ft(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function uu(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function Fc(e) {
    var t = uu(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var l = n.get,
            o = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return l.call(this)
            },
            set: function(i) {
                r = "" + i, o.call(this, i)
            }
        }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }), {
            getValue: function() {
                return r
            },
            setValue: function(i) {
                r = "" + i
            },
            stopTracking: function() {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function lr(e) {
    e._valueTracker || (e._valueTracker = Fc(e))
}

function au(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = uu(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function Dr(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function ql(e, t) {
    var n = t.checked;
    return H({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ? ? e._wrapperState.initialChecked
    })
}

function Bi(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    n = ft(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function cu(e, t) {
    t = t.checked, t != null && Ko(e, "checked", t, !1)
}

function bl(e, t) {
    cu(e, t);
    var n = ft(t.value),
        r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? eo(e, t.type, n) : t.hasOwnProperty("defaultValue") && eo(e, t.type, ft(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function Vi(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function eo(e, t, n) {
    (t !== "number" || Dr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var wn = Array.isArray;

function Kt(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
        for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + ft(n), t = null, l = 0; l < e.length; l++) {
            if (e[l].value === n) {
                e[l].selected = !0, r && (e[l].defaultSelected = !0);
                return
            }
            t !== null || e[l].disabled || (t = e[l])
        }
        t !== null && (t.selected = !0)
    }
}

function to(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(v(91));
    return H({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function Hi(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(v(92));
            if (wn(n)) {
                if (1 < n.length) throw Error(v(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {
        initialValue: ft(n)
    }
}

function du(e, t) {
    var n = ft(t.value),
        r = ft(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function Wi(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function fu(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function no(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? fu(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var or, pu = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, l)
        })
    } : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
        for (or = or || document.createElement("div"), or.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = or.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function Mn(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Nn = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    },
    Uc = ["Webkit", "ms", "Moz", "O"];
Object.keys(Nn).forEach(function(e) {
    Uc.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), Nn[t] = Nn[e]
    })
});

function mu(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Nn.hasOwnProperty(e) && Nn[e] ? ("" + t).trim() : t + "px"
}

function hu(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                l = mu(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l
        }
}
var $c = H({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});

function ro(e, t) {
    if (t) {
        if ($c[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(v(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(v(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(v(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(v(62))
    }
}

function lo(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}
var oo = null;

function Xo(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var io = null,
    Gt = null,
    Yt = null;

function Qi(e) {
    if (e = qn(e)) {
        if (typeof io != "function") throw Error(v(280));
        var t = e.stateNode;
        t && (t = il(t), io(e.stateNode, e.type, t))
    }
}

function yu(e) {
    Gt ? Yt ? Yt.push(e) : Yt = [e] : Gt = e
}

function gu() {
    if (Gt) {
        var e = Gt,
            t = Yt;
        if (Yt = Gt = null, Qi(e), t)
            for (e = 0; e < t.length; e++) Qi(t[e])
    }
}

function vu(e, t) {
    return e(t)
}

function xu() {}
var Cl = !1;

function wu(e, t, n) {
    if (Cl) return e(t, n);
    Cl = !0;
    try {
        return vu(e, t, n)
    } finally {
        Cl = !1, (Gt !== null || Yt !== null) && (xu(), gu())
    }
}

function On(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = il(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(v(231, t, typeof n));
    return n
}
var so = !1;
if (Ke) try {
    var fn = {};
    Object.defineProperty(fn, "passive", {
        get: function() {
            so = !0
        }
    }), window.addEventListener("test", fn, fn), window.removeEventListener("test", fn, fn)
} catch {
    so = !1
}

function Ac(e, t, n, r, l, o, i, s, u) {
    var d = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, d)
    } catch (g) {
        this.onError(g)
    }
}
var Cn = !1,
    Lr = null,
    Mr = !1,
    uo = null,
    Bc = {
        onError: function(e) {
            Cn = !0, Lr = e
        }
    };

function Vc(e, t, n, r, l, o, i, s, u) {
    Cn = !1, Lr = null, Ac.apply(Bc, arguments)
}

function Hc(e, t, n, r, l, o, i, s, u) {
    if (Vc.apply(this, arguments), Cn) {
        if (Cn) {
            var d = Lr;
            Cn = !1, Lr = null
        } else throw Error(v(198));
        Mr || (Mr = !0, uo = d)
    }
}

function Lt(e) {
    var t = e,
        n = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function ku(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function Ki(e) {
    if (Lt(e) !== e) throw Error(v(188))
}

function Wc(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Lt(e), t === null) throw Error(v(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t;;) {
        var l = n.return;
        if (l === null) break;
        var o = l.alternate;
        if (o === null) {
            if (r = l.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (l.child === o.child) {
            for (o = l.child; o;) {
                if (o === n) return Ki(l), e;
                if (o === r) return Ki(l), t;
                o = o.sibling
            }
            throw Error(v(188))
        }
        if (n.return !== r.return) n = l, r = o;
        else {
            for (var i = !1, s = l.child; s;) {
                if (s === n) {
                    i = !0, n = l, r = o;
                    break
                }
                if (s === r) {
                    i = !0, r = l, n = o;
                    break
                }
                s = s.sibling
            }
            if (!i) {
                for (s = o.child; s;) {
                    if (s === n) {
                        i = !0, n = o, r = l;
                        break
                    }
                    if (s === r) {
                        i = !0, r = o, n = l;
                        break
                    }
                    s = s.sibling
                }
                if (!i) throw Error(v(189))
            }
        }
        if (n.alternate !== r) throw Error(v(190))
    }
    if (n.tag !== 3) throw Error(v(188));
    return n.stateNode.current === n ? e : t
}

function Su(e) {
    return e = Wc(e), e !== null ? Nu(e) : null
}

function Nu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = Nu(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var Cu = xe.unstable_scheduleCallback,
    Gi = xe.unstable_cancelCallback,
    Qc = xe.unstable_shouldYield,
    Kc = xe.unstable_requestPaint,
    K = xe.unstable_now,
    Gc = xe.unstable_getCurrentPriorityLevel,
    Jo = xe.unstable_ImmediatePriority,
    Eu = xe.unstable_UserBlockingPriority,
    Or = xe.unstable_NormalPriority,
    Yc = xe.unstable_LowPriority,
    ju = xe.unstable_IdlePriority,
    nl = null,
    $e = null;

function Zc(e) {
    if ($e && typeof $e.onCommitFiberRoot == "function") try {
        $e.onCommitFiberRoot(nl, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var Me = Math.clz32 ? Math.clz32 : qc,
    Xc = Math.log,
    Jc = Math.LN2;

function qc(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Xc(e) / Jc | 0) | 0
}
var ir = 64,
    sr = 4194304;

function kn(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function Rr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        l = e.suspendedLanes,
        o = e.pingedLanes,
        i = n & 268435455;
    if (i !== 0) {
        var s = i & ~l;
        s !== 0 ? r = kn(s) : (o &= i, o !== 0 && (r = kn(o)))
    } else i = n & ~l, i !== 0 ? r = kn(i) : o !== 0 && (r = kn(o));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= r; 0 < t;) n = 31 - Me(t), l = 1 << n, r |= e[n], t &= ~l;
    return r
}

function bc(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}

function ed(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o;) {
        var i = 31 - Me(o),
            s = 1 << i,
            u = l[i];
        u === -1 ? (!(s & n) || s & r) && (l[i] = bc(s, t)) : u <= t && (e.expiredLanes |= s), o &= ~s
    }
}

function ao(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function _u() {
    var e = ir;
    return ir <<= 1, !(ir & 4194240) && (ir = 64), e
}

function El(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function Xn(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Me(t), e[t] = n
}

function td(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var l = 31 - Me(n),
            o = 1 << l;
        t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o
    }
}

function qo(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - Me(n),
            l = 1 << r;
        l & t | e[r] & t && (e[r] |= t), n &= ~l
    }
}
var O = 0;

function Pu(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var zu, bo, Tu, Du, Lu, co = !1,
    ur = [],
    lt = null,
    ot = null,
    it = null,
    Rn = new Map,
    In = new Map,
    et = [],
    nd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function Yi(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            lt = null;
            break;
        case "dragenter":
        case "dragleave":
            ot = null;
            break;
        case "mouseover":
        case "mouseout":
            it = null;
            break;
        case "pointerover":
        case "pointerout":
            Rn.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            In.delete(t.pointerId)
    }
}

function pn(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l]
    }, t !== null && (t = qn(t), t !== null && bo(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e)
}

function rd(e, t, n, r, l) {
    switch (t) {
        case "focusin":
            return lt = pn(lt, e, t, n, r, l), !0;
        case "dragenter":
            return ot = pn(ot, e, t, n, r, l), !0;
        case "mouseover":
            return it = pn(it, e, t, n, r, l), !0;
        case "pointerover":
            var o = l.pointerId;
            return Rn.set(o, pn(Rn.get(o) || null, e, t, n, r, l)), !0;
        case "gotpointercapture":
            return o = l.pointerId, In.set(o, pn(In.get(o) || null, e, t, n, r, l)), !0
    }
    return !1
}

function Mu(e) {
    var t = kt(e.target);
    if (t !== null) {
        var n = Lt(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = ku(n), t !== null) {
                    e.blockedOn = t, Lu(e.priority, function() {
                        Tu(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function kr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = fo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            oo = r, n.target.dispatchEvent(r), oo = null
        } else return t = qn(n), t !== null && bo(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function Zi(e, t, n) {
    kr(e) && n.delete(t)
}

function ld() {
    co = !1, lt !== null && kr(lt) && (lt = null), ot !== null && kr(ot) && (ot = null), it !== null && kr(it) && (it = null), Rn.forEach(Zi), In.forEach(Zi)
}

function mn(e, t) {
    e.blockedOn === t && (e.blockedOn = null, co || (co = !0, xe.unstable_scheduleCallback(xe.unstable_NormalPriority, ld)))
}

function Fn(e) {
    function t(l) {
        return mn(l, e)
    }
    if (0 < ur.length) {
        mn(ur[0], e);
        for (var n = 1; n < ur.length; n++) {
            var r = ur[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (lt !== null && mn(lt, e), ot !== null && mn(ot, e), it !== null && mn(it, e), Rn.forEach(t), In.forEach(t), n = 0; n < et.length; n++) r = et[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < et.length && (n = et[0], n.blockedOn === null);) Mu(n), n.blockedOn === null && et.shift()
}
var Zt = Xe.ReactCurrentBatchConfig,
    Ir = !0;

function od(e, t, n, r) {
    var l = O,
        o = Zt.transition;
    Zt.transition = null;
    try {
        O = 1, ei(e, t, n, r)
    } finally {
        O = l, Zt.transition = o
    }
}

function id(e, t, n, r) {
    var l = O,
        o = Zt.transition;
    Zt.transition = null;
    try {
        O = 4, ei(e, t, n, r)
    } finally {
        O = l, Zt.transition = o
    }
}

function ei(e, t, n, r) {
    if (Ir) {
        var l = fo(e, t, n, r);
        if (l === null) Rl(e, t, r, Fr, n), Yi(e, r);
        else if (rd(l, e, t, n, r)) r.stopPropagation();
        else if (Yi(e, r), t & 4 && -1 < nd.indexOf(e)) {
            for (; l !== null;) {
                var o = qn(l);
                if (o !== null && zu(o), o = fo(e, t, n, r), o === null && Rl(e, t, r, Fr, n), o === l) break;
                l = o
            }
            l !== null && r.stopPropagation()
        } else Rl(e, t, r, null, n)
    }
}
var Fr = null;

function fo(e, t, n, r) {
    if (Fr = null, e = Xo(r), e = kt(e), e !== null)
        if (t = Lt(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
        if (e = ku(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return Fr = e, null
}

function Ou(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (Gc()) {
                case Jo:
                    return 1;
                case Eu:
                    return 4;
                case Or:
                case Yc:
                    return 16;
                case ju:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var nt = null,
    ti = null,
    Sr = null;

function Ru() {
    if (Sr) return Sr;
    var e, t = ti,
        n = t.length,
        r, l = "value" in nt ? nt.value : nt.textContent,
        o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
    return Sr = l.slice(e, 1 < r ? 1 - r : void 0)
}

function Nr(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function ar() {
    return !0
}

function Xi() {
    return !1
}

function ke(e) {
    function t(n, r, l, o, i) {
        this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
        for (var s in e) e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(o) : o[s]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? ar : Xi, this.isPropagationStopped = Xi, this
    }
    return H(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ar)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ar)
        },
        persist: function() {},
        isPersistent: ar
    }), t
}
var sn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    ni = ke(sn),
    Jn = H({}, sn, {
        view: 0,
        detail: 0
    }),
    sd = ke(Jn),
    jl, _l, hn, rl = H({}, Jn, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: ri,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== hn && (hn && e.type === "mousemove" ? (jl = e.screenX - hn.screenX, _l = e.screenY - hn.screenY) : _l = jl = 0, hn = e), jl)
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : _l
        }
    }),
    Ji = ke(rl),
    ud = H({}, rl, {
        dataTransfer: 0
    }),
    ad = ke(ud),
    cd = H({}, Jn, {
        relatedTarget: 0
    }),
    Pl = ke(cd),
    dd = H({}, sn, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    fd = ke(dd),
    pd = H({}, sn, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    md = ke(pd),
    hd = H({}, sn, {
        data: 0
    }),
    qi = ke(hd),
    yd = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    },
    gd = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    },
    vd = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function xd(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = vd[e]) ? !!t[e] : !1
}

function ri() {
    return xd
}
var wd = H({}, Jn, {
        key: function(e) {
            if (e.key) {
                var t = yd[e.key] || e.key;
                if (t !== "Unidentified") return t
            }
            return e.type === "keypress" ? (e = Nr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? gd[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: ri,
        charCode: function(e) {
            return e.type === "keypress" ? Nr(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? Nr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }),
    kd = ke(wd),
    Sd = H({}, rl, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }),
    bi = ke(Sd),
    Nd = H({}, Jn, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: ri
    }),
    Cd = ke(Nd),
    Ed = H({}, sn, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    jd = ke(Ed),
    _d = H({}, rl, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    Pd = ke(_d),
    zd = [9, 13, 27, 32],
    li = Ke && "CompositionEvent" in window,
    En = null;
Ke && "documentMode" in document && (En = document.documentMode);
var Td = Ke && "TextEvent" in window && !En,
    Iu = Ke && (!li || En && 8 < En && 11 >= En),
    es = " ",
    ts = !1;

function Fu(e, t) {
    switch (e) {
        case "keyup":
            return zd.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function Uu(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var It = !1;

function Dd(e, t) {
    switch (e) {
        case "compositionend":
            return Uu(t);
        case "keypress":
            return t.which !== 32 ? null : (ts = !0, es);
        case "textInput":
            return e = t.data, e === es && ts ? null : e;
        default:
            return null
    }
}

function Ld(e, t) {
    if (It) return e === "compositionend" || !li && Fu(e, t) ? (e = Ru(), Sr = ti = nt = null, It = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return Iu && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var Md = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};

function ns(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Md[e.type] : t === "textarea"
}

function $u(e, t, n, r) {
    yu(r), t = Ur(t, "onChange"), 0 < t.length && (n = new ni("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}
var jn = null,
    Un = null;

function Od(e) {
    Xu(e, 0)
}

function ll(e) {
    var t = $t(e);
    if (au(t)) return e
}

function Rd(e, t) {
    if (e === "change") return t
}
var Au = !1;
if (Ke) {
    var zl;
    if (Ke) {
        var Tl = "oninput" in document;
        if (!Tl) {
            var rs = document.createElement("div");
            rs.setAttribute("oninput", "return;"), Tl = typeof rs.oninput == "function"
        }
        zl = Tl
    } else zl = !1;
    Au = zl && (!document.documentMode || 9 < document.documentMode)
}

function ls() {
    jn && (jn.detachEvent("onpropertychange", Bu), Un = jn = null)
}

function Bu(e) {
    if (e.propertyName === "value" && ll(Un)) {
        var t = [];
        $u(t, Un, e, Xo(e)), wu(Od, t)
    }
}

function Id(e, t, n) {
    e === "focusin" ? (ls(), jn = t, Un = n, jn.attachEvent("onpropertychange", Bu)) : e === "focusout" && ls()
}

function Fd(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return ll(Un)
}

function Ud(e, t) {
    if (e === "click") return ll(t)
}

function $d(e, t) {
    if (e === "input" || e === "change") return ll(t)
}

function Ad(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Re = typeof Object.is == "function" ? Object.is : Ad;

function $n(e, t) {
    if (Re(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var l = n[r];
        if (!Gl.call(t, l) || !Re(e[l], t[l])) return !1
    }
    return !0
}

function os(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function is(e, t) {
    var n = os(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {
                node: n,
                offset: t - e
            };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = os(n)
    }
}

function Vu(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Vu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function Hu() {
    for (var e = window, t = Dr(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow;
        else break;
        t = Dr(e.document)
    }
    return t
}

function oi(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function Bd(e) {
    var t = Hu(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Vu(n.ownerDocument.documentElement, n)) {
        if (r !== null && oi(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var l = n.textContent.length,
                    o = Math.min(r.start, l);
                r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = is(n, o);
                var i = is(n, r);
                l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var Vd = Ke && "documentMode" in document && 11 >= document.documentMode,
    Ft = null,
    po = null,
    _n = null,
    mo = !1;

function ss(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    mo || Ft == null || Ft !== Dr(r) || (r = Ft, "selectionStart" in r && oi(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), _n && $n(_n, r) || (_n = r, r = Ur(po, "onSelect"), 0 < r.length && (t = new ni("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = Ft)))
}

function cr(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var Ut = {
        animationend: cr("Animation", "AnimationEnd"),
        animationiteration: cr("Animation", "AnimationIteration"),
        animationstart: cr("Animation", "AnimationStart"),
        transitionend: cr("Transition", "TransitionEnd")
    },
    Dl = {},
    Wu = {};
Ke && (Wu = document.createElement("div").style, "AnimationEvent" in window || (delete Ut.animationend.animation, delete Ut.animationiteration.animation, delete Ut.animationstart.animation), "TransitionEvent" in window || delete Ut.transitionend.transition);

function ol(e) {
    if (Dl[e]) return Dl[e];
    if (!Ut[e]) return e;
    var t = Ut[e],
        n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Wu) return Dl[e] = t[n];
    return e
}
var Qu = ol("animationend"),
    Ku = ol("animationiteration"),
    Gu = ol("animationstart"),
    Yu = ol("transitionend"),
    Zu = new Map,
    us = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function mt(e, t) {
    Zu.set(e, t), Dt(t, [e])
}
for (var Ll = 0; Ll < us.length; Ll++) {
    var Ml = us[Ll],
        Hd = Ml.toLowerCase(),
        Wd = Ml[0].toUpperCase() + Ml.slice(1);
    mt(Hd, "on" + Wd)
}
mt(Qu, "onAnimationEnd");
mt(Ku, "onAnimationIteration");
mt(Gu, "onAnimationStart");
mt("dblclick", "onDoubleClick");
mt("focusin", "onFocus");
mt("focusout", "onBlur");
mt(Yu, "onTransitionEnd");
qt("onMouseEnter", ["mouseout", "mouseover"]);
qt("onMouseLeave", ["mouseout", "mouseover"]);
qt("onPointerEnter", ["pointerout", "pointerover"]);
qt("onPointerLeave", ["pointerout", "pointerover"]);
Dt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Dt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Dt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Dt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Dt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Dt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Sn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    Qd = new Set("cancel close invalid load scroll toggle".split(" ").concat(Sn));

function as(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, Hc(r, t, void 0, e), e.currentTarget = null
}

function Xu(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            l = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                    var s = r[i],
                        u = s.instance,
                        d = s.currentTarget;
                    if (s = s.listener, u !== o && l.isPropagationStopped()) break e;
                    as(l, s, d), o = u
                } else
                    for (i = 0; i < r.length; i++) {
                        if (s = r[i], u = s.instance, d = s.currentTarget, s = s.listener, u !== o && l.isPropagationStopped()) break e;
                        as(l, s, d), o = u
                    }
        }
    }
    if (Mr) throw e = uo, Mr = !1, uo = null, e
}

function F(e, t) {
    var n = t[xo];
    n === void 0 && (n = t[xo] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Ju(t, e, 2, !1), n.add(r))
}

function Ol(e, t, n) {
    var r = 0;
    t && (r |= 4), Ju(n, e, r, t)
}
var dr = "_reactListening" + Math.random().toString(36).slice(2);

function An(e) {
    if (!e[dr]) {
        e[dr] = !0, lu.forEach(function(n) {
            n !== "selectionchange" && (Qd.has(n) || Ol(n, !1, e), Ol(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[dr] || (t[dr] = !0, Ol("selectionchange", !1, t))
    }
}

function Ju(e, t, n, r) {
    switch (Ou(t)) {
        case 1:
            var l = od;
            break;
        case 4:
            l = id;
            break;
        default:
            l = ei
    }
    n = l.bind(null, t, n, e), l = void 0, !so || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: l
    }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, {
        passive: l
    }) : e.addEventListener(t, n, !1)
}

function Rl(e, t, n, r, l) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
        if (r === null) return;
        var i = r.tag;
        if (i === 3 || i === 4) {
            var s = r.stateNode.containerInfo;
            if (s === l || s.nodeType === 8 && s.parentNode === l) break;
            if (i === 4)
                for (i = r.return; i !== null;) {
                    var u = i.tag;
                    if ((u === 3 || u === 4) && (u = i.stateNode.containerInfo, u === l || u.nodeType === 8 && u.parentNode === l)) return;
                    i = i.return
                }
            for (; s !== null;) {
                if (i = kt(s), i === null) return;
                if (u = i.tag, u === 5 || u === 6) {
                    r = o = i;
                    continue e
                }
                s = s.parentNode
            }
        }
        r = r.return
    }
    wu(function() {
        var d = o,
            g = Xo(n),
            y = [];
        e: {
            var h = Zu.get(e);
            if (h !== void 0) {
                var x = ni,
                    w = e;
                switch (e) {
                    case "keypress":
                        if (Nr(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        x = kd;
                        break;
                    case "focusin":
                        w = "focus", x = Pl;
                        break;
                    case "focusout":
                        w = "blur", x = Pl;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        x = Pl;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        x = Ji;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        x = ad;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        x = Cd;
                        break;
                    case Qu:
                    case Ku:
                    case Gu:
                        x = fd;
                        break;
                    case Yu:
                        x = jd;
                        break;
                    case "scroll":
                        x = sd;
                        break;
                    case "wheel":
                        x = Pd;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        x = md;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        x = bi
                }
                var k = (t & 4) !== 0,
                    P = !k && e === "scroll",
                    f = k ? h !== null ? h + "Capture" : null : h;
                k = [];
                for (var a = d, p; a !== null;) {
                    p = a;
                    var m = p.stateNode;
                    if (p.tag === 5 && m !== null && (p = m, f !== null && (m = On(a, f), m != null && k.push(Bn(a, m, p)))), P) break;
                    a = a.return
                }
                0 < k.length && (h = new x(h, w, null, n, g), y.push({
                    event: h,
                    listeners: k
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (h = e === "mouseover" || e === "pointerover", x = e === "mouseout" || e === "pointerout", h && n !== oo && (w = n.relatedTarget || n.fromElement) && (kt(w) || w[Ge])) break e;
                if ((x || h) && (h = g.window === g ? g : (h = g.ownerDocument) ? h.defaultView || h.parentWindow : window, x ? (w = n.relatedTarget || n.toElement, x = d, w = w ? kt(w) : null, w !== null && (P = Lt(w), w !== P || w.tag !== 5 && w.tag !== 6) && (w = null)) : (x = null, w = d), x !== w)) {
                    if (k = Ji, m = "onMouseLeave", f = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (k = bi, m = "onPointerLeave", f = "onPointerEnter", a = "pointer"), P = x == null ? h : $t(x), p = w == null ? h : $t(w), h = new k(m, a + "leave", x, n, g), h.target = P, h.relatedTarget = p, m = null, kt(g) === d && (k = new k(f, a + "enter", w, n, g), k.target = p, k.relatedTarget = P, m = k), P = m, x && w) t: {
                        for (k = x, f = w, a = 0, p = k; p; p = Mt(p)) a++;
                        for (p = 0, m = f; m; m = Mt(m)) p++;
                        for (; 0 < a - p;) k = Mt(k),
                        a--;
                        for (; 0 < p - a;) f = Mt(f),
                        p--;
                        for (; a--;) {
                            if (k === f || f !== null && k === f.alternate) break t;
                            k = Mt(k), f = Mt(f)
                        }
                        k = null
                    }
                    else k = null;
                    x !== null && cs(y, h, x, k, !1), w !== null && P !== null && cs(y, P, w, k, !0)
                }
            }
            e: {
                if (h = d ? $t(d) : window, x = h.nodeName && h.nodeName.toLowerCase(), x === "select" || x === "input" && h.type === "file") var N = Rd;
                else if (ns(h))
                    if (Au) N = $d;
                    else {
                        N = Fd;
                        var _ = Id
                    }
                else(x = h.nodeName) && x.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (N = Ud);
                if (N && (N = N(e, d))) {
                    $u(y, N, n, g);
                    break e
                }
                _ && _(e, h, d),
                e === "focusout" && (_ = h._wrapperState) && _.controlled && h.type === "number" && eo(h, "number", h.value)
            }
            switch (_ = d ? $t(d) : window, e) {
                case "focusin":
                    (ns(_) || _.contentEditable === "true") && (Ft = _, po = d, _n = null);
                    break;
                case "focusout":
                    _n = po = Ft = null;
                    break;
                case "mousedown":
                    mo = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    mo = !1, ss(y, n, g);
                    break;
                case "selectionchange":
                    if (Vd) break;
                case "keydown":
                case "keyup":
                    ss(y, n, g)
            }
            var C;
            if (li) e: {
                switch (e) {
                    case "compositionstart":
                        var S = "onCompositionStart";
                        break e;
                    case "compositionend":
                        S = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        S = "onCompositionUpdate";
                        break e
                }
                S = void 0
            }
            else It ? Fu(e, n) && (S = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (S = "onCompositionStart");S && (Iu && n.locale !== "ko" && (It || S !== "onCompositionStart" ? S === "onCompositionEnd" && It && (C = Ru()) : (nt = g, ti = "value" in nt ? nt.value : nt.textContent, It = !0)), _ = Ur(d, S), 0 < _.length && (S = new qi(S, e, null, n, g), y.push({
                event: S,
                listeners: _
            }), C ? S.data = C : (C = Uu(n), C !== null && (S.data = C)))),
            (C = Td ? Dd(e, n) : Ld(e, n)) && (d = Ur(d, "onBeforeInput"), 0 < d.length && (g = new qi("onBeforeInput", "beforeinput", null, n, g), y.push({
                event: g,
                listeners: d
            }), g.data = C))
        }
        Xu(y, t)
    })
}

function Bn(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}

function Ur(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var l = e,
            o = l.stateNode;
        l.tag === 5 && o !== null && (l = o, o = On(e, n), o != null && r.unshift(Bn(e, o, l)), o = On(e, t), o != null && r.push(Bn(e, o, l))), e = e.return
    }
    return r
}

function Mt(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function cs(e, t, n, r, l) {
    for (var o = t._reactName, i = []; n !== null && n !== r;) {
        var s = n,
            u = s.alternate,
            d = s.stateNode;
        if (u !== null && u === r) break;
        s.tag === 5 && d !== null && (s = d, l ? (u = On(n, o), u != null && i.unshift(Bn(n, u, s))) : l || (u = On(n, o), u != null && i.push(Bn(n, u, s)))), n = n.return
    }
    i.length !== 0 && e.push({
        event: t,
        listeners: i
    })
}
var Kd = /\r\n?/g,
    Gd = /\u0000|\uFFFD/g;

function ds(e) {
    return (typeof e == "string" ? e : "" + e).replace(Kd, `
`).replace(Gd, "")
}

function fr(e, t, n) {
    if (t = ds(t), ds(e) !== t && n) throw Error(v(425))
}

function $r() {}
var ho = null,
    yo = null;

function go(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var vo = typeof setTimeout == "function" ? setTimeout : void 0,
    Yd = typeof clearTimeout == "function" ? clearTimeout : void 0,
    fs = typeof Promise == "function" ? Promise : void 0,
    Zd = typeof queueMicrotask == "function" ? queueMicrotask : typeof fs < "u" ? function(e) {
        return fs.resolve(null).then(e).catch(Xd)
    } : vo;

function Xd(e) {
    setTimeout(function() {
        throw e
    })
}

function Il(e, t) {
    var n = t,
        r = 0;
    do {
        var l = n.nextSibling;
        if (e.removeChild(n), l && l.nodeType === 8)
            if (n = l.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(l), Fn(t);
                    return
                }
                r--
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = l
    } while (n);
    Fn(t)
}

function st(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function ps(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var un = Math.random().toString(36).slice(2),
    Ue = "__reactFiber$" + un,
    Vn = "__reactProps$" + un,
    Ge = "__reactContainer$" + un,
    xo = "__reactEvents$" + un,
    Jd = "__reactListeners$" + un,
    qd = "__reactHandles$" + un;

function kt(e) {
    var t = e[Ue];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[Ge] || n[Ue]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = ps(e); e !== null;) {
                    if (n = e[Ue]) return n;
                    e = ps(e)
                }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function qn(e) {
    return e = e[Ue] || e[Ge], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function $t(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(v(33))
}

function il(e) {
    return e[Vn] || null
}
var wo = [],
    At = -1;

function ht(e) {
    return {
        current: e
    }
}

function $(e) {
    0 > At || (e.current = wo[At], wo[At] = null, At--)
}

function I(e, t) {
    At++, wo[At] = e.current, e.current = t
}
var pt = {},
    oe = ht(pt),
    pe = ht(!1),
    jt = pt;

function bt(e, t) {
    var n = e.type.contextTypes;
    if (!n) return pt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
        o;
    for (o in n) l[o] = t[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l
}

function me(e) {
    return e = e.childContextTypes, e != null
}

function Ar() {
    $(pe), $(oe)
}

function ms(e, t, n) {
    if (oe.current !== pt) throw Error(v(168));
    I(oe, t), I(pe, n)
}

function qu(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var l in r)
        if (!(l in t)) throw Error(v(108, Ic(e) || "Unknown", l));
    return H({}, n, r)
}

function Br(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || pt, jt = oe.current, I(oe, e), I(pe, pe.current), !0
}

function hs(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(v(169));
    n ? (e = qu(e, t, jt), r.__reactInternalMemoizedMergedChildContext = e, $(pe), $(oe), I(oe, e)) : $(pe), I(pe, n)
}
var Ve = null,
    sl = !1,
    Fl = !1;

function bu(e) {
    Ve === null ? Ve = [e] : Ve.push(e)
}

function bd(e) {
    sl = !0, bu(e)
}

function yt() {
    if (!Fl && Ve !== null) {
        Fl = !0;
        var e = 0,
            t = O;
        try {
            var n = Ve;
            for (O = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            Ve = null, sl = !1
        } catch (l) {
            throw Ve !== null && (Ve = Ve.slice(e + 1)), Cu(Jo, yt), l
        } finally {
            O = t, Fl = !1
        }
    }
    return null
}
var Bt = [],
    Vt = 0,
    Vr = null,
    Hr = 0,
    Se = [],
    Ne = 0,
    _t = null,
    He = 1,
    We = "";

function xt(e, t) {
    Bt[Vt++] = Hr, Bt[Vt++] = Vr, Vr = e, Hr = t
}

function ea(e, t, n) {
    Se[Ne++] = He, Se[Ne++] = We, Se[Ne++] = _t, _t = e;
    var r = He;
    e = We;
    var l = 32 - Me(r) - 1;
    r &= ~(1 << l), n += 1;
    var o = 32 - Me(t) + l;
    if (30 < o) {
        var i = l - l % 5;
        o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, He = 1 << 32 - Me(t) + l | n << l | r, We = o + e
    } else He = 1 << o | n << l | r, We = e
}

function ii(e) {
    e.return !== null && (xt(e, 1), ea(e, 1, 0))
}

function si(e) {
    for (; e === Vr;) Vr = Bt[--Vt], Bt[Vt] = null, Hr = Bt[--Vt], Bt[Vt] = null;
    for (; e === _t;) _t = Se[--Ne], Se[Ne] = null, We = Se[--Ne], Se[Ne] = null, He = Se[--Ne], Se[Ne] = null
}
var ve = null,
    ge = null,
    A = !1,
    Le = null;

function ta(e, t) {
    var n = Ce(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function ys(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ve = e, ge = st(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ve = e, ge = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = _t !== null ? {
                id: He,
                overflow: We
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = Ce(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, ve = e, ge = null, !0) : !1;
        default:
            return !1
    }
}

function ko(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function So(e) {
    if (A) {
        var t = ge;
        if (t) {
            var n = t;
            if (!ys(e, t)) {
                if (ko(e)) throw Error(v(418));
                t = st(n.nextSibling);
                var r = ve;
                t && ys(e, t) ? ta(r, n) : (e.flags = e.flags & -4097 | 2, A = !1, ve = e)
            }
        } else {
            if (ko(e)) throw Error(v(418));
            e.flags = e.flags & -4097 | 2, A = !1, ve = e
        }
    }
}

function gs(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    ve = e
}

function pr(e) {
    if (e !== ve) return !1;
    if (!A) return gs(e), A = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !go(e.type, e.memoizedProps)), t && (t = ge)) {
        if (ko(e)) throw na(), Error(v(418));
        for (; t;) ta(e, t), t = st(t.nextSibling)
    }
    if (gs(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(v(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            ge = st(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            ge = null
        }
    } else ge = ve ? st(e.stateNode.nextSibling) : null;
    return !0
}

function na() {
    for (var e = ge; e;) e = st(e.nextSibling)
}

function en() {
    ge = ve = null, A = !1
}

function ui(e) {
    Le === null ? Le = [e] : Le.push(e)
}
var ef = Xe.ReactCurrentBatchConfig;

function yn(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(v(309));
                var r = n.stateNode
            }
            if (!r) throw Error(v(147, e));
            var l = r,
                o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
                var s = l.refs;
                i === null ? delete s[o] : s[o] = i
            }, t._stringRef = o, t)
        }
        if (typeof e != "string") throw Error(v(284));
        if (!n._owner) throw Error(v(290, e))
    }
    return e
}

function mr(e, t) {
    throw e = Object.prototype.toString.call(t), Error(v(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function vs(e) {
    var t = e._init;
    return t(e._payload)
}

function ra(e) {
    function t(f, a) {
        if (e) {
            var p = f.deletions;
            p === null ? (f.deletions = [a], f.flags |= 16) : p.push(a)
        }
    }

    function n(f, a) {
        if (!e) return null;
        for (; a !== null;) t(f, a), a = a.sibling;
        return null
    }

    function r(f, a) {
        for (f = new Map; a !== null;) a.key !== null ? f.set(a.key, a) : f.set(a.index, a), a = a.sibling;
        return f
    }

    function l(f, a) {
        return f = dt(f, a), f.index = 0, f.sibling = null, f
    }

    function o(f, a, p) {
        return f.index = p, e ? (p = f.alternate, p !== null ? (p = p.index, p < a ? (f.flags |= 2, a) : p) : (f.flags |= 2, a)) : (f.flags |= 1048576, a)
    }

    function i(f) {
        return e && f.alternate === null && (f.flags |= 2), f
    }

    function s(f, a, p, m) {
        return a === null || a.tag !== 6 ? (a = Wl(p, f.mode, m), a.return = f, a) : (a = l(a, p), a.return = f, a)
    }

    function u(f, a, p, m) {
        var N = p.type;
        return N === Rt ? g(f, a, p.props.children, m, p.key) : a !== null && (a.elementType === N || typeof N == "object" && N !== null && N.$$typeof === qe && vs(N) === a.type) ? (m = l(a, p.props), m.ref = yn(f, a, p), m.return = f, m) : (m = Tr(p.type, p.key, p.props, null, f.mode, m), m.ref = yn(f, a, p), m.return = f, m)
    }

    function d(f, a, p, m) {
        return a === null || a.tag !== 4 || a.stateNode.containerInfo !== p.containerInfo || a.stateNode.implementation !== p.implementation ? (a = Ql(p, f.mode, m), a.return = f, a) : (a = l(a, p.children || []), a.return = f, a)
    }

    function g(f, a, p, m, N) {
        return a === null || a.tag !== 7 ? (a = Et(p, f.mode, m, N), a.return = f, a) : (a = l(a, p), a.return = f, a)
    }

    function y(f, a, p) {
        if (typeof a == "string" && a !== "" || typeof a == "number") return a = Wl("" + a, f.mode, p), a.return = f, a;
        if (typeof a == "object" && a !== null) {
            switch (a.$$typeof) {
                case rr:
                    return p = Tr(a.type, a.key, a.props, null, f.mode, p), p.ref = yn(f, null, a), p.return = f, p;
                case Ot:
                    return a = Ql(a, f.mode, p), a.return = f, a;
                case qe:
                    var m = a._init;
                    return y(f, m(a._payload), p)
            }
            if (wn(a) || dn(a)) return a = Et(a, f.mode, p, null), a.return = f, a;
            mr(f, a)
        }
        return null
    }

    function h(f, a, p, m) {
        var N = a !== null ? a.key : null;
        if (typeof p == "string" && p !== "" || typeof p == "number") return N !== null ? null : s(f, a, "" + p, m);
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
                case rr:
                    return p.key === N ? u(f, a, p, m) : null;
                case Ot:
                    return p.key === N ? d(f, a, p, m) : null;
                case qe:
                    return N = p._init, h(f, a, N(p._payload), m)
            }
            if (wn(p) || dn(p)) return N !== null ? null : g(f, a, p, m, null);
            mr(f, p)
        }
        return null
    }

    function x(f, a, p, m, N) {
        if (typeof m == "string" && m !== "" || typeof m == "number") return f = f.get(p) || null, s(a, f, "" + m, N);
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
                case rr:
                    return f = f.get(m.key === null ? p : m.key) || null, u(a, f, m, N);
                case Ot:
                    return f = f.get(m.key === null ? p : m.key) || null, d(a, f, m, N);
                case qe:
                    var _ = m._init;
                    return x(f, a, p, _(m._payload), N)
            }
            if (wn(m) || dn(m)) return f = f.get(p) || null, g(a, f, m, N, null);
            mr(a, m)
        }
        return null
    }

    function w(f, a, p, m) {
        for (var N = null, _ = null, C = a, S = a = 0, R = null; C !== null && S < p.length; S++) {
            C.index > S ? (R = C, C = null) : R = C.sibling;
            var T = h(f, C, p[S], m);
            if (T === null) {
                C === null && (C = R);
                break
            }
            e && C && T.alternate === null && t(f, C), a = o(T, a, S), _ === null ? N = T : _.sibling = T, _ = T, C = R
        }
        if (S === p.length) return n(f, C), A && xt(f, S), N;
        if (C === null) {
            for (; S < p.length; S++) C = y(f, p[S], m), C !== null && (a = o(C, a, S), _ === null ? N = C : _.sibling = C, _ = C);
            return A && xt(f, S), N
        }
        for (C = r(f, C); S < p.length; S++) R = x(C, f, S, p[S], m), R !== null && (e && R.alternate !== null && C.delete(R.key === null ? S : R.key), a = o(R, a, S), _ === null ? N = R : _.sibling = R, _ = R);
        return e && C.forEach(function(Pe) {
            return t(f, Pe)
        }), A && xt(f, S), N
    }

    function k(f, a, p, m) {
        var N = dn(p);
        if (typeof N != "function") throw Error(v(150));
        if (p = N.call(p), p == null) throw Error(v(151));
        for (var _ = N = null, C = a, S = a = 0, R = null, T = p.next(); C !== null && !T.done; S++, T = p.next()) {
            C.index > S ? (R = C, C = null) : R = C.sibling;
            var Pe = h(f, C, T.value, m);
            if (Pe === null) {
                C === null && (C = R);
                break
            }
            e && C && Pe.alternate === null && t(f, C), a = o(Pe, a, S), _ === null ? N = Pe : _.sibling = Pe, _ = Pe, C = R
        }
        if (T.done) return n(f, C), A && xt(f, S), N;
        if (C === null) {
            for (; !T.done; S++, T = p.next()) T = y(f, T.value, m), T !== null && (a = o(T, a, S), _ === null ? N = T : _.sibling = T, _ = T);
            return A && xt(f, S), N
        }
        for (C = r(f, C); !T.done; S++, T = p.next()) T = x(C, f, S, T.value, m), T !== null && (e && T.alternate !== null && C.delete(T.key === null ? S : T.key), a = o(T, a, S), _ === null ? N = T : _.sibling = T, _ = T);
        return e && C.forEach(function(an) {
            return t(f, an)
        }), A && xt(f, S), N
    }

    function P(f, a, p, m) {
        if (typeof p == "object" && p !== null && p.type === Rt && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
                case rr:
                    e: {
                        for (var N = p.key, _ = a; _ !== null;) {
                            if (_.key === N) {
                                if (N = p.type, N === Rt) {
                                    if (_.tag === 7) {
                                        n(f, _.sibling), a = l(_, p.props.children), a.return = f, f = a;
                                        break e
                                    }
                                } else if (_.elementType === N || typeof N == "object" && N !== null && N.$$typeof === qe && vs(N) === _.type) {
                                    n(f, _.sibling), a = l(_, p.props), a.ref = yn(f, _, p), a.return = f, f = a;
                                    break e
                                }
                                n(f, _);
                                break
                            } else t(f, _);
                            _ = _.sibling
                        }
                        p.type === Rt ? (a = Et(p.props.children, f.mode, m, p.key), a.return = f, f = a) : (m = Tr(p.type, p.key, p.props, null, f.mode, m), m.ref = yn(f, a, p), m.return = f, f = m)
                    }
                    return i(f);
                case Ot:
                    e: {
                        for (_ = p.key; a !== null;) {
                            if (a.key === _)
                                if (a.tag === 4 && a.stateNode.containerInfo === p.containerInfo && a.stateNode.implementation === p.implementation) {
                                    n(f, a.sibling), a = l(a, p.children || []), a.return = f, f = a;
                                    break e
                                } else {
                                    n(f, a);
                                    break
                                }
                            else t(f, a);
                            a = a.sibling
                        }
                        a = Ql(p, f.mode, m),
                        a.return = f,
                        f = a
                    }
                    return i(f);
                case qe:
                    return _ = p._init, P(f, a, _(p._payload), m)
            }
            if (wn(p)) return w(f, a, p, m);
            if (dn(p)) return k(f, a, p, m);
            mr(f, p)
        }
        return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, a !== null && a.tag === 6 ? (n(f, a.sibling), a = l(a, p), a.return = f, f = a) : (n(f, a), a = Wl(p, f.mode, m), a.return = f, f = a), i(f)) : n(f, a)
    }
    return P
}
var tn = ra(!0),
    la = ra(!1),
    Wr = ht(null),
    Qr = null,
    Ht = null,
    ai = null;

function ci() {
    ai = Ht = Qr = null
}

function di(e) {
    var t = Wr.current;
    $(Wr), e._currentValue = t
}

function No(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function Xt(e, t) {
    Qr = e, ai = Ht = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (fe = !0), e.firstContext = null)
}

function je(e) {
    var t = e._currentValue;
    if (ai !== e)
        if (e = {
                context: e,
                memoizedValue: t,
                next: null
            }, Ht === null) {
            if (Qr === null) throw Error(v(308));
            Ht = e, Qr.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else Ht = Ht.next = e;
    return t
}
var St = null;

function fi(e) {
    St === null ? St = [e] : St.push(e)
}

function oa(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n, fi(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Ye(e, r)
}

function Ye(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var be = !1;

function pi(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function ia(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function Qe(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function ut(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, M & 2) {
        var l = r.pending;
        return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Ye(e, n)
    }
    return l = r.interleaved, l === null ? (t.next = t, fi(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Ye(e, n)
}

function Cr(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, qo(e, n)
    }
}

function xs(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var l = null,
            o = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var i = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? l = o = i : o = o.next = i, n = n.next
            } while (n !== null);
            o === null ? l = o = t : o = o.next = t
        } else l = o = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: l,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function Kr(e, t, n, r) {
    var l = e.updateQueue;
    be = !1;
    var o = l.firstBaseUpdate,
        i = l.lastBaseUpdate,
        s = l.shared.pending;
    if (s !== null) {
        l.shared.pending = null;
        var u = s,
            d = u.next;
        u.next = null, i === null ? o = d : i.next = d, i = u;
        var g = e.alternate;
        g !== null && (g = g.updateQueue, s = g.lastBaseUpdate, s !== i && (s === null ? g.firstBaseUpdate = d : s.next = d, g.lastBaseUpdate = u))
    }
    if (o !== null) {
        var y = l.baseState;
        i = 0, g = d = u = null, s = o;
        do {
            var h = s.lane,
                x = s.eventTime;
            if ((r & h) === h) {
                g !== null && (g = g.next = {
                    eventTime: x,
                    lane: 0,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null
                });
                e: {
                    var w = e,
                        k = s;
                    switch (h = t, x = n, k.tag) {
                        case 1:
                            if (w = k.payload, typeof w == "function") {
                                y = w.call(x, y, h);
                                break e
                            }
                            y = w;
                            break e;
                        case 3:
                            w.flags = w.flags & -65537 | 128;
                        case 0:
                            if (w = k.payload, h = typeof w == "function" ? w.call(x, y, h) : w, h == null) break e;
                            y = H({}, y, h);
                            break e;
                        case 2:
                            be = !0
                    }
                }
                s.callback !== null && s.lane !== 0 && (e.flags |= 64, h = l.effects, h === null ? l.effects = [s] : h.push(s))
            } else x = {
                eventTime: x,
                lane: h,
                tag: s.tag,
                payload: s.payload,
                callback: s.callback,
                next: null
            }, g === null ? (d = g = x, u = y) : g = g.next = x, i |= h;
            if (s = s.next, s === null) {
                if (s = l.shared.pending, s === null) break;
                h = s, s = h.next, h.next = null, l.lastBaseUpdate = h, l.shared.pending = null
            }
        } while (!0);
        if (g === null && (u = y), l.baseState = u, l.firstBaseUpdate = d, l.lastBaseUpdate = g, t = l.shared.interleaved, t !== null) {
            l = t;
            do i |= l.lane, l = l.next; while (l !== t)
        } else o === null && (l.shared.lanes = 0);
        zt |= i, e.lanes = i, e.memoizedState = y
    }
}

function ws(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                l = r.callback;
            if (l !== null) {
                if (r.callback = null, r = n, typeof l != "function") throw Error(v(191, l));
                l.call(r)
            }
        }
}
var bn = {},
    Ae = ht(bn),
    Hn = ht(bn),
    Wn = ht(bn);

function Nt(e) {
    if (e === bn) throw Error(v(174));
    return e
}

function mi(e, t) {
    switch (I(Wn, t), I(Hn, e), I(Ae, bn), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : no(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = no(t, e)
    }
    $(Ae), I(Ae, t)
}

function nn() {
    $(Ae), $(Hn), $(Wn)
}

function sa(e) {
    Nt(Wn.current);
    var t = Nt(Ae.current),
        n = no(t, e.type);
    t !== n && (I(Hn, e), I(Ae, n))
}

function hi(e) {
    Hn.current === e && ($(Ae), $(Hn))
}
var B = ht(0);

function Gr(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var Ul = [];

function yi() {
    for (var e = 0; e < Ul.length; e++) Ul[e]._workInProgressVersionPrimary = null;
    Ul.length = 0
}
var Er = Xe.ReactCurrentDispatcher,
    $l = Xe.ReactCurrentBatchConfig,
    Pt = 0,
    V = null,
    Y = null,
    J = null,
    Yr = !1,
    Pn = !1,
    Qn = 0,
    tf = 0;

function ne() {
    throw Error(v(321))
}

function gi(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Re(e[n], t[n])) return !1;
    return !0
}

function vi(e, t, n, r, l, o) {
    if (Pt = o, V = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Er.current = e === null || e.memoizedState === null ? of : sf, e = n(r, l), Pn) {
        o = 0;
        do {
            if (Pn = !1, Qn = 0, 25 <= o) throw Error(v(301));
            o += 1, J = Y = null, t.updateQueue = null, Er.current = uf, e = n(r, l)
        } while (Pn)
    }
    if (Er.current = Zr, t = Y !== null && Y.next !== null, Pt = 0, J = Y = V = null, Yr = !1, t) throw Error(v(300));
    return e
}

function xi() {
    var e = Qn !== 0;
    return Qn = 0, e
}

function Fe() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return J === null ? V.memoizedState = J = e : J = J.next = e, J
}

function _e() {
    if (Y === null) {
        var e = V.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = Y.next;
    var t = J === null ? V.memoizedState : J.next;
    if (t !== null) J = t, Y = e;
    else {
        if (e === null) throw Error(v(310));
        Y = e, e = {
            memoizedState: Y.memoizedState,
            baseState: Y.baseState,
            baseQueue: Y.baseQueue,
            queue: Y.queue,
            next: null
        }, J === null ? V.memoizedState = J = e : J = J.next = e
    }
    return J
}

function Kn(e, t) {
    return typeof t == "function" ? t(e) : t
}

function Al(e) {
    var t = _e(),
        n = t.queue;
    if (n === null) throw Error(v(311));
    n.lastRenderedReducer = e;
    var r = Y,
        l = r.baseQueue,
        o = n.pending;
    if (o !== null) {
        if (l !== null) {
            var i = l.next;
            l.next = o.next, o.next = i
        }
        r.baseQueue = l = o, n.pending = null
    }
    if (l !== null) {
        o = l.next, r = r.baseState;
        var s = i = null,
            u = null,
            d = o;
        do {
            var g = d.lane;
            if ((Pt & g) === g) u !== null && (u = u.next = {
                lane: 0,
                action: d.action,
                hasEagerState: d.hasEagerState,
                eagerState: d.eagerState,
                next: null
            }), r = d.hasEagerState ? d.eagerState : e(r, d.action);
            else {
                var y = {
                    lane: g,
                    action: d.action,
                    hasEagerState: d.hasEagerState,
                    eagerState: d.eagerState,
                    next: null
                };
                u === null ? (s = u = y, i = r) : u = u.next = y, V.lanes |= g, zt |= g
            }
            d = d.next
        } while (d !== null && d !== o);
        u === null ? i = r : u.next = s, Re(r, t.memoizedState) || (fe = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = u, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        l = e;
        do o = l.lane, V.lanes |= o, zt |= o, l = l.next; while (l !== e)
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function Bl(e) {
    var t = _e(),
        n = t.queue;
    if (n === null) throw Error(v(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        l = n.pending,
        o = t.memoizedState;
    if (l !== null) {
        n.pending = null;
        var i = l = l.next;
        do o = e(o, i.action), i = i.next; while (i !== l);
        Re(o, t.memoizedState) || (fe = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o
    }
    return [o, r]
}

function ua() {}

function aa(e, t) {
    var n = V,
        r = _e(),
        l = t(),
        o = !Re(r.memoizedState, l);
    if (o && (r.memoizedState = l, fe = !0), r = r.queue, wi(fa.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || J !== null && J.memoizedState.tag & 1) {
        if (n.flags |= 2048, Gn(9, da.bind(null, n, r, l, t), void 0, null), q === null) throw Error(v(349));
        Pt & 30 || ca(n, t, l)
    }
    return l
}

function ca(e, t, n) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: n
    }, t = V.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, V.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function da(e, t, n, r) {
    t.value = n, t.getSnapshot = r, pa(t) && ma(e)
}

function fa(e, t, n) {
    return n(function() {
        pa(t) && ma(e)
    })
}

function pa(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Re(e, n)
    } catch {
        return !0
    }
}

function ma(e) {
    var t = Ye(e, 1);
    t !== null && Oe(t, e, 1, -1)
}

function ks(e) {
    var t = Fe();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Kn,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = lf.bind(null, V, e), [t.memoizedState, e]
}

function Gn(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = V.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, V.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function ha() {
    return _e().memoizedState
}

function jr(e, t, n, r) {
    var l = Fe();
    V.flags |= e, l.memoizedState = Gn(1 | t, n, void 0, r === void 0 ? null : r)
}

function ul(e, t, n, r) {
    var l = _e();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (Y !== null) {
        var i = Y.memoizedState;
        if (o = i.destroy, r !== null && gi(r, i.deps)) {
            l.memoizedState = Gn(t, n, o, r);
            return
        }
    }
    V.flags |= e, l.memoizedState = Gn(1 | t, n, o, r)
}

function Ss(e, t) {
    return jr(8390656, 8, e, t)
}

function wi(e, t) {
    return ul(2048, 8, e, t)
}

function ya(e, t) {
    return ul(4, 2, e, t)
}

function ga(e, t) {
    return ul(4, 4, e, t)
}

function va(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function() {
            t(null)
        };
    if (t != null) return e = e(), t.current = e,
        function() {
            t.current = null
        }
}

function xa(e, t, n) {
    return n = n != null ? n.concat([e]) : null, ul(4, 4, va.bind(null, t, e), n)
}

function ki() {}

function wa(e, t) {
    var n = _e();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && gi(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function ka(e, t) {
    var n = _e();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && gi(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function Sa(e, t, n) {
    return Pt & 21 ? (Re(n, t) || (n = _u(), V.lanes |= n, zt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, fe = !0), e.memoizedState = n)
}

function nf(e, t) {
    var n = O;
    O = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = $l.transition;
    $l.transition = {};
    try {
        e(!1), t()
    } finally {
        O = n, $l.transition = r
    }
}

function Na() {
    return _e().memoizedState
}

function rf(e, t, n) {
    var r = ct(e);
    if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, Ca(e)) Ea(t, n);
    else if (n = oa(e, t, n, r), n !== null) {
        var l = ue();
        Oe(n, e, r, l), ja(n, t, r)
    }
}

function lf(e, t, n) {
    var r = ct(e),
        l = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (Ca(e)) Ea(t, l);
    else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
            var i = t.lastRenderedState,
                s = o(i, n);
            if (l.hasEagerState = !0, l.eagerState = s, Re(s, i)) {
                var u = t.interleaved;
                u === null ? (l.next = l, fi(t)) : (l.next = u.next, u.next = l), t.interleaved = l;
                return
            }
        } catch {} finally {}
        n = oa(e, t, l, r), n !== null && (l = ue(), Oe(n, e, r, l), ja(n, t, r))
    }
}

function Ca(e) {
    var t = e.alternate;
    return e === V || t !== null && t === V
}

function Ea(e, t) {
    Pn = Yr = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function ja(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, qo(e, n)
    }
}
var Zr = {
        readContext: je,
        useCallback: ne,
        useContext: ne,
        useEffect: ne,
        useImperativeHandle: ne,
        useInsertionEffect: ne,
        useLayoutEffect: ne,
        useMemo: ne,
        useReducer: ne,
        useRef: ne,
        useState: ne,
        useDebugValue: ne,
        useDeferredValue: ne,
        useTransition: ne,
        useMutableSource: ne,
        useSyncExternalStore: ne,
        useId: ne,
        unstable_isNewReconciler: !1
    },
    of = {
        readContext: je,
        useCallback: function(e, t) {
            return Fe().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: je,
        useEffect: Ss,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([e]) : null, jr(4194308, 4, va.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return jr(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return jr(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = Fe();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
        },
        useReducer: function(e, t, n) {
            var r = Fe();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = rf.bind(null, V, e), [r.memoizedState, e]
        },
        useRef: function(e) {
            var t = Fe();
            return e = {
                current: e
            }, t.memoizedState = e
        },
        useState: ks,
        useDebugValue: ki,
        useDeferredValue: function(e) {
            return Fe().memoizedState = e
        },
        useTransition: function() {
            var e = ks(!1),
                t = e[0];
            return e = nf.bind(null, e[1]), Fe().memoizedState = e, [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = V,
                l = Fe();
            if (A) {
                if (n === void 0) throw Error(v(407));
                n = n()
            } else {
                if (n = t(), q === null) throw Error(v(349));
                Pt & 30 || ca(r, t, n)
            }
            l.memoizedState = n;
            var o = {
                value: n,
                getSnapshot: t
            };
            return l.queue = o, Ss(fa.bind(null, r, o, e), [e]), r.flags |= 2048, Gn(9, da.bind(null, r, o, n, t), void 0, null), n
        },
        useId: function() {
            var e = Fe(),
                t = q.identifierPrefix;
            if (A) {
                var n = We,
                    r = He;
                n = (r & ~(1 << 32 - Me(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Qn++, 0 < n && (t += "H" + n.toString(32)), t += ":"
            } else n = tf++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    sf = {
        readContext: je,
        useCallback: wa,
        useContext: je,
        useEffect: wi,
        useImperativeHandle: xa,
        useInsertionEffect: ya,
        useLayoutEffect: ga,
        useMemo: ka,
        useReducer: Al,
        useRef: ha,
        useState: function() {
            return Al(Kn)
        },
        useDebugValue: ki,
        useDeferredValue: function(e) {
            var t = _e();
            return Sa(t, Y.memoizedState, e)
        },
        useTransition: function() {
            var e = Al(Kn)[0],
                t = _e().memoizedState;
            return [e, t]
        },
        useMutableSource: ua,
        useSyncExternalStore: aa,
        useId: Na,
        unstable_isNewReconciler: !1
    },
    uf = {
        readContext: je,
        useCallback: wa,
        useContext: je,
        useEffect: wi,
        useImperativeHandle: xa,
        useInsertionEffect: ya,
        useLayoutEffect: ga,
        useMemo: ka,
        useReducer: Bl,
        useRef: ha,
        useState: function() {
            return Bl(Kn)
        },
        useDebugValue: ki,
        useDeferredValue: function(e) {
            var t = _e();
            return Y === null ? t.memoizedState = e : Sa(t, Y.memoizedState, e)
        },
        useTransition: function() {
            var e = Bl(Kn)[0],
                t = _e().memoizedState;
            return [e, t]
        },
        useMutableSource: ua,
        useSyncExternalStore: aa,
        useId: Na,
        unstable_isNewReconciler: !1
    };

function Te(e, t) {
    if (e && e.defaultProps) {
        t = H({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}

function Co(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : H({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var al = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? Lt(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = ue(),
            l = ct(e),
            o = Qe(r, l);
        o.payload = t, n != null && (o.callback = n), t = ut(e, o, l), t !== null && (Oe(t, e, l, r), Cr(t, e, l))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = ue(),
            l = ct(e),
            o = Qe(r, l);
        o.tag = 1, o.payload = t, n != null && (o.callback = n), t = ut(e, o, l), t !== null && (Oe(t, e, l, r), Cr(t, e, l))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = ue(),
            r = ct(e),
            l = Qe(n, r);
        l.tag = 2, t != null && (l.callback = t), t = ut(e, l, r), t !== null && (Oe(t, e, r, n), Cr(t, e, r))
    }
};

function Ns(e, t, n, r, l, o, i) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !$n(n, r) || !$n(l, o) : !0
}

function _a(e, t, n) {
    var r = !1,
        l = pt,
        o = t.contextType;
    return typeof o == "object" && o !== null ? o = je(o) : (l = me(t) ? jt : oe.current, r = t.contextTypes, o = (r = r != null) ? bt(e, l) : pt), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = al, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t
}

function Cs(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && al.enqueueReplaceState(t, t.state, null)
}

function Eo(e, t, n, r) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, pi(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? l.context = je(o) : (o = me(t) ? jt : oe.current, l.context = bt(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Co(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && al.enqueueReplaceState(l, l.state, null), Kr(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308)
}

function rn(e, t) {
    try {
        var n = "",
            r = t;
        do n += Rc(r), r = r.return; while (r);
        var l = n
    } catch (o) {
        l = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {
        value: e,
        source: t,
        stack: l,
        digest: null
    }
}

function Vl(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ? ? null,
        digest: t ? ? null
    }
}

function jo(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var af = typeof WeakMap == "function" ? WeakMap : Map;

function Pa(e, t, n) {
    n = Qe(-1, n), n.tag = 3, n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        Jr || (Jr = !0, Io = r), jo(e, t)
    }, n
}

function za(e, t, n) {
    n = Qe(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var l = t.value;
        n.payload = function() {
            return r(l)
        }, n.callback = function() {
            jo(e, t)
        }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
        jo(e, t), typeof r != "function" && (at === null ? at = new Set([this]) : at.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: i !== null ? i : ""
        })
    }), n
}

function Es(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new af;
        var l = new Set;
        r.set(t, l)
    } else l = r.get(t), l === void 0 && (l = new Set, r.set(t, l));
    l.has(n) || (l.add(n), e = Nf.bind(null, e, t, n), t.then(e, e))
}

function js(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function _s(e, t, n, r, l) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Qe(-1, 1), t.tag = 2, ut(n, t, 1))), n.lanes |= 1), e)
}
var cf = Xe.ReactCurrentOwner,
    fe = !1;

function se(e, t, n, r) {
    t.child = e === null ? la(t, null, n, r) : tn(t, e.child, n, r)
}

function Ps(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return Xt(t, l), r = vi(e, t, n, r, o, l), n = xi(), e !== null && !fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ze(e, t, l)) : (A && n && ii(t), t.flags |= 1, se(e, t, r, l), t.child)
}

function zs(e, t, n, r, l) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !zi(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, Ta(e, t, o, r, l)) : (e = Tr(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (o = e.child, !(e.lanes & l)) {
        var i = o.memoizedProps;
        if (n = n.compare, n = n !== null ? n : $n, n(i, r) && e.ref === t.ref) return Ze(e, t, l)
    }
    return t.flags |= 1, e = dt(o, r), e.ref = t.ref, e.return = t, t.child = e
}

function Ta(e, t, n, r, l) {
    if (e !== null) {
        var o = e.memoizedProps;
        if ($n(o, r) && e.ref === t.ref)
            if (fe = !1, t.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (fe = !0);
            else return t.lanes = e.lanes, Ze(e, t, l)
    }
    return _o(e, t, n, r, l)
}

function Da(e, t, n) {
    var r = t.pendingProps,
        l = r.children,
        o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, I(Qt, ye), ye |= n;
        else {
            if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, I(Qt, ye), ye |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = o !== null ? o.baseLanes : n, I(Qt, ye), ye |= r
        }
    else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, I(Qt, ye), ye |= r;
    return se(e, t, l, n), t.child
}

function La(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function _o(e, t, n, r, l) {
    var o = me(n) ? jt : oe.current;
    return o = bt(t, o), Xt(t, l), n = vi(e, t, n, r, o, l), r = xi(), e !== null && !fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ze(e, t, l)) : (A && r && ii(t), t.flags |= 1, se(e, t, n, l), t.child)
}

function Ts(e, t, n, r, l) {
    if (me(n)) {
        var o = !0;
        Br(t)
    } else o = !1;
    if (Xt(t, l), t.stateNode === null) _r(e, t), _a(t, n, r), Eo(t, n, r, l), r = !0;
    else if (e === null) {
        var i = t.stateNode,
            s = t.memoizedProps;
        i.props = s;
        var u = i.context,
            d = n.contextType;
        typeof d == "object" && d !== null ? d = je(d) : (d = me(n) ? jt : oe.current, d = bt(t, d));
        var g = n.getDerivedStateFromProps,
            y = typeof g == "function" || typeof i.getSnapshotBeforeUpdate == "function";
        y || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== r || u !== d) && Cs(t, i, r, d), be = !1;
        var h = t.memoizedState;
        i.state = h, Kr(t, r, i, l), u = t.memoizedState, s !== r || h !== u || pe.current || be ? (typeof g == "function" && (Co(t, n, g, r), u = t.memoizedState), (s = be || Ns(t, n, s, r, h, u, d)) ? (y || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), i.props = r, i.state = u, i.context = d, r = s) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        i = t.stateNode, ia(e, t), s = t.memoizedProps, d = t.type === t.elementType ? s : Te(t.type, s), i.props = d, y = t.pendingProps, h = i.context, u = n.contextType, typeof u == "object" && u !== null ? u = je(u) : (u = me(n) ? jt : oe.current, u = bt(t, u));
        var x = n.getDerivedStateFromProps;
        (g = typeof x == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== y || h !== u) && Cs(t, i, r, u), be = !1, h = t.memoizedState, i.state = h, Kr(t, r, i, l);
        var w = t.memoizedState;
        s !== y || h !== w || pe.current || be ? (typeof x == "function" && (Co(t, n, x, r), w = t.memoizedState), (d = be || Ns(t, n, d, r, h, w, u) || !1) ? (g || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, w, u), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, w, u)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), i.props = r, i.state = w, i.context = u, r = d) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return Po(e, t, n, r, o, l)
}

function Po(e, t, n, r, l, o) {
    La(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return l && hs(t, n, !1), Ze(e, t, o);
    r = t.stateNode, cf.current = t;
    var s = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && i ? (t.child = tn(t, e.child, null, o), t.child = tn(t, null, s, o)) : se(e, t, s, o), t.memoizedState = r.state, l && hs(t, n, !0), t.child
}

function Ma(e) {
    var t = e.stateNode;
    t.pendingContext ? ms(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ms(e, t.context, !1), mi(e, t.containerInfo)
}

function Ds(e, t, n, r, l) {
    return en(), ui(l), t.flags |= 256, se(e, t, n, r), t.child
}
var zo = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function To(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function Oa(e, t, n) {
    var r = t.pendingProps,
        l = B.current,
        o = !1,
        i = (t.flags & 128) !== 0,
        s;
    if ((s = i) || (s = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), s ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), I(B, l & 1), e === null) return So(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = {
        mode: "hidden",
        children: i
    }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = fl(i, r, 0, null), e = Et(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = To(n), t.memoizedState = zo, e) : Si(t, i));
    if (l = e.memoizedState, l !== null && (s = l.dehydrated, s !== null)) return df(e, t, i, r, s, l, n);
    if (o) {
        o = r.fallback, i = t.mode, l = e.child, s = l.sibling;
        var u = {
            mode: "hidden",
            children: r.children
        };
        return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = dt(l, u), r.subtreeFlags = l.subtreeFlags & 14680064), s !== null ? o = dt(s, o) : (o = Et(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? To(n) : {
            baseLanes: i.baseLanes | n,
            cachePool: null,
            transitions: i.transitions
        }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = zo, r
    }
    return o = e.child, e = o.sibling, r = dt(o, {
        mode: "visible",
        children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function Si(e, t) {
    return t = fl({
        mode: "visible",
        children: t
    }, e.mode, 0, null), t.return = e, e.child = t
}

function hr(e, t, n, r) {
    return r !== null && ui(r), tn(t, e.child, null, n), e = Si(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function df(e, t, n, r, l, o, i) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = Vl(Error(v(422))), hr(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = fl({
        mode: "visible",
        children: r.children
    }, l, 0, null), o = Et(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && tn(t, e.child, null, i), t.child.memoizedState = To(i), t.memoizedState = zo, o);
    if (!(t.mode & 1)) return hr(e, t, i, null);
    if (l.data === "$!") {
        if (r = l.nextSibling && l.nextSibling.dataset, r) var s = r.dgst;
        return r = s, o = Error(v(419)), r = Vl(o, r, void 0), hr(e, t, i, r)
    }
    if (s = (i & e.childLanes) !== 0, fe || s) {
        if (r = q, r !== null) {
            switch (i & -i) {
                case 4:
                    l = 2;
                    break;
                case 16:
                    l = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    l = 32;
                    break;
                case 536870912:
                    l = 268435456;
                    break;
                default:
                    l = 0
            }
            l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, Ye(e, l), Oe(r, e, l, -1))
        }
        return Pi(), r = Vl(Error(v(421))), hr(e, t, i, r)
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Cf.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, ge = st(l.nextSibling), ve = t, A = !0, Le = null, e !== null && (Se[Ne++] = He, Se[Ne++] = We, Se[Ne++] = _t, He = e.id, We = e.overflow, _t = t), t = Si(t, r.children), t.flags |= 4096, t)
}

function Ls(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), No(e.return, t, n)
}

function Hl(e, t, n, r, l) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l
    } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l)
}

function Ra(e, t, n) {
    var r = t.pendingProps,
        l = r.revealOrder,
        o = r.tail;
    if (se(e, t, r.children, n), r = B.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
        if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && Ls(e, n, t);
            else if (e.tag === 19) Ls(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (I(B, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (l) {
        case "forwards":
            for (n = t.child, l = null; n !== null;) e = n.alternate, e !== null && Gr(e) === null && (l = n), n = n.sibling;
            n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Hl(t, !1, l, n, o);
            break;
        case "backwards":
            for (n = null, l = t.child, t.child = null; l !== null;) {
                if (e = l.alternate, e !== null && Gr(e) === null) {
                    t.child = l;
                    break
                }
                e = l.sibling, l.sibling = n, n = l, l = e
            }
            Hl(t, !0, n, null, o);
            break;
        case "together":
            Hl(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function _r(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function Ze(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), zt |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(v(153));
    if (t.child !== null) {
        for (e = t.child, n = dt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = dt(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function ff(e, t, n) {
    switch (t.tag) {
        case 3:
            Ma(t), en();
            break;
        case 5:
            sa(t);
            break;
        case 1:
            me(t.type) && Br(t);
            break;
        case 4:
            mi(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                l = t.memoizedProps.value;
            I(Wr, r._currentValue), r._currentValue = l;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (I(B, B.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Oa(e, t, n) : (I(B, B.current & 1), e = Ze(e, t, n), e !== null ? e.sibling : null);
            I(B, B.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return Ra(e, t, n);
                t.flags |= 128
            }
            if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), I(B, B.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, Da(e, t, n)
    }
    return Ze(e, t, n)
}
var Ia, Do, Fa, Ua;
Ia = function(e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
Do = function() {};
Fa = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
        e = t.stateNode, Nt(Ae.current);
        var o = null;
        switch (n) {
            case "input":
                l = ql(e, l), r = ql(e, r), o = [];
                break;
            case "select":
                l = H({}, l, {
                    value: void 0
                }), r = H({}, r, {
                    value: void 0
                }), o = [];
                break;
            case "textarea":
                l = to(e, l), r = to(e, r), o = [];
                break;
            default:
                typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = $r)
        }
        ro(n, r);
        var i;
        n = null;
        for (d in l)
            if (!r.hasOwnProperty(d) && l.hasOwnProperty(d) && l[d] != null)
                if (d === "style") {
                    var s = l[d];
                    for (i in s) s.hasOwnProperty(i) && (n || (n = {}), n[i] = "")
                } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Ln.hasOwnProperty(d) ? o || (o = []) : (o = o || []).push(d, null));
        for (d in r) {
            var u = r[d];
            if (s = l != null ? l[d] : void 0, r.hasOwnProperty(d) && u !== s && (u != null || s != null))
                if (d === "style")
                    if (s) {
                        for (i in s) !s.hasOwnProperty(i) || u && u.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
                        for (i in u) u.hasOwnProperty(i) && s[i] !== u[i] && (n || (n = {}), n[i] = u[i])
                    } else n || (o || (o = []), o.push(d, n)), n = u;
            else d === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, s = s ? s.__html : void 0, u != null && s !== u && (o = o || []).push(d, u)) : d === "children" ? typeof u != "string" && typeof u != "number" || (o = o || []).push(d, "" + u) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (Ln.hasOwnProperty(d) ? (u != null && d === "onScroll" && F("scroll", e), o || s === u || (o = [])) : (o = o || []).push(d, u))
        }
        n && (o = o || []).push("style", n);
        var d = o;
        (t.updateQueue = d) && (t.flags |= 4)
    }
};
Ua = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function gn(e, t) {
    if (!A) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function re(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var l = e.child; l !== null;) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else
        for (l = e.child; l !== null;) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function pf(e, t, n) {
    var r = t.pendingProps;
    switch (si(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return re(t), null;
        case 1:
            return me(t.type) && Ar(), re(t), null;
        case 3:
            return r = t.stateNode, nn(), $(pe), $(oe), yi(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (pr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Le !== null && ($o(Le), Le = null))), Do(e, t), re(t), null;
        case 5:
            hi(t);
            var l = Nt(Wn.current);
            if (n = t.type, e !== null && t.stateNode != null) Fa(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(v(166));
                    return re(t), null
                }
                if (e = Nt(Ae.current), pr(t)) {
                    r = t.stateNode, n = t.type;
                    var o = t.memoizedProps;
                    switch (r[Ue] = t, r[Vn] = o, e = (t.mode & 1) !== 0, n) {
                        case "dialog":
                            F("cancel", r), F("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            F("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (l = 0; l < Sn.length; l++) F(Sn[l], r);
                            break;
                        case "source":
                            F("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            F("error", r), F("load", r);
                            break;
                        case "details":
                            F("toggle", r);
                            break;
                        case "input":
                            Bi(r, o), F("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!o.multiple
                            }, F("invalid", r);
                            break;
                        case "textarea":
                            Hi(r, o), F("invalid", r)
                    }
                    ro(n, o), l = null;
                    for (var i in o)
                        if (o.hasOwnProperty(i)) {
                            var s = o[i];
                            i === "children" ? typeof s == "string" ? r.textContent !== s && (o.suppressHydrationWarning !== !0 && fr(r.textContent, s, e), l = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (o.suppressHydrationWarning !== !0 && fr(r.textContent, s, e), l = ["children", "" + s]) : Ln.hasOwnProperty(i) && s != null && i === "onScroll" && F("scroll", r)
                        }
                    switch (n) {
                        case "input":
                            lr(r), Vi(r, o, !0);
                            break;
                        case "textarea":
                            lr(r), Wi(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof o.onClick == "function" && (r.onclick = $r)
                    }
                    r = l, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = fu(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
                        is: r.is
                    }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[Ue] = t, e[Vn] = r, Ia(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (i = lo(n, r), n) {
                            case "dialog":
                                F("cancel", e), F("close", e), l = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                F("load", e), l = r;
                                break;
                            case "video":
                            case "audio":
                                for (l = 0; l < Sn.length; l++) F(Sn[l], e);
                                l = r;
                                break;
                            case "source":
                                F("error", e), l = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                F("error", e), F("load", e), l = r;
                                break;
                            case "details":
                                F("toggle", e), l = r;
                                break;
                            case "input":
                                Bi(e, r), l = ql(e, r), F("invalid", e);
                                break;
                            case "option":
                                l = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, l = H({}, r, {
                                    value: void 0
                                }), F("invalid", e);
                                break;
                            case "textarea":
                                Hi(e, r), l = to(e, r), F("invalid", e);
                                break;
                            default:
                                l = r
                        }
                        ro(n, l),
                        s = l;
                        for (o in s)
                            if (s.hasOwnProperty(o)) {
                                var u = s[o];
                                o === "style" ? hu(e, u) : o === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && pu(e, u)) : o === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && Mn(e, u) : typeof u == "number" && Mn(e, "" + u) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Ln.hasOwnProperty(o) ? u != null && o === "onScroll" && F("scroll", e) : u != null && Ko(e, o, u, i))
                            }
                        switch (n) {
                            case "input":
                                lr(e), Vi(e, r, !1);
                                break;
                            case "textarea":
                                lr(e), Wi(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + ft(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, o = r.value, o != null ? Kt(e, !!r.multiple, o, !1) : r.defaultValue != null && Kt(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof l.onClick == "function" && (e.onclick = $r)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return re(t), null;
        case 6:
            if (e && t.stateNode != null) Ua(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(v(166));
                if (n = Nt(Wn.current), Nt(Ae.current), pr(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[Ue] = t, (o = r.nodeValue !== n) && (e = ve, e !== null)) switch (e.tag) {
                        case 3:
                            fr(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && fr(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    o && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ue] = t, t.stateNode = r
            }
            return re(t), null;
        case 13:
            if ($(B), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (A && ge !== null && t.mode & 1 && !(t.flags & 128)) na(), en(), t.flags |= 98560, o = !1;
                else if (o = pr(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!o) throw Error(v(318));
                        if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(v(317));
                        o[Ue] = t
                    } else en(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    re(t), o = !1
                } else Le !== null && ($o(Le), Le = null), o = !0;
                if (!o) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || B.current & 1 ? Z === 0 && (Z = 3) : Pi())), t.updateQueue !== null && (t.flags |= 4), re(t), null);
        case 4:
            return nn(), Do(e, t), e === null && An(t.stateNode.containerInfo), re(t), null;
        case 10:
            return di(t.type._context), re(t), null;
        case 17:
            return me(t.type) && Ar(), re(t), null;
        case 19:
            if ($(B), o = t.memoizedState, o === null) return re(t), null;
            if (r = (t.flags & 128) !== 0, i = o.rendering, i === null)
                if (r) gn(o, !1);
                else {
                    if (Z !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (i = Gr(e), i !== null) {
                                for (t.flags |= 128, gn(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), n = n.sibling;
                                return I(B, B.current & 1 | 2), t.child
                            }
                            e = e.sibling
                        }
                    o.tail !== null && K() > ln && (t.flags |= 128, r = !0, gn(o, !1), t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = Gr(i), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), gn(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !A) return re(t), null
                    } else 2 * K() - o.renderingStartTime > ln && n !== 1073741824 && (t.flags |= 128, r = !0, gn(o, !1), t.lanes = 4194304);
                o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i)
            }
            return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = K(), t.sibling = null, n = B.current, I(B, r ? n & 1 | 2 : n & 1), t) : (re(t), null);
        case 22:
        case 23:
            return _i(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? ye & 1073741824 && (re(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : re(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(v(156, t.tag))
}

function mf(e, t) {
    switch (si(t), t.tag) {
        case 1:
            return me(t.type) && Ar(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return nn(), $(pe), $(oe), yi(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return hi(t), null;
        case 13:
            if ($(B), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(v(340));
                en()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return $(B), null;
        case 4:
            return nn(), null;
        case 10:
            return di(t.type._context), null;
        case 22:
        case 23:
            return _i(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var yr = !1,
    le = !1,
    hf = typeof WeakSet == "function" ? WeakSet : Set,
    E = null;

function Wt(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function") try {
            n(null)
        } catch (r) {
            W(e, t, r)
        } else n.current = null
}

function Lo(e, t, n) {
    try {
        n()
    } catch (r) {
        W(e, t, r)
    }
}
var Ms = !1;

function yf(e, t) {
    if (ho = Ir, e = Hu(), oi(e)) {
        if ("selectionStart" in e) var n = {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        else e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var l = r.anchorOffset,
                    o = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, o.nodeType
                } catch {
                    n = null;
                    break e
                }
                var i = 0,
                    s = -1,
                    u = -1,
                    d = 0,
                    g = 0,
                    y = e,
                    h = null;
                t: for (;;) {
                    for (var x; y !== n || l !== 0 && y.nodeType !== 3 || (s = i + l), y !== o || r !== 0 && y.nodeType !== 3 || (u = i + r), y.nodeType === 3 && (i += y.nodeValue.length), (x = y.firstChild) !== null;) h = y, y = x;
                    for (;;) {
                        if (y === e) break t;
                        if (h === n && ++d === l && (s = i), h === o && ++g === r && (u = i), (x = y.nextSibling) !== null) break;
                        y = h, h = y.parentNode
                    }
                    y = x
                }
                n = s === -1 || u === -1 ? null : {
                    start: s,
                    end: u
                }
            } else n = null
        }
        n = n || {
            start: 0,
            end: 0
        }
    } else n = null;
    for (yo = {
            focusedElem: e,
            selectionRange: n
        }, Ir = !1, E = t; E !== null;)
        if (t = E, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, E = e;
        else
            for (; E !== null;) {
                t = E;
                try {
                    var w = t.alternate;
                    if (t.flags & 1024) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (w !== null) {
                                var k = w.memoizedProps,
                                    P = w.memoizedState,
                                    f = t.stateNode,
                                    a = f.getSnapshotBeforeUpdate(t.elementType === t.type ? k : Te(t.type, k), P);
                                f.__reactInternalSnapshotBeforeUpdate = a
                            }
                            break;
                        case 3:
                            var p = t.stateNode.containerInfo;
                            p.nodeType === 1 ? p.textContent = "" : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(v(163))
                    }
                } catch (m) {
                    W(t, t.return, m)
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, E = e;
                    break
                }
                E = t.return
            }
    return w = Ms, Ms = !1, w
}

function zn(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var l = r = r.next;
        do {
            if ((l.tag & e) === e) {
                var o = l.destroy;
                l.destroy = void 0, o !== void 0 && Lo(t, n, o)
            }
            l = l.next
        } while (l !== r)
    }
}

function cl(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function Mo(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function $a(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, $a(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ue], delete t[Vn], delete t[xo], delete t[Jd], delete t[qd])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function Aa(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function Os(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || Aa(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function Oo(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = $r));
    else if (r !== 4 && (e = e.child, e !== null))
        for (Oo(e, t, n), e = e.sibling; e !== null;) Oo(e, t, n), e = e.sibling
}

function Ro(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for (Ro(e, t, n), e = e.sibling; e !== null;) Ro(e, t, n), e = e.sibling
}
var b = null,
    De = !1;

function Je(e, t, n) {
    for (n = n.child; n !== null;) Ba(e, t, n), n = n.sibling
}

function Ba(e, t, n) {
    if ($e && typeof $e.onCommitFiberUnmount == "function") try {
        $e.onCommitFiberUnmount(nl, n)
    } catch {}
    switch (n.tag) {
        case 5:
            le || Wt(n, t);
        case 6:
            var r = b,
                l = De;
            b = null, Je(e, t, n), b = r, De = l, b !== null && (De ? (e = b, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : b.removeChild(n.stateNode));
            break;
        case 18:
            b !== null && (De ? (e = b, n = n.stateNode, e.nodeType === 8 ? Il(e.parentNode, n) : e.nodeType === 1 && Il(e, n), Fn(e)) : Il(b, n.stateNode));
            break;
        case 4:
            r = b, l = De, b = n.stateNode.containerInfo, De = !0, Je(e, t, n), b = r, De = l;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!le && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                l = r = r.next;
                do {
                    var o = l,
                        i = o.destroy;
                    o = o.tag, i !== void 0 && (o & 2 || o & 4) && Lo(n, t, i), l = l.next
                } while (l !== r)
            }
            Je(e, t, n);
            break;
        case 1:
            if (!le && (Wt(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (s) {
                W(n, t, s)
            }
            Je(e, t, n);
            break;
        case 21:
            Je(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (le = (r = le) || n.memoizedState !== null, Je(e, t, n), le = r) : Je(e, t, n);
            break;
        default:
            Je(e, t, n)
    }
}

function Rs(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new hf), t.forEach(function(r) {
            var l = Ef.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(l, l))
        })
    }
}

function ze(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var l = n[r];
            try {
                var o = e,
                    i = t,
                    s = i;
                e: for (; s !== null;) {
                    switch (s.tag) {
                        case 5:
                            b = s.stateNode, De = !1;
                            break e;
                        case 3:
                            b = s.stateNode.containerInfo, De = !0;
                            break e;
                        case 4:
                            b = s.stateNode.containerInfo, De = !0;
                            break e
                    }
                    s = s.return
                }
                if (b === null) throw Error(v(160));
                Ba(o, i, l), b = null, De = !1;
                var u = l.alternate;
                u !== null && (u.return = null), l.return = null
            } catch (d) {
                W(l, t, d)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) Va(t, e), t = t.sibling
}

function Va(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (ze(t, e), Ie(e), r & 4) {
                try {
                    zn(3, e, e.return), cl(3, e)
                } catch (k) {
                    W(e, e.return, k)
                }
                try {
                    zn(5, e, e.return)
                } catch (k) {
                    W(e, e.return, k)
                }
            }
            break;
        case 1:
            ze(t, e), Ie(e), r & 512 && n !== null && Wt(n, n.return);
            break;
        case 5:
            if (ze(t, e), Ie(e), r & 512 && n !== null && Wt(n, n.return), e.flags & 32) {
                var l = e.stateNode;
                try {
                    Mn(l, "")
                } catch (k) {
                    W(e, e.return, k)
                }
            }
            if (r & 4 && (l = e.stateNode, l != null)) {
                var o = e.memoizedProps,
                    i = n !== null ? n.memoizedProps : o,
                    s = e.type,
                    u = e.updateQueue;
                if (e.updateQueue = null, u !== null) try {
                    s === "input" && o.type === "radio" && o.name != null && cu(l, o), lo(s, i);
                    var d = lo(s, o);
                    for (i = 0; i < u.length; i += 2) {
                        var g = u[i],
                            y = u[i + 1];
                        g === "style" ? hu(l, y) : g === "dangerouslySetInnerHTML" ? pu(l, y) : g === "children" ? Mn(l, y) : Ko(l, g, y, d)
                    }
                    switch (s) {
                        case "input":
                            bl(l, o);
                            break;
                        case "textarea":
                            du(l, o);
                            break;
                        case "select":
                            var h = l._wrapperState.wasMultiple;
                            l._wrapperState.wasMultiple = !!o.multiple;
                            var x = o.value;
                            x != null ? Kt(l, !!o.multiple, x, !1) : h !== !!o.multiple && (o.defaultValue != null ? Kt(l, !!o.multiple, o.defaultValue, !0) : Kt(l, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    l[Vn] = o
                } catch (k) {
                    W(e, e.return, k)
                }
            }
            break;
        case 6:
            if (ze(t, e), Ie(e), r & 4) {
                if (e.stateNode === null) throw Error(v(162));
                l = e.stateNode, o = e.memoizedProps;
                try {
                    l.nodeValue = o
                } catch (k) {
                    W(e, e.return, k)
                }
            }
            break;
        case 3:
            if (ze(t, e), Ie(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                Fn(t.containerInfo)
            } catch (k) {
                W(e, e.return, k)
            }
            break;
        case 4:
            ze(t, e), Ie(e);
            break;
        case 13:
            ze(t, e), Ie(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Ei = K())), r & 4 && Rs(e);
            break;
        case 22:
            if (g = n !== null && n.memoizedState !== null, e.mode & 1 ? (le = (d = le) || g, ze(t, e), le = d) : ze(t, e), Ie(e), r & 8192) {
                if (d = e.memoizedState !== null, (e.stateNode.isHidden = d) && !g && e.mode & 1)
                    for (E = e, g = e.child; g !== null;) {
                        for (y = E = g; E !== null;) {
                            switch (h = E, x = h.child, h.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    zn(4, h, h.return);
                                    break;
                                case 1:
                                    Wt(h, h.return);
                                    var w = h.stateNode;
                                    if (typeof w.componentWillUnmount == "function") {
                                        r = h, n = h.return;
                                        try {
                                            t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount()
                                        } catch (k) {
                                            W(r, n, k)
                                        }
                                    }
                                    break;
                                case 5:
                                    Wt(h, h.return);
                                    break;
                                case 22:
                                    if (h.memoizedState !== null) {
                                        Fs(y);
                                        continue
                                    }
                            }
                            x !== null ? (x.return = h, E = x) : Fs(y)
                        }
                        g = g.sibling
                    }
                e: for (g = null, y = e;;) {
                    if (y.tag === 5) {
                        if (g === null) {
                            g = y;
                            try {
                                l = y.stateNode, d ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (s = y.stateNode, u = y.memoizedProps.style, i = u != null && u.hasOwnProperty("display") ? u.display : null, s.style.display = mu("display", i))
                            } catch (k) {
                                W(e, e.return, k)
                            }
                        }
                    } else if (y.tag === 6) {
                        if (g === null) try {
                            y.stateNode.nodeValue = d ? "" : y.memoizedProps
                        } catch (k) {
                            W(e, e.return, k)
                        }
                    } else if ((y.tag !== 22 && y.tag !== 23 || y.memoizedState === null || y === e) && y.child !== null) {
                        y.child.return = y, y = y.child;
                        continue
                    }
                    if (y === e) break e;
                    for (; y.sibling === null;) {
                        if (y.return === null || y.return === e) break e;
                        g === y && (g = null), y = y.return
                    }
                    g === y && (g = null), y.sibling.return = y.return, y = y.sibling
                }
            }
            break;
        case 19:
            ze(t, e), Ie(e), r & 4 && Rs(e);
            break;
        case 21:
            break;
        default:
            ze(t, e), Ie(e)
    }
}

function Ie(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (Aa(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(v(160))
            }
            switch (r.tag) {
                case 5:
                    var l = r.stateNode;
                    r.flags & 32 && (Mn(l, ""), r.flags &= -33);
                    var o = Os(e);
                    Ro(e, o, l);
                    break;
                case 3:
                case 4:
                    var i = r.stateNode.containerInfo,
                        s = Os(e);
                    Oo(e, s, i);
                    break;
                default:
                    throw Error(v(161))
            }
        }
        catch (u) {
            W(e, e.return, u)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function gf(e, t, n) {
    E = e, Ha(e)
}

function Ha(e, t, n) {
    for (var r = (e.mode & 1) !== 0; E !== null;) {
        var l = E,
            o = l.child;
        if (l.tag === 22 && r) {
            var i = l.memoizedState !== null || yr;
            if (!i) {
                var s = l.alternate,
                    u = s !== null && s.memoizedState !== null || le;
                s = yr;
                var d = le;
                if (yr = i, (le = u) && !d)
                    for (E = l; E !== null;) i = E, u = i.child, i.tag === 22 && i.memoizedState !== null ? Us(l) : u !== null ? (u.return = i, E = u) : Us(l);
                for (; o !== null;) E = o, Ha(o), o = o.sibling;
                E = l, yr = s, le = d
            }
            Is(e)
        } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, E = o) : Is(e)
    }
}

function Is(e) {
    for (; E !== null;) {
        var t = E;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        le || cl(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !le)
                            if (n === null) r.componentDidMount();
                            else {
                                var l = t.elementType === t.type ? n.memoizedProps : Te(t.type, n.memoizedProps);
                                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var o = t.updateQueue;
                        o !== null && ws(t, o, r);
                        break;
                    case 3:
                        var i = t.updateQueue;
                        if (i !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            ws(t, i, n)
                        }
                        break;
                    case 5:
                        var s = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = s;
                            var u = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    u.autoFocus && n.focus();
                                    break;
                                case "img":
                                    u.src && (n.src = u.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var d = t.alternate;
                            if (d !== null) {
                                var g = d.memoizedState;
                                if (g !== null) {
                                    var y = g.dehydrated;
                                    y !== null && Fn(y)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(v(163))
                }
                le || t.flags & 512 && Mo(t)
            } catch (h) {
                W(t, t.return, h)
            }
        }
        if (t === e) {
            E = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, E = n;
            break
        }
        E = t.return
    }
}

function Fs(e) {
    for (; E !== null;) {
        var t = E;
        if (t === e) {
            E = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, E = n;
            break
        }
        E = t.return
    }
}

function Us(e) {
    for (; E !== null;) {
        var t = E;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        cl(4, t)
                    } catch (u) {
                        W(t, n, u)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var l = t.return;
                        try {
                            r.componentDidMount()
                        } catch (u) {
                            W(t, l, u)
                        }
                    }
                    var o = t.return;
                    try {
                        Mo(t)
                    } catch (u) {
                        W(t, o, u)
                    }
                    break;
                case 5:
                    var i = t.return;
                    try {
                        Mo(t)
                    } catch (u) {
                        W(t, i, u)
                    }
            }
        } catch (u) {
            W(t, t.return, u)
        }
        if (t === e) {
            E = null;
            break
        }
        var s = t.sibling;
        if (s !== null) {
            s.return = t.return, E = s;
            break
        }
        E = t.return
    }
}
var vf = Math.ceil,
    Xr = Xe.ReactCurrentDispatcher,
    Ni = Xe.ReactCurrentOwner,
    Ee = Xe.ReactCurrentBatchConfig,
    M = 0,
    q = null,
    G = null,
    ee = 0,
    ye = 0,
    Qt = ht(0),
    Z = 0,
    Yn = null,
    zt = 0,
    dl = 0,
    Ci = 0,
    Tn = null,
    de = null,
    Ei = 0,
    ln = 1 / 0,
    Be = null,
    Jr = !1,
    Io = null,
    at = null,
    gr = !1,
    rt = null,
    qr = 0,
    Dn = 0,
    Fo = null,
    Pr = -1,
    zr = 0;

function ue() {
    return M & 6 ? K() : Pr !== -1 ? Pr : Pr = K()
}

function ct(e) {
    return e.mode & 1 ? M & 2 && ee !== 0 ? ee & -ee : ef.transition !== null ? (zr === 0 && (zr = _u()), zr) : (e = O, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ou(e.type)), e) : 1
}

function Oe(e, t, n, r) {
    if (50 < Dn) throw Dn = 0, Fo = null, Error(v(185));
    Xn(e, n, r), (!(M & 2) || e !== q) && (e === q && (!(M & 2) && (dl |= n), Z === 4 && tt(e, ee)), he(e, r), n === 1 && M === 0 && !(t.mode & 1) && (ln = K() + 500, sl && yt()))
}

function he(e, t) {
    var n = e.callbackNode;
    ed(e, t);
    var r = Rr(e, e === q ? ee : 0);
    if (r === 0) n !== null && Gi(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && Gi(n), t === 1) e.tag === 0 ? bd($s.bind(null, e)) : bu($s.bind(null, e)), Zd(function() {
            !(M & 6) && yt()
        }), n = null;
        else {
            switch (Pu(r)) {
                case 1:
                    n = Jo;
                    break;
                case 4:
                    n = Eu;
                    break;
                case 16:
                    n = Or;
                    break;
                case 536870912:
                    n = ju;
                    break;
                default:
                    n = Or
            }
            n = Ja(n, Wa.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function Wa(e, t) {
    if (Pr = -1, zr = 0, M & 6) throw Error(v(327));
    var n = e.callbackNode;
    if (Jt() && e.callbackNode !== n) return null;
    var r = Rr(e, e === q ? ee : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = br(e, r);
    else {
        t = r;
        var l = M;
        M |= 2;
        var o = Ka();
        (q !== e || ee !== t) && (Be = null, ln = K() + 500, Ct(e, t));
        do try {
            kf();
            break
        } catch (s) {
            Qa(e, s)
        }
        while (!0);
        ci(), Xr.current = o, M = l, G !== null ? t = 0 : (q = null, ee = 0, t = Z)
    }
    if (t !== 0) {
        if (t === 2 && (l = ao(e), l !== 0 && (r = l, t = Uo(e, l))), t === 1) throw n = Yn, Ct(e, 0), tt(e, r), he(e, K()), n;
        if (t === 6) tt(e, r);
        else {
            if (l = e.current.alternate, !(r & 30) && !xf(l) && (t = br(e, r), t === 2 && (o = ao(e), o !== 0 && (r = o, t = Uo(e, o))), t === 1)) throw n = Yn, Ct(e, 0), tt(e, r), he(e, K()), n;
            switch (e.finishedWork = l, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(v(345));
                case 2:
                    wt(e, de, Be);
                    break;
                case 3:
                    if (tt(e, r), (r & 130023424) === r && (t = Ei + 500 - K(), 10 < t)) {
                        if (Rr(e, 0) !== 0) break;
                        if (l = e.suspendedLanes, (l & r) !== r) {
                            ue(), e.pingedLanes |= e.suspendedLanes & l;
                            break
                        }
                        e.timeoutHandle = vo(wt.bind(null, e, de, Be), t);
                        break
                    }
                    wt(e, de, Be);
                    break;
                case 4:
                    if (tt(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, l = -1; 0 < r;) {
                        var i = 31 - Me(r);
                        o = 1 << i, i = t[i], i > l && (l = i), r &= ~o
                    }
                    if (r = l, r = K() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * vf(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = vo(wt.bind(null, e, de, Be), r);
                        break
                    }
                    wt(e, de, Be);
                    break;
                case 5:
                    wt(e, de, Be);
                    break;
                default:
                    throw Error(v(329))
            }
        }
    }
    return he(e, K()), e.callbackNode === n ? Wa.bind(null, e) : null
}

function Uo(e, t) {
    var n = Tn;
    return e.current.memoizedState.isDehydrated && (Ct(e, t).flags |= 256), e = br(e, t), e !== 2 && (t = de, de = n, t !== null && $o(t)), e
}

function $o(e) {
    de === null ? de = e : de.push.apply(de, e)
}

function xf(e) {
    for (var t = e;;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var r = 0; r < n.length; r++) {
                    var l = n[r],
                        o = l.getSnapshot;
                    l = l.value;
                    try {
                        if (!Re(o(), l)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
        else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function tt(e, t) {
    for (t &= ~Ci, t &= ~dl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - Me(t),
            r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function $s(e) {
    if (M & 6) throw Error(v(327));
    Jt();
    var t = Rr(e, 0);
    if (!(t & 1)) return he(e, K()), null;
    var n = br(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = ao(e);
        r !== 0 && (t = r, n = Uo(e, r))
    }
    if (n === 1) throw n = Yn, Ct(e, 0), tt(e, t), he(e, K()), n;
    if (n === 6) throw Error(v(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, wt(e, de, Be), he(e, K()), null
}

function ji(e, t) {
    var n = M;
    M |= 1;
    try {
        return e(t)
    } finally {
        M = n, M === 0 && (ln = K() + 500, sl && yt())
    }
}

function Tt(e) {
    rt !== null && rt.tag === 0 && !(M & 6) && Jt();
    var t = M;
    M |= 1;
    var n = Ee.transition,
        r = O;
    try {
        if (Ee.transition = null, O = 1, e) return e()
    } finally {
        O = r, Ee.transition = n, M = t, !(M & 6) && yt()
    }
}

function _i() {
    ye = Qt.current, $(Qt)
}

function Ct(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Yd(n)), G !== null)
        for (n = G.return; n !== null;) {
            var r = n;
            switch (si(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && Ar();
                    break;
                case 3:
                    nn(), $(pe), $(oe), yi();
                    break;
                case 5:
                    hi(r);
                    break;
                case 4:
                    nn();
                    break;
                case 13:
                    $(B);
                    break;
                case 19:
                    $(B);
                    break;
                case 10:
                    di(r.type._context);
                    break;
                case 22:
                case 23:
                    _i()
            }
            n = n.return
        }
    if (q = e, G = e = dt(e.current, null), ee = ye = t, Z = 0, Yn = null, Ci = dl = zt = 0, de = Tn = null, St !== null) {
        for (t = 0; t < St.length; t++)
            if (n = St[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var l = r.next,
                    o = n.pending;
                if (o !== null) {
                    var i = o.next;
                    o.next = l, r.next = i
                }
                n.pending = r
            }
        St = null
    }
    return e
}

function Qa(e, t) {
    do {
        var n = G;
        try {
            if (ci(), Er.current = Zr, Yr) {
                for (var r = V.memoizedState; r !== null;) {
                    var l = r.queue;
                    l !== null && (l.pending = null), r = r.next
                }
                Yr = !1
            }
            if (Pt = 0, J = Y = V = null, Pn = !1, Qn = 0, Ni.current = null, n === null || n.return === null) {
                Z = 1, Yn = t, G = null;
                break
            }
            e: {
                var o = e,
                    i = n.return,
                    s = n,
                    u = t;
                if (t = ee, s.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
                    var d = u,
                        g = s,
                        y = g.tag;
                    if (!(g.mode & 1) && (y === 0 || y === 11 || y === 15)) {
                        var h = g.alternate;
                        h ? (g.updateQueue = h.updateQueue, g.memoizedState = h.memoizedState, g.lanes = h.lanes) : (g.updateQueue = null, g.memoizedState = null)
                    }
                    var x = js(i);
                    if (x !== null) {
                        x.flags &= -257, _s(x, i, s, o, t), x.mode & 1 && Es(o, d, t), t = x, u = d;
                        var w = t.updateQueue;
                        if (w === null) {
                            var k = new Set;
                            k.add(u), t.updateQueue = k
                        } else w.add(u);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Es(o, d, t), Pi();
                            break e
                        }
                        u = Error(v(426))
                    }
                } else if (A && s.mode & 1) {
                    var P = js(i);
                    if (P !== null) {
                        !(P.flags & 65536) && (P.flags |= 256), _s(P, i, s, o, t), ui(rn(u, s));
                        break e
                    }
                }
                o = u = rn(u, s),
                Z !== 4 && (Z = 2),
                Tn === null ? Tn = [o] : Tn.push(o),
                o = i;do {
                    switch (o.tag) {
                        case 3:
                            o.flags |= 65536, t &= -t, o.lanes |= t;
                            var f = Pa(o, u, t);
                            xs(o, f);
                            break e;
                        case 1:
                            s = u;
                            var a = o.type,
                                p = o.stateNode;
                            if (!(o.flags & 128) && (typeof a.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (at === null || !at.has(p)))) {
                                o.flags |= 65536, t &= -t, o.lanes |= t;
                                var m = za(o, s, t);
                                xs(o, m);
                                break e
                            }
                    }
                    o = o.return
                } while (o !== null)
            }
            Ya(n)
        } catch (N) {
            t = N, G === n && n !== null && (G = n = n.return);
            continue
        }
        break
    } while (!0)
}

function Ka() {
    var e = Xr.current;
    return Xr.current = Zr, e === null ? Zr : e
}

function Pi() {
    (Z === 0 || Z === 3 || Z === 2) && (Z = 4), q === null || !(zt & 268435455) && !(dl & 268435455) || tt(q, ee)
}

function br(e, t) {
    var n = M;
    M |= 2;
    var r = Ka();
    (q !== e || ee !== t) && (Be = null, Ct(e, t));
    do try {
        wf();
        break
    } catch (l) {
        Qa(e, l)
    }
    while (!0);
    if (ci(), M = n, Xr.current = r, G !== null) throw Error(v(261));
    return q = null, ee = 0, Z
}

function wf() {
    for (; G !== null;) Ga(G)
}

function kf() {
    for (; G !== null && !Qc();) Ga(G)
}

function Ga(e) {
    var t = Xa(e.alternate, e, ye);
    e.memoizedProps = e.pendingProps, t === null ? Ya(e) : G = t, Ni.current = null
}

function Ya(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = mf(n, t), n !== null) {
                n.flags &= 32767, G = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
                Z = 6, G = null;
                return
            }
        } else if (n = pf(n, t, ye), n !== null) {
            G = n;
            return
        }
        if (t = t.sibling, t !== null) {
            G = t;
            return
        }
        G = t = e
    } while (t !== null);
    Z === 0 && (Z = 5)
}

function wt(e, t, n) {
    var r = O,
        l = Ee.transition;
    try {
        Ee.transition = null, O = 1, Sf(e, t, n, r)
    } finally {
        Ee.transition = l, O = r
    }
    return null
}

function Sf(e, t, n, r) {
    do Jt(); while (rt !== null);
    if (M & 6) throw Error(v(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(v(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (td(e, o), e === q && (G = q = null, ee = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || gr || (gr = !0, Ja(Or, function() {
            return Jt(), null
        })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
        o = Ee.transition, Ee.transition = null;
        var i = O;
        O = 1;
        var s = M;
        M |= 4, Ni.current = null, yf(e, n), Va(n, e), Bd(yo), Ir = !!ho, yo = ho = null, e.current = n, gf(n), Kc(), M = s, O = i, Ee.transition = o
    } else e.current = n;
    if (gr && (gr = !1, rt = e, qr = l), o = e.pendingLanes, o === 0 && (at = null), Zc(n.stateNode), he(e, K()), t !== null)
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, {
            componentStack: l.stack,
            digest: l.digest
        });
    if (Jr) throw Jr = !1, e = Io, Io = null, e;
    return qr & 1 && e.tag !== 0 && Jt(), o = e.pendingLanes, o & 1 ? e === Fo ? Dn++ : (Dn = 0, Fo = e) : Dn = 0, yt(), null
}

function Jt() {
    if (rt !== null) {
        var e = Pu(qr),
            t = Ee.transition,
            n = O;
        try {
            if (Ee.transition = null, O = 16 > e ? 16 : e, rt === null) var r = !1;
            else {
                if (e = rt, rt = null, qr = 0, M & 6) throw Error(v(331));
                var l = M;
                for (M |= 4, E = e.current; E !== null;) {
                    var o = E,
                        i = o.child;
                    if (E.flags & 16) {
                        var s = o.deletions;
                        if (s !== null) {
                            for (var u = 0; u < s.length; u++) {
                                var d = s[u];
                                for (E = d; E !== null;) {
                                    var g = E;
                                    switch (g.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            zn(8, g, o)
                                    }
                                    var y = g.child;
                                    if (y !== null) y.return = g, E = y;
                                    else
                                        for (; E !== null;) {
                                            g = E;
                                            var h = g.sibling,
                                                x = g.return;
                                            if ($a(g), g === d) {
                                                E = null;
                                                break
                                            }
                                            if (h !== null) {
                                                h.return = x, E = h;
                                                break
                                            }
                                            E = x
                                        }
                                }
                            }
                            var w = o.alternate;
                            if (w !== null) {
                                var k = w.child;
                                if (k !== null) {
                                    w.child = null;
                                    do {
                                        var P = k.sibling;
                                        k.sibling = null, k = P
                                    } while (k !== null)
                                }
                            }
                            E = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && i !== null) i.return = o, E = i;
                    else e: for (; E !== null;) {
                        if (o = E, o.flags & 2048) switch (o.tag) {
                            case 0:
                            case 11:
                            case 15:
                                zn(9, o, o.return)
                        }
                        var f = o.sibling;
                        if (f !== null) {
                            f.return = o.return, E = f;
                            break e
                        }
                        E = o.return
                    }
                }
                var a = e.current;
                for (E = a; E !== null;) {
                    i = E;
                    var p = i.child;
                    if (i.subtreeFlags & 2064 && p !== null) p.return = i, E = p;
                    else e: for (i = a; E !== null;) {
                        if (s = E, s.flags & 2048) try {
                            switch (s.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    cl(9, s)
                            }
                        } catch (N) {
                            W(s, s.return, N)
                        }
                        if (s === i) {
                            E = null;
                            break e
                        }
                        var m = s.sibling;
                        if (m !== null) {
                            m.return = s.return, E = m;
                            break e
                        }
                        E = s.return
                    }
                }
                if (M = l, yt(), $e && typeof $e.onPostCommitFiberRoot == "function") try {
                    $e.onPostCommitFiberRoot(nl, e)
                } catch {}
                r = !0
            }
            return r
        } finally {
            O = n, Ee.transition = t
        }
    }
    return !1
}

function As(e, t, n) {
    t = rn(n, t), t = Pa(e, t, 1), e = ut(e, t, 1), t = ue(), e !== null && (Xn(e, 1, t), he(e, t))
}

function W(e, t, n) {
    if (e.tag === 3) As(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                As(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (at === null || !at.has(r))) {
                    e = rn(n, e), e = za(t, e, 1), t = ut(t, e, 1), e = ue(), t !== null && (Xn(t, 1, e), he(t, e));
                    break
                }
            }
            t = t.return
        }
}

function Nf(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = ue(), e.pingedLanes |= e.suspendedLanes & n, q === e && (ee & n) === n && (Z === 4 || Z === 3 && (ee & 130023424) === ee && 500 > K() - Ei ? Ct(e, 0) : Ci |= n), he(e, t)
}

function Za(e, t) {
    t === 0 && (e.mode & 1 ? (t = sr, sr <<= 1, !(sr & 130023424) && (sr = 4194304)) : t = 1);
    var n = ue();
    e = Ye(e, t), e !== null && (Xn(e, t, n), he(e, n))
}

function Cf(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), Za(e, n)
}

function Ef(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                l = e.memoizedState;
            l !== null && (n = l.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(v(314))
    }
    r !== null && r.delete(t), Za(e, n)
}
var Xa;
Xa = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || pe.current) fe = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return fe = !1, ff(e, t, n);
            fe = !!(e.flags & 131072)
        }
    else fe = !1, A && t.flags & 1048576 && ea(t, Hr, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            _r(e, t), e = t.pendingProps;
            var l = bt(t, oe.current);
            Xt(t, n), l = vi(null, t, r, e, l, n);
            var o = xi();
            return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, me(r) ? (o = !0, Br(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, pi(t), l.updater = al, t.stateNode = l, l._reactInternals = t, Eo(t, r, e, n), t = Po(null, t, r, !0, o, n)) : (t.tag = 0, A && o && ii(t), se(null, t, l, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e: {
                switch (_r(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = _f(r), e = Te(r, e), l) {
                    case 0:
                        t = _o(null, t, r, e, n);
                        break e;
                    case 1:
                        t = Ts(null, t, r, e, n);
                        break e;
                    case 11:
                        t = Ps(null, t, r, e, n);
                        break e;
                    case 14:
                        t = zs(null, t, r, Te(r.type, e), n);
                        break e
                }
                throw Error(v(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Te(r, l), _o(e, t, r, l, n);
        case 1:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Te(r, l), Ts(e, t, r, l, n);
        case 3:
            e: {
                if (Ma(t), e === null) throw Error(v(387));r = t.pendingProps,
                o = t.memoizedState,
                l = o.element,
                ia(e, t),
                Kr(t, r, null, n);
                var i = t.memoizedState;
                if (r = i.element, o.isDehydrated)
                    if (o = {
                            element: r,
                            isDehydrated: !1,
                            cache: i.cache,
                            pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                            transitions: i.transitions
                        }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
                        l = rn(Error(v(423)), t), t = Ds(e, t, r, n, l);
                        break e
                    } else if (r !== l) {
                    l = rn(Error(v(424)), t), t = Ds(e, t, r, n, l);
                    break e
                } else
                    for (ge = st(t.stateNode.containerInfo.firstChild), ve = t, A = !0, Le = null, n = la(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (en(), r === l) {
                        t = Ze(e, t, n);
                        break e
                    }
                    se(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return sa(t), e === null && So(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, go(r, l) ? i = null : o !== null && go(r, o) && (t.flags |= 32), La(e, t), se(e, t, i, n), t.child;
        case 6:
            return e === null && So(t), null;
        case 13:
            return Oa(e, t, n);
        case 4:
            return mi(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = tn(t, null, r, n) : se(e, t, r, n), t.child;
        case 11:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Te(r, l), Ps(e, t, r, l, n);
        case 7:
            return se(e, t, t.pendingProps, n), t.child;
        case 8:
            return se(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return se(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, I(Wr, r._currentValue), r._currentValue = i, o !== null)
                    if (Re(o.value, i)) {
                        if (o.children === l.children && !pe.current) {
                            t = Ze(e, t, n);
                            break e
                        }
                    } else
                        for (o = t.child, o !== null && (o.return = t); o !== null;) {
                            var s = o.dependencies;
                            if (s !== null) {
                                i = o.child;
                                for (var u = s.firstContext; u !== null;) {
                                    if (u.context === r) {
                                        if (o.tag === 1) {
                                            u = Qe(-1, n & -n), u.tag = 2;
                                            var d = o.updateQueue;
                                            if (d !== null) {
                                                d = d.shared;
                                                var g = d.pending;
                                                g === null ? u.next = u : (u.next = g.next, g.next = u), d.pending = u
                                            }
                                        }
                                        o.lanes |= n, u = o.alternate, u !== null && (u.lanes |= n), No(o.return, n, t), s.lanes |= n;
                                        break
                                    }
                                    u = u.next
                                }
                            } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
                            else if (o.tag === 18) {
                                if (i = o.return, i === null) throw Error(v(341));
                                i.lanes |= n, s = i.alternate, s !== null && (s.lanes |= n), No(i, n, t), i = o.sibling
                            } else i = o.child;
                            if (i !== null) i.return = o;
                            else
                                for (i = o; i !== null;) {
                                    if (i === t) {
                                        i = null;
                                        break
                                    }
                                    if (o = i.sibling, o !== null) {
                                        o.return = i.return, i = o;
                                        break
                                    }
                                    i = i.return
                                }
                            o = i
                        }
                se(e, t, l.children, n),
                t = t.child
            }
            return t;
        case 9:
            return l = t.type, r = t.pendingProps.children, Xt(t, n), l = je(l), r = r(l), t.flags |= 1, se(e, t, r, n), t.child;
        case 14:
            return r = t.type, l = Te(r, t.pendingProps), l = Te(r.type, l), zs(e, t, r, l, n);
        case 15:
            return Ta(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Te(r, l), _r(e, t), t.tag = 1, me(r) ? (e = !0, Br(t)) : e = !1, Xt(t, n), _a(t, r, l), Eo(t, r, l, n), Po(null, t, r, !0, e, n);
        case 19:
            return Ra(e, t, n);
        case 22:
            return Da(e, t, n)
    }
    throw Error(v(156, t.tag))
};

function Ja(e, t) {
    return Cu(e, t)
}

function jf(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function Ce(e, t, n, r) {
    return new jf(e, t, n, r)
}

function zi(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function _f(e) {
    if (typeof e == "function") return zi(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === Yo) return 11;
        if (e === Zo) return 14
    }
    return 2
}

function dt(e, t) {
    var n = e.alternate;
    return n === null ? (n = Ce(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function Tr(e, t, n, r, l, o) {
    var i = 2;
    if (r = e, typeof e == "function") zi(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else e: switch (e) {
        case Rt:
            return Et(n.children, l, o, t);
        case Go:
            i = 8, l |= 8;
            break;
        case Yl:
            return e = Ce(12, n, t, l | 2), e.elementType = Yl, e.lanes = o, e;
        case Zl:
            return e = Ce(13, n, t, l), e.elementType = Zl, e.lanes = o, e;
        case Xl:
            return e = Ce(19, n, t, l), e.elementType = Xl, e.lanes = o, e;
        case su:
            return fl(n, l, o, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case ou:
                    i = 10;
                    break e;
                case iu:
                    i = 9;
                    break e;
                case Yo:
                    i = 11;
                    break e;
                case Zo:
                    i = 14;
                    break e;
                case qe:
                    i = 16, r = null;
                    break e
            }
            throw Error(v(130, e == null ? e : typeof e, ""))
    }
    return t = Ce(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t
}

function Et(e, t, n, r) {
    return e = Ce(7, e, r, t), e.lanes = n, e
}

function fl(e, t, n, r) {
    return e = Ce(22, e, r, t), e.elementType = su, e.lanes = n, e.stateNode = {
        isHidden: !1
    }, e
}

function Wl(e, t, n) {
    return e = Ce(6, e, null, t), e.lanes = n, e
}

function Ql(e, t, n) {
    return t = Ce(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function Pf(e, t, n, r, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = El(0), this.expirationTimes = El(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = El(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null
}

function Ti(e, t, n, r, l, o, i, s, u) {
    return e = new Pf(e, t, n, s, u), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Ce(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, pi(o), e
}

function zf(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Ot,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}

function qa(e) {
    if (!e) return pt;
    e = e._reactInternals;
    e: {
        if (Lt(e) !== e || e.tag !== 1) throw Error(v(170));
        var t = e;do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (me(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(v(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (me(n)) return qu(e, n, t)
    }
    return t
}

function ba(e, t, n, r, l, o, i, s, u) {
    return e = Ti(n, r, !0, e, l, o, i, s, u), e.context = qa(null), n = e.current, r = ue(), l = ct(n), o = Qe(r, l), o.callback = t ? ? null, ut(n, o, l), e.current.lanes = l, Xn(e, l, r), he(e, r), e
}

function pl(e, t, n, r) {
    var l = t.current,
        o = ue(),
        i = ct(l);
    return n = qa(n), t.context === null ? t.context = n : t.pendingContext = n, t = Qe(o, i), t.payload = {
        element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = ut(l, t, i), e !== null && (Oe(e, l, i, o), Cr(e, l, i)), i
}

function el(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function Bs(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function Di(e, t) {
    Bs(e, t), (e = e.alternate) && Bs(e, t)
}

function Tf() {
    return null
}
var ec = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
};

function Li(e) {
    this._internalRoot = e
}
ml.prototype.render = Li.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(v(409));
    pl(e, t, null, null)
};
ml.prototype.unmount = Li.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Tt(function() {
            pl(null, e, null, null)
        }), t[Ge] = null
    }
};

function ml(e) {
    this._internalRoot = e
}
ml.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Du();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < et.length && t !== 0 && t < et[n].priority; n++);
        et.splice(n, 0, e), n === 0 && Mu(e)
    }
};

function Mi(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function hl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function Vs() {}

function Df(e, t, n, r, l) {
    if (l) {
        if (typeof r == "function") {
            var o = r;
            r = function() {
                var d = el(i);
                o.call(d)
            }
        }
        var i = ba(t, r, e, 0, null, !1, !1, "", Vs);
        return e._reactRootContainer = i, e[Ge] = i.current, An(e.nodeType === 8 ? e.parentNode : e), Tt(), i
    }
    for (; l = e.lastChild;) e.removeChild(l);
    if (typeof r == "function") {
        var s = r;
        r = function() {
            var d = el(u);
            s.call(d)
        }
    }
    var u = Ti(e, 0, !1, null, null, !1, !1, "", Vs);
    return e._reactRootContainer = u, e[Ge] = u.current, An(e.nodeType === 8 ? e.parentNode : e), Tt(function() {
        pl(t, u, n, r)
    }), u
}

function yl(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
        var i = o;
        if (typeof l == "function") {
            var s = l;
            l = function() {
                var u = el(i);
                s.call(u)
            }
        }
        pl(t, i, e, l)
    } else i = Df(n, t, e, l, r);
    return el(i)
}
zu = function(e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = kn(t.pendingLanes);
                n !== 0 && (qo(t, n | 1), he(t, K()), !(M & 6) && (ln = K() + 500, yt()))
            }
            break;
        case 13:
            Tt(function() {
                var r = Ye(e, 1);
                if (r !== null) {
                    var l = ue();
                    Oe(r, e, 1, l)
                }
            }), Di(e, 1)
    }
};
bo = function(e) {
    if (e.tag === 13) {
        var t = Ye(e, 134217728);
        if (t !== null) {
            var n = ue();
            Oe(t, e, 134217728, n)
        }
        Di(e, 134217728)
    }
};
Tu = function(e) {
    if (e.tag === 13) {
        var t = ct(e),
            n = Ye(e, t);
        if (n !== null) {
            var r = ue();
            Oe(n, e, t, r)
        }
        Di(e, t)
    }
};
Du = function() {
    return O
};
Lu = function(e, t) {
    var n = O;
    try {
        return O = e, t()
    } finally {
        O = n
    }
};
io = function(e, t, n) {
    switch (t) {
        case "input":
            if (bl(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var l = il(r);
                        if (!l) throw Error(v(90));
                        au(r), bl(r, l)
                    }
                }
            }
            break;
        case "textarea":
            du(e, n);
            break;
        case "select":
            t = n.value, t != null && Kt(e, !!n.multiple, t, !1)
    }
};
vu = ji;
xu = Tt;
var Lf = {
        usingClientEntryPoint: !1,
        Events: [qn, $t, il, yu, gu, ji]
    },
    vn = {
        findFiberByHostInstance: kt,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    },
    Mf = {
        bundleType: vn.bundleType,
        version: vn.version,
        rendererPackageName: vn.rendererPackageName,
        rendererConfig: vn.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Xe.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = Su(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: vn.findFiberByHostInstance || Tf,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var vr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!vr.isDisabled && vr.supportsFiber) try {
        nl = vr.inject(Mf), $e = vr
    } catch {}
}
we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Lf;
we.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Mi(t)) throw Error(v(200));
    return zf(e, t, null, n)
};
we.createRoot = function(e, t) {
    if (!Mi(e)) throw Error(v(299));
    var n = !1,
        r = "",
        l = ec;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Ti(e, 1, !1, null, null, n, !1, r, l), e[Ge] = t.current, An(e.nodeType === 8 ? e.parentNode : e), new Li(t)
};
we.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(v(188)) : (e = Object.keys(e).join(","), Error(v(268, e)));
    return e = Su(t), e = e === null ? null : e.stateNode, e
};
we.flushSync = function(e) {
    return Tt(e)
};
we.hydrate = function(e, t, n) {
    if (!hl(t)) throw Error(v(200));
    return yl(null, e, t, !0, n)
};
we.hydrateRoot = function(e, t, n) {
    if (!Mi(e)) throw Error(v(405));
    var r = n != null && n.hydratedSources || null,
        l = !1,
        o = "",
        i = ec;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = ba(t, null, e, 1, n ? ? null, l, !1, o, i), e[Ge] = t.current, An(e), r)
        for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(n, l);
    return new ml(t)
};
we.render = function(e, t, n) {
    if (!hl(t)) throw Error(v(200));
    return yl(null, e, t, !1, n)
};
we.unmountComponentAtNode = function(e) {
    if (!hl(e)) throw Error(v(40));
    return e._reactRootContainer ? (Tt(function() {
        yl(null, null, e, !1, function() {
            e._reactRootContainer = null, e[Ge] = null
        })
    }), !0) : !1
};
we.unstable_batchedUpdates = ji;
we.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!hl(n)) throw Error(v(200));
    if (e == null || e._reactInternals === void 0) throw Error(v(38));
    return yl(e, t, n, !1, r)
};
we.version = "18.3.1-next-f1338f8080-20240426";

function tc() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tc)
    } catch (e) {
        console.error(e)
    }
}
tc(), tu.exports = we;
var Of = tu.exports,
    nc, Hs = Of;
nc = Hs.createRoot, Hs.hydrateRoot;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Rf = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const If = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(),
    ie = (e, t) => {
        const n = U.forwardRef(({
            color: r = "currentColor",
            size: l = 24,
            strokeWidth: o = 2,
            absoluteStrokeWidth: i,
            className: s = "",
            children: u,
            ...d
        }, g) => U.createElement("svg", {
            ref: g,
            ...Rf,
            width: l,
            height: l,
            stroke: r,
            strokeWidth: i ? Number(o) * 24 / Number(l) : o,
            className: ["lucide", `lucide-${If(e)}`, s].join(" "),
            ...d
        }, [...t.map(([y, h]) => U.createElement(y, h)), ...Array.isArray(u) ? u : [u]]));
        return n.displayName = `${e}`, n
    };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ff = ie("Activity", [
    ["path", {
        d: "M22 12h-4l-3 9L9 3l-3 9H2",
        key: "d5dnw9"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uf = ie("Brain", [
    ["path", {
        d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
        key: "l5xja"
    }],
    ["path", {
        d: "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",
        key: "ep3f8r"
    }],
    ["path", {
        d: "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",
        key: "1p4c4q"
    }],
    ["path", {
        d: "M17.599 6.5a3 3 0 0 0 .399-1.375",
        key: "tmeiqw"
    }],
    ["path", {
        d: "M6.003 5.125A3 3 0 0 0 6.401 6.5",
        key: "105sqy"
    }],
    ["path", {
        d: "M3.477 10.896a4 4 0 0 1 .585-.396",
        key: "ql3yin"
    }],
    ["path", {
        d: "M19.938 10.5a4 4 0 0 1 .585.396",
        key: "1qfode"
    }],
    ["path", {
        d: "M6 18a4 4 0 0 1-1.967-.516",
        key: "2e4loj"
    }],
    ["path", {
        d: "M19.967 17.484A4 4 0 0 1 18 18",
        key: "159ez6"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $f = ie("Cpu", [
    ["rect", {
        x: "4",
        y: "4",
        width: "16",
        height: "16",
        rx: "2",
        key: "1vbyd7"
    }],
    ["rect", {
        x: "9",
        y: "9",
        width: "6",
        height: "6",
        key: "o3kz5p"
    }],
    ["path", {
        d: "M15 2v2",
        key: "13l42r"
    }],
    ["path", {
        d: "M15 20v2",
        key: "15mkzm"
    }],
    ["path", {
        d: "M2 15h2",
        key: "1gxd5l"
    }],
    ["path", {
        d: "M2 9h2",
        key: "1bbxkp"
    }],
    ["path", {
        d: "M20 15h2",
        key: "19e6y8"
    }],
    ["path", {
        d: "M20 9h2",
        key: "19tzq7"
    }],
    ["path", {
        d: "M9 2v2",
        key: "165o2o"
    }],
    ["path", {
        d: "M9 20v2",
        key: "i2bqo8"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Af = ie("Database", [
    ["ellipse", {
        cx: "12",
        cy: "5",
        rx: "9",
        ry: "3",
        key: "msslwz"
    }],
    ["path", {
        d: "M3 5V19A9 3 0 0 0 21 19V5",
        key: "1wlel7"
    }],
    ["path", {
        d: "M3 12A9 3 0 0 0 21 12",
        key: "mv7ke4"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bf = ie("DollarSign", [
    ["line", {
        x1: "12",
        x2: "12",
        y1: "2",
        y2: "22",
        key: "7eqyqh"
    }],
    ["path", {
        d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
        key: "1b0p4s"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vf = ie("Key", [
    ["circle", {
        cx: "7.5",
        cy: "15.5",
        r: "5.5",
        key: "yqb3hr"
    }],
    ["path", {
        d: "m21 2-9.6 9.6",
        key: "1j0ho8"
    }],
    ["path", {
        d: "m15.5 7.5 3 3L22 7l-3-3",
        key: "1rn1fs"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hf = ie("LineChart", [
    ["path", {
        d: "M3 3v18h18",
        key: "1s2lah"
    }],
    ["path", {
        d: "m19 9-5 5-4-4-3 3",
        key: "2osh9i"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wf = ie("Search", [
    ["circle", {
        cx: "11",
        cy: "11",
        r: "8",
        key: "4ej97u"
    }],
    ["path", {
        d: "m21 21-4.3-4.3",
        key: "1qie3q"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qf = ie("Send", [
    ["path", {
        d: "m22 2-7 20-4-9-9-4Z",
        key: "1q3vgg"
    }],
    ["path", {
        d: "M22 2 11 13",
        key: "nzbqef"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kf = ie("Shield", [
    ["path", {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rc = ie("Sparkles", [
    ["path", {
        d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",
        key: "17u4zn"
    }],
    ["path", {
        d: "M5 3v4",
        key: "bklmnn"
    }],
    ["path", {
        d: "M19 17v4",
        key: "iiml17"
    }],
    ["path", {
        d: "M3 5h4",
        key: "nem4j1"
    }],
    ["path", {
        d: "M17 19h4",
        key: "lbex7p"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lc = ie("Target", [
    ["circle", {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
    }],
    ["circle", {
        cx: "12",
        cy: "12",
        r: "6",
        key: "1vlfrh"
    }],
    ["circle", {
        cx: "12",
        cy: "12",
        r: "2",
        key: "1c9p78"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gf = ie("TrendingDown", [
    ["polyline", {
        points: "22 17 13.5 8.5 8.5 13.5 2 7",
        key: "1r2t7k"
    }],
    ["polyline", {
        points: "16 17 22 17 22 11",
        key: "11uiuu"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yf = ie("TrendingUp", [
    ["polyline", {
        points: "22 7 13.5 15.5 8.5 10.5 2 17",
        key: "126l90"
    }],
    ["polyline", {
        points: "16 7 22 7 22 13",
        key: "kwv8wd"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zf = ie("Wifi", [
    ["path", {
        d: "M12 20h.01",
        key: "zekei9"
    }],
    ["path", {
        d: "M2 8.82a15 15 0 0 1 20 0",
        key: "dnpr2z"
    }],
    ["path", {
        d: "M5 12.859a10 10 0 0 1 14 0",
        key: "1x1e6c"
    }],
    ["path", {
        d: "M8.5 16.429a5 5 0 0 1 7 0",
        key: "1bycff"
    }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oc = ie("Zap", [
        ["polygon", {
            points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2",
            key: "45s27k"
        }]
    ]),
    Xf = ["NZD/CAD (OTC)", "USD/DZD (OTC)", "USD/EGP (OTC)", "USD/INR (OTC)", "USD/MXN (OTC)", "USD/PKR (OTC)", "USD/TRY (OTC)", "CAD/CHF (OTC)", "EUR/AUD (OTC)", "EUR/CAD (OTC)", "EUR/SGD (OTC)", "GBP/CHF (OTC)", "USD/PHP (OTC)", "GBP/NZD (OTC)", "NZD/CHF (OTC)", "USD/COP (OTC)", "USD/NGN (OTC)", "USD/BRL (OTC)", "AUD/CHF (OTC)", "USD/BDT (OTC)", "EUR/NZD (OTC)", "USD/IDR (OTC)", "USD/ARS (OTC)", "CHF/JPY (OTC)", "NZD/JPY (OTC)", "EUR/CHF (OTC)", "USD/ZAR (OTC)", "NZD/USD (OTC)", "AUD/NZD (OTC)"],
    Jf = ["15 seconds", "30 seconds", "1 minute", "2 minutes", "5 minutes", "10 minutes"],
    Kl = [{
        text: "Connecting to market data feeds...",
        icon: c.jsx(Zf, {
            className: "w-5 h-5"
        }),
        duration: 800
    }, {
        text: "Analyzing market conditions...",
        icon: c.jsx(Wf, {
            className: "w-5 h-5"
        }),
        duration: 1200
    }, {
        text: "Processing technical indicators...",
        icon: c.jsx(Hf, {
            className: "w-5 h-5"
        }),
        duration: 1e3
    }, {
        text: "Running AI neural network analysis...",
        icon: c.jsx(Uf, {
            className: "w-5 h-5"
        }),
        duration: 1500
    }, {
        text: "Calculating optimal entry points...",
        icon: c.jsx(lc, {
            className: "w-5 h-5"
        }),
        duration: 900
    }, {
        text: "Validating signal accuracy...",
        icon: c.jsx(Af, {
            className: "w-5 h-5"
        }),
        duration: 700
    }, {
        text: "Generating trading signals...",
        icon: c.jsx($f, {
            className: "w-5 h-5"
        }),
        duration: 600
    }];

function ic({
    size: e = "w-16 h-16"
}) {
    return c.jsx("div", {
        className: `${e} relative`,
        children: c.jsxs("div", {
            className: "w-full h-full bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-xl border-2 border-cyan-400/50 relative overflow-hidden",
            style: {
                boxShadow: "0 0 30px rgba(34, 211, 238, 0.4), inset 0 0 20px rgba(34, 211, 238, 0.1)"
            },
            children: [c.jsxs("div", {
                className: "absolute bottom-2 left-2 right-2 flex items-end justify-between h-8",
                children: [c.jsx("div", {
                    className: "w-1 bg-green-400 rounded-t animate-bounce",
                    style: {
                        height: "60%",
                        animationDelay: "0ms",
                        animationDuration: "2s",
                        boxShadow: "0 0 8px #4ade80"
                    }
                }), c.jsx("div", {
                    className: "w-1 bg-red-400 rounded-t animate-bounce",
                    style: {
                        height: "40%",
                        animationDelay: "200ms",
                        animationDuration: "2s",
                        boxShadow: "0 0 8px #f87171"
                    }
                }), c.jsx("div", {
                    className: "w-1 bg-green-400 rounded-t animate-bounce",
                    style: {
                        height: "80%",
                        animationDelay: "400ms",
                        animationDuration: "2s",
                        boxShadow: "0 0 8px #4ade80"
                    }
                }), c.jsx("div", {
                    className: "w-1 bg-cyan-400 rounded-t animate-bounce",
                    style: {
                        height: "50%",
                        animationDelay: "600ms",
                        animationDuration: "2s",
                        boxShadow: "0 0 8px #22d3ee"
                    }
                }), c.jsx("div", {
                    className: "w-1 bg-green-400 rounded-t animate-bounce",
                    style: {
                        height: "70%",
                        animationDelay: "800ms",
                        animationDuration: "2s",
                        boxShadow: "0 0 8px #4ade80"
                    }
                }), c.jsx("div", {
                    className: "w-1 bg-red-400 rounded-t animate-bounce",
                    style: {
                        height: "35%",
                        animationDelay: "1000ms",
                        animationDuration: "2s",
                        boxShadow: "0 0 8px #f87171"
                    }
                })]
            }), c.jsx("div", {
                className: "absolute inset-0 flex items-center justify-center",
                children: c.jsx("div", {
                    className: "w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse",
                    style: {
                        transform: "rotate(15deg)",
                        animationDuration: "3s",
                        boxShadow: "0 0 10px rgba(34, 211, 238, 0.8)"
                    }
                })
            }), c.jsx(rc, {
                className: "w-3 h-3 text-yellow-400 absolute top-1 right-1 animate-pulse",
                style: {
                    animationDuration: "2s",
                    filter: "drop-shadow(0 0 5px #fbbf24)"
                }
            }), c.jsx(oc, {
                className: "w-2 h-2 text-purple-400 absolute bottom-1 left-1 animate-ping",
                style: {
                    animationDuration: "3s",
                    filter: "drop-shadow(0 0 3px #a855f7)"
                }
            })]
        })
    })
}

function qf({
    onAccessGranted: e
}) {
    const [t, n] = U.useState(""), [r, l] = U.useState(""), [o, i] = U.useState(!1), [s, u] = U.useState([]), [d, g] = U.useState([]);
    U.useEffect(() => {
        const h = setInterval(() => {
            u(x => {
                const k = [...x.filter(P => P.y > -10 && P.opacity > .05)];
                if (Math.random() > .7 && k.length < 25) {
                    const P = ["#22d3ee", "#a855f7", "#ec4899", "#10b981", "#f59e0b", "#8b5cf6"];
                    k.push({
                        id: `particle-${Date.now()}-${Math.random()}`,
                        x: Math.random() * 100,
                        y: 105,
                        size: Math.random() * 4 + 2,
                        color: P[Math.floor(Math.random() * P.length)],
                        speed: Math.random() * 2 + 1.5,
                        opacity: 1
                    })
                }
                return k.map(P => ({ ...P,
                    y: P.y - P.speed,
                    opacity: P.opacity - .006
                }))
            })
        }, 60);
        return () => clearInterval(h)
    }, []), U.useEffect(() => {
        const h = setInterval(() => {
            g(x => {
                const k = [...x.filter(P => P.y > -15 && P.opacity > .05)];
                return Math.random() > .65 && k.length < 20 && k.push({
                    id: `candle-${Date.now()}-${Math.random()}`,
                    x: Math.random() * 100,
                    y: 105,
                    direction: Math.random() > .5 ? "UP" : "DOWN",
                    opacity: 1
                }), k.map(P => ({ ...P,
                    y: P.y - (Math.random() * 1 + 1.2),
                    opacity: P.opacity - .008
                }))
            })
        }, 70);
        return () => clearInterval(h)
    }, []);
    const y = h => {
        h.preventDefault();
        i(true);
        l("");

        // ✅ Local key validation
        if (t === "SokAlike007") {
            e(); // access granted
        } else {
            l("Invalid access key");
        }

        i(false);
    };
    return c.jsxs("div", {
        className: "min-h-screen bg-black relative overflow-hidden flex items-center justify-center",
        children: [c.jsxs("div", {
            className: "absolute inset-0",
            children: [c.jsx("div", {
                className: "absolute inset-0 opacity-30",
                children: c.jsx("div", {
                    className: "absolute inset-0",
                    style: {
                        backgroundImage: `
              linear-gradient(rgba(34, 211, 238, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 211, 238, 0.3) 1px, transparent 1px)
            `,
                        backgroundSize: "50px 50px",
                        filter: "drop-shadow(0 0 10px rgba(34, 211, 238, 0.5))"
                    }
                })
            }), c.jsx("div", {
                className: "absolute inset-0 opacity-20",
                children: c.jsx("div", {
                    className: "absolute inset-0",
                    style: {
                        backgroundImage: `
              linear-gradient(rgba(168, 85, 247, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(168, 85, 247, 0.2) 1px, transparent 1px)
            `,
                        backgroundSize: "100px 100px",
                        filter: "drop-shadow(0 0 15px rgba(168, 85, 247, 0.4))"
                    }
                })
            }), d.map(h => c.jsx("div", {
                className: `absolute w-3 h-10 transition-all duration-75 ease-out ${h.direction==="UP"?"bg-green-400":"bg-red-400"}`,
                style: {
                    left: `${h.x}%`,
                    top: `${h.y}%`,
                    opacity: h.opacity,
                    boxShadow: h.direction === "UP" ? "0 0 15px #4ade80, 0 0 30px #4ade80" : "0 0 15px #f87171, 0 0 30px #f87171",
                    willChange: "transform, opacity"
                }
            }, h.id)), s.map(h => c.jsx("div", {
                className: "absolute rounded-full transition-all duration-75 ease-out",
                style: {
                    left: `${h.x}%`,
                    top: `${h.y}%`,
                    width: `${h.size}px`,
                    height: `${h.size}px`,
                    backgroundColor: h.color,
                    opacity: h.opacity,
                    boxShadow: `0 0 ${h.size*2}px ${h.color}`,
                    willChange: "transform, opacity"
                }
            }, h.id)), c.jsx("div", {
                className: "absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse",
                style: {
                    boxShadow: "0 0 100px rgba(34, 211, 238, 0.3), 0 0 200px rgba(34, 211, 238, 0.1)",
                    animationDuration: "3s"
                }
            }), c.jsx("div", {
                className: "absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse",
                style: {
                    animationDelay: "1s",
                    animationDuration: "3s",
                    boxShadow: "0 0 100px rgba(168, 85, 247, 0.3), 0 0 200px rgba(168, 85, 247, 0.1)"
                }
            }), c.jsx("div", {
                className: "absolute top-1/2 left-1/2 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse",
                style: {
                    animationDelay: "2s",
                    animationDuration: "3s",
                    boxShadow: "0 0 100px rgba(16, 185, 129, 0.3), 0 0 200px rgba(16, 185, 129, 0.1)"
                }
            }), c.jsx("div", {
                className: "absolute top-3/4 left-1/3 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse",
                style: {
                    animationDelay: "3s",
                    animationDuration: "3s",
                    boxShadow: "0 0 100px rgba(236, 72, 153, 0.3), 0 0 200px rgba(236, 72, 153, 0.1)"
                }
            })]
        }), c.jsx("div", {
            className: "relative z-10 w-full max-w-md mx-4",
            children: c.jsxs("div", {
                className: "bg-gray-900/90 backdrop-blur-xl rounded-3xl p-4 sm:p-8 border-2 border-cyan-500/40 relative overflow-hidden shadow-2xl",
                children: [c.jsx("div", {
                    className: "absolute inset-0 bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-pink-500/30 rounded-3xl blur-xl animate-pulse",
                    style: {
                        animationDuration: "2s"
                    }
                }), c.jsx("div", {
                    className: "absolute inset-0 border-2 border-transparent bg-gradient-to-r from-cyan-400/50 via-purple-400/50 to-pink-400/50 rounded-3xl",
                    style: {
                        mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        maskComposite: "exclude"
                    }
                }), c.jsxs("div", {
                    className: "relative z-10",
                    children: [c.jsxs("div", {
                        className: "text-center mb-6 sm:mb-8",
                        children: [c.jsxs("div", {
                            className: "flex items-center justify-center mb-4 sm:mb-6",
                            children: [c.jsx("div", {
                                className: "relative",
                                children: c.jsx(ic, {
                                    size: "w-12 h-12 sm:w-16 sm:h-16"
                                })
                            }), c.jsx("h1", {
                                className: "text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse ml-3 sm:ml-4",
                                style: {
                                    textShadow: "0 0 30px rgba(34, 211, 238, 0.5)",
                                    filter: "drop-shadow(0 0 20px rgba(34, 211, 238, 0.3))",
                                    animationDuration: "2s"
                                },
                                children: "QxProfitBot"
                            })]
                        }), c.jsx("p", {
                            className: "text-gray-300 text-base sm:text-lg font-light tracking-wide mb-2",
                            children: c.jsx("span", {
                                className: "text-cyan-400 font-semibold",
                                style: {
                                    filter: "drop-shadow(0 0 10px #22d3ee)"
                                },
                                children: "Secure Access Required"
                            })
                        }), c.jsx("p", {
                            className: "text-purple-300 text-sm tracking-wide",
                            children: "Enter your access key to continue"
                        })]
                    }), c.jsxs("form", {
                        onSubmit: y,
                        className: "space-y-4 sm:space-y-6",
                        children: [c.jsxs("div", {
                            children: [c.jsx("label", {
                                className: "block text-sm font-bold text-cyan-300 mb-3 sm:mb-4 tracking-wider",
                                style: {
                                    filter: "drop-shadow(0 0 5px #22d3ee)"
                                },
                                children: "ACCESS KEY"
                            }), c.jsxs("div", {
                                className: "relative",
                                children: [c.jsx(Vf, {
                                    className: "absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-cyan-400",
                                    style: {
                                        filter: "drop-shadow(0 0 10px #22d3ee)"
                                    }
                                }), c.jsx("input", {
                                    type: "password",
                                    value: t,
                                    onChange: h => n(h.target.value),
                                    placeholder: "Enter access key...",
                                    className: "w-full bg-gray-800/90 border-2 border-gray-700 hover:border-cyan-400 focus:border-cyan-300 rounded-xl pl-10 sm:pl-12 pr-4 sm:pr-6 py-4 sm:py-5 text-white focus:ring-4 focus:ring-cyan-500/30 focus:outline-none transition-all duration-300 backdrop-blur-sm font-semibold text-base sm:text-lg placeholder-gray-500",
                                    style: {
                                        boxShadow: "0 0 30px rgba(34, 211, 238, 0.2), inset 0 0 20px rgba(34, 211, 238, 0.1)"
                                    },
                                    required: !0
                                })]
                            })]
                        }), r && c.jsx("div", {
                            className: "bg-red-500/20 border-2 border-red-500/40 rounded-xl p-3 sm:p-4 text-red-300 text-center font-semibold text-sm sm:text-base",
                            style: {
                                boxShadow: "0 0 20px rgba(239, 68, 68, 0.3)"
                            },
                            children: r
                        }), c.jsxs("button", {
                            type: "submit",
                            disabled: o,
                            className: "w-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-400 hover:via-purple-400 hover:to-pink-400 disabled:from-gray-600 disabled:to-gray-700 text-white font-bold py-4 sm:py-5 px-6 sm:px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center text-lg sm:text-xl relative overflow-hidden group",
                            style: {
                                boxShadow: o ? "0 0 50px rgba(34, 211, 238, 0.8), 0 0 100px rgba(34, 211, 238, 0.4)" : "0 0 40px rgba(34, 211, 238, 0.5), 0 0 80px rgba(168, 85, 247, 0.3), 0 0 120px rgba(236, 72, 153, 0.2)"
                            },
                            children: [c.jsx("div", {
                                className: "absolute inset-0 bg-gradient-to-r from-cyan-400/30 via-purple-400/30 to-pink-400/30 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-300 animate-pulse",
                                style: {
                                    animationDuration: "2s"
                                }
                            }), c.jsx("div", {
                                className: "relative z-10 flex items-center",
                                children: o ? c.jsxs(c.Fragment, {
                                    children: [c.jsx("div", {
                                        className: "animate-spin rounded-full h-5 w-5 sm:h-6 sm:w-6 border-b-3 border-white mr-3 sm:mr-4",
                                        style: {
                                            filter: "drop-shadow(0 0 10px #ffffff)"
                                        }
                                    }), c.jsx("span", {
                                        className: "tracking-wider",
                                        children: "AUTHENTICATING..."
                                    })]
                                }) : c.jsxs(c.Fragment, {
                                    children: [c.jsx(Kf, {
                                        className: "w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 animate-pulse",
                                        style: {
                                            filter: "drop-shadow(0 0 10px #ffffff)",
                                            animationDuration: "2s"
                                        }
                                    }), c.jsx("span", {
                                        className: "tracking-wider",
                                        children: "LOGIN"
                                    })]
                                })
                            })]
                        })]
                    }), c.jsxs("div", {
                        className: "mt-6 sm:mt-8 text-center",
                        children: [c.jsx("p", {
                            className: "text-gray-400 text-sm",
                            children: "Protected by advanced encryption"
                        }), c.jsxs("div", {
                            className: "flex items-center justify-center mt-3 space-x-2",
                            children: [c.jsx("div", {
                                className: "w-2 h-2 bg-green-400 rounded-full animate-pulse",
                                style: {
                                    boxShadow: "0 0 10px #4ade80",
                                    animationDuration: "2s"
                                }
                            }), c.jsx("span", {
                                className: "text-green-400 text-sm font-semibold",
                                style: {
                                    filter: "drop-shadow(0 0 5px #4ade80)"
                                },
                                children: "Secure Connection"
                            })]
                        }), c.jsx("div", {
                            className: "mt-4 sm:mt-6",
                            children: c.jsxs("a", {
                                href: "https://t.me/SokAlike007trading",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-blue-500/20 border-2 border-blue-500/40 rounded-xl backdrop-blur-sm text-blue-300 font-bold hover:text-blue-200 hover:border-blue-400/60 transition-all duration-300 group text-sm sm:text-base",
                                style: {
                                    boxShadow: "0 0 20px rgba(59, 130, 246, 0.3), inset 0 0 15px rgba(59, 130, 246, 0.1)"
                                },
                                children: [c.jsx(Qf, {
                                    className: "w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 group-hover:scale-110 transition-transform duration-300",
                                    style: {
                                        filter: "drop-shadow(0 0 5px #3b82f6)"
                                    }
                                }), c.jsx("span", {
                                    children: "Join Telegram"
                                })]
                            })
                        })]
                    })]
                })]
            })
        })]
    })
}

function bf() {
    const [e, t] = U.useState("NZD/CAD (OTC)"), [n, r] = U.useState("5 minutes"), [l, o] = U.useState("Quotex"), [i, s] = U.useState([]), [u, d] = U.useState(!1), [g, y] = U.useState([]), [h, x] = U.useState([]), [w, k] = U.useState(null), [P, f] = U.useState(0);
    U.useEffect(() => {
        const m = setInterval(() => {
            y(N => {
                const C = [...N.filter(S => S.y > -15 && S.opacity > .05)];
                return Math.random() > .65 && C.length < 20 && C.push({
                    id: `candle-${Date.now()}-${Math.random()}`,
                    x: Math.random() * 100,
                    y: 105,
                    direction: Math.random() > .5 ? "UP" : "DOWN",
                    opacity: 1
                }), C.map(S => ({ ...S,
                    y: S.y - (Math.random() * 1 + 1.2),
                    opacity: S.opacity - .008
                }))
            })
        }, 70);
        return () => clearInterval(m)
    }, []), U.useEffect(() => {
        const m = setInterval(() => {
            x(N => {
                const C = [...N.filter(S => S.y > -10 && S.opacity > .05)];
                if (Math.random() > .7 && C.length < 25) {
                    const S = ["#22d3ee", "#a855f7", "#ec4899", "#10b981", "#f59e0b", "#8b5cf6"];
                    C.push({
                        id: `particle-${Date.now()}-${Math.random()}`,
                        x: Math.random() * 100,
                        y: 105,
                        size: Math.random() * 4 + 2,
                        color: S[Math.floor(Math.random() * S.length)],
                        speed: Math.random() * 2 + 1.5,
                        opacity: 1
                    })
                }
                return C.map(S => ({ ...S,
                    y: S.y - S.speed,
                    opacity: S.opacity - .006
                }))
            })
        }, 60);
        return () => clearInterval(m)
    }, []);
    const a = (m, N) => new Promise(_ => {
            const C = { ...m,
                progress: 0
            };
            k(C);
            const S = setInterval(() => {
                k(R => {
                    if (!R) return null;
                    const T = R.progress + 100 / (m.duration / 50);
                    return T >= 100 ? (clearInterval(S), setTimeout(() => {
                        f((N + 1) / Kl.length * 100), _()
                    }, 100), { ...R,
                        progress: 100
                    }) : { ...R,
                        progress: T
                    }
                })
            }, 50)
        }),
        p = async () => {
            d(!0), f(0), k(null);
            for (let S = 0; S < Kl.length; S++) await a(Kl[S], S);
            k({
                id: "final",
                text: "Finalizing trading signal...",
                icon: c.jsx(rc, {
                    className: "w-5 h-5"
                }),
                duration: 500,
                progress: 100
            }), await new Promise(S => setTimeout(S, 800));
            const m = Math.random() > .5 ? "UP" : "DOWN",
                N = Math.floor(Math.random() * 30) + 70,
                _ = new Date,
                C = {
                    id: `signal-${Date.now()}`,
                    asset: e,
                    direction: m,
                    confidence: N,
                    timeframe: n,
                    timestamp: _.toLocaleTimeString()
                };
            s([C]), d(!1), k(null), f(0)
        };
    return c.jsxs("div", {
        className: "min-h-screen bg-black relative overflow-hidden",
        children: [c.jsxs("div", {
            className: "absolute inset-0",
            children: [c.jsx("div", {
                className: "absolute inset-0 opacity-30",
                children: c.jsx("div", {
                    className: "absolute inset-0",
                    style: {
                        backgroundImage: `
              linear-gradient(rgba(34, 211, 238, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 211, 238, 0.3) 1px, transparent 1px)
            `,
                        backgroundSize: "30px 30px sm:50px sm:50px",
                        filter: "drop-shadow(0 0 10px rgba(34, 211, 238, 0.5))"
                    }
                })
            }), c.jsx("div", {
                className: "absolute inset-0 opacity-20",
                children: c.jsx("div", {
                    className: "absolute inset-0",
                    style: {
                        backgroundImage: `
              linear-gradient(rgba(168, 85, 247, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(168, 85, 247, 0.2) 1px, transparent 1px)
            `,
                        backgroundSize: "60px 60px sm:100px sm:100px",
                        filter: "drop-shadow(0 0 15px rgba(168, 85, 247, 0.4))"
                    }
                })
            }), g.map(m => c.jsx("div", {
                className: `absolute w-2 h-6 sm:w-3 sm:h-10 transition-all duration-75 ease-out ${m.direction==="UP"?"bg-green-400":"bg-red-400"}`,
                style: {
                    left: `${m.x}%`,
                    top: `${m.y}%`,
                    opacity: m.opacity,
                    boxShadow: m.direction === "UP" ? "0 0 15px #4ade80, 0 0 30px #4ade80" : "0 0 15px #f87171, 0 0 30px #f87171",
                    willChange: "transform, opacity"
                }
            }, m.id)), h.map(m => c.jsx("div", {
                className: "absolute rounded-full transition-all duration-75 ease-out",
                style: {
                    left: `${m.x}%`,
                    top: `${m.y}%`,
                    width: `${Math.max(m.size*.7,2)}px`,
                    height: `${Math.max(m.size*.7,2)}px`,
                    backgroundColor: m.color,
                    opacity: m.opacity,
                    boxShadow: `0 0 ${m.size*2}px ${m.color}`,
                    willChange: "transform, opacity"
                }
            }, m.id)), c.jsx("div", {
                className: "absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse",
                style: {
                    boxShadow: "0 0 100px rgba(34, 211, 238, 0.3), 0 0 200px rgba(34, 211, 238, 0.1)",
                    animationDuration: "3s"
                }
            }), c.jsx("div", {
                className: "absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse",
                style: {
                    animationDelay: "1s",
                    animationDuration: "3s",
                    boxShadow: "0 0 100px rgba(168, 85, 247, 0.3), 0 0 200px rgba(168, 85, 247, 0.1)"
                }
            }), c.jsx("div", {
                className: "absolute top-1/2 left-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse",
                style: {
                    animationDelay: "2s",
                    animationDuration: "3s",
                    boxShadow: "0 0 100px rgba(16, 185, 129, 0.3), 0 0 200px rgba(16, 185, 129, 0.1)"
                }
            }), c.jsx("div", {
                className: "absolute top-3/4 left-1/3 w-64 h-64 sm:w-96 sm:h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse",
                style: {
                    animationDelay: "3s",
                    animationDuration: "3s",
                    boxShadow: "0 0 100px rgba(236, 72, 153, 0.3), 0 0 200px rgba(236, 72, 153, 0.1)"
                }
            })]
        }), c.jsxs("div", {
            className: "relative z-10 container mx-auto px-4 py-6 sm:py-8",
            children: [c.jsxs("div", {
                className: "text-center mb-6 sm:mb-8",
                children: [c.jsxs("div", {
                    className: "flex items-center justify-center mb-4 sm:mb-6",
                    children: [c.jsx("div", {
                        className: "relative",
                        children: c.jsx(ic, {
                            size: "w-12 h-12 sm:w-16 sm:h-16"
                        })
                    }), c.jsx("h1", {
                        className: "text-4xl sm:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse ml-3 sm:ml-4",
                        style: {
                            textShadow: "0 0 30px rgba(34, 211, 238, 0.5)",
                            filter: "drop-shadow(0 0 20px rgba(34, 211, 238, 0.3))",
                            animationDuration: "2s"
                        },
                        children: "QxProfitBot"
                    })]
                }), c.jsxs("p", {
                    className: "text-gray-300 text-lg sm:text-2xl font-light tracking-wide mb-3 sm:mb-4",
                    children: [c.jsx("span", {
                        className: "text-cyan-400 font-semibold",
                        style: {
                            filter: "drop-shadow(0 0 10px #22d3ee)"
                        },
                        children: "Advanced AI-Powered"
                    }), " ", "Trading Signals Generator"]
                }), c.jsx("p", {
                    className: "text-purple-300 text-base sm:text-lg tracking-wide",
                    children: "With Powerful Indicators and Strategies"
                }), c.jsx("div", {
                    className: "w-32 sm:w-40 h-1.5 sm:h-2 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mx-auto mt-4 sm:mt-6 rounded-full animate-pulse",
                    style: {
                        boxShadow: "0 0 20px rgba(34, 211, 238, 0.5), 0 0 40px rgba(168, 85, 247, 0.3)",
                        animationDuration: "2s"
                    }
                })]
            }), c.jsxs("div", {
                className: "max-w-6xl mx-auto",
                children: [c.jsxs("div", {
                    className: "bg-gray-900/90 backdrop-blur-xl rounded-3xl p-4 sm:p-8 mb-6 sm:mb-8 border-2 border-cyan-500/40 relative overflow-hidden shadow-2xl",
                    children: [c.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-pink-500/30 rounded-3xl blur-xl animate-pulse",
                        style: {
                            animationDuration: "2s"
                        }
                    }), c.jsx("div", {
                        className: "absolute inset-0 border-2 border-transparent bg-gradient-to-r from-cyan-400/50 via-purple-400/50 to-pink-400/50 rounded-3xl",
                        style: {
                            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                            maskComposite: "exclude"
                        }
                    }), c.jsxs("div", {
                        className: "relative z-10",
                        children: [c.jsxs("h2", {
                            className: "text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 flex items-center",
                            children: [c.jsx(lc, {
                                className: "w-6 h-6 sm:w-8 sm:h-8 mr-3 sm:mr-4 text-cyan-400 animate-pulse",
                                style: {
                                    filter: "drop-shadow(0 0 15px #22d3ee)",
                                    animationDuration: "2s"
                                }
                            }), c.jsx("span", {
                                className: "bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent",
                                style: {
                                    filter: "drop-shadow(0 0 10px rgba(34, 211, 238, 0.3))"
                                },
                                children: "Signal Configuration"
                            })]
                        }), c.jsxs("div", {
                            className: "grid grid-cols-1 gap-6 sm:gap-8 mb-6 sm:mb-8",
                            children: [c.jsxs("div", {
                                className: "group",
                                children: [c.jsx("label", {
                                    className: "block text-sm font-bold text-green-300 mb-3 sm:mb-4 tracking-wider",
                                    style: {
                                        filter: "drop-shadow(0 0 5px #10b981)"
                                    },
                                    children: "SELECT BROKER"
                                }), c.jsx("select", {
                                    value: l,
                                    onChange: m => o(m.target.value),
                                    className: "w-full bg-gray-800/90 border-2 border-gray-700 hover:border-green-400 focus:border-green-300 rounded-xl px-4 sm:px-6 py-4 sm:py-5 text-white focus:ring-4 focus:ring-green-500/30 focus:outline-none transition-all duration-300 backdrop-blur-sm font-semibold text-base sm:text-lg",
                                    style: {
                                        boxShadow: "0 0 30px rgba(16, 185, 129, 0.2), inset 0 0 20px rgba(16, 185, 129, 0.1)"
                                    },
                                    children: c.jsx("option", {
                                        value: "Quotex",
                                        className: "bg-gray-800",
                                        children: "Quotex"
                                    })
                                })]
                            }), c.jsxs("div", {
                                className: "group",
                                children: [c.jsx("label", {
                                    className: "block text-sm font-bold text-purple-300 mb-3 sm:mb-4 tracking-wider",
                                    style: {
                                        filter: "drop-shadow(0 0 5px #a855f7)"
                                    },
                                    children: "SELECT ASSET"
                                }), c.jsx("select", {
                                    value: e,
                                    onChange: m => t(m.target.value),
                                    className: "w-full bg-gray-800/90 border-2 border-gray-700 hover:border-purple-400 focus:border-purple-300 rounded-xl px-4 sm:px-6 py-4 sm:py-5 text-white focus:ring-4 focus:ring-purple-500/30 focus:outline-none transition-all duration-300 backdrop-blur-sm font-semibold text-base sm:text-lg",
                                    style: {
                                        boxShadow: "0 0 30px rgba(168, 85, 247, 0.2), inset 0 0 20px rgba(168, 85, 247, 0.1)"
                                    },
                                    children: Xf.map(m => c.jsx("option", {
                                        value: m,
                                        className: "bg-gray-800",
                                        children: m
                                    }, m))
                                })]
                            }), c.jsxs("div", {
                                className: "group",
                                children: [c.jsx("label", {
                                    className: "block text-sm font-bold text-pink-300 mb-3 sm:mb-4 tracking-wider",
                                    style: {
                                        filter: "drop-shadow(0 0 5px #ec4899)"
                                    },
                                    children: "SELECT TIMEFRAME"
                                }), c.jsx("select", {
                                    value: n,
                                    onChange: m => r(m.target.value),
                                    className: "w-full bg-gray-800/90 border-2 border-gray-700 hover:border-pink-400 focus:border-pink-300 rounded-xl px-4 sm:px-6 py-4 sm:py-5 text-white focus:ring-4 focus:ring-pink-500/30 focus:outline-none transition-all duration-300 backdrop-blur-sm font-semibold text-base sm:text-lg",
                                    style: {
                                        boxShadow: "0 0 30px rgba(236, 72, 153, 0.2), inset 0 0 20px rgba(236, 72, 153, 0.1)"
                                    },
                                    children: Jf.map(m => c.jsx("option", {
                                        value: m,
                                        className: "bg-gray-800",
                                        children: m
                                    }, m))
                                })]
                            })]
                        }), c.jsxs("button", {
                            onClick: p,
                            disabled: u,
                            className: "w-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-400 hover:via-purple-400 hover:to-pink-400 disabled:from-gray-600 disabled:to-gray-700 text-white font-bold py-6 sm:py-8 px-6 sm:px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center text-lg sm:text-2xl relative overflow-hidden group",
                            style: {
                                boxShadow: u ? "0 0 50px rgba(34, 211, 238, 0.8), 0 0 100px rgba(34, 211, 238, 0.4)" : "0 0 40px rgba(34, 211, 238, 0.5), 0 0 80px rgba(168, 85, 247, 0.3), 0 0 120px rgba(236, 72, 153, 0.2)"
                            },
                            children: [c.jsx("div", {
                                className: "absolute inset-0 bg-gradient-to-r from-cyan-400/30 via-purple-400/30 to-pink-400/30 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-300 animate-pulse",
                                style: {
                                    animationDuration: "2s"
                                }
                            }), c.jsx("div", {
                                className: "relative z-10 flex items-center",
                                children: u ? c.jsxs(c.Fragment, {
                                    children: [c.jsx("div", {
                                        className: "animate-spin rounded-full h-6 w-6 sm:h-8 sm:w-8 border-b-3 border-white mr-4 sm:mr-6",
                                        style: {
                                            filter: "drop-shadow(0 0 10px #ffffff)"
                                        }
                                    }), c.jsx("span", {
                                        className: "tracking-wider",
                                        children: "ANALYZING MARKET..."
                                    })]
                                }) : c.jsxs(c.Fragment, {
                                    children: [c.jsx(oc, {
                                        className: "w-6 h-6 sm:w-8 sm:h-8 mr-3 sm:mr-4 animate-pulse",
                                        style: {
                                            filter: "drop-shadow(0 0 10px #ffffff)",
                                            animationDuration: "2s"
                                        }
                                    }), c.jsx("span", {
                                        className: "tracking-wider",
                                        children: "GENERATE AI SIGNAL"
                                    })]
                                })
                            })]
                        }), u && w && c.jsxs("div", {
                            className: "mt-6 sm:mt-8 bg-gray-800/80 backdrop-blur-xl rounded-2xl p-4 sm:p-8 border-2 border-cyan-500/40 relative overflow-hidden",
                            children: [c.jsx("div", {
                                className: "absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-green-500/20 rounded-2xl blur-2xl animate-pulse",
                                style: {
                                    animationDuration: "2s"
                                }
                            }), c.jsxs("div", {
                                className: "relative z-10",
                                children: [c.jsxs("div", {
                                    className: "flex items-center mb-4 sm:mb-6",
                                    children: [c.jsx("div", {
                                        className: "text-cyan-400 mr-3 sm:mr-4 animate-pulse",
                                        style: {
                                            filter: "drop-shadow(0 0 15px #22d3ee)",
                                            animationDuration: "2s"
                                        },
                                        children: w.icon
                                    }), c.jsx("span", {
                                        className: "text-white font-bold text-base sm:text-xl tracking-wide",
                                        style: {
                                            filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))"
                                        },
                                        children: w.text
                                    })]
                                }), c.jsxs("div", {
                                    className: "mb-4 sm:mb-6",
                                    children: [c.jsxs("div", {
                                        className: "flex justify-between text-sm text-gray-300 mb-2 sm:mb-3",
                                        children: [c.jsx("span", {
                                            className: "font-bold",
                                            children: "Overall Progress"
                                        }), c.jsxs("span", {
                                            className: "font-bold text-cyan-400",
                                            children: [Math.round(P), "%"]
                                        })]
                                    }), c.jsx("div", {
                                        className: "w-full bg-gray-700 rounded-full h-2 sm:h-3 overflow-hidden",
                                        style: {
                                            boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.5)"
                                        },
                                        children: c.jsx("div", {
                                            className: "h-2 sm:h-3 bg-gradient-to-r from-cyan-400 via-purple-400 to-green-400 rounded-full transition-all duration-300 animate-pulse",
                                            style: {
                                                width: `${P}%`,
                                                boxShadow: "0 0 20px rgba(34, 211, 238, 0.8), 0 0 40px rgba(34, 211, 238, 0.4)",
                                                animationDuration: "2s"
                                            }
                                        })
                                    })]
                                }), c.jsxs("div", {
                                    children: [c.jsxs("div", {
                                        className: "flex justify-between text-sm text-gray-300 mb-2 sm:mb-3",
                                        children: [c.jsx("span", {
                                            className: "font-bold",
                                            children: "Current Step"
                                        }), c.jsxs("span", {
                                            className: "font-bold text-green-400",
                                            children: [Math.round(w.progress), "%"]
                                        })]
                                    }), c.jsx("div", {
                                        className: "w-full bg-gray-700 rounded-full h-2 sm:h-3 overflow-hidden",
                                        style: {
                                            boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.5)"
                                        },
                                        children: c.jsx("div", {
                                            className: "h-2 sm:h-3 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full transition-all duration-100 animate-pulse",
                                            style: {
                                                width: `${w.progress}%`,
                                                boxShadow: "0 0 20px rgba(74, 222, 128, 0.8), 0 0 40px rgba(74, 222, 128, 0.4)",
                                                animationDuration: "2s"
                                            }
                                        })
                                    })]
                                }), c.jsxs("div", {
                                    className: "flex items-center mt-4 sm:mt-6 text-cyan-400",
                                    children: [c.jsx("span", {
                                        className: "text-base sm:text-lg font-bold mr-2 sm:mr-3",
                                        style: {
                                            filter: "drop-shadow(0 0 5px #22d3ee)"
                                        },
                                        children: "Processing"
                                    }), c.jsxs("div", {
                                        className: "flex space-x-1 sm:space-x-2",
                                        children: [c.jsx("div", {
                                            className: "w-2 h-2 sm:w-3 sm:h-3 bg-cyan-400 rounded-full animate-bounce",
                                            style: {
                                                animationDelay: "0ms",
                                                boxShadow: "0 0 10px #22d3ee",
                                                animationDuration: "1.5s"
                                            }
                                        }), c.jsx("div", {
                                            className: "w-2 h-2 sm:w-3 sm:h-3 bg-purple-400 rounded-full animate-bounce",
                                            style: {
                                                animationDelay: "150ms",
                                                boxShadow: "0 0 10px #a855f7",
                                                animationDuration: "1.5s"
                                            }
                                        }), c.jsx("div", {
                                            className: "w-2 h-2 sm:w-3 sm:h-3 bg-pink-400 rounded-full animate-bounce",
                                            style: {
                                                animationDelay: "300ms",
                                                boxShadow: "0 0 10px #ec4899",
                                                animationDuration: "1.5s"
                                            }
                                        })]
                                    })]
                                })]
                            })]
                        })]
                    })]
                }), i.length > 0 && c.jsxs("div", {
                    className: "bg-gray-900/90 backdrop-blur-xl rounded-3xl p-4 sm:p-8 border-2 border-green-500/40 relative overflow-hidden shadow-2xl",
                    children: [c.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-r from-green-500/30 via-cyan-500/30 to-purple-500/30 rounded-3xl blur-xl animate-pulse",
                        style: {
                            animationDuration: "2s"
                        }
                    }), c.jsxs("div", {
                        className: "relative z-10",
                        children: [c.jsxs("h2", {
                            className: "text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 flex items-center",
                            children: [c.jsx(Ff, {
                                className: "w-6 h-6 sm:w-8 sm:h-8 mr-3 sm:mr-4 text-green-400 animate-pulse",
                                style: {
                                    filter: "drop-shadow(0 0 15px #4ade80)",
                                    animationDuration: "2s"
                                }
                            }), c.jsx("span", {
                                className: "bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent",
                                style: {
                                    filter: "drop-shadow(0 0 10px rgba(74, 222, 128, 0.3))"
                                },
                                children: "Generated Signal"
                            })]
                        }), c.jsx("div", {
                            className: "max-w-2xl mx-auto",
                            children: i.map((m, N) => c.jsxs("div", {
                                className: "bg-gray-800/80 backdrop-blur-sm rounded-3xl p-4 sm:p-8 border-2 border-gray-600/50 hover:border-gray-500 transition-all duration-300 relative overflow-hidden group",
                                style: {
                                    animation: "fadeInUp 0.8s ease-out both",
                                    boxShadow: m.direction === "UP" ? "0 0 40px rgba(74, 222, 128, 0.3), 0 0 80px rgba(74, 222, 128, 0.1)" : "0 0 40px rgba(248, 113, 113, 0.3), 0 0 80px rgba(248, 113, 113, 0.1)"
                                },
                                children: [c.jsx("div", {
                                    className: `absolute inset-0 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${m.direction==="UP"?"bg-green-500/20":"bg-red-500/20"}`
                                }), c.jsxs("div", {
                                    className: "relative z-10",
                                    children: [c.jsxs("div", {
                                        className: "flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8 space-y-4 sm:space-y-0",
                                        children: [c.jsxs("div", {
                                            className: "flex items-center",
                                            children: [c.jsx(Bf, {
                                                className: "w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 mr-3 sm:mr-4",
                                                style: {
                                                    filter: "drop-shadow(0 0 10px #22d3ee)"
                                                }
                                            }), c.jsx("span", {
                                                className: "font-bold text-white text-xl sm:text-3xl tracking-wide",
                                                style: {
                                                    filter: "drop-shadow(0 0 5px rgba(255, 255, 255, 0.5))"
                                                },
                                                children: m.asset
                                            })]
                                        }), c.jsxs("div", {
                                            className: `flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-base sm:text-lg tracking-wider ${m.direction==="UP"?"bg-green-500/30 text-green-300 border-2 border-green-500/50":"bg-red-500/30 text-red-300 border-2 border-red-500/50"}`,
                                            style: {
                                                boxShadow: m.direction === "UP" ? "0 0 30px rgba(74, 222, 128, 0.5), inset 0 0 20px rgba(74, 222, 128, 0.1)" : "0 0 30px rgba(248, 113, 113, 0.5), inset 0 0 20px rgba(248, 113, 113, 0.1)"
                                            },
                                            children: [m.direction === "UP" ? c.jsx(Yf, {
                                                className: "w-5 h-5 sm:w-7 sm:h-7 mr-2 sm:mr-3"
                                            }) : c.jsx(Gf, {
                                                className: "w-5 h-5 sm:w-7 sm:h-7 mr-2 sm:mr-3"
                                            }), c.jsx("span", {
                                                children: m.direction
                                            })]
                                        })]
                                    }), c.jsxs("div", {
                                        className: "space-y-3 sm:space-y-4 text-base sm:text-lg",
                                        children: [c.jsxs("div", {
                                            className: "flex justify-between text-gray-300",
                                            children: [c.jsx("span", {
                                                className: "font-semibold",
                                                children: "Confidence:"
                                            }), c.jsxs("span", {
                                                className: `font-bold text-xl sm:text-2xl ${m.confidence>=85?"text-green-400":m.confidence>=75?"text-yellow-400":"text-orange-400"}`,
                                                style: {
                                                    filter: m.confidence >= 85 ? "drop-shadow(0 0 10px #4ade80)" : m.confidence >= 75 ? "drop-shadow(0 0 10px #fbbf24)" : "drop-shadow(0 0 10px #fb923c)"
                                                },
                                                children: [m.confidence, "%"]
                                            })]
                                        }), c.jsxs("div", {
                                            className: "flex justify-between text-gray-300",
                                            children: [c.jsx("span", {
                                                className: "font-semibold",
                                                children: "Timeframe:"
                                            }), c.jsx("span", {
                                                className: "text-purple-400 font-bold text-lg sm:text-xl",
                                                style: {
                                                    filter: "drop-shadow(0 0 5px #a855f7)"
                                                },
                                                children: m.timeframe
                                            })]
                                        }), c.jsxs("div", {
                                            className: "flex justify-between text-gray-300",
                                            children: [c.jsx("span", {
                                                className: "font-semibold",
                                                children: "Generated:"
                                            }), c.jsx("span", {
                                                className: "text-gray-400 font-semibold",
                                                children: m.timestamp
                                            })]
                                        })]
                                    }), c.jsxs("div", {
                                        className: "mt-6 sm:mt-8",
                                        children: [c.jsxs("div", {
                                            className: "flex justify-between text-sm text-gray-400 mb-2 sm:mb-3",
                                            children: [c.jsx("span", {
                                                className: "font-bold",
                                                children: "Signal Strength"
                                            }), c.jsxs("span", {
                                                className: "font-bold text-base sm:text-lg",
                                                children: [m.confidence, "%"]
                                            })]
                                        }), c.jsx("div", {
                                            className: "w-full bg-gray-700 rounded-full h-3 sm:h-4 overflow-hidden",
                                            style: {
                                                boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.5)"
                                            },
                                            children: c.jsx("div", {
                                                className: `h-3 sm:h-4 rounded-full transition-all duration-2000 ${m.confidence>=85?"bg-gradient-to-r from-green-400 to-green-500":m.confidence>=75?"bg-gradient-to-r from-yellow-400 to-yellow-500":"bg-gradient-to-r from-orange-400 to-orange-500"}`,
                                                style: {
                                                    width: `${m.confidence}%`,
                                                    boxShadow: m.confidence >= 85 ? "0 0 20px rgba(74, 222, 128, 0.8), 0 0 40px rgba(74, 222, 128, 0.4)" : m.confidence >= 75 ? "0 0 20px rgba(251, 191, 36, 0.8), 0 0 40px rgba(251, 191, 36, 0.4)" : "0 0 20px rgba(251, 146, 60, 0.8), 0 0 40px rgba(251, 146, 60, 0.4)"
                                                }
                                            })
                                        })]
                                    })]
                                })]
                            }, m.id))
                        }), c.jsx("div", {
                            className: "mt-6 sm:mt-8 p-4 sm:p-6 bg-cyan-500/20 border-2 border-cyan-500/40 rounded-2xl backdrop-blur-sm",
                            style: {
                                boxShadow: "0 0 30px rgba(34, 211, 238, 0.3), inset 0 0 20px rgba(34, 211, 238, 0.1)"
                            },
                            children: c.jsxs("p", {
                                className: "text-cyan-300 text-base sm:text-lg text-center font-semibold",
                                children: [c.jsx("span", {
                                    className: "text-cyan-400 text-lg sm:text-xl mr-2",
                                    style: {
                                        filter: "drop-shadow(0 0 5px #22d3ee)"
                                    },
                                    children: "💡 Tip:"
                                }), 'Click on "Generate AI Signal\\" to generate another signal']
                            })
                        })]
                    })]
                })]
            })]
        }), c.jsx("style", {
            jsx: !0,
            children: `
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `
        })]
    })
}

function e0() {
    const [e, t] = U.useState(!1), n = () => {
        t(!0)
    };
    return c.jsx(c.Fragment, {
        children: e ? c.jsx(bf, {}) : c.jsx(qf, {
            onAccessGranted: n
        })
    })
}
nc(document.getElementById("root")).render(c.jsx(U.StrictMode, {
    children: c.jsx(e0, {})
}));
