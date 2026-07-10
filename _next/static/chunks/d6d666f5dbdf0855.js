(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  456882,
  949266,
  (e) => {
    "use strict";
    var r = e.i(642947);
    function o(e, r) {
      if ("function" == typeof e) return e(r);
      null != e && (e.current = r);
    }
    function t(...e) {
      return (r) => {
        let t = !1,
          l = e.map((e) => {
            let l = o(e, r);
            return t || "function" != typeof l || (t = !0), l;
          });
        if (t)
          return () => {
            for (let r = 0; r < l.length; r++) {
              let t = l[r];
              "function" == typeof t ? t() : o(e[r], null);
            }
          };
      };
    }
    function l(...e) {
      return r.useCallback(t(...e), e);
    }
    e.s(["composeRefs", () => t, "useComposedRefs", () => l], 949266);
    var n = e.i(719097);
    function s(e) {
      var o;
      let l,
        s =
          ((o = e),
          ((l = r.forwardRef((e, o) => {
            let { children: l, ...n } = e;
            if (r.isValidElement(l)) {
              var s;
              let e,
                a,
                i =
                  ((s = l),
                  (a =
                    (e = Object.getOwnPropertyDescriptor(
                      s.props,
                      "ref"
                    )?.get) &&
                    "isReactWarning" in e &&
                    e.isReactWarning)
                    ? s.ref
                    : (a =
                        (e = Object.getOwnPropertyDescriptor(s, "ref")?.get) &&
                        "isReactWarning" in e &&
                        e.isReactWarning)
                    ? s.props.ref
                    : s.props.ref || s.ref),
                c = (function (e, r) {
                  let o = { ...r };
                  for (let t in r) {
                    let l = e[t],
                      n = r[t];
                    /^on[A-Z]/.test(t)
                      ? l && n
                        ? (o[t] = (...e) => {
                            let r = n(...e);
                            return l(...e), r;
                          })
                        : l && (o[t] = l)
                      : "style" === t
                      ? (o[t] = { ...l, ...n })
                      : "className" === t &&
                        (o[t] = [l, n].filter(Boolean).join(" "));
                  }
                  return { ...e, ...o };
                })(n, l.props);
              return (
                l.type !== r.Fragment && (c.ref = o ? t(o, i) : i),
                r.cloneElement(l, c)
              );
            }
            return r.Children.count(l) > 1 ? r.Children.only(null) : null;
          })).displayName = `${o}.SlotClone`),
          l),
        a = r.forwardRef((e, o) => {
          let { children: t, ...l } = e,
            a = r.Children.toArray(t),
            i = a.find(c);
          if (i) {
            let e = i.props.children,
              t = a.map((o) =>
                o !== i
                  ? o
                  : r.Children.count(e) > 1
                  ? r.Children.only(null)
                  : r.isValidElement(e)
                  ? e.props.children
                  : null
              );
            return (0, n.jsx)(s, {
              ...l,
              ref: o,
              children: r.isValidElement(e)
                ? r.cloneElement(e, void 0, t)
                : null,
            });
          }
          return (0, n.jsx)(s, { ...l, ref: o, children: t });
        });
      return (a.displayName = `${e}.Slot`), a;
    }
    var a = s("Slot"),
      i = Symbol("radix.slottable");
    function c(e) {
      return (
        r.isValidElement(e) &&
        "function" == typeof e.type &&
        "__radixId" in e.type &&
        e.type.__radixId === i
      );
    }
    e.s(["Slot", () => a, "createSlot", () => s], 456882);
  },
  207298,
  470733,
  152236,
  (e) => {
    "use strict";
    function r() {
      for (var e, r, o = 0, t = "", l = arguments.length; o < l; o++)
        (e = arguments[o]) &&
          (r = (function e(r) {
            var o,
              t,
              l = "";
            if ("string" == typeof r || "number" == typeof r) l += r;
            else if ("object" == typeof r)
              if (Array.isArray(r)) {
                var n = r.length;
                for (o = 0; o < n; o++)
                  r[o] && (t = e(r[o])) && (l && (l += " "), (l += t));
              } else for (t in r) r[t] && (l && (l += " "), (l += t));
            return l;
          })(e)) &&
          (t && (t += " "), (t += r));
      return t;
    }
    e.s(["clsx", () => r], 470733);
    let o = (e) => ("boolean" == typeof e ? `${e}` : 0 === e ? "0" : e);
    e.s(
      [
        "cva",
        0,
        (e, t) => (l) => {
          var n;
          if ((null == t ? void 0 : t.variants) == null)
            return r(
              e,
              null == l ? void 0 : l.class,
              null == l ? void 0 : l.className
            );
          let { variants: s, defaultVariants: a } = t,
            i = Object.keys(s).map((e) => {
              let r = null == l ? void 0 : l[e],
                t = null == a ? void 0 : a[e];
              if (null === r) return null;
              let n = o(r) || o(t);
              return s[e][n];
            }),
            c =
              l &&
              Object.entries(l).reduce((e, r) => {
                let [o, t] = r;
                return void 0 === t || (e[o] = t), e;
              }, {});
          return r(
            e,
            i,
            null == t || null == (n = t.compoundVariants)
              ? void 0
              : n.reduce((e, r) => {
                  let { class: o, className: t, ...l } = r;
                  return Object.entries(l).every((e) => {
                    let [r, o] = e;
                    return Array.isArray(o)
                      ? o.includes({ ...a, ...c }[r])
                      : { ...a, ...c }[r] === o;
                  })
                    ? [...e, o, t]
                    : e;
                }, []),
            null == l ? void 0 : l.class,
            null == l ? void 0 : l.className
          );
        },
      ],
      207298
    );
    let t = (e = new Map(), r = null, o) => ({
        nextPart: e,
        validators: r,
        classGroupId: o,
      }),
      l = [],
      n = (e, r, o) => {
        if (0 == e.length - r) return o.classGroupId;
        let t = e[r],
          l = o.nextPart.get(t);
        if (l) {
          let o = n(e, r + 1, l);
          if (o) return o;
        }
        let s = o.validators;
        if (null === s) return;
        let a = 0 === r ? e.join("-") : e.slice(r).join("-"),
          i = s.length;
        for (let e = 0; e < i; e++) {
          let r = s[e];
          if (r.validator(a)) return r.classGroupId;
        }
      },
      s = (e, r) => {
        let o = t();
        for (let t in e) a(e[t], o, t, r);
        return o;
      },
      a = (e, r, o, t) => {
        let l = e.length;
        for (let n = 0; n < l; n++) i(e[n], r, o, t);
      },
      i = (e, r, o, t) => {
        "string" == typeof e
          ? c(e, r, o)
          : "function" == typeof e
          ? d(e, r, o, t)
          : m(e, r, o, t);
      },
      c = (e, r, o) => {
        ("" === e ? r : p(r, e)).classGroupId = o;
      },
      d = (e, r, o, t) => {
        u(e)
          ? a(e(t), r, o, t)
          : (null === r.validators && (r.validators = []),
            r.validators.push({ classGroupId: o, validator: e }));
      },
      m = (e, r, o, t) => {
        let l = Object.entries(e),
          n = l.length;
        for (let e = 0; e < n; e++) {
          let [n, s] = l[e];
          a(s, p(r, n), o, t);
        }
      },
      p = (e, r) => {
        let o = e,
          l = r.split("-"),
          n = l.length;
        for (let e = 0; e < n; e++) {
          let r = l[e],
            n = o.nextPart.get(r);
          n || ((n = t()), o.nextPart.set(r, n)), (o = n);
        }
        return o;
      },
      u = (e) => "isThemeGetter" in e && !0 === e.isThemeGetter,
      b = [],
      f = (e, r, o, t, l) => ({
        modifiers: e,
        hasImportantModifier: r,
        baseClassName: o,
        maybePostfixModifierPosition: t,
        isExternal: l,
      }),
      g = /\s+/,
      h = (e) => {
        let r;
        if ("string" == typeof e) return e;
        let o = "";
        for (let t = 0; t < e.length; t++)
          e[t] && (r = h(e[t])) && (o && (o += " "), (o += r));
        return o;
      },
      k = [],
      w = (e) => {
        let r = (r) => r[e] || k;
        return (r.isThemeGetter = !0), r;
      },
      x = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
      v = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
      y = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
      z = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
      j =
        /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
      C = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
      N = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
      O =
        /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
      W = (e) => y.test(e),
      G = (e) => !!e && !Number.isNaN(Number(e)),
      A = (e) => !!e && Number.isInteger(Number(e)),
      $ = (e) => e.endsWith("%") && G(e.slice(0, -1)),
      R = (e) => z.test(e),
      S = () => !0,
      E = (e) => j.test(e) && !C.test(e),
      I = () => !1,
      L = (e) => N.test(e),
      P = (e) => O.test(e),
      T = (e) => !V(e) && !H(e),
      _ = (e) =>
        e.startsWith("@container") &&
        (("/" === e[10] && void 0 !== e[11]) ||
          ("s" === e[11] && void 0 !== e[16] && e.startsWith("-size/", 10)) ||
          ("n" === e[11] && void 0 !== e[18] && e.startsWith("-normal/", 10))),
      M = (e) => et(e, ea, I),
      V = (e) => x.test(e),
      B = (e) => et(e, ei, E),
      U = (e) => et(e, ec, G),
      Z = (e) => et(e, em, S),
      q = (e) => et(e, ed, I),
      D = (e) => et(e, en, I),
      K = (e) => et(e, es, P),
      F = (e) => et(e, ep, L),
      H = (e) => v.test(e),
      J = (e) => el(e, ei),
      Q = (e) => el(e, ed),
      X = (e) => el(e, en),
      Y = (e) => el(e, ea),
      ee = (e) => el(e, es),
      er = (e) => el(e, ep, !0),
      eo = (e) => el(e, em, !0),
      et = (e, r, o) => {
        let t = x.exec(e);
        return !!t && (t[1] ? r(t[1]) : o(t[2]));
      },
      el = (e, r, o = !1) => {
        let t = v.exec(e);
        return !!t && (t[1] ? r(t[1]) : o);
      },
      en = (e) => "position" === e || "percentage" === e,
      es = (e) => "image" === e || "url" === e,
      ea = (e) => "length" === e || "size" === e || "bg-size" === e,
      ei = (e) => "length" === e,
      ec = (e) => "number" === e,
      ed = (e) => "family-name" === e,
      em = (e) => "number" === e || "weight" === e,
      ep = (e) => "shadow" === e,
      eu = ((e, ...r) => {
        let o,
          t,
          a,
          i,
          c = (e) => {
            let r = t(e);
            if (r) return r;
            let l = ((e, r) => {
              let {
                  parseClassName: o,
                  getClassGroupId: t,
                  getConflictingClassGroupIds: l,
                  sortModifiers: n,
                  postfixLookupClassGroupIds: s,
                } = r,
                a = [],
                i = e.trim().split(g),
                c = "";
              for (let e = i.length - 1; e >= 0; e -= 1) {
                let r,
                  d = i[e],
                  {
                    isExternal: m,
                    modifiers: p,
                    hasImportantModifier: u,
                    baseClassName: b,
                    maybePostfixModifierPosition: f,
                  } = o(d);
                if (m) {
                  c = d + (c.length > 0 ? " " + c : c);
                  continue;
                }
                let g = !!f;
                if (g) {
                  let e = (r = t(b.substring(0, f))) && s[r] ? t(b) : void 0;
                  e && e !== r && ((r = e), (g = !1));
                } else r = t(b);
                if (!r) {
                  if (!g || !(r = t(b))) {
                    c = d + (c.length > 0 ? " " + c : c);
                    continue;
                  }
                  g = !1;
                }
                let h =
                    0 === p.length
                      ? ""
                      : 1 === p.length
                      ? p[0]
                      : n(p).join(":"),
                  k = u ? h + "!" : h,
                  w = k + r;
                if (a.indexOf(w) > -1) continue;
                a.push(w);
                let x = l(r, g);
                for (let e = 0; e < x.length; ++e) {
                  let r = x[e];
                  a.push(k + r);
                }
                c = d + (c.length > 0 ? " " + c : c);
              }
              return c;
            })(e, o);
            return a(e, l), l;
          };
        return (
          (i = (d) => {
            var m;
            let p;
            return (
              (t = (o = {
                cache: ((e) => {
                  if (e < 1) return { get: () => void 0, set: () => {} };
                  let r = 0,
                    o = Object.create(null),
                    t = Object.create(null),
                    l = (l, n) => {
                      (o[l] = n),
                        ++r > e &&
                          ((r = 0), (t = o), (o = Object.create(null)));
                    };
                  return {
                    get(e) {
                      let r = o[e];
                      return void 0 !== r
                        ? r
                        : void 0 !== (r = t[e])
                        ? (l(e, r), r)
                        : void 0;
                    },
                    set(e, r) {
                      e in o ? (o[e] = r) : l(e, r);
                    },
                  };
                })((m = r.reduce((e, r) => r(e), e())).cacheSize),
                parseClassName: ((e) => {
                  let { prefix: r, experimentalParseClassName: o } = e,
                    t = (e) => {
                      let r,
                        o = [],
                        t = 0,
                        l = 0,
                        n = 0,
                        s = e.length;
                      for (let a = 0; a < s; a++) {
                        let s = e[a];
                        if (0 === t && 0 === l) {
                          if (":" === s) {
                            o.push(e.slice(n, a)), (n = a + 1);
                            continue;
                          }
                          if ("/" === s) {
                            r = a;
                            continue;
                          }
                        }
                        "[" === s
                          ? t++
                          : "]" === s
                          ? t--
                          : "(" === s
                          ? l++
                          : ")" === s && l--;
                      }
                      let a = 0 === o.length ? e : e.slice(n),
                        i = a,
                        c = !1;
                      return (
                        a.endsWith("!")
                          ? ((i = a.slice(0, -1)), (c = !0))
                          : a.startsWith("!") && ((i = a.slice(1)), (c = !0)),
                        f(o, c, i, r && r > n ? r - n : void 0)
                      );
                    };
                  if (r) {
                    let e = r + ":",
                      o = t;
                    t = (r) =>
                      r.startsWith(e)
                        ? o(r.slice(e.length))
                        : f(b, !1, r, void 0, !0);
                  }
                  if (o) {
                    let e = t;
                    t = (r) => o({ className: r, parseClassName: e });
                  }
                  return t;
                })(m),
                sortModifiers:
                  ((p = new Map()),
                  m.orderSensitiveModifiers.forEach((e, r) => {
                    p.set(e, 1e6 + r);
                  }),
                  (e) => {
                    let r = [],
                      o = [];
                    for (let t = 0; t < e.length; t++) {
                      let l = e[t],
                        n = "[" === l[0],
                        s = p.has(l);
                      n || s
                        ? (o.length > 0 && (o.sort(), r.push(...o), (o = [])),
                          r.push(l))
                        : o.push(l);
                    }
                    return o.length > 0 && (o.sort(), r.push(...o)), r;
                  }),
                postfixLookupClassGroupIds: ((e) => {
                  let r = Object.create(null),
                    o = e.postfixLookupClassGroups;
                  if (o) for (let e = 0; e < o.length; e++) r[o[e]] = !0;
                  return r;
                })(m),
                ...((e) => {
                  let r = ((e) => {
                      let { theme: r, classGroups: o } = e;
                      return s(o, r);
                    })(e),
                    {
                      conflictingClassGroups: o,
                      conflictingClassGroupModifiers: t,
                    } = e;
                  return {
                    getClassGroupId: (e) => {
                      if (e.startsWith("[") && e.endsWith("]")) {
                        var o;
                        let r, t, l;
                        return -1 === (o = e).slice(1, -1).indexOf(":")
                          ? void 0
                          : ((t = (r = o.slice(1, -1)).indexOf(":")),
                            (l = r.slice(0, t)) ? "arbitrary.." + l : void 0);
                      }
                      let t = e.split("-"),
                        l = +("" === t[0] && t.length > 1);
                      return n(t, l, r);
                    },
                    getConflictingClassGroupIds: (e, r) => {
                      if (r) {
                        let r = t[e],
                          n = o[e];
                        if (r) {
                          if (n) {
                            let e = Array(n.length + r.length);
                            for (let r = 0; r < n.length; r++) e[r] = n[r];
                            for (let o = 0; o < r.length; o++)
                              e[n.length + o] = r[o];
                            return e;
                          }
                          return r;
                        }
                        return n || l;
                      }
                      return o[e] || l;
                    },
                  };
                })(m),
              }).cache.get),
              (a = o.cache.set),
              (i = c),
              c(d)
            );
          }),
          (...e) =>
            i(
              ((...e) => {
                let r,
                  o,
                  t = 0,
                  l = "";
                for (; t < e.length; )
                  (r = e[t++]) && (o = h(r)) && (l && (l += " "), (l += o));
                return l;
              })(...e)
            )
        );
      })(() => {
        let e = w("color"),
          r = w("font"),
          o = w("text"),
          t = w("font-weight"),
          l = w("tracking"),
          n = w("leading"),
          s = w("breakpoint"),
          a = w("container"),
          i = w("spacing"),
          c = w("radius"),
          d = w("shadow"),
          m = w("inset-shadow"),
          p = w("text-shadow"),
          u = w("drop-shadow"),
          b = w("blur"),
          f = w("perspective"),
          g = w("aspect"),
          h = w("ease"),
          k = w("animate"),
          x = () => [
            "auto",
            "avoid",
            "all",
            "avoid-page",
            "page",
            "left",
            "right",
            "column",
          ],
          v = () => [
            "center",
            "top",
            "bottom",
            "left",
            "right",
            "top-left",
            "left-top",
            "top-right",
            "right-top",
            "bottom-right",
            "right-bottom",
            "bottom-left",
            "left-bottom",
          ],
          y = () => [...v(), H, V],
          z = () => ["auto", "hidden", "clip", "visible", "scroll"],
          j = () => ["auto", "contain", "none"],
          C = () => [H, V, i],
          N = () => [W, "full", "auto", ...C()],
          O = () => [A, "none", "subgrid", H, V],
          E = () => ["auto", { span: ["full", A, H, V] }, A, H, V],
          I = () => [A, "auto", H, V],
          L = () => ["auto", "min", "max", "fr", H, V],
          P = () => [
            "start",
            "end",
            "center",
            "between",
            "around",
            "evenly",
            "stretch",
            "baseline",
            "center-safe",
            "end-safe",
          ],
          et = () => [
            "start",
            "end",
            "center",
            "stretch",
            "center-safe",
            "end-safe",
          ],
          el = () => ["auto", ...C()],
          en = () => [
            W,
            "auto",
            "full",
            "dvw",
            "dvh",
            "lvw",
            "lvh",
            "svw",
            "svh",
            "min",
            "max",
            "fit",
            ...C(),
          ],
          es = () => [
            W,
            "screen",
            "full",
            "dvw",
            "lvw",
            "svw",
            "min",
            "max",
            "fit",
            ...C(),
          ],
          ea = () => [
            W,
            "screen",
            "full",
            "lh",
            "dvh",
            "lvh",
            "svh",
            "min",
            "max",
            "fit",
            ...C(),
          ],
          ei = () => [e, H, V],
          ec = () => [...v(), X, D, { position: [H, V] }],
          ed = () => [
            "no-repeat",
            { repeat: ["", "x", "y", "space", "round"] },
          ],
          em = () => ["auto", "cover", "contain", Y, M, { size: [H, V] }],
          ep = () => [$, J, B],
          eu = () => ["", "none", "full", c, H, V],
          eb = () => ["", G, J, B],
          ef = () => ["solid", "dashed", "dotted", "double"],
          eg = () => [
            "normal",
            "multiply",
            "screen",
            "overlay",
            "darken",
            "lighten",
            "color-dodge",
            "color-burn",
            "hard-light",
            "soft-light",
            "difference",
            "exclusion",
            "hue",
            "saturation",
            "color",
            "luminosity",
          ],
          eh = () => [G, $, X, D],
          ek = () => ["", "none", b, H, V],
          ew = () => ["none", G, H, V],
          ex = () => ["none", G, H, V],
          ev = () => [G, H, V],
          ey = () => [W, "full", ...C()];
        return {
          cacheSize: 500,
          theme: {
            animate: ["spin", "ping", "pulse", "bounce"],
            aspect: ["video"],
            blur: [R],
            breakpoint: [R],
            color: [S],
            container: [R],
            "drop-shadow": [R],
            ease: ["in", "out", "in-out"],
            font: [T],
            "font-weight": [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
            ],
            "inset-shadow": [R],
            leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
            perspective: [
              "dramatic",
              "near",
              "normal",
              "midrange",
              "distant",
              "none",
            ],
            radius: [R],
            shadow: [R],
            spacing: ["px", G],
            text: [R],
            "text-shadow": [R],
            tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
          },
          classGroups: {
            aspect: [{ aspect: ["auto", "square", W, V, H, g] }],
            container: ["container"],
            "container-type": [{ "@container": ["", "normal", "size", H, V] }],
            "container-named": [_],
            columns: [{ columns: [G, V, H, a] }],
            "break-after": [{ "break-after": x() }],
            "break-before": [{ "break-before": x() }],
            "break-inside": [
              {
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"],
              },
            ],
            "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
            box: [{ box: ["border", "content"] }],
            display: [
              "block",
              "inline-block",
              "inline",
              "flex",
              "inline-flex",
              "table",
              "inline-table",
              "table-caption",
              "table-cell",
              "table-column",
              "table-column-group",
              "table-footer-group",
              "table-header-group",
              "table-row-group",
              "table-row",
              "flow-root",
              "grid",
              "inline-grid",
              "contents",
              "list-item",
              "hidden",
            ],
            sr: ["sr-only", "not-sr-only"],
            float: [{ float: ["right", "left", "none", "start", "end"] }],
            clear: [
              { clear: ["left", "right", "both", "none", "start", "end"] },
            ],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [
              { object: ["contain", "cover", "fill", "none", "scale-down"] },
            ],
            "object-position": [{ object: y() }],
            overflow: [{ overflow: z() }],
            "overflow-x": [{ "overflow-x": z() }],
            "overflow-y": [{ "overflow-y": z() }],
            overscroll: [{ overscroll: j() }],
            "overscroll-x": [{ "overscroll-x": j() }],
            "overscroll-y": [{ "overscroll-y": j() }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{ inset: N() }],
            "inset-x": [{ "inset-x": N() }],
            "inset-y": [{ "inset-y": N() }],
            start: [{ "inset-s": N(), start: N() }],
            end: [{ "inset-e": N(), end: N() }],
            "inset-bs": [{ "inset-bs": N() }],
            "inset-be": [{ "inset-be": N() }],
            top: [{ top: N() }],
            right: [{ right: N() }],
            bottom: [{ bottom: N() }],
            left: [{ left: N() }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{ z: [A, "auto", H, V] }],
            basis: [{ basis: [W, "full", "auto", a, ...C()] }],
            "flex-direction": [
              { flex: ["row", "row-reverse", "col", "col-reverse"] },
            ],
            "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
            flex: [{ flex: [G, W, "auto", "initial", "none", V] }],
            grow: [{ grow: ["", G, H, V] }],
            shrink: [{ shrink: ["", G, H, V] }],
            order: [{ order: [A, "first", "last", "none", H, V] }],
            "grid-cols": [{ "grid-cols": O() }],
            "col-start-end": [{ col: E() }],
            "col-start": [{ "col-start": I() }],
            "col-end": [{ "col-end": I() }],
            "grid-rows": [{ "grid-rows": O() }],
            "row-start-end": [{ row: E() }],
            "row-start": [{ "row-start": I() }],
            "row-end": [{ "row-end": I() }],
            "grid-flow": [
              {
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"],
              },
            ],
            "auto-cols": [{ "auto-cols": L() }],
            "auto-rows": [{ "auto-rows": L() }],
            gap: [{ gap: C() }],
            "gap-x": [{ "gap-x": C() }],
            "gap-y": [{ "gap-y": C() }],
            "justify-content": [{ justify: [...P(), "normal"] }],
            "justify-items": [{ "justify-items": [...et(), "normal"] }],
            "justify-self": [{ "justify-self": ["auto", ...et()] }],
            "align-content": [{ content: ["normal", ...P()] }],
            "align-items": [{ items: [...et(), { baseline: ["", "last"] }] }],
            "align-self": [
              { self: ["auto", ...et(), { baseline: ["", "last"] }] },
            ],
            "place-content": [{ "place-content": P() }],
            "place-items": [{ "place-items": [...et(), "baseline"] }],
            "place-self": [{ "place-self": ["auto", ...et()] }],
            p: [{ p: C() }],
            px: [{ px: C() }],
            py: [{ py: C() }],
            ps: [{ ps: C() }],
            pe: [{ pe: C() }],
            pbs: [{ pbs: C() }],
            pbe: [{ pbe: C() }],
            pt: [{ pt: C() }],
            pr: [{ pr: C() }],
            pb: [{ pb: C() }],
            pl: [{ pl: C() }],
            m: [{ m: el() }],
            mx: [{ mx: el() }],
            my: [{ my: el() }],
            ms: [{ ms: el() }],
            me: [{ me: el() }],
            mbs: [{ mbs: el() }],
            mbe: [{ mbe: el() }],
            mt: [{ mt: el() }],
            mr: [{ mr: el() }],
            mb: [{ mb: el() }],
            ml: [{ ml: el() }],
            "space-x": [{ "space-x": C() }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{ "space-y": C() }],
            "space-y-reverse": ["space-y-reverse"],
            size: [{ size: en() }],
            "inline-size": [{ inline: ["auto", ...es()] }],
            "min-inline-size": [{ "min-inline": ["auto", ...es()] }],
            "max-inline-size": [{ "max-inline": ["none", ...es()] }],
            "block-size": [{ block: ["auto", ...ea()] }],
            "min-block-size": [{ "min-block": ["auto", ...ea()] }],
            "max-block-size": [{ "max-block": ["none", ...ea()] }],
            w: [{ w: [a, "screen", ...en()] }],
            "min-w": [{ "min-w": [a, "screen", "none", ...en()] }],
            "max-w": [
              {
                "max-w": [
                  a,
                  "screen",
                  "none",
                  "prose",
                  { screen: [s] },
                  ...en(),
                ],
              },
            ],
            h: [{ h: ["screen", "lh", ...en()] }],
            "min-h": [{ "min-h": ["screen", "lh", "none", ...en()] }],
            "max-h": [{ "max-h": ["screen", "lh", ...en()] }],
            "font-size": [{ text: ["base", o, J, B] }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{ font: [t, eo, Z] }],
            "font-stretch": [
              {
                "font-stretch": [
                  "ultra-condensed",
                  "extra-condensed",
                  "condensed",
                  "semi-condensed",
                  "normal",
                  "semi-expanded",
                  "expanded",
                  "extra-expanded",
                  "ultra-expanded",
                  $,
                  V,
                ],
              },
            ],
            "font-family": [{ font: [Q, q, r] }],
            "font-features": [{ "font-features": [V] }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{ tracking: [l, H, V] }],
            "line-clamp": [{ "line-clamp": [G, "none", H, U] }],
            leading: [{ leading: [n, ...C()] }],
            "list-image": [{ "list-image": ["none", H, V] }],
            "list-style-position": [{ list: ["inside", "outside"] }],
            "list-style-type": [{ list: ["disc", "decimal", "none", H, V] }],
            "text-alignment": [
              { text: ["left", "center", "right", "justify", "start", "end"] },
            ],
            "placeholder-color": [{ placeholder: ei() }],
            "text-color": [{ text: ei() }],
            "text-decoration": [
              "underline",
              "overline",
              "line-through",
              "no-underline",
            ],
            "text-decoration-style": [{ decoration: [...ef(), "wavy"] }],
            "text-decoration-thickness": [
              { decoration: [G, "from-font", "auto", H, B] },
            ],
            "text-decoration-color": [{ decoration: ei() }],
            "underline-offset": [{ "underline-offset": [G, "auto", H, V] }],
            "text-transform": [
              "uppercase",
              "lowercase",
              "capitalize",
              "normal-case",
            ],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
            indent: [{ indent: C() }],
            "tab-size": [{ tab: [A, H, V] }],
            "vertical-align": [
              {
                align: [
                  "baseline",
                  "top",
                  "middle",
                  "bottom",
                  "text-top",
                  "text-bottom",
                  "sub",
                  "super",
                  H,
                  V,
                ],
              },
            ],
            whitespace: [
              {
                whitespace: [
                  "normal",
                  "nowrap",
                  "pre",
                  "pre-line",
                  "pre-wrap",
                  "break-spaces",
                ],
              },
            ],
            break: [{ break: ["normal", "words", "all", "keep"] }],
            wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
            hyphens: [{ hyphens: ["none", "manual", "auto"] }],
            content: [{ content: ["none", H, V] }],
            "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
            "bg-clip": [
              { "bg-clip": ["border", "padding", "content", "text"] },
            ],
            "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
            "bg-position": [{ bg: ec() }],
            "bg-repeat": [{ bg: ed() }],
            "bg-size": [{ bg: em() }],
            "bg-image": [
              {
                bg: [
                  "none",
                  {
                    linear: [
                      { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                      A,
                      H,
                      V,
                    ],
                    radial: ["", H, V],
                    conic: [A, H, V],
                  },
                  ee,
                  K,
                ],
              },
            ],
            "bg-color": [{ bg: ei() }],
            "gradient-from-pos": [{ from: ep() }],
            "gradient-via-pos": [{ via: ep() }],
            "gradient-to-pos": [{ to: ep() }],
            "gradient-from": [{ from: ei() }],
            "gradient-via": [{ via: ei() }],
            "gradient-to": [{ to: ei() }],
            rounded: [{ rounded: eu() }],
            "rounded-s": [{ "rounded-s": eu() }],
            "rounded-e": [{ "rounded-e": eu() }],
            "rounded-t": [{ "rounded-t": eu() }],
            "rounded-r": [{ "rounded-r": eu() }],
            "rounded-b": [{ "rounded-b": eu() }],
            "rounded-l": [{ "rounded-l": eu() }],
            "rounded-ss": [{ "rounded-ss": eu() }],
            "rounded-se": [{ "rounded-se": eu() }],
            "rounded-ee": [{ "rounded-ee": eu() }],
            "rounded-es": [{ "rounded-es": eu() }],
            "rounded-tl": [{ "rounded-tl": eu() }],
            "rounded-tr": [{ "rounded-tr": eu() }],
            "rounded-br": [{ "rounded-br": eu() }],
            "rounded-bl": [{ "rounded-bl": eu() }],
            "border-w": [{ border: eb() }],
            "border-w-x": [{ "border-x": eb() }],
            "border-w-y": [{ "border-y": eb() }],
            "border-w-s": [{ "border-s": eb() }],
            "border-w-e": [{ "border-e": eb() }],
            "border-w-bs": [{ "border-bs": eb() }],
            "border-w-be": [{ "border-be": eb() }],
            "border-w-t": [{ "border-t": eb() }],
            "border-w-r": [{ "border-r": eb() }],
            "border-w-b": [{ "border-b": eb() }],
            "border-w-l": [{ "border-l": eb() }],
            "divide-x": [{ "divide-x": eb() }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{ "divide-y": eb() }],
            "divide-y-reverse": ["divide-y-reverse"],
            "border-style": [{ border: [...ef(), "hidden", "none"] }],
            "divide-style": [{ divide: [...ef(), "hidden", "none"] }],
            "border-color": [{ border: ei() }],
            "border-color-x": [{ "border-x": ei() }],
            "border-color-y": [{ "border-y": ei() }],
            "border-color-s": [{ "border-s": ei() }],
            "border-color-e": [{ "border-e": ei() }],
            "border-color-bs": [{ "border-bs": ei() }],
            "border-color-be": [{ "border-be": ei() }],
            "border-color-t": [{ "border-t": ei() }],
            "border-color-r": [{ "border-r": ei() }],
            "border-color-b": [{ "border-b": ei() }],
            "border-color-l": [{ "border-l": ei() }],
            "divide-color": [{ divide: ei() }],
            "outline-style": [{ outline: [...ef(), "none", "hidden"] }],
            "outline-offset": [{ "outline-offset": [G, H, V] }],
            "outline-w": [{ outline: ["", G, J, B] }],
            "outline-color": [{ outline: ei() }],
            shadow: [{ shadow: ["", "none", d, er, F] }],
            "shadow-color": [{ shadow: ei() }],
            "inset-shadow": [{ "inset-shadow": ["none", m, er, F] }],
            "inset-shadow-color": [{ "inset-shadow": ei() }],
            "ring-w": [{ ring: eb() }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{ ring: ei() }],
            "ring-offset-w": [{ "ring-offset": [G, B] }],
            "ring-offset-color": [{ "ring-offset": ei() }],
            "inset-ring-w": [{ "inset-ring": eb() }],
            "inset-ring-color": [{ "inset-ring": ei() }],
            "text-shadow": [{ "text-shadow": ["none", p, er, F] }],
            "text-shadow-color": [{ "text-shadow": ei() }],
            opacity: [{ opacity: [G, H, V] }],
            "mix-blend": [
              { "mix-blend": [...eg(), "plus-darker", "plus-lighter"] },
            ],
            "bg-blend": [{ "bg-blend": eg() }],
            "mask-clip": [
              {
                "mask-clip": [
                  "border",
                  "padding",
                  "content",
                  "fill",
                  "stroke",
                  "view",
                ],
              },
              "mask-no-clip",
            ],
            "mask-composite": [
              { mask: ["add", "subtract", "intersect", "exclude"] },
            ],
            "mask-image-linear-pos": [{ "mask-linear": [G] }],
            "mask-image-linear-from-pos": [{ "mask-linear-from": eh() }],
            "mask-image-linear-to-pos": [{ "mask-linear-to": eh() }],
            "mask-image-linear-from-color": [{ "mask-linear-from": ei() }],
            "mask-image-linear-to-color": [{ "mask-linear-to": ei() }],
            "mask-image-t-from-pos": [{ "mask-t-from": eh() }],
            "mask-image-t-to-pos": [{ "mask-t-to": eh() }],
            "mask-image-t-from-color": [{ "mask-t-from": ei() }],
            "mask-image-t-to-color": [{ "mask-t-to": ei() }],
            "mask-image-r-from-pos": [{ "mask-r-from": eh() }],
            "mask-image-r-to-pos": [{ "mask-r-to": eh() }],
            "mask-image-r-from-color": [{ "mask-r-from": ei() }],
            "mask-image-r-to-color": [{ "mask-r-to": ei() }],
            "mask-image-b-from-pos": [{ "mask-b-from": eh() }],
            "mask-image-b-to-pos": [{ "mask-b-to": eh() }],
            "mask-image-b-from-color": [{ "mask-b-from": ei() }],
            "mask-image-b-to-color": [{ "mask-b-to": ei() }],
            "mask-image-l-from-pos": [{ "mask-l-from": eh() }],
            "mask-image-l-to-pos": [{ "mask-l-to": eh() }],
            "mask-image-l-from-color": [{ "mask-l-from": ei() }],
            "mask-image-l-to-color": [{ "mask-l-to": ei() }],
            "mask-image-x-from-pos": [{ "mask-x-from": eh() }],
            "mask-image-x-to-pos": [{ "mask-x-to": eh() }],
            "mask-image-x-from-color": [{ "mask-x-from": ei() }],
            "mask-image-x-to-color": [{ "mask-x-to": ei() }],
            "mask-image-y-from-pos": [{ "mask-y-from": eh() }],
            "mask-image-y-to-pos": [{ "mask-y-to": eh() }],
            "mask-image-y-from-color": [{ "mask-y-from": ei() }],
            "mask-image-y-to-color": [{ "mask-y-to": ei() }],
            "mask-image-radial": [{ "mask-radial": [H, V] }],
            "mask-image-radial-from-pos": [{ "mask-radial-from": eh() }],
            "mask-image-radial-to-pos": [{ "mask-radial-to": eh() }],
            "mask-image-radial-from-color": [{ "mask-radial-from": ei() }],
            "mask-image-radial-to-color": [{ "mask-radial-to": ei() }],
            "mask-image-radial-shape": [
              { "mask-radial": ["circle", "ellipse"] },
            ],
            "mask-image-radial-size": [
              {
                "mask-radial": [
                  { closest: ["side", "corner"], farthest: ["side", "corner"] },
                ],
              },
            ],
            "mask-image-radial-pos": [{ "mask-radial-at": v() }],
            "mask-image-conic-pos": [{ "mask-conic": [G] }],
            "mask-image-conic-from-pos": [{ "mask-conic-from": eh() }],
            "mask-image-conic-to-pos": [{ "mask-conic-to": eh() }],
            "mask-image-conic-from-color": [{ "mask-conic-from": ei() }],
            "mask-image-conic-to-color": [{ "mask-conic-to": ei() }],
            "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
            "mask-origin": [
              {
                "mask-origin": [
                  "border",
                  "padding",
                  "content",
                  "fill",
                  "stroke",
                  "view",
                ],
              },
            ],
            "mask-position": [{ mask: ec() }],
            "mask-repeat": [{ mask: ed() }],
            "mask-size": [{ mask: em() }],
            "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
            "mask-image": [{ mask: ["none", H, V] }],
            filter: [{ filter: ["", "none", H, V] }],
            blur: [{ blur: ek() }],
            brightness: [{ brightness: [G, H, V] }],
            contrast: [{ contrast: [G, H, V] }],
            "drop-shadow": [{ "drop-shadow": ["", "none", u, er, F] }],
            "drop-shadow-color": [{ "drop-shadow": ei() }],
            grayscale: [{ grayscale: ["", G, H, V] }],
            "hue-rotate": [{ "hue-rotate": [G, H, V] }],
            invert: [{ invert: ["", G, H, V] }],
            saturate: [{ saturate: [G, H, V] }],
            sepia: [{ sepia: ["", G, H, V] }],
            "backdrop-filter": [{ "backdrop-filter": ["", "none", H, V] }],
            "backdrop-blur": [{ "backdrop-blur": ek() }],
            "backdrop-brightness": [{ "backdrop-brightness": [G, H, V] }],
            "backdrop-contrast": [{ "backdrop-contrast": [G, H, V] }],
            "backdrop-grayscale": [{ "backdrop-grayscale": ["", G, H, V] }],
            "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [G, H, V] }],
            "backdrop-invert": [{ "backdrop-invert": ["", G, H, V] }],
            "backdrop-opacity": [{ "backdrop-opacity": [G, H, V] }],
            "backdrop-saturate": [{ "backdrop-saturate": [G, H, V] }],
            "backdrop-sepia": [{ "backdrop-sepia": ["", G, H, V] }],
            "border-collapse": [{ border: ["collapse", "separate"] }],
            "border-spacing": [{ "border-spacing": C() }],
            "border-spacing-x": [{ "border-spacing-x": C() }],
            "border-spacing-y": [{ "border-spacing-y": C() }],
            "table-layout": [{ table: ["auto", "fixed"] }],
            caption: [{ caption: ["top", "bottom"] }],
            transition: [
              {
                transition: [
                  "",
                  "all",
                  "colors",
                  "opacity",
                  "shadow",
                  "transform",
                  "none",
                  H,
                  V,
                ],
              },
            ],
            "transition-behavior": [{ transition: ["normal", "discrete"] }],
            duration: [{ duration: [G, "initial", H, V] }],
            ease: [{ ease: ["linear", "initial", h, H, V] }],
            delay: [{ delay: [G, H, V] }],
            animate: [{ animate: ["none", k, H, V] }],
            backface: [{ backface: ["hidden", "visible"] }],
            perspective: [{ perspective: [f, H, V] }],
            "perspective-origin": [{ "perspective-origin": y() }],
            rotate: [{ rotate: ew() }],
            "rotate-x": [{ "rotate-x": ew() }],
            "rotate-y": [{ "rotate-y": ew() }],
            "rotate-z": [{ "rotate-z": ew() }],
            scale: [{ scale: ex() }],
            "scale-x": [{ "scale-x": ex() }],
            "scale-y": [{ "scale-y": ex() }],
            "scale-z": [{ "scale-z": ex() }],
            "scale-3d": ["scale-3d"],
            skew: [{ skew: ev() }],
            "skew-x": [{ "skew-x": ev() }],
            "skew-y": [{ "skew-y": ev() }],
            transform: [{ transform: [H, V, "", "none", "gpu", "cpu"] }],
            "transform-origin": [{ origin: y() }],
            "transform-style": [{ transform: ["3d", "flat"] }],
            translate: [{ translate: ey() }],
            "translate-x": [{ "translate-x": ey() }],
            "translate-y": [{ "translate-y": ey() }],
            "translate-z": [{ "translate-z": ey() }],
            "translate-none": ["translate-none"],
            zoom: [{ zoom: [A, H, V] }],
            accent: [{ accent: ei() }],
            appearance: [{ appearance: ["none", "auto"] }],
            "caret-color": [{ caret: ei() }],
            "color-scheme": [
              {
                scheme: [
                  "normal",
                  "dark",
                  "light",
                  "light-dark",
                  "only-dark",
                  "only-light",
                ],
              },
            ],
            cursor: [
              {
                cursor: [
                  "auto",
                  "default",
                  "pointer",
                  "wait",
                  "text",
                  "move",
                  "help",
                  "not-allowed",
                  "none",
                  "context-menu",
                  "progress",
                  "cell",
                  "crosshair",
                  "vertical-text",
                  "alias",
                  "copy",
                  "no-drop",
                  "grab",
                  "grabbing",
                  "all-scroll",
                  "col-resize",
                  "row-resize",
                  "n-resize",
                  "e-resize",
                  "s-resize",
                  "w-resize",
                  "ne-resize",
                  "nw-resize",
                  "se-resize",
                  "sw-resize",
                  "ew-resize",
                  "ns-resize",
                  "nesw-resize",
                  "nwse-resize",
                  "zoom-in",
                  "zoom-out",
                  H,
                  V,
                ],
              },
            ],
            "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
            "pointer-events": [{ "pointer-events": ["auto", "none"] }],
            resize: [{ resize: ["none", "", "y", "x"] }],
            "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
            "scrollbar-thumb-color": [{ "scrollbar-thumb": ei() }],
            "scrollbar-track-color": [{ "scrollbar-track": ei() }],
            "scrollbar-gutter": [
              { "scrollbar-gutter": ["auto", "stable", "both"] },
            ],
            "scrollbar-w": [{ scrollbar: ["auto", "thin", "none"] }],
            "scroll-m": [{ "scroll-m": C() }],
            "scroll-mx": [{ "scroll-mx": C() }],
            "scroll-my": [{ "scroll-my": C() }],
            "scroll-ms": [{ "scroll-ms": C() }],
            "scroll-me": [{ "scroll-me": C() }],
            "scroll-mbs": [{ "scroll-mbs": C() }],
            "scroll-mbe": [{ "scroll-mbe": C() }],
            "scroll-mt": [{ "scroll-mt": C() }],
            "scroll-mr": [{ "scroll-mr": C() }],
            "scroll-mb": [{ "scroll-mb": C() }],
            "scroll-ml": [{ "scroll-ml": C() }],
            "scroll-p": [{ "scroll-p": C() }],
            "scroll-px": [{ "scroll-px": C() }],
            "scroll-py": [{ "scroll-py": C() }],
            "scroll-ps": [{ "scroll-ps": C() }],
            "scroll-pe": [{ "scroll-pe": C() }],
            "scroll-pbs": [{ "scroll-pbs": C() }],
            "scroll-pbe": [{ "scroll-pbe": C() }],
            "scroll-pt": [{ "scroll-pt": C() }],
            "scroll-pr": [{ "scroll-pr": C() }],
            "scroll-pb": [{ "scroll-pb": C() }],
            "scroll-pl": [{ "scroll-pl": C() }],
            "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
            "snap-stop": [{ snap: ["normal", "always"] }],
            "snap-type": [{ snap: ["none", "x", "y", "both"] }],
            "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
            touch: [{ touch: ["auto", "none", "manipulation"] }],
            "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
            "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{ select: ["none", "text", "all", "auto"] }],
            "will-change": [
              {
                "will-change": [
                  "auto",
                  "scroll",
                  "contents",
                  "transform",
                  H,
                  V,
                ],
              },
            ],
            fill: [{ fill: ["none", ...ei()] }],
            "stroke-w": [{ stroke: [G, J, B, U] }],
            stroke: [{ stroke: ["none", ...ei()] }],
            "forced-color-adjust": [
              { "forced-color-adjust": ["auto", "none"] },
            ],
          },
          conflictingClassGroups: {
            "container-named": ["container-type"],
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: [
              "inset-x",
              "inset-y",
              "inset-bs",
              "inset-be",
              "start",
              "end",
              "top",
              "right",
              "bottom",
              "left",
            ],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": [
              "fvn-ordinal",
              "fvn-slashed-zero",
              "fvn-figure",
              "fvn-spacing",
              "fvn-fraction",
            ],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: [
              "rounded-s",
              "rounded-e",
              "rounded-t",
              "rounded-r",
              "rounded-b",
              "rounded-l",
              "rounded-ss",
              "rounded-se",
              "rounded-ee",
              "rounded-es",
              "rounded-tl",
              "rounded-tr",
              "rounded-br",
              "rounded-bl",
            ],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": [
              "border-w-x",
              "border-w-y",
              "border-w-s",
              "border-w-e",
              "border-w-bs",
              "border-w-be",
              "border-w-t",
              "border-w-r",
              "border-w-b",
              "border-w-l",
            ],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": [
              "border-color-x",
              "border-color-y",
              "border-color-s",
              "border-color-e",
              "border-color-bs",
              "border-color-be",
              "border-color-t",
              "border-color-r",
              "border-color-b",
              "border-color-l",
            ],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            translate: ["translate-x", "translate-y", "translate-none"],
            "translate-none": [
              "translate",
              "translate-x",
              "translate-y",
              "translate-z",
            ],
            "scroll-m": [
              "scroll-mx",
              "scroll-my",
              "scroll-ms",
              "scroll-me",
              "scroll-mbs",
              "scroll-mbe",
              "scroll-mt",
              "scroll-mr",
              "scroll-mb",
              "scroll-ml",
            ],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": [
              "scroll-px",
              "scroll-py",
              "scroll-ps",
              "scroll-pe",
              "scroll-pbs",
              "scroll-pbe",
              "scroll-pt",
              "scroll-pr",
              "scroll-pb",
              "scroll-pl",
            ],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"],
          },
          conflictingClassGroupModifiers: { "font-size": ["leading"] },
          postfixLookupClassGroups: ["container-type"],
          orderSensitiveModifiers: [
            "*",
            "**",
            "after",
            "backdrop",
            "before",
            "details-content",
            "file",
            "first-letter",
            "first-line",
            "marker",
            "placeholder",
            "selection",
          ],
        };
      });
    function eb(...e) {
      return eu(r(e));
    }
    e.s(["cn", () => eb], 152236);
  },
  224589,
  (e) => {
    "use strict";
    var r = e.i(642947);
    let o = (...e) =>
        e
          .filter((e, r, o) => !!e && "" !== e.trim() && o.indexOf(e) === r)
          .join(" ")
          .trim(),
      t = (e) => {
        let r = e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, r, o) =>
          o ? o.toUpperCase() : r.toLowerCase()
        );
        return r.charAt(0).toUpperCase() + r.slice(1);
      };
    var l = {
      xmlns: "http://www.w3.org/2000/svg",
      width: 24,
      height: 24,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
    };
    let n = (0, r.forwardRef)(
        (
          {
            color: e = "currentColor",
            size: t = 24,
            strokeWidth: n = 2,
            absoluteStrokeWidth: s,
            className: a = "",
            children: i,
            iconNode: c,
            ...d
          },
          m
        ) =>
          (0, r.createElement)(
            "svg",
            {
              ref: m,
              ...l,
              width: t,
              height: t,
              stroke: e,
              strokeWidth: s ? (24 * Number(n)) / Number(t) : n,
              className: o("lucide", a),
              ...(!i &&
                !((e) => {
                  for (let r in e)
                    if (r.startsWith("aria-") || "role" === r || "title" === r)
                      return !0;
                  return !1;
                })(d) && { "aria-hidden": "true" }),
              ...d,
            },
            [
              ...c.map(([e, o]) => (0, r.createElement)(e, o)),
              ...(Array.isArray(i) ? i : [i]),
            ]
          )
      ),
      s = (e, l) => {
        let s = (0, r.forwardRef)(({ className: s, ...a }, i) =>
          (0, r.createElement)(n, {
            ref: i,
            iconNode: l,
            className: o(
              `lucide-${t(e)
                .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
                .toLowerCase()}`,
              `lucide-${e}`,
              s
            ),
            ...a,
          })
        );
        return (s.displayName = t(e)), s;
      };
    e.s(["default", () => s], 224589);
  },
]);
