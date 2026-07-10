(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  371638,
  (t) => {
    "use strict";
    var e = t.i(719097),
      n = t.i(207298),
      r = t.i(152236);
    let u = (0, n.cva)("", {
      variants: {
        variant: {
          default: "",
          large: "text-lg font-semibold",
          small: "text-sm font-medium leading-none",
          h1: "lg:text-6xl text-4xl font-bold tracking-tight",
          h2: "text-4xl font-semibold tracking-tight",
          h3: "text-2xl font-semibold tracking-tight",
          h4: "text-xl font-semibold tracking-tight",
          tip: "text-xs text-muted-foreground",
          muted: "text-sm text-muted-foreground",
          numeric: "font-semibold",
        },
        color: {
          destructive: "text-destructive",
          warning: "text-orange-400",
          primary: "text-primary",
          default: "",
        },
      },
      defaultVariants: { variant: "default", color: "default" },
    });
    function i({ className: t, variant: n, color: i, ...o }) {
      return (0, e.jsx)("div", {
        "data-slot": "typography",
        className: (0, r.cn)(u({ variant: n, color: i }), t),
        ...o,
      });
    }
    t.s(["Typography", () => i]);
  },
  726381,
  (t, e, n) => {
    "use strict";
    var r = t.r(642947),
      u =
        "function" == typeof Object.is
          ? Object.is
          : function (t, e) {
              return (
                (t === e && (0 !== t || 1 / t == 1 / e)) || (t != t && e != e)
              );
            },
      i = r.useState,
      o = r.useEffect,
      a = r.useLayoutEffect,
      s = r.useDebugValue;
    function c(t) {
      var e = t.getSnapshot;
      t = t.value;
      try {
        var n = e();
        return !u(t, n);
      } catch (t) {
        return !0;
      }
    }
    var l =
      "u" < typeof window ||
      void 0 === window.document ||
      void 0 === window.document.createElement
        ? function (t, e) {
            return e();
          }
        : function (t, e) {
            var n = e(),
              r = i({ inst: { value: n, getSnapshot: e } }),
              u = r[0].inst,
              l = r[1];
            return (
              a(
                function () {
                  (u.value = n), (u.getSnapshot = e), c(u) && l({ inst: u });
                },
                [t, n, e]
              ),
              o(
                function () {
                  return (
                    c(u) && l({ inst: u }),
                    t(function () {
                      c(u) && l({ inst: u });
                    })
                  );
                },
                [t]
              ),
              s(n),
              n
            );
          };
    n.useSyncExternalStore =
      void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : l;
  },
  718315,
  (t, e, n) => {
    "use strict";
    e.exports = t.r(726381);
  },
  995218,
  (t, e, n) => {
    "use strict";
    var r = t.r(642947),
      u = t.r(718315),
      i =
        "function" == typeof Object.is
          ? Object.is
          : function (t, e) {
              return (
                (t === e && (0 !== t || 1 / t == 1 / e)) || (t != t && e != e)
              );
            },
      o = u.useSyncExternalStore,
      a = r.useRef,
      s = r.useEffect,
      c = r.useMemo,
      l = r.useDebugValue;
    n.useSyncExternalStoreWithSelector = function (t, e, n, r, u) {
      var f = a(null);
      if (null === f.current) {
        var d = { hasValue: !1, value: null };
        f.current = d;
      } else d = f.current;
      var v = o(
        t,
        (f = c(
          function () {
            function t(t) {
              if (!s) {
                if (
                  ((s = !0), (o = t), (t = r(t)), void 0 !== u && d.hasValue)
                ) {
                  var e = d.value;
                  if (u(e, t)) return (a = e);
                }
                return (a = t);
              }
              if (((e = a), i(o, t))) return e;
              var n = r(t);
              return void 0 !== u && u(e, n)
                ? ((o = t), e)
                : ((o = t), (a = n));
            }
            var o,
              a,
              s = !1,
              c = void 0 === n ? null : n;
            return [
              function () {
                return t(e());
              },
              null === c
                ? void 0
                : function () {
                    return t(c());
                  },
            ];
          },
          [e, n, r, u]
        ))[0],
        f[1]
      );
      return (
        s(
          function () {
            (d.hasValue = !0), (d.value = v);
          },
          [v]
        ),
        l(v),
        v
      );
    };
  },
  40495,
  (t, e, n) => {
    "use strict";
    e.exports = t.r(995218);
  },
]);
