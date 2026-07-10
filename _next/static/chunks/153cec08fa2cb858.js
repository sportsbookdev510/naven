(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  188264,
  (e) => {
    "use strict";
    var t = {
        setTimeout: (e, t) => setTimeout(e, t),
        clearTimeout: (e) => clearTimeout(e),
        setInterval: (e, t) => setInterval(e, t),
        clearInterval: (e) => clearInterval(e),
      },
      r = new (class {
        #e = t;
        #t = !1;
        setTimeoutProvider(e) {
          this.#e = e;
        }
        setTimeout(e, t) {
          return this.#e.setTimeout(e, t);
        }
        clearTimeout(e) {
          this.#e.clearTimeout(e);
        }
        setInterval(e, t) {
          return this.#e.setInterval(e, t);
        }
        clearInterval(e) {
          this.#e.clearInterval(e);
        }
      })();
    function i(e) {
      setTimeout(e, 0);
    }
    e.s(["systemSetTimeoutZero", () => i, "timeoutManager", () => r]);
  },
  422178,
  (e) => {
    "use strict";
    var t = e.i(188264),
      r = "u" < typeof window || "Deno" in globalThis;
    function i() {}
    function n(e, t) {
      return "function" == typeof e ? e(t) : e;
    }
    function s(e) {
      return "number" == typeof e && e >= 0 && e !== 1 / 0;
    }
    function o(e, t) {
      return Math.max(e + (t || 0) - Date.now(), 0);
    }
    function a(e, t) {
      return "function" == typeof e ? e(t) : e;
    }
    function l(e, t) {
      return "function" == typeof e ? e(t) : e;
    }
    function u(e, t) {
      let {
        type: r = "all",
        exact: i,
        fetchStatus: n,
        predicate: s,
        queryKey: o,
        stale: a,
      } = e;
      if (o) {
        if (i) {
          if (t.queryHash !== d(o, t.options)) return !1;
        } else if (!f(t.queryKey, o)) return !1;
      }
      if ("all" !== r) {
        let e = t.isActive();
        if (("active" === r && !e) || ("inactive" === r && e)) return !1;
      }
      return (
        ("boolean" != typeof a || t.isStale() === a) &&
        (!n || n === t.state.fetchStatus) &&
        (!s || !!s(t))
      );
    }
    function c(e, t) {
      let { exact: r, status: i, predicate: n, mutationKey: s } = e;
      if (s) {
        if (!t.options.mutationKey) return !1;
        if (r) {
          if (h(t.options.mutationKey) !== h(s)) return !1;
        } else if (!f(t.options.mutationKey, s)) return !1;
      }
      return (!i || t.state.status === i) && (!n || !!n(t));
    }
    function d(e, t) {
      return (t?.queryKeyHashFn || h)(e);
    }
    function h(e) {
      return JSON.stringify(e, (e, t) =>
        y(t)
          ? Object.keys(t)
              .sort()
              .reduce((e, r) => ((e[r] = t[r]), e), {})
          : t
      );
    }
    function f(e, t) {
      return (
        e === t ||
        (typeof e == typeof t &&
          !!e &&
          !!t &&
          "object" == typeof e &&
          "object" == typeof t &&
          Object.keys(t).every((r) => f(e[r], t[r])))
      );
    }
    var p = Object.prototype.hasOwnProperty;
    function m(e, t, r = 0) {
      if (e === t) return e;
      if (r > 500) return t;
      let i = b(e) && b(t);
      if (!i && !(y(e) && y(t))) return t;
      let n = (i ? e : Object.keys(e)).length,
        s = i ? t : Object.keys(t),
        o = s.length,
        a = i ? Array(o) : {},
        l = 0;
      for (let u = 0; u < o; u++) {
        let o = i ? u : s[u],
          c = e[o],
          d = t[o];
        if (c === d) {
          (a[o] = c), (i ? u < n : p.call(e, o)) && l++;
          continue;
        }
        if (
          null === c ||
          null === d ||
          "object" != typeof c ||
          "object" != typeof d
        ) {
          a[o] = d;
          continue;
        }
        let h = m(c, d, r + 1);
        (a[o] = h), h === c && l++;
      }
      return n === o && l === n ? e : a;
    }
    function g(e, t) {
      if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
      for (let r in e) if (e[r] !== t[r]) return !1;
      return !0;
    }
    function b(e) {
      return Array.isArray(e) && e.length === Object.keys(e).length;
    }
    function y(e) {
      if (!v(e)) return !1;
      let t = e.constructor;
      if (void 0 === t) return !0;
      let r = t.prototype;
      return (
        !!v(r) &&
        !!r.hasOwnProperty("isPrototypeOf") &&
        Object.getPrototypeOf(e) === Object.prototype
      );
    }
    function v(e) {
      return "[object Object]" === Object.prototype.toString.call(e);
    }
    function x(e) {
      return new Promise((r) => {
        t.timeoutManager.setTimeout(r, e);
      });
    }
    function w(e, t, r) {
      return "function" == typeof r.structuralSharing
        ? r.structuralSharing(e, t)
        : !1 !== r.structuralSharing
        ? m(e, t)
        : t;
    }
    function P(e, t, r = 0) {
      let i = [...e, t];
      return r && i.length > r ? i.slice(1) : i;
    }
    function T(e, t, r = 0) {
      let i = [t, ...e];
      return r && i.length > r ? i.slice(0, -1) : i;
    }
    var S = Symbol();
    function E(e, t) {
      return !e.queryFn && t?.initialPromise
        ? () => t.initialPromise
        : e.queryFn && e.queryFn !== S
        ? e.queryFn
        : () => Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`));
    }
    function I(e, t) {
      return "function" == typeof e ? e(...t) : !!e;
    }
    function C(e, t, r) {
      let i,
        n = !1;
      return (
        Object.defineProperty(e, "signal", {
          enumerable: !0,
          get: () => (
            (i ??= t()),
            n ||
              ((n = !0),
              i.aborted ? r() : i.addEventListener("abort", r, { once: !0 })),
            i
          ),
        }),
        e
      );
    }
    e.s([
      "addConsumeAwareSignal",
      () => C,
      "addToEnd",
      () => P,
      "addToStart",
      () => T,
      "ensureQueryFn",
      () => E,
      "functionalUpdate",
      () => n,
      "hashKey",
      () => h,
      "hashQueryKeyByOptions",
      () => d,
      "isServer",
      () => r,
      "isValidTimeout",
      () => s,
      "matchMutation",
      () => c,
      "matchQuery",
      () => u,
      "noop",
      () => i,
      "partialMatchKey",
      () => f,
      "replaceData",
      () => w,
      "replaceEqualDeep",
      () => m,
      "resolveQueryBoolean",
      () => l,
      "resolveStaleTime",
      () => a,
      "shallowEqualObjects",
      () => g,
      "shouldThrowError",
      () => I,
      "skipToken",
      () => S,
      "sleep",
      () => x,
      "timeUntilStale",
      () => o,
    ]);
  },
  866224,
  (e) => {
    "use strict";
    let t, r, i, n, s, o;
    var a = e.i(188264).systemSetTimeoutZero,
      l =
        ((t = []),
        (r = 0),
        (i = (e) => {
          e();
        }),
        (n = (e) => {
          e();
        }),
        (s = a),
        {
          batch: (e) => {
            let o;
            r++;
            try {
              o = e();
            } finally {
              let e;
              --r ||
                ((e = t),
                (t = []),
                e.length &&
                  s(() => {
                    n(() => {
                      e.forEach((e) => {
                        i(e);
                      });
                    });
                  }));
            }
            return o;
          },
          batchCalls:
            (e) =>
            (...t) => {
              o(() => {
                e(...t);
              });
            },
          schedule: (o = (e) => {
            r
              ? t.push(e)
              : s(() => {
                  i(e);
                });
          }),
          setNotifyFunction: (e) => {
            i = e;
          },
          setBatchNotifyFunction: (e) => {
            n = e;
          },
          setScheduler: (e) => {
            s = e;
          },
        });
    e.s(["notifyManager", () => l]);
  },
  661361,
  469738,
  (e) => {
    "use strict";
    var t = class {
      constructor() {
        (this.listeners = new Set()),
          (this.subscribe = this.subscribe.bind(this));
      }
      subscribe(e) {
        return (
          this.listeners.add(e),
          this.onSubscribe(),
          () => {
            this.listeners.delete(e), this.onUnsubscribe();
          }
        );
      }
      hasListeners() {
        return this.listeners.size > 0;
      }
      onSubscribe() {}
      onUnsubscribe() {}
    };
    e.s(["Subscribable", () => t], 469738);
    var r = new (class extends t {
      #r;
      #i;
      #n;
      constructor() {
        super(),
          (this.#n = (e) => {
            if ("u" > typeof window && window.addEventListener) {
              let t = () => e();
              return (
                window.addEventListener("visibilitychange", t, !1),
                () => {
                  window.removeEventListener("visibilitychange", t);
                }
              );
            }
          });
      }
      onSubscribe() {
        this.#i || this.setEventListener(this.#n);
      }
      onUnsubscribe() {
        this.hasListeners() || (this.#i?.(), (this.#i = void 0));
      }
      setEventListener(e) {
        (this.#n = e),
          this.#i?.(),
          (this.#i = e((e) => {
            "boolean" == typeof e ? this.setFocused(e) : this.onFocus();
          }));
      }
      setFocused(e) {
        this.#r !== e && ((this.#r = e), this.onFocus());
      }
      onFocus() {
        let e = this.isFocused();
        this.listeners.forEach((t) => {
          t(e);
        });
      }
      isFocused() {
        return "boolean" == typeof this.#r
          ? this.#r
          : globalThis.document?.visibilityState !== "hidden";
      }
    })();
    e.s(["focusManager", () => r], 661361);
  },
  50800,
  387120,
  (e) => {
    "use strict";
    var t = e.i(469738),
      r = new (class extends t.Subscribable {
        #s = !0;
        #i;
        #n;
        constructor() {
          super(),
            (this.#n = (e) => {
              if ("u" > typeof window && window.addEventListener) {
                let t = () => e(!0),
                  r = () => e(!1);
                return (
                  window.addEventListener("online", t, !1),
                  window.addEventListener("offline", r, !1),
                  () => {
                    window.removeEventListener("online", t),
                      window.removeEventListener("offline", r);
                  }
                );
              }
            });
        }
        onSubscribe() {
          this.#i || this.setEventListener(this.#n);
        }
        onUnsubscribe() {
          this.hasListeners() || (this.#i?.(), (this.#i = void 0));
        }
        setEventListener(e) {
          (this.#n = e), this.#i?.(), (this.#i = e(this.setOnline.bind(this)));
        }
        setOnline(e) {
          this.#s !== e &&
            ((this.#s = e),
            this.listeners.forEach((t) => {
              t(e);
            }));
        }
        isOnline() {
          return this.#s;
        }
      })();
    function i() {
      let e,
        t,
        r = new Promise((r, i) => {
          (e = r), (t = i);
        });
      function i(e) {
        Object.assign(r, e), delete r.resolve, delete r.reject;
      }
      return (
        (r.status = "pending"),
        r.catch(() => {}),
        (r.resolve = (t) => {
          i({ status: "fulfilled", value: t }), e(t);
        }),
        (r.reject = (e) => {
          i({ status: "rejected", reason: e }), t(e);
        }),
        r
      );
    }
    e.s(["onlineManager", () => r], 50800),
      e.i(422178),
      e.s(["pendingThenable", () => i], 387120);
  },
  402948,
  (e) => {
    "use strict";
    let t;
    var r = e.i(422178),
      i =
        ((t = () => r.isServer),
        {
          isServer: () => t(),
          setIsServer(e) {
            t = e;
          },
        });
    e.s(["environmentManager", () => i]);
  },
  442778,
  (e) => {
    "use strict";
    var t = e.i(661361),
      r = e.i(50800),
      i = e.i(387120),
      n = e.i(402948),
      s = e.i(422178);
    function o(e) {
      return Math.min(1e3 * 2 ** e, 3e4);
    }
    function a(e) {
      return (e ?? "online") !== "online" || r.onlineManager.isOnline();
    }
    var l = class extends Error {
      constructor(e) {
        super("CancelledError"),
          (this.revert = e?.revert),
          (this.silent = e?.silent);
      }
    };
    function u(e) {
      let u,
        c = !1,
        d = 0,
        h = (0, i.pendingThenable)(),
        f = () =>
          t.focusManager.isFocused() &&
          ("always" === e.networkMode || r.onlineManager.isOnline()) &&
          e.canRun(),
        p = () => a(e.networkMode) && e.canRun(),
        m = (e) => {
          "pending" === h.status && (u?.(), h.resolve(e));
        },
        g = (e) => {
          "pending" === h.status && (u?.(), h.reject(e));
        },
        b = () =>
          new Promise((t) => {
            (u = (e) => {
              ("pending" !== h.status || f()) && t(e);
            }),
              e.onPause?.();
          }).then(() => {
            (u = void 0), "pending" === h.status && e.onContinue?.();
          }),
        y = () => {
          let t;
          if ("pending" !== h.status) return;
          let r = 0 === d ? e.initialPromise : void 0;
          try {
            t = r ?? e.fn();
          } catch (e) {
            t = Promise.reject(e);
          }
          Promise.resolve(t)
            .then(m)
            .catch((t) => {
              if ("pending" !== h.status) return;
              let r = e.retry ?? 3 * !n.environmentManager.isServer(),
                i = e.retryDelay ?? o,
                a = "function" == typeof i ? i(d, t) : i,
                l =
                  !0 === r ||
                  ("number" == typeof r && d < r) ||
                  ("function" == typeof r && r(d, t));
              c || !l
                ? g(t)
                : (d++,
                  e.onFail?.(d, t),
                  (0, s.sleep)(a)
                    .then(() => (f() ? void 0 : b()))
                    .then(() => {
                      c ? g(t) : y();
                    }));
            });
        };
      return {
        promise: h,
        status: () => h.status,
        cancel: (t) => {
          if ("pending" === h.status) {
            let r = new l(t);
            g(r), e.onCancel?.(r);
          }
        },
        continue: () => (u?.(), h),
        cancelRetry: () => {
          c = !0;
        },
        continueRetry: () => {
          c = !1;
        },
        canStart: p,
        start: () => (p() ? y() : b().then(y), h),
      };
    }
    e.s([
      "CancelledError",
      () => l,
      "canFetch",
      () => a,
      "createRetryer",
      () => u,
    ]);
  },
  915552,
  (e) => {
    "use strict";
    var t = e.i(188264),
      r = e.i(402948),
      i = e.i(422178),
      n = class {
        #o;
        destroy() {
          this.clearGcTimeout();
        }
        scheduleGc() {
          this.clearGcTimeout(),
            (0, i.isValidTimeout)(this.gcTime) &&
              (this.#o = t.timeoutManager.setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime));
        }
        updateGcTime(e) {
          this.gcTime = Math.max(
            this.gcTime || 0,
            e ?? (r.environmentManager.isServer() ? 1 / 0 : 3e5)
          );
        }
        clearGcTimeout() {
          void 0 !== this.#o &&
            (t.timeoutManager.clearTimeout(this.#o), (this.#o = void 0));
        }
      };
    e.s(["Removable", () => n]);
  },
  705807,
  (e) => {
    "use strict";
    e.i(965595);
    var t = e.i(422178),
      r = e.i(866224),
      i = e.i(442778),
      n = e.i(915552);
    function s(e, { pages: t, pageParams: r }) {
      let i = t.length - 1;
      return t.length > 0 ? e.getNextPageParam(t[i], t, r[i], r) : void 0;
    }
    var o = class extends n.Removable {
      #a;
      #l;
      #u;
      #c;
      #d;
      #h;
      #f;
      #p;
      constructor(e) {
        super(),
          (this.#p = !1),
          (this.#f = e.defaultOptions),
          this.setOptions(e.options),
          (this.observers = []),
          (this.#d = e.client),
          (this.#c = this.#d.getQueryCache()),
          (this.queryKey = e.queryKey),
          (this.queryHash = e.queryHash),
          (this.#l = u(this.options)),
          (this.state = e.state ?? this.#l),
          this.scheduleGc();
      }
      get meta() {
        return this.options.meta;
      }
      get queryType() {
        return this.#a;
      }
      get promise() {
        return this.#h?.promise;
      }
      setOptions(e) {
        if (
          ((this.options = { ...this.#f, ...e }),
          e?._type && (this.#a = e._type),
          this.updateGcTime(this.options.gcTime),
          this.state && void 0 === this.state.data)
        ) {
          let e = u(this.options);
          void 0 !== e.data &&
            (this.setState(l(e.data, e.dataUpdatedAt)), (this.#l = e));
        }
      }
      optionalRemove() {
        this.observers.length ||
          "idle" !== this.state.fetchStatus ||
          this.#c.remove(this);
      }
      setData(e, r) {
        let i = (0, t.replaceData)(this.state.data, e, this.options);
        return (
          this.#m({
            data: i,
            type: "success",
            dataUpdatedAt: r?.updatedAt,
            manual: r?.manual,
          }),
          i
        );
      }
      setState(e) {
        this.#m({ type: "setState", state: e });
      }
      cancel(e) {
        let r = this.#h?.promise;
        return (
          this.#h?.cancel(e),
          r ? r.then(t.noop).catch(t.noop) : Promise.resolve()
        );
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 });
      }
      get resetState() {
        return this.#l;
      }
      reset() {
        this.destroy(), this.setState(this.resetState);
      }
      isActive() {
        return this.observers.some(
          (e) => !1 !== (0, t.resolveQueryBoolean)(e.options.enabled, this)
        );
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === t.skipToken || !this.isFetched();
      }
      isFetched() {
        return this.state.dataUpdateCount + this.state.errorUpdateCount > 0;
      }
      isStatic() {
        return (
          this.getObserversCount() > 0 &&
          this.observers.some(
            (e) =>
              "static" === (0, t.resolveStaleTime)(e.options.staleTime, this)
          )
        );
      }
      isStale() {
        return this.getObserversCount() > 0
          ? this.observers.some((e) => e.getCurrentResult().isStale)
          : void 0 === this.state.data || this.state.isInvalidated;
      }
      isStaleByTime(e = 0) {
        return (
          void 0 === this.state.data ||
          ("static" !== e &&
            (!!this.state.isInvalidated ||
              !(0, t.timeUntilStale)(this.state.dataUpdatedAt, e)))
        );
      }
      onFocus() {
        let e = this.observers.find((e) => e.shouldFetchOnWindowFocus());
        e?.refetch({ cancelRefetch: !1 }), this.#h?.continue();
      }
      onOnline() {
        let e = this.observers.find((e) => e.shouldFetchOnReconnect());
        e?.refetch({ cancelRefetch: !1 }), this.#h?.continue();
      }
      addObserver(e) {
        this.observers.includes(e) ||
          (this.observers.push(e),
          this.clearGcTimeout(),
          this.#c.notify({ type: "observerAdded", query: this, observer: e }));
      }
      removeObserver(e) {
        this.observers.includes(e) &&
          ((this.observers = this.observers.filter((t) => t !== e)),
          this.observers.length ||
            (this.#h &&
              (this.#p || this.#g()
                ? this.#h.cancel({ revert: !0 })
                : this.#h.cancelRetry()),
            this.scheduleGc()),
          this.#c.notify({
            type: "observerRemoved",
            query: this,
            observer: e,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      #g() {
        return (
          "paused" === this.state.fetchStatus && "pending" === this.state.status
        );
      }
      invalidate() {
        this.state.isInvalidated || this.#m({ type: "invalidate" });
      }
      async fetch(e, r) {
        var n;
        let o;
        if (
          "idle" !== this.state.fetchStatus &&
          this.#h?.status() !== "rejected"
        ) {
          if (void 0 !== this.state.data && r?.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (this.#h) return this.#h.continueRetry(), this.#h.promise;
        }
        if ((e && this.setOptions(e), !this.options.queryFn)) {
          let e = this.observers.find((e) => e.options.queryFn);
          e && this.setOptions(e.options);
        }
        let a = new AbortController(),
          l = (e) => {
            Object.defineProperty(e, "signal", {
              enumerable: !0,
              get: () => ((this.#p = !0), a.signal),
            });
          },
          u = () => {
            let e,
              i = (0, t.ensureQueryFn)(this.options, r),
              n =
                (l(
                  (e = {
                    client: this.#d,
                    queryKey: this.queryKey,
                    meta: this.meta,
                  })
                ),
                e);
            return ((this.#p = !1), this.options.persister)
              ? this.options.persister(i, n, this)
              : i(n);
          },
          c =
            (l(
              (o = {
                fetchOptions: r,
                options: this.options,
                queryKey: this.queryKey,
                client: this.#d,
                state: this.state,
                fetchFn: u,
              })
            ),
            o),
          d =
            "infinite" === this.#a
              ? ((n = this.options.pages),
                {
                  onFetch: (e, r) => {
                    let i = e.options,
                      o = e.fetchOptions?.meta?.fetchMore?.direction,
                      a = e.state.data?.pages || [],
                      l = e.state.data?.pageParams || [],
                      u = { pages: [], pageParams: [] },
                      c = 0,
                      d = async () => {
                        let r = !1,
                          d = (0, t.ensureQueryFn)(e.options, e.fetchOptions),
                          h = async (i, n, s) => {
                            let o;
                            if (r) return Promise.reject(e.signal.reason);
                            if (null == n && i.pages.length)
                              return Promise.resolve(i);
                            let a =
                                ((o = {
                                  client: e.client,
                                  queryKey: e.queryKey,
                                  pageParam: n,
                                  direction: s ? "backward" : "forward",
                                  meta: e.options.meta,
                                }),
                                (0, t.addConsumeAwareSignal)(
                                  o,
                                  () => e.signal,
                                  () => (r = !0)
                                ),
                                o),
                              l = await d(a),
                              { maxPages: u } = e.options,
                              c = s ? t.addToStart : t.addToEnd;
                            return {
                              pages: c(i.pages, l, u),
                              pageParams: c(i.pageParams, n, u),
                            };
                          };
                        if (o && a.length) {
                          let e = "backward" === o,
                            t = { pages: a, pageParams: l },
                            r = (
                              e
                                ? function (e, { pages: t, pageParams: r }) {
                                    return t.length > 0
                                      ? e.getPreviousPageParam?.(
                                          t[0],
                                          t,
                                          r[0],
                                          r
                                        )
                                      : void 0;
                                  }
                                : s
                            )(i, t);
                          u = await h(t, r, e);
                        } else {
                          let e = n ?? a.length;
                          do {
                            let e =
                              0 === c ? l[0] ?? i.initialPageParam : s(i, u);
                            if (c > 0 && null == e) break;
                            (u = await h(u, e)), c++;
                          } while (c < e);
                        }
                        return u;
                      };
                    e.options.persister
                      ? (e.fetchFn = () =>
                          e.options.persister?.(
                            d,
                            {
                              client: e.client,
                              queryKey: e.queryKey,
                              meta: e.options.meta,
                              signal: e.signal,
                            },
                            r
                          ))
                      : (e.fetchFn = d);
                  },
                })
              : this.options.behavior;
        d?.onFetch(c, this),
          (this.#u = this.state),
          ("idle" === this.state.fetchStatus ||
            this.state.fetchMeta !== c.fetchOptions?.meta) &&
            this.#m({ type: "fetch", meta: c.fetchOptions?.meta }),
          (this.#h = (0, i.createRetryer)({
            initialPromise: r?.initialPromise,
            fn: c.fetchFn,
            onCancel: (e) => {
              e instanceof i.CancelledError &&
                e.revert &&
                this.setState({ ...this.#u, fetchStatus: "idle" }),
                a.abort();
            },
            onFail: (e, t) => {
              this.#m({ type: "failed", failureCount: e, error: t });
            },
            onPause: () => {
              this.#m({ type: "pause" });
            },
            onContinue: () => {
              this.#m({ type: "continue" });
            },
            retry: c.options.retry,
            retryDelay: c.options.retryDelay,
            networkMode: c.options.networkMode,
            canRun: () => !0,
          }));
        try {
          let e = await this.#h.start();
          if (void 0 === e) throw Error(`${this.queryHash} data is undefined`);
          return (
            this.setData(e),
            this.#c.config.onSuccess?.(e, this),
            this.#c.config.onSettled?.(e, this.state.error, this),
            e
          );
        } catch (e) {
          if (e instanceof i.CancelledError) {
            if (e.silent) return this.#h.promise;
            else if (e.revert) {
              if (void 0 === this.state.data) throw e;
              return this.state.data;
            }
          }
          throw (
            (this.#m({ type: "error", error: e }),
            this.#c.config.onError?.(e, this),
            this.#c.config.onSettled?.(this.state.data, e, this),
            e)
          );
        } finally {
          this.scheduleGc();
        }
      }
      #m(e) {
        let t = (t) => {
          switch (e.type) {
            case "failed":
              return {
                ...t,
                fetchFailureCount: e.failureCount,
                fetchFailureReason: e.error,
              };
            case "pause":
              return { ...t, fetchStatus: "paused" };
            case "continue":
              return { ...t, fetchStatus: "fetching" };
            case "fetch":
              return {
                ...t,
                ...a(t.data, this.options),
                fetchMeta: e.meta ?? null,
              };
            case "success":
              let r = {
                ...t,
                ...l(e.data, e.dataUpdatedAt),
                dataUpdateCount: t.dataUpdateCount + 1,
                ...(!e.manual && {
                  fetchStatus: "idle",
                  fetchFailureCount: 0,
                  fetchFailureReason: null,
                }),
              };
              return (this.#u = e.manual ? r : void 0), r;
            case "error":
              let i = e.error;
              return {
                ...t,
                error: i,
                errorUpdateCount: t.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: t.fetchFailureCount + 1,
                fetchFailureReason: i,
                fetchStatus: "idle",
                status: "error",
                isInvalidated: !0,
              };
            case "invalidate":
              return { ...t, isInvalidated: !0 };
            case "setState":
              return { ...t, ...e.state };
          }
        };
        (this.state = t(this.state)),
          r.notifyManager.batch(() => {
            this.observers.forEach((e) => {
              e.onQueryUpdate();
            }),
              this.#c.notify({ query: this, type: "updated", action: e });
          });
      }
    };
    function a(e, t) {
      return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: (0, i.canFetch)(t.networkMode) ? "fetching" : "paused",
        ...(void 0 === e && { error: null, status: "pending" }),
      };
    }
    function l(e, t) {
      return {
        data: e,
        dataUpdatedAt: t ?? Date.now(),
        error: null,
        isInvalidated: !1,
        status: "success",
      };
    }
    function u(e) {
      let t =
          "function" == typeof e.initialData ? e.initialData() : e.initialData,
        r = void 0 !== t,
        i = r
          ? "function" == typeof e.initialDataUpdatedAt
            ? e.initialDataUpdatedAt()
            : e.initialDataUpdatedAt
          : 0;
      return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: r ? i ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: r ? "success" : "pending",
        fetchStatus: "idle",
      };
    }
    e.s(["Query", () => o, "fetchState", () => a], 705807);
  },
  785544,
  (e, t, r) => {
    "use strict";
    function i({
      widthInt: e,
      heightInt: t,
      blurWidth: r,
      blurHeight: i,
      blurDataURL: n,
      objectFit: s,
    }) {
      let o = r ? 40 * r : e,
        a = i ? 40 * i : t,
        l = o && a ? `viewBox='0 0 ${o} ${a}'` : "";
      return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${l}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${
        l
          ? "none"
          : "contain" === s
          ? "xMidYMid"
          : "cover" === s
          ? "xMidYMid slice"
          : "none"
      }' style='filter: url(%23b);' href='${n}'/%3E%3C/svg%3E`;
    }
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "getImageBlurSvg", {
        enumerable: !0,
        get: function () {
          return i;
        },
      });
  },
  631558,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var i = {
      VALID_LOADERS: function () {
        return s;
      },
      imageConfigDefault: function () {
        return o;
      },
    };
    for (var n in i) Object.defineProperty(r, n, { enumerable: !0, get: i[n] });
    let s = ["default", "imgix", "cloudinary", "akamai", "custom"],
      o = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        path: "/_next/image",
        loader: "default",
        loaderFile: "",
        domains: [],
        disableStaticImages: !1,
        minimumCacheTTL: 14400,
        formats: ["image/webp"],
        maximumRedirects: 3,
        maximumResponseBody: 5e7,
        dangerouslyAllowLocalIP: !1,
        dangerouslyAllowSVG: !1,
        contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
        contentDispositionType: "attachment",
        localPatterns: void 0,
        remotePatterns: [],
        qualities: [75],
        unoptimized: !1,
      };
  },
  574574,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "getImgProps", {
        enumerable: !0,
        get: function () {
          return u;
        },
      }),
      e.r(687658);
    let i = e.r(783817),
      n = e.r(785544),
      s = e.r(631558),
      o = ["-moz-initial", "fill", "none", "scale-down", void 0];
    function a(e) {
      return void 0 !== e.default;
    }
    function l(e) {
      return void 0 === e
        ? e
        : "number" == typeof e
        ? Number.isFinite(e)
          ? e
          : NaN
        : "string" == typeof e && /^[0-9]+$/.test(e)
        ? parseInt(e, 10)
        : NaN;
    }
    function u(
      {
        src: e,
        sizes: t,
        unoptimized: r = !1,
        priority: u = !1,
        preload: c = !1,
        loading: d,
        className: h,
        quality: f,
        width: p,
        height: m,
        fill: g = !1,
        style: b,
        overrideSrc: y,
        onLoad: v,
        onLoadingComplete: x,
        placeholder: w = "empty",
        blurDataURL: P,
        fetchPriority: T,
        decoding: S = "async",
        layout: E,
        objectFit: I,
        objectPosition: C,
        lazyBoundary: O,
        lazyRoot: F,
        ...B
      },
      j
    ) {
      var _;
      let H,
        R,
        k,
        { imgConf: z, showAltText: U, blurComplete: G, defaultLoader: A } = j,
        M = z || s.imageConfigDefault;
      if ("allSizes" in M) H = M;
      else {
        let e = [...M.deviceSizes, ...M.imageSizes].sort((e, t) => e - t),
          t = M.deviceSizes.sort((e, t) => e - t),
          r = M.qualities?.sort((e, t) => e - t);
        H = { ...M, allSizes: e, deviceSizes: t, qualities: r };
      }
      if (void 0 === A)
        throw Object.defineProperty(
          Error(
            "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"
          ),
          "__NEXT_ERROR_CODE",
          { value: "E163", enumerable: !1, configurable: !0 }
        );
      let L = B.loader || A;
      delete B.loader, delete B.srcSet;
      let q = "__next_img_default" in L;
      if (q) {
        if ("custom" === H.loader)
          throw Object.defineProperty(
            Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),
            "__NEXT_ERROR_CODE",
            { value: "E252", enumerable: !1, configurable: !0 }
          );
      } else {
        let e = L;
        L = (t) => {
          let { config: r, ...i } = t;
          return e(i);
        };
      }
      if (E) {
        "fill" === E && (g = !0);
        let e = {
          intrinsic: { maxWidth: "100%", height: "auto" },
          responsive: { width: "100%", height: "auto" },
        }[E];
        e && (b = { ...b, ...e });
        let r = { responsive: "100vw", fill: "100vw" }[E];
        r && !t && (t = r);
      }
      let D = "",
        N = l(p),
        $ = l(m);
      if ((_ = e) && "object" == typeof _ && (a(_) || void 0 !== _.src)) {
        let t = a(e) ? e.default : e;
        if (!t.src)
          throw Object.defineProperty(
            Error(
              `An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(
                t
              )}`
            ),
            "__NEXT_ERROR_CODE",
            { value: "E460", enumerable: !1, configurable: !0 }
          );
        if (!t.height || !t.width)
          throw Object.defineProperty(
            Error(
              `An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(
                t
              )}`
            ),
            "__NEXT_ERROR_CODE",
            { value: "E48", enumerable: !1, configurable: !0 }
          );
        if (
          ((R = t.blurWidth),
          (k = t.blurHeight),
          (P = P || t.blurDataURL),
          (D = t.src),
          !g)
        )
          if (N || $) {
            if (N && !$) {
              let e = N / t.width;
              $ = Math.round(t.height * e);
            } else if (!N && $) {
              let e = $ / t.height;
              N = Math.round(t.width * e);
            }
          } else (N = t.width), ($ = t.height);
      }
      let K = !u && !c && ("lazy" === d || void 0 === d);
      (!(e = "string" == typeof e ? e : D) ||
        e.startsWith("data:") ||
        e.startsWith("blob:")) &&
        ((r = !0), (K = !1)),
        H.unoptimized && (r = !0),
        q &&
          !H.dangerouslyAllowSVG &&
          e.split("?", 1)[0].endsWith(".svg") &&
          (r = !0);
      let V = l(f),
        Q = Object.assign(
          g
            ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: I,
                objectPosition: C,
              }
            : {},
          U ? {} : { color: "transparent" },
          b
        ),
        W =
          G || "empty" === w
            ? null
            : "blur" === w
            ? `url("data:image/svg+xml;charset=utf-8,${(0, n.getImageBlurSvg)({
                widthInt: N,
                heightInt: $,
                blurWidth: R,
                blurHeight: k,
                blurDataURL: P || "",
                objectFit: Q.objectFit,
              })}")`
            : `url("${w}")`,
        X = o.includes(Q.objectFit)
          ? "fill" === Q.objectFit
            ? "100% 100%"
            : "cover"
          : Q.objectFit,
        Y = W
          ? {
              backgroundSize: X,
              backgroundPosition: Q.objectPosition || "50% 50%",
              backgroundRepeat: "no-repeat",
              backgroundImage: W,
            }
          : {},
        J = (function ({
          config: e,
          src: t,
          unoptimized: r,
          width: n,
          quality: s,
          sizes: o,
          loader: a,
        }) {
          if (r) {
            let e = (0, i.getDeploymentId)();
            if (t.startsWith("/") && !t.startsWith("//") && e) {
              let r = t.includes("?") ? "&" : "?";
              t = `${t}${r}dpl=${e}`;
            }
            return { src: t, srcSet: void 0, sizes: void 0 };
          }
          let { widths: l, kind: u } = (function (
              { deviceSizes: e, allSizes: t },
              r,
              i
            ) {
              if (i) {
                let r = /(^|\s)(1?\d?\d)vw/g,
                  n = [];
                for (let e; (e = r.exec(i)); ) n.push(parseInt(e[2]));
                if (n.length) {
                  let r = 0.01 * Math.min(...n);
                  return { widths: t.filter((t) => t >= e[0] * r), kind: "w" };
                }
                return { widths: t, kind: "w" };
              }
              return "number" != typeof r
                ? { widths: e, kind: "w" }
                : {
                    widths: [
                      ...new Set(
                        [r, 2 * r].map(
                          (e) => t.find((t) => t >= e) || t[t.length - 1]
                        )
                      ),
                    ],
                    kind: "x",
                  };
            })(e, n, o),
            c = l.length - 1;
          return {
            sizes: o || "w" !== u ? o : "100vw",
            srcSet: l
              .map(
                (r, i) =>
                  `${a({ config: e, src: t, quality: s, width: r })} ${
                    "w" === u ? r : i + 1
                  }${u}`
              )
              .join(", "),
            src: a({ config: e, src: t, quality: s, width: l[c] }),
          };
        })({
          config: H,
          src: e,
          unoptimized: r,
          width: N,
          quality: V,
          sizes: t,
          loader: L,
        }),
        Z = K ? "lazy" : d;
      return {
        props: {
          ...B,
          loading: Z,
          fetchPriority: T,
          width: N,
          height: $,
          decoding: S,
          className: h,
          style: { ...Q, ...Y },
          sizes: J.sizes,
          srcSet: J.srcSet,
          src: y || J.src,
        },
        meta: { unoptimized: r, preload: c || u, placeholder: w, fill: g },
      };
    }
  },
  610716,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function () {
          return a;
        },
      });
    let i = e.r(642947),
      n = "u" < typeof window,
      s = n ? () => {} : i.useLayoutEffect,
      o = n ? () => {} : i.useEffect;
    function a(e) {
      let { headManager: t, reduceComponentsToState: r } = e;
      function a() {
        if (t && t.mountedInstances) {
          let e = i.Children.toArray(
            Array.from(t.mountedInstances).filter(Boolean)
          );
          t.updateHead(r(e));
        }
      }
      return (
        n && (t?.mountedInstances?.add(e.children), a()),
        s(
          () => (
            t?.mountedInstances?.add(e.children),
            () => {
              t?.mountedInstances?.delete(e.children);
            }
          )
        ),
        s(
          () => (
            t && (t._pendingUpdate = a),
            () => {
              t && (t._pendingUpdate = a);
            }
          )
        ),
        o(
          () => (
            t &&
              t._pendingUpdate &&
              (t._pendingUpdate(), (t._pendingUpdate = null)),
            () => {
              t &&
                t._pendingUpdate &&
                (t._pendingUpdate(), (t._pendingUpdate = null));
            }
          )
        ),
        null
      );
    }
  },
  722802,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var i = {
      default: function () {
        return m;
      },
      defaultHead: function () {
        return d;
      },
    };
    for (var n in i) Object.defineProperty(r, n, { enumerable: !0, get: i[n] });
    let s = e.r(940192),
      o = e.r(475244),
      a = e.r(719097),
      l = o._(e.r(642947)),
      u = s._(e.r(610716)),
      c = e.r(28675);
    function d() {
      return [
        (0, a.jsx)("meta", { charSet: "utf-8" }, "charset"),
        (0, a.jsx)(
          "meta",
          { name: "viewport", content: "width=device-width" },
          "viewport"
        ),
      ];
    }
    function h(e, t) {
      return "string" == typeof t || "number" == typeof t
        ? e
        : t.type === l.default.Fragment
        ? e.concat(
            l.default.Children.toArray(t.props.children).reduce(
              (e, t) =>
                "string" == typeof t || "number" == typeof t ? e : e.concat(t),
              []
            )
          )
        : e.concat(t);
    }
    e.r(687658);
    let f = ["name", "httpEquiv", "charSet", "itemProp"];
    function p(e) {
      let t, r, i, n;
      return e
        .reduce(h, [])
        .reverse()
        .concat(d().reverse())
        .filter(
          ((t = new Set()),
          (r = new Set()),
          (i = new Set()),
          (n = {}),
          (e) => {
            let s = !0,
              o = !1;
            if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
              o = !0;
              let r = e.key.slice(e.key.indexOf("$") + 1);
              t.has(r) ? (s = !1) : t.add(r);
            }
            switch (e.type) {
              case "title":
              case "base":
                r.has(e.type) ? (s = !1) : r.add(e.type);
                break;
              case "meta":
                for (let t = 0, r = f.length; t < r; t++) {
                  let r = f[t];
                  if (e.props.hasOwnProperty(r))
                    if ("charSet" === r) i.has(r) ? (s = !1) : i.add(r);
                    else {
                      let t = e.props[r],
                        i = n[r] || new Set();
                      ("name" !== r || !o) && i.has(t)
                        ? (s = !1)
                        : (i.add(t), (n[r] = i));
                    }
                }
            }
            return s;
          })
        )
        .reverse()
        .map((e, t) => {
          let r = e.key || t;
          return l.default.cloneElement(e, { key: r });
        });
    }
    let m = function ({ children: e }) {
      let t = (0, l.useContext)(c.HeadManagerContext);
      return (0, a.jsx)(u.default, {
        reduceComponentsToState: p,
        headManager: t,
        children: e,
      });
    };
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  495246,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "ImageConfigContext", {
        enumerable: !0,
        get: function () {
          return s;
        },
      });
    let i = e.r(940192)._(e.r(642947)),
      n = e.r(631558),
      s = i.default.createContext(n.imageConfigDefault);
  },
  524791,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "RouterContext", {
        enumerable: !0,
        get: function () {
          return i;
        },
      });
    let i = e.r(940192)._(e.r(642947)).default.createContext(null);
  },
  800306,
  (e, t, r) => {
    "use strict";
    function i(e, t) {
      let r = e || 75;
      return t?.qualities?.length
        ? t.qualities.reduce(
            (e, t) => (Math.abs(t - r) < Math.abs(e - r) ? t : e),
            0
          )
        : r;
    }
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "findClosestQuality", {
        enumerable: !0,
        get: function () {
          return i;
        },
      });
  },
  993479,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function () {
          return o;
        },
      });
    let i = e.r(800306),
      n = e.r(783817);
    function s({ config: e, src: t, width: r, quality: s }) {
      if (
        t.startsWith("/") &&
        t.includes("?") &&
        e.localPatterns?.length === 1 &&
        "**" === e.localPatterns[0].pathname &&
        "" === e.localPatterns[0].search
      )
        throw Object.defineProperty(
          Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),
          "__NEXT_ERROR_CODE",
          { value: "E871", enumerable: !1, configurable: !0 }
        );
      let o = (0, i.findClosestQuality)(s, e),
        a = (0, n.getDeploymentId)();
      return `${e.path}${t}`;
    }
    s.__next_img_default = !0;
    let o = s;
  },
  671867,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 }),
      Object.defineProperty(r, "Image", {
        enumerable: !0,
        get: function () {
          return x;
        },
      });
    let i = e.r(940192),
      n = e.r(475244),
      s = e.r(719097),
      o = n._(e.r(642947)),
      a = i._(e.r(325769)),
      l = i._(e.r(722802)),
      u = e.r(574574),
      c = e.r(631558),
      d = e.r(495246);
    e.r(687658);
    let h = e.r(524791),
      f = i._(e.r(993479)),
      p = e.r(660636),
      m = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        qualities: [75],
        path: "/_next/image",
        loader: "default",
        dangerouslyAllowSVG: !1,
        unoptimized: !1,
      };
    function g(e, t, r, i, n, s, o) {
      let a = e?.src;
      e &&
        e["data-loaded-src"] !== a &&
        ((e["data-loaded-src"] = a),
        ("decode" in e ? e.decode() : Promise.resolve())
          .catch(() => {})
          .then(() => {
            if (e.parentElement && e.isConnected) {
              if (("empty" !== t && n(!0), r?.current)) {
                let t = new Event("load");
                Object.defineProperty(t, "target", { writable: !1, value: e });
                let i = !1,
                  n = !1;
                r.current({
                  ...t,
                  nativeEvent: t,
                  currentTarget: e,
                  target: e,
                  isDefaultPrevented: () => i,
                  isPropagationStopped: () => n,
                  persist: () => {},
                  preventDefault: () => {
                    (i = !0), t.preventDefault();
                  },
                  stopPropagation: () => {
                    (n = !0), t.stopPropagation();
                  },
                });
              }
              i?.current && i.current(e);
            }
          }));
    }
    function b(e) {
      return o.use ? { fetchPriority: e } : { fetchpriority: e };
    }
    "u" < typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
    let y = (0, o.forwardRef)(
      (
        {
          src: e,
          srcSet: t,
          sizes: r,
          height: i,
          width: n,
          decoding: a,
          className: l,
          style: u,
          fetchPriority: c,
          placeholder: d,
          loading: h,
          unoptimized: f,
          fill: m,
          onLoadRef: y,
          onLoadingCompleteRef: v,
          setBlurComplete: x,
          setShowAltText: w,
          sizesInput: P,
          onLoad: T,
          onError: S,
          ...E
        },
        I
      ) => {
        let C = (0, o.useCallback)(
            (e) => {
              e && (S && (e.src = e.src), e.complete && g(e, d, y, v, x, f, P));
            },
            [e, d, y, v, x, S, f, P]
          ),
          O = (0, p.useMergedRef)(I, C);
        return (0, s.jsx)("img", {
          ...E,
          ...b(c),
          loading: h,
          width: n,
          height: i,
          decoding: a,
          "data-nimg": m ? "fill" : "1",
          className: l,
          style: u,
          sizes: r,
          srcSet: t,
          src: e,
          ref: O,
          onLoad: (e) => {
            g(e.currentTarget, d, y, v, x, f, P);
          },
          onError: (e) => {
            w(!0), "empty" !== d && x(!0), S && S(e);
          },
        });
      }
    );
    function v({ isAppRouter: e, imgAttributes: t }) {
      let r = {
        as: "image",
        imageSrcSet: t.srcSet,
        imageSizes: t.sizes,
        crossOrigin: t.crossOrigin,
        referrerPolicy: t.referrerPolicy,
        ...b(t.fetchPriority),
      };
      return e && a.default.preload
        ? (a.default.preload(t.src, r), null)
        : (0, s.jsx)(l.default, {
            children: (0, s.jsx)(
              "link",
              { rel: "preload", href: t.srcSet ? void 0 : t.src, ...r },
              "__nimg-" + t.src + t.srcSet + t.sizes
            ),
          });
    }
    let x = (0, o.forwardRef)((e, t) => {
      let r = (0, o.useContext)(h.RouterContext),
        i = (0, o.useContext)(d.ImageConfigContext),
        n = (0, o.useMemo)(() => {
          let e = m || i || c.imageConfigDefault,
            t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
            r = e.deviceSizes.sort((e, t) => e - t),
            n = e.qualities?.sort((e, t) => e - t);
          return {
            ...e,
            allSizes: t,
            deviceSizes: r,
            qualities: n,
            localPatterns:
              "u" < typeof window ? i?.localPatterns : e.localPatterns,
          };
        }, [i]),
        { onLoad: a, onLoadingComplete: l } = e,
        p = (0, o.useRef)(a);
      (0, o.useEffect)(() => {
        p.current = a;
      }, [a]);
      let g = (0, o.useRef)(l);
      (0, o.useEffect)(() => {
        g.current = l;
      }, [l]);
      let [b, x] = (0, o.useState)(!1),
        [w, P] = (0, o.useState)(!1),
        { props: T, meta: S } = (0, u.getImgProps)(e, {
          defaultLoader: f.default,
          imgConf: n,
          blurComplete: b,
          showAltText: w,
        });
      return (0, s.jsxs)(s.Fragment, {
        children: [
          (0, s.jsx)(y, {
            ...T,
            unoptimized: S.unoptimized,
            placeholder: S.placeholder,
            fill: S.fill,
            onLoadRef: p,
            onLoadingCompleteRef: g,
            setBlurComplete: x,
            setShowAltText: P,
            sizesInput: e.sizes,
            ref: t,
          }),
          S.preload
            ? (0, s.jsx)(v, { isAppRouter: !r, imgAttributes: T })
            : null,
        ],
      });
    });
    ("function" == typeof r.default ||
      ("object" == typeof r.default && null !== r.default)) &&
      void 0 === r.default.__esModule &&
      (Object.defineProperty(r.default, "__esModule", { value: !0 }),
      Object.assign(r.default, r),
      (t.exports = r.default));
  },
  10743,
  (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", { value: !0 });
    var i = {
      default: function () {
        return c;
      },
      getImageProps: function () {
        return u;
      },
    };
    for (var n in i) Object.defineProperty(r, n, { enumerable: !0, get: i[n] });
    let s = e.r(940192),
      o = e.r(574574),
      a = e.r(671867),
      l = s._(e.r(993479));
    function u(e) {
      let { props: t } = (0, o.getImgProps)(e, {
        defaultLoader: l.default,
        imgConf: {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [32, 48, 64, 96, 128, 256, 384],
          qualities: [75],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        },
      });
      for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
      return { props: t };
    }
    let c = a.Image;
  },
  177070,
  (e, t, r) => {
    t.exports = e.r(10743);
  },
  707602,
  466691,
  (e) => {
    "use strict";
    var t = e.i(642947),
      r = e.i(719097),
      i = t.createContext(void 0),
      n = (e) => {
        let r = t.useContext(i);
        if (e) return e;
        if (!r)
          throw Error("No QueryClient set, use QueryClientProvider to set one");
        return r;
      },
      s = ({ client: e, children: n }) => (
        t.useEffect(
          () => (
            e.mount(),
            () => {
              e.unmount();
            }
          ),
          [e]
        ),
        (0, r.jsx)(i.Provider, { value: e, children: n })
      );
    e.s(["QueryClientProvider", () => s, "useQueryClient", () => n], 707602);
    var o = e.i(456882),
      a = e.i(207298),
      l = e.i(152236);
    let u = (0, a.cva)(
      "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
      {
        variants: {
          variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive:
              "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline:
              "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary:
              "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost:
              "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline",
          },
          size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9",
            "icon-sm": "size-8",
            "icon-lg": "size-10",
          },
        },
        defaultVariants: { variant: "default", size: "default" },
      }
    );
    function c({ className: e, variant: t, size: i, asChild: n = !1, ...s }) {
      let a = n ? o.Slot : "button";
      return (0, r.jsx)(a, {
        "data-slot": "button",
        className: (0, l.cn)(u({ variant: t, size: i, className: e })),
        ...s,
      });
    }
    e.s(["Button", () => c], 466691);
  },
  769156,
  789705,
  (e) => {
    "use strict";
    var t = e.i(878726),
      r = e.i(378379);
    let i = {
      "0x0": "legacy",
      "0x1": "eip2930",
      "0x2": "eip1559",
      "0x3": "eip4844",
      "0x4": "eip7702",
    };
    function n(e, t) {
      let n = {
        ...e,
        blockHash: e.blockHash ? e.blockHash : null,
        blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
        ...(null != e.blockTimestamp && {
          blockTimestamp: BigInt(e.blockTimestamp),
        }),
        chainId: e.chainId ? (0, r.hexToNumber)(e.chainId) : void 0,
        gas: e.gas ? BigInt(e.gas) : void 0,
        gasPrice: e.gasPrice ? BigInt(e.gasPrice) : void 0,
        maxFeePerBlobGas: e.maxFeePerBlobGas
          ? BigInt(e.maxFeePerBlobGas)
          : void 0,
        maxFeePerGas: e.maxFeePerGas ? BigInt(e.maxFeePerGas) : void 0,
        maxPriorityFeePerGas: e.maxPriorityFeePerGas
          ? BigInt(e.maxPriorityFeePerGas)
          : void 0,
        nonce: e.nonce ? (0, r.hexToNumber)(e.nonce) : void 0,
        to: e.to ? e.to : null,
        transactionIndex: e.transactionIndex
          ? Number(e.transactionIndex)
          : null,
        type: e.type ? i[e.type] : void 0,
        typeHex: e.type ? e.type : void 0,
        value: e.value ? BigInt(e.value) : void 0,
        v: e.v ? BigInt(e.v) : void 0,
      };
      return (
        e.authorizationList &&
          (n.authorizationList = e.authorizationList.map((e) => ({
            address: e.address,
            chainId: Number(e.chainId),
            nonce: Number(e.nonce),
            r: e.r,
            s: e.s,
            yParity: Number(e.yParity),
          }))),
        (n.yParity = (() => {
          if (e.yParity) return Number(e.yParity);
          if ("bigint" == typeof n.v) {
            if (0n === n.v || 27n === n.v) return 0;
            if (1n === n.v || 28n === n.v) return 1;
            if (n.v >= 35n) return +(n.v % 2n === 0n);
          }
        })()),
        "legacy" === n.type &&
          (delete n.accessList,
          delete n.maxFeePerBlobGas,
          delete n.maxFeePerGas,
          delete n.maxPriorityFeePerGas,
          delete n.yParity),
        "eip2930" === n.type &&
          (delete n.maxFeePerBlobGas,
          delete n.maxFeePerGas,
          delete n.maxPriorityFeePerGas),
        "eip1559" === n.type && delete n.maxFeePerBlobGas,
        n
      );
    }
    let s = (0, t.defineFormatter)("transaction", n);
    function o(e, t) {
      let r = (e.transactions ?? []).map((e) =>
        "string" == typeof e ? e : n(e)
      );
      return {
        ...e,
        baseFeePerGas: e.baseFeePerGas ? BigInt(e.baseFeePerGas) : null,
        blobGasUsed: e.blobGasUsed ? BigInt(e.blobGasUsed) : void 0,
        difficulty: e.difficulty ? BigInt(e.difficulty) : void 0,
        excessBlobGas: e.excessBlobGas ? BigInt(e.excessBlobGas) : void 0,
        gasLimit: e.gasLimit ? BigInt(e.gasLimit) : void 0,
        gasUsed: e.gasUsed ? BigInt(e.gasUsed) : void 0,
        hash: e.hash ? e.hash : null,
        logsBloom: e.logsBloom ? e.logsBloom : null,
        nonce: e.nonce ? e.nonce : null,
        number: e.number ? BigInt(e.number) : null,
        size: e.size ? BigInt(e.size) : void 0,
        timestamp: e.timestamp ? BigInt(e.timestamp) : void 0,
        transactions: r,
        totalDifficulty: e.totalDifficulty ? BigInt(e.totalDifficulty) : null,
      };
    }
    e.s(
      [
        "defineTransaction",
        0,
        s,
        "formatTransaction",
        () => n,
        "transactionType",
        0,
        i,
      ],
      789705
    );
    let a = (0, t.defineFormatter)("block", o);
    e.s(["defineBlock", 0, a, "formatBlock", () => o], 769156);
  },
  180416,
  327458,
  (e) => {
    "use strict";
    var t = e.i(378379),
      r = e.i(878726);
    function i(e, { args: t, eventName: r } = {}) {
      return {
        ...e,
        blockHash: e.blockHash ? e.blockHash : null,
        blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
        blockTimestamp: e.blockTimestamp
          ? BigInt(e.blockTimestamp)
          : null === e.blockTimestamp
          ? null
          : void 0,
        logIndex: e.logIndex ? Number(e.logIndex) : null,
        transactionHash: e.transactionHash ? e.transactionHash : null,
        transactionIndex: e.transactionIndex
          ? Number(e.transactionIndex)
          : null,
        ...(r ? { args: t, eventName: r } : {}),
      };
    }
    e.s(["formatLog", () => i], 327458);
    var n = e.i(789705);
    let s = { "0x0": "reverted", "0x1": "success" };
    function o(e, r) {
      let o = {
        ...e,
        blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
        contractAddress: e.contractAddress ? e.contractAddress : null,
        cumulativeGasUsed: e.cumulativeGasUsed
          ? BigInt(e.cumulativeGasUsed)
          : null,
        effectiveGasPrice: e.effectiveGasPrice
          ? BigInt(e.effectiveGasPrice)
          : null,
        gasUsed: e.gasUsed ? BigInt(e.gasUsed) : null,
        logs: e.logs ? e.logs.map((e) => i(e)) : null,
        to: e.to ? e.to : null,
        transactionIndex: e.transactionIndex
          ? (0, t.hexToNumber)(e.transactionIndex)
          : null,
        status: e.status ? s[e.status] : null,
        type: e.type ? n.transactionType[e.type] || e.type : null,
      };
      return (
        e.blobGasPrice && (o.blobGasPrice = BigInt(e.blobGasPrice)),
        e.blobGasUsed && (o.blobGasUsed = BigInt(e.blobGasUsed)),
        o
      );
    }
    let a = (0, r.defineFormatter)("transactionReceipt", o);
    e.s(
      [
        "defineTransactionReceipt",
        0,
        a,
        "formatTransactionReceipt",
        () => o,
        "receiptStatuses",
        0,
        s,
      ],
      180416
    );
  },
  568864,
  (e) => {
    "use strict";
    var t = e.i(824219),
      r = e.i(520229),
      i = e.i(995701),
      n = e.i(968974);
    function s(e, t = "hex") {
      let a = (function e(t) {
          var r, n;
          let s, a, l, u;
          return Array.isArray(t)
            ? ((a = o(
                (s = (r = t.map((t) => e(t))).reduce((e, t) => e + t.length, 0))
              )),
              {
                length: s <= 55 ? 1 + s : 1 + a + s,
                encode(e) {
                  for (let { encode: t } of (s <= 55
                    ? e.pushByte(192 + s)
                    : (e.pushByte(247 + a),
                      1 === a
                        ? e.pushUint8(s)
                        : 2 === a
                        ? e.pushUint16(s)
                        : 3 === a
                        ? e.pushUint24(s)
                        : e.pushUint32(s)),
                  r))
                    t(e);
                },
              })
            : ((u = o(
                (l = "string" == typeof (n = t) ? (0, i.hexToBytes)(n) : n)
                  .length
              )),
              {
                length:
                  1 === l.length && l[0] < 128
                    ? 1
                    : l.length <= 55
                    ? 1 + l.length
                    : 1 + u + l.length,
                encode(e) {
                  (1 === l.length && l[0] < 128) ||
                    (l.length <= 55
                      ? e.pushByte(128 + l.length)
                      : (e.pushByte(183 + u),
                        1 === u
                          ? e.pushUint8(l.length)
                          : 2 === u
                          ? e.pushUint16(l.length)
                          : 3 === u
                          ? e.pushUint24(l.length)
                          : e.pushUint32(l.length))),
                    e.pushBytes(l);
                },
              });
        })(e),
        l = (0, r.createCursor)(new Uint8Array(a.length));
      return (a.encode(l), "hex" === t) ? (0, n.bytesToHex)(l.bytes) : l.bytes;
    }
    function o(e) {
      if (e < 256) return 1;
      if (e < 65536) return 2;
      if (e < 0x1000000) return 3;
      if (e < 0x100000000) return 4;
      throw new t.BaseError("Length is too large.");
    }
    e.s(["toRlp", () => s]);
  },
  53637,
  (e) => {
    "use strict";
    e.s(["serializeAuthorizationList", () => i]);
    var t = e.i(968974),
      r = e.i(261200);
    function i(e) {
      if (!e || 0 === e.length) return [];
      let i = [];
      for (let n of e) {
        let { chainId: e, nonce: s, ...o } = n,
          a = n.address;
        i.push([
          e ? (0, t.toHex)(e) : "0x",
          a,
          s ? (0, t.toHex)(s) : "0x",
          ...(0, r.toYParitySignatureArray)({}, o),
        ]);
      }
      return i;
    }
  },
  822877,
  498640,
  352882,
  744326,
  917593,
  34462,
  (e) => {
    "use strict";
    var t = e.i(995701),
      r = e.i(968974);
    function i(e) {
      let { kzg: i } = e,
        n = e.to ?? ("string" == typeof e.blobs[0] ? "hex" : "bytes"),
        s =
          "string" == typeof e.blobs[0]
            ? e.blobs.map((e) => (0, t.hexToBytes)(e))
            : e.blobs,
        o = [];
      for (let e of s) o.push(Uint8Array.from(i.blobToKzgCommitment(e)));
      return "bytes" === n ? o : o.map((e) => (0, r.bytesToHex)(e));
    }
    function n(e) {
      let { kzg: i } = e,
        n = e.to ?? ("string" == typeof e.blobs[0] ? "hex" : "bytes"),
        s =
          "string" == typeof e.blobs[0]
            ? e.blobs.map((e) => (0, t.hexToBytes)(e))
            : e.blobs,
        o =
          "string" == typeof e.commitments[0]
            ? e.commitments.map((e) => (0, t.hexToBytes)(e))
            : e.commitments,
        a = [];
      for (let e = 0; e < s.length; e++) {
        let t = s[e],
          r = o[e];
        a.push(Uint8Array.from(i.computeBlobKzgProof(t, r)));
      }
      return "bytes" === n ? a : a.map((e) => (0, r.bytesToHex)(e));
    }
    e.s(["blobsToCommitments", () => i], 822877),
      e.s(["blobsToProofs", () => n], 498640);
    var s = e.i(198537),
      o = e.i(413236);
    function a(e) {
      let { commitments: i, version: n } = e,
        a = e.to ?? ("string" == typeof i[0] ? "hex" : "bytes"),
        l = [];
      for (let e of i)
        l.push(
          (function (e) {
            let { commitment: i, version: n = 1 } = e,
              a = e.to ?? ("string" == typeof i ? "hex" : "bytes"),
              l = (0, s.sha256)(
                (0, o.isHex)(i, { strict: !1 }) ? (0, t.toBytes)(i) : i
              );
            return l.set([n], 0), "bytes" === a ? l : (0, r.bytesToHex)(l);
          })({ commitment: e, to: a, version: n })
        );
      return l;
    }
    e.s(["commitmentsToVersionedHashes", () => a], 352882);
    e.s(["versionedHashVersionKzg", 0, 1], 744326);
    var l = e.i(824219);
    class u extends l.BaseError {
      constructor({ maxSize: e, size: t }) {
        super("Blob size is too large.", {
          metaMessages: [`Max: ${e} bytes`, `Given: ${t} bytes`],
          name: "BlobSizeTooLargeError",
        });
      }
    }
    class c extends l.BaseError {
      constructor() {
        super("Blob data must not be empty.", { name: "EmptyBlobError" });
      }
    }
    class d extends l.BaseError {
      constructor({ hash: e, size: t }) {
        super(`Versioned hash "${e}" size is invalid.`, {
          metaMessages: ["Expected: 32", `Received: ${t}`],
          name: "InvalidVersionedHashSizeError",
        });
      }
    }
    class h extends l.BaseError {
      constructor({ hash: e, version: t }) {
        super(`Versioned hash "${e}" version is invalid.`, {
          metaMessages: ["Expected: 1", `Received: ${t}`],
          name: "InvalidVersionedHashVersionError",
        });
      }
    }
    e.s(
      [
        "BlobSizeTooLargeError",
        () => u,
        "EmptyBlobError",
        () => c,
        "InvalidVersionedHashSizeError",
        () => d,
        "InvalidVersionedHashVersionError",
        () => h,
      ],
      917593
    );
    var f = e.i(520229),
      p = e.i(320478);
    function m(e) {
      let { data: s, kzg: o, to: a } = e,
        l =
          e.blobs ??
          (function (e) {
            let i = e.to ?? ("string" == typeof e.data ? "hex" : "bytes"),
              n =
                "string" == typeof e.data ? (0, t.hexToBytes)(e.data) : e.data,
              s = (0, p.size)(n);
            if (!s) throw new c();
            if (s > 761855) throw new u({ maxSize: 761855, size: s });
            let o = [],
              a = !0,
              l = 0;
            for (; a; ) {
              let e = (0, f.createCursor)(new Uint8Array(131072)),
                t = 0;
              for (; t < 4096; ) {
                let r = n.slice(l, l + 31);
                if ((e.pushByte(0), e.pushBytes(r), r.length < 31)) {
                  e.pushByte(128), (a = !1);
                  break;
                }
                t++, (l += 31);
              }
              o.push(e);
            }
            return "bytes" === i
              ? o.map((e) => e.bytes)
              : o.map((e) => (0, r.bytesToHex)(e.bytes));
          })({ data: s, to: a }),
        d = e.commitments ?? i({ blobs: l, kzg: o, to: a }),
        h = e.proofs ?? n({ blobs: l, commitments: d, kzg: o, to: a }),
        m = [];
      for (let e = 0; e < l.length; e++)
        m.push({ blob: l[e], commitment: d[e], proof: h[e] });
      return m;
    }
    e.s(["toBlobSidecars", () => m], 34462);
  },
  315640,
  (e) => {
    "use strict";
    var t = e.i(744326),
      r = e.i(832088),
      i = e.i(360235),
      n = e.i(824219),
      s = e.i(917593),
      o = e.i(224588),
      a = e.i(74023),
      l = e.i(307729),
      u = e.i(320478),
      c = e.i(764911),
      d = e.i(378379);
    function h(e) {
      let { authorizationList: t } = e;
      if (t)
        for (let e of t) {
          let { chainId: t } = e,
            r = e.address;
          if (!(0, l.isAddress)(r))
            throw new i.InvalidAddressError({ address: r });
          if (t < 0) throw new o.InvalidChainIdError({ chainId: t });
        }
      p(e);
    }
    function f(e) {
      let { blobVersionedHashes: r } = e;
      if (r) {
        if (0 === r.length) throw new s.EmptyBlobError();
        for (let e of r) {
          let r = (0, u.size)(e),
            i = (0, d.hexToNumber)((0, c.slice)(e, 0, 1));
          if (32 !== r)
            throw new s.InvalidVersionedHashSizeError({ hash: e, size: r });
          if (i !== t.versionedHashVersionKzg)
            throw new s.InvalidVersionedHashVersionError({
              hash: e,
              version: i,
            });
        }
      }
      p(e);
    }
    function p(e) {
      let { chainId: t, maxPriorityFeePerGas: n, maxFeePerGas: s, to: u } = e;
      if (t <= 0) throw new o.InvalidChainIdError({ chainId: t });
      if (u && !(0, l.isAddress)(u))
        throw new i.InvalidAddressError({ address: u });
      if (s && s > r.maxUint256)
        throw new a.FeeCapTooHighError({ maxFeePerGas: s });
      if (n && s && n > s)
        throw new a.TipAboveFeeCapError({
          maxFeePerGas: s,
          maxPriorityFeePerGas: n,
        });
    }
    function m(e) {
      let {
        chainId: t,
        maxPriorityFeePerGas: s,
        gasPrice: u,
        maxFeePerGas: c,
        to: d,
      } = e;
      if (t <= 0) throw new o.InvalidChainIdError({ chainId: t });
      if (d && !(0, l.isAddress)(d))
        throw new i.InvalidAddressError({ address: d });
      if (s || c)
        throw new n.BaseError(
          "`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute."
        );
      if (u && u > r.maxUint256)
        throw new a.FeeCapTooHighError({ maxFeePerGas: u });
    }
    function g(e) {
      let {
        chainId: t,
        maxPriorityFeePerGas: s,
        gasPrice: u,
        maxFeePerGas: c,
        to: d,
      } = e;
      if (d && !(0, l.isAddress)(d))
        throw new i.InvalidAddressError({ address: d });
      if (void 0 !== t && t <= 0)
        throw new o.InvalidChainIdError({ chainId: t });
      if (s || c)
        throw new n.BaseError(
          "`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute."
        );
      if (u && u > r.maxUint256)
        throw new a.FeeCapTooHighError({ maxFeePerGas: u });
    }
    e.s([
      "assertTransactionEIP1559",
      () => p,
      "assertTransactionEIP2930",
      () => m,
      "assertTransactionEIP4844",
      () => f,
      "assertTransactionEIP7702",
      () => h,
      "assertTransactionLegacy",
      () => g,
    ]);
  },
  658818,
  (e) => {
    "use strict";
    var t = e.i(503719);
    function r(e) {
      if (e.type) return e.type;
      if (void 0 !== e.authorizationList) return "eip7702";
      if (
        void 0 !== e.blobs ||
        void 0 !== e.blobVersionedHashes ||
        void 0 !== e.maxFeePerBlobGas ||
        void 0 !== e.sidecars
      )
        return "eip4844";
      if (void 0 !== e.maxFeePerGas || void 0 !== e.maxPriorityFeePerGas)
        return "eip1559";
      if (void 0 !== e.gasPrice)
        return void 0 !== e.accessList ? "eip2930" : "legacy";
      throw new t.InvalidSerializableTransactionError({ transaction: e });
    }
    e.s(["getTransactionType", () => r]);
  },
  261200,
  (e) => {
    "use strict";
    e.s(
      ["serializeTransaction", () => g, "toYParitySignatureArray", () => b],
      261200
    );
    var t = e.i(503719),
      r = e.i(53637),
      i = e.i(822877),
      n = e.i(498640),
      s = e.i(352882),
      o = e.i(34462),
      a = e.i(648387),
      l = e.i(340903),
      u = e.i(968974),
      c = e.i(568864),
      d = e.i(315640),
      h = e.i(658818),
      f = e.i(360235),
      p = e.i(307729);
    function m(e) {
      if (!e || 0 === e.length) return [];
      let r = [];
      for (let i = 0; i < e.length; i++) {
        let { address: n, storageKeys: s } = e[i];
        for (let e = 0; e < s.length; e++)
          if (s[e].length - 2 != 64)
            throw new t.InvalidStorageKeySizeError({ storageKey: s[e] });
        if (!(0, p.isAddress)(n, { strict: !1 }))
          throw new f.InvalidAddressError({ address: n });
        r.push([n, s]);
      }
      return r;
    }
    function g(e, f) {
      let p = (0, h.getTransactionType)(e);
      return "eip1559" === p
        ? (function (e, t) {
            let {
              chainId: r,
              gas: i,
              nonce: n,
              to: s,
              value: o,
              maxFeePerGas: l,
              maxPriorityFeePerGas: h,
              accessList: f,
              data: p,
            } = e;
            (0, d.assertTransactionEIP1559)(e);
            let g = m(f),
              y = [
                (0, u.numberToHex)(r),
                n ? (0, u.numberToHex)(n) : "0x",
                h ? (0, u.numberToHex)(h) : "0x",
                l ? (0, u.numberToHex)(l) : "0x",
                i ? (0, u.numberToHex)(i) : "0x",
                s ?? "0x",
                o ? (0, u.numberToHex)(o) : "0x",
                p ?? "0x",
                g,
                ...b(e, t),
              ];
            return (0, a.concatHex)(["0x02", (0, c.toRlp)(y)]);
          })(e, f)
        : "eip2930" === p
        ? (function (e, t) {
            let {
              chainId: r,
              gas: i,
              data: n,
              nonce: s,
              to: o,
              value: l,
              accessList: h,
              gasPrice: f,
            } = e;
            (0, d.assertTransactionEIP2930)(e);
            let p = m(h),
              g = [
                (0, u.numberToHex)(r),
                s ? (0, u.numberToHex)(s) : "0x",
                f ? (0, u.numberToHex)(f) : "0x",
                i ? (0, u.numberToHex)(i) : "0x",
                o ?? "0x",
                l ? (0, u.numberToHex)(l) : "0x",
                n ?? "0x",
                p,
                ...b(e, t),
              ];
            return (0, a.concatHex)(["0x01", (0, c.toRlp)(g)]);
          })(e, f)
        : "eip4844" === p
        ? (function (e, t) {
            let {
              chainId: r,
              gas: l,
              nonce: h,
              to: f,
              value: p,
              maxFeePerBlobGas: g,
              maxFeePerGas: y,
              maxPriorityFeePerGas: v,
              accessList: x,
              data: w,
            } = e;
            (0, d.assertTransactionEIP4844)(e);
            let P = e.blobVersionedHashes,
              T = e.sidecars;
            if (e.blobs && (void 0 === P || void 0 === T)) {
              let t =
                  "string" == typeof e.blobs[0]
                    ? e.blobs
                    : e.blobs.map((e) => (0, u.bytesToHex)(e)),
                r = e.kzg,
                a = (0, i.blobsToCommitments)({ blobs: t, kzg: r });
              if (
                (void 0 === P &&
                  (P = (0, s.commitmentsToVersionedHashes)({ commitments: a })),
                void 0 === T)
              ) {
                let e = (0, n.blobsToProofs)({
                  blobs: t,
                  commitments: a,
                  kzg: r,
                });
                T = (0, o.toBlobSidecars)({
                  blobs: t,
                  commitments: a,
                  proofs: e,
                });
              }
            }
            let S = m(x),
              E = [
                (0, u.numberToHex)(r),
                h ? (0, u.numberToHex)(h) : "0x",
                v ? (0, u.numberToHex)(v) : "0x",
                y ? (0, u.numberToHex)(y) : "0x",
                l ? (0, u.numberToHex)(l) : "0x",
                f ?? "0x",
                p ? (0, u.numberToHex)(p) : "0x",
                w ?? "0x",
                S,
                g ? (0, u.numberToHex)(g) : "0x",
                P ?? [],
                ...b(e, t),
              ],
              I = [],
              C = [],
              O = [];
            if (T)
              for (let e = 0; e < T.length; e++) {
                let { blob: t, commitment: r, proof: i } = T[e];
                I.push(t), C.push(r), O.push(i);
              }
            return (0, a.concatHex)([
              "0x03",
              T ? (0, c.toRlp)([E, I, C, O]) : (0, c.toRlp)(E),
            ]);
          })(e, f)
        : "eip7702" === p
        ? (function (e, t) {
            let {
              authorizationList: i,
              chainId: n,
              gas: s,
              nonce: o,
              to: l,
              value: h,
              maxFeePerGas: f,
              maxPriorityFeePerGas: p,
              accessList: g,
              data: y,
            } = e;
            (0, d.assertTransactionEIP7702)(e);
            let v = m(g),
              x = (0, r.serializeAuthorizationList)(i);
            return (0, a.concatHex)([
              "0x04",
              (0, c.toRlp)([
                (0, u.numberToHex)(n),
                o ? (0, u.numberToHex)(o) : "0x",
                p ? (0, u.numberToHex)(p) : "0x",
                f ? (0, u.numberToHex)(f) : "0x",
                s ? (0, u.numberToHex)(s) : "0x",
                l ?? "0x",
                h ? (0, u.numberToHex)(h) : "0x",
                y ?? "0x",
                v,
                x,
                ...b(e, t),
              ]),
            ]);
          })(e, f)
        : (function (e, r) {
            let {
              chainId: i = 0,
              gas: n,
              data: s,
              nonce: o,
              to: a,
              value: h,
              gasPrice: f,
            } = e;
            (0, d.assertTransactionLegacy)(e);
            let p = [
              o ? (0, u.numberToHex)(o) : "0x",
              f ? (0, u.numberToHex)(f) : "0x",
              n ? (0, u.numberToHex)(n) : "0x",
              a ?? "0x",
              h ? (0, u.numberToHex)(h) : "0x",
              s ?? "0x",
            ];
            if (r) {
              let e = (() => {
                  if (r.v >= 35n)
                    return (r.v - 35n) / 2n > 0
                      ? r.v
                      : 27n + (35n === r.v ? 0n : 1n);
                  if (i > 0) return BigInt(2 * i) + BigInt(35n + r.v - 27n);
                  let e = 27n + (27n === r.v ? 0n : 1n);
                  if (r.v !== e) throw new t.InvalidLegacyVError({ v: r.v });
                  return e;
                })(),
                n = (0, l.trim)(r.r),
                s = (0, l.trim)(r.s);
              p = [
                ...p,
                (0, u.numberToHex)(e),
                "0x00" === n ? "0x" : n,
                "0x00" === s ? "0x" : s,
              ];
            } else i > 0 && (p = [...p, (0, u.numberToHex)(i), "0x", "0x"]);
            return (0, c.toRlp)(p);
          })(e, f);
    }
    function b(e, t) {
      let r = t ?? e,
        { v: i, yParity: n } = r;
      if (void 0 === r.r || void 0 === r.s || (void 0 === i && void 0 === n))
        return [];
      let s = (0, l.trim)(r.r),
        o = (0, l.trim)(r.s);
      return [
        "number" == typeof n
          ? n
            ? (0, u.numberToHex)(1)
            : "0x"
          : 0n === i
          ? "0x"
          : 1n === i
          ? (0, u.numberToHex)(1)
          : 27n === i
          ? "0x"
          : (0, u.numberToHex)(1),
        "0x00" === s ? "0x" : s,
        "0x00" === o ? "0x" : o,
      ];
    }
  },
]);
