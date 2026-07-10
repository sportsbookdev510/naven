(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  620713,
  (e, t, r) => {
    "use strict";
    var n = "function" == typeof Symbol && Symbol.for,
      i = n ? Symbol.for("react.element") : 60103,
      a = n ? Symbol.for("react.portal") : 60106,
      o = n ? Symbol.for("react.fragment") : 60107,
      l = n ? Symbol.for("react.strict_mode") : 60108,
      u = n ? Symbol.for("react.profiler") : 60114,
      c = n ? Symbol.for("react.provider") : 60109,
      s = n ? Symbol.for("react.context") : 60110,
      f = n ? Symbol.for("react.async_mode") : 60111,
      d = n ? Symbol.for("react.concurrent_mode") : 60111,
      h = n ? Symbol.for("react.forward_ref") : 60112,
      p = n ? Symbol.for("react.suspense") : 60113,
      y = n ? Symbol.for("react.suspense_list") : 60120,
      v = n ? Symbol.for("react.memo") : 60115,
      m = n ? Symbol.for("react.lazy") : 60116,
      g = n ? Symbol.for("react.block") : 60121,
      b = n ? Symbol.for("react.fundamental") : 60117,
      x = n ? Symbol.for("react.responder") : 60118,
      w = n ? Symbol.for("react.scope") : 60119;
    function O(e) {
      if ("object" == typeof e && null !== e) {
        var t = e.$$typeof;
        switch (t) {
          case i:
            switch ((e = e.type)) {
              case f:
              case d:
              case o:
              case u:
              case l:
              case p:
                return e;
              default:
                switch ((e = e && e.$$typeof)) {
                  case s:
                  case h:
                  case m:
                  case v:
                  case c:
                    return e;
                  default:
                    return t;
                }
            }
          case a:
            return t;
        }
      }
    }
    function j(e) {
      return O(e) === d;
    }
    (r.AsyncMode = f),
      (r.ConcurrentMode = d),
      (r.ContextConsumer = s),
      (r.ContextProvider = c),
      (r.Element = i),
      (r.ForwardRef = h),
      (r.Fragment = o),
      (r.Lazy = m),
      (r.Memo = v),
      (r.Portal = a),
      (r.Profiler = u),
      (r.StrictMode = l),
      (r.Suspense = p),
      (r.isAsyncMode = function (e) {
        return j(e) || O(e) === f;
      }),
      (r.isConcurrentMode = j),
      (r.isContextConsumer = function (e) {
        return O(e) === s;
      }),
      (r.isContextProvider = function (e) {
        return O(e) === c;
      }),
      (r.isElement = function (e) {
        return "object" == typeof e && null !== e && e.$$typeof === i;
      }),
      (r.isForwardRef = function (e) {
        return O(e) === h;
      }),
      (r.isFragment = function (e) {
        return O(e) === o;
      }),
      (r.isLazy = function (e) {
        return O(e) === m;
      }),
      (r.isMemo = function (e) {
        return O(e) === v;
      }),
      (r.isPortal = function (e) {
        return O(e) === a;
      }),
      (r.isProfiler = function (e) {
        return O(e) === u;
      }),
      (r.isStrictMode = function (e) {
        return O(e) === l;
      }),
      (r.isSuspense = function (e) {
        return O(e) === p;
      }),
      (r.isValidElementType = function (e) {
        return (
          "string" == typeof e ||
          "function" == typeof e ||
          e === o ||
          e === d ||
          e === u ||
          e === l ||
          e === p ||
          e === y ||
          ("object" == typeof e &&
            null !== e &&
            (e.$$typeof === m ||
              e.$$typeof === v ||
              e.$$typeof === c ||
              e.$$typeof === s ||
              e.$$typeof === h ||
              e.$$typeof === b ||
              e.$$typeof === x ||
              e.$$typeof === w ||
              e.$$typeof === g))
        );
      }),
      (r.typeOf = O);
  },
  871533,
  (e, t, r) => {
    "use strict";
    t.exports = e.r(620713);
  },
  311728,
  (e, t, r) => {
    !(function (r) {
      "use strict";
      var n,
        i = {
          precision: 20,
          rounding: 4,
          toExpNeg: -7,
          toExpPos: 21,
          LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286",
        },
        a = !0,
        o = "[DecimalError] ",
        l = o + "Invalid argument: ",
        u = o + "Exponent out of range: ",
        c = Math.floor,
        s = Math.pow,
        f = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        d = c(1286742750677284.5),
        h = {};
      function p(e, t) {
        var r,
          n,
          i,
          o,
          l,
          u,
          c,
          s,
          f = e.constructor,
          d = f.precision;
        if (!e.s || !t.s) return t.s || (t = new f(e)), a ? A(t, d) : t;
        if (
          ((c = e.d),
          (s = t.d),
          (l = e.e),
          (i = t.e),
          (c = c.slice()),
          (o = l - i))
        ) {
          for (
            o < 0
              ? ((n = c), (o = -o), (u = s.length))
              : ((n = s), (i = l), (u = c.length)),
              o > (u = (l = Math.ceil(d / 7)) > u ? l + 1 : u + 1) &&
                ((o = u), (n.length = 1)),
              n.reverse();
            o--;

          )
            n.push(0);
          n.reverse();
        }
        for (
          (u = c.length) - (o = s.length) < 0 &&
            ((o = u), (n = s), (s = c), (c = n)),
            r = 0;
          o;

        )
          (r = ((c[--o] = c[o] + s[o] + r) / 1e7) | 0), (c[o] %= 1e7);
        for (r && (c.unshift(r), ++i), u = c.length; 0 == c[--u]; ) c.pop();
        return (t.d = c), (t.e = i), a ? A(t, d) : t;
      }
      function y(e, t, r) {
        if (e !== ~~e || e < t || e > r) throw Error(l + e);
      }
      function v(e) {
        var t,
          r,
          n,
          i = e.length - 1,
          a = "",
          o = e[0];
        if (i > 0) {
          for (a += o, t = 1; t < i; t++)
            (r = 7 - (n = e[t] + "").length) && (a += w(r)), (a += n);
          (r = 7 - (n = (o = e[t]) + "").length) && (a += w(r));
        } else if (0 === o) return "0";
        for (; o % 10 == 0; ) o /= 10;
        return a + o;
      }
      (h.absoluteValue = h.abs =
        function () {
          var e = new this.constructor(this);
          return e.s && (e.s = 1), e;
        }),
        (h.comparedTo = h.cmp =
          function (e) {
            var t, r, n, i;
            if (((e = new this.constructor(e)), this.s !== e.s))
              return this.s || -e.s;
            if (this.e !== e.e) return (this.e > e.e) ^ (this.s < 0) ? 1 : -1;
            for (
              t = 0, r = (n = this.d.length) < (i = e.d.length) ? n : i;
              t < r;
              ++t
            )
              if (this.d[t] !== e.d[t])
                return (this.d[t] > e.d[t]) ^ (this.s < 0) ? 1 : -1;
            return n === i ? 0 : (n > i) ^ (this.s < 0) ? 1 : -1;
          }),
        (h.decimalPlaces = h.dp =
          function () {
            var e = this.d.length - 1,
              t = (e - this.e) * 7;
            if ((e = this.d[e])) for (; e % 10 == 0; e /= 10) t--;
            return t < 0 ? 0 : t;
          }),
        (h.dividedBy = h.div =
          function (e) {
            return m(this, new this.constructor(e));
          }),
        (h.dividedToIntegerBy = h.idiv =
          function (e) {
            var t = this.constructor;
            return A(m(this, new t(e), 0, 1), t.precision);
          }),
        (h.equals = h.eq =
          function (e) {
            return !this.cmp(e);
          }),
        (h.exponent = function () {
          return b(this);
        }),
        (h.greaterThan = h.gt =
          function (e) {
            return this.cmp(e) > 0;
          }),
        (h.greaterThanOrEqualTo = h.gte =
          function (e) {
            return this.cmp(e) >= 0;
          }),
        (h.isInteger = h.isint =
          function () {
            return this.e > this.d.length - 2;
          }),
        (h.isNegative = h.isneg =
          function () {
            return this.s < 0;
          }),
        (h.isPositive = h.ispos =
          function () {
            return this.s > 0;
          }),
        (h.isZero = function () {
          return 0 === this.s;
        }),
        (h.lessThan = h.lt =
          function (e) {
            return 0 > this.cmp(e);
          }),
        (h.lessThanOrEqualTo = h.lte =
          function (e) {
            return 1 > this.cmp(e);
          }),
        (h.logarithm = h.log =
          function (e) {
            var t,
              r = this.constructor,
              i = r.precision,
              l = i + 5;
            if (void 0 === e) e = new r(10);
            else if ((e = new r(e)).s < 1 || e.eq(n)) throw Error(o + "NaN");
            if (this.s < 1) throw Error(o + (this.s ? "NaN" : "-Infinity"));
            return this.eq(n)
              ? new r(0)
              : ((a = !1), (t = m(O(this, l), O(e, l), l)), (a = !0), A(t, i));
          }),
        (h.minus = h.sub =
          function (e) {
            return (
              (e = new this.constructor(e)),
              this.s == e.s ? E(this, e) : p(this, ((e.s = -e.s), e))
            );
          }),
        (h.modulo = h.mod =
          function (e) {
            var t,
              r = this.constructor,
              n = r.precision;
            if (!(e = new r(e)).s) throw Error(o + "NaN");
            return this.s
              ? ((a = !1),
                (t = m(this, e, 0, 1).times(e)),
                (a = !0),
                this.minus(t))
              : A(new r(this), n);
          }),
        (h.naturalExponential = h.exp =
          function () {
            return g(this);
          }),
        (h.naturalLogarithm = h.ln =
          function () {
            return O(this);
          }),
        (h.negated = h.neg =
          function () {
            var e = new this.constructor(this);
            return (e.s = -e.s || 0), e;
          }),
        (h.plus = h.add =
          function (e) {
            return (
              (e = new this.constructor(e)),
              this.s == e.s ? p(this, e) : E(this, ((e.s = -e.s), e))
            );
          }),
        (h.precision = h.sd =
          function (e) {
            var t, r, n;
            if (void 0 !== e && !!e !== e && 1 !== e && 0 !== e)
              throw Error(l + e);
            if (
              ((t = b(this) + 1),
              (r = 7 * (n = this.d.length - 1) + 1),
              (n = this.d[n]))
            ) {
              for (; n % 10 == 0; n /= 10) r--;
              for (n = this.d[0]; n >= 10; n /= 10) r++;
            }
            return e && t > r ? t : r;
          }),
        (h.squareRoot = h.sqrt =
          function () {
            var e,
              t,
              r,
              n,
              i,
              l,
              u,
              s = this.constructor;
            if (this.s < 1) {
              if (!this.s) return new s(0);
              throw Error(o + "NaN");
            }
            for (
              e = b(this),
                a = !1,
                0 == (i = Math.sqrt(+this)) || i == 1 / 0
                  ? (((t = v(this.d)).length + e) % 2 == 0 && (t += "0"),
                    (i = Math.sqrt(t)),
                    (e = c((e + 1) / 2) - (e < 0 || e % 2)),
                    (n = new s(
                      (t =
                        i == 1 / 0
                          ? "5e" + e
                          : (t = i.toExponential()).slice(
                              0,
                              t.indexOf("e") + 1
                            ) + e)
                    )))
                  : (n = new s(i.toString())),
                i = u = (r = s.precision) + 3;
              ;

            )
              if (
                ((n = (l = n).plus(m(this, l, u + 2)).times(0.5)),
                v(l.d).slice(0, u) === (t = v(n.d)).slice(0, u))
              ) {
                if (((t = t.slice(u - 3, u + 1)), i == u && "4999" == t)) {
                  if ((A(l, r + 1, 0), l.times(l).eq(this))) {
                    n = l;
                    break;
                  }
                } else if ("9999" != t) break;
                u += 4;
              }
            return (a = !0), A(n, r);
          }),
        (h.times = h.mul =
          function (e) {
            var t,
              r,
              n,
              i,
              o,
              l,
              u,
              c,
              s,
              f = this.constructor,
              d = this.d,
              h = (e = new f(e)).d;
            if (!this.s || !e.s) return new f(0);
            for (
              e.s *= this.s,
                r = this.e + e.e,
                (c = d.length) < (s = h.length) &&
                  ((o = d), (d = h), (h = o), (l = c), (c = s), (s = l)),
                o = [],
                n = l = c + s;
              n--;

            )
              o.push(0);
            for (n = s; --n >= 0; ) {
              for (t = 0, i = c + n; i > n; )
                (u = o[i] + h[n] * d[i - n - 1] + t),
                  (o[i--] = u % 1e7 | 0),
                  (t = (u / 1e7) | 0);
              o[i] = (o[i] + t) % 1e7 | 0;
            }
            for (; !o[--l]; ) o.pop();
            return (
              t ? ++r : o.shift(),
              (e.d = o),
              (e.e = r),
              a ? A(e, f.precision) : e
            );
          }),
        (h.toDecimalPlaces = h.todp =
          function (e, t) {
            var r = this,
              n = r.constructor;
            return ((r = new n(r)), void 0 === e)
              ? r
              : (y(e, 0, 1e9),
                void 0 === t ? (t = n.rounding) : y(t, 0, 8),
                A(r, e + b(r) + 1, t));
          }),
        (h.toExponential = function (e, t) {
          var r,
            n = this,
            i = n.constructor;
          return (
            void 0 === e
              ? (r = S(n, !0))
              : (y(e, 0, 1e9),
                void 0 === t ? (t = i.rounding) : y(t, 0, 8),
                (r = S((n = A(new i(n), e + 1, t)), !0, e + 1))),
            r
          );
        }),
        (h.toFixed = function (e, t) {
          var r,
            n,
            i = this.constructor;
          return void 0 === e
            ? S(this)
            : (y(e, 0, 1e9),
              void 0 === t ? (t = i.rounding) : y(t, 0, 8),
              (r = S(
                (n = A(new i(this), e + b(this) + 1, t)).abs(),
                !1,
                e + b(n) + 1
              )),
              this.isneg() && !this.isZero() ? "-" + r : r);
        }),
        (h.toInteger = h.toint =
          function () {
            var e = this.constructor;
            return A(new e(this), b(this) + 1, e.rounding);
          }),
        (h.toNumber = function () {
          return +this;
        }),
        (h.toPower = h.pow =
          function (e) {
            var t,
              r,
              i,
              l,
              u,
              s,
              f = this,
              d = f.constructor,
              h = +(e = new d(e));
            if (!e.s) return new d(n);
            if (!(f = new d(f)).s) {
              if (e.s < 1) throw Error(o + "Infinity");
              return f;
            }
            if (f.eq(n)) return f;
            if (((i = d.precision), e.eq(n))) return A(f, i);
            if (((s = (t = e.e) >= (r = e.d.length - 1)), (u = f.s), s)) {
              if ((r = h < 0 ? -h : h) <= 0x1fffffffffffff) {
                for (
                  l = new d(n), t = Math.ceil(i / 7 + 4), a = !1;
                  r % 2 && P((l = l.times(f)).d, t), 0 !== (r = c(r / 2));

                )
                  P((f = f.times(f)).d, t);
                return (a = !0), e.s < 0 ? new d(n).div(l) : A(l, i);
              }
            } else if (u < 0) throw Error(o + "NaN");
            return (
              (u = u < 0 && 1 & e.d[Math.max(t, r)] ? -1 : 1),
              (f.s = 1),
              (a = !1),
              (l = e.times(O(f, i + 12))),
              (a = !0),
              ((l = g(l)).s = u),
              l
            );
          }),
        (h.toPrecision = function (e, t) {
          var r,
            n,
            i = this,
            a = i.constructor;
          return (
            void 0 === e
              ? ((r = b(i)), (n = S(i, r <= a.toExpNeg || r >= a.toExpPos)))
              : (y(e, 1, 1e9),
                void 0 === t ? (t = a.rounding) : y(t, 0, 8),
                (r = b((i = A(new a(i), e, t)))),
                (n = S(i, e <= r || r <= a.toExpNeg, e))),
            n
          );
        }),
        (h.toSignificantDigits = h.tosd =
          function (e, t) {
            var r = this.constructor;
            return (
              void 0 === e
                ? ((e = r.precision), (t = r.rounding))
                : (y(e, 1, 1e9), void 0 === t ? (t = r.rounding) : y(t, 0, 8)),
              A(new r(this), e, t)
            );
          }),
        (h.toString =
          h.valueOf =
          h.val =
          h.toJSON =
            function () {
              var e = b(this),
                t = this.constructor;
              return S(this, e <= t.toExpNeg || e >= t.toExpPos);
            });
      var m = (function () {
        function e(e, t) {
          var r,
            n = 0,
            i = e.length;
          for (e = e.slice(); i--; )
            (r = e[i] * t + n), (e[i] = r % 1e7 | 0), (n = (r / 1e7) | 0);
          return n && e.unshift(n), e;
        }
        function t(e, t, r, n) {
          var i, a;
          if (r != n) a = r > n ? 1 : -1;
          else
            for (i = a = 0; i < r; i++)
              if (e[i] != t[i]) {
                a = e[i] > t[i] ? 1 : -1;
                break;
              }
          return a;
        }
        function r(e, t, r) {
          for (var n = 0; r--; )
            (e[r] -= n), (n = +(e[r] < t[r])), (e[r] = 1e7 * n + e[r] - t[r]);
          for (; !e[0] && e.length > 1; ) e.shift();
        }
        return function (n, i, a, l) {
          var u,
            c,
            s,
            f,
            d,
            h,
            p,
            y,
            v,
            m,
            g,
            x,
            w,
            O,
            j,
            E,
            S,
            P,
            k = n.constructor,
            M = n.s == i.s ? 1 : -1,
            I = n.d,
            _ = i.d;
          if (!n.s) return new k(n);
          if (!i.s) throw Error(o + "Division by zero");
          for (
            s = 0,
              c = n.e - i.e,
              S = _.length,
              j = I.length,
              y = (p = new k(M)).d = [];
            _[s] == (I[s] || 0);

          )
            ++s;
          if (
            (_[s] > (I[s] || 0) && --c,
            (x =
              null == a ? (a = k.precision) : l ? a + (b(n) - b(i)) + 1 : a) <
              0)
          )
            return new k(0);
          if (((x = (x / 7 + 2) | 0), (s = 0), 1 == S))
            for (f = 0, _ = _[0], x++; (s < j || f) && x--; s++)
              (w = 1e7 * f + (I[s] || 0)),
                (y[s] = (w / _) | 0),
                (f = w % _ | 0);
          else {
            for (
              (f = (1e7 / (_[0] + 1)) | 0) > 1 &&
                ((_ = e(_, f)), (I = e(I, f)), (S = _.length), (j = I.length)),
                O = S,
                m = (v = I.slice(0, S)).length;
              m < S;

            )
              v[m++] = 0;
            (P = _.slice()).unshift(0), (E = _[0]), _[1] >= 1e7 / 2 && ++E;
            do
              (f = 0),
                (u = t(_, v, S, m)) < 0
                  ? ((g = v[0]),
                    S != m && (g = 1e7 * g + (v[1] || 0)),
                    (f = (g / E) | 0) > 1
                      ? (f >= 1e7 && (f = 1e7 - 1),
                        (h = (d = e(_, f)).length),
                        (m = v.length),
                        1 == (u = t(d, v, h, m)) &&
                          (f--, r(d, S < h ? P : _, h)))
                      : (0 == f && (u = f = 1), (d = _.slice())),
                    (h = d.length) < m && d.unshift(0),
                    r(v, d, m),
                    -1 == u &&
                      ((m = v.length),
                      (u = t(_, v, S, m)) < 1 && (f++, r(v, S < m ? P : _, m))),
                    (m = v.length))
                  : 0 === u && (f++, (v = [0])),
                (y[s++] = f),
                u && v[0] ? (v[m++] = I[O] || 0) : ((v = [I[O]]), (m = 1));
            while ((O++ < j || void 0 !== v[0]) && x--);
          }
          return y[0] || y.shift(), (p.e = c), A(p, l ? a + b(p) + 1 : a);
        };
      })();
      function g(e, t) {
        var r,
          i,
          o,
          l,
          c,
          f = 0,
          d = 0,
          h = e.constructor,
          p = h.precision;
        if (b(e) > 16) throw Error(u + b(e));
        if (!e.s) return new h(n);
        for (
          null == t ? ((a = !1), (c = p)) : (c = t), l = new h(0.03125);
          e.abs().gte(0.1);

        )
          (e = e.times(l)), (d += 5);
        for (
          c += ((Math.log(s(2, d)) / Math.LN10) * 2 + 5) | 0,
            r = i = o = new h(n),
            h.precision = c;
          ;

        ) {
          if (
            ((i = A(i.times(e), c)),
            (r = r.times(++f)),
            v((l = o.plus(m(i, r, c))).d).slice(0, c) === v(o.d).slice(0, c))
          ) {
            for (; d--; ) o = A(o.times(o), c);
            return (h.precision = p), null == t ? ((a = !0), A(o, p)) : o;
          }
          o = l;
        }
      }
      function b(e) {
        for (var t = 7 * e.e, r = e.d[0]; r >= 10; r /= 10) t++;
        return t;
      }
      function x(e, t, r) {
        if (t > e.LN10.sd())
          throw (
            ((a = !0),
            r && (e.precision = r),
            Error(o + "LN10 precision limit exceeded"))
          );
        return A(new e(e.LN10), t);
      }
      function w(e) {
        for (var t = ""; e--; ) t += "0";
        return t;
      }
      function O(e, t) {
        var r,
          i,
          l,
          u,
          c,
          s,
          f,
          d,
          h,
          p = 1,
          y = e,
          g = y.d,
          w = y.constructor,
          j = w.precision;
        if (y.s < 1) throw Error(o + (y.s ? "NaN" : "-Infinity"));
        if (y.eq(n)) return new w(0);
        if ((null == t ? ((a = !1), (d = j)) : (d = t), y.eq(10)))
          return null == t && (a = !0), x(w, d);
        if (
          ((w.precision = d += 10),
          (i = (r = v(g)).charAt(0)),
          !(15e14 > Math.abs((u = b(y)))))
        )
          return (
            (f = x(w, d + 2, j).times(u + "")),
            (y = O(new w(i + "." + r.slice(1)), d - 10).plus(f)),
            (w.precision = j),
            null == t ? ((a = !0), A(y, j)) : y
          );
        for (; (i < 7 && 1 != i) || (1 == i && r.charAt(1) > 3); )
          (i = (r = v((y = y.times(e)).d)).charAt(0)), p++;
        for (
          u = b(y),
            i > 1
              ? ((y = new w("0." + r)), u++)
              : (y = new w(i + "." + r.slice(1))),
            s = c = y = m(y.minus(n), y.plus(n), d),
            h = A(y.times(y), d),
            l = 3;
          ;

        ) {
          if (
            ((c = A(c.times(h), d)),
            v((f = s.plus(m(c, new w(l), d))).d).slice(0, d) ===
              v(s.d).slice(0, d))
          )
            return (
              (s = s.times(2)),
              0 !== u && (s = s.plus(x(w, d + 2, j).times(u + ""))),
              (s = m(s, new w(p), d)),
              (w.precision = j),
              null == t ? ((a = !0), A(s, j)) : s
            );
          (s = f), (l += 2);
        }
      }
      function j(e, t) {
        var r, n, i;
        for (
          (r = t.indexOf(".")) > -1 && (t = t.replace(".", "")),
            (n = t.search(/e/i)) > 0
              ? (r < 0 && (r = n),
                (r += +t.slice(n + 1)),
                (t = t.substring(0, n)))
              : r < 0 && (r = t.length),
            n = 0;
          48 === t.charCodeAt(n);

        )
          ++n;
        for (i = t.length; 48 === t.charCodeAt(i - 1); ) --i;
        if ((t = t.slice(n, i))) {
          if (
            ((i -= n),
            (e.e = c((r = r - n - 1) / 7)),
            (e.d = []),
            (n = (r + 1) % 7),
            r < 0 && (n += 7),
            n < i)
          ) {
            for (n && e.d.push(+t.slice(0, n)), i -= 7; n < i; )
              e.d.push(+t.slice(n, (n += 7)));
            n = 7 - (t = t.slice(n)).length;
          } else n -= i;
          for (; n--; ) t += "0";
          if ((e.d.push(+t), a && (e.e > d || e.e < -d))) throw Error(u + r);
        } else (e.s = 0), (e.e = 0), (e.d = [0]);
        return e;
      }
      function A(e, t, r) {
        var n,
          i,
          o,
          l,
          f,
          h,
          p,
          y,
          v = e.d;
        for (l = 1, o = v[0]; o >= 10; o /= 10) l++;
        if ((n = t - l) < 0) (n += 7), (i = t), (p = v[(y = 0)]);
        else {
          if ((y = Math.ceil((n + 1) / 7)) >= (o = v.length)) return e;
          for (l = 1, p = o = v[y]; o >= 10; o /= 10) l++;
          (n %= 7), (i = n - 7 + l);
        }
        if (
          (void 0 !== r &&
            ((f = (p / (o = s(10, l - i - 1))) % 10 | 0),
            (h = t < 0 || void 0 !== v[y + 1] || p % o),
            (h =
              r < 4
                ? (f || h) && (0 == r || r == (e.s < 0 ? 3 : 2))
                : f > 5 ||
                  (5 == f &&
                    (4 == r ||
                      h ||
                      (6 == r &&
                        (n > 0 ? (i > 0 ? p / s(10, l - i) : 0) : v[y - 1]) %
                          10 &
                          1) ||
                      r == (e.s < 0 ? 8 : 7))))),
          t < 1 || !v[0])
        )
          return (
            h
              ? ((o = b(e)),
                (v.length = 1),
                (t = t - o - 1),
                (v[0] = s(10, (7 - (t % 7)) % 7)),
                (e.e = c(-t / 7) || 0))
              : ((v.length = 1), (v[0] = e.e = e.s = 0)),
            e
          );
        if (
          (0 == n
            ? ((v.length = y), (o = 1), y--)
            : ((v.length = y + 1),
              (o = s(10, 7 - n)),
              (v[y] = i > 0 ? ((p / s(10, l - i)) % s(10, i) | 0) * o : 0)),
          h)
        )
          for (;;)
            if (0 == y) {
              1e7 == (v[0] += o) && ((v[0] = 1), ++e.e);
              break;
            } else {
              if (((v[y] += o), 1e7 != v[y])) break;
              (v[y--] = 0), (o = 1);
            }
        for (n = v.length; 0 === v[--n]; ) v.pop();
        if (a && (e.e > d || e.e < -d)) throw Error(u + b(e));
        return e;
      }
      function E(e, t) {
        var r,
          n,
          i,
          o,
          l,
          u,
          c,
          s,
          f,
          d,
          h = e.constructor,
          p = h.precision;
        if (!e.s || !t.s)
          return t.s ? (t.s = -t.s) : (t = new h(e)), a ? A(t, p) : t;
        if (
          ((c = e.d),
          (d = t.d),
          (n = t.e),
          (s = e.e),
          (c = c.slice()),
          (l = s - n))
        ) {
          for (
            (f = l < 0)
              ? ((r = c), (l = -l), (u = d.length))
              : ((r = d), (n = s), (u = c.length)),
              l > (i = Math.max(Math.ceil(p / 7), u) + 2) &&
                ((l = i), (r.length = 1)),
              r.reverse(),
              i = l;
            i--;

          )
            r.push(0);
          r.reverse();
        } else {
          for (
            (f = (i = c.length) < (u = d.length)) && (u = i), i = 0;
            i < u;
            i++
          )
            if (c[i] != d[i]) {
              f = c[i] < d[i];
              break;
            }
          l = 0;
        }
        for (
          f && ((r = c), (c = d), (d = r), (t.s = -t.s)),
            u = c.length,
            i = d.length - u;
          i > 0;
          --i
        )
          c[u++] = 0;
        for (i = d.length; i > l; ) {
          if (c[--i] < d[i]) {
            for (o = i; o && 0 === c[--o]; ) c[o] = 1e7 - 1;
            --c[o], (c[i] += 1e7);
          }
          c[i] -= d[i];
        }
        for (; 0 === c[--u]; ) c.pop();
        for (; 0 === c[0]; c.shift()) --n;
        return c[0] ? ((t.d = c), (t.e = n), a ? A(t, p) : t) : new h(0);
      }
      function S(e, t, r) {
        var n,
          i = b(e),
          a = v(e.d),
          o = a.length;
        return (
          t
            ? (r && (n = r - o) > 0
                ? (a = a.charAt(0) + "." + a.slice(1) + w(n))
                : o > 1 && (a = a.charAt(0) + "." + a.slice(1)),
              (a = a + (i < 0 ? "e" : "e+") + i))
            : i < 0
            ? ((a = "0." + w(-i - 1) + a), r && (n = r - o) > 0 && (a += w(n)))
            : i >= o
            ? ((a += w(i + 1 - o)),
              r && (n = r - i - 1) > 0 && (a = a + "." + w(n)))
            : ((n = i + 1) < o && (a = a.slice(0, n) + "." + a.slice(n)),
              r && (n = r - o) > 0 && (i + 1 === o && (a += "."), (a += w(n)))),
          e.s < 0 ? "-" + a : a
        );
      }
      function P(e, t) {
        if (e.length > t) return (e.length = t), !0;
      }
      function k(e) {
        if (!e || "object" != typeof e) throw Error(o + "Object expected");
        var t,
          r,
          n,
          i = [
            "precision",
            1,
            1e9,
            "rounding",
            0,
            8,
            "toExpNeg",
            -1 / 0,
            0,
            "toExpPos",
            0,
            1 / 0,
          ];
        for (t = 0; t < i.length; t += 3)
          if (void 0 !== (n = e[(r = i[t])]))
            if (c(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n;
            else throw Error(l + r + ": " + n);
        if (void 0 !== (n = e[(r = "LN10")]))
          if (n == Math.LN10) this[r] = new this(n);
          else throw Error(l + r + ": " + n);
        return this;
      }
      if (
        (((i = (function e(t) {
          var r, n, i;
          function a(e) {
            if (!(this instanceof a)) return new a(e);
            if (((this.constructor = a), e instanceof a)) {
              (this.s = e.s),
                (this.e = e.e),
                (this.d = (e = e.d) ? e.slice() : e);
              return;
            }
            if ("number" == typeof e) {
              if (0 * e != 0) throw Error(l + e);
              if (e > 0) this.s = 1;
              else if (e < 0) (e = -e), (this.s = -1);
              else {
                (this.s = 0), (this.e = 0), (this.d = [0]);
                return;
              }
              if (e === ~~e && e < 1e7) {
                (this.e = 0), (this.d = [e]);
                return;
              }
              return j(this, e.toString());
            }
            if ("string" != typeof e) throw Error(l + e);
            if (
              (45 === e.charCodeAt(0)
                ? ((e = e.slice(1)), (this.s = -1))
                : (this.s = 1),
              f.test(e))
            )
              j(this, e);
            else throw Error(l + e);
          }
          if (
            ((a.prototype = h),
            (a.ROUND_UP = 0),
            (a.ROUND_DOWN = 1),
            (a.ROUND_CEIL = 2),
            (a.ROUND_FLOOR = 3),
            (a.ROUND_HALF_UP = 4),
            (a.ROUND_HALF_DOWN = 5),
            (a.ROUND_HALF_EVEN = 6),
            (a.ROUND_HALF_CEIL = 7),
            (a.ROUND_HALF_FLOOR = 8),
            (a.clone = e),
            (a.config = a.set = k),
            void 0 === t && (t = {}),
            t)
          )
            for (
              r = 0,
                i = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"];
              r < i.length;

            )
              t.hasOwnProperty((n = i[r++])) || (t[n] = this[n]);
          return a.config(t), a;
        })(i)).default = i.Decimal =
          i),
        (n = new i(1)),
        "function" == typeof define && define.amd)
      ) {
        let t;
        e.r, void 0 !== (t = i) && e.v(t);
      } else
        t.exports
          ? (t.exports = i)
          : (r ||
              (r =
                "u" > typeof self && self && self.self == self
                  ? self
                  : Function("return this")()),
            (r.Decimal = i));
    })(e.e);
  },
  353941,
  (e) => {
    "use strict";
    var t,
      r,
      n,
      i,
      a,
      o,
      l,
      u,
      c,
      s,
      f,
      d,
      h,
      p,
      y,
      v,
      m,
      g,
      b,
      x,
      w,
      O,
      j,
      A,
      E,
      S,
      P,
      k,
      M,
      I,
      _ = e.i(719097),
      C = e.i(642947),
      T = e.i(914104),
      D = e.i(371638),
      N = e.i(455898),
      z = e.i(404685),
      L = e.i(321684),
      R = e.i(86959),
      B = e.i(524486),
      $ = e.i(177070),
      F = e.i(862030),
      U = e.i(110902),
      K = e.i(206400),
      H = e.i(337010);
    z.default.extend(L.default);
    let W = [
      {
        accessorKey: "server",
        header: "Server",
        cell: ({ row: e }) => {
          let t = B.knownServers.find(
              (t) =>
                t.address.toLowerCase() === e.original.address.toLowerCase()
            ),
            r = t?.name ?? (0, R.shortenId)(e.original.address);
          return (0, _.jsxs)(F.default, {
            href: `/server/${t?.address}`,
            className: "flex gap-3 items-center",
            children: [
              (0, _.jsx)($.default, {
                src: t?.logo ?? "/logo.png",
                alt: "logo",
                width: 20,
                height: 20,
                className: " rounded-lg",
              }),
              (0, _.jsxs)("div", {
                children: [
                  (0, _.jsx)(D.Typography, {
                    className: "font-semibold",
                    children: r,
                  }),
                  (0, _.jsx)(D.Typography, {
                    variant: "tip",
                    children: (0, R.shortenId)(e.original.address),
                  }),
                ],
              }),
            ],
          });
        },
      },
      {
        accessorKey: "txs",
        header: "TXS",
        cell: ({ row: e }) =>
          (0, _.jsx)("div", { children: e.original.txCount }),
      },
      {
        accessorKey: "volume",
        header: "Volume",
        cell: ({ row: e }) =>
          (0, _.jsxs)(D.Typography, { children: ["$", e.original.volume] }),
      },
      {
        accessorKey: "facilitator",
        header: "Facilitator",
        cell: ({ row: e }) => {
          let t =
            e.original.chainId === H.robinhoodChain.id
              ? H.robinhoodChain
              : K.xLayer;
          return (0, _.jsx)(F.default, {
            href: `${t.blockExplorers.default.url}/address/${e.original.facilitator}`,
            target: "_blank",
            children: (0, R.shortenId)(e.original.facilitator),
          });
        },
      },
      {
        accessorKey: "chain",
        header: "Chain",
        cell: ({ row: e }) => {
          let t = e.original.chainId;
          return (0, _.jsxs)("div", {
            className: "flex justify-end",
            children: [
              t === K.xLayer.id &&
                (0, _.jsx)($.default, {
                  src: "/xlayer.png",
                  alt: "naven",
                  width: 20,
                  height: 20,
                  className: "rounded-full",
                }),
              t === U.base.id &&
                (0, _.jsx)($.default, {
                  src: "/base.png",
                  alt: "naven",
                  width: 20,
                  height: 20,
                  className: "rounded-full",
                }),
              2368 === t &&
                (0, _.jsx)($.default, {
                  src: "/kite.png",
                  alt: "naven",
                  width: 20,
                  height: 20,
                  className: "rounded-full",
                }),
              t === H.robinhoodChain.id &&
                (0, _.jsx)($.default, {
                  src: "/robinhood.png",
                  alt: "robinhood",
                  width: 20,
                  height: 20,
                  className: "rounded-full",
                }),
            ],
          });
        },
      },
    ];
    function q(e) {
      return 4663 === e
        ? H.robinhoodX402FacilitatorAddress
        : H.xlayerX402FacilitatorAddress;
    }
    let V = () => {
      let [e, t] = (0, C.useState)({ pageIndex: 0, pageSize: 10 }),
        { data: r, isLoading: n } = (0, T.useQuery)({
          queryKey: ["sellers", "all"],
          queryFn: async () =>
            fetch("/api/sellers?chain=all").then((e) => e.json()),
          refetchInterval: 1e4,
        }),
        i = r?.map((e) => ({
          address: e.id,
          txCount: e.txCount,
          volume: e.volume,
          facilitator: e.facilitator ?? q(e.chainId ?? 4663),
          chainId: e.chainId ?? 4663,
        })),
        a = Math.ceil(B.knownServers.length / e.pageSize),
        o = B.knownServers
          .map((e) => {
            let t = i?.find(
                (t) =>
                  t.address.toLowerCase() === e.address.toLowerCase() &&
                  t.chainId === e.chainId
              ),
              r = 4663 === e.chainId;
            return {
              address: e.address,
              txCount: t?.txCount ?? 10 * !r,
              volume: t?.volume ?? (r ? "0" : "0.2"),
              facilitator:
                t?.facilitator ?? (r ? e.address.toLowerCase() : q(e.chainId)),
              chainId: e.chainId,
            };
          })
          .slice(e.pageIndex * e.pageSize, (e.pageIndex + 1) * e.pageSize);
      return (0, _.jsxs)("div", {
        children: [
          (0, _.jsx)(D.Typography, { variant: "h3", children: "Servers" }),
          (0, _.jsx)(D.Typography, {
            className: "text-foreground/60 mb-4",
            children:
              "Leading addresses that received x402 transfers and are currently listed",
          }),
          (0, _.jsx)(N.DataTable, {
            data: o,
            columns: W,
            isLoading: n,
            pagination: e,
            setPagination: t,
            pageCount: a,
          }),
        ],
      });
    };
    var Y = e.i(580095),
      X = C,
      G = e.i(470733),
      Z = [
        "dangerouslySetInnerHTML",
        "onCopy",
        "onCopyCapture",
        "onCut",
        "onCutCapture",
        "onPaste",
        "onPasteCapture",
        "onCompositionEnd",
        "onCompositionEndCapture",
        "onCompositionStart",
        "onCompositionStartCapture",
        "onCompositionUpdate",
        "onCompositionUpdateCapture",
        "onFocus",
        "onFocusCapture",
        "onBlur",
        "onBlurCapture",
        "onChange",
        "onChangeCapture",
        "onBeforeInput",
        "onBeforeInputCapture",
        "onInput",
        "onInputCapture",
        "onReset",
        "onResetCapture",
        "onSubmit",
        "onSubmitCapture",
        "onInvalid",
        "onInvalidCapture",
        "onLoad",
        "onLoadCapture",
        "onError",
        "onErrorCapture",
        "onKeyDown",
        "onKeyDownCapture",
        "onKeyPress",
        "onKeyPressCapture",
        "onKeyUp",
        "onKeyUpCapture",
        "onAbort",
        "onAbortCapture",
        "onCanPlay",
        "onCanPlayCapture",
        "onCanPlayThrough",
        "onCanPlayThroughCapture",
        "onDurationChange",
        "onDurationChangeCapture",
        "onEmptied",
        "onEmptiedCapture",
        "onEncrypted",
        "onEncryptedCapture",
        "onEnded",
        "onEndedCapture",
        "onLoadedData",
        "onLoadedDataCapture",
        "onLoadedMetadata",
        "onLoadedMetadataCapture",
        "onLoadStart",
        "onLoadStartCapture",
        "onPause",
        "onPauseCapture",
        "onPlay",
        "onPlayCapture",
        "onPlaying",
        "onPlayingCapture",
        "onProgress",
        "onProgressCapture",
        "onRateChange",
        "onRateChangeCapture",
        "onSeeked",
        "onSeekedCapture",
        "onSeeking",
        "onSeekingCapture",
        "onStalled",
        "onStalledCapture",
        "onSuspend",
        "onSuspendCapture",
        "onTimeUpdate",
        "onTimeUpdateCapture",
        "onVolumeChange",
        "onVolumeChangeCapture",
        "onWaiting",
        "onWaitingCapture",
        "onAuxClick",
        "onAuxClickCapture",
        "onClick",
        "onClickCapture",
        "onContextMenu",
        "onContextMenuCapture",
        "onDoubleClick",
        "onDoubleClickCapture",
        "onDrag",
        "onDragCapture",
        "onDragEnd",
        "onDragEndCapture",
        "onDragEnter",
        "onDragEnterCapture",
        "onDragExit",
        "onDragExitCapture",
        "onDragLeave",
        "onDragLeaveCapture",
        "onDragOver",
        "onDragOverCapture",
        "onDragStart",
        "onDragStartCapture",
        "onDrop",
        "onDropCapture",
        "onMouseDown",
        "onMouseDownCapture",
        "onMouseEnter",
        "onMouseLeave",
        "onMouseMove",
        "onMouseMoveCapture",
        "onMouseOut",
        "onMouseOutCapture",
        "onMouseOver",
        "onMouseOverCapture",
        "onMouseUp",
        "onMouseUpCapture",
        "onSelect",
        "onSelectCapture",
        "onTouchCancel",
        "onTouchCancelCapture",
        "onTouchEnd",
        "onTouchEndCapture",
        "onTouchMove",
        "onTouchMoveCapture",
        "onTouchStart",
        "onTouchStartCapture",
        "onPointerDown",
        "onPointerDownCapture",
        "onPointerMove",
        "onPointerMoveCapture",
        "onPointerUp",
        "onPointerUpCapture",
        "onPointerCancel",
        "onPointerCancelCapture",
        "onPointerEnter",
        "onPointerEnterCapture",
        "onPointerLeave",
        "onPointerLeaveCapture",
        "onPointerOver",
        "onPointerOverCapture",
        "onPointerOut",
        "onPointerOutCapture",
        "onGotPointerCapture",
        "onGotPointerCaptureCapture",
        "onLostPointerCapture",
        "onLostPointerCaptureCapture",
        "onScroll",
        "onScrollCapture",
        "onWheel",
        "onWheelCapture",
        "onAnimationStart",
        "onAnimationStartCapture",
        "onAnimationEnd",
        "onAnimationEndCapture",
        "onAnimationIteration",
        "onAnimationIterationCapture",
        "onTransitionEnd",
        "onTransitionEndCapture",
      ];
    function Q(e) {
      return "string" == typeof e && Z.includes(e);
    }
    var J = new Set([
      "aria-activedescendant",
      "aria-atomic",
      "aria-autocomplete",
      "aria-busy",
      "aria-checked",
      "aria-colcount",
      "aria-colindex",
      "aria-colspan",
      "aria-controls",
      "aria-current",
      "aria-describedby",
      "aria-details",
      "aria-disabled",
      "aria-errormessage",
      "aria-expanded",
      "aria-flowto",
      "aria-haspopup",
      "aria-hidden",
      "aria-invalid",
      "aria-keyshortcuts",
      "aria-label",
      "aria-labelledby",
      "aria-level",
      "aria-live",
      "aria-modal",
      "aria-multiline",
      "aria-multiselectable",
      "aria-orientation",
      "aria-owns",
      "aria-placeholder",
      "aria-posinset",
      "aria-pressed",
      "aria-readonly",
      "aria-relevant",
      "aria-required",
      "aria-roledescription",
      "aria-rowcount",
      "aria-rowindex",
      "aria-rowspan",
      "aria-selected",
      "aria-setsize",
      "aria-sort",
      "aria-valuemax",
      "aria-valuemin",
      "aria-valuenow",
      "aria-valuetext",
      "className",
      "color",
      "height",
      "id",
      "lang",
      "max",
      "media",
      "method",
      "min",
      "name",
      "style",
      "target",
      "width",
      "role",
      "tabIndex",
      "accentHeight",
      "accumulate",
      "additive",
      "alignmentBaseline",
      "allowReorder",
      "alphabetic",
      "amplitude",
      "arabicForm",
      "ascent",
      "attributeName",
      "attributeType",
      "autoReverse",
      "azimuth",
      "baseFrequency",
      "baselineShift",
      "baseProfile",
      "bbox",
      "begin",
      "bias",
      "by",
      "calcMode",
      "capHeight",
      "clip",
      "clipPath",
      "clipPathUnits",
      "clipRule",
      "colorInterpolation",
      "colorInterpolationFilters",
      "colorProfile",
      "colorRendering",
      "contentScriptType",
      "contentStyleType",
      "cursor",
      "cx",
      "cy",
      "d",
      "decelerate",
      "descent",
      "diffuseConstant",
      "direction",
      "display",
      "divisor",
      "dominantBaseline",
      "dur",
      "dx",
      "dy",
      "edgeMode",
      "elevation",
      "enableBackground",
      "end",
      "exponent",
      "externalResourcesRequired",
      "fill",
      "fillOpacity",
      "fillRule",
      "filter",
      "filterRes",
      "filterUnits",
      "floodColor",
      "floodOpacity",
      "focusable",
      "fontFamily",
      "fontSize",
      "fontSizeAdjust",
      "fontStretch",
      "fontStyle",
      "fontVariant",
      "fontWeight",
      "format",
      "from",
      "fx",
      "fy",
      "g1",
      "g2",
      "glyphName",
      "glyphOrientationHorizontal",
      "glyphOrientationVertical",
      "glyphRef",
      "gradientTransform",
      "gradientUnits",
      "hanging",
      "horizAdvX",
      "horizOriginX",
      "href",
      "ideographic",
      "imageRendering",
      "in2",
      "in",
      "intercept",
      "k1",
      "k2",
      "k3",
      "k4",
      "k",
      "kernelMatrix",
      "kernelUnitLength",
      "kerning",
      "keyPoints",
      "keySplines",
      "keyTimes",
      "lengthAdjust",
      "letterSpacing",
      "lightingColor",
      "limitingConeAngle",
      "local",
      "markerEnd",
      "markerHeight",
      "markerMid",
      "markerStart",
      "markerUnits",
      "markerWidth",
      "mask",
      "maskContentUnits",
      "maskUnits",
      "mathematical",
      "mode",
      "numOctaves",
      "offset",
      "opacity",
      "operator",
      "order",
      "orient",
      "orientation",
      "origin",
      "overflow",
      "overlinePosition",
      "overlineThickness",
      "paintOrder",
      "panose1",
      "pathLength",
      "patternContentUnits",
      "patternTransform",
      "patternUnits",
      "pointerEvents",
      "pointsAtX",
      "pointsAtY",
      "pointsAtZ",
      "preserveAlpha",
      "preserveAspectRatio",
      "primitiveUnits",
      "r",
      "radius",
      "refX",
      "refY",
      "renderingIntent",
      "repeatCount",
      "repeatDur",
      "requiredExtensions",
      "requiredFeatures",
      "restart",
      "result",
      "rotate",
      "rx",
      "ry",
      "seed",
      "shapeRendering",
      "slope",
      "spacing",
      "specularConstant",
      "specularExponent",
      "speed",
      "spreadMethod",
      "startOffset",
      "stdDeviation",
      "stemh",
      "stemv",
      "stitchTiles",
      "stopColor",
      "stopOpacity",
      "strikethroughPosition",
      "strikethroughThickness",
      "string",
      "stroke",
      "strokeDasharray",
      "strokeDashoffset",
      "strokeLinecap",
      "strokeLinejoin",
      "strokeMiterlimit",
      "strokeOpacity",
      "strokeWidth",
      "surfaceScale",
      "systemLanguage",
      "tableValues",
      "targetX",
      "targetY",
      "textAnchor",
      "textDecoration",
      "textLength",
      "textRendering",
      "to",
      "transform",
      "u1",
      "u2",
      "underlinePosition",
      "underlineThickness",
      "unicode",
      "unicodeBidi",
      "unicodeRange",
      "unitsPerEm",
      "vAlphabetic",
      "values",
      "vectorEffect",
      "version",
      "vertAdvY",
      "vertOriginX",
      "vertOriginY",
      "vHanging",
      "vIdeographic",
      "viewTarget",
      "visibility",
      "vMathematical",
      "widths",
      "wordSpacing",
      "writingMode",
      "x1",
      "x2",
      "x",
      "xChannelSelector",
      "xHeight",
      "xlinkActuate",
      "xlinkArcrole",
      "xlinkHref",
      "xlinkRole",
      "xlinkShow",
      "xlinkTitle",
      "xlinkType",
      "xmlBase",
      "xmlLang",
      "xmlns",
      "xmlnsXlink",
      "xmlSpace",
      "y1",
      "y2",
      "y",
      "yChannelSelector",
      "z",
      "zoomAndPan",
      "ref",
      "key",
      "angle",
    ]);
    function ee(e) {
      return "string" == typeof e && J.has(e);
    }
    function et(e) {
      return "string" == typeof e && e.startsWith("data-");
    }
    function er(e) {
      if ("object" != typeof e || null === e) return {};
      var t = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          (ee(r) || et(r)) &&
          (t[r] = e[r]);
      return t;
    }
    function en(e) {
      return null == e
        ? null
        : (0, C.isValidElement)(e) &&
          "object" == typeof e.props &&
          null !== e.props
        ? er(e.props)
        : "object" != typeof e || Array.isArray(e)
        ? null
        : er(e);
    }
    function ei(e) {
      var t = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          (ee(r) || et(r) || Q(r)) &&
          (t[r] = e[r]);
      return t;
    }
    var ea = ["children", "className"];
    function eo() {
      return (eo = Object.assign.bind()).apply(null, arguments);
    }
    var el = C.forwardRef((e, t) => {
        var r = e.children,
          n = e.className,
          i = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = (function (e, t) {
                if (null == e) return {};
                var r = {};
                for (var n in e)
                  if ({}.hasOwnProperty.call(e, n)) {
                    if (-1 !== t.indexOf(n)) continue;
                    r[n] = e[n];
                  }
                return r;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (n = 0; n < a.length; n++)
                (r = a[n]),
                  -1 === t.indexOf(r) &&
                    {}.propertyIsEnumerable.call(e, r) &&
                    (i[r] = e[r]);
            }
            return i;
          })(e, ea),
          a = (0, G.clsx)("recharts-layer", n);
        return C.createElement("g", eo({ className: a }, ei(i), { ref: t }), r);
      }),
      eu = (e) => null;
    function ec(e) {
      switch (typeof e) {
        case "number":
        case "symbol":
          return !1;
        case "string":
          return e.includes(".") || e.includes("[") || e.includes("]");
      }
    }
    function es(e) {
      return "string" == typeof e || "symbol" == typeof e
        ? e
        : Object.is(e?.valueOf?.(), -0)
        ? "-0"
        : String(e);
    }
    function ef(e) {
      let t = [],
        r = e.length;
      if (0 === r) return t;
      let n = 0,
        i = "",
        a = "",
        o = !1;
      for (46 === e.charCodeAt(0) && (t.push(""), n++); n < r; ) {
        let l = e[n];
        a
          ? "\\" === l && n + 1 < r
            ? (i += e[++n])
            : l === a
            ? (a = "")
            : (i += l)
          : o
          ? '"' === l || "'" === l
            ? (a = l)
            : "]" === l
            ? ((o = !1), t.push(i), (i = ""))
            : (i += l)
          : "[" === l
          ? ((o = !0), i && (t.push(i), (i = "")))
          : "." === l
          ? i && (t.push(i), (i = ""))
          : (i += l),
          n++;
      }
      return i && t.push(i), t;
    }
    function ed(e, t, r) {
      if (null == e) return r;
      switch (typeof t) {
        case "string": {
          let n = e[t];
          if (void 0 === n)
            if (ec(t)) return ed(e, ef(t), r);
            else return r;
          return n;
        }
        case "number":
        case "symbol": {
          "number" == typeof t && (t = es(t));
          let n = e[t];
          if (void 0 === n) return r;
          return n;
        }
        default: {
          if (Array.isArray(t)) {
            var n = e,
              i = t,
              a = r;
            if (0 === i.length) return a;
            let o = n;
            for (let e = 0; e < i.length; e++) {
              if (null == o) return a;
              o = o[i[e]];
            }
            return void 0 === o ? a : o;
          }
          let o = e[(t = Object.is(t?.valueOf(), -0) ? "-0" : String(t))];
          if (void 0 === o) return r;
          return o;
        }
      }
    }
    function eh(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4,
        r = 10 ** t,
        n = Math.round(e * r) / r;
      return Object.is(n, -0) ? 0 : n;
    }
    function ep(e) {
      for (
        var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1;
        n < t;
        n++
      )
        r[n - 1] = arguments[n];
      return e.reduce((e, t, n) => {
        var i = r[n - 1];
        return "string" == typeof i
          ? e + i + t
          : void 0 !== i
          ? e + eh(i) + t
          : e + t;
      }, "");
    }
    eu.displayName = "Cell";
    var ey = (e) => (0 === e ? 0 : e > 0 ? 1 : -1),
      ev = (e) => "number" == typeof e && e != +e,
      em = (e) =>
        "string" == typeof e && e.length > 1 && e.indexOf("%") === e.length - 1,
      eg = (e) => ("number" == typeof e || e instanceof Number) && !ev(e),
      eb = (e) => eg(e) || "string" == typeof e,
      ex = 0,
      ew = (e) => {
        var t = ++ex;
        return "".concat(e || "").concat(t);
      },
      eO = function (e, t) {
        var r,
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!eg(e) && "string" != typeof e) return n;
        if (em(e)) {
          if (null == t) return n;
          var a = e.indexOf("%");
          r = (t * parseFloat(e.slice(0, a))) / 100;
        } else r = +e;
        return ev(r) && (r = n), i && null != t && r > t && (r = t), r;
      },
      ej = (e) => {
        if (!Array.isArray(e)) return !1;
        for (var t = e.length, r = {}, n = 0; n < t; n++)
          if (r[String(e[n])]) return !0;
          else r[String(e[n])] = !0;
        return !1;
      };
    function eA(e, t, r) {
      return eg(e) && eg(t) ? eh(e + r * (t - e)) : t;
    }
    function eE(e, t, r) {
      if (e && e.length)
        return e.find(
          (e) => e && ("function" == typeof t ? t(e) : ed(e, t)) === r
        );
    }
    var eS = (e) =>
      null == e ? e : "".concat(e.charAt(0).toUpperCase()).concat(e.slice(1));
    function eP(e) {
      return null != e;
    }
    function ek() {}
    var eM = {
      devToolsEnabled: !0,
      isSsr: !(
        "u" > typeof window &&
        window.document &&
        window.document.createElement &&
        window.setTimeout
      ),
    };
    function eI(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    var e_ = (function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eI(Object(r), !0).forEach(function (t) {
                var n, i, a;
                (n = e),
                  (i = t),
                  (a = r[t]),
                  (i = (function (e) {
                    var t = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var r = e[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : t + "";
                  })(i)) in n
                    ? Object.defineProperty(n, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[i] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : eI(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      })({}, { cacheSize: 2e3, enableCache: !0 }),
      eC = new (class {
        constructor(e) {
          !(function (e, t, r) {
            var n;
            (t =
              "symbol" ==
              typeof (n = (function (e, t) {
                if ("object" != typeof e || !e) return e;
                var r = e[Symbol.toPrimitive];
                if (void 0 !== r) {
                  var n = r.call(e, t || "default");
                  if ("object" != typeof n) return n;
                  throw TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return ("string" === t ? String : Number)(e);
              })(t, "string"))
                ? n
                : n + "") in e
              ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = r);
          })(this, "cache", new Map()),
            (this.maxSize = e);
        }
        get(e) {
          var t = this.cache.get(e);
          return (
            void 0 !== t && (this.cache.delete(e), this.cache.set(e, t)), t
          );
        }
        set(e, t) {
          if (this.cache.has(e)) this.cache.delete(e);
          else if (this.cache.size >= this.maxSize) {
            var r = this.cache.keys().next().value;
            null != r && this.cache.delete(r);
          }
          this.cache.set(e, t);
        }
        clear() {
          this.cache.clear();
        }
        size() {
          return this.cache.size;
        }
      })(e_.cacheSize),
      eT = {
        position: "absolute",
        top: "-20000px",
        left: 0,
        padding: 0,
        margin: 0,
        border: "none",
        whiteSpace: "pre",
      },
      eD = "recharts_measurement_span",
      eN = (e, t) => {
        try {
          var r = document.getElementById(eD);
          r ||
            ((r = document.createElement("span")).setAttribute("id", eD),
            r.setAttribute("aria-hidden", "true"),
            document.body.appendChild(r)),
            Object.assign(r.style, eT, t),
            (r.textContent = "".concat(e));
          var n = r.getBoundingClientRect();
          return { width: n.width, height: n.height };
        } catch (e) {
          return { width: 0, height: 0 };
        }
      },
      ez = function (e) {
        var t,
          r,
          n,
          i,
          a,
          o,
          l =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (null == e || eM.isSsr) return { width: 0, height: 0 };
        if (!e_.enableCache) return eN(e, l);
        var u =
            ((t = l.fontSize || ""),
            (r = l.fontFamily || ""),
            (n = l.fontWeight || ""),
            (i = l.fontStyle || ""),
            (a = l.letterSpacing || ""),
            (o = l.textTransform || ""),
            ""
              .concat(e, "|")
              .concat(t, "|")
              .concat(r, "|")
              .concat(n, "|")
              .concat(i, "|")
              .concat(a, "|")
              .concat(o)),
          c = eC.get(u);
        if (c) return c;
        var s = eN(e, l);
        return eC.set(u, s), s;
      };
    function eL(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          var r =
            null == e
              ? null
              : ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
          if (null != r) {
            var n,
              i,
              a,
              o,
              l = [],
              u = !0,
              c = !1;
            try {
              if (((a = (r = r.call(e)).next), 0 === t)) {
                if (Object(r) !== r) return;
                u = !1;
              } else
                for (
                  ;
                  !(u = (n = a.call(r)).done) &&
                  (l.push(n.value), l.length !== t);
                  u = !0
                );
            } catch (e) {
              (c = !0), (i = e);
            } finally {
              try {
                if (
                  !u &&
                  null != r.return &&
                  ((o = r.return()), Object(o) !== o)
                )
                  return;
              } finally {
                if (c) throw i;
              }
            }
            return l;
          }
        })(e, t) ||
        (function (e, t) {
          if (e) {
            if ("string" == typeof e) return eR(e, t);
            var r = {}.toString.call(e).slice(8, -1);
            return (
              "Object" === r && e.constructor && (r = e.constructor.name),
              "Map" === r || "Set" === r
                ? Array.from(e)
                : "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                ? eR(e, t)
                : void 0
            );
          }
        })(e, t) ||
        (function () {
          throw TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function eR(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
      return n;
    }
    var eB = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      e$ = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
      eF = /^(px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q)$/,
      eU = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
      eK = {
        cm: 96 / 2.54,
        mm: 96 / 25.4,
        pt: 96 / 72,
        pc: 16,
        in: 96,
        Q: 96 / 101.6,
        px: 1,
      },
      eH = ["cm", "mm", "pt", "pc", "in", "Q", "px"];
    class eW {
      static parse(e) {
        var t,
          r = eL(null != (t = eU.exec(e)) ? t : [], 3),
          n = r[1],
          i = r[2];
        return null == n ? eW.NaN : new eW(parseFloat(n), null != i ? i : "");
      }
      constructor(e, t) {
        (this.num = e),
          (this.unit = t),
          (this.num = e),
          (this.unit = t),
          ev(e) && (this.unit = ""),
          "" === t || eF.test(t) || ((this.num = NaN), (this.unit = "")),
          (function (e) {
            return eH.includes(e);
          })(t) &&
            ((this.num = (function (e, t) {
              return e * eK[t];
            })(e, t)),
            (this.unit = "px"));
      }
      add(e) {
        return this.unit !== e.unit
          ? new eW(NaN, "")
          : new eW(this.num + e.num, this.unit);
      }
      subtract(e) {
        return this.unit !== e.unit
          ? new eW(NaN, "")
          : new eW(this.num - e.num, this.unit);
      }
      multiply(e) {
        return "" !== this.unit && "" !== e.unit && this.unit !== e.unit
          ? new eW(NaN, "")
          : new eW(this.num * e.num, this.unit || e.unit);
      }
      divide(e) {
        return "" !== this.unit && "" !== e.unit && this.unit !== e.unit
          ? new eW(NaN, "")
          : new eW(this.num / e.num, this.unit || e.unit);
      }
      toString() {
        return "".concat(this.num).concat(this.unit);
      }
      isNaN() {
        return ev(this.num);
      }
    }
    function eq(e) {
      if (null == e || e.includes("NaN")) return "NaN";
      for (var t = e; t.includes("*") || t.includes("/"); ) {
        var r,
          n = eL(null != (r = eB.exec(t)) ? r : [], 4),
          i = n[1],
          a = n[2],
          o = n[3],
          l = eW.parse(null != i ? i : ""),
          u = eW.parse(null != o ? o : ""),
          c = "*" === a ? l.multiply(u) : l.divide(u);
        if (c.isNaN()) return "NaN";
        t = t.replace(eB, c.toString());
      }
      for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
        var s,
          f = eL(null != (s = e$.exec(t)) ? s : [], 4),
          d = f[1],
          h = f[2],
          p = f[3],
          y = eW.parse(null != d ? d : ""),
          v = eW.parse(null != p ? p : ""),
          m = "+" === h ? y.add(v) : y.subtract(v);
        if (m.isNaN()) return "NaN";
        t = t.replace(e$, m.toString());
      }
      return t;
    }
    (r = "NaN"),
      (n = new eW(NaN, "")),
      (r =
        "symbol" ==
        typeof (t = (function (e, t) {
          if ("object" != typeof e || !e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != typeof n) return n;
            throw TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(r, "string"))
          ? t
          : t + "") in eW
        ? Object.defineProperty(eW, r, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (eW[r] = n);
    var eV = /\(([^()]*)\)/;
    function eY(e) {
      var t = (function (e) {
        try {
          var t;
          return (
            (t = e.replace(/\s+/g, "")),
            (t = (function (e) {
              for (var t, r = e; null != (t = eV.exec(r)); ) {
                var n = eL(t, 2)[1];
                r = r.replace(eV, eq(n));
              }
              return r;
            })(t)),
            (t = eq(t))
          );
        } catch (e) {
          return "NaN";
        }
      })(e.slice(5, -1));
      return "NaN" === t ? "" : t;
    }
    function eX(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function eG(e, t) {
      var r = (function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eX(Object(r), !0).forEach(function (t) {
                var n, i, a;
                (n = e),
                  (i = t),
                  (a = r[t]),
                  (i = (function (e) {
                    var t = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var r = e[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : t + "";
                  })(i)) in n
                    ? Object.defineProperty(n, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[i] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : eX(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      })({}, e);
      return Object.keys(t).reduce(
        (e, r) => (void 0 === e[r] && void 0 !== t[r] && (e[r] = t[r]), e),
        r
      );
    }
    function eZ(e) {
      return Number.isFinite(e);
    }
    function eQ(e) {
      return "number" == typeof e && e > 0 && Number.isFinite(e);
    }
    var eJ = [
        "x",
        "y",
        "lineHeight",
        "capHeight",
        "fill",
        "scaleToFit",
        "textAnchor",
        "verticalAnchor",
      ],
      e0 = ["dx", "dy", "angle", "className", "breakAll"];
    function e1() {
      return (e1 = Object.assign.bind()).apply(null, arguments);
    }
    function e2(e, t) {
      if (null == e) return {};
      var r,
        n,
        i = (function (e, t) {
          if (null == e) return {};
          var r = {};
          for (var n in e)
            if ({}.hasOwnProperty.call(e, n)) {
              if (-1 !== t.indexOf(n)) continue;
              r[n] = e[n];
            }
          return r;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (n = 0; n < a.length; n++)
          (r = a[n]),
            -1 === t.indexOf(r) &&
              {}.propertyIsEnumerable.call(e, r) &&
              (i[r] = e[r]);
      }
      return i;
    }
    function e3(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          var r =
            null == e
              ? null
              : ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
          if (null != r) {
            var n,
              i,
              a,
              o,
              l = [],
              u = !0,
              c = !1;
            try {
              if (((a = (r = r.call(e)).next), 0 === t)) {
                if (Object(r) !== r) return;
                u = !1;
              } else
                for (
                  ;
                  !(u = (n = a.call(r)).done) &&
                  (l.push(n.value), l.length !== t);
                  u = !0
                );
            } catch (e) {
              (c = !0), (i = e);
            } finally {
              try {
                if (
                  !u &&
                  null != r.return &&
                  ((o = r.return()), Object(o) !== o)
                )
                  return;
              } finally {
                if (c) throw i;
              }
            }
            return l;
          }
        })(e, t) ||
        (function (e, t) {
          if (e) {
            if ("string" == typeof e) return e5(e, t);
            var r = {}.toString.call(e).slice(8, -1);
            return (
              "Object" === r && e.constructor && (r = e.constructor.name),
              "Map" === r || "Set" === r
                ? Array.from(e)
                : "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                ? e5(e, t)
                : void 0
            );
          }
        })(e, t) ||
        (function () {
          throw TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function e5(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
      return n;
    }
    var e6 = /[ \f\n\r\t\v\u2028\u2029]+/,
      e4 = (e) => {
        var t = e.children,
          r = e.breakAll,
          n = e.style;
        try {
          var i = [];
          null != t &&
            (i = r ? t.toString().split("") : t.toString().split(e6));
          var a = i.map((e) => ({ word: e, width: ez(e, n).width })),
            o = r ? 0 : ez(" ", n).width;
          return { wordsWithComputedWidth: a, spaceWidth: o };
        } catch (e) {
          return null;
        }
      };
    function e8(e) {
      return "start" === e || "middle" === e || "end" === e || "inherit" === e;
    }
    var e7 = (e, t, r, n) =>
        e.reduce((e, i) => {
          var a = i.word,
            o = i.width,
            l = e[e.length - 1];
          return (
            l && null != o && (null == t || n || l.width + o + r < Number(t))
              ? (l.words.push(a), (l.width += o + r))
              : e.push({ words: [a], width: o }),
            e
          );
        }, []),
      e9 = (e) => e.reduce((e, t) => (e.width > t.width ? e : t)),
      te = (e, t, r, n, i, a, o, l) => {
        var u = e4({ breakAll: r, style: n, children: e.slice(0, t) + "…" });
        if (!u) return [!1, []];
        var c = e7(u.wordsWithComputedWidth, a, o, l);
        return [c.length > i || e9(c).width > Number(a), c];
      },
      tt = (e) => [
        { words: null == e ? [] : e.toString().split(e6), width: void 0 },
      ],
      tr = "#808080",
      tn = {
        angle: 0,
        breakAll: !1,
        capHeight: "0.71em",
        fill: tr,
        lineHeight: "1em",
        scaleToFit: !1,
        textAnchor: "start",
        verticalAnchor: "end",
        x: 0,
        y: 0,
      },
      ti = (0, C.forwardRef)((e, t) => {
        var r,
          n = eG(e, tn),
          i = n.x,
          a = n.y,
          o = n.lineHeight,
          l = n.capHeight,
          u = n.fill,
          c = n.scaleToFit,
          s = n.textAnchor,
          f = n.verticalAnchor,
          d = e2(n, eJ),
          h = (0, C.useMemo)(
            () =>
              ((e) => {
                var t = e.width,
                  r = e.scaleToFit,
                  n = e.children,
                  i = e.style,
                  a = e.breakAll,
                  o = e.maxLines;
                if ((t || r) && !eM.isSsr) {
                  var l = e4({ breakAll: a, children: n, style: i });
                  if (!l) return tt(n);
                  var u = l.wordsWithComputedWidth,
                    c = l.spaceWidth;
                  return ((e, t, r, n, i) => {
                    var a,
                      o = e.maxLines,
                      l = e.children,
                      u = e.style,
                      c = e.breakAll,
                      s = eg(o),
                      f = String(l),
                      d = e7(t, n, r, i);
                    if (!s || i || !(d.length > o || e9(d).width > Number(n)))
                      return d;
                    for (
                      var h = 0, p = f.length - 1, y = 0;
                      h <= p && y <= f.length - 1;

                    ) {
                      var v = Math.floor((h + p) / 2),
                        m = e3(te(f, v - 1, c, u, o, n, r, i), 2),
                        g = m[0],
                        b = m[1],
                        x = e3(te(f, v, c, u, o, n, r, i), 1)[0];
                      if (
                        (g || x || (h = v + 1), g && x && (p = v - 1), !g && x)
                      ) {
                        a = b;
                        break;
                      }
                      y++;
                    }
                    return a || d;
                  })(
                    { breakAll: a, children: n, maxLines: o, style: i },
                    u,
                    c,
                    t,
                    !!r
                  );
                }
                return tt(n);
              })({
                breakAll: d.breakAll,
                children: d.children,
                maxLines: d.maxLines,
                scaleToFit: c,
                style: d.style,
                width: d.width,
              }),
            [d.breakAll, d.children, d.maxLines, c, d.style, d.width]
          ),
          p = d.dx,
          y = d.dy,
          v = d.angle,
          m = d.className,
          g = d.breakAll,
          b = e2(d, e0);
        if (!eb(i) || !eb(a) || 0 === h.length) return null;
        var x = Number(i) + (eg(p) ? p : 0),
          w = Number(a) + (eg(y) ? y : 0);
        if (!eZ(x) || !eZ(w)) return null;
        switch (f) {
          case "start":
            r = eY("calc(".concat(l, ")"));
            break;
          case "middle":
            r = eY(
              "calc("
                .concat((h.length - 1) / 2, " * -")
                .concat(o, " + (")
                .concat(l, " / 2))")
            );
            break;
          default:
            r = eY("calc(".concat(h.length - 1, " * -").concat(o, ")"));
        }
        var O = [],
          j = h[0];
        if (c && null != j) {
          var A = j.width,
            E = d.width;
          O.push("scale(".concat(eg(E) && eg(A) ? E / A : 1, ")"));
        }
        return (
          v && O.push("rotate(".concat(v, ", ").concat(x, ", ").concat(w, ")")),
          O.length && (b.transform = O.join(" ")),
          C.createElement(
            "text",
            e1({}, ei(b), {
              ref: t,
              x: x,
              y: w,
              className: (0, G.clsx)("recharts-text", m),
              textAnchor: s,
              fill: u.includes("url") ? tr : u,
            }),
            h.map((e, t) => {
              var n = e.words.join(g ? "" : " ");
              return C.createElement(
                "tspan",
                { x: x, dy: 0 === t ? r : o, key: "".concat(n, "-").concat(t) },
                n
              );
            })
          )
        );
      });
    function ta(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function to(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? ta(Object(r), !0).forEach(function (t) {
              var n, i, a;
              (n = e),
                (i = t),
                (a = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value."
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = a);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : ta(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    ti.displayName = "Text";
    var tl = Math.PI / 180,
      tu = (e, t, r, n) => ({
        x: e + Math.cos(-tl * n) * r,
        y: t + Math.sin(-tl * n) * r,
      }),
      tc = e.i(40495),
      ts = (0, C.createContext)(null),
      tf = (e) => e,
      td = () => {
        var e = (0, C.useContext)(ts);
        return e ? e.store.dispatch : tf;
      },
      th = () => {},
      tp = () => th,
      ty = (e, t) => e === t;
    function tv(e) {
      var t = (0, C.useContext)(ts),
        r = (0, C.useMemo)(
          () =>
            t
              ? (t) => {
                  if (null != t) return e(t);
                }
              : th,
          [t, e]
        );
      return (0, tc.useSyncExternalStoreWithSelector)(
        t ? t.subscription.addNestedSub : tp,
        t ? t.store.getState : th,
        t ? t.store.getState : th,
        r,
        ty
      );
    }
    e.i(965595);
    var tm = Symbol.for("immer-nothing"),
      tg = Symbol.for("immer-draftable"),
      tb = Symbol.for("immer-state");
    function tx(e) {
      throw Error(
        `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
      );
    }
    var tw = Object,
      tO = tw.getPrototypeOf,
      tj = "constructor",
      tA = "prototype",
      tE = "configurable",
      tS = "enumerable",
      tP = "writable",
      tk = "value",
      tM = (e) => !!e && !!e[tb];
    function tI(e) {
      return (
        !!e && (tT(e) || tB(e) || !!e[tg] || !!e[tj]?.[tg] || t$(e) || tF(e))
      );
    }
    var t_ = tw[tA][tj].toString(),
      tC = new WeakMap();
    function tT(e) {
      if (!e || !tU(e)) return !1;
      let t = tO(e);
      if (null === t || t === tw[tA]) return !0;
      let r = tw.hasOwnProperty.call(t, tj) && t[tj];
      if (r === Object) return !0;
      if (!tK(r)) return !1;
      let n = tC.get(r);
      return (
        void 0 === n && ((n = Function.toString.call(r)), tC.set(r, n)),
        n === t_
      );
    }
    function tD(e, t, r = !0) {
      0 === tN(e)
        ? (r ? Reflect.ownKeys(e) : tw.keys(e)).forEach((r) => {
            t(r, e[r], e);
          })
        : e.forEach((r, n) => t(n, r, e));
    }
    function tN(e) {
      let t = e[tb];
      return t ? t.type_ : tB(e) ? 1 : t$(e) ? 2 : 3 * !!tF(e);
    }
    var tz = (e, t, r = tN(e)) =>
        2 === r ? e.has(t) : tw[tA].hasOwnProperty.call(e, t),
      tL = (e, t, r = tN(e)) => (2 === r ? e.get(t) : e[t]),
      tR = (e, t, r, n = tN(e)) => {
        2 === n ? e.set(t, r) : 3 === n ? e.add(r) : (e[t] = r);
      },
      tB = Array.isArray,
      t$ = (e) => e instanceof Map,
      tF = (e) => e instanceof Set,
      tU = (e) => "object" == typeof e,
      tK = (e) => "function" == typeof e,
      tH = (e) => (e.modified_ ? e.copy_ : e.base_);
    function tW(e, t) {
      if (t$(e)) return new Map(e);
      if (tF(e)) return new Set(e);
      if (tB(e)) return Array[tA].slice.call(e);
      let r = tT(e);
      if (!0 !== t && ("class_only" !== t || r)) {
        let t = tO(e);
        if (null !== t && r) return { ...e };
        let n = tw.create(t);
        return tw.assign(n, e);
      }
      {
        let t = tw.getOwnPropertyDescriptors(e);
        delete t[tb];
        let r = Reflect.ownKeys(t);
        for (let n = 0; n < r.length; n++) {
          let i = r[n],
            a = t[i];
          !1 === a[tP] && ((a[tP] = !0), (a[tE] = !0)),
            (a.get || a.set) &&
              (t[i] = { [tE]: !0, [tP]: !0, [tS]: a[tS], [tk]: e[i] });
        }
        return tw.create(tO(e), t);
      }
    }
    function tq(e, t = !1) {
      return (
        tY(e) ||
          tM(e) ||
          !tI(e) ||
          (tN(e) > 1 &&
            tw.defineProperties(e, { set: tV, add: tV, clear: tV, delete: tV }),
          tw.freeze(e),
          t &&
            tD(
              e,
              (e, t) => {
                tq(t, !0);
              },
              !1
            )),
        e
      );
    }
    var tV = {
      [tk]: function () {
        tx(2);
      },
    };
    function tY(e) {
      return !(null !== e && tU(e)) || tw.isFrozen(e);
    }
    var tX = "MapSet",
      tG = "Patches",
      tZ = "ArrayMethods",
      tQ = {};
    function tJ(e) {
      let t = tQ[e];
      return t || tx(0, e), t;
    }
    var t0 = (e) => !!tQ[e];
    function t1(e, t) {
      t &&
        ((e.patchPlugin_ = tJ(tG)),
        (e.patches_ = []),
        (e.inversePatches_ = []),
        (e.patchListener_ = t));
    }
    function t2(e) {
      t3(e), e.drafts_.forEach(t6), (e.drafts_ = null);
    }
    function t3(e) {
      e === a && (a = e.parent_);
    }
    var t5 = (e) =>
      (a = {
        drafts_: [],
        parent_: a,
        immer_: e,
        canAutoFreeze_: !0,
        unfinalizedDrafts_: 0,
        handledSet_: new Set(),
        processedForPatches_: new Set(),
        mapSetPlugin_: t0(tX) ? tJ(tX) : void 0,
        arrayMethodsPlugin_: t0(tZ) ? tJ(tZ) : void 0,
      });
    function t6(e) {
      let t = e[tb];
      0 === t.type_ || 1 === t.type_ ? t.revoke_() : (t.revoked_ = !0);
    }
    function t4(e, t) {
      t.unfinalizedDrafts_ = t.drafts_.length;
      let r = t.drafts_[0];
      if (void 0 !== e && e !== r) {
        r[tb].modified_ && (t2(t), tx(4)), tI(e) && (e = t8(t, e));
        let { patchPlugin_: n } = t;
        n && n.generateReplacementPatches_(r[tb].base_, e, t);
      } else e = t8(t, r);
      return (
        (function (e, t, r = !1) {
          !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && tq(t, r);
        })(t, e, !0),
        t2(t),
        t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
        e !== tm ? e : void 0
      );
    }
    function t8(e, t) {
      if (tY(t)) return t;
      let r = t[tb];
      if (!r) return rn(t, e.handledSet_, e);
      if (!t9(r, e)) return t;
      if (!r.modified_) return r.base_;
      if (!r.finalized_) {
        let { callbacks_: t } = r;
        if (t) for (; t.length > 0; ) t.pop()(e);
        rr(r, e);
      }
      return r.copy_;
    }
    function t7(e) {
      (e.finalized_ = !0), e.scope_.unfinalizedDrafts_--;
    }
    var t9 = (e, t) => e.scope_ === t,
      re = [];
    function rt(e, t, r, n) {
      let i = e.copy_ || e.base_,
        a = e.type_;
      if (void 0 !== n && tL(i, n, a) === t) return void tR(i, n, r, a);
      if (!e.draftLocations_) {
        let t = (e.draftLocations_ = new Map());
        tD(i, (e, r) => {
          if (tM(r)) {
            let n = t.get(r) || [];
            n.push(e), t.set(r, n);
          }
        });
      }
      for (let n of e.draftLocations_.get(t) ?? re) tR(i, n, r, a);
    }
    function rr(e, t) {
      if (
        e.modified_ &&
        !e.finalized_ &&
        (3 === e.type_ ||
          (1 === e.type_ && e.allIndicesReassigned_) ||
          (e.assigned_?.size ?? 0) > 0)
      ) {
        let { patchPlugin_: r } = t;
        if (r) {
          let n = r.getPath(e);
          n && r.generatePatches_(e, n, t);
        }
        t7(e);
      }
    }
    function rn(e, t, r) {
      return (
        (!r.immer_.autoFreeze_ && r.unfinalizedDrafts_ < 1) ||
          tM(e) ||
          t.has(e) ||
          !tI(e) ||
          tY(e) ||
          (t.add(e),
          tD(e, (n, i) => {
            if (tM(i)) {
              let t = i[tb];
              t9(t, r) && (tR(e, n, tH(t), e.type_), t7(t));
            } else tI(i) && rn(i, t, r);
          })),
        e
      );
    }
    var ri = {
        get(e, t) {
          let r;
          if (t === tb) return e;
          if ("constructor" === t || "__proto__" === t)
            return new Proxy((e.copy_ || e.base_)[t] || {}, {
              get: (e, t) =>
                "__proto__" === t || "prototype" === t
                  ? Object.freeze(Object.create(null))
                  : Reflect.get(e, t),
              set: () => !0,
              apply: (e, t, r) => Reflect.apply(e, t, r),
            });
          let n = e.scope_.arrayMethodsPlugin_,
            i = 1 === e.type_ && "string" == typeof t;
          if (i && n?.isArrayOperationMethod(t))
            return n.createMethodInterceptor(e, t);
          let a = e.copy_ || e.base_;
          if (!tz(a, t, e.type_)) {
            var o;
            let r;
            return (
              (o = e),
              (r = rl(a, t))
                ? tk in r
                  ? r[tk]
                  : r.get?.call(o.draft_)
                : void 0
            );
          }
          let l = a[t];
          if (
            e.finalized_ ||
            !tI(l) ||
            (i &&
              e.operationMethod &&
              n?.isMutatingArrayMethod(e.operationMethod) &&
              Number.isInteger((r = +t)) &&
              String(r) === t)
          )
            return l;
          if (l === ro(e.base_, t)) {
            rc(e);
            let r = 1 === e.type_ ? +t : t,
              n = rs(e.scope_, l, e, r);
            return (e.copy_[r] = n);
          }
          return l;
        },
        has: (e, t) =>
          "constructor" !== t &&
          "__proto__" !== t &&
          "prototype" !== t &&
          t in (e.copy_ || e.base_),
        ownKeys: (e) => Reflect.ownKeys(e.copy_ || e.base_),
        set(e, t, r) {
          if ("constructor" === t || "__proto__" === t || "prototype" === t)
            return !0;
          let n = rl(e.copy_ || e.base_, t);
          if (n?.set) return n.set.call(e.draft_, r), !0;
          if (!e.modified_) {
            let n = ro(e.copy_ || e.base_, t),
              i = n?.[tb];
            if (i && i.base_ === r)
              return (e.copy_[t] = r), e.assigned_.set(t, !1), !0;
            if (
              (r === n ? 0 !== r || 1 / r == 1 / n : r != r && n != n) &&
              (void 0 !== r || tz(e.base_, t, e.type_))
            )
              return !0;
            rc(e), ru(e);
          }
          return (
            !!(
              (e.copy_[t] === r && (void 0 !== r || tz(e.copy_, t, e.type_))) ||
              (Number.isNaN(r) && Number.isNaN(e.copy_[t]))
            ) ||
            ((e.copy_[t] = r),
            e.assigned_.set(t, !0),
            !(function (e, t, r) {
              let { scope_: n } = e;
              if (tM(r)) {
                let i = r[tb];
                t9(i, n) &&
                  i.callbacks_.push(function () {
                    rc(e), rt(e, r, tH(i), t);
                  });
              } else
                tI(r) &&
                  e.callbacks_.push(function () {
                    let i = e.copy_ || e.base_;
                    3 === e.type_
                      ? i.has(r) && rn(r, n.handledSet_, n)
                      : tL(i, t, e.type_) === r &&
                        n.drafts_.length > 1 &&
                        (e.assigned_.get(t) ?? !1) === !0 &&
                        e.copy_ &&
                        rn(tL(e.copy_, t, e.type_), n.handledSet_, n);
                  });
            })(e, t, r),
            !0)
          );
        },
        deleteProperty: (e, t) => (
          rc(e),
          void 0 !== ro(e.base_, t) || t in e.base_
            ? (e.assigned_.set(t, !1), ru(e))
            : e.assigned_.delete(t),
          e.copy_ && delete e.copy_[t],
          !0
        ),
        getOwnPropertyDescriptor(e, t) {
          let r = e.copy_ || e.base_,
            n = Reflect.getOwnPropertyDescriptor(r, t);
          return n
            ? {
                [tP]: !0,
                [tE]: 1 !== e.type_ || "length" !== t,
                [tS]: n[tS],
                [tk]: r[t],
              }
            : n;
        },
        defineProperty() {
          tx(11);
        },
        getPrototypeOf: (e) => tO(e.base_),
        setPrototypeOf() {
          tx(12);
        },
      },
      ra = {};
    for (let e in ri) {
      let t = ri[e];
      ra[e] = function () {
        let e = arguments;
        return (e[0] = e[0][0]), t.apply(this, e);
      };
    }
    function ro(e, t) {
      let r = e[tb];
      return (r ? r.copy_ || r.base_ : e)[t];
    }
    function rl(e, t) {
      if (!(t in e)) return;
      let r = tO(e);
      for (; r; ) {
        let e = Object.getOwnPropertyDescriptor(r, t);
        if (e) return e;
        r = tO(r);
      }
    }
    function ru(e) {
      !e.modified_ && ((e.modified_ = !0), e.parent_ && ru(e.parent_));
    }
    function rc(e) {
      e.copy_ ||
        ((e.assigned_ = new Map()),
        (e.copy_ = tW(e.base_, e.scope_.immer_.useStrictShallowCopy_)));
    }
    function rs(e, t, r, n) {
      let [i, o] = t$(t)
        ? tJ(tX).proxyMap_(t, r)
        : tF(t)
        ? tJ(tX).proxySet_(t, r)
        : (function (e, t) {
            let r = tB(e),
              n = {
                type_: +!!r,
                scope_: t ? t.scope_ : a,
                modified_: !1,
                finalized_: !1,
                assigned_: void 0,
                parent_: t,
                base_: e,
                draft_: null,
                copy_: null,
                revoke_: null,
                isManual_: !1,
                callbacks_: void 0,
              },
              i = n,
              o = ri;
            r && ((i = [n]), (o = ra));
            let { revoke: l, proxy: u } = Proxy.revocable(i, o);
            return (n.draft_ = u), (n.revoke_ = l), [u, n];
          })(t, r);
      if (
        ((r?.scope_ ?? a).drafts_.push(i),
        (o.callbacks_ = r?.callbacks_ ?? []),
        (o.key_ = n),
        r && void 0 !== n)
      )
        r.callbacks_.push(function (e) {
          if (!o || !t9(o, e)) return;
          e.mapSetPlugin_?.fixSetContents(o);
          let t = tH(o);
          rt(r, o.draft_ ?? o, t, n), rr(o, e);
        });
      else
        o.callbacks_.push(function (e) {
          e.mapSetPlugin_?.fixSetContents(o);
          let { patchPlugin_: t } = e;
          o.modified_ && t && t.generatePatches_(o, [], e);
        });
      return i;
    }
    function rf(e) {
      return (
        tM(e) || tx(10, e),
        (function e(t) {
          let r;
          if (!tI(t) || tY(t)) return t;
          let n = t[tb],
            i = !0;
          if (n) {
            if (!n.modified_) return n.base_;
            (n.finalized_ = !0),
              (r = tW(t, n.scope_.immer_.useStrictShallowCopy_)),
              (i = n.scope_.immer_.shouldUseStrictIteration());
          } else r = tW(t, !0);
          return (
            tD(
              r,
              (t, n) => {
                tR(r, t, e(n));
              },
              i
            ),
            n && (n.finalized_ = !1),
            r
          );
        })(e)
      );
    }
    (ra.deleteProperty = function (e, t) {
      return ra.set.call(this, e, t, void 0);
    }),
      (ra.set = function (e, t, r) {
        return ri.set.call(this, e[0], t, r, e[0]);
      });
    var rd = new (class {
        constructor(e) {
          (this.autoFreeze_ = !0),
            (this.useStrictShallowCopy_ = !1),
            (this.useStrictIteration_ = !1),
            (this.produce = (e, t, r) => {
              let n;
              if (tK(e) && !tK(t)) {
                let r = t;
                t = e;
                let n = this;
                return function (e = r, ...i) {
                  return n.produce(e, (e) => t.call(this, e, ...i));
                };
              }
              if ((tK(t) || tx(6), void 0 === r || tK(r) || tx(7), tI(e))) {
                let i = t5(this),
                  a = rs(i, e, void 0),
                  o = !0;
                try {
                  (n = t(a)), (o = !1);
                } finally {
                  o ? t2(i) : t3(i);
                }
                return t1(i, r), t4(n, i);
              }
              if (e && tU(e)) tx(1, e);
              else {
                if (
                  (void 0 === (n = t(e)) && (n = e),
                  n === tm && (n = void 0),
                  this.autoFreeze_ && tq(n, !0),
                  r)
                ) {
                  let t = [],
                    i = [];
                  tJ(tG).generateReplacementPatches_(e, n, {
                    patches_: t,
                    inversePatches_: i,
                  }),
                    r(t, i);
                }
                return n;
              }
            }),
            (this.produceWithPatches = (e, t) => {
              let r, n;
              return tK(e)
                ? (t, ...r) => this.produceWithPatches(t, (t) => e(t, ...r))
                : [
                    this.produce(e, t, (e, t) => {
                      (r = e), (n = t);
                    }),
                    r,
                    n,
                  ];
            }),
            ((e) => "boolean" == typeof e)(e?.autoFreeze) &&
              this.setAutoFreeze(e.autoFreeze),
            ((e) => "boolean" == typeof e)(e?.useStrictShallowCopy) &&
              this.setUseStrictShallowCopy(e.useStrictShallowCopy),
            ((e) => "boolean" == typeof e)(e?.useStrictIteration) &&
              this.setUseStrictIteration(e.useStrictIteration);
        }
        createDraft(e) {
          tI(e) || tx(8), tM(e) && (e = rf(e));
          let t = t5(this),
            r = rs(t, e, void 0);
          return (r[tb].isManual_ = !0), t3(t), r;
        }
        finishDraft(e, t) {
          let r = e && e[tb];
          (r && r.isManual_) || tx(9);
          let { scope_: n } = r;
          return t1(n, t), t4(void 0, n);
        }
        setAutoFreeze(e) {
          this.autoFreeze_ = e;
        }
        setUseStrictShallowCopy(e) {
          this.useStrictShallowCopy_ = e;
        }
        setUseStrictIteration(e) {
          this.useStrictIteration_ = e;
        }
        shouldUseStrictIteration() {
          return this.useStrictIteration_;
        }
        applyPatches(e, t) {
          let r;
          for (r = t.length - 1; r >= 0; r--) {
            let n = t[r];
            if (0 === n.path.length && "replace" === n.op) {
              e = n.value;
              break;
            }
          }
          r > -1 && (t = t.slice(r + 1));
          let n = tJ(tG).applyPatches_;
          return tM(e) ? n(e, t) : this.produce(e, (e) => n(e, t));
        }
      })().produce,
      rh = (e) => (Array.isArray(e) ? e : [e]),
      rp = 0,
      ry = class {
        revision = rp;
        _value;
        _lastValue;
        _isEqual = rv;
        constructor(e, t = rv) {
          (this._value = this._lastValue = e), (this._isEqual = t);
        }
        get value() {
          return this._value;
        }
        set value(e) {
          this.value !== e && ((this._value = e), (this.revision = ++rp));
        }
      };
    function rv(e, t) {
      return e === t;
    }
    function rm(e) {
      return e instanceof ry || console.warn("Not a valid cell! ", e), e.value;
    }
    var rg = (e, t) => !1;
    function rb() {
      return (function (e, t = rv) {
        return new ry(null, t);
      })(0, rg);
    }
    var rx = (e) => {
        let t = e.collectionTag;
        null === t && (t = e.collectionTag = rb()), rm(t);
      },
      rw = 0,
      rO = Object.getPrototypeOf({}),
      rj = class {
        constructor(e) {
          (this.value = e), (this.value = e), (this.tag.value = e);
        }
        proxy = new Proxy(this, rA);
        tag = rb();
        tags = {};
        children = {};
        collectionTag = null;
        id = rw++;
      },
      rA = {
        get: (e, t) =>
          (function () {
            let { value: r } = e,
              n = Reflect.get(r, t);
            if ("symbol" == typeof t || t in rO) return n;
            if ("object" == typeof n && null !== n) {
              var i;
              let r = e.children[t];
              return (
                void 0 === r &&
                  (r = e.children[t] =
                    Array.isArray((i = n)) ? new rE(i) : new rj(i)),
                r.tag && rm(r.tag),
                r.proxy
              );
            }
            {
              let r = e.tags[t];
              return (
                void 0 === r && ((r = e.tags[t] = rb()).value = n), rm(r), n
              );
            }
          })(),
        ownKeys: (e) => (rx(e), Reflect.ownKeys(e.value)),
        getOwnPropertyDescriptor: (e, t) =>
          Reflect.getOwnPropertyDescriptor(e.value, t),
        has: (e, t) => Reflect.has(e.value, t),
      },
      rE = class {
        constructor(e) {
          (this.value = e), (this.value = e), (this.tag.value = e);
        }
        proxy = new Proxy([this], rS);
        tag = rb();
        tags = {};
        children = {};
        collectionTag = null;
        id = rw++;
      },
      rS = {
        get: ([e], t) => ("length" === t && rx(e), rA.get(e, t)),
        ownKeys: ([e]) => rA.ownKeys(e),
        getOwnPropertyDescriptor: ([e], t) => rA.getOwnPropertyDescriptor(e, t),
        has: ([e], t) => rA.has(e, t),
      },
      rP =
        "u" < typeof WeakRef
          ? class {
              constructor(e) {
                this.value = e;
              }
              deref() {
                return this.value;
              }
            }
          : WeakRef;
    function rk() {
      return { s: 0, v: void 0, o: null, p: null };
    }
    function rM(e, t = {}) {
      let r,
        n = rk(),
        { resultEqualityCheck: i } = t,
        a = 0;
      function o() {
        let t,
          o = n,
          { length: l } = arguments;
        for (let e = 0; e < l; e++) {
          let t = arguments[e];
          if ("function" == typeof t || ("object" == typeof t && null !== t)) {
            let e = o.o;
            null === e && (o.o = e = new WeakMap());
            let r = e.get(t);
            void 0 === r ? ((o = rk()), e.set(t, o)) : (o = r);
          } else {
            let e = o.p;
            null === e && (o.p = e = new Map());
            let r = e.get(t);
            void 0 === r ? ((o = rk()), e.set(t, o)) : (o = r);
          }
        }
        let u = o;
        if (1 === o.s) t = o.v;
        else if (((t = e.apply(null, arguments)), a++, i)) {
          var c;
          let e = (c = r) instanceof rP ? c.deref() : c;
          null != e && i(e, t) && ((t = e), 0 !== a && a--),
            (r =
              ("object" == typeof t && null !== t) || "function" == typeof t
                ? new rP(t)
                : t);
        }
        return (u.s = 1), (u.v = t), t;
      }
      return (
        (o.clearCache = () => {
          (n = rk()), o.resetResultsCount();
        }),
        (o.resultsCount = () => a),
        (o.resetResultsCount = () => {
          a = 0;
        }),
        o
      );
    }
    var rI = (function (e, ...t) {
        let r = "function" == typeof e ? { memoize: e, memoizeOptions: t } : e,
          n = (...e) => {
            let t,
              n,
              i = 0,
              a = 0,
              o = {},
              l = e.pop();
            "object" == typeof l && ((o = l), (l = e.pop())),
              (function (
                e,
                t = `expected a function, instead received ${typeof e}`
              ) {
                if ("function" != typeof e) throw TypeError(t);
              })(
                l,
                `createSelector expects an output function after the inputs, but received: [${typeof l}]`
              );
            let {
                memoize: u,
                memoizeOptions: c = [],
                argsMemoize: s = rM,
                argsMemoizeOptions: f = [],
              } = { ...r, ...o },
              d = rh(c),
              h = rh(f),
              p =
                (!(function (
                  e,
                  t = "expected all items to be functions, instead received the following types: "
                ) {
                  if (!e.every((e) => "function" == typeof e)) {
                    let r = e
                      .map((e) =>
                        "function" == typeof e
                          ? `function ${e.name || "unnamed"}()`
                          : typeof e
                      )
                      .join(", ");
                    throw TypeError(`${t}[${r}]`);
                  }
                })(
                  (t = Array.isArray(e[0]) ? e[0] : e),
                  "createSelector expects all input-selectors to be functions, but received the following types: "
                ),
                t),
              y = u(function () {
                return i++, l.apply(null, arguments);
              }, ...d);
            return Object.assign(
              s(function () {
                a++;
                let e = (function (e, t) {
                  let r = [],
                    { length: n } = e;
                  for (let i = 0; i < n; i++) r.push(e[i].apply(null, t));
                  return r;
                })(p, arguments);
                return (n = y.apply(null, e));
              }, ...h),
              {
                resultFunc: l,
                memoizedResultFunc: y,
                dependencies: p,
                dependencyRecomputations: () => a,
                resetDependencyRecomputations: () => {
                  a = 0;
                },
                lastResult: () => n,
                recomputations: () => i,
                resetRecomputations: () => {
                  i = 0;
                },
                memoize: u,
                argsMemoize: s,
              }
            );
          };
        return Object.assign(n, { withTypes: () => n }), n;
      })(rM),
      r_ = Object.assign(
        (e, t = rI) => {
          !(function (
            e,
            t = `expected an object, instead received ${typeof e}`
          ) {
            if ("object" != typeof e) throw TypeError(t);
          })(
            e,
            `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
          );
          let r = Object.keys(e);
          return t(
            r.map((t) => e[t]),
            (...e) => e.reduce((e, t, n) => ((e[r[n]] = t), e), {})
          );
        },
        { withTypes: () => r_ }
      );
    function rC(e) {
      return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
    }
    var rT =
        ("function" == typeof Symbol && Symbol.observable) || "@@observable",
      rD = () => Math.random().toString(36).substring(7).split("").join("."),
      rN = {
        INIT: `@@redux/INIT${rD()}`,
        REPLACE: `@@redux/REPLACE${rD()}`,
        PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${rD()}`,
      };
    function rz(e) {
      if ("object" != typeof e || null === e) return !1;
      let t = e;
      for (; null !== Object.getPrototypeOf(t); ) t = Object.getPrototypeOf(t);
      return (
        Object.getPrototypeOf(e) === t || null === Object.getPrototypeOf(e)
      );
    }
    function rL(e) {
      let t,
        r = Object.keys(e),
        n = {};
      for (let t = 0; t < r.length; t++) {
        let i = r[t];
        "function" == typeof e[i] && (n[i] = e[i]);
      }
      let i = Object.keys(n);
      try {
        Object.keys(n).forEach((e) => {
          let t = n[e];
          if (void 0 === t(void 0, { type: rN.INIT })) throw Error(rC(12));
          if (void 0 === t(void 0, { type: rN.PROBE_UNKNOWN_ACTION() }))
            throw Error(rC(13));
        });
      } catch (e) {
        t = e;
      }
      return function (e = {}, r) {
        if (t) throw t;
        let a = !1,
          o = {};
        for (let t = 0; t < i.length; t++) {
          let l = i[t],
            u = n[l],
            c = e[l],
            s = u(c, r);
          if (void 0 === s) throw (r && r.type, Error(rC(14)));
          (o[l] = s), (a = a || s !== c);
        }
        return (a = a || i.length !== Object.keys(e).length) ? o : e;
      };
    }
    function rR(...e) {
      return 0 === e.length
        ? (e) => e
        : 1 === e.length
        ? e[0]
        : e.reduce(
            (e, t) =>
              (...r) =>
                e(t(...r))
          );
    }
    function rB(e) {
      return rz(e) && "type" in e && "string" == typeof e.type;
    }
    function r$(e) {
      return ({ dispatch: t, getState: r }) =>
        (n) =>
        (i) =>
          "function" == typeof i ? i(t, r, e) : n(i);
    }
    var rF = r$(),
      rU =
        "u" > typeof window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
          ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
          : function () {
              if (0 != arguments.length)
                return "object" == typeof arguments[0]
                  ? rR
                  : rR.apply(null, arguments);
            };
    function rK(e, t) {
      function r(...n) {
        if (t) {
          let r = t(...n);
          if (!r) throw Error(nO(0));
          return {
            type: e,
            payload: r.payload,
            ...("meta" in r && { meta: r.meta }),
            ...("error" in r && { error: r.error }),
          };
        }
        return { type: e, payload: n[0] };
      }
      return (
        (r.toString = () => `${e}`),
        (r.type = e),
        (r.match = (t) => rB(t) && t.type === e),
        r
      );
    }
    "u" > typeof window &&
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__;
    var rH = class e extends Array {
      constructor(...t) {
        super(...t), Object.setPrototypeOf(this, e.prototype);
      }
      static get [Symbol.species]() {
        return e;
      }
      concat(...e) {
        return super.concat.apply(this, e);
      }
      prepend(...t) {
        return 1 === t.length && Array.isArray(t[0])
          ? new e(...t[0].concat(this))
          : new e(...t.concat(this));
      }
    };
    function rW(e) {
      return tI(e) ? rd(e, () => {}) : e;
    }
    function rq(e, t, r) {
      return e.has(t) ? e.get(t) : e.set(t, r(t)).get(t);
    }
    var rV = "RTK_autoBatch",
      rY = () => (e) => ({ payload: e, meta: { [rV]: !0 } }),
      rX = (e) => (t) => {
        setTimeout(t, e);
      },
      rG =
        (e = { type: "raf" }) =>
        (t) =>
        (...r) => {
          let n,
            i = t(...r),
            a = !0,
            o = !1,
            l = !1,
            u = new Set(),
            c =
              "tick" === e.type
                ? queueMicrotask
                : "raf" === e.type
                ? "u" > typeof window && window.requestAnimationFrame
                  ? ((n = window.requestAnimationFrame),
                    (e) => {
                      let t = !1,
                        r = () => {
                          t ||
                            ((t = !0),
                            cancelAnimationFrame(i),
                            clearTimeout(a),
                            e());
                        },
                        i = n(r),
                        a = setTimeout(r, 100);
                    })
                  : rX(10)
                : "callback" === e.type
                ? e.queueNotification
                : rX(e.timeout),
            s = () => {
              (l = !1), o && ((o = !1), u.forEach((e) => e()));
            };
          return Object.assign({}, i, {
            subscribe(e) {
              let t = i.subscribe(() => a && e());
              return (
                u.add(e),
                () => {
                  t(), u.delete(e);
                }
              );
            },
            dispatch(e) {
              try {
                return (
                  (o = !(a = !e?.meta?.[rV])) && !l && ((l = !0), c(s)),
                  i.dispatch(e)
                );
              } finally {
                a = !0;
              }
            },
          });
        };
    function rZ(e) {
      let t,
        r = {},
        n = [],
        i = {
          addCase(e, t) {
            let n = "string" == typeof e ? e : e.type;
            if (!n) throw Error(nO(28));
            if (n in r) throw Error(nO(29));
            return (r[n] = t), i;
          },
          addAsyncThunk: (e, t) => (
            t.pending && (r[e.pending.type] = t.pending),
            t.rejected && (r[e.rejected.type] = t.rejected),
            t.fulfilled && (r[e.fulfilled.type] = t.fulfilled),
            t.settled && n.push({ matcher: e.settled, reducer: t.settled }),
            i
          ),
          addMatcher: (e, t) => (n.push({ matcher: e, reducer: t }), i),
          addDefaultCase: (e) => ((t = e), i),
        };
      return e(i), [r, n, t];
    }
    var rQ = Symbol.for("rtk-slice-createasyncthunk"),
      rJ =
        (((i = rJ || {}).reducer = "reducer"),
        (i.reducerWithPrepare = "reducerWithPrepare"),
        (i.asyncThunk = "asyncThunk"),
        i),
      r0 = (function ({ creators: e } = {}) {
        let t = e?.asyncThunk?.[rQ];
        return function (e) {
          let r,
            { name: n, reducerPath: i = n } = e;
          if (!n) throw Error(nO(11));
          let a =
              ("function" == typeof e.reducers
                ? e.reducers(
                    (function () {
                      function e(e, t) {
                        return {
                          _reducerDefinitionType: "asyncThunk",
                          payloadCreator: e,
                          ...t,
                        };
                      }
                      return (
                        (e.withTypes = () => e),
                        {
                          reducer: (e) =>
                            Object.assign(
                              { [e.name]: (...t) => e(...t) }[e.name],
                              { _reducerDefinitionType: "reducer" }
                            ),
                          preparedReducer: (e, t) => ({
                            _reducerDefinitionType: "reducerWithPrepare",
                            prepare: e,
                            reducer: t,
                          }),
                          asyncThunk: e,
                        }
                      );
                    })()
                  )
                : e.reducers) || {},
            o = Object.keys(a),
            l = {},
            u = {},
            c = {},
            s = [],
            f = {
              addCase(e, t) {
                let r = "string" == typeof e ? e : e.type;
                if (!r) throw Error(nO(12));
                if (r in u) throw Error(nO(13));
                return (u[r] = t), f;
              },
              addMatcher: (e, t) => (s.push({ matcher: e, reducer: t }), f),
              exposeAction: (e, t) => ((c[e] = t), f),
              exposeCaseReducer: (e, t) => ((l[e] = t), f),
            };
          function d() {
            let [t = {}, r = [], n] =
                "function" == typeof e.extraReducers
                  ? rZ(e.extraReducers)
                  : [e.extraReducers],
              i = { ...t, ...u };
            return (function (e, t) {
              let r,
                [n, i, a] = rZ(t);
              if ("function" == typeof e) r = () => rW(e());
              else {
                let t = rW(e);
                r = () => t;
              }
              function o(e = r(), t) {
                let l = [
                  n[t.type],
                  ...i
                    .filter(({ matcher: e }) => e(t))
                    .map(({ reducer: e }) => e),
                ];
                return (
                  0 === l.filter((e) => !!e).length && (l = [a]),
                  l.reduce((e, r) => {
                    if (r)
                      if (tM(e)) {
                        let n = r(e, t);
                        return void 0 === n ? e : n;
                      } else {
                        if (tI(e)) return rd(e, (e) => r(e, t));
                        let n = r(e, t);
                        if (void 0 === n) {
                          if (null === e) return e;
                          throw Error(
                            "A case reducer on a non-draftable value must not return undefined"
                          );
                        }
                        return n;
                      }
                    return e;
                  }, e)
                );
              }
              return (o.getInitialState = r), o;
            })(e.initialState, (e) => {
              for (let t in i) e.addCase(t, i[t]);
              for (let t of s) e.addMatcher(t.matcher, t.reducer);
              for (let t of r) e.addMatcher(t.matcher, t.reducer);
              n && e.addDefaultCase(n);
            });
          }
          o.forEach((r) => {
            let i = a[r],
              o = {
                reducerName: r,
                type: `${n}/${r}`,
                createNotation: "function" == typeof e.reducers,
              };
            "asyncThunk" === i._reducerDefinitionType
              ? (function ({ type: e, reducerName: t }, r, n, i) {
                  if (!i) throw Error(nO(18));
                  let {
                      payloadCreator: a,
                      fulfilled: o,
                      pending: l,
                      rejected: u,
                      settled: c,
                      options: s,
                    } = r,
                    f = i(e, a, s);
                  n.exposeAction(t, f),
                    o && n.addCase(f.fulfilled, o),
                    l && n.addCase(f.pending, l),
                    u && n.addCase(f.rejected, u),
                    c && n.addMatcher(f.settled, c),
                    n.exposeCaseReducer(t, {
                      fulfilled: o || r1,
                      pending: l || r1,
                      rejected: u || r1,
                      settled: c || r1,
                    });
                })(o, i, f, t)
              : (function (
                  { type: e, reducerName: t, createNotation: r },
                  n,
                  i
                ) {
                  let a, o;
                  if ("reducer" in n) {
                    if (r && "reducerWithPrepare" !== n._reducerDefinitionType)
                      throw Error(nO(17));
                    (a = n.reducer), (o = n.prepare);
                  } else a = n;
                  i.addCase(e, a)
                    .exposeCaseReducer(t, a)
                    .exposeAction(t, o ? rK(e, o) : rK(e));
                })(o, i, f);
          });
          let h = (e) => e,
            p = new Map(),
            y = new WeakMap();
          function v(e, t) {
            return r || (r = d()), r(e, t);
          }
          function m() {
            return r || (r = d()), r.getInitialState();
          }
          function g(t, r = !1) {
            function n(e) {
              let i = e[t];
              return void 0 === i && r && (i = rq(y, n, m)), i;
            }
            function i(t = h) {
              let n = rq(p, r, () => new WeakMap());
              return rq(n, t, () => {
                let n = {};
                for (let [i, a] of Object.entries(e.selectors ?? {}))
                  n[i] = (function (e, t, r, n) {
                    function i(a, ...o) {
                      let l = t(a);
                      return void 0 === l && n && (l = r()), e(l, ...o);
                    }
                    return (i.unwrapped = e), i;
                  })(a, t, () => rq(y, t, m), r);
                return n;
              });
            }
            return {
              reducerPath: t,
              getSelectors: i,
              get selectors() {
                return i(n);
              },
              selectSlice: n,
            };
          }
          let b = {
            name: n,
            reducer: v,
            actions: c,
            caseReducers: l,
            getInitialState: m,
            ...g(i),
            injectInto(e, { reducerPath: t, ...r } = {}) {
              let n = t ?? i;
              return (
                e.inject({ reducerPath: n, reducer: v }, r),
                { ...b, ...g(n, !0) }
              );
            },
          };
          return b;
        };
      })();
    function r1() {}
    var r2 = "listener",
      r3 = "completed",
      r5 = "cancelled",
      r6 = `task-${r5}`,
      r4 = `task-${r3}`,
      r8 = `${r2}-${r5}`,
      r7 = `${r2}-${r3}`,
      r9 = class {
        constructor(e) {
          (this.code = e), (this.message = `task ${r5} (reason: ${e})`);
        }
        code;
        name = "TaskAbortError";
        message;
      },
      ne = (e, t) => {
        if ("function" != typeof e) throw TypeError(nO(32));
      },
      nt = () => {},
      nr = (e, t = nt) => (e.catch(t), e),
      nn = (e, t) => (
        e.addEventListener("abort", t, { once: !0 }),
        () => e.removeEventListener("abort", t)
      ),
      ni = (e) => {
        if (e.aborted) throw new r9(e.reason);
      };
    function na(e, t) {
      let r = nt;
      return new Promise((n, i) => {
        let a = () => i(new r9(e.reason));
        e.aborted ? a() : ((r = nn(e, a)), t.finally(() => r()).then(n, i));
      }).finally(() => {
        r = nt;
      });
    }
    var no = async (e, t) => {
        try {
          await Promise.resolve();
          let t = await e();
          return { status: "ok", value: t };
        } catch (e) {
          return {
            status: e instanceof r9 ? "cancelled" : "rejected",
            error: e,
          };
        } finally {
          t?.();
        }
      },
      nl = (e) => (t) => nr(na(e, t).then((t) => (ni(e), t))),
      nu = (e) => {
        let t = nl(e);
        return (e) => t(new Promise((t) => setTimeout(t, e)));
      },
      { assign: nc } = Object,
      ns = {},
      nf = "listenerMiddleware",
      nd = (e) => {
        let {
          type: t,
          actionCreator: r,
          matcher: n,
          predicate: i,
          effect: a,
        } = e;
        if (t) i = rK(t).match;
        else if (r) (t = r.type), (i = r.match);
        else if (n) i = n;
        else if (i);
        else throw Error(nO(21));
        return ne(a, "options.listener"), { predicate: i, type: t, effect: a };
      },
      nh = nc(
        (e) => {
          let { type: t, predicate: r, effect: n } = nd(e);
          return {
            id: ((e = 21) => {
              let t = "",
                r = e;
              for (; r--; )
                t +=
                  "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[
                    (64 * Math.random()) | 0
                  ];
              return t;
            })(),
            effect: n,
            type: t,
            predicate: r,
            pending: new Set(),
            unsubscribe: () => {
              throw Error(nO(22));
            },
          };
        },
        { withTypes: () => nh }
      ),
      np = (e, t) => {
        let { type: r, effect: n, predicate: i } = nd(t);
        return Array.from(e.values()).find(
          (e) =>
            ("string" == typeof r ? e.type === r : e.predicate === i) &&
            e.effect === n
        );
      },
      ny = (e) => {
        e.pending.forEach((e) => {
          e.abort(r8);
        });
      },
      nv = (e, t, r) => {
        try {
          e(t, r);
        } catch (e) {
          setTimeout(() => {
            throw e;
          }, 0);
        }
      },
      nm = nc(rK(`${nf}/add`), { withTypes: () => nm }),
      ng = rK(`${nf}/removeAll`),
      nb = nc(rK(`${nf}/remove`), { withTypes: () => nb }),
      nx = (...e) => {
        console.error(`${nf}/error`, ...e);
      },
      nw = (e = {}) => {
        let t = new Map(),
          r = new Map(),
          { extra: n, onError: i = nx } = e;
        ne(i, "onError");
        let a = (e) => {
          var r;
          return (
            ((r = np(t, e) ?? nh(e)).unsubscribe = () => t.delete(r.id)),
            t.set(r.id, r),
            (e) => {
              r.unsubscribe(), e?.cancelActive && ny(r);
            }
          );
        };
        nc(a, { withTypes: () => a });
        let o = (e) => {
          let r = np(t, e);
          return r && (r.unsubscribe(), e.cancelActive && ny(r)), !!r;
        };
        nc(o, { withTypes: () => o });
        let l = async (e, o, l, u) => {
            var c, s;
            let f,
              d = new AbortController(),
              h =
                ((c = d.signal),
                (f = async (e, t) => {
                  ni(c);
                  let r = () => {},
                    n = [
                      new Promise((t, n) => {
                        let i = a({
                          predicate: e,
                          effect: (e, r) => {
                            r.unsubscribe(),
                              t([e, r.getState(), r.getOriginalState()]);
                          },
                        });
                        r = () => {
                          i(), n();
                        };
                      }),
                    ];
                  null != t &&
                    n.push(new Promise((e) => setTimeout(e, t, null)));
                  try {
                    let e = await na(c, Promise.race(n));
                    return ni(c), e;
                  } finally {
                    r();
                  }
                }),
                (e, t) => nr(f(e, t))),
              p = [];
            try {
              let i;
              e.pending.add(d),
                (i = r.get(e) ?? 0),
                r.set(e, i + 1),
                await Promise.resolve(
                  e.effect(
                    o,
                    nc({}, l, {
                      getOriginalState: u,
                      condition: (e, t) => h(e, t).then(Boolean),
                      take: h,
                      delay: nu(d.signal),
                      pause: nl(d.signal),
                      extra: n,
                      signal: d.signal,
                      fork:
                        ((s = d.signal),
                        (e, t) => {
                          ne(e, "taskExecutor");
                          let r = new AbortController();
                          nn(s, () => r.abort(s.reason));
                          let n = no(
                            async () => {
                              ni(s), ni(r.signal);
                              let t = await e({
                                pause: nl(r.signal),
                                delay: nu(r.signal),
                                signal: r.signal,
                              });
                              return ni(r.signal), t;
                            },
                            () => r.abort(r4)
                          );
                          return (
                            t?.autoJoin && p.push(n.catch(nt)),
                            {
                              result: nl(s)(n),
                              cancel() {
                                r.abort(r6);
                              },
                            }
                          );
                        }),
                      unsubscribe: e.unsubscribe,
                      subscribe: () => {
                        t.set(e.id, e);
                      },
                      cancelActiveListeners: () => {
                        e.pending.forEach((e, t, r) => {
                          e !== d && (e.abort(r8), r.delete(e));
                        });
                      },
                      cancel: () => {
                        d.abort(r8), e.pending.delete(d);
                      },
                      throwIfCancelled: () => {
                        ni(d.signal);
                      },
                    })
                  )
                );
            } catch (e) {
              e instanceof r9 || nv(i, e, { raisedBy: "effect" });
            } finally {
              let t;
              await Promise.all(p),
                d.abort(r7),
                1 === (t = r.get(e) ?? 1) ? r.delete(e) : r.set(e, t - 1),
                e.pending.delete(d);
            }
          },
          u = () => {
            for (let e of r.keys()) ny(e);
            t.clear();
          };
        return {
          middleware: (e) => (r) => (n) => {
            let c;
            if (!rB(n)) return r(n);
            if (nm.match(n)) return a(n.payload);
            if (ng.match(n)) return void u();
            if (nb.match(n)) return o(n.payload);
            let s = e.getState(),
              f = () => {
                if (s === ns) throw Error(nO(23));
                return s;
              };
            try {
              if (((c = r(n)), t.size > 0)) {
                let r = e.getState();
                for (let a of Array.from(t.values())) {
                  let t = !1;
                  try {
                    t = a.predicate(n, r, s);
                  } catch (e) {
                    (t = !1), nv(i, e, { raisedBy: "predicate" });
                  }
                  t && l(a, n, e, f);
                }
              }
            } finally {
              s = ns;
            }
            return c;
          },
          startListening: a,
          stopListening: o,
          clearListeners: u,
        };
      };
    function nO(e) {
      return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
    }
    var nj = r0({
        name: "chartLayout",
        initialState: {
          layoutType: "horizontal",
          width: 0,
          height: 0,
          margin: { top: 5, right: 5, bottom: 5, left: 5 },
          scale: 1,
        },
        reducers: {
          setLayout(e, t) {
            e.layoutType = t.payload;
          },
          setChartSize(e, t) {
            (e.width = t.payload.width), (e.height = t.payload.height);
          },
          setMargin(e, t) {
            var r, n, i, a;
            (e.margin.top = null != (r = t.payload.top) ? r : 0),
              (e.margin.right = null != (n = t.payload.right) ? n : 0),
              (e.margin.bottom = null != (i = t.payload.bottom) ? i : 0),
              (e.margin.left = null != (a = t.payload.left) ? a : 0);
          },
          setScale(e, t) {
            e.scale = t.payload;
          },
        },
      }),
      nA = nj.actions,
      nE = nA.setMargin,
      nS = nA.setLayout,
      nP = nA.setChartSize,
      nk = nA.setScale,
      nM = nj.reducer;
    function nI(e) {
      return "symbol" == typeof e
        ? 1
        : null === e
        ? 2
        : void 0 === e
        ? 3
        : 4 * (e != e);
    }
    let n_ = (e, t, r) => {
      if (e !== t) {
        let n = nI(e),
          i = nI(t);
        if (n === i && 0 === n) {
          if (e < t) return "desc" === r ? 1 : -1;
          if (e > t) return "desc" === r ? -1 : 1;
        }
        return "desc" === r ? i - n : n - i;
      }
      return 0;
    };
    function nC(e) {
      return "symbol" == typeof e || e instanceof Symbol;
    }
    let nT = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      nD = /^\w*$/,
      nN = /^(?:0|[1-9]\d*)$/;
    function nz(e, t = Number.MAX_SAFE_INTEGER) {
      switch (typeof e) {
        case "number":
          return Number.isInteger(e) && e >= 0 && e < t;
        case "symbol":
          return !1;
        case "string":
          return nN.test(e);
      }
    }
    function nL(e) {
      var t;
      return (
        null != e &&
        "function" != typeof e &&
        Number.isSafeInteger((t = e.length)) &&
        t >= 0
      );
    }
    function nR(e) {
      return null !== e && ("object" == typeof e || "function" == typeof e);
    }
    function nB(e, t) {
      return e === t || (Number.isNaN(e) && Number.isNaN(t));
    }
    function n$(e, t, r) {
      return (
        !!nR(r) &&
        ((!!("number" == typeof t && nL(r) && nz(t)) && t < r.length) ||
          ("string" == typeof t && t in r)) &&
        nB(r[t], e)
      );
    }
    function nF(e, ...t) {
      let r = t.length;
      return (
        r > 1 && n$(e, t[0], t[1])
          ? (t = [])
          : r > 2 && n$(t[0], t[1], t[2]) && (t = [t[0]]),
        (function (e, t, r, n) {
          if (null == e) return [];
          Array.isArray(e) || (e = Object.values(e)),
            Array.isArray(t) || (t = null == t ? [null] : [t]),
            0 === t.length && (t = [null]),
            Array.isArray(r) || (r = null == r ? [] : [r]),
            (r = r.map((e) => String(e)));
          let i = (e, t) => {
              let r = e;
              for (let e = 0; e < t.length && null != r; ++e) r = r[t[e]];
              return r;
            },
            a = t.map((e) => {
              var t;
              return (Array.isArray(e) && 1 === e.length && (e = e[0]),
              null == e ||
                "function" == typeof e ||
                Array.isArray(e) ||
                (!Array.isArray((t = e)) &&
                  ("number" == typeof t ||
                    "boolean" == typeof t ||
                    null == t ||
                    nC(t) ||
                    ("string" == typeof t && (nD.test(t) || !nT.test(t))) ||
                    0)))
                ? e
                : { key: e, path: ef(e) };
            });
          return e
            .map((e) => ({
              original: e,
              criteria: a.map((t) => {
                var r, n;
                return (
                  (r = t),
                  null == (n = e) || null == r
                    ? n
                    : "object" == typeof r && "key" in r
                    ? Object.hasOwn(n, r.key)
                      ? n[r.key]
                      : i(n, r.path)
                    : "function" == typeof r
                    ? r(n)
                    : Array.isArray(r)
                    ? i(n, r)
                    : "object" == typeof n
                    ? n[r]
                    : n
                );
              }),
            }))
            .slice()
            .sort((e, t) => {
              for (let n = 0; n < a.length; n++) {
                let i = n_(e.criteria[n], t.criteria[n], r[n]);
                if (0 !== i) return i;
              }
              return 0;
            })
            .map((e) => e.original);
        })(
          e,
          (function (e, t = 1) {
            let r = [],
              n = Math.floor(t),
              i = (e, t) => {
                for (let a = 0; a < e.length; a++) {
                  let o = e[a];
                  Array.isArray(o) && t < n ? i(o, t + 1) : r.push(o);
                }
              };
            return i(e, 0), r;
          })(t),
          ["asc"]
        )
      );
    }
    var nU = (e) => e.legend.settings,
      nK = rI([(e) => e.legend.payload, nU], (e, t) => {
        var r = t.itemSorter,
          n = e.flat(1);
        return r ? nF(n, r) : n;
      });
    function nH(e) {
      return "object" == typeof e && "length" in e ? e : Array.from(e);
    }
    function nW(e) {
      return function () {
        return e;
      };
    }
    function nq(e, t) {
      if ((i = e.length) > 1)
        for (var r, n, i, a = 1, o = e[t[0]], l = o.length; a < i; ++a)
          for (n = o, o = e[t[a]], r = 0; r < l; ++r)
            o[r][1] += o[r][0] = isNaN(n[r][1]) ? n[r][0] : n[r][1];
    }
    function nV(e) {
      for (var t = e.length, r = Array(t); --t >= 0; ) r[t] = t;
      return r;
    }
    function nY(e, t) {
      return e[t];
    }
    function nX(e) {
      let t = [];
      return (t.key = e), t;
    }
    function nG(e, t, r) {
      return Array.isArray(e) && e && t + r !== 0 ? e.slice(t, r + 1) : e;
    }
    function nZ(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function nQ(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? nZ(Object(r), !0).forEach(function (t) {
              var n, i, a;
              (n = e),
                (i = t),
                (a = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value."
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = a);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : nZ(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    function nJ(e, t, r) {
      return null == e || null == t
        ? r
        : eb(t)
        ? ed(e, t, r)
        : "function" == typeof t
        ? t(e)
        : r;
    }
    Array.prototype.slice;
    var n0 = (e, t) =>
        ("horizontal" === e && "xAxis" === t) ||
        ("vertical" === e && "yAxis" === t) ||
        ("centric" === e && "angleAxis" === t) ||
        ("radial" === e && "radiusAxis" === t),
      n1 = {
        sign: (e) => {
          var t,
            r = e.length;
          if (!(r <= 0)) {
            var n = null == (t = e[0]) ? void 0 : t.length;
            if (null != n && !(n <= 0))
              for (var i = 0; i < n; ++i)
                for (var a = 0, o = 0, l = 0; l < r; ++l) {
                  var u = e[l],
                    c = null == u ? void 0 : u[i];
                  if (null != c) {
                    var s = c[1],
                      f = c[0],
                      d = ev(s) ? f : s;
                    d >= 0
                      ? ((c[0] = a), (a += d), (c[1] = a))
                      : ((c[0] = o), (o += d), (c[1] = o));
                  }
                }
          }
        },
        expand: function (e, t) {
          if ((n = e.length) > 0) {
            for (var r, n, i, a = 0, o = e[0].length; a < o; ++a) {
              for (i = r = 0; r < n; ++r) i += e[r][a][1] || 0;
              if (i) for (r = 0; r < n; ++r) e[r][a][1] /= i;
            }
            nq(e, t);
          }
        },
        none: nq,
        silhouette: function (e, t) {
          if ((r = e.length) > 0) {
            for (var r, n = 0, i = e[t[0]], a = i.length; n < a; ++n) {
              for (var o = 0, l = 0; o < r; ++o) l += e[o][n][1] || 0;
              i[n][1] += i[n][0] = -l / 2;
            }
            nq(e, t);
          }
        },
        wiggle: function (e, t) {
          if ((i = e.length) > 0 && (n = (r = e[t[0]]).length) > 0) {
            for (var r, n, i, a = 0, o = 1; o < n; ++o) {
              for (var l = 0, u = 0, c = 0; l < i; ++l) {
                for (
                  var s = e[t[l]],
                    f = s[o][1] || 0,
                    d = (f - (s[o - 1][1] || 0)) / 2,
                    h = 0;
                  h < l;
                  ++h
                ) {
                  var p = e[t[h]];
                  d += (p[o][1] || 0) - (p[o - 1][1] || 0);
                }
                (u += f), (c += d * f);
              }
              (r[o - 1][1] += r[o - 1][0] = a), u && (a -= c / u);
            }
            (r[o - 1][1] += r[o - 1][0] = a), nq(e, t);
          }
        },
        positive: (e) => {
          var t,
            r = e.length;
          if (!(r <= 0)) {
            var n = null == (t = e[0]) ? void 0 : t.length;
            if (null != n && !(n <= 0))
              for (var i = 0; i < n; ++i)
                for (var a = 0, o = 0; o < r; ++o) {
                  var l = e[o],
                    u = null == l ? void 0 : l[i];
                  if (null != u) {
                    var c = ev(u[1]) ? u[0] : u[1];
                    c >= 0
                      ? ((u[0] = a), (a += c), (u[1] = a))
                      : ((u[0] = 0), (u[1] = 0));
                  }
                }
          }
        },
      };
    function n2(e) {
      return null == e ? void 0 : String(e);
    }
    function n3(e) {
      var t = e.axis,
        r = e.ticks,
        n = e.bandSize,
        i = e.entry,
        a = e.index,
        o = e.dataKey;
      if ("category" === t.type) {
        if (!t.allowDuplicatedCategory && t.dataKey && null != i[t.dataKey]) {
          var l = eE(r, "value", i[t.dataKey]);
          if (l) return l.coordinate + n / 2;
        }
        return null != r && r[a] ? r[a].coordinate + n / 2 : null;
      }
      var u = nJ(i, null == o ? t.dataKey : o),
        c = t.scale.map(u);
      return eg(c) ? c : null;
    }
    var n5 = (e) => {
        var t = e.axis,
          r = e.ticks,
          n = e.offset,
          i = e.bandSize,
          a = e.entry,
          o = e.index;
        if ("category" === t.type) return r[o] ? r[o].coordinate + n : null;
        var l = nJ(a, t.dataKey, t.scale.domain()[o]);
        if (null == l) return null;
        var u = t.scale.map(l);
        return eg(u) ? u - i / 2 + n : null;
      },
      n6 = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      n4 = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
      n8 = (e, t, r) => {
        if (e && e.scale && e.scale.bandwidth) {
          var n = e.scale.bandwidth();
          if (!r || n > 0) return n;
        }
        if (e && t && t.length >= 2) {
          for (
            var i = nF(t, (e) => e.coordinate), a = 1 / 0, o = 1, l = i.length;
            o < l;
            o++
          ) {
            var u = i[o],
              c = i[o - 1];
            a = Math.min(
              ((null == u ? void 0 : u.coordinate) || 0) -
                ((null == c ? void 0 : c.coordinate) || 0),
              a
            );
          }
          return a === 1 / 0 ? 0 : a;
        }
        return r ? void 0 : 0;
      };
    function n7(e) {
      var t = e.tooltipEntrySettings,
        r = e.dataKey,
        n = e.payload,
        i = e.value,
        a = e.name;
      return nQ(nQ({}, t), {}, { dataKey: r, payload: n, value: i, name: a });
    }
    function n9(e, t) {
      return null != e ? String(e) : "string" == typeof t ? t : void 0;
    }
    var ie = (e) => e.layout.width,
      it = (e) => e.layout.height,
      ir = (e) => e.layout.scale,
      ii = (e) => e.layout.margin,
      ia = rI(
        (e) => e.cartesianAxis.xAxis,
        (e) => Object.values(e)
      ),
      io = rI(
        (e) => e.cartesianAxis.yAxis,
        (e) => Object.values(e)
      );
    function il(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function iu(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? il(Object(r), !0).forEach(function (t) {
              var n, i, a;
              (n = e),
                (i = t),
                (a = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value."
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = a);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : il(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    var ic = rI(
        [
          ie,
          it,
          ii,
          (e) => e.brush.height,
          function (e) {
            return io(e).reduce(
              (e, t) =>
                "left" !== t.orientation || t.mirror || t.hide
                  ? e
                  : e + ("number" == typeof t.width ? t.width : 60),
              0
            );
          },
          function (e) {
            return io(e).reduce(
              (e, t) =>
                "right" !== t.orientation || t.mirror || t.hide
                  ? e
                  : e + ("number" == typeof t.width ? t.width : 60),
              0
            );
          },
          function (e) {
            return ia(e).reduce(
              (e, t) =>
                "top" !== t.orientation || t.mirror || t.hide
                  ? e
                  : e + t.height,
              0
            );
          },
          function (e) {
            return ia(e).reduce(
              (e, t) =>
                "bottom" !== t.orientation || t.mirror || t.hide
                  ? e
                  : e + t.height,
              0
            );
          },
          nU,
          (e) => e.legend.size,
        ],
        (e, t, r, n, i, a, o, l, u, c) => {
          var s = { left: (r.left || 0) + i, right: (r.right || 0) + a },
            f = iu(
              iu({}, { top: (r.top || 0) + o, bottom: (r.bottom || 0) + l }),
              s
            ),
            d = f.bottom;
          f.bottom += n;
          var h =
              e -
              (f = ((e, t, r) => {
                if (t && r) {
                  var n = r.width,
                    i = r.height,
                    a = t.align,
                    o = t.verticalAlign,
                    l = t.layout;
                  if (
                    ("vertical" === l ||
                      ("horizontal" === l && "middle" === o)) &&
                    "center" !== a &&
                    eg(e[a])
                  )
                    return nQ(nQ({}, e), {}, { [a]: e[a] + (n || 0) });
                  if (
                    ("horizontal" === l ||
                      ("vertical" === l && "center" === a)) &&
                    "middle" !== o &&
                    eg(e[o])
                  )
                    return nQ(nQ({}, e), {}, { [o]: e[o] + (i || 0) });
                }
                return e;
              })(f, u, c)).left -
              f.right,
            p = t - f.top - f.bottom;
          return iu(
            iu({ brushBottom: d }, f),
            {},
            { width: Math.max(h, 0), height: Math.max(p, 0) }
          );
        }
      ),
      is = rI(ic, (e) => ({
        x: e.left,
        y: e.top,
        width: e.width,
        height: e.height,
      })),
      id = rI(ie, it, (e, t) => ({ x: 0, y: 0, width: e, height: t })),
      ih = (0, C.createContext)(null),
      ip = () => null != (0, C.useContext)(ih),
      iy = (e) => e.brush,
      iv = rI([iy, ic, ii], (e, t, r) => ({
        height: e.height,
        x: eg(e.x) ? e.x : t.left,
        y: eg(e.y)
          ? e.y
          : t.top +
            t.height +
            t.brushBottom -
            ((null == r ? void 0 : r.bottom) || 0),
        width: eg(e.width) ? e.width : t.width,
      })),
      im = function (e, t) {
        for (
          var r = arguments.length, n = Array(r > 2 ? r - 2 : 0), i = 2;
          i < r;
          i++
        )
          n[i - 2] = arguments[i];
        if (
          "u" > typeof console &&
          console.warn &&
          (void 0 === t &&
            console.warn("LogUtils requires an error message argument"),
          !e)
        )
          if (void 0 === t)
            console.warn(
              "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
            );
          else {
            var a = 0;
            console.warn(t.replace(/%s/g, () => n[a++]));
          }
      },
      ig = "100%",
      ib = "100%",
      ix = { width: -1, height: -1 },
      iw = (e, t, r) => {
        var n = r.width,
          i = void 0 === n ? ig : n,
          a = r.height,
          o = void 0 === a ? ib : a,
          l = r.aspect,
          u = r.maxHeight,
          c = em(i) ? e : Number(i),
          s = em(o) ? t : Number(o);
        return (
          l &&
            l > 0 &&
            (c ? (s = c / l) : s && (c = s * l),
            u && null != s && s > u && (s = u)),
          { calculatedWidth: c, calculatedHeight: s }
        );
      },
      iO = { width: 0, height: 0, overflow: "visible" },
      ij = { width: 0, overflowX: "visible" },
      iA = { height: 0, overflowY: "visible" },
      iE = {},
      iS = [
        "aspect",
        "initialDimension",
        "width",
        "height",
        "minWidth",
        "minHeight",
        "maxHeight",
        "children",
        "debounce",
        "id",
        "className",
        "onResize",
        "style",
      ];
    function iP() {
      return (iP = Object.assign.bind()).apply(null, arguments);
    }
    function ik(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function iM(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? ik(Object(r), !0).forEach(function (t) {
              var n, i, a;
              (n = e),
                (i = t),
                (a = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value."
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = a);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : ik(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    function iI(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
      return n;
    }
    var i_ = (0, C.createContext)(ix);
    function iC(e) {
      var t = e.children,
        r = e.width,
        n = e.height,
        i = (0, C.useMemo)(() => ({ width: r, height: n }), [r, n]);
      return eQ(i.width) && eQ(i.height)
        ? C.createElement(i_.Provider, { value: i }, t)
        : null;
    }
    var iT = () => (0, C.useContext)(i_),
      iD = (0, C.forwardRef)((e, t) => {
        var r,
          n,
          i,
          a,
          o,
          l,
          u = e.aspect,
          c = e.initialDimension,
          s = void 0 === c ? ix : c,
          f = e.width,
          d = e.height,
          h = e.minWidth,
          p = void 0 === h ? 0 : h,
          y = e.minHeight,
          v = e.maxHeight,
          m = e.children,
          g = e.debounce,
          b = void 0 === g ? 0 : g,
          x = e.id,
          w = e.className,
          O = e.onResize,
          j = e.style,
          A = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = (function (e, t) {
                if (null == e) return {};
                var r = {};
                for (var n in e)
                  if ({}.hasOwnProperty.call(e, n)) {
                    if (-1 !== t.indexOf(n)) continue;
                    r[n] = e[n];
                  }
                return r;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (n = 0; n < a.length; n++)
                (r = a[n]),
                  -1 === t.indexOf(r) &&
                    {}.propertyIsEnumerable.call(e, r) &&
                    (i[r] = e[r]);
            }
            return i;
          })(e, iS),
          E = (0, C.useRef)(null),
          S = (0, C.useRef)();
        (S.current = O), (0, C.useImperativeHandle)(t, () => E.current);
        var P =
            (function (e) {
              if (Array.isArray(e)) return e;
            })(
              (r = (0, C.useState)({
                containerWidth: s.width,
                containerHeight: s.height,
              }))
            ) ||
            (function (e, t) {
              var r =
                null == e
                  ? null
                  : ("u" > typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
              if (null != r) {
                var n,
                  i,
                  a,
                  o,
                  l = [],
                  u = !0,
                  c = !1;
                try {
                  (a = (r = r.call(e)).next), !1;
                  for (
                    ;
                    !(u = (n = a.call(r)).done) &&
                    (l.push(n.value), 2 !== l.length);
                    u = !0
                  );
                } catch (e) {
                  (c = !0), (i = e);
                } finally {
                  try {
                    if (
                      !u &&
                      null != r.return &&
                      ((o = r.return()), Object(o) !== o)
                    )
                      return;
                  } finally {
                    if (c) throw i;
                  }
                }
                return l;
              }
            })(r, 2) ||
            (function (e, t) {
              if (e) {
                if ("string" == typeof e) return iI(e, 2);
                var r = {}.toString.call(e).slice(8, -1);
                return (
                  "Object" === r && e.constructor && (r = e.constructor.name),
                  "Map" === r || "Set" === r
                    ? Array.from(e)
                    : "Arguments" === r ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                    ? iI(e, 2)
                    : void 0
                );
              }
            })(r, 2) ||
            (function () {
              throw TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })(),
          k = P[0],
          M = P[1],
          I = (0, C.useCallback)((e, t) => {
            M((r) => {
              var n = Math.round(e),
                i = Math.round(t);
              return r.containerWidth === n && r.containerHeight === i
                ? r
                : { containerWidth: n, containerHeight: i };
            });
          }, []);
        (0, C.useEffect)(() => {
          if (null == E.current || "u" < typeof ResizeObserver) return ek;
          var e = (e) => {
            var t,
              r = e[0];
            if (null != r) {
              var n = r.contentRect,
                i = n.width,
                a = n.height;
              I(i, a), null == (t = S.current) || t.call(S, i, a);
            }
          };
          b > 0 &&
            (e = (function (e, t = 0, r = {}) {
              "object" != typeof r && (r = {});
              let { leading: n = !0, trailing: i = !0, signal: a } = r;
              return (function (e, t = 0, r = {}) {
                let n;
                "object" != typeof r && (r = {});
                let {
                    signal: i,
                    leading: a = !1,
                    trailing: o = !0,
                    maxWait: l,
                  } = r,
                  u = [, ,];
                a && (u[0] = "leading"), o && (u[1] = "trailing");
                let c = null,
                  s = (function (e, t, { signal: r, edges: n } = {}) {
                    let i,
                      a = null,
                      o = null != n && n.includes("leading"),
                      l = null == n || n.includes("trailing"),
                      u = () => {
                        null !== a && (e.apply(i, a), (i = void 0), (a = null));
                      },
                      c = null,
                      s = () => {
                        null != c && clearTimeout(c),
                          (c = setTimeout(() => {
                            (c = null), l && u(), d();
                          }, t));
                      },
                      f = () => {
                        null !== c && (clearTimeout(c), (c = null));
                      },
                      d = () => {
                        f(), (i = void 0), (a = null);
                      },
                      h = function (...e) {
                        if (r?.aborted) return;
                        (i = this), (a = e);
                        let t = null == c;
                        s(), o && t && u();
                      };
                    return (
                      (h.schedule = s),
                      (h.cancel = d),
                      (h.flush = () => {
                        f(), u();
                      }),
                      r?.addEventListener("abort", d, { once: !0 }),
                      h
                    );
                  })(
                    function (...t) {
                      (n = e.apply(this, t)), (c = null);
                    },
                    t,
                    { signal: i, edges: u }
                  ),
                  f = function (...t) {
                    return null != l &&
                      (null === c && (c = Date.now()), Date.now() - c >= l)
                      ? ((n = e.apply(this, t)),
                        (c = Date.now()),
                        s.cancel(),
                        s.schedule(),
                        n)
                      : (s.apply(this, t), n);
                  };
                return (
                  (f.cancel = s.cancel), (f.flush = () => (s.flush(), n)), f
                );
              })(e, t, { leading: n, trailing: i, signal: a, maxWait: t });
            })(e, b, { trailing: !0, leading: !1 }));
          var t = new ResizeObserver(e),
            r = E.current.getBoundingClientRect();
          return (
            I(r.width, r.height),
            t.observe(E.current),
            () => {
              t.disconnect();
            }
          );
        }, [I, b]);
        var _ = k.containerWidth,
          T = k.containerHeight;
        im(!u || u > 0, "The aspect(%s) must be greater than zero.", u);
        var D = iw(_, T, { width: f, height: d, aspect: u, maxHeight: v }),
          N = D.calculatedWidth,
          z = D.calculatedHeight;
        return (
          im(
            _ < 0 || T < 0 || (null != N && N > 0) || (null != z && z > 0),
            "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.",
            N,
            z,
            f,
            d,
            p,
            y,
            u
          ),
          C.createElement(
            "div",
            iP(
              {
                id: x ? "".concat(x) : void 0,
                className: (0, G.clsx)("recharts-responsive-container", w),
                style: iM(
                  iM({}, void 0 === j ? {} : j),
                  {},
                  {
                    width: f,
                    height: d,
                    minWidth: p,
                    minHeight: y,
                    maxHeight: v,
                  }
                ),
                ref: E,
              },
              A
            ),
            C.createElement(
              "div",
              {
                style:
                  ((i = (n = { width: f, height: d }).width),
                  (a = n.height),
                  (o = em(i)),
                  (l = em(a)),
                  o && l ? iO : o ? ij : l ? iA : iE),
              },
              C.createElement(iC, { width: N, height: z }, m)
            )
          )
        );
      }),
      iN = (0, C.forwardRef)((e, t) => {
        var r,
          n,
          i,
          a,
          o,
          l,
          u = iT();
        if (eQ(u.width) && eQ(u.height)) return e.children;
        var c =
            ((n = (r = { width: e.width, height: e.height, aspect: e.aspect })
              .width),
            (i = r.height),
            (a = r.aspect),
            (o = n),
            (l = i),
            void 0 === o && void 0 === l
              ? ((o = ig), (l = ib))
              : void 0 === o
              ? (o = a && a > 0 ? void 0 : ig)
              : void 0 === l && (l = a && a > 0 ? void 0 : ib),
            { width: o, height: l }),
          s = c.width,
          f = c.height,
          d = iw(void 0, void 0, {
            width: s,
            height: f,
            aspect: e.aspect,
            maxHeight: e.maxHeight,
          }),
          h = d.calculatedWidth,
          p = d.calculatedHeight;
        return eg(h) && eg(p)
          ? C.createElement(iC, { width: h, height: p }, e.children)
          : C.createElement(iD, iP({}, e, { width: s, height: f, ref: t }));
      });
    function iz(e) {
      if (e)
        return {
          x: e.x,
          y: e.y,
          upperWidth: "upperWidth" in e ? e.upperWidth : e.width,
          lowerWidth: "lowerWidth" in e ? e.lowerWidth : e.width,
          width: e.width,
          height: e.height,
        };
    }
    var iL = () => {
        var e,
          t = ip(),
          r = tv(is),
          n = tv(iv),
          i = null == (e = tv(iy)) ? void 0 : e.padding;
        return t && n && i
          ? {
              width: n.width - i.left - i.right,
              height: n.height - i.top - i.bottom,
              x: i.left,
              y: i.top,
            }
          : r;
      },
      iR = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: 0,
        height: 0,
        brushBottom: 0,
      },
      iB = (e) => e.layout.layoutType,
      i$ = () => {
        var e = tv(iB);
        if ("horizontal" === e || "vertical" === e) return e;
      },
      iF = (e) => {
        var t = e.layout.layoutType;
        if ("centric" === t || "radial" === t) return t;
      },
      iU = (e) => {
        var t = td(),
          r = ip(),
          n = e.width,
          i = e.height,
          a = iT(),
          o = n,
          l = i;
        return (
          a &&
            ((o = a.width > 0 ? a.width : n),
            (l = a.height > 0 ? a.height : i)),
          (0, C.useEffect)(() => {
            !r && eQ(o) && eQ(l) && t(nP({ width: o, height: l }));
          }, [t, r, o, l]),
          null
        );
      },
      iK = {
        grid: -100,
        barBackground: -50,
        area: 100,
        cursorRectangle: 200,
        bar: 300,
        line: 400,
        axis: 500,
        scatter: 600,
        activeBar: 1e3,
        cursorLine: 1100,
        activeDot: 1200,
        label: 2e3,
      },
      iH = {
        allowDecimals: !1,
        allowDuplicatedCategory: !0,
        allowDataOverflow: !1,
        angle: 0,
        angleAxisId: 0,
        axisLine: !0,
        axisLineType: "polygon",
        cx: 0,
        cy: 0,
        hide: !1,
        includeHidden: !1,
        label: !1,
        niceTicks: "auto",
        orientation: "outer",
        reversed: !1,
        scale: "auto",
        tick: !0,
        tickLine: !0,
        tickSize: 8,
        type: "auto",
        zIndex: iK.axis,
      },
      iW = {
        allowDataOverflow: !1,
        allowDecimals: !1,
        allowDuplicatedCategory: !0,
        angle: 0,
        axisLine: !0,
        includeHidden: !1,
        hide: !1,
        niceTicks: "auto",
        label: !1,
        orientation: "right",
        radiusAxisId: 0,
        reversed: !1,
        scale: "auto",
        stroke: "#ccc",
        tick: !0,
        tickCount: 5,
        tickLine: !0,
        type: "auto",
        zIndex: iK.axis,
      },
      iq = (e, t) => {
        if (e && t) return null != e && e.reversed ? [t[1], t[0]] : t;
      };
    function iV(e, t, r) {
      return "auto" !== r
        ? r
        : null != e
        ? n0(e, t)
          ? "category"
          : "number"
        : void 0;
    }
    function iY(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function iX(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? iY(Object(r), !0).forEach(function (t) {
              var n, i, a;
              (n = e),
                (i = t),
                (a = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value."
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = a);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : iY(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    var iG = {
        allowDataOverflow: iH.allowDataOverflow,
        allowDecimals: iH.allowDecimals,
        allowDuplicatedCategory: !1,
        dataKey: void 0,
        domain: void 0,
        id: iH.angleAxisId,
        includeHidden: !1,
        name: void 0,
        reversed: iH.reversed,
        scale: iH.scale,
        tick: iH.tick,
        tickCount: void 0,
        ticks: void 0,
        type: iH.type,
        unit: void 0,
        niceTicks: "auto",
      },
      iZ = {
        allowDataOverflow: iW.allowDataOverflow,
        allowDecimals: iW.allowDecimals,
        allowDuplicatedCategory: iW.allowDuplicatedCategory,
        dataKey: void 0,
        domain: void 0,
        id: iW.radiusAxisId,
        includeHidden: iW.includeHidden,
        name: void 0,
        reversed: iW.reversed,
        scale: iW.scale,
        tick: iW.tick,
        tickCount: iW.tickCount,
        ticks: void 0,
        type: iW.type,
        unit: void 0,
        niceTicks: "auto",
      },
      iQ = rI(
        [
          (e, t) => {
            if (null != t) return e.polarAxis.angleAxis[t];
          },
          iF,
        ],
        (e, t) => {
          if (null != e) return e;
          var r,
            n = null != (r = iV(t, "angleAxis", iG.type)) ? r : "category";
          return iX(iX({}, iG), {}, { type: n });
        }
      ),
      iJ = rI([(e, t) => e.polarAxis.radiusAxis[t], iF], (e, t) => {
        if (null != e) return e;
        var r,
          n = null != (r = iV(t, "radiusAxis", iZ.type)) ? r : "category";
        return iX(iX({}, iZ), {}, { type: n });
      }),
      i0 = (e) => e.polarOptions,
      i1 = rI([ie, it, ic], function (e, t) {
        var r =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                width: 0,
                height: 0,
                brushBottom: 0,
              };
        return (
          Math.min(
            Math.abs(e - (r.left || 0) - (r.right || 0)),
            Math.abs(t - (r.top || 0) - (r.bottom || 0))
          ) / 2
        );
      }),
      i2 = rI([i0, i1], (e, t) => {
        if (null != e) return eO(e.innerRadius, t, 0);
      }),
      i3 = rI([i0, i1], (e, t) => {
        if (null != e) return eO(e.outerRadius, t, 0.8 * t);
      }),
      i5 = rI([i0], (e) => (null == e ? [0, 0] : [e.startAngle, e.endAngle]));
    rI([iQ, i5], iq);
    var i6 = rI([i1, i2, i3], (e, t, r) => {
      if (null != e && null != t && null != r) return [t, r];
    });
    rI([iJ, i6], iq);
    var i4 = rI([iB, i0, i2, i3, ie, it], (e, t, r, n, i, a) => {
        if (
          ("centric" === e || "radial" === e) &&
          null != t &&
          null != r &&
          null != n
        ) {
          var o = t.cx,
            l = t.cy,
            u = t.startAngle,
            c = t.endAngle;
          return {
            cx: eO(o, i, i / 2),
            cy: eO(l, a, a / 2),
            innerRadius: r,
            outerRadius: n,
            startAngle: u,
            endAngle: c,
            clockWise: !1,
          };
        }
      }),
      i8 = e.i(325769);
    function i7(e, t) {
      return (
        (!!(Array.isArray(e) && Array.isArray(t)) &&
          0 === e.length &&
          0 === t.length) ||
        e === t
      );
    }
    var i9 = rI(
        (e) => e.zIndex.zIndexMap,
        (e, t) => t,
        (e, t, r) => r,
        (e, t, r) => {
          if (null != t) {
            var n = e[t];
            if (null != n) return r ? n.panoramaElement : n.element;
          }
        }
      ),
      ae = rI(
        (e) => e.zIndex.zIndexMap,
        (e) =>
          Array.from(
            new Set(
              Object.keys(e)
                .map((e) => parseInt(e, 10))
                .concat(Object.values(iK))
            )
          ).sort((e, t) => e - t),
        {
          memoizeOptions: {
            resultEqualityCheck: function (e, t) {
              if (e.length === t.length) {
                for (var r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
                return !0;
              }
              return !1;
            },
          },
        }
      );
    function at(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function ar(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? at(Object(r), !0).forEach(function (t) {
              var n, i, a;
              (n = e),
                (i = t),
                (a = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value."
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = a);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : at(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    var an = {
        zIndexMap: Object.values(iK).reduce(
          (e, t) =>
            ar(
              ar({}, e),
              {},
              {
                [t]: { element: void 0, panoramaElement: void 0, consumers: 0 },
              }
            ),
          {}
        ),
      },
      ai = new Set(Object.values(iK)),
      aa = r0({
        name: "zIndex",
        initialState: an,
        reducers: {
          registerZIndexPortal: {
            reducer: (e, t) => {
              var r = t.payload.zIndex;
              e.zIndexMap[r]
                ? (e.zIndexMap[r].consumers += 1)
                : (e.zIndexMap[r] = {
                    consumers: 1,
                    element: void 0,
                    panoramaElement: void 0,
                  });
            },
            prepare: rY(),
          },
          unregisterZIndexPortal: {
            reducer: (e, t) => {
              var r = t.payload.zIndex;
              e.zIndexMap[r] &&
                ((e.zIndexMap[r].consumers -= 1),
                e.zIndexMap[r].consumers <= 0 &&
                  !ai.has(r) &&
                  delete e.zIndexMap[r]);
            },
            prepare: rY(),
          },
          registerZIndexPortalElement: {
            reducer: (e, t) => {
              var r = t.payload,
                n = r.zIndex,
                i = r.element,
                a = r.isPanorama;
              e.zIndexMap[n]
                ? a
                  ? (e.zIndexMap[n].panoramaElement = i)
                  : (e.zIndexMap[n].element = i)
                : (e.zIndexMap[n] = {
                    consumers: 0,
                    element: a ? void 0 : i,
                    panoramaElement: a ? i : void 0,
                  });
            },
            prepare: rY(),
          },
          unregisterZIndexPortalElement: {
            reducer: (e, t) => {
              var r = t.payload.zIndex;
              e.zIndexMap[r] &&
                (t.payload.isPanorama
                  ? (e.zIndexMap[r].panoramaElement = void 0)
                  : (e.zIndexMap[r].element = void 0));
            },
            prepare: rY(),
          },
        },
      }),
      ao = aa.actions,
      al = ao.registerZIndexPortal,
      au = ao.unregisterZIndexPortal,
      ac = ao.registerZIndexPortalElement,
      as = ao.unregisterZIndexPortalElement,
      af = aa.reducer;
    function ad(e) {
      var t = e.zIndex,
        r = e.children,
        n = void 0 !== tv(iB) && void 0 !== t && 0 !== t,
        i = ip(),
        a = (0, C.useRef)(void 0),
        o = (0, C.useRef)(new Set()),
        l = td(),
        u = tv((e) => i9(e, t, i));
      if (
        ((0, C.useLayoutEffect)(() => {
          if (!n) {
            var e = o.current;
            e.forEach((e) => {
              l(au({ zIndex: e }));
            }),
              e.clear(),
              (a.current = void 0);
            return;
          }
          if (
            (o.current.has(t) || (l(al({ zIndex: t })), o.current.add(t)), u)
          ) {
            a.current = u;
            var r = o.current;
            r.forEach((e) => {
              e !== t && (l(au({ zIndex: e })), r.delete(e));
            });
          }
        }, [l, t, n, u]),
        (0, C.useLayoutEffect)(() => {
          var e = o.current;
          return () => {
            e.forEach((e) => {
              l(au({ zIndex: e }));
            }),
              e.clear();
          };
        }, [l]),
        !n)
      )
        return r;
      var c = null != u ? u : a.current;
      return c ? (0, i8.createPortal)(r, c) : null;
    }
    function ah(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function ap(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? ah(Object(r), !0).forEach(function (t) {
              var n, i, a;
              (n = e),
                (i = t),
                (a = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value."
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = a);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : ah(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    var ay = ["labelRef"],
      av = ["content"];
    function am(e, t) {
      if (null == e) return {};
      var r,
        n,
        i = (function (e, t) {
          if (null == e) return {};
          var r = {};
          for (var n in e)
            if ({}.hasOwnProperty.call(e, n)) {
              if (-1 !== t.indexOf(n)) continue;
              r[n] = e[n];
            }
          return r;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (n = 0; n < a.length; n++)
          (r = a[n]),
            -1 === t.indexOf(r) &&
              {}.propertyIsEnumerable.call(e, r) &&
              (i[r] = e[r]);
      }
      return i;
    }
    function ag(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function ab(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? ag(Object(r), !0).forEach(function (t) {
              var n, i, a;
              (n = e),
                (i = t),
                (a = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value."
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = a);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : ag(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    function ax() {
      return (ax = Object.assign.bind()).apply(null, arguments);
    }
    var aw = (0, C.createContext)(null),
      aO = (e) => {
        var t = e.x,
          r = e.y,
          n = e.upperWidth,
          i = e.lowerWidth,
          a = e.width,
          o = e.height,
          l = e.children,
          u = (0, C.useMemo)(
            () => ({
              x: t,
              y: r,
              upperWidth: n,
              lowerWidth: i,
              width: a,
              height: o,
            }),
            [t, r, n, i, a, o]
          );
        return C.createElement(aw.Provider, { value: u }, l);
      },
      aj = () => {
        var e = (0, C.useContext)(aw),
          t = iL();
        return e || (t ? iz(t) : void 0);
      },
      aA = (0, C.createContext)(null),
      aE = (e) => null != e && "function" == typeof e,
      aS = (e) => null != e && "cx" in e && eg(e.cx),
      aP = {
        angle: 0,
        offset: 5,
        zIndex: iK.label,
        position: "middle",
        textBreakAll: !1,
      };
    function ak(e) {
      var t,
        r,
        n,
        i,
        a,
        o,
        l,
        u,
        c = eG(e, aP),
        s = c.viewBox,
        f = c.parentViewBox,
        d = c.position,
        h = c.value,
        p = c.children,
        y = c.content,
        v = c.className,
        m = c.textBreakAll,
        g = c.labelRef,
        b = ((t = (0, C.useContext)(aA)), (r = tv(i4)), t || r),
        x = aj(),
        w = (function (e) {
          if (!aS(e)) return e;
          var t = e.cx,
            r = e.cy,
            n = e.outerRadius,
            i = 2 * n;
          return {
            x: t - n,
            y: r - n,
            width: i,
            upperWidth: i,
            lowerWidth: i,
            height: i,
          };
        })(
          (o =
            null == s
              ? "center" === d
                ? x
                : null != b
                ? b
                : x
              : aS(s)
              ? s
              : iz(s))
        );
      if (
        !o ||
        (null == h &&
          null == p &&
          !(0, C.isValidElement)(y) &&
          "function" != typeof y)
      )
        return null;
      var O = ab(ab({}, c), {}, { viewBox: o });
      if ((0, C.isValidElement)(y)) {
        O.labelRef;
        var j = am(O, ay);
        return (0, C.cloneElement)(y, j);
      }
      if ("function" == typeof y) {
        O.content;
        var A = am(O, av);
        if (((l = (0, C.createElement)(y, A)), (0, C.isValidElement)(l)))
          return l;
      } else
        (n = c.value),
          (i = c.formatter),
          (a = null == c.children ? n : c.children),
          (l = "function" == typeof i ? i(a) : a);
      var E = ei(c);
      if (aS(o)) {
        if ("insideStart" === d || "insideEnd" === d || "end" === d)
          return ((e, t, r, n, i) => {
            var a,
              o,
              l = e.offset,
              u = e.className,
              c = i.cx,
              s = i.cy,
              f = i.innerRadius,
              d = i.outerRadius,
              h = i.startAngle,
              p = i.endAngle,
              y = i.clockWise,
              v = (f + d) / 2,
              m = ey(p - h) * Math.min(Math.abs(p - h), 360),
              g = m >= 0 ? 1 : -1;
            switch (t) {
              case "insideStart":
                (a = h + g * l), (o = y);
                break;
              case "insideEnd":
                (a = p - g * l), (o = !y);
                break;
              case "end":
                (a = p + g * l), (o = y);
                break;
              default:
                throw Error("Unsupported position ".concat(t));
            }
            o = m <= 0 ? o : !o;
            var b = tu(c, s, v, a),
              x = tu(c, s, v, a + (o ? 1 : -1) * 359),
              w = "M"
                .concat(b.x, ",")
                .concat(b.y, "\n    A")
                .concat(v, ",")
                .concat(v, ",0,1,")
                .concat(+!o, ",\n    ")
                .concat(x.x, ",")
                .concat(x.y),
              O = null == e.id ? ew("recharts-radial-line-") : e.id;
            return C.createElement(
              "text",
              ax({}, n, {
                dominantBaseline: "central",
                className: (0, G.clsx)("recharts-radial-bar-label", u),
              }),
              C.createElement(
                "defs",
                null,
                C.createElement("path", { id: O, d: w })
              ),
              C.createElement("textPath", { xlinkHref: "#".concat(O) }, r)
            );
          })(c, d, l, E, o);
        u = ((e, t, r) => {
          var n = e.cx,
            i = e.cy,
            a = e.innerRadius,
            o = e.outerRadius,
            l = (e.startAngle + e.endAngle) / 2;
          if ("outside" === r) {
            var u = tu(n, i, o + t, l),
              c = u.x;
            return {
              x: c,
              y: u.y,
              textAnchor: c >= n ? "start" : "end",
              verticalAnchor: "middle",
            };
          }
          if ("center" === r)
            return {
              x: n,
              y: i,
              textAnchor: "middle",
              verticalAnchor: "middle",
            };
          if ("centerTop" === r)
            return {
              x: n,
              y: i,
              textAnchor: "middle",
              verticalAnchor: "start",
            };
          if ("centerBottom" === r)
            return { x: n, y: i, textAnchor: "middle", verticalAnchor: "end" };
          var s = tu(n, i, (a + o) / 2, l);
          return {
            x: s.x,
            y: s.y,
            textAnchor: "middle",
            verticalAnchor: "middle",
          };
        })(o, c.offset, c.position);
      } else {
        if (!w) return null;
        var S = ((e) => {
          var t = e.viewBox,
            r = e.position,
            n = e.offset,
            i = void 0 === n ? 0 : n,
            a = e.parentViewBox,
            o = e.clamp,
            l = iz(t),
            u = l.x,
            c = l.y,
            s = l.height,
            f = l.upperWidth,
            d = l.lowerWidth,
            h = u + (f - d) / 2,
            p = (u + h) / 2,
            y = (f + d) / 2,
            v = s >= 0 ? 1 : -1,
            m = v * i,
            g = v > 0 ? "end" : "start",
            b = v > 0 ? "start" : "end",
            x = f >= 0 ? 1 : -1,
            w = x * i,
            O = x > 0 ? "end" : "start",
            j = x > 0 ? "start" : "end";
          if ("top" === r) {
            var A = {
              x: u + f / 2,
              y: c - m,
              horizontalAnchor: "middle",
              verticalAnchor: g,
            };
            return (
              o && a && ((A.height = Math.max(c - a.y, 0)), (A.width = f)), A
            );
          }
          if ("bottom" === r) {
            var E = {
              x: h + d / 2,
              y: c + s + m,
              horizontalAnchor: "middle",
              verticalAnchor: b,
            };
            return (
              o &&
                a &&
                ((E.height = Math.max(a.y + a.height - (c + s), 0)),
                (E.width = d)),
              E
            );
          }
          if ("left" === r) {
            var S = {
              x: p - w,
              y: c + s / 2,
              horizontalAnchor: O,
              verticalAnchor: "middle",
            };
            return (
              o && a && ((S.width = Math.max(S.x - a.x, 0)), (S.height = s)), S
            );
          }
          if ("right" === r) {
            var P = {
              x: p + y + w,
              y: c + s / 2,
              horizontalAnchor: j,
              verticalAnchor: "middle",
            };
            return (
              o &&
                a &&
                ((P.width = Math.max(a.x + a.width - P.x, 0)), (P.height = s)),
              P
            );
          }
          var k = o && a ? { width: y, height: s } : {};
          return "insideLeft" === r
            ? ap(
                {
                  x: p + w,
                  y: c + s / 2,
                  horizontalAnchor: j,
                  verticalAnchor: "middle",
                },
                k
              )
            : "insideRight" === r
            ? ap(
                {
                  x: p + y - w,
                  y: c + s / 2,
                  horizontalAnchor: O,
                  verticalAnchor: "middle",
                },
                k
              )
            : "insideTop" === r
            ? ap(
                {
                  x: u + f / 2,
                  y: c + m,
                  horizontalAnchor: "middle",
                  verticalAnchor: b,
                },
                k
              )
            : "insideBottom" === r
            ? ap(
                {
                  x: h + d / 2,
                  y: c + s - m,
                  horizontalAnchor: "middle",
                  verticalAnchor: g,
                },
                k
              )
            : "insideTopLeft" === r
            ? ap(
                { x: u + w, y: c + m, horizontalAnchor: j, verticalAnchor: b },
                k
              )
            : "insideTopRight" === r
            ? ap(
                {
                  x: u + f - w,
                  y: c + m,
                  horizontalAnchor: O,
                  verticalAnchor: b,
                },
                k
              )
            : "insideBottomLeft" === r
            ? ap(
                {
                  x: h + w,
                  y: c + s - m,
                  horizontalAnchor: j,
                  verticalAnchor: g,
                },
                k
              )
            : "insideBottomRight" === r
            ? ap(
                {
                  x: h + d - w,
                  y: c + s - m,
                  horizontalAnchor: O,
                  verticalAnchor: g,
                },
                k
              )
            : r &&
              "object" == typeof r &&
              (eg(r.x) || em(r.x)) &&
              (eg(r.y) || em(r.y))
            ? ap(
                {
                  x: u + eO(r.x, y),
                  y: c + eO(r.y, s),
                  horizontalAnchor: "end",
                  verticalAnchor: "end",
                },
                k
              )
            : ap(
                {
                  x: u + f / 2,
                  y: c + s / 2,
                  horizontalAnchor: "middle",
                  verticalAnchor: "middle",
                },
                k
              );
        })({
          viewBox: w,
          position: d,
          offset: c.offset,
          parentViewBox: aS(f) ? void 0 : f,
          clamp: !0,
        });
        u = ab(
          ab(
            {
              x: S.x,
              y: S.y,
              textAnchor: S.horizontalAnchor,
              verticalAnchor: S.verticalAnchor,
            },
            void 0 !== S.width ? { width: S.width } : {}
          ),
          void 0 !== S.height ? { height: S.height } : {}
        );
      }
      return C.createElement(
        ad,
        { zIndex: c.zIndex },
        C.createElement(
          ti,
          ax(
            {
              ref: g,
              className: (0, G.clsx)("recharts-label", void 0 === v ? "" : v),
            },
            E,
            u,
            {
              textAnchor: e8(E.textAnchor) ? E.textAnchor : u.textAnchor,
              breakAll: m,
            }
          ),
          l
        )
      );
    }
    function aM(e) {
      var t = e.label,
        r = e.labelRef;
      return (
        ((e, t, r) => {
          if (!e) return null;
          var n = { viewBox: t, labelRef: r };
          return !0 === e
            ? C.createElement(ak, ax({ key: "label-implicit" }, n))
            : eb(e)
            ? C.createElement(ak, ax({ key: "label-implicit", value: e }, n))
            : (0, C.isValidElement)(e)
            ? e.type === ak
              ? (0, C.cloneElement)(e, ab({ key: "label-implicit" }, n))
              : C.createElement(
                  ak,
                  ax({ key: "label-implicit", content: e }, n)
                )
            : aE(e)
            ? C.createElement(ak, ax({ key: "label-implicit", content: e }, n))
            : e && "object" == typeof e
            ? C.createElement(ak, ax({}, e, { key: "label-implicit" }, n))
            : null;
        })(t, aj(), r) || null
      );
    }
    ak.displayName = "Label";
    var aI = ["valueAccessor"],
      a_ = ["dataKey", "clockWise", "id", "textBreakAll", "zIndex"];
    function aC() {
      return (aC = Object.assign.bind()).apply(null, arguments);
    }
    function aT(e, t) {
      if (null == e) return {};
      var r,
        n,
        i = (function (e, t) {
          if (null == e) return {};
          var r = {};
          for (var n in e)
            if ({}.hasOwnProperty.call(e, n)) {
              if (-1 !== t.indexOf(n)) continue;
              r[n] = e[n];
            }
          return r;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (n = 0; n < a.length; n++)
          (r = a[n]),
            -1 === t.indexOf(r) &&
              {}.propertyIsEnumerable.call(e, r) &&
              (i[r] = e[r]);
      }
      return i;
    }
    var aD = (e) => {
        var t = Array.isArray(e.value) ? e.value[e.value.length - 1] : e.value;
        if (
          null == t ||
          "string" == typeof t ||
          "number" == typeof t ||
          "boolean" == typeof t
        )
          return t;
      },
      aN = (0, C.createContext)(void 0),
      az = aN.Provider,
      aL = (0, C.createContext)(void 0);
    function aR(e) {
      var t = e.valueAccessor,
        r = void 0 === t ? aD : t,
        n = aT(e, aI),
        i = n.dataKey,
        a = (n.clockWise, n.id),
        o = n.textBreakAll,
        l = n.zIndex,
        u = aT(n, a_),
        c = (0, C.useContext)(aN),
        s = (0, C.useContext)(aL),
        f = c || s;
      return f && f.length
        ? C.createElement(
            ad,
            { zIndex: null != l ? l : iK.label },
            C.createElement(
              el,
              { className: "recharts-label-list" },
              f.map((e, t) => {
                var l,
                  c = null == i ? r(e, t) : nJ(e.payload, i),
                  s = null == a ? {} : { id: "".concat(a, "-").concat(t) };
                return C.createElement(
                  ak,
                  aC({ key: "label-".concat(t) }, ei(e), u, s, {
                    fill: null != (l = n.fill) ? l : e.fill,
                    parentViewBox: e.parentViewBox,
                    value: c,
                    textBreakAll: o,
                    viewBox: e.viewBox,
                    index: t,
                    zIndex: 0,
                  })
                );
              })
            )
          )
        : null;
    }
    function aB(e) {
      var t = e.label;
      return t
        ? !0 === t
          ? C.createElement(aR, { key: "labelList-implicit" })
          : C.isValidElement(t) || aE(t)
          ? C.createElement(aR, { key: "labelList-implicit", content: t })
          : "object" == typeof t
          ? C.createElement(
              aR,
              aC({ key: "labelList-implicit" }, t, { type: String(t.type) })
            )
          : null
        : null;
    }
    aL.Provider, (aR.displayName = "LabelList");
    var a$ = e.i(871533),
      aF = (e) =>
        "string" == typeof e
          ? e
          : e
          ? e.displayName || e.name || "Component"
          : "",
      aU = null,
      aK = null,
      aH = (e) => {
        if (e === aU && Array.isArray(aK)) return aK;
        var t = [];
        return (
          C.Children.forEach(e, (e) => {
            null != e &&
              ((0, a$.isFragment)(e)
                ? (t = t.concat(aH(e.props.children)))
                : t.push(e));
          }),
          (aK = t),
          (aU = e),
          t
        );
      },
      aW = (e) =>
        !e || "object" != typeof e || !("clipDot" in e) || !!e.clipDot,
      aq = (e) => "radius" in e && "startAngle" in e && "endAngle" in e,
      aV = (e, t) => {
        if (!e || "function" == typeof e || "boolean" == typeof e) return null;
        var r = e;
        if (
          ((0, C.isValidElement)(e) && (r = e.props),
          "object" != typeof r && "function" != typeof r)
        )
          return null;
        var n = {};
        return (
          Object.keys(r).forEach((e) => {
            Q(e) &&
              "function" == typeof r[e] &&
              (n[e] = t || ((t) => r[e](r, t)));
          }),
          n
        );
      },
      aY = (e, t, r) => {
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return null;
        var n = null;
        return (
          Object.keys(e).forEach((i) => {
            var a = e[i];
            Q(i) &&
              "function" == typeof a &&
              (n || (n = {}), (n[i] = (e) => (a(t, r, e), null)));
          }),
          n
        );
      },
      aX = (e, t) => [0, 3 * e, 3 * t - 6 * e, 3 * e - 3 * t + 1],
      aG = (e, t) => e.map((e, r) => e * t ** r).reduce((e, t) => e + t),
      aZ = (e, t) => (r) => aG(aX(e, t), r),
      aQ = function () {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        if (1 === t.length)
          switch (t[0]) {
            case "linear":
              return [0, 0, 1, 1];
            case "ease":
              return [0.25, 0.1, 0.25, 1];
            case "ease-in":
              return [0.42, 0, 1, 1];
            case "ease-out":
              return [0.42, 0, 0.58, 1];
            case "ease-in-out":
              return [0, 0, 0.58, 1];
            default:
              var n = ((e) => {
                var t,
                  r = e.split("(");
                if (2 !== r.length || "cubic-bezier" !== r[0]) return null;
                var n =
                  null == (t = r[1]) || null == (t = t.split(")")[0])
                    ? void 0
                    : t.split(",");
                if (null == n || 4 !== n.length) return null;
                var i = n.map((e) => parseFloat(e));
                return [i[0], i[1], i[2], i[3]];
              })(t[0]);
              if (n) return n;
          }
        return 4 === t.length ? t : [0, 0, 1, 1];
      },
      aJ = function () {
        return ((e, t, r, n) => {
          var i = aZ(e, r),
            a = aZ(t, n),
            o = (t) =>
              aG(
                [
                  ...aX(e, r)
                    .map((e, t) => e * t)
                    .slice(1),
                  0,
                ],
                t
              ),
            l = (e) => (e > 1 ? 1 : e < 0 ? 0 : e),
            u = (e) => {
              for (var t = e > 1 ? 1 : e, r = t, n = 0; n < 8; ++n) {
                var u = i(r) - t,
                  c = o(r);
                if (1e-4 > Math.abs(u - t) || c < 1e-4) break;
                r = l(r - u / c);
              }
              return a(r);
            };
          return (u.isStepper = !1), u;
        })(...aQ(...arguments));
      },
      a0 = function () {
        for (
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = e.stiff,
            r = void 0 === t ? 100 : t,
            n = e.damping,
            i = void 0 === n ? 8 : n,
            a = e.dt,
            o = void 0 === a ? 16.67 : a,
            l = [0],
            u = 0,
            c = 0,
            s = 0;
          s < 1e4;

        ) {
          var f = c * i;
          if (
            ((c += ((-(u - 1) * r - f) * o) / 1e3),
            (u += (c * o) / 1e3),
            l.push(u),
            1e-4 > Math.abs(u - 1) && 1e-4 > Math.abs(c))
          )
            break;
          s++;
        }
        l[l.length - 1] = 1;
        var d = l.length - 1;
        return (e) => {
          if (e <= 0) return 0;
          if (e >= 1) return 1;
          var t,
            r,
            n,
            i = e * d,
            a = Math.floor(i);
          return (
            (null != (t = l[a]) ? t : 0) +
            ((null != (r = l[a + 1]) ? r : 0) - (null != (n = l[a]) ? n : 0)) *
              (i - a)
          );
        };
      },
      a1 = (0, C.createContext)((e, t, r) => {
        var n,
          i = (a) => {
            var o = t.tick(a);
            if ("active" === t.getState()) {
              if ((r(t.getInterpolated()), 1 === t.getProgress())) {
                t.complete(), (n = void 0);
                return;
              }
              n = e.setTimeout(i, o);
              return;
            }
            n = e.setTimeout(i, o);
          };
        return (
          (n = e.setTimeout(i, 0)),
          () => {
            var e;
            return null == (e = n) ? void 0 : e();
          }
        );
      });
    function a2(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
      return n;
    }
    function a3() {
      var e,
        t =
          (function (e) {
            if (Array.isArray(e)) return e;
          })(
            (e = (0, C.useState)(
              () =>
                !eM.isSsr &&
                !!window.matchMedia &&
                window.matchMedia("(prefers-reduced-motion: reduce)").matches
            ))
          ) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ("u" > typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != r) {
              var n,
                i,
                a,
                o,
                l = [],
                u = !0,
                c = !1;
              try {
                (a = (r = r.call(e)).next), !1;
                for (
                  ;
                  !(u = (n = a.call(r)).done) &&
                  (l.push(n.value), 2 !== l.length);
                  u = !0
                );
              } catch (e) {
                (c = !0), (i = e);
              } finally {
                try {
                  if (
                    !u &&
                    null != r.return &&
                    ((o = r.return()), Object(o) !== o)
                  )
                    return;
                } finally {
                  if (c) throw i;
                }
              }
              return l;
            }
          })(e, 2) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return a2(e, 2);
              var r = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === r && e.constructor && (r = e.constructor.name),
                "Map" === r || "Set" === r
                  ? Array.from(e)
                  : "Arguments" === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                  ? a2(e, 2)
                  : void 0
              );
            }
          })(e, 2) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })(),
        r = t[0],
        n = t[1];
      return (
        (0, C.useEffect)(() => {
          if (window.matchMedia) {
            var e = window.matchMedia("(prefers-reduced-motion: reduce)"),
              t = () => {
                n(e.matches);
              };
            return (
              e.addEventListener("change", t),
              () => {
                e.removeEventListener("change", t);
              }
            );
          }
        }, []),
        r
      );
    }
    a1.Provider;
    var a5 = "init",
      a6 = "pending",
      a4 = "active";
    function a8(e) {
      return Math.max(0, e);
    }
    class a7 {
      getAnimationStartedTime() {
        return this.animationStartedTime;
      }
      getBeginStartedTime() {
        return this.beginStartedTime;
      }
      constructor(e) {
        var t;
        !(function (e, t, r) {
          var n;
          (t =
            "symbol" ==
            typeof (n = (function (e, t) {
              if ("object" != typeof e || !e) return e;
              var r = e[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(e, t || "default");
                if ("object" != typeof n) return n;
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return ("string" === t ? String : Number)(e);
            })(t, "string"))
              ? n
              : n + "") in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r);
        })(this, "state", a5),
          (this.animationId = e.animationId),
          (this.onAnimationEnd = e.onAnimationEnd),
          (this.animationDuration = a8(e.animationDuration)),
          (this.animationBegin = a8(e.animationBegin)),
          (this.progress = 0),
          (this.from = e.from),
          (this.to = e.to),
          (this.easing = e.easing),
          null == (t = e.onAnimationStart) || t.call(e);
      }
      getState() {
        return this.state;
      }
      getEasing() {
        return this.easing;
      }
      getAnimationDuration() {
        return this.animationDuration;
      }
      tick(e) {
        if (this.getState() === a5)
          return (
            (this.state = a6), (this.beginStartedTime = e), this.animationBegin
          );
        if (this.getState() === a6) {
          if (null == this.beginStartedTime) throw Error();
          var t = e - this.beginStartedTime;
          return t >= this.animationBegin
            ? ((this.state = a4),
              (this.animationStartedTime = e),
              this.nextAnimationUpdate(0))
            : a8(this.animationBegin - t);
        }
        if (this.getState() === a4) {
          if (null == this.animationStartedTime) throw Error();
          var r = e - this.animationStartedTime;
          return (
            this.setProgress(r / this.animationDuration),
            this.nextAnimationUpdate(r)
          );
        }
        return 0;
      }
      setProgress(e) {
        this.progress = Math.min(1, Math.max(0, e));
      }
      getProgress() {
        return this.progress;
      }
      complete() {
        if (((this.progress = 1), "active" === this.state)) {
          var e;
          null == (e = this.onAnimationEnd) || e.call(this);
        }
        this.state = "completed";
      }
      getFrom() {
        return this.from;
      }
      getTo() {
        return this.to;
      }
      getAnimationId() {
        return this.animationId;
      }
      getAnimationBegin() {
        return this.animationBegin;
      }
    }
    class a9 extends a7 {
      nextAnimationUpdate() {
        return 0;
      }
      getInterpolated() {
        return this.easing(
          eA(this.getFrom(), this.getTo(), this.getProgress())
        );
      }
    }
    class oe {
      setTimeout(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          r = performance.now(),
          n = null,
          i = (a) => {
            a - r >= t ? e(a) : (n = requestAnimationFrame(i));
          };
        return (
          (n = requestAnimationFrame(i)),
          () => {
            null != n && cancelAnimationFrame(n);
          }
        );
      }
    }
    function ot(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
      return n;
    }
    var or = {
      begin: 0,
      duration: 1e3,
      easing: "ease",
      isActive: !0,
      canBegin: !0,
      onAnimationEnd: () => {},
      onAnimationStart: () => {},
    };
    function on(e) {
      var t,
        r,
        n,
        i = eG(e, or),
        a = i.animationId,
        o = i.isActive,
        l = i.canBegin,
        u = i.duration,
        c = i.easing,
        s = i.begin,
        f = i.onAnimationEnd,
        d = i.onAnimationStart,
        h = i.children,
        p = a3(),
        y = "auto" === o ? !eM.isSsr && !p : o,
        v =
          ((t = i.animationController),
          (r = (0, C.useContext)(a1)),
          (0, C.useMemo)(() => (null != t ? t : r), [t, r])),
        m =
          (function (e) {
            if (Array.isArray(e)) return e;
          })((n = (0, C.useState)(+!y))) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ("u" > typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != r) {
              var n,
                i,
                a,
                o,
                l = [],
                u = !0,
                c = !1;
              try {
                (a = (r = r.call(e)).next), !1;
                for (
                  ;
                  !(u = (n = a.call(r)).done) &&
                  (l.push(n.value), 2 !== l.length);
                  u = !0
                );
              } catch (e) {
                (c = !0), (i = e);
              } finally {
                try {
                  if (
                    !u &&
                    null != r.return &&
                    ((o = r.return()), Object(o) !== o)
                  )
                    return;
                } finally {
                  if (c) throw i;
                }
              }
              return l;
            }
          })(n, 2) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return ot(e, 2);
              var r = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === r && e.constructor && (r = e.constructor.name),
                "Map" === r || "Set" === r
                  ? Array.from(e)
                  : "Arguments" === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                  ? ot(e, 2)
                  : void 0
              );
            }
          })(n, 2) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })(),
        g = m[0],
        b = m[1];
      return (
        (0, C.useEffect)(() => {
          y || b(1);
        }, [y]),
        (0, C.useEffect)(() => {
          var e = ((e) => {
            if ("string" == typeof e)
              switch (e) {
                case "ease":
                case "ease-in-out":
                case "ease-out":
                case "ease-in":
                case "linear":
                  return aJ(e);
                case "spring":
                  return a0();
                default:
                  if ("cubic-bezier" === e.split("(")[0]) return aJ(e);
              }
            return "function" == typeof e ? e : null;
          })(c);
          return y && l && null != e
            ? v(
                new oe(),
                new a9({
                  animationId: a,
                  easing: e,
                  animationDuration: u,
                  animationBegin: s,
                  onAnimationStart: d,
                  onAnimationEnd: f,
                  from: 0,
                  to: 1,
                }),
                b
              )
            : ek;
        }, [v, a, y, l, u, c, s, d, f]),
        h(Number(g))
      );
    }
    function oi(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "animation-",
        r = (0, C.useRef)(ew(t)),
        n = (0, C.useRef)(e);
      return (
        n.current !== e && ((r.current = ew(t)), (n.current = e)), r.current
      );
    }
    var oa = ["radius"],
      oo = ["radius"];
    function ol(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function ou(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? ol(Object(r), !0).forEach(function (t) {
              var n, i, a;
              (n = e),
                (i = t),
                (a = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value."
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = a);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : ol(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    function oc() {
      return (oc = Object.assign.bind()).apply(null, arguments);
    }
    function os(e, t) {
      if (null == e) return {};
      var r,
        n,
        i = (function (e, t) {
          if (null == e) return {};
          var r = {};
          for (var n in e)
            if ({}.hasOwnProperty.call(e, n)) {
              if (-1 !== t.indexOf(n)) continue;
              r[n] = e[n];
            }
          return r;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (n = 0; n < a.length; n++)
          (r = a[n]),
            -1 === t.indexOf(r) &&
              {}.propertyIsEnumerable.call(e, r) &&
              (i[r] = e[r]);
      }
      return i;
    }
    function of(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
      return n;
    }
    function od(e, t) {
      return (
        t || (t = e.slice(0)),
        Object.freeze(
          Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
        )
      );
    }
    var oh = (e, t, r, n, i) => {
        var a = eh(r),
          v = eh(n),
          m = Math.min(Math.abs(a) / 2, Math.abs(v) / 2),
          g = v >= 0 ? 1 : -1,
          b = a >= 0 ? 1 : -1,
          x = +((v >= 0 && a >= 0) || (v < 0 && a < 0));
        if (m > 0 && Array.isArray(i)) {
          for (var w = [0, 0, 0, 0], O = 0; O < 4; O++) {
            var j,
              A,
              E = null != (A = i[O]) ? A : 0;
            w[O] = E > m ? m : E;
          }
          (j = ep(o || (o = od(["M", ",", ""])), e, t + g * w[0])),
            w[0] > 0 &&
              (j += ep(
                l || (l = od(["A ", ",", ",0,0,", ",", ",", ""])),
                w[0],
                w[0],
                x,
                e + b * w[0],
                t
              )),
            (j += ep(u || (u = od(["L ", ",", ""])), e + r - b * w[1], t)),
            w[1] > 0 &&
              (j += ep(
                c || (c = od(["A ", ",", ",0,0,", ",\n        ", ",", ""])),
                w[1],
                w[1],
                x,
                e + r,
                t + g * w[1]
              )),
            (j += ep(s || (s = od(["L ", ",", ""])), e + r, t + n - g * w[2])),
            w[2] > 0 &&
              (j += ep(
                f || (f = od(["A ", ",", ",0,0,", ",\n        ", ",", ""])),
                w[2],
                w[2],
                x,
                e + r - b * w[2],
                t + n
              )),
            (j += ep(d || (d = od(["L ", ",", ""])), e + b * w[3], t + n)),
            w[3] > 0 &&
              (j += ep(
                h || (h = od(["A ", ",", ",0,0,", ",\n        ", ",", ""])),
                w[3],
                w[3],
                x,
                e,
                t + n - g * w[3]
              )),
            (j += "Z");
        } else if (m > 0 && i === +i && i > 0) {
          var S = Math.min(m, i);
          j = ep(
            p ||
              (p = od([
                "M ",
                ",",
                "\n            A ",
                ",",
                ",0,0,",
                ",",
                ",",
                "\n            L ",
                ",",
                "\n            A ",
                ",",
                ",0,0,",
                ",",
                ",",
                "\n            L ",
                ",",
                "\n            A ",
                ",",
                ",0,0,",
                ",",
                ",",
                "\n            L ",
                ",",
                "\n            A ",
                ",",
                ",0,0,",
                ",",
                ",",
                " Z",
              ])),
            e,
            t + g * S,
            S,
            S,
            x,
            e + b * S,
            t,
            e + r - b * S,
            t,
            S,
            S,
            x,
            e + r,
            t + g * S,
            e + r,
            t + n - g * S,
            S,
            S,
            x,
            e + r - b * S,
            t + n,
            e + b * S,
            t + n,
            S,
            S,
            x,
            e,
            t + n - g * S
          );
        } else
          j = ep(
            y || (y = od(["M ", ",", " h ", " v ", " h ", " Z"])),
            e,
            t,
            r,
            n,
            -r
          );
        return j;
      },
      op = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        radius: 0,
        isAnimationActive: !1,
        isUpdateAnimationActive: !1,
        animationBegin: 0,
        animationDuration: 1500,
        animationEasing: "ease",
      },
      oy = (e) => {
        let t, r;
        var n,
          i = eG(e, op),
          a = (0, C.useRef)(null),
          o =
            (function (e) {
              if (Array.isArray(e)) return e;
            })((n = (0, C.useState)(-1))) ||
            (function (e, t) {
              var r =
                null == e
                  ? null
                  : ("u" > typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
              if (null != r) {
                var n,
                  i,
                  a,
                  o,
                  l = [],
                  u = !0,
                  c = !1;
                try {
                  (a = (r = r.call(e)).next), !1;
                  for (
                    ;
                    !(u = (n = a.call(r)).done) &&
                    (l.push(n.value), 2 !== l.length);
                    u = !0
                  );
                } catch (e) {
                  (c = !0), (i = e);
                } finally {
                  try {
                    if (
                      !u &&
                      null != r.return &&
                      ((o = r.return()), Object(o) !== o)
                    )
                      return;
                  } finally {
                    if (c) throw i;
                  }
                }
                return l;
              }
            })(n, 2) ||
            (function (e, t) {
              if (e) {
                if ("string" == typeof e) return of(e, 2);
                var r = {}.toString.call(e).slice(8, -1);
                return (
                  "Object" === r && e.constructor && (r = e.constructor.name),
                  "Map" === r || "Set" === r
                    ? Array.from(e)
                    : "Arguments" === r ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                    ? of(e, 2)
                    : void 0
                );
              }
            })(n, 2) ||
            (function () {
              throw TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })(),
          l = o[0],
          u = o[1];
        (0, C.useEffect)(() => {
          if (a.current && a.current.getTotalLength)
            try {
              var e = a.current.getTotalLength();
              e && u(e);
            } catch (e) {}
        }, []);
        var c = i.x,
          s = i.y,
          f = i.width,
          d = i.height,
          h = i.radius,
          p = i.className,
          y = i.animationEasing,
          v = i.animationDuration,
          m = i.animationBegin,
          g = i.isAnimationActive,
          b = i.isUpdateAnimationActive,
          x = (0, C.useRef)(f),
          w = (0, C.useRef)(d),
          O = (0, C.useRef)(c),
          j = (0, C.useRef)(s),
          A = oi(
            (0, C.useMemo)(
              () => ({ x: c, y: s, width: f, height: d, radius: h }),
              [c, s, f, d, h]
            ),
            "rectangle-"
          );
        if (c !== +c || s !== +s || f !== +f || d !== +d || 0 === f || 0 === d)
          return null;
        var E = (0, G.clsx)("recharts-rectangle", p);
        if (!b) {
          var S = ei(i),
            P = (S.radius, os(S, oa));
          return C.createElement(
            "path",
            oc({}, P, {
              x: eh(c),
              y: eh(s),
              width: eh(f),
              height: eh(d),
              radius: "number" == typeof h ? h : void 0,
              className: E,
              d: oh(c, s, f, d, h),
            })
          );
        }
        var k = x.current,
          M = w.current,
          I = O.current,
          _ = j.current,
          T = "0px ".concat(-1 === l ? 1 : l, "px"),
          D = "".concat(l, "px ").concat(l, "px"),
          N =
            ((t = ["strokeDasharray"]),
            (r = "string" == typeof y ? y : op.animationEasing),
            t
              .map((e) =>
                ""
                  .concat(
                    e.replace(/([A-Z])/g, (e) => "-".concat(e.toLowerCase())),
                    " "
                  )
                  .concat(v, "ms ")
                  .concat(r)
              )
              .join(","));
        return C.createElement(
          on,
          {
            animationId: A,
            key: A,
            canBegin: l > 0,
            duration: v,
            easing: y,
            isActive: b,
            begin: m,
          },
          (e) => {
            var t,
              r = eA(k, f, e),
              n = eA(M, d, e),
              o = eA(I, c, e),
              l = eA(_, s, e);
            a.current &&
              ((x.current = r),
              (w.current = n),
              (O.current = o),
              (j.current = l)),
              (t = g
                ? e > 0
                  ? { transition: N, strokeDasharray: D }
                  : { strokeDasharray: T }
                : { strokeDasharray: D });
            var u = ei(i),
              p = (u.radius, os(u, oo));
            return C.createElement(
              "path",
              oc({}, p, {
                radius: "number" == typeof h ? h : void 0,
                className: E,
                d: oh(o, l, r, n, h),
                ref: a,
                style: ou(ou({}, t), i.style),
              })
            );
          }
        );
      };
    function ov(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function om(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? ov(Object(r), !0).forEach(function (t) {
              var n, i, a;
              (n = e),
                (i = t),
                (a = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value."
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = a);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : ov(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    function og(e) {
      var t,
        r,
        n = e.option,
        i = e.DefaultShape,
        a = e.shapeProps,
        o = e.activeClassName,
        l = e.inActiveClassName,
        u = (function (e) {
          if ("index" in e) {
            var t = e.index;
            return "number" == typeof t || "string" == typeof t ? t : void 0;
          }
        })(a);
      return (
        (r = (0, C.isValidElement)(n)
          ? (0, C.cloneElement)(
              n,
              ((t = (0, C.isValidElement)(n) ? n.props : n), om(om({}, a), t))
            )
          : n === i
          ? C.createElement(i, a)
          : "function" == typeof n
          ? n(a, u)
          : "object" == typeof n
          ? C.createElement(i, om(om({}, a), n))
          : C.createElement(i, a)),
        "isActive" in a && !0 === a.isActive
          ? C.createElement(
              el,
              { className: void 0 === o ? "recharts-active-shape" : o },
              r
            )
          : C.createElement(
              el,
              { className: void 0 === l ? "recharts-shape" : l },
              r
            )
      );
    }
    var ob = ["option"];
    function ox(e) {
      var t = e.option,
        r = (function (e, t) {
          if (null == e) return {};
          var r,
            n,
            i = (function (e, t) {
              if (null == e) return {};
              var r = {};
              for (var n in e)
                if ({}.hasOwnProperty.call(e, n)) {
                  if (-1 !== t.indexOf(n)) continue;
                  r[n] = e[n];
                }
              return r;
            })(e, t);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for (n = 0; n < a.length; n++)
              (r = a[n]),
                -1 === t.indexOf(r) &&
                  {}.propertyIsEnumerable.call(e, r) &&
                  (i[r] = e[r]);
          }
          return i;
        })(e, ob);
      return C.createElement(og, {
        option: t,
        DefaultShape: oy,
        shapeProps: r,
        activeClassName: "recharts-active-bar",
        inActiveClassName: "recharts-inactive-bar",
      });
    }
    var ow = function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return (r, n) => {
          if (eg(e)) return e;
          var i = eg(r) || null == r;
          return i
            ? e(r, n)
            : (i ||
                (function (e, t) {
                  if (!e) throw Error("Invariant failed");
                })(
                  !1,
                  "minPointSize callback function received a value with type of ".concat(
                    typeof r,
                    ". Currently only numbers or null/undefined are supported."
                  )
                ),
              t);
        };
      },
      oO = {
        active: !1,
        index: null,
        dataKey: void 0,
        graphicalItemId: void 0,
        coordinate: void 0,
      },
      oj = r0({
        name: "tooltip",
        initialState: {
          itemInteraction: { click: oO, hover: oO },
          axisInteraction: { click: oO, hover: oO },
          keyboardInteraction: oO,
          syncInteraction: {
            active: !1,
            index: null,
            dataKey: void 0,
            label: void 0,
            coordinate: void 0,
            sourceViewBox: void 0,
            graphicalItemId: void 0,
          },
          tooltipItemPayloads: [],
          settings: {
            shared: void 0,
            trigger: "hover",
            axisId: 0,
            active: !1,
            defaultIndex: void 0,
          },
        },
        reducers: {
          addTooltipEntrySettings: {
            reducer(e, t) {
              e.tooltipItemPayloads.push(t.payload);
            },
            prepare: rY(),
          },
          replaceTooltipEntrySettings: {
            reducer(e, t) {
              var r = t.payload,
                n = r.prev,
                i = r.next,
                a = rf(e).tooltipItemPayloads.indexOf(n);
              a > -1 && (e.tooltipItemPayloads[a] = i);
            },
            prepare: rY(),
          },
          removeTooltipEntrySettings: {
            reducer(e, t) {
              var r = rf(e).tooltipItemPayloads.indexOf(t.payload);
              r > -1 && e.tooltipItemPayloads.splice(r, 1);
            },
            prepare: rY(),
          },
          setTooltipSettingsState(e, t) {
            e.settings = t.payload;
          },
          setActiveMouseOverItemIndex(e, t) {
            (e.syncInteraction.active = !1),
              (e.syncInteraction.sourceViewBox = void 0),
              (e.keyboardInteraction.active = !1),
              (e.itemInteraction.hover.active = !0),
              (e.itemInteraction.hover.index = t.payload.activeIndex),
              (e.itemInteraction.hover.dataKey = t.payload.activeDataKey),
              (e.itemInteraction.hover.graphicalItemId =
                t.payload.activeGraphicalItemId),
              (e.itemInteraction.hover.coordinate = t.payload.activeCoordinate);
          },
          mouseLeaveChart(e) {
            (e.itemInteraction.hover.active = !1),
              (e.axisInteraction.hover.active = !1);
          },
          mouseLeaveItem(e) {
            e.itemInteraction.hover.active = !1;
          },
          setActiveClickItemIndex(e, t) {
            (e.syncInteraction.active = !1),
              (e.syncInteraction.sourceViewBox = void 0),
              (e.itemInteraction.click.active = !0),
              (e.keyboardInteraction.active = !1),
              (e.itemInteraction.click.index = t.payload.activeIndex),
              (e.itemInteraction.click.dataKey = t.payload.activeDataKey),
              (e.itemInteraction.click.graphicalItemId =
                t.payload.activeGraphicalItemId),
              (e.itemInteraction.click.coordinate = t.payload.activeCoordinate);
          },
          setMouseOverAxisIndex(e, t) {
            (e.syncInteraction.active = !1),
              (e.syncInteraction.sourceViewBox = void 0),
              (e.axisInteraction.hover.active = !0),
              (e.keyboardInteraction.active = !1),
              (e.axisInteraction.hover.index = t.payload.activeIndex),
              (e.axisInteraction.hover.dataKey = t.payload.activeDataKey),
              (e.axisInteraction.hover.coordinate = t.payload.activeCoordinate);
          },
          setMouseClickAxisIndex(e, t) {
            (e.syncInteraction.active = !1),
              (e.syncInteraction.sourceViewBox = void 0),
              (e.keyboardInteraction.active = !1),
              (e.axisInteraction.click.active = !0),
              (e.axisInteraction.click.index = t.payload.activeIndex),
              (e.axisInteraction.click.dataKey = t.payload.activeDataKey),
              (e.axisInteraction.click.coordinate = t.payload.activeCoordinate);
          },
          setSyncInteraction(e, t) {
            e.syncInteraction = t.payload;
          },
          setKeyboardInteraction(e, t) {
            (e.keyboardInteraction.active = t.payload.active),
              (e.keyboardInteraction.index = t.payload.activeIndex),
              (e.keyboardInteraction.coordinate = t.payload.activeCoordinate);
          },
        },
      }),
      oA = oj.actions,
      oE = oA.addTooltipEntrySettings,
      oS = oA.replaceTooltipEntrySettings,
      oP = oA.removeTooltipEntrySettings,
      ok = oA.setTooltipSettingsState,
      oM = oA.setActiveMouseOverItemIndex,
      oI = oA.mouseLeaveItem,
      o_ = oA.mouseLeaveChart,
      oC = oA.setActiveClickItemIndex,
      oT = oA.setMouseOverAxisIndex,
      oD = oA.setMouseClickAxisIndex,
      oN = oA.setSyncInteraction,
      oz = oA.setKeyboardInteraction,
      oL = oj.reducer,
      oR = (e, t, r) => {
        var n = td();
        return (i, a) => (o) => {
          null == e || e(i, a, o),
            n(
              oM({
                activeIndex: String(a),
                activeDataKey: t,
                activeCoordinate: i.tooltipPosition,
                activeGraphicalItemId: r,
              })
            );
        };
      },
      oB = (e) => {
        var t = td();
        return (r, n) => (i) => {
          null == e || e(r, n, i), t(oI());
        };
      },
      o$ = (e, t, r) => {
        var n = td();
        return (i, a) => (o) => {
          null == e || e(i, a, o),
            n(
              oC({
                activeIndex: String(a),
                activeDataKey: t,
                activeCoordinate: i.tooltipPosition,
                activeGraphicalItemId: r,
              })
            );
        };
      };
    function oF(e) {
      var t = e.tooltipEntrySettings,
        r = td(),
        n = ip(),
        i = (0, C.useRef)(null);
      return (
        (0, C.useLayoutEffect)(() => {
          n ||
            (null === i.current
              ? r(oE(t))
              : i.current !== t && r(oS({ prev: i.current, next: t })),
            (i.current = t));
        }, [t, r, n]),
        (0, C.useLayoutEffect)(
          () => () => {
            i.current && (r(oP(i.current)), (i.current = null));
          },
          [r]
        ),
        null
      );
    }
    var oU = ["children"],
      oK = (0, C.createContext)({
        data: [],
        xAxisId: "xAxis-0",
        yAxisId: "yAxis-0",
        dataPointFormatter: () => ({ x: 0, y: 0, value: 0 }),
        errorBarOffset: 0,
      });
    function oH(e) {
      var t = e.children,
        r = (function (e, t) {
          if (null == e) return {};
          var r,
            n,
            i = (function (e, t) {
              if (null == e) return {};
              var r = {};
              for (var n in e)
                if ({}.hasOwnProperty.call(e, n)) {
                  if (-1 !== t.indexOf(n)) continue;
                  r[n] = e[n];
                }
              return r;
            })(e, t);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for (n = 0; n < a.length; n++)
              (r = a[n]),
                -1 === t.indexOf(r) &&
                  {}.propertyIsEnumerable.call(e, r) &&
                  (i[r] = e[r]);
          }
          return i;
        })(e, oU);
      return C.createElement(oK.Provider, { value: r }, t);
    }
    function oW(e) {
      var t;
      return e
        ? (e = nC((t = e)) ? NaN : Number(t)) === 1 / 0 || e === -1 / 0
          ? (e < 0 ? -1 : 1) * Number.MAX_VALUE
          : e == e
          ? e
          : 0
        : 0 === e
        ? e
        : 0;
    }
    function oq(e, t, r) {
      r && "number" != typeof r && n$(e, t, r) && (t = r = void 0),
        (e = oW(e)),
        void 0 === t ? ((t = e), (e = 0)) : (t = oW(t)),
        (r = void 0 === r ? (e < t ? 1 : -1) : oW(r));
      let n = Math.max(Math.ceil((t - e) / (r || 1)), 0),
        i = Array(n);
      for (let t = 0; t < n; t++) (i[t] = e), (e += r);
      return i;
    }
    var oV = (e) => e.chartData,
      oY = rI([oV], (e) => {
        var t = null != e.chartData ? e.chartData.length - 1 : 0;
        return {
          chartData: e.chartData,
          computedData: e.computedData,
          dataEndIndex: t,
          dataStartIndex: 0,
        };
      }),
      oX = (e, t, r, n) => (n ? oY(e) : oV(e)),
      oG = (e, t, r) => (r ? oY(e) : oV(e)),
      oZ = rI([oX], (e) => {
        var t = e.chartData,
          r = e.dataStartIndex,
          n = e.dataEndIndex;
        return null != t ? t.slice(r, n + 1) : [];
      });
    rI([oY], (e) => {
      var t = e.chartData,
        r = e.dataStartIndex,
        n = e.dataEndIndex;
      return null != t ? t.slice(r, n + 1) : [];
    });
    var oQ = rI([oV], (e) => {
      var t = e.chartData,
        r = e.dataStartIndex,
        n = e.dataEndIndex;
      return null != t ? t.slice(r, n + 1) : [];
    });
    function oJ(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          var r =
            null == e
              ? null
              : ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
          if (null != r) {
            var n,
              i,
              a,
              o,
              l = [],
              u = !0,
              c = !1;
            try {
              if (((a = (r = r.call(e)).next), 0 === t)) {
                if (Object(r) !== r) return;
                u = !1;
              } else
                for (
                  ;
                  !(u = (n = a.call(r)).done) &&
                  (l.push(n.value), l.length !== t);
                  u = !0
                );
            } catch (e) {
              (c = !0), (i = e);
            } finally {
              try {
                if (
                  !u &&
                  null != r.return &&
                  ((o = r.return()), Object(o) !== o)
                )
                  return;
              } finally {
                if (c) throw i;
              }
            }
            return l;
          }
        })(e, t) ||
        (function (e, t) {
          if (e) {
            if ("string" == typeof e) return o0(e, t);
            var r = {}.toString.call(e).slice(8, -1);
            return (
              "Object" === r && e.constructor && (r = e.constructor.name),
              "Map" === r || "Set" === r
                ? Array.from(e)
                : "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                ? o0(e, t)
                : void 0
            );
          }
        })(e, t) ||
        (function () {
          throw TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function o0(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
      return n;
    }
    function o1(e) {
      if (Array.isArray(e) && 2 === e.length) {
        var t = oJ(e, 2),
          r = t[0],
          n = t[1];
        if (eZ(r) && eZ(n)) return !0;
      }
      return !1;
    }
    function o2(e, t, r) {
      return r ? e : [Math.min(e[0], t[0]), Math.max(e[1], t[1])];
    }
    function o3(e, t) {
      if (t && "function" != typeof e && Array.isArray(e) && 2 === e.length) {
        var r,
          n,
          i = oJ(e, 2),
          a = i[0],
          o = i[1];
        if (eZ(a)) r = a;
        else if ("function" == typeof a) return;
        if (eZ(o)) n = o;
        else if ("function" == typeof o) return;
        var l = [r, n];
        if (o1(l)) return l;
      }
    }
    var o5 = e.i(311728);
    function o6(e) {
      return 0 === e
        ? 1
        : Math.floor(new o5.default(e).abs().log(10).toNumber()) + 1;
    }
    function o4(e, t, r) {
      for (var n = new o5.default(e), i = 0, a = []; n.lt(t) && i < 1e5; )
        a.push(n.toNumber()), (n = n.add(r)), i++;
      return a;
    }
    function o8(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          var r =
            null == e
              ? null
              : ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
          if (null != r) {
            var n,
              i,
              a,
              o,
              l = [],
              u = !0,
              c = !1;
            try {
              if (((a = (r = r.call(e)).next), 0 === t)) {
                if (Object(r) !== r) return;
                u = !1;
              } else
                for (
                  ;
                  !(u = (n = a.call(r)).done) &&
                  (l.push(n.value), l.length !== t);
                  u = !0
                );
            } catch (e) {
              (c = !0), (i = e);
            } finally {
              try {
                if (
                  !u &&
                  null != r.return &&
                  ((o = r.return()), Object(o) !== o)
                )
                  return;
              } finally {
                if (c) throw i;
              }
            }
            return l;
          }
        })(e, t) ||
        (function (e, t) {
          if (e) {
            if ("string" == typeof e) return o7(e, t);
            var r = {}.toString.call(e).slice(8, -1);
            return (
              "Object" === r && e.constructor && (r = e.constructor.name),
              "Map" === r || "Set" === r
                ? Array.from(e)
                : "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                ? o7(e, t)
                : void 0
            );
          }
        })(e, t) ||
        (function () {
          throw TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function o7(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
      return n;
    }
    var o9 = (e) => {
        var t = o8(e, 2),
          r = t[0],
          n = t[1],
          i = r,
          a = n;
        return r > n && ((i = n), (a = r)), [i, a];
      },
      le = (e, t, r) => {
        if (e.lte(0)) return new o5.default(0);
        var n = o6(e.toNumber()),
          i = new o5.default(10).pow(n),
          a = e.div(i),
          o = 1 !== n ? 0.05 : 0.1,
          l = new o5.default(Math.ceil(a.div(o).toNumber()))
            .add(r)
            .mul(o)
            .mul(i);
        return new o5.default(t ? l.toNumber() : Math.ceil(l.toNumber()));
      },
      lt = (e, t, r) => {
        if (e.lte(0)) return new o5.default(0);
        var n,
          i = [1, 2, 2.5, 5],
          a = e.toNumber(),
          o = Math.floor(new o5.default(a).abs().log(10).toNumber()),
          l = new o5.default(10).pow(o),
          u = e.div(l).toNumber(),
          c = i.findIndex((e) => e >= u - 1e-10);
        if ((-1 === c && ((l = l.mul(10)), (c = 0)), (c += r) >= i.length)) {
          var s = Math.floor(c / i.length);
          (c %= i.length), (l = l.mul(new o5.default(10).pow(s)));
        }
        var f = null != (n = i[c]) ? n : 1,
          d = new o5.default(f).mul(l);
        return t ? d : new o5.default(Math.ceil(d.toNumber()));
      },
      lr = function (e, t, r, n) {
        var i,
          a =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
          o =
            arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : le;
        if (!Number.isFinite((t - e) / (r - 1)))
          return {
            step: new o5.default(0),
            tickMin: new o5.default(0),
            tickMax: new o5.default(0),
          };
        var l = o(new o5.default(t).sub(e).div(r - 1), n, a),
          u = Math.ceil(
            (i =
              e <= 0 && t >= 0
                ? new o5.default(0)
                : (i = new o5.default(e).add(t).div(2)).sub(
                    new o5.default(i).mod(l)
                  ))
              .sub(e)
              .div(l)
              .toNumber()
          ),
          c = Math.ceil(new o5.default(t).sub(i).div(l).toNumber()),
          s = u + c + 1;
        return s > r
          ? lr(e, t, r, n, a + 1, o)
          : (s < r &&
              ((c = t > 0 ? c + (r - s) : c), (u = t > 0 ? u : u + (r - s))),
            {
              step: l,
              tickMin: i.sub(new o5.default(u).mul(l)),
              tickMax: i.add(new o5.default(c).mul(l)),
            });
      },
      ln = function (e) {
        var t = o8(e, 2),
          r = t[0],
          n = t[1],
          i =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
          a =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          o =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : "auto",
          l = Math.max(i, 2),
          u = o8(o9([r, n]), 2),
          c = u[0],
          s = u[1];
        if (c === -1 / 0 || s === 1 / 0) {
          var f =
            s === 1 / 0
              ? [c, ...Array(i - 1).fill(1 / 0)]
              : [...Array(i - 1).fill(-1 / 0), s];
          return r > n ? f.reverse() : f;
        }
        if (c === s)
          return ((e, t, r) => {
            var n = new o5.default(1),
              i = new o5.default(e);
            if (!i.isint() && r) {
              var a = Math.abs(e);
              a < 1
                ? ((n = new o5.default(10).pow(o6(e) - 1)),
                  (i = new o5.default(Math.floor(i.div(n).toNumber())).mul(n)))
                : a > 1 && (i = new o5.default(Math.floor(e)));
            } else
              0 === e
                ? (i = new o5.default(Math.floor((t - 1) / 2)))
                : r || (i = new o5.default(Math.floor(e)));
            for (var o = Math.floor((t - 1) / 2), l = [], u = 0; u < t; u++)
              l.push(i.add(new o5.default(u - o).mul(n)).toNumber());
            return l;
          })(c, i, a);
        var d = lr(c, s, l, a, 0, "snap125" === o ? lt : le),
          h = d.step,
          p = o4(d.tickMin, d.tickMax.add(new o5.default(0.1).mul(h)), h);
        return r > n ? p.reverse() : p;
      },
      li = function (e, t) {
        var r = o8(e, 2),
          n = r[0],
          i = r[1],
          a =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          o =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : "auto",
          l = o8(o9([n, i]), 2),
          u = l[0],
          c = l[1];
        if (u === -1 / 0 || c === 1 / 0) return [n, i];
        if (u === c) return [u];
        var s = Math.max(t, 2),
          f = ("snap125" === o ? lt : le)(
            new o5.default(c).sub(u).div(s - 1),
            a,
            0
          ),
          d = [...o4(new o5.default(u), new o5.default(c), f), c];
        if (!1 === a) {
          var h = (d = d.map((e) => Math.round(e))).length - 1;
          h > 0 && d[h] === d[h - 1] && (d = d.slice(0, h));
        }
        return n > i ? d.reverse() : d;
      },
      la = (e) => e.rootProps.maxBarSize,
      lo = (e) => e.rootProps.barCategoryGap,
      ll = (e) => e.rootProps.stackOffset,
      lu = (e) => e.rootProps.reverseStackOrder,
      lc = (e) => e.options.chartName,
      ls = (e) => e.rootProps.syncId,
      lf = (e) => e.rootProps.syncMethod,
      ld = (e) => e.options.eventEmitter,
      lh = (e, t) => t,
      lp = (e, t, r) => r;
    function ly(e) {
      return null == e ? void 0 : e.id;
    }
    function lv(e, t, r) {
      var n = t.chartData,
        i = void 0 === n ? [] : n,
        a = r.allowDuplicatedCategory,
        o = r.dataKey,
        l = new Map();
      return (
        e.forEach((e) => {
          var t,
            r = null != (t = e.data) ? t : i;
          if (null != r && 0 !== r.length) {
            var n = ly(e);
            r.forEach((t, r) => {
              var i,
                u = null == o || a ? r : String(nJ(t, o, null)),
                c = nJ(t, e.dataKey, 0);
              Object.assign((i = l.has(u) ? l.get(u) : {}), { [n]: c }),
                l.set(u, i);
            });
          }
        }),
        Array.from(l.values())
      );
    }
    function lm(e) {
      return "stackId" in e && null != e.stackId && null != e.dataKey;
    }
    var lg = (e, t) =>
        e === t || (null != e && null != t && e[0] === t[0] && e[1] === t[1]),
      lb = (e) => {
        var t = iB(e);
        return "horizontal" === t
          ? "xAxis"
          : "vertical" === t
          ? "yAxis"
          : "centric" === t
          ? "angleAxis"
          : "radiusAxis";
      },
      lx = (e) => e.tooltip.settings.axisId;
    function lw(e) {
      if (null != e) {
        var t = e.ticks,
          r = e.bandwidth,
          n = e.range(),
          i = [Math.min(...n), Math.max(...n)];
        return {
          domain: () => e.domain(),
          range: (function (e) {
            function t() {
              return e.apply(this, arguments);
            }
            return (
              (t.toString = function () {
                return e.toString();
              }),
              t
            );
          })(() => i),
          rangeMin: () => i[0],
          rangeMax: () => i[1],
          isInRange(e) {
            var t = i[0],
              r = i[1];
            return t <= r ? e >= t && e <= r : e >= r && e <= t;
          },
          bandwidth: r ? () => r.call(e) : void 0,
          ticks: t ? (r) => t.call(e, r) : void 0,
          map: (t, r) => {
            var n = e(t);
            if (null != n) {
              if (e.bandwidth && null != r && r.position) {
                var i = e.bandwidth();
                switch (r.position) {
                  case "middle":
                    n += i / 2;
                    break;
                  case "end":
                    n += i;
                }
              }
              return n;
            }
          },
        };
      }
    }
    function lO(e, t) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          this.range(e);
          break;
        default:
          this.range(t).domain(e);
      }
      return this;
    }
    function lj(e, t) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          "function" == typeof e ? this.interpolator(e) : this.range(e);
          break;
        default:
          this.domain(e),
            "function" == typeof t ? this.interpolator(t) : this.range(t);
      }
      return this;
    }
    e.s([], 897978), e.i(897978), e.s([], 397898), e.i(397898);
    class lA extends Map {
      constructor(e, t = lS) {
        if (
          (super(),
          Object.defineProperties(this, {
            _intern: { value: new Map() },
            _key: { value: t },
          }),
          null != e)
        )
          for (const [t, r] of e) this.set(t, r);
      }
      get(e) {
        return super.get(lE(this, e));
      }
      has(e) {
        return super.has(lE(this, e));
      }
      set(e, t) {
        return super.set(
          (function ({ _intern: e, _key: t }, r) {
            let n = t(r);
            return e.has(n) ? e.get(n) : (e.set(n, r), r);
          })(this, e),
          t
        );
      }
      delete(e) {
        return super.delete(
          (function ({ _intern: e, _key: t }, r) {
            let n = t(r);
            return e.has(n) && ((r = e.get(n)), e.delete(n)), r;
          })(this, e)
        );
      }
    }
    function lE({ _intern: e, _key: t }, r) {
      let n = t(r);
      return e.has(n) ? e.get(n) : r;
    }
    function lS(e) {
      return null !== e && "object" == typeof e ? e.valueOf() : e;
    }
    let lP = Symbol("implicit");
    function lk() {
      var e = new lA(),
        t = [],
        r = [],
        n = lP;
      function i(i) {
        let a = e.get(i);
        if (void 0 === a) {
          if (n !== lP) return n;
          e.set(i, (a = t.push(i) - 1));
        }
        return r[a % r.length];
      }
      return (
        (i.domain = function (r) {
          if (!arguments.length) return t.slice();
          for (let n of ((t = []), (e = new lA()), r))
            e.has(n) || e.set(n, t.push(n) - 1);
          return i;
        }),
        (i.range = function (e) {
          return arguments.length ? ((r = Array.from(e)), i) : r.slice();
        }),
        (i.unknown = function (e) {
          return arguments.length ? ((n = e), i) : n;
        }),
        (i.copy = function () {
          return lk(t, r).unknown(n);
        }),
        lO.apply(i, arguments),
        i
      );
    }
    function lM() {
      var e,
        t,
        r = lk().unknown(void 0),
        n = r.domain,
        i = r.range,
        a = 0,
        o = 1,
        l = !1,
        u = 0,
        c = 0,
        s = 0.5;
      function f() {
        var r = n().length,
          f = o < a,
          d = f ? o : a,
          h = f ? a : o;
        (e = (h - d) / Math.max(1, r - u + 2 * c)),
          l && (e = Math.floor(e)),
          (d += (h - d - e * (r - u)) * s),
          (t = e * (1 - u)),
          l && ((d = Math.round(d)), (t = Math.round(t)));
        var p = (function (e, t, r) {
          (e *= 1),
            (t *= 1),
            (r =
              (i = arguments.length) < 2
                ? ((t = e), (e = 0), 1)
                : i < 3
                ? 1
                : +r);
          for (
            var n = -1,
              i = 0 | Math.max(0, Math.ceil((t - e) / r)),
              a = Array(i);
            ++n < i;

          )
            a[n] = e + n * r;
          return a;
        })(r).map(function (t) {
          return d + e * t;
        });
        return i(f ? p.reverse() : p);
      }
      return (
        delete r.unknown,
        (r.domain = function (e) {
          return arguments.length ? (n(e), f()) : n();
        }),
        (r.range = function (e) {
          return arguments.length
            ? (([a, o] = e), (a *= 1), (o *= 1), f())
            : [a, o];
        }),
        (r.rangeRound = function (e) {
          return ([a, o] = e), (a *= 1), (o *= 1), (l = !0), f();
        }),
        (r.bandwidth = function () {
          return t;
        }),
        (r.step = function () {
          return e;
        }),
        (r.round = function (e) {
          return arguments.length ? ((l = !!e), f()) : l;
        }),
        (r.padding = function (e) {
          return arguments.length ? ((u = Math.min(1, (c = +e))), f()) : u;
        }),
        (r.paddingInner = function (e) {
          return arguments.length ? ((u = Math.min(1, e)), f()) : u;
        }),
        (r.paddingOuter = function (e) {
          return arguments.length ? ((c = +e), f()) : c;
        }),
        (r.align = function (e) {
          return arguments.length
            ? ((s = Math.max(0, Math.min(1, e))), f())
            : s;
        }),
        (r.copy = function () {
          return lM(n(), [a, o])
            .round(l)
            .paddingInner(u)
            .paddingOuter(c)
            .align(s);
        }),
        lO.apply(f(), arguments)
      );
    }
    function lI() {
      return (function e(t) {
        var r = t.copy;
        return (
          (t.padding = t.paddingOuter),
          delete t.paddingInner,
          delete t.paddingOuter,
          (t.copy = function () {
            return e(r());
          }),
          t
        );
      })(lM.apply(null, arguments).paddingInner(1));
    }
    let l_ = Math.sqrt(50),
      lC = Math.sqrt(10),
      lT = Math.sqrt(2);
    function lD(e, t, r) {
      let n,
        i,
        a,
        o = (t - e) / Math.max(0, r),
        l = Math.floor(Math.log10(o)),
        u = o / Math.pow(10, l),
        c = u >= l_ ? 10 : u >= lC ? 5 : u >= lT ? 2 : 1;
      return (l < 0
        ? ((n = Math.round(e * (a = Math.pow(10, -l) / c))),
          (i = Math.round(t * a)),
          n / a < e && ++n,
          i / a > t && --i,
          (a = -a))
        : ((n = Math.round(e / (a = Math.pow(10, l) * c))),
          (i = Math.round(t / a)),
          n * a < e && ++n,
          i * a > t && --i),
      i < n && 0.5 <= r && r < 2)
        ? lD(e, t, 2 * r)
        : [n, i, a];
    }
    function lN(e, t, r) {
      if (((t *= 1), (e *= 1), !((r *= 1) > 0))) return [];
      if (e === t) return [e];
      let n = t < e,
        [i, a, o] = n ? lD(t, e, r) : lD(e, t, r);
      if (!(a >= i)) return [];
      let l = a - i + 1,
        u = Array(l);
      if (n)
        if (o < 0) for (let e = 0; e < l; ++e) u[e] = -((a - e) / o);
        else for (let e = 0; e < l; ++e) u[e] = (a - e) * o;
      else if (o < 0) for (let e = 0; e < l; ++e) u[e] = -((i + e) / o);
      else for (let e = 0; e < l; ++e) u[e] = (i + e) * o;
      return u;
    }
    function lz(e, t, r) {
      return lD((e *= 1), (t *= 1), (r *= 1))[2];
    }
    function lL(e, t, r) {
      (t *= 1), (e *= 1), (r *= 1);
      let n = t < e,
        i = n ? lz(t, e, r) : lz(e, t, r);
      return (n ? -1 : 1) * (i < 0 ? -(1 / i) : i);
    }
    function lR(e, t) {
      return null == e || null == t
        ? NaN
        : e < t
        ? -1
        : e > t
        ? 1
        : e >= t
        ? 0
        : NaN;
    }
    function lB(e, t) {
      return null == e || null == t
        ? NaN
        : t < e
        ? -1
        : t > e
        ? 1
        : t >= e
        ? 0
        : NaN;
    }
    function l$(e) {
      let t, r, n;
      function i(e, n, a = 0, o = e.length) {
        if (a < o) {
          if (0 !== t(n, n)) return o;
          do {
            let t = (a + o) >>> 1;
            0 > r(e[t], n) ? (a = t + 1) : (o = t);
          } while (a < o);
        }
        return a;
      }
      return (
        2 !== e.length
          ? ((t = lR), (r = (t, r) => lR(e(t), r)), (n = (t, r) => e(t) - r))
          : ((t = e === lR || e === lB ? e : lF), (r = e), (n = e)),
        {
          left: i,
          center: function (e, t, r = 0, a = e.length) {
            let o = i(e, t, r, a - 1);
            return o > r && n(e[o - 1], t) > -n(e[o], t) ? o - 1 : o;
          },
          right: function (e, n, i = 0, a = e.length) {
            if (i < a) {
              if (0 !== t(n, n)) return a;
              do {
                let t = (i + a) >>> 1;
                0 >= r(e[t], n) ? (i = t + 1) : (a = t);
              } while (i < a);
            }
            return i;
          },
        }
      );
    }
    function lF() {
      return 0;
    }
    function lU(e) {
      return null === e ? NaN : +e;
    }
    let lK = l$(lR),
      lH = lK.right;
    function lW(e, t, r) {
      (e.prototype = t.prototype = r), (r.constructor = e);
    }
    function lq(e, t) {
      var r = Object.create(e.prototype);
      for (var n in t) r[n] = t[n];
      return r;
    }
    function lV() {}
    lK.left, l$(lU).center;
    var lY = "\\s*([+-]?\\d+)\\s*",
      lX = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      lG = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      lZ = /^#([0-9a-f]{3,8})$/,
      lQ = RegExp(`^rgb\\(${lY},${lY},${lY}\\)$`),
      lJ = RegExp(`^rgb\\(${lG},${lG},${lG}\\)$`),
      l0 = RegExp(`^rgba\\(${lY},${lY},${lY},${lX}\\)$`),
      l1 = RegExp(`^rgba\\(${lG},${lG},${lG},${lX}\\)$`),
      l2 = RegExp(`^hsl\\(${lX},${lG},${lG}\\)$`),
      l3 = RegExp(`^hsla\\(${lX},${lG},${lG},${lX}\\)$`),
      l5 = {
        aliceblue: 0xf0f8ff,
        antiquewhite: 0xfaebd7,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 0xf0ffff,
        beige: 0xf5f5dc,
        bisque: 0xffe4c4,
        black: 0,
        blanchedalmond: 0xffebcd,
        blue: 255,
        blueviolet: 9055202,
        brown: 0xa52a2a,
        burlywood: 0xdeb887,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 0xd2691e,
        coral: 0xff7f50,
        cornflowerblue: 6591981,
        cornsilk: 0xfff8dc,
        crimson: 0xdc143c,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 0xb8860b,
        darkgray: 0xa9a9a9,
        darkgreen: 25600,
        darkgrey: 0xa9a9a9,
        darkkhaki: 0xbdb76b,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 0xff8c00,
        darkorchid: 0x9932cc,
        darkred: 9109504,
        darksalmon: 0xe9967a,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 0xff1493,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 0xb22222,
        floralwhite: 0xfffaf0,
        forestgreen: 2263842,
        fuchsia: 0xff00ff,
        gainsboro: 0xdcdcdc,
        ghostwhite: 0xf8f8ff,
        gold: 0xffd700,
        goldenrod: 0xdaa520,
        gray: 8421504,
        green: 32768,
        greenyellow: 0xadff2f,
        grey: 8421504,
        honeydew: 0xf0fff0,
        hotpink: 0xff69b4,
        indianred: 0xcd5c5c,
        indigo: 4915330,
        ivory: 0xfffff0,
        khaki: 0xf0e68c,
        lavender: 0xe6e6fa,
        lavenderblush: 0xfff0f5,
        lawngreen: 8190976,
        lemonchiffon: 0xfffacd,
        lightblue: 0xadd8e6,
        lightcoral: 0xf08080,
        lightcyan: 0xe0ffff,
        lightgoldenrodyellow: 0xfafad2,
        lightgray: 0xd3d3d3,
        lightgreen: 9498256,
        lightgrey: 0xd3d3d3,
        lightpink: 0xffb6c1,
        lightsalmon: 0xffa07a,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 0xb0c4de,
        lightyellow: 0xffffe0,
        lime: 65280,
        limegreen: 3329330,
        linen: 0xfaf0e6,
        magenta: 0xff00ff,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 0xba55d3,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 0xc71585,
        midnightblue: 1644912,
        mintcream: 0xf5fffa,
        mistyrose: 0xffe4e1,
        moccasin: 0xffe4b5,
        navajowhite: 0xffdead,
        navy: 128,
        oldlace: 0xfdf5e6,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 0xffa500,
        orangered: 0xff4500,
        orchid: 0xda70d6,
        palegoldenrod: 0xeee8aa,
        palegreen: 0x98fb98,
        paleturquoise: 0xafeeee,
        palevioletred: 0xdb7093,
        papayawhip: 0xffefd5,
        peachpuff: 0xffdab9,
        peru: 0xcd853f,
        pink: 0xffc0cb,
        plum: 0xdda0dd,
        powderblue: 0xb0e0e6,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 0xff0000,
        rosybrown: 0xbc8f8f,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 0xfa8072,
        sandybrown: 0xf4a460,
        seagreen: 3050327,
        seashell: 0xfff5ee,
        sienna: 0xa0522d,
        silver: 0xc0c0c0,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 0xfffafa,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 0xd2b48c,
        teal: 32896,
        thistle: 0xd8bfd8,
        tomato: 0xff6347,
        turquoise: 4251856,
        violet: 0xee82ee,
        wheat: 0xf5deb3,
        white: 0xffffff,
        whitesmoke: 0xf5f5f5,
        yellow: 0xffff00,
        yellowgreen: 0x9acd32,
      };
    function l6() {
      return this.rgb().formatHex();
    }
    function l4() {
      return this.rgb().formatRgb();
    }
    function l8(e) {
      var t, r;
      return (
        (e = (e + "").trim().toLowerCase()),
        (t = lZ.exec(e))
          ? ((r = t[1].length),
            (t = parseInt(t[1], 16)),
            6 === r
              ? l7(t)
              : 3 === r
              ? new ut(
                  ((t >> 8) & 15) | ((t >> 4) & 240),
                  ((t >> 4) & 15) | (240 & t),
                  ((15 & t) << 4) | (15 & t),
                  1
                )
              : 8 === r
              ? l9(
                  (t >> 24) & 255,
                  (t >> 16) & 255,
                  (t >> 8) & 255,
                  (255 & t) / 255
                )
              : 4 === r
              ? l9(
                  ((t >> 12) & 15) | ((t >> 8) & 240),
                  ((t >> 8) & 15) | ((t >> 4) & 240),
                  ((t >> 4) & 15) | (240 & t),
                  (((15 & t) << 4) | (15 & t)) / 255
                )
              : null)
          : (t = lQ.exec(e))
          ? new ut(t[1], t[2], t[3], 1)
          : (t = lJ.exec(e))
          ? new ut(
              (255 * t[1]) / 100,
              (255 * t[2]) / 100,
              (255 * t[3]) / 100,
              1
            )
          : (t = l0.exec(e))
          ? l9(t[1], t[2], t[3], t[4])
          : (t = l1.exec(e))
          ? l9((255 * t[1]) / 100, (255 * t[2]) / 100, (255 * t[3]) / 100, t[4])
          : (t = l2.exec(e))
          ? ul(t[1], t[2] / 100, t[3] / 100, 1)
          : (t = l3.exec(e))
          ? ul(t[1], t[2] / 100, t[3] / 100, t[4])
          : l5.hasOwnProperty(e)
          ? l7(l5[e])
          : "transparent" === e
          ? new ut(NaN, NaN, NaN, 0)
          : null
      );
    }
    function l7(e) {
      return new ut((e >> 16) & 255, (e >> 8) & 255, 255 & e, 1);
    }
    function l9(e, t, r, n) {
      return n <= 0 && (e = t = r = NaN), new ut(e, t, r, n);
    }
    function ue(e, t, r, n) {
      var i;
      return 1 == arguments.length
        ? ((i = e) instanceof lV || (i = l8(i)), i)
          ? new ut((i = i.rgb()).r, i.g, i.b, i.opacity)
          : new ut()
        : new ut(e, t, r, null == n ? 1 : n);
    }
    function ut(e, t, r, n) {
      (this.r = +e), (this.g = +t), (this.b = +r), (this.opacity = +n);
    }
    function ur() {
      return `#${uo(this.r)}${uo(this.g)}${uo(this.b)}`;
    }
    function un() {
      let e = ui(this.opacity);
      return `${1 === e ? "rgb(" : "rgba("}${ua(this.r)}, ${ua(this.g)}, ${ua(
        this.b
      )}${1 === e ? ")" : `, ${e})`}`;
    }
    function ui(e) {
      return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
    }
    function ua(e) {
      return Math.max(0, Math.min(255, Math.round(e) || 0));
    }
    function uo(e) {
      return ((e = ua(e)) < 16 ? "0" : "") + e.toString(16);
    }
    function ul(e, t, r, n) {
      return (
        n <= 0
          ? (e = t = r = NaN)
          : r <= 0 || r >= 1
          ? (e = t = NaN)
          : t <= 0 && (e = NaN),
        new uc(e, t, r, n)
      );
    }
    function uu(e) {
      if (e instanceof uc) return new uc(e.h, e.s, e.l, e.opacity);
      if ((e instanceof lV || (e = l8(e)), !e)) return new uc();
      if (e instanceof uc) return e;
      var t = (e = e.rgb()).r / 255,
        r = e.g / 255,
        n = e.b / 255,
        i = Math.min(t, r, n),
        a = Math.max(t, r, n),
        o = NaN,
        l = a - i,
        u = (a + i) / 2;
      return (
        l
          ? ((o =
              t === a
                ? (r - n) / l + (r < n) * 6
                : r === a
                ? (n - t) / l + 2
                : (t - r) / l + 4),
            (l /= u < 0.5 ? a + i : 2 - a - i),
            (o *= 60))
          : (l = u > 0 && u < 1 ? 0 : o),
        new uc(o, l, u, e.opacity)
      );
    }
    function uc(e, t, r, n) {
      (this.h = +e), (this.s = +t), (this.l = +r), (this.opacity = +n);
    }
    function us(e) {
      return (e = (e || 0) % 360) < 0 ? e + 360 : e;
    }
    function uf(e) {
      return Math.max(0, Math.min(1, e || 0));
    }
    function ud(e, t, r) {
      return (
        (e < 60
          ? t + ((r - t) * e) / 60
          : e < 180
          ? r
          : e < 240
          ? t + ((r - t) * (240 - e)) / 60
          : t) * 255
      );
    }
    function uh(e, t, r, n, i) {
      var a = e * e,
        o = a * e;
      return (
        ((1 - 3 * e + 3 * a - o) * t +
          (4 - 6 * a + 3 * o) * r +
          (1 + 3 * e + 3 * a - 3 * o) * n +
          o * i) /
        6
      );
    }
    lW(lV, l8, {
      copy(e) {
        return Object.assign(new this.constructor(), this, e);
      },
      displayable() {
        return this.rgb().displayable();
      },
      hex: l6,
      formatHex: l6,
      formatHex8: function () {
        return this.rgb().formatHex8();
      },
      formatHsl: function () {
        return uu(this).formatHsl();
      },
      formatRgb: l4,
      toString: l4,
    }),
      lW(
        ut,
        ue,
        lq(lV, {
          brighter(e) {
            return (
              (e =
                null == e
                  ? 1.4285714285714286
                  : Math.pow(1.4285714285714286, e)),
              new ut(this.r * e, this.g * e, this.b * e, this.opacity)
            );
          },
          darker(e) {
            return (
              (e = null == e ? 0.7 : Math.pow(0.7, e)),
              new ut(this.r * e, this.g * e, this.b * e, this.opacity)
            );
          },
          rgb() {
            return this;
          },
          clamp() {
            return new ut(ua(this.r), ua(this.g), ua(this.b), ui(this.opacity));
          },
          displayable() {
            return (
              -0.5 <= this.r &&
              this.r < 255.5 &&
              -0.5 <= this.g &&
              this.g < 255.5 &&
              -0.5 <= this.b &&
              this.b < 255.5 &&
              0 <= this.opacity &&
              this.opacity <= 1
            );
          },
          hex: ur,
          formatHex: ur,
          formatHex8: function () {
            return `#${uo(this.r)}${uo(this.g)}${uo(this.b)}${uo(
              (isNaN(this.opacity) ? 1 : this.opacity) * 255
            )}`;
          },
          formatRgb: un,
          toString: un,
        })
      ),
      lW(
        uc,
        function (e, t, r, n) {
          return 1 == arguments.length
            ? uu(e)
            : new uc(e, t, r, null == n ? 1 : n);
        },
        lq(lV, {
          brighter(e) {
            return (
              (e =
                null == e
                  ? 1.4285714285714286
                  : Math.pow(1.4285714285714286, e)),
              new uc(this.h, this.s, this.l * e, this.opacity)
            );
          },
          darker(e) {
            return (
              (e = null == e ? 0.7 : Math.pow(0.7, e)),
              new uc(this.h, this.s, this.l * e, this.opacity)
            );
          },
          rgb() {
            var e = (this.h % 360) + (this.h < 0) * 360,
              t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
              r = this.l,
              n = r + (r < 0.5 ? r : 1 - r) * t,
              i = 2 * r - n;
            return new ut(
              ud(e >= 240 ? e - 240 : e + 120, i, n),
              ud(e, i, n),
              ud(e < 120 ? e + 240 : e - 120, i, n),
              this.opacity
            );
          },
          clamp() {
            return new uc(us(this.h), uf(this.s), uf(this.l), ui(this.opacity));
          },
          displayable() {
            return (
              ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
              0 <= this.l &&
              this.l <= 1 &&
              0 <= this.opacity &&
              this.opacity <= 1
            );
          },
          formatHsl() {
            let e = ui(this.opacity);
            return `${1 === e ? "hsl(" : "hsla("}${us(this.h)}, ${
              100 * uf(this.s)
            }%, ${100 * uf(this.l)}%${1 === e ? ")" : `, ${e})`}`;
          },
        })
      );
    let up = (e) => () => e;
    function uy(e, t) {
      var r = t - e;
      return r
        ? function (t) {
            return e + t * r;
          }
        : up(isNaN(e) ? t : e);
    }
    let uv = (function e(t) {
      var r,
        n =
          1 == (r = +t)
            ? uy
            : function (e, t) {
                var n, i, a;
                return t - e
                  ? ((n = e),
                    (i = t),
                    (n = Math.pow(n, (a = r))),
                    (i = Math.pow(i, a) - n),
                    (a = 1 / a),
                    function (e) {
                      return Math.pow(n + e * i, a);
                    })
                  : up(isNaN(e) ? t : e);
              };
      function i(e, t) {
        var r = n((e = ue(e)).r, (t = ue(t)).r),
          i = n(e.g, t.g),
          a = n(e.b, t.b),
          o = uy(e.opacity, t.opacity);
        return function (t) {
          return (
            (e.r = r(t)), (e.g = i(t)), (e.b = a(t)), (e.opacity = o(t)), e + ""
          );
        };
      }
      return (i.gamma = e), i;
    })(1);
    function um(e) {
      return function (t) {
        var r,
          n,
          i = t.length,
          a = Array(i),
          o = Array(i),
          l = Array(i);
        for (r = 0; r < i; ++r)
          (n = ue(t[r])),
            (a[r] = n.r || 0),
            (o[r] = n.g || 0),
            (l[r] = n.b || 0);
        return (
          (a = e(a)),
          (o = e(o)),
          (l = e(l)),
          (n.opacity = 1),
          function (e) {
            return (n.r = a(e)), (n.g = o(e)), (n.b = l(e)), n + "";
          }
        );
      };
    }
    function ug(e, t) {
      return (
        (e *= 1),
        (t *= 1),
        function (r) {
          return e * (1 - r) + t * r;
        }
      );
    }
    um(function (e) {
      var t = e.length - 1;
      return function (r) {
        var n =
            r <= 0 ? (r = 0) : r >= 1 ? ((r = 1), t - 1) : Math.floor(r * t),
          i = e[n],
          a = e[n + 1],
          o = n > 0 ? e[n - 1] : 2 * i - a,
          l = n < t - 1 ? e[n + 2] : 2 * a - i;
        return uh((r - n / t) * t, o, i, a, l);
      };
    }),
      um(function (e) {
        var t = e.length;
        return function (r) {
          var n = Math.floor(((r %= 1) < 0 ? ++r : r) * t),
            i = e[(n + t - 1) % t],
            a = e[n % t],
            o = e[(n + 1) % t],
            l = e[(n + 2) % t];
          return uh((r - n / t) * t, i, a, o, l);
        };
      });
    var ub = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      ux = RegExp(ub.source, "g");
    function uw(e, t) {
      var r,
        n,
        i = typeof t;
      return null == t || "boolean" === i
        ? up(t)
        : ("number" === i
            ? ug
            : "string" === i
            ? (n = l8(t))
              ? ((t = n), uv)
              : function (e, t) {
                  var r,
                    n,
                    i,
                    a,
                    o,
                    l = (ub.lastIndex = ux.lastIndex = 0),
                    u = -1,
                    c = [],
                    s = [];
                  for (e += "", t += ""; (i = ub.exec(e)) && (a = ux.exec(t)); )
                    (o = a.index) > l &&
                      ((o = t.slice(l, o)), c[u] ? (c[u] += o) : (c[++u] = o)),
                      (i = i[0]) === (a = a[0])
                        ? c[u]
                          ? (c[u] += a)
                          : (c[++u] = a)
                        : ((c[++u] = null), s.push({ i: u, x: ug(i, a) })),
                      (l = ux.lastIndex);
                  return (
                    l < t.length &&
                      ((o = t.slice(l)), c[u] ? (c[u] += o) : (c[++u] = o)),
                    c.length < 2
                      ? s[0]
                        ? ((r = s[0].x),
                          function (e) {
                            return r(e) + "";
                          })
                        : ((n = t),
                          function () {
                            return n;
                          })
                      : ((t = s.length),
                        function (e) {
                          for (var r, n = 0; n < t; ++n)
                            c[(r = s[n]).i] = r.x(e);
                          return c.join("");
                        })
                  );
                }
            : t instanceof l8
            ? uv
            : t instanceof Date
            ? function (e, t) {
                var r = new Date();
                return (
                  (e *= 1),
                  (t *= 1),
                  function (n) {
                    return r.setTime(e * (1 - n) + t * n), r;
                  }
                );
              }
            : !ArrayBuffer.isView((r = t)) || r instanceof DataView
            ? Array.isArray(t)
              ? function (e, t) {
                  var r,
                    n = t ? t.length : 0,
                    i = e ? Math.min(n, e.length) : 0,
                    a = Array(i),
                    o = Array(n);
                  for (r = 0; r < i; ++r) a[r] = uw(e[r], t[r]);
                  for (; r < n; ++r) o[r] = t[r];
                  return function (e) {
                    for (r = 0; r < i; ++r) o[r] = a[r](e);
                    return o;
                  };
                }
              : ("function" != typeof t.valueOf &&
                  "function" != typeof t.toString) ||
                isNaN(t)
              ? function (e, t) {
                  var r,
                    n = {},
                    i = {};
                  for (r in ((null === e || "object" != typeof e) && (e = {}),
                  (null === t || "object" != typeof t) && (t = {}),
                  t))
                    r in e ? (n[r] = uw(e[r], t[r])) : (i[r] = t[r]);
                  return function (e) {
                    for (r in n) i[r] = n[r](e);
                    return i;
                  };
                }
              : ug
            : function (e, t) {
                t || (t = []);
                var r,
                  n = e ? Math.min(t.length, e.length) : 0,
                  i = t.slice();
                return function (a) {
                  for (r = 0; r < n; ++r) i[r] = e[r] * (1 - a) + t[r] * a;
                  return i;
                };
              })(e, t);
    }
    function uO(e, t) {
      return (
        (e *= 1),
        (t *= 1),
        function (r) {
          return Math.round(e * (1 - r) + t * r);
        }
      );
    }
    function uj(e) {
      return +e;
    }
    var uA = [0, 1];
    function uE(e) {
      return e;
    }
    function uS(e, t) {
      var r;
      return (t -= e *= 1)
        ? function (r) {
            return (r - e) / t;
          }
        : ((r = isNaN(t) ? NaN : 0.5),
          function () {
            return r;
          });
    }
    function uP(e, t, r) {
      var n = e[0],
        i = e[1],
        a = t[0],
        o = t[1];
      return (
        i < n
          ? ((n = uS(i, n)), (a = r(o, a)))
          : ((n = uS(n, i)), (a = r(a, o))),
        function (e) {
          return a(n(e));
        }
      );
    }
    function uk(e, t, r) {
      var n = Math.min(e.length, t.length) - 1,
        i = Array(n),
        a = Array(n),
        o = -1;
      for (
        e[n] < e[0] && ((e = e.slice().reverse()), (t = t.slice().reverse()));
        ++o < n;

      )
        (i[o] = uS(e[o], e[o + 1])), (a[o] = r(t[o], t[o + 1]));
      return function (t) {
        var r = lH(e, t, 1, n) - 1;
        return a[r](i[r](t));
      };
    }
    function uM(e, t) {
      return t
        .domain(e.domain())
        .range(e.range())
        .interpolate(e.interpolate())
        .clamp(e.clamp())
        .unknown(e.unknown());
    }
    function uI() {
      var e,
        t,
        r,
        n,
        i,
        a,
        o = uA,
        l = uA,
        u = uw,
        c = uE;
      function s() {
        var e,
          t,
          r,
          u = Math.min(o.length, l.length);
        return (
          c !== uE &&
            ((e = o[0]),
            (t = o[u - 1]),
            e > t && ((r = e), (e = t), (t = r)),
            (c = function (r) {
              return Math.max(e, Math.min(t, r));
            })),
          (n = u > 2 ? uk : uP),
          (i = a = null),
          f
        );
      }
      function f(t) {
        return null == t || isNaN((t *= 1))
          ? r
          : (i || (i = n(o.map(e), l, u)))(e(c(t)));
      }
      return (
        (f.invert = function (r) {
          return c(t((a || (a = n(l, o.map(e), ug)))(r)));
        }),
        (f.domain = function (e) {
          return arguments.length ? ((o = Array.from(e, uj)), s()) : o.slice();
        }),
        (f.range = function (e) {
          return arguments.length ? ((l = Array.from(e)), s()) : l.slice();
        }),
        (f.rangeRound = function (e) {
          return (l = Array.from(e)), (u = uO), s();
        }),
        (f.clamp = function (e) {
          return arguments.length ? ((c = !!e || uE), s()) : c !== uE;
        }),
        (f.interpolate = function (e) {
          return arguments.length ? ((u = e), s()) : u;
        }),
        (f.unknown = function (e) {
          return arguments.length ? ((r = e), f) : r;
        }),
        function (r, n) {
          return (e = r), (t = n), s();
        }
      );
    }
    function u_() {
      return uI()(uE, uE);
    }
    function uC(e, t) {
      if (!isFinite(e) || 0 === e) return null;
      var r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e"),
        n = e.slice(0, r);
      return [n.length > 1 ? n[0] + n.slice(2) : n, +e.slice(r + 1)];
    }
    function uT(e) {
      return (e = uC(Math.abs(e))) ? e[1] : NaN;
    }
    var uD =
      /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
    function uN(e) {
      var t;
      if (!(t = uD.exec(e))) throw Error("invalid format: " + e);
      return new uz({
        fill: t[1],
        align: t[2],
        sign: t[3],
        symbol: t[4],
        zero: t[5],
        width: t[6],
        comma: t[7],
        precision: t[8] && t[8].slice(1),
        trim: t[9],
        type: t[10],
      });
    }
    function uz(e) {
      (this.fill = void 0 === e.fill ? " " : e.fill + ""),
        (this.align = void 0 === e.align ? ">" : e.align + ""),
        (this.sign = void 0 === e.sign ? "-" : e.sign + ""),
        (this.symbol = void 0 === e.symbol ? "" : e.symbol + ""),
        (this.zero = !!e.zero),
        (this.width = void 0 === e.width ? void 0 : +e.width),
        (this.comma = !!e.comma),
        (this.precision = void 0 === e.precision ? void 0 : +e.precision),
        (this.trim = !!e.trim),
        (this.type = void 0 === e.type ? "" : e.type + "");
    }
    function uL(e, t) {
      var r = uC(e, t);
      if (!r) return e + "";
      var n = r[0],
        i = r[1];
      return i < 0
        ? "0." + Array(-i).join("0") + n
        : n.length > i + 1
        ? n.slice(0, i + 1) + "." + n.slice(i + 1)
        : n + Array(i - n.length + 2).join("0");
    }
    (uN.prototype = uz.prototype),
      (uz.prototype.toString = function () {
        return (
          this.fill +
          this.align +
          this.sign +
          this.symbol +
          (this.zero ? "0" : "") +
          (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) +
          (this.comma ? "," : "") +
          (void 0 === this.precision
            ? ""
            : "." + Math.max(0, 0 | this.precision)) +
          (this.trim ? "~" : "") +
          this.type
        );
      });
    let uR = {
      "%": (e, t) => (100 * e).toFixed(t),
      b: (e) => Math.round(e).toString(2),
      c: (e) => e + "",
      d: function (e) {
        return Math.abs((e = Math.round(e))) >= 1e21
          ? e.toLocaleString("en").replace(/,/g, "")
          : e.toString(10);
      },
      e: (e, t) => e.toExponential(t),
      f: (e, t) => e.toFixed(t),
      g: (e, t) => e.toPrecision(t),
      o: (e) => Math.round(e).toString(8),
      p: (e, t) => uL(100 * e, t),
      r: uL,
      s: function (e, t) {
        var r = uC(e, t);
        if (!r) return (v = void 0), e.toPrecision(t);
        var n = r[0],
          i = r[1],
          a = i - (v = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
          o = n.length;
        return a === o
          ? n
          : a > o
          ? n + Array(a - o + 1).join("0")
          : a > 0
          ? n.slice(0, a) + "." + n.slice(a)
          : "0." + Array(1 - a).join("0") + uC(e, Math.max(0, t + a - 1))[0];
      },
      X: (e) => Math.round(e).toString(16).toUpperCase(),
      x: (e) => Math.round(e).toString(16),
    };
    function uB(e) {
      return e;
    }
    var u$ = Array.prototype.map,
      uF = [
        "y",
        "z",
        "a",
        "f",
        "p",
        "n",
        "µ",
        "m",
        "",
        "k",
        "M",
        "G",
        "T",
        "P",
        "E",
        "Z",
        "Y",
      ];
    function uU(e, t, r, n) {
      var i,
        a,
        o = lL(e, t, r);
      switch ((n = uN(null == n ? ",f" : n)).type) {
        case "s":
          var l = Math.max(Math.abs(e), Math.abs(t));
          return (
            null != n.precision ||
              isNaN(
                (a = Math.max(
                  0,
                  3 * Math.max(-8, Math.min(8, Math.floor(uT(l) / 3))) -
                    uT(Math.abs(o))
                ))
              ) ||
              (n.precision = a),
            b(n, l)
          );
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
          null != n.precision ||
            isNaN(
              (a =
                Math.max(
                  0,
                  uT(
                    Math.abs(Math.max(Math.abs(e), Math.abs(t))) -
                      (i = Math.abs((i = o)))
                  ) - uT(i)
                ) + 1)
            ) ||
            (n.precision = a - ("e" === n.type));
          break;
        case "f":
        case "%":
          null != n.precision ||
            isNaN((a = Math.max(0, -uT(Math.abs(o))))) ||
            (n.precision = a - ("%" === n.type) * 2);
      }
      return g(n);
    }
    function uK(e) {
      var t = e.domain;
      return (
        (e.ticks = function (e) {
          var r = t();
          return lN(r[0], r[r.length - 1], null == e ? 10 : e);
        }),
        (e.tickFormat = function (e, r) {
          var n = t();
          return uU(n[0], n[n.length - 1], null == e ? 10 : e, r);
        }),
        (e.nice = function (r) {
          null == r && (r = 10);
          var n,
            i,
            a = t(),
            o = 0,
            l = a.length - 1,
            u = a[o],
            c = a[l],
            s = 10;
          for (
            c < u && ((i = u), (u = c), (c = i), (i = o), (o = l), (l = i));
            s-- > 0;

          ) {
            if ((i = lz(u, c, r)) === n) return (a[o] = u), (a[l] = c), t(a);
            if (i > 0) (u = Math.floor(u / i) * i), (c = Math.ceil(c / i) * i);
            else if (i < 0)
              (u = Math.ceil(u * i) / i), (c = Math.floor(c * i) / i);
            else break;
            n = i;
          }
          return e;
        }),
        e
      );
    }
    function uH() {
      var e = u_();
      return (
        (e.copy = function () {
          return uM(e, uH());
        }),
        lO.apply(e, arguments),
        uK(e)
      );
    }
    function uW(e) {
      var t;
      function r(e) {
        return null == e || isNaN((e *= 1)) ? t : e;
      }
      return (
        (r.invert = r),
        (r.domain = r.range =
          function (t) {
            return arguments.length ? ((e = Array.from(t, uj)), r) : e.slice();
          }),
        (r.unknown = function (e) {
          return arguments.length ? ((t = e), r) : t;
        }),
        (r.copy = function () {
          return uW(e).unknown(t);
        }),
        (e = arguments.length ? Array.from(e, uj) : [0, 1]),
        uK(r)
      );
    }
    function uq(e, t) {
      e = e.slice();
      var r,
        n = 0,
        i = e.length - 1,
        a = e[n],
        o = e[i];
      return (
        o < a && ((r = n), (n = i), (i = r), (r = a), (a = o), (o = r)),
        (e[n] = t.floor(a)),
        (e[i] = t.ceil(o)),
        e
      );
    }
    function uV(e) {
      return Math.log(e);
    }
    function uY(e) {
      return Math.exp(e);
    }
    function uX(e) {
      return -Math.log(-e);
    }
    function uG(e) {
      return -Math.exp(-e);
    }
    function uZ(e) {
      return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
    }
    function uQ(e) {
      return (t, r) => -e(-t, r);
    }
    function uJ(e) {
      let t,
        r,
        n = e(uV, uY),
        i = n.domain,
        a = 10;
      function o() {
        var o, l;
        return (
          (t =
            (o = a) === Math.E
              ? Math.log
              : (10 === o && Math.log10) ||
                (2 === o && Math.log2) ||
                ((o = Math.log(o)), (e) => Math.log(e) / o)),
          (r =
            10 === (l = a)
              ? uZ
              : l === Math.E
              ? Math.exp
              : (e) => Math.pow(l, e)),
          i()[0] < 0 ? ((t = uQ(t)), (r = uQ(r)), e(uX, uG)) : e(uV, uY),
          n
        );
      }
      return (
        (n.base = function (e) {
          return arguments.length ? ((a = +e), o()) : a;
        }),
        (n.domain = function (e) {
          return arguments.length ? (i(e), o()) : i();
        }),
        (n.ticks = (e) => {
          let n,
            o,
            l = i(),
            u = l[0],
            c = l[l.length - 1],
            s = c < u;
          s && ([u, c] = [c, u]);
          let f = t(u),
            d = t(c),
            h = null == e ? 10 : +e,
            p = [];
          if (!(a % 1) && d - f < h) {
            if (((f = Math.floor(f)), (d = Math.ceil(d)), u > 0)) {
              for (; f <= d; ++f)
                for (n = 1; n < a; ++n)
                  if (!((o = f < 0 ? n / r(-f) : n * r(f)) < u)) {
                    if (o > c) break;
                    p.push(o);
                  }
            } else
              for (; f <= d; ++f)
                for (n = a - 1; n >= 1; --n)
                  if (!((o = f > 0 ? n / r(-f) : n * r(f)) < u)) {
                    if (o > c) break;
                    p.push(o);
                  }
            2 * p.length < h && (p = lN(u, c, h));
          } else p = lN(f, d, Math.min(d - f, h)).map(r);
          return s ? p.reverse() : p;
        }),
        (n.tickFormat = (e, i) => {
          if (
            (null == e && (e = 10),
            null == i && (i = 10 === a ? "s" : ","),
            "function" != typeof i &&
              (a % 1 || null != (i = uN(i)).precision || (i.trim = !0),
              (i = g(i))),
            e === 1 / 0)
          )
            return i;
          let o = Math.max(1, (a * e) / n.ticks().length);
          return (e) => {
            let n = e / r(Math.round(t(e)));
            return n * a < a - 0.5 && (n *= a), n <= o ? i(e) : "";
          };
        }),
        (n.nice = () =>
          i(
            uq(i(), {
              floor: (e) => r(Math.floor(t(e))),
              ceil: (e) => r(Math.ceil(t(e))),
            })
          )),
        n
      );
    }
    function u0() {
      let e = uJ(uI()).domain([1, 10]);
      return (
        (e.copy = () => uM(e, u0()).base(e.base())), lO.apply(e, arguments), e
      );
    }
    function u1(e) {
      return function (t) {
        return Math.sign(t) * Math.log1p(Math.abs(t / e));
      };
    }
    function u2(e) {
      return function (t) {
        return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
      };
    }
    function u3(e) {
      var t = 1,
        r = e(u1(1), u2(t));
      return (
        (r.constant = function (r) {
          return arguments.length ? e(u1((t = +r)), u2(t)) : t;
        }),
        uK(r)
      );
    }
    function u5() {
      var e = u3(uI());
      return (
        (e.copy = function () {
          return uM(e, u5()).constant(e.constant());
        }),
        lO.apply(e, arguments)
      );
    }
    function u6(e) {
      return function (t) {
        return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
      };
    }
    function u4(e) {
      return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
    }
    function u8(e) {
      return e < 0 ? -e * e : e * e;
    }
    function u7(e) {
      var t = e(uE, uE),
        r = 1;
      return (
        (t.exponent = function (t) {
          return arguments.length
            ? 1 == (r = +t)
              ? e(uE, uE)
              : 0.5 === r
              ? e(u4, u8)
              : e(u6(r), u6(1 / r))
            : r;
        }),
        uK(t)
      );
    }
    function u9() {
      var e = u7(uI());
      return (
        (e.copy = function () {
          return uM(e, u9()).exponent(e.exponent());
        }),
        lO.apply(e, arguments),
        e
      );
    }
    function ce() {
      return u9.apply(null, arguments).exponent(0.5);
    }
    function ct(e) {
      return Math.sign(e) * e * e;
    }
    function cr() {
      var e,
        t = u_(),
        r = [0, 1],
        n = !1;
      function i(r) {
        var i,
          a = Math.sign((i = t(r))) * Math.sqrt(Math.abs(i));
        return isNaN(a) ? e : n ? Math.round(a) : a;
      }
      return (
        (i.invert = function (e) {
          return t.invert(ct(e));
        }),
        (i.domain = function (e) {
          return arguments.length ? (t.domain(e), i) : t.domain();
        }),
        (i.range = function (e) {
          return arguments.length
            ? (t.range((r = Array.from(e, uj)).map(ct)), i)
            : r.slice();
        }),
        (i.rangeRound = function (e) {
          return i.range(e).round(!0);
        }),
        (i.round = function (e) {
          return arguments.length ? ((n = !!e), i) : n;
        }),
        (i.clamp = function (e) {
          return arguments.length ? (t.clamp(e), i) : t.clamp();
        }),
        (i.unknown = function (t) {
          return arguments.length ? ((e = t), i) : e;
        }),
        (i.copy = function () {
          return cr(t.domain(), r).round(n).clamp(t.clamp()).unknown(e);
        }),
        lO.apply(i, arguments),
        uK(i)
      );
    }
    function cn(e, t) {
      let r;
      if (void 0 === t)
        for (let t of e)
          null != t && (r < t || (void 0 === r && t >= t)) && (r = t);
      else {
        let n = -1;
        for (let i of e)
          null != (i = t(i, ++n, e)) &&
            (r < i || (void 0 === r && i >= i)) &&
            (r = i);
      }
      return r;
    }
    function ci(e, t) {
      let r;
      if (void 0 === t)
        for (let t of e)
          null != t && (r > t || (void 0 === r && t >= t)) && (r = t);
      else {
        let n = -1;
        for (let i of e)
          null != (i = t(i, ++n, e)) &&
            (r > i || (void 0 === r && i >= i)) &&
            (r = i);
      }
      return r;
    }
    function ca(e, t) {
      return (
        (null == e || !(e >= e)) - (null == t || !(t >= t)) ||
        (e < t ? -1 : +(e > t))
      );
    }
    function co(e, t, r) {
      let n = e[t];
      (e[t] = e[r]), (e[r] = n);
    }
    function cl() {
      var e,
        t = [],
        r = [],
        n = [];
      function i() {
        var e = 0,
          i = Math.max(1, r.length);
        for (n = Array(i - 1); ++e < i; )
          n[e - 1] = (function (e, t, r = lU) {
            if (!(!(n = e.length) || isNaN((t *= 1)))) {
              if (t <= 0 || n < 2) return +r(e[0], 0, e);
              if (t >= 1) return +r(e[n - 1], n - 1, e);
              var n,
                i = (n - 1) * t,
                a = Math.floor(i),
                o = +r(e[a], a, e);
              return o + (r(e[a + 1], a + 1, e) - o) * (i - a);
            }
          })(t, e / i);
        return a;
      }
      function a(t) {
        return null == t || isNaN((t *= 1)) ? e : r[lH(n, t)];
      }
      return (
        (a.invertExtent = function (e) {
          var i = r.indexOf(e);
          return i < 0
            ? [NaN, NaN]
            : [i > 0 ? n[i - 1] : t[0], i < n.length ? n[i] : t[t.length - 1]];
        }),
        (a.domain = function (e) {
          if (!arguments.length) return t.slice();
          for (let r of ((t = []), e))
            null == r || isNaN((r *= 1)) || t.push(r);
          return t.sort(lR), i();
        }),
        (a.range = function (e) {
          return arguments.length ? ((r = Array.from(e)), i()) : r.slice();
        }),
        (a.unknown = function (t) {
          return arguments.length ? ((e = t), a) : e;
        }),
        (a.quantiles = function () {
          return n.slice();
        }),
        (a.copy = function () {
          return cl().domain(t).range(r).unknown(e);
        }),
        lO.apply(a, arguments)
      );
    }
    function cu() {
      var e,
        t = 0,
        r = 1,
        n = 1,
        i = [0.5],
        a = [0, 1];
      function o(t) {
        return null != t && t <= t ? a[lH(i, t, 0, n)] : e;
      }
      function l() {
        var e = -1;
        for (i = Array(n); ++e < n; )
          i[e] = ((e + 1) * r - (e - n) * t) / (n + 1);
        return o;
      }
      return (
        (o.domain = function (e) {
          return arguments.length
            ? (([t, r] = e), (t *= 1), (r *= 1), l())
            : [t, r];
        }),
        (o.range = function (e) {
          return arguments.length
            ? ((n = (a = Array.from(e)).length - 1), l())
            : a.slice();
        }),
        (o.invertExtent = function (e) {
          var o = a.indexOf(e);
          return o < 0
            ? [NaN, NaN]
            : o < 1
            ? [t, i[0]]
            : o >= n
            ? [i[n - 1], r]
            : [i[o - 1], i[o]];
        }),
        (o.unknown = function (t) {
          return arguments.length && (e = t), o;
        }),
        (o.thresholds = function () {
          return i.slice();
        }),
        (o.copy = function () {
          return cu().domain([t, r]).range(a).unknown(e);
        }),
        lO.apply(uK(o), arguments)
      );
    }
    function cc() {
      var e,
        t = [0.5],
        r = [0, 1],
        n = 1;
      function i(i) {
        return null != i && i <= i ? r[lH(t, i, 0, n)] : e;
      }
      return (
        (i.domain = function (e) {
          return arguments.length
            ? ((n = Math.min((t = Array.from(e)).length, r.length - 1)), i)
            : t.slice();
        }),
        (i.range = function (e) {
          return arguments.length
            ? ((r = Array.from(e)), (n = Math.min(t.length, r.length - 1)), i)
            : r.slice();
        }),
        (i.invertExtent = function (e) {
          var n = r.indexOf(e);
          return [t[n - 1], t[n]];
        }),
        (i.unknown = function (t) {
          return arguments.length ? ((e = t), i) : e;
        }),
        (i.copy = function () {
          return cc().domain(t).range(r).unknown(e);
        }),
        lO.apply(i, arguments)
      );
    }
    (g = (m = (function (e) {
      var t,
        r,
        n,
        i =
          void 0 === e.grouping || void 0 === e.thousands
            ? uB
            : ((t = u$.call(e.grouping, Number)),
              (r = e.thousands + ""),
              function (e, n) {
                for (
                  var i = e.length, a = [], o = 0, l = t[0], u = 0;
                  i > 0 &&
                  l > 0 &&
                  (u + l + 1 > n && (l = Math.max(1, n - u)),
                  a.push(e.substring((i -= l), i + l)),
                  !((u += l + 1) > n));

                )
                  l = t[(o = (o + 1) % t.length)];
                return a.reverse().join(r);
              }),
        a = void 0 === e.currency ? "" : e.currency[0] + "",
        o = void 0 === e.currency ? "" : e.currency[1] + "",
        l = void 0 === e.decimal ? "." : e.decimal + "",
        u =
          void 0 === e.numerals
            ? uB
            : ((n = u$.call(e.numerals, String)),
              function (e) {
                return e.replace(/[0-9]/g, function (e) {
                  return n[+e];
                });
              }),
        c = void 0 === e.percent ? "%" : e.percent + "",
        s = void 0 === e.minus ? "−" : e.minus + "",
        f = void 0 === e.nan ? "NaN" : e.nan + "";
      function d(e, t) {
        var r = (e = uN(e)).fill,
          n = e.align,
          d = e.sign,
          h = e.symbol,
          p = e.zero,
          y = e.width,
          m = e.comma,
          g = e.precision,
          b = e.trim,
          x = e.type;
        "n" === x
          ? ((m = !0), (x = "g"))
          : uR[x] || (void 0 === g && (g = 12), (b = !0), (x = "g")),
          (p || ("0" === r && "=" === n)) && ((p = !0), (r = "0"), (n = "="));
        var w =
            (t && void 0 !== t.prefix ? t.prefix : "") +
            ("$" === h
              ? a
              : "#" === h && /[boxX]/.test(x)
              ? "0" + x.toLowerCase()
              : ""),
          O =
            ("$" === h ? o : /[%p]/.test(x) ? c : "") +
            (t && void 0 !== t.suffix ? t.suffix : ""),
          j = uR[x],
          A = /[defgprs%]/.test(x);
        function E(e) {
          var t,
            a,
            o,
            c = w,
            h = O;
          if ("c" === x) (h = j(e) + h), (e = "");
          else {
            var E = (e *= 1) < 0 || 1 / e < 0;
            if (
              ((e = isNaN(e) ? f : j(Math.abs(e), g)),
              b &&
                (e = (function (e) {
                  e: for (var t, r = e.length, n = 1, i = -1; n < r; ++n)
                    switch (e[n]) {
                      case ".":
                        i = t = n;
                        break;
                      case "0":
                        0 === i && (i = n), (t = n);
                        break;
                      default:
                        if (!+e[n]) break e;
                        i > 0 && (i = 0);
                    }
                  return i > 0 ? e.slice(0, i) + e.slice(t + 1) : e;
                })(e)),
              E && 0 == +e && "+" !== d && (E = !1),
              (c =
                (E ? ("(" === d ? d : s) : "-" === d || "(" === d ? "" : d) +
                c),
              (h =
                ("s" !== x || isNaN(e) || void 0 === v ? "" : uF[8 + v / 3]) +
                h +
                (E && "(" === d ? ")" : "")),
              A)
            ) {
              for (t = -1, a = e.length; ++t < a; )
                if (48 > (o = e.charCodeAt(t)) || o > 57) {
                  (h = (46 === o ? l + e.slice(t + 1) : e.slice(t)) + h),
                    (e = e.slice(0, t));
                  break;
                }
            }
          }
          m && !p && (e = i(e, 1 / 0));
          var S = c.length + e.length + h.length,
            P = S < y ? Array(y - S + 1).join(r) : "";
          switch (
            (m &&
              p &&
              ((e = i(P + e, P.length ? y - h.length : 1 / 0)), (P = "")),
            n)
          ) {
            case "<":
              e = c + e + h + P;
              break;
            case "=":
              e = c + P + e + h;
              break;
            case "^":
              e = P.slice(0, (S = P.length >> 1)) + c + e + h + P.slice(S);
              break;
            default:
              e = P + c + e + h;
          }
          return u(e);
        }
        return (
          (g =
            void 0 === g
              ? 6
              : /[gprs]/.test(x)
              ? Math.max(1, Math.min(21, g))
              : Math.max(0, Math.min(20, g))),
          (E.toString = function () {
            return e + "";
          }),
          E
        );
      }
      return {
        format: d,
        formatPrefix: function (e, t) {
          var r = 3 * Math.max(-8, Math.min(8, Math.floor(uT(t) / 3))),
            n = Math.pow(10, -r),
            i = d((((e = uN(e)).type = "f"), e), { suffix: uF[8 + r / 3] });
          return function (e) {
            return i(n * e);
          };
        },
      };
    })({ thousands: ",", grouping: [3], currency: ["$", ""] })).format),
      (b = m.formatPrefix);
    let cs = new Date(),
      cf = new Date();
    function cd(e, t, r, n) {
      function i(t) {
        return e((t = 0 == arguments.length ? new Date() : new Date(+t))), t;
      }
      return (
        (i.floor = (t) => (e((t = new Date(+t))), t)),
        (i.ceil = (r) => (e((r = new Date(r - 1))), t(r, 1), e(r), r)),
        (i.round = (e) => {
          let t = i(e),
            r = i.ceil(e);
          return e - t < r - e ? t : r;
        }),
        (i.offset = (e, r) => (
          t((e = new Date(+e)), null == r ? 1 : Math.floor(r)), e
        )),
        (i.range = (r, n, a) => {
          let o,
            l = [];
          if (
            ((r = i.ceil(r)),
            (a = null == a ? 1 : Math.floor(a)),
            !(r < n) || !(a > 0))
          )
            return l;
          do l.push((o = new Date(+r))), t(r, a), e(r);
          while (o < r && r < n);
          return l;
        }),
        (i.filter = (r) =>
          cd(
            (t) => {
              if (t >= t) for (; e(t), !r(t); ) t.setTime(t - 1);
            },
            (e, n) => {
              if (e >= e)
                if (n < 0) for (; ++n <= 0; ) for (; t(e, -1), !r(e); );
                else for (; --n >= 0; ) for (; t(e, 1), !r(e); );
            }
          )),
        r &&
          ((i.count = (t, n) => (
            cs.setTime(+t), cf.setTime(+n), e(cs), e(cf), Math.floor(r(cs, cf))
          )),
          (i.every = (e) =>
            isFinite((e = Math.floor(e))) && e > 0
              ? e > 1
                ? i.filter(
                    n ? (t) => n(t) % e == 0 : (t) => i.count(0, t) % e == 0
                  )
                : i
              : null)),
        i
      );
    }
    let ch = cd(
      (e) => {
        e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
      },
      (e, t) => {
        e.setFullYear(e.getFullYear() + t);
      },
      (e, t) => t.getFullYear() - e.getFullYear(),
      (e) => e.getFullYear()
    );
    (ch.every = (e) =>
      isFinite((e = Math.floor(e))) && e > 0
        ? cd(
            (t) => {
              t.setFullYear(Math.floor(t.getFullYear() / e) * e),
                t.setMonth(0, 1),
                t.setHours(0, 0, 0, 0);
            },
            (t, r) => {
              t.setFullYear(t.getFullYear() + r * e);
            }
          )
        : null),
      ch.range;
    let cp = cd(
      (e) => {
        e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
      },
      (e, t) => {
        e.setUTCFullYear(e.getUTCFullYear() + t);
      },
      (e, t) => t.getUTCFullYear() - e.getUTCFullYear(),
      (e) => e.getUTCFullYear()
    );
    (cp.every = (e) =>
      isFinite((e = Math.floor(e))) && e > 0
        ? cd(
            (t) => {
              t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e),
                t.setUTCMonth(0, 1),
                t.setUTCHours(0, 0, 0, 0);
            },
            (t, r) => {
              t.setUTCFullYear(t.getUTCFullYear() + r * e);
            }
          )
        : null),
      cp.range;
    let cy = cd(
      (e) => {
        e.setDate(1), e.setHours(0, 0, 0, 0);
      },
      (e, t) => {
        e.setMonth(e.getMonth() + t);
      },
      (e, t) =>
        t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12,
      (e) => e.getMonth()
    );
    cy.range;
    let cv = cd(
      (e) => {
        e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
      },
      (e, t) => {
        e.setUTCMonth(e.getUTCMonth() + t);
      },
      (e, t) =>
        t.getUTCMonth() -
        e.getUTCMonth() +
        (t.getUTCFullYear() - e.getUTCFullYear()) * 12,
      (e) => e.getUTCMonth()
    );
    cv.range;
    function cm(e) {
      return cd(
        (t) => {
          t.setDate(t.getDate() - ((t.getDay() + 7 - e) % 7)),
            t.setHours(0, 0, 0, 0);
        },
        (e, t) => {
          e.setDate(e.getDate() + 7 * t);
        },
        (e, t) =>
          (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * 6e4) /
          6048e5
      );
    }
    let cg = cm(0),
      cb = cm(1),
      cx = cm(2),
      cw = cm(3),
      cO = cm(4),
      cj = cm(5),
      cA = cm(6);
    function cE(e) {
      return cd(
        (t) => {
          t.setUTCDate(t.getUTCDate() - ((t.getUTCDay() + 7 - e) % 7)),
            t.setUTCHours(0, 0, 0, 0);
        },
        (e, t) => {
          e.setUTCDate(e.getUTCDate() + 7 * t);
        },
        (e, t) => (t - e) / 6048e5
      );
    }
    cg.range, cb.range, cx.range, cw.range, cO.range, cj.range, cA.range;
    let cS = cE(0),
      cP = cE(1),
      ck = cE(2),
      cM = cE(3),
      cI = cE(4),
      c_ = cE(5),
      cC = cE(6);
    cS.range, cP.range, ck.range, cM.range, cI.range, c_.range, cC.range;
    let cT = cd(
      (e) => e.setHours(0, 0, 0, 0),
      (e, t) => e.setDate(e.getDate() + t),
      (e, t) =>
        (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * 6e4) / 864e5,
      (e) => e.getDate() - 1
    );
    cT.range;
    let cD = cd(
      (e) => {
        e.setUTCHours(0, 0, 0, 0);
      },
      (e, t) => {
        e.setUTCDate(e.getUTCDate() + t);
      },
      (e, t) => (t - e) / 864e5,
      (e) => e.getUTCDate() - 1
    );
    cD.range;
    let cN = cd(
      (e) => {
        e.setUTCHours(0, 0, 0, 0);
      },
      (e, t) => {
        e.setUTCDate(e.getUTCDate() + t);
      },
      (e, t) => (t - e) / 864e5,
      (e) => Math.floor(e / 864e5)
    );
    cN.range;
    let cz = cd(
      (e) => {
        e.setTime(
          e - e.getMilliseconds() - 1e3 * e.getSeconds() - 6e4 * e.getMinutes()
        );
      },
      (e, t) => {
        e.setTime(+e + 36e5 * t);
      },
      (e, t) => (t - e) / 36e5,
      (e) => e.getHours()
    );
    cz.range;
    let cL = cd(
      (e) => {
        e.setUTCMinutes(0, 0, 0);
      },
      (e, t) => {
        e.setTime(+e + 36e5 * t);
      },
      (e, t) => (t - e) / 36e5,
      (e) => e.getUTCHours()
    );
    cL.range;
    let cR = cd(
      (e) => {
        e.setTime(e - e.getMilliseconds() - 1e3 * e.getSeconds());
      },
      (e, t) => {
        e.setTime(+e + 6e4 * t);
      },
      (e, t) => (t - e) / 6e4,
      (e) => e.getMinutes()
    );
    cR.range;
    let cB = cd(
      (e) => {
        e.setUTCSeconds(0, 0);
      },
      (e, t) => {
        e.setTime(+e + 6e4 * t);
      },
      (e, t) => (t - e) / 6e4,
      (e) => e.getUTCMinutes()
    );
    cB.range;
    let c$ = cd(
      (e) => {
        e.setTime(e - e.getMilliseconds());
      },
      (e, t) => {
        e.setTime(+e + 1e3 * t);
      },
      (e, t) => (t - e) / 1e3,
      (e) => e.getUTCSeconds()
    );
    c$.range;
    let cF = cd(
      () => {},
      (e, t) => {
        e.setTime(+e + t);
      },
      (e, t) => t - e
    );
    function cU(e, t, r, n, i, a) {
      let o = [
        [c$, 1, 1e3],
        [c$, 5, 5e3],
        [c$, 15, 15e3],
        [c$, 30, 3e4],
        [a, 1, 6e4],
        [a, 5, 3e5],
        [a, 15, 9e5],
        [a, 30, 18e5],
        [i, 1, 36e5],
        [i, 3, 108e5],
        [i, 6, 216e5],
        [i, 12, 432e5],
        [n, 1, 864e5],
        [n, 2, 1728e5],
        [r, 1, 6048e5],
        [t, 1, 2592e6],
        [t, 3, 7776e6],
        [e, 1, 31536e6],
      ];
      function l(t, r, n) {
        let i = Math.abs(r - t) / n,
          a = l$(([, , e]) => e).right(o, i);
        if (a === o.length) return e.every(lL(t / 31536e6, r / 31536e6, n));
        if (0 === a) return cF.every(Math.max(lL(t, r, n), 1));
        let [l, u] = o[i / o[a - 1][2] < o[a][2] / i ? a - 1 : a];
        return l.every(u);
      }
      return [
        function (e, t, r) {
          let n = t < e;
          n && ([e, t] = [t, e]);
          let i = r && "function" == typeof r.range ? r : l(e, t, r),
            a = i ? i.range(e, +t + 1) : [];
          return n ? a.reverse() : a;
        },
        l,
      ];
    }
    (cF.every = (e) =>
      isFinite((e = Math.floor(e))) && e > 0
        ? e > 1
          ? cd(
              (t) => {
                t.setTime(Math.floor(t / e) * e);
              },
              (t, r) => {
                t.setTime(+t + r * e);
              },
              (t, r) => (r - t) / e
            )
          : cF
        : null),
      cF.range;
    let [cK, cH] = cU(cp, cv, cS, cN, cL, cB),
      [cW, cq] = cU(ch, cy, cg, cT, cz, cR);
    function cV(e) {
      if (0 <= e.y && e.y < 100) {
        var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
        return t.setFullYear(e.y), t;
      }
      return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
    }
    function cY(e) {
      if (0 <= e.y && e.y < 100) {
        var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
        return t.setUTCFullYear(e.y), t;
      }
      return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
    }
    function cX(e, t, r) {
      return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
    }
    var cG = { "-": "", _: " ", 0: "0" },
      cZ = /^\s*\d+/,
      cQ = /^%/,
      cJ = /[\\^$*+?|[\]().{}]/g;
    function c0(e, t, r) {
      var n = e < 0 ? "-" : "",
        i = (n ? -e : e) + "",
        a = i.length;
      return n + (a < r ? Array(r - a + 1).join(t) + i : i);
    }
    function c1(e) {
      return e.replace(cJ, "\\$&");
    }
    function c2(e) {
      return RegExp("^(?:" + e.map(c1).join("|") + ")", "i");
    }
    function c3(e) {
      return new Map(e.map((e, t) => [e.toLowerCase(), t]));
    }
    function c5(e, t, r) {
      var n = cZ.exec(t.slice(r, r + 1));
      return n ? ((e.w = +n[0]), r + n[0].length) : -1;
    }
    function c6(e, t, r) {
      var n = cZ.exec(t.slice(r, r + 1));
      return n ? ((e.u = +n[0]), r + n[0].length) : -1;
    }
    function c4(e, t, r) {
      var n = cZ.exec(t.slice(r, r + 2));
      return n ? ((e.U = +n[0]), r + n[0].length) : -1;
    }
    function c8(e, t, r) {
      var n = cZ.exec(t.slice(r, r + 2));
      return n ? ((e.V = +n[0]), r + n[0].length) : -1;
    }
    function c7(e, t, r) {
      var n = cZ.exec(t.slice(r, r + 2));
      return n ? ((e.W = +n[0]), r + n[0].length) : -1;
    }
    function c9(e, t, r) {
      var n = cZ.exec(t.slice(r, r + 4));
      return n ? ((e.y = +n[0]), r + n[0].length) : -1;
    }
    function se(e, t, r) {
      var n = cZ.exec(t.slice(r, r + 2));
      return n
        ? ((e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3)), r + n[0].length)
        : -1;
    }
    function st(e, t, r) {
      var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
      return n
        ? ((e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00"))), r + n[0].length)
        : -1;
    }
    function sr(e, t, r) {
      var n = cZ.exec(t.slice(r, r + 1));
      return n ? ((e.q = 3 * n[0] - 3), r + n[0].length) : -1;
    }
    function sn(e, t, r) {
      var n = cZ.exec(t.slice(r, r + 2));
      return n ? ((e.m = n[0] - 1), r + n[0].length) : -1;
    }
    function si(e, t, r) {
      var n = cZ.exec(t.slice(r, r + 2));
      return n ? ((e.d = +n[0]), r + n[0].length) : -1;
    }
    function sa(e, t, r) {
      var n = cZ.exec(t.slice(r, r + 3));
      return n ? ((e.m = 0), (e.d = +n[0]), r + n[0].length) : -1;
    }
    function so(e, t, r) {
      var n = cZ.exec(t.slice(r, r + 2));
      return n ? ((e.H = +n[0]), r + n[0].length) : -1;
    }
    function sl(e, t, r) {
      var n = cZ.exec(t.slice(r, r + 2));
      return n ? ((e.M = +n[0]), r + n[0].length) : -1;
    }
    function su(e, t, r) {
      var n = cZ.exec(t.slice(r, r + 2));
      return n ? ((e.S = +n[0]), r + n[0].length) : -1;
    }
    function sc(e, t, r) {
      var n = cZ.exec(t.slice(r, r + 3));
      return n ? ((e.L = +n[0]), r + n[0].length) : -1;
    }
    function ss(e, t, r) {
      var n = cZ.exec(t.slice(r, r + 6));
      return n ? ((e.L = Math.floor(n[0] / 1e3)), r + n[0].length) : -1;
    }
    function sf(e, t, r) {
      var n = cQ.exec(t.slice(r, r + 1));
      return n ? r + n[0].length : -1;
    }
    function sd(e, t, r) {
      var n = cZ.exec(t.slice(r));
      return n ? ((e.Q = +n[0]), r + n[0].length) : -1;
    }
    function sh(e, t, r) {
      var n = cZ.exec(t.slice(r));
      return n ? ((e.s = +n[0]), r + n[0].length) : -1;
    }
    function sp(e, t) {
      return c0(e.getDate(), t, 2);
    }
    function sy(e, t) {
      return c0(e.getHours(), t, 2);
    }
    function sv(e, t) {
      return c0(e.getHours() % 12 || 12, t, 2);
    }
    function sm(e, t) {
      return c0(1 + cT.count(ch(e), e), t, 3);
    }
    function sg(e, t) {
      return c0(e.getMilliseconds(), t, 3);
    }
    function sb(e, t) {
      return sg(e, t) + "000";
    }
    function sx(e, t) {
      return c0(e.getMonth() + 1, t, 2);
    }
    function sw(e, t) {
      return c0(e.getMinutes(), t, 2);
    }
    function sO(e, t) {
      return c0(e.getSeconds(), t, 2);
    }
    function sj(e) {
      var t = e.getDay();
      return 0 === t ? 7 : t;
    }
    function sA(e, t) {
      return c0(cg.count(ch(e) - 1, e), t, 2);
    }
    function sE(e) {
      var t = e.getDay();
      return t >= 4 || 0 === t ? cO(e) : cO.ceil(e);
    }
    function sS(e, t) {
      return (e = sE(e)), c0(cO.count(ch(e), e) + (4 === ch(e).getDay()), t, 2);
    }
    function sP(e) {
      return e.getDay();
    }
    function sk(e, t) {
      return c0(cb.count(ch(e) - 1, e), t, 2);
    }
    function sM(e, t) {
      return c0(e.getFullYear() % 100, t, 2);
    }
    function sI(e, t) {
      return c0((e = sE(e)).getFullYear() % 100, t, 2);
    }
    function s_(e, t) {
      return c0(e.getFullYear() % 1e4, t, 4);
    }
    function sC(e, t) {
      var r = e.getDay();
      return c0(
        (e = r >= 4 || 0 === r ? cO(e) : cO.ceil(e)).getFullYear() % 1e4,
        t,
        4
      );
    }
    function sT(e) {
      var t = e.getTimezoneOffset();
      return (
        (t > 0 ? "-" : ((t *= -1), "+")) +
        c0((t / 60) | 0, "0", 2) +
        c0(t % 60, "0", 2)
      );
    }
    function sD(e, t) {
      return c0(e.getUTCDate(), t, 2);
    }
    function sN(e, t) {
      return c0(e.getUTCHours(), t, 2);
    }
    function sz(e, t) {
      return c0(e.getUTCHours() % 12 || 12, t, 2);
    }
    function sL(e, t) {
      return c0(1 + cD.count(cp(e), e), t, 3);
    }
    function sR(e, t) {
      return c0(e.getUTCMilliseconds(), t, 3);
    }
    function sB(e, t) {
      return sR(e, t) + "000";
    }
    function s$(e, t) {
      return c0(e.getUTCMonth() + 1, t, 2);
    }
    function sF(e, t) {
      return c0(e.getUTCMinutes(), t, 2);
    }
    function sU(e, t) {
      return c0(e.getUTCSeconds(), t, 2);
    }
    function sK(e) {
      var t = e.getUTCDay();
      return 0 === t ? 7 : t;
    }
    function sH(e, t) {
      return c0(cS.count(cp(e) - 1, e), t, 2);
    }
    function sW(e) {
      var t = e.getUTCDay();
      return t >= 4 || 0 === t ? cI(e) : cI.ceil(e);
    }
    function sq(e, t) {
      return (
        (e = sW(e)), c0(cI.count(cp(e), e) + (4 === cp(e).getUTCDay()), t, 2)
      );
    }
    function sV(e) {
      return e.getUTCDay();
    }
    function sY(e, t) {
      return c0(cP.count(cp(e) - 1, e), t, 2);
    }
    function sX(e, t) {
      return c0(e.getUTCFullYear() % 100, t, 2);
    }
    function sG(e, t) {
      return c0((e = sW(e)).getUTCFullYear() % 100, t, 2);
    }
    function sZ(e, t) {
      return c0(e.getUTCFullYear() % 1e4, t, 4);
    }
    function sQ(e, t) {
      var r = e.getUTCDay();
      return c0(
        (e = r >= 4 || 0 === r ? cI(e) : cI.ceil(e)).getUTCFullYear() % 1e4,
        t,
        4
      );
    }
    function sJ() {
      return "+0000";
    }
    function s0() {
      return "%";
    }
    function s1(e) {
      return +e;
    }
    function s2(e) {
      return Math.floor(e / 1e3);
    }
    function s3(e) {
      return new Date(e);
    }
    function s5(e) {
      return e instanceof Date ? +e : +new Date(+e);
    }
    function s6(e, t, r, n, i, a, o, l, u, c) {
      var s = u_(),
        f = s.invert,
        d = s.domain,
        h = c(".%L"),
        p = c(":%S"),
        y = c("%I:%M"),
        v = c("%I %p"),
        m = c("%a %d"),
        g = c("%b %d"),
        b = c("%B"),
        x = c("%Y");
      function w(e) {
        return (
          u(e) < e
            ? h
            : l(e) < e
            ? p
            : o(e) < e
            ? y
            : a(e) < e
            ? v
            : n(e) < e
            ? i(e) < e
              ? m
              : g
            : r(e) < e
            ? b
            : x
        )(e);
      }
      return (
        (s.invert = function (e) {
          return new Date(f(e));
        }),
        (s.domain = function (e) {
          return arguments.length ? d(Array.from(e, s5)) : d().map(s3);
        }),
        (s.ticks = function (t) {
          var r = d();
          return e(r[0], r[r.length - 1], null == t ? 10 : t);
        }),
        (s.tickFormat = function (e, t) {
          return null == t ? w : c(t);
        }),
        (s.nice = function (e) {
          var r = d();
          return (
            (e && "function" == typeof e.range) ||
              (e = t(r[0], r[r.length - 1], null == e ? 10 : e)),
            e ? d(uq(r, e)) : s
          );
        }),
        (s.copy = function () {
          return uM(s, s6(e, t, r, n, i, a, o, l, u, c));
        }),
        s
      );
    }
    function s4() {
      return lO.apply(
        s6(cW, cq, ch, cy, cg, cT, cz, cR, c$, w).domain([
          new Date(2e3, 0, 1),
          new Date(2e3, 0, 2),
        ]),
        arguments
      );
    }
    function s8() {
      return lO.apply(
        s6(cK, cH, cp, cv, cS, cD, cL, cB, c$, O).domain([
          Date.UTC(2e3, 0, 1),
          Date.UTC(2e3, 0, 2),
        ]),
        arguments
      );
    }
    function s7() {
      var e,
        t,
        r,
        n,
        i,
        a = 0,
        o = 1,
        l = uE,
        u = !1;
      function c(t) {
        return null == t || isNaN((t *= 1))
          ? i
          : l(
              0 === r
                ? 0.5
                : ((t = (n(t) - e) * r), u ? Math.max(0, Math.min(1, t)) : t)
            );
      }
      function s(e) {
        return function (t) {
          var r, n;
          return arguments.length
            ? (([r, n] = t), (l = e(r, n)), c)
            : [l(0), l(1)];
        };
      }
      return (
        (c.domain = function (i) {
          return arguments.length
            ? (([a, o] = i),
              (e = n((a *= 1))),
              (t = n((o *= 1))),
              (r = e === t ? 0 : 1 / (t - e)),
              c)
            : [a, o];
        }),
        (c.clamp = function (e) {
          return arguments.length ? ((u = !!e), c) : u;
        }),
        (c.interpolator = function (e) {
          return arguments.length ? ((l = e), c) : l;
        }),
        (c.range = s(uw)),
        (c.rangeRound = s(uO)),
        (c.unknown = function (e) {
          return arguments.length ? ((i = e), c) : i;
        }),
        function (i) {
          return (
            (n = i), (e = i(a)), (t = i(o)), (r = e === t ? 0 : 1 / (t - e)), c
          );
        }
      );
    }
    function s9(e, t) {
      return t
        .domain(e.domain())
        .interpolator(e.interpolator())
        .clamp(e.clamp())
        .unknown(e.unknown());
    }
    function fe() {
      var e = uK(s7()(uE));
      return (
        (e.copy = function () {
          return s9(e, fe());
        }),
        lj.apply(e, arguments)
      );
    }
    function ft() {
      var e = uJ(s7()).domain([1, 10]);
      return (
        (e.copy = function () {
          return s9(e, ft()).base(e.base());
        }),
        lj.apply(e, arguments)
      );
    }
    function fr() {
      var e = u3(s7());
      return (
        (e.copy = function () {
          return s9(e, fr()).constant(e.constant());
        }),
        lj.apply(e, arguments)
      );
    }
    function fn() {
      var e = u7(s7());
      return (
        (e.copy = function () {
          return s9(e, fn()).exponent(e.exponent());
        }),
        lj.apply(e, arguments)
      );
    }
    function fi() {
      return fn.apply(null, arguments).exponent(0.5);
    }
    function fa() {
      var e = [],
        t = uE;
      function r(r) {
        if (null != r && !isNaN((r *= 1)))
          return t((lH(e, r, 1) - 1) / (e.length - 1));
      }
      return (
        (r.domain = function (t) {
          if (!arguments.length) return e.slice();
          for (let r of ((e = []), t))
            null == r || isNaN((r *= 1)) || e.push(r);
          return e.sort(lR), r;
        }),
        (r.interpolator = function (e) {
          return arguments.length ? ((t = e), r) : t;
        }),
        (r.range = function () {
          return e.map((r, n) => t(n / (e.length - 1)));
        }),
        (r.quantiles = function (t) {
          return Array.from({ length: t + 1 }, (r, n) =>
            (function (e, t, r) {
              if (
                !(
                  !(n = (e = Float64Array.from(
                    (function* (e, t) {
                      if (void 0 === t)
                        for (let t of e)
                          null != t && (t *= 1) >= t && (yield t);
                      else {
                        let r = -1;
                        for (let n of e)
                          null != (n = t(n, ++r, e)) &&
                            (n *= 1) >= n &&
                            (yield n);
                      }
                    })(e, void 0)
                  )).length) || isNaN((t *= 1))
                )
              ) {
                if (t <= 0 || n < 2) return ci(e);
                if (t >= 1) return cn(e);
                var n,
                  i = (n - 1) * t,
                  a = Math.floor(i),
                  o = cn(
                    (function e(t, r, n = 0, i = 1 / 0, a) {
                      if (
                        ((r = Math.floor(r)),
                        (n = Math.floor(Math.max(0, n))),
                        (i = Math.floor(Math.min(t.length - 1, i))),
                        !(n <= r && r <= i))
                      )
                        return t;
                      for (
                        a =
                          void 0 === a
                            ? ca
                            : (function (e = lR) {
                                if (e === lR) return ca;
                                if ("function" != typeof e)
                                  throw TypeError("compare is not a function");
                                return (t, r) => {
                                  let n = e(t, r);
                                  return n || 0 === n
                                    ? n
                                    : (0 === e(r, r)) - (0 === e(t, t));
                                };
                              })(a);
                        i > n;

                      ) {
                        if (i - n > 600) {
                          let o = i - n + 1,
                            l = r - n + 1,
                            u = Math.log(o),
                            c = 0.5 * Math.exp((2 * u) / 3),
                            s =
                              0.5 *
                              Math.sqrt((u * c * (o - c)) / o) *
                              (l - o / 2 < 0 ? -1 : 1),
                            f = Math.max(n, Math.floor(r - (l * c) / o + s)),
                            d = Math.min(
                              i,
                              Math.floor(r + ((o - l) * c) / o + s)
                            );
                          e(t, r, f, d, a);
                        }
                        let o = t[r],
                          l = n,
                          u = i;
                        for (
                          co(t, n, r), a(t[i], o) > 0 && co(t, n, i);
                          l < u;

                        ) {
                          for (co(t, l, u), ++l, --u; 0 > a(t[l], o); ) ++l;
                          for (; a(t[u], o) > 0; ) --u;
                        }
                        0 === a(t[n], o) ? co(t, n, u) : co(t, ++u, i),
                          u <= r && (n = u + 1),
                          r <= u && (i = u - 1);
                      }
                      return t;
                    })(e, a).subarray(0, a + 1)
                  );
                return o + (ci(e.subarray(a + 1)) - o) * (i - a);
              }
            })(e, n / t)
          );
        }),
        (r.copy = function () {
          return fa(t).domain(e);
        }),
        lj.apply(r, arguments)
      );
    }
    function fo() {
      var e,
        t,
        r,
        n,
        i,
        a,
        o,
        l = 0,
        u = 0.5,
        c = 1,
        s = 1,
        f = uE,
        d = !1;
      function h(e) {
        return isNaN((e *= 1))
          ? o
          : ((e = 0.5 + ((e = +a(e)) - t) * (s * e < s * t ? n : i)),
            f(d ? Math.max(0, Math.min(1, e)) : e));
      }
      function p(e) {
        return function (t) {
          var r, n, i;
          return arguments.length
            ? (([r, n, i] = t),
              (f = (function (e, t) {
                void 0 === t && ((t = e), (e = uw));
                for (
                  var r = 0,
                    n = t.length - 1,
                    i = t[0],
                    a = Array(n < 0 ? 0 : n);
                  r < n;

                )
                  a[r] = e(i, (i = t[++r]));
                return function (e) {
                  var t = Math.max(0, Math.min(n - 1, Math.floor((e *= n))));
                  return a[t](e - t);
                };
              })(e, [r, n, i])),
              h)
            : [f(0), f(0.5), f(1)];
        };
      }
      return (
        (h.domain = function (o) {
          return arguments.length
            ? (([l, u, c] = o),
              (e = a((l *= 1))),
              (t = a((u *= 1))),
              (r = a((c *= 1))),
              (n = e === t ? 0 : 0.5 / (t - e)),
              (i = t === r ? 0 : 0.5 / (r - t)),
              (s = t < e ? -1 : 1),
              h)
            : [l, u, c];
        }),
        (h.clamp = function (e) {
          return arguments.length ? ((d = !!e), h) : d;
        }),
        (h.interpolator = function (e) {
          return arguments.length ? ((f = e), h) : f;
        }),
        (h.range = p(uw)),
        (h.rangeRound = p(uO)),
        (h.unknown = function (e) {
          return arguments.length ? ((o = e), h) : o;
        }),
        function (o) {
          return (
            (a = o),
            (e = o(l)),
            (t = o(u)),
            (r = o(c)),
            (n = e === t ? 0 : 0.5 / (t - e)),
            (i = t === r ? 0 : 0.5 / (r - t)),
            (s = t < e ? -1 : 1),
            h
          );
        }
      );
    }
    function fl() {
      var e = uK(fo()(uE));
      return (
        (e.copy = function () {
          return s9(e, fl());
        }),
        lj.apply(e, arguments)
      );
    }
    function fu() {
      var e = uJ(fo()).domain([0.1, 1, 10]);
      return (
        (e.copy = function () {
          return s9(e, fu()).base(e.base());
        }),
        lj.apply(e, arguments)
      );
    }
    function fc() {
      var e = u3(fo());
      return (
        (e.copy = function () {
          return s9(e, fc()).constant(e.constant());
        }),
        lj.apply(e, arguments)
      );
    }
    function fs() {
      var e = u7(fo());
      return (
        (e.copy = function () {
          return s9(e, fs()).exponent(e.exponent());
        }),
        lj.apply(e, arguments)
      );
    }
    function ff() {
      return fs.apply(null, arguments).exponent(0.5);
    }
    (w = (x = (function (e) {
      var t = e.dateTime,
        r = e.date,
        n = e.time,
        i = e.periods,
        a = e.days,
        o = e.shortDays,
        l = e.months,
        u = e.shortMonths,
        c = c2(i),
        s = c3(i),
        f = c2(a),
        d = c3(a),
        h = c2(o),
        p = c3(o),
        y = c2(l),
        v = c3(l),
        m = c2(u),
        g = c3(u),
        b = {
          a: function (e) {
            return o[e.getDay()];
          },
          A: function (e) {
            return a[e.getDay()];
          },
          b: function (e) {
            return u[e.getMonth()];
          },
          B: function (e) {
            return l[e.getMonth()];
          },
          c: null,
          d: sp,
          e: sp,
          f: sb,
          g: sI,
          G: sC,
          H: sy,
          I: sv,
          j: sm,
          L: sg,
          m: sx,
          M: sw,
          p: function (e) {
            return i[+(e.getHours() >= 12)];
          },
          q: function (e) {
            return 1 + ~~(e.getMonth() / 3);
          },
          Q: s1,
          s: s2,
          S: sO,
          u: sj,
          U: sA,
          V: sS,
          w: sP,
          W: sk,
          x: null,
          X: null,
          y: sM,
          Y: s_,
          Z: sT,
          "%": s0,
        },
        x = {
          a: function (e) {
            return o[e.getUTCDay()];
          },
          A: function (e) {
            return a[e.getUTCDay()];
          },
          b: function (e) {
            return u[e.getUTCMonth()];
          },
          B: function (e) {
            return l[e.getUTCMonth()];
          },
          c: null,
          d: sD,
          e: sD,
          f: sB,
          g: sG,
          G: sQ,
          H: sN,
          I: sz,
          j: sL,
          L: sR,
          m: s$,
          M: sF,
          p: function (e) {
            return i[+(e.getUTCHours() >= 12)];
          },
          q: function (e) {
            return 1 + ~~(e.getUTCMonth() / 3);
          },
          Q: s1,
          s: s2,
          S: sU,
          u: sK,
          U: sH,
          V: sq,
          w: sV,
          W: sY,
          x: null,
          X: null,
          y: sX,
          Y: sZ,
          Z: sJ,
          "%": s0,
        },
        w = {
          a: function (e, t, r) {
            var n = h.exec(t.slice(r));
            return n
              ? ((e.w = p.get(n[0].toLowerCase())), r + n[0].length)
              : -1;
          },
          A: function (e, t, r) {
            var n = f.exec(t.slice(r));
            return n
              ? ((e.w = d.get(n[0].toLowerCase())), r + n[0].length)
              : -1;
          },
          b: function (e, t, r) {
            var n = m.exec(t.slice(r));
            return n
              ? ((e.m = g.get(n[0].toLowerCase())), r + n[0].length)
              : -1;
          },
          B: function (e, t, r) {
            var n = y.exec(t.slice(r));
            return n
              ? ((e.m = v.get(n[0].toLowerCase())), r + n[0].length)
              : -1;
          },
          c: function (e, r, n) {
            return A(e, t, r, n);
          },
          d: si,
          e: si,
          f: ss,
          g: se,
          G: c9,
          H: so,
          I: so,
          j: sa,
          L: sc,
          m: sn,
          M: sl,
          p: function (e, t, r) {
            var n = c.exec(t.slice(r));
            return n
              ? ((e.p = s.get(n[0].toLowerCase())), r + n[0].length)
              : -1;
          },
          q: sr,
          Q: sd,
          s: sh,
          S: su,
          u: c6,
          U: c4,
          V: c8,
          w: c5,
          W: c7,
          x: function (e, t, n) {
            return A(e, r, t, n);
          },
          X: function (e, t, r) {
            return A(e, n, t, r);
          },
          y: se,
          Y: c9,
          Z: st,
          "%": sf,
        };
      function O(e, t) {
        return function (r) {
          var n,
            i,
            a,
            o = [],
            l = -1,
            u = 0,
            c = e.length;
          for (r instanceof Date || (r = new Date(+r)); ++l < c; )
            37 === e.charCodeAt(l) &&
              (o.push(e.slice(u, l)),
              null != (i = cG[(n = e.charAt(++l))])
                ? (n = e.charAt(++l))
                : (i = "e" === n ? " " : "0"),
              (a = t[n]) && (n = a(r, i)),
              o.push(n),
              (u = l + 1));
          return o.push(e.slice(u, l)), o.join("");
        };
      }
      function j(e, t) {
        return function (r) {
          var n,
            i,
            a = cX(1900, void 0, 1);
          if (A(a, e, (r += ""), 0) != r.length) return null;
          if ("Q" in a) return new Date(a.Q);
          if ("s" in a) return new Date(1e3 * a.s + ("L" in a ? a.L : 0));
          if (
            (!t || "Z" in a || (a.Z = 0),
            "p" in a && (a.H = (a.H % 12) + 12 * a.p),
            void 0 === a.m && (a.m = "q" in a ? a.q : 0),
            "V" in a)
          ) {
            if (a.V < 1 || a.V > 53) return null;
            "w" in a || (a.w = 1),
              "Z" in a
                ? ((n =
                    (i = (n = cY(cX(a.y, 0, 1))).getUTCDay()) > 4 || 0 === i
                      ? cP.ceil(n)
                      : cP(n)),
                  (n = cD.offset(n, (a.V - 1) * 7)),
                  (a.y = n.getUTCFullYear()),
                  (a.m = n.getUTCMonth()),
                  (a.d = n.getUTCDate() + ((a.w + 6) % 7)))
                : ((n =
                    (i = (n = cV(cX(a.y, 0, 1))).getDay()) > 4 || 0 === i
                      ? cb.ceil(n)
                      : cb(n)),
                  (n = cT.offset(n, (a.V - 1) * 7)),
                  (a.y = n.getFullYear()),
                  (a.m = n.getMonth()),
                  (a.d = n.getDate() + ((a.w + 6) % 7)));
          } else
            ("W" in a || "U" in a) &&
              ("w" in a || (a.w = "u" in a ? a.u % 7 : +("W" in a)),
              (i =
                "Z" in a
                  ? cY(cX(a.y, 0, 1)).getUTCDay()
                  : cV(cX(a.y, 0, 1)).getDay()),
              (a.m = 0),
              (a.d =
                "W" in a
                  ? ((a.w + 6) % 7) + 7 * a.W - ((i + 5) % 7)
                  : a.w + 7 * a.U - ((i + 6) % 7)));
          return "Z" in a
            ? ((a.H += (a.Z / 100) | 0), (a.M += a.Z % 100), cY(a))
            : cV(a);
        };
      }
      function A(e, t, r, n) {
        for (var i, a, o = 0, l = t.length, u = r.length; o < l; ) {
          if (n >= u) return -1;
          if (37 === (i = t.charCodeAt(o++))) {
            if (
              !(a = w[(i = t.charAt(o++)) in cG ? t.charAt(o++) : i]) ||
              (n = a(e, r, n)) < 0
            )
              return -1;
          } else if (i != r.charCodeAt(n++)) return -1;
        }
        return n;
      }
      return (
        (b.x = O(r, b)),
        (b.X = O(n, b)),
        (b.c = O(t, b)),
        (x.x = O(r, x)),
        (x.X = O(n, x)),
        (x.c = O(t, x)),
        {
          format: function (e) {
            var t = O((e += ""), b);
            return (
              (t.toString = function () {
                return e;
              }),
              t
            );
          },
          parse: function (e) {
            var t = j((e += ""), !1);
            return (
              (t.toString = function () {
                return e;
              }),
              t
            );
          },
          utcFormat: function (e) {
            var t = O((e += ""), x);
            return (
              (t.toString = function () {
                return e;
              }),
              t
            );
          },
          utcParse: function (e) {
            var t = j((e += ""), !0);
            return (
              (t.toString = function () {
                return e;
              }),
              t
            );
          },
        }
      );
    })({
      dateTime: "%x, %X",
      date: "%-m/%-d/%Y",
      time: "%-I:%M:%S %p",
      periods: ["AM", "PM"],
      days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      shortMonths: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    })).format),
      x.parse,
      (O = x.utcFormat),
      x.utcParse,
      e.s(
        [
          "scaleBand",
          () => lM,
          "scaleDiverging",
          () => fl,
          "scaleDivergingLog",
          () => fu,
          "scaleDivergingPow",
          () => fs,
          "scaleDivergingSqrt",
          () => ff,
          "scaleDivergingSymlog",
          () => fc,
          "scaleIdentity",
          () => uW,
          "scaleImplicit",
          0,
          lP,
          "scaleLinear",
          () => uH,
          "scaleLog",
          () => u0,
          "scaleOrdinal",
          () => lk,
          "scalePoint",
          () => lI,
          "scalePow",
          () => u9,
          "scaleQuantile",
          () => cl,
          "scaleQuantize",
          () => cu,
          "scaleRadial",
          () => cr,
          "scaleSequential",
          () => fe,
          "scaleSequentialLog",
          () => ft,
          "scaleSequentialPow",
          () => fn,
          "scaleSequentialQuantile",
          () => fa,
          "scaleSequentialSqrt",
          () => fi,
          "scaleSequentialSymlog",
          () => fr,
          "scaleSqrt",
          () => ce,
          "scaleSymlog",
          () => u5,
          "scaleThreshold",
          () => cc,
          "scaleTime",
          () => s4,
          "scaleUtc",
          () => s8,
          "tickFormat",
          () => uU,
        ],
        335885
      ),
      e.i(335885),
      e.s(
        [
          "scaleBand",
          () => lM,
          "scaleDiverging",
          () => fl,
          "scaleDivergingLog",
          () => fu,
          "scaleDivergingPow",
          () => fs,
          "scaleDivergingSqrt",
          () => ff,
          "scaleDivergingSymlog",
          () => fc,
          "scaleIdentity",
          () => uW,
          "scaleImplicit",
          0,
          lP,
          "scaleLinear",
          () => uH,
          "scaleLog",
          () => u0,
          "scaleOrdinal",
          () => lk,
          "scalePoint",
          () => lI,
          "scalePow",
          () => u9,
          "scaleQuantile",
          () => cl,
          "scaleQuantize",
          () => cu,
          "scaleRadial",
          () => cr,
          "scaleSequential",
          () => fe,
          "scaleSequentialLog",
          () => ft,
          "scaleSequentialPow",
          () => fn,
          "scaleSequentialQuantile",
          () => fa,
          "scaleSequentialSqrt",
          () => fi,
          "scaleSequentialSymlog",
          () => fr,
          "scaleSqrt",
          () => ce,
          "scaleSymlog",
          () => u5,
          "scaleThreshold",
          () => cc,
          "scaleTime",
          () => s4,
          "scaleUtc",
          () => s8,
          "tickFormat",
          () => uU,
        ],
        921060
      );
    var fd = e.i(921060);
    function fh(e, t, r) {
      if ("function" == typeof e) return e.copy().domain(t).range(r);
      if (null != e) {
        var n = (function (e) {
          if (e in fd && "function" == typeof fd[e]) return fd[e]();
          var t = "scale".concat(eS(e));
          if (t in fd && "function" == typeof fd[t]) return fd[t]();
        })(e);
        if (null != n) return n.domain(t).range(r), n;
      }
    }
    function fp(e, t, r, n) {
      if (null != r && null != n)
        return "function" == typeof e.scale ? fh(e.scale, r, n) : fh(t, r, n);
    }
    var fy = (e, t, r) => {
      if (null != e) {
        var n = e.scale,
          i = e.type;
        if ("auto" === n)
          return "category" === i &&
            r &&
            (r.indexOf("LineChart") >= 0 ||
              r.indexOf("AreaChart") >= 0 ||
              (r.indexOf("ComposedChart") >= 0 && !t))
            ? "point"
            : "category" === i
            ? "band"
            : "linear";
        if ("string" == typeof n)
          return "scale".concat(eS(n)) in fd ? n : "point";
      }
    };
    function fv(e, t) {
      if (e) {
        var r = null != t ? t : e.domain(),
          n = r.map((t) => {
            var r;
            return null != (r = e(t)) ? r : 0;
          }),
          i = e.range();
        if (0 !== r.length && !(i.length < 2))
          return (e) => {
            var t,
              i,
              a = (function (e, t) {
                for (
                  var r = 0, n = e.length, i = e[0] < e[e.length - 1];
                  r < n;

                ) {
                  var a = Math.floor((r + n) / 2);
                  (i ? e[a] < t : e[a] > t) ? (r = a + 1) : (n = a);
                }
                return r;
              })(n, e);
            return a <= 0
              ? r[0]
              : a >= r.length
              ? r[r.length - 1]
              : Math.abs(e - (null != (t = n[a - 1]) ? t : 0)) <=
                Math.abs(e - (null != (i = n[a]) ? i : 0))
              ? r[a - 1]
              : r[a];
          };
      }
    }
    function fm(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function fg(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? fm(Object(r), !0).forEach(function (t) {
              var n, i, a;
              (n = e),
                (i = t),
                (a = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value."
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = a);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : fm(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    function fb(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          var r =
            null == e
              ? null
              : ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
          if (null != r) {
            var n,
              i,
              a,
              o,
              l = [],
              u = !0,
              c = !1;
            try {
              if (((a = (r = r.call(e)).next), 0 === t)) {
                if (Object(r) !== r) return;
                u = !1;
              } else
                for (
                  ;
                  !(u = (n = a.call(r)).done) &&
                  (l.push(n.value), l.length !== t);
                  u = !0
                );
            } catch (e) {
              (c = !0), (i = e);
            } finally {
              try {
                if (
                  !u &&
                  null != r.return &&
                  ((o = r.return()), Object(o) !== o)
                )
                  return;
              } finally {
                if (c) throw i;
              }
            }
            return l;
          }
        })(e, t) ||
        (function (e, t) {
          if (e) {
            if ("string" == typeof e) return fx(e, t);
            var r = {}.toString.call(e).slice(8, -1);
            return (
              "Object" === r && e.constructor && (r = e.constructor.name),
              "Map" === r || "Set" === r
                ? Array.from(e)
                : "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                ? fx(e, t)
                : void 0
            );
          }
        })(e, t) ||
        (function () {
          throw TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function fx(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
      return n;
    }
    var fw = [0, "auto"],
      fO = {
        allowDataOverflow: !1,
        allowDecimals: !0,
        allowDuplicatedCategory: !0,
        angle: 0,
        dataKey: void 0,
        domain: void 0,
        height: 30,
        hide: !0,
        id: 0,
        includeHidden: !1,
        interval: "preserveEnd",
        minTickGap: 5,
        mirror: !1,
        name: void 0,
        orientation: "bottom",
        padding: { left: 0, right: 0 },
        reversed: !1,
        scale: "auto",
        tick: !0,
        tickCount: 5,
        tickFormatter: void 0,
        ticks: void 0,
        type: "category",
        unit: void 0,
        niceTicks: "auto",
      },
      fj = (e, t) => e.cartesianAxis.xAxis[t],
      fA = (e, t) => {
        var r = fj(e, t);
        return null == r ? fO : r;
      },
      fE = {
        allowDataOverflow: !1,
        allowDecimals: !0,
        allowDuplicatedCategory: !0,
        angle: 0,
        dataKey: void 0,
        domain: fw,
        hide: !0,
        id: 0,
        includeHidden: !1,
        interval: "preserveEnd",
        minTickGap: 5,
        mirror: !1,
        name: void 0,
        orientation: "left",
        padding: { top: 0, bottom: 0 },
        reversed: !1,
        scale: "auto",
        tick: !0,
        tickCount: 5,
        tickFormatter: void 0,
        ticks: void 0,
        type: "number",
        unit: void 0,
        niceTicks: "auto",
        width: 60,
      },
      fS = (e, t) => {
        var r = e.cartesianAxis.yAxis[t];
        return null == r ? fE : r;
      },
      fP = {
        domain: [0, "auto"],
        includeHidden: !1,
        reversed: !1,
        allowDataOverflow: !1,
        allowDuplicatedCategory: !1,
        dataKey: void 0,
        id: 0,
        name: "",
        range: [64, 64],
        scale: "auto",
        type: "number",
        unit: "",
      },
      fk = (e, t) => {
        var r = e.cartesianAxis.zAxis[t];
        return null == r ? fP : r;
      },
      fM = (e, t, r) => {
        switch (t) {
          case "xAxis":
            return fA(e, r);
          case "yAxis":
            return fS(e, r);
          case "zAxis":
            return fk(e, r);
          case "angleAxis":
            return iQ(e, r);
          case "radiusAxis":
            return iJ(e, r);
          default:
            throw Error("Unexpected axis type: ".concat(t));
        }
      },
      fI = (e, t, r) => {
        switch (t) {
          case "xAxis":
            return fA(e, r);
          case "yAxis":
            return fS(e, r);
          case "angleAxis":
            return iQ(e, r);
          case "radiusAxis":
            return iJ(e, r);
          default:
            throw Error("Unexpected axis type: ".concat(t));
        }
      },
      f_ = (e) =>
        e.graphicalItems.cartesianItems.some((e) => "bar" === e.type) ||
        e.graphicalItems.polarItems.some((e) => "radialBar" === e.type);
    function fC(e, t) {
      return (r) => {
        switch (e) {
          case "xAxis":
            return "xAxisId" in r && r.xAxisId === t;
          case "yAxis":
            return "yAxisId" in r && r.yAxisId === t;
          case "zAxis":
            return "zAxisId" in r && r.zAxisId === t;
          case "angleAxis":
            return "angleAxisId" in r && r.angleAxisId === t;
          case "radiusAxis":
            return "radiusAxisId" in r && r.radiusAxisId === t;
          default:
            return !1;
        }
      };
    }
    var fT = (e) => e.graphicalItems.cartesianItems,
      fD = rI([lh, lp], fC),
      fN = (e, t, r) =>
        e
          .filter(r)
          .filter(
            (e) => (null == t ? void 0 : t.includeHidden) === !0 || !e.hide
          ),
      fz = rI([fT, fM, fD], fN, {
        memoizeOptions: { resultEqualityCheck: i7 },
      }),
      fL = rI([fz], (e) =>
        e.filter((e) => "area" === e.type || "bar" === e.type).filter(lm)
      ),
      fR = (e) => e.filter((e) => !("stackId" in e) || void 0 === e.stackId),
      fB = rI([fz], fR),
      f$ = (e) =>
        e
          .map((e) => e.data)
          .filter(Boolean)
          .flat(1),
      fF = rI([fz], (e) => e.some((e) => !e.data)),
      fU = rI([fz], f$, { memoizeOptions: { resultEqualityCheck: i7 } }),
      fK = (e, t) => {
        var r = t.chartData,
          n = t.dataStartIndex,
          i = t.dataEndIndex;
        return e.length > 0 ? e : (void 0 === r ? [] : r).slice(n, i + 1);
      },
      fH = rI([fU, oX], fK),
      fW = (e, t, r, n, i, a) => {
        var o = n.chartData,
          l = n.dataStartIndex,
          u = n.dataEndIndex,
          c =
            (null == t ? void 0 : t.dataKey) != null
              ? e.map((e) => ({ value: nJ(e, t.dataKey) }))
              : r.length > 0
              ? r
                  .map((e) => e.dataKey)
                  .flatMap((t) => e.map((e) => ({ value: nJ(e, t) })))
              : e.map((e) => ({ value: e }));
        return i && (null == t ? void 0 : t.dataKey) != null && a.length > 0
          ? [
              ...(void 0 === o ? [] : o)
                .slice(l, u + 1)
                .map((e) => ({ value: nJ(e, t.dataKey) }))
                .filter((e) => null != e.value),
              ...c,
            ]
          : c;
      },
      fq = rI([fH, fM, fz, oX, fF, fU], fW);
    function fV(e) {
      if (eb(e) || e instanceof Date) {
        var t = Number(e);
        if (eZ(t)) return t;
      }
    }
    function fY(e) {
      if (Array.isArray(e)) {
        var t = [fV(e[0]), fV(e[1])];
        return o1(t) ? t : void 0;
      }
      var r = fV(e);
      if (null != r) return [r, r];
    }
    function fX(e) {
      return e.map(fV).filter(eP);
    }
    function fG(e, t) {
      var r = fV(e),
        n = fV(t);
      return null == r && null == n
        ? 0
        : null == r
        ? -1
        : null == n
        ? 1
        : r - n;
    }
    var fZ = rI([fq], (e) =>
      null == e ? void 0 : e.map((e) => e.value).sort(fG)
    );
    function fQ(e, t) {
      switch (e) {
        case "xAxis":
          return "x" === t.direction;
        case "yAxis":
          return "y" === t.direction;
        default:
          return !1;
      }
    }
    var fJ = (e) => {
        var t = lb(e),
          r = lx(e);
        return fI(e, t, r);
      },
      f0 = rI([fJ], (e) => (null == e ? void 0 : e.dataKey)),
      f1 = rI([fL, oX, fJ], lv),
      f2 = (e, t, r, n) =>
        Object.fromEntries(
          Object.entries(
            t.reduce((e, t) => {
              if (null == t.stackId) return e;
              var r = e[t.stackId];
              return null == r && (r = []), r.push(t), (e[t.stackId] = r), e;
            }, {})
          ).map((t) => {
            var i,
              a,
              o,
              l = fb(t, 2),
              u = l[0],
              c = l[1],
              s = n ? [...c].reverse() : c,
              f = s.map(ly);
            return [
              u,
              {
                stackedData:
                  ((a = null != (i = n1[r]) ? i : nq),
                  (o = (function () {
                    var e = nW([]),
                      t = nV,
                      r = nq,
                      n = nY;
                    function i(i) {
                      var a,
                        o,
                        l = Array.from(e.apply(this, arguments), nX),
                        u = l.length,
                        c = -1;
                      for (let e of i)
                        for (a = 0, ++c; a < u; ++a)
                          (l[a][c] = [0, +n(e, l[a].key, c, i)]).data = e;
                      for (a = 0, o = nH(t(l)); a < u; ++a) l[o[a]].index = a;
                      return r(l, o), l;
                    }
                    return (
                      (i.keys = function (t) {
                        return arguments.length
                          ? ((e =
                              "function" == typeof t ? t : nW(Array.from(t))),
                            i)
                          : e;
                      }),
                      (i.value = function (e) {
                        return arguments.length
                          ? ((n = "function" == typeof e ? e : nW(+e)), i)
                          : n;
                      }),
                      (i.order = function (e) {
                        return arguments.length
                          ? ((t =
                              null == e
                                ? nV
                                : "function" == typeof e
                                ? e
                                : nW(Array.from(e))),
                            i)
                          : t;
                      }),
                      (i.offset = function (e) {
                        return arguments.length
                          ? ((r = null == e ? nq : e), i)
                          : r;
                      }),
                      i
                    );
                  })()
                    .keys(f)
                    .value((e, t) => Number(nJ(e, t, 0)))
                    .order(nV)
                    .offset(a)(e)).forEach((t, r) => {
                    t.forEach((t, n) => {
                      var i = nJ(e[n], f[r], 0);
                      Array.isArray(i) &&
                        2 === i.length &&
                        eg(i[0]) &&
                        eg(i[1]) &&
                        ((t[0] = i[0]), (t[1] = i[1]));
                    });
                  }),
                  o),
                graphicalItems: s,
              },
            ];
          })
        ),
      f3 = rI([f1, fL, ll, lu], f2),
      f5 = (e, t, r, n) => {
        var i = t.dataStartIndex,
          a = t.dataEndIndex;
        if (null == n && "zAxis" !== r) {
          if (null != e && 0 !== Object.keys(e).length) {
            let t;
            return [
              (t = Object.keys(e).reduce(
                (t, r) => {
                  var n = e[r];
                  if (!n) return t;
                  var o = n.stackedData.reduce(
                    (e, t) => {
                      var r,
                        n = [
                          Math.min(...(r = nG(t, i, a).flat(2).filter(eg))),
                          Math.max(...r),
                        ];
                      return eZ(n[0]) && eZ(n[1])
                        ? [Math.min(e[0], n[0]), Math.max(e[1], n[1])]
                        : e;
                    },
                    [1 / 0, -1 / 0]
                  );
                  return [Math.min(o[0], t[0]), Math.max(o[1], t[1])];
                },
                [1 / 0, -1 / 0]
              ))[0] ===
              1 / 0
                ? 0
                : t[0],
              t[1] === -1 / 0 ? 0 : t[1],
            ];
          }
          return;
        }
      },
      f6 = rI([fM], (e) => e.allowDataOverflow),
      f4 = (e) => {
        var t;
        if (null == e || !("domain" in e)) return fw;
        if (null != e.domain) return e.domain;
        if ("ticks" in e && null != e.ticks) {
          if ("number" === e.type) {
            var r = fX(e.ticks);
            return [Math.min(...r), Math.max(...r)];
          }
          if ("category" === e.type) return e.ticks.map(String);
        }
        return null != (t = null == e ? void 0 : e.domain) ? t : fw;
      },
      f8 = rI([fM], f4),
      f7 = rI([f8, f6], o3),
      f9 = rI([f3, oV, lh, f7], f5, {
        memoizeOptions: { resultEqualityCheck: lg },
      }),
      de = (e) => e.errorBars,
      dt = function () {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        var n = t.filter(Boolean);
        if (0 !== n.length) {
          var i = n.flat();
          return [Math.min(...i), Math.max(...i)];
        }
      },
      dr = function (e, t, r, n, i) {
        var a,
          o,
          l =
            arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : [];
        if (
          (r.length > 0 &&
            r.forEach((e) => {
              var r,
                u = null != e.data ? [...e.data] : l,
                c = null == (r = n[e.id]) ? void 0 : r.filter((e) => fQ(i, e));
              u.forEach((r) => {
                var n,
                  i = nJ(r, null != (n = t.dataKey) ? n : e.dataKey),
                  l = (function (e, t, r) {
                    if (!r || !r.length) return [];
                    if ("number" != typeof t || ev(t)) {
                      if (Array.isArray(t)) {
                        var n,
                          i = fX(t);
                        i.length > 0 && (n = Math.max(...i));
                      }
                    } else n = t;
                    return null == n
                      ? []
                      : fX(
                          r.flatMap((t) => {
                            var r,
                              i,
                              a = nJ(e, t.dataKey);
                            if (Array.isArray(a)) {
                              var o = fb(a, 2);
                              (r = o[0]), (i = o[1]);
                            } else r = i = a;
                            if (eZ(r) && eZ(i)) return [n - r, n + i];
                          })
                        );
                  })(r, i, c);
                if (l.length >= 2) {
                  var u = Math.min(...l),
                    s = Math.max(...l);
                  (null == a || u < a) && (a = u),
                    (null == o || s > o) && (o = s);
                }
                var f = fY(i);
                null != f &&
                  ((a = null == a ? f[0] : Math.min(a, f[0])),
                  (o = null == o ? f[1] : Math.max(o, f[1])));
              });
            }),
          (null == t ? void 0 : t.dataKey) != null &&
            0 === r.length &&
            e.forEach((e) => {
              var r = fY(nJ(e, t.dataKey));
              null != r &&
                ((a = null == a ? r[0] : Math.min(a, r[0])),
                (o = null == o ? r[1] : Math.max(o, r[1])));
            }),
          eZ(a) && eZ(o))
        )
          return [a, o];
      },
      dn = rI([fH, fM, fB, de, lh, oZ], dr, {
        memoizeOptions: { resultEqualityCheck: lg },
      });
    function di(e) {
      var t = e.value;
      if (eb(t) || t instanceof Date) return t;
    }
    var da = (e) => e.referenceElements.dots,
      dl = (e, t, r) =>
        e
          .filter((e) => "extendDomain" === e.ifOverflow)
          .filter((e) => ("xAxis" === t ? e.xAxisId === r : e.yAxisId === r)),
      du = rI([da, lh, lp], dl),
      dc = (e) => e.referenceElements.areas,
      ds = rI([dc, lh, lp], dl),
      df = (e) => e.referenceElements.lines,
      dd = rI([df, lh, lp], dl),
      dh = (e, t) => {
        if (null != e) {
          var r = fX(e.map((e) => ("xAxis" === t ? e.x : e.y)));
          if (0 !== r.length) return [Math.min(...r), Math.max(...r)];
        }
      },
      dp = rI(du, lh, dh),
      dy = (e, t) => {
        if (null != e) {
          var r = fX(
            e.flatMap((e) => [
              "xAxis" === t ? e.x1 : e.y1,
              "xAxis" === t ? e.x2 : e.y2,
            ])
          );
          if (0 !== r.length) return [Math.min(...r), Math.max(...r)];
        }
      },
      dv = rI([ds, lh], dy),
      dm = (e, t) => {
        if (null != e) {
          var r = e.flatMap((e) =>
            "xAxis" === t
              ? (function (e) {
                  if (null != e.x) return fX([e.x]);
                  var t,
                    r = null == (t = e.segment) ? void 0 : t.map((e) => e.x);
                  return null == r || 0 === r.length ? [] : fX(r);
                })(e)
              : (function (e) {
                  if (null != e.y) return fX([e.y]);
                  var t,
                    r = null == (t = e.segment) ? void 0 : t.map((e) => e.y);
                  return null == r || 0 === r.length ? [] : fX(r);
                })(e)
          );
          if (0 !== r.length) return [Math.min(...r), Math.max(...r)];
        }
      },
      dg = rI([dd, lh], dm),
      db = rI(dp, dg, dv, (e, t, r) => dt(e, r, t)),
      dx = (e, t, r, n, i, a, o, l, u) => {
        if (null != r) return r;
        var c =
            ("vertical" === o && "xAxis" === l) ||
            ("horizontal" === o && "yAxis" === l)
              ? dt(n, a, i)
              : dt(a, i),
          s = (function (e, t, r) {
            if (r || null != t) {
              if ("function" == typeof e && null != t)
                try {
                  var n = e(t, r);
                  if (o1(n)) return o2(n, t, r);
                } catch (e) {}
              if (Array.isArray(e) && 2 === e.length) {
                var i,
                  a,
                  o = oJ(e, 2),
                  l = o[0],
                  u = o[1];
                if ("auto" === l) null != t && (i = Math.min(...t));
                else if (eg(l)) i = l;
                else if ("function" == typeof l)
                  try {
                    null != t && (i = l(null == t ? void 0 : t[0]));
                  } catch (e) {}
                else if ("string" == typeof l && n6.test(l)) {
                  var c = n6.exec(l);
                  if (null == c || null == c[1] || null == t) i = void 0;
                  else {
                    var s = +c[1];
                    i = t[0] - s;
                  }
                } else i = null == t ? void 0 : t[0];
                if ("auto" === u) null != t && (a = Math.max(...t));
                else if (eg(u)) a = u;
                else if ("function" == typeof u)
                  try {
                    null != t && (a = u(null == t ? void 0 : t[1]));
                  } catch (e) {}
                else if ("string" == typeof u && n4.test(u)) {
                  var f = n4.exec(u);
                  if (null == f || null == f[1] || null == t) a = void 0;
                  else {
                    var d = +f[1];
                    a = t[1] + d;
                  }
                } else a = null == t ? void 0 : t[1];
                var h = [i, a];
                if (o1(h)) return null == t ? h : o2(h, t, r);
              }
            }
          })(t, c, e.allowDataOverflow);
        return null != s
          ? s
          : e.allowDataOverflow && null == c && null != u
          ? u
          : s;
      },
      dw = rI(
        [fM],
        (e) => {
          if (
            null != e &&
            "number" === e.type &&
            "ticks" in e &&
            null != e.ticks
          ) {
            var t = fX(e.ticks);
            if (0 !== t.length) return [Math.min(...t), Math.max(...t)];
          }
        },
        { memoizeOptions: { resultEqualityCheck: lg } }
      ),
      dO = rI([fM, f8, f7, f9, dn, db, iB, lh, dw], dx, {
        memoizeOptions: { resultEqualityCheck: lg },
      }),
      dj = [0, 1],
      dA = (e, t, r, n, i, a, o) => {
        if ((null != e && null != r && 0 !== r.length) || void 0 !== o) {
          var l,
            u,
            c = e.dataKey,
            s = e.type,
            f = n0(t, a);
          return f && null == c
            ? oq(0, null != (u = null == r ? void 0 : r.length) ? u : 0)
            : "category" === s
            ? ((l = n.map(di).filter((e) => null != e)),
              f && (null == e.dataKey || (e.allowDuplicatedCategory && ej(l)))
                ? oq(0, n.length)
                : e.allowDuplicatedCategory
                ? l
                : Array.from(new Set(l)))
            : "expand" !== i || f
            ? o
            : dj;
        }
      },
      dE = rI([fM, iB, fH, fq, ll, lh, dO], dA),
      dS = rI([fM, f_, lc], fy),
      dP = (e, t, r) => {
        var n = t.niceTicks;
        if ("none" !== n) {
          var i = f4(t),
            a = Array.isArray(i) && ("auto" === i[0] || "auto" === i[1]);
          if (
            ("snap125" === n || "adaptive" === n) &&
            null != t &&
            t.tickCount &&
            o1(e)
          ) {
            if (a) return ln(e, t.tickCount, t.allowDecimals, n);
            if ("number" === t.type)
              return li(e, t.tickCount, t.allowDecimals, n);
          }
          if ("auto" === n && "linear" === r && null != t && t.tickCount) {
            if (a && o1(e))
              return ln(e, t.tickCount, t.allowDecimals, "adaptive");
            if ("number" === t.type && o1(e))
              return li(e, t.tickCount, t.allowDecimals, "adaptive");
          }
        }
      },
      dk = rI([dE, fI, dS], dP),
      dM = (e, t, r, n) => {
        if (
          "angleAxis" !== n &&
          (null == e ? void 0 : e.type) === "number" &&
          o1(t) &&
          Array.isArray(r) &&
          r.length > 0
        ) {
          var i, a;
          return [
            Math.min(t[0], null != (i = r[0]) ? i : 0),
            Math.max(t[1], null != (a = r[r.length - 1]) ? a : 0),
          ];
        }
        return t;
      },
      dI = rI([fM, dE, dk, lh], dM),
      d_ = rI(fq, fM, (e, t) => {
        if (t && "number" === t.type) {
          var r = 1 / 0,
            n = Array.from(fX(e.map((e) => e.value))).sort((e, t) => e - t),
            i = n[0],
            a = n[n.length - 1];
          if (null == i || null == a) return 1 / 0;
          var o = a - i;
          if (0 === o) return 1 / 0;
          for (var l = 0; l < n.length - 1; l++) {
            var u = n[l],
              c = n[l + 1];
            null != u && null != c && (r = Math.min(r, c - u));
          }
          return r / o;
        }
      }),
      dC = rI(
        d_,
        iB,
        lo,
        ic,
        (e, t, r, n, i) => i,
        (e, t, r, n, i) => {
          if (!eZ(e)) return 0;
          var a = "vertical" === t ? n.height : n.width;
          if ("gap" === i) return (e * a) / 2;
          if ("no-gap" === i) {
            var o = eO(r, e * a),
              l = (e * a) / 2;
            return l - o - ((l - o) / a) * o;
          }
          return 0;
        }
      ),
      dT = rI(
        fA,
        (e, t, r) => {
          var n = fA(e, t);
          return null == n || "string" != typeof n.padding
            ? 0
            : dC(e, "xAxis", t, r, n.padding);
        },
        (e, t) => {
          if (null == e) return { left: 0, right: 0 };
          var r,
            n,
            i = e.padding;
          return "string" == typeof i
            ? { left: t, right: t }
            : {
                left: (null != (r = i.left) ? r : 0) + t,
                right: (null != (n = i.right) ? n : 0) + t,
              };
        }
      ),
      dD = rI(
        fS,
        (e, t, r) => {
          var n = fS(e, t);
          return null == n || "string" != typeof n.padding
            ? 0
            : dC(e, "yAxis", t, r, n.padding);
        },
        (e, t) => {
          if (null == e) return { top: 0, bottom: 0 };
          var r,
            n,
            i = e.padding;
          return "string" == typeof i
            ? { top: t, bottom: t }
            : {
                top: (null != (r = i.top) ? r : 0) + t,
                bottom: (null != (n = i.bottom) ? n : 0) + t,
              };
        }
      ),
      dN = rI([ic, dT, iv, iy, (e, t, r) => r], (e, t, r, n, i) => {
        var a = n.padding;
        return i
          ? [a.left, r.width - a.right]
          : [e.left + t.left, e.left + e.width - t.right];
      }),
      dz = rI([ic, iB, dD, iv, iy, (e, t, r) => r], (e, t, r, n, i, a) => {
        var o = i.padding;
        return a
          ? [n.height - o.bottom, o.top]
          : "horizontal" === t
          ? [e.top + e.height - r.bottom, e.top + r.top]
          : [e.top + r.top, e.top + e.height - r.bottom];
      }),
      dL = (e, t, r, n) => {
        var i;
        switch (t) {
          case "xAxis":
            return dN(e, r, n);
          case "yAxis":
            return dz(e, r, n);
          case "zAxis":
            return null == (i = fk(e, r)) ? void 0 : i.range;
          case "angleAxis":
            return i5(e);
          case "radiusAxis":
            return i6(e, r);
          default:
            return;
        }
      },
      dR = rI([fM, dL], iq),
      dB = rI([dS, dI], (e, t) => {
        if (null != t)
          if ("linear" !== e) return t;
          else {
            if (!o1(t)) {
              for (var r, n, i = 0; i < t.length; i++) {
                var a = t[i];
                eZ(a) &&
                  ((void 0 === r || a < r) && (r = a),
                  (void 0 === n || a > n) && (n = a));
              }
              return void 0 !== r && void 0 !== n ? [r, n] : void 0;
            }
            return t;
          }
      }),
      d$ = rI([fM, dS, dB, dR], fp),
      dF = (e, t, r, n) => {
        if (null != r && null != r.dataKey) {
          var i = r.type,
            a = r.scale;
          if (n0(e, n) && ("number" === i || "auto" !== a))
            return t.map((e) => e.value);
        }
      },
      dU = rI([iB, fq, fI, lh], dF),
      dK = rI([d$], lw);
    function dH(e, t) {
      return e.id < t.id ? -1 : +(e.id > t.id);
    }
    rI([d$], function (e) {
      if (null != e)
        return "invert" in e && "function" == typeof e.invert
          ? e.invert.bind(e)
          : fv(e, void 0);
    }),
      rI([d$, fZ], fv),
      rI([fz, de, lh], (e, t, r) =>
        e
          .flatMap((e) => t[e.id])
          .filter(Boolean)
          .filter((e) => fQ(r, e))
      );
    var dW = (e, t) => t,
      dq = (e, t, r) => r,
      dV = rI(ia, dW, dq, (e, t, r) =>
        e
          .filter((e) => e.orientation === t)
          .filter((e) => e.mirror === r)
          .sort(dH)
      ),
      dY = rI(io, dW, dq, (e, t, r) =>
        e
          .filter((e) => e.orientation === t)
          .filter((e) => e.mirror === r)
          .sort(dH)
      ),
      dX = (e, t) => ({ width: e.width, height: t.height }),
      dG = rI(ic, fA, dX),
      dZ = rI(it, ic, dV, dW, dq, (e, t, r, n, i) => {
        var a,
          o = {};
        return (
          r.forEach((r) => {
            var l = dX(t, r);
            null == a &&
              (a = ((e, t, r) => {
                switch (t) {
                  case "top":
                    return e.top;
                  case "bottom":
                    return r - e.bottom;
                  default:
                    return 0;
                }
              })(t, n, e));
            var u = ("top" === n && !i) || ("bottom" === n && i);
            (o[r.id] = a - Number(u) * l.height),
              (a += (u ? -1 : 1) * l.height);
          }),
          o
        );
      }),
      dQ = rI(ie, ic, dY, dW, dq, (e, t, r, n, i) => {
        var a,
          o = {};
        return (
          r.forEach((r) => {
            var l = {
              width: "number" == typeof r.width ? r.width : 60,
              height: t.height,
            };
            null == a &&
              (a = ((e, t, r) => {
                switch (t) {
                  case "left":
                    return e.left;
                  case "right":
                    return r - e.right;
                  default:
                    return 0;
                }
              })(t, n, e));
            var u = ("left" === n && !i) || ("right" === n && i);
            (o[r.id] = a - Number(u) * l.width), (a += (u ? -1 : 1) * l.width);
          }),
          o
        );
      }),
      dJ = rI(
        [
          ic,
          fA,
          (e, t) => {
            var r = fA(e, t);
            if (null != r) return dZ(e, r.orientation, r.mirror);
          },
          (e, t) => t,
        ],
        (e, t, r, n) => {
          if (null != t) {
            var i = null == r ? void 0 : r[n];
            return null == i ? { x: e.left, y: 0 } : { x: e.left, y: i };
          }
        }
      );
    rI(
      [
        ic,
        fS,
        (e, t) => {
          var r = fS(e, t);
          if (null != r) return dQ(e, r.orientation, r.mirror);
        },
        (e, t) => t,
      ],
      (e, t, r, n) => {
        if (null != t) {
          var i = null == r ? void 0 : r[n];
          return null == i ? { x: 0, y: e.top } : { x: i, y: e.top };
        }
      }
    );
    var d0 = rI(ic, fS, (e, t) => ({
        width: "number" == typeof t.width ? t.width : 60,
        height: e.height,
      })),
      d1 = (e, t, r) => {
        switch (t) {
          case "xAxis":
            return dG(e, r).width;
          case "yAxis":
            return d0(e, r).height;
          default:
            return;
        }
      },
      d2 = (e, t, r, n) => {
        if (null != r) {
          var i = r.allowDuplicatedCategory,
            a = r.type,
            o = r.dataKey,
            l = n0(e, n),
            u = t.map((e) => e.value),
            c = u.filter((e) => null != e);
          if (o && l && "category" === a && i && ej(c)) return u;
        }
      },
      d3 = rI([iB, fq, fM, lh], d2);
    rI(
      [
        iB,
        (e, t, r) => {
          switch (t) {
            case "xAxis":
              return fA(e, r);
            case "yAxis":
              return fS(e, r);
            default:
              throw Error("Unexpected axis type: ".concat(t));
          }
        },
        dS,
        dK,
        d3,
        dU,
        dL,
        dk,
        lh,
      ],
      (e, t, r, n, i, a, o, l, u) => {
        if (null != t) {
          var c = n0(e, u);
          return {
            angle: t.angle,
            interval: t.interval,
            minTickGap: t.minTickGap,
            orientation: t.orientation,
            tick: t.tick,
            tickCount: t.tickCount,
            tickFormatter: t.tickFormatter,
            ticks: t.ticks,
            type: t.type,
            unit: t.unit,
            axisType: u,
            categoricalDomain: a,
            duplicateDomain: i,
            isCategorical: c,
            niceTicks: l,
            range: o,
            realScaleType: r,
            scale: n,
          };
        }
      }
    );
    var d5 = rI(
        [iB, fI, dS, dK, dk, dL, d3, dU, lh],
        (e, t, r, n, i, a, o, l, u) => {
          if (null != t && null != n) {
            var c = n0(e, u),
              s = t.type,
              f = t.ticks,
              d = t.tickCount,
              h =
                "scaleBand" === r && "function" == typeof n.bandwidth
                  ? n.bandwidth() / 2
                  : 2,
              p = "category" === s && n.bandwidth ? n.bandwidth() / h : 0;
            p =
              "angleAxis" === u && null != a && a.length >= 2
                ? 2 * ey(a[0] - a[1]) * p
                : p;
            var y = f || i;
            return y
              ? y
                  .map((e, t) => {
                    var r = o ? o.indexOf(e) : e,
                      i = n.map(r);
                    return eZ(i)
                      ? { index: t, coordinate: i + p, value: e, offset: p }
                      : null;
                  })
                  .filter(eP)
              : c && l
              ? l
                  .map((e, t) => {
                    var r = n.map(e);
                    return eZ(r)
                      ? { coordinate: r + p, value: e, index: t, offset: p }
                      : null;
                  })
                  .filter(eP)
              : n.ticks
              ? n
                  .ticks(d)
                  .map((e, t) => {
                    var r = n.map(e);
                    return eZ(r)
                      ? { coordinate: r + p, value: e, index: t, offset: p }
                      : null;
                  })
                  .filter(eP)
              : n
                  .domain()
                  .map((e, t) => {
                    var r = n.map(e);
                    return eZ(r)
                      ? {
                          coordinate: r + p,
                          value: o ? o[e] : e,
                          index: t,
                          offset: p,
                        }
                      : null;
                  })
                  .filter(eP);
          }
        }
      ),
      d6 = rI([iB, fI, dK, dL, d3, dU, lh], (e, t, r, n, i, a, o) => {
        if (null != t && null != r && null != n && n[0] !== n[1]) {
          var l = n0(e, o),
            u = t.tickCount,
            c = 0;
          return ((c =
            "angleAxis" === o && (null == n ? void 0 : n.length) >= 2
              ? 2 * ey(n[0] - n[1]) * c
              : c),
          l && a)
            ? a
                .map((e, t) => {
                  var n = r.map(e);
                  return eZ(n)
                    ? { coordinate: n + c, value: e, index: t, offset: c }
                    : null;
                })
                .filter(eP)
            : r.ticks
            ? r
                .ticks(u)
                .map((e, t) => {
                  var n = r.map(e);
                  return eZ(n)
                    ? { coordinate: n + c, value: e, index: t, offset: c }
                    : null;
                })
                .filter(eP)
            : r
                .domain()
                .map((e, t) => {
                  var n = r.map(e);
                  return eZ(n)
                    ? {
                        coordinate: n + c,
                        value: i ? i[e] : e,
                        index: t,
                        offset: c,
                      }
                    : null;
                })
                .filter(eP);
        }
      }),
      d4 = rI(fM, dK, (e, t) => {
        if (null != e && null != t) return fg(fg({}, e), {}, { scale: t });
      }),
      d8 = rI([fM, dS, dE, dR], fp),
      d7 = rI([d8], lw);
    rI(
      (e, t, r) => fk(e, r),
      d7,
      (e, t) => {
        if (null != e && null != t) return fg(fg({}, e), {}, { scale: t });
      }
    );
    var d9 = rI([iB, ia, io], (e, t, r) => {
      switch (e) {
        case "horizontal":
          return t.some((e) => e.reversed) ? "right-to-left" : "left-to-right";
        case "vertical":
          return r.some((e) => e.reversed) ? "bottom-to-top" : "top-to-bottom";
        case "centric":
        case "radial":
          return "left-to-right";
        default:
          return;
      }
    });
    function he(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function ht(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? he(Object(r), !0).forEach(function (t) {
              var n, i, a;
              (n = e),
                (i = t),
                (a = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value."
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = a);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : he(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    rI(
      [
        (e, t, r) => {
          var n;
          return null == (n = e.renderedTicks[t]) ? void 0 : n[r];
        },
      ],
      (e) => {
        if (e && 0 !== e.length)
          return (t) => {
            var r,
              n = 1 / 0,
              i = e[0];
            for (var a of e) {
              var o = Math.abs(a.coordinate - t);
              o < n && ((n = o), (i = a));
            }
            return null == (r = i) ? void 0 : r.value;
          };
      }
    );
    var hr = r0({
        name: "cartesianAxis",
        initialState: { xAxis: {}, yAxis: {}, zAxis: {} },
        reducers: {
          addXAxis: {
            reducer(e, t) {
              e.xAxis[t.payload.id] = t.payload;
            },
            prepare: rY(),
          },
          replaceXAxis: {
            reducer(e, t) {
              var r = t.payload,
                n = r.prev,
                i = r.next;
              void 0 !== e.xAxis[n.id] &&
                (n.id !== i.id && delete e.xAxis[n.id], (e.xAxis[i.id] = i));
            },
            prepare: rY(),
          },
          removeXAxis: {
            reducer(e, t) {
              delete e.xAxis[t.payload.id];
            },
            prepare: rY(),
          },
          addYAxis: {
            reducer(e, t) {
              e.yAxis[t.payload.id] = t.payload;
            },
            prepare: rY(),
          },
          replaceYAxis: {
            reducer(e, t) {
              var r = t.payload,
                n = r.prev,
                i = r.next;
              void 0 !== e.yAxis[n.id] &&
                (n.id !== i.id && delete e.yAxis[n.id], (e.yAxis[i.id] = i));
            },
            prepare: rY(),
          },
          removeYAxis: {
            reducer(e, t) {
              delete e.yAxis[t.payload.id];
            },
            prepare: rY(),
          },
          addZAxis: {
            reducer(e, t) {
              e.zAxis[t.payload.id] = t.payload;
            },
            prepare: rY(),
          },
          replaceZAxis: {
            reducer(e, t) {
              var r = t.payload,
                n = r.prev,
                i = r.next;
              void 0 !== e.zAxis[n.id] &&
                (n.id !== i.id && delete e.zAxis[n.id], (e.zAxis[i.id] = i));
            },
            prepare: rY(),
          },
          removeZAxis: {
            reducer(e, t) {
              delete e.zAxis[t.payload.id];
            },
            prepare: rY(),
          },
          updateYAxisWidth(e, t) {
            var r = t.payload,
              n = r.id,
              i = r.width,
              a = e.yAxis[n];
            if (a) {
              var o,
                l = a.widthHistory || [];
              if (
                3 === l.length &&
                l[0] === l[2] &&
                i === l[1] &&
                i !== a.width &&
                1 >= Math.abs(i - (null != (o = l[0]) ? o : 0))
              )
                return;
              var u = [...l, i].slice(-3);
              e.yAxis[n] = ht(ht({}, a), {}, { width: i, widthHistory: u });
            }
          },
        },
      }),
      hn = hr.actions,
      hi = hn.addXAxis,
      ha = hn.replaceXAxis,
      ho = hn.removeXAxis;
    hn.addYAxis,
      hn.replaceYAxis,
      hn.removeYAxis,
      hn.addZAxis,
      hn.replaceZAxis,
      hn.removeZAxis,
      hn.updateYAxisWidth;
    var hl = hr.reducer,
      hu = (e) => e.options.defaultTooltipEventType,
      hc = (e) => e.options.validateTooltipEventTypes;
    function hs(e, t, r) {
      if (null == e) return t;
      var n = e ? "axis" : "item";
      return null == r ? t : r.includes(n) ? n : t;
    }
    function hf(e, t) {
      return hs(t, hu(e), hc(e));
    }
    var hd = (e, t) => {
      var r,
        n = Number(t);
      if (!ev(n) && null != t)
        return n >= 0
          ? null == e || null == (r = e[n])
            ? void 0
            : r.value
          : void 0;
    };
    function hh(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function hp(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? hh(Object(r), !0).forEach(function (t) {
              var n, i, a;
              (n = e),
                (i = t),
                (a = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value."
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = a);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : hh(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    var hy = (e, t, r, n) => {
        if (null == t) return oO;
        var i,
          a,
          o,
          l =
            ((i = e),
            (a = t),
            (o = r),
            "axis" === a
              ? "click" === o
                ? i.axisInteraction.click
                : i.axisInteraction.hover
              : "click" === o
              ? i.itemInteraction.click
              : i.itemInteraction.hover);
        if (null == l) return oO;
        if (l.active) return l;
        if (e.keyboardInteraction.active) return e.keyboardInteraction;
        if (e.syncInteraction.active && null != e.syncInteraction.index)
          return e.syncInteraction;
        var u = !0 === e.settings.active;
        if (null != l.index) {
          if (u) return hp(hp({}, l), {}, { active: !0 });
        } else if (null != n)
          return {
            active: !0,
            coordinate: void 0,
            dataKey: void 0,
            index: n,
            graphicalItemId: void 0,
          };
        return hp(hp({}, oO), {}, { coordinate: l.coordinate });
      },
      hv = (e, t, r, n) => {
        var i = null == e ? void 0 : e.index;
        if (null == i) return null;
        var a = Number(i);
        if (!eZ(a)) return i;
        var o = Infinity;
        t.length > 0 && (o = t.length - 1);
        var l = Math.max(0, Math.min(a, o)),
          u = t[l];
        return null == u
          ? String(l)
          : !(function (e, t, r) {
              if (null == r || null == t) return !0;
              var n = nJ(e, t);
              return (
                !(null != n && o1(r)) ||
                (function (e, t) {
                  var r = (function (e) {
                      if ("number" == typeof e)
                        return Number.isFinite(e) ? e : void 0;
                      if (e instanceof Date) {
                        var t = e.valueOf();
                        return Number.isFinite(t) ? t : void 0;
                      }
                      var r = Number(e);
                      return Number.isFinite(r) ? r : void 0;
                    })(e),
                    n = t[0],
                    i = t[1];
                  if (void 0 === r) return !1;
                  var a = Math.min(n, i),
                    o = Math.max(n, i);
                  return r >= a && r <= o;
                })(n, r)
              );
            })(u, r, n)
          ? null
          : String(l);
      },
      hm = (e, t, r, n, i, a, o) => {
        if (null != a) {
          var l = o[0],
            u = null == l ? void 0 : l.getPosition(a);
          if (null != u) return u;
          var c = null == i ? void 0 : i[Number(a)];
          if (c)
            if ("horizontal" === r)
              return { x: c.coordinate, y: (n.top + t) / 2 };
            else return { x: (n.left + e) / 2, y: c.coordinate };
        }
      },
      hg = (e, t, r, n) => {
        if ("axis" === t) return e.tooltipItemPayloads;
        if (0 === e.tooltipItemPayloads.length) return [];
        if (
          ((i =
            "hover" === r
              ? e.itemInteraction.hover.graphicalItemId
              : e.itemInteraction.click.graphicalItemId),
          e.syncInteraction.active && null == i)
        )
          return e.tooltipItemPayloads;
        if (null == i && (null != n || e.keyboardInteraction.active)) {
          var i,
            a = e.tooltipItemPayloads[0];
          return null != a ? [a] : [];
        }
        return e.tooltipItemPayloads.filter((e) => {
          var t;
          return (null == (t = e.settings) ? void 0 : t.graphicalItemId) === i;
        });
      },
      hb = (e) => e.options.tooltipPayloadSearcher,
      hx = (e) => e.tooltip;
    function hw(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function hO(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? hw(Object(r), !0).forEach(function (t) {
              var n, i, a;
              (n = e),
                (i = t),
                (a = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value."
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = a);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : hw(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    function hj(e) {
      if ("string" == typeof e) return e;
    }
    var hA = (e, t, r, n, i, a, o) => {
        if (null != t && null != a) {
          var l = r.chartData,
            u = r.computedData,
            c = r.dataStartIndex,
            s = r.dataEndIndex;
          return e.reduce((e, r) => {
            var f,
              d,
              h,
              p = r.dataDefinedOnItem,
              y = r.settings,
              v = null != p ? p : l,
              m = Array.isArray(v) ? nG(v, c, s) : v,
              g = null != (f = null == y ? void 0 : y.dataKey) ? f : n,
              b = null == y ? void 0 : y.nameKey;
            return (
              Array.isArray(
                (d =
                  n && Array.isArray(m) && !Array.isArray(m[0]) && "axis" === o
                    ? eE(m, n, i)
                    : a(m, t, u, b))
              )
                ? d.forEach((t) => {
                    var r,
                      n,
                      i = (function (e) {
                        if (null != e && "object" == typeof e) {
                          var t,
                            r =
                              "name" in e
                                ? (function (e) {
                                    if (
                                      "string" == typeof e ||
                                      "number" == typeof e
                                    )
                                      return e;
                                  })(e.name)
                                : void 0,
                            n =
                              "unit" in e
                                ? (function (e) {
                                    if (
                                      "string" == typeof e ||
                                      "number" == typeof e ||
                                      "boolean" == typeof e
                                    )
                                      return e;
                                  })(e.unit)
                                : void 0,
                            i =
                              "dataKey" in e
                                ? "string" == typeof (t = e.dataKey) ||
                                  "number" == typeof t
                                  ? t
                                  : "function" == typeof t
                                  ? (e) => t(e)
                                  : void 0
                                : void 0,
                            a = "payload" in e ? e.payload : void 0;
                          return {
                            name: r,
                            unit: n,
                            dataKey: i,
                            payload: a,
                            color: "color" in e ? hj(e.color) : void 0,
                            fill: "fill" in e ? hj(e.fill) : void 0,
                          };
                        }
                      })(t),
                      a = null == i ? void 0 : i.name,
                      o = null == i ? void 0 : i.dataKey,
                      l = null == i ? void 0 : i.payload,
                      u = hO(
                        hO({}, y),
                        {},
                        {
                          name: a,
                          unit: null == i ? void 0 : i.unit,
                          color:
                            null != (r = null == i ? void 0 : i.color)
                              ? r
                              : null == y
                              ? void 0
                              : y.color,
                          fill:
                            null != (n = null == i ? void 0 : i.fill)
                              ? n
                              : null == y
                              ? void 0
                              : y.fill,
                        }
                      );
                    e.push(
                      n7({
                        tooltipEntrySettings: u,
                        dataKey: o,
                        payload: l,
                        value: nJ(l, o),
                        name: null == a ? void 0 : String(a),
                      })
                    );
                  })
                : e.push(
                    n7({
                      tooltipEntrySettings: y,
                      dataKey: g,
                      payload: d,
                      value: nJ(d, g),
                      name:
                        null != (h = nJ(d, b))
                          ? h
                          : null == y
                          ? void 0
                          : y.name,
                    })
                  ),
              e
            );
          }, []);
        }
      },
      hE = rI([fJ, f_, lc], fy),
      hS = rI(
        [
          (e) => e.graphicalItems.cartesianItems,
          (e) => e.graphicalItems.polarItems,
        ],
        (e, t) => [...e, ...t]
      ),
      hP = rI([lb, lx], fC),
      hk = rI([hS, fJ, hP], fN, {
        memoizeOptions: { resultEqualityCheck: i7 },
      }),
      hM = rI([hk], (e) => e.filter(lm)),
      hI = rI([hk], f$, { memoizeOptions: { resultEqualityCheck: i7 } }),
      h_ = rI([hk], (e) => e.some((e) => !e.data)),
      hC = rI([hI, oV], fK),
      hT = rI([hM, oV, fJ], lv),
      hD = rI([hC, fJ, hk, oV, h_, hI], fW),
      hN = rI([fJ], f4),
      hz = rI([fJ], (e) => e.allowDataOverflow),
      hL = rI([hN, hz], o3),
      hR = rI([hk], (e) => e.filter(lm)),
      hB = rI([hT, hR, ll, lu], f2),
      h$ = rI([hB, oV, lb, hL], f5),
      hF = rI([hk], fR),
      hU = rI([hC, fJ, hF, de, lb, oQ], dr, {
        memoizeOptions: { resultEqualityCheck: lg },
      }),
      hK = rI([da, lb, lx], dl),
      hH = rI([hK, lb], dh),
      hW = rI([dc, lb, lx], dl),
      hq = rI([hW, lb], dy),
      hV = rI([df, lb, lx], dl),
      hY = rI([hV, lb], dm),
      hX = rI([hH, hY, hq], dt),
      hG = rI([fJ, hN, hL, h$, hU, hX, iB, lb], dx),
      hZ = rI([fJ, iB, hC, hD, ll, lb, hG], dA),
      hQ = rI([hZ, fJ, hE], dP),
      hJ = rI([fJ, hZ, hQ, lb], dM),
      h0 = (e) => {
        var t = lb(e),
          r = lx(e);
        return dL(e, t, r, !1);
      },
      h1 = rI([fJ, h0], iq),
      h2 = rI([fJ, hE, hJ, h1], fp),
      h3 = rI([h2], lw),
      h5 = rI([iB, hD, fJ, lb], d2),
      h6 = rI([iB, hD, fJ, lb], dF),
      h4 = rI([iB, fJ, hE, h3, h0, h5, h6, lb], (e, t, r, n, i, a, o, l) => {
        if (t) {
          var u = t.type,
            c = n0(e, l);
          if (n) {
            var s = "scaleBand" === r && n.bandwidth ? n.bandwidth() / 2 : 2,
              f = "category" === u && n.bandwidth ? n.bandwidth() / s : 0;
            return ((f =
              "angleAxis" === l &&
              null != i &&
              (null == i ? void 0 : i.length) >= 2
                ? 2 * ey(i[0] - i[1]) * f
                : f),
            c && o)
              ? o
                  .map((e, t) => {
                    var r = n.map(e);
                    return eZ(r)
                      ? { coordinate: r + f, value: e, index: t, offset: f }
                      : null;
                  })
                  .filter(eP)
              : n
                  .domain()
                  .map((e, t) => {
                    var r = n.map(e);
                    return eZ(r)
                      ? {
                          coordinate: r + f,
                          value: a ? a[e] : e,
                          index: t,
                          offset: f,
                        }
                      : null;
                  })
                  .filter(eP);
          }
        }
      }),
      h8 = rI([hu, hc, (e) => e.tooltip.settings], (e, t, r) =>
        hs(r.shared, e, t)
      ),
      h7 = (e) => e.tooltip.settings.trigger,
      h9 = (e) => e.tooltip.settings.defaultIndex,
      pe = rI([hx, h8, h7, h9], hy),
      pt = rI([pe, hC, f0, hZ], hv),
      pr = rI([h4, pt], hd),
      pn = rI([pe], (e) => {
        if (e) return e.dataKey;
      }),
      pi = rI([pe], (e) => {
        if (e) return e.graphicalItemId;
      }),
      pa = rI([hx, h8, h7, h9], hg),
      po = rI([ie, it, iB, ic, h4, h9, pa], hm),
      pl = rI([pe, po], (e, t) =>
        null != e && e.coordinate ? e.coordinate : t
      ),
      pu = rI([pe], (e) => {
        var t;
        return null != (t = null == e ? void 0 : e.active) && t;
      }),
      pc = rI([pa, pt, oV, f0, pr, hb, h8], hA),
      ps = rI([pc], (e) => {
        if (null != e)
          return Array.from(
            new Set(e.map((e) => e.payload).filter((e) => null != e))
          );
      }),
      pf = rI([ic], (e) => ({
        top: e.top,
        bottom: e.bottom,
        left: e.left,
        right: e.right,
      })),
      pd = rI([pf, ie, it], (e, t, r) => {
        if (e && null != t && null != r)
          return {
            x: e.left,
            y: e.top,
            width: Math.max(0, t - e.left - e.right),
            height: Math.max(0, r - e.top - e.bottom),
          };
      });
    function ph(e, t) {
      var r,
        n,
        i = tv((t) => fA(t, e)),
        a = tv((e) => fS(e, t)),
        o =
          null != (r = null == i ? void 0 : i.allowDataOverflow)
            ? r
            : fO.allowDataOverflow,
        l =
          null != (n = null == a ? void 0 : a.allowDataOverflow)
            ? n
            : fE.allowDataOverflow;
      return { needClip: o || l, needClipX: o, needClipY: l };
    }
    function pp(e) {
      var t = e.xAxisId,
        r = e.yAxisId,
        n = e.clipPathId,
        i = tv(pd),
        a = ph(t, r),
        o = a.needClipX,
        l = a.needClipY,
        u = a.needClip,
        c = tv((e) => dN(e, t, !1)),
        s = tv((e) => dz(e, r, !1));
      if (!u || !i) return null;
      var f = i.x,
        d = i.y,
        h = i.width,
        p = i.height,
        y = o && c ? Math.min(c[0], c[1]) : f - h / 2,
        v = l && s ? Math.min(s[0], s[1]) : d - p / 2,
        m = o && c ? Math.abs(c[1] - c[0]) : 2 * h,
        g = l && s ? Math.abs(s[1] - s[0]) : 2 * p;
      return C.createElement(
        "clipPath",
        { id: "clipPath-".concat(n) },
        C.createElement("rect", { x: y, y: v, width: m, height: g })
      );
    }
    function py(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
      return n;
    }
    var pv = (e, t, r) => {
      var n = null != r ? r : e;
      if (null != n) return eO(n, t, 0);
    };
    function pm(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function pg(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? pm(Object(r), !0).forEach(function (t) {
              var n, i, a;
              (n = e),
                (i = t),
                (a = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value."
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = a);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : pm(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    function pb(e, t) {
      var r, n;
      return null !=
        (r =
          null == (n = e.graphicalItems.cartesianItems.find((e) => e.id === t))
            ? void 0
            : n.xAxisId)
        ? r
        : 0;
    }
    function px(e, t) {
      var r, n;
      return null !=
        (r =
          null == (n = e.graphicalItems.cartesianItems.find((e) => e.id === t))
            ? void 0
            : n.yAxisId)
        ? r
        : 0;
    }
    var pw = rI([fT, (e, t) => t], (e, t) =>
        e.filter((e) => "bar" === e.type).find((e) => e.id === t)
      ),
      pO = rI([pw], (e) => (null == e ? void 0 : e.maxBarSize)),
      pj = rI([iB, fT, pb, px, (e, t, r) => r], (e, t, r, n, i) =>
        t
          .filter((t) =>
            "horizontal" === e ? t.xAxisId === r : t.yAxisId === n
          )
          .filter((e) => e.isPanorama === i)
          .filter((e) => !1 === e.hide)
          .filter((e) => "bar" === e.type)
      ),
      pA = rI(
        [
          pj,
          (e) => e.rootProps.barSize,
          (e, t) => {
            var r = iB(e),
              n = pb(e, t),
              i = px(e, t);
            if (null != n && null != i)
              return "horizontal" === r ? d1(e, "xAxis", n) : d1(e, "yAxis", i);
          },
        ],
        (e, t, r) => {
          var n = e.filter(lm),
            i = e.filter((e) => null == e.stackId);
          return [
            ...Object.entries(
              n.reduce((e, t) => {
                var r = e[t.stackId];
                return null == r && (r = []), r.push(t), (e[t.stackId] = r), e;
              }, {})
            ).map((e) => {
              var n,
                i =
                  (function (e) {
                    if (Array.isArray(e)) return e;
                  })(e) ||
                  (function (e, t) {
                    var r =
                      null == e
                        ? null
                        : ("u" > typeof Symbol && e[Symbol.iterator]) ||
                          e["@@iterator"];
                    if (null != r) {
                      var n,
                        i,
                        a,
                        o,
                        l = [],
                        u = !0,
                        c = !1;
                      try {
                        (a = (r = r.call(e)).next), !1;
                        for (
                          ;
                          !(u = (n = a.call(r)).done) &&
                          (l.push(n.value), 2 !== l.length);
                          u = !0
                        );
                      } catch (e) {
                        (c = !0), (i = e);
                      } finally {
                        try {
                          if (
                            !u &&
                            null != r.return &&
                            ((o = r.return()), Object(o) !== o)
                          )
                            return;
                        } finally {
                          if (c) throw i;
                        }
                      }
                      return l;
                    }
                  })(e, 2) ||
                  (function (e, t) {
                    if (e) {
                      if ("string" == typeof e) return py(e, 2);
                      var r = {}.toString.call(e).slice(8, -1);
                      return (
                        "Object" === r &&
                          e.constructor &&
                          (r = e.constructor.name),
                        "Map" === r || "Set" === r
                          ? Array.from(e)
                          : "Arguments" === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                          ? py(e, 2)
                          : void 0
                      );
                    }
                  })(e, 2) ||
                  (function () {
                    throw TypeError(
                      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })(),
                a = i[0],
                o = i[1];
              return {
                stackId: a,
                dataKeys: o.map((e) => e.dataKey),
                barSize: pv(t, r, null == (n = o[0]) ? void 0 : n.barSize),
              };
            }),
            ...i.map((e) => ({
              stackId: void 0,
              dataKeys: [e.dataKey].filter((e) => null != e),
              barSize: pv(t, r, e.barSize),
            })),
          ];
        }
      ),
      pE = (e, t, r) => {
        var n,
          i,
          a = iB(e),
          o = pb(e, t),
          l = px(e, t);
        if (null != o && null != l)
          return (
            "horizontal" === a
              ? ((n = d4(e, "xAxis", o, r)), (i = d6(e, "xAxis", o, r)))
              : ((n = d4(e, "yAxis", l, r)), (i = d6(e, "yAxis", l, r))),
            n8(n, i)
          );
      },
      pS = rI(
        [
          pA,
          la,
          (e) => e.rootProps.barGap,
          lo,
          (e, t, r) => {
            var n,
              i,
              a,
              o,
              l = pw(e, t);
            if (null == l) return 0;
            var u = pb(e, t),
              c = px(e, t);
            if (null == u || null == c) return 0;
            var s = iB(e),
              f = la(e),
              d = l.maxBarSize;
            return (
              "horizontal" === s
                ? ((a = d4(e, "xAxis", u, r)), (o = d6(e, "xAxis", u, r)))
                : ((a = d4(e, "yAxis", c, r)), (o = d6(e, "yAxis", c, r))),
              null != (n = null != (i = n8(a, o, !0)) ? i : null == d ? f : d)
                ? n
                : 0
            );
          },
          pE,
          pO,
        ],
        (e, t, r, n, i, a, o) => {
          var l = (function (e, t, r, n, i) {
            var a,
              o,
              l = n.length;
            if (!(l < 1)) {
              var u = eO(e, r, 0, !0),
                c = [];
              if (eZ(null == (a = n[0]) ? void 0 : a.barSize)) {
                var s = !1,
                  f = r / l,
                  d = n.reduce((e, t) => e + (t.barSize || 0), 0);
                (d += (l - 1) * u) >= r && ((d -= (l - 1) * u), (u = 0)),
                  d >= r && f > 0 && ((s = !0), (f *= 0.9), (d = l * f));
                var h = { offset: Math.round((r - d) / 2) - u, size: 0 };
                o = n.reduce((e, t) => {
                  var r,
                    n = {
                      stackId: t.stackId,
                      dataKeys: t.dataKeys,
                      position: {
                        offset: h.offset + h.size + u,
                        size: s ? f : null != (r = t.barSize) ? r : 0,
                      },
                    },
                    i = [...e, n];
                  return (h = n.position), i;
                }, c);
              } else {
                var p = eO(t, r, 0, !0);
                r - 2 * p - (l - 1) * u <= 0 && (u = 0);
                var y = (r - 2 * p - (l - 1) * u) / l;
                y > 1 && (y = Math.round(y));
                var v = eZ(i) ? Math.min(y, i) : y;
                o = n.reduce(
                  (e, t, r) => [
                    ...e,
                    {
                      stackId: t.stackId,
                      dataKeys: t.dataKeys,
                      position: {
                        offset: p + (y + u) * r + (y - v) / 2,
                        size: v,
                      },
                    },
                  ],
                  c
                );
              }
              return o;
            }
          })(r, n, i !== a ? i : a, e, null == o ? t : o);
          return (
            i !== a &&
              null != l &&
              (l = l.map((e) =>
                pg(
                  pg({}, e),
                  {},
                  {
                    position: pg(
                      pg({}, e.position),
                      {},
                      { offset: e.position.offset - i / 2 }
                    ),
                  }
                )
              )),
            l
          );
        }
      ),
      pP = rI([pS, pw], (e, t) => {
        if (null != e && null != t) {
          var r = e.find(
            (e) =>
              e.stackId === t.stackId &&
              null != t.dataKey &&
              e.dataKeys.includes(t.dataKey)
          );
          if (null != r) return r.position;
        }
      }),
      pk = rI(
        [
          (e, t, r) => {
            var n = iB(e),
              i = pb(e, t),
              a = px(e, t);
            if (null != i && null != a)
              return "horizontal" === n
                ? f3(e, "yAxis", a, r)
                : f3(e, "xAxis", i, r);
          },
          pw,
        ],
        (e, t) => {
          var r = ly(t);
          if (!e || null == r || null == t) return;
          var n = t.stackId;
          if (null != n) {
            var i = e[n];
            if (i) {
              var a = i.stackedData;
              if (a) return a.find((e) => e.key === r);
            }
          }
        }
      ),
      pM = rI(
        [
          ic,
          id,
          (e, t, r) => {
            var n = pb(e, t);
            if (null != n) return d4(e, "xAxis", n, r);
          },
          (e, t, r) => {
            var n = px(e, t);
            if (null != n) return d4(e, "yAxis", n, r);
          },
          (e, t, r) => {
            var n = pb(e, t);
            if (null != n) return d6(e, "xAxis", n, r);
          },
          (e, t, r) => {
            var n = px(e, t);
            if (null != n) return d6(e, "yAxis", n, r);
          },
          pP,
          iB,
          oG,
          pE,
          pk,
          pw,
          (e, t, r, n) => n,
        ],
        (e, t, r, n, i, a, o, l, u, c, s, f, d) => {
          var h,
            p = u.chartData,
            y = u.dataStartIndex,
            v = u.dataEndIndex;
          if (
            null != f &&
            null != o &&
            null != t &&
            ("horizontal" === l || "vertical" === l) &&
            null != r &&
            null != n &&
            null != i &&
            null != a &&
            null != c
          ) {
            var m,
              g,
              b,
              x,
              w,
              O,
              j,
              A,
              E,
              S,
              P,
              k,
              M,
              I,
              _,
              C,
              T,
              D,
              N,
              z,
              L,
              R,
              B = f.data;
            if (
              null !=
              (h =
                null != B && B.length > 0
                  ? B
                  : null == p
                  ? void 0
                  : p.slice(y, v + 1))
            ) {
              return (
                (g = (m = {
                  layout: l,
                  barSettings: f,
                  pos: o,
                  parentViewBox: t,
                  bandSize: c,
                  xAxis: r,
                  yAxis: n,
                  xAxisTicks: i,
                  yAxisTicks: a,
                  stackedData: s,
                  displayedData: h,
                  offset: e,
                  cells: d,
                  dataStartIndex: y,
                }).layout),
                (x = (b = m.barSettings).dataKey),
                (w = b.minPointSize),
                (O = b.hasCustomShape),
                (j = m.pos),
                (A = m.bandSize),
                (E = m.xAxis),
                (S = m.yAxis),
                (P = m.xAxisTicks),
                (k = m.yAxisTicks),
                (M = m.stackedData),
                (I = m.displayedData),
                (_ = m.offset),
                (C = m.cells),
                (T = m.parentViewBox),
                (D = m.dataStartIndex),
                (N = "horizontal" === g ? S : E),
                (z = M ? N.scale.domain() : null),
                (L = ((e) => {
                  var t = e.numericAxis,
                    r = t.scale.domain();
                  if ("number" === t.type) {
                    var n = Math.min(r[0], r[1]),
                      i = Math.max(r[0], r[1]);
                    return n <= 0 && i >= 0 ? 0 : i < 0 ? i : n;
                  }
                  return r[0];
                })({ numericAxis: N })),
                (R = N.scale.map(L)),
                I.map((e, t) => {
                  if (M) {
                    var r = M[t + D];
                    if (null == r) return null;
                    i = ((e, t) => {
                      if (!t || 2 !== t.length || !eg(t[0]) || !eg(t[1]))
                        return e;
                      var r = Math.min(t[0], t[1]),
                        n = Math.max(t[0], t[1]),
                        i = [e[0], e[1]];
                      return (
                        (!eg(e[0]) || e[0] < r) && (i[0] = r),
                        (!eg(e[1]) || e[1] > n) && (i[1] = n),
                        i[0] > n && (i[0] = n),
                        i[1] < r && (i[1] = r),
                        i
                      );
                    })(r, z);
                  } else Array.isArray((i = nJ(e, x))) || (i = [L, i]);
                  var n = ow(w, 0)(i[1], t);
                  if ("horizontal" === g) {
                    var i,
                      a,
                      o,
                      l,
                      u,
                      c,
                      s,
                      f = S.scale.map(i[0]),
                      d = S.scale.map(i[1]);
                    if (null == f || null == d) return null;
                    (a = n5({
                      axis: E,
                      ticks: P,
                      bandSize: A,
                      offset: j.offset,
                      entry: e,
                      index: t,
                    })),
                      (o = null != (s = null != d ? d : f) ? s : void 0),
                      (l = j.size);
                    var h = f - d;
                    if (
                      ((u = ev(h) ? 0 : h),
                      (c = { x: a, y: _.top, width: l, height: _.height }),
                      Math.abs(n) > 0 && Math.abs(u) < Math.abs(n))
                    ) {
                      var p = ey(u || n) * (Math.abs(n) - Math.abs(u));
                      (o -= p), (u += p);
                    }
                  } else {
                    var y = E.scale.map(i[0]),
                      v = E.scale.map(i[1]);
                    if (null == y || null == v) return null;
                    if (
                      ((a = y),
                      (o = n5({
                        axis: S,
                        ticks: k,
                        bandSize: A,
                        offset: j.offset,
                        entry: e,
                        index: t,
                      })),
                      (l = v - y),
                      (u = j.size),
                      (c = { x: _.left, y: o, width: _.width, height: u }),
                      Math.abs(n) > 0 && Math.abs(l) < Math.abs(n))
                    ) {
                      var m = ey(l || n) * (Math.abs(n) - Math.abs(l));
                      l += m;
                    }
                  }
                  return null != a &&
                    null != o &&
                    null != l &&
                    null != u &&
                    (O || (0 !== l && 0 !== u))
                    ? yS(
                        yS({}, e),
                        {},
                        {
                          stackedBarStart: R,
                          x: a,
                          y: o,
                          width: l,
                          height: u,
                          value: M ? i : i[1],
                          payload: e,
                          background: c,
                          tooltipPosition: { x: a + l / 2, y: o + u / 2 },
                          parentViewBox: T,
                          originalDataIndex: t,
                        },
                        C && C[t] && C[t].props
                      )
                    : null;
                }).filter(Boolean)
              );
            }
          }
        }
      ),
      pI = r0({
        name: "legend",
        initialState: {
          settings: {
            layout: "horizontal",
            align: "center",
            verticalAlign: "bottom",
            itemSorter: "value",
          },
          size: { width: 0, height: 0 },
          payload: [],
        },
        reducers: {
          setLegendSize(e, t) {
            (e.size.width = t.payload.width),
              (e.size.height = t.payload.height);
          },
          setLegendSettings(e, t) {
            (e.settings.align = t.payload.align),
              (e.settings.layout = t.payload.layout),
              (e.settings.verticalAlign = t.payload.verticalAlign),
              (e.settings.itemSorter = t.payload.itemSorter);
          },
          addLegendPayload: {
            reducer(e, t) {
              e.payload.push(t.payload);
            },
            prepare: rY(),
          },
          replaceLegendPayload: {
            reducer(e, t) {
              var r = t.payload,
                n = r.prev,
                i = r.next,
                a = rf(e).payload.indexOf(n);
              a > -1 && (e.payload[a] = i);
            },
            prepare: rY(),
          },
          removeLegendPayload: {
            reducer(e, t) {
              var r = rf(e).payload.indexOf(t.payload);
              r > -1 && e.payload.splice(r, 1);
            },
            prepare: rY(),
          },
        },
      }),
      p_ = pI.actions,
      pC = p_.setLegendSize,
      pT = p_.setLegendSettings,
      pD = p_.addLegendPayload,
      pN = p_.replaceLegendPayload,
      pz = p_.removeLegendPayload,
      pL = pI.reducer;
    function pR(e) {
      var t = e.legendPayload,
        r = td(),
        n = ip(),
        i = (0, C.useRef)(null);
      return (
        (0, C.useLayoutEffect)(() => {
          n ||
            (null === i.current
              ? r(pD(t))
              : i.current !== t && r(pN({ prev: i.current, next: t })),
            (i.current = t));
        }, [r, n, t]),
        (0, C.useLayoutEffect)(
          () => () => {
            i.current && (r(pz(i.current)), (i.current = null));
          },
          [r]
        ),
        null
      );
    }
    function pB(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
      return n;
    }
    var p$ =
        null != (j = C["useId".toString()])
          ? j
          : () => {
              var e;
              return ((function (e) {
                if (Array.isArray(e)) return e;
              })((e = C.useState(() => ew("uid-")))) ||
                (function (e, t) {
                  var r =
                    null == e
                      ? null
                      : ("u" > typeof Symbol && e[Symbol.iterator]) ||
                        e["@@iterator"];
                  if (null != r) {
                    var n,
                      i,
                      a,
                      o,
                      l = [],
                      u = !0,
                      c = !1;
                    try {
                      (a = (r = r.call(e)).next), !1;
                      for (
                        ;
                        !(u = (n = a.call(r)).done) &&
                        (l.push(n.value), 1 !== l.length);
                        u = !0
                      );
                    } catch (e) {
                      (c = !0), (i = e);
                    } finally {
                      try {
                        if (
                          !u &&
                          null != r.return &&
                          ((o = r.return()), Object(o) !== o)
                        )
                          return;
                      } finally {
                        if (c) throw i;
                      }
                    }
                    return l;
                  }
                })(e, 1) ||
                (function (e, t) {
                  if (e) {
                    if ("string" == typeof e) return pB(e, 1);
                    var r = {}.toString.call(e).slice(8, -1);
                    return (
                      "Object" === r &&
                        e.constructor &&
                        (r = e.constructor.name),
                      "Map" === r || "Set" === r
                        ? Array.from(e)
                        : "Arguments" === r ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                        ? pB(e, 1)
                        : void 0
                    );
                  }
                })(e, 1) ||
                (function () {
                  throw TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                  );
                })())[0];
            },
      pF = (0, C.createContext)(void 0),
      pU = (e) => {
        var t,
          r,
          n,
          i = e.id,
          a = e.type,
          o = e.children,
          l =
            ((t = "recharts-".concat(a)),
            (r = i),
            (n = p$()),
            r || (t ? "".concat(t, "-").concat(n) : n));
        return C.createElement(pF.Provider, { value: l }, o(l));
      },
      pK = r0({
        name: "graphicalItems",
        initialState: { cartesianItems: [], polarItems: [] },
        reducers: {
          addCartesianGraphicalItem: {
            reducer(e, t) {
              e.cartesianItems.push(t.payload);
            },
            prepare: rY(),
          },
          replaceCartesianGraphicalItem: {
            reducer(e, t) {
              var r = t.payload,
                n = r.prev,
                i = r.next,
                a = rf(e).cartesianItems.indexOf(n);
              a > -1 && (e.cartesianItems[a] = i);
            },
            prepare: rY(),
          },
          removeCartesianGraphicalItem: {
            reducer(e, t) {
              var r = rf(e).cartesianItems.indexOf(t.payload);
              r > -1 && e.cartesianItems.splice(r, 1);
            },
            prepare: rY(),
          },
          addPolarGraphicalItem: {
            reducer(e, t) {
              e.polarItems.push(t.payload);
            },
            prepare: rY(),
          },
          removePolarGraphicalItem: {
            reducer(e, t) {
              var r = rf(e).polarItems.indexOf(t.payload);
              r > -1 && e.polarItems.splice(r, 1);
            },
            prepare: rY(),
          },
          replacePolarGraphicalItem: {
            reducer(e, t) {
              var r = t.payload,
                n = r.prev,
                i = r.next,
                a = rf(e).polarItems.indexOf(n);
              a > -1 && (e.polarItems[a] = i);
            },
            prepare: rY(),
          },
        },
      }),
      pH = pK.actions,
      pW = pH.addCartesianGraphicalItem,
      pq = pH.replaceCartesianGraphicalItem,
      pV = pH.removeCartesianGraphicalItem,
      pY =
        (pH.addPolarGraphicalItem,
        pH.removePolarGraphicalItem,
        pH.replacePolarGraphicalItem,
        pK.reducer),
      pX = (0, C.memo)((e) => {
        var t = td(),
          r = (0, C.useRef)(null);
        return (
          (0, C.useLayoutEffect)(() => {
            null === r.current
              ? t(pW(e))
              : r.current !== e && t(pq({ prev: r.current, next: e })),
              (r.current = e);
          }, [t, e]),
          (0, C.useLayoutEffect)(
            () => () => {
              r.current && (t(pV(r.current)), (r.current = null));
            },
            [t]
          ),
          null
        );
      });
    function pG(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
      return n;
    }
    var pZ = "index",
      pQ = "append";
    function pJ(e, t) {
      var r =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
        n = [];
      for (var i of r) n.push({ status: "removed", prev: i });
      for (var a = 0; a < t.length; a++) {
        var o = e[a],
          l = t[a];
        null != o
          ? n.push({ status: "matched", prev: o, next: l })
          : n.push({ status: "added", next: l });
      }
      return n;
    }
    function p0(e, t, r) {
      var n;
      return null == t
        ? null
        : null == e
        ? t.map((e) => ({ status: "added", next: e }))
        : r === pZ
        ? ((n = e.length / t.length),
          pJ(
            t.map((t, r) => e[Math.floor(r * n)]),
            t
          ))
        : r === pQ
        ? pJ(
            t.map((t, r) => e[r]),
            t
          )
        : (function (e, t, r) {
            var n = (function (e, t) {
                for (var r = new Map(), n = 0; n < e.length; n++) {
                  var i = e[n];
                  if (null != i) {
                    var a = t(i, n);
                    null == a || r.has(a) || r.set(a, i);
                  }
                }
                return r;
              })(e, r),
              i = new Set(),
              a = t.map((e, t) => {
                var a = r(e, t);
                if (null != a) {
                  var o = n.get(a);
                  if (void 0 !== o) return i.add(a), o;
                }
              }),
              o = [];
            for (var l of n) {
              var u =
                  (function (e) {
                    if (Array.isArray(e)) return e;
                  })(l) ||
                  (function (e, t) {
                    var r =
                      null == e
                        ? null
                        : ("u" > typeof Symbol && e[Symbol.iterator]) ||
                          e["@@iterator"];
                    if (null != r) {
                      var n,
                        i,
                        a,
                        o,
                        l = [],
                        u = !0,
                        c = !1;
                      try {
                        (a = (r = r.call(e)).next), !1;
                        for (
                          ;
                          !(u = (n = a.call(r)).done) &&
                          (l.push(n.value), 2 !== l.length);
                          u = !0
                        );
                      } catch (e) {
                        (c = !0), (i = e);
                      } finally {
                        try {
                          if (
                            !u &&
                            null != r.return &&
                            ((o = r.return()), Object(o) !== o)
                          )
                            return;
                        } finally {
                          if (c) throw i;
                        }
                      }
                      return l;
                    }
                  })(l, 2) ||
                  (function (e, t) {
                    if (e) {
                      if ("string" == typeof e) return pG(e, 2);
                      var r = {}.toString.call(e).slice(8, -1);
                      return (
                        "Object" === r &&
                          e.constructor &&
                          (r = e.constructor.name),
                        "Map" === r || "Set" === r
                          ? Array.from(e)
                          : "Arguments" === r ||
                            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                          ? pG(e, 2)
                          : void 0
                      );
                    }
                  })(l, 2) ||
                  (function () {
                    throw TypeError(
                      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })(),
                c = u[0],
                s = u[1];
              i.has(c) || o.push(s);
            }
            return pJ(a, t, o);
          })(e, t, r);
    }
    function p1(e, t) {
      var r = (0, C.useRef)(e),
        n = (0, C.useRef)(t.current),
        i = (0, C.useRef)(!0);
      r.current !== e &&
        ((r.current = e), (n.current = t.current), (i.current = !1));
      var a = (0, C.useCallback)(
        function (e, r) {
          var a =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
          if (0 === r) {
            i.current = !0;
            return;
          }
          1 === r && (n.current = e),
            r > 0 && i.current && a && (t.current = e);
        },
        [t]
      );
      return { startValue: n.current, syncStepValue: a };
    }
    function p2(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
      return n;
    }
    function p3(e, t) {
      var r,
        n =
          (function (e) {
            if (Array.isArray(e)) return e;
          })((r = (0, C.useState)(!1))) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ("u" > typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != r) {
              var n,
                i,
                a,
                o,
                l = [],
                u = !0,
                c = !1;
              try {
                (a = (r = r.call(e)).next), !1;
                for (
                  ;
                  !(u = (n = a.call(r)).done) &&
                  (l.push(n.value), 2 !== l.length);
                  u = !0
                );
              } catch (e) {
                (c = !0), (i = e);
              } finally {
                try {
                  if (
                    !u &&
                    null != r.return &&
                    ((o = r.return()), Object(o) !== o)
                  )
                    return;
                } finally {
                  if (c) throw i;
                }
              }
              return l;
            }
          })(r, 2) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return p2(e, 2);
              var r = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === r && e.constructor && (r = e.constructor.name),
                "Map" === r || "Set" === r
                  ? Array.from(e)
                  : "Arguments" === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                  ? p2(e, 2)
                  : void 0
              );
            }
          })(r, 2) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })(),
        i = n[0],
        a = n[1];
      return {
        isAnimating: i,
        handleAnimationStart: (0, C.useCallback)(() => {
          "function" == typeof e && e(), a(!0);
        }, [e]),
        handleAnimationEnd: (0, C.useCallback)(() => {
          "function" == typeof t && t(), a(!1);
        }, [t]),
      };
    }
    function p5(e) {
      var t,
        r = e.animationInput,
        n = e.animationIdPrefix,
        i = e.items,
        a = e.previousItemsRef,
        o = e.isAnimationActive,
        l = e.animationBegin,
        u = e.animationDuration,
        c = e.animationEasing,
        s = e.onAnimationStart,
        f = e.onAnimationEnd,
        d = e.animationInterpolateFn,
        h = e.animationMatchBy,
        p = e.shouldUpdatePreviousRef,
        y = e.children,
        v = e.layout,
        m = oi(r, n),
        g = p1(m, a),
        b = null != (t = g.startValue) ? t : null,
        x = p0(b, i, null != h ? h : pZ);
      return C.createElement(
        on,
        {
          animationId: m,
          begin: l,
          duration: u,
          isActive: o,
          easing: c,
          onAnimationEnd: f,
          onAnimationStart: s,
          key: m,
        },
        (e) => {
          var t = null == i ? i : d(x, e, v),
            r = p ? p(e) : e > 0;
          return (g.syncStepValue(t, e, r), null == t)
            ? null
            : y(t, e, null == b);
        }
      );
    }
    e.i(491344);
    var p6 = { notify() {}, get: () => [] },
      p4 =
        "u" > typeof window &&
        void 0 !== window.document &&
        void 0 !== window.document.createElement,
      p8 = "u" > typeof navigator && "ReactNative" === navigator.product,
      p7 = p4 || p8 ? C.useLayoutEffect : C.useEffect;
    function p9(e, t) {
      return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t;
    }
    var ye = Symbol.for("react-redux-context"),
      yt = "u" > typeof globalThis ? globalThis : {},
      yr = (function () {
        if (!C.createContext) return {};
        let e = (yt[ye] ??= new Map()),
          t = e.get(C.createContext);
        return t || ((t = C.createContext(null)), e.set(C.createContext, t)), t;
      })(),
      yn = function (e) {
        let { children: t, context: r, serverState: n, store: i } = e,
          a = C.useMemo(() => {
            let e = (function (e, t) {
              let r,
                n = p6,
                i = 0,
                a = !1;
              function o() {
                c.onStateChange && c.onStateChange();
              }
              function l() {
                if ((i++, !r)) {
                  let t, i;
                  (r = e.subscribe(o)),
                    (t = null),
                    (i = null),
                    (n = {
                      clear() {
                        (t = null), (i = null);
                      },
                      notify() {
                        let e = t;
                        for (; e; ) e.callback(), (e = e.next);
                      },
                      get() {
                        let e = [],
                          r = t;
                        for (; r; ) e.push(r), (r = r.next);
                        return e;
                      },
                      subscribe(e) {
                        let r = !0,
                          n = (i = { callback: e, next: null, prev: i });
                        return (
                          n.prev ? (n.prev.next = n) : (t = n),
                          function () {
                            r &&
                              null !== t &&
                              ((r = !1),
                              n.next ? (n.next.prev = n.prev) : (i = n.prev),
                              n.prev ? (n.prev.next = n.next) : (t = n.next));
                          }
                        );
                      },
                    });
                }
              }
              function u() {
                i--, r && 0 === i && (r(), (r = void 0), n.clear(), (n = p6));
              }
              let c = {
                addNestedSub: function (e) {
                  l();
                  let t = n.subscribe(e),
                    r = !1;
                  return () => {
                    r || ((r = !0), t(), u());
                  };
                },
                notifyNestedSubs: function () {
                  n.notify();
                },
                handleChangeWrapper: o,
                isSubscribed: function () {
                  return a;
                },
                trySubscribe: function () {
                  a || ((a = !0), l());
                },
                tryUnsubscribe: function () {
                  a && ((a = !1), u());
                },
                getListeners: () => n,
              };
              return c;
            })(i);
            return {
              store: i,
              subscription: e,
              getServerState: n ? () => n : void 0,
            };
          }, [i, n]),
          o = C.useMemo(() => i.getState(), [i]);
        return (
          p7(() => {
            let { subscription: e } = a;
            return (
              (e.onStateChange = e.notifyNestedSubs),
              e.trySubscribe(),
              o !== i.getState() && e.notifyNestedSubs(),
              () => {
                e.tryUnsubscribe(), (e.onStateChange = void 0);
              }
            );
          }, [a, o]),
          C.createElement((r || yr).Provider, { value: a }, t)
        );
      };
    function yi(e = yr) {
      return function () {
        return C.useContext(e);
      };
    }
    var ya = yi(),
      yo = new Set([
        "axisLine",
        "tickLine",
        "activeBar",
        "activeDot",
        "activeLabel",
        "activeShape",
        "allowEscapeViewBox",
        "background",
        "cursor",
        "dot",
        "label",
        "line",
        "margin",
        "padding",
        "position",
        "shape",
        "style",
        "tick",
        "wrapperStyle",
        "radius",
        "throttledEvents",
      ]);
    function yl(e, t) {
      for (var r of new Set([...Object.keys(e), ...Object.keys(t)]))
        if (yo.has(r)) {
          if (null == e[r] && null == t[r]) continue;
          if (
            !(function (e, t) {
              if (p9(e, t)) return !0;
              if (
                "object" != typeof e ||
                null === e ||
                "object" != typeof t ||
                null === t
              )
                return !1;
              let r = Object.keys(e),
                n = Object.keys(t);
              if (r.length !== n.length) return !1;
              for (let n = 0; n < r.length; n++)
                if (
                  !Object.prototype.hasOwnProperty.call(t, r[n]) ||
                  !p9(e[r[n]], t[r[n]])
                )
                  return !1;
              return !0;
            })(e[r], t[r])
          )
            return !1;
        } else {
          var n, i;
          if (
            ((n = e[r]),
            (i = t[r]),
            (null != n || null != i) &&
              ("number" == typeof n && "number" == typeof i
                ? n !== i && (n == n || i == i)
                : n !== i))
          )
            return !1;
        }
      return !0;
    }
    var yu = (e, t) => t,
      yc = (e, t, r) => r,
      ys = rI([yu, fT, yc], (e, t, r) =>
        t
          .filter((e) => "bar" === e.type)
          .filter((t) => t.stackId === e)
          .filter((e) => e.isPanorama === r)
          .filter((e) => !e.hide)
      ),
      yf = rI([ys], (e) => e.map((e) => e.id)),
      yd = rI([(e) => e, yu, yc], (e, t, r) => {
        var n = yf(e, t, r),
          i = [];
        return (
          n.forEach((t) => {
            var n = pM(e, t, r, void 0);
            null == n ||
              n.forEach((e) => {
                var t = e.originalDataIndex;
                i[t] = ((e, t) => {
                  if (!e) return t;
                  if (!t) return e;
                  var r = Math.min(e.x, e.x + e.width, t.x, t.x + t.width),
                    n = Math.min(e.y, e.y + e.height, t.y, t.y + t.height);
                  return {
                    x: r,
                    y: n,
                    width: Math.max(e.x, e.x + e.width, t.x, t.x + t.width) - r,
                    height:
                      Math.max(e.y, e.y + e.height, t.y, t.y + t.height) - n,
                  };
                })(i[t], e);
              });
          }),
          i
        );
      }),
      yh = ["index"];
    function yp() {
      return (yp = Object.assign.bind()).apply(null, arguments);
    }
    var yy = (0, C.createContext)(void 0),
      yv = (e, t) => "recharts-bar-stack-clip-path-".concat(e, "-").concat(t),
      ym = (e) => {
        var t = e.index,
          r = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = (function (e, t) {
                if (null == e) return {};
                var r = {};
                for (var n in e)
                  if ({}.hasOwnProperty.call(e, n)) {
                    if (-1 !== t.indexOf(n)) continue;
                    r[n] = e[n];
                  }
                return r;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (n = 0; n < a.length; n++)
                (r = a[n]),
                  -1 === t.indexOf(r) &&
                    {}.propertyIsEnumerable.call(e, r) &&
                    (i[r] = e[r]);
            }
            return i;
          })(e, yh),
          n = ((e) => {
            var t = (0, C.useContext)(yy);
            if (null != t) {
              var r = t.stackId;
              return "url(#".concat(yv(r, e), ")");
            }
          })(t);
        return C.createElement(
          el,
          yp({ className: "recharts-bar-stack-layer", clipPath: n }, r)
        );
      },
      yg = ["onMouseEnter", "onMouseLeave", "onClick"],
      yb = ["value", "background", "tooltipPosition"],
      yx = ["id"],
      yw = ["onMouseEnter", "onClick", "onMouseLeave"];
    function yO(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          var r =
            null == e
              ? null
              : ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
          if (null != r) {
            var n,
              i,
              a,
              o,
              l = [],
              u = !0,
              c = !1;
            try {
              if (((a = (r = r.call(e)).next), 0 === t)) {
                if (Object(r) !== r) return;
                u = !1;
              } else
                for (
                  ;
                  !(u = (n = a.call(r)).done) &&
                  (l.push(n.value), l.length !== t);
                  u = !0
                );
            } catch (e) {
              (c = !0), (i = e);
            } finally {
              try {
                if (
                  !u &&
                  null != r.return &&
                  ((o = r.return()), Object(o) !== o)
                )
                  return;
              } finally {
                if (c) throw i;
              }
            }
            return l;
          }
        })(e, t) ||
        (function (e, t) {
          if (e) {
            if ("string" == typeof e) return yj(e, t);
            var r = {}.toString.call(e).slice(8, -1);
            return (
              "Object" === r && e.constructor && (r = e.constructor.name),
              "Map" === r || "Set" === r
                ? Array.from(e)
                : "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                ? yj(e, t)
                : void 0
            );
          }
        })(e, t) ||
        (function () {
          throw TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function yj(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
      return n;
    }
    function yA() {
      return (yA = Object.assign.bind()).apply(null, arguments);
    }
    function yE(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function yS(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? yE(Object(r), !0).forEach(function (t) {
              var n, i, a;
              (n = e),
                (i = t),
                (a = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value."
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = a);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : yE(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    function yP(e, t) {
      if (null == e) return {};
      var r,
        n,
        i = (function (e, t) {
          if (null == e) return {};
          var r = {};
          for (var n in e)
            if ({}.hasOwnProperty.call(e, n)) {
              if (-1 !== t.indexOf(n)) continue;
              r[n] = e[n];
            }
          return r;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (n = 0; n < a.length; n++)
          (r = a[n]),
            -1 === t.indexOf(r) &&
              {}.propertyIsEnumerable.call(e, r) &&
              (i[r] = e[r]);
      }
      return i;
    }
    var yk = X.memo((e) => {
      var t = e.dataKey,
        r = e.stroke,
        n = e.strokeWidth,
        i = e.fill,
        a = e.name,
        o = e.hide,
        l = e.unit,
        u = e.formatter,
        c = e.tooltipType,
        s = e.id,
        f = {
          dataDefinedOnItem: void 0,
          getPosition: ek,
          settings: {
            stroke: r,
            strokeWidth: n,
            fill: i,
            dataKey: t,
            nameKey: void 0,
            name: n9(a, t),
            hide: o,
            type: c,
            color: i,
            unit: l,
            formatter: u,
            graphicalItemId: s,
          },
        };
      return X.createElement(oF, { tooltipEntrySettings: f });
    });
    function yM(e) {
      var t,
        r = tv(pt),
        n = e.data,
        i = e.dataKey,
        a = e.background,
        o = e.allOtherBarProps,
        l = o.onMouseEnter,
        u = o.onMouseLeave,
        c = o.onClick,
        s = yP(o, yg),
        f = oR(l, i, o.id),
        d = oB(u),
        h = o$(c, i, o.id);
      if (!a || null == n) return null;
      var p = en(a);
      return X.createElement(
        ad,
        {
          zIndex:
            ((t = iK.barBackground),
            a &&
            "object" == typeof a &&
            "zIndex" in a &&
            "number" == typeof a.zIndex &&
            eZ(a.zIndex)
              ? a.zIndex
              : t),
        },
        n.map((e, t) => {
          e.value;
          var n = e.background,
            o = (e.tooltipPosition, yP(e, yb));
          if (!n) return null;
          var l = f(e, e.originalDataIndex),
            u = d(e, e.originalDataIndex),
            c = h(e, e.originalDataIndex),
            y = yS(
              yS(
                yS(
                  yS(
                    yS(
                      {
                        option: a,
                        isActive: String(e.originalDataIndex) === r,
                      },
                      o
                    ),
                    {},
                    { fill: "#eee" },
                    n
                  ),
                  p
                ),
                aY(s, e, t)
              ),
              {},
              {
                onMouseEnter: l,
                onMouseLeave: u,
                onClick: c,
                dataKey: i,
                index: t,
                className: "recharts-bar-background-rectangle",
              }
            );
          return X.createElement(
            ox,
            yA({ key: "background-bar-".concat(t) }, y)
          );
        })
      );
    }
    function yI(e) {
      var t = e.showLabels,
        r = e.children,
        n = e.rects,
        i =
          null == n
            ? void 0
            : n.map((e) => {
                var t = {
                  x: e.x,
                  y: e.y,
                  width: e.width,
                  lowerWidth: e.width,
                  upperWidth: e.width,
                  height: e.height,
                };
                return yS(
                  yS({}, t),
                  {},
                  {
                    value: e.value,
                    payload: e.payload,
                    parentViewBox: e.parentViewBox,
                    viewBox: t,
                    fill: e.fill,
                  }
                );
              });
      return X.createElement(az, { value: t ? i : void 0 }, r);
    }
    function y_(e) {
      var t,
        r = e.shape,
        n = e.activeBar,
        i = e.baseProps,
        a = e.entry,
        o = e.index,
        l = e.dataKey,
        u = tv(pt),
        c = tv(pn),
        s = n && String(a.originalDataIndex) === u && (null == c || l === c),
        f = yO((0, X.useState)(!1), 2),
        d = f[0],
        h = f[1],
        p = yO((0, X.useState)(!1), 2),
        y = p[0],
        v = p[1];
      (0, X.useEffect)(() => {
        var e;
        return (
          s
            ? (h(!0),
              (e = requestAnimationFrame(() => {
                v(!0);
              })))
            : v(!1),
          () => {
            cancelAnimationFrame(e);
          }
        );
      }, [s]);
      var m = (0, X.useCallback)(() => {
          s || h(!1);
        }, [s]),
        g = s && y,
        b = s || d;
      t = s ? (!0 === n ? r : n) : r;
      var x = X.createElement(
        ox,
        yA({}, i, { name: String(i.name) }, a, {
          isActive: g,
          option: t,
          index: o,
          dataKey: l,
          animationElapsedTime: e.animationElapsedTime,
          isAnimating: e.isAnimating,
          isEntrance: e.isEntrance,
          onTransitionEnd: m,
        })
      );
      return b
        ? X.createElement(
            ad,
            { zIndex: iK.activeBar },
            X.createElement(ym, { index: a.originalDataIndex }, x)
          )
        : x;
    }
    function yC(e) {
      var t = e.shape,
        r = e.baseProps,
        n = e.entry,
        i = e.index,
        a = e.dataKey;
      return X.createElement(
        ox,
        yA({}, r, { name: String(r.name) }, n, {
          isActive: !1,
          option: t,
          index: i,
          dataKey: a,
          animationElapsedTime: e.animationElapsedTime,
          isAnimating: e.isAnimating,
          isEntrance: e.isEntrance,
        })
      );
    }
    function yT(e) {
      var t,
        r = e.data,
        n = e.props,
        i = e.animationElapsedTime,
        a = e.isAnimating,
        o = e.isEntrance,
        l = null != (t = er(n)) ? t : {},
        u = l.id,
        c = yP(l, yx),
        s = n.shape,
        f = n.dataKey,
        d = n.activeBar,
        h = n.onMouseEnter,
        p = n.onClick,
        y = n.onMouseLeave,
        v = yP(n, yw),
        m = oR(h, f, u),
        g = oB(y),
        b = o$(p, f, u);
      return r
        ? X.createElement(
            X.Fragment,
            null,
            r.map((e, t) =>
              X.createElement(
                ym,
                yA(
                  {
                    index: e.originalDataIndex,
                    key: "rectangle-"
                      .concat(null == e ? void 0 : e.x, "-")
                      .concat(null == e ? void 0 : e.y, "-")
                      .concat(null == e ? void 0 : e.value, "-")
                      .concat(t),
                    className: "recharts-bar-rectangle",
                  },
                  aY(v, e, t),
                  {
                    onMouseEnter: m(e, e.originalDataIndex),
                    onMouseLeave: g(e, e.originalDataIndex),
                    onClick: b(e, e.originalDataIndex),
                  }
                ),
                d
                  ? X.createElement(y_, {
                      shape: s,
                      activeBar: d,
                      baseProps: c,
                      entry: e,
                      index: t,
                      dataKey: f,
                      animationElapsedTime: i,
                      isAnimating: a,
                      isEntrance: o,
                    })
                  : X.createElement(yC, {
                      shape: s,
                      baseProps: c,
                      entry: e,
                      index: t,
                      dataKey: f,
                      animationElapsedTime: i,
                      isAnimating: a,
                      isEntrance: o,
                    })
              )
            )
          )
        : null;
    }
    function yD(e) {
      var t = e.props,
        r = e.previousRectanglesRef,
        n = t.data,
        i = t.isAnimationActive,
        a = t.animationBegin,
        o = t.animationDuration,
        l = t.animationEasing,
        u = t.animationInterpolateFn,
        c = t.layout,
        s = p3(t.onAnimationStart, t.onAnimationEnd),
        f = s.isAnimating,
        d = s.handleAnimationStart,
        h = s.handleAnimationEnd;
      return X.createElement(
        yI,
        { showLabels: !f, rects: n },
        X.createElement(
          p5,
          {
            animationInput: n,
            animationIdPrefix: "recharts-bar-",
            items: n,
            previousItemsRef: r,
            isAnimationActive: i,
            animationBegin: a,
            animationDuration: o,
            animationEasing: l,
            onAnimationStart: d,
            onAnimationEnd: h,
            animationInterpolateFn: u,
            animationMatchBy: t.animationMatchBy,
            layout: c,
          },
          (e, r, n) =>
            X.createElement(
              el,
              null,
              X.createElement(yT, {
                props: t,
                data: e,
                animationElapsedTime: r,
                isAnimating: f || r < 1,
                isEntrance: n,
              })
            )
        ),
        X.createElement(aB, { label: t.label }),
        t.children
      );
    }
    function yN(e) {
      var t = (0, X.useRef)(null);
      return X.createElement(yD, { previousRectanglesRef: t, props: e });
    }
    var yz = (e, t) => {
      var r = Array.isArray(e.value) ? e.value[1] : e.value;
      return { x: e.x, y: e.y, value: r, errorVal: nJ(e, t) };
    };
    class yL extends X.PureComponent {
      render() {
        var e = this.props,
          t = e.hide,
          r = e.data,
          n = e.dataKey,
          i = e.className,
          a = e.xAxisId,
          o = e.yAxisId,
          l = e.needClip,
          u = e.background,
          c = e.id;
        if (t || null == r) return null;
        var s = (0, G.clsx)("recharts-bar", i);
        return X.createElement(
          el,
          { className: s, id: c },
          l &&
            X.createElement(
              "defs",
              null,
              X.createElement(pp, { clipPathId: c, xAxisId: a, yAxisId: o })
            ),
          X.createElement(
            el,
            {
              className: "recharts-bar-rectangles",
              clipPath: l ? "url(#clipPath-".concat(c, ")") : void 0,
            },
            X.createElement(yM, {
              data: r,
              dataKey: n,
              background: u,
              allOtherBarProps: this.props,
            }),
            X.createElement(yN, this.props)
          )
        );
      }
    }
    var yR = {
      activeBar: !1,
      animationBegin: 0,
      animationDuration: 400,
      animationEasing: "ease",
      animationInterpolateFn: (e, t, r) =>
        null == e
          ? []
          : 1 === t
          ? e.flatMap((e) => ("removed" === e.status ? [] : [e.next]))
          : e.flatMap((e) => {
              if ("removed" === e.status)
                return "horizontal" === r
                  ? [
                      yS(
                        yS({}, e.prev),
                        {},
                        {
                          height: eA(e.prev.height, 0, t),
                          y: eA(e.prev.y, e.prev.y + e.prev.height, t),
                        }
                      ),
                    ]
                  : [yS(yS({}, e.prev), {}, { width: eA(e.prev.width, 0, t) })];
              if ("matched" === e.status)
                return [
                  yS(
                    yS({}, e.next),
                    {},
                    {
                      x: eA(e.prev.x, e.next.x, t),
                      y: eA(e.prev.y, e.next.y, t),
                      width: eA(e.prev.width, e.next.width, t),
                      height: eA(e.prev.height, e.next.height, t),
                    }
                  ),
                ];
              var n = e.next;
              return "horizontal" === r
                ? [
                    yS(
                      yS({}, n),
                      {},
                      {
                        height: eA(0, n.height, t),
                        y: eA(n.stackedBarStart, n.y, t),
                      }
                    ),
                  ]
                : [
                    yS(
                      yS({}, n),
                      {},
                      {
                        width: eA(0, n.width, t),
                        x: eA(n.stackedBarStart, n.x, t),
                      }
                    ),
                  ];
            }),
      animationMatchBy: pQ,
      background: !1,
      hide: !1,
      isAnimationActive: "auto",
      label: !1,
      legendType: "rect",
      minPointSize: 0,
      shape: oy,
      xAxisId: 0,
      yAxisId: 0,
      zIndex: iK.bar,
    };
    function yB(e) {
      var t,
        r,
        n,
        i,
        a = e.xAxisId,
        o = e.yAxisId,
        l = e.hide,
        u = e.legendType,
        c = e.minPointSize,
        s = e.activeBar,
        f = e.animationBegin,
        d = e.animationDuration,
        h = e.animationEasing,
        p = e.isAnimationActive,
        y = ph(a, o).needClip,
        v = tv(iB),
        m = ip(),
        g =
          ((t = e.children),
          (r = []),
          (n = []),
          (n = Array.isArray(eu) ? eu.map((e) => aF(e)) : [aF(eu)]),
          aH(t).forEach((e) => {
            var t = ed(e, "type.displayName") || ed(e, "type.name");
            t && -1 !== n.indexOf(t) && r.push(e);
          }),
          r),
        b = tv((t) => pM(t, e.id, m, g));
      if ("vertical" !== v && "horizontal" !== v) return null;
      var x = null == b ? void 0 : b[0];
      return (
        (i =
          null == x || null == x.height || null == x.width
            ? 0
            : "vertical" === v
            ? x.height / 2
            : x.width / 2),
        X.createElement(
          oH,
          {
            xAxisId: a,
            yAxisId: o,
            data: b,
            dataPointFormatter: yz,
            errorBarOffset: i,
          },
          X.createElement(
            yL,
            yA({}, e, {
              layout: v,
              needClip: y,
              data: b,
              xAxisId: a,
              yAxisId: o,
              hide: l,
              legendType: u,
              minPointSize: c,
              activeBar: s,
              animationBegin: f,
              animationDuration: d,
              animationEasing: h,
              isAnimationActive: p,
            })
          )
        )
      );
    }
    var y$ = X.memo(function (e) {
      var t,
        r,
        n = eG(e, yR),
        i =
          ((t = n.stackId),
          null != (r = (0, C.useContext)(yy))
            ? r.stackId
            : null != t
            ? n2(t)
            : void 0),
        a = ip();
      return X.createElement(pU, { id: n.id, type: "bar" }, (e) => {
        var t, r, o, l;
        return X.createElement(
          X.Fragment,
          null,
          X.createElement(pR, {
            legendPayload:
              ((t = n.dataKey),
              (r = n.name),
              (o = n.fill),
              (l = n.legendType),
              [
                {
                  inactive: n.hide,
                  dataKey: t,
                  type: l,
                  color: o,
                  value: n9(r, t),
                  payload: n,
                },
              ]),
          }),
          X.createElement(yk, {
            dataKey: n.dataKey,
            stroke: n.stroke,
            strokeWidth: n.strokeWidth,
            fill: n.fill,
            name: n.name,
            hide: n.hide,
            unit: n.unit,
            formatter: n.formatter,
            tooltipType: n.tooltipType,
            id: e,
          }),
          X.createElement(pX, {
            type: "bar",
            id: e,
            data: void 0,
            xAxisId: n.xAxisId,
            yAxisId: n.yAxisId,
            zAxisId: 0,
            dataKey: n.dataKey,
            stackId: i,
            hide: n.hide,
            barSize: n.barSize,
            minPointSize: n.minPointSize,
            maxBarSize: n.maxBarSize,
            isPanorama: a,
            hasCustomShape: null != n.shape && n.shape !== oy,
          }),
          X.createElement(
            ad,
            { zIndex: n.zIndex },
            X.createElement(yB, yA({}, n, { id: e }))
          )
        );
      });
    }, yl);
    y$.displayName = "Bar";
    var yF = (e, t) => {
        if (t && Array.isArray(e)) {
          var r = Number.parseInt(t, 10);
          if (!ev(r)) return e[r];
        }
      },
      yU = r0({
        name: "options",
        initialState: {
          chartName: "",
          tooltipPayloadSearcher: () => void 0,
          eventEmitter: void 0,
          defaultTooltipEventType: "axis",
        },
        reducers: {
          createEventEmitter: (e) => {
            null == e.eventEmitter &&
              (e.eventEmitter = Symbol("rechartsEventEmitter"));
          },
        },
      }),
      yK = yU.reducer,
      yH = yU.actions.createEventEmitter,
      yW = r0({
        name: "chartData",
        initialState: {
          chartData: void 0,
          computedData: void 0,
          dataStartIndex: 0,
          dataEndIndex: 0,
        },
        reducers: {
          setChartData(e, t) {
            if (((e.chartData = t.payload), null == t.payload)) {
              (e.dataStartIndex = 0), (e.dataEndIndex = 0);
              return;
            }
            t.payload.length > 0 &&
              e.dataEndIndex !== t.payload.length - 1 &&
              (e.dataEndIndex = t.payload.length - 1);
          },
          setComputedData(e, t) {
            e.computedData = t.payload;
          },
          setDataStartEndIndexes(e, t) {
            var r = t.payload,
              n = r.startIndex,
              i = r.endIndex;
            null != n && (e.dataStartIndex = n),
              null != i && (e.dataEndIndex = i);
          },
        },
      }),
      yq = yW.actions,
      yV = yq.setChartData,
      yY = yq.setDataStartEndIndexes;
    yq.setComputedData;
    var yX = yW.reducer;
    function yG(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function yZ(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? yG(Object(r), !0).forEach(function (t) {
              var n, i, a;
              (n = e),
                (i = t),
                (a = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value."
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = a);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : yG(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    var yQ = (e, t, r, n, i) => {
        var a = null != (f = null == t ? void 0 : t.length) ? f : 0;
        if (a <= 1 || null == e) return 0;
        if (
          "angleAxis" === n &&
          null != i &&
          1e-6 >= Math.abs(Math.abs(i[1] - i[0]) - 360)
        )
          for (var o = 0; o < a; o++) {
            var l =
                o > 0
                  ? null == (d = r[o - 1])
                    ? void 0
                    : d.coordinate
                  : null == (h = r[a - 1])
                  ? void 0
                  : h.coordinate,
              u = null == (p = r[o]) ? void 0 : p.coordinate,
              c =
                o >= a - 1
                  ? null == (y = r[0])
                    ? void 0
                    : y.coordinate
                  : null == (v = r[o + 1])
                  ? void 0
                  : v.coordinate,
              s = void 0;
            if (null != l && null != u && null != c)
              if (ey(u - l) !== ey(c - u)) {
                var f,
                  d,
                  h,
                  p,
                  y,
                  v,
                  m,
                  g = [];
                if (ey(c - u) === ey(i[1] - i[0])) {
                  s = c;
                  var b = u + i[1] - i[0];
                  (g[0] = Math.min(b, (b + l) / 2)),
                    (g[1] = Math.max(b, (b + l) / 2));
                } else {
                  s = l;
                  var x = c + i[1] - i[0];
                  (g[0] = Math.min(u, (x + u) / 2)),
                    (g[1] = Math.max(u, (x + u) / 2));
                }
                var w = [Math.min(u, (s + u) / 2), Math.max(u, (s + u) / 2)];
                if ((e > w[0] && e <= w[1]) || (e >= g[0] && e <= g[1]))
                  return null == (m = r[o]) ? void 0 : m.index;
              } else {
                var O,
                  j = Math.min(l, c),
                  A = Math.max(l, c);
                if (e > (j + u) / 2 && e <= (A + u) / 2)
                  return null == (O = r[o]) ? void 0 : O.index;
              }
          }
        else if (t)
          for (var E = 0; E < a; E++) {
            var S = t[E];
            if (null != S) {
              var P = t[E + 1],
                k = t[E - 1];
              if (
                (0 === E &&
                  null != P &&
                  e <= (S.coordinate + P.coordinate) / 2) ||
                (E === a - 1 &&
                  null != k &&
                  e > (S.coordinate + k.coordinate) / 2) ||
                (E > 0 &&
                  E < a - 1 &&
                  null != k &&
                  null != P &&
                  e > (S.coordinate + k.coordinate) / 2 &&
                  e <= (S.coordinate + P.coordinate) / 2)
              )
                return S.index;
            }
          }
        return -1;
      },
      yJ = (e, t) => t,
      y0 = (e, t, r) => r,
      y1 = (e, t, r, n) => n,
      y2 = rI(h4, (e) => nF(e, (e) => e.coordinate)),
      y3 = rI([hx, yJ, y0, y1], hy),
      y5 = rI([y3, hC, f0, hZ], hv),
      y6 = rI([hx, yJ, y0, y1], hg),
      y4 = rI([ie, it, iB, ic, h4, y1, y6], hm),
      y8 = rI([y3, y4], (e, t) => {
        var r;
        return null != (r = e.coordinate) ? r : t;
      }),
      y7 = rI([h4, y5], hd),
      y9 = rI([y6, y5, oV, f0, y7, hb, yJ], hA),
      ve = rI([y3, y5], (e, t) => ({
        isActive: e.active && null != t,
        activeIndex: t,
      })),
      vt = rI(
        [(e, t) => t, iB, i4, lb, h1, h4, y2, ic],
        (e, t, r, n, i, a, o, l) => {
          if (e && t && n && i && a) {
            if ("horizontal" === t || "vertical" === t)
              return ((e, t, r, n, i, a, o) => {
                if (
                  e &&
                  r &&
                  n &&
                  i &&
                  ((l = e.relativeX),
                  (u = e.relativeY),
                  l >= o.left &&
                    l <= o.left + o.width &&
                    u >= o.top &&
                    u <= o.top + o.height)
                ) {
                  var l,
                    u,
                    c = yQ(
                      "horizontal" === t
                        ? e.relativeX
                        : "vertical" === t
                        ? e.relativeY
                        : void 0,
                      a,
                      i,
                      r,
                      n
                    ),
                    s = ((e, t, r, n) => {
                      var i = t.find((e) => e && e.index === r);
                      if (i) {
                        if ("horizontal" === e)
                          return { x: i.coordinate, y: n.relativeY };
                        if ("vertical" === e)
                          return { x: n.relativeX, y: i.coordinate };
                      }
                      return { x: 0, y: 0 };
                    })(t, i, c, e);
                  return { activeIndex: String(c), activeCoordinate: s };
                }
              })(e, t, n, i, a, o, l);
            if (e && n && i && a && r) {
              var u = ((e, t) => {
                var r,
                  n,
                  i,
                  a,
                  o = ((e, t) => {
                    var r,
                      n,
                      i,
                      a,
                      o = e.x,
                      l = e.y,
                      u = t.cx,
                      c = t.cy,
                      s =
                        ((r = { x: o, y: l }),
                        (n = { x: u, y: c }),
                        (i = r.x),
                        (a = r.y),
                        Math.sqrt((i - n.x) ** 2 + (a - n.y) ** 2));
                    if (s <= 0) return { radius: s, angle: 0 };
                    var f = Math.acos((o - u) / s);
                    return (
                      l > c && (f = 2 * Math.PI - f),
                      {
                        radius: s,
                        angle: (180 * f) / Math.PI,
                        angleInRadian: f,
                      }
                    );
                  })({ x: e.relativeX, y: e.relativeY }, t),
                  l = o.radius,
                  u = o.angle,
                  c = t.innerRadius,
                  s = t.outerRadius;
                if (l < c || l > s || 0 === l) return null;
                var f =
                    ((i = Math.min(
                      Math.floor((r = t.startAngle) / 360),
                      Math.floor((n = t.endAngle) / 360)
                    )),
                    { startAngle: r - 360 * i, endAngle: n - 360 * i }),
                  d = f.startAngle,
                  h = f.endAngle,
                  p = u;
                if (d <= h) {
                  for (; p > h; ) p -= 360;
                  for (; p < d; ) p += 360;
                  a = p >= d && p <= h;
                } else {
                  for (; p > d; ) p -= 360;
                  for (; p < h; ) p += 360;
                  a = p >= h && p <= d;
                }
                return a
                  ? to(
                      to({}, t),
                      {},
                      {
                        radius: l,
                        angle:
                          p +
                          360 *
                            Math.min(
                              Math.floor(t.startAngle / 360),
                              Math.floor(t.endAngle / 360)
                            ),
                      }
                    )
                  : null;
              })(e, r);
              if (u) {
                var c = yQ("centric" === t ? u.angle : u.radius, o, a, n, i),
                  s = ((e, t, r, n) => {
                    var i = t.find((e) => e && e.index === r);
                    if (i) {
                      if ("centric" === e) {
                        var a = i.coordinate,
                          o = n.radius;
                        return yZ(
                          yZ(yZ({}, n), tu(n.cx, n.cy, o, a)),
                          {},
                          { angle: a, radius: o }
                        );
                      }
                      var l = i.coordinate,
                        u = n.angle;
                      return yZ(
                        yZ(yZ({}, n), tu(n.cx, n.cy, l, u)),
                        {},
                        { angle: u, radius: l }
                      );
                    }
                    return {
                      angle: 0,
                      clockWise: !1,
                      cx: 0,
                      cy: 0,
                      endAngle: 0,
                      innerRadius: 0,
                      outerRadius: 0,
                      radius: 0,
                      startAngle: 0,
                      x: 0,
                      y: 0,
                    };
                  })(t, a, c, u);
                return { activeIndex: String(c), activeCoordinate: s };
              }
              return;
            }
          }
        }
      );
    function vr(e) {
      var t,
        r,
        n = e.currentTarget.getBoundingClientRect();
      if (
        "getBBox" in e.currentTarget &&
        "function" == typeof e.currentTarget.getBBox
      ) {
        var i = e.currentTarget.getBBox();
        (t = i.width > 0 ? n.width / i.width : 1),
          (r = i.height > 0 ? n.height / i.height : 1);
      } else {
        var a = e.currentTarget;
        (t = a.offsetWidth > 0 ? n.width / a.offsetWidth : 1),
          (r = a.offsetHeight > 0 ? n.height / a.offsetHeight : 1);
      }
      var o = (e, i) => ({
        relativeX: Math.round((e - n.left) / t),
        relativeY: Math.round((i - n.top) / r),
      });
      return "touches" in e
        ? Array.from(e.touches).map((e) => o(e.clientX, e.clientY))
        : o(e.clientX, e.clientY);
    }
    var vn = rK("mouseClick"),
      vi = nw();
    vi.startListening({
      actionCreator: vn,
      effect: (e, t) => {
        var r = e.payload,
          n = vt(t.getState(), vr(r));
        (null == n ? void 0 : n.activeIndex) != null &&
          t.dispatch(
            oD({
              activeIndex: n.activeIndex,
              activeDataKey: void 0,
              activeCoordinate: n.activeCoordinate,
            })
          );
      },
    });
    var va = rK("mouseMove"),
      vo = nw(),
      vl = null,
      vu = null,
      vc = null;
    function vs(e, t) {
      return t instanceof HTMLElement
        ? "HTMLElement <"
            .concat(t.tagName, ' class="')
            .concat(t.className, '">')
        : t === window
        ? "global.window"
        : "children" === e && "object" == typeof t && null !== t
        ? "<<CHILDREN>>"
        : t;
    }
    vo.startListening({
      actionCreator: va,
      effect: (e, t) => {
        var r = e.payload,
          n = t.getState().eventSettings,
          i = n.throttleDelay,
          a = n.throttledEvents,
          o = "all" === a || (null == a ? void 0 : a.includes("mousemove"));
        null !== vl && (cancelAnimationFrame(vl), (vl = null)),
          null === vu ||
            ("number" == typeof i && o) ||
            (clearTimeout(vu), (vu = null)),
          (vc = vr(r));
        var l = () => {
          var e = t.getState(),
            r = hf(e, e.tooltip.settings.shared);
          if (!vc) {
            (vl = null), (vu = null);
            return;
          }
          if ("axis" === r) {
            var n = vt(e, vc);
            (null == n ? void 0 : n.activeIndex) != null
              ? t.dispatch(
                  oT({
                    activeIndex: n.activeIndex,
                    activeDataKey: void 0,
                    activeCoordinate: n.activeCoordinate,
                  })
                )
              : t.dispatch(o_());
          }
          (vl = null), (vu = null);
        };
        o
          ? "raf" === i
            ? (vl = requestAnimationFrame(l))
            : "number" == typeof i && null === vu && (vu = setTimeout(l, i))
          : l();
      },
    });
    var vf = r0({
        name: "referenceElements",
        initialState: { dots: [], areas: [], lines: [] },
        reducers: {
          addDot: (e, t) => {
            e.dots.push(t.payload);
          },
          removeDot: (e, t) => {
            var r = rf(e).dots.findIndex((e) => e === t.payload);
            -1 !== r && e.dots.splice(r, 1);
          },
          addArea: (e, t) => {
            e.areas.push(t.payload);
          },
          removeArea: (e, t) => {
            var r = rf(e).areas.findIndex((e) => e === t.payload);
            -1 !== r && e.areas.splice(r, 1);
          },
          addLine: (e, t) => {
            e.lines.push(t.payload);
          },
          removeLine: (e, t) => {
            var r = rf(e).lines.findIndex((e) => e === t.payload);
            -1 !== r && e.lines.splice(r, 1);
          },
        },
      }),
      vd = vf.actions;
    vd.addDot,
      vd.removeDot,
      vd.addArea,
      vd.removeArea,
      vd.addLine,
      vd.removeLine;
    var vh = vf.reducer,
      vp = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        padding: { top: 0, right: 0, bottom: 0, left: 0 },
      },
      vy = r0({
        name: "brush",
        initialState: vp,
        reducers: {
          setBrushSettings: (e, t) => (null == t.payload ? vp : t.payload),
        },
      });
    vy.actions.setBrushSettings;
    var vv = vy.reducer,
      vm = {
        accessibilityLayer: !0,
        barCategoryGap: "10%",
        barGap: 4,
        barSize: void 0,
        className: void 0,
        maxBarSize: void 0,
        stackOffset: "none",
        syncId: void 0,
        syncMethod: "index",
        baseValue: void 0,
        reverseStackOrder: !1,
      },
      vg = r0({
        name: "rootProps",
        initialState: vm,
        reducers: {
          updateOptions: (e, t) => {
            var r;
            (e.accessibilityLayer = t.payload.accessibilityLayer),
              (e.barCategoryGap = t.payload.barCategoryGap),
              (e.barGap = null != (r = t.payload.barGap) ? r : vm.barGap),
              (e.barSize = t.payload.barSize),
              (e.maxBarSize = t.payload.maxBarSize),
              (e.stackOffset = t.payload.stackOffset),
              (e.syncId = t.payload.syncId),
              (e.syncMethod = t.payload.syncMethod),
              (e.className = t.payload.className),
              (e.baseValue = t.payload.baseValue),
              (e.reverseStackOrder = t.payload.reverseStackOrder);
          },
        },
      }),
      vb = vg.reducer,
      vx = vg.actions.updateOptions,
      vw = r0({
        name: "polarAxis",
        initialState: { radiusAxis: {}, angleAxis: {} },
        reducers: {
          addRadiusAxis(e, t) {
            e.radiusAxis[t.payload.id] = t.payload;
          },
          removeRadiusAxis(e, t) {
            delete e.radiusAxis[t.payload.id];
          },
          addAngleAxis(e, t) {
            e.angleAxis[t.payload.id] = t.payload;
          },
          removeAngleAxis(e, t) {
            delete e.angleAxis[t.payload.id];
          },
        },
      }),
      vO = vw.actions;
    vO.addRadiusAxis, vO.removeRadiusAxis, vO.addAngleAxis, vO.removeAngleAxis;
    var vj = vw.reducer,
      vA = r0({
        name: "polarOptions",
        initialState: null,
        reducers: {
          updatePolarOptions: (e, t) =>
            null === e
              ? t.payload
              : ((e.startAngle = t.payload.startAngle),
                (e.endAngle = t.payload.endAngle),
                (e.cx = t.payload.cx),
                (e.cy = t.payload.cy),
                (e.innerRadius = t.payload.innerRadius),
                (e.outerRadius = t.payload.outerRadius),
                e),
        },
      });
    vA.actions.updatePolarOptions;
    var vE = vA.reducer,
      vS = rK("keyDown"),
      vP = rK("focus"),
      vk = rK("blur"),
      vM = nw(),
      vI = null,
      v_ = null,
      vC = null;
    function vT(e) {
      e.persist();
      var t = e.currentTarget;
      return new Proxy(e, {
        get: (e, r) => {
          if ("currentTarget" === r) return t;
          var n = Reflect.get(e, r);
          return "function" == typeof n ? n.bind(e) : n;
        },
      });
    }
    vM.startListening({
      actionCreator: vS,
      effect: (e, t) => {
        (vC = e.payload),
          null !== vI && (cancelAnimationFrame(vI), (vI = null));
        var r = t.getState().eventSettings,
          n = r.throttleDelay,
          i = r.throttledEvents,
          a = "all" === i || i.includes("keydown");
        null === v_ ||
          ("number" == typeof n && a) ||
          (clearTimeout(v_), (v_ = null));
        var o = () => {
          try {
            var e,
              r = t.getState();
            if (!1 === r.rootProps.accessibilityLayer) return;
            var n = r.tooltip.keyboardInteraction,
              i = vC;
            if ("ArrowRight" !== i && "ArrowLeft" !== i && "Enter" !== i)
              return;
            var a = hv(n, hC(r), f0(r), hZ(r)),
              o = null == a ? -1 : Number(a),
              l = !Number.isFinite(o) || o < 0,
              u = h4(r),
              c = hC(r),
              s = hf(r, r.tooltip.settings.shared);
            if ("Enter" === i) {
              if (l) return;
              var f = y4(r, s, "hover", String(n.index));
              t.dispatch(
                oz({
                  active: !n.active,
                  activeIndex: n.index,
                  activeCoordinate: f,
                })
              );
              return;
            }
            var d = d9(r),
              h = "left-to-right" === d ? 1 : -1,
              p = "ArrowRight" === i ? 1 : -1;
            if (l) {
              var y = f0(r),
                v = hZ(r),
                m = (e) => ({
                  active: !1,
                  index: String(e),
                  dataKey: void 0,
                  graphicalItemId: void 0,
                  coordinate: void 0,
                });
              if (((e = -1), p * h > 0)) {
                for (var g = 0; g < c.length; g++)
                  if (null != hv(m(g), c, y, v)) {
                    e = g;
                    break;
                  }
              } else
                for (var b = c.length - 1; b >= 0; b--)
                  if (null != hv(m(b), c, y, v)) {
                    e = b;
                    break;
                  }
              if (e < 0) return;
            } else {
              e = o + p * h;
              var x = (null == u ? void 0 : u.length) || c.length;
              if (0 === x || e >= x || e < 0) return;
            }
            var w = y4(r, s, "hover", String(e));
            t.dispatch(
              oz({ active: !0, activeIndex: e.toString(), activeCoordinate: w })
            );
          } finally {
            (vI = null), (v_ = null);
          }
        };
        a
          ? "raf" === n
            ? (vI = requestAnimationFrame(o))
            : "number" == typeof n &&
              null === v_ &&
              (o(),
              (vC = null),
              (v_ = setTimeout(() => {
                vC ? o() : ((v_ = null), (vI = null));
              }, n)))
          : o();
      },
    }),
      vM.startListening({
        actionCreator: vP,
        effect: (e, t) => {
          var r = t.getState();
          if (!1 !== r.rootProps.accessibilityLayer) {
            var n = r.tooltip.keyboardInteraction;
            if (!n.active && null == n.index) {
              var i = hf(r, r.tooltip.settings.shared),
                a = y4(r, i, "hover", String("0"));
              t.dispatch(
                oz({ active: !0, activeIndex: "0", activeCoordinate: a })
              );
            }
          }
        },
      }),
      vM.startListening({
        actionCreator: vk,
        effect: (e, t) => {
          var r = t.getState();
          if (!1 !== r.rootProps.accessibilityLayer) {
            var n = r.tooltip.keyboardInteraction;
            n.active &&
              t.dispatch(
                oz({
                  active: !1,
                  activeIndex: n.index,
                  activeCoordinate: n.coordinate,
                })
              );
          }
        },
      });
    var vD = rK("externalEvent"),
      vN = nw(),
      vz = new Map(),
      vL = new Map(),
      vR = new Map();
    vN.startListening({
      actionCreator: vD,
      effect: (e, t) => {
        var r = e.payload,
          n = r.handler,
          i = r.reactEvent;
        if (null != n) {
          var a = i.type,
            o = vT(i);
          vR.set(a, { handler: n, reactEvent: o });
          var l = vz.get(a);
          void 0 !== l && (cancelAnimationFrame(l), vz.delete(a));
          var u = t.getState().eventSettings,
            c = u.throttleDelay,
            s = u.throttledEvents,
            f = "all" === s || (null == s ? void 0 : s.includes(a)),
            d = vL.get(a);
          void 0 === d ||
            ("number" == typeof c && f) ||
            (clearTimeout(d), vL.delete(a));
          var h = () => {
            var e = vR.get(a);
            try {
              if (!e) return;
              var r = e.handler,
                n = e.reactEvent,
                i = t.getState(),
                o = {
                  activeCoordinate: pl(i),
                  activeDataKey: pn(i),
                  activeIndex: pt(i),
                  activeLabel: pr(i),
                  activeTooltipIndex: pt(i),
                  isTooltipActive: pu(i),
                };
              r && r(o, n);
            } finally {
              vz.delete(a), vL.delete(a), vR.delete(a);
            }
          };
          if (!f) return void h();
          if ("raf" === c) {
            var p = requestAnimationFrame(h);
            vz.set(a, p);
          } else if ("number" == typeof c) {
            if (!vL.has(a)) {
              h();
              var y = setTimeout(h, c);
              vL.set(a, y);
            }
          } else h();
        }
      },
    });
    var vB = rI([hx], (e) => e.tooltipItemPayloads),
      v$ = rI([vB, (e, t) => t, (e, t, r) => r], (e, t, r) => {
        if (null != t) {
          var n = e.find((e) => e.settings.graphicalItemId === r);
          if (null != n) {
            var i = n.getPosition;
            if (null != i) return i(t);
          }
        }
      }),
      vF = rK("touchMove"),
      vU = nw(),
      vK = null,
      vH = null,
      vW = null,
      vq = null;
    vU.startListening({
      actionCreator: vF,
      effect: (e, t) => {
        var r = e.payload;
        if (null != r.touches && 0 !== r.touches.length) {
          vq = vT(r);
          var n = t.getState().eventSettings,
            i = n.throttleDelay,
            a = n.throttledEvents,
            o = "all" === a || a.includes("touchmove");
          null !== vK && (cancelAnimationFrame(vK), (vK = null)),
            null === vH ||
              ("number" == typeof i && o) ||
              (clearTimeout(vH), (vH = null)),
            (vW = Array.from(r.touches).map((e) =>
              vr({
                clientX: e.clientX,
                clientY: e.clientY,
                currentTarget: r.currentTarget,
              })
            ));
          var l = () => {
            if (null != vq) {
              var e = t.getState(),
                r = hf(e, e.tooltip.settings.shared);
              if ("axis" === r) {
                var n,
                  i = null == (n = vW) ? void 0 : n[0];
                if (null == i) {
                  (vK = null), (vH = null);
                  return;
                }
                var a = vt(e, i);
                (null == a ? void 0 : a.activeIndex) != null &&
                  t.dispatch(
                    oT({
                      activeIndex: a.activeIndex,
                      activeDataKey: void 0,
                      activeCoordinate: a.activeCoordinate,
                    })
                  );
              } else if ("item" === r) {
                var o,
                  l = vq.touches[0];
                if (null == document.elementFromPoint || null == l) return;
                var u = document.elementFromPoint(l.clientX, l.clientY);
                if (!u || !u.getAttribute) return;
                var c = u.getAttribute("data-recharts-item-index"),
                  s =
                    null != (o = u.getAttribute("data-recharts-item-id"))
                      ? o
                      : void 0,
                  f = hk(e).find((e) => e.id === s);
                if (null == c || null == f || null == s) return;
                var d = f.dataKey,
                  h = v$(e, c, s);
                t.dispatch(
                  oM({
                    activeDataKey: d,
                    activeIndex: c,
                    activeCoordinate: h,
                    activeGraphicalItemId: s,
                  })
                );
              }
              (vK = null), (vH = null);
            }
          };
          if (!o) return void l();
          "raf" === i
            ? (vK = requestAnimationFrame(l))
            : "number" == typeof i &&
              null === vH &&
              (l(),
              (vq = null),
              (vH = setTimeout(() => {
                vq ? l() : ((vH = null), (vK = null));
              }, i)));
        }
      },
    });
    var vV = r0({
        name: "errorBars",
        initialState: {},
        reducers: {
          addErrorBar: (e, t) => {
            var r = t.payload,
              n = r.itemId,
              i = r.errorBar;
            e[n] || (e[n] = []), e[n].push(i);
          },
          replaceErrorBar: (e, t) => {
            var r = t.payload,
              n = r.itemId,
              i = r.prev,
              a = r.next;
            e[n] &&
              (e[n] = e[n].map((e) =>
                e.dataKey === i.dataKey && e.direction === i.direction ? a : e
              ));
          },
          removeErrorBar: (e, t) => {
            var r = t.payload,
              n = r.itemId,
              i = r.errorBar;
            e[n] &&
              (e[n] = e[n].filter(
                (e) => e.dataKey !== i.dataKey || e.direction !== i.direction
              ));
          },
        },
      }),
      vY = vV.actions;
    vY.addErrorBar, vY.replaceErrorBar, vY.removeErrorBar;
    var vX = vV.reducer,
      vG = {
        throttleDelay: "raf",
        throttledEvents: [
          "mousemove",
          "touchmove",
          "pointermove",
          "scroll",
          "wheel",
        ],
      },
      vZ = r0({
        name: "eventSettings",
        initialState: vG,
        reducers: {
          setEventSettings: (e, t) => {
            null != t.payload.throttleDelay &&
              (e.throttleDelay = t.payload.throttleDelay),
              null != t.payload.throttledEvents &&
                (e.throttledEvents = t.payload.throttledEvents);
          },
        },
      }),
      vQ = vZ.actions.setEventSettings,
      vJ = vZ.reducer,
      v0 = r0({
        name: "renderedTicks",
        initialState: { xAxis: {}, yAxis: {} },
        reducers: {
          setRenderedTicks: (e, t) => {
            var r = t.payload,
              n = r.axisType,
              i = r.axisId,
              a = r.ticks;
            e[n][i] = a;
          },
          removeRenderedTicks: (e, t) => {
            var r = t.payload,
              n = r.axisType,
              i = r.axisId;
            delete e[n][i];
          },
        },
      }),
      v1 = v0.actions,
      v2 = v1.setRenderedTicks,
      v3 = v1.removeRenderedTicks,
      v5 = rL({
        brush: vv,
        cartesianAxis: hl,
        chartData: yX,
        errorBars: vX,
        eventSettings: vJ,
        graphicalItems: pY,
        layout: nM,
        legend: pL,
        options: yK,
        polarAxis: vj,
        polarOptions: vE,
        referenceElements: vh,
        renderedTicks: v0.reducer,
        rootProps: vb,
        tooltip: oL,
        zIndex: af,
      }),
      v6 = function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "Chart";
        return (function (e) {
          let t,
            r,
            n,
            i = function (e) {
              let {
                  thunk: t = !0,
                  immutableCheck: r = !0,
                  serializableCheck: n = !0,
                  actionCreatorCheck: i = !0,
                } = e ?? {},
                a = new rH();
              return (
                t &&
                  ("boolean" == typeof t
                    ? a.push(rF)
                    : a.push(r$(t.extraArgument))),
                a
              );
            },
            {
              reducer: a,
              middleware: o,
              devTools: l = !0,
              duplicateMiddlewareCheck: u = !0,
              preloadedState: c,
              enhancers: s,
            } = e || {};
          if ("function" == typeof a) t = a;
          else if (rz(a)) t = rL(a);
          else throw Error(nO(1));
          r = "function" == typeof o ? o(i) : i();
          let f = rR;
          l && (f = rU({ trace: !1, ...("object" == typeof l && l) }));
          let d =
            ((n = (function (...e) {
              return (t) => (r, n) => {
                let i = t(r, n),
                  a = () => {
                    throw Error(rC(15));
                  },
                  o = {
                    getState: i.getState,
                    dispatch: (e, ...t) => a(e, ...t),
                  };
                return (
                  (a = rR(...e.map((e) => e(o)))(i.dispatch)),
                  { ...i, dispatch: a }
                );
              };
            })(...r)),
            function (e) {
              let { autoBatch: t = !0 } = e ?? {},
                r = new rH(n);
              return t && r.push(rG("object" == typeof t ? t : void 0)), r;
            });
          return (function e(t, r, n) {
            if ("function" != typeof t) throw Error(rC(2));
            if (
              ("function" == typeof r && "function" == typeof n) ||
              ("function" == typeof n && "function" == typeof arguments[3])
            )
              throw Error(rC(0));
            if (
              ("function" == typeof r &&
                void 0 === n &&
                ((n = r), (r = void 0)),
              void 0 !== n)
            ) {
              if ("function" != typeof n) throw Error(rC(1));
              return n(e)(t, r);
            }
            let i = t,
              a = r,
              o = new Map(),
              l = o,
              u = 0,
              c = !1;
            function s() {
              l === o &&
                ((l = new Map()),
                o.forEach((e, t) => {
                  l.set(t, e);
                }));
            }
            function f() {
              if (c) throw Error(rC(3));
              return a;
            }
            function d(e) {
              if ("function" != typeof e) throw Error(rC(4));
              if (c) throw Error(rC(5));
              let t = !0;
              s();
              let r = u++;
              return (
                l.set(r, e),
                function () {
                  if (t) {
                    if (c) throw Error(rC(6));
                    (t = !1), s(), l.delete(r), (o = null);
                  }
                }
              );
            }
            function h(e) {
              if (!rz(e)) throw Error(rC(7));
              if (void 0 === e.type) throw Error(rC(8));
              if ("string" != typeof e.type) throw Error(rC(17));
              if (c) throw Error(rC(9));
              try {
                (c = !0), (a = i(a, e));
              } finally {
                c = !1;
              }
              return (
                (o = l).forEach((e) => {
                  e();
                }),
                e
              );
            }
            return (
              h({ type: rN.INIT }),
              {
                dispatch: h,
                subscribe: d,
                getState: f,
                replaceReducer: function (e) {
                  if ("function" != typeof e) throw Error(rC(10));
                  (i = e), h({ type: rN.REPLACE });
                },
                [rT]: function () {
                  return {
                    subscribe(e) {
                      if ("object" != typeof e || null === e)
                        throw Error(rC(11));
                      function t() {
                        e.next && e.next(f());
                      }
                      return t(), { unsubscribe: d(t) };
                    },
                    [rT]() {
                      return this;
                    },
                  };
                },
              }
            );
          })(t, c, f(...("function" == typeof s ? s(d) : d())));
        })({
          reducer: v5,
          preloadedState: e,
          middleware: (e) =>
            e({
              serializableCheck: !1,
              immutableCheck: !["commonjs", "es6", "production"].includes(
                "es6"
              ),
            }).concat([
              vi.middleware,
              vo.middleware,
              vM.middleware,
              vN.middleware,
              vU.middleware,
            ]),
          enhancers: (e) => {
            var t = e;
            return (
              "function" == typeof e && (t = e()), t.concat(rG({ type: "raf" }))
            );
          },
          devTools: eM.devToolsEnabled && {
            serialize: { replacer: vs },
            name: "recharts-".concat(t),
          },
        });
      };
    function v4(e) {
      var t = e.preloadedState,
        r = e.children,
        n = e.reduxStoreName,
        i = ip(),
        a = (0, C.useRef)(null);
      return i
        ? r
        : (null == a.current && (a.current = v6(t, n)),
          C.createElement(yn, { context: ts, store: a.current }, r));
    }
    var v8 = (e) => {
        var t = e.chartData,
          r = td(),
          n = ip();
        return (
          (0, C.useEffect)(
            () =>
              n
                ? () => {}
                : (r(yV(t)),
                  () => {
                    r(yV(void 0));
                  }),
            [t, r, n]
          ),
          null
        );
      },
      v7 = (0, C.memo)(function (e) {
        var t = e.layout,
          r = e.margin,
          n = td(),
          i = ip();
        return (
          (0, C.useEffect)(() => {
            i || (n(nS(t)), n(nE(r)));
          }, [n, i, t, r]),
          null
        );
      }, yl);
    function v9(e) {
      var t = td();
      return (
        (0, C.useEffect)(() => {
          t(vx(e));
        }, [t, e]),
        null
      );
    }
    var me = (0, C.memo)((e) => {
        var t = td();
        return (
          (0, C.useEffect)(() => {
            t(vQ(e));
          }, [t, e]),
          null
        );
      }, yl),
      mt = () => {
        var e;
        return null == (e = tv((e) => e.rootProps.accessibilityLayer)) || e;
      },
      mr = [
        "children",
        "width",
        "height",
        "viewBox",
        "className",
        "style",
        "title",
        "desc",
      ];
    function mn() {
      return (mn = Object.assign.bind()).apply(null, arguments);
    }
    var mi = (0, C.forwardRef)((e, t) => {
      var r = e.children,
        n = e.width,
        i = e.height,
        a = e.viewBox,
        o = e.className,
        l = e.style,
        u = e.title,
        c = e.desc,
        s = (function (e, t) {
          if (null == e) return {};
          var r,
            n,
            i = (function (e, t) {
              if (null == e) return {};
              var r = {};
              for (var n in e)
                if ({}.hasOwnProperty.call(e, n)) {
                  if (-1 !== t.indexOf(n)) continue;
                  r[n] = e[n];
                }
              return r;
            })(e, t);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for (n = 0; n < a.length; n++)
              (r = a[n]),
                -1 === t.indexOf(r) &&
                  {}.propertyIsEnumerable.call(e, r) &&
                  (i[r] = e[r]);
          }
          return i;
        })(e, mr),
        f = a || { width: n, height: i, x: 0, y: 0 },
        d = (0, G.clsx)("recharts-surface", o);
      return C.createElement(
        "svg",
        mn({}, ei(s), {
          className: d,
          width: n,
          height: i,
          style: l,
          viewBox: ""
            .concat(f.x, " ")
            .concat(f.y, " ")
            .concat(f.width, " ")
            .concat(f.height),
          ref: t,
        }),
        C.createElement("title", null, u),
        C.createElement("desc", null, c),
        r
      );
    });
    function ma(e) {
      var t = e.zIndex,
        r = e.isPanorama,
        n = (0, C.useRef)(null),
        i = td();
      return (
        (0, C.useLayoutEffect)(
          () => (
            n.current &&
              i(ac({ zIndex: t, element: n.current, isPanorama: r })),
            () => {
              i(as({ zIndex: t, isPanorama: r }));
            }
          ),
          [i, t, r]
        ),
        C.createElement("g", {
          tabIndex: -1,
          ref: n,
          className: "recharts-zIndex-layer_".concat(t),
        })
      );
    }
    function mo(e) {
      var t = e.children,
        r = e.isPanorama,
        n = tv(ae);
      if (!n || 0 === n.length) return t;
      var i = n.filter((e) => e < 0),
        a = n.filter((e) => e > 0);
      return C.createElement(
        C.Fragment,
        null,
        i.map((e) => C.createElement(ma, { key: e, zIndex: e, isPanorama: r })),
        t,
        a.map((e) => C.createElement(ma, { key: e, zIndex: e, isPanorama: r }))
      );
    }
    var ml = ["children"];
    function mu() {
      return (mu = Object.assign.bind()).apply(null, arguments);
    }
    var mc = { width: "100%", height: "100%", display: "block" },
      ms = (0, C.forwardRef)((e, t) => {
        var r,
          n,
          i = tv(ie),
          a = tv(it),
          o = mt();
        if (!eQ(i) || !eQ(a)) return null;
        var l = e.children,
          u = e.otherAttributes,
          c = e.title,
          s = e.desc;
        return (
          null != u &&
            ((r = "number" == typeof u.tabIndex ? u.tabIndex : o ? 0 : void 0),
            (n =
              "string" == typeof u.role ? u.role : o ? "application" : void 0)),
          C.createElement(
            mi,
            mu({}, u, {
              title: c,
              desc: s,
              role: n,
              tabIndex: r,
              width: i,
              height: a,
              style: mc,
              ref: t,
            }),
            l
          )
        );
      }),
      mf = (e) => {
        var t = e.children,
          r = tv(iv);
        if (!r) return null;
        var n = r.width,
          i = r.height,
          a = r.y,
          o = r.x;
        return C.createElement(mi, { width: n, height: i, x: o, y: a }, t);
      },
      md = (0, C.forwardRef)((e, t) => {
        var r = e.children,
          n = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = (function (e, t) {
                if (null == e) return {};
                var r = {};
                for (var n in e)
                  if ({}.hasOwnProperty.call(e, n)) {
                    if (-1 !== t.indexOf(n)) continue;
                    r[n] = e[n];
                  }
                return r;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (n = 0; n < a.length; n++)
                (r = a[n]),
                  -1 === t.indexOf(r) &&
                    {}.propertyIsEnumerable.call(e, r) &&
                    (i[r] = e[r]);
            }
            return i;
          })(e, ml);
        return ip()
          ? C.createElement(
              mf,
              null,
              C.createElement(mo, { isPanorama: !0 }, r)
            )
          : C.createElement(
              ms,
              mu({ ref: t }, n),
              C.createElement(mo, { isPanorama: !1 }, r)
            );
      }),
      mh = new (e.i(948053).default)(),
      mp = "recharts.syncEvent.tooltip",
      my = "recharts.syncEvent.brush";
    function mv(e) {
      return e.tooltip.syncInteraction;
    }
    var mm = ["x", "y"];
    function mg(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function mb(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? mg(Object(r), !0).forEach(function (t) {
              var n, i, a;
              (n = e),
                (i = t),
                (a = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value."
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = a);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : mg(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    function mx(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
      return n;
    }
    var mw = (0, C.createContext)(null),
      mO = (0, C.createContext)(null);
    function mj(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function mA() {
      return (mA = Object.assign.bind()).apply(null, arguments);
    }
    function mE(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          var r =
            null == e
              ? null
              : ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
          if (null != r) {
            var n,
              i,
              a,
              o,
              l = [],
              u = !0,
              c = !1;
            try {
              if (((a = (r = r.call(e)).next), 0 === t)) {
                if (Object(r) !== r) return;
                u = !1;
              } else
                for (
                  ;
                  !(u = (n = a.call(r)).done) &&
                  (l.push(n.value), l.length !== t);
                  u = !0
                );
            } catch (e) {
              (c = !0), (i = e);
            } finally {
              try {
                if (
                  !u &&
                  null != r.return &&
                  ((o = r.return()), Object(o) !== o)
                )
                  return;
              } finally {
                if (c) throw i;
              }
            }
            return l;
          }
        })(e, t) ||
        (function (e, t) {
          if (e) {
            if ("string" == typeof e) return mS(e, t);
            var r = {}.toString.call(e).slice(8, -1);
            return (
              "Object" === r && e.constructor && (r = e.constructor.name),
              "Map" === r || "Set" === r
                ? Array.from(e)
                : "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                ? mS(e, t)
                : void 0
            );
          }
        })(e, t) ||
        (function () {
          throw TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function mS(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
      return n;
    }
    var mP = () => {
      var e, t, r, n, i, a, o, l, u, c, s, f;
      return (
        (e = td()),
        (0, C.useEffect)(() => {
          e(yH());
        }, [e]),
        (t = tv(ls)),
        (r = tv(ld)),
        (n = td()),
        (i = tv(lf)),
        (a = tv(h4)),
        (o = tv(iB)),
        (l = iL()),
        (u = tv((e) => e.rootProps.className)),
        (0, C.useEffect)(() => {
          if (null == t) return ek;
          var e = (e, u, c) => {
            if (r !== c && t === e) {
              if (!1 === u.payload.active)
                return void n(
                  oN({
                    active: !1,
                    coordinate: void 0,
                    dataKey: void 0,
                    index: null,
                    label: void 0,
                    sourceViewBox: void 0,
                    graphicalItemId: void 0,
                  })
                );
              if ("index" === i) {
                if (
                  l &&
                  null != u &&
                  null != (s = u.payload) &&
                  s.coordinate &&
                  u.payload.sourceViewBox
                ) {
                  var s,
                    f,
                    d = u.payload.coordinate,
                    h = d.x,
                    p = d.y,
                    y = (function (e, t) {
                      if (null == e) return {};
                      var r,
                        n,
                        i = (function (e, t) {
                          if (null == e) return {};
                          var r = {};
                          for (var n in e)
                            if ({}.hasOwnProperty.call(e, n)) {
                              if (-1 !== t.indexOf(n)) continue;
                              r[n] = e[n];
                            }
                          return r;
                        })(e, t);
                      if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        for (n = 0; n < a.length; n++)
                          (r = a[n]),
                            -1 === t.indexOf(r) &&
                              {}.propertyIsEnumerable.call(e, r) &&
                              (i[r] = e[r]);
                      }
                      return i;
                    })(d, mm),
                    v = u.payload.sourceViewBox,
                    m = v.x,
                    g = v.y,
                    b = v.width,
                    x = v.height,
                    w = mb(
                      mb({}, y),
                      {},
                      {
                        x: l.x + (b ? (h - m) / b : 0) * l.width,
                        y: l.y + (x ? (p - g) / x : 0) * l.height,
                      }
                    );
                  n(
                    mb(
                      mb({}, u),
                      {},
                      { payload: mb(mb({}, u.payload), {}, { coordinate: w }) }
                    )
                  );
                } else n(u);
                return;
              }
              if (null != a) {
                if ("function" == typeof i) {
                  var O = i(a, {
                    activeTooltipIndex:
                      null == u.payload.index
                        ? void 0
                        : Number(u.payload.index),
                    isTooltipActive: u.payload.active,
                    activeIndex:
                      null == u.payload.index
                        ? void 0
                        : Number(u.payload.index),
                    activeLabel: u.payload.label,
                    activeDataKey: u.payload.dataKey,
                    activeCoordinate: u.payload.coordinate,
                  });
                  f = a[O];
                } else
                  "value" === i &&
                    (f = a.find((e) => String(e.value) === u.payload.label));
                var j = u.payload.coordinate;
                if (null == j || null == l)
                  return void n(
                    oN({
                      active: !1,
                      coordinate: void 0,
                      dataKey: void 0,
                      index: null,
                      label: void 0,
                      sourceViewBox: void 0,
                      graphicalItemId: void 0,
                    })
                  );
                if (null == f)
                  return void n(
                    oN({
                      active: !1,
                      coordinate: void 0,
                      dataKey: void 0,
                      index: null,
                      label: void 0,
                      sourceViewBox: u.payload.sourceViewBox,
                      graphicalItemId: void 0,
                    })
                  );
                var A = j.x,
                  E = j.y,
                  S = Math.min(A, l.x + l.width),
                  P = Math.min(E, l.y + l.height),
                  k = {
                    x: "horizontal" === o ? f.coordinate : S,
                    y: "horizontal" === o ? P : f.coordinate,
                  };
                n(
                  oN({
                    active: u.payload.active,
                    coordinate: k,
                    dataKey: u.payload.dataKey,
                    index: String(f.index),
                    label: u.payload.label,
                    sourceViewBox: u.payload.sourceViewBox,
                    graphicalItemId: u.payload.graphicalItemId,
                  })
                );
              }
            }
          };
          return (
            mh.on(mp, e),
            () => {
              mh.off(mp, e);
            }
          );
        }, [u, n, r, t, i, a, o, l]),
        (c = tv(ls)),
        (s = tv(ld)),
        (f = td()),
        (0, C.useEffect)(() => {
          if (null == c) return ek;
          var e = (e, t, r) => {
            s !== r && c === e && f(yY(t));
          };
          return (
            mh.on(my, e),
            () => {
              mh.off(my, e);
            }
          );
        }, [f, s, c]),
        null
      );
    };
    function mk(e) {
      if ("number" == typeof e) return e;
      if ("string" == typeof e) {
        var t = parseFloat(e);
        if (!Number.isNaN(t)) return t;
      }
      return 0;
    }
    var mM = (0, C.forwardRef)((e, t) => {
        var r,
          n,
          i = (0, C.useRef)(null),
          a = mE(
            (0, C.useState)({
              containerWidth: mk(null == (r = e.style) ? void 0 : r.width),
              containerHeight: mk(null == (n = e.style) ? void 0 : n.height),
            }),
            2
          ),
          o = a[0],
          l = a[1],
          u = (0, C.useCallback)((e, t) => {
            l((r) => {
              var n = Math.round(e),
                i = Math.round(t);
              return r.containerWidth === n && r.containerHeight === i
                ? r
                : { containerWidth: n, containerHeight: i };
            });
          }, []),
          c = (0, C.useCallback)(
            (e) => {
              if (
                ("function" == typeof t && t(e),
                null != i.current &&
                  (i.current.disconnect(), (i.current = null)),
                null != e && "u" > typeof ResizeObserver)
              ) {
                var r = e.getBoundingClientRect();
                u(r.width, r.height);
                var n = new ResizeObserver((e) => {
                  var t = e[0];
                  if (null != t) {
                    var r = t.contentRect;
                    u(r.width, r.height);
                  }
                });
                n.observe(e), (i.current = n);
              }
            },
            [t, u]
          );
        return (
          (0, C.useEffect)(
            () => () => {
              var e = i.current;
              null != e && e.disconnect();
            },
            [u]
          ),
          C.createElement(
            C.Fragment,
            null,
            C.createElement(iU, {
              width: o.containerWidth,
              height: o.containerHeight,
            }),
            C.createElement("div", mA({ ref: c }, e))
          )
        );
      }),
      mI = (0, C.forwardRef)((e, t) => {
        var r = e.width,
          n = e.height,
          i = mE(
            (0, C.useState)({ containerWidth: mk(r), containerHeight: mk(n) }),
            2
          ),
          a = i[0],
          o = i[1],
          l = (0, C.useCallback)((e, t) => {
            o((r) => {
              var n = Math.round(e),
                i = Math.round(t);
              return r.containerWidth === n && r.containerHeight === i
                ? r
                : { containerWidth: n, containerHeight: i };
            });
          }, []),
          u = (0, C.useCallback)(
            (e) => {
              if (("function" == typeof t && t(e), null != e)) {
                var r = e.getBoundingClientRect();
                l(r.width, r.height);
              }
            },
            [t, l]
          );
        return C.createElement(
          C.Fragment,
          null,
          C.createElement(iU, {
            width: a.containerWidth,
            height: a.containerHeight,
          }),
          C.createElement("div", mA({ ref: u }, e))
        );
      }),
      m_ = (0, C.forwardRef)((e, t) => {
        var r = e.width,
          n = e.height;
        return C.createElement(
          C.Fragment,
          null,
          C.createElement(iU, { width: r, height: n }),
          C.createElement("div", mA({ ref: t }, e))
        );
      }),
      mC = (0, C.forwardRef)((e, t) => {
        var r = e.width,
          n = e.height;
        return "string" == typeof r || "string" == typeof n
          ? C.createElement(mI, mA({}, e, { ref: t }))
          : "number" == typeof r && "number" == typeof n
          ? C.createElement(m_, mA({}, e, { width: r, height: n, ref: t }))
          : C.createElement(
              C.Fragment,
              null,
              C.createElement(iU, { width: r, height: n }),
              C.createElement("div", mA({ ref: t }, e))
            );
      }),
      mT = (0, C.forwardRef)((e, t) => {
        var r,
          n,
          i,
          a,
          o,
          l,
          u = e.children,
          c = e.className,
          s = e.height,
          f = e.onClick,
          d = e.onContextMenu,
          h = e.onDoubleClick,
          p = e.onMouseDown,
          y = e.onMouseEnter,
          v = e.onMouseLeave,
          m = e.onMouseMove,
          g = e.onMouseUp,
          b = e.onTouchEnd,
          x = e.onTouchMove,
          w = e.onTouchStart,
          O = e.style,
          j = e.width,
          A = e.responsive,
          E = e.dispatchTouchEvents,
          S = void 0 === E || E,
          P = (0, C.useRef)(null),
          k = td(),
          M = mE((0, C.useState)(null), 2),
          I = M[0],
          _ = M[1],
          T = mE((0, C.useState)(null), 2),
          D = T[0],
          N = T[1],
          z =
            ((r = td()),
            (a = (i =
              (function (e) {
                if (Array.isArray(e)) return e;
              })((n = (0, C.useState)(null))) ||
              (function (e, t) {
                var r =
                  null == e
                    ? null
                    : ("u" > typeof Symbol && e[Symbol.iterator]) ||
                      e["@@iterator"];
                if (null != r) {
                  var n,
                    i,
                    a,
                    o,
                    l = [],
                    u = !0,
                    c = !1;
                  try {
                    (a = (r = r.call(e)).next), !1;
                    for (
                      ;
                      !(u = (n = a.call(r)).done) &&
                      (l.push(n.value), 2 !== l.length);
                      u = !0
                    );
                  } catch (e) {
                    (c = !0), (i = e);
                  } finally {
                    try {
                      if (
                        !u &&
                        null != r.return &&
                        ((o = r.return()), Object(o) !== o)
                      )
                        return;
                    } finally {
                      if (c) throw i;
                    }
                  }
                  return l;
                }
              })(n, 2) ||
              (function (e, t) {
                if (e) {
                  if ("string" == typeof e) return mx(e, 2);
                  var r = {}.toString.call(e).slice(8, -1);
                  return (
                    "Object" === r && e.constructor && (r = e.constructor.name),
                    "Map" === r || "Set" === r
                      ? Array.from(e)
                      : "Arguments" === r ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                      ? mx(e, 2)
                      : void 0
                  );
                }
              })(n, 2) ||
              (function () {
                throw TypeError(
                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })())[0]),
            (o = i[1]),
            (l = tv(ir)),
            (0, C.useEffect)(() => {
              if (null != a) {
                var e = a.getBoundingClientRect().width / a.offsetWidth;
                eZ(e) && e !== l && r(nk(e));
              }
            }, [a, r, l]),
            o),
          L = iT(),
          R = (null == L ? void 0 : L.width) > 0 ? L.width : j,
          B = (null == L ? void 0 : L.height) > 0 ? L.height : s,
          $ = (0, C.useCallback)(
            (e) => {
              z(e),
                "function" == typeof t && t(e),
                _(e),
                N(e),
                null != e && (P.current = e);
            },
            [z, t, _, N]
          ),
          F = (0, C.useCallback)(
            (e) => {
              k(vn(e)), k(vD({ handler: f, reactEvent: e }));
            },
            [k, f]
          ),
          U = (0, C.useCallback)(
            (e) => {
              k(va(e)), k(vD({ handler: y, reactEvent: e }));
            },
            [k, y]
          ),
          K = (0, C.useCallback)(
            (e) => {
              k(o_()), k(vD({ handler: v, reactEvent: e }));
            },
            [k, v]
          ),
          H = (0, C.useCallback)(
            (e) => {
              k(va(e)), k(vD({ handler: m, reactEvent: e }));
            },
            [k, m]
          ),
          W = (0, C.useCallback)(() => {
            k(vP());
          }, [k]),
          q = (0, C.useCallback)(() => {
            k(vk());
          }, [k]),
          V = (0, C.useCallback)(
            (e) => {
              k(vS(e.key));
            },
            [k]
          ),
          Y = (0, C.useCallback)(
            (e) => {
              k(vD({ handler: d, reactEvent: e }));
            },
            [k, d]
          ),
          X = (0, C.useCallback)(
            (e) => {
              k(vD({ handler: h, reactEvent: e }));
            },
            [k, h]
          ),
          Z = (0, C.useCallback)(
            (e) => {
              k(vD({ handler: p, reactEvent: e }));
            },
            [k, p]
          ),
          Q = (0, C.useCallback)(
            (e) => {
              k(vD({ handler: g, reactEvent: e }));
            },
            [k, g]
          ),
          J = (0, C.useCallback)(
            (e) => {
              k(vD({ handler: w, reactEvent: e }));
            },
            [k, w]
          ),
          ee = (0, C.useCallback)(
            (e) => {
              S && k(vF(e)), k(vD({ handler: x, reactEvent: e }));
            },
            [k, S, x]
          ),
          et = (0, C.useCallback)(
            (e) => {
              k(vD({ handler: b, reactEvent: e }));
            },
            [k, b]
          );
        return C.createElement(
          mw.Provider,
          { value: I },
          C.createElement(
            mO.Provider,
            { value: D },
            C.createElement(
              A ? mM : mC,
              {
                width: null != R ? R : null == O ? void 0 : O.width,
                height: null != B ? B : null == O ? void 0 : O.height,
                className: (0, G.clsx)("recharts-wrapper", c),
                style: (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? mj(Object(r), !0).forEach(function (t) {
                          var n, i, a;
                          (n = e),
                            (i = t),
                            (a = r[t]),
                            (i = (function (e) {
                              var t = (function (e, t) {
                                if ("object" != typeof e || !e) return e;
                                var r = e[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                  var n = r.call(e, t || "default");
                                  if ("object" != typeof n) return n;
                                  throw TypeError(
                                    "@@toPrimitive must return a primitive value."
                                  );
                                }
                                return ("string" === t ? String : Number)(e);
                              })(e, "string");
                              return "symbol" == typeof t ? t : t + "";
                            })(i)) in n
                              ? Object.defineProperty(n, i, {
                                  value: a,
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0,
                                })
                              : (n[i] = a);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(r)
                        )
                      : mj(Object(r)).forEach(function (t) {
                          Object.defineProperty(
                            e,
                            t,
                            Object.getOwnPropertyDescriptor(r, t)
                          );
                        });
                  }
                  return e;
                })(
                  {
                    position: "relative",
                    cursor: "default",
                    width: R,
                    height: B,
                  },
                  O
                ),
                onClick: F,
                onContextMenu: Y,
                onDoubleClick: X,
                onFocus: W,
                onBlur: q,
                onKeyDown: V,
                onMouseDown: Z,
                onMouseEnter: U,
                onMouseLeave: K,
                onMouseMove: H,
                onMouseUp: Q,
                onTouchEnd: et,
                onTouchMove: ee,
                onTouchStart: J,
                ref: $,
              },
              C.createElement(mP, null),
              u
            )
          )
        );
      });
    function mD(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
      return n;
    }
    var mN = (0, C.createContext)(void 0),
      mz = (e) => {
        var t,
          r = e.children,
          n = ((function (e) {
            if (Array.isArray(e)) return e;
          })((t = (0, C.useState)("".concat(ew("recharts"), "-clip")))) ||
            (function (e, t) {
              var r =
                null == e
                  ? null
                  : ("u" > typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
              if (null != r) {
                var n,
                  i,
                  a,
                  o,
                  l = [],
                  u = !0,
                  c = !1;
                try {
                  (a = (r = r.call(e)).next), !1;
                  for (
                    ;
                    !(u = (n = a.call(r)).done) &&
                    (l.push(n.value), 1 !== l.length);
                    u = !0
                  );
                } catch (e) {
                  (c = !0), (i = e);
                } finally {
                  try {
                    if (
                      !u &&
                      null != r.return &&
                      ((o = r.return()), Object(o) !== o)
                    )
                      return;
                  } finally {
                    if (c) throw i;
                  }
                }
                return l;
              }
            })(t, 1) ||
            (function (e, t) {
              if (e) {
                if ("string" == typeof e) return mD(e, 1);
                var r = {}.toString.call(e).slice(8, -1);
                return (
                  "Object" === r && e.constructor && (r = e.constructor.name),
                  "Map" === r || "Set" === r
                    ? Array.from(e)
                    : "Arguments" === r ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                    ? mD(e, 1)
                    : void 0
                );
              }
            })(t, 1) ||
            (function () {
              throw TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })())[0],
          i = tv(pd);
        if (null == i) return null;
        var a = i.x,
          o = i.y,
          l = i.width,
          u = i.height;
        return C.createElement(
          mN.Provider,
          { value: n },
          C.createElement(
            "defs",
            null,
            C.createElement(
              "clipPath",
              { id: n },
              C.createElement("rect", { x: a, y: o, height: u, width: l })
            )
          ),
          r
        );
      },
      mL = [
        "width",
        "height",
        "responsive",
        "children",
        "className",
        "style",
        "compact",
        "title",
        "desc",
      ],
      mR = (0, C.forwardRef)((e, t) => {
        var r = e.width,
          n = e.height,
          i = e.responsive,
          a = e.children,
          o = e.className,
          l = e.style,
          u = e.compact,
          c = e.title,
          s = e.desc,
          f = er(
            (function (e, t) {
              if (null == e) return {};
              var r,
                n,
                i = (function (e, t) {
                  if (null == e) return {};
                  var r = {};
                  for (var n in e)
                    if ({}.hasOwnProperty.call(e, n)) {
                      if (-1 !== t.indexOf(n)) continue;
                      r[n] = e[n];
                    }
                  return r;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (n = 0; n < a.length; n++)
                  (r = a[n]),
                    -1 === t.indexOf(r) &&
                      {}.propertyIsEnumerable.call(e, r) &&
                      (i[r] = e[r]);
              }
              return i;
            })(e, mL)
          );
        return u
          ? C.createElement(
              C.Fragment,
              null,
              C.createElement(iU, { width: r, height: n }),
              C.createElement(md, { otherAttributes: f, title: c, desc: s }, a)
            )
          : C.createElement(
              mT,
              {
                className: o,
                style: l,
                width: r,
                height: n,
                responsive: null != i && i,
                onClick: e.onClick,
                onMouseLeave: e.onMouseLeave,
                onMouseEnter: e.onMouseEnter,
                onMouseMove: e.onMouseMove,
                onMouseDown: e.onMouseDown,
                onMouseUp: e.onMouseUp,
                onContextMenu: e.onContextMenu,
                onDoubleClick: e.onDoubleClick,
                onTouchStart: e.onTouchStart,
                onTouchMove: e.onTouchMove,
                onTouchEnd: e.onTouchEnd,
              },
              C.createElement(
                md,
                { otherAttributes: f, title: c, desc: s, ref: t },
                C.createElement(mz, null, a)
              )
            );
      });
    function mB() {
      return (mB = Object.assign.bind()).apply(null, arguments);
    }
    function m$(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    var mF = (function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? m$(Object(r), !0).forEach(function (t) {
                var n, i, a;
                (n = e),
                  (i = t),
                  (a = r[t]),
                  (i = (function (e) {
                    var t = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var r = e[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : t + "";
                  })(i)) in n
                    ? Object.defineProperty(n, i, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[i] = a);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : m$(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      })(
        {
          accessibilityLayer: !0,
          barCategoryGap: "10%",
          barGap: 4,
          layout: "horizontal",
          margin: { top: 5, right: 5, bottom: 5, left: 5 },
          responsive: !1,
          reverseStackOrder: !1,
          stackOffset: "none",
          syncMethod: "index",
        },
        vG
      ),
      mU = (0, C.forwardRef)(function (e, t) {
        var r,
          n = eG(e.categoricalChartProps, mF),
          i = e.chartName,
          a = e.defaultTooltipEventType,
          o = e.validateTooltipEventTypes,
          l = e.tooltipPayloadSearcher,
          u = e.categoricalChartProps;
        return C.createElement(
          v4,
          {
            preloadedState: {
              options: {
                chartName: i,
                defaultTooltipEventType: a,
                validateTooltipEventTypes: o,
                tooltipPayloadSearcher: l,
                eventEmitter: void 0,
              },
            },
            reduxStoreName: null != (r = u.id) ? r : i,
          },
          C.createElement(v8, { chartData: u.data }),
          C.createElement(v7, { layout: n.layout, margin: n.margin }),
          C.createElement(me, {
            throttleDelay: n.throttleDelay,
            throttledEvents: n.throttledEvents,
          }),
          C.createElement(v9, {
            baseValue: n.baseValue,
            accessibilityLayer: n.accessibilityLayer,
            barCategoryGap: n.barCategoryGap,
            maxBarSize: n.maxBarSize,
            stackOffset: n.stackOffset,
            barGap: n.barGap,
            barSize: n.barSize,
            syncId: n.syncId,
            syncMethod: n.syncMethod,
            className: n.className,
            reverseStackOrder: n.reverseStackOrder,
          }),
          C.createElement(mR, mB({}, n, { ref: t }))
        );
      }),
      mK = ["axis", "item"],
      mH = (0, C.forwardRef)((e, t) =>
        C.createElement(mU, {
          chartName: "BarChart",
          defaultTooltipEventType: "axis",
          validateTooltipEventTypes: mK,
          tooltipPayloadSearcher: yF,
          categoricalChartProps: e,
          ref: t,
        })
      ),
      mW = function (e) {
        var t = e.width,
          r = e.height,
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          i = ((((n % 180) + 180) % 180) * Math.PI) / 180,
          a = Math.atan(r / t);
        return Math.abs(
          i > a && i < Math.PI - a ? r / Math.sin(i) : t / Math.cos(i)
        );
      };
    function mq(e, t) {
      if (t < 1) return [];
      if (1 === t) return e;
      for (var r = [], n = 0; n < e.length; n += t) {
        var i = e[n];
        void 0 !== i && r.push(i);
      }
      return r;
    }
    function mV(e, t, r, n, i) {
      if (e * t < e * n || e * t > e * i) return !1;
      var a = r();
      return e * (t - (e * a) / 2 - n) >= 0 && e * (t + (e * a) / 2 - i) <= 0;
    }
    function mY(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function mX(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? mY(Object(r), !0).forEach(function (t) {
              var n, i, a;
              (n = e),
                (i = t),
                (a = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value."
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = a);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : mY(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    var mG = [
      "axisLine",
      "width",
      "height",
      "className",
      "hide",
      "ticks",
      "axisType",
      "axisId",
    ];
    function mZ(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          var r =
            null == e
              ? null
              : ("u" > typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
          if (null != r) {
            var n,
              i,
              a,
              o,
              l = [],
              u = !0,
              c = !1;
            try {
              if (((a = (r = r.call(e)).next), 0 === t)) {
                if (Object(r) !== r) return;
                u = !1;
              } else
                for (
                  ;
                  !(u = (n = a.call(r)).done) &&
                  (l.push(n.value), l.length !== t);
                  u = !0
                );
            } catch (e) {
              (c = !0), (i = e);
            } finally {
              try {
                if (
                  !u &&
                  null != r.return &&
                  ((o = r.return()), Object(o) !== o)
                )
                  return;
              } finally {
                if (c) throw i;
              }
            }
            return l;
          }
        })(e, t) ||
        (function (e, t) {
          if (e) {
            if ("string" == typeof e) return mQ(e, t);
            var r = {}.toString.call(e).slice(8, -1);
            return (
              "Object" === r && e.constructor && (r = e.constructor.name),
              "Map" === r || "Set" === r
                ? Array.from(e)
                : "Arguments" === r ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                ? mQ(e, t)
                : void 0
            );
          }
        })(e, t) ||
        (function () {
          throw TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function mQ(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
      return n;
    }
    function mJ() {
      return (mJ = Object.assign.bind()).apply(null, arguments);
    }
    function m0(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function m1(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? m0(Object(r), !0).forEach(function (t) {
              var n, i, a;
              (n = e),
                (i = t),
                (a = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value."
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = a);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : m0(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    var m2 = {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      viewBox: { x: 0, y: 0, width: 0, height: 0 },
      orientation: "bottom",
      ticks: [],
      stroke: "#666",
      tickLine: !0,
      axisLine: !0,
      tick: !0,
      mirror: !1,
      minTickGap: 5,
      tickSize: 6,
      tickMargin: 2,
      interval: "preserveEnd",
      zIndex: iK.axis,
    };
    function m3(e) {
      var t = e.x,
        r = e.y,
        n = e.width,
        i = e.height,
        a = e.orientation,
        o = e.mirror,
        l = e.axisLine,
        u = e.otherSvgProps;
      if (!l) return null;
      var c = m1(m1(m1({}, u), er(l)), {}, { fill: "none" });
      if ("top" === a || "bottom" === a) {
        var s = +(("top" === a && !o) || ("bottom" === a && o));
        c = m1(
          m1({}, c),
          {},
          { x1: t, y1: r + s * i, x2: t + n, y2: r + s * i }
        );
      } else {
        var f = +(("left" === a && !o) || ("right" === a && o));
        c = m1(
          m1({}, c),
          {},
          { x1: t + f * n, y1: r, x2: t + f * n, y2: r + i }
        );
      }
      return C.createElement(
        "line",
        mJ({}, c, {
          className: (0, G.clsx)(
            "recharts-cartesian-axis-line",
            ed(l, "className")
          ),
        })
      );
    }
    function m5(e) {
      var t,
        r = e.option,
        n = e.tickProps,
        i = e.value,
        a = (0, G.clsx)(n.className, "recharts-cartesian-axis-tick-value");
      if (C.isValidElement(r))
        t = C.cloneElement(r, m1(m1({}, n), {}, { className: a }));
      else if ("function" == typeof r)
        t = r(m1(m1({}, n), {}, { className: a }));
      else {
        var o = "recharts-cartesian-axis-tick-value";
        "boolean" != typeof r &&
          (o = (0, G.clsx)(
            o,
            r &&
              "object" == typeof r &&
              "className" in r &&
              "string" == typeof r.className
              ? r.className
              : ""
          )),
          (t = C.createElement(ti, mJ({}, n, { className: o }), i));
      }
      return t;
    }
    function m6(e) {
      var t = e.ticks,
        r = e.axisType,
        n = e.axisId,
        i = td();
      return (
        (0, C.useEffect)(
          () =>
            null == n || null == r
              ? ek
              : (i(
                  v2({
                    ticks: t.map((e) => ({
                      value: e.value,
                      coordinate: e.coordinate,
                      offset: e.offset,
                      index: e.index,
                    })),
                    axisId: n,
                    axisType: r,
                  })
                ),
                () => {
                  i(v3({ axisId: n, axisType: r }));
                }),
          [i, t, n, r]
        ),
        null
      );
    }
    var m4 = (0, C.forwardRef)((e, t) => {
        var r = e.ticks,
          n = e.tick,
          i = e.tickLine,
          a = e.stroke,
          o = e.tickFormatter,
          l = e.unit,
          u = e.padding,
          c = e.tickTextProps,
          s = e.orientation,
          f = e.mirror,
          d = e.x,
          h = e.y,
          p = e.width,
          y = e.height,
          v = e.tickSize,
          m = e.tickMargin,
          g = e.fontSize,
          b = e.letterSpacing,
          x = e.getTicksConfig,
          w = e.events,
          O = e.axisType,
          j = e.axisId,
          A = (function (e, t, r) {
            var n,
              i,
              a,
              o,
              l,
              u,
              c = e.tick,
              s = e.ticks,
              f = e.viewBox,
              d = e.minTickGap,
              h = e.orientation,
              p = e.interval,
              y = e.tickFormatter,
              v = e.unit,
              m = e.angle;
            if (!s || !s.length || !c) return [];
            if (eg(p) || eM.isSsr)
              return null != (u = mq(s, (eg(p) ? p : 0) + 1)) ? u : [];
            var g = "top" === h || "bottom" === h ? "width" : "height",
              b =
                v && "width" === g
                  ? ez(v, { fontSize: t, letterSpacing: r })
                  : { width: 0, height: 0 },
              x = (e, n) => {
                var i,
                  a = "function" == typeof y ? y(e.value, n) : e.value;
                return "width" === g
                  ? ((i = ez(a, { fontSize: t, letterSpacing: r })),
                    mW(
                      { width: i.width + b.width, height: i.height + b.height },
                      m
                    ))
                  : ez(a, { fontSize: t, letterSpacing: r })[g];
              },
              w = s[0],
              O = s[1],
              j =
                s.length >= 2 && null != w && null != O
                  ? ey(O.coordinate - w.coordinate)
                  : 1,
              A =
                ((n = "width" === g),
                (i = f.x),
                (a = f.y),
                (o = f.width),
                (l = f.height),
                1 === j
                  ? { start: n ? i : a, end: n ? i + o : a + l }
                  : { start: n ? i + o : a + l, end: n ? i : a });
            return "equidistantPreserveStart" === p
              ? (function (e, t, r, n, i) {
                  for (
                    var a,
                      o = (n || []).slice(),
                      l = t.start,
                      u = t.end,
                      c = 0,
                      s = 1,
                      f = l;
                    s <= o.length;

                  )
                    if (
                      (a = (function () {
                        var t,
                          a = null == n ? void 0 : n[c];
                        if (void 0 === a) return { v: mq(n, s) };
                        var o = c,
                          d = () => (void 0 === t && (t = r(a, o)), t),
                          h = a.coordinate,
                          p = 0 === c || mV(e, h, d, f, u);
                        p || ((c = 0), (f = l), (s += 1)),
                          p && ((f = h + e * (d() / 2 + i)), (c += s));
                      })())
                    )
                      return a.v;
                  return [];
                })(j, A, x, s, d)
              : "equidistantPreserveEnd" === p
              ? (function (e, t, r, n, i) {
                  var a = (n || []).slice().length;
                  if (0 === a) return [];
                  for (var o = t.start, l = t.end, u = 1; u <= a; u++) {
                    for (
                      var c, s = (a - 1) % u, f = o, d = !0, h = s;
                      h < a &&
                      (0 ===
                        (c = (function () {
                          var t,
                            a = n[h];
                          if (null == a) return 0;
                          var o = h,
                            u = () => (void 0 === t && (t = r(a, o)), t),
                            c = a.coordinate,
                            p = h === s || mV(e, c, u, f, l);
                          if (!p) return (d = !1), 1;
                          p && (f = c + e * (u() / 2 + i));
                        })()) ||
                        1 !== c);
                      h += u
                    );
                    if (d) {
                      for (var p = [], y = s; y < a; y += u) {
                        var v = n[y];
                        null != v && p.push(v);
                      }
                      return p;
                    }
                  }
                  return [];
                })(j, A, x, s, d)
              : ("preserveStart" === p || "preserveStartEnd" === p
                  ? (function (e, t, r, n, i, a) {
                      var o = (n || []).slice(),
                        l = o.length,
                        u = t.start,
                        c = t.end;
                      if (a) {
                        var s = n[l - 1];
                        if (null != s) {
                          var f = r(s, l - 1),
                            d = e * (s.coordinate + (e * f) / 2 - c);
                          (o[l - 1] = s =
                            mX(
                              mX({}, s),
                              {},
                              {
                                tickCoord:
                                  d > 0 ? s.coordinate - d * e : s.coordinate,
                              }
                            )),
                            null != s.tickCoord &&
                              mV(e, s.tickCoord, () => f, u, c) &&
                              ((c = s.tickCoord - e * (f / 2 + i)),
                              (o[l - 1] = mX(mX({}, s), {}, { isShow: !0 })));
                        }
                      }
                      for (
                        var h = a ? l - 1 : l,
                          p = function (t) {
                            var n,
                              a = o[t];
                            if (null == a) return 1;
                            var l = a,
                              s = () => (void 0 === n && (n = r(a, t)), n);
                            if (0 === t) {
                              var f = e * (l.coordinate - (e * s()) / 2 - u);
                              o[t] = l = mX(
                                mX({}, l),
                                {},
                                {
                                  tickCoord:
                                    f < 0 ? l.coordinate - f * e : l.coordinate,
                                }
                              );
                            } else
                              o[t] = l = mX(
                                mX({}, l),
                                {},
                                { tickCoord: l.coordinate }
                              );
                            null != l.tickCoord &&
                              mV(e, l.tickCoord, s, u, c) &&
                              ((u = l.tickCoord + e * (s() / 2 + i)),
                              (o[t] = mX(mX({}, l), {}, { isShow: !0 })));
                          },
                          y = 0;
                        y < h;
                        y++
                      )
                        if (p(y)) continue;
                      return o;
                    })(j, A, x, s, d, "preserveStartEnd" === p)
                  : (function (e, t, r, n, i) {
                      for (
                        var a = (n || []).slice(),
                          o = a.length,
                          l = t.start,
                          u = t.end,
                          c = function (t) {
                            var n,
                              c = a[t];
                            if (null == c) return 1;
                            var s = c,
                              f = () => (void 0 === n && (n = r(c, t)), n);
                            if (t === o - 1) {
                              var d = e * (s.coordinate + (e * f()) / 2 - u);
                              a[t] = s = mX(
                                mX({}, s),
                                {},
                                {
                                  tickCoord:
                                    d > 0 ? s.coordinate - d * e : s.coordinate,
                                }
                              );
                            } else
                              a[t] = s = mX(
                                mX({}, s),
                                {},
                                { tickCoord: s.coordinate }
                              );
                            null != s.tickCoord &&
                              mV(e, s.tickCoord, f, l, u) &&
                              ((u = s.tickCoord - e * (f() / 2 + i)),
                              (a[t] = mX(mX({}, s), {}, { isShow: !0 })));
                          },
                          s = o - 1;
                        s >= 0;
                        s--
                      )
                        if (c(s)) continue;
                      return a;
                    })(j, A, x, s, d)
                ).filter((e) => e.isShow);
          })(m1(m1({}, x), {}, { ticks: void 0 === r ? [] : r }), g, b),
          E = er(x),
          S = en(n),
          P = e8(E.textAnchor)
            ? E.textAnchor
            : (function (e, t) {
                switch (e) {
                  case "left":
                    return t ? "start" : "end";
                  case "right":
                    return t ? "end" : "start";
                  default:
                    return "middle";
                }
              })(s, f),
          k = (function (e, t) {
            switch (e) {
              case "left":
              case "right":
                return "middle";
              case "top":
                return t ? "start" : "end";
              default:
                return t ? "end" : "start";
            }
          })(s, f),
          M = {};
        "object" == typeof i && (M = i);
        var I = m1(m1({}, E), {}, { fill: "none" }, M),
          _ = A.map((e) =>
            m1(
              { entry: e },
              (function (e, t, r, n, i, a, o, l, u) {
                var c,
                  s,
                  f,
                  d,
                  h,
                  p,
                  y = l ? -1 : 1,
                  v = e.tickSize || o,
                  m = eg(e.tickCoord) ? e.tickCoord : e.coordinate;
                switch (a) {
                  case "top":
                    (c = s = e.coordinate),
                      (p = (f = (d = r + !l * i) - y * v) - y * u),
                      (h = m);
                    break;
                  case "left":
                    (f = d = e.coordinate),
                      (h = (c = (s = t + !l * n) - y * v) - y * u),
                      (p = m);
                    break;
                  case "right":
                    (f = d = e.coordinate),
                      (h = (c = (s = t + l * n) + y * v) + y * u),
                      (p = m);
                    break;
                  default:
                    (c = s = e.coordinate),
                      (p = (f = (d = r + l * i) + y * v) + y * u),
                      (h = m);
                }
                return {
                  line: { x1: c, y1: f, x2: s, y2: d },
                  tick: { x: h, y: p },
                };
              })(e, d, h, p, y, s, v, f, m)
            )
          ),
          T = _.map((e) => {
            var t = e.entry,
              r = e.line;
            return C.createElement(
              el,
              {
                className: "recharts-cartesian-axis-tick",
                key: "tick-"
                  .concat(t.value, "-")
                  .concat(t.coordinate, "-")
                  .concat(t.tickCoord),
              },
              i &&
                C.createElement(
                  "line",
                  mJ({}, I, r, {
                    className: (0, G.clsx)(
                      "recharts-cartesian-axis-tick-line",
                      ed(i, "className")
                    ),
                  })
                )
            );
          }),
          D = _.map((e, t) => {
            var r,
              i,
              s = e.entry,
              f = e.tick,
              d = m1(
                m1(
                  m1(
                    m1({ verticalAnchor: k }, E),
                    {},
                    { textAnchor: P, stroke: "none", fill: a },
                    f
                  ),
                  {},
                  {
                    index: t,
                    payload: s,
                    visibleTicksCount: A.length,
                    tickFormatter: o,
                    padding: u,
                  },
                  c
                ),
                {},
                {
                  angle:
                    null !=
                    (r =
                      null != (i = null == c ? void 0 : c.angle) ? i : E.angle)
                      ? r
                      : 0,
                }
              ),
              h = m1(m1({}, d), S);
            return C.createElement(
              el,
              mJ(
                {
                  className: "recharts-cartesian-axis-tick-label",
                  key: "tick-label-"
                    .concat(s.value, "-")
                    .concat(s.coordinate, "-")
                    .concat(s.tickCoord),
                },
                aY(w, s, t)
              ),
              n &&
                C.createElement(m5, {
                  option: n,
                  tickProps: h,
                  value: ""
                    .concat("function" == typeof o ? o(s.value, t) : s.value)
                    .concat(l || ""),
                })
            );
          });
        return C.createElement(
          "g",
          {
            className: "recharts-cartesian-axis-ticks recharts-".concat(
              O,
              "-ticks"
            ),
          },
          C.createElement(m6, { ticks: A, axisId: j, axisType: O }),
          D.length > 0 &&
            C.createElement(
              ad,
              { zIndex: iK.label },
              C.createElement(
                "g",
                {
                  className:
                    "recharts-cartesian-axis-tick-labels recharts-".concat(
                      O,
                      "-tick-labels"
                    ),
                  ref: t,
                },
                D
              )
            ),
          T.length > 0 &&
            C.createElement(
              "g",
              {
                className:
                  "recharts-cartesian-axis-tick-lines recharts-".concat(
                    O,
                    "-tick-lines"
                  ),
              },
              T
            )
        );
      }),
      m8 = (0, C.forwardRef)((e, t) => {
        var r = e.axisLine,
          n = e.width,
          i = e.height,
          a = e.className,
          o = e.hide,
          l = e.ticks,
          u = e.axisType,
          c = e.axisId,
          s = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = (function (e, t) {
                if (null == e) return {};
                var r = {};
                for (var n in e)
                  if ({}.hasOwnProperty.call(e, n)) {
                    if (-1 !== t.indexOf(n)) continue;
                    r[n] = e[n];
                  }
                return r;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (n = 0; n < a.length; n++)
                (r = a[n]),
                  -1 === t.indexOf(r) &&
                    {}.propertyIsEnumerable.call(e, r) &&
                    (i[r] = e[r]);
            }
            return i;
          })(e, mG),
          f = mZ((0, C.useState)(""), 2),
          d = f[0],
          h = f[1],
          p = mZ((0, C.useState)(""), 2),
          y = p[0],
          v = p[1],
          m = (0, C.useRef)(null);
        (0, C.useImperativeHandle)(t, () => ({
          getCalculatedWidth: () => {
            var t;
            return ((e) => {
              var t = e.ticks,
                r = e.label,
                n = e.labelGapWithTick,
                i = e.tickSize,
                a = e.tickMargin,
                o = 0;
              if (t) {
                Array.from(t).forEach((e) => {
                  if (e) {
                    var t = e.getBoundingClientRect();
                    t.width > o && (o = t.width);
                  }
                });
                var l = r ? r.getBoundingClientRect().width : 0;
                return Math.round(
                  o +
                    ((void 0 === i ? 0 : i) + (void 0 === a ? 0 : a)) +
                    l +
                    (r ? (void 0 === n ? 5 : n) : 0)
                );
              }
              return 0;
            })({
              ticks: m.current,
              label: null == (t = e.labelRef) ? void 0 : t.current,
              labelGapWithTick: 5,
              tickSize: e.tickSize,
              tickMargin: e.tickMargin,
            });
          },
        }));
        var g = (0, C.useCallback)(
          (e) => {
            if (e) {
              var t = e.getElementsByClassName(
                "recharts-cartesian-axis-tick-value"
              );
              m.current = t;
              var r = t[0];
              if (r) {
                var n = window.getComputedStyle(r),
                  i = n.fontSize,
                  a = n.letterSpacing;
                (i !== d || a !== y) && (h(i), v(a));
              }
            }
          },
          [d, y]
        );
        return o || (null != n && n <= 0) || (null != i && i <= 0)
          ? null
          : C.createElement(
              ad,
              { zIndex: e.zIndex },
              C.createElement(
                el,
                { className: (0, G.clsx)("recharts-cartesian-axis", a) },
                C.createElement(m3, {
                  x: e.x,
                  y: e.y,
                  width: n,
                  height: i,
                  orientation: e.orientation,
                  mirror: e.mirror,
                  axisLine: r,
                  otherSvgProps: er(e),
                }),
                C.createElement(m4, {
                  ref: g,
                  axisType: u,
                  events: s,
                  fontSize: d,
                  getTicksConfig: e,
                  height: e.height,
                  letterSpacing: y,
                  mirror: e.mirror,
                  orientation: e.orientation,
                  padding: e.padding,
                  stroke: e.stroke,
                  tick: e.tick,
                  tickFormatter: e.tickFormatter,
                  tickLine: e.tickLine,
                  tickMargin: e.tickMargin,
                  tickSize: e.tickSize,
                  tickTextProps: e.tickTextProps,
                  ticks: l,
                  unit: e.unit,
                  width: e.width,
                  x: e.x,
                  y: e.y,
                  axisId: c,
                }),
                C.createElement(
                  aO,
                  {
                    x: e.x,
                    y: e.y,
                    width: e.width,
                    height: e.height,
                    lowerWidth: e.width,
                    upperWidth: e.width,
                  },
                  C.createElement(aM, { label: e.label, labelRef: e.labelRef }),
                  e.children
                )
              )
            );
      }),
      m7 = C.forwardRef((e, t) => {
        var r = eG(e, m2);
        return C.createElement(m8, mJ({}, r, { ref: t }));
      });
    m7.displayName = "CartesianAxis";
    var m9 = ["domain", "range"],
      ge = ["domain", "range"];
    function gt(e, t) {
      if (null == e) return {};
      var r,
        n,
        i = (function (e, t) {
          if (null == e) return {};
          var r = {};
          for (var n in e)
            if ({}.hasOwnProperty.call(e, n)) {
              if (-1 !== t.indexOf(n)) continue;
              r[n] = e[n];
            }
          return r;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (n = 0; n < a.length; n++)
          (r = a[n]),
            -1 === t.indexOf(r) &&
              {}.propertyIsEnumerable.call(e, r) &&
              (i[r] = e[r]);
      }
      return i;
    }
    function gr(e, t) {
      return (
        e === t ||
        (!!(Array.isArray(e) && 2 === e.length && Array.isArray(t)) &&
          2 === t.length &&
          e[0] === t[0] &&
          e[1] === t[1])
      );
    }
    var gn = ["type"],
      gi = ["dangerouslySetInnerHTML", "ticks", "scale"],
      ga = ["id", "scale"];
    function go() {
      return (go = Object.assign.bind()).apply(null, arguments);
    }
    function gl(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function gu(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? gl(Object(r), !0).forEach(function (t) {
              var n, i, a;
              (n = e),
                (i = t),
                (a = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value."
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = a);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : gl(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    function gc(e, t) {
      if (null == e) return {};
      var r,
        n,
        i = (function (e, t) {
          if (null == e) return {};
          var r = {};
          for (var n in e)
            if ({}.hasOwnProperty.call(e, n)) {
              if (-1 !== t.indexOf(n)) continue;
              r[n] = e[n];
            }
          return r;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (n = 0; n < a.length; n++)
          (r = a[n]),
            -1 === t.indexOf(r) &&
              {}.propertyIsEnumerable.call(e, r) &&
              (i[r] = e[r]);
      }
      return i;
    }
    function gs(e) {
      var t = td(),
        r = (0, C.useRef)(null),
        n = i$(),
        i = e.type,
        a = gc(e, gn),
        o = iV(n, "xAxis", i),
        l = (0, C.useMemo)(() => {
          if (null != o) return gu(gu({}, a), {}, { type: o });
        }, [a, o]);
      return (
        (0, C.useLayoutEffect)(() => {
          null != l &&
            (null === r.current
              ? t(hi(l))
              : r.current !== l && t(ha({ prev: r.current, next: l })),
            (r.current = l));
        }, [l, t]),
        (0, C.useLayoutEffect)(
          () => () => {
            r.current && (t(ho(r.current)), (r.current = null));
          },
          [t]
        ),
        null
      );
    }
    var gf = (e) => {
        var t = e.xAxisId,
          r = e.className,
          n = tv(id),
          i = ip(),
          a = "xAxis",
          o = tv((e) => d5(e, a, t, i)),
          l = tv((e) => dG(e, t)),
          u = tv((e) => dJ(e, t)),
          c = tv((e) => fj(e, t));
        if (null == l || null == u || null == c) return null;
        e.dangerouslySetInnerHTML, e.ticks, e.scale;
        var s = gc(e, gi);
        c.id, c.scale;
        var f = gc(c, ga);
        return C.createElement(
          m7,
          go({}, s, f, {
            x: u.x,
            y: u.y,
            width: l.width,
            height: l.height,
            className: (0, G.clsx)("recharts-".concat(a, " ").concat(a), r),
            viewBox: n,
            ticks: o,
            axisType: a,
            axisId: t,
          })
        );
      },
      gd = {
        allowDataOverflow: fO.allowDataOverflow,
        allowDecimals: fO.allowDecimals,
        allowDuplicatedCategory: fO.allowDuplicatedCategory,
        angle: fO.angle,
        axisLine: m2.axisLine,
        height: fO.height,
        hide: !1,
        includeHidden: fO.includeHidden,
        interval: fO.interval,
        label: !1,
        minTickGap: fO.minTickGap,
        mirror: fO.mirror,
        orientation: fO.orientation,
        padding: fO.padding,
        reversed: fO.reversed,
        scale: fO.scale,
        tick: fO.tick,
        tickCount: fO.tickCount,
        tickLine: m2.tickLine,
        tickSize: m2.tickSize,
        type: fO.type,
        niceTicks: fO.niceTicks,
        xAxisId: 0,
      },
      gh = C.memo(
        (e) => {
          var t = eG(e, gd);
          return C.createElement(
            C.Fragment,
            null,
            C.createElement(gs, {
              allowDataOverflow: t.allowDataOverflow,
              allowDecimals: t.allowDecimals,
              allowDuplicatedCategory: t.allowDuplicatedCategory,
              angle: t.angle,
              dataKey: t.dataKey,
              domain: t.domain,
              height: t.height,
              hide: t.hide,
              id: t.xAxisId,
              includeHidden: t.includeHidden,
              interval: t.interval,
              minTickGap: t.minTickGap,
              mirror: t.mirror,
              name: t.name,
              orientation: t.orientation,
              padding: t.padding,
              reversed: t.reversed,
              scale: t.scale,
              tick: t.tick,
              tickCount: t.tickCount,
              tickFormatter: t.tickFormatter,
              ticks: t.ticks,
              type: t.type,
              unit: t.unit,
              niceTicks: t.niceTicks,
            }),
            C.createElement(gf, t)
          );
        },
        function (e, t) {
          if (e === t) return !0;
          var r = e.domain,
            n = e.range,
            i = gt(e, m9),
            a = t.domain,
            o = t.range,
            l = gt(t, ge);
          return !!gr(r, a) && !!gr(n, o) && yl(i, l);
        }
      );
    function gp() {
      return (gp = Object.assign.bind()).apply(null, arguments);
    }
    function gy(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function gv(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? gy(Object(r), !0).forEach(function (t) {
              var n, i, a;
              (n = e),
                (i = t),
                (a = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value."
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = a);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : gy(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    function gm(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
      return n;
    }
    function gg(e) {
      return Array.isArray(e) && eb(e[0]) && eb(e[1]) ? e.join(" ~ ") : e;
    }
    gh.displayName = "XAxis";
    var gb = {
        margin: 0,
        padding: 10,
        backgroundColor: "#fff",
        border: "1px solid #ccc",
        whiteSpace: "nowrap",
      },
      gx = { display: "block", paddingTop: 4, paddingBottom: 4, color: "#000" },
      gw = {},
      gO = (e) => {
        var t = e.separator,
          r = void 0 === t ? " : " : t,
          n = e.contentStyle,
          i = e.itemStyle,
          a = e.labelStyle,
          o = e.payload,
          l = e.formatter,
          u = e.itemSorter,
          c = e.wrapperClassName,
          s = e.labelClassName,
          f = e.label,
          d = e.labelFormatter,
          h = e.accessibilityLayer,
          p = gv(gv({}, gb), n),
          y = gv({ margin: 0 }, void 0 === a ? gw : a),
          v = null != f,
          m = v ? f : "",
          g = (0, G.clsx)("recharts-default-tooltip", c),
          b = (0, G.clsx)("recharts-tooltip-label", s);
        return (
          v && d && null != o && (m = d(f, o)),
          C.createElement(
            "div",
            gp(
              { className: g, style: p },
              void 0 !== h && h
                ? { role: "status", "aria-live": "assertive" }
                : {}
            ),
            C.createElement(
              "p",
              { className: b, style: y },
              C.isValidElement(m) ? m : "".concat(m)
            ),
            (() => {
              if (o && o.length) {
                var e = (null == u ? o : nF(o, u)).map((e, t) => {
                  if (!e || "none" === e.type) return null;
                  var n = e.formatter || l || gg,
                    a = e.value,
                    u = e.name,
                    c = a,
                    s = u,
                    f = n(a, u, e, t, o);
                  if (Array.isArray(f)) {
                    var d =
                      (function (e) {
                        if (Array.isArray(e)) return e;
                      })(f) ||
                      (function (e, t) {
                        var r =
                          null == e
                            ? null
                            : ("u" > typeof Symbol && e[Symbol.iterator]) ||
                              e["@@iterator"];
                        if (null != r) {
                          var n,
                            i,
                            a,
                            o,
                            l = [],
                            u = !0,
                            c = !1;
                          try {
                            (a = (r = r.call(e)).next), !1;
                            for (
                              ;
                              !(u = (n = a.call(r)).done) &&
                              (l.push(n.value), 2 !== l.length);
                              u = !0
                            );
                          } catch (e) {
                            (c = !0), (i = e);
                          } finally {
                            try {
                              if (
                                !u &&
                                null != r.return &&
                                ((o = r.return()), Object(o) !== o)
                              )
                                return;
                            } finally {
                              if (c) throw i;
                            }
                          }
                          return l;
                        }
                      })(f, 2) ||
                      (function (e, t) {
                        if (e) {
                          if ("string" == typeof e) return gm(e, 2);
                          var r = {}.toString.call(e).slice(8, -1);
                          return (
                            "Object" === r &&
                              e.constructor &&
                              (r = e.constructor.name),
                            "Map" === r || "Set" === r
                              ? Array.from(e)
                              : "Arguments" === r ||
                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                  r
                                )
                              ? gm(e, 2)
                              : void 0
                          );
                        }
                      })(f, 2) ||
                      (function () {
                        throw TypeError(
                          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                        );
                      })();
                    (c = d[0]), (s = d[1]);
                  } else {
                    if (null == f) return null;
                    c = f;
                  }
                  var h = gv(gv({}, gx), {}, { color: e.color || gx.color }, i);
                  return C.createElement(
                    "li",
                    {
                      className: "recharts-tooltip-item",
                      key: "tooltip-item-".concat(t),
                      style: h,
                    },
                    eb(s)
                      ? C.createElement(
                          "span",
                          { className: "recharts-tooltip-item-name" },
                          s
                        )
                      : null,
                    eb(s)
                      ? C.createElement(
                          "span",
                          { className: "recharts-tooltip-item-separator" },
                          r
                        )
                      : null,
                    C.createElement(
                      "span",
                      { className: "recharts-tooltip-item-value" },
                      c
                    ),
                    C.createElement(
                      "span",
                      { className: "recharts-tooltip-item-unit" },
                      e.unit || ""
                    )
                  );
                });
                return C.createElement(
                  "ul",
                  {
                    className: "recharts-tooltip-item-list",
                    style: { padding: 0, margin: 0 },
                  },
                  e
                );
              }
              return null;
            })()
          )
        );
      },
      gj = "recharts-tooltip-wrapper",
      gA = { visibility: "hidden" };
    function gE(e) {
      var t = e.allowEscapeViewBox,
        r = e.coordinate,
        n = e.key,
        i = e.offset,
        a = e.position,
        o = e.reverseDirection,
        l = e.tooltipDimension,
        u = e.viewBox,
        c = e.viewBoxDimension;
      if (a && eg(a[n])) return a[n];
      var s = r[n] - l - (i > 0 ? i : 0),
        f = r[n] + i;
      if (t[n]) return o[n] ? s : f;
      var d = u[n];
      return null == d
        ? 0
        : o[n]
        ? s < d
          ? Math.max(f, d)
          : Math.max(s, d)
        : null == c
        ? 0
        : f + l > d + c
        ? Math.max(s, d)
        : Math.max(f, d);
    }
    function gS(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function gP(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? gS(Object(r), !0).forEach(function (t) {
              var n, i, a;
              (n = e),
                (i = t),
                (a = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value."
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = a);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : gS(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    function gk(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
      return n;
    }
    var gM = C.memo(function (e) {
      var t,
        r,
        n,
        i,
        a,
        o,
        l,
        u,
        c,
        s,
        f,
        d,
        h,
        p,
        y,
        v,
        m,
        g,
        b,
        x,
        w,
        O,
        j,
        A,
        E,
        S,
        P,
        k = a3(),
        M =
          (function (e) {
            if (Array.isArray(e)) return e;
          })(
            (w = C.useState(() => ({
              dismissed: !1,
              dismissedAtCoordinate: { x: 0, y: 0 },
            })))
          ) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ("u" > typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != r) {
              var n,
                i,
                a,
                o,
                l = [],
                u = !0,
                c = !1;
              try {
                (a = (r = r.call(e)).next), !1;
                for (
                  ;
                  !(u = (n = a.call(r)).done) &&
                  (l.push(n.value), 2 !== l.length);
                  u = !0
                );
              } catch (e) {
                (c = !0), (i = e);
              } finally {
                try {
                  if (
                    !u &&
                    null != r.return &&
                    ((o = r.return()), Object(o) !== o)
                  )
                    return;
                } finally {
                  if (c) throw i;
                }
              }
              return l;
            }
          })(w, 2) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return gk(e, 2);
              var r = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === r && e.constructor && (r = e.constructor.name),
                "Map" === r || "Set" === r
                  ? Array.from(e)
                  : "Arguments" === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                  ? gk(e, 2)
                  : void 0
              );
            }
          })(w, 2) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })(),
        I = M[0],
        _ = M[1];
      C.useEffect(() => {
        var t = (t) => {
          if ("Escape" === t.key) {
            var r, n, i, a;
            _({
              dismissed: !0,
              dismissedAtCoordinate: {
                x:
                  null != (r = null == (n = e.coordinate) ? void 0 : n.x)
                    ? r
                    : 0,
                y:
                  null != (i = null == (a = e.coordinate) ? void 0 : a.y)
                    ? i
                    : 0,
              },
            });
          }
        };
        return (
          document.addEventListener("keydown", t),
          () => {
            document.removeEventListener("keydown", t);
          }
        );
      }, [
        null == (O = e.coordinate) ? void 0 : O.x,
        null == (j = e.coordinate) ? void 0 : j.y,
      ]),
        I.dismissed &&
          ((null != (A = null == (E = e.coordinate) ? void 0 : E.x) ? A : 0) !==
            I.dismissedAtCoordinate.x ||
            (null != (S = null == (P = e.coordinate) ? void 0 : P.y)
              ? S
              : 0) !== I.dismissedAtCoordinate.y) &&
          _(gP(gP({}, I), {}, { dismissed: !1 }));
      var T =
          ((d = (t = {
            allowEscapeViewBox: e.allowEscapeViewBox,
            coordinate: e.coordinate,
            offsetLeft: "number" == typeof e.offset ? e.offset : e.offset.x,
            offsetTop: "number" == typeof e.offset ? e.offset : e.offset.y,
            position: e.position,
            reverseDirection: e.reverseDirection,
            tooltipBox: {
              height: e.lastBoundingBox.height,
              width: e.lastBoundingBox.width,
            },
            useTranslate3d: e.useTranslate3d,
            viewBox: e.viewBox,
          }).allowEscapeViewBox),
          (h = t.coordinate),
          (p = t.offsetTop),
          (y = t.offsetLeft),
          (v = t.position),
          (m = t.reverseDirection),
          (g = t.tooltipBox),
          (b = t.useTranslate3d),
          (x = t.viewBox),
          g.height > 0 && g.width > 0 && h
            ? ((n = (r = {
                translateX: (s = gE({
                  allowEscapeViewBox: d,
                  coordinate: h,
                  key: "x",
                  offset: y,
                  position: v,
                  reverseDirection: m,
                  tooltipDimension: g.width,
                  viewBox: x,
                  viewBoxDimension: x.width,
                })),
                translateY: (f = gE({
                  allowEscapeViewBox: d,
                  coordinate: h,
                  key: "y",
                  offset: p,
                  position: v,
                  reverseDirection: m,
                  tooltipDimension: g.height,
                  viewBox: x,
                  viewBoxDimension: x.height,
                })),
                useTranslate3d: b,
              }).translateX),
              (i = r.translateY),
              (c = {
                transform: r.useTranslate3d
                  ? "translate3d(".concat(n, "px, ").concat(i, "px, 0)")
                  : "translate(".concat(n, "px, ").concat(i, "px)"),
              }))
            : (c = gA),
          {
            cssProperties: c,
            cssClasses:
              ((o = (a = { translateX: s, translateY: f, coordinate: h })
                .coordinate),
              (l = a.translateX),
              (u = a.translateY),
              (0, G.clsx)(gj, {
                ["".concat(gj, "-right")]: eg(l) && o && eg(o.x) && l >= o.x,
                ["".concat(gj, "-left")]: eg(l) && o && eg(o.x) && l < o.x,
                ["".concat(gj, "-bottom")]: eg(u) && o && eg(o.y) && u >= o.y,
                ["".concat(gj, "-top")]: eg(u) && o && eg(o.y) && u < o.y,
              })),
          }),
        D = T.cssClasses,
        N = T.cssProperties,
        z = e.hasPortalFromProps
          ? {}
          : gP(
              gP(
                {
                  transition: (function (e) {
                    if (
                      (!e.prefersReducedMotion ||
                        "auto" !== e.isAnimationActive) &&
                      e.isAnimationActive &&
                      e.active
                    ) {
                      var t =
                        "string" == typeof e.animationEasing
                          ? e.animationEasing
                          : "ease";
                      return "transform "
                        .concat(e.animationDuration, "ms ")
                        .concat(t);
                    }
                  })({
                    prefersReducedMotion: k,
                    isAnimationActive: e.isAnimationActive,
                    active: e.active,
                    animationDuration: e.animationDuration,
                    animationEasing: e.animationEasing,
                  }),
                },
                N
              ),
              {},
              { pointerEvents: "none", position: "absolute", top: 0, left: 0 }
            ),
        L = gP(
          gP({}, z),
          {},
          {
            visibility:
              !I.dismissed && e.active && e.hasPayload ? "visible" : "hidden",
          },
          e.wrapperStyle
        );
      return C.createElement(
        "div",
        {
          xmlns: "http://www.w3.org/1999/xhtml",
          tabIndex: -1,
          className: D,
          style: L,
          ref: e.innerRef,
        },
        e.children
      );
    });
    function gI(e) {
      return e;
    }
    function g_(e) {
      return null == e || ("object" != typeof e && "function" != typeof e);
    }
    function gC(e, t, r, n) {
      if (t === e) return !0;
      switch (typeof t) {
        case "object":
          return (function (e, t, r, n) {
            if (null == t) return !0;
            if (Array.isArray(t)) return gT(e, t, r, n);
            if (t instanceof Map) {
              var i,
                a,
                o,
                l,
                u = e,
                c = t,
                s = r,
                f = n;
              if (0 === c.size) return !0;
              if (!(u instanceof Map)) return !1;
              for (let [e, t] of c.entries())
                if (!1 === s(u.get(e), t, e, u, c, f)) return !1;
              return !0;
            }
            if (t instanceof Set) {
              return (
                (i = e),
                (a = t),
                (o = r),
                (l = n),
                0 === a.size || (i instanceof Set && gT([...i], [...a], o, l))
              );
            }
            let d = Object.keys(t);
            if (null == e) return 0 === d.length;
            if (0 === d.length) return !0;
            if (n && n.has(t)) return n.get(t) === e;
            n && n.set(t, e);
            try {
              for (let i = 0; i < d.length; i++) {
                let a = d[i];
                if (
                  (!g_(e) && !(a in e)) ||
                  (void 0 === t[a] && void 0 !== e[a]) ||
                  (null === t[a] && null !== e[a]) ||
                  !r(e[a], t[a], a, e, t, n)
                )
                  return !1;
              }
              return !0;
            } finally {
              n && n.delete(t);
            }
          })(e, t, r, n);
        case "function":
          if (Object.keys(t).length > 0) return gC(e, { ...t }, r, n);
          return nB(e, t);
        default:
          if (!nR(e)) return nB(e, t);
          if ("string" == typeof t) return "" === t;
          return !0;
      }
    }
    function gT(e, t, r, n) {
      if (0 === t.length) return !0;
      if (!Array.isArray(e)) return !1;
      let i = new Set();
      for (let a = 0; a < t.length; a++) {
        let o = t[a],
          l = !1;
        for (let u = 0; u < e.length; u++) {
          if (i.has(u)) continue;
          let c = e[u],
            s = !1;
          if ((r(c, o, a, e, t, n) && (s = !0), s)) {
            i.add(u), (l = !0);
            break;
          }
        }
        if (!l) return !1;
      }
      return !0;
    }
    function gD(e, t) {
      var r;
      return (
        (r = "function" == typeof r ? r : void 0),
        gC(
          e,
          t,
          function e(t, n, i, a, o, l) {
            let u = r?.(t, n, i, a, o, l);
            return void 0 !== u ? !!u : gC(t, n, e, l);
          },
          new Map()
        )
      );
    }
    var gN = e.i(594027);
    function gz(e) {
      return null == e
        ? void 0 === e
          ? "[object Undefined]"
          : "[object Null]"
        : Object.prototype.toString.call(e);
    }
    let gL = "[object String]",
      gR = "[object Number]",
      gB = "[object Boolean]",
      g$ = "[object Arguments]";
    function gF(e, t, r, n = new Map(), i) {
      let a = i?.(e, t, r, n);
      if (null != a) return a;
      if (g_(e)) return e;
      if (n.has(e)) return n.get(e);
      if (Array.isArray(e)) {
        let t = Array(e.length);
        n.set(e, t);
        for (let a = 0; a < e.length; a++) t[a] = gF(e[a], a, r, n, i);
        return (
          Object.hasOwn(e, "index") && (t.index = e.index),
          Object.hasOwn(e, "input") && (t.input = e.input),
          t
        );
      }
      if (e instanceof Date) return new Date(e.getTime());
      if (e instanceof RegExp) {
        let t = new RegExp(e.source, e.flags);
        return (t.lastIndex = e.lastIndex), t;
      }
      if (e instanceof Map) {
        let t = new Map();
        for (let [a, o] of (n.set(e, t), e)) t.set(a, gF(o, a, r, n, i));
        return t;
      }
      if (e instanceof Set) {
        let t = new Set();
        for (let a of (n.set(e, t), e)) t.add(gF(a, void 0, r, n, i));
        return t;
      }
      if (void 0 !== gN.Buffer && gN.Buffer.isBuffer(e)) return e.subarray();
      if (ArrayBuffer.isView(e) && !(e instanceof DataView)) {
        let t = new (Object.getPrototypeOf(e).constructor)(e.length);
        n.set(e, t);
        for (let a = 0; a < e.length; a++) t[a] = gF(e[a], a, r, n, i);
        return t;
      }
      if (
        e instanceof ArrayBuffer ||
        ("u" > typeof SharedArrayBuffer && e instanceof SharedArrayBuffer)
      )
        return e.slice(0);
      if (e instanceof DataView) {
        let t = new DataView(e.buffer.slice(0), e.byteOffset, e.byteLength);
        return n.set(e, t), gU(t, e, r, n, i), t;
      }
      if ("u" > typeof File && e instanceof File) {
        let t = new File([e], e.name, { type: e.type });
        return n.set(e, t), gU(t, e, r, n, i), t;
      }
      if (e instanceof Blob) {
        let t = new Blob([e], { type: e.type });
        return n.set(e, t), gU(t, e, r, n, i), t;
      }
      if (e instanceof Error) {
        let t = new e.constructor();
        return (
          n.set(e, t),
          (t.message = e.message),
          (t.name = e.name),
          (t.stack = e.stack),
          (t.cause = e.cause),
          gU(t, e, r, n, i),
          t
        );
      }
      if (
        "object" == typeof e &&
        (function (e) {
          switch (gz(e)) {
            case g$:
            case "[object Array]":
            case "[object ArrayBuffer]":
            case "[object DataView]":
            case gB:
            case "[object Date]":
            case "[object Float32Array]":
            case "[object Float64Array]":
            case "[object Int8Array]":
            case "[object Int16Array]":
            case "[object Int32Array]":
            case "[object Map]":
            case gR:
            case "[object Object]":
            case "[object RegExp]":
            case "[object Set]":
            case gL:
            case "[object Symbol]":
            case "[object Uint8Array]":
            case "[object Uint8ClampedArray]":
            case "[object Uint16Array]":
            case "[object Uint32Array]":
              return !0;
            default:
              return !1;
          }
        })(e)
      ) {
        let t = Object.create(Object.getPrototypeOf(e));
        return n.set(e, t), gU(t, e, r, n, i), t;
      }
      return e;
    }
    function gU(e, t, r = e, n, i) {
      let a = [
        ...Object.keys(t),
        ...Object.getOwnPropertySymbols(t).filter((e) =>
          Object.prototype.propertyIsEnumerable.call(t, e)
        ),
      ];
      for (let o = 0; o < a.length; o++) {
        let l = a[o],
          u = Object.getOwnPropertyDescriptor(e, l);
        (null == u || u.writable) && (e[l] = gF(t[l], l, r, n, i));
      }
    }
    function gK(e, t) {
      return "object" == typeof e && null !== e && nL(e)
        ? (function (e, t) {
            let r = new Map();
            for (let n = 0; n < e.length; n++) {
              let i = e[n],
                a = t(i);
              r.has(a) || r.set(a, i);
            }
            return Array.from(r.values());
          })(
            Array.from(e),
            (function (e) {
              var t, r;
              if (null == e) return gI;
              switch (typeof e) {
                case "function":
                  return e;
                case "object":
                  if (Array.isArray(e) && 2 === e.length)
                    return (function (e, t) {
                      var r, n, i;
                      switch (typeof e) {
                        case "object":
                          Object.is(e?.valueOf(), -0) && (e = "-0");
                          break;
                        case "number":
                          e = es(e);
                      }
                      return (
                        (n = r = t),
                        (i = (e, t, n, i) => {
                          let a;
                          if (null != a) return a;
                          if ("object" == typeof r)
                            switch (Object.prototype.toString.call(r)) {
                              case gR:
                              case gL:
                              case gB: {
                                let e = new r.constructor(r?.valueOf());
                                return gU(e, r), e;
                              }
                              case g$: {
                                let e = {};
                                return (
                                  gU(e, r),
                                  (e.length = r.length),
                                  (e[Symbol.iterator] = r[Symbol.iterator]),
                                  e
                                );
                              }
                              default:
                                return;
                            }
                        }),
                        (t = gF(n, void 0, n, new Map(), i)),
                        function (r) {
                          let n = ed(r, e);
                          return void 0 === n
                            ? (function (e, t) {
                                let r;
                                if (
                                  0 ===
                                  (r = Array.isArray(t)
                                    ? t
                                    : "string" == typeof t &&
                                      ec(t) &&
                                      e?.[t] == null
                                    ? ef(t)
                                    : [t]).length
                                )
                                  return !1;
                                let n = e;
                                for (let e = 0; e < r.length; e++) {
                                  let t = r[e];
                                  if (null == n || !Object.hasOwn(n, t)) {
                                    var i;
                                    if (
                                      !(
                                        (Array.isArray(n) ||
                                          (null !== (i = n) &&
                                            "object" == typeof i &&
                                            "[object Arguments]" === gz(i))) &&
                                        nz(t) &&
                                        t < n.length
                                      )
                                    )
                                      return !1;
                                  }
                                  n = n[t];
                                }
                                return !0;
                              })(r, e)
                            : void 0 === t
                            ? void 0 === n
                            : gD(n, t);
                        }
                      );
                    })(e[0], e[1]);
                  return (
                    (t = gF((r = t = e), void 0, r, new Map(), void 0)),
                    (e) => gD(e, t)
                  );
                case "string":
                case "symbol":
                case "number":
                  return function (t) {
                    return ed(t, e);
                  };
              }
            })(t)
          )
        : [];
    }
    function gH(e, t, r) {
      return !0 === t ? gK(e, r) : "function" == typeof t ? gK(e, t) : e;
    }
    function gW(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
      return n;
    }
    function gq(e, t) {
      return (
        Math.abs(e.height - t.height) > 1 ||
        Math.abs(e.left - t.left) > 1 ||
        Math.abs(e.top - t.top) > 1 ||
        Math.abs(e.width - t.width) > 1
      );
    }
    function gV(e) {
      var t = e.getBoundingClientRect();
      return { height: t.height, left: t.left, top: t.top, width: t.width };
    }
    function gY() {
      var e,
        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        r =
          (function (e) {
            if (Array.isArray(e)) return e;
          })((e = (0, C.useState)({ height: 0, left: 0, top: 0, width: 0 }))) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ("u" > typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != r) {
              var n,
                i,
                a,
                o,
                l = [],
                u = !0,
                c = !1;
              try {
                (a = (r = r.call(e)).next), !1;
                for (
                  ;
                  !(u = (n = a.call(r)).done) &&
                  (l.push(n.value), 2 !== l.length);
                  u = !0
                );
              } catch (e) {
                (c = !0), (i = e);
              } finally {
                try {
                  if (
                    !u &&
                    null != r.return &&
                    ((o = r.return()), Object(o) !== o)
                  )
                    return;
                } finally {
                  if (c) throw i;
                }
              }
              return l;
            }
          })(e, 2) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return gW(e, 2);
              var r = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === r && e.constructor && (r = e.constructor.name),
                "Map" === r || "Set" === r
                  ? Array.from(e)
                  : "Arguments" === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                  ? gW(e, 2)
                  : void 0
              );
            }
          })(e, 2) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })(),
        n = r[0],
        i = r[1],
        a = (0, C.useRef)(null),
        o = (0, C.useRef)(n);
      o.current = n;
      var l = (0, C.useCallback)(
        (e) => {
          if (
            (null != a.current && (a.current.disconnect(), (a.current = null)),
            null != e)
          ) {
            var t = gV(e);
            if ((gq(t, o.current) && i(t), "u" > typeof ResizeObserver)) {
              var r = new ResizeObserver(() => {
                var t = gV(e);
                gq(t, o.current) && i(t);
              });
              r.observe(e), (a.current = r);
            }
          }
        },
        [...t]
      );
      return (
        (0, C.useEffect)(
          () => () => {
            var e;
            null == (e = a.current) || e.disconnect();
          },
          []
        ),
        [n, l]
      );
    }
    function gX(e) {
      this._context = e;
    }
    function gG(e) {
      return new gX(e);
    }
    gX.prototype = {
      areaStart: function () {
        this._line = 0;
      },
      areaEnd: function () {
        this._line = NaN;
      },
      lineStart: function () {
        this._point = 0;
      },
      lineEnd: function () {
        (this._line || (0 !== this._line && 1 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line);
      },
      point: function (e, t) {
        switch (((e *= 1), (t *= 1), this._point)) {
          case 0:
            (this._point = 1),
              this._line
                ? this._context.lineTo(e, t)
                : this._context.moveTo(e, t);
            break;
          case 1:
            this._point = 2;
          default:
            this._context.lineTo(e, t);
        }
      },
    };
    let gZ = Math.PI,
      gQ = 2 * gZ,
      gJ = gQ - 1e-6;
    function g0(e) {
      this._ += e[0];
      for (let t = 1, r = e.length; t < r; ++t) this._ += arguments[t] + e[t];
    }
    class g1 {
      constructor(e) {
        (this._x0 = this._y0 = this._x1 = this._y1 = null),
          (this._ = ""),
          (this._append =
            null == e
              ? g0
              : (function (e) {
                  let t = Math.floor(e);
                  if (!(t >= 0)) throw Error(`invalid digits: ${e}`);
                  if (t > 15) return g0;
                  let r = 10 ** t;
                  return function (e) {
                    this._ += e[0];
                    for (let t = 1, n = e.length; t < n; ++t)
                      this._ += Math.round(arguments[t] * r) / r + e[t];
                  };
                })(e));
      }
      moveTo(e, t) {
        this._append`M${(this._x0 = this._x1 = +e)},${(this._y0 = this._y1 =
          +t)}`;
      }
      closePath() {
        null !== this._x1 &&
          ((this._x1 = this._x0), (this._y1 = this._y0), this._append`Z`);
      }
      lineTo(e, t) {
        this._append`L${(this._x1 = +e)},${(this._y1 = +t)}`;
      }
      quadraticCurveTo(e, t, r, n) {
        this._append`Q${+e},${+t},${(this._x1 = +r)},${(this._y1 = +n)}`;
      }
      bezierCurveTo(e, t, r, n, i, a) {
        this._append`C${+e},${+t},${+r},${+n},${(this._x1 = +i)},${(this._y1 =
          +a)}`;
      }
      arcTo(e, t, r, n, i) {
        if (((e *= 1), (t *= 1), (r *= 1), (n *= 1), (i *= 1) < 0))
          throw Error(`negative radius: ${i}`);
        let a = this._x1,
          o = this._y1,
          l = r - e,
          u = n - t,
          c = a - e,
          s = o - t,
          f = c * c + s * s;
        if (null === this._x1)
          this._append`M${(this._x1 = e)},${(this._y1 = t)}`;
        else if (f > 1e-6)
          if (Math.abs(s * l - u * c) > 1e-6 && i) {
            let d = r - a,
              h = n - o,
              p = l * l + u * u,
              y = Math.sqrt(p),
              v = Math.sqrt(f),
              m =
                i *
                Math.tan(
                  (gZ - Math.acos((p + f - (d * d + h * h)) / (2 * y * v))) / 2
                ),
              g = m / v,
              b = m / y;
            Math.abs(g - 1) > 1e-6 && this._append`L${e + g * c},${t + g * s}`,
              this._append`A${i},${i},0,0,${+(s * d > c * h)},${(this._x1 =
                e + b * l)},${(this._y1 = t + b * u)}`;
          } else this._append`L${(this._x1 = e)},${(this._y1 = t)}`;
      }
      arc(e, t, r, n, i, a) {
        if (((e *= 1), (t *= 1), (r *= 1), (a = !!a), r < 0))
          throw Error(`negative radius: ${r}`);
        let o = r * Math.cos(n),
          l = r * Math.sin(n),
          u = e + o,
          c = t + l,
          s = 1 ^ a,
          f = a ? n - i : i - n;
        null === this._x1
          ? this._append`M${u},${c}`
          : (Math.abs(this._x1 - u) > 1e-6 || Math.abs(this._y1 - c) > 1e-6) &&
            this._append`L${u},${c}`,
          r &&
            (f < 0 && (f = (f % gQ) + gQ),
            f > gJ
              ? this._append`A${r},${r},0,1,${s},${e - o},${
                  t - l
                }A${r},${r},0,1,${s},${(this._x1 = u)},${(this._y1 = c)}`
              : f > 1e-6 &&
                this._append`A${r},${r},0,${+(f >= gZ)},${s},${(this._x1 =
                  e + r * Math.cos(i))},${(this._y1 = t + r * Math.sin(i))}`);
      }
      rect(e, t, r, n) {
        this._append`M${(this._x0 = this._x1 = +e)},${(this._y0 = this._y1 =
          +t)}h${(r *= 1)}v${+n}h${-r}Z`;
      }
      toString() {
        return this._;
      }
    }
    function g2(e) {
      let t = 3;
      return (
        (e.digits = function (r) {
          if (!arguments.length) return t;
          if (null == r) t = null;
          else {
            let e = Math.floor(r);
            if (!(e >= 0)) throw RangeError(`invalid digits: ${r}`);
            t = e;
          }
          return e;
        }),
        () => new g1(t)
      );
    }
    function g3(e) {
      return e[0];
    }
    function g5(e) {
      return e[1];
    }
    function g6(e, t) {
      var r = nW(!0),
        n = null,
        i = gG,
        a = null,
        o = g2(l);
      function l(l) {
        var u,
          c,
          s,
          f = (l = nH(l)).length,
          d = !1;
        for (null == n && (a = i((s = o()))), u = 0; u <= f; ++u)
          !(u < f && r((c = l[u]), u, l)) === d &&
            ((d = !d) ? a.lineStart() : a.lineEnd()),
            d && a.point(+e(c, u, l), +t(c, u, l));
        if (s) return (a = null), s + "" || null;
      }
      return (
        (e = "function" == typeof e ? e : void 0 === e ? g3 : nW(e)),
        (t = "function" == typeof t ? t : void 0 === t ? g5 : nW(t)),
        (l.x = function (t) {
          return arguments.length
            ? ((e = "function" == typeof t ? t : nW(+t)), l)
            : e;
        }),
        (l.y = function (e) {
          return arguments.length
            ? ((t = "function" == typeof e ? e : nW(+e)), l)
            : t;
        }),
        (l.defined = function (e) {
          return arguments.length
            ? ((r = "function" == typeof e ? e : nW(!!e)), l)
            : r;
        }),
        (l.curve = function (e) {
          return arguments.length ? ((i = e), null != n && (a = i(n)), l) : i;
        }),
        (l.context = function (e) {
          return arguments.length
            ? (null == e ? (n = a = null) : (a = i((n = e))), l)
            : n;
        }),
        l
      );
    }
    function g4(e, t, r) {
      var n = null,
        i = nW(!0),
        a = null,
        o = gG,
        l = null,
        u = g2(c);
      function c(c) {
        var s,
          f,
          d,
          h,
          p,
          y = (c = nH(c)).length,
          v = !1,
          m = Array(y),
          g = Array(y);
        for (null == a && (l = o((p = u()))), s = 0; s <= y; ++s) {
          if (!(s < y && i((h = c[s]), s, c)) === v)
            if ((v = !v)) (f = s), l.areaStart(), l.lineStart();
            else {
              for (l.lineEnd(), l.lineStart(), d = s - 1; d >= f; --d)
                l.point(m[d], g[d]);
              l.lineEnd(), l.areaEnd();
            }
          v &&
            ((m[s] = +e(h, s, c)),
            (g[s] = +t(h, s, c)),
            l.point(n ? +n(h, s, c) : m[s], r ? +r(h, s, c) : g[s]));
        }
        if (p) return (l = null), p + "" || null;
      }
      function s() {
        return g6().defined(i).curve(o).context(a);
      }
      return (
        (e = "function" == typeof e ? e : void 0 === e ? g3 : nW(+e)),
        (t = "function" == typeof t ? t : void 0 === t ? nW(0) : nW(+t)),
        (r = "function" == typeof r ? r : void 0 === r ? g5 : nW(+r)),
        (c.x = function (t) {
          return arguments.length
            ? ((e = "function" == typeof t ? t : nW(+t)), (n = null), c)
            : e;
        }),
        (c.x0 = function (t) {
          return arguments.length
            ? ((e = "function" == typeof t ? t : nW(+t)), c)
            : e;
        }),
        (c.x1 = function (e) {
          return arguments.length
            ? ((n = null == e ? null : "function" == typeof e ? e : nW(+e)), c)
            : n;
        }),
        (c.y = function (e) {
          return arguments.length
            ? ((t = "function" == typeof e ? e : nW(+e)), (r = null), c)
            : t;
        }),
        (c.y0 = function (e) {
          return arguments.length
            ? ((t = "function" == typeof e ? e : nW(+e)), c)
            : t;
        }),
        (c.y1 = function (e) {
          return arguments.length
            ? ((r = null == e ? null : "function" == typeof e ? e : nW(+e)), c)
            : r;
        }),
        (c.lineX0 = c.lineY0 =
          function () {
            return s().x(e).y(t);
          }),
        (c.lineY1 = function () {
          return s().x(e).y(r);
        }),
        (c.lineX1 = function () {
          return s().x(n).y(t);
        }),
        (c.defined = function (e) {
          return arguments.length
            ? ((i = "function" == typeof e ? e : nW(!!e)), c)
            : i;
        }),
        (c.curve = function (e) {
          return arguments.length ? ((o = e), null != a && (l = o(a)), c) : o;
        }),
        (c.context = function (e) {
          return arguments.length
            ? (null == e ? (a = l = null) : (l = o((a = e))), c)
            : a;
        }),
        c
      );
    }
    function g8(e, t, r) {
      e._context.bezierCurveTo(
        (2 * e._x0 + e._x1) / 3,
        (2 * e._y0 + e._y1) / 3,
        (e._x0 + 2 * e._x1) / 3,
        (e._y0 + 2 * e._y1) / 3,
        (e._x0 + 4 * e._x1 + t) / 6,
        (e._y0 + 4 * e._y1 + r) / 6
      );
    }
    function g7(e) {
      this._context = e;
    }
    function g9() {}
    function be(e) {
      this._context = e;
    }
    function bt(e) {
      this._context = e;
    }
    g1.prototype,
      (g7.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
        },
        lineEnd: function () {
          switch (this._point) {
            case 3:
              g8(this, this._x1, this._y1);
            case 2:
              this._context.lineTo(this._x1, this._y1);
          }
          (this._line || (0 !== this._line && 1 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
        },
        point: function (e, t) {
          switch (((e *= 1), (t *= 1), this._point)) {
            case 0:
              (this._point = 1),
                this._line
                  ? this._context.lineTo(e, t)
                  : this._context.moveTo(e, t);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              (this._point = 3),
                this._context.lineTo(
                  (5 * this._x0 + this._x1) / 6,
                  (5 * this._y0 + this._y1) / 6
                );
            default:
              g8(this, e, t);
          }
          (this._x0 = this._x1),
            (this._x1 = e),
            (this._y0 = this._y1),
            (this._y1 = t);
        },
      }),
      (be.prototype = {
        areaStart: g9,
        areaEnd: g9,
        lineStart: function () {
          (this._x0 =
            this._x1 =
            this._x2 =
            this._x3 =
            this._x4 =
            this._y0 =
            this._y1 =
            this._y2 =
            this._y3 =
            this._y4 =
              NaN),
            (this._point = 0);
        },
        lineEnd: function () {
          switch (this._point) {
            case 1:
              this._context.moveTo(this._x2, this._y2),
                this._context.closePath();
              break;
            case 2:
              this._context.moveTo(
                (this._x2 + 2 * this._x3) / 3,
                (this._y2 + 2 * this._y3) / 3
              ),
                this._context.lineTo(
                  (this._x3 + 2 * this._x2) / 3,
                  (this._y3 + 2 * this._y2) / 3
                ),
                this._context.closePath();
              break;
            case 3:
              this.point(this._x2, this._y2),
                this.point(this._x3, this._y3),
                this.point(this._x4, this._y4);
          }
        },
        point: function (e, t) {
          switch (((e *= 1), (t *= 1), this._point)) {
            case 0:
              (this._point = 1), (this._x2 = e), (this._y2 = t);
              break;
            case 1:
              (this._point = 2), (this._x3 = e), (this._y3 = t);
              break;
            case 2:
              (this._point = 3),
                (this._x4 = e),
                (this._y4 = t),
                this._context.moveTo(
                  (this._x0 + 4 * this._x1 + e) / 6,
                  (this._y0 + 4 * this._y1 + t) / 6
                );
              break;
            default:
              g8(this, e, t);
          }
          (this._x0 = this._x1),
            (this._x1 = e),
            (this._y0 = this._y1),
            (this._y1 = t);
        },
      }),
      (bt.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
        },
        lineEnd: function () {
          (this._line || (0 !== this._line && 3 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
        },
        point: function (e, t) {
          switch (((e *= 1), (t *= 1), this._point)) {
            case 0:
              this._point = 1;
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              this._point = 3;
              var r = (this._x0 + 4 * this._x1 + e) / 6,
                n = (this._y0 + 4 * this._y1 + t) / 6;
              this._line
                ? this._context.lineTo(r, n)
                : this._context.moveTo(r, n);
              break;
            case 3:
              this._point = 4;
            default:
              g8(this, e, t);
          }
          (this._x0 = this._x1),
            (this._x1 = e),
            (this._y0 = this._y1),
            (this._y1 = t);
        },
      });
    class br {
      constructor(e, t) {
        (this._context = e), (this._x = t);
      }
      areaStart() {
        this._line = 0;
      }
      areaEnd() {
        this._line = NaN;
      }
      lineStart() {
        this._point = 0;
      }
      lineEnd() {
        (this._line || (0 !== this._line && 1 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line);
      }
      point(e, t) {
        switch (((e *= 1), (t *= 1), this._point)) {
          case 0:
            (this._point = 1),
              this._line
                ? this._context.lineTo(e, t)
                : this._context.moveTo(e, t);
            break;
          case 1:
            this._point = 2;
          default:
            this._x
              ? this._context.bezierCurveTo(
                  (this._x0 = (this._x0 + e) / 2),
                  this._y0,
                  this._x0,
                  t,
                  e,
                  t
                )
              : this._context.bezierCurveTo(
                  this._x0,
                  (this._y0 = (this._y0 + t) / 2),
                  e,
                  this._y0,
                  e,
                  t
                );
        }
        (this._x0 = e), (this._y0 = t);
      }
    }
    function bn(e) {
      this._context = e;
    }
    bn.prototype = {
      areaStart: g9,
      areaEnd: g9,
      lineStart: function () {
        this._point = 0;
      },
      lineEnd: function () {
        this._point && this._context.closePath();
      },
      point: function (e, t) {
        (e *= 1),
          (t *= 1),
          this._point
            ? this._context.lineTo(e, t)
            : ((this._point = 1), this._context.moveTo(e, t));
      },
    };
    function bi(e, t, r) {
      var n = e._x1 - e._x0,
        i = t - e._x1,
        a = (e._y1 - e._y0) / (n || (i < 0 && -0)),
        o = (r - e._y1) / (i || (n < 0 && -0));
      return (
        ((a < 0 ? -1 : 1) + (o < 0 ? -1 : 1)) *
          Math.min(
            Math.abs(a),
            Math.abs(o),
            0.5 * Math.abs((a * i + o * n) / (n + i))
          ) || 0
      );
    }
    function ba(e, t) {
      var r = e._x1 - e._x0;
      return r ? ((3 * (e._y1 - e._y0)) / r - t) / 2 : t;
    }
    function bo(e, t, r) {
      var n = e._x0,
        i = e._y0,
        a = e._x1,
        o = e._y1,
        l = (a - n) / 3;
      e._context.bezierCurveTo(n + l, i + l * t, a - l, o - l * r, a, o);
    }
    function bl(e) {
      this._context = e;
    }
    function bu(e) {
      this._context = new bc(e);
    }
    function bc(e) {
      this._context = e;
    }
    function bs(e) {
      this._context = e;
    }
    function bf(e) {
      var t,
        r,
        n = e.length - 1,
        i = Array(n),
        a = Array(n),
        o = Array(n);
      for (i[0] = 0, a[0] = 2, o[0] = e[0] + 2 * e[1], t = 1; t < n - 1; ++t)
        (i[t] = 1), (a[t] = 4), (o[t] = 4 * e[t] + 2 * e[t + 1]);
      for (
        i[n - 1] = 2, a[n - 1] = 7, o[n - 1] = 8 * e[n - 1] + e[n], t = 1;
        t < n;
        ++t
      )
        (r = i[t] / a[t - 1]), (a[t] -= r), (o[t] -= r * o[t - 1]);
      for (i[n - 1] = o[n - 1] / a[n - 1], t = n - 2; t >= 0; --t)
        i[t] = (o[t] - i[t + 1]) / a[t];
      for (t = 0, a[n - 1] = (e[n] + i[n - 1]) / 2; t < n - 1; ++t)
        a[t] = 2 * e[t + 1] - i[t + 1];
      return [i, a];
    }
    function bd(e, t) {
      (this._context = e), (this._t = t);
    }
    function bh() {
      return (bh = Object.assign.bind()).apply(null, arguments);
    }
    function bp(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function by(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? bp(Object(r), !0).forEach(function (t) {
              var n, i, a;
              (n = e),
                (i = t),
                (a = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value."
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = a);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : bp(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    (bl.prototype = {
      areaStart: function () {
        this._line = 0;
      },
      areaEnd: function () {
        this._line = NaN;
      },
      lineStart: function () {
        (this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN),
          (this._point = 0);
      },
      lineEnd: function () {
        switch (this._point) {
          case 2:
            this._context.lineTo(this._x1, this._y1);
            break;
          case 3:
            bo(this, this._t0, ba(this, this._t0));
        }
        (this._line || (0 !== this._line && 1 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line);
      },
      point: function (e, t) {
        var r = NaN;
        if (((t *= 1), (e *= 1) !== this._x1 || t !== this._y1)) {
          switch (this._point) {
            case 0:
              (this._point = 1),
                this._line
                  ? this._context.lineTo(e, t)
                  : this._context.moveTo(e, t);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              (this._point = 3), bo(this, ba(this, (r = bi(this, e, t))), r);
              break;
            default:
              bo(this, this._t0, (r = bi(this, e, t)));
          }
          (this._x0 = this._x1),
            (this._x1 = e),
            (this._y0 = this._y1),
            (this._y1 = t),
            (this._t0 = r);
        }
      },
    }),
      ((bu.prototype = Object.create(bl.prototype)).point = function (e, t) {
        bl.prototype.point.call(this, t, e);
      }),
      (bc.prototype = {
        moveTo: function (e, t) {
          this._context.moveTo(t, e);
        },
        closePath: function () {
          this._context.closePath();
        },
        lineTo: function (e, t) {
          this._context.lineTo(t, e);
        },
        bezierCurveTo: function (e, t, r, n, i, a) {
          this._context.bezierCurveTo(t, e, n, r, a, i);
        },
      }),
      (bs.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          (this._x = []), (this._y = []);
        },
        lineEnd: function () {
          var e = this._x,
            t = this._y,
            r = e.length;
          if (r)
            if (
              (this._line
                ? this._context.lineTo(e[0], t[0])
                : this._context.moveTo(e[0], t[0]),
              2 === r)
            )
              this._context.lineTo(e[1], t[1]);
            else
              for (var n = bf(e), i = bf(t), a = 0, o = 1; o < r; ++a, ++o)
                this._context.bezierCurveTo(
                  n[0][a],
                  i[0][a],
                  n[1][a],
                  i[1][a],
                  e[o],
                  t[o]
                );
          (this._line || (0 !== this._line && 1 === r)) &&
            this._context.closePath(),
            (this._line = 1 - this._line),
            (this._x = this._y = null);
        },
        point: function (e, t) {
          this._x.push(+e), this._y.push(+t);
        },
      }),
      (bd.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          (this._x = this._y = NaN), (this._point = 0);
        },
        lineEnd: function () {
          0 < this._t &&
            this._t < 1 &&
            2 === this._point &&
            this._context.lineTo(this._x, this._y),
            (this._line || (0 !== this._line && 1 === this._point)) &&
              this._context.closePath(),
            this._line >= 0 &&
              ((this._t = 1 - this._t), (this._line = 1 - this._line));
        },
        point: function (e, t) {
          switch (((e *= 1), (t *= 1), this._point)) {
            case 0:
              (this._point = 1),
                this._line
                  ? this._context.lineTo(e, t)
                  : this._context.moveTo(e, t);
              break;
            case 1:
              this._point = 2;
            default:
              if (this._t <= 0)
                this._context.lineTo(this._x, t), this._context.lineTo(e, t);
              else {
                var r = this._x * (1 - this._t) + e * this._t;
                this._context.lineTo(r, this._y), this._context.lineTo(r, t);
              }
          }
          (this._x = e), (this._y = t);
        },
      });
    var bv = {
        curveBasisClosed: function (e) {
          return new be(e);
        },
        curveBasisOpen: function (e) {
          return new bt(e);
        },
        curveBasis: function (e) {
          return new g7(e);
        },
        curveBumpX: function (e) {
          return new br(e, !0);
        },
        curveBumpY: function (e) {
          return new br(e, !1);
        },
        curveLinearClosed: function (e) {
          return new bn(e);
        },
        curveLinear: gG,
        curveMonotoneX: function (e) {
          return new bl(e);
        },
        curveMonotoneY: function (e) {
          return new bu(e);
        },
        curveNatural: function (e) {
          return new bs(e);
        },
        curveStep: function (e) {
          return new bd(e, 0.5);
        },
        curveStepAfter: function (e) {
          return new bd(e, 1);
        },
        curveStepBefore: function (e) {
          return new bd(e, 0);
        },
      },
      bm = (e) => eZ(e.x) && eZ(e.y),
      bg = (e) => null != e.base && bm(e.base) && bm(e),
      bb = (e) => e.x,
      bx = (e) => e.y,
      bw = (e) => {
        var t = e.className,
          r = e.points,
          n = e.path,
          i = e.pathRef,
          a = tv(iB);
        if ((!r || !r.length) && !n) return null;
        var o = {
            type: e.type,
            points: e.points,
            baseLine: e.baseLine,
            layout: e.layout || a,
            connectNulls: e.connectNulls,
          },
          l =
            r && r.length
              ? ((e) => {
                  var t = e.type,
                    r = e.points,
                    n = void 0 === r ? [] : r,
                    i = e.baseLine,
                    a = e.layout,
                    o = e.connectNulls,
                    l = void 0 !== o && o,
                    u = ((e, t) => {
                      if ("function" == typeof e) return e;
                      var r = "curve".concat(eS(e));
                      if (("curveMonotone" === r || "curveBump" === r) && t) {
                        var n =
                          bv["".concat(r).concat("vertical" === t ? "Y" : "X")];
                        if (n) return n;
                      }
                      return bv[r] || gG;
                    })(void 0 === t ? "linear" : t, a),
                    c = l ? n.filter(bm) : n;
                  if (Array.isArray(i)) {
                    var s = n.map((e, t) => by(by({}, e), {}, { base: i[t] }));
                    return (
                      "vertical" === a
                        ? g4()
                            .y(bx)
                            .x1(bb)
                            .x0((e) => e.base.x)
                        : g4()
                            .x(bb)
                            .y1(bx)
                            .y0((e) => e.base.y)
                    )
                      .defined(bg)
                      .curve(u)(l ? s.filter(bg) : s);
                  }
                  return (
                    "vertical" === a && eg(i)
                      ? g4().y(bx).x1(bb).x0(i)
                      : eg(i)
                      ? g4().x(bb).y1(bx).y0(i)
                      : g6().x(bb).y(bx)
                  )
                    .defined(bm)
                    .curve(u)(c);
                })(o)
              : n;
        return C.createElement(
          "path",
          bh({}, er(e), aV(e), {
            className: (0, G.clsx)("recharts-curve", t),
            d: null === l ? void 0 : l,
            ref: i,
          })
        );
      },
      bO = ["x", "y", "top", "left", "width", "height", "className"];
    function bj() {
      return (bj = Object.assign.bind()).apply(null, arguments);
    }
    function bA(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    var bE = (e) => {
      var t = e.x,
        r = void 0 === t ? 0 : t,
        n = e.y,
        i = void 0 === n ? 0 : n,
        a = e.top,
        o = void 0 === a ? 0 : a,
        l = e.left,
        u = void 0 === l ? 0 : l,
        c = e.width,
        s = void 0 === c ? 0 : c,
        f = e.height,
        d = void 0 === f ? 0 : f,
        h = e.className,
        p = (function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? bA(Object(r), !0).forEach(function (t) {
                  var n, i, a;
                  (n = e),
                    (i = t),
                    (a = r[t]),
                    (i = (function (e) {
                      var t = (function (e, t) {
                        if ("object" != typeof e || !e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 !== r) {
                          var n = r.call(e, t || "default");
                          if ("object" != typeof n) return n;
                          throw TypeError(
                            "@@toPrimitive must return a primitive value."
                          );
                        }
                        return ("string" === t ? String : Number)(e);
                      })(e, "string");
                      return "symbol" == typeof t ? t : t + "";
                    })(i)) in n
                      ? Object.defineProperty(n, i, {
                          value: a,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (n[i] = a);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : bA(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
          }
          return e;
        })(
          { x: r, y: i, top: o, left: u, width: s, height: d },
          (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = (function (e, t) {
                if (null == e) return {};
                var r = {};
                for (var n in e)
                  if ({}.hasOwnProperty.call(e, n)) {
                    if (-1 !== t.indexOf(n)) continue;
                    r[n] = e[n];
                  }
                return r;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (n = 0; n < a.length; n++)
                (r = a[n]),
                  -1 === t.indexOf(r) &&
                    {}.propertyIsEnumerable.call(e, r) &&
                    (i[r] = e[r]);
            }
            return i;
          })(e, bO)
        );
      return eg(r) && eg(i) && eg(s) && eg(d) && eg(o) && eg(u)
        ? C.createElement(
            "path",
            bj({}, ei(p), {
              className: (0, G.clsx)("recharts-cross", h),
              d: "M"
                .concat(r, ",")
                .concat(o, "v")
                .concat(d, "M")
                .concat(u, ",")
                .concat(i, "h")
                .concat(s),
            })
          )
        : null;
    };
    function bS(e) {
      var t = e.cx,
        r = e.cy,
        n = e.radius,
        i = e.startAngle,
        a = e.endAngle;
      return {
        points: [tu(t, r, n, i), tu(t, r, n, a)],
        cx: t,
        cy: r,
        radius: n,
        startAngle: i,
        endAngle: a,
      };
    }
    function bP() {
      return (bP = Object.assign.bind()).apply(null, arguments);
    }
    function bk(e, t) {
      return (
        t || (t = e.slice(0)),
        Object.freeze(
          Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
        )
      );
    }
    var bM = (e) => {
        var t = e.cx,
          r = e.cy,
          n = e.radius,
          i = e.angle,
          a = e.sign,
          o = e.isExternal,
          l = e.cornerRadius,
          u = e.cornerIsExternal,
          c = l * (o ? 1 : -1) + n,
          s = Math.asin(l / c) / tl,
          f = u ? i : i + a * s,
          d = tu(t, r, c, f);
        return {
          center: d,
          circleTangency: tu(t, r, n, f),
          lineTangency: tu(t, r, c * Math.cos(s * tl), u ? i - a * s : i),
          theta: s,
        };
      },
      bI = (e) => {
        var t = e.cx,
          r = e.cy,
          n = e.innerRadius,
          i = e.outerRadius,
          a = e.startAngle,
          o = e.endAngle,
          l = ey(o - a) * Math.min(Math.abs(o - a), 359.999),
          u = a + l,
          c = tu(t, r, i, a),
          s = tu(t, r, i, u),
          f = ep(
            A ||
              (A = bk([
                "M ",
                ",",
                "\n    A ",
                ",",
                ",0,\n    ",
                ",",
                ",\n    ",
                ",",
                "\n  ",
              ])),
            c.x,
            c.y,
            i,
            i,
            +(Math.abs(l) > 180),
            +(a > u),
            s.x,
            s.y
          );
        if (n > 0) {
          var d = tu(t, r, n, a),
            h = tu(t, r, n, u);
          f += ep(
            E ||
              (E = bk([
                "L ",
                ",",
                "\n            A ",
                ",",
                ",0,\n            ",
                ",",
                ",\n            ",
                ",",
                " Z",
              ])),
            h.x,
            h.y,
            n,
            n,
            +(Math.abs(l) > 180),
            +(a <= u),
            d.x,
            d.y
          );
        } else f += ep(S || (S = bk(["L ", ",", " Z"])), t, r);
        return f;
      },
      b_ = {
        cx: 0,
        cy: 0,
        innerRadius: 0,
        outerRadius: 0,
        startAngle: 0,
        endAngle: 0,
        cornerRadius: 0,
        forceCornerRadius: !1,
        cornerIsExternal: !1,
      },
      bC = (e) => {
        var t,
          r = eG(e, b_),
          n = r.cx,
          i = r.cy,
          a = r.innerRadius,
          o = r.outerRadius,
          l = r.cornerRadius,
          u = r.forceCornerRadius,
          c = r.cornerIsExternal,
          s = r.startAngle,
          f = r.endAngle,
          d = r.className;
        if (o < a || s === f) return null;
        var h = (0, G.clsx)("recharts-sector", d),
          p = o - a,
          y = eO(l, p, 0, !0);
        return (
          (t =
            y > 0 && 360 > Math.abs(s - f)
              ? ((e) => {
                  var t = e.cx,
                    r = e.cy,
                    n = e.innerRadius,
                    i = e.outerRadius,
                    a = e.cornerRadius,
                    o = e.forceCornerRadius,
                    l = e.cornerIsExternal,
                    u = e.startAngle,
                    c = e.endAngle,
                    s = ey(c - u),
                    f = bM({
                      cx: t,
                      cy: r,
                      radius: i,
                      angle: u,
                      sign: s,
                      cornerRadius: a,
                      cornerIsExternal: l,
                    }),
                    d = f.circleTangency,
                    h = f.lineTangency,
                    p = f.theta,
                    y = bM({
                      cx: t,
                      cy: r,
                      radius: i,
                      angle: c,
                      sign: -s,
                      cornerRadius: a,
                      cornerIsExternal: l,
                    }),
                    v = y.circleTangency,
                    m = y.lineTangency,
                    g = y.theta,
                    b = l ? Math.abs(u - c) : Math.abs(u - c) - p - g;
                  if (b < 0)
                    return o
                      ? ep(
                          P ||
                            (P = bk([
                              "M ",
                              ",",
                              "\n        a",
                              ",",
                              ",0,0,1,",
                              ",0\n        a",
                              ",",
                              ",0,0,1,",
                              ",0\n      ",
                            ])),
                          h.x,
                          h.y,
                          a,
                          a,
                          2 * a,
                          a,
                          a,
                          -(2 * a)
                        )
                      : bI({
                          cx: t,
                          cy: r,
                          innerRadius: n,
                          outerRadius: i,
                          startAngle: u,
                          endAngle: c,
                        });
                  var x = ep(
                    k ||
                      (k = bk([
                        "M ",
                        ",",
                        "\n    A",
                        ",",
                        ",0,0,",
                        ",",
                        ",",
                        "\n    A",
                        ",",
                        ",0,",
                        ",",
                        ",",
                        ",",
                        "\n    A",
                        ",",
                        ",0,0,",
                        ",",
                        ",",
                        "\n  ",
                      ])),
                    h.x,
                    h.y,
                    a,
                    a,
                    +(s < 0),
                    d.x,
                    d.y,
                    i,
                    i,
                    +(b > 180),
                    +(s < 0),
                    v.x,
                    v.y,
                    a,
                    a,
                    +(s < 0),
                    m.x,
                    m.y
                  );
                  if (n > 0) {
                    var w = bM({
                        cx: t,
                        cy: r,
                        radius: n,
                        angle: u,
                        sign: s,
                        isExternal: !0,
                        cornerRadius: a,
                        cornerIsExternal: l,
                      }),
                      O = w.circleTangency,
                      j = w.lineTangency,
                      A = w.theta,
                      E = bM({
                        cx: t,
                        cy: r,
                        radius: n,
                        angle: c,
                        sign: -s,
                        isExternal: !0,
                        cornerRadius: a,
                        cornerIsExternal: l,
                      }),
                      S = E.circleTangency,
                      _ = E.lineTangency,
                      C = E.theta,
                      T = l ? Math.abs(u - c) : Math.abs(u - c) - A - C;
                    if (T < 0 && 0 === a)
                      return "".concat(x, "L").concat(t, ",").concat(r, "Z");
                    x += ep(
                      M ||
                        (M = bk([
                          "L",
                          ",",
                          "\n      A",
                          ",",
                          ",0,0,",
                          ",",
                          ",",
                          "\n      A",
                          ",",
                          ",0,",
                          ",",
                          ",",
                          ",",
                          "\n      A",
                          ",",
                          ",0,0,",
                          ",",
                          ",",
                          "Z",
                        ])),
                      _.x,
                      _.y,
                      a,
                      a,
                      +(s < 0),
                      S.x,
                      S.y,
                      n,
                      n,
                      +(T > 180),
                      +(s > 0),
                      O.x,
                      O.y,
                      a,
                      a,
                      +(s < 0),
                      j.x,
                      j.y
                    );
                  } else x += ep(I || (I = bk(["L", ",", "Z"])), t, r);
                  return x;
                })({
                  cx: n,
                  cy: i,
                  innerRadius: a,
                  outerRadius: o,
                  cornerRadius: Math.min(y, p / 2),
                  forceCornerRadius: u,
                  cornerIsExternal: c,
                  startAngle: s,
                  endAngle: f,
                })
              : bI({
                  cx: n,
                  cy: i,
                  innerRadius: a,
                  outerRadius: o,
                  startAngle: s,
                  endAngle: f,
                })),
          C.createElement("path", bP({}, ei(r), { className: h, d: t }))
        );
      };
    function bT(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function bD(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? bT(Object(r), !0).forEach(function (t) {
              var n, i, a;
              (n = e),
                (i = t),
                (a = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value."
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = a);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : bT(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    function bN() {
      return (bN = Object.assign.bind()).apply(null, arguments);
    }
    function bz(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function bL(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? bz(Object(r), !0).forEach(function (t) {
              var n, i, a;
              (n = e),
                (i = t),
                (a = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value."
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = a);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : bz(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    function bR(e) {
      var t = e.cursor,
        r = e.cursorComp,
        n = e.cursorProps;
      return (0, C.isValidElement)(t)
        ? (0, C.cloneElement)(t, n)
        : (0, C.createElement)(r, n);
    }
    function bB(e) {
      var t,
        r,
        n,
        i,
        a,
        o = e.coordinate,
        l = e.payload,
        u = e.index,
        c = e.offset,
        s = e.tooltipAxisBandSize,
        f = e.layout,
        d = e.cursor,
        h = e.tooltipEventType,
        p = e.chartName;
      if (!d || !o || ("ScatterChart" !== p && "axis" !== h)) return null;
      if ("ScatterChart" === p) (n = o), (i = bE), (a = iK.cursorLine);
      else if ("BarChart" === p)
        (t = s / 2),
          (n = {
            stroke: "none",
            fill: "#ccc",
            x: "horizontal" === f ? o.x - t : c.left + 0.5,
            y: "horizontal" === f ? c.top + 0.5 : o.y - t,
            width: "horizontal" === f ? s : c.width - 1,
            height: "horizontal" === f ? c.height - 1 : s,
          }),
          (i = oy),
          (a = iK.cursorRectangle);
      else if ("radial" === f && aq(o)) {
        var y = bS(o),
          v = y.cx,
          m = y.cy,
          g = y.radius;
        (n = {
          cx: v,
          cy: m,
          startAngle: y.startAngle,
          endAngle: y.endAngle,
          innerRadius: g,
          outerRadius: g,
        }),
          (i = bC),
          (a = iK.cursorLine);
      } else
        (n = {
          points: (function (e, t, r) {
            if ("horizontal" === e)
              return [
                { x: t.x, y: r.top },
                { x: t.x, y: r.top + r.height },
              ];
            if ("vertical" === e)
              return [
                { x: r.left, y: t.y },
                { x: r.left + r.width, y: t.y },
              ];
            if (aq(t)) {
              if ("centric" === e) {
                var n = t.cx,
                  i = t.cy,
                  a = t.innerRadius,
                  o = t.outerRadius,
                  l = t.angle,
                  u = tu(n, i, a, l),
                  c = tu(n, i, o, l);
                return [
                  { x: u.x, y: u.y },
                  { x: c.x, y: c.y },
                ];
              }
              return bS(t);
            }
          })(f, o, c),
        }),
          (i = bw),
          (a = iK.cursorLine);
      var b = "object" == typeof d && "className" in d ? d.className : void 0,
        x = bL(
          bL(bL(bL({ stroke: "#ccc", pointerEvents: "none" }, c), n), en(d)),
          {},
          {
            payload: l,
            payloadIndex: u,
            className: (0, G.clsx)("recharts-tooltip-cursor", b),
          }
        );
      return C.createElement(
        ad,
        { zIndex: null != (r = e.zIndex) ? r : a },
        C.createElement(bR, { cursor: d, cursorComp: i, cursorProps: x })
      );
    }
    function b$(e) {
      var t,
        r,
        n,
        i,
        a =
          ((t = tv(fJ)),
          (r = tv(h4)),
          (n = tv(h3)),
          t && n ? n8(bD(bD({}, t), {}, { scale: n }), r) : n8(void 0, r)),
        o = null != (i = tv(ic)) ? i : iR,
        l = tv(iB),
        u = tv(lc);
      return null == a || null == o || null == l || null == u
        ? null
        : C.createElement(
            bB,
            bN({}, e, {
              offset: o,
              layout: l,
              tooltipAxisBandSize: a,
              chartName: u,
            })
          );
    }
    function bF(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function bU(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? bF(Object(r), !0).forEach(function (t) {
              var n, i, a;
              (n = e),
                (i = t),
                (a = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value."
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = a);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : bF(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    function bK(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
      return n;
    }
    function bH(e) {
      return e.dataKey;
    }
    var bW = [],
      bq = {
        allowEscapeViewBox: { x: !1, y: !1 },
        animationDuration: 400,
        animationEasing: "ease",
        axisId: 0,
        contentStyle: {},
        cursor: !0,
        filterNull: !0,
        includeHidden: !1,
        isAnimationActive: "auto",
        itemSorter: "name",
        itemStyle: {},
        labelStyle: {},
        offset: 10,
        reverseDirection: { x: !1, y: !1 },
        separator: " : ",
        trigger: "hover",
        useTranslate3d: !1,
        wrapperStyle: {},
      };
    let bV = Math.cos,
      bY = Math.sin,
      bX = Math.sqrt,
      bG = Math.PI,
      bZ = 2 * bG;
    bX(3);
    let bQ = {
        draw(e, t) {
          let r = bX(t / bG);
          e.moveTo(r, 0), e.arc(0, 0, r, 0, bZ);
        },
      },
      bJ = bX(1 / 3),
      b0 = 2 * bJ,
      b1 = bY(bG / 10) / bY((7 * bG) / 10),
      b2 = bY(bZ / 10) * b1,
      b3 = -bV(bZ / 10) * b1,
      b5 = bX(3);
    bX(3);
    let b6 = bX(3) / 2,
      b4 = 1 / bX(12),
      b8 = (b4 / 2 + 1) * 3;
    var b7 = ["type", "size", "sizeType"];
    function b9() {
      return (b9 = Object.assign.bind()).apply(null, arguments);
    }
    function xe(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function xt(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? xe(Object(r), !0).forEach(function (t) {
              var n, i, a;
              (n = e),
                (i = t),
                (a = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value."
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = a);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : xe(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    var xr = {
        symbolCircle: bQ,
        symbolCross: {
          draw(e, t) {
            let r = bX(t / 5) / 2;
            e.moveTo(-3 * r, -r),
              e.lineTo(-r, -r),
              e.lineTo(-r, -3 * r),
              e.lineTo(r, -3 * r),
              e.lineTo(r, -r),
              e.lineTo(3 * r, -r),
              e.lineTo(3 * r, r),
              e.lineTo(r, r),
              e.lineTo(r, 3 * r),
              e.lineTo(-r, 3 * r),
              e.lineTo(-r, r),
              e.lineTo(-3 * r, r),
              e.closePath();
          },
        },
        symbolDiamond: {
          draw(e, t) {
            let r = bX(t / b0),
              n = r * bJ;
            e.moveTo(0, -r),
              e.lineTo(n, 0),
              e.lineTo(0, r),
              e.lineTo(-n, 0),
              e.closePath();
          },
        },
        symbolSquare: {
          draw(e, t) {
            let r = bX(t),
              n = -r / 2;
            e.rect(n, n, r, r);
          },
        },
        symbolStar: {
          draw(e, t) {
            let r = bX(0.8908130915292852 * t),
              n = b2 * r,
              i = b3 * r;
            e.moveTo(0, -r), e.lineTo(n, i);
            for (let t = 1; t < 5; ++t) {
              let a = (bZ * t) / 5,
                o = bV(a),
                l = bY(a);
              e.lineTo(l * r, -o * r), e.lineTo(o * n - l * i, l * n + o * i);
            }
            e.closePath();
          },
        },
        symbolTriangle: {
          draw(e, t) {
            let r = -bX(t / (3 * b5));
            e.moveTo(0, 2 * r),
              e.lineTo(-b5 * r, -r),
              e.lineTo(b5 * r, -r),
              e.closePath();
          },
        },
        symbolWye: {
          draw(e, t) {
            let r = bX(t / b8),
              n = r / 2,
              i = r * b4,
              a = r * b4 + r,
              o = -n;
            e.moveTo(n, i),
              e.lineTo(n, a),
              e.lineTo(o, a),
              e.lineTo(-0.5 * n - b6 * i, b6 * n + -0.5 * i),
              e.lineTo(-0.5 * n - b6 * a, b6 * n + -0.5 * a),
              e.lineTo(-0.5 * o - b6 * a, b6 * o + -0.5 * a),
              e.lineTo(-0.5 * n + b6 * i, -0.5 * i - b6 * n),
              e.lineTo(-0.5 * n + b6 * a, -0.5 * a - b6 * n),
              e.lineTo(-0.5 * o + b6 * a, -0.5 * a - b6 * o),
              e.closePath();
          },
        },
      },
      xn = Math.PI / 180,
      xi = (e) => {
        var t = e.type,
          r = void 0 === t ? "circle" : t,
          n = e.size,
          i = void 0 === n ? 64 : n,
          a = e.sizeType,
          o = void 0 === a ? "area" : a,
          l = xt(
            xt(
              {},
              (function (e, t) {
                if (null == e) return {};
                var r,
                  n,
                  i = (function (e, t) {
                    if (null == e) return {};
                    var r = {};
                    for (var n in e)
                      if ({}.hasOwnProperty.call(e, n)) {
                        if (-1 !== t.indexOf(n)) continue;
                        r[n] = e[n];
                      }
                    return r;
                  })(e, t);
                if (Object.getOwnPropertySymbols) {
                  var a = Object.getOwnPropertySymbols(e);
                  for (n = 0; n < a.length; n++)
                    (r = a[n]),
                      -1 === t.indexOf(r) &&
                        {}.propertyIsEnumerable.call(e, r) &&
                        (i[r] = e[r]);
                }
                return i;
              })(e, b7)
            ),
            {},
            { type: r, size: i, sizeType: o }
          ),
          u = "circle";
        "string" == typeof r && (u = r);
        var c = l.className,
          s = l.cx,
          f = l.cy,
          d = ei(l);
        return eg(s) && eg(f) && eg(i)
          ? C.createElement(
              "path",
              b9({}, d, {
                className: (0, G.clsx)("recharts-symbols", c),
                transform: "translate(".concat(s, ", ").concat(f, ")"),
                d: (() => {
                  var e,
                    t = ((e = u), xr["symbol".concat(eS(e))] || bQ),
                    r = (function (e, t) {
                      let r = null,
                        n = g2(i);
                      function i() {
                        let i;
                        if (
                          (r || (r = i = n()),
                          e
                            .apply(this, arguments)
                            .draw(r, +t.apply(this, arguments)),
                          i)
                        )
                          return (r = null), i + "" || null;
                      }
                      return (
                        (e = "function" == typeof e ? e : nW(e || bQ)),
                        (t =
                          "function" == typeof t
                            ? t
                            : nW(void 0 === t ? 64 : +t)),
                        (i.type = function (t) {
                          return arguments.length
                            ? ((e = "function" == typeof t ? t : nW(t)), i)
                            : e;
                        }),
                        (i.size = function (e) {
                          return arguments.length
                            ? ((t = "function" == typeof e ? e : nW(+e)), i)
                            : t;
                        }),
                        (i.context = function (e) {
                          return arguments.length
                            ? ((r = null == e ? null : e), i)
                            : r;
                        }),
                        i
                      );
                    })()
                      .type(t)
                      .size(
                        ((e, t, r) => {
                          if ("area" === t) return e;
                          switch (r) {
                            case "cross":
                              return (5 * e * e) / 9;
                            case "diamond":
                              return (0.5 * e * e) / Math.sqrt(3);
                            case "square":
                              return e * e;
                            case "star":
                              var n = 18 * xn;
                              return (
                                1.25 *
                                e *
                                e *
                                (Math.tan(n) -
                                  Math.tan(2 * n) * Math.tan(n) ** 2)
                              );
                            case "triangle":
                              return (Math.sqrt(3) * e * e) / 4;
                            case "wye":
                              return ((21 - 10 * Math.sqrt(3)) * e * e) / 8;
                            default:
                              return (Math.PI * e * e) / 4;
                          }
                        })(i, o, u)
                      )();
                  if (null !== r) return r;
                })(),
              })
            )
          : null;
      };
    function xa() {
      return (xa = Object.assign.bind()).apply(null, arguments);
    }
    function xo(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function xl(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? xo(Object(r), !0).forEach(function (t) {
              var n, i, a;
              (n = e),
                (i = t),
                (a = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value."
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = a);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : xo(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    xi.registerSymbol = (e, t) => {
      xr["symbol".concat(eS(e))] = t;
    };
    var xu = {
      align: "center",
      iconSize: 14,
      inactiveColor: "#ccc",
      layout: "horizontal",
      verticalAlign: "middle",
      labelStyle: {},
    };
    function xc(e) {
      var t = e.data,
        r = e.iconType,
        n = e.inactiveColor,
        i = 32 / 6,
        a = 32 / 3,
        o = t.inactive ? n : t.color,
        l = null != r ? r : t.type;
      if ("none" === l) return null;
      if ("plainline" === l)
        return C.createElement("line", {
          strokeWidth: 4,
          fill: "none",
          stroke: o,
          strokeDasharray: (function (e) {
            if ("object" == typeof e && null !== e && "strokeDasharray" in e)
              return String(e.strokeDasharray);
          })(t.payload),
          x1: 0,
          y1: 16,
          x2: 32,
          y2: 16,
          className: "recharts-legend-icon",
        });
      if ("line" === l)
        return C.createElement("path", {
          strokeWidth: 4,
          fill: "none",
          stroke: o,
          d: "M0,"
            .concat(16, "h")
            .concat(a, "\n            A")
            .concat(i, ",")
            .concat(i, ",0,1,1,")
            .concat(2 * a, ",")
            .concat(16, "\n            H")
            .concat(32, "M")
            .concat(2 * a, ",")
            .concat(16, "\n            A")
            .concat(i, ",")
            .concat(i, ",0,1,1,")
            .concat(a, ",")
            .concat(16),
          className: "recharts-legend-icon",
        });
      if ("rect" === l)
        return C.createElement("path", {
          stroke: "none",
          fill: o,
          d: "M0,"
            .concat(4, "h")
            .concat(32, "v")
            .concat(24, "h")
            .concat(-32, "z"),
          className: "recharts-legend-icon",
        });
      if (C.isValidElement(t.legendIcon)) {
        var u = xl({}, t);
        return delete u.legendIcon, C.cloneElement(t.legendIcon, u);
      }
      return C.createElement(xi, {
        fill: o,
        cx: 16,
        cy: 16,
        size: 32,
        sizeType: "diameter",
        type: l,
      });
    }
    function xs(e) {
      var t = e.payload,
        r = e.iconSize,
        n = e.layout,
        i = e.formatter,
        a = e.inactiveColor,
        o = e.iconType,
        l = e.labelStyle,
        u = { x: 0, y: 0, width: 32, height: 32 },
        c = {
          display: "horizontal" === n ? "inline-block" : "block",
          marginRight: 10,
        },
        s = {
          display: "inline-block",
          verticalAlign: "middle",
          marginRight: 4,
        };
      return t.map((t, n) => {
        var f = t.formatter || i,
          d = (0, G.clsx)({
            "recharts-legend-item": !0,
            ["legend-item-".concat(n)]: !0,
            inactive: t.inactive,
          });
        if ("none" === t.type) return null;
        var h = "object" == typeof l ? xl({}, l) : {};
        h.color = t.inactive ? a : h.color || t.color;
        var p = f ? f(t.value, t, n) : t.value;
        return C.createElement(
          "li",
          xa(
            { className: d, style: c, key: "legend-item-".concat(n) },
            aY(e, t, n)
          ),
          C.createElement(
            mi,
            {
              width: r,
              height: r,
              viewBox: u,
              style: s,
              "aria-label":
                null == t.value
                  ? "legend icon"
                  : "".concat(t.value, " legend icon"),
            },
            C.createElement(xc, { data: t, iconType: o, inactiveColor: a })
          ),
          C.createElement(
            "span",
            { className: "recharts-legend-item-text", style: h },
            p
          )
        );
      });
    }
    var xf = (e) => {
        var t = eG(e, xu),
          r = t.payload,
          n = t.layout,
          i = t.align;
        return r && r.length
          ? C.createElement(
              "ul",
              {
                className: "recharts-default-legend",
                style: {
                  padding: 0,
                  margin: 0,
                  textAlign: "horizontal" === n ? i : "left",
                },
              },
              C.createElement(xs, xa({}, t, { payload: r }))
            )
          : null;
      },
      xd = ["contextPayload"];
    function xh() {
      return (xh = Object.assign.bind()).apply(null, arguments);
    }
    function xp(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
      return n;
    }
    function xy(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function xv(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? xy(Object(r), !0).forEach(function (t) {
              var n, i, a;
              (n = e),
                (i = t),
                (a = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value."
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = a);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : xy(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    function xm(e) {
      return e.value;
    }
    function xg(e) {
      var t = e.contextPayload,
        r = (function (e, t) {
          if (null == e) return {};
          var r,
            n,
            i = (function (e, t) {
              if (null == e) return {};
              var r = {};
              for (var n in e)
                if ({}.hasOwnProperty.call(e, n)) {
                  if (-1 !== t.indexOf(n)) continue;
                  r[n] = e[n];
                }
              return r;
            })(e, t);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            for (n = 0; n < a.length; n++)
              (r = a[n]),
                -1 === t.indexOf(r) &&
                  {}.propertyIsEnumerable.call(e, r) &&
                  (i[r] = e[r]);
          }
          return i;
        })(e, xd),
        n = gH(t, e.payloadUniqBy, xm),
        i = xv(xv({}, r), {}, { payload: n });
      return C.isValidElement(e.content)
        ? C.cloneElement(e.content, i)
        : "function" == typeof e.content
        ? C.createElement(e.content, i)
        : C.createElement(xf, i);
    }
    function xb(e) {
      var t = e.align,
        r = e.layout,
        n = e.verticalAlign,
        i = e.itemSorter,
        a = td();
      return (
        (0, C.useLayoutEffect)(() => {
          a(pT({ align: t, layout: r, verticalAlign: n, itemSorter: i }));
        }, [a, t, r, n, i]),
        null
      );
    }
    function xx(e) {
      var t = e.width,
        r = e.height,
        n = td();
      return (
        (0, C.useLayoutEffect)(() => {
          n(pC({ width: t, height: r }));
        }, [n, t, r]),
        (0, C.useLayoutEffect)(
          () => () => {
            n(pC({ width: 0, height: 0 }));
          },
          [n]
        ),
        null
      );
    }
    var xw = {
      align: "center",
      iconSize: 14,
      inactiveColor: "#ccc",
      itemSorter: "value",
      labelStyle: {},
      layout: "horizontal",
      verticalAlign: "bottom",
    };
    C.memo(function (e) {
      var t,
        r,
        n,
        i,
        a,
        o,
        l,
        u = eG(e, xw),
        c = tv(nK),
        s = (0, C.useContext)(mO),
        f = tv((e) => e.layout.margin),
        d = u.width,
        h = u.height,
        p = u.wrapperStyle,
        y = u.portal,
        v =
          (function (e) {
            if (Array.isArray(e)) return e;
          })((t = gY([c]))) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ("u" > typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != r) {
              var n,
                i,
                a,
                o,
                l = [],
                u = !0,
                c = !1;
              try {
                (a = (r = r.call(e)).next), !1;
                for (
                  ;
                  !(u = (n = a.call(r)).done) &&
                  (l.push(n.value), 2 !== l.length);
                  u = !0
                );
              } catch (e) {
                (c = !0), (i = e);
              } finally {
                try {
                  if (
                    !u &&
                    null != r.return &&
                    ((o = r.return()), Object(o) !== o)
                  )
                    return;
                } finally {
                  if (c) throw i;
                }
              }
              return l;
            }
          })(t, 2) ||
          (function (e, t) {
            if (e) {
              if ("string" == typeof e) return xp(e, 2);
              var r = {}.toString.call(e).slice(8, -1);
              return (
                "Object" === r && e.constructor && (r = e.constructor.name),
                "Map" === r || "Set" === r
                  ? Array.from(e)
                  : "Arguments" === r ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                  ? xp(e, 2)
                  : void 0
              );
            }
          })(t, 2) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })(),
        m = v[0],
        g = v[1],
        b = tv(ie),
        x = tv(it);
      if (null == b || null == x) return null;
      var w =
          b -
          ((null == f ? void 0 : f.left) || 0) -
          ((null == f ? void 0 : f.right) || 0),
        O =
          ((r = u.layout),
          "vertical" === r && null != h
            ? { height: h }
            : "horizontal" === r
            ? { width: d || w }
            : null),
        j = y
          ? p
          : xv(
              xv(
                {
                  position: "absolute",
                  width: (null == O ? void 0 : O.width) || d || "auto",
                  height: (null == O ? void 0 : O.height) || h || "auto",
                },
                ((a = u.layout),
                (o = u.align),
                (l = u.verticalAlign),
                (p &&
                  ((void 0 !== p.left && null !== p.left) ||
                    (void 0 !== p.right && null !== p.right))) ||
                  (n =
                    "center" === o && "vertical" === a
                      ? { left: ((b || 0) - m.width) / 2 }
                      : "right" === o
                      ? { right: (f && f.right) || 0 }
                      : { left: (f && f.left) || 0 }),
                (p &&
                  ((void 0 !== p.top && null !== p.top) ||
                    (void 0 !== p.bottom && null !== p.bottom))) ||
                  (i =
                    "middle" === l
                      ? { top: ((x || 0) - m.height) / 2 }
                      : "bottom" === l
                      ? { bottom: (f && f.bottom) || 0 }
                      : { top: (f && f.top) || 0 }),
                xv(xv({}, n), i))
              ),
              p
            ),
        A = null != y ? y : s;
      if (null == A || null == c) return null;
      var E = C.createElement(
        "div",
        { className: "recharts-legend-wrapper", style: j, ref: g },
        C.createElement(xb, {
          layout: u.layout,
          align: u.align,
          verticalAlign: u.verticalAlign,
          itemSorter: u.itemSorter,
        }),
        !y && C.createElement(xx, { width: m.width, height: m.height }),
        C.createElement(
          xg,
          xh({}, u, O, {
            margin: f,
            chartWidth: b,
            chartHeight: x,
            contextPayload: c,
          })
        )
      );
      return (0, i8.createPortal)(E, A);
    }, yl).displayName = "Legend";
    var xO = e.i(152236);
    let xj = { light: "", dark: ".dark" },
      xA = C.createContext(null);
    function xE({ id: e, className: t, children: r, config: n, ...i }) {
      let a = C.useId(),
        o = `chart-${e || a.replace(/:/g, "")}`;
      return (0, _.jsx)(xA.Provider, {
        value: { config: n },
        children: (0, _.jsxs)("div", {
          "data-slot": "chart",
          "data-chart": o,
          className: (0, xO.cn)(
            "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
            t
          ),
          ...i,
          children: [
            (0, _.jsx)(xS, { id: o, config: n }),
            (0, _.jsx)(iN, { children: r }),
          ],
        }),
      });
    }
    let xS = ({ id: e, config: t }) => {
        let r = Object.entries(t).filter(([, e]) => e.theme || e.color);
        return r.length
          ? (0, _.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html: Object.entries(xj)
                  .map(
                    ([t, n]) => `
${n} [data-chart=${e}] {
${r
  .map(([e, r]) => {
    let n = r.theme?.[t] || r.color;
    return n ? `  --color-${e}: ${n};` : null;
  })
  .join("\n")}
}
`
                  )
                  .join("\n"),
              },
            })
          : null;
      },
      xP = function (e) {
        var t,
          r,
          n,
          i,
          a,
          o,
          l,
          u,
          c,
          s,
          f,
          d = eG(e, bq),
          h = d.active,
          p = d.allowEscapeViewBox,
          y = d.animationDuration,
          v = d.animationEasing,
          m = d.content,
          g = d.filterNull,
          b = d.isAnimationActive,
          x = d.offset,
          w = d.payloadUniqBy,
          O = d.position,
          j = d.reverseDirection,
          A = d.useTranslate3d,
          E = d.wrapperStyle,
          S = d.cursor,
          P = d.shared,
          k = d.trigger,
          M = d.defaultIndex,
          I = d.portal,
          _ = d.axisId,
          T = td(),
          D = "number" == typeof M ? String(M) : M;
        (0, C.useEffect)(() => {
          T(
            ok({ shared: P, trigger: k, axisId: _, active: h, defaultIndex: D })
          );
        }, [T, P, k, _, h, D]);
        var N = iL(),
          z = mt(),
          L = tv((e) => hf(e, P)),
          R = null != (s = tv((e) => ve(e, L, k, D))) ? s : {},
          B = R.activeIndex,
          $ = R.isActive,
          F = tv((e) => y9(e, L, k, D)),
          U = tv((e) => y7(e, L, k, D)),
          K = tv((e) => y8(e, L, k, D)),
          H = (0, C.useContext)(mw),
          W = null != (f = null != h ? h : $) && f,
          q =
            (function (e) {
              if (Array.isArray(e)) return e;
            })((t = gY([F, W]))) ||
            (function (e, t) {
              var r =
                null == e
                  ? null
                  : ("u" > typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
              if (null != r) {
                var n,
                  i,
                  a,
                  o,
                  l = [],
                  u = !0,
                  c = !1;
                try {
                  (a = (r = r.call(e)).next), !1;
                  for (
                    ;
                    !(u = (n = a.call(r)).done) &&
                    (l.push(n.value), 2 !== l.length);
                    u = !0
                  );
                } catch (e) {
                  (c = !0), (i = e);
                } finally {
                  try {
                    if (
                      !u &&
                      null != r.return &&
                      ((o = r.return()), Object(o) !== o)
                    )
                      return;
                  } finally {
                    if (c) throw i;
                  }
                }
                return l;
              }
            })(t, 2) ||
            (function (e, t) {
              if (e) {
                if ("string" == typeof e) return bK(e, 2);
                var r = {}.toString.call(e).slice(8, -1);
                return (
                  "Object" === r && e.constructor && (r = e.constructor.name),
                  "Map" === r || "Set" === r
                    ? Array.from(e)
                    : "Arguments" === r ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                    ? bK(e, 2)
                    : void 0
                );
              }
            })(t, 2) ||
            (function () {
              throw TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })(),
          V = q[0],
          Y = q[1],
          X = "axis" === L ? U : void 0;
        (r = tv((e) =>
          ((e, t, r) => {
            if (null != t) {
              var n = hx(e);
              return "axis" === t
                ? "hover" === r
                  ? n.axisInteraction.hover.dataKey
                  : n.axisInteraction.click.dataKey
                : "hover" === r
                ? n.itemInteraction.hover.dataKey
                : n.itemInteraction.click.dataKey;
            }
          })(e, L, k)
        )),
          (n = tv(pi)),
          (i = tv(ld)),
          (a = tv(ls)),
          (o = tv(lf)),
          (u = (null == (l = tv(mv)) ? void 0 : l.sourceViewBox) != null),
          (c = iL()),
          (0, C.useEffect)(() => {
            if (!u && null != a && null != i) {
              var e = oN({
                active: W,
                coordinate: K,
                dataKey: r,
                index: B,
                label: "number" == typeof X ? String(X) : X,
                sourceViewBox: c,
                graphicalItemId: n,
              });
              mh.emit(mp, a, e, i);
            }
          }, [u, K, r, n, B, X, i, a, o, W, c]);
        var G = null != I ? I : H;
        if (null == G || null == N || null == L) return null;
        var Z = null != F ? F : bW;
        W || (Z = bW),
          g &&
            Z.length &&
            (Z = gH(
              Z.filter(
                (e) => null != e.value && (!0 !== e.hide || d.includeHidden)
              ),
              w,
              bH
            ));
        var Q = Z.length > 0,
          J = bU(
            bU({}, d),
            {},
            {
              payload: Z,
              label: X,
              active: W,
              activeIndex: B,
              coordinate: K,
              accessibilityLayer: z,
            }
          ),
          ee = C.createElement(
            gM,
            {
              allowEscapeViewBox: p,
              animationDuration: y,
              animationEasing: v,
              isAnimationActive: b,
              active: W,
              coordinate: K,
              hasPayload: Q,
              offset: x,
              position: O,
              reverseDirection: j,
              useTranslate3d: A,
              viewBox: N,
              wrapperStyle: E,
              lastBoundingBox: V,
              innerRef: Y,
              hasPortalFromProps: !!I,
            },
            C.isValidElement(m)
              ? C.cloneElement(m, J)
              : "function" == typeof m
              ? C.createElement(m, J)
              : C.createElement(gO, J)
          );
        return C.createElement(
          C.Fragment,
          null,
          (0, i8.createPortal)(ee, G),
          W &&
            C.createElement(b$, {
              cursor: S,
              tooltipEventType: L,
              coordinate: K,
              payload: Z,
              index: B,
            })
        );
      };
    function xk({
      active: e,
      payload: t,
      className: r,
      indicator: n = "dot",
      hideLabel: i = !1,
      hideIndicator: a = !1,
      label: o,
      labelFormatter: l,
      labelClassName: u,
      formatter: c,
      color: s,
      nameKey: f,
      labelKey: d,
    }) {
      let { config: h } = (function () {
          let e = C.useContext(xA);
          if (!e)
            throw Error("useChart must be used within a <ChartContainer />");
          return e;
        })(),
        p = C.useMemo(() => {
          if (i || !t?.length) return null;
          let [e] = t,
            r = `${d || e?.dataKey || e?.name || "value"}`,
            n = xM(h, e, r),
            a = d || "string" != typeof o ? n?.label : h[o]?.label || o;
          return l
            ? (0, _.jsx)("div", {
                className: (0, xO.cn)("font-medium", u),
                children: l(a, t),
              })
            : a
            ? (0, _.jsx)("div", {
                className: (0, xO.cn)("font-medium", u),
                children: a,
              })
            : null;
        }, [o, l, t, i, u, h, d]);
      if (!e || !t?.length) return null;
      let y = 1 === t.length && "dot" !== n;
      return (0, _.jsxs)("div", {
        className: (0, xO.cn)(
          "border-border/50 bg-background grid min-w-[8rem] items-start gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl",
          r
        ),
        children: [
          y ? null : p,
          (0, _.jsx)("div", {
            className: "grid gap-1.5",
            children: t
              .filter((e) => "none" !== e.type)
              .map((e, t) => {
                let r = `${f || e.name || e.dataKey || "value"}`,
                  i = xM(h, e, r),
                  o =
                    s ||
                    ("string" == typeof e.payload.fill
                      ? e.payload.fill
                      : void 0) ||
                    e.color;
                return (0, _.jsx)(
                  "div",
                  {
                    className: (0, xO.cn)(
                      "[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5",
                      "dot" === n && "items-center"
                    ),
                    children:
                      c && e?.value !== void 0 && e.name
                        ? c(e.value, e.name, e, t, e.payload)
                        : (0, _.jsxs)(_.Fragment, {
                            children: [
                              i?.icon
                                ? (0, _.jsx)(i.icon, {})
                                : !a &&
                                  (0, _.jsx)("div", {
                                    className: (0, xO.cn)(
                                      "shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)",
                                      {
                                        "h-2.5 w-2.5": "dot" === n,
                                        "w-1": "line" === n,
                                        "w-0 border-[1.5px] border-dashed bg-transparent":
                                          "dashed" === n,
                                        "my-0.5": y && "dashed" === n,
                                      }
                                    ),
                                    style: {
                                      "--color-bg": o,
                                      "--color-border": o,
                                    },
                                  }),
                              (0, _.jsxs)("div", {
                                className: (0, xO.cn)(
                                  "flex flex-1 justify-between leading-none",
                                  y ? "items-end" : "items-center"
                                ),
                                children: [
                                  (0, _.jsxs)("div", {
                                    className: "grid gap-1.5",
                                    children: [
                                      y ? p : null,
                                      (0, _.jsx)("span", {
                                        className: "text-muted-foreground",
                                        children: i?.label || e.name,
                                      }),
                                    ],
                                  }),
                                  e.value &&
                                    (0, _.jsx)("span", {
                                      className:
                                        "text-foreground font-mono font-medium tabular-nums",
                                      children: e.value.toLocaleString(),
                                    }),
                                ],
                              }),
                            ],
                          }),
                  },
                  `${e.dataKey ?? t}`
                );
              }),
          }),
        ],
      });
    }
    function xM(e, t, r) {
      if ("object" != typeof t || null === t) return;
      let n =
          "payload" in t && "object" == typeof t.payload && null !== t.payload
            ? t.payload
            : void 0,
        i = r;
      return (
        r in t && "string" == typeof t[r]
          ? (i = t[r])
          : n && r in n && "string" == typeof n[r] && (i = n[r]),
        i in e ? e[i] : e[r]
      );
    }
    let xI = () =>
        (0, T.useQuery)({
          queryKey: ["daily-stats", "all"],
          queryFn: async () =>
            fetch("/api/daily-stats?chain=all").then((e) => e.json()),
          refetchInterval: 1e4,
        }),
      x_ = { tx: { label: "Transactions", color: "var(--primary)" } };
    function xC() {
      let { data: e } = xI();
      return (0, _.jsx)(xE, {
        config: x_,
        className: "h-26 w-full !aspect-auto",
        children: (0, _.jsxs)(mH, {
          accessibilityLayer: !0,
          data: e,
          children: [
            (0, _.jsx)(gh, { dataKey: "date", hide: !0 }),
            (0, _.jsx)(xP, {
              cursor: !1,
              content: (0, _.jsx)(xk, {}),
              labelFormatter: (e) => (0, z.default)(e).format("MM/DD/YYYY"),
            }),
            (0, _.jsx)(y$, {
              dataKey: "txCount",
              fill: "var(--color-tx)",
              radius: 8,
            }),
          ],
        }),
      });
    }
    var xT = C;
    function xD() {
      return (xD = Object.assign.bind()).apply(null, arguments);
    }
    var xN = (e) => {
        var t = e.cx,
          r = e.cy,
          n = e.r,
          i = e.className,
          a = (0, G.clsx)("recharts-dot", i);
        return eg(t) && eg(r) && eg(n)
          ? C.createElement(
              "circle",
              xD({}, er(e), aV(e), { className: a, cx: t, cy: r, r: n })
            )
          : null;
      },
      xz = ["points"];
    function xL(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function xR(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? xL(Object(r), !0).forEach(function (t) {
              var n, i, a;
              (n = e),
                (i = t),
                (a = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value."
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = a);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : xL(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    function xB() {
      return (xB = Object.assign.bind()).apply(null, arguments);
    }
    function x$(e) {
      var t = e.option,
        r = e.dotProps,
        n = e.className;
      if ((0, C.isValidElement)(t)) return (0, C.cloneElement)(t, r);
      if ("function" == typeof t) return t(r);
      var i = (0, G.clsx)(n, "boolean" != typeof t ? t.className : ""),
        a = null != r ? r : {},
        o =
          (a.points,
          (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = (function (e, t) {
                if (null == e) return {};
                var r = {};
                for (var n in e)
                  if ({}.hasOwnProperty.call(e, n)) {
                    if (-1 !== t.indexOf(n)) continue;
                    r[n] = e[n];
                  }
                return r;
              })(e, t);
            if (Object.getOwnPropertySymbols) {
              var a = Object.getOwnPropertySymbols(e);
              for (n = 0; n < a.length; n++)
                (r = a[n]),
                  -1 === t.indexOf(r) &&
                    {}.propertyIsEnumerable.call(e, r) &&
                    (i[r] = e[r]);
            }
            return i;
          })(a, xz));
      return C.createElement(xN, xB({}, o, { className: i }));
    }
    function xF(e) {
      var t = e.points,
        r = e.dot,
        n = e.className,
        i = e.dotClassName,
        a = e.dataKey,
        o = e.baseProps,
        l = e.needClip,
        u = e.clipPathId,
        c = e.zIndex,
        s = void 0 === c ? iK.scatter : c;
      if (null == t || (!r && 1 !== t.length)) return null;
      var f = aW(r),
        d =
          null == r
            ? null
            : (0, C.isValidElement)(r)
            ? ei(r.props)
            : "object" != typeof r || Array.isArray(r)
            ? null
            : ei(r),
        h = t.map((e, n) => {
          var l,
            u,
            c = xR(
              xR(xR({ r: 3 }, o), d),
              {},
              {
                index: n,
                cx: null != (l = e.x) ? l : void 0,
                cy: null != (u = e.y) ? u : void 0,
                dataKey: a,
                value: e.value,
                payload: e.payload,
                points: t,
              }
            );
          return C.createElement(x$, {
            key: "dot-".concat(n),
            option: r,
            dotProps: c,
            className: i,
          });
        }),
        p = {};
      return (
        l &&
          null != u &&
          (p.clipPath = "url(#clipPath-"
            .concat(f ? "" : "dots-")
            .concat(u, ")")),
        C.createElement(
          ad,
          { zIndex: s },
          C.createElement(el, xB({ className: n }, p), h)
        )
      );
    }
    function xU(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function xK(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? xU(Object(r), !0).forEach(function (t) {
              var n, i, a;
              (n = e),
                (i = t),
                (a = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value."
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = a);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : xU(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    var xH = (e) => {
      var t,
        r = e.point,
        n = e.childIndex,
        i = e.mainColor,
        a = e.activeDot,
        o = e.dataKey,
        l = e.clipPath;
      if (!1 === a || null == r.x || null == r.y) return null;
      var u = xK(
        xK(
          xK(
            {},
            {
              index: n,
              dataKey: o,
              cx: r.x,
              cy: r.y,
              r: 4,
              fill: null != i ? i : "none",
              strokeWidth: 2,
              stroke: "#fff",
              payload: r.payload,
              value: r.value,
            }
          ),
          en(a)
        ),
        aV(a)
      );
      return (
        (t = (0, C.isValidElement)(a)
          ? (0, C.cloneElement)(a, u)
          : "function" == typeof a
          ? a(u)
          : C.createElement(xN, u)),
        C.createElement(
          el,
          { className: "recharts-active-dot", clipPath: l },
          t
        )
      );
    };
    function xW(e) {
      var t = e.points,
        r = e.mainColor,
        n = e.activeDot,
        i = e.itemDataKey,
        a = e.clipPath,
        o = e.zIndex,
        l = void 0 === o ? iK.activeDot : o,
        u = tv(pt),
        c = tv(ps);
      if (null == t || null == c) return null;
      var s = t.find((e) => c.includes(e.payload));
      return null == s
        ? null
        : C.createElement(
            ad,
            { zIndex: l },
            C.createElement(xH, {
              point: s,
              childIndex: Number(u),
              mainColor: r,
              dataKey: i,
              activeDot: n,
              clipPath: a,
            })
          );
    }
    var xq = (e, t, r) => d4(e, "xAxis", pb(e, t), r),
      xV = (e, t, r) => d6(e, "xAxis", pb(e, t), r),
      xY = (e, t, r) => d4(e, "yAxis", px(e, t), r),
      xX = (e, t, r) => d6(e, "yAxis", px(e, t), r),
      xG = rI([iB, xq, xY, xV, xX], (e, t, r, n, i) =>
        n0(e, "xAxis") ? n8(t, n, !1) : n8(r, i, !1)
      ),
      xZ = rI([fT, (e, t) => t], (e, t) =>
        e.filter((e) => "area" === e.type).find((e) => e.id === t)
      ),
      xQ = (e) => (n0(iB(e), "xAxis") ? "yAxis" : "xAxis"),
      xJ = rI(
        [
          xZ,
          (e, t, r) => f3(e, xQ(e), "yAxis" === xQ(e) ? px(e, t) : pb(e, t), r),
        ],
        (e, t) => {
          if (null != e && null != t) {
            var r,
              n = e.stackId,
              i = ly(e);
            if (null != n && null != i) {
              var a = null == (r = t[n]) ? void 0 : r.stackedData,
                o = null == a ? void 0 : a.find((e) => e.key === i);
              if (null != o) return o.map((e) => [e[0], e[1]]);
            }
          }
        }
      ),
      x0 = rI(
        [iB, xq, xY, xV, xX, xJ, oG, xG, xZ, (e) => e.rootProps.baseValue],
        (e, t, r, n, i, a, o, l, u, c) => {
          var s,
            f = o.chartData,
            d = o.dataStartIndex,
            h = o.dataEndIndex;
          if (
            null != u &&
            ("horizontal" === e || "vertical" === e) &&
            null != t &&
            null != r &&
            null != n &&
            null != i &&
            0 !== n.length &&
            0 !== i.length &&
            null != l
          ) {
            var p,
              y,
              v,
              m,
              g,
              b,
              x,
              w,
              O,
              j,
              A,
              E,
              S,
              P,
              k,
              M,
              I,
              _,
              C,
              T,
              D,
              N = u.data;
            if (
              null !=
              (s =
                N && N.length > 0 ? N : null == f ? void 0 : f.slice(d, h + 1))
            ) {
              return (
                (m = (v = (p = {
                  layout: e,
                  xAxis: t,
                  yAxis: r,
                  xAxisTicks: n,
                  yAxisTicks: i,
                  dataStartIndex: d,
                  areaSettings: u,
                  stackedData: a,
                  displayedData: s,
                  chartBaseValue: c,
                  bandSize: l,
                }).areaSettings).connectNulls),
                (g = v.baseValue),
                (b = v.dataKey),
                (x = p.stackedData),
                (w = p.layout),
                (O = p.chartBaseValue),
                (j = p.xAxis),
                (A = p.yAxis),
                (E = p.displayedData),
                (S = p.dataStartIndex),
                (P = p.xAxisTicks),
                (k = p.yAxisTicks),
                (M = p.bandSize),
                (I = x && x.length),
                (_ = ((e, t, r, n, i) => {
                  var a = null != r ? r : t;
                  if (eg(a)) return a;
                  var o = "horizontal" === e ? i : n,
                    l = o.scale.domain();
                  if ("number" === o.type) {
                    var u = Math.max(l[0], l[1]),
                      c = Math.min(l[0], l[1]);
                    return "dataMin" === a
                      ? c
                      : "dataMax" === a || u < 0
                      ? u
                      : Math.max(Math.min(l[0], l[1]), 0);
                  }
                  return "dataMin" === a ? l[0] : "dataMax" === a ? l[1] : l[0];
                })(w, O, g, j, A)),
                (C = "horizontal" === w),
                (T = !1),
                (D = E.map((e, t) => {
                  if (I) a = x[S + t];
                  else {
                    var r,
                      n,
                      i,
                      a,
                      o,
                      l = nJ(e, b);
                    Array.isArray(l) ? ((a = l), (T = !0)) : (a = [_, l]);
                  }
                  var u =
                      null != (r = null == (n = a) ? void 0 : n[1]) ? r : null,
                    c = null == u || (I && !m && null == nJ(e, b));
                  return C
                    ? {
                        x: n3({
                          axis: j,
                          ticks: P,
                          bandSize: M,
                          entry: e,
                          index: t,
                        }),
                        y: c ? null : null != (o = A.scale.map(u)) ? o : null,
                        value: a,
                        payload: e,
                      }
                    : {
                        x: c ? null : null != (i = j.scale.map(u)) ? i : null,
                        y: n3({
                          axis: A,
                          ticks: k,
                          bandSize: M,
                          entry: e,
                          index: t,
                        }),
                        value: a,
                        payload: e,
                      };
                })),
                (y =
                  I || T
                    ? D.map((e) => {
                        var t,
                          r,
                          n = Array.isArray(e.value) ? e.value[0] : null;
                        return C
                          ? {
                              x: e.x,
                              y:
                                null != n &&
                                null != e.y &&
                                null != (r = A.scale.map(n))
                                  ? r
                                  : null,
                              payload: e.payload,
                            }
                          : {
                              x:
                                null != n && null != (t = j.scale.map(n))
                                  ? t
                                  : null,
                              y: e.y,
                              payload: e.payload,
                            };
                      })
                    : C
                    ? A.scale.map(_)
                    : j.scale.map(_)),
                { points: D, baseLine: null != y ? y : 0, isRange: T }
              );
            }
          }
        }
      ),
      x1 = [
        "animationElapsedTime",
        "isAnimating",
        "isEntrance",
        "layout",
        "isRange",
        "stroke",
        "connectNulls",
      ],
      x2 = ["id", "baseLine"];
    function x3() {
      return (x3 = Object.assign.bind()).apply(null, arguments);
    }
    function x5(e, t) {
      if (null == e) return {};
      var r,
        n,
        i = (function (e, t) {
          if (null == e) return {};
          var r = {};
          for (var n in e)
            if ({}.hasOwnProperty.call(e, n)) {
              if (-1 !== t.indexOf(n)) continue;
              r[n] = e[n];
            }
          return r;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (n = 0; n < a.length; n++)
          (r = a[n]),
            -1 === t.indexOf(r) &&
              {}.propertyIsEnumerable.call(e, r) &&
              (i[r] = e[r]);
      }
      return i;
    }
    function x6(e) {
      var t,
        r,
        n = e.alpha,
        i = e.baseLine,
        a = e.points,
        o = e.strokeWidth,
        l = null == (t = a[0]) ? void 0 : t.x,
        u = null == (r = a[a.length - 1]) ? void 0 : r.x;
      if (!eZ(l) || !eZ(u)) return null;
      var c = n * Math.abs(l - u),
        s = Math.max(...a.map((e) => e.y || 0));
      return (eg(i)
        ? (s = Math.max(i, s))
        : i &&
          Array.isArray(i) &&
          i.length &&
          (s = Math.max(...i.map((e) => e.y || 0), s)),
      eg(s))
        ? C.createElement("rect", {
            x: l < u ? l : l - c,
            y: 0,
            width: c,
            height: Math.floor(s + (o ? parseInt("".concat(o), 10) : 1)),
          })
        : null;
    }
    function x4(e) {
      var t,
        r,
        n = e.alpha,
        i = e.baseLine,
        a = e.points,
        o = e.strokeWidth,
        l = null == (t = a[0]) ? void 0 : t.y,
        u = null == (r = a[a.length - 1]) ? void 0 : r.y;
      if (!eZ(l) || !eZ(u)) return null;
      var c = n * Math.abs(l - u),
        s = Math.max(...a.map((e) => e.x || 0));
      return (eg(i)
        ? (s = Math.max(i, s))
        : i &&
          Array.isArray(i) &&
          i.length &&
          (s = Math.max(...i.map((e) => e.x || 0), s)),
      eg(s))
        ? C.createElement("rect", {
            x: 0,
            y: l < u ? l : l - c,
            width: s + (o ? parseInt("".concat(o), 10) : 1),
            height: Math.floor(c),
          })
        : null;
    }
    function x8(e) {
      var t = e.alpha,
        r = e.layout,
        n = e.points,
        i = e.baseLine,
        a = e.strokeWidth;
      return "vertical" === r
        ? C.createElement(x4, {
            alpha: t,
            points: n,
            baseLine: i,
            strokeWidth: a,
          })
        : C.createElement(x6, {
            alpha: t,
            points: n,
            baseLine: i,
            strokeWidth: a,
          });
    }
    var x7 = ["id"],
      x9 = [
        "activeDot",
        "animationBegin",
        "animationDuration",
        "animationEasing",
        "connectNulls",
        "dot",
        "fill",
        "fillOpacity",
        "hide",
        "isAnimationActive",
        "legendType",
        "stroke",
        "xAxisId",
        "yAxisId",
      ];
    function we() {
      return (we = Object.assign.bind()).apply(null, arguments);
    }
    function wt(e, t) {
      if (null == e) return {};
      var r,
        n,
        i = (function (e, t) {
          if (null == e) return {};
          var r = {};
          for (var n in e)
            if ({}.hasOwnProperty.call(e, n)) {
              if (-1 !== t.indexOf(n)) continue;
              r[n] = e[n];
            }
          return r;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (n = 0; n < a.length; n++)
          (r = a[n]),
            -1 === t.indexOf(r) &&
              {}.propertyIsEnumerable.call(e, r) &&
              (i[r] = e[r]);
      }
      return i;
    }
    function wr(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function wn(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? wr(Object(r), !0).forEach(function (t) {
              var n, i, a;
              (n = e),
                (i = t),
                (a = r[t]),
                (i = (function (e) {
                  var t = (function (e, t) {
                    if ("object" != typeof e || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                      var n = r.call(e, t || "default");
                      if ("object" != typeof n) return n;
                      throw TypeError(
                        "@@toPrimitive must return a primitive value."
                      );
                    }
                    return ("string" === t ? String : Number)(e);
                  })(e, "string");
                  return "symbol" == typeof t ? t : t + "";
                })(i)) in n
                  ? Object.defineProperty(n, i, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (n[i] = a);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : wr(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    var wi = {
      activeDot: !0,
      animationBegin: 0,
      animationDuration: 1500,
      animationEasing: "ease",
      animationMatchBy: pZ,
      animationInterpolateFn: (e, t) =>
        null == e
          ? []
          : 1 === t
          ? e.flatMap((e) => ("removed" === e.status ? [] : [e.next]))
          : e.flatMap((e) =>
              "matched" === e.status
                ? [
                    wn(
                      wn({}, e.next),
                      {},
                      {
                        x: eA(e.prev.x, e.next.x, t),
                        y: eA(e.prev.y, e.next.y, t),
                      }
                    ),
                  ]
                : "added" === e.status
                ? [e.next]
                : []
            ),
      connectNulls: !1,
      dot: !1,
      fill: "#3182bd",
      fillOpacity: 0.6,
      hide: !1,
      isAnimationActive: "auto",
      legendType: "line",
      stroke: "#3182bd",
      strokeWidth: 1,
      type: "linear",
      label: !1,
      shape: function (e) {
        var t,
          r = e.animationElapsedTime,
          n = void 0 === r ? 1 : r,
          i = e.isAnimating,
          a = e.isEntrance,
          o = e.layout,
          l = e.isRange,
          u = e.stroke,
          c = e.connectNulls,
          s = x5(e, x1),
          f = "vertical" === o ? "vertical" : "horizontal",
          d = null != c && c,
          h = p$(),
          p = s.id,
          y = s.baseLine,
          v = er(x5(s, x2)),
          m = C.createElement(
            bw,
            x3({}, s, {
              id: p,
              baseLine: y,
              connectNulls: d,
              stroke: "none",
              className: "recharts-area-area",
              layout: f,
            })
          ),
          g =
            "none" !== u &&
            C.createElement(
              bw,
              x3({}, v, {
                className: "recharts-area-curve",
                layout: f,
                type: s.type,
                connectNulls: d,
                fill: "none",
                stroke: u,
                points: s.points,
              })
            ),
          b =
            "none" !== u &&
            l &&
            Array.isArray(y) &&
            C.createElement(
              bw,
              x3({}, v, {
                className: "recharts-area-curve",
                layout: f,
                type: s.type,
                connectNulls: d,
                fill: "none",
                stroke: u,
                points: y,
              })
            );
        return void 0 !== a && a && ((void 0 !== i && i) || n < 1)
          ? C.createElement(
              el,
              null,
              C.createElement(
                "defs",
                null,
                C.createElement(
                  "clipPath",
                  { id: h },
                  C.createElement(x8, {
                    alpha: n,
                    points: null != (t = s.points) ? t : [],
                    baseLine: y,
                    layout: f,
                    strokeWidth: s.strokeWidth,
                  })
                )
              ),
              C.createElement(el, { clipPath: "url(#".concat(h, ")") }, m, g, b)
            )
          : C.createElement(C.Fragment, null, m, g, b);
      },
      xAxisId: 0,
      yAxisId: 0,
      zIndex: iK.area,
    };
    function wa(e, t) {
      return e && "none" !== e ? e : t;
    }
    var wo = xT.memo((e) => {
      var t = e.dataKey,
        r = e.data,
        n = e.stroke,
        i = e.strokeWidth,
        a = e.fill,
        o = e.name,
        l = e.hide,
        u = e.unit,
        c = e.formatter,
        s = e.tooltipType,
        f = e.id,
        d = {
          dataDefinedOnItem: r,
          getPosition: ek,
          settings: {
            stroke: n,
            strokeWidth: i,
            fill: a,
            dataKey: t,
            nameKey: void 0,
            name: n9(o, t),
            hide: l,
            type: s,
            color: wa(n, a),
            unit: u,
            formatter: c,
            graphicalItemId: f,
          },
        };
      return xT.createElement(oF, { tooltipEntrySettings: d });
    });
    function wl(e) {
      var t = e.clipPathId,
        r = e.points,
        n = e.props,
        i = n.needClip,
        a = n.dot,
        o = n.dataKey,
        l = er(n);
      return xT.createElement(xF, {
        points: r,
        dot: a,
        className: "recharts-area-dots",
        dotClassName: "recharts-area-dot",
        dataKey: o,
        baseProps: l,
        needClip: i,
        clipPathId: t,
      });
    }
    function wu(e) {
      var t = e.showLabels,
        r = e.children,
        n = e.points.map((e) => {
          var t,
            r,
            n = {
              x: null != (t = e.x) ? t : 0,
              y: null != (r = e.y) ? r : 0,
              width: 0,
              lowerWidth: 0,
              upperWidth: 0,
              height: 0,
            };
          return wn(
            wn({}, n),
            {},
            {
              value: e.value,
              payload: e.payload,
              parentViewBox: void 0,
              viewBox: n,
              fill: void 0,
            }
          );
        });
      return xT.createElement(az, { value: t ? n : void 0 }, r);
    }
    function wc(e) {
      var t = e.points,
        r = e.baseLine,
        n = e.needClip,
        i = e.clipPathId,
        a = e.props,
        o = e.animationElapsedTime,
        l = e.isAnimating,
        u = e.isEntrance,
        c = a.layout,
        s = a.type,
        f = a.stroke,
        d = a.connectNulls,
        h = a.isRange,
        p = a.shape,
        y = a.id,
        v = wt(a, x7),
        m = wn(
          wn({}, ei(v)),
          {},
          {
            id: y,
            points: t,
            connectNulls: d,
            type: s,
            baseLine: r,
            layout: c,
            stroke: f,
            isRange: h,
            animationElapsedTime: o,
            isAnimating: l,
            isEntrance: u,
          }
        );
      return xT.createElement(
        xT.Fragment,
        null,
        (null == t ? void 0 : t.length) > 1 &&
          xT.createElement(
            el,
            { clipPath: n ? "url(#clipPath-".concat(i, ")") : void 0 },
            xT.createElement(og, {
              option: p,
              DefaultShape: wi.shape,
              shapeProps: m,
            })
          ),
        xT.createElement(wl, { points: t, props: v, clipPathId: i })
      );
    }
    function ws(e) {
      var t,
        r = e.needClip,
        n = e.clipPathId,
        i = e.props,
        a = e.previousPointsRef,
        o = e.previousBaselineRef,
        l = i.points,
        u = i.baseLine,
        c = i.isAnimationActive,
        s = i.animationBegin,
        f = i.animationDuration,
        d = i.animationEasing,
        h = i.animationMatchBy,
        p = i.animationInterpolateFn,
        y = (0, xT.useMemo)(() => ({ points: l, baseLine: u }), [l, u]),
        v = p1(y, o),
        m = i$(),
        g = p3(i.onAnimationStart, i.onAnimationEnd),
        b = g.isAnimating,
        x = g.handleAnimationStart,
        w = g.handleAnimationEnd,
        O = v.startValue;
      return null == m
        ? null
        : ((t =
            Array.isArray(u) && Array.isArray(O)
              ? p0(O, u, h)
              : Array.isArray(u)
              ? p0(null, u, h)
              : null),
          xT.createElement(
            p5,
            {
              animationInput: y,
              animationIdPrefix: "recharts-area-",
              items: l,
              previousItemsRef: a,
              isAnimationActive: c,
              animationBegin: s,
              animationDuration: f,
              animationEasing: d,
              onAnimationStart: x,
              onAnimationEnd: w,
              animationInterpolateFn: p,
              animationMatchBy: h,
              layout: m,
            },
            (e, a, o) => {
              var c;
              return (
                (c =
                  1 === a
                    ? u
                    : Array.isArray(u)
                    ? p(t, a, m)
                    : o
                    ? u
                    : (function (e, t, r) {
                        return eg(e)
                          ? eA(eg(t) ? t : void 0, e, r)
                          : null == e || ev(e)
                          ? eA(eg(t) ? t : void 0, 0, r)
                          : e;
                      })(u, O, a)),
                v.syncStepValue(c, a),
                xT.createElement(
                  wu,
                  { showLabels: !b, points: l },
                  i.children,
                  xT.createElement(wc, {
                    points: e,
                    baseLine: c,
                    needClip: r,
                    clipPathId: n,
                    props: i,
                    animationElapsedTime: a,
                    isAnimating: b || a < 1,
                    isEntrance: o,
                  }),
                  xT.createElement(aB, { label: i.label })
                )
              );
            }
          ));
    }
    function wf(e) {
      var t = e.needClip,
        r = e.clipPathId,
        n = e.props,
        i = (0, xT.useRef)(null),
        a = (0, xT.useRef)();
      return xT.createElement(ws, {
        needClip: t,
        clipPathId: r,
        props: n,
        previousPointsRef: i,
        previousBaselineRef: a,
      });
    }
    class wd extends xT.PureComponent {
      render() {
        var e = this.props,
          t = e.hide,
          r = e.dot,
          n = e.points,
          i = e.className,
          a = e.top,
          o = e.left,
          l = e.needClip,
          u = e.xAxisId,
          c = e.yAxisId,
          s = e.width,
          f = e.height,
          d = e.id,
          h = e.baseLine,
          p = e.zIndex;
        if (t) return null;
        var y = (0, G.clsx)("recharts-area", i),
          v = (function (e) {
            var t = en(e);
            if (null != t) {
              var r = t.r,
                n = t.strokeWidth,
                i = Number(r),
                a = Number(n);
              return (
                (Number.isNaN(i) || i < 0) && (i = 3),
                (Number.isNaN(a) || a < 0) && (a = 2),
                { r: i, strokeWidth: a }
              );
            }
            return { r: 3, strokeWidth: 2 };
          })(r),
          m = v.r,
          g = v.strokeWidth,
          b = aW(r),
          x = 2 * m + g,
          w = l
            ? "url(#clipPath-".concat(b ? "" : "dots-").concat(d, ")")
            : void 0;
        return xT.createElement(
          ad,
          { zIndex: p },
          xT.createElement(
            el,
            { className: y },
            l &&
              xT.createElement(
                "defs",
                null,
                xT.createElement(pp, { clipPathId: d, xAxisId: u, yAxisId: c }),
                !b &&
                  xT.createElement(
                    "clipPath",
                    { id: "clipPath-dots-".concat(d) },
                    xT.createElement("rect", {
                      x: o - x / 2,
                      y: a - x / 2,
                      width: s + x,
                      height: f + x,
                    })
                  )
              ),
            xT.createElement(wf, {
              needClip: l,
              clipPathId: d,
              props: this.props,
            })
          ),
          xT.createElement(xW, {
            points: n,
            mainColor: wa(this.props.stroke, this.props.fill),
            itemDataKey: this.props.dataKey,
            activeDot: this.props.activeDot,
            clipPath: w,
          }),
          this.props.isRange &&
            Array.isArray(h) &&
            xT.createElement(xW, {
              points: h,
              mainColor: wa(this.props.stroke, this.props.fill),
              itemDataKey: this.props.dataKey,
              activeDot: this.props.activeDot,
              clipPath: w,
            })
        );
      }
    }
    function wh(e) {
      var t,
        r = e.activeDot,
        n = e.animationBegin,
        i = e.animationDuration,
        a = e.animationEasing,
        o = e.connectNulls,
        l = e.dot,
        u = e.fill,
        c = e.fillOpacity,
        s = e.hide,
        f = e.isAnimationActive,
        d = e.legendType,
        h = e.stroke,
        p = e.xAxisId,
        y = e.yAxisId,
        v = wt(e, x9),
        m = tv(iB),
        g = tv(lc),
        b = ph(p, y).needClip,
        x = ip(),
        w = null != (t = tv((t) => x0(t, e.id, x))) ? t : {},
        O = w.points,
        j = w.isRange,
        A = w.baseLine,
        E = tv(pd);
      if (
        ("horizontal" !== m && "vertical" !== m) ||
        null == E ||
        ("AreaChart" !== g && "ComposedChart" !== g)
      )
        return null;
      var S = E.height,
        P = E.width,
        k = E.x,
        M = E.y;
      return O && O.length
        ? xT.createElement(
            wd,
            we({}, v, {
              activeDot: r,
              animationBegin: n,
              animationDuration: i,
              animationEasing: a,
              baseLine: A,
              connectNulls: o,
              dot: l,
              fill: u,
              fillOpacity: c,
              height: S,
              hide: s,
              layout: m,
              isAnimationActive: f,
              isRange: j,
              legendType: d,
              needClip: b,
              points: O,
              stroke: h,
              width: P,
              left: k,
              top: M,
              xAxisId: p,
              yAxisId: y,
            })
          )
        : null;
    }
    var wp = xT.memo(function (e) {
      var t = eG(e, wi),
        r = ip();
      return xT.createElement(pU, { id: t.id, type: "area" }, (e) => {
        var n, i, a, o, l;
        return xT.createElement(
          xT.Fragment,
          null,
          xT.createElement(pR, {
            legendPayload:
              ((n = t.dataKey),
              (i = t.name),
              (a = t.stroke),
              (o = t.fill),
              (l = t.legendType),
              [
                {
                  inactive: t.hide,
                  dataKey: n,
                  type: l,
                  color: wa(a, o),
                  value: n9(i, n),
                  payload: t,
                },
              ]),
          }),
          xT.createElement(wo, {
            dataKey: t.dataKey,
            data: t.data,
            stroke: t.stroke,
            strokeWidth: t.strokeWidth,
            fill: t.fill,
            name: t.name,
            hide: t.hide,
            unit: t.unit,
            formatter: t.formatter,
            tooltipType: t.tooltipType,
            id: e,
          }),
          xT.createElement(pX, {
            type: "area",
            id: e,
            data: t.data,
            dataKey: t.dataKey,
            xAxisId: t.xAxisId,
            yAxisId: t.yAxisId,
            zAxisId: 0,
            stackId: n2(t.stackId),
            hide: t.hide,
            barSize: void 0,
            baseValue: t.baseValue,
            isPanorama: r,
            connectNulls: t.connectNulls,
          }),
          xT.createElement(wh, we({}, t, { id: e }))
        );
      });
    }, yl);
    wp.displayName = "Area";
    var wy = ["axis"],
      wv = (0, C.forwardRef)((e, t) =>
        C.createElement(mU, {
          chartName: "AreaChart",
          defaultTooltipEventType: "axis",
          validateTooltipEventTypes: wy,
          tooltipPayloadSearcher: yF,
          categoricalChartProps: e,
          ref: t,
        })
      );
    let wm = { volume: { label: "Volume", color: "var(--primary)" } };
    function wg() {
      let { data: e } = xI();
      return (0, _.jsx)(xE, {
        config: wm,
        className: "h-26 w-full !aspect-auto",
        children: (0, _.jsxs)(wv, {
          accessibilityLayer: !0,
          data: e,
          margin: { left: 12, right: 12, top: 12, bottom: 12 },
          children: [
            (0, _.jsx)(gh, { dataKey: "date", hide: !0 }),
            (0, _.jsx)(xP, {
              cursor: !0,
              content: (0, _.jsx)(xk, {
                labelFormatter: (e) =>
                  (0, z.default)(1e3 * Number(e)).format("MM/DD/YYYY"),
              }),
            }),
            (0, _.jsx)("defs", {
              children: (0, _.jsxs)("linearGradient", {
                id: "fillVolume",
                x1: "0",
                y1: "0",
                x2: "0",
                y2: "1",
                children: [
                  (0, _.jsx)("stop", {
                    offset: "5%",
                    stopColor: "var(--color-volume)",
                    stopOpacity: 0.8,
                  }),
                  (0, _.jsx)("stop", {
                    offset: "95%",
                    stopColor: "var(--color-volume)",
                    stopOpacity: 0.1,
                  }),
                ],
              }),
            }),
            (0, _.jsx)(wp, {
              dataKey: "volume",
              type: "natural",
              fill: "url(#fillVolume)",
              fillOpacity: 0.4,
              stroke: "var(--color-volume)",
              stackId: "a",
            }),
          ],
        }),
      });
    }
    let wb = { tx: { label: "Transactions", color: "var(--primary)" } };
    function wx() {
      let { data: e } = xI();
      return (0, _.jsx)(xE, {
        config: wb,
        className: "h-26 w-full !aspect-auto",
        children: (0, _.jsxs)(mH, {
          accessibilityLayer: !0,
          data: e,
          children: [
            (0, _.jsx)(xP, {
              cursor: !1,
              content: (0, _.jsx)(xk, {}),
              labelFormatter: (e) =>
                (0, z.default)(1e3 * Number(e)).format("MM/DD/YYYY"),
            }),
            (0, _.jsx)(y$, {
              dataKey: "buyerCount",
              fill: "var(--color-tx)",
              radius: 8,
            }),
          ],
        }),
      });
    }
    let ww = { tx: { label: "Transactions", color: "var(--primary)" } };
    function wO() {
      let { data: e } = xI();
      return (0, _.jsx)(xE, {
        config: ww,
        className: "h-26 w-full !aspect-auto",
        children: (0, _.jsxs)(mH, {
          accessibilityLayer: !0,
          data: e,
          children: [
            (0, _.jsx)(gh, { dataKey: "date", hide: !0 }),
            (0, _.jsx)(xP, {
              cursor: !1,
              content: (0, _.jsx)(xk, {}),
              labelFormatter: (e) =>
                (0, z.default)(1e3 * Number(e)).format("MM/DD/YYYY"),
            }),
            (0, _.jsx)(y$, {
              dataKey: "sellerCount",
              fill: "var(--color-tx)",
              radius: 8,
            }),
          ],
        }),
      });
    }
    let wj = () => {
      let { data: e } = (0, T.useQuery)({
        queryKey: ["protocol", "all"],
        queryFn: async () =>
          fetch("/api/protocol?chain=all").then((e) => e.json()),
        refetchInterval: 1e4,
      });
      return (0, _.jsxs)("div", {
        children: [
          (0, _.jsx)(D.Typography, { variant: "h3", children: "Overall" }),
          (0, _.jsx)(D.Typography, {
            className: "text-foreground/60 mb-4",
            children: "x402 global insights",
          }),
          (0, _.jsxs)("div", {
            className: "grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4",
            children: [
              (0, _.jsxs)("div", {
                className: "min-w-0 overflow-hidden rounded-lg bg-card p-4",
                children: [
                  (0, _.jsx)(D.Typography, {
                    className: "text-foreground/50 mb-1",
                    children: "Transactions",
                  }),
                  (0, _.jsx)(D.Typography, {
                    variant: "h3",
                    className: "break-words",
                    children: (0, R.formatHuman)(e?.txCount),
                  }),
                  (0, _.jsx)(xC, {}),
                ],
              }),
              (0, _.jsxs)("div", {
                className: "min-w-0 overflow-hidden rounded-lg bg-card p-4",
                children: [
                  (0, _.jsx)(D.Typography, {
                    className: "text-foreground/50 mb-1",
                    children: "Volume",
                  }),
                  (0, _.jsxs)(D.Typography, {
                    variant: "h3",
                    className: "break-words",
                    children: ["$", (0, R.formatHuman)(e?.volume)],
                  }),
                  (0, _.jsx)(wg, {}),
                ],
              }),
              (0, _.jsxs)("div", {
                className: "min-w-0 overflow-hidden rounded-lg bg-card p-4",
                children: [
                  (0, _.jsx)(D.Typography, {
                    className: "text-foreground/50 mb-1",
                    children: "Buyers",
                  }),
                  (0, _.jsx)(D.Typography, {
                    variant: "h3",
                    className: "break-words",
                    children: (0, R.formatHuman)(e?.buyerCount),
                  }),
                  (0, _.jsx)(wx, {}),
                ],
              }),
              (0, _.jsxs)("div", {
                className: "min-w-0 overflow-hidden rounded-lg bg-card p-4",
                children: [
                  (0, _.jsx)(D.Typography, {
                    className: "text-foreground/50 mb-1",
                    children: "Seller",
                  }),
                  (0, _.jsx)(D.Typography, {
                    variant: "h3",
                    className: "break-words",
                    children: (0, R.formatHuman)(e?.sellerCount),
                  }),
                  (0, _.jsx)(wO, {}),
                ],
              }),
            ],
          }),
        ],
      });
    };
    function wA() {
      return (0, _.jsxs)("div", {
        className: "container mx-auto px-4 flex flex-col gap-10 pb-20",
        children: [
          (0, _.jsx)(wj, {}),
          (0, _.jsx)(V, {}),
          (0, _.jsx)(Y.Transactions, {}),
        ],
      });
    }
    e.s(["default", () => wA], 353941);
  },
]);
