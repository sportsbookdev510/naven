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
      s = e.i(152236);
    let i = (0, r.cva)("", {
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
    function n({ className: e, variant: r, color: n, ...a }) {
      return (0, t.jsx)("div", {
        "data-slot": "typography",
        className: (0, s.cn)(i({ variant: r, color: n }), e),
        ...a,
      });
    }
    e.s(["Typography", () => n]);
  },
  914104,
  (e) => {
    "use strict";
    let t;
    var r = e.i(661361),
      s = e.i(402948),
      i = e.i(866224),
      n = e.i(705807),
      a = e.i(469738),
      o = e.i(387120),
      c = e.i(422178),
      u = e.i(188264),
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
        #s = void 0;
        #i = void 0;
        #n = void 0;
        #a;
        #o;
        #r;
        #t;
        #c;
        #u;
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
            (this.#s.addObserver(this),
            h(this.#s, this.options) ? this.#m() : this.updateResult(),
            this.#v());
        }
        onUnsubscribe() {
          this.hasListeners() || this.destroy();
        }
        shouldFetchOnReconnect() {
          return d(this.#s, this.options, this.options.refetchOnReconnect);
        }
        shouldFetchOnWindowFocus() {
          return d(this.#s, this.options, this.options.refetchOnWindowFocus);
        }
        destroy() {
          (this.listeners = new Set()),
            this.#y(),
            this.#b(),
            this.#s.removeObserver(this);
        }
        setOptions(e) {
          let t = this.options,
            r = this.#s;
          if (
            ((this.options = this.#e.defaultQueryOptions(e)),
            void 0 !== this.options.enabled &&
              "boolean" != typeof this.options.enabled &&
              "function" != typeof this.options.enabled &&
              "boolean" !=
                typeof (0, c.resolveQueryBoolean)(
                  this.options.enabled,
                  this.#s
                ))
          )
            throw Error(
              "Expected enabled to be a boolean or a callback that returns a boolean"
            );
          this.#g(),
            this.#s.setOptions(this.options),
            t._defaulted &&
              !(0, c.shallowEqualObjects)(this.options, t) &&
              this.#e
                .getQueryCache()
                .notify({
                  type: "observerOptionsUpdated",
                  query: this.#s,
                  observer: this,
                });
          let s = this.hasListeners();
          s && p(this.#s, r, this.options, t) && this.#m(),
            this.updateResult(),
            s &&
              (this.#s !== r ||
                (0, c.resolveQueryBoolean)(this.options.enabled, this.#s) !==
                  (0, c.resolveQueryBoolean)(t.enabled, this.#s) ||
                (0, c.resolveStaleTime)(this.options.staleTime, this.#s) !==
                  (0, c.resolveStaleTime)(t.staleTime, this.#s)) &&
              this.#R();
          let i = this.#x();
          s &&
            (this.#s !== r ||
              (0, c.resolveQueryBoolean)(this.options.enabled, this.#s) !==
                (0, c.resolveQueryBoolean)(t.enabled, this.#s) ||
              i !== this.#p) &&
            this.#Q(i);
        }
        getOptimisticResult(e) {
          var t, r;
          let s = this.#e.getQueryCache().build(this.#e, e),
            i = this.createResult(s, e);
          return (
            (t = this),
            (r = i),
            (0, c.shallowEqualObjects)(t.getCurrentResult(), r) ||
              ((this.#n = i),
              (this.#o = this.options),
              (this.#a = this.#s.state)),
            i
          );
        }
        getCurrentResult() {
          return this.#n;
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
          return this.#s;
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
          return this.#m({ ...e, cancelRefetch: e.cancelRefetch ?? !0 }).then(
            () => (this.updateResult(), this.#n)
          );
        }
        #m(e) {
          this.#g();
          let t = this.#s.fetch(this.options, e);
          return e?.throwOnError || (t = t.catch(c.noop)), t;
        }
        #R() {
          this.#y();
          let e = (0, c.resolveStaleTime)(this.options.staleTime, this.#s);
          if (
            s.environmentManager.isServer() ||
            this.#n.isStale ||
            !(0, c.isValidTimeout)(e)
          )
            return;
          let t = (0, c.timeUntilStale)(this.#n.dataUpdatedAt, e);
          this.#h = u.timeoutManager.setTimeout(() => {
            this.#n.isStale || this.updateResult();
          }, t + 1);
        }
        #x() {
          return (
            ("function" == typeof this.options.refetchInterval
              ? this.options.refetchInterval(this.#s)
              : this.options.refetchInterval) ?? !1
          );
        }
        #Q(e) {
          this.#b(),
            (this.#p = e),
            !s.environmentManager.isServer() &&
              !1 !==
                (0, c.resolveQueryBoolean)(this.options.enabled, this.#s) &&
              (0, c.isValidTimeout)(this.#p) &&
              0 !== this.#p &&
              (this.#d = u.timeoutManager.setInterval(() => {
                (this.options.refetchIntervalInBackground ||
                  r.focusManager.isFocused()) &&
                  this.#m();
              }, this.#p));
        }
        #v() {
          this.#R(), this.#Q(this.#x());
        }
        #y() {
          void 0 !== this.#h &&
            (u.timeoutManager.clearTimeout(this.#h), (this.#h = void 0));
        }
        #b() {
          void 0 !== this.#d &&
            (u.timeoutManager.clearInterval(this.#d), (this.#d = void 0));
        }
        createResult(e, t) {
          let r,
            s = this.#s,
            i = this.options,
            a = this.#n,
            u = this.#a,
            l = this.#o,
            d = e !== s ? e.state : this.#i,
            { state: m } = e,
            v = { ...m },
            y = !1;
          if (t._optimisticResults) {
            let r = this.hasListeners(),
              a = !r && h(e, t),
              o = r && p(e, s, t, i);
            (a || o) && (v = { ...v, ...(0, n.fetchState)(m.data, e.options) }),
              "isRestoring" === t._optimisticResults &&
                (v.fetchStatus = "idle");
          }
          let { error: b, errorUpdatedAt: g, status: R } = v;
          r = v.data;
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
                (r = (0, c.replaceData)(a?.data, e, t)),
                (y = !0));
          }
          if (t.select && void 0 !== r && !x)
            if (a && r === u?.data && t.select === this.#c) r = this.#u;
            else
              try {
                (this.#c = t.select),
                  (r = t.select(r)),
                  (r = (0, c.replaceData)(a?.data, r, t)),
                  (this.#u = r),
                  (this.#t = null);
              } catch (e) {
                this.#t = e;
              }
          this.#t &&
            ((b = this.#t), (r = this.#u), (g = Date.now()), (R = "error"));
          let Q = "fetching" === v.fetchStatus,
            I = "pending" === R,
            T = "error" === R,
            S = I && Q,
            w = void 0 !== r,
            O = {
              status: R,
              fetchStatus: v.fetchStatus,
              isPending: I,
              isSuccess: "success" === R,
              isError: T,
              isInitialLoading: S,
              isLoading: S,
              data: r,
              dataUpdatedAt: v.dataUpdatedAt,
              error: b,
              errorUpdatedAt: g,
              failureCount: v.fetchFailureCount,
              failureReason: v.fetchFailureReason,
              errorUpdateCount: v.errorUpdateCount,
              isFetched: e.isFetched(),
              isFetchedAfterMount:
                v.dataUpdateCount > d.dataUpdateCount ||
                v.errorUpdateCount > d.errorUpdateCount,
              isFetching: Q,
              isRefetching: Q && !I,
              isLoadingError: T && !w,
              isPaused: "paused" === v.fetchStatus,
              isPlaceholderData: y,
              isRefetchError: T && w,
              isStale: f(e, t),
              refetch: this.refetch,
              promise: this.#r,
              isEnabled: !1 !== (0, c.resolveQueryBoolean)(t.enabled, e),
            };
          if (this.options.experimental_prefetchInRender) {
            let t = void 0 !== O.data,
              r = "error" === O.status && !t,
              i = (e) => {
                r ? e.reject(O.error) : t && e.resolve(O.data);
              },
              n = () => {
                i((this.#r = O.promise = (0, o.pendingThenable)()));
              },
              a = this.#r;
            switch (a.status) {
              case "pending":
                e.queryHash === s.queryHash && i(a);
                break;
              case "fulfilled":
                (r || O.data !== a.value) && n();
                break;
              case "rejected":
                (r && O.error === a.reason) || n();
            }
          }
          return O;
        }
        updateResult() {
          let e = this.#n,
            t = this.createResult(this.#s, this.options);
          if (
            ((this.#a = this.#s.state),
            (this.#o = this.options),
            void 0 !== this.#a.data && (this.#l = this.#s),
            (0, c.shallowEqualObjects)(t, e))
          )
            return;
          this.#n = t;
          let r = () => {
            if (!e) return !0;
            let { notifyOnChangeProps: t } = this.options,
              r = "function" == typeof t ? t() : t;
            if ("all" === r || (!r && !this.#f.size)) return !0;
            let s = new Set(r ?? this.#f);
            return (
              this.options.throwOnError && s.add("error"),
              Object.keys(this.#n).some((t) => this.#n[t] !== e[t] && s.has(t))
            );
          };
          this.#I({ listeners: r() });
        }
        #g() {
          let e = this.#e.getQueryCache().build(this.#e, this.options);
          if (e === this.#s) return;
          let t = this.#s;
          (this.#s = e),
            (this.#i = e.state),
            this.hasListeners() &&
              (t?.removeObserver(this), e.addObserver(this));
        }
        onQueryUpdate() {
          this.updateResult(), this.hasListeners() && this.#v();
        }
        #I(e) {
          i.notifyManager.batch(() => {
            e.listeners &&
              this.listeners.forEach((e) => {
                e(this.#n);
              }),
              this.#e
                .getQueryCache()
                .notify({ query: this.#s, type: "observerResultsUpdated" });
          });
        }
      };
    function h(e, t) {
      return (
        (!1 !== (0, c.resolveQueryBoolean)(t.enabled, e) &&
          void 0 === e.state.data &&
          ("error" !== e.state.status ||
            !1 !== (0, c.resolveQueryBoolean)(t.retryOnMount, e))) ||
        (void 0 !== e.state.data && d(e, t, t.refetchOnMount))
      );
    }
    function d(e, t, r) {
      if (
        !1 !== (0, c.resolveQueryBoolean)(t.enabled, e) &&
        "static" !== (0, c.resolveStaleTime)(t.staleTime, e)
      ) {
        let s = "function" == typeof r ? r(e) : r;
        return "always" === s || (!1 !== s && f(e, t));
      }
      return !1;
    }
    function p(e, t, r, s) {
      return (
        (e !== t || !1 === (0, c.resolveQueryBoolean)(s.enabled, e)) &&
        (!r.suspense || "error" !== e.state.status) &&
        f(e, r)
      );
    }
    function f(e, t) {
      return (
        !1 !== (0, c.resolveQueryBoolean)(t.enabled, e) &&
        e.isStaleByTime((0, c.resolveStaleTime)(t.staleTime, e))
      );
    }
    e.i(965595);
    var m = e.i(642947),
      v = e.i(707602);
    e.i(719097);
    var y = m.createContext(
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
      b = m.createContext(!1);
    b.Provider;
    var g = (e, t, r) =>
      t.fetchOptimistic(e).catch(() => {
        r.clearReset();
      });
    function R(e, t) {
      return (function (e, t, r) {
        let n,
          a = m.useContext(b),
          o = m.useContext(y),
          u = (0, v.useQueryClient)(r),
          l = u.defaultQueryOptions(e);
        u.getDefaultOptions().queries?._experimental_beforeQuery?.(l);
        let h = u.getQueryCache().get(l.queryHash),
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
        (n =
          h?.state.error && "function" == typeof l.throwOnError
            ? (0, c.shouldThrowError)(l.throwOnError, [h.state.error, h])
            : l.throwOnError),
          (l.suspense || l.experimental_prefetchInRender || n) &&
            !o.isReset() &&
            (l.retryOnMount = !1),
          m.useEffect(() => {
            o.clearReset();
          }, [o]);
        let p = !u.getQueryCache().get(l.queryHash),
          [f] = m.useState(() => new t(u, l)),
          R = f.getOptimisticResult(l),
          x = !a && d;
        if (
          (m.useSyncExternalStore(
            m.useCallback(
              (e) => {
                let t = x ? f.subscribe(i.notifyManager.batchCalls(e)) : c.noop;
                return f.updateResult(), t;
              },
              [f, x]
            ),
            () => f.getCurrentResult(),
            () => f.getCurrentResult()
          ),
          m.useEffect(() => {
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
            query: s,
            suspense: i,
          }) =>
            e.isError &&
            !t.isReset() &&
            !e.isFetching &&
            s &&
            ((i && void 0 === e.data) ||
              (0, c.shouldThrowError)(r, [e.error, s])))({
            result: R,
            errorResetBoundary: o,
            throwOnError: l.throwOnError,
            query: h,
            suspense: l.suspense,
          })
        )
          throw R.error;
        if (
          (u.getDefaultOptions().queries?._experimental_afterQuery?.(l, R),
          l.experimental_prefetchInRender &&
            !s.environmentManager.isServer() &&
            R.isLoading &&
            R.isFetching &&
            !a)
        ) {
          let e = p ? g(l, f, o) : h?.promise;
          e?.catch(c.noop).finally(() => {
            f.updateResult();
          });
        }
        return l.notifyOnChangeProps ? R : f.trackResult(R);
      })(e, l, t);
    }
    e.s(["useQuery", () => R], 914104);
  },
  905573,
  (e) => {
    "use strict";
    var t = e.i(719097),
      r = e.i(580095);
    function s() {
      return (0, t.jsx)("div", {
        className: "w-300 max-w-full mx-auto px-4 flex flex-col gap-10",
        children: (0, t.jsx)(r.Transactions, {}),
      });
    }
    e.s(["default", () => s]);
  },
]);
