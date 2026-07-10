(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  914104,
  (e) => {
    "use strict";
    let t;
    var r = e.i(661361),
      s = e.i(402948),
      i = e.i(866224),
      a = e.i(705807),
      n = e.i(469738),
      l = e.i(387120),
      o = e.i(422178),
      c = e.i(188264),
      d = class extends n.Subscribable {
        constructor(e, t) {
          super(),
            (this.options = t),
            (this.#e = e),
            (this.#t = null),
            (this.#r = (0, l.pendingThenable)()),
            this.bindMethods(),
            this.setOptions(t);
        }
        #e;
        #s = void 0;
        #i = void 0;
        #a = void 0;
        #n;
        #l;
        #r;
        #t;
        #o;
        #c;
        #d;
        #h;
        #u;
        #m;
        #p = new Set();
        bindMethods() {
          this.refetch = this.refetch.bind(this);
        }
        onSubscribe() {
          1 === this.listeners.size &&
            (this.#s.addObserver(this),
            h(this.#s, this.options) ? this.#x() : this.updateResult(),
            this.#f());
        }
        onUnsubscribe() {
          this.hasListeners() || this.destroy();
        }
        shouldFetchOnReconnect() {
          return u(this.#s, this.options, this.options.refetchOnReconnect);
        }
        shouldFetchOnWindowFocus() {
          return u(this.#s, this.options, this.options.refetchOnWindowFocus);
        }
        destroy() {
          (this.listeners = new Set()),
            this.#b(),
            this.#y(),
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
                typeof (0, o.resolveQueryBoolean)(
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
              !(0, o.shallowEqualObjects)(this.options, t) &&
              this.#e
                .getQueryCache()
                .notify({
                  type: "observerOptionsUpdated",
                  query: this.#s,
                  observer: this,
                });
          let s = this.hasListeners();
          s && m(this.#s, r, this.options, t) && this.#x(),
            this.updateResult(),
            s &&
              (this.#s !== r ||
                (0, o.resolveQueryBoolean)(this.options.enabled, this.#s) !==
                  (0, o.resolveQueryBoolean)(t.enabled, this.#s) ||
                (0, o.resolveStaleTime)(this.options.staleTime, this.#s) !==
                  (0, o.resolveStaleTime)(t.staleTime, this.#s)) &&
              this.#v();
          let i = this.#w();
          s &&
            (this.#s !== r ||
              (0, o.resolveQueryBoolean)(this.options.enabled, this.#s) !==
                (0, o.resolveQueryBoolean)(t.enabled, this.#s) ||
              i !== this.#m) &&
            this.#N(i);
        }
        getOptimisticResult(e) {
          var t, r;
          let s = this.#e.getQueryCache().build(this.#e, e),
            i = this.createResult(s, e);
          return (
            (t = this),
            (r = i),
            (0, o.shallowEqualObjects)(t.getCurrentResult(), r) ||
              ((this.#a = i),
              (this.#l = this.options),
              (this.#n = this.#s.state)),
            i
          );
        }
        getCurrentResult() {
          return this.#a;
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
          this.#p.add(e);
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
          return this.#x({ ...e, cancelRefetch: e.cancelRefetch ?? !0 }).then(
            () => (this.updateResult(), this.#a)
          );
        }
        #x(e) {
          this.#g();
          let t = this.#s.fetch(this.options, e);
          return e?.throwOnError || (t = t.catch(o.noop)), t;
        }
        #v() {
          this.#b();
          let e = (0, o.resolveStaleTime)(this.options.staleTime, this.#s);
          if (
            s.environmentManager.isServer() ||
            this.#a.isStale ||
            !(0, o.isValidTimeout)(e)
          )
            return;
          let t = (0, o.timeUntilStale)(this.#a.dataUpdatedAt, e);
          this.#h = c.timeoutManager.setTimeout(() => {
            this.#a.isStale || this.updateResult();
          }, t + 1);
        }
        #w() {
          return (
            ("function" == typeof this.options.refetchInterval
              ? this.options.refetchInterval(this.#s)
              : this.options.refetchInterval) ?? !1
          );
        }
        #N(e) {
          this.#y(),
            (this.#m = e),
            !s.environmentManager.isServer() &&
              !1 !==
                (0, o.resolveQueryBoolean)(this.options.enabled, this.#s) &&
              (0, o.isValidTimeout)(this.#m) &&
              0 !== this.#m &&
              (this.#u = c.timeoutManager.setInterval(() => {
                (this.options.refetchIntervalInBackground ||
                  r.focusManager.isFocused()) &&
                  this.#x();
              }, this.#m));
        }
        #f() {
          this.#v(), this.#N(this.#w());
        }
        #b() {
          void 0 !== this.#h &&
            (c.timeoutManager.clearTimeout(this.#h), (this.#h = void 0));
        }
        #y() {
          void 0 !== this.#u &&
            (c.timeoutManager.clearInterval(this.#u), (this.#u = void 0));
        }
        createResult(e, t) {
          let r,
            s = this.#s,
            i = this.options,
            n = this.#a,
            c = this.#n,
            d = this.#l,
            u = e !== s ? e.state : this.#i,
            { state: x } = e,
            f = { ...x },
            b = !1;
          if (t._optimisticResults) {
            let r = this.hasListeners(),
              n = !r && h(e, t),
              l = r && m(e, s, t, i);
            (n || l) && (f = { ...f, ...(0, a.fetchState)(x.data, e.options) }),
              "isRestoring" === t._optimisticResults &&
                (f.fetchStatus = "idle");
          }
          let { error: y, errorUpdatedAt: g, status: v } = f;
          r = f.data;
          let w = !1;
          if (void 0 !== t.placeholderData && void 0 === r && "pending" === v) {
            let e;
            n?.isPlaceholderData && t.placeholderData === d?.placeholderData
              ? ((e = n.data), (w = !0))
              : (e =
                  "function" == typeof t.placeholderData
                    ? t.placeholderData(this.#d?.state.data, this.#d)
                    : t.placeholderData),
              void 0 !== e &&
                ((v = "success"),
                (r = (0, o.replaceData)(n?.data, e, t)),
                (b = !0));
          }
          if (t.select && void 0 !== r && !w)
            if (n && r === c?.data && t.select === this.#o) r = this.#c;
            else
              try {
                (this.#o = t.select),
                  (r = t.select(r)),
                  (r = (0, o.replaceData)(n?.data, r, t)),
                  (this.#c = r),
                  (this.#t = null);
              } catch (e) {
                this.#t = e;
              }
          this.#t &&
            ((y = this.#t), (r = this.#c), (g = Date.now()), (v = "error"));
          let N = "fetching" === f.fetchStatus,
            j = "pending" === v,
            k = "error" === v,
            R = j && N,
            _ = void 0 !== r,
            I = {
              status: v,
              fetchStatus: f.fetchStatus,
              isPending: j,
              isSuccess: "success" === v,
              isError: k,
              isInitialLoading: R,
              isLoading: R,
              data: r,
              dataUpdatedAt: f.dataUpdatedAt,
              error: y,
              errorUpdatedAt: g,
              failureCount: f.fetchFailureCount,
              failureReason: f.fetchFailureReason,
              errorUpdateCount: f.errorUpdateCount,
              isFetched: e.isFetched(),
              isFetchedAfterMount:
                f.dataUpdateCount > u.dataUpdateCount ||
                f.errorUpdateCount > u.errorUpdateCount,
              isFetching: N,
              isRefetching: N && !j,
              isLoadingError: k && !_,
              isPaused: "paused" === f.fetchStatus,
              isPlaceholderData: b,
              isRefetchError: k && _,
              isStale: p(e, t),
              refetch: this.refetch,
              promise: this.#r,
              isEnabled: !1 !== (0, o.resolveQueryBoolean)(t.enabled, e),
            };
          if (this.options.experimental_prefetchInRender) {
            let t = void 0 !== I.data,
              r = "error" === I.status && !t,
              i = (e) => {
                r ? e.reject(I.error) : t && e.resolve(I.data);
              },
              a = () => {
                i((this.#r = I.promise = (0, l.pendingThenable)()));
              },
              n = this.#r;
            switch (n.status) {
              case "pending":
                e.queryHash === s.queryHash && i(n);
                break;
              case "fulfilled":
                (r || I.data !== n.value) && a();
                break;
              case "rejected":
                (r && I.error === n.reason) || a();
            }
          }
          return I;
        }
        updateResult() {
          let e = this.#a,
            t = this.createResult(this.#s, this.options);
          if (
            ((this.#n = this.#s.state),
            (this.#l = this.options),
            void 0 !== this.#n.data && (this.#d = this.#s),
            (0, o.shallowEqualObjects)(t, e))
          )
            return;
          this.#a = t;
          let r = () => {
            if (!e) return !0;
            let { notifyOnChangeProps: t } = this.options,
              r = "function" == typeof t ? t() : t;
            if ("all" === r || (!r && !this.#p.size)) return !0;
            let s = new Set(r ?? this.#p);
            return (
              this.options.throwOnError && s.add("error"),
              Object.keys(this.#a).some((t) => this.#a[t] !== e[t] && s.has(t))
            );
          };
          this.#j({ listeners: r() });
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
          this.updateResult(), this.hasListeners() && this.#f();
        }
        #j(e) {
          i.notifyManager.batch(() => {
            e.listeners &&
              this.listeners.forEach((e) => {
                e(this.#a);
              }),
              this.#e
                .getQueryCache()
                .notify({ query: this.#s, type: "observerResultsUpdated" });
          });
        }
      };
    function h(e, t) {
      return (
        (!1 !== (0, o.resolveQueryBoolean)(t.enabled, e) &&
          void 0 === e.state.data &&
          ("error" !== e.state.status ||
            !1 !== (0, o.resolveQueryBoolean)(t.retryOnMount, e))) ||
        (void 0 !== e.state.data && u(e, t, t.refetchOnMount))
      );
    }
    function u(e, t, r) {
      if (
        !1 !== (0, o.resolveQueryBoolean)(t.enabled, e) &&
        "static" !== (0, o.resolveStaleTime)(t.staleTime, e)
      ) {
        let s = "function" == typeof r ? r(e) : r;
        return "always" === s || (!1 !== s && p(e, t));
      }
      return !1;
    }
    function m(e, t, r, s) {
      return (
        (e !== t || !1 === (0, o.resolveQueryBoolean)(s.enabled, e)) &&
        (!r.suspense || "error" !== e.state.status) &&
        p(e, r)
      );
    }
    function p(e, t) {
      return (
        !1 !== (0, o.resolveQueryBoolean)(t.enabled, e) &&
        e.isStaleByTime((0, o.resolveStaleTime)(t.staleTime, e))
      );
    }
    e.i(965595);
    var x = e.i(642947),
      f = e.i(707602);
    e.i(719097);
    var b = x.createContext(
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
      y = x.createContext(!1);
    y.Provider;
    var g = (e, t, r) =>
      t.fetchOptimistic(e).catch(() => {
        r.clearReset();
      });
    function v(e, t) {
      return (function (e, t, r) {
        let a,
          n = x.useContext(y),
          l = x.useContext(b),
          c = (0, f.useQueryClient)(r),
          d = c.defaultQueryOptions(e);
        c.getDefaultOptions().queries?._experimental_beforeQuery?.(d);
        let h = c.getQueryCache().get(d.queryHash),
          u = !1 !== e.subscribed;
        if (
          ((d._optimisticResults = n
            ? "isRestoring"
            : u
            ? "optimistic"
            : void 0),
          d.suspense)
        ) {
          let e = (e) => ("static" === e ? e : Math.max(e ?? 1e3, 1e3)),
            t = d.staleTime;
          (d.staleTime = "function" == typeof t ? (...r) => e(t(...r)) : e(t)),
            "number" == typeof d.gcTime && (d.gcTime = Math.max(d.gcTime, 1e3));
        }
        (a =
          h?.state.error && "function" == typeof d.throwOnError
            ? (0, o.shouldThrowError)(d.throwOnError, [h.state.error, h])
            : d.throwOnError),
          (d.suspense || d.experimental_prefetchInRender || a) &&
            !l.isReset() &&
            (d.retryOnMount = !1),
          x.useEffect(() => {
            l.clearReset();
          }, [l]);
        let m = !c.getQueryCache().get(d.queryHash),
          [p] = x.useState(() => new t(c, d)),
          v = p.getOptimisticResult(d),
          w = !n && u;
        if (
          (x.useSyncExternalStore(
            x.useCallback(
              (e) => {
                let t = w ? p.subscribe(i.notifyManager.batchCalls(e)) : o.noop;
                return p.updateResult(), t;
              },
              [p, w]
            ),
            () => p.getCurrentResult(),
            () => p.getCurrentResult()
          ),
          x.useEffect(() => {
            p.setOptions(d);
          }, [d, p]),
          d?.suspense && v.isPending)
        )
          throw g(d, p, l);
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
              (0, o.shouldThrowError)(r, [e.error, s])))({
            result: v,
            errorResetBoundary: l,
            throwOnError: d.throwOnError,
            query: h,
            suspense: d.suspense,
          })
        )
          throw v.error;
        if (
          (c.getDefaultOptions().queries?._experimental_afterQuery?.(d, v),
          d.experimental_prefetchInRender &&
            !s.environmentManager.isServer() &&
            v.isLoading &&
            v.isFetching &&
            !n)
        ) {
          let e = m ? g(d, p, l) : h?.promise;
          e?.catch(o.noop).finally(() => {
            p.updateResult();
          });
        }
        return d.notifyOnChangeProps ? v : p.trackResult(v);
      })(e, d, t);
    }
    e.s(["useQuery", () => v], 914104);
  },
  617610,
  (e) => {
    "use strict";
    e.i(965595);
    var t = e.i(719097),
      r = e.i(263335);
    let s = "0x5fc5360D0400a0Fd4f2af552ADD042D716F1d168",
      i = "USDG",
      a = BigInt("1000000"),
      n = "1 USDG",
      l = "0xComingSoon",
      o = BigInt("1000000"),
      c = "1M tokens",
      d = "0xd650776b5E1AEbD2bFbB5fC852492ff27be48d7F",
      h = BigInt("1"),
      u = Date.parse("2026-07-11T00:20:00+08:00");
    var m = e.i(642947);
    function p(e) {
      return Number.isFinite(e) ? Math.max(0, e - Date.now()) : 0;
    }
    var x = e.i(37754),
      f = e.i(261735),
      b = e.i(224589);
    let y = (0, b.default)("badge-dollar-sign", [
        [
          "path",
          {
            d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
            key: "3c2336",
          },
        ],
        [
          "path",
          { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8", key: "1h4pet" },
        ],
        ["path", { d: "M12 18V6", key: "zqpxq5" }],
      ]),
      g = (0, b.default)("box", [
        [
          "path",
          {
            d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",
            key: "hh9hay",
          },
        ],
        ["path", { d: "m3.3 7 8.7 5 8.7-5", key: "g66t2b" }],
        ["path", { d: "M12 22V12", key: "d0xqtd" }],
      ]);
    var v = e.i(654946),
      w = e.i(975231),
      N = e.i(719815),
      j = e.i(927474);
    let k = (0, b.default)("timer", [
        ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
        ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
        ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }],
      ]),
      R = (0, b.default)("wallet", [
        [
          "path",
          {
            d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",
            key: "18etb6",
          },
        ],
        [
          "path",
          { d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4", key: "xoc0q4" },
        ],
      ]),
      _ = (0, b.default)("wand-sparkles", [
        [
          "path",
          {
            d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",
            key: "ul74o6",
          },
        ],
        ["path", { d: "m14 7 3 3", key: "1r5n42" }],
        ["path", { d: "M5 6v4", key: "ilb8ba" }],
        ["path", { d: "M19 14v4", key: "blhpug" }],
        ["path", { d: "M10 2v2", key: "7u0qdc" }],
        ["path", { d: "M7 8H3", key: "zfb6yr" }],
        ["path", { d: "M21 16h-4", key: "1cnmox" }],
        ["path", { d: "M11 3H9", key: "1obp7u" }],
      ]);
    var I = e.i(120957),
      Q = e.i(269524),
      T = e.i(177070),
      C = e.i(862030),
      S = e.i(799126),
      E = e.i(372152),
      O = e.i(310535),
      M = e.i(307729),
      F = e.i(870666),
      q = e.i(718428),
      D = e.i(731252),
      A = e.i(996145),
      B = e.i(840740),
      G = e.i(42407);
    function P(e = {}) {
      let { abi: t, address: r, functionName: s, query: i = {} } = e,
        a = e.code,
        n = (0, G.useConfig)(e),
        l = (0, B.useChainId)({ config: n }),
        o = (function (e, t = {}) {
          return {
            async queryFn({ queryKey: r }) {
              let s = t.abi;
              if (!s) throw Error("abi is required");
              let { functionName: i, scopeKey: a, ...n } = r[1],
                l = (() => {
                  let e = r[1];
                  if (e.address) return { address: e.address };
                  if (e.code) return { code: e.code };
                  throw Error("address or code is required");
                })();
              if (!i) throw Error("functionName is required");
              return (function (e, t) {
                let { chainId: r, ...s } = t;
                return (function (e, t, r) {
                  let s = e[t.name];
                  if ("function" == typeof s) return s;
                  let i = e[r];
                  return "function" == typeof i ? i : (r) => t(e, r);
                })(
                  e.getClient({ chainId: r }),
                  q.readContract,
                  "readContract"
                )(s);
              })(e, { abi: s, functionName: i, args: n.args, ...l, ...n });
            },
            queryKey: (function (e = {}) {
              let { abi: t, ...r } = e;
              return ["readContract", (0, D.filterQueryOptions)(r)];
            })(t),
          };
        })(n, { ...e, chainId: e.chainId ?? l }),
        c = !!((r || a) && t && s && (i.enabled ?? !0));
      return (0, A.useQuery)({
        ...i,
        ...o,
        enabled: c,
        structuralSharing: i.structuralSharing ?? D.structuralSharing,
      });
    }
    var $ = e.i(843379);
    let U = "https://api.naven.network",
      L = [
        {
          type: "function",
          name: "totalSupply",
          stateMutability: "view",
          inputs: [{ name: "id", type: "uint256" }],
          outputs: [{ name: "", type: "uint256" }],
        },
      ],
      z = new Intl.NumberFormat("en-US"),
      H = [
        {
          icon: R,
          title: "x402 native payment",
          body: "Pay with USDG. Built for agent-native commerce.",
        },
        {
          icon: g,
          title: "Limited supply",
          body: "4,020 identical Genesis ERC-1155 NFTs. One per wallet.",
        },
        {
          icon: N.ShieldCheck,
          title: "Onchain and verifiable",
          body: "Payment settles before the Genesis NFT is minted.",
        },
      ],
      W = [
        ["Price", n],
        ["Requirement", c],
        ["Network", "Robinhood"],
      ];
    function Y(e) {
      return e ? `${e.slice(0, 6)}...${e.slice(-4)}` : "Pending";
    }
    function V(e, t) {
      return t ? `https://robinhoodchain.blockscout.com/${e}/${t}` : null;
    }
    function K() {
      let { address: e } = (0, x.useAuth)(),
        { data: b } = (0, $.useWalletClient)(),
        g = (0, F.usePublicClient)({ chainId: 4663 }),
        [R, q] = (0, m.useState)(!1),
        [D, A] = (0, m.useState)(null),
        B = (function (e) {
          let [t, r] = (0, m.useState)(() => p(e));
          return (
            (0, m.useEffect)(() => {
              let t = () => {
                r(p(e));
              };
              t();
              let s = window.setInterval(t, 1e3);
              return () => window.clearInterval(s);
            }, [e]),
            t
          );
        })(u),
        G = (0, M.isAddress)(e ?? "") ? e : void 0,
        {
          data: K,
          isLoading: Z,
          isError: J,
          refetch: X,
        } = P({
          abi: E.erc20Abi,
          address: s,
          functionName: "balanceOf",
          args: G ? [G] : void 0,
          chainId: 4663,
          query: { enabled: !!G, refetchInterval: 1e4 },
        }),
        {
          data: ee,
          isLoading: et,
          isError: er,
          refetch: es,
        } = P({
          abi: L,
          address: d,
          functionName: "totalSupply",
          args: [h],
          chainId: 4663,
          query: { enabled: (0, M.isAddress)(d), refetchInterval: 1e4 },
        }),
        {
          data: ei,
          isLoading: ea,
          isError: en,
        } = P({
          abi: E.erc20Abi,
          address: l,
          functionName: "decimals",
          chainId: 4663,
        }),
        { data: el } = P({
          abi: E.erc20Abi,
          address: l,
          functionName: "symbol",
          chainId: 4663,
        }),
        {
          data: eo,
          isLoading: ec,
          isError: ed,
          refetch: eh,
        } = P({
          abi: E.erc20Abi,
          address: l,
          functionName: "balanceOf",
          args: G ? [G] : void 0,
          chainId: 4663,
          query: { enabled: !!G, refetchInterval: 1e4 },
        }),
        eu = (0, m.useMemo)(() => {
          if (b && g) return (0, f.createX402Fetch)(fetch, b, g);
        }, [b, g]),
        em = (0, m.useMemo)(() => {
          let e = Math.ceil(B / 1e3);
          return [
            Math.floor(e / 86400),
            Math.floor((e % 86400) / 3600),
            Math.floor((e % 3600) / 60),
            e % 60,
          ].map((e) => e.toString().padStart(2, "0"));
        }, [B]),
        ep = B <= 0,
        ex = e ? D : null,
        ef = "bigint" == typeof ee ? Number(ee) : void 0,
        eb =
          "number" == typeof ef
            ? z.format(ef)
            : et
            ? "Loading"
            : er
            ? "Unavailable"
            : "0",
        ey = z.format(4020),
        eg =
          "number" == typeof ef
            ? Math.min(100, Math.max(0, (ef / 4020) * 100))
            : 0,
        ev = [...W, ["Supply", `${eb} / ${ey}`]],
        ew = "bigint" == typeof K ? (0, O.formatUnits)(K, 6) : void 0,
        eN = el ?? "tokens",
        ej = "number" == typeof ei ? o * BigInt(10) ** BigInt(ei) : void 0,
        ek =
          "bigint" == typeof eo && "number" == typeof ei
            ? (0, O.formatUnits)(eo, ei).split(".")[0] ?? "0"
            : void 0,
        eR = "bigint" == typeof K && K < a,
        e_ = "bigint" == typeof eo && "bigint" == typeof ej && eo < ej,
        eI = !!e && (ea || ec),
        eQ = !!e && (en || ed),
        eT = !ep || eR || e_ || eI || eQ,
        eC = (0, m.useCallback)(async () => {
          if (!g || !e) return !1;
          if (!(0, M.isAddress)(e))
            return (
              S.toast.error(
                "Wallet address is required to check token balance"
              ),
              !1
            );
          let t = await g.readContract({
              abi: E.erc20Abi,
              address: l,
              functionName: "decimals",
            }),
            r = await g.readContract({
              abi: E.erc20Abi,
              address: l,
              functionName: "balanceOf",
              args: [e],
            });
          if (r >= o * BigInt(10) ** BigInt(t)) return !0;
          eh();
          let s = (0, O.formatUnits)(r, t);
          return (
            S.toast.error(
              `Insufficient token balance. You need at least ${c}, but only have ${s} ${eN}.`
            ),
            !1
          );
        }, [e, eN, g, eh]),
        eS = (0, m.useCallback)(async () => {
          if (!g || !e) return !1;
          if (!(0, M.isAddress)(e))
            return (
              S.toast.error(
                "Wallet address is required to check Genesis balance"
              ),
              !1
            );
          let t = await g.readContract({
            abi: E.erc20Abi,
            address: s,
            functionName: "balanceOf",
            args: [e],
          });
          if (t >= a) return !0;
          X();
          let r = (0, O.formatUnits)(t, 6);
          return (
            S.toast.error(
              `Insufficient ${i} balance. You need ${n}, but only have ${r} ${i}.`
            ),
            !1
          );
        }, [e, g, X]),
        eE = (0, m.useCallback)(
          async ({ signal: t, silent: r = !1 } = {}) => {
            if (e)
              try {
                let r = await fetch(`${U}/genesis/agents?walletAddress=${e}`, {
                    signal: t,
                  }),
                  s = await r.json();
                if (!r.ok || s?.code !== 0)
                  throw Error(s?.message ?? "Genesis lookup failed");
                A(s.data[0] ?? null);
              } catch (e) {
                t?.aborted ||
                  r ||
                  S.toast.error(
                    e instanceof Error ? e.message : "Genesis lookup failed"
                  );
              }
          },
          [e]
        );
      (0, m.useEffect)(() => {
        if (!e) return;
        let t = new AbortController(),
          r = window.setTimeout(() => {
            eE({ signal: t.signal });
          }, 0);
        return () => {
          window.clearTimeout(r), t.abort();
        };
      }, [e, eE]),
        (0, m.useEffect)(() => {
          if (!e || !D || "minted" === D.status || "mint_failed" === D.status)
            return;
          let t = window.setInterval(() => {
            eE({ silent: !0 });
          }, 5e3);
          return () => window.clearInterval(t);
        }, [e, D, eE]);
      let eO = async () => {
        if (!ep) return void S.toast.error("Genesis mint has not opened yet");
        if (!eu)
          return void S.toast.error(
            "Connect wallet before minting a Genesis NFT"
          );
        if (!e)
          return void S.toast.error(
            "Wallet address is required to mint a Genesis NFT"
          );
        q(!0);
        try {
          if (!(await eS()) || !(await eC())) return;
          A(null);
          let t = await eu(`${U}/genesis/create`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ walletAddress: e }),
            }),
            r = await t.json();
          if (!t.ok || r?.code !== 0)
            throw Error(r?.message ?? "Genesis creation failed");
          A(r.data.agent),
            es(),
            S.toast.success("Genesis payment accepted. NFT minting is queued.");
        } catch (e) {
          S.toast.error(
            e instanceof Error ? e.message : "Genesis creation failed"
          );
        } finally {
          q(!1);
        }
      };
      return (0, t.jsxs)("main", {
        className: "overflow-hidden bg-[#030507] text-white",
        children: [
          (0, t.jsxs)("section", {
            className: "relative min-h-screen px-4 sm:pt-20 pb-10",
            children: [
              (0, t.jsx)("div", {
                className:
                  "absolute inset-0 bg-[radial-gradient(circle_at_48%_22%,rgba(204,255,0,0.22),transparent_28%),radial-gradient(circle_at_80%_16%,rgba(0,214,201,0.12),transparent_24%),radial-gradient(circle_at_18%_76%,rgba(204,255,0,0.1),transparent_26%),linear-gradient(180deg,#04070a_0%,#06070b_48%,#030507_100%)]",
              }),
              (0, t.jsx)("div", {
                className:
                  "absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:86px_86px] opacity-10",
              }),
              (0, t.jsx)("div", {
                className: "container relative mx-auto",
                children: (0, t.jsxs)("div", {
                  className:
                    "grid min-h-[calc(100vh-9.5rem)] gap-8 xl:grid-cols-[0.88fr_1.18fr_0.82fr] xl:items-center",
                  children: [
                    (0, t.jsxs)(Q.motion.div, {
                      initial: { opacity: 0, y: 18 },
                      animate: { opacity: 1, y: 0 },
                      transition: { duration: 0.45 },
                      className: "relative z-10",
                      children: [
                        (0, t.jsxs)("div", {
                          className:
                            "mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-primary",
                          children: [
                            (0, t.jsx)(j.Sparkles, { className: "size-4" }),
                            "Limited Genesis Collection",
                          ],
                        }),
                        (0, t.jsxs)("h1", {
                          className:
                            "max-w-[10ch] text-6xl font-black uppercase leading-[0.9] tracking-normal text-white sm:text-7xl lg:text-8xl",
                          children: [
                            "Genesis",
                            (0, t.jsx)("span", {
                              className: "block text-primary",
                              children: "x402",
                            }),
                            (0, t.jsx)("span", {
                              className: "block",
                              children: "NFT",
                            }),
                          ],
                        }),
                        (0, t.jsx)("p", {
                          className:
                            "mt-7 max-w-md text-base leading-7 text-white/70",
                          children:
                            "The first chapter of the Naven universe. Pay with x402 and mint one Genesis ERC-1155 NFT per wallet.",
                        }),
                        (0, t.jsx)("div", {
                          className: "mt-10 space-y-6",
                          children: H.map((e) =>
                            (0, t.jsxs)(
                              "div",
                              {
                                className: "flex gap-4",
                                children: [
                                  (0, t.jsx)("div", {
                                    className:
                                      "flex size-10 shrink-0 items-center justify-center rounded-md border border-primary/45 bg-primary/8 text-primary shadow-[0_0_28px] shadow-primary/15",
                                    children: (0, t.jsx)(e.icon, {
                                      className: "size-5",
                                    }),
                                  }),
                                  (0, t.jsxs)("div", {
                                    children: [
                                      (0, t.jsx)("div", {
                                        className:
                                          "text-sm font-bold uppercase tracking-[0.08em] text-white/88",
                                        children: e.title,
                                      }),
                                      (0, t.jsx)("div", {
                                        className:
                                          "mt-1 text-sm leading-6 text-white/52",
                                        children: e.body,
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              e.title
                            )
                          ),
                        }),
                      ],
                    }),
                    (0, t.jsxs)(Q.motion.div, {
                      initial: { opacity: 0, scale: 0.97, y: 18 },
                      animate: { opacity: 1, scale: 1, y: 0 },
                      transition: { duration: 0.5, delay: 0.05 },
                      className:
                        "relative order-first min-h-[500px] xl:order-none xl:min-h-[610px]",
                      children: [
                        (0, t.jsx)("div", {
                          className:
                            "absolute inset-x-[7%] top-[4%] aspect-square rounded-full border border-primary/20 shadow-[0_0_90px] shadow-primary/20",
                        }),
                        (0, t.jsx)("div", {
                          className:
                            "absolute inset-x-[14%] top-[13%] aspect-square rounded-full border border-white/10",
                        }),
                        (0, t.jsx)("div", {
                          className:
                            "absolute inset-x-[18%] top-[18%] aspect-square bg-primary/16 blur-3xl",
                        }),
                        (0, t.jsx)(T.default, {
                          src: "/genesis-avatar.png",
                          alt: "Genesis x402 avatar",
                          width: 2400,
                          height: 1600,
                          priority: !0,
                          className:
                            "absolute bottom-16 left-1/2 w-[min(110%,700px)] max-w-none -translate-x-1/2 object-contain drop-shadow-[0_34px_90px_rgba(0,0,0,0.72)]",
                        }),
                        (0, t.jsxs)("div", {
                          className:
                            "absolute bottom-4 left-1/2 w-[min(92%,360px)] -translate-x-1/2 rounded-lg border border-primary/22 bg-[#08070d]/72 px-5 py-4 text-center shadow-[0_18px_60px_rgba(0,0,0,0.42)] backdrop-blur-xl",
                          children: [
                            (0, t.jsx)("div", {
                              className:
                                "text-xs font-bold uppercase tracking-[0.18em] text-primary/70",
                              children: "Mint starts in",
                            }),
                            (0, t.jsx)("div", {
                              className:
                                "mt-2 grid grid-cols-4 gap-2 font-mono text-2xl text-primary sm:text-3xl",
                              children: em.map((e, r) =>
                                (0, t.jsx)("div", { children: e }, `${e}-${r}`)
                              ),
                            }),
                            (0, t.jsx)("div", {
                              className:
                                "mt-1 grid grid-cols-4 gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-white/42",
                              children: ["Days", "Hrs", "Mins", "Secs"].map(
                                (e) => (0, t.jsx)("div", { children: e }, e)
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, t.jsx)(Q.motion.div, {
                      initial: { opacity: 0, y: 22 },
                      animate: { opacity: 1, y: 0 },
                      transition: { duration: 0.5, delay: 0.1 },
                      className: "relative z-10",
                      children: (0, t.jsxs)("div", {
                        className:
                          "rounded-lg border border-primary/26 bg-[#070910]/82 p-6 shadow-[0_0_70px] shadow-primary/10 backdrop-blur-xl",
                        children: [
                          (0, t.jsxs)("div", {
                            className: "mb-6 text-center",
                            children: [
                              (0, t.jsx)("div", {
                                className:
                                  "text-xl font-black uppercase tracking-[0.08em]",
                                children: ep
                                  ? "Mint your Genesis"
                                  : "Genesis mint opens soon",
                              }),
                              (0, t.jsx)("div", {
                                className: "mt-2 text-sm text-white/56",
                                children: ep
                                  ? "Pay seamlessly with x402"
                                  : "Minting unlocks when the countdown ends",
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className:
                              "space-y-4 border-y border-white/10 py-5",
                            children: [
                              ev.map(([e, r]) =>
                                (0, t.jsxs)(
                                  "div",
                                  {
                                    className:
                                      "flex items-center justify-between",
                                    children: [
                                      (0, t.jsx)("div", {
                                        className:
                                          "text-xs font-bold uppercase text-white/46",
                                        children: e,
                                      }),
                                      (0, t.jsx)("div", {
                                        className:
                                          "text-sm font-bold text-white/82",
                                        children: r,
                                      }),
                                    ],
                                  },
                                  e
                                )
                              ),
                              (0, t.jsx)("div", {
                                className:
                                  "h-1.5 overflow-hidden rounded-full bg-white/10",
                                children: (0, t.jsx)("div", {
                                  className:
                                    "h-full rounded-full bg-primary shadow-[0_0_18px] shadow-primary/90",
                                  style: { width: `${eg}%` },
                                }),
                              }),
                            ],
                          }),
                          e &&
                            (0, t.jsxs)("div", {
                              className: "mt-5 space-y-3",
                              children: [
                                (0, t.jsxs)("div", {
                                  className: `rounded-md border px-4 py-3 ${
                                    e_ || eQ
                                      ? "border-red-400/35 bg-red-500/10"
                                      : "border-white/10 bg-white/[0.035]"
                                  }`,
                                  children: [
                                    (0, t.jsxs)("div", {
                                      className:
                                        "flex items-center justify-between gap-3",
                                      children: [
                                        (0, t.jsx)("div", {
                                          className:
                                            "text-xs font-bold uppercase text-white/46",
                                          children: "Required holding",
                                        }),
                                        (0, t.jsx)("div", {
                                          className: `text-sm font-black ${
                                            e_ || eQ
                                              ? "text-red-300"
                                              : "text-white/86"
                                          }`,
                                          children: eI
                                            ? "Checking..."
                                            : eQ
                                            ? "Unable to check"
                                            : `${ek ?? "0"} ${eN}`,
                                        }),
                                      ],
                                    }),
                                    (0, t.jsxs)("div", {
                                      className:
                                        "mt-2 text-xs font-semibold text-white/50",
                                      children: [
                                        "Hold at least ",
                                        c,
                                        " to mint Genesis.",
                                      ],
                                    }),
                                    e_ &&
                                      (0, t.jsxs)("div", {
                                        className:
                                          "mt-2 text-xs font-semibold text-red-200/82",
                                        children: [
                                          "Not enough tokens. You need at least",
                                          " ",
                                          c,
                                          " to mint.",
                                        ],
                                      }),
                                  ],
                                }),
                                (0, t.jsxs)("div", {
                                  className: `rounded-md border px-4 py-3 ${
                                    eR
                                      ? "border-red-400/35 bg-red-500/10"
                                      : "border-white/10 bg-white/[0.035]"
                                  }`,
                                  children: [
                                    (0, t.jsxs)("div", {
                                      className:
                                        "flex items-center justify-between gap-3",
                                      children: [
                                        (0, t.jsx)("div", {
                                          className:
                                            "text-xs font-bold uppercase text-white/46",
                                          children: "Payment balance",
                                        }),
                                        (0, t.jsx)("div", {
                                          className: `text-sm font-black ${
                                            eR
                                              ? "text-red-300"
                                              : "text-white/86"
                                          }`,
                                          children: Z
                                            ? "Checking..."
                                            : J
                                            ? "Unable to check"
                                            : `${ew ?? "0"} ${i}`,
                                        }),
                                      ],
                                    }),
                                    eR &&
                                      (0, t.jsxs)("div", {
                                        className:
                                          "mt-2 text-xs font-semibold text-red-200/82",
                                        children: [
                                          "Not enough ",
                                          i,
                                          ". You need",
                                          " ",
                                          n,
                                          " to mint.",
                                        ],
                                      }),
                                  ],
                                }),
                              ],
                            }),
                          (0, t.jsxs)(r.Web3Button, {
                            targetChainId: 4663,
                            loading: R,
                            disabled: eT,
                            onClick: eO,
                            className:
                              "mt-6 h-12 w-full rounded-md border border-primary/30 bg-primary/16 text-sm font-black uppercase tracking-[0.06em] text-white shadow-[inset_0_0_24px_rgba(204,255,0,0.14),0_0_28px_rgba(204,255,0,0.18)] transition hover:bg-primary/22 disabled:cursor-not-allowed disabled:border-white/10 disabled:bg-white/[0.04] disabled:text-white/38 disabled:shadow-none",
                            children: [
                              e_
                                ? "Need 1M tokens"
                                : eR
                                ? `Need ${n}`
                                : eI
                                ? "Checking balance"
                                : eQ
                                ? "Balance unavailable"
                                : ep
                                ? "Mint now"
                                : "Mint opens soon",
                              (0, t.jsx)(I.Zap, { className: "size-4" }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className:
                              "mt-5 flex items-center justify-center gap-2 text-xs font-semibold text-white/42",
                            children: [
                              (0, t.jsx)(N.ShieldCheck, {
                                className: "size-4 text-primary",
                              }),
                              "Secured by x402 protocol",
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
          (0, t.jsx)("section", {
            className: "border-t border-white/10 px-4 py-16",
            children: (0, t.jsxs)("div", {
              className: "container mx-auto",
              children: [
                (0, t.jsxs)("div", {
                  className:
                    "mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end",
                  children: [
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsxs)("div", {
                          className:
                            "flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-primary",
                          children: [
                            (0, t.jsx)(k, { className: "size-4" }),
                            "Genesis output",
                          ],
                        }),
                        (0, t.jsx)("h2", {
                          className:
                            "mt-3 text-3xl font-black uppercase tracking-normal sm:text-4xl",
                          children: "Your Genesis result",
                        }),
                      ],
                    }),
                    D &&
                      (0, t.jsx)(v.CheckCircle2, {
                        className: "size-7 text-primary",
                      }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className:
                    "overflow-hidden rounded-lg border border-white/10 bg-[#070910]/70 shadow-[0_26px_90px_rgba(0,0,0,0.34)] backdrop-blur-xl",
                  children: ex
                    ? (0, t.jsxs)("div", {
                        className:
                          "grid gap-0 lg:grid-cols-[minmax(260px,380px)_1fr]",
                        children: [
                          (0, t.jsxs)("div", {
                            className:
                              "relative border-b border-white/10 bg-white/[0.025] p-4 lg:border-r lg:border-b-0",
                            children: [
                              (0, t.jsx)("div", {
                                className:
                                  "absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(204,255,0,0.14),transparent_42%)]",
                              }),
                              (0, t.jsx)(T.default, {
                                src: "/genesis-nft.png",
                                alt: "Naven Genesis x402 NFT",
                                width: 1024,
                                height: 1536,
                                className:
                                  "relative aspect-[2/3] w-full rounded-md border border-white/10 object-cover shadow-[0_22px_70px_rgba(0,0,0,0.4)]",
                              }),
                              (0, t.jsx)("div", {
                                className:
                                  "absolute right-7 top-7 rounded-sm border border-primary/30 bg-black/52 px-2 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-primary backdrop-blur-md",
                                children: "x402",
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className: "p-6 sm:p-8",
                            children: [
                              (0, t.jsxs)("div", {
                                className:
                                  "flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between",
                                children: [
                                  (0, t.jsxs)("div", {
                                    children: [
                                      (0, t.jsx)("div", {
                                        className:
                                          "text-xs font-bold uppercase tracking-[0.22em] text-primary",
                                        children: "Genesis x402 NFT",
                                      }),
                                      (0, t.jsx)("div", {
                                        className:
                                          "mt-3 text-3xl font-black uppercase tracking-normal text-white",
                                        children: "Claim confirmed",
                                      }),
                                      (0, t.jsx)("div", {
                                        className:
                                          "mt-3 max-w-xl text-sm leading-6 text-white/50",
                                        children:
                                          "Every Genesis holder receives the same ERC-1155 token. This wallet can hold one Genesis NFT.",
                                      }),
                                    ],
                                  }),
                                  (0, t.jsx)("div", {
                                    className:
                                      "w-fit rounded-sm border border-primary/28 bg-primary/10 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.14em] text-primary",
                                    children: ex.status.replaceAll("_", " "),
                                  }),
                                ],
                              }),
                              (0, t.jsxs)("div", {
                                className: "mt-8 grid gap-3 sm:grid-cols-3",
                                children: [
                                  (0, t.jsxs)("div", {
                                    className:
                                      "rounded-md border border-white/10 bg-white/[0.035] px-4 py-3",
                                    children: [
                                      (0, t.jsx)("div", {
                                        className:
                                          "text-[10px] font-bold uppercase tracking-[0.14em] text-white/38",
                                        children: "Holding",
                                      }),
                                      (0, t.jsx)("div", {
                                        className:
                                          "mt-2 text-lg font-black text-white",
                                        children: "1 NFT",
                                      }),
                                    ],
                                  }),
                                  (0, t.jsxs)("div", {
                                    className:
                                      "rounded-md border border-white/10 bg-white/[0.035] px-4 py-3",
                                    children: [
                                      (0, t.jsx)("div", {
                                        className:
                                          "text-[10px] font-bold uppercase tracking-[0.14em] text-white/38",
                                        children: "Standard",
                                      }),
                                      (0, t.jsx)("div", {
                                        className:
                                          "mt-2 text-lg font-black text-white",
                                        children: "ERC-1155",
                                      }),
                                    ],
                                  }),
                                  (0, t.jsxs)("div", {
                                    className:
                                      "rounded-md border border-white/10 bg-white/[0.035] px-4 py-3",
                                    children: [
                                      (0, t.jsx)("div", {
                                        className:
                                          "text-[10px] font-bold uppercase tracking-[0.14em] text-white/38",
                                        children: "Token ID",
                                      }),
                                      (0, t.jsx)("div", {
                                        className:
                                          "mt-2 font-mono text-lg font-black text-white",
                                        children: ex.tokenId ?? "--",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, t.jsxs)("div", {
                                className:
                                  "mt-7 divide-y divide-white/10 border-y border-white/10",
                                children: [
                                  (0, t.jsxs)("div", {
                                    className:
                                      "grid gap-2 py-4 sm:grid-cols-[140px_1fr] sm:items-center",
                                    children: [
                                      (0, t.jsx)("div", {
                                        className:
                                          "text-xs font-bold uppercase tracking-[0.12em] text-white/42",
                                        children: "Payment tx",
                                      }),
                                      (0, t.jsxs)(C.default, {
                                        href:
                                          V("tx", ex.transactionHash) ?? "#",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className:
                                          "inline-flex w-fit items-center gap-2 font-mono text-sm font-bold text-white/82 transition hover:text-primary",
                                        children: [
                                          Y(ex.transactionHash),
                                          (0, t.jsx)(w.ExternalLink, {
                                            className: "size-3.5",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, t.jsxs)("div", {
                                    className:
                                      "grid gap-2 py-4 sm:grid-cols-[140px_1fr] sm:items-center",
                                    children: [
                                      (0, t.jsx)("div", {
                                        className:
                                          "text-xs font-bold uppercase tracking-[0.12em] text-white/42",
                                        children: "Mint tx",
                                      }),
                                      ex.mintTransactionHash
                                        ? (0, t.jsxs)(C.default, {
                                            href:
                                              V("tx", ex.mintTransactionHash) ??
                                              "#",
                                            target: "_blank",
                                            rel: "noreferrer",
                                            className:
                                              "inline-flex w-fit items-center gap-2 font-mono text-sm font-bold text-white/82 transition hover:text-primary",
                                            children: [
                                              Y(ex.mintTransactionHash),
                                              (0, t.jsx)(w.ExternalLink, {
                                                className: "size-3.5",
                                              }),
                                            ],
                                          })
                                        : (0, t.jsx)("div", {
                                            className:
                                              "text-sm font-semibold text-white/38",
                                            children: "Pending onchain mint",
                                          }),
                                    ],
                                  }),
                                  (0, t.jsxs)("div", {
                                    className:
                                      "grid gap-2 py-4 sm:grid-cols-[140px_1fr] sm:items-center",
                                    children: [
                                      (0, t.jsx)("div", {
                                        className:
                                          "text-xs font-bold uppercase tracking-[0.12em] text-white/42",
                                        children: "Contract",
                                      }),
                                      ex.tokenContract
                                        ? (0, t.jsxs)(C.default, {
                                            href:
                                              V("address", ex.tokenContract) ??
                                              "#",
                                            target: "_blank",
                                            rel: "noreferrer",
                                            className:
                                              "inline-flex w-fit items-center gap-2 font-mono text-sm font-bold text-white/82 transition hover:text-primary",
                                            children: [
                                              Y(ex.tokenContract),
                                              (0, t.jsx)(w.ExternalLink, {
                                                className: "size-3.5",
                                              }),
                                            ],
                                          })
                                        : (0, t.jsx)("div", {
                                            className:
                                              "text-sm font-semibold text-white/38",
                                            children:
                                              "Pending contract assignment",
                                          }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, t.jsxs)("div", {
                                className: "mt-6 flex flex-wrap gap-2",
                                children: [
                                  (0, t.jsx)("div", {
                                    className:
                                      "rounded-sm border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs font-semibold text-white/54",
                                    children: "One per wallet",
                                  }),
                                  (0, t.jsx)("div", {
                                    className:
                                      "rounded-sm border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs font-semibold text-white/54",
                                    children: "Identical collection art",
                                  }),
                                  (0, t.jsx)("div", {
                                    className:
                                      "rounded-sm border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs font-semibold text-white/54",
                                    children: "Robinhood Chain",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      })
                    : (0, t.jsx)("div", {
                        className:
                          "flex min-h-[260px] items-center justify-center rounded-md border border-dashed border-white/12 bg-white/[0.025] p-8 text-center",
                        children: (0, t.jsxs)("div", {
                          children: [
                            (0, t.jsx)(_, {
                              className: "mx-auto size-8 text-primary",
                            }),
                            (0, t.jsx)("div", {
                              className: "mt-4 text-lg font-semibold",
                              children: "No Genesis NFT yet",
                            }),
                            (0, t.jsx)("div", {
                              className:
                                "mt-2 max-w-md text-sm leading-6 text-white/48",
                              children:
                                "Fill the mint panel and mint. Your Genesis NFT receipt will appear here.",
                            }),
                          ],
                        }),
                      }),
                }),
                (0, t.jsx)("div", {
                  className: "mt-5 grid gap-3 sm:grid-cols-3",
                  children: [
                    [y, "x402 paid"],
                    [_, "One per wallet"],
                    [N.ShieldCheck, "ERC-1155 minted"],
                  ].map(([e, r]) =>
                    (0, t.jsxs)(
                      "div",
                      {
                        className:
                          "flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-white/56",
                        children: [
                          (0, t.jsx)(e, { className: "size-3.5 text-primary" }),
                          r,
                        ],
                      },
                      String(r)
                    )
                  ),
                }),
              ],
            }),
          }),
        ],
      });
    }
    e.s(["default", () => K], 617610);
  },
  466879,
  (e) => {
    e.v((t) =>
      Promise.all(
        ["static/chunks/f8293c2201e6de19.js"].map((t) => e.l(t))
      ).then(() => t(938204))
    );
  },
]);
