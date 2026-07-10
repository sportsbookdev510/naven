(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  524486,
  (e) => {
    "use strict";
    var t = e.i(110902);
    let r = [
      {
        id: "0x81265a211e6b05ef3c2dbee92d79759491057003",
        name: "Naven Genesis NFT",
        desc: "Mint the Naven Genesis ERC-1155 NFT after a Robinhood USDG x402 payment.",
        address: "0x81265a211e6b05ef3c2dbee92d79759491057003",
        logo: "/genesis-nft.png",
        chainId: 4663,
        resources: [
          {
            name: "/genesis/create",
            desc: "Genesis NFT mint endpoint.",
            url: "https://api.naven.network/genesis/create",
            price: "$1",
            chainId: 4663,
            method: "POST",
          },
        ],
      },
      {
        id: "0xb9A67f59bcfd3b45fe1ca2c55A55C19B2b35B58f",
        name: "Robinhood x402 test",
        desc: "Robinhood x402 payment receiver for USDG test requests.",
        address: "0xb9A67f59bcfd3b45fe1ca2c55A55C19B2b35B58f",
        logo: "/robinhood.png",
        chainId: 4663,
        resources: [
          {
            name: "/x402-test/ping",
            desc: "Robinhood x402 smoke test endpoint.",
            url: "https://api.naven.network/x402-test/ping",
            price: "$0.0001",
            chainId: 4663,
          },
        ],
      },
      {
        id: "0x30c2f85d3cef6eec2602281b0055b563f4299585",
        name: "mint-nft-api.naven.network",
        desc: "Mint nft api",
        address: "0x30c2f85d3cef6eec2602281b0055b563f4299585",
        logo: "/naven-ping-server.png",
        chainId: 196,
        resources: [
          {
            name: "/mint",
            desc: "Mint",
            url: "https://mint-nft-api.naven.network/mint",
            price: "$0.1",
            chainId: 196,
          },
        ],
      },
      {
        id: "0x0241ffBeCf13FdC5FF68f336583e57717D661C04",
        name: "mint.hypie.fun",
        desc: "The hypest x402 Agent launchpad on @XLayerOfficial.",
        address: "0x0241ffBeCf13FdC5FF68f336583e57717D661C04",
        logo: "https://pbs.twimg.com/profile_images/1945837690730975232/CgNa8RRm_400x400.jpg",
        chainId: 196,
        resources: [
          {
            name: "/mint",
            desc: "Mint",
            url: "https://mint.hypie.fun/mint",
            price: "$0.1",
            chainId: 196,
          },
        ],
      },
      {
        id: "0xD74ab362fB6ce2238d09503E320fA28Db17D685b",
        name: "random-api-kite.naven.network",
        desc: "Test endpoint for x402 integration. Use it to verify connectivity and basic request handling on naven.network.",
        address: "0xD74ab362fB6ce2238d09503E320fA28Db17D685b",
        logo: "/naven-ping-server.png",
        chainId: 2368,
        resources: [
          {
            name: "/kiteai-testnet/random",
            desc: "Random random endpoint.",
            url: "https://ping-api.naven.network/kiteai-testnet/random",
            price: "$0.01",
            chainId: 2368,
          },
        ],
      },
      {
        id: "0xe12158deb6540f5276d719dcbe9964fc47680015",
        name: "ping-api.naven.network",
        desc: "Test endpoint for x402 integration. Use it to verify connectivity and basic request handling on naven.network.",
        address: "0xe12158deb6540f5276d719dcbe9964fc47680015",
        logo: "/naven-ping-server.png",
        chainId: 196,
        resources: [
          {
            name: "/xlayer/btc-price",
            desc: "Paid endpoint for BTC pricing.",
            url: "https://ping-api.naven.network/xlayer/btc-price",
            price: "$0.01",
            chainId: 196,
          },
        ],
      },
      {
        id: "0xc604ac7bd2fb33b1e4446ec2a9083fa8ab8474eb",
        name: "random-api.naven.network",
        desc: "Test endpoint for x402 integration. Use it to verify connectivity and basic request handling on naven.network.",
        address: "0xc604ac7bd2fb33b1e4446ec2a9083fa8ab8474eb",
        logo: "/naven-ping-server.png",
        chainId: 196,
        resources: [
          {
            name: "/xlayer/random",
            desc: "Random random endpoint.",
            url: "https://ping-api.naven.network/xlayer/random",
            price: "$0.01",
            chainId: 196,
          },
        ],
      },
      {
        id: "0xF310d84a5720772A5401823721F81D6BDC475ffa",
        name: "random-api-base.naven.network",
        desc: "Test endpoint for x402 integration. Use it to verify connectivity and basic request handling on naven.network.",
        address: "0xF310d84a5720772A5401823721F81D6BDC475ffa",
        logo: "/naven-ping-server.png",
        chainId: t.base.id,
        resources: [
          {
            name: "/base/random",
            desc: "Random random endpoint.",
            url: "https://ping-api.naven.network/base/random",
            price: "$0.01",
            chainId: t.base.id,
          },
        ],
      },
    ];
    e.s(["knownServers", 0, r]);
  },
  371638,
  (e) => {
    "use strict";
    var t = e.i(719097),
      r = e.i(207298),
      n = e.i(152236);
    let s = (0, r.cva)("", {
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
    function i({ className: e, variant: r, color: i, ...a }) {
      return (0, t.jsx)("div", {
        "data-slot": "typography",
        className: (0, n.cn)(s({ variant: r, color: i }), e),
        ...a,
      });
    }
    e.s(["Typography", () => i]);
  },
  914104,
  (e) => {
    "use strict";
    let t;
    var r = e.i(661361),
      n = e.i(402948),
      s = e.i(866224),
      i = e.i(705807),
      a = e.i(469738),
      o = e.i(387120),
      u = e.i(422178),
      c = e.i(188264),
      l = class extends a.Subscribable {
        constructor(e, t) {
          super(),
            (this.options = t),
            (this.#e = e),
            (this.#t = null),
            (this.#r = (0, o.pendingThenable)()),
            this.bindMethods(),
            this.setOptions(t);
        }
        #e;
        #n = void 0;
        #s = void 0;
        #i = void 0;
        #a;
        #o;
        #r;
        #t;
        #u;
        #c;
        #l;
        #h;
        #d;
        #p;
        #f = new Set();
        bindMethods() {
          this.refetch = this.refetch.bind(this);
        }
        onSubscribe() {
          1 === this.listeners.size &&
            (this.#n.addObserver(this),
            h(this.#n, this.options) ? this.#v() : this.updateResult(),
            this.#y());
        }
        onUnsubscribe() {
          this.hasListeners() || this.destroy();
        }
        shouldFetchOnReconnect() {
          return d(this.#n, this.options, this.options.refetchOnReconnect);
        }
        shouldFetchOnWindowFocus() {
          return d(this.#n, this.options, this.options.refetchOnWindowFocus);
        }
        destroy() {
          (this.listeners = new Set()),
            this.#m(),
            this.#b(),
            this.#n.removeObserver(this);
        }
        setOptions(e) {
          let t = this.options,
            r = this.#n;
          if (
            ((this.options = this.#e.defaultQueryOptions(e)),
            void 0 !== this.options.enabled &&
              "boolean" != typeof this.options.enabled &&
              "function" != typeof this.options.enabled &&
              "boolean" !=
                typeof (0, u.resolveQueryBoolean)(
                  this.options.enabled,
                  this.#n
                ))
          )
            throw Error(
              "Expected enabled to be a boolean or a callback that returns a boolean"
            );
          this.#g(),
            this.#n.setOptions(this.options),
            t._defaulted &&
              !(0, u.shallowEqualObjects)(this.options, t) &&
              this.#e
                .getQueryCache()
                .notify({
                  type: "observerOptionsUpdated",
                  query: this.#n,
                  observer: this,
                });
          let n = this.hasListeners();
          n && p(this.#n, r, this.options, t) && this.#v(),
            this.updateResult(),
            n &&
              (this.#n !== r ||
                (0, u.resolveQueryBoolean)(this.options.enabled, this.#n) !==
                  (0, u.resolveQueryBoolean)(t.enabled, this.#n) ||
                (0, u.resolveStaleTime)(this.options.staleTime, this.#n) !==
                  (0, u.resolveStaleTime)(t.staleTime, this.#n)) &&
              this.#R();
          let s = this.#x();
          n &&
            (this.#n !== r ||
              (0, u.resolveQueryBoolean)(this.options.enabled, this.#n) !==
                (0, u.resolveQueryBoolean)(t.enabled, this.#n) ||
              s !== this.#p) &&
            this.#Q(s);
        }
        getOptimisticResult(e) {
          var t, r;
          let n = this.#e.getQueryCache().build(this.#e, e),
            s = this.createResult(n, e);
          return (
            (t = this),
            (r = s),
            (0, u.shallowEqualObjects)(t.getCurrentResult(), r) ||
              ((this.#i = s),
              (this.#o = this.options),
              (this.#a = this.#n.state)),
            s
          );
        }
        getCurrentResult() {
          return this.#i;
        }
        trackResult(e, t) {
          return new Proxy(e, {
            get: (e, r) => (
              this.trackProp(r),
              t?.(r),
              "promise" === r &&
                (this.trackProp("data"),
                this.options.experimental_prefetchInRender ||
                  "pending" !== this.#r.status ||
                  this.#r.reject(
                    Error(
                      "experimental_prefetchInRender feature flag is not enabled"
                    )
                  )),
              Reflect.get(e, r)
            ),
          });
        }
        trackProp(e) {
          this.#f.add(e);
        }
        getCurrentQuery() {
          return this.#n;
        }
        refetch({ ...e } = {}) {
          return this.fetch({ ...e });
        }
        fetchOptimistic(e) {
          let t = this.#e.defaultQueryOptions(e),
            r = this.#e.getQueryCache().build(this.#e, t);
          return r.fetch().then(() => this.createResult(r, t));
        }
        fetch(e) {
          return this.#v({ ...e, cancelRefetch: e.cancelRefetch ?? !0 }).then(
            () => (this.updateResult(), this.#i)
          );
        }
        #v(e) {
          this.#g();
          let t = this.#n.fetch(this.options, e);
          return e?.throwOnError || (t = t.catch(u.noop)), t;
        }
        #R() {
          this.#m();
          let e = (0, u.resolveStaleTime)(this.options.staleTime, this.#n);
          if (
            n.environmentManager.isServer() ||
            this.#i.isStale ||
            !(0, u.isValidTimeout)(e)
          )
            return;
          let t = (0, u.timeUntilStale)(this.#i.dataUpdatedAt, e);
          this.#h = c.timeoutManager.setTimeout(() => {
            this.#i.isStale || this.updateResult();
          }, t + 1);
        }
        #x() {
          return (
            ("function" == typeof this.options.refetchInterval
              ? this.options.refetchInterval(this.#n)
              : this.options.refetchInterval) ?? !1
          );
        }
        #Q(e) {
          this.#b(),
            (this.#p = e),
            !n.environmentManager.isServer() &&
              !1 !==
                (0, u.resolveQueryBoolean)(this.options.enabled, this.#n) &&
              (0, u.isValidTimeout)(this.#p) &&
              0 !== this.#p &&
              (this.#d = c.timeoutManager.setInterval(() => {
                (this.options.refetchIntervalInBackground ||
                  r.focusManager.isFocused()) &&
                  this.#v();
              }, this.#p));
        }
        #y() {
          this.#R(), this.#Q(this.#x());
        }
        #m() {
          void 0 !== this.#h &&
            (c.timeoutManager.clearTimeout(this.#h), (this.#h = void 0));
        }
        #b() {
          void 0 !== this.#d &&
            (c.timeoutManager.clearInterval(this.#d), (this.#d = void 0));
        }
        createResult(e, t) {
          let r,
            n = this.#n,
            s = this.options,
            a = this.#i,
            c = this.#a,
            l = this.#o,
            d = e !== n ? e.state : this.#s,
            { state: v } = e,
            y = { ...v },
            m = !1;
          if (t._optimisticResults) {
            let r = this.hasListeners(),
              a = !r && h(e, t),
              o = r && p(e, n, t, s);
            (a || o) && (y = { ...y, ...(0, i.fetchState)(v.data, e.options) }),
              "isRestoring" === t._optimisticResults &&
                (y.fetchStatus = "idle");
          }
          let { error: b, errorUpdatedAt: g, status: R } = y;
          r = y.data;
          let x = !1;
          if (void 0 !== t.placeholderData && void 0 === r && "pending" === R) {
            let e;
            a?.isPlaceholderData && t.placeholderData === l?.placeholderData
              ? ((e = a.data), (x = !0))
              : (e =
                  "function" == typeof t.placeholderData
                    ? t.placeholderData(this.#l?.state.data, this.#l)
                    : t.placeholderData),
              void 0 !== e &&
                ((R = "success"),
                (r = (0, u.replaceData)(a?.data, e, t)),
                (m = !0));
          }
          if (t.select && void 0 !== r && !x)
            if (a && r === c?.data && t.select === this.#u) r = this.#c;
            else
              try {
                (this.#u = t.select),
                  (r = t.select(r)),
                  (r = (0, u.replaceData)(a?.data, r, t)),
                  (this.#c = r),
                  (this.#t = null);
              } catch (e) {
                this.#t = e;
              }
          this.#t &&
            ((b = this.#t), (r = this.#c), (g = Date.now()), (R = "error"));
          let Q = "fetching" === y.fetchStatus,
            I = "pending" === R,
            S = "error" === R,
            T = I && Q,
            w = void 0 !== r,
            O = {
              status: R,
              fetchStatus: y.fetchStatus,
              isPending: I,
              isSuccess: "success" === R,
              isError: S,
              isInitialLoading: T,
              isLoading: T,
              data: r,
              dataUpdatedAt: y.dataUpdatedAt,
              error: b,
              errorUpdatedAt: g,
              failureCount: y.fetchFailureCount,
              failureReason: y.fetchFailureReason,
              errorUpdateCount: y.errorUpdateCount,
              isFetched: e.isFetched(),
              isFetchedAfterMount:
                y.dataUpdateCount > d.dataUpdateCount ||
                y.errorUpdateCount > d.errorUpdateCount,
              isFetching: Q,
              isRefetching: Q && !I,
              isLoadingError: S && !w,
              isPaused: "paused" === y.fetchStatus,
              isPlaceholderData: m,
              isRefetchError: S && w,
              isStale: f(e, t),
              refetch: this.refetch,
              promise: this.#r,
              isEnabled: !1 !== (0, u.resolveQueryBoolean)(t.enabled, e),
            };
          if (this.options.experimental_prefetchInRender) {
            let t = void 0 !== O.data,
              r = "error" === O.status && !t,
              s = (e) => {
                r ? e.reject(O.error) : t && e.resolve(O.data);
              },
              i = () => {
                s((this.#r = O.promise = (0, o.pendingThenable)()));
              },
              a = this.#r;
            switch (a.status) {
              case "pending":
                e.queryHash === n.queryHash && s(a);
                break;
              case "fulfilled":
                (r || O.data !== a.value) && i();
                break;
              case "rejected":
                (r && O.error === a.reason) || i();
            }
          }
          return O;
        }
        updateResult() {
          let e = this.#i,
            t = this.createResult(this.#n, this.options);
          if (
            ((this.#a = this.#n.state),
            (this.#o = this.options),
            void 0 !== this.#a.data && (this.#l = this.#n),
            (0, u.shallowEqualObjects)(t, e))
          )
            return;
          this.#i = t;
          let r = () => {
            if (!e) return !0;
            let { notifyOnChangeProps: t } = this.options,
              r = "function" == typeof t ? t() : t;
            if ("all" === r || (!r && !this.#f.size)) return !0;
            let n = new Set(r ?? this.#f);
            return (
              this.options.throwOnError && n.add("error"),
              Object.keys(this.#i).some((t) => this.#i[t] !== e[t] && n.has(t))
            );
          };
          this.#I({ listeners: r() });
        }
        #g() {
          let e = this.#e.getQueryCache().build(this.#e, this.options);
          if (e === this.#n) return;
          let t = this.#n;
          (this.#n = e),
            (this.#s = e.state),
            this.hasListeners() &&
              (t?.removeObserver(this), e.addObserver(this));
        }
        onQueryUpdate() {
          this.updateResult(), this.hasListeners() && this.#y();
        }
        #I(e) {
          s.notifyManager.batch(() => {
            e.listeners &&
              this.listeners.forEach((e) => {
                e(this.#i);
              }),
              this.#e
                .getQueryCache()
                .notify({ query: this.#n, type: "observerResultsUpdated" });
          });
        }
      };
    function h(e, t) {
      return (
        (!1 !== (0, u.resolveQueryBoolean)(t.enabled, e) &&
          void 0 === e.state.data &&
          ("error" !== e.state.status ||
            !1 !== (0, u.resolveQueryBoolean)(t.retryOnMount, e))) ||
        (void 0 !== e.state.data && d(e, t, t.refetchOnMount))
      );
    }
    function d(e, t, r) {
      if (
        !1 !== (0, u.resolveQueryBoolean)(t.enabled, e) &&
        "static" !== (0, u.resolveStaleTime)(t.staleTime, e)
      ) {
        let n = "function" == typeof r ? r(e) : r;
        return "always" === n || (!1 !== n && f(e, t));
      }
      return !1;
    }
    function p(e, t, r, n) {
      return (
        (e !== t || !1 === (0, u.resolveQueryBoolean)(n.enabled, e)) &&
        (!r.suspense || "error" !== e.state.status) &&
        f(e, r)
      );
    }
    function f(e, t) {
      return (
        !1 !== (0, u.resolveQueryBoolean)(t.enabled, e) &&
        e.isStaleByTime((0, u.resolveStaleTime)(t.staleTime, e))
      );
    }
    e.i(965595);
    var v = e.i(642947),
      y = e.i(707602);
    e.i(719097);
    var m = v.createContext(
        ((t = !1),
        {
          clearReset: () => {
            t = !1;
          },
          reset: () => {
            t = !0;
          },
          isReset: () => t,
        })
      ),
      b = v.createContext(!1);
    b.Provider;
    var g = (e, t, r) =>
      t.fetchOptimistic(e).catch(() => {
        r.clearReset();
      });
    function R(e, t) {
      return (function (e, t, r) {
        let i,
          a = v.useContext(b),
          o = v.useContext(m),
          c = (0, y.useQueryClient)(r),
          l = c.defaultQueryOptions(e);
        c.getDefaultOptions().queries?._experimental_beforeQuery?.(l);
        let h = c.getQueryCache().get(l.queryHash),
          d = !1 !== e.subscribed;
        if (
          ((l._optimisticResults = a
            ? "isRestoring"
            : d
            ? "optimistic"
            : void 0),
          l.suspense)
        ) {
          let e = (e) => ("static" === e ? e : Math.max(e ?? 1e3, 1e3)),
            t = l.staleTime;
          (l.staleTime = "function" == typeof t ? (...r) => e(t(...r)) : e(t)),
            "number" == typeof l.gcTime && (l.gcTime = Math.max(l.gcTime, 1e3));
        }
        (i =
          h?.state.error && "function" == typeof l.throwOnError
            ? (0, u.shouldThrowError)(l.throwOnError, [h.state.error, h])
            : l.throwOnError),
          (l.suspense || l.experimental_prefetchInRender || i) &&
            !o.isReset() &&
            (l.retryOnMount = !1),
          v.useEffect(() => {
            o.clearReset();
          }, [o]);
        let p = !c.getQueryCache().get(l.queryHash),
          [f] = v.useState(() => new t(c, l)),
          R = f.getOptimisticResult(l),
          x = !a && d;
        if (
          (v.useSyncExternalStore(
            v.useCallback(
              (e) => {
                let t = x ? f.subscribe(s.notifyManager.batchCalls(e)) : u.noop;
                return f.updateResult(), t;
              },
              [f, x]
            ),
            () => f.getCurrentResult(),
            () => f.getCurrentResult()
          ),
          v.useEffect(() => {
            f.setOptions(l);
          }, [l, f]),
          l?.suspense && R.isPending)
        )
          throw g(l, f, o);
        if (
          (({
            result: e,
            errorResetBoundary: t,
            throwOnError: r,
            query: n,
            suspense: s,
          }) =>
            e.isError &&
            !t.isReset() &&
            !e.isFetching &&
            n &&
            ((s && void 0 === e.data) ||
              (0, u.shouldThrowError)(r, [e.error, n])))({
            result: R,
            errorResetBoundary: o,
            throwOnError: l.throwOnError,
            query: h,
            suspense: l.suspense,
          })
        )
          throw R.error;
        if (
          (c.getDefaultOptions().queries?._experimental_afterQuery?.(l, R),
          l.experimental_prefetchInRender &&
            !n.environmentManager.isServer() &&
            R.isLoading &&
            R.isFetching &&
            !a)
        ) {
          let e = p ? g(l, f, o) : h?.promise;
          e?.catch(u.noop).finally(() => {
            f.updateResult();
          });
        }
        return l.notifyOnChangeProps ? R : f.trackResult(R);
      })(e, l, t);
    }
    e.s(["useQuery", () => R], 914104);
  },
  726381,
  (e, t, r) => {
    "use strict";
    var n = e.r(642947),
      s =
        "function" == typeof Object.is
          ? Object.is
          : function (e, t) {
              return (
                (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
              );
            },
      i = n.useState,
      a = n.useEffect,
      o = n.useLayoutEffect,
      u = n.useDebugValue;
    function c(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var r = t();
        return !s(e, r);
      } catch (e) {
        return !0;
      }
    }
    var l =
      "u" < typeof window ||
      void 0 === window.document ||
      void 0 === window.document.createElement
        ? function (e, t) {
            return t();
          }
        : function (e, t) {
            var r = t(),
              n = i({ inst: { value: r, getSnapshot: t } }),
              s = n[0].inst,
              l = n[1];
            return (
              o(
                function () {
                  (s.value = r), (s.getSnapshot = t), c(s) && l({ inst: s });
                },
                [e, r, t]
              ),
              a(
                function () {
                  return (
                    c(s) && l({ inst: s }),
                    e(function () {
                      c(s) && l({ inst: s });
                    })
                  );
                },
                [e]
              ),
              u(r),
              r
            );
          };
    r.useSyncExternalStore =
      void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : l;
  },
  718315,
  (e, t, r) => {
    "use strict";
    t.exports = e.r(726381);
  },
  995218,
  (e, t, r) => {
    "use strict";
    var n = e.r(642947),
      s = e.r(718315),
      i =
        "function" == typeof Object.is
          ? Object.is
          : function (e, t) {
              return (
                (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
              );
            },
      a = s.useSyncExternalStore,
      o = n.useRef,
      u = n.useEffect,
      c = n.useMemo,
      l = n.useDebugValue;
    r.useSyncExternalStoreWithSelector = function (e, t, r, n, s) {
      var h = o(null);
      if (null === h.current) {
        var d = { hasValue: !1, value: null };
        h.current = d;
      } else d = h.current;
      var p = a(
        e,
        (h = c(
          function () {
            function e(e) {
              if (!u) {
                if (
                  ((u = !0), (a = e), (e = n(e)), void 0 !== s && d.hasValue)
                ) {
                  var t = d.value;
                  if (s(t, e)) return (o = t);
                }
                return (o = e);
              }
              if (((t = o), i(a, e))) return t;
              var r = n(e);
              return void 0 !== s && s(t, r)
                ? ((a = e), t)
                : ((a = e), (o = r));
            }
            var a,
              o,
              u = !1,
              c = void 0 === r ? null : r;
            return [
              function () {
                return e(t());
              },
              null === c
                ? void 0
                : function () {
                    return e(c());
                  },
            ];
          },
          [t, r, n, s]
        ))[0],
        h[1]
      );
      return (
        u(
          function () {
            (d.hasValue = !0), (d.value = p);
          },
          [p]
        ),
        l(p),
        p
      );
    };
  },
  40495,
  (e, t, r) => {
    "use strict";
    t.exports = e.r(995218);
  },
]);
