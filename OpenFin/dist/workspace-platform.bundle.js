var Qu = Object.defineProperty;
var Xu = (h, o, c) => o in h ? Qu(h, o, { enumerable: !0, configurable: !0, writable: !0, value: c }) : h[o] = c;
var ys = (h, o, c) => Xu(h, typeof o != "symbol" ? o + "" : o, c);
function el(h, o) {
  for (var c = 0; c < o.length; c++) {
    const d = o[c];
    if (typeof d != "string" && !Array.isArray(d)) {
      for (const y in d)
        if (y !== "default" && !(y in h)) {
          const m = Object.getOwnPropertyDescriptor(d, y);
          m && Object.defineProperty(h, y, m.get ? m : {
            enumerable: !0,
            get: () => d[y]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(h, Symbol.toStringTag, { value: "Module" }));
}
var hr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ui(h) {
  return h && h.__esModule && Object.prototype.hasOwnProperty.call(h, "default") ? h.default : h;
}
function Fs(h) {
  if (h.__esModule) return h;
  var o = h.default;
  if (typeof o == "function") {
    var c = function d() {
      return this instanceof d ? Reflect.construct(o, arguments, this.constructor) : o.apply(this, arguments);
    };
    c.prototype = o.prototype;
  } else c = {};
  return Object.defineProperty(c, "__esModule", { value: !0 }), Object.keys(h).forEach(function(d) {
    var y = Object.getOwnPropertyDescriptor(h, d);
    Object.defineProperty(c, d, y.get ? y : {
      enumerable: !0,
      get: function() {
        return h[d];
      }
    });
  }), c;
}
var Vs = { exports: {} }, Us = { exports: {} };
(function(h, o) {
  (function(c, d) {
    h.exports = d();
  })(hr, function() {
    var c = function(t, a) {
      return (c = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, l) {
        i.__proto__ = l;
      } || function(i, l) {
        for (var p in l) Object.prototype.hasOwnProperty.call(l, p) && (i[p] = l[p]);
      })(t, a);
    }, d = function() {
      return (d = Object.assign || function(t) {
        for (var a, i = 1, l = arguments.length; i < l; i++) for (var p in a = arguments[i]) Object.prototype.hasOwnProperty.call(a, p) && (t[p] = a[p]);
        return t;
      }).apply(this, arguments);
    };
    function y(t, a, i) {
      for (var l, p = 0, f = a.length; p < f; p++) !l && p in a || ((l = l || Array.prototype.slice.call(a, 0, p))[p] = a[p]);
      return t.concat(l || Array.prototype.slice.call(a));
    }
    var m = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : hr, S = Object.keys, I = Array.isArray;
    function _(t, a) {
      return typeof a != "object" || S(a).forEach(function(i) {
        t[i] = a[i];
      }), t;
    }
    typeof Promise > "u" || m.Promise || (m.Promise = Promise);
    var U = Object.getPrototypeOf, q = {}.hasOwnProperty;
    function X(t, a) {
      return q.call(t, a);
    }
    function j(t, a) {
      typeof a == "function" && (a = a(U(t))), (typeof Reflect > "u" ? S : Reflect.ownKeys)(a).forEach(function(i) {
        we(t, i, a[i]);
      });
    }
    var W = Object.defineProperty;
    function we(t, a, i, l) {
      W(t, a, _(i && X(i, "get") && typeof i.get == "function" ? { get: i.get, set: i.set, configurable: !0 } : { value: i, configurable: !0, writable: !0 }, l));
    }
    function ge(t) {
      return { from: function(a) {
        return t.prototype = Object.create(a.prototype), we(t.prototype, "constructor", t), { extend: j.bind(null, t.prototype) };
      } };
    }
    var z = Object.getOwnPropertyDescriptor, Me = [].slice;
    function Y(t, a, i) {
      return Me.call(t, a, i);
    }
    function Ce(t, a) {
      return a(t);
    }
    function ne(t) {
      if (!t) throw new Error("Assertion Failed");
    }
    function Ie(t) {
      m.setImmediate ? setImmediate(t) : setTimeout(t, 0);
    }
    function se(t, a) {
      if (typeof a == "string" && X(t, a)) return t[a];
      if (!a) return t;
      if (typeof a != "string") {
        for (var i = [], l = 0, p = a.length; l < p; ++l) {
          var f = se(t, a[l]);
          i.push(f);
        }
        return i;
      }
      var v = a.indexOf(".");
      if (v !== -1) {
        var x = t[a.substr(0, v)];
        return x == null ? void 0 : se(x, a.substr(v + 1));
      }
    }
    function ce(t, a, i) {
      if (t && a !== void 0 && !("isFrozen" in Object && Object.isFrozen(t))) if (typeof a != "string" && "length" in a) {
        ne(typeof i != "string" && "length" in i);
        for (var l = 0, p = a.length; l < p; ++l) ce(t, a[l], i[l]);
      } else {
        var f, v, x = a.indexOf(".");
        x !== -1 ? (f = a.substr(0, x), (v = a.substr(x + 1)) === "" ? i === void 0 ? I(t) && !isNaN(parseInt(f)) ? t.splice(f, 1) : delete t[f] : t[f] = i : ce(x = !(x = t[f]) || !X(t, f) ? t[f] = {} : x, v, i)) : i === void 0 ? I(t) && !isNaN(parseInt(a)) ? t.splice(a, 1) : delete t[a] : t[a] = i;
      }
    }
    function dt(t) {
      var a, i = {};
      for (a in t) X(t, a) && (i[a] = t[a]);
      return i;
    }
    var at = [].concat;
    function Je(t) {
      return at.apply([], t);
    }
    var it = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Je([8, 16, 32, 64].map(function(t) {
      return ["Int", "Uint", "Float"].map(function(a) {
        return a + t + "Array";
      });
    }))).filter(function(t) {
      return m[t];
    }), ut = new Set(it.map(function(t) {
      return m[t];
    })), Dt = null;
    function Fe(t) {
      return Dt = /* @__PURE__ */ new WeakMap(), t = function a(i) {
        if (!i || typeof i != "object") return i;
        var l = Dt.get(i);
        if (l) return l;
        if (I(i)) {
          l = [], Dt.set(i, l);
          for (var p = 0, f = i.length; p < f; ++p) l.push(a(i[p]));
        } else if (ut.has(i.constructor)) l = i;
        else {
          var v, x = U(i);
          for (v in l = x === Object.prototype ? {} : Object.create(x), Dt.set(i, l), i) X(i, v) && (l[v] = a(i[v]));
        }
        return l;
      }(t), Dt = null, t;
    }
    var Pt = {}.toString;
    function Le(t) {
      return Pt.call(t).slice(8, -1);
    }
    var bt = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", _t = typeof bt == "symbol" ? function(t) {
      var a;
      return t != null && (a = t[bt]) && a.apply(t);
    } : function() {
      return null;
    };
    function mt(t, a) {
      return a = t.indexOf(a), 0 <= a && t.splice(a, 1), 0 <= a;
    }
    var ht = {};
    function Ge(t) {
      var a, i, l, p;
      if (arguments.length === 1) {
        if (I(t)) return t.slice();
        if (this === ht && typeof t == "string") return [t];
        if (p = _t(t)) {
          for (i = []; !(l = p.next()).done; ) i.push(l.value);
          return i;
        }
        if (t == null) return [t];
        if (typeof (a = t.length) != "number") return [t];
        for (i = new Array(a); a--; ) i[a] = t[a];
        return i;
      }
      for (a = arguments.length, i = new Array(a); a--; ) i[a] = arguments[a];
      return i;
    }
    var D = typeof Symbol < "u" ? function(t) {
      return t[Symbol.toStringTag] === "AsyncFunction";
    } : function() {
      return !1;
    }, Ut = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], mn = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(Ut), ue = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
    function Ae(t, a) {
      this.name = t, this.message = a;
    }
    function We(t, a) {
      return t + ". Errors: " + Object.keys(a).map(function(i) {
        return a[i].toString();
      }).filter(function(i, l, p) {
        return p.indexOf(i) === l;
      }).join(`
`);
    }
    function Ye(t, a, i, l) {
      this.failures = a, this.failedKeys = l, this.successCount = i, this.message = We(t, a);
    }
    function Xe(t, a) {
      this.name = "BulkError", this.failures = Object.keys(a).map(function(i) {
        return a[i];
      }), this.failuresByPos = a, this.message = We(t, this.failures);
    }
    ge(Ae).from(Error).extend({ toString: function() {
      return this.name + ": " + this.message;
    } }), ge(Ye).from(Ae), ge(Xe).from(Ae);
    var je = mn.reduce(function(t, a) {
      return t[a] = a + "Error", t;
    }, {}), Ot = Ae, ve = mn.reduce(function(t, a) {
      var i = a + "Error";
      function l(p, f) {
        this.name = i, p ? typeof p == "string" ? (this.message = "".concat(p).concat(f ? `
 ` + f : ""), this.inner = f || null) : typeof p == "object" && (this.message = "".concat(p.name, " ").concat(p.message), this.inner = p) : (this.message = ue[a] || i, this.inner = null);
      }
      return ge(l).from(Ot), t[a] = l, t;
    }, {});
    ve.Syntax = SyntaxError, ve.Type = TypeError, ve.Range = RangeError;
    var Ft = Ut.reduce(function(t, a) {
      return t[a + "Error"] = ve[a], t;
    }, {}), Nt = mn.reduce(function(t, a) {
      return ["Syntax", "Type", "Range"].indexOf(a) === -1 && (t[a + "Error"] = ve[a]), t;
    }, {});
    function C() {
    }
    function H(t) {
      return t;
    }
    function G(t, a) {
      return t == null || t === H ? a : function(i) {
        return a(t(i));
      };
    }
    function ae(t, a) {
      return function() {
        t.apply(this, arguments), a.apply(this, arguments);
      };
    }
    function Oe(t, a) {
      return t === C ? a : function() {
        var i = t.apply(this, arguments);
        i !== void 0 && (arguments[0] = i);
        var l = this.onsuccess, p = this.onerror;
        this.onsuccess = null, this.onerror = null;
        var f = a.apply(this, arguments);
        return l && (this.onsuccess = this.onsuccess ? ae(l, this.onsuccess) : l), p && (this.onerror = this.onerror ? ae(p, this.onerror) : p), f !== void 0 ? f : i;
      };
    }
    function Ke(t, a) {
      return t === C ? a : function() {
        t.apply(this, arguments);
        var i = this.onsuccess, l = this.onerror;
        this.onsuccess = this.onerror = null, a.apply(this, arguments), i && (this.onsuccess = this.onsuccess ? ae(i, this.onsuccess) : i), l && (this.onerror = this.onerror ? ae(l, this.onerror) : l);
      };
    }
    function Be(t, a) {
      return t === C ? a : function(i) {
        var l = t.apply(this, arguments);
        _(i, l);
        var p = this.onsuccess, f = this.onerror;
        return this.onsuccess = null, this.onerror = null, i = a.apply(this, arguments), p && (this.onsuccess = this.onsuccess ? ae(p, this.onsuccess) : p), f && (this.onerror = this.onerror ? ae(f, this.onerror) : f), l === void 0 ? i === void 0 ? void 0 : i : _(l, i);
      };
    }
    function yt(t, a) {
      return t === C ? a : function() {
        return a.apply(this, arguments) !== !1 && t.apply(this, arguments);
      };
    }
    function gt(t, a) {
      return t === C ? a : function() {
        var i = t.apply(this, arguments);
        if (i && typeof i.then == "function") {
          for (var l = this, p = arguments.length, f = new Array(p); p--; ) f[p] = arguments[p];
          return i.then(function() {
            return a.apply(l, f);
          });
        }
        return a.apply(this, arguments);
      };
    }
    Nt.ModifyError = Ye, Nt.DexieError = Ae, Nt.BulkError = Xe;
    var Re = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
    function dn(t) {
      Re = t;
    }
    var Jt = {}, pn = 100, it = typeof Promise > "u" ? [] : function() {
      var t = Promise.resolve();
      if (typeof crypto > "u" || !crypto.subtle) return [t, U(t), t];
      var a = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
      return [a, U(a), t];
    }(), Ut = it[0], mn = it[1], it = it[2], mn = mn && mn.then, Se = Ut && Ut.constructor, pt = !!it, Ht = function(t, a) {
      $t.push([t, a]), jt && (queueMicrotask(rt), jt = !1);
    }, cn = !0, jt = !0, vt = [], Mt = [], Yt = H, Kt = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: C, pgp: !1, env: {}, finalize: C }, _e = Kt, $t = [], Ve = 0, g = [];
    function P(t) {
      if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
      this._listeners = [], this._lib = !1;
      var a = this._PSD = _e;
      if (typeof t != "function") {
        if (t !== Jt) throw new TypeError("Not a function");
        return this._state = arguments[1], this._value = arguments[2], void (this._state === !1 && Te(this, this._value));
      }
      this._state = null, this._value = null, ++a.ref, function i(l, p) {
        try {
          p(function(f) {
            if (l._state === null) {
              if (f === l) throw new TypeError("A promise cannot be resolved with itself.");
              var v = l._lib && Gt();
              f && typeof f.then == "function" ? i(l, function(x, A) {
                f instanceof P ? f._then(x, A) : f.then(x, A);
              }) : (l._state = !0, l._value = f, tt(l)), v && an();
            }
          }, Te.bind(null, l));
        } catch (f) {
          Te(l, f);
        }
      }(this, t);
    }
    var ie = { get: function() {
      var t = _e, a = Pn;
      function i(l, p) {
        var f = this, v = !t.global && (t !== _e || a !== Pn), x = v && !xn(), A = new P(function(E, N) {
          $e(f, new le(Gr(l, t, v, x), Gr(p, t, v, x), E, N, t));
        });
        return this._consoleTask && (A._consoleTask = this._consoleTask), A;
      }
      return i.prototype = Jt, i;
    }, set: function(t) {
      we(this, "then", t && t.prototype === Jt ? ie : { get: function() {
        return t;
      }, set: ie.set });
    } };
    function le(t, a, i, l, p) {
      this.onFulfilled = typeof t == "function" ? t : null, this.onRejected = typeof a == "function" ? a : null, this.resolve = i, this.reject = l, this.psd = p;
    }
    function Te(t, a) {
      var i, l;
      Mt.push(a), t._state === null && (i = t._lib && Gt(), a = Yt(a), t._state = !1, t._value = a, l = t, vt.some(function(p) {
        return p._value === l._value;
      }) || vt.push(l), tt(t), i && an());
    }
    function tt(t) {
      var a = t._listeners;
      t._listeners = [];
      for (var i = 0, l = a.length; i < l; ++i) $e(t, a[i]);
      var p = t._PSD;
      --p.ref || p.finalize(), Ve === 0 && (++Ve, Ht(function() {
        --Ve == 0 && Xn();
      }, []));
    }
    function $e(t, a) {
      if (t._state !== null) {
        var i = t._state ? a.onFulfilled : a.onRejected;
        if (i === null) return (t._state ? a.resolve : a.reject)(t._value);
        ++a.psd.ref, ++Ve, Ht(st, [i, t, a]);
      } else t._listeners.push(a);
    }
    function st(t, a, i) {
      try {
        var l, p = a._value;
        !a._state && Mt.length && (Mt = []), l = Re && a._consoleTask ? a._consoleTask.run(function() {
          return t(p);
        }) : t(p), a._state || Mt.indexOf(p) !== -1 || function(f) {
          for (var v = vt.length; v; ) if (vt[--v]._value === f._value) return vt.splice(v, 1);
        }(a), i.resolve(l);
      } catch (f) {
        i.reject(f);
      } finally {
        --Ve == 0 && Xn(), --i.psd.ref || i.psd.finalize();
      }
    }
    function rt() {
      $n(Kt, function() {
        Gt() && an();
      });
    }
    function Gt() {
      var t = cn;
      return jt = cn = !1, t;
    }
    function an() {
      var t, a, i;
      do
        for (; 0 < $t.length; ) for (t = $t, $t = [], i = t.length, a = 0; a < i; ++a) {
          var l = t[a];
          l[0].apply(null, l[1]);
        }
      while (0 < $t.length);
      jt = cn = !0;
    }
    function Xn() {
      var t = vt;
      vt = [], t.forEach(function(l) {
        l._PSD.onunhandled.call(null, l._value, l);
      });
      for (var a = g.slice(0), i = a.length; i; ) a[--i]();
    }
    function jn(t) {
      return new P(Jt, !1, t);
    }
    function kt(t, a) {
      var i = _e;
      return function() {
        var l = Gt(), p = _e;
        try {
          return Cn(i, !0), t.apply(this, arguments);
        } catch (f) {
          a && a(f);
        } finally {
          Cn(p, !1), l && an();
        }
      };
    }
    j(P.prototype, { then: ie, _then: function(t, a) {
      $e(this, new le(null, null, t, a, _e));
    }, catch: function(t) {
      if (arguments.length === 1) return this.then(null, t);
      var a = t, i = arguments[1];
      return typeof a == "function" ? this.then(null, function(l) {
        return (l instanceof a ? i : jn)(l);
      }) : this.then(null, function(l) {
        return (l && l.name === a ? i : jn)(l);
      });
    }, finally: function(t) {
      return this.then(function(a) {
        return P.resolve(t()).then(function() {
          return a;
        });
      }, function(a) {
        return P.resolve(t()).then(function() {
          return jn(a);
        });
      });
    }, timeout: function(t, a) {
      var i = this;
      return t < 1 / 0 ? new P(function(l, p) {
        var f = setTimeout(function() {
          return p(new ve.Timeout(a));
        }, t);
        i.then(l, p).finally(clearTimeout.bind(null, f));
      }) : this;
    } }), typeof Symbol < "u" && Symbol.toStringTag && we(P.prototype, Symbol.toStringTag, "Dexie.Promise"), Kt.env = yr(), j(P, { all: function() {
      var t = Ge.apply(null, arguments).map(ta);
      return new P(function(a, i) {
        t.length === 0 && a([]);
        var l = t.length;
        t.forEach(function(p, f) {
          return P.resolve(p).then(function(v) {
            t[f] = v, --l || a(t);
          }, i);
        });
      });
    }, resolve: function(t) {
      return t instanceof P ? t : t && typeof t.then == "function" ? new P(function(a, i) {
        t.then(a, i);
      }) : new P(Jt, !0, t);
    }, reject: jn, race: function() {
      var t = Ge.apply(null, arguments).map(ta);
      return new P(function(a, i) {
        t.map(function(l) {
          return P.resolve(l).then(a, i);
        });
      });
    }, PSD: { get: function() {
      return _e;
    }, set: function(t) {
      return _e = t;
    } }, totalEchoes: { get: function() {
      return Pn;
    } }, newPSD: oe, usePSD: $n, scheduler: { get: function() {
      return Ht;
    }, set: function(t) {
      Ht = t;
    } }, rejectionMapper: { get: function() {
      return Yt;
    }, set: function(t) {
      Yt = t;
    } }, follow: function(t, a) {
      return new P(function(i, l) {
        return oe(function(p, f) {
          var v = _e;
          v.unhandleds = [], v.onunhandled = f, v.finalize = ae(function() {
            var x, A = this;
            x = function() {
              A.unhandleds.length === 0 ? p() : f(A.unhandleds[0]);
            }, g.push(function E() {
              x(), g.splice(g.indexOf(E), 1);
            }), ++Ve, Ht(function() {
              --Ve == 0 && Xn();
            }, []);
          }, v.finalize), t();
        }, a, i, l);
      });
    } }), Se && (Se.allSettled && we(P, "allSettled", function() {
      var t = Ge.apply(null, arguments).map(ta);
      return new P(function(a) {
        t.length === 0 && a([]);
        var i = t.length, l = new Array(i);
        t.forEach(function(p, f) {
          return P.resolve(p).then(function(v) {
            return l[f] = { status: "fulfilled", value: v };
          }, function(v) {
            return l[f] = { status: "rejected", reason: v };
          }).then(function() {
            return --i || a(l);
          });
        });
      });
    }), Se.any && typeof AggregateError < "u" && we(P, "any", function() {
      var t = Ge.apply(null, arguments).map(ta);
      return new P(function(a, i) {
        t.length === 0 && i(new AggregateError([]));
        var l = t.length, p = new Array(l);
        t.forEach(function(f, v) {
          return P.resolve(f).then(function(x) {
            return a(x);
          }, function(x) {
            p[v] = x, --l || i(new AggregateError(p));
          });
        });
      });
    }), Se.withResolvers && (P.withResolvers = Se.withResolvers));
    var Wt = { awaits: 0, echoes: 0, id: 0 }, $r = 0, ea = [], ba = 0, Pn = 0, bo = 0;
    function oe(t, a, i, l) {
      var p = _e, f = Object.create(p);
      return f.parent = p, f.ref = 0, f.global = !1, f.id = ++bo, Kt.env, f.env = pt ? { Promise: P, PromiseProp: { value: P, configurable: !0, writable: !0 }, all: P.all, race: P.race, allSettled: P.allSettled, any: P.any, resolve: P.resolve, reject: P.reject } : {}, a && _(f, a), ++p.ref, f.finalize = function() {
        --this.parent.ref || this.parent.finalize();
      }, l = $n(f, t, i, l), f.ref === 0 && f.finalize(), l;
    }
    function Kn() {
      return Wt.id || (Wt.id = ++$r), ++Wt.awaits, Wt.echoes += pn, Wt.id;
    }
    function xn() {
      return !!Wt.awaits && (--Wt.awaits == 0 && (Wt.id = 0), Wt.echoes = Wt.awaits * pn, !0);
    }
    function ta(t) {
      return Wt.echoes && t && t.constructor === Se ? (Kn(), t.then(function(a) {
        return xn(), a;
      }, function(a) {
        return xn(), Lt(a);
      })) : t;
    }
    function Hr() {
      var t = ea[ea.length - 1];
      ea.pop(), Cn(t, !1);
    }
    function Cn(t, a) {
      var i, l = _e;
      (a ? !Wt.echoes || ba++ && t === _e : !ba || --ba && t === _e) || queueMicrotask(a ? (function(p) {
        ++Pn, Wt.echoes && --Wt.echoes != 0 || (Wt.echoes = Wt.awaits = Wt.id = 0), ea.push(_e), Cn(p, !0);
      }).bind(null, t) : Hr), t !== _e && (_e = t, l === Kt && (Kt.env = yr()), pt && (i = Kt.env.Promise, a = t.env, (l.global || t.global) && (Object.defineProperty(m, "Promise", a.PromiseProp), i.all = a.all, i.race = a.race, i.resolve = a.resolve, i.reject = a.reject, a.allSettled && (i.allSettled = a.allSettled), a.any && (i.any = a.any))));
    }
    function yr() {
      var t = m.Promise;
      return pt ? { Promise: t, PromiseProp: Object.getOwnPropertyDescriptor(m, "Promise"), all: t.all, race: t.race, allSettled: t.allSettled, any: t.any, resolve: t.resolve, reject: t.reject } : {};
    }
    function $n(t, a, i, l, p) {
      var f = _e;
      try {
        return Cn(t, !0), a(i, l, p);
      } finally {
        Cn(f, !1);
      }
    }
    function Gr(t, a, i, l) {
      return typeof t != "function" ? t : function() {
        var p = _e;
        i && Kn(), Cn(a, !0);
        try {
          return t.apply(this, arguments);
        } finally {
          Cn(p, !1), l && queueMicrotask(xn);
        }
      };
    }
    function br(t) {
      Promise === Se && Wt.echoes === 0 ? ba === 0 ? t() : enqueueNativeMicroTask(t) : setTimeout(t, 0);
    }
    ("" + mn).indexOf("[native code]") === -1 && (Kn = xn = C);
    var Lt = P.reject, Hn = "￿", Mn = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", Tn = "String expected.", Gn = [], va = "__dbnames", vr = "readonly", kr = "readwrite";
    function pe(t, a) {
      return t ? a ? function() {
        return t.apply(this, arguments) && a.apply(this, arguments);
      } : t : a;
    }
    var Ba = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
    function na(t) {
      return typeof t != "string" || /\./.test(t) ? function(a) {
        return a;
      } : function(a) {
        return a[t] === void 0 && t in a && delete (a = Fe(a))[t], a;
      };
    }
    function Ue() {
      throw ve.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
    }
    function Pe(t, a) {
      try {
        var i = zr(t), l = zr(a);
        if (i !== l) return i === "Array" ? 1 : l === "Array" ? -1 : i === "binary" ? 1 : l === "binary" ? -1 : i === "string" ? 1 : l === "string" ? -1 : i === "Date" ? 1 : l !== "Date" ? NaN : -1;
        switch (i) {
          case "number":
          case "Date":
          case "string":
            return a < t ? 1 : t < a ? -1 : 0;
          case "binary":
            return function(p, f) {
              for (var v = p.length, x = f.length, A = v < x ? v : x, E = 0; E < A; ++E) if (p[E] !== f[E]) return p[E] < f[E] ? -1 : 1;
              return v === x ? 0 : v < x ? -1 : 1;
            }(Sr(t), Sr(a));
          case "Array":
            return function(p, f) {
              for (var v = p.length, x = f.length, A = v < x ? v : x, E = 0; E < A; ++E) {
                var N = Pe(p[E], f[E]);
                if (N !== 0) return N;
              }
              return v === x ? 0 : v < x ? -1 : 1;
            }(t, a);
        }
      } catch {
      }
      return NaN;
    }
    function zr(t) {
      var a = typeof t;
      return a != "object" ? a : ArrayBuffer.isView(t) ? "binary" : (t = Le(t), t === "ArrayBuffer" ? "binary" : t);
    }
    function Sr(t) {
      return t instanceof Uint8Array ? t : ArrayBuffer.isView(t) ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : new Uint8Array(t);
    }
    function aa(t, a, i) {
      var l = t.schema.yProps;
      return l ? (a && 0 < i.numFailures && (a = a.filter(function(p, f) {
        return !i.failures[f];
      })), Promise.all(l.map(function(p) {
        return p = p.updatesTable, a ? t.db.table(p).where("k").anyOf(a).delete() : t.db.table(p).clear();
      })).then(function() {
        return i;
      })) : i;
    }
    var Rn = (Na.prototype.execute = function(t) {
      var a = this["@@propmod"];
      if (a.add !== void 0) {
        var i = a.add;
        if (I(i)) return y(y([], I(t) ? t : [], !0), i).sort();
        if (typeof i == "number") return (Number(t) || 0) + i;
        if (typeof i == "bigint") try {
          return BigInt(t) + i;
        } catch {
          return BigInt(0) + i;
        }
        throw new TypeError("Invalid term ".concat(i));
      }
      if (a.remove !== void 0) {
        var l = a.remove;
        if (I(l)) return I(t) ? t.filter(function(p) {
          return !l.includes(p);
        }).sort() : [];
        if (typeof l == "number") return Number(t) - l;
        if (typeof l == "bigint") try {
          return BigInt(t) - l;
        } catch {
          return BigInt(0) - l;
        }
        throw new TypeError("Invalid subtrahend ".concat(l));
      }
      return i = (i = a.replacePrefix) === null || i === void 0 ? void 0 : i[0], i && typeof t == "string" && t.startsWith(i) ? a.replacePrefix[1] + t.substring(i.length) : t;
    }, Na);
    function Na(t) {
      this["@@propmod"] = t;
    }
    function ka(t, a) {
      for (var i = S(a), l = i.length, p = !1, f = 0; f < l; ++f) {
        var v = i[f], x = a[v], A = se(t, v);
        x instanceof Rn ? (ce(t, v, x.execute(A)), p = !0) : A !== x && (ce(t, v, x), p = !0);
      }
      return p;
    }
    var Pr = (xt.prototype._trans = function(t, a, i) {
      var l = this._tx || _e.trans, p = this.name, f = Re && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(t === "readonly" ? "read" : "write", " ").concat(this.name));
      function v(E, N, M) {
        if (!M.schema[p]) throw new ve.NotFound("Table " + p + " not part of transaction");
        return a(M.idbtrans, M);
      }
      var x = Gt();
      try {
        var A = l && l.db._novip === this.db._novip ? l === _e.trans ? l._promise(t, v, i) : oe(function() {
          return l._promise(t, v, i);
        }, { trans: l, transless: _e.transless || _e }) : function E(N, M, F, T) {
          if (N.idbdb && (N._state.openComplete || _e.letThrough || N._vip)) {
            var R = N._createTransaction(M, F, N._dbSchema);
            try {
              R.create(), N._state.PR1398_maxLoop = 3;
            } catch (O) {
              return O.name === je.InvalidState && N.isOpen() && 0 < --N._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), N.close({ disableAutoOpen: !1 }), N.open().then(function() {
                return E(N, M, F, T);
              })) : Lt(O);
            }
            return R._promise(M, function(O, L) {
              return oe(function() {
                return _e.trans = R, T(O, L, R);
              });
            }).then(function(O) {
              if (M === "readwrite") try {
                R.idbtrans.commit();
              } catch {
              }
              return M === "readonly" ? O : R._completion.then(function() {
                return O;
              });
            });
          }
          if (N._state.openComplete) return Lt(new ve.DatabaseClosed(N._state.dbOpenError));
          if (!N._state.isBeingOpened) {
            if (!N._state.autoOpen) return Lt(new ve.DatabaseClosed());
            N.open().catch(C);
          }
          return N._state.dbReadyPromise.then(function() {
            return E(N, M, F, T);
          });
        }(this.db, t, [this.name], v);
        return f && (A._consoleTask = f, A = A.catch(function(E) {
          return console.trace(E), Lt(E);
        })), A;
      } finally {
        x && an();
      }
    }, xt.prototype.get = function(t, a) {
      var i = this;
      return t && t.constructor === Object ? this.where(t).first(a) : t == null ? Lt(new ve.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(l) {
        return i.core.get({ trans: l, key: t }).then(function(p) {
          return i.hook.reading.fire(p);
        });
      }).then(a);
    }, xt.prototype.where = function(t) {
      if (typeof t == "string") return new this.db.WhereClause(this, t);
      if (I(t)) return new this.db.WhereClause(this, "[".concat(t.join("+"), "]"));
      var a = S(t);
      if (a.length === 1) return this.where(a[0]).equals(t[a[0]]);
      var i = this.schema.indexes.concat(this.schema.primKey).filter(function(x) {
        if (x.compound && a.every(function(E) {
          return 0 <= x.keyPath.indexOf(E);
        })) {
          for (var A = 0; A < a.length; ++A) if (a.indexOf(x.keyPath[A]) === -1) return !1;
          return !0;
        }
        return !1;
      }).sort(function(x, A) {
        return x.keyPath.length - A.keyPath.length;
      })[0];
      if (i && this.db._maxKey !== Hn) {
        var f = i.keyPath.slice(0, a.length);
        return this.where(f).equals(f.map(function(A) {
          return t[A];
        }));
      }
      !i && Re && console.warn("The query ".concat(JSON.stringify(t), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(a.join("+"), "]"));
      var l = this.schema.idxByName;
      function p(x, A) {
        return Pe(x, A) === 0;
      }
      var v = a.reduce(function(M, A) {
        var E = M[0], N = M[1], M = l[A], F = t[A];
        return [E || M, E || !M ? pe(N, M && M.multi ? function(T) {
          return T = se(T, A), I(T) && T.some(function(R) {
            return p(F, R);
          });
        } : function(T) {
          return p(F, se(T, A));
        }) : N];
      }, [null, null]), f = v[0], v = v[1];
      return f ? this.where(f.name).equals(t[f.keyPath]).filter(v) : i ? this.filter(v) : this.where(a).equals("");
    }, xt.prototype.filter = function(t) {
      return this.toCollection().and(t);
    }, xt.prototype.count = function(t) {
      return this.toCollection().count(t);
    }, xt.prototype.offset = function(t) {
      return this.toCollection().offset(t);
    }, xt.prototype.limit = function(t) {
      return this.toCollection().limit(t);
    }, xt.prototype.each = function(t) {
      return this.toCollection().each(t);
    }, xt.prototype.toArray = function(t) {
      return this.toCollection().toArray(t);
    }, xt.prototype.toCollection = function() {
      return new this.db.Collection(new this.db.WhereClause(this));
    }, xt.prototype.orderBy = function(t) {
      return new this.db.Collection(new this.db.WhereClause(this, I(t) ? "[".concat(t.join("+"), "]") : t));
    }, xt.prototype.reverse = function() {
      return this.toCollection().reverse();
    }, xt.prototype.mapToClass = function(t) {
      var a, i = this.db, l = this.name;
      function p() {
        return a !== null && a.apply(this, arguments) || this;
      }
      (this.schema.mappedClass = t).prototype instanceof Ue && (function(A, E) {
        if (typeof E != "function" && E !== null) throw new TypeError("Class extends value " + String(E) + " is not a constructor or null");
        function N() {
          this.constructor = A;
        }
        c(A, E), A.prototype = E === null ? Object.create(E) : (N.prototype = E.prototype, new N());
      }(p, a = t), Object.defineProperty(p.prototype, "db", { get: function() {
        return i;
      }, enumerable: !1, configurable: !0 }), p.prototype.table = function() {
        return l;
      }, t = p);
      for (var f = /* @__PURE__ */ new Set(), v = t.prototype; v; v = U(v)) Object.getOwnPropertyNames(v).forEach(function(A) {
        return f.add(A);
      });
      function x(A) {
        if (!A) return A;
        var E, N = Object.create(t.prototype);
        for (E in A) if (!f.has(E)) try {
          N[E] = A[E];
        } catch {
        }
        return N;
      }
      return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = x, this.hook("reading", x), t;
    }, xt.prototype.defineClass = function() {
      return this.mapToClass(function(t) {
        _(this, t);
      });
    }, xt.prototype.add = function(t, a) {
      var i = this, l = this.schema.primKey, p = l.auto, f = l.keyPath, v = t;
      return f && p && (v = na(f)(t)), this._trans("readwrite", function(x) {
        return i.core.mutate({ trans: x, type: "add", keys: a != null ? [a] : null, values: [v] });
      }).then(function(x) {
        return x.numFailures ? P.reject(x.failures[0]) : x.lastResult;
      }).then(function(x) {
        if (f) try {
          ce(t, f, x);
        } catch {
        }
        return x;
      });
    }, xt.prototype.upsert = function(t, a) {
      var i = this, l = this.schema.primKey.keyPath;
      return this._trans("readwrite", function(p) {
        return i.core.get({ trans: p, key: t }).then(function(f) {
          var v = f ?? {};
          return ka(v, a), l && ce(v, l, t), i.core.mutate({ trans: p, type: "put", values: [v], keys: [t], upsert: !0, updates: { keys: [t], changeSpecs: [a] } }).then(function(x) {
            return x.numFailures ? P.reject(x.failures[0]) : !!f;
          });
        });
      });
    }, xt.prototype.update = function(t, a) {
      return typeof t != "object" || I(t) ? this.where(":id").equals(t).modify(a) : (t = se(t, this.schema.primKey.keyPath), t === void 0 ? Lt(new ve.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(t).modify(a));
    }, xt.prototype.put = function(t, a) {
      var i = this, l = this.schema.primKey, p = l.auto, f = l.keyPath, v = t;
      return f && p && (v = na(f)(t)), this._trans("readwrite", function(x) {
        return i.core.mutate({ trans: x, type: "put", values: [v], keys: a != null ? [a] : null });
      }).then(function(x) {
        return x.numFailures ? P.reject(x.failures[0]) : x.lastResult;
      }).then(function(x) {
        if (f) try {
          ce(t, f, x);
        } catch {
        }
        return x;
      });
    }, xt.prototype.delete = function(t) {
      var a = this;
      return this._trans("readwrite", function(i) {
        return a.core.mutate({ trans: i, type: "delete", keys: [t] }).then(function(l) {
          return aa(a, [t], l);
        }).then(function(l) {
          return l.numFailures ? P.reject(l.failures[0]) : void 0;
        });
      });
    }, xt.prototype.clear = function() {
      var t = this;
      return this._trans("readwrite", function(a) {
        return t.core.mutate({ trans: a, type: "deleteRange", range: Ba }).then(function(i) {
          return aa(t, null, i);
        });
      }).then(function(a) {
        return a.numFailures ? P.reject(a.failures[0]) : void 0;
      });
    }, xt.prototype.bulkGet = function(t) {
      var a = this;
      return this._trans("readonly", function(i) {
        return a.core.getMany({ keys: t, trans: i }).then(function(l) {
          return l.map(function(p) {
            return a.hook.reading.fire(p);
          });
        });
      });
    }, xt.prototype.bulkAdd = function(t, a, i) {
      var l = this, p = Array.isArray(a) ? a : void 0, f = (i = i || (p ? void 0 : a)) ? i.allKeys : void 0;
      return this._trans("readwrite", function(v) {
        var E = l.schema.primKey, x = E.auto, E = E.keyPath;
        if (E && p) throw new ve.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
        if (p && p.length !== t.length) throw new ve.InvalidArgument("Arguments objects and keys must have the same length");
        var A = t.length, E = E && x ? t.map(na(E)) : t;
        return l.core.mutate({ trans: v, type: "add", keys: p, values: E, wantResults: f }).then(function(R) {
          var M = R.numFailures, F = R.results, T = R.lastResult, R = R.failures;
          if (M === 0) return f ? F : T;
          throw new Xe("".concat(l.name, ".bulkAdd(): ").concat(M, " of ").concat(A, " operations failed"), R);
        });
      });
    }, xt.prototype.bulkPut = function(t, a, i) {
      var l = this, p = Array.isArray(a) ? a : void 0, f = (i = i || (p ? void 0 : a)) ? i.allKeys : void 0;
      return this._trans("readwrite", function(v) {
        var E = l.schema.primKey, x = E.auto, E = E.keyPath;
        if (E && p) throw new ve.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
        if (p && p.length !== t.length) throw new ve.InvalidArgument("Arguments objects and keys must have the same length");
        var A = t.length, E = E && x ? t.map(na(E)) : t;
        return l.core.mutate({ trans: v, type: "put", keys: p, values: E, wantResults: f }).then(function(R) {
          var M = R.numFailures, F = R.results, T = R.lastResult, R = R.failures;
          if (M === 0) return f ? F : T;
          throw new Xe("".concat(l.name, ".bulkPut(): ").concat(M, " of ").concat(A, " operations failed"), R);
        });
      });
    }, xt.prototype.bulkUpdate = function(t) {
      var a = this, i = this.core, l = t.map(function(v) {
        return v.key;
      }), p = t.map(function(v) {
        return v.changes;
      }), f = [];
      return this._trans("readwrite", function(v) {
        return i.getMany({ trans: v, keys: l, cache: "clone" }).then(function(x) {
          var A = [], E = [];
          t.forEach(function(M, F) {
            var T = M.key, R = M.changes, O = x[F];
            if (O) {
              for (var L = 0, K = Object.keys(R); L < K.length; L++) {
                var $ = K[L], Z = R[$];
                if ($ === a.schema.primKey.keyPath) {
                  if (Pe(Z, T) !== 0) throw new ve.Constraint("Cannot update primary key in bulkUpdate()");
                } else ce(O, $, Z);
              }
              f.push(F), A.push(T), E.push(O);
            }
          });
          var N = A.length;
          return i.mutate({ trans: v, type: "put", keys: A, values: E, updates: { keys: l, changeSpecs: p } }).then(function(M) {
            var F = M.numFailures, T = M.failures;
            if (F === 0) return N;
            for (var R = 0, O = Object.keys(T); R < O.length; R++) {
              var L, K = O[R], $ = f[Number(K)];
              $ != null && (L = T[K], delete T[K], T[$] = L);
            }
            throw new Xe("".concat(a.name, ".bulkUpdate(): ").concat(F, " of ").concat(N, " operations failed"), T);
          });
        });
      });
    }, xt.prototype.bulkDelete = function(t) {
      var a = this, i = t.length;
      return this._trans("readwrite", function(l) {
        return a.core.mutate({ trans: l, type: "delete", keys: t }).then(function(p) {
          return aa(a, t, p);
        });
      }).then(function(v) {
        var p = v.numFailures, f = v.lastResult, v = v.failures;
        if (p === 0) return f;
        throw new Xe("".concat(a.name, ".bulkDelete(): ").concat(p, " of ").concat(i, " operations failed"), v);
      });
    }, xt);
    function xt() {
    }
    function ra(t) {
      function a(v, x) {
        if (x) {
          for (var A = arguments.length, E = new Array(A - 1); --A; ) E[A - 1] = arguments[A];
          return i[v].subscribe.apply(null, E), t;
        }
        if (typeof v == "string") return i[v];
      }
      var i = {};
      a.addEventType = f;
      for (var l = 1, p = arguments.length; l < p; ++l) f(arguments[l]);
      return a;
      function f(v, x, A) {
        if (typeof v != "object") {
          var E;
          x = x || yt;
          var N = { subscribers: [], fire: A = A || C, subscribe: function(M) {
            N.subscribers.indexOf(M) === -1 && (N.subscribers.push(M), N.fire = x(N.fire, M));
          }, unsubscribe: function(M) {
            N.subscribers = N.subscribers.filter(function(F) {
              return F !== M;
            }), N.fire = N.subscribers.reduce(x, A);
          } };
          return i[v] = a[v] = N;
        }
        S(E = v).forEach(function(M) {
          var F = E[M];
          if (I(F)) f(M, E[M][0], E[M][1]);
          else {
            if (F !== "asap") throw new ve.InvalidArgument("Invalid event config");
            var T = f(M, H, function() {
              for (var R = arguments.length, O = new Array(R); R--; ) O[R] = arguments[R];
              T.subscribers.forEach(function(L) {
                Ie(function() {
                  L.apply(null, O);
                });
              });
            });
          }
        });
      }
    }
    function oa(t, a) {
      return ge(a).from({ prototype: t }), a;
    }
    function ia(t, a) {
      return !(t.filter || t.algorithm || t.or) && (a ? t.justLimit : !t.replayFilter);
    }
    function xr(t, a) {
      t.filter = pe(t.filter, a);
    }
    function La(t, a, i) {
      var l = t.replayFilter;
      t.replayFilter = l ? function() {
        return pe(l(), a());
      } : a, t.justLimit = i && !l;
    }
    function Dn(t, a) {
      if (t.isPrimKey) return a.primaryKey;
      var i = a.getIndexByKeyPath(t.index);
      if (!i) throw new ve.Schema("KeyPath " + t.index + " on object store " + a.name + " is not indexed");
      return i;
    }
    function Fa(t, a, i) {
      var l = Dn(t, a.schema);
      return a.openCursor({ trans: i, values: !t.keysOnly, reverse: t.dir === "prev", unique: !!t.unique, query: { index: l, range: t.range } });
    }
    function sa(t, a, i, l) {
      var p = t.replayFilter ? pe(t.filter, t.replayFilter()) : t.filter;
      if (t.or) {
        var f = {}, v = function(x, A, E) {
          var N, M;
          p && !p(A, E, function(F) {
            return A.stop(F);
          }, function(F) {
            return A.fail(F);
          }) || ((M = "" + (N = A.primaryKey)) == "[object ArrayBuffer]" && (M = "" + new Uint8Array(N)), X(f, M) || (f[M] = !0, a(x, A, E)));
        };
        return Promise.all([t.or._iterate(v, i), Sa(Fa(t, l, i), t.algorithm, v, !t.keysOnly && t.valueMapper)]);
      }
      return Sa(Fa(t, l, i), pe(t.algorithm, p), a, !t.keysOnly && t.valueMapper);
    }
    function Sa(t, a, i, l) {
      var p = kt(l ? function(f, v, x) {
        return i(l(f), v, x);
      } : i);
      return t.then(function(f) {
        if (f) return f.start(function() {
          var v = function() {
            return f.continue();
          };
          a && !a(f, function(x) {
            return v = x;
          }, function(x) {
            f.stop(x), v = C;
          }, function(x) {
            f.fail(x), v = C;
          }) || p(f.value, f, function(x) {
            return v = x;
          }), v();
        });
      });
    }
    var Va = (ft.prototype._read = function(t, a) {
      var i = this._ctx;
      return i.error ? i.table._trans(null, Lt.bind(null, i.error)) : i.table._trans("readonly", t).then(a);
    }, ft.prototype._write = function(t) {
      var a = this._ctx;
      return a.error ? a.table._trans(null, Lt.bind(null, a.error)) : a.table._trans("readwrite", t, "locked");
    }, ft.prototype._addAlgorithm = function(t) {
      var a = this._ctx;
      a.algorithm = pe(a.algorithm, t);
    }, ft.prototype._iterate = function(t, a) {
      return sa(this._ctx, t, a, this._ctx.table.core);
    }, ft.prototype.clone = function(t) {
      var a = Object.create(this.constructor.prototype), i = Object.create(this._ctx);
      return t && _(i, t), a._ctx = i, a;
    }, ft.prototype.raw = function() {
      return this._ctx.valueMapper = null, this;
    }, ft.prototype.each = function(t) {
      var a = this._ctx;
      return this._read(function(i) {
        return sa(a, t, i, a.table.core);
      });
    }, ft.prototype.count = function(t) {
      var a = this;
      return this._read(function(i) {
        var l = a._ctx, p = l.table.core;
        if (ia(l, !0)) return p.count({ trans: i, query: { index: Dn(l, p.schema), range: l.range } }).then(function(v) {
          return Math.min(v, l.limit);
        });
        var f = 0;
        return sa(l, function() {
          return ++f, !1;
        }, i, p).then(function() {
          return f;
        });
      }).then(t);
    }, ft.prototype.sortBy = function(t, a) {
      var i = t.split(".").reverse(), l = i[0], p = i.length - 1;
      function f(A, E) {
        return E ? f(A[i[E]], E - 1) : A[l];
      }
      var v = this._ctx.dir === "next" ? 1 : -1;
      function x(A, E) {
        return Pe(f(A, p), f(E, p)) * v;
      }
      return this.toArray(function(A) {
        return A.sort(x);
      }).then(a);
    }, ft.prototype.toArray = function(t) {
      var a = this;
      return this._read(function(i) {
        var l = a._ctx;
        if (l.dir === "next" && ia(l, !0) && 0 < l.limit) {
          var p = l.valueMapper, f = Dn(l, l.table.core.schema);
          return l.table.core.query({ trans: i, limit: l.limit, values: !0, query: { index: f, range: l.range } }).then(function(x) {
            return x = x.result, p ? x.map(p) : x;
          });
        }
        var v = [];
        return sa(l, function(x) {
          return v.push(x);
        }, i, l.table.core).then(function() {
          return v;
        });
      }, t);
    }, ft.prototype.offset = function(t) {
      var a = this._ctx;
      return t <= 0 || (a.offset += t, ia(a) ? La(a, function() {
        var i = t;
        return function(l, p) {
          return i === 0 || (i === 1 ? --i : p(function() {
            l.advance(i), i = 0;
          }), !1);
        };
      }) : La(a, function() {
        var i = t;
        return function() {
          return --i < 0;
        };
      })), this;
    }, ft.prototype.limit = function(t) {
      return this._ctx.limit = Math.min(this._ctx.limit, t), La(this._ctx, function() {
        var a = t;
        return function(i, l, p) {
          return --a <= 0 && l(p), 0 <= a;
        };
      }, !0), this;
    }, ft.prototype.until = function(t, a) {
      return xr(this._ctx, function(i, l, p) {
        return !t(i.value) || (l(p), a);
      }), this;
    }, ft.prototype.first = function(t) {
      return this.limit(1).toArray(function(a) {
        return a[0];
      }).then(t);
    }, ft.prototype.last = function(t) {
      return this.reverse().first(t);
    }, ft.prototype.filter = function(t) {
      var a;
      return xr(this._ctx, function(i) {
        return t(i.value);
      }), (a = this._ctx).isMatch = pe(a.isMatch, t), this;
    }, ft.prototype.and = function(t) {
      return this.filter(t);
    }, ft.prototype.or = function(t) {
      return new this.db.WhereClause(this._ctx.table, t, this);
    }, ft.prototype.reverse = function() {
      return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
    }, ft.prototype.desc = function() {
      return this.reverse();
    }, ft.prototype.eachKey = function(t) {
      var a = this._ctx;
      return a.keysOnly = !a.isMatch, this.each(function(i, l) {
        t(l.key, l);
      });
    }, ft.prototype.eachUniqueKey = function(t) {
      return this._ctx.unique = "unique", this.eachKey(t);
    }, ft.prototype.eachPrimaryKey = function(t) {
      var a = this._ctx;
      return a.keysOnly = !a.isMatch, this.each(function(i, l) {
        t(l.primaryKey, l);
      });
    }, ft.prototype.keys = function(t) {
      var a = this._ctx;
      a.keysOnly = !a.isMatch;
      var i = [];
      return this.each(function(l, p) {
        i.push(p.key);
      }).then(function() {
        return i;
      }).then(t);
    }, ft.prototype.primaryKeys = function(t) {
      var a = this._ctx;
      if (a.dir === "next" && ia(a, !0) && 0 < a.limit) return this._read(function(l) {
        var p = Dn(a, a.table.core.schema);
        return a.table.core.query({ trans: l, values: !1, limit: a.limit, query: { index: p, range: a.range } });
      }).then(function(l) {
        return l.result;
      }).then(t);
      a.keysOnly = !a.isMatch;
      var i = [];
      return this.each(function(l, p) {
        i.push(p.primaryKey);
      }).then(function() {
        return i;
      }).then(t);
    }, ft.prototype.uniqueKeys = function(t) {
      return this._ctx.unique = "unique", this.keys(t);
    }, ft.prototype.firstKey = function(t) {
      return this.limit(1).keys(function(a) {
        return a[0];
      }).then(t);
    }, ft.prototype.lastKey = function(t) {
      return this.reverse().firstKey(t);
    }, ft.prototype.distinct = function() {
      var t = this._ctx, t = t.index && t.table.schema.idxByName[t.index];
      if (!t || !t.multi) return this;
      var a = {};
      return xr(this._ctx, function(p) {
        var l = p.primaryKey.toString(), p = X(a, l);
        return a[l] = !0, !p;
      }), this;
    }, ft.prototype.modify = function(t) {
      var a = this, i = this._ctx;
      return this._write(function(l) {
        var p = typeof t == "function" ? t : function(O) {
          return ka(O, t);
        }, f = i.table.core, E = f.schema.primaryKey, v = E.outbound, x = E.extractKey, A = 200, E = a.db._options.modifyChunkSize;
        E && (A = typeof E == "object" ? E[f.name] || E["*"] || 200 : E);
        function N(O, $) {
          var K = $.failures, $ = $.numFailures;
          F += O - $;
          for (var Z = 0, ee = S(K); Z < ee.length; Z++) {
            var he = ee[Z];
            M.push(K[he]);
          }
        }
        var M = [], F = 0, T = [], R = t === Ua;
        return a.clone().primaryKeys().then(function(O) {
          function L($) {
            var Z = Math.min(A, O.length - $), ee = O.slice($, $ + Z);
            return (R ? Promise.resolve([]) : f.getMany({ trans: l, keys: ee, cache: "immutable" })).then(function(he) {
              var be = [], fe = [], me = v ? [] : null, ke = R ? ee : [];
              if (!R) for (var ye = 0; ye < Z; ++ye) {
                var Ee = he[ye], te = { value: Fe(Ee), primKey: O[$ + ye] };
                p.call(te, te.value, te) !== !1 && (te.value == null ? ke.push(O[$ + ye]) : v || Pe(x(Ee), x(te.value)) === 0 ? (fe.push(te.value), v && me.push(O[$ + ye])) : (ke.push(O[$ + ye]), be.push(te.value)));
              }
              return Promise.resolve(0 < be.length && f.mutate({ trans: l, type: "add", values: be }).then(function(nt) {
                for (var ot in nt.failures) ke.splice(parseInt(ot), 1);
                N(be.length, nt);
              })).then(function() {
                return (0 < fe.length || K && typeof t == "object") && f.mutate({ trans: l, type: "put", keys: me, values: fe, criteria: K, changeSpec: typeof t != "function" && t, isAdditionalChunk: 0 < $ }).then(function(nt) {
                  return N(fe.length, nt);
                });
              }).then(function() {
                return (0 < ke.length || K && R) && f.mutate({ trans: l, type: "delete", keys: ke, criteria: K, isAdditionalChunk: 0 < $ }).then(function(nt) {
                  return aa(i.table, ke, nt);
                }).then(function(nt) {
                  return N(ke.length, nt);
                });
              }).then(function() {
                return O.length > $ + Z && L($ + A);
              });
            });
          }
          var K = ia(i) && i.limit === 1 / 0 && (typeof t != "function" || R) && { index: i.index, range: i.range };
          return L(0).then(function() {
            if (0 < M.length) throw new Ye("Error modifying one or more objects", M, F, T);
            return O.length;
          });
        });
      });
    }, ft.prototype.delete = function() {
      var t = this._ctx, a = t.range;
      return !ia(t) || t.table.schema.yProps || !t.isPrimKey && a.type !== 3 ? this.modify(Ua) : this._write(function(i) {
        var l = t.table.core.schema.primaryKey, p = a;
        return t.table.core.count({ trans: i, query: { index: l, range: p } }).then(function(f) {
          return t.table.core.mutate({ trans: i, type: "deleteRange", range: p }).then(function(A) {
            var x = A.failures, A = A.numFailures;
            if (A) throw new Ye("Could not delete some values", Object.keys(x).map(function(E) {
              return x[E];
            }), f - A);
            return f - A;
          });
        });
      });
    }, ft);
    function ft() {
    }
    var Ua = function(t, a) {
      return a.value = null;
    };
    function en(t, a) {
      return t < a ? -1 : t === a ? 0 : 1;
    }
    function Pa(t, a) {
      return a < t ? -1 : t === a ? 0 : 1;
    }
    function rn(t, a, i) {
      return t = t instanceof fn ? new t.Collection(t) : t, t._ctx.error = new (i || TypeError)(a), t;
    }
    function zn(t) {
      return new t.Collection(t, function() {
        return In("");
      }).limit(0);
    }
    function ca(t, a, i, l) {
      var p, f, v, x, A, E, N, M = i.length;
      if (!i.every(function(R) {
        return typeof R == "string";
      })) return rn(t, Tn);
      function F(R) {
        p = R === "next" ? function(L) {
          return L.toUpperCase();
        } : function(L) {
          return L.toLowerCase();
        }, f = R === "next" ? function(L) {
          return L.toLowerCase();
        } : function(L) {
          return L.toUpperCase();
        }, v = R === "next" ? en : Pa;
        var O = i.map(function(L) {
          return { lower: f(L), upper: p(L) };
        }).sort(function(L, K) {
          return v(L.lower, K.lower);
        });
        x = O.map(function(L) {
          return L.upper;
        }), A = O.map(function(L) {
          return L.lower;
        }), N = (E = R) === "next" ? "" : l;
      }
      F("next"), t = new t.Collection(t, function() {
        return un(x[0], A[M - 1] + l);
      }), t._ondirectionchange = function(R) {
        F(R);
      };
      var T = 0;
      return t._addAlgorithm(function(R, O, L) {
        var K = R.key;
        if (typeof K != "string") return !1;
        var $ = f(K);
        if (a($, A, T)) return !0;
        for (var Z = null, ee = T; ee < M; ++ee) {
          var he = function(be, fe, me, ke, ye, Ee) {
            for (var te = Math.min(be.length, ke.length), nt = -1, ot = 0; ot < te; ++ot) {
              var sn = fe[ot];
              if (sn !== ke[ot]) return ye(be[ot], me[ot]) < 0 ? be.substr(0, ot) + me[ot] + me.substr(ot + 1) : ye(be[ot], ke[ot]) < 0 ? be.substr(0, ot) + ke[ot] + me.substr(ot + 1) : 0 <= nt ? be.substr(0, nt) + fe[nt] + me.substr(nt + 1) : null;
              ye(be[ot], sn) < 0 && (nt = ot);
            }
            return te < ke.length && Ee === "next" ? be + me.substr(be.length) : te < be.length && Ee === "prev" ? be.substr(0, me.length) : nt < 0 ? null : be.substr(0, nt) + ke[nt] + me.substr(nt + 1);
          }(K, $, x[ee], A[ee], v, E);
          he === null && Z === null ? T = ee + 1 : (Z === null || 0 < v(Z, he)) && (Z = he);
        }
        return O(Z !== null ? function() {
          R.continue(Z + N);
        } : L), !1;
      }), t;
    }
    function un(t, a, i, l) {
      return { type: 2, lower: t, upper: a, lowerOpen: i, upperOpen: l };
    }
    function In(t) {
      return { type: 1, lower: t, upper: t };
    }
    var fn = (Object.defineProperty(It.prototype, "Collection", { get: function() {
      return this._ctx.table.db.Collection;
    }, enumerable: !1, configurable: !0 }), It.prototype.between = function(t, a, i, l) {
      i = i !== !1, l = l === !0;
      try {
        return 0 < this._cmp(t, a) || this._cmp(t, a) === 0 && (i || l) && (!i || !l) ? zn(this) : new this.Collection(this, function() {
          return un(t, a, !i, !l);
        });
      } catch {
        return rn(this, Mn);
      }
    }, It.prototype.equals = function(t) {
      return t == null ? rn(this, Mn) : new this.Collection(this, function() {
        return In(t);
      });
    }, It.prototype.above = function(t) {
      return t == null ? rn(this, Mn) : new this.Collection(this, function() {
        return un(t, void 0, !0);
      });
    }, It.prototype.aboveOrEqual = function(t) {
      return t == null ? rn(this, Mn) : new this.Collection(this, function() {
        return un(t, void 0, !1);
      });
    }, It.prototype.below = function(t) {
      return t == null ? rn(this, Mn) : new this.Collection(this, function() {
        return un(void 0, t, !1, !0);
      });
    }, It.prototype.belowOrEqual = function(t) {
      return t == null ? rn(this, Mn) : new this.Collection(this, function() {
        return un(void 0, t);
      });
    }, It.prototype.startsWith = function(t) {
      return typeof t != "string" ? rn(this, Tn) : this.between(t, t + Hn, !0, !0);
    }, It.prototype.startsWithIgnoreCase = function(t) {
      return t === "" ? this.startsWith(t) : ca(this, function(a, i) {
        return a.indexOf(i[0]) === 0;
      }, [t], Hn);
    }, It.prototype.equalsIgnoreCase = function(t) {
      return ca(this, function(a, i) {
        return a === i[0];
      }, [t], "");
    }, It.prototype.anyOfIgnoreCase = function() {
      var t = Ge.apply(ht, arguments);
      return t.length === 0 ? zn(this) : ca(this, function(a, i) {
        return i.indexOf(a) !== -1;
      }, t, "");
    }, It.prototype.startsWithAnyOfIgnoreCase = function() {
      var t = Ge.apply(ht, arguments);
      return t.length === 0 ? zn(this) : ca(this, function(a, i) {
        return i.some(function(l) {
          return a.indexOf(l) === 0;
        });
      }, t, Hn);
    }, It.prototype.anyOf = function() {
      var t = this, a = Ge.apply(ht, arguments), i = this._cmp;
      try {
        a.sort(i);
      } catch {
        return rn(this, Mn);
      }
      if (a.length === 0) return zn(this);
      var l = new this.Collection(this, function() {
        return un(a[0], a[a.length - 1]);
      });
      l._ondirectionchange = function(f) {
        i = f === "next" ? t._ascending : t._descending, a.sort(i);
      };
      var p = 0;
      return l._addAlgorithm(function(f, v, x) {
        for (var A = f.key; 0 < i(A, a[p]); ) if (++p === a.length) return v(x), !1;
        return i(A, a[p]) === 0 || (v(function() {
          f.continue(a[p]);
        }), !1);
      }), l;
    }, It.prototype.notEqual = function(t) {
      return this.inAnyRange([[-1 / 0, t], [t, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
    }, It.prototype.noneOf = function() {
      var t = Ge.apply(ht, arguments);
      if (t.length === 0) return new this.Collection(this);
      try {
        t.sort(this._ascending);
      } catch {
        return rn(this, Mn);
      }
      var a = t.reduce(function(i, l) {
        return i ? i.concat([[i[i.length - 1][1], l]]) : [[-1 / 0, l]];
      }, null);
      return a.push([t[t.length - 1], this.db._maxKey]), this.inAnyRange(a, { includeLowers: !1, includeUppers: !1 });
    }, It.prototype.inAnyRange = function(K, a) {
      var i = this, l = this._cmp, p = this._ascending, f = this._descending, v = this._min, x = this._max;
      if (K.length === 0) return zn(this);
      if (!K.every(function($) {
        return $[0] !== void 0 && $[1] !== void 0 && p($[0], $[1]) <= 0;
      })) return rn(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", ve.InvalidArgument);
      var A = !a || a.includeLowers !== !1, E = a && a.includeUppers === !0, N, M = p;
      function F($, Z) {
        return M($[0], Z[0]);
      }
      try {
        (N = K.reduce(function($, Z) {
          for (var ee = 0, he = $.length; ee < he; ++ee) {
            var be = $[ee];
            if (l(Z[0], be[1]) < 0 && 0 < l(Z[1], be[0])) {
              be[0] = v(be[0], Z[0]), be[1] = x(be[1], Z[1]);
              break;
            }
          }
          return ee === he && $.push(Z), $;
        }, [])).sort(F);
      } catch {
        return rn(this, Mn);
      }
      var T = 0, R = E ? function($) {
        return 0 < p($, N[T][1]);
      } : function($) {
        return 0 <= p($, N[T][1]);
      }, O = A ? function($) {
        return 0 < f($, N[T][0]);
      } : function($) {
        return 0 <= f($, N[T][0]);
      }, L = R, K = new this.Collection(this, function() {
        return un(N[0][0], N[N.length - 1][1], !A, !E);
      });
      return K._ondirectionchange = function($) {
        M = $ === "next" ? (L = R, p) : (L = O, f), N.sort(F);
      }, K._addAlgorithm(function($, Z, ee) {
        for (var he, be = $.key; L(be); ) if (++T === N.length) return Z(ee), !1;
        return !R(he = be) && !O(he) || (i._cmp(be, N[T][1]) === 0 || i._cmp(be, N[T][0]) === 0 || Z(function() {
          M === p ? $.continue(N[T][0]) : $.continue(N[T][1]);
        }), !1);
      }), K;
    }, It.prototype.startsWithAnyOf = function() {
      var t = Ge.apply(ht, arguments);
      return t.every(function(a) {
        return typeof a == "string";
      }) ? t.length === 0 ? zn(this) : this.inAnyRange(t.map(function(a) {
        return [a, a + Hn];
      })) : rn(this, "startsWithAnyOf() only works with strings");
    }, It);
    function It() {
    }
    function on(t) {
      return kt(function(a) {
        return hn(a), t(a.target.error), !1;
      });
    }
    function hn(t) {
      t.stopPropagation && t.stopPropagation(), t.preventDefault && t.preventDefault();
    }
    var Vt = "storagemutated", Sn = "x-storagemutated-1", On = ra(null, Vt), Tt = (wn.prototype._lock = function() {
      return ne(!_e.global), ++this._reculock, this._reculock !== 1 || _e.global || (_e.lockOwnerFor = this), this;
    }, wn.prototype._unlock = function() {
      if (ne(!_e.global), --this._reculock == 0) for (_e.global || (_e.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
        var t = this._blockedFuncs.shift();
        try {
          $n(t[1], t[0]);
        } catch {
        }
      }
      return this;
    }, wn.prototype._locked = function() {
      return this._reculock && _e.lockOwnerFor !== this;
    }, wn.prototype.create = function(t) {
      var a = this;
      if (!this.mode) return this;
      var i = this.db.idbdb, l = this.db._state.dbOpenError;
      if (ne(!this.idbtrans), !t && !i) switch (l && l.name) {
        case "DatabaseClosedError":
          throw new ve.DatabaseClosed(l);
        case "MissingAPIError":
          throw new ve.MissingAPI(l.message, l);
        default:
          throw new ve.OpenFailed(l);
      }
      if (!this.active) throw new ve.TransactionInactive();
      return ne(this._completion._state === null), (t = this.idbtrans = t || (this.db.core || i).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = kt(function(p) {
        hn(p), a._reject(t.error);
      }), t.onabort = kt(function(p) {
        hn(p), a.active && a._reject(new ve.Abort(t.error)), a.active = !1, a.on("abort").fire(p);
      }), t.oncomplete = kt(function() {
        a.active = !1, a._resolve(), "mutatedParts" in t && On.storagemutated.fire(t.mutatedParts);
      }), this;
    }, wn.prototype._promise = function(t, a, i) {
      var l = this;
      if (t === "readwrite" && this.mode !== "readwrite") return Lt(new ve.ReadOnly("Transaction is readonly"));
      if (!this.active) return Lt(new ve.TransactionInactive());
      if (this._locked()) return new P(function(f, v) {
        l._blockedFuncs.push([function() {
          l._promise(t, a, i).then(f, v);
        }, _e]);
      });
      if (i) return oe(function() {
        var f = new P(function(v, x) {
          l._lock();
          var A = a(v, x, l);
          A && A.then && A.then(v, x);
        });
        return f.finally(function() {
          return l._unlock();
        }), f._lib = !0, f;
      });
      var p = new P(function(f, v) {
        var x = a(f, v, l);
        x && x.then && x.then(f, v);
      });
      return p._lib = !0, p;
    }, wn.prototype._root = function() {
      return this.parent ? this.parent._root() : this;
    }, wn.prototype.waitFor = function(t) {
      var a, i = this._root(), l = P.resolve(t);
      i._waitingFor ? i._waitingFor = i._waitingFor.then(function() {
        return l;
      }) : (i._waitingFor = l, i._waitingQueue = [], a = i.idbtrans.objectStore(i.storeNames[0]), function f() {
        for (++i._spinCount; i._waitingQueue.length; ) i._waitingQueue.shift()();
        i._waitingFor && (a.get(-1 / 0).onsuccess = f);
      }());
      var p = i._waitingFor;
      return new P(function(f, v) {
        l.then(function(x) {
          return i._waitingQueue.push(kt(f.bind(null, x)));
        }, function(x) {
          return i._waitingQueue.push(kt(v.bind(null, x)));
        }).finally(function() {
          i._waitingFor === p && (i._waitingFor = null);
        });
      });
    }, wn.prototype.abort = function() {
      this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new ve.Abort()));
    }, wn.prototype.table = function(t) {
      var a = this._memoizedTables || (this._memoizedTables = {});
      if (X(a, t)) return a[t];
      var i = this.schema[t];
      if (!i) throw new ve.NotFound("Table " + t + " not part of transaction");
      return i = new this.db.Table(t, i, this), i.core = this.db.core.table(t), a[t] = i;
    }, wn);
    function wn() {
    }
    function xa(t, a, i, l, p, f, v, x) {
      return { name: t, keyPath: a, unique: i, multi: l, auto: p, compound: f, src: (i && !v ? "&" : "") + (l ? "*" : "") + (p ? "++" : "") + qr(a), type: x };
    }
    function qr(t) {
      return typeof t == "string" ? t : t ? "[" + [].join.call(t, "+") + "]" : "";
    }
    function Wn(t, a, i) {
      return { name: t, primKey: a, indexes: i, mappedClass: null, idxByName: (l = function(p) {
        return [p.name, p];
      }, i.reduce(function(p, f, v) {
        return v = l(f, v), v && (p[v[0]] = v[1]), p;
      }, {})) };
      var l;
    }
    var Bn = function(t) {
      try {
        return t.only([[]]), Bn = function() {
          return [[]];
        }, [[]];
      } catch {
        return Bn = function() {
          return Hn;
        }, Hn;
      }
    };
    function ja(t) {
      return t == null ? function() {
      } : typeof t == "string" ? (a = t).split(".").length === 1 ? function(i) {
        return i[a];
      } : function(i) {
        return se(i, a);
      } : function(i) {
        return se(i, t);
      };
      var a;
    }
    function Ka(t) {
      return [].slice.call(t);
    }
    var Jr = 0;
    function ua(t) {
      return t == null ? ":id" : typeof t == "string" ? t : "[".concat(t.join("+"), "]");
    }
    function ln(t, a, A) {
      function l(L) {
        if (L.type === 3) return null;
        if (L.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
        var T = L.lower, R = L.upper, O = L.lowerOpen, L = L.upperOpen;
        return T === void 0 ? R === void 0 ? null : a.upperBound(R, !!L) : R === void 0 ? a.lowerBound(T, !!O) : a.bound(T, R, !!O, !!L);
      }
      function p(F) {
        var T, R = F.name;
        return { name: R, schema: F, mutate: function(O) {
          var L = O.trans, K = O.type, $ = O.keys, Z = O.values, ee = O.range;
          return new Promise(function(he, be) {
            he = kt(he);
            var fe = L.objectStore(R), me = fe.keyPath == null, ke = K === "put" || K === "add";
            if (!ke && K !== "delete" && K !== "deleteRange") throw new Error("Invalid operation type: " + K);
            var ye, Ee = ($ || Z || { length: 1 }).length;
            if ($ && Z && $.length !== Z.length) throw new Error("Given keys array must have same length as given values array.");
            if (Ee === 0) return he({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
            function te(Qt) {
              ++sn, hn(Qt);
            }
            var nt = [], ot = [], sn = 0;
            if (K === "deleteRange") {
              if (ee.type === 4) return he({ numFailures: sn, failures: ot, results: [], lastResult: void 0 });
              ee.type === 3 ? nt.push(ye = fe.clear()) : nt.push(ye = fe.delete(l(ee)));
            } else {
              var me = ke ? me ? [Z, $] : [Z, null] : [$, null], qe = me[0], zt = me[1];
              if (ke) for (var qt = 0; qt < Ee; ++qt) nt.push(ye = zt && zt[qt] !== void 0 ? fe[K](qe[qt], zt[qt]) : fe[K](qe[qt])), ye.onerror = te;
              else for (qt = 0; qt < Ee; ++qt) nt.push(ye = fe[K](qe[qt])), ye.onerror = te;
            }
            function Ta(Qt) {
              Qt = Qt.target.result, nt.forEach(function(Yn, rr) {
                return Yn.error != null && (ot[rr] = Yn.error);
              }), he({ numFailures: sn, failures: ot, results: K === "delete" ? $ : nt.map(function(Yn) {
                return Yn.result;
              }), lastResult: Qt });
            }
            ye.onerror = function(Qt) {
              te(Qt), Ta(Qt);
            }, ye.onsuccess = Ta;
          });
        }, getMany: function(O) {
          var L = O.trans, K = O.keys;
          return new Promise(function($, Z) {
            $ = kt($);
            for (var ee, he = L.objectStore(R), be = K.length, fe = new Array(be), me = 0, ke = 0, ye = function(nt) {
              nt = nt.target, fe[nt._pos] = nt.result, ++ke === me && $(fe);
            }, Ee = on(Z), te = 0; te < be; ++te) K[te] != null && ((ee = he.get(K[te]))._pos = te, ee.onsuccess = ye, ee.onerror = Ee, ++me);
            me === 0 && $(fe);
          });
        }, get: function(O) {
          var L = O.trans, K = O.key;
          return new Promise(function($, Z) {
            $ = kt($);
            var ee = L.objectStore(R).get(K);
            ee.onsuccess = function(he) {
              return $(he.target.result);
            }, ee.onerror = on(Z);
          });
        }, query: (T = E, function(O) {
          return new Promise(function(L, K) {
            L = kt(L);
            var $, Z, ee, me = O.trans, he = O.values, be = O.limit, ye = O.query, fe = be === 1 / 0 ? void 0 : be, ke = ye.index, ye = ye.range, me = me.objectStore(R), ke = ke.isPrimaryKey ? me : me.index(ke.name), ye = l(ye);
            if (be === 0) return L({ result: [] });
            T ? ((fe = he ? ke.getAll(ye, fe) : ke.getAllKeys(ye, fe)).onsuccess = function(Ee) {
              return L({ result: Ee.target.result });
            }, fe.onerror = on(K)) : ($ = 0, Z = !he && "openKeyCursor" in ke ? ke.openKeyCursor(ye) : ke.openCursor(ye), ee = [], Z.onsuccess = function(Ee) {
              var te = Z.result;
              return te ? (ee.push(he ? te.value : te.primaryKey), ++$ === be ? L({ result: ee }) : void te.continue()) : L({ result: ee });
            }, Z.onerror = on(K));
          });
        }), openCursor: function(O) {
          var L = O.trans, K = O.values, $ = O.query, Z = O.reverse, ee = O.unique;
          return new Promise(function(he, be) {
            he = kt(he);
            var ke = $.index, fe = $.range, me = L.objectStore(R), me = ke.isPrimaryKey ? me : me.index(ke.name), ke = Z ? ee ? "prevunique" : "prev" : ee ? "nextunique" : "next", ye = !K && "openKeyCursor" in me ? me.openKeyCursor(l(fe), ke) : me.openCursor(l(fe), ke);
            ye.onerror = on(be), ye.onsuccess = kt(function(Ee) {
              var te, nt, ot, sn, qe = ye.result;
              qe ? (qe.___id = ++Jr, qe.done = !1, te = qe.continue.bind(qe), nt = (nt = qe.continuePrimaryKey) && nt.bind(qe), ot = qe.advance.bind(qe), sn = function() {
                throw new Error("Cursor not stopped");
              }, qe.trans = L, qe.stop = qe.continue = qe.continuePrimaryKey = qe.advance = function() {
                throw new Error("Cursor not started");
              }, qe.fail = kt(be), qe.next = function() {
                var zt = this, qt = 1;
                return this.start(function() {
                  return qt-- ? zt.continue() : zt.stop();
                }).then(function() {
                  return zt;
                });
              }, qe.start = function(zt) {
                function qt() {
                  if (ye.result) try {
                    zt();
                  } catch (Qt) {
                    qe.fail(Qt);
                  }
                  else qe.done = !0, qe.start = function() {
                    throw new Error("Cursor behind last entry");
                  }, qe.stop();
                }
                var Ta = new Promise(function(Qt, Yn) {
                  Qt = kt(Qt), ye.onerror = on(Yn), qe.fail = Yn, qe.stop = function(rr) {
                    qe.stop = qe.continue = qe.continuePrimaryKey = qe.advance = sn, Qt(rr);
                  };
                });
                return ye.onsuccess = kt(function(Qt) {
                  ye.onsuccess = qt, qt();
                }), qe.continue = te, qe.continuePrimaryKey = nt, qe.advance = ot, qt(), Ta;
              }, he(qe)) : he(null);
            }, be);
          });
        }, count: function(O) {
          var L = O.query, K = O.trans, $ = L.index, Z = L.range;
          return new Promise(function(ee, he) {
            var be = K.objectStore(R), fe = $.isPrimaryKey ? be : be.index($.name), be = l(Z), fe = be ? fe.count(be) : fe.count();
            fe.onsuccess = kt(function(me) {
              return ee(me.target.result);
            }), fe.onerror = on(he);
          });
        } };
      }
      var f, v, x, N = (v = A, x = Ka((f = t).objectStoreNames), { schema: { name: f.name, tables: x.map(function(F) {
        return v.objectStore(F);
      }).map(function(F) {
        var T = F.keyPath, L = F.autoIncrement, R = I(T), O = {}, L = { name: F.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: T == null, compound: R, keyPath: T, autoIncrement: L, unique: !0, extractKey: ja(T) }, indexes: Ka(F.indexNames).map(function(K) {
          return F.index(K);
        }).map(function(ee) {
          var $ = ee.name, Z = ee.unique, he = ee.multiEntry, ee = ee.keyPath, he = { name: $, compound: I(ee), keyPath: ee, unique: Z, multiEntry: he, extractKey: ja(ee) };
          return O[ua(ee)] = he;
        }), getIndexByKeyPath: function(K) {
          return O[ua(K)];
        } };
        return O[":id"] = L.primaryKey, T != null && (O[ua(T)] = L.primaryKey), L;
      }) }, hasGetAll: 0 < x.length && "getAll" in v.objectStore(x[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), A = N.schema, E = N.hasGetAll, N = A.tables.map(p), M = {};
      return N.forEach(function(F) {
        return M[F.name] = F;
      }), { stack: "dbcore", transaction: t.transaction.bind(t), table: function(F) {
        if (!M[F]) throw new Error("Table '".concat(F, "' not found"));
        return M[F];
      }, MIN_KEY: -1 / 0, MAX_KEY: Bn(a), schema: A };
    }
    function Cr(t, a, i, l) {
      var p = i.IDBKeyRange;
      return i.indexedDB, { dbcore: (l = ln(a, p, l), t.dbcore.reduce(function(f, v) {
        return v = v.create, d(d({}, f), v(f));
      }, l)) };
    }
    function la(t, l) {
      var i = l.db, l = Cr(t._middlewares, i, t._deps, l);
      t.core = l.dbcore, t.tables.forEach(function(p) {
        var f = p.name;
        t.core.schema.tables.some(function(v) {
          return v.name === f;
        }) && (p.core = t.core.table(f), t[f] instanceof t.Table && (t[f].core = p.core));
      });
    }
    function da(t, a, i, l) {
      i.forEach(function(p) {
        var f = l[p];
        a.forEach(function(v) {
          var x = function A(E, N) {
            return z(E, N) || (E = U(E)) && A(E, N);
          }(v, p);
          (!x || "value" in x && x.value === void 0) && (v === t.Transaction.prototype || v instanceof t.Transaction ? we(v, p, { get: function() {
            return this.table(p);
          }, set: function(A) {
            W(this, p, { value: A, writable: !0, configurable: !0, enumerable: !0 });
          } }) : v[p] = new t.Table(p, f));
        });
      });
    }
    function Nn(t, a) {
      a.forEach(function(i) {
        for (var l in i) i[l] instanceof t.Table && delete i[l];
      });
    }
    function vo(t, a) {
      return t._cfg.version - a._cfg.version;
    }
    function Yr(t, a, i, l) {
      var p = t._dbSchema;
      i.objectStoreNames.contains("$meta") && !p.$meta && (p.$meta = Wn("$meta", fa("")[0], []), t._storeNames.push("$meta"));
      var f = t._createTransaction("readwrite", t._storeNames, p);
      f.create(i), f._completion.catch(l);
      var v = f._reject.bind(f), x = _e.transless || _e;
      oe(function() {
        return _e.trans = f, _e.transless = x, a !== 0 ? (la(t, i), E = a, ((A = f).storeNames.includes("$meta") ? A.table("$meta").get("version").then(function(N) {
          return N ?? E;
        }) : P.resolve(E)).then(function(N) {
          return F = N, T = f, R = i, O = [], N = (M = t)._versions, L = M._dbSchema = pa(0, M.idbdb, R), (N = N.filter(function(K) {
            return K._cfg.version >= F;
          })).length !== 0 ? (N.forEach(function(K) {
            O.push(function() {
              var $ = L, Z = K._cfg.dbschema;
              Ga(M, $, R), Ga(M, Z, R), L = M._dbSchema = Z;
              var ee = $a($, Z);
              ee.add.forEach(function(ke) {
                Ca(R, ke[0], ke[1].primKey, ke[1].indexes);
              }), ee.change.forEach(function(ke) {
                if (ke.recreate) throw new ve.Upgrade("Not yet support for changing primary key");
                var ye = R.objectStore(ke.name);
                ke.add.forEach(function(Ee) {
                  return Ha(ye, Ee);
                }), ke.change.forEach(function(Ee) {
                  ye.deleteIndex(Ee.name), Ha(ye, Ee);
                }), ke.del.forEach(function(Ee) {
                  return ye.deleteIndex(Ee);
                });
              });
              var he = K._cfg.contentUpgrade;
              if (he && K._cfg.version > F) {
                la(M, R), T._memoizedTables = {};
                var be = dt(Z);
                ee.del.forEach(function(ke) {
                  be[ke] = $[ke];
                }), Nn(M, [M.Transaction.prototype]), da(M, [M.Transaction.prototype], S(be), be), T.schema = be;
                var fe, me = D(he);
                return me && Kn(), ee = P.follow(function() {
                  var ke;
                  (fe = he(T)) && me && (ke = xn.bind(null, null), fe.then(ke, ke));
                }), fe && typeof fe.then == "function" ? P.resolve(fe) : ee.then(function() {
                  return fe;
                });
              }
            }), O.push(function($) {
              var Z, ee, he = K._cfg.dbschema;
              Z = he, ee = $, [].slice.call(ee.db.objectStoreNames).forEach(function(be) {
                return Z[be] == null && ee.db.deleteObjectStore(be);
              }), Nn(M, [M.Transaction.prototype]), da(M, [M.Transaction.prototype], M._storeNames, M._dbSchema), T.schema = M._dbSchema;
            }), O.push(function($) {
              M.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(M.idbdb.version / 10) === K._cfg.version ? (M.idbdb.deleteObjectStore("$meta"), delete M._dbSchema.$meta, M._storeNames = M._storeNames.filter(function(Z) {
                return Z !== "$meta";
              })) : $.objectStore("$meta").put(K._cfg.version, "version"));
            });
          }), function K() {
            return O.length ? P.resolve(O.shift()(T.idbtrans)).then(K) : P.resolve();
          }().then(function() {
            Mr(L, R);
          })) : P.resolve();
          var M, F, T, R, O, L;
        }).catch(v)) : (S(p).forEach(function(N) {
          Ca(i, N, p[N].primKey, p[N].indexes);
        }), la(t, i), void P.follow(function() {
          return t.on.populate.fire(f);
        }).catch(v));
        var A, E;
      });
    }
    function tn(t, a) {
      Mr(t._dbSchema, a), a.db.version % 10 != 0 || a.objectStoreNames.contains("$meta") || a.db.createObjectStore("$meta").add(Math.ceil(a.db.version / 10 - 1), "version");
      var i = pa(0, t.idbdb, a);
      Ga(t, t._dbSchema, a);
      for (var l = 0, p = $a(i, t._dbSchema).change; l < p.length; l++) {
        var f = function(v) {
          if (v.change.length || v.recreate) return console.warn("Unable to patch indexes of table ".concat(v.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
          var x = a.objectStore(v.name);
          v.add.forEach(function(A) {
            Re && console.debug("Dexie upgrade patch: Creating missing index ".concat(v.name, ".").concat(A.src)), Ha(x, A);
          });
        }(p[l]);
        if (typeof f == "object") return f.value;
      }
    }
    function $a(t, a) {
      var i, l = { del: [], add: [], change: [] };
      for (i in t) a[i] || l.del.push(i);
      for (i in a) {
        var p = t[i], f = a[i];
        if (p) {
          var v = { name: i, def: f, recreate: !1, del: [], add: [], change: [] };
          if ("" + (p.primKey.keyPath || "") != "" + (f.primKey.keyPath || "") || p.primKey.auto !== f.primKey.auto) v.recreate = !0, l.change.push(v);
          else {
            var x = p.idxByName, A = f.idxByName, E = void 0;
            for (E in x) A[E] || v.del.push(E);
            for (E in A) {
              var N = x[E], M = A[E];
              N ? N.src !== M.src && v.change.push(M) : v.add.push(M);
            }
            (0 < v.del.length || 0 < v.add.length || 0 < v.change.length) && l.change.push(v);
          }
        } else l.add.push([i, f]);
      }
      return l;
    }
    function Ca(t, a, i, l) {
      var p = t.db.createObjectStore(a, i.keyPath ? { keyPath: i.keyPath, autoIncrement: i.auto } : { autoIncrement: i.auto });
      return l.forEach(function(f) {
        return Ha(p, f);
      }), p;
    }
    function Mr(t, a) {
      S(t).forEach(function(i) {
        a.db.objectStoreNames.contains(i) || (Re && console.debug("Dexie: Creating missing table", i), Ca(a, i, t[i].primKey, t[i].indexes));
      });
    }
    function Ha(t, a) {
      t.createIndex(a.name, a.keyPath, { unique: a.unique, multiEntry: a.multi });
    }
    function pa(t, a, i) {
      var l = {};
      return Y(a.objectStoreNames, 0).forEach(function(p) {
        for (var f = i.objectStore(p), v = xa(qr(E = f.keyPath), E || "", !0, !1, !!f.autoIncrement, E && typeof E != "string", !0), x = [], A = 0; A < f.indexNames.length; ++A) {
          var N = f.index(f.indexNames[A]), E = N.keyPath, N = xa(N.name, E, !!N.unique, !!N.multiEntry, !1, E && typeof E != "string", !1);
          x.push(N);
        }
        l[p] = Wn(p, v, x);
      }), l;
    }
    function Ga(t, a, i) {
      for (var l = i.db.objectStoreNames, p = 0; p < l.length; ++p) {
        var f = l[p], v = i.objectStore(f);
        t._hasGetAll = "getAll" in v;
        for (var x = 0; x < v.indexNames.length; ++x) {
          var A = v.indexNames[x], E = v.index(A).keyPath, N = typeof E == "string" ? E : "[" + Y(E).join("+") + "]";
          !a[f] || (E = a[f].idxByName[N]) && (E.name = A, delete a[f].idxByName[N], a[f].idxByName[A] = E);
        }
      }
      typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && m.WorkerGlobalScope && m instanceof m.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (t._hasGetAll = !1);
    }
    function fa(t) {
      return t.split(",").map(function(a, i) {
        var f = a.split(":"), l = (p = f[1]) === null || p === void 0 ? void 0 : p.trim(), p = (a = f[0].trim()).replace(/([&*]|\+\+)/g, ""), f = /^\[/.test(p) ? p.match(/^\[(.*)\]$/)[1].split("+") : p;
        return xa(p, f || null, /\&/.test(a), /\*/.test(a), /\+\+/.test(a), I(f), i === 0, l);
      });
    }
    var Zr = (qn.prototype._createTableSchema = Wn, qn.prototype._parseIndexSyntax = fa, qn.prototype._parseStoresSpec = function(t, a) {
      var i = this;
      S(t).forEach(function(l) {
        if (t[l] !== null) {
          var p = i._parseIndexSyntax(t[l]), f = p.shift();
          if (!f) throw new ve.Schema("Invalid schema for table " + l + ": " + t[l]);
          if (f.unique = !0, f.multi) throw new ve.Schema("Primary key cannot be multiEntry*");
          p.forEach(function(v) {
            if (v.auto) throw new ve.Schema("Only primary key can be marked as autoIncrement (++)");
            if (!v.keyPath) throw new ve.Schema("Index must have a name and cannot be an empty string");
          }), p = i._createTableSchema(l, f, p), a[l] = p;
        }
      });
    }, qn.prototype.stores = function(i) {
      var a = this.db;
      this._cfg.storesSource = this._cfg.storesSource ? _(this._cfg.storesSource, i) : i;
      var i = a._versions, l = {}, p = {};
      return i.forEach(function(f) {
        _(l, f._cfg.storesSource), p = f._cfg.dbschema = {}, f._parseStoresSpec(l, p);
      }), a._dbSchema = p, Nn(a, [a._allTables, a, a.Transaction.prototype]), da(a, [a._allTables, a, a.Transaction.prototype, this._cfg.tables], S(p), p), a._storeNames = S(p), this;
    }, qn.prototype.upgrade = function(t) {
      return this._cfg.contentUpgrade = gt(this._cfg.contentUpgrade || C, t), this;
    }, qn);
    function qn() {
    }
    function nn(t, a) {
      var i = t._dbNamesDB;
      return i || (i = t._dbNamesDB = new _n(va, { addons: [], indexedDB: t, IDBKeyRange: a })).version(1).stores({ dbnames: "name" }), i.table("dbnames");
    }
    function Ln(t) {
      return t && typeof t.databases == "function";
    }
    function za(t) {
      return oe(function() {
        return _e.letThrough = !0, t();
      });
    }
    function qa(t) {
      return !("from" in t);
    }
    var Zt = function(t, a) {
      if (!this) {
        var i = new Zt();
        return t && "d" in t && _(i, t), i;
      }
      _(this, arguments.length ? { d: 1, from: t, to: 1 < arguments.length ? a : t } : { d: 0 });
    };
    function Ma(t, a, i) {
      var l = Pe(a, i);
      if (!isNaN(l)) {
        if (0 < l) throw RangeError();
        if (qa(t)) return _(t, { from: a, to: i, d: 1 });
        var p = t.l, l = t.r;
        if (Pe(i, t.from) < 0) return p ? Ma(p, a, i) : t.l = { from: a, to: i, d: 1, l: null, r: null }, Ja(t);
        if (0 < Pe(a, t.to)) return l ? Ma(l, a, i) : t.r = { from: a, to: i, d: 1, l: null, r: null }, Ja(t);
        Pe(a, t.from) < 0 && (t.from = a, t.l = null, t.d = l ? l.d + 1 : 1), 0 < Pe(i, t.to) && (t.to = i, t.r = null, t.d = t.l ? t.l.d + 1 : 1), i = !t.r, p && !t.l && Jn(t, p), l && i && Jn(t, l);
      }
    }
    function Jn(t, a) {
      qa(a) || function i(l, A) {
        var f = A.from, v = A.to, x = A.l, A = A.r;
        Ma(l, f, v), x && i(l, x), A && i(l, A);
      }(t, a);
    }
    function Ir(t, a) {
      var i = St(a), l = i.next();
      if (l.done) return !1;
      for (var p = l.value, f = St(t), v = f.next(p.from), x = v.value; !l.done && !v.done; ) {
        if (Pe(x.from, p.to) <= 0 && 0 <= Pe(x.to, p.from)) return !0;
        Pe(p.from, x.from) < 0 ? p = (l = i.next(x.from)).value : x = (v = f.next(p.from)).value;
      }
      return !1;
    }
    function St(t) {
      var a = qa(t) ? null : { s: 0, n: t };
      return { next: function(i) {
        for (var l = 0 < arguments.length; a; ) switch (a.s) {
          case 0:
            if (a.s = 1, l) for (; a.n.l && Pe(i, a.n.from) < 0; ) a = { up: a, n: a.n.l, s: 1 };
            else for (; a.n.l; ) a = { up: a, n: a.n.l, s: 1 };
          case 1:
            if (a.s = 2, !l || Pe(i, a.n.to) <= 0) return { value: a.n, done: !1 };
          case 2:
            if (a.n.r) {
              a.s = 3, a = { up: a, n: a.n.r, s: 0 };
              continue;
            }
          case 3:
            a = a.up;
        }
        return { done: !0 };
      } };
    }
    function Ja(t) {
      var a, i, l = (((a = t.r) === null || a === void 0 ? void 0 : a.d) || 0) - (((i = t.l) === null || i === void 0 ? void 0 : i.d) || 0), p = 1 < l ? "r" : l < -1 ? "l" : "";
      p && (a = p == "r" ? "l" : "r", i = d({}, t), l = t[p], t.from = l.from, t.to = l.to, t[p] = l[p], i[p] = l[a], (t[a] = i).d = Ya(i)), t.d = Ya(t);
    }
    function Ya(i) {
      var a = i.r, i = i.l;
      return (a ? i ? Math.max(a.d, i.d) : a.d : i ? i.d : 0) + 1;
    }
    function An(t, a) {
      return S(a).forEach(function(i) {
        t[i] ? Jn(t[i], a[i]) : t[i] = function l(p) {
          var f, v, x = {};
          for (f in p) X(p, f) && (v = p[f], x[f] = !v || typeof v != "object" || ut.has(v.constructor) ? v : l(v));
          return x;
        }(a[i]);
      }), t;
    }
    function En(t, a) {
      return t.all || a.all || Object.keys(t).some(function(i) {
        return a[i] && Ir(a[i], t[i]);
      });
    }
    j(Zt.prototype, ((mn = { add: function(t) {
      return Jn(this, t), this;
    }, addKey: function(t) {
      return Ma(this, t, t), this;
    }, addKeys: function(t) {
      var a = this;
      return t.forEach(function(i) {
        return Ma(a, i, i);
      }), this;
    }, hasKey: function(t) {
      var a = St(this).next(t).value;
      return a && Pe(a.from, t) <= 0 && 0 <= Pe(a.to, t);
    } })[bt] = function() {
      return St(this);
    }, mn));
    var gn = {}, Ia = {}, At = !1;
    function Fn(t) {
      An(Ia, t), At || (At = !0, setTimeout(function() {
        At = !1, Aa(Ia, !(Ia = {}));
      }, 0));
    }
    function Aa(t, a) {
      a === void 0 && (a = !1);
      var i = /* @__PURE__ */ new Set();
      if (t.all) for (var l = 0, p = Object.values(gn); l < p.length; l++) Qr(v = p[l], t, i, a);
      else for (var f in t) {
        var v, x = /^idb\:\/\/(.*)\/(.*)\//.exec(f);
        x && (f = x[1], x = x[2], (v = gn["idb://".concat(f, "/").concat(x)]) && Qr(v, t, i, a));
      }
      i.forEach(function(A) {
        return A();
      });
    }
    function Qr(t, a, i, l) {
      for (var p = [], f = 0, v = Object.entries(t.queries.query); f < v.length; f++) {
        for (var x = v[f], A = x[0], E = [], N = 0, M = x[1]; N < M.length; N++) {
          var F = M[N];
          En(a, F.obsSet) ? F.subscribers.forEach(function(L) {
            return i.add(L);
          }) : l && E.push(F);
        }
        l && p.push([A, E]);
      }
      if (l) for (var T = 0, R = p; T < R.length; T++) {
        var O = R[T], A = O[0], E = O[1];
        t.queries.query[A] = E;
      }
    }
    function ko(t) {
      var a = t._state, i = t._deps.indexedDB;
      if (a.isBeingOpened || t.idbdb) return a.dbReadyPromise.then(function() {
        return a.dbOpenError ? Lt(a.dbOpenError) : t;
      });
      a.isBeingOpened = !0, a.dbOpenError = null, a.openComplete = !1;
      var l = a.openCanceller, p = Math.round(10 * t.verno), f = !1;
      function v() {
        if (a.openCanceller !== l) throw new ve.DatabaseClosed("db.open() was cancelled");
      }
      function x() {
        return new P(function(F, T) {
          if (v(), !i) throw new ve.MissingAPI();
          var R = t.name, O = a.autoSchema || !p ? i.open(R) : i.open(R, p);
          if (!O) throw new ve.MissingAPI();
          O.onerror = on(T), O.onblocked = kt(t._fireOnBlocked), O.onupgradeneeded = kt(function(L) {
            var K;
            N = O.transaction, a.autoSchema && !t._options.allowEmptyDB ? (O.onerror = hn, N.abort(), O.result.close(), (K = i.deleteDatabase(R)).onsuccess = K.onerror = kt(function() {
              T(new ve.NoSuchDatabase("Database ".concat(R, " doesnt exist")));
            })) : (N.onerror = on(T), L = L.oldVersion > Math.pow(2, 62) ? 0 : L.oldVersion, M = L < 1, t.idbdb = O.result, f && tn(t, N), Yr(t, L / 10, N, T));
          }, T), O.onsuccess = kt(function() {
            N = null;
            var L, K, $, Z, ee, he = t.idbdb = O.result, be = Y(he.objectStoreNames);
            if (0 < be.length) try {
              var fe = he.transaction((Z = be).length === 1 ? Z[0] : Z, "readonly");
              if (a.autoSchema) K = he, $ = fe, (L = t).verno = K.version / 10, $ = L._dbSchema = pa(0, K, $), L._storeNames = Y(K.objectStoreNames, 0), da(L, [L._allTables], S($), $);
              else if (Ga(t, t._dbSchema, fe), ((ee = $a(pa(0, (ee = t).idbdb, fe), ee._dbSchema)).add.length || ee.change.some(function(me) {
                return me.add.length || me.change.length;
              })) && !f) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), he.close(), p = he.version + 1, f = !0, F(x());
              la(t, fe);
            } catch {
            }
            Gn.push(t), he.onversionchange = kt(function(me) {
              a.vcFired = !0, t.on("versionchange").fire(me);
            }), he.onclose = kt(function() {
              t.close({ disableAutoOpen: !1 });
            }), M && (ee = t._deps, fe = R, he = ee.indexedDB, ee = ee.IDBKeyRange, Ln(he) || fe === va || nn(he, ee).put({ name: fe }).catch(C)), F();
          }, T);
        }).catch(function(F) {
          switch (F == null ? void 0 : F.name) {
            case "UnknownError":
              if (0 < a.PR1398_maxLoop) return a.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), x();
              break;
            case "VersionError":
              if (0 < p) return p = 0, x();
          }
          return P.reject(F);
        });
      }
      var A, E = a.dbReadyResolve, N = null, M = !1;
      return P.race([l, (typeof navigator > "u" ? P.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(F) {
        function T() {
          return indexedDB.databases().finally(F);
        }
        A = setInterval(T, 100), T();
      }).finally(function() {
        return clearInterval(A);
      }) : Promise.resolve()).then(x)]).then(function() {
        return v(), a.onReadyBeingFired = [], P.resolve(za(function() {
          return t.on.ready.fire(t.vip);
        })).then(function F() {
          if (0 < a.onReadyBeingFired.length) {
            var T = a.onReadyBeingFired.reduce(gt, C);
            return a.onReadyBeingFired = [], P.resolve(za(function() {
              return T(t.vip);
            })).then(F);
          }
        });
      }).finally(function() {
        a.openCanceller === l && (a.onReadyBeingFired = null, a.isBeingOpened = !1);
      }).catch(function(F) {
        a.dbOpenError = F;
        try {
          N && N.abort();
        } catch {
        }
        return l === a.openCanceller && t._close(), Lt(F);
      }).finally(function() {
        a.openComplete = !0, E();
      }).then(function() {
        var F;
        return M && (F = {}, t.tables.forEach(function(T) {
          T.schema.indexes.forEach(function(R) {
            R.name && (F["idb://".concat(t.name, "/").concat(T.name, "/").concat(R.name)] = new Zt(-1 / 0, [[[]]]));
          }), F["idb://".concat(t.name, "/").concat(T.name, "/")] = F["idb://".concat(t.name, "/").concat(T.name, "/:dels")] = new Zt(-1 / 0, [[[]]]);
        }), On(Vt).fire(F), Aa(F, !0)), t;
      });
    }
    function Za(t) {
      function a(f) {
        return t.next(f);
      }
      var i = p(a), l = p(function(f) {
        return t.throw(f);
      });
      function p(f) {
        return function(A) {
          var x = f(A), A = x.value;
          return x.done ? A : A && typeof A.then == "function" ? A.then(i, l) : I(A) ? Promise.all(A).then(i, l) : i(A);
        };
      }
      return p(a)();
    }
    function Qa(t, a, i) {
      for (var l = I(t) ? t.slice() : [t], p = 0; p < i; ++p) l.push(a);
      return l;
    }
    var Xr = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(t) {
      return d(d({}, t), { table: function(a) {
        var i = t.table(a), l = i.schema, p = {}, f = [];
        function v(M, F, T) {
          var R = ua(M), O = p[R] = p[R] || [], L = M == null ? 0 : typeof M == "string" ? 1 : M.length, K = 0 < F, K = d(d({}, T), { name: K ? "".concat(R, "(virtual-from:").concat(T.name, ")") : T.name, lowLevelIndex: T, isVirtual: K, keyTail: F, keyLength: L, extractKey: ja(M), unique: !K && T.unique });
          return O.push(K), K.isPrimaryKey || f.push(K), 1 < L && v(L === 2 ? M[0] : M.slice(0, L - 1), F + 1, T), O.sort(function($, Z) {
            return $.keyTail - Z.keyTail;
          }), K;
        }
        a = v(l.primaryKey.keyPath, 0, l.primaryKey), p[":id"] = [a];
        for (var x = 0, A = l.indexes; x < A.length; x++) {
          var E = A[x];
          v(E.keyPath, 0, E);
        }
        function N(M) {
          var F, T = M.query.index;
          return T.isVirtual ? d(d({}, M), { query: { index: T.lowLevelIndex, range: (F = M.query.range, T = T.keyTail, { type: F.type === 1 ? 2 : F.type, lower: Qa(F.lower, F.lowerOpen ? t.MAX_KEY : t.MIN_KEY, T), lowerOpen: !0, upper: Qa(F.upper, F.upperOpen ? t.MIN_KEY : t.MAX_KEY, T), upperOpen: !0 }) } }) : M;
        }
        return d(d({}, i), { schema: d(d({}, l), { primaryKey: a, indexes: f, getIndexByKeyPath: function(M) {
          return (M = p[ua(M)]) && M[0];
        } }), count: function(M) {
          return i.count(N(M));
        }, query: function(M) {
          return i.query(N(M));
        }, openCursor: function(M) {
          var F = M.query.index, T = F.keyTail, R = F.isVirtual, O = F.keyLength;
          return R ? i.openCursor(N(M)).then(function(K) {
            return K && L(K);
          }) : i.openCursor(M);
          function L(K) {
            return Object.create(K, { continue: { value: function($) {
              $ != null ? K.continue(Qa($, M.reverse ? t.MAX_KEY : t.MIN_KEY, T)) : M.unique ? K.continue(K.key.slice(0, O).concat(M.reverse ? t.MIN_KEY : t.MAX_KEY, T)) : K.continue();
            } }, continuePrimaryKey: { value: function($, Z) {
              K.continuePrimaryKey(Qa($, t.MAX_KEY, T), Z);
            } }, primaryKey: { get: function() {
              return K.primaryKey;
            } }, key: { get: function() {
              var $ = K.key;
              return O === 1 ? $[0] : $.slice(0, O);
            } }, value: { get: function() {
              return K.value;
            } } });
          }
        } });
      } });
    } };
    function Ar(t, a, i, l) {
      return i = i || {}, l = l || "", S(t).forEach(function(p) {
        var f, v, x;
        X(a, p) ? (f = t[p], v = a[p], typeof f == "object" && typeof v == "object" && f && v ? (x = Le(f)) !== Le(v) ? i[l + p] = a[p] : x === "Object" ? Ar(f, v, i, l + p + ".") : f !== v && (i[l + p] = a[p]) : f !== v && (i[l + p] = a[p])) : i[l + p] = void 0;
      }), S(a).forEach(function(p) {
        X(t, p) || (i[l + p] = a[p]);
      }), i;
    }
    function Er(t, a) {
      return a.type === "delete" ? a.keys : a.keys || a.values.map(t.extractKey);
    }
    var So = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(t) {
      return d(d({}, t), { table: function(a) {
        var i = t.table(a), l = i.schema.primaryKey;
        return d(d({}, i), { mutate: function(p) {
          var f = _e.trans, v = f.table(a).hook, x = v.deleting, A = v.creating, E = v.updating;
          switch (p.type) {
            case "add":
              if (A.fire === C) break;
              return f._promise("readwrite", function() {
                return N(p);
              }, !0);
            case "put":
              if (A.fire === C && E.fire === C) break;
              return f._promise("readwrite", function() {
                return N(p);
              }, !0);
            case "delete":
              if (x.fire === C) break;
              return f._promise("readwrite", function() {
                return N(p);
              }, !0);
            case "deleteRange":
              if (x.fire === C) break;
              return f._promise("readwrite", function() {
                return function M(F, T, R) {
                  return i.query({ trans: F, values: !1, query: { index: l, range: T }, limit: R }).then(function(O) {
                    var L = O.result;
                    return N({ type: "delete", keys: L, trans: F }).then(function(K) {
                      return 0 < K.numFailures ? Promise.reject(K.failures[0]) : L.length < R ? { failures: [], numFailures: 0, lastResult: void 0 } : M(F, d(d({}, T), { lower: L[L.length - 1], lowerOpen: !0 }), R);
                    });
                  });
                }(p.trans, p.range, 1e4);
              }, !0);
          }
          return i.mutate(p);
          function N(M) {
            var F, T, R, O = _e.trans, L = M.keys || Er(l, M);
            if (!L) throw new Error("Keys missing");
            return (M = M.type === "add" || M.type === "put" ? d(d({}, M), { keys: L }) : d({}, M)).type !== "delete" && (M.values = y([], M.values)), M.keys && (M.keys = y([], M.keys)), F = i, R = L, ((T = M).type === "add" ? Promise.resolve([]) : F.getMany({ trans: T.trans, keys: R, cache: "immutable" })).then(function(K) {
              var $ = L.map(function(Z, ee) {
                var he, be, fe, me = K[ee], ke = { onerror: null, onsuccess: null };
                return M.type === "delete" ? x.fire.call(ke, Z, me, O) : M.type === "add" || me === void 0 ? (he = A.fire.call(ke, Z, M.values[ee], O), Z == null && he != null && (M.keys[ee] = Z = he, l.outbound || ce(M.values[ee], l.keyPath, Z))) : (he = Ar(me, M.values[ee]), (be = E.fire.call(ke, he, Z, me, O)) && (fe = M.values[ee], Object.keys(be).forEach(function(ye) {
                  X(fe, ye) ? fe[ye] = be[ye] : ce(fe, ye, be[ye]);
                }))), ke;
              });
              return i.mutate(M).then(function(Z) {
                for (var ee = Z.failures, he = Z.results, be = Z.numFailures, Z = Z.lastResult, fe = 0; fe < L.length; ++fe) {
                  var me = (he || L)[fe], ke = $[fe];
                  me == null ? ke.onerror && ke.onerror(ee[fe]) : ke.onsuccess && ke.onsuccess(M.type === "put" && K[fe] ? M.values[fe] : me);
                }
                return { failures: ee, results: he, numFailures: be, lastResult: Z };
              }).catch(function(Z) {
                return $.forEach(function(ee) {
                  return ee.onerror && ee.onerror(Z);
                }), Promise.reject(Z);
              });
            });
          }
        } });
      } });
    } };
    function Xa(t, a, i) {
      try {
        if (!a || a.keys.length < t.length) return null;
        for (var l = [], p = 0, f = 0; p < a.keys.length && f < t.length; ++p) Pe(a.keys[p], t[f]) === 0 && (l.push(i ? Fe(a.values[p]) : a.values[p]), ++f);
        return l.length === t.length ? l : null;
      } catch {
        return null;
      }
    }
    var er = { stack: "dbcore", level: -1, create: function(t) {
      return { table: function(a) {
        var i = t.table(a);
        return d(d({}, i), { getMany: function(l) {
          if (!l.cache) return i.getMany(l);
          var p = Xa(l.keys, l.trans._cache, l.cache === "clone");
          return p ? P.resolve(p) : i.getMany(l).then(function(f) {
            return l.trans._cache = { keys: l.keys, values: l.cache === "clone" ? Fe(f) : f }, f;
          });
        }, mutate: function(l) {
          return l.type !== "add" && (l.trans._cache = null), i.mutate(l);
        } });
      } };
    } };
    function ha(t, a) {
      return t.trans.mode === "readonly" && !!t.subscr && !t.trans.explicit && t.trans.db._options.cache !== "disabled" && !a.schema.primaryKey.outbound;
    }
    function tr(t, a) {
      switch (t) {
        case "query":
          return a.values && !a.unique;
        case "get":
        case "getMany":
        case "count":
        case "openCursor":
          return !1;
      }
    }
    var Po = { stack: "dbcore", level: 0, name: "Observability", create: function(t) {
      var a = t.schema.name, i = new Zt(t.MIN_KEY, t.MAX_KEY);
      return d(d({}, t), { transaction: function(l, p, f) {
        if (_e.subscr && p !== "readonly") throw new ve.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(_e.querier));
        return t.transaction(l, p, f);
      }, table: function(l) {
        var p = t.table(l), f = p.schema, v = f.primaryKey, M = f.indexes, x = v.extractKey, A = v.outbound, E = v.autoIncrement && M.filter(function(T) {
          return T.compound && T.keyPath.includes(v.keyPath);
        }), N = d(d({}, p), { mutate: function(T) {
          function R(ye) {
            return ye = "idb://".concat(a, "/").concat(l, "/").concat(ye), Z[ye] || (Z[ye] = new Zt());
          }
          var O, L, K, $ = T.trans, Z = T.mutatedParts || (T.mutatedParts = {}), ee = R(""), he = R(":dels"), be = T.type, ke = T.type === "deleteRange" ? [T.range] : T.type === "delete" ? [T.keys] : T.values.length < 50 ? [Er(v, T).filter(function(ye) {
            return ye;
          }), T.values] : [], fe = ke[0], me = ke[1], ke = T.trans._cache;
          return I(fe) ? (ee.addKeys(fe), (ke = be === "delete" || fe.length === me.length ? Xa(fe, ke) : null) || he.addKeys(fe), (ke || me) && (O = R, L = ke, K = me, f.indexes.forEach(function(ye) {
            var Ee = O(ye.name || "");
            function te(ot) {
              return ot != null ? ye.extractKey(ot) : null;
            }
            function nt(ot) {
              return ye.multiEntry && I(ot) ? ot.forEach(function(sn) {
                return Ee.addKey(sn);
              }) : Ee.addKey(ot);
            }
            (L || K).forEach(function(ot, zt) {
              var qe = L && te(L[zt]), zt = K && te(K[zt]);
              Pe(qe, zt) !== 0 && (qe != null && nt(qe), zt != null && nt(zt));
            });
          }))) : fe ? (me = { from: (me = fe.lower) !== null && me !== void 0 ? me : t.MIN_KEY, to: (me = fe.upper) !== null && me !== void 0 ? me : t.MAX_KEY }, he.add(me), ee.add(me)) : (ee.add(i), he.add(i), f.indexes.forEach(function(ye) {
            return R(ye.name).add(i);
          })), p.mutate(T).then(function(ye) {
            return !fe || T.type !== "add" && T.type !== "put" || (ee.addKeys(ye.results), E && E.forEach(function(Ee) {
              for (var te = T.values.map(function(qe) {
                return Ee.extractKey(qe);
              }), nt = Ee.keyPath.findIndex(function(qe) {
                return qe === v.keyPath;
              }), ot = 0, sn = ye.results.length; ot < sn; ++ot) te[ot][nt] = ye.results[ot];
              R(Ee.name).addKeys(te);
            })), $.mutatedParts = An($.mutatedParts || {}, Z), ye;
          });
        } }), M = function(R) {
          var O = R.query, R = O.index, O = O.range;
          return [R, new Zt((R = O.lower) !== null && R !== void 0 ? R : t.MIN_KEY, (O = O.upper) !== null && O !== void 0 ? O : t.MAX_KEY)];
        }, F = { get: function(T) {
          return [v, new Zt(T.key)];
        }, getMany: function(T) {
          return [v, new Zt().addKeys(T.keys)];
        }, count: M, query: M, openCursor: M };
        return S(F).forEach(function(T) {
          N[T] = function(R) {
            var O = _e.subscr, L = !!O, K = ha(_e, p) && tr(T, R) ? R.obsSet = {} : O;
            if (L) {
              var $ = function(me) {
                return me = "idb://".concat(a, "/").concat(l, "/").concat(me), K[me] || (K[me] = new Zt());
              }, Z = $(""), ee = $(":dels"), O = F[T](R), L = O[0], O = O[1];
              if ((T === "query" && L.isPrimaryKey && !R.values ? ee : $(L.name || "")).add(O), !L.isPrimaryKey) {
                if (T !== "count") {
                  var he = T === "query" && A && R.values && p.query(d(d({}, R), { values: !1 }));
                  return p[T].apply(this, arguments).then(function(me) {
                    if (T === "query") {
                      if (A && R.values) return he.then(function(te) {
                        return te = te.result, Z.addKeys(te), me;
                      });
                      var ke = R.values ? me.result.map(x) : me.result;
                      (R.values ? Z : ee).addKeys(ke);
                    } else if (T === "openCursor") {
                      var ye = me, Ee = R.values;
                      return ye && Object.create(ye, { key: { get: function() {
                        return ee.addKey(ye.primaryKey), ye.key;
                      } }, primaryKey: { get: function() {
                        var te = ye.primaryKey;
                        return ee.addKey(te), te;
                      } }, value: { get: function() {
                        return Ee && Z.addKey(ye.primaryKey), ye.value;
                      } } });
                    }
                    return me;
                  });
                }
                ee.add(i);
              }
            }
            return p[T].apply(this, arguments);
          };
        }), N;
      } });
    } };
    function ga(t, a, i) {
      if (i.numFailures === 0) return a;
      if (a.type === "deleteRange") return null;
      var l = a.keys ? a.keys.length : "values" in a && a.values ? a.values.length : 1;
      return i.numFailures === l ? null : (a = d({}, a), I(a.keys) && (a.keys = a.keys.filter(function(p, f) {
        return !(f in i.failures);
      })), "values" in a && I(a.values) && (a.values = a.values.filter(function(p, f) {
        return !(f in i.failures);
      })), a);
    }
    function _r(t, a) {
      return i = t, ((l = a).lower === void 0 || (l.lowerOpen ? 0 < Pe(i, l.lower) : 0 <= Pe(i, l.lower))) && (t = t, (a = a).upper === void 0 || (a.upperOpen ? Pe(t, a.upper) < 0 : Pe(t, a.upper) <= 0));
      var i, l;
    }
    function Tr(t, a, F, l, p, f) {
      if (!F || F.length === 0) return t;
      var v = a.query.index, x = v.multiEntry, A = a.query.range, E = l.schema.primaryKey.extractKey, N = v.extractKey, M = (v.lowLevelIndex || v).extractKey, F = F.reduce(function(T, R) {
        var O = T, L = [];
        if (R.type === "add" || R.type === "put") for (var K = new Zt(), $ = R.values.length - 1; 0 <= $; --$) {
          var Z, ee = R.values[$], he = E(ee);
          K.hasKey(he) || (Z = N(ee), (x && I(Z) ? Z.some(function(ye) {
            return _r(ye, A);
          }) : _r(Z, A)) && (K.addKey(he), L.push(ee)));
        }
        switch (R.type) {
          case "add":
            var be = new Zt().addKeys(a.values ? T.map(function(Ee) {
              return E(Ee);
            }) : T), O = T.concat(a.values ? L.filter(function(Ee) {
              return Ee = E(Ee), !be.hasKey(Ee) && (be.addKey(Ee), !0);
            }) : L.map(function(Ee) {
              return E(Ee);
            }).filter(function(Ee) {
              return !be.hasKey(Ee) && (be.addKey(Ee), !0);
            }));
            break;
          case "put":
            var fe = new Zt().addKeys(R.values.map(function(Ee) {
              return E(Ee);
            }));
            O = T.filter(function(Ee) {
              return !fe.hasKey(a.values ? E(Ee) : Ee);
            }).concat(a.values ? L : L.map(function(Ee) {
              return E(Ee);
            }));
            break;
          case "delete":
            var me = new Zt().addKeys(R.keys);
            O = T.filter(function(Ee) {
              return !me.hasKey(a.values ? E(Ee) : Ee);
            });
            break;
          case "deleteRange":
            var ke = R.range;
            O = T.filter(function(Ee) {
              return !_r(E(Ee), ke);
            });
        }
        return O;
      }, t);
      return F === t ? t : (F.sort(function(T, R) {
        return Pe(M(T), M(R)) || Pe(E(T), E(R));
      }), a.limit && a.limit < 1 / 0 && (F.length > a.limit ? F.length = a.limit : t.length === a.limit && F.length < a.limit && (p.dirty = !0)), f ? Object.freeze(F) : F);
    }
    function nr(t, a) {
      return Pe(t.lower, a.lower) === 0 && Pe(t.upper, a.upper) === 0 && !!t.lowerOpen == !!a.lowerOpen && !!t.upperOpen == !!a.upperOpen;
    }
    function ma(t, a) {
      return function(i, l, p, f) {
        if (i === void 0) return l !== void 0 ? -1 : 0;
        if (l === void 0) return 1;
        if ((l = Pe(i, l)) === 0) {
          if (p && f) return 0;
          if (p) return 1;
          if (f) return -1;
        }
        return l;
      }(t.lower, a.lower, t.lowerOpen, a.lowerOpen) <= 0 && 0 <= function(i, l, p, f) {
        if (i === void 0) return l !== void 0 ? 1 : 0;
        if (l === void 0) return -1;
        if ((l = Pe(i, l)) === 0) {
          if (p && f) return 0;
          if (p) return -1;
          if (f) return 1;
        }
        return l;
      }(t.upper, a.upper, t.upperOpen, a.upperOpen);
    }
    function Rr(t, a, i, l) {
      t.subscribers.add(i), l.addEventListener("abort", function() {
        var p, f;
        t.subscribers.delete(i), t.subscribers.size === 0 && (p = t, f = a, setTimeout(function() {
          p.subscribers.size === 0 && mt(f, p);
        }, 3e3));
      });
    }
    var xo = { stack: "dbcore", level: 0, name: "Cache", create: function(t) {
      var a = t.schema.name;
      return d(d({}, t), { transaction: function(i, l, p) {
        var f, v, x = t.transaction(i, l, p);
        return l === "readwrite" && (v = (f = new AbortController()).signal, p = function(A) {
          return function() {
            if (f.abort(), l === "readwrite") {
              for (var E = /* @__PURE__ */ new Set(), N = 0, M = i; N < M.length; N++) {
                var F = M[N], T = gn["idb://".concat(a, "/").concat(F)];
                if (T) {
                  var R = t.table(F), O = T.optimisticOps.filter(function(Ee) {
                    return Ee.trans === x;
                  });
                  if (x._explicit && A && x.mutatedParts) for (var L = 0, K = Object.values(T.queries.query); L < K.length; L++) for (var $ = 0, Z = (be = K[L]).slice(); $ < Z.length; $++) En((fe = Z[$]).obsSet, x.mutatedParts) && (mt(be, fe), fe.subscribers.forEach(function(Ee) {
                    return E.add(Ee);
                  }));
                  else if (0 < O.length) {
                    T.optimisticOps = T.optimisticOps.filter(function(Ee) {
                      return Ee.trans !== x;
                    });
                    for (var ee = 0, he = Object.values(T.queries.query); ee < he.length; ee++) for (var be, fe, me, ke = 0, ye = (be = he[ee]).slice(); ke < ye.length; ke++) (fe = ye[ke]).res != null && x.mutatedParts && (A && !fe.dirty ? (me = Object.isFrozen(fe.res), me = Tr(fe.res, fe.req, O, R, fe, me), fe.dirty ? (mt(be, fe), fe.subscribers.forEach(function(Ee) {
                      return E.add(Ee);
                    })) : me !== fe.res && (fe.res = me, fe.promise = P.resolve({ result: me }))) : (fe.dirty && mt(be, fe), fe.subscribers.forEach(function(Ee) {
                      return E.add(Ee);
                    })));
                  }
                }
              }
              E.forEach(function(Ee) {
                return Ee();
              });
            }
          };
        }, x.addEventListener("abort", p(!1), { signal: v }), x.addEventListener("error", p(!1), { signal: v }), x.addEventListener("complete", p(!0), { signal: v })), x;
      }, table: function(i) {
        var l = t.table(i), p = l.schema.primaryKey;
        return d(d({}, l), { mutate: function(f) {
          var v = _e.trans;
          if (p.outbound || v.db._options.cache === "disabled" || v.explicit || v.idbtrans.mode !== "readwrite") return l.mutate(f);
          var x = gn["idb://".concat(a, "/").concat(i)];
          return x ? (v = l.mutate(f), f.type !== "add" && f.type !== "put" || !(50 <= f.values.length || Er(p, f).some(function(A) {
            return A == null;
          })) ? (x.optimisticOps.push(f), f.mutatedParts && Fn(f.mutatedParts), v.then(function(A) {
            0 < A.numFailures && (mt(x.optimisticOps, f), (A = ga(0, f, A)) && x.optimisticOps.push(A), f.mutatedParts && Fn(f.mutatedParts));
          }), v.catch(function() {
            mt(x.optimisticOps, f), f.mutatedParts && Fn(f.mutatedParts);
          })) : v.then(function(A) {
            var E = ga(0, d(d({}, f), { values: f.values.map(function(N, M) {
              var F;
              return A.failures[M] ? N : (N = (F = p.keyPath) !== null && F !== void 0 && F.includes(".") ? Fe(N) : d({}, N), ce(N, p.keyPath, A.results[M]), N);
            }) }), A);
            x.optimisticOps.push(E), queueMicrotask(function() {
              return f.mutatedParts && Fn(f.mutatedParts);
            });
          }), v) : l.mutate(f);
        }, query: function(f) {
          if (!ha(_e, l) || !tr("query", f)) return l.query(f);
          var v = ((E = _e.trans) === null || E === void 0 ? void 0 : E.db._options.cache) === "immutable", M = _e, x = M.requery, A = M.signal, E = function(R, O, L, K) {
            var $ = gn["idb://".concat(R, "/").concat(O)];
            if (!$) return [];
            if (!(O = $.queries[L])) return [null, !1, $, null];
            var Z = O[(K.query ? K.query.index.name : null) || ""];
            if (!Z) return [null, !1, $, null];
            switch (L) {
              case "query":
                var ee = Z.find(function(he) {
                  return he.req.limit === K.limit && he.req.values === K.values && nr(he.req.query.range, K.query.range);
                });
                return ee ? [ee, !0, $, Z] : [Z.find(function(he) {
                  return ("limit" in he.req ? he.req.limit : 1 / 0) >= K.limit && (!K.values || he.req.values) && ma(he.req.query.range, K.query.range);
                }), !1, $, Z];
              case "count":
                return ee = Z.find(function(he) {
                  return nr(he.req.query.range, K.query.range);
                }), [ee, !!ee, $, Z];
            }
          }(a, i, "query", f), N = E[0], M = E[1], F = E[2], T = E[3];
          return N && M ? N.obsSet = f.obsSet : (M = l.query(f).then(function(R) {
            var O = R.result;
            if (N && (N.res = O), v) {
              for (var L = 0, K = O.length; L < K; ++L) Object.freeze(O[L]);
              Object.freeze(O);
            } else R.result = Fe(O);
            return R;
          }).catch(function(R) {
            return T && N && mt(T, N), Promise.reject(R);
          }), N = { obsSet: f.obsSet, promise: M, subscribers: /* @__PURE__ */ new Set(), type: "query", req: f, dirty: !1 }, T ? T.push(N) : (T = [N], (F = F || (gn["idb://".concat(a, "/").concat(i)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[f.query.index.name || ""] = T)), Rr(N, T, x, A), N.promise.then(function(R) {
            return { result: Tr(R.result, f, F == null ? void 0 : F.optimisticOps, l, N, v) };
          });
        } });
      } });
    } };
    function Ea(t, a) {
      return new Proxy(t, { get: function(i, l, p) {
        return l === "db" ? a : Reflect.get(i, l, p);
      } });
    }
    var _n = (Rt.prototype.version = function(t) {
      if (isNaN(t) || t < 0.1) throw new ve.Type("Given version is not a positive number");
      if (t = Math.round(10 * t) / 10, this.idbdb || this._state.isBeingOpened) throw new ve.Schema("Cannot add version when database is open");
      this.verno = Math.max(this.verno, t);
      var a = this._versions, i = a.filter(function(l) {
        return l._cfg.version === t;
      })[0];
      return i || (i = new this.Version(t), a.push(i), a.sort(vo), i.stores({}), this._state.autoSchema = !1, i);
    }, Rt.prototype._whenReady = function(t) {
      var a = this;
      return this.idbdb && (this._state.openComplete || _e.letThrough || this._vip) ? t() : new P(function(i, l) {
        if (a._state.openComplete) return l(new ve.DatabaseClosed(a._state.dbOpenError));
        if (!a._state.isBeingOpened) {
          if (!a._state.autoOpen) return void l(new ve.DatabaseClosed());
          a.open().catch(C);
        }
        a._state.dbReadyPromise.then(i, l);
      }).then(t);
    }, Rt.prototype.use = function(t) {
      var a = t.stack, i = t.create, l = t.level, p = t.name;
      return p && this.unuse({ stack: a, name: p }), t = this._middlewares[a] || (this._middlewares[a] = []), t.push({ stack: a, create: i, level: l ?? 10, name: p }), t.sort(function(f, v) {
        return f.level - v.level;
      }), this;
    }, Rt.prototype.unuse = function(t) {
      var a = t.stack, i = t.name, l = t.create;
      return a && this._middlewares[a] && (this._middlewares[a] = this._middlewares[a].filter(function(p) {
        return l ? p.create !== l : !!i && p.name !== i;
      })), this;
    }, Rt.prototype.open = function() {
      var t = this;
      return $n(Kt, function() {
        return ko(t);
      });
    }, Rt.prototype._close = function() {
      this.on.close.fire(new CustomEvent("close"));
      var t = this._state, a = Gn.indexOf(this);
      if (0 <= a && Gn.splice(a, 1), this.idbdb) {
        try {
          this.idbdb.close();
        } catch {
        }
        this.idbdb = null;
      }
      t.isBeingOpened || (t.dbReadyPromise = new P(function(i) {
        t.dbReadyResolve = i;
      }), t.openCanceller = new P(function(i, l) {
        t.cancelOpen = l;
      }));
    }, Rt.prototype.close = function(i) {
      var a = (i === void 0 ? { disableAutoOpen: !0 } : i).disableAutoOpen, i = this._state;
      a ? (i.isBeingOpened && i.cancelOpen(new ve.DatabaseClosed()), this._close(), i.autoOpen = !1, i.dbOpenError = new ve.DatabaseClosed()) : (this._close(), i.autoOpen = this._options.autoOpen || i.isBeingOpened, i.openComplete = !1, i.dbOpenError = null);
    }, Rt.prototype.delete = function(t) {
      var a = this;
      t === void 0 && (t = { disableAutoOpen: !0 });
      var i = 0 < arguments.length && typeof arguments[0] != "object", l = this._state;
      return new P(function(p, f) {
        function v() {
          a.close(t);
          var x = a._deps.indexedDB.deleteDatabase(a.name);
          x.onsuccess = kt(function() {
            var A, E, N;
            A = a._deps, E = a.name, N = A.indexedDB, A = A.IDBKeyRange, Ln(N) || E === va || nn(N, A).delete(E).catch(C), p();
          }), x.onerror = on(f), x.onblocked = a._fireOnBlocked;
        }
        if (i) throw new ve.InvalidArgument("Invalid closeOptions argument to db.delete()");
        l.isBeingOpened ? l.dbReadyPromise.then(v) : v();
      });
    }, Rt.prototype.backendDB = function() {
      return this.idbdb;
    }, Rt.prototype.isOpen = function() {
      return this.idbdb !== null;
    }, Rt.prototype.hasBeenClosed = function() {
      var t = this._state.dbOpenError;
      return t && t.name === "DatabaseClosed";
    }, Rt.prototype.hasFailed = function() {
      return this._state.dbOpenError !== null;
    }, Rt.prototype.dynamicallyOpened = function() {
      return this._state.autoSchema;
    }, Object.defineProperty(Rt.prototype, "tables", { get: function() {
      var t = this;
      return S(this._allTables).map(function(a) {
        return t._allTables[a];
      });
    }, enumerable: !1, configurable: !0 }), Rt.prototype.transaction = function() {
      var t = (function(a, i, l) {
        var p = arguments.length;
        if (p < 2) throw new ve.InvalidArgument("Too few arguments");
        for (var f = new Array(p - 1); --p; ) f[p - 1] = arguments[p];
        return l = f.pop(), [a, Je(f), l];
      }).apply(this, arguments);
      return this._transaction.apply(this, t);
    }, Rt.prototype._transaction = function(t, a, i) {
      var l = this, p = _e.trans;
      p && p.db === this && t.indexOf("!") === -1 || (p = null);
      var f, v, x = t.indexOf("?") !== -1;
      t = t.replace("!", "").replace("?", "");
      try {
        if (v = a.map(function(E) {
          if (E = E instanceof l.Table ? E.name : E, typeof E != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
          return E;
        }), t == "r" || t === vr) f = vr;
        else {
          if (t != "rw" && t != kr) throw new ve.InvalidArgument("Invalid transaction mode: " + t);
          f = kr;
        }
        if (p) {
          if (p.mode === vr && f === kr) {
            if (!x) throw new ve.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
            p = null;
          }
          p && v.forEach(function(E) {
            if (p && p.storeNames.indexOf(E) === -1) {
              if (!x) throw new ve.SubTransaction("Table " + E + " not included in parent transaction.");
              p = null;
            }
          }), x && p && !p.active && (p = null);
        }
      } catch (E) {
        return p ? p._promise(null, function(N, M) {
          M(E);
        }) : Lt(E);
      }
      var A = (function E(N, M, F, T, R) {
        return P.resolve().then(function() {
          var O = _e.transless || _e, L = N._createTransaction(M, F, N._dbSchema, T);
          if (L.explicit = !0, O = { trans: L, transless: O }, T) L.idbtrans = T.idbtrans;
          else try {
            L.create(), L.idbtrans._explicit = !0, N._state.PR1398_maxLoop = 3;
          } catch (Z) {
            return Z.name === je.InvalidState && N.isOpen() && 0 < --N._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), N.close({ disableAutoOpen: !1 }), N.open().then(function() {
              return E(N, M, F, null, R);
            })) : Lt(Z);
          }
          var K, $ = D(R);
          return $ && Kn(), O = P.follow(function() {
            var Z;
            (K = R.call(L, L)) && ($ ? (Z = xn.bind(null, null), K.then(Z, Z)) : typeof K.next == "function" && typeof K.throw == "function" && (K = Za(K)));
          }, O), (K && typeof K.then == "function" ? P.resolve(K).then(function(Z) {
            return L.active ? Z : Lt(new ve.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
          }) : O.then(function() {
            return K;
          })).then(function(Z) {
            return T && L._resolve(), L._completion.then(function() {
              return Z;
            });
          }).catch(function(Z) {
            return L._reject(Z), Lt(Z);
          });
        });
      }).bind(null, this, f, v, p, i);
      return p ? p._promise(f, A, "lock") : _e.trans ? $n(_e.transless, function() {
        return l._whenReady(A);
      }) : this._whenReady(A);
    }, Rt.prototype.table = function(t) {
      if (!X(this._allTables, t)) throw new ve.InvalidTable("Table ".concat(t, " does not exist"));
      return this._allTables[t];
    }, Rt);
    function Rt(t, a) {
      var i = this;
      this._middlewares = {}, this.verno = 0;
      var l = Rt.dependencies;
      this._options = a = d({ addons: Rt.addons, autoOpen: !0, indexedDB: l.indexedDB, IDBKeyRange: l.IDBKeyRange, cache: "cloned" }, a), this._deps = { indexedDB: a.indexedDB, IDBKeyRange: a.IDBKeyRange }, l = a.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
      var p, f, v, x, A, E = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: C, dbReadyPromise: null, cancelOpen: C, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: a.autoOpen };
      E.dbReadyPromise = new P(function(M) {
        E.dbReadyResolve = M;
      }), E.openCanceller = new P(function(M, F) {
        E.cancelOpen = F;
      }), this._state = E, this.name = t, this.on = ra(this, "populate", "blocked", "versionchange", "close", { ready: [gt, C] }), this.once = function(M, F) {
        var T = function() {
          for (var R = [], O = 0; O < arguments.length; O++) R[O] = arguments[O];
          i.on(M).unsubscribe(T), F.apply(i, R);
        };
        return i.on(M, T);
      }, this.on.ready.subscribe = Ce(this.on.ready.subscribe, function(M) {
        return function(F, T) {
          Rt.vip(function() {
            var R, O = i._state;
            O.openComplete ? (O.dbOpenError || P.resolve().then(F), T && M(F)) : O.onReadyBeingFired ? (O.onReadyBeingFired.push(F), T && M(F)) : (M(F), R = i, T || M(function L() {
              R.on.ready.unsubscribe(F), R.on.ready.unsubscribe(L);
            }));
          });
        };
      }), this.Collection = (p = this, oa(Va.prototype, function(K, L) {
        this.db = p;
        var T = Ba, R = null;
        if (L) try {
          T = L();
        } catch ($) {
          R = $;
        }
        var O = K._ctx, L = O.table, K = L.hook.reading.fire;
        this._ctx = { table: L, index: O.index, isPrimKey: !O.index || L.schema.primKey.keyPath && O.index === L.schema.primKey.name, range: T, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: R, or: O.or, valueMapper: K !== H ? K : null };
      })), this.Table = (f = this, oa(Pr.prototype, function(M, F, T) {
        this.db = f, this._tx = T, this.name = M, this.schema = F, this.hook = f._allTables[M] ? f._allTables[M].hook : ra(null, { creating: [Oe, C], reading: [G, H], updating: [Be, C], deleting: [Ke, C] });
      })), this.Transaction = (v = this, oa(Tt.prototype, function(M, F, T, R, O) {
        var L = this;
        M !== "readonly" && F.forEach(function(K) {
          K = (K = T[K]) === null || K === void 0 ? void 0 : K.yProps, K && (F = F.concat(K.map(function($) {
            return $.updatesTable;
          })));
        }), this.db = v, this.mode = M, this.storeNames = F, this.schema = T, this.chromeTransactionDurability = R, this.idbtrans = null, this.on = ra(this, "complete", "error", "abort"), this.parent = O || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new P(function(K, $) {
          L._resolve = K, L._reject = $;
        }), this._completion.then(function() {
          L.active = !1, L.on.complete.fire();
        }, function(K) {
          var $ = L.active;
          return L.active = !1, L.on.error.fire(K), L.parent ? L.parent._reject(K) : $ && L.idbtrans && L.idbtrans.abort(), Lt(K);
        });
      })), this.Version = (x = this, oa(Zr.prototype, function(M) {
        this.db = x, this._cfg = { version: M, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
      })), this.WhereClause = (A = this, oa(fn.prototype, function(M, F, T) {
        if (this.db = A, this._ctx = { table: M, index: F === ":id" ? null : F, or: T }, this._cmp = this._ascending = Pe, this._descending = function(R, O) {
          return Pe(O, R);
        }, this._max = function(R, O) {
          return 0 < Pe(R, O) ? R : O;
        }, this._min = function(R, O) {
          return Pe(R, O) < 0 ? R : O;
        }, this._IDBKeyRange = A._deps.IDBKeyRange, !this._IDBKeyRange) throw new ve.MissingAPI();
      })), this.on("versionchange", function(M) {
        0 < M.newVersion ? console.warn("Another connection wants to upgrade database '".concat(i.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(i.name, "'. Closing db now to resume the delete request.")), i.close({ disableAutoOpen: !1 });
      }), this.on("blocked", function(M) {
        !M.newVersion || M.newVersion < M.oldVersion ? console.warn("Dexie.delete('".concat(i.name, "') was blocked")) : console.warn("Upgrade '".concat(i.name, "' blocked by other connection holding version ").concat(M.oldVersion / 10));
      }), this._maxKey = Bn(a.IDBKeyRange), this._createTransaction = function(M, F, T, R) {
        return new i.Transaction(M, F, T, i._options.chromeTransactionDurability, R);
      }, this._fireOnBlocked = function(M) {
        i.on("blocked").fire(M), Gn.filter(function(F) {
          return F.name === i.name && F !== i && !F._state.vcFired;
        }).map(function(F) {
          return F.on("versionchange").fire(M);
        });
      }, this.use(er), this.use(xo), this.use(Po), this.use(Xr), this.use(So);
      var N = new Proxy(this, { get: function(M, F, T) {
        if (F === "_vip") return !0;
        if (F === "table") return function(O) {
          return Ea(i.table(O), N);
        };
        var R = Reflect.get(M, F, T);
        return R instanceof Pr ? Ea(R, N) : F === "tables" ? R.map(function(O) {
          return Ea(O, N);
        }) : F === "_createTransaction" ? function() {
          return Ea(R.apply(this, arguments), N);
        } : R;
      } });
      this.vip = N, l.forEach(function(M) {
        return M(i);
      });
    }
    var ar, mn = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", eo = (Dr.prototype.subscribe = function(t, a, i) {
      return this._subscribe(t && typeof t != "function" ? t : { next: t, error: a, complete: i });
    }, Dr.prototype[mn] = function() {
      return this;
    }, Dr);
    function Dr(t) {
      this._subscribe = t;
    }
    try {
      ar = { indexedDB: m.indexedDB || m.mozIndexedDB || m.webkitIndexedDB || m.msIndexedDB, IDBKeyRange: m.IDBKeyRange || m.webkitIDBKeyRange };
    } catch {
      ar = { indexedDB: null, IDBKeyRange: null };
    }
    function Or(t) {
      var a, i = !1, l = new eo(function(p) {
        var f = D(t), v, x = !1, A = {}, E = {}, N = { get closed() {
          return x;
        }, unsubscribe: function() {
          x || (x = !0, v && v.abort(), M && On.storagemutated.unsubscribe(T));
        } };
        p.start && p.start(N);
        var M = !1, F = function() {
          return br(R);
        }, T = function(O) {
          An(A, O), En(E, A) && F();
        }, R = function() {
          var O, L, K;
          !x && ar.indexedDB && (A = {}, O = {}, v && v.abort(), v = new AbortController(), K = function($) {
            var Z = Gt();
            try {
              f && Kn();
              var ee = oe(t, $);
              return ee = f ? ee.finally(xn) : ee;
            } finally {
              Z && an();
            }
          }(L = { subscr: O, signal: v.signal, requery: F, querier: t, trans: null }), Promise.resolve(K).then(function($) {
            i = !0, a = $, x || L.signal.aborted || (A = {}, function(Z) {
              for (var ee in Z) if (X(Z, ee)) return;
              return 1;
            }(E = O) || M || (On(Vt, T), M = !0), br(function() {
              return !x && p.next && p.next($);
            }));
          }, function($) {
            i = !1, ["DatabaseClosedError", "AbortError"].includes($ == null ? void 0 : $.name) || x || br(function() {
              x || p.error && p.error($);
            });
          }));
        };
        return setTimeout(F, 0), N;
      });
      return l.hasValue = function() {
        return i;
      }, l.getValue = function() {
        return a;
      }, l;
    }
    var yn = _n;
    function _a(t) {
      var a = Vn;
      try {
        Vn = !0, On.storagemutated.fire(t), Aa(t, !0);
      } finally {
        Vn = a;
      }
    }
    j(yn, d(d({}, Nt), { delete: function(t) {
      return new yn(t, { addons: [] }).delete();
    }, exists: function(t) {
      return new yn(t, { addons: [] }).open().then(function(a) {
        return a.close(), !0;
      }).catch("NoSuchDatabaseError", function() {
        return !1;
      });
    }, getDatabaseNames: function(t) {
      try {
        return a = yn.dependencies, i = a.indexedDB, a = a.IDBKeyRange, (Ln(i) ? Promise.resolve(i.databases()).then(function(l) {
          return l.map(function(p) {
            return p.name;
          }).filter(function(p) {
            return p !== va;
          });
        }) : nn(i, a).toCollection().primaryKeys()).then(t);
      } catch {
        return Lt(new ve.MissingAPI());
      }
      var a, i;
    }, defineClass: function() {
      return function(t) {
        _(this, t);
      };
    }, ignoreTransaction: function(t) {
      return _e.trans ? $n(_e.transless, t) : t();
    }, vip: za, async: function(t) {
      return function() {
        try {
          var a = Za(t.apply(this, arguments));
          return a && typeof a.then == "function" ? a : P.resolve(a);
        } catch (i) {
          return Lt(i);
        }
      };
    }, spawn: function(t, a, i) {
      try {
        var l = Za(t.apply(i, a || []));
        return l && typeof l.then == "function" ? l : P.resolve(l);
      } catch (p) {
        return Lt(p);
      }
    }, currentTransaction: { get: function() {
      return _e.trans || null;
    } }, waitFor: function(t, a) {
      return a = P.resolve(typeof t == "function" ? yn.ignoreTransaction(t) : t).timeout(a || 6e4), _e.trans ? _e.trans.waitFor(a) : a;
    }, Promise: P, debug: { get: function() {
      return Re;
    }, set: function(t) {
      dn(t);
    } }, derive: ge, extend: _, props: j, override: Ce, Events: ra, on: On, liveQuery: Or, extendObservabilitySet: An, getByKeyPath: se, setByKeyPath: ce, delByKeyPath: function(t, a) {
      typeof a == "string" ? ce(t, a, void 0) : "length" in a && [].map.call(a, function(i) {
        ce(t, i, void 0);
      });
    }, shallowClone: dt, deepClone: Fe, getObjectDiff: Ar, cmp: Pe, asap: Ie, minKey: -1 / 0, addons: [], connections: Gn, errnames: je, dependencies: ar, cache: gn, semVer: "4.2.1", version: "4.2.1".split(".").map(function(t) {
      return parseInt(t);
    }).reduce(function(t, a, i) {
      return t + a / Math.pow(10, 2 * i);
    }) })), yn.maxKey = Bn(yn.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (On(Vt, function(t) {
      Vn || (t = new CustomEvent(Sn, { detail: t }), Vn = !0, dispatchEvent(t), Vn = !1);
    }), addEventListener(Sn, function(t) {
      t = t.detail, Vn || _a(t);
    }));
    var wa, Vn = !1, to = function() {
    };
    return typeof BroadcastChannel < "u" && ((to = function() {
      (wa = new BroadcastChannel(Sn)).onmessage = function(t) {
        return t.data && _a(t.data);
      };
    })(), typeof wa.unref == "function" && wa.unref(), On(Vt, function(t) {
      Vn || wa.postMessage(t);
    })), typeof addEventListener < "u" && (addEventListener("pagehide", function(t) {
      if (!_n.disableBfCache && t.persisted) {
        Re && console.debug("Dexie: handling persisted pagehide"), wa != null && wa.close();
        for (var a = 0, i = Gn; a < i.length; a++) i[a].close({ disableAutoOpen: !1 });
      }
    }), addEventListener("pageshow", function(t) {
      !_n.disableBfCache && t.persisted && (Re && console.debug("Dexie: handling persisted pageshow"), to(), _a({ all: new Zt(-1 / 0, [[]]) }));
    })), P.rejectionMapper = function(t, a) {
      return !t || t instanceof Ae || t instanceof TypeError || t instanceof SyntaxError || !t.name || !Ft[t.name] ? t : (a = new Ft[t.name](a || t.message, t), "stack" in t && we(a, "stack", { get: function() {
        return this.inner.stack;
      } }), a);
    }, dn(Re), d(_n, Object.freeze({ __proto__: null, Dexie: _n, liveQuery: Or, Entity: Ue, cmp: Pe, PropModification: Rn, replacePrefix: function(t, a) {
      return new Rn({ replacePrefix: [t, a] });
    }, add: function(t) {
      return new Rn({ add: t });
    }, remove: function(t) {
      return new Rn({ remove: t });
    }, default: _n, RangeSet: Zt, mergeRanges: Jn, rangesOverlap: Ir }), { default: _n }), _n;
  });
})(Us);
var tl = Us.exports;
const ri = /* @__PURE__ */ ui(tl), bs = Symbol.for("Dexie"), Ur = globalThis[bs] || (globalThis[bs] = ri);
if (ri.semVer !== Ur.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${ri.semVer} and ${Ur.semVer}`);
const {
  liveQuery: nl,
  mergeRanges: al,
  rangesOverlap: rl,
  RangeSet: ol,
  cmp: il,
  Entity: sl,
  PropModification: cl,
  replacePrefix: ul,
  add: ll,
  remove: dl,
  DexieYProvider: pl
} = Ur, fl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Dexie: Ur,
  DexieYProvider: pl,
  Entity: sl,
  PropModification: cl,
  RangeSet: ol,
  add: ll,
  cmp: il,
  default: Ur,
  liveQuery: nl,
  mergeRanges: al,
  rangesOverlap: rl,
  remove: dl,
  replacePrefix: ul
}, Symbol.toStringTag, { value: "Module" })), hl = /* @__PURE__ */ Fs(fl);
var gl = "Expected a function", vs = NaN, ml = "[object Symbol]", wl = /^\s+|\s+$/g, yl = /^[-+]0x[0-9a-f]+$/i, bl = /^0b[01]+$/i, vl = /^0o[0-7]+$/i, kl = parseInt, Sl = typeof hr == "object" && hr && hr.Object === Object && hr, Pl = typeof self == "object" && self && self.Object === Object && self, xl = Sl || Pl || Function("return this")(), Cl = Object.prototype, Ml = Cl.toString, Il = Math.max, Al = Math.min, Xo = function() {
  return xl.Date.now();
};
function El(h, o, c) {
  var d, y, m, S, I, _, U = 0, q = !1, X = !1, j = !0;
  if (typeof h != "function")
    throw new TypeError(gl);
  o = ks(o) || 0, oi(c) && (q = !!c.leading, X = "maxWait" in c, m = X ? Il(ks(c.maxWait) || 0, o) : m, j = "trailing" in c ? !!c.trailing : j);
  function W(se) {
    var ce = d, dt = y;
    return d = y = void 0, U = se, S = h.apply(dt, ce), S;
  }
  function we(se) {
    return U = se, I = setTimeout(Me, o), q ? W(se) : S;
  }
  function ge(se) {
    var ce = se - _, dt = se - U, at = o - ce;
    return X ? Al(at, m - dt) : at;
  }
  function z(se) {
    var ce = se - _, dt = se - U;
    return _ === void 0 || ce >= o || ce < 0 || X && dt >= m;
  }
  function Me() {
    var se = Xo();
    if (z(se))
      return Y(se);
    I = setTimeout(Me, ge(se));
  }
  function Y(se) {
    return I = void 0, j && d ? W(se) : (d = y = void 0, S);
  }
  function Ce() {
    I !== void 0 && clearTimeout(I), U = 0, d = _ = y = I = void 0;
  }
  function ne() {
    return I === void 0 ? S : Y(Xo());
  }
  function Ie() {
    var se = Xo(), ce = z(se);
    if (d = arguments, y = this, _ = se, ce) {
      if (I === void 0)
        return we(_);
      if (X)
        return I = setTimeout(Me, o), W(_);
    }
    return I === void 0 && (I = setTimeout(Me, o)), S;
  }
  return Ie.cancel = Ce, Ie.flush = ne, Ie;
}
function oi(h) {
  var o = typeof h;
  return !!h && (o == "object" || o == "function");
}
function _l(h) {
  return !!h && typeof h == "object";
}
function Tl(h) {
  return typeof h == "symbol" || _l(h) && Ml.call(h) == ml;
}
function ks(h) {
  if (typeof h == "number")
    return h;
  if (Tl(h))
    return vs;
  if (oi(h)) {
    var o = typeof h.valueOf == "function" ? h.valueOf() : h;
    h = oi(o) ? o + "" : o;
  }
  if (typeof h != "string")
    return h === 0 ? h : +h;
  h = h.replace(wl, "");
  var c = bl.test(h);
  return c || vl.test(h) ? kl(h.slice(2), c ? 2 : 8) : yl.test(h) ? vs : +h;
}
var Rl = El, ii = { exports: {} }, et = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ss;
function Dl() {
  if (Ss) return et;
  Ss = 1;
  var h = Symbol.for("react.transitional.element"), o = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), m = Symbol.for("react.consumer"), S = Symbol.for("react.context"), I = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), U = Symbol.for("react.memo"), q = Symbol.for("react.lazy"), X = Symbol.for("react.activity"), j = Symbol.iterator;
  function W(D) {
    return D === null || typeof D != "object" ? null : (D = j && D[j] || D["@@iterator"], typeof D == "function" ? D : null);
  }
  var we = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, ge = Object.assign, z = {};
  function Me(D, ue, Ae) {
    this.props = D, this.context = ue, this.refs = z, this.updater = Ae || we;
  }
  Me.prototype.isReactComponent = {}, Me.prototype.setState = function(D, ue) {
    if (typeof D != "object" && typeof D != "function" && D != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, D, ue, "setState");
  }, Me.prototype.forceUpdate = function(D) {
    this.updater.enqueueForceUpdate(this, D, "forceUpdate");
  };
  function Y() {
  }
  Y.prototype = Me.prototype;
  function Ce(D, ue, Ae) {
    this.props = D, this.context = ue, this.refs = z, this.updater = Ae || we;
  }
  var ne = Ce.prototype = new Y();
  ne.constructor = Ce, ge(ne, Me.prototype), ne.isPureReactComponent = !0;
  var Ie = Array.isArray;
  function se() {
  }
  var ce = { H: null, A: null, T: null, S: null }, dt = Object.prototype.hasOwnProperty;
  function at(D, ue, Ae) {
    var We = Ae.ref;
    return {
      $$typeof: h,
      type: D,
      key: ue,
      ref: We !== void 0 ? We : null,
      props: Ae
    };
  }
  function Je(D, ue) {
    return at(D.type, ue, D.props);
  }
  function ut(D) {
    return typeof D == "object" && D !== null && D.$$typeof === h;
  }
  function Dt(D) {
    var ue = { "=": "=0", ":": "=2" };
    return "$" + D.replace(/[=:]/g, function(Ae) {
      return ue[Ae];
    });
  }
  var Fe = /\/+/g;
  function Pt(D, ue) {
    return typeof D == "object" && D !== null && D.key != null ? Dt("" + D.key) : ue.toString(36);
  }
  function Le(D) {
    switch (D.status) {
      case "fulfilled":
        return D.value;
      case "rejected":
        throw D.reason;
      default:
        switch (typeof D.status == "string" ? D.then(se, se) : (D.status = "pending", D.then(
          function(ue) {
            D.status === "pending" && (D.status = "fulfilled", D.value = ue);
          },
          function(ue) {
            D.status === "pending" && (D.status = "rejected", D.reason = ue);
          }
        )), D.status) {
          case "fulfilled":
            return D.value;
          case "rejected":
            throw D.reason;
        }
    }
    throw D;
  }
  function bt(D, ue, Ae, We, Ye) {
    var Xe = typeof D;
    (Xe === "undefined" || Xe === "boolean") && (D = null);
    var je = !1;
    if (D === null) je = !0;
    else
      switch (Xe) {
        case "bigint":
        case "string":
        case "number":
          je = !0;
          break;
        case "object":
          switch (D.$$typeof) {
            case h:
            case o:
              je = !0;
              break;
            case q:
              return je = D._init, bt(
                je(D._payload),
                ue,
                Ae,
                We,
                Ye
              );
          }
      }
    if (je)
      return Ye = Ye(D), je = We === "" ? "." + Pt(D, 0) : We, Ie(Ye) ? (Ae = "", je != null && (Ae = je.replace(Fe, "$&/") + "/"), bt(Ye, ue, Ae, "", function(Ft) {
        return Ft;
      })) : Ye != null && (ut(Ye) && (Ye = Je(
        Ye,
        Ae + (Ye.key == null || D && D.key === Ye.key ? "" : ("" + Ye.key).replace(
          Fe,
          "$&/"
        ) + "/") + je
      )), ue.push(Ye)), 1;
    je = 0;
    var Ot = We === "" ? "." : We + ":";
    if (Ie(D))
      for (var ve = 0; ve < D.length; ve++)
        We = D[ve], Xe = Ot + Pt(We, ve), je += bt(
          We,
          ue,
          Ae,
          Xe,
          Ye
        );
    else if (ve = W(D), typeof ve == "function")
      for (D = ve.call(D), ve = 0; !(We = D.next()).done; )
        We = We.value, Xe = Ot + Pt(We, ve++), je += bt(
          We,
          ue,
          Ae,
          Xe,
          Ye
        );
    else if (Xe === "object") {
      if (typeof D.then == "function")
        return bt(
          Le(D),
          ue,
          Ae,
          We,
          Ye
        );
      throw ue = String(D), Error(
        "Objects are not valid as a React child (found: " + (ue === "[object Object]" ? "object with keys {" + Object.keys(D).join(", ") + "}" : ue) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return je;
  }
  function _t(D, ue, Ae) {
    if (D == null) return D;
    var We = [], Ye = 0;
    return bt(D, We, "", "", function(Xe) {
      return ue.call(Ae, Xe, Ye++);
    }), We;
  }
  function mt(D) {
    if (D._status === -1) {
      var ue = D._result;
      ue = ue(), ue.then(
        function(Ae) {
          (D._status === 0 || D._status === -1) && (D._status = 1, D._result = Ae);
        },
        function(Ae) {
          (D._status === 0 || D._status === -1) && (D._status = 2, D._result = Ae);
        }
      ), D._status === -1 && (D._status = 0, D._result = ue);
    }
    if (D._status === 1) return D._result.default;
    throw D._result;
  }
  var ht = typeof reportError == "function" ? reportError : function(D) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var ue = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof D == "object" && D !== null && typeof D.message == "string" ? String(D.message) : String(D),
        error: D
      });
      if (!window.dispatchEvent(ue)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", D);
      return;
    }
    console.error(D);
  }, Ge = {
    map: _t,
    forEach: function(D, ue, Ae) {
      _t(
        D,
        function() {
          ue.apply(this, arguments);
        },
        Ae
      );
    },
    count: function(D) {
      var ue = 0;
      return _t(D, function() {
        ue++;
      }), ue;
    },
    toArray: function(D) {
      return _t(D, function(ue) {
        return ue;
      }) || [];
    },
    only: function(D) {
      if (!ut(D))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return D;
    }
  };
  return et.Activity = X, et.Children = Ge, et.Component = Me, et.Fragment = c, et.Profiler = y, et.PureComponent = Ce, et.StrictMode = d, et.Suspense = _, et.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ce, et.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(D) {
      return ce.H.useMemoCache(D);
    }
  }, et.cache = function(D) {
    return function() {
      return D.apply(null, arguments);
    };
  }, et.cacheSignal = function() {
    return null;
  }, et.cloneElement = function(D, ue, Ae) {
    if (D == null)
      throw Error(
        "The argument must be a React element, but you passed " + D + "."
      );
    var We = ge({}, D.props), Ye = D.key;
    if (ue != null)
      for (Xe in ue.key !== void 0 && (Ye = "" + ue.key), ue)
        !dt.call(ue, Xe) || Xe === "key" || Xe === "__self" || Xe === "__source" || Xe === "ref" && ue.ref === void 0 || (We[Xe] = ue[Xe]);
    var Xe = arguments.length - 2;
    if (Xe === 1) We.children = Ae;
    else if (1 < Xe) {
      for (var je = Array(Xe), Ot = 0; Ot < Xe; Ot++)
        je[Ot] = arguments[Ot + 2];
      We.children = je;
    }
    return at(D.type, Ye, We);
  }, et.createContext = function(D) {
    return D = {
      $$typeof: S,
      _currentValue: D,
      _currentValue2: D,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, D.Provider = D, D.Consumer = {
      $$typeof: m,
      _context: D
    }, D;
  }, et.createElement = function(D, ue, Ae) {
    var We, Ye = {}, Xe = null;
    if (ue != null)
      for (We in ue.key !== void 0 && (Xe = "" + ue.key), ue)
        dt.call(ue, We) && We !== "key" && We !== "__self" && We !== "__source" && (Ye[We] = ue[We]);
    var je = arguments.length - 2;
    if (je === 1) Ye.children = Ae;
    else if (1 < je) {
      for (var Ot = Array(je), ve = 0; ve < je; ve++)
        Ot[ve] = arguments[ve + 2];
      Ye.children = Ot;
    }
    if (D && D.defaultProps)
      for (We in je = D.defaultProps, je)
        Ye[We] === void 0 && (Ye[We] = je[We]);
    return at(D, Xe, Ye);
  }, et.createRef = function() {
    return { current: null };
  }, et.forwardRef = function(D) {
    return { $$typeof: I, render: D };
  }, et.isValidElement = ut, et.lazy = function(D) {
    return {
      $$typeof: q,
      _payload: { _status: -1, _result: D },
      _init: mt
    };
  }, et.memo = function(D, ue) {
    return {
      $$typeof: U,
      type: D,
      compare: ue === void 0 ? null : ue
    };
  }, et.startTransition = function(D) {
    var ue = ce.T, Ae = {};
    ce.T = Ae;
    try {
      var We = D(), Ye = ce.S;
      Ye !== null && Ye(Ae, We), typeof We == "object" && We !== null && typeof We.then == "function" && We.then(se, ht);
    } catch (Xe) {
      ht(Xe);
    } finally {
      ue !== null && Ae.types !== null && (ue.types = Ae.types), ce.T = ue;
    }
  }, et.unstable_useCacheRefresh = function() {
    return ce.H.useCacheRefresh();
  }, et.use = function(D) {
    return ce.H.use(D);
  }, et.useActionState = function(D, ue, Ae) {
    return ce.H.useActionState(D, ue, Ae);
  }, et.useCallback = function(D, ue) {
    return ce.H.useCallback(D, ue);
  }, et.useContext = function(D) {
    return ce.H.useContext(D);
  }, et.useDebugValue = function() {
  }, et.useDeferredValue = function(D, ue) {
    return ce.H.useDeferredValue(D, ue);
  }, et.useEffect = function(D, ue) {
    return ce.H.useEffect(D, ue);
  }, et.useEffectEvent = function(D) {
    return ce.H.useEffectEvent(D);
  }, et.useId = function() {
    return ce.H.useId();
  }, et.useImperativeHandle = function(D, ue, Ae) {
    return ce.H.useImperativeHandle(D, ue, Ae);
  }, et.useInsertionEffect = function(D, ue) {
    return ce.H.useInsertionEffect(D, ue);
  }, et.useLayoutEffect = function(D, ue) {
    return ce.H.useLayoutEffect(D, ue);
  }, et.useMemo = function(D, ue) {
    return ce.H.useMemo(D, ue);
  }, et.useOptimistic = function(D, ue) {
    return ce.H.useOptimistic(D, ue);
  }, et.useReducer = function(D, ue, Ae) {
    return ce.H.useReducer(D, ue, Ae);
  }, et.useRef = function(D) {
    return ce.H.useRef(D);
  }, et.useState = function(D) {
    return ce.H.useState(D);
  }, et.useSyncExternalStore = function(D, ue, Ae) {
    return ce.H.useSyncExternalStore(
      D,
      ue,
      Ae
    );
  }, et.useTransition = function() {
    return ce.H.useTransition();
  }, et.version = "19.2.4", et;
}
var Fr = { exports: {} };
Fr.exports;
var Ps;
function Ol() {
  return Ps || (Ps = 1, function(h, o) {
    var c = {};
    /**
     * @license React
     * react.development.js
     *
     * Copyright (c) Meta Platforms, Inc. and affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    c.NODE_ENV !== "production" && function() {
      function d(g, P) {
        Object.defineProperty(S.prototype, g, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              P[0],
              P[1]
            );
          }
        });
      }
      function y(g) {
        return g === null || typeof g != "object" ? null : (g = H && g[H] || g["@@iterator"], typeof g == "function" ? g : null);
      }
      function m(g, P) {
        g = (g = g.constructor) && (g.displayName || g.name) || "ReactClass";
        var ie = g + "." + P;
        G[ie] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          P,
          g
        ), G[ie] = !0);
      }
      function S(g, P, ie) {
        this.props = g, this.context = P, this.refs = Ke, this.updater = ie || ae;
      }
      function I() {
      }
      function _(g, P, ie) {
        this.props = g, this.context = P, this.refs = Ke, this.updater = ie || ae;
      }
      function U() {
      }
      function q(g) {
        return "" + g;
      }
      function X(g) {
        try {
          q(g);
          var P = !1;
        } catch {
          P = !0;
        }
        if (P) {
          P = console;
          var ie = P.error, le = typeof Symbol == "function" && Symbol.toStringTag && g[Symbol.toStringTag] || g.constructor.name || "Object";
          return ie.call(
            P,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            le
          ), q(g);
        }
      }
      function j(g) {
        if (g == null) return null;
        if (typeof g == "function")
          return g.$$typeof === gt ? null : g.displayName || g.name || null;
        if (typeof g == "string") return g;
        switch (g) {
          case ue:
            return "Fragment";
          case We:
            return "Profiler";
          case Ae:
            return "StrictMode";
          case Ot:
            return "Suspense";
          case ve:
            return "SuspenseList";
          case C:
            return "Activity";
        }
        if (typeof g == "object")
          switch (typeof g.tag == "number" && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), g.$$typeof) {
            case D:
              return "Portal";
            case Xe:
              return g.displayName || "Context";
            case Ye:
              return (g._context.displayName || "Context") + ".Consumer";
            case je:
              var P = g.render;
              return g = g.displayName, g || (g = P.displayName || P.name || "", g = g !== "" ? "ForwardRef(" + g + ")" : "ForwardRef"), g;
            case Ft:
              return P = g.displayName || null, P !== null ? P : j(g.type) || "Memo";
            case Nt:
              P = g._payload, g = g._init;
              try {
                return j(g(P));
              } catch {
              }
          }
        return null;
      }
      function W(g) {
        if (g === ue) return "<>";
        if (typeof g == "object" && g !== null && g.$$typeof === Nt)
          return "<...>";
        try {
          var P = j(g);
          return P ? "<" + P + ">" : "<...>";
        } catch {
          return "<...>";
        }
      }
      function we() {
        var g = Re.A;
        return g === null ? null : g.getOwner();
      }
      function ge() {
        return Error("react-stack-top-frame");
      }
      function z(g) {
        if (dn.call(g, "key")) {
          var P = Object.getOwnPropertyDescriptor(g, "key").get;
          if (P && P.isReactWarning) return !1;
        }
        return g.key !== void 0;
      }
      function Me(g, P) {
        function ie() {
          pn || (pn = !0, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            P
          ));
        }
        ie.isReactWarning = !0, Object.defineProperty(g, "key", {
          get: ie,
          configurable: !0
        });
      }
      function Y() {
        var g = j(this.type);
        return it[g] || (it[g] = !0, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        )), g = this.props.ref, g !== void 0 ? g : null;
      }
      function Ce(g, P, ie, le, Te, tt) {
        var $e = ie.ref;
        return g = {
          $$typeof: Ge,
          type: g,
          key: P,
          props: ie,
          _owner: le
        }, ($e !== void 0 ? $e : null) !== null ? Object.defineProperty(g, "ref", {
          enumerable: !1,
          get: Y
        }) : Object.defineProperty(g, "ref", { enumerable: !1, value: null }), g._store = {}, Object.defineProperty(g._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: 0
        }), Object.defineProperty(g, "_debugInfo", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: null
        }), Object.defineProperty(g, "_debugStack", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: Te
        }), Object.defineProperty(g, "_debugTask", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: tt
        }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
      }
      function ne(g, P) {
        return P = Ce(
          g.type,
          P,
          g.props,
          g._owner,
          g._debugStack,
          g._debugTask
        ), g._store && (P._store.validated = g._store.validated), P;
      }
      function Ie(g) {
        se(g) ? g._store && (g._store.validated = 1) : typeof g == "object" && g !== null && g.$$typeof === Nt && (g._payload.status === "fulfilled" ? se(g._payload.value) && g._payload.value._store && (g._payload.value._store.validated = 1) : g._store && (g._store.validated = 1));
      }
      function se(g) {
        return typeof g == "object" && g !== null && g.$$typeof === Ge;
      }
      function ce(g) {
        var P = { "=": "=0", ":": "=2" };
        return "$" + g.replace(/[=:]/g, function(ie) {
          return P[ie];
        });
      }
      function dt(g, P) {
        return typeof g == "object" && g !== null && g.key != null ? (X(g.key), ce("" + g.key)) : P.toString(36);
      }
      function at(g) {
        switch (g.status) {
          case "fulfilled":
            return g.value;
          case "rejected":
            throw g.reason;
          default:
            switch (typeof g.status == "string" ? g.then(U, U) : (g.status = "pending", g.then(
              function(P) {
                g.status === "pending" && (g.status = "fulfilled", g.value = P);
              },
              function(P) {
                g.status === "pending" && (g.status = "rejected", g.reason = P);
              }
            )), g.status) {
              case "fulfilled":
                return g.value;
              case "rejected":
                throw g.reason;
            }
        }
        throw g;
      }
      function Je(g, P, ie, le, Te) {
        var tt = typeof g;
        (tt === "undefined" || tt === "boolean") && (g = null);
        var $e = !1;
        if (g === null) $e = !0;
        else
          switch (tt) {
            case "bigint":
            case "string":
            case "number":
              $e = !0;
              break;
            case "object":
              switch (g.$$typeof) {
                case Ge:
                case D:
                  $e = !0;
                  break;
                case Nt:
                  return $e = g._init, Je(
                    $e(g._payload),
                    P,
                    ie,
                    le,
                    Te
                  );
              }
          }
        if ($e) {
          $e = g, Te = Te($e);
          var st = le === "" ? "." + dt($e, 0) : le;
          return yt(Te) ? (ie = "", st != null && (ie = st.replace(cn, "$&/") + "/"), Je(Te, P, ie, "", function(Gt) {
            return Gt;
          })) : Te != null && (se(Te) && (Te.key != null && ($e && $e.key === Te.key || X(Te.key)), ie = ne(
            Te,
            ie + (Te.key == null || $e && $e.key === Te.key ? "" : ("" + Te.key).replace(
              cn,
              "$&/"
            ) + "/") + st
          ), le !== "" && $e != null && se($e) && $e.key == null && $e._store && !$e._store.validated && (ie._store.validated = 2), Te = ie), P.push(Te)), 1;
        }
        if ($e = 0, st = le === "" ? "." : le + ":", yt(g))
          for (var rt = 0; rt < g.length; rt++)
            le = g[rt], tt = st + dt(le, rt), $e += Je(
              le,
              P,
              ie,
              tt,
              Te
            );
        else if (rt = y(g), typeof rt == "function")
          for (rt === g.entries && (Ht || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), Ht = !0), g = rt.call(g), rt = 0; !(le = g.next()).done; )
            le = le.value, tt = st + dt(le, rt++), $e += Je(
              le,
              P,
              ie,
              tt,
              Te
            );
        else if (tt === "object") {
          if (typeof g.then == "function")
            return Je(
              at(g),
              P,
              ie,
              le,
              Te
            );
          throw P = String(g), Error(
            "Objects are not valid as a React child (found: " + (P === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : P) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return $e;
      }
      function ut(g, P, ie) {
        if (g == null) return g;
        var le = [], Te = 0;
        return Je(g, le, "", "", function(tt) {
          return P.call(ie, tt, Te++);
        }), le;
      }
      function Dt(g) {
        if (g._status === -1) {
          var P = g._ioInfo;
          P != null && (P.start = P.end = performance.now()), P = g._result;
          var ie = P();
          if (ie.then(
            function(Te) {
              if (g._status === 0 || g._status === -1) {
                g._status = 1, g._result = Te;
                var tt = g._ioInfo;
                tt != null && (tt.end = performance.now()), ie.status === void 0 && (ie.status = "fulfilled", ie.value = Te);
              }
            },
            function(Te) {
              if (g._status === 0 || g._status === -1) {
                g._status = 2, g._result = Te;
                var tt = g._ioInfo;
                tt != null && (tt.end = performance.now()), ie.status === void 0 && (ie.status = "rejected", ie.reason = Te);
              }
            }
          ), P = g._ioInfo, P != null) {
            P.value = ie;
            var le = ie.displayName;
            typeof le == "string" && (P.name = le);
          }
          g._status === -1 && (g._status = 0, g._result = ie);
        }
        if (g._status === 1)
          return P = g._result, P === void 0 && console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
            P
          ), "default" in P || console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
            P
          ), P.default;
        throw g._result;
      }
      function Fe() {
        var g = Re.H;
        return g === null && console.error(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
        ), g;
      }
      function Pt() {
        Re.asyncTransitions--;
      }
      function Le(g) {
        if (Mt === null)
          try {
            var P = ("require" + Math.random()).slice(0, 7);
            Mt = (h && h[P]).call(
              h,
              "timers"
            ).setImmediate;
          } catch {
            Mt = function(le) {
              vt === !1 && (vt = !0, typeof MessageChannel > "u" && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var Te = new MessageChannel();
              Te.port1.onmessage = le, Te.port2.postMessage(void 0);
            };
          }
        return Mt(g);
      }
      function bt(g) {
        return 1 < g.length && typeof AggregateError == "function" ? new AggregateError(g) : g[0];
      }
      function _t(g, P) {
        P !== Yt - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        ), Yt = P;
      }
      function mt(g, P, ie) {
        var le = Re.actQueue;
        if (le !== null)
          if (le.length !== 0)
            try {
              ht(le), Le(function() {
                return mt(g, P, ie);
              });
              return;
            } catch (Te) {
              Re.thrownErrors.push(Te);
            }
          else Re.actQueue = null;
        0 < Re.thrownErrors.length ? (le = bt(Re.thrownErrors), Re.thrownErrors.length = 0, ie(le)) : P(g);
      }
      function ht(g) {
        if (!_e) {
          _e = !0;
          var P = 0;
          try {
            for (; P < g.length; P++) {
              var ie = g[P];
              do {
                Re.didUsePromise = !1;
                var le = ie(!1);
                if (le !== null) {
                  if (Re.didUsePromise) {
                    g[P] = ie, g.splice(0, P);
                    return;
                  }
                  ie = le;
                } else break;
              } while (!0);
            }
            g.length = 0;
          } catch (Te) {
            g.splice(0, P + 1), Re.thrownErrors.push(Te);
          } finally {
            _e = !1;
          }
        }
      }
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var Ge = Symbol.for("react.transitional.element"), D = Symbol.for("react.portal"), ue = Symbol.for("react.fragment"), Ae = Symbol.for("react.strict_mode"), We = Symbol.for("react.profiler"), Ye = Symbol.for("react.consumer"), Xe = Symbol.for("react.context"), je = Symbol.for("react.forward_ref"), Ot = Symbol.for("react.suspense"), ve = Symbol.for("react.suspense_list"), Ft = Symbol.for("react.memo"), Nt = Symbol.for("react.lazy"), C = Symbol.for("react.activity"), H = Symbol.iterator, G = {}, ae = {
        isMounted: function() {
          return !1;
        },
        enqueueForceUpdate: function(g) {
          m(g, "forceUpdate");
        },
        enqueueReplaceState: function(g) {
          m(g, "replaceState");
        },
        enqueueSetState: function(g) {
          m(g, "setState");
        }
      }, Oe = Object.assign, Ke = {};
      Object.freeze(Ke), S.prototype.isReactComponent = {}, S.prototype.setState = function(g, P) {
        if (typeof g != "object" && typeof g != "function" && g != null)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, g, P, "setState");
      }, S.prototype.forceUpdate = function(g) {
        this.updater.enqueueForceUpdate(this, g, "forceUpdate");
      };
      var Be = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      };
      for (Ve in Be)
        Be.hasOwnProperty(Ve) && d(Ve, Be[Ve]);
      I.prototype = S.prototype, Be = _.prototype = new I(), Be.constructor = _, Oe(Be, S.prototype), Be.isPureReactComponent = !0;
      var yt = Array.isArray, gt = Symbol.for("react.client.reference"), Re = {
        H: null,
        A: null,
        T: null,
        S: null,
        actQueue: null,
        asyncTransitions: 0,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1,
        didUsePromise: !1,
        thrownErrors: [],
        getCurrentStack: null,
        recentlyCreatedOwnerStacks: 0
      }, dn = Object.prototype.hasOwnProperty, Jt = console.createTask ? console.createTask : function() {
        return null;
      };
      Be = {
        react_stack_bottom_frame: function(g) {
          return g();
        }
      };
      var pn, Ut, it = {}, Se = Be.react_stack_bottom_frame.bind(
        Be,
        ge
      )(), pt = Jt(W(ge)), Ht = !1, cn = /\/+/g, jt = typeof reportError == "function" ? reportError : function(g) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
          var P = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: typeof g == "object" && g !== null && typeof g.message == "string" ? String(g.message) : String(g),
            error: g
          });
          if (!window.dispatchEvent(P)) return;
        } else if (typeof process == "object" && typeof process.emit == "function") {
          process.emit("uncaughtException", g);
          return;
        }
        console.error(g);
      }, vt = !1, Mt = null, Yt = 0, Kt = !1, _e = !1, $t = typeof queueMicrotask == "function" ? function(g) {
        queueMicrotask(function() {
          return queueMicrotask(g);
        });
      } : Le;
      Be = Object.freeze({
        __proto__: null,
        c: function(g) {
          return Fe().useMemoCache(g);
        }
      });
      var Ve = {
        map: ut,
        forEach: function(g, P, ie) {
          ut(
            g,
            function() {
              P.apply(this, arguments);
            },
            ie
          );
        },
        count: function(g) {
          var P = 0;
          return ut(g, function() {
            P++;
          }), P;
        },
        toArray: function(g) {
          return ut(g, function(P) {
            return P;
          }) || [];
        },
        only: function(g) {
          if (!se(g))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return g;
        }
      };
      o.Activity = C, o.Children = Ve, o.Component = S, o.Fragment = ue, o.Profiler = We, o.PureComponent = _, o.StrictMode = Ae, o.Suspense = Ot, o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Re, o.__COMPILER_RUNTIME = Be, o.act = function(g) {
        var P = Re.actQueue, ie = Yt;
        Yt++;
        var le = Re.actQueue = P !== null ? P : [], Te = !1;
        try {
          var tt = g();
        } catch (rt) {
          Re.thrownErrors.push(rt);
        }
        if (0 < Re.thrownErrors.length)
          throw _t(P, ie), g = bt(Re.thrownErrors), Re.thrownErrors.length = 0, g;
        if (tt !== null && typeof tt == "object" && typeof tt.then == "function") {
          var $e = tt;
          return $t(function() {
            Te || Kt || (Kt = !0, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          }), {
            then: function(rt, Gt) {
              Te = !0, $e.then(
                function(an) {
                  if (_t(P, ie), ie === 0) {
                    try {
                      ht(le), Le(function() {
                        return mt(
                          an,
                          rt,
                          Gt
                        );
                      });
                    } catch (jn) {
                      Re.thrownErrors.push(jn);
                    }
                    if (0 < Re.thrownErrors.length) {
                      var Xn = bt(
                        Re.thrownErrors
                      );
                      Re.thrownErrors.length = 0, Gt(Xn);
                    }
                  } else rt(an);
                },
                function(an) {
                  _t(P, ie), 0 < Re.thrownErrors.length && (an = bt(
                    Re.thrownErrors
                  ), Re.thrownErrors.length = 0), Gt(an);
                }
              );
            }
          };
        }
        var st = tt;
        if (_t(P, ie), ie === 0 && (ht(le), le.length !== 0 && $t(function() {
          Te || Kt || (Kt = !0, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), Re.actQueue = null), 0 < Re.thrownErrors.length)
          throw g = bt(Re.thrownErrors), Re.thrownErrors.length = 0, g;
        return {
          then: function(rt, Gt) {
            Te = !0, ie === 0 ? (Re.actQueue = le, Le(function() {
              return mt(
                st,
                rt,
                Gt
              );
            })) : rt(st);
          }
        };
      }, o.cache = function(g) {
        return function() {
          return g.apply(null, arguments);
        };
      }, o.cacheSignal = function() {
        return null;
      }, o.captureOwnerStack = function() {
        var g = Re.getCurrentStack;
        return g === null ? null : g();
      }, o.cloneElement = function(g, P, ie) {
        if (g == null)
          throw Error(
            "The argument must be a React element, but you passed " + g + "."
          );
        var le = Oe({}, g.props), Te = g.key, tt = g._owner;
        if (P != null) {
          var $e;
          e: {
            if (dn.call(P, "ref") && ($e = Object.getOwnPropertyDescriptor(
              P,
              "ref"
            ).get) && $e.isReactWarning) {
              $e = !1;
              break e;
            }
            $e = P.ref !== void 0;
          }
          $e && (tt = we()), z(P) && (X(P.key), Te = "" + P.key);
          for (st in P)
            !dn.call(P, st) || st === "key" || st === "__self" || st === "__source" || st === "ref" && P.ref === void 0 || (le[st] = P[st]);
        }
        var st = arguments.length - 2;
        if (st === 1) le.children = ie;
        else if (1 < st) {
          $e = Array(st);
          for (var rt = 0; rt < st; rt++)
            $e[rt] = arguments[rt + 2];
          le.children = $e;
        }
        for (le = Ce(
          g.type,
          Te,
          le,
          tt,
          g._debugStack,
          g._debugTask
        ), Te = 2; Te < arguments.length; Te++)
          Ie(arguments[Te]);
        return le;
      }, o.createContext = function(g) {
        return g = {
          $$typeof: Xe,
          _currentValue: g,
          _currentValue2: g,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        }, g.Provider = g, g.Consumer = {
          $$typeof: Ye,
          _context: g
        }, g._currentRenderer = null, g._currentRenderer2 = null, g;
      }, o.createElement = function(g, P, ie) {
        for (var le = 2; le < arguments.length; le++)
          Ie(arguments[le]);
        le = {};
        var Te = null;
        if (P != null)
          for (rt in Ut || !("__self" in P) || "key" in P || (Ut = !0, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), z(P) && (X(P.key), Te = "" + P.key), P)
            dn.call(P, rt) && rt !== "key" && rt !== "__self" && rt !== "__source" && (le[rt] = P[rt]);
        var tt = arguments.length - 2;
        if (tt === 1) le.children = ie;
        else if (1 < tt) {
          for (var $e = Array(tt), st = 0; st < tt; st++)
            $e[st] = arguments[st + 2];
          Object.freeze && Object.freeze($e), le.children = $e;
        }
        if (g && g.defaultProps)
          for (rt in tt = g.defaultProps, tt)
            le[rt] === void 0 && (le[rt] = tt[rt]);
        Te && Me(
          le,
          typeof g == "function" ? g.displayName || g.name || "Unknown" : g
        );
        var rt = 1e4 > Re.recentlyCreatedOwnerStacks++;
        return Ce(
          g,
          Te,
          le,
          we(),
          rt ? Error("react-stack-top-frame") : Se,
          rt ? Jt(W(g)) : pt
        );
      }, o.createRef = function() {
        var g = { current: null };
        return Object.seal(g), g;
      }, o.forwardRef = function(g) {
        g != null && g.$$typeof === Ft ? console.error(
          "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
        ) : typeof g != "function" ? console.error(
          "forwardRef requires a render function but was given %s.",
          g === null ? "null" : typeof g
        ) : g.length !== 0 && g.length !== 2 && console.error(
          "forwardRef render functions accept exactly two parameters: props and ref. %s",
          g.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
        ), g != null && g.defaultProps != null && console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
        var P = { $$typeof: je, render: g }, ie;
        return Object.defineProperty(P, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return ie;
          },
          set: function(le) {
            ie = le, g.name || g.displayName || (Object.defineProperty(g, "name", { value: le }), g.displayName = le);
          }
        }), P;
      }, o.isValidElement = se, o.lazy = function(g) {
        g = { _status: -1, _result: g };
        var P = {
          $$typeof: Nt,
          _payload: g,
          _init: Dt
        }, ie = {
          name: "lazy",
          start: -1,
          end: -1,
          value: null,
          owner: null,
          debugStack: Error("react-stack-top-frame"),
          debugTask: console.createTask ? console.createTask("lazy()") : null
        };
        return g._ioInfo = ie, P._debugInfo = [{ awaited: ie }], P;
      }, o.memo = function(g, P) {
        g == null && console.error(
          "memo: The first argument must be a component. Instead received: %s",
          g === null ? "null" : typeof g
        ), P = {
          $$typeof: Ft,
          type: g,
          compare: P === void 0 ? null : P
        };
        var ie;
        return Object.defineProperty(P, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return ie;
          },
          set: function(le) {
            ie = le, g.name || g.displayName || (Object.defineProperty(g, "name", { value: le }), g.displayName = le);
          }
        }), P;
      }, o.startTransition = function(g) {
        var P = Re.T, ie = {};
        ie._updatedFibers = /* @__PURE__ */ new Set(), Re.T = ie;
        try {
          var le = g(), Te = Re.S;
          Te !== null && Te(ie, le), typeof le == "object" && le !== null && typeof le.then == "function" && (Re.asyncTransitions++, le.then(Pt, Pt), le.then(U, jt));
        } catch (tt) {
          jt(tt);
        } finally {
          P === null && ie._updatedFibers && (g = ie._updatedFibers.size, ie._updatedFibers.clear(), 10 < g && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), P !== null && ie.types !== null && (P.types !== null && P.types !== ie.types && console.error(
            "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
          ), P.types = ie.types), Re.T = P;
        }
      }, o.unstable_useCacheRefresh = function() {
        return Fe().useCacheRefresh();
      }, o.use = function(g) {
        return Fe().use(g);
      }, o.useActionState = function(g, P, ie) {
        return Fe().useActionState(
          g,
          P,
          ie
        );
      }, o.useCallback = function(g, P) {
        return Fe().useCallback(g, P);
      }, o.useContext = function(g) {
        var P = Fe();
        return g.$$typeof === Ye && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        ), P.useContext(g);
      }, o.useDebugValue = function(g, P) {
        return Fe().useDebugValue(g, P);
      }, o.useDeferredValue = function(g, P) {
        return Fe().useDeferredValue(g, P);
      }, o.useEffect = function(g, P) {
        return g == null && console.warn(
          "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), Fe().useEffect(g, P);
      }, o.useEffectEvent = function(g) {
        return Fe().useEffectEvent(g);
      }, o.useId = function() {
        return Fe().useId();
      }, o.useImperativeHandle = function(g, P, ie) {
        return Fe().useImperativeHandle(g, P, ie);
      }, o.useInsertionEffect = function(g, P) {
        return g == null && console.warn(
          "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), Fe().useInsertionEffect(g, P);
      }, o.useLayoutEffect = function(g, P) {
        return g == null && console.warn(
          "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), Fe().useLayoutEffect(g, P);
      }, o.useMemo = function(g, P) {
        return Fe().useMemo(g, P);
      }, o.useOptimistic = function(g, P) {
        return Fe().useOptimistic(g, P);
      }, o.useReducer = function(g, P, ie) {
        return Fe().useReducer(g, P, ie);
      }, o.useRef = function(g) {
        return Fe().useRef(g);
      }, o.useState = function(g) {
        return Fe().useState(g);
      }, o.useSyncExternalStore = function(g, P, ie) {
        return Fe().useSyncExternalStore(
          g,
          P,
          ie
        );
      }, o.useTransition = function() {
        return Fe().useTransition();
      }, o.version = "19.2.4", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
  }(Fr, Fr.exports)), Fr.exports;
}
var Wl = {};
Wl.NODE_ENV === "production" ? ii.exports = Dl() : ii.exports = Ol();
var wt = ii.exports, Bl = {
  area: !0,
  base: !0,
  br: !0,
  col: !0,
  embed: !0,
  hr: !0,
  img: !0,
  input: !0,
  link: !0,
  meta: !0,
  param: !0,
  source: !0,
  track: !0,
  wbr: !0
};
const Nl = /* @__PURE__ */ ui(Bl);
var Ll = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;
function xs(h) {
  var o = { type: "tag", name: "", voidElement: !1, attrs: {}, children: [] }, c = h.match(/<\/?([^\s]+?)[/\s>]/);
  if (c && (o.name = c[1], (Nl[c[1]] || h.charAt(h.length - 2) === "/") && (o.voidElement = !0), o.name.startsWith("!--"))) {
    var d = h.indexOf("-->");
    return { type: "comment", comment: d !== -1 ? h.slice(4, d) : "" };
  }
  for (var y = new RegExp(Ll), m = null; (m = y.exec(h)) !== null; ) if (m[0].trim()) if (m[1]) {
    var S = m[1].trim(), I = [S, ""];
    S.indexOf("=") > -1 && (I = S.split("=")), o.attrs[I[0]] = I[1], y.lastIndex--;
  } else m[2] && (o.attrs[m[2]] = m[3].trim().substring(1, m[3].length - 1));
  return o;
}
var Fl = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g, Vl = /^\s*$/, Ul = /* @__PURE__ */ Object.create(null);
function js(h, o) {
  switch (o.type) {
    case "text":
      return h + o.content;
    case "tag":
      return h += "<" + o.name + (o.attrs ? function(c) {
        var d = [];
        for (var y in c) d.push(y + '="' + c[y] + '"');
        return d.length ? " " + d.join(" ") : "";
      }(o.attrs) : "") + (o.voidElement ? "/>" : ">"), o.voidElement ? h : h + o.children.reduce(js, "") + "</" + o.name + ">";
    case "comment":
      return h + "<!--" + o.comment + "-->";
  }
}
var jl = { parse: function(h, o) {
  o || (o = {}), o.components || (o.components = Ul);
  var c, d = [], y = [], m = -1, S = !1;
  if (h.indexOf("<") !== 0) {
    var I = h.indexOf("<");
    d.push({ type: "text", content: I === -1 ? h : h.substring(0, I) });
  }
  return h.replace(Fl, function(_, U) {
    if (S) {
      if (_ !== "</" + c.name + ">") return;
      S = !1;
    }
    var q, X = _.charAt(1) !== "/", j = _.startsWith("<!--"), W = U + _.length, we = h.charAt(W);
    if (j) {
      var ge = xs(_);
      return m < 0 ? (d.push(ge), d) : ((q = y[m]).children.push(ge), d);
    }
    if (X && (m++, (c = xs(_)).type === "tag" && o.components[c.name] && (c.type = "component", S = !0), c.voidElement || S || !we || we === "<" || c.children.push({ type: "text", content: h.slice(W, h.indexOf("<", W)) }), m === 0 && d.push(c), (q = y[m - 1]) && q.children.push(c), y[m] = c), (!X || c.voidElement) && (m > -1 && (c.voidElement || c.name === _.slice(2, -1)) && (m--, c = m === -1 ? d : y[m]), !S && we !== "<" && we)) {
      q = m === -1 ? d : y[m].children;
      var z = h.indexOf("<", W), Me = h.slice(W, z === -1 ? void 0 : z);
      Vl.test(Me) && (Me = " "), (z > -1 && m + q.length >= 0 || Me !== " ") && q.push({ type: "text", content: Me });
    }
  }), d;
}, stringify: function(h) {
  return h.reduce(function(o, c) {
    return o + js("", c);
  }, "");
} };
function po() {
  if (console && console.warn) {
    for (var h = arguments.length, o = new Array(h), c = 0; c < h; c++)
      o[c] = arguments[c];
    kn(o[0]) && (o[0] = `react-i18next:: ${o[0]}`), console.warn(...o);
  }
}
const Cs = {};
function fo() {
  for (var h = arguments.length, o = new Array(h), c = 0; c < h; c++)
    o[c] = arguments[c];
  kn(o[0]) && Cs[o[0]] || (kn(o[0]) && (Cs[o[0]] = /* @__PURE__ */ new Date()), po(...o));
}
const Ks = (h, o) => () => {
  if (h.isInitialized)
    o();
  else {
    const c = () => {
      setTimeout(() => {
        h.off("initialized", c);
      }, 0), o();
    };
    h.on("initialized", c);
  }
}, Ms = (h, o, c) => {
  h.loadNamespaces(o, Ks(h, c));
}, Is = (h, o, c, d) => {
  kn(c) && (c = [c]), c.forEach((y) => {
    h.options.ns.indexOf(y) < 0 && h.options.ns.push(y);
  }), h.loadLanguages(o, Ks(h, d));
}, Kl = function(h, o) {
  let c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const d = o.languages[0], y = o.options ? o.options.fallbackLng : !1, m = o.languages[o.languages.length - 1];
  if (d.toLowerCase() === "cimode") return !0;
  const S = (I, _) => {
    const U = o.services.backendConnector.state[`${I}|${_}`];
    return U === -1 || U === 2;
  };
  return c.bindI18n && c.bindI18n.indexOf("languageChanging") > -1 && o.services.backendConnector.backend && o.isLanguageChangingTo && !S(o.isLanguageChangingTo, h) ? !1 : !!(o.hasResourceBundle(d, h) || !o.services.backendConnector.backend || o.options.resources && !o.options.partialBundledLanguages || S(d, h) && (!y || S(m, h)));
}, $l = function(h, o) {
  let c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return !o.languages || !o.languages.length ? (fo("i18n.languages were undefined or empty", o.languages), !0) : o.options.ignoreJSONStructure !== void 0 ? o.hasLoadedNamespace(h, {
    lng: c.lng,
    precheck: (y, m) => {
      if (c.bindI18n && c.bindI18n.indexOf("languageChanging") > -1 && y.services.backendConnector.backend && y.isLanguageChangingTo && !m(y.isLanguageChangingTo, h)) return !1;
    }
  }) : Kl(h, o, c);
}, $s = (h) => h.displayName || h.name || (kn(h) && h.length > 0 ? h : "Unknown"), kn = (h) => typeof h == "string", gr = (h) => typeof h == "object" && h !== null, Hl = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, Gl = {
  "&amp;": "&",
  "&#38;": "&",
  "&lt;": "<",
  "&#60;": "<",
  "&gt;": ">",
  "&#62;": ">",
  "&apos;": "'",
  "&#39;": "'",
  "&quot;": '"',
  "&#34;": '"',
  "&nbsp;": " ",
  "&#160;": " ",
  "&copy;": "©",
  "&#169;": "©",
  "&reg;": "®",
  "&#174;": "®",
  "&hellip;": "…",
  "&#8230;": "…",
  "&#x2F;": "/",
  "&#47;": "/"
}, zl = (h) => Gl[h], ql = (h) => h.replace(Hl, zl);
let si = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: ql
};
const Hs = function() {
  let h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  si = {
    ...si,
    ...h
  };
}, li = () => si;
let Gs;
const zs = (h) => {
  Gs = h;
}, wr = () => Gs, ei = (h, o) => {
  if (!h) return !1;
  const c = h.props ? h.props.children : h.children;
  return o ? c.length > 0 : !!c;
}, ti = (h) => {
  if (!h) return [];
  const o = h.props ? h.props.children : h.children;
  return h.props && h.props.i18nIsDynamicList ? mr(o) : o;
}, Jl = (h) => Array.isArray(h) && h.every(wt.isValidElement), mr = (h) => Array.isArray(h) ? h : [h], Yl = (h, o) => {
  const c = {
    ...o
  };
  return c.props = Object.assign(h.props, o.props), c;
}, qs = (h, o) => {
  if (!h) return "";
  let c = "";
  const d = mr(h), y = o.transSupportBasicHtmlNodes && o.transKeepBasicHtmlNodesFor ? o.transKeepBasicHtmlNodesFor : [];
  return d.forEach((m, S) => {
    if (kn(m))
      c += `${m}`;
    else if (wt.isValidElement(m)) {
      const {
        props: I,
        type: _
      } = m, U = Object.keys(I).length, q = y.indexOf(_) > -1, X = I.children;
      if (!X && q && !U)
        c += `<${_}/>`;
      else if (!X && (!q || U) || I.i18nIsDynamicList)
        c += `<${S}></${S}>`;
      else if (q && U === 1 && kn(X))
        c += `<${_}>${X}</${_}>`;
      else {
        const j = qs(X, o);
        c += `<${S}>${j}</${S}>`;
      }
    } else if (m === null)
      po("Trans: the passed in value is invalid - seems you passed in a null child.");
    else if (gr(m)) {
      const {
        format: I,
        ..._
      } = m, U = Object.keys(_);
      if (U.length === 1) {
        const q = I ? `${U[0]}, ${I}` : U[0];
        c += `{{${q}}}`;
      } else
        po("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.", m);
    } else
      po("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.", m);
  }), c;
}, Zl = (h, o, c, d, y, m) => {
  if (o === "") return [];
  const S = d.transKeepBasicHtmlNodesFor || [], I = o && new RegExp(S.map((z) => `<${z}`).join("|")).test(o);
  if (!h && !I && !m) return [o];
  const _ = {}, U = (z) => {
    mr(z).forEach((Y) => {
      kn(Y) || (ei(Y) ? U(ti(Y)) : gr(Y) && !wt.isValidElement(Y) && Object.assign(_, Y));
    });
  };
  U(h);
  const q = jl.parse(`<0>${o}</0>`), X = {
    ..._,
    ...y
  }, j = (z, Me, Y) => {
    const Ce = ti(z), ne = we(Ce, Me.children, Y);
    return Jl(Ce) && ne.length === 0 || z.props && z.props.i18nIsDynamicList ? Ce : ne;
  }, W = (z, Me, Y, Ce, ne) => {
    z.dummy ? (z.children = Me, Y.push(wt.cloneElement(z, {
      key: Ce
    }, ne ? void 0 : Me))) : Y.push(...wt.Children.map([z], (Ie) => {
      const se = {
        ...Ie.props
      };
      return delete se.i18nIsDynamicList, wt.createElement(Ie.type, {
        ...se,
        key: Ce,
        ref: Ie.ref
      }, ne ? null : Me);
    }));
  }, we = (z, Me, Y) => {
    const Ce = mr(z);
    return mr(Me).reduce((Ie, se, ce) => {
      const dt = se.children && se.children[0] && se.children[0].content && c.services.interpolator.interpolate(se.children[0].content, X, c.language);
      if (se.type === "tag") {
        let at = Ce[parseInt(se.name, 10)];
        Y.length === 1 && !at && (at = Y[0][se.name]), at || (at = {});
        const Je = Object.keys(se.attrs).length !== 0 ? Yl({
          props: se.attrs
        }, at) : at, ut = wt.isValidElement(Je), Dt = ut && ei(se, !0) && !se.voidElement, Fe = I && gr(Je) && Je.dummy && !ut, Pt = gr(h) && Object.hasOwnProperty.call(h, se.name);
        if (kn(Je)) {
          const Le = c.services.interpolator.interpolate(Je, X, c.language);
          Ie.push(Le);
        } else if (ei(Je) || Dt) {
          const Le = j(Je, se, Y);
          W(Je, Le, Ie, ce);
        } else if (Fe) {
          const Le = we(Ce, se.children, Y);
          W(Je, Le, Ie, ce);
        } else if (Number.isNaN(parseFloat(se.name)))
          if (Pt) {
            const Le = j(Je, se, Y);
            W(Je, Le, Ie, ce, se.voidElement);
          } else if (d.transSupportBasicHtmlNodes && S.indexOf(se.name) > -1)
            if (se.voidElement)
              Ie.push(wt.createElement(se.name, {
                key: `${se.name}-${ce}`
              }));
            else {
              const Le = we(Ce, se.children, Y);
              Ie.push(wt.createElement(se.name, {
                key: `${se.name}-${ce}`
              }, Le));
            }
          else if (se.voidElement)
            Ie.push(`<${se.name} />`);
          else {
            const Le = we(Ce, se.children, Y);
            Ie.push(`<${se.name}>${Le}</${se.name}>`);
          }
        else if (gr(Je) && !ut) {
          const Le = se.children[0] ? dt : null;
          Le && Ie.push(Le);
        } else
          W(Je, dt, Ie, ce, se.children.length !== 1 || !dt);
      } else if (se.type === "text") {
        const at = d.transWrapTextNodes, Je = m ? d.unescape(c.services.interpolator.interpolate(se.content, X, c.language)) : c.services.interpolator.interpolate(se.content, X, c.language);
        at ? Ie.push(wt.createElement(at, {
          key: `${se.name}-${ce}`
        }, Je)) : Ie.push(Je);
      }
      return Ie;
    }, []);
  }, ge = we([{
    dummy: !0,
    children: h || []
  }], q, mr(h || []));
  return ti(ge[0]);
};
function Js(h) {
  let {
    children: o,
    count: c,
    parent: d,
    i18nKey: y,
    context: m,
    tOptions: S = {},
    values: I,
    defaults: _,
    components: U,
    ns: q,
    i18n: X,
    t: j,
    shouldUnescape: W,
    ...we
  } = h;
  const ge = X || wr();
  if (!ge)
    return fo("You will need to pass in an i18next instance by using i18nextReactModule"), o;
  const z = j || ge.t.bind(ge) || ((Dt) => Dt), Me = {
    ...li(),
    ...ge.options && ge.options.react
  };
  let Y = q || z.ns || ge.options && ge.options.defaultNS;
  Y = kn(Y) ? [Y] : Y || ["translation"];
  const Ce = qs(o, Me), ne = _ || Ce || Me.transEmptyNodeValue || y, {
    hashTransKey: Ie
  } = Me, se = y || (Ie ? Ie(Ce || ne) : Ce || ne);
  ge.options && ge.options.interpolation && ge.options.interpolation.defaultVariables && (I = I && Object.keys(I).length > 0 ? {
    ...I,
    ...ge.options.interpolation.defaultVariables
  } : {
    ...ge.options.interpolation.defaultVariables
  });
  const ce = I || c !== void 0 || !o ? S.interpolation : {
    interpolation: {
      ...S.interpolation,
      prefix: "#$?",
      suffix: "?$#"
    }
  }, dt = {
    ...S,
    context: m || S.context,
    count: c,
    ...I,
    ...ce,
    defaultValue: ne,
    ns: Y
  }, at = se ? z(se, dt) : ne;
  U && Object.keys(U).forEach((Dt) => {
    const Fe = U[Dt];
    if (typeof Fe.type == "function" || !Fe.props || !Fe.props.children || at.indexOf(`${Dt}/>`) < 0 && at.indexOf(`${Dt} />`) < 0) return;
    function Pt() {
      return wt.createElement(wt.Fragment, null, Fe);
    }
    U[Dt] = wt.createElement(Pt);
  });
  const Je = Zl(U || o, at, ge, Me, dt, W), ut = d !== void 0 ? d : Me.defaultTransParent;
  return ut ? wt.createElement(ut, we, Je) : Je;
}
const Ql = {
  type: "3rdParty",
  init(h) {
    Hs(h.options.react), zs(h);
  }
}, Kr = wt.createContext();
class Xl {
  constructor() {
    ys(this, "getUsedNamespaces", () => Object.keys(this.usedNamespaces));
    this.usedNamespaces = {};
  }
  addUsedNamespaces(o) {
    o.forEach((c) => {
      this.usedNamespaces[c] || (this.usedNamespaces[c] = !0);
    });
  }
}
const Ys = (h) => async (o) => {
  const c = h.getInitialProps ? await h.getInitialProps(o) : {}, d = Zs();
  return {
    ...c,
    ...d
  };
}, Zs = () => {
  const h = wr(), o = h.reportNamespaces ? h.reportNamespaces.getUsedNamespaces() : [], c = {}, d = {};
  return h.languages.forEach((y) => {
    d[y] = {}, o.forEach((m) => {
      d[y][m] = h.getResourceBundle(y, m) || {};
    });
  }), c.initialI18nStore = d, c.initialLanguage = h.language, c;
};
function ed(h) {
  let {
    children: o,
    count: c,
    parent: d,
    i18nKey: y,
    context: m,
    tOptions: S = {},
    values: I,
    defaults: _,
    components: U,
    ns: q,
    i18n: X,
    t: j,
    shouldUnescape: W,
    ...we
  } = h;
  const {
    i18n: ge,
    defaultNS: z
  } = wt.useContext(Kr) || {}, Me = X || ge || wr(), Y = j || Me && Me.t.bind(Me);
  return Js({
    children: o,
    count: c,
    parent: d,
    i18nKey: y,
    context: m,
    tOptions: S,
    values: I,
    defaults: _,
    components: U,
    ns: q || Y && Y.ns || z || Me && Me.options && Me.options.defaultNS,
    i18n: Me,
    t: j,
    shouldUnescape: W,
    ...we
  });
}
const td = (h, o) => {
  const c = wt.useRef();
  return wt.useEffect(() => {
    c.current = h;
  }, [h, o]), c.current;
}, Qs = (h, o, c, d) => h.getFixedT(o, c, d), nd = (h, o, c, d) => wt.useCallback(Qs(h, o, c, d), [h, o, c, d]), di = function(h) {
  let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    i18n: c
  } = o, {
    i18n: d,
    defaultNS: y
  } = wt.useContext(Kr) || {}, m = c || d || wr();
  if (m && !m.reportNamespaces && (m.reportNamespaces = new Xl()), !m) {
    fo("You will need to pass in an i18next instance by using initReactI18next");
    const ne = (se, ce) => kn(ce) ? ce : gr(ce) && kn(ce.defaultValue) ? ce.defaultValue : Array.isArray(se) ? se[se.length - 1] : se, Ie = [ne, {}, !1];
    return Ie.t = ne, Ie.i18n = {}, Ie.ready = !1, Ie;
  }
  m.options.react && m.options.react.wait !== void 0 && fo("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const S = {
    ...li(),
    ...m.options.react,
    ...o
  }, {
    useSuspense: I,
    keyPrefix: _
  } = S;
  let U = h || y || m.options && m.options.defaultNS;
  U = kn(U) ? [U] : U || ["translation"], m.reportNamespaces.addUsedNamespaces && m.reportNamespaces.addUsedNamespaces(U);
  const q = (m.isInitialized || m.initializedStoreOnce) && U.every((ne) => $l(ne, m, S)), X = nd(m, o.lng || null, S.nsMode === "fallback" ? U : U[0], _), j = () => X, W = () => Qs(m, o.lng || null, S.nsMode === "fallback" ? U : U[0], _), [we, ge] = wt.useState(j);
  let z = U.join();
  o.lng && (z = `${o.lng}${z}`);
  const Me = td(z), Y = wt.useRef(!0);
  wt.useEffect(() => {
    const {
      bindI18n: ne,
      bindI18nStore: Ie
    } = S;
    Y.current = !0, !q && !I && (o.lng ? Is(m, o.lng, U, () => {
      Y.current && ge(W);
    }) : Ms(m, U, () => {
      Y.current && ge(W);
    })), q && Me && Me !== z && Y.current && ge(W);
    const se = () => {
      Y.current && ge(W);
    };
    return ne && m && m.on(ne, se), Ie && m && m.store.on(Ie, se), () => {
      Y.current = !1, ne && m && ne.split(" ").forEach((ce) => m.off(ce, se)), Ie && m && Ie.split(" ").forEach((ce) => m.store.off(ce, se));
    };
  }, [m, z]), wt.useEffect(() => {
    Y.current && q && ge(j);
  }, [m, _, q]);
  const Ce = [we, m, q];
  if (Ce.t = we, Ce.i18n = m, Ce.ready = q, q || !q && !I) return Ce;
  throw new Promise((ne) => {
    o.lng ? Is(m, o.lng, U, () => ne()) : Ms(m, U, () => ne());
  });
}, ad = function(h) {
  let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return function(d) {
    function y(S) {
      let {
        forwardedRef: I,
        ..._
      } = S;
      const [U, q, X] = di(h, {
        ..._,
        keyPrefix: o.keyPrefix
      }), j = {
        ..._,
        t: U,
        i18n: q,
        tReady: X
      };
      return o.withRef && I ? j.ref = I : !o.withRef && I && (j.forwardedRef = I), wt.createElement(d, j);
    }
    y.displayName = `withI18nextTranslation(${$s(d)})`, y.WrappedComponent = d;
    const m = (S, I) => wt.createElement(y, Object.assign({}, S, {
      forwardedRef: I
    }));
    return o.withRef ? wt.forwardRef(m) : y;
  };
};
function rd(h) {
  const {
    ns: o,
    children: c,
    ...d
  } = h, [y, m, S] = di(o, d);
  return c(y, {
    i18n: m,
    lng: m.language
  }, S);
}
function od(h) {
  let {
    i18n: o,
    defaultNS: c,
    children: d
  } = h;
  const y = wt.useMemo(() => ({
    i18n: o,
    defaultNS: c
  }), [o, c]);
  return wt.createElement(Kr.Provider, {
    value: y
  }, d);
}
const Xs = function(h, o) {
  let c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    i18n: d
  } = c, {
    i18n: y
  } = wt.useContext(Kr) || {}, m = d || y || wr();
  m.options && m.options.isClone || (h && !m.initializedStoreOnce && (m.services.resourceStore.data = h, m.options.ns = Object.values(h).reduce((S, I) => (Object.keys(I).forEach((_) => {
    S.indexOf(_) < 0 && S.push(_);
  }), S), m.options.ns), m.initializedStoreOnce = !0, m.isInitialized = !0), o && !m.initializedLanguageOnce && (m.changeLanguage(o), m.initializedLanguageOnce = !0));
}, id = () => function(o) {
  function c(d) {
    let {
      initialI18nStore: y,
      initialLanguage: m,
      ...S
    } = d;
    return Xs(y, m), wt.createElement(o, {
      ...S
    });
  }
  return c.getInitialProps = Ys(o), c.displayName = `withI18nextSSR(${$s(o)})`, c.WrappedComponent = o, c;
}, sd = () => "", cd = () => "", ud = () => "", ld = () => "", dd = () => "", pd = () => "", fd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  I18nContext: Kr,
  I18nextProvider: od,
  Trans: ed,
  TransWithoutContext: Js,
  Translation: rd,
  composeInitialProps: Ys,
  date: sd,
  getDefaults: li,
  getI18n: wr,
  getInitialProps: Zs,
  initReactI18next: Ql,
  number: ud,
  plural: dd,
  select: ld,
  selectOrdinal: pd,
  setDefaults: Hs,
  setI18n: zs,
  time: cd,
  useSSR: Xs,
  useTranslation: di,
  withSSR: id,
  withTranslation: ad
}, Symbol.toStringTag, { value: "Module" })), hd = /* @__PURE__ */ Fs(fd), Qe = (h) => typeof h == "string", Lr = () => {
  let h, o;
  const c = new Promise((d, y) => {
    h = d, o = y;
  });
  return c.resolve = h, c.reject = o, c;
}, As = (h) => h == null ? "" : "" + h, gd = (h, o, c) => {
  h.forEach((d) => {
    o[d] && (c[d] = o[d]);
  });
}, md = /###/g, Es = (h) => h && h.indexOf("###") > -1 ? h.replace(md, ".") : h, _s = (h) => !h || Qe(h), Vr = (h, o, c) => {
  const d = Qe(o) ? o.split(".") : o;
  let y = 0;
  for (; y < d.length - 1; ) {
    if (_s(h)) return {};
    const m = Es(d[y]);
    !h[m] && c && (h[m] = new c()), Object.prototype.hasOwnProperty.call(h, m) ? h = h[m] : h = {}, ++y;
  }
  return _s(h) ? {} : {
    obj: h,
    k: Es(d[y])
  };
}, Ts = (h, o, c) => {
  const {
    obj: d,
    k: y
  } = Vr(h, o, Object);
  if (d !== void 0 || o.length === 1) {
    d[y] = c;
    return;
  }
  let m = o[o.length - 1], S = o.slice(0, o.length - 1), I = Vr(h, S, Object);
  for (; I.obj === void 0 && S.length; )
    m = `${S[S.length - 1]}.${m}`, S = S.slice(0, S.length - 1), I = Vr(h, S, Object), I && I.obj && typeof I.obj[`${I.k}.${m}`] < "u" && (I.obj = void 0);
  I.obj[`${I.k}.${m}`] = c;
}, wd = (h, o, c, d) => {
  const {
    obj: y,
    k: m
  } = Vr(h, o, Object);
  y[m] = y[m] || [], y[m].push(c);
}, ho = (h, o) => {
  const {
    obj: c,
    k: d
  } = Vr(h, o);
  if (c)
    return c[d];
}, yd = (h, o, c) => {
  const d = ho(h, c);
  return d !== void 0 ? d : ho(o, c);
}, ec = (h, o, c) => {
  for (const d in o)
    d !== "__proto__" && d !== "constructor" && (d in h ? Qe(h[d]) || h[d] instanceof String || Qe(o[d]) || o[d] instanceof String ? c && (h[d] = o[d]) : ec(h[d], o[d], c) : h[d] = o[d]);
  return h;
}, pr = (h) => h.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var bd = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const vd = (h) => Qe(h) ? h.replace(/[&<>"'\/]/g, (o) => bd[o]) : h;
class kd {
  constructor(o) {
    this.capacity = o, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  getRegExp(o) {
    const c = this.regExpMap.get(o);
    if (c !== void 0)
      return c;
    const d = new RegExp(o);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(o, d), this.regExpQueue.push(o), d;
  }
}
const Sd = [" ", ",", "?", "!", ";"], Pd = new kd(20), xd = (h, o, c) => {
  o = o || "", c = c || "";
  const d = Sd.filter((S) => o.indexOf(S) < 0 && c.indexOf(S) < 0);
  if (d.length === 0) return !0;
  const y = Pd.getRegExp(`(${d.map((S) => S === "?" ? "\\?" : S).join("|")})`);
  let m = !y.test(h);
  if (!m) {
    const S = h.indexOf(c);
    S > 0 && !y.test(h.substring(0, S)) && (m = !0);
  }
  return m;
}, ci = function(h, o) {
  let c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!h) return;
  if (h[o]) return h[o];
  const d = o.split(c);
  let y = h;
  for (let m = 0; m < d.length; ) {
    if (!y || typeof y != "object")
      return;
    let S, I = "";
    for (let _ = m; _ < d.length; ++_)
      if (_ !== m && (I += c), I += d[_], S = y[I], S !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof S) > -1 && _ < d.length - 1)
          continue;
        m += _ - m + 1;
        break;
      }
    y = S;
  }
  return y;
}, go = (h) => h && h.replace("_", "-"), Cd = {
  type: "logger",
  log(h) {
    this.output("log", h);
  },
  warn(h) {
    this.output("warn", h);
  },
  error(h) {
    this.output("error", h);
  },
  output(h, o) {
    console && console[h] && console[h].apply(console, o);
  }
};
class mo {
  constructor(o) {
    let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(o, c);
  }
  init(o) {
    let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = c.prefix || "i18next:", this.logger = o || Cd, this.options = c, this.debug = c.debug;
  }
  log() {
    for (var o = arguments.length, c = new Array(o), d = 0; d < o; d++)
      c[d] = arguments[d];
    return this.forward(c, "log", "", !0);
  }
  warn() {
    for (var o = arguments.length, c = new Array(o), d = 0; d < o; d++)
      c[d] = arguments[d];
    return this.forward(c, "warn", "", !0);
  }
  error() {
    for (var o = arguments.length, c = new Array(o), d = 0; d < o; d++)
      c[d] = arguments[d];
    return this.forward(c, "error", "");
  }
  deprecate() {
    for (var o = arguments.length, c = new Array(o), d = 0; d < o; d++)
      c[d] = arguments[d];
    return this.forward(c, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(o, c, d, y) {
    return y && !this.debug ? null : (Qe(o[0]) && (o[0] = `${d}${this.prefix} ${o[0]}`), this.logger[c](o));
  }
  create(o) {
    return new mo(this.logger, {
      prefix: `${this.prefix}:${o}:`,
      ...this.options
    });
  }
  clone(o) {
    return o = o || this.options, o.prefix = o.prefix || this.prefix, new mo(this.logger, o);
  }
}
var Un = new mo();
class yo {
  constructor() {
    this.observers = {};
  }
  on(o, c) {
    return o.split(" ").forEach((d) => {
      this.observers[d] || (this.observers[d] = /* @__PURE__ */ new Map());
      const y = this.observers[d].get(c) || 0;
      this.observers[d].set(c, y + 1);
    }), this;
  }
  off(o, c) {
    if (this.observers[o]) {
      if (!c) {
        delete this.observers[o];
        return;
      }
      this.observers[o].delete(c);
    }
  }
  emit(o) {
    for (var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), y = 1; y < c; y++)
      d[y - 1] = arguments[y];
    this.observers[o] && Array.from(this.observers[o].entries()).forEach((S) => {
      let [I, _] = S;
      for (let U = 0; U < _; U++)
        I(...d);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach((S) => {
      let [I, _] = S;
      for (let U = 0; U < _; U++)
        I.apply(I, [o, ...d]);
    });
  }
}
class Rs extends yo {
  constructor(o) {
    let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    super(), this.data = o || {}, this.options = c, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(o) {
    this.options.ns.indexOf(o) < 0 && this.options.ns.push(o);
  }
  removeNamespaces(o) {
    const c = this.options.ns.indexOf(o);
    c > -1 && this.options.ns.splice(c, 1);
  }
  getResource(o, c, d) {
    let y = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const m = y.keySeparator !== void 0 ? y.keySeparator : this.options.keySeparator, S = y.ignoreJSONStructure !== void 0 ? y.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let I;
    o.indexOf(".") > -1 ? I = o.split(".") : (I = [o, c], d && (Array.isArray(d) ? I.push(...d) : Qe(d) && m ? I.push(...d.split(m)) : I.push(d)));
    const _ = ho(this.data, I);
    return !_ && !c && !d && o.indexOf(".") > -1 && (o = I[0], c = I[1], d = I.slice(2).join(".")), _ || !S || !Qe(d) ? _ : ci(this.data && this.data[o] && this.data[o][c], d, m);
  }
  addResource(o, c, d, y) {
    let m = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const S = m.keySeparator !== void 0 ? m.keySeparator : this.options.keySeparator;
    let I = [o, c];
    d && (I = I.concat(S ? d.split(S) : d)), o.indexOf(".") > -1 && (I = o.split("."), y = c, c = I[1]), this.addNamespaces(c), Ts(this.data, I, y), m.silent || this.emit("added", o, c, d, y);
  }
  addResources(o, c, d) {
    let y = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: !1
    };
    for (const m in d)
      (Qe(d[m]) || Array.isArray(d[m])) && this.addResource(o, c, m, d[m], {
        silent: !0
      });
    y.silent || this.emit("added", o, c, d);
  }
  addResourceBundle(o, c, d, y, m) {
    let S = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
      silent: !1,
      skipCopy: !1
    }, I = [o, c];
    o.indexOf(".") > -1 && (I = o.split("."), y = d, d = c, c = I[1]), this.addNamespaces(c);
    let _ = ho(this.data, I) || {};
    S.skipCopy || (d = JSON.parse(JSON.stringify(d))), y ? ec(_, d, m) : _ = {
      ..._,
      ...d
    }, Ts(this.data, I, _), S.silent || this.emit("added", o, c, d);
  }
  removeResourceBundle(o, c) {
    this.hasResourceBundle(o, c) && delete this.data[o][c], this.removeNamespaces(c), this.emit("removed", o, c);
  }
  hasResourceBundle(o, c) {
    return this.getResource(o, c) !== void 0;
  }
  getResourceBundle(o, c) {
    return c || (c = this.options.defaultNS), this.options.compatibilityAPI === "v1" ? {
      ...this.getResource(o, c)
    } : this.getResource(o, c);
  }
  getDataByLanguage(o) {
    return this.data[o];
  }
  hasLanguageSomeTranslations(o) {
    const c = this.getDataByLanguage(o);
    return !!(c && Object.keys(c) || []).find((y) => c[y] && Object.keys(c[y]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var tc = {
  processors: {},
  addPostProcessor(h) {
    this.processors[h.name] = h;
  },
  handle(h, o, c, d, y) {
    return h.forEach((m) => {
      this.processors[m] && (o = this.processors[m].process(o, c, d, y));
    }), o;
  }
};
const Ds = {};
class wo extends yo {
  constructor(o) {
    let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), gd(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], o, this), this.options = c, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = Un.create("translator");
  }
  changeLanguage(o) {
    o && (this.language = o);
  }
  exists(o) {
    let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    if (o == null)
      return !1;
    const d = this.resolve(o, c);
    return d && d.res !== void 0;
  }
  extractFromKey(o, c) {
    let d = c.nsSeparator !== void 0 ? c.nsSeparator : this.options.nsSeparator;
    d === void 0 && (d = ":");
    const y = c.keySeparator !== void 0 ? c.keySeparator : this.options.keySeparator;
    let m = c.ns || this.options.defaultNS || [];
    const S = d && o.indexOf(d) > -1, I = !this.options.userDefinedKeySeparator && !c.keySeparator && !this.options.userDefinedNsSeparator && !c.nsSeparator && !xd(o, d, y);
    if (S && !I) {
      const _ = o.match(this.interpolator.nestingRegexp);
      if (_ && _.length > 0)
        return {
          key: o,
          namespaces: Qe(m) ? [m] : m
        };
      const U = o.split(d);
      (d !== y || d === y && this.options.ns.indexOf(U[0]) > -1) && (m = U.shift()), o = U.join(y);
    }
    return {
      key: o,
      namespaces: Qe(m) ? [m] : m
    };
  }
  translate(o, c, d) {
    if (typeof c != "object" && this.options.overloadTranslationOptionHandler && (c = this.options.overloadTranslationOptionHandler(arguments)), typeof c == "object" && (c = {
      ...c
    }), c || (c = {}), o == null) return "";
    Array.isArray(o) || (o = [String(o)]);
    const y = c.returnDetails !== void 0 ? c.returnDetails : this.options.returnDetails, m = c.keySeparator !== void 0 ? c.keySeparator : this.options.keySeparator, {
      key: S,
      namespaces: I
    } = this.extractFromKey(o[o.length - 1], c), _ = I[I.length - 1], U = c.lng || this.language, q = c.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (U && U.toLowerCase() === "cimode") {
      if (q) {
        const ne = c.nsSeparator || this.options.nsSeparator;
        return y ? {
          res: `${_}${ne}${S}`,
          usedKey: S,
          exactUsedKey: S,
          usedLng: U,
          usedNS: _,
          usedParams: this.getUsedParamsDetails(c)
        } : `${_}${ne}${S}`;
      }
      return y ? {
        res: S,
        usedKey: S,
        exactUsedKey: S,
        usedLng: U,
        usedNS: _,
        usedParams: this.getUsedParamsDetails(c)
      } : S;
    }
    const X = this.resolve(o, c);
    let j = X && X.res;
    const W = X && X.usedKey || S, we = X && X.exactUsedKey || S, ge = Object.prototype.toString.apply(j), z = ["[object Number]", "[object Function]", "[object RegExp]"], Me = c.joinArrays !== void 0 ? c.joinArrays : this.options.joinArrays, Y = !this.i18nFormat || this.i18nFormat.handleAsObject, Ce = !Qe(j) && typeof j != "boolean" && typeof j != "number";
    if (Y && j && Ce && z.indexOf(ge) < 0 && !(Qe(Me) && Array.isArray(j))) {
      if (!c.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const ne = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(W, j, {
          ...c,
          ns: I
        }) : `key '${S} (${this.language})' returned an object instead of string.`;
        return y ? (X.res = ne, X.usedParams = this.getUsedParamsDetails(c), X) : ne;
      }
      if (m) {
        const ne = Array.isArray(j), Ie = ne ? [] : {}, se = ne ? we : W;
        for (const ce in j)
          if (Object.prototype.hasOwnProperty.call(j, ce)) {
            const dt = `${se}${m}${ce}`;
            Ie[ce] = this.translate(dt, {
              ...c,
              joinArrays: !1,
              ns: I
            }), Ie[ce] === dt && (Ie[ce] = j[ce]);
          }
        j = Ie;
      }
    } else if (Y && Qe(Me) && Array.isArray(j))
      j = j.join(Me), j && (j = this.extendTranslation(j, o, c, d));
    else {
      let ne = !1, Ie = !1;
      const se = c.count !== void 0 && !Qe(c.count), ce = wo.hasDefaultValue(c), dt = se ? this.pluralResolver.getSuffix(U, c.count, c) : "", at = c.ordinal && se ? this.pluralResolver.getSuffix(U, c.count, {
        ordinal: !1
      }) : "", Je = se && !c.ordinal && c.count === 0 && this.pluralResolver.shouldUseIntlApi(), ut = Je && c[`defaultValue${this.options.pluralSeparator}zero`] || c[`defaultValue${dt}`] || c[`defaultValue${at}`] || c.defaultValue;
      !this.isValidLookup(j) && ce && (ne = !0, j = ut), this.isValidLookup(j) || (Ie = !0, j = S);
      const Fe = (c.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && Ie ? void 0 : j, Pt = ce && ut !== j && this.options.updateMissing;
      if (Ie || ne || Pt) {
        if (this.logger.log(Pt ? "updateKey" : "missingKey", U, _, S, Pt ? ut : j), m) {
          const mt = this.resolve(S, {
            ...c,
            keySeparator: !1
          });
          mt && mt.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let Le = [];
        const bt = this.languageUtils.getFallbackCodes(this.options.fallbackLng, c.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && bt && bt[0])
          for (let mt = 0; mt < bt.length; mt++)
            Le.push(bt[mt]);
        else this.options.saveMissingTo === "all" ? Le = this.languageUtils.toResolveHierarchy(c.lng || this.language) : Le.push(c.lng || this.language);
        const _t = (mt, ht, Ge) => {
          const D = ce && Ge !== j ? Ge : Fe;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(mt, _, ht, D, Pt, c) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(mt, _, ht, D, Pt, c), this.emit("missingKey", mt, _, ht, j);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && se ? Le.forEach((mt) => {
          const ht = this.pluralResolver.getSuffixes(mt, c);
          Je && c[`defaultValue${this.options.pluralSeparator}zero`] && ht.indexOf(`${this.options.pluralSeparator}zero`) < 0 && ht.push(`${this.options.pluralSeparator}zero`), ht.forEach((Ge) => {
            _t([mt], S + Ge, c[`defaultValue${Ge}`] || ut);
          });
        }) : _t(Le, S, ut));
      }
      j = this.extendTranslation(j, o, c, X, d), Ie && j === S && this.options.appendNamespaceToMissingKey && (j = `${_}:${S}`), (Ie || ne) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? j = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${_}:${S}` : S, ne ? j : void 0) : j = this.options.parseMissingKeyHandler(j));
    }
    return y ? (X.res = j, X.usedParams = this.getUsedParamsDetails(c), X) : j;
  }
  extendTranslation(o, c, d, y, m) {
    var S = this;
    if (this.i18nFormat && this.i18nFormat.parse)
      o = this.i18nFormat.parse(o, {
        ...this.options.interpolation.defaultVariables,
        ...d
      }, d.lng || this.language || y.usedLng, y.usedNS, y.usedKey, {
        resolved: y
      });
    else if (!d.skipInterpolation) {
      d.interpolation && this.interpolator.init({
        ...d,
        interpolation: {
          ...this.options.interpolation,
          ...d.interpolation
        }
      });
      const U = Qe(o) && (d && d.interpolation && d.interpolation.skipOnVariables !== void 0 ? d.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let q;
      if (U) {
        const j = o.match(this.interpolator.nestingRegexp);
        q = j && j.length;
      }
      let X = d.replace && !Qe(d.replace) ? d.replace : d;
      if (this.options.interpolation.defaultVariables && (X = {
        ...this.options.interpolation.defaultVariables,
        ...X
      }), o = this.interpolator.interpolate(o, X, d.lng || this.language || y.usedLng, d), U) {
        const j = o.match(this.interpolator.nestingRegexp), W = j && j.length;
        q < W && (d.nest = !1);
      }
      !d.lng && this.options.compatibilityAPI !== "v1" && y && y.res && (d.lng = this.language || y.usedLng), d.nest !== !1 && (o = this.interpolator.nest(o, function() {
        for (var j = arguments.length, W = new Array(j), we = 0; we < j; we++)
          W[we] = arguments[we];
        return m && m[0] === W[0] && !d.context ? (S.logger.warn(`It seems you are nesting recursively key: ${W[0]} in key: ${c[0]}`), null) : S.translate(...W, c);
      }, d)), d.interpolation && this.interpolator.reset();
    }
    const I = d.postProcess || this.options.postProcess, _ = Qe(I) ? [I] : I;
    return o != null && _ && _.length && d.applyPostProcessor !== !1 && (o = tc.handle(_, o, c, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...y,
        usedParams: this.getUsedParamsDetails(d)
      },
      ...d
    } : d, this)), o;
  }
  resolve(o) {
    let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, d, y, m, S, I;
    return Qe(o) && (o = [o]), o.forEach((_) => {
      if (this.isValidLookup(d)) return;
      const U = this.extractFromKey(_, c), q = U.key;
      y = q;
      let X = U.namespaces;
      this.options.fallbackNS && (X = X.concat(this.options.fallbackNS));
      const j = c.count !== void 0 && !Qe(c.count), W = j && !c.ordinal && c.count === 0 && this.pluralResolver.shouldUseIntlApi(), we = c.context !== void 0 && (Qe(c.context) || typeof c.context == "number") && c.context !== "", ge = c.lngs ? c.lngs : this.languageUtils.toResolveHierarchy(c.lng || this.language, c.fallbackLng);
      X.forEach((z) => {
        this.isValidLookup(d) || (I = z, !Ds[`${ge[0]}-${z}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(I) && (Ds[`${ge[0]}-${z}`] = !0, this.logger.warn(`key "${y}" for languages "${ge.join(", ")}" won't get resolved as namespace "${I}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), ge.forEach((Me) => {
          if (this.isValidLookup(d)) return;
          S = Me;
          const Y = [q];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys)
            this.i18nFormat.addLookupKeys(Y, q, Me, z, c);
          else {
            let ne;
            j && (ne = this.pluralResolver.getSuffix(Me, c.count, c));
            const Ie = `${this.options.pluralSeparator}zero`, se = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (j && (Y.push(q + ne), c.ordinal && ne.indexOf(se) === 0 && Y.push(q + ne.replace(se, this.options.pluralSeparator)), W && Y.push(q + Ie)), we) {
              const ce = `${q}${this.options.contextSeparator}${c.context}`;
              Y.push(ce), j && (Y.push(ce + ne), c.ordinal && ne.indexOf(se) === 0 && Y.push(ce + ne.replace(se, this.options.pluralSeparator)), W && Y.push(ce + Ie));
            }
          }
          let Ce;
          for (; Ce = Y.pop(); )
            this.isValidLookup(d) || (m = Ce, d = this.getResource(Me, z, Ce, c));
        }));
      });
    }), {
      res: d,
      usedKey: y,
      exactUsedKey: m,
      usedLng: S,
      usedNS: I
    };
  }
  isValidLookup(o) {
    return o !== void 0 && !(!this.options.returnNull && o === null) && !(!this.options.returnEmptyString && o === "");
  }
  getResource(o, c, d) {
    let y = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(o, c, d, y) : this.resourceStore.getResource(o, c, d, y);
  }
  getUsedParamsDetails() {
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const c = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], d = o.replace && !Qe(o.replace);
    let y = d ? o.replace : o;
    if (d && typeof o.count < "u" && (y.count = o.count), this.options.interpolation.defaultVariables && (y = {
      ...this.options.interpolation.defaultVariables,
      ...y
    }), !d) {
      y = {
        ...y
      };
      for (const m of c)
        delete y[m];
    }
    return y;
  }
  static hasDefaultValue(o) {
    const c = "defaultValue";
    for (const d in o)
      if (Object.prototype.hasOwnProperty.call(o, d) && c === d.substring(0, c.length) && o[d] !== void 0)
        return !0;
    return !1;
  }
}
const ni = (h) => h.charAt(0).toUpperCase() + h.slice(1);
class Os {
  constructor(o) {
    this.options = o, this.supportedLngs = this.options.supportedLngs || !1, this.logger = Un.create("languageUtils");
  }
  getScriptPartFromCode(o) {
    if (o = go(o), !o || o.indexOf("-") < 0) return null;
    const c = o.split("-");
    return c.length === 2 || (c.pop(), c[c.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(c.join("-"));
  }
  getLanguagePartFromCode(o) {
    if (o = go(o), !o || o.indexOf("-") < 0) return o;
    const c = o.split("-");
    return this.formatLanguageCode(c[0]);
  }
  formatLanguageCode(o) {
    if (Qe(o) && o.indexOf("-") > -1) {
      if (typeof Intl < "u" && typeof Intl.getCanonicalLocales < "u")
        try {
          let y = Intl.getCanonicalLocales(o)[0];
          if (y && this.options.lowerCaseLng && (y = y.toLowerCase()), y) return y;
        } catch {
        }
      const c = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let d = o.split("-");
      return this.options.lowerCaseLng ? d = d.map((y) => y.toLowerCase()) : d.length === 2 ? (d[0] = d[0].toLowerCase(), d[1] = d[1].toUpperCase(), c.indexOf(d[1].toLowerCase()) > -1 && (d[1] = ni(d[1].toLowerCase()))) : d.length === 3 && (d[0] = d[0].toLowerCase(), d[1].length === 2 && (d[1] = d[1].toUpperCase()), d[0] !== "sgn" && d[2].length === 2 && (d[2] = d[2].toUpperCase()), c.indexOf(d[1].toLowerCase()) > -1 && (d[1] = ni(d[1].toLowerCase())), c.indexOf(d[2].toLowerCase()) > -1 && (d[2] = ni(d[2].toLowerCase()))), d.join("-");
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? o.toLowerCase() : o;
  }
  isSupportedCode(o) {
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (o = this.getLanguagePartFromCode(o)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(o) > -1;
  }
  getBestMatchFromCodes(o) {
    if (!o) return null;
    let c;
    return o.forEach((d) => {
      if (c) return;
      const y = this.formatLanguageCode(d);
      (!this.options.supportedLngs || this.isSupportedCode(y)) && (c = y);
    }), !c && this.options.supportedLngs && o.forEach((d) => {
      if (c) return;
      const y = this.getLanguagePartFromCode(d);
      if (this.isSupportedCode(y)) return c = y;
      c = this.options.supportedLngs.find((m) => {
        if (m === y) return m;
        if (!(m.indexOf("-") < 0 && y.indexOf("-") < 0) && (m.indexOf("-") > 0 && y.indexOf("-") < 0 && m.substring(0, m.indexOf("-")) === y || m.indexOf(y) === 0 && y.length > 1))
          return m;
      });
    }), c || (c = this.getFallbackCodes(this.options.fallbackLng)[0]), c;
  }
  getFallbackCodes(o, c) {
    if (!o) return [];
    if (typeof o == "function" && (o = o(c)), Qe(o) && (o = [o]), Array.isArray(o)) return o;
    if (!c) return o.default || [];
    let d = o[c];
    return d || (d = o[this.getScriptPartFromCode(c)]), d || (d = o[this.formatLanguageCode(c)]), d || (d = o[this.getLanguagePartFromCode(c)]), d || (d = o.default), d || [];
  }
  toResolveHierarchy(o, c) {
    const d = this.getFallbackCodes(c || this.options.fallbackLng || [], o), y = [], m = (S) => {
      S && (this.isSupportedCode(S) ? y.push(S) : this.logger.warn(`rejecting language code not found in supportedLngs: ${S}`));
    };
    return Qe(o) && (o.indexOf("-") > -1 || o.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && m(this.formatLanguageCode(o)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && m(this.getScriptPartFromCode(o)), this.options.load !== "currentOnly" && m(this.getLanguagePartFromCode(o))) : Qe(o) && m(this.formatLanguageCode(o)), d.forEach((S) => {
      y.indexOf(S) < 0 && m(this.formatLanguageCode(S));
    }), y;
  }
}
let Md = [{
  lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
  nr: [1, 2],
  fc: 1
}, {
  lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
  nr: [1, 2],
  fc: 2
}, {
  lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
  nr: [1],
  fc: 3
}, {
  lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
  nr: [1, 2, 5],
  fc: 4
}, {
  lngs: ["ar"],
  nr: [0, 1, 2, 3, 11, 100],
  fc: 5
}, {
  lngs: ["cs", "sk"],
  nr: [1, 2, 5],
  fc: 6
}, {
  lngs: ["csb", "pl"],
  nr: [1, 2, 5],
  fc: 7
}, {
  lngs: ["cy"],
  nr: [1, 2, 3, 8],
  fc: 8
}, {
  lngs: ["fr"],
  nr: [1, 2],
  fc: 9
}, {
  lngs: ["ga"],
  nr: [1, 2, 3, 7, 11],
  fc: 10
}, {
  lngs: ["gd"],
  nr: [1, 2, 3, 20],
  fc: 11
}, {
  lngs: ["is"],
  nr: [1, 2],
  fc: 12
}, {
  lngs: ["jv"],
  nr: [0, 1],
  fc: 13
}, {
  lngs: ["kw"],
  nr: [1, 2, 3, 4],
  fc: 14
}, {
  lngs: ["lt"],
  nr: [1, 2, 10],
  fc: 15
}, {
  lngs: ["lv"],
  nr: [1, 2, 0],
  fc: 16
}, {
  lngs: ["mk"],
  nr: [1, 2],
  fc: 17
}, {
  lngs: ["mnk"],
  nr: [0, 1, 2],
  fc: 18
}, {
  lngs: ["mt"],
  nr: [1, 2, 11, 20],
  fc: 19
}, {
  lngs: ["or"],
  nr: [2, 1],
  fc: 2
}, {
  lngs: ["ro"],
  nr: [1, 2, 20],
  fc: 20
}, {
  lngs: ["sl"],
  nr: [5, 1, 2, 3],
  fc: 21
}, {
  lngs: ["he", "iw"],
  nr: [1, 2, 20, 21],
  fc: 22
}], Id = {
  1: (h) => +(h > 1),
  2: (h) => +(h != 1),
  3: (h) => 0,
  4: (h) => h % 10 == 1 && h % 100 != 11 ? 0 : h % 10 >= 2 && h % 10 <= 4 && (h % 100 < 10 || h % 100 >= 20) ? 1 : 2,
  5: (h) => h == 0 ? 0 : h == 1 ? 1 : h == 2 ? 2 : h % 100 >= 3 && h % 100 <= 10 ? 3 : h % 100 >= 11 ? 4 : 5,
  6: (h) => h == 1 ? 0 : h >= 2 && h <= 4 ? 1 : 2,
  7: (h) => h == 1 ? 0 : h % 10 >= 2 && h % 10 <= 4 && (h % 100 < 10 || h % 100 >= 20) ? 1 : 2,
  8: (h) => h == 1 ? 0 : h == 2 ? 1 : h != 8 && h != 11 ? 2 : 3,
  9: (h) => +(h >= 2),
  10: (h) => h == 1 ? 0 : h == 2 ? 1 : h < 7 ? 2 : h < 11 ? 3 : 4,
  11: (h) => h == 1 || h == 11 ? 0 : h == 2 || h == 12 ? 1 : h > 2 && h < 20 ? 2 : 3,
  12: (h) => +(h % 10 != 1 || h % 100 == 11),
  13: (h) => +(h !== 0),
  14: (h) => h == 1 ? 0 : h == 2 ? 1 : h == 3 ? 2 : 3,
  15: (h) => h % 10 == 1 && h % 100 != 11 ? 0 : h % 10 >= 2 && (h % 100 < 10 || h % 100 >= 20) ? 1 : 2,
  16: (h) => h % 10 == 1 && h % 100 != 11 ? 0 : h !== 0 ? 1 : 2,
  17: (h) => h == 1 || h % 10 == 1 && h % 100 != 11 ? 0 : 1,
  18: (h) => h == 0 ? 0 : h == 1 ? 1 : 2,
  19: (h) => h == 1 ? 0 : h == 0 || h % 100 > 1 && h % 100 < 11 ? 1 : h % 100 > 10 && h % 100 < 20 ? 2 : 3,
  20: (h) => h == 1 ? 0 : h == 0 || h % 100 > 0 && h % 100 < 20 ? 1 : 2,
  21: (h) => h % 100 == 1 ? 1 : h % 100 == 2 ? 2 : h % 100 == 3 || h % 100 == 4 ? 3 : 0,
  22: (h) => h == 1 ? 0 : h == 2 ? 1 : (h < 0 || h > 10) && h % 10 == 0 ? 2 : 3
};
const Ad = ["v1", "v2", "v3"], Ed = ["v4"], Ws = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
}, _d = () => {
  const h = {};
  return Md.forEach((o) => {
    o.lngs.forEach((c) => {
      h[c] = {
        numbers: o.nr,
        plurals: Id[o.fc]
      };
    });
  }), h;
};
class Td {
  constructor(o) {
    let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = o, this.options = c, this.logger = Un.create("pluralResolver"), (!this.options.compatibilityJSON || Ed.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = _d(), this.pluralRulesCache = {};
  }
  addRule(o, c) {
    this.rules[o] = c;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(o) {
    let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi()) {
      const d = go(o === "dev" ? "en" : o), y = c.ordinal ? "ordinal" : "cardinal", m = JSON.stringify({
        cleanedCode: d,
        type: y
      });
      if (m in this.pluralRulesCache)
        return this.pluralRulesCache[m];
      let S;
      try {
        S = new Intl.PluralRules(d, {
          type: y
        });
      } catch {
        if (!o.match(/-|_/)) return;
        const _ = this.languageUtils.getLanguagePartFromCode(o);
        S = this.getRule(_, c);
      }
      return this.pluralRulesCache[m] = S, S;
    }
    return this.rules[o] || this.rules[this.languageUtils.getLanguagePartFromCode(o)];
  }
  needsPlural(o) {
    let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const d = this.getRule(o, c);
    return this.shouldUseIntlApi() ? d && d.resolvedOptions().pluralCategories.length > 1 : d && d.numbers.length > 1;
  }
  getPluralFormsOfKey(o, c) {
    let d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(o, d).map((y) => `${c}${y}`);
  }
  getSuffixes(o) {
    let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const d = this.getRule(o, c);
    return d ? this.shouldUseIntlApi() ? d.resolvedOptions().pluralCategories.sort((y, m) => Ws[y] - Ws[m]).map((y) => `${this.options.prepend}${c.ordinal ? `ordinal${this.options.prepend}` : ""}${y}`) : d.numbers.map((y) => this.getSuffix(o, y, c)) : [];
  }
  getSuffix(o, c) {
    let d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const y = this.getRule(o, d);
    return y ? this.shouldUseIntlApi() ? `${this.options.prepend}${d.ordinal ? `ordinal${this.options.prepend}` : ""}${y.select(c)}` : this.getSuffixRetroCompatible(y, c) : (this.logger.warn(`no plural rule found for: ${o}`), "");
  }
  getSuffixRetroCompatible(o, c) {
    const d = o.noAbs ? o.plurals(c) : o.plurals(Math.abs(c));
    let y = o.numbers[d];
    this.options.simplifyPluralSuffix && o.numbers.length === 2 && o.numbers[0] === 1 && (y === 2 ? y = "plural" : y === 1 && (y = ""));
    const m = () => this.options.prepend && y.toString() ? this.options.prepend + y.toString() : y.toString();
    return this.options.compatibilityJSON === "v1" ? y === 1 ? "" : typeof y == "number" ? `_plural_${y.toString()}` : m() : this.options.compatibilityJSON === "v2" || this.options.simplifyPluralSuffix && o.numbers.length === 2 && o.numbers[0] === 1 ? m() : this.options.prepend && d.toString() ? this.options.prepend + d.toString() : d.toString();
  }
  shouldUseIntlApi() {
    return !Ad.includes(this.options.compatibilityJSON);
  }
}
const Bs = function(h, o, c) {
  let d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", y = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, m = yd(h, o, c);
  return !m && y && Qe(c) && (m = ci(h, c, d), m === void 0 && (m = ci(o, c, d))), m;
}, ai = (h) => h.replace(/\$/g, "$$$$");
class Rd {
  constructor() {
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = Un.create("interpolator"), this.options = o, this.format = o.interpolation && o.interpolation.format || ((c) => c), this.init(o);
  }
  init() {
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    o.interpolation || (o.interpolation = {
      escapeValue: !0
    });
    const {
      escape: c,
      escapeValue: d,
      useRawValueToEscape: y,
      prefix: m,
      prefixEscaped: S,
      suffix: I,
      suffixEscaped: _,
      formatSeparator: U,
      unescapeSuffix: q,
      unescapePrefix: X,
      nestingPrefix: j,
      nestingPrefixEscaped: W,
      nestingSuffix: we,
      nestingSuffixEscaped: ge,
      nestingOptionsSeparator: z,
      maxReplaces: Me,
      alwaysFormat: Y
    } = o.interpolation;
    this.escape = c !== void 0 ? c : vd, this.escapeValue = d !== void 0 ? d : !0, this.useRawValueToEscape = y !== void 0 ? y : !1, this.prefix = m ? pr(m) : S || "{{", this.suffix = I ? pr(I) : _ || "}}", this.formatSeparator = U || ",", this.unescapePrefix = q ? "" : X || "-", this.unescapeSuffix = this.unescapePrefix ? "" : q || "", this.nestingPrefix = j ? pr(j) : W || pr("$t("), this.nestingSuffix = we ? pr(we) : ge || pr(")"), this.nestingOptionsSeparator = z || ",", this.maxReplaces = Me || 1e3, this.alwaysFormat = Y !== void 0 ? Y : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const o = (c, d) => c && c.source === d ? (c.lastIndex = 0, c) : new RegExp(d, "g");
    this.regexp = o(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = o(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = o(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(o, c, d, y) {
    let m, S, I;
    const _ = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, U = (W) => {
      if (W.indexOf(this.formatSeparator) < 0) {
        const Me = Bs(c, _, W, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(Me, void 0, d, {
          ...y,
          ...c,
          interpolationkey: W
        }) : Me;
      }
      const we = W.split(this.formatSeparator), ge = we.shift().trim(), z = we.join(this.formatSeparator).trim();
      return this.format(Bs(c, _, ge, this.options.keySeparator, this.options.ignoreJSONStructure), z, d, {
        ...y,
        ...c,
        interpolationkey: ge
      });
    };
    this.resetRegExp();
    const q = y && y.missingInterpolationHandler || this.options.missingInterpolationHandler, X = y && y.interpolation && y.interpolation.skipOnVariables !== void 0 ? y.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (W) => ai(W)
    }, {
      regex: this.regexp,
      safeValue: (W) => this.escapeValue ? ai(this.escape(W)) : ai(W)
    }].forEach((W) => {
      for (I = 0; m = W.regex.exec(o); ) {
        const we = m[1].trim();
        if (S = U(we), S === void 0)
          if (typeof q == "function") {
            const z = q(o, m, y);
            S = Qe(z) ? z : "";
          } else if (y && Object.prototype.hasOwnProperty.call(y, we))
            S = "";
          else if (X) {
            S = m[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${we} for interpolating ${o}`), S = "";
        else !Qe(S) && !this.useRawValueToEscape && (S = As(S));
        const ge = W.safeValue(S);
        if (o = o.replace(m[0], ge), X ? (W.regex.lastIndex += S.length, W.regex.lastIndex -= m[0].length) : W.regex.lastIndex = 0, I++, I >= this.maxReplaces)
          break;
      }
    }), o;
  }
  nest(o, c) {
    let d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, y, m, S;
    const I = (_, U) => {
      const q = this.nestingOptionsSeparator;
      if (_.indexOf(q) < 0) return _;
      const X = _.split(new RegExp(`${q}[ ]*{`));
      let j = `{${X[1]}`;
      _ = X[0], j = this.interpolate(j, S);
      const W = j.match(/'/g), we = j.match(/"/g);
      (W && W.length % 2 === 0 && !we || we.length % 2 !== 0) && (j = j.replace(/'/g, '"'));
      try {
        S = JSON.parse(j), U && (S = {
          ...U,
          ...S
        });
      } catch (ge) {
        return this.logger.warn(`failed parsing options string in nesting for key ${_}`, ge), `${_}${q}${j}`;
      }
      return S.defaultValue && S.defaultValue.indexOf(this.prefix) > -1 && delete S.defaultValue, _;
    };
    for (; y = this.nestingRegexp.exec(o); ) {
      let _ = [];
      S = {
        ...d
      }, S = S.replace && !Qe(S.replace) ? S.replace : S, S.applyPostProcessor = !1, delete S.defaultValue;
      let U = !1;
      if (y[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(y[1])) {
        const q = y[1].split(this.formatSeparator).map((X) => X.trim());
        y[1] = q.shift(), _ = q, U = !0;
      }
      if (m = c(I.call(this, y[1].trim(), S), S), m && y[0] === o && !Qe(m)) return m;
      Qe(m) || (m = As(m)), m || (this.logger.warn(`missed to resolve ${y[1]} for nesting ${o}`), m = ""), U && (m = _.reduce((q, X) => this.format(q, X, d.lng, {
        ...d,
        interpolationkey: y[1].trim()
      }), m.trim())), o = o.replace(y[0], m), this.regexp.lastIndex = 0;
    }
    return o;
  }
}
const Dd = (h) => {
  let o = h.toLowerCase().trim();
  const c = {};
  if (h.indexOf("(") > -1) {
    const d = h.split("(");
    o = d[0].toLowerCase().trim();
    const y = d[1].substring(0, d[1].length - 1);
    o === "currency" && y.indexOf(":") < 0 ? c.currency || (c.currency = y.trim()) : o === "relativetime" && y.indexOf(":") < 0 ? c.range || (c.range = y.trim()) : y.split(";").forEach((S) => {
      if (S) {
        const [I, ..._] = S.split(":"), U = _.join(":").trim().replace(/^'+|'+$/g, ""), q = I.trim();
        c[q] || (c[q] = U), U === "false" && (c[q] = !1), U === "true" && (c[q] = !0), isNaN(U) || (c[q] = parseInt(U, 10));
      }
    });
  }
  return {
    formatName: o,
    formatOptions: c
  };
}, fr = (h) => {
  const o = {};
  return (c, d, y) => {
    let m = y;
    y && y.interpolationkey && y.formatParams && y.formatParams[y.interpolationkey] && y[y.interpolationkey] && (m = {
      ...m,
      [y.interpolationkey]: void 0
    });
    const S = d + JSON.stringify(m);
    let I = o[S];
    return I || (I = h(go(d), y), o[S] = I), I(c);
  };
};
class Od {
  constructor() {
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = Un.create("formatter"), this.options = o, this.formats = {
      number: fr((c, d) => {
        const y = new Intl.NumberFormat(c, {
          ...d
        });
        return (m) => y.format(m);
      }),
      currency: fr((c, d) => {
        const y = new Intl.NumberFormat(c, {
          ...d,
          style: "currency"
        });
        return (m) => y.format(m);
      }),
      datetime: fr((c, d) => {
        const y = new Intl.DateTimeFormat(c, {
          ...d
        });
        return (m) => y.format(m);
      }),
      relativetime: fr((c, d) => {
        const y = new Intl.RelativeTimeFormat(c, {
          ...d
        });
        return (m) => y.format(m, d.range || "day");
      }),
      list: fr((c, d) => {
        const y = new Intl.ListFormat(c, {
          ...d
        });
        return (m) => y.format(m);
      })
    }, this.init(o);
  }
  init(o) {
    let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    this.formatSeparator = c.interpolation.formatSeparator || ",";
  }
  add(o, c) {
    this.formats[o.toLowerCase().trim()] = c;
  }
  addCached(o, c) {
    this.formats[o.toLowerCase().trim()] = fr(c);
  }
  format(o, c, d) {
    let y = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const m = c.split(this.formatSeparator);
    if (m.length > 1 && m[0].indexOf("(") > 1 && m[0].indexOf(")") < 0 && m.find((I) => I.indexOf(")") > -1)) {
      const I = m.findIndex((_) => _.indexOf(")") > -1);
      m[0] = [m[0], ...m.splice(1, I)].join(this.formatSeparator);
    }
    return m.reduce((I, _) => {
      const {
        formatName: U,
        formatOptions: q
      } = Dd(_);
      if (this.formats[U]) {
        let X = I;
        try {
          const j = y && y.formatParams && y.formatParams[y.interpolationkey] || {}, W = j.locale || j.lng || y.locale || y.lng || d;
          X = this.formats[U](I, W, {
            ...q,
            ...y,
            ...j
          });
        } catch (j) {
          this.logger.warn(j);
        }
        return X;
      } else
        this.logger.warn(`there was no format function for ${U}`);
      return I;
    }, o);
  }
}
const Wd = (h, o) => {
  h.pending[o] !== void 0 && (delete h.pending[o], h.pendingCount--);
};
class Bd extends yo {
  constructor(o, c, d) {
    let y = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = o, this.store = c, this.services = d, this.languageUtils = d.languageUtils, this.options = y, this.logger = Un.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = y.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = y.maxRetries >= 0 ? y.maxRetries : 5, this.retryTimeout = y.retryTimeout >= 1 ? y.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(d, y.backend, y);
  }
  queueLoad(o, c, d, y) {
    const m = {}, S = {}, I = {}, _ = {};
    return o.forEach((U) => {
      let q = !0;
      c.forEach((X) => {
        const j = `${U}|${X}`;
        !d.reload && this.store.hasResourceBundle(U, X) ? this.state[j] = 2 : this.state[j] < 0 || (this.state[j] === 1 ? S[j] === void 0 && (S[j] = !0) : (this.state[j] = 1, q = !1, S[j] === void 0 && (S[j] = !0), m[j] === void 0 && (m[j] = !0), _[X] === void 0 && (_[X] = !0)));
      }), q || (I[U] = !0);
    }), (Object.keys(m).length || Object.keys(S).length) && this.queue.push({
      pending: S,
      pendingCount: Object.keys(S).length,
      loaded: {},
      errors: [],
      callback: y
    }), {
      toLoad: Object.keys(m),
      pending: Object.keys(S),
      toLoadLanguages: Object.keys(I),
      toLoadNamespaces: Object.keys(_)
    };
  }
  loaded(o, c, d) {
    const y = o.split("|"), m = y[0], S = y[1];
    c && this.emit("failedLoading", m, S, c), !c && d && this.store.addResourceBundle(m, S, d, void 0, void 0, {
      skipCopy: !0
    }), this.state[o] = c ? -1 : 2, c && d && (this.state[o] = 0);
    const I = {};
    this.queue.forEach((_) => {
      wd(_.loaded, [m], S), Wd(_, o), c && _.errors.push(c), _.pendingCount === 0 && !_.done && (Object.keys(_.loaded).forEach((U) => {
        I[U] || (I[U] = {});
        const q = _.loaded[U];
        q.length && q.forEach((X) => {
          I[U][X] === void 0 && (I[U][X] = !0);
        });
      }), _.done = !0, _.errors.length ? _.callback(_.errors) : _.callback());
    }), this.emit("loaded", I), this.queue = this.queue.filter((_) => !_.done);
  }
  read(o, c, d) {
    let y = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, m = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout, S = arguments.length > 5 ? arguments[5] : void 0;
    if (!o.length) return S(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: o,
        ns: c,
        fcName: d,
        tried: y,
        wait: m,
        callback: S
      });
      return;
    }
    this.readingCalls++;
    const I = (U, q) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const X = this.waitingReads.shift();
        this.read(X.lng, X.ns, X.fcName, X.tried, X.wait, X.callback);
      }
      if (U && q && y < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, o, c, d, y + 1, m * 2, S);
        }, m);
        return;
      }
      S(U, q);
    }, _ = this.backend[d].bind(this.backend);
    if (_.length === 2) {
      try {
        const U = _(o, c);
        U && typeof U.then == "function" ? U.then((q) => I(null, q)).catch(I) : I(null, U);
      } catch (U) {
        I(U);
      }
      return;
    }
    return _(o, c, I);
  }
  prepareLoading(o, c) {
    let d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, y = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), y && y();
    Qe(o) && (o = this.languageUtils.toResolveHierarchy(o)), Qe(c) && (c = [c]);
    const m = this.queueLoad(o, c, d, y);
    if (!m.toLoad.length)
      return m.pending.length || y(), null;
    m.toLoad.forEach((S) => {
      this.loadOne(S);
    });
  }
  load(o, c, d) {
    this.prepareLoading(o, c, {}, d);
  }
  reload(o, c, d) {
    this.prepareLoading(o, c, {
      reload: !0
    }, d);
  }
  loadOne(o) {
    let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const d = o.split("|"), y = d[0], m = d[1];
    this.read(y, m, "read", void 0, void 0, (S, I) => {
      S && this.logger.warn(`${c}loading namespace ${m} for language ${y} failed`, S), !S && I && this.logger.log(`${c}loaded namespace ${m} for language ${y}`, I), this.loaded(o, S, I);
    });
  }
  saveMissing(o, c, d, y, m) {
    let S = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, I = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(c)) {
      this.logger.warn(`did not save key "${d}" as the namespace "${c}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(d == null || d === "")) {
      if (this.backend && this.backend.create) {
        const _ = {
          ...S,
          isUpdate: m
        }, U = this.backend.create.bind(this.backend);
        if (U.length < 6)
          try {
            let q;
            U.length === 5 ? q = U(o, c, d, y, _) : q = U(o, c, d, y), q && typeof q.then == "function" ? q.then((X) => I(null, X)).catch(I) : I(null, q);
          } catch (q) {
            I(q);
          }
        else
          U(o, c, d, y, I, _);
      }
      !o || !o[0] || this.store.addResource(o[0], c, d, y);
    }
  }
}
const Ns = () => ({
  debug: !1,
  initImmediate: !0,
  ns: ["translation"],
  defaultNS: ["translation"],
  fallbackLng: ["dev"],
  fallbackNS: !1,
  supportedLngs: !1,
  nonExplicitSupportedLngs: !1,
  load: "all",
  preload: !1,
  simplifyPluralSuffix: !0,
  keySeparator: ".",
  nsSeparator: ":",
  pluralSeparator: "_",
  contextSeparator: "_",
  partialBundledLanguages: !1,
  saveMissing: !1,
  updateMissing: !1,
  saveMissingTo: "fallback",
  saveMissingPlurals: !0,
  missingKeyHandler: !1,
  missingInterpolationHandler: !1,
  postProcess: !1,
  postProcessPassResolved: !1,
  returnNull: !1,
  returnEmptyString: !0,
  returnObjects: !1,
  joinArrays: !1,
  returnedObjectHandler: !1,
  parseMissingKeyHandler: !1,
  appendNamespaceToMissingKey: !1,
  appendNamespaceToCIMode: !1,
  overloadTranslationOptionHandler: (h) => {
    let o = {};
    if (typeof h[1] == "object" && (o = h[1]), Qe(h[1]) && (o.defaultValue = h[1]), Qe(h[2]) && (o.tDescription = h[2]), typeof h[2] == "object" || typeof h[3] == "object") {
      const c = h[3] || h[2];
      Object.keys(c).forEach((d) => {
        o[d] = c[d];
      });
    }
    return o;
  },
  interpolation: {
    escapeValue: !0,
    format: (h) => h,
    prefix: "{{",
    suffix: "}}",
    formatSeparator: ",",
    unescapePrefix: "-",
    nestingPrefix: "$t(",
    nestingSuffix: ")",
    nestingOptionsSeparator: ",",
    maxReplaces: 1e3,
    skipOnVariables: !0
  }
}), Ls = (h) => (Qe(h.ns) && (h.ns = [h.ns]), Qe(h.fallbackLng) && (h.fallbackLng = [h.fallbackLng]), Qe(h.fallbackNS) && (h.fallbackNS = [h.fallbackNS]), h.supportedLngs && h.supportedLngs.indexOf("cimode") < 0 && (h.supportedLngs = h.supportedLngs.concat(["cimode"])), h), lo = () => {
}, Nd = (h) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(h)).forEach((c) => {
    typeof h[c] == "function" && (h[c] = h[c].bind(h));
  });
};
class jr extends yo {
  constructor() {
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, c = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = Ls(o), this.services = {}, this.logger = Un, this.modules = {
      external: []
    }, Nd(this), c && !this.isInitialized && !o.isClone) {
      if (!this.options.initImmediate)
        return this.init(o, c), this;
      setTimeout(() => {
        this.init(o, c);
      }, 0);
    }
  }
  init() {
    var o = this;
    let c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, d = arguments.length > 1 ? arguments[1] : void 0;
    this.isInitializing = !0, typeof c == "function" && (d = c, c = {}), !c.defaultNS && c.defaultNS !== !1 && c.ns && (Qe(c.ns) ? c.defaultNS = c.ns : c.ns.indexOf("translation") < 0 && (c.defaultNS = c.ns[0]));
    const y = Ns();
    this.options = {
      ...y,
      ...this.options,
      ...Ls(c)
    }, this.options.compatibilityAPI !== "v1" && (this.options.interpolation = {
      ...y.interpolation,
      ...this.options.interpolation
    }), c.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = c.keySeparator), c.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = c.nsSeparator);
    const m = (q) => q ? typeof q == "function" ? new q() : q : null;
    if (!this.options.isClone) {
      this.modules.logger ? Un.init(m(this.modules.logger), this.options) : Un.init(null, this.options);
      let q;
      this.modules.formatter ? q = this.modules.formatter : typeof Intl < "u" && (q = Od);
      const X = new Os(this.options);
      this.store = new Rs(this.options.resources, this.options);
      const j = this.services;
      j.logger = Un, j.resourceStore = this.store, j.languageUtils = X, j.pluralResolver = new Td(X, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), q && (!this.options.interpolation.format || this.options.interpolation.format === y.interpolation.format) && (j.formatter = m(q), j.formatter.init(j, this.options), this.options.interpolation.format = j.formatter.format.bind(j.formatter)), j.interpolator = new Rd(this.options), j.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, j.backendConnector = new Bd(m(this.modules.backend), j.resourceStore, j, this.options), j.backendConnector.on("*", function(W) {
        for (var we = arguments.length, ge = new Array(we > 1 ? we - 1 : 0), z = 1; z < we; z++)
          ge[z - 1] = arguments[z];
        o.emit(W, ...ge);
      }), this.modules.languageDetector && (j.languageDetector = m(this.modules.languageDetector), j.languageDetector.init && j.languageDetector.init(j, this.options.detection, this.options)), this.modules.i18nFormat && (j.i18nFormat = m(this.modules.i18nFormat), j.i18nFormat.init && j.i18nFormat.init(this)), this.translator = new wo(this.services, this.options), this.translator.on("*", function(W) {
        for (var we = arguments.length, ge = new Array(we > 1 ? we - 1 : 0), z = 1; z < we; z++)
          ge[z - 1] = arguments[z];
        o.emit(W, ...ge);
      }), this.modules.external.forEach((W) => {
        W.init && W.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, d || (d = lo), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const q = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      q.length > 0 && q[0] !== "dev" && (this.options.lng = q[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((q) => {
      this[q] = function() {
        return o.store[q](...arguments);
      };
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((q) => {
      this[q] = function() {
        return o.store[q](...arguments), o;
      };
    });
    const _ = Lr(), U = () => {
      const q = (X, j) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), _.resolve(j), d(X, j);
      };
      if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized) return q(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, q);
    };
    return this.options.resources || !this.options.initImmediate ? U() : setTimeout(U, 0), _;
  }
  loadResources(o) {
    let d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : lo;
    const y = Qe(o) ? o : this.language;
    if (typeof o == "function" && (d = o), !this.options.resources || this.options.partialBundledLanguages) {
      if (y && y.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return d();
      const m = [], S = (I) => {
        if (!I || I === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(I).forEach((U) => {
          U !== "cimode" && m.indexOf(U) < 0 && m.push(U);
        });
      };
      y ? S(y) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((_) => S(_)), this.options.preload && this.options.preload.forEach((I) => S(I)), this.services.backendConnector.load(m, this.options.ns, (I) => {
        !I && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), d(I);
      });
    } else
      d(null);
  }
  reloadResources(o, c, d) {
    const y = Lr();
    return typeof o == "function" && (d = o, o = void 0), typeof c == "function" && (d = c, c = void 0), o || (o = this.languages), c || (c = this.options.ns), d || (d = lo), this.services.backendConnector.reload(o, c, (m) => {
      y.resolve(), d(m);
    }), y;
  }
  use(o) {
    if (!o) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!o.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return o.type === "backend" && (this.modules.backend = o), (o.type === "logger" || o.log && o.warn && o.error) && (this.modules.logger = o), o.type === "languageDetector" && (this.modules.languageDetector = o), o.type === "i18nFormat" && (this.modules.i18nFormat = o), o.type === "postProcessor" && tc.addPostProcessor(o), o.type === "formatter" && (this.modules.formatter = o), o.type === "3rdParty" && this.modules.external.push(o), this;
  }
  setResolvedLanguage(o) {
    if (!(!o || !this.languages) && !(["cimode", "dev"].indexOf(o) > -1))
      for (let c = 0; c < this.languages.length; c++) {
        const d = this.languages[c];
        if (!(["cimode", "dev"].indexOf(d) > -1) && this.store.hasLanguageSomeTranslations(d)) {
          this.resolvedLanguage = d;
          break;
        }
      }
  }
  changeLanguage(o, c) {
    var d = this;
    this.isLanguageChangingTo = o;
    const y = Lr();
    this.emit("languageChanging", o);
    const m = (_) => {
      this.language = _, this.languages = this.services.languageUtils.toResolveHierarchy(_), this.resolvedLanguage = void 0, this.setResolvedLanguage(_);
    }, S = (_, U) => {
      U ? (m(U), this.translator.changeLanguage(U), this.isLanguageChangingTo = void 0, this.emit("languageChanged", U), this.logger.log("languageChanged", U)) : this.isLanguageChangingTo = void 0, y.resolve(function() {
        return d.t(...arguments);
      }), c && c(_, function() {
        return d.t(...arguments);
      });
    }, I = (_) => {
      !o && !_ && this.services.languageDetector && (_ = []);
      const U = Qe(_) ? _ : this.services.languageUtils.getBestMatchFromCodes(_);
      U && (this.language || m(U), this.translator.language || this.translator.changeLanguage(U), this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(U)), this.loadResources(U, (q) => {
        S(q, U);
      });
    };
    return !o && this.services.languageDetector && !this.services.languageDetector.async ? I(this.services.languageDetector.detect()) : !o && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(I) : this.services.languageDetector.detect(I) : I(o), y;
  }
  getFixedT(o, c, d) {
    var y = this;
    const m = function(S, I) {
      let _;
      if (typeof I != "object") {
        for (var U = arguments.length, q = new Array(U > 2 ? U - 2 : 0), X = 2; X < U; X++)
          q[X - 2] = arguments[X];
        _ = y.options.overloadTranslationOptionHandler([S, I].concat(q));
      } else
        _ = {
          ...I
        };
      _.lng = _.lng || m.lng, _.lngs = _.lngs || m.lngs, _.ns = _.ns || m.ns, _.keyPrefix !== "" && (_.keyPrefix = _.keyPrefix || d || m.keyPrefix);
      const j = y.options.keySeparator || ".";
      let W;
      return _.keyPrefix && Array.isArray(S) ? W = S.map((we) => `${_.keyPrefix}${j}${we}`) : W = _.keyPrefix ? `${_.keyPrefix}${j}${S}` : S, y.t(W, _);
    };
    return Qe(o) ? m.lng = o : m.lngs = o, m.ns = c, m.keyPrefix = d, m;
  }
  t() {
    return this.translator && this.translator.translate(...arguments);
  }
  exists() {
    return this.translator && this.translator.exists(...arguments);
  }
  setDefaultNamespace(o) {
    this.options.defaultNS = o;
  }
  hasLoadedNamespace(o) {
    let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const d = c.lng || this.resolvedLanguage || this.languages[0], y = this.options ? this.options.fallbackLng : !1, m = this.languages[this.languages.length - 1];
    if (d.toLowerCase() === "cimode") return !0;
    const S = (I, _) => {
      const U = this.services.backendConnector.state[`${I}|${_}`];
      return U === -1 || U === 0 || U === 2;
    };
    if (c.precheck) {
      const I = c.precheck(this, S);
      if (I !== void 0) return I;
    }
    return !!(this.hasResourceBundle(d, o) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || S(d, o) && (!y || S(m, o)));
  }
  loadNamespaces(o, c) {
    const d = Lr();
    return this.options.ns ? (Qe(o) && (o = [o]), o.forEach((y) => {
      this.options.ns.indexOf(y) < 0 && this.options.ns.push(y);
    }), this.loadResources((y) => {
      d.resolve(), c && c(y);
    }), d) : (c && c(), Promise.resolve());
  }
  loadLanguages(o, c) {
    const d = Lr();
    Qe(o) && (o = [o]);
    const y = this.options.preload || [], m = o.filter((S) => y.indexOf(S) < 0 && this.services.languageUtils.isSupportedCode(S));
    return m.length ? (this.options.preload = y.concat(m), this.loadResources((S) => {
      d.resolve(), c && c(S);
    }), d) : (c && c(), Promise.resolve());
  }
  dir(o) {
    if (o || (o = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !o) return "rtl";
    const c = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], d = this.services && this.services.languageUtils || new Os(Ns());
    return c.indexOf(d.getLanguagePartFromCode(o)) > -1 || o.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, c = arguments.length > 1 ? arguments[1] : void 0;
    return new jr(o, c);
  }
  cloneInstance() {
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : lo;
    const d = o.forkResourceStore;
    d && delete o.forkResourceStore;
    const y = {
      ...this.options,
      ...o,
      isClone: !0
    }, m = new jr(y);
    return (o.debug !== void 0 || o.prefix !== void 0) && (m.logger = m.logger.clone(o)), ["store", "services", "language"].forEach((I) => {
      m[I] = this[I];
    }), m.services = {
      ...this.services
    }, m.services.utils = {
      hasLoadedNamespace: m.hasLoadedNamespace.bind(m)
    }, d && (m.store = new Rs(this.store.data, y), m.services.resourceStore = m.store), m.translator = new wo(m.services, y), m.translator.on("*", function(I) {
      for (var _ = arguments.length, U = new Array(_ > 1 ? _ - 1 : 0), q = 1; q < _; q++)
        U[q - 1] = arguments[q];
      m.emit(I, ...U);
    }), m.init(y, c), m.translator.options = y, m.translator.backendConnector.services.utils = {
      hasLoadedNamespace: m.hasLoadedNamespace.bind(m)
    }, m;
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage
    };
  }
}
const nc = jr.createInstance();
nc.createInstance = jr.createInstance;
var Ld = nc;
(() => {
  var h = { 847: (y, m) => {
    var S = { 2346: function(j, W, we) {
      var ge = this && this.__importDefault || function(Y) {
        return Y && Y.__esModule ? Y : { default: Y };
      };
      Object.defineProperty(W, "__esModule", { value: !0 }), W.getMostReadable = W.darkenColor = W.lightenColor = void 0;
      const z = ge(we(6535));
      W.lightenColor = (Y, Ce) => Me(Y, "lighten", Ce), W.darkenColor = (Y, Ce) => Me(Y, "darken", Ce);
      const Me = (Y, Ce, ne) => {
        if (ne && (ne < 0 || ne > 100)) throw new Error(`${ne} must be a number between 0 and 100`);
        return (0, z.default)(Y)[Ce](ne).toString();
      };
      W.getMostReadable = (Y, Ce) => z.default.mostReadable(Y, Ce).toHexString();
    }, 2317: (j, W) => {
      Object.defineProperty(W, "__esModule", { value: !0 }), W.IconSize = W.Transition = W.LineHeight = W.FontWeight = W.FontSize = W.FontFamily = W.Shadow = W.Radius = W.UnitPx = W.Unit = W.SizeName = W.Size = W.Color = void 0, W.Color = { white: "#FFFFFF", lightGray1: "#FAFBFE", lightGray2: "#F3F5F8", lightGray3: "#ECEEF1", lightGray4: "#DDDFE4", lightGray5: "#C9CBD2", neutralGray: "#7D808A", neutralGray80: "rgba(125,128,138,0.8)", silverGray: "#C0C1C2", darkGray1: "#53565F", darkGray2: "#383A40", darkGray3: "#2F3136", darkGray4: "#24262B", darkGray5: "#1E1F23", darkGray6: "#111214", openFinDarkest: "#3D39CD", openFinDarker: "#4642E0", openFin: "#504CFF", openFinLight: "#5254FB", openFinLighter: "#5C5EFE", openFinLightest: "#6864FF", functional1: "#207735", functional2: "#46C8F1", functional3: "#0A76D3", functional4: "#6CADE5", functional5: "#0A76D3", functional6: "#882BFE", functional7: "#F31818", functional8: "#C93400", functional9: "#FF5E60", functional10: "#F48F00", purple: "#8C61FF", lightblue: "#36C3FE", aqua: "#00CC88", yellow: "#FFEB00", salmon: "#FF8C4C", pink: "#FF5E60", lightpink: "#FF8FB8", white00: "rgba(255,255,255,0.0)", white10: "rgba(255,255,255,0.1)", white20: "rgba(255,255,255,0.2)", white30: "rgba(255,255,255,0.3)", white40: "rgba(255,255,255,0.4)", white50: "rgba(255,255,255,0.5)", white60: "rgba(255,255,255,0.6)", white70: "rgba(255,255,255,0.7)", white80: "rgba(255,255,255,0.8)", white90: "rgba(255,255,255,0.9)", black00: "rgba(0,0,0,0.0)", black10: "rgba(0,0,0,0.1)", black20: "rgba(0,0,0,0.2)", black30: "rgba(0,0,0,0.3)", black40: "rgba(0,0,0,0.4)", black50: "rgba(0,0,0,0.5)", black60: "rgba(0,0,0,0.6)", black70: "rgba(0,0,0,0.7)", black80: "rgba(0,0,0,0.8)", black90: "rgba(0,0,0,0.9)", transparent: "transparent", openFinActive: "#4642FF", openFinHover: "#6965FF", lightGray4Active: "#D7DADF", lightGray4Hover: "#EBECEF", darkGray2Active: "#33353B", darkGray2Hover: "#44464E" }, W.Size = { xsmall: "xsmall", small: "small", base: "base", large: "large", xlarge: "xlarge", xxlarge: "xxlarge", xxxlarge: "xxxlarge", xxxxlarge: "xxxxlarge" }, W.SizeName = { [W.Size.xsmall]: "Extra Small", [W.Size.small]: "Small", [W.Size.base]: "Base", [W.Size.large]: "Large", [W.Size.xlarge]: "Extra Large", [W.Size.xxlarge]: "2X Large", [W.Size.xxxlarge]: "3X Large", [W.Size.xxxxlarge]: "4X Large" }, W.Unit = { [W.Size.xsmall]: 4, [W.Size.small]: 8, [W.Size.base]: 12, [W.Size.large]: 16, [W.Size.xlarge]: 20, [W.Size.xxlarge]: 24, [W.Size.xxxlarge]: 32, [W.Size.xxxxlarge]: 48 }, W.UnitPx = { [W.Size.xsmall]: "4px", [W.Size.small]: "8px", [W.Size.base]: "12px", [W.Size.large]: "16px", [W.Size.xlarge]: "20px", [W.Size.xxlarge]: "24px", [W.Size.xxxlarge]: "32px", [W.Size.xxxxlarge]: "48px" }, W.Radius = { [W.Size.xsmall]: "2px", [W.Size.small]: "4px", [W.Size.base]: "8px", [W.Size.large]: "24px", pill: "100vh", round: "50%", none: "0" }, W.Shadow = { [W.Size.base]: "0 4px 4px rgba(0, 0, 0, 0.25)" }, W.FontFamily = ["Inter", "system-ui", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen-Sans", "Ubuntu", "Cantarell", "Helvetica Neue", "sans-serif"].join(","), W.FontSize = { [W.Size.xsmall]: "8px", [W.Size.small]: "10px", [W.Size.base]: "12px", [W.Size.large]: "14px", [W.Size.xlarge]: "16px", [W.Size.xxlarge]: "18px", [W.Size.xxxlarge]: "20px", [W.Size.xxxxlarge]: "40px" }, W.FontWeight = { normal: 400, bold: 600 }, W.LineHeight = { ui: 1, heading: 1.2, text: 1.5 }, W.Transition = { base: "200ms cubic-bezier(0.16, 1, 0.3, 1)", none: "0ms" }, W.IconSize = { [W.Size.xsmall]: W.UnitPx.small, [W.Size.small]: W.UnitPx.base, [W.Size.base]: "15px", [W.Size.large]: W.UnitPx.xlarge, [W.Size.xlarge]: W.UnitPx.xxlarge, [W.Size.xxlarge]: W.UnitPx.xxxlarge, [W.Size.xxxlarge]: W.UnitPx.xxxxlarge };
    }, 6893: (j, W, we) => {
      Object.defineProperty(W, "__esModule", { value: !0 }), W.createTheme = void 0;
      const ge = we(2317), z = we(2346), Me = we(5939), Y = { fontFamily: ge.FontFamily, fontSize: ge.FontSize, fontWeight: ge.FontWeight, lineHeight: ge.LineHeight, iconSize: ge.IconSize, radius: ge.Radius, shadow: ge.Shadow, transition: ge.Transition, unit: ge.Unit, px: ge.UnitPx }, Ce = (ne, Ie) => ({ [`${ne}Active`]: (0, z.darkenColor)(Ie, 2), [`${ne}Hover`]: (0, z.lightenColor)(Ie, 5), [`${ne}Focused`]: (0, z.getMostReadable)(Ie, [ge.Color.white, ge.Color.darkGray5]), [`${ne}Text`]: (0, z.getMostReadable)(Ie, [ge.Color.white, ge.Color.darkGray5]) });
      W.createTheme = (ne) => Object.assign(Object.assign({}, Y), { palette: Object.assign(Object.assign(Object.assign({}, Ce(Me.Palette.brandPrimary, ne.brandPrimary)), Ce(Me.Palette.brandSecondary, ne.brandSecondary)), ne) });
    }, 5939: (j, W) => {
      Object.defineProperty(W, "__esModule", { value: !0 }), W.Palette = void 0, W.Palette = { background1: "background1", background2: "background2", background3: "background3", background4: "background4", background5: "background5", background6: "background6", brandPrimary: "brandPrimary", brandSecondary: "brandSecondary", brandPrimaryActive: "brandPrimaryActive", brandPrimaryHover: "brandPrimaryHover", brandPrimaryFocused: "brandPrimaryFocused", brandPrimaryText: "brandPrimaryText", brandSecondaryActive: "brandSecondaryActive", brandSecondaryHover: "brandSecondaryHover", brandSecondaryFocused: "brandSecondaryFocused", brandSecondaryText: "brandSecondaryText", inputBackground: "inputBackground", inputColor: "inputColor", inputPlaceholder: "inputPlaceholder", inputDisabled: "inputDisabled", inputFocused: "inputFocused", inputBorder: "inputBorder", statusSuccess: "statusSuccess", statusWarning: "statusWarning", statusCritical: "statusCritical", statusActive: "statusActive", textDefault: "textDefault", textHelp: "textHelp", textInactive: "textInactive", borderNeutral: "borderNeutral", contentBackground1: "contentBackground1", contentBackground2: "contentBackground2", contentBackground3: "contentBackground3", contentBackground4: "contentBackground4", contentBackground5: "contentBackground5", linkDefault: "linkDefault", linkHover: "linkHover" };
    }, 6535: function(j) {
      j.exports = function() {
        function W(C) {
          return (W = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(H) {
            return typeof H;
          } : function(H) {
            return H && typeof Symbol == "function" && H.constructor === Symbol && H !== Symbol.prototype ? "symbol" : typeof H;
          })(C);
        }
        var we = /^\s+/, ge = /\s+$/;
        function z(C, H) {
          if (H = H || {}, (C = C || "") instanceof z) return C;
          if (!(this instanceof z)) return new z(C, H);
          var G = function(ae) {
            var Oe, Ke, Be, yt = { r: 0, g: 0, b: 0 }, gt = 1, Re = null, dn = null, Jt = null, pn = !1, Ut = !1;
            return typeof ae == "string" && (ae = function(it) {
              it = it.replace(we, "").replace(ge, "").toLowerCase();
              var Se, pt = !1;
              if (_t[it]) it = _t[it], pt = !0;
              else if (it == "transparent") return { r: 0, g: 0, b: 0, a: 0, format: "name" };
              return (Se = Ft.rgb.exec(it)) ? { r: Se[1], g: Se[2], b: Se[3] } : (Se = Ft.rgba.exec(it)) ? { r: Se[1], g: Se[2], b: Se[3], a: Se[4] } : (Se = Ft.hsl.exec(it)) ? { h: Se[1], s: Se[2], l: Se[3] } : (Se = Ft.hsla.exec(it)) ? { h: Se[1], s: Se[2], l: Se[3], a: Se[4] } : (Se = Ft.hsv.exec(it)) ? { h: Se[1], s: Se[2], v: Se[3] } : (Se = Ft.hsva.exec(it)) ? { h: Se[1], s: Se[2], v: Se[3], a: Se[4] } : (Se = Ft.hex8.exec(it)) ? { r: ue(Se[1]), g: ue(Se[2]), b: ue(Se[3]), a: Xe(Se[4]), format: pt ? "name" : "hex8" } : (Se = Ft.hex6.exec(it)) ? { r: ue(Se[1]), g: ue(Se[2]), b: ue(Se[3]), format: pt ? "name" : "hex" } : (Se = Ft.hex4.exec(it)) ? { r: ue(Se[1] + "" + Se[1]), g: ue(Se[2] + "" + Se[2]), b: ue(Se[3] + "" + Se[3]), a: Xe(Se[4] + "" + Se[4]), format: pt ? "name" : "hex8" } : !!(Se = Ft.hex3.exec(it)) && { r: ue(Se[1] + "" + Se[1]), g: ue(Se[2] + "" + Se[2]), b: ue(Se[3] + "" + Se[3]), format: pt ? "name" : "hex" };
            }(ae)), W(ae) == "object" && (Nt(ae.r) && Nt(ae.g) && Nt(ae.b) ? (Oe = ae.r, Ke = ae.g, Be = ae.b, yt = { r: 255 * Ge(Oe, 255), g: 255 * Ge(Ke, 255), b: 255 * Ge(Be, 255) }, pn = !0, Ut = String(ae.r).substr(-1) === "%" ? "prgb" : "rgb") : Nt(ae.h) && Nt(ae.s) && Nt(ae.v) ? (Re = We(ae.s), dn = We(ae.v), yt = function(it, Se, pt) {
              it = 6 * Ge(it, 360), Se = Ge(Se, 100), pt = Ge(pt, 100);
              var Ht = Math.floor(it), cn = it - Ht, jt = pt * (1 - Se), vt = pt * (1 - cn * Se), Mt = pt * (1 - (1 - cn) * Se), Yt = Ht % 6;
              return { r: 255 * [pt, vt, jt, jt, Mt, pt][Yt], g: 255 * [Mt, pt, pt, vt, jt, jt][Yt], b: 255 * [jt, jt, Mt, pt, pt, vt][Yt] };
            }(ae.h, Re, dn), pn = !0, Ut = "hsv") : Nt(ae.h) && Nt(ae.s) && Nt(ae.l) && (Re = We(ae.s), Jt = We(ae.l), yt = function(it, Se, pt) {
              var Ht, cn, jt;
              function vt(Kt, _e, $t) {
                return $t < 0 && ($t += 1), $t > 1 && ($t -= 1), $t < 1 / 6 ? Kt + 6 * (_e - Kt) * $t : $t < 0.5 ? _e : $t < 2 / 3 ? Kt + (_e - Kt) * (2 / 3 - $t) * 6 : Kt;
              }
              if (it = Ge(it, 360), Se = Ge(Se, 100), pt = Ge(pt, 100), Se === 0) Ht = cn = jt = pt;
              else {
                var Mt = pt < 0.5 ? pt * (1 + Se) : pt + Se - pt * Se, Yt = 2 * pt - Mt;
                Ht = vt(Yt, Mt, it + 1 / 3), cn = vt(Yt, Mt, it), jt = vt(Yt, Mt, it - 1 / 3);
              }
              return { r: 255 * Ht, g: 255 * cn, b: 255 * jt };
            }(ae.h, Re, Jt), pn = !0, Ut = "hsl"), ae.hasOwnProperty("a") && (gt = ae.a)), gt = ht(gt), { ok: pn, format: ae.format || Ut, r: Math.min(255, Math.max(yt.r, 0)), g: Math.min(255, Math.max(yt.g, 0)), b: Math.min(255, Math.max(yt.b, 0)), a: gt };
          }(C);
          this._originalInput = C, this._r = G.r, this._g = G.g, this._b = G.b, this._a = G.a, this._roundA = Math.round(100 * this._a) / 100, this._format = H.format || G.format, this._gradientType = H.gradientType, this._r < 1 && (this._r = Math.round(this._r)), this._g < 1 && (this._g = Math.round(this._g)), this._b < 1 && (this._b = Math.round(this._b)), this._ok = G.ok;
        }
        function Me(C, H, G) {
          C = Ge(C, 255), H = Ge(H, 255), G = Ge(G, 255);
          var ae, Oe, Ke = Math.max(C, H, G), Be = Math.min(C, H, G), yt = (Ke + Be) / 2;
          if (Ke == Be) ae = Oe = 0;
          else {
            var gt = Ke - Be;
            switch (Oe = yt > 0.5 ? gt / (2 - Ke - Be) : gt / (Ke + Be), Ke) {
              case C:
                ae = (H - G) / gt + (H < G ? 6 : 0);
                break;
              case H:
                ae = (G - C) / gt + 2;
                break;
              case G:
                ae = (C - H) / gt + 4;
            }
            ae /= 6;
          }
          return { h: ae, s: Oe, l: yt };
        }
        function Y(C, H, G) {
          C = Ge(C, 255), H = Ge(H, 255), G = Ge(G, 255);
          var ae, Oe, Ke = Math.max(C, H, G), Be = Math.min(C, H, G), yt = Ke, gt = Ke - Be;
          if (Oe = Ke === 0 ? 0 : gt / Ke, Ke == Be) ae = 0;
          else {
            switch (Ke) {
              case C:
                ae = (H - G) / gt + (H < G ? 6 : 0);
                break;
              case H:
                ae = (G - C) / gt + 2;
                break;
              case G:
                ae = (C - H) / gt + 4;
            }
            ae /= 6;
          }
          return { h: ae, s: Oe, v: yt };
        }
        function Ce(C, H, G, ae) {
          var Oe = [Ae(Math.round(C).toString(16)), Ae(Math.round(H).toString(16)), Ae(Math.round(G).toString(16))];
          return ae && Oe[0].charAt(0) == Oe[0].charAt(1) && Oe[1].charAt(0) == Oe[1].charAt(1) && Oe[2].charAt(0) == Oe[2].charAt(1) ? Oe[0].charAt(0) + Oe[1].charAt(0) + Oe[2].charAt(0) : Oe.join("");
        }
        function ne(C, H, G, ae) {
          return [Ae(Ye(ae)), Ae(Math.round(C).toString(16)), Ae(Math.round(H).toString(16)), Ae(Math.round(G).toString(16))].join("");
        }
        function Ie(C, H) {
          H = H === 0 ? 0 : H || 10;
          var G = z(C).toHsl();
          return G.s -= H / 100, G.s = D(G.s), z(G);
        }
        function se(C, H) {
          H = H === 0 ? 0 : H || 10;
          var G = z(C).toHsl();
          return G.s += H / 100, G.s = D(G.s), z(G);
        }
        function ce(C) {
          return z(C).desaturate(100);
        }
        function dt(C, H) {
          H = H === 0 ? 0 : H || 10;
          var G = z(C).toHsl();
          return G.l += H / 100, G.l = D(G.l), z(G);
        }
        function at(C, H) {
          H = H === 0 ? 0 : H || 10;
          var G = z(C).toRgb();
          return G.r = Math.max(0, Math.min(255, G.r - Math.round(-H / 100 * 255))), G.g = Math.max(0, Math.min(255, G.g - Math.round(-H / 100 * 255))), G.b = Math.max(0, Math.min(255, G.b - Math.round(-H / 100 * 255))), z(G);
        }
        function Je(C, H) {
          H = H === 0 ? 0 : H || 10;
          var G = z(C).toHsl();
          return G.l -= H / 100, G.l = D(G.l), z(G);
        }
        function ut(C, H) {
          var G = z(C).toHsl(), ae = (G.h + H) % 360;
          return G.h = ae < 0 ? 360 + ae : ae, z(G);
        }
        function Dt(C) {
          var H = z(C).toHsl();
          return H.h = (H.h + 180) % 360, z(H);
        }
        function Fe(C, H) {
          if (isNaN(H) || H <= 0) throw new Error("Argument to polyad must be a positive number");
          for (var G = z(C).toHsl(), ae = [z(C)], Oe = 360 / H, Ke = 1; Ke < H; Ke++) ae.push(z({ h: (G.h + Ke * Oe) % 360, s: G.s, l: G.l }));
          return ae;
        }
        function Pt(C) {
          var H = z(C).toHsl(), G = H.h;
          return [z(C), z({ h: (G + 72) % 360, s: H.s, l: H.l }), z({ h: (G + 216) % 360, s: H.s, l: H.l })];
        }
        function Le(C, H, G) {
          H = H || 6, G = G || 30;
          var ae = z(C).toHsl(), Oe = 360 / G, Ke = [z(C)];
          for (ae.h = (ae.h - (Oe * H >> 1) + 720) % 360; --H; ) ae.h = (ae.h + Oe) % 360, Ke.push(z(ae));
          return Ke;
        }
        function bt(C, H) {
          H = H || 6;
          for (var G = z(C).toHsv(), ae = G.h, Oe = G.s, Ke = G.v, Be = [], yt = 1 / H; H--; ) Be.push(z({ h: ae, s: Oe, v: Ke })), Ke = (Ke + yt) % 1;
          return Be;
        }
        z.prototype = { isDark: function() {
          return this.getBrightness() < 128;
        }, isLight: function() {
          return !this.isDark();
        }, isValid: function() {
          return this._ok;
        }, getOriginalInput: function() {
          return this._originalInput;
        }, getFormat: function() {
          return this._format;
        }, getAlpha: function() {
          return this._a;
        }, getBrightness: function() {
          var C = this.toRgb();
          return (299 * C.r + 587 * C.g + 114 * C.b) / 1e3;
        }, getLuminance: function() {
          var C, H, G, ae = this.toRgb();
          return C = ae.r / 255, H = ae.g / 255, G = ae.b / 255, 0.2126 * (C <= 0.03928 ? C / 12.92 : Math.pow((C + 0.055) / 1.055, 2.4)) + 0.7152 * (H <= 0.03928 ? H / 12.92 : Math.pow((H + 0.055) / 1.055, 2.4)) + 0.0722 * (G <= 0.03928 ? G / 12.92 : Math.pow((G + 0.055) / 1.055, 2.4));
        }, setAlpha: function(C) {
          return this._a = ht(C), this._roundA = Math.round(100 * this._a) / 100, this;
        }, toHsv: function() {
          var C = Y(this._r, this._g, this._b);
          return { h: 360 * C.h, s: C.s, v: C.v, a: this._a };
        }, toHsvString: function() {
          var C = Y(this._r, this._g, this._b), H = Math.round(360 * C.h), G = Math.round(100 * C.s), ae = Math.round(100 * C.v);
          return this._a == 1 ? "hsv(" + H + ", " + G + "%, " + ae + "%)" : "hsva(" + H + ", " + G + "%, " + ae + "%, " + this._roundA + ")";
        }, toHsl: function() {
          var C = Me(this._r, this._g, this._b);
          return { h: 360 * C.h, s: C.s, l: C.l, a: this._a };
        }, toHslString: function() {
          var C = Me(this._r, this._g, this._b), H = Math.round(360 * C.h), G = Math.round(100 * C.s), ae = Math.round(100 * C.l);
          return this._a == 1 ? "hsl(" + H + ", " + G + "%, " + ae + "%)" : "hsla(" + H + ", " + G + "%, " + ae + "%, " + this._roundA + ")";
        }, toHex: function(C) {
          return Ce(this._r, this._g, this._b, C);
        }, toHexString: function(C) {
          return "#" + this.toHex(C);
        }, toHex8: function(C) {
          return function(H, G, ae, Oe, Ke) {
            var Be = [Ae(Math.round(H).toString(16)), Ae(Math.round(G).toString(16)), Ae(Math.round(ae).toString(16)), Ae(Ye(Oe))];
            return Ke && Be[0].charAt(0) == Be[0].charAt(1) && Be[1].charAt(0) == Be[1].charAt(1) && Be[2].charAt(0) == Be[2].charAt(1) && Be[3].charAt(0) == Be[3].charAt(1) ? Be[0].charAt(0) + Be[1].charAt(0) + Be[2].charAt(0) + Be[3].charAt(0) : Be.join("");
          }(this._r, this._g, this._b, this._a, C);
        }, toHex8String: function(C) {
          return "#" + this.toHex8(C);
        }, toRgb: function() {
          return { r: Math.round(this._r), g: Math.round(this._g), b: Math.round(this._b), a: this._a };
        }, toRgbString: function() {
          return this._a == 1 ? "rgb(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ")" : "rgba(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ", " + this._roundA + ")";
        }, toPercentageRgb: function() {
          return { r: Math.round(100 * Ge(this._r, 255)) + "%", g: Math.round(100 * Ge(this._g, 255)) + "%", b: Math.round(100 * Ge(this._b, 255)) + "%", a: this._a };
        }, toPercentageRgbString: function() {
          return this._a == 1 ? "rgb(" + Math.round(100 * Ge(this._r, 255)) + "%, " + Math.round(100 * Ge(this._g, 255)) + "%, " + Math.round(100 * Ge(this._b, 255)) + "%)" : "rgba(" + Math.round(100 * Ge(this._r, 255)) + "%, " + Math.round(100 * Ge(this._g, 255)) + "%, " + Math.round(100 * Ge(this._b, 255)) + "%, " + this._roundA + ")";
        }, toName: function() {
          return this._a === 0 ? "transparent" : !(this._a < 1) && (mt[Ce(this._r, this._g, this._b, !0)] || !1);
        }, toFilter: function(C) {
          var H = "#" + ne(this._r, this._g, this._b, this._a), G = H, ae = this._gradientType ? "GradientType = 1, " : "";
          if (C) {
            var Oe = z(C);
            G = "#" + ne(Oe._r, Oe._g, Oe._b, Oe._a);
          }
          return "progid:DXImageTransform.Microsoft.gradient(" + ae + "startColorstr=" + H + ",endColorstr=" + G + ")";
        }, toString: function(C) {
          var H = !!C;
          C = C || this._format;
          var G = !1, ae = this._a < 1 && this._a >= 0;
          return H || !ae || C !== "hex" && C !== "hex6" && C !== "hex3" && C !== "hex4" && C !== "hex8" && C !== "name" ? (C === "rgb" && (G = this.toRgbString()), C === "prgb" && (G = this.toPercentageRgbString()), C !== "hex" && C !== "hex6" || (G = this.toHexString()), C === "hex3" && (G = this.toHexString(!0)), C === "hex4" && (G = this.toHex8String(!0)), C === "hex8" && (G = this.toHex8String()), C === "name" && (G = this.toName()), C === "hsl" && (G = this.toHslString()), C === "hsv" && (G = this.toHsvString()), G || this.toHexString()) : C === "name" && this._a === 0 ? this.toName() : this.toRgbString();
        }, clone: function() {
          return z(this.toString());
        }, _applyModification: function(C, H) {
          var G = C.apply(null, [this].concat([].slice.call(H)));
          return this._r = G._r, this._g = G._g, this._b = G._b, this.setAlpha(G._a), this;
        }, lighten: function() {
          return this._applyModification(dt, arguments);
        }, brighten: function() {
          return this._applyModification(at, arguments);
        }, darken: function() {
          return this._applyModification(Je, arguments);
        }, desaturate: function() {
          return this._applyModification(Ie, arguments);
        }, saturate: function() {
          return this._applyModification(se, arguments);
        }, greyscale: function() {
          return this._applyModification(ce, arguments);
        }, spin: function() {
          return this._applyModification(ut, arguments);
        }, _applyCombination: function(C, H) {
          return C.apply(null, [this].concat([].slice.call(H)));
        }, analogous: function() {
          return this._applyCombination(Le, arguments);
        }, complement: function() {
          return this._applyCombination(Dt, arguments);
        }, monochromatic: function() {
          return this._applyCombination(bt, arguments);
        }, splitcomplement: function() {
          return this._applyCombination(Pt, arguments);
        }, triad: function() {
          return this._applyCombination(Fe, [3]);
        }, tetrad: function() {
          return this._applyCombination(Fe, [4]);
        } }, z.fromRatio = function(C, H) {
          if (W(C) == "object") {
            var G = {};
            for (var ae in C) C.hasOwnProperty(ae) && (G[ae] = ae === "a" ? C[ae] : We(C[ae]));
            C = G;
          }
          return z(C, H);
        }, z.equals = function(C, H) {
          return !(!C || !H) && z(C).toRgbString() == z(H).toRgbString();
        }, z.random = function() {
          return z.fromRatio({ r: Math.random(), g: Math.random(), b: Math.random() });
        }, z.mix = function(C, H, G) {
          G = G === 0 ? 0 : G || 50;
          var ae = z(C).toRgb(), Oe = z(H).toRgb(), Ke = G / 100;
          return z({ r: (Oe.r - ae.r) * Ke + ae.r, g: (Oe.g - ae.g) * Ke + ae.g, b: (Oe.b - ae.b) * Ke + ae.b, a: (Oe.a - ae.a) * Ke + ae.a });
        }, z.readability = function(C, H) {
          var G = z(C), ae = z(H);
          return (Math.max(G.getLuminance(), ae.getLuminance()) + 0.05) / (Math.min(G.getLuminance(), ae.getLuminance()) + 0.05);
        }, z.isReadable = function(C, H, G) {
          var ae, Oe, Ke, Be, yt, gt = z.readability(C, H);
          switch (Oe = !1, (Ke = G, (Be = ((Ke = Ke || { level: "AA", size: "small" }).level || "AA").toUpperCase()) !== "AA" && Be !== "AAA" && (Be = "AA"), (yt = (Ke.size || "small").toLowerCase()) !== "small" && yt !== "large" && (yt = "small"), ae = { level: Be, size: yt }).level + ae.size) {
            case "AAsmall":
            case "AAAlarge":
              Oe = gt >= 4.5;
              break;
            case "AAlarge":
              Oe = gt >= 3;
              break;
            case "AAAsmall":
              Oe = gt >= 7;
          }
          return Oe;
        }, z.mostReadable = function(C, H, G) {
          var ae, Oe, Ke, Be, yt = null, gt = 0;
          Oe = (G = G || {}).includeFallbackColors, Ke = G.level, Be = G.size;
          for (var Re = 0; Re < H.length; Re++) (ae = z.readability(C, H[Re])) > gt && (gt = ae, yt = z(H[Re]));
          return z.isReadable(C, yt, { level: Ke, size: Be }) || !Oe ? yt : (G.includeFallbackColors = !1, z.mostReadable(C, ["#fff", "#000"], G));
        };
        var _t = z.names = { aliceblue: "f0f8ff", antiquewhite: "faebd7", aqua: "0ff", aquamarine: "7fffd4", azure: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "000", blanchedalmond: "ffebcd", blue: "00f", blueviolet: "8a2be2", brown: "a52a2a", burlywood: "deb887", burntsienna: "ea7e5d", cadetblue: "5f9ea0", chartreuse: "7fff00", chocolate: "d2691e", coral: "ff7f50", cornflowerblue: "6495ed", cornsilk: "fff8dc", crimson: "dc143c", cyan: "0ff", darkblue: "00008b", darkcyan: "008b8b", darkgoldenrod: "b8860b", darkgray: "a9a9a9", darkgreen: "006400", darkgrey: "a9a9a9", darkkhaki: "bdb76b", darkmagenta: "8b008b", darkolivegreen: "556b2f", darkorange: "ff8c00", darkorchid: "9932cc", darkred: "8b0000", darksalmon: "e9967a", darkseagreen: "8fbc8f", darkslateblue: "483d8b", darkslategray: "2f4f4f", darkslategrey: "2f4f4f", darkturquoise: "00ced1", darkviolet: "9400d3", deeppink: "ff1493", deepskyblue: "00bfff", dimgray: "696969", dimgrey: "696969", dodgerblue: "1e90ff", firebrick: "b22222", floralwhite: "fffaf0", forestgreen: "228b22", fuchsia: "f0f", gainsboro: "dcdcdc", ghostwhite: "f8f8ff", gold: "ffd700", goldenrod: "daa520", gray: "808080", green: "008000", greenyellow: "adff2f", grey: "808080", honeydew: "f0fff0", hotpink: "ff69b4", indianred: "cd5c5c", indigo: "4b0082", ivory: "fffff0", khaki: "f0e68c", lavender: "e6e6fa", lavenderblush: "fff0f5", lawngreen: "7cfc00", lemonchiffon: "fffacd", lightblue: "add8e6", lightcoral: "f08080", lightcyan: "e0ffff", lightgoldenrodyellow: "fafad2", lightgray: "d3d3d3", lightgreen: "90ee90", lightgrey: "d3d3d3", lightpink: "ffb6c1", lightsalmon: "ffa07a", lightseagreen: "20b2aa", lightskyblue: "87cefa", lightslategray: "789", lightslategrey: "789", lightsteelblue: "b0c4de", lightyellow: "ffffe0", lime: "0f0", limegreen: "32cd32", linen: "faf0e6", magenta: "f0f", maroon: "800000", mediumaquamarine: "66cdaa", mediumblue: "0000cd", mediumorchid: "ba55d3", mediumpurple: "9370db", mediumseagreen: "3cb371", mediumslateblue: "7b68ee", mediumspringgreen: "00fa9a", mediumturquoise: "48d1cc", mediumvioletred: "c71585", midnightblue: "191970", mintcream: "f5fffa", mistyrose: "ffe4e1", moccasin: "ffe4b5", navajowhite: "ffdead", navy: "000080", oldlace: "fdf5e6", olive: "808000", olivedrab: "6b8e23", orange: "ffa500", orangered: "ff4500", orchid: "da70d6", palegoldenrod: "eee8aa", palegreen: "98fb98", paleturquoise: "afeeee", palevioletred: "db7093", papayawhip: "ffefd5", peachpuff: "ffdab9", peru: "cd853f", pink: "ffc0cb", plum: "dda0dd", powderblue: "b0e0e6", purple: "800080", rebeccapurple: "663399", red: "f00", rosybrown: "bc8f8f", royalblue: "4169e1", saddlebrown: "8b4513", salmon: "fa8072", sandybrown: "f4a460", seagreen: "2e8b57", seashell: "fff5ee", sienna: "a0522d", silver: "c0c0c0", skyblue: "87ceeb", slateblue: "6a5acd", slategray: "708090", slategrey: "708090", snow: "fffafa", springgreen: "00ff7f", steelblue: "4682b4", tan: "d2b48c", teal: "008080", thistle: "d8bfd8", tomato: "ff6347", turquoise: "40e0d0", violet: "ee82ee", wheat: "f5deb3", white: "fff", whitesmoke: "f5f5f5", yellow: "ff0", yellowgreen: "9acd32" }, mt = z.hexNames = function(C) {
          var H = {};
          for (var G in C) C.hasOwnProperty(G) && (H[C[G]] = G);
          return H;
        }(_t);
        function ht(C) {
          return C = parseFloat(C), (isNaN(C) || C < 0 || C > 1) && (C = 1), C;
        }
        function Ge(C, H) {
          (function(ae) {
            return typeof ae == "string" && ae.indexOf(".") != -1 && parseFloat(ae) === 1;
          })(C) && (C = "100%");
          var G = function(ae) {
            return typeof ae == "string" && ae.indexOf("%") != -1;
          }(C);
          return C = Math.min(H, Math.max(0, parseFloat(C))), G && (C = parseInt(C * H, 10) / 100), Math.abs(C - H) < 1e-6 ? 1 : C % H / parseFloat(H);
        }
        function D(C) {
          return Math.min(1, Math.max(0, C));
        }
        function ue(C) {
          return parseInt(C, 16);
        }
        function Ae(C) {
          return C.length == 1 ? "0" + C : "" + C;
        }
        function We(C) {
          return C <= 1 && (C = 100 * C + "%"), C;
        }
        function Ye(C) {
          return Math.round(255 * parseFloat(C)).toString(16);
        }
        function Xe(C) {
          return ue(C) / 255;
        }
        var je, Ot, ve, Ft = (Ot = "[\\s|\\(]+(" + (je = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)") + ")[,|\\s]+(" + je + ")[,|\\s]+(" + je + ")\\s*\\)?", ve = "[\\s|\\(]+(" + je + ")[,|\\s]+(" + je + ")[,|\\s]+(" + je + ")[,|\\s]+(" + je + ")\\s*\\)?", { CSS_UNIT: new RegExp(je), rgb: new RegExp("rgb" + Ot), rgba: new RegExp("rgba" + ve), hsl: new RegExp("hsl" + Ot), hsla: new RegExp("hsla" + ve), hsv: new RegExp("hsv" + Ot), hsva: new RegExp("hsva" + ve), hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/, hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/ });
        function Nt(C) {
          return !!Ft.CSS_UNIT.exec(C);
        }
        return z;
      }();
    } }, I = {};
    function _(j) {
      var W = I[j];
      if (W !== void 0) return W.exports;
      var we = I[j] = { exports: {} };
      return S[j].call(we.exports, we, we.exports, _), we.exports;
    }
    var U = {};
    (() => {
      var j = U;
      Object.defineProperty(j, "__esModule", { value: !0 }), j.createTheme = j.Palette = j.Color = void 0;
      var W = _(2317);
      Object.defineProperty(j, "Color", { enumerable: !0, get: function() {
        return W.Color;
      } });
      var we = _(5939);
      Object.defineProperty(j, "Palette", { enumerable: !0, get: function() {
        return we.Palette;
      } });
      var ge = _(6893);
      Object.defineProperty(j, "createTheme", { enumerable: !0, get: function() {
        return ge.createTheme;
      } });
    })();
    var q = m;
    for (var X in U) q[X] = U[X];
    U.__esModule && Object.defineProperty(q, "__esModule", { value: !0 });
  }, 877: () => {
  }, 67: () => {
  } }, o = {};
  function c(y) {
    var m = o[y];
    if (m !== void 0) return m.exports;
    var S = o[y] = { exports: {} };
    return h[y](S, S.exports, c), S.exports;
  }
  c.n = (y) => {
    var m = y && y.__esModule ? () => y.default : () => y;
    return c.d(m, { a: m }), m;
  }, c.d = (y, m) => {
    for (var S in m) c.o(m, S) && !c.o(y, S) && Object.defineProperty(y, S, { enumerable: !0, get: m[S] });
  }, c.o = (y, m) => Object.prototype.hasOwnProperty.call(y, m), c.r = (y) => {
    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(y, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(y, "__esModule", { value: !0 });
  };
  var d = {};
  (() => {
    var ms, ws;
    c.r(d), c.d(d, { AppManifestType: () => X, BookmarkItemContextMenuOptionType: () => se, BrowserButtonType: () => dt, ColorSchemeOptionType: () => Ce, CustomActionCallerType: () => ut, Dock: () => W, EnterpriseMainContextMenuOptionType: () => Ie, GlobalContextMenuOptionType: () => Y, PageChangeEventType: () => Me, PageTabContextMenuOptionType: () => ne, PanelPosition: () => z, SUPPORTED_LANGUAGES: () => Dt, SaveButtonContextMenuOptionType: () => at, SaveModalType: () => Fe, ViewTabMenuOptionType: () => ce, WindowType: () => Je, getCurrentSync: () => f, init: () => Gu, wrapSync: () => p });
    var y = {};
    c.r(y), c.d(y, { createNamespacedLocalStorage: () => Fa, getItem: () => Va, removeItem: () => ft, setItem: () => Sa });
    var m, S, I, _, U, q, X, j, W = {};
    c.r(W), c.d(W, { init: () => On }), function(e) {
      e.Fetching = "fetching", e.Fetched = "fetched", e.Complete = "complete";
    }(m || (m = {})), function(e) {
      e.UserAction = "user-action", e.FocusChange = "focus-change", e.Reload = "reload";
    }(S || (S = {})), function(e) {
      e.Active = "active", e.Default = "default";
    }(I || (I = {})), function(e) {
      e.Suggestion = "suggestion";
    }(_ || (_ = {})), function(e) {
      e.Contact = "Contact", e.Custom = "Custom", e.List = "List", e.Plain = "Plain", e.SimpleText = "SimpleText", e.Loading = "Loading", e.Error = "Error";
    }(U || (U = {})), function(e) {
      e.MultiSelect = "MultiSelect";
    }(q || (q = {})), function(e) {
      e.Snapshot = "snapshot", e.Manifest = "manifest", e.View = "view", e.External = "external";
    }(X || (X = {})), function(e) {
      e.LandingPage = "landingPage", e.AppGrid = "appGrid";
    }(j || (j = {}));
    var we, ge, z, Me, Y, Ce, ne, Ie, se, ce, dt, at, Je, ut;
    (function(e) {
      e.Primary = "primary", e.Secondary = "secondary", e.TextOnly = "textOnly";
    })(we || (we = {})), function(e) {
      e.ActionButton = "ActionButton", e.DropdownButton = "DropdownButton";
    }(ge || (ge = {})), function(e) {
      e.Left = "Left", e.Right = "Right", e.Top = "Top", e.Bottom = "Bottom";
    }(z || (z = {})), function(e) {
      e.UrlChange = "URL_CHANGE", e.ViewAdded = "VIEW_ADDED", e.ViewRemoved = "VIEW_REMOVED", e.PageContextAdded = "PAGE_CONTEXT_ADDED", e.PageContextRemoved = "PAGE_CONTEXT_REMOVED";
    }(Me || (Me = {})), function(e) {
      e.NewWindow = "NewWindow", e.NewPage = "NewPage", e.SavePage = "SavePage", e.SavePageAs = "SavePageAs", e.Print = "Print", e.PrintAll = "PrintAll", e.PrintScreen = "PrintScreen", e.CloseWindow = "CloseWindow", e.RestoreChanges = "RestoreChanges", e.SaveWorkspace = "SaveWorkspace", e.SaveWorkspaceAs = "SaveWorkspaceAs", e.RenameWorkspace = "RenameWorkspace", e.SwitchWorkspace = "SwitchWorkspace", e.DeleteWorkspace = "DeleteWorkspace", e.Downloads = "Downloads", e.OpenStorefront = "OpenStorefront", e.ManageDesktopSignals = "ManageDesktopSignals", e.Appearance = "Appearance", e.Quit = "Quit", e.Custom = "Custom";
    }(Y || (Y = {})), function(e) {
      e.Light = "light", e.Dark = "dark", e.System = "system";
    }(Ce || (Ce = {})), function(e) {
      e.Close = "Close", e.Duplicate = "Duplicate", e.Rename = "Rename", e.Save = "Save", e.SaveAs = "Save As", e.NewPage = "New Page", e.DeletePage = "Delete Page", e.SaveWorkspaceAs = "SaveWorkspaceAs", e.Refresh = "Refresh", e.CloseOthers = "Close others", e.Delete = "Delete", e.Print = "Print", e.PrintAll = "PrintAll", e.PrintScreen = "PrintScreen", e.ManageDesktopSignals = "ManageDesktopSignals", e.AddToChannel = "AddToChannel", e.Custom = "Custom";
    }(ne || (ne = {})), function(e) {
      e.Lock = "Lock", e.ShowHideTabs = "ShowHideTabs", e.AddToChanel = "AddToChannel", e.ManageDesktopSignals = "ManageDesktopSignals", e.Print = "Print", e.Pin = "Pin";
    }(Ie || (Ie = {})), function(e) {
      e.EditName = "Edit Name", e.Move = "Move", e.Delete = "Delete";
    }(se || (se = {})), function(e) {
      e.NewView = "NewView", e.DuplicateViews = "DuplicateView", e.OpenWithDefaultBrowser = "OpenWithDefaultBrowser", e.ReloadViews = "ReloadTab", e.CloseViews = "CloseTab", e.AddToChannel = "AddToChannel", e.RemoveFromChannel = "RemoveFromChannel", e.Back = "Back", e.Forward = "Forward", e.Print = "Print", e.PrintAll = "PrintAll", e.PrintScreen = "PrintScreen", e.Custom = "Custom";
    }(ce || (ce = {})), function(e) {
      e.ShowHideTabs = "ShowHideTabs", e.ColorLinking = "ColorLinking", e.PresetLayouts = "PresetLayouts", e.LockUnlockPage = "LockUnlockPage", e.SaveMenu = "SaveMenu", e.SavePage = "SavePage", e.Minimise = "Minimise", e.Maximise = "Maximise", e.Close = "Close", e.Custom = "Custom";
    }(dt || (dt = {})), function(e) {
      e.SavePage = "SavePage", e.SaveWorkspace = "SaveWorkspace", e.SavePageAs = "SavePageAs", e.SaveWorkspaceAs = "SaveWorkspaceAs", e.Custom = "Custom";
    }(at || (at = {})), function(e) {
      e.Browser = "browser", e.Platform = "platform";
    }(Je || (Je = {})), function(e) {
      e.CustomButton = "CustomButton", e.StoreCustomButton = "StoreCustomButton", e.CustomDropdownItem = "CustomDropdownItem", e.GlobalContextMenu = "GlobalContextMenu", e.ViewTabContextMenu = "ViewTabContextMenu", e.PageTabContextMenu = "PageTabContextMenu", e.SaveButtonContextMenu = "SaveButtonContextMenu", e.API = "API";
    }(ut || (ut = {}));
    const Dt = ["en-US", "ja-JP", "zh-CN", "ko-KR", "ru-RU", "de-DE", "zh-Hant"];
    var Fe, Pt;
    (function(e) {
      e.SAVE_PAGE = "SAVE_PAGE", e.SAVE_WORKSPACE = "SAVE_WORKSPACE", e.SAVE_PAGE_AS = "SAVE_PAGE_AS", e.SAVE_WORKSPACE_AS = "SAVE_WORKSPACE_AS", e.RENAME_PAGE = "RENAME_PAGE", e.RENAME_WORKSPACE = "RENAME_WORKSPACE";
    })(Fe || (Fe = {})), function(e) {
      e.Local = "local", e.Dev = "dev", e.Staging = "staging", e.Prod = "prod";
    }(Pt || (Pt = {}));
    const Le = typeof window < "u" && typeof fin < "u", bt = typeof window < "u", _t = bt && typeof indexedDB < "u", mt = bt ? window.origin : Pt.Local, ht = Le && fin.me.uuid, Ge = Le && fin.me.name, D = Le && fin.me.entityType, ue = (Pt.Local, Pt.Dev, Pt.Staging, Pt.Prod === "prod"), Ae = (e) => e.startsWith("http://") || e.startsWith("https://") ? e : mt + e, We = Ae("https://workspace.openfin.co/workspace/22.3.29"), Ye = Ae("https://workspace.openfin.co/workspace/22.3.29"), Xe = (typeof WORKSPACE_DOCS_PLATFORM_URL < "u" && Ae(WORKSPACE_DOCS_PLATFORM_URL), typeof WORKSPACE_DOCS_CLIENT_URL < "u" && Ae(WORKSPACE_DOCS_CLIENT_URL), "42.138.103.4"), je = "22.3.29";
    typeof WORKSPACE_BUILD_SHA < "u" && WORKSPACE_BUILD_SHA;
    var Ot, ve;
    (function(e) {
      e.Home = "/home/", e.HomeSearch = "/home/?deeplink=search", e.HomePagesRename = "/home/pages/rename/", e.Dock = "/dock/", e.Docs = "/provider/docs/", e.Storefront = "/storefront/", e.DeprecatedAlert = "/provider/deprecated-alert/", e.Analytics = "/provider/analytics/", e.Provider = "/provider/";
    })(Ot || (Ot = {})), function(e) {
      e.Browser = "/browser/", e.BrowserPopupMenu = "/popup-menu/", e.BrowserPopupMenuSaveModal = "/popup-menu/save-modal/", e.BrowserPopupMenuLayouts = "/popup-menu/layouts/layouts/", e.BrowserPopupMenuColorLinking = "/popup-menu/color-linking/color-linking/", e.BrowserIndicator = "/indicator/", e.BrowserPopupMenuAddressSearchResultsView = "/popup-menu/address-search-results-view/", e.ResponseModal = "/popup-menu/response-modal/", e.CloseConfirmationModal = "/popup-menu/close-confirmation-modal/", e.EnterpriseBrowser = "/enterprise/", e.EnterpriseLandingPage = "/enterprise/landing/", e.EnterpriseContextMenu = "/context-menu/", e.EnterpriseBookmarkDialog = "/bookmark-dialog/", e.EnterpriseAboutPage = "/popup-menu/about/", e.DropdownMenu = "/dropdown-menu/", e.EnterpriseDock = "/dock/", e.ZoomControlsDialog = "/zoom-controls-dialog/", e.DesktopSignalsModal = "/popup-menu/desktop-signals-modal/";
    }(ve || (ve = {}));
    const Ft = { ...Ot, ...ve };
    var Nt;
    (function(e) {
      e.Search = "search";
    })(Nt || (Nt = {}));
    const C = Ft;
    async function H() {
      const e = "getManifestOverrides", { manifest: n, initialOptions: r } = await fin.Application.getCurrentSync().getInfo();
      return n != null && n.platform.workspace || n != null && n.platform.home || r != null && r.workspace || r != null && r.home || console.warn(`${e}: Missing Home development manifest overrides, using Desktop Owner Settings.`), n != null && n.platform.workspace ? (JSON.stringify(n == null ? void 0 : n.platform.workspace), n == null ? void 0 : n.platform.workspace) : n != null && n.platform.home ? (JSON.stringify(n == null ? void 0 : n.platform.home), n == null ? void 0 : n.platform.home) : r != null && r.workspace ? (JSON.stringify(r == null ? void 0 : r.workspace), r == null ? void 0 : r.workspace) : r != null && r.home ? (JSON.stringify(r == null ? void 0 : r.home), r == null ? void 0 : r.home) : {};
    }
    const G = (e) => fin.System.getSystemAppConfig(e);
    async function ae() {
      const e = "getDOSOverrides";
      if (!Le) return console.warn(`${e}: the fin API was not available, returning no result`), {};
      try {
        let n = await G("workspace").catch((r) => {
          console.warn(`${e}: customConfig entry for SystemApp workspace not available in Desktop Owner Settings. ${r == null ? void 0 : r.message}`);
        });
        return n || (n = await G("home")), JSON.stringify(n), n;
      } catch (n) {
        if (!ue) return {};
        if (!(n instanceof Error)) throw n;
        console.warn(`${e}: Missing Workspace Desktop Owner Settings configuration, using defaults. ${n == null ? void 0 : n.message}`);
      }
      return {};
    }
    let Oe, Ke;
    async function Be() {
      if (Oe) return Oe;
      const e = "getOverrides";
      if (!Le) return bt && console.warn(`${e}: The Fin API was not available. Returning an empty result.`), {};
      const [n, r] = await Promise.all([ae(), H()]);
      return Oe = { ...r, ...n, disableRuntimeValidation: r.disableRuntimeValidation || n.disableRuntimeValidation }, Oe;
    }
    function yt(e) {
      Ke = e;
    }
    const gt = (e) => e.replace(/\/$/, "");
    async function Re() {
      const e = (await Be()).browserBaseUrl;
      if (e) try {
        const n = new URL(e);
        if (n.pathname.endsWith("/")) n.pathname = gt(n.pathname);
        else {
          if (n.pathname === "/workspace") return n.pathname += `/${je}`, n.toString();
          console.warn(`@openfin/workspace-platform: browserOverrideBaseUrl must be a valid url, with path: /workspace. Expected <protocol>://<optional subdomain>.<domain>/workspace but got ${e}`);
        }
      } catch {
        console.warn(`@openfin/workspace-platform: browserOverrideBaseUrl must be a valid url. Expected <protocol>://<optional subdomain>.<domain>/workspace but got ${e}`);
      }
      return Ke ?? Ye;
    }
    async function dn(e = !1) {
      const n = await Re() + C.Browser;
      return e ? n : gt(n);
    }
    async function Jt(e = !1) {
      const n = await Re() + C.EnterpriseBrowser;
      return e ? n : gt(n);
    }
    async function pn() {
      return await Jt() + "/landing/";
    }
    const Ut = async (e, n = !1) => e ? Jt(n) : dn(n), it = 56, Se = 728, pt = 150, Ht = "dock3", cn = (e) => {
      const n = typeof fin < "u" && fin.me.identity.uuid;
      if (!n) throw new Error("UUID is required to get the Dock3 channel name.");
      return `${n}-dock3`;
    }, jt = (e, n = "") => e.toLowerCase().includes(n.toLowerCase()), vt = (...e) => ((n, ...r) => {
      const s = console[n];
      try {
        s(...r.map((u) => typeof u == "object" ? JSON.stringify(u, null, 2) : u));
      } catch (u) {
        console.error("Error printing stringified log, logging directly", u), s(...r);
      }
    })("debug", ...e);
    var Mt, Yt;
    (function(e) {
      e.Workspace = "openfin-workspace", e.OldWorkspace = "openfin-browser";
    })(Mt || (Mt = {})), function(e) {
      e.FinProtocol = "fin-protocol";
    }(Yt || (Yt = {}));
    const Kt = { uuid: ht }, _e = (Mt.Workspace, (e) => {
      if (!Le) throw new Error("getApplication cannot be used in a non OpenFin env. Avoid using this during pre-rendering.");
      return fin.Application.wrapSync(e);
    }), $t = () => _e(Kt);
    var Ve;
    (function(e) {
      e.Home = "openfin-home", e.Dock = "openfin-dock", e.Storefront = "openfin-storefront", e.HomeInternal = "openfin-home-internal", e.BrowserMenu = "openfin-browser-menu", e.BrowserSaveMenu = "openfin-browser-save-menu", e.DockSaveWorkspaceMenu = "openfin-dock3-save-workspace-menu", e.BrowserIndicator = "openfin-browser-indicator", e.BrowserWindow = "internal-generated-window", e.ClassicWindow = "internal-generated-classic-window", e.EnterpriseContextMenu = "openfin-enterprise-context-menu", e.BrowserAddressSearchPrefix = "openfin-browser-menu-address-search-", e.EnterpriseBookmarkDialogWindow = "openfin-enterprise-bookmark-dialog", e.DropdownMenu = "openfin-enterprise-dropdown-menu", e.DockCompanion = "openfin-dock-companion", e.AICompanionPrefix = "openfin-ai-companion-", e.UpdateVersionModal = "here-update-version-modal", e.ZoomControlsDialog = "here-zoom-controls-dialog", e.AboutPageWindow = "here-about-page", e.DesktopSignalsModal = "here-desktop-signals-modal";
    })(Ve || (Ve = {}));
    const g = (e) => ({ left: (e.left + (e.right ?? e.left + e.width)) / 2, top: (e.top + (e.bottom ?? e.top + e.height)) / 2 }), P = (e, n) => {
      const r = n.width / 2, s = n.height / 2;
      return { left: Math.round(e.left - r), top: Math.round(e.top - s), width: n.width, height: n.height };
    };
    function ie(e) {
      if (!Le) throw new Error("getOFWindow can only be used in an OpenFin env. Avoid calling this method during pre-rendering.");
      return fin.Window.wrapSync(e);
    }
    const le = { name: Ge, uuid: ht };
    Ve.Home, Mt.Workspace, Ve.Dock, Mt.Workspace;
    const Te = { name: Ve.Storefront, uuid: Mt.Workspace };
    Mt.Workspace, Mt.Workspace;
    async function tt(e) {
      const n = ie(e);
      await n.getState() === "minimized" && await n.restore(), await n.show(), await n.setAsForeground();
    }
    const $e = async (e) => {
      var n, r, s;
      try {
        const u = await fin.Window.wrapSync({ name: e.name, uuid: e.uuid ?? fin.me.uuid }).getOptions();
        return (((n = u.workspacePlatform) == null ? void 0 : n.windowType) === "browser" || ((r = u.workspacePlatform) == null ? void 0 : r.windowType) === "enterprise") && ((s = u.workspacePlatform) == null ? void 0 : s.pages);
      } catch (u) {
        return console.warn("isBrowserWindow error: ", u), !1;
      }
    };
    async function st() {
      const e = await fin.Application.getCurrentSync().getChildWindows(), n = await Promise.all(e.map(async (r) => $e(r.identity)));
      return e.filter((r, s) => n[s]);
    }
    async function rt() {
      return (await fin.Application.getCurrentSync().getChildWindows()).filter((e) => e.identity.name.startsWith(Ve.BrowserMenu));
    }
    const Gt = (e) => ie(e).getInfo().then(() => !0).catch(() => !1), an = () => Gt(Te);
    function Xn(e, n) {
      const r = e.top, s = e.left, u = e.top + e.height, w = e.left + e.width, k = n.monitorRect.top, b = n.monitorRect.left, B = n.monitorRect.bottom, V = n.monitorRect.right;
      if (r > B || u < k || s > V || w < b) return 0;
      const Q = Math.max(r, k), J = Math.max(s, b);
      return (Math.min(u, B) - Q) * (Math.min(w, V) - J) / (e.height * e.width);
    }
    async function jn(e) {
      const n = await fin.System.getMonitorInfo();
      return [n.primaryMonitor, ...n.nonPrimaryMonitors].reduce((r, s) => {
        const u = Xn(e, s);
        return u > r.percentage ? { percentage: u, monitor: s } : r;
      }, { percentage: 0, monitor: n.primaryMonitor }).monitor;
    }
    const kt = (e, n) => {
      var s, u, w;
      const r = e;
      return r.workspacePlatform || (r.workspacePlatform = {}), r.workspacePlatform._internalDeferShowOptions = { setAsForeground: !!n, deferShowEnabled: !0, autoShow: ((s = r.workspacePlatform) == null ? void 0 : s._internalAutoShow) || ((w = (u = r.workspacePlatform) == null ? void 0 : u._internalDeferShowOptions) == null ? void 0 : w.autoShow) || r.autoShow === void 0 || r.autoShow }, r.autoShow = !1, r;
    };
    var Wt, $r;
    (function(e) {
      e.RelativeToParentWindow = "relative-to-parent-window", e.RelativeToMonitor = "relative-to-monitor";
    })(Wt || (Wt = {})), function(e) {
      e.Top = "top", e.Below = "below";
    }($r || ($r = {}));
    const ea = async (e) => {
      const n = e && await ie(e).getBounds();
      return { left: ((s = (e ? await jn(n) : (await fin.System.getMonitorInfo()).primaryMonitor).availableRect).left + s.right) / 2, top: (s.top + s.bottom) / 2 };
      var s;
    }, ba = async (e, n, r = !1) => {
      let s;
      if (r) s = await ea(n);
      else {
        const k = ie(n), b = await k.getBounds();
        s = g(b);
      }
      const { defaultHeight: u, defaultWidth: w } = e;
      return P(s, { height: u, width: w });
    };
    async function Pn(e, n, r = !1) {
      const s = n && await ie(n).getState() === "maximized", u = r || s || !n, w = await ba(e, n, u);
      return await (async (k) => {
        const b = await fin.System.getMonitorInfo(), B = [b.primaryMonitor, ...b.nonPrimaryMonitors];
        for (const V of B) if (Xn(k, V) === 1) return !1;
        return !0;
      })(w) ? (await ie(n).center(), ba(e, n, u)) : (console.warn("Response modal isn't off screen, not centering parent window"), w);
    }
    const bo = () => (e) => e;
    var oe = c(847);
    const Kn = (e) => e.replace(/[^\d,]/g, "").split(","), xn = (e) => {
      if (e.length < 2) throw new Error("Invalid color object, cannot convert to HSL.");
      const n = e[0] / 255, r = e[1] / 255, s = e[2] / 255, u = Math.min(n, r, s), w = Math.max(n, r, s), k = w - u;
      let b = 0, B = 0, V = 0;
      return b = k === 0 ? 0 : w === n ? (r - s) / k % 6 : w === r ? (s - n) / k + 2 : (n - r) / k + 4, b = Math.round(60 * b), b < 0 && (b += 360), V = (w + u) / 2, B = k == 0 ? 0 : k / (1 - Math.abs(2 * V - 1)), B = +(100 * B).toFixed(1), V = +(100 * V).toFixed(1), { hsl: `hsl(${b}, ${B}%, ${V}%)`, hsla: `hsl(${b}, ${B}%, ${V}%, 1)`, hue: b, lightness: V, saturation: B };
    }, ta = (e) => {
      if (!e.includes("#")) throw new Error("Invalid hex value, cannot convert to RGB. Hex value begins with a hashtag.");
      let n = 0, r = 0, s = 0;
      if (e.length === 4) n = `0x${e[1]}${e[1]}`, r = `0x${e[2]}${e[2]}`, s = `0x${e[3]}${e[3]}`;
      else {
        if (e.length !== 7) throw new Error("Invalid hex string length, cannot convert to RGB.");
        n = `0x${e[1]}${e[2]}`, r = `0x${e[3]}${e[4]}`, s = `0x${e[5]}${e[6]}`;
      }
      return [+n, +r, +s];
    }, Hr = (e) => {
      const n = e;
      if (n.startsWith("#"))
        return { rgb: ta(n).join(", "), alpha: 1 };
      const r = n.match(/\d{1,3}(\.\d+)?/g);
      if (r) {
        const [s, u, w, k] = r;
        return { rgb: `${s}, ${u}, ${w}`, alpha: k !== void 0 ? parseFloat(k) : 1 };
      }
      return { rgb: ta(e).join(", "), alpha: 1 };
    }, Cn = (e, n = !1) => {
      const r = ((s) => {
        if (!s) throw new Error("Color is not defined");
        const u = s.toLowerCase();
        let w;
        if (u.includes("rgb")) {
          const b = Kn(u);
          b.length > 3 && b.pop(), w = xn(b).hue;
        }
        if (u.includes("#")) {
          const b = ta(u);
          w = xn(b).hue;
        }
        u.includes("hsl") && (w = Kn(u)[0]);
        const k = w == null ? void 0 : w.toString();
        if (!k) throw new Error(`Hue was unable to be extracted from "${u}", check color format. Accepted formats are: rgb(), rgba(), hex, hsl(), and hsla()`);
        return k;
      })(e);
      return n ? { background1: `hsla(${r}, 0%, 100%, 1)`, background2: `hsla(${r}, 67%, 99%, 1)`, background3: `hsla(${r}, 26%, 96%, 1)`, background4: `hsla(${r}, 15%, 94%, 1)`, background5: `hsla(${r}, 10%, 88%, 1)`, background6: `hsla(${r}, 80%, 80%, 1)` } : { background1: `hsla(${r}, 8%, 7%, 1)`, background2: `hsla(${r}, 8%, 13%, 1)`, background3: `hsla(${r}, 9%, 15%, 1)`, background4: `hsla(${r}, 6%, 23%, 1)`, background5: `hsla(${r}, 21%, 28%, 1)`, background6: `hsla(${r}, 5%, 51%, 1)` };
    }, yr = (e, n) => {
      const r = {};
      return Object.keys(e).forEach((s) => {
        r[s] = n[s] ? n[s] : e[s];
      }), r;
    };
    var $n = c(877), Gr = c.n($n), br = c(67), Lt = c.n(br);
    const Hn = { light: { symbol: ((ms = Lt()) == null ? void 0 : ms.src) || "" }, dark: { symbol: ((ws = Gr()) == null ? void 0 : ws.src) || "" } }, Mn = bt && document.readyState !== "complete" && new Promise((e) => document.addEventListener("readystatechange", () => {
      document.readyState === "complete" && e();
    }));
    function Tn(e) {
      let n;
      const r = /* @__PURE__ */ new Set();
      return () => {
        if (!Le) throw new Error("getChannelClient cannot be used outside an OpenFin env. Avoid using this method during pre-rendering.");
        return n || (n = (async () => {
          await Mn;
          const s = { clientAPIVersion: je }, u = await fin.InterApplicationBus.Channel.connect(e, { payload: s });
          return u.onDisconnection(async () => {
            r.forEach((w) => w()), r.clear(), console.warn(`disconnected from channel provider ${e}`), n = void 0;
          }), u;
        })().then((s) => (s.addDisconnectionListener = (u) => {
          r.add(u);
        }, s)).catch((s) => {
          throw n = void 0, new Error(`failed to connect to channel provider ${e}: ${s}`);
        })), n;
      };
    }
    var Gn, va;
    (function(e) {
      e.Fetching = "fetching", e.Fetched = "fetched", e.Complete = "complete";
    })(Gn || (Gn = {})), function(e) {
      e[e.Initial = 0] = "Initial", e[e.Open = 1] = "Open", e[e.Close = 2] = "Close";
    }(va || (va = {}));
    const vr = Tn("__of_workspace_protocol__"), kr = vr;
    var pe;
    (function(e) {
      e.LaunchApp = "launchApp", e.SavePage = "savePage", e.GetSavedPage = "getSavedPage", e.CreateSavedPage = "createSavedPage", e.UpdateSavedPage = "updateSavedPage", e.DeleteSavedPage = "deleteSavedPage", e.GetSavedPages = "getSavedPages", e.CreateSavedPageInternal = "createSavedPageInternal", e.UpdateSavedPageInternal = "updateSavedPageInternal", e.DeleteSavedPageInternal = "deleteSavedPageInternal", e.UpdatePageForWindow = "updatePageForWindow", e.AttachPagesToWindow = "attachPagesToWindow", e.DetachPagesFromWindow = "detachPagesFromWindow", e.ReorderPagesForWindow = "reorderPagesForWindow", e.SetActivePage = "setActivePage", e.AddPage = "addPage", e.AddDefaultPage = "addDefaultPage", e.GetAllAttachedPages = "getAllAttachedPages", e.GetActivePageIdForWindow = "getActivePageIdForWindow", e.GetPagesForWindow = "getPagesForWindow", e.GetPageForWindow = "getPageForWindow", e.GetSavedPageMetadata = "getSavedPageMetadata", e.GetUniquePageTitle = "getUniquePageTitle", e.GetLastFocusedBrowserWindow = "getLastFocusedBrowserWindow", e.GetPageByViewIdentity = "getPageByViewIdentity", e.GetThemes = "getThemes", e.GetSelectedScheme = "getSelectedScheme", e.SetSelectedScheme = "setSelectedScheme", e.OpenGlobalContextMenuInternal = "openGlobalContextMenuInternal", e.OpenViewTabContextMenuInternal = "openViewTabContextMenuInternal", e.OpenPageTabContextMenuInternal = "openPageTabContextMenuInternal", e.OpenSaveButtonContextMenuInternal = "openSaveButtonContextMenuInternal", e.InvokeCustomActionInternal = "invokeCustomActionInternal", e.RequestQuitPlatformDialogInternal = "requestQuitPlatformDialogInternal", e.GetSavedWorkspace = "getSavedWorkspace", e.CreateSavedWorkspace = "createSavedWorkspace", e.UpdateSavedWorkspace = "updateSavedWorkspace", e.DeleteSavedWorkspace = "deleteSavedWorkspace", e.GetSavedWorkspaces = "getSavedWorkspaces", e.GetSavedWorkspacesMetadata = "getSavedWorkspacesMetadata", e.SaveWorkspace = "saveWorkspace", e.GetCurrentWorkspace = "getCurrentWorkspace", e.ApplyWorkspace = "applyWorkspace", e.RestoreLastSavedWorkspaceInternal = "restoreLastSavedWorkspaceInternal", e.SetActiveWorkspace = "setActiveWorkspace", e.IsBrowserInitialized = "isBrowserInitialized", e.Analytics = "analyticsInternal", e.GetLanguage = "getLanguage", e.GetLanguageResourcesInternal = "getLanguageResourcesInternal", e.SetLanguage = "setLanguage", e.GetDockProviderConfig = "getDockProviderConfig", e.SaveDockProviderConfig = "saveDockProviderConfig", e.HandleSaveModalOnPageClose = "handleSaveModalOnPageClose", e.ShouldPageClose = "shouldPageClose", e.ShouldWindowClose = "shouldWindowClose", e.CopyPage = "copyPage", e.HandlePageChanges = "handlePageChanges", e.MarkUnsavedPagesAsSavedInternal = "markUnsavedPagesAsSavedInternal", e.TrackRemovedTabInternal = "trackRemovedTabInternal", e.RestoreRemovedTabInternal = "restoreRemovedTabInternal", e.TrackVisitedSiteInternal = "trackVisitedSiteInternal", e.GetRecentlyVisitedSitesInternal = "getRecentlyVisitedSitesInternal", e.GetFrequentlyVisitedSitesInternal = "getFrequentlyVisitedSitesInternal", e.SearchSitesInternal = "searchSitesInternal", e.GetSearchProvidersInternal = "getSearchProvidersInternal", e.GetCuratedContentInternal = "getCuratedContentInternal", e.HandleRequestNavigationInternal = "handleRequestNavigationInternal", e.RefreshBookmarksInternal = "refreshBookmarksInternal", e.LaunchBookmarkInternal = "launchBookmarkInternal", e.GetNotificationsConfig = "getNotificationsConfig", e.UpdateDockFavoritesInternal = "updateDockFavoritesInternal", e.UpdateContentMenuInternal = "updateContentMenuInternal", e.LaunchDockEntryInternal = "launchDockEntryInternal", e.SetDockFavoritesOrderInternal = "setDockFavoritesOrderInternal", e.NavigateContentMenuInternal = "navigateContentMenuInternal", e.SetDefaultDockButtonsOrderInternal = "setDefaultDockButtonsOrderInternal", e.GetDockWorkspacesContextMenuInternal = "getDockWorkspacesContextMenuInternal", e.HandleDockWorkspacesMenuResponseInternal = "handleDockWorkspacesMenuResponseInternal", e.RemoveDockFavoriteInternal = "removeDockFavoriteInternal", e.AddDockFavoriteInternal = "addDockFavoriteInternal", e.FocusAndExpandSearchInternal = "focusAndExpandSearchInternal", e.SendUpdateVersionModalResponseInternal = "sendUpdateVersionModalResponseInternal", e.ShowUpdateVersionModalInternal = "showUpdateVersionModalInternal";
    })(pe || (pe = {}));
    const Ba = async (e) => fin.Platform.wrapSync(e).getClient(), na = async (e) => {
      const n = await Ba(e), r = "Target is not a Workspace Platform. Target must call WorkspacePlatform.init";
      let s;
      try {
        s = await n.dispatch("isWorkspacePlatform");
      } catch {
        throw new Error(r);
      }
      if (typeof s == "boolean" && s) return console.warn("You are using an older version of the workspace platform. Please update your workspace platform."), s;
      if (typeof s == "object" && s.isWorkspacePlatform) return s;
      throw new Error(r);
    }, Ue = async (e) => (await na(e), Ba(e)), Pe = async (e) => {
      const n = await na(e);
      if (typeof n == "object" && (n == null ? void 0 : n.isBrowserInitialized) !== !0) throw new Error("Target is not a Browser-enabled Workspace Platform.");
      return Ba(e);
    }, zr = "dark", Sr = { [oe.Palette.brandPrimary]: "#0A76D3", [oe.Palette.brandPrimaryActive]: "#0A71C9", [oe.Palette.brandPrimaryHover]: "#0B84EB", [oe.Palette.brandPrimaryFocused]: oe.Color.white, [oe.Palette.brandPrimaryText]: oe.Color.white, [oe.Palette.statusSuccess]: oe.Color.functional1, [oe.Palette.statusWarning]: oe.Color.functional10, [oe.Palette.statusCritical]: oe.Color.functional7, [oe.Palette.statusActive]: oe.Color.functional3, [oe.Palette.contentBackground1]: "#0A76D3", [oe.Palette.contentBackground2]: "#000000", [oe.Palette.contentBackground3]: "#000000", [oe.Palette.contentBackground4]: "#000000", [oe.Palette.contentBackground5]: "#000000", [oe.Palette.borderNeutral]: oe.Color.silverGray }, aa = { ...Sr, [oe.Palette.background1]: oe.Color.white, [oe.Palette.background2]: oe.Color.lightGray1, [oe.Palette.background3]: oe.Color.lightGray2, [oe.Palette.background4]: oe.Color.lightGray3, [oe.Palette.background5]: oe.Color.lightGray4, [oe.Palette.background6]: oe.Color.lightGray5, [oe.Palette.brandSecondary]: oe.Color.lightGray4, [oe.Palette.brandSecondaryActive]: oe.Color.lightGray4Active, [oe.Palette.brandSecondaryHover]: oe.Color.lightGray4Hover, [oe.Palette.brandSecondaryFocused]: oe.Color.darkGray5, [oe.Palette.brandSecondaryText]: oe.Color.darkGray5, [oe.Palette.inputBackground]: oe.Color.lightGray3, [oe.Palette.inputColor]: oe.Color.darkGray5, [oe.Palette.inputPlaceholder]: oe.Color.darkGray2, [oe.Palette.inputDisabled]: oe.Color.neutralGray, [oe.Palette.inputFocused]: oe.Color.lightGray5, [oe.Palette.inputBorder]: oe.Color.neutralGray, [oe.Palette.textDefault]: oe.Color.darkGray5, [oe.Palette.textHelp]: oe.Color.darkGray3, [oe.Palette.textInactive]: oe.Color.neutralGray }, Rn = { ...Sr, [oe.Palette.background1]: oe.Color.darkGray6, [oe.Palette.background2]: oe.Color.darkGray5, [oe.Palette.background3]: oe.Color.darkGray4, [oe.Palette.background4]: oe.Color.darkGray3, [oe.Palette.background5]: oe.Color.darkGray2, [oe.Palette.background6]: oe.Color.darkGray1, [oe.Palette.brandSecondary]: oe.Color.darkGray2, [oe.Palette.brandSecondaryActive]: oe.Color.darkGray2Active, [oe.Palette.brandSecondaryHover]: oe.Color.darkGray2Hover, [oe.Palette.brandSecondaryFocused]: oe.Color.white, [oe.Palette.brandSecondaryText]: oe.Color.white, [oe.Palette.inputBackground]: oe.Color.darkGray1, [oe.Palette.inputColor]: oe.Color.white, [oe.Palette.inputPlaceholder]: oe.Color.lightGray5, [oe.Palette.inputDisabled]: oe.Color.neutralGray, [oe.Palette.inputFocused]: oe.Color.lightGray5, [oe.Palette.inputBorder]: oe.Color.neutralGray, [oe.Palette.textDefault]: oe.Color.white, [oe.Palette.textHelp]: oe.Color.lightGray5, [oe.Palette.textInactive]: oe.Color.neutralGray }, Na = [{ label: "OpenFin Default Light and Dark Theme", palettes: { light: { ...aa, backgroundPrimary: oe.Color.darkGray5 }, dark: { ...Rn, backgroundPrimary: oe.Color.darkGray5 } } }], ka = (e) => {
      const { background: n, foreground: r } = e;
      return { background: n, foreground: r ?? "#FFFFFF" };
    }, Pr = (e, n) => {
      var r, s, u;
      return { icons: { symbol: ((u = (s = (r = e.brand) == null ? void 0 : r.icons) == null ? void 0 : s[n]) == null ? void 0 : u.symbol) || Hn[n].symbol } };
    }, xt = (e) => {
      const { light: n, dark: r } = "palettes" in e ? e.palettes : { light: e.palette, dark: e.palette }, s = yr(Rn, r), u = yr(aa, n), w = ((Q, J) => {
        const re = { ...Q }, de = { ...J };
        let xe = J.backgroundPrimary ? Cn(J.backgroundPrimary, !0) : {}, De = Q.backgroundPrimary ? Cn(Q.backgroundPrimary) : {};
        return xe = { ...xe, ...de }, De = { ...De, ...re }, { light: { ...J, ...xe }, dark: { ...Q, ...De } };
      })(r, n), k = { ...(0, oe.createTheme)({ ...s, ...w == null ? void 0 : w.dark }), brand: Pr(e, "dark") }, b = { ...(0, oe.createTheme)({ ...u, ...w == null ? void 0 : w.light }), brand: Pr(e, "light") }, { light: B, dark: V } = ((Q) => {
        const J = Object.keys(Q.notificationIndicatorColors ?? {});
        if (J != null && J.length) {
          const re = {}, de = {};
          return J.forEach((xe) => {
            const De = Q.notificationIndicatorColors[xe];
            "background" in De ? (re[xe] = ka(De), de[xe] = ka(De)) : (re[xe] = ka(De.dark ?? De.light), de[xe] = ka(De.light ?? De.dark));
          }), { light: de, dark: re };
        }
        return { light: null, dark: null };
      })(e);
      return k.notificationIndicatorColors = V, b.notificationIndicatorColors = B, { dark: k, light: b };
    }, ra = async (e) => {
      const { themes: n, selectedScheme: r } = await (async (w) => {
        var b, B, V;
        const k = (V = (B = (b = fin == null ? void 0 : fin.__internal_) == null ? void 0 : b.initialOptions) == null ? void 0 : B.workspacePlatform) == null ? void 0 : V._themeData;
        return !k || w.uuid !== le.uuid ? { themes: await p(w).Theme.getThemes(), selectedScheme: await p(w).Theme.getSelectedScheme() } : k;
      })(e);
      var s, u;
      return (s = n != null && n.length ? n : Na, u = r, s.map((w) => {
        const k = "palettes" in w ? w.default : zr, { light: b, dark: B } = xt(w);
        return { label: w.label, logoUrl: w.logoUrl, theme: { dark: B, light: b }, defaultScheme: u ?? k };
      }))[0];
    }, oa = async (e) => {
      const n = await Ue(e || fin.me.identity), r = await n.dispatch(pe.GetSelectedScheme, void 0);
      return r === Ce.System ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : r;
    }, ia = async (e, n) => {
      var w, k;
      const r = await ra(fin.me.identity), s = await oa(fin.me.identity) === Ce.Dark, u = r == null ? void 0 : r.theme;
      return ((k = (w = u == null ? void 0 : u[s ? Ce.Dark : Ce.Light]) == null ? void 0 : w.palette) == null ? void 0 : k[e]) || n;
    };
    function xr(e) {
      return function(n, r) {
        const s = {};
        for (const u of r) u in n && (s[u] = n[u]);
        return s;
      }(e, bo()(["defaultLeft", "defaultTop", "defaultCentered", "saveWindowState", "taskbarIconGroup"]));
    }
    function La() {
      let e, n;
      return { promise: new Promise((r, s) => {
        e = r, n = s;
      }), resolve: e, reject: n };
    }
    const Dn = hl, Fa = (e) => ({ setItem: (n, r) => {
      localStorage.setItem(`${e}-${n}`, r);
    }, getItem: (n) => localStorage.getItem(`${e}-${n}`), removeItem: (n) => localStorage.removeItem(`${e}-${n}`) }), sa = Fa(ht), Sa = sa.setItem, Va = sa.getItem, ft = sa.removeItem;
    var Ua;
    (function(e) {
      e.CurrentWorkspaceId = "currentWorkspaceId", e.LastFocusedBrowserWindow = "lastFocusedBrowserWindow", e.MachineName = "machineName", e.NewTabPageLayout = "NewTabPageLayout", e.NewTabPageSort = "NewTabPageSort", e.DockPosition = "DockPosition", e.SelectedColorScheme = "SelectedColorScheme", e.ThemePaletteSheet = "ThemePaletteSheet", e.HasMovedStore = "HasMovedStore", e.PageDragState = "BrowserPageDragState", e.ThemePaletteDefaultScheme = "ThemePaletteDefaultScheme";
    })(Ua || (Ua = {}));
    const en = Ua, Pa = (e) => e + "-" + fin.me.uuid, rn = (e, n) => {
      const r = _t && Le && new Dn.Dexie(e);
      return r && r.version(0.1).stores({ [n]: "" }), r;
    }, zn = (e, n) => {
      const r = rn(Pa(e), n), s = rn(e, n);
      if (!r || !s) throw new Error("Unable to migrate store - IndexDB not supported");
      return (async (u, w, k) => {
        if (!u[k]) return void console.warn(`Legacy store ${k} not found, skipping migration`);
        const b = Va(en.HasMovedStore), B = b ? JSON.parse(b) : {};
        if (B && B[k]) return;
        B[k] = !0, Sa(en.HasMovedStore, JSON.stringify(B));
        const V = await u[k].toArray();
        await w[k].bulkPut(V);
      })(s, r, e), r;
    }, ca = "dock3-provider-config", un = _t && Le && new Dn.Dexie(Pa("dock3-provider-config"));
    un && un.version(0.1).stores({ [ca]: "" });
    var In, fn, It, on, hn = function(e, n, r, s, u) {
      if (typeof n == "function" ? e !== n || !0 : !n.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return n.set(e, r), r;
    }, Vt = function(e, n, r, s) {
      if (typeof n == "function" ? e !== n || !s : !n.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return r === "m" ? s : r === "a" ? s.call(e) : s ? s.value : n.get(e);
    };
    class Sn {
      static getOverrideConstructor(...n) {
        return class extends Sn {
          constructor() {
            super(...n);
          }
        };
      }
      constructor(n, r) {
        if (In.set(this, void 0), fn.set(this, void 0), It.set(this, null), on.set(this, La()), Sn.instance) throw new Error("Dock3Provider has already been initialized.");
        Sn.instance = this, hn(this, In, n), hn(this, fn, r), this.registerChannelActions();
      }
      async launchEntry(n) {
      }
      get ready() {
        return Vt(this, on, "f").promise;
      }
      async bookmarkContentMenuEntry(n) {
      }
      get config() {
        return Vt(this, In, "f");
      }
      set config(n) {
        hn(this, In, n);
      }
      async updateConfig(n) {
        await this.handleConfigChange(n);
      }
      async shutdown() {
        await Promise.all([Vt(this, fn, "f").destroy(), this.getWindowSync().close(!0)]), Sn.instance = null;
      }
      async saveConfig({ config: n }) {
        hn(this, In, n), await async function(r) {
          if (!un) throw new Error("Unable to save Dock provider config - IndexedDb not supported");
          await un[ca].put(r, "latest");
        }(n);
      }
      async handleConfigChange(n) {
        Vt(this, It, "f") && await Vt(this, fn, "f").dispatch(Vt(this, It, "f"), "handle-dock-config-updated", n);
      }
      async loadConfig() {
        const n = await async function() {
          if (!un) throw new Error("Unable to get Dock provider config - IndexedDB not supported");
          try {
            return await un[ca].get("latest");
          } catch (r) {
            return void console.warn("Failed to retrieve Dock provider config from IndexedDB", r);
          }
        }();
        return n && hn(this, In, n), Vt(this, In, "f");
      }
      getWindowSync() {
        return fin.Window.wrapSync({ uuid: fin.me.identity.uuid, name: Ht });
      }
      registerChannelActions() {
        Vt(this, fn, "f").register("launch-entry", this.launchEntry.bind(this)), Vt(this, fn, "f").register("save-config", this.saveConfig.bind(this)), Vt(this, fn, "f").register("bookmark-content-menu-entry", this.bookmarkContentMenuEntry.bind(this)), Vt(this, fn, "f").onConnection((n) => {
          n.name === Ht && hn(this, It, n);
        }), Vt(this, fn, "f").register("ready", async (n, r) => {
          var s;
          if (((s = Vt(this, It, "f")) == null ? void 0 : s.endpointId) !== r.endpointId) throw new Error(`Dock3Provider: 'ready' action received from unexpected client ${r.name} (${r.uuid})`);
          Vt(this, on, "f").resolve();
        }), Vt(this, fn, "f").onDisconnection((n) => {
          var r;
          ((r = Vt(this, It, "f")) == null ? void 0 : r.endpointId) === n.endpointId && (hn(this, It, null), hn(this, on, La()));
        });
      }
    }
    async function On(e) {
      const { config: n, override: r } = e;
      if (Sn.instance) throw new Error("Dock3Provider has already been initialized.");
      const s = await fin.InterApplicationBus.Channel.create(cn()), u = new (r(Sn.getOverrideConstructor(n, s)))();
      return await u.loadConfig(), await async function(w, k, b, B) {
        var V, Q, J;
        if (!await Gt({ uuid: le.uuid, name: w })) {
          let re;
          re = typeof ((V = b.dockPosition) == null ? void 0 : V.left) == "number" || typeof (B == null ? void 0 : B.defaultLeft) == "number" ? (Q = b.dockPosition) == null ? void 0 : Q.left : (await ea(le)).left - Se / 2;
          const de = { name: w, url: k + C.EnterpriseDock, autoShow: !0, frame: !1, smallWindow: !0, saveWindowState: !1, defaultHeight: it, defaultWidth: Se, includeInSnapshots: !1, defaultTop: ((J = b.dockPosition) == null ? void 0 : J.top) ?? pt, defaultLeft: re, workspacePlatform: { windowType: b.windowType, ...b }, throttling: "disabled", resizable: !1, maximizable: !1, backgroundColor: await ia("background1"), ...xr(B ?? {}) };
          await fin.Window.create(kt(de));
        }
      }(Ht, await dn(), u.config, e.windowOptions), await u.ready, u;
    }
    In = /* @__PURE__ */ new WeakMap(), fn = /* @__PURE__ */ new WeakMap(), It = /* @__PURE__ */ new WeakMap(), on = /* @__PURE__ */ new WeakMap(), Sn.instance = null;
    const Tt = async (e) => {
      var s;
      const n = e ? fin.Window.wrapSync(e) : fin.Window.getCurrentSync(), r = await n.getOptions();
      return ((s = r.workspacePlatform) == null ? void 0 : s.windowType) && r.workspacePlatform.windowType === "enterprise";
    }, wn = (e) => {
      var r, s;
      return ((s = (r = e == null ? void 0 : e.defaultWindowOptions) == null ? void 0 : r.workspacePlatform) == null ? void 0 : s.windowType) === "enterprise";
    };
    let xa;
    const qr = (e) => {
      if (e) try {
        return new URL(e).pathname.includes(C.EnterpriseLandingPage.replace(/\/$/, ""));
      } catch {
        console.error("error parsing url: %O", e);
      }
      return !1;
    };
    var Wn;
    (function(e) {
      e.Browser = "Browser", e.Dock = "Dock", e.EnterpriseDock = "EnterpriseDock", e.Home = "Home", e.Notification = "Notification", e.Storefront = "Storefront", e.Platform = "Platform", e.Theming = "Theming", e.Microflow = "Microflow";
    })(Wn || (Wn = {}));
    const Bn = async (e, n, r = "workspace-licensing") => {
      const s = { apiVersion: n.apiVersion || je, componentName: e, componentVersion: n.componentVersion || je, allowed: n.allowed, rejectionCode: n.rejectionCode };
      fin.System.registerUsage({ type: r, data: s });
    };
    let ja = !1;
    const Ka = /* @__PURE__ */ new Map(), Jr = (e) => {
      let n = Ka.get(e.uuid);
      return n || (n = p(e), n.once("closed", () => {
        Ka.delete(e.uuid);
      }), Ka.set(e.uuid, n)), n;
    }, ua = async (e, n) => {
      try {
        await e._raiseAnalytics([n]);
      } catch (r) {
        console.error("failed to raise analytics event", r);
      }
    }, ln = async (e) => {
      await ua(Jr(fin.me.identity), { source: "Browser", ...e });
    };
    let Cr;
    const la = async (e) => {
      Cr || (Cr = new TextEncoder());
      const n = Cr.encode(e), r = await window.crypto.subtle.digest("SHA-256", n);
      return Array.from(new Uint8Array(r)).map((s) => s.toString(16).padStart(2, "0")).join("");
    };
    function da(e) {
      return e && typeof e == "object" && !Array.isArray(e);
    }
    function Nn(e, ...n) {
      if (!n.length) return e;
      const r = n.shift();
      return da(e) && da(r) && Object.entries(r).forEach(([s, u]) => {
        if (da(u)) return e[s] || (e[s] = {}), Nn(e[s], u);
        e[s] = u;
      }), Nn(e, ...n);
    }
    const vo = Rl;
    var Yr = c.n(vo);
    function tn() {
      return typeof crypto !== void 0 && "randomUUID" in crypto && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (e) => (e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16));
    }
    function $a() {
      return localStorage.getItem(en.MachineName) ?? "unknown";
    }
    let Ca;
    async function Mr() {
      return Ca || (Ca = await fin.System.getMachineId()), Ca;
    }
    const Ha = (e) => {
      var n;
      if (Array.isArray((n = e.workspacePlatform) == null ? void 0 : n.pages) && (e.layoutSnapshot || e.layout)) {
        const r = e.workspacePlatform.pages.find((s) => s.isActive);
        if (r) {
          const s = e.layoutSnapshot ? e.layoutSnapshot.layouts[r.layoutContainerKey] : e.layout;
          if (s) if (r.isLocked) {
            const u = L(s, r.layout);
            r.layout = u, e.layout = u;
          } else r.layout = s, e.layout = s;
        }
      }
      return e;
    };
    async function pa(e) {
      var s;
      const n = e || await fin.Platform.getCurrentSync().getSnapshot();
      if ((s = n.snapshotDetails) != null && s.machineId) return n;
      const r = $a();
      return { ...n, snapshotDetails: { ...n.snapshotDetails, machineId: await Mr(), machineName: r } };
    }
    const Ga = async (e) => ({ ...e, layoutDetails: { machineId: await Mr(), machineName: $a() } }), fa = async (e, n) => ({ pageId: tn(), title: e, layout: await Ga(n), isReadOnly: !1 }), Zr = async (e) => {
      const n = await fa(e.title, F(e.layout));
      return e.panels && (n.panels = e.panels.map((r) => ({ ...r, viewOptions: M(r.viewOptions) }))), { ...e, ...n };
    }, qn = (e) => {
      const n = fin.Platform.Layout.wrapSync(e);
      return { show: async () => {
        const r = await n.getConfig(), { settings: s, dimensions: u } = r, w = await Tt(e);
        await n.replace({ ...r, settings: { ...s, hasHeaders: !0, reorderEnabled: !0 }, dimensions: { ...u, headerHeight: w ? 28 : 30 } });
      }, hide: async (r) => {
        var k;
        const s = await n.getConfig(), { settings: u, dimensions: w } = await s;
        await n.replace({ ...s, settings: { ...u, hasHeaders: !1, reorderEnabled: ((k = r == null ? void 0 : r.settings) == null ? void 0 : k.reorderEnabled) ?? !1 }, dimensions: { ...w, headerHeight: 0 } });
      }, isShowingTabs: async () => {
        try {
          const r = await n.getConfig(), { settings: s } = await r;
          return s.hasHeaders;
        } catch (r) {
          return console.error("failed to get layout config: ", r), !0;
        }
      } };
    }, nn = "of-workspace-", Ln = new class {
      mark(e) {
        performance.mark(`${nn}${e}`);
      }
      markStart(e) {
        performance.mark(`${nn}${e}-start`);
      }
      markEnd(e) {
        performance.mark(`${nn}${e}-end`);
      }
      markEndAndMeasure(e) {
        performance.mark(`${nn}${e}-end`);
        try {
          return performance.measure(`${nn}${e}`, `${nn}${e}-start`, `${nn}${e}-end`);
        } catch {
        }
      }
      markAndMeasure(e, n) {
        performance.mark(`${nn}${e}`);
        try {
          return performance.measure(`${nn}${e}-measure`, `${nn}${n}-start`, `${nn}${e}`);
        } catch {
        }
      }
      reportWorkspacePerformanceEntries() {
        return performance.getEntriesByType("measure").filter((e) => e.name.startsWith(nn));
      }
      reportWorkspacePerformance() {
        return this.reportWorkspacePerformanceEntries().map((e) => ({ name: e.name.replace(`${nn}`, "").replace("-measure", ""), duration: e.duration }));
      }
    }(), za = () => {
      const e = `browser-context-menu-startup-${tn()}`;
      return Ln.markStart(e), e;
    }, qa = (e) => {
      Ln.markAndMeasure("browser-context-menu-called", e);
    }, Zt = (e) => {
      fin.Application.wrapSync({ uuid: fin.me.identity.uuid }).once("window-shown", () => {
        ((n) => {
          Ln.markAndMeasure("browser-context-menu-shown", n);
        })(e);
      });
    }, Ma = (e, n) => n ? `${n}-${e.uuid}-${e.name}` : `__browser_window__-${e.uuid}-${e.name}`, Jn = /* @__PURE__ */ new Map(), Ir = (e) => (Jn.has(e) || Jn.set(e, Tn(e)), Jn.get(e)()), St = (e, n) => {
      const r = Ma(e, n);
      return Ir(r);
    };
    var Ja, Ya, An, En, gn, Ia;
    (function(e) {
      e.CloseBrowserWindow = "close-browser-window", e.QuitPlatform = "quit-platform", e.ClosePage = "close-page", e.AddToChannel = "add-to-channel", e.RemoveFromChannel = "remove-from-channel", e.OpenSaveModalInternal = "open-save-modal-internal", e.DuplicatePage = "duplicate-page", e.SetSelectedScheme = "set-selected-scheme", e.ShowBrowserIndicator = "show-browser-indicator", e.SetSelectedLanguage = "set-selected-language", e.RefreshBookmarksInternal = "refresh-bookmarks", e.GetLayoutsWithSelectedViewsInternal = "get-layouts-with-selected-views", e.FocusAndExpandSearchInternal = "focus-and-expand-search";
    })(Ja || (Ja = {})), function(e) {
      e.GetPages = "get-pages", e.GetActivePageForWindow = "get-active-page-for-window", e.AttachPagesToWindow = "attach-pages-to-window", e.DetachPagesFromWindow = "detach-pages-from-window", e.SetActivePageForWindow = "set-active-page-for-window", e.RenamePage = "rename-page", e.ReorderPagesForWindow = "reorder-pages-for-window", e.UpdatePageForWindow = "update-page-for-window", e.UpdatePagesWindowOptions = "update-pages-window-options", e.IsDetachingPages = "is-detaching-pages", e.IsActivePageChanging = "is-active-page-changing";
    }(Ya || (Ya = {})), function(e) {
      e.GetApps = "get-apps", e.GetCuratedContent = "get-curated-content", e.GetRecentlyVisited = "get-recently-visited", e.GetSearchProviders = "get-search-providers";
    }(An || (An = {})), function(e) {
      e.CreateBookmarkNode = "create-bookmark-node", e.GetBookmarkNode = "get-bookmark-node", e.SearchBookmarkNodes = "search-bookmark-nodes", e.UpdateBookmarkNode = "update-bookmark-node", e.DeleteBookmarkNode = "delete-bookmark-node";
    }(En || (En = {})), function(e) {
      e.UpdateFavoriteEntries = "update-favorite-entries", e.UpdateContentMenu = "update-content-menu", e.NavigateContentMenu = "navigate-content-menu";
    }(gn || (gn = {})), function(e) {
      e.SendUpdateVersionModalResponse = "send-update-version-modal-response";
    }(Ia || (Ia = {}));
    const At = { ...Ja, ...Ya, ...gn }, Fn = Tn(`${typeof fin < "u" && (fin == null ? void 0 : fin.me.identity.uuid)}-enterprise-bookmarks`), Aa = (e) => ({ identity: e, openfinWindow: fin.Window.wrapSync(e), _bookmarks: { _createBookmarkNode: async (n) => (async (r) => (await Fn()).dispatch(En.CreateBookmarkNode, r))(n), _getBookmarkNode: async (n) => (async (r) => (await Fn()).dispatch(En.GetBookmarkNode, r))(n), _searchBookmarkNodes: async (n) => (async (r) => (await Fn()).dispatch(En.SearchBookmarkNodes, r))(n), _updateBookmarkNode: async (n) => (async (r) => (await Fn()).dispatch(En.UpdateBookmarkNode, r))(n), _deleteBookmarkNode: async (n) => (async (r) => (await Fn()).dispatch(En.DeleteBookmarkNode, r))(n) }, getPages: async () => (await Pe(e)).dispatch(pe.GetPagesForWindow, e), getPage: async (n) => (await Pe(e)).dispatch(pe.GetPageForWindow, { identity: e, pageId: n }), addPage: async (n) => f().Browser.wrapSync(e)._addPage(n), _addPage: async (n, r) => {
      const s = await Pe(e), u = { identity: e, page: n, insertionIndex: r == null ? void 0 : r.index, multiInstanceViewBehavior: r == null ? void 0 : r.multiInstanceViewBehavior };
      return s.dispatch(pe.AddPage, u);
    }, _addPages: async (n, r) => {
      const s = await Pe(e), u = n.map(({ page: k, opts: b }) => ({ ...k, multiInstanceViewBehavior: (b == null ? void 0 : b.multiInstanceViewBehavior) || "duplicate" })), w = { identity: e, pages: u, ...r };
      return s.dispatch(pe.AttachPagesToWindow, w);
    }, removePage: async (n) => (await Pe(e)).dispatch(pe.DetachPagesFromWindow, { identity: e, pageIds: [n] }), reparentPage: async (n) => f().Browser.wrapSync(e)._reparentPage(n), _reparentPage: async (n) => {
      const { pageId: r } = n, s = await Pe(e), u = (await s.dispatch(pe.GetAllAttachedPages, void 0)).find(({ pageId: k }) => k === r);
      if (!u) throw new Error(`Reparent Page Error: Target page with pageId ${r} not found`);
      u.multiInstanceViewBehavior = "reparent";
      const w = { identity: e, pages: [u], insertionIndex: n.index };
      return s.dispatch(pe.AttachPagesToWindow, w);
    }, setActivePage: async (n) => (await Pe(e)).dispatch(pe.SetActivePage, { identity: e, pageId: n }), updatePage: async (n) => {
      const r = await Pe(e);
      return n.identity = e, r.dispatch(pe.UpdatePageForWindow, n);
    }, reorderPages: async (n) => {
      const r = await Pe(e);
      return n.identity = e, r.dispatch(pe.ReorderPagesForWindow, n);
    }, _openGlobalContextMenu: async (n) => {
      const r = await Pe(e);
      return n.identity = e, r.dispatch(pe.OpenGlobalContextMenuInternal, n);
    }, replaceToolbarOptions: async (n) => {
      await Pe(e), await fin.Window.wrapSync(e).updateOptions({ workspacePlatform: { toolbarOptions: n } });
    }, replaceWindowStateButtonOptions: async (n) => {
      await Pe(e), await fin.Window.wrapSync(e).updateOptions({ workspacePlatform: { windowStateButtonOptions: n } });
    }, updateBrowserWindowTitle: async (n) => {
      const r = fin.Window.wrapSync(e);
      typeof n != "string" ? await r.updateOptions({ workspacePlatform: { title: n } }) : console.warn("Type string for window title is deprecated, please use WindowTitle type instead", n);
    }, _openViewTabContextMenu: async (n) => {
      const r = await Pe(e);
      return n.identity = e, r.dispatch(pe.OpenViewTabContextMenuInternal, n);
    }, _openPageTabContextMenu: async (n) => {
      const r = await Pe(e);
      return n.identity = e, r.dispatch(pe.OpenPageTabContextMenuInternal, n);
    }, _openSaveModal: async (n) => (await Pe(e), (await St(e)).dispatch(At.OpenSaveModalInternal, n)), _getLayoutsWithSelectedViews: async () => (await St(e)).dispatch(At.GetLayoutsWithSelectedViewsInternal, e), _openSaveButtonContextMenu: async (n) => {
      const r = await Pe(e);
      return n.identity = e, r.dispatch(pe.OpenSaveButtonContextMenuInternal, n);
    }, _addDefaultPage: async (n) => {
      const r = await Pe(e);
      return n.identity = e, r.dispatch(pe.AddDefaultPage, n);
    }, _trackRemovedTab: async (n) => (await Pe(e)).dispatch(pe.TrackRemovedTabInternal, n), _restoreRemovedTab: async (n) => (await Pe(e)).dispatch(pe.RestoreRemovedTabInternal, n), _trackVisitedSite: async (n) => (await Pe(e)).dispatch(pe.TrackVisitedSiteInternal, n), _getRecentlyVisitedSites: async (n) => (await Pe(e)).dispatch(pe.GetRecentlyVisitedSitesInternal, n), _getFrequentlyVisitedSites: async (n) => (await Pe(e)).dispatch(pe.GetFrequentlyVisitedSitesInternal, n), _searchSites: async (n) => (await Pe(e)).dispatch(pe.SearchSitesInternal, { identity: e, req: n }), _getSearchProviders: async () => (await Pe(e)).dispatch(pe.GetSearchProvidersInternal, { identity: e }), _getCuratedContent: async (n) => (await Pe(e)).dispatch(pe.GetCuratedContentInternal, { identity: e, req: n }), _handleRequestNavigation: async (n) => (await Pe(e)).dispatch(pe.HandleRequestNavigationInternal, n), _sendUpdateVersionModalResponse: async (n) => (await Pe(e)).dispatch(pe.SendUpdateVersionModalResponseInternal, n) }), Qr = (e) => {
      const n = fin.Platform.wrapSync(e);
      return { wrapSync: (r) => Aa(r), createWindow: async (r) => {
        const s = (() => {
          const w = `browser-window-startup-${tn()}`;
          return Ln.markStart(w), w;
        })();
        ((w) => {
          fin.Application.wrapSync({ uuid: fin.me.identity.uuid }).once("window-shown", () => {
            Ln.markAndMeasure("browser-window-shown", w);
          });
        })(s), await Pe(e);
        const u = await n.createWindow(r);
        return ((w) => {
          Ln.markAndMeasure("browser-window-started", w);
        })(s), Aa(u.identity);
      }, getAllAttachedPages: async () => (await Pe(e)).dispatch(pe.GetAllAttachedPages, void 0), getAllWindows: async () => (await Pe(e), (await st()).map((r) => Aa(r.identity))), getUniquePageTitle: async (r) => (await Pe(e)).dispatch(pe.GetUniquePageTitle, r), getLastFocusedWindow: async () => (await Pe(e)).dispatch(pe.GetLastFocusedBrowserWindow, void 0), getPageByViewIdentity: async (r) => (await Pe(e)).dispatch(pe.GetPageByViewIdentity, r) };
    }, ko = (e, n = 0) => {
      let r, s, u = !1;
      const w = async (k) => {
        const b = await e(...k);
        if (u) {
          await new Promise((V) => setTimeout(V, n));
          const B = r;
          return r = void 0, u = !1, w(B);
        }
        return b;
      };
      return (...k) => (s ? (u = !0, r = k) : s = w(k).catch((b) => {
        throw console.error("makeDebouncedFunc", b), b;
      }).finally(() => {
        s = void 0;
      }), s);
    };
    var Za;
    (function(e) {
      e.Home = "/home", e.Browser = "/browser", e.Enterprise = "/enterprise", e.Provider = "/provider", e.Storefront = "/storefront", e.Dock = "/dock";
    })(Za || (Za = {}));
    function Qa(e, n) {
      return async (r, ...s) => {
        e.has(r) && e.get(r).forEach((u) => u(...s)), n && await n({ event: r, payload: s });
      };
    }
    function Xr(e, n) {
      return n && n((r) => {
        const { event: s, payload: u } = r;
        e.has(s) && e.get(s).forEach((w) => w(...u));
      }), (r, s) => {
        e.has(r) || e.set(r, /* @__PURE__ */ new Set()), e.get(r).add(s);
      };
    }
    function Ar(e) {
      return (n, r) => {
        e.has(n) || e.set(n, /* @__PURE__ */ new Set());
        const s = e.get(n), u = (...w) => {
          r(...w), s.delete(u);
        };
        s.add(u);
      };
    }
    function Er(e) {
      return (n, r) => {
        e.has(n) && e.get(n).delete(r);
      };
    }
    const So = { name: Ve.BrowserMenu, alwaysOnTop: !0, autoShow: !0, frame: !1, resizable: !1, backgroundColor: "#2f3136", smallWindow: !0, showTaskbarIcon: !1, backgroundThrottling: !1, saveWindowState: !1 };
    function Xa(e) {
      const n = { ...So, ...e };
      return n.url = function(r, s) {
        if (!bt) throw new Error("resolveAbsolutePath can only be used in a window");
        const u = window.location;
        if (/^(?:[a-z]+:)?\/\//i.test(r)) return r;
        const w = `${u.protocol}//${u.hostname}`;
        return new URL(r, w).href;
      }(n.url ?? ""), n;
    }
    const er = function(e) {
      const n = /* @__PURE__ */ new Map();
      return { emit: Qa(n, (r) => Le && fin.InterApplicationBus.publish(e, r)), addListener: Xr(n, (r) => Le && fin.InterApplicationBus.subscribe({ uuid: fin.me.uuid }, e, r)), addListenerWithUUID: (r) => Xr(n, (s) => Le && fin.InterApplicationBus.subscribe({ uuid: r }, e, s)), removeListener: Er(n), once: Ar(n) };
    }("window.menu"), ha = (e, n) => fin.Window.wrapSync(e).updateOptions({ opacity: n }), tr = (e) => er.emit("response", e), Po = ko(() => $t().getChildWindows(), 500), ga = /* @__PURE__ */ new Map();
    async function _r(e, n, r) {
      var b, B;
      const s = Xa(e), u = await ra(fin.me.identity), w = await oa(fin.me.identity) === Ce.Dark, k = u == null ? void 0 : u.theme;
      return s.backgroundColor = ((B = (b = k == null ? void 0 : k[w ? Ce.Dark : Ce.Light]) == null ? void 0 : b.palette) == null ? void 0 : B.inputBackground) || s.backgroundColor, ga.has(s.name) ? ga.get(s.name) : new Promise((V) => {
        er.once("ready", async (J) => {
          if (J.name === s.name) {
            const re = await ga.get(s.name);
            s.preventBlur || re.once("blurred", async () => {
              if (ha(J, 0), re.hide(), tr({ name: s.name, data: { actionName: "Cancel" } }), de = re.identity.name, [Ve.BrowserSaveMenu, Ve.DockSaveWorkspaceMenu, Ve.DesktopSignalsModal].includes(de)) {
                const xe = await re.getOptions();
                xe.customContext !== "submitting" && xe.customContext !== "error" && re.close();
              } else re.identity.name.startsWith(Ve.BrowserMenu) && re.close();
              var de;
            }), setTimeout(async () => {
              await ha(J, 1), (await fin.Window.wrapSync(J).getOptions()).opacity !== 1 && ha(J, 1);
            }), V(re);
          }
        });
        const Q = (async () => {
          const J = await fin.Platform.getCurrentSync().createWindow(kt({ ...s, opacity: 0, url: n || s.url, defaultLeft: r == null ? void 0 : r.left, defaultTop: r == null ? void 0 : r.top, defaultWidth: r == null ? void 0 : r.width, defaultHeight: r == null ? void 0 : r.height, workspacePlatform: { preventBlur: e.preventBlur } }, !0));
          return J.once("closed", () => {
            ga.delete(s.name);
          }), J;
        })();
        ga.set(s.name, Q);
      });
    }
    async function Tr(e, n) {
      const r = Xa(e), s = { top: r.top, left: r.left, width: r.defaultWidth || r.width, height: r.defaultHeight || r.height };
      return n.set("parentName", fin.Window.getCurrentSync().identity.name), { name: r.name, bounds: s, route: `${r.url}#${n.toString()}` };
    }
    async function nr({ options: e, parameters: n }) {
      const r = n ?? new URLSearchParams(), s = Xa(e), { name: u, modalParentIdentity: w } = s;
      if (!r.has("isEnterprise")) {
        const b = `${await (async (B) => (xa || (xa = await Tt(B)), xa))(w)}`;
        r.set("isEnterprise", b);
      }
      let k = await async function(b) {
        return (await Po()).find((B) => B.identity.name === b);
      }(u);
      if (k) await async function(b, B) {
        const { name: V, bounds: Q, route: J } = await Tr(b, B), re = { uuid: fin.me.identity.uuid, name: V }, de = fin.Window.wrapSync(re);
        await Promise.all([de.hide(), ha(re, 0), de.setBounds(Q)]), b.preventBlur || de.once("blurred", () => {
          ha(re, 0), de.hide(), tr({ name: re.name, data: { actionName: "Cancel" } });
        }), er.emit("update", V, Q, J), await tr({ name: V, data: { actionName: "Cancel" } });
      }(s, r);
      else {
        const { route: b, bounds: B } = await Tr(e, r);
        k = await _r({ ...s }, b, B);
      }
      return k;
    }
    const ma = async ({ options: e, content: n, parameters: r }) => {
      var k;
      const s = r ?? new URLSearchParams();
      s.set("content", JSON.stringify({ ...n, invocationId: tn() }));
      const u = { ...e, name: `${e.name}--${((k = e.modalParentIdentity) == null ? void 0 : k.name) ?? ""}` }, w = await nr({ options: u, parameters: s });
      return new Promise((b) => {
        er.once("response", async (B) => {
          B.name === u.name && (b({ data: B.data }), u != null && u.closeOnResponse && w.close());
        });
      });
    };
    let Rr;
    async function xo(e) {
      return (await (Rr || (Rr = Tn(`${typeof fin < "u" && fin.me.identity.uuid}-enterprise-modal`)()), Rr)).dispatch(Ia.SendUpdateVersionModalResponse, e);
    }
    const Ea = async (e) => {
      const n = ie(e), r = await n.getBounds(), s = g(r), u = P(s, { height: 240, width: 432 });
      return nr({ options: { smallWindow: !0, saveWindowState: !1, showTaskbarIcon: !0, includeInSnapshots: !1, workspacePlatform: { windowType: "enterprise" }, resizable: !1, name: Ve.DesktopSignalsModal, url: await Jt() + C.DesktopSignalsModal, defaultWidth: 432, defaultHeight: 240, preventBlur: !1, ...u }, parameters: new URLSearchParams({ title: "Desktop Signals Modal" }) });
    }, _n = (e) => ({ createPage: async (n) => (await Pe(e)).dispatch(pe.CreateSavedPageInternal, n), deletePage: async (n) => (await Pe(e)).dispatch(pe.DeleteSavedPageInternal, n), updatePage: async (n) => (await Pe(e)).dispatch(pe.UpdateSavedPageInternal, n), getPage: async (n) => (await Pe(e)).dispatch(pe.GetSavedPage, n), getPages: async (n) => (await Pe(e)).dispatch(pe.GetSavedPages, n), savePage: async (n) => (await Pe(e)).dispatch(pe.SavePage, n), createWorkspace: async (n) => (await Ue(e)).dispatch(pe.CreateSavedWorkspace, n), deleteWorkspace: async (n) => {
      const r = f(), s = await r.getCurrentWorkspace();
      if (s.workspaceId === n) throw new Error(`Cannot delete current active workspace ${s.title}`);
      return (await Ue(e)).dispatch(pe.DeleteSavedWorkspace, n);
    }, updateWorkspace: async (n) => (await Ue(e)).dispatch(pe.UpdateSavedWorkspace, n), getWorkspace: async (n) => (await Ue(e)).dispatch(pe.GetSavedWorkspace, n), getWorkspaces: async (n) => (await Ue(e)).dispatch(pe.GetSavedWorkspaces, n), getWorkspacesMetadata: async (n) => (await Ue(e)).dispatch(pe.GetSavedWorkspacesMetadata, n), saveWorkspace: async (n) => (await Ue(e)).dispatch(pe.SaveWorkspace, n), getDockProviderConfig: async (n) => (await Ue(e)).dispatch(pe.GetDockProviderConfig, n), saveDockProviderConfig: async (n) => (await Ue(e)).dispatch(pe.SaveDockProviderConfig, n) });
    var Rt;
    (function(e) {
      e.UpdatePlatformThemeScheme = "update-platform-theme-scheme";
    })(Rt || (Rt = {}));
    const ar = Tn("of-workspace-notifications-sync"), mn = Ce.Dark, eo = (e) => Object.entries(e).reduce((n, [r, s]) => `${n}--workspace-palette-${r}: ${s};`, ""), Dr = (e, n) => {
      const r = !!e.contentBackground5 && e.contentBackground5 !== "#000000", s = !!e.contentBackground4 && e.contentBackground4 !== "#000000", u = Hr(e.textDefault), w = Hr(e.textInactive), k = u.rgb, b = w.rgb, B = u.alpha ? parseFloat(u.alpha.toString()) : 1, V = w.alpha ? parseFloat(w.alpha.toString()) : 1;
      return { dockExpandedContainerBorderColor: r ? e.contentBackground5 : e.background4, dockExpandedContainerBorderRadius: r && n ? "0" : "10px", dockExpandedContainerBackground: s ? e.contentBackground4 : e.background1, fillerBackgroundColor: s ? e.contentBackground4 : "inherit", dockCompanionContainerBackground: s ? e.contentBackground4 : "inherit", dockComponentContainerBackground: r ? e.contentBackground5 : e.background5, styledDropdownActiveBackground: `${r ? e.contentBackground5 : e.background4}`, contentMenuWrapperInternalDivBorderColor: r ? e.contentBackground5 : e.background5, contentMenuItemContainerActiveBackground: r ? e.contentBackground5 : e.background3, contentMenuItemContainerHoverBackground: r ? e.contentBackground5 : e.background2, contentMenuHeaderBorderColor: r ? e.contentBackground5 : e.background5, dockCompanionSeparatorBorderColor: r ? e.contentBackground5 : e.background3, dockComponentContainerBorderColor: r ? e.contentBackground5 : e.background5, companionDockButtonActiveBackground: r ? e.contentBackground5 : e.background4, companionDockButtonHoverBackground: r ? e.contentBackground5 : e.background4, "computed-scrollbar-thumb-alpha": B, "computed-scrollbar-track-alpha": V, "scrollbar-thumb-rgb": k, "scrollbar-track-rgb": b };
    }, Or = (e, n, r) => ({ selectedTab: n === "dark" ? e.background3 : e.background1, ...Dr(e, r) }), yn = new class {
      constructor(e) {
        this.providerStorage = e, this.getVarsByScheme = (n) => n === "dark" ? this.darkPaletteVars : this.lightPaletteVars, this.setWorkspaceStorage = (n) => {
          this.workspaceStorage = n;
        }, this.trySynchronizeWorkspaceStorage = () => {
          if (this.workspaceStorage && this.hasUserPreference()) {
            const n = this.getScheme();
            if (this.workspaceStorage.setItem(en.SelectedColorScheme, n), this.darkPaletteVars && this.lightPaletteVars) if (n === "dark" || n === "light") this.workspaceStorage.setItem(en.ThemePaletteSheet, `:root{${this.getVarsByScheme(n)}}`);
            else {
              const r = `@media (prefers-color-scheme: dark){:root {${this.getVarsByScheme("dark")}}}`, s = `@media (prefers-color-scheme: light){:root{${this.getVarsByScheme("light")}}}`;
              this.workspaceStorage.setItem(en.ThemePaletteSheet, `${s}${r}`);
            }
          }
        }, this.setPalettes = async ({ light: n, dark: r }, s) => {
          this.lightPaletteVars = eo({ ...n, ...Or(n, "light", s) }), this.darkPaletteVars = eo({ ...r, ...Or(r, "dark", s) });
        };
      }
      hasUserPreference() {
        return this.providerStorage.getItem(en.SelectedColorScheme) !== null;
      }
      setScheme(e) {
        this.providerStorage.setItem(en.SelectedColorScheme, e);
      }
      setThemeDefaultScheme(e) {
        const n = Object.values(Ce);
        n.includes(e) ? this.providerStorage.setItem(en.ThemePaletteDefaultScheme, e) : console.warn(`Invalid theme default scheme '${e}'. Must be one of: ${n.join(", ")}. Ignoring default.`);
      }
      getScheme() {
        const e = this.providerStorage.getItem(en.SelectedColorScheme), n = this.providerStorage.getItem(en.ThemePaletteDefaultScheme);
        return e !== null ? e : n ?? mn;
      }
    }(y), _a = () => (vt("ThemeStorage: getThemeStorageController called"), yn), wa = (e) => ({ getThemes: async () => (await Ue(e)).dispatch(pe.GetThemes, void 0), setSelectedScheme: async (n) => (await Ue(e)).dispatch(pe.SetSelectedScheme, n), getSelectedScheme: async () => (await Ue(e)).dispatch(pe.GetSelectedScheme, void 0) }), Vn = async (e) => {
      await (await kr()).dispatch("set-selected-scheme", e);
    }, to = async (e) => {
      await (await ar()).dispatch(Rt.UpdatePlatformThemeScheme, { scheme: e });
    }, t = async (e) => {
      const n = await st();
      return Promise.all(n.map(async (r) => {
        await (await St(r.identity)).dispatch(At.SetSelectedScheme, e);
      }));
    }, a = async (e) => {
      const n = await rt();
      return Promise.all(n.map(async (r) => {
        await (await St(r.identity)).dispatch(At.SetSelectedScheme, e);
      }));
    }, i = async (e) => {
      try {
        const n = _a();
        n.setScheme(e), await Promise.all([await n.trySynchronizeWorkspaceStorage(), to(e), t(e), a(e), Vn(e)]);
      } catch (n) {
        console.error("failed to set the selected scheme: ", n);
      }
    }, l = () => {
      try {
        return _a().getScheme();
      } catch (e) {
        console.error("failed to get the selected scheme: ", e);
      }
    }, p = (e) => {
      const n = fin.Platform.wrapSync(e);
      let r;
      return Object.assign(n, { applySnapshot: async (s, u) => {
        if (typeof s != "string" && !(s != null && s.windows)) throw new Error("Not a valid browser snapshot");
        return fin.Platform.wrapSync(e).applySnapshot(s, u);
      }, getSnapshot: () => fin.Platform.wrapSync(e).getSnapshot().then((s) => s), getViewSnapshot: (s) => fin.Platform.wrapSync(e).getViewSnapshot(s), createView: (s, u, w) => fin.Platform.wrapSync(e).createView(s, u, w), launchApp: async (s) => (console.warn("launchApp method is deprecated. It is recommended to use createView - https://developers.openfin.co/of-docs/docs/platform-getting-started#add-a-view-to-an-existing-window or  createWindow - https://developers.openfin.co/of-docs/docs/platform-getting-started#create-a-platform-window instead."), s.target || (s.target = { uuid: ht, name: Ge, entityType: D || "unknown" }), (await Ue(e)).dispatch(pe.LaunchApp, s)), _invokeCustomAction: async (s, u) => {
        const w = await Ue(e), k = { actionId: s, payload: { ...u, callerType: u.callerType || ut.API } };
        return w.dispatch(pe.InvokeCustomActionInternal, k);
      }, _requestQuitPlatformDialog: async (s) => (await Ue(e)).dispatch(pe.RequestQuitPlatformDialogInternal, s), _showUpdateVersionModal: async (s) => (await Ue(e)).dispatch(pe.ShowUpdateVersionModalInternal, s), getCurrentWorkspace: async (s) => (await Ue(e)).dispatch(pe.GetCurrentWorkspace, s), applyWorkspace: async (s, u) => (await Ue(e)).dispatch(pe.ApplyWorkspace, { ...s, options: u }), restoreLastSavedWorkspace: async (s) => (await Ue(e)).dispatch(pe.RestoreLastSavedWorkspaceInternal, s), setActiveWorkspace: async (s) => (await Ue(e)).dispatch(pe.SetActiveWorkspace, s), getLanguage: async () => (await Ue(e)).dispatch(pe.GetLanguage), _getLanguageResources: async () => (await Ue(e)).dispatch(pe.GetLanguageResourcesInternal), setLanguage: async (s) => (await Ue(e)).dispatch(pe.SetLanguage, s), _raiseAnalytics: async (s) => {
        var u;
        if (r || (r = await na(e)), typeof r == "object" && ((u = r == null ? void 0 : r.analytics) == null ? void 0 : u.isSupported))
          return (await Ue(e)).dispatch(pe.Analytics, s);
        e.uuid;
      }, getNotificationsConfig: async () => (await Ue(e)).dispatch(pe.GetNotificationsConfig), _refreshBookmarksInternal: async () => (await Ue(e)).dispatch(pe.RefreshBookmarksInternal), _launchBookmarkInternal: async (s) => (await Ue(e)).dispatch(pe.LaunchBookmarkInternal, s), _updateDockFavoritesInternal: async (s) => (await Ue(e)).dispatch(pe.UpdateDockFavoritesInternal, s), _updateContentMenuInternal: async (s) => (await Ue(e)).dispatch(pe.UpdateContentMenuInternal, s), _launchDockEntryInternal: async (s) => (await Ue(e)).dispatch(pe.LaunchDockEntryInternal, s), _setDockFavoritesInternal: async (s) => (await Ue(e)).dispatch(pe.SetDockFavoritesOrderInternal, s), _setDefaultDockButtonsOrderInternal: async (s) => (await Ue(e)).dispatch(pe.SetDefaultDockButtonsOrderInternal, s), _removeDockFavoriteInternal: async (s) => (await Ue(e)).dispatch(pe.RemoveDockFavoriteInternal, s), _addDockFavoriteInternal: async (s) => (await Ue(e)).dispatch(pe.AddDockFavoriteInternal, s), _navigateContentMenuInternal: async (s) => (await Ue(e)).dispatch(pe.NavigateContentMenuInternal, s), _openDockWorkspacesContextMenuInternal: async () => (await Ue(e)).dispatch(pe.GetDockWorkspacesContextMenuInternal), _handleDockWorkspacesMenuResponseInternal: async (s) => (await Ue(e)).dispatch(pe.HandleDockWorkspacesMenuResponseInternal, s), _focusAndExpandSearchInternal: async () => (await Ue(e)).dispatch(pe.FocusAndExpandSearchInternal), _showAboutPagePopup: async (s) => (async (u) => {
        const w = new URLSearchParams({ ...u, title: "About" }), k = await ea(fin.me.identity), b = u.copyrightMessage ? 320 : 286, B = P(k, { height: b, width: 360 });
        return nr({ options: { frame: !0, smallWindow: !0, saveWindowState: !1, showTaskbarIcon: !0, includeInSnapshots: !1, workspacePlatform: { windowType: "enterprise" }, resizable: !1, name: Ve.AboutPageWindow, url: await Jt() + C.EnterpriseAboutPage, defaultWidth: 360, defaultHeight: b, preventBlur: !0, ...B }, parameters: w });
      })(s), Theme: wa(e), Browser: Qr(e), Storage: _n(e) });
    }, f = () => p(fin.me.identity), v = { contextMenuOptions: { enabled: !0, template: ["spellCheck", "separator", "print", "separator", "cut", "copy", "paste", "undo", "redo", "selectAll", "inspect", "reload"] }, downloadShelf: { enabled: !0 } };
    function x(e, n) {
      return Nn({}, v, n, e);
    }
    const A = "internal-generated-view-", E = (e, n) => e.content ? { ...e, content: e.content.map((r) => E(r, n)) } : { ...e, componentState: n(e.componentState) }, N = (e, n) => {
      var s;
      return r = x(e, n), { ...r, name: r.name ? r.name : `internal-generated-view-${tn()}`, _internalWorkspaceData: { ...r._internalWorkspaceData, viewIdentifier: ((s = r._internalWorkspaceData) == null ? void 0 : s.viewIdentifier) || tn() } };
      var r;
    }, M = (e) => ({ ...e, name: void 0 }), F = (e) => {
      const n = { ...e };
      return E(n, M);
    }, T = (e) => {
      const n = { ...e };
      return E(n, (r) => r.name && r.name.startsWith(A) ? M(r) : r);
    }, R = (e) => {
      const n = [];
      return (e && Array.isArray(e) ? e : []).forEach((r) => {
        if (r.type === "component") return n.push(r.componentState);
        const s = R(r.content);
        n.push(...s);
      }), n;
    }, O = async (e, n, r = le) => {
      let s;
      return await $e(r) && (s = (await ie(r).getOptions()).layout || { settings: {} }), { ...s, content: [{ type: "stack", content: [{ type: "component", componentName: "view", componentState: { title: e, url: n } }] }] };
    }, L = (e, n) => {
      const r = R(n.content);
      return { ...E(e, (s) => {
        const u = r.find((k) => {
          var b, B;
          return ((b = k._internalWorkspaceData) == null ? void 0 : b.viewIdentifier) === ((B = s._internalWorkspaceData) == null ? void 0 : B.viewIdentifier);
        }), w = u ? u.isClosable : s.isClosable;
        return { ...s, isClosable: w };
      }), settings: n.settings };
    }, K = (e) => e ? R(e).length : 0, $ = (Yr()(async (e) => {
      try {
        if (!e || !e.layoutContainerKey) return;
        const n = await (async (u) => fin.Platform.Layout.wrapSync({ ...fin.me.identity, layoutName: u }).getConfig())(e.layoutContainerKey), r = n.content ? R(n.content) : [], s = r.length;
        s > 1 ? (async (u) => {
          if (u.attachedPageType !== "multiView") {
            const w = await f().Browser.getUniquePageTitle();
            f().Browser.wrapSync(le).updatePage({ pageId: u.pageId, page: { title: u.title ?? w, singleViewName: null, attachedPageType: "multiView" } });
          }
        })(e) : s === 1 && (async (u, w) => {
          const k = f().Browser.wrapSync(le);
          if (u.attachedPageType !== "singleView") {
            const b = await Zr(u);
            delete b.layout, delete b.pageId;
            const B = fin.View.wrapSync({ uuid: le.uuid, name: w }), V = await B.getInfo(), Q = { ...b, title: null, singleViewName: w, hasUnsavedChanges: !1, attachedPageType: "singleView", pageIcon: V.favicons[0] };
            await k.updatePage({ pageId: u.pageId, page: Q });
          }
        })(e, r[0].name), await (async (u, w) => {
          const k = qn({ ...le, layoutName: u.layoutContainerKey }), b = await k.isShowingTabs();
          w > 1 ? b || await k.show() : w === 1 && b && await k.hide({ settings: { reorderEnabled: !0 } });
        })(e, s);
      } catch {
      }
    }, 50, { leading: !1, trailing: !0 }), hd), Z = Ld;
    var ee = c.n(Z);
    const he = JSON.parse('{"contextMenu.newWindow":"新建窗口","contextMenu.newPage":"新建页面","contextMenu.restore":"还原到上次保存的更改","contextMenu.switchWorkspace":"切换工作区","contextMenu.manageDesktopSignals":"Manage Desktop Signals","contextMenu.appearance":"外观","contextMenu.saveWorkspace":"保存工作区","contextMenu.saveWorkspaceAs":"将工作区另存为...","contextMenu.renameWorkspace":"重命名工作区","contextMenu.deleteWorkspace":"删除工作区","contextMenu.downloads":"下载","contextMenu.savePage":"保存页面","contextMenu.savePageAs":"将页面另存为...","contextMenu.print":"打印...","contextMenu.printScreen":"打印屏幕","contextMenu.closeWindow":"关闭窗口","contextMenu.openStorefront":"开放式店面","contextMenu.quitPlatform":"退出平台","contextMenu.newView":"新建视图","contextMenu.openView":"使用默认 Web 浏览器打开视图","contextMenu.openViews":"使用默认 Web 浏览器打开视图","contextMenu.reload":"Reload CN","contextMenu.reloadView":"重新加载视图","contextMenu.reloadViews":"重新加载视图","contextMenu.duplicate":"Duplicate CN","contextMenu.duplicateView":"复制视图","contextMenu.duplicateViews":"复制视图","contextMenu.addView":"将视图添加到频道","contextMenu.addViews":"将视图添加到频道","contextMenu.removeView":"从频道中移除视图","contextMenu.removeViews":"从频道中移除视图","contextMenu.closeView":"关闭视图","contextMenu.closeViews":"关闭视图","contextMenu.closeTab":"Close Tab CN","contextMenu.duplicatePage":"复制页面","contextMenu.submenu.print":"打印","contextMenu.submenu.printAll":"全部打印","saveMenu.saveWorkspaceAs":"将工作区另存为","saveMenu.savePageAs":"将页面另存为","saveModal.enterValue":"Please enter a value CN","saveModal.alreadyExists":"{{title}} 已存在。","saveModal.pleaseEnterValidName":"请输入有效名称","saveModal.renamePage":"重新命名页面","saveModal.closePage":"关闭页面","saveModal.discardChanges":"放弃更改","saveModal.discardAll":"全部放弃","saveModal.saveAll":"全部保存","saveModal.savePagesCount":"关闭前保存 ({{count}}) 个页面？","defaultPageTitle":"Untitled Page CN","enterpriseDefaultPageTitle":"Untitled Supertab CN","addNewPage":"添加新页面","addNewTab":"添加新选项卡","addNewView":"新建视图","restoreModal":"您确定要还原到上次保存的更改吗？","modal.discardWarning":"任何未保存的更改都将丢失","modal.discardPageWarning":"对此页的任何未保存的更改都将丢失。","modal.saveChangesPrompt":"关闭前保存更改？","modal.pageClose":"关闭页面","switchWorkspaceModal":"您确定要切换到 {{workspace}} 吗？","switchWorkspaceModal.warning":"任何未保存的更改都将丢失","deleteWorkspaceModal":"您确定要永久删除此工作区吗？","replaceWorkspaceModal.warning":"名称为 {{workspace}} 的工作区已存在。您是否要替换它？","replaceWorkspaceModal.warning.body":"已存在同名的工作区。替换它将覆盖其当前内容。","replaceWorkspaceModal.replace":"替换","closePlatform":"关闭平台","closePlatform.workspace":"关闭 {{workspace}} 平台","closePlatform.warning":"关闭平台将关闭所有工作区、应用或任何正在运行的进程。","back":"后退","forward":"前进","reload":"重新加载","green":"绿色","purple":"紫色","orange":"橙色","red":"红色","pink":"粉红色","yellow":"黄色","theme.light":"浅色","theme.dark":"深色","theme.system":"与操作系统设置同步","toolbar.hideTabs":"隐藏选项卡","toolbar.showTabs":"显示选项卡","toolbar.lock":"锁定","toolbar.unlock":"解锁","toolbar.colorLinking":"颜色链接","toolbar.changeLayout":"更改布局","toolbar.saveMenu":"保存菜单","toolbar.maximizeWindow":"最大化窗口","toolbar.restoreWindow":"还原窗口","toolbar.minimizeWindow":"最小化窗口","changeLayout.fullWidth":"全宽","changeLayout.columns":"列数","changeLayout.Rows":"行数","changeLayout.Grid":"网格","successIndicator.workspaceSwitched":"已切换工作区","successIndicator.hidden":"选项卡已隐藏","successIndicator.shown":"选项卡已显示","successIndicator.locked":"页面已锁定","successIndicator.unlocked":"页面已解锁","successIndicator.workspaceSaved":"工作区已保存","successIndicator.workspaceSavedAs":"工作区已另存为 {{workspace}}","successIndicator.workspaceRenamed":"工作区已重命名","successIndicator.pageSaved":"页面已保存","successIndicator.pageHasBeenSaved":"\\"{{title}}\\" has been saved. CN","successIndicator.pageCopySaved":"页面已另存为 {{title}}","successIndicator.pageRenamed":"页面已重命名","successIndicator.contextGroupApplied":"已应用上下文组","successIndicator.namedContextGroupApplied":"已应用 {{colorName}} 上下文组","successIndicator.viewRemoved":"从上下文组中移除视图","successIndicator.viewsRemoved":"从上下文组中移除视图","successIndicator.layoutApplied":"已应用 {{layoutName}} 布局","successIndicator.workspaceDeleted":"工作区已删除","errorIndicator.pageSaveFailed":"页面保存失败","errorIndicator.workspaceSaveFailed":"工作区保存失败","errorIndicator.failedToDuplicatePage":"复制页面失败","infoIndicator.colorLinkAttempt":"我们尝试对此选项卡进行颜色链接，但网站/内容所有者尚未启用该功能","global.cancel":"取消","global.confirm":"确认","global.save":"保存","global.delete":"Delete CN","appResults.header":"Featured Content CN","recentlyClosed.header":"Recently Closed CN","landingPage.subheader":"Apps and websites selected by an admin will show here CN","aria.openBrowser":"打开浏览器菜单","aria.browserTabs":"浏览器选项卡","aria.viewTab":"查看 {{title}} 的选项卡","aria.closePage":"关闭 {{title}} 的页面选项卡按钮","aria.closeTab":"关闭选项卡 {{title}}","aria.title":"标题","aria.closeContextGroup":"使用转义关闭上下文组选择对话框","aria.colorLinking":"显示或隐藏颜色链接","aria.applyColorLinking":"请选择一个视图以应用颜色链接","aria.assignColorLinkingCurrentView":"分配给 {{name}} 上下文组的当前视图","aria.assignColorLinkingCurrentViews":"分配给 {{name}} 上下文组的当前视图","aria.setColorLinkingActiveView":"将活动视图设置为 {{name}} 上下文组","aria.setColorLinkingActiveViews":"将活动视图设置为 {{name}} 上下文组","aria.escapeLayoutDialog":"使用转义关闭更改布局对话框","global.supertab":"Supertab CN","global.tab":"Tab CN","bookmarks.editBookmark":"Edit Bookmark CN","bookmarks.bookmarkAdded":"Bookmark added CN","bookmarks.done":"Done CN","bookmarks.remove":"Remove CN","bookmarks.bookmarksPanel":"Bookmarks Panel CN","bookmarks.bookmarks":"Bookmarks CN","bookmarks.allBookmarks":"All Bookmarks CN","bookmarks.favorites":"Favorites CN","bookmarks.searchBookmarks":"Search Bookmarks CN","bookmarks.clearSearchInput":"Clear Search Input CN","bookmarks.createFolder":"Create New Folder CN","bookmarks.exitFolder":"Exit Folder CN","bookmarks.newFolder":"New Folder CN","bookmarks.namedFolder":"{{name}} Folder CN","bookmarks.bookmarkSettings":"{{name}} Bookmark Settings CN","bookmarks.folderSettings":"{{name}} Folder Settings CN","bookmarks.noResultsFound":"No results found CN","bookmarks.noResultsFoundSubtext":"There are no bookmarks that match your search CN","bookmarks.nothingToShow":"Nothing to show yet CN","bookmarks.nothingToShowSubtext":"Add a bookmark to this folder CN","bookmarks.resultsFoundIn":"Results found in {{name}} CN","bookmarks.resultsInOtherFolders":"Results found in other folders CN","bookmarks.allResultsFoundIn":"All results found in CN","bookmarks.editName":"Edit Name CN","bookmarks.move":"Move CN","bookmarks.bookmarkAddedTitle":"Bookmark Added CN","bookmarks.bookmarkAddedToFolder":"Your bookmark was added to \\"{{folderName}}\\" CN","bookmarks.bookmarkEditedTitle":"Bookmark Edited CN","enterpriseContextMenu.saveSupertab":"Save Supertab CN","enterpriseContextMenu.saveSupertabAs":"Save Supertab As... CN","enterpriseContextMenu.duplicate":"Duplicate CN","enterpriseContextMenu.deleteSupertab":"Delete Supertab CN","enterpriseContextMenu.newTab":"New Tab CN","enterpriseSaveMenu.saveSupertabAs":"Save Supertab As CN","enterpriseSaveModal":{"saveSupertabCount_one":"Save {{count}} Supertab before closing? CN","saveSupertabCount_other":"Save {{count}} Supertabs before closing? CN"},"enterpriseSaveModal.renameSupertab":"Rename CN","enterpriseSaveModal.unsavedChanges":"You have unsaved changes in this Tab. CN","enterpriseSaveModal.closeTab":"Close Tab CN","enterpriseSaveModal.closeSupertab":"Close Supertab CN","enterpriseModal.discardSupertabWarning":"Any unsaved changes will be lost. CN","enterpriseDeleteModal.deleteSupertab":"Delete the \\"{{title}}\\" Supertab? CN","enterpriseDeleteModal.deleteSupertabWarning":"Are you sure you want to delete this Supertab? This action cannot be undone and is permanent. CN","enterpriseSuccessIndicator.supertabSaved":"Supertab Saved CN","enterpriseSuccessIndicator.supertabHasBeenSaved":"\\"{{title}}\\" Supertab has been saved. CN","enterpriseSuccessIndicator.supertabDeleted":"Supertab Deleted CN","enterpriseSuccessIndicator.supertabHasBeenDeleted":"\\"{{title}}\\" Supertab has been deleted. CN","enterpriseErrorIndicator.failedToDuplicateTab":"Failed to duplicate Tab CN","enterpriseErrorIndicator.failedToDuplicateSupertab":"Failed to duplicate Supertab CN","enterpriseCommandBar.switchToSupertab":"Switch to Supertab CN","enterpriseCommandBar.goTo":"Go to {{type}} CN","enterpriseCommandBar.viewMore":"View More CN","sidePanel.aiCenter":"AI Center CN","sidePanel.newChat":"New Chat CN","sidePanel.toggleSidePanel":"Toggle Side Panel CN","sidePanel.closeSidePanel":"Close Side Panel CN","sidePanel.openAiCenter":"Open AI Center CN","contextMenu.quitEnterpriseBrowser":"Quit CN","dock.removeFavorite":"Remove CN"}'), be = JSON.parse('{"contextMenu.newWindow":"新視窗","contextMenu.newPage":"新頁面","contextMenu.restore":"還原到上次儲存的變更","contextMenu.switchWorkspace":"切換工作空間","contextMenu.manageDesktopSignals":"Manage Desktop Signals","contextMenu.appearance":"外觀","contextMenu.saveWorkspace":"儲存工作空間","contextMenu.saveWorkspaceAs":"將工作空間另存為...","contextMenu.renameWorkspace":"重新命名工作空間","contextMenu.deleteWorkspace":"刪除工作空間","contextMenu.downloads":"下載","contextMenu.savePage":"儲存頁面","contextMenu.savePageAs":"將頁面另存為...","contextMenu.print":"列印...","contextMenu.printScreen":"擷取畫面","contextMenu.closeWindow":"關閉視窗","contextMenu.openStorefront":"打開 Storefront","contextMenu.quitPlatform":"退出平台","contextMenu.newView":"新視圖","contextMenu.openView":"使用預設網頁瀏覽器打開視圖","contextMenu.openViews":"使用預設網頁瀏覽器打開視圖","contextMenu.reload":"Reload ZH","contextMenu.reloadView":"重新載入視圖","contextMenu.reloadViews":"重新載入視圖","contextMenu.duplicate":"Duplicate ZH","contextMenu.duplicateView":"複寫視圖","contextMenu.duplicateViews":"複寫視圖","contextMenu.addView":"將視圖新增至頻道","contextMenu.addViews":"將視圖新增至頻道","contextMenu.removeView":"從頻道中移除視圖","contextMenu.removeViews":"從頻道中移除視圖","contextMenu.closeView":"關閉視圖","contextMenu.closeViews":"關閉視圖","contextMenu.closeTab":"Close Tab ZH","contextMenu.duplicatePage":"複寫頁面","contextMenu.submenu.print":"列印","contextMenu.submenu.printAll":"列印全部","saveMenu.saveWorkspaceAs":"將工作空間另存為","saveMenu.savePageAs":"頁面另存為","saveModal.enterValue":"Please enter a value ZH","saveModal.alreadyExists":"{{title}} 已經存在。","saveModal.pleaseEnterValidName":"請輸入一個有效的名稱","saveModal.renamePage":"重新命名頁面","saveModal.closePage":"關閉頁面","saveModal.discardChanges":"捨棄變更","saveModal.discardAll":"全部捨棄","saveModal.saveAll":"儲存全部","saveModal.savePagesCount":"要先儲存 ({{count}}) 個頁面再關閉嗎？","defaultPageTitle":"Untitled Page ZH","enterpriseDefaultPageTitle":"Untitled Supertab ZH","addNewPage":"新增新頁面","addNewTab":"新增新索引標籤","addNewView":"新視圖","restoreModal":"您確定要還原到上次儲存的變更嗎？","modal.discardWarning":"任何未儲存的變更都將被捨棄","modal.discardPageWarning":"在此頁面任何未儲存的變更都將遺失。","modal.saveChangesPrompt":"要先儲存變更再關閉嗎？","modal.pageClose":"頁面關閉","switchWorkspaceModal":"您確定要切換到 {{workspace}}？","switchWorkspaceModal.warning":"任何未儲存的變更都將被捨棄","deleteWorkspaceModal":"您確定要永久刪除此工作空間嗎？","replaceWorkspaceModal.warning":"具有名稱 {{workspace}} 的工作空間已經存在。你要更換它嗎？","replaceWorkspaceModal.warning.body":"相同名稱的工作空間已經存在。更換它後，將會覆蓋目前內容。","replaceWorkspaceModal.replace":"更換","closePlatform":"關閉平台","closePlatform.workspace":"關閉 {{workspace}} 平台","closePlatform.warning":"關閉平台後，將關閉正在執行的任何工作空間、APP 或流程。","back":"上一頁","forward":"下一頁","reload":"重新載入","green":"綠","purple":"紫","orange":"橘","red":"紅色","pink":"粉紅","yellow":"黃","theme.light":"淺","theme.dark":"深","theme.system":"與 OS 設定同步","toolbar.hideTabs":"隱藏索引標籤","toolbar.showTabs":"顯示索引標籤","toolbar.lock":"上鎖","toolbar.unlock":"解鎖","toolbar.colorLinking":"顏色連結","toolbar.changeLayout":"變更版面","toolbar.saveMenu":"儲存選單","toolbar.maximizeWindow":"最大化視窗","toolbar.restoreWindow":"還原視窗","toolbar.minimizeWindow":"最小化視窗","changeLayout.fullWidth":"全螢幕寬度","changeLayout.columns":"行","changeLayout.Rows":"列","changeLayout.Grid":"網格","successIndicator.workspaceSwitched":"工作空間已切換","successIndicator.hidden":"索引標籤已隱藏","successIndicator.shown":"索引標籤已顯示","successIndicator.locked":"頁面已上鎖","successIndicator.unlocked":"頁面已解鎖","successIndicator.workspaceSaved":"工作空間已儲存","successIndicator.workspaceSavedAs":"工作空間已另存為 {{workspace}}","successIndicator.workspaceRenamed":"工作空間已重新命名","successIndicator.pageSaved":"頁面已儲存","successIndicator.pageHasBeenSaved":"\\"{{title}}\\" has been saved. ZH","successIndicator.pageCopySaved":"頁面已另存為 {{title}}","successIndicator.pageRenamed":"頁面已重新命名","successIndicator.contextGroupApplied":"脈絡群組已套用","successIndicator.namedContextGroupApplied":"{{colorName}} 脈絡群組已套用","successIndicator.viewRemoved":"從脈絡群組中移除的視圖","successIndicator.viewsRemoved":"從脈絡群組中移除的視圖","successIndicator.layoutApplied":"{{layoutName}} 版面已套用","successIndicator.workspaceDeleted":"工作空間已刪除","errorIndicator.pageSaveFailed":"頁面無法儲存","errorIndicator.workspaceSaveFailed":"工作空間無法儲存","errorIndicator.failedToDuplicatePage":"無法複寫頁面","infoIndicator.colorLinkAttempt":"我們嘗試對此索引標籤進行顏色連結，但網站/內容所有者尚未啟用該功能","global.cancel":"取消","global.confirm":"確認","global.save":"儲存","global.delete":"Delete ZH","appResults.header":"Featured Content ZH","recentlyClosed.header":"Recently Closed ZH","landingPage.subheader":"Apps and websites selected by an admin will show here ZH","aria.openBrowser":"開啟瀏覽器選單","aria.browserTabs":"瀏覽器索引標籤","aria.viewTab":"{{title}} 的視圖索引標籤","aria.closePage":"關閉 {{title}} 的頁面索引標籤按鈕","aria.closeTab":"關閉索引標籤 {{title}}","aria.title":"標題","aria.closeContextGroup":"使用 Esc 鍵關閉脈絡群組選取對話框","aria.colorLinking":"顯示或隱藏顏色連結","aria.applyColorLinking":"請選取要套用顏色連結的視圖","aria.assignColorLinkingCurrentView":"目前視圖分配給 {{name}} 脈絡群組","aria.assignColorLinkingCurrentViews":"目前視圖分配給 {{name}} 脈絡群組","aria.setColorLinkingActiveView":"將啟用視圖設定為 {{name}} 脈絡群組","aria.setColorLinkingActiveViews":"將啟用視圖設定為 {{name}} 脈絡群組","aria.escapeLayoutDialog":"使用 Esc 鍵關閉變更版面對話框","global.supertab":"Supertab ZH","global.tab":"Tab ZH","bookmarks.editBookmark":"Edit Bookmark ZH","bookmarks.bookmarkAdded":"Bookmark added ZH","bookmarks.done":"Done ZH","bookmarks.remove":"Remove ZH","bookmarks.bookmarksPanel":"Bookmarks Panel ZH","bookmarks.bookmarks":"Bookmarks ZH","bookmarks.allBookmarks":"All Bookmarks ZH","bookmarks.favorites":"Favorites ZH","bookmarks.searchBookmarks":"Search Bookmarks ZH","bookmarks.clearSearchInput":"Clear Search Input ZH","bookmarks.createFolder":"Create New Folder ZH","bookmarks.exitFolder":"Exit Folder ZH","bookmarks.newFolder":"New Folder ZH","bookmarks.namedFolder":"{{name}} Folder ZH","bookmarks.bookmarkSettings":"{{name}} Bookmark Settings ZH","bookmarks.folderSettings":"{{name}} Folder Settings ZH","bookmarks.noResultsFound":"No results found ZH","bookmarks.noResultsFoundSubtext":"There are no bookmarks that match your search ZH","bookmarks.nothingToShow":"Nothing to show yet ZH","bookmarks.nothingToShowSubtext":"Add a bookmark to this folder ZH","bookmarks.resultsFoundIn":"Results found in {{name}} ZH","bookmarks.resultsInOtherFolders":"Results found in other folders ZH","bookmarks.allResultsFoundIn":"All results found in ZH","bookmarks.editName":"Edit Name ZH","bookmarks.move":"Move ZH","bookmarks.bookmarkAddedTitle":"Bookmark Added ZH","bookmarks.bookmarkAddedToFolder":"Your bookmark was added to \\"{{folderName}}\\" ZH","bookmarks.bookmarkEditedTitle":"Bookmark Edited ZH","enterpriseContextMenu.saveSupertab":"Save Supertab ZH","enterpriseContextMenu.saveSupertabAs":"Save Supertab As... ZH","enterpriseContextMenu.duplicate":"Duplicate ZH","enterpriseContextMenu.deleteSupertab":"Delete Supertab ZH","enterpriseContextMenu.newTab":"New Tab ZH","enterpriseSaveMenu.saveSupertabAs":"Save Supertab As ZH","enterpriseSaveModal":{"saveSupertabCount_one":"Save {{count}} Supertab before closing? ZH","saveSupertabCount_other":"Save {{count}} Supertabs before closing? ZH"},"enterpriseSaveModal.renameSupertab":"Rename ZH","enterpriseSaveModal.unsavedChanges":"You have unsaved changes in this Tab. ZH","enterpriseSaveModal.closeTab":"Close Tab ZH","enterpriseSaveModal.closeSupertab":"Close Supertab ZH","enterpriseModal.discardSupertabWarning":"Any unsaved changes will be lost. ZH","enterpriseDeleteModal.deleteSupertab":"Delete the \\"{{title}}\\" Supertab? ZH","enterpriseDeleteModal.deleteSupertabWarning":"Are you sure you want to delete this Supertab? This action cannot be undone and is permanent. ZH","enterpriseSuccessIndicator.supertabSaved":"Supertab Saved ZH","enterpriseSuccessIndicator.supertabHasBeenSaved":"\\"{{title}}\\" Supertab has been saved. ZH","enterpriseSuccessIndicator.supertabDeleted":"Supertab Deleted ZH","enterpriseSuccessIndicator.supertabHasBeenDeleted":"\\"{{title}}\\" Supertab has been deleted. ZH","enterpriseErrorIndicator.failedToDuplicateTab":"Failed to duplicate Tab ZH","enterpriseErrorIndicator.failedToDuplicateSupertab":"Failed to duplicate Supertab ZH","enterpriseCommandBar.switchToSupertab":"Switch to Supertab ZH","enterpriseCommandBar.goTo":"Go to {{type}} ZH","enterpriseCommandBar.viewMore":"View More ZH","sidePanel.aiCenter":"AI Center ZH","sidePanel.newChat":"New Chat ZH","sidePanel.toggleSidePanel":"Toggle Side Panel ZH","sidePanel.closeSidePanel":"Close Side Panel ZH","sidePanel.openAiCenter":"Open AI Center ZH","contextMenu.quitEnterpriseBrowser":"Quit ZH","dock.removeFavorite":"Remove ZH"}'), fe = JSON.parse('{"contextMenu.newWindow":"New Window","contextMenu.newPage":"New Page","contextMenu.restore":"Restore to Last Saved Changes","contextMenu.switchWorkspace":"Switch Workspace","contextMenu.manageDesktopSignals":"Manage Desktop Signals","contextMenu.appearance":"Appearance","contextMenu.saveWorkspace":"Save Workspace","contextMenu.saveWorkspaceAs":"Save Workspace As...","contextMenu.renameWorkspace":"Rename Workspace","contextMenu.deleteWorkspace":"Delete Workspace","contextMenu.downloads":"Downloads","contextMenu.savePage":"Save Page","contextMenu.savePageAs":"Save Page As...","contextMenu.print":"Print...","contextMenu.printScreen":"Print Screen","contextMenu.closeWindow":"Close Window","contextMenu.openStorefront":"Open Storefront","contextMenu.quitPlatform":"Quit {{platformLabel}}","contextMenu.newView":"New View","contextMenu.openView":"Open View with Default Web Browser","contextMenu.openViews":"Open Views with Default Web Browser","contextMenu.reload":"Reload","contextMenu.reloadView":"Reload View","contextMenu.reloadViews":"Reload Views","contextMenu.duplicate":"Duplicate","contextMenu.duplicateView":"Duplicate View","contextMenu.duplicateViews":"Duplicate Views","contextMenu.addView":"Add View to Channel","contextMenu.addViews":"Add Views to Channel","contextMenu.removeView":"Remove View from Channel","contextMenu.removeViews":"Remove Views from Channel","contextMenu.closeView":"Close View","contextMenu.closeViews":"Close Views","contextMenu.closeTab":"Close Tab","contextMenu.duplicatePage":"Duplicate Page","contextMenu.submenu.print":"Print","contextMenu.submenu.printAll":"Print All","saveMenu.saveWorkspaceAs":"Save Workspace As","saveMenu.savePageAs":"Save Page As","saveModal.enterValue":"Please enter a value","saveModal.alreadyExists":"{{title}} already exists.","saveModal.pleaseEnterValidName":"Please enter a valid name","saveModal.renamePage":"Rename Page","saveModal.closePage":"Close Page","saveModal.discardChanges":"Discard Changes","saveModal.discardAll":"Discard All","saveModal.saveAll":"Save All","saveModal.savePagesCount":"Save ({{count}}) pages before closing?","defaultPageTitle":"Untitled Page","enterpriseDefaultPageTitle":"Untitled Supertab","addNewPage":"New Page","addNewTab":"Add New Tab","addNewView":"New View","restoreModal":"Are you sure you want to restore to last saved changes?","modal.discardWarning":"Any unsaved changes will be discarded","modal.discardPageWarning":"Any unsaved changes to this page will be lost.","modal.saveChangesPrompt":"Save changes before closing?","modal.pageClose":"Page Close","switchWorkspaceModal":"Are you sure you want to switch to {{workspace}}?","switchWorkspaceModal.warning":"Any unsaved changes will be discarded","deleteWorkspaceModal":"Are you sure you want to permanently delete this workspace?","replaceWorkspaceModal.warning":"A Workspace with the name {{workspace}} already exists. Do you want to replace it?","replaceWorkspaceModal.warning.body":"A workspace with the same name already exists. Replacing it will overwrite its current contents.","replaceWorkspaceModal.replace":"Replace","closePlatform":"Close the platform","closePlatform.workspace":"Close the {{workspace}} Platform","closePlatform.warning":"Closing a platform will close any workspaces, apps or any processes that are running.","back":"Back","forward":"Forward","reload":"Reload","green":"Green","purple":"Purple","orange":"Orange","red":"Red","pink":"Pink","yellow":"Yellow","theme.light":"Light","theme.dark":"Dark","theme.system":"Sync with OS setting","toolbar.hideTabs":"Hide Tabs","toolbar.showTabs":"Show Tabs","toolbar.lock":"Lock","toolbar.unlock":"Unlock","toolbar.colorLinking":"Color Linking","toolbar.changeLayout":"Change Layout","toolbar.saveMenu":"Save Menu","toolbar.maximizeWindow":"Maximize Window","toolbar.restoreWindow":"Restore Window","toolbar.minimizeWindow":"Minimize Window","changeLayout.fullWidth":"Full Width","changeLayout.columns":"Columns","changeLayout.Rows":"Rows","changeLayout.Grid":"Grid","successIndicator.workspaceSwitched":"Workspace Switched","successIndicator.hidden":"Tabs are Hidden","successIndicator.shown":"Tabs are Shown","successIndicator.locked":"Page is Locked","successIndicator.unlocked":"Page is Unlocked","successIndicator.workspaceSaved":"Workspace saved","successIndicator.workspaceSavedAs":"Workspace saved as {{workspace}}","successIndicator.workspaceRenamed":"Workspace renamed","successIndicator.pageSaved":"Page Saved","successIndicator.pageHasBeenSaved":"\\"{{title}}\\" has been saved.","successIndicator.pageCopySaved":"Page saved as {{title}}","successIndicator.pageRenamed":"Page renamed","successIndicator.contextGroupApplied":"Context group applied","successIndicator.namedContextGroupApplied":"{{colorName}} context group applied","successIndicator.viewRemoved":"View removed from context group","successIndicator.viewsRemoved":"Views removed from context group","successIndicator.layoutApplied":"{{layoutName}} layout applied","successIndicator.workspaceDeleted":"Workspace deleted","errorIndicator.pageSaveFailed":"Page failed to save","errorIndicator.workspaceSaveFailed":"Workspace failed to save","errorIndicator.failedToDuplicatePage":"Failed to duplicate Page","infoIndicator.colorLinkAttempt":"We attempted to color link this tab, but the site/content owner has not enabled it yet","global.cancel":"Cancel","global.confirm":"Confirm","global.save":"Save","global.delete":"Delete","appResults.header":"Featured Content","recentlyClosed.header":"Recently Closed","landingPage.subheader":"Apps and websites selected by an admin will show here","aria.openBrowser":"Open Browser Menu","aria.browserTabs":"Browser Tabs","aria.viewTab":"View Tab for {{title}}","aria.closePage":"Close Page Tab Button for {{title}}","aria.closeTab":"Close Tab {{title}}","aria.title":"Title","aria.closeContextGroup":"Use escape to close context group selection dialog","aria.colorLinking":"Show or hide color linking","aria.applyColorLinking":"Please select a view to apply color linking","aria.assignColorLinkingCurrentView":"Current view assigned to {{name}} context group","aria.assignColorLinkingCurrentViews":"Current views assigned to {{name}} context group","aria.setColorLinkingActiveView":"Set active view to {{name}} context group","aria.setColorLinkingActiveViews":"Set active views to {{name}} context group","aria.escapeLayoutDialog":"Use escape to close change layout dialog","global.supertab":"Supertab","global.tab":"Tab","bookmarks.editBookmark":"Edit Bookmark","bookmarks.bookmarkAdded":"Bookmark added","bookmarks.done":"Done","bookmarks.remove":"Remove","bookmarks.bookmarksPanel":"Bookmarks Panel","bookmarks.bookmarks":"Bookmarks","bookmarks.allBookmarks":"All Bookmarks","bookmarks.favorites":"Favorites","bookmarks.searchBookmarks":"Search Bookmarks","bookmarks.clearSearchInput":"Clear Search Input","bookmarks.createFolder":"Create New Folder","bookmarks.exitFolder":"Exit Folder","bookmarks.newFolder":"New Folder","bookmarks.namedFolder":"{{name}} Folder","bookmarks.bookmarkSettings":"{{name}} Bookmark Settings","bookmarks.folderSettings":"{{name}} Folder Settings","bookmarks.noResultsFound":"No results found","bookmarks.noResultsFoundSubtext":"There are no bookmarks that match your search","bookmarks.nothingToShow":"Nothing to show yet","bookmarks.nothingToShowSubtext":"Add a bookmark to this folder","bookmarks.resultsFoundIn":"Results found in {{name}}","bookmarks.resultsInOtherFolders":"Results found in other folders","bookmarks.allResultsFoundIn":"All results found in","bookmarks.editName":"Edit Name","bookmarks.move":"Move","bookmarks.bookmarkAddedTitle":"Bookmark Added","bookmarks.bookmarkAddedToFolder":"Your bookmark was added to \\"{{folderName}}\\"","bookmarks.bookmarkEditedTitle":"Bookmark Edited","enterpriseContextMenu.saveSupertab":"Save Supertab","enterpriseContextMenu.saveSupertabAs":"Save Supertab As...","enterpriseContextMenu.duplicate":"Duplicate","enterpriseContextMenu.deleteSupertab":"Delete Supertab","enterpriseContextMenu.newTab":"New Tab","enterpriseSaveMenu.saveSupertabAs":"Save Supertab As","enterpriseSaveModal":{"saveSupertabCount_one":"Save {{count}} Supertab before closing?","saveSupertabCount_other":"Save {{count}} Supertabs before closing?"},"enterpriseSaveModal.renameSupertab":"Rename","enterpriseSaveModal.unsavedChanges":"You have unsaved changes in this Tab.","enterpriseSaveModal.closeTab":"Close Tab","enterpriseSaveModal.closeSupertab":"Close Supertab","enterpriseModal.discardSupertabWarning":"Any unsaved changes will be lost.","enterpriseDeleteModal.deleteSupertab":"Delete the \\"{{title}}\\" Supertab?","enterpriseDeleteModal.deleteSupertabWarning":"Are you sure you want to delete this Supertab? This action cannot be undone and is permanent.","enterpriseSuccessIndicator.supertabSaved":"Supertab Saved","enterpriseSuccessIndicator.supertabHasBeenSaved":"\\"{{title}}\\" Supertab has been saved.","enterpriseSuccessIndicator.supertabDeleted":"Supertab Deleted","enterpriseSuccessIndicator.supertabHasBeenDeleted":"\\"{{title}}\\" Supertab has been deleted.","enterpriseErrorIndicator.failedToDuplicateTab":"Failed to duplicate Tab","enterpriseErrorIndicator.failedToDuplicateSupertab":"Failed to duplicate Supertab","enterpriseCommandBar.switchToSupertab":"Switch to Supertab","enterpriseCommandBar.goTo":"Go to {{type}}","enterpriseCommandBar.viewMore":"View More","sidePanel.aiCenter":"AI Center","sidePanel.newChat":"New Chat","sidePanel.toggleSidePanel":"Toggle Side Panel","sidePanel.closeSidePanel":"Close Side Panel","sidePanel.openAiCenter":"Open AI Center","contextMenu.quitEnterpriseBrowser":"Quit","dock.removeFavorite":"Remove","dock.workspaceManagement":{"restoreSuccess":"Last Saved Changes Restored"}}'), me = JSON.parse('{"contextMenu.newWindow":"Neues Fenster","contextMenu.newPage":"Neue Seite","contextMenu.restore":"Wiederherstellen der zuletzt gespeicherten Änderungen","contextMenu.switchWorkspace":"Workspace wechseln","contextMenu.manageDesktopSignals":"Manage Desktop Signals","contextMenu.appearance":"Erscheinungsbild","contextMenu.saveWorkspace":"Workspace speichern","contextMenu.saveWorkspaceAs":"Workspace speichern unter...","contextMenu.renameWorkspace":"Workspace umbenennen","contextMenu.deleteWorkspace":"Workspace löschen","contextMenu.downloads":"Downloads","contextMenu.savePage":"Seite speichern","contextMenu.savePageAs":"Seite speichern unter...","contextMenu.print":"Drucken...","contextMenu.printScreen":"Bildschirmansicht drucken","contextMenu.closeWindow":"Fenster schließen","contextMenu.openStorefront":"Schaufenster öffnen","contextMenu.quitPlatform":"Plattform verlassen","contextMenu.newView":"Neue Ansicht","contextMenu.openView":"Ansicht mit Standard-Webbrowser öffnen","contextMenu.openViews":"Ansichten mit Standard-Webbrowser öffnen","contextMenu.reload":"Reload DE","contextMenu.reloadView":"Ansicht neu laden","contextMenu.reloadViews":"Ansichten neu laden","contextMenu.duplicate":"Duplicate DE","contextMenu.duplicateView":"Ansicht duplizieren","contextMenu.duplicateViews":"Ansichten duplizieren","contextMenu.addView":"Ansicht zum Channel hinzufügen","contextMenu.addViews":"Ansichten zum Channel hinzufügen","contextMenu.removeView":"Ansicht aus dem Channel entfernen","contextMenu.removeViews":"Ansichten aus dem Channel entfernen","contextMenu.closeView":"Ansicht schließen","contextMenu.closeViews":"Ansichten schließen","contextMenu.closeTab":"Close Tab DE","contextMenu.duplicatePage":"Seite duplizieren","contextMenu.submenu.print":"Drucken","contextMenu.submenu.printAll":"Alle drucken","saveMenu.saveWorkspaceAs":"Workspace speichern unter","saveMenu.savePageAs":"Seite speichern unter","saveModal.enterValue":"Please enter a value DE","saveModal.alreadyExists":"{{title}} existiert bereits.","saveModal.pleaseEnterValidName":"Bitte geben Sie einen gültigen Namen ein","saveModal.renamePage":"Seite umbenennen","saveModal.closePage":"Seite schließen","saveModal.discardChanges":"Änderungen verwerfen","saveModal.discardAll":"Alle verwerfen","saveModal.saveAll":"Alle speichern","saveModal.savePagesCount":"({{count}}) Seiten vor dem Schließen speichern?","defaultPageTitle":"Untitled Page DE","enterpriseDefaultPageTitle":"Untitled Supertab DE","addNewPage":"Neue Seite hinzufügen","addNewTab":"Neuen Tab hinzufügen","addNewView":"Neue Ansicht","restoreModal":"Sind Sie sicher, dass Sie die zuletzt gespeicherten Änderungen wiederherstellen wollen?","modal.discardWarning":"Alle nicht gespeicherten Änderungen werden verworfen","modal.discardPageWarning":"Alle nicht gespeicherten Änderungen auf dieser Seite gehen verloren.","modal.saveChangesPrompt":"Änderungen vor dem Schließen speichern?","modal.pageClose":"Seite schließen","switchWorkspaceModal":"Sind Sie sicher, dass Sie zu {{workspace}}wechseln wollen?","switchWorkspaceModal.warning":"Alle nicht gespeicherten Änderungen werden verworfen","deleteWorkspaceModal":"Sind Sie sicher, dass Sie diesen Workspace dauerhaft löschen wollen?","replaceWorkspaceModal.warning":"Ein Workspace mit dem Namen {{workspace}} existiert bereits. Möchten Sie ihn ersetzen?","replaceWorkspaceModal.warning.body":"Ein Workspace mit demselben Namen existiert bereits. Wenn Sie ihn ersetzen, wird der aktuelle Inhalt überschrieben.","replaceWorkspaceModal.replace":"Ersetzen","closePlatform":"Plattform schließen","closePlatform.workspace":"Die {{workspace}} Plattform schließen","closePlatform.warning":"Wenn Sie eine Plattform schließen, werden alle Workspaces, Apps und laufenden Prozesse beendet.","back":"Zurück","forward":"Weiter","reload":"Neu laden","green":"Grün","purple":"Lila","orange":"Orange","red":"Rot","pink":"Pink","yellow":"Gelb","theme.light":"Hell","theme.dark":"Dunkel","theme.system":"Synchronisierung mit OS-Einstellung","toolbar.hideTabs":"Tabs ausblenden","toolbar.showTabs":"Tabs anzeigen","toolbar.lock":"Sperren","toolbar.unlock":"Freischalten","toolbar.colorLinking":"Farbverknüpfung","toolbar.changeLayout":"Layout ändern","toolbar.saveMenu":"Menü speichern","toolbar.maximizeWindow":"Fenster maximieren","toolbar.restoreWindow":"Fenster wiederherstellen","toolbar.minimizeWindow":"Fenster minimieren","changeLayout.fullWidth":"Volle Breite","changeLayout.columns":"Spalten","changeLayout.Rows":"Zeilen","changeLayout.Grid":"Raster","successIndicator.workspaceSwitched":"Workspace gewechselt","successIndicator.hidden":"Tabs sind ausgeblendet","successIndicator.shown":"Tabs werden angezeigt","successIndicator.locked":"Seite ist gesperrt","successIndicator.unlocked":"Seite ist freigeschaltet","successIndicator.workspaceSaved":"Workspace gespeichert","successIndicator.workspaceSavedAs":"Workspace gespeichert als {{workspace}}","successIndicator.workspaceRenamed":"Workspace umbenannt","successIndicator.pageSaved":"Seite gespeichert","successIndicator.pageHasBeenSaved":"\\"{{title}}\\" has been saved. DE","successIndicator.pageCopySaved":"Seite gespeichert als {{title}}","successIndicator.pageRenamed":"Seite umbenannt","successIndicator.contextGroupApplied":"Angewandte Kontextgruppe","successIndicator.namedContextGroupApplied":"{{colorName}} angewandte Kontextgruppe","successIndicator.viewRemoved":"Ansicht aus der Kontextgruppe entfernt","successIndicator.viewsRemoved":"Ansichten aus der Kontextgruppe entfernt","successIndicator.layoutApplied":"{{layoutName}} angewandtes Layout","successIndicator.workspaceDeleted":"Workspace gelöscht","errorIndicator.pageSaveFailed":"Seite konnte nicht gespeichert werden","errorIndicator.workspaceSaveFailed":"Workspace konnte nicht gespeichert werden","errorIndicator.failedToDuplicatePage":"Seite kann nicht dupliziert werden","infoIndicator.colorLinkAttempt":"Wir haben versucht, diesem Tab eine Farbe zuordnen, aber der Eigentümer der Website/des Inhalts hat sie noch nicht aktiviert","global.cancel":"Abbrechen","global.confirm":"Bestätigen","global.save":"Speichern","global.delete":"Delete DE","appResults.header":"Featured Content DC","recentlyClosed.header":"Recently Closed DC","landingPage.subheader":"Apps and websites selected by an admin will show here DE","aria.openBrowser":"Browser-Menü öffnen","aria.browserTabs":"Browser-Tab","aria.viewTab":"Tab „Ansicht“ für {{title}}","aria.closePage":"Button „Seite schließen“ für {{title}}","aria.closeTab":"Tab schließen {{title}}","aria.title":"Bezeichnung","aria.closeContextGroup":"Verwenden Sie die Escape-Taste, um den Dialog zur Auswahl von Kontextgruppen zu schließen","aria.colorLinking":"Farbverknüpfung ein- oder ausblenden","aria.applyColorLinking":"Bitte wählen Sie eine Ansicht, um die Farbverknüpfung anzuwenden","aria.assignColorLinkingCurrentView":"Aktuelle Ansicht, die der Kontextgruppe {{name}} zugeordnet ist","aria.assignColorLinkingCurrentViews":"Aktuelle Ansichten, die der Kontextgruppe {{name}} zugeordnet sind","aria.setColorLinkingActiveView":"Aktive Ansicht auf die Kontextgruppe {{name}} setzen","aria.setColorLinkingActiveViews":"Aktive Ansichten auf die Kontextgruppe {{name}} setzen","aria.escapeLayoutDialog":"Verwenden Sie die Escape-Taste, um den Dialog zur Layoutänderung zu schließen","global.supertab":"Supertab DE","global.tab":"Tab DE","bookmarks.editBookmark":"Edit Bookmark DE","bookmarks.bookmarkAdded":"Bookmark added DE","bookmarks.done":"Done DE","bookmarks.remove":"Remove DE","bookmarks.bookmarksPanel":"Bookmarks Panel DE","bookmarks.bookmarks":"Bookmarks DE","bookmarks.allBookmarks":"All Bookmarks DE","bookmarks.favorites":"Favorites DE","bookmarks.searchBookmarks":"Search Bookmarks DE","bookmarks.clearSearchInput":"Clear Search Input DE","bookmarks.createFolder":"Create New Folder DE","bookmarks.exitFolder":"Exit Folder DE","bookmarks.newFolder":"New Folder DE","bookmarks.namedFolder":"{{name}} Folder DE","bookmarks.bookmarkSettings":"{{name}} Bookmark Settings DE","bookmarks.folderSettings":"{{name}} Folder Settings DE","bookmarks.noResultsFound":"No results found DE","bookmarks.noResultsFoundSubtext":"There are no bookmarks that match your search DE","bookmarks.nothingToShow":"Nothing to show yet DE","bookmarks.nothingToShowSubtext":"Add a bookmark to this folder DE","bookmarks.resultsFoundIn":"Results found in {{name}} DE","bookmarks.resultsInOtherFolders":"Results found in other folders DE","bookmarks.allResultsFoundIn":"All results found in DE","bookmarks.editName":"Edit Name DE","bookmarks.move":"Move DE","bookmarks.bookmarkAddedTitle":"Bookmark Added DE","bookmarks.bookmarkAddedToFolder":"Your bookmark was added to \\"{{folderName}}\\" DE","bookmarks.bookmarkEditedTitle":"Bookmark Edited DE","enterpriseContextMenu.saveSupertab":"Save Supertab DE","enterpriseContextMenu.saveSupertabAs":"Save Supertab As... DE","enterpriseContextMenu.duplicate":"Duplicate DE","enterpriseContextMenu.deleteSupertab":"Delete Supertab DE","enterpriseContextMenu.newTab":"New Tab DE","enterpriseSaveMenu.saveSupertabAs":"Save Supertab As DE","enterpriseSaveModal":{"saveSupertabCount_one":"Save {{count}} Supertab before closing? DE","saveSupertabCount_other":"Save {{count}} Supertabs before closing? DE"},"enterpriseSaveModal.renameSupertab":"Rename DE","enterpriseSaveModal.unsavedChanges":"You have unsaved changes in this Tab. DE","enterpriseSaveModal.closeTab":"Close Tab DE","enterpriseSaveModal.closeSupertab":"Close Supertab DE","enterpriseModal.discardSupertabWarning":"Any unsaved changes will be lost. DE","enterpriseDeleteModal.deleteSupertab":"Delete the \\"{{title}}\\" Supertab? DE","enterpriseDeleteModal.deleteSupertabWarning":"Are you sure you want to delete this Supertab? This action cannot be undone and is permanent. DE","enterpriseSuccessIndicator.supertabSaved":"Supertab Saved DE","enterpriseSuccessIndicator.supertabHasBeenSaved":"\\"{{title}}\\" Supertab has been saved. DE","enterpriseSuccessIndicator.supertabDeleted":"Supertab Deleted DE","enterpriseSuccessIndicator.supertabHasBeenDeleted":"\\"{{title}}\\" Supertab has been deleted. DE","enterpriseErrorIndicator.failedToDuplicateTab":"Failed to duplicate Tab DE","enterpriseErrorIndicator.failedToDuplicateSupertab":"Failed to duplicate Supertab DE","enterpriseCommandBar.switchToSupertab":"Switch to Supertab DE","enterpriseCommandBar.goTo":"Go to {{type}} DE","enterpriseCommandBar.viewMore":"View More DE","sidePanel.aiCenter":"AI Center DE","sidePanel.newChat":"New Chat DE","sidePanel.toggleSidePanel":"Toggle Side Panel DE","sidePanel.closeSidePanel":"Close Side Panel DE","sidePanel.openAiCenter":"Open AI Center DE","contextMenu.quitEnterpriseBrowser":"Quit DE","dock.removeFavorite":"Remove DE"}'), ke = JSON.parse('{"contextMenu.newWindow":"新しいウィンドウ","contextMenu.newPage":"新しいページ","contextMenu.restore":"最後に保存された変更に戻す","contextMenu.switchWorkspace":"ワークスペースに切り替える","contextMenu.manageDesktopSignals":"Manage Desktop Signals","contextMenu.appearance":"外観","contextMenu.saveWorkspace":"ワークスペースを保存","contextMenu.saveWorkspaceAs":"ワークスペースを別名で保存...","contextMenu.renameWorkspace":"ワークスペース名を変更","contextMenu.deleteWorkspace":"ワークスペースを削除","contextMenu.downloads":"ダウンロード","contextMenu.savePage":"ページを保存","contextMenu.savePageAs":"ページを別名で保存...","contextMenu.print":"印刷...","contextMenu.printScreen":"プリントスクリーン","contextMenu.closeWindow":"ウィンドウを閉じる","contextMenu.openStorefront":"ストアフロントを開く","contextMenu.quitPlatform":"プラットフォームを終了する","contextMenu.newView":"新しいビュー","contextMenu.openView":"デフォルトのウェブブラウザーでビューを開く","contextMenu.openViews":"デフォルトのウェブブラウザーでビューを開く","contextMenu.reload":"Reload JP","contextMenu.reloadView":"ビューをリロード","contextMenu.reloadViews":"ビューをリロード","contextMenu.duplicate":"Duplicate JP","contextMenu.duplicateView":"ビューを複製","contextMenu.duplicateViews":"ビューを複製","contextMenu.addView":"ビューをチャネルに追加","contextMenu.addViews":"ビューをチャネルに追加","contextMenu.removeView":"チャネルからビューを削除","contextMenu.removeViews":"チャネルからビューを削除","contextMenu.closeView":"ビューを閉じる","contextMenu.closeViews":"ビューを閉じる","contextMenu.closeTab":"Close Tab JP","contextMenu.duplicatePage":"ページを複製","contextMenu.submenu.print":"印刷","contextMenu.submenu.printAll":"すべてを印刷","saveMenu.saveWorkspaceAs":"ワークスペースを別名で保存","saveMenu.savePageAs":"ページを別名で保存","saveModal.enterValue":"Please enter a value JP","saveModal.alreadyExists":"{{title}}はすでに存在しています。","saveModal.pleaseEnterValidName":"有効な名前を入力してください","saveModal.renamePage":"ページ名を変更","saveModal.closePage":"ページを閉じる","saveModal.discardChanges":"変更を破棄","saveModal.discardAll":"すべて破棄","saveModal.saveAll":"すべて保存","saveModal.savePagesCount":"閉じる前に（{{count}}）つのページを保存しますか？","defaultPageTitle":"Untitled Page JP","enterpriseDefaultPageTitle":"Untitled Supertab JP","addNewPage":"新しいページを追加","addNewTab":"新しいタブを追加","addNewView":"新しいビュー","restoreModal":"本当に最後に保存された変更に戻しますか？","modal.discardWarning":"保存されていない変更は破棄されます","modal.discardPageWarning":"保存されていないこのページへの変更は失われます。","modal.saveChangesPrompt":"閉じる前に変更を保存しますか？","modal.pageClose":"ページを閉じる","switchWorkspaceModal":"本当に{{workspace}}に切り替えますか？","switchWorkspaceModal.warning":"保存されていない変更は破棄されます","deleteWorkspaceModal":"このワークスペースを永久に削除してもよろしいですか？","replaceWorkspaceModal.warning":"{{workspace}}という名前のワークスペースがすでに存在します。置き換えますか？","replaceWorkspaceModal.warning.body":"同じ名前のワークスペースがすでに存在します。置き換えると、現在の内容は上書きされます。","replaceWorkspaceModal.replace":"置き換える","closePlatform":"プラットフォームを閉じる","closePlatform.workspace":"{{workspace}}プラットフォームを閉じる","closePlatform.warning":"プラットフォームを閉じると、実行中のワークスペース、アプリ、プロセスがすべて閉じます。","back":"戻る","forward":"進む","reload":"リロード","green":"グリーン","purple":"パープル","orange":"オレンジ","red":"レッド","pink":"ピンク","yellow":"イエロー","theme.light":"ライト","theme.dark":"ダーク","theme.system":"OSの設定と同期","toolbar.hideTabs":"タブを非表示","toolbar.showTabs":"タブを表示","toolbar.lock":"ロック","toolbar.unlock":"ロック解除","toolbar.colorLinking":"カラーリンク","toolbar.changeLayout":"レイアウトを変更","toolbar.saveMenu":"メニューを保存","toolbar.maximizeWindow":"ウィンドウを最大化する","toolbar.restoreWindow":"ウィンドウを復元","toolbar.minimizeWindow":"ウィンドウを最小化する","changeLayout.fullWidth":"全幅","changeLayout.columns":"列","changeLayout.Rows":"行","changeLayout.Grid":"グリッド","successIndicator.workspaceSwitched":"ワークスペースが切り替わりました","successIndicator.hidden":"タブが非表示になっています","successIndicator.shown":"タブが表示されています","successIndicator.locked":"ページがロックされています","successIndicator.unlocked":"ページのロックが解除されています","successIndicator.workspaceSaved":"ワークスペースが保存されました","successIndicator.workspaceSavedAs":"ワークスペースが{{workspace}}として保存されました","successIndicator.workspaceRenamed":"ワークスペース名が変更されました","successIndicator.pageSaved":"ページが保存されました","successIndicator.pageHasBeenSaved":"\\"{{title}}\\" has been saved. JP","successIndicator.pageCopySaved":"ページが{{title}}として保存されました","successIndicator.pageRenamed":"ページ名が変更されました","successIndicator.contextGroupApplied":"コンテキストグループが適用されました","successIndicator.namedContextGroupApplied":"{{colorName}}コンテキストグループが適用されました","successIndicator.viewRemoved":"コンテキストグループからビューが削除されました","successIndicator.viewsRemoved":"コンテキストグループからビューが削除されました","successIndicator.layoutApplied":"{{layoutName}}レイアウトが適用されました","successIndicator.workspaceDeleted":"ワークスペースが削除されました","errorIndicator.pageSaveFailed":"ページを保存できませんでした","errorIndicator.workspaceSaveFailed":"ワークスペースを保存できませんでした","errorIndicator.failedToDuplicatePage":"ページを複製できませんでした","infoIndicator.colorLinkAttempt":"このタブをカラーリンクしようとしましたが、サイト/コンテンツのオーナーがまだこれを有効にしていません","global.cancel":"キャンセル","global.confirm":"確認","global.save":"保存","global.delete":"Delete JP","appResults.header":"Featured content JP","recentlyClosed.header":"Recently Closed JP","landingPage.subheader":"Apps and websites selected by an admin will show here JP","aria.openBrowser":"ブラウザーメニューを開く","aria.browserTabs":"ブラウザータブ","aria.viewTab":"{{title}}のタブを表示","aria.closePage":"{{title}}のページタブボタンを閉じる","aria.closeTab":"{{title}}タブを閉じる","aria.title":"タイトル","aria.closeContextGroup":"エスケープを使用して、コンテキストグループ選択ダイアログを閉じる","aria.colorLinking":"カラーリンクの表示/非表示","aria.applyColorLinking":"カラーリンクを適用するビューを選択してください","aria.assignColorLinkingCurrentView":"現在のビューは{{name}}コンテキストグループに割り当てられています","aria.assignColorLinkingCurrentViews":"現在のビューは{{name}}コンテキストグループに割り当てられています","aria.setColorLinkingActiveView":"アクティブビューを{{name}}コンテキストグループに設定","aria.setColorLinkingActiveViews":"アクティブビューを{{name}}コンテキストグループに設定","aria.escapeLayoutDialog":"エスケープを使用して、レイアウト変更選択ダイアログを閉じる","global.supertab":"Supertab JP","global.tab":"Tab JP","bookmarks.editBookmark":"Edit Bookmark JP","bookmarks.bookmarkAdded":"Bookmark added JP","bookmarks.done":"Done JP","bookmarks.remove":"Remove JP","bookmarks.bookmarksPanel":"Bookmarks Panel JP","bookmarks.bookmarks":"Bookmarks JP","bookmarks.allBookmarks":"All Bookmarks JP","bookmarks.favorites":"Favorites JP","bookmarks.searchBookmarks":"Search Bookmarks JP","bookmarks.clearSearchInput":"Clear Search Input JP","bookmarks.createFolder":"Create New Folder JP","bookmarks.exitFolder":"Exit Folder JP","bookmarks.newFolder":"New Folder JP","bookmarks.namedFolder":"{{name}} Folder JP","bookmarks.bookmarkSettings":"{{name}} Bookmark Settings JP","bookmarks.folderSettings":"{{name}} Folder Settings JP","bookmarks.noResultsFound":"No results found JP","bookmarks.noResultsFoundSubtext":"There are no bookmarks that match your search JP","bookmarks.nothingToShow":"Nothing to show yet JP","bookmarks.nothingToShowSubtext":"Add a bookmark to this folder JP","bookmarks.resultsFoundIn":"Results found in {{name}} JP","bookmarks.resultsInOtherFolders":"Results found in other folders JP","bookmarks.allResultsFoundIn":"All results found in JP","bookmarks.editName":"Edit Name JP","bookmarks.move":"Move JP","bookmarks.bookmarkAddedTitle":"Bookmark Added JP","bookmarks.bookmarkAddedToFolder":"Your bookmark was added to \\"{{folderName}}\\" JP","bookmarks.bookmarkEditedTitle":"Bookmark Edited JP","enterpriseContextMenu.saveSupertab":"Save Supertab JP","enterpriseContextMenu.saveSupertabAs":"Save Supertab As... JP","enterpriseContextMenu.duplicate":"Duplicate JP","enterpriseContextMenu.deleteSupertab":"Delete Supertab JP","enterpriseContextMenu.newTab":"New Tab JP","enterpriseSaveMenu.saveSupertabAs":"Save Supertab As JP","enterpriseSaveModal":{"saveSupertabCount_one":"Save {{count}} Supertab before closing? JP","saveSupertabCount_other":"Save {{count}} Supertabs before closing? JP"},"enterpriseSaveModal.renameSupertab":"Rename JP","enterpriseSaveModal.unsavedChanges":"You have unsaved changes in this Tab. JP","enterpriseSaveModal.closeTab":"Close Tab JP","enterpriseSaveModal.closeSupertab":"Close Supertab JP","enterpriseModal.discardSupertabWarning":"Any unsaved changes will be lost. JP","enterpriseDeleteModal.deleteSupertab":"Delete the \\"{{title}}\\" Supertab? JP","enterpriseDeleteModal.deleteSupertabWarning":"Are you sure you want to delete this Supertab? This action cannot be undone and is permanent. JP","enterpriseSuccessIndicator.supertabSaved":"Supertab Saved JP","enterpriseSuccessIndicator.supertabHasBeenSaved":"\\"{{title}}\\" Supertab has been saved. JP","enterpriseSuccessIndicator.supertabDeleted":"Supertab Deleted JP","enterpriseSuccessIndicator.supertabHasBeenDeleted":"\\"{{title}}\\" Supertab has been deleted. JP","enterpriseErrorIndicator.failedToDuplicateTab":"Failed to duplicate Tab JP","enterpriseErrorIndicator.failedToDuplicateSupertab":"Failed to duplicate Supertab JP","enterpriseCommandBar.switchToSupertab":"Switch to Supertab JP","enterpriseCommandBar.goTo":"Go to {{type}} JP","enterpriseCommandBar.viewMore":"View More JP","sidePanel.aiCenter":"AI Center JP","sidePanel.newChat":"New Chat JP","sidePanel.toggleSidePanel":"Toggle Side Panel JP","sidePanel.closeSidePanel":"Close Side Panel JP","sidePanel.openAiCenter":"Open AI Center JP","contextMenu.quitEnterpriseBrowser":"Quit JP","dock.removeFavorite":"Remove JP"}'), ye = JSON.parse('{"contextMenu.newWindow":"새 창","contextMenu.newPage":"새 페이지","contextMenu.restore":"마지막으로 저장한 변경 사항으로 복원","contextMenu.switchWorkspace":"작업 공간 전환","contextMenu.manageDesktopSignals":"Manage Desktop Signals","contextMenu.appearance":"모양","contextMenu.saveWorkspace":"작업 공간 저장","contextMenu.saveWorkspaceAs":"다른 이름으로 작업 공간 저장...","contextMenu.renameWorkspace":"작업 공간 이름 바꾸기","contextMenu.deleteWorkspace":"작업 공간 삭제","contextMenu.downloads":"다운로드","contextMenu.savePage":"페이지 저장","contextMenu.savePageAs":"다른 이름으로 페이지 저장...","contextMenu.print":"인쇄...","contextMenu.printScreen":"화면 인쇄","contextMenu.closeWindow":"창 닫기","contextMenu.openStorefront":"매장 열기","contextMenu.quitPlatform":"플랫폼 종료","contextMenu.newView":"새 뷰","contextMenu.openView":"기본 웹 브라우저로 뷰 열기","contextMenu.openViews":"기본 웹 브라우저로 뷰 열기","contextMenu.reload":"Reload KR","contextMenu.reloadView":"뷰 다시 로드","contextMenu.reloadViews":"뷰 다시 로드","contextMenu.duplicate":"Duplicate KR","contextMenu.duplicateView":"뷰 복제","contextMenu.duplicateViews":"뷰 복제","contextMenu.addView":"채널에 뷰 추가","contextMenu.addViews":"채널에 뷰 추가","contextMenu.removeView":"채널에서 뷰 제거","contextMenu.removeViews":"채널에서 뷰 제거","contextMenu.closeView":"뷰 닫기","contextMenu.closeViews":"뷰 닫기","contextMenu.closeTab":"Close Tab KR","contextMenu.duplicatePage":"페이지 복제","contextMenu.submenu.print":"인쇄","contextMenu.submenu.printAll":"모두 인쇄","saveMenu.saveWorkspaceAs":"다른 이름으로 작업 공간 저장","saveMenu.savePageAs":"다른 이름으로 페이지 저장","saveModal.enterValue":"Please enter a value KR","saveModal.alreadyExists":"{{title}}이(가) 이미 존재합니다.","saveModal.pleaseEnterValidName":"유효한 이름을 입력하십시오.","saveModal.renamePage":"페이지 이름 바꾸기","saveModal.closePage":"페이지 닫기","saveModal.discardChanges":"변경 사항 폐기","saveModal.discardAll":"모두 폐기","saveModal.saveAll":"모두 저장","saveModal.savePagesCount":"닫기 전에 페이지({{count}}개)를 저장하시겠습니까?","defaultPageTitle":"Untitled Page KR","enterpriseDefaultPageTitle":"Untitled Supertab KR","addNewPage":"새 페이지 추가","addNewTab":"새 탭 추가","addNewView":"새 뷰","restoreModal":"마지막으로 저장한 변경 사항으로 복원하시겠습니까?","modal.discardWarning":"저장하지 않은 변경 사항은 모두 폐기됩니다","modal.discardPageWarning":"이 페이지의 저장하지 않은 변경 사항은 모두 손실됩니다.","modal.saveChangesPrompt":"닫기 전에 변경 사항을 저장하시겠습니까?","modal.pageClose":"페이지 닫기","switchWorkspaceModal":"{{workspace}}(으)로 전환하시겠습니까?","switchWorkspaceModal.warning":"저장하지 않은 변경 사항은 모두 폐기됩니다","deleteWorkspaceModal":"이 작업 공간을 영구적으로 삭제하시겠습니까?","replaceWorkspaceModal.warning":"{{workspace}}(이)라는 이름의 작업 공간이 이미 존재합니다. 교체하시겠습니까?","replaceWorkspaceModal.warning.body":"같은 이름의 작업 공간이 이미 존재합니다. 교체하면 현재 내용을 덮어쓰게 됩니다.","replaceWorkspaceModal.replace":"교체","closePlatform":"플랫폼 닫기","closePlatform.workspace":"{{workspace}} 플랫폼 닫기","closePlatform.warning":"플랫폼을 닫으면 실행 중인 모든 작업 공간, 앱 또는 프로세스가 닫힙니다.","back":"뒤로 가기","forward":"앞으로 가기","reload":"새로고침","green":"녹색","purple":"보라색","orange":"오렌지색","red":"빨간색","pink":"핑크색","yellow":"노란색","theme.light":"밝은","theme.dark":"어두운","theme.system":"OS 설정과 동기화","toolbar.hideTabs":"탭 숨기기","toolbar.showTabs":"탭 표시","toolbar.lock":"잠금","toolbar.unlock":"잠금 해제","toolbar.colorLinking":"색상 연결","toolbar.changeLayout":"레이아웃 변경","toolbar.saveMenu":"저장 메뉴","toolbar.maximizeWindow":"창 최대화","toolbar.restoreWindow":"창 복원","toolbar.minimizeWindow":"창 최소화","changeLayout.fullWidth":"전체 너비","changeLayout.columns":"열","changeLayout.Rows":"행","changeLayout.Grid":"그리드","successIndicator.workspaceSwitched":"작업 공간 전환","successIndicator.hidden":"탭 숨김","successIndicator.shown":"탭 표시","successIndicator.locked":"페이지 잠금","successIndicator.unlocked":"페이지 잠금 해제됨","successIndicator.workspaceSaved":"작업 공간 저장됨","successIndicator.workspaceSavedAs":"작업 공간이 {{workspace}}(으)로 저장됨","successIndicator.workspaceRenamed":"작업 공간 이름 변경됨","successIndicator.pageSaved":"페이지 저장됨","successIndicator.pageHasBeenSaved":"\\"{{title}}\\" has been saved. KR","successIndicator.pageCopySaved":"페이지가 {{title}}(으)로 저장됨","successIndicator.pageRenamed":"페이지 이름 변경됨","successIndicator.contextGroupApplied":"컨텍스트 그룹 적용됨","successIndicator.namedContextGroupApplied":"{{colorName}} 컨텍스트 그룹 적용됨","successIndicator.viewRemoved":"컨텍스트 그룹에서 뷰 제거됨","successIndicator.viewsRemoved":"컨텍스트 그룹에서 뷰 제거됨","successIndicator.layoutApplied":"{{layoutName}} 레이아웃 적용됨","successIndicator.workspaceDeleted":"작업 공간 삭제됨","errorIndicator.pageSaveFailed":"페이지 저장 실패","errorIndicator.workspaceSaveFailed":"작업 공간 저장 실패","errorIndicator.failedToDuplicatePage":"페이지 복제 실패","infoIndicator.colorLinkAttempt":"이 탭의 색상 링크를 시도했지만 사이트/콘텐츠 소유자가 아직 활성화하지 않았습니다.","global.cancel":"취소","global.confirm":"확인","global.save":"저장","global.delete":"Delete KR","appResults.header":"Featured Content KR","recentlyClosed.header":"Recently Closed KR","landingPage.subheader":"Apps and websites selected by an admin will show here KR","aria.openBrowser":"브라우저 메뉴 열기","aria.browserTabs":"브라우저 탭","aria.viewTab":"{{title}}의 뷰 탭","aria.closePage":"{{title}}의 페이지 닫기 탭","aria.closeTab":"탭 {{title}} 닫기","aria.title":"제목","aria.closeContextGroup":"이스케이프를 사용하여 컨텍스트 그룹 선택 대화상자 닫기","aria.colorLinking":"색상 연결 표시 또는 숨기기","aria.applyColorLinking":"색상 연결을 적용하려면 뷰를 선택하십시오.","aria.assignColorLinkingCurrentView":"{{name}} 컨텍스트 그룹에 할당된 현재 뷰","aria.assignColorLinkingCurrentViews":"{{name}} 컨텍스트 그룹에 할당된 현재 뷰","aria.setColorLinkingActiveView":"활성 뷰를 {{name}} 컨텍스트 그룹으로 설정","aria.setColorLinkingActiveViews":"활성 뷰를 {{name}} 컨텍스트 그룹으로 설정","aria.escapeLayoutDialog":"이스케이프를 사용하여 레이아웃 변경 대화상자 닫기","global.supertab":"Supertab KR","global.tab":"Tab KR","bookmarks.editBookmark":"Edit Bookmark KR","bookmarks.bookmarkAdded":"Bookmark added KR","bookmarks.done":"Done KR","bookmarks.remove":"Remove KR","bookmarks.bookmarksPanel":"Bookmarks Panel KR","bookmarks.bookmarks":"Bookmarks KR","bookmarks.allBookmarks":"All Bookmarks KR","bookmarks.favorites":"Favorites KR","bookmarks.searchBookmarks":"Search Bookmarks KR","bookmarks.clearSearchInput":"Clear Search Input KR","bookmarks.createFolder":"Create New Folder KR","bookmarks.exitFolder":"Exit Folder KR","bookmarks.newFolder":"New Folder KR","bookmarks.namedFolder":"{{name}} Folder KR","bookmarks.bookmarkSettings":"{{name}} Bookmark Settings KR","bookmarks.folderSettings":"{{name}} Folder Settings KR","bookmarks.noResultsFound":"No results found KR","bookmarks.noResultsFoundSubtext":"There are no bookmarks that match your search KR","bookmarks.nothingToShow":"Nothing to show yet KR","bookmarks.nothingToShowSubtext":"Add a bookmark to this folder KR","bookmarks.resultsFoundIn":"Results found in {{name}} KR","bookmarks.resultsInOtherFolders":"Results found in other folders KR","bookmarks.allResultsFoundIn":"All results found in KR","bookmarks.editName":"Edit Name KR","bookmarks.move":"Move KR","bookmarks.bookmarkAddedTitle":"Bookmark Added KR","bookmarks.bookmarkAddedToFolder":"Your bookmark was added to \\"{{folderName}}\\" KR","bookmarks.bookmarkEditedTitle":"Bookmark Edited KR","enterpriseContextMenu.saveSupertab":"Save Supertab KR","enterpriseContextMenu.saveSupertabAs":"Save Supertab As... KR","enterpriseContextMenu.duplicate":"Duplicate KR","enterpriseContextMenu.deleteSupertab":"Delete Supertab KR","enterpriseContextMenu.newTab":"New Tab KR","enterpriseSaveMenu.saveSupertabAs":"Save Supertab As KR","enterpriseSaveModal":{"saveSupertabCount_one":"Save {{count}} Supertab before closing? KR","saveSupertabCount_other":"Save {{count}} Supertabs before closing? KR"},"enterpriseSaveModal.renameSupertab":"Rename KR","enterpriseSaveModal.unsavedChanges":"You have unsaved changes in this Tab. KR","enterpriseSaveModal.closeTab":"Close Tab KR","enterpriseSaveModal.closeSupertab":"Close Supertab KR","enterpriseModal.discardSupertabWarning":"Any unsaved changes will be lost. KR","enterpriseDeleteModal.deleteSupertab":"Delete the \\"{{title}}\\" Supertab? KR","enterpriseDeleteModal.deleteSupertabWarning":"Are you sure you want to delete this Supertab? This action cannot be undone and is permanent. KR","enterpriseSuccessIndicator.supertabSaved":"Supertab Saved KR","enterpriseSuccessIndicator.supertabHasBeenSaved":"\\"{{title}}\\" Supertab has been saved. KR","enterpriseSuccessIndicator.supertabDeleted":"Supertab Deleted KR","enterpriseSuccessIndicator.supertabHasBeenDeleted":"\\"{{title}}\\" Supertab has been deleted. KR","enterpriseErrorIndicator.failedToDuplicateTab":"Failed to duplicate Tab KR","enterpriseErrorIndicator.failedToDuplicateSupertab":"Failed to duplicate Supertab KR","enterpriseCommandBar.switchToSupertab":"Switch to Supertab KR","enterpriseCommandBar.goTo":"Go to {{type}} KR","enterpriseCommandBar.viewMore":"View More KR","sidePanel.aiCenter":"AI Center KR","sidePanel.newChat":"New Chat KR","sidePanel.toggleSidePanel":"Toggle Side Panel KR","sidePanel.closeSidePanel":"Close Side Panel KR","sidePanel.openAiCenter":"Open AI Center KR","contextMenu.quitEnterpriseBrowser":"Quit KR","dock.removeFavorite":"Remove KR"}'), Ee = JSON.parse('{"contextMenu.newWindow":"Новое окно","contextMenu.newPage":"Новая страница","contextMenu.restore":"Восстановить последние сохраненные изменения","contextMenu.switchWorkspace":"Переключить рабочую область","contextMenu.manageDesktopSignals":"Manage Desktop Signals","contextMenu.appearance":"Внешний вид","contextMenu.saveWorkspace":"Сохранить рабочую область","contextMenu.saveWorkspaceAs":"Сохранить рабочую область как...","contextMenu.renameWorkspace":"Переименовать рабочую область","contextMenu.deleteWorkspace":"Удалить рабочую область","contextMenu.downloads":"Загрузки","contextMenu.savePage":"Сохранить страницу","contextMenu.savePageAs":"Сохранить страницу как...","contextMenu.print":"Печать...","contextMenu.printScreen":"Распечатать экран","contextMenu.closeWindow":"Закрыть окно","contextMenu.openStorefront":"Открыть Storefront","contextMenu.quitPlatform":"Выйти из платформы","contextMenu.newView":"Новое представление","contextMenu.openView":"Открыть представление с помощью веб-браузера по умолчанию","contextMenu.openViews":"Открыть представления с помощью веб-браузера по умолчанию","contextMenu.reload":"Reload RU","contextMenu.reloadView":"Перезагрузить представление","contextMenu.reloadViews":"Перезагрузить представления","contextMenu.duplicate":"Duplicate RU","contextMenu.duplicateView":"Дублировать представление","contextMenu.duplicateViews":"Дублировать представления","contextMenu.addView":"Добавить представление на канал","contextMenu.addViews":"Добавить представления на канал","contextMenu.removeView":"Удалить представление из канала","contextMenu.removeViews":"Удалить представления из канала","contextMenu.closeView":"Закрыть представление","contextMenu.closeViews":"Закрыть представления","contextMenu.closeTab":"Close Tab RU","contextMenu.duplicatePage":"Дублировать страницу","contextMenu.submenu.print":"Печатать","contextMenu.submenu.printAll":"Печатать все","saveMenu.saveWorkspaceAs":"Сохранить рабочую область как","saveMenu.savePageAs":"Сохранить страницу как","saveModal.enterValue":"Please enter a value RU","saveModal.alreadyExists":"{{title}} уже существует.","saveModal.pleaseEnterValidName":"Введите подходящее имя","saveModal.renamePage":"Переименовать страницу","saveModal.closePage":"Закрыть страницу","saveModal.discardChanges":"Отменить изменения","saveModal.discardAll":"Отменить все","saveModal.saveAll":"Сохранить все","saveModal.savePagesCount":"Сохранить ({{count}}) страниц перед закрытием?","defaultPageTitle":"Untitled Page RU","enterpriseDefaultPageTitle":"Untitled Supertab RU","addNewPage":"Добавить новую страницу","addNewTab":"Добавить новую вкладку","addNewView":"Новое представление","restoreModal":"Вы уверены, что хотите восстановить последние сохраненные изменения?","modal.discardWarning":"Все несохраненные изменения будут отменены","modal.discardPageWarning":"Все несохраненные изменения на этой странице будут потеряны.","modal.saveChangesPrompt":"Сохранить изменения перед закрытием?","modal.pageClose":"Закрыть страницу","switchWorkspaceModal":"Вы уверены, что хотите перейти в {{workspace}}?","switchWorkspaceModal.warning":"Все несохраненные изменения будут отменены","deleteWorkspaceModal":"Вы уверены, что хотите навсегда удалить эту рабочую область?","replaceWorkspaceModal.warning":"Рабочая область с именем {{workspace}} уже существует. Вы хотите заменить ее?","replaceWorkspaceModal.warning.body":"Рабочая область с таким же именем уже существует. При ее замене текущее содержимое будет перезаписано.","replaceWorkspaceModal.replace":"Заменить","closePlatform":"Закрыть платформу","closePlatform.workspace":"Закрыть платформу {{workspace}}","closePlatform.warning":"Закрытие платформы приведет к закрытию всех рабочих областей, приложений и запущенных процессов.","back":"Назад","forward":"Вперед","reload":"Перезагрузить ","green":"Зеленый","purple":"Фиолетовый","orange":"Оранжевый","red":"Красный","pink":"Розовый","yellow":"Желтый","theme.light":"Светлый","theme.dark":"Темный","theme.system":"Синхронизировать с настройками ОС","toolbar.hideTabs":"Скрыть вкладки","toolbar.showTabs":"Показать вкладки","toolbar.lock":"Заблокировать","toolbar.unlock":"Разблокировать","toolbar.colorLinking":"Привязка к цвету","toolbar.changeLayout":"Изменить макет","toolbar.saveMenu":"Меню сохранения","toolbar.maximizeWindow":"Увеличить окно","toolbar.restoreWindow":"Восстановить окно","toolbar.minimizeWindow":"Свернуть окно","changeLayout.fullWidth":"Полная ширина","changeLayout.columns":"Столбцы","changeLayout.Rows":"Строки","changeLayout.Grid":"Сетка","successIndicator.workspaceSwitched":"Рабочая область переключена","successIndicator.hidden":"Вкладки скрыты","successIndicator.shown":"Вкладки показаны","successIndicator.locked":"Страница заблокирована","successIndicator.unlocked":"Страница разблокирована","successIndicator.workspaceSaved":"Рабочая область сохранена","successIndicator.workspaceSavedAs":"Рабочая область сохранена как {{workspace}}","successIndicator.workspaceRenamed":"Рабочая область переименована","successIndicator.pageSaved":"Страница сохранена","successIndicator.pageHasBeenSaved":"\\"{{title}}\\" has been saved. RU","successIndicator.pageCopySaved":"Страница сохранена как {{title}}","successIndicator.pageRenamed":"Страница переименована","successIndicator.contextGroupApplied":"Контекстная группа применена","successIndicator.namedContextGroupApplied":"Контекстная группа {{colorName}} применена","successIndicator.viewRemoved":"Представление удалено из контекстной группы","successIndicator.viewsRemoved":"Представления удалены из контекстной группы","successIndicator.layoutApplied":"Макет {{layoutName}} применен","successIndicator.workspaceDeleted":"Рабочая область удалена","errorIndicator.pageSaveFailed":"Не удалось сохранить страницу","errorIndicator.workspaceSaveFailed":"Не удалось сохранить рабочую область","errorIndicator.failedToDuplicatePage":"Не удалось продублировать страницу","infoIndicator.colorLinkAttempt":"Мы попытались привязать цвет к этой вкладке, но владелец сайта/контента еще не включил эту возможность","global.cancel":"Отменить","global.confirm":"Подтвердить","global.save":"Сохранить","global.delete":"Delete RU","appResults.header":"Featured Content RU","recentlyClosed.header":"Recently Closed RU","landingPage.subheader":"Apps and websites selected by an admin will show here RU","aria.openBrowser":"Открыть меню браузера","aria.browserTabs":"Вкладки браузера","aria.viewTab":"Вкладка представления {{title}}","aria.closePage":"Кнопка «Закрыть» на вкладке для страницы {{title}}","aria.closeTab":"Закрыть вкладку {{title}}","aria.title":"Название","aria.closeContextGroup":"Чтобы закрыть диалог выбора контекстной группы, используйте escape","aria.colorLinking":"Показать или скрыть привязку к цвету","aria.applyColorLinking":"Выберите представление, чтобы применить привязку к цвету","aria.assignColorLinkingCurrentView":"Текущее представление, назначенное контекстной группе {{name}}","aria.assignColorLinkingCurrentViews":"Текущие представления, назначенные контекстной группе {{name}}","aria.setColorLinkingActiveView":"Установить активное представление в контекстную группу {{name}}","aria.setColorLinkingActiveViews":"Установить активные представления в контекстную группу {{name}}","aria.escapeLayoutDialog":"Чтобы закрыть диалог изменения макета, используйте escape","global.supertab":"Supertab RU","global.tab":"Tab RU","bookmarks.editBookmark":"Edit Bookmark RU","bookmarks.bookmarkAdded":"Bookmark added RU","bookmarks.done":"Done RU","bookmarks.remove":"Remove RU","bookmarks.bookmarksPanel":"Bookmarks Panel RU","bookmarks.bookmarks":"Bookmarks RU","bookmarks.allBookmarks":"All Bookmarks RU","bookmarks.favorites":"Favorites RU","bookmarks.searchBookmarks":"Search Bookmarks RU","bookmarks.clearSearchInput":"Clear Search Input RU","bookmarks.createFolder":"Create New Folder RU","bookmarks.exitFolder":"Exit Folder RU","bookmarks.newFolder":"New Folder RU","bookmarks.namedFolder":"{{name}} Folder RU","bookmarks.bookmarkSettings":"{{name}} Bookmark Settings RU","bookmarks.folderSettings":"{{name}} Folder Settings RU","bookmarks.noResultsFound":"No results found RU","bookmarks.noResultsFoundSubtext":"There are no bookmarks that match your search RU","bookmarks.nothingToShow":"Nothing to show yet RU","bookmarks.nothingToShowSubtext":"Add a bookmark to this folder RU","bookmarks.resultsFoundIn":"Results found in {{name}} RU","bookmarks.resultsInOtherFolders":"Results found in other folders RU","bookmarks.allResultsFoundIn":"All results found in RU","bookmarks.editName":"Edit Name RU","bookmarks.move":"Move RU","bookmarks.bookmarkAddedTitle":"Bookmark Added RU","bookmarks.bookmarkAddedToFolder":"Your bookmark was added to \\"{{folderName}}\\" RU","bookmarks.bookmarkEditedTitle":"Bookmark Edited RU","enterpriseContextMenu.saveSupertab":"Save Supertab RU","enterpriseContextMenu.saveSupertabAs":"Save Supertab As... RU","enterpriseContextMenu.duplicate":"Duplicate RU","enterpriseContextMenu.deleteSupertab":"Delete Supertab RU","enterpriseContextMenu.newTab":"New Tab RU","enterpriseSaveMenu.saveSupertabAs":"Save Supertab As RU","enterpriseSaveModal":{"saveSupertabCount_one":"Save {{count}} Supertab before closing? RU","saveSupertabCount_other":"Save {{count}} Supertabs before closing? RU"},"enterpriseSaveModal.renameSupertab":"Rename RU","enterpriseSaveModal.unsavedChanges":"You have unsaved changes in this Tab. RU","enterpriseSaveModal.closeTab":"Close Tab RU","enterpriseSaveModal.closeSupertab":"Close Supertab RU","enterpriseModal.discardSupertabWarning":"Any unsaved changes will be lost. RU","enterpriseDeleteModal.deleteSupertab":"Delete the \\"{{title}}\\" Supertab? RU","enterpriseDeleteModal.deleteSupertabWarning":"Are you sure you want to delete this Supertab? This action cannot be undone and is permanent. RU","enterpriseSuccessIndicator.supertabSaved":"Supertab Saved RU","enterpriseSuccessIndicator.supertabHasBeenSaved":"\\"{{title}}\\" Supertab has been saved.RU","enterpriseSuccessIndicator.supertabDeleted":"Supertab Deleted RU","enterpriseSuccessIndicator.supertabHasBeenDeleted":"\\"{{title}}\\" Supertab has been deleted. RU","enterpriseErrorIndicator.failedToDuplicateTab":"Failed to duplicate Tab RU","enterpriseErrorIndicator.failedToDuplicateSupertab":"Failed to duplicate Supertab RU","enterpriseCommandBar.switchToSupertab":"Switch to Supertab RU","enterpriseCommandBar.goTo":"Go to {{type}} RU","enterpriseCommandBar.viewMore":"View More RU","sidePanel.aiCenter":"AI Center RU","sidePanel.newChat":"New Chat RU","sidePanel.toggleSidePanel":"Toggle Side Panel RU","sidePanel.closeSidePanel":"Close Side Panel RU","sidePanel.openAiCenter":"Open AI Center RU","contextMenu.quitEnterpriseBrowser":"Quit RU","dock.removeFavorite":"Remove RU"}'), te = ee().t, nt = async (e) => await (await St(e)).dispatch(At.GetPages), ot = async (e) => (await St(e.identity)).dispatch(At.UpdatePageForWindow, e);
    let sn, qe = !1;
    const zt = () => qe, qt = () => sn || { enabled: !1 };
    async function Ta(e, n) {
      const r = !!n;
      let s = /* @__PURE__ */ new Set();
      if (r) {
        const { identity: u, pageId: w } = n, k = f().Browser.wrapSync(u), b = await k.getPage(w);
        b != null && b.panels && (s = new Set(b.panels.map(({ viewOptions: B }) => B.name)));
      }
      return e.map((u) => {
        const w = u.viewOptions.name;
        (w == null ? void 0 : w.startsWith(A)) && (!r || r && !s.has(w)) && delete u.viewOptions.name;
        const b = (B = u.viewOptions, B.name || (B.name = `${A}${tn()}`), B);
        var B;
        return { ...u, viewOptions: { ...b, uuid: le.uuid } };
      });
    }
    async function Qt(e) {
      for (const n of e) n.panels && await rr(n.panels);
    }
    const Yn = (e) => e !== null && typeof e == "object" && "message" in e && typeof e.message == "string" && /ERR_([A-Z]+_*)+/.test(e.message);
    async function rr(e) {
      const n = e.map((r) => fin.Platform.getCurrentSync().createView(r.viewOptions, fin.me.identity).catch((s) => {
        if (!Yn(s)) throw s;
        console.error(s);
      }));
      return await Promise.all(n);
    }
    const pi = (e, n) => !n.find((r) => r === e), fi = (e, n) => `${e} (${n})`, Co = (e, n) => {
      if (pi(e, n)) return e;
      let r = 1;
      const s = e.replace(/ *\(\d+\)$/, "");
      for (; !pi(fi(s, r), n); ) r += 1;
      return fi(s, r);
    }, Wr = async () => {
      const e = await st();
      return (await Promise.all(e.map(async (n) => {
        var r;
        try {
          return nt(n.identity);
        } catch {
          return JSON.stringify(n.identity), ((r = (await n.getOptions()).workspacePlatform) == null ? void 0 : r.pages) || [];
        }
      }))).reduce((n, r) => n.concat(r), []);
    }, rc = async () => (await Ue(le)).dispatch(pe.GetSavedPages, void 0), hi = async (e) => (await Ue(le)).dispatch(pe.GetSavedPage, e), gi = async (e, n) => {
      const r = await (async (s) => (await Wr()).find((u) => u.pageId === s))(e);
      return !r || r.title === n.title && e === n.pageId || await ot({ identity: r.parentIdentity, pageId: e, page: { pageId: n.pageId, title: n.title } }), r;
    }, mi = async ({ page: e }) => {
      await gi(e.pageId, e), await (async (n) => (await Ue(le)).dispatch(pe.CreateSavedPage, n))({ page: e });
    }, oc = async (e) => {
      await hi(e) && await (async (n) => (await Ue(le)).dispatch(pe.DeleteSavedPage, n))(e);
    }, wi = async ({ pageId: e, page: n }) => (await gi(e, n), await (async (r) => (await Ue(le)).dispatch(pe.UpdateSavedPage, r))({ pageId: e, page: n })), yi = async (e) => await hi(e.pageId) ? wi({ pageId: e.pageId, page: e }) : mi({ page: e }), ic = async (e) => {
      await (async (n) => (await St(n.identity)).dispatch(At.AttachPagesToWindow, n))(e);
    }, sc = async (e) => {
      const n = { ...e.page, panels: e.page.panels && await Ta(e.page.panels, e) };
      n.panels && await rr(n.panels), await ot({ ...e, page: n });
    }, cc = async (e) => {
      await (async (n) => (await St(n.identity)).dispatch(At.DetachPagesFromWindow, n))(e);
    }, uc = async (e) => {
      await (async (n) => (await St(n.identity)).dispatch(At.SetActivePageForWindow, n))(e);
    }, bi = (e) => nt(e), lc = async ({ identity: e, pageId: n }) => (await bi(e)).find((r) => r.pageId === n), dc = async (e) => {
      await (async (n) => (await St(n.identity)).dispatch(At.ReorderPagesForWindow, n))(e);
    }, vi = new class {
      constructor() {
        this.queue = [], this.locked = !1;
      }
      lock() {
        return new Promise((e) => {
          this.locked ? this.queue.push(e) : (this.locked = !0, e());
        });
      }
      unlock() {
        if (this.queue.length > 0) {
          const e = this.queue.shift();
          e && e();
        } else this.locked = !1;
      }
    }();
    async function ki(e) {
      await vi.lock();
      try {
        const n = zt() ? te("enterpriseDefaultPageTitle") : te("defaultPageTitle"), r = e ?? n, [s, u] = await Promise.all([rc(), Wr()]), w = [...s, ...u].map(({ title: k }) => k);
        return Co(r, w);
      } finally {
        vi.unlock();
      }
    }
    async function pc({ page: e }) {
      return { shouldShowModal: !(!e || !e.hasUnsavedChanges) };
    }
    async function fc({ page: e, identity: n }) {
      if ((await fin.Application.getCurrentSync().getInfo()).initialOptions.enableBeforeUnload) {
        const s = await fin.Application.getCurrentSync().getViews(), u = R(e.layout.content).filter((k) => k.name && s.some((b) => b.identity.name === k.name)).map((k) => fin.View.wrapSync({ name: k.name, uuid: n.uuid })), w = await this.checkViewsForPreventUnload(u);
        if (w.viewsPreventingUnload.length > 0 && (await this.getUserDecisionForBeforeUnload({ ...w, windowId: n, windowShouldClose: !1, closeType: "page" })).viewsToClose.length !== u.length)
          return e.pageId, { shouldPageClose: !1 };
      }
      return { shouldPageClose: !0 };
    }
    async function hc({ pages: e, identity: n }) {
      const r = await Promise.all(e.map((w) => this.shouldPageClose({ page: w, closeType: "window", identity: n }))), { pagesPreventingClose: s, pagesNotPreventingClose: u } = e.reduce((w, k, b) => r[b].shouldPageClose ? { pagesPreventingClose: w.pagesPreventingClose, pagesNotPreventingClose: [...w.pagesNotPreventingClose, k] } : { pagesNotPreventingClose: w.pagesNotPreventingClose, pagesPreventingClose: [...w.pagesPreventingClose, k] }, { pagesPreventingClose: [], pagesNotPreventingClose: [] });
      return this.handlePagesAndWindowClose({ pagesNotPreventingClose: u, pagesPreventingClose: s, identity: n });
    }
    async function gc({ pagesPreventingClose: e, pagesNotPreventingClose: n, identity: r }) {
      return { shouldWindowClose: e.length === 0 };
    }
    async function mc({ page: e }) {
      return Zr(e);
    }
    async function wc(e) {
      return { hasUnsavedChanges: !0 };
    }
    const yc = async () => {
      const e = f(), n = (await st()).map((r) => e.Browser.wrapSync(r.identity));
      await Promise.all(n.map(async (r) => {
        const s = await r.getPages();
        await Promise.all(s.map(async (u) => {
          u.title, await r.updatePage({ pageId: u.pageId, page: { hasUnsavedChanges: !1 } }), u.pageId, u.title, await yi({ ...u, hasUnsavedChanges: !1 });
        }));
      }));
    }, Mo = /* @__PURE__ */ new Map(), bc = () => Mo, Si = (e) => Mo.delete(e);
    let Io = !1;
    const vc = () => {
      Io || (Io = !0, fin.Window.wrapSync(Te).once("closed", () => {
        Io = !1, (async (e, n) => {
          await ua(Jr(e), { source: "Store", ...n });
        })(fin.me.identity, { type: "Navigation", action: "Close Store", skipValueHashing: !0 });
      }));
    };
    let Ra, Pi, Ao;
    const xi = async () => (Ao === void 0 && (Ao = !!(await Be()).disableOpenFinAnalytics), Ao);
    async function kc(e) {
      e.forEach((r) => {
        var s, u;
        r.type === "Page" ? r.action === "Open Page" ? (s = r.data.uuid, u = r, Mo.set(s, u)) : r.action === "Close Page" && Si(r.data.uuid) : r.source === "Store" && r.action !== "Close" && vc();
      }), await (async (r) => {
        Ra != null && Ra.sendToOpenFin && (await xi() || r.forEach(async (s) => {
          const u = Nn({}, s);
          u.entityId && (u.entityId.uuid = await la(u.entityId.uuid), u.entityId.name = await la(u.entityId.name)), !s.skipValueHashing && "value" in u && (u.value = await la(u.value)), Pi(u);
        }));
      })(e);
      const n = e.map(({ skipValueHashing: r, ...s }) => s);
      this.handleAnalytics(n);
    }
    const Sc = async (e) => {
      Ra = e, Ra != null && Ra.sendToOpenFin && !await xi() && (() => {
        const r = We, s = r + C.Analytics, u = document.createElement("IFRAME");
        u.setAttribute("src", s), u.setAttribute("style", "width: 0px !important"), u.setAttribute("style", "height: 0px !important"), u.setAttribute("style", "display: none !important"), document.body.appendChild(u), Pi = async (w) => {
          u.contentWindow.postMessage(w, r);
        };
      })();
      const n = fin.Application.getCurrentSync();
      n.addListener("view-created", async (r) => {
        var s;
        ln({ type: "View", action: "Open View", value: r.viewIdentity.name, data: { uuid: r.viewIdentity.uuid, url: await (s = r.viewIdentity, fin.View.wrapSync(s).getInfo().then((u) => u.url)) } });
      }), n.addListener("view-destroyed", async (r) => {
        ln({ type: "View", action: "Close View", value: r.viewIdentity.name, data: { uuid: r.viewIdentity.uuid } });
      }), n.addListener("window-closed", (r) => {
        r.name.startsWith(Ve.BrowserMenu) || (ln({ type: "Window", action: "Close Window", value: r.name, data: { uuid: r.uuid } }), (async () => {
          const s = bc(), u = await Wr();
          if (u.length === s.size) return;
          const w = u.reduce((k, b) => k.set(b.pageId, 1), /* @__PURE__ */ new Map());
          for (const [k, b] of s) w.has(k) || (b.action = "Close Page", ln(b), Si(k));
        })());
      });
    }, Pc = kt({ alwaysOnTop: !0, autoShow: !1, frame: !1, resizable: !1, showTaskbarIcon: !1 }), xc = /* @__PURE__ */ function(e = Pc) {
      const n = /* @__PURE__ */ new Map();
      return async (r, s, u, w, k) => {
        if (n.has(r)) {
          const { currentUrl: Q, currentName: J } = n.get(r);
          if (Q === s) return;
          await fin.Window.wrapSync({ uuid: fin.me.uuid, name: J }).close();
        }
        const b = `${Ve.BrowserIndicator}-${Date.now()}${Math.random()}`;
        n.set(r, { currentUrl: s, currentName: b });
        const B = `New ${w} indicator: ${u} ${k}`, V = await fin.Platform.getCurrentSync().createWindow({ ...e, name: b, url: s });
        ((Q, J) => {
          const re = document.createElement("div");
          re.setAttribute("role", "alert"), re.setAttribute("aria-live", "polite"), ((de) => {
            de.style.position = "absolute", de.style.width = "1px", de.style.height = "1px", de.style.padding = "0", de.style.margin = "-1px", de.style.overflow = "hidden", de.style.whiteSpace = "nowrap", de.style.border = "0";
          })(re), document.body.appendChild(re), setTimeout(() => {
            re.innerHTML = Q;
          }, 300), setTimeout(() => {
            document.body.removeChild(re);
          }, 1e3);
        })(B), V.once("closed", () => {
          n.delete(r);
        });
      };
    }();
    async function Eo(e) {
      const { parentBrowserName: n } = e;
      return n && n.includes(Ve.BrowserWindow) && fin.me.name !== n ? (await St({ uuid: fin.me.uuid, name: n })).dispatch(At.ShowBrowserIndicator, e) : async function(r) {
        const { type: s, message: u, parentBrowserName: w, secondaryMessage: k, icon: b, isEnterprise: B, positioning: V } = r, Q = new URLSearchParams();
        if (Q.append("type", s), Q.append("message", u), Q.append("parentName", w || ""), Q.append("secondaryMessage", k || ""), Q.append("icon", b || ""), Q.append("isEnterprise", `${B}` || ""), V === Wt.RelativeToMonitor && Q.append("positioning", Wt.RelativeToMonitor), w) {
          const de = ie(w ? { uuid: ht, name: w } : void 0), xe = `${(J = await de.getBounds()).top},${J.left},${J.height},${J.width},${J.bottom},${J.right},${J.content.top},${J.content.left},${J.content.height},${J.content.width}`;
          Q.append("parentBounds", xe);
        }
        var J;
        const re = `${(B ? await Jt() : await dn()) + C.BrowserIndicator}#${Q.toString()}`;
        return xc("browser" + w, re, u, s, k);
      }(e);
    }
    async function no(e) {
      const n = e.isEnterprise ?? await Tt(e.parentBrowserName ? { uuid: ht, name: e.parentBrowserName } : void 0);
      return Eo({ type: "success", message: e.message, parentBrowserName: e.parentBrowserName, secondaryMessage: e.secondaryMessage, icon: e.icon, isEnterprise: n, positioning: e.positioning });
    }
    const Da = async (e = le) => {
      const { workspacePlatform: n } = await ie(e).getOptions(), r = n == null ? void 0 : n.newPageUrl, s = n == null ? void 0 : n.newTabUrl;
      return { newPageUrl: r, newTabUrl: s };
    }, ao = async (e = le) => {
      const n = await Tt(e) || zt(), r = n ? null : await f().Browser.getUniquePageTitle();
      let s;
      if (e && await $e(e)) s = await (async (w, k = le) => {
        const { newPageUrl: b } = await Da(k);
        if (!b) throw new Error("Trying to create a new page without a newPageUrl set");
        return O(w, b, k);
      })(r, e);
      else if (n) {
        const w = await pn();
        s = await O(r, w);
      }
      n && (s.settings = s.settings ?? {}, s.dimensions = s.dimensions ?? {}, s.settings.hasHeaders = !1, s.settings.reorderEnabled = !0, s.dimensions.headerHeight = 0);
      const u = await fa(r, s);
      return n && (u.hasUnsavedChanges = !1), u;
    }, Cc = async (e, n, r) => {
      const { windowOptions: s, content: u } = await (async (b, B) => {
        const V = await Tt(B);
        return { title: "Switch Workspace", windowOptions: { url: await Ut(V, !1) + C.ResponseModal, name: Ve.BrowserMenu, defaultHeight: 134, defaultWidth: 410, modalParentIdentity: B }, content: { title: te("switchWorkspaceModal", { workspace: b }), body: te("switchWorkspaceModal.warning"), buttons: { right: [{ label: te("global.cancel"), type: "secondary", id: "Cancel" }, { label: te("global.confirm"), type: "primary", id: "Confirm" }] } } };
      })(n, r ? void 0 : e), w = await Pn(s, e, r), k = { ...s, top: w.top, left: w.left };
      return (await ma({ options: k, content: u })).data.actionName === "Confirm";
    }, Mc = async ({ workspaceTitle: e, windowIdentity: n }) => {
      const { windowOptions: r, content: s } = await (async ({ workspaceTitle: k, windowIdentity: b }) => {
        const B = await Tt(b);
        return { title: "Delete Workspace", windowOptions: { url: await Ut(B, !1) + C.ResponseModal, name: Ve.BrowserMenu, defaultHeight: 144, defaultWidth: 410, modalParentIdentity: b }, content: { title: te("deleteWorkspaceModal"), body: `${k}`, buttons: { right: [{ label: te("global.cancel"), type: "secondary", id: "Cancel" }, { label: te("global.confirm"), type: "primary", id: "Confirm" }] } } };
      })({ workspaceTitle: e, windowIdentity: n }), u = await Pn(r, r.modalParentIdentity), w = { ...r, top: u.top, left: u.left };
      return (await ma({ options: w, content: s })).data.actionName === "Confirm";
    }, Ci = async (e, n, r) => {
      const { windowOptions: s, content: u } = await (async (b, B, V) => {
        const Q = await Tt(b);
        return { title: "Platform Quit", windowOptions: { url: await Ut(Q, !1) + C.ResponseModal, name: Ve.BrowserMenu, defaultHeight: 134, defaultWidth: 410, modalParentIdentity: V ? void 0 : b }, content: { title: te(B === "Platform" ? "closePlatform" : "closePlatform.workspace", { workspace: B }), body: te("closePlatform.warning"), buttons: { right: [{ label: te("global.cancel"), type: "secondary", id: "Cancel" }, { label: te("global.confirm"), type: "primary", id: "Confirm" }] } } };
      })(e, n, r), w = await Pn(s, e, r), k = { ...s, top: w.top, left: w.left };
      return (await ma({ options: k, content: u })).data.actionName === "Confirm";
    }, Ic = async (e) => {
      const { windowOptions: n, content: r } = await (async (w) => {
        const k = await Tt(w);
        return { title: "Restore Changes", windowOptions: { url: await Ut(k, !1) + C.ResponseModal, name: Ve.BrowserMenu, defaultHeight: 134, defaultWidth: 410, modalParentIdentity: w }, content: { title: te("restoreModal"), body: te("modal.discardWarning"), buttons: { right: [{ label: te("global.cancel"), type: "secondary", id: "Cancel" }, { label: te("global.confirm"), type: "primary", id: "Confirm" }] } } };
      })(e), s = await Pn(n, n.modalParentIdentity), u = { ...n, top: s.top, left: s.left };
      return (await ma({ options: u, content: r })).data.actionName === "Confirm";
    }, Ac = async (e, n) => {
      const { windowOptions: r, content: s } = await (async (k, b) => {
        const B = await Tt(k);
        return { title: "Delete Page", windowOptions: { url: new URL(await Ut(B, !1) + C.ResponseModal).toString(), name: Ve.BrowserMenu, defaultHeight: 172, defaultWidth: 464, modalParentIdentity: k }, content: { title: te("enterpriseDeleteModal.deleteSupertab", { title: b }), body: te("enterpriseDeleteModal.deleteSupertabWarning"), buttons: { right: [{ label: te("global.cancel"), type: "secondary", id: "Cancel", variant: B ? "outline" : void 0 }, { label: te("global.delete"), type: "primary", id: "Delete", variant: B ? "submit" : void 0 }] } } };
      })(e, n), u = await Pn(r, r.modalParentIdentity), w = { ...r, top: u.top, left: u.left };
      return (await ma({ options: w, content: s })).data.actionName === "Delete";
    }, Ec = async ({ identity: e, title: n, description: r }) => {
      var B;
      const { windowOptions: s, content: u } = await (async (V, Q, J) => ({ title: "Update Version", windowOptions: { url: await Jt() + C.ResponseModal, name: Ve.UpdateVersionModal, defaultHeight: 172, defaultWidth: 464, modalParentIdentity: V, preventBlur: !0, closeOnResponse: !0, includeInSnapshots: !1 }, content: { title: Q, body: J, buttons: { right: [{ label: "Snooze", type: "secondary", id: "snooze" }, { label: "Restart", type: "primary", id: "restart" }] } } }))(e, n, r), w = fin.Window.wrapSync({ uuid: e.uuid, name: `${s.name}--${(B = s.modalParentIdentity) == null ? void 0 : B.name}` });
      try {
        if (await (w == null ? void 0 : w.isShowing())) return;
      } catch {
      }
      const k = await Pn(s, s.modalParentIdentity), b = { ...s, top: k.top, left: k.left };
      return (await ma({ options: b, content: u })).data;
    };
    async function Mi({ options: e, ...n }) {
      var w;
      if (!(e != null && e.skipPrompt || await Cc(e == null ? void 0 : e.promptContainerWindowIdentity, n.title, e == null ? void 0 : e.shouldCenterModalOnMonitor))) return !1;
      const s = !!(await fin.Application.getCurrentSync().getChildWindows()).find(({ identity: k }) => k.name === Ve.DockCompanion || k.name === Ht) || zt() ? { closeExistingWindows: !1, closeSnapshotWindows: !0 } : { closeExistingWindows: ((w = e == null ? void 0 : e.applySnapshotOptions) == null ? void 0 : w.closeExistingWindows) ?? !0 };
      return await f().applySnapshot(n.snapshot, { ...(e == null ? void 0 : e.applySnapshotOptions) ?? {}, ...s }), _o(n), Eo({ type: "success", message: te("successIndicator.workspaceSwitched"), positioning: Wt.RelativeToMonitor }).catch(console.warn), !0;
    }
    async function _c(e) {
      try {
        return await Mi(e);
      } catch (n) {
        return console.error("failed to apply the current workspace: ", n), !1;
      }
    }
    async function Ii(e) {
      try {
        const n = await async function() {
          const r = f(), s = await r.getCurrentWorkspace({ skipSnapshotUpdate: !0 });
          return (await r.Storage.getWorkspaces()).find((u) => u.workspaceId === s.workspaceId);
        }();
        return n ? e != null && e.skipPrompt || await Ic(e == null ? void 0 : e.promptContainerWindowIdentity) ? (await Mi({ options: { skipPrompt: !0, applySnapshotOptions: e == null ? void 0 : e.applySnapshotOptions }, ...n }), "success") : "user-declined" : "not-saved-workspace";
      } catch (n) {
        throw console.error("failed to restore last saved workspace: ", n), n;
      }
    }
    function _o(e) {
      if (typeof localStorage < "u") try {
        const n = JSON.stringify(e);
        Sa(en.CurrentWorkspaceId, n);
      } catch (n) {
        console.error("failed to set the active workspace: ", n);
      }
    }
    async function To() {
      const e = f(), n = await e.getSnapshot();
      return { workspaceId: tn(), title: await Oc(), metadata: { APIVersion: je }, snapshot: n };
    }
    async function Tc(e) {
      if (typeof localStorage > "u") return To();
      const n = Va(en.CurrentWorkspaceId);
      if (!n) return To();
      const r = JSON.parse(n);
      if (e != null && e.skipSnapshotUpdate) return r;
      const s = f(), u = await s.getSnapshot();
      return { ...r, metadata: { APIVersion: je }, snapshot: u };
    }
    const Rc = async () => (await Ue(le)).dispatch(pe.GetSavedWorkspaces, void 0), Dc = async (e) => await (async (n) => (await Ue(le)).dispatch(pe.GetSavedWorkspace, n))(e.workspaceId) ? (async (n) => (await Ue(le)).dispatch(pe.UpdateSavedWorkspace, n))({ workspaceId: e.workspaceId, workspace: e }) : (async (n) => (await Ue(le)).dispatch(pe.CreateSavedWorkspace, n))({ workspace: e });
    async function Oc(e = "Untitled Workspace") {
      const n = (await Rc()).map(({ title: r }) => r);
      return Co(e, n);
    }
    const Wc = (e) => ({ ...e, snapshot: { ...e.snapshot, windows: e.snapshot.windows.map((n) => {
      var r, s;
      return { ...n, workspacePlatform: { ...n.workspacePlatform, pages: (s = (r = n.workspacePlatform) == null ? void 0 : r.pages) == null ? void 0 : s.map((u) => ({ ...u, hasUnsavedChanges: !1 })) } };
    }) } }), Bc = async (e, n) => {
      await (n ?? f()).Storage.saveWorkspace(Wc(e)), await (async () => (await Ue(le)).dispatch(pe.MarkUnsavedPagesAsSavedInternal, void 0))();
    }, Ai = async (e) => {
      const n = f();
      await (async ({ showModal: r, afterSuccessSave: s }) => {
        const u = f(), w = await u.getCurrentWorkspace(), k = await u.Storage.getWorkspacesMetadata(), b = w.workspaceId;
        k.some((B) => B.workspaceId === b) ? (await Bc(w, u), await u.setActiveWorkspace(w), await s()) : await r();
      })({ showModal: async () => {
        await n.Browser.wrapSync(e)._openSaveModal({ menuType: Fe.SAVE_WORKSPACE_AS });
      }, afterSuccessSave: async () => {
        await no({ message: te("successIndicator.workspaceSaved"), parentBrowserName: e.name });
      } });
    }, Ro = (e) => {
      f().Browser.wrapSync(e)._openSaveModal({ menuType: Fe.SAVE_WORKSPACE_AS });
    }, Ei = async (e) => {
      const n = f().Browser.wrapSync(e), { newPageUrl: r } = await Da(), s = await ao(e), u = r || void 0;
      await n._addDefaultPage({ identity: e, page: s, newPageUrl: u });
    }, Do = async (e, n) => {
      const r = f().Browser.wrapSync(e), s = await f().Storage.getPages(), u = (await r.getPages()).find((V) => n ? V.pageId === n : V.isActive), w = s.some((V) => u.pageId === V.pageId), k = await Tt(e);
      if (w) try {
        await f().Storage.savePage((B = u, { ...B, hasUnsavedChanges: void 0, parentIdentity: void 0, isActive: void 0, layout: T(B.layout) })), await r.updatePage({ pageId: u.pageId, page: { hasUnsavedChanges: !1 } }), no({ message: te(k ? "enterpriseSuccessIndicator.supertabSaved" : "successIndicator.pageSaved"), parentBrowserName: e.name, secondaryMessage: te(k ? "enterpriseSuccessIndicator.supertabHasBeenSaved" : "successIndicator.pageHasBeenSaved", { title: u.title }), isEnterprise: k });
      } catch {
        Eo({ type: "error", message: (b = { message: te("errorIndicator.pageSaveFailed"), parentBrowserName: u.parentIdentity.name }).message, parentBrowserName: b.parentBrowserName, icon: b.icon, isEnterprise: b.isEnterprise || !1, positioning: b.positioning });
      }
      else r._openSaveModal({ id: u.pageId, menuType: Fe.SAVE_PAGE });
      var b, B;
    }, Oo = async (e, n) => {
      const r = f().Browser.wrapSync(e), s = (await r.getPages()).find((u) => n ? u.pageId === n : u.isActive);
      r._openSaveModal({ id: s.pageId, menuType: Fe.SAVE_PAGE_AS }), ln({ type: "Page Modal", action: "Select Save As", value: s.title, skipValueHashing: !0 });
    }, Nc = async (e, n) => {
      await (async ({ workspaceItemData: r, winIdentity: s, positioning: u }) => {
        const w = f(), k = (await w.Storage.getWorkspacesMetadata()).find((b) => b.workspaceId === r.workspaceId);
        k && await Mc({ workspaceTitle: k.title, windowIdentity: s }) && (await w.Storage.deleteWorkspace(r.workspaceId), await no({ message: te("successIndicator.workspaceDeleted"), parentBrowserName: s == null ? void 0 : s.name, positioning: u }));
      })({ workspaceItemData: n, winIdentity: e });
    }, Lc = { title: "Downloads", pageId: "downloads-page-id", layout: { content: [{ type: "stack", content: [{ type: "component", componentName: "view", componentState: { name: "show-download-view", url: "chrome://downloads/" } }] }] } }, _i = async (e) => {
      const n = ie(e), r = await n.getCurrentViews(), s = (await f().Browser.wrapSync(n.identity).getPages()).find((u) => u.isActive);
      try {
        const u = (await Promise.all(r.map(async (w) => ({ identity: w.identity, info: await fin.View.wrapSync(w.identity).getInfo() })))).find((w) => w.info.url === "chrome://downloads/");
        if (u) await fin.View.wrapSync(u.identity).focus();
        else {
          const w = f();
          if (s != null && s.isLocked) {
            const k = (await fin.Application.getCurrentSync().getChildWindows()).find((b) => b.identity.name === "show-download-window");
            return void (k ? await k.focus() : w.Browser.createWindow({ name: "show-download-window", workspacePlatform: { pages: [Lc] } }));
          }
          (await f().createView({ name: "show-download-view", url: "chrome://downloads/", target: e }, e)).focus();
        }
      } catch (u) {
        console.error("Couldn't open downloads view", u);
      }
    }, Wo = async (e) => {
      const n = e.map((r) => fin.View.wrapSync(r).print());
      await Promise.all(n);
    }, Ti = (e) => {
      const [n, r, s] = e.split(".").map((u) => u === "x" ? 0 : 1);
      return 100 * n + 10 * r + 1 * s;
    };
    class Ri extends Error {
    }
    const Fc = async (e) => {
      try {
        const r = await async function() {
          const s = await Be(), u = (s == null ? void 0 : s.translationOverridesUrl) ?? "https://workspace.openfin.co/workspace/assets/translation-override.json";
          if (u === "") throw new Ri("Empty string provided as url to translationOverridesUrl, overrides will not be fetched.");
          return await fetch(u).then((w) => w.json());
        }();
        (n = ((s) => {
          const u = je.split(".");
          return Object.keys(s).filter((w) => {
            const k = w.split(".");
            if (k.length !== 3) return console.warn(`Encountered a translation override version string in an unsupported format: ${w}. Versions must be in A.B.C format where A, B, C are either integers or the wildcard symbol 'x'.`), !1;
            const [b, B, V] = k;
            return !(b !== u[0] && b !== "x" || B !== u[1] && B !== "x" || V !== u[2] && V !== "x");
          });
        })(r), [...n].sort((s, u) => Ti(s) - Ti(u))).forEach((s) => {
          const u = r[s];
          Object.keys(u).forEach((w) => {
            e.addResourceBundle(w, "translation", u[w], !0, !0);
          });
        });
      } catch (r) {
        r instanceof Ri ? console.warn(r.message) : console.error("Error applying a translation override: ", r);
      }
      var n;
    };
    function Di() {
      return ee().language;
    }
    const Vc = async (e) => {
      Oi(e), ((n) => {
        ee().changeLanguage(n);
      })(e), await (async (n) => {
        const r = await st();
        return Promise.all(r.map(async (s) => {
          await (await St(s.identity)).dispatch(At.SetSelectedLanguage, n);
        }));
      })(e);
    };
    function Uc() {
      if (!ee().options.resources) throw new Error("No language resources found");
      return { currentLanguage: Di(), resources: ee().options.resources };
    }
    async function jc(e = "en-US") {
      Oi(e), function(n = "en-US") {
        ee().use($.initReactI18next).init({ lng: n, fallbackLng: "en-US", resources: { "en-US": { translation: fe }, "ja-JP": { translation: ke }, "zh-CN": { translation: he }, "ko-KR": { translation: ye }, "ru-RU": { translation: Ee }, "de-DE": { translation: me }, "zh-Hant": { translation: be } }, interpolation: { escapeValue: !1 } });
      }(e), await Fc(ee());
    }
    function Oi(e) {
      if (!Dt.includes(e)) throw new Error(`The ISO language provided ${e} is not supported`);
    }
    const or = /* @__PURE__ */ new Map();
    let Bo = Date.now();
    function Wi() {
      const e = Date.now();
      return Bo = Math.max(e, Bo + 1), Bo;
    }
    async function Kc() {
      const e = Array.from(or.values()).sort((n, r) => r.lastFocusedTime - n.lastFocusedTime);
      if (e.length > 0) return e[0].identity;
      try {
        const n = Va(en.LastFocusedBrowserWindow);
        if (!n) return;
        const r = JSON.parse(n);
        if (await Gt(r)) return await Oa(r), r;
      } catch (n) {
        console.error("failed to get last focused browser window from localStorage:", n);
      }
    }
    async function Bi() {
      return (await fin.Application.getCurrentSync().getChildWindows()).filter((n) => n.identity.name.startsWith(Ve.BrowserWindow));
    }
    async function $c() {
      const e = f(), n = fin.Window.wrapSync({ uuid: fin.me.uuid, name: Ve.DockCompanion }), r = await jn(await n.getBounds()), s = await async function(w, k, b) {
        const B = await fin.System.getMonitorInfo(), V = (b == null ? void 0 : b.availableRect) ?? B.primaryMonitor.availableRect, Q = { width: V.right - V.left, height: V.bottom - V.top }, J = Math.min(w, Q.height), re = Math.min(k, Q.width), de = V.top + Math.floor((Q.height - J) / 2);
        return { height: J, width: re, left: V.left + Math.floor((Q.width - re) / 2), top: de };
      }(600, 900, r), u = await ao();
      return (await e.Browser.createWindow({ defaultHeight: 600, defaultWidth: 900, defaultLeft: s.left, defaultTop: s.top, workspacePlatform: { pages: [u] } })).identity;
    }
    async function Oa(e, n, r = !1) {
      if (!await $e(e)) return;
      const s = fin.Window.wrapSync(e), u = n ?? await s.isShowing(), w = or.get(e.name), k = { identity: e, lastFocusedTime: r ? Wi() : (w == null ? void 0 : w.lastFocusedTime) ?? Wi(), isVisible: u };
      or.set(e.name, k), r && function(b) {
        if (typeof localStorage < "u") try {
          const B = JSON.stringify(b);
          Sa(en.LastFocusedBrowserWindow, B);
        } catch (B) {
          console.error("failed to save last focused browser window: ", B);
        }
      }(e);
    }
    async function Hc(e = fin.me.identity) {
      or.delete(e.name);
    }
    const Gc = Yr()(async () => {
      const e = await fin.Platform.getCurrentSync().Application.getChildWindows();
      let n, r = !1;
      for (const s of e) if (s.identity.name === Ve.BrowserMenu || s.identity.name === Ve.BrowserSaveMenu ? n = s : await $e(s.identity) && (r = !0), r) break;
      !r && n && n.close();
    }, 100, { leading: !1, trailing: !0 });
    let No = {};
    const zc = async ({ actionId: e, payload: n }) => {
      if (typeof No[e] != "function") throw new Error(`Cannot find a configured function for the action '${e}'`);
      return No[e](n);
    };
    let Lo;
    const qc = () => `custom-context-menu-${f().identity.uuid}-${je}`, Jc = () => `custom-bookmark-context-menu-${f().identity.uuid}-${je}`, Ni = async () => (Lo || (Lo = await fin.InterApplicationBus.Channel.connect(qc())), Lo);
    var Li, ir;
    (function(e) {
      e.Save = "Save", e.SaveAs = "SaveAs";
    })(Li || (Li = {})), function(e) {
      e.GlobalMenu = "global-menu", e.ContextMenu = "context-menu", e.RenameSupertab = "rename-supertab", e.AddEditBookmark = "add-edit-bookmark", e.DropdownMenu = "dropdown-menu", e.ZoomControls = "zoom-controls";
    }(ir || (ir = {}));
    const ro = "visited-sites", Fo = "removed-tab-stack", Zn = _t && Le && zn("openfin-home-pages", "pages"), sr = _t && Le && new Dn.Dexie(Pa("openfin-enterprise-site-history"));
    sr && sr.version(0.1).stores({ [ro]: "id, url" });
    const cr = _t && Le && new Dn.Dexie(Pa("openfin-enterprise-tab-history"));
    async function Vo(e) {
      if (!Zn) throw new Error("Unable to get page - IndexDB not supported");
      const n = await Zn.pages.get(e);
      if (n) return n.pageId = e.toString(), n.title = n.title || n.pageId, n;
    }
    async function Yc(e) {
      if (!Zn) throw new Error("Unable to get page list - IndexDB not supported");
      const n = await Zn.pages.toCollection().keys(), r = (await Promise.all(n.map((s) => Vo(s.toString())))).filter((s) => !!s);
      return e ? r.filter((s) => jt(s.title, e)) : r;
    }
    async function Fi({ page: e }) {
      if (!Zn) throw new Error("Unable to create page - IndexDB not supported");
      await Zn.pages.put(e, e.pageId);
    }
    async function Vi(e) {
      if (!Zn) throw new Error("Unable to delete page - IndexDB not supported");
      await Zn.pages.delete(e);
    }
    async function Zc({ pageId: e, page: n }) {
      if (!Zn) throw new Error("Unable to update page - IndexDB not supported");
      if (await Vo(e) === void 0) throw new Error("page not found");
      await Fi({ page: n }), e !== n.pageId && await Vi(e);
    }
    cr && cr.version(0.1).stores({ [Fo]: "" });
    const Qc = async (e) => {
      if (!cr) throw new Error("Unable to add removed tab - IndexDB not supported");
      const n = Date.now().toString(), r = { ...e, id: n };
      await cr[Fo].put(r, n);
    };
    function Xc(e) {
      return e.type === "app" || e.type === "website";
    }
    const eu = async (e) => {
      if (e.type === "website") {
        const n = e, r = n.url || "";
        let s = await sr[ro].get(r);
        s && Xc(s) ? (s.icon = n.icon, s.title = n.title, s.type = n.type, s.visitCount = (s.visitCount || 0) + 1, s.url = n.url) : s = { ...n, id: r, visitCount: 1, accessTime: void 0 }, s.accessTime = Date.now(), await sr[ro].put(s, r);
      }
    }, tu = async () => {
      if (!sr) throw new Error("Unable to get frequently visited sites - IndexDB not supported");
      const e = sr[ro], n = await e.toCollection().toArray();
      return n.sort((r, s) => (s.visitCount || 0) - (r.visitCount || 0)), (n.length > 5 ? n.slice(0, 5) : n).map(({ id: r, ...s }) => s);
    }, Br = async () => (await fin.System.getHostSpecs()).name.toLowerCase().includes("windows"), Ui = async ({ browserIdentity: e, url: n, shiftKey: r, activePage: s, pages: u }) => {
      const w = f().Browser.wrapSync(e), k = await O(n, n, e), b = { ...await fa(n, k), attachedPageType: "singleView", singleViewName: n }, B = u.findIndex((V) => V.pageId === s.pageId);
      await w._addPage(b, { index: B + 1 }), r && await w.setActivePage(b.pageId);
    }, nu = async (e) => {
      const { url: n } = e.bookmark, { sourceIdentity: r, sourceEvent: s } = e, u = await Br(), w = f();
      let k = !1, b = r;
      if (!await $e(r)) {
        const xe = await async function() {
          const De = Array.from(or.values());
          for (let lt = De.length - 1; lt >= 0; lt--) if (De[lt].isVisible) return De[lt].identity;
        }();
        if (!xe) return await (async (De) => {
          const lt = f(), He = await O(De.url, De.url), ct = await fa(De.url, He);
          tt((await lt.Browser.createWindow({ workspacePlatform: { pages: [ct] } })).identity);
        })(e.bookmark);
        k = !0, b = xe;
      }
      const B = w.Browser.wrapSync(b), V = await B.getPages(), Q = (await B._getLayoutsWithSelectedViews()).find((xe) => xe.isActive);
      if (!Q) throw Error(`Browser ${b} does not have any active layouts`);
      const J = V.find((xe) => xe.isActive), re = K(J.layout.content) === 1, de = Q.selectedViews[0];
      k ? await Ui({ browserIdentity: b, url: n, shiftKey: !0, activePage: J, pages: V }) : re ? await (async ({ isWindows: xe, currentViewId: De, browserIdentity: lt, url: He, activePage: ct, pages: Ze, sourceEvent: Ct }) => {
        const { ctrlKey: bn, metaKey: ze, shiftKey: Et } = Ct;
        (xe ? bn : ze) ? await Ui({ browserIdentity: lt, url: He, shiftKey: Et, activePage: ct, pages: Ze }) : await fin.View.wrapSync(De).navigate(He);
      })({ isWindows: u, currentViewId: de, browserIdentity: b, url: n, activePage: J, pages: V, sourceEvent: s }) : await (async ({ isWindows: xe, currentViewId: De, browserIdentity: lt, url: He, activeLayout: ct, sourceEvent: Ze }) => {
        const { ctrlKey: Ct, metaKey: bn, shiftKey: ze } = Ze;
        if (xe ? Ct : bn) {
          const Et = fin.View.wrapSync(De), Bt = await Et.getCurrentStack(), vn = (await Bt.getViews()).findIndex((dr) => dr.name === De.name), lr = { url: He, browserIdentity: lt, title: He };
          await Bt.addView(lr, { index: vn + 1 });
        } else await fin.View.wrapSync(ct.selectedViews[0]).navigate(He);
      })({ isWindows: u, currentViewId: de, browserIdentity: b, url: n, activeLayout: Q, sourceEvent: s });
    };
    var Ne;
    (function(e) {
      e.Label = "normal", e.Separator = "separator", e.Submenu = "submenu", e.Checkbox = "checkbox";
    })(Ne || (Ne = {}));
    let Uo = { locked: !1, x: -1, y: -1 };
    const au = async (e, n, r, s) => {
      if (!Le) throw new Error("showEnterpriseContextMenu can only be used in a Here env. Avoid calling this method during pre-rendering.");
      if (!s && !fin.me.isWindow) throw new Error("showEnterpriseContextMenu can only be used in a Here window.");
      const { x: u, y: w, template: k } = e;
      if (((Q, J) => {
        const { x: re, y: de, locked: xe } = Uo;
        return xe && Q === re && J === de;
      })(u, w)) return new Promise((Q, J) => Q({ data: void 0 }));
      Uo = { locked: !0, x: u, y: w };
      const b = await Ni(), B = tn(), V = new Promise((Q, J) => {
        b.register(`response-${B}`, (re) => {
          Uo.locked = !1, b.remove(`response-${B}`), Q(re);
        });
      });
      return await b.dispatch("open", { parentIdentity: s.identity, responseIdentity: le, requestId: B, type: n, anchorBehavior: r, x: u, y: w, payload: { template: k } }), V;
    }, Xt = { type: Ne.Separator, data: void 0 }, ru = async () => ({ type: Ne.Submenu, label: te("contextMenu.print"), submenu: [{ type: Ne.Label, label: te("contextMenu.submenu.print"), data: { type: ce.Print } }, { type: Ne.Label, label: te("contextMenu.submenu.printAll"), data: { type: ce.PrintAll } }, Xt, { type: Ne.Label, label: te("contextMenu.printScreen"), data: { type: ce.PrintScreen } }] }), jo = () => ({ type: Ne.Label, label: te("contextMenu.closeWindow"), data: { type: Y.CloseWindow } }), Ko = (e) => ({ type: Ne.Label, label: te(e ? "contextMenu.quitEnterpriseBrowser" : "contextMenu.quitPlatform"), data: { type: Y.Quit } }), ji = () => ({ type: Ne.Label, label: te("contextMenu.newWindow"), data: { type: Y.NewWindow } }), Ki = (e) => ({ type: Ne.Label, label: te(e ? "enterpriseContextMenu.saveSupertab" : "contextMenu.savePage"), data: { type: Y.SavePage } }), $i = (e) => ({ type: Ne.Label, label: te(e ? "enterpriseContextMenu.saveSupertabAs" : "contextMenu.savePageAs"), data: { type: Y.SavePageAs } }), Hi = (e, n) => ({ type: Ne.Label, label: te(n ? "enterpriseContextMenu.newTab" : "contextMenu.newPage"), data: { type: Y.NewPage }, enabled: e }), Gi = () => ({ label: te("contextMenu.switchWorkspace") }), zi = () => ({ label: te("contextMenu.deleteWorkspace") }), qi = () => ({ label: te("contextMenu.appearance") }), Ji = (e, n, r) => n.map((s) => {
      const u = s.workspaceId === e.workspaceId;
      return { label: s.title, type: Ne.Checkbox, enabled: !u, checked: u, data: { type: r, workspaceId: s.workspaceId } };
    }), Yi = async () => {
      const e = await f().Theme.getSelectedScheme();
      return [{ label: te("theme.light"), type: Ne.Checkbox, checked: e === Ce.Light, data: { type: Y.Appearance, scheme: Ce.Light } }, { label: te("theme.dark"), type: Ne.Checkbox, checked: e === Ce.Dark, data: { type: Y.Appearance, scheme: Ce.Dark } }, { label: te("theme.system"), type: Ne.Checkbox, checked: e === Ce.System, data: { type: Y.Appearance, scheme: Ce.System } }];
    }, ou = async (e, n = []) => {
      const r = await an(), { newPageUrl: s } = await Da(e), u = await (async (He) => {
        const ct = ie(He), { workspacePlatform: Ze } = await ct.getOptions();
        return Ze == null ? void 0 : Ze.disableMultiplePages;
      })(e), w = await (async (He) => {
        const ct = ie(He), { workspacePlatform: Ze } = await ct.getOptions();
        return Ze == null ? void 0 : Ze.isLocked;
      })(e), k = await Tt(e), b = [], B = n.length > 0;
      s && (b.push(ji()), u || b.push(Hi(!w, k))), b.push(Xt);
      const V = f(), Q = await V.getCurrentWorkspace({ skipSnapshotUpdate: !0 }), J = await V.Storage.getWorkspacesMetadata(), re = J.find((He) => He.workspaceId === Q.workspaceId), de = V.Browser.wrapSync(e), xe = (await de.getPages()).find((He) => He.isActive), De = !!xe && await V.Storage.getPage(xe.pageId);
      b.push({ type: Ne.Label, label: te("contextMenu.restore"), data: { type: Y.RestoreChanges }, enabled: !!re }), b.push({ type: Ne.Label, label: te("contextMenu.saveWorkspace"), data: { type: Y.SaveWorkspace }, enabled: !!re }), b.push({ type: Ne.Label, label: te("contextMenu.saveWorkspaceAs"), data: { type: Y.SaveWorkspaceAs } }), b.push({ type: Ne.Label, label: te("contextMenu.renameWorkspace"), data: { type: Y.RenameWorkspace }, enabled: !!re }), J.some((He) => He.workspaceId !== Q.workspaceId) ? b.push({ label: Gi().label, submenu: Ji(Q, J, Y.SwitchWorkspace), data: void 0 }, { label: zi().label, submenu: Ji(Q, J, Y.DeleteWorkspace), data: void 0 }) : b.push({ label: Gi().label, enabled: !1, data: void 0 }, { label: zi().label, enabled: !1, data: void 0 }), b.push({ label: te("contextMenu.downloads"), data: { type: Y.Downloads } }), b.push({ label: qi().label, submenu: await Yi(), data: void 0 });
      const lt = { ...Ki(k), enabled: !!De };
      return b.push(Xt, lt, $i(k), await (async (He) => {
        const ct = await Br();
        return { label: te("contextMenu.print"), submenu: [{ type: Ne.Label, label: te("contextMenu.submenu.print"), data: { type: Y.Print }, enabled: He }, { type: Ne.Label, label: te("contextMenu.submenu.printAll"), data: { type: Y.PrintAll } }, ...ct ? [Xt, { type: Ne.Label, label: te("contextMenu.printScreen"), data: { type: Y.PrintScreen } }] : []], data: void 0 };
      })(B)), r ? [...b, jo(), Xt, { type: Ne.Label, label: te("contextMenu.openStorefront"), data: { type: Y.OpenStorefront } }, Xt, Ko()] : [...b, Xt, jo(), Xt, Ko()];
    }, iu = async (e, n) => {
      const r = n.selectedViews[0], s = fin.View.wrapSync(r), u = await (async (w) => {
        const { newTabUrl: k } = await Da(w);
        if (!k) throw new Error("Trying to create a new page without a newTabUrl set");
        return { url: k, target: w, title: "New Tab" };
      })(e);
      await f().createView(u, e, s.identity);
    }, su = async (e, n) => {
      const r = f().Browser.wrapSync(e), s = (await r.getPages()).find((k) => k.isActive), u = await fin.Window.wrapSync(e).getCurrentViews();
      if (n.length === u.length - (s.panels ?? []).length)
        return void (await St(e)).dispatch(At.ClosePage, { pageId: s == null ? void 0 : s.pageId });
      const w = fin.Platform.getCurrentSync();
      n.forEach(async (k) => {
        const b = await fin.View.wrapSync(k).getParentLayout();
        await w.closeView(k);
        const { hasUnsavedChanges: B } = await (async (V) => (await Pe(le)).dispatch(pe.HandlePageChanges, V))({ page: { ...s, layout: await b.getConfig() }, identity: e, eventDetails: { type: Me.ViewRemoved, viewIdentity: k } });
        B && await r.updatePage({ pageId: s.pageId, page: { hasUnsavedChanges: !0 } });
      });
    }, cu = async (e, n) => {
      const r = await ((w) => Promise.all(w.map(async (k) => fin.View.wrapSync(k).getInfo())))(n), { newPageUrl: s, newTabUrl: u } = await Da(e);
      r.forEach(async (w) => {
        w.url !== s && w.url !== u && await fin.System.openUrlWithBrowser(w.url);
      });
    }, uu = (e, n) => {
      n.forEach(async (r) => {
        const s = fin.View.wrapSync(r);
        await (async (u, w) => {
          const { url: k } = await w.getInfo(), b = { ...await w.getOptions(), url: k, target: u, name: void 0 };
          await f().createView(b, u, w.identity);
        })(e, s);
      });
    }, Zi = async (e, n, r) => {
      const s = { newChannelId: n, selectedViews: r };
      (await St(e)).dispatch(At.AddToChannel, s);
    }, Qi = async (e, n) => {
      (await St(e)).dispatch(At.RemoveFromChannel, n);
    }, lu = async (e, n) => {
      if (!e) return;
      const r = n.identity, s = fin.Window.wrapSync(r);
      switch (ln({ type: "View Tab Menu", action: "Select Menu Item", value: e.type, skipValueHashing: !0 }), e.type) {
        case ce.Back:
          await (async (u) => {
            const w = u.map((k) => fin.View.wrapSync(k).navigateBack());
            await Promise.all(w);
          })(n.selectedViews);
          break;
        case ce.Forward:
          await (async (u) => {
            const w = u.map((k) => fin.View.wrapSync(k).navigateForward());
            await Promise.all(w);
          })(n.selectedViews);
          break;
        case ce.Print:
          await Wo(n.selectedViews);
          break;
        case ce.PrintAll:
          await s.print({ content: "views", includeSelf: !1 });
          break;
        case ce.PrintScreen:
          await s.print({ content: "screenshot" });
          break;
        case ce.CloseViews:
          await su(r, n.selectedViews);
          break;
        case ce.OpenWithDefaultBrowser:
          await cu(r, n.selectedViews);
          break;
        case ce.ReloadViews:
          n.selectedViews.forEach(async (u) => {
            await fin.View.wrapSync(u).reload();
          });
          break;
        case ce.NewView:
          await iu(r, n);
          break;
        case ce.DuplicateViews:
          uu(r, n.selectedViews);
          break;
        case ce.AddToChannel:
          Zi(r, e.option, n.selectedViews);
          break;
        case ce.RemoveFromChannel:
          Qi(r, n.selectedViews);
          break;
        case ce.Custom:
          if (e.action) {
            const u = { callerType: ut.ViewTabContextMenu, windowIdentity: r, selectedViews: n.selectedViews, customData: e.action.customData };
            f()._invokeCustomAction(e.action.id, u);
          }
      }
    }, $o = /* @__PURE__ */ new Map([["blue", { name: "Blue", color: "#0091EB" }], ["indigo", { name: "Indigo", color: "#6450FF" }], ["pink", { name: "Pink", color: "#E878CF" }], ["teal", { name: "Teal", color: "#24D1D1" }], ["green", { name: "Green", color: "#00AF78" }], ["orange", { name: "Orange", color: "#FF7D37" }], ["red", { name: "Red", color: "#F94144" }], ["yellow", { name: "Yellow", color: "#F9C74F" }], ["gray", { name: "Gray", color: "#828788" }]]);
    function Xi() {
      return { type: Ne.Label, label: te("contextMenu.manageDesktopSignals"), data: { type: ne.ManageDesktopSignals } };
    }
    function es(e) {
      const n = Array.from($o.entries()), r = e.contextGroup;
      return { type: "widget", config: { type: "add-to-channel", channels: [...n.map(([s, u]) => ({ label: u.name, data: { type: ne.AddToChannel, option: s }, color: u.color, checked: r === s })), { label: "unlink", data: { type: ne.AddToChannel, option: "unlink" }, isNone: !0 }] }, label: "Link to Channel" };
    }
    let ts = "Platform";
    const Ho = async () => ts, du = async (e, n) => {
      var k;
      if (!e) return;
      const r = n.identity, s = await St(r), u = f().Browser.wrapSync(r), w = fin.Window.wrapSync(r);
      if (ln({ type: "Global Menu", action: "Select Menu Item", value: e.type, skipValueHashing: !0, data: { action: (k = e.action) == null ? void 0 : k.id } }), !(await Tt(r) && await (async (B, V) => {
        const Q = V.identity, J = f().Browser.wrapSync(Q), re = (await J.getPages()).find((De) => De.isActive), de = qn({ ...Q, layoutName: re.layoutContainerKey }), xe = V.selectedViews;
        switch (B == null ? void 0 : B.type) {
          case Ie.Lock:
            await J.updatePage({ pageId: re.pageId, page: { isLocked: !re.isLocked } });
            break;
          case Ie.AddToChanel:
            B.option ? await Zi(Q, B.option, xe) : B.option === null && await Qi(Q, xe);
            break;
          case Ie.ManageDesktopSignals:
            await Ea(Q);
            break;
          case Y.NewWindow: {
            const De = await ao(Q);
            await f().Browser.createWindow({ workspacePlatform: { pages: [De], windowType: "enterprise" } });
            break;
          }
          case Ie.Pin: {
            const { alwaysOnTop: De } = await J.openfinWindow.getOptions();
            await J.openfinWindow.updateOptions({ alwaysOnTop: !De });
            break;
          }
          case Ie.ShowHideTabs:
            await de.isShowingTabs() ? await de.hide() : await de.show();
            break;
          default:
            return !1;
        }
        return !0;
      })(e, n)))
        switch (e.type) {
          case Y.NewWindow: {
            const { newPageUrl: b } = await Da(r);
            if (!b) throw new Error("Trying to create a new empty window without a newPageUrl set");
            f().createView({ target: void 0, url: b });
            break;
          }
          case Y.NewPage:
            await Ei(r);
            break;
          case Y.CloseWindow:
            s.dispatch(At.CloseBrowserWindow);
            break;
          case Y.SaveWorkspace:
            await Ai(r);
            break;
          case Y.SavePage:
            await Do(r);
            break;
          case Y.SavePageAs:
            await Oo(r);
            break;
          case Y.SaveWorkspaceAs:
            await Ro(r);
            break;
          case Y.RenameWorkspace:
            u._openSaveModal({ menuType: Fe.RENAME_WORKSPACE });
            break;
          case Y.SwitchWorkspace:
            await (async (b, B) => {
              const V = f(), Q = (await V.Storage.getWorkspaces()).find((J) => J.workspaceId === B.workspaceId);
              V.applyWorkspace(Q, { skipPrompt: !1, promptContainerWindowIdentity: b });
            })(r, e);
            break;
          case Y.DeleteWorkspace:
            await Nc(r, e);
            break;
          case Y.Downloads:
            await _i(r);
            break;
          case Y.Appearance:
            await f().Theme.setSelectedScheme(e.scheme);
            break;
          case Y.Quit:
            {
              const b = Ho();
              await Ci(r, await b) && fin.Platform.getCurrentSync().quit();
            }
            break;
          case Y.OpenStorefront:
            (async () => await an() && tt(Te))();
            break;
          case Y.RestoreChanges:
            await Ii();
            break;
          case Y.Print:
            await Wo(n.selectedViews);
            break;
          case Y.PrintAll:
            await w.print({ content: "views", includeSelf: !1 });
            break;
          case Y.PrintScreen:
            await w.print({ content: "screenshot" });
            break;
          case Y.Custom:
            if (e.action) {
              const b = { callerType: ut.GlobalContextMenu, windowIdentity: r, customData: e.action.customData };
              f()._invokeCustomAction(e.action.id, b);
            } else console.warn(`Encountered a Custom context menu option with an "action" property with value "${e.action}"`);
        }
    }, pu = async (e, n, r) => {
      const s = f().Browser.wrapSync(n.identity), u = fin.Window.wrapSync(n.identity), w = await St(n.identity), k = await Tt();
      switch (e && ln({ type: "Page Tab Menu", action: "Select Menu Item", value: e.type, skipValueHashing: !0 }), e == null ? void 0 : e.type) {
        case ne.Save:
          await Do(n.identity, n.pageId);
          break;
        case ne.SaveAs:
          await Oo(n.identity, n.pageId);
          break;
        case ne.NewPage:
          await Ei(n.identity);
          break;
        case ne.DeletePage:
          await (async (b, B) => {
            const V = f(), Q = V.Browser.wrapSync(b), J = (await V.Storage.getPages()).find((re) => re.pageId === B);
            J && await Ac(b, J.title) && (await V.Storage.deletePage(J.pageId), await Q.removePage(B), no({ message: te("enterpriseSuccessIndicator.supertabDeleted"), parentBrowserName: b.name, secondaryMessage: te("enterpriseSuccessIndicator.supertabHasBeenDeleted", { title: J.title }) }));
          })(n.identity, n.pageId);
          break;
        case ne.Rename:
          await Tt(n.identity) ? (await s.setActivePage(n.pageId), await (await Ni()).dispatch("open", { parentIdentity: n.identity, responseIdentity: le, type: ir.RenameSupertab, anchorBehavior: oo.Center, x: r.left + r.width / 2 - 164, y: r.bottom - 8, payload: { pageId: n.pageId } })) : await s._openSaveModal({ menuType: Fe.RENAME_PAGE, id: n.pageId });
          break;
        case ne.Duplicate:
          w.dispatch(At.DuplicatePage, n.pageId);
          break;
        case ne.Close:
          k ? await (async (b, B) => {
            const V = f().Browser.wrapSync(b), Q = await V.getPages();
            for (const J of Q) if (J.pageId === B) {
              await V.removePage(J.pageId), await V._trackRemovedTab({ identity: b, page: J });
              break;
            }
          })(n.identity, n.pageId) : w.dispatch(At.ClosePage, { pageId: n.pageId });
          break;
        case ne.Custom:
          if (e.action) {
            const b = { callerType: ut.PageTabContextMenu, windowIdentity: n.identity, pageId: n.pageId, customData: e.action.customData };
            f()._invokeCustomAction(e.action.id, b);
          } else console.warn(`Encountered a Custom context menu option with an "action" property with value "${e.action}"`);
          break;
        case ne.Refresh:
          await (async (b, B) => {
            var re;
            const V = f(), Q = V.Browser.wrapSync(b), J = (await Q.getPages()).find((de) => B ? de.pageId === B : de.isActive);
            (re = J == null ? void 0 : J.layout) != null && re.content && R(J.layout.content).forEach(async (de) => {
              (await fin.View.wrap({ uuid: V.identity.uuid, name: de.name })).reload();
            });
          })(n.identity, n.pageId);
          break;
        case ne.CloseOthers:
          await (async (b, B) => {
            const V = f().Browser.wrapSync(b), Q = await V.getPages();
            for (const J of Q) J.pageId !== B && (await V.removePage(J.pageId), await V._trackRemovedTab({ identity: b, page: J }));
          })(n.identity, n.pageId);
          break;
        case ne.SaveWorkspaceAs:
          await Ro(n.identity);
          break;
        case ne.Print: {
          const b = await s._getLayoutsWithSelectedViews(), { selectedViews: B } = b.find((V) => V.pageId === n.pageId);
          await Wo(B);
          break;
        }
        case ne.PrintAll:
          await s.setActivePage(n.pageId), await u.print({ content: "views", includeSelf: !1 });
          break;
        case ne.PrintScreen:
          await s.setActivePage(n.pageId), await u.print({ content: "screenshot" });
          break;
        case ne.AddToChannel:
          await s.updatePage({ pageId: n.pageId, page: { contextGroup: e.option === "unlink" ? null : e.option } });
          break;
        case ne.ManageDesktopSignals:
          await Ea(n.identity);
      }
    }, fu = async (e, n) => {
      if (e != null && e.type) {
        const r = n.identity;
        switch (e.type) {
          case at.SavePage:
            await Do(r);
            break;
          case at.SaveWorkspace:
            await Ai(r);
            break;
          case at.SavePageAs:
            await Oo(r);
            break;
          case at.SaveWorkspaceAs:
            await Ro(r);
            break;
          case at.Custom:
            if (e.action) {
              const s = { callerType: ut.SaveButtonContextMenu, windowIdentity: n.identity, pageId: n.pageId, customData: e.action.customData };
              f()._invokeCustomAction(e.action.id, s);
            } else console.warn(`Encountered a Custom context menu option with an "action" property with value "${e.action}"`);
        }
      }
    };
    var oo;
    (function(e) {
      e[e.TopLeft = 0] = "TopLeft", e[e.TopRight = 1] = "TopRight", e[e.BottomLeft = 2] = "BottomLeft", e[e.BottomRight = 3] = "BottomRight", e[e.Center = 4] = "Center";
    })(oo || (oo = {}));
    const io = async (e, n, r, s) => {
      const { x: u, y: w, identity: k, template: b, callback: B } = e, V = await Tt(k), { data: Q } = V ? await au({ x: u, y: w, template: b }, r, s, fin.Window.wrapSync(k)) : await function(J, re) {
        if (!Le) throw new Error("showContextMenu can only be used in an OpenFin env. Avoid calling this method during pre-rendering.");
        if (!re && !fin.me.isWindow) throw new Error("showContextMenu can only be used in an OpenFin window.");
        return (re || fin.Window.getCurrentSync()).showPopupMenu(J);
      }({ x: u, y: w, template: b }, fin.Window.wrapSync(k));
      B(Q, e);
    };
    async function hu(e, n) {
      const r = za(), s = await Tt(e.identity);
      s && Zt(r);
      const u = s ? await (async ({ identity: J, selectedViews: re }) => {
        const de = f(), xe = de.Browser.wrapSync(J), De = (await xe.getPages()).find((Et) => Et.isActive), lt = await de.Storage.getPage(De.pageId), He = K(De.layout.content) > 1, ct = await Tt(J), Ze = await de.Theme.getThemes(), Ct = Ze[0] && "palettes" in Ze[0] || !Ze[0] || Ze.length === 0, bn = { ...Ki(ct), enabled: !!lt }, ze = { ...$i(ct), enabled: He };
        return [ji(), Hi(!0, ct), { type: Ne.Separator }, bn, ze, { type: Ne.Separator }, { type: Ne.Label, label: te("contextMenu.manageDesktopSignals"), data: { type: Y.ManageDesktopSignals } }, { type: Ne.Separator }, ...Ct ? [{ type: Ne.Submenu, label: qi().label, submenu: await Yi() }] : [], { type: Ne.Separator }, jo(), { type: Ne.Separator }, Ko(!0)];
      })({ identity: e.identity, selectedViews: e.selectedViews }) : await ou(e.identity, e.selectedViews), w = await Ho();
      s || (u.find((J) => {
        var re;
        return ((re = J.data) == null ? void 0 : re.type) === Y.Quit;
      }).label = `Quit ${w}`);
      const { rect: k, ...b } = e, { x: B, y: V } = s ? { x: k.left + k.width, y: k.bottom } : e, Q = { ...b, x: B, y: V, template: u, callback: du };
      qa(r), await this.openGlobalContextMenu(Q, n);
    }
    async function gu(e, n) {
      const r = { ...e, callback: lu };
      await this.openViewTabContextMenu(r, n);
    }
    async function mu(e, n) {
      const r = za(), s = await Tt(e.identity);
      s && Zt(r);
      const u = await (async (k, b, B) => {
        var He, ct;
        const V = await f().Storage.getPage(k), Q = (await Wr()).find((Ze) => Ze.pageId === k), J = K(Q.layout.content) > 1, { workspacePlatform: re } = await ie(b).getOptions(), de = !(re.isLocked || re.preventPageClose || (He = Q.closeButton) != null && He.disabled || (ct = Q.closeButton) != null && ct.hidden), xe = [{ type: Ne.Label, label: te("enterpriseContextMenu.newTab"), data: { type: ne.NewPage } }, Xt, es(Q), Xi(), Xt, { type: Ne.Label, label: te("reload"), data: { type: ne.Refresh } }, { type: Ne.Label, label: te("enterpriseContextMenu.duplicate"), data: { type: ne.Duplicate }, enabled: !re.isLocked }, await ru(), Xt, { type: Ne.Label, label: te(J ? "enterpriseSaveModal.closeSupertab" : "enterpriseSaveModal.closeTab"), data: { type: ne.Close }, enabled: de }], De = [{ type: Ne.Label, label: te("enterpriseContextMenu.newTab"), data: { type: ne.NewPage } }, Xt, es(Q), Xi(), Xt, { type: Ne.Label, label: te("enterpriseSaveModal.renameSupertab"), data: { type: ne.Rename }, enabled: !re.isLocked && !!V && J }, { type: Ne.Label, label: te("enterpriseContextMenu.duplicate"), data: { type: ne.Duplicate }, enabled: !re.isLocked }, Xt, { type: Ne.Label, label: te("enterpriseContextMenu.saveSupertab"), data: { type: ne.Save }, enabled: J && !!V }, { type: Ne.Label, label: te("enterpriseContextMenu.saveSupertabAs"), data: { type: ne.SaveAs }, enabled: J }, Xt, { type: Ne.Label, label: te("enterpriseContextMenu.deleteSupertab"), data: { type: ne.DeletePage }, enabled: !!V }, Xt, { type: Ne.Label, label: te(J ? "enterpriseSaveModal.closeSupertab" : "enterpriseSaveModal.closeTab"), data: { type: ne.Close }, enabled: de }], lt = [{ type: Ne.Label, label: te("contextMenu.savePage"), data: { type: ne.Save }, enabled: !!V }, { type: Ne.Label, label: te("saveMenu.savePageAs"), data: { type: ne.SaveAs }, enabled: !0 }, { type: Ne.Label, label: "Save Workspace As", data: { type: ne.SaveWorkspaceAs } }, { type: Ne.Label, label: "Refresh", data: { type: ne.Refresh } }, Xt, { type: Ne.Label, label: te("saveModal.renamePage"), data: { type: ne.Rename }, enabled: !!V }, { type: Ne.Label, label: te("contextMenu.duplicatePage"), data: { type: ne.Duplicate }, enabled: !re.isLocked }, Xt, { type: Ne.Label, label: te("saveModal.closePage"), data: { type: ne.Close }, enabled: de }];
        return B ? J ? De : xe : lt;
      })(e.pageId, e.identity, s), w = { ...e, template: u, callback: (k, b) => {
        pu(k, b, e.rect);
      } };
      qa(r), await this.openPageTabContextMenu(w, n);
    }
    async function wu(e, n) {
      const r = await (async (u) => {
        const w = f(), k = await w.getCurrentWorkspace({ skipSnapshotUpdate: !0 }), b = (await w.Storage.getWorkspacesMetadata()).find((V) => V.workspaceId === k.workspaceId), B = await w.Storage.getPage(u);
        return [{ type: Ne.Label, label: te("contextMenu.saveWorkspace"), enabled: !!b, data: { type: at.SaveWorkspace } }, { type: Ne.Label, label: te("saveMenu.saveWorkspaceAs"), data: { type: at.SaveWorkspaceAs } }, { type: Ne.Separator, data: void 0 }, { type: Ne.Label, enabled: !!B, label: te("contextMenu.savePage"), data: { type: at.SavePage } }, { type: Ne.Label, label: te("saveMenu.savePageAs"), data: { type: at.SavePageAs } }];
      })(e.pageId), s = { ...e, template: r, callback: fu };
      await this.openSaveButtonContextMenu(s, n);
    }
    const so = "dock-companion-updates", co = async () => (await fin.Application.getCurrentSync().getChildWindows()).find((e) => e.identity.name === Ve.DockCompanion), Wa = Tn(`${typeof fin < "u" && (fin == null ? void 0 : fin.me.identity.uuid)}-enterprise-dock`), yu = async () => {
      const e = f(), n = await async function() {
        const w = await Bi();
        await Promise.all(w.map(async (V) => {
          await Oa(V.identity);
        }));
        const k = Array.from(or.values()).sort((V, Q) => Q.lastFocusedTime - V.lastFocusedTime), b = k.find((V) => V.isVisible);
        if (b)
          return await fin.Window.wrapSync(b.identity).focus(), b.identity;
        const B = k[0];
        if (B) {
          const V = fin.Window.wrapSync(B.identity);
          return await V.restore(), await V.focus(), B.identity;
        }
        return $c();
      }(), r = e.Browser.wrapSync(n), s = (await r.getPages()).at(-1), u = R(s.layout.content);
      if (u.length === 1 && qr(u[0].url)) await r.setActivePage(s.pageId);
      else {
        const w = await ao(n), { newPageUrl: k } = await Da();
        await r._addDefaultPage({ identity: r.identity, page: w, newPageUrl: k || void 0 });
      }
      (await St(n)).dispatch(At.FocusAndExpandSearchInternal);
    }, Go = "dock-provider-configs", ur = _t && Le && new Dn.Dexie(Pa("dock-provider-configs"));
    async function bu(e) {
      if (!ur) throw new Error("Unable to get Dock provider config - IndexedDB not supported");
      try {
        return await ur[Go].get(e);
      } catch (n) {
        return void console.warn("Failed to retrieve Dock provider config from IndexedDb", n);
      }
    }
    async function vu(e) {
      if (!ur) throw new Error("Unable to save Dock provider config - IndexedDb not supported");
      await ur[Go].put(e, e.id);
    }
    ur && ur.version(0.1).stores({ [Go]: "" });
    const Nr = "workspaces", Qn = _t && Le && zn("openfin-workspace-platform-workspaces", Nr);
    async function zo(e) {
      if (!Qn) throw new Error("Unable to get workspace - IndexDB not supported");
      const n = await Qn[Nr].get(e);
      return n && (n.workspaceId = e.toString(), n.title = n.title || n.workspaceId), n;
    }
    async function ns(e) {
      if (!Qn) throw new Error("Unable to get workspaces - IndexDB not supported");
      const n = await Qn[Nr].toCollection().keys(), r = (await Promise.all(n.map((s) => zo(s.toString())))).filter((s) => !!s);
      return e ? r.filter((s) => jt(s.title, e)) : r;
    }
    async function as({ workspace: e }) {
      if (!Qn) throw new Error("Unable to create workspace - IndexDB not supported");
      const n = (await ns()).find((r) => r.title === e.title);
      if (n && n.workspaceId !== e.workspaceId) throw new Error(`Workspace with title '${e.title}' already exists.`);
      await Qn[Nr].put(e, e.workspaceId);
    }
    async function rs(e) {
      if (!Qn) throw new Error("Unable to delete workspace - IndexDB not supported");
      await Qn[Nr].delete(e);
    }
    async function ku({ workspaceId: e, workspace: n }) {
      if (!Qn) throw new Error("Unable to update workspace - IndexDB not supported");
      if (!await zo(e)) throw new Error("workspace not found");
      await as({ workspace: n }), e !== n.workspaceId && await rs(e);
    }
    const Su = (e) => {
      const n = e.layout, r = n.content ? R(n.content) : [], s = r.length;
      return s > 1 ? { ...e, singleViewName: null } : s === 1 ? { ...e, singleViewName: r[0].name } : void 0;
    }, qo = async (e, n, r) => {
      var V, Q, J;
      const s = await f().Browser.getAllAttachedPages(), u = new Set(s.map((re) => re.title).filter((re) => !!re)), w = new Set(s.map((re) => re.pageId).filter((re) => !!re)), k = n == null ? void 0 : n.defaultPageOptions, b = ((V = r == null ? void 0 : r.workspacePlatform) == null ? void 0 : V.windowType) === "enterprise" || ((J = (Q = n == null ? void 0 : n.defaultWindowOptions) == null ? void 0 : Q.workspacePlatform) == null ? void 0 : J.windowType) === "enterprise", B = await (async (re, de, xe) => {
        var He, ct, Ze;
        if (xe) return pn();
        const De = (He = de == null ? void 0 : de.workspacePlatform) == null ? void 0 : He.newTabUrl;
        return De || ((Ze = (ct = re == null ? void 0 : re.defaultWindowOptions) == null ? void 0 : ct.workspacePlatform) == null ? void 0 : Ze.newTabUrl) || void 0;
      })(n, r, b);
      return Promise.all(e.map(async (re) => {
        var He, ct;
        if (re.multiInstanceViewBehavior === "reparent") return { ...re, layoutContainerKey: tn() };
        ((Ze, Ct) => {
          Ze.pageId || (Ze.pageId = tn()), Ct.has(Ze.pageId) && (console.warn("PageID collision detected. All Page IDs should be unique. A random new pageId will be generated"), Ze.pageId = tn()), Ct.add(Ze.pageId);
        })(re, w), b || (re.title = Co(re.title, Array.from(u.keys()))), u.add(re.title), (He = re.panels) == null || He.reduce((Ze, Ct) => {
          const bn = Object.values(z);
          if (!bn.includes(Ct.position)) throw new Error(`Encountered a panel with unsupported position "${Ct.position}". Supported positions are: ${bn.toString()}`);
          if (Ze[Ct.position] == 1) throw new Error(`Found more than 1 panel at position: ${Ct.position}. Only 1 panel at a given position is currently supported.`);
          return { ...Ze, [Ct.position]: Ze[Ct.position] + 1 };
        }, { [z.Left]: 0, [z.Right]: 0, [z.Top]: 0, [z.Bottom]: 0 });
        const de = "panels" in re ? re.panels : k == null ? void 0 : k.panels;
        let xe = (De = re.layout, lt = n == null ? void 0 : n.defaultViewOptions, E({ ...De }, (Ze) => N(Ze, lt)));
        var De, lt;
        return B && !((ct = xe == null ? void 0 : xe.settings) != null && ct.newTabButton) && (xe = { ...xe, settings: { ...xe == null ? void 0 : xe.settings, newTabButton: { url: B } } }), { ...k, ...re, panels: de && await Ta(de), layoutContainerKey: tn(), layout: xe, isLayoutCreated: !1 };
      }));
    }, os = async (e, n) => {
      try {
        await fin.Platform.getCurrentSync().createView({ name: e, url: n, target: fin.me.identity, bounds: { top: 0, left: 0, width: 0, height: 0 } }, fin.me.identity);
      } catch {
      }
    }, Pu = (e) => {
      var u, w, k, b;
      const n = e.name === Ve.Home, r = (u = e.name) == null ? void 0 : u.startsWith(Ve.HomeInternal), s = ((w = e.name) == null ? void 0 : w.startsWith(Ve.BrowserMenu)) || ((k = e.name) == null ? void 0 : k.startsWith(Ve.BrowserSaveMenu)) || ((b = e.name) == null ? void 0 : b.startsWith(Ve.DockSaveWorkspaceMenu));
      return !n && !r && !s;
    }, ya = (e) => JSON.parse(JSON.stringify(e));
    async function xu(e) {
      return e ? "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" : (await Be()).displayViewTabDefaultIcon ? "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" : "data:image/svg+xml,%3Csvg%20style%3D%22background-color%3A%237D808A%22%20width%3D%2210%22%20height%3D%2210%22%20viewBox%3D%220%200%2010%2010%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M4.64648%200.874962C4.84174%200.6797%205.15833%200.6797%205.35359%200.874962L9.12482%204.6462C9.32009%204.84146%209.32009%205.15804%209.12482%205.3533L5.35359%209.12454C5.15833%209.3198%204.84174%209.3198%204.64648%209.12454L0.875245%205.3533C0.679982%205.15804%200.679982%204.84146%200.875245%204.6462L4.64648%200.874962ZM5.00003%201.93562L1.9359%204.99975L5.00003%208.06388L8.06416%204.99975L5.00003%201.93562Z%22%20fill%3D%22white%22%2F%3E%3C%2Fsvg%3E";
    }
    const Cu = { dimensions: { borderWidth: 3, headerHeight: 30 } };
    async function Mu(e, n, r) {
      var k, b, B, V, Q, J, re, de, xe, De, lt, He;
      let s = e;
      const u = ((k = s.workspacePlatform) == null ? void 0 : k.windowType) === "enterprise" || ((B = (b = n == null ? void 0 : n.defaultWindowOptions) == null ? void 0 : b.workspacePlatform) == null ? void 0 : B.windowType) === "enterprise";
      if (s.layout && !((Q = (V = s.workspacePlatform) == null ? void 0 : V.pages) != null && Q.length)) {
        const ct = await ki(), Ze = { ...await fa(ct, s.layout), isActive: !0 };
        s.workspacePlatform || (s.workspacePlatform = {}), s.workspacePlatform.pages = await qo([Ze], n, s);
      }
      n != null && n.browserIconSize && (s.workspacePlatform || (s.workspacePlatform = {}), s.workspacePlatform.browserIconSize = n.browserIconSize);
      const w = (J = r == null ? void 0 : r.themes) == null ? void 0 : J[0];
      if ((de = (re = s.workspacePlatform) == null ? void 0 : re.pages) != null && de.length) {
        const ct = await qo(s.workspacePlatform.pages, n, s), Ze = ct, Ct = ((ze) => {
          if (!ze) return;
          let Et = ze.find((Bt) => Bt.isActive);
          return !Et && ze.length > 0 && (ze[0].isActive = !0, Et = ze[0]), Et;
        })(Ze);
        if (Ze.forEach((ze) => {
          ze.pageId !== (Ct == null ? void 0 : Ct.pageId) && (ze.isActive = !1);
        }), await Qt(Ze), s.workspacePlatform.pages = ct, s = Nn({}, await (async (ze) => ({ contextMenuOptions: { enabled: !1 }, experimental: { showFavicons: !0, defaultFaviconUrl: await xu(ze) }, viewVisibility: { showViewsOnSplitterDrag: { enabled: !0 }, showViewsOnWindowResize: { enabled: !0 } } }))(u), n == null ? void 0 : n.defaultWindowOptions, s, await (async (ze) => ({ backgroundThrottling: !0, url: await Ut(ze, !0), contextMenu: !0, closeOnLastViewRemoved: !1, permissions: { System: { openUrlWithBrowser: { enabled: !0, protocols: ["mailto"] } } } }))(u)), Ct.layout = Nn(Ct.layout, Cu), async function(ze) {
          if (ze.icon || ze.taskbarIcon) {
            const Et = fin.Application.getCurrentSync(), Bt = await (await Et.getWindow()).getOptions();
            ze.taskbarIconGroup || (ze.taskbarIconGroup = Bt.taskbarIconGroup || fin.me.identity.uuid);
          }
          if (ze.workspacePlatform.icon) if (typeof ze.workspacePlatform.icon == "object") {
            const Et = window.matchMedia("(prefers-color-scheme: dark)");
            ze.icon = Et.matches ? ze.workspacePlatform.icon.dark : ze.workspacePlatform.icon.light;
          } else ze.icon = ze.workspacePlatform.icon;
        }(s), !s.backgroundColor && w) if ("palette" in w) s.backgroundColor = ((xe = w == null ? void 0 : w.palette) == null ? void 0 : xe.background2) || ((De = w == null ? void 0 : w.palette) == null ? void 0 : De.backgroundPrimary);
        else {
          const ze = r.selectedScheme === Ce.Dark || r.selectedScheme === Ce.System && window.matchMedia("(prefers-color-scheme: dark)") ? w == null ? void 0 : w.palettes.dark : w == null ? void 0 : w.palettes.light;
          s.backgroundColor = (ze == null ? void 0 : ze.background2) || (ze == null ? void 0 : ze.backgroundPrimary);
        }
        s = kt(s, !0);
        const bn = await Ut(u, !0);
        if (bn && (s.url = bn), s.layout = Ct.layout, s.layoutSnapshot = ((ze, Et) => ({ layouts: ze.reduce((Bt, vn) => (!vn.isActive && (!Et || !Su(vn).singleViewName) || (Bt[vn.layoutContainerKey] = vn.layout), Bt), {}), pages: ze }))(s.workspacePlatform.pages, u), s.workspacePlatform.windowType = s.workspacePlatform.windowType ?? Je.Browser, u) {
          const ze = await pn();
          s.workspacePlatform.newPageUrl = ze, s.workspacePlatform.newTabUrl = ze, s.layout && (s.layout.dimensions.borderWidth = 4, s.layout.dimensions.headerHeight = 28), s.name = s.name || `${Ve.BrowserWindow}-${tn()}`, (async (Bt) => {
            const vn = await Jt(), lr = Ve.BrowserAddressSearchPrefix + Bt.name, dr = vn + C.BrowserPopupMenuAddressSearchResultsView, Qo = [], zu = os(lr, dr);
            Qo.push(zu);
            const qu = Ve.AICompanionPrefix + Bt.name, { url: Ju, enabled: Yu } = qt();
            if (Yu) {
              const Zu = os(qu, Ju);
              Qo.push(Zu);
            }
            await Promise.all(Qo);
          })(s);
          const { enabled: Et } = qt();
          s.workspacePlatform.isAiEnabled = Et, s.minWidth = Math.max(654, s.minWidth ?? 0), s.minHeight = Math.max(488, s.minHeight ?? 0);
        } else s.minWidth = Math.max(232, s.minWidth ?? 0), function(ze) {
          var lr, dr;
          const Et = (lr = ze.workspacePlatform) == null ? void 0 : lr.viewTabDimensions, Bt = (dr = ze.workspacePlatform) == null ? void 0 : dr.pageTabDimensions, vn = /^[0-9]+(px|%)$/;
          if (Et) {
            if (Et.minWidth && !vn.test(Et.minWidth)) throw new Error(`Provided viewTabDimensions.min value "${Et.minWidth}" is not in a supported format.`);
            if (Et.maxWidth && !vn.test(Et.maxWidth)) throw new Error(`Provided viewTabDimensions.max value "${Et.maxWidth}" is not in a supported format.`);
          }
          if (Bt) {
            if (Bt.minWidth && !vn.test(Bt.minWidth)) throw new Error(`Provided pageTabDimensions.min value "${Bt.minWidth}" is not in a supported format.`);
            if (Bt.maxWidth && !vn.test(Bt.maxWidth)) throw new Error(`Provided pageTabDimensions.max value "${Bt.maxWidth}" is not in a supported format.`);
          }
        }(s);
      }
      return s.cornerRounding && delete s.cornerRounding, s.name || s.layoutSnapshot ? ((He = (lt = s.contextMenuOptions) == null ? void 0 : lt.template) == null ? void 0 : He.length) > 0 ? s.contextMenuOptions.template = s.contextMenuOptions.template.filter((ct) => ct !== "print") : s.contextMenuOptions = { template: [], enabled: !1 } : s.name = `${Ve.ClassicWindow}-${tn()}`, s.workspacePlatform && r && (s.workspacePlatform._themeData = r), s;
    }
    const is = async (e, n) => {
      const r = { uuid: n.uuid, name: n.name };
      await Ci(r, e.title ?? await Ho(), e.shouldCenterOnMonitor) && fin.Platform.getCurrentSync().quit();
    }, ss = async (e, n) => {
      const r = f(), s = await r.Browser.getLastFocusedWindow();
      if (!s) return;
      const u = r.Browser.wrapSync(s), { title: w, description: k } = e, b = await Ec({ title: w, description: k, identity: u.identity });
      b && u._sendUpdateVersionModalResponse({ identity: n, response: b });
    };
    async function cs(e, n, r) {
      const s = e.manifestUrl ? await n({ manifestUrl: e.manifestUrl }, r) : void 0;
      if (s != null && s.interop && e.interop) {
        const u = { ...e, ...s, interop: e.interop };
        return delete u.manifestUrl, u;
      }
      return e;
    }
    const us = (e) => {
      var r;
      const n = ya(e);
      return (r = n._internalWorkspaceData) != null && r.browserNavigationButtons && (n.workspacePlatform = { ...n.workspacePlatform, browserNavigationButtons: n._internalWorkspaceData.browserNavigationButtons }, delete n._internalWorkspaceData.browserNavigationButtons), n;
    }, ls = (e) => {
      const n = ya(e);
      return n.workspacePlatform && (n._internalWorkspaceData = { ...n._internalWorkspaceData, ...n.workspacePlatform }, delete n.workspacePlatform), n;
    }, Iu = { reload: [{ keys: "Ctrl+R", preventDefault: !0 }], back: [{ keys: "Alt+Left", preventDefault: !0 }], forward: [{ keys: "Alt+Right", preventDefault: !0 }] }, Au = { reload: [{ keys: "Cmd+R", preventDefault: !0 }], back: [{ keys: "Cmd+[", preventDefault: !0 }, { keys: "Cmd+Left", preventDefault: !0 }], forward: [{ keys: "Cmd+]", preventDefault: !0 }, { keys: "Cmd+Right", preventDefault: !0 }] }, Eu = async () => await Br() ? Iu : Au, _u = (e, n) => {
      const r = fin.View.wrapSync(e);
      if (!n) return;
      const s = (u) => {
        (async (w, k, b) => {
          if (b.inputType !== "keyDown") return;
          const B = await (async (Q) => {
            var xe;
            const J = await Q.getCurrentWindow(), re = await J.getOptions(), de = (xe = re.workspacePlatform) == null ? void 0 : xe.navigationButtons;
            return de.enabled && !de.hotkeysDisabled;
          })(w), V = await Br();
          if (B) {
            if (k.reload) {
              const Q = b.ctrlKey && !b.altKey && !b.metaKey && !b.shiftKey && b.key === "r", J = !b.ctrlKey && !b.altKey && b.metaKey && !b.shiftKey && b.key === "r";
              (V ? Q : J) && (k != null && k.reload) && (w.reload(), ln({ type: "View", action: "Reload", value: w.identity.name }));
            }
            if (k.back) {
              const Q = !b.ctrlKey && b.altKey && !b.metaKey && !b.shiftKey && b.key === "ArrowLeft", J = !b.ctrlKey && !b.altKey && b.metaKey && !b.shiftKey && b.key === "ArrowLeft", re = !b.ctrlKey && !b.altKey && b.metaKey && !b.shiftKey && b.key === "[";
              (V ? Q : J || re) && (k != null && k.back) && (w.navigateBack(), ln({ type: "View", action: "Back", value: w.identity.name }));
            }
            if (k.forward) {
              const Q = !b.ctrlKey && b.altKey && !b.metaKey && !b.shiftKey && b.key === "ArrowRight", J = !b.ctrlKey && !b.altKey && b.metaKey && !b.shiftKey && b.key === "ArrowRight", re = !b.ctrlKey && !b.altKey && b.metaKey && !b.shiftKey && b.key === "]";
              (V ? Q : J || re) && (k != null && k.forward) && (w.navigateForward(), ln({ type: "View", action: "Forward", value: w.identity.name }));
            }
          }
        })(r, n, u);
      };
      r.addListener("hotkey", s), r.once("destroyed", () => {
        r.removeListener("hotkey", s);
      });
    }, Jo = (e, n) => ya(e).map((r) => ("componentState" in r ? r.componentState = n(r.componentState) : "content" in r && (r.content = Jo(r.content, n)), r)), ds = (e) => {
      if (e) {
        const n = ya(e);
        return n.content && (n.content = Jo(n.content, us)), n;
      }
      return e;
    }, ps = (e) => {
      if (e) {
        const n = ya(e);
        return n.content && (n.content = Jo(n.content, ls)), n;
      }
      return e;
    };
    async function Tu({ app: e, target: n }) {
      const r = fin.Platform.getCurrentSync();
      switch (e.manifestType) {
        case X.Snapshot:
          return r.applySnapshot(e.manifest);
        case X.View:
          return async function(s, u) {
            const w = fin.Platform.getCurrentSync();
            if (u.entityType === "view") {
              const k = fin.View.wrapSync(u);
              return await (await k.getParentLayout()).replaceView(u, { manifestUrl: s.manifest, url: void 0, target: void 0 }), k.destroy();
            }
            return w.createView({ name: void 0, url: void 0, manifestUrl: s.manifest, target: void 0 });
          }(e, n);
        case X.External:
          return fin.System.launchExternalProcess({ path: e.manifest, uuid: e.appId });
        default:
          return fin.Application.startFromManifest(e.manifest);
      }
    }
    let Yo;
    const uo = () => (Yo || (Yo = Tn(`${typeof fin < "u" && fin.me.identity.uuid}-enterprise-app-directory`)()), Yo);
    async function Ru(e) {
      return await Tt(e.identity) ? (await uo()).dispatch(An.GetApps, e.req) : [];
    }
    async function Du(e) {
      return await Tt(e.identity) ? (await uo()).dispatch(An.GetSearchProviders, e) : [];
    }
    async function Ou(e) {
      return (await uo()).dispatch(An.GetCuratedContent, e);
    }
    async function Wu(e) {
      return (await uo()).dispatch(An.GetRecentlyVisited, e);
    }
    async function Bu(e) {
      const n = (await st()).map(async (r) => {
        var u;
        const s = await r.getOptions();
        (u = s.workspacePlatform) != null && u.pages && s.layout && await (async (w) => (await St(w)).dispatch(At.UpdatePagesWindowOptions))(r.identity);
      });
      return await Promise.all(n), e ? e() : pa();
    }
    let fs = [];
    const hs = () => fs;
    async function Nu(e) {
      const n = (s) => {
        if (!s.includes("#") && !s.includes("rgb") && !s.includes("hsl")) throw new Error("Background primary color is not the right format.");
      };
      e == null || e.forEach((s) => {
        "palette" in s && n(s.palette.backgroundPrimary), "palettes" in s && (n(s.palettes.dark.backgroundPrimary), n(s.palettes.light.backgroundPrimary));
      }), fs = ((s, u) => {
        if (vt("ThemeStorage: initialiseStoragePalettes called", { customThemes: s, isWindows: u }), !s || !s[0]) {
          vt("ThemeStorage: Using default OpenFin theme");
          const { dark: w, light: k } = Na[0].palettes;
          return yn.setPalettes({ dark: w, light: k }, u), vt("ThemeStorage: Default theme set successfully"), Na;
        }
        {
          const w = s[0];
          if (vt("ThemeStorage: Using custom theme", w), "default" in w && w.default && (vt(`ThemeStorage: Setting theme default scheme to: ${w.default}`), yn.setThemeDefaultScheme(w.default)), "palette" in w) {
            vt("ThemeStorage: Processing single palette theme");
            const { palette: k } = w, b = { ...Rn, ...k };
            return yn.setPalettes({ dark: b, light: b }, u), w.palette = b, vt("ThemeStorage: Single palette theme set successfully"), s;
          }
          if ("palettes" in w) {
            vt("ThemeStorage: Processing dual palettes theme");
            const { dark: k, light: b } = w.palettes, B = { ...Rn, ...k }, V = { ...aa, ...b };
            return yn.setPalettes({ dark: B, light: V }, u), w.palettes = { dark: B, light: V }, vt("ThemeStorage: Dual palettes theme set successfully"), s;
          }
        }
      })(e, await Br());
    }
    const Lu = (e, n) => (r) => {
      const s = e !== null;
      return class extends r {
        constructor() {
          super(), this.isWorkspacePlatform = () => ({ isWorkspacePlatform: !0, isBrowserInitialized: !!e, analytics: { isSupported: !0 } }), this.detachPagesFromWindow = cc, this.getAllAttachedPages = Wr, this.getPagesForWindow = bi, this.getPageForWindow = lc, this.markUnsavedPagesAsSavedInternal = yc, this.launchApp = Tu, this.savePage = yi, this.saveWorkspace = Dc, this.createSavedPageInternal = mi, this.updateSavedPageInternal = wi, this.deleteSavedPageInternal = oc, this.reorderPagesForWindow = dc, this.getUniquePageTitle = ki, this.updatePageForWindow = sc, this.getLastFocusedBrowserWindow = Kc, this.getThemes = hs, this.invokeCustomActionInternal = zc, this.requestQuitPlatformDialogInternal = is, this.getCurrentWorkspace = Tc, this.setActiveWorkspace = _o, this.getLanguageResourcesInternal = Uc, this.getPageByViewIdentity = async (u) => {
            const w = await fin.Platform.Layout.getLayoutByViewIdentity(u), k = w.identity;
            if (!("layoutName" in k)) throw new Error("Failed to get layout's identity");
            const b = await f().Browser.wrapSync(w.identity).getPages(), B = b.findIndex((V) => V.layoutName === k.layoutName);
            if (B === -1) throw new Error("Failed to get page's index");
            return { windowIdentity: { name: w.identity.name, uuid: w.identity.uuid }, page: b[B], pageIndex: B };
          }, this.openGlobalContextMenuInternal = this.openGlobalContextMenuInternal.bind(this), this.openGlobalContextMenu = this.openGlobalContextMenu.bind(this), this.getSavedPages = this.getSavedPages.bind(this), this.getSavedPage = this.getSavedPage.bind(this), this.createSavedPage = this.createSavedPage.bind(this), this.updateSavedPage = this.updateSavedPage.bind(this), this.deleteSavedPage = this.deleteSavedPage.bind(this), this.handlePageChanges = this.handlePageChanges.bind(this), this.attachPagesToWindow = this.attachPagesToWindow.bind(this), this.openViewTabContextMenuInternal = this.openViewTabContextMenuInternal.bind(this), this.openViewTabContextMenu = this.openViewTabContextMenu.bind(this), this.openPageTabContextMenuInternal = this.openPageTabContextMenuInternal.bind(this), this.openPageTabContextMenu = this.openPageTabContextMenu.bind(this), this.getSavedWorkspaces = this.getSavedWorkspaces.bind(this), this.getSavedWorkspacesMetadata = this.getSavedWorkspacesMetadata.bind(this), this.getSavedWorkspace = this.getSavedWorkspace.bind(this), this.createSavedWorkspace = this.createSavedWorkspace.bind(this), this.updateSavedWorkspace = this.updateSavedWorkspace.bind(this), this.deleteSavedWorkspace = this.deleteSavedWorkspace.bind(this), this.getCurrentWorkspace = this.getCurrentWorkspace.bind(this), this.getDockProviderConfig = this.getDockProviderConfig.bind(this), this.saveDockProviderConfig = this.saveDockProviderConfig.bind(this), this.applyWorkspace = this.applyWorkspace.bind(this), this.restoreLastSavedWorkspaceInternal = this.restoreLastSavedWorkspaceInternal.bind(this), this.setActiveWorkspace = this.setActiveWorkspace.bind(this), this.openSaveButtonContextMenu = this.openSaveButtonContextMenu.bind(this), this.openSaveButtonContextMenuInternal = this.openSaveButtonContextMenuInternal.bind(this), this.getSelectedScheme = this.getSelectedScheme.bind(this), this.setSelectedScheme = this.setSelectedScheme.bind(this), this.analyticsInternal = this.analyticsInternal.bind(this), this.handleAnalytics = this.handleAnalytics.bind(this), this.getLanguage = this.getLanguage.bind(this), this.setLanguage = this.setLanguage.bind(this), this.handleSaveModalOnPageClose = this.handleSaveModalOnPageClose.bind(this), this.shouldPageClose = this.shouldPageClose.bind(this), this.shouldWindowClose = this.shouldWindowClose.bind(this), this.handlePagesAndWindowClose = this.handlePagesAndWindowClose.bind(this), this.setActivePage = this.setActivePage.bind(this), this.handlePageChanges = this.handlePageChanges.bind(this), this.copyPage = this.copyPage.bind(this), this.addPage = this.addPage.bind(this), this.addDefaultPage = this.addDefaultPage.bind(this), this.markUnsavedPagesAsSavedInternal = this.markUnsavedPagesAsSavedInternal.bind(this), this.trackRemovedTabInternal = this.trackRemovedTabInternal.bind(this), this.restoreRemovedTabInternal = this.restoreRemovedTabInternal.bind(this), this.trackVisitedSiteInternal = this.trackVisitedSiteInternal.bind(this), this.getRecentlyVisitedSitesInternal = this.getRecentlyVisitedSitesInternal.bind(this), this.getFrequentlyVisitedSitesInternal = this.getFrequentlyVisitedSitesInternal.bind(this), this.searchSitesInternal = this.searchSitesInternal.bind(this), this.getSearchProvidersInternal = this.getSearchProvidersInternal.bind(this), this.getCuratedContentInternal = this.getCuratedContentInternal.bind(this), this.handleRequestNavigationInternal = this.handleRequestNavigationInternal.bind(this), this.refreshBookmarksInternal = this.refreshBookmarksInternal.bind(this), this.launchBookmarkInternal = this.launchBookmarkInternal.bind(this), this.getNotificationsConfig = this.getNotificationsConfig.bind(this), this.updateDockFavoritesInternal = this.updateDockFavoritesInternal.bind(this), this.updateContentMenuInternal = this.updateContentMenuInternal.bind(this), this.launchDockEntryInternal = this.launchDockEntryInternal.bind(this), this.setDockFavoritesOrderInternal = this.setDockFavoritesOrderInternal.bind(this), this.navigateContentMenuInternal = this.navigateContentMenuInternal.bind(this), this.setDefaultDockButtonsOrderInternal = this.setDefaultDockButtonsOrderInternal.bind(this), this.getDockWorkspacesContextMenuInternal = this.getDockWorkspacesContextMenuInternal.bind(this), this.handleDockWorkspacesMenuResponseInternal = this.handleDockWorkspacesMenuResponseInternal.bind(this), this.removeDockFavoriteInternal = this.removeDockFavoriteInternal.bind(this), this.addDockFavoriteInternal = this.addDockFavoriteInternal.bind(this), this.focusAndExpandSearchInternal = this.focusAndExpandSearchInternal.bind(this), this.sendUpdateVersionModalResponseInternal = this.sendUpdateVersionModalResponseInternal.bind(this), this.requestQuitPlatformDialogInternal = is.bind(this), this.showUpdateVersionModalInternal = ss.bind(this);
        }
        async applyWorkspace(...u) {
          return _c.apply(this, u);
        }
        async restoreLastSavedWorkspaceInternal(...u) {
          return Ii.apply(this, u);
        }
        async getSnapshot() {
          const u = s ? await Bu(async () => pa(await super.getSnapshot(void 0, fin.me.identity))) : await pa(await super.getSnapshot(void 0, fin.me.identity));
          let w = { ...u, windows: u.windows.filter(Pu).map(Ha) };
          return w = ((k) => {
            const b = ya(k);
            return b.windows.forEach((B) => {
              var V, Q;
              B.layout && (B.layout = ds(B.layout)), (Q = (V = B.workspacePlatform) == null ? void 0 : V.pages) == null || Q.forEach((J) => {
                J != null && J.layout && (J.layout = ds(J.layout));
              });
            }), b;
          })(w), w;
        }
        async getViewSnapshot(u) {
          let w = await super.getViewSnapshot(u);
          return w = us(w), w;
        }
        async applySnapshot({ snapshot: u, options: w }) {
          let k = u;
          typeof k == "string" && (k = await super.fetchManifest({ manifestUrl: k }, fin.me.identity));
          const b = function(B) {
            var V, Q;
            for (const J of B.windows) if ((Q = (V = J.workspacePlatform) == null ? void 0 : V.pages) != null && Q.length) return !0;
            return !1;
          }(k);
          if (!s && b) throw new Error("This snapshot cannot be applied as the platform has been initialized without the browser.");
          return k = ((B) => {
            const V = ya(B);
            return V.windows.forEach((Q) => {
              var J, re;
              Q.layout = ps(Q.layout), (re = (J = Q.workspacePlatform) == null ? void 0 : J.pages) == null || re.forEach((de) => {
                de.layout = ps(de.layout);
              });
            }), V;
          })(k), super.applySnapshot({ snapshot: k, options: w });
        }
        async createWindow(u, w) {
          var V, Q, J, re;
          if (s && u.reason === "tearout") {
            const de = await fin.Window.wrapSync(w).getOptions(), xe = (V = de.workspacePlatform) == null ? void 0 : V.windowType;
            u.taskbarIconGroup = de.taskbarIconGroup, xe && (u.workspacePlatform || (u.workspacePlatform = {}), u.workspacePlatform.windowType = de.workspacePlatform.windowType, xe === Je.Platform && (u.url = de.url));
          }
          if (!s || ((Q = u.workspacePlatform) == null ? void 0 : Q.windowType) === Je.Platform) {
            const de = await super.createWindow(u, w);
            return ln({ type: "Window", action: "Open Window", value: de.identity.name, data: { uuid: de.identity.uuid } }), de;
          }
          var k;
          k = { allowed: !0 }, ja || (ja = !0, Bn(Wn.Browser, k)), ((de = []) => {
            const xe = de.filter((He) => He.type !== dt.Custom), De = /* @__PURE__ */ new Set(), lt = [];
            for (const He of xe) De.has(He.type) && lt.push(He.type), De.add(He.type);
            if (lt.length > 0) {
              const He = lt.join(", ");
              throw new Error(`Encountered a duplicate "${He}" toolbar button. No more than one instance of a button type may be provided.`);
            }
          })((re = (J = u.workspacePlatform) == null ? void 0 : J.toolbarOptions) == null ? void 0 : re.buttons);
          let b = ((de) => "workspacePlatform" in de ? de : (({ workstacks: xe, pages: De, ...lt }) => ({ ...lt, workspacePlatform: { pages: De || xe || null } }))(de))(u);
          b = await Mu(b, e, { themes: hs(), selectedScheme: this.getSelectedScheme() }), b = await (async (de) => {
            const xe = await fin.System.getMonitorInfo();
            let De = xe.primaryMonitor;
            const lt = de.defaultLeft, He = de.defaultTop;
            xe.nonPrimaryMonitors.forEach((Ct) => {
              const { top: bn, bottom: ze, left: Et, right: Bt } = Ct.availableRect;
              lt >= Et && lt <= Bt && He >= bn && He <= ze && (De = Ct);
            });
            const ct = De.availableRect.bottom - De.availableRect.top, Ze = De.availableRect.right - De.availableRect.left;
            return de.defaultHeight = Math.min(de.defaultHeight || 800, ct), de.defaultWidth = Math.min(de.defaultWidth || 800, Ze), de;
          })(b);
          const B = await (/* @__PURE__ */ ((de) => async (xe, De) => {
            var ct, Ze;
            let lt = !1;
            const He = await de(xe, De);
            return (Ze = (ct = xe == null ? void 0 : xe.workspacePlatform) == null ? void 0 : ct._internalDeferShowOptions) != null && Ze.deferShowEnabled && await He.addListener("show-requested", async () => {
              if (lt) return;
              const Ct = await He.getOptions();
              await He.updateOptions({ workspacePlatform: { ...Ct.workspacePlatform, _internalDeferShowOptions: { ...Ct.workspacePlatform._internalDeferShowOptions, autoShow: !0 } } }), lt = !0;
            }), He;
          })((de, xe) => super.createWindow(de, xe)))(b, w);
          return ln({ type: "Window", action: "Open Window", value: B.identity.name, data: { uuid: B.identity.uuid } }), B;
        }
        async createView(u, w) {
          var b;
          u.opts = x(u.opts, e == null ? void 0 : e.defaultViewOptions), u.opts = await cs(u.opts, this.fetchManifest, w), u.opts = await (async (B) => {
            var J;
            const V = ya(B), Q = (J = V.workspacePlatform) == null ? void 0 : J.browserNavigationButtons;
            if (Q) {
              const re = Object.keys(Q);
              for (const de of re) if (Q[de]) {
                const xe = (await Eu())[de];
                V.hotkeys ? V.hotkeys.push(...xe) : V.hotkeys = [...xe];
              }
            }
            return V;
          })(u.opts), u.opts = ls(u.opts);
          const k = await super.createView(u, w);
          return _u(k.identity, (b = u.opts._internalWorkspaceData) == null ? void 0 : b.browserNavigationButtons), k;
        }
        async replaceView(u, w) {
          return u.opts.newView = await x(u.opts.newView, e == null ? void 0 : e.defaultViewOptions), u.opts.newView = await cs(u.opts.newView, this.fetchManifest, w), super.replaceView(u, w);
        }
        async replaceLayout(u, w) {
          var k;
          return await Tt(w) || ((k = u.opts.layout) == null || delete k.dimensions), super.replaceLayout(u, w);
        }
        async getSavedPage(...u) {
          return Vo.apply(this, u);
        }
        async getSavedPages(...u) {
          return Yc.apply(this, u);
        }
        async createSavedPage(...u) {
          return Fi.apply(this, u);
        }
        async deleteSavedPage(...u) {
          return Vi.apply(this, u);
        }
        async updateSavedPage(...u) {
          return Zc.apply(this, u);
        }
        async getSavedWorkspace(...u) {
          return zo.apply(this, u);
        }
        async getSavedWorkspaces(...u) {
          return ns.apply(this, u);
        }
        async getSavedWorkspacesMetadata(...u) {
          return (await this.getSavedWorkspaces(...u)).map((w) => ({ workspaceId: w.workspaceId, title: w.title }));
        }
        async createSavedWorkspace(...u) {
          return as.apply(this, u);
        }
        async deleteSavedWorkspace(...u) {
          return rs.apply(this, u);
        }
        async updateSavedWorkspace(...u) {
          return ku.apply(this, u);
        }
        async getDockProviderConfig(...u) {
          return bu.apply(this, u);
        }
        async saveDockProviderConfig(...u) {
          return vu.apply(this, u);
        }
        async attachPagesToWindow(u) {
          const w = await qo(u.pages, e);
          await Qt(w), await ic({ ...u, pages: w });
        }
        async addPage(u) {
          const w = await Tt(u.identity), k = await Pe(u.identity), { page: b, insertionIndex: B } = u;
          b != null && b.title || w || (b.title = await k.dispatch(pe.GetUniquePageTitle, void 0));
          const V = (await this.getAllAttachedPages()).find((J) => J.pageId === b.pageId || J.title === b.title);
          if (V) {
            if (V.pageId === b.pageId) throw new Error(`page with id ${b.pageId} is already attached to a browser window ${V.parentIdentity.name}`);
            if (!w) throw new Error(`addPage title collision, page with title ${b.title} already exists, conflicting page id: ${V.pageId} with title ${V.title}`);
          }
          const Q = { identity: u.identity, pages: [{ ...b, multiInstanceViewBehavior: u.multiInstanceViewBehavior || "duplicate" }], insertionIndex: B };
          await this.attachPagesToWindow(Q);
        }
        async addDefaultPage(u) {
          await this.addPage(u), await this.setActivePage({ identity: u.identity, pageId: u.page.pageId });
        }
        async setActivePage(...u) {
          return uc.apply(this, u);
        }
        async openGlobalContextMenuInternal(...u) {
          return hu.apply(this, u);
        }
        async openGlobalContextMenu(...u) {
          return io.apply(this, [...u, ir.GlobalMenu, oo.BottomRight]);
        }
        async openViewTabContextMenuInternal(...u) {
          return gu.apply(this, u);
        }
        async openViewTabContextMenu(...u) {
          return io.apply(this, [...u, ir.ContextMenu]);
        }
        async openPageTabContextMenuInternal(...u) {
          return mu.apply(this, u);
        }
        async openPageTabContextMenu(...u) {
          return io.apply(this, [...u, ir.ContextMenu]);
        }
        async openSaveButtonContextMenu(...u) {
          return io.apply(this, u);
        }
        async openSaveButtonContextMenuInternal(...u) {
          return wu.apply(this, u);
        }
        getSelectedScheme(...u) {
          return l.apply(this, u);
        }
        async setSelectedScheme(...u) {
          return i.apply(this, u);
        }
        async handlePageChanges(...u) {
          return wc.apply(this, u);
        }
        async analyticsInternal(...u) {
          return kc.apply(this, u);
        }
        async handleAnalytics(...u) {
        }
        async handleSaveModalOnPageClose(...u) {
          return pc.apply(this, u);
        }
        async shouldPageClose(...u) {
          return fc.apply(this, u);
        }
        async shouldWindowClose(...u) {
          return hc.apply(this, u);
        }
        handlePagesAndWindowClose(...u) {
          return gc.apply(this, u);
        }
        async copyPage(...u) {
          return mc.apply(this, u);
        }
        async getNotificationsConfig() {
          return n;
        }
        async setLanguage(...u) {
          return Vc.apply(this, u);
        }
        async getLanguage() {
          return Di.apply(this);
        }
        async trackRemovedTabInternal(...u) {
          return Qc.apply(this, u);
        }
        async restoreRemovedTabInternal() {
          const u = await (async () => {
            if (!cr) throw new Error("Unable to pop last removed tab - IndexDB not supported");
            const w = cr[Fo], k = await w.toCollection().keys();
            if (k.length > 0) {
              const b = Math.max(...k.map((V) => Number(V))).toString(), B = await w.get(b);
              if (B) {
                await w.delete(b);
                const { id: V, ...Q } = B;
                return Q;
              }
            }
          })();
          if ("page" in u) if (await Gt(u.identity)) {
            const w = f().Browser.wrapSync(u.identity);
            await w.addPage(u.page), await w.setActivePage(u.page.pageId);
          } else f().createWindow({ name: u.identity.name, workspacePlatform: { pages: [u.page], windowType: Je.Browser } });
          else (function(w) {
            return "window" in w;
          })(u) && f().createWindow({ workspacePlatform: { pages: u.window.pages, windowType: Je.Browser } });
        }
        async trackVisitedSiteInternal(...u) {
          return eu.apply(this, u);
        }
        async getRecentlyVisitedSitesInternal(...u) {
          return await Wu.apply(this, u);
        }
        async getFrequentlyVisitedSitesInternal(...u) {
          return tu.apply(this, u);
        }
        async searchSitesInternal(...u) {
          return await Ru.apply(this, u);
        }
        async getSearchProvidersInternal(...u) {
          return await Du.apply(this, u);
        }
        async getCuratedContentInternal(...u) {
          return await Ou.apply(this, u);
        }
        async handleRequestNavigationInternal(...u) {
        }
        async launchBookmarkInternal(u) {
          return nu(u);
        }
        async refreshBookmarksInternal() {
          (await f().Browser.getAllWindows()).forEach(async ({ identity: u }) => {
            (await St(u)).dispatch(At.RefreshBookmarksInternal);
          }), (await Ir(Jc())).dispatch(At.RefreshBookmarksInternal), await (async () => {
            const u = await co();
            u && await (await St(u.identity, so)).dispatch(At.RefreshBookmarksInternal);
          })();
        }
        async updateDockFavoritesInternal(u) {
          return (async (w) => {
            const k = await co();
            if (!k) throw new Error("Companion Dock window not found");
            await (await St(k.identity, so)).dispatch(gn.UpdateFavoriteEntries, w);
          })(u);
        }
        async updateContentMenuInternal(u) {
          return (async (w) => {
            const k = await co();
            if (!k) throw new Error("Companion Dock window not found");
            await (await St(k.identity, so)).dispatch(gn.UpdateContentMenu, w);
          })(u);
        }
        async launchDockEntryInternal(u) {
          return (async (w) => (await Wa()).dispatch("launch-entry", w))(u);
        }
        async setDefaultDockButtonsOrderInternal(u) {
          return (async (w) => (await Wa()).dispatch("set-default-dock-buttons-order", w))(u);
        }
        async setDockFavoritesOrderInternal(u) {
          return (async (w) => (await Wa()).dispatch("set-dock-favorites-order", w))(u);
        }
        async addDockFavoriteInternal(u) {
          return (async (w) => (await Wa()).dispatch("add-favorite-entry", w))(u);
        }
        async removeDockFavoriteInternal(u) {
          return (async (w) => (await Wa()).dispatch("remove-favorite-entry", w))(u);
        }
        async navigateContentMenuInternal(u) {
          return (async (w) => {
            const k = await co();
            if (!k) throw new Error("Companion Dock window not found");
            await (await St(k.identity, so)).dispatch(gn.NavigateContentMenu, w);
          })(u);
        }
        async getDockWorkspacesContextMenuInternal() {
          return (async () => (await Wa()).dispatch("get-dock-workspaces-context-menu", void 0))();
        }
        async handleDockWorkspacesMenuResponseInternal(u) {
          return (async (w) => (await Wa()).dispatch("handle-dock-workspaces-menu-response", w))(u);
        }
        async focusAndExpandSearchInternal() {
          return yu();
        }
        async sendUpdateVersionModalResponseInternal(u) {
          return xo(u);
        }
        async showUpdateVersionModalInternal(u, w) {
          return ss(u, w);
        }
      };
    };
    function Fu(e, n, r) {
      const s = Lu(e, r);
      try {
        return typeof n == "function" ? (u) => n(s(u)) : Array.isArray(n) ? [...n, s] : (u) => new (s(u))();
      } catch (u) {
        throw new Error("WorkspacePlatform.init Error:", u);
      }
    }
    const Vu = ["green", "purple", "orange", "red", "pink", "yellow"], gs = "CONTEXT_GROUP_PAGE", Uu = () => (e) => class extends e {
      getContextGroups() {
        return super.getContextGroups().map((n) => {
          var r, s;
          return Vu.includes((r = n.displayMetadata) == null ? void 0 : r.name) ? { ...n, displayMetadata: { ...n.displayMetadata, name: te((s = n.displayMetadata) == null ? void 0 : s.name) } } : n;
        });
      }
    }, ju = () => {
      const e = new Set($o.keys());
      return (n) => class extends n {
        constructor() {
          super(), this.onClientConnected = async (s) => {
            if (s.name.startsWith("internal-generated-view")) {
              const { page: u } = await f().Browser.getPageByViewIdentity(s), w = u.contextGroup;
              this.joinContextGroup({ contextGroupId: w ?? gs, target: s }, { uuid: this.fin.me.uuid, name: this.fin.me.name });
            }
          };
          const r = this.interopClients.set;
          this.interopClients.set = (s, u) => {
            r.call(this.interopClients, s, u), this.onClientConnected(u.clientIdentity);
          };
        }
        async joinContextGroup({ contextGroupId: r, target: s }, u) {
          if (r !== gs) return super.joinContextGroup({ contextGroupId: r, target: s }, u);
          try {
            const w = (await f().Browser.getPageByViewIdentity(s)).page.layoutName;
            if (!w) throw new Error("View does not belong to a page");
            if (!e.has(w) && (e.add(w), !this.contextGroupsById.has(w))) {
              const k = /* @__PURE__ */ new Map();
              this.contextGroupsById.set(w, k);
            }
            await super.joinContextGroup({ contextGroupId: w, target: s }, u), s.name;
          } catch (w) {
            JSON.stringify(s), w.stack;
          }
        }
        getContextGroups() {
          return Array.from(e).map((r) => ({ id: r, displayMetadata: $o.get(r) ?? {} }));
        }
        setContextForGroup(r, s) {
          if (!this.contextGroupsById.has(s)) {
            const u = /* @__PURE__ */ new Map();
            this.contextGroupsById.set(s, u);
          }
          return super.setContextForGroup(r, s);
        }
      };
    }, Ku = (e, n) => {
      const r = ((s) => wn(s) ? ju() : Uu())(n);
      try {
        return typeof e == "function" ? (s) => e(r(s)) : Array.isArray(e) ? [...e, r] : (s) => new (r(s))();
      } catch (s) {
        throw new Error("WorkspacePlatform.init Error:", s);
      }
    };
    async function $u() {
      (async () => $t().on("window-closed", Gc))(), async function() {
        const e = fin.Application.getCurrentSync(), n = await Bi();
        await Promise.all(n.map(async (s) => {
          await Oa(s.identity, void 0, !0);
        }));
        const r = await fin.System.getFocusedWindow();
        r && r.name.startsWith(Ve.BrowserWindow) && await Oa(r, void 0, !0), await e.addListener("window-focused", async (s) => {
          await Oa(s, void 0, !0);
        }), await e.addListener("window-minimized", async (s) => {
          await Oa(s, !1);
        }), await e.addListener("window-restored", async (s) => {
          await Oa(s, !0);
        }), await e.addListener("window-closed", Hc);
      }(), _o(await To());
    }
    let Zo;
    function Hu({ overrideCallback: e, interopOverride: n, browser: r, notifications: s, analytics: u, integrations: w = [], workspaceAsar: k }) {
      if (!Le) throw new Error("Cannot be used outside an OpenFin env.");
      return Zo || (Zo = (async () => {
        const b = fin.Platform.getCurrentSync();
        var B, V;
        if (b.once("platform-api-ready", () => $u()), b.on("window-show-all-downloads", ({ name: re, uuid: de }) => {
          _i({ name: re, uuid: de });
        }), r != null && r.title && (B = r.title, ts = B), Sc(u), k) {
          const re = `workspace-${encodeURIComponent(fin.me.uuid)}`, { baseUrl: de } = await fin.System.serveAsset({ ...k, hostName: re });
          yt(de);
        }
        r != null && r.browserBaseUrl && yt(r.browserBaseUrl), wn(r) && (qe = !0, V = r, sn = V == null ? void 0 : V.aiPanelOptions, qt());
        const Q = _a();
        var J;
        return Q.setWorkspaceStorage(Fa(`${ht}-workspace`)), Q.trySynchronizeWorkspaceStorage(), await fin.Platform.init({ overrideCallback: Fu(r, e || (r == null ? void 0 : r.overrideCallback), s), interopOverride: Ku(n || (r == null ? void 0 : r.interopOverride), r) }), J = { allowed: !0 }, Bn(Wn.Platform, J), await Promise.all(w.map(async (re) => {
          ((de, xe) => {
            Bn(`${Wn.Microflow}:${de}`, xe, "integration-feature");
          })(re.workflowIntegrationName, { allowed: !0, apiVersion: Xe }), await re._initializeWorkflows();
        })), b;
      })()), Zo;
    }
    const Gu = async ({ theme: e, customActions: n, language: r, ...s }) => {
      const u = Xe.split(".").map((b) => parseInt(b));
      if (!await (async (b) => {
        if ((await Be()).disableRuntimeValidation || await Tt()) return !0;
        const B = (await fin.System.getVersion()).split(".").map((V) => parseInt(V));
        return b.every((V, Q) => !(Q < 3) || B[Q] === b[Q]);
      })(u)) throw new Error(`Runtime version is not supported.  ${u[0]}.${u[1]}.${u[2]}.* is required`);
      var k;
      return Nu(e), e && (k = { allowed: !0 }, Bn(Wn.Theming, k)), n && (No = n), await jc(r == null ? void 0 : r.initialLanguage), await Hu(s);
    };
  })(), Vs.exports = d;
})();
var ac = Vs.exports;
const Fd = /* @__PURE__ */ ui(ac), Vd = /* @__PURE__ */ el({
  __proto__: null,
  default: Fd
}, [ac]);
typeof window < "u" && (window.WorkspacePlatform = Vd);
export {
  Vd as default
};
