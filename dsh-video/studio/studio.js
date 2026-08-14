(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react.production.min.js
  var require_react_production_min = __commonJS({
    "node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react.production.min.js"(exports) {
      "use strict";
      var l = /* @__PURE__ */ Symbol.for("react.element");
      var n = /* @__PURE__ */ Symbol.for("react.portal");
      var p = /* @__PURE__ */ Symbol.for("react.fragment");
      var q = /* @__PURE__ */ Symbol.for("react.strict_mode");
      var r = /* @__PURE__ */ Symbol.for("react.profiler");
      var t = /* @__PURE__ */ Symbol.for("react.provider");
      var u = /* @__PURE__ */ Symbol.for("react.context");
      var v = /* @__PURE__ */ Symbol.for("react.forward_ref");
      var w = /* @__PURE__ */ Symbol.for("react.suspense");
      var x = /* @__PURE__ */ Symbol.for("react.memo");
      var y = /* @__PURE__ */ Symbol.for("react.lazy");
      var z = Symbol.iterator;
      function A(a3) {
        if (null === a3 || "object" !== typeof a3) return null;
        a3 = z && a3[z] || a3["@@iterator"];
        return "function" === typeof a3 ? a3 : null;
      }
      var B = { isMounted: function() {
        return false;
      }, enqueueForceUpdate: function() {
      }, enqueueReplaceState: function() {
      }, enqueueSetState: function() {
      } };
      var C = Object.assign;
      var D = {};
      function E(a3, b3, e) {
        this.props = a3;
        this.context = b3;
        this.refs = D;
        this.updater = e || B;
      }
      E.prototype.isReactComponent = {};
      E.prototype.setState = function(a3, b3) {
        if ("object" !== typeof a3 && "function" !== typeof a3 && null != a3) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, a3, b3, "setState");
      };
      E.prototype.forceUpdate = function(a3) {
        this.updater.enqueueForceUpdate(this, a3, "forceUpdate");
      };
      function F() {
      }
      F.prototype = E.prototype;
      function G(a3, b3, e) {
        this.props = a3;
        this.context = b3;
        this.refs = D;
        this.updater = e || B;
      }
      var H = G.prototype = new F();
      H.constructor = G;
      C(H, E.prototype);
      H.isPureReactComponent = true;
      var I = Array.isArray;
      var J = Object.prototype.hasOwnProperty;
      var K = { current: null };
      var L = { key: true, ref: true, __self: true, __source: true };
      function M(a3, b3, e) {
        var d, c3 = {}, k = null, h = null;
        if (null != b3) for (d in void 0 !== b3.ref && (h = b3.ref), void 0 !== b3.key && (k = "" + b3.key), b3) J.call(b3, d) && !L.hasOwnProperty(d) && (c3[d] = b3[d]);
        var g = arguments.length - 2;
        if (1 === g) c3.children = e;
        else if (1 < g) {
          for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
          c3.children = f;
        }
        if (a3 && a3.defaultProps) for (d in g = a3.defaultProps, g) void 0 === c3[d] && (c3[d] = g[d]);
        return { $$typeof: l, type: a3, key: k, ref: h, props: c3, _owner: K.current };
      }
      function N(a3, b3) {
        return { $$typeof: l, type: a3.type, key: b3, ref: a3.ref, props: a3.props, _owner: a3._owner };
      }
      function O(a3) {
        return "object" === typeof a3 && null !== a3 && a3.$$typeof === l;
      }
      function escape(a3) {
        var b3 = { "=": "=0", ":": "=2" };
        return "$" + a3.replace(/[=:]/g, function(a4) {
          return b3[a4];
        });
      }
      var P = /\/+/g;
      function Q(a3, b3) {
        return "object" === typeof a3 && null !== a3 && null != a3.key ? escape("" + a3.key) : b3.toString(36);
      }
      function R(a3, b3, e, d, c3) {
        var k = typeof a3;
        if ("undefined" === k || "boolean" === k) a3 = null;
        var h = false;
        if (null === a3) h = true;
        else switch (k) {
          case "string":
          case "number":
            h = true;
            break;
          case "object":
            switch (a3.$$typeof) {
              case l:
              case n:
                h = true;
            }
        }
        if (h) return h = a3, c3 = c3(h), a3 = "" === d ? "." + Q(h, 0) : d, I(c3) ? (e = "", null != a3 && (e = a3.replace(P, "$&/") + "/"), R(c3, b3, e, "", function(a4) {
          return a4;
        })) : null != c3 && (O(c3) && (c3 = N(c3, e + (!c3.key || h && h.key === c3.key ? "" : ("" + c3.key).replace(P, "$&/") + "/") + a3)), b3.push(c3)), 1;
        h = 0;
        d = "" === d ? "." : d + ":";
        if (I(a3)) for (var g = 0; g < a3.length; g++) {
          k = a3[g];
          var f = d + Q(k, g);
          h += R(k, b3, e, f, c3);
        }
        else if (f = A(a3), "function" === typeof f) for (a3 = f.call(a3), g = 0; !(k = a3.next()).done; ) k = k.value, f = d + Q(k, g++), h += R(k, b3, e, f, c3);
        else if ("object" === k) throw b3 = String(a3), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b3 ? "object with keys {" + Object.keys(a3).join(", ") + "}" : b3) + "). If you meant to render a collection of children, use an array instead.");
        return h;
      }
      function S(a3, b3, e) {
        if (null == a3) return a3;
        var d = [], c3 = 0;
        R(a3, d, "", "", function(a4) {
          return b3.call(e, a4, c3++);
        });
        return d;
      }
      function T(a3) {
        if (-1 === a3._status) {
          var b3 = a3._result;
          b3 = b3();
          b3.then(function(b4) {
            if (0 === a3._status || -1 === a3._status) a3._status = 1, a3._result = b4;
          }, function(b4) {
            if (0 === a3._status || -1 === a3._status) a3._status = 2, a3._result = b4;
          });
          -1 === a3._status && (a3._status = 0, a3._result = b3);
        }
        if (1 === a3._status) return a3._result.default;
        throw a3._result;
      }
      var U = { current: null };
      var V = { transition: null };
      var W = { ReactCurrentDispatcher: U, ReactCurrentBatchConfig: V, ReactCurrentOwner: K };
      function X() {
        throw Error("act(...) is not supported in production builds of React.");
      }
      exports.Children = { map: S, forEach: function(a3, b3, e) {
        S(a3, function() {
          b3.apply(this, arguments);
        }, e);
      }, count: function(a3) {
        var b3 = 0;
        S(a3, function() {
          b3++;
        });
        return b3;
      }, toArray: function(a3) {
        return S(a3, function(a4) {
          return a4;
        }) || [];
      }, only: function(a3) {
        if (!O(a3)) throw Error("React.Children.only expected to receive a single React element child.");
        return a3;
      } };
      exports.Component = E;
      exports.Fragment = p;
      exports.Profiler = r;
      exports.PureComponent = G;
      exports.StrictMode = q;
      exports.Suspense = w;
      exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
      exports.act = X;
      exports.cloneElement = function(a3, b3, e) {
        if (null === a3 || void 0 === a3) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a3 + ".");
        var d = C({}, a3.props), c3 = a3.key, k = a3.ref, h = a3._owner;
        if (null != b3) {
          void 0 !== b3.ref && (k = b3.ref, h = K.current);
          void 0 !== b3.key && (c3 = "" + b3.key);
          if (a3.type && a3.type.defaultProps) var g = a3.type.defaultProps;
          for (f in b3) J.call(b3, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b3[f] && void 0 !== g ? g[f] : b3[f]);
        }
        var f = arguments.length - 2;
        if (1 === f) d.children = e;
        else if (1 < f) {
          g = Array(f);
          for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
          d.children = g;
        }
        return { $$typeof: l, type: a3.type, key: c3, ref: k, props: d, _owner: h };
      };
      exports.createContext = function(a3) {
        a3 = { $$typeof: u, _currentValue: a3, _currentValue2: a3, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
        a3.Provider = { $$typeof: t, _context: a3 };
        return a3.Consumer = a3;
      };
      exports.createElement = M;
      exports.createFactory = function(a3) {
        var b3 = M.bind(null, a3);
        b3.type = a3;
        return b3;
      };
      exports.createRef = function() {
        return { current: null };
      };
      exports.forwardRef = function(a3) {
        return { $$typeof: v, render: a3 };
      };
      exports.isValidElement = O;
      exports.lazy = function(a3) {
        return { $$typeof: y, _payload: { _status: -1, _result: a3 }, _init: T };
      };
      exports.memo = function(a3, b3) {
        return { $$typeof: x, type: a3, compare: void 0 === b3 ? null : b3 };
      };
      exports.startTransition = function(a3) {
        var b3 = V.transition;
        V.transition = {};
        try {
          a3();
        } finally {
          V.transition = b3;
        }
      };
      exports.unstable_act = X;
      exports.useCallback = function(a3, b3) {
        return U.current.useCallback(a3, b3);
      };
      exports.useContext = function(a3) {
        return U.current.useContext(a3);
      };
      exports.useDebugValue = function() {
      };
      exports.useDeferredValue = function(a3) {
        return U.current.useDeferredValue(a3);
      };
      exports.useEffect = function(a3, b3) {
        return U.current.useEffect(a3, b3);
      };
      exports.useId = function() {
        return U.current.useId();
      };
      exports.useImperativeHandle = function(a3, b3, e) {
        return U.current.useImperativeHandle(a3, b3, e);
      };
      exports.useInsertionEffect = function(a3, b3) {
        return U.current.useInsertionEffect(a3, b3);
      };
      exports.useLayoutEffect = function(a3, b3) {
        return U.current.useLayoutEffect(a3, b3);
      };
      exports.useMemo = function(a3, b3) {
        return U.current.useMemo(a3, b3);
      };
      exports.useReducer = function(a3, b3, e) {
        return U.current.useReducer(a3, b3, e);
      };
      exports.useRef = function(a3) {
        return U.current.useRef(a3);
      };
      exports.useState = function(a3) {
        return U.current.useState(a3);
      };
      exports.useSyncExternalStore = function(a3, b3, e) {
        return U.current.useSyncExternalStore(a3, b3, e);
      };
      exports.useTransition = function() {
        return U.current.useTransition();
      };
      exports.version = "18.3.1";
    }
  });

  // node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
  var require_react = __commonJS({
    "node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_react_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // node_modules/.pnpm/scheduler@0.23.2/node_modules/scheduler/cjs/scheduler.production.min.js
  var require_scheduler_production_min = __commonJS({
    "node_modules/.pnpm/scheduler@0.23.2/node_modules/scheduler/cjs/scheduler.production.min.js"(exports) {
      "use strict";
      function f(a3, b3) {
        var c3 = a3.length;
        a3.push(b3);
        a: for (; 0 < c3; ) {
          var d = c3 - 1 >>> 1, e = a3[d];
          if (0 < g(e, b3)) a3[d] = b3, a3[c3] = e, c3 = d;
          else break a;
        }
      }
      function h(a3) {
        return 0 === a3.length ? null : a3[0];
      }
      function k(a3) {
        if (0 === a3.length) return null;
        var b3 = a3[0], c3 = a3.pop();
        if (c3 !== b3) {
          a3[0] = c3;
          a: for (var d = 0, e = a3.length, w = e >>> 1; d < w; ) {
            var m = 2 * (d + 1) - 1, C = a3[m], n = m + 1, x = a3[n];
            if (0 > g(C, c3)) n < e && 0 > g(x, C) ? (a3[d] = x, a3[n] = c3, d = n) : (a3[d] = C, a3[m] = c3, d = m);
            else if (n < e && 0 > g(x, c3)) a3[d] = x, a3[n] = c3, d = n;
            else break a;
          }
        }
        return b3;
      }
      function g(a3, b3) {
        var c3 = a3.sortIndex - b3.sortIndex;
        return 0 !== c3 ? c3 : a3.id - b3.id;
      }
      if ("object" === typeof performance && "function" === typeof performance.now) {
        l = performance;
        exports.unstable_now = function() {
          return l.now();
        };
      } else {
        p = Date, q = p.now();
        exports.unstable_now = function() {
          return p.now() - q;
        };
      }
      var l;
      var p;
      var q;
      var r = [];
      var t = [];
      var u = 1;
      var v = null;
      var y = 3;
      var z = false;
      var A = false;
      var B = false;
      var D = "function" === typeof setTimeout ? setTimeout : null;
      var E = "function" === typeof clearTimeout ? clearTimeout : null;
      var F = "undefined" !== typeof setImmediate ? setImmediate : null;
      "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function G(a3) {
        for (var b3 = h(t); null !== b3; ) {
          if (null === b3.callback) k(t);
          else if (b3.startTime <= a3) k(t), b3.sortIndex = b3.expirationTime, f(r, b3);
          else break;
          b3 = h(t);
        }
      }
      function H(a3) {
        B = false;
        G(a3);
        if (!A) if (null !== h(r)) A = true, I(J);
        else {
          var b3 = h(t);
          null !== b3 && K(H, b3.startTime - a3);
        }
      }
      function J(a3, b3) {
        A = false;
        B && (B = false, E(L), L = -1);
        z = true;
        var c3 = y;
        try {
          G(b3);
          for (v = h(r); null !== v && (!(v.expirationTime > b3) || a3 && !M()); ) {
            var d = v.callback;
            if ("function" === typeof d) {
              v.callback = null;
              y = v.priorityLevel;
              var e = d(v.expirationTime <= b3);
              b3 = exports.unstable_now();
              "function" === typeof e ? v.callback = e : v === h(r) && k(r);
              G(b3);
            } else k(r);
            v = h(r);
          }
          if (null !== v) var w = true;
          else {
            var m = h(t);
            null !== m && K(H, m.startTime - b3);
            w = false;
          }
          return w;
        } finally {
          v = null, y = c3, z = false;
        }
      }
      var N = false;
      var O = null;
      var L = -1;
      var P = 5;
      var Q = -1;
      function M() {
        return exports.unstable_now() - Q < P ? false : true;
      }
      function R() {
        if (null !== O) {
          var a3 = exports.unstable_now();
          Q = a3;
          var b3 = true;
          try {
            b3 = O(true, a3);
          } finally {
            b3 ? S() : (N = false, O = null);
          }
        } else N = false;
      }
      var S;
      if ("function" === typeof F) S = function() {
        F(R);
      };
      else if ("undefined" !== typeof MessageChannel) {
        T = new MessageChannel(), U = T.port2;
        T.port1.onmessage = R;
        S = function() {
          U.postMessage(null);
        };
      } else S = function() {
        D(R, 0);
      };
      var T;
      var U;
      function I(a3) {
        O = a3;
        N || (N = true, S());
      }
      function K(a3, b3) {
        L = D(function() {
          a3(exports.unstable_now());
        }, b3);
      }
      exports.unstable_IdlePriority = 5;
      exports.unstable_ImmediatePriority = 1;
      exports.unstable_LowPriority = 4;
      exports.unstable_NormalPriority = 3;
      exports.unstable_Profiling = null;
      exports.unstable_UserBlockingPriority = 2;
      exports.unstable_cancelCallback = function(a3) {
        a3.callback = null;
      };
      exports.unstable_continueExecution = function() {
        A || z || (A = true, I(J));
      };
      exports.unstable_forceFrameRate = function(a3) {
        0 > a3 || 125 < a3 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < a3 ? Math.floor(1e3 / a3) : 5;
      };
      exports.unstable_getCurrentPriorityLevel = function() {
        return y;
      };
      exports.unstable_getFirstCallbackNode = function() {
        return h(r);
      };
      exports.unstable_next = function(a3) {
        switch (y) {
          case 1:
          case 2:
          case 3:
            var b3 = 3;
            break;
          default:
            b3 = y;
        }
        var c3 = y;
        y = b3;
        try {
          return a3();
        } finally {
          y = c3;
        }
      };
      exports.unstable_pauseExecution = function() {
      };
      exports.unstable_requestPaint = function() {
      };
      exports.unstable_runWithPriority = function(a3, b3) {
        switch (a3) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            a3 = 3;
        }
        var c3 = y;
        y = a3;
        try {
          return b3();
        } finally {
          y = c3;
        }
      };
      exports.unstable_scheduleCallback = function(a3, b3, c3) {
        var d = exports.unstable_now();
        "object" === typeof c3 && null !== c3 ? (c3 = c3.delay, c3 = "number" === typeof c3 && 0 < c3 ? d + c3 : d) : c3 = d;
        switch (a3) {
          case 1:
            var e = -1;
            break;
          case 2:
            e = 250;
            break;
          case 5:
            e = 1073741823;
            break;
          case 4:
            e = 1e4;
            break;
          default:
            e = 5e3;
        }
        e = c3 + e;
        a3 = { id: u++, callback: b3, priorityLevel: a3, startTime: c3, expirationTime: e, sortIndex: -1 };
        c3 > d ? (a3.sortIndex = c3, f(t, a3), null === h(r) && a3 === h(t) && (B ? (E(L), L = -1) : B = true, K(H, c3 - d))) : (a3.sortIndex = e, f(r, a3), A || z || (A = true, I(J)));
        return a3;
      };
      exports.unstable_shouldYield = M;
      exports.unstable_wrapCallback = function(a3) {
        var b3 = y;
        return function() {
          var c3 = y;
          y = b3;
          try {
            return a3.apply(this, arguments);
          } finally {
            y = c3;
          }
        };
      };
    }
  });

  // node_modules/.pnpm/scheduler@0.23.2/node_modules/scheduler/index.js
  var require_scheduler = __commonJS({
    "node_modules/.pnpm/scheduler@0.23.2/node_modules/scheduler/index.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_scheduler_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/cjs/react-dom.production.min.js
  var require_react_dom_production_min = __commonJS({
    "node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/cjs/react-dom.production.min.js"(exports) {
      "use strict";
      var aa = require_react();
      var ca = require_scheduler();
      function p(a3) {
        for (var b3 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a3, c3 = 1; c3 < arguments.length; c3++) b3 += "&args[]=" + encodeURIComponent(arguments[c3]);
        return "Minified React error #" + a3 + "; visit " + b3 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }
      var da = /* @__PURE__ */ new Set();
      var ea = {};
      function fa(a3, b3) {
        ha(a3, b3);
        ha(a3 + "Capture", b3);
      }
      function ha(a3, b3) {
        ea[a3] = b3;
        for (a3 = 0; a3 < b3.length; a3++) da.add(b3[a3]);
      }
      var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement);
      var ja = Object.prototype.hasOwnProperty;
      var ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
      var la = {};
      var ma = {};
      function oa(a3) {
        if (ja.call(ma, a3)) return true;
        if (ja.call(la, a3)) return false;
        if (ka.test(a3)) return ma[a3] = true;
        la[a3] = true;
        return false;
      }
      function pa(a3, b3, c3, d) {
        if (null !== c3 && 0 === c3.type) return false;
        switch (typeof b3) {
          case "function":
          case "symbol":
            return true;
          case "boolean":
            if (d) return false;
            if (null !== c3) return !c3.acceptsBooleans;
            a3 = a3.toLowerCase().slice(0, 5);
            return "data-" !== a3 && "aria-" !== a3;
          default:
            return false;
        }
      }
      function qa(a3, b3, c3, d) {
        if (null === b3 || "undefined" === typeof b3 || pa(a3, b3, c3, d)) return true;
        if (d) return false;
        if (null !== c3) switch (c3.type) {
          case 3:
            return !b3;
          case 4:
            return false === b3;
          case 5:
            return isNaN(b3);
          case 6:
            return isNaN(b3) || 1 > b3;
        }
        return false;
      }
      function v(a3, b3, c3, d, e, f, g) {
        this.acceptsBooleans = 2 === b3 || 3 === b3 || 4 === b3;
        this.attributeName = d;
        this.attributeNamespace = e;
        this.mustUseProperty = c3;
        this.propertyName = a3;
        this.type = b3;
        this.sanitizeURL = f;
        this.removeEmptyString = g;
      }
      var z = {};
      "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a3) {
        z[a3] = new v(a3, 0, false, a3, null, false, false);
      });
      [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a3) {
        var b3 = a3[0];
        z[b3] = new v(b3, 1, false, a3[1], null, false, false);
      });
      ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a3) {
        z[a3] = new v(a3, 2, false, a3.toLowerCase(), null, false, false);
      });
      ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a3) {
        z[a3] = new v(a3, 2, false, a3, null, false, false);
      });
      "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a3) {
        z[a3] = new v(a3, 3, false, a3.toLowerCase(), null, false, false);
      });
      ["checked", "multiple", "muted", "selected"].forEach(function(a3) {
        z[a3] = new v(a3, 3, true, a3, null, false, false);
      });
      ["capture", "download"].forEach(function(a3) {
        z[a3] = new v(a3, 4, false, a3, null, false, false);
      });
      ["cols", "rows", "size", "span"].forEach(function(a3) {
        z[a3] = new v(a3, 6, false, a3, null, false, false);
      });
      ["rowSpan", "start"].forEach(function(a3) {
        z[a3] = new v(a3, 5, false, a3.toLowerCase(), null, false, false);
      });
      var ra = /[\-:]([a-z])/g;
      function sa(a3) {
        return a3[1].toUpperCase();
      }
      "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a3) {
        var b3 = a3.replace(
          ra,
          sa
        );
        z[b3] = new v(b3, 1, false, a3, null, false, false);
      });
      "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a3) {
        var b3 = a3.replace(ra, sa);
        z[b3] = new v(b3, 1, false, a3, "http://www.w3.org/1999/xlink", false, false);
      });
      ["xml:base", "xml:lang", "xml:space"].forEach(function(a3) {
        var b3 = a3.replace(ra, sa);
        z[b3] = new v(b3, 1, false, a3, "http://www.w3.org/XML/1998/namespace", false, false);
      });
      ["tabIndex", "crossOrigin"].forEach(function(a3) {
        z[a3] = new v(a3, 1, false, a3.toLowerCase(), null, false, false);
      });
      z.xlinkHref = new v("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
      ["src", "href", "action", "formAction"].forEach(function(a3) {
        z[a3] = new v(a3, 1, false, a3.toLowerCase(), null, true, true);
      });
      function ta(a3, b3, c3, d) {
        var e = z.hasOwnProperty(b3) ? z[b3] : null;
        if (null !== e ? 0 !== e.type : d || !(2 < b3.length) || "o" !== b3[0] && "O" !== b3[0] || "n" !== b3[1] && "N" !== b3[1]) qa(b3, c3, e, d) && (c3 = null), d || null === e ? oa(b3) && (null === c3 ? a3.removeAttribute(b3) : a3.setAttribute(b3, "" + c3)) : e.mustUseProperty ? a3[e.propertyName] = null === c3 ? 3 === e.type ? false : "" : c3 : (b3 = e.attributeName, d = e.attributeNamespace, null === c3 ? a3.removeAttribute(b3) : (e = e.type, c3 = 3 === e || 4 === e && true === c3 ? "" : "" + c3, d ? a3.setAttributeNS(d, b3, c3) : a3.setAttribute(b3, c3)));
      }
      var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      var va = /* @__PURE__ */ Symbol.for("react.element");
      var wa = /* @__PURE__ */ Symbol.for("react.portal");
      var ya = /* @__PURE__ */ Symbol.for("react.fragment");
      var za = /* @__PURE__ */ Symbol.for("react.strict_mode");
      var Aa = /* @__PURE__ */ Symbol.for("react.profiler");
      var Ba = /* @__PURE__ */ Symbol.for("react.provider");
      var Ca = /* @__PURE__ */ Symbol.for("react.context");
      var Da = /* @__PURE__ */ Symbol.for("react.forward_ref");
      var Ea = /* @__PURE__ */ Symbol.for("react.suspense");
      var Fa = /* @__PURE__ */ Symbol.for("react.suspense_list");
      var Ga = /* @__PURE__ */ Symbol.for("react.memo");
      var Ha = /* @__PURE__ */ Symbol.for("react.lazy");
      var Ia = /* @__PURE__ */ Symbol.for("react.offscreen");
      var Ja = Symbol.iterator;
      function Ka(a3) {
        if (null === a3 || "object" !== typeof a3) return null;
        a3 = Ja && a3[Ja] || a3["@@iterator"];
        return "function" === typeof a3 ? a3 : null;
      }
      var A = Object.assign;
      var La;
      function Ma(a3) {
        if (void 0 === La) try {
          throw Error();
        } catch (c3) {
          var b3 = c3.stack.trim().match(/\n( *(at )?)/);
          La = b3 && b3[1] || "";
        }
        return "\n" + La + a3;
      }
      var Na = false;
      function Oa(a3, b3) {
        if (!a3 || Na) return "";
        Na = true;
        var c3 = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          if (b3) if (b3 = function() {
            throw Error();
          }, Object.defineProperty(b3.prototype, "props", { set: function() {
            throw Error();
          } }), "object" === typeof Reflect && Reflect.construct) {
            try {
              Reflect.construct(b3, []);
            } catch (l) {
              var d = l;
            }
            Reflect.construct(a3, [], b3);
          } else {
            try {
              b3.call();
            } catch (l) {
              d = l;
            }
            a3.call(b3.prototype);
          }
          else {
            try {
              throw Error();
            } catch (l) {
              d = l;
            }
            a3();
          }
        } catch (l) {
          if (l && d && "string" === typeof l.stack) {
            for (var e = l.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h]; ) h--;
            for (; 1 <= g && 0 <= h; g--, h--) if (e[g] !== f[h]) {
              if (1 !== g || 1 !== h) {
                do
                  if (g--, h--, 0 > h || e[g] !== f[h]) {
                    var k = "\n" + e[g].replace(" at new ", " at ");
                    a3.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", a3.displayName));
                    return k;
                  }
                while (1 <= g && 0 <= h);
              }
              break;
            }
          }
        } finally {
          Na = false, Error.prepareStackTrace = c3;
        }
        return (a3 = a3 ? a3.displayName || a3.name : "") ? Ma(a3) : "";
      }
      function Pa(a3) {
        switch (a3.tag) {
          case 5:
            return Ma(a3.type);
          case 16:
            return Ma("Lazy");
          case 13:
            return Ma("Suspense");
          case 19:
            return Ma("SuspenseList");
          case 0:
          case 2:
          case 15:
            return a3 = Oa(a3.type, false), a3;
          case 11:
            return a3 = Oa(a3.type.render, false), a3;
          case 1:
            return a3 = Oa(a3.type, true), a3;
          default:
            return "";
        }
      }
      function Qa(a3) {
        if (null == a3) return null;
        if ("function" === typeof a3) return a3.displayName || a3.name || null;
        if ("string" === typeof a3) return a3;
        switch (a3) {
          case ya:
            return "Fragment";
          case wa:
            return "Portal";
          case Aa:
            return "Profiler";
          case za:
            return "StrictMode";
          case Ea:
            return "Suspense";
          case Fa:
            return "SuspenseList";
        }
        if ("object" === typeof a3) switch (a3.$$typeof) {
          case Ca:
            return (a3.displayName || "Context") + ".Consumer";
          case Ba:
            return (a3._context.displayName || "Context") + ".Provider";
          case Da:
            var b3 = a3.render;
            a3 = a3.displayName;
            a3 || (a3 = b3.displayName || b3.name || "", a3 = "" !== a3 ? "ForwardRef(" + a3 + ")" : "ForwardRef");
            return a3;
          case Ga:
            return b3 = a3.displayName || null, null !== b3 ? b3 : Qa(a3.type) || "Memo";
          case Ha:
            b3 = a3._payload;
            a3 = a3._init;
            try {
              return Qa(a3(b3));
            } catch (c3) {
            }
        }
        return null;
      }
      function Ra(a3) {
        var b3 = a3.type;
        switch (a3.tag) {
          case 24:
            return "Cache";
          case 9:
            return (b3.displayName || "Context") + ".Consumer";
          case 10:
            return (b3._context.displayName || "Context") + ".Provider";
          case 18:
            return "DehydratedFragment";
          case 11:
            return a3 = b3.render, a3 = a3.displayName || a3.name || "", b3.displayName || ("" !== a3 ? "ForwardRef(" + a3 + ")" : "ForwardRef");
          case 7:
            return "Fragment";
          case 5:
            return b3;
          case 4:
            return "Portal";
          case 3:
            return "Root";
          case 6:
            return "Text";
          case 16:
            return Qa(b3);
          case 8:
            return b3 === za ? "StrictMode" : "Mode";
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
            if ("function" === typeof b3) return b3.displayName || b3.name || null;
            if ("string" === typeof b3) return b3;
        }
        return null;
      }
      function Sa(a3) {
        switch (typeof a3) {
          case "boolean":
          case "number":
          case "string":
          case "undefined":
            return a3;
          case "object":
            return a3;
          default:
            return "";
        }
      }
      function Ta(a3) {
        var b3 = a3.type;
        return (a3 = a3.nodeName) && "input" === a3.toLowerCase() && ("checkbox" === b3 || "radio" === b3);
      }
      function Ua(a3) {
        var b3 = Ta(a3) ? "checked" : "value", c3 = Object.getOwnPropertyDescriptor(a3.constructor.prototype, b3), d = "" + a3[b3];
        if (!a3.hasOwnProperty(b3) && "undefined" !== typeof c3 && "function" === typeof c3.get && "function" === typeof c3.set) {
          var e = c3.get, f = c3.set;
          Object.defineProperty(a3, b3, { configurable: true, get: function() {
            return e.call(this);
          }, set: function(a4) {
            d = "" + a4;
            f.call(this, a4);
          } });
          Object.defineProperty(a3, b3, { enumerable: c3.enumerable });
          return { getValue: function() {
            return d;
          }, setValue: function(a4) {
            d = "" + a4;
          }, stopTracking: function() {
            a3._valueTracker = null;
            delete a3[b3];
          } };
        }
      }
      function Va(a3) {
        a3._valueTracker || (a3._valueTracker = Ua(a3));
      }
      function Wa(a3) {
        if (!a3) return false;
        var b3 = a3._valueTracker;
        if (!b3) return true;
        var c3 = b3.getValue();
        var d = "";
        a3 && (d = Ta(a3) ? a3.checked ? "true" : "false" : a3.value);
        a3 = d;
        return a3 !== c3 ? (b3.setValue(a3), true) : false;
      }
      function Xa(a3) {
        a3 = a3 || ("undefined" !== typeof document ? document : void 0);
        if ("undefined" === typeof a3) return null;
        try {
          return a3.activeElement || a3.body;
        } catch (b3) {
          return a3.body;
        }
      }
      function Ya(a3, b3) {
        var c3 = b3.checked;
        return A({}, b3, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c3 ? c3 : a3._wrapperState.initialChecked });
      }
      function Za(a3, b3) {
        var c3 = null == b3.defaultValue ? "" : b3.defaultValue, d = null != b3.checked ? b3.checked : b3.defaultChecked;
        c3 = Sa(null != b3.value ? b3.value : c3);
        a3._wrapperState = { initialChecked: d, initialValue: c3, controlled: "checkbox" === b3.type || "radio" === b3.type ? null != b3.checked : null != b3.value };
      }
      function ab(a3, b3) {
        b3 = b3.checked;
        null != b3 && ta(a3, "checked", b3, false);
      }
      function bb(a3, b3) {
        ab(a3, b3);
        var c3 = Sa(b3.value), d = b3.type;
        if (null != c3) if ("number" === d) {
          if (0 === c3 && "" === a3.value || a3.value != c3) a3.value = "" + c3;
        } else a3.value !== "" + c3 && (a3.value = "" + c3);
        else if ("submit" === d || "reset" === d) {
          a3.removeAttribute("value");
          return;
        }
        b3.hasOwnProperty("value") ? cb(a3, b3.type, c3) : b3.hasOwnProperty("defaultValue") && cb(a3, b3.type, Sa(b3.defaultValue));
        null == b3.checked && null != b3.defaultChecked && (a3.defaultChecked = !!b3.defaultChecked);
      }
      function db(a3, b3, c3) {
        if (b3.hasOwnProperty("value") || b3.hasOwnProperty("defaultValue")) {
          var d = b3.type;
          if (!("submit" !== d && "reset" !== d || void 0 !== b3.value && null !== b3.value)) return;
          b3 = "" + a3._wrapperState.initialValue;
          c3 || b3 === a3.value || (a3.value = b3);
          a3.defaultValue = b3;
        }
        c3 = a3.name;
        "" !== c3 && (a3.name = "");
        a3.defaultChecked = !!a3._wrapperState.initialChecked;
        "" !== c3 && (a3.name = c3);
      }
      function cb(a3, b3, c3) {
        if ("number" !== b3 || Xa(a3.ownerDocument) !== a3) null == c3 ? a3.defaultValue = "" + a3._wrapperState.initialValue : a3.defaultValue !== "" + c3 && (a3.defaultValue = "" + c3);
      }
      var eb = Array.isArray;
      function fb(a3, b3, c3, d) {
        a3 = a3.options;
        if (b3) {
          b3 = {};
          for (var e = 0; e < c3.length; e++) b3["$" + c3[e]] = true;
          for (c3 = 0; c3 < a3.length; c3++) e = b3.hasOwnProperty("$" + a3[c3].value), a3[c3].selected !== e && (a3[c3].selected = e), e && d && (a3[c3].defaultSelected = true);
        } else {
          c3 = "" + Sa(c3);
          b3 = null;
          for (e = 0; e < a3.length; e++) {
            if (a3[e].value === c3) {
              a3[e].selected = true;
              d && (a3[e].defaultSelected = true);
              return;
            }
            null !== b3 || a3[e].disabled || (b3 = a3[e]);
          }
          null !== b3 && (b3.selected = true);
        }
      }
      function gb(a3, b3) {
        if (null != b3.dangerouslySetInnerHTML) throw Error(p(91));
        return A({}, b3, { value: void 0, defaultValue: void 0, children: "" + a3._wrapperState.initialValue });
      }
      function hb(a3, b3) {
        var c3 = b3.value;
        if (null == c3) {
          c3 = b3.children;
          b3 = b3.defaultValue;
          if (null != c3) {
            if (null != b3) throw Error(p(92));
            if (eb(c3)) {
              if (1 < c3.length) throw Error(p(93));
              c3 = c3[0];
            }
            b3 = c3;
          }
          null == b3 && (b3 = "");
          c3 = b3;
        }
        a3._wrapperState = { initialValue: Sa(c3) };
      }
      function ib(a3, b3) {
        var c3 = Sa(b3.value), d = Sa(b3.defaultValue);
        null != c3 && (c3 = "" + c3, c3 !== a3.value && (a3.value = c3), null == b3.defaultValue && a3.defaultValue !== c3 && (a3.defaultValue = c3));
        null != d && (a3.defaultValue = "" + d);
      }
      function jb(a3) {
        var b3 = a3.textContent;
        b3 === a3._wrapperState.initialValue && "" !== b3 && null !== b3 && (a3.value = b3);
      }
      function kb(a3) {
        switch (a3) {
          case "svg":
            return "http://www.w3.org/2000/svg";
          case "math":
            return "http://www.w3.org/1998/Math/MathML";
          default:
            return "http://www.w3.org/1999/xhtml";
        }
      }
      function lb(a3, b3) {
        return null == a3 || "http://www.w3.org/1999/xhtml" === a3 ? kb(b3) : "http://www.w3.org/2000/svg" === a3 && "foreignObject" === b3 ? "http://www.w3.org/1999/xhtml" : a3;
      }
      var mb;
      var nb = (function(a3) {
        return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b3, c3, d, e) {
          MSApp.execUnsafeLocalFunction(function() {
            return a3(b3, c3, d, e);
          });
        } : a3;
      })(function(a3, b3) {
        if ("http://www.w3.org/2000/svg" !== a3.namespaceURI || "innerHTML" in a3) a3.innerHTML = b3;
        else {
          mb = mb || document.createElement("div");
          mb.innerHTML = "<svg>" + b3.valueOf().toString() + "</svg>";
          for (b3 = mb.firstChild; a3.firstChild; ) a3.removeChild(a3.firstChild);
          for (; b3.firstChild; ) a3.appendChild(b3.firstChild);
        }
      });
      function ob(a3, b3) {
        if (b3) {
          var c3 = a3.firstChild;
          if (c3 && c3 === a3.lastChild && 3 === c3.nodeType) {
            c3.nodeValue = b3;
            return;
          }
        }
        a3.textContent = b3;
      }
      var pb = {
        animationIterationCount: true,
        aspectRatio: true,
        borderImageOutset: true,
        borderImageSlice: true,
        borderImageWidth: true,
        boxFlex: true,
        boxFlexGroup: true,
        boxOrdinalGroup: true,
        columnCount: true,
        columns: true,
        flex: true,
        flexGrow: true,
        flexPositive: true,
        flexShrink: true,
        flexNegative: true,
        flexOrder: true,
        gridArea: true,
        gridRow: true,
        gridRowEnd: true,
        gridRowSpan: true,
        gridRowStart: true,
        gridColumn: true,
        gridColumnEnd: true,
        gridColumnSpan: true,
        gridColumnStart: true,
        fontWeight: true,
        lineClamp: true,
        lineHeight: true,
        opacity: true,
        order: true,
        orphans: true,
        tabSize: true,
        widows: true,
        zIndex: true,
        zoom: true,
        fillOpacity: true,
        floodOpacity: true,
        stopOpacity: true,
        strokeDasharray: true,
        strokeDashoffset: true,
        strokeMiterlimit: true,
        strokeOpacity: true,
        strokeWidth: true
      };
      var qb = ["Webkit", "ms", "Moz", "O"];
      Object.keys(pb).forEach(function(a3) {
        qb.forEach(function(b3) {
          b3 = b3 + a3.charAt(0).toUpperCase() + a3.substring(1);
          pb[b3] = pb[a3];
        });
      });
      function rb(a3, b3, c3) {
        return null == b3 || "boolean" === typeof b3 || "" === b3 ? "" : c3 || "number" !== typeof b3 || 0 === b3 || pb.hasOwnProperty(a3) && pb[a3] ? ("" + b3).trim() : b3 + "px";
      }
      function sb(a3, b3) {
        a3 = a3.style;
        for (var c3 in b3) if (b3.hasOwnProperty(c3)) {
          var d = 0 === c3.indexOf("--"), e = rb(c3, b3[c3], d);
          "float" === c3 && (c3 = "cssFloat");
          d ? a3.setProperty(c3, e) : a3[c3] = e;
        }
      }
      var tb = A({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
      function ub(a3, b3) {
        if (b3) {
          if (tb[a3] && (null != b3.children || null != b3.dangerouslySetInnerHTML)) throw Error(p(137, a3));
          if (null != b3.dangerouslySetInnerHTML) {
            if (null != b3.children) throw Error(p(60));
            if ("object" !== typeof b3.dangerouslySetInnerHTML || !("__html" in b3.dangerouslySetInnerHTML)) throw Error(p(61));
          }
          if (null != b3.style && "object" !== typeof b3.style) throw Error(p(62));
        }
      }
      function vb(a3, b3) {
        if (-1 === a3.indexOf("-")) return "string" === typeof b3.is;
        switch (a3) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return false;
          default:
            return true;
        }
      }
      var wb = null;
      function xb(a3) {
        a3 = a3.target || a3.srcElement || window;
        a3.correspondingUseElement && (a3 = a3.correspondingUseElement);
        return 3 === a3.nodeType ? a3.parentNode : a3;
      }
      var yb = null;
      var zb = null;
      var Ab = null;
      function Bb(a3) {
        if (a3 = Cb(a3)) {
          if ("function" !== typeof yb) throw Error(p(280));
          var b3 = a3.stateNode;
          b3 && (b3 = Db(b3), yb(a3.stateNode, a3.type, b3));
        }
      }
      function Eb(a3) {
        zb ? Ab ? Ab.push(a3) : Ab = [a3] : zb = a3;
      }
      function Fb() {
        if (zb) {
          var a3 = zb, b3 = Ab;
          Ab = zb = null;
          Bb(a3);
          if (b3) for (a3 = 0; a3 < b3.length; a3++) Bb(b3[a3]);
        }
      }
      function Gb(a3, b3) {
        return a3(b3);
      }
      function Hb() {
      }
      var Ib = false;
      function Jb(a3, b3, c3) {
        if (Ib) return a3(b3, c3);
        Ib = true;
        try {
          return Gb(a3, b3, c3);
        } finally {
          if (Ib = false, null !== zb || null !== Ab) Hb(), Fb();
        }
      }
      function Kb(a3, b3) {
        var c3 = a3.stateNode;
        if (null === c3) return null;
        var d = Db(c3);
        if (null === d) return null;
        c3 = d[b3];
        a: switch (b3) {
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
            (d = !d.disabled) || (a3 = a3.type, d = !("button" === a3 || "input" === a3 || "select" === a3 || "textarea" === a3));
            a3 = !d;
            break a;
          default:
            a3 = false;
        }
        if (a3) return null;
        if (c3 && "function" !== typeof c3) throw Error(p(231, b3, typeof c3));
        return c3;
      }
      var Lb = false;
      if (ia) try {
        Mb = {};
        Object.defineProperty(Mb, "passive", { get: function() {
          Lb = true;
        } });
        window.addEventListener("test", Mb, Mb);
        window.removeEventListener("test", Mb, Mb);
      } catch (a3) {
        Lb = false;
      }
      var Mb;
      function Nb(a3, b3, c3, d, e, f, g, h, k) {
        var l = Array.prototype.slice.call(arguments, 3);
        try {
          b3.apply(c3, l);
        } catch (m) {
          this.onError(m);
        }
      }
      var Ob = false;
      var Pb = null;
      var Qb = false;
      var Rb = null;
      var Sb = { onError: function(a3) {
        Ob = true;
        Pb = a3;
      } };
      function Tb(a3, b3, c3, d, e, f, g, h, k) {
        Ob = false;
        Pb = null;
        Nb.apply(Sb, arguments);
      }
      function Ub(a3, b3, c3, d, e, f, g, h, k) {
        Tb.apply(this, arguments);
        if (Ob) {
          if (Ob) {
            var l = Pb;
            Ob = false;
            Pb = null;
          } else throw Error(p(198));
          Qb || (Qb = true, Rb = l);
        }
      }
      function Vb(a3) {
        var b3 = a3, c3 = a3;
        if (a3.alternate) for (; b3.return; ) b3 = b3.return;
        else {
          a3 = b3;
          do
            b3 = a3, 0 !== (b3.flags & 4098) && (c3 = b3.return), a3 = b3.return;
          while (a3);
        }
        return 3 === b3.tag ? c3 : null;
      }
      function Wb(a3) {
        if (13 === a3.tag) {
          var b3 = a3.memoizedState;
          null === b3 && (a3 = a3.alternate, null !== a3 && (b3 = a3.memoizedState));
          if (null !== b3) return b3.dehydrated;
        }
        return null;
      }
      function Xb(a3) {
        if (Vb(a3) !== a3) throw Error(p(188));
      }
      function Yb(a3) {
        var b3 = a3.alternate;
        if (!b3) {
          b3 = Vb(a3);
          if (null === b3) throw Error(p(188));
          return b3 !== a3 ? null : a3;
        }
        for (var c3 = a3, d = b3; ; ) {
          var e = c3.return;
          if (null === e) break;
          var f = e.alternate;
          if (null === f) {
            d = e.return;
            if (null !== d) {
              c3 = d;
              continue;
            }
            break;
          }
          if (e.child === f.child) {
            for (f = e.child; f; ) {
              if (f === c3) return Xb(e), a3;
              if (f === d) return Xb(e), b3;
              f = f.sibling;
            }
            throw Error(p(188));
          }
          if (c3.return !== d.return) c3 = e, d = f;
          else {
            for (var g = false, h = e.child; h; ) {
              if (h === c3) {
                g = true;
                c3 = e;
                d = f;
                break;
              }
              if (h === d) {
                g = true;
                d = e;
                c3 = f;
                break;
              }
              h = h.sibling;
            }
            if (!g) {
              for (h = f.child; h; ) {
                if (h === c3) {
                  g = true;
                  c3 = f;
                  d = e;
                  break;
                }
                if (h === d) {
                  g = true;
                  d = f;
                  c3 = e;
                  break;
                }
                h = h.sibling;
              }
              if (!g) throw Error(p(189));
            }
          }
          if (c3.alternate !== d) throw Error(p(190));
        }
        if (3 !== c3.tag) throw Error(p(188));
        return c3.stateNode.current === c3 ? a3 : b3;
      }
      function Zb(a3) {
        a3 = Yb(a3);
        return null !== a3 ? $b(a3) : null;
      }
      function $b(a3) {
        if (5 === a3.tag || 6 === a3.tag) return a3;
        for (a3 = a3.child; null !== a3; ) {
          var b3 = $b(a3);
          if (null !== b3) return b3;
          a3 = a3.sibling;
        }
        return null;
      }
      var ac = ca.unstable_scheduleCallback;
      var bc = ca.unstable_cancelCallback;
      var cc = ca.unstable_shouldYield;
      var dc = ca.unstable_requestPaint;
      var B = ca.unstable_now;
      var ec = ca.unstable_getCurrentPriorityLevel;
      var fc = ca.unstable_ImmediatePriority;
      var gc = ca.unstable_UserBlockingPriority;
      var hc = ca.unstable_NormalPriority;
      var ic = ca.unstable_LowPriority;
      var jc = ca.unstable_IdlePriority;
      var kc = null;
      var lc = null;
      function mc(a3) {
        if (lc && "function" === typeof lc.onCommitFiberRoot) try {
          lc.onCommitFiberRoot(kc, a3, void 0, 128 === (a3.current.flags & 128));
        } catch (b3) {
        }
      }
      var oc = Math.clz32 ? Math.clz32 : nc;
      var pc = Math.log;
      var qc = Math.LN2;
      function nc(a3) {
        a3 >>>= 0;
        return 0 === a3 ? 32 : 31 - (pc(a3) / qc | 0) | 0;
      }
      var rc = 64;
      var sc = 4194304;
      function tc(a3) {
        switch (a3 & -a3) {
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
            return a3 & 4194240;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return a3 & 130023424;
          case 134217728:
            return 134217728;
          case 268435456:
            return 268435456;
          case 536870912:
            return 536870912;
          case 1073741824:
            return 1073741824;
          default:
            return a3;
        }
      }
      function uc(a3, b3) {
        var c3 = a3.pendingLanes;
        if (0 === c3) return 0;
        var d = 0, e = a3.suspendedLanes, f = a3.pingedLanes, g = c3 & 268435455;
        if (0 !== g) {
          var h = g & ~e;
          0 !== h ? d = tc(h) : (f &= g, 0 !== f && (d = tc(f)));
        } else g = c3 & ~e, 0 !== g ? d = tc(g) : 0 !== f && (d = tc(f));
        if (0 === d) return 0;
        if (0 !== b3 && b3 !== d && 0 === (b3 & e) && (e = d & -d, f = b3 & -b3, e >= f || 16 === e && 0 !== (f & 4194240))) return b3;
        0 !== (d & 4) && (d |= c3 & 16);
        b3 = a3.entangledLanes;
        if (0 !== b3) for (a3 = a3.entanglements, b3 &= d; 0 < b3; ) c3 = 31 - oc(b3), e = 1 << c3, d |= a3[c3], b3 &= ~e;
        return d;
      }
      function vc(a3, b3) {
        switch (a3) {
          case 1:
          case 2:
          case 4:
            return b3 + 250;
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
            return b3 + 5e3;
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
            return -1;
        }
      }
      function wc(a3, b3) {
        for (var c3 = a3.suspendedLanes, d = a3.pingedLanes, e = a3.expirationTimes, f = a3.pendingLanes; 0 < f; ) {
          var g = 31 - oc(f), h = 1 << g, k = e[g];
          if (-1 === k) {
            if (0 === (h & c3) || 0 !== (h & d)) e[g] = vc(h, b3);
          } else k <= b3 && (a3.expiredLanes |= h);
          f &= ~h;
        }
      }
      function xc(a3) {
        a3 = a3.pendingLanes & -1073741825;
        return 0 !== a3 ? a3 : a3 & 1073741824 ? 1073741824 : 0;
      }
      function yc() {
        var a3 = rc;
        rc <<= 1;
        0 === (rc & 4194240) && (rc = 64);
        return a3;
      }
      function zc(a3) {
        for (var b3 = [], c3 = 0; 31 > c3; c3++) b3.push(a3);
        return b3;
      }
      function Ac(a3, b3, c3) {
        a3.pendingLanes |= b3;
        536870912 !== b3 && (a3.suspendedLanes = 0, a3.pingedLanes = 0);
        a3 = a3.eventTimes;
        b3 = 31 - oc(b3);
        a3[b3] = c3;
      }
      function Bc(a3, b3) {
        var c3 = a3.pendingLanes & ~b3;
        a3.pendingLanes = b3;
        a3.suspendedLanes = 0;
        a3.pingedLanes = 0;
        a3.expiredLanes &= b3;
        a3.mutableReadLanes &= b3;
        a3.entangledLanes &= b3;
        b3 = a3.entanglements;
        var d = a3.eventTimes;
        for (a3 = a3.expirationTimes; 0 < c3; ) {
          var e = 31 - oc(c3), f = 1 << e;
          b3[e] = 0;
          d[e] = -1;
          a3[e] = -1;
          c3 &= ~f;
        }
      }
      function Cc(a3, b3) {
        var c3 = a3.entangledLanes |= b3;
        for (a3 = a3.entanglements; c3; ) {
          var d = 31 - oc(c3), e = 1 << d;
          e & b3 | a3[d] & b3 && (a3[d] |= b3);
          c3 &= ~e;
        }
      }
      var C = 0;
      function Dc(a3) {
        a3 &= -a3;
        return 1 < a3 ? 4 < a3 ? 0 !== (a3 & 268435455) ? 16 : 536870912 : 4 : 1;
      }
      var Ec;
      var Fc;
      var Gc;
      var Hc;
      var Ic;
      var Jc = false;
      var Kc = [];
      var Lc = null;
      var Mc = null;
      var Nc = null;
      var Oc = /* @__PURE__ */ new Map();
      var Pc = /* @__PURE__ */ new Map();
      var Qc = [];
      var Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
      function Sc(a3, b3) {
        switch (a3) {
          case "focusin":
          case "focusout":
            Lc = null;
            break;
          case "dragenter":
          case "dragleave":
            Mc = null;
            break;
          case "mouseover":
          case "mouseout":
            Nc = null;
            break;
          case "pointerover":
          case "pointerout":
            Oc.delete(b3.pointerId);
            break;
          case "gotpointercapture":
          case "lostpointercapture":
            Pc.delete(b3.pointerId);
        }
      }
      function Tc(a3, b3, c3, d, e, f) {
        if (null === a3 || a3.nativeEvent !== f) return a3 = { blockedOn: b3, domEventName: c3, eventSystemFlags: d, nativeEvent: f, targetContainers: [e] }, null !== b3 && (b3 = Cb(b3), null !== b3 && Fc(b3)), a3;
        a3.eventSystemFlags |= d;
        b3 = a3.targetContainers;
        null !== e && -1 === b3.indexOf(e) && b3.push(e);
        return a3;
      }
      function Uc(a3, b3, c3, d, e) {
        switch (b3) {
          case "focusin":
            return Lc = Tc(Lc, a3, b3, c3, d, e), true;
          case "dragenter":
            return Mc = Tc(Mc, a3, b3, c3, d, e), true;
          case "mouseover":
            return Nc = Tc(Nc, a3, b3, c3, d, e), true;
          case "pointerover":
            var f = e.pointerId;
            Oc.set(f, Tc(Oc.get(f) || null, a3, b3, c3, d, e));
            return true;
          case "gotpointercapture":
            return f = e.pointerId, Pc.set(f, Tc(Pc.get(f) || null, a3, b3, c3, d, e)), true;
        }
        return false;
      }
      function Vc(a3) {
        var b3 = Wc(a3.target);
        if (null !== b3) {
          var c3 = Vb(b3);
          if (null !== c3) {
            if (b3 = c3.tag, 13 === b3) {
              if (b3 = Wb(c3), null !== b3) {
                a3.blockedOn = b3;
                Ic(a3.priority, function() {
                  Gc(c3);
                });
                return;
              }
            } else if (3 === b3 && c3.stateNode.current.memoizedState.isDehydrated) {
              a3.blockedOn = 3 === c3.tag ? c3.stateNode.containerInfo : null;
              return;
            }
          }
        }
        a3.blockedOn = null;
      }
      function Xc(a3) {
        if (null !== a3.blockedOn) return false;
        for (var b3 = a3.targetContainers; 0 < b3.length; ) {
          var c3 = Yc(a3.domEventName, a3.eventSystemFlags, b3[0], a3.nativeEvent);
          if (null === c3) {
            c3 = a3.nativeEvent;
            var d = new c3.constructor(c3.type, c3);
            wb = d;
            c3.target.dispatchEvent(d);
            wb = null;
          } else return b3 = Cb(c3), null !== b3 && Fc(b3), a3.blockedOn = c3, false;
          b3.shift();
        }
        return true;
      }
      function Zc(a3, b3, c3) {
        Xc(a3) && c3.delete(b3);
      }
      function $c() {
        Jc = false;
        null !== Lc && Xc(Lc) && (Lc = null);
        null !== Mc && Xc(Mc) && (Mc = null);
        null !== Nc && Xc(Nc) && (Nc = null);
        Oc.forEach(Zc);
        Pc.forEach(Zc);
      }
      function ad(a3, b3) {
        a3.blockedOn === b3 && (a3.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
      }
      function bd(a3) {
        function b3(b4) {
          return ad(b4, a3);
        }
        if (0 < Kc.length) {
          ad(Kc[0], a3);
          for (var c3 = 1; c3 < Kc.length; c3++) {
            var d = Kc[c3];
            d.blockedOn === a3 && (d.blockedOn = null);
          }
        }
        null !== Lc && ad(Lc, a3);
        null !== Mc && ad(Mc, a3);
        null !== Nc && ad(Nc, a3);
        Oc.forEach(b3);
        Pc.forEach(b3);
        for (c3 = 0; c3 < Qc.length; c3++) d = Qc[c3], d.blockedOn === a3 && (d.blockedOn = null);
        for (; 0 < Qc.length && (c3 = Qc[0], null === c3.blockedOn); ) Vc(c3), null === c3.blockedOn && Qc.shift();
      }
      var cd = ua.ReactCurrentBatchConfig;
      var dd = true;
      function ed(a3, b3, c3, d) {
        var e = C, f = cd.transition;
        cd.transition = null;
        try {
          C = 1, fd(a3, b3, c3, d);
        } finally {
          C = e, cd.transition = f;
        }
      }
      function gd(a3, b3, c3, d) {
        var e = C, f = cd.transition;
        cd.transition = null;
        try {
          C = 4, fd(a3, b3, c3, d);
        } finally {
          C = e, cd.transition = f;
        }
      }
      function fd(a3, b3, c3, d) {
        if (dd) {
          var e = Yc(a3, b3, c3, d);
          if (null === e) hd(a3, b3, d, id, c3), Sc(a3, d);
          else if (Uc(e, a3, b3, c3, d)) d.stopPropagation();
          else if (Sc(a3, d), b3 & 4 && -1 < Rc.indexOf(a3)) {
            for (; null !== e; ) {
              var f = Cb(e);
              null !== f && Ec(f);
              f = Yc(a3, b3, c3, d);
              null === f && hd(a3, b3, d, id, c3);
              if (f === e) break;
              e = f;
            }
            null !== e && d.stopPropagation();
          } else hd(a3, b3, d, null, c3);
        }
      }
      var id = null;
      function Yc(a3, b3, c3, d) {
        id = null;
        a3 = xb(d);
        a3 = Wc(a3);
        if (null !== a3) if (b3 = Vb(a3), null === b3) a3 = null;
        else if (c3 = b3.tag, 13 === c3) {
          a3 = Wb(b3);
          if (null !== a3) return a3;
          a3 = null;
        } else if (3 === c3) {
          if (b3.stateNode.current.memoizedState.isDehydrated) return 3 === b3.tag ? b3.stateNode.containerInfo : null;
          a3 = null;
        } else b3 !== a3 && (a3 = null);
        id = a3;
        return null;
      }
      function jd(a3) {
        switch (a3) {
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
            switch (ec()) {
              case fc:
                return 1;
              case gc:
                return 4;
              case hc:
              case ic:
                return 16;
              case jc:
                return 536870912;
              default:
                return 16;
            }
          default:
            return 16;
        }
      }
      var kd = null;
      var ld = null;
      var md = null;
      function nd() {
        if (md) return md;
        var a3, b3 = ld, c3 = b3.length, d, e = "value" in kd ? kd.value : kd.textContent, f = e.length;
        for (a3 = 0; a3 < c3 && b3[a3] === e[a3]; a3++) ;
        var g = c3 - a3;
        for (d = 1; d <= g && b3[c3 - d] === e[f - d]; d++) ;
        return md = e.slice(a3, 1 < d ? 1 - d : void 0);
      }
      function od(a3) {
        var b3 = a3.keyCode;
        "charCode" in a3 ? (a3 = a3.charCode, 0 === a3 && 13 === b3 && (a3 = 13)) : a3 = b3;
        10 === a3 && (a3 = 13);
        return 32 <= a3 || 13 === a3 ? a3 : 0;
      }
      function pd() {
        return true;
      }
      function qd() {
        return false;
      }
      function rd(a3) {
        function b3(b4, d, e, f, g) {
          this._reactName = b4;
          this._targetInst = e;
          this.type = d;
          this.nativeEvent = f;
          this.target = g;
          this.currentTarget = null;
          for (var c3 in a3) a3.hasOwnProperty(c3) && (b4 = a3[c3], this[c3] = b4 ? b4(f) : f[c3]);
          this.isDefaultPrevented = (null != f.defaultPrevented ? f.defaultPrevented : false === f.returnValue) ? pd : qd;
          this.isPropagationStopped = qd;
          return this;
        }
        A(b3.prototype, { preventDefault: function() {
          this.defaultPrevented = true;
          var a4 = this.nativeEvent;
          a4 && (a4.preventDefault ? a4.preventDefault() : "unknown" !== typeof a4.returnValue && (a4.returnValue = false), this.isDefaultPrevented = pd);
        }, stopPropagation: function() {
          var a4 = this.nativeEvent;
          a4 && (a4.stopPropagation ? a4.stopPropagation() : "unknown" !== typeof a4.cancelBubble && (a4.cancelBubble = true), this.isPropagationStopped = pd);
        }, persist: function() {
        }, isPersistent: pd });
        return b3;
      }
      var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a3) {
        return a3.timeStamp || Date.now();
      }, defaultPrevented: 0, isTrusted: 0 };
      var td = rd(sd);
      var ud = A({}, sd, { view: 0, detail: 0 });
      var vd = rd(ud);
      var wd;
      var xd;
      var yd;
      var Ad = A({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a3) {
        return void 0 === a3.relatedTarget ? a3.fromElement === a3.srcElement ? a3.toElement : a3.fromElement : a3.relatedTarget;
      }, movementX: function(a3) {
        if ("movementX" in a3) return a3.movementX;
        a3 !== yd && (yd && "mousemove" === a3.type ? (wd = a3.screenX - yd.screenX, xd = a3.screenY - yd.screenY) : xd = wd = 0, yd = a3);
        return wd;
      }, movementY: function(a3) {
        return "movementY" in a3 ? a3.movementY : xd;
      } });
      var Bd = rd(Ad);
      var Cd = A({}, Ad, { dataTransfer: 0 });
      var Dd = rd(Cd);
      var Ed = A({}, ud, { relatedTarget: 0 });
      var Fd = rd(Ed);
      var Gd = A({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 });
      var Hd = rd(Gd);
      var Id = A({}, sd, { clipboardData: function(a3) {
        return "clipboardData" in a3 ? a3.clipboardData : window.clipboardData;
      } });
      var Jd = rd(Id);
      var Kd = A({}, sd, { data: 0 });
      var Ld = rd(Kd);
      var Md = {
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
      };
      var Nd = {
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
      };
      var Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
      function Pd(a3) {
        var b3 = this.nativeEvent;
        return b3.getModifierState ? b3.getModifierState(a3) : (a3 = Od[a3]) ? !!b3[a3] : false;
      }
      function zd() {
        return Pd;
      }
      var Qd = A({}, ud, { key: function(a3) {
        if (a3.key) {
          var b3 = Md[a3.key] || a3.key;
          if ("Unidentified" !== b3) return b3;
        }
        return "keypress" === a3.type ? (a3 = od(a3), 13 === a3 ? "Enter" : String.fromCharCode(a3)) : "keydown" === a3.type || "keyup" === a3.type ? Nd[a3.keyCode] || "Unidentified" : "";
      }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a3) {
        return "keypress" === a3.type ? od(a3) : 0;
      }, keyCode: function(a3) {
        return "keydown" === a3.type || "keyup" === a3.type ? a3.keyCode : 0;
      }, which: function(a3) {
        return "keypress" === a3.type ? od(a3) : "keydown" === a3.type || "keyup" === a3.type ? a3.keyCode : 0;
      } });
      var Rd = rd(Qd);
      var Sd = A({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 });
      var Td = rd(Sd);
      var Ud = A({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd });
      var Vd = rd(Ud);
      var Wd = A({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 });
      var Xd = rd(Wd);
      var Yd = A({}, Ad, {
        deltaX: function(a3) {
          return "deltaX" in a3 ? a3.deltaX : "wheelDeltaX" in a3 ? -a3.wheelDeltaX : 0;
        },
        deltaY: function(a3) {
          return "deltaY" in a3 ? a3.deltaY : "wheelDeltaY" in a3 ? -a3.wheelDeltaY : "wheelDelta" in a3 ? -a3.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0
      });
      var Zd = rd(Yd);
      var $d = [9, 13, 27, 32];
      var ae = ia && "CompositionEvent" in window;
      var be = null;
      ia && "documentMode" in document && (be = document.documentMode);
      var ce = ia && "TextEvent" in window && !be;
      var de = ia && (!ae || be && 8 < be && 11 >= be);
      var ee = String.fromCharCode(32);
      var fe = false;
      function ge(a3, b3) {
        switch (a3) {
          case "keyup":
            return -1 !== $d.indexOf(b3.keyCode);
          case "keydown":
            return 229 !== b3.keyCode;
          case "keypress":
          case "mousedown":
          case "focusout":
            return true;
          default:
            return false;
        }
      }
      function he(a3) {
        a3 = a3.detail;
        return "object" === typeof a3 && "data" in a3 ? a3.data : null;
      }
      var ie = false;
      function je(a3, b3) {
        switch (a3) {
          case "compositionend":
            return he(b3);
          case "keypress":
            if (32 !== b3.which) return null;
            fe = true;
            return ee;
          case "textInput":
            return a3 = b3.data, a3 === ee && fe ? null : a3;
          default:
            return null;
        }
      }
      function ke(a3, b3) {
        if (ie) return "compositionend" === a3 || !ae && ge(a3, b3) ? (a3 = nd(), md = ld = kd = null, ie = false, a3) : null;
        switch (a3) {
          case "paste":
            return null;
          case "keypress":
            if (!(b3.ctrlKey || b3.altKey || b3.metaKey) || b3.ctrlKey && b3.altKey) {
              if (b3.char && 1 < b3.char.length) return b3.char;
              if (b3.which) return String.fromCharCode(b3.which);
            }
            return null;
          case "compositionend":
            return de && "ko" !== b3.locale ? null : b3.data;
          default:
            return null;
        }
      }
      var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
      function me(a3) {
        var b3 = a3 && a3.nodeName && a3.nodeName.toLowerCase();
        return "input" === b3 ? !!le[a3.type] : "textarea" === b3 ? true : false;
      }
      function ne(a3, b3, c3, d) {
        Eb(d);
        b3 = oe(b3, "onChange");
        0 < b3.length && (c3 = new td("onChange", "change", null, c3, d), a3.push({ event: c3, listeners: b3 }));
      }
      var pe = null;
      var qe = null;
      function re(a3) {
        se(a3, 0);
      }
      function te(a3) {
        var b3 = ue(a3);
        if (Wa(b3)) return a3;
      }
      function ve(a3, b3) {
        if ("change" === a3) return b3;
      }
      var we = false;
      if (ia) {
        if (ia) {
          ye = "oninput" in document;
          if (!ye) {
            ze = document.createElement("div");
            ze.setAttribute("oninput", "return;");
            ye = "function" === typeof ze.oninput;
          }
          xe = ye;
        } else xe = false;
        we = xe && (!document.documentMode || 9 < document.documentMode);
      }
      var xe;
      var ye;
      var ze;
      function Ae() {
        pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
      }
      function Be(a3) {
        if ("value" === a3.propertyName && te(qe)) {
          var b3 = [];
          ne(b3, qe, a3, xb(a3));
          Jb(re, b3);
        }
      }
      function Ce(a3, b3, c3) {
        "focusin" === a3 ? (Ae(), pe = b3, qe = c3, pe.attachEvent("onpropertychange", Be)) : "focusout" === a3 && Ae();
      }
      function De(a3) {
        if ("selectionchange" === a3 || "keyup" === a3 || "keydown" === a3) return te(qe);
      }
      function Ee(a3, b3) {
        if ("click" === a3) return te(b3);
      }
      function Fe(a3, b3) {
        if ("input" === a3 || "change" === a3) return te(b3);
      }
      function Ge(a3, b3) {
        return a3 === b3 && (0 !== a3 || 1 / a3 === 1 / b3) || a3 !== a3 && b3 !== b3;
      }
      var He = "function" === typeof Object.is ? Object.is : Ge;
      function Ie(a3, b3) {
        if (He(a3, b3)) return true;
        if ("object" !== typeof a3 || null === a3 || "object" !== typeof b3 || null === b3) return false;
        var c3 = Object.keys(a3), d = Object.keys(b3);
        if (c3.length !== d.length) return false;
        for (d = 0; d < c3.length; d++) {
          var e = c3[d];
          if (!ja.call(b3, e) || !He(a3[e], b3[e])) return false;
        }
        return true;
      }
      function Je(a3) {
        for (; a3 && a3.firstChild; ) a3 = a3.firstChild;
        return a3;
      }
      function Ke(a3, b3) {
        var c3 = Je(a3);
        a3 = 0;
        for (var d; c3; ) {
          if (3 === c3.nodeType) {
            d = a3 + c3.textContent.length;
            if (a3 <= b3 && d >= b3) return { node: c3, offset: b3 - a3 };
            a3 = d;
          }
          a: {
            for (; c3; ) {
              if (c3.nextSibling) {
                c3 = c3.nextSibling;
                break a;
              }
              c3 = c3.parentNode;
            }
            c3 = void 0;
          }
          c3 = Je(c3);
        }
      }
      function Le(a3, b3) {
        return a3 && b3 ? a3 === b3 ? true : a3 && 3 === a3.nodeType ? false : b3 && 3 === b3.nodeType ? Le(a3, b3.parentNode) : "contains" in a3 ? a3.contains(b3) : a3.compareDocumentPosition ? !!(a3.compareDocumentPosition(b3) & 16) : false : false;
      }
      function Me() {
        for (var a3 = window, b3 = Xa(); b3 instanceof a3.HTMLIFrameElement; ) {
          try {
            var c3 = "string" === typeof b3.contentWindow.location.href;
          } catch (d) {
            c3 = false;
          }
          if (c3) a3 = b3.contentWindow;
          else break;
          b3 = Xa(a3.document);
        }
        return b3;
      }
      function Ne(a3) {
        var b3 = a3 && a3.nodeName && a3.nodeName.toLowerCase();
        return b3 && ("input" === b3 && ("text" === a3.type || "search" === a3.type || "tel" === a3.type || "url" === a3.type || "password" === a3.type) || "textarea" === b3 || "true" === a3.contentEditable);
      }
      function Oe(a3) {
        var b3 = Me(), c3 = a3.focusedElem, d = a3.selectionRange;
        if (b3 !== c3 && c3 && c3.ownerDocument && Le(c3.ownerDocument.documentElement, c3)) {
          if (null !== d && Ne(c3)) {
            if (b3 = d.start, a3 = d.end, void 0 === a3 && (a3 = b3), "selectionStart" in c3) c3.selectionStart = b3, c3.selectionEnd = Math.min(a3, c3.value.length);
            else if (a3 = (b3 = c3.ownerDocument || document) && b3.defaultView || window, a3.getSelection) {
              a3 = a3.getSelection();
              var e = c3.textContent.length, f = Math.min(d.start, e);
              d = void 0 === d.end ? f : Math.min(d.end, e);
              !a3.extend && f > d && (e = d, d = f, f = e);
              e = Ke(c3, f);
              var g = Ke(
                c3,
                d
              );
              e && g && (1 !== a3.rangeCount || a3.anchorNode !== e.node || a3.anchorOffset !== e.offset || a3.focusNode !== g.node || a3.focusOffset !== g.offset) && (b3 = b3.createRange(), b3.setStart(e.node, e.offset), a3.removeAllRanges(), f > d ? (a3.addRange(b3), a3.extend(g.node, g.offset)) : (b3.setEnd(g.node, g.offset), a3.addRange(b3)));
            }
          }
          b3 = [];
          for (a3 = c3; a3 = a3.parentNode; ) 1 === a3.nodeType && b3.push({ element: a3, left: a3.scrollLeft, top: a3.scrollTop });
          "function" === typeof c3.focus && c3.focus();
          for (c3 = 0; c3 < b3.length; c3++) a3 = b3[c3], a3.element.scrollLeft = a3.left, a3.element.scrollTop = a3.top;
        }
      }
      var Pe = ia && "documentMode" in document && 11 >= document.documentMode;
      var Qe = null;
      var Re = null;
      var Se = null;
      var Te = false;
      function Ue(a3, b3, c3) {
        var d = c3.window === c3 ? c3.document : 9 === c3.nodeType ? c3 : c3.ownerDocument;
        Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Ne(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se && Ie(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b3 = new td("onSelect", "select", null, b3, c3), a3.push({ event: b3, listeners: d }), b3.target = Qe)));
      }
      function Ve(a3, b3) {
        var c3 = {};
        c3[a3.toLowerCase()] = b3.toLowerCase();
        c3["Webkit" + a3] = "webkit" + b3;
        c3["Moz" + a3] = "moz" + b3;
        return c3;
      }
      var We = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") };
      var Xe = {};
      var Ye = {};
      ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
      function Ze(a3) {
        if (Xe[a3]) return Xe[a3];
        if (!We[a3]) return a3;
        var b3 = We[a3], c3;
        for (c3 in b3) if (b3.hasOwnProperty(c3) && c3 in Ye) return Xe[a3] = b3[c3];
        return a3;
      }
      var $e = Ze("animationend");
      var af = Ze("animationiteration");
      var bf = Ze("animationstart");
      var cf = Ze("transitionend");
      var df = /* @__PURE__ */ new Map();
      var ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
      function ff(a3, b3) {
        df.set(a3, b3);
        fa(b3, [a3]);
      }
      for (gf = 0; gf < ef.length; gf++) {
        hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
        ff(jf, "on" + kf);
      }
      var hf;
      var jf;
      var kf;
      var gf;
      ff($e, "onAnimationEnd");
      ff(af, "onAnimationIteration");
      ff(bf, "onAnimationStart");
      ff("dblclick", "onDoubleClick");
      ff("focusin", "onFocus");
      ff("focusout", "onBlur");
      ff(cf, "onTransitionEnd");
      ha("onMouseEnter", ["mouseout", "mouseover"]);
      ha("onMouseLeave", ["mouseout", "mouseover"]);
      ha("onPointerEnter", ["pointerout", "pointerover"]);
      ha("onPointerLeave", ["pointerout", "pointerover"]);
      fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
      fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
      fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
      fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
      fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
      fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
      var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
      var mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
      function nf(a3, b3, c3) {
        var d = a3.type || "unknown-event";
        a3.currentTarget = c3;
        Ub(d, b3, void 0, a3);
        a3.currentTarget = null;
      }
      function se(a3, b3) {
        b3 = 0 !== (b3 & 4);
        for (var c3 = 0; c3 < a3.length; c3++) {
          var d = a3[c3], e = d.event;
          d = d.listeners;
          a: {
            var f = void 0;
            if (b3) for (var g = d.length - 1; 0 <= g; g--) {
              var h = d[g], k = h.instance, l = h.currentTarget;
              h = h.listener;
              if (k !== f && e.isPropagationStopped()) break a;
              nf(e, h, l);
              f = k;
            }
            else for (g = 0; g < d.length; g++) {
              h = d[g];
              k = h.instance;
              l = h.currentTarget;
              h = h.listener;
              if (k !== f && e.isPropagationStopped()) break a;
              nf(e, h, l);
              f = k;
            }
          }
        }
        if (Qb) throw a3 = Rb, Qb = false, Rb = null, a3;
      }
      function D(a3, b3) {
        var c3 = b3[of];
        void 0 === c3 && (c3 = b3[of] = /* @__PURE__ */ new Set());
        var d = a3 + "__bubble";
        c3.has(d) || (pf(b3, a3, 2, false), c3.add(d));
      }
      function qf(a3, b3, c3) {
        var d = 0;
        b3 && (d |= 4);
        pf(c3, a3, d, b3);
      }
      var rf = "_reactListening" + Math.random().toString(36).slice(2);
      function sf(a3) {
        if (!a3[rf]) {
          a3[rf] = true;
          da.forEach(function(b4) {
            "selectionchange" !== b4 && (mf.has(b4) || qf(b4, false, a3), qf(b4, true, a3));
          });
          var b3 = 9 === a3.nodeType ? a3 : a3.ownerDocument;
          null === b3 || b3[rf] || (b3[rf] = true, qf("selectionchange", false, b3));
        }
      }
      function pf(a3, b3, c3, d) {
        switch (jd(b3)) {
          case 1:
            var e = ed;
            break;
          case 4:
            e = gd;
            break;
          default:
            e = fd;
        }
        c3 = e.bind(null, b3, c3, a3);
        e = void 0;
        !Lb || "touchstart" !== b3 && "touchmove" !== b3 && "wheel" !== b3 || (e = true);
        d ? void 0 !== e ? a3.addEventListener(b3, c3, { capture: true, passive: e }) : a3.addEventListener(b3, c3, true) : void 0 !== e ? a3.addEventListener(b3, c3, { passive: e }) : a3.addEventListener(b3, c3, false);
      }
      function hd(a3, b3, c3, d, e) {
        var f = d;
        if (0 === (b3 & 1) && 0 === (b3 & 2) && null !== d) a: for (; ; ) {
          if (null === d) return;
          var g = d.tag;
          if (3 === g || 4 === g) {
            var h = d.stateNode.containerInfo;
            if (h === e || 8 === h.nodeType && h.parentNode === e) break;
            if (4 === g) for (g = d.return; null !== g; ) {
              var k = g.tag;
              if (3 === k || 4 === k) {
                if (k = g.stateNode.containerInfo, k === e || 8 === k.nodeType && k.parentNode === e) return;
              }
              g = g.return;
            }
            for (; null !== h; ) {
              g = Wc(h);
              if (null === g) return;
              k = g.tag;
              if (5 === k || 6 === k) {
                d = f = g;
                continue a;
              }
              h = h.parentNode;
            }
          }
          d = d.return;
        }
        Jb(function() {
          var d2 = f, e2 = xb(c3), g2 = [];
          a: {
            var h2 = df.get(a3);
            if (void 0 !== h2) {
              var k2 = td, n = a3;
              switch (a3) {
                case "keypress":
                  if (0 === od(c3)) break a;
                case "keydown":
                case "keyup":
                  k2 = Rd;
                  break;
                case "focusin":
                  n = "focus";
                  k2 = Fd;
                  break;
                case "focusout":
                  n = "blur";
                  k2 = Fd;
                  break;
                case "beforeblur":
                case "afterblur":
                  k2 = Fd;
                  break;
                case "click":
                  if (2 === c3.button) break a;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                  k2 = Bd;
                  break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                  k2 = Dd;
                  break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                  k2 = Vd;
                  break;
                case $e:
                case af:
                case bf:
                  k2 = Hd;
                  break;
                case cf:
                  k2 = Xd;
                  break;
                case "scroll":
                  k2 = vd;
                  break;
                case "wheel":
                  k2 = Zd;
                  break;
                case "copy":
                case "cut":
                case "paste":
                  k2 = Jd;
                  break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                  k2 = Td;
              }
              var t = 0 !== (b3 & 4), J = !t && "scroll" === a3, x = t ? null !== h2 ? h2 + "Capture" : null : h2;
              t = [];
              for (var w = d2, u; null !== w; ) {
                u = w;
                var F = u.stateNode;
                5 === u.tag && null !== F && (u = F, null !== x && (F = Kb(w, x), null != F && t.push(tf(w, F, u))));
                if (J) break;
                w = w.return;
              }
              0 < t.length && (h2 = new k2(h2, n, null, c3, e2), g2.push({ event: h2, listeners: t }));
            }
          }
          if (0 === (b3 & 7)) {
            a: {
              h2 = "mouseover" === a3 || "pointerover" === a3;
              k2 = "mouseout" === a3 || "pointerout" === a3;
              if (h2 && c3 !== wb && (n = c3.relatedTarget || c3.fromElement) && (Wc(n) || n[uf])) break a;
              if (k2 || h2) {
                h2 = e2.window === e2 ? e2 : (h2 = e2.ownerDocument) ? h2.defaultView || h2.parentWindow : window;
                if (k2) {
                  if (n = c3.relatedTarget || c3.toElement, k2 = d2, n = n ? Wc(n) : null, null !== n && (J = Vb(n), n !== J || 5 !== n.tag && 6 !== n.tag)) n = null;
                } else k2 = null, n = d2;
                if (k2 !== n) {
                  t = Bd;
                  F = "onMouseLeave";
                  x = "onMouseEnter";
                  w = "mouse";
                  if ("pointerout" === a3 || "pointerover" === a3) t = Td, F = "onPointerLeave", x = "onPointerEnter", w = "pointer";
                  J = null == k2 ? h2 : ue(k2);
                  u = null == n ? h2 : ue(n);
                  h2 = new t(F, w + "leave", k2, c3, e2);
                  h2.target = J;
                  h2.relatedTarget = u;
                  F = null;
                  Wc(e2) === d2 && (t = new t(x, w + "enter", n, c3, e2), t.target = u, t.relatedTarget = J, F = t);
                  J = F;
                  if (k2 && n) b: {
                    t = k2;
                    x = n;
                    w = 0;
                    for (u = t; u; u = vf(u)) w++;
                    u = 0;
                    for (F = x; F; F = vf(F)) u++;
                    for (; 0 < w - u; ) t = vf(t), w--;
                    for (; 0 < u - w; ) x = vf(x), u--;
                    for (; w--; ) {
                      if (t === x || null !== x && t === x.alternate) break b;
                      t = vf(t);
                      x = vf(x);
                    }
                    t = null;
                  }
                  else t = null;
                  null !== k2 && wf(g2, h2, k2, t, false);
                  null !== n && null !== J && wf(g2, J, n, t, true);
                }
              }
            }
            a: {
              h2 = d2 ? ue(d2) : window;
              k2 = h2.nodeName && h2.nodeName.toLowerCase();
              if ("select" === k2 || "input" === k2 && "file" === h2.type) var na = ve;
              else if (me(h2)) if (we) na = Fe;
              else {
                na = De;
                var xa = Ce;
              }
              else (k2 = h2.nodeName) && "input" === k2.toLowerCase() && ("checkbox" === h2.type || "radio" === h2.type) && (na = Ee);
              if (na && (na = na(a3, d2))) {
                ne(g2, na, c3, e2);
                break a;
              }
              xa && xa(a3, h2, d2);
              "focusout" === a3 && (xa = h2._wrapperState) && xa.controlled && "number" === h2.type && cb(h2, "number", h2.value);
            }
            xa = d2 ? ue(d2) : window;
            switch (a3) {
              case "focusin":
                if (me(xa) || "true" === xa.contentEditable) Qe = xa, Re = d2, Se = null;
                break;
              case "focusout":
                Se = Re = Qe = null;
                break;
              case "mousedown":
                Te = true;
                break;
              case "contextmenu":
              case "mouseup":
              case "dragend":
                Te = false;
                Ue(g2, c3, e2);
                break;
              case "selectionchange":
                if (Pe) break;
              case "keydown":
              case "keyup":
                Ue(g2, c3, e2);
            }
            var $a;
            if (ae) b: {
              switch (a3) {
                case "compositionstart":
                  var ba = "onCompositionStart";
                  break b;
                case "compositionend":
                  ba = "onCompositionEnd";
                  break b;
                case "compositionupdate":
                  ba = "onCompositionUpdate";
                  break b;
              }
              ba = void 0;
            }
            else ie ? ge(a3, c3) && (ba = "onCompositionEnd") : "keydown" === a3 && 229 === c3.keyCode && (ba = "onCompositionStart");
            ba && (de && "ko" !== c3.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e2, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), xa = oe(d2, ba), 0 < xa.length && (ba = new Ld(ba, a3, null, c3, e2), g2.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he(c3), null !== $a && (ba.data = $a))));
            if ($a = ce ? je(a3, c3) : ke(a3, c3)) d2 = oe(d2, "onBeforeInput"), 0 < d2.length && (e2 = new Ld("onBeforeInput", "beforeinput", null, c3, e2), g2.push({ event: e2, listeners: d2 }), e2.data = $a);
          }
          se(g2, b3);
        });
      }
      function tf(a3, b3, c3) {
        return { instance: a3, listener: b3, currentTarget: c3 };
      }
      function oe(a3, b3) {
        for (var c3 = b3 + "Capture", d = []; null !== a3; ) {
          var e = a3, f = e.stateNode;
          5 === e.tag && null !== f && (e = f, f = Kb(a3, c3), null != f && d.unshift(tf(a3, f, e)), f = Kb(a3, b3), null != f && d.push(tf(a3, f, e)));
          a3 = a3.return;
        }
        return d;
      }
      function vf(a3) {
        if (null === a3) return null;
        do
          a3 = a3.return;
        while (a3 && 5 !== a3.tag);
        return a3 ? a3 : null;
      }
      function wf(a3, b3, c3, d, e) {
        for (var f = b3._reactName, g = []; null !== c3 && c3 !== d; ) {
          var h = c3, k = h.alternate, l = h.stateNode;
          if (null !== k && k === d) break;
          5 === h.tag && null !== l && (h = l, e ? (k = Kb(c3, f), null != k && g.unshift(tf(c3, k, h))) : e || (k = Kb(c3, f), null != k && g.push(tf(c3, k, h))));
          c3 = c3.return;
        }
        0 !== g.length && a3.push({ event: b3, listeners: g });
      }
      var xf = /\r\n?/g;
      var yf = /\u0000|\uFFFD/g;
      function zf(a3) {
        return ("string" === typeof a3 ? a3 : "" + a3).replace(xf, "\n").replace(yf, "");
      }
      function Af(a3, b3, c3) {
        b3 = zf(b3);
        if (zf(a3) !== b3 && c3) throw Error(p(425));
      }
      function Bf() {
      }
      var Cf = null;
      var Df = null;
      function Ef(a3, b3) {
        return "textarea" === a3 || "noscript" === a3 || "string" === typeof b3.children || "number" === typeof b3.children || "object" === typeof b3.dangerouslySetInnerHTML && null !== b3.dangerouslySetInnerHTML && null != b3.dangerouslySetInnerHTML.__html;
      }
      var Ff = "function" === typeof setTimeout ? setTimeout : void 0;
      var Gf = "function" === typeof clearTimeout ? clearTimeout : void 0;
      var Hf = "function" === typeof Promise ? Promise : void 0;
      var Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a3) {
        return Hf.resolve(null).then(a3).catch(If);
      } : Ff;
      function If(a3) {
        setTimeout(function() {
          throw a3;
        });
      }
      function Kf(a3, b3) {
        var c3 = b3, d = 0;
        do {
          var e = c3.nextSibling;
          a3.removeChild(c3);
          if (e && 8 === e.nodeType) if (c3 = e.data, "/$" === c3) {
            if (0 === d) {
              a3.removeChild(e);
              bd(b3);
              return;
            }
            d--;
          } else "$" !== c3 && "$?" !== c3 && "$!" !== c3 || d++;
          c3 = e;
        } while (c3);
        bd(b3);
      }
      function Lf(a3) {
        for (; null != a3; a3 = a3.nextSibling) {
          var b3 = a3.nodeType;
          if (1 === b3 || 3 === b3) break;
          if (8 === b3) {
            b3 = a3.data;
            if ("$" === b3 || "$!" === b3 || "$?" === b3) break;
            if ("/$" === b3) return null;
          }
        }
        return a3;
      }
      function Mf(a3) {
        a3 = a3.previousSibling;
        for (var b3 = 0; a3; ) {
          if (8 === a3.nodeType) {
            var c3 = a3.data;
            if ("$" === c3 || "$!" === c3 || "$?" === c3) {
              if (0 === b3) return a3;
              b3--;
            } else "/$" === c3 && b3++;
          }
          a3 = a3.previousSibling;
        }
        return null;
      }
      var Nf = Math.random().toString(36).slice(2);
      var Of = "__reactFiber$" + Nf;
      var Pf = "__reactProps$" + Nf;
      var uf = "__reactContainer$" + Nf;
      var of = "__reactEvents$" + Nf;
      var Qf = "__reactListeners$" + Nf;
      var Rf = "__reactHandles$" + Nf;
      function Wc(a3) {
        var b3 = a3[Of];
        if (b3) return b3;
        for (var c3 = a3.parentNode; c3; ) {
          if (b3 = c3[uf] || c3[Of]) {
            c3 = b3.alternate;
            if (null !== b3.child || null !== c3 && null !== c3.child) for (a3 = Mf(a3); null !== a3; ) {
              if (c3 = a3[Of]) return c3;
              a3 = Mf(a3);
            }
            return b3;
          }
          a3 = c3;
          c3 = a3.parentNode;
        }
        return null;
      }
      function Cb(a3) {
        a3 = a3[Of] || a3[uf];
        return !a3 || 5 !== a3.tag && 6 !== a3.tag && 13 !== a3.tag && 3 !== a3.tag ? null : a3;
      }
      function ue(a3) {
        if (5 === a3.tag || 6 === a3.tag) return a3.stateNode;
        throw Error(p(33));
      }
      function Db(a3) {
        return a3[Pf] || null;
      }
      var Sf = [];
      var Tf = -1;
      function Uf(a3) {
        return { current: a3 };
      }
      function E(a3) {
        0 > Tf || (a3.current = Sf[Tf], Sf[Tf] = null, Tf--);
      }
      function G(a3, b3) {
        Tf++;
        Sf[Tf] = a3.current;
        a3.current = b3;
      }
      var Vf = {};
      var H = Uf(Vf);
      var Wf = Uf(false);
      var Xf = Vf;
      function Yf(a3, b3) {
        var c3 = a3.type.contextTypes;
        if (!c3) return Vf;
        var d = a3.stateNode;
        if (d && d.__reactInternalMemoizedUnmaskedChildContext === b3) return d.__reactInternalMemoizedMaskedChildContext;
        var e = {}, f;
        for (f in c3) e[f] = b3[f];
        d && (a3 = a3.stateNode, a3.__reactInternalMemoizedUnmaskedChildContext = b3, a3.__reactInternalMemoizedMaskedChildContext = e);
        return e;
      }
      function Zf(a3) {
        a3 = a3.childContextTypes;
        return null !== a3 && void 0 !== a3;
      }
      function $f() {
        E(Wf);
        E(H);
      }
      function ag(a3, b3, c3) {
        if (H.current !== Vf) throw Error(p(168));
        G(H, b3);
        G(Wf, c3);
      }
      function bg(a3, b3, c3) {
        var d = a3.stateNode;
        b3 = b3.childContextTypes;
        if ("function" !== typeof d.getChildContext) return c3;
        d = d.getChildContext();
        for (var e in d) if (!(e in b3)) throw Error(p(108, Ra(a3) || "Unknown", e));
        return A({}, c3, d);
      }
      function cg(a3) {
        a3 = (a3 = a3.stateNode) && a3.__reactInternalMemoizedMergedChildContext || Vf;
        Xf = H.current;
        G(H, a3);
        G(Wf, Wf.current);
        return true;
      }
      function dg(a3, b3, c3) {
        var d = a3.stateNode;
        if (!d) throw Error(p(169));
        c3 ? (a3 = bg(a3, b3, Xf), d.__reactInternalMemoizedMergedChildContext = a3, E(Wf), E(H), G(H, a3)) : E(Wf);
        G(Wf, c3);
      }
      var eg = null;
      var fg = false;
      var gg = false;
      function hg(a3) {
        null === eg ? eg = [a3] : eg.push(a3);
      }
      function ig(a3) {
        fg = true;
        hg(a3);
      }
      function jg() {
        if (!gg && null !== eg) {
          gg = true;
          var a3 = 0, b3 = C;
          try {
            var c3 = eg;
            for (C = 1; a3 < c3.length; a3++) {
              var d = c3[a3];
              do
                d = d(true);
              while (null !== d);
            }
            eg = null;
            fg = false;
          } catch (e) {
            throw null !== eg && (eg = eg.slice(a3 + 1)), ac(fc, jg), e;
          } finally {
            C = b3, gg = false;
          }
        }
        return null;
      }
      var kg = [];
      var lg = 0;
      var mg = null;
      var ng = 0;
      var og = [];
      var pg = 0;
      var qg = null;
      var rg = 1;
      var sg = "";
      function tg(a3, b3) {
        kg[lg++] = ng;
        kg[lg++] = mg;
        mg = a3;
        ng = b3;
      }
      function ug(a3, b3, c3) {
        og[pg++] = rg;
        og[pg++] = sg;
        og[pg++] = qg;
        qg = a3;
        var d = rg;
        a3 = sg;
        var e = 32 - oc(d) - 1;
        d &= ~(1 << e);
        c3 += 1;
        var f = 32 - oc(b3) + e;
        if (30 < f) {
          var g = e - e % 5;
          f = (d & (1 << g) - 1).toString(32);
          d >>= g;
          e -= g;
          rg = 1 << 32 - oc(b3) + e | c3 << e | d;
          sg = f + a3;
        } else rg = 1 << f | c3 << e | d, sg = a3;
      }
      function vg(a3) {
        null !== a3.return && (tg(a3, 1), ug(a3, 1, 0));
      }
      function wg(a3) {
        for (; a3 === mg; ) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
        for (; a3 === qg; ) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
      }
      var xg = null;
      var yg = null;
      var I = false;
      var zg = null;
      function Ag(a3, b3) {
        var c3 = Bg(5, null, null, 0);
        c3.elementType = "DELETED";
        c3.stateNode = b3;
        c3.return = a3;
        b3 = a3.deletions;
        null === b3 ? (a3.deletions = [c3], a3.flags |= 16) : b3.push(c3);
      }
      function Cg(a3, b3) {
        switch (a3.tag) {
          case 5:
            var c3 = a3.type;
            b3 = 1 !== b3.nodeType || c3.toLowerCase() !== b3.nodeName.toLowerCase() ? null : b3;
            return null !== b3 ? (a3.stateNode = b3, xg = a3, yg = Lf(b3.firstChild), true) : false;
          case 6:
            return b3 = "" === a3.pendingProps || 3 !== b3.nodeType ? null : b3, null !== b3 ? (a3.stateNode = b3, xg = a3, yg = null, true) : false;
          case 13:
            return b3 = 8 !== b3.nodeType ? null : b3, null !== b3 ? (c3 = null !== qg ? { id: rg, overflow: sg } : null, a3.memoizedState = { dehydrated: b3, treeContext: c3, retryLane: 1073741824 }, c3 = Bg(18, null, null, 0), c3.stateNode = b3, c3.return = a3, a3.child = c3, xg = a3, yg = null, true) : false;
          default:
            return false;
        }
      }
      function Dg(a3) {
        return 0 !== (a3.mode & 1) && 0 === (a3.flags & 128);
      }
      function Eg(a3) {
        if (I) {
          var b3 = yg;
          if (b3) {
            var c3 = b3;
            if (!Cg(a3, b3)) {
              if (Dg(a3)) throw Error(p(418));
              b3 = Lf(c3.nextSibling);
              var d = xg;
              b3 && Cg(a3, b3) ? Ag(d, c3) : (a3.flags = a3.flags & -4097 | 2, I = false, xg = a3);
            }
          } else {
            if (Dg(a3)) throw Error(p(418));
            a3.flags = a3.flags & -4097 | 2;
            I = false;
            xg = a3;
          }
        }
      }
      function Fg(a3) {
        for (a3 = a3.return; null !== a3 && 5 !== a3.tag && 3 !== a3.tag && 13 !== a3.tag; ) a3 = a3.return;
        xg = a3;
      }
      function Gg(a3) {
        if (a3 !== xg) return false;
        if (!I) return Fg(a3), I = true, false;
        var b3;
        (b3 = 3 !== a3.tag) && !(b3 = 5 !== a3.tag) && (b3 = a3.type, b3 = "head" !== b3 && "body" !== b3 && !Ef(a3.type, a3.memoizedProps));
        if (b3 && (b3 = yg)) {
          if (Dg(a3)) throw Hg(), Error(p(418));
          for (; b3; ) Ag(a3, b3), b3 = Lf(b3.nextSibling);
        }
        Fg(a3);
        if (13 === a3.tag) {
          a3 = a3.memoizedState;
          a3 = null !== a3 ? a3.dehydrated : null;
          if (!a3) throw Error(p(317));
          a: {
            a3 = a3.nextSibling;
            for (b3 = 0; a3; ) {
              if (8 === a3.nodeType) {
                var c3 = a3.data;
                if ("/$" === c3) {
                  if (0 === b3) {
                    yg = Lf(a3.nextSibling);
                    break a;
                  }
                  b3--;
                } else "$" !== c3 && "$!" !== c3 && "$?" !== c3 || b3++;
              }
              a3 = a3.nextSibling;
            }
            yg = null;
          }
        } else yg = xg ? Lf(a3.stateNode.nextSibling) : null;
        return true;
      }
      function Hg() {
        for (var a3 = yg; a3; ) a3 = Lf(a3.nextSibling);
      }
      function Ig() {
        yg = xg = null;
        I = false;
      }
      function Jg(a3) {
        null === zg ? zg = [a3] : zg.push(a3);
      }
      var Kg = ua.ReactCurrentBatchConfig;
      function Lg(a3, b3, c3) {
        a3 = c3.ref;
        if (null !== a3 && "function" !== typeof a3 && "object" !== typeof a3) {
          if (c3._owner) {
            c3 = c3._owner;
            if (c3) {
              if (1 !== c3.tag) throw Error(p(309));
              var d = c3.stateNode;
            }
            if (!d) throw Error(p(147, a3));
            var e = d, f = "" + a3;
            if (null !== b3 && null !== b3.ref && "function" === typeof b3.ref && b3.ref._stringRef === f) return b3.ref;
            b3 = function(a4) {
              var b4 = e.refs;
              null === a4 ? delete b4[f] : b4[f] = a4;
            };
            b3._stringRef = f;
            return b3;
          }
          if ("string" !== typeof a3) throw Error(p(284));
          if (!c3._owner) throw Error(p(290, a3));
        }
        return a3;
      }
      function Mg(a3, b3) {
        a3 = Object.prototype.toString.call(b3);
        throw Error(p(31, "[object Object]" === a3 ? "object with keys {" + Object.keys(b3).join(", ") + "}" : a3));
      }
      function Ng(a3) {
        var b3 = a3._init;
        return b3(a3._payload);
      }
      function Og(a3) {
        function b3(b4, c4) {
          if (a3) {
            var d2 = b4.deletions;
            null === d2 ? (b4.deletions = [c4], b4.flags |= 16) : d2.push(c4);
          }
        }
        function c3(c4, d2) {
          if (!a3) return null;
          for (; null !== d2; ) b3(c4, d2), d2 = d2.sibling;
          return null;
        }
        function d(a4, b4) {
          for (a4 = /* @__PURE__ */ new Map(); null !== b4; ) null !== b4.key ? a4.set(b4.key, b4) : a4.set(b4.index, b4), b4 = b4.sibling;
          return a4;
        }
        function e(a4, b4) {
          a4 = Pg(a4, b4);
          a4.index = 0;
          a4.sibling = null;
          return a4;
        }
        function f(b4, c4, d2) {
          b4.index = d2;
          if (!a3) return b4.flags |= 1048576, c4;
          d2 = b4.alternate;
          if (null !== d2) return d2 = d2.index, d2 < c4 ? (b4.flags |= 2, c4) : d2;
          b4.flags |= 2;
          return c4;
        }
        function g(b4) {
          a3 && null === b4.alternate && (b4.flags |= 2);
          return b4;
        }
        function h(a4, b4, c4, d2) {
          if (null === b4 || 6 !== b4.tag) return b4 = Qg(c4, a4.mode, d2), b4.return = a4, b4;
          b4 = e(b4, c4);
          b4.return = a4;
          return b4;
        }
        function k(a4, b4, c4, d2) {
          var f2 = c4.type;
          if (f2 === ya) return m(a4, b4, c4.props.children, d2, c4.key);
          if (null !== b4 && (b4.elementType === f2 || "object" === typeof f2 && null !== f2 && f2.$$typeof === Ha && Ng(f2) === b4.type)) return d2 = e(b4, c4.props), d2.ref = Lg(a4, b4, c4), d2.return = a4, d2;
          d2 = Rg(c4.type, c4.key, c4.props, null, a4.mode, d2);
          d2.ref = Lg(a4, b4, c4);
          d2.return = a4;
          return d2;
        }
        function l(a4, b4, c4, d2) {
          if (null === b4 || 4 !== b4.tag || b4.stateNode.containerInfo !== c4.containerInfo || b4.stateNode.implementation !== c4.implementation) return b4 = Sg(c4, a4.mode, d2), b4.return = a4, b4;
          b4 = e(b4, c4.children || []);
          b4.return = a4;
          return b4;
        }
        function m(a4, b4, c4, d2, f2) {
          if (null === b4 || 7 !== b4.tag) return b4 = Tg(c4, a4.mode, d2, f2), b4.return = a4, b4;
          b4 = e(b4, c4);
          b4.return = a4;
          return b4;
        }
        function q(a4, b4, c4) {
          if ("string" === typeof b4 && "" !== b4 || "number" === typeof b4) return b4 = Qg("" + b4, a4.mode, c4), b4.return = a4, b4;
          if ("object" === typeof b4 && null !== b4) {
            switch (b4.$$typeof) {
              case va:
                return c4 = Rg(b4.type, b4.key, b4.props, null, a4.mode, c4), c4.ref = Lg(a4, null, b4), c4.return = a4, c4;
              case wa:
                return b4 = Sg(b4, a4.mode, c4), b4.return = a4, b4;
              case Ha:
                var d2 = b4._init;
                return q(a4, d2(b4._payload), c4);
            }
            if (eb(b4) || Ka(b4)) return b4 = Tg(b4, a4.mode, c4, null), b4.return = a4, b4;
            Mg(a4, b4);
          }
          return null;
        }
        function r(a4, b4, c4, d2) {
          var e2 = null !== b4 ? b4.key : null;
          if ("string" === typeof c4 && "" !== c4 || "number" === typeof c4) return null !== e2 ? null : h(a4, b4, "" + c4, d2);
          if ("object" === typeof c4 && null !== c4) {
            switch (c4.$$typeof) {
              case va:
                return c4.key === e2 ? k(a4, b4, c4, d2) : null;
              case wa:
                return c4.key === e2 ? l(a4, b4, c4, d2) : null;
              case Ha:
                return e2 = c4._init, r(
                  a4,
                  b4,
                  e2(c4._payload),
                  d2
                );
            }
            if (eb(c4) || Ka(c4)) return null !== e2 ? null : m(a4, b4, c4, d2, null);
            Mg(a4, c4);
          }
          return null;
        }
        function y(a4, b4, c4, d2, e2) {
          if ("string" === typeof d2 && "" !== d2 || "number" === typeof d2) return a4 = a4.get(c4) || null, h(b4, a4, "" + d2, e2);
          if ("object" === typeof d2 && null !== d2) {
            switch (d2.$$typeof) {
              case va:
                return a4 = a4.get(null === d2.key ? c4 : d2.key) || null, k(b4, a4, d2, e2);
              case wa:
                return a4 = a4.get(null === d2.key ? c4 : d2.key) || null, l(b4, a4, d2, e2);
              case Ha:
                var f2 = d2._init;
                return y(a4, b4, c4, f2(d2._payload), e2);
            }
            if (eb(d2) || Ka(d2)) return a4 = a4.get(c4) || null, m(b4, a4, d2, e2, null);
            Mg(b4, d2);
          }
          return null;
        }
        function n(e2, g2, h2, k2) {
          for (var l2 = null, m2 = null, u = g2, w = g2 = 0, x = null; null !== u && w < h2.length; w++) {
            u.index > w ? (x = u, u = null) : x = u.sibling;
            var n2 = r(e2, u, h2[w], k2);
            if (null === n2) {
              null === u && (u = x);
              break;
            }
            a3 && u && null === n2.alternate && b3(e2, u);
            g2 = f(n2, g2, w);
            null === m2 ? l2 = n2 : m2.sibling = n2;
            m2 = n2;
            u = x;
          }
          if (w === h2.length) return c3(e2, u), I && tg(e2, w), l2;
          if (null === u) {
            for (; w < h2.length; w++) u = q(e2, h2[w], k2), null !== u && (g2 = f(u, g2, w), null === m2 ? l2 = u : m2.sibling = u, m2 = u);
            I && tg(e2, w);
            return l2;
          }
          for (u = d(e2, u); w < h2.length; w++) x = y(u, e2, w, h2[w], k2), null !== x && (a3 && null !== x.alternate && u.delete(null === x.key ? w : x.key), g2 = f(x, g2, w), null === m2 ? l2 = x : m2.sibling = x, m2 = x);
          a3 && u.forEach(function(a4) {
            return b3(e2, a4);
          });
          I && tg(e2, w);
          return l2;
        }
        function t(e2, g2, h2, k2) {
          var l2 = Ka(h2);
          if ("function" !== typeof l2) throw Error(p(150));
          h2 = l2.call(h2);
          if (null == h2) throw Error(p(151));
          for (var u = l2 = null, m2 = g2, w = g2 = 0, x = null, n2 = h2.next(); null !== m2 && !n2.done; w++, n2 = h2.next()) {
            m2.index > w ? (x = m2, m2 = null) : x = m2.sibling;
            var t2 = r(e2, m2, n2.value, k2);
            if (null === t2) {
              null === m2 && (m2 = x);
              break;
            }
            a3 && m2 && null === t2.alternate && b3(e2, m2);
            g2 = f(t2, g2, w);
            null === u ? l2 = t2 : u.sibling = t2;
            u = t2;
            m2 = x;
          }
          if (n2.done) return c3(
            e2,
            m2
          ), I && tg(e2, w), l2;
          if (null === m2) {
            for (; !n2.done; w++, n2 = h2.next()) n2 = q(e2, n2.value, k2), null !== n2 && (g2 = f(n2, g2, w), null === u ? l2 = n2 : u.sibling = n2, u = n2);
            I && tg(e2, w);
            return l2;
          }
          for (m2 = d(e2, m2); !n2.done; w++, n2 = h2.next()) n2 = y(m2, e2, w, n2.value, k2), null !== n2 && (a3 && null !== n2.alternate && m2.delete(null === n2.key ? w : n2.key), g2 = f(n2, g2, w), null === u ? l2 = n2 : u.sibling = n2, u = n2);
          a3 && m2.forEach(function(a4) {
            return b3(e2, a4);
          });
          I && tg(e2, w);
          return l2;
        }
        function J(a4, d2, f2, h2) {
          "object" === typeof f2 && null !== f2 && f2.type === ya && null === f2.key && (f2 = f2.props.children);
          if ("object" === typeof f2 && null !== f2) {
            switch (f2.$$typeof) {
              case va:
                a: {
                  for (var k2 = f2.key, l2 = d2; null !== l2; ) {
                    if (l2.key === k2) {
                      k2 = f2.type;
                      if (k2 === ya) {
                        if (7 === l2.tag) {
                          c3(a4, l2.sibling);
                          d2 = e(l2, f2.props.children);
                          d2.return = a4;
                          a4 = d2;
                          break a;
                        }
                      } else if (l2.elementType === k2 || "object" === typeof k2 && null !== k2 && k2.$$typeof === Ha && Ng(k2) === l2.type) {
                        c3(a4, l2.sibling);
                        d2 = e(l2, f2.props);
                        d2.ref = Lg(a4, l2, f2);
                        d2.return = a4;
                        a4 = d2;
                        break a;
                      }
                      c3(a4, l2);
                      break;
                    } else b3(a4, l2);
                    l2 = l2.sibling;
                  }
                  f2.type === ya ? (d2 = Tg(f2.props.children, a4.mode, h2, f2.key), d2.return = a4, a4 = d2) : (h2 = Rg(f2.type, f2.key, f2.props, null, a4.mode, h2), h2.ref = Lg(a4, d2, f2), h2.return = a4, a4 = h2);
                }
                return g(a4);
              case wa:
                a: {
                  for (l2 = f2.key; null !== d2; ) {
                    if (d2.key === l2) if (4 === d2.tag && d2.stateNode.containerInfo === f2.containerInfo && d2.stateNode.implementation === f2.implementation) {
                      c3(a4, d2.sibling);
                      d2 = e(d2, f2.children || []);
                      d2.return = a4;
                      a4 = d2;
                      break a;
                    } else {
                      c3(a4, d2);
                      break;
                    }
                    else b3(a4, d2);
                    d2 = d2.sibling;
                  }
                  d2 = Sg(f2, a4.mode, h2);
                  d2.return = a4;
                  a4 = d2;
                }
                return g(a4);
              case Ha:
                return l2 = f2._init, J(a4, d2, l2(f2._payload), h2);
            }
            if (eb(f2)) return n(a4, d2, f2, h2);
            if (Ka(f2)) return t(a4, d2, f2, h2);
            Mg(a4, f2);
          }
          return "string" === typeof f2 && "" !== f2 || "number" === typeof f2 ? (f2 = "" + f2, null !== d2 && 6 === d2.tag ? (c3(a4, d2.sibling), d2 = e(d2, f2), d2.return = a4, a4 = d2) : (c3(a4, d2), d2 = Qg(f2, a4.mode, h2), d2.return = a4, a4 = d2), g(a4)) : c3(a4, d2);
        }
        return J;
      }
      var Ug = Og(true);
      var Vg = Og(false);
      var Wg = Uf(null);
      var Xg = null;
      var Yg = null;
      var Zg = null;
      function $g() {
        Zg = Yg = Xg = null;
      }
      function ah(a3) {
        var b3 = Wg.current;
        E(Wg);
        a3._currentValue = b3;
      }
      function bh(a3, b3, c3) {
        for (; null !== a3; ) {
          var d = a3.alternate;
          (a3.childLanes & b3) !== b3 ? (a3.childLanes |= b3, null !== d && (d.childLanes |= b3)) : null !== d && (d.childLanes & b3) !== b3 && (d.childLanes |= b3);
          if (a3 === c3) break;
          a3 = a3.return;
        }
      }
      function ch(a3, b3) {
        Xg = a3;
        Zg = Yg = null;
        a3 = a3.dependencies;
        null !== a3 && null !== a3.firstContext && (0 !== (a3.lanes & b3) && (dh = true), a3.firstContext = null);
      }
      function eh(a3) {
        var b3 = a3._currentValue;
        if (Zg !== a3) if (a3 = { context: a3, memoizedValue: b3, next: null }, null === Yg) {
          if (null === Xg) throw Error(p(308));
          Yg = a3;
          Xg.dependencies = { lanes: 0, firstContext: a3 };
        } else Yg = Yg.next = a3;
        return b3;
      }
      var fh = null;
      function gh(a3) {
        null === fh ? fh = [a3] : fh.push(a3);
      }
      function hh(a3, b3, c3, d) {
        var e = b3.interleaved;
        null === e ? (c3.next = c3, gh(b3)) : (c3.next = e.next, e.next = c3);
        b3.interleaved = c3;
        return ih(a3, d);
      }
      function ih(a3, b3) {
        a3.lanes |= b3;
        var c3 = a3.alternate;
        null !== c3 && (c3.lanes |= b3);
        c3 = a3;
        for (a3 = a3.return; null !== a3; ) a3.childLanes |= b3, c3 = a3.alternate, null !== c3 && (c3.childLanes |= b3), c3 = a3, a3 = a3.return;
        return 3 === c3.tag ? c3.stateNode : null;
      }
      var jh = false;
      function kh(a3) {
        a3.updateQueue = { baseState: a3.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
      }
      function lh(a3, b3) {
        a3 = a3.updateQueue;
        b3.updateQueue === a3 && (b3.updateQueue = { baseState: a3.baseState, firstBaseUpdate: a3.firstBaseUpdate, lastBaseUpdate: a3.lastBaseUpdate, shared: a3.shared, effects: a3.effects });
      }
      function mh(a3, b3) {
        return { eventTime: a3, lane: b3, tag: 0, payload: null, callback: null, next: null };
      }
      function nh(a3, b3, c3) {
        var d = a3.updateQueue;
        if (null === d) return null;
        d = d.shared;
        if (0 !== (K & 2)) {
          var e = d.pending;
          null === e ? b3.next = b3 : (b3.next = e.next, e.next = b3);
          d.pending = b3;
          return ih(a3, c3);
        }
        e = d.interleaved;
        null === e ? (b3.next = b3, gh(d)) : (b3.next = e.next, e.next = b3);
        d.interleaved = b3;
        return ih(a3, c3);
      }
      function oh(a3, b3, c3) {
        b3 = b3.updateQueue;
        if (null !== b3 && (b3 = b3.shared, 0 !== (c3 & 4194240))) {
          var d = b3.lanes;
          d &= a3.pendingLanes;
          c3 |= d;
          b3.lanes = c3;
          Cc(a3, c3);
        }
      }
      function ph(a3, b3) {
        var c3 = a3.updateQueue, d = a3.alternate;
        if (null !== d && (d = d.updateQueue, c3 === d)) {
          var e = null, f = null;
          c3 = c3.firstBaseUpdate;
          if (null !== c3) {
            do {
              var g = { eventTime: c3.eventTime, lane: c3.lane, tag: c3.tag, payload: c3.payload, callback: c3.callback, next: null };
              null === f ? e = f = g : f = f.next = g;
              c3 = c3.next;
            } while (null !== c3);
            null === f ? e = f = b3 : f = f.next = b3;
          } else e = f = b3;
          c3 = { baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f, shared: d.shared, effects: d.effects };
          a3.updateQueue = c3;
          return;
        }
        a3 = c3.lastBaseUpdate;
        null === a3 ? c3.firstBaseUpdate = b3 : a3.next = b3;
        c3.lastBaseUpdate = b3;
      }
      function qh(a3, b3, c3, d) {
        var e = a3.updateQueue;
        jh = false;
        var f = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
        if (null !== h) {
          e.shared.pending = null;
          var k = h, l = k.next;
          k.next = null;
          null === g ? f = l : g.next = l;
          g = k;
          var m = a3.alternate;
          null !== m && (m = m.updateQueue, h = m.lastBaseUpdate, h !== g && (null === h ? m.firstBaseUpdate = l : h.next = l, m.lastBaseUpdate = k));
        }
        if (null !== f) {
          var q = e.baseState;
          g = 0;
          m = l = k = null;
          h = f;
          do {
            var r = h.lane, y = h.eventTime;
            if ((d & r) === r) {
              null !== m && (m = m.next = {
                eventTime: y,
                lane: 0,
                tag: h.tag,
                payload: h.payload,
                callback: h.callback,
                next: null
              });
              a: {
                var n = a3, t = h;
                r = b3;
                y = c3;
                switch (t.tag) {
                  case 1:
                    n = t.payload;
                    if ("function" === typeof n) {
                      q = n.call(y, q, r);
                      break a;
                    }
                    q = n;
                    break a;
                  case 3:
                    n.flags = n.flags & -65537 | 128;
                  case 0:
                    n = t.payload;
                    r = "function" === typeof n ? n.call(y, q, r) : n;
                    if (null === r || void 0 === r) break a;
                    q = A({}, q, r);
                    break a;
                  case 2:
                    jh = true;
                }
              }
              null !== h.callback && 0 !== h.lane && (a3.flags |= 64, r = e.effects, null === r ? e.effects = [h] : r.push(h));
            } else y = { eventTime: y, lane: r, tag: h.tag, payload: h.payload, callback: h.callback, next: null }, null === m ? (l = m = y, k = q) : m = m.next = y, g |= r;
            h = h.next;
            if (null === h) if (h = e.shared.pending, null === h) break;
            else r = h, h = r.next, r.next = null, e.lastBaseUpdate = r, e.shared.pending = null;
          } while (1);
          null === m && (k = q);
          e.baseState = k;
          e.firstBaseUpdate = l;
          e.lastBaseUpdate = m;
          b3 = e.shared.interleaved;
          if (null !== b3) {
            e = b3;
            do
              g |= e.lane, e = e.next;
            while (e !== b3);
          } else null === f && (e.shared.lanes = 0);
          rh |= g;
          a3.lanes = g;
          a3.memoizedState = q;
        }
      }
      function sh(a3, b3, c3) {
        a3 = b3.effects;
        b3.effects = null;
        if (null !== a3) for (b3 = 0; b3 < a3.length; b3++) {
          var d = a3[b3], e = d.callback;
          if (null !== e) {
            d.callback = null;
            d = c3;
            if ("function" !== typeof e) throw Error(p(191, e));
            e.call(d);
          }
        }
      }
      var th = {};
      var uh = Uf(th);
      var vh = Uf(th);
      var wh = Uf(th);
      function xh(a3) {
        if (a3 === th) throw Error(p(174));
        return a3;
      }
      function yh(a3, b3) {
        G(wh, b3);
        G(vh, a3);
        G(uh, th);
        a3 = b3.nodeType;
        switch (a3) {
          case 9:
          case 11:
            b3 = (b3 = b3.documentElement) ? b3.namespaceURI : lb(null, "");
            break;
          default:
            a3 = 8 === a3 ? b3.parentNode : b3, b3 = a3.namespaceURI || null, a3 = a3.tagName, b3 = lb(b3, a3);
        }
        E(uh);
        G(uh, b3);
      }
      function zh() {
        E(uh);
        E(vh);
        E(wh);
      }
      function Ah(a3) {
        xh(wh.current);
        var b3 = xh(uh.current);
        var c3 = lb(b3, a3.type);
        b3 !== c3 && (G(vh, a3), G(uh, c3));
      }
      function Bh(a3) {
        vh.current === a3 && (E(uh), E(vh));
      }
      var L = Uf(0);
      function Ch(a3) {
        for (var b3 = a3; null !== b3; ) {
          if (13 === b3.tag) {
            var c3 = b3.memoizedState;
            if (null !== c3 && (c3 = c3.dehydrated, null === c3 || "$?" === c3.data || "$!" === c3.data)) return b3;
          } else if (19 === b3.tag && void 0 !== b3.memoizedProps.revealOrder) {
            if (0 !== (b3.flags & 128)) return b3;
          } else if (null !== b3.child) {
            b3.child.return = b3;
            b3 = b3.child;
            continue;
          }
          if (b3 === a3) break;
          for (; null === b3.sibling; ) {
            if (null === b3.return || b3.return === a3) return null;
            b3 = b3.return;
          }
          b3.sibling.return = b3.return;
          b3 = b3.sibling;
        }
        return null;
      }
      var Dh = [];
      function Eh() {
        for (var a3 = 0; a3 < Dh.length; a3++) Dh[a3]._workInProgressVersionPrimary = null;
        Dh.length = 0;
      }
      var Fh = ua.ReactCurrentDispatcher;
      var Gh = ua.ReactCurrentBatchConfig;
      var Hh = 0;
      var M = null;
      var N = null;
      var O = null;
      var Ih = false;
      var Jh = false;
      var Kh = 0;
      var Lh = 0;
      function P() {
        throw Error(p(321));
      }
      function Mh(a3, b3) {
        if (null === b3) return false;
        for (var c3 = 0; c3 < b3.length && c3 < a3.length; c3++) if (!He(a3[c3], b3[c3])) return false;
        return true;
      }
      function Nh(a3, b3, c3, d, e, f) {
        Hh = f;
        M = b3;
        b3.memoizedState = null;
        b3.updateQueue = null;
        b3.lanes = 0;
        Fh.current = null === a3 || null === a3.memoizedState ? Oh : Ph;
        a3 = c3(d, e);
        if (Jh) {
          f = 0;
          do {
            Jh = false;
            Kh = 0;
            if (25 <= f) throw Error(p(301));
            f += 1;
            O = N = null;
            b3.updateQueue = null;
            Fh.current = Qh;
            a3 = c3(d, e);
          } while (Jh);
        }
        Fh.current = Rh;
        b3 = null !== N && null !== N.next;
        Hh = 0;
        O = N = M = null;
        Ih = false;
        if (b3) throw Error(p(300));
        return a3;
      }
      function Sh() {
        var a3 = 0 !== Kh;
        Kh = 0;
        return a3;
      }
      function Th() {
        var a3 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
        null === O ? M.memoizedState = O = a3 : O = O.next = a3;
        return O;
      }
      function Uh() {
        if (null === N) {
          var a3 = M.alternate;
          a3 = null !== a3 ? a3.memoizedState : null;
        } else a3 = N.next;
        var b3 = null === O ? M.memoizedState : O.next;
        if (null !== b3) O = b3, N = a3;
        else {
          if (null === a3) throw Error(p(310));
          N = a3;
          a3 = { memoizedState: N.memoizedState, baseState: N.baseState, baseQueue: N.baseQueue, queue: N.queue, next: null };
          null === O ? M.memoizedState = O = a3 : O = O.next = a3;
        }
        return O;
      }
      function Vh(a3, b3) {
        return "function" === typeof b3 ? b3(a3) : b3;
      }
      function Wh(a3) {
        var b3 = Uh(), c3 = b3.queue;
        if (null === c3) throw Error(p(311));
        c3.lastRenderedReducer = a3;
        var d = N, e = d.baseQueue, f = c3.pending;
        if (null !== f) {
          if (null !== e) {
            var g = e.next;
            e.next = f.next;
            f.next = g;
          }
          d.baseQueue = e = f;
          c3.pending = null;
        }
        if (null !== e) {
          f = e.next;
          d = d.baseState;
          var h = g = null, k = null, l = f;
          do {
            var m = l.lane;
            if ((Hh & m) === m) null !== k && (k = k.next = { lane: 0, action: l.action, hasEagerState: l.hasEagerState, eagerState: l.eagerState, next: null }), d = l.hasEagerState ? l.eagerState : a3(d, l.action);
            else {
              var q = {
                lane: m,
                action: l.action,
                hasEagerState: l.hasEagerState,
                eagerState: l.eagerState,
                next: null
              };
              null === k ? (h = k = q, g = d) : k = k.next = q;
              M.lanes |= m;
              rh |= m;
            }
            l = l.next;
          } while (null !== l && l !== f);
          null === k ? g = d : k.next = h;
          He(d, b3.memoizedState) || (dh = true);
          b3.memoizedState = d;
          b3.baseState = g;
          b3.baseQueue = k;
          c3.lastRenderedState = d;
        }
        a3 = c3.interleaved;
        if (null !== a3) {
          e = a3;
          do
            f = e.lane, M.lanes |= f, rh |= f, e = e.next;
          while (e !== a3);
        } else null === e && (c3.lanes = 0);
        return [b3.memoizedState, c3.dispatch];
      }
      function Xh(a3) {
        var b3 = Uh(), c3 = b3.queue;
        if (null === c3) throw Error(p(311));
        c3.lastRenderedReducer = a3;
        var d = c3.dispatch, e = c3.pending, f = b3.memoizedState;
        if (null !== e) {
          c3.pending = null;
          var g = e = e.next;
          do
            f = a3(f, g.action), g = g.next;
          while (g !== e);
          He(f, b3.memoizedState) || (dh = true);
          b3.memoizedState = f;
          null === b3.baseQueue && (b3.baseState = f);
          c3.lastRenderedState = f;
        }
        return [f, d];
      }
      function Yh() {
      }
      function Zh(a3, b3) {
        var c3 = M, d = Uh(), e = b3(), f = !He(d.memoizedState, e);
        f && (d.memoizedState = e, dh = true);
        d = d.queue;
        $h(ai.bind(null, c3, d, a3), [a3]);
        if (d.getSnapshot !== b3 || f || null !== O && O.memoizedState.tag & 1) {
          c3.flags |= 2048;
          bi(9, ci.bind(null, c3, d, e, b3), void 0, null);
          if (null === Q) throw Error(p(349));
          0 !== (Hh & 30) || di(c3, b3, e);
        }
        return e;
      }
      function di(a3, b3, c3) {
        a3.flags |= 16384;
        a3 = { getSnapshot: b3, value: c3 };
        b3 = M.updateQueue;
        null === b3 ? (b3 = { lastEffect: null, stores: null }, M.updateQueue = b3, b3.stores = [a3]) : (c3 = b3.stores, null === c3 ? b3.stores = [a3] : c3.push(a3));
      }
      function ci(a3, b3, c3, d) {
        b3.value = c3;
        b3.getSnapshot = d;
        ei(b3) && fi(a3);
      }
      function ai(a3, b3, c3) {
        return c3(function() {
          ei(b3) && fi(a3);
        });
      }
      function ei(a3) {
        var b3 = a3.getSnapshot;
        a3 = a3.value;
        try {
          var c3 = b3();
          return !He(a3, c3);
        } catch (d) {
          return true;
        }
      }
      function fi(a3) {
        var b3 = ih(a3, 1);
        null !== b3 && gi(b3, a3, 1, -1);
      }
      function hi(a3) {
        var b3 = Th();
        "function" === typeof a3 && (a3 = a3());
        b3.memoizedState = b3.baseState = a3;
        a3 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vh, lastRenderedState: a3 };
        b3.queue = a3;
        a3 = a3.dispatch = ii.bind(null, M, a3);
        return [b3.memoizedState, a3];
      }
      function bi(a3, b3, c3, d) {
        a3 = { tag: a3, create: b3, destroy: c3, deps: d, next: null };
        b3 = M.updateQueue;
        null === b3 ? (b3 = { lastEffect: null, stores: null }, M.updateQueue = b3, b3.lastEffect = a3.next = a3) : (c3 = b3.lastEffect, null === c3 ? b3.lastEffect = a3.next = a3 : (d = c3.next, c3.next = a3, a3.next = d, b3.lastEffect = a3));
        return a3;
      }
      function ji() {
        return Uh().memoizedState;
      }
      function ki(a3, b3, c3, d) {
        var e = Th();
        M.flags |= a3;
        e.memoizedState = bi(1 | b3, c3, void 0, void 0 === d ? null : d);
      }
      function li(a3, b3, c3, d) {
        var e = Uh();
        d = void 0 === d ? null : d;
        var f = void 0;
        if (null !== N) {
          var g = N.memoizedState;
          f = g.destroy;
          if (null !== d && Mh(d, g.deps)) {
            e.memoizedState = bi(b3, c3, f, d);
            return;
          }
        }
        M.flags |= a3;
        e.memoizedState = bi(1 | b3, c3, f, d);
      }
      function mi(a3, b3) {
        return ki(8390656, 8, a3, b3);
      }
      function $h(a3, b3) {
        return li(2048, 8, a3, b3);
      }
      function ni(a3, b3) {
        return li(4, 2, a3, b3);
      }
      function oi(a3, b3) {
        return li(4, 4, a3, b3);
      }
      function pi(a3, b3) {
        if ("function" === typeof b3) return a3 = a3(), b3(a3), function() {
          b3(null);
        };
        if (null !== b3 && void 0 !== b3) return a3 = a3(), b3.current = a3, function() {
          b3.current = null;
        };
      }
      function qi(a3, b3, c3) {
        c3 = null !== c3 && void 0 !== c3 ? c3.concat([a3]) : null;
        return li(4, 4, pi.bind(null, b3, a3), c3);
      }
      function ri() {
      }
      function si(a3, b3) {
        var c3 = Uh();
        b3 = void 0 === b3 ? null : b3;
        var d = c3.memoizedState;
        if (null !== d && null !== b3 && Mh(b3, d[1])) return d[0];
        c3.memoizedState = [a3, b3];
        return a3;
      }
      function ti(a3, b3) {
        var c3 = Uh();
        b3 = void 0 === b3 ? null : b3;
        var d = c3.memoizedState;
        if (null !== d && null !== b3 && Mh(b3, d[1])) return d[0];
        a3 = a3();
        c3.memoizedState = [a3, b3];
        return a3;
      }
      function ui(a3, b3, c3) {
        if (0 === (Hh & 21)) return a3.baseState && (a3.baseState = false, dh = true), a3.memoizedState = c3;
        He(c3, b3) || (c3 = yc(), M.lanes |= c3, rh |= c3, a3.baseState = true);
        return b3;
      }
      function vi(a3, b3) {
        var c3 = C;
        C = 0 !== c3 && 4 > c3 ? c3 : 4;
        a3(true);
        var d = Gh.transition;
        Gh.transition = {};
        try {
          a3(false), b3();
        } finally {
          C = c3, Gh.transition = d;
        }
      }
      function wi() {
        return Uh().memoizedState;
      }
      function xi(a3, b3, c3) {
        var d = yi(a3);
        c3 = { lane: d, action: c3, hasEagerState: false, eagerState: null, next: null };
        if (zi(a3)) Ai(b3, c3);
        else if (c3 = hh(a3, b3, c3, d), null !== c3) {
          var e = R();
          gi(c3, a3, d, e);
          Bi(c3, b3, d);
        }
      }
      function ii(a3, b3, c3) {
        var d = yi(a3), e = { lane: d, action: c3, hasEagerState: false, eagerState: null, next: null };
        if (zi(a3)) Ai(b3, e);
        else {
          var f = a3.alternate;
          if (0 === a3.lanes && (null === f || 0 === f.lanes) && (f = b3.lastRenderedReducer, null !== f)) try {
            var g = b3.lastRenderedState, h = f(g, c3);
            e.hasEagerState = true;
            e.eagerState = h;
            if (He(h, g)) {
              var k = b3.interleaved;
              null === k ? (e.next = e, gh(b3)) : (e.next = k.next, k.next = e);
              b3.interleaved = e;
              return;
            }
          } catch (l) {
          } finally {
          }
          c3 = hh(a3, b3, e, d);
          null !== c3 && (e = R(), gi(c3, a3, d, e), Bi(c3, b3, d));
        }
      }
      function zi(a3) {
        var b3 = a3.alternate;
        return a3 === M || null !== b3 && b3 === M;
      }
      function Ai(a3, b3) {
        Jh = Ih = true;
        var c3 = a3.pending;
        null === c3 ? b3.next = b3 : (b3.next = c3.next, c3.next = b3);
        a3.pending = b3;
      }
      function Bi(a3, b3, c3) {
        if (0 !== (c3 & 4194240)) {
          var d = b3.lanes;
          d &= a3.pendingLanes;
          c3 |= d;
          b3.lanes = c3;
          Cc(a3, c3);
        }
      }
      var Rh = { readContext: eh, useCallback: P, useContext: P, useEffect: P, useImperativeHandle: P, useInsertionEffect: P, useLayoutEffect: P, useMemo: P, useReducer: P, useRef: P, useState: P, useDebugValue: P, useDeferredValue: P, useTransition: P, useMutableSource: P, useSyncExternalStore: P, useId: P, unstable_isNewReconciler: false };
      var Oh = { readContext: eh, useCallback: function(a3, b3) {
        Th().memoizedState = [a3, void 0 === b3 ? null : b3];
        return a3;
      }, useContext: eh, useEffect: mi, useImperativeHandle: function(a3, b3, c3) {
        c3 = null !== c3 && void 0 !== c3 ? c3.concat([a3]) : null;
        return ki(
          4194308,
          4,
          pi.bind(null, b3, a3),
          c3
        );
      }, useLayoutEffect: function(a3, b3) {
        return ki(4194308, 4, a3, b3);
      }, useInsertionEffect: function(a3, b3) {
        return ki(4, 2, a3, b3);
      }, useMemo: function(a3, b3) {
        var c3 = Th();
        b3 = void 0 === b3 ? null : b3;
        a3 = a3();
        c3.memoizedState = [a3, b3];
        return a3;
      }, useReducer: function(a3, b3, c3) {
        var d = Th();
        b3 = void 0 !== c3 ? c3(b3) : b3;
        d.memoizedState = d.baseState = b3;
        a3 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a3, lastRenderedState: b3 };
        d.queue = a3;
        a3 = a3.dispatch = xi.bind(null, M, a3);
        return [d.memoizedState, a3];
      }, useRef: function(a3) {
        var b3 = Th();
        a3 = { current: a3 };
        return b3.memoizedState = a3;
      }, useState: hi, useDebugValue: ri, useDeferredValue: function(a3) {
        return Th().memoizedState = a3;
      }, useTransition: function() {
        var a3 = hi(false), b3 = a3[0];
        a3 = vi.bind(null, a3[1]);
        Th().memoizedState = a3;
        return [b3, a3];
      }, useMutableSource: function() {
      }, useSyncExternalStore: function(a3, b3, c3) {
        var d = M, e = Th();
        if (I) {
          if (void 0 === c3) throw Error(p(407));
          c3 = c3();
        } else {
          c3 = b3();
          if (null === Q) throw Error(p(349));
          0 !== (Hh & 30) || di(d, b3, c3);
        }
        e.memoizedState = c3;
        var f = { value: c3, getSnapshot: b3 };
        e.queue = f;
        mi(ai.bind(
          null,
          d,
          f,
          a3
        ), [a3]);
        d.flags |= 2048;
        bi(9, ci.bind(null, d, f, c3, b3), void 0, null);
        return c3;
      }, useId: function() {
        var a3 = Th(), b3 = Q.identifierPrefix;
        if (I) {
          var c3 = sg;
          var d = rg;
          c3 = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c3;
          b3 = ":" + b3 + "R" + c3;
          c3 = Kh++;
          0 < c3 && (b3 += "H" + c3.toString(32));
          b3 += ":";
        } else c3 = Lh++, b3 = ":" + b3 + "r" + c3.toString(32) + ":";
        return a3.memoizedState = b3;
      }, unstable_isNewReconciler: false };
      var Ph = {
        readContext: eh,
        useCallback: si,
        useContext: eh,
        useEffect: $h,
        useImperativeHandle: qi,
        useInsertionEffect: ni,
        useLayoutEffect: oi,
        useMemo: ti,
        useReducer: Wh,
        useRef: ji,
        useState: function() {
          return Wh(Vh);
        },
        useDebugValue: ri,
        useDeferredValue: function(a3) {
          var b3 = Uh();
          return ui(b3, N.memoizedState, a3);
        },
        useTransition: function() {
          var a3 = Wh(Vh)[0], b3 = Uh().memoizedState;
          return [a3, b3];
        },
        useMutableSource: Yh,
        useSyncExternalStore: Zh,
        useId: wi,
        unstable_isNewReconciler: false
      };
      var Qh = { readContext: eh, useCallback: si, useContext: eh, useEffect: $h, useImperativeHandle: qi, useInsertionEffect: ni, useLayoutEffect: oi, useMemo: ti, useReducer: Xh, useRef: ji, useState: function() {
        return Xh(Vh);
      }, useDebugValue: ri, useDeferredValue: function(a3) {
        var b3 = Uh();
        return null === N ? b3.memoizedState = a3 : ui(b3, N.memoizedState, a3);
      }, useTransition: function() {
        var a3 = Xh(Vh)[0], b3 = Uh().memoizedState;
        return [a3, b3];
      }, useMutableSource: Yh, useSyncExternalStore: Zh, useId: wi, unstable_isNewReconciler: false };
      function Ci(a3, b3) {
        if (a3 && a3.defaultProps) {
          b3 = A({}, b3);
          a3 = a3.defaultProps;
          for (var c3 in a3) void 0 === b3[c3] && (b3[c3] = a3[c3]);
          return b3;
        }
        return b3;
      }
      function Di(a3, b3, c3, d) {
        b3 = a3.memoizedState;
        c3 = c3(d, b3);
        c3 = null === c3 || void 0 === c3 ? b3 : A({}, b3, c3);
        a3.memoizedState = c3;
        0 === a3.lanes && (a3.updateQueue.baseState = c3);
      }
      var Ei = { isMounted: function(a3) {
        return (a3 = a3._reactInternals) ? Vb(a3) === a3 : false;
      }, enqueueSetState: function(a3, b3, c3) {
        a3 = a3._reactInternals;
        var d = R(), e = yi(a3), f = mh(d, e);
        f.payload = b3;
        void 0 !== c3 && null !== c3 && (f.callback = c3);
        b3 = nh(a3, f, e);
        null !== b3 && (gi(b3, a3, e, d), oh(b3, a3, e));
      }, enqueueReplaceState: function(a3, b3, c3) {
        a3 = a3._reactInternals;
        var d = R(), e = yi(a3), f = mh(d, e);
        f.tag = 1;
        f.payload = b3;
        void 0 !== c3 && null !== c3 && (f.callback = c3);
        b3 = nh(a3, f, e);
        null !== b3 && (gi(b3, a3, e, d), oh(b3, a3, e));
      }, enqueueForceUpdate: function(a3, b3) {
        a3 = a3._reactInternals;
        var c3 = R(), d = yi(a3), e = mh(c3, d);
        e.tag = 2;
        void 0 !== b3 && null !== b3 && (e.callback = b3);
        b3 = nh(a3, e, d);
        null !== b3 && (gi(b3, a3, d, c3), oh(b3, a3, d));
      } };
      function Fi(a3, b3, c3, d, e, f, g) {
        a3 = a3.stateNode;
        return "function" === typeof a3.shouldComponentUpdate ? a3.shouldComponentUpdate(d, f, g) : b3.prototype && b3.prototype.isPureReactComponent ? !Ie(c3, d) || !Ie(e, f) : true;
      }
      function Gi(a3, b3, c3) {
        var d = false, e = Vf;
        var f = b3.contextType;
        "object" === typeof f && null !== f ? f = eh(f) : (e = Zf(b3) ? Xf : H.current, d = b3.contextTypes, f = (d = null !== d && void 0 !== d) ? Yf(a3, e) : Vf);
        b3 = new b3(c3, f);
        a3.memoizedState = null !== b3.state && void 0 !== b3.state ? b3.state : null;
        b3.updater = Ei;
        a3.stateNode = b3;
        b3._reactInternals = a3;
        d && (a3 = a3.stateNode, a3.__reactInternalMemoizedUnmaskedChildContext = e, a3.__reactInternalMemoizedMaskedChildContext = f);
        return b3;
      }
      function Hi(a3, b3, c3, d) {
        a3 = b3.state;
        "function" === typeof b3.componentWillReceiveProps && b3.componentWillReceiveProps(c3, d);
        "function" === typeof b3.UNSAFE_componentWillReceiveProps && b3.UNSAFE_componentWillReceiveProps(c3, d);
        b3.state !== a3 && Ei.enqueueReplaceState(b3, b3.state, null);
      }
      function Ii(a3, b3, c3, d) {
        var e = a3.stateNode;
        e.props = c3;
        e.state = a3.memoizedState;
        e.refs = {};
        kh(a3);
        var f = b3.contextType;
        "object" === typeof f && null !== f ? e.context = eh(f) : (f = Zf(b3) ? Xf : H.current, e.context = Yf(a3, f));
        e.state = a3.memoizedState;
        f = b3.getDerivedStateFromProps;
        "function" === typeof f && (Di(a3, b3, f, c3), e.state = a3.memoizedState);
        "function" === typeof b3.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b3 = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b3 !== e.state && Ei.enqueueReplaceState(e, e.state, null), qh(a3, c3, e, d), e.state = a3.memoizedState);
        "function" === typeof e.componentDidMount && (a3.flags |= 4194308);
      }
      function Ji(a3, b3) {
        try {
          var c3 = "", d = b3;
          do
            c3 += Pa(d), d = d.return;
          while (d);
          var e = c3;
        } catch (f) {
          e = "\nError generating stack: " + f.message + "\n" + f.stack;
        }
        return { value: a3, source: b3, stack: e, digest: null };
      }
      function Ki(a3, b3, c3) {
        return { value: a3, source: null, stack: null != c3 ? c3 : null, digest: null != b3 ? b3 : null };
      }
      function Li(a3, b3) {
        try {
          console.error(b3.value);
        } catch (c3) {
          setTimeout(function() {
            throw c3;
          });
        }
      }
      var Mi = "function" === typeof WeakMap ? WeakMap : Map;
      function Ni(a3, b3, c3) {
        c3 = mh(-1, c3);
        c3.tag = 3;
        c3.payload = { element: null };
        var d = b3.value;
        c3.callback = function() {
          Oi || (Oi = true, Pi = d);
          Li(a3, b3);
        };
        return c3;
      }
      function Qi(a3, b3, c3) {
        c3 = mh(-1, c3);
        c3.tag = 3;
        var d = a3.type.getDerivedStateFromError;
        if ("function" === typeof d) {
          var e = b3.value;
          c3.payload = function() {
            return d(e);
          };
          c3.callback = function() {
            Li(a3, b3);
          };
        }
        var f = a3.stateNode;
        null !== f && "function" === typeof f.componentDidCatch && (c3.callback = function() {
          Li(a3, b3);
          "function" !== typeof d && (null === Ri ? Ri = /* @__PURE__ */ new Set([this]) : Ri.add(this));
          var c4 = b3.stack;
          this.componentDidCatch(b3.value, { componentStack: null !== c4 ? c4 : "" });
        });
        return c3;
      }
      function Si(a3, b3, c3) {
        var d = a3.pingCache;
        if (null === d) {
          d = a3.pingCache = new Mi();
          var e = /* @__PURE__ */ new Set();
          d.set(b3, e);
        } else e = d.get(b3), void 0 === e && (e = /* @__PURE__ */ new Set(), d.set(b3, e));
        e.has(c3) || (e.add(c3), a3 = Ti.bind(null, a3, b3, c3), b3.then(a3, a3));
      }
      function Ui(a3) {
        do {
          var b3;
          if (b3 = 13 === a3.tag) b3 = a3.memoizedState, b3 = null !== b3 ? null !== b3.dehydrated ? true : false : true;
          if (b3) return a3;
          a3 = a3.return;
        } while (null !== a3);
        return null;
      }
      function Vi(a3, b3, c3, d, e) {
        if (0 === (a3.mode & 1)) return a3 === b3 ? a3.flags |= 65536 : (a3.flags |= 128, c3.flags |= 131072, c3.flags &= -52805, 1 === c3.tag && (null === c3.alternate ? c3.tag = 17 : (b3 = mh(-1, 1), b3.tag = 2, nh(c3, b3, 1))), c3.lanes |= 1), a3;
        a3.flags |= 65536;
        a3.lanes = e;
        return a3;
      }
      var Wi = ua.ReactCurrentOwner;
      var dh = false;
      function Xi(a3, b3, c3, d) {
        b3.child = null === a3 ? Vg(b3, null, c3, d) : Ug(b3, a3.child, c3, d);
      }
      function Yi(a3, b3, c3, d, e) {
        c3 = c3.render;
        var f = b3.ref;
        ch(b3, e);
        d = Nh(a3, b3, c3, d, f, e);
        c3 = Sh();
        if (null !== a3 && !dh) return b3.updateQueue = a3.updateQueue, b3.flags &= -2053, a3.lanes &= ~e, Zi(a3, b3, e);
        I && c3 && vg(b3);
        b3.flags |= 1;
        Xi(a3, b3, d, e);
        return b3.child;
      }
      function $i(a3, b3, c3, d, e) {
        if (null === a3) {
          var f = c3.type;
          if ("function" === typeof f && !aj(f) && void 0 === f.defaultProps && null === c3.compare && void 0 === c3.defaultProps) return b3.tag = 15, b3.type = f, bj(a3, b3, f, d, e);
          a3 = Rg(c3.type, null, d, b3, b3.mode, e);
          a3.ref = b3.ref;
          a3.return = b3;
          return b3.child = a3;
        }
        f = a3.child;
        if (0 === (a3.lanes & e)) {
          var g = f.memoizedProps;
          c3 = c3.compare;
          c3 = null !== c3 ? c3 : Ie;
          if (c3(g, d) && a3.ref === b3.ref) return Zi(a3, b3, e);
        }
        b3.flags |= 1;
        a3 = Pg(f, d);
        a3.ref = b3.ref;
        a3.return = b3;
        return b3.child = a3;
      }
      function bj(a3, b3, c3, d, e) {
        if (null !== a3) {
          var f = a3.memoizedProps;
          if (Ie(f, d) && a3.ref === b3.ref) if (dh = false, b3.pendingProps = d = f, 0 !== (a3.lanes & e)) 0 !== (a3.flags & 131072) && (dh = true);
          else return b3.lanes = a3.lanes, Zi(a3, b3, e);
        }
        return cj(a3, b3, c3, d, e);
      }
      function dj(a3, b3, c3) {
        var d = b3.pendingProps, e = d.children, f = null !== a3 ? a3.memoizedState : null;
        if ("hidden" === d.mode) if (0 === (b3.mode & 1)) b3.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(ej, fj), fj |= c3;
        else {
          if (0 === (c3 & 1073741824)) return a3 = null !== f ? f.baseLanes | c3 : c3, b3.lanes = b3.childLanes = 1073741824, b3.memoizedState = { baseLanes: a3, cachePool: null, transitions: null }, b3.updateQueue = null, G(ej, fj), fj |= a3, null;
          b3.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
          d = null !== f ? f.baseLanes : c3;
          G(ej, fj);
          fj |= d;
        }
        else null !== f ? (d = f.baseLanes | c3, b3.memoizedState = null) : d = c3, G(ej, fj), fj |= d;
        Xi(a3, b3, e, c3);
        return b3.child;
      }
      function gj(a3, b3) {
        var c3 = b3.ref;
        if (null === a3 && null !== c3 || null !== a3 && a3.ref !== c3) b3.flags |= 512, b3.flags |= 2097152;
      }
      function cj(a3, b3, c3, d, e) {
        var f = Zf(c3) ? Xf : H.current;
        f = Yf(b3, f);
        ch(b3, e);
        c3 = Nh(a3, b3, c3, d, f, e);
        d = Sh();
        if (null !== a3 && !dh) return b3.updateQueue = a3.updateQueue, b3.flags &= -2053, a3.lanes &= ~e, Zi(a3, b3, e);
        I && d && vg(b3);
        b3.flags |= 1;
        Xi(a3, b3, c3, e);
        return b3.child;
      }
      function hj(a3, b3, c3, d, e) {
        if (Zf(c3)) {
          var f = true;
          cg(b3);
        } else f = false;
        ch(b3, e);
        if (null === b3.stateNode) ij(a3, b3), Gi(b3, c3, d), Ii(b3, c3, d, e), d = true;
        else if (null === a3) {
          var g = b3.stateNode, h = b3.memoizedProps;
          g.props = h;
          var k = g.context, l = c3.contextType;
          "object" === typeof l && null !== l ? l = eh(l) : (l = Zf(c3) ? Xf : H.current, l = Yf(b3, l));
          var m = c3.getDerivedStateFromProps, q = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate;
          q || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && Hi(b3, g, d, l);
          jh = false;
          var r = b3.memoizedState;
          g.state = r;
          qh(b3, d, g, e);
          k = b3.memoizedState;
          h !== d || r !== k || Wf.current || jh ? ("function" === typeof m && (Di(b3, c3, m, d), k = b3.memoizedState), (h = jh || Fi(b3, c3, h, d, r, k, l)) ? (q || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b3.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b3.flags |= 4194308), b3.memoizedProps = d, b3.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b3.flags |= 4194308), d = false);
        } else {
          g = b3.stateNode;
          lh(a3, b3);
          h = b3.memoizedProps;
          l = b3.type === b3.elementType ? h : Ci(b3.type, h);
          g.props = l;
          q = b3.pendingProps;
          r = g.context;
          k = c3.contextType;
          "object" === typeof k && null !== k ? k = eh(k) : (k = Zf(c3) ? Xf : H.current, k = Yf(b3, k));
          var y = c3.getDerivedStateFromProps;
          (m = "function" === typeof y || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q || r !== k) && Hi(b3, g, d, k);
          jh = false;
          r = b3.memoizedState;
          g.state = r;
          qh(b3, d, g, e);
          var n = b3.memoizedState;
          h !== q || r !== n || Wf.current || jh ? ("function" === typeof y && (Di(b3, c3, y, d), n = b3.memoizedState), (l = jh || Fi(b3, c3, l, d, r, n, k) || false) ? (m || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n, k), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n, k)), "function" === typeof g.componentDidUpdate && (b3.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b3.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a3.memoizedProps && r === a3.memoizedState || (b3.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a3.memoizedProps && r === a3.memoizedState || (b3.flags |= 1024), b3.memoizedProps = d, b3.memoizedState = n), g.props = d, g.state = n, g.context = k, d = l) : ("function" !== typeof g.componentDidUpdate || h === a3.memoizedProps && r === a3.memoizedState || (b3.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a3.memoizedProps && r === a3.memoizedState || (b3.flags |= 1024), d = false);
        }
        return jj(a3, b3, c3, d, f, e);
      }
      function jj(a3, b3, c3, d, e, f) {
        gj(a3, b3);
        var g = 0 !== (b3.flags & 128);
        if (!d && !g) return e && dg(b3, c3, false), Zi(a3, b3, f);
        d = b3.stateNode;
        Wi.current = b3;
        var h = g && "function" !== typeof c3.getDerivedStateFromError ? null : d.render();
        b3.flags |= 1;
        null !== a3 && g ? (b3.child = Ug(b3, a3.child, null, f), b3.child = Ug(b3, null, h, f)) : Xi(a3, b3, h, f);
        b3.memoizedState = d.state;
        e && dg(b3, c3, true);
        return b3.child;
      }
      function kj(a3) {
        var b3 = a3.stateNode;
        b3.pendingContext ? ag(a3, b3.pendingContext, b3.pendingContext !== b3.context) : b3.context && ag(a3, b3.context, false);
        yh(a3, b3.containerInfo);
      }
      function lj(a3, b3, c3, d, e) {
        Ig();
        Jg(e);
        b3.flags |= 256;
        Xi(a3, b3, c3, d);
        return b3.child;
      }
      var mj = { dehydrated: null, treeContext: null, retryLane: 0 };
      function nj(a3) {
        return { baseLanes: a3, cachePool: null, transitions: null };
      }
      function oj(a3, b3, c3) {
        var d = b3.pendingProps, e = L.current, f = false, g = 0 !== (b3.flags & 128), h;
        (h = g) || (h = null !== a3 && null === a3.memoizedState ? false : 0 !== (e & 2));
        if (h) f = true, b3.flags &= -129;
        else if (null === a3 || null !== a3.memoizedState) e |= 1;
        G(L, e & 1);
        if (null === a3) {
          Eg(b3);
          a3 = b3.memoizedState;
          if (null !== a3 && (a3 = a3.dehydrated, null !== a3)) return 0 === (b3.mode & 1) ? b3.lanes = 1 : "$!" === a3.data ? b3.lanes = 8 : b3.lanes = 1073741824, null;
          g = d.children;
          a3 = d.fallback;
          return f ? (d = b3.mode, f = b3.child, g = { mode: "hidden", children: g }, 0 === (d & 1) && null !== f ? (f.childLanes = 0, f.pendingProps = g) : f = pj(g, d, 0, null), a3 = Tg(a3, d, c3, null), f.return = b3, a3.return = b3, f.sibling = a3, b3.child = f, b3.child.memoizedState = nj(c3), b3.memoizedState = mj, a3) : qj(b3, g);
        }
        e = a3.memoizedState;
        if (null !== e && (h = e.dehydrated, null !== h)) return rj(a3, b3, g, d, h, e, c3);
        if (f) {
          f = d.fallback;
          g = b3.mode;
          e = a3.child;
          h = e.sibling;
          var k = { mode: "hidden", children: d.children };
          0 === (g & 1) && b3.child !== e ? (d = b3.child, d.childLanes = 0, d.pendingProps = k, b3.deletions = null) : (d = Pg(e, k), d.subtreeFlags = e.subtreeFlags & 14680064);
          null !== h ? f = Pg(h, f) : (f = Tg(f, g, c3, null), f.flags |= 2);
          f.return = b3;
          d.return = b3;
          d.sibling = f;
          b3.child = d;
          d = f;
          f = b3.child;
          g = a3.child.memoizedState;
          g = null === g ? nj(c3) : { baseLanes: g.baseLanes | c3, cachePool: null, transitions: g.transitions };
          f.memoizedState = g;
          f.childLanes = a3.childLanes & ~c3;
          b3.memoizedState = mj;
          return d;
        }
        f = a3.child;
        a3 = f.sibling;
        d = Pg(f, { mode: "visible", children: d.children });
        0 === (b3.mode & 1) && (d.lanes = c3);
        d.return = b3;
        d.sibling = null;
        null !== a3 && (c3 = b3.deletions, null === c3 ? (b3.deletions = [a3], b3.flags |= 16) : c3.push(a3));
        b3.child = d;
        b3.memoizedState = null;
        return d;
      }
      function qj(a3, b3) {
        b3 = pj({ mode: "visible", children: b3 }, a3.mode, 0, null);
        b3.return = a3;
        return a3.child = b3;
      }
      function sj(a3, b3, c3, d) {
        null !== d && Jg(d);
        Ug(b3, a3.child, null, c3);
        a3 = qj(b3, b3.pendingProps.children);
        a3.flags |= 2;
        b3.memoizedState = null;
        return a3;
      }
      function rj(a3, b3, c3, d, e, f, g) {
        if (c3) {
          if (b3.flags & 256) return b3.flags &= -257, d = Ki(Error(p(422))), sj(a3, b3, g, d);
          if (null !== b3.memoizedState) return b3.child = a3.child, b3.flags |= 128, null;
          f = d.fallback;
          e = b3.mode;
          d = pj({ mode: "visible", children: d.children }, e, 0, null);
          f = Tg(f, e, g, null);
          f.flags |= 2;
          d.return = b3;
          f.return = b3;
          d.sibling = f;
          b3.child = d;
          0 !== (b3.mode & 1) && Ug(b3, a3.child, null, g);
          b3.child.memoizedState = nj(g);
          b3.memoizedState = mj;
          return f;
        }
        if (0 === (b3.mode & 1)) return sj(a3, b3, g, null);
        if ("$!" === e.data) {
          d = e.nextSibling && e.nextSibling.dataset;
          if (d) var h = d.dgst;
          d = h;
          f = Error(p(419));
          d = Ki(f, d, void 0);
          return sj(a3, b3, g, d);
        }
        h = 0 !== (g & a3.childLanes);
        if (dh || h) {
          d = Q;
          if (null !== d) {
            switch (g & -g) {
              case 4:
                e = 2;
                break;
              case 16:
                e = 8;
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
                e = 32;
                break;
              case 536870912:
                e = 268435456;
                break;
              default:
                e = 0;
            }
            e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
            0 !== e && e !== f.retryLane && (f.retryLane = e, ih(a3, e), gi(d, a3, e, -1));
          }
          tj();
          d = Ki(Error(p(421)));
          return sj(a3, b3, g, d);
        }
        if ("$?" === e.data) return b3.flags |= 128, b3.child = a3.child, b3 = uj.bind(null, a3), e._reactRetry = b3, null;
        a3 = f.treeContext;
        yg = Lf(e.nextSibling);
        xg = b3;
        I = true;
        zg = null;
        null !== a3 && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a3.id, sg = a3.overflow, qg = b3);
        b3 = qj(b3, d.children);
        b3.flags |= 4096;
        return b3;
      }
      function vj(a3, b3, c3) {
        a3.lanes |= b3;
        var d = a3.alternate;
        null !== d && (d.lanes |= b3);
        bh(a3.return, b3, c3);
      }
      function wj(a3, b3, c3, d, e) {
        var f = a3.memoizedState;
        null === f ? a3.memoizedState = { isBackwards: b3, rendering: null, renderingStartTime: 0, last: d, tail: c3, tailMode: e } : (f.isBackwards = b3, f.rendering = null, f.renderingStartTime = 0, f.last = d, f.tail = c3, f.tailMode = e);
      }
      function xj(a3, b3, c3) {
        var d = b3.pendingProps, e = d.revealOrder, f = d.tail;
        Xi(a3, b3, d.children, c3);
        d = L.current;
        if (0 !== (d & 2)) d = d & 1 | 2, b3.flags |= 128;
        else {
          if (null !== a3 && 0 !== (a3.flags & 128)) a: for (a3 = b3.child; null !== a3; ) {
            if (13 === a3.tag) null !== a3.memoizedState && vj(a3, c3, b3);
            else if (19 === a3.tag) vj(a3, c3, b3);
            else if (null !== a3.child) {
              a3.child.return = a3;
              a3 = a3.child;
              continue;
            }
            if (a3 === b3) break a;
            for (; null === a3.sibling; ) {
              if (null === a3.return || a3.return === b3) break a;
              a3 = a3.return;
            }
            a3.sibling.return = a3.return;
            a3 = a3.sibling;
          }
          d &= 1;
        }
        G(L, d);
        if (0 === (b3.mode & 1)) b3.memoizedState = null;
        else switch (e) {
          case "forwards":
            c3 = b3.child;
            for (e = null; null !== c3; ) a3 = c3.alternate, null !== a3 && null === Ch(a3) && (e = c3), c3 = c3.sibling;
            c3 = e;
            null === c3 ? (e = b3.child, b3.child = null) : (e = c3.sibling, c3.sibling = null);
            wj(b3, false, e, c3, f);
            break;
          case "backwards":
            c3 = null;
            e = b3.child;
            for (b3.child = null; null !== e; ) {
              a3 = e.alternate;
              if (null !== a3 && null === Ch(a3)) {
                b3.child = e;
                break;
              }
              a3 = e.sibling;
              e.sibling = c3;
              c3 = e;
              e = a3;
            }
            wj(b3, true, c3, null, f);
            break;
          case "together":
            wj(b3, false, null, null, void 0);
            break;
          default:
            b3.memoizedState = null;
        }
        return b3.child;
      }
      function ij(a3, b3) {
        0 === (b3.mode & 1) && null !== a3 && (a3.alternate = null, b3.alternate = null, b3.flags |= 2);
      }
      function Zi(a3, b3, c3) {
        null !== a3 && (b3.dependencies = a3.dependencies);
        rh |= b3.lanes;
        if (0 === (c3 & b3.childLanes)) return null;
        if (null !== a3 && b3.child !== a3.child) throw Error(p(153));
        if (null !== b3.child) {
          a3 = b3.child;
          c3 = Pg(a3, a3.pendingProps);
          b3.child = c3;
          for (c3.return = b3; null !== a3.sibling; ) a3 = a3.sibling, c3 = c3.sibling = Pg(a3, a3.pendingProps), c3.return = b3;
          c3.sibling = null;
        }
        return b3.child;
      }
      function yj(a3, b3, c3) {
        switch (b3.tag) {
          case 3:
            kj(b3);
            Ig();
            break;
          case 5:
            Ah(b3);
            break;
          case 1:
            Zf(b3.type) && cg(b3);
            break;
          case 4:
            yh(b3, b3.stateNode.containerInfo);
            break;
          case 10:
            var d = b3.type._context, e = b3.memoizedProps.value;
            G(Wg, d._currentValue);
            d._currentValue = e;
            break;
          case 13:
            d = b3.memoizedState;
            if (null !== d) {
              if (null !== d.dehydrated) return G(L, L.current & 1), b3.flags |= 128, null;
              if (0 !== (c3 & b3.child.childLanes)) return oj(a3, b3, c3);
              G(L, L.current & 1);
              a3 = Zi(a3, b3, c3);
              return null !== a3 ? a3.sibling : null;
            }
            G(L, L.current & 1);
            break;
          case 19:
            d = 0 !== (c3 & b3.childLanes);
            if (0 !== (a3.flags & 128)) {
              if (d) return xj(a3, b3, c3);
              b3.flags |= 128;
            }
            e = b3.memoizedState;
            null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
            G(L, L.current);
            if (d) break;
            else return null;
          case 22:
          case 23:
            return b3.lanes = 0, dj(a3, b3, c3);
        }
        return Zi(a3, b3, c3);
      }
      var zj;
      var Aj;
      var Bj;
      var Cj;
      zj = function(a3, b3) {
        for (var c3 = b3.child; null !== c3; ) {
          if (5 === c3.tag || 6 === c3.tag) a3.appendChild(c3.stateNode);
          else if (4 !== c3.tag && null !== c3.child) {
            c3.child.return = c3;
            c3 = c3.child;
            continue;
          }
          if (c3 === b3) break;
          for (; null === c3.sibling; ) {
            if (null === c3.return || c3.return === b3) return;
            c3 = c3.return;
          }
          c3.sibling.return = c3.return;
          c3 = c3.sibling;
        }
      };
      Aj = function() {
      };
      Bj = function(a3, b3, c3, d) {
        var e = a3.memoizedProps;
        if (e !== d) {
          a3 = b3.stateNode;
          xh(uh.current);
          var f = null;
          switch (c3) {
            case "input":
              e = Ya(a3, e);
              d = Ya(a3, d);
              f = [];
              break;
            case "select":
              e = A({}, e, { value: void 0 });
              d = A({}, d, { value: void 0 });
              f = [];
              break;
            case "textarea":
              e = gb(a3, e);
              d = gb(a3, d);
              f = [];
              break;
            default:
              "function" !== typeof e.onClick && "function" === typeof d.onClick && (a3.onclick = Bf);
          }
          ub(c3, d);
          var g;
          c3 = null;
          for (l in e) if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && null != e[l]) if ("style" === l) {
            var h = e[l];
            for (g in h) h.hasOwnProperty(g) && (c3 || (c3 = {}), c3[g] = "");
          } else "dangerouslySetInnerHTML" !== l && "children" !== l && "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (ea.hasOwnProperty(l) ? f || (f = []) : (f = f || []).push(l, null));
          for (l in d) {
            var k = d[l];
            h = null != e ? e[l] : void 0;
            if (d.hasOwnProperty(l) && k !== h && (null != k || null != h)) if ("style" === l) if (h) {
              for (g in h) !h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c3 || (c3 = {}), c3[g] = "");
              for (g in k) k.hasOwnProperty(g) && h[g] !== k[g] && (c3 || (c3 = {}), c3[g] = k[g]);
            } else c3 || (f || (f = []), f.push(
              l,
              c3
            )), c3 = k;
            else "dangerouslySetInnerHTML" === l ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, null != k && h !== k && (f = f || []).push(l, k)) : "children" === l ? "string" !== typeof k && "number" !== typeof k || (f = f || []).push(l, "" + k) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && (ea.hasOwnProperty(l) ? (null != k && "onScroll" === l && D("scroll", a3), f || h === k || (f = [])) : (f = f || []).push(l, k));
          }
          c3 && (f = f || []).push("style", c3);
          var l = f;
          if (b3.updateQueue = l) b3.flags |= 4;
        }
      };
      Cj = function(a3, b3, c3, d) {
        c3 !== d && (b3.flags |= 4);
      };
      function Dj(a3, b3) {
        if (!I) switch (a3.tailMode) {
          case "hidden":
            b3 = a3.tail;
            for (var c3 = null; null !== b3; ) null !== b3.alternate && (c3 = b3), b3 = b3.sibling;
            null === c3 ? a3.tail = null : c3.sibling = null;
            break;
          case "collapsed":
            c3 = a3.tail;
            for (var d = null; null !== c3; ) null !== c3.alternate && (d = c3), c3 = c3.sibling;
            null === d ? b3 || null === a3.tail ? a3.tail = null : a3.tail.sibling = null : d.sibling = null;
        }
      }
      function S(a3) {
        var b3 = null !== a3.alternate && a3.alternate.child === a3.child, c3 = 0, d = 0;
        if (b3) for (var e = a3.child; null !== e; ) c3 |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a3, e = e.sibling;
        else for (e = a3.child; null !== e; ) c3 |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a3, e = e.sibling;
        a3.subtreeFlags |= d;
        a3.childLanes = c3;
        return b3;
      }
      function Ej(a3, b3, c3) {
        var d = b3.pendingProps;
        wg(b3);
        switch (b3.tag) {
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
            return S(b3), null;
          case 1:
            return Zf(b3.type) && $f(), S(b3), null;
          case 3:
            d = b3.stateNode;
            zh();
            E(Wf);
            E(H);
            Eh();
            d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
            if (null === a3 || null === a3.child) Gg(b3) ? b3.flags |= 4 : null === a3 || a3.memoizedState.isDehydrated && 0 === (b3.flags & 256) || (b3.flags |= 1024, null !== zg && (Fj(zg), zg = null));
            Aj(a3, b3);
            S(b3);
            return null;
          case 5:
            Bh(b3);
            var e = xh(wh.current);
            c3 = b3.type;
            if (null !== a3 && null != b3.stateNode) Bj(a3, b3, c3, d, e), a3.ref !== b3.ref && (b3.flags |= 512, b3.flags |= 2097152);
            else {
              if (!d) {
                if (null === b3.stateNode) throw Error(p(166));
                S(b3);
                return null;
              }
              a3 = xh(uh.current);
              if (Gg(b3)) {
                d = b3.stateNode;
                c3 = b3.type;
                var f = b3.memoizedProps;
                d[Of] = b3;
                d[Pf] = f;
                a3 = 0 !== (b3.mode & 1);
                switch (c3) {
                  case "dialog":
                    D("cancel", d);
                    D("close", d);
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    D("load", d);
                    break;
                  case "video":
                  case "audio":
                    for (e = 0; e < lf.length; e++) D(lf[e], d);
                    break;
                  case "source":
                    D("error", d);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    D(
                      "error",
                      d
                    );
                    D("load", d);
                    break;
                  case "details":
                    D("toggle", d);
                    break;
                  case "input":
                    Za(d, f);
                    D("invalid", d);
                    break;
                  case "select":
                    d._wrapperState = { wasMultiple: !!f.multiple };
                    D("invalid", d);
                    break;
                  case "textarea":
                    hb(d, f), D("invalid", d);
                }
                ub(c3, f);
                e = null;
                for (var g in f) if (f.hasOwnProperty(g)) {
                  var h = f[g];
                  "children" === g ? "string" === typeof h ? d.textContent !== h && (true !== f.suppressHydrationWarning && Af(d.textContent, h, a3), e = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (true !== f.suppressHydrationWarning && Af(
                    d.textContent,
                    h,
                    a3
                  ), e = ["children", "" + h]) : ea.hasOwnProperty(g) && null != h && "onScroll" === g && D("scroll", d);
                }
                switch (c3) {
                  case "input":
                    Va(d);
                    db(d, f, true);
                    break;
                  case "textarea":
                    Va(d);
                    jb(d);
                    break;
                  case "select":
                  case "option":
                    break;
                  default:
                    "function" === typeof f.onClick && (d.onclick = Bf);
                }
                d = e;
                b3.updateQueue = d;
                null !== d && (b3.flags |= 4);
              } else {
                g = 9 === e.nodeType ? e : e.ownerDocument;
                "http://www.w3.org/1999/xhtml" === a3 && (a3 = kb(c3));
                "http://www.w3.org/1999/xhtml" === a3 ? "script" === c3 ? (a3 = g.createElement("div"), a3.innerHTML = "<script><\/script>", a3 = a3.removeChild(a3.firstChild)) : "string" === typeof d.is ? a3 = g.createElement(c3, { is: d.is }) : (a3 = g.createElement(c3), "select" === c3 && (g = a3, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a3 = g.createElementNS(a3, c3);
                a3[Of] = b3;
                a3[Pf] = d;
                zj(a3, b3, false, false);
                b3.stateNode = a3;
                a: {
                  g = vb(c3, d);
                  switch (c3) {
                    case "dialog":
                      D("cancel", a3);
                      D("close", a3);
                      e = d;
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      D("load", a3);
                      e = d;
                      break;
                    case "video":
                    case "audio":
                      for (e = 0; e < lf.length; e++) D(lf[e], a3);
                      e = d;
                      break;
                    case "source":
                      D("error", a3);
                      e = d;
                      break;
                    case "img":
                    case "image":
                    case "link":
                      D(
                        "error",
                        a3
                      );
                      D("load", a3);
                      e = d;
                      break;
                    case "details":
                      D("toggle", a3);
                      e = d;
                      break;
                    case "input":
                      Za(a3, d);
                      e = Ya(a3, d);
                      D("invalid", a3);
                      break;
                    case "option":
                      e = d;
                      break;
                    case "select":
                      a3._wrapperState = { wasMultiple: !!d.multiple };
                      e = A({}, d, { value: void 0 });
                      D("invalid", a3);
                      break;
                    case "textarea":
                      hb(a3, d);
                      e = gb(a3, d);
                      D("invalid", a3);
                      break;
                    default:
                      e = d;
                  }
                  ub(c3, e);
                  h = e;
                  for (f in h) if (h.hasOwnProperty(f)) {
                    var k = h[f];
                    "style" === f ? sb(a3, k) : "dangerouslySetInnerHTML" === f ? (k = k ? k.__html : void 0, null != k && nb(a3, k)) : "children" === f ? "string" === typeof k ? ("textarea" !== c3 || "" !== k) && ob(a3, k) : "number" === typeof k && ob(a3, "" + k) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (ea.hasOwnProperty(f) ? null != k && "onScroll" === f && D("scroll", a3) : null != k && ta(a3, f, k, g));
                  }
                  switch (c3) {
                    case "input":
                      Va(a3);
                      db(a3, d, false);
                      break;
                    case "textarea":
                      Va(a3);
                      jb(a3);
                      break;
                    case "option":
                      null != d.value && a3.setAttribute("value", "" + Sa(d.value));
                      break;
                    case "select":
                      a3.multiple = !!d.multiple;
                      f = d.value;
                      null != f ? fb(a3, !!d.multiple, f, false) : null != d.defaultValue && fb(
                        a3,
                        !!d.multiple,
                        d.defaultValue,
                        true
                      );
                      break;
                    default:
                      "function" === typeof e.onClick && (a3.onclick = Bf);
                  }
                  switch (c3) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      d = !!d.autoFocus;
                      break a;
                    case "img":
                      d = true;
                      break a;
                    default:
                      d = false;
                  }
                }
                d && (b3.flags |= 4);
              }
              null !== b3.ref && (b3.flags |= 512, b3.flags |= 2097152);
            }
            S(b3);
            return null;
          case 6:
            if (a3 && null != b3.stateNode) Cj(a3, b3, a3.memoizedProps, d);
            else {
              if ("string" !== typeof d && null === b3.stateNode) throw Error(p(166));
              c3 = xh(wh.current);
              xh(uh.current);
              if (Gg(b3)) {
                d = b3.stateNode;
                c3 = b3.memoizedProps;
                d[Of] = b3;
                if (f = d.nodeValue !== c3) {
                  if (a3 = xg, null !== a3) switch (a3.tag) {
                    case 3:
                      Af(d.nodeValue, c3, 0 !== (a3.mode & 1));
                      break;
                    case 5:
                      true !== a3.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c3, 0 !== (a3.mode & 1));
                  }
                }
                f && (b3.flags |= 4);
              } else d = (9 === c3.nodeType ? c3 : c3.ownerDocument).createTextNode(d), d[Of] = b3, b3.stateNode = d;
            }
            S(b3);
            return null;
          case 13:
            E(L);
            d = b3.memoizedState;
            if (null === a3 || null !== a3.memoizedState && null !== a3.memoizedState.dehydrated) {
              if (I && null !== yg && 0 !== (b3.mode & 1) && 0 === (b3.flags & 128)) Hg(), Ig(), b3.flags |= 98560, f = false;
              else if (f = Gg(b3), null !== d && null !== d.dehydrated) {
                if (null === a3) {
                  if (!f) throw Error(p(318));
                  f = b3.memoizedState;
                  f = null !== f ? f.dehydrated : null;
                  if (!f) throw Error(p(317));
                  f[Of] = b3;
                } else Ig(), 0 === (b3.flags & 128) && (b3.memoizedState = null), b3.flags |= 4;
                S(b3);
                f = false;
              } else null !== zg && (Fj(zg), zg = null), f = true;
              if (!f) return b3.flags & 65536 ? b3 : null;
            }
            if (0 !== (b3.flags & 128)) return b3.lanes = c3, b3;
            d = null !== d;
            d !== (null !== a3 && null !== a3.memoizedState) && d && (b3.child.flags |= 8192, 0 !== (b3.mode & 1) && (null === a3 || 0 !== (L.current & 1) ? 0 === T && (T = 3) : tj()));
            null !== b3.updateQueue && (b3.flags |= 4);
            S(b3);
            return null;
          case 4:
            return zh(), Aj(a3, b3), null === a3 && sf(b3.stateNode.containerInfo), S(b3), null;
          case 10:
            return ah(b3.type._context), S(b3), null;
          case 17:
            return Zf(b3.type) && $f(), S(b3), null;
          case 19:
            E(L);
            f = b3.memoizedState;
            if (null === f) return S(b3), null;
            d = 0 !== (b3.flags & 128);
            g = f.rendering;
            if (null === g) if (d) Dj(f, false);
            else {
              if (0 !== T || null !== a3 && 0 !== (a3.flags & 128)) for (a3 = b3.child; null !== a3; ) {
                g = Ch(a3);
                if (null !== g) {
                  b3.flags |= 128;
                  Dj(f, false);
                  d = g.updateQueue;
                  null !== d && (b3.updateQueue = d, b3.flags |= 4);
                  b3.subtreeFlags = 0;
                  d = c3;
                  for (c3 = b3.child; null !== c3; ) f = c3, a3 = d, f.flags &= 14680066, g = f.alternate, null === g ? (f.childLanes = 0, f.lanes = a3, f.child = null, f.subtreeFlags = 0, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.subtreeFlags = 0, f.deletions = null, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, a3 = g.dependencies, f.dependencies = null === a3 ? null : { lanes: a3.lanes, firstContext: a3.firstContext }), c3 = c3.sibling;
                  G(L, L.current & 1 | 2);
                  return b3.child;
                }
                a3 = a3.sibling;
              }
              null !== f.tail && B() > Gj && (b3.flags |= 128, d = true, Dj(f, false), b3.lanes = 4194304);
            }
            else {
              if (!d) if (a3 = Ch(g), null !== a3) {
                if (b3.flags |= 128, d = true, c3 = a3.updateQueue, null !== c3 && (b3.updateQueue = c3, b3.flags |= 4), Dj(f, true), null === f.tail && "hidden" === f.tailMode && !g.alternate && !I) return S(b3), null;
              } else 2 * B() - f.renderingStartTime > Gj && 1073741824 !== c3 && (b3.flags |= 128, d = true, Dj(f, false), b3.lanes = 4194304);
              f.isBackwards ? (g.sibling = b3.child, b3.child = g) : (c3 = f.last, null !== c3 ? c3.sibling = g : b3.child = g, f.last = g);
            }
            if (null !== f.tail) return b3 = f.tail, f.rendering = b3, f.tail = b3.sibling, f.renderingStartTime = B(), b3.sibling = null, c3 = L.current, G(L, d ? c3 & 1 | 2 : c3 & 1), b3;
            S(b3);
            return null;
          case 22:
          case 23:
            return Hj(), d = null !== b3.memoizedState, null !== a3 && null !== a3.memoizedState !== d && (b3.flags |= 8192), d && 0 !== (b3.mode & 1) ? 0 !== (fj & 1073741824) && (S(b3), b3.subtreeFlags & 6 && (b3.flags |= 8192)) : S(b3), null;
          case 24:
            return null;
          case 25:
            return null;
        }
        throw Error(p(156, b3.tag));
      }
      function Ij(a3, b3) {
        wg(b3);
        switch (b3.tag) {
          case 1:
            return Zf(b3.type) && $f(), a3 = b3.flags, a3 & 65536 ? (b3.flags = a3 & -65537 | 128, b3) : null;
          case 3:
            return zh(), E(Wf), E(H), Eh(), a3 = b3.flags, 0 !== (a3 & 65536) && 0 === (a3 & 128) ? (b3.flags = a3 & -65537 | 128, b3) : null;
          case 5:
            return Bh(b3), null;
          case 13:
            E(L);
            a3 = b3.memoizedState;
            if (null !== a3 && null !== a3.dehydrated) {
              if (null === b3.alternate) throw Error(p(340));
              Ig();
            }
            a3 = b3.flags;
            return a3 & 65536 ? (b3.flags = a3 & -65537 | 128, b3) : null;
          case 19:
            return E(L), null;
          case 4:
            return zh(), null;
          case 10:
            return ah(b3.type._context), null;
          case 22:
          case 23:
            return Hj(), null;
          case 24:
            return null;
          default:
            return null;
        }
      }
      var Jj = false;
      var U = false;
      var Kj = "function" === typeof WeakSet ? WeakSet : Set;
      var V = null;
      function Lj(a3, b3) {
        var c3 = a3.ref;
        if (null !== c3) if ("function" === typeof c3) try {
          c3(null);
        } catch (d) {
          W(a3, b3, d);
        }
        else c3.current = null;
      }
      function Mj(a3, b3, c3) {
        try {
          c3();
        } catch (d) {
          W(a3, b3, d);
        }
      }
      var Nj = false;
      function Oj(a3, b3) {
        Cf = dd;
        a3 = Me();
        if (Ne(a3)) {
          if ("selectionStart" in a3) var c3 = { start: a3.selectionStart, end: a3.selectionEnd };
          else a: {
            c3 = (c3 = a3.ownerDocument) && c3.defaultView || window;
            var d = c3.getSelection && c3.getSelection();
            if (d && 0 !== d.rangeCount) {
              c3 = d.anchorNode;
              var e = d.anchorOffset, f = d.focusNode;
              d = d.focusOffset;
              try {
                c3.nodeType, f.nodeType;
              } catch (F) {
                c3 = null;
                break a;
              }
              var g = 0, h = -1, k = -1, l = 0, m = 0, q = a3, r = null;
              b: for (; ; ) {
                for (var y; ; ) {
                  q !== c3 || 0 !== e && 3 !== q.nodeType || (h = g + e);
                  q !== f || 0 !== d && 3 !== q.nodeType || (k = g + d);
                  3 === q.nodeType && (g += q.nodeValue.length);
                  if (null === (y = q.firstChild)) break;
                  r = q;
                  q = y;
                }
                for (; ; ) {
                  if (q === a3) break b;
                  r === c3 && ++l === e && (h = g);
                  r === f && ++m === d && (k = g);
                  if (null !== (y = q.nextSibling)) break;
                  q = r;
                  r = q.parentNode;
                }
                q = y;
              }
              c3 = -1 === h || -1 === k ? null : { start: h, end: k };
            } else c3 = null;
          }
          c3 = c3 || { start: 0, end: 0 };
        } else c3 = null;
        Df = { focusedElem: a3, selectionRange: c3 };
        dd = false;
        for (V = b3; null !== V; ) if (b3 = V, a3 = b3.child, 0 !== (b3.subtreeFlags & 1028) && null !== a3) a3.return = b3, V = a3;
        else for (; null !== V; ) {
          b3 = V;
          try {
            var n = b3.alternate;
            if (0 !== (b3.flags & 1024)) switch (b3.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (null !== n) {
                  var t = n.memoizedProps, J = n.memoizedState, x = b3.stateNode, w = x.getSnapshotBeforeUpdate(b3.elementType === b3.type ? t : Ci(b3.type, t), J);
                  x.__reactInternalSnapshotBeforeUpdate = w;
                }
                break;
              case 3:
                var u = b3.stateNode.containerInfo;
                1 === u.nodeType ? u.textContent = "" : 9 === u.nodeType && u.documentElement && u.removeChild(u.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(p(163));
            }
          } catch (F) {
            W(b3, b3.return, F);
          }
          a3 = b3.sibling;
          if (null !== a3) {
            a3.return = b3.return;
            V = a3;
            break;
          }
          V = b3.return;
        }
        n = Nj;
        Nj = false;
        return n;
      }
      function Pj(a3, b3, c3) {
        var d = b3.updateQueue;
        d = null !== d ? d.lastEffect : null;
        if (null !== d) {
          var e = d = d.next;
          do {
            if ((e.tag & a3) === a3) {
              var f = e.destroy;
              e.destroy = void 0;
              void 0 !== f && Mj(b3, c3, f);
            }
            e = e.next;
          } while (e !== d);
        }
      }
      function Qj(a3, b3) {
        b3 = b3.updateQueue;
        b3 = null !== b3 ? b3.lastEffect : null;
        if (null !== b3) {
          var c3 = b3 = b3.next;
          do {
            if ((c3.tag & a3) === a3) {
              var d = c3.create;
              c3.destroy = d();
            }
            c3 = c3.next;
          } while (c3 !== b3);
        }
      }
      function Rj(a3) {
        var b3 = a3.ref;
        if (null !== b3) {
          var c3 = a3.stateNode;
          switch (a3.tag) {
            case 5:
              a3 = c3;
              break;
            default:
              a3 = c3;
          }
          "function" === typeof b3 ? b3(a3) : b3.current = a3;
        }
      }
      function Sj(a3) {
        var b3 = a3.alternate;
        null !== b3 && (a3.alternate = null, Sj(b3));
        a3.child = null;
        a3.deletions = null;
        a3.sibling = null;
        5 === a3.tag && (b3 = a3.stateNode, null !== b3 && (delete b3[Of], delete b3[Pf], delete b3[of], delete b3[Qf], delete b3[Rf]));
        a3.stateNode = null;
        a3.return = null;
        a3.dependencies = null;
        a3.memoizedProps = null;
        a3.memoizedState = null;
        a3.pendingProps = null;
        a3.stateNode = null;
        a3.updateQueue = null;
      }
      function Tj(a3) {
        return 5 === a3.tag || 3 === a3.tag || 4 === a3.tag;
      }
      function Uj(a3) {
        a: for (; ; ) {
          for (; null === a3.sibling; ) {
            if (null === a3.return || Tj(a3.return)) return null;
            a3 = a3.return;
          }
          a3.sibling.return = a3.return;
          for (a3 = a3.sibling; 5 !== a3.tag && 6 !== a3.tag && 18 !== a3.tag; ) {
            if (a3.flags & 2) continue a;
            if (null === a3.child || 4 === a3.tag) continue a;
            else a3.child.return = a3, a3 = a3.child;
          }
          if (!(a3.flags & 2)) return a3.stateNode;
        }
      }
      function Vj(a3, b3, c3) {
        var d = a3.tag;
        if (5 === d || 6 === d) a3 = a3.stateNode, b3 ? 8 === c3.nodeType ? c3.parentNode.insertBefore(a3, b3) : c3.insertBefore(a3, b3) : (8 === c3.nodeType ? (b3 = c3.parentNode, b3.insertBefore(a3, c3)) : (b3 = c3, b3.appendChild(a3)), c3 = c3._reactRootContainer, null !== c3 && void 0 !== c3 || null !== b3.onclick || (b3.onclick = Bf));
        else if (4 !== d && (a3 = a3.child, null !== a3)) for (Vj(a3, b3, c3), a3 = a3.sibling; null !== a3; ) Vj(a3, b3, c3), a3 = a3.sibling;
      }
      function Wj(a3, b3, c3) {
        var d = a3.tag;
        if (5 === d || 6 === d) a3 = a3.stateNode, b3 ? c3.insertBefore(a3, b3) : c3.appendChild(a3);
        else if (4 !== d && (a3 = a3.child, null !== a3)) for (Wj(a3, b3, c3), a3 = a3.sibling; null !== a3; ) Wj(a3, b3, c3), a3 = a3.sibling;
      }
      var X = null;
      var Xj = false;
      function Yj(a3, b3, c3) {
        for (c3 = c3.child; null !== c3; ) Zj(a3, b3, c3), c3 = c3.sibling;
      }
      function Zj(a3, b3, c3) {
        if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
          lc.onCommitFiberUnmount(kc, c3);
        } catch (h) {
        }
        switch (c3.tag) {
          case 5:
            U || Lj(c3, b3);
          case 6:
            var d = X, e = Xj;
            X = null;
            Yj(a3, b3, c3);
            X = d;
            Xj = e;
            null !== X && (Xj ? (a3 = X, c3 = c3.stateNode, 8 === a3.nodeType ? a3.parentNode.removeChild(c3) : a3.removeChild(c3)) : X.removeChild(c3.stateNode));
            break;
          case 18:
            null !== X && (Xj ? (a3 = X, c3 = c3.stateNode, 8 === a3.nodeType ? Kf(a3.parentNode, c3) : 1 === a3.nodeType && Kf(a3, c3), bd(a3)) : Kf(X, c3.stateNode));
            break;
          case 4:
            d = X;
            e = Xj;
            X = c3.stateNode.containerInfo;
            Xj = true;
            Yj(a3, b3, c3);
            X = d;
            Xj = e;
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            if (!U && (d = c3.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
              e = d = d.next;
              do {
                var f = e, g = f.destroy;
                f = f.tag;
                void 0 !== g && (0 !== (f & 2) ? Mj(c3, b3, g) : 0 !== (f & 4) && Mj(c3, b3, g));
                e = e.next;
              } while (e !== d);
            }
            Yj(a3, b3, c3);
            break;
          case 1:
            if (!U && (Lj(c3, b3), d = c3.stateNode, "function" === typeof d.componentWillUnmount)) try {
              d.props = c3.memoizedProps, d.state = c3.memoizedState, d.componentWillUnmount();
            } catch (h) {
              W(c3, b3, h);
            }
            Yj(a3, b3, c3);
            break;
          case 21:
            Yj(a3, b3, c3);
            break;
          case 22:
            c3.mode & 1 ? (U = (d = U) || null !== c3.memoizedState, Yj(a3, b3, c3), U = d) : Yj(a3, b3, c3);
            break;
          default:
            Yj(a3, b3, c3);
        }
      }
      function ak(a3) {
        var b3 = a3.updateQueue;
        if (null !== b3) {
          a3.updateQueue = null;
          var c3 = a3.stateNode;
          null === c3 && (c3 = a3.stateNode = new Kj());
          b3.forEach(function(b4) {
            var d = bk.bind(null, a3, b4);
            c3.has(b4) || (c3.add(b4), b4.then(d, d));
          });
        }
      }
      function ck(a3, b3) {
        var c3 = b3.deletions;
        if (null !== c3) for (var d = 0; d < c3.length; d++) {
          var e = c3[d];
          try {
            var f = a3, g = b3, h = g;
            a: for (; null !== h; ) {
              switch (h.tag) {
                case 5:
                  X = h.stateNode;
                  Xj = false;
                  break a;
                case 3:
                  X = h.stateNode.containerInfo;
                  Xj = true;
                  break a;
                case 4:
                  X = h.stateNode.containerInfo;
                  Xj = true;
                  break a;
              }
              h = h.return;
            }
            if (null === X) throw Error(p(160));
            Zj(f, g, e);
            X = null;
            Xj = false;
            var k = e.alternate;
            null !== k && (k.return = null);
            e.return = null;
          } catch (l) {
            W(e, b3, l);
          }
        }
        if (b3.subtreeFlags & 12854) for (b3 = b3.child; null !== b3; ) dk(b3, a3), b3 = b3.sibling;
      }
      function dk(a3, b3) {
        var c3 = a3.alternate, d = a3.flags;
        switch (a3.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            ck(b3, a3);
            ek(a3);
            if (d & 4) {
              try {
                Pj(3, a3, a3.return), Qj(3, a3);
              } catch (t) {
                W(a3, a3.return, t);
              }
              try {
                Pj(5, a3, a3.return);
              } catch (t) {
                W(a3, a3.return, t);
              }
            }
            break;
          case 1:
            ck(b3, a3);
            ek(a3);
            d & 512 && null !== c3 && Lj(c3, c3.return);
            break;
          case 5:
            ck(b3, a3);
            ek(a3);
            d & 512 && null !== c3 && Lj(c3, c3.return);
            if (a3.flags & 32) {
              var e = a3.stateNode;
              try {
                ob(e, "");
              } catch (t) {
                W(a3, a3.return, t);
              }
            }
            if (d & 4 && (e = a3.stateNode, null != e)) {
              var f = a3.memoizedProps, g = null !== c3 ? c3.memoizedProps : f, h = a3.type, k = a3.updateQueue;
              a3.updateQueue = null;
              if (null !== k) try {
                "input" === h && "radio" === f.type && null != f.name && ab(e, f);
                vb(h, g);
                var l = vb(h, f);
                for (g = 0; g < k.length; g += 2) {
                  var m = k[g], q = k[g + 1];
                  "style" === m ? sb(e, q) : "dangerouslySetInnerHTML" === m ? nb(e, q) : "children" === m ? ob(e, q) : ta(e, m, q, l);
                }
                switch (h) {
                  case "input":
                    bb(e, f);
                    break;
                  case "textarea":
                    ib(e, f);
                    break;
                  case "select":
                    var r = e._wrapperState.wasMultiple;
                    e._wrapperState.wasMultiple = !!f.multiple;
                    var y = f.value;
                    null != y ? fb(e, !!f.multiple, y, false) : r !== !!f.multiple && (null != f.defaultValue ? fb(
                      e,
                      !!f.multiple,
                      f.defaultValue,
                      true
                    ) : fb(e, !!f.multiple, f.multiple ? [] : "", false));
                }
                e[Pf] = f;
              } catch (t) {
                W(a3, a3.return, t);
              }
            }
            break;
          case 6:
            ck(b3, a3);
            ek(a3);
            if (d & 4) {
              if (null === a3.stateNode) throw Error(p(162));
              e = a3.stateNode;
              f = a3.memoizedProps;
              try {
                e.nodeValue = f;
              } catch (t) {
                W(a3, a3.return, t);
              }
            }
            break;
          case 3:
            ck(b3, a3);
            ek(a3);
            if (d & 4 && null !== c3 && c3.memoizedState.isDehydrated) try {
              bd(b3.containerInfo);
            } catch (t) {
              W(a3, a3.return, t);
            }
            break;
          case 4:
            ck(b3, a3);
            ek(a3);
            break;
          case 13:
            ck(b3, a3);
            ek(a3);
            e = a3.child;
            e.flags & 8192 && (f = null !== e.memoizedState, e.stateNode.isHidden = f, !f || null !== e.alternate && null !== e.alternate.memoizedState || (fk = B()));
            d & 4 && ak(a3);
            break;
          case 22:
            m = null !== c3 && null !== c3.memoizedState;
            a3.mode & 1 ? (U = (l = U) || m, ck(b3, a3), U = l) : ck(b3, a3);
            ek(a3);
            if (d & 8192) {
              l = null !== a3.memoizedState;
              if ((a3.stateNode.isHidden = l) && !m && 0 !== (a3.mode & 1)) for (V = a3, m = a3.child; null !== m; ) {
                for (q = V = m; null !== V; ) {
                  r = V;
                  y = r.child;
                  switch (r.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                      Pj(4, r, r.return);
                      break;
                    case 1:
                      Lj(r, r.return);
                      var n = r.stateNode;
                      if ("function" === typeof n.componentWillUnmount) {
                        d = r;
                        c3 = r.return;
                        try {
                          b3 = d, n.props = b3.memoizedProps, n.state = b3.memoizedState, n.componentWillUnmount();
                        } catch (t) {
                          W(d, c3, t);
                        }
                      }
                      break;
                    case 5:
                      Lj(r, r.return);
                      break;
                    case 22:
                      if (null !== r.memoizedState) {
                        gk(q);
                        continue;
                      }
                  }
                  null !== y ? (y.return = r, V = y) : gk(q);
                }
                m = m.sibling;
              }
              a: for (m = null, q = a3; ; ) {
                if (5 === q.tag) {
                  if (null === m) {
                    m = q;
                    try {
                      e = q.stateNode, l ? (f = e.style, "function" === typeof f.setProperty ? f.setProperty("display", "none", "important") : f.display = "none") : (h = q.stateNode, k = q.memoizedProps.style, g = void 0 !== k && null !== k && k.hasOwnProperty("display") ? k.display : null, h.style.display = rb("display", g));
                    } catch (t) {
                      W(a3, a3.return, t);
                    }
                  }
                } else if (6 === q.tag) {
                  if (null === m) try {
                    q.stateNode.nodeValue = l ? "" : q.memoizedProps;
                  } catch (t) {
                    W(a3, a3.return, t);
                  }
                } else if ((22 !== q.tag && 23 !== q.tag || null === q.memoizedState || q === a3) && null !== q.child) {
                  q.child.return = q;
                  q = q.child;
                  continue;
                }
                if (q === a3) break a;
                for (; null === q.sibling; ) {
                  if (null === q.return || q.return === a3) break a;
                  m === q && (m = null);
                  q = q.return;
                }
                m === q && (m = null);
                q.sibling.return = q.return;
                q = q.sibling;
              }
            }
            break;
          case 19:
            ck(b3, a3);
            ek(a3);
            d & 4 && ak(a3);
            break;
          case 21:
            break;
          default:
            ck(
              b3,
              a3
            ), ek(a3);
        }
      }
      function ek(a3) {
        var b3 = a3.flags;
        if (b3 & 2) {
          try {
            a: {
              for (var c3 = a3.return; null !== c3; ) {
                if (Tj(c3)) {
                  var d = c3;
                  break a;
                }
                c3 = c3.return;
              }
              throw Error(p(160));
            }
            switch (d.tag) {
              case 5:
                var e = d.stateNode;
                d.flags & 32 && (ob(e, ""), d.flags &= -33);
                var f = Uj(a3);
                Wj(a3, f, e);
                break;
              case 3:
              case 4:
                var g = d.stateNode.containerInfo, h = Uj(a3);
                Vj(a3, h, g);
                break;
              default:
                throw Error(p(161));
            }
          } catch (k) {
            W(a3, a3.return, k);
          }
          a3.flags &= -3;
        }
        b3 & 4096 && (a3.flags &= -4097);
      }
      function hk(a3, b3, c3) {
        V = a3;
        ik(a3, b3, c3);
      }
      function ik(a3, b3, c3) {
        for (var d = 0 !== (a3.mode & 1); null !== V; ) {
          var e = V, f = e.child;
          if (22 === e.tag && d) {
            var g = null !== e.memoizedState || Jj;
            if (!g) {
              var h = e.alternate, k = null !== h && null !== h.memoizedState || U;
              h = Jj;
              var l = U;
              Jj = g;
              if ((U = k) && !l) for (V = e; null !== V; ) g = V, k = g.child, 22 === g.tag && null !== g.memoizedState ? jk(e) : null !== k ? (k.return = g, V = k) : jk(e);
              for (; null !== f; ) V = f, ik(f, b3, c3), f = f.sibling;
              V = e;
              Jj = h;
              U = l;
            }
            kk(a3, b3, c3);
          } else 0 !== (e.subtreeFlags & 8772) && null !== f ? (f.return = e, V = f) : kk(a3, b3, c3);
        }
      }
      function kk(a3) {
        for (; null !== V; ) {
          var b3 = V;
          if (0 !== (b3.flags & 8772)) {
            var c3 = b3.alternate;
            try {
              if (0 !== (b3.flags & 8772)) switch (b3.tag) {
                case 0:
                case 11:
                case 15:
                  U || Qj(5, b3);
                  break;
                case 1:
                  var d = b3.stateNode;
                  if (b3.flags & 4 && !U) if (null === c3) d.componentDidMount();
                  else {
                    var e = b3.elementType === b3.type ? c3.memoizedProps : Ci(b3.type, c3.memoizedProps);
                    d.componentDidUpdate(e, c3.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
                  }
                  var f = b3.updateQueue;
                  null !== f && sh(b3, f, d);
                  break;
                case 3:
                  var g = b3.updateQueue;
                  if (null !== g) {
                    c3 = null;
                    if (null !== b3.child) switch (b3.child.tag) {
                      case 5:
                        c3 = b3.child.stateNode;
                        break;
                      case 1:
                        c3 = b3.child.stateNode;
                    }
                    sh(b3, g, c3);
                  }
                  break;
                case 5:
                  var h = b3.stateNode;
                  if (null === c3 && b3.flags & 4) {
                    c3 = h;
                    var k = b3.memoizedProps;
                    switch (b3.type) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        k.autoFocus && c3.focus();
                        break;
                      case "img":
                        k.src && (c3.src = k.src);
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
                  if (null === b3.memoizedState) {
                    var l = b3.alternate;
                    if (null !== l) {
                      var m = l.memoizedState;
                      if (null !== m) {
                        var q = m.dehydrated;
                        null !== q && bd(q);
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
                  throw Error(p(163));
              }
              U || b3.flags & 512 && Rj(b3);
            } catch (r) {
              W(b3, b3.return, r);
            }
          }
          if (b3 === a3) {
            V = null;
            break;
          }
          c3 = b3.sibling;
          if (null !== c3) {
            c3.return = b3.return;
            V = c3;
            break;
          }
          V = b3.return;
        }
      }
      function gk(a3) {
        for (; null !== V; ) {
          var b3 = V;
          if (b3 === a3) {
            V = null;
            break;
          }
          var c3 = b3.sibling;
          if (null !== c3) {
            c3.return = b3.return;
            V = c3;
            break;
          }
          V = b3.return;
        }
      }
      function jk(a3) {
        for (; null !== V; ) {
          var b3 = V;
          try {
            switch (b3.tag) {
              case 0:
              case 11:
              case 15:
                var c3 = b3.return;
                try {
                  Qj(4, b3);
                } catch (k) {
                  W(b3, c3, k);
                }
                break;
              case 1:
                var d = b3.stateNode;
                if ("function" === typeof d.componentDidMount) {
                  var e = b3.return;
                  try {
                    d.componentDidMount();
                  } catch (k) {
                    W(b3, e, k);
                  }
                }
                var f = b3.return;
                try {
                  Rj(b3);
                } catch (k) {
                  W(b3, f, k);
                }
                break;
              case 5:
                var g = b3.return;
                try {
                  Rj(b3);
                } catch (k) {
                  W(b3, g, k);
                }
            }
          } catch (k) {
            W(b3, b3.return, k);
          }
          if (b3 === a3) {
            V = null;
            break;
          }
          var h = b3.sibling;
          if (null !== h) {
            h.return = b3.return;
            V = h;
            break;
          }
          V = b3.return;
        }
      }
      var lk = Math.ceil;
      var mk = ua.ReactCurrentDispatcher;
      var nk = ua.ReactCurrentOwner;
      var ok = ua.ReactCurrentBatchConfig;
      var K = 0;
      var Q = null;
      var Y = null;
      var Z = 0;
      var fj = 0;
      var ej = Uf(0);
      var T = 0;
      var pk = null;
      var rh = 0;
      var qk = 0;
      var rk = 0;
      var sk = null;
      var tk = null;
      var fk = 0;
      var Gj = Infinity;
      var uk = null;
      var Oi = false;
      var Pi = null;
      var Ri = null;
      var vk = false;
      var wk = null;
      var xk = 0;
      var yk = 0;
      var zk = null;
      var Ak = -1;
      var Bk = 0;
      function R() {
        return 0 !== (K & 6) ? B() : -1 !== Ak ? Ak : Ak = B();
      }
      function yi(a3) {
        if (0 === (a3.mode & 1)) return 1;
        if (0 !== (K & 2) && 0 !== Z) return Z & -Z;
        if (null !== Kg.transition) return 0 === Bk && (Bk = yc()), Bk;
        a3 = C;
        if (0 !== a3) return a3;
        a3 = window.event;
        a3 = void 0 === a3 ? 16 : jd(a3.type);
        return a3;
      }
      function gi(a3, b3, c3, d) {
        if (50 < yk) throw yk = 0, zk = null, Error(p(185));
        Ac(a3, c3, d);
        if (0 === (K & 2) || a3 !== Q) a3 === Q && (0 === (K & 2) && (qk |= c3), 4 === T && Ck(a3, Z)), Dk(a3, d), 1 === c3 && 0 === K && 0 === (b3.mode & 1) && (Gj = B() + 500, fg && jg());
      }
      function Dk(a3, b3) {
        var c3 = a3.callbackNode;
        wc(a3, b3);
        var d = uc(a3, a3 === Q ? Z : 0);
        if (0 === d) null !== c3 && bc(c3), a3.callbackNode = null, a3.callbackPriority = 0;
        else if (b3 = d & -d, a3.callbackPriority !== b3) {
          null != c3 && bc(c3);
          if (1 === b3) 0 === a3.tag ? ig(Ek.bind(null, a3)) : hg(Ek.bind(null, a3)), Jf(function() {
            0 === (K & 6) && jg();
          }), c3 = null;
          else {
            switch (Dc(d)) {
              case 1:
                c3 = fc;
                break;
              case 4:
                c3 = gc;
                break;
              case 16:
                c3 = hc;
                break;
              case 536870912:
                c3 = jc;
                break;
              default:
                c3 = hc;
            }
            c3 = Fk(c3, Gk.bind(null, a3));
          }
          a3.callbackPriority = b3;
          a3.callbackNode = c3;
        }
      }
      function Gk(a3, b3) {
        Ak = -1;
        Bk = 0;
        if (0 !== (K & 6)) throw Error(p(327));
        var c3 = a3.callbackNode;
        if (Hk() && a3.callbackNode !== c3) return null;
        var d = uc(a3, a3 === Q ? Z : 0);
        if (0 === d) return null;
        if (0 !== (d & 30) || 0 !== (d & a3.expiredLanes) || b3) b3 = Ik(a3, d);
        else {
          b3 = d;
          var e = K;
          K |= 2;
          var f = Jk();
          if (Q !== a3 || Z !== b3) uk = null, Gj = B() + 500, Kk(a3, b3);
          do
            try {
              Lk();
              break;
            } catch (h) {
              Mk(a3, h);
            }
          while (1);
          $g();
          mk.current = f;
          K = e;
          null !== Y ? b3 = 0 : (Q = null, Z = 0, b3 = T);
        }
        if (0 !== b3) {
          2 === b3 && (e = xc(a3), 0 !== e && (d = e, b3 = Nk(a3, e)));
          if (1 === b3) throw c3 = pk, Kk(a3, 0), Ck(a3, d), Dk(a3, B()), c3;
          if (6 === b3) Ck(a3, d);
          else {
            e = a3.current.alternate;
            if (0 === (d & 30) && !Ok(e) && (b3 = Ik(a3, d), 2 === b3 && (f = xc(a3), 0 !== f && (d = f, b3 = Nk(a3, f))), 1 === b3)) throw c3 = pk, Kk(a3, 0), Ck(a3, d), Dk(a3, B()), c3;
            a3.finishedWork = e;
            a3.finishedLanes = d;
            switch (b3) {
              case 0:
              case 1:
                throw Error(p(345));
              case 2:
                Pk(a3, tk, uk);
                break;
              case 3:
                Ck(a3, d);
                if ((d & 130023424) === d && (b3 = fk + 500 - B(), 10 < b3)) {
                  if (0 !== uc(a3, 0)) break;
                  e = a3.suspendedLanes;
                  if ((e & d) !== d) {
                    R();
                    a3.pingedLanes |= a3.suspendedLanes & e;
                    break;
                  }
                  a3.timeoutHandle = Ff(Pk.bind(null, a3, tk, uk), b3);
                  break;
                }
                Pk(a3, tk, uk);
                break;
              case 4:
                Ck(a3, d);
                if ((d & 4194240) === d) break;
                b3 = a3.eventTimes;
                for (e = -1; 0 < d; ) {
                  var g = 31 - oc(d);
                  f = 1 << g;
                  g = b3[g];
                  g > e && (e = g);
                  d &= ~f;
                }
                d = e;
                d = B() - d;
                d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * lk(d / 1960)) - d;
                if (10 < d) {
                  a3.timeoutHandle = Ff(Pk.bind(null, a3, tk, uk), d);
                  break;
                }
                Pk(a3, tk, uk);
                break;
              case 5:
                Pk(a3, tk, uk);
                break;
              default:
                throw Error(p(329));
            }
          }
        }
        Dk(a3, B());
        return a3.callbackNode === c3 ? Gk.bind(null, a3) : null;
      }
      function Nk(a3, b3) {
        var c3 = sk;
        a3.current.memoizedState.isDehydrated && (Kk(a3, b3).flags |= 256);
        a3 = Ik(a3, b3);
        2 !== a3 && (b3 = tk, tk = c3, null !== b3 && Fj(b3));
        return a3;
      }
      function Fj(a3) {
        null === tk ? tk = a3 : tk.push.apply(tk, a3);
      }
      function Ok(a3) {
        for (var b3 = a3; ; ) {
          if (b3.flags & 16384) {
            var c3 = b3.updateQueue;
            if (null !== c3 && (c3 = c3.stores, null !== c3)) for (var d = 0; d < c3.length; d++) {
              var e = c3[d], f = e.getSnapshot;
              e = e.value;
              try {
                if (!He(f(), e)) return false;
              } catch (g) {
                return false;
              }
            }
          }
          c3 = b3.child;
          if (b3.subtreeFlags & 16384 && null !== c3) c3.return = b3, b3 = c3;
          else {
            if (b3 === a3) break;
            for (; null === b3.sibling; ) {
              if (null === b3.return || b3.return === a3) return true;
              b3 = b3.return;
            }
            b3.sibling.return = b3.return;
            b3 = b3.sibling;
          }
        }
        return true;
      }
      function Ck(a3, b3) {
        b3 &= ~rk;
        b3 &= ~qk;
        a3.suspendedLanes |= b3;
        a3.pingedLanes &= ~b3;
        for (a3 = a3.expirationTimes; 0 < b3; ) {
          var c3 = 31 - oc(b3), d = 1 << c3;
          a3[c3] = -1;
          b3 &= ~d;
        }
      }
      function Ek(a3) {
        if (0 !== (K & 6)) throw Error(p(327));
        Hk();
        var b3 = uc(a3, 0);
        if (0 === (b3 & 1)) return Dk(a3, B()), null;
        var c3 = Ik(a3, b3);
        if (0 !== a3.tag && 2 === c3) {
          var d = xc(a3);
          0 !== d && (b3 = d, c3 = Nk(a3, d));
        }
        if (1 === c3) throw c3 = pk, Kk(a3, 0), Ck(a3, b3), Dk(a3, B()), c3;
        if (6 === c3) throw Error(p(345));
        a3.finishedWork = a3.current.alternate;
        a3.finishedLanes = b3;
        Pk(a3, tk, uk);
        Dk(a3, B());
        return null;
      }
      function Qk(a3, b3) {
        var c3 = K;
        K |= 1;
        try {
          return a3(b3);
        } finally {
          K = c3, 0 === K && (Gj = B() + 500, fg && jg());
        }
      }
      function Rk(a3) {
        null !== wk && 0 === wk.tag && 0 === (K & 6) && Hk();
        var b3 = K;
        K |= 1;
        var c3 = ok.transition, d = C;
        try {
          if (ok.transition = null, C = 1, a3) return a3();
        } finally {
          C = d, ok.transition = c3, K = b3, 0 === (K & 6) && jg();
        }
      }
      function Hj() {
        fj = ej.current;
        E(ej);
      }
      function Kk(a3, b3) {
        a3.finishedWork = null;
        a3.finishedLanes = 0;
        var c3 = a3.timeoutHandle;
        -1 !== c3 && (a3.timeoutHandle = -1, Gf(c3));
        if (null !== Y) for (c3 = Y.return; null !== c3; ) {
          var d = c3;
          wg(d);
          switch (d.tag) {
            case 1:
              d = d.type.childContextTypes;
              null !== d && void 0 !== d && $f();
              break;
            case 3:
              zh();
              E(Wf);
              E(H);
              Eh();
              break;
            case 5:
              Bh(d);
              break;
            case 4:
              zh();
              break;
            case 13:
              E(L);
              break;
            case 19:
              E(L);
              break;
            case 10:
              ah(d.type._context);
              break;
            case 22:
            case 23:
              Hj();
          }
          c3 = c3.return;
        }
        Q = a3;
        Y = a3 = Pg(a3.current, null);
        Z = fj = b3;
        T = 0;
        pk = null;
        rk = qk = rh = 0;
        tk = sk = null;
        if (null !== fh) {
          for (b3 = 0; b3 < fh.length; b3++) if (c3 = fh[b3], d = c3.interleaved, null !== d) {
            c3.interleaved = null;
            var e = d.next, f = c3.pending;
            if (null !== f) {
              var g = f.next;
              f.next = e;
              d.next = g;
            }
            c3.pending = d;
          }
          fh = null;
        }
        return a3;
      }
      function Mk(a3, b3) {
        do {
          var c3 = Y;
          try {
            $g();
            Fh.current = Rh;
            if (Ih) {
              for (var d = M.memoizedState; null !== d; ) {
                var e = d.queue;
                null !== e && (e.pending = null);
                d = d.next;
              }
              Ih = false;
            }
            Hh = 0;
            O = N = M = null;
            Jh = false;
            Kh = 0;
            nk.current = null;
            if (null === c3 || null === c3.return) {
              T = 1;
              pk = b3;
              Y = null;
              break;
            }
            a: {
              var f = a3, g = c3.return, h = c3, k = b3;
              b3 = Z;
              h.flags |= 32768;
              if (null !== k && "object" === typeof k && "function" === typeof k.then) {
                var l = k, m = h, q = m.tag;
                if (0 === (m.mode & 1) && (0 === q || 11 === q || 15 === q)) {
                  var r = m.alternate;
                  r ? (m.updateQueue = r.updateQueue, m.memoizedState = r.memoizedState, m.lanes = r.lanes) : (m.updateQueue = null, m.memoizedState = null);
                }
                var y = Ui(g);
                if (null !== y) {
                  y.flags &= -257;
                  Vi(y, g, h, f, b3);
                  y.mode & 1 && Si(f, l, b3);
                  b3 = y;
                  k = l;
                  var n = b3.updateQueue;
                  if (null === n) {
                    var t = /* @__PURE__ */ new Set();
                    t.add(k);
                    b3.updateQueue = t;
                  } else n.add(k);
                  break a;
                } else {
                  if (0 === (b3 & 1)) {
                    Si(f, l, b3);
                    tj();
                    break a;
                  }
                  k = Error(p(426));
                }
              } else if (I && h.mode & 1) {
                var J = Ui(g);
                if (null !== J) {
                  0 === (J.flags & 65536) && (J.flags |= 256);
                  Vi(J, g, h, f, b3);
                  Jg(Ji(k, h));
                  break a;
                }
              }
              f = k = Ji(k, h);
              4 !== T && (T = 2);
              null === sk ? sk = [f] : sk.push(f);
              f = g;
              do {
                switch (f.tag) {
                  case 3:
                    f.flags |= 65536;
                    b3 &= -b3;
                    f.lanes |= b3;
                    var x = Ni(f, k, b3);
                    ph(f, x);
                    break a;
                  case 1:
                    h = k;
                    var w = f.type, u = f.stateNode;
                    if (0 === (f.flags & 128) && ("function" === typeof w.getDerivedStateFromError || null !== u && "function" === typeof u.componentDidCatch && (null === Ri || !Ri.has(u)))) {
                      f.flags |= 65536;
                      b3 &= -b3;
                      f.lanes |= b3;
                      var F = Qi(f, h, b3);
                      ph(f, F);
                      break a;
                    }
                }
                f = f.return;
              } while (null !== f);
            }
            Sk(c3);
          } catch (na) {
            b3 = na;
            Y === c3 && null !== c3 && (Y = c3 = c3.return);
            continue;
          }
          break;
        } while (1);
      }
      function Jk() {
        var a3 = mk.current;
        mk.current = Rh;
        return null === a3 ? Rh : a3;
      }
      function tj() {
        if (0 === T || 3 === T || 2 === T) T = 4;
        null === Q || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q, Z);
      }
      function Ik(a3, b3) {
        var c3 = K;
        K |= 2;
        var d = Jk();
        if (Q !== a3 || Z !== b3) uk = null, Kk(a3, b3);
        do
          try {
            Tk();
            break;
          } catch (e) {
            Mk(a3, e);
          }
        while (1);
        $g();
        K = c3;
        mk.current = d;
        if (null !== Y) throw Error(p(261));
        Q = null;
        Z = 0;
        return T;
      }
      function Tk() {
        for (; null !== Y; ) Uk(Y);
      }
      function Lk() {
        for (; null !== Y && !cc(); ) Uk(Y);
      }
      function Uk(a3) {
        var b3 = Vk(a3.alternate, a3, fj);
        a3.memoizedProps = a3.pendingProps;
        null === b3 ? Sk(a3) : Y = b3;
        nk.current = null;
      }
      function Sk(a3) {
        var b3 = a3;
        do {
          var c3 = b3.alternate;
          a3 = b3.return;
          if (0 === (b3.flags & 32768)) {
            if (c3 = Ej(c3, b3, fj), null !== c3) {
              Y = c3;
              return;
            }
          } else {
            c3 = Ij(c3, b3);
            if (null !== c3) {
              c3.flags &= 32767;
              Y = c3;
              return;
            }
            if (null !== a3) a3.flags |= 32768, a3.subtreeFlags = 0, a3.deletions = null;
            else {
              T = 6;
              Y = null;
              return;
            }
          }
          b3 = b3.sibling;
          if (null !== b3) {
            Y = b3;
            return;
          }
          Y = b3 = a3;
        } while (null !== b3);
        0 === T && (T = 5);
      }
      function Pk(a3, b3, c3) {
        var d = C, e = ok.transition;
        try {
          ok.transition = null, C = 1, Wk(a3, b3, c3, d);
        } finally {
          ok.transition = e, C = d;
        }
        return null;
      }
      function Wk(a3, b3, c3, d) {
        do
          Hk();
        while (null !== wk);
        if (0 !== (K & 6)) throw Error(p(327));
        c3 = a3.finishedWork;
        var e = a3.finishedLanes;
        if (null === c3) return null;
        a3.finishedWork = null;
        a3.finishedLanes = 0;
        if (c3 === a3.current) throw Error(p(177));
        a3.callbackNode = null;
        a3.callbackPriority = 0;
        var f = c3.lanes | c3.childLanes;
        Bc(a3, f);
        a3 === Q && (Y = Q = null, Z = 0);
        0 === (c3.subtreeFlags & 2064) && 0 === (c3.flags & 2064) || vk || (vk = true, Fk(hc, function() {
          Hk();
          return null;
        }));
        f = 0 !== (c3.flags & 15990);
        if (0 !== (c3.subtreeFlags & 15990) || f) {
          f = ok.transition;
          ok.transition = null;
          var g = C;
          C = 1;
          var h = K;
          K |= 4;
          nk.current = null;
          Oj(a3, c3);
          dk(c3, a3);
          Oe(Df);
          dd = !!Cf;
          Df = Cf = null;
          a3.current = c3;
          hk(c3, a3, e);
          dc();
          K = h;
          C = g;
          ok.transition = f;
        } else a3.current = c3;
        vk && (vk = false, wk = a3, xk = e);
        f = a3.pendingLanes;
        0 === f && (Ri = null);
        mc(c3.stateNode, d);
        Dk(a3, B());
        if (null !== b3) for (d = a3.onRecoverableError, c3 = 0; c3 < b3.length; c3++) e = b3[c3], d(e.value, { componentStack: e.stack, digest: e.digest });
        if (Oi) throw Oi = false, a3 = Pi, Pi = null, a3;
        0 !== (xk & 1) && 0 !== a3.tag && Hk();
        f = a3.pendingLanes;
        0 !== (f & 1) ? a3 === zk ? yk++ : (yk = 0, zk = a3) : yk = 0;
        jg();
        return null;
      }
      function Hk() {
        if (null !== wk) {
          var a3 = Dc(xk), b3 = ok.transition, c3 = C;
          try {
            ok.transition = null;
            C = 16 > a3 ? 16 : a3;
            if (null === wk) var d = false;
            else {
              a3 = wk;
              wk = null;
              xk = 0;
              if (0 !== (K & 6)) throw Error(p(331));
              var e = K;
              K |= 4;
              for (V = a3.current; null !== V; ) {
                var f = V, g = f.child;
                if (0 !== (V.flags & 16)) {
                  var h = f.deletions;
                  if (null !== h) {
                    for (var k = 0; k < h.length; k++) {
                      var l = h[k];
                      for (V = l; null !== V; ) {
                        var m = V;
                        switch (m.tag) {
                          case 0:
                          case 11:
                          case 15:
                            Pj(8, m, f);
                        }
                        var q = m.child;
                        if (null !== q) q.return = m, V = q;
                        else for (; null !== V; ) {
                          m = V;
                          var r = m.sibling, y = m.return;
                          Sj(m);
                          if (m === l) {
                            V = null;
                            break;
                          }
                          if (null !== r) {
                            r.return = y;
                            V = r;
                            break;
                          }
                          V = y;
                        }
                      }
                    }
                    var n = f.alternate;
                    if (null !== n) {
                      var t = n.child;
                      if (null !== t) {
                        n.child = null;
                        do {
                          var J = t.sibling;
                          t.sibling = null;
                          t = J;
                        } while (null !== t);
                      }
                    }
                    V = f;
                  }
                }
                if (0 !== (f.subtreeFlags & 2064) && null !== g) g.return = f, V = g;
                else b: for (; null !== V; ) {
                  f = V;
                  if (0 !== (f.flags & 2048)) switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pj(9, f, f.return);
                  }
                  var x = f.sibling;
                  if (null !== x) {
                    x.return = f.return;
                    V = x;
                    break b;
                  }
                  V = f.return;
                }
              }
              var w = a3.current;
              for (V = w; null !== V; ) {
                g = V;
                var u = g.child;
                if (0 !== (g.subtreeFlags & 2064) && null !== u) u.return = g, V = u;
                else b: for (g = w; null !== V; ) {
                  h = V;
                  if (0 !== (h.flags & 2048)) try {
                    switch (h.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Qj(9, h);
                    }
                  } catch (na) {
                    W(h, h.return, na);
                  }
                  if (h === g) {
                    V = null;
                    break b;
                  }
                  var F = h.sibling;
                  if (null !== F) {
                    F.return = h.return;
                    V = F;
                    break b;
                  }
                  V = h.return;
                }
              }
              K = e;
              jg();
              if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
                lc.onPostCommitFiberRoot(kc, a3);
              } catch (na) {
              }
              d = true;
            }
            return d;
          } finally {
            C = c3, ok.transition = b3;
          }
        }
        return false;
      }
      function Xk(a3, b3, c3) {
        b3 = Ji(c3, b3);
        b3 = Ni(a3, b3, 1);
        a3 = nh(a3, b3, 1);
        b3 = R();
        null !== a3 && (Ac(a3, 1, b3), Dk(a3, b3));
      }
      function W(a3, b3, c3) {
        if (3 === a3.tag) Xk(a3, a3, c3);
        else for (; null !== b3; ) {
          if (3 === b3.tag) {
            Xk(b3, a3, c3);
            break;
          } else if (1 === b3.tag) {
            var d = b3.stateNode;
            if ("function" === typeof b3.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ri || !Ri.has(d))) {
              a3 = Ji(c3, a3);
              a3 = Qi(b3, a3, 1);
              b3 = nh(b3, a3, 1);
              a3 = R();
              null !== b3 && (Ac(b3, 1, a3), Dk(b3, a3));
              break;
            }
          }
          b3 = b3.return;
        }
      }
      function Ti(a3, b3, c3) {
        var d = a3.pingCache;
        null !== d && d.delete(b3);
        b3 = R();
        a3.pingedLanes |= a3.suspendedLanes & c3;
        Q === a3 && (Z & c3) === c3 && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - fk ? Kk(a3, 0) : rk |= c3);
        Dk(a3, b3);
      }
      function Yk(a3, b3) {
        0 === b3 && (0 === (a3.mode & 1) ? b3 = 1 : (b3 = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
        var c3 = R();
        a3 = ih(a3, b3);
        null !== a3 && (Ac(a3, b3, c3), Dk(a3, c3));
      }
      function uj(a3) {
        var b3 = a3.memoizedState, c3 = 0;
        null !== b3 && (c3 = b3.retryLane);
        Yk(a3, c3);
      }
      function bk(a3, b3) {
        var c3 = 0;
        switch (a3.tag) {
          case 13:
            var d = a3.stateNode;
            var e = a3.memoizedState;
            null !== e && (c3 = e.retryLane);
            break;
          case 19:
            d = a3.stateNode;
            break;
          default:
            throw Error(p(314));
        }
        null !== d && d.delete(b3);
        Yk(a3, c3);
      }
      var Vk;
      Vk = function(a3, b3, c3) {
        if (null !== a3) if (a3.memoizedProps !== b3.pendingProps || Wf.current) dh = true;
        else {
          if (0 === (a3.lanes & c3) && 0 === (b3.flags & 128)) return dh = false, yj(a3, b3, c3);
          dh = 0 !== (a3.flags & 131072) ? true : false;
        }
        else dh = false, I && 0 !== (b3.flags & 1048576) && ug(b3, ng, b3.index);
        b3.lanes = 0;
        switch (b3.tag) {
          case 2:
            var d = b3.type;
            ij(a3, b3);
            a3 = b3.pendingProps;
            var e = Yf(b3, H.current);
            ch(b3, c3);
            e = Nh(null, b3, d, a3, e, c3);
            var f = Sh();
            b3.flags |= 1;
            "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b3.tag = 1, b3.memoizedState = null, b3.updateQueue = null, Zf(d) ? (f = true, cg(b3)) : f = false, b3.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, kh(b3), e.updater = Ei, b3.stateNode = e, e._reactInternals = b3, Ii(b3, d, a3, c3), b3 = jj(null, b3, d, true, f, c3)) : (b3.tag = 0, I && f && vg(b3), Xi(null, b3, e, c3), b3 = b3.child);
            return b3;
          case 16:
            d = b3.elementType;
            a: {
              ij(a3, b3);
              a3 = b3.pendingProps;
              e = d._init;
              d = e(d._payload);
              b3.type = d;
              e = b3.tag = Zk(d);
              a3 = Ci(d, a3);
              switch (e) {
                case 0:
                  b3 = cj(null, b3, d, a3, c3);
                  break a;
                case 1:
                  b3 = hj(null, b3, d, a3, c3);
                  break a;
                case 11:
                  b3 = Yi(null, b3, d, a3, c3);
                  break a;
                case 14:
                  b3 = $i(null, b3, d, Ci(d.type, a3), c3);
                  break a;
              }
              throw Error(p(
                306,
                d,
                ""
              ));
            }
            return b3;
          case 0:
            return d = b3.type, e = b3.pendingProps, e = b3.elementType === d ? e : Ci(d, e), cj(a3, b3, d, e, c3);
          case 1:
            return d = b3.type, e = b3.pendingProps, e = b3.elementType === d ? e : Ci(d, e), hj(a3, b3, d, e, c3);
          case 3:
            a: {
              kj(b3);
              if (null === a3) throw Error(p(387));
              d = b3.pendingProps;
              f = b3.memoizedState;
              e = f.element;
              lh(a3, b3);
              qh(b3, d, null, c3);
              var g = b3.memoizedState;
              d = g.element;
              if (f.isDehydrated) if (f = { element: d, isDehydrated: false, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, b3.updateQueue.baseState = f, b3.memoizedState = f, b3.flags & 256) {
                e = Ji(Error(p(423)), b3);
                b3 = lj(a3, b3, d, c3, e);
                break a;
              } else if (d !== e) {
                e = Ji(Error(p(424)), b3);
                b3 = lj(a3, b3, d, c3, e);
                break a;
              } else for (yg = Lf(b3.stateNode.containerInfo.firstChild), xg = b3, I = true, zg = null, c3 = Vg(b3, null, d, c3), b3.child = c3; c3; ) c3.flags = c3.flags & -3 | 4096, c3 = c3.sibling;
              else {
                Ig();
                if (d === e) {
                  b3 = Zi(a3, b3, c3);
                  break a;
                }
                Xi(a3, b3, d, c3);
              }
              b3 = b3.child;
            }
            return b3;
          case 5:
            return Ah(b3), null === a3 && Eg(b3), d = b3.type, e = b3.pendingProps, f = null !== a3 ? a3.memoizedProps : null, g = e.children, Ef(d, e) ? g = null : null !== f && Ef(d, f) && (b3.flags |= 32), gj(a3, b3), Xi(a3, b3, g, c3), b3.child;
          case 6:
            return null === a3 && Eg(b3), null;
          case 13:
            return oj(a3, b3, c3);
          case 4:
            return yh(b3, b3.stateNode.containerInfo), d = b3.pendingProps, null === a3 ? b3.child = Ug(b3, null, d, c3) : Xi(a3, b3, d, c3), b3.child;
          case 11:
            return d = b3.type, e = b3.pendingProps, e = b3.elementType === d ? e : Ci(d, e), Yi(a3, b3, d, e, c3);
          case 7:
            return Xi(a3, b3, b3.pendingProps, c3), b3.child;
          case 8:
            return Xi(a3, b3, b3.pendingProps.children, c3), b3.child;
          case 12:
            return Xi(a3, b3, b3.pendingProps.children, c3), b3.child;
          case 10:
            a: {
              d = b3.type._context;
              e = b3.pendingProps;
              f = b3.memoizedProps;
              g = e.value;
              G(Wg, d._currentValue);
              d._currentValue = g;
              if (null !== f) if (He(f.value, g)) {
                if (f.children === e.children && !Wf.current) {
                  b3 = Zi(a3, b3, c3);
                  break a;
                }
              } else for (f = b3.child, null !== f && (f.return = b3); null !== f; ) {
                var h = f.dependencies;
                if (null !== h) {
                  g = f.child;
                  for (var k = h.firstContext; null !== k; ) {
                    if (k.context === d) {
                      if (1 === f.tag) {
                        k = mh(-1, c3 & -c3);
                        k.tag = 2;
                        var l = f.updateQueue;
                        if (null !== l) {
                          l = l.shared;
                          var m = l.pending;
                          null === m ? k.next = k : (k.next = m.next, m.next = k);
                          l.pending = k;
                        }
                      }
                      f.lanes |= c3;
                      k = f.alternate;
                      null !== k && (k.lanes |= c3);
                      bh(
                        f.return,
                        c3,
                        b3
                      );
                      h.lanes |= c3;
                      break;
                    }
                    k = k.next;
                  }
                } else if (10 === f.tag) g = f.type === b3.type ? null : f.child;
                else if (18 === f.tag) {
                  g = f.return;
                  if (null === g) throw Error(p(341));
                  g.lanes |= c3;
                  h = g.alternate;
                  null !== h && (h.lanes |= c3);
                  bh(g, c3, b3);
                  g = f.sibling;
                } else g = f.child;
                if (null !== g) g.return = f;
                else for (g = f; null !== g; ) {
                  if (g === b3) {
                    g = null;
                    break;
                  }
                  f = g.sibling;
                  if (null !== f) {
                    f.return = g.return;
                    g = f;
                    break;
                  }
                  g = g.return;
                }
                f = g;
              }
              Xi(a3, b3, e.children, c3);
              b3 = b3.child;
            }
            return b3;
          case 9:
            return e = b3.type, d = b3.pendingProps.children, ch(b3, c3), e = eh(e), d = d(e), b3.flags |= 1, Xi(a3, b3, d, c3), b3.child;
          case 14:
            return d = b3.type, e = Ci(d, b3.pendingProps), e = Ci(d.type, e), $i(a3, b3, d, e, c3);
          case 15:
            return bj(a3, b3, b3.type, b3.pendingProps, c3);
          case 17:
            return d = b3.type, e = b3.pendingProps, e = b3.elementType === d ? e : Ci(d, e), ij(a3, b3), b3.tag = 1, Zf(d) ? (a3 = true, cg(b3)) : a3 = false, ch(b3, c3), Gi(b3, d, e), Ii(b3, d, e, c3), jj(null, b3, d, true, a3, c3);
          case 19:
            return xj(a3, b3, c3);
          case 22:
            return dj(a3, b3, c3);
        }
        throw Error(p(156, b3.tag));
      };
      function Fk(a3, b3) {
        return ac(a3, b3);
      }
      function $k(a3, b3, c3, d) {
        this.tag = a3;
        this.key = c3;
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
        this.index = 0;
        this.ref = null;
        this.pendingProps = b3;
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
        this.mode = d;
        this.subtreeFlags = this.flags = 0;
        this.deletions = null;
        this.childLanes = this.lanes = 0;
        this.alternate = null;
      }
      function Bg(a3, b3, c3, d) {
        return new $k(a3, b3, c3, d);
      }
      function aj(a3) {
        a3 = a3.prototype;
        return !(!a3 || !a3.isReactComponent);
      }
      function Zk(a3) {
        if ("function" === typeof a3) return aj(a3) ? 1 : 0;
        if (void 0 !== a3 && null !== a3) {
          a3 = a3.$$typeof;
          if (a3 === Da) return 11;
          if (a3 === Ga) return 14;
        }
        return 2;
      }
      function Pg(a3, b3) {
        var c3 = a3.alternate;
        null === c3 ? (c3 = Bg(a3.tag, b3, a3.key, a3.mode), c3.elementType = a3.elementType, c3.type = a3.type, c3.stateNode = a3.stateNode, c3.alternate = a3, a3.alternate = c3) : (c3.pendingProps = b3, c3.type = a3.type, c3.flags = 0, c3.subtreeFlags = 0, c3.deletions = null);
        c3.flags = a3.flags & 14680064;
        c3.childLanes = a3.childLanes;
        c3.lanes = a3.lanes;
        c3.child = a3.child;
        c3.memoizedProps = a3.memoizedProps;
        c3.memoizedState = a3.memoizedState;
        c3.updateQueue = a3.updateQueue;
        b3 = a3.dependencies;
        c3.dependencies = null === b3 ? null : { lanes: b3.lanes, firstContext: b3.firstContext };
        c3.sibling = a3.sibling;
        c3.index = a3.index;
        c3.ref = a3.ref;
        return c3;
      }
      function Rg(a3, b3, c3, d, e, f) {
        var g = 2;
        d = a3;
        if ("function" === typeof a3) aj(a3) && (g = 1);
        else if ("string" === typeof a3) g = 5;
        else a: switch (a3) {
          case ya:
            return Tg(c3.children, e, f, b3);
          case za:
            g = 8;
            e |= 8;
            break;
          case Aa:
            return a3 = Bg(12, c3, b3, e | 2), a3.elementType = Aa, a3.lanes = f, a3;
          case Ea:
            return a3 = Bg(13, c3, b3, e), a3.elementType = Ea, a3.lanes = f, a3;
          case Fa:
            return a3 = Bg(19, c3, b3, e), a3.elementType = Fa, a3.lanes = f, a3;
          case Ia:
            return pj(c3, e, f, b3);
          default:
            if ("object" === typeof a3 && null !== a3) switch (a3.$$typeof) {
              case Ba:
                g = 10;
                break a;
              case Ca:
                g = 9;
                break a;
              case Da:
                g = 11;
                break a;
              case Ga:
                g = 14;
                break a;
              case Ha:
                g = 16;
                d = null;
                break a;
            }
            throw Error(p(130, null == a3 ? a3 : typeof a3, ""));
        }
        b3 = Bg(g, c3, b3, e);
        b3.elementType = a3;
        b3.type = d;
        b3.lanes = f;
        return b3;
      }
      function Tg(a3, b3, c3, d) {
        a3 = Bg(7, a3, d, b3);
        a3.lanes = c3;
        return a3;
      }
      function pj(a3, b3, c3, d) {
        a3 = Bg(22, a3, d, b3);
        a3.elementType = Ia;
        a3.lanes = c3;
        a3.stateNode = { isHidden: false };
        return a3;
      }
      function Qg(a3, b3, c3) {
        a3 = Bg(6, a3, null, b3);
        a3.lanes = c3;
        return a3;
      }
      function Sg(a3, b3, c3) {
        b3 = Bg(4, null !== a3.children ? a3.children : [], a3.key, b3);
        b3.lanes = c3;
        b3.stateNode = { containerInfo: a3.containerInfo, pendingChildren: null, implementation: a3.implementation };
        return b3;
      }
      function al(a3, b3, c3, d, e) {
        this.tag = b3;
        this.containerInfo = a3;
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
        this.timeoutHandle = -1;
        this.callbackNode = this.pendingContext = this.context = null;
        this.callbackPriority = 0;
        this.eventTimes = zc(0);
        this.expirationTimes = zc(-1);
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
        this.entanglements = zc(0);
        this.identifierPrefix = d;
        this.onRecoverableError = e;
        this.mutableSourceEagerHydrationData = null;
      }
      function bl(a3, b3, c3, d, e, f, g, h, k) {
        a3 = new al(a3, b3, c3, h, k);
        1 === b3 ? (b3 = 1, true === f && (b3 |= 8)) : b3 = 0;
        f = Bg(3, null, null, b3);
        a3.current = f;
        f.stateNode = a3;
        f.memoizedState = { element: d, isDehydrated: c3, cache: null, transitions: null, pendingSuspenseBoundaries: null };
        kh(f);
        return a3;
      }
      function cl(a3, b3, c3) {
        var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return { $$typeof: wa, key: null == d ? null : "" + d, children: a3, containerInfo: b3, implementation: c3 };
      }
      function dl(a3) {
        if (!a3) return Vf;
        a3 = a3._reactInternals;
        a: {
          if (Vb(a3) !== a3 || 1 !== a3.tag) throw Error(p(170));
          var b3 = a3;
          do {
            switch (b3.tag) {
              case 3:
                b3 = b3.stateNode.context;
                break a;
              case 1:
                if (Zf(b3.type)) {
                  b3 = b3.stateNode.__reactInternalMemoizedMergedChildContext;
                  break a;
                }
            }
            b3 = b3.return;
          } while (null !== b3);
          throw Error(p(171));
        }
        if (1 === a3.tag) {
          var c3 = a3.type;
          if (Zf(c3)) return bg(a3, c3, b3);
        }
        return b3;
      }
      function el(a3, b3, c3, d, e, f, g, h, k) {
        a3 = bl(c3, d, true, a3, e, f, g, h, k);
        a3.context = dl(null);
        c3 = a3.current;
        d = R();
        e = yi(c3);
        f = mh(d, e);
        f.callback = void 0 !== b3 && null !== b3 ? b3 : null;
        nh(c3, f, e);
        a3.current.lanes = e;
        Ac(a3, e, d);
        Dk(a3, d);
        return a3;
      }
      function fl(a3, b3, c3, d) {
        var e = b3.current, f = R(), g = yi(e);
        c3 = dl(c3);
        null === b3.context ? b3.context = c3 : b3.pendingContext = c3;
        b3 = mh(f, g);
        b3.payload = { element: a3 };
        d = void 0 === d ? null : d;
        null !== d && (b3.callback = d);
        a3 = nh(e, b3, g);
        null !== a3 && (gi(a3, e, g, f), oh(a3, e, g));
        return g;
      }
      function gl(a3) {
        a3 = a3.current;
        if (!a3.child) return null;
        switch (a3.child.tag) {
          case 5:
            return a3.child.stateNode;
          default:
            return a3.child.stateNode;
        }
      }
      function hl(a3, b3) {
        a3 = a3.memoizedState;
        if (null !== a3 && null !== a3.dehydrated) {
          var c3 = a3.retryLane;
          a3.retryLane = 0 !== c3 && c3 < b3 ? c3 : b3;
        }
      }
      function il(a3, b3) {
        hl(a3, b3);
        (a3 = a3.alternate) && hl(a3, b3);
      }
      function jl() {
        return null;
      }
      var kl = "function" === typeof reportError ? reportError : function(a3) {
        console.error(a3);
      };
      function ll(a3) {
        this._internalRoot = a3;
      }
      ml.prototype.render = ll.prototype.render = function(a3) {
        var b3 = this._internalRoot;
        if (null === b3) throw Error(p(409));
        fl(a3, b3, null, null);
      };
      ml.prototype.unmount = ll.prototype.unmount = function() {
        var a3 = this._internalRoot;
        if (null !== a3) {
          this._internalRoot = null;
          var b3 = a3.containerInfo;
          Rk(function() {
            fl(null, a3, null, null);
          });
          b3[uf] = null;
        }
      };
      function ml(a3) {
        this._internalRoot = a3;
      }
      ml.prototype.unstable_scheduleHydration = function(a3) {
        if (a3) {
          var b3 = Hc();
          a3 = { blockedOn: null, target: a3, priority: b3 };
          for (var c3 = 0; c3 < Qc.length && 0 !== b3 && b3 < Qc[c3].priority; c3++) ;
          Qc.splice(c3, 0, a3);
          0 === c3 && Vc(a3);
        }
      };
      function nl(a3) {
        return !(!a3 || 1 !== a3.nodeType && 9 !== a3.nodeType && 11 !== a3.nodeType);
      }
      function ol(a3) {
        return !(!a3 || 1 !== a3.nodeType && 9 !== a3.nodeType && 11 !== a3.nodeType && (8 !== a3.nodeType || " react-mount-point-unstable " !== a3.nodeValue));
      }
      function pl() {
      }
      function ql(a3, b3, c3, d, e) {
        if (e) {
          if ("function" === typeof d) {
            var f = d;
            d = function() {
              var a4 = gl(g);
              f.call(a4);
            };
          }
          var g = el(b3, d, a3, 0, null, false, false, "", pl);
          a3._reactRootContainer = g;
          a3[uf] = g.current;
          sf(8 === a3.nodeType ? a3.parentNode : a3);
          Rk();
          return g;
        }
        for (; e = a3.lastChild; ) a3.removeChild(e);
        if ("function" === typeof d) {
          var h = d;
          d = function() {
            var a4 = gl(k);
            h.call(a4);
          };
        }
        var k = bl(a3, 0, false, null, null, false, false, "", pl);
        a3._reactRootContainer = k;
        a3[uf] = k.current;
        sf(8 === a3.nodeType ? a3.parentNode : a3);
        Rk(function() {
          fl(b3, k, c3, d);
        });
        return k;
      }
      function rl(a3, b3, c3, d, e) {
        var f = c3._reactRootContainer;
        if (f) {
          var g = f;
          if ("function" === typeof e) {
            var h = e;
            e = function() {
              var a4 = gl(g);
              h.call(a4);
            };
          }
          fl(b3, g, a3, e);
        } else g = ql(c3, b3, a3, e, d);
        return gl(g);
      }
      Ec = function(a3) {
        switch (a3.tag) {
          case 3:
            var b3 = a3.stateNode;
            if (b3.current.memoizedState.isDehydrated) {
              var c3 = tc(b3.pendingLanes);
              0 !== c3 && (Cc(b3, c3 | 1), Dk(b3, B()), 0 === (K & 6) && (Gj = B() + 500, jg()));
            }
            break;
          case 13:
            Rk(function() {
              var b4 = ih(a3, 1);
              if (null !== b4) {
                var c4 = R();
                gi(b4, a3, 1, c4);
              }
            }), il(a3, 1);
        }
      };
      Fc = function(a3) {
        if (13 === a3.tag) {
          var b3 = ih(a3, 134217728);
          if (null !== b3) {
            var c3 = R();
            gi(b3, a3, 134217728, c3);
          }
          il(a3, 134217728);
        }
      };
      Gc = function(a3) {
        if (13 === a3.tag) {
          var b3 = yi(a3), c3 = ih(a3, b3);
          if (null !== c3) {
            var d = R();
            gi(c3, a3, b3, d);
          }
          il(a3, b3);
        }
      };
      Hc = function() {
        return C;
      };
      Ic = function(a3, b3) {
        var c3 = C;
        try {
          return C = a3, b3();
        } finally {
          C = c3;
        }
      };
      yb = function(a3, b3, c3) {
        switch (b3) {
          case "input":
            bb(a3, c3);
            b3 = c3.name;
            if ("radio" === c3.type && null != b3) {
              for (c3 = a3; c3.parentNode; ) c3 = c3.parentNode;
              c3 = c3.querySelectorAll("input[name=" + JSON.stringify("" + b3) + '][type="radio"]');
              for (b3 = 0; b3 < c3.length; b3++) {
                var d = c3[b3];
                if (d !== a3 && d.form === a3.form) {
                  var e = Db(d);
                  if (!e) throw Error(p(90));
                  Wa(d);
                  bb(d, e);
                }
              }
            }
            break;
          case "textarea":
            ib(a3, c3);
            break;
          case "select":
            b3 = c3.value, null != b3 && fb(a3, !!c3.multiple, b3, false);
        }
      };
      Gb = Qk;
      Hb = Rk;
      var sl = { usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Qk] };
      var tl = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" };
      var ul = { bundleType: tl.bundleType, version: tl.version, rendererPackageName: tl.rendererPackageName, rendererConfig: tl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a3) {
        a3 = Zb(a3);
        return null === a3 ? null : a3.stateNode;
      }, findFiberByHostInstance: tl.findFiberByHostInstance || jl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
      if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
        vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!vl.isDisabled && vl.supportsFiber) try {
          kc = vl.inject(ul), lc = vl;
        } catch (a3) {
        }
      }
      var vl;
      exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl;
      exports.createPortal = function(a3, b3) {
        var c3 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!nl(b3)) throw Error(p(200));
        return cl(a3, b3, null, c3);
      };
      exports.createRoot = function(a3, b3) {
        if (!nl(a3)) throw Error(p(299));
        var c3 = false, d = "", e = kl;
        null !== b3 && void 0 !== b3 && (true === b3.unstable_strictMode && (c3 = true), void 0 !== b3.identifierPrefix && (d = b3.identifierPrefix), void 0 !== b3.onRecoverableError && (e = b3.onRecoverableError));
        b3 = bl(a3, 1, false, null, null, c3, false, d, e);
        a3[uf] = b3.current;
        sf(8 === a3.nodeType ? a3.parentNode : a3);
        return new ll(b3);
      };
      exports.findDOMNode = function(a3) {
        if (null == a3) return null;
        if (1 === a3.nodeType) return a3;
        var b3 = a3._reactInternals;
        if (void 0 === b3) {
          if ("function" === typeof a3.render) throw Error(p(188));
          a3 = Object.keys(a3).join(",");
          throw Error(p(268, a3));
        }
        a3 = Zb(b3);
        a3 = null === a3 ? null : a3.stateNode;
        return a3;
      };
      exports.flushSync = function(a3) {
        return Rk(a3);
      };
      exports.hydrate = function(a3, b3, c3) {
        if (!ol(b3)) throw Error(p(200));
        return rl(null, a3, b3, true, c3);
      };
      exports.hydrateRoot = function(a3, b3, c3) {
        if (!nl(a3)) throw Error(p(405));
        var d = null != c3 && c3.hydratedSources || null, e = false, f = "", g = kl;
        null !== c3 && void 0 !== c3 && (true === c3.unstable_strictMode && (e = true), void 0 !== c3.identifierPrefix && (f = c3.identifierPrefix), void 0 !== c3.onRecoverableError && (g = c3.onRecoverableError));
        b3 = el(b3, null, a3, 1, null != c3 ? c3 : null, e, false, f, g);
        a3[uf] = b3.current;
        sf(a3);
        if (d) for (a3 = 0; a3 < d.length; a3++) c3 = d[a3], e = c3._getVersion, e = e(c3._source), null == b3.mutableSourceEagerHydrationData ? b3.mutableSourceEagerHydrationData = [c3, e] : b3.mutableSourceEagerHydrationData.push(
          c3,
          e
        );
        return new ml(b3);
      };
      exports.render = function(a3, b3, c3) {
        if (!ol(b3)) throw Error(p(200));
        return rl(null, a3, b3, false, c3);
      };
      exports.unmountComponentAtNode = function(a3) {
        if (!ol(a3)) throw Error(p(40));
        return a3._reactRootContainer ? (Rk(function() {
          rl(null, null, a3, false, function() {
            a3._reactRootContainer = null;
            a3[uf] = null;
          });
        }), true) : false;
      };
      exports.unstable_batchedUpdates = Qk;
      exports.unstable_renderSubtreeIntoContainer = function(a3, b3, c3, d) {
        if (!ol(c3)) throw Error(p(200));
        if (null == a3 || void 0 === a3._reactInternals) throw Error(p(38));
        return rl(a3, b3, c3, false, d);
      };
      exports.version = "18.3.1-next-f1338f8080-20240426";
    }
  });

  // node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/index.js
  var require_react_dom = __commonJS({
    "node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/index.js"(exports, module) {
      "use strict";
      function checkDCE() {
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
          return;
        }
        if (false) {
          throw new Error("^_^");
        }
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
        } catch (err) {
          console.error(err);
        }
      }
      if (true) {
        checkDCE();
        module.exports = require_react_dom_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/client.js
  var require_client = __commonJS({
    "node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/client.js"(exports) {
      "use strict";
      var m = require_react_dom();
      if (true) {
        exports.createRoot = m.createRoot;
        exports.hydrateRoot = m.hydrateRoot;
      } else {
        i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        exports.createRoot = function(c3, o) {
          i.usingClientEntryPoint = true;
          try {
            return m.createRoot(c3, o);
          } finally {
            i.usingClientEntryPoint = false;
          }
        };
        exports.hydrateRoot = function(c3, h, o) {
          i.usingClientEntryPoint = true;
          try {
            return m.hydrateRoot(c3, h, o);
          } finally {
            i.usingClientEntryPoint = false;
          }
        };
      }
      var i;
    }
  });

  // node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.production.min.js
  var require_react_jsx_runtime_production_min = __commonJS({
    "node_modules/.pnpm/react@18.3.1/node_modules/react/cjs/react-jsx-runtime.production.min.js"(exports) {
      "use strict";
      var f = require_react();
      var k = /* @__PURE__ */ Symbol.for("react.element");
      var l = /* @__PURE__ */ Symbol.for("react.fragment");
      var m = Object.prototype.hasOwnProperty;
      var n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;
      var p = { key: true, ref: true, __self: true, __source: true };
      function q(c3, a3, g) {
        var b3, d = {}, e = null, h = null;
        void 0 !== g && (e = "" + g);
        void 0 !== a3.key && (e = "" + a3.key);
        void 0 !== a3.ref && (h = a3.ref);
        for (b3 in a3) m.call(a3, b3) && !p.hasOwnProperty(b3) && (d[b3] = a3[b3]);
        if (c3 && c3.defaultProps) for (b3 in a3 = c3.defaultProps, a3) void 0 === d[b3] && (d[b3] = a3[b3]);
        return { $$typeof: k, type: c3, key: e, ref: h, props: d, _owner: n.current };
      }
      exports.Fragment = l;
      exports.jsx = q;
      exports.jsxs = q;
    }
  });

  // node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
  var require_jsx_runtime = __commonJS({
    "node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_react_jsx_runtime_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // src/studio.tsx
  var import_react122 = __toESM(require_react(), 1);
  var import_client = __toESM(require_client(), 1);

  // src/ui/Studio.tsx
  var import_react121 = __toESM(require_react(), 1);

  // node_modules/.pnpm/@remotion+player@4.0.509_re_cb2bd188877017773bf16e23f65eb9c1/node_modules/@remotion/player/dist/esm/index.mjs
  var import_react91 = __toESM(require_react(), 1);
  var import_jsx_runtime41 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime42 = __toESM(require_jsx_runtime(), 1);

  // node_modules/.pnpm/remotion@4.0.509_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/remotion/dist/esm/index.mjs
  var import_react = __toESM(require_react(), 1);
  var import_react2 = __toESM(require_react(), 1);
  var import_react_dom = __toESM(require_react_dom(), 1);
  var import_react3 = __toESM(require_react(), 1);
  var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
  var import_react4 = __toESM(require_react(), 1);
  var import_react5 = __toESM(require_react(), 1);
  var import_react6 = __toESM(require_react(), 1);
  var import_react7 = __toESM(require_react(), 1);
  var import_react8 = __toESM(require_react(), 1);
  var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
  var import_react9 = __toESM(require_react(), 1);
  var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
  var import_react10 = __toESM(require_react(), 1);
  var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
  var import_react11 = __toESM(require_react(), 1);
  var import_react12 = __toESM(require_react(), 1);
  var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
  var import_react13 = __toESM(require_react(), 1);
  var import_react14 = __toESM(require_react(), 1);
  var import_react15 = __toESM(require_react(), 1);
  var import_react16 = __toESM(require_react(), 1);
  var React6 = __toESM(require_react(), 1);
  var import_react17 = __toESM(require_react(), 1);
  var import_react18 = __toESM(require_react(), 1);
  var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
  var import_react19 = __toESM(require_react(), 1);
  var import_react20 = __toESM(require_react(), 1);
  var import_react21 = __toESM(require_react(), 1);
  var import_react22 = __toESM(require_react(), 1);
  var import_react23 = __toESM(require_react(), 1);
  var import_react24 = __toESM(require_react(), 1);
  var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
  var import_react25 = __toESM(require_react(), 1);
  var import_react26 = __toESM(require_react(), 1);
  var import_react27 = __toESM(require_react(), 1);
  var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
  var import_react28 = __toESM(require_react(), 1);
  var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);
  var import_react29 = __toESM(require_react(), 1);
  var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);
  var import_react30 = __toESM(require_react(), 1);
  var import_react31 = __toESM(require_react(), 1);
  var import_react32 = __toESM(require_react(), 1);
  var import_react33 = __toESM(require_react(), 1);
  var import_react34 = __toESM(require_react(), 1);
  var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);
  var import_react35 = __toESM(require_react(), 1);
  var import_jsx_runtime13 = __toESM(require_jsx_runtime(), 1);
  var import_react36 = __toESM(require_react(), 1);
  var import_react37 = __toESM(require_react(), 1);
  var import_react38 = __toESM(require_react(), 1);
  var import_react39 = __toESM(require_react(), 1);
  var import_jsx_runtime14 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime15 = __toESM(require_jsx_runtime(), 1);
  var import_react40 = __toESM(require_react(), 1);
  var import_react41 = __toESM(require_react(), 1);
  var import_jsx_runtime16 = __toESM(require_jsx_runtime(), 1);
  var import_react42 = __toESM(require_react(), 1);
  var import_react43 = __toESM(require_react(), 1);
  var import_jsx_runtime17 = __toESM(require_jsx_runtime(), 1);
  var import_react44 = __toESM(require_react(), 1);
  var import_react45 = __toESM(require_react(), 1);
  var import_jsx_runtime18 = __toESM(require_jsx_runtime(), 1);
  var import_react46 = __toESM(require_react(), 1);
  var import_jsx_runtime19 = __toESM(require_jsx_runtime(), 1);
  var import_react47 = __toESM(require_react(), 1);
  var import_react48 = __toESM(require_react(), 1);
  var import_react49 = __toESM(require_react(), 1);
  var import_react50 = __toESM(require_react(), 1);
  var import_react51 = __toESM(require_react(), 1);
  var import_jsx_runtime20 = __toESM(require_jsx_runtime(), 1);
  var import_react52 = __toESM(require_react(), 1);
  var import_react53 = __toESM(require_react(), 1);
  var import_react54 = __toESM(require_react(), 1);
  var import_react55 = __toESM(require_react(), 1);
  var import_react56 = __toESM(require_react(), 1);
  var import_react57 = __toESM(require_react(), 1);
  var import_react58 = __toESM(require_react(), 1);
  var import_jsx_runtime21 = __toESM(require_jsx_runtime(), 1);
  var import_react59 = __toESM(require_react(), 1);
  var import_react60 = __toESM(require_react(), 1);
  var import_react61 = __toESM(require_react(), 1);
  var import_react62 = __toESM(require_react(), 1);
  var import_react63 = __toESM(require_react(), 1);
  var import_jsx_runtime22 = __toESM(require_jsx_runtime(), 1);
  var import_react64 = __toESM(require_react(), 1);
  var import_jsx_runtime23 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime24 = __toESM(require_jsx_runtime(), 1);
  var import_react65 = __toESM(require_react(), 1);
  var import_jsx_runtime25 = __toESM(require_jsx_runtime(), 1);
  var import_react66 = __toESM(require_react(), 1);
  var import_jsx_runtime26 = __toESM(require_jsx_runtime(), 1);
  var import_react67 = __toESM(require_react(), 1);
  var import_jsx_runtime27 = __toESM(require_jsx_runtime(), 1);
  var import_react68 = __toESM(require_react(), 1);
  var import_jsx_runtime28 = __toESM(require_jsx_runtime(), 1);
  var import_react69 = __toESM(require_react(), 1);
  var import_jsx_runtime29 = __toESM(require_jsx_runtime(), 1);
  var import_react70 = __toESM(require_react(), 1);
  var import_jsx_runtime30 = __toESM(require_jsx_runtime(), 1);
  var import_react71 = __toESM(require_react(), 1);
  var import_react72 = __toESM(require_react(), 1);
  var import_react73 = __toESM(require_react(), 1);
  var import_jsx_runtime31 = __toESM(require_jsx_runtime(), 1);
  var import_react74 = __toESM(require_react(), 1);
  var import_react75 = __toESM(require_react(), 1);
  var import_react76 = __toESM(require_react(), 1);
  var import_jsx_runtime32 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime33 = __toESM(require_jsx_runtime(), 1);
  var import_react77 = __toESM(require_react(), 1);
  var import_react78 = __toESM(require_react(), 1);
  var import_react79 = __toESM(require_react(), 1);
  var import_react80 = __toESM(require_react(), 1);
  var import_react81 = __toESM(require_react(), 1);
  var import_react82 = __toESM(require_react(), 1);
  var import_jsx_runtime34 = __toESM(require_jsx_runtime(), 1);
  var import_react83 = __toESM(require_react(), 1);
  var import_react84 = __toESM(require_react(), 1);
  var import_jsx_runtime35 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime36 = __toESM(require_jsx_runtime(), 1);
  var import_react85 = __toESM(require_react(), 1);
  var import_jsx_runtime37 = __toESM(require_jsx_runtime(), 1);
  var import_react86 = __toESM(require_react(), 1);
  var import_react87 = __toESM(require_react(), 1);
  var import_jsx_runtime38 = __toESM(require_jsx_runtime(), 1);
  var import_react88 = __toESM(require_react(), 1);
  var import_react89 = __toESM(require_react(), 1);
  var import_react90 = __toESM(require_react(), 1);
  var import_jsx_runtime39 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime40 = __toESM(require_jsx_runtime(), 1);
  var __defProp2 = Object.defineProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp2(target, name, {
        get: all[name],
        enumerable: true,
        configurable: true,
        set: (newValue) => all[name] = () => newValue
      });
  };
  if (typeof import_react.createContext !== "function") {
    const err = [
      'Remotion requires React.createContext, but it is "undefined".',
      'If you are in a React Server Component, turn it into a client component by adding "use client" at the top of the file.',
      "",
      "Before:",
      '  import {useCurrentFrame} from "remotion";',
      "",
      "After:",
      '  "use client";',
      '  import {useCurrentFrame} from "remotion";'
    ];
    throw new Error(err.join(`
`));
  }
  var CanUseRemotionHooks = (0, import_react3.createContext)(false);
  var CanUseRemotionHooksProvider = ({ children }) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CanUseRemotionHooks.Provider, {
      value: true,
      children
    });
  };
  var CompositionRenderErrorContext = (0, import_react4.createContext)({
    setError: () => {
    },
    clearError: () => {
    }
  });
  var getHot = () => {
    try {
      if (typeof __webpack_module__ === "undefined") {
        return null;
      }
      return __webpack_module__.hot ?? null;
    } catch {
      return null;
    }
  };
  var CompositionErrorBoundary = class extends import_react5.default.Component {
    state = { hasError: false };
    hmrStatusHandler = null;
    static getDerivedStateFromError() {
      return { hasError: true };
    }
    componentDidCatch(error2) {
      this.props.onError(error2);
      this.subscribeToHmrReset();
    }
    componentDidMount() {
      if (!this.state.hasError) {
        this.props.onClear();
      }
    }
    componentDidUpdate(_prevProps, prevState) {
      if (prevState.hasError && !this.state.hasError) {
        this.props.onClear();
      }
    }
    componentWillUnmount() {
      this.unsubscribeFromHmrReset();
    }
    subscribeToHmrReset() {
      if (this.hmrStatusHandler) {
        return;
      }
      const hot = getHot();
      if (!hot) {
        return;
      }
      const handler = (status) => {
        if (status !== "idle") {
          return;
        }
        this.unsubscribeFromHmrReset();
        this.setState({ hasError: false });
      };
      this.hmrStatusHandler = handler;
      hot.addStatusHandler(handler);
    }
    unsubscribeFromHmrReset() {
      const handler = this.hmrStatusHandler;
      if (!handler) {
        return;
      }
      this.hmrStatusHandler = null;
      const hot = getHot();
      if (!hot) {
        return;
      }
      hot.removeStatusHandler(handler);
    }
    render() {
      if (this.state.hasError) {
        return null;
      }
      return this.props.children;
    }
  };
  var CompositionManager = (0, import_react6.createContext)({
    compositions: [],
    folders: [],
    currentCompositionMetadata: null,
    canvasContent: null
  });
  var CompositionSetters = (0, import_react6.createContext)({
    registerComposition: () => {
      return;
    },
    unregisterComposition: () => {
      return;
    },
    registerFolder: () => {
      return;
    },
    unregisterFolder: () => {
      return;
    },
    setCanvasContent: () => {
      return;
    },
    onlyRenderComposition: null
  });
  var NonceContext = (0, import_react8.createContext)({
    getNonce: () => 0
  });
  var fastRefreshNonce = 0;
  try {
    if (typeof __webpack_module__ !== "undefined") {
      if (__webpack_module__.hot) {
        __webpack_module__.hot.addStatusHandler((status) => {
          if (status === "idle") {
            fastRefreshNonce++;
          }
        });
      }
    }
  } catch {
  }
  var useNonce = () => {
    const context = (0, import_react8.useContext)(NonceContext);
    const nonce = context.getNonce();
    const nonceRef = (0, import_react8.useRef)(nonce);
    nonceRef.current = nonce;
    const history2 = (0, import_react8.useRef)([[fastRefreshNonce, nonce]]);
    const get = (0, import_react8.useCallback)(() => {
      if (fastRefreshNonce !== history2.current[history2.current.length - 1][0]) {
        history2.current = [
          ...history2.current,
          [fastRefreshNonce, nonceRef.current]
        ];
      }
      return history2.current;
    }, [history2]);
    return (0, import_react8.useMemo)(() => {
      return { get };
    }, [get]);
  };
  function truthy(value) {
    return Boolean(value);
  }
  var getRegex = () => /^([a-zA-Z0-9-\u4E00-\u9FFF])+$/g;
  var isFolderNameValid = (name) => name.match(getRegex());
  var validateFolderName = (name) => {
    if (name === void 0 || name === null) {
      throw new TypeError("You must pass a name to a <Folder />.");
    }
    if (typeof name !== "string") {
      throw new TypeError(`The "name" you pass into <Folder /> must be a string. Got: ${typeof name}`);
    }
    if (!isFolderNameValid(name)) {
      throw new Error(`Folder name can only contain a-z, A-Z, 0-9 and -. You passed ${name}`);
    }
  };
  var invalidFolderNameErrorMessage = `Folder name must match ${String(getRegex())}`;
  var FolderContext = (0, import_react7.createContext)({
    folderName: null,
    parentName: null
  });
  var Folder = (props) => {
    const { name, children } = props;
    const parent = (0, import_react7.useContext)(FolderContext);
    const { registerFolder, unregisterFolder } = (0, import_react7.useContext)(CompositionSetters);
    const nonce = useNonce();
    const stack = props._remotionInternalStack ?? null;
    validateFolderName(name);
    const parentNameArr = [parent.parentName, parent.folderName].filter(truthy);
    const parentName = parentNameArr.length === 0 ? null : parentNameArr.join("/");
    const value = (0, import_react7.useMemo)(() => {
      return {
        folderName: name,
        parentName
      };
    }, [name, parentName]);
    (0, import_react7.useEffect)(() => {
      registerFolder(name, parentName, nonce.get(), stack);
      return () => {
        unregisterFolder(name, parentName);
      };
    }, [
      name,
      parent.folderName,
      parentName,
      registerFolder,
      unregisterFolder,
      nonce,
      stack
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(FolderContext.Provider, {
      value,
      children
    });
  };
  function getNodeEnvString() {
    return ["NOD", "E_EN", "V"].join("");
  }
  var getEnvString = () => {
    return ["e", "nv"].join("");
  };
  var getRemotionEnvironment = () => {
    const isPlayer = typeof window !== "undefined" && window.remotion_isPlayer;
    const isRendering = typeof window !== "undefined" && typeof window.process !== "undefined" && typeof window.process.env !== "undefined" && (window.process[getEnvString()][getNodeEnvString()] === "test" || window.process[getEnvString()][getNodeEnvString()] === "production" && typeof window !== "undefined" && typeof window.remotion_puppeteerTimeout !== "undefined");
    const isStudio = typeof window !== "undefined" && window.remotion_isStudio;
    const isReadOnlyStudio = typeof window !== "undefined" && window.remotion_isReadOnlyStudio;
    return {
      isStudio,
      isRendering,
      isPlayer,
      isReadOnlyStudio,
      isClientSideRendering: false
    };
  };
  var DATE_TOKEN = "remotion-date:";
  var FILE_TOKEN = "remotion-file:";
  var serializeJSONWithSpecialTypes = ({
    data,
    indent,
    staticBase
  }) => {
    let customDateUsed = false;
    let customFileUsed = false;
    let mapUsed = false;
    let setUsed = false;
    try {
      const serializedString = JSON.stringify(data, function(key, value) {
        const item = this[key];
        if (item instanceof Date) {
          customDateUsed = true;
          return `${DATE_TOKEN}${item.toISOString()}`;
        }
        if (item instanceof Map) {
          mapUsed = true;
          return value;
        }
        if (item instanceof Set) {
          setUsed = true;
          return value;
        }
        if (typeof item === "string" && staticBase !== null && item.startsWith(staticBase)) {
          customFileUsed = true;
          return `${FILE_TOKEN}${item.replace(staticBase + "/", "")}`;
        }
        return value;
      }, indent);
      return { serializedString, customDateUsed, customFileUsed, mapUsed, setUsed };
    } catch (err) {
      throw new Error("Could not serialize the passed input props to JSON: " + err.message);
    }
  };
  var deserializeJSONWithSpecialTypes = (data) => {
    return JSON.parse(data, (_, value) => {
      if (typeof value === "string" && value.startsWith(DATE_TOKEN)) {
        return new Date(value.replace(DATE_TOKEN, ""));
      }
      if (typeof value === "string" && value.startsWith(FILE_TOKEN)) {
        return `${window.remotion_staticBase}/${value.replace(FILE_TOKEN, "")}`;
      }
      return value;
    });
  };
  var serializeThenDeserialize = (props) => {
    return deserializeJSONWithSpecialTypes(serializeJSONWithSpecialTypes({
      data: props,
      indent: 2,
      staticBase: window.remotion_staticBase
    }).serializedString);
  };
  var serializeThenDeserializeInStudio = (props) => {
    if (getRemotionEnvironment().isStudio) {
      return serializeThenDeserialize(props);
    }
    return props;
  };
  var IsPlayerContext = (0, import_react9.createContext)(false);
  var IsPlayerContextProvider = ({
    children
  }) => {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(IsPlayerContext.Provider, {
      value: true,
      children
    });
  };
  var useIsPlayer = () => {
    return (0, import_react9.useContext)(IsPlayerContext);
  };
  var hasTailwindClassName = ({
    className: className2,
    classPrefix,
    type
  }) => {
    if (!className2) {
      return false;
    }
    if (type === "exact") {
      const split = className2.split(" ");
      return classPrefix.some((token) => {
        return split.some((part) => {
          return part.trim() === token || part.trim().endsWith(`:${token}`) || part.trim().endsWith(`!${token}`);
        });
      });
    }
    return classPrefix.some((prefix) => {
      return className2.startsWith(prefix) || className2.includes(` ${prefix}`) || className2.includes(`!${prefix}`) || className2.includes(`:${prefix}`);
    });
  };
  var AbsoluteFillElementRefForwarding = (props, ref) => {
    const { style: style2, ...other } = props;
    const actualStyle = (0, import_react10.useMemo)(() => {
      return {
        position: "absolute",
        top: hasTailwindClassName({
          className: other.className,
          classPrefix: ["top-", "inset-"],
          type: "prefix"
        }) ? void 0 : 0,
        left: hasTailwindClassName({
          className: other.className,
          classPrefix: ["left-", "inset-"],
          type: "prefix"
        }) ? void 0 : 0,
        right: hasTailwindClassName({
          className: other.className,
          classPrefix: ["right-", "inset-"],
          type: "prefix"
        }) ? void 0 : 0,
        bottom: hasTailwindClassName({
          className: other.className,
          classPrefix: ["bottom-", "inset-"],
          type: "prefix"
        }) ? void 0 : 0,
        width: hasTailwindClassName({
          className: other.className,
          classPrefix: ["w-"],
          type: "prefix"
        }) ? void 0 : "100%",
        height: hasTailwindClassName({
          className: other.className,
          classPrefix: ["h-"],
          type: "prefix"
        }) ? void 0 : "100%",
        display: hasTailwindClassName({
          className: other.className,
          classPrefix: [
            "block",
            "inline-block",
            "inline",
            "flex",
            "inline-flex",
            "flow-root",
            "grid",
            "inline-grid",
            "contents",
            "list-item",
            "hidden"
          ],
          type: "exact"
        }) ? void 0 : "flex",
        flexDirection: hasTailwindClassName({
          className: other.className,
          classPrefix: [
            "flex-row",
            "flex-col",
            "flex-row-reverse",
            "flex-col-reverse"
          ],
          type: "exact"
        }) ? void 0 : "column",
        ...style2
      };
    }, [other.className, style2]);
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", {
      ref,
      style: actualStyle,
      ...other
    });
  };
  var AbsoluteFillElement = (0, import_react10.forwardRef)(AbsoluteFillElementRefForwarding);
  var rotate = {
    transform: `rotate(90deg)`
  };
  var ICON_SIZE = 40;
  var label = {
    color: "white",
    fontSize: 14,
    fontFamily: "sans-serif"
  };
  var container = {
    justifyContent: "center",
    alignItems: "center"
  };
  var Loading = () => {
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(AbsoluteFillElement, {
      style: container,
      id: "remotion-comp-loading",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("style", {
          type: "text/css",
          children: `
				@keyframes anim {
					from {
						opacity: 0
					}
					to {
						opacity: 1
					}
				}
				#remotion-comp-loading {
					animation: anim 2s;
					animation-fill-mode: forwards;
				}
			`
        }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("svg", {
          width: ICON_SIZE,
          height: ICON_SIZE,
          viewBox: "-100 -100 400 400",
          style: rotate,
          children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", {
            fill: "#555",
            stroke: "#555",
            strokeWidth: "100",
            strokeLinejoin: "round",
            d: "M 2 172 a 196 100 0 0 0 195 5 A 196 240 0 0 0 100 2.259 A 196 240 0 0 0 2 172 z"
          })
        }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("p", {
          style: label,
          children: [
            "Resolving ",
            "<Suspense>",
            "..."
          ]
        })
      ]
    });
  };
  var _portalNode = null;
  var portalNodeCurrentScale = 1;
  var portalNodeCurrentScaleListeners = [];
  var setPortalNodeCurrentScale = (scale) => {
    if (portalNodeCurrentScale === scale) {
      return;
    }
    portalNodeCurrentScale = scale;
    for (const listener of portalNodeCurrentScaleListeners) {
      listener();
    }
  };
  var portalNode = () => {
    if (!_portalNode) {
      if (typeof document === "undefined") {
        throw new Error("Tried to call an API that only works in the browser from outside the browser");
      }
      _portalNode = document.createElement("div");
      _portalNode.style.position = "absolute";
      _portalNode.style.top = "0px";
      _portalNode.style.left = "0px";
      _portalNode.style.right = "0px";
      _portalNode.style.bottom = "0px";
      _portalNode.style.width = "100%";
      _portalNode.style.height = "100%";
      _portalNode.style.display = "flex";
      _portalNode.style.flexDirection = "column";
      const containerNode = document.createElement("div");
      containerNode.style.position = "fixed";
      containerNode.style.top = "-999999px";
      containerNode.appendChild(_portalNode);
      document.body.appendChild(containerNode);
    }
    return _portalNode;
  };
  var getKey = () => {
    return `remotion_inputPropsOverride` + window.location.origin;
  };
  var getInputPropsOverride = () => {
    if (typeof localStorage === "undefined")
      return null;
    const override = localStorage.getItem(getKey());
    if (!override)
      return null;
    return JSON.parse(override);
  };
  var setInputPropsOverride = (override) => {
    if (typeof localStorage === "undefined")
      return;
    if (override === null) {
      localStorage.removeItem(getKey());
      return;
    }
    localStorage.setItem(getKey(), JSON.stringify(override));
  };
  var didWarnSSRImport = false;
  var warnOnceSSRImport = () => {
    if (didWarnSSRImport) {
      return;
    }
    didWarnSSRImport = true;
    console.warn("Called `getInputProps()` on the server. This function is not available server-side and has returned an empty object.");
    console.warn("To hide this warning, don't call this function on the server:");
    console.warn("  typeof window === 'undefined' ? {} : getInputProps()");
  };
  var getInputProps = () => {
    if (typeof window === "undefined") {
      warnOnceSSRImport();
      return {};
    }
    if (getRemotionEnvironment().isPlayer) {
      throw new Error("You cannot call `getInputProps()` from a <Player>. Instead, the props are available as React props from component that you passed as `component` prop.");
    }
    const override = getInputPropsOverride();
    if (override) {
      return override;
    }
    if (typeof window === "undefined" || typeof window.remotion_inputProps === "undefined") {
      throw new Error("Cannot call `getInputProps()` - window.remotion_inputProps is not set. This API is only available if you are in the Studio, or while you are rendering server-side.");
    }
    const param = window.remotion_inputProps;
    if (!param) {
      return {};
    }
    const parsed = deserializeJSONWithSpecialTypes(param);
    return parsed;
  };
  var EditorPropsContext = (0, import_react12.createContext)({
    props: {},
    updateProps: () => {
      throw new Error("Not implemented");
    }
  });
  var timeValueRef = import_react12.default.createRef();
  var EditorPropsProvider = ({ children }) => {
    const [props, setProps] = import_react12.default.useState({});
    const updateProps = (0, import_react12.useCallback)(({
      defaultProps,
      id,
      newProps
    }) => {
      setProps((prev) => {
        return {
          ...prev,
          [id]: typeof newProps === "function" ? newProps(prev[id] ?? defaultProps) : newProps
        };
      });
    }, []);
    const ctx = (0, import_react12.useMemo)(() => {
      return { props, updateProps };
    }, [props, updateProps]);
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(EditorPropsContext.Provider, {
      value: ctx,
      children
    });
  };
  var RemotionEnvironmentContext = import_react14.default.createContext(null);
  var useRemotionEnvironment = () => {
    const context = (0, import_react13.useContext)(RemotionEnvironmentContext);
    const [env] = (0, import_react13.useState)(() => getRemotionEnvironment());
    return context ?? env;
  };
  function validateDimension(amount, nameOfProp, location2) {
    if (typeof amount !== "number") {
      throw new Error(`The "${nameOfProp}" prop ${location2} must be a number, but you passed a value of type ${typeof amount}`);
    }
    if (isNaN(amount)) {
      throw new TypeError(`The "${nameOfProp}" prop ${location2} must not be NaN, but is NaN.`);
    }
    if (!Number.isFinite(amount)) {
      throw new TypeError(`The "${nameOfProp}" prop ${location2} must be finite, but is ${amount}.`);
    }
    if (amount % 1 !== 0) {
      throw new TypeError(`The "${nameOfProp}" prop ${location2} must be an integer, but is ${amount}.`);
    }
    if (amount <= 0) {
      throw new TypeError(`The "${nameOfProp}" prop ${location2} must be positive, but got ${amount}.`);
    }
  }
  function validateDurationInFrames(durationInFrames, options) {
    const { allowFloats, component } = options;
    if (typeof durationInFrames === "undefined") {
      throw new Error(`The "durationInFrames" prop ${component} is missing.`);
    }
    if (typeof durationInFrames !== "number") {
      throw new Error(`The "durationInFrames" prop ${component} must be a number, but you passed a value of type ${typeof durationInFrames}`);
    }
    if (durationInFrames <= 0) {
      throw new TypeError(`The "durationInFrames" prop ${component} must be positive, but got ${durationInFrames}.`);
    }
    if (!allowFloats && durationInFrames % 1 !== 0) {
      throw new TypeError(`The "durationInFrames" prop ${component} must be an integer, but got ${durationInFrames}.`);
    }
    if (!Number.isFinite(durationInFrames)) {
      throw new TypeError(`The "durationInFrames" prop ${component} must be finite, but got ${durationInFrames}.`);
    }
  }
  function validateFps(fps, location2, isGif) {
    if (typeof fps !== "number") {
      throw new Error(`"fps" must be a number, but you passed a value of type ${typeof fps} ${location2}`);
    }
    if (!Number.isFinite(fps)) {
      throw new Error(`"fps" must be a finite, but you passed ${fps} ${location2}`);
    }
    if (isNaN(fps)) {
      throw new Error(`"fps" must not be NaN, but got ${fps} ${location2}`);
    }
    if (fps <= 0) {
      throw new TypeError(`"fps" must be positive, but got ${fps} ${location2}`);
    }
    if (isGif && fps > 50) {
      throw new TypeError(`The FPS for a GIF cannot be higher than 50. Use the --every-nth-frame option to lower the FPS: https://remotion.dev/docs/render-as-gif`);
    }
  }
  var ResolveCompositionContext = (0, import_react11.createContext)(null);
  var resolveCompositionsRef = (0, import_react11.createRef)();
  var needsResolution = (composition) => {
    return Boolean(composition.calculateMetadata);
  };
  var useResolvedVideoConfig = (preferredCompositionId) => {
    const context = (0, import_react11.useContext)(ResolveCompositionContext);
    const { props: allEditorProps } = (0, import_react11.useContext)(EditorPropsContext);
    const { compositions, canvasContent, currentCompositionMetadata } = (0, import_react11.useContext)(CompositionManager);
    const currentComposition = canvasContent?.type === "composition" ? canvasContent.compositionId : null;
    const compositionId2 = preferredCompositionId ?? currentComposition;
    const composition = compositions.find((c3) => c3.id === compositionId2);
    const selectedEditorProps = (0, import_react11.useMemo)(() => {
      return composition ? allEditorProps[composition.id] ?? {} : {};
    }, [allEditorProps, composition]);
    const env = useRemotionEnvironment();
    return (0, import_react11.useMemo)(() => {
      if (!composition) {
        return null;
      }
      if (currentCompositionMetadata) {
        return {
          type: "success",
          metadataSource: null,
          result: {
            ...currentCompositionMetadata,
            id: composition.id,
            defaultProps: composition.defaultProps ?? {}
          }
        };
      }
      if (!needsResolution(composition)) {
        validateDurationInFrames(composition.durationInFrames, {
          allowFloats: false,
          component: `in <Composition id="${composition.id}">`
        });
        validateFps(composition.fps, `in <Composition id="${composition.id}">`, false);
        validateDimension(composition.width, "width", `in <Composition id="${composition.id}">`);
        validateDimension(composition.height, "height", `in <Composition id="${composition.id}">`);
        return {
          type: "success",
          metadataSource: null,
          result: {
            width: composition.width,
            height: composition.height,
            fps: composition.fps,
            id: composition.id,
            durationInFrames: composition.durationInFrames,
            defaultProps: composition.defaultProps ?? {},
            props: {
              ...composition.defaultProps ?? {},
              ...selectedEditorProps ?? {},
              ...typeof window === "undefined" || env.isPlayer || !window.remotion_inputProps ? {} : getInputProps() ?? {}
            },
            defaultCodec: null,
            defaultOutName: null,
            defaultVideoImageFormat: null,
            defaultPixelFormat: null,
            defaultProResProfile: null,
            defaultSampleRate: null
          }
        };
      }
      if (!context) {
        return null;
      }
      if (!context[composition.id]) {
        return null;
      }
      return context[composition.id];
    }, [
      composition,
      context,
      currentCompositionMetadata,
      selectedEditorProps,
      env.isPlayer
    ]);
  };
  var getErrorStackWithMessage = (error2) => {
    const stack = error2.stack ?? "";
    return stack.startsWith("Error:") ? stack : `${error2.message}
${stack}`;
  };
  var isErrorLike = (err) => {
    if (err instanceof Error) {
      return true;
    }
    if (err === null) {
      return false;
    }
    if (typeof err !== "object") {
      return false;
    }
    if (!("stack" in err)) {
      return false;
    }
    if (typeof err.stack !== "string") {
      return false;
    }
    if (!("message" in err)) {
      return false;
    }
    if (typeof err.message !== "string") {
      return false;
    }
    return true;
  };
  function cancelRenderInternal(scope, err) {
    let error2;
    if (isErrorLike(err)) {
      error2 = err;
      if (!error2.stack) {
        error2.stack = new Error(error2.message).stack;
      }
    } else if (typeof err === "string") {
      error2 = Error(err);
    } else {
      error2 = Error("Rendering was cancelled");
    }
    if (scope) {
      scope.remotion_cancelledError = getErrorStackWithMessage(error2);
    }
    throw error2;
  }
  function cancelRender(err) {
    return cancelRenderInternal(typeof window !== "undefined" ? window : void 0, err);
  }
  var logLevels = ["trace", "verbose", "info", "warn", "error"];
  var getNumberForLogLevel = (level) => {
    return logLevels.indexOf(level);
  };
  var isEqualOrBelowLogLevel = (currentLevel, level) => {
    return getNumberForLogLevel(currentLevel) <= getNumberForLogLevel(level);
  };
  var transformArgs = ({
    args,
    logLevel,
    tag
  }) => {
    const arr = [...args];
    if (getRemotionEnvironment().isRendering && !getRemotionEnvironment().isClientSideRendering) {
      arr.unshift(/* @__PURE__ */ Symbol.for(`__remotion_level_${logLevel}`));
    }
    if (tag && getRemotionEnvironment().isRendering && !getRemotionEnvironment().isClientSideRendering) {
      arr.unshift(/* @__PURE__ */ Symbol.for(`__remotion_tag_${tag}`));
    }
    return arr;
  };
  var verbose = (options, ...args) => {
    if (isEqualOrBelowLogLevel(options.logLevel, "verbose")) {
      return console.debug(...transformArgs({ args, logLevel: "verbose", tag: options.tag }));
    }
  };
  var trace = (options, ...args) => {
    if (isEqualOrBelowLogLevel(options.logLevel, "trace")) {
      return console.debug(...transformArgs({ args, logLevel: "trace", tag: options.tag }));
    }
  };
  var info = (options, ...args) => {
    if (isEqualOrBelowLogLevel(options.logLevel, "info")) {
      return console.log(...transformArgs({ args, logLevel: "info", tag: options.tag }));
    }
  };
  var warn = (options, ...args) => {
    if (isEqualOrBelowLogLevel(options.logLevel, "warn")) {
      return console.warn(...transformArgs({ args, logLevel: "warn", tag: options.tag }));
    }
  };
  var error = (options, ...args) => {
    return console.error(...transformArgs({ args, logLevel: "error", tag: options.tag }));
  };
  var Log = {
    trace,
    verbose,
    info,
    warn,
    error
  };
  if (typeof window !== "undefined") {
    window.remotion_renderReady = false;
    if (!window.remotion_delayRenderTimeouts) {
      window.remotion_delayRenderTimeouts = {};
    }
    window.remotion_delayRenderHandles = [];
  }
  var DELAY_RENDER_CALLSTACK_TOKEN = "The delayRender was called:";
  var DELAY_RENDER_RETRIES_LEFT = "Retries left: ";
  var DELAY_RENDER_RETRY_TOKEN = "- Rendering the frame will be retried.";
  var DELAY_RENDER_CLEAR_TOKEN = "handle was cleared after";
  var defaultTimeout = 3e4;
  var delayRenderInternal = ({
    scope,
    environment,
    label: label22,
    options
  }) => {
    if (typeof label22 !== "string" && label22 !== null) {
      throw new Error("The label parameter of delayRender() must be a string or undefined, got: " + JSON.stringify(label22));
    }
    const handle = Math.random();
    scope.remotion_delayRenderHandles.push(handle);
    const called = Error().stack?.replace(/^Error/g, "") ?? "";
    if (environment.isRendering) {
      const timeoutToUse = (options?.timeoutInMilliseconds ?? scope.remotion_puppeteerTimeout ?? defaultTimeout) - 2e3;
      const retriesLeft = (options?.retries ?? 0) - (scope.remotion_attempt - 1);
      scope.remotion_delayRenderTimeouts[handle] = {
        label: label22 ?? null,
        startTime: Date.now(),
        timeout: setTimeout(() => {
          const message = [
            `A delayRender()`,
            label22 ? `"${label22}"` : null,
            `was called but not cleared after ${timeoutToUse}ms. See https://remotion.dev/docs/timeout for help.`,
            retriesLeft > 0 ? DELAY_RENDER_RETRIES_LEFT + retriesLeft : null,
            retriesLeft > 0 ? DELAY_RENDER_RETRY_TOKEN : null,
            DELAY_RENDER_CALLSTACK_TOKEN,
            called
          ].filter(truthy).join(" ");
          if (environment.isClientSideRendering) {
            scope.remotion_cancelledError = getErrorStackWithMessage(Error(message));
          } else {
            cancelRenderInternal(scope, Error(message));
          }
        }, timeoutToUse)
      };
    }
    scope.remotion_renderReady = false;
    return handle;
  };
  var continueRenderInternal = ({
    scope,
    handle,
    environment,
    logLevel
  }) => {
    if (typeof handle === "undefined") {
      throw new TypeError("The continueRender() method must be called with a parameter that is the return value of delayRender(). No value was passed.");
    }
    if (typeof handle !== "number") {
      throw new TypeError("The parameter passed into continueRender() must be the return value of delayRender() which is a number. Got: " + JSON.stringify(handle));
    }
    const handleExists = scope.remotion_delayRenderHandles.includes(handle);
    const timeoutEntry = scope.remotion_delayRenderTimeouts[handle];
    if (handleExists && environment.isRendering && timeoutEntry) {
      const { label: label22, startTime, timeout } = timeoutEntry;
      clearTimeout(timeout);
      const message = [
        label22 ? `"${label22}"` : "A handle",
        DELAY_RENDER_CLEAR_TOKEN,
        `${Date.now() - startTime}ms`
      ].filter(truthy).join(" ");
      Log.verbose({ logLevel, tag: "delayRender()" }, message);
      delete scope.remotion_delayRenderTimeouts[handle];
    }
    scope.remotion_delayRenderHandles = scope.remotion_delayRenderHandles.filter((h) => h !== handle);
    if (scope.remotion_delayRenderHandles.length === 0) {
      scope.remotion_renderReady = true;
    }
  };
  var LogLevelContext = (0, import_react16.createContext)({
    logLevel: "info",
    mountTime: 0
  });
  var useLogLevel = () => {
    const { logLevel } = React6.useContext(LogLevelContext);
    if (logLevel === null) {
      throw new Error("useLogLevel must be used within a LogLevelProvider");
    }
    return logLevel;
  };
  var useMountTime = () => {
    const { mountTime } = React6.useContext(LogLevelContext);
    if (mountTime === null) {
      throw new Error("useMountTime must be used within a LogLevelProvider");
    }
    return mountTime;
  };
  var DelayRenderContextType = (0, import_react15.createContext)(null);
  var useDelayRender = () => {
    const environment = useRemotionEnvironment();
    const scope = (0, import_react15.useContext)(DelayRenderContextType) ?? (typeof window !== "undefined" ? window : void 0);
    const logLevel = useLogLevel();
    const delayRender2 = (0, import_react15.useCallback)((label22, options) => {
      if (!scope) {
        return Math.random();
      }
      return delayRenderInternal({
        scope,
        environment,
        label: label22 ?? null,
        options: options ?? {}
      });
    }, [environment, scope]);
    const continueRender2 = (0, import_react15.useCallback)((handle) => {
      if (!scope) {
        return;
      }
      continueRenderInternal({
        scope,
        handle,
        environment,
        logLevel
      });
    }, [environment, logLevel, scope]);
    const cancelRender2 = (0, import_react15.useCallback)((err) => {
      return cancelRenderInternal(scope ?? (typeof window !== "undefined" ? window : void 0), err);
    }, [scope]);
    return { delayRender: delayRender2, continueRender: continueRender2, cancelRender: cancelRender2 };
  };
  var useLazyComponent = ({
    compProps,
    componentName,
    noSuspense
  }) => {
    const componentRef = (0, import_react17.useRef)(null);
    if ("component" in compProps) {
      componentRef.current = compProps.component;
    }
    const lazy = (0, import_react17.useMemo)(() => {
      if ("component" in compProps) {
        if (typeof document === "undefined" || noSuspense) {
          return compProps.component;
        }
        if (typeof compProps.component === "undefined") {
          throw new Error(`A value of \`undefined\` was passed to the \`component\` prop. Check the value you are passing to the <${componentName}/> component.`);
        }
        const Wrapper = (props) => {
          const Comp = componentRef.current;
          return import_react17.default.createElement(Comp, props);
        };
        return Wrapper;
      }
      if ("lazyComponent" in compProps && typeof compProps.lazyComponent !== "undefined") {
        if (typeof compProps.lazyComponent === "undefined") {
          throw new Error(`A value of \`undefined\` was passed to the \`lazyComponent\` prop. Check the value you are passing to the <${componentName}/> component.`);
        }
        return import_react17.default.lazy(compProps.lazyComponent);
      }
      throw new Error("You must pass either 'component' or 'lazyComponent'");
    }, [compProps.lazyComponent]);
    return lazy;
  };
  var useVideo = () => {
    const { canvasContent, compositions, currentCompositionMetadata } = (0, import_react18.useContext)(CompositionManager);
    const selected = compositions.find((c3) => {
      return canvasContent?.type === "composition" && c3.id === canvasContent.compositionId;
    });
    const resolved = useResolvedVideoConfig(selected?.id ?? null);
    return (0, import_react18.useMemo)(() => {
      if (!resolved) {
        return null;
      }
      if (resolved.type === "error") {
        return null;
      }
      if (resolved.type === "loading") {
        return null;
      }
      if (!selected) {
        return null;
      }
      return {
        ...resolved.result,
        defaultProps: selected.defaultProps ?? {},
        id: selected.id,
        ...currentCompositionMetadata ?? {},
        component: selected.component
      };
    }, [currentCompositionMetadata, resolved, selected]);
  };
  var getRegex2 = () => /^([a-zA-Z0-9-\u4E00-\u9FFF])+$/g;
  var isCompositionIdValid = (id) => id.match(getRegex2());
  var validateCompositionId = (id) => {
    if (!isCompositionIdValid(id)) {
      throw new Error(`Composition id can only contain a-z, A-Z, 0-9, CJK characters and -. You passed ${id}`);
    }
  };
  var invalidCompositionErrorMessage = `Composition ID must match ${String(getRegex2())}`;
  var validateDefaultAndInputProps = (defaultProps, name, compositionId2) => {
    if (!defaultProps) {
      return;
    }
    if (typeof defaultProps !== "object") {
      throw new Error(`"${name}" must be an object, but you passed a value of type ${typeof defaultProps}`);
    }
    if (Array.isArray(defaultProps)) {
      throw new Error(`"${name}" must be an object, an array was passed ${compositionId2 ? `for composition "${compositionId2}"` : ""}`);
    }
  };
  var Fallback = () => {
    const { continueRender: continueRender2, delayRender: delayRender2 } = useDelayRender();
    (0, import_react2.useEffect)(() => {
      const fallback = delayRender2("Waiting for Root component to unsuspend");
      return () => continueRender2(fallback);
    }, [continueRender2, delayRender2]);
    return null;
  };
  var InnerComposition = ({
    width,
    height,
    fps,
    durationInFrames,
    id,
    defaultProps,
    schema,
    ...compProps
  }) => {
    const compManager = (0, import_react2.useContext)(CompositionSetters);
    const { registerComposition, unregisterComposition } = compManager;
    const video = useVideo();
    const lazy = useLazyComponent({
      compProps,
      componentName: "Composition",
      noSuspense: false
    });
    const nonce = useNonce();
    const isPlayer = useIsPlayer();
    const environment = useRemotionEnvironment();
    const canUseComposition = (0, import_react2.useContext)(CanUseRemotionHooks);
    if (typeof window !== "undefined") {
      window.remotion_seenCompositionIds = Array.from(/* @__PURE__ */ new Set([...window.remotion_seenCompositionIds ?? [], id]));
    }
    if (canUseComposition) {
      if (isPlayer) {
        throw new Error("<Composition> was mounted inside the `component` that was passed to the <Player>. See https://remotion.dev/docs/wrong-composition-mount for help.");
      }
      throw new Error("<Composition> mounted inside another composition. See https://remotion.dev/docs/wrong-composition-mount for help.");
    }
    const { folderName, parentName } = (0, import_react2.useContext)(FolderContext);
    const stack = compProps._remotionInternalStack ?? null;
    const componentFromProps = "component" in compProps ? compProps.component : null;
    (0, import_react2.useEffect)(() => {
      if (!id) {
        throw new Error("No id for composition passed.");
      }
      validateCompositionId(id);
      validateDefaultAndInputProps(defaultProps, "defaultProps", id);
      registerComposition({
        durationInFrames: durationInFrames ?? void 0,
        fps: fps ?? void 0,
        height: height ?? void 0,
        width: width ?? void 0,
        id,
        folderName,
        component: lazy,
        defaultProps: serializeThenDeserializeInStudio(defaultProps ?? {}),
        nonce: nonce.get(),
        parentFolderName: parentName,
        componentFromProps,
        schema: schema ?? null,
        calculateMetadata: compProps.calculateMetadata ?? null,
        stack
      });
      return () => {
        unregisterComposition(id);
      };
    }, [
      durationInFrames,
      fps,
      height,
      lazy,
      id,
      folderName,
      defaultProps,
      width,
      nonce,
      parentName,
      componentFromProps,
      schema,
      compProps.calculateMetadata,
      stack,
      registerComposition,
      unregisterComposition
    ]);
    const resolved = useResolvedVideoConfig(id);
    const { setError, clearError } = (0, import_react2.useContext)(CompositionRenderErrorContext);
    const onError = (0, import_react2.useCallback)((error2) => {
      setError(error2);
    }, [setError]);
    const onClear = (0, import_react2.useCallback)(() => {
      clearError();
    }, [clearError]);
    if (environment.isStudio && video && video.component === lazy && video.id === id) {
      const Comp = lazy;
      if (resolved === null || resolved.type !== "success" && resolved.type !== "success-and-refreshing") {
        return null;
      }
      return (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime7.jsx)(CanUseRemotionHooksProvider, {
        children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(CompositionErrorBoundary, {
          onError,
          onClear,
          children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react2.Suspense, {
            fallback: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Loading, {}),
            children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Comp, {
              ...resolved.result.props ?? {}
            })
          })
        })
      }), portalNode());
    }
    if (environment.isRendering && video && video.component === lazy && video.id === id) {
      const Comp = lazy;
      if (resolved === null || resolved.type !== "success" && resolved.type !== "success-and-refreshing") {
        return null;
      }
      return (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime7.jsx)(CanUseRemotionHooksProvider, {
        children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react2.Suspense, {
          fallback: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Fallback, {}),
          children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Comp, {
            ...resolved.result.props ?? {}
          })
        })
      }), portalNode());
    }
    return null;
  };
  var Composition = (props) => {
    const { onlyRenderComposition } = (0, import_react2.useContext)(CompositionSetters);
    if (onlyRenderComposition && onlyRenderComposition !== props.id) {
      return null;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(InnerComposition, {
      ...props
    });
  };
  var componentsToAddStacksTo = [];
  var sequenceComponent = null;
  var stacksByControls = /* @__PURE__ */ new WeakMap();
  var REMOTION_INTERNAL_STACK_PROP = "_remotionInternalStack";
  var getComponentsToAddStacksTo = () => componentsToAddStacksTo;
  var addSequenceStackTraces = (component) => {
    componentsToAddStacksTo.push(component);
  };
  var setSequenceComponent = (component) => {
    sequenceComponent = component;
  };
  var getSequenceComponent = () => sequenceComponent;
  var setStackForControls = (controls, stack) => {
    if (stack === void 0) {
      stacksByControls.delete(controls);
      return;
    }
    stacksByControls.set(controls, stack);
  };
  var getStackForControls = (controls) => {
    return stacksByControls.get(controls) ?? null;
  };
  var getSingleChildComponent = (children) => {
    const mountedChildren = import_react19.default.Children.toArray(children);
    if (mountedChildren.length !== 1) {
      return null;
    }
    const child = mountedChildren[0];
    if (!import_react19.default.isValidElement(child)) {
      return null;
    }
    if (typeof child.type !== "function" && typeof child.type !== "object") {
      return null;
    }
    return child.type;
  };
  var VERSION = "4.0.509";
  var checkMultipleRemotionVersions = () => {
    if (typeof globalThis === "undefined") {
      return;
    }
    const set = () => {
      globalThis.remotion_imported = VERSION;
      if (typeof window !== "undefined") {
        window.remotion_imported = VERSION;
      }
    };
    const alreadyImported = globalThis.remotion_imported || typeof window !== "undefined" && window.remotion_imported;
    if (alreadyImported) {
      if (alreadyImported === VERSION) {
        return;
      }
      if (typeof alreadyImported === "string" && alreadyImported.includes("webcodecs")) {
        set();
        return;
      }
      throw new TypeError(`\u{1F6A8} Multiple versions of Remotion detected: ${[
        VERSION,
        typeof alreadyImported === "string" ? alreadyImported : "an older version"
      ].filter(truthy).join(" and ")}. This will cause things to break in an unexpected way.
Check that all your Remotion packages are on the same version. If your dependencies depend on Remotion, make them peer dependencies. You can also run \`npx remotion versions\` from your terminal to see which versions are mismatching.`);
    }
    set();
  };
  var SequenceContext = (0, import_react22.createContext)(null);
  var exports_timeline_position_state = {};
  __export(exports_timeline_position_state, {
    useTimelineSetFrame: () => useTimelineSetFrame,
    useTimelinePosition: () => useTimelinePosition,
    useTimelineContext: () => useTimelineContext,
    usePlayingState: () => usePlayingState,
    usePlaybackRate: () => usePlaybackRate,
    useAbsoluteTimelinePosition: () => useAbsoluteTimelinePosition,
    persistCurrentFrame: () => persistCurrentFrame,
    getInitialFrameState: () => getInitialFrameState,
    getFrameForComposition: () => getFrameForComposition,
    clampFrameToCompositionRange: () => clampFrameToCompositionRange
  });
  var SetTimelineContext = (0, import_react24.createContext)({
    setFrame: () => {
      throw new Error("default");
    },
    setPlaying: () => {
      throw new Error("default");
    }
  });
  var TimelineContext = (0, import_react24.createContext)(null);
  var TimelineImperativeContext = (0, import_react24.createContext)(null);
  var PlaybackRateContext = (0, import_react24.createContext)(null);
  var AbsoluteTimeContext = (0, import_react24.createContext)(null);
  var TimelineContextProvider = ({ children, frameState }) => {
    const [playing, setPlaying] = (0, import_react24.useState)(false);
    const imperativePlaying = (0, import_react24.useRef)(false);
    const [playbackRate, setPlaybackRate] = (0, import_react24.useState)(1);
    const audioAndVideoTags = (0, import_react24.useRef)([]);
    const [_frame, setFrame] = (0, import_react24.useState)(() => getInitialFrameState());
    const frame = frameState ?? _frame;
    const frameRef = (0, import_react24.useRef)(frame);
    frameRef.current = frame;
    const { delayRender: delayRender2, continueRender: continueRender2 } = useDelayRender();
    if (typeof window !== "undefined") {
      (0, import_react24.useLayoutEffect)(() => {
        window.remotion_setFrame = (f, composition, attempt) => {
          window.remotion_attempt = attempt;
          const id = delayRender2(`Setting the current frame to ${f}`);
          let asyncUpdate = true;
          setFrame((s) => {
            const currentFrame = s[composition] ?? window.remotion_initialFrame;
            if (currentFrame === f) {
              asyncUpdate = false;
              return s;
            }
            return {
              ...s,
              [composition]: f
            };
          });
          if (asyncUpdate) {
            requestAnimationFrame(() => continueRender2(id));
          } else {
            continueRender2(id);
          }
        };
        window.remotion_isPlayer = false;
      }, [continueRender2, delayRender2]);
    }
    const timelineContextValue = (0, import_react24.useMemo)(() => {
      return {
        frame,
        playing,
        imperativePlaying,
        audioAndVideoTags
      };
    }, [frame, playing]);
    const timelineImperativeContextValue = (0, import_react24.useMemo)(() => {
      return {
        frameRef,
        imperativePlaying,
        audioAndVideoTags
      };
    }, []);
    const playbackRateContextValue = (0, import_react24.useMemo)(() => {
      return {
        playbackRate,
        setPlaybackRate
      };
    }, [playbackRate]);
    const setTimelineContextValue = (0, import_react24.useMemo)(() => {
      return {
        setFrame,
        setPlaying
      };
    }, []);
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(AbsoluteTimeContext.Provider, {
      value: timelineContextValue,
      children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(PlaybackRateContext.Provider, {
        value: playbackRateContextValue,
        children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(TimelineImperativeContext.Provider, {
          value: timelineImperativeContextValue,
          children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(TimelineContext.Provider, {
            value: timelineContextValue,
            children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(SetTimelineContext.Provider, {
              value: setTimelineContextValue,
              children
            })
          })
        })
      })
    });
  };
  var makeKey = () => {
    return `remotion.time-all`;
  };
  var persistCurrentFrame = (time) => {
    localStorage.setItem(makeKey(), JSON.stringify(time));
  };
  var getInitialFrameState = () => {
    const item = localStorage.getItem(makeKey()) ?? "{}";
    const obj = JSON.parse(item);
    return obj;
  };
  var getFrameForComposition = (composition) => {
    const item = localStorage.getItem(makeKey()) ?? "{}";
    const obj = JSON.parse(item);
    if (obj[composition] !== void 0) {
      return Number(obj[composition]);
    }
    if (typeof window === "undefined") {
      return 0;
    }
    return window.remotion_initialFrame ?? 0;
  };
  var clampFrameToCompositionRange = (frame, durationInFrames) => {
    return Math.max(0, Math.min(Math.max(0, durationInFrames - 1), frame));
  };
  var useTimelinePositionFromContext = (state) => {
    const videoConfig = useVideo();
    const env = useRemotionEnvironment();
    if (!videoConfig) {
      return typeof window === "undefined" ? 0 : window.remotion_initialFrame ?? 0;
    }
    const unclamped = state.frame[videoConfig.id] ?? (env.isPlayer ? 0 : getFrameForComposition(videoConfig.id));
    return clampFrameToCompositionRange(unclamped, videoConfig.durationInFrames);
  };
  var useTimelineContext = () => {
    const state = (0, import_react23.useContext)(TimelineContext);
    if (state === null) {
      throw new Error("TimelineContext is not available. This hook must be used inside a <Player> or the Remotion Studio.");
    }
    return state;
  };
  var usePlaybackRate = () => {
    const state = (0, import_react23.useContext)(PlaybackRateContext);
    if (state === null) {
      throw new Error("PlaybackRateContext is not available. This hook must be used inside a <Player> or the Remotion Studio.");
    }
    return state;
  };
  var useTimelinePosition = () => {
    const state = useTimelineContext();
    return useTimelinePositionFromContext(state);
  };
  var useAbsoluteTimelinePosition = () => {
    const state = (0, import_react23.useContext)(AbsoluteTimeContext);
    if (state === null) {
      throw new Error("AbsoluteTimeContext is not available. This hook must be used inside a <Player> or the Remotion Studio.");
    }
    return useTimelinePositionFromContext(state);
  };
  var useTimelineSetFrame = () => {
    const { setFrame } = (0, import_react23.useContext)(SetTimelineContext);
    return setFrame;
  };
  var usePlayingState = () => {
    const { playing, imperativePlaying } = useTimelineContext();
    const { setPlaying } = (0, import_react23.useContext)(SetTimelineContext);
    return (0, import_react23.useMemo)(() => [playing, setPlaying, imperativePlaying], [imperativePlaying, playing, setPlaying]);
  };
  var useCurrentFrame = () => {
    const canUseRemotionHooks = (0, import_react25.useContext)(CanUseRemotionHooks);
    const env = useRemotionEnvironment();
    if (!canUseRemotionHooks) {
      if (env.isPlayer) {
        throw new Error(`useCurrentFrame can only be called inside a component that was passed to <Player>. See: https://www.remotion.dev/docs/player/examples`);
      }
      throw new Error(`useCurrentFrame() can only be called inside a component that was registered as a composition. See https://www.remotion.dev/docs/the-fundamentals#defining-compositions`);
    }
    const frame = useTimelinePosition();
    const context = (0, import_react25.useContext)(SequenceContext);
    const contextOffset = context ? context.cumulatedFrom + context.relativeFrom : 0;
    return frame - contextOffset;
  };
  var useUnsafeVideoConfig = () => {
    const context = (0, import_react27.useContext)(SequenceContext);
    const ctxWidth = context?.width ?? null;
    const ctxHeight = context?.height ?? null;
    const ctxDuration = context?.durationInFrames ?? null;
    const video = useVideo();
    return (0, import_react27.useMemo)(() => {
      if (!video) {
        return null;
      }
      const {
        id,
        durationInFrames,
        fps,
        height,
        width,
        defaultProps,
        props,
        defaultCodec,
        defaultOutName,
        defaultVideoImageFormat,
        defaultPixelFormat,
        defaultProResProfile,
        defaultSampleRate
      } = video;
      return {
        id,
        width: ctxWidth ?? width,
        height: ctxHeight ?? height,
        fps,
        durationInFrames: ctxDuration ?? durationInFrames,
        defaultProps,
        props,
        defaultCodec,
        defaultOutName,
        defaultVideoImageFormat,
        defaultPixelFormat,
        defaultProResProfile,
        defaultSampleRate
      };
    }, [ctxDuration, ctxHeight, ctxWidth, video]);
  };
  var useVideoConfig = () => {
    const videoConfig = useUnsafeVideoConfig();
    const context = (0, import_react26.useContext)(CanUseRemotionHooks);
    const isPlayer = useIsPlayer();
    if (!videoConfig) {
      if (typeof window !== "undefined" && window.remotion_isPlayer || isPlayer) {
        throw new Error([
          "No video config found. Likely reasons:",
          "- You are probably calling useVideoConfig() from outside the component passed to <Player />. See https://www.remotion.dev/docs/player/examples for how to set up the Player correctly.",
          "- You have multiple versions of Remotion installed which causes the React context to get lost."
        ].join("-"));
      }
      throw new Error("No video config found. You are probably calling useVideoConfig() from a component which has not been registered as a <Composition />. See https://www.remotion.dev/docs/the-fundamentals#defining-compositions for more information.");
    }
    if (!context) {
      throw new Error("Called useVideoConfig() outside a Remotion composition.");
    }
    return videoConfig;
  };
  var Freeze = ({
    frame: frameToFreeze,
    children,
    active = true
  }) => {
    const frame = useCurrentFrame();
    const videoConfig = useVideoConfig();
    if (typeof frameToFreeze === "undefined") {
      throw new Error(`The <Freeze /> component requires a 'frame' prop, but none was passed.`);
    }
    if (typeof frameToFreeze !== "number") {
      throw new Error(`The 'frame' prop of <Freeze /> must be a number, but is of type ${typeof frameToFreeze}`);
    }
    if (Number.isNaN(frameToFreeze)) {
      throw new Error(`The 'frame' prop of <Freeze /> must be a real number, but it is NaN.`);
    }
    if (!Number.isFinite(frameToFreeze)) {
      throw new Error(`The 'frame' prop of <Freeze /> must be a finite number, but it is ${frameToFreeze}.`);
    }
    const isActive = (0, import_react21.useMemo)(() => {
      if (typeof active === "boolean") {
        return active;
      }
      if (typeof active === "function") {
        return active(frame);
      }
    }, [active, frame]);
    const timelineContext = useTimelineContext();
    const sequenceContext = (0, import_react21.useContext)(SequenceContext);
    const relativeFrom = sequenceContext?.relativeFrom ?? 0;
    const timelineValue = (0, import_react21.useMemo)(() => {
      if (!isActive) {
        return timelineContext;
      }
      return {
        ...timelineContext,
        playing: false,
        imperativePlaying: {
          current: false
        },
        frame: {
          [videoConfig.id]: frameToFreeze + relativeFrom
        }
      };
    }, [isActive, timelineContext, videoConfig.id, frameToFreeze, relativeFrom]);
    const newSequenceContext = (0, import_react21.useMemo)(() => {
      if (!sequenceContext) {
        return null;
      }
      if (!isActive) {
        return sequenceContext;
      }
      return {
        ...sequenceContext,
        cumulatedFrom: 0
      };
    }, [sequenceContext, isActive]);
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(TimelineContext.Provider, {
      value: timelineValue,
      children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(SequenceContext.Provider, {
        value: newSequenceContext,
        children
      })
    });
  };
  var captionsSchema = {
    captions: {
      type: "remotion-captions",
      default: void 0,
      description: "Captions",
      keyframable: false
    }
  };
  var transformSchema = {
    "style.transformOrigin": {
      type: "transform-origin",
      step: 1,
      default: "50% 50%",
      description: "Transform origin"
    },
    "style.translate": {
      type: "translate",
      step: 1,
      default: "0px 0px",
      description: "Offset"
    },
    "style.scale": {
      type: "scale",
      max: 100,
      step: 0.01,
      default: 1,
      description: "Scale",
      defaultKeyframeOutput: "perceptual-scale"
    },
    "style.rotate": {
      type: "rotation-css",
      step: 1,
      default: "0deg",
      description: "Rotation"
    },
    "style.opacity": {
      type: "number",
      min: 0,
      max: 1,
      step: 0.01,
      default: 1,
      description: "Opacity",
      hiddenFromList: false
    }
  };
  var sequenceVisualStyleSchema = transformSchema;
  var textSchema = {
    "style.color": {
      type: "color",
      default: void 0,
      description: "Color"
    },
    "style.fontFamily": {
      type: "font-family",
      default: void 0,
      description: "Font family",
      keyframable: false
    },
    "style.fontSize": {
      type: "number",
      default: void 0,
      min: 0,
      step: 1,
      description: "Font size",
      hiddenFromList: false
    },
    "style.lineHeight": {
      type: "number",
      default: void 0,
      min: 0,
      step: 0.05,
      description: "Line height",
      hiddenFromList: false
    },
    "style.fontWeight": {
      type: "enum",
      default: "400",
      description: "Font weight",
      variants: {
        "100": {},
        "200": {},
        "300": {},
        "400": {},
        "500": {},
        "600": {},
        "700": {},
        "800": {},
        "900": {},
        normal: {},
        bold: {}
      }
    },
    "style.fontStyle": {
      type: "enum",
      default: "normal",
      description: "Font style",
      variants: {
        normal: {},
        italic: {},
        oblique: {}
      }
    },
    "style.textAlign": {
      type: "enum",
      default: "left",
      description: "Text align",
      variants: {
        left: {},
        center: {},
        right: {},
        justify: {},
        start: {},
        end: {}
      }
    },
    "style.letterSpacing": {
      type: "number",
      default: void 0,
      step: 0.1,
      description: "Letter spacing",
      hiddenFromList: false
    }
  };
  var borderSchema = {
    "style.borderWidth": {
      type: "number",
      default: void 0,
      min: 0,
      step: 1,
      description: "Border width",
      hiddenFromList: false
    },
    "style.borderStyle": {
      type: "enum",
      default: "none",
      description: "Border style",
      variants: {
        none: {},
        hidden: {},
        solid: {},
        dashed: {},
        dotted: {},
        double: {},
        groove: {},
        ridge: {},
        inset: {},
        outset: {}
      }
    },
    "style.borderColor": {
      type: "color",
      default: void 0,
      description: "Border color"
    }
  };
  var borderRadiusSchema = {
    "style.borderRadius": {
      type: "number",
      default: 0,
      min: 0,
      step: 1,
      description: "Border radius",
      hiddenFromList: false,
      keyframable: true
    },
    "style.borderTopLeftRadius": {
      type: "number",
      default: 0,
      min: 0,
      step: 1,
      description: "Top left radius",
      hiddenFromList: false
    },
    "style.borderTopRightRadius": {
      type: "number",
      default: 0,
      min: 0,
      step: 1,
      description: "Top right radius",
      hiddenFromList: false
    },
    "style.borderBottomRightRadius": {
      type: "number",
      default: 0,
      min: 0,
      step: 1,
      description: "Bottom right radius",
      hiddenFromList: false
    },
    "style.borderBottomLeftRadius": {
      type: "number",
      default: 0,
      min: 0,
      step: 1,
      description: "Bottom left radius",
      hiddenFromList: false
    }
  };
  var backgroundSchema = {
    "style.backgroundColor": {
      type: "color",
      default: "transparent",
      description: "Color"
    }
  };
  var svgColorSchema = {
    color: {
      type: "color",
      default: void 0,
      description: "Current color"
    }
  };
  var svgStrokeSchema = {
    ...svgColorSchema,
    stroke: {
      type: "color",
      default: "none",
      description: "Stroke"
    },
    strokeWidth: {
      type: "number",
      default: 1,
      description: "Stroke width",
      min: 0,
      step: 1,
      hiddenFromList: false
    }
  };
  var svgPaintSchema = {
    fill: {
      type: "color",
      default: void 0,
      description: "Fill"
    },
    ...svgStrokeSchema
  };
  var textContentSchema = {
    children: {
      type: "text-content",
      default: "",
      description: "Text",
      keyframable: false
    }
  };
  var premountSchema = {
    premountFor: {
      type: "number",
      default: 0,
      description: "Premount For",
      min: 0,
      step: 1,
      hiddenFromList: false,
      keyframable: false
    },
    postmountFor: {
      type: "number",
      default: 0,
      min: 0,
      step: 1,
      hiddenFromList: true,
      keyframable: false
    }
  };
  var sequencePremountSchema = {
    ...premountSchema
  };
  var cropSchema = {
    cropLeft: {
      type: "number",
      default: 0,
      description: "Crop left",
      min: 0,
      max: 1,
      step: 0.01,
      hiddenFromList: false,
      keyframable: true
    },
    cropRight: {
      type: "number",
      default: 0,
      description: "Crop right",
      min: 0,
      max: 1,
      step: 0.01,
      hiddenFromList: false,
      keyframable: true
    },
    cropTop: {
      type: "number",
      default: 0,
      description: "Crop top",
      min: 0,
      max: 1,
      step: 0.01,
      hiddenFromList: false,
      keyframable: true
    },
    cropBottom: {
      type: "number",
      default: 0,
      description: "Crop bottom",
      min: 0,
      max: 1,
      step: 0.01,
      hiddenFromList: false,
      keyframable: true
    }
  };
  var sequenceCropSchema = cropSchema;
  var sequenceStyleSchema = {
    ...sequenceCropSchema,
    ...transformSchema,
    ...backgroundSchema,
    ...borderSchema,
    ...borderRadiusSchema,
    ...sequencePremountSchema
  };
  var hiddenField = {
    type: "boolean",
    default: false,
    description: "Hidden"
  };
  var showInTimelineField = {
    type: "hidden"
  };
  var sequenceNameField = {
    type: "hidden"
  };
  var extendSchemaWithSequenceName = (schema) => {
    return {
      name: sequenceNameField,
      ...schema
    };
  };
  var durationInFramesField = {
    type: "number",
    default: void 0,
    min: 1,
    step: 1,
    hiddenFromList: true
  };
  var fromField = {
    type: "number",
    default: 0,
    step: 1,
    hiddenFromList: true
  };
  var trimBeforeField = {
    type: "number",
    default: 0,
    min: 0,
    step: 1,
    hiddenFromList: true
  };
  var freezeField = {
    type: "number",
    default: null,
    step: 1,
    hiddenFromList: true
  };
  var baseSchema = {
    durationInFrames: durationInFramesField,
    from: fromField,
    trimBefore: trimBeforeField,
    freeze: freezeField,
    hidden: hiddenField,
    name: sequenceNameField,
    showInTimeline: showInTimelineField
  };
  var sequenceSchema = {
    ...baseSchema,
    layout: {
      type: "enum",
      default: "absolute-fill",
      description: "Layout",
      variants: {
        "absolute-fill": sequenceStyleSchema,
        none: {}
      }
    }
  };
  var baseSchemaWithoutFrom = {
    durationInFrames: durationInFramesField,
    trimBefore: trimBeforeField,
    freeze: freezeField,
    hidden: hiddenField,
    name: sequenceNameField,
    showInTimeline: showInTimelineField
  };
  var sequenceSchemaWithoutFrom = {
    ...baseSchemaWithoutFrom,
    layout: sequenceSchema.layout
  };
  var sequenceSchemaDefaultLayoutNone = {
    ...sequenceSchema,
    layout: {
      ...sequenceSchema.layout,
      default: "none"
    }
  };
  var clampCrop = (value) => {
    return Math.min(1, Math.max(0, value ?? 0));
  };
  var resolveAxis = (start, end) => {
    const resolvedStart = clampCrop(start);
    const resolvedEnd = clampCrop(end);
    if (resolvedStart + resolvedEnd > 1) {
      return [0.5, 0.5];
    }
    return [resolvedStart, resolvedEnd];
  };
  var resolveSequenceCrop = ({
    cropLeft,
    cropRight,
    cropTop,
    cropBottom
  }) => {
    const [left, right] = resolveAxis(cropLeft, cropRight);
    const [top, bottom] = resolveAxis(cropTop, cropBottom);
    return { left, right, top, bottom };
  };
  var getSequenceCropClipPath = ({
    left,
    right,
    top,
    bottom,
    style: style2
  }) => {
    if (left === 0 && right === 0 && top === 0 && bottom === 0) {
      return null;
    }
    const serializeRadius = (radius) => typeof radius === "number" ? `${radius}px` : radius;
    const shorthand = serializeRadius(style2?.borderRadius);
    const longhands = [
      style2?.borderTopLeftRadius,
      style2?.borderTopRightRadius,
      style2?.borderBottomRightRadius,
      style2?.borderBottomLeftRadius
    ];
    const serializedBorderRadius = shorthand || (longhands.some((radius) => radius !== void 0) ? longhands.map((radius) => serializeRadius(radius) ?? "0px").join(" ") : void 0);
    const rounded = serializedBorderRadius ? ` round ${serializedBorderRadius}` : "";
    return `inset(${top * 100}% ${right * 100}% ${bottom * 100}% ${left * 100}%${rounded})`;
  };
  var validateSequenceCrop = (crop, componentName = "<Sequence />") => {
    for (const [name, value] of Object.entries(crop)) {
      if (value === void 0) {
        continue;
      }
      if (typeof value !== "number" || !Number.isFinite(value)) {
        throw new TypeError(`The "${name}" prop of ${componentName} must be a finite number, but got ${String(value)}.`);
      }
      if (value < 0 || value > 1) {
        throw new RangeError(`The "${name}" prop of ${componentName} must be between 0 and 1, but got ${value}.`);
      }
    }
  };
  var SequenceManager = import_react28.default.createContext({
    registerSequence: () => {
      throw new Error("SequenceManagerContext not initialized");
    },
    unregisterSequence: () => {
      throw new Error("SequenceManagerContext not initialized");
    },
    sequences: []
  });
  var SequenceManagerRefContext = import_react28.default.createContext({
    current: []
  });
  var makeSequencePropsSubscriptionKey = (key) => {
    return `${key.absolutePath}\0${key.nodePath.join(".")}\0${key.sequenceKeys.join(".")}\0${key.effectKeys.map((keys) => keys.join(".")).join(".")}`;
  };
  var VisualModePropStatusesContext = import_react28.default.createContext({
    propStatuses: {}
  });
  var VisualModePropStatusesRefContext = import_react28.default.createContext({
    current: {}
  });
  var VisualModeDragOverridesContext = import_react28.default.createContext({
    getDragOverrides: () => {
      throw new Error("VisualModeDragOverridesContext not initialized");
    },
    getEffectDragOverrides: () => {
      throw new Error("VisualModeDragOverridesContext not initialized");
    }
  });
  var VisualModeSettersContext = import_react28.default.createContext({
    setDragOverrides: () => {
      throw new Error("VisualModeSettersContext not initialized");
    },
    clearDragOverrides: () => {
      throw new Error("VisualModeSettersContext not initialized");
    },
    setEffectDragOverrides: () => {
      throw new Error("VisualModeSettersContext not initialized");
    },
    clearEffectDragOverrides: () => {
      throw new Error("VisualModeSettersContext not initialized");
    },
    setPropStatuses: () => {
      throw new Error("VisualModeSettersContext not initialized");
    },
    remapPropStatuses: () => {
      throw new Error("VisualModeSettersContext not initialized");
    }
  });
  var effectDragOverridesKey = (nodePath, effectIndex) => `${makeSequencePropsSubscriptionKey(nodePath)}.effects.${effectIndex}`;
  var SequenceManagerProvider = ({ children }) => {
    const [sequences, setSequences] = (0, import_react28.useState)([]);
    const sequencesRef = (0, import_react28.useRef)(sequences);
    sequencesRef.current = sequences;
    const [dragOverrides, setControlOverrides] = (0, import_react28.useState)({});
    const controlOverridesRef = (0, import_react28.useRef)(dragOverrides);
    controlOverridesRef.current = dragOverrides;
    const [effectDragOverridesState, setEffectDragOverridesState] = (0, import_react28.useState)({});
    const [propStatuses, setPropStatusesMapState] = (0, import_react28.useState)({});
    const propStatusesRef = (0, import_react28.useRef)(propStatuses);
    propStatusesRef.current = propStatuses;
    const setDragOverrides = (0, import_react28.useCallback)((nodePath, key, value) => {
      setControlOverrides((prev) => ({
        ...prev,
        [makeSequencePropsSubscriptionKey(nodePath)]: {
          ...prev[makeSequencePropsSubscriptionKey(nodePath)],
          [key]: value
        }
      }));
    }, []);
    const clearDragOverrides = (0, import_react28.useCallback)((nodePath) => {
      setControlOverrides((prev) => {
        const key = makeSequencePropsSubscriptionKey(nodePath);
        if (!prev[key]) {
          return prev;
        }
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }, []);
    const setEffectDragOverrides = (0, import_react28.useCallback)((nodePath, effectIndex, key, value) => {
      setEffectDragOverridesState((prev) => {
        const mapKey = effectDragOverridesKey(nodePath, effectIndex);
        return {
          ...prev,
          [mapKey]: {
            ...prev[mapKey],
            [key]: value
          }
        };
      });
    }, []);
    const clearEffectDragOverrides = (0, import_react28.useCallback)((nodePath, effectIndex) => {
      setEffectDragOverridesState((prev) => {
        const mapKey = effectDragOverridesKey(nodePath, effectIndex);
        if (!prev[mapKey]) {
          return prev;
        }
        const next = { ...prev };
        delete next[mapKey];
        return next;
      });
    }, []);
    const setPropStatuses = (0, import_react28.useCallback)((nodePath, values) => {
      setPropStatusesMapState((prev) => {
        const key = makeSequencePropsSubscriptionKey(nodePath);
        const prevKey = prev[key];
        const newKey = values(prevKey);
        if (prevKey === newKey) {
          return prev;
        }
        return { ...prev, [key]: newKey };
      });
    }, []);
    const remapPropStatuses = (0, import_react28.useCallback)((remappings) => {
      setPropStatusesMapState((prev) => {
        const next = { ...prev };
        for (const remapping of remappings) {
          delete next[makeSequencePropsSubscriptionKey(remapping.previousNodePath)];
        }
        for (const remapping of remappings) {
          if (remapping.nodePath !== null && remapping.result !== null) {
            next[makeSequencePropsSubscriptionKey(remapping.nodePath)] = remapping.result;
          }
        }
        return next;
      });
    }, []);
    const registerSequence = (0, import_react28.useCallback)((seq) => {
      setSequences((seqs) => {
        return [...seqs, seq];
      });
    }, []);
    const unregisterSequence = (0, import_react28.useCallback)((seq) => {
      setSequences((seqs) => seqs.filter((s) => s.id !== seq));
    }, []);
    const sequenceContext = (0, import_react28.useMemo)(() => {
      return {
        registerSequence,
        sequences,
        unregisterSequence
      };
    }, [registerSequence, sequences, unregisterSequence]);
    const getDragOverrides = (0, import_react28.useCallback)((nodePath) => {
      return dragOverrides[makeSequencePropsSubscriptionKey(nodePath)] ?? {};
    }, [dragOverrides]);
    const getEffectDragOverrides = (0, import_react28.useCallback)((nodePath, effectIndex) => {
      return effectDragOverridesState[effectDragOverridesKey(nodePath, effectIndex)] ?? {};
    }, [effectDragOverridesState]);
    const propStatusesContext = (0, import_react28.useMemo)(() => {
      return {
        propStatuses
      };
    }, [propStatuses]);
    const dragOverridesContext = (0, import_react28.useMemo)(() => {
      return {
        getDragOverrides,
        getEffectDragOverrides
      };
    }, [getDragOverrides, getEffectDragOverrides]);
    const settersContext = (0, import_react28.useMemo)(() => {
      return {
        setDragOverrides,
        clearDragOverrides,
        setEffectDragOverrides,
        clearEffectDragOverrides,
        setPropStatuses,
        remapPropStatuses
      };
    }, [
      setDragOverrides,
      clearDragOverrides,
      setEffectDragOverrides,
      clearEffectDragOverrides,
      setPropStatuses,
      remapPropStatuses
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(SequenceManagerRefContext.Provider, {
      value: sequencesRef,
      children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(SequenceManager.Provider, {
        value: sequenceContext,
        children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(VisualModePropStatusesRefContext.Provider, {
          value: propStatusesRef,
          children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(VisualModePropStatusesContext.Provider, {
            value: propStatusesContext,
            children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(VisualModeDragOverridesContext.Provider, {
              value: dragOverridesContext,
              children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(VisualModeSettersContext.Provider, {
                value: settersContext,
                children
              })
            })
          })
        })
      })
    });
  };
  var IsInsideSeriesContext = (0, import_react29.createContext)(false);
  var IsInsideSeriesContainer = ({ children }) => {
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(IsInsideSeriesContext.Provider, {
      value: true,
      children
    });
  };
  var IsNotInsideSeriesProvider = ({ children }) => {
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(IsInsideSeriesContext.Provider, {
      value: false,
      children
    });
  };
  var useRequireToBeInsideSeries = () => {
    const isInsideSeries = import_react29.default.useContext(IsInsideSeriesContext);
    if (!isInsideSeries) {
      throw new Error("This component must be inside a <Series /> component.");
    }
  };
  var PremountContext = (0, import_react31.createContext)({
    premountFramesRemaining: 0
  });
  var ENABLE_V5_BREAKING_CHANGES = false;
  var resolveV5Default = (value) => {
    return value ?? ENABLE_V5_BREAKING_CHANGES;
  };
  var usePremounting = ({
    from,
    durationInFrames,
    premountFor,
    postmountFor,
    style: style2,
    styleWhilePremounted,
    styleWhilePostmounted,
    hideWhilePremounted
  }) => {
    const parentPremountContext = (0, import_react30.useContext)(PremountContext);
    const frame = useCurrentFrame() - parentPremountContext.premountFramesRemaining;
    const environment = useRemotionEnvironment();
    const { fps } = useVideoConfig();
    const effectivePremountFor = ENABLE_V5_BREAKING_CHANGES ? premountFor ?? fps : premountFor ?? 0;
    const effectivePostmountFor = postmountFor ?? 0;
    const endThreshold = Math.ceil(from + durationInFrames - 1);
    const premountingActive = !environment.isRendering && frame < from && frame >= from - effectivePremountFor;
    const postmountingActive = !environment.isRendering && frame > endThreshold && frame <= endThreshold + effectivePostmountFor;
    const isPremountingOrPostmounting = premountingActive || postmountingActive;
    const freezeFrame = premountingActive ? from : postmountingActive ? from + durationInFrames - 1 : 0;
    const premountingStyle = (0, import_react30.useMemo)(() => {
      if (!isPremountingOrPostmounting) {
        return style2;
      }
      return {
        ...style2,
        ...hideWhilePremounted === "opacity" ? { opacity: 0 } : { display: "none" },
        pointerEvents: "none",
        ...premountingActive ? styleWhilePremounted : {},
        ...postmountingActive ? styleWhilePostmounted : {}
      };
    }, [
      isPremountingOrPostmounting,
      hideWhilePremounted,
      postmountingActive,
      premountingActive,
      style2,
      styleWhilePostmounted,
      styleWhilePremounted
    ]);
    return {
      effectivePremountFor,
      effectivePostmountFor,
      premountingActive,
      postmountingActive,
      isPremountingOrPostmounting,
      freezeFrame,
      premountingStyle
    };
  };
  var deleteNestedKey = (obj, keysToRemove) => {
    for (const key of keysToRemove) {
      const parts = key.split(".");
      const parents = [obj];
      let current = obj;
      for (let i = 0; i < parts.length - 1; i++) {
        const part = parts[i];
        const next = current[part];
        if (next === void 0 || next === null) {
          current = null;
          break;
        }
        current = next;
        parents.push(current);
      }
      if (current === null) {
        continue;
      }
      delete current[parts[parts.length - 1]];
      for (let i = parents.length - 1; i > 0; i--) {
        const parent = parents[i];
        if (Object.keys(parent).length === 0) {
          const parentKey = parts[i - 1];
          delete parents[i - 1][parentKey];
        } else {
          break;
        }
      }
    }
    return obj;
  };
  var NEWTON_ITERATIONS = 4;
  var NEWTON_MIN_SLOPE = 1e-3;
  var SUBDIVISION_PRECISION = 1e-7;
  var SUBDIVISION_MAX_ITERATIONS = 10;
  var kSplineTableSize = 11;
  var kSampleStepSize = 1 / (kSplineTableSize - 1);
  var float32ArraySupported = typeof Float32Array === "function";
  function a(aA1, aA2) {
    return 1 - 3 * aA2 + 3 * aA1;
  }
  function b(aA1, aA2) {
    return 3 * aA2 - 6 * aA1;
  }
  function c(aA1) {
    return 3 * aA1;
  }
  function calcBezier(aT, aA1, aA2) {
    return ((a(aA1, aA2) * aT + b(aA1, aA2)) * aT + c(aA1)) * aT;
  }
  function getSlope(aT, aA1, aA2) {
    return 3 * a(aA1, aA2) * aT * aT + 2 * b(aA1, aA2) * aT + c(aA1);
  }
  function binarySubdivide({
    aX,
    _aA,
    _aB,
    mX1,
    mX2
  }) {
    let currentX;
    let currentT;
    let i = 0;
    let aA = _aA;
    let aB = _aB;
    do {
      currentT = aA + (aB - aA) / 2;
      currentX = calcBezier(currentT, mX1, mX2) - aX;
      if (currentX > 0) {
        aB = currentT;
      } else {
        aA = currentT;
      }
    } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
    return currentT;
  }
  function newtonRaphsonIterate(aX, _aGuessT, mX1, mX2) {
    let aGuessT = _aGuessT;
    for (let i = 0; i < NEWTON_ITERATIONS; ++i) {
      const currentSlope = getSlope(aGuessT, mX1, mX2);
      if (currentSlope === 0) {
        return aGuessT;
      }
      const currentX = calcBezier(aGuessT, mX1, mX2) - aX;
      aGuessT -= currentX / currentSlope;
    }
    return aGuessT;
  }
  function bezier(mX1, mY1, mX2, mY2) {
    if (!(mX1 >= 0 && mX1 <= 1 && mX2 >= 0 && mX2 <= 1)) {
      throw new Error("bezier x values must be in [0, 1] range");
    }
    const sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
    if (mX1 !== mY1 || mX2 !== mY2) {
      for (let i = 0; i < kSplineTableSize; ++i) {
        sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
      }
    }
    function getTForX(aX) {
      let intervalStart = 0;
      let currentSample = 1;
      const lastSample = kSplineTableSize - 1;
      for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
        intervalStart += kSampleStepSize;
      }
      --currentSample;
      const dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
      const guessForT = intervalStart + dist * kSampleStepSize;
      const initialSlope = getSlope(guessForT, mX1, mX2);
      if (initialSlope >= NEWTON_MIN_SLOPE) {
        return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
      }
      if (initialSlope === 0) {
        return guessForT;
      }
      return binarySubdivide({
        aX,
        _aA: intervalStart,
        _aB: intervalStart + kSampleStepSize,
        mX1,
        mX2
      });
    }
    return function(x) {
      const clampedX = Math.min(1, Math.max(0, x));
      if (mX1 === mY1 && mX2 === mY2) {
        return clampedX;
      }
      if (clampedX === 0) {
        return 0;
      }
      if (clampedX === 1) {
        return 1;
      }
      return calcBezier(getTForX(clampedX), mY1, mY2);
    };
  }
  var normalizeNumber = (value) => {
    return Math.round(value * 1e6) / 1e6;
  };
  var angleUnits = /* @__PURE__ */ new Set(["deg", "rad", "grad", "turn"]);
  var lengthUnits = /* @__PURE__ */ new Set([
    "%",
    "cap",
    "ch",
    "cm",
    "cqb",
    "cqh",
    "cqi",
    "cqmax",
    "cqmin",
    "cqw",
    "dvh",
    "dvw",
    "em",
    "ex",
    "ic",
    "in",
    "lh",
    "lvh",
    "lvw",
    "mm",
    "pc",
    "pt",
    "px",
    "q",
    "rem",
    "rlh",
    "svh",
    "svw",
    "vb",
    "vh",
    "vi",
    "vmax",
    "vmin",
    "vw"
  ]);
  var cssNumberRegex = /^([+-]?(?:\d+\.?\d*|\.\d+))([a-zA-Z%]+)?$/;
  var transformOriginKeywords = /* @__PURE__ */ new Set([
    "left",
    "center",
    "right",
    "top",
    "bottom"
  ]);
  var transformOriginKeywordOptions = (keyword) => {
    if (keyword === "left") {
      return [{ axis: "x", value: { value: 0, unit: "%" } }];
    }
    if (keyword === "right") {
      return [{ axis: "x", value: { value: 100, unit: "%" } }];
    }
    if (keyword === "top") {
      return [{ axis: "y", value: { value: 0, unit: "%" } }];
    }
    if (keyword === "bottom") {
      return [{ axis: "y", value: { value: 100, unit: "%" } }];
    }
    return [
      { axis: "x", value: { value: 50, unit: "%" } },
      { axis: "y", value: { value: 50, unit: "%" } }
    ];
  };
  var transformOriginCenter = { value: 50, unit: "%" };
  var stringifyNumber = (value) => {
    return String(normalizeNumber(value));
  };
  var UnsupportedStringInterpolationValueError = class extends TypeError {
  };
  var parseStringInterpolationComponent = (component, value) => {
    const match = cssNumberRegex.exec(component);
    if (match === null) {
      throw new UnsupportedStringInterpolationValueError(`Cannot interpolate "${value}" because "${component}" is not a supported scale, translate, or rotate value`);
    }
    const unit = match[2] ?? null;
    const numberValue = Number(match[1]);
    if (!Number.isFinite(numberValue)) {
      throw new TypeError(`Cannot interpolate "${value}" because "${component}" is not finite`);
    }
    if (unit === null) {
      return { kind: "scale", value: numberValue, unit: null };
    }
    if (angleUnits.has(unit)) {
      return { kind: "rotate", value: numberValue, unit };
    }
    if (lengthUnits.has(unit)) {
      return { kind: "translate", value: numberValue, unit };
    }
    throw new TypeError(`Cannot interpolate "${value}" because "${unit}" is not a supported translate or rotate unit`);
  };
  var parseTransformOriginLengthPercentage = ({
    component,
    value,
    allowPercentage
  }) => {
    const match = cssNumberRegex.exec(component);
    if (match === null) {
      throw new TypeError(`Cannot interpolate "${value}" because "${component}" is not a supported transform-origin ${allowPercentage ? "length-percentage" : "z length"}`);
    }
    const unit = match[2] ?? null;
    const numberValue = Number(match[1]);
    if (!Number.isFinite(numberValue)) {
      throw new TypeError(`Cannot interpolate "${value}" because "${component}" is not finite`);
    }
    if (unit === null || !lengthUnits.has(unit) || !allowPercentage && unit === "%") {
      throw new TypeError(`Cannot interpolate "${value}" because "${component}" is not a supported transform-origin ${allowPercentage ? "length-percentage" : "z length"}`);
    }
    return { value: numberValue, unit };
  };
  var parseTransformOriginToken = (component, value) => {
    const lower = component.toLowerCase();
    if (transformOriginKeywords.has(lower)) {
      return { type: "keyword", keyword: lower };
    }
    return {
      type: "length-percentage",
      parsed: parseTransformOriginLengthPercentage({
        component,
        value,
        allowPercentage: true
      })
    };
  };
  var parseTwoTransformOriginKeywords = (first, second, value) => {
    const candidates = [];
    for (const firstOption of transformOriginKeywordOptions(first)) {
      for (const secondOption of transformOriginKeywordOptions(second)) {
        if (firstOption.axis === secondOption.axis) {
          continue;
        }
        candidates.push(firstOption.axis === "x" ? [firstOption.value, secondOption.value] : [secondOption.value, firstOption.value]);
      }
    }
    if (candidates.length === 0) {
      throw new TypeError(`Cannot interpolate "${value}" because "${first} ${second}" is not a valid transform-origin keyword pair`);
    }
    return candidates[0];
  };
  var parseTransformOriginXY = (parts, value) => {
    if (parts.length === 1) {
      const token = parseTransformOriginToken(parts[0], value);
      if (token.type === "length-percentage") {
        return [token.parsed, transformOriginCenter];
      }
      if (token.keyword === "top" || token.keyword === "bottom") {
        return [
          transformOriginCenter,
          transformOriginKeywordOptions(token.keyword)[0].value
        ];
      }
      return [
        transformOriginKeywordOptions(token.keyword)[0].value,
        transformOriginCenter
      ];
    }
    const first = parseTransformOriginToken(parts[0], value);
    const second = parseTransformOriginToken(parts[1], value);
    if (first.type === "length-percentage" && second.type === "length-percentage") {
      return [first.parsed, second.parsed];
    }
    if (first.type === "keyword" && second.type === "keyword") {
      return parseTwoTransformOriginKeywords(first.keyword, second.keyword, value);
    }
    const keyword = first.type === "keyword" ? first : second.type === "keyword" ? second : null;
    const length = first.type === "length-percentage" ? first.parsed : second.type === "length-percentage" ? second.parsed : null;
    if (keyword === null || length === null) {
      throw new Error("Expected a keyword and a length-percentage value");
    }
    const keywordIsFirst = first.type === "keyword";
    if (keyword.keyword === "left" || keyword.keyword === "right") {
      if (!keywordIsFirst) {
        throw new TypeError(`Cannot interpolate "${value}" because horizontal transform-origin keywords must come before a length-percentage value`);
      }
      return [transformOriginKeywordOptions(keyword.keyword)[0].value, length];
    }
    if (keyword.keyword === "top" || keyword.keyword === "bottom") {
      return [length, transformOriginKeywordOptions(keyword.keyword)[0].value];
    }
    return keywordIsFirst ? [transformOriginCenter, length] : [length, transformOriginCenter];
  };
  var parseTransformOriginValue = (output, parts) => {
    const [x, y] = parseTransformOriginXY(parts.slice(0, 2), output);
    const z = parts[2] === void 0 ? { value: 0, unit: null } : parseTransformOriginLengthPercentage({
      component: parts[2],
      value: output,
      allowPercentage: false
    });
    return {
      kind: "translate",
      values: [x.value, y.value, z.value, 0],
      units: [x.unit, y.unit, z.unit, null],
      dimensions: parts[2] === void 0 ? 2 : 3,
      axisRotation: false
    };
  };
  var parseAxisRotationValue = (output) => {
    const parts = output.trim().split(/\s+/);
    const keywordAxis = parts.length === 2 ? parts[0].toLowerCase() : null;
    if (keywordAxis === "x" || keywordAxis === "y" || keywordAxis === "z") {
      const keywordAngle = parseStringInterpolationComponent(parts[1], output);
      if (keywordAngle.kind !== "rotate") {
        return null;
      }
      return {
        kind: "rotate",
        values: keywordAxis === "x" ? [1, 0, 0, keywordAngle.value] : keywordAxis === "y" ? [0, 1, 0, keywordAngle.value] : [0, 0, 1, keywordAngle.value],
        units: [null, null, null, keywordAngle.unit],
        dimensions: 4,
        axisRotation: true
      };
    }
    if (parts.length !== 4) {
      return null;
    }
    const axis = parts.slice(0, 3).map(Number);
    if (!axis.every(Number.isFinite)) {
      return null;
    }
    const vectorAngle = parseStringInterpolationComponent(parts[3], output);
    if (vectorAngle.kind !== "rotate") {
      return null;
    }
    return {
      kind: "rotate",
      values: [axis[0], axis[1], axis[2], vectorAngle.value],
      units: [null, null, null, vectorAngle.unit],
      dimensions: 4,
      axisRotation: true
    };
  };
  var parseStringInterpolationValue = (output) => {
    if (typeof output === "number") {
      if (!Number.isFinite(output)) {
        throw new Error(`outputRange must contain only finite numbers, but got [${output}]`);
      }
      return {
        kind: "scale",
        values: [output, output, 1, 0],
        units: [null, null, null, null],
        dimensions: 1,
        axisRotation: false
      };
    }
    const axisRotation = parseAxisRotationValue(output);
    if (axisRotation !== null) {
      return axisRotation;
    }
    const parts = output.trim().split(/\s+/);
    if (parts.length < 1 || parts.length > 3 || parts[0] === "") {
      throw new TypeError(`String outputRange values must contain 1 to 3 components, but got "${output}"`);
    }
    if (parts.some((part) => transformOriginKeywords.has(part.toLowerCase()))) {
      return parseTransformOriginValue(output, parts);
    }
    const parsed = parts.map((part) => parseStringInterpolationComponent(part, output));
    const [{ kind }] = parsed;
    for (const part of parsed) {
      if (part.kind !== kind) {
        throw new TypeError(`Cannot interpolate "${output}" because it mixes ${kind} and ${part.kind} values`);
      }
    }
    if (kind === "scale") {
      const x = parsed[0].value;
      const y = parsed[1]?.value ?? x;
      const z = parsed[2]?.value ?? 1;
      return {
        kind,
        values: [x, y, z, 0],
        units: [null, null, null, null],
        dimensions: parsed.length,
        axisRotation: false
      };
    }
    return {
      kind,
      values: [parsed[0].value, parsed[1]?.value ?? 0, parsed[2]?.value ?? 0, 0],
      units: [
        parsed[0].unit,
        parsed[1]?.unit ?? null,
        parsed[2]?.unit ?? null,
        null
      ],
      dimensions: parsed.length,
      axisRotation: false
    };
  };
  var serializeStringInterpolationValue = ({
    kind,
    values,
    units,
    dimensions,
    axisRotation
  }) => {
    if (axisRotation) {
      return `${stringifyNumber(values[0])} ${stringifyNumber(values[1])} ${stringifyNumber(values[2])} ${stringifyNumber(values[3])}${units[3]}`;
    }
    if (kind === "scale") {
      return values.slice(0, dimensions).map((value) => stringifyNumber(value)).join(" ");
    }
    return values.slice(0, dimensions).map((value, index) => `${stringifyNumber(value)}${units[index]}`).join(" ");
  };
  var toSignedArea = (scale) => {
    if (scale === 0) {
      return 0;
    }
    return Math.sign(scale) * scale * scale;
  };
  var fromSignedArea = (area) => {
    if (area === 0) {
      return 0;
    }
    return Math.sign(area) * Math.sqrt(Math.abs(area));
  };
  function interpolateFunction(input, inputRange, outputRange, options) {
    const { extrapolateLeft, extrapolateRight, easing, output } = options;
    let result = input;
    const [inputMin, inputMax] = inputRange;
    const [outputMin, outputMax] = outputRange;
    if (result < inputMin) {
      if (extrapolateLeft === "identity") {
        return result;
      }
      if (extrapolateLeft === "clamp") {
        result = inputMin;
      } else if (extrapolateLeft === "wrap") {
        const range = inputMax - inputMin;
        result = ((result - inputMin) % range + range) % range + inputMin;
      } else if (extrapolateLeft === "extend") {
      }
    }
    if (result > inputMax) {
      if (extrapolateRight === "identity") {
        return result;
      }
      if (extrapolateRight === "clamp") {
        result = inputMax;
      } else if (extrapolateRight === "wrap") {
        const range = inputMax - inputMin;
        result = ((result - inputMin) % range + range) % range + inputMin;
      } else if (extrapolateRight === "extend") {
      }
    }
    if (outputMin === outputMax) {
      return outputMin;
    }
    result = (result - inputMin) / (inputMax - inputMin);
    result = easing(result);
    if (output === "perceptual-scale") {
      const signedAreaMin = toSignedArea(outputMin);
      const signedAreaMax = toSignedArea(outputMax);
      result = fromSignedArea(result * (signedAreaMax - signedAreaMin) + signedAreaMin);
    } else {
      result = result * (outputMax - outputMin) + outputMin;
    }
    return result;
  }
  function findRange(input, inputRange) {
    let i;
    for (i = 1; i < inputRange.length - 1; ++i) {
      if (inputRange[i] >= input) {
        break;
      }
    }
    return i - 1;
  }
  var defaultEasing = (num) => num;
  var resolveOutputOption = (output) => {
    return output ?? "linear";
  };
  var shouldExtendRightForEasing = (easing) => {
    return easing.remotionShouldExtendRight === true;
  };
  var resolveEasingForSegment = ({
    easing,
    segmentIndex
  }) => {
    if (easing === void 0) {
      return defaultEasing;
    }
    if (typeof easing === "function") {
      return easing;
    }
    return easing[segmentIndex];
  };
  var interpolateSegment = ({
    input,
    inputRange,
    outputRange,
    easing,
    extrapolateLeft,
    extrapolateRight,
    output
  }) => {
    return interpolateFunction(input, inputRange, outputRange, {
      easing,
      extrapolateLeft,
      extrapolateRight: input > inputRange[1] && extrapolateRight === "clamp" && shouldExtendRightForEasing(easing) ? "extend" : extrapolateRight,
      output
    });
  };
  var interpolateNumber = ({
    input,
    inputRange,
    outputRange,
    options
  }) => {
    const output = resolveOutputOption(options?.output);
    if (inputRange.length === 1) {
      return outputRange[0];
    }
    const easingOption = options?.easing;
    let extrapolateLeft = "extend";
    if (options?.extrapolateLeft !== void 0) {
      extrapolateLeft = options.extrapolateLeft;
    }
    let extrapolateRight = "extend";
    if (options?.extrapolateRight !== void 0) {
      extrapolateRight = options.extrapolateRight;
    }
    const posterizedInput = options?.posterize === void 0 ? input : Math.floor(input / options.posterize) * options.posterize;
    const range = findRange(posterizedInput, inputRange);
    const easing = resolveEasingForSegment({
      easing: easingOption,
      segmentIndex: range
    });
    let result = interpolateSegment({
      input: posterizedInput,
      inputRange: [inputRange[range], inputRange[range + 1]],
      outputRange: [outputRange[range], outputRange[range + 1]],
      easing,
      extrapolateLeft,
      extrapolateRight,
      output
    });
    for (let segmentIndex = 0; segmentIndex < range; segmentIndex++) {
      const previousEasing = resolveEasingForSegment({
        easing: easingOption,
        segmentIndex
      });
      if (!shouldExtendRightForEasing(previousEasing)) {
        continue;
      }
      const previousSegmentEnd = inputRange[segmentIndex + 1];
      if (posterizedInput <= previousSegmentEnd) {
        continue;
      }
      const continuedSegmentValue = interpolateSegment({
        input: posterizedInput,
        inputRange: [inputRange[segmentIndex], previousSegmentEnd],
        outputRange: [outputRange[segmentIndex], outputRange[segmentIndex + 1]],
        easing: previousEasing,
        extrapolateLeft,
        extrapolateRight: "extend",
        output
      });
      result += continuedSegmentValue - outputRange[segmentIndex + 1];
    }
    return result;
  };
  var interpolateString = ({
    input,
    inputRange,
    outputRange,
    options
  }) => {
    const initiallyParsedOutputRange = outputRange.map(parseStringInterpolationValue);
    const hasAxisRotation = initiallyParsedOutputRange.some((parsed) => parsed.axisRotation);
    const parsedOutputRange = hasAxisRotation ? initiallyParsedOutputRange.map((parsed) => {
      if (parsed.kind !== "rotate") {
        return parsed;
      }
      if (parsed.axisRotation) {
        return parsed;
      }
      if (parsed.dimensions !== 1) {
        throw new TypeError("Cannot interpolate a multi-angle rotate value with an axis rotation");
      }
      return {
        kind: "rotate",
        values: [0, 0, 1, parsed.values[0]],
        units: [null, null, null, parsed.units[0]],
        dimensions: 4,
        axisRotation: true
      };
    }) : initiallyParsedOutputRange;
    const kind = parsedOutputRange[0]?.kind;
    if (kind === void 0) {
      throw new Error("outputRange must have at least 1 element");
    }
    for (const parsed of parsedOutputRange) {
      if (parsed.kind !== kind) {
        throw new TypeError(`Cannot interpolate ${kind} values with ${parsed.kind} values`);
      }
    }
    const dimensions = Math.max(...parsedOutputRange.map((parsed) => parsed.dimensions));
    const units = [
      null,
      null,
      null,
      null
    ];
    if (kind !== "scale") {
      for (let axis = 0; axis < dimensions; axis++) {
        if (hasAxisRotation && axis < 3) {
          continue;
        }
        for (const parsed of parsedOutputRange) {
          const unit = parsed.units[axis];
          if (unit === null) {
            continue;
          }
          if (units[axis] === null) {
            units[axis] = unit;
            continue;
          }
          if (units[axis] !== unit) {
            throw new TypeError(`Cannot interpolate ${kind} values with different units on axis ${axis + 1}: ${units[axis]} and ${unit}`);
          }
        }
        if (units[axis] === null) {
          throw new TypeError(`Cannot interpolate ${kind} values because axis ${axis + 1} has no unit`);
        }
      }
    }
    const values = [0, 0, 0, 0];
    for (let axis = 0; axis < dimensions; axis++) {
      values[axis] = interpolateNumber({
        input,
        inputRange,
        outputRange: parsedOutputRange.map((parsed) => parsed.values[axis]),
        options
      });
    }
    return serializeStringInterpolationValue({
      kind,
      values,
      units,
      dimensions,
      axisRotation: hasAxisRotation
    });
  };
  var interpolateDiscreteString = ({
    input,
    inputRange,
    outputRange,
    options
  }) => {
    if (inputRange.length === 1) {
      return outputRange[0];
    }
    for (let segmentIndex = 0; segmentIndex < inputRange.length - 1; segmentIndex++) {
      if (resolveEasingForSegment({
        easing: options?.easing,
        segmentIndex
      }) !== Easing.step1) {
        throw new TypeError("Non-numeric strings can only be interpolated using Easing.step1");
      }
    }
    const posterizedInput = options?.posterize === void 0 ? input : Math.floor(input / options.posterize) * options.posterize;
    const inputMin = inputRange[0];
    const inputMax = inputRange[inputRange.length - 1];
    let resolvedInput = posterizedInput;
    if (resolvedInput < inputMin) {
      if (options?.extrapolateLeft === "identity") {
        throw new TypeError('extrapolateLeft: "identity" is not supported for non-numeric strings');
      }
      if (options?.extrapolateLeft === "wrap") {
        const wrapRange = inputMax - inputMin;
        resolvedInput = ((resolvedInput - inputMin) % wrapRange + wrapRange) % wrapRange + inputMin;
      } else {
        return outputRange[0];
      }
    }
    if (resolvedInput > inputMax) {
      if (options?.extrapolateRight === "identity") {
        throw new TypeError('extrapolateRight: "identity" is not supported for non-numeric strings');
      }
      if (options?.extrapolateRight === "wrap") {
        const wrapRange = inputMax - inputMin;
        resolvedInput = ((resolvedInput - inputMin) % wrapRange + wrapRange) % wrapRange + inputMin;
      } else {
        return outputRange[outputRange.length - 1];
      }
    }
    const range = findRange(resolvedInput, inputRange);
    return resolvedInput >= inputRange[range + 1] ? outputRange[range + 1] : outputRange[range];
  };
  var validateTupleOutputRange = (outputRange) => {
    const dimensions = outputRange[0]?.length;
    if (dimensions === void 0) {
      throw new Error("outputRange must have at least 1 element");
    }
    if (dimensions === 0) {
      throw new TypeError("outputRange tuples must contain at least 1 number");
    }
    for (const output of outputRange) {
      if (output.length !== dimensions) {
        throw new TypeError(`outputRange tuples must all have the same length, but got ${dimensions} and ${output.length}`);
      }
      for (const value of output) {
        if (typeof value !== "number" || !Number.isFinite(value)) {
          throw new TypeError(`outputRange tuples must contain only finite numbers, but got [${output.join(",")}]`);
        }
      }
    }
    return dimensions;
  };
  var interpolateTuple = ({
    input,
    inputRange,
    outputRange,
    options
  }) => {
    const dimensions = validateTupleOutputRange(outputRange);
    return new Array(dimensions).fill(true).map((_, axis) => interpolateNumber({
      input,
      inputRange,
      outputRange: outputRange.map((output) => output[axis]),
      options
    }));
  };
  function checkValidInputRange(arr) {
    for (let i = 1; i < arr.length; ++i) {
      if (!(arr[i] > arr[i - 1])) {
        throw new Error(`inputRange must be strictly monotonically increasing but got [${arr.join(",")}]`);
      }
    }
  }
  function checkInfiniteRange(name, arr) {
    if (arr.length < 1) {
      throw new Error(name + " must have at least 1 element");
    }
    for (const element of arr) {
      if (typeof element !== "number") {
        throw new Error(`${name} must contain only numbers`);
      }
      if (!Number.isFinite(element)) {
        throw new Error(`${name} must contain only finite numbers, but got [${arr.join(",")}]`);
      }
    }
  }
  function assertValidInterpolateEasingOption(easing, inputRangeLength) {
    if (easing === void 0) {
      return;
    }
    if (typeof easing === "function") {
      return;
    }
    const expectedLength = inputRangeLength - 1;
    if (easing.length !== expectedLength) {
      throw new Error(`When easing is an array, it must have one entry per segment between keyframes (length inputRange.length - 1 = ${expectedLength}), but got length ${easing.length}`);
    }
    for (let i = 0; i < easing.length; i++) {
      if (typeof easing[i] !== "function") {
        throw new Error(`easing[${i}] must be a function`);
      }
    }
  }
  function assertValidInterpolatePosterizeOption(posterize) {
    if (posterize === void 0) {
      return;
    }
    if (typeof posterize !== "number" || !Number.isFinite(posterize) || posterize <= 0) {
      throw new Error(`posterize must be a positive finite number, but got ${posterize}`);
    }
  }
  function assertValidInterpolateOutputOption(output) {
    if (output === void 0 || output === "linear" || output === "perceptual-scale") {
      return;
    }
    throw new Error(`output must be "linear" or "perceptual-scale", but got ${String(output)}`);
  }
  function interpolate(input, inputRange, outputRange, options) {
    if (typeof input === "undefined") {
      throw new Error("input can not be undefined");
    }
    if (typeof inputRange === "undefined") {
      throw new Error("inputRange can not be undefined");
    }
    if (typeof outputRange === "undefined") {
      throw new Error("outputRange can not be undefined");
    }
    if (inputRange.length !== outputRange.length) {
      throw new Error("inputRange (" + inputRange.length + ") and outputRange (" + outputRange.length + ") must have the same length");
    }
    checkInfiniteRange("inputRange", inputRange);
    checkValidInputRange(inputRange);
    assertValidInterpolateEasingOption(options?.easing, inputRange.length);
    assertValidInterpolatePosterizeOption(options?.posterize);
    assertValidInterpolateOutputOption(options?.output);
    if (typeof input !== "number") {
      throw new TypeError("Cannot interpolate an input which is not a number");
    }
    if (!Array.isArray(outputRange)) {
      throw new Error("outputRange must contain only numbers");
    }
    const hasStringOutput = outputRange.some((output) => typeof output === "string");
    if (hasStringOutput) {
      if (!outputRange.every((output) => typeof output === "string" || typeof output === "number")) {
        throw new TypeError("outputRange must contain only numbers, or supported scale, translate, and rotate strings");
      }
      try {
        return interpolateString({ input, inputRange, outputRange, options });
      } catch (error2) {
        if (!outputRange.every((output) => typeof output === "string")) {
          throw error2;
        }
        const hasNonNumericString = outputRange.some((output) => {
          try {
            parseStringInterpolationValue(output);
            return false;
          } catch (parseError) {
            return parseError instanceof UnsupportedStringInterpolationValueError;
          }
        });
        if (!hasNonNumericString) {
          throw error2;
        }
        return interpolateDiscreteString({
          input,
          inputRange,
          outputRange,
          options
        });
      }
    }
    if (outputRange.every((output) => Array.isArray(output))) {
      return interpolateTuple({ input, inputRange, outputRange, options });
    }
    if (!outputRange.every((output) => typeof output === "number")) {
      throw new TypeError("outputRange must contain only numbers, numeric tuples, or supported scale, translate, and rotate strings");
    }
    checkInfiniteRange("outputRange", outputRange);
    return interpolateNumber({ input, inputRange, outputRange, options });
  }
  var validateFrame = ({
    allowFloats,
    durationInFrames,
    frame
  }) => {
    if (typeof frame === "undefined") {
      throw new TypeError(`Argument missing for parameter "frame"`);
    }
    if (typeof frame !== "number") {
      throw new TypeError(`Argument passed for "frame" is not a number: ${frame}`);
    }
    if (!Number.isFinite(frame)) {
      throw new RangeError(`Frame ${frame} is not finite`);
    }
    if (frame % 1 !== 0 && !allowFloats) {
      throw new RangeError(`Argument for frame must be an integer, but got ${frame}`);
    }
    if (frame < 0 && frame < -durationInFrames) {
      throw new RangeError(`Cannot use frame ${frame}: Duration of composition is ${durationInFrames}, therefore the lowest frame that can be rendered is ${-durationInFrames}`);
    }
    if (frame > durationInFrames - 1) {
      throw new RangeError(`Cannot use frame ${frame}: Duration of composition is ${durationInFrames}, therefore the highest frame that can be rendered is ${durationInFrames - 1}`);
    }
  };
  var validateSpringDuration = (dur) => {
    if (typeof dur === "undefined") {
      return;
    }
    if (typeof dur !== "number") {
      throw new TypeError(`A "duration" of a spring must be a "number" but is "${typeof dur}"`);
    }
    if (Number.isNaN(dur)) {
      throw new TypeError('A "duration" of a spring is NaN, which it must not be');
    }
    if (!Number.isFinite(dur)) {
      throw new TypeError('A "duration" of a spring must be finite, but is ' + dur);
    }
    if (dur <= 0) {
      throw new TypeError('A "duration" of a spring must be positive, but is ' + dur);
    }
  };
  var defaultSpringConfig = {
    damping: 10,
    mass: 1,
    stiffness: 100,
    overshootClamping: false
  };
  var advanceCache = {};
  function advance({
    animation,
    now,
    config
  }) {
    const { toValue, lastTimestamp, current, velocity } = animation;
    const deltaTime = Math.min(now - lastTimestamp, 64);
    if (config.damping <= 0) {
      throw new Error("Spring damping must be greater than 0, otherwise the spring() animation will never end, causing an infinite loop.");
    }
    const c22 = config.damping;
    const m = config.mass;
    const k = config.stiffness;
    const cacheKey = [
      toValue,
      lastTimestamp,
      current,
      velocity,
      c22,
      m,
      k,
      now
    ].join("-");
    if (advanceCache[cacheKey]) {
      return advanceCache[cacheKey];
    }
    const v0 = -velocity;
    const x0 = toValue - current;
    const zeta = c22 / (2 * Math.sqrt(k * m));
    const omega0 = Math.sqrt(k / m);
    const omega1 = omega0 * Math.sqrt(1 - zeta ** 2);
    const t = deltaTime / 1e3;
    const sin1 = Math.sin(omega1 * t);
    const cos1 = Math.cos(omega1 * t);
    const underDampedEnvelope = Math.exp(-zeta * omega0 * t);
    const underDampedFrag1 = underDampedEnvelope * (sin1 * ((v0 + zeta * omega0 * x0) / omega1) + x0 * cos1);
    const underDampedPosition = toValue - underDampedFrag1;
    const underDampedVelocity = zeta * omega0 * underDampedFrag1 - underDampedEnvelope * (cos1 * (v0 + zeta * omega0 * x0) - omega1 * x0 * sin1);
    const criticallyDampedEnvelope = Math.exp(-omega0 * t);
    const criticallyDampedPosition = toValue - criticallyDampedEnvelope * (x0 + (v0 + omega0 * x0) * t);
    const criticallyDampedVelocity = criticallyDampedEnvelope * (v0 * (t * omega0 - 1) + t * x0 * omega0 * omega0);
    const animationNode = {
      toValue,
      prevPosition: current,
      lastTimestamp: now,
      current: zeta < 1 ? underDampedPosition : criticallyDampedPosition,
      velocity: zeta < 1 ? underDampedVelocity : criticallyDampedVelocity
    };
    advanceCache[cacheKey] = animationNode;
    return animationNode;
  }
  var calculationCache = {};
  function springCalculation({
    frame,
    fps,
    config = {}
  }) {
    const from = 0;
    const to = 1;
    const cacheKey = [
      frame,
      fps,
      config.damping,
      config.mass,
      config.overshootClamping,
      config.stiffness
    ].join("-");
    if (calculationCache[cacheKey]) {
      return calculationCache[cacheKey];
    }
    let animation = {
      lastTimestamp: 0,
      current: from,
      toValue: to,
      velocity: 0,
      prevPosition: 0
    };
    const frameClamped = Math.max(0, frame);
    const unevenRest = frameClamped % 1;
    for (let f = 0; f <= Math.floor(frameClamped); f++) {
      if (f === Math.floor(frameClamped)) {
        f += unevenRest;
      }
      const time = f / fps * 1e3;
      animation = advance({
        animation,
        now: time,
        config: {
          ...defaultSpringConfig,
          ...config
        }
      });
    }
    calculationCache[cacheKey] = animation;
    return animation;
  }
  var cache = /* @__PURE__ */ new Map();
  function measureSpring({
    fps,
    config = {},
    threshold = 5e-3
  }) {
    if (typeof threshold !== "number") {
      throw new TypeError(`threshold must be a number, got ${threshold} of type ${typeof threshold}`);
    }
    if (threshold === 0) {
      return Infinity;
    }
    if (threshold === 1) {
      return 0;
    }
    if (isNaN(threshold)) {
      throw new TypeError("Threshold is NaN");
    }
    if (!Number.isFinite(threshold)) {
      throw new TypeError("Threshold is not finite");
    }
    if (threshold < 0) {
      throw new TypeError("Threshold is below 0");
    }
    const cacheKey = [
      fps,
      config.damping,
      config.mass,
      config.overshootClamping,
      config.stiffness,
      threshold
    ].join("-");
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }
    validateFps(fps, "to the measureSpring() function", false);
    let frame = 0;
    let finishedFrame = 0;
    const calc = () => {
      return springCalculation({
        fps,
        frame,
        config
      });
    };
    let animation = calc();
    const calcDifference = () => {
      return Math.abs(animation.current - animation.toValue);
    };
    let difference = calcDifference();
    while (difference >= threshold) {
      frame++;
      animation = calc();
      difference = calcDifference();
    }
    finishedFrame = frame;
    for (let i = 0; i < 20; i++) {
      frame++;
      animation = calc();
      difference = calcDifference();
      if (difference >= threshold) {
        i = 0;
        finishedFrame = frame + 1;
      }
    }
    cache.set(cacheKey, finishedFrame);
    return finishedFrame;
  }
  function spring({
    frame: passedFrame,
    fps,
    config = {},
    from = 0,
    to = 1,
    durationInFrames: passedDurationInFrames,
    durationRestThreshold,
    delay: delay2 = 0,
    reverse = false
  }) {
    validateSpringDuration(passedDurationInFrames);
    validateFrame({
      frame: passedFrame,
      durationInFrames: Infinity,
      allowFloats: true
    });
    validateFps(fps, "to spring()", false);
    const needsToCalculateNaturalDuration = reverse || typeof passedDurationInFrames !== "undefined";
    const naturalDuration = needsToCalculateNaturalDuration ? measureSpring({
      fps,
      config,
      threshold: durationRestThreshold
    }) : void 0;
    const naturalDurationGetter = needsToCalculateNaturalDuration ? {
      get: () => naturalDuration
    } : {
      get: () => {
        throw new Error("did not calculate natural duration, this is an error with Remotion. Please report");
      }
    };
    const reverseProcessed = reverse ? (passedDurationInFrames ?? naturalDurationGetter.get()) - passedFrame : passedFrame;
    const delayProcessed = reverseProcessed + (reverse ? delay2 : -delay2);
    const durationProcessed = passedDurationInFrames === void 0 ? delayProcessed : delayProcessed / (passedDurationInFrames / naturalDurationGetter.get());
    if (passedDurationInFrames && delayProcessed > passedDurationInFrames) {
      return to;
    }
    const spr = springCalculation({
      fps,
      frame: durationProcessed,
      config
    });
    const inner = config.overshootClamping ? to >= from ? Math.min(spr.current, to) : Math.max(spr.current, to) : spr.current;
    const interpolated = from === 0 && to === 1 ? inner : interpolate(inner, [0, 1], [from, to]);
    return interpolated;
  }
  var clampUnit = (t) => Math.min(1, Math.max(0, t));
  var springEasingDurationInFrames = 30;
  var Easing = class _Easing {
    static step0(n) {
      return n > 0 ? 1 : 0;
    }
    static step1(n) {
      return n >= 1 ? 1 : 0;
    }
    static linear(t) {
      return t;
    }
    static ease(t) {
      return _Easing.bezier(0.42, 0, 1, 1)(t);
    }
    static quad(t) {
      return t * t;
    }
    static cubic(t) {
      return t * t * t;
    }
    static poly(n) {
      return (t) => t ** n;
    }
    static sin(t) {
      return 1 - Math.cos(t * Math.PI / 2);
    }
    static circle(t) {
      const u = clampUnit(t);
      return 1 - Math.sqrt(1 - u * u);
    }
    static exp(t) {
      return 2 ** (10 * (t - 1));
    }
    static elastic(bounciness = 1) {
      const p = bounciness * Math.PI;
      return (t) => 1 - Math.cos(t * Math.PI / 2) ** 3 * Math.cos(t * p);
    }
    static back(s = 1.70158) {
      return (t) => t * t * ((s + 1) * t - s);
    }
    static spring({
      allowTail = false,
      durationRestThreshold,
      ...config
    } = {}) {
      const easing = (t) => {
        if (t <= 0) {
          return 0;
        }
        if (!allowTail && t >= 1) {
          return 1;
        }
        if (allowTail) {
          return spring({
            fps: springEasingDurationInFrames,
            frame: t * measureSpring({
              fps: springEasingDurationInFrames,
              config,
              threshold: durationRestThreshold
            }),
            config
          });
        }
        return spring({
          fps: springEasingDurationInFrames,
          frame: t * springEasingDurationInFrames,
          config,
          durationInFrames: springEasingDurationInFrames,
          durationRestThreshold
        });
      };
      return Object.assign(easing, {
        remotionShouldExtendRight: allowTail
      });
    }
    static bounce(t) {
      const u = clampUnit(t);
      if (u < 1 / 2.75) {
        return 7.5625 * u * u;
      }
      if (u < 2 / 2.75) {
        const t2_ = u - 1.5 / 2.75;
        return 7.5625 * t2_ * t2_ + 0.75;
      }
      if (u < 2.5 / 2.75) {
        const t2_ = u - 2.25 / 2.75;
        return 7.5625 * t2_ * t2_ + 0.9375;
      }
      const t2 = u - 2.625 / 2.75;
      return 7.5625 * t2 * t2 + 0.984375;
    }
    static bezier(x1, y1, x2, y2) {
      return bezier(x1, y1, x2, y2);
    }
    static in(easing) {
      return easing;
    }
    static out(easing) {
      return (t) => 1 - easing(1 - t);
    }
    static inOut(easing) {
      return (t) => {
        if (t < 0.5) {
          return easing(t * 2) / 2;
        }
        return 1 - easing((1 - t) * 2) / 2;
      };
    }
  };
  var NUMBER = "[-+]?\\d*\\.?\\d+";
  var PERCENTAGE = NUMBER + "%";
  function call(...args) {
    return "\\(\\s*(" + args.join(")\\s*,\\s*(") + ")\\s*\\)";
  }
  var MODERN_VALUE = "(?:none|[-+]?\\d*\\.?\\d+(?:%|deg|rad|grad|turn)?)";
  function modernColorCall(name) {
    return new RegExp(name + "\\(\\s*(" + MODERN_VALUE + ")\\s+(" + MODERN_VALUE + ")\\s+(" + MODERN_VALUE + ")(?:\\s*\\/\\s*(" + MODERN_VALUE + "))?\\s*\\)");
  }
  function getMatchers() {
    const cachedMatchers = {
      rgb: void 0,
      rgba: void 0,
      hsl: void 0,
      hsla: void 0,
      hex3: void 0,
      hex4: void 0,
      hex5: void 0,
      hex6: void 0,
      hex8: void 0,
      oklch: void 0,
      oklab: void 0,
      lab: void 0,
      lch: void 0,
      hwb: void 0
    };
    if (cachedMatchers.rgb === void 0) {
      cachedMatchers.rgb = new RegExp("rgb" + call(NUMBER, NUMBER, NUMBER));
      cachedMatchers.rgba = new RegExp("rgba" + call(NUMBER, NUMBER, NUMBER, NUMBER));
      cachedMatchers.hsl = new RegExp("hsl" + call(NUMBER, PERCENTAGE, PERCENTAGE));
      cachedMatchers.hsla = new RegExp("hsla" + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER));
      cachedMatchers.hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
      cachedMatchers.hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
      cachedMatchers.hex6 = /^#([0-9a-fA-F]{6})$/;
      cachedMatchers.hex8 = /^#([0-9a-fA-F]{8})$/;
      cachedMatchers.oklch = modernColorCall("oklch");
      cachedMatchers.oklab = modernColorCall("oklab");
      cachedMatchers.lab = modernColorCall("lab");
      cachedMatchers.lch = modernColorCall("lch");
      cachedMatchers.hwb = modernColorCall("hwb");
    }
    return cachedMatchers;
  }
  function hue2rgb(p, q, t) {
    if (t < 0) {
      t += 1;
    }
    if (t > 1) {
      t -= 1;
    }
    if (t < 1 / 6) {
      return p + (q - p) * 6 * t;
    }
    if (t < 1 / 2) {
      return q;
    }
    if (t < 2 / 3) {
      return p + (q - p) * (2 / 3 - t) * 6;
    }
    return p;
  }
  function hslToRgb(h, s, l) {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    const r = hue2rgb(p, q, h + 1 / 3);
    const g = hue2rgb(p, q, h);
    const b22 = hue2rgb(p, q, h - 1 / 3);
    return Math.round(r * 255) << 24 | Math.round(g * 255) << 16 | Math.round(b22 * 255) << 8;
  }
  function parse255(str) {
    const int = Number.parseInt(str, 10);
    if (int < 0) {
      return 0;
    }
    if (int > 255) {
      return 255;
    }
    return int;
  }
  function parse360(str) {
    const int = Number.parseFloat(str);
    return (int % 360 + 360) % 360 / 360;
  }
  function parse1(str) {
    const num = Number.parseFloat(str);
    if (num < 0) {
      return 0;
    }
    if (num > 1) {
      return 255;
    }
    return Math.round(num * 255);
  }
  function parsePercentage(str) {
    const int = Number.parseFloat(str);
    if (int < 0) {
      return 0;
    }
    if (int > 100) {
      return 1;
    }
    return int / 100;
  }
  function parseModernComponent(str, percentScale) {
    if (str === "none")
      return 0;
    if (str.endsWith("%")) {
      return Number.parseFloat(str) / 100 * percentScale;
    }
    return Number.parseFloat(str);
  }
  function parseHueAngle(str) {
    if (str === "none")
      return 0;
    if (str.endsWith("rad")) {
      return Number.parseFloat(str) * 180 / Math.PI;
    }
    if (str.endsWith("grad"))
      return Number.parseFloat(str) * 0.9;
    if (str.endsWith("turn"))
      return Number.parseFloat(str) * 360;
    return Number.parseFloat(str);
  }
  function parseModernAlpha(str) {
    if (str === void 0 || str === "none")
      return 1;
    if (str.endsWith("%")) {
      return Math.max(0, Math.min(1, Number.parseFloat(str) / 100));
    }
    return Math.max(0, Math.min(1, Number.parseFloat(str)));
  }
  function linearToSrgb(c22) {
    if (c22 <= 31308e-7)
      return 12.92 * c22;
    return 1.055 * c22 ** (1 / 2.4) - 0.055;
  }
  function clamp01(v) {
    return Math.max(0, Math.min(1, v));
  }
  function rgbFloatToInt(r, g, b22, alpha) {
    const ri = Math.round(clamp01(r) * 255);
    const gi = Math.round(clamp01(g) * 255);
    const bi = Math.round(clamp01(b22) * 255);
    const ai = Math.round(clamp01(alpha) * 255);
    return (ri << 24 | gi << 16 | bi << 8 | ai) >>> 0;
  }
  function oklabToSrgb(L, a22, b22) {
    const l_ = L + 0.3963377774 * a22 + 0.2158037573 * b22;
    const m_ = L - 0.1055613458 * a22 - 0.0638541728 * b22;
    const s_ = L - 0.0894841775 * a22 - 1.291485548 * b22;
    const l = l_ * l_ * l_;
    const m = m_ * m_ * m_;
    const s = s_ * s_ * s_;
    const rLin = 4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s;
    const gLin = -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s;
    const bLin = -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s;
    return [linearToSrgb(rLin), linearToSrgb(gLin), linearToSrgb(bLin)];
  }
  function labToSrgb(L, a22, b22) {
    const epsilon = 216 / 24389;
    const kappa = 24389 / 27;
    const Xn = 0.95047;
    const Yn = 1;
    const Zn = 1.08883;
    const fy = (L + 16) / 116;
    const fx = a22 / 500 + fy;
    const fz = fy - b22 / 200;
    const fx3 = fx * fx * fx;
    const fz3 = fz * fz * fz;
    const xr = fx3 > epsilon ? fx3 : (116 * fx - 16) / kappa;
    const yr = L > kappa * epsilon ? ((L + 16) / 116) ** 3 : L / kappa;
    const zr = fz3 > epsilon ? fz3 : (116 * fz - 16) / kappa;
    const X = xr * Xn;
    const Y = yr * Yn;
    const Z = zr * Zn;
    const rLin = 3.2404542 * X - 1.5371385 * Y - 0.4985314 * Z;
    const gLin = -0.969266 * X + 1.8760108 * Y + 0.041556 * Z;
    const bLin = 0.0556434 * X - 0.2040259 * Y + 1.0572252 * Z;
    return [linearToSrgb(rLin), linearToSrgb(gLin), linearToSrgb(bLin)];
  }
  function hwbToSrgb(h, w, bk) {
    if (w + bk >= 1) {
      const gray = w / (w + bk);
      return [gray, gray, gray];
    }
    const q = 1;
    const p = 0;
    const r = hue2rgb(p, q, h + 1 / 3);
    const g = hue2rgb(p, q, h);
    const bl = hue2rgb(p, q, h - 1 / 3);
    const factor = 1 - w - bk;
    return [r * factor + w, g * factor + w, bl * factor + w];
  }
  var colorNames = {
    transparent: 0,
    aliceblue: 4042850303,
    antiquewhite: 4209760255,
    aqua: 16777215,
    aquamarine: 2147472639,
    azure: 4043309055,
    beige: 4126530815,
    bisque: 4293182719,
    black: 255,
    blanchedalmond: 4293643775,
    blue: 65535,
    blueviolet: 2318131967,
    brown: 2771004159,
    burlywood: 3736635391,
    burntsienna: 3934150143,
    cadetblue: 1604231423,
    chartreuse: 2147418367,
    chocolate: 3530104575,
    coral: 4286533887,
    cornflowerblue: 1687547391,
    cornsilk: 4294499583,
    crimson: 3692313855,
    cyan: 16777215,
    darkblue: 35839,
    darkcyan: 9145343,
    darkgoldenrod: 3095792639,
    darkgray: 2846468607,
    darkgreen: 6553855,
    darkgrey: 2846468607,
    darkkhaki: 3182914559,
    darkmagenta: 2332068863,
    darkolivegreen: 1433087999,
    darkorange: 4287365375,
    darkorchid: 2570243327,
    darkred: 2332033279,
    darksalmon: 3918953215,
    darkseagreen: 2411499519,
    darkslateblue: 1211993087,
    darkslategray: 793726975,
    darkslategrey: 793726975,
    darkturquoise: 13554175,
    darkviolet: 2483082239,
    deeppink: 4279538687,
    deepskyblue: 12582911,
    dimgray: 1768516095,
    dimgrey: 1768516095,
    dodgerblue: 512819199,
    firebrick: 2988581631,
    floralwhite: 4294635775,
    forestgreen: 579543807,
    fuchsia: 4278255615,
    gainsboro: 3705462015,
    ghostwhite: 4177068031,
    gold: 4292280575,
    goldenrod: 3668254975,
    gray: 2155905279,
    green: 8388863,
    greenyellow: 2919182335,
    grey: 2155905279,
    honeydew: 4043305215,
    hotpink: 4285117695,
    indianred: 3445382399,
    indigo: 1258324735,
    ivory: 4294963455,
    khaki: 4041641215,
    lavender: 3873897215,
    lavenderblush: 4293981695,
    lawngreen: 2096890111,
    lemonchiffon: 4294626815,
    lightblue: 2916673279,
    lightcoral: 4034953471,
    lightcyan: 3774873599,
    lightgoldenrodyellow: 4210742015,
    lightgray: 3553874943,
    lightgreen: 2431553791,
    lightgrey: 3553874943,
    lightpink: 4290167295,
    lightsalmon: 4288707327,
    lightseagreen: 548580095,
    lightskyblue: 2278488831,
    lightslategray: 2005441023,
    lightslategrey: 2005441023,
    lightsteelblue: 2965692159,
    lightyellow: 4294959359,
    lime: 16711935,
    limegreen: 852308735,
    linen: 4210091775,
    magenta: 4278255615,
    maroon: 2147483903,
    mediumaquamarine: 1724754687,
    mediumblue: 52735,
    mediumorchid: 3126187007,
    mediumpurple: 2473647103,
    mediumseagreen: 1018393087,
    mediumslateblue: 2070474495,
    mediumspringgreen: 16423679,
    mediumturquoise: 1221709055,
    mediumvioletred: 3340076543,
    midnightblue: 421097727,
    mintcream: 4127193855,
    mistyrose: 4293190143,
    moccasin: 4293178879,
    navajowhite: 4292783615,
    navy: 33023,
    oldlace: 4260751103,
    olive: 2155872511,
    olivedrab: 1804477439,
    orange: 4289003775,
    orangered: 4282712319,
    orchid: 3664828159,
    palegoldenrod: 4008225535,
    palegreen: 2566625535,
    paleturquoise: 2951671551,
    palevioletred: 3681588223,
    papayawhip: 4293907967,
    peachpuff: 4292524543,
    peru: 3448061951,
    pink: 4290825215,
    plum: 3718307327,
    powderblue: 2967529215,
    purple: 2147516671,
    rebeccapurple: 1714657791,
    red: 4278190335,
    rosybrown: 3163525119,
    royalblue: 1097458175,
    saddlebrown: 2336560127,
    salmon: 4202722047,
    sandybrown: 4104413439,
    seagreen: 780883967,
    seashell: 4294307583,
    sienna: 2689740287,
    silver: 3233857791,
    skyblue: 2278484991,
    slateblue: 1784335871,
    slategray: 1887473919,
    slategrey: 1887473919,
    snow: 4294638335,
    springgreen: 16744447,
    steelblue: 1182971135,
    tan: 3535047935,
    teal: 8421631,
    thistle: 3636451583,
    tomato: 4284696575,
    turquoise: 1088475391,
    violet: 4001558271,
    wheat: 4125012991,
    white: 4294967295,
    whitesmoke: 4126537215,
    yellow: 4294902015,
    yellowgreen: 2597139199
  };
  function normalizeColor(color) {
    const matchers = getMatchers();
    let match;
    if (matchers.hex6) {
      if (match = matchers.hex6.exec(color)) {
        return Number.parseInt(match[1] + "ff", 16) >>> 0;
      }
    }
    if (colorNames[color] !== void 0) {
      return colorNames[color];
    }
    if (matchers.rgb) {
      if (match = matchers.rgb.exec(color)) {
        return (parse255(match[1]) << 24 | parse255(match[2]) << 16 | parse255(match[3]) << 8 | 255) >>> 0;
      }
    }
    if (matchers.rgba) {
      if (match = matchers.rgba.exec(color)) {
        return (parse255(match[1]) << 24 | parse255(match[2]) << 16 | parse255(match[3]) << 8 | parse1(match[4])) >>> 0;
      }
    }
    if (matchers.hex3) {
      if (match = matchers.hex3.exec(color)) {
        return Number.parseInt(match[1] + match[1] + match[2] + match[2] + match[3] + match[3] + "ff", 16) >>> 0;
      }
    }
    if (matchers.hex8) {
      if (match = matchers.hex8.exec(color)) {
        return Number.parseInt(match[1], 16) >>> 0;
      }
    }
    if (matchers.hex4) {
      if (match = matchers.hex4.exec(color)) {
        return Number.parseInt(match[1] + match[1] + match[2] + match[2] + match[3] + match[3] + match[4] + match[4], 16) >>> 0;
      }
    }
    if (matchers.hsl) {
      if (match = matchers.hsl.exec(color)) {
        return (hslToRgb(parse360(match[1]), parsePercentage(match[2]), parsePercentage(match[3])) | 255) >>> 0;
      }
    }
    if (matchers.hsla) {
      if (match = matchers.hsla.exec(color)) {
        return (hslToRgb(parse360(match[1]), parsePercentage(match[2]), parsePercentage(match[3])) | parse1(match[4])) >>> 0;
      }
    }
    if (matchers.oklch) {
      if (match = matchers.oklch.exec(color)) {
        const L = parseModernComponent(match[1], 1);
        const C = parseModernComponent(match[2], 0.4);
        const H = parseHueAngle(match[3]);
        const alpha = parseModernAlpha(match[4]);
        const hRad = H * Math.PI / 180;
        const [r, g, b22] = oklabToSrgb(L, C * Math.cos(hRad), C * Math.sin(hRad));
        return rgbFloatToInt(r, g, b22, alpha);
      }
    }
    if (matchers.oklab) {
      if (match = matchers.oklab.exec(color)) {
        const L = parseModernComponent(match[1], 1);
        const a22 = parseModernComponent(match[2], 0.4);
        const b22 = parseModernComponent(match[3], 0.4);
        const alpha = parseModernAlpha(match[4]);
        const [r, g, bl] = oklabToSrgb(L, a22, b22);
        return rgbFloatToInt(r, g, bl, alpha);
      }
    }
    if (matchers.lab) {
      if (match = matchers.lab.exec(color)) {
        const L = parseModernComponent(match[1], 100);
        const a22 = parseModernComponent(match[2], 125);
        const b22 = parseModernComponent(match[3], 125);
        const alpha = parseModernAlpha(match[4]);
        const [r, g, bl] = labToSrgb(L, a22, b22);
        return rgbFloatToInt(r, g, bl, alpha);
      }
    }
    if (matchers.lch) {
      if (match = matchers.lch.exec(color)) {
        const L = parseModernComponent(match[1], 100);
        const C = parseModernComponent(match[2], 150);
        const H = parseHueAngle(match[3]);
        const alpha = parseModernAlpha(match[4]);
        const hRad = H * Math.PI / 180;
        const [r, g, bl] = labToSrgb(L, C * Math.cos(hRad), C * Math.sin(hRad));
        return rgbFloatToInt(r, g, bl, alpha);
      }
    }
    if (matchers.hwb) {
      if (match = matchers.hwb.exec(color)) {
        const H = parseHueAngle(match[1]);
        const W = parseModernComponent(match[2], 1);
        const B = parseModernComponent(match[3], 1);
        const alpha = parseModernAlpha(match[4]);
        const [r, g, bl] = hwbToSrgb(H / 360, W, B);
        return rgbFloatToInt(r, g, bl, alpha);
      }
    }
    throw new Error(`invalid color string ${color} provided`);
  }
  var opacity = (c22) => {
    return (c22 >> 24 & 255) / 255;
  };
  var red = (c22) => {
    return c22 >> 16 & 255;
  };
  var green = (c22) => {
    return c22 >> 8 & 255;
  };
  var blue = (c22) => {
    return c22 & 255;
  };
  var rgbaColor = (r, g, b22, alpha) => {
    return `rgba(${r}, ${g}, ${b22}, ${alpha})`;
  };
  function processColor(color) {
    const normalizedColor = normalizeColor(color);
    return (normalizedColor << 24 | normalizedColor >>> 8) >>> 0;
  }
  var interpolateColorsRGB = (value, inputRange, colors, options) => {
    const [r, g, b22, a22] = [red, green, blue, opacity].map((f) => {
      const unrounded = interpolate(value, inputRange, colors.map((c22) => f(c22)), {
        easing: options?.easing,
        extrapolateLeft: "clamp",
        extrapolateRight: "clamp",
        posterize: options?.posterize
      });
      if (f === opacity) {
        return Number(unrounded.toFixed(3));
      }
      return Math.round(unrounded);
    });
    return rgbaColor(r, g, b22, a22);
  };
  var interpolateColors = (input, inputRange, outputRange, options) => {
    if (typeof input === "undefined") {
      throw new TypeError("input can not be undefined");
    }
    if (typeof inputRange === "undefined") {
      throw new TypeError("inputRange can not be undefined");
    }
    if (typeof outputRange === "undefined") {
      throw new TypeError("outputRange can not be undefined");
    }
    if (inputRange.length !== outputRange.length) {
      throw new TypeError("inputRange (" + inputRange.length + " values provided) and outputRange (" + outputRange.length + " values provided) must have the same length");
    }
    const processedOutputRange = outputRange.map((c22) => processColor(c22));
    return interpolateColorsRGB(input, inputRange, processedOutputRange, options);
  };
  var easingToFn = ({
    easing,
    forceSpringAllowTail
  }) => {
    switch (easing.type) {
      case "linear":
        return Easing.linear;
      case "step1":
        return Easing.step1;
      case "spring":
        return Easing.spring({
          allowTail: forceSpringAllowTail ?? easing.allowTail ?? void 0,
          damping: easing.damping,
          durationRestThreshold: easing.durationRestThreshold ?? void 0,
          mass: easing.mass,
          overshootClamping: easing.overshootClamping,
          stiffness: easing.stiffness
        });
      case "bezier":
        return bezier(easing.x1, easing.y1, easing.x2, easing.y2);
      default:
        throw new TypeError(`Unsupported easing: ${JSON.stringify(easing)}`);
    }
  };
  var interpolateKeyframedStatus = ({
    frame,
    forceSpringAllowTail,
    status
  }) => {
    const { keyframes, easing, clamping, interpolationFunction } = status;
    if (keyframes.length === 0) {
      return null;
    }
    const sortedKeyframes = [...keyframes].sort((a22, b22) => a22.frame - b22.frame);
    const inputRange = sortedKeyframes.map((k) => k.frame);
    const outputs = sortedKeyframes.map((k) => k.value);
    if (interpolationFunction === "interpolateColors") {
      if (!outputs.every((v) => typeof v === "string")) {
        return null;
      }
      if (keyframes.length === 1) {
        return outputs[0];
      }
      try {
        return interpolateColors(frame, inputRange, outputs, {
          easing: easing.map((e) => easingToFn({ easing: e, forceSpringAllowTail })),
          posterize: status.posterize
        });
      } catch {
        return null;
      }
    }
    if (interpolationFunction !== "interpolate") {
      return null;
    }
    try {
      return interpolate(frame, inputRange, outputs, {
        easing: easing.map((e) => easingToFn({ easing: e, forceSpringAllowTail })),
        extrapolateLeft: clamping.left,
        extrapolateRight: clamping.right,
        output: status.output,
        posterize: status.posterize
      });
    } catch {
      return null;
    }
  };
  var resolveDragOverrideValue = ({
    dragOverrideValue,
    frame
  }) => {
    if (dragOverrideValue === void 0) {
      return { type: "none" };
    }
    if (dragOverrideValue.type === "static") {
      return { type: "resolved", value: dragOverrideValue.value };
    }
    if (frame === null) {
      return { type: "none" };
    }
    const interpolated = interpolateKeyframedStatus({
      forceSpringAllowTail: null,
      frame,
      status: dragOverrideValue.status
    });
    if (interpolated === null) {
      return { type: "none" };
    }
    return { type: "resolved", value: interpolated };
  };
  var getEffectiveVisualModeValue = ({
    propStatus,
    dragOverrideValue,
    defaultValue,
    frame = null,
    shouldResortToDefaultValueIfUndefined = false
  }) => {
    const dragOverride = resolveDragOverrideValue({
      dragOverrideValue,
      frame
    });
    if (dragOverride.type === "resolved" && dragOverride.value !== void 0) {
      return dragOverride.value;
    }
    if (propStatus.status === "keyframed") {
      if (frame !== null) {
        return interpolateKeyframedStatus({
          forceSpringAllowTail: null,
          frame,
          status: propStatus
        });
      }
      return shouldResortToDefaultValueIfUndefined ? defaultValue : void 0;
    }
    if (propStatus.codeValue === void 0 && shouldResortToDefaultValueIfUndefined) {
      return defaultValue;
    }
    return propStatus.codeValue;
  };
  var OverrideIdsToNodePathsGettersContext = (0, import_react34.createContext)({
    overrideIdToNodePathMappings: {}
  });
  var OverrideIdsToNodePathsSettersContext = (0, import_react34.createContext)({
    setOverrideIdToNodePath: () => {
      throw new Error("OverrideIdsToNodePathsSettersContext not initialized");
    }
  });
  var mergeOverrides = ({
    descriptor,
    propStatusOverrides,
    dragOverrides,
    frame
  }) => {
    if (!propStatusOverrides && !dragOverrides) {
      return { params: descriptor.params, effectKey: descriptor.effectKey };
    }
    const merged = {
      ...descriptor.params
    };
    if (propStatusOverrides) {
      for (const [key, value] of Object.entries(propStatusOverrides)) {
        if (value !== void 0) {
          merged[key] = value;
        }
      }
    }
    if (dragOverrides) {
      for (const [key, value] of Object.entries(dragOverrides)) {
        const resolved = resolveDragOverrideValue({
          dragOverrideValue: value,
          frame
        });
        if (resolved.type === "resolved") {
          merged[key] = resolved.value;
        }
      }
    }
    return {
      params: merged,
      effectKey: descriptor.definition.calculateKey(merged)
    };
  };
  var resolvePropStatusOverrides = (propStatus, frame) => {
    if (!propStatus) {
      return null;
    }
    const out = {};
    let hasAny = false;
    for (const [key, status] of Object.entries(propStatus)) {
      if (status.status === "static") {
        out[key] = status.codeValue;
        hasAny = true;
        continue;
      }
      if (status.status === "keyframed") {
        const value = interpolateKeyframedStatus({
          forceSpringAllowTail: null,
          frame,
          status
        });
        if (value !== null) {
          out[key] = value;
          hasAny = true;
        }
      }
    }
    return hasAny ? out : null;
  };
  var useMemoizedEffectDefinitions = (effects) => {
    const previousRef = (0, import_react33.useRef)(null);
    const definitions = effects.map((descriptor) => descriptor.definition);
    const previous = previousRef.current;
    const isSame = previous !== null && previous.length === definitions.length && previous.every((def, i) => def === definitions[i]);
    if (isSame) {
      return previous;
    }
    previousRef.current = definitions;
    return definitions;
  };
  var getEffectPropStatusesCtx = ({
    propStatuses,
    nodePath,
    effectIndex
  }) => {
    const status = propStatuses[makeSequencePropsSubscriptionKey(nodePath)];
    if (!status) {
      return { type: "cannot-update-sequence", reason: "not-found" };
    }
    if (!status.canUpdate) {
      return { type: "cannot-update-sequence", reason: status.reason };
    }
    const effect = status.effects.find((e) => e.effectIndex === effectIndex);
    if (!effect) {
      return { type: "cannot-update-effect", reason: "not-found" };
    }
    if (!effect.canUpdate) {
      return { type: "cannot-update-effect", reason: effect.reason };
    }
    return { type: "can-update-effect", props: effect.props };
  };
  var getPropStatusesCtx = (propStatuses, nodePath) => {
    const status = propStatuses[makeSequencePropsSubscriptionKey(nodePath)];
    if (!status) {
      return;
    }
    if (!status.canUpdate) {
      return;
    }
    return status.props;
  };
  var useMemoizedEffects = ({
    effects,
    overrideId
  }) => {
    const previousRef = (0, import_react33.useRef)(null);
    const { propStatuses } = (0, import_react33.useContext)(VisualModePropStatusesContext);
    const { getEffectDragOverrides } = (0, import_react33.useContext)(VisualModeDragOverridesContext);
    const frame = useCurrentFrame();
    const { overrideIdToNodePathMappings } = (0, import_react33.useContext)(OverrideIdsToNodePathsGettersContext);
    const previous = previousRef.current;
    const nodePath = overrideId ? overrideIdToNodePathMappings[overrideId] ?? null : null;
    const resolved = effects.map((descriptor, index) => {
      if (nodePath === null) {
        return {
          descriptor,
          params: descriptor.params,
          effectKey: descriptor.effectKey
        };
      }
      const effectStatus = getEffectPropStatusesCtx({
        propStatuses,
        nodePath,
        effectIndex: index
      });
      const propStatusOverrides = effectStatus.type === "can-update-effect" ? resolvePropStatusOverrides(effectStatus.props, frame) : null;
      const dragOverridesMap = getEffectDragOverrides(nodePath, index);
      const dragOverrides = Object.keys(dragOverridesMap).length === 0 ? null : dragOverridesMap;
      const { params, effectKey } = mergeOverrides({
        descriptor,
        propStatusOverrides,
        dragOverrides,
        frame
      });
      return { descriptor, params, effectKey };
    });
    const isSame = previous !== null && previous.length === resolved.length && previous.every((p, i) => p.definition === resolved[i].descriptor.definition && p.effectKey === resolved[i].effectKey);
    if (isSame) {
      return previous;
    }
    const next = resolved.map(({ descriptor, params, effectKey }) => ({
      definition: descriptor.definition,
      effectKey,
      params,
      memoized: true
    }));
    previousRef.current = next;
    return next;
  };
  var flattenActiveSchema = (schema, resolve) => {
    const out = {};
    for (const key of Object.keys(schema)) {
      const field = schema[key];
      if (field.type === "hidden") {
        continue;
      } else if (field.type === "enum") {
        out[key] = field;
        const current = resolve(key) ?? field.default;
        const variant = field.variants[current];
        if (variant) {
          Object.assign(out, flattenActiveSchema(variant, resolve));
        }
      } else {
        out[key] = field;
      }
    }
    return out;
  };
  var getFlatSchemaWithAllKeys = (schema) => {
    const out = {};
    const addKey = (key, field) => {
      if (key in out) {
        return;
      }
      out[key] = field;
    };
    for (const key of Object.keys(schema)) {
      const field = schema[key];
      addKey(key, field);
      if (field.type === "enum") {
        for (const variant of Object.values(field.variants)) {
          const flatVariant = getFlatSchemaWithAllKeys(variant);
          for (const variantKey of Object.keys(flatVariant)) {
            addKey(variantKey, flatVariant[variantKey]);
          }
        }
      }
    }
    return out;
  };
  var createRuntimeValueStore = (initialSnapshot) => {
    let snapshot = initialSnapshot;
    const listeners2 = /* @__PURE__ */ new Set();
    const store = {
      getSnapshot: () => snapshot,
      subscribe: (listener) => {
        listeners2.add(listener);
        return () => {
          listeners2.delete(listener);
        };
      }
    };
    return {
      store,
      setSnapshot: (newSnapshot) => {
        if (snapshot === newSnapshot) {
          return;
        }
        snapshot = newSnapshot;
        for (const listener of listeners2) {
          listener();
        }
      }
    };
  };
  var findPropsToDelete = ({
    schema,
    key,
    value
  }) => {
    const fieldSchema = schema[key];
    if (!fieldSchema) {
      throw new Error("Key " + JSON.stringify(key) + " not found in schema");
    }
    if (typeof value !== "string") {
      throw new Error("Value must be a string, but is " + JSON.stringify(value));
    }
    if (fieldSchema.type !== "enum") {
      throw new Error("Key " + JSON.stringify(key) + " is not an enum");
    }
    const currentVariant = fieldSchema.variants[value];
    if (!currentVariant) {
      throw new Error("Value for " + JSON.stringify(key) + " must be one of " + Object.keys(fieldSchema.variants).map((v) => JSON.stringify(v)).join(", ") + ", got " + JSON.stringify(value));
    }
    const otherVariants = Object.keys(fieldSchema.variants).filter((v) => v !== value);
    const otherKeys = /* @__PURE__ */ new Set();
    for (const variant of otherVariants) {
      const otherVariant = fieldSchema.variants[variant];
      const keys = Object.keys(otherVariant);
      for (const k of keys) {
        otherKeys.add(k);
      }
    }
    return [...otherKeys];
  };
  var DEFAULT_LINEAR_EASING = {
    type: "linear"
  };
  var getEasingIndexToDuplicate = ({
    insertedKeyframeIndex,
    easingLength,
    keyframeCount
  }) => {
    const isSplittingExistingSegment = insertedKeyframeIndex > 0 && insertedKeyframeIndex < keyframeCount - 1;
    if (!isSplittingExistingSegment || easingLength === 0) {
      return null;
    }
    return Math.min(insertedKeyframeIndex - 1, easingLength - 1);
  };
  var makeStaticDragOverride = (value) => {
    return { type: "static", value };
  };
  var makeKeyframedDragOverride = ({
    status,
    frame,
    value,
    defaultEasing: defaultEasing22 = DEFAULT_LINEAR_EASING
  }) => {
    const existingIndex = status.keyframes.findIndex((keyframe) => keyframe.frame === frame);
    const keyframes = existingIndex === -1 ? [...status.keyframes, { frame, value }].sort((first, second) => first.frame - second.frame) : status.keyframes.map((keyframe, index) => index === existingIndex ? { frame, value } : keyframe);
    const easing = [...status.easing];
    if (existingIndex === -1) {
      const insertedKeyframeIndex = keyframes.findIndex((keyframe) => keyframe.frame === frame);
      const easingIndexToDuplicate = getEasingIndexToDuplicate({
        insertedKeyframeIndex,
        easingLength: easing.length,
        keyframeCount: keyframes.length
      });
      const easingToDuplicate = easingIndexToDuplicate === null ? defaultEasing22 : easing[easingIndexToDuplicate];
      easing.splice(insertedKeyframeIndex, 0, easingToDuplicate);
    }
    while (easing.length < keyframes.length - 1) {
      easing.push(defaultEasing22);
    }
    if (easing.length > keyframes.length - 1) {
      easing.length = keyframes.length - 1;
    }
    return {
      type: "keyframed",
      status: {
        ...status,
        keyframes,
        easing
      }
    };
  };
  var getStaticDragOverrideValue = (dragOverrideValue) => {
    if (dragOverrideValue?.type !== "static") {
      return;
    }
    return dragOverrideValue.value;
  };
  var isKeyframedStatus = (status) => {
    return status !== null && status.status === "keyframed";
  };
  var findFieldInSchema = (schema, key) => {
    if (key in schema) {
      return schema[key];
    }
    for (const field of Object.values(schema)) {
      if (field.type !== "enum") {
        continue;
      }
      for (const variant of Object.values(field.variants)) {
        const found = findFieldInSchema(variant, key);
        if (found) {
          return found;
        }
      }
    }
    return;
  };
  var computeEffectiveSchemaValuesDotNotation = ({
    schema,
    currentValue,
    overrideValues,
    propStatus,
    frame
  }) => {
    const merged = {};
    const propsToDelete = /* @__PURE__ */ new Set();
    for (const key of Object.keys(currentValue)) {
      const status = propStatus?.[key] ?? null;
      const field = findFieldInSchema(schema, key);
      if (field?.type === "hidden") {
        continue;
      }
      let value;
      if (status === null) {
        value = currentValue[key];
      } else if (isKeyframedStatus(status)) {
        if (field?.type === "array" || field?.keyframable === false) {
          value = currentValue[key];
        } else {
          const dragOverride = resolveDragOverrideValue({
            dragOverrideValue: overrideValues[key],
            frame
          });
          if (dragOverride.type === "resolved") {
            value = dragOverride.value;
          } else if (frame !== null) {
            const interpolated = interpolateKeyframedStatus({
              forceSpringAllowTail: null,
              frame,
              status
            });
            value = interpolated ?? currentValue[key];
          } else {
            value = currentValue[key];
          }
        }
      } else if (status.status === "computed") {
        value = currentValue[key];
      } else {
        value = getEffectiveVisualModeValue({
          propStatus: status,
          dragOverrideValue: overrideValues[key],
          defaultValue: field?.default,
          frame,
          shouldResortToDefaultValueIfUndefined: false
        });
      }
      if (field?.type === "asset" && typeof value === "string" && value.startsWith(FILE_TOKEN)) {
        value = `${window.remotion_staticBase}/${value.slice(FILE_TOKEN.length)}`;
      }
      if (value === void 0) {
        propsToDelete.add(key);
      }
      merged[key] = value;
    }
    for (const key of Object.keys(overrideValues)) {
      if (schema[key]?.type === "enum") {
        const propsToDeleteForKey = findPropsToDelete({
          schema,
          key,
          value: merged[key]
        });
        for (const propToDelete of propsToDeleteForKey) {
          propsToDelete.add(propToDelete);
        }
      }
    }
    return { merged, propsToDelete };
  };
  var getNestedValue = (obj, key) => {
    const parts = key.split(".");
    let current = obj;
    for (const part of parts) {
      if (current === null || current === void 0 || typeof current !== "object")
        return;
      current = current[part];
    }
    return current;
  };
  var getRuntimeValueForSchemaKey = ({
    flatSchema,
    key,
    props
  }) => {
    const value = getNestedValue(props, key);
    if (flatSchema[key]?.type === "text-content" && typeof value !== "string") {
      return;
    }
    return value;
  };
  var readValuesFromProps = (props, keys, flatSchema) => {
    const out = {};
    for (const key of keys) {
      out[key] = flatSchema ? getRuntimeValueForSchemaKey({ flatSchema, key, props }) : getNestedValue(props, key);
    }
    return out;
  };
  var selectActiveKeys = (schema, values) => {
    return Object.keys(flattenActiveSchema(schema, (key) => values[key]));
  };
  var mergeValues = ({
    flatSchema,
    props,
    valuesDotNotation,
    schemaKeys,
    propsToDelete
  }) => {
    const merged = { ...props };
    for (const key of schemaKeys) {
      const value = valuesDotNotation[key];
      if (flatSchema[key]?.type === "text-content" && value === void 0) {
        continue;
      }
      const parts = key.split(".");
      if (parts.length === 1) {
        merged[key] = value;
        continue;
      }
      let current = merged;
      for (let i = 0; i < parts.length - 1; i++) {
        const part = parts[i];
        if (typeof current[part] === "object" && current[part] !== null) {
          current[part] = { ...current[part] };
        } else {
          current[part] = {};
        }
        current = current[part];
      }
      current[parts[parts.length - 1]] = value;
    }
    const propsToDeleteWithoutTextContent = new Set([...propsToDelete].filter((key) => !(flatSchema[key]?.type === "text-content" && valuesDotNotation[key] === void 0)));
    deleteNestedKey(merged, propsToDeleteWithoutTextContent);
    return merged;
  };
  var stackToOverrideMap = {};
  var withInteractivitySchema = ({
    Component,
    componentName,
    componentIdentity,
    schema,
    supportsEffects
  }) => {
    const schemaWithSequenceName = extendSchemaWithSequenceName(schema);
    const flatSchema = getFlatSchemaWithAllKeys(schemaWithSequenceName);
    const flatKeys = Object.keys(flatSchema);
    const Wrapped = (0, import_react32.forwardRef)((props, ref) => {
      const {
        _remotionInternalStack: internalStack,
        ...propsWithoutInternalStack
      } = props;
      const cleanProps = propsWithoutInternalStack;
      const env = useRemotionEnvironment();
      const canUseRemotionHooks = (0, import_react32.useContext)(CanUseRemotionHooks);
      if (!env.isStudio || env.isRendering || !canUseRemotionHooks) {
        return import_react32.default.createElement(Component, {
          ...cleanProps,
          controls: null,
          ref
        });
      }
      const { propStatuses } = (0, import_react32.useContext)(VisualModePropStatusesContext);
      const { getDragOverrides } = (0, import_react32.useContext)(VisualModeDragOverridesContext);
      const nodePathMapping = (0, import_react32.useContext)(OverrideIdsToNodePathsGettersContext);
      const frame = useCurrentFrame();
      if (cleanProps.controls) {
        const passedControls = cleanProps.controls;
        if (getStackForControls(passedControls) === null) {
          setStackForControls(passedControls, internalStack);
        }
        return import_react32.default.createElement(Component, {
          ...cleanProps,
          ref
        });
      }
      const [overrideId] = (0, import_react32.useState)(() => {
        if (!internalStack) {
          return String(Math.random());
        }
        const existingOverrideId = stackToOverrideMap[internalStack];
        if (existingOverrideId) {
          return existingOverrideId;
        }
        const newOverrideId = String(Math.random());
        stackToOverrideMap[internalStack] = newOverrideId;
        return newOverrideId;
      });
      const nodePath = env.isReadOnlyStudio ? null : nodePathMapping.overrideIdToNodePathMappings[overrideId] ?? null;
      const runtimeValues = flatKeys.map((key) => getRuntimeValueForSchemaKey({
        flatSchema,
        key,
        props: cleanProps
      }));
      const currentRuntimeValueDotNotation = (0, import_react32.useMemo)(() => readValuesFromProps(cleanProps, flatKeys, flatSchema), runtimeValues);
      const [runtimeValueStore] = (0, import_react32.useState)(() => createRuntimeValueStore(currentRuntimeValueDotNotation));
      (0, import_react32.useLayoutEffect)(() => {
        runtimeValueStore.setSnapshot(currentRuntimeValueDotNotation);
      }, [currentRuntimeValueDotNotation, runtimeValueStore]);
      const controls = (0, import_react32.useMemo)(() => {
        return {
          schema: schemaWithSequenceName,
          currentRuntimeValueDotNotation,
          runtimeValues: runtimeValueStore.store,
          overrideId,
          supportsEffects,
          componentIdentity,
          componentName
        };
      }, [currentRuntimeValueDotNotation, overrideId, runtimeValueStore.store]);
      setStackForControls(controls, internalStack);
      const { merged: valuesDotNotation, propsToDelete } = (0, import_react32.useMemo)(() => {
        return computeEffectiveSchemaValuesDotNotation({
          schema: schemaWithSequenceName,
          currentValue: currentRuntimeValueDotNotation,
          overrideValues: nodePath === null ? {} : getDragOverrides(nodePath),
          propStatus: nodePath === null ? void 0 : getPropStatusesCtx(propStatuses, nodePath),
          frame
        });
      }, [
        currentRuntimeValueDotNotation,
        getDragOverrides,
        nodePath,
        propStatuses,
        frame
      ]);
      const activeKeys = selectActiveKeys(schemaWithSequenceName, valuesDotNotation);
      const mergedProps = mergeValues({
        flatSchema,
        props: cleanProps,
        valuesDotNotation,
        schemaKeys: activeKeys,
        propsToDelete
      });
      return import_react32.default.createElement(Component, {
        ...mergedProps,
        controls,
        ref
      });
    });
    Wrapped.displayName = `withInteractivitySchema(${Component.displayName || Component.name || "Component"})`;
    return Wrapped;
  };
  var EMPTY_EFFECTS = [];
  var RegularSequenceRefForwardingFunction = ({
    from = 0,
    trimBefore = 0,
    freeze,
    durationInFrames = Infinity,
    children,
    name,
    height,
    width,
    showInTimeline = true,
    hidden = false,
    controls,
    _remotionInternalEffects,
    _remotionInternalLoopDisplay: loopDisplay,
    _remotionInternalStack: stack,
    _remotionInternalDocumentationLink: documentationLink,
    _remotionInternalSingleChildComponent: singleChildComponent,
    _remotionInternalPremountDisplay: premountDisplay,
    _remotionInternalPostmountDisplay: postmountDisplay,
    _remotionInternalIsMedia: isMedia,
    outlineRef: passedRefForOutline,
    cropLeft,
    cropRight,
    cropTop,
    cropBottom,
    ...other
  }, ref) => {
    const { layout = "absolute-fill" } = other;
    const [id] = (0, import_react20.useState)(() => String(Math.random()));
    const parentSequence = (0, import_react20.useContext)(SequenceContext);
    const cumulatedFrom = parentSequence ? parentSequence.cumulatedFrom + parentSequence.relativeFrom : 0;
    const nonce = useNonce();
    if (layout !== "absolute-fill" && layout !== "none") {
      throw new TypeError(`The layout prop of <Sequence /> expects either "absolute-fill" or "none", but you passed: ${layout}`);
    }
    const cropProps = { cropLeft, cropRight, cropTop, cropBottom };
    const hasCropProp = Object.values(cropProps).some((value) => value !== void 0);
    if (layout === "none" && hasCropProp) {
      throw new TypeError('The cropLeft, cropRight, cropTop and cropBottom props of <Sequence /> are only supported with layout="absolute-fill".');
    }
    validateSequenceCrop(cropProps);
    const {
      left: resolvedCropLeft,
      right: resolvedCropRight,
      top: resolvedCropTop,
      bottom: resolvedCropBottom
    } = resolveSequenceCrop(cropProps);
    if (layout === "none" && typeof other.style !== "undefined") {
      throw new TypeError('If layout="none", you may not pass a style. Passed: ' + JSON.stringify(other.style));
    }
    if (typeof durationInFrames !== "number") {
      throw new TypeError(`You passed to durationInFrames an argument of type ${typeof durationInFrames}, but it must be a number.`);
    }
    if (durationInFrames <= 0) {
      throw new TypeError(`durationInFrames must be positive, but got ${durationInFrames}`);
    }
    if (typeof from !== "number") {
      throw new TypeError(`You passed to the "from" props of your <Sequence> an argument of type ${typeof from}, but it must be a number.`);
    }
    if (!Number.isFinite(from)) {
      throw new TypeError(`The "from" prop of a sequence must be finite, but got ${from}.`);
    }
    if (typeof trimBefore !== "number") {
      throw new TypeError(`You passed to the "trimBefore" prop of your <Sequence> an argument of type ${typeof trimBefore}, but it must be a number.`);
    }
    if (trimBefore < 0) {
      throw new TypeError(`The "trimBefore" prop of <Sequence /> must be greater than or equal to 0, but got ${trimBefore}.`);
    }
    if (Number.isNaN(trimBefore)) {
      throw new TypeError('The "trimBefore" prop of <Sequence /> must be a real number, but it is NaN.');
    }
    if (!Number.isFinite(trimBefore)) {
      throw new TypeError(`The "trimBefore" prop of <Sequence /> must be finite, but it is ${trimBefore}.`);
    }
    if (typeof freeze !== "undefined" && freeze !== null) {
      if (typeof freeze !== "number") {
        throw new TypeError(`The "freeze" prop of <Sequence /> must be a number, but is of type ${typeof freeze}.`);
      }
      if (Number.isNaN(freeze)) {
        throw new TypeError(`The "freeze" prop of <Sequence /> must be a real number, but it is NaN.`);
      }
      if (!Number.isFinite(freeze)) {
        throw new TypeError(`The "freeze" prop of <Sequence /> must be finite, but it is ${freeze}.`);
      }
    }
    const absoluteFrame = useTimelinePosition();
    const videoConfig = useVideoConfig();
    const effectiveRelativeFrom = from - trimBefore;
    const absoluteFrom = (parentSequence?.absoluteFrom ?? 0) + effectiveRelativeFrom;
    const parentSequenceDuration = parentSequence ? Math.min(parentSequence.durationInFrames - effectiveRelativeFrom, durationInFrames) : durationInFrames;
    const actualDurationInFrames = Math.max(0, Math.min(videoConfig.durationInFrames - from, parentSequenceDuration));
    const { registerSequence, unregisterSequence } = (0, import_react20.useContext)(SequenceManager);
    const wrapperRefForOutline = (0, import_react20.useRef)(null);
    const refForOutline = other.layout === "none" ? passedRefForOutline ?? null : passedRefForOutline ?? wrapperRefForOutline;
    const premounting = (0, import_react20.useMemo)(() => {
      return parentSequence?.premounting || Boolean(other._remotionInternalIsPremounting);
    }, [other._remotionInternalIsPremounting, parentSequence?.premounting]);
    const postmounting = (0, import_react20.useMemo)(() => {
      return parentSequence?.postmounting || Boolean(other._remotionInternalIsPostmounting);
    }, [other._remotionInternalIsPostmounting, parentSequence?.postmounting]);
    const currentSequenceStart = cumulatedFrom + effectiveRelativeFrom;
    const parentSequenceStart = parentSequence ? parentSequence.cumulatedFrom + parentSequence.relativeFrom : 0;
    const parentFirstFrame = parentSequence ? parentSequenceStart - parentSequence.cumulatedNegativeFrom : 0;
    const firstFrame = Math.max(0, parentFirstFrame, currentSequenceStart);
    const cumulatedNegativeFrom = currentSequenceStart - firstFrame;
    const contextValue = (0, import_react20.useMemo)(() => {
      return {
        absoluteFrom,
        cumulatedFrom,
        relativeFrom: effectiveRelativeFrom,
        cumulatedNegativeFrom,
        durationInFrames: actualDurationInFrames,
        parentFrom: parentSequence?.relativeFrom ?? 0,
        id,
        height: height ?? parentSequence?.height ?? null,
        width: width ?? parentSequence?.width ?? null,
        premounting,
        postmounting,
        premountDisplay: premountDisplay ?? null,
        postmountDisplay: postmountDisplay ?? null
      };
    }, [
      cumulatedFrom,
      absoluteFrom,
      effectiveRelativeFrom,
      actualDurationInFrames,
      parentSequence,
      id,
      height,
      width,
      premounting,
      postmounting,
      premountDisplay,
      postmountDisplay,
      cumulatedNegativeFrom
    ]);
    const timelineClipName = (0, import_react20.useMemo)(() => {
      return name ?? "";
    }, [name]);
    const resolvedDocumentationLink = documentationLink ?? "https://www.remotion.dev/docs/sequence";
    const env = useRemotionEnvironment();
    const isInsideSeries = (0, import_react20.useContext)(IsInsideSeriesContext);
    const stackRef = (0, import_react20.useRef)(null);
    stackRef.current = controls ? getStackForControls(controls) ?? stack ?? null : stack ?? null;
    const registeredFrozenFrame = typeof freeze === "number" ? freeze : null;
    const registeredTrimBefore = trimBefore === 0 ? null : trimBefore;
    const parentCumulatedNegativeFrom = parentSequence?.cumulatedNegativeFrom ?? 0;
    const startMediaFrom = isMedia && isMedia.type !== "image" ? isMedia.data.startMediaFrom + parentCumulatedNegativeFrom - cumulatedNegativeFrom : null;
    const mediaFrameAtSequenceZero = isMedia && isMedia.type !== "image" ? isMedia.data.startMediaFrom + parentCumulatedNegativeFrom : null;
    const frozenMediaFrame = isMedia && isMedia.type !== "image" && mediaFrameAtSequenceZero !== null ? registeredFrozenFrame === null ? null : mediaFrameAtSequenceZero + (loopDisplay ? registeredFrozenFrame % loopDisplay.durationInFrames : registeredFrozenFrame) * isMedia.data.playbackRate : null;
    const controlsSchema = controls?.schema;
    const controlsRuntimeValues = controls?.runtimeValues;
    const controlsOverrideId = controls?.overrideId;
    const controlsSupportsEffects = controls?.supportsEffects;
    const controlsComponentIdentity = controls?.componentIdentity;
    const controlsComponentName = controls?.componentName;
    const registrationControls = (0, import_react20.useMemo)(() => {
      if (controlsSchema === void 0 || controlsRuntimeValues === void 0 || controlsOverrideId === void 0 || controlsSupportsEffects === void 0 || controlsComponentIdentity === void 0 || controlsComponentName === void 0) {
        return null;
      }
      return {
        schema: controlsSchema,
        runtimeValues: controlsRuntimeValues,
        overrideId: controlsOverrideId,
        supportsEffects: controlsSupportsEffects,
        componentIdentity: controlsComponentIdentity,
        componentName: controlsComponentName
      };
    }, [
      controlsComponentIdentity,
      controlsComponentName,
      controlsOverrideId,
      controlsRuntimeValues,
      controlsSchema,
      controlsSupportsEffects
    ]);
    (0, import_react20.useEffect)(() => {
      if (!env.isStudio) {
        return;
      }
      if (isMedia) {
        if (isMedia.type === "image") {
          registerSequence({
            type: "image",
            controls: registrationControls,
            effects: _remotionInternalEffects ?? EMPTY_EFFECTS,
            displayName: timelineClipName,
            documentationLink: resolvedDocumentationLink,
            duration: actualDurationInFrames,
            from,
            trimBefore: registeredTrimBefore,
            id,
            loopDisplay,
            nonce: nonce.get(),
            parent: parentSequence?.id ?? null,
            postmountDisplay: postmountDisplay ?? null,
            premountDisplay: premountDisplay ?? null,
            showInTimeline,
            src: isMedia.src,
            getStack: () => stackRef.current,
            refForOutline: refForOutline ?? null,
            isInsideSeries,
            frozenFrame: registeredFrozenFrame,
            singleChildComponent: singleChildComponent ?? null
          });
        } else {
          registerSequence({
            type: isMedia.type,
            controls: registrationControls,
            effects: _remotionInternalEffects ?? EMPTY_EFFECTS,
            displayName: timelineClipName,
            documentationLink: resolvedDocumentationLink,
            doesVolumeChange: isMedia.data.doesVolumeChange,
            duration: actualDurationInFrames,
            from,
            trimBefore: registeredTrimBefore,
            id,
            loopDisplay,
            nonce: nonce.get(),
            parent: parentSequence?.id ?? null,
            playbackRate: isMedia.data.playbackRate,
            postmountDisplay: postmountDisplay ?? null,
            premountDisplay: premountDisplay ?? null,
            showInTimeline,
            src: isMedia.data.src,
            getStack: () => stackRef.current,
            startMediaFrom: startMediaFrom ?? isMedia.data.startMediaFrom,
            mediaFrameAtSequenceZero,
            volume: isMedia.data.volumes,
            refForOutline: refForOutline ?? null,
            isInsideSeries,
            frozenFrame: registeredFrozenFrame,
            frozenMediaFrame,
            singleChildComponent: singleChildComponent ?? null
          });
        }
        return () => {
          unregisterSequence(id);
        };
      }
      registerSequence({
        from,
        trimBefore: registeredTrimBefore,
        duration: actualDurationInFrames,
        id,
        displayName: timelineClipName,
        documentationLink: resolvedDocumentationLink,
        parent: parentSequence?.id ?? null,
        type: "sequence",
        showInTimeline,
        nonce: nonce.get(),
        loopDisplay,
        getStack: () => stackRef.current,
        premountDisplay: premountDisplay ?? null,
        postmountDisplay: postmountDisplay ?? null,
        controls: registrationControls,
        effects: _remotionInternalEffects ?? EMPTY_EFFECTS,
        refForOutline: refForOutline ?? null,
        isInsideSeries,
        frozenFrame: registeredFrozenFrame,
        singleChildComponent: singleChildComponent ?? null
      });
      return () => {
        unregisterSequence(id);
      };
    }, [
      durationInFrames,
      id,
      name,
      registerSequence,
      timelineClipName,
      unregisterSequence,
      parentSequence?.id,
      actualDurationInFrames,
      from,
      trimBefore,
      registeredTrimBefore,
      showInTimeline,
      nonce,
      loopDisplay,
      premountDisplay,
      postmountDisplay,
      env.isStudio,
      registrationControls,
      _remotionInternalEffects,
      isMedia,
      resolvedDocumentationLink,
      refForOutline,
      isInsideSeries,
      registeredFrozenFrame,
      startMediaFrom,
      mediaFrameAtSequenceZero,
      frozenMediaFrame,
      singleChildComponent
    ]);
    const endThreshold = Math.ceil(cumulatedFrom + from + durationInFrames - 1);
    const content = absoluteFrame < cumulatedFrom + from ? null : absoluteFrame > endThreshold ? null : children;
    const frozenContent = content === null || typeof freeze === "undefined" || freeze === null ? content : /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Freeze, {
      frame: freeze,
      children: content
    });
    const styleIfThere = other.layout === "none" ? void 0 : other.style;
    const cropClipPath = getSequenceCropClipPath({
      left: resolvedCropLeft,
      right: resolvedCropRight,
      top: resolvedCropTop,
      bottom: resolvedCropBottom,
      style: styleIfThere
    });
    const sequenceRef = (0, import_react20.useCallback)((node) => {
      wrapperRefForOutline.current = node;
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    }, [ref]);
    const defaultStyle = (0, import_react20.useMemo)(() => {
      return {
        flexDirection: void 0,
        ...width ? { width } : {},
        ...height ? { height } : {},
        ...styleIfThere ?? {},
        ...cropClipPath ? {
          clipPath: cropClipPath
        } : {}
      };
    }, [cropClipPath, height, styleIfThere, width]);
    if (ref !== null && layout === "none") {
      throw new TypeError('It is not supported to pass both a `ref` and `layout="none"` to <Sequence />.');
    }
    if (hidden) {
      return null;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(SequenceContext.Provider, {
      value: contextValue,
      children: frozenContent === null ? null : other.layout === "none" ? frozenContent : /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(AbsoluteFillElement, {
        ref: sequenceRef,
        style: defaultStyle,
        className: other.className,
        children: frozenContent
      })
    });
  };
  var RegularSequence = (0, import_react20.forwardRef)(RegularSequenceRefForwardingFunction);
  var PremountedPostmountedSequenceRefForwardingFunction = (props, ref) => {
    if (props.layout === "none") {
      throw new Error('`<Sequence>` with `premountFor` and `postmountFor` props does not support layout="none"');
    }
    const {
      style: passedStyle,
      from = 0,
      durationInFrames = Infinity,
      premountFor = 0,
      postmountFor = 0,
      styleWhilePremounted,
      styleWhilePostmounted,
      ...otherProps
    } = props;
    const {
      freezeFrame,
      isPremountingOrPostmounting,
      postmountingActive,
      premountingActive,
      premountingStyle
    } = usePremounting({
      from,
      durationInFrames,
      premountFor,
      postmountFor,
      style: passedStyle ?? null,
      styleWhilePremounted: styleWhilePremounted ?? null,
      styleWhilePostmounted: styleWhilePostmounted ?? null,
      hideWhilePremounted: "opacity"
    });
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Freeze, {
      frame: freezeFrame,
      active: isPremountingOrPostmounting,
      children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(SequenceInner, {
        ref,
        from,
        durationInFrames,
        style: premountingStyle ?? void 0,
        _remotionInternalPremountDisplay: premountFor,
        _remotionInternalPostmountDisplay: postmountFor,
        _remotionInternalIsPremounting: premountingActive,
        _remotionInternalIsPostmounting: postmountingActive,
        ...otherProps
      })
    });
  };
  var PremountedPostmountedSequence = (0, import_react20.forwardRef)(PremountedPostmountedSequenceRefForwardingFunction);
  var SequenceRefForwardingFunction = (props, ref) => {
    const env = useRemotionEnvironment();
    const { fps } = useVideoConfig();
    if (props.layout !== "none" && !env.isRendering) {
      const effectivePremountFor = ENABLE_V5_BREAKING_CHANGES ? props.premountFor ?? fps : props.premountFor;
      if (effectivePremountFor || props.postmountFor) {
        return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(PremountedPostmountedSequence, {
          ref,
          ...props,
          premountFor: effectivePremountFor
        });
      }
    }
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(RegularSequence, {
      ...props,
      ref
    });
  };
  var SequenceInner = (0, import_react20.forwardRef)(SequenceRefForwardingFunction);
  var SequenceWithoutSchema = SequenceInner;
  var Sequence = withInteractivitySchema({
    Component: SequenceInner,
    componentName: "<Sequence>",
    componentIdentity: "dev.remotion.remotion.Sequence",
    schema: sequenceSchema,
    supportsEffects: false
  });
  var SequenceWithoutFrom = withInteractivitySchema({
    Component: SequenceInner,
    componentName: "<Sequence>",
    componentIdentity: null,
    schema: sequenceSchemaWithoutFrom,
    supportsEffects: false
  });
  var absoluteFillSchema = {
    ...baseSchema,
    ...transformSchema,
    ...backgroundSchema,
    ...borderSchema,
    ...borderRadiusSchema,
    ...textSchema,
    ...textContentSchema
  };
  var setRef = (ref, value) => {
    if (typeof ref === "function") {
      ref(value);
    } else if (ref) {
      ref.current = value;
    }
  };
  var AbsoluteFillInner = ({
    ref,
    from,
    trimBefore,
    freeze,
    durationInFrames,
    hidden,
    name,
    showInTimeline,
    stack,
    controls,
    children,
    ...divProps
  }) => {
    const videoConfig = useUnsafeVideoConfig();
    const refForOutline = (0, import_react35.useRef)(null);
    const callbackRef = (0, import_react35.useCallback)((element) => {
      refForOutline.current = element;
      setRef(ref, element);
    }, [ref]);
    if (videoConfig === null) {
      return hidden ? null : /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(AbsoluteFillElement, {
        ref: callbackRef,
        ...divProps,
        children
      });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Sequence, {
      layout: "none",
      from: from ?? 0,
      trimBefore,
      freeze,
      durationInFrames: durationInFrames ?? Infinity,
      hidden,
      name: name ?? "<AbsoluteFill>",
      showInTimeline: showInTimeline ?? true,
      controls,
      _remotionInternalStack: stack,
      _remotionInternalDocumentationLink: "https://www.remotion.dev/docs/absolute-fill",
      outlineRef: refForOutline,
      children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(AbsoluteFillElement, {
        ref: callbackRef,
        ...divProps,
        children
      })
    });
  };
  var AbsoluteFill = withInteractivitySchema({
    Component: AbsoluteFillInner,
    componentName: "<AbsoluteFill>",
    componentIdentity: "dev.remotion.remotion.AbsoluteFill",
    schema: absoluteFillSchema,
    supportsEffects: false
  });
  addSequenceStackTraces(AbsoluteFill);
  var useCropStyle = ({
    cropLeft,
    cropRight,
    cropTop,
    cropBottom,
    style: style2,
    componentName
  }) => {
    validateSequenceCrop({ cropLeft, cropRight, cropTop, cropBottom }, componentName);
    return (0, import_react37.useMemo)(() => {
      const cropClipPath = getSequenceCropClipPath({
        ...resolveSequenceCrop({ cropLeft, cropRight, cropTop, cropBottom }),
        style: style2
      });
      if (cropClipPath === null) {
        return style2;
      }
      return { ...style2, clipPath: cropClipPath };
    }, [cropBottom, cropLeft, cropRight, cropTop, style2]);
  };
  var calculateImageFit = (fit, imageSize, canvasSize) => {
    switch (fit) {
      case "fill": {
        return [
          0,
          0,
          imageSize.width,
          imageSize.height,
          0,
          0,
          canvasSize.width,
          canvasSize.height
        ];
      }
      case "contain": {
        const ratio = Math.min(canvasSize.width / imageSize.width, canvasSize.height / imageSize.height);
        const centerX = (canvasSize.width - imageSize.width * ratio) / 2;
        const centerY = (canvasSize.height - imageSize.height * ratio) / 2;
        return [
          0,
          0,
          imageSize.width,
          imageSize.height,
          centerX,
          centerY,
          imageSize.width * ratio,
          imageSize.height * ratio
        ];
      }
      case "cover": {
        const ratio = Math.max(canvasSize.width / imageSize.width, canvasSize.height / imageSize.height);
        const centerX = (canvasSize.width - imageSize.width * ratio) / 2;
        const centerY = (canvasSize.height - imageSize.height * ratio) / 2;
        return [
          0,
          0,
          imageSize.width,
          imageSize.height,
          centerX,
          centerY,
          imageSize.width * ratio,
          imageSize.height * ratio
        ];
      }
      default:
        throw new Error("Unknown fit: " + fit);
    }
  };
  var WEBGL_CONTEXT_DOCS_URL = "https://remotion.dev/docs/troubleshooting/webgl2-context";
  var webGlContextErrorMessage = (versionLabel, effectName) => `Failed to acquire ${versionLabel} context for ${effectName}. Pass --gl=angle when using the CLI, set chromiumOptions: { gl: "angle" } when using SSR APIs, or set "OpenGL render backend" to "angle" in the Advanced section when rendering in the Studio. See ${WEBGL_CONTEXT_DOCS_URL}`;
  var createWebGLContextError = (effectName) => new Error(webGlContextErrorMessage("WebGL", effectName));
  var createWebGL2ContextError = (effectName) => new Error(webGlContextErrorMessage("WebGL2", effectName));
  var CanvasPool = class {
    width;
    height;
    pairs = /* @__PURE__ */ new Map();
    lostContexts = /* @__PURE__ */ new Set();
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
    getPair(backend) {
      const existing = this.pairs.get(backend);
      if (existing) {
        return existing;
      }
      const pair = [
        this.allocateCanvas(backend),
        this.allocateCanvas(backend)
      ];
      this.pairs.set(backend, pair);
      return pair;
    }
    assertContextNotLost(canvas) {
      if (this.lostContexts.has(canvas)) {
        throw new Error("WebGL context was lost during canvas effect rendering. This typically happens in headless or memory-constrained environments (e.g. Remotion Lambda). Try reducing concurrency or increasing the Lambda function memory.");
      }
    }
    allocateCanvas(backend) {
      const canvas = document.createElement("canvas");
      canvas.width = this.width;
      canvas.height = this.height;
      switch (backend) {
        case "2d": {
          const ctx = canvas.getContext("2d", {
            colorSpace: "srgb"
          });
          if (!ctx) {
            throw new Error("Failed to acquire 2D context for canvas effect");
          }
          return canvas;
        }
        case "webgl2": {
          const ctx = canvas.getContext("webgl2", {
            premultipliedAlpha: true,
            alpha: true,
            preserveDrawingBuffer: true
          });
          if (!ctx) {
            throw createWebGL2ContextError("canvas effect");
          }
          canvas.addEventListener("webglcontextlost", (e) => {
            e.preventDefault();
            this.lostContexts.add(canvas);
          });
          canvas.addEventListener("webglcontextrestored", () => {
            this.lostContexts.delete(canvas);
          });
          ctx.pixelStorei(ctx.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
          return canvas;
        }
        case "webgpu": {
          if (typeof navigator === "undefined" || !("gpu" in navigator)) {
            throw new Error("WebGPU is not available in this environment for canvas effect");
          }
          return canvas;
        }
        default: {
          const exhaustive = backend;
          throw new Error(`Unknown effect backend: ${exhaustive}`);
        }
      }
    }
  };
  var groupByBackend = (effects) => {
    const runs = [];
    let current = [];
    let currentBackend = null;
    for (const eff of effects) {
      const { backend } = eff.definition;
      if (currentBackend === null || backend === currentBackend) {
        current.push(eff);
        currentBackend = backend;
      } else {
        runs.push({ backend: currentBackend, effects: current });
        current = [eff];
        currentBackend = backend;
      }
    }
    if (currentBackend !== null && current.length > 0) {
      runs.push({ backend: currentBackend, effects: current });
    }
    return runs;
  };
  var devicePromise = null;
  var getGpuDevice = () => {
    if (devicePromise) {
      return devicePromise;
    }
    devicePromise = (async () => {
      if (typeof navigator === "undefined" || !("gpu" in navigator)) {
        throw new Error("WebGPU is not available in this environment");
      }
      const { gpu } = navigator;
      const adapter = await gpu.requestAdapter();
      if (!adapter) {
        throw new Error("No WebGPU adapter available");
      }
      return adapter.requestDevice();
    })();
    return devicePromise;
  };
  var createEffectChainState = (width, height) => ({
    pool: new CanvasPool(width, height),
    setupCache: /* @__PURE__ */ new WeakMap(),
    cleanupRegistry: [],
    currentRunId: 0
  });
  var cleanupEffectChainState = (state) => {
    state.currentRunId++;
    for (const entry of state.cleanupRegistry) {
      entry.definition.cleanup(entry.state);
    }
  };
  var ensureSetup = (state, def, target) => {
    const widened = def;
    let cacheForDefinition = state.setupCache.get(widened);
    if (!cacheForDefinition) {
      cacheForDefinition = /* @__PURE__ */ new WeakMap();
      state.setupCache.set(widened, cacheForDefinition);
    }
    if (cacheForDefinition.has(target)) {
      return cacheForDefinition.get(target);
    }
    const setupState = def.setup(target);
    cacheForDefinition.set(target, setupState);
    state.cleanupRegistry.push({ definition: widened, state: setupState });
    return setupState;
  };
  var runEffectChain = async ({
    state,
    source,
    effects,
    output,
    width,
    height
  }) => {
    const runId = ++state.currentRunId;
    const isCancelled = () => state.currentRunId !== runId;
    const enabledEffects = effects.filter((e) => !e.params.disabled);
    const runs = groupByBackend(enabledEffects);
    let currentImage = source;
    let lastTarget = null;
    if (runs.length === 0) {
      if (source === output) {
        return true;
      }
      const ctx = output.getContext("2d");
      if (!ctx) {
        throw new Error("Failed to acquire 2D context for output canvas");
      }
      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(currentImage, 0, 0, width, height);
      return true;
    }
    let needsGpuDevice = false;
    for (const run of runs) {
      if (run.backend === "webgpu") {
        needsGpuDevice = true;
        break;
      }
    }
    const gpuDevice = needsGpuDevice ? await getGpuDevice() : null;
    if (isCancelled()) {
      return false;
    }
    let flipWebGLSourceY = true;
    for (let runIndex = 0; runIndex < runs.length; runIndex++) {
      const run = runs[runIndex];
      const [a22, b22] = state.pool.getPair(run.backend);
      let dst = a22;
      for (const eff of run.effects) {
        const def = eff.definition;
        const setupState = ensureSetup(state, def, dst);
        def.apply({
          source: currentImage,
          target: dst,
          state: setupState,
          params: eff.params,
          width,
          height,
          gpuDevice,
          flipSourceY: run.backend === "webgl2" ? flipWebGLSourceY : false
        });
        if (run.backend === "webgl2") {
          flipWebGLSourceY = true;
          state.pool.assertContextNotLost(dst);
        }
        currentImage = dst;
        dst = dst === a22 ? b22 : a22;
      }
      lastTarget = currentImage ?? lastTarget;
      const nextRun = runs[runIndex + 1];
      if (nextRun && nextRun.backend !== run.backend && lastTarget) {
        if (run.backend === "2d" && nextRun.backend === "webgl2") {
          currentImage = lastTarget;
          flipWebGLSourceY = true;
        } else {
          const bitmap = await createImageBitmap(lastTarget);
          if (isCancelled()) {
            bitmap.close();
            return false;
          }
          currentImage = bitmap;
          if (nextRun.backend === "webgl2") {
            flipWebGLSourceY = false;
          }
        }
      }
    }
    if (!lastTarget) {
      return true;
    }
    const outCtx = output.getContext("2d");
    if (!outCtx) {
      throw new Error("Failed to acquire 2D context for output canvas");
    }
    outCtx.clearRect(0, 0, width, height);
    outCtx.drawImage(lastTarget, 0, 0, width, height);
    return true;
  };
  var useEffectChainState = () => {
    const chainStateRef = (0, import_react39.useRef)(null);
    const sizeRef = (0, import_react39.useRef)(null);
    (0, import_react39.useEffect)(() => {
      return () => {
        if (chainStateRef.current) {
          cleanupEffectChainState(chainStateRef.current);
        }
      };
    }, []);
    return (0, import_react39.useMemo)(() => ({
      get: (width, height) => {
        if (!sizeRef.current || sizeRef.current.width !== width || sizeRef.current.height !== height) {
          if (chainStateRef.current) {
            cleanupEffectChainState(chainStateRef.current);
          }
          chainStateRef.current = createEffectChainState(width, height);
          sizeRef.current = { width, height };
        }
        return chainStateRef.current;
      }
    }), []);
  };
  var CanvasRefForwardingFunction = ({ width, height, fit, className: className2, style: style2, effects, ...props }, ref) => {
    const canvasRef = (0, import_react38.useRef)(null);
    const chainState = useEffectChainState();
    const sourceCanvas = (0, import_react38.useMemo)(() => {
      if (typeof document === "undefined") {
        return null;
      }
      return document.createElement("canvas");
    }, []);
    const draw = (0, import_react38.useCallback)((imageData) => {
      const canvas = canvasRef.current;
      const canvasWidth = width ?? imageData.displayWidth;
      const canvasHeight = height ?? imageData.displayHeight;
      if (!canvas) {
        throw new Error("Canvas ref is not set");
      }
      if (!sourceCanvas) {
        throw new Error("Source canvas is not available");
      }
      sourceCanvas.width = canvasWidth;
      sourceCanvas.height = canvasHeight;
      const sourceCtx = sourceCanvas.getContext("2d");
      if (!sourceCtx) {
        throw new Error("Could not get 2d context for source canvas");
      }
      sourceCtx.drawImage(imageData, ...calculateImageFit(fit, {
        height: imageData.displayHeight,
        width: imageData.displayWidth
      }, {
        width: canvasWidth,
        height: canvasHeight
      }));
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      return runEffectChain({
        state: chainState.get(canvasWidth, canvasHeight),
        source: sourceCanvas,
        effects,
        output: canvas,
        width: canvasWidth,
        height: canvasHeight
      });
    }, [chainState, effects, fit, height, sourceCanvas, width]);
    (0, import_react38.useImperativeHandle)(ref, () => {
      return {
        draw,
        getCanvas: () => {
          if (!canvasRef.current) {
            throw new Error("Canvas ref is not set");
          }
          return canvasRef.current;
        },
        clear: () => {
          const ctx = canvasRef.current?.getContext("2d");
          if (!ctx) {
            throw new Error("Could not get 2d context");
          }
          ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        }
      };
    }, [draw]);
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("canvas", {
      ref: canvasRef,
      className: className2,
      style: style2,
      ...props
    });
  };
  var Canvas = import_react38.default.forwardRef(CanvasRefForwardingFunction);
  var createImageDecoder = async ({
    resolvedSrc,
    signal,
    requestInit,
    contentType
  }) => {
    if (typeof ImageDecoder === "undefined") {
      throw new Error("Your browser does not support the WebCodecs ImageDecoder API.");
    }
    const response = await fetch(resolvedSrc, { ...requestInit, signal });
    const { body } = response;
    if (!body) {
      throw new Error("Got no body");
    }
    const decoder = new ImageDecoder({
      data: body,
      type: contentType ?? response.headers.get("Content-Type") ?? "image/gif"
    });
    await Promise.all([decoder.completed, decoder.tracks.ready]);
    const { selectedTrack } = decoder.tracks;
    if (!selectedTrack) {
      decoder.close();
      throw new Error("No selected track");
    }
    return { decoder, selectedTrack };
  };
  var CACHE_SIZE = 5;
  var getActualTime = ({
    loopBehavior,
    durationFound,
    timeInSec
  }) => {
    return loopBehavior === "loop" ? durationFound ? timeInSec % durationFound : timeInSec : Math.min(timeInSec, durationFound || Infinity);
  };
  var decodeImage = async ({
    resolvedSrc,
    signal,
    requestInit,
    currentTime,
    initialLoopBehavior
  }) => {
    const { decoder, selectedTrack } = await createImageDecoder({
      resolvedSrc,
      signal,
      requestInit,
      contentType: null
    });
    const cache22 = [];
    let durationFound = null;
    const getFrameByIndex = async (frameIndex) => {
      const foundInCache = cache22.find((c22) => c22.frameIndex === frameIndex);
      if (foundInCache && foundInCache.frame) {
        return foundInCache;
      }
      const frame = await decoder.decode({
        frameIndex,
        completeFramesOnly: true
      });
      if (foundInCache) {
        foundInCache.frame = frame.image;
      } else {
        cache22.push({
          frame: frame.image,
          frameIndex,
          timeInSeconds: frame.image.timestamp / 1e6
        });
      }
      return {
        frame: frame.image,
        frameIndex,
        timeInSeconds: frame.image.timestamp / 1e6
      };
    };
    const clearCache = (closeToTimeInSec) => {
      const itemsInCache = cache22.filter((c22) => c22.frame);
      const sortByClosestToCurrentTime = itemsInCache.sort((a22, b22) => {
        const aDiff = Math.abs(a22.timeInSeconds - closeToTimeInSec);
        const bDiff = Math.abs(b22.timeInSeconds - closeToTimeInSec);
        return aDiff - bDiff;
      });
      for (let i = 0; i < sortByClosestToCurrentTime.length; i++) {
        if (i < CACHE_SIZE) {
          continue;
        }
        const item = sortByClosestToCurrentTime[i];
        item.frame = null;
      }
    };
    const ensureFrameBeforeAndAfter = async ({
      timeInSec,
      loopBehavior
    }) => {
      const actualTimeInSec = getActualTime({
        durationFound,
        loopBehavior,
        timeInSec
      });
      const framesBefore = cache22.filter((c22) => c22.timeInSeconds <= actualTimeInSec);
      const biggestIndex = framesBefore.map((c22) => c22.frameIndex).reduce((a22, b22) => Math.max(a22, b22), 0);
      let i = biggestIndex;
      while (true) {
        const f = await getFrameByIndex(i);
        i++;
        if (!f.frame) {
          throw new Error("No frame found");
        }
        if (!f.frame.duration) {
          break;
        }
        if (i === selectedTrack.frameCount && durationFound === null) {
          const duration = (f.frame.timestamp + f.frame.duration) / 1e6;
          durationFound = duration;
        }
        if (f.timeInSeconds > actualTimeInSec || i === selectedTrack.frameCount) {
          break;
        }
      }
      if (selectedTrack.frameCount - biggestIndex < 3 && loopBehavior === "loop") {
        await getFrameByIndex(0);
      }
      clearCache(actualTimeInSec);
    };
    await ensureFrameBeforeAndAfter({
      timeInSec: currentTime,
      loopBehavior: initialLoopBehavior
    });
    await ensureFrameBeforeAndAfter({
      timeInSec: currentTime,
      loopBehavior: initialLoopBehavior
    });
    const getFrame = async (timeInSec, loopBehavior) => {
      if (durationFound !== null && timeInSec > durationFound && loopBehavior === "clear-after-finish") {
        return null;
      }
      const actualTimeInSec = getActualTime({
        loopBehavior,
        durationFound,
        timeInSec
      });
      await ensureFrameBeforeAndAfter({ timeInSec: actualTimeInSec, loopBehavior });
      const itemsInCache = cache22.filter((c22) => c22.frame);
      const closest = itemsInCache.reduce((a22, b22) => {
        const aDiff = Math.abs(a22.timeInSeconds - actualTimeInSec);
        const bDiff = Math.abs(b22.timeInSeconds - actualTimeInSec);
        return aDiff < bDiff ? a22 : b22;
      });
      if (!closest.frame) {
        throw new Error("No frame found");
      }
      return closest;
    };
    return {
      close: () => {
        for (const item of cache22) {
          item.frame?.close();
          item.frame = null;
        }
        decoder.close();
      },
      getFrame,
      frameCount: selectedTrack.frameCount
    };
  };
  var getCurrentTime = ({
    frame,
    playbackRate,
    fps
  }) => {
    return frame * playbackRate / fps;
  };
  var serializeRequestInit = (requestInit) => {
    if (!requestInit) {
      return null;
    }
    const requestInitWithoutSignal = { ...requestInit };
    delete requestInitWithoutSignal.signal;
    const { headers, ...rest } = requestInitWithoutSignal;
    return JSON.stringify({
      ...rest,
      headers: headers ? Array.from(new Headers(headers).entries()) : null
    });
  };
  var resolveAnimatedImageSource = (src) => {
    if (typeof window === "undefined") {
      return src;
    }
    return new URL(src, window.origin).href;
  };
  var animatedImageSchema = {
    src: {
      type: "asset",
      default: void 0,
      description: "Source",
      keyframable: false
    },
    ...baseSchema,
    ...cropSchema,
    ...premountSchema,
    playbackRate: {
      type: "number",
      min: 0,
      max: 10,
      step: 0.1,
      default: 1,
      description: "Playback rate",
      hiddenFromList: false,
      keyframable: false
    },
    ...transformSchema,
    ...backgroundSchema,
    ...borderSchema,
    ...borderRadiusSchema
  };
  var getCanvasPropsFromSequenceProps = (props) => {
    const canvasProps = {};
    const mutableCanvasProps = canvasProps;
    for (const key in props) {
      if (Object.prototype.hasOwnProperty.call(props, key) && (key.startsWith("data-") || key.startsWith("aria-"))) {
        mutableCanvasProps[key] = props[key];
      }
    }
    return canvasProps;
  };
  var AnimatedImageContent = (0, import_react36.forwardRef)(({
    src,
    width,
    height,
    onError,
    loopBehavior = "loop",
    playbackRate = 1,
    fit = "fill",
    requestInit,
    effects,
    controls,
    ...props
  }, canvasRef) => {
    const resolvedSrc = resolveAnimatedImageSource(src);
    const [imageDecoder, setImageDecoder] = (0, import_react36.useState)(null);
    const { delayRender: delayRender2, continueRender: continueRender2 } = useDelayRender();
    const [decodeHandle] = (0, import_react36.useState)(() => delayRender2(`Rendering <AnimatedImage/> with src="${resolvedSrc}"`));
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();
    const currentTime = getCurrentTime({ frame, playbackRate, fps });
    const currentTimeRef = (0, import_react36.useRef)(currentTime);
    currentTimeRef.current = currentTime;
    const requestInitKey = serializeRequestInit(requestInit);
    const requestInitRef = (0, import_react36.useRef)(requestInit);
    requestInitRef.current = requestInit;
    const ref = (0, import_react36.useRef)(null);
    const memoizedEffects = useMemoizedEffects({
      effects,
      overrideId: controls?.overrideId ?? null
    });
    (0, import_react36.useImperativeHandle)(canvasRef, () => {
      const c22 = ref.current?.getCanvas();
      if (!c22) {
        throw new Error("Canvas ref is not set");
      }
      return c22;
    }, []);
    const [initialLoopBehavior] = (0, import_react36.useState)(() => loopBehavior);
    (0, import_react36.useEffect)(() => {
      const controller = new AbortController();
      let cancelled = false;
      let continued = false;
      const continueRenderOnce = () => {
        if (continued) {
          return;
        }
        continued = true;
        continueRender2(decodeHandle);
      };
      decodeImage({
        resolvedSrc,
        signal: controller.signal,
        requestInit: requestInitRef.current,
        currentTime: currentTimeRef.current,
        initialLoopBehavior
      }).then((d) => {
        if (cancelled) {
          d.close();
          return;
        }
        setImageDecoder(d);
        continueRenderOnce();
      }).catch((err) => {
        if (cancelled) {
          return;
        }
        if (err.name === "AbortError") {
          continueRenderOnce();
          return;
        }
        if (onError) {
          onError?.(err);
          continueRenderOnce();
        } else {
          cancelRender(err);
        }
      });
      return () => {
        cancelled = true;
        controller.abort();
        continueRenderOnce();
      };
    }, [
      resolvedSrc,
      decodeHandle,
      onError,
      requestInitKey,
      initialLoopBehavior,
      continueRender2
    ]);
    (0, import_react36.useEffect)(() => {
      return () => {
        imageDecoder?.close();
      };
    }, [imageDecoder]);
    (0, import_react36.useLayoutEffect)(() => {
      if (!imageDecoder) {
        return;
      }
      const delay2 = delayRender2(`Rendering frame at ${currentTime} of <AnimatedImage src="${src}"/>`);
      let cancelled = false;
      imageDecoder.getFrame(currentTime, loopBehavior).then(async (videoFrame) => {
        if (cancelled) {
          return;
        }
        if (videoFrame === null) {
          ref.current?.clear();
          continueRender2(delay2);
          return;
        }
        const completed = await ref.current?.draw(videoFrame.frame);
        if (completed && !cancelled) {
          continueRender2(delay2);
        }
      }).catch((err) => {
        if (cancelled) {
          return;
        }
        if (onError) {
          onError(err);
          continueRender2(delay2);
        } else {
          cancelRender(err);
        }
      });
      return () => {
        cancelled = true;
        continueRender2(delay2);
      };
    }, [
      currentTime,
      imageDecoder,
      loopBehavior,
      onError,
      src,
      continueRender2,
      delayRender2,
      memoizedEffects,
      fit,
      width,
      height
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Canvas, {
      ref,
      width,
      height,
      fit,
      effects: memoizedEffects,
      ...props
    });
  });
  AnimatedImageContent.displayName = "AnimatedImageContent";
  var AnimatedImageInner = ({
    src,
    width,
    height,
    onError,
    fit,
    playbackRate,
    loopBehavior,
    id,
    className: className2,
    style: style2,
    durationInFrames,
    from,
    premountFor,
    postmountFor,
    styleWhilePremounted,
    styleWhilePostmounted,
    cropLeft,
    cropRight,
    cropTop,
    cropBottom,
    requestInit,
    effects = [],
    controls,
    ref,
    ...sequenceProps
  }) => {
    const actualRef = (0, import_react36.useRef)(null);
    const memoizedEffectDefinitions = useMemoizedEffectDefinitions(effects);
    (0, import_react36.useImperativeHandle)(ref, () => {
      return actualRef.current;
    }, []);
    const {
      effectivePostmountFor,
      effectivePremountFor,
      freezeFrame,
      isPremountingOrPostmounting,
      postmountingActive,
      premountingActive,
      premountingStyle
    } = usePremounting({
      from: from ?? 0,
      durationInFrames: durationInFrames ?? Infinity,
      premountFor: premountFor ?? null,
      postmountFor: postmountFor ?? null,
      style: style2 ?? null,
      styleWhilePremounted: styleWhilePremounted ?? null,
      styleWhilePostmounted: styleWhilePostmounted ?? null,
      hideWhilePremounted: "display-none"
    });
    const croppedStyle = useCropStyle({
      cropLeft,
      cropRight,
      cropTop,
      cropBottom,
      style: premountingStyle,
      componentName: "<AnimatedImage />"
    });
    const canvasProps = getCanvasPropsFromSequenceProps(sequenceProps);
    const animatedImageProps = {
      src,
      width,
      height,
      onError,
      fit,
      playbackRate,
      loopBehavior,
      id,
      className: className2,
      style: croppedStyle ?? void 0,
      requestInit,
      ...canvasProps
    };
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Freeze, {
      frame: freezeFrame,
      active: isPremountingOrPostmounting,
      children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Sequence, {
        layout: "none",
        from: from ?? 0,
        durationInFrames: durationInFrames ?? Infinity,
        name: "<AnimatedImage>",
        _remotionInternalDocumentationLink: "https://www.remotion.dev/docs/animatedimage",
        controls,
        _remotionInternalEffects: memoizedEffectDefinitions,
        _remotionInternalPremountDisplay: effectivePremountFor || null,
        _remotionInternalPostmountDisplay: effectivePostmountFor || null,
        _remotionInternalIsPremounting: premountingActive,
        _remotionInternalIsPostmounting: postmountingActive,
        ...sequenceProps,
        outlineRef: actualRef,
        children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(AnimatedImageContent, {
          ...animatedImageProps,
          ref: actualRef,
          effects,
          controls
        })
      })
    });
  };
  var AnimatedImage = withInteractivitySchema({
    Component: AnimatedImageInner,
    componentName: "<AnimatedImage>",
    componentIdentity: "dev.remotion.remotion.AnimatedImage",
    schema: animatedImageSchema,
    supportsEffects: true
  });
  AnimatedImage.displayName = "AnimatedImage";
  addSequenceStackTraces(AnimatedImage);
  var disabledEffectField = {
    type: "boolean",
    default: false,
    description: "Disabled"
  };
  var createEffect = (definition) => {
    const { calculateKey: userCalculateKey, validateParams } = definition;
    const widened = {
      ...definition,
      documentationLink: definition.documentationLink ?? null,
      calculateKey: (params) => {
        const disabled = params.disabled ?? false;
        return `${userCalculateKey(params)}-disabled-${disabled}`;
      },
      schema: {
        disabled: disabledEffectField,
        ...definition.schema
      }
    };
    const factory = (params = {}) => {
      validateParams(params);
      return {
        definition: widened,
        params,
        effectKey: widened.calculateKey(params),
        memoized: false
      };
    };
    return factory;
  };
  var validateArtifactFilename = (filename) => {
    if (typeof filename !== "string") {
      throw new TypeError(`The "filename" must be a string, but you passed a value of type ${typeof filename}`);
    }
    if (filename.trim() === "") {
      throw new Error("The `filename` must not be empty");
    }
    if (!filename.match(/^([0-9a-zA-Z-!_.*'()/:&$@=;+,?]+)/g)) {
      throw new Error('The `filename` must match "/^([0-9a-zA-Z-!_.*\'()/:&$@=;+,?]+)/g". Use forward slashes only, even on Windows.');
    }
  };
  var validateContent = (content) => {
    if (typeof content !== "string" && !(content instanceof Uint8Array)) {
      throw new TypeError(`The "content" must be a string or Uint8Array, but you passed a value of type ${typeof content}`);
    }
    if (typeof content === "string" && content.trim() === "") {
      throw new Error("The `content` must not be empty");
    }
  };
  var validateRenderAsset = (artifact) => {
    if (artifact.type !== "artifact") {
      return;
    }
    validateArtifactFilename(artifact.filename);
    if (artifact.contentType === "thumbnail") {
      return;
    }
    validateContent(artifact.content);
  };
  var RenderAssetManager = (0, import_react41.createContext)({
    registerRenderAsset: () => {
      return;
    },
    unregisterRenderAsset: () => {
      return;
    },
    renderAssets: []
  });
  var RenderAssetManagerProvider = ({ children, collectAssets }) => {
    const [renderAssets, setRenderAssets] = (0, import_react41.useState)([]);
    const renderAssetsRef = (0, import_react41.useRef)([]);
    const registerRenderAsset = (0, import_react41.useCallback)((renderAsset) => {
      validateRenderAsset(renderAsset);
      renderAssetsRef.current = [...renderAssetsRef.current, renderAsset];
      setRenderAssets(renderAssetsRef.current);
    }, []);
    if (collectAssets) {
      (0, import_react41.useImperativeHandle)(collectAssets, () => {
        return {
          collectAssets: () => {
            const assets = renderAssetsRef.current;
            renderAssetsRef.current = [];
            setRenderAssets([]);
            return assets;
          }
        };
      }, []);
    }
    const unregisterRenderAsset = (0, import_react41.useCallback)((id) => {
      renderAssetsRef.current = renderAssetsRef.current.filter((a22) => a22.id !== id);
      setRenderAssets(renderAssetsRef.current);
    }, []);
    (0, import_react41.useLayoutEffect)(() => {
      if (typeof window !== "undefined") {
        window.remotion_collectAssets = () => {
          const assets = renderAssetsRef.current;
          renderAssetsRef.current = [];
          setRenderAssets([]);
          return assets;
        };
      }
    }, []);
    const contextValue = (0, import_react41.useMemo)(() => {
      return {
        registerRenderAsset,
        unregisterRenderAsset,
        renderAssets
      };
    }, [renderAssets, registerRenderAsset, unregisterRenderAsset]);
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(RenderAssetManager.Provider, {
      value: contextValue,
      children
    });
  };
  var ArtifactThumbnail = /* @__PURE__ */ Symbol("Thumbnail");
  var Artifact = ({ filename, content, downloadBehavior }) => {
    const { registerRenderAsset, unregisterRenderAsset } = (0, import_react40.useContext)(RenderAssetManager);
    const env = useRemotionEnvironment();
    const frame = useCurrentFrame();
    const [id] = (0, import_react40.useState)(() => {
      return String(Math.random());
    });
    (0, import_react40.useLayoutEffect)(() => {
      if (!env.isRendering) {
        return;
      }
      if (content instanceof Uint8Array) {
        registerRenderAsset({
          type: "artifact",
          id,
          content: btoa(new TextDecoder("utf8").decode(content)),
          filename,
          frame,
          contentType: "binary",
          downloadBehavior: downloadBehavior ?? null
        });
      } else if (content === ArtifactThumbnail) {
        registerRenderAsset({
          type: "artifact",
          id,
          filename,
          frame,
          contentType: "thumbnail",
          downloadBehavior: downloadBehavior ?? null
        });
      } else {
        registerRenderAsset({
          type: "artifact",
          id,
          content,
          filename,
          frame,
          contentType: "text",
          downloadBehavior: downloadBehavior ?? null
        });
      }
      return () => {
        return unregisterRenderAsset(id);
      };
    }, [
      content,
      env.isRendering,
      filename,
      frame,
      id,
      registerRenderAsset,
      unregisterRenderAsset,
      downloadBehavior
    ]);
    return null;
  };
  Artifact.Thumbnail = ArtifactThumbnail;
  var getAbsoluteSrc = (relativeSrc) => {
    if (typeof window === "undefined") {
      return relativeSrc;
    }
    if (relativeSrc.startsWith("http://") || relativeSrc.startsWith("https://") || relativeSrc.startsWith("file://") || relativeSrc.startsWith("blob:") || relativeSrc.startsWith("data:")) {
      return relativeSrc;
    }
    return new URL(relativeSrc, window.origin).href;
  };
  var calculateMediaDuration = ({
    trimAfter,
    mediaDurationInFrames,
    playbackRate,
    trimBefore
  }) => {
    let duration = mediaDurationInFrames;
    if (typeof trimAfter !== "undefined") {
      duration = trimAfter;
    }
    if (typeof trimBefore !== "undefined") {
      duration -= trimBefore;
    }
    const actualDuration = duration / playbackRate;
    return Number(actualDuration.toFixed(10));
  };
  var LoopContext = (0, import_react43.createContext)(null);
  var useLoop = () => {
    return import_react43.default.useContext(LoopContext);
  };
  var Loop = ({
    durationInFrames,
    times = Infinity,
    children,
    name,
    showInTimeline,
    ...props
  }) => {
    const currentFrame = useCurrentFrame();
    const { durationInFrames: compDuration } = useVideoConfig();
    validateDurationInFrames(durationInFrames, {
      component: "of the <Loop /> component",
      allowFloats: true
    });
    if (typeof times !== "number") {
      throw new TypeError(`You passed to "times" an argument of type ${typeof times}, but it must be a number.`);
    }
    if (times !== Infinity && times % 1 !== 0) {
      throw new TypeError(`The "times" prop of a loop must be an integer, but got ${times}.`);
    }
    if (times < 0) {
      throw new TypeError(`The "times" prop of a loop must be at least 0, but got ${times}`);
    }
    const maxTimes = Math.ceil(compDuration / durationInFrames);
    const actualTimes = Math.min(maxTimes, times);
    const style2 = props.layout === "none" ? void 0 : props.style;
    const maxFrame = durationInFrames * (actualTimes - 1);
    const iteration = Math.floor(currentFrame / durationInFrames);
    const start = iteration * durationInFrames;
    const from = Math.min(start, maxFrame);
    const loopDisplay = (0, import_react43.useMemo)(() => {
      return {
        numberOfTimes: Math.min(compDuration / durationInFrames, times),
        startOffset: -from,
        durationInFrames
      };
    }, [compDuration, durationInFrames, from, times]);
    const loopContext = (0, import_react43.useMemo)(() => {
      return {
        iteration: Math.floor(currentFrame / durationInFrames),
        durationInFrames
      };
    }, [currentFrame, durationInFrames]);
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(LoopContext.Provider, {
      value: loopContext,
      children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Sequence, {
        durationInFrames,
        from,
        name: name ?? "<Loop>",
        _remotionInternalDocumentationLink: "https://www.remotion.dev/docs/loop",
        _remotionInternalLoopDisplay: loopDisplay,
        layout: props.layout,
        style: style2,
        showInTimeline,
        children
      })
    });
  };
  Loop.useLoop = useLoop;
  var playbackLogging = ({
    logLevel,
    tag,
    message,
    mountTime
  }) => {
    const tags = [mountTime ? Date.now() - mountTime + "ms " : null, tag].filter(Boolean).join(" ");
    Log.trace({ logLevel, tag: null }, `[${tags}]`, message);
  };
  var PreloadContext = (0, import_react45.createContext)({});
  var preloads = {};
  var updaters = [];
  var PrefetchProvider = ({ children }) => {
    const [_preloads, _setPreloads] = (0, import_react45.useState)(() => preloads);
    (0, import_react45.useEffect)(() => {
      const updaterFunction = () => {
        _setPreloads(preloads);
      };
      updaters.push(updaterFunction);
      return () => {
        updaters = updaters.filter((u) => u !== updaterFunction);
      };
    }, []);
    return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(PreloadContext.Provider, {
      value: _preloads,
      children
    });
  };
  var removeAndGetHashFragment = (src) => {
    const hashIndex = src.indexOf("#");
    if (hashIndex === -1) {
      return null;
    }
    return hashIndex;
  };
  var getSrcWithoutHash = (src) => {
    const hashIndex = removeAndGetHashFragment(src);
    if (hashIndex === null) {
      return src;
    }
    return src.slice(0, hashIndex);
  };
  var usePreload = (src) => {
    const preloads2 = (0, import_react44.useContext)(PreloadContext);
    const hashFragmentIndex = removeAndGetHashFragment(src);
    const withoutHashFragment = getSrcWithoutHash(src);
    if (!preloads2[withoutHashFragment]) {
      return src;
    }
    if (hashFragmentIndex !== null) {
      return preloads2[withoutHashFragment] + src.slice(hashFragmentIndex);
    }
    return preloads2[withoutHashFragment];
  };
  var validateMediaProps = (props, component) => {
    if (typeof props.volume !== "number" && typeof props.volume !== "function" && typeof props.volume !== "undefined") {
      throw new TypeError(`You have passed a volume of type ${typeof props.volume} to your <${component} /> component. Volume must be a number or a function with the signature '(frame: number) => number' undefined.`);
    }
    if (typeof props.volume === "number" && props.volume < 0) {
      throw new TypeError(`You have passed a volume below 0 to your <${component} /> component. Volume must be between 0 and 1`);
    }
    if (typeof props.playbackRate !== "number" && typeof props.playbackRate !== "undefined") {
      throw new TypeError(`You have passed a playbackRate of type ${typeof props.playbackRate} to your <${component} /> component. Playback rate must a real number or undefined.`);
    }
    if (typeof props.playbackRate === "number" && (isNaN(props.playbackRate) || !Number.isFinite(props.playbackRate) || props.playbackRate <= 0)) {
      throw new TypeError(`You have passed a playbackRate of ${props.playbackRate} to your <${component} /> component. Playback rate must be a real number above 0.`);
    }
    if (typeof props.preservePitch !== "boolean" && typeof props.preservePitch !== "undefined") {
      throw new TypeError(`'preservePitch' must be a boolean or undefined but got '${typeof props.preservePitch}' instead`);
    }
  };
  var validateStartFromProps = (startFrom, endAt) => {
    if (typeof startFrom !== "undefined") {
      if (typeof startFrom !== "number") {
        throw new TypeError(`type of startFrom prop must be a number, instead got type ${typeof startFrom}.`);
      }
      if (isNaN(startFrom) || startFrom === Infinity) {
        throw new TypeError("startFrom prop can not be NaN or Infinity.");
      }
      if (startFrom < 0) {
        throw new TypeError(`startFrom must be greater than equal to 0 instead got ${startFrom}.`);
      }
    }
    if (typeof endAt !== "undefined") {
      if (typeof endAt !== "number") {
        throw new TypeError(`type of endAt prop must be a number, instead got type ${typeof endAt}.`);
      }
      if (isNaN(endAt)) {
        throw new TypeError("endAt prop can not be NaN.");
      }
      if (endAt <= 0) {
        throw new TypeError(`endAt must be a positive number, instead got ${endAt}.`);
      }
    }
    if (endAt < startFrom) {
      throw new TypeError("endAt prop must be greater than startFrom prop.");
    }
  };
  var validateTrimProps = (trimBefore, trimAfter) => {
    if (typeof trimBefore !== "undefined") {
      if (typeof trimBefore !== "number") {
        throw new TypeError(`type of trimBefore prop must be a number, instead got type ${typeof trimBefore}.`);
      }
      if (isNaN(trimBefore) || trimBefore === Infinity) {
        throw new TypeError("trimBefore prop can not be NaN or Infinity.");
      }
      if (trimBefore < 0) {
        throw new TypeError(`trimBefore must be greater than equal to 0 instead got ${trimBefore}.`);
      }
    }
    if (typeof trimAfter !== "undefined") {
      if (typeof trimAfter !== "number") {
        throw new TypeError(`type of trimAfter prop must be a number, instead got type ${typeof trimAfter}.`);
      }
      if (isNaN(trimAfter)) {
        throw new TypeError("trimAfter prop can not be NaN.");
      }
      if (trimAfter <= 0) {
        throw new TypeError(`trimAfter must be a positive number, instead got ${trimAfter}.`);
      }
    }
    if (trimAfter <= trimBefore) {
      throw new TypeError("trimAfter prop must be greater than trimBefore prop.");
    }
  };
  var validateMediaTrimProps = ({
    startFrom,
    endAt,
    trimBefore,
    trimAfter
  }) => {
    if (typeof startFrom !== "undefined" && typeof trimBefore !== "undefined") {
      throw new TypeError("Cannot use both startFrom and trimBefore props. Use trimBefore instead as startFrom is deprecated.");
    }
    if (typeof endAt !== "undefined" && typeof trimAfter !== "undefined") {
      throw new TypeError("Cannot use both endAt and trimAfter props. Use trimAfter instead as endAt is deprecated.");
    }
    const hasNewProps = typeof trimBefore !== "undefined" || typeof trimAfter !== "undefined";
    const hasOldProps = typeof startFrom !== "undefined" || typeof endAt !== "undefined";
    if (hasNewProps) {
      validateTrimProps(trimBefore, trimAfter);
    } else if (hasOldProps) {
      validateStartFromProps(startFrom, endAt);
    }
  };
  var resolveTrimProps = ({
    startFrom,
    endAt,
    trimBefore,
    trimAfter
  }) => {
    const trimBeforeValue = trimBefore ?? startFrom ?? void 0;
    const trimAfterValue = trimAfter ?? endAt ?? void 0;
    return { trimBeforeValue, trimAfterValue };
  };
  var durationReducer = (state, action) => {
    switch (action.type) {
      case "got-duration": {
        const absoluteSrc = getAbsoluteSrc(action.src);
        if (state[absoluteSrc] === action.durationInSeconds) {
          return state;
        }
        return {
          ...state,
          [absoluteSrc]: action.durationInSeconds
        };
      }
      default:
        return state;
    }
  };
  var DurationsContext = (0, import_react46.createContext)({
    durations: {},
    setDurations: () => {
      throw new Error("context missing");
    }
  });
  var DurationsContextProvider = ({ children }) => {
    const [durations, setDurations] = (0, import_react46.useReducer)(durationReducer, {});
    const value = (0, import_react46.useMemo)(() => {
      return {
        durations,
        setDurations
      };
    }, [durations]);
    return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(DurationsContext.Provider, {
      value,
      children
    });
  };
  var getCrossOriginValue = ({
    crossOrigin,
    requestsVideoFrame,
    isClientSideRendering
  }) => {
    if (crossOrigin !== void 0 && crossOrigin !== null) {
      return crossOrigin;
    }
    if (isClientSideRendering) {
      return "anonymous";
    }
    if (requestsVideoFrame) {
      return "anonymous";
    }
    return;
  };
  function mulberry32(a22) {
    let t = a22 + 1831565813;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  }
  function hashCode(str) {
    let i = 0;
    let chr = 0;
    let hash = 0;
    for (i = 0; i < str.length; i++) {
      chr = str.charCodeAt(i);
      hash = (hash << 5) - hash + chr;
      hash |= 0;
    }
    return hash;
  }
  var random = (seed, dummy) => {
    if (dummy !== void 0) {
      throw new TypeError("random() takes only one argument");
    }
    if (seed === null) {
      return Math.random();
    }
    if (typeof seed === "string") {
      return mulberry32(hashCode(seed));
    }
    if (typeof seed === "number") {
      return mulberry32(seed * 1e10);
    }
    throw new Error("random() argument must be a number or a string");
  };
  var playAndHandleNotAllowedError = ({
    mediaRef,
    mediaType,
    onAutoPlayError,
    logLevel,
    mountTime,
    reason,
    isPlayer
  }) => {
    const { current } = mediaRef;
    if (!current) {
      return;
    }
    playbackLogging({
      logLevel,
      tag: "play",
      message: `Attempting to play ${current.src}. Reason: ${reason}`,
      mountTime
    });
    const prom = current.play();
    if (!prom.catch) {
      return;
    }
    prom.catch((err) => {
      if (!current) {
        return;
      }
      if (err.message.includes("request was interrupted by a call to pause")) {
        return;
      }
      if (err.message.includes("The operation was aborted.")) {
        return;
      }
      if (err.message.includes("The fetching process for the media resource was aborted by the user agent")) {
        return;
      }
      if (err.message.includes("request was interrupted by a new load request")) {
        return;
      }
      if (err.message.includes("because the media was removed from the document")) {
        return;
      }
      if (err.message.includes("user didn't interact with the document") && current.muted) {
        return;
      }
      console.log(`Could not play ${mediaType} due to following error: `, err);
      if (!current.muted) {
        if (onAutoPlayError) {
          onAutoPlayError();
          return;
        }
        if (mediaType === "video" && isPlayer) {
          Log.info({ logLevel, tag: "<" + mediaType + ">" }, `The video will be muted and we'll retry playing it.`);
          Log.info({ logLevel, tag: "<" + mediaType + ">" }, "Use onAutoPlayError() to handle this error yourself.");
          current.muted = true;
          current.play();
        }
      }
    });
  };
  var makeSharedElementSourceNode = ({
    audioContext,
    ref
  }) => {
    let connected = null;
    let disposed = false;
    let currentAudioContext = audioContext;
    return {
      setAudioContext: (newAudioContext) => {
        currentAudioContext = newAudioContext;
      },
      attemptToConnect: () => {
        if (disposed) {
          throw new Error("SharedElementSourceNode has been disposed");
        }
        if (!connected && ref.current && currentAudioContext) {
          const mediaElementSourceNode = currentAudioContext.createMediaElementSource(ref.current);
          connected = mediaElementSourceNode;
        }
      },
      get: () => {
        if (!connected) {
          throw new Error("Audio element not connected");
        }
        return connected;
      },
      cleanup: () => {
        if (connected) {
          connected.disconnect();
          connected = null;
        }
        disposed = true;
      }
    };
  };
  var warned = false;
  var warnOnce = (logLevel) => {
    if (warned) {
      return;
    }
    warned = true;
    if (typeof window !== "undefined") {
      Log.warn({ logLevel, tag: null }, "AudioContext is not supported in this browser");
    }
  };
  var useSingletonAudioContext = ({
    logLevel,
    latencyHint,
    audioEnabled,
    sampleRate
  }) => {
    const env = useRemotionEnvironment();
    const initialSampleRate = (0, import_react51.useRef)(sampleRate);
    if (sampleRate !== initialSampleRate.current) {
      throw new Error(`Changing the AudioContext sample rate dynamically is not supported. The sample rate was initialized with ${initialSampleRate.current} Hz, but ${sampleRate} Hz was passed later.`);
    }
    const context = (0, import_react51.useMemo)(() => {
      if (env.isRendering) {
        return null;
      }
      if (!audioEnabled) {
        return null;
      }
      if (typeof AudioContext === "undefined") {
        warnOnce(logLevel);
        return null;
      }
      const audioContext = new AudioContext({
        latencyHint,
        sampleRate
      });
      const gainNode = audioContext.createGain();
      gainNode.connect(audioContext.destination);
      Log.trace({ logLevel, tag: "audio" }, "Creating new audio context");
      audioContext.suspend();
      let transitionTarget = null;
      const getState = () => {
        const nativeState = audioContext.state;
        if (transitionTarget === "running" && nativeState !== "running") {
          return "suspended-to-running";
        }
        if (transitionTarget === "suspended" && nativeState !== "suspended") {
          return "running-to-suspended";
        }
        return nativeState;
      };
      const resume = () => {
        transitionTarget = "running";
        const promise = audioContext.resume();
        promise.finally(() => {
          if (transitionTarget === "running") {
            transitionTarget = null;
          }
        });
        return promise;
      };
      const suspend = () => {
        transitionTarget = "suspended";
        const promise = audioContext.suspend();
        promise.finally(() => {
          if (transitionTarget === "suspended") {
            transitionTarget = null;
          }
        });
        return promise;
      };
      return {
        audioContext,
        gainNode,
        getState,
        resume,
        suspend
      };
    }, [logLevel, latencyHint, env.isRendering, audioEnabled, sampleRate]);
    return context;
  };
  var RESUME_WAIT_TIMEOUT = 1e3;
  var waitUntilActuallyResumed = (audioContext, logLevel, signal) => {
    return new Promise((resolve) => {
      const startCurrentTime = audioContext.currentTime;
      const start = audioContext.getOutputTimestamp();
      const startOutputPerformanceTime = start.performanceTime;
      const startWallClock = performance.now();
      let animationFrame = null;
      let timeout = null;
      let settled = false;
      let onAbort = () => {
        return;
      };
      const finish = (result) => {
        if (settled) {
          return;
        }
        settled = true;
        if (animationFrame !== null) {
          cancelAnimationFrame(animationFrame);
        }
        if (timeout !== null) {
          clearTimeout(timeout);
        }
        signal.removeEventListener("abort", onAbort);
        resolve(result);
      };
      onAbort = () => finish("cancelled");
      const hasAudiblyStarted = (startPerformanceTime) => {
        const outputTimestamp = audioContext.getOutputTimestamp();
        return startPerformanceTime !== void 0 && outputTimestamp.performanceTime !== void 0 && outputTimestamp.performanceTime > startPerformanceTime && outputTimestamp.contextTime !== void 0 && outputTimestamp.contextTime > startCurrentTime;
      };
      const check = () => {
        animationFrame = null;
        const { currentTime } = audioContext;
        const outputTimestamp = audioContext.getOutputTimestamp();
        const elapsedWallClock = performance.now() - startWallClock;
        if (hasAudiblyStarted(startOutputPerformanceTime)) {
          Log.verbose({ logLevel, tag: "audio" }, `waitUntilActuallyResumed: getOutputTimestamp.performanceTime advanced from ${startOutputPerformanceTime.toFixed(6)} to ${outputTimestamp.performanceTime?.toFixed(6)} after ${elapsedWallClock.toFixed(1)}ms. currentTime=${currentTime.toFixed(6)} (advanced by ${(currentTime - startCurrentTime).toFixed(6)}), getOutputTimestamp.performanceTime=${outputTimestamp.performanceTime?.toFixed(1) ?? "undefined"}`);
          finish("resumed");
          return;
        }
        animationFrame = requestAnimationFrame(check);
      };
      if (signal.aborted) {
        finish("cancelled");
        return;
      }
      signal.addEventListener("abort", onAbort, { once: true });
      timeout = setTimeout(() => {
        if (hasAudiblyStarted(startOutputPerformanceTime)) {
          finish("resumed");
          return;
        }
        Log.warn({ logLevel, tag: "audio" }, "WARNING: You enabled autoPlay on an unmuted <Player /> and the browser did not allow the video to be started. Remotion muted the <Player /> so it can play. To properly handle this, either set the `muted` prop or remove the `autoPlay` prop");
        finish("failed");
      }, RESUME_WAIT_TIMEOUT);
      animationFrame = requestAnimationFrame(check);
    });
  };
  var EMPTY_AUDIO = "data:audio/mp3;base64,/+MYxAAJcAV8AAgAABn//////+/gQ5BAMA+D4Pg+BAQBAEAwD4Pg+D4EBAEAQDAPg++hYBH///hUFQVBUFREDQNHmf///////+MYxBUGkAGIMAAAAP/29Xt6lUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV/+MYxDUAAANIAAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV";
  var compareProps = (obj1, obj2) => {
    const keysA = Object.keys(obj1).sort();
    const keysB = Object.keys(obj2).sort();
    if (keysA.length !== keysB.length) {
      return false;
    }
    for (let i = 0; i < keysA.length; i++) {
      if (keysA[i] !== keysB[i]) {
        return false;
      }
      if (obj1[keysA[i]] !== obj2[keysB[i]]) {
        return false;
      }
    }
    return true;
  };
  var didPropChange = (key, newProp, prevProp) => {
    if (key === "src" && !prevProp.startsWith("data:") && !newProp.startsWith("data:")) {
      return new URL(prevProp, window.origin).toString() !== new URL(newProp, window.origin).toString();
    }
    if (prevProp === newProp) {
      return false;
    }
    return true;
  };
  var SharedAudioContext = (0, import_react50.createContext)(null);
  var SharedAudioTagsContext = (0, import_react50.createContext)(null);
  var shouldSaveForLater = (state) => {
    if (state === "suspended" || state === "running-to-suspended" || state === "interrupted") {
      return true;
    }
    if (state === "running" || state === "suspended-to-running") {
      return false;
    }
    throw new Error(`Unexpected audio context state: ${state}`);
  };
  var SharedAudioContextProvider = ({
    children,
    audioLatencyHint,
    audioEnabled,
    previewSampleRate,
    _experimentalKeepAudioContextAlive
  }) => {
    const logLevel = useLogLevel();
    const sampleRate = previewSampleRate ?? 48e3;
    (0, import_react50.useEffect)(() => {
      if (typeof window === "undefined") {
        return;
      }
      window.remotion_sampleRate = sampleRate;
    }, [sampleRate]);
    const ctxAndGain = useSingletonAudioContext({
      logLevel,
      latencyHint: audioLatencyHint,
      audioEnabled,
      sampleRate
    });
    const audioContextIsPlayingEventually = (0, import_react50.useRef)(false);
    const initialExperimentalKeepAudioContextAlive = (0, import_react50.useRef)(_experimentalKeepAudioContextAlive);
    if (initialExperimentalKeepAudioContextAlive.current !== _experimentalKeepAudioContextAlive) {
      throw new Error("`_experimentalKeepAudioContextAlive` cannot be changed dynamically.");
    }
    const isResuming = (0, import_react50.useRef)(null);
    const nextResumeAttemptId = (0, import_react50.useRef)(0);
    const audioSyncAnchor = (0, import_react50.useMemo)(() => ({ value: 0 }), []);
    const audioSyncAnchorListeners = (0, import_react50.useRef)([]);
    const audioSyncAnchorEmitter = (0, import_react50.useMemo)(() => {
      return {
        dispatch: (event) => {
          audioSyncAnchorListeners.current.forEach((l) => l(event));
        },
        subscribe: (listener) => {
          audioSyncAnchorListeners.current.push(listener);
          return {
            remove: () => {
              audioSyncAnchorListeners.current = audioSyncAnchorListeners.current.filter((l) => l !== listener);
            }
          };
        }
      };
    }, []);
    const prevEndTimes = (0, import_react50.useRef)({ scheduledEndTime: null, mediaEndTime: null });
    const nodesToResume = (0, import_react50.useRef)(/* @__PURE__ */ new Map());
    const unscheduleAudioNode = (0, import_react50.useCallback)((node) => {
      nodesToResume.current.delete(node);
    }, []);
    const scheduleAudioNode = (0, import_react50.useMemo)(() => {
      return ({
        node,
        mediaTimestamp,
        sourceOffset,
        scheduledTime,
        duration,
        offset,
        originalUnloopedMediaTimestamp
      }) => {
        if (!ctxAndGain) {
          throw new Error("Audio context not found");
        }
        const currentState = ctxAndGain.getState();
        if (currentState === "closed") {
          return {
            type: "not-started",
            reason: "audio context is closed"
          };
        }
        const saveForLater = shouldSaveForLater(currentState) || _experimentalKeepAudioContextAlive && !audioContextIsPlayingEventually.current;
        if (duration > 0) {
          if (saveForLater) {
            nodesToResume.current.set(node, {
              scheduledTime,
              offset,
              duration
            });
          } else {
            node.start(scheduledTime, offset, duration);
          }
        }
        const scheduledEndTime = scheduledTime + duration / node.playbackRate.value;
        const mediaTime = mediaTimestamp + offset - sourceOffset;
        const mediaEndTime = mediaTime + duration;
        const latency = ctxAndGain.audioContext.baseLatency + ctxAndGain.audioContext.outputLatency;
        const timeDiff = scheduledTime - ctxAndGain.audioContext.currentTime;
        const prev = prevEndTimes.current;
        const scheduledMismatch = prev.scheduledEndTime !== null && Math.abs(scheduledTime - prev.scheduledEndTime) > 1e-3;
        const mediaMismatch = prev.mediaEndTime !== null && Math.abs(mediaTime - prev.mediaEndTime) > 1e-3;
        Log.verbose({ logLevel, tag: "audio-scheduling" }, "scheduled %c%s%c %s %c%s%c %s %c%s%c %s %s %s %s %s", scheduledMismatch ? "color: red; font-weight: bold" : "", scheduledTime.toFixed(4), "", scheduledEndTime.toFixed(4), mediaMismatch ? "color: red; font-weight: bold" : "", mediaTime.toFixed(4), "", mediaEndTime.toFixed(4), duration < 0 ? "color: red; font-weight: bold" : timeDiff < 0 ? "color: red; font-weight: bold" : "color: blue; font-weight: bold", duration < 0 ? "missed " + Math.abs(offset).toFixed(2) + "s" : Math.abs(timeDiff).toFixed(2) + (timeDiff < 0 ? " delay" : " ahead"), "", "current=" + ctxAndGain.audioContext.currentTime.toFixed(4), "offset=" + offset.toFixed(4), "latency=" + latency.toFixed(4), "state=" + ctxAndGain.audioContext.state, originalUnloopedMediaTimestamp !== mediaTime ? "original_ts=" + originalUnloopedMediaTimestamp.toFixed(4) : "", "action=" + (saveForLater ? "schedule" : "start"), "");
        prev.scheduledEndTime = scheduledEndTime;
        prev.mediaEndTime = mediaEndTime;
        return duration > 0 ? {
          type: "started",
          scheduledTime
        } : {
          type: "not-started",
          reason: "missed " + Math.abs(offset).toFixed(2) + "s"
        };
      };
    }, [ctxAndGain, _experimentalKeepAudioContextAlive, logLevel]);
    const resume = (0, import_react50.useCallback)(() => {
      if (!ctxAndGain) {
        return Promise.resolve();
      }
      if (audioContextIsPlayingEventually.current) {
        return Promise.resolve();
      }
      audioContextIsPlayingEventually.current = true;
      ctxAndGain.gainNode.gain.cancelScheduledValues(ctxAndGain.audioContext.currentTime);
      ctxAndGain.gainNode.gain.setValueAtTime(0, ctxAndGain.audioContext.currentTime);
      ctxAndGain.gainNode.gain.linearRampToValueAtTime(1, ctxAndGain.audioContext.currentTime + 0.03);
      nodesToResume.current.forEach((r, node) => {
        node.start(r.scheduledTime, r.offset, r.duration);
      });
      nodesToResume.current.clear();
      if (_experimentalKeepAudioContextAlive && ctxAndGain.audioContext.state === "running") {
        return Promise.resolve();
      }
      const resumePromise = ctxAndGain.resume();
      const abortController = new AbortController();
      const resumeAttemptId = nextResumeAttemptId.current++;
      const waitPromise = new Promise((resolve) => {
        waitUntilActuallyResumed(ctxAndGain.audioContext, logLevel, abortController.signal).then(resolve);
        resumePromise.catch((err) => {
          Log.warn({ logLevel, tag: "audio" }, "AudioContext resume rejected, muting playback and continuing without audio", err);
          abortController.abort();
          resolve("failed");
        });
      }).finally(() => {
        if (isResuming.current?.id === resumeAttemptId) {
          isResuming.current = null;
        }
      });
      isResuming.current = {
        abortController,
        id: resumeAttemptId,
        promise: waitPromise
      };
      return resumePromise.catch(() => {
      });
    }, [ctxAndGain, _experimentalKeepAudioContextAlive, logLevel]);
    const getIsResumingAudioContext = (0, import_react50.useCallback)(() => {
      return isResuming.current?.promise ?? null;
    }, []);
    const suspend = (0, import_react50.useCallback)(() => {
      isResuming.current?.abortController.abort();
      if (!ctxAndGain) {
        return Promise.resolve();
      }
      if (!audioContextIsPlayingEventually.current) {
        return Promise.resolve();
      }
      audioContextIsPlayingEventually.current = false;
      if (_experimentalKeepAudioContextAlive) {
        ctxAndGain.gainNode.gain.cancelScheduledValues(ctxAndGain.audioContext.currentTime);
        ctxAndGain.gainNode.gain.setValueAtTime(0, ctxAndGain.audioContext.currentTime);
        return Promise.resolve();
      }
      return ctxAndGain.suspend();
    }, [ctxAndGain, _experimentalKeepAudioContextAlive]);
    (0, import_react50.useEffect)(() => {
      if (!_experimentalKeepAudioContextAlive) {
        return;
      }
      if (!ctxAndGain) {
        return;
      }
      if (typeof window === "undefined") {
        return;
      }
      const wake = () => {
        if (ctxAndGain.audioContext.state === "running") {
          return;
        }
        ctxAndGain.resume().catch(() => {
        });
      };
      wake();
      window.addEventListener("pointerdown", wake, {
        capture: true,
        passive: true
      });
      window.addEventListener("keydown", wake, { capture: true, passive: true });
      return () => {
        window.removeEventListener("pointerdown", wake, { capture: true });
        window.removeEventListener("keydown", wake, { capture: true });
        ctxAndGain.suspend().catch(() => {
        });
      };
    }, [ctxAndGain, _experimentalKeepAudioContextAlive]);
    const audioContextValue = (0, import_react50.useMemo)(() => {
      return {
        audioContext: ctxAndGain?.audioContext ?? null,
        getAudioContextState: () => ctxAndGain?.getState() ?? null,
        gainNode: ctxAndGain?.gainNode ?? null,
        audioSyncAnchor,
        audioSyncAnchorEmitter,
        scheduleAudioNode,
        resume,
        suspend,
        getIsResumingAudioContext,
        unscheduleAudioNode,
        _experimentalKeepAudioContextAlive
      };
    }, [
      ctxAndGain,
      audioSyncAnchor,
      audioSyncAnchorEmitter,
      scheduleAudioNode,
      resume,
      suspend,
      getIsResumingAudioContext,
      unscheduleAudioNode,
      _experimentalKeepAudioContextAlive
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(SharedAudioContext.Provider, {
      value: audioContextValue,
      children
    });
  };
  var SharedAudioTagsContextProvider = ({ children, numberOfAudioTags }) => {
    const audios = (0, import_react50.useRef)([]);
    const [initialNumberOfAudioTags] = (0, import_react50.useState)(numberOfAudioTags);
    if (numberOfAudioTags !== initialNumberOfAudioTags) {
      throw new Error("The number of shared audio tags has changed dynamically. Once you have set this property, you cannot change it afterwards.");
    }
    const logLevel = useLogLevel();
    const mountTime = useMountTime();
    const env = useRemotionEnvironment();
    const audioCtx = (0, import_react50.useContext)(SharedAudioContext);
    const audioContext = audioCtx?.audioContext ?? null;
    const resume = audioCtx?.resume;
    const [refs] = (0, import_react50.useState)(() => {
      return new Array(numberOfAudioTags).fill(true).map(() => {
        const ref = (0, import_react50.createRef)();
        return {
          id: Math.random(),
          ref,
          mediaElementSourceNode: makeSharedElementSourceNode({
            audioContext,
            ref
          })
        };
      });
    });
    for (const { mediaElementSourceNode } of refs) {
      mediaElementSourceNode?.setAudioContext(audioContext);
    }
    const effectToUse = import_react50.default.useInsertionEffect ?? import_react50.default.useLayoutEffect;
    effectToUse(() => {
      return () => {
        requestAnimationFrame(() => {
          refs.forEach(({ mediaElementSourceNode }) => {
            mediaElementSourceNode?.cleanup();
          });
        });
      };
    }, [refs]);
    const takenAudios = (0, import_react50.useRef)(new Array(numberOfAudioTags).fill(false));
    const rerenderAudios = (0, import_react50.useCallback)(() => {
      refs.forEach(({ ref, id }) => {
        const data = audios.current?.find((a22) => a22.id === id);
        const { current } = ref;
        if (!current) {
          return;
        }
        if (data === void 0) {
          if (current.src !== EMPTY_AUDIO) {
            current.src = EMPTY_AUDIO;
          }
          return;
        }
        if (!data) {
          throw new TypeError("Expected audio data to be there");
        }
        Object.keys(data.props).forEach((key) => {
          if (didPropChange(key, data.props[key], current[key])) {
            current[key] = data.props[key];
          }
        });
      });
    }, [refs]);
    const registerAudio = (0, import_react50.useCallback)((options) => {
      const { aud, audioId, premounting, postmounting } = options;
      const found = audios.current?.find((a22) => a22.audioId === audioId);
      if (found) {
        return found;
      }
      const firstFreeAudio = takenAudios.current.findIndex((a22) => a22 === false);
      if (firstFreeAudio === -1) {
        throw new Error(`Tried to simultaneously mount ${numberOfAudioTags + 1} <Html5Audio /> tags at the same time. With the current settings, the maximum amount of <Html5Audio /> tags is limited to ${numberOfAudioTags} at the same time. Remotion pre-mounts silent audio tags to help avoid browser autoplay restrictions. See https://remotion.dev/docs/player/autoplay#using-the-numberofsharedaudiotags-prop for more information on how to increase this limit.`);
      }
      const { id, ref, mediaElementSourceNode } = refs[firstFreeAudio];
      const cloned = [...takenAudios.current];
      cloned[firstFreeAudio] = id;
      takenAudios.current = cloned;
      const newElem = {
        props: aud,
        id,
        el: ref,
        audioId,
        mediaElementSourceNode,
        premounting,
        audioMounted: Boolean(ref.current),
        postmounting,
        cleanupOnMediaTagUnmount: () => {
        }
      };
      audios.current?.push(newElem);
      rerenderAudios();
      return newElem;
    }, [numberOfAudioTags, refs, rerenderAudios]);
    const unregisterAudio = (0, import_react50.useCallback)((id) => {
      const cloned = [...takenAudios.current];
      const index = refs.findIndex((r) => r.id === id);
      if (index === -1) {
        throw new TypeError(`Unknown audio ref ${id}; refs: ${refs.map((r) => r.id).join(", ")}`);
      }
      cloned[index] = false;
      takenAudios.current = cloned;
      audios.current = audios.current?.filter((a22) => a22.id !== id);
      rerenderAudios();
    }, [refs, rerenderAudios]);
    const updateAudio = (0, import_react50.useCallback)(({
      aud,
      audioId,
      id,
      premounting,
      postmounting
    }) => {
      let changed = false;
      audios.current = audios.current?.map((prevA) => {
        const audioMounted = Boolean(prevA.el.current);
        if (prevA.audioMounted !== audioMounted) {
          changed = true;
        }
        if (prevA.id === id) {
          const isTheSame = compareProps(aud, prevA.props) && prevA.premounting === premounting && prevA.postmounting === postmounting;
          if (isTheSame) {
            return prevA.audioMounted === audioMounted ? prevA : { ...prevA, audioMounted };
          }
          changed = true;
          return {
            ...prevA,
            props: aud,
            premounting,
            postmounting,
            audioId,
            audioMounted
          };
        }
        return prevA.audioMounted === audioMounted ? prevA : { ...prevA, audioMounted };
      });
      if (changed) {
        rerenderAudios();
      }
    }, [rerenderAudios]);
    const playAllAudios = (0, import_react50.useCallback)(() => {
      refs.forEach((ref) => {
        const audio = audios.current.find((a22) => a22.el === ref.ref);
        if (audio?.premounting) {
          return;
        }
        playAndHandleNotAllowedError({
          mediaRef: ref.ref,
          mediaType: "audio",
          onAutoPlayError: null,
          logLevel,
          mountTime,
          reason: "playing all audios",
          isPlayer: env.isPlayer
        });
      });
      resume?.();
    }, [logLevel, mountTime, refs, env.isPlayer, resume]);
    const audioTagsValue = (0, import_react50.useMemo)(() => {
      return {
        registerAudio,
        unregisterAudio,
        updateAudio,
        playAllAudios,
        numberOfAudioTags
      };
    }, [
      numberOfAudioTags,
      playAllAudios,
      registerAudio,
      unregisterAudio,
      updateAudio
    ]);
    const sharedAudioTagElements = (0, import_react50.useMemo)(() => {
      return refs.map(({ id, ref }) => {
        return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("audio", {
          ref,
          preload: "metadata",
          src: EMPTY_AUDIO
        }, id);
      });
    }, [refs]);
    return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(SharedAudioTagsContext.Provider, {
      value: audioTagsValue,
      children: [
        sharedAudioTagElements,
        children
      ]
    });
  };
  var useSharedAudio = ({
    aud,
    audioId,
    premounting,
    postmounting
  }) => {
    const audioCtx = (0, import_react50.useContext)(SharedAudioContext);
    const tagsCtx = (0, import_react50.useContext)(SharedAudioTagsContext);
    const [elem] = (0, import_react50.useState)(() => {
      if (tagsCtx && tagsCtx.numberOfAudioTags > 0) {
        return tagsCtx.registerAudio({ aud, audioId, premounting, postmounting });
      }
      const el = import_react50.default.createRef();
      const mediaElementSourceNode = makeSharedElementSourceNode({
        audioContext: audioCtx?.audioContext ?? null,
        ref: el
      });
      return {
        el,
        id: Math.random(),
        props: aud,
        audioId,
        mediaElementSourceNode,
        premounting,
        audioMounted: Boolean(el.current),
        postmounting,
        cleanupOnMediaTagUnmount: () => {
          mediaElementSourceNode?.cleanup();
        }
      };
    });
    elem.mediaElementSourceNode?.setAudioContext(audioCtx?.audioContext ?? null);
    const effectToUse = import_react50.default.useInsertionEffect ?? import_react50.default.useLayoutEffect;
    if (typeof document !== "undefined") {
      effectToUse(() => {
        if (tagsCtx && tagsCtx.numberOfAudioTags > 0) {
          tagsCtx.updateAudio({
            id: elem.id,
            aud,
            audioId,
            premounting,
            postmounting
          });
        }
      }, [aud, tagsCtx, elem.id, audioId, premounting, postmounting]);
      effectToUse(() => {
        return () => {
          if (tagsCtx && tagsCtx.numberOfAudioTags > 0) {
            tagsCtx.unregisterAudio(elem.id);
          }
        };
      }, [tagsCtx, elem.id]);
    }
    return elem;
  };
  var FLOATING_POINT_ERROR_THRESHOLD = 1e-5;
  var isApproximatelyTheSame = (num1, num2) => {
    return Math.abs(num1 - num2) < FLOATING_POINT_ERROR_THRESHOLD;
  };
  var toSeconds = (time, fps) => {
    return Math.round(time / fps * 100) / 100;
  };
  var isSafari = () => {
    if (typeof window === "undefined") {
      return false;
    }
    const isAppleWebKit = /AppleWebKit/.test(window.navigator.userAgent);
    if (!isAppleWebKit) {
      return false;
    }
    const isNotChrome = !window.navigator.userAgent.includes("Chrome/");
    return isNotChrome;
  };
  var isIosSafari = () => {
    if (typeof window === "undefined") {
      return false;
    }
    const isIpadIPodIPhone = /iP(ad|od|hone)/i.test(window.navigator.userAgent);
    return isIpadIPodIPhone && isSafari();
  };
  var isIOSSafariAndBlob = (actualSrc) => {
    return isIosSafari() && actualSrc.startsWith("blob:");
  };
  var getVideoFragmentStart = ({
    actualFrom,
    fps
  }) => {
    return toSeconds(Math.max(0, -actualFrom), fps);
  };
  var getVideoFragmentEnd = ({
    duration,
    fps
  }) => {
    return toSeconds(duration, fps);
  };
  var appendVideoFragment = ({
    actualSrc,
    actualFrom,
    duration,
    fps
  }) => {
    if (isIOSSafariAndBlob(actualSrc)) {
      return actualSrc;
    }
    if (actualSrc.startsWith("data:")) {
      return actualSrc;
    }
    const existingHash = Boolean(new URL(actualSrc, (typeof window === "undefined" ? null : window.location.href) ?? "http://localhost:3000").hash);
    if (existingHash) {
      return actualSrc;
    }
    if (!Number.isFinite(actualFrom)) {
      return actualSrc;
    }
    const withStartHash = `${actualSrc}#t=${getVideoFragmentStart({ actualFrom, fps })}`;
    if (!Number.isFinite(duration)) {
      return withStartHash;
    }
    return `${withStartHash},${getVideoFragmentEnd({ duration, fps })}`;
  };
  var isSubsetOfDuration = ({
    prevStartFrom,
    newStartFrom,
    prevDuration,
    newDuration,
    fps
  }) => {
    const previousFrom = getVideoFragmentStart({ actualFrom: prevStartFrom, fps });
    const newFrom = getVideoFragmentStart({ actualFrom: newStartFrom, fps });
    const previousEnd = getVideoFragmentEnd({ duration: prevDuration, fps });
    const newEnd = getVideoFragmentEnd({ duration: newDuration, fps });
    if (newFrom < previousFrom) {
      return false;
    }
    if (newEnd > previousEnd) {
      return false;
    }
    return true;
  };
  var useAppendVideoFragment = ({
    actualSrc: initialActualSrc,
    actualFrom: initialActualFrom,
    duration: initialDuration,
    fps
  }) => {
    const actualFromRef = (0, import_react52.useRef)(initialActualFrom);
    const actualDuration = (0, import_react52.useRef)(initialDuration);
    const actualSrc = (0, import_react52.useRef)(initialActualSrc);
    if (!isSubsetOfDuration({
      prevStartFrom: actualFromRef.current,
      newStartFrom: initialActualFrom,
      prevDuration: actualDuration.current,
      newDuration: initialDuration,
      fps
    }) || initialActualSrc !== actualSrc.current) {
      actualFromRef.current = initialActualFrom;
      actualDuration.current = initialDuration;
      actualSrc.current = initialActualSrc;
    }
    const appended = appendVideoFragment({
      actualSrc: actualSrc.current,
      actualFrom: actualFromRef.current,
      duration: actualDuration.current,
      fps
    });
    return appended;
  };
  var warned2 = false;
  var warnSafariOnce = (logLevel) => {
    if (warned2) {
      return;
    }
    warned2 = true;
    Log.warn({ logLevel, tag: null }, "In Safari, setting a volume and a playback rate at the same time is buggy.");
    Log.warn({ logLevel, tag: null }, "In Desktop Safari, only volumes <= 1 will be applied.");
    Log.warn({ logLevel, tag: null }, logLevel, "In Mobile Safari, the volume will be ignored and set to 1 if a playbackRate is set.");
  };
  var useVolume = ({
    mediaRef,
    volume,
    logLevel,
    source,
    shouldUseWebAudioApi
  }) => {
    const audioStuffRef = (0, import_react49.useRef)(null);
    const currentVolumeRef = (0, import_react49.useRef)(volume);
    currentVolumeRef.current = volume;
    const sharedAudioContext = (0, import_react49.useContext)(SharedAudioContext);
    if (!sharedAudioContext) {
      throw new Error("useAmplification must be used within a SharedAudioContext");
    }
    const { audioContext, gainNode: masterGainNode } = sharedAudioContext;
    if (typeof window !== "undefined") {
      (0, import_react49.useLayoutEffect)(() => {
        if (!audioContext) {
          return;
        }
        if (!mediaRef.current) {
          return;
        }
        if (!shouldUseWebAudioApi) {
          return;
        }
        if (mediaRef.current.playbackRate !== 1 && isSafari()) {
          warnSafariOnce(logLevel);
          return;
        }
        if (!source) {
          return;
        }
        if (!masterGainNode) {
          return;
        }
        const gainNode = new GainNode(audioContext, {
          gain: currentVolumeRef.current
        });
        source.attemptToConnect();
        source.get().connect(gainNode);
        gainNode.connect(masterGainNode);
        audioStuffRef.current = {
          gainNode
        };
        Log.trace({ logLevel, tag: null }, `Starting to amplify ${mediaRef.current?.src}. Gain = ${currentVolumeRef.current}, playbackRate = ${mediaRef.current?.playbackRate}`);
        return () => {
          audioStuffRef.current = null;
          gainNode.disconnect();
          source.get().disconnect();
        };
      }, [
        logLevel,
        mediaRef,
        audioContext,
        source,
        shouldUseWebAudioApi,
        masterGainNode
      ]);
    }
    if (audioStuffRef.current) {
      const valueToSet = volume;
      if (!isApproximatelyTheSame(audioStuffRef.current.gainNode.gain.value, valueToSet)) {
        audioStuffRef.current.gainNode.gain.value = valueToSet;
        Log.trace({ logLevel, tag: null }, `Setting gain to ${valueToSet} for ${mediaRef.current?.src}`);
      }
    }
    const safariCase = isSafari() && mediaRef.current && mediaRef.current?.playbackRate !== 1;
    const shouldUseTraditionalVolume = safariCase || !shouldUseWebAudioApi;
    if (shouldUseTraditionalVolume && mediaRef.current && !isApproximatelyTheSame(volume, mediaRef.current?.volume)) {
      mediaRef.current.volume = Math.min(volume, 1);
    }
    return audioStuffRef;
  };
  var useMediaStartsAt = () => {
    const parentSequence = (0, import_react54.useContext)(SequenceContext);
    return parentSequence?.cumulatedNegativeFrom ?? 0;
  };
  var useFrameForVolumeProp = (behavior) => {
    const loop = Loop.useLoop();
    const frame = useCurrentFrame();
    const startsAt = useMediaStartsAt();
    if (behavior === "repeat" || loop === null) {
      return frame + startsAt;
    }
    return frame + startsAt + loop.durationInFrames * loop.iteration;
  };
  var getAssetDisplayName = (filename) => {
    if (/data:|blob:/.test(filename.substring(0, 5))) {
      return "Data URL";
    }
    const splitted = filename.split("/").map((s) => s.split("\\")).flat(1);
    return splitted[splitted.length - 1];
  };
  var getTimelineDuration = ({
    compositionDurationInFrames,
    playbackRate,
    trimBefore,
    trimAfter,
    parentSequenceDurationInFrames,
    loop
  }) => {
    if (loop) {
      return compositionDurationInFrames;
    }
    const mediaDuration = calculateMediaDuration({
      mediaDurationInFrames: compositionDurationInFrames * playbackRate + (trimBefore ?? 0),
      playbackRate,
      trimBefore,
      trimAfter
    });
    if (parentSequenceDurationInFrames !== null) {
      const cappedDuration = Math.min(parentSequenceDurationInFrames, mediaDuration);
      return Number(cappedDuration.toFixed(10));
    }
    return mediaDuration;
  };
  var evaluateVolume = ({
    frame,
    volume,
    mediaVolume = 1
  }) => {
    if (typeof volume === "number") {
      return volume * mediaVolume;
    }
    if (typeof volume === "undefined") {
      return Number(mediaVolume);
    }
    const evaluated = volume(frame) * mediaVolume;
    if (typeof evaluated !== "number") {
      throw new TypeError(`You passed in a a function to the volume prop but it did not return a number but a value of type ${typeof evaluated} for frame ${frame}`);
    }
    if (Number.isNaN(evaluated)) {
      throw new TypeError(`You passed in a function to the volume prop but it returned NaN for frame ${frame}.`);
    }
    if (!Number.isFinite(evaluated)) {
      throw new TypeError(`You passed in a function to the volume prop but it returned a non-finite number for frame ${frame}.`);
    }
    return Math.max(0, evaluated);
  };
  var didWarn = {};
  var warnOnce2 = (message) => {
    if (didWarn[message]) {
      return;
    }
    console.warn(message);
    didWarn[message] = true;
  };
  var useBasicMediaInTimeline = ({
    volume,
    mediaVolume,
    mediaType,
    src,
    displayName,
    trimBefore,
    trimAfter,
    playbackRate,
    sequenceDurationInFrames,
    mediaStartsAt,
    loop
  }) => {
    if (!src) {
      throw new Error("No src passed");
    }
    const parentSequence = (0, import_react53.useContext)(SequenceContext);
    const [initialVolume] = (0, import_react53.useState)(() => volume);
    const duration = getTimelineDuration({
      compositionDurationInFrames: sequenceDurationInFrames,
      playbackRate,
      trimBefore,
      trimAfter,
      parentSequenceDurationInFrames: parentSequence?.durationInFrames ?? null,
      loop
    });
    const volumes = (0, import_react53.useMemo)(() => {
      if (typeof volume === "number") {
        return volume;
      }
      return new Array(Math.floor(Math.max(0, duration + mediaStartsAt))).fill(true).map((_, i) => {
        return evaluateVolume({
          frame: i + mediaStartsAt,
          volume,
          mediaVolume
        });
      }).join(",");
    }, [duration, mediaStartsAt, volume, mediaVolume]);
    (0, import_react53.useEffect)(() => {
      if (typeof volume === "number" && volume !== initialVolume) {
        warnOnce2(`Remotion: The ${mediaType} with src ${src} has changed it's volume. Prefer the callback syntax for setting volume to get better timeline display: https://www.remotion.dev/docs/audio/volume`);
      }
    }, [initialVolume, mediaType, src, volume]);
    const doesVolumeChange = typeof volume === "function";
    const nonce = useNonce();
    const startMediaFrom = 0 - mediaStartsAt + (trimBefore ?? 0);
    const memoizedResult = (0, import_react53.useMemo)(() => {
      return {
        volumes,
        duration,
        doesVolumeChange,
        nonce,
        finalDisplayName: displayName ?? getAssetDisplayName(src),
        startMediaFrom,
        src,
        playbackRate
      };
    }, [
      volumes,
      duration,
      doesVolumeChange,
      nonce,
      displayName,
      src,
      startMediaFrom,
      playbackRate
    ]);
    return memoizedResult;
  };
  var useMediaInTimeline = ({
    volume,
    mediaVolume,
    src,
    mediaType,
    playbackRate,
    displayName,
    id,
    getStack,
    showInTimeline,
    premountDisplay,
    postmountDisplay,
    loopDisplay,
    documentationLink,
    refForOutline
  }) => {
    const parentSequence = (0, import_react53.useContext)(SequenceContext);
    const startsAt = useMediaStartsAt();
    const { registerSequence, unregisterSequence } = (0, import_react53.useContext)(SequenceManager);
    const { durationInFrames } = useVideoConfig();
    const mediaStartsAt = useMediaStartsAt();
    const { volumes, duration, doesVolumeChange, nonce, finalDisplayName } = useBasicMediaInTimeline({
      volume,
      mediaVolume,
      mediaType,
      src,
      displayName,
      trimAfter: void 0,
      trimBefore: void 0,
      playbackRate,
      sequenceDurationInFrames: durationInFrames,
      mediaStartsAt,
      loop: false
    });
    const { isStudio } = useRemotionEnvironment();
    (0, import_react53.useEffect)(() => {
      if (!src) {
        throw new Error("No src passed");
      }
      if (!isStudio && window.process?.env?.NODE_ENV !== "test") {
        return;
      }
      if (!showInTimeline) {
        return;
      }
      registerSequence({
        type: mediaType,
        src,
        id,
        duration,
        from: 0,
        trimBefore: null,
        parent: parentSequence?.id ?? null,
        displayName: finalDisplayName,
        documentationLink,
        volume: volumes,
        showInTimeline: true,
        nonce: nonce.get(),
        startMediaFrom: 0 - startsAt,
        mediaFrameAtSequenceZero: null,
        doesVolumeChange,
        loopDisplay,
        playbackRate,
        getStack,
        premountDisplay,
        postmountDisplay,
        controls: null,
        effects: [],
        refForOutline,
        isInsideSeries: false,
        frozenFrame: null,
        frozenMediaFrame: null
      });
      return () => {
        unregisterSequence(id);
      };
    }, [
      duration,
      id,
      parentSequence,
      src,
      registerSequence,
      unregisterSequence,
      volumes,
      doesVolumeChange,
      nonce,
      mediaType,
      startsAt,
      playbackRate,
      getStack,
      showInTimeline,
      premountDisplay,
      postmountDisplay,
      loopDisplay,
      documentationLink,
      finalDisplayName,
      isStudio,
      refForOutline
    ]);
  };
  var useBufferManager = (logLevel, mountTime) => {
    const [blocks, setBlocks] = (0, import_react58.useState)([]);
    const onBufferingCallbacks = (0, import_react58.useRef)([]);
    const onResumeCallbacks = (0, import_react58.useRef)([]);
    const env = useRemotionEnvironment();
    const rendering = env.isRendering;
    const buffering = (0, import_react58.useRef)(false);
    const addBlock = (0, import_react58.useCallback)((block) => {
      if (rendering) {
        return {
          unblock: () => {
            return;
          }
        };
      }
      let unblocked = false;
      setBlocks((b22) => [...b22, block]);
      return {
        unblock: () => {
          if (unblocked) {
            return;
          }
          unblocked = true;
          setBlocks((b22) => {
            const newArr = b22.filter((bx) => bx !== block);
            if (newArr.length === b22.length) {
              return b22;
            }
            return newArr;
          });
        }
      };
    }, [rendering]);
    const listenForBuffering = (0, import_react58.useCallback)((callback) => {
      onBufferingCallbacks.current = [
        ...onBufferingCallbacks.current,
        callback
      ];
      return {
        remove: () => {
          onBufferingCallbacks.current = onBufferingCallbacks.current.filter((cb) => cb !== callback);
        }
      };
    }, []);
    const listenForResume = (0, import_react58.useCallback)((callback) => {
      onResumeCallbacks.current = [...onResumeCallbacks.current, callback];
      return {
        remove: () => {
          onResumeCallbacks.current = onResumeCallbacks.current.filter((cb) => cb !== callback);
        }
      };
    }, []);
    (0, import_react58.useEffect)(() => {
      if (rendering) {
        return;
      }
      if (blocks.length > 0 && !buffering.current) {
        buffering.current = true;
        [...onBufferingCallbacks.current].forEach((c22) => c22());
        playbackLogging({
          logLevel,
          message: "Player is entering buffer state",
          mountTime,
          tag: "player"
        });
      }
    }, [blocks]);
    if (typeof window !== "undefined") {
      (0, import_react58.useLayoutEffect)(() => {
        if (rendering) {
          return;
        }
        if (blocks.length === 0 && buffering.current) {
          buffering.current = false;
          [...onResumeCallbacks.current].forEach((c22) => c22());
          playbackLogging({
            logLevel,
            message: "Player is exiting buffer state",
            mountTime,
            tag: "player"
          });
        }
      }, [blocks]);
    }
    return (0, import_react58.useMemo)(() => {
      return { addBlock, listenForBuffering, listenForResume, buffering };
    }, [addBlock, buffering, listenForBuffering, listenForResume]);
  };
  var BufferingContextReact = import_react58.default.createContext(null);
  var BufferingProvider = ({ children }) => {
    const { logLevel, mountTime } = (0, import_react58.useContext)(LogLevelContext);
    const bufferManager = useBufferManager(logLevel ?? "info", mountTime);
    return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(BufferingContextReact.Provider, {
      value: bufferManager,
      children
    });
  };
  var useIsPlayerBuffering = (bufferManager) => {
    const [isBuffering, setIsBuffering] = (0, import_react58.useState)(bufferManager.buffering.current);
    (0, import_react58.useEffect)(() => {
      const onBuffer = () => {
        setIsBuffering(true);
      };
      const onResume = () => {
        setIsBuffering(false);
      };
      const buffer = bufferManager.listenForBuffering(onBuffer);
      const resume = bufferManager.listenForResume(onResume);
      return () => {
        buffer.remove();
        resume.remove();
      };
    }, [bufferManager]);
    return isBuffering;
  };
  var useBufferState = () => {
    const buffer = (0, import_react57.useContext)(BufferingContextReact);
    const logLevel = useLogLevel();
    const addBlock = buffer ? buffer.addBlock : null;
    return (0, import_react57.useMemo)(() => ({
      delayPlayback: () => {
        if (!addBlock) {
          throw new Error("Tried to enable the buffering state, but a Remotion context was not found. This API can only be called in a component that was passed to the Remotion Player or a <Composition>. Or you might have experienced a version mismatch - run `npx remotion versions` and ensure all packages have the same version. This error is thrown by the buffer state https://remotion.dev/docs/player/buffer-state");
        }
        Log.trace({ logLevel, tag: "[buffer-state]" }, "Adding buffer handle", new Error().stack);
        const { unblock } = addBlock({
          id: String(Math.random())
        });
        let unblocked = false;
        return {
          unblock: () => {
            if (unblocked) {
              return;
            }
            unblocked = true;
            Log.trace({ logLevel, tag: "[buffer-state]" }, "Removing buffer handle");
            unblock();
          }
        };
      }
    }), [addBlock, logLevel]);
  };
  var isSafariWebkit = () => {
    const isSafari2 = /^((?!chrome|android).)*safari/i.test(window.navigator.userAgent);
    return isSafari2;
  };
  var useBufferUntilFirstFrame = ({
    mediaRef,
    mediaType,
    onVariableFpsVideoDetected,
    pauseWhenBuffering,
    logLevel,
    mountTime
  }) => {
    const bufferingRef = (0, import_react56.useRef)(false);
    const { delayPlayback } = useBufferState();
    const bufferUntilFirstFrame = (0, import_react56.useCallback)((requestedTime) => {
      if (mediaType !== "video") {
        return;
      }
      if (!pauseWhenBuffering) {
        return;
      }
      const current = mediaRef.current;
      if (!current) {
        return;
      }
      if (current.readyState >= current.HAVE_FUTURE_DATA && !isSafariWebkit()) {
        playbackLogging({
          logLevel,
          message: `Not using buffer until first frame, because readyState is ${current.readyState} and is not Safari or Desktop Chrome`,
          mountTime,
          tag: "buffer"
        });
        return;
      }
      if (!current.requestVideoFrameCallback) {
        playbackLogging({
          logLevel,
          message: `Not using buffer until first frame, because requestVideoFrameCallback is not supported`,
          mountTime,
          tag: "buffer"
        });
        return;
      }
      bufferingRef.current = true;
      playbackLogging({
        logLevel,
        message: `Buffering ${mediaRef.current?.src} until the first frame is received`,
        mountTime,
        tag: "buffer"
      });
      const playback = delayPlayback();
      const unblock = () => {
        playback.unblock();
        current.removeEventListener("ended", unblock, {
          once: true
        });
        current.removeEventListener("pause", unblock, {
          once: true
        });
        bufferingRef.current = false;
      };
      const onEndedOrPauseOrCanPlay = () => {
        unblock();
      };
      current.requestVideoFrameCallback((_, info2) => {
        const differenceFromRequested = Math.abs(info2.mediaTime - requestedTime);
        if (differenceFromRequested > 0.5) {
          onVariableFpsVideoDetected();
        }
        unblock();
      });
      current.addEventListener("ended", onEndedOrPauseOrCanPlay, { once: true });
      current.addEventListener("pause", onEndedOrPauseOrCanPlay, { once: true });
      current.addEventListener("canplay", onEndedOrPauseOrCanPlay, {
        once: true
      });
    }, [
      delayPlayback,
      logLevel,
      mediaRef,
      mediaType,
      mountTime,
      onVariableFpsVideoDetected,
      pauseWhenBuffering
    ]);
    return (0, import_react56.useMemo)(() => {
      return {
        isBuffering: () => bufferingRef.current,
        bufferUntilFirstFrame
      };
    }, [bufferUntilFirstFrame]);
  };
  var getMediaSyncAction = (input) => {
    const {
      duration,
      currentTime,
      paused,
      ended,
      desiredUnclampedTime,
      mediaTagTime,
      mediaTagLastUpdate,
      rvcTime,
      rvcLastUpdate,
      isVariableFpsVideo,
      acceptableTimeShift,
      lastSeekDueToShift,
      playing,
      playbackRate,
      mediaTagBufferingOrStalled,
      playerBuffering,
      absoluteFrame,
      onlyWarnForMediaSeekingError,
      isPremounting,
      isPostmounting,
      pauseWhenBuffering
    } = input;
    const shouldBeTime = !Number.isNaN(duration) && Number.isFinite(duration) ? Math.min(duration, desiredUnclampedTime) : desiredUnclampedTime;
    const timeShiftMediaTag = Math.abs(shouldBeTime - mediaTagTime);
    const timeShiftRvcTag = rvcTime ? Math.abs(shouldBeTime - rvcTime) : null;
    const mostRecentTimeshift = rvcLastUpdate && rvcTime > mediaTagLastUpdate ? timeShiftRvcTag : timeShiftMediaTag;
    const timeShift = timeShiftRvcTag && !isVariableFpsVideo ? mostRecentTimeshift : timeShiftMediaTag;
    if (timeShift > acceptableTimeShift && lastSeekDueToShift !== shouldBeTime) {
      return {
        type: "seek-due-to-shift",
        shouldBeTime,
        why: `because time shift is too big. shouldBeTime = ${shouldBeTime}, isTime = ${mediaTagTime}, requestVideoCallbackTime = ${rvcTime}, timeShift = ${timeShift}${isVariableFpsVideo ? ", isVariableFpsVideo = true" : ""}, isPremounting = ${isPremounting}, isPostmounting = ${isPostmounting}, pauseWhenBuffering = ${pauseWhenBuffering}`,
        bufferUntilFirstFrame: playing && playbackRate > 0,
        playReason: playing && paused ? "player is playing but media tag is paused, and just seeked" : null,
        warnAboutNonSeekable: !onlyWarnForMediaSeekingError
      };
    }
    const seekThreshold = playing ? 0.15 : 0.01;
    const makesSenseToSeek = Math.abs(currentTime - shouldBeTime) > seekThreshold;
    const isSomethingElseBuffering = playerBuffering && !mediaTagBufferingOrStalled;
    if (!playing || isSomethingElseBuffering) {
      return {
        type: "seek-if-not-playing",
        shouldBeTime,
        why: makesSenseToSeek ? `not playing or something else is buffering. time offset is over seek threshold (${seekThreshold})` : null
      };
    }
    if (!playing || playerBuffering) {
      return { type: "none" };
    }
    const pausedCondition = paused && !ended;
    const firstFrameCondition = absoluteFrame === 0;
    if (pausedCondition || firstFrameCondition) {
      const reason = pausedCondition ? "media tag is paused" : "absolute frame is 0";
      return {
        type: "play-and-seek",
        shouldBeTime,
        why: makesSenseToSeek ? `is over timeshift threshold (threshold = ${seekThreshold}) and ${reason}` : null,
        playReason: `player is playing and ${reason}`,
        bufferUntilFirstFrame: !isVariableFpsVideo && playbackRate > 0
      };
    }
    return { type: "none" };
  };
  var useCurrentTimeOfMediaTagWithUpdateTimeStamp = (mediaRef) => {
    const lastUpdate = import_react59.default.useRef({
      time: mediaRef.current?.currentTime ?? 0,
      lastUpdate: performance.now()
    });
    const nowCurrentTime = mediaRef.current?.currentTime ?? null;
    if (nowCurrentTime !== null) {
      if (lastUpdate.current.time !== nowCurrentTime) {
        lastUpdate.current.time = nowCurrentTime;
        lastUpdate.current.lastUpdate = performance.now();
      }
    }
    return lastUpdate;
  };
  var seek = ({
    mediaRef,
    time,
    logLevel,
    why,
    mountTime
  }) => {
    const timeToSet = isIosSafari() ? Number(time.toFixed(1)) : time;
    playbackLogging({
      logLevel,
      tag: "seek",
      message: `Seeking from ${mediaRef.currentTime} to ${timeToSet}. src= ${mediaRef.src} Reason: ${why}`,
      mountTime
    });
    mediaRef.currentTime = timeToSet;
    return timeToSet;
  };
  var useMediaBuffering = ({
    element,
    shouldBuffer,
    isPremounting,
    isPostmounting,
    logLevel,
    mountTime,
    src
  }) => {
    const buffer = useBufferState();
    const [isBuffering, setIsBuffering] = (0, import_react60.useState)(false);
    (0, import_react60.useEffect)(() => {
      let cleanupFns = [];
      const { current } = element;
      if (!current) {
        return;
      }
      if (!shouldBuffer) {
        return;
      }
      if (isPremounting || isPostmounting) {
        if ((isPremounting || isPostmounting) && current.readyState < current.HAVE_FUTURE_DATA) {
          if (!navigator.userAgent.includes("Firefox/")) {
            playbackLogging({
              logLevel,
              message: `Calling .load() on ${current.src} because readyState is ${current.readyState} and it is not Firefox. Element is premounted ${current.playbackRate}`,
              tag: "load",
              mountTime
            });
            const previousPlaybackRate = current.playbackRate;
            current.load();
            current.playbackRate = previousPlaybackRate;
          }
        }
        return;
      }
      const cleanup = (reason) => {
        let didDoSomething = false;
        cleanupFns.forEach((fn) => {
          fn(reason);
          didDoSomething = true;
        });
        cleanupFns = [];
        setIsBuffering((previous) => {
          if (previous) {
            didDoSomething = true;
          }
          return false;
        });
        if (didDoSomething) {
          playbackLogging({
            logLevel,
            message: `Unmarking as buffering: ${current.src}. Reason: ${reason}`,
            tag: "buffer",
            mountTime
          });
        }
      };
      const blockMedia = (reason) => {
        setIsBuffering(true);
        playbackLogging({
          logLevel,
          message: `Marking as buffering: ${current.src}. Reason: ${reason}`,
          tag: "buffer",
          mountTime
        });
        const { unblock } = buffer.delayPlayback();
        const onCanPlay = () => {
          cleanup('"canplay" was fired');
          init();
        };
        const onError = () => {
          cleanup('"error" event was occurred');
          init();
        };
        current.addEventListener("canplay", onCanPlay, {
          once: true
        });
        cleanupFns.push(() => {
          current.removeEventListener("canplay", onCanPlay);
        });
        current.addEventListener("error", onError, {
          once: true
        });
        cleanupFns.push(() => {
          current.removeEventListener("error", onError);
        });
        cleanupFns.push((cleanupReason) => {
          playbackLogging({
            logLevel,
            message: `Unblocking ${current.src} from buffer. Reason: ${cleanupReason}`,
            tag: "buffer",
            mountTime
          });
          unblock();
        });
      };
      const init = () => {
        if (current.readyState < current.HAVE_FUTURE_DATA) {
          blockMedia(`readyState is ${current.readyState}, which is less than HAVE_FUTURE_DATA`);
          if (!navigator.userAgent.includes("Firefox/")) {
            playbackLogging({
              logLevel,
              message: `Calling .load() on ${src} because readyState is ${current.readyState} and it is not Firefox. ${current.playbackRate}`,
              tag: "load",
              mountTime
            });
            const previousPlaybackRate = current.playbackRate;
            current.load();
            current.playbackRate = previousPlaybackRate;
          }
        } else {
          const onWaiting = () => {
            blockMedia('"waiting" event was fired');
          };
          current.addEventListener("waiting", onWaiting);
          cleanupFns.push(() => {
            current.removeEventListener("waiting", onWaiting);
          });
        }
      };
      init();
      return () => {
        cleanup("element was unmounted or prop changed");
      };
    }, [
      buffer,
      src,
      element,
      isPremounting,
      isPostmounting,
      logLevel,
      shouldBuffer,
      mountTime
    ]);
    return isBuffering;
  };
  var useRequestVideoCallbackTime = ({
    mediaRef,
    mediaType,
    lastSeek,
    onVariableFpsVideoDetected
  }) => {
    const currentTime = (0, import_react61.useRef)(null);
    (0, import_react61.useEffect)(() => {
      const { current } = mediaRef;
      if (current) {
        currentTime.current = {
          time: current.currentTime,
          lastUpdate: performance.now()
        };
      } else {
        currentTime.current = null;
        return;
      }
      if (mediaType !== "video") {
        currentTime.current = null;
        return;
      }
      const videoTag = current;
      if (!videoTag.requestVideoFrameCallback) {
        return;
      }
      let cancel = () => {
        return;
      };
      const request = () => {
        if (!videoTag) {
          return;
        }
        const cb = videoTag.requestVideoFrameCallback((_, info2) => {
          if (currentTime.current !== null) {
            const difference = Math.abs(currentTime.current.time - info2.mediaTime);
            const differenceToLastSeek = Math.abs(lastSeek.current === null ? Infinity : info2.mediaTime - lastSeek.current);
            if (difference > 0.5 && differenceToLastSeek > 0.5 && info2.mediaTime > currentTime.current.time) {
              onVariableFpsVideoDetected();
            }
          }
          currentTime.current = {
            time: info2.mediaTime,
            lastUpdate: performance.now()
          };
          request();
        });
        cancel = () => {
          videoTag.cancelVideoFrameCallback(cb);
          cancel = () => {
            return;
          };
        };
      };
      request();
      return () => {
        cancel();
      };
    }, [lastSeek, mediaRef, mediaType, onVariableFpsVideoDetected]);
    return currentTime;
  };
  var getExpectedMediaFrameUncorrected = ({
    frame,
    playbackRate,
    startFrom
  }) => {
    return interpolate(frame, [-1, startFrom, startFrom + 1], [-1, startFrom, startFrom + playbackRate]);
  };
  var getMediaTime = ({
    fps,
    frame,
    playbackRate,
    startFrom
  }) => {
    const expectedFrame = getExpectedMediaFrameUncorrected({
      frame,
      playbackRate,
      startFrom
    });
    const msPerFrame = 1e3 / fps;
    return expectedFrame * msPerFrame / 1e3;
  };
  var alreadyWarned = {};
  var warnAboutNonSeekableMedia = (ref, type) => {
    if (ref === null) {
      return;
    }
    if (ref.seekable.length === 0) {
      return;
    }
    if (ref.seekable.length > 1) {
      return;
    }
    if (alreadyWarned[ref.src]) {
      return;
    }
    const range = { start: ref.seekable.start(0), end: ref.seekable.end(0) };
    if (range.start === 0 && range.end === 0) {
      const msg = [
        `The media ${ref.src} cannot be seeked. This could be one of few reasons:`,
        "1) The media resource was replaced while the video is playing but it was not loaded yet.",
        "2) The media does not support seeking.",
        "3) The media was loaded with security headers prventing it from being included.",
        "Please see https://remotion.dev/docs/non-seekable-media for assistance."
      ].join(`
`);
      if (type === "console-error") {
        console.error(msg);
      } else if (type === "console-warning") {
        console.warn(`The media ${ref.src} does not support seeking. The video will render fine, but may not play correctly in the Remotion Studio and in the <Player>. See https://remotion.dev/docs/non-seekable-media for an explanation.`);
      } else {
        throw new Error(msg);
      }
      alreadyWarned[ref.src] = true;
    }
  };
  var useMediaPlayback = ({
    mediaRef,
    src,
    mediaType,
    playbackRate: localPlaybackRate,
    preservePitch = true,
    onlyWarnForMediaSeekingError,
    acceptableTimeshift,
    pauseWhenBuffering,
    isPremounting,
    isPostmounting,
    onAutoPlayError
  }) => {
    const { playbackRate: globalPlaybackRate } = usePlaybackRate();
    const frame = useCurrentFrame();
    const absoluteFrame = useTimelinePosition();
    const [playing] = usePlayingState();
    const buffering = (0, import_react55.useContext)(BufferingContextReact);
    const { fps } = useVideoConfig();
    const mediaStartsAt = useMediaStartsAt();
    const lastSeekDueToShift = (0, import_react55.useRef)(null);
    const lastSeek = (0, import_react55.useRef)(null);
    const logLevel = useLogLevel();
    const mountTime = useMountTime();
    if (!buffering) {
      throw new Error("useMediaPlayback must be used inside a <BufferingContext>");
    }
    const isVariableFpsVideoMap = (0, import_react55.useRef)({});
    const onVariableFpsVideoDetected = (0, import_react55.useCallback)(() => {
      if (!src) {
        return;
      }
      if (isVariableFpsVideoMap.current[src]) {
        return;
      }
      Log.verbose({ logLevel, tag: null }, `Detected ${src} as a variable FPS video. Disabling buffering while seeking.`);
      isVariableFpsVideoMap.current[src] = true;
    }, [logLevel, src]);
    const rvcCurrentTime = useRequestVideoCallbackTime({
      mediaRef,
      mediaType,
      lastSeek,
      onVariableFpsVideoDetected
    });
    const mediaTagCurrentTime = useCurrentTimeOfMediaTagWithUpdateTimeStamp(mediaRef);
    const desiredUnclampedTime = getMediaTime({
      frame,
      playbackRate: localPlaybackRate,
      startFrom: -mediaStartsAt,
      fps
    });
    const isMediaTagBuffering = useMediaBuffering({
      element: mediaRef,
      shouldBuffer: pauseWhenBuffering,
      isPremounting,
      isPostmounting,
      logLevel,
      mountTime,
      src: src ?? null
    });
    const { bufferUntilFirstFrame, isBuffering } = useBufferUntilFirstFrame({
      mediaRef,
      mediaType,
      onVariableFpsVideoDetected,
      pauseWhenBuffering,
      logLevel,
      mountTime
    });
    const playbackRate = localPlaybackRate * globalPlaybackRate;
    const acceptableTimeShiftButLessThanDuration = (() => {
      const DEFAULT_ACCEPTABLE_TIMESHIFT_WITH_NORMAL_PLAYBACK = 0.45;
      const DEFAULT_ACCEPTABLE_TIMESHIFT_WITH_AMPLIFICATION = DEFAULT_ACCEPTABLE_TIMESHIFT_WITH_NORMAL_PLAYBACK + 0.2;
      const defaultAcceptableTimeshift = DEFAULT_ACCEPTABLE_TIMESHIFT_WITH_AMPLIFICATION;
      if (mediaRef.current?.duration) {
        return Math.min(mediaRef.current.duration, acceptableTimeshift ?? defaultAcceptableTimeshift);
      }
      return acceptableTimeshift ?? defaultAcceptableTimeshift;
    })();
    const isPlayerBuffering = useIsPlayerBuffering(buffering);
    (0, import_react55.useEffect)(() => {
      if (mediaRef.current?.paused) {
        return;
      }
      if (!playing) {
        playbackLogging({
          logLevel,
          tag: "pause",
          message: `Pausing ${mediaRef.current?.src} because ${isPremounting ? "media is premounting" : isPostmounting ? "media is postmounting" : "Player is not playing"}`,
          mountTime
        });
        mediaRef.current?.pause();
        return;
      }
      const isMediaTagBufferingOrStalled = isMediaTagBuffering || isBuffering();
      const playerBufferingNotStateButLive = buffering.buffering.current;
      if (playerBufferingNotStateButLive && !isMediaTagBufferingOrStalled) {
        playbackLogging({
          logLevel,
          tag: "pause",
          message: `Pausing ${mediaRef.current?.src} because player is buffering but media tag is not`,
          mountTime
        });
        mediaRef.current?.pause();
      }
    }, [
      isBuffering,
      isMediaTagBuffering,
      buffering,
      isPlayerBuffering,
      isPremounting,
      logLevel,
      mediaRef,
      mediaType,
      mountTime,
      playing,
      isPostmounting
    ]);
    const env = useRemotionEnvironment();
    (0, import_react55.useLayoutEffect)(() => {
      const playbackRateToSet = Math.max(0, playbackRate);
      if (mediaRef.current && mediaRef.current.playbackRate !== playbackRateToSet) {
        mediaRef.current.playbackRate = playbackRateToSet;
      }
      if (mediaRef.current && mediaRef.current.preservesPitch !== preservePitch) {
        mediaRef.current.preservesPitch = preservePitch;
      }
    }, [mediaRef, playbackRate, preservePitch]);
    (0, import_react55.useEffect)(() => {
      const tagName = mediaType === "audio" ? "<Html5Audio>" : "<Html5Video>";
      if (!mediaRef.current) {
        throw new Error(`No ${mediaType} ref found`);
      }
      if (!src) {
        throw new Error(`No 'src' attribute was passed to the ${tagName} element.`);
      }
      const { current } = mediaRef;
      const action = getMediaSyncAction({
        duration: current.duration,
        currentTime: current.currentTime,
        paused: current.paused,
        ended: current.ended,
        desiredUnclampedTime,
        mediaTagTime: mediaTagCurrentTime.current.time,
        mediaTagLastUpdate: mediaTagCurrentTime.current.lastUpdate,
        rvcTime: rvcCurrentTime.current?.time ?? null,
        rvcLastUpdate: rvcCurrentTime.current?.lastUpdate ?? null,
        isVariableFpsVideo: Boolean(isVariableFpsVideoMap.current[src]),
        acceptableTimeShift: acceptableTimeShiftButLessThanDuration,
        lastSeekDueToShift: lastSeekDueToShift.current,
        playing,
        playbackRate,
        mediaTagBufferingOrStalled: isMediaTagBuffering || isBuffering(),
        playerBuffering: buffering.buffering.current,
        absoluteFrame,
        onlyWarnForMediaSeekingError,
        isPremounting,
        isPostmounting,
        pauseWhenBuffering
      });
      if (action.type === "none") {
        return;
      }
      if (action.type === "seek-due-to-shift") {
        lastSeek.current = seek({
          mediaRef: current,
          time: action.shouldBeTime,
          logLevel,
          why: action.why,
          mountTime
        });
        lastSeekDueToShift.current = lastSeek.current;
        if (action.bufferUntilFirstFrame) {
          bufferUntilFirstFrame(action.shouldBeTime);
        }
        if (action.playReason !== null) {
          playAndHandleNotAllowedError({
            mediaRef,
            mediaType,
            onAutoPlayError,
            logLevel,
            mountTime,
            reason: action.playReason,
            isPlayer: env.isPlayer
          });
        }
        if (action.warnAboutNonSeekable) {
          warnAboutNonSeekableMedia(current, "console-error");
        }
        return;
      }
      if (action.type === "seek-if-not-playing") {
        if (action.why !== null) {
          lastSeek.current = seek({
            mediaRef: current,
            time: action.shouldBeTime,
            logLevel,
            why: action.why,
            mountTime
          });
        }
        return;
      }
      if (action.why !== null) {
        lastSeek.current = seek({
          mediaRef: current,
          time: action.shouldBeTime,
          logLevel,
          why: action.why,
          mountTime
        });
      }
      playAndHandleNotAllowedError({
        mediaRef,
        mediaType,
        onAutoPlayError,
        logLevel,
        mountTime,
        reason: action.playReason,
        isPlayer: env.isPlayer
      });
      if (action.bufferUntilFirstFrame) {
        bufferUntilFirstFrame(action.shouldBeTime);
      }
    }, [
      absoluteFrame,
      acceptableTimeShiftButLessThanDuration,
      bufferUntilFirstFrame,
      buffering.buffering,
      rvcCurrentTime,
      logLevel,
      desiredUnclampedTime,
      isBuffering,
      isMediaTagBuffering,
      mediaRef,
      mediaType,
      onlyWarnForMediaSeekingError,
      playbackRate,
      playing,
      src,
      onAutoPlayError,
      isPremounting,
      isPostmounting,
      pauseWhenBuffering,
      mountTime,
      mediaTagCurrentTime,
      env.isPlayer
    ]);
  };
  var useMediaTag = ({
    mediaRef,
    id,
    mediaType,
    onAutoPlayError,
    isPremounting,
    isPostmounting
  }) => {
    const { audioAndVideoTags, imperativePlaying } = useTimelineContext();
    const logLevel = useLogLevel();
    const mountTime = useMountTime();
    const env = useRemotionEnvironment();
    (0, import_react62.useEffect)(() => {
      const tag = {
        id,
        play: (reason) => {
          if (!imperativePlaying.current) {
            return;
          }
          if (isPremounting || isPostmounting) {
            return;
          }
          return playAndHandleNotAllowedError({
            mediaRef,
            mediaType,
            onAutoPlayError,
            logLevel,
            mountTime,
            reason,
            isPlayer: env.isPlayer
          });
        }
      };
      audioAndVideoTags.current.push(tag);
      return () => {
        audioAndVideoTags.current = audioAndVideoTags.current.filter((a22) => a22.id !== id);
      };
    }, [
      audioAndVideoTags,
      id,
      mediaRef,
      mediaType,
      onAutoPlayError,
      imperativePlaying,
      isPremounting,
      isPostmounting,
      logLevel,
      mountTime,
      env.isPlayer
    ]);
  };
  var MediaVolumeContext = (0, import_react63.createContext)({
    playerMuted: false,
    mediaVolume: 1
  });
  var SetMediaVolumeContext = (0, import_react63.createContext)({
    setPlayerMuted: () => {
      throw new Error("default");
    },
    setMediaVolume: () => {
      throw new Error("default");
    }
  });
  var useMediaVolumeState = () => {
    const { mediaVolume } = (0, import_react63.useContext)(MediaVolumeContext);
    const { setMediaVolume } = (0, import_react63.useContext)(SetMediaVolumeContext);
    return (0, import_react63.useMemo)(() => {
      return [mediaVolume, setMediaVolume];
    }, [mediaVolume, setMediaVolume]);
  };
  var usePlayerMutedState = () => {
    const { playerMuted } = (0, import_react63.useContext)(MediaVolumeContext);
    const { setPlayerMuted } = (0, import_react63.useContext)(SetMediaVolumeContext);
    return (0, import_react63.useMemo)(() => {
      return [playerMuted, setPlayerMuted];
    }, [playerMuted, setPlayerMuted]);
  };
  var warnAboutTooHighVolume = (volume) => {
    if (volume >= 100) {
      throw new Error(`Volume was set to ${volume}, but regular volume is 1, not 100. Did you forget to divide by 100? Set a volume of less than 100 to dismiss this error.`);
    }
  };
  var AudioForDevelopmentForwardRefFunction = (props, ref) => {
    const [initialShouldPreMountAudioElements] = (0, import_react48.useState)(props.shouldPreMountAudioTags);
    if (props.shouldPreMountAudioTags !== initialShouldPreMountAudioElements) {
      throw new Error("Cannot change the behavior for pre-mounting audio tags dynamically.");
    }
    const logLevel = useLogLevel();
    const {
      volume,
      muted,
      playbackRate,
      preservePitch,
      shouldPreMountAudioTags,
      src,
      onDuration,
      acceptableTimeShiftInSeconds,
      _remotionInternalNeedsDurationCalculation,
      _remotionInternalNativeLoopPassed,
      _remotionInternalStack,
      allowAmplificationDuringRender,
      name,
      pauseWhenBuffering,
      showInTimeline,
      loopVolumeCurveBehavior,
      crossOrigin,
      delayRenderRetries,
      delayRenderTimeoutInMilliseconds,
      toneFrequency,
      useWebAudioApi,
      onError,
      onNativeError,
      audioStreamIndex,
      ...nativeProps
    } = props;
    const _propsValid = true;
    if (!_propsValid) {
      throw new Error("typecheck error");
    }
    const [mediaVolume] = useMediaVolumeState();
    const [playerMuted] = usePlayerMutedState();
    const volumePropFrame = useFrameForVolumeProp(loopVolumeCurveBehavior ?? "repeat");
    if (!src) {
      throw new TypeError("No 'src' was passed to <Html5Audio>.");
    }
    const preloadedSrc = usePreload(src);
    const sequenceContext = (0, import_react48.useContext)(SequenceContext);
    const [timelineId] = (0, import_react48.useState)(() => String(Math.random()));
    const userPreferredVolume = evaluateVolume({
      frame: volumePropFrame,
      volume,
      mediaVolume
    });
    warnAboutTooHighVolume(userPreferredVolume);
    const crossOriginValue = getCrossOriginValue({
      crossOrigin,
      requestsVideoFrame: false,
      isClientSideRendering: false
    });
    const propsToPass = (0, import_react48.useMemo)(() => {
      return {
        muted: muted || playerMuted || userPreferredVolume <= 0,
        src: preloadedSrc,
        loop: _remotionInternalNativeLoopPassed,
        crossOrigin: crossOriginValue,
        ...nativeProps
      };
    }, [
      _remotionInternalNativeLoopPassed,
      playerMuted,
      muted,
      nativeProps,
      preloadedSrc,
      userPreferredVolume,
      crossOriginValue
    ]);
    const id = (0, import_react48.useMemo)(() => `audio-${random(src ?? "")}-${sequenceContext?.relativeFrom}-${sequenceContext?.cumulatedFrom}-${sequenceContext?.durationInFrames}-muted:${props.muted}-loop:${props.loop}`, [
      src,
      sequenceContext?.relativeFrom,
      sequenceContext?.cumulatedFrom,
      sequenceContext?.durationInFrames,
      props.muted,
      props.loop
    ]);
    const {
      el: audioRef,
      mediaElementSourceNode,
      cleanupOnMediaTagUnmount
    } = useSharedAudio({
      aud: propsToPass,
      audioId: id,
      premounting: Boolean(sequenceContext?.premounting),
      postmounting: Boolean(sequenceContext?.postmounting)
    });
    const getStack = (0, import_react47.useCallback)(() => {
      return _remotionInternalStack ?? null;
    }, [_remotionInternalStack]);
    useMediaInTimeline({
      volume,
      mediaVolume,
      src,
      mediaType: "audio",
      playbackRate: playbackRate ?? 1,
      displayName: name ?? null,
      id: timelineId,
      getStack,
      showInTimeline,
      premountDisplay: sequenceContext?.premountDisplay ?? null,
      postmountDisplay: sequenceContext?.postmountDisplay ?? null,
      loopDisplay: void 0,
      documentationLink: "https://www.remotion.dev/docs/html5-audio",
      refForOutline: null
    });
    useMediaPlayback({
      mediaRef: audioRef,
      src,
      mediaType: "audio",
      playbackRate: playbackRate ?? 1,
      preservePitch,
      onlyWarnForMediaSeekingError: false,
      acceptableTimeshift: acceptableTimeShiftInSeconds ?? null,
      isPremounting: Boolean(sequenceContext?.premounting),
      isPostmounting: Boolean(sequenceContext?.postmounting),
      pauseWhenBuffering,
      onAutoPlayError: null
    });
    useMediaTag({
      id: timelineId,
      isPostmounting: Boolean(sequenceContext?.postmounting),
      isPremounting: Boolean(sequenceContext?.premounting),
      mediaRef: audioRef,
      mediaType: "audio",
      onAutoPlayError: null
    });
    useVolume({
      logLevel,
      mediaRef: audioRef,
      source: mediaElementSourceNode,
      volume: userPreferredVolume,
      shouldUseWebAudioApi: useWebAudioApi ?? false
    });
    const effectToUse = import_react48.default.useInsertionEffect ?? import_react48.default.useLayoutEffect;
    effectToUse(() => {
      return () => {
        requestAnimationFrame(() => {
          cleanupOnMediaTagUnmount();
        });
      };
    }, [cleanupOnMediaTagUnmount]);
    (0, import_react48.useImperativeHandle)(ref, () => {
      return audioRef.current;
    }, [audioRef]);
    const currentOnDurationCallback = (0, import_react48.useRef)(onDuration);
    currentOnDurationCallback.current = onDuration;
    (0, import_react48.useEffect)(() => {
      const { current } = audioRef;
      if (!current) {
        return;
      }
      if (current.duration) {
        currentOnDurationCallback.current?.(current.src, current.duration);
        return;
      }
      const onLoadedMetadata = () => {
        currentOnDurationCallback.current?.(current.src, current.duration);
      };
      current.addEventListener("loadedmetadata", onLoadedMetadata);
      return () => {
        current.removeEventListener("loadedmetadata", onLoadedMetadata);
      };
    }, [audioRef, src]);
    if (initialShouldPreMountAudioElements) {
      return null;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("audio", {
      ref: audioRef,
      preload: "metadata",
      crossOrigin: crossOriginValue,
      ...propsToPass
    });
  };
  var AudioForPreview = (0, import_react48.forwardRef)(AudioForDevelopmentForwardRefFunction);
  var AudioForRenderingRefForwardingFunction = (props, ref) => {
    const audioRef = (0, import_react64.useRef)(null);
    const {
      volume: volumeProp,
      playbackRate,
      allowAmplificationDuringRender,
      onDuration,
      toneFrequency,
      _remotionInternalNeedsDurationCalculation,
      _remotionInternalNativeLoopPassed,
      acceptableTimeShiftInSeconds,
      name,
      onNativeError,
      delayRenderRetries,
      delayRenderTimeoutInMilliseconds,
      loopVolumeCurveBehavior,
      pauseWhenBuffering,
      audioStreamIndex,
      preservePitch: _preservePitch,
      ...nativeProps
    } = props;
    const absoluteFrame = useTimelinePosition();
    const volumePropFrame = useFrameForVolumeProp(loopVolumeCurveBehavior ?? "repeat");
    const frame = useCurrentFrame();
    const sequenceContext = (0, import_react64.useContext)(SequenceContext);
    const { registerRenderAsset, unregisterRenderAsset } = (0, import_react64.useContext)(RenderAssetManager);
    const { delayRender: delayRender2, continueRender: continueRender2 } = useDelayRender();
    const id = (0, import_react64.useMemo)(() => `audio-${random(props.src ?? "")}-${sequenceContext?.relativeFrom}-${sequenceContext?.cumulatedFrom}-${sequenceContext?.durationInFrames}`, [
      props.src,
      sequenceContext?.relativeFrom,
      sequenceContext?.cumulatedFrom,
      sequenceContext?.durationInFrames
    ]);
    const volume = evaluateVolume({
      volume: volumeProp,
      frame: volumePropFrame,
      mediaVolume: 1
    });
    warnAboutTooHighVolume(volume);
    (0, import_react64.useImperativeHandle)(ref, () => {
      return audioRef.current;
    }, []);
    (0, import_react64.useEffect)(() => {
      if (!props.src) {
        throw new Error("No src passed");
      }
      if (!window.remotion_audioEnabled) {
        return;
      }
      if (props.muted) {
        return;
      }
      if (volume <= 0) {
        return;
      }
      registerRenderAsset({
        type: "audio",
        src: getAbsoluteSrc(props.src),
        id,
        frame: absoluteFrame,
        volume,
        mediaFrame: frame,
        playbackRate: props.playbackRate ?? 1,
        toneFrequency: toneFrequency ?? 1,
        audioStartFrame: Math.max(0, -(sequenceContext?.cumulatedNegativeFrom ?? 0)),
        audioStreamIndex: audioStreamIndex ?? 0
      });
      return () => unregisterRenderAsset(id);
    }, [
      props.muted,
      props.src,
      registerRenderAsset,
      absoluteFrame,
      id,
      unregisterRenderAsset,
      volume,
      volumePropFrame,
      frame,
      playbackRate,
      props.playbackRate,
      toneFrequency,
      sequenceContext?.cumulatedNegativeFrom,
      audioStreamIndex
    ]);
    const { src } = props;
    const needsToRenderAudioTag = ref || _remotionInternalNeedsDurationCalculation;
    (0, import_react64.useLayoutEffect)(() => {
      if (window.process?.env?.NODE_ENV === "test") {
        return;
      }
      if (!needsToRenderAudioTag) {
        return;
      }
      const newHandle = delayRender2("Loading <Html5Audio> duration with src=" + src, {
        retries: delayRenderRetries ?? void 0,
        timeoutInMilliseconds: delayRenderTimeoutInMilliseconds ?? void 0
      });
      const { current } = audioRef;
      const didLoad = () => {
        if (current?.duration) {
          onDuration(current.src, current.duration);
        }
        continueRender2(newHandle);
      };
      if (current?.duration) {
        onDuration(current.src, current.duration);
        continueRender2(newHandle);
      } else {
        current?.addEventListener("loadedmetadata", didLoad, { once: true });
      }
      return () => {
        current?.removeEventListener("loadedmetadata", didLoad);
        continueRender2(newHandle);
      };
    }, [
      src,
      onDuration,
      needsToRenderAudioTag,
      delayRenderRetries,
      delayRenderTimeoutInMilliseconds,
      continueRender2,
      delayRender2
    ]);
    if (!needsToRenderAudioTag) {
      return null;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("audio", {
      ref: audioRef,
      ...nativeProps,
      onError: onNativeError
    });
  };
  var AudioForRendering = (0, import_react64.forwardRef)(AudioForRenderingRefForwardingFunction);
  var AudioRefForwardingFunction = (props, ref) => {
    const audioTagsContext = (0, import_react42.useContext)(SharedAudioTagsContext);
    const propsWithFreeze = props;
    const {
      startFrom,
      endAt,
      trimBefore,
      trimAfter,
      name,
      _remotionInternalStack,
      pauseWhenBuffering,
      showInTimeline,
      onError: onRemotionError,
      freeze,
      ...otherProps
    } = propsWithFreeze;
    const { loop, freeze: _freeze, ...propsOtherThanLoop } = propsWithFreeze;
    const { fps } = useVideoConfig();
    const environment = useRemotionEnvironment();
    const shouldPauseWhenBuffering = resolveV5Default(pauseWhenBuffering);
    if (environment.isClientSideRendering) {
      throw new Error("<Html5Audio> is not supported in @remotion/web-renderer. Use <Audio> from @remotion/media instead. See https://remotion.dev/docs/client-side-rendering/limitations");
    }
    if (typeof freeze !== "undefined") {
      throw new TypeError('The "freeze" prop is not supported on <Html5Audio />. Use <Sequence freeze={...}> to freeze media playback.');
    }
    const { durations, setDurations } = (0, import_react42.useContext)(DurationsContext);
    if (typeof props.src !== "string") {
      throw new TypeError(`The \`<Html5Audio>\` tag requires a string for \`src\`, but got ${JSON.stringify(props.src)} instead.`);
    }
    const preloadedSrc = usePreload(props.src);
    const onError = (0, import_react42.useCallback)((e) => {
      console.log(e.currentTarget.error);
      const errMessage = `Could not play audio with src ${preloadedSrc}: ${e.currentTarget.error}. See https://remotion.dev/docs/media-playback-error for help.`;
      if (loop) {
        if (onRemotionError) {
          onRemotionError(new Error(errMessage));
          return;
        }
        cancelRender(new Error(errMessage));
      } else {
        onRemotionError?.(new Error(errMessage));
        console.warn(errMessage);
      }
    }, [loop, onRemotionError, preloadedSrc]);
    const onDuration = (0, import_react42.useCallback)((src, durationInSeconds) => {
      setDurations({ type: "got-duration", durationInSeconds, src });
    }, [setDurations]);
    const durationFetched = durations[getAbsoluteSrc(preloadedSrc)] ?? durations[getAbsoluteSrc(props.src)];
    validateMediaTrimProps({ startFrom, endAt, trimBefore, trimAfter });
    const { trimBeforeValue, trimAfterValue } = resolveTrimProps({
      startFrom,
      endAt,
      trimBefore,
      trimAfter
    });
    if (loop && durationFetched !== void 0) {
      if (!Number.isFinite(durationFetched)) {
        return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Html5Audio, {
          ...propsOtherThanLoop,
          ref,
          _remotionInternalNativeLoopPassed: true
        });
      }
      const duration = durationFetched * fps;
      return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Loop, {
        layout: "none",
        durationInFrames: calculateMediaDuration({
          trimAfter: trimAfterValue,
          mediaDurationInFrames: duration,
          playbackRate: props.playbackRate ?? 1,
          trimBefore: trimBeforeValue
        }),
        children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Html5Audio, {
          ...propsOtherThanLoop,
          ref,
          _remotionInternalNativeLoopPassed: true
        })
      });
    }
    if (typeof trimBeforeValue !== "undefined" || typeof trimAfterValue !== "undefined") {
      return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Sequence, {
        layout: "none",
        from: 0 - (trimBeforeValue ?? 0),
        showInTimeline: false,
        durationInFrames: trimAfterValue,
        name,
        children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Html5Audio, {
          _remotionInternalNeedsDurationCalculation: Boolean(loop),
          pauseWhenBuffering: shouldPauseWhenBuffering,
          ...otherProps,
          ref
        })
      });
    }
    validateMediaProps({
      playbackRate: props.playbackRate,
      preservePitch: props.preservePitch,
      volume: props.volume
    }, "Html5Audio");
    if (environment.isRendering) {
      return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(AudioForRendering, {
        onDuration,
        ...props,
        ref,
        onNativeError: onError,
        _remotionInternalNeedsDurationCalculation: Boolean(loop)
      });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(AudioForPreview, {
      _remotionInternalNativeLoopPassed: props._remotionInternalNativeLoopPassed ?? false,
      _remotionInternalStack: _remotionInternalStack ?? null,
      shouldPreMountAudioTags: audioTagsContext !== null && audioTagsContext.numberOfAudioTags > 0,
      ...props,
      ref,
      onNativeError: onError,
      onDuration,
      pauseWhenBuffering: shouldPauseWhenBuffering,
      _remotionInternalNeedsDurationCalculation: Boolean(loop),
      showInTimeline: showInTimeline ?? true
    });
  };
  var Html5Audio = (0, import_react42.forwardRef)(AudioRefForwardingFunction);
  addSequenceStackTraces(Html5Audio);
  var resolveSolidPixelDensity = (pixelDensity) => {
    if (pixelDensity === void 0) {
      return 1;
    }
    if (typeof pixelDensity !== "number" || !Number.isFinite(pixelDensity) || pixelDensity <= 0) {
      throw new Error(`<Solid>: \`pixelDensity\` must be a positive finite number. Received: ${String(pixelDensity)}.`);
    }
    return pixelDensity;
  };
  var solidSchema = {
    ...baseSchema,
    color: {
      type: "color",
      default: "transparent",
      description: "Color"
    },
    width: {
      type: "number",
      min: 1,
      step: 1,
      default: 1920,
      description: "Width",
      hiddenFromList: false
    },
    height: {
      type: "number",
      min: 1,
      step: 1,
      default: 1080,
      description: "Height",
      hiddenFromList: false
    },
    pixelDensity: {
      type: "number",
      min: 1,
      max: 3,
      step: 0.1,
      default: 1,
      description: "Pixel density",
      hiddenFromList: false
    },
    ...transformSchema,
    ...backgroundSchema,
    ...borderSchema,
    ...borderRadiusSchema,
    ...cropSchema
  };
  var SolidInner = ({
    color,
    width,
    height,
    effects = [],
    className: className2,
    style: style2,
    pixelDensity,
    overrideId,
    reference
  }) => {
    const { delayRender: delayRender2, continueRender: continueRender2, cancelRender: cancelRender2 } = useDelayRender();
    const resolvedPixelDensity = resolveSolidPixelDensity(pixelDensity);
    const canvasWidth = Math.ceil(width * resolvedPixelDensity);
    const canvasHeight = Math.ceil(height * resolvedPixelDensity);
    const [outputCanvas, setOutputCanvas] = (0, import_react65.useState)(null);
    const memoizedEffects = useMemoizedEffects({
      effects,
      overrideId: overrideId ?? null
    });
    const sourceCanvas = (0, import_react65.useMemo)(() => {
      if (typeof document === "undefined") {
        return null;
      }
      const canvas = document.createElement("canvas");
      canvas.width = 1;
      canvas.height = 1;
      return canvas;
    }, []);
    const chainState = useEffectChainState();
    const canvasRef = (0, import_react65.useCallback)((canvas) => {
      setOutputCanvas(canvas);
      if (typeof reference === "function") {
        reference(canvas);
      } else if (reference) {
        reference.current = canvas;
      }
    }, [reference]);
    (0, import_react65.useEffect)(() => {
      if (!outputCanvas || !sourceCanvas) {
        return;
      }
      const handle = delayRender2("Solid effect chain");
      if (!chainState) {
        continueRender2(handle);
        return () => {
          continueRender2(handle);
        };
      }
      const ctx = sourceCanvas.getContext("2d", { colorSpace: "srgb" });
      if (!ctx) {
        cancelRender2(new Error("Failed to acquire 2D context for <Solid> source"));
        return;
      }
      ctx.clearRect(0, 0, 1, 1);
      if (color !== void 0) {
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, 1, 1);
      }
      runEffectChain({
        state: chainState.get(canvasWidth, canvasHeight),
        source: sourceCanvas,
        effects: memoizedEffects,
        output: outputCanvas,
        width: canvasWidth,
        height: canvasHeight
      }).then((completed) => {
        if (completed) {
          continueRender2(handle);
        }
      }).catch((err) => {
        cancelRender2(err);
      });
      return () => {
        continueRender2(handle);
      };
    }, [
      color,
      outputCanvas,
      sourceCanvas,
      chainState,
      canvasWidth,
      canvasHeight,
      delayRender2,
      continueRender2,
      cancelRender2,
      memoizedEffects
    ]);
    const canvasStyle = (0, import_react65.useMemo)(() => {
      return {
        width,
        height,
        ...style2 ?? {}
      };
    }, [height, style2, width]);
    return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("canvas", {
      ref: canvasRef,
      width: canvasWidth,
      height: canvasHeight,
      className: className2,
      style: canvasStyle
    });
  };
  var SolidOuter = (0, import_react65.forwardRef)(({
    effects = [],
    controls,
    color,
    height,
    width,
    className: className2,
    durationInFrames,
    style: style2,
    name,
    from,
    trimBefore,
    freeze,
    hidden,
    showInTimeline,
    pixelDensity,
    cropLeft,
    cropRight,
    cropTop,
    cropBottom,
    ...props2
  }, ref) => {
    const memoizedEffectDefinitions = useMemoizedEffectDefinitions(effects);
    const actualRef = (0, import_react65.useRef)(null);
    (0, import_react65.useImperativeHandle)(ref, () => {
      return actualRef.current;
    }, []);
    const croppedStyle = useCropStyle({
      cropLeft,
      cropRight,
      cropTop,
      cropBottom,
      style: style2 ?? null,
      componentName: "<Solid />"
    });
    return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Sequence, {
      layout: "none",
      from,
      trimBefore,
      freeze,
      hidden,
      showInTimeline,
      controls,
      _remotionInternalEffects: memoizedEffectDefinitions,
      durationInFrames,
      name: name ?? "<Solid>",
      outlineRef: actualRef,
      _remotionInternalDocumentationLink: "https://www.remotion.dev/docs/solid",
      ...props2,
      children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(SolidInner, {
        reference: actualRef,
        overrideId: controls?.overrideId ?? null,
        color,
        height,
        width,
        className: className2,
        style: croppedStyle ?? void 0,
        effects,
        pixelDensity
      })
    });
  });
  var Solid = withInteractivitySchema({
    Component: SolidOuter,
    componentName: "<Solid>",
    componentIdentity: "dev.remotion.remotion.Solid",
    schema: solidSchema,
    supportsEffects: true
  });
  Solid.displayName = "Solid";
  addSequenceStackTraces(Solid);
  var cachedSupport = null;
  var isHtmlInCanvasSupported = () => {
    if (cachedSupport !== null) {
      return cachedSupport;
    }
    if (typeof document === "undefined") {
      return false;
    }
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    cachedSupport = typeof ctx?.drawElementImage === "function" && typeof canvas.requestPaint === "function" && typeof canvas.captureElementImage === "function" && "transferControlToOffscreen" in HTMLCanvasElement.prototype;
    return cachedSupport;
  };
  var HTML_IN_CANVAS_UNSUPPORTED_MESSAGE = "HTML in Canvas is not supported. Two common causes: Chrome is older than version 148 (update Chrome), or the HTML-in-Canvas flag is disabled at chrome://flags/#canvas-draw-element (enable it and restart Chrome).";
  var MINIMUM_CHROME_VERSION_FOR_NESTED_HTML_IN_CANVAS = 152;
  var getChromeMajorVersion = () => {
    if (typeof navigator === "undefined") {
      return null;
    }
    const match = navigator.userAgent.match(/\b(?:HeadlessChrome|Chrome)\/(\d+)/);
    if (!match) {
      return null;
    }
    return Number(match[1]);
  };
  function assertHtmlInCanvasDimensions(width, height) {
    if (typeof width !== "number" || typeof height !== "number") {
      throw new Error(`HtmlInCanvas: \`width\` and \`height\` must be numbers. Received width=${String(width)}, height=${String(height)}.`);
    }
    if (!Number.isInteger(width) || width <= 0) {
      throw new Error(`HtmlInCanvas: \`width\` must be a positive integer. Received: ${String(width)}.`);
    }
    if (!Number.isInteger(height) || height <= 0) {
      throw new Error(`HtmlInCanvas: \`height\` must be a positive integer. Received: ${String(height)}.`);
    }
  }
  function resolveHtmlInCanvasPixelDensity(pixelDensity) {
    if (pixelDensity === void 0) {
      return 1;
    }
    if (typeof pixelDensity !== "number" || !Number.isFinite(pixelDensity) || pixelDensity <= 0) {
      throw new Error(`HtmlInCanvas: \`pixelDensity\` must be a positive finite number. Received: ${String(pixelDensity)}.`);
    }
    return pixelDensity;
  }
  var isMissingPaintRecordError = (error2) => {
    return error2 instanceof DOMException && error2.name === "InvalidStateError";
  };
  var missingPaintRecordMessage = "HtmlInCanvas: Expected the element to be inside the viewport during rendering, but Chrome had no cached paint record for it.";
  var resizePaintTarget = ({
    target,
    width,
    height
  }) => {
    if (target.width !== width) {
      target.width = width;
    }
    if (target.height !== height) {
      target.height = height;
    }
  };
  var defaultOnPaint = ({
    canvas,
    element,
    elementImage
  }) => {
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      throw new Error("Failed to acquire 2D context for <HtmlInCanvas> canvas");
    }
    ctx.reset();
    const transform = ctx.drawElementImage(elementImage, 0, 0);
    element.style.transform = transform.toString();
  };
  var HtmlInCanvasAncestorContext = (0, import_react66.createContext)(null);
  var HtmlInCanvasContent = (0, import_react66.forwardRef)(({
    width,
    height,
    effects,
    children,
    onPaint,
    onInit,
    pixelDensity,
    controls,
    style: style2
  }, ref) => {
    const ancestor = (0, import_react66.useContext)(HtmlInCanvasAncestorContext);
    assertHtmlInCanvasDimensions(width, height);
    const chromeMajorVersion = getChromeMajorVersion();
    if (ancestor && chromeMajorVersion !== null && chromeMajorVersion < MINIMUM_CHROME_VERSION_FOR_NESTED_HTML_IN_CANVAS) {
      throw new Error(`Nested <HtmlInCanvas> components require Chrome ${MINIMUM_CHROME_VERSION_FOR_NESTED_HTML_IN_CANVAS} or newer, but the current browser is Chrome ${chromeMajorVersion}. Upgrade Chrome or avoid nesting components that use <HtmlInCanvas>, such as shapes with effects.`);
    }
    const resolvedPixelDensity = resolveHtmlInCanvasPixelDensity(pixelDensity);
    const canvasWidth = Math.ceil(width * resolvedPixelDensity);
    const canvasHeight = Math.ceil(height * resolvedPixelDensity);
    const { delayRender: delayRender2, continueRender: continueRender2, cancelRender: cancelRender2 } = useDelayRender();
    const { isClientSideRendering, isRendering } = useRemotionEnvironment();
    const canRetryMissingPaintRecord = !isRendering || isClientSideRendering;
    const usesDirectLayoutCanvas = onPaint === void 0 && onInit === void 0;
    if (!isHtmlInCanvasSupported()) {
      cancelRender2(new Error(HTML_IN_CANVAS_UNSUPPORTED_MESSAGE));
    }
    const canvas2dRef = (0, import_react66.useRef)(null);
    const paintTargetRef = (0, import_react66.useRef)(null);
    const divRef = (0, import_react66.useRef)(null);
    const canvasSizeKey = `${width}x${height}@${resolvedPixelDensity}-${usesDirectLayoutCanvas ? "direct" : "offscreen"}`;
    const setLayoutCanvasRef = (0, import_react66.useCallback)((node) => {
      canvas2dRef.current = node;
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    }, [ref]);
    const chainState = useEffectChainState();
    const memoizedEffects = useMemoizedEffects({
      effects,
      overrideId: controls?.overrideId ?? null
    });
    const effectsRef = (0, import_react66.useRef)(memoizedEffects);
    effectsRef.current = memoizedEffects;
    const onPaintRef = (0, import_react66.useRef)(onPaint);
    onPaintRef.current = onPaint;
    const onInitRef = (0, import_react66.useRef)(onInit);
    onInitRef.current = onInit;
    const initializedRef = (0, import_react66.useRef)(false);
    const onInitCleanupRef = (0, import_react66.useRef)(null);
    const unmountedRef = (0, import_react66.useRef)(false);
    const ancestorRef = (0, import_react66.useRef)(ancestor);
    ancestorRef.current = ancestor;
    const onPaintCb = (0, import_react66.useCallback)(async () => {
      const element = divRef.current;
      if (!element) {
        throw new Error("Canvas or scene element not found");
      }
      const paintTarget = paintTargetRef.current;
      if (!paintTarget) {
        throw new Error("HtmlInCanvas: paint target is not ready because the canvas is remounting");
      }
      resizePaintTarget({
        target: paintTarget,
        width: canvasWidth,
        height: canvasHeight
      });
      try {
        const placeholderCanvas = canvas2dRef.current;
        if (!placeholderCanvas) {
          throw new Error("Canvas not found");
        }
        const handle = delayRender2("onPaint");
        if (!initializedRef.current) {
          const currentOnInit = onInitRef.current;
          if (!currentOnInit) {
            initializedRef.current = true;
          } else {
            let initImage;
            try {
              initImage = placeholderCanvas.captureElementImage(element);
            } catch (error2) {
              if (isMissingPaintRecordError(error2) && canRetryMissingPaintRecord) {
                continueRender2(handle);
                return;
              }
              if (isMissingPaintRecordError(error2)) {
                throw new Error(missingPaintRecordMessage);
              }
              throw error2;
            }
            initializedRef.current = true;
            try {
              if (paintTarget instanceof HTMLCanvasElement) {
                throw new Error("HtmlInCanvas: onInit requires an OffscreenCanvas paint target");
              }
              const cleanup = await currentOnInit({
                canvas: paintTarget,
                element,
                elementImage: initImage,
                pixelDensity: resolvedPixelDensity
              });
              if (typeof cleanup !== "function") {
                throw new Error("HtmlInCanvas: when `onInit` is provided, it must return a cleanup function, or a Promise that resolves to one.");
              }
              if (unmountedRef.current) {
                cleanup();
              } else {
                onInitCleanupRef.current = cleanup;
              }
            } finally {
              initImage.close();
            }
          }
        }
        let elImage;
        try {
          elImage = placeholderCanvas.captureElementImage(element);
        } catch (error2) {
          if (isMissingPaintRecordError(error2) && canRetryMissingPaintRecord) {
            continueRender2(handle);
            return;
          }
          if (isMissingPaintRecordError(error2)) {
            throw new Error(missingPaintRecordMessage);
          }
          throw error2;
        }
        try {
          const currentOnPaint = onPaintRef.current;
          if (currentOnPaint) {
            if (paintTarget instanceof HTMLCanvasElement) {
              throw new Error("HtmlInCanvas: onPaint requires an OffscreenCanvas paint target");
            }
            const paintResult = currentOnPaint({
              canvas: paintTarget,
              element,
              elementImage: elImage,
              pixelDensity: resolvedPixelDensity
            });
            if (paintResult) {
              await paintResult;
            }
          } else {
            defaultOnPaint({
              canvas: paintTarget,
              element,
              elementImage: elImage,
              pixelDensity: resolvedPixelDensity
            });
          }
          await runEffectChain({
            state: chainState.get(canvasWidth, canvasHeight),
            source: paintTarget,
            effects: effectsRef.current,
            output: paintTarget,
            width: canvasWidth,
            height: canvasHeight
          });
        } finally {
          elImage.close();
        }
        ancestorRef.current?.requestParentPaint();
        continueRender2(handle);
      } catch (error2) {
        cancelRender2(error2);
      }
    }, [
      canvasHeight,
      canvasWidth,
      chainState,
      continueRender2,
      cancelRender2,
      delayRender2,
      resolvedPixelDensity,
      canRetryMissingPaintRecord
    ]);
    (0, import_react66.useLayoutEffect)(() => {
      const placeholder = canvas2dRef.current;
      if (!placeholder) {
        throw new Error("Canvas not found");
      }
      placeholder.layoutSubtree = true;
      const paintTarget = usesDirectLayoutCanvas ? placeholder : placeholder.transferControlToOffscreen();
      paintTargetRef.current = paintTarget;
      resizePaintTarget({
        target: paintTarget,
        width: canvasWidth,
        height: canvasHeight
      });
      initializedRef.current = false;
      unmountedRef.current = false;
      placeholder.addEventListener("paint", onPaintCb);
      return () => {
        placeholder.removeEventListener("paint", onPaintCb);
        paintTargetRef.current = null;
        initializedRef.current = false;
        unmountedRef.current = true;
        onInitCleanupRef.current?.();
        onInitCleanupRef.current = null;
      };
    }, [
      onPaintCb,
      cancelRender2,
      canvasWidth,
      canvasHeight,
      usesDirectLayoutCanvas
    ]);
    const onPaintChangedRef = (0, import_react66.useRef)(false);
    (0, import_react66.useLayoutEffect)(() => {
      if (!onPaintChangedRef.current) {
        onPaintChangedRef.current = true;
        return;
      }
      const canvas = canvas2dRef.current;
      if (!canvas) {
        return;
      }
      canvas.requestPaint?.();
    }, [onPaint, memoizedEffects]);
    (0, import_react66.useLayoutEffect)(() => {
      const canvas = canvas2dRef.current;
      if (!canvas) {
        return;
      }
      const handle = delayRender2("waiting for first paint after canvas resize");
      canvas.addEventListener("paint", () => {
        continueRender2(handle);
      }, { once: true });
      return () => {
        continueRender2(handle);
      };
    }, [width, height, continueRender2, delayRender2, canvasSizeKey]);
    const innerStyle = (0, import_react66.useMemo)(() => {
      return {
        width,
        height
      };
    }, [width, height]);
    const canvasStyle = (0, import_react66.useMemo)(() => {
      return {
        width,
        height,
        ...style2 ?? {}
      };
    }, [height, style2, width]);
    const ancestorValue = (0, import_react66.useMemo)(() => {
      return {
        requestParentPaint: () => {
          canvas2dRef.current?.requestPaint?.();
        }
      };
    }, []);
    return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(HtmlInCanvasAncestorContext.Provider, {
      value: ancestorValue,
      children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("canvas", {
        ref: setLayoutCanvasRef,
        width: canvasWidth,
        height: canvasHeight,
        style: canvasStyle,
        children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", {
          ref: divRef,
          style: innerStyle,
          children
        })
      }, canvasSizeKey)
    });
  });
  HtmlInCanvasContent.displayName = "HtmlInCanvasContent";
  var HtmlInCanvasInner = (0, import_react66.forwardRef)(({
    width,
    height,
    effects = [],
    children,
    onPaint,
    onInit,
    pixelDensity,
    controls,
    style: style2,
    cropLeft,
    cropRight,
    cropTop,
    cropBottom,
    durationInFrames,
    name,
    ...sequenceProps
  }, ref) => {
    const memoizedEffectDefinitions = useMemoizedEffectDefinitions(effects);
    const actualRef = (0, import_react66.useRef)(null);
    const setCanvasRef = (0, import_react66.useCallback)((node) => {
      actualRef.current = node;
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    }, [ref]);
    const croppedStyle = useCropStyle({
      cropLeft,
      cropRight,
      cropTop,
      cropBottom,
      style: style2 ?? null,
      componentName: "<HtmlInCanvas />"
    });
    return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(Sequence, {
      durationInFrames,
      name: name ?? "<HtmlInCanvas>",
      _remotionInternalDocumentationLink: "https://www.remotion.dev/docs/remotion/html-in-canvas",
      controls,
      _remotionInternalEffects: memoizedEffectDefinitions,
      outlineRef: actualRef,
      layout: "none",
      ...sequenceProps,
      children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(HtmlInCanvasContent, {
        ref: setCanvasRef,
        width,
        height,
        effects,
        onPaint,
        onInit,
        pixelDensity,
        controls,
        style: croppedStyle ?? void 0,
        children
      })
    });
  });
  HtmlInCanvasInner.displayName = "HtmlInCanvas";
  var htmlInCanvasSchema = {
    ...baseSchema,
    pixelDensity: {
      type: "number",
      min: 1,
      max: 3,
      step: 0.1,
      default: 1,
      description: "Pixel density",
      hiddenFromList: false
    },
    ...transformSchema,
    ...backgroundSchema,
    ...borderSchema,
    ...borderRadiusSchema,
    ...cropSchema
  };
  var HtmlInCanvasWrapped = withInteractivitySchema({
    Component: HtmlInCanvasInner,
    componentName: "<HtmlInCanvas>",
    componentIdentity: "dev.remotion.remotion.HtmlInCanvas",
    schema: htmlInCanvasSchema,
    supportsEffects: true
  });
  var HtmlInCanvas = Object.assign(HtmlInCanvasWrapped, {
    isSupported: isHtmlInCanvasSupported
  });
  HtmlInCanvas.displayName = "HtmlInCanvas";
  addSequenceStackTraces(HtmlInCanvas);
  function truncateSrcForLabel(src) {
    if (typeof src !== "string") {
      return String(src);
    }
    if (src.length > 100 && (src.startsWith("data:") || src.startsWith("blob:"))) {
      return src.slice(0, 60) + "...[" + src.length + " chars total]";
    }
    return src;
  }
  var canvasImageSchema = {
    ...baseSchema,
    ...cropSchema,
    ...premountSchema,
    fit: {
      type: "enum",
      default: "fill",
      description: "Fit",
      variants: {
        fill: {},
        contain: {},
        cover: {}
      }
    },
    ...transformSchema,
    ...backgroundSchema,
    ...borderSchema,
    ...borderRadiusSchema
  };
  var makeAbortError = () => {
    if (typeof DOMException !== "undefined") {
      return new DOMException("Image loading was aborted", "AbortError");
    }
    const error2 = new Error("Image loading was aborted");
    error2.name = "AbortError";
    return error2;
  };
  var loadImage = ({
    src,
    signal
  }) => {
    return new Promise((resolve, reject) => {
      const image = new Image();
      let settled = false;
      function cleanup() {
        image.onload = null;
        image.onerror = null;
      }
      function settle(callback) {
        if (settled) {
          return;
        }
        settled = true;
        cleanup();
        callback();
      }
      function onAbort() {
        settle(() => reject(makeAbortError()));
      }
      image.onload = () => {
        Promise.resolve(image.decode?.()).catch(() => {
          return;
        }).then(() => {
          const imageWidth = image.naturalWidth || image.width;
          const imageHeight = image.naturalHeight || image.height;
          if (imageWidth <= 0 || imageHeight <= 0) {
            settle(() => reject(new Error(`Could not determine dimensions for <CanvasImage> with src="${truncateSrcForLabel(src)}"`)));
            return;
          }
          settle(() => resolve({ element: image, width: imageWidth, height: imageHeight }));
        });
      };
      image.onerror = () => {
        settle(() => reject(new Error(`Could not load <CanvasImage> with src="${truncateSrcForLabel(src)}"`)));
      };
      signal.addEventListener("abort", onAbort, { once: true });
      if (signal.aborted) {
        onAbort();
        return;
      }
      image.crossOrigin = "anonymous";
      image.src = src;
    });
  };
  function exponentialBackoff(errorCount) {
    return 1e3 * 2 ** (errorCount - 1);
  }
  var waitForNextFrame = ({
    onFrame
  }) => {
    if (typeof requestAnimationFrame === "undefined") {
      onFrame();
      return () => {
        return;
      };
    }
    const frame = requestAnimationFrame(onFrame);
    return () => cancelAnimationFrame(frame);
  };
  var CanvasImageContent = (0, import_react67.forwardRef)(({
    src,
    width,
    height,
    fit = "fill",
    effects,
    controls,
    onError,
    className: className2,
    style: style2,
    id,
    pauseWhenLoading,
    maxRetries = 2,
    delayRenderRetries,
    delayRenderTimeoutInMilliseconds,
    refForOutline,
    ...canvasProps
  }, ref) => {
    const { delayRender: delayRender2, continueRender: continueRender2, cancelRender: cancelRender2 } = useDelayRender();
    const { delayPlayback } = useBufferState();
    const [outputCanvas, setOutputCanvas] = (0, import_react67.useState)(null);
    const [loadedImage, setLoadedImage] = (0, import_react67.useState)(null);
    const actualSrc = usePreload(src);
    const chainState = useEffectChainState();
    const memoizedEffects = useMemoizedEffects({
      effects,
      overrideId: controls?.overrideId ?? null
    });
    const sequenceContext = (0, import_react67.useContext)(SequenceContext);
    const pendingLoadDelayRef = (0, import_react67.useRef)(null);
    const [isLoadPending, setIsLoadPending] = (0, import_react67.useState)(false);
    const isPremounting = Boolean(sequenceContext?.premounting);
    const isPostmounting = Boolean(sequenceContext?.postmounting);
    const continuePendingLoadDelay = (0, import_react67.useCallback)(({ markAsReady }) => {
      const pending = pendingLoadDelayRef.current;
      if (!pending || pending.continued) {
        return;
      }
      pending.continued = true;
      if (markAsReady) {
        setIsLoadPending(false);
      }
      continueRender2(pending.handle);
      pendingLoadDelayRef.current = null;
    }, [continueRender2]);
    const sourceCanvas = (0, import_react67.useMemo)(() => {
      if (typeof document === "undefined") {
        return null;
      }
      return document.createElement("canvas");
    }, []);
    const canvasRef = (0, import_react67.useCallback)((canvas) => {
      setOutputCanvas(canvas);
      if (refForOutline) {
        refForOutline.current = canvas;
      }
      if (typeof ref === "function") {
        ref(canvas);
      } else if (ref) {
        ref.current = canvas;
      }
    }, [ref, refForOutline]);
    (0, import_react67.useLayoutEffect)(() => {
      if (!pauseWhenLoading || !isLoadPending || isPremounting || isPostmounting) {
        return;
      }
      return delayPlayback().unblock;
    }, [
      delayPlayback,
      isLoadPending,
      isPostmounting,
      isPremounting,
      pauseWhenLoading
    ]);
    (0, import_react67.useLayoutEffect)(() => {
      const handle = delayRender2(`Rendering <CanvasImage> with src="${truncateSrcForLabel(actualSrc)}"`, {
        retries: delayRenderRetries ?? void 0,
        timeoutInMilliseconds: delayRenderTimeoutInMilliseconds ?? void 0
      });
      const controller = new AbortController();
      let cancelled = false;
      let errorCount = 0;
      let timeoutId = null;
      setLoadedImage(null);
      setIsLoadPending(true);
      pendingLoadDelayRef.current = {
        handle,
        continued: false
      };
      const attemptLoad = () => {
        loadImage({ src: actualSrc, signal: controller.signal }).then((image) => {
          if (cancelled) {
            return;
          }
          setLoadedImage(image);
        }).catch((err) => {
          if (err.name === "AbortError") {
            continuePendingLoadDelay({ markAsReady: false });
            return;
          }
          errorCount++;
          if (errorCount <= maxRetries) {
            const backoff = exponentialBackoff(errorCount);
            console.warn(`Could not load <CanvasImage> with src="${truncateSrcForLabel(actualSrc)}", retrying in ${backoff}ms`);
            timeoutId = setTimeout(() => {
              if (!cancelled) {
                attemptLoad();
              }
            }, backoff);
          } else if (onError) {
            onError(err);
            continuePendingLoadDelay({ markAsReady: true });
          } else {
            cancelRender2(err);
          }
        });
      };
      attemptLoad();
      return () => {
        cancelled = true;
        if (timeoutId !== null) {
          clearTimeout(timeoutId);
        }
        controller.abort();
        continuePendingLoadDelay({ markAsReady: false });
      };
    }, [
      actualSrc,
      cancelRender2,
      continuePendingLoadDelay,
      delayRender2,
      delayRenderRetries,
      delayRenderTimeoutInMilliseconds,
      maxRetries,
      onError
    ]);
    (0, import_react67.useLayoutEffect)(() => {
      if (!loadedImage || !outputCanvas || !sourceCanvas) {
        return;
      }
      const handle = delayRender2(`Applying effects to <CanvasImage> with src="${truncateSrcForLabel(actualSrc)}"`);
      let cancelled = false;
      let continued = false;
      let cancelWaitForNextFrame = () => {
        return;
      };
      const continueRenderOnce = () => {
        if (continued) {
          return;
        }
        continued = true;
        continueRender2(handle);
      };
      const canvasWidth = width ?? loadedImage.width;
      const canvasHeight = height ?? loadedImage.height;
      const sourceContext = sourceCanvas.getContext("2d", {
        colorSpace: "srgb"
      });
      if (!sourceContext) {
        cancelRender2(new Error("Could not get 2D context for <CanvasImage> source canvas"));
        continueRenderOnce();
        return () => {
          continueRenderOnce();
        };
      }
      sourceCanvas.width = canvasWidth;
      sourceCanvas.height = canvasHeight;
      outputCanvas.width = canvasWidth;
      outputCanvas.height = canvasHeight;
      sourceContext.clearRect(0, 0, canvasWidth, canvasHeight);
      sourceContext.drawImage(loadedImage.element, ...calculateImageFit(fit, { width: loadedImage.width, height: loadedImage.height }, { width: canvasWidth, height: canvasHeight }));
      runEffectChain({
        state: chainState.get(canvasWidth, canvasHeight),
        source: sourceCanvas,
        effects: memoizedEffects,
        output: outputCanvas,
        width: canvasWidth,
        height: canvasHeight
      }).then((completed) => {
        if (completed && !cancelled) {
          cancelWaitForNextFrame = waitForNextFrame({
            onFrame: () => {
              if (cancelled) {
                return;
              }
              continueRenderOnce();
              continuePendingLoadDelay({ markAsReady: true });
            }
          });
        }
      }).catch((err) => {
        if (cancelled) {
          return;
        }
        if (onError) {
          onError(err);
          continueRenderOnce();
          continuePendingLoadDelay({ markAsReady: true });
        } else {
          cancelRender2(err);
        }
      });
      return () => {
        cancelled = true;
        cancelWaitForNextFrame();
        continueRenderOnce();
      };
    }, [
      actualSrc,
      cancelRender2,
      chainState,
      continueRender2,
      continuePendingLoadDelay,
      delayRender2,
      fit,
      height,
      loadedImage,
      memoizedEffects,
      onError,
      outputCanvas,
      sourceCanvas,
      width
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("canvas", {
      ...canvasProps,
      ref: canvasRef,
      width,
      height,
      className: className2,
      style: style2,
      id
    });
  });
  CanvasImageContent.displayName = "CanvasImageContent";
  var CanvasImageInner = (0, import_react67.forwardRef)(({
    src,
    width,
    height,
    fit,
    effects = [],
    className: className2,
    style: style2,
    id,
    onError,
    pauseWhenLoading,
    maxRetries,
    delayRenderRetries,
    delayRenderTimeoutInMilliseconds,
    durationInFrames,
    from,
    trimBefore,
    freeze,
    premountFor,
    postmountFor,
    styleWhilePremounted,
    styleWhilePostmounted,
    hidden,
    name,
    showInTimeline,
    cropLeft,
    cropRight,
    cropTop,
    cropBottom,
    controls,
    _remotionInternalDocumentationLink,
    _remotionInternalCropComponentName,
    outlineRef,
    ...canvasProps
  }, ref) => {
    if (!src) {
      throw new Error('No "src" prop was passed to <CanvasImage>.');
    }
    const memoizedEffectDefinitions = useMemoizedEffectDefinitions(effects);
    const actualRef = (0, import_react67.useRef)(null);
    (0, import_react67.useImperativeHandle)(ref, () => {
      return actualRef.current;
    }, []);
    const {
      effectivePostmountFor,
      effectivePremountFor,
      freezeFrame,
      isPremountingOrPostmounting,
      postmountingActive,
      premountingActive,
      premountingStyle
    } = usePremounting({
      from: from ?? 0,
      durationInFrames: durationInFrames ?? Infinity,
      premountFor: premountFor ?? null,
      postmountFor: postmountFor ?? null,
      style: style2 ?? null,
      styleWhilePremounted: styleWhilePremounted ?? null,
      styleWhilePostmounted: styleWhilePostmounted ?? null,
      hideWhilePremounted: "display-none"
    });
    const croppedStyle = useCropStyle({
      cropLeft,
      cropRight,
      cropTop,
      cropBottom,
      style: premountingStyle,
      componentName: _remotionInternalCropComponentName ?? "<CanvasImage />"
    });
    return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Freeze, {
      frame: freezeFrame,
      active: isPremountingOrPostmounting,
      children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Sequence, {
        layout: "none",
        from: from ?? 0,
        trimBefore,
        durationInFrames: durationInFrames ?? Infinity,
        freeze,
        hidden,
        showInTimeline: showInTimeline ?? true,
        name: name ?? "<CanvasImage>",
        _remotionInternalDocumentationLink: _remotionInternalDocumentationLink ?? "https://www.remotion.dev/docs/canvasimage",
        controls,
        _remotionInternalEffects: memoizedEffectDefinitions,
        _remotionInternalIsMedia: { type: "image", src },
        _remotionInternalPremountDisplay: effectivePremountFor || null,
        _remotionInternalPostmountDisplay: effectivePostmountFor || null,
        _remotionInternalIsPremounting: premountingActive,
        _remotionInternalIsPostmounting: postmountingActive,
        outlineRef: outlineRef ?? actualRef,
        children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(CanvasImageContent, {
          ref: actualRef,
          src,
          width,
          height,
          fit,
          effects,
          controls,
          className: className2,
          style: croppedStyle ?? void 0,
          id,
          onError,
          pauseWhenLoading,
          maxRetries,
          delayRenderRetries,
          delayRenderTimeoutInMilliseconds,
          refForOutline: outlineRef ?? null,
          ...canvasProps
        })
      })
    });
  });
  var CanvasImage = withInteractivitySchema({
    Component: CanvasImageInner,
    componentName: "<CanvasImage>",
    componentIdentity: "dev.remotion.remotion.CanvasImage",
    schema: canvasImageSchema,
    supportsEffects: true
  });
  CanvasImage.displayName = "CanvasImage";
  addSequenceStackTraces(CanvasImage);
  var IFrameRefForwarding = ({
    onLoad,
    onError,
    delayRenderRetries,
    delayRenderTimeoutInMilliseconds,
    ...props2
  }, ref) => {
    const { delayRender: delayRender2, continueRender: continueRender2 } = useDelayRender();
    const [handle] = (0, import_react68.useState)(() => delayRender2(`Loading <IFrame> with source ${props2.src}`, {
      retries: delayRenderRetries ?? void 0,
      timeoutInMilliseconds: delayRenderTimeoutInMilliseconds ?? void 0
    }));
    const didLoad = (0, import_react68.useCallback)((e) => {
      continueRender2(handle);
      onLoad?.(e);
    }, [handle, onLoad, continueRender2]);
    const didGetError = (0, import_react68.useCallback)((e) => {
      continueRender2(handle);
      if (onError) {
        onError(e);
      } else {
        console.error("Error loading iframe:", e, "Handle the event using the onError() prop to make this message disappear.");
      }
    }, [handle, onError, continueRender2]);
    return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("iframe", {
      referrerPolicy: "strict-origin-when-cross-origin",
      ...props2,
      ref,
      onError: didGetError,
      onLoad: didLoad
    });
  };
  var IFrame = (0, import_react68.forwardRef)(IFrameRefForwarding);
  function exponentialBackoff2(errorCount) {
    return 1e3 * 2 ** (errorCount - 1);
  }
  var ImgContent = ({
    onError,
    maxRetries = 2,
    src,
    pauseWhenLoading,
    delayRenderRetries,
    delayRenderTimeoutInMilliseconds,
    onImageFrame,
    crossOrigin,
    decoding,
    ref,
    refForOutline,
    ...props2
  }) => {
    const imageRef = (0, import_react69.useRef)(null);
    const errors = (0, import_react69.useRef)({});
    const { delayPlayback } = useBufferState();
    const sequenceContext = (0, import_react69.useContext)(SequenceContext);
    const [isLoading, setIsLoading] = (0, import_react69.useState)(false);
    const _propsValid = true;
    if (!_propsValid) {
      throw new Error("typecheck error");
    }
    const imageCallbackRef = (0, import_react69.useCallback)((img) => {
      imageRef.current = img;
      refForOutline.current = img;
      if (typeof ref === "function") {
        ref(img);
      } else if (ref) {
        ref.current = img;
      }
    }, [ref, refForOutline]);
    const actualSrc = usePreload(src);
    const retryIn = (0, import_react69.useCallback)((timeout) => {
      if (!imageRef.current) {
        return;
      }
      const currentSrc = imageRef.current.src;
      setTimeout(() => {
        if (!imageRef.current) {
          return;
        }
        const newSrc = imageRef.current?.src;
        if (newSrc !== currentSrc) {
          return;
        }
        imageRef.current.removeAttribute("src");
        imageRef.current.setAttribute("src", newSrc);
      }, timeout);
    }, []);
    const { delayRender: delayRender2, continueRender: continueRender2, cancelRender: cancelRender2 } = useDelayRender();
    const isPremounting = Boolean(sequenceContext?.premounting);
    const isPostmounting = Boolean(sequenceContext?.postmounting);
    const didGetError = (0, import_react69.useCallback)((e) => {
      if (!errors.current) {
        return;
      }
      errors.current[imageRef.current?.src] = (errors.current[imageRef.current?.src] ?? 0) + 1;
      if (onError && (errors.current[imageRef.current?.src] ?? 0) > maxRetries) {
        onError(e);
        return;
      }
      if ((errors.current[imageRef.current?.src] ?? 0) <= maxRetries) {
        const backoff = exponentialBackoff2(errors.current[imageRef.current?.src] ?? 0);
        console.warn(`Could not load image with source ${truncateSrcForLabel(imageRef.current?.src)}, retrying again in ${backoff}ms`);
        retryIn(backoff);
        return;
      }
      try {
        cancelRender2("Error loading image with src: " + truncateSrcForLabel(imageRef.current?.src));
      } catch {
      }
    }, [cancelRender2, maxRetries, onError, retryIn]);
    if (typeof window !== "undefined") {
      (0, import_react69.useLayoutEffect)(() => {
        if (!pauseWhenLoading || !isLoading || isPremounting || isPostmounting) {
          return;
        }
        return delayPlayback().unblock;
      }, [
        delayPlayback,
        isLoading,
        isPostmounting,
        isPremounting,
        pauseWhenLoading
      ]);
      (0, import_react69.useLayoutEffect)(() => {
        if (window.process?.env?.NODE_ENV === "test") {
          if (imageRef.current) {
            imageRef.current.src = actualSrc;
          }
          return;
        }
        const { current } = imageRef;
        if (!current) {
          return;
        }
        setIsLoading(true);
        const newHandle = delayRender2("Loading <Img> with src=" + truncateSrcForLabel(actualSrc), {
          retries: delayRenderRetries ?? void 0,
          timeoutInMilliseconds: delayRenderTimeoutInMilliseconds ?? void 0
        });
        let unmounted = false;
        const onComplete = () => {
          if (unmounted) {
            continueRender2(newHandle);
            return;
          }
          if ((errors.current[imageRef.current?.src] ?? 0) > 0) {
            delete errors.current[imageRef.current?.src];
            console.info(`Retry successful - ${truncateSrcForLabel(imageRef.current?.src)} is now loaded`);
          }
          if (current) {
            onImageFrame?.(current);
          }
          setIsLoading(false);
          continueRender2(newHandle);
        };
        if (!imageRef.current) {
          onComplete();
          return;
        }
        current.src = actualSrc;
        current.decode().then(onComplete).catch((err) => {
          console.warn(err);
          if (current.complete && current.naturalWidth > 0 && current.naturalHeight > 0) {
            onComplete();
          } else {
            current.addEventListener("load", onComplete);
          }
        });
        return () => {
          unmounted = true;
          current.removeEventListener("load", onComplete);
          continueRender2(newHandle);
        };
      }, [
        actualSrc,
        delayRenderRetries,
        delayRenderTimeoutInMilliseconds,
        onImageFrame,
        continueRender2,
        delayRender2
      ]);
    }
    const { isClientSideRendering, isRendering } = useRemotionEnvironment();
    const crossOriginValue = getCrossOriginValue({
      crossOrigin,
      requestsVideoFrame: false,
      isClientSideRendering
    });
    return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("img", {
      ...props2,
      ref: imageCallbackRef,
      crossOrigin: crossOriginValue,
      onError: didGetError,
      decoding: isRendering ? "sync" : decoding
    });
  };
  var NativeImgInner = ({
    hidden,
    name,
    showInTimeline,
    src,
    from,
    trimBefore,
    durationInFrames,
    freeze,
    premountFor,
    postmountFor,
    style: style2,
    styleWhilePremounted,
    styleWhilePostmounted,
    cropLeft,
    cropRight,
    cropTop,
    cropBottom,
    controls,
    outlineRef: refForOutline,
    ...props2
  }) => {
    if (!src) {
      throw new Error('No "src" prop was passed to <Img>.');
    }
    const {
      effectivePostmountFor,
      effectivePremountFor,
      freezeFrame,
      isPremountingOrPostmounting,
      postmountingActive,
      premountingActive,
      premountingStyle
    } = usePremounting({
      from: from ?? 0,
      durationInFrames: durationInFrames ?? Infinity,
      premountFor: premountFor ?? null,
      postmountFor: postmountFor ?? null,
      style: style2 ?? null,
      styleWhilePremounted: styleWhilePremounted ?? null,
      styleWhilePostmounted: styleWhilePostmounted ?? null,
      hideWhilePremounted: "display-none"
    });
    const croppedStyle = useCropStyle({
      cropLeft,
      cropRight,
      cropTop,
      cropBottom,
      style: premountingStyle,
      componentName: "<Img />"
    });
    return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(Freeze, {
      frame: freezeFrame,
      active: isPremountingOrPostmounting,
      children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(Sequence, {
        layout: "none",
        from: from ?? 0,
        trimBefore,
        durationInFrames: durationInFrames ?? Infinity,
        freeze,
        _remotionInternalDocumentationLink: "https://www.remotion.dev/docs/img",
        _remotionInternalIsMedia: { type: "image", src },
        _remotionInternalPremountDisplay: effectivePremountFor || null,
        _remotionInternalPostmountDisplay: effectivePostmountFor || null,
        _remotionInternalIsPremounting: premountingActive,
        _remotionInternalIsPostmounting: postmountingActive,
        name: name ?? "<Img>",
        controls,
        showInTimeline: showInTimeline ?? true,
        hidden,
        outlineRef: refForOutline,
        children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(ImgContent, {
          src,
          refForOutline,
          style: croppedStyle ?? void 0,
          ...props2
        })
      })
    });
  };
  var CanvasImageWithPrivateProps = CanvasImage;
  var imgSchema = {
    src: {
      type: "asset",
      default: void 0,
      description: "Source",
      keyframable: false
    },
    ...baseSchema,
    ...cropSchema,
    ...premountSchema,
    ...transformSchema,
    ...backgroundSchema,
    ...borderSchema,
    ...borderRadiusSchema
  };
  var imgCanvasFallbackIncompatibleProps = /* @__PURE__ */ new Set([
    "alt",
    "crossOrigin",
    "decoding",
    "fetchPriority",
    "loading",
    "onError",
    "onImageFrame",
    "onLoad",
    "sizes",
    "srcSet",
    "useMap"
  ]);
  var getIncompatiblePropNames = (props2) => Object.keys(props2).filter((key) => props2[key] !== void 0 && imgCanvasFallbackIncompatibleProps.has(key));
  var formatPropList = (props2) => {
    return props2.map((prop) => `"${prop}"`).join(", ");
  };
  var validateCanvasImageFallbackProps = ({
    props: props2,
    ref,
    width,
    height
  }) => {
    if (typeof width === "string" || typeof height === "string") {
      throw new Error('The "width" and "height" props must be numbers on <Img> when effects are passed, because <Img> renders a <CanvasImage>. Use numeric props or CSS dimensions in "style".');
    }
    const conflictingProps = getIncompatiblePropNames(props2);
    if (ref !== null && ref !== void 0) {
      conflictingProps.unshift("ref");
    }
    if (conflictingProps.length === 0) {
      return;
    }
    throw new Error(`The ${formatPropList(conflictingProps)} prop${conflictingProps.length === 1 ? "" : "s"} cannot be used on <Img> when effects are passed, because <Img> renders a <canvas> instead of a native <img>. Remove ${conflictingProps.length === 1 ? "this prop" : "these props"}.`);
  };
  var getFitFromObjectFit = (style2) => {
    const objectFit = style2?.objectFit;
    if (objectFit === "fill" || objectFit === "contain" || objectFit === "cover") {
      return objectFit;
    }
    return;
  };
  var ImgInner = ({
    effects = [],
    ref,
    hidden,
    name,
    showInTimeline,
    src,
    from,
    trimBefore,
    durationInFrames,
    freeze,
    premountFor,
    postmountFor,
    styleWhilePremounted,
    styleWhilePostmounted,
    controls,
    width,
    height,
    className: className2,
    style: style2,
    cropLeft,
    cropRight,
    cropTop,
    cropBottom,
    id,
    pauseWhenLoading,
    maxRetries,
    delayRenderRetries,
    delayRenderTimeoutInMilliseconds,
    ...props2
  }) => {
    const refForOutline = (0, import_react69.useRef)(null);
    const shouldPauseWhenLoading = resolveV5Default(pauseWhenLoading);
    if (effects.length === 0) {
      return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(NativeImgInner, {
        ...props2,
        ref,
        hidden,
        name,
        showInTimeline,
        src,
        from,
        trimBefore,
        durationInFrames,
        freeze,
        premountFor,
        postmountFor,
        styleWhilePremounted,
        styleWhilePostmounted,
        controls,
        width,
        height,
        className: className2,
        style: style2,
        cropLeft,
        cropRight,
        cropTop,
        cropBottom,
        id,
        pauseWhenLoading: shouldPauseWhenLoading,
        maxRetries,
        delayRenderRetries,
        delayRenderTimeoutInMilliseconds,
        outlineRef: refForOutline
      });
    }
    if (!src) {
      throw new Error('No "src" prop was passed to <Img>.');
    }
    validateCanvasImageFallbackProps({
      props: props2,
      ref,
      width,
      height
    });
    const canvasWidth = typeof width === "number" ? width : void 0;
    const canvasHeight = typeof height === "number" ? height : void 0;
    const canvasProps = props2;
    const canvasFit = getFitFromObjectFit(style2) ?? "fill";
    return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(CanvasImageWithPrivateProps, {
      src,
      width: canvasWidth,
      height: canvasHeight,
      fit: canvasFit,
      effects,
      className: className2,
      style: style2,
      cropLeft,
      cropRight,
      cropTop,
      cropBottom,
      id,
      pauseWhenLoading: shouldPauseWhenLoading,
      maxRetries,
      delayRenderRetries,
      delayRenderTimeoutInMilliseconds,
      from,
      trimBefore,
      durationInFrames,
      freeze,
      premountFor,
      postmountFor,
      styleWhilePremounted,
      styleWhilePostmounted,
      hidden,
      name: name ?? "<Img>",
      showInTimeline,
      _remotionInternalDocumentationLink: "https://www.remotion.dev/docs/img",
      _remotionInternalCropComponentName: "<Img />",
      controls,
      outlineRef: refForOutline,
      ...canvasProps
    });
  };
  var Img = withInteractivitySchema({
    Component: ImgInner,
    componentName: "<Img>",
    componentIdentity: "dev.remotion.remotion.Img",
    schema: imgSchema,
    supportsEffects: true
  });
  addSequenceStackTraces(Img);
  var sourcePathToIdentityPrefix = (packageName) => {
    if (packageName === "remotion") {
      return "dev.remotion.remotion";
    }
    if (packageName.startsWith("@remotion/")) {
      const normalizedPackageName = packageName.slice("@remotion/".length).replace(/-([a-z])/g, (_, char) => char.toUpperCase());
      return `dev.remotion.${normalizedPackageName}`;
    }
    throw new Error(`Unsupported Remotion package name: ${packageName}`);
  };
  var makeRemotionComponentIdentity = ({
    packageName,
    componentName
  }) => {
    return `${sourcePathToIdentityPrefix(packageName)}.${componentName}`;
  };
  var interactiveElementSchema = {
    ...baseSchema,
    ...transformSchema,
    ...cropSchema
  };
  var interactiveBackgroundElementSchema = {
    ...interactiveElementSchema,
    ...backgroundSchema
  };
  var interactiveBorderElementSchema = {
    ...interactiveBackgroundElementSchema,
    ...borderSchema,
    ...borderRadiusSchema
  };
  var interactiveTextElementSchema = {
    ...interactiveBorderElementSchema,
    ...textSchema,
    ...textContentSchema
  };
  var interactiveSvgTextElementSchema = {
    ...interactiveElementSchema,
    ...svgPaintSchema,
    ...textSchema,
    ...textContentSchema
  };
  var interactiveSvgElementSchema = {
    ...interactiveElementSchema,
    ...svgPaintSchema
  };
  var interactiveSvgStrokeElementSchema = {
    ...interactiveElementSchema,
    ...svgStrokeSchema
  };
  var interactiveSvgRootElementSchema = {
    ...interactiveBorderElementSchema,
    ...svgPaintSchema
  };
  var setRef2 = (ref, value) => {
    if (typeof ref === "function") {
      ref(value);
    } else if (ref) {
      ref.current = value;
    }
  };
  var withSchema = (options) => {
    const Wrapped = withInteractivitySchema(options);
    addSequenceStackTraces(Wrapped);
    return Wrapped;
  };
  var makeInteractiveElement = (tag, displayName, schema) => {
    const Inner = (0, import_react70.forwardRef)((propsWithControls, ref) => {
      const {
        durationInFrames,
        from,
        trimBefore,
        freeze,
        hidden,
        name,
        showInTimeline,
        controls,
        cropLeft,
        cropRight,
        cropTop,
        cropBottom,
        style: style2,
        ...props2
      } = propsWithControls;
      const croppedStyle = useCropStyle({
        cropLeft,
        cropRight,
        cropTop,
        cropBottom,
        style: style2 ?? null,
        componentName: displayName
      });
      const refForOutline = (0, import_react70.useRef)(null);
      const callbackRef = (0, import_react70.useCallback)((element) => {
        refForOutline.current = element;
        setRef2(ref, element);
      }, [ref]);
      return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(Sequence, {
        layout: "none",
        from: from ?? 0,
        trimBefore,
        durationInFrames: durationInFrames ?? Infinity,
        freeze,
        hidden,
        name: name ?? displayName,
        showInTimeline: showInTimeline ?? true,
        controls,
        _remotionInternalDocumentationLink: "https://www.remotion.dev/docs/interactive",
        outlineRef: refForOutline,
        children: import_react70.default.createElement(tag, {
          ...props2,
          style: croppedStyle ?? void 0,
          ref: callbackRef
        })
      });
    });
    Inner.displayName = displayName;
    const Wrapped = withSchema({
      Component: Inner,
      componentName: displayName,
      componentIdentity: makeRemotionComponentIdentity({
        packageName: "remotion",
        componentName: displayName.slice(1, -1)
      }),
      schema,
      supportsEffects: false
    });
    Wrapped.displayName = displayName;
    return Wrapped;
  };
  var makeInteractiveTextElement = (tag, displayName) => {
    return makeInteractiveElement(tag, displayName, interactiveTextElementSchema);
  };
  var makeInteractiveSvgElement = (tag, displayName) => {
    return makeInteractiveElement(tag, displayName, interactiveSvgElementSchema);
  };
  var makeInteractiveSvgStrokeElement = (tag, displayName) => {
    return makeInteractiveElement(tag, displayName, interactiveSvgStrokeElementSchema);
  };
  var Interactive = {
    baseSchema,
    captionsSchema,
    transformSchema,
    textSchema,
    backgroundSchema,
    borderSchema,
    borderRadiusSchema,
    cropSchema,
    svgPaintSchema,
    svgStrokeSchema,
    premountSchema,
    sequenceSchema,
    withSchema,
    _internalMakeRemotionComponentIdentity: makeRemotionComponentIdentity,
    A: makeInteractiveTextElement("a", "<Interactive.A>"),
    Article: makeInteractiveTextElement("article", "<Interactive.Article>"),
    Aside: makeInteractiveTextElement("aside", "<Interactive.Aside>"),
    Button: makeInteractiveTextElement("button", "<Interactive.Button>"),
    Circle: makeInteractiveSvgElement("circle", "<Interactive.Circle>"),
    Code: makeInteractiveTextElement("code", "<Interactive.Code>"),
    Div: makeInteractiveTextElement("div", "<Interactive.Div>"),
    Ellipse: makeInteractiveSvgElement("ellipse", "<Interactive.Ellipse>"),
    Em: makeInteractiveTextElement("em", "<Interactive.Em>"),
    Footer: makeInteractiveTextElement("footer", "<Interactive.Footer>"),
    G: makeInteractiveSvgElement("g", "<Interactive.G>"),
    H1: makeInteractiveTextElement("h1", "<Interactive.H1>"),
    H2: makeInteractiveTextElement("h2", "<Interactive.H2>"),
    H3: makeInteractiveTextElement("h3", "<Interactive.H3>"),
    H4: makeInteractiveTextElement("h4", "<Interactive.H4>"),
    H5: makeInteractiveTextElement("h5", "<Interactive.H5>"),
    H6: makeInteractiveTextElement("h6", "<Interactive.H6>"),
    Header: makeInteractiveTextElement("header", "<Interactive.Header>"),
    Label: makeInteractiveTextElement("label", "<Interactive.Label>"),
    Li: makeInteractiveTextElement("li", "<Interactive.Li>"),
    Line: makeInteractiveSvgStrokeElement("line", "<Interactive.Line>"),
    Main: makeInteractiveTextElement("main", "<Interactive.Main>"),
    Nav: makeInteractiveTextElement("nav", "<Interactive.Nav>"),
    Ol: makeInteractiveTextElement("ol", "<Interactive.Ol>"),
    P: makeInteractiveTextElement("p", "<Interactive.P>"),
    Path: makeInteractiveSvgElement("path", "<Interactive.Path>"),
    Pre: makeInteractiveTextElement("pre", "<Interactive.Pre>"),
    Rect: makeInteractiveSvgElement("rect", "<Interactive.Rect>"),
    Section: makeInteractiveTextElement("section", "<Interactive.Section>"),
    Small: makeInteractiveTextElement("small", "<Interactive.Small>"),
    Span: makeInteractiveTextElement("span", "<Interactive.Span>"),
    Strong: makeInteractiveTextElement("strong", "<Interactive.Strong>"),
    Svg: makeInteractiveElement("svg", "<Interactive.Svg>", interactiveSvgRootElementSchema),
    Text: makeInteractiveElement("text", "<Interactive.Text>", interactiveSvgTextElementSchema),
    Ul: makeInteractiveTextElement("ul", "<Interactive.Ul>")
  };
  var getAnimatedImageDurationInSeconds = async ({
    resolvedSrc,
    signal,
    requestInit,
    contentType
  }) => {
    const { decoder, selectedTrack } = await createImageDecoder({
      resolvedSrc,
      signal,
      requestInit,
      contentType
    });
    try {
      const { image } = await decoder.decode({
        frameIndex: selectedTrack.frameCount - 1,
        completeFramesOnly: true
      });
      try {
        if (image.duration === null) {
          throw new Error("Could not determine animated image duration");
        }
        return (image.timestamp + image.duration) / 1e6;
      } finally {
        image.close();
      }
    } finally {
      decoder.close();
    }
  };
  var compositionsRef = import_react72.default.createRef();
  var CompositionManagerProvider = ({
    children,
    onlyRenderComposition,
    currentCompositionMetadata,
    initialCompositions,
    initialCanvasContent
  }) => {
    const [folders, setFolders] = (0, import_react73.useState)([]);
    const [canvasContent, setCanvasContent] = (0, import_react73.useState)(initialCanvasContent);
    const [compositions, setCompositions] = (0, import_react73.useState)(initialCompositions);
    const currentcompositionsRef = (0, import_react73.useRef)(compositions);
    const updateCompositions = (0, import_react73.useCallback)((updateComps) => {
      setCompositions((comps) => {
        const updated = updateComps(comps);
        currentcompositionsRef.current = updated;
        return updated;
      });
    }, []);
    const registerComposition = (0, import_react73.useCallback)((comp) => {
      updateCompositions((comps) => {
        if (comps.find((c22) => c22.id === comp.id)) {
          throw new Error(`Multiple composition with id ${comp.id} are registered.`);
        }
        return [...comps, comp];
      });
    }, [updateCompositions]);
    const unregisterComposition = (0, import_react73.useCallback)((id) => {
      setCompositions((comps) => {
        return comps.filter((c22) => c22.id !== id);
      });
    }, []);
    const registerFolder = (0, import_react73.useCallback)((name, parent, nonce, stack) => {
      setFolders((prevFolders) => {
        return [
          ...prevFolders,
          {
            name,
            parent,
            nonce,
            stack
          }
        ];
      });
    }, []);
    const unregisterFolder = (0, import_react73.useCallback)((name, parent) => {
      setFolders((prevFolders) => {
        return prevFolders.filter((p) => !(p.name === name && p.parent === parent));
      });
    }, []);
    (0, import_react73.useImperativeHandle)(compositionsRef, () => {
      return {
        getCompositions: () => currentcompositionsRef.current
      };
    }, []);
    const compositionManagerSetters = (0, import_react73.useMemo)(() => {
      return {
        registerComposition,
        unregisterComposition,
        registerFolder,
        unregisterFolder,
        setCanvasContent,
        onlyRenderComposition
      };
    }, [
      registerComposition,
      registerFolder,
      unregisterComposition,
      unregisterFolder,
      onlyRenderComposition
    ]);
    const compositionManagerContextValue = (0, import_react73.useMemo)(() => {
      return {
        compositions,
        folders,
        currentCompositionMetadata,
        canvasContent
      };
    }, [compositions, folders, currentCompositionMetadata, canvasContent]);
    return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(CompositionManager.Provider, {
      value: compositionManagerContextValue,
      children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(CompositionSetters.Provider, {
        value: compositionManagerSetters,
        children
      })
    });
  };
  var exports_default_css = {};
  __export(exports_default_css, {
    makeDefaultPreviewCSS: () => makeDefaultPreviewCSS,
    injectCSS: () => injectCSS,
    OBJECTFIT_CONTAIN_CLASS_NAME: () => OBJECTFIT_CONTAIN_CLASS_NAME
  });
  var injected = {};
  var injectCSS = (css) => {
    if (typeof document === "undefined") {
      return () => {
      };
    }
    if (injected[css]) {
      return () => {
      };
    }
    const head = document.head || document.getElementsByTagName("head")[0];
    const style2 = document.createElement("style");
    style2.appendChild(document.createTextNode(css));
    head.prepend(style2);
    injected[css] = style2;
    return () => {
      const styleElement = injected[css];
      if (styleElement) {
        if (styleElement.parentNode) {
          styleElement.parentNode.removeChild(styleElement);
        }
        delete injected[css];
      }
    };
  };
  var OBJECTFIT_CONTAIN_CLASS_NAME = "__remotion_objectfitcontain";
  var makeDefaultPreviewCSS = (scope, backgroundColor) => {
    if (!scope) {
      return `
    * {
      box-sizing: border-box;
    }
    body {
      margin: 0;
	    background-color: ${backgroundColor};
    }
    .${OBJECTFIT_CONTAIN_CLASS_NAME} {
      object-fit: contain;
    }
    `;
    }
    return `
    ${scope} * {
      box-sizing: border-box;
    }
    ${scope} *:-webkit-full-screen {
      width: 100%;
      height: 100%;
    }
    ${scope} .${OBJECTFIT_CONTAIN_CLASS_NAME} {
      object-fit: contain;
    }
  `;
  };
  var REMOTION_STUDIO_CONTAINER_ELEMENT = "__remotion-studio-container";
  var getPreviewDomElement = () => {
    return document.getElementById(REMOTION_STUDIO_CONTAINER_ELEMENT);
  };
  var MaxMediaCacheSizeContext = import_react74.default.createContext(null);
  var Root = null;
  var listeners = [];
  var getRoot = () => {
    return Root;
  };
  var waitForRoot = (fn) => {
    if (Root) {
      fn(Root);
      return () => {
        return;
      };
    }
    listeners.push(fn);
    return () => {
      listeners = listeners.filter((l) => l !== fn);
    };
  };
  var MediaEnabledContext = (0, import_react76.createContext)(null);
  var useVideoEnabled = () => {
    const context = (0, import_react76.useContext)(MediaEnabledContext);
    if (!context) {
      return window.remotion_videoEnabled;
    }
    if (context.videoEnabled === null) {
      return window.remotion_videoEnabled;
    }
    return context.videoEnabled;
  };
  var useAudioEnabled = () => {
    const context = (0, import_react76.useContext)(MediaEnabledContext);
    if (!context) {
      return window.remotion_audioEnabled;
    }
    if (context.audioEnabled === null) {
      return window.remotion_audioEnabled;
    }
    return context.audioEnabled;
  };
  var MediaEnabledProvider = ({
    children,
    videoEnabled,
    audioEnabled
  }) => {
    const value = (0, import_react76.useMemo)(() => ({ videoEnabled, audioEnabled }), [videoEnabled, audioEnabled]);
    return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(MediaEnabledContext.Provider, {
      value,
      children
    });
  };
  var RemotionRootContexts = ({
    children,
    numberOfAudioTags,
    logLevel,
    audioLatencyHint,
    previewSampleRate,
    videoEnabled,
    audioEnabled,
    frameState,
    _experimentalKeepAudioContextAlive
  }) => {
    const nonceContext = (0, import_react75.useMemo)(() => {
      let counter = 0;
      return {
        getNonce: () => counter++
      };
    }, []);
    const logging = (0, import_react75.useMemo)(() => {
      return { logLevel, mountTime: Date.now() };
    }, [logLevel]);
    return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(LogLevelContext.Provider, {
      value: logging,
      children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(NonceContext.Provider, {
        value: nonceContext,
        children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(TimelineContextProvider, {
          frameState,
          children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(MediaEnabledProvider, {
            videoEnabled,
            audioEnabled,
            children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(EditorPropsProvider, {
              children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(PrefetchProvider, {
                children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(SequenceManagerProvider, {
                  children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(DurationsContextProvider, {
                    children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(BufferingProvider, {
                      children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(SharedAudioContextProvider, {
                        audioLatencyHint,
                        audioEnabled,
                        previewSampleRate,
                        _experimentalKeepAudioContextAlive,
                        children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(SharedAudioTagsContextProvider, {
                          numberOfAudioTags,
                          children
                        })
                      })
                    })
                  })
                })
              })
            })
          })
        })
      })
    });
  };
  var makeRenderResourceManager = () => {
    const resources = /* @__PURE__ */ new Map();
    let disposed = false;
    return {
      getOrCreateResource: ({
        key,
        create
      }) => {
        if (disposed) {
          throw new Error("Render resource manager has already been disposed");
        }
        const existing = resources.get(key);
        if (existing) {
          return existing.resource;
        }
        const created = create();
        resources.set(key, created);
        return created.resource;
      },
      dispose: () => {
        if (disposed) {
          return;
        }
        disposed = true;
        const resourcesToDispose = Array.from(resources.values());
        resources.clear();
        let firstError = null;
        for (const resource of resourcesToDispose) {
          try {
            resource.dispose();
          } catch (error2) {
            firstError ??= error2;
          }
        }
        if (firstError !== null) {
          throw firstError;
        }
      }
    };
  };
  var RenderResourceManagerContext = import_react77.default.createContext(null);
  var validCodecs = [
    "h264",
    "h265",
    "vp8",
    "vp9",
    "av1",
    "mp3",
    "aac",
    "wav",
    "prores",
    "h264-mkv",
    "h264-ts",
    "gif"
  ];
  function validateCodec(defaultCodec, location2, name) {
    if (typeof defaultCodec === "undefined") {
      return;
    }
    if (typeof defaultCodec !== "string") {
      throw new TypeError(`The "${name}" prop ${location2} must be a string, but you passed a value of type ${typeof defaultCodec}.`);
    }
    if (!validCodecs.includes(defaultCodec)) {
      throw new Error(`The "${name}" prop ${location2} must be one of ${validCodecs.join(", ")}, but you passed ${defaultCodec}.`);
    }
  }
  var validateCalculated = ({
    calculated,
    compositionId: compositionId2,
    compositionFps,
    compositionHeight,
    compositionWidth,
    compositionDurationInFrames
  }) => {
    const calculateMetadataErrorLocation = `calculated by calculateMetadata() for the composition "${compositionId2}"`;
    const defaultErrorLocation = `of the "<Composition />" component with the id "${compositionId2}"`;
    const width = calculated?.width ?? compositionWidth ?? void 0;
    validateDimension(width, "width", calculated?.width ? calculateMetadataErrorLocation : defaultErrorLocation);
    const height = calculated?.height ?? compositionHeight ?? void 0;
    validateDimension(height, "height", calculated?.height ? calculateMetadataErrorLocation : defaultErrorLocation);
    const fps = calculated?.fps ?? compositionFps ?? null;
    validateFps(fps, calculated?.fps ? calculateMetadataErrorLocation : defaultErrorLocation, false);
    const durationInFrames = calculated?.durationInFrames ?? compositionDurationInFrames ?? null;
    validateDurationInFrames(durationInFrames, {
      allowFloats: false,
      component: `of the "<Composition />" component with the id "${compositionId2}"`
    });
    const defaultCodec = calculated?.defaultCodec;
    validateCodec(defaultCodec, calculateMetadataErrorLocation, "defaultCodec");
    const defaultOutName = calculated?.defaultOutName;
    const defaultVideoImageFormat = calculated?.defaultVideoImageFormat;
    const defaultPixelFormat = calculated?.defaultPixelFormat;
    const defaultProResProfile = calculated?.defaultProResProfile;
    const defaultSampleRate = calculated?.defaultSampleRate;
    return {
      width,
      height,
      fps,
      durationInFrames,
      defaultCodec,
      defaultOutName,
      defaultVideoImageFormat,
      defaultPixelFormat,
      defaultProResProfile,
      defaultSampleRate
    };
  };
  var makeVideoConfigWithMetadata = ({
    calculated,
    compositionDurationInFrames,
    compositionFps,
    compositionHeight,
    compositionId: compositionId2,
    compositionWidth,
    defaultProps,
    originalProps
  }) => {
    const data = validateCalculated({
      calculated,
      compositionDurationInFrames,
      compositionFps,
      compositionHeight,
      compositionWidth,
      compositionId: compositionId2
    });
    return {
      metadataSource: {
        durationInFrames: calculated?.durationInFrames === void 0 ? "composition" : "calculate-metadata",
        fps: calculated?.fps === void 0 ? "composition" : "calculate-metadata",
        height: calculated?.height === void 0 ? "composition" : "calculate-metadata",
        width: calculated?.width === void 0 ? "composition" : "calculate-metadata"
      },
      videoConfig: {
        ...data,
        id: compositionId2,
        defaultProps: serializeThenDeserializeInStudio(defaultProps ?? {}),
        props: serializeThenDeserializeInStudio(calculated?.props ?? originalProps),
        defaultCodec: data.defaultCodec ?? null,
        defaultOutName: data.defaultOutName ?? null,
        defaultVideoImageFormat: data.defaultVideoImageFormat ?? null,
        defaultPixelFormat: data.defaultPixelFormat ?? null,
        defaultProResProfile: data.defaultProResProfile ?? null,
        defaultSampleRate: data.defaultSampleRate ?? null
      }
    };
  };
  var resolveVideoConfigWithMetadata = ({
    calculateMetadata,
    signal,
    defaultProps,
    inputProps: originalProps,
    compositionId: compositionId2,
    compositionDurationInFrames,
    compositionFps,
    compositionHeight,
    compositionWidth
  }) => {
    const calculatedProm = calculateMetadata ? calculateMetadata({
      defaultProps,
      props: originalProps,
      abortSignal: signal,
      compositionId: compositionId2,
      isRendering: getRemotionEnvironment().isRendering
    }) : null;
    if (calculatedProm !== null && typeof calculatedProm === "object" && "then" in calculatedProm) {
      return calculatedProm.then((c22) => {
        return makeVideoConfigWithMetadata({
          calculated: c22,
          compositionDurationInFrames,
          compositionFps,
          compositionHeight,
          compositionWidth,
          compositionId: compositionId2,
          defaultProps,
          originalProps
        });
      });
    }
    return makeVideoConfigWithMetadata({
      calculated: calculatedProm,
      compositionDurationInFrames,
      compositionFps,
      compositionHeight,
      compositionWidth,
      compositionId: compositionId2,
      defaultProps,
      originalProps
    });
  };
  var resolveVideoConfig = (params) => {
    const resolved = resolveVideoConfigWithMetadata(params);
    if (typeof resolved === "object" && "then" in resolved) {
      return resolved.then(({ videoConfig }) => videoConfig);
    }
    return resolved.videoConfig;
  };
  var resolveVideoConfigWithMetadataOrCatch = (params) => {
    try {
      return {
        type: "success",
        result: resolveVideoConfigWithMetadata(params)
      };
    } catch (err) {
      return {
        type: "error",
        error: err
      };
    }
  };
  var resolveVideoConfigOrCatch = (params) => {
    try {
      const promiseOrReturnValue = resolveVideoConfig(params);
      return {
        type: "success",
        result: promiseOrReturnValue
      };
    } catch (err) {
      return {
        type: "error",
        error: err
      };
    }
  };
  var SequenceStackTracesUpdateContext = import_react78.default.createContext(() => {
  });
  var getEnvVariables = () => {
    if (getRemotionEnvironment().isRendering) {
      const param = window.remotion_envVariables;
      if (!param) {
        return {};
      }
      return { ...JSON.parse(param), NODE_ENV: "production" };
    }
    if (false) {
    }
    return {
      NODE_ENV: "production"
    };
  };
  var setupEnvVariables = () => {
    const env = getEnvVariables();
    if (!window.process) {
      window.process = {};
    }
    if (!window.process.env) {
      window.process.env = {};
    }
    Object.keys(env).forEach((key) => {
      window.process.env[key] = env[key];
    });
  };
  var CurrentScaleContext = import_react79.default.createContext(null);
  var PreviewSizeContext = (0, import_react79.createContext)({
    setSize: () => {
      return;
    },
    size: { size: "auto", translation: { x: 0, y: 0 } }
  });
  var calculateScale = ({
    canvasSize,
    compositionHeight,
    compositionWidth,
    previewSize
  }) => {
    const heightRatio = canvasSize.height / compositionHeight;
    const widthRatio = canvasSize.width / compositionWidth;
    const ratio = Math.min(heightRatio, widthRatio);
    if (previewSize === "auto") {
      if (ratio === 0) {
        return 1;
      }
      return ratio;
    }
    return Number(previewSize);
  };
  var PixelDensityContext = import_react80.default.createContext(null);
  var getOffthreadVideoSource = ({
    src,
    transparent,
    currentTime,
    toneMapped
  }) => {
    return `http://localhost:${window.remotion_proxyPort}/proxy?src=${encodeURIComponent(getAbsoluteSrc(src))}&time=${encodeURIComponent(Math.max(0, currentTime))}&transparent=${String(transparent)}&toneMapped=${String(toneMapped)}`;
  };
  var OffthreadVideoForRendering = ({
    onError,
    volume: volumeProp,
    playbackRate,
    src,
    muted,
    allowAmplificationDuringRender,
    transparent,
    toneMapped,
    toneFrequency,
    name,
    loopVolumeCurveBehavior,
    delayRenderRetries,
    delayRenderTimeoutInMilliseconds,
    onVideoFrame,
    crossOrigin,
    audioStreamIndex,
    preservePitch: _preservePitch,
    ...props2
  }) => {
    const absoluteFrame = useTimelinePosition();
    const frame = useCurrentFrame();
    const volumePropsFrame = useFrameForVolumeProp(loopVolumeCurveBehavior);
    const videoConfig = useUnsafeVideoConfig();
    const sequenceContext = (0, import_react82.useContext)(SequenceContext);
    const mediaStartsAt = useMediaStartsAt();
    const { registerRenderAsset, unregisterRenderAsset } = (0, import_react82.useContext)(RenderAssetManager);
    if (!src) {
      throw new TypeError("No `src` was passed to <OffthreadVideo>.");
    }
    const id = (0, import_react82.useMemo)(() => `offthreadvideo-${random(src)}-${sequenceContext?.cumulatedFrom}-${sequenceContext?.relativeFrom}-${sequenceContext?.durationInFrames}`, [
      src,
      sequenceContext?.cumulatedFrom,
      sequenceContext?.relativeFrom,
      sequenceContext?.durationInFrames
    ]);
    if (!videoConfig) {
      throw new Error("No video config found");
    }
    const volume = evaluateVolume({
      volume: volumeProp,
      frame: volumePropsFrame,
      mediaVolume: 1
    });
    warnAboutTooHighVolume(volume);
    (0, import_react82.useEffect)(() => {
      if (!src) {
        throw new Error("No src passed");
      }
      if (!window.remotion_audioEnabled) {
        return;
      }
      if (muted) {
        return;
      }
      if (volume <= 0) {
        return;
      }
      registerRenderAsset({
        type: "video",
        src: getAbsoluteSrc(src),
        id,
        frame: absoluteFrame,
        volume,
        mediaFrame: frame,
        playbackRate,
        toneFrequency,
        audioStartFrame: Math.max(0, -(sequenceContext?.cumulatedNegativeFrom ?? 0)),
        audioStreamIndex
      });
      return () => unregisterRenderAsset(id);
    }, [
      muted,
      src,
      registerRenderAsset,
      id,
      unregisterRenderAsset,
      volume,
      frame,
      absoluteFrame,
      playbackRate,
      toneFrequency,
      sequenceContext?.cumulatedNegativeFrom,
      audioStreamIndex
    ]);
    const currentTime = (0, import_react82.useMemo)(() => {
      return getExpectedMediaFrameUncorrected({
        frame,
        playbackRate: playbackRate || 1,
        startFrom: -mediaStartsAt
      }) / videoConfig.fps;
    }, [frame, mediaStartsAt, playbackRate, videoConfig.fps]);
    const actualSrc = (0, import_react82.useMemo)(() => {
      return getOffthreadVideoSource({
        src,
        currentTime,
        transparent,
        toneMapped
      });
    }, [toneMapped, currentTime, src, transparent]);
    const [imageSrc, setImageSrc] = (0, import_react82.useState)(null);
    const { delayRender: delayRender2, continueRender: continueRender2 } = useDelayRender();
    (0, import_react82.useLayoutEffect)(() => {
      if (!window.remotion_videoEnabled) {
        return;
      }
      const cleanup = [];
      setImageSrc(null);
      const controller = new AbortController();
      const newHandle = delayRender2(`Fetching ${actualSrc} from server`, {
        retries: delayRenderRetries ?? void 0,
        timeoutInMilliseconds: delayRenderTimeoutInMilliseconds ?? void 0
      });
      const execute = async () => {
        try {
          const res = await fetch(actualSrc, {
            signal: controller.signal,
            cache: "no-store"
          });
          if (res.status !== 200) {
            if (res.status === 500) {
              const json = await res.json();
              if (json.error) {
                const cleanedUpErrorMessage = json.error.replace(/^Error: /, "");
                throw new Error(cleanedUpErrorMessage);
              }
            }
            throw new Error(`Server returned status ${res.status} while fetching ${actualSrc}`);
          }
          const blob = await res.blob();
          const url = URL.createObjectURL(blob);
          cleanup.push(() => URL.revokeObjectURL(url));
          setImageSrc({
            src: url,
            handle: newHandle
          });
        } catch (err) {
          if (err.message.includes("aborted")) {
            continueRender2(newHandle);
            return;
          }
          if (controller.signal.aborted) {
            continueRender2(newHandle);
            return;
          }
          if (err.message.includes("Failed to fetch")) {
            err = new Error(`Failed to fetch ${actualSrc}. This could be caused by Chrome rejecting the request because the disk space is low. Consider increasing the disk size of your environment.`, { cause: err });
          }
          if (onError) {
            onError(err);
          } else {
            cancelRender(err);
          }
        }
      };
      execute();
      cleanup.push(() => {
        if (controller.signal.aborted) {
          return;
        }
        controller.abort();
      });
      return () => {
        cleanup.forEach((c22) => c22());
      };
    }, [
      actualSrc,
      delayRenderRetries,
      delayRenderTimeoutInMilliseconds,
      onError,
      continueRender2,
      delayRender2
    ]);
    const onErr = (0, import_react82.useCallback)(() => {
      if (onError) {
        onError?.(new Error("Failed to load image with src " + imageSrc));
      } else {
        cancelRender("Failed to load image with src " + imageSrc);
      }
    }, [imageSrc, onError]);
    const className2 = (0, import_react82.useMemo)(() => {
      return [OBJECTFIT_CONTAIN_CLASS_NAME, props2.className].filter(truthy).join(" ");
    }, [props2.className]);
    const onImageFrame = (0, import_react82.useCallback)((img) => {
      if (onVideoFrame) {
        onVideoFrame(img);
      }
    }, [onVideoFrame]);
    if (!imageSrc || !window.remotion_videoEnabled) {
      return null;
    }
    continueRender2(imageSrc.handle);
    return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(Img, {
      src: imageSrc.src,
      delayRenderRetries,
      delayRenderTimeoutInMilliseconds,
      onImageFrame,
      ...props2,
      onError: onErr,
      className: className2
    });
  };
  var useEmitVideoFrame = ({
    ref,
    onVideoFrame
  }) => {
    (0, import_react84.useEffect)(() => {
      const { current } = ref;
      if (!current) {
        return;
      }
      if (!onVideoFrame) {
        return;
      }
      let handle = 0;
      const callback = (_now, metadata) => {
        if (!ref.current) {
          return;
        }
        onVideoFrame(ref.current, _now, metadata);
        handle = ref.current.requestVideoFrameCallback(callback);
      };
      onVideoFrame(current);
      if (!current.requestVideoFrameCallback) {
        return;
      }
      handle = current.requestVideoFrameCallback(callback);
      return () => {
        if (handle) {
          current.cancelVideoFrameCallback(handle);
        }
      };
    }, [onVideoFrame, ref]);
  };
  var MediaPlaybackError = class extends Error {
    src;
    constructor({ message, src }) {
      super(message);
      this.name = "MediaPlaybackError";
      this.src = src;
    }
  };
  var VideoForDevelopmentRefForwardingFunction = (props2, ref) => {
    const context = (0, import_react83.useContext)(SharedAudioContext);
    if (!context) {
      throw new Error("SharedAudioContext not found");
    }
    const videoRef = (0, import_react83.useRef)(null);
    const sharedSource = (0, import_react83.useMemo)(() => {
      if (!context.audioContext) {
        return null;
      }
      return makeSharedElementSourceNode({
        audioContext: context.audioContext,
        ref: videoRef
      });
    }, [context.audioContext]);
    const effectToUse = import_react83.default.useInsertionEffect ?? import_react83.default.useLayoutEffect;
    effectToUse(() => {
      return () => {
        requestAnimationFrame(() => {
          sharedSource?.cleanup();
        });
      };
    }, [sharedSource]);
    const {
      volume,
      muted,
      playbackRate,
      preservePitch,
      onlyWarnForMediaSeekingError,
      src,
      onDuration,
      acceptableTimeShift,
      acceptableTimeShiftInSeconds,
      toneFrequency,
      name,
      _remotionInternalNativeLoopPassed,
      _remotionInternalStack,
      style: style2,
      pauseWhenBuffering,
      showInTimeline,
      loopVolumeCurveBehavior,
      onError,
      onAutoPlayError,
      onVideoFrame,
      crossOrigin,
      delayRenderRetries,
      delayRenderTimeoutInMilliseconds,
      allowAmplificationDuringRender,
      useWebAudioApi,
      audioStreamIndex,
      ...nativeProps
    } = props2;
    const _propsValid = true;
    if (!_propsValid) {
      throw new Error("typecheck error");
    }
    const volumePropFrame = useFrameForVolumeProp(loopVolumeCurveBehavior ?? "repeat");
    const { fps, durationInFrames } = useVideoConfig();
    const parentSequence = (0, import_react83.useContext)(SequenceContext);
    const logLevel = useLogLevel();
    const mountTime = useMountTime();
    const [timelineId] = (0, import_react83.useState)(() => String(Math.random()));
    if (typeof acceptableTimeShift !== "undefined") {
      throw new Error("acceptableTimeShift has been removed. Use acceptableTimeShiftInSeconds instead.");
    }
    const [mediaVolume] = useMediaVolumeState();
    const [playerMuted] = usePlayerMutedState();
    const userPreferredVolume = evaluateVolume({
      frame: volumePropFrame,
      volume,
      mediaVolume
    });
    warnAboutTooHighVolume(userPreferredVolume);
    const getStack = (0, import_react83.useCallback)(() => {
      return _remotionInternalStack ?? null;
    }, [_remotionInternalStack]);
    useMediaInTimeline({
      volume,
      mediaVolume,
      mediaType: "video",
      src,
      playbackRate: props2.playbackRate ?? 1,
      displayName: name ?? null,
      id: timelineId,
      getStack,
      showInTimeline,
      premountDisplay: parentSequence?.premountDisplay ?? null,
      postmountDisplay: parentSequence?.postmountDisplay ?? null,
      loopDisplay: void 0,
      documentationLink: onlyWarnForMediaSeekingError ? "https://www.remotion.dev/docs/offthreadvideo" : "https://www.remotion.dev/docs/html5-video",
      refForOutline: videoRef
    });
    useMediaPlayback({
      mediaRef: videoRef,
      src,
      mediaType: "video",
      playbackRate: props2.playbackRate ?? 1,
      preservePitch,
      onlyWarnForMediaSeekingError,
      acceptableTimeshift: acceptableTimeShiftInSeconds ?? null,
      isPremounting: Boolean(parentSequence?.premounting),
      isPostmounting: Boolean(parentSequence?.postmounting),
      pauseWhenBuffering,
      onAutoPlayError: onAutoPlayError ?? null
    });
    useMediaTag({
      id: timelineId,
      isPostmounting: Boolean(parentSequence?.postmounting),
      isPremounting: Boolean(parentSequence?.premounting),
      mediaRef: videoRef,
      mediaType: "video",
      onAutoPlayError: onAutoPlayError ?? null
    });
    useVolume({
      logLevel,
      mediaRef: videoRef,
      volume: userPreferredVolume,
      source: sharedSource,
      shouldUseWebAudioApi: useWebAudioApi ?? false
    });
    const actualFrom = parentSequence ? parentSequence.relativeFrom : 0;
    const duration = parentSequence ? Math.min(parentSequence.durationInFrames, durationInFrames) : durationInFrames;
    const preloadedSrc = usePreload(src);
    const actualSrc = useAppendVideoFragment({
      actualSrc: preloadedSrc,
      actualFrom,
      duration,
      fps
    });
    (0, import_react83.useImperativeHandle)(ref, () => {
      return videoRef.current;
    }, []);
    (0, import_react83.useState)(() => playbackLogging({
      logLevel,
      message: `Mounting video with source = ${actualSrc}, v=${VERSION}, user agent=${typeof navigator === "undefined" ? "server" : navigator.userAgent}`,
      tag: "video",
      mountTime
    }));
    (0, import_react83.useEffect)(() => {
      const { current } = videoRef;
      if (!current) {
        return;
      }
      const errorHandler = () => {
        if (current.error) {
          console.error("Error occurred in video", current?.error);
          if (onError) {
            const err = new MediaPlaybackError({
              message: `Code ${current.error.code}: ${current.error.message}`,
              src
            });
            onError(err);
            return;
          }
          throw new MediaPlaybackError({
            message: `The browser threw an error while playing the video ${src}: Code ${current.error.code} - ${current?.error?.message}. See https://remotion.dev/docs/media-playback-error for help. Pass an onError() prop to handle the error.`,
            src
          });
        } else {
          if (onError) {
            const err = new MediaPlaybackError({
              message: `The browser threw an error while playing the video ${src}`,
              src
            });
            onError(err);
            return;
          }
          throw new MediaPlaybackError({
            message: "The browser threw an error while playing the video",
            src
          });
        }
      };
      current.addEventListener("error", errorHandler, { once: true });
      return () => {
        current.removeEventListener("error", errorHandler);
      };
    }, [onError, src]);
    const currentOnDurationCallback = (0, import_react83.useRef)(onDuration);
    currentOnDurationCallback.current = onDuration;
    useEmitVideoFrame({ ref: videoRef, onVideoFrame });
    (0, import_react83.useEffect)(() => {
      const { current } = videoRef;
      if (!current) {
        return;
      }
      if (current.duration) {
        currentOnDurationCallback.current?.(src, current.duration);
        return;
      }
      const onLoadedMetadata = () => {
        currentOnDurationCallback.current?.(src, current.duration);
      };
      current.addEventListener("loadedmetadata", onLoadedMetadata);
      return () => {
        current.removeEventListener("loadedmetadata", onLoadedMetadata);
      };
    }, [src]);
    (0, import_react83.useEffect)(() => {
      const { current } = videoRef;
      if (!current) {
        return;
      }
      if (isIosSafari()) {
        current.preload = "metadata";
      } else {
        current.preload = "auto";
      }
    }, []);
    const actualStyle = (0, import_react83.useMemo)(() => {
      return {
        ...style2
      };
    }, [style2]);
    const crossOriginValue = getCrossOriginValue({
      crossOrigin,
      requestsVideoFrame: Boolean(onVideoFrame),
      isClientSideRendering: false
    });
    return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("video", {
      ...nativeProps,
      ref: videoRef,
      muted: muted || playerMuted || userPreferredVolume <= 0,
      playsInline: true,
      src: actualSrc,
      loop: _remotionInternalNativeLoopPassed,
      style: actualStyle,
      disableRemotePlayback: true,
      crossOrigin: crossOriginValue,
      controls: false
    });
  };
  var VideoForPreview = (0, import_react83.forwardRef)(VideoForDevelopmentRefForwardingFunction);
  var InnerOffthreadVideo = (props2) => {
    const {
      startFrom,
      endAt,
      trimBefore,
      trimAfter,
      name,
      pauseWhenBuffering,
      _remotionInternalStack,
      showInTimeline,
      ...otherProps
    } = props2;
    const environment = useRemotionEnvironment();
    const shouldPauseWhenBuffering = resolveV5Default(pauseWhenBuffering);
    if (environment.isClientSideRendering) {
      throw new Error("<OffthreadVideo> is not supported in @remotion/web-renderer. Use <Video> from @remotion/media instead. See https://remotion.dev/docs/client-side-rendering/limitations");
    }
    const onDuration = (0, import_react81.useCallback)(() => {
      return;
    }, []);
    if (typeof props2.src !== "string") {
      throw new TypeError(`The \`<OffthreadVideo>\` tag requires a string for \`src\`, but got ${JSON.stringify(props2.src)} instead.`);
    }
    validateMediaTrimProps({ startFrom, endAt, trimBefore, trimAfter });
    const { trimBeforeValue, trimAfterValue } = resolveTrimProps({
      startFrom,
      endAt,
      trimBefore,
      trimAfter
    });
    if (typeof trimBeforeValue !== "undefined" || typeof trimAfterValue !== "undefined") {
      return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Sequence, {
        layout: "none",
        from: 0 - (trimBeforeValue ?? 0),
        showInTimeline: false,
        durationInFrames: trimAfterValue,
        name,
        children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(InnerOffthreadVideo, {
          pauseWhenBuffering: shouldPauseWhenBuffering,
          ...otherProps,
          trimAfter: void 0,
          name: void 0,
          showInTimeline,
          trimBefore: void 0,
          _remotionInternalStack: void 0,
          startFrom: void 0,
          endAt: void 0
        })
      });
    }
    validateMediaProps(props2, "Video");
    if (environment.isRendering) {
      return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(OffthreadVideoForRendering, {
        pauseWhenBuffering: shouldPauseWhenBuffering,
        ...otherProps,
        trimAfter: void 0,
        name: void 0,
        showInTimeline,
        trimBefore: void 0,
        _remotionInternalStack: void 0,
        startFrom: void 0,
        endAt: void 0
      });
    }
    const {
      transparent,
      toneMapped,
      onAutoPlayError,
      onVideoFrame,
      crossOrigin,
      delayRenderRetries,
      delayRenderTimeoutInMilliseconds,
      ...propsForPreview
    } = otherProps;
    return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(VideoForPreview, {
      _remotionInternalStack: _remotionInternalStack ?? null,
      onDuration,
      onlyWarnForMediaSeekingError: true,
      pauseWhenBuffering: shouldPauseWhenBuffering,
      showInTimeline: showInTimeline ?? true,
      onAutoPlayError: onAutoPlayError ?? void 0,
      onVideoFrame: onVideoFrame ?? null,
      crossOrigin,
      ...propsForPreview,
      _remotionInternalNativeLoopPassed: false
    });
  };
  var OffthreadVideo = ({
    src,
    acceptableTimeShiftInSeconds,
    allowAmplificationDuringRender,
    audioStreamIndex,
    crossOrigin,
    delayRenderRetries,
    delayRenderTimeoutInMilliseconds,
    loopVolumeCurveBehavior,
    muted,
    name,
    onAutoPlayError,
    onError,
    onVideoFrame,
    pauseWhenBuffering,
    playbackRate,
    preservePitch,
    showInTimeline,
    style: style2,
    toneFrequency,
    toneMapped,
    transparent,
    trimAfter,
    trimBefore,
    useWebAudioApi,
    volume,
    _remotionInternalNativeLoopPassed,
    endAt,
    _remotionInternalStack,
    startFrom,
    imageFormat,
    ...props2
  }) => {
    if (imageFormat) {
      throw new TypeError(`The \`<OffthreadVideo>\` tag does no longer accept \`imageFormat\`. Use the \`transparent\` prop if you want to render a transparent video.`);
    }
    return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(InnerOffthreadVideo, {
      acceptableTimeShiftInSeconds,
      allowAmplificationDuringRender: allowAmplificationDuringRender ?? true,
      audioStreamIndex: audioStreamIndex ?? 0,
      crossOrigin,
      delayRenderRetries,
      delayRenderTimeoutInMilliseconds,
      loopVolumeCurveBehavior: loopVolumeCurveBehavior ?? "repeat",
      muted: muted ?? false,
      name,
      onAutoPlayError: onAutoPlayError ?? null,
      onError,
      onVideoFrame,
      pauseWhenBuffering: resolveV5Default(pauseWhenBuffering),
      playbackRate: playbackRate ?? 1,
      preservePitch,
      toneFrequency: toneFrequency ?? 1,
      showInTimeline: showInTimeline ?? true,
      src,
      _remotionInternalStack,
      startFrom,
      _remotionInternalNativeLoopPassed: _remotionInternalNativeLoopPassed ?? false,
      endAt,
      style: style2,
      toneMapped: toneMapped ?? true,
      transparent: transparent ?? false,
      trimAfter,
      trimBefore,
      useWebAudioApi: useWebAudioApi ?? false,
      volume,
      ...props2
    });
  };
  addSequenceStackTraces(OffthreadVideo);
  var WATCH_REMOTION_STATIC_FILES = "remotion_staticFilesChanged";
  function useRemotionContexts() {
    const compositionManagerCtx = import_react85.default.useContext(CompositionManager);
    const timelineContext = import_react85.default.useContext(TimelineContext);
    const timelineImperativeContext = import_react85.default.useContext(TimelineImperativeContext);
    const setTimelineContext = import_react85.default.useContext(SetTimelineContext);
    const sequenceContext = import_react85.default.useContext(SequenceContext);
    const nonceContext = import_react85.default.useContext(NonceContext);
    const canUseRemotionHooksContext = import_react85.default.useContext(CanUseRemotionHooks);
    const preloadContext = import_react85.default.useContext(PreloadContext);
    const resolveCompositionContext = import_react85.default.useContext(ResolveCompositionContext);
    const renderAssetManagerContext = import_react85.default.useContext(RenderAssetManager);
    const sequenceManagerContext = import_react85.default.useContext(SequenceManager);
    const sequenceManagerRefContext = import_react85.default.useContext(SequenceManagerRefContext);
    const visualModePropStatusesRefContext = import_react85.default.useContext(VisualModePropStatusesRefContext);
    const bufferManagerContext = import_react85.default.useContext(BufferingContextReact);
    const logLevelContext = import_react85.default.useContext(LogLevelContext);
    return (0, import_react85.useMemo)(() => ({
      compositionManagerCtx,
      timelineContext,
      timelineImperativeContext,
      setTimelineContext,
      sequenceContext,
      nonceContext,
      canUseRemotionHooksContext,
      preloadContext,
      resolveCompositionContext,
      renderAssetManagerContext,
      sequenceManagerContext,
      sequenceManagerRefContext,
      visualModePropStatusesRefContext,
      bufferManagerContext,
      logLevelContext
    }), [
      compositionManagerCtx,
      nonceContext,
      sequenceContext,
      setTimelineContext,
      timelineContext,
      timelineImperativeContext,
      canUseRemotionHooksContext,
      preloadContext,
      resolveCompositionContext,
      renderAssetManagerContext,
      sequenceManagerContext,
      sequenceManagerRefContext,
      visualModePropStatusesRefContext,
      bufferManagerContext,
      logLevelContext
    ]);
  }
  var RemotionContextProvider = (props2) => {
    const { children, contexts } = props2;
    return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(LogLevelContext.Provider, {
      value: contexts.logLevelContext,
      children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(CanUseRemotionHooks.Provider, {
        value: contexts.canUseRemotionHooksContext,
        children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(NonceContext.Provider, {
          value: contexts.nonceContext,
          children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(PreloadContext.Provider, {
            value: contexts.preloadContext,
            children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(CompositionManager.Provider, {
              value: contexts.compositionManagerCtx,
              children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(SequenceManagerRefContext.Provider, {
                value: contexts.sequenceManagerRefContext,
                children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(SequenceManager.Provider, {
                  value: contexts.sequenceManagerContext,
                  children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(VisualModePropStatusesRefContext.Provider, {
                    value: contexts.visualModePropStatusesRefContext,
                    children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(RenderAssetManager.Provider, {
                      value: contexts.renderAssetManagerContext,
                      children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(ResolveCompositionContext.Provider, {
                        value: contexts.resolveCompositionContext,
                        children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(TimelineImperativeContext.Provider, {
                          value: contexts.timelineImperativeContext,
                          children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(TimelineContext.Provider, {
                            value: contexts.timelineContext,
                            children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(SetTimelineContext.Provider, {
                              value: contexts.setTimelineContext,
                              children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(SequenceContext.Provider, {
                                value: contexts.sequenceContext,
                                children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(BufferingContextReact.Provider, {
                                  value: contexts.bufferManagerContext,
                                  children
                                })
                              })
                            })
                          })
                        })
                      })
                    })
                  })
                })
              })
            })
          })
        })
      })
    });
  };
  var compositionSelectorRef = (0, import_react71.createRef)();
  var Internals = {
    MaxMediaCacheSizeContext,
    makeRenderResourceManager,
    RenderResourceManagerContext,
    useUnsafeVideoConfig,
    useFrameForVolumeProp,
    useTimelinePosition,
    useAbsoluteTimelinePosition,
    evaluateVolume,
    getAbsoluteSrc,
    getAnimatedImageDurationInSeconds,
    getAssetDisplayName,
    Timeline: exports_timeline_position_state,
    validateMediaTrimProps,
    validateMediaProps,
    resolveTrimProps,
    VideoForPreview,
    CompositionManager,
    CompositionSetters,
    VisualModePropStatusesContext,
    VisualModePropStatusesRefContext,
    VisualModeDragOverridesContext,
    VisualModeSettersContext,
    SequenceManager,
    SequenceManagerRefContext,
    SequenceStackTracesUpdateContext,
    baseSchema,
    sequenceSchema,
    SequenceWithoutSchema,
    sequenceStyleSchema,
    sequenceVisualStyleSchema,
    sequencePremountSchema,
    sequenceCropSchema,
    textSchema,
    transformSchema,
    premountSchema,
    flattenActiveSchema,
    getFlatSchemaWithAllKeys,
    RemotionRootContexts,
    CompositionManagerProvider,
    useVideo,
    getRoot,
    useMediaVolumeState,
    usePlayerMutedState,
    useMediaInTimeline,
    useLazyComponent,
    truthy,
    SequenceContext,
    PremountContext,
    usePremounting,
    useRemotionContexts,
    RemotionContextProvider,
    CSSUtils: exports_default_css,
    setupEnvVariables,
    MediaVolumeContext,
    SetMediaVolumeContext,
    getRemotionEnvironment,
    SharedAudioContext,
    SharedAudioContextProvider,
    SharedAudioTagsContext,
    SharedAudioTagsContextProvider,
    invalidCompositionErrorMessage,
    invalidFolderNameErrorMessage,
    calculateMediaDuration,
    isCompositionIdValid,
    isFolderNameValid,
    getPreviewDomElement,
    compositionsRef,
    portalNode,
    setPortalNodeCurrentScale,
    waitForRoot,
    SetTimelineContext,
    CanUseRemotionHooksProvider,
    CanUseRemotionHooks,
    PrefetchProvider,
    DurationsContextProvider,
    IsPlayerContextProvider,
    useIsPlayer,
    EditorPropsProvider,
    EditorPropsContext,
    usePreload,
    NonceContext,
    resolveVideoConfig,
    resolveVideoConfigOrCatch,
    resolveVideoConfigWithMetadataOrCatch,
    ResolveCompositionContext,
    useResolvedVideoConfig,
    resolveCompositionsRef,
    REMOTION_STUDIO_CONTAINER_ELEMENT,
    RenderAssetManager,
    persistCurrentFrame,
    usePlaybackRate,
    useTimelineContext,
    useTimelineSetFrame,
    isIosSafari,
    WATCH_REMOTION_STATIC_FILES,
    addSequenceStackTraces,
    useMediaStartsAt,
    BufferingProvider,
    BufferingContextReact,
    getComponentsToAddStacksTo,
    getSequenceComponent,
    getSingleChildComponent,
    getStackForControls,
    REMOTION_INTERNAL_STACK_PROP,
    CurrentScaleContext,
    PixelDensityContext,
    PreviewSizeContext,
    calculateScale,
    validateRenderAsset,
    Log,
    LogLevelContext,
    useLogLevel,
    playbackLogging,
    timeValueRef,
    compositionSelectorRef,
    RemotionEnvironmentContext,
    warnAboutTooHighVolume,
    AudioForPreview,
    OBJECTFIT_CONTAIN_CLASS_NAME,
    InnerOffthreadVideo,
    useBasicMediaInTimeline,
    getInputPropsOverride,
    setInputPropsOverride,
    useVideoEnabled,
    useAudioEnabled,
    useIsPlayerBuffering,
    TimelinePosition: exports_timeline_position_state,
    DelayRenderContextType,
    TimelineContext,
    TimelineImperativeContext,
    PlaybackRateContext,
    AbsoluteTimeContext,
    RenderAssetManagerProvider,
    getEffectiveVisualModeValue,
    CompositionRenderErrorContext,
    useEffectChainState,
    createEffectChainState,
    cleanupEffectChainState,
    runEffectChain,
    useMemoizedEffects,
    useMemoizedEffectDefinitions,
    createEffect,
    createWebGLContextError,
    createWebGL2ContextError,
    computeEffectiveSchemaValuesDotNotation,
    interpolateKeyframedStatus,
    makeStaticDragOverride,
    makeKeyframedDragOverride,
    resolveDragOverrideValue,
    getStaticDragOverrideValue,
    OverrideIdsToNodePathsGettersContext,
    OverrideIdsToNodePathsSettersContext,
    findPropsToDelete,
    makeSequencePropsSubscriptionKey,
    getPropStatusesCtx,
    getEffectPropStatusesCtx,
    hiddenField,
    durationInFramesField,
    freezeField,
    fromField,
    resolveSequenceCrop,
    useCropStyle
  };
  var flattenChildren = (children) => {
    const childrenArray = import_react87.default.Children.toArray(children);
    return childrenArray.reduce((flatChildren, child) => {
      if (child.type === import_react87.default.Fragment) {
        return flatChildren.concat(flattenChildren(child.props.children));
      }
      flatChildren.push(child);
      return flatChildren;
    }, []);
  };
  var seriesSequenceSchema = {
    durationInFrames: Interactive.baseSchema.durationInFrames,
    name: Interactive.sequenceSchema.name,
    hidden: Interactive.sequenceSchema.hidden,
    showInTimeline: Interactive.sequenceSchema.showInTimeline,
    freeze: Interactive.baseSchema.freeze,
    trimBefore: Interactive.sequenceSchema.trimBefore,
    layout: Interactive.sequenceSchema.layout
  };
  var SeriesSequenceInner = (0, import_react86.forwardRef)(({ offset = 0, className: className2 = "", _remotionInternalRender = null, ...props2 }, ref) => {
    useRequireToBeInsideSeries();
    if (_remotionInternalRender) {
      return _remotionInternalRender({ ...props2, offset, className: className2 || void 0 }, ref);
    }
    return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(IsNotInsideSeriesProvider, {
      children: props2.children
    });
  });
  var SeriesSequence = Interactive.withSchema({
    Component: SeriesSequenceInner,
    componentName: "<Series.Sequence>",
    componentIdentity: "dev.remotion.remotion.Series.Sequence",
    schema: seriesSequenceSchema,
    supportsEffects: false
  });
  var SequenceWithoutSchemaWithRef = SequenceWithoutSchema;
  var validateSeriesSequenceProps = ({
    durationInFrames,
    offset: offsetProp,
    index,
    childrenLength
  }) => {
    const debugInfo = `index = ${index}, duration = ${durationInFrames}`;
    if (index !== childrenLength - 1 || durationInFrames !== Infinity) {
      validateDurationInFrames(durationInFrames, {
        component: `of a <Series.Sequence /> component`,
        allowFloats: true
      });
    }
    const offset = offsetProp ?? 0;
    if (Number.isNaN(offset)) {
      throw new TypeError(`The "offset" property of a <Series.Sequence /> must not be NaN, but got NaN (${debugInfo}).`);
    }
    if (!Number.isFinite(offset)) {
      throw new TypeError(`The "offset" property of a <Series.Sequence /> must be finite, but got ${offset} (${debugInfo}).`);
    }
    if (offset % 1 !== 0) {
      throw new TypeError(`The "offset" property of a <Series.Sequence /> must be finite, but got ${offset} (${debugInfo}).`);
    }
    return offset;
  };
  var SeriesInner = (props2) => {
    const childrenValue = (0, import_react86.useMemo)(() => {
      const flattenedChildren = flattenChildren(props2.children);
      const renderChildren = (i, startFrame) => {
        if (i === flattenedChildren.length) {
          return null;
        }
        const child = flattenedChildren[i];
        const castedChild = child;
        if (typeof castedChild === "string") {
          if (castedChild.trim() === "") {
            return renderChildren(i + 1, startFrame);
          }
          throw new TypeError(`The <Series /> component only accepts a list of <Series.Sequence /> components as its children, but you passed a string "${castedChild}"`);
        }
        if (castedChild.type !== SeriesSequence) {
          throw new TypeError(`The <Series /> component only accepts a list of <Series.Sequence /> components as its children, but got ${castedChild} instead`);
        }
        const castedElement = castedChild;
        validateSeriesSequenceProps({
          durationInFrames: castedElement.props.durationInFrames,
          offset: castedElement.props.offset,
          index: i,
          childrenLength: flattenedChildren.length
        });
        return import_react86.default.cloneElement(castedElement, {
          _remotionInternalRender: (resolvedProps, ref) => {
            const durationInFramesProp = resolvedProps.durationInFrames;
            const {
              durationInFrames: _durationInFrames,
              children: sequenceChildren,
              offset: offsetProp,
              controls,
              from: _from,
              name,
              ...passedProps
            } = resolvedProps;
            const offset = validateSeriesSequenceProps({
              durationInFrames: durationInFramesProp,
              offset: offsetProp,
              index: i,
              childrenLength: flattenedChildren.length
            });
            const currentStartFrame = startFrame + offset;
            const nextStartFrame = startFrame + durationInFramesProp + offset;
            return /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(import_jsx_runtime38.Fragment, {
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(SequenceWithoutSchemaWithRef, {
                  ref,
                  name: name || "<Series.Sequence>",
                  _remotionInternalDocumentationLink: name ? void 0 : "https://www.remotion.dev/docs/series",
                  controls: controls ?? void 0,
                  from: currentStartFrame,
                  durationInFrames: durationInFramesProp,
                  ...passedProps,
                  children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(IsNotInsideSeriesProvider, {
                    children: sequenceChildren
                  })
                }),
                renderChildren(i + 1, nextStartFrame)
              ]
            });
          }
        });
      };
      return renderChildren(0, 0);
    }, [props2.children]);
    return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(Sequence, {
      layout: "none",
      name: "<Series>",
      _remotionInternalDocumentationLink: "https://www.remotion.dev/docs/series",
      ...props2,
      children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(IsInsideSeriesContainer, {
        children: childrenValue
      })
    });
  };
  var Series = Object.assign(withInteractivitySchema({
    Component: SeriesInner,
    componentName: "<Series>",
    componentIdentity: "dev.remotion.remotion.Series",
    schema: sequenceSchemaDefaultLayoutNone,
    supportsEffects: false
  }), {
    Sequence: SeriesSequence
  });
  addSequenceStackTraces(Series);
  var Still = (props2) => {
    const newProps = {
      ...props2,
      durationInFrames: 1,
      fps: 1
    };
    return import_react88.default.createElement(Composition, newProps);
  };
  addSequenceStackTraces(Still);
  var roundTo6Commas = (num) => {
    return Math.round(num * 1e5) / 1e5;
  };
  var seekToTime = ({
    element,
    desiredTime,
    logLevel,
    mountTime
  }) => {
    if (isApproximatelyTheSame(element.currentTime, desiredTime)) {
      return {
        wait: Promise.resolve(desiredTime),
        cancel: () => {
        }
      };
    }
    seek({
      logLevel,
      mediaRef: element,
      time: desiredTime,
      why: "Seeking during rendering",
      mountTime
    });
    let cancel;
    let cancelSeeked = null;
    const prom = new Promise((resolve) => {
      cancel = element.requestVideoFrameCallback((now, metadata) => {
        const displayIn = metadata.expectedDisplayTime - now;
        if (displayIn <= 0) {
          resolve(metadata.mediaTime);
          return;
        }
        setTimeout(() => {
          resolve(metadata.mediaTime);
        }, displayIn + 150);
      });
    });
    const waitForSeekedEvent = new Promise((resolve) => {
      const onDone = () => {
        resolve();
      };
      element.addEventListener("seeked", onDone, {
        once: true
      });
      cancelSeeked = () => {
        element.removeEventListener("seeked", onDone);
      };
    });
    return {
      wait: Promise.all([prom, waitForSeekedEvent]).then(([time]) => time),
      cancel: () => {
        cancelSeeked?.();
        element.cancelVideoFrameCallback(cancel);
      }
    };
  };
  var seekToTimeMultipleUntilRight = ({
    element,
    desiredTime,
    fps,
    logLevel,
    mountTime
  }) => {
    const threshold = 1 / fps / 2;
    let currentCancel = () => {
      return;
    };
    if (Number.isFinite(element.duration) && element.currentTime >= element.duration && desiredTime >= element.duration) {
      return {
        prom: Promise.resolve(),
        cancel: () => {
        }
      };
    }
    const prom = new Promise((resolve, reject) => {
      const firstSeek = seekToTime({
        element,
        desiredTime: desiredTime + threshold,
        logLevel,
        mountTime
      });
      firstSeek.wait.then((seekedTo) => {
        const difference = Math.abs(desiredTime - seekedTo);
        if (difference <= threshold) {
          return resolve();
        }
        const sign = desiredTime > seekedTo ? 1 : -1;
        const newSeek = seekToTime({
          element,
          desiredTime: seekedTo + threshold * sign,
          logLevel,
          mountTime
        });
        currentCancel = newSeek.cancel;
        newSeek.wait.then((newTime) => {
          const newDifference = Math.abs(desiredTime - newTime);
          if (roundTo6Commas(newDifference) <= roundTo6Commas(threshold)) {
            return resolve();
          }
          const thirdSeek = seekToTime({
            element,
            desiredTime: desiredTime + threshold,
            logLevel,
            mountTime
          });
          currentCancel = thirdSeek.cancel;
          return thirdSeek.wait.then(() => {
            resolve();
          }).catch((err) => {
            reject(err);
          });
        }).catch((err) => {
          reject(err);
        });
      });
      currentCancel = firstSeek.cancel;
    });
    return {
      prom,
      cancel: () => {
        currentCancel();
      }
    };
  };
  var VideoForRenderingForwardFunction = ({
    onError,
    volume: volumeProp,
    allowAmplificationDuringRender,
    playbackRate,
    onDuration,
    toneFrequency,
    name,
    acceptableTimeShiftInSeconds,
    delayRenderRetries,
    delayRenderTimeoutInMilliseconds,
    loopVolumeCurveBehavior,
    audioStreamIndex,
    onVideoFrame,
    preservePitch: _preservePitch,
    ...props2
  }, ref) => {
    const absoluteFrame = useTimelinePosition();
    const frame = useCurrentFrame();
    const volumePropsFrame = useFrameForVolumeProp(loopVolumeCurveBehavior ?? "repeat");
    const videoConfig = useUnsafeVideoConfig();
    const videoRef = (0, import_react90.useRef)(null);
    const sequenceContext = (0, import_react90.useContext)(SequenceContext);
    const mediaStartsAt = useMediaStartsAt();
    const environment = useRemotionEnvironment();
    const logLevel = useLogLevel();
    const mountTime = useMountTime();
    const { delayRender: delayRender2, continueRender: continueRender2 } = useDelayRender();
    const { registerRenderAsset, unregisterRenderAsset } = (0, import_react90.useContext)(RenderAssetManager);
    const id = (0, import_react90.useMemo)(() => `video-${random(props2.src ?? "")}-${sequenceContext?.cumulatedFrom}-${sequenceContext?.relativeFrom}-${sequenceContext?.durationInFrames}`, [
      props2.src,
      sequenceContext?.cumulatedFrom,
      sequenceContext?.relativeFrom,
      sequenceContext?.durationInFrames
    ]);
    if (!videoConfig) {
      throw new Error("No video config found");
    }
    const volume = evaluateVolume({
      volume: volumeProp,
      frame: volumePropsFrame,
      mediaVolume: 1
    });
    warnAboutTooHighVolume(volume);
    (0, import_react90.useEffect)(() => {
      if (!props2.src) {
        throw new Error("No src passed");
      }
      if (props2.muted) {
        return;
      }
      if (volume <= 0) {
        return;
      }
      if (!window.remotion_audioEnabled) {
        return;
      }
      registerRenderAsset({
        type: "video",
        src: getAbsoluteSrc(props2.src),
        id,
        frame: absoluteFrame,
        volume,
        mediaFrame: frame,
        playbackRate: playbackRate ?? 1,
        toneFrequency: toneFrequency ?? 1,
        audioStartFrame: Math.max(0, -(sequenceContext?.cumulatedNegativeFrom ?? 0)),
        audioStreamIndex: audioStreamIndex ?? 0
      });
      return () => unregisterRenderAsset(id);
    }, [
      props2.muted,
      props2.src,
      registerRenderAsset,
      id,
      unregisterRenderAsset,
      volume,
      frame,
      absoluteFrame,
      playbackRate,
      toneFrequency,
      sequenceContext?.cumulatedNegativeFrom,
      audioStreamIndex
    ]);
    (0, import_react90.useImperativeHandle)(ref, () => {
      return videoRef.current;
    }, []);
    useEmitVideoFrame({ ref: videoRef, onVideoFrame });
    (0, import_react90.useEffect)(() => {
      if (!window.remotion_videoEnabled) {
        return;
      }
      const { current } = videoRef;
      if (!current) {
        return;
      }
      const currentTime = getMediaTime({
        frame,
        playbackRate: playbackRate || 1,
        startFrom: -mediaStartsAt,
        fps: videoConfig.fps
      });
      const handle = delayRender2(`Rendering <Html5Video /> with src="${props2.src}" at time ${currentTime}`, {
        retries: delayRenderRetries ?? void 0,
        timeoutInMilliseconds: delayRenderTimeoutInMilliseconds ?? void 0
      });
      if (window.process?.env?.NODE_ENV === "test") {
        continueRender2(handle);
        return;
      }
      if (isApproximatelyTheSame(current.currentTime, currentTime)) {
        if (current.readyState >= 2) {
          continueRender2(handle);
          return;
        }
        const loadedDataHandler = () => {
          continueRender2(handle);
        };
        current.addEventListener("loadeddata", loadedDataHandler, { once: true });
        return () => {
          current.removeEventListener("loadeddata", loadedDataHandler);
        };
      }
      const endedHandler = () => {
        continueRender2(handle);
      };
      const seek2 = seekToTimeMultipleUntilRight({
        element: current,
        desiredTime: currentTime,
        fps: videoConfig.fps,
        logLevel,
        mountTime
      });
      seek2.prom.then(() => {
        continueRender2(handle);
      });
      current.addEventListener("ended", endedHandler, { once: true });
      const errorHandler = () => {
        if (current?.error) {
          console.error("Error occurred in video", current?.error);
          if (onError) {
            return;
          }
          throw new MediaPlaybackError({
            message: `The browser threw an error while playing the video ${props2.src}: Code ${current.error.code} - ${current?.error?.message}. See https://remotion.dev/docs/media-playback-error for help. Pass an onError() prop to handle the error.`,
            src: props2.src
          });
        } else {
          throw new MediaPlaybackError({
            message: "The browser threw an error",
            src: props2.src
          });
        }
      };
      current.addEventListener("error", errorHandler, { once: true });
      return () => {
        seek2.cancel();
        current.removeEventListener("ended", endedHandler);
        current.removeEventListener("error", errorHandler);
        continueRender2(handle);
      };
    }, [
      volumePropsFrame,
      props2.src,
      playbackRate,
      videoConfig.fps,
      frame,
      mediaStartsAt,
      onError,
      delayRenderRetries,
      delayRenderTimeoutInMilliseconds,
      logLevel,
      mountTime,
      continueRender2,
      delayRender2
    ]);
    const { src } = props2;
    if (environment.isRendering) {
      (0, import_react90.useLayoutEffect)(() => {
        if (window.process?.env?.NODE_ENV === "test") {
          return;
        }
        const newHandle = delayRender2("Loading <Html5Video> duration with src=" + src, {
          retries: delayRenderRetries ?? void 0,
          timeoutInMilliseconds: delayRenderTimeoutInMilliseconds ?? void 0
        });
        const { current } = videoRef;
        const didLoad = () => {
          if (current?.duration) {
            onDuration(src, current.duration);
          }
          continueRender2(newHandle);
        };
        if (current?.duration) {
          onDuration(src, current.duration);
          continueRender2(newHandle);
        } else {
          current?.addEventListener("loadedmetadata", didLoad, { once: true });
        }
        return () => {
          current?.removeEventListener("loadedmetadata", didLoad);
          continueRender2(newHandle);
        };
      }, [
        src,
        onDuration,
        delayRenderRetries,
        delayRenderTimeoutInMilliseconds,
        continueRender2,
        delayRender2
      ]);
    }
    return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("video", {
      ref: videoRef,
      disableRemotePlayback: true,
      ...props2
    });
  };
  var VideoForRendering = (0, import_react90.forwardRef)(VideoForRenderingForwardFunction);
  var VideoForwardingFunction = (props2, ref) => {
    const {
      startFrom,
      endAt,
      trimBefore,
      trimAfter,
      name,
      pauseWhenBuffering,
      _remotionInternalStack,
      _remotionInternalNativeLoopPassed,
      showInTimeline,
      onAutoPlayError,
      onVideoFrame,
      ...otherProps
    } = props2;
    const { loop, ...propsOtherThanLoop } = props2;
    const { fps } = useVideoConfig();
    const environment = useRemotionEnvironment();
    const shouldPauseWhenBuffering = resolveV5Default(pauseWhenBuffering);
    if (environment.isClientSideRendering) {
      throw new Error("<Html5Video> is not supported in @remotion/web-renderer. Use <Video> from @remotion/media instead. See https://remotion.dev/docs/client-side-rendering/limitations");
    }
    const { durations, setDurations } = (0, import_react89.useContext)(DurationsContext);
    if (typeof ref === "string") {
      throw new Error("string refs are not supported");
    }
    if (typeof props2.src !== "string") {
      throw new TypeError(`The \`<Html5Video>\` tag requires a string for \`src\`, but got ${JSON.stringify(props2.src)} instead.`);
    }
    const preloadedSrc = usePreload(props2.src);
    const onDuration = (0, import_react89.useCallback)((src, durationInSeconds) => {
      setDurations({ type: "got-duration", durationInSeconds, src });
    }, [setDurations]);
    const durationFetched = durations[getAbsoluteSrc(preloadedSrc)] ?? durations[getAbsoluteSrc(props2.src)];
    validateMediaTrimProps({ startFrom, endAt, trimBefore, trimAfter });
    const { trimBeforeValue, trimAfterValue } = resolveTrimProps({
      startFrom,
      endAt,
      trimBefore,
      trimAfter
    });
    if (loop && durationFetched !== void 0) {
      if (!Number.isFinite(durationFetched)) {
        return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(Html5Video, {
          ...propsOtherThanLoop,
          ref,
          _remotionInternalStack,
          _remotionInternalNativeLoopPassed: true
        });
      }
      const mediaDuration = durationFetched * fps;
      return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(Loop, {
        durationInFrames: calculateMediaDuration({
          trimAfter: trimAfterValue,
          mediaDurationInFrames: mediaDuration,
          playbackRate: props2.playbackRate ?? 1,
          trimBefore: trimBeforeValue
        }),
        layout: "none",
        name,
        showInTimeline: false,
        children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(Html5Video, {
          ...propsOtherThanLoop,
          ref,
          _remotionInternalStack,
          _remotionInternalNativeLoopPassed: true
        })
      });
    }
    if (typeof trimBeforeValue !== "undefined" || typeof trimAfterValue !== "undefined") {
      return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(Sequence, {
        layout: "none",
        from: 0 - (trimBeforeValue ?? 0),
        showInTimeline: false,
        durationInFrames: trimAfterValue === void 0 ? void 0 : trimAfterValue / (props2.playbackRate ?? 1),
        name,
        children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(Html5Video, {
          pauseWhenBuffering: shouldPauseWhenBuffering,
          onVideoFrame,
          ...otherProps,
          ref,
          _remotionInternalStack
        })
      });
    }
    validateMediaProps({
      playbackRate: props2.playbackRate,
      preservePitch: props2.preservePitch,
      volume: props2.volume
    }, "Html5Video");
    if (environment.isRendering) {
      return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(VideoForRendering, {
        onDuration,
        onVideoFrame: onVideoFrame ?? null,
        ...otherProps,
        ref
      });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(VideoForPreview, {
      onlyWarnForMediaSeekingError: false,
      ...otherProps,
      ref,
      onVideoFrame: onVideoFrame ?? null,
      pauseWhenBuffering: shouldPauseWhenBuffering,
      onDuration,
      _remotionInternalStack: _remotionInternalStack ?? null,
      _remotionInternalNativeLoopPassed: _remotionInternalNativeLoopPassed ?? false,
      showInTimeline: showInTimeline ?? true,
      onAutoPlayError: onAutoPlayError ?? void 0
    });
  };
  var Html5Video = (0, import_react89.forwardRef)(VideoForwardingFunction);
  addSequenceStackTraces(Html5Video);
  checkMultipleRemotionVersions();
  var proxyObj = {};
  var Config = new Proxy(proxyObj, {
    get(_, prop) {
      if (prop === "Bundling" || prop === "Rendering" || prop === "Log" || prop === "Puppeteer" || prop === "Output") {
        return Config;
      }
      return () => {
        console.warn("\u26A0\uFE0F  The CLI configuration has been extracted from Remotion Core.");
        console.warn("Update the import from the config file:");
        console.warn();
        console.warn("- Delete:");
        console.warn('import {Config} from "remotion";');
        console.warn("+ Replace:");
        console.warn('import {Config} from "@remotion/cli/config";');
        console.warn();
        console.warn("For more information, see https://www.remotion.dev/docs/4-0-migration.");
        process.exit(1);
      };
    }
  });
  Sequence.displayName = "Sequence";
  addSequenceStackTraces(Sequence);
  setSequenceComponent(Sequence);
  addSequenceStackTraces(Composition);
  addSequenceStackTraces(Folder);

  // node_modules/.pnpm/@remotion+player@4.0.509_re_cb2bd188877017773bf16e23f65eb9c1/node_modules/@remotion/player/dist/esm/index.mjs
  var import_react92 = __toESM(require_react(), 1);
  var import_react93 = __toESM(require_react(), 1);
  var import_react94 = __toESM(require_react(), 1);
  var import_jsx_runtime43 = __toESM(require_jsx_runtime(), 1);
  var import_react95 = __toESM(require_react(), 1);
  var import_jsx_runtime44 = __toESM(require_jsx_runtime(), 1);
  var import_react96 = __toESM(require_react(), 1);
  var import_react97 = __toESM(require_react(), 1);
  var import_react98 = __toESM(require_react(), 1);
  var import_react99 = __toESM(require_react(), 1);
  var import_react100 = __toESM(require_react(), 1);
  var import_react101 = __toESM(require_react(), 1);
  var import_react102 = __toESM(require_react(), 1);
  var import_react103 = __toESM(require_react(), 1);
  var import_react104 = __toESM(require_react(), 1);
  var import_react105 = __toESM(require_react(), 1);
  var import_jsx_runtime45 = __toESM(require_jsx_runtime(), 1);
  var import_react106 = __toESM(require_react(), 1);
  var import_jsx_runtime46 = __toESM(require_jsx_runtime(), 1);
  var import_react107 = __toESM(require_react(), 1);
  var import_jsx_runtime47 = __toESM(require_jsx_runtime(), 1);
  var import_react108 = __toESM(require_react(), 1);
  var import_react109 = __toESM(require_react(), 1);
  var import_jsx_runtime48 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime49 = __toESM(require_jsx_runtime(), 1);
  var import_react110 = __toESM(require_react(), 1);
  var import_react111 = __toESM(require_react(), 1);
  var import_jsx_runtime50 = __toESM(require_jsx_runtime(), 1);
  var import_react112 = __toESM(require_react(), 1);
  var import_jsx_runtime51 = __toESM(require_jsx_runtime(), 1);
  var import_react113 = __toESM(require_react(), 1);
  var import_jsx_runtime52 = __toESM(require_jsx_runtime(), 1);
  var import_react114 = __toESM(require_react(), 1);
  var import_jsx_runtime53 = __toESM(require_jsx_runtime(), 1);
  var import_react115 = __toESM(require_react(), 1);
  var import_react116 = __toESM(require_react(), 1);
  var import_jsx_runtime54 = __toESM(require_jsx_runtime(), 1);
  var import_react117 = __toESM(require_react(), 1);
  var import_jsx_runtime55 = __toESM(require_jsx_runtime(), 1);

  // node_modules/.pnpm/remotion@4.0.509_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/remotion/dist/esm/no-react.mjs
  var NEWTON_ITERATIONS2 = 4;
  var NEWTON_MIN_SLOPE2 = 1e-3;
  var SUBDIVISION_PRECISION2 = 1e-7;
  var SUBDIVISION_MAX_ITERATIONS2 = 10;
  var kSplineTableSize2 = 11;
  var kSampleStepSize2 = 1 / (kSplineTableSize2 - 1);
  var float32ArraySupported2 = typeof Float32Array === "function";
  function a2(aA1, aA2) {
    return 1 - 3 * aA2 + 3 * aA1;
  }
  function b2(aA1, aA2) {
    return 3 * aA2 - 6 * aA1;
  }
  function c2(aA1) {
    return 3 * aA1;
  }
  function calcBezier2(aT, aA1, aA2) {
    return ((a2(aA1, aA2) * aT + b2(aA1, aA2)) * aT + c2(aA1)) * aT;
  }
  function getSlope2(aT, aA1, aA2) {
    return 3 * a2(aA1, aA2) * aT * aT + 2 * b2(aA1, aA2) * aT + c2(aA1);
  }
  function binarySubdivide2({
    aX,
    _aA,
    _aB,
    mX1,
    mX2
  }) {
    let currentX;
    let currentT;
    let i = 0;
    let aA = _aA;
    let aB = _aB;
    do {
      currentT = aA + (aB - aA) / 2;
      currentX = calcBezier2(currentT, mX1, mX2) - aX;
      if (currentX > 0) {
        aB = currentT;
      } else {
        aA = currentT;
      }
    } while (Math.abs(currentX) > SUBDIVISION_PRECISION2 && ++i < SUBDIVISION_MAX_ITERATIONS2);
    return currentT;
  }
  function newtonRaphsonIterate2(aX, _aGuessT, mX1, mX2) {
    let aGuessT = _aGuessT;
    for (let i = 0; i < NEWTON_ITERATIONS2; ++i) {
      const currentSlope = getSlope2(aGuessT, mX1, mX2);
      if (currentSlope === 0) {
        return aGuessT;
      }
      const currentX = calcBezier2(aGuessT, mX1, mX2) - aX;
      aGuessT -= currentX / currentSlope;
    }
    return aGuessT;
  }
  function bezier2(mX1, mY1, mX2, mY2) {
    if (!(mX1 >= 0 && mX1 <= 1 && mX2 >= 0 && mX2 <= 1)) {
      throw new Error("bezier x values must be in [0, 1] range");
    }
    const sampleValues = float32ArraySupported2 ? new Float32Array(kSplineTableSize2) : new Array(kSplineTableSize2);
    if (mX1 !== mY1 || mX2 !== mY2) {
      for (let i = 0; i < kSplineTableSize2; ++i) {
        sampleValues[i] = calcBezier2(i * kSampleStepSize2, mX1, mX2);
      }
    }
    function getTForX(aX) {
      let intervalStart = 0;
      let currentSample = 1;
      const lastSample = kSplineTableSize2 - 1;
      for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
        intervalStart += kSampleStepSize2;
      }
      --currentSample;
      const dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
      const guessForT = intervalStart + dist * kSampleStepSize2;
      const initialSlope = getSlope2(guessForT, mX1, mX2);
      if (initialSlope >= NEWTON_MIN_SLOPE2) {
        return newtonRaphsonIterate2(aX, guessForT, mX1, mX2);
      }
      if (initialSlope === 0) {
        return guessForT;
      }
      return binarySubdivide2({
        aX,
        _aA: intervalStart,
        _aB: intervalStart + kSampleStepSize2,
        mX1,
        mX2
      });
    }
    return function(x) {
      const clampedX = Math.min(1, Math.max(0, x));
      if (mX1 === mY1 && mX2 === mY2) {
        return clampedX;
      }
      if (clampedX === 0) {
        return 0;
      }
      if (clampedX === 1) {
        return 1;
      }
      return calcBezier2(getTForX(clampedX), mY1, mY2);
    };
  }
  var validateFrame2 = ({
    allowFloats,
    durationInFrames,
    frame
  }) => {
    if (typeof frame === "undefined") {
      throw new TypeError(`Argument missing for parameter "frame"`);
    }
    if (typeof frame !== "number") {
      throw new TypeError(`Argument passed for "frame" is not a number: ${frame}`);
    }
    if (!Number.isFinite(frame)) {
      throw new RangeError(`Frame ${frame} is not finite`);
    }
    if (frame % 1 !== 0 && !allowFloats) {
      throw new RangeError(`Argument for frame must be an integer, but got ${frame}`);
    }
    if (frame < 0 && frame < -durationInFrames) {
      throw new RangeError(`Cannot use frame ${frame}: Duration of composition is ${durationInFrames}, therefore the lowest frame that can be rendered is ${-durationInFrames}`);
    }
    if (frame > durationInFrames - 1) {
      throw new RangeError(`Cannot use frame ${frame}: Duration of composition is ${durationInFrames}, therefore the highest frame that can be rendered is ${durationInFrames - 1}`);
    }
  };
  function validateFps2(fps, location2, isGif) {
    if (typeof fps !== "number") {
      throw new Error(`"fps" must be a number, but you passed a value of type ${typeof fps} ${location2}`);
    }
    if (!Number.isFinite(fps)) {
      throw new Error(`"fps" must be a finite, but you passed ${fps} ${location2}`);
    }
    if (isNaN(fps)) {
      throw new Error(`"fps" must not be NaN, but got ${fps} ${location2}`);
    }
    if (fps <= 0) {
      throw new TypeError(`"fps" must be positive, but got ${fps} ${location2}`);
    }
    if (isGif && fps > 50) {
      throw new TypeError(`The FPS for a GIF cannot be higher than 50. Use the --every-nth-frame option to lower the FPS: https://remotion.dev/docs/render-as-gif`);
    }
  }
  var validateSpringDuration2 = (dur) => {
    if (typeof dur === "undefined") {
      return;
    }
    if (typeof dur !== "number") {
      throw new TypeError(`A "duration" of a spring must be a "number" but is "${typeof dur}"`);
    }
    if (Number.isNaN(dur)) {
      throw new TypeError('A "duration" of a spring is NaN, which it must not be');
    }
    if (!Number.isFinite(dur)) {
      throw new TypeError('A "duration" of a spring must be finite, but is ' + dur);
    }
    if (dur <= 0) {
      throw new TypeError('A "duration" of a spring must be positive, but is ' + dur);
    }
  };
  var defaultSpringConfig2 = {
    damping: 10,
    mass: 1,
    stiffness: 100,
    overshootClamping: false
  };
  var advanceCache2 = {};
  function advance2({
    animation,
    now,
    config
  }) {
    const { toValue, lastTimestamp, current, velocity } = animation;
    const deltaTime = Math.min(now - lastTimestamp, 64);
    if (config.damping <= 0) {
      throw new Error("Spring damping must be greater than 0, otherwise the spring() animation will never end, causing an infinite loop.");
    }
    const c22 = config.damping;
    const m = config.mass;
    const k = config.stiffness;
    const cacheKey = [
      toValue,
      lastTimestamp,
      current,
      velocity,
      c22,
      m,
      k,
      now
    ].join("-");
    if (advanceCache2[cacheKey]) {
      return advanceCache2[cacheKey];
    }
    const v0 = -velocity;
    const x0 = toValue - current;
    const zeta = c22 / (2 * Math.sqrt(k * m));
    const omega0 = Math.sqrt(k / m);
    const omega1 = omega0 * Math.sqrt(1 - zeta ** 2);
    const t = deltaTime / 1e3;
    const sin1 = Math.sin(omega1 * t);
    const cos1 = Math.cos(omega1 * t);
    const underDampedEnvelope = Math.exp(-zeta * omega0 * t);
    const underDampedFrag1 = underDampedEnvelope * (sin1 * ((v0 + zeta * omega0 * x0) / omega1) + x0 * cos1);
    const underDampedPosition = toValue - underDampedFrag1;
    const underDampedVelocity = zeta * omega0 * underDampedFrag1 - underDampedEnvelope * (cos1 * (v0 + zeta * omega0 * x0) - omega1 * x0 * sin1);
    const criticallyDampedEnvelope = Math.exp(-omega0 * t);
    const criticallyDampedPosition = toValue - criticallyDampedEnvelope * (x0 + (v0 + omega0 * x0) * t);
    const criticallyDampedVelocity = criticallyDampedEnvelope * (v0 * (t * omega0 - 1) + t * x0 * omega0 * omega0);
    const animationNode = {
      toValue,
      prevPosition: current,
      lastTimestamp: now,
      current: zeta < 1 ? underDampedPosition : criticallyDampedPosition,
      velocity: zeta < 1 ? underDampedVelocity : criticallyDampedVelocity
    };
    advanceCache2[cacheKey] = animationNode;
    return animationNode;
  }
  var calculationCache2 = {};
  function springCalculation2({
    frame,
    fps,
    config = {}
  }) {
    const from = 0;
    const to = 1;
    const cacheKey = [
      frame,
      fps,
      config.damping,
      config.mass,
      config.overshootClamping,
      config.stiffness
    ].join("-");
    if (calculationCache2[cacheKey]) {
      return calculationCache2[cacheKey];
    }
    let animation = {
      lastTimestamp: 0,
      current: from,
      toValue: to,
      velocity: 0,
      prevPosition: 0
    };
    const frameClamped = Math.max(0, frame);
    const unevenRest = frameClamped % 1;
    for (let f = 0; f <= Math.floor(frameClamped); f++) {
      if (f === Math.floor(frameClamped)) {
        f += unevenRest;
      }
      const time = f / fps * 1e3;
      animation = advance2({
        animation,
        now: time,
        config: {
          ...defaultSpringConfig2,
          ...config
        }
      });
    }
    calculationCache2[cacheKey] = animation;
    return animation;
  }
  var cache2 = /* @__PURE__ */ new Map();
  function measureSpring2({
    fps,
    config = {},
    threshold = 5e-3
  }) {
    if (typeof threshold !== "number") {
      throw new TypeError(`threshold must be a number, got ${threshold} of type ${typeof threshold}`);
    }
    if (threshold === 0) {
      return Infinity;
    }
    if (threshold === 1) {
      return 0;
    }
    if (isNaN(threshold)) {
      throw new TypeError("Threshold is NaN");
    }
    if (!Number.isFinite(threshold)) {
      throw new TypeError("Threshold is not finite");
    }
    if (threshold < 0) {
      throw new TypeError("Threshold is below 0");
    }
    const cacheKey = [
      fps,
      config.damping,
      config.mass,
      config.overshootClamping,
      config.stiffness,
      threshold
    ].join("-");
    if (cache2.has(cacheKey)) {
      return cache2.get(cacheKey);
    }
    validateFps2(fps, "to the measureSpring() function", false);
    let frame = 0;
    let finishedFrame = 0;
    const calc = () => {
      return springCalculation2({
        fps,
        frame,
        config
      });
    };
    let animation = calc();
    const calcDifference = () => {
      return Math.abs(animation.current - animation.toValue);
    };
    let difference = calcDifference();
    while (difference >= threshold) {
      frame++;
      animation = calc();
      difference = calcDifference();
    }
    finishedFrame = frame;
    for (let i = 0; i < 20; i++) {
      frame++;
      animation = calc();
      difference = calcDifference();
      if (difference >= threshold) {
        i = 0;
        finishedFrame = frame + 1;
      }
    }
    cache2.set(cacheKey, finishedFrame);
    return finishedFrame;
  }
  function spring2({
    frame: passedFrame,
    fps,
    config = {},
    from = 0,
    to = 1,
    durationInFrames: passedDurationInFrames,
    durationRestThreshold,
    delay: delay2 = 0,
    reverse = false
  }) {
    validateSpringDuration2(passedDurationInFrames);
    validateFrame2({
      frame: passedFrame,
      durationInFrames: Infinity,
      allowFloats: true
    });
    validateFps2(fps, "to spring()", false);
    const needsToCalculateNaturalDuration = reverse || typeof passedDurationInFrames !== "undefined";
    const naturalDuration = needsToCalculateNaturalDuration ? measureSpring2({
      fps,
      config,
      threshold: durationRestThreshold
    }) : void 0;
    const naturalDurationGetter = needsToCalculateNaturalDuration ? {
      get: () => naturalDuration
    } : {
      get: () => {
        throw new Error("did not calculate natural duration, this is an error with Remotion. Please report");
      }
    };
    const reverseProcessed = reverse ? (passedDurationInFrames ?? naturalDurationGetter.get()) - passedFrame : passedFrame;
    const delayProcessed = reverseProcessed + (reverse ? delay2 : -delay2);
    const durationProcessed = passedDurationInFrames === void 0 ? delayProcessed : delayProcessed / (passedDurationInFrames / naturalDurationGetter.get());
    if (passedDurationInFrames && delayProcessed > passedDurationInFrames) {
      return to;
    }
    const spr = springCalculation2({
      fps,
      frame: durationProcessed,
      config
    });
    const inner = config.overshootClamping ? to >= from ? Math.min(spr.current, to) : Math.max(spr.current, to) : spr.current;
    const interpolated = from === 0 && to === 1 ? inner : interpolate2(inner, [0, 1], [from, to]);
    return interpolated;
  }
  var clampUnit2 = (t) => Math.min(1, Math.max(0, t));
  var springEasingDurationInFrames2 = 30;
  var Easing2 = class _Easing {
    static step0(n) {
      return n > 0 ? 1 : 0;
    }
    static step1(n) {
      return n >= 1 ? 1 : 0;
    }
    static linear(t) {
      return t;
    }
    static ease(t) {
      return _Easing.bezier(0.42, 0, 1, 1)(t);
    }
    static quad(t) {
      return t * t;
    }
    static cubic(t) {
      return t * t * t;
    }
    static poly(n) {
      return (t) => t ** n;
    }
    static sin(t) {
      return 1 - Math.cos(t * Math.PI / 2);
    }
    static circle(t) {
      const u = clampUnit2(t);
      return 1 - Math.sqrt(1 - u * u);
    }
    static exp(t) {
      return 2 ** (10 * (t - 1));
    }
    static elastic(bounciness = 1) {
      const p = bounciness * Math.PI;
      return (t) => 1 - Math.cos(t * Math.PI / 2) ** 3 * Math.cos(t * p);
    }
    static back(s = 1.70158) {
      return (t) => t * t * ((s + 1) * t - s);
    }
    static spring({
      allowTail = false,
      durationRestThreshold,
      ...config
    } = {}) {
      const easing = (t) => {
        if (t <= 0) {
          return 0;
        }
        if (!allowTail && t >= 1) {
          return 1;
        }
        if (allowTail) {
          return spring2({
            fps: springEasingDurationInFrames2,
            frame: t * measureSpring2({
              fps: springEasingDurationInFrames2,
              config,
              threshold: durationRestThreshold
            }),
            config
          });
        }
        return spring2({
          fps: springEasingDurationInFrames2,
          frame: t * springEasingDurationInFrames2,
          config,
          durationInFrames: springEasingDurationInFrames2,
          durationRestThreshold
        });
      };
      return Object.assign(easing, {
        remotionShouldExtendRight: allowTail
      });
    }
    static bounce(t) {
      const u = clampUnit2(t);
      if (u < 1 / 2.75) {
        return 7.5625 * u * u;
      }
      if (u < 2 / 2.75) {
        const t2_ = u - 1.5 / 2.75;
        return 7.5625 * t2_ * t2_ + 0.75;
      }
      if (u < 2.5 / 2.75) {
        const t2_ = u - 2.25 / 2.75;
        return 7.5625 * t2_ * t2_ + 0.9375;
      }
      const t2 = u - 2.625 / 2.75;
      return 7.5625 * t2 * t2 + 0.984375;
    }
    static bezier(x1, y1, x2, y2) {
      return bezier2(x1, y1, x2, y2);
    }
    static in(easing) {
      return easing;
    }
    static out(easing) {
      return (t) => 1 - easing(1 - t);
    }
    static inOut(easing) {
      return (t) => {
        if (t < 0.5) {
          return easing(t * 2) / 2;
        }
        return 1 - easing((1 - t) * 2) / 2;
      };
    }
  };
  var normalizeNumber2 = (value) => {
    return Math.round(value * 1e6) / 1e6;
  };
  var angleUnits2 = /* @__PURE__ */ new Set(["deg", "rad", "grad", "turn"]);
  var lengthUnits2 = /* @__PURE__ */ new Set([
    "%",
    "cap",
    "ch",
    "cm",
    "cqb",
    "cqh",
    "cqi",
    "cqmax",
    "cqmin",
    "cqw",
    "dvh",
    "dvw",
    "em",
    "ex",
    "ic",
    "in",
    "lh",
    "lvh",
    "lvw",
    "mm",
    "pc",
    "pt",
    "px",
    "q",
    "rem",
    "rlh",
    "svh",
    "svw",
    "vb",
    "vh",
    "vi",
    "vmax",
    "vmin",
    "vw"
  ]);
  var cssNumberRegex2 = /^([+-]?(?:\d+\.?\d*|\.\d+))([a-zA-Z%]+)?$/;
  var transformOriginKeywords2 = /* @__PURE__ */ new Set([
    "left",
    "center",
    "right",
    "top",
    "bottom"
  ]);
  var transformOriginKeywordOptions2 = (keyword) => {
    if (keyword === "left") {
      return [{ axis: "x", value: { value: 0, unit: "%" } }];
    }
    if (keyword === "right") {
      return [{ axis: "x", value: { value: 100, unit: "%" } }];
    }
    if (keyword === "top") {
      return [{ axis: "y", value: { value: 0, unit: "%" } }];
    }
    if (keyword === "bottom") {
      return [{ axis: "y", value: { value: 100, unit: "%" } }];
    }
    return [
      { axis: "x", value: { value: 50, unit: "%" } },
      { axis: "y", value: { value: 50, unit: "%" } }
    ];
  };
  var transformOriginCenter2 = { value: 50, unit: "%" };
  var stringifyNumber2 = (value) => {
    return String(normalizeNumber2(value));
  };
  var UnsupportedStringInterpolationValueError2 = class extends TypeError {
  };
  var parseStringInterpolationComponent2 = (component, value) => {
    const match = cssNumberRegex2.exec(component);
    if (match === null) {
      throw new UnsupportedStringInterpolationValueError2(`Cannot interpolate "${value}" because "${component}" is not a supported scale, translate, or rotate value`);
    }
    const unit = match[2] ?? null;
    const numberValue = Number(match[1]);
    if (!Number.isFinite(numberValue)) {
      throw new TypeError(`Cannot interpolate "${value}" because "${component}" is not finite`);
    }
    if (unit === null) {
      return { kind: "scale", value: numberValue, unit: null };
    }
    if (angleUnits2.has(unit)) {
      return { kind: "rotate", value: numberValue, unit };
    }
    if (lengthUnits2.has(unit)) {
      return { kind: "translate", value: numberValue, unit };
    }
    throw new TypeError(`Cannot interpolate "${value}" because "${unit}" is not a supported translate or rotate unit`);
  };
  var parseTransformOriginLengthPercentage2 = ({
    component,
    value,
    allowPercentage
  }) => {
    const match = cssNumberRegex2.exec(component);
    if (match === null) {
      throw new TypeError(`Cannot interpolate "${value}" because "${component}" is not a supported transform-origin ${allowPercentage ? "length-percentage" : "z length"}`);
    }
    const unit = match[2] ?? null;
    const numberValue = Number(match[1]);
    if (!Number.isFinite(numberValue)) {
      throw new TypeError(`Cannot interpolate "${value}" because "${component}" is not finite`);
    }
    if (unit === null || !lengthUnits2.has(unit) || !allowPercentage && unit === "%") {
      throw new TypeError(`Cannot interpolate "${value}" because "${component}" is not a supported transform-origin ${allowPercentage ? "length-percentage" : "z length"}`);
    }
    return { value: numberValue, unit };
  };
  var parseTransformOriginToken2 = (component, value) => {
    const lower = component.toLowerCase();
    if (transformOriginKeywords2.has(lower)) {
      return { type: "keyword", keyword: lower };
    }
    return {
      type: "length-percentage",
      parsed: parseTransformOriginLengthPercentage2({
        component,
        value,
        allowPercentage: true
      })
    };
  };
  var parseTwoTransformOriginKeywords2 = (first, second, value) => {
    const candidates = [];
    for (const firstOption of transformOriginKeywordOptions2(first)) {
      for (const secondOption of transformOriginKeywordOptions2(second)) {
        if (firstOption.axis === secondOption.axis) {
          continue;
        }
        candidates.push(firstOption.axis === "x" ? [firstOption.value, secondOption.value] : [secondOption.value, firstOption.value]);
      }
    }
    if (candidates.length === 0) {
      throw new TypeError(`Cannot interpolate "${value}" because "${first} ${second}" is not a valid transform-origin keyword pair`);
    }
    return candidates[0];
  };
  var parseTransformOriginXY2 = (parts, value) => {
    if (parts.length === 1) {
      const token = parseTransformOriginToken2(parts[0], value);
      if (token.type === "length-percentage") {
        return [token.parsed, transformOriginCenter2];
      }
      if (token.keyword === "top" || token.keyword === "bottom") {
        return [
          transformOriginCenter2,
          transformOriginKeywordOptions2(token.keyword)[0].value
        ];
      }
      return [
        transformOriginKeywordOptions2(token.keyword)[0].value,
        transformOriginCenter2
      ];
    }
    const first = parseTransformOriginToken2(parts[0], value);
    const second = parseTransformOriginToken2(parts[1], value);
    if (first.type === "length-percentage" && second.type === "length-percentage") {
      return [first.parsed, second.parsed];
    }
    if (first.type === "keyword" && second.type === "keyword") {
      return parseTwoTransformOriginKeywords2(first.keyword, second.keyword, value);
    }
    const keyword = first.type === "keyword" ? first : second.type === "keyword" ? second : null;
    const length = first.type === "length-percentage" ? first.parsed : second.type === "length-percentage" ? second.parsed : null;
    if (keyword === null || length === null) {
      throw new Error("Expected a keyword and a length-percentage value");
    }
    const keywordIsFirst = first.type === "keyword";
    if (keyword.keyword === "left" || keyword.keyword === "right") {
      if (!keywordIsFirst) {
        throw new TypeError(`Cannot interpolate "${value}" because horizontal transform-origin keywords must come before a length-percentage value`);
      }
      return [transformOriginKeywordOptions2(keyword.keyword)[0].value, length];
    }
    if (keyword.keyword === "top" || keyword.keyword === "bottom") {
      return [length, transformOriginKeywordOptions2(keyword.keyword)[0].value];
    }
    return keywordIsFirst ? [transformOriginCenter2, length] : [length, transformOriginCenter2];
  };
  var parseTransformOriginValue2 = (output, parts) => {
    const [x, y] = parseTransformOriginXY2(parts.slice(0, 2), output);
    const z = parts[2] === void 0 ? { value: 0, unit: null } : parseTransformOriginLengthPercentage2({
      component: parts[2],
      value: output,
      allowPercentage: false
    });
    return {
      kind: "translate",
      values: [x.value, y.value, z.value, 0],
      units: [x.unit, y.unit, z.unit, null],
      dimensions: parts[2] === void 0 ? 2 : 3,
      axisRotation: false
    };
  };
  var parseAxisRotationValue2 = (output) => {
    const parts = output.trim().split(/\s+/);
    const keywordAxis = parts.length === 2 ? parts[0].toLowerCase() : null;
    if (keywordAxis === "x" || keywordAxis === "y" || keywordAxis === "z") {
      const keywordAngle = parseStringInterpolationComponent2(parts[1], output);
      if (keywordAngle.kind !== "rotate") {
        return null;
      }
      return {
        kind: "rotate",
        values: keywordAxis === "x" ? [1, 0, 0, keywordAngle.value] : keywordAxis === "y" ? [0, 1, 0, keywordAngle.value] : [0, 0, 1, keywordAngle.value],
        units: [null, null, null, keywordAngle.unit],
        dimensions: 4,
        axisRotation: true
      };
    }
    if (parts.length !== 4) {
      return null;
    }
    const axis = parts.slice(0, 3).map(Number);
    if (!axis.every(Number.isFinite)) {
      return null;
    }
    const vectorAngle = parseStringInterpolationComponent2(parts[3], output);
    if (vectorAngle.kind !== "rotate") {
      return null;
    }
    return {
      kind: "rotate",
      values: [axis[0], axis[1], axis[2], vectorAngle.value],
      units: [null, null, null, vectorAngle.unit],
      dimensions: 4,
      axisRotation: true
    };
  };
  var parseStringInterpolationValue2 = (output) => {
    if (typeof output === "number") {
      if (!Number.isFinite(output)) {
        throw new Error(`outputRange must contain only finite numbers, but got [${output}]`);
      }
      return {
        kind: "scale",
        values: [output, output, 1, 0],
        units: [null, null, null, null],
        dimensions: 1,
        axisRotation: false
      };
    }
    const axisRotation = parseAxisRotationValue2(output);
    if (axisRotation !== null) {
      return axisRotation;
    }
    const parts = output.trim().split(/\s+/);
    if (parts.length < 1 || parts.length > 3 || parts[0] === "") {
      throw new TypeError(`String outputRange values must contain 1 to 3 components, but got "${output}"`);
    }
    if (parts.some((part) => transformOriginKeywords2.has(part.toLowerCase()))) {
      return parseTransformOriginValue2(output, parts);
    }
    const parsed = parts.map((part) => parseStringInterpolationComponent2(part, output));
    const [{ kind }] = parsed;
    for (const part of parsed) {
      if (part.kind !== kind) {
        throw new TypeError(`Cannot interpolate "${output}" because it mixes ${kind} and ${part.kind} values`);
      }
    }
    if (kind === "scale") {
      const x = parsed[0].value;
      const y = parsed[1]?.value ?? x;
      const z = parsed[2]?.value ?? 1;
      return {
        kind,
        values: [x, y, z, 0],
        units: [null, null, null, null],
        dimensions: parsed.length,
        axisRotation: false
      };
    }
    return {
      kind,
      values: [parsed[0].value, parsed[1]?.value ?? 0, parsed[2]?.value ?? 0, 0],
      units: [
        parsed[0].unit,
        parsed[1]?.unit ?? null,
        parsed[2]?.unit ?? null,
        null
      ],
      dimensions: parsed.length,
      axisRotation: false
    };
  };
  var serializeStringInterpolationValue2 = ({
    kind,
    values,
    units,
    dimensions,
    axisRotation
  }) => {
    if (axisRotation) {
      return `${stringifyNumber2(values[0])} ${stringifyNumber2(values[1])} ${stringifyNumber2(values[2])} ${stringifyNumber2(values[3])}${units[3]}`;
    }
    if (kind === "scale") {
      return values.slice(0, dimensions).map((value) => stringifyNumber2(value)).join(" ");
    }
    return values.slice(0, dimensions).map((value, index) => `${stringifyNumber2(value)}${units[index]}`).join(" ");
  };
  var toSignedArea2 = (scale) => {
    if (scale === 0) {
      return 0;
    }
    return Math.sign(scale) * scale * scale;
  };
  var fromSignedArea2 = (area) => {
    if (area === 0) {
      return 0;
    }
    return Math.sign(area) * Math.sqrt(Math.abs(area));
  };
  function interpolateFunction2(input, inputRange, outputRange, options) {
    const { extrapolateLeft, extrapolateRight, easing, output } = options;
    let result = input;
    const [inputMin, inputMax] = inputRange;
    const [outputMin, outputMax] = outputRange;
    if (result < inputMin) {
      if (extrapolateLeft === "identity") {
        return result;
      }
      if (extrapolateLeft === "clamp") {
        result = inputMin;
      } else if (extrapolateLeft === "wrap") {
        const range = inputMax - inputMin;
        result = ((result - inputMin) % range + range) % range + inputMin;
      } else if (extrapolateLeft === "extend") {
      }
    }
    if (result > inputMax) {
      if (extrapolateRight === "identity") {
        return result;
      }
      if (extrapolateRight === "clamp") {
        result = inputMax;
      } else if (extrapolateRight === "wrap") {
        const range = inputMax - inputMin;
        result = ((result - inputMin) % range + range) % range + inputMin;
      } else if (extrapolateRight === "extend") {
      }
    }
    if (outputMin === outputMax) {
      return outputMin;
    }
    result = (result - inputMin) / (inputMax - inputMin);
    result = easing(result);
    if (output === "perceptual-scale") {
      const signedAreaMin = toSignedArea2(outputMin);
      const signedAreaMax = toSignedArea2(outputMax);
      result = fromSignedArea2(result * (signedAreaMax - signedAreaMin) + signedAreaMin);
    } else {
      result = result * (outputMax - outputMin) + outputMin;
    }
    return result;
  }
  function findRange2(input, inputRange) {
    let i;
    for (i = 1; i < inputRange.length - 1; ++i) {
      if (inputRange[i] >= input) {
        break;
      }
    }
    return i - 1;
  }
  var defaultEasing2 = (num) => num;
  var resolveOutputOption2 = (output) => {
    return output ?? "linear";
  };
  var shouldExtendRightForEasing2 = (easing) => {
    return easing.remotionShouldExtendRight === true;
  };
  var resolveEasingForSegment2 = ({
    easing,
    segmentIndex
  }) => {
    if (easing === void 0) {
      return defaultEasing2;
    }
    if (typeof easing === "function") {
      return easing;
    }
    return easing[segmentIndex];
  };
  var interpolateSegment2 = ({
    input,
    inputRange,
    outputRange,
    easing,
    extrapolateLeft,
    extrapolateRight,
    output
  }) => {
    return interpolateFunction2(input, inputRange, outputRange, {
      easing,
      extrapolateLeft,
      extrapolateRight: input > inputRange[1] && extrapolateRight === "clamp" && shouldExtendRightForEasing2(easing) ? "extend" : extrapolateRight,
      output
    });
  };
  var interpolateNumber2 = ({
    input,
    inputRange,
    outputRange,
    options
  }) => {
    const output = resolveOutputOption2(options?.output);
    if (inputRange.length === 1) {
      return outputRange[0];
    }
    const easingOption = options?.easing;
    let extrapolateLeft = "extend";
    if (options?.extrapolateLeft !== void 0) {
      extrapolateLeft = options.extrapolateLeft;
    }
    let extrapolateRight = "extend";
    if (options?.extrapolateRight !== void 0) {
      extrapolateRight = options.extrapolateRight;
    }
    const posterizedInput = options?.posterize === void 0 ? input : Math.floor(input / options.posterize) * options.posterize;
    const range = findRange2(posterizedInput, inputRange);
    const easing = resolveEasingForSegment2({
      easing: easingOption,
      segmentIndex: range
    });
    let result = interpolateSegment2({
      input: posterizedInput,
      inputRange: [inputRange[range], inputRange[range + 1]],
      outputRange: [outputRange[range], outputRange[range + 1]],
      easing,
      extrapolateLeft,
      extrapolateRight,
      output
    });
    for (let segmentIndex = 0; segmentIndex < range; segmentIndex++) {
      const previousEasing = resolveEasingForSegment2({
        easing: easingOption,
        segmentIndex
      });
      if (!shouldExtendRightForEasing2(previousEasing)) {
        continue;
      }
      const previousSegmentEnd = inputRange[segmentIndex + 1];
      if (posterizedInput <= previousSegmentEnd) {
        continue;
      }
      const continuedSegmentValue = interpolateSegment2({
        input: posterizedInput,
        inputRange: [inputRange[segmentIndex], previousSegmentEnd],
        outputRange: [outputRange[segmentIndex], outputRange[segmentIndex + 1]],
        easing: previousEasing,
        extrapolateLeft,
        extrapolateRight: "extend",
        output
      });
      result += continuedSegmentValue - outputRange[segmentIndex + 1];
    }
    return result;
  };
  var interpolateString2 = ({
    input,
    inputRange,
    outputRange,
    options
  }) => {
    const initiallyParsedOutputRange = outputRange.map(parseStringInterpolationValue2);
    const hasAxisRotation = initiallyParsedOutputRange.some((parsed) => parsed.axisRotation);
    const parsedOutputRange = hasAxisRotation ? initiallyParsedOutputRange.map((parsed) => {
      if (parsed.kind !== "rotate") {
        return parsed;
      }
      if (parsed.axisRotation) {
        return parsed;
      }
      if (parsed.dimensions !== 1) {
        throw new TypeError("Cannot interpolate a multi-angle rotate value with an axis rotation");
      }
      return {
        kind: "rotate",
        values: [0, 0, 1, parsed.values[0]],
        units: [null, null, null, parsed.units[0]],
        dimensions: 4,
        axisRotation: true
      };
    }) : initiallyParsedOutputRange;
    const kind = parsedOutputRange[0]?.kind;
    if (kind === void 0) {
      throw new Error("outputRange must have at least 1 element");
    }
    for (const parsed of parsedOutputRange) {
      if (parsed.kind !== kind) {
        throw new TypeError(`Cannot interpolate ${kind} values with ${parsed.kind} values`);
      }
    }
    const dimensions = Math.max(...parsedOutputRange.map((parsed) => parsed.dimensions));
    const units = [
      null,
      null,
      null,
      null
    ];
    if (kind !== "scale") {
      for (let axis = 0; axis < dimensions; axis++) {
        if (hasAxisRotation && axis < 3) {
          continue;
        }
        for (const parsed of parsedOutputRange) {
          const unit = parsed.units[axis];
          if (unit === null) {
            continue;
          }
          if (units[axis] === null) {
            units[axis] = unit;
            continue;
          }
          if (units[axis] !== unit) {
            throw new TypeError(`Cannot interpolate ${kind} values with different units on axis ${axis + 1}: ${units[axis]} and ${unit}`);
          }
        }
        if (units[axis] === null) {
          throw new TypeError(`Cannot interpolate ${kind} values because axis ${axis + 1} has no unit`);
        }
      }
    }
    const values = [0, 0, 0, 0];
    for (let axis = 0; axis < dimensions; axis++) {
      values[axis] = interpolateNumber2({
        input,
        inputRange,
        outputRange: parsedOutputRange.map((parsed) => parsed.values[axis]),
        options
      });
    }
    return serializeStringInterpolationValue2({
      kind,
      values,
      units,
      dimensions,
      axisRotation: hasAxisRotation
    });
  };
  var interpolateDiscreteString2 = ({
    input,
    inputRange,
    outputRange,
    options
  }) => {
    if (inputRange.length === 1) {
      return outputRange[0];
    }
    for (let segmentIndex = 0; segmentIndex < inputRange.length - 1; segmentIndex++) {
      if (resolveEasingForSegment2({
        easing: options?.easing,
        segmentIndex
      }) !== Easing2.step1) {
        throw new TypeError("Non-numeric strings can only be interpolated using Easing.step1");
      }
    }
    const posterizedInput = options?.posterize === void 0 ? input : Math.floor(input / options.posterize) * options.posterize;
    const inputMin = inputRange[0];
    const inputMax = inputRange[inputRange.length - 1];
    let resolvedInput = posterizedInput;
    if (resolvedInput < inputMin) {
      if (options?.extrapolateLeft === "identity") {
        throw new TypeError('extrapolateLeft: "identity" is not supported for non-numeric strings');
      }
      if (options?.extrapolateLeft === "wrap") {
        const wrapRange = inputMax - inputMin;
        resolvedInput = ((resolvedInput - inputMin) % wrapRange + wrapRange) % wrapRange + inputMin;
      } else {
        return outputRange[0];
      }
    }
    if (resolvedInput > inputMax) {
      if (options?.extrapolateRight === "identity") {
        throw new TypeError('extrapolateRight: "identity" is not supported for non-numeric strings');
      }
      if (options?.extrapolateRight === "wrap") {
        const wrapRange = inputMax - inputMin;
        resolvedInput = ((resolvedInput - inputMin) % wrapRange + wrapRange) % wrapRange + inputMin;
      } else {
        return outputRange[outputRange.length - 1];
      }
    }
    const range = findRange2(resolvedInput, inputRange);
    return resolvedInput >= inputRange[range + 1] ? outputRange[range + 1] : outputRange[range];
  };
  var validateTupleOutputRange2 = (outputRange) => {
    const dimensions = outputRange[0]?.length;
    if (dimensions === void 0) {
      throw new Error("outputRange must have at least 1 element");
    }
    if (dimensions === 0) {
      throw new TypeError("outputRange tuples must contain at least 1 number");
    }
    for (const output of outputRange) {
      if (output.length !== dimensions) {
        throw new TypeError(`outputRange tuples must all have the same length, but got ${dimensions} and ${output.length}`);
      }
      for (const value of output) {
        if (typeof value !== "number" || !Number.isFinite(value)) {
          throw new TypeError(`outputRange tuples must contain only finite numbers, but got [${output.join(",")}]`);
        }
      }
    }
    return dimensions;
  };
  var interpolateTuple2 = ({
    input,
    inputRange,
    outputRange,
    options
  }) => {
    const dimensions = validateTupleOutputRange2(outputRange);
    return new Array(dimensions).fill(true).map((_, axis) => interpolateNumber2({
      input,
      inputRange,
      outputRange: outputRange.map((output) => output[axis]),
      options
    }));
  };
  function checkValidInputRange2(arr) {
    for (let i = 1; i < arr.length; ++i) {
      if (!(arr[i] > arr[i - 1])) {
        throw new Error(`inputRange must be strictly monotonically increasing but got [${arr.join(",")}]`);
      }
    }
  }
  function checkInfiniteRange2(name, arr) {
    if (arr.length < 1) {
      throw new Error(name + " must have at least 1 element");
    }
    for (const element of arr) {
      if (typeof element !== "number") {
        throw new Error(`${name} must contain only numbers`);
      }
      if (!Number.isFinite(element)) {
        throw new Error(`${name} must contain only finite numbers, but got [${arr.join(",")}]`);
      }
    }
  }
  function assertValidInterpolateEasingOption2(easing, inputRangeLength) {
    if (easing === void 0) {
      return;
    }
    if (typeof easing === "function") {
      return;
    }
    const expectedLength = inputRangeLength - 1;
    if (easing.length !== expectedLength) {
      throw new Error(`When easing is an array, it must have one entry per segment between keyframes (length inputRange.length - 1 = ${expectedLength}), but got length ${easing.length}`);
    }
    for (let i = 0; i < easing.length; i++) {
      if (typeof easing[i] !== "function") {
        throw new Error(`easing[${i}] must be a function`);
      }
    }
  }
  function assertValidInterpolatePosterizeOption2(posterize) {
    if (posterize === void 0) {
      return;
    }
    if (typeof posterize !== "number" || !Number.isFinite(posterize) || posterize <= 0) {
      throw new Error(`posterize must be a positive finite number, but got ${posterize}`);
    }
  }
  function assertValidInterpolateOutputOption2(output) {
    if (output === void 0 || output === "linear" || output === "perceptual-scale") {
      return;
    }
    throw new Error(`output must be "linear" or "perceptual-scale", but got ${String(output)}`);
  }
  function interpolate2(input, inputRange, outputRange, options) {
    if (typeof input === "undefined") {
      throw new Error("input can not be undefined");
    }
    if (typeof inputRange === "undefined") {
      throw new Error("inputRange can not be undefined");
    }
    if (typeof outputRange === "undefined") {
      throw new Error("outputRange can not be undefined");
    }
    if (inputRange.length !== outputRange.length) {
      throw new Error("inputRange (" + inputRange.length + ") and outputRange (" + outputRange.length + ") must have the same length");
    }
    checkInfiniteRange2("inputRange", inputRange);
    checkValidInputRange2(inputRange);
    assertValidInterpolateEasingOption2(options?.easing, inputRange.length);
    assertValidInterpolatePosterizeOption2(options?.posterize);
    assertValidInterpolateOutputOption2(options?.output);
    if (typeof input !== "number") {
      throw new TypeError("Cannot interpolate an input which is not a number");
    }
    if (!Array.isArray(outputRange)) {
      throw new Error("outputRange must contain only numbers");
    }
    const hasStringOutput = outputRange.some((output) => typeof output === "string");
    if (hasStringOutput) {
      if (!outputRange.every((output) => typeof output === "string" || typeof output === "number")) {
        throw new TypeError("outputRange must contain only numbers, or supported scale, translate, and rotate strings");
      }
      try {
        return interpolateString2({ input, inputRange, outputRange, options });
      } catch (error2) {
        if (!outputRange.every((output) => typeof output === "string")) {
          throw error2;
        }
        const hasNonNumericString = outputRange.some((output) => {
          try {
            parseStringInterpolationValue2(output);
            return false;
          } catch (parseError) {
            return parseError instanceof UnsupportedStringInterpolationValueError2;
          }
        });
        if (!hasNonNumericString) {
          throw error2;
        }
        return interpolateDiscreteString2({
          input,
          inputRange,
          outputRange,
          options
        });
      }
    }
    if (outputRange.every((output) => Array.isArray(output))) {
      return interpolateTuple2({ input, inputRange, outputRange, options });
    }
    if (!outputRange.every((output) => typeof output === "number")) {
      throw new TypeError("outputRange must contain only numbers, numeric tuples, or supported scale, translate, and rotate strings");
    }
    checkInfiniteRange2("outputRange", outputRange);
    return interpolateNumber2({ input, inputRange, outputRange, options });
  }
  function truthy2(value) {
    return Boolean(value);
  }
  if (typeof window !== "undefined") {
    window.remotion_renderReady = false;
    if (!window.remotion_delayRenderTimeouts) {
      window.remotion_delayRenderTimeouts = {};
    }
    window.remotion_delayRenderHandles = [];
  }
  var DELAY_RENDER_CALLSTACK_TOKEN2 = "The delayRender was called:";
  var DELAY_RENDER_RETRIES_LEFT2 = "Retries left: ";
  var DELAY_RENDER_RETRY_TOKEN2 = "- Rendering the frame will be retried.";
  var DELAY_RENDER_CLEAR_TOKEN2 = "handle was cleared after";
  var findPropsToDelete2 = ({
    schema,
    key,
    value
  }) => {
    const fieldSchema = schema[key];
    if (!fieldSchema) {
      throw new Error("Key " + JSON.stringify(key) + " not found in schema");
    }
    if (typeof value !== "string") {
      throw new Error("Value must be a string, but is " + JSON.stringify(value));
    }
    if (fieldSchema.type !== "enum") {
      throw new Error("Key " + JSON.stringify(key) + " is not an enum");
    }
    const currentVariant = fieldSchema.variants[value];
    if (!currentVariant) {
      throw new Error("Value for " + JSON.stringify(key) + " must be one of " + Object.keys(fieldSchema.variants).map((v) => JSON.stringify(v)).join(", ") + ", got " + JSON.stringify(value));
    }
    const otherVariants = Object.keys(fieldSchema.variants).filter((v) => v !== value);
    const otherKeys = /* @__PURE__ */ new Set();
    for (const variant of otherVariants) {
      const otherVariant = fieldSchema.variants[variant];
      const keys = Object.keys(otherVariant);
      for (const k of keys) {
        otherKeys.add(k);
      }
    }
    return [...otherKeys];
  };
  var DATE_TOKEN2 = "remotion-date:";
  var FILE_TOKEN2 = "remotion-file:";
  var serializeJSONWithSpecialTypes2 = ({
    data,
    indent,
    staticBase
  }) => {
    let customDateUsed = false;
    let customFileUsed = false;
    let mapUsed = false;
    let setUsed = false;
    try {
      const serializedString = JSON.stringify(data, function(key, value) {
        const item = this[key];
        if (item instanceof Date) {
          customDateUsed = true;
          return `${DATE_TOKEN2}${item.toISOString()}`;
        }
        if (item instanceof Map) {
          mapUsed = true;
          return value;
        }
        if (item instanceof Set) {
          setUsed = true;
          return value;
        }
        if (typeof item === "string" && staticBase !== null && item.startsWith(staticBase)) {
          customFileUsed = true;
          return `${FILE_TOKEN2}${item.replace(staticBase + "/", "")}`;
        }
        return value;
      }, indent);
      return { serializedString, customDateUsed, customFileUsed, mapUsed, setUsed };
    } catch (err) {
      throw new Error("Could not serialize the passed input props to JSON: " + err.message);
    }
  };
  var deserializeJSONWithSpecialTypes2 = (data) => {
    return JSON.parse(data, (_, value) => {
      if (typeof value === "string" && value.startsWith(DATE_TOKEN2)) {
        return new Date(value.replace(DATE_TOKEN2, ""));
      }
      if (typeof value === "string" && value.startsWith(FILE_TOKEN2)) {
        return `${window.remotion_staticBase}/${value.replace(FILE_TOKEN2, "")}`;
      }
      return value;
    });
  };
  var transformSchema2 = {
    "style.transformOrigin": {
      type: "transform-origin",
      step: 1,
      default: "50% 50%",
      description: "Transform origin"
    },
    "style.translate": {
      type: "translate",
      step: 1,
      default: "0px 0px",
      description: "Offset"
    },
    "style.scale": {
      type: "scale",
      max: 100,
      step: 0.01,
      default: 1,
      description: "Scale",
      defaultKeyframeOutput: "perceptual-scale"
    },
    "style.rotate": {
      type: "rotation-css",
      step: 1,
      default: "0deg",
      description: "Rotation"
    },
    "style.opacity": {
      type: "number",
      min: 0,
      max: 1,
      step: 0.01,
      default: 1,
      description: "Opacity",
      hiddenFromList: false
    }
  };
  var borderSchema2 = {
    "style.borderWidth": {
      type: "number",
      default: void 0,
      min: 0,
      step: 1,
      description: "Border width",
      hiddenFromList: false
    },
    "style.borderStyle": {
      type: "enum",
      default: "none",
      description: "Border style",
      variants: {
        none: {},
        hidden: {},
        solid: {},
        dashed: {},
        dotted: {},
        double: {},
        groove: {},
        ridge: {},
        inset: {},
        outset: {}
      }
    },
    "style.borderColor": {
      type: "color",
      default: void 0,
      description: "Border color"
    }
  };
  var borderRadiusSchema2 = {
    "style.borderRadius": {
      type: "number",
      default: 0,
      min: 0,
      step: 1,
      description: "Border radius",
      hiddenFromList: false,
      keyframable: true
    },
    "style.borderTopLeftRadius": {
      type: "number",
      default: 0,
      min: 0,
      step: 1,
      description: "Top left radius",
      hiddenFromList: false
    },
    "style.borderTopRightRadius": {
      type: "number",
      default: 0,
      min: 0,
      step: 1,
      description: "Top right radius",
      hiddenFromList: false
    },
    "style.borderBottomRightRadius": {
      type: "number",
      default: 0,
      min: 0,
      step: 1,
      description: "Bottom right radius",
      hiddenFromList: false
    },
    "style.borderBottomLeftRadius": {
      type: "number",
      default: 0,
      min: 0,
      step: 1,
      description: "Bottom left radius",
      hiddenFromList: false
    }
  };
  var backgroundSchema2 = {
    "style.backgroundColor": {
      type: "color",
      default: "transparent",
      description: "Color"
    }
  };
  var svgColorSchema2 = {
    color: {
      type: "color",
      default: void 0,
      description: "Current color"
    }
  };
  var svgStrokeSchema2 = {
    ...svgColorSchema2,
    stroke: {
      type: "color",
      default: "none",
      description: "Stroke"
    },
    strokeWidth: {
      type: "number",
      default: 1,
      description: "Stroke width",
      min: 0,
      step: 1,
      hiddenFromList: false
    }
  };
  var svgPaintSchema2 = {
    fill: {
      type: "color",
      default: void 0,
      description: "Fill"
    },
    ...svgStrokeSchema2
  };
  var premountSchema2 = {
    premountFor: {
      type: "number",
      default: 0,
      description: "Premount For",
      min: 0,
      step: 1,
      hiddenFromList: false,
      keyframable: false
    },
    postmountFor: {
      type: "number",
      default: 0,
      min: 0,
      step: 1,
      hiddenFromList: true,
      keyframable: false
    }
  };
  var sequencePremountSchema2 = {
    ...premountSchema2
  };
  var cropSchema2 = {
    cropLeft: {
      type: "number",
      default: 0,
      description: "Crop left",
      min: 0,
      max: 1,
      step: 0.01,
      hiddenFromList: false,
      keyframable: true
    },
    cropRight: {
      type: "number",
      default: 0,
      description: "Crop right",
      min: 0,
      max: 1,
      step: 0.01,
      hiddenFromList: false,
      keyframable: true
    },
    cropTop: {
      type: "number",
      default: 0,
      description: "Crop top",
      min: 0,
      max: 1,
      step: 0.01,
      hiddenFromList: false,
      keyframable: true
    },
    cropBottom: {
      type: "number",
      default: 0,
      description: "Crop bottom",
      min: 0,
      max: 1,
      step: 0.01,
      hiddenFromList: false,
      keyframable: true
    }
  };
  var sequenceCropSchema2 = cropSchema2;
  var sequenceStyleSchema2 = {
    ...sequenceCropSchema2,
    ...transformSchema2,
    ...backgroundSchema2,
    ...borderSchema2,
    ...borderRadiusSchema2,
    ...sequencePremountSchema2
  };
  var hiddenField2 = {
    type: "boolean",
    default: false,
    description: "Hidden"
  };
  var showInTimelineField2 = {
    type: "hidden"
  };
  var sequenceNameField2 = {
    type: "hidden"
  };
  var durationInFramesField2 = {
    type: "number",
    default: void 0,
    min: 1,
    step: 1,
    hiddenFromList: true
  };
  var fromField2 = {
    type: "number",
    default: 0,
    step: 1,
    hiddenFromList: true
  };
  var trimBeforeField2 = {
    type: "number",
    default: 0,
    min: 0,
    step: 1,
    hiddenFromList: true
  };
  var freezeField2 = {
    type: "number",
    default: null,
    step: 1,
    hiddenFromList: true
  };
  var baseSchema2 = {
    durationInFrames: durationInFramesField2,
    from: fromField2,
    trimBefore: trimBeforeField2,
    freeze: freezeField2,
    hidden: hiddenField2,
    name: sequenceNameField2,
    showInTimeline: showInTimelineField2
  };
  var sequenceSchema2 = {
    ...baseSchema2,
    layout: {
      type: "enum",
      default: "absolute-fill",
      description: "Layout",
      variants: {
        "absolute-fill": sequenceStyleSchema2,
        none: {}
      }
    }
  };
  var baseSchemaWithoutFrom2 = {
    durationInFrames: durationInFramesField2,
    trimBefore: trimBeforeField2,
    freeze: freezeField2,
    hidden: hiddenField2,
    name: sequenceNameField2,
    showInTimeline: showInTimelineField2
  };
  var sequenceSchemaWithoutFrom2 = {
    ...baseSchemaWithoutFrom2,
    layout: sequenceSchema2.layout
  };
  var sequenceSchemaDefaultLayoutNone2 = {
    ...sequenceSchema2,
    layout: {
      ...sequenceSchema2.layout,
      default: "none"
    }
  };
  var NUMBER2 = "[-+]?\\d*\\.?\\d+";
  var PERCENTAGE2 = NUMBER2 + "%";
  function call2(...args) {
    return "\\(\\s*(" + args.join(")\\s*,\\s*(") + ")\\s*\\)";
  }
  var MODERN_VALUE2 = "(?:none|[-+]?\\d*\\.?\\d+(?:%|deg|rad|grad|turn)?)";
  function modernColorCall2(name) {
    return new RegExp(name + "\\(\\s*(" + MODERN_VALUE2 + ")\\s+(" + MODERN_VALUE2 + ")\\s+(" + MODERN_VALUE2 + ")(?:\\s*\\/\\s*(" + MODERN_VALUE2 + "))?\\s*\\)");
  }
  function getMatchers2() {
    const cachedMatchers = {
      rgb: void 0,
      rgba: void 0,
      hsl: void 0,
      hsla: void 0,
      hex3: void 0,
      hex4: void 0,
      hex5: void 0,
      hex6: void 0,
      hex8: void 0,
      oklch: void 0,
      oklab: void 0,
      lab: void 0,
      lch: void 0,
      hwb: void 0
    };
    if (cachedMatchers.rgb === void 0) {
      cachedMatchers.rgb = new RegExp("rgb" + call2(NUMBER2, NUMBER2, NUMBER2));
      cachedMatchers.rgba = new RegExp("rgba" + call2(NUMBER2, NUMBER2, NUMBER2, NUMBER2));
      cachedMatchers.hsl = new RegExp("hsl" + call2(NUMBER2, PERCENTAGE2, PERCENTAGE2));
      cachedMatchers.hsla = new RegExp("hsla" + call2(NUMBER2, PERCENTAGE2, PERCENTAGE2, NUMBER2));
      cachedMatchers.hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
      cachedMatchers.hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
      cachedMatchers.hex6 = /^#([0-9a-fA-F]{6})$/;
      cachedMatchers.hex8 = /^#([0-9a-fA-F]{8})$/;
      cachedMatchers.oklch = modernColorCall2("oklch");
      cachedMatchers.oklab = modernColorCall2("oklab");
      cachedMatchers.lab = modernColorCall2("lab");
      cachedMatchers.lch = modernColorCall2("lch");
      cachedMatchers.hwb = modernColorCall2("hwb");
    }
    return cachedMatchers;
  }
  function hue2rgb2(p, q, t) {
    if (t < 0) {
      t += 1;
    }
    if (t > 1) {
      t -= 1;
    }
    if (t < 1 / 6) {
      return p + (q - p) * 6 * t;
    }
    if (t < 1 / 2) {
      return q;
    }
    if (t < 2 / 3) {
      return p + (q - p) * (2 / 3 - t) * 6;
    }
    return p;
  }
  function hslToRgb2(h, s, l) {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    const r = hue2rgb2(p, q, h + 1 / 3);
    const g = hue2rgb2(p, q, h);
    const b22 = hue2rgb2(p, q, h - 1 / 3);
    return Math.round(r * 255) << 24 | Math.round(g * 255) << 16 | Math.round(b22 * 255) << 8;
  }
  function parse2552(str) {
    const int = Number.parseInt(str, 10);
    if (int < 0) {
      return 0;
    }
    if (int > 255) {
      return 255;
    }
    return int;
  }
  function parse3602(str) {
    const int = Number.parseFloat(str);
    return (int % 360 + 360) % 360 / 360;
  }
  function parse12(str) {
    const num = Number.parseFloat(str);
    if (num < 0) {
      return 0;
    }
    if (num > 1) {
      return 255;
    }
    return Math.round(num * 255);
  }
  function parsePercentage2(str) {
    const int = Number.parseFloat(str);
    if (int < 0) {
      return 0;
    }
    if (int > 100) {
      return 1;
    }
    return int / 100;
  }
  function parseModernComponent2(str, percentScale) {
    if (str === "none")
      return 0;
    if (str.endsWith("%")) {
      return Number.parseFloat(str) / 100 * percentScale;
    }
    return Number.parseFloat(str);
  }
  function parseHueAngle2(str) {
    if (str === "none")
      return 0;
    if (str.endsWith("rad")) {
      return Number.parseFloat(str) * 180 / Math.PI;
    }
    if (str.endsWith("grad"))
      return Number.parseFloat(str) * 0.9;
    if (str.endsWith("turn"))
      return Number.parseFloat(str) * 360;
    return Number.parseFloat(str);
  }
  function parseModernAlpha2(str) {
    if (str === void 0 || str === "none")
      return 1;
    if (str.endsWith("%")) {
      return Math.max(0, Math.min(1, Number.parseFloat(str) / 100));
    }
    return Math.max(0, Math.min(1, Number.parseFloat(str)));
  }
  function linearToSrgb2(c22) {
    if (c22 <= 31308e-7)
      return 12.92 * c22;
    return 1.055 * c22 ** (1 / 2.4) - 0.055;
  }
  function clamp012(v) {
    return Math.max(0, Math.min(1, v));
  }
  function rgbFloatToInt2(r, g, b22, alpha) {
    const ri = Math.round(clamp012(r) * 255);
    const gi = Math.round(clamp012(g) * 255);
    const bi = Math.round(clamp012(b22) * 255);
    const ai = Math.round(clamp012(alpha) * 255);
    return (ri << 24 | gi << 16 | bi << 8 | ai) >>> 0;
  }
  function oklabToSrgb2(L, a22, b22) {
    const l_ = L + 0.3963377774 * a22 + 0.2158037573 * b22;
    const m_ = L - 0.1055613458 * a22 - 0.0638541728 * b22;
    const s_ = L - 0.0894841775 * a22 - 1.291485548 * b22;
    const l = l_ * l_ * l_;
    const m = m_ * m_ * m_;
    const s = s_ * s_ * s_;
    const rLin = 4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s;
    const gLin = -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s;
    const bLin = -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s;
    return [linearToSrgb2(rLin), linearToSrgb2(gLin), linearToSrgb2(bLin)];
  }
  function labToSrgb2(L, a22, b22) {
    const epsilon = 216 / 24389;
    const kappa = 24389 / 27;
    const Xn = 0.95047;
    const Yn = 1;
    const Zn = 1.08883;
    const fy = (L + 16) / 116;
    const fx = a22 / 500 + fy;
    const fz = fy - b22 / 200;
    const fx3 = fx * fx * fx;
    const fz3 = fz * fz * fz;
    const xr = fx3 > epsilon ? fx3 : (116 * fx - 16) / kappa;
    const yr = L > kappa * epsilon ? ((L + 16) / 116) ** 3 : L / kappa;
    const zr = fz3 > epsilon ? fz3 : (116 * fz - 16) / kappa;
    const X = xr * Xn;
    const Y = yr * Yn;
    const Z = zr * Zn;
    const rLin = 3.2404542 * X - 1.5371385 * Y - 0.4985314 * Z;
    const gLin = -0.969266 * X + 1.8760108 * Y + 0.041556 * Z;
    const bLin = 0.0556434 * X - 0.2040259 * Y + 1.0572252 * Z;
    return [linearToSrgb2(rLin), linearToSrgb2(gLin), linearToSrgb2(bLin)];
  }
  function hwbToSrgb2(h, w, bk) {
    if (w + bk >= 1) {
      const gray = w / (w + bk);
      return [gray, gray, gray];
    }
    const q = 1;
    const p = 0;
    const r = hue2rgb2(p, q, h + 1 / 3);
    const g = hue2rgb2(p, q, h);
    const bl = hue2rgb2(p, q, h - 1 / 3);
    const factor = 1 - w - bk;
    return [r * factor + w, g * factor + w, bl * factor + w];
  }
  var colorNames2 = {
    transparent: 0,
    aliceblue: 4042850303,
    antiquewhite: 4209760255,
    aqua: 16777215,
    aquamarine: 2147472639,
    azure: 4043309055,
    beige: 4126530815,
    bisque: 4293182719,
    black: 255,
    blanchedalmond: 4293643775,
    blue: 65535,
    blueviolet: 2318131967,
    brown: 2771004159,
    burlywood: 3736635391,
    burntsienna: 3934150143,
    cadetblue: 1604231423,
    chartreuse: 2147418367,
    chocolate: 3530104575,
    coral: 4286533887,
    cornflowerblue: 1687547391,
    cornsilk: 4294499583,
    crimson: 3692313855,
    cyan: 16777215,
    darkblue: 35839,
    darkcyan: 9145343,
    darkgoldenrod: 3095792639,
    darkgray: 2846468607,
    darkgreen: 6553855,
    darkgrey: 2846468607,
    darkkhaki: 3182914559,
    darkmagenta: 2332068863,
    darkolivegreen: 1433087999,
    darkorange: 4287365375,
    darkorchid: 2570243327,
    darkred: 2332033279,
    darksalmon: 3918953215,
    darkseagreen: 2411499519,
    darkslateblue: 1211993087,
    darkslategray: 793726975,
    darkslategrey: 793726975,
    darkturquoise: 13554175,
    darkviolet: 2483082239,
    deeppink: 4279538687,
    deepskyblue: 12582911,
    dimgray: 1768516095,
    dimgrey: 1768516095,
    dodgerblue: 512819199,
    firebrick: 2988581631,
    floralwhite: 4294635775,
    forestgreen: 579543807,
    fuchsia: 4278255615,
    gainsboro: 3705462015,
    ghostwhite: 4177068031,
    gold: 4292280575,
    goldenrod: 3668254975,
    gray: 2155905279,
    green: 8388863,
    greenyellow: 2919182335,
    grey: 2155905279,
    honeydew: 4043305215,
    hotpink: 4285117695,
    indianred: 3445382399,
    indigo: 1258324735,
    ivory: 4294963455,
    khaki: 4041641215,
    lavender: 3873897215,
    lavenderblush: 4293981695,
    lawngreen: 2096890111,
    lemonchiffon: 4294626815,
    lightblue: 2916673279,
    lightcoral: 4034953471,
    lightcyan: 3774873599,
    lightgoldenrodyellow: 4210742015,
    lightgray: 3553874943,
    lightgreen: 2431553791,
    lightgrey: 3553874943,
    lightpink: 4290167295,
    lightsalmon: 4288707327,
    lightseagreen: 548580095,
    lightskyblue: 2278488831,
    lightslategray: 2005441023,
    lightslategrey: 2005441023,
    lightsteelblue: 2965692159,
    lightyellow: 4294959359,
    lime: 16711935,
    limegreen: 852308735,
    linen: 4210091775,
    magenta: 4278255615,
    maroon: 2147483903,
    mediumaquamarine: 1724754687,
    mediumblue: 52735,
    mediumorchid: 3126187007,
    mediumpurple: 2473647103,
    mediumseagreen: 1018393087,
    mediumslateblue: 2070474495,
    mediumspringgreen: 16423679,
    mediumturquoise: 1221709055,
    mediumvioletred: 3340076543,
    midnightblue: 421097727,
    mintcream: 4127193855,
    mistyrose: 4293190143,
    moccasin: 4293178879,
    navajowhite: 4292783615,
    navy: 33023,
    oldlace: 4260751103,
    olive: 2155872511,
    olivedrab: 1804477439,
    orange: 4289003775,
    orangered: 4282712319,
    orchid: 3664828159,
    palegoldenrod: 4008225535,
    palegreen: 2566625535,
    paleturquoise: 2951671551,
    palevioletred: 3681588223,
    papayawhip: 4293907967,
    peachpuff: 4292524543,
    peru: 3448061951,
    pink: 4290825215,
    plum: 3718307327,
    powderblue: 2967529215,
    purple: 2147516671,
    rebeccapurple: 1714657791,
    red: 4278190335,
    rosybrown: 3163525119,
    royalblue: 1097458175,
    saddlebrown: 2336560127,
    salmon: 4202722047,
    sandybrown: 4104413439,
    seagreen: 780883967,
    seashell: 4294307583,
    sienna: 2689740287,
    silver: 3233857791,
    skyblue: 2278484991,
    slateblue: 1784335871,
    slategray: 1887473919,
    slategrey: 1887473919,
    snow: 4294638335,
    springgreen: 16744447,
    steelblue: 1182971135,
    tan: 3535047935,
    teal: 8421631,
    thistle: 3636451583,
    tomato: 4284696575,
    turquoise: 1088475391,
    violet: 4001558271,
    wheat: 4125012991,
    white: 4294967295,
    whitesmoke: 4126537215,
    yellow: 4294902015,
    yellowgreen: 2597139199
  };
  function normalizeColor2(color) {
    const matchers = getMatchers2();
    let match;
    if (matchers.hex6) {
      if (match = matchers.hex6.exec(color)) {
        return Number.parseInt(match[1] + "ff", 16) >>> 0;
      }
    }
    if (colorNames2[color] !== void 0) {
      return colorNames2[color];
    }
    if (matchers.rgb) {
      if (match = matchers.rgb.exec(color)) {
        return (parse2552(match[1]) << 24 | parse2552(match[2]) << 16 | parse2552(match[3]) << 8 | 255) >>> 0;
      }
    }
    if (matchers.rgba) {
      if (match = matchers.rgba.exec(color)) {
        return (parse2552(match[1]) << 24 | parse2552(match[2]) << 16 | parse2552(match[3]) << 8 | parse12(match[4])) >>> 0;
      }
    }
    if (matchers.hex3) {
      if (match = matchers.hex3.exec(color)) {
        return Number.parseInt(match[1] + match[1] + match[2] + match[2] + match[3] + match[3] + "ff", 16) >>> 0;
      }
    }
    if (matchers.hex8) {
      if (match = matchers.hex8.exec(color)) {
        return Number.parseInt(match[1], 16) >>> 0;
      }
    }
    if (matchers.hex4) {
      if (match = matchers.hex4.exec(color)) {
        return Number.parseInt(match[1] + match[1] + match[2] + match[2] + match[3] + match[3] + match[4] + match[4], 16) >>> 0;
      }
    }
    if (matchers.hsl) {
      if (match = matchers.hsl.exec(color)) {
        return (hslToRgb2(parse3602(match[1]), parsePercentage2(match[2]), parsePercentage2(match[3])) | 255) >>> 0;
      }
    }
    if (matchers.hsla) {
      if (match = matchers.hsla.exec(color)) {
        return (hslToRgb2(parse3602(match[1]), parsePercentage2(match[2]), parsePercentage2(match[3])) | parse12(match[4])) >>> 0;
      }
    }
    if (matchers.oklch) {
      if (match = matchers.oklch.exec(color)) {
        const L = parseModernComponent2(match[1], 1);
        const C = parseModernComponent2(match[2], 0.4);
        const H = parseHueAngle2(match[3]);
        const alpha = parseModernAlpha2(match[4]);
        const hRad = H * Math.PI / 180;
        const [r, g, b22] = oklabToSrgb2(L, C * Math.cos(hRad), C * Math.sin(hRad));
        return rgbFloatToInt2(r, g, b22, alpha);
      }
    }
    if (matchers.oklab) {
      if (match = matchers.oklab.exec(color)) {
        const L = parseModernComponent2(match[1], 1);
        const a22 = parseModernComponent2(match[2], 0.4);
        const b22 = parseModernComponent2(match[3], 0.4);
        const alpha = parseModernAlpha2(match[4]);
        const [r, g, bl] = oklabToSrgb2(L, a22, b22);
        return rgbFloatToInt2(r, g, bl, alpha);
      }
    }
    if (matchers.lab) {
      if (match = matchers.lab.exec(color)) {
        const L = parseModernComponent2(match[1], 100);
        const a22 = parseModernComponent2(match[2], 125);
        const b22 = parseModernComponent2(match[3], 125);
        const alpha = parseModernAlpha2(match[4]);
        const [r, g, bl] = labToSrgb2(L, a22, b22);
        return rgbFloatToInt2(r, g, bl, alpha);
      }
    }
    if (matchers.lch) {
      if (match = matchers.lch.exec(color)) {
        const L = parseModernComponent2(match[1], 100);
        const C = parseModernComponent2(match[2], 150);
        const H = parseHueAngle2(match[3]);
        const alpha = parseModernAlpha2(match[4]);
        const hRad = H * Math.PI / 180;
        const [r, g, bl] = labToSrgb2(L, C * Math.cos(hRad), C * Math.sin(hRad));
        return rgbFloatToInt2(r, g, bl, alpha);
      }
    }
    if (matchers.hwb) {
      if (match = matchers.hwb.exec(color)) {
        const H = parseHueAngle2(match[1]);
        const W = parseModernComponent2(match[2], 1);
        const B = parseModernComponent2(match[3], 1);
        const alpha = parseModernAlpha2(match[4]);
        const [r, g, bl] = hwbToSrgb2(H / 360, W, B);
        return rgbFloatToInt2(r, g, bl, alpha);
      }
    }
    throw new Error(`invalid color string ${color} provided`);
  }
  function processColor2(color) {
    const normalizedColor = normalizeColor2(color);
    return (normalizedColor << 24 | normalizedColor >>> 8) >>> 0;
  }
  var proResProfileOptions = [
    "4444-xq",
    "4444",
    "hq",
    "standard",
    "light",
    "proxy"
  ];
  var defaultScaleValue = [1, 1, 1];
  var parseScaleString = (value) => {
    const parts = value.trim().split(/\s+/);
    if (parts.length < 1 || parts.length > 3 || parts[0] === "") {
      return null;
    }
    const parsed = parts.map((part) => Number(part));
    if (!parsed.every((part) => Number.isFinite(part))) {
      return null;
    }
    const x = parsed[0];
    const y = parsed[1] ?? x;
    const z = parsed[2] ?? 1;
    return [x, y, z];
  };
  var parseValidScaleValue = (value) => {
    if (typeof value === "number") {
      return Number.isFinite(value) ? [value, value, 1] : null;
    }
    if (typeof value === "string") {
      return parseScaleString(value);
    }
    return null;
  };
  var parseScaleValue = (value) => {
    return parseValidScaleValue(value) ?? defaultScaleValue;
  };
  var serializeScaleValue = ([x, y, z]) => {
    const normalizedX = normalizeNumber2(x);
    const normalizedY = normalizeNumber2(y);
    const normalizedZ = normalizeNumber2(z);
    if (normalizedX === normalizedY && normalizedZ === 1) {
      return normalizedX;
    }
    if (normalizedZ === 1) {
      return `${normalizedX} ${normalizedY}`;
    }
    return `${normalizedX} ${normalizedY} ${normalizedZ}`;
  };
  var ENABLE_V5_BREAKING_CHANGES2 = false;
  var validCodecs2 = [
    "h264",
    "h265",
    "vp8",
    "vp9",
    "av1",
    "mp3",
    "aac",
    "wav",
    "prores",
    "h264-mkv",
    "h264-ts",
    "gif"
  ];
  function validateCodec2(defaultCodec, location2, name) {
    if (typeof defaultCodec === "undefined") {
      return;
    }
    if (typeof defaultCodec !== "string") {
      throw new TypeError(`The "${name}" prop ${location2} must be a string, but you passed a value of type ${typeof defaultCodec}.`);
    }
    if (!validCodecs2.includes(defaultCodec)) {
      throw new Error(`The "${name}" prop ${location2} must be one of ${validCodecs2.join(", ")}, but you passed ${defaultCodec}.`);
    }
  }
  var validateDefaultAndInputProps2 = (defaultProps, name, compositionId2) => {
    if (!defaultProps) {
      return;
    }
    if (typeof defaultProps !== "object") {
      throw new Error(`"${name}" must be an object, but you passed a value of type ${typeof defaultProps}`);
    }
    if (Array.isArray(defaultProps)) {
      throw new Error(`"${name}" must be an object, an array was passed ${compositionId2 ? `for composition "${compositionId2}"` : ""}`);
    }
  };
  function validateDimension2(amount, nameOfProp, location2) {
    if (typeof amount !== "number") {
      throw new Error(`The "${nameOfProp}" prop ${location2} must be a number, but you passed a value of type ${typeof amount}`);
    }
    if (isNaN(amount)) {
      throw new TypeError(`The "${nameOfProp}" prop ${location2} must not be NaN, but is NaN.`);
    }
    if (!Number.isFinite(amount)) {
      throw new TypeError(`The "${nameOfProp}" prop ${location2} must be finite, but is ${amount}.`);
    }
    if (amount % 1 !== 0) {
      throw new TypeError(`The "${nameOfProp}" prop ${location2} must be an integer, but is ${amount}.`);
    }
    if (amount <= 0) {
      throw new TypeError(`The "${nameOfProp}" prop ${location2} must be positive, but got ${amount}.`);
    }
  }
  function validateDurationInFrames2(durationInFrames, options) {
    const { allowFloats, component } = options;
    if (typeof durationInFrames === "undefined") {
      throw new Error(`The "durationInFrames" prop ${component} is missing.`);
    }
    if (typeof durationInFrames !== "number") {
      throw new Error(`The "durationInFrames" prop ${component} must be a number, but you passed a value of type ${typeof durationInFrames}`);
    }
    if (durationInFrames <= 0) {
      throw new TypeError(`The "durationInFrames" prop ${component} must be positive, but got ${durationInFrames}.`);
    }
    if (!allowFloats && durationInFrames % 1 !== 0) {
      throw new TypeError(`The "durationInFrames" prop ${component} must be an integer, but got ${durationInFrames}.`);
    }
    if (!Number.isFinite(durationInFrames)) {
      throw new TypeError(`The "durationInFrames" prop ${component} must be finite, but got ${durationInFrames}.`);
    }
  }
  var getExpectedMediaFrameUncorrected2 = ({
    frame,
    playbackRate,
    startFrom
  }) => {
    return interpolate2(frame, [-1, startFrom, startFrom + 1], [-1, startFrom, startFrom + playbackRate]);
  };
  var getAbsoluteSrc2 = (relativeSrc) => {
    if (typeof window === "undefined") {
      return relativeSrc;
    }
    if (relativeSrc.startsWith("http://") || relativeSrc.startsWith("https://") || relativeSrc.startsWith("file://") || relativeSrc.startsWith("blob:") || relativeSrc.startsWith("data:")) {
      return relativeSrc;
    }
    return new URL(relativeSrc, window.origin).href;
  };
  var getOffthreadVideoSource2 = ({
    src,
    transparent,
    currentTime,
    toneMapped
  }) => {
    return `http://localhost:${window.remotion_proxyPort}/proxy?src=${encodeURIComponent(getAbsoluteSrc2(src))}&time=${encodeURIComponent(Math.max(0, currentTime))}&transparent=${String(transparent)}&toneMapped=${String(toneMapped)}`;
  };
  var NoReactInternals = {
    processColor: processColor2,
    truthy: truthy2,
    validateFps: validateFps2,
    validateDimension: validateDimension2,
    validateDurationInFrames: validateDurationInFrames2,
    validateDefaultAndInputProps: validateDefaultAndInputProps2,
    validateFrame: validateFrame2,
    serializeJSONWithSpecialTypes: serializeJSONWithSpecialTypes2,
    bundleName: "bundle.js",
    bundleMapName: "bundle.js.map",
    deserializeJSONWithSpecialTypes: deserializeJSONWithSpecialTypes2,
    DELAY_RENDER_CALLSTACK_TOKEN: DELAY_RENDER_CALLSTACK_TOKEN2,
    DELAY_RENDER_RETRY_TOKEN: DELAY_RENDER_RETRY_TOKEN2,
    DELAY_RENDER_CLEAR_TOKEN: DELAY_RENDER_CLEAR_TOKEN2,
    DELAY_RENDER_ATTEMPT_TOKEN: DELAY_RENDER_RETRIES_LEFT2,
    getOffthreadVideoSource: getOffthreadVideoSource2,
    getExpectedMediaFrameUncorrected: getExpectedMediaFrameUncorrected2,
    ENABLE_V5_BREAKING_CHANGES: ENABLE_V5_BREAKING_CHANGES2,
    MIN_NODE_VERSION: ENABLE_V5_BREAKING_CHANGES2 ? 22 : 16,
    MIN_BUN_VERSION: ENABLE_V5_BREAKING_CHANGES2 ? "1.1.3" : "1.0.3",
    MIN_ESLINT_VERSION: ENABLE_V5_BREAKING_CHANGES2 ? "8.57.0" : "7.15.0",
    colorNames: colorNames2,
    DATE_TOKEN: DATE_TOKEN2,
    FILE_TOKEN: FILE_TOKEN2,
    validateCodec: validateCodec2,
    proResProfileOptions,
    findPropsToDelete: findPropsToDelete2,
    sequenceSchema: sequenceSchema2,
    parseScaleValue,
    serializeScaleValue
  };

  // node_modules/.pnpm/@remotion+player@4.0.509_re_cb2bd188877017773bf16e23f65eb9c1/node_modules/@remotion/player/dist/esm/index.mjs
  var import_jsx_runtime56 = __toESM(require_jsx_runtime(), 1);
  var import_react118 = __toESM(require_react(), 1);
  var import_react119 = __toESM(require_react(), 1);
  var import_react120 = __toESM(require_react(), 1);
  var import_jsx_runtime57 = __toESM(require_jsx_runtime(), 1);
  var import_jsx_runtime58 = __toESM(require_jsx_runtime(), 1);
  if (typeof import_react91.createContext !== "function") {
    const err = [
      'Remotion requires React.createContext, but it is "undefined".',
      'If you are in a React Server Component, turn it into a client component by adding "use client" at the top of the file.',
      "",
      "Before:",
      '  import {Player} from "@remotion/player";',
      "",
      "After:",
      '  "use client";',
      '  import {Player} from "@remotion/player";'
    ];
    throw new Error(err.join(`
`));
  }
  var ICON_SIZE2 = 25;
  var fullscreenIconSize = 16;
  var PlayIcon = () => {
    return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("svg", {
      width: ICON_SIZE2,
      height: ICON_SIZE2,
      viewBox: "0 0 25 25",
      fill: "none",
      children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("path", {
        d: "M8 6.375C7.40904 8.17576 7.06921 10.2486 7.01438 12.3871C6.95955 14.5255 7.19163 16.6547 7.6875 18.5625C9.95364 18.2995 12.116 17.6164 14.009 16.5655C15.902 15.5147 17.4755 14.124 18.6088 12.5C17.5158 10.8949 15.9949 9.51103 14.1585 8.45082C12.3222 7.3906 10.2174 6.68116 8 6.375Z",
        fill: "white",
        stroke: "white",
        strokeWidth: "6.25",
        strokeLinejoin: "round"
      })
    });
  };
  var PauseIcon = () => {
    return /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("svg", {
      viewBox: "0 0 100 100",
      width: ICON_SIZE2,
      height: ICON_SIZE2,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("rect", {
          x: "25",
          y: "20",
          width: "20",
          height: "60",
          fill: "#fff",
          ry: "5",
          rx: "5"
        }),
        /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("rect", {
          x: "55",
          y: "20",
          width: "20",
          height: "60",
          fill: "#fff",
          ry: "5",
          rx: "5"
        })
      ]
    });
  };
  var FullscreenIcon = ({
    isFullscreen
  }) => {
    const strokeWidth = 6;
    const viewSize = 32;
    const out = isFullscreen ? 0 : strokeWidth / 2;
    const middleInset = isFullscreen ? strokeWidth * 1.6 : strokeWidth / 2;
    const inset = isFullscreen ? strokeWidth * 1.6 : strokeWidth * 2;
    return /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)("svg", {
      viewBox: `0 0 ${viewSize} ${viewSize}`,
      height: fullscreenIconSize,
      width: fullscreenIconSize,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("path", {
          d: `
				M ${out} ${inset}
				L ${middleInset} ${middleInset}
				L ${inset} ${out}
				`,
          stroke: "#fff",
          strokeWidth,
          fill: "none"
        }),
        /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("path", {
          d: `
				M ${viewSize - out} ${inset}
				L ${viewSize - middleInset} ${middleInset}
				L ${viewSize - inset} ${out}
				`,
          stroke: "#fff",
          strokeWidth,
          fill: "none"
        }),
        /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("path", {
          d: `
				M ${out} ${viewSize - inset}
				L ${middleInset} ${viewSize - middleInset}
				L ${inset} ${viewSize - out}
				`,
          stroke: "#fff",
          strokeWidth,
          fill: "none"
        }),
        /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("path", {
          d: `
				M ${viewSize - out} ${viewSize - inset}
				L ${viewSize - middleInset} ${viewSize - middleInset}
				L ${viewSize - inset} ${viewSize - out}
				`,
          stroke: "#fff",
          strokeWidth,
          fill: "none"
        })
      ]
    });
  };
  var VolumeOffIcon = () => {
    return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("svg", {
      width: ICON_SIZE2,
      height: ICON_SIZE2,
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("path", {
        d: "M3.63 3.63a.996.996 0 000 1.41L7.29 8.7 7 9H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71v-4.17l4.18 4.18c-.49.37-1.02.68-1.6.91-.36.15-.58.53-.58.92 0 .72.73 1.18 1.39.91.8-.33 1.55-.77 2.22-1.31l1.34 1.34a.996.996 0 101.41-1.41L5.05 3.63c-.39-.39-1.02-.39-1.42 0zM19 12c0 .82-.15 1.61-.41 2.34l1.53 1.53c.56-1.17.88-2.48.88-3.87 0-3.83-2.4-7.11-5.78-8.4-.59-.23-1.22.23-1.22.86v.19c0 .38.25.71.61.85C17.18 6.54 19 9.06 19 12zm-8.71-6.29l-.17.17L12 7.76V6.41c0-.89-1.08-1.33-1.71-.7zM16.5 12A4.5 4.5 0 0014 7.97v1.79l2.48 2.48c.01-.08.02-.16.02-.24z",
        fill: "#fff"
      })
    });
  };
  var VolumeOnIcon = () => {
    return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("svg", {
      width: ICON_SIZE2,
      height: ICON_SIZE2,
      viewBox: "0 0 24 24",
      children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)("path", {
        d: "M3 10v4c0 .55.45 1 1 1h3l3.29 3.29c.63.63 1.71.18 1.71-.71V6.41c0-.89-1.08-1.34-1.71-.71L7 9H4c-.55 0-1 .45-1 1zm13.5 2A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 4.45v.2c0 .38.25.71.6.85C17.18 6.53 19 9.06 19 12s-1.82 5.47-4.4 6.5c-.36.14-.6.47-.6.85v.2c0 .63.63 1.07 1.21.85C18.6 19.11 21 15.84 21 12s-2.4-7.11-5.79-8.4c-.58-.23-1.21.22-1.21.85z",
        fill: "#fff"
      })
    });
  };
  var className = "__remotion_buffering_indicator";
  var remotionBufferingAnimation = "__remotion_buffering_animation";
  var playerStyle = {
    width: ICON_SIZE2,
    height: ICON_SIZE2,
    overflow: "hidden",
    lineHeight: "normal",
    fontSize: "inherit"
  };
  var studioStyle = {
    width: 14,
    height: 14,
    overflow: "hidden",
    lineHeight: "normal",
    fontSize: "inherit"
  };
  var BufferingIndicator = ({ type, color = "white" }) => {
    const style2 = type === "player" ? playerStyle : studioStyle;
    return /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(import_jsx_runtime42.Fragment, {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("style", {
          type: "text/css",
          children: `
				@keyframes ${remotionBufferingAnimation} {
          0% {
            rotate: 0deg;
          }
          100% {
            rotate: 360deg;
          }
        }
        
        .${className} {
            animation: ${remotionBufferingAnimation} 1s linear infinite;
        }        
			`
        }),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("div", {
          style: style2,
          children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("svg", {
            viewBox: type === "player" ? "0 0 22 22" : "0 0 18 18",
            style: style2,
            className,
            children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("path", {
              d: type === "player" ? "M 11 4 A 7 7 0 0 1 15.1145 16.66312" : "M 9 2 A 7 7 0 0 1 13.1145 14.66312",
              stroke: color,
              strokeLinecap: "round",
              fill: "none",
              strokeWidth: 3
            })
          })
        })
      ]
    });
  };
  var calculatePlayerSize = ({
    currentSize,
    width,
    height,
    compositionWidth,
    compositionHeight
  }) => {
    if (width !== void 0 && height === void 0) {
      return {
        aspectRatio: [compositionWidth, compositionHeight].join("/")
      };
    }
    if (height !== void 0 && width === void 0) {
      return {
        aspectRatio: [compositionWidth, compositionHeight].join("/")
      };
    }
    if (!currentSize) {
      return {
        width: compositionWidth,
        height: compositionHeight
      };
    }
    return {
      width: compositionWidth,
      height: compositionHeight
    };
  };
  var calculateCanvasTransformation = ({
    previewSize,
    compositionWidth,
    compositionHeight,
    canvasSize
  }) => {
    const scale = Internals.calculateScale({
      canvasSize,
      compositionHeight,
      compositionWidth,
      previewSize
    });
    const correction = 0 - (1 - scale) / 2;
    const xCorrection = correction * compositionWidth;
    const yCorrection = correction * compositionHeight;
    const width = compositionWidth * scale;
    const height = compositionHeight * scale;
    const centerX = canvasSize.width / 2 - width / 2;
    const centerY = canvasSize.height / 2 - height / 2;
    return {
      centerX,
      centerY,
      xCorrection,
      yCorrection,
      scale
    };
  };
  var calculateOuterStyle = ({
    config,
    style: style2,
    canvasSize,
    overflowVisible,
    layout
  }) => {
    if (!config) {
      return {};
    }
    return {
      position: "relative",
      overflow: overflowVisible ? "visible" : "hidden",
      ...calculatePlayerSize({
        compositionHeight: config.height,
        compositionWidth: config.width,
        currentSize: canvasSize,
        height: style2?.height,
        width: style2?.width
      }),
      opacity: layout ? 1 : 0,
      ...style2
    };
  };
  var calculateContainerStyle = ({
    config,
    layout,
    scale,
    overflowVisible
  }) => {
    if (!config) {
      return {};
    }
    if (!layout) {
      return {
        position: "absolute",
        width: config.width,
        height: config.height,
        display: "flex",
        transform: `scale(${scale})`,
        overflow: overflowVisible ? "visible" : "hidden"
      };
    }
    return {
      position: "absolute",
      width: config.width,
      height: config.height,
      display: "flex",
      transform: `scale(${scale})`,
      marginLeft: layout.xCorrection,
      marginTop: layout.yCorrection,
      overflow: overflowVisible ? "visible" : "hidden"
    };
  };
  var calculateOuter = ({
    layout,
    scale,
    config,
    overflowVisible
  }) => {
    if (!config) {
      return {};
    }
    if (!layout) {
      return {
        width: config.width * scale,
        height: config.height * scale,
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        overflow: overflowVisible ? "visible" : "hidden"
      };
    }
    const { centerX, centerY } = layout;
    return {
      width: config.width * scale,
      height: config.height * scale,
      display: "flex",
      flexDirection: "column",
      position: "absolute",
      left: centerX,
      top: centerY,
      overflow: overflowVisible ? "visible" : "hidden"
    };
  };
  var PlayerEventEmitterContext = import_react92.default.createContext(void 0);
  var ThumbnailEmitterContext = import_react92.default.createContext(void 0);
  var PlayerEmitter = class {
    listeners = {
      ended: [],
      error: [],
      pause: [],
      play: [],
      ratechange: [],
      scalechange: [],
      seeked: [],
      timeupdate: [],
      frameupdate: [],
      fullscreenchange: [],
      volumechange: [],
      mutechange: [],
      waiting: [],
      resume: []
    };
    addEventListener(name, callback) {
      this.listeners[name].push(callback);
    }
    removeEventListener(name, callback) {
      this.listeners[name] = this.listeners[name].filter((l) => l !== callback);
    }
    dispatchEvent(dispatchName, context) {
      this.listeners[dispatchName].forEach((callback) => {
        callback({ detail: context });
      });
    }
    dispatchSeek = (frame) => {
      this.dispatchEvent("seeked", {
        frame
      });
    };
    dispatchVolumeChange = (volume) => {
      this.dispatchEvent("volumechange", {
        volume
      });
    };
    dispatchPause = () => {
      this.dispatchEvent("pause", void 0);
    };
    dispatchPlay = () => {
      this.dispatchEvent("play", void 0);
    };
    dispatchEnded = () => {
      this.dispatchEvent("ended", void 0);
    };
    dispatchRateChange = (playbackRate) => {
      this.dispatchEvent("ratechange", {
        playbackRate
      });
    };
    dispatchScaleChange = (scale) => {
      this.dispatchEvent("scalechange", {
        scale
      });
    };
    dispatchError = (error2) => {
      this.dispatchEvent("error", {
        error: error2
      });
    };
    dispatchTimeUpdate = (event) => {
      this.dispatchEvent("timeupdate", event);
    };
    dispatchFrameUpdate = (event) => {
      this.dispatchEvent("frameupdate", event);
    };
    dispatchFullscreenChange = (event) => {
      this.dispatchEvent("fullscreenchange", event);
    };
    dispatchMuteChange = (event) => {
      this.dispatchEvent("mutechange", event);
    };
    dispatchWaiting = (event) => {
      this.dispatchEvent("waiting", event);
    };
    dispatchResume = (event) => {
      this.dispatchEvent("resume", event);
    };
  };
  var ThumbnailEmitter = class {
    listeners = {
      error: [],
      waiting: [],
      resume: []
    };
    addEventListener(name, callback) {
      this.listeners[name].push(callback);
    }
    removeEventListener(name, callback) {
      this.listeners[name] = this.listeners[name].filter((l) => l !== callback);
    }
    dispatchEvent(dispatchName, context) {
      this.listeners[dispatchName].forEach((callback) => {
        callback({ detail: context });
      });
    }
    dispatchError = (error2) => {
      this.dispatchEvent("error", {
        error: error2
      });
    };
    dispatchWaiting = (event) => {
      this.dispatchEvent("waiting", event);
    };
    dispatchResume = (event) => {
      this.dispatchEvent("resume", event);
    };
  };
  var PlayerTimelineImperativeContext = import_react94.default.createContext(null);
  var getCoreTimelineImperativeContext = () => {
    return Internals.TimelineImperativeContext;
  };
  var getTimelineImperativeContext = () => {
    return getCoreTimelineImperativeContext() ?? PlayerTimelineImperativeContext;
  };
  var CoreTimelineImperativeContextProvider = ({ children, value }) => {
    const TimelineImperativeContext2 = getCoreTimelineImperativeContext();
    if (!TimelineImperativeContext2) {
      return children;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(TimelineImperativeContext2.Provider, {
      value,
      children
    });
  };
  var LegacyTimelineImperativeContextProvider = ({ children }) => {
    const timelineContext = Internals.Timeline.useTimelineContext();
    const frameRef = (0, import_react94.useRef)(timelineContext.frame);
    frameRef.current = timelineContext.frame;
    const value = (0, import_react94.useMemo)(() => {
      return {
        frameRef,
        imperativePlaying: timelineContext.imperativePlaying,
        audioAndVideoTags: timelineContext.audioAndVideoTags
      };
    }, [timelineContext.audioAndVideoTags, timelineContext.imperativePlaying]);
    return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(PlayerTimelineImperativeContext.Provider, {
      value,
      children
    });
  };
  var TimelineImperativeCompatibilityProvider = ({ children }) => {
    if (getCoreTimelineImperativeContext()) {
      return children;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(LegacyTimelineImperativeContextProvider, {
      children
    });
  };
  var useBufferStateEmitter = (emitter) => {
    const bufferManager = (0, import_react95.useContext)(Internals.BufferingContextReact);
    if (!bufferManager) {
      throw new Error("BufferingContextReact not found");
    }
    (0, import_react95.useLayoutEffect)(() => {
      const clear1 = bufferManager.listenForBuffering(() => {
        bufferManager.buffering.current = true;
        emitter.dispatchWaiting({});
      });
      const clear2 = bufferManager.listenForResume(() => {
        bufferManager.buffering.current = false;
        emitter.dispatchResume({});
      });
      return () => {
        clear1.remove();
        clear2.remove();
      };
    }, [bufferManager, emitter]);
  };
  var PlayerEmitterProvider = ({ children, currentPlaybackRate }) => {
    const [emitter] = (0, import_react93.useState)(() => new PlayerEmitter());
    const bufferManager = (0, import_react93.useContext)(Internals.BufferingContextReact);
    if (!bufferManager) {
      throw new Error("BufferingContextReact not found");
    }
    (0, import_react93.useEffect)(() => {
      if (currentPlaybackRate) {
        emitter.dispatchRateChange(currentPlaybackRate);
      }
    }, [emitter, currentPlaybackRate]);
    useBufferStateEmitter(emitter);
    return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(TimelineImperativeCompatibilityProvider, {
      children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(PlayerEventEmitterContext.Provider, {
        value: emitter,
        children
      })
    });
  };
  var useHoverState = (ref, hideControlsWhenPointerDoesntMove) => {
    const [hovered, setHovered] = (0, import_react96.useState)(false);
    (0, import_react96.useEffect)(() => {
      const { current } = ref;
      if (!current) {
        return;
      }
      let hoverTimeout;
      const addHoverTimeout = () => {
        if (hideControlsWhenPointerDoesntMove) {
          clearTimeout(hoverTimeout);
          hoverTimeout = setTimeout(() => {
            setHovered(false);
          }, hideControlsWhenPointerDoesntMove === true ? 3e3 : hideControlsWhenPointerDoesntMove);
        }
      };
      const onHover = () => {
        setHovered(true);
        addHoverTimeout();
      };
      const onLeave = () => {
        setHovered(false);
        clearTimeout(hoverTimeout);
      };
      const onMove = () => {
        setHovered(true);
        addHoverTimeout();
      };
      current.addEventListener("mouseenter", onHover);
      current.addEventListener("mouseleave", onLeave);
      current.addEventListener("mousemove", onMove);
      return () => {
        current.removeEventListener("mouseenter", onHover);
        current.removeEventListener("mouseleave", onLeave);
        current.removeEventListener("mousemove", onMove);
        clearTimeout(hoverTimeout);
      };
    }, [hideControlsWhenPointerDoesntMove, ref]);
    return hovered;
  };
  var usePlayerMethods = () => {
    const setFrame = Internals.Timeline.useTimelineSetFrame();
    const setTimelinePosition = Internals.Timeline.useTimelineSetFrame();
    const { setPlaying } = (0, import_react100.useContext)(Internals.SetTimelineContext);
    const timelineImperativeContext = (0, import_react100.useContext)(getTimelineImperativeContext());
    const audioContext = (0, import_react100.useContext)(Internals.SharedAudioContext);
    const audioTagsContext = (0, import_react100.useContext)(Internals.SharedAudioTagsContext);
    const environment = useRemotionEnvironment();
    const video = Internals.useVideo();
    const config = Internals.useUnsafeVideoConfig();
    const emitter = (0, import_react100.useContext)(PlayerEventEmitterContext);
    const playStart = (0, import_react100.useRef)(0);
    const fallbackFrame = (0, import_react100.useRef)(null);
    if (!timelineImperativeContext) {
      throw new Error("Timeline imperative context is not available. This hook must be used inside a <Player> or the Remotion Studio.");
    }
    if (!emitter) {
      throw new TypeError("Expected Player event emitter context");
    }
    const bufferingContext = (0, import_react100.useContext)(Internals.BufferingContextReact);
    if (!bufferingContext) {
      throw new Error("Missing the buffering context. Most likely you have a Remotion version mismatch.");
    }
    const getCurrentFrame = (0, import_react100.useCallback)(() => {
      if (!video) {
        return fallbackFrame.current ?? (typeof window === "undefined" ? 0 : window.remotion_initialFrame ?? 0);
      }
      const unclamped = timelineImperativeContext.frameRef.current[video.id] ?? (environment.isPlayer ? 0 : Internals.Timeline.getFrameForComposition(video.id));
      return Internals.Timeline.clampFrameToCompositionRange(unclamped, video.durationInFrames);
    }, [environment.isPlayer, timelineImperativeContext, video]);
    const seek2 = (0, import_react100.useCallback)((newFrame) => {
      const frameToSeekTo = config ? Internals.TimelinePosition.clampFrameToCompositionRange(newFrame, config.durationInFrames) : Math.max(0, newFrame);
      fallbackFrame.current = frameToSeekTo;
      if (video?.id) {
        if (timelineImperativeContext.frameRef.current[video.id] !== frameToSeekTo) {
          timelineImperativeContext.frameRef.current = {
            ...timelineImperativeContext.frameRef.current,
            [video.id]: frameToSeekTo
          };
        }
        setTimelinePosition((currentFrames) => currentFrames[video.id] === frameToSeekTo ? currentFrames : { ...currentFrames, [video.id]: frameToSeekTo });
      }
      emitter.dispatchSeek(frameToSeekTo);
    }, [
      config,
      emitter,
      setTimelinePosition,
      timelineImperativeContext,
      video?.id
    ]);
    const play = (0, import_react100.useCallback)((e) => {
      if (timelineImperativeContext.imperativePlaying.current) {
        return;
      }
      const lastFrameForPlayback = (config?.durationInFrames ?? 1) - 1;
      if (getCurrentFrame() === lastFrameForPlayback) {
        seek2(0);
      }
      audioContext?.resume();
      if (audioTagsContext && audioTagsContext.numberOfAudioTags > 0 && e) {
        audioTagsContext.playAllAudios();
      }
      timelineImperativeContext.audioAndVideoTags.current.forEach((tag) => tag.play("player play() was called and playing audio from a click"));
      timelineImperativeContext.imperativePlaying.current = true;
      setPlaying(true);
      playStart.current = getCurrentFrame();
      emitter.dispatchPlay();
    }, [
      audioContext,
      audioTagsContext,
      config?.durationInFrames,
      emitter,
      getCurrentFrame,
      seek2,
      setPlaying,
      timelineImperativeContext
    ]);
    const pause = (0, import_react100.useCallback)(() => {
      if (timelineImperativeContext.imperativePlaying.current) {
        timelineImperativeContext.imperativePlaying.current = false;
        setPlaying(false);
        emitter.dispatchPause();
        audioContext?.suspend();
      }
    }, [audioContext, emitter, setPlaying, timelineImperativeContext]);
    const pauseAndReturnToPlayStart = (0, import_react100.useCallback)(() => {
      if (timelineImperativeContext.imperativePlaying.current) {
        timelineImperativeContext.imperativePlaying.current = false;
        fallbackFrame.current = playStart.current;
        if (config) {
          timelineImperativeContext.frameRef.current = {
            ...timelineImperativeContext.frameRef.current,
            [config.id]: playStart.current
          };
          setTimelinePosition((currentFrames) => ({
            ...currentFrames,
            [config.id]: playStart.current
          }));
          setPlaying(false);
          emitter.dispatchPause();
        }
      }
    }, [
      config,
      emitter,
      setPlaying,
      setTimelinePosition,
      timelineImperativeContext
    ]);
    const videoId = video?.id;
    const lastFrame = (config?.durationInFrames ?? 1) - 1;
    const frameBack = (0, import_react100.useCallback)((frames) => {
      if (!videoId) {
        return null;
      }
      if (timelineImperativeContext.imperativePlaying.current) {
        return;
      }
      const previousFrame = timelineImperativeContext.frameRef.current[videoId] ?? window.remotion_initialFrame ?? 0;
      const newFrame = Math.max(0, previousFrame - frames);
      if (previousFrame === newFrame) {
        return;
      }
      timelineImperativeContext.frameRef.current = {
        ...timelineImperativeContext.frameRef.current,
        [videoId]: newFrame
      };
      setFrame((currentFrames) => currentFrames[videoId] === newFrame ? currentFrames : { ...currentFrames, [videoId]: newFrame });
    }, [setFrame, timelineImperativeContext, videoId]);
    const frameForward = (0, import_react100.useCallback)((frames) => {
      if (!videoId) {
        return null;
      }
      if (timelineImperativeContext.imperativePlaying.current) {
        return;
      }
      const previousFrame = timelineImperativeContext.frameRef.current[videoId] ?? window.remotion_initialFrame ?? 0;
      const newFrame = Math.min(lastFrame, previousFrame + frames);
      if (previousFrame === newFrame) {
        return;
      }
      timelineImperativeContext.frameRef.current = {
        ...timelineImperativeContext.frameRef.current,
        [videoId]: newFrame
      };
      setFrame((currentFrames) => currentFrames[videoId] === newFrame ? currentFrames : { ...currentFrames, [videoId]: newFrame });
    }, [lastFrame, setFrame, timelineImperativeContext, videoId]);
    const toggle = (0, import_react100.useCallback)((e) => {
      if (timelineImperativeContext.imperativePlaying.current) {
        pause();
      } else {
        play(e);
      }
    }, [pause, play, timelineImperativeContext]);
    const isPlaying = (0, import_react100.useCallback)(() => {
      return timelineImperativeContext.imperativePlaying.current;
    }, [timelineImperativeContext]);
    const isBuffering = (0, import_react100.useCallback)(() => {
      return bufferingContext.buffering.current;
    }, [bufferingContext.buffering]);
    return (0, import_react100.useMemo)(() => {
      return {
        frameBack,
        frameForward,
        emitter,
        play,
        pause,
        seek: seek2,
        getCurrentFrame,
        isPlaying,
        isBuffering,
        pauseAndReturnToPlayStart,
        toggle
      };
    }, [
      emitter,
      frameBack,
      frameForward,
      getCurrentFrame,
      isBuffering,
      isPlaying,
      pause,
      pauseAndReturnToPlayStart,
      play,
      seek2,
      toggle
    ]);
  };
  var useBrowserMediaSession = ({
    browserMediaControlsBehavior,
    videoConfig,
    playbackRate
  }) => {
    const [playing] = Internals.Timeline.usePlayingState();
    const { pause, play, emitter, getCurrentFrame, seek: seek2 } = usePlayerMethods();
    const hasEverPlayed = (0, import_react99.useRef)(false);
    (0, import_react99.useEffect)(() => {
      if (playing) {
        hasEverPlayed.current = true;
      }
    }, [playing]);
    (0, import_react99.useEffect)(() => {
      if (!navigator.mediaSession) {
        return;
      }
      if (browserMediaControlsBehavior.mode === "do-nothing") {
        return;
      }
      if (playing) {
        navigator.mediaSession.playbackState = "playing";
      } else if (hasEverPlayed.current) {
        navigator.mediaSession.playbackState = "paused";
      }
    }, [browserMediaControlsBehavior.mode, playing]);
    (0, import_react99.useEffect)(() => {
      if (!navigator.mediaSession) {
        return;
      }
      if (browserMediaControlsBehavior.mode === "do-nothing") {
        return;
      }
      const onTimeUpdate = () => {
        if (!videoConfig) {
          return;
        }
        if (navigator.mediaSession) {
          navigator.mediaSession.setPositionState({
            duration: videoConfig.durationInFrames / videoConfig.fps,
            playbackRate,
            position: getCurrentFrame() / videoConfig.fps
          });
        }
      };
      emitter.addEventListener("timeupdate", onTimeUpdate);
      return () => {
        emitter.removeEventListener("timeupdate", onTimeUpdate);
      };
    }, [
      browserMediaControlsBehavior.mode,
      emitter,
      getCurrentFrame,
      playbackRate,
      videoConfig
    ]);
    (0, import_react99.useEffect)(() => {
      if (!navigator.mediaSession) {
        return;
      }
      if (browserMediaControlsBehavior.mode === "do-nothing") {
        return;
      }
      navigator.mediaSession.setActionHandler("play", () => {
        if (browserMediaControlsBehavior.mode === "register-media-session") {
          play();
        }
      });
      navigator.mediaSession.setActionHandler("pause", () => {
        if (browserMediaControlsBehavior.mode === "register-media-session") {
          pause();
        }
      });
      navigator.mediaSession.setActionHandler("seekto", (event) => {
        if (browserMediaControlsBehavior.mode === "register-media-session" && event.seekTime !== void 0 && videoConfig) {
          seek2(Math.round(event.seekTime * videoConfig.fps));
        }
      });
      navigator.mediaSession.setActionHandler("seekbackward", () => {
        if (browserMediaControlsBehavior.mode === "register-media-session" && videoConfig) {
          seek2(Math.max(0, Math.round((getCurrentFrame() - 10) * videoConfig.fps)));
        }
      });
      navigator.mediaSession.setActionHandler("seekforward", () => {
        if (browserMediaControlsBehavior.mode === "register-media-session" && videoConfig) {
          seek2(Math.max(videoConfig.durationInFrames - 1, Math.round((getCurrentFrame() + 10) * videoConfig.fps)));
        }
      });
      navigator.mediaSession.setActionHandler("previoustrack", () => {
        if (browserMediaControlsBehavior.mode === "register-media-session") {
          seek2(0);
        }
      });
      return () => {
        navigator.mediaSession.metadata = null;
        navigator.mediaSession.setActionHandler("play", null);
        navigator.mediaSession.setActionHandler("pause", null);
        navigator.mediaSession.setActionHandler("seekto", null);
        navigator.mediaSession.setActionHandler("seekbackward", null);
        navigator.mediaSession.setActionHandler("seekforward", null);
        navigator.mediaSession.setActionHandler("previoustrack", null);
      };
    }, [
      browserMediaControlsBehavior.mode,
      getCurrentFrame,
      pause,
      play,
      seek2,
      videoConfig
    ]);
  };
  var calculateNextFrame = ({
    time,
    currentFrame: startFrame,
    playbackSpeed,
    fps,
    actualLastFrame,
    actualFirstFrame,
    framesAdvanced,
    shouldLoop
  }) => {
    const op = playbackSpeed < 0 ? Math.ceil : Math.floor;
    const framesToAdvance = op(time * playbackSpeed / (1e3 / fps)) - framesAdvanced;
    const nextFrame = framesToAdvance + startFrame;
    const isCurrentFrameOutside = startFrame > actualLastFrame || startFrame < actualFirstFrame;
    const isNextFrameOutside = nextFrame > actualLastFrame || nextFrame < actualFirstFrame;
    const hasEnded = !shouldLoop && isNextFrameOutside && !isCurrentFrameOutside;
    if (playbackSpeed > 0) {
      if (isNextFrameOutside) {
        return {
          nextFrame: actualFirstFrame,
          framesToAdvance,
          hasEnded
        };
      }
      return { nextFrame, framesToAdvance, hasEnded };
    }
    if (isNextFrameOutside) {
      return { nextFrame: actualLastFrame, framesToAdvance, hasEnded };
    }
    return { nextFrame, framesToAdvance, hasEnded };
  };
  var getIsBackgrounded = () => {
    if (typeof document === "undefined") {
      return false;
    }
    return document.visibilityState === "hidden";
  };
  var useIsBackgrounded = () => {
    const isBackgrounded = (0, import_react101.useRef)(getIsBackgrounded());
    (0, import_react101.useEffect)(() => {
      const onVisibilityChange = () => {
        isBackgrounded.current = getIsBackgrounded();
      };
      document.addEventListener("visibilitychange", onVisibilityChange);
      return () => {
        document.removeEventListener("visibilitychange", onVisibilityChange);
      };
    }, []);
    return isBackgrounded;
  };
  var ALLOWED_GLOBAL_TIME_ANCHOR_SHIFT = 0.1;
  var setGlobalTimeAnchor = ({
    audioContext,
    audioSyncAnchor,
    absoluteTimeInSeconds,
    globalPlaybackRate,
    logLevel,
    force
  }) => {
    const newAnchor = audioContext.currentTime - absoluteTimeInSeconds / globalPlaybackRate;
    const shift = newAnchor - audioSyncAnchor.value;
    const { outputLatency } = audioContext;
    const safeOutputLatency = outputLatency === 0 ? 0.3 : outputLatency;
    const latency = audioContext.baseLatency + safeOutputLatency;
    if (Math.abs(shift) < ALLOWED_GLOBAL_TIME_ANCHOR_SHIFT + latency && !force) {
      return false;
    }
    if (Math.abs(shift) < Number.EPSILON) {
      return false;
    }
    Internals.Log.verbose({ logLevel, tag: "audio-scheduling" }, "Anchor " + (force ? "forcibly " : "") + "changed from %s to %s with shift %s", audioSyncAnchor.value, newAnchor, shift);
    audioSyncAnchor.value = newAnchor;
    return true;
  };
  var shouldForceAnchorChange = (newState) => {
    if (newState === "suspended" || newState === "running-to-suspended") {
      return true;
    }
    if (newState === "closed" || newState === "interrupted" || newState === "running" || newState === "suspended-to-running") {
      return false;
    }
    throw new Error(`Unexpected audio context state: ${newState}`);
  };
  var usePlayback = ({
    loop,
    playbackRate,
    moveToBeginningWhenEnded,
    inFrame,
    outFrame,
    browserMediaControlsBehavior,
    getCurrentFrame,
    muted
  }) => {
    const config = Internals.useUnsafeVideoConfig();
    const frame = Internals.Timeline.useTimelinePosition();
    const [playing] = Internals.Timeline.usePlayingState();
    const { pause, emitter, isPlaying } = usePlayerMethods();
    const setFrame = Internals.Timeline.useTimelineSetFrame();
    const sharedAudioContext = (0, import_react98.useContext)(Internals.SharedAudioContext);
    const { setPlayerMuted } = (0, import_react98.useContext)(Internals.SetMediaVolumeContext);
    const logLevel = Internals.useLogLevel();
    const isBackgroundedRef = useIsBackgrounded();
    const lastTimeUpdateTimestamp = (0, import_react98.useRef)(0);
    const context = (0, import_react98.useContext)(Internals.BufferingContextReact);
    if (!context) {
      throw new Error("Missing the buffering context. Most likely you have a Remotion version mismatch.");
    }
    useBrowserMediaSession({
      browserMediaControlsBehavior,
      playbackRate,
      videoConfig: config
    });
    (0, import_react97.useLayoutEffect)(() => {
      if (!sharedAudioContext) {
        return;
      }
      if (!sharedAudioContext.audioContext) {
        return;
      }
      if (!config) {
        return;
      }
      if (muted) {
        return;
      }
      const changed = setGlobalTimeAnchor({
        audioContext: sharedAudioContext.audioContext,
        audioSyncAnchor: sharedAudioContext.audioSyncAnchor,
        absoluteTimeInSeconds: frame / config.fps,
        globalPlaybackRate: playbackRate,
        logLevel,
        force: false
      });
      if (changed) {
        sharedAudioContext.audioSyncAnchorEmitter.dispatch("changed");
      }
    }, [config, frame, logLevel, playbackRate, sharedAudioContext, muted]);
    (0, import_react97.useLayoutEffect)(() => {
      const audioContext = sharedAudioContext?.audioContext;
      if (!audioContext) {
        return;
      }
      if (!config) {
        return;
      }
      if (muted) {
        return;
      }
      const callback = () => {
        const newState = sharedAudioContext?.getAudioContextState();
        if (newState && shouldForceAnchorChange(newState)) {
          setGlobalTimeAnchor({
            audioContext,
            audioSyncAnchor: sharedAudioContext.audioSyncAnchor,
            absoluteTimeInSeconds: getCurrentFrame() / config.fps,
            globalPlaybackRate: playbackRate,
            logLevel,
            force: true
          });
        }
      };
      audioContext?.addEventListener("statechange", callback);
      return () => {
        audioContext?.removeEventListener("statechange", callback);
      };
    }, [
      config,
      getCurrentFrame,
      logLevel,
      muted,
      playbackRate,
      sharedAudioContext
    ]);
    (0, import_react98.useEffect)(() => {
      if (!config) {
        return;
      }
      if (!playing) {
        sharedAudioContext?.suspend?.();
        return;
      }
      if (sharedAudioContext?._experimentalKeepAudioContextAlive && sharedAudioContext.audioContext && !muted) {
        const changed = setGlobalTimeAnchor({
          audioContext: sharedAudioContext.audioContext,
          audioSyncAnchor: sharedAudioContext.audioSyncAnchor,
          absoluteTimeInSeconds: getCurrentFrame() / config.fps,
          globalPlaybackRate: playbackRate,
          logLevel,
          force: true
        });
        if (changed) {
          sharedAudioContext.audioSyncAnchorEmitter.dispatch("changed");
        }
      }
      let hasBeenStopped = false;
      let audioContextFailed = false;
      let reqAnimFrameCall = null;
      let startedTime = performance.now();
      let framesAdvanced = 0;
      const cancelQueuedFrame = () => {
        if (reqAnimFrameCall !== null) {
          if (reqAnimFrameCall.type === "raf") {
            cancelAnimationFrame(reqAnimFrameCall.id);
          } else {
            clearTimeout(reqAnimFrameCall.id);
          }
        }
      };
      const stop = () => {
        hasBeenStopped = true;
        cancelQueuedFrame();
      };
      const callback = () => {
        if (hasBeenStopped) {
          return;
        }
        if (!isPlaying()) {
          sharedAudioContext?.suspend?.();
          return;
        }
        if (!muted && !audioContextFailed && !context.buffering.current) {
          sharedAudioContext?.resume?.();
        }
        const time = performance.now() - startedTime;
        const actualLastFrame = outFrame ?? config.durationInFrames - 1;
        const actualFirstFrame = inFrame ?? 0;
        const currentFrame = getCurrentFrame();
        const { nextFrame, framesToAdvance, hasEnded } = calculateNextFrame({
          time,
          currentFrame,
          playbackSpeed: playbackRate,
          fps: config.fps,
          actualFirstFrame,
          actualLastFrame,
          framesAdvanced,
          shouldLoop: loop
        });
        framesAdvanced += framesToAdvance;
        if (nextFrame !== getCurrentFrame() && (!hasEnded || moveToBeginningWhenEnded) && !context.buffering.current) {
          setFrame((c3) => ({ ...c3, [config.id]: nextFrame }));
        }
        if (hasEnded) {
          stop();
          pause();
          emitter.dispatchEnded();
          return;
        }
        queueNextFrame();
      };
      const queueNextFrame = () => {
        if (hasBeenStopped) {
          return;
        }
        const getIsResumingAudioContext = audioContextFailed ? null : sharedAudioContext?.getIsResumingAudioContext?.() ?? null;
        if (getIsResumingAudioContext !== null && !muted) {
          getIsResumingAudioContext.then((result) => {
            if (hasBeenStopped) {
              return;
            }
            if (result === "failed") {
              audioContextFailed = true;
              sharedAudioContext?.suspend();
              setPlayerMuted(true);
            }
            startedTime = performance.now();
            framesAdvanced = 0;
            queueNextFrame();
          });
          return;
        }
        if (context.buffering.current) {
          if (!muted && !audioContextFailed) {
            sharedAudioContext?.suspend?.();
          }
          const stopListening = context.listenForResume(() => {
            stopListening.remove();
            startedTime = performance.now();
            framesAdvanced = 0;
            queueNextFrame();
          });
          return;
        }
        if (isBackgroundedRef.current) {
          reqAnimFrameCall = {
            type: "timeout",
            id: setTimeout(callback, 1e3 / config.fps)
          };
          return;
        }
        reqAnimFrameCall = { type: "raf", id: requestAnimationFrame(callback) };
      };
      queueNextFrame();
      const onVisibilityChange = () => {
        if (document.visibilityState === "visible") {
          return;
        }
        cancelQueuedFrame();
        callback();
      };
      window.addEventListener("visibilitychange", onVisibilityChange);
      return () => {
        window.removeEventListener("visibilitychange", onVisibilityChange);
        stop();
      };
    }, [
      config,
      loop,
      pause,
      playing,
      setFrame,
      emitter,
      playbackRate,
      inFrame,
      outFrame,
      moveToBeginningWhenEnded,
      isBackgroundedRef,
      getCurrentFrame,
      context,
      isPlaying,
      sharedAudioContext,
      setPlayerMuted,
      logLevel,
      muted
    ]);
    (0, import_react98.useEffect)(() => {
      const now = performance.now();
      const timeSinceLastUpdate = now - lastTimeUpdateTimestamp.current;
      if (timeSinceLastUpdate >= 250) {
        emitter.dispatchTimeUpdate({ frame });
        lastTimeUpdateTimestamp.current = now;
        return;
      }
      const timeoutId = setTimeout(() => {
        emitter.dispatchTimeUpdate({ frame });
        lastTimeUpdateTimestamp.current = performance.now();
      }, 250 - timeSinceLastUpdate);
      return () => clearTimeout(timeoutId);
    }, [emitter, frame]);
    (0, import_react98.useEffect)(() => {
      emitter.dispatchFrameUpdate({ frame });
    }, [emitter, frame]);
  };
  var elementSizeHooks = [];
  var getElement = (source) => {
    if (!source) {
      return null;
    }
    if ("current" in source) {
      return source.current;
    }
    return source;
  };
  var useElementSize = (source, options) => {
    const [size, setSize] = (0, import_react102.useState)(() => {
      const element = getElement(source);
      if (!element) {
        return null;
      }
      const rect = element.getClientRects();
      if (!rect[0]) {
        return null;
      }
      return {
        width: rect[0].width,
        height: rect[0].height,
        left: rect[0].x,
        top: rect[0].y,
        windowSize: {
          height: window.innerHeight,
          width: window.innerWidth
        }
      };
    });
    const observer = (0, import_react102.useMemo)(() => {
      if (typeof ResizeObserver === "undefined") {
        return null;
      }
      return new ResizeObserver((entries) => {
        const { contentRect, target } = entries[0];
        const newSize = target.getClientRects();
        if (!newSize?.[0]) {
          setSize(null);
          return;
        }
        const probableCssParentScaleX = contentRect.width === 0 ? 1 : newSize[0].width / contentRect.width;
        const probableCssParentScaleY = contentRect.height === 0 ? 1 : newSize[0].height / contentRect.height;
        const width = options.shouldApplyCssTransforms || probableCssParentScaleX === 0 ? newSize[0].width : newSize[0].width * (1 / probableCssParentScaleX);
        const height = options.shouldApplyCssTransforms || probableCssParentScaleY === 0 ? newSize[0].height : newSize[0].height * (1 / probableCssParentScaleY);
        setSize((prevState) => {
          const isSame = prevState && prevState.width === width && prevState.height === height && prevState.left === newSize[0].x && prevState.top === newSize[0].y && prevState.windowSize.height === window.innerHeight && prevState.windowSize.width === window.innerWidth;
          if (isSame) {
            return prevState;
          }
          return {
            width,
            height,
            left: newSize[0].x,
            top: newSize[0].y,
            windowSize: {
              height: window.innerHeight,
              width: window.innerWidth
            }
          };
        });
      });
    }, [options.shouldApplyCssTransforms]);
    const updateSize = (0, import_react102.useCallback)(() => {
      const element = getElement(source);
      if (!element) {
        return;
      }
      const rect = element.getClientRects();
      if (!rect[0]) {
        setSize(null);
        return;
      }
      setSize((prevState) => {
        const isSame = prevState && prevState.width === rect[0].width && prevState.height === rect[0].height && prevState.left === rect[0].x && prevState.top === rect[0].y && prevState.windowSize.height === window.innerHeight && prevState.windowSize.width === window.innerWidth;
        if (isSame) {
          return prevState;
        }
        return {
          width: rect[0].width,
          height: rect[0].height,
          left: rect[0].x,
          top: rect[0].y,
          windowSize: {
            height: window.innerHeight,
            width: window.innerWidth
          }
        };
      });
    }, [source]);
    (0, import_react102.useEffect)(() => {
      updateSize();
    }, [updateSize]);
    (0, import_react102.useEffect)(() => {
      if (!observer) {
        return;
      }
      const element = getElement(source);
      if (element) {
        observer.observe(element);
      }
      return () => {
        if (element) {
          observer.unobserve(element);
        }
      };
    }, [observer, source]);
    (0, import_react102.useEffect)(() => {
      if (!options.triggerOnWindowResize) {
        return;
      }
      window.addEventListener("resize", updateSize);
      return () => {
        window.removeEventListener("resize", updateSize);
      };
    }, [options.triggerOnWindowResize, updateSize]);
    (0, import_react102.useEffect)(() => {
      elementSizeHooks.push(updateSize);
      return () => {
        elementSizeHooks = elementSizeHooks.filter((e) => e !== updateSize);
      };
    }, [updateSize]);
    return (0, import_react102.useMemo)(() => {
      if (!size) {
        return null;
      }
      return { ...size, refresh: updateSize };
    }, [size, updateSize]);
  };
  var playerCssClassname = (override) => {
    return override ?? "__remotion-player";
  };
  var errorStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    height: "100%",
    width: "100%"
  };
  var ErrorBoundary = class extends import_react105.default.Component {
    state = { hasError: null };
    static getDerivedStateFromError(error2) {
      return { hasError: error2 };
    }
    componentDidCatch(error2) {
      this.props.onError(error2);
    }
    render() {
      if (this.state.hasError) {
        return /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", {
          style: errorStyle,
          children: this.props.errorFallback({
            error: this.state.hasError
          })
        });
      }
      return this.props.children;
    }
  };
  var getHashOfDomain = async () => {
    if (typeof window === "undefined") {
      return null;
    }
    if (typeof window.crypto === "undefined") {
      return null;
    }
    if (typeof window.crypto.subtle === "undefined") {
      return null;
    }
    try {
      const hashBuffer = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(window.location.hostname));
      return Array.from(new Uint8Array(hashBuffer)).map((b3) => b3.toString(16).padStart(2, "0")).join("");
    } catch {
      return null;
    }
  };
  var style = {
    backgroundColor: "red",
    position: "absolute",
    padding: 12,
    fontFamily: "Arial"
  };
  var DOMAIN_BLACKLIST = [
    "28d262b44cc61fa750f1686b16ad0604dabfe193fbc263eec05c89b7ad4c2cd6",
    "4db1b0a94be33165dfefcb3ba03d04c7a2666dd27c496d3dc9fa41858e94925e",
    "fbc48530bbf245da790f63675e84e06bab38c3b114fab07eb350025119922bdc",
    "7baf10a8932757b1b3a22b3fce10a048747ac2f8eaf638603487e3705b07eb83",
    "8a6c21a598d8c667272b5207c051b85997bf5b45d5fb712378be3f27cd72c6a6",
    "a2f7aaac9c50a9255e7fc376110c4e0bfe153722dc66ed3c5d3bf2a135f65518"
  ];
  var ran = false;
  var RenderWarningIfBlacklist = () => {
    const [unlicensed, setUnlicensed] = import_react106.default.useState(false);
    (0, import_react106.useEffect)(() => {
      if (ran) {
        return;
      }
      ran = true;
      getHashOfDomain().then((hash) => {
        if (hash && DOMAIN_BLACKLIST.includes(hash)) {
          setUnlicensed(true);
        }
      }).catch(() => {
      });
    }, []);
    (0, import_react106.useEffect)(() => {
      if (!unlicensed) {
        return;
      }
      const ensureBanner = () => {
        const banner = document.querySelector(".warning-banner");
        if (!banner) {
          const div = document.createElement("div");
          div.className = "warning-banner";
          Object.assign(div.style, style, {
            zIndex: "9999",
            cssText: `${style.cssText} !important;`
          });
          div.innerHTML = `
	        <a href="https://github.com/remotion-dev/remotion/pull/4589" style="color: white;">
	          Remotion Unlicensed \u2013 Contact hi@remotion.dev
	        </a>
	      `;
          document.body.appendChild(div);
        }
      };
      const observer = new MutationObserver(() => ensureBanner());
      observer.observe(document.body, { childList: true, subtree: true });
      return () => {
        observer.disconnect();
      };
    }, [unlicensed]);
    if (!unlicensed) {
      return null;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", {
      style,
      className: "warning-banner",
      children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("a", {
        style: { color: "white" },
        href: "https://github.com/remotion-dev/remotion/pull/4589",
        children: "Remotion Unlicensed \u2013 Contact hi@remotion.dev"
      })
    });
  };
  var DefaultPlayPauseButton = ({ playing, buffering }) => {
    if (playing && buffering) {
      return /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(BufferingIndicator, {
        type: "player"
      });
    }
    if (playing) {
      return /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(PauseIcon, {});
    }
    return /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(PlayIcon, {});
  };
  var KNOB_SIZE = 12;
  var BAR_HEIGHT = 5;
  var DefaultVolumeSlider = ({
    volume,
    isVertical,
    onBlur,
    inputRef,
    setVolume
  }) => {
    const sliderContainer = (0, import_react109.useMemo)(() => {
      const paddingLeft = 5;
      const common = {
        paddingLeft,
        height: ICON_SIZE2,
        width: VOLUME_SLIDER_WIDTH,
        display: "inline-flex",
        alignItems: "center"
      };
      if (isVertical) {
        return {
          ...common,
          position: "absolute",
          transform: `rotate(-90deg) translateX(${VOLUME_SLIDER_WIDTH / 2 + ICON_SIZE2 / 2}px)`
        };
      }
      return {
        ...common
      };
    }, [isVertical]);
    const randomId = typeof import_react109.default.useId === "undefined" ? "volume-slider" : import_react109.default.useId();
    const [randomClass] = (0, import_react109.useState)(() => `__remotion-volume-slider-${random(randomId)}`.replace(".", ""));
    const onVolumeChange = (0, import_react109.useCallback)((e) => {
      setVolume(parseFloat(e.target.value));
    }, [setVolume]);
    const inputStyle = (0, import_react109.useMemo)(() => {
      const commonStyle = {
        WebkitAppearance: "none",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        borderRadius: BAR_HEIGHT / 2,
        cursor: "pointer",
        height: BAR_HEIGHT,
        width: VOLUME_SLIDER_WIDTH,
        backgroundImage: `linear-gradient(
				to right,
				white ${volume * 100}%, rgba(255, 255, 255, 0) ${volume * 100}%
			)`
      };
      if (isVertical) {
        return {
          ...commonStyle,
          bottom: ICON_SIZE2 + VOLUME_SLIDER_WIDTH / 2
        };
      }
      return commonStyle;
    }, [isVertical, volume]);
    const sliderStyle = `
	.${randomClass}::-webkit-slider-thumb {
		-webkit-appearance: none;
		background-color: white;
		border-radius: ${KNOB_SIZE / 2}px;
		box-shadow: 0 0 2px black;
		height: ${KNOB_SIZE}px;
		width: ${KNOB_SIZE}px;
	}

	.${randomClass}::-moz-range-thumb {
		-webkit-appearance: none;
		background-color: white;
		border-radius: ${KNOB_SIZE / 2}px;
		box-shadow: 0 0 2px black;
		height: ${KNOB_SIZE}px;
		width: ${KNOB_SIZE}px;
	}
`;
    return /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)("div", {
      style: sliderContainer,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("style", {
          dangerouslySetInnerHTML: {
            __html: sliderStyle
          }
        }),
        /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("input", {
          ref: inputRef,
          "aria-label": "Change volume",
          className: randomClass,
          max: 1,
          min: 0,
          onBlur,
          onChange: onVolumeChange,
          step: 0.01,
          type: "range",
          value: volume,
          style: inputStyle
        })
      ]
    });
  };
  var renderDefaultVolumeSlider = (props) => {
    return /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(DefaultVolumeSlider, {
      ...props
    });
  };
  var VOLUME_SLIDER_WIDTH = 100;
  var MediaVolumeSlider = ({ displayVerticalVolumeSlider, renderMuteButton, renderVolumeSlider }) => {
    const [playerMuted, setPlayerMuted] = Internals.usePlayerMutedState();
    const [mediaVolume, setMediaVolume] = Internals.useMediaVolumeState();
    const [focused, setFocused] = (0, import_react108.useState)(false);
    const parentDivRef = (0, import_react108.useRef)(null);
    const inputRef = (0, import_react108.useRef)(null);
    const hover = useHoverState(parentDivRef, false);
    const onBlur = (0, import_react108.useCallback)(() => {
      setTimeout(() => {
        if (inputRef.current && document.activeElement !== inputRef.current) {
          setFocused(false);
        }
      }, 10);
    }, []);
    const isVolume0 = mediaVolume === 0;
    const onClick = (0, import_react108.useCallback)(() => {
      if (isVolume0) {
        setMediaVolume(1);
        setPlayerMuted(false);
        return;
      }
      setPlayerMuted((mute) => !mute);
    }, [isVolume0, setPlayerMuted, setMediaVolume]);
    const parentDivStyle = (0, import_react108.useMemo)(() => {
      return {
        display: "inline-flex",
        background: "none",
        border: "none",
        justifyContent: "center",
        alignItems: "center",
        touchAction: "none",
        ...displayVerticalVolumeSlider && { position: "relative" }
      };
    }, [displayVerticalVolumeSlider]);
    const volumeContainer = (0, import_react108.useMemo)(() => {
      return {
        display: "inline",
        width: ICON_SIZE2,
        height: ICON_SIZE2,
        cursor: "pointer",
        appearance: "none",
        background: "none",
        border: "none",
        padding: 0
      };
    }, []);
    const renderDefaultMuteButton = (0, import_react108.useCallback)(({ muted, volume }) => {
      const isMutedOrZero = muted || volume === 0;
      return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("button", {
        "aria-label": isMutedOrZero ? "Unmute sound" : "Mute sound",
        title: isMutedOrZero ? "Unmute sound" : "Mute sound",
        onClick,
        onBlur,
        onFocus: () => setFocused(true),
        style: volumeContainer,
        type: "button",
        children: isMutedOrZero ? /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(VolumeOffIcon, {}) : /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(VolumeOnIcon, {})
      });
    }, [onBlur, onClick, volumeContainer]);
    const muteButton = (0, import_react108.useMemo)(() => {
      return renderMuteButton ? renderMuteButton({ muted: playerMuted, volume: mediaVolume }) : renderDefaultMuteButton({ muted: playerMuted, volume: mediaVolume });
    }, [playerMuted, mediaVolume, renderDefaultMuteButton, renderMuteButton]);
    const volumeSlider = (0, import_react108.useMemo)(() => {
      return (focused || hover) && !playerMuted && !Internals.isIosSafari() ? (renderVolumeSlider ?? renderDefaultVolumeSlider)({
        isVertical: displayVerticalVolumeSlider,
        volume: mediaVolume,
        onBlur: () => setFocused(false),
        inputRef,
        setVolume: setMediaVolume
      }) : null;
    }, [
      displayVerticalVolumeSlider,
      focused,
      hover,
      playerMuted,
      mediaVolume,
      renderVolumeSlider,
      setMediaVolume
    ]);
    return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)("div", {
      ref: parentDivRef,
      style: parentDivStyle,
      children: [
        muteButton,
        volumeSlider
      ]
    });
  };
  function useComponentVisible(initialIsVisible) {
    const [isComponentVisible, setIsComponentVisible] = (0, import_react111.useState)(initialIsVisible);
    const ref = (0, import_react111.useRef)(null);
    (0, import_react111.useEffect)(() => {
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsComponentVisible(false);
        }
      };
      document.addEventListener("pointerup", handleClickOutside, true);
      return () => {
        document.removeEventListener("pointerup", handleClickOutside, true);
      };
    }, []);
    return { ref, isComponentVisible, setIsComponentVisible };
  }
  var BOTTOM = 35;
  var THRESHOLD = 70;
  var rateDiv = {
    height: 30,
    paddingRight: 15,
    paddingLeft: 12,
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  };
  var checkmarkContainer = {
    width: 22,
    display: "flex",
    alignItems: "center"
  };
  var checkmarkStyle = {
    width: 14,
    height: 14,
    color: "black"
  };
  var Checkmark = () => /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("svg", {
    viewBox: "0 0 512 512",
    style: checkmarkStyle,
    children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("path", {
      fill: "currentColor",
      d: "M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z"
    })
  });
  var formatPlaybackRate = (rate) => {
    const str = rate.toString();
    return str.includes(".") ? str : str + ".0";
  };
  var PlaybackrateOption = ({ rate, onSelect, selectedRate, keyboardSelectedRate }) => {
    const onClick = (0, import_react110.useCallback)((e) => {
      e.stopPropagation();
      e.preventDefault();
      onSelect(rate);
    }, [onSelect, rate]);
    const [hovered, setHovered] = (0, import_react110.useState)(false);
    const onMouseEnter = (0, import_react110.useCallback)(() => {
      setHovered(true);
    }, []);
    const onMouseLeave = (0, import_react110.useCallback)(() => {
      setHovered(false);
    }, []);
    const isFocused = keyboardSelectedRate === rate;
    const actualStyle = (0, import_react110.useMemo)(() => {
      return {
        ...rateDiv,
        backgroundColor: hovered || isFocused ? "#eee" : "transparent"
      };
    }, [hovered, isFocused]);
    return /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", {
      onPointerEnter: onMouseEnter,
      onPointerLeave: onMouseLeave,
      tabIndex: 0,
      style: actualStyle,
      onClick,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", {
          style: checkmarkContainer,
          children: rate === selectedRate ? /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(Checkmark, {}) : null
        }),
        formatPlaybackRate(rate),
        "x"
      ]
    }, rate);
  };
  var PlaybackPopup = ({ setIsComponentVisible, playbackRates, canvasSize }) => {
    const { setPlaybackRate, playbackRate } = Internals.usePlaybackRate();
    const [keyboardSelectedRate, setKeyboardSelectedRate] = (0, import_react110.useState)(playbackRate);
    (0, import_react110.useEffect)(() => {
      const listener = (e) => {
        e.preventDefault();
        if (e.key === "ArrowUp") {
          const currentIndex = playbackRates.findIndex((rate) => rate === keyboardSelectedRate);
          if (currentIndex === 0) {
            return;
          }
          if (currentIndex === -1) {
            setKeyboardSelectedRate(playbackRates[0]);
          } else {
            setKeyboardSelectedRate(playbackRates[currentIndex - 1]);
          }
        } else if (e.key === "ArrowDown") {
          const currentIndex = playbackRates.findIndex((rate) => rate === keyboardSelectedRate);
          if (currentIndex === playbackRates.length - 1) {
            return;
          }
          if (currentIndex === -1) {
            setKeyboardSelectedRate(playbackRates[playbackRates.length - 1]);
          } else {
            setKeyboardSelectedRate(playbackRates[currentIndex + 1]);
          }
        } else if (e.key === "Enter") {
          setPlaybackRate(keyboardSelectedRate);
          setIsComponentVisible(false);
        }
      };
      window.addEventListener("keydown", listener);
      return () => {
        window.removeEventListener("keydown", listener);
      };
    }, [
      playbackRates,
      keyboardSelectedRate,
      setPlaybackRate,
      setIsComponentVisible
    ]);
    const onSelect = (0, import_react110.useCallback)((rate) => {
      setPlaybackRate(rate);
      setIsComponentVisible(false);
    }, [setIsComponentVisible, setPlaybackRate]);
    const playbackPopup = (0, import_react110.useMemo)(() => {
      return {
        position: "absolute",
        right: 0,
        width: 125,
        maxHeight: canvasSize.height - THRESHOLD - BOTTOM,
        bottom: 35,
        background: "#fff",
        borderRadius: 4,
        overflow: "auto",
        color: "black",
        textAlign: "left"
      };
    }, [canvasSize.height]);
    return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", {
      style: playbackPopup,
      children: playbackRates.map((rate) => {
        return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(PlaybackrateOption, {
          selectedRate: playbackRate,
          onSelect,
          rate,
          keyboardSelectedRate
        }, rate);
      })
    });
  };
  var label2 = {
    fontSize: 13,
    fontWeight: "bold",
    color: "white",
    border: "2px solid white",
    borderRadius: 20,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 2,
    paddingBottom: 2
  };
  var playerButtonStyle = {
    appearance: "none",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 6,
    paddingBottom: 6,
    height: 37,
    display: "inline-flex",
    marginBottom: 0,
    marginTop: 0,
    alignItems: "center"
  };
  var button = {
    ...playerButtonStyle,
    position: "relative"
  };
  var PlaybackrateControl = ({ playbackRates, canvasSize }) => {
    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
    const { playbackRate } = Internals.usePlaybackRate();
    const onClick = (0, import_react110.useCallback)((e) => {
      e.stopPropagation();
      e.preventDefault();
      setIsComponentVisible((prevIsComponentVisible) => !prevIsComponentVisible);
    }, [setIsComponentVisible]);
    return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", {
      ref,
      children: /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("button", {
        type: "button",
        "aria-label": "Change playback rate",
        style: button,
        onClick,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)("div", {
            style: label2,
            children: [
              playbackRate,
              "x"
            ]
          }),
          isComponentVisible && /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(PlaybackPopup, {
            canvasSize,
            playbackRates,
            setIsComponentVisible
          })
        ]
      })
    });
  };
  var getFrameFromX = (clientX, durationInFrames, width) => {
    const pos = clientX;
    const frame = Math.round(interpolate(pos, [0, width], [0, durationInFrames - 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp"
    }));
    return frame;
  };
  var BAR_HEIGHT2 = 5;
  var KNOB_SIZE2 = 12;
  var VERTICAL_PADDING = 4;
  var containerStyle = {
    userSelect: "none",
    WebkitUserSelect: "none",
    paddingTop: VERTICAL_PADDING,
    paddingBottom: VERTICAL_PADDING,
    boxSizing: "border-box",
    cursor: "pointer",
    position: "relative",
    touchAction: "none"
  };
  var barBackground = {
    height: BAR_HEIGHT2,
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    width: "100%",
    borderRadius: BAR_HEIGHT2 / 2
  };
  var findBodyInWhichDivIsLocated = (div) => {
    let current = div;
    while (current.parentElement) {
      current = current.parentElement;
    }
    return current;
  };
  var PlayerSeekBar = ({ durationInFrames, onSeekEnd, onSeekStart, inFrame, outFrame }) => {
    const containerRef = (0, import_react112.useRef)(null);
    const barHovered = useHoverState(containerRef, false);
    const size = useElementSize(containerRef, {
      triggerOnWindowResize: true,
      shouldApplyCssTransforms: true
    });
    const { seek: seek2, play, pause, isPlaying } = usePlayerMethods();
    const frame = Internals.Timeline.useTimelinePosition();
    const [dragging, setDragging] = (0, import_react112.useState)({
      dragging: false
    });
    const width = size?.width ?? 0;
    const onPointerDown = (0, import_react112.useCallback)((e) => {
      if (e.button !== 0) {
        return;
      }
      const posLeft = containerRef.current?.getBoundingClientRect().left;
      const _frame = getFrameFromX(e.clientX - posLeft, durationInFrames, width);
      const wasPlaying = isPlaying();
      pause();
      seek2(_frame);
      setDragging({
        dragging: true,
        wasPlaying
      });
      onSeekStart();
    }, [durationInFrames, width, isPlaying, pause, seek2, onSeekStart]);
    const onPointerMove = (0, import_react112.useCallback)((e) => {
      if (!size) {
        throw new Error("Player has no size");
      }
      if (!dragging.dragging) {
        return;
      }
      const posLeft = containerRef.current?.getBoundingClientRect().left;
      const _frame = getFrameFromX(e.clientX - posLeft, durationInFrames, size.width);
      seek2(_frame);
    }, [dragging.dragging, durationInFrames, seek2, size]);
    const onPointerUp = (0, import_react112.useCallback)(() => {
      setDragging({
        dragging: false
      });
      if (!dragging.dragging) {
        return;
      }
      if (dragging.wasPlaying) {
        play();
      } else {
        pause();
      }
      onSeekEnd();
    }, [dragging, onSeekEnd, pause, play]);
    (0, import_react112.useEffect)(() => {
      if (!dragging.dragging) {
        return;
      }
      const body = findBodyInWhichDivIsLocated(containerRef.current);
      body.addEventListener("pointermove", onPointerMove);
      body.addEventListener("pointerup", onPointerUp);
      return () => {
        body.removeEventListener("pointermove", onPointerMove);
        body.removeEventListener("pointerup", onPointerUp);
      };
    }, [dragging.dragging, onPointerMove, onPointerUp]);
    const knobStyle = (0, import_react112.useMemo)(() => {
      return {
        height: KNOB_SIZE2,
        width: KNOB_SIZE2,
        borderRadius: KNOB_SIZE2 / 2,
        position: "absolute",
        top: VERTICAL_PADDING - KNOB_SIZE2 / 2 + 5 / 2,
        backgroundColor: "white",
        left: Math.max(0, frame / Math.max(1, durationInFrames - 1) * width - KNOB_SIZE2 / 2),
        boxShadow: "0 0 2px black",
        opacity: Number(barHovered || dragging.dragging)
      };
    }, [barHovered, dragging.dragging, durationInFrames, frame, width]);
    const fillStyle = (0, import_react112.useMemo)(() => {
      return {
        height: BAR_HEIGHT2,
        backgroundColor: "rgba(255, 255, 255, 1)",
        width: (frame - (inFrame ?? 0)) / (durationInFrames - 1) * width,
        marginLeft: (inFrame ?? 0) / (durationInFrames - 1) * width,
        borderRadius: BAR_HEIGHT2 / 2
      };
    }, [durationInFrames, frame, inFrame, width]);
    const active = (0, import_react112.useMemo)(() => {
      return {
        height: BAR_HEIGHT2,
        backgroundColor: "rgba(255, 255, 255, 0.25)",
        width: ((outFrame ?? durationInFrames - 1) - (inFrame ?? 0)) / (durationInFrames - 1) * 100 + "%",
        marginLeft: (inFrame ?? 0) / (durationInFrames - 1) * 100 + "%",
        borderRadius: BAR_HEIGHT2 / 2,
        position: "absolute"
      };
    }, [durationInFrames, inFrame, outFrame]);
    return /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("div", {
      ref: containerRef,
      onPointerDown,
      style: containerStyle,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)("div", {
          style: barBackground,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("div", {
              style: active
            }),
            /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("div", {
              style: fillStyle
            })
          ]
        }),
        /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("div", {
          style: knobStyle
        })
      ]
    });
  };
  var formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds - minutes * 60);
    return `${String(minutes)}:${String(seconds).padStart(2, "0")}`;
  };
  var PlayerTimeLabel = ({ durationInFrames, maxTimeLabelWidth, fps }) => {
    const frame = Internals.Timeline.useTimelinePosition();
    const timeLabel = (0, import_react113.useMemo)(() => {
      return {
        color: "white",
        fontFamily: "sans-serif",
        fontSize: 14,
        maxWidth: maxTimeLabelWidth === null ? void 0 : maxTimeLabelWidth,
        overflow: "hidden",
        textOverflow: "ellipsis"
      };
    }, [maxTimeLabelWidth]);
    const isLastFrame = frame === durationInFrames - 1;
    const frameToDisplay = isLastFrame ? frame + 1 : frame;
    return /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)("div", {
      style: timeLabel,
      children: [
        formatTime(frameToDisplay / fps),
        " / ",
        formatTime(durationInFrames / fps)
      ]
    });
  };
  var X_SPACER = 10;
  var X_PADDING = 12;
  var useVideoControlsResize = ({
    allowFullscreen: allowFullScreen,
    playerWidth
  }) => {
    const resizeInfo = (0, import_react114.useMemo)(() => {
      const playPauseIconSize = ICON_SIZE2;
      const volumeIconSize = ICON_SIZE2;
      const _fullscreenIconSize = allowFullScreen ? fullscreenIconSize : 0;
      const elementsSize = volumeIconSize + playPauseIconSize + _fullscreenIconSize + X_PADDING * 2 + X_SPACER * 2;
      const maxTimeLabelWidth = playerWidth - elementsSize;
      const maxTimeLabelWidthWithoutNegativeValue = Math.max(maxTimeLabelWidth, 0);
      const availableTimeLabelWidthIfVolumeOpen = maxTimeLabelWidthWithoutNegativeValue - VOLUME_SLIDER_WIDTH;
      const computedLabelWidth = availableTimeLabelWidthIfVolumeOpen < VOLUME_SLIDER_WIDTH ? maxTimeLabelWidthWithoutNegativeValue : availableTimeLabelWidthIfVolumeOpen;
      const minWidthForHorizontalDisplay = computedLabelWidth + elementsSize + VOLUME_SLIDER_WIDTH;
      const displayVerticalVolumeSlider = playerWidth < minWidthForHorizontalDisplay;
      return {
        maxTimeLabelWidth: maxTimeLabelWidthWithoutNegativeValue === 0 ? null : maxTimeLabelWidthWithoutNegativeValue,
        displayVerticalVolumeSlider
      };
    }, [allowFullScreen, playerWidth]);
    return resizeInfo;
  };
  var gradientSteps = [
    0,
    0.013,
    0.049,
    0.104,
    0.175,
    0.259,
    0.352,
    0.45,
    0.55,
    0.648,
    0.741,
    0.825,
    0.896,
    0.951,
    0.987
  ];
  var gradientOpacities = [
    0,
    8.1,
    15.5,
    22.5,
    29,
    35.3,
    41.2,
    47.1,
    52.9,
    58.8,
    64.7,
    71,
    77.5,
    84.5,
    91.9
  ];
  var globalGradientOpacity = 1 / 0.7;
  var containerStyle2 = {
    boxSizing: "border-box",
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingTop: 40,
    paddingBottom: 10,
    backgroundImage: `linear-gradient(to bottom,${gradientSteps.map((g, i) => {
      return `hsla(0, 0%, 0%, ${g}) ${gradientOpacities[i] * globalGradientOpacity}%`;
    }).join(", ")}, hsl(0, 0%, 0%) 100%)`,
    backgroundSize: "auto 145px",
    display: "flex",
    paddingRight: X_PADDING,
    paddingLeft: X_PADDING,
    flexDirection: "column",
    transition: "opacity 0.3s"
  };
  var controlsRow = {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    userSelect: "none",
    WebkitUserSelect: "none"
  };
  var leftPartStyle = {
    display: "flex",
    flexDirection: "row",
    userSelect: "none",
    WebkitUserSelect: "none",
    alignItems: "center"
  };
  var xSpacer = {
    width: 12
  };
  var ySpacer = {
    height: 8
  };
  var flex1 = {
    flex: 1
  };
  var fullscreen = {};
  var Controls = ({
    durationInFrames,
    isFullscreen,
    fps,
    showVolumeControls,
    onFullscreenButtonClick,
    allowFullscreen,
    onExitFullscreenButtonClick,
    spaceKeyToPlayOrPause,
    onSeekEnd,
    onSeekStart,
    inFrame,
    outFrame,
    initiallyShowControls,
    canvasSize,
    renderPlayPauseButton,
    renderFullscreenButton,
    alwaysShowControls,
    showPlaybackRateControl,
    containerRef,
    buffering,
    hideControlsWhenPointerDoesntMove,
    onPointerDown,
    onDoubleClick,
    renderMuteButton,
    renderVolumeSlider,
    playing,
    toggle,
    renderCustomControls
  }) => {
    const playButtonRef = (0, import_react107.useRef)(null);
    const [supportsFullscreen, setSupportsFullscreen] = (0, import_react107.useState)(false);
    const hovered = useHoverState(containerRef, hideControlsWhenPointerDoesntMove);
    const { maxTimeLabelWidth, displayVerticalVolumeSlider } = useVideoControlsResize({
      allowFullscreen,
      playerWidth: canvasSize?.width ?? 0
    });
    const [shouldShowInitially, setInitiallyShowControls] = (0, import_react107.useState)(() => {
      if (typeof initiallyShowControls === "boolean") {
        return initiallyShowControls;
      }
      if (typeof initiallyShowControls === "number") {
        if (initiallyShowControls % 1 !== 0) {
          throw new Error("initiallyShowControls must be an integer or a boolean");
        }
        if (Number.isNaN(initiallyShowControls)) {
          throw new Error("initiallyShowControls must not be NaN");
        }
        if (!Number.isFinite(initiallyShowControls)) {
          throw new Error("initiallyShowControls must be finite");
        }
        if (initiallyShowControls <= 0) {
          throw new Error("initiallyShowControls must be a positive integer");
        }
        return initiallyShowControls;
      }
      throw new TypeError("initiallyShowControls must be a number or a boolean");
    });
    const containerCss = (0, import_react107.useMemo)(() => {
      const shouldShow = hovered || !playing || shouldShowInitially || alwaysShowControls;
      return {
        ...containerStyle2,
        opacity: Number(shouldShow)
      };
    }, [hovered, shouldShowInitially, playing, alwaysShowControls]);
    (0, import_react107.useEffect)(() => {
      if (playButtonRef.current && spaceKeyToPlayOrPause) {
        playButtonRef.current.focus({
          preventScroll: true
        });
      }
    }, [playing, spaceKeyToPlayOrPause]);
    (0, import_react107.useEffect)(() => {
      setSupportsFullscreen((typeof document !== "undefined" && (document.fullscreenEnabled || document.webkitFullscreenEnabled)) ?? false);
    }, []);
    (0, import_react107.useEffect)(() => {
      if (shouldShowInitially === false) {
        return;
      }
      const time = shouldShowInitially === true ? 2e3 : shouldShowInitially;
      const timeout = setTimeout(() => {
        setInitiallyShowControls(false);
      }, time);
      return () => {
        clearInterval(timeout);
      };
    }, [shouldShowInitially]);
    const playbackRates = (0, import_react107.useMemo)(() => {
      if (showPlaybackRateControl === true) {
        return [0.5, 0.8, 1, 1.2, 1.5, 1.8, 2, 2.5, 3];
      }
      if (Array.isArray(showPlaybackRateControl)) {
        for (const rate of showPlaybackRateControl) {
          if (typeof rate !== "number") {
            throw new Error("Every item in showPlaybackRateControl must be a number");
          }
          if (rate <= 0) {
            throw new Error("Every item in showPlaybackRateControl must be positive");
          }
        }
        return showPlaybackRateControl;
      }
      return null;
    }, [showPlaybackRateControl]);
    const customControlsElement = renderCustomControls ? renderCustomControls() : null;
    const ref = (0, import_react107.useRef)(null);
    const flexRef = (0, import_react107.useRef)(null);
    const onPointerDownIfContainer = (0, import_react107.useCallback)((e) => {
      if (e.target === ref.current || e.target === flexRef.current) {
        onPointerDown?.(e);
      }
    }, [onPointerDown]);
    const onDoubleClickIfContainer = (0, import_react107.useCallback)((e) => {
      if (e.target === ref.current || e.target === flexRef.current) {
        onDoubleClick?.(e);
      }
    }, [onDoubleClick]);
    return /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", {
      ref,
      style: containerCss,
      onPointerDown: onPointerDownIfContainer,
      onDoubleClick: onDoubleClickIfContainer,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", {
          ref: flexRef,
          style: controlsRow,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)("div", {
              style: leftPartStyle,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("button", {
                  ref: playButtonRef,
                  type: "button",
                  style: playerButtonStyle,
                  onClick: toggle,
                  "aria-label": playing ? "Pause video" : "Play video",
                  title: playing ? "Pause video" : "Play video",
                  children: renderPlayPauseButton === null ? /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(DefaultPlayPauseButton, {
                    buffering,
                    playing
                  }) : renderPlayPauseButton({
                    playing,
                    isBuffering: buffering
                  }) ?? /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(DefaultPlayPauseButton, {
                    buffering,
                    playing
                  })
                }),
                showVolumeControls ? /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)(import_jsx_runtime53.Fragment, {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", {
                      style: xSpacer
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(MediaVolumeSlider, {
                      renderMuteButton,
                      renderVolumeSlider,
                      displayVerticalVolumeSlider
                    })
                  ]
                }) : null,
                /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", {
                  style: xSpacer
                }),
                /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(PlayerTimeLabel, {
                  durationInFrames,
                  fps,
                  maxTimeLabelWidth
                }),
                /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", {
                  style: xSpacer
                })
              ]
            }),
            /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", {
              style: flex1
            }),
            customControlsElement,
            customControlsElement && playbackRates && canvasSize ? /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", {
              style: xSpacer
            }) : null,
            playbackRates && canvasSize && /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(PlaybackrateControl, {
              canvasSize,
              playbackRates
            }),
            playbackRates && supportsFullscreen && allowFullscreen ? /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", {
              style: xSpacer
            }) : null,
            /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", {
              style: fullscreen,
              children: supportsFullscreen && allowFullscreen ? /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("button", {
                type: "button",
                "aria-label": isFullscreen ? "Exit fullscreen" : "Enter Fullscreen",
                title: isFullscreen ? "Exit fullscreen" : "Enter Fullscreen",
                style: playerButtonStyle,
                onClick: isFullscreen ? onExitFullscreenButtonClick : onFullscreenButtonClick,
                children: renderFullscreenButton === null ? /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(FullscreenIcon, {
                  isFullscreen
                }) : renderFullscreenButton({ isFullscreen })
              }) : null
            })
          ]
        }),
        /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", {
          style: ySpacer
        }),
        /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(PlayerSeekBar, {
          onSeekEnd,
          onSeekStart,
          durationInFrames,
          inFrame,
          outFrame
        })
      ]
    });
  };
  var IS_NODE = typeof document === "undefined";
  var cancellablePromise = (promise) => {
    let isCanceled = false;
    const wrappedPromise = new Promise((resolve, reject) => {
      promise.then((value) => {
        if (isCanceled) {
          reject({ isCanceled, value });
          return;
        }
        resolve(value);
      }).catch((error2) => {
        reject({ isCanceled, error: error2 });
      });
    });
    return {
      promise: wrappedPromise,
      cancel: () => {
        isCanceled = true;
      }
    };
  };
  var delay = (n) => new Promise((resolve) => setTimeout(resolve, n));
  var useCancellablePromises = () => {
    const pendingPromises = (0, import_react116.useRef)([]);
    const appendPendingPromise = (0, import_react116.useCallback)((promise) => {
      pendingPromises.current = [...pendingPromises.current, promise];
    }, []);
    const removePendingPromise = (0, import_react116.useCallback)((promise) => {
      pendingPromises.current = pendingPromises.current.filter((p) => p !== promise);
    }, []);
    const clearPendingPromises = (0, import_react116.useCallback)(() => pendingPromises.current.map((p) => p.cancel()), []);
    const api = (0, import_react116.useMemo)(() => ({
      appendPendingPromise,
      removePendingPromise,
      clearPendingPromises
    }), [appendPendingPromise, clearPendingPromises, removePendingPromise]);
    return api;
  };
  var useClickPreventionOnDoubleClick = (onClick, onDoubleClick, doubleClickToFullscreen) => {
    const api = useCancellablePromises();
    const handleClick = (0, import_react115.useCallback)(async (e) => {
      if (e instanceof PointerEvent ? e.pointerType === "touch" : e.nativeEvent.pointerType === "touch") {
        onClick(e);
        return;
      }
      api.clearPendingPromises();
      const waitForClick = cancellablePromise(delay(200));
      api.appendPendingPromise(waitForClick);
      try {
        await waitForClick.promise;
        api.removePendingPromise(waitForClick);
        onClick(e);
      } catch (errorInfo) {
        const info2 = errorInfo;
        api.removePendingPromise(waitForClick);
        if (!info2.isCanceled) {
          throw info2.error;
        }
      }
    }, [api, onClick]);
    const handlePointerDown = (0, import_react115.useCallback)(() => {
      document.addEventListener("pointerup", (newEvt) => {
        handleClick(newEvt);
      }, {
        once: true
      });
    }, [handleClick]);
    const handleDoubleClick = (0, import_react115.useCallback)(() => {
      api.clearPendingPromises();
      onDoubleClick();
    }, [api, onDoubleClick]);
    const returnValue = (0, import_react115.useMemo)(() => {
      if (!doubleClickToFullscreen) {
        return { handlePointerDown: onClick, handleDoubleClick: () => {
          return;
        } };
      }
      return { handlePointerDown, handleDoubleClick };
    }, [doubleClickToFullscreen, handleDoubleClick, handlePointerDown, onClick]);
    return returnValue;
  };
  var reactVersion = import_react104.default.version.split(".")[0];
  if (reactVersion === "0") {
    throw new Error(`Version ${reactVersion} of "react" is not supported by Remotion`);
  }
  var doesReactVersionSupportSuspense = parseInt(reactVersion, 10) >= 18;
  var PlayerUI = ({
    controls,
    style: style2,
    loop,
    autoPlay,
    allowFullscreen,
    inputProps,
    clickToPlay,
    showVolumeControls,
    doubleClickToFullscreen,
    spaceKeyToPlayOrPause,
    errorFallback,
    playbackRate,
    renderLoading,
    renderPoster,
    className: className2,
    moveToBeginningWhenEnded,
    showPosterWhenUnplayed,
    showPosterWhenEnded,
    showPosterWhenPaused,
    showPosterWhenBuffering,
    showPosterWhenBufferingAndPaused,
    inFrame,
    outFrame,
    initiallyShowControls,
    renderFullscreen: renderFullscreenButton,
    renderPlayPauseButton,
    renderMuteButton,
    renderVolumeSlider,
    renderCustomControls,
    alwaysShowControls,
    showPlaybackRateControl,
    posterFillMode,
    bufferStateDelayInMilliseconds,
    hideControlsWhenPointerDoesntMove,
    overflowVisible,
    browserMediaControlsBehavior,
    overrideInternalClassName,
    noSuspense
  }, ref) => {
    const config = Internals.useUnsafeVideoConfig();
    const video = Internals.useVideo();
    const container2 = (0, import_react104.useRef)(null);
    const canvasSize = useElementSize(container2, {
      triggerOnWindowResize: false,
      shouldApplyCssTransforms: false
    });
    const [hasPausedToResume, setHasPausedToResume] = (0, import_react104.useState)(false);
    const [shouldAutoplay, setShouldAutoPlay] = (0, import_react104.useState)(autoPlay);
    const [isFullscreen, setIsFullscreen] = (0, import_react104.useState)(() => false);
    const [seeking, setSeeking] = (0, import_react104.useState)(false);
    const [hasPlayed, setHasPlayed] = (0, import_react104.useState)(false);
    const supportsFullScreen = (0, import_react104.useMemo)(() => {
      if (typeof document === "undefined") {
        return false;
      }
      return Boolean(document.fullscreenEnabled || document.webkitFullscreenEnabled);
    }, []);
    const player = usePlayerMethods();
    const [playing] = Internals.Timeline.usePlayingState();
    const frame = Internals.Timeline.useTimelinePosition();
    const play = (0, import_react104.useCallback)((e) => {
      if (player.isPlaying()) {
        return;
      }
      setHasPlayed(true);
      player.play(e);
    }, [player]);
    const { playerMuted, mediaVolume } = (0, import_react104.useContext)(Internals.MediaVolumeContext);
    (0, import_react104.useEffect)(() => {
      player.emitter.dispatchVolumeChange(mediaVolume);
    }, [player.emitter, mediaVolume]);
    const isMuted = playerMuted || mediaVolume === 0;
    (0, import_react104.useEffect)(() => {
      player.emitter.dispatchMuteChange({
        isMuted
      });
    }, [player.emitter, isMuted]);
    usePlayback({
      loop,
      playbackRate,
      moveToBeginningWhenEnded,
      inFrame,
      outFrame,
      getCurrentFrame: player.getCurrentFrame,
      browserMediaControlsBehavior,
      muted: isMuted
    });
    (0, import_react104.useEffect)(() => {
      if (hasPausedToResume && !playing) {
        setHasPausedToResume(false);
        play();
      }
    }, [hasPausedToResume, play, playing]);
    (0, import_react104.useEffect)(() => {
      const { current } = container2;
      if (!current) {
        return;
      }
      const onFullscreenChange = () => {
        const newValue = document.fullscreenElement === current || document.webkitFullscreenElement === current;
        setIsFullscreen(newValue);
      };
      document.addEventListener("fullscreenchange", onFullscreenChange);
      document.addEventListener("webkitfullscreenchange", onFullscreenChange);
      return () => {
        document.removeEventListener("fullscreenchange", onFullscreenChange);
        document.removeEventListener("webkitfullscreenchange", onFullscreenChange);
      };
    }, []);
    const toggle = (0, import_react104.useCallback)((e) => {
      if (player.isPlaying()) {
        player.pause();
      } else {
        play(e);
      }
    }, [play, player]);
    const requestFullscreen = (0, import_react104.useCallback)(() => {
      if (!allowFullscreen) {
        throw new Error("allowFullscreen is false");
      }
      if (!supportsFullScreen) {
        throw new Error("Browser doesnt support fullscreen");
      }
      if (!container2.current) {
        throw new Error("No player ref found");
      }
      if (container2.current.webkitRequestFullScreen) {
        container2.current.webkitRequestFullScreen();
      } else {
        container2.current.requestFullscreen();
      }
    }, [allowFullscreen, supportsFullScreen]);
    const exitFullscreen = (0, import_react104.useCallback)(() => {
      if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else {
        document.exitFullscreen();
      }
    }, []);
    (0, import_react104.useEffect)(() => {
      const { current } = container2;
      if (!current) {
        return;
      }
      const fullscreenChange = () => {
        const element = document.webkitFullscreenElement ?? document.fullscreenElement;
        if (element && element === container2.current) {
          player.emitter.dispatchFullscreenChange({
            isFullscreen: true
          });
        } else {
          player.emitter.dispatchFullscreenChange({
            isFullscreen: false
          });
        }
      };
      current.addEventListener("webkitfullscreenchange", fullscreenChange);
      current.addEventListener("fullscreenchange", fullscreenChange);
      return () => {
        current.removeEventListener("webkitfullscreenchange", fullscreenChange);
        current.removeEventListener("fullscreenchange", fullscreenChange);
      };
    }, [player.emitter]);
    const durationInFrames = config?.durationInFrames ?? 1;
    const layout = (0, import_react104.useMemo)(() => {
      if (!config || !canvasSize) {
        return null;
      }
      return calculateCanvasTransformation({
        canvasSize,
        compositionHeight: config.height,
        compositionWidth: config.width,
        previewSize: "auto"
      });
    }, [canvasSize, config]);
    const scale = layout?.scale ?? 1;
    const initialScaleIgnored = (0, import_react104.useRef)(false);
    (0, import_react104.useEffect)(() => {
      if (!initialScaleIgnored.current) {
        initialScaleIgnored.current = true;
        return;
      }
      player.emitter.dispatchScaleChange(scale);
    }, [player.emitter, scale]);
    const { setMediaVolume, setPlayerMuted } = (0, import_react104.useContext)(Internals.SetMediaVolumeContext);
    const [showBufferIndicator, setShowBufferState] = (0, import_react104.useState)(false);
    (0, import_react104.useEffect)(() => {
      let timeout = null;
      let stopped = false;
      const onBuffer = () => {
        stopped = false;
        requestAnimationFrame(() => {
          if (bufferStateDelayInMilliseconds === 0) {
            setShowBufferState(true);
          } else {
            timeout = setTimeout(() => {
              if (!stopped) {
                setShowBufferState(true);
              }
            }, bufferStateDelayInMilliseconds);
          }
        });
      };
      const onResume = () => {
        requestAnimationFrame(() => {
          stopped = true;
          setShowBufferState(false);
          if (timeout) {
            clearTimeout(timeout);
          }
        });
      };
      player.emitter.addEventListener("waiting", onBuffer);
      player.emitter.addEventListener("resume", onResume);
      return () => {
        player.emitter.removeEventListener("waiting", onBuffer);
        player.emitter.removeEventListener("resume", onResume);
        setShowBufferState(false);
        if (timeout) {
          clearTimeout(timeout);
        }
        stopped = true;
      };
    }, [bufferStateDelayInMilliseconds, player.emitter]);
    (0, import_react104.useImperativeHandle)(ref, () => {
      const methods = {
        play,
        pause: () => {
          setHasPausedToResume(false);
          player.pause();
        },
        toggle,
        getContainerNode: () => container2.current,
        getCurrentFrame: player.getCurrentFrame,
        isPlaying: player.isPlaying,
        seekTo: (f) => {
          const lastFrame = durationInFrames - 1;
          const frameToSeekTo = Math.max(0, Math.min(lastFrame, f));
          if (player.isPlaying()) {
            const pauseToResume = frameToSeekTo !== lastFrame || loop;
            setHasPausedToResume(pauseToResume);
            player.pause();
          }
          if (frameToSeekTo === lastFrame && !loop) {
            player.emitter.dispatchEnded();
          }
          player.seek(frameToSeekTo);
        },
        isFullscreen: () => {
          const { current } = container2;
          if (!current) {
            return false;
          }
          return document.fullscreenElement === current || document.webkitFullscreenElement === current;
        },
        requestFullscreen,
        exitFullscreen,
        getVolume: () => {
          if (playerMuted) {
            return 0;
          }
          return mediaVolume;
        },
        setVolume: (vol) => {
          if (typeof vol !== "number") {
            throw new TypeError(`setVolume() takes a number, got value of type ${typeof vol}`);
          }
          if (isNaN(vol)) {
            throw new TypeError(`setVolume() got a number that is NaN. Volume must be between 0 and 1.`);
          }
          if (vol < 0 || vol > 1) {
            throw new TypeError(`setVolume() got a number that is out of range. Must be between 0 and 1, got ${vol}`);
          }
          setMediaVolume(vol);
        },
        isMuted: () => isMuted,
        mute: () => {
          setPlayerMuted(true);
        },
        unmute: () => {
          setPlayerMuted(false);
        },
        getScale: () => scale,
        pauseAndReturnToPlayStart: () => {
          player.pauseAndReturnToPlayStart();
        }
      };
      return Object.assign(player.emitter, methods);
    }, [
      durationInFrames,
      exitFullscreen,
      loop,
      playerMuted,
      isMuted,
      mediaVolume,
      player,
      play,
      requestFullscreen,
      setPlayerMuted,
      setMediaVolume,
      toggle,
      scale
    ]);
    const VideoComponent = video ? video.component : null;
    const outerStyle = (0, import_react104.useMemo)(() => {
      return calculateOuterStyle({
        canvasSize,
        config,
        style: style2,
        overflowVisible,
        layout
      });
    }, [canvasSize, config, layout, overflowVisible, style2]);
    const outer = (0, import_react104.useMemo)(() => {
      return calculateOuter({ config, layout, scale, overflowVisible });
    }, [config, layout, overflowVisible, scale]);
    const containerStyle3 = (0, import_react104.useMemo)(() => {
      return calculateContainerStyle({
        config,
        layout,
        scale,
        overflowVisible
      });
    }, [config, layout, overflowVisible, scale]);
    const playerPause = player.pause;
    const playerDispatchError = player.emitter.dispatchError;
    const onError = (0, import_react104.useCallback)((error2) => {
      playerPause();
      playerDispatchError(error2);
    }, [playerDispatchError, playerPause]);
    const onFullscreenButtonClick = (0, import_react104.useCallback)((e) => {
      e.stopPropagation();
      requestFullscreen();
    }, [requestFullscreen]);
    const onExitFullscreenButtonClick = (0, import_react104.useCallback)((e) => {
      e.stopPropagation();
      exitFullscreen();
    }, [exitFullscreen]);
    const onSingleClick = (0, import_react104.useCallback)((e) => {
      const rightClick = e instanceof MouseEvent ? e.button === 2 : e.nativeEvent.button;
      if (rightClick) {
        return;
      }
      toggle(e);
    }, [toggle]);
    const onSeekStart = (0, import_react104.useCallback)(() => {
      setSeeking(true);
    }, []);
    const onSeekEnd = (0, import_react104.useCallback)(() => {
      setSeeking(false);
    }, []);
    const onDoubleClick = (0, import_react104.useCallback)(() => {
      if (isFullscreen) {
        exitFullscreen();
      } else {
        requestFullscreen();
      }
    }, [exitFullscreen, isFullscreen, requestFullscreen]);
    const { handlePointerDown, handleDoubleClick } = useClickPreventionOnDoubleClick(onSingleClick, onDoubleClick, doubleClickToFullscreen && allowFullscreen && supportsFullScreen);
    (0, import_react104.useEffect)(() => {
      if (shouldAutoplay) {
        play();
        setShouldAutoPlay(false);
      }
    }, [play, shouldAutoplay]);
    const loadingMarkup = (0, import_react104.useMemo)(() => {
      return renderLoading ? renderLoading({
        height: outerStyle.height,
        width: outerStyle.width,
        isBuffering: showBufferIndicator
      }) : null;
    }, [outerStyle.height, outerStyle.width, renderLoading, showBufferIndicator]);
    const currentScale = (0, import_react104.useMemo)(() => {
      return {
        type: "scale",
        scale
      };
    }, [scale]);
    if (!config) {
      return null;
    }
    const poster = renderPoster ? renderPoster({
      height: posterFillMode === "player-size" ? outerStyle.height : config.height,
      width: posterFillMode === "player-size" ? outerStyle.width : config.width,
      isBuffering: showBufferIndicator
    }) : null;
    if (poster === void 0) {
      throw new TypeError("renderPoster() must return a React element, but undefined was returned");
    }
    const shouldShowPoster = poster && [
      showPosterWhenPaused && !player.isPlaying() && !seeking,
      showPosterWhenEnded && frame === durationInFrames - 1 && !player.isPlaying(),
      showPosterWhenUnplayed && !hasPlayed && !player.isPlaying(),
      showPosterWhenBuffering && showBufferIndicator && player.isPlaying(),
      showPosterWhenBufferingAndPaused && showBufferIndicator && !player.isPlaying()
    ].some(Boolean);
    const { left, top, width, height, ...outerWithoutScale } = outer;
    const content = /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)(import_jsx_runtime54.Fragment, {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)("div", {
          style: outer,
          onPointerDown: clickToPlay ? handlePointerDown : void 0,
          onDoubleClick: doubleClickToFullscreen ? handleDoubleClick : void 0,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime54.jsxs)("div", {
              style: containerStyle3,
              className: playerCssClassname(overrideInternalClassName),
              children: [
                VideoComponent ? /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(ErrorBoundary, {
                  onError,
                  errorFallback,
                  children: /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(Internals.CurrentScaleContext.Provider, {
                    value: currentScale,
                    children: /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(VideoComponent, {
                      ...video?.props ?? {},
                      ...inputProps ?? {}
                    })
                  })
                }) : null,
                shouldShowPoster && posterFillMode === "composition-size" ? /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("div", {
                  style: {
                    ...outerWithoutScale,
                    width: config.width,
                    height: config.height
                  },
                  onPointerDown: clickToPlay ? handlePointerDown : void 0,
                  onDoubleClick: doubleClickToFullscreen ? handleDoubleClick : void 0,
                  children: poster
                }) : null
              ]
            }),
            /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(RenderWarningIfBlacklist, {})
          ]
        }),
        shouldShowPoster && posterFillMode === "player-size" ? /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("div", {
          style: outer,
          onPointerDown: clickToPlay ? handlePointerDown : void 0,
          onDoubleClick: doubleClickToFullscreen ? handleDoubleClick : void 0,
          children: poster
        }) : null,
        controls ? /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(Controls, {
          fps: config.fps,
          playing,
          toggle,
          durationInFrames: config.durationInFrames,
          containerRef: container2,
          onFullscreenButtonClick,
          isFullscreen,
          allowFullscreen,
          showVolumeControls,
          onExitFullscreenButtonClick,
          spaceKeyToPlayOrPause,
          onSeekEnd,
          onSeekStart,
          inFrame,
          outFrame,
          initiallyShowControls,
          canvasSize,
          renderFullscreenButton,
          renderPlayPauseButton,
          alwaysShowControls,
          showPlaybackRateControl,
          buffering: showBufferIndicator,
          hideControlsWhenPointerDoesntMove,
          onDoubleClick: doubleClickToFullscreen ? handleDoubleClick : void 0,
          onPointerDown: clickToPlay ? handlePointerDown : void 0,
          renderMuteButton,
          renderVolumeSlider,
          renderCustomControls
        }) : null
      ]
    });
    if (noSuspense || IS_NODE && !doesReactVersionSupportSuspense) {
      return /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("div", {
        ref: container2,
        style: outerStyle,
        className: className2,
        children: content
      });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime54.jsx)("div", {
      ref: container2,
      style: outerStyle,
      className: className2,
      children: /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(import_react104.Suspense, {
        fallback: loadingMarkup,
        children: content
      })
    });
  };
  var PlayerUI_default = (0, import_react104.forwardRef)(PlayerUI);
  var DEFAULT_VOLUME_PERSISTENCE_KEY = "remotion.volumePreference";
  var persistVolume = (volume, logLevel, volumePersistenceKey) => {
    if (typeof window === "undefined") {
      return;
    }
    try {
      window.localStorage.setItem(volumePersistenceKey ?? DEFAULT_VOLUME_PERSISTENCE_KEY, String(volume));
    } catch (e) {
      Internals.Log.error({ logLevel, tag: null }, "Could not persist volume", e);
    }
  };
  var getPreferredVolume = (volumePersistenceKey) => {
    if (typeof window === "undefined") {
      return 1;
    }
    try {
      const val = window.localStorage.getItem(volumePersistenceKey ?? DEFAULT_VOLUME_PERSISTENCE_KEY);
      return val ? Number(val) : 1;
    } catch {
      return 1;
    }
  };
  var PLAYER_COMP_ID = "player-comp";
  var SharedPlayerContexts = ({
    children,
    timelineContext,
    playbackRateContext,
    fps,
    compositionHeight,
    compositionWidth,
    durationInFrames,
    component,
    numberOfSharedAudioTags,
    initiallyMuted,
    logLevel,
    audioLatencyHint,
    sampleRate,
    volumePersistenceKey,
    initialVolume,
    inputProps,
    audioEnabled,
    _experimentalKeepAudioContextAlive
  }) => {
    const persistVolumeToStorage = initialVolume === void 0;
    const compositionManagerContext = (0, import_react117.useMemo)(() => {
      const context = {
        compositions: [
          {
            component,
            durationInFrames,
            height: compositionHeight,
            width: compositionWidth,
            fps,
            id: PLAYER_COMP_ID,
            nonce: [[0, 777]],
            folderName: null,
            parentFolderName: null,
            schema: null,
            calculateMetadata: null,
            stack: null
          }
        ],
        folders: [],
        currentCompositionMetadata: {
          defaultCodec: null,
          defaultOutName: null,
          defaultPixelFormat: null,
          defaultProResProfile: null,
          defaultSampleRate: null,
          defaultVideoImageFormat: null,
          durationInFrames,
          fps,
          height: compositionHeight,
          width: compositionWidth,
          props: inputProps
        },
        canvasContent: { type: "composition", compositionId: "player-comp" }
      };
      return context;
    }, [
      component,
      durationInFrames,
      compositionHeight,
      compositionWidth,
      fps,
      inputProps
    ]);
    const [playerMuted, setPlayerMuted] = (0, import_react117.useState)(() => initiallyMuted);
    const [mediaVolume, setMediaVolume] = (0, import_react117.useState)(() => persistVolumeToStorage ? getPreferredVolume(volumePersistenceKey ?? null) : initialVolume);
    const mediaVolumeContextValue = (0, import_react117.useMemo)(() => {
      return {
        playerMuted,
        mediaVolume
      };
    }, [playerMuted, mediaVolume]);
    const audioContextWasCreated = (0, import_react117.useRef)(false);
    const shouldCreateAudioContext = audioContextWasCreated.current || audioEnabled && !playerMuted && mediaVolume > 0;
    audioContextWasCreated.current = shouldCreateAudioContext;
    const setMediaVolumeAndPersist = (0, import_react117.useCallback)((vol) => {
      setMediaVolume(vol);
      if (persistVolumeToStorage) {
        persistVolume(vol, logLevel, volumePersistenceKey ?? null);
      }
    }, [persistVolumeToStorage, logLevel, volumePersistenceKey]);
    const setMediaVolumeContextValue = (0, import_react117.useMemo)(() => {
      return {
        setPlayerMuted,
        setMediaVolume: setMediaVolumeAndPersist
      };
    }, [setMediaVolumeAndPersist]);
    const logLevelContext = (0, import_react117.useMemo)(() => {
      return {
        logLevel,
        mountTime: Date.now()
      };
    }, [logLevel]);
    const env = (0, import_react117.useMemo)(() => {
      return {
        isPlayer: true,
        isRendering: false,
        isStudio: false,
        isClientSideRendering: false,
        isReadOnlyStudio: false
      };
    }, []);
    const frameRef = (0, import_react117.useRef)(timelineContext.frame);
    frameRef.current = timelineContext.frame;
    const timelineImperativeContextValue = (0, import_react117.useMemo)(() => {
      return {
        frameRef,
        imperativePlaying: timelineContext.imperativePlaying,
        audioAndVideoTags: timelineContext.audioAndVideoTags
      };
    }, [timelineContext.audioAndVideoTags, timelineContext.imperativePlaying]);
    return /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(Internals.RemotionEnvironmentContext.Provider, {
      value: env,
      children: /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(Internals.LogLevelContext.Provider, {
        value: logLevelContext,
        children: /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(Internals.CanUseRemotionHooksProvider, {
          children: /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(Internals.AbsoluteTimeContext.Provider, {
            value: timelineContext,
            children: /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(Internals.PlaybackRateContext.Provider, {
              value: playbackRateContext,
              children: /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(CoreTimelineImperativeContextProvider, {
                value: timelineImperativeContextValue,
                children: /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(Internals.TimelineContext.Provider, {
                  value: timelineContext,
                  children: /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(Internals.CompositionManager.Provider, {
                    value: compositionManagerContext,
                    children: /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(Internals.PrefetchProvider, {
                      children: /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(Internals.DurationsContextProvider, {
                        children: /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(Internals.MediaVolumeContext.Provider, {
                          value: mediaVolumeContextValue,
                          children: /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(Internals.SetMediaVolumeContext.Provider, {
                            value: setMediaVolumeContextValue,
                            children: /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(Internals.BufferingProvider, {
                              children: /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(Internals.SharedAudioContextProvider, {
                                audioLatencyHint,
                                audioEnabled: shouldCreateAudioContext,
                                previewSampleRate: sampleRate,
                                _experimentalKeepAudioContextAlive,
                                children: /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(Internals.SharedAudioTagsContextProvider, {
                                  numberOfAudioTags: numberOfSharedAudioTags,
                                  children
                                })
                              })
                            })
                          })
                        })
                      })
                    })
                  })
                })
              })
            })
          })
        })
      })
    });
  };
  var warningShown = false;
  var acknowledgeRemotionLicenseMessage = (acknowledge, logLevel) => {
    if (acknowledge) {
      return;
    }
    if (warningShown) {
      return;
    }
    warningShown = true;
    Internals.Log.warn({ logLevel, tag: null }, "Note: Some companies are required to obtain a license to use Remotion. See: https://remotion.dev/license\nPass the `acknowledgeRemotionLicense` prop to `<Player />` function to make this message disappear.");
  };
  var validateSingleFrame = (frame, variableName) => {
    if (typeof frame === "undefined" || frame === null) {
      return frame ?? null;
    }
    if (typeof frame !== "number") {
      throw new TypeError(`"${variableName}" must be a number, but is ${JSON.stringify(frame)}`);
    }
    if (Number.isNaN(frame)) {
      throw new TypeError(`"${variableName}" must not be NaN, but is ${JSON.stringify(frame)}`);
    }
    if (!Number.isFinite(frame)) {
      throw new TypeError(`"${variableName}" must be finite, but is ${JSON.stringify(frame)}`);
    }
    if (frame % 1 !== 0) {
      throw new TypeError(`"${variableName}" must be an integer, but is ${JSON.stringify(frame)}`);
    }
    return frame;
  };
  var validateInOutFrames = ({
    inFrame,
    durationInFrames,
    outFrame
  }) => {
    const validatedInFrame = validateSingleFrame(inFrame, "inFrame");
    const validatedOutFrame = validateSingleFrame(outFrame, "outFrame");
    if (validatedInFrame === null && validatedOutFrame === null) {
      return;
    }
    if (validatedInFrame !== null && validatedInFrame > durationInFrames - 1) {
      throw new Error("inFrame must be less than (durationInFrames - 1), but is " + validatedInFrame);
    }
    if (validatedOutFrame !== null && validatedOutFrame > durationInFrames - 1) {
      throw new Error("outFrame must be less than (durationInFrames - 1), but is " + validatedOutFrame);
    }
    if (validatedInFrame !== null && validatedInFrame < 0) {
      throw new Error("inFrame must be greater than 0, but is " + validatedInFrame);
    }
    if (validatedOutFrame !== null && validatedOutFrame <= 0) {
      throw new Error(`outFrame must be greater than 0, but is ${validatedOutFrame}. If you want to render a single frame, use <Thumbnail /> instead.`);
    }
    if (validatedOutFrame !== null && validatedInFrame !== null && validatedOutFrame <= validatedInFrame) {
      throw new Error("outFrame must be greater than inFrame, but is " + validatedOutFrame + " <= " + validatedInFrame);
    }
  };
  var validateInitialFrame = ({
    initialFrame,
    durationInFrames
  }) => {
    if (typeof durationInFrames !== "number") {
      throw new Error(`\`durationInFrames\` must be a number, but is ${JSON.stringify(durationInFrames)}`);
    }
    if (typeof initialFrame === "undefined") {
      return;
    }
    if (typeof initialFrame !== "number") {
      throw new Error(`\`initialFrame\` must be a number, but is ${JSON.stringify(initialFrame)}`);
    }
    if (Number.isNaN(initialFrame)) {
      throw new Error(`\`initialFrame\` must be a number, but is NaN`);
    }
    if (!Number.isFinite(initialFrame)) {
      throw new Error(`\`initialFrame\` must be a number, but is Infinity`);
    }
    if (initialFrame % 1 !== 0) {
      throw new Error(`\`initialFrame\` must be an integer, but is ${JSON.stringify(initialFrame)}`);
    }
    if (initialFrame > durationInFrames - 1) {
      throw new Error(`\`initialFrame\` must be less or equal than \`durationInFrames - 1\`, but is ${JSON.stringify(initialFrame)}`);
    }
  };
  var validatePlaybackRate = (playbackRate) => {
    if (playbackRate === void 0) {
      return;
    }
    if (playbackRate > 10) {
      throw new Error(`The highest possible playback rate is 10. You passed: ${playbackRate}`);
    }
    if (playbackRate < -10) {
      throw new Error(`The lowest possible playback rate is -10. You passed: ${playbackRate}`);
    }
    if (playbackRate === 0) {
      throw new Error(`A playback rate of 0 is not supported.`);
    }
  };
  var validateFps3 = NoReactInternals.validateFps;
  var validateDimension3 = NoReactInternals.validateDimension;
  var validateDurationInFrames3 = NoReactInternals.validateDurationInFrames;
  var validateDefaultAndInputProps3 = NoReactInternals.validateDefaultAndInputProps;
  var componentOrNullIfLazy = (props) => {
    if ("component" in props) {
      return props.component;
    }
    return null;
  };
  var PlayerFn = ({
    durationInFrames,
    compositionHeight,
    compositionWidth,
    fps,
    inputProps,
    style: style2,
    controls = false,
    loop = false,
    autoPlay = false,
    showVolumeControls = true,
    allowFullscreen = true,
    clickToPlay,
    doubleClickToFullscreen = false,
    spaceKeyToPlayOrPause = true,
    moveToBeginningWhenEnded = true,
    numberOfSharedAudioTags = 5,
    errorFallback = () => "\u26A0\uFE0F",
    playbackRate = 1,
    renderLoading,
    className: className2,
    showPosterWhenUnplayed,
    showPosterWhenEnded,
    showPosterWhenPaused,
    showPosterWhenBuffering,
    showPosterWhenBufferingAndPaused,
    initialFrame,
    renderPoster,
    inFrame,
    outFrame,
    initiallyShowControls,
    renderFullscreenButton,
    renderPlayPauseButton,
    renderVolumeSlider,
    renderCustomControls,
    alwaysShowControls = false,
    initiallyMuted = false,
    showPlaybackRateControl = false,
    posterFillMode = "player-size",
    bufferStateDelayInMilliseconds,
    hideControlsWhenPointerDoesntMove = true,
    overflowVisible = false,
    renderMuteButton,
    browserMediaControlsBehavior: passedBrowserMediaControlsBehavior,
    overrideInternalClassName,
    logLevel = "info",
    noSuspense,
    acknowledgeRemotionLicense,
    audioLatencyHint = "playback",
    sampleRate = 48e3,
    volumePersistenceKey,
    initialVolume,
    _experimentalKeepAudioContextAlive = false,
    ...componentProps
  }, ref) => {
    if (typeof window !== "undefined") {
      window.remotion_isPlayer = true;
    }
    if (componentProps.defaultProps !== void 0) {
      throw new Error("The <Player /> component does not accept `defaultProps`, but some were passed. Use `inputProps` instead.");
    }
    const componentForValidation = componentOrNullIfLazy(componentProps);
    if (componentForValidation?.type === Composition) {
      throw new TypeError(`'component' should not be an instance of <Composition/>. Pass the React component directly, and set the duration, fps and dimensions as separate props. See https://www.remotion.dev/docs/player/examples for an example.`);
    }
    if (componentForValidation === Composition) {
      throw new TypeError(`'component' must not be the 'Composition' component. Pass your own React component directly, and set the duration, fps and dimensions as separate props. See https://www.remotion.dev/docs/player/examples for an example.`);
    }
    (0, import_react103.useState)(() => acknowledgeRemotionLicenseMessage(Boolean(acknowledgeRemotionLicense), logLevel));
    const component = Internals.useLazyComponent({
      compProps: componentProps,
      componentName: "Player",
      noSuspense: Boolean(noSuspense)
    });
    validateInitialFrame({ initialFrame, durationInFrames });
    const [frame, setFrame] = (0, import_react103.useState)(() => ({
      [PLAYER_COMP_ID]: initialFrame ?? 0
    }));
    const [playing, setPlaying] = (0, import_react103.useState)(false);
    const rootRef = (0, import_react103.useRef)(null);
    const audioAndVideoTags = (0, import_react103.useRef)([]);
    const imperativePlaying = (0, import_react103.useRef)(false);
    const [currentPlaybackRate, setCurrentPlaybackRate] = (0, import_react103.useState)(playbackRate);
    if (typeof compositionHeight !== "number") {
      throw new TypeError(`'compositionHeight' must be a number but got '${typeof compositionHeight}' instead`);
    }
    if (typeof compositionWidth !== "number") {
      throw new TypeError(`'compositionWidth' must be a number but got '${typeof compositionWidth}' instead`);
    }
    validateDimension3(compositionHeight, "compositionHeight", "of the <Player /> component");
    validateDimension3(compositionWidth, "compositionWidth", "of the <Player /> component");
    validateDurationInFrames3(durationInFrames, {
      component: "of the <Player/> component",
      allowFloats: false
    });
    validateFps3(fps, "as a prop of the <Player/> component", false);
    validateDefaultAndInputProps3(inputProps, "inputProps", null);
    validateInOutFrames({
      durationInFrames,
      inFrame,
      outFrame
    });
    if (typeof controls !== "boolean" && typeof controls !== "undefined") {
      throw new TypeError(`'controls' must be a boolean or undefined but got '${typeof controls}' instead`);
    }
    if (typeof autoPlay !== "boolean" && typeof autoPlay !== "undefined") {
      throw new TypeError(`'autoPlay' must be a boolean or undefined but got '${typeof autoPlay}' instead`);
    }
    if (typeof loop !== "boolean" && typeof loop !== "undefined") {
      throw new TypeError(`'loop' must be a boolean or undefined but got '${typeof loop}' instead`);
    }
    if (typeof doubleClickToFullscreen !== "boolean" && typeof doubleClickToFullscreen !== "undefined") {
      throw new TypeError(`'doubleClickToFullscreen' must be a boolean or undefined but got '${typeof doubleClickToFullscreen}' instead`);
    }
    if (typeof showVolumeControls !== "boolean" && typeof showVolumeControls !== "undefined") {
      throw new TypeError(`'showVolumeControls' must be a boolean or undefined but got '${typeof showVolumeControls}' instead`);
    }
    if (typeof allowFullscreen !== "boolean" && typeof allowFullscreen !== "undefined") {
      throw new TypeError(`'allowFullscreen' must be a boolean or undefined but got '${typeof allowFullscreen}' instead`);
    }
    if (typeof clickToPlay !== "boolean" && typeof clickToPlay !== "undefined") {
      throw new TypeError(`'clickToPlay' must be a boolean or undefined but got '${typeof clickToPlay}' instead`);
    }
    if (typeof spaceKeyToPlayOrPause !== "boolean" && typeof spaceKeyToPlayOrPause !== "undefined") {
      throw new TypeError(`'spaceKeyToPlayOrPause' must be a boolean or undefined but got '${typeof spaceKeyToPlayOrPause}' instead`);
    }
    if (typeof sampleRate !== "number" || !Number.isFinite(sampleRate) || Number.isNaN(sampleRate) || sampleRate <= 0 || sampleRate % 1 !== 0) {
      throw new TypeError(`'sampleRate' must be a positive integer but got '${sampleRate}' instead`);
    }
    if (typeof initialVolume !== "undefined" && typeof initialVolume !== "number") {
      throw new TypeError(`'initialVolume' must be a number or undefined but got '${typeof initialVolume}' instead`);
    }
    if (typeof initialVolume === "number" && (!Number.isFinite(initialVolume) || Number.isNaN(initialVolume) || initialVolume < 0 || initialVolume > 1)) {
      throw new TypeError(`'initialVolume' must be between 0 and 1 but got '${initialVolume}' instead`);
    }
    if (typeof numberOfSharedAudioTags !== "number" || numberOfSharedAudioTags % 1 !== 0 || !Number.isFinite(numberOfSharedAudioTags) || Number.isNaN(numberOfSharedAudioTags) || numberOfSharedAudioTags < 0) {
      throw new TypeError(`'numberOfSharedAudioTags' must be an integer but got '${numberOfSharedAudioTags}' instead`);
    }
    validatePlaybackRate(currentPlaybackRate);
    (0, import_react103.useEffect)(() => {
      setCurrentPlaybackRate(playbackRate);
    }, [playbackRate]);
    (0, import_react103.useImperativeHandle)(ref, () => rootRef.current, []);
    (0, import_react103.useState)(() => {
      Internals.playbackLogging({
        logLevel,
        message: `[player] Mounting <Player>. User agent = ${typeof navigator === "undefined" ? "server" : navigator.userAgent}`,
        tag: "player",
        mountTime: Date.now()
      });
    });
    const timelineContextValue = (0, import_react103.useMemo)(() => {
      return {
        frame,
        playing,
        imperativePlaying,
        audioAndVideoTags
      };
    }, [frame, playing]);
    const playbackRateContextValue = (0, import_react103.useMemo)(() => {
      return {
        playbackRate: currentPlaybackRate,
        setPlaybackRate: setCurrentPlaybackRate
      };
    }, [currentPlaybackRate]);
    const setTimelineContextValue = (0, import_react103.useMemo)(() => {
      return {
        setFrame,
        setPlaying
      };
    }, [setFrame]);
    if (typeof window !== "undefined") {
      (0, import_react103.useLayoutEffect)(() => {
        Internals.CSSUtils.injectCSS(Internals.CSSUtils.makeDefaultPreviewCSS(`.${playerCssClassname(overrideInternalClassName)}`, "#fff"));
      }, [overrideInternalClassName]);
    }
    const actualInputProps = (0, import_react103.useMemo)(() => inputProps ?? {}, [inputProps]);
    const browserMediaControlsBehavior = (0, import_react103.useMemo)(() => {
      return passedBrowserMediaControlsBehavior ?? {
        mode: "prevent-media-session"
      };
    }, [passedBrowserMediaControlsBehavior]);
    return /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(Internals.IsPlayerContextProvider, {
      children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(SharedPlayerContexts, {
        timelineContext: timelineContextValue,
        playbackRateContext: playbackRateContextValue,
        component,
        compositionHeight,
        compositionWidth,
        durationInFrames,
        fps,
        numberOfSharedAudioTags,
        initiallyMuted,
        logLevel,
        audioLatencyHint,
        sampleRate,
        _experimentalKeepAudioContextAlive,
        volumePersistenceKey,
        initialVolume,
        inputProps: actualInputProps,
        audioEnabled: true,
        children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(Internals.SetTimelineContext.Provider, {
          value: setTimelineContextValue,
          children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(PlayerEmitterProvider, {
            currentPlaybackRate,
            children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(PlayerUI_default, {
              ref: rootRef,
              posterFillMode,
              renderLoading,
              autoPlay: Boolean(autoPlay),
              loop: Boolean(loop),
              controls: Boolean(controls),
              errorFallback,
              style: style2,
              inputProps: actualInputProps,
              allowFullscreen: Boolean(allowFullscreen),
              moveToBeginningWhenEnded: Boolean(moveToBeginningWhenEnded),
              clickToPlay: typeof clickToPlay === "boolean" ? clickToPlay : Boolean(controls),
              showVolumeControls: Boolean(showVolumeControls),
              doubleClickToFullscreen: Boolean(doubleClickToFullscreen),
              spaceKeyToPlayOrPause: Boolean(spaceKeyToPlayOrPause),
              playbackRate: currentPlaybackRate,
              className: className2 ?? void 0,
              showPosterWhenUnplayed: Boolean(showPosterWhenUnplayed),
              showPosterWhenEnded: Boolean(showPosterWhenEnded),
              showPosterWhenPaused: Boolean(showPosterWhenPaused),
              showPosterWhenBuffering: Boolean(showPosterWhenBuffering),
              showPosterWhenBufferingAndPaused: Boolean(showPosterWhenBufferingAndPaused),
              renderPoster,
              inFrame: inFrame ?? null,
              outFrame: outFrame ?? null,
              initiallyShowControls: initiallyShowControls ?? true,
              renderFullscreen: renderFullscreenButton ?? null,
              renderPlayPauseButton: renderPlayPauseButton ?? null,
              renderMuteButton: renderMuteButton ?? null,
              renderVolumeSlider: renderVolumeSlider ?? null,
              renderCustomControls: renderCustomControls ?? null,
              alwaysShowControls,
              showPlaybackRateControl,
              bufferStateDelayInMilliseconds: bufferStateDelayInMilliseconds ?? 300,
              hideControlsWhenPointerDoesntMove,
              overflowVisible,
              browserMediaControlsBehavior,
              overrideInternalClassName: overrideInternalClassName ?? void 0,
              noSuspense: Boolean(noSuspense)
            })
          })
        })
      })
    });
  };
  var forward = import_react103.forwardRef;
  var Player = forward(PlayerFn);
  var useThumbnail = () => {
    const emitter = (0, import_react120.useContext)(ThumbnailEmitterContext);
    if (!emitter) {
      throw new TypeError("Expected Player event emitter context");
    }
    const returnValue = (0, import_react120.useMemo)(() => {
      return {
        emitter
      };
    }, [emitter]);
    return returnValue;
  };
  var reactVersion2 = import_react119.default.version.split(".")[0];
  if (reactVersion2 === "0") {
    throw new Error(`Version ${reactVersion2} of "react" is not supported by Remotion`);
  }
  var doesReactVersionSupportSuspense2 = parseInt(reactVersion2, 10) >= 18;
  var ThumbnailUI = ({
    style: style2,
    inputProps,
    errorFallback,
    renderLoading,
    className: className2,
    overflowVisible,
    noSuspense,
    overrideInternalClassName
  }, ref) => {
    const config = Internals.useUnsafeVideoConfig();
    const video = Internals.useVideo();
    const container2 = (0, import_react119.useRef)(null);
    const canvasSize = useElementSize(container2, {
      triggerOnWindowResize: false,
      shouldApplyCssTransforms: false
    });
    const layout = (0, import_react119.useMemo)(() => {
      if (!config || !canvasSize) {
        return null;
      }
      return calculateCanvasTransformation({
        canvasSize,
        compositionHeight: config.height,
        compositionWidth: config.width,
        previewSize: "auto"
      });
    }, [canvasSize, config]);
    const scale = layout?.scale ?? 1;
    const thumbnail = useThumbnail();
    useBufferStateEmitter(thumbnail.emitter);
    (0, import_react119.useImperativeHandle)(ref, () => {
      const methods = {
        getContainerNode: () => container2.current,
        getScale: () => scale
      };
      return Object.assign(thumbnail.emitter, methods);
    }, [scale, thumbnail.emitter]);
    const VideoComponent = video ? video.component : null;
    const outerStyle = (0, import_react119.useMemo)(() => {
      return calculateOuterStyle({
        config,
        style: style2,
        canvasSize,
        overflowVisible,
        layout
      });
    }, [canvasSize, config, layout, overflowVisible, style2]);
    const outer = (0, import_react119.useMemo)(() => {
      return calculateOuter({ config, layout, scale, overflowVisible });
    }, [config, layout, overflowVisible, scale]);
    const containerStyle3 = (0, import_react119.useMemo)(() => {
      return calculateContainerStyle({
        config,
        layout,
        scale,
        overflowVisible
      });
    }, [config, layout, overflowVisible, scale]);
    const onError = (0, import_react119.useCallback)((error2) => {
      thumbnail.emitter.dispatchError(error2);
    }, [thumbnail.emitter]);
    const loadingMarkup = (0, import_react119.useMemo)(() => {
      return renderLoading ? renderLoading({
        height: outerStyle.height,
        width: outerStyle.width,
        isBuffering: false
      }) : null;
    }, [outerStyle.height, outerStyle.width, renderLoading]);
    const currentScaleContext = (0, import_react119.useMemo)(() => {
      return {
        type: "scale",
        scale
      };
    }, [scale]);
    if (!config) {
      return null;
    }
    const content = /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", {
      style: outer,
      children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", {
        style: containerStyle3,
        className: playerCssClassname(overrideInternalClassName),
        children: VideoComponent ? /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(ErrorBoundary, {
          onError,
          errorFallback,
          children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(Internals.CurrentScaleContext.Provider, {
            value: currentScaleContext,
            children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(VideoComponent, {
              ...video?.props ?? {},
              ...inputProps ?? {}
            })
          })
        }) : null
      })
    });
    if (noSuspense || IS_NODE && !doesReactVersionSupportSuspense2) {
      return /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", {
        ref: container2,
        style: outerStyle,
        className: className2,
        children: content
      });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("div", {
      ref: container2,
      style: outerStyle,
      className: className2,
      children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(import_react119.Suspense, {
        fallback: loadingMarkup,
        children: content
      })
    });
  };
  var ThumbnailUI_default = (0, import_react119.forwardRef)(ThumbnailUI);
  var ThumbnailFn = ({
    frameToDisplay,
    style: style2,
    inputProps,
    compositionHeight,
    compositionWidth,
    durationInFrames,
    fps,
    className: className2,
    errorFallback = () => "\u26A0\uFE0F",
    renderLoading,
    overflowVisible = false,
    overrideInternalClassName,
    logLevel = "info",
    noSuspense,
    ...componentProps
  }, ref) => {
    if (typeof window !== "undefined") {
      (0, import_react118.useLayoutEffect)(() => {
        window.remotion_isPlayer = true;
      }, []);
    }
    const rootRef = (0, import_react118.useRef)(null);
    const imperativePlaying = (0, import_react118.useRef)(false);
    const audioAndVideoTags = (0, import_react118.useRef)([]);
    const timelineState = (0, import_react118.useMemo)(() => {
      const value = {
        playing: false,
        frame: {
          [PLAYER_COMP_ID]: frameToDisplay
        },
        imperativePlaying,
        audioAndVideoTags
      };
      return value;
    }, [frameToDisplay]);
    const playbackRateContext = (0, import_react118.useMemo)(() => {
      return {
        playbackRate: 1,
        setPlaybackRate: () => {
          throw new Error("thumbnail");
        }
      };
    }, []);
    (0, import_react118.useImperativeHandle)(ref, () => rootRef.current, []);
    const Component = Internals.useLazyComponent({
      compProps: componentProps,
      componentName: "Thumbnail",
      noSuspense: Boolean(noSuspense)
    });
    const [emitter] = (0, import_react118.useState)(() => new ThumbnailEmitter());
    const passedInputProps = (0, import_react118.useMemo)(() => {
      return inputProps ?? {};
    }, [inputProps]);
    return /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(Internals.IsPlayerContextProvider, {
      children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(SharedPlayerContexts, {
        timelineContext: timelineState,
        playbackRateContext,
        component: Component,
        compositionHeight,
        compositionWidth,
        durationInFrames,
        fps,
        numberOfSharedAudioTags: 0,
        initiallyMuted: true,
        logLevel,
        audioLatencyHint: "playback",
        sampleRate: 48e3,
        inputProps: passedInputProps,
        audioEnabled: false,
        _experimentalKeepAudioContextAlive: false,
        children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(ThumbnailEmitterContext.Provider, {
          value: emitter,
          children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(ThumbnailUI_default, {
            ref: rootRef,
            className: className2,
            errorFallback,
            inputProps: passedInputProps,
            renderLoading,
            style: style2,
            overflowVisible,
            overrideInternalClassName,
            noSuspense: Boolean(noSuspense)
          })
        })
      })
    });
  };
  var forward2 = import_react118.forwardRef;
  var Thumbnail = forward2(ThumbnailFn);

  // remotion/src/props.ts
  var DEFAULT_PROPS = {
    title: "\u7528 Remotion \u505A\u89C6\u9891",
    subtitle: "\u9884\u89C8\u5373\u6700\u7EC8\u753B\u9762\uFF0C\u6240\u89C1\u5373\u6240\u5F97",
    byline: "DSH \u63D2\u4EF6 \xB7 dsh-video",
    emoji: "\u{1F3AC}",
    bg1: "#0f0c29",
    bg2: "#302b63",
    accent: "#ffd166",
    textColor: "#ffffff"
  };
  var DURATIONS = [5, 10, 15, 20];
  var FPS_LIST = [24, 30, 60];
  var RESOLUTIONS = [
    { label: "480p (854\xD7480)", width: 854, height: 480 },
    { label: "720p (1280\xD7720)", width: 1280, height: 720 },
    { label: "1080p (1920\xD71080)", width: 1920, height: 1080 }
  ];
  var KIND_LABELS = {
    Title: "\u6807\u9898\u5361",
    End: "\u7ED3\u675F\u5361"
  };
  var compositionId = (kind, seconds, fps) => `${kind}-${seconds}s-${fps}fps`;
  var fract = (x) => x - Math.floor(x);
  var rand = (i) => fract(Math.sin(i * 127.1) * 43758.5453);

  // remotion/src/components/TitleCard.tsx
  var import_jsx_runtime59 = __toESM(require_jsx_runtime(), 1);
  var FONT = '-apple-system, "Segoe UI", "Microsoft YaHei", "PingFang SC", "Noto Sans SC", sans-serif';
  var useSpringIn = (delaySeconds, config) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();
    return spring({
      frame: frame - delaySeconds * fps,
      fps,
      config: { damping: 14, ...config }
    });
  };
  var useFade = (startSeconds, durationSeconds) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();
    return interpolate(
      frame,
      [startSeconds * fps, (startSeconds + durationSeconds) * fps],
      [0, 1],
      { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    );
  };
  var Orbs = ({ props }) => {
    const frame = useCurrentFrame();
    const { fps, durationInFrames } = useVideoConfig();
    return /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(AbsoluteFill, { children: [0, 1, 2].map((i) => {
      const enter = useSpringIn(0.15 + i * 0.12, { damping: 16 });
      const drift = interpolate(frame, [0, durationInFrames], [0, 1]);
      const x = rand(i) * 100;
      const y = rand(i + 9) * 100;
      const size = 220 + rand(i + 4) * 260;
      return /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(
        "div",
        {
          style: {
            position: "absolute",
            left: `${x + Math.sin(drift * 2.2 + i * 2) * 6}%`,
            top: `${y + Math.cos(drift * 1.7 + i * 3) * 6}%`,
            width: size,
            height: size,
            borderRadius: "50%",
            background: `radial-gradient(circle at 35% 35%, ${props.accent}55, ${props.accent}00 70%)`,
            filter: "blur(30px)",
            opacity: 0.55 * enter,
            transform: `translate(-50%, -50%) scale(${0.7 + enter * 0.5})`
          }
        },
        i
      );
    }) });
  };
  var TitleCard = (props) => {
    const { fps, durationInFrames } = useVideoConfig();
    const frame = useCurrentFrame();
    const bgShift = interpolate(frame, [0, durationInFrames], [0, 1], {
      extrapolateRight: "clamp"
    });
    const emojiIn = useSpringIn(0.4, { damping: 12 });
    const barIn = useSpringIn(0.7, { damping: 18 });
    const titleIn = useSpringIn(0.95, { damping: 16 });
    const subIn = useFade(1.35, 0.4);
    const bylineIn = useFade(1.8, 0.4);
    const titleDrift = interpolate(frame, [0, durationInFrames], [0, -6], {
      extrapolateRight: "clamp"
    });
    return /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)(
      AbsoluteFill,
      {
        style: {
          background: `linear-gradient(130deg, ${props.bg1}, ${props.bg2} ${55 + bgShift * 20}%, ${props.bg1})`,
          fontFamily: FONT,
          color: props.textColor,
          overflow: "hidden"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(Orbs, { props }),
          /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)(
            AbsoluteFill,
            {
              style: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: 60
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(
                  "div",
                  {
                    style: {
                      fontSize: 104,
                      lineHeight: 1,
                      transform: `scale(${0.2 + emojiIn * 0.8}) rotate(${(1 - emojiIn) * -18}deg)`,
                      marginBottom: 26
                    },
                    children: props.emoji || "\u{1F3AC}"
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(
                  "div",
                  {
                    style: {
                      width: 40 + barIn * 150,
                      height: 8,
                      borderRadius: 4,
                      background: props.accent,
                      marginBottom: 34,
                      boxShadow: `0 0 24px ${props.accent}aa`
                    }
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(
                  "div",
                  {
                    style: {
                      fontSize: 92,
                      fontWeight: 800,
                      letterSpacing: 2,
                      lineHeight: 1.15,
                      transform: `translateY(${(1 - titleIn) * 70}px)`,
                      opacity: titleIn,
                      marginBottom: 30,
                      textShadow: "0 6px 30px rgba(0,0,0,.35)"
                    },
                    children: props.title
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(
                  "div",
                  {
                    style: {
                      fontSize: 42,
                      fontWeight: 500,
                      opacity: subIn,
                      transform: `translateY(${(1 - subIn) * 24}px)`,
                      color: props.textColor + "dd",
                      marginBottom: 26
                    },
                    children: props.subtitle
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)(
                  "div",
                  {
                    style: {
                      fontSize: 26,
                      fontWeight: 400,
                      opacity: bylineIn,
                      letterSpacing: 4,
                      color: props.textColor + "99"
                    },
                    children: [
                      "\u2014\u2014 ",
                      props.byline
                    ]
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)(
                  "div",
                  {
                    style: {
                      position: "absolute",
                      left: 40,
                      right: 40,
                      bottom: 34,
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: 15,
                      letterSpacing: 3,
                      color: props.textColor + "55",
                      transform: `translateY(${titleDrift}px)`
                    },
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("span", { children: "RE:REMOTION" }),
                      /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("span", { children: [
                        Math.round(durationInFrames / fps * 10) / 10,
                        "s"
                      ] })
                    ]
                  }
                )
              ]
            }
          )
        ]
      }
    );
  };

  // remotion/src/components/EndCard.tsx
  var import_jsx_runtime60 = __toESM(require_jsx_runtime(), 1);
  var FONT2 = '-apple-system, "Segoe UI", "Microsoft YaHei", "PingFang SC", "Noto Sans SC", sans-serif';
  var EndCard = (props) => {
    const frame = useCurrentFrame();
    const { fps, durationInFrames } = useVideoConfig();
    const fadeIn = interpolate(frame, [0, 0.5 * fps], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp"
    });
    const ringIn = spring({ frame: frame - 0.2 * fps, fps, config: { damping: 13 } });
    const titleIn = spring({ frame: frame - 0.7 * fps, fps, config: { damping: 16 } });
    const bylineIn = interpolate(frame, [1.1 * fps, 1.5 * fps], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp"
    });
    const ringSpin = interpolate(frame, [0, durationInFrames], [0, 160]);
    const pulse = interpolate(frame, [0, durationInFrames], [1, 1.12], {
      extrapolateRight: "clamp"
    });
    return /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)(
      AbsoluteFill,
      {
        style: {
          background: `radial-gradient(120% 120% at 50% 40%, ${props.bg2}, ${props.bg1} 70%)`,
          fontFamily: FONT2,
          color: props.textColor,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          overflow: "hidden",
          opacity: fadeIn
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("div", { style: { position: "relative", width: 240, height: 240, marginBottom: 44 }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(
              "div",
              {
                style: {
                  position: "absolute",
                  inset: 0,
                  borderRadius: "50%",
                  border: `5px solid ${props.accent}`,
                  boxShadow: `0 0 60px ${props.accent}66, inset 0 0 40px ${props.accent}33`,
                  transform: `scale(${0.4 + ringIn * 0.6}) rotate(${ringSpin}deg)`,
                  opacity: ringIn
                }
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(
              "div",
              {
                style: {
                  position: "absolute",
                  inset: 18,
                  borderRadius: "50%",
                  border: `2px dashed ${props.accent}aa`,
                  transform: `scale(${pulse}) rotate(${-ringSpin * 1.4}deg)`,
                  opacity: ringIn * 0.8
                }
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(
              "div",
              {
                style: {
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 96,
                  transform: `scale(${0.4 + ringIn * 0.6})`
                },
                children: props.emoji || "\u{1F44B}"
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(
            "div",
            {
              style: {
                fontSize: 110,
                fontWeight: 800,
                letterSpacing: 10,
                transform: `translateY(${(1 - titleIn) * 80}px)`,
                opacity: titleIn,
                textShadow: `0 8px 40px ${props.accent}33`
              },
              children: "\u8C22\u8C22\u89C2\u770B"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(
            "div",
            {
              style: {
                marginTop: 34,
                fontSize: 30,
                letterSpacing: 5,
                color: props.textColor + "aa",
                opacity: bylineIn,
                transform: `translateY(${(1 - bylineIn) * 20}px)`
              },
              children: props.byline
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(
            "div",
            {
              style: {
                position: "absolute",
                left: 40,
                right: 40,
                bottom: 34,
                display: "flex",
                justifyContent: "center",
                fontSize: 15,
                letterSpacing: 3,
                color: props.textColor + "55"
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("span", { children: "RE:REMOTION \xB7 DSH" })
            }
          )
        ]
      }
    );
  };

  // src/ui/b64.ts
  function encodeState(obj) {
    const bytes = new TextEncoder().encode(JSON.stringify(obj));
    let bin = "";
    for (const b3 of bytes) bin += String.fromCharCode(b3);
    return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  }
  function decodeState(s) {
    try {
      const b64 = s.replace(/-/g, "+").replace(/_/g, "/");
      const bin = atob(b64);
      const bytes = Uint8Array.from(bin, (c3) => c3.charCodeAt(0));
      return JSON.parse(new TextDecoder().decode(bytes));
    } catch (e) {
      return null;
    }
  }

  // src/ui/Studio.tsx
  var import_jsx_runtime61 = __toESM(require_jsx_runtime(), 1);
  var CSS = `
.dshv{display:flex;flex-direction:column;height:100%;box-sizing:border-box;overflow-y:auto;padding:18px 20px;gap:14px}
.dshv-head{display:flex;align-items:center;gap:10px;flex-wrap:wrap}
.dshv-title{font-size:17px;font-weight:650;color:var(--dsw-alias-label-primary)}
.dshv-badge{font-size:11px;padding:2px 9px;border-radius:999px;border:1px solid var(--dsw-alias-border-l2);color:var(--dsw-alias-label-secondary)}
.dshv-badge[data-ok="1"]{color:var(--dsw-alias-state-success-primary);border-color:var(--dsw-alias-state-success-primary)}
.dshv-badge[data-ok="0"]{color:var(--dsw-alias-state-error-primary);border-color:var(--dsw-alias-state-error-primary)}
.dshv-grid{display:grid;grid-template-columns:minmax(0,1.25fr) minmax(300px,1fr);gap:14px;align-items:start}
@media (max-width:860px){.dshv-grid{grid-template-columns:1fr}}
.dshv-card{background:var(--dsw-alias-bg-layer-2);border:1px solid var(--dsw-alias-border-l1);border-radius:12px;padding:14px}
.dshv-card-t{font-size:12px;font-weight:650;letter-spacing:.05em;color:var(--dsw-alias-label-secondary);margin-bottom:10px}
.dshv-preview{background:#000;border-radius:10px;overflow:hidden;aspect-ratio:16/9;position:relative}
.dshv-preview .dshv-player{width:100%;height:100%}
.dshv-row{display:flex;gap:8px;flex-wrap:wrap;align-items:center}
.dshv-seg{display:flex;border:1px solid var(--dsw-alias-border-l2);border-radius:8px;overflow:hidden}
.dshv-seg button{background:transparent;border:0;color:var(--dsw-alias-label-secondary);font-size:12px;padding:5px 12px;cursor:pointer}
.dshv-seg button[data-on="1"]{background:var(--dsw-alias-interactive-bg-active,var(--dsw-alias-bg-layer-1));color:var(--dsw-alias-label-primary)}
.dshv-field{margin-bottom:9px}
.dshv-field label{display:block;font-size:11px;color:var(--dsw-alias-label-secondary);margin-bottom:4px}
.dshv-inp{width:100%;box-sizing:border-box;background:var(--dsw-alias-bg-layer-1);border:1px solid var(--dsw-alias-border-l2);border-radius:7px;color:var(--dsw-alias-label-primary);font-size:13px;padding:6px 9px;outline:none}
.dshv-inp:focus{border-color:var(--dsw-alias-state-business-primary)}
.dshv-colors{display:grid;grid-template-columns:repeat(2,1fr);gap:8px}
.dshv-color{display:flex;align-items:center;gap:6px;background:var(--dsw-alias-bg-layer-1);border:1px solid var(--dsw-alias-border-l2);border-radius:7px;padding:4px 8px}
.dshv-color input{width:26px;height:26px;border:0;background:none;cursor:pointer;padding:0}
.dshv-color span{font-size:11px;color:var(--dsw-alias-label-secondary);flex:1;overflow:hidden;text-overflow:ellipsis}
.dshv-btn{border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-primary);border-radius:8px;padding:7px 16px;font-size:13px;cursor:pointer}
.dshv-btn:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover)}
.dshv-btn:disabled{opacity:.45;cursor:default}
.dshv-btn[data-tone=primary]{background:var(--dsw-alias-state-business-primary,#4c8dff);border-color:transparent;color:#fff}
.dshv-btn[data-tone=danger]{color:var(--dsw-alias-state-error-primary)}
.dshv-btn[data-tone=ghost]{background:transparent}
.dshv-prog{height:8px;border-radius:4px;background:var(--dsw-alias-bg-layer-1);overflow:hidden;margin-top:8px}
.dshv-prog i{display:block;height:100%;background:var(--dsw-alias-state-business-primary,#4c8dff);transition:width .3s}
.dshv-status{font-size:12px;line-height:18px;color:var(--dsw-alias-label-secondary);white-space:pre-wrap;word-break:break-all}
.dshv-err{font-size:12px;color:var(--dsw-alias-state-error-primary);white-space:pre-wrap;word-break:break-all}
.dshv-video{width:100%;border-radius:10px;margin-top:8px;background:#000}
.dshv-hint{font-size:11px;color:var(--dsw-alias-label-secondary);line-height:16px}
`;
  function injectCss() {
    if (typeof document === "undefined") return;
    if (document.querySelector("style[data-dshv-css]")) return;
    const el = document.createElement("style");
    el.setAttribute("data-dshv-css", "1");
    el.textContent = CSS;
    document.head.appendChild(el);
  }
  var LS = "dsh-video:studio:v1:";
  function load(key, fallback) {
    try {
      const raw = localStorage.getItem(LS + key);
      if (raw !== null) return JSON.parse(raw);
    } catch (e) {
    }
    return fallback;
  }
  function save(key, value) {
    try {
      localStorage.setItem(LS + key, JSON.stringify(value));
    } catch (e) {
    }
  }
  var Studio = ({ standalone }) => {
    const [kind, setKindState] = (0, import_react121.useState)(() => load("kind", "Title"));
    const [props, setProps] = (0, import_react121.useState)(() => ({
      ...DEFAULT_PROPS,
      ...load("props-" + load("kind", "Title"), {})
    }));
    const [seconds, setSeconds] = (0, import_react121.useState)(() => load("seconds", 5));
    const [fps, setFps] = (0, import_react121.useState)(() => load("fps", 30));
    const [resIdx, setResIdx] = (0, import_react121.useState)(() => load("resIdx", 1));
    const [ready, setReady] = (0, import_react121.useState)(null);
    const [depsError, setDepsError] = (0, import_react121.useState)(null);
    const [job, setJob] = (0, import_react121.useState)(null);
    const [busy, setBusy] = (0, import_react121.useState)(false);
    const [msg, setMsg] = (0, import_react121.useState)("");
    const pollRef = (0, import_react121.useRef)(null);
    const openedRef = (0, import_react121.useRef)(null);
    (0, import_react121.useEffect)(() => {
      injectCss();
      if (standalone) {
        const s = new URLSearchParams(location.search).get("s");
        const st = s ? decodeState(s) : null;
        if (st && typeof st === "object") {
          const o = st;
          if (o.kind) setKindState(o.kind);
          if (o.props) setProps({ ...DEFAULT_PROPS, ...o.props });
          if (o.seconds) setSeconds(o.seconds);
          if (o.fps) setFps(o.fps);
          if (typeof o.res === "number") setResIdx(o.res);
        }
      }
    }, [standalone]);
    (0, import_react121.useEffect)(() => {
      save("kind", kind);
      save("props-" + kind, props);
      save("seconds", seconds);
      save("fps", fps);
      save("resIdx", resIdx);
    }, [kind, props, seconds, fps, resIdx]);
    (0, import_react121.useEffect)(() => {
      if (!standalone) return;
      const state = { kind, props, seconds, fps, res: resIdx };
      const s = encodeState(state);
      history.replaceState(null, "", "?s=" + s);
      if (window.opener) {
        try {
          window.opener.postMessage({ type: "dsh-video:studio", payload: state }, location.origin);
        } catch (e) {
        }
      }
    }, [standalone, kind, props, seconds, fps, resIdx]);
    (0, import_react121.useEffect)(() => {
      if (standalone) return;
      const onMsg = (e) => {
        const d = e.data;
        if (d && d.type === "dsh-video:studio" && d.payload) {
          if (d.payload.kind) setKindState(d.payload.kind);
          if (d.payload.props) setProps({ ...DEFAULT_PROPS, ...d.payload.props });
        }
      };
      window.addEventListener("message", onMsg);
      return () => window.removeEventListener("message", onMsg);
    }, [standalone]);
    (0, import_react121.useEffect)(() => {
      let alive = true;
      fetch("/video/status", { cache: "no-store" }).then((r) => r.json()).then((d) => {
        if (!alive) return;
        setReady(!!d.ready);
        setDepsError(d.depsError || null);
      }).catch(() => alive && setReady(false));
      return () => {
        alive = false;
        if (pollRef.current) clearTimeout(pollRef.current);
      };
    }, []);
    (0, import_react121.useEffect)(() => {
      return () => {
        if (pollRef.current) clearTimeout(pollRef.current);
      };
    }, []);
    const setKind = (k) => {
      setKindState(k);
      setProps({ ...DEFAULT_PROPS, ...load("props-" + k, {}) });
    };
    const res = RESOLUTIONS[resIdx];
    const poll = async (id) => {
      try {
        const r = await fetch("/video/job/" + id, { cache: "no-store" });
        const d = await r.json();
        const j = d.job;
        setJob(j);
        if (j.status === "done" || j.status === "error" || j.status === "cancelled") {
          setBusy(false);
          setMsg("");
          return;
        }
      } catch (e) {
      }
      pollRef.current = window.setTimeout(() => poll(id), 1e3);
    };
    const startRender = async () => {
      if (!ready || busy) return;
      setBusy(true);
      setMsg("\u63D0\u4EA4\u6E32\u67D3\u4EFB\u52A1\u2026");
      try {
        const r = await fetch("/video/render", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            composition: compositionId(kind, seconds, fps),
            props,
            width: res.width,
            height: res.height
          })
        });
        const d = await r.json();
        if (!d.ok) {
          setMsg("");
          setDepsError(d.error || "\u6E32\u67D3\u542F\u52A8\u5931\u8D25");
          setBusy(false);
          return;
        }
        setJob(d.job);
        setMsg("\u4EFB\u52A1 " + d.id + " \u5DF2\u5165\u961F");
        poll(d.id);
      } catch (e) {
        setMsg("");
        setDepsError("\u65E0\u6CD5\u8FDE\u63A5\u6E32\u67D3\u670D\u52A1");
        setBusy(false);
      }
    };
    const cancelRender2 = async () => {
      if (!job) return;
      try {
        await fetch("/video/cancel", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ id: job.id })
        });
        setMsg("\u5DF2\u8BF7\u6C42\u53D6\u6D88");
      } catch (e) {
      }
    };
    const openStudio = () => {
      const state = { kind, props, seconds, fps, res: resIdx };
      const url = "/video/studio/?s=" + encodeState(state);
      openedRef.current = window.open(url, "_blank");
    };
    const openOutput = () => {
      if (job && job.outputUrl) window.open(job.outputUrl, "_blank");
    };
    const comp = kind === "Title" ? TitleCard : EndCard;
    const progress = job ? Math.round((job.progress || 0) * 100) : 0;
    const statusText = (0, import_react121.useMemo)(() => {
      if (!job) return "";
      switch (job.status) {
        case "queued":
          return "\u6392\u961F\u4E2D\u2026";
        case "bundling":
          return "\u6253\u5305\u5408\u6210\u4EE3\u7801\u2026" + (job.bundleProgress != null ? " " + Math.round(job.bundleProgress * 100) + "%" : "");
        case "downloading-browser":
          return "\u9996\u6B21\u4F7F\u7528\uFF1A\u4E0B\u8F7D\u6D4F\u89C8\u5668\u6E32\u67D3\u5185\u6838\u2026 " + (job.browserProgress != null ? Math.round(job.browserProgress * 100) + "%" : "");
        case "preparing":
          return "\u51C6\u5907\u5408\u6210\u2026";
        case "rendering":
          return "\u6E32\u67D3\u4E2D " + progress + "%\uFF08" + job.width + "\xD7" + job.height + "\uFF0C" + job.composition + "\uFF09";
        case "done":
          return "\u5B8C\u6210 \u2713 " + job.composition;
        case "cancelled":
          return "\u5DF2\u53D6\u6D88";
        case "error":
          return "\u6E32\u67D3\u5931\u8D25";
        default:
          return job.status;
      }
    }, [job, progress]);
    return /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: "dshv", children: [
      /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: "dshv-head", children: [
        /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("span", { className: "dshv-title", children: "\u{1F3AC} DSH \u89C6\u9891\u5DE5\u4F5C\u5BA4" }),
        /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("span", { className: "dshv-badge", "data-ok": ready === true ? "1" : "0", children: ready === null ? "\u68C0\u6D4B\u6E32\u67D3\u670D\u52A1\u2026" : ready ? "\u6E32\u67D3\u670D\u52A1\u5C31\u7EEA" : "\u6E32\u67D3\u670D\u52A1\u4E0D\u53EF\u7528" }),
        /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("span", { className: "dshv-badge", children: "Remotion 4 \xB7 \u6240\u89C1\u5373\u6240\u5F97" })
      ] }),
      depsError && /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: "dshv-err", style: { border: "1px solid var(--dsw-alias-state-error-primary)", borderRadius: 10, padding: "10px 12px" }, children: depsError }),
      /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: "dshv-grid", children: [
        /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: "dshv-card", children: [
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: "dshv-card-t", children: "\u9884\u89C8\uFF08\u5B9E\u65F6\uFF09" }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: "dshv-preview", children: /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
            Player,
            {
              className: "dshv-player",
              component: comp,
              inputProps: props,
              compositionWidth: 1280,
              compositionHeight: 720,
              durationInFrames: seconds * fps,
              fps,
              controls: true,
              loop: true,
              style: { width: "100%", height: "100%" }
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: "dshv-row", style: { marginTop: 10 }, children: /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("button", { className: "dshv-btn", onClick: openStudio, children: "\u26F6 \u5168\u5C4F\u9884\u89C8\uFF08\u65B0\u6807\u7B7E\u9875\uFF09" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: "dshv-hint", style: { marginTop: 8 }, children: "\u9884\u89C8\u65F6\u95F4\u8F74\u4E3A\u5B8C\u6574\u65F6\u957F\uFF1B\u300C\u5168\u5C4F\u9884\u89C8\u300D\u5728\u65B0\u6807\u7B7E\u9875\u6253\u5F00\u53EF\u4EA4\u4E92\u5DE5\u4F5C\u5BA4\u3002" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: "dshv-card", children: [
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: "dshv-card-t", children: "\u7F16\u8F91" }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: "dshv-field", children: [
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("label", { children: "\u7C7B\u578B" }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: "dshv-seg", children: Object.keys(KIND_LABELS).map((k) => /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("button", { "data-on": kind === k ? "1" : "0", onClick: () => setKind(k), children: KIND_LABELS[k] }, k)) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: "dshv-field", children: [
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("label", { children: "\u65F6\u957F / \u5E27\u7387" }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: "dshv-row", children: [
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: "dshv-seg", children: DURATIONS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("button", { "data-on": seconds === s ? "1" : "0", onClick: () => setSeconds(s), children: [
                s,
                "s"
              ] }, s)) }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: "dshv-seg", children: FPS_LIST.map((f) => /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("button", { "data-on": fps === f ? "1" : "0", onClick: () => setFps(f), children: [
                f,
                "fps"
              ] }, f)) })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: "dshv-field", children: [
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("label", { children: "\u5206\u8FA8\u7387\uFF08\u6E32\u67D3\uFF09" }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("select", { className: "dshv-inp", value: resIdx, onChange: (e) => setResIdx(Number(e.target.value)), children: RESOLUTIONS.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("option", { value: i, children: r.label }, i)) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: "dshv-field", children: [
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("label", { children: "\u6807\u9898" }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("input", { className: "dshv-inp", value: props.title, onChange: (e) => setProps({ ...props, title: e.target.value }) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: "dshv-field", children: [
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("label", { children: "\u526F\u6807\u9898" }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("input", { className: "dshv-inp", value: props.subtitle, onChange: (e) => setProps({ ...props, subtitle: e.target.value }) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: "dshv-field", children: [
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("label", { children: "\u7F72\u540D" }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("input", { className: "dshv-inp", value: props.byline, onChange: (e) => setProps({ ...props, byline: e.target.value }) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: "dshv-field", children: [
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("label", { children: "Emoji" }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("input", { className: "dshv-inp", value: props.emoji, maxLength: 4, onChange: (e) => setProps({ ...props, emoji: e.target.value }) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: "dshv-field", children: [
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("label", { children: "\u914D\u8272" }),
            /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: "dshv-colors", children: [
              ["bg1", "\u80CC\u666F 1"],
              ["bg2", "\u80CC\u666F 2"],
              ["accent", "\u5F3A\u8C03\u8272"],
              ["textColor", "\u6587\u5B57\u8272"]
            ].map(([key, label3]) => /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: "dshv-color", children: [
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("input", { type: "color", value: props[key], onChange: (e) => setProps({ ...props, [key]: e.target.value }) }),
              /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("span", { children: label3 })
            ] }, key)) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: "dshv-card", children: [
        /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: "dshv-card-t", children: "\u6E32\u67D3 MP4" }),
        /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: "dshv-row", children: [
          /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("button", { className: "dshv-btn", "data-tone": "primary", disabled: !ready || busy, onClick: startRender, children: busy ? "\u6E32\u67D3\u4E2D\u2026" : "\u25B6 \u6E32\u67D3 MP4" }),
          busy && job && job.status !== "done" && /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("button", { className: "dshv-btn", "data-tone": "danger", onClick: cancelRender2, children: "\u53D6\u6D88" }),
          job && job.status === "done" && job.outputUrl && /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("button", { className: "dshv-btn", onClick: openOutput, children: "\u26F6 \u5728\u65B0\u6807\u7B7E\u9875\u6253\u5F00" }),
          job && job.status === "done" && job.outputUrl && /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("a", { className: "dshv-btn", href: job.outputUrl, download: true, style: { textDecoration: "none", display: "inline-block" }, children: "\u2B07 \u4E0B\u8F7D MP4" })
        ] }),
        (job || msg) && /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: "dshv-status", style: { marginTop: 10 }, children: statusText || msg }),
        job && (job.status === "rendering" || job.status === "bundling" || job.status === "downloading-browser" || job.status === "preparing") && /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: "dshv-prog", children: /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("i", { style: { width: progress + "%" } }) }),
        job && job.status === "error" && job.error && /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: "dshv-err", style: { marginTop: 8 }, children: job.error }),
        job && job.status === "done" && job.outputUrl && /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("video", { className: "dshv-video", src: job.outputUrl, controls: true, style: { maxHeight: 420 } }),
        job && job.status === "done" && /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)("div", { className: "dshv-hint", style: { marginTop: 8 }, children: [
          "\u5DF2\u8F93\u51FA ",
          job.width,
          "\xD7",
          job.height,
          " @ ",
          fps,
          "fps \xB7 ",
          seconds,
          "s\uFF08",
          job.composition,
          "\uFF09"
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { className: "dshv-hint", children: "\u6E32\u67D3\u5728 DSH \u5BBF\u4E3B\u8FDB\u7A0B\u5B8C\u6210\uFF08@remotion/renderer\uFF0C\u9996\u6B21\u4F1A\u81EA\u52A8\u4E0B\u8F7D\u65E0\u5934\u6D4F\u89C8\u5668\u5185\u6838\uFF0C\u7EA6 110MB\uFF0C\u4EC5\u4E00\u6B21\uFF09\u3002 \u4FEE\u6539\u4EFB\u610F\u53C2\u6570\u540E\u9884\u89C8\u5373\u65F6\u66F4\u65B0\uFF1B\u70B9\u51FB\u300C\u6E32\u67D3 MP4\u300D\u540E\u6309\u6240\u9009\u5206\u8FA8\u7387\u8F93\u51FA H.264\u3002" })
    ] });
  };

  // src/studio.tsx
  var root = document.getElementById("root");
  if (root) {
    (0, import_client.createRoot)(root).render(import_react122.default.createElement(Studio, { standalone: true }));
  }
})();
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
