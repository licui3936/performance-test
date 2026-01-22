var Zu = Object.defineProperty;
var Qu = (f, o, u) => o in f ? Zu(f, o, { enumerable: !0, configurable: !0, writable: !0, value: u }) : f[o] = u;
var ws = (f, o, u) => Qu(f, typeof o != "symbol" ? o + "" : o, u);
function Xu(f, o) {
  for (var u = 0; u < o.length; u++) {
    const d = o[u];
    if (typeof d != "string" && !Array.isArray(d)) {
      for (const y in d)
        if (y !== "default" && !(y in f)) {
          const m = Object.getOwnPropertyDescriptor(d, y);
          m && Object.defineProperty(f, y, m.get ? m : {
            enumerable: !0,
            get: () => d[y]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(f, Symbol.toStringTag, { value: "Module" }));
}
var lr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ui(f) {
  return f && f.__esModule && Object.prototype.hasOwnProperty.call(f, "default") ? f.default : f;
}
function Fs(f) {
  if (f.__esModule) return f;
  var o = f.default;
  if (typeof o == "function") {
    var u = function d() {
      return this instanceof d ? Reflect.construct(o, arguments, this.constructor) : o.apply(this, arguments);
    };
    u.prototype = o.prototype;
  } else u = {};
  return Object.defineProperty(u, "__esModule", { value: !0 }), Object.keys(f).forEach(function(d) {
    var y = Object.getOwnPropertyDescriptor(f, d);
    Object.defineProperty(u, d, y.get ? y : {
      enumerable: !0,
      get: function() {
        return f[d];
      }
    });
  }), u;
}
var Ls = { exports: {} }, Vs = { exports: {} };
(function(f, o) {
  (function(u, d) {
    f.exports = d();
  })(lr, function() {
    var u = function(t, a) {
      return (u = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, c) {
        i.__proto__ = c;
      } || function(i, c) {
        for (var p in c) Object.prototype.hasOwnProperty.call(c, p) && (i[p] = c[p]);
      })(t, a);
    }, d = function() {
      return (d = Object.assign || function(t) {
        for (var a, i = 1, c = arguments.length; i < c; i++) for (var p in a = arguments[i]) Object.prototype.hasOwnProperty.call(a, p) && (t[p] = a[p]);
        return t;
      }).apply(this, arguments);
    };
    function y(t, a, i) {
      for (var c, p = 0, h = a.length; p < h; p++) !c && p in a || ((c = c || Array.prototype.slice.call(a, 0, p))[p] = a[p]);
      return t.concat(c || Array.prototype.slice.call(a));
    }
    var m = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : lr, P = Object.keys, I = Array.isArray;
    function T(t, a) {
      return typeof a != "object" || P(a).forEach(function(i) {
        t[i] = a[i];
      }), t;
    }
    typeof Promise > "u" || m.Promise || (m.Promise = Promise);
    var U = Object.getPrototypeOf, J = {}.hasOwnProperty;
    function ee(t, a) {
      return J.call(t, a);
    }
    function j(t, a) {
      typeof a == "function" && (a = a(U(t))), (typeof Reflect > "u" ? P : Reflect.ownKeys)(a).forEach(function(i) {
        we(t, i, a[i]);
      });
    }
    var W = Object.defineProperty;
    function we(t, a, i, c) {
      W(t, a, T(i && ee(i, "get") && typeof i.get == "function" ? { get: i.get, set: i.set, configurable: !0 } : { value: i, configurable: !0, writable: !0 }, c));
    }
    function ge(t) {
      return { from: function(a) {
        return t.prototype = Object.create(a.prototype), we(t.prototype, "constructor", t), { extend: j.bind(null, t.prototype) };
      } };
    }
    var q = Object.getOwnPropertyDescriptor, Ce = [].slice;
    function Z(t, a, i) {
      return Ce.call(t, a, i);
    }
    function xe(t, a) {
      return a(t);
    }
    function te(t) {
      if (!t) throw new Error("Assertion Failed");
    }
    function Me(t) {
      m.setImmediate ? setImmediate(t) : setTimeout(t, 0);
    }
    function ie(t, a) {
      if (typeof a == "string" && ee(t, a)) return t[a];
      if (!a) return t;
      if (typeof a != "string") {
        for (var i = [], c = 0, p = a.length; c < p; ++c) {
          var h = ie(t, a[c]);
          i.push(h);
        }
        return i;
      }
      var v = a.indexOf(".");
      if (v !== -1) {
        var x = t[a.substr(0, v)];
        return x == null ? void 0 : ie(x, a.substr(v + 1));
      }
    }
    function se(t, a, i) {
      if (t && a !== void 0 && !("isFrozen" in Object && Object.isFrozen(t))) if (typeof a != "string" && "length" in a) {
        te(typeof i != "string" && "length" in i);
        for (var c = 0, p = a.length; c < p; ++c) se(t, a[c], i[c]);
      } else {
        var h, v, x = a.indexOf(".");
        x !== -1 ? (h = a.substr(0, x), (v = a.substr(x + 1)) === "" ? i === void 0 ? I(t) && !isNaN(parseInt(h)) ? t.splice(h, 1) : delete t[h] : t[h] = i : se(x = !(x = t[h]) || !ee(t, h) ? t[h] = {} : x, v, i)) : i === void 0 ? I(t) && !isNaN(parseInt(a)) ? t.splice(a, 1) : delete t[a] : t[a] = i;
      }
    }
    function dt(t) {
      var a, i = {};
      for (a in t) ee(t, a) && (i[a] = t[a]);
      return i;
    }
    var rt = [].concat;
    function Je(t) {
      return rt.apply([], t);
    }
    var it = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Je([8, 16, 32, 64].map(function(t) {
      return ["Int", "Uint", "Float"].map(function(a) {
        return a + t + "Array";
      });
    }))).filter(function(t) {
      return m[t];
    }), ut = new Set(it.map(function(t) {
      return m[t];
    })), Rt = null;
    function Ne(t) {
      return Rt = /* @__PURE__ */ new WeakMap(), t = function a(i) {
        if (!i || typeof i != "object") return i;
        var c = Rt.get(i);
        if (c) return c;
        if (I(i)) {
          c = [], Rt.set(i, c);
          for (var p = 0, h = i.length; p < h; ++p) c.push(a(i[p]));
        } else if (ut.has(i.constructor)) c = i;
        else {
          var v, x = U(i);
          for (v in c = x === Object.prototype ? {} : Object.create(x), Rt.set(i, c), i) ee(i, v) && (c[v] = a(i[v]));
        }
        return c;
      }(t), Rt = null, t;
    }
    var Pt = {}.toString;
    function Be(t) {
      return Pt.call(t).slice(8, -1);
    }
    var kt = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", Tt = typeof kt == "symbol" ? function(t) {
      var a;
      return t != null && (a = t[kt]) && a.apply(t);
    } : function() {
      return null;
    };
    function mt(t, a) {
      return a = t.indexOf(a), 0 <= a && t.splice(a, 1), 0 <= a;
    }
    var ht = {};
    function je(t) {
      var a, i, c, p;
      if (arguments.length === 1) {
        if (I(t)) return t.slice();
        if (this === ht && typeof t == "string") return [t];
        if (p = Tt(t)) {
          for (i = []; !(c = p.next()).done; ) i.push(c.value);
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
    var R = typeof Symbol < "u" ? function(t) {
      return t[Symbol.toStringTag] === "AsyncFunction";
    } : function() {
      return !1;
    }, Ut = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], hn = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(Ut), ce = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
    function Ae(t, a) {
      this.name = t, this.message = a;
    }
    function De(t, a) {
      return t + ". Errors: " + Object.keys(a).map(function(i) {
        return a[i].toString();
      }).filter(function(i, c, p) {
        return p.indexOf(i) === c;
      }).join(`
`);
    }
    function Ye(t, a, i, c) {
      this.failures = a, this.failedKeys = c, this.successCount = i, this.message = De(t, a);
    }
    function et(t, a) {
      this.name = "BulkError", this.failures = Object.keys(a).map(function(i) {
        return a[i];
      }), this.failuresByPos = a, this.message = De(t, this.failures);
    }
    ge(Ae).from(Error).extend({ toString: function() {
      return this.name + ": " + this.message;
    } }), ge(Ye).from(Ae), ge(et).from(Ae);
    var Le = hn.reduce(function(t, a) {
      return t[a] = a + "Error", t;
    }, {}), Dt = Ae, ve = hn.reduce(function(t, a) {
      var i = a + "Error";
      function c(p, h) {
        this.name = i, p ? typeof p == "string" ? (this.message = "".concat(p).concat(h ? `
 ` + h : ""), this.inner = h || null) : typeof p == "object" && (this.message = "".concat(p.name, " ").concat(p.message), this.inner = p) : (this.message = ce[a] || i, this.inner = null);
      }
      return ge(c).from(Dt), t[a] = c, t;
    }, {});
    ve.Syntax = SyntaxError, ve.Type = TypeError, ve.Range = RangeError;
    var Ft = Ut.reduce(function(t, a) {
      return t[a + "Error"] = ve[a], t;
    }, {}), Wt = hn.reduce(function(t, a) {
      return ["Syntax", "Type", "Range"].indexOf(a) === -1 && (t[a + "Error"] = ve[a]), t;
    }, {});
    function C() {
    }
    function G(t) {
      return t;
    }
    function z(t, a) {
      return t == null || t === G ? a : function(i) {
        return a(t(i));
      };
    }
    function ne(t, a) {
      return function() {
        t.apply(this, arguments), a.apply(this, arguments);
      };
    }
    function Re(t, a) {
      return t === C ? a : function() {
        var i = t.apply(this, arguments);
        i !== void 0 && (arguments[0] = i);
        var c = this.onsuccess, p = this.onerror;
        this.onsuccess = null, this.onerror = null;
        var h = a.apply(this, arguments);
        return c && (this.onsuccess = this.onsuccess ? ne(c, this.onsuccess) : c), p && (this.onerror = this.onerror ? ne(p, this.onerror) : p), h !== void 0 ? h : i;
      };
    }
    function Ve(t, a) {
      return t === C ? a : function() {
        t.apply(this, arguments);
        var i = this.onsuccess, c = this.onerror;
        this.onsuccess = this.onerror = null, a.apply(this, arguments), i && (this.onsuccess = this.onsuccess ? ne(i, this.onsuccess) : i), c && (this.onerror = this.onerror ? ne(c, this.onerror) : c);
      };
    }
    function Oe(t, a) {
      return t === C ? a : function(i) {
        var c = t.apply(this, arguments);
        T(i, c);
        var p = this.onsuccess, h = this.onerror;
        return this.onsuccess = null, this.onerror = null, i = a.apply(this, arguments), p && (this.onsuccess = this.onsuccess ? ne(p, this.onsuccess) : p), h && (this.onerror = this.onerror ? ne(h, this.onerror) : h), c === void 0 ? i === void 0 ? void 0 : i : T(c, i);
      };
    }
    function bt(t, a) {
      return t === C ? a : function() {
        return a.apply(this, arguments) !== !1 && t.apply(this, arguments);
      };
    }
    function gt(t, a) {
      return t === C ? a : function() {
        var i = t.apply(this, arguments);
        if (i && typeof i.then == "function") {
          for (var c = this, p = arguments.length, h = new Array(p); p--; ) h[p] = arguments[p];
          return i.then(function() {
            return a.apply(c, h);
          });
        }
        return a.apply(this, arguments);
      };
    }
    Wt.ModifyError = Ye, Wt.DexieError = Ae, Wt.BulkError = et;
    var _e = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
    function dn(t) {
      _e = t;
    }
    var qt = {}, pn = 100, it = typeof Promise > "u" ? [] : function() {
      var t = Promise.resolve();
      if (typeof crypto > "u" || !crypto.subtle) return [t, U(t), t];
      var a = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
      return [a, U(a), t];
    }(), Ut = it[0], hn = it[1], it = it[2], hn = hn && hn.then, Se = Ut && Ut.constructor, pt = !!it, $t = function(t, a) {
      Kt.push([t, a]), Ct && (queueMicrotask(at), Ct = !1);
    }, sn = !0, Ct = !0, jt = [], Ht = [], Zt = G, Lt = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: C, pgp: !1, env: {}, finalize: C }, ue = Lt, Kt = [], tn = 0, g = [];
    function k(t) {
      if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
      this._listeners = [], this._lib = !1;
      var a = this._PSD = ue;
      if (typeof t != "function") {
        if (t !== qt) throw new TypeError("Not a function");
        return this._state = arguments[1], this._value = arguments[2], void (this._state === !1 && Ee(this, this._value));
      }
      this._state = null, this._value = null, ++a.ref, function i(c, p) {
        try {
          p(function(h) {
            if (c._state === null) {
              if (h === c) throw new TypeError("A promise cannot be resolved with itself.");
              var v = c._lib && Qt();
              h && typeof h.then == "function" ? i(c, function(x, A) {
                h instanceof k ? h._then(x, A) : h.then(x, A);
              }) : (c._state = !0, c._value = h, He(c)), v && on();
            }
          }, Ee.bind(null, c));
        } catch (h) {
          Ee(c, h);
        }
      }(this, t);
    }
    var de = { get: function() {
      var t = ue, a = oe;
      function i(c, p) {
        var h = this, v = !t.global && (t !== ue || a !== oe), x = v && !Mn(), A = new k(function(E, F) {
          ze(h, new ye(Gr(c, t, v, x), Gr(p, t, v, x), E, F, t));
        });
        return this._consoleTask && (A._consoleTask = this._consoleTask), A;
      }
      return i.prototype = qt, i;
    }, set: function(t) {
      we(this, "then", t && t.prototype === qt ? de : { get: function() {
        return t;
      }, set: de.set });
    } };
    function ye(t, a, i, c, p) {
      this.onFulfilled = typeof t == "function" ? t : null, this.onRejected = typeof a == "function" ? a : null, this.resolve = i, this.reject = c, this.psd = p;
    }
    function Ee(t, a) {
      var i, c;
      Ht.push(a), t._state === null && (i = t._lib && Qt(), a = Zt(a), t._state = !1, t._value = a, c = t, jt.some(function(p) {
        return p._value === c._value;
      }) || jt.push(c), He(t), i && on());
    }
    function He(t) {
      var a = t._listeners;
      t._listeners = [];
      for (var i = 0, c = a.length; i < c; ++i) ze(t, a[i]);
      var p = t._PSD;
      --p.ref || p.finalize(), tn === 0 && (++tn, $t(function() {
        --tn == 0 && Dn();
      }, []));
    }
    function ze(t, a) {
      if (t._state !== null) {
        var i = t._state ? a.onFulfilled : a.onRejected;
        if (i === null) return (t._state ? a.resolve : a.reject)(t._value);
        ++a.psd.ref, ++tn, $t(ft, [i, t, a]);
      } else t._listeners.push(a);
    }
    function ft(t, a, i) {
      try {
        var c, p = a._value;
        !a._state && Ht.length && (Ht = []), c = _e && a._consoleTask ? a._consoleTask.run(function() {
          return t(p);
        }) : t(p), a._state || Ht.indexOf(p) !== -1 || function(h) {
          for (var v = jt.length; v; ) if (jt[--v]._value === h._value) return jt.splice(v, 1);
        }(a), i.resolve(c);
      } catch (h) {
        i.reject(h);
      } finally {
        --tn == 0 && Dn(), --i.psd.ref || i.psd.finalize();
      }
    }
    function at() {
      Kn(Lt, function() {
        Qt() && on();
      });
    }
    function Qt() {
      var t = sn;
      return Ct = sn = !1, t;
    }
    function on() {
      var t, a, i;
      do
        for (; 0 < Kt.length; ) for (t = Kt, Kt = [], i = t.length, a = 0; a < i; ++a) {
          var c = t[a];
          c[0].apply(null, c[1]);
        }
      while (0 < Kt.length);
      Ct = sn = !0;
    }
    function Dn() {
      var t = jt;
      jt = [], t.forEach(function(c) {
        c._PSD.onunhandled.call(null, c._value, c);
      });
      for (var a = g.slice(0), i = a.length; i; ) a[--i]();
    }
    function kn(t) {
      return new k(qt, !1, t);
    }
    function Mt(t, a) {
      var i = ue;
      return function() {
        var c = Qt(), p = ue;
        try {
          return Wn(i, !0), t.apply(this, arguments);
        } catch (h) {
          a && a(h);
        } finally {
          Wn(p, !1), c && on();
        }
      };
    }
    j(k.prototype, { then: de, _then: function(t, a) {
      ze(this, new ye(null, null, t, a, ue));
    }, catch: function(t) {
      if (arguments.length === 1) return this.then(null, t);
      var a = t, i = arguments[1];
      return typeof a == "function" ? this.then(null, function(c) {
        return (c instanceof a ? i : kn)(c);
      }) : this.then(null, function(c) {
        return (c && c.name === a ? i : kn)(c);
      });
    }, finally: function(t) {
      return this.then(function(a) {
        return k.resolve(t()).then(function() {
          return a;
        });
      }, function(a) {
        return k.resolve(t()).then(function() {
          return kn(a);
        });
      });
    }, timeout: function(t, a) {
      var i = this;
      return t < 1 / 0 ? new k(function(c, p) {
        var h = setTimeout(function() {
          return p(new ve.Timeout(a));
        }, t);
        i.then(c, p).finally(clearTimeout.bind(null, h));
      }) : this;
    } }), typeof Symbol < "u" && Symbol.toStringTag && we(k.prototype, Symbol.toStringTag, "Dexie.Promise"), Lt.env = Hr(), j(k, { all: function() {
      var t = je.apply(null, arguments).map(ha);
      return new k(function(a, i) {
        t.length === 0 && a([]);
        var c = t.length;
        t.forEach(function(p, h) {
          return k.resolve(p).then(function(v) {
            t[h] = v, --c || a(t);
          }, i);
        });
      });
    }, resolve: function(t) {
      return t instanceof k ? t : t && typeof t.then == "function" ? new k(function(a, i) {
        t.then(a, i);
      }) : new k(qt, !0, t);
    }, reject: kn, race: function() {
      var t = je.apply(null, arguments).map(ha);
      return new k(function(a, i) {
        t.map(function(c) {
          return k.resolve(c).then(a, i);
        });
      });
    }, PSD: { get: function() {
      return ue;
    }, set: function(t) {
      return ue = t;
    } }, totalEchoes: { get: function() {
      return oe;
    } }, newPSD: Cn, usePSD: Kn, scheduler: { get: function() {
      return $t;
    }, set: function(t) {
      $t = t;
    } }, rejectionMapper: { get: function() {
      return Zt;
    }, set: function(t) {
      Zt = t;
    } }, follow: function(t, a) {
      return new k(function(i, c) {
        return Cn(function(p, h) {
          var v = ue;
          v.unhandleds = [], v.onunhandled = h, v.finalize = ne(function() {
            var x, A = this;
            x = function() {
              A.unhandleds.length === 0 ? p() : h(A.unhandleds[0]);
            }, g.push(function E() {
              x(), g.splice(g.indexOf(E), 1);
            }), ++tn, $t(function() {
              --tn == 0 && Dn();
            }, []);
          }, v.finalize), t();
        }, a, i, c);
      });
    } }), Se && (Se.allSettled && we(k, "allSettled", function() {
      var t = je.apply(null, arguments).map(ha);
      return new k(function(a) {
        t.length === 0 && a([]);
        var i = t.length, c = new Array(i);
        t.forEach(function(p, h) {
          return k.resolve(p).then(function(v) {
            return c[h] = { status: "fulfilled", value: v };
          }, function(v) {
            return c[h] = { status: "rejected", reason: v };
          }).then(function() {
            return --i || a(c);
          });
        });
      });
    }), Se.any && typeof AggregateError < "u" && we(k, "any", function() {
      var t = je.apply(null, arguments).map(ha);
      return new k(function(a, i) {
        t.length === 0 && i(new AggregateError([]));
        var c = t.length, p = new Array(c);
        t.forEach(function(h, v) {
          return k.resolve(h).then(function(x) {
            return a(x);
          }, function(x) {
            p[v] = x, --c || i(new AggregateError(p));
          });
        });
      });
    }), Se.withResolvers && (k.withResolvers = Se.withResolvers));
    var Vt = { awaits: 0, echoes: 0, id: 0 }, jr = 0, xn = [], Da = 0, oe = 0, Kr = 0;
    function Cn(t, a, i, c) {
      var p = ue, h = Object.create(p);
      return h.parent = p, h.ref = 0, h.global = !1, h.id = ++Kr, Lt.env, h.env = pt ? { Promise: k, PromiseProp: { value: k, configurable: !0, writable: !0 }, all: k.all, race: k.race, allSettled: k.allSettled, any: k.any, resolve: k.resolve, reject: k.reject } : {}, a && T(h, a), ++p.ref, h.finalize = function() {
        --this.parent.ref || this.parent.finalize();
      }, c = Kn(h, t, i, c), h.ref === 0 && h.finalize(), c;
    }
    function On() {
      return Vt.id || (Vt.id = ++jr), ++Vt.awaits, Vt.echoes += pn, Vt.id;
    }
    function Mn() {
      return !!Vt.awaits && (--Vt.awaits == 0 && (Vt.id = 0), Vt.echoes = Vt.awaits * pn, !0);
    }
    function ha(t) {
      return Vt.echoes && t && t.constructor === Se ? (On(), t.then(function(a) {
        return Mn(), a;
      }, function(a) {
        return Mn(), Bt(a);
      })) : t;
    }
    function $r() {
      var t = xn[xn.length - 1];
      xn.pop(), Wn(t, !1);
    }
    function Wn(t, a) {
      var i, c = ue;
      (a ? !Vt.echoes || Da++ && t === ue : !Da || --Da && t === ue) || queueMicrotask(a ? (function(p) {
        ++oe, Vt.echoes && --Vt.echoes != 0 || (Vt.echoes = Vt.awaits = Vt.id = 0), xn.push(ue), Wn(p, !0);
      }).bind(null, t) : $r), t !== ue && (ue = t, c === Lt && (Lt.env = Hr()), pt && (i = Lt.env.Promise, a = t.env, (c.global || t.global) && (Object.defineProperty(m, "Promise", a.PromiseProp), i.all = a.all, i.race = a.race, i.resolve = a.resolve, i.reject = a.reject, a.allSettled && (i.allSettled = a.allSettled), a.any && (i.any = a.any))));
    }
    function Hr() {
      var t = m.Promise;
      return pt ? { Promise: t, PromiseProp: Object.getOwnPropertyDescriptor(m, "Promise"), all: t.all, race: t.race, allSettled: t.allSettled, any: t.any, resolve: t.resolve, reject: t.reject } : {};
    }
    function Kn(t, a, i, c, p) {
      var h = ue;
      try {
        return Wn(t, !0), a(i, c, p);
      } finally {
        Wn(h, !1);
      }
    }
    function Gr(t, a, i, c) {
      return typeof t != "function" ? t : function() {
        var p = ue;
        i && On(), Wn(a, !0);
        try {
          return t.apply(this, arguments);
        } finally {
          Wn(p, !1), c && queueMicrotask(Mn);
        }
      };
    }
    function hr(t) {
      Promise === Se && Vt.echoes === 0 ? Da === 0 ? t() : enqueueNativeMicroTask(t) : setTimeout(t, 0);
    }
    ("" + hn).indexOf("[native code]") === -1 && (On = Mn = C);
    var Bt = k.reject, cn = "￿", Sn = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", gr = "String expected.", na = [], Oa = "__dbnames", fe = "readonly", ga = "readwrite";
    function In(t, a) {
      return t ? a ? function() {
        return t.apply(this, arguments) && a.apply(this, arguments);
      } : t : a;
    }
    var Fe = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
    function qe(t) {
      return typeof t != "string" || /\./.test(t) ? function(a) {
        return a;
      } : function(a) {
        return a[t] === void 0 && t in a && delete (a = Ne(a))[t], a;
      };
    }
    function zr() {
      throw ve.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
    }
    function st(t, a) {
      try {
        var i = Wa(t), c = Wa(a);
        if (i !== c) return i === "Array" ? 1 : c === "Array" ? -1 : i === "binary" ? 1 : c === "binary" ? -1 : i === "string" ? 1 : c === "string" ? -1 : i === "Date" ? 1 : c !== "Date" ? NaN : -1;
        switch (i) {
          case "number":
          case "Date":
          case "string":
            return a < t ? 1 : t < a ? -1 : 0;
          case "binary":
            return function(p, h) {
              for (var v = p.length, x = h.length, A = v < x ? v : x, E = 0; E < A; ++E) if (p[E] !== h[E]) return p[E] < h[E] ? -1 : 1;
              return v === x ? 0 : v < x ? -1 : 1;
            }(ma(t), ma(a));
          case "Array":
            return function(p, h) {
              for (var v = p.length, x = h.length, A = v < x ? v : x, E = 0; E < A; ++E) {
                var F = st(p[E], h[E]);
                if (F !== 0) return F;
              }
              return v === x ? 0 : v < x ? -1 : 1;
            }(t, a);
        }
      } catch {
      }
      return NaN;
    }
    function Wa(t) {
      var a = typeof t;
      return a != "object" ? a : ArrayBuffer.isView(t) ? "binary" : (t = Be(t), t === "ArrayBuffer" ? "binary" : t);
    }
    function ma(t) {
      return t instanceof Uint8Array ? t : ArrayBuffer.isView(t) ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : new Uint8Array(t);
    }
    function aa(t, a, i) {
      var c = t.schema.yProps;
      return c ? (a && 0 < i.numFailures && (a = a.filter(function(p, h) {
        return !i.failures[h];
      })), Promise.all(c.map(function(p) {
        return p = p.updatesTable, a ? t.db.table(p).where("k").anyOf(a).delete() : t.db.table(p).clear();
      })).then(function() {
        return i;
      })) : i;
    }
    var Bn = (mr.prototype.execute = function(t) {
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
        var c = a.remove;
        if (I(c)) return I(t) ? t.filter(function(p) {
          return !c.includes(p);
        }).sort() : [];
        if (typeof c == "number") return Number(t) - c;
        if (typeof c == "bigint") try {
          return BigInt(t) - c;
        } catch {
          return BigInt(0) - c;
        }
        throw new TypeError("Invalid subtrahend ".concat(c));
      }
      return i = (i = a.replacePrefix) === null || i === void 0 ? void 0 : i[0], i && typeof t == "string" && t.startsWith(i) ? a.replacePrefix[1] + t.substring(i.length) : t;
    }, mr);
    function mr(t) {
      this["@@propmod"] = t;
    }
    function qr(t, a) {
      for (var i = P(a), c = i.length, p = !1, h = 0; h < c; ++h) {
        var v = i[h], x = a[v], A = ie(t, v);
        x instanceof Bn ? (se(t, v, x.execute(A)), p = !0) : A !== x && (se(t, v, x), p = !0);
      }
      return p;
    }
    var wr = (St.prototype._trans = function(t, a, i) {
      var c = this._tx || ue.trans, p = this.name, h = _e && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(t === "readonly" ? "read" : "write", " ").concat(this.name));
      function v(E, F, M) {
        if (!M.schema[p]) throw new ve.NotFound("Table " + p + " not part of transaction");
        return a(M.idbtrans, M);
      }
      var x = Qt();
      try {
        var A = c && c.db._novip === this.db._novip ? c === ue.trans ? c._promise(t, v, i) : Cn(function() {
          return c._promise(t, v, i);
        }, { trans: c, transless: ue.transless || ue }) : function E(F, M, B, _) {
          if (F.idbdb && (F._state.openComplete || ue.letThrough || F._vip)) {
            var O = F._createTransaction(M, B, F._dbSchema);
            try {
              O.create(), F._state.PR1398_maxLoop = 3;
            } catch (D) {
              return D.name === Le.InvalidState && F.isOpen() && 0 < --F._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), F.close({ disableAutoOpen: !1 }), F.open().then(function() {
                return E(F, M, B, _);
              })) : Bt(D);
            }
            return O._promise(M, function(D, L) {
              return Cn(function() {
                return ue.trans = O, _(D, L, O);
              });
            }).then(function(D) {
              if (M === "readwrite") try {
                O.idbtrans.commit();
              } catch {
              }
              return M === "readonly" ? D : O._completion.then(function() {
                return D;
              });
            });
          }
          if (F._state.openComplete) return Bt(new ve.DatabaseClosed(F._state.dbOpenError));
          if (!F._state.isBeingOpened) {
            if (!F._state.autoOpen) return Bt(new ve.DatabaseClosed());
            F.open().catch(C);
          }
          return F._state.dbReadyPromise.then(function() {
            return E(F, M, B, _);
          });
        }(this.db, t, [this.name], v);
        return h && (A._consoleTask = h, A = A.catch(function(E) {
          return console.trace(E), Bt(E);
        })), A;
      } finally {
        x && on();
      }
    }, St.prototype.get = function(t, a) {
      var i = this;
      return t && t.constructor === Object ? this.where(t).first(a) : t == null ? Bt(new ve.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(c) {
        return i.core.get({ trans: c, key: t }).then(function(p) {
          return i.hook.reading.fire(p);
        });
      }).then(a);
    }, St.prototype.where = function(t) {
      if (typeof t == "string") return new this.db.WhereClause(this, t);
      if (I(t)) return new this.db.WhereClause(this, "[".concat(t.join("+"), "]"));
      var a = P(t);
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
      if (i && this.db._maxKey !== cn) {
        var h = i.keyPath.slice(0, a.length);
        return this.where(h).equals(h.map(function(A) {
          return t[A];
        }));
      }
      !i && _e && console.warn("The query ".concat(JSON.stringify(t), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(a.join("+"), "]"));
      var c = this.schema.idxByName;
      function p(x, A) {
        return st(x, A) === 0;
      }
      var v = a.reduce(function(M, A) {
        var E = M[0], F = M[1], M = c[A], B = t[A];
        return [E || M, E || !M ? In(F, M && M.multi ? function(_) {
          return _ = ie(_, A), I(_) && _.some(function(O) {
            return p(B, O);
          });
        } : function(_) {
          return p(B, ie(_, A));
        }) : F];
      }, [null, null]), h = v[0], v = v[1];
      return h ? this.where(h.name).equals(t[h.keyPath]).filter(v) : i ? this.filter(v) : this.where(a).equals("");
    }, St.prototype.filter = function(t) {
      return this.toCollection().and(t);
    }, St.prototype.count = function(t) {
      return this.toCollection().count(t);
    }, St.prototype.offset = function(t) {
      return this.toCollection().offset(t);
    }, St.prototype.limit = function(t) {
      return this.toCollection().limit(t);
    }, St.prototype.each = function(t) {
      return this.toCollection().each(t);
    }, St.prototype.toArray = function(t) {
      return this.toCollection().toArray(t);
    }, St.prototype.toCollection = function() {
      return new this.db.Collection(new this.db.WhereClause(this));
    }, St.prototype.orderBy = function(t) {
      return new this.db.Collection(new this.db.WhereClause(this, I(t) ? "[".concat(t.join("+"), "]") : t));
    }, St.prototype.reverse = function() {
      return this.toCollection().reverse();
    }, St.prototype.mapToClass = function(t) {
      var a, i = this.db, c = this.name;
      function p() {
        return a !== null && a.apply(this, arguments) || this;
      }
      (this.schema.mappedClass = t).prototype instanceof zr && (function(A, E) {
        if (typeof E != "function" && E !== null) throw new TypeError("Class extends value " + String(E) + " is not a constructor or null");
        function F() {
          this.constructor = A;
        }
        u(A, E), A.prototype = E === null ? Object.create(E) : (F.prototype = E.prototype, new F());
      }(p, a = t), Object.defineProperty(p.prototype, "db", { get: function() {
        return i;
      }, enumerable: !1, configurable: !0 }), p.prototype.table = function() {
        return c;
      }, t = p);
      for (var h = /* @__PURE__ */ new Set(), v = t.prototype; v; v = U(v)) Object.getOwnPropertyNames(v).forEach(function(A) {
        return h.add(A);
      });
      function x(A) {
        if (!A) return A;
        var E, F = Object.create(t.prototype);
        for (E in A) if (!h.has(E)) try {
          F[E] = A[E];
        } catch {
        }
        return F;
      }
      return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = x, this.hook("reading", x), t;
    }, St.prototype.defineClass = function() {
      return this.mapToClass(function(t) {
        T(this, t);
      });
    }, St.prototype.add = function(t, a) {
      var i = this, c = this.schema.primKey, p = c.auto, h = c.keyPath, v = t;
      return h && p && (v = qe(h)(t)), this._trans("readwrite", function(x) {
        return i.core.mutate({ trans: x, type: "add", keys: a != null ? [a] : null, values: [v] });
      }).then(function(x) {
        return x.numFailures ? k.reject(x.failures[0]) : x.lastResult;
      }).then(function(x) {
        if (h) try {
          se(t, h, x);
        } catch {
        }
        return x;
      });
    }, St.prototype.upsert = function(t, a) {
      var i = this, c = this.schema.primKey.keyPath;
      return this._trans("readwrite", function(p) {
        return i.core.get({ trans: p, key: t }).then(function(h) {
          var v = h ?? {};
          return qr(v, a), c && se(v, c, t), i.core.mutate({ trans: p, type: "put", values: [v], keys: [t], upsert: !0, updates: { keys: [t], changeSpecs: [a] } }).then(function(x) {
            return x.numFailures ? k.reject(x.failures[0]) : !!h;
          });
        });
      });
    }, St.prototype.update = function(t, a) {
      return typeof t != "object" || I(t) ? this.where(":id").equals(t).modify(a) : (t = ie(t, this.schema.primKey.keyPath), t === void 0 ? Bt(new ve.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(t).modify(a));
    }, St.prototype.put = function(t, a) {
      var i = this, c = this.schema.primKey, p = c.auto, h = c.keyPath, v = t;
      return h && p && (v = qe(h)(t)), this._trans("readwrite", function(x) {
        return i.core.mutate({ trans: x, type: "put", values: [v], keys: a != null ? [a] : null });
      }).then(function(x) {
        return x.numFailures ? k.reject(x.failures[0]) : x.lastResult;
      }).then(function(x) {
        if (h) try {
          se(t, h, x);
        } catch {
        }
        return x;
      });
    }, St.prototype.delete = function(t) {
      var a = this;
      return this._trans("readwrite", function(i) {
        return a.core.mutate({ trans: i, type: "delete", keys: [t] }).then(function(c) {
          return aa(a, [t], c);
        }).then(function(c) {
          return c.numFailures ? k.reject(c.failures[0]) : void 0;
        });
      });
    }, St.prototype.clear = function() {
      var t = this;
      return this._trans("readwrite", function(a) {
        return t.core.mutate({ trans: a, type: "deleteRange", range: Fe }).then(function(i) {
          return aa(t, null, i);
        });
      }).then(function(a) {
        return a.numFailures ? k.reject(a.failures[0]) : void 0;
      });
    }, St.prototype.bulkGet = function(t) {
      var a = this;
      return this._trans("readonly", function(i) {
        return a.core.getMany({ keys: t, trans: i }).then(function(c) {
          return c.map(function(p) {
            return a.hook.reading.fire(p);
          });
        });
      });
    }, St.prototype.bulkAdd = function(t, a, i) {
      var c = this, p = Array.isArray(a) ? a : void 0, h = (i = i || (p ? void 0 : a)) ? i.allKeys : void 0;
      return this._trans("readwrite", function(v) {
        var E = c.schema.primKey, x = E.auto, E = E.keyPath;
        if (E && p) throw new ve.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
        if (p && p.length !== t.length) throw new ve.InvalidArgument("Arguments objects and keys must have the same length");
        var A = t.length, E = E && x ? t.map(qe(E)) : t;
        return c.core.mutate({ trans: v, type: "add", keys: p, values: E, wantResults: h }).then(function(O) {
          var M = O.numFailures, B = O.results, _ = O.lastResult, O = O.failures;
          if (M === 0) return h ? B : _;
          throw new et("".concat(c.name, ".bulkAdd(): ").concat(M, " of ").concat(A, " operations failed"), O);
        });
      });
    }, St.prototype.bulkPut = function(t, a, i) {
      var c = this, p = Array.isArray(a) ? a : void 0, h = (i = i || (p ? void 0 : a)) ? i.allKeys : void 0;
      return this._trans("readwrite", function(v) {
        var E = c.schema.primKey, x = E.auto, E = E.keyPath;
        if (E && p) throw new ve.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
        if (p && p.length !== t.length) throw new ve.InvalidArgument("Arguments objects and keys must have the same length");
        var A = t.length, E = E && x ? t.map(qe(E)) : t;
        return c.core.mutate({ trans: v, type: "put", keys: p, values: E, wantResults: h }).then(function(O) {
          var M = O.numFailures, B = O.results, _ = O.lastResult, O = O.failures;
          if (M === 0) return h ? B : _;
          throw new et("".concat(c.name, ".bulkPut(): ").concat(M, " of ").concat(A, " operations failed"), O);
        });
      });
    }, St.prototype.bulkUpdate = function(t) {
      var a = this, i = this.core, c = t.map(function(v) {
        return v.key;
      }), p = t.map(function(v) {
        return v.changes;
      }), h = [];
      return this._trans("readwrite", function(v) {
        return i.getMany({ trans: v, keys: c, cache: "clone" }).then(function(x) {
          var A = [], E = [];
          t.forEach(function(M, B) {
            var _ = M.key, O = M.changes, D = x[B];
            if (D) {
              for (var L = 0, K = Object.keys(O); L < K.length; L++) {
                var H = K[L], Q = O[H];
                if (H === a.schema.primKey.keyPath) {
                  if (st(Q, _) !== 0) throw new ve.Constraint("Cannot update primary key in bulkUpdate()");
                } else se(D, H, Q);
              }
              h.push(B), A.push(_), E.push(D);
            }
          });
          var F = A.length;
          return i.mutate({ trans: v, type: "put", keys: A, values: E, updates: { keys: c, changeSpecs: p } }).then(function(M) {
            var B = M.numFailures, _ = M.failures;
            if (B === 0) return F;
            for (var O = 0, D = Object.keys(_); O < D.length; O++) {
              var L, K = D[O], H = h[Number(K)];
              H != null && (L = _[K], delete _[K], _[H] = L);
            }
            throw new et("".concat(a.name, ".bulkUpdate(): ").concat(B, " of ").concat(F, " operations failed"), _);
          });
        });
      });
    }, St.prototype.bulkDelete = function(t) {
      var a = this, i = t.length;
      return this._trans("readwrite", function(c) {
        return a.core.mutate({ trans: c, type: "delete", keys: t }).then(function(p) {
          return aa(a, t, p);
        });
      }).then(function(v) {
        var p = v.numFailures, h = v.lastResult, v = v.failures;
        if (p === 0) return h;
        throw new et("".concat(a.name, ".bulkDelete(): ").concat(p, " of ").concat(i, " operations failed"), v);
      });
    }, St);
    function St() {
    }
    function wa(t) {
      function a(v, x) {
        if (x) {
          for (var A = arguments.length, E = new Array(A - 1); --A; ) E[A - 1] = arguments[A];
          return i[v].subscribe.apply(null, E), t;
        }
        if (typeof v == "string") return i[v];
      }
      var i = {};
      a.addEventType = h;
      for (var c = 1, p = arguments.length; c < p; ++c) h(arguments[c]);
      return a;
      function h(v, x, A) {
        if (typeof v != "object") {
          var E;
          x = x || bt;
          var F = { subscribers: [], fire: A = A || C, subscribe: function(M) {
            F.subscribers.indexOf(M) === -1 && (F.subscribers.push(M), F.fire = x(F.fire, M));
          }, unsubscribe: function(M) {
            F.subscribers = F.subscribers.filter(function(B) {
              return B !== M;
            }), F.fire = F.subscribers.reduce(x, A);
          } };
          return i[v] = a[v] = F;
        }
        P(E = v).forEach(function(M) {
          var B = E[M];
          if (I(B)) h(M, E[M][0], E[M][1]);
          else {
            if (B !== "asap") throw new ve.InvalidArgument("Invalid event config");
            var _ = h(M, G, function() {
              for (var O = arguments.length, D = new Array(O); O--; ) D[O] = arguments[O];
              _.subscribers.forEach(function(L) {
                Me(function() {
                  L.apply(null, D);
                });
              });
            });
          }
        });
      }
    }
    function ya(t, a) {
      return ge(a).from({ prototype: t }), a;
    }
    function $n(t, a) {
      return !(t.filter || t.algorithm || t.or) && (a ? t.justLimit : !t.replayFilter);
    }
    function Hn(t, a) {
      t.filter = In(t.filter, a);
    }
    function ba(t, a, i) {
      var c = t.replayFilter;
      t.replayFilter = c ? function() {
        return In(c(), a());
      } : a, t.justLimit = i && !c;
    }
    function ra(t, a) {
      if (t.isPrimKey) return a.primaryKey;
      var i = a.getIndexByKeyPath(t.index);
      if (!i) throw new ve.Schema("KeyPath " + t.index + " on object store " + a.name + " is not indexed");
      return i;
    }
    function va(t, a, i) {
      var c = ra(t, a.schema);
      return a.openCursor({ trans: i, values: !t.keysOnly, reverse: t.dir === "prev", unique: !!t.unique, query: { index: c, range: t.range } });
    }
    function Gn(t, a, i, c) {
      var p = t.replayFilter ? In(t.filter, t.replayFilter()) : t.filter;
      if (t.or) {
        var h = {}, v = function(x, A, E) {
          var F, M;
          p && !p(A, E, function(B) {
            return A.stop(B);
          }, function(B) {
            return A.fail(B);
          }) || ((M = "" + (F = A.primaryKey)) == "[object ArrayBuffer]" && (M = "" + new Uint8Array(F)), ee(h, M) || (h[M] = !0, a(x, A, E)));
        };
        return Promise.all([t.or._iterate(v, i), Jr(va(t, c, i), t.algorithm, v, !t.keysOnly && t.valueMapper)]);
      }
      return Jr(va(t, c, i), In(t.algorithm, p), a, !t.keysOnly && t.valueMapper);
    }
    function Jr(t, a, i, c) {
      var p = Mt(c ? function(h, v, x) {
        return i(c(h), v, x);
      } : i);
      return t.then(function(h) {
        if (h) return h.start(function() {
          var v = function() {
            return h.continue();
          };
          a && !a(h, function(x) {
            return v = x;
          }, function(x) {
            h.stop(x), v = C;
          }, function(x) {
            h.fail(x), v = C;
          }) || p(h.value, h, function(x) {
            return v = x;
          }), v();
        });
      });
    }
    var yr = (Ke.prototype._read = function(t, a) {
      var i = this._ctx;
      return i.error ? i.table._trans(null, Bt.bind(null, i.error)) : i.table._trans("readonly", t).then(a);
    }, Ke.prototype._write = function(t) {
      var a = this._ctx;
      return a.error ? a.table._trans(null, Bt.bind(null, a.error)) : a.table._trans("readwrite", t, "locked");
    }, Ke.prototype._addAlgorithm = function(t) {
      var a = this._ctx;
      a.algorithm = In(a.algorithm, t);
    }, Ke.prototype._iterate = function(t, a) {
      return Gn(this._ctx, t, a, this._ctx.table.core);
    }, Ke.prototype.clone = function(t) {
      var a = Object.create(this.constructor.prototype), i = Object.create(this._ctx);
      return t && T(i, t), a._ctx = i, a;
    }, Ke.prototype.raw = function() {
      return this._ctx.valueMapper = null, this;
    }, Ke.prototype.each = function(t) {
      var a = this._ctx;
      return this._read(function(i) {
        return Gn(a, t, i, a.table.core);
      });
    }, Ke.prototype.count = function(t) {
      var a = this;
      return this._read(function(i) {
        var c = a._ctx, p = c.table.core;
        if ($n(c, !0)) return p.count({ trans: i, query: { index: ra(c, p.schema), range: c.range } }).then(function(v) {
          return Math.min(v, c.limit);
        });
        var h = 0;
        return Gn(c, function() {
          return ++h, !1;
        }, i, p).then(function() {
          return h;
        });
      }).then(t);
    }, Ke.prototype.sortBy = function(t, a) {
      var i = t.split(".").reverse(), c = i[0], p = i.length - 1;
      function h(A, E) {
        return E ? h(A[i[E]], E - 1) : A[c];
      }
      var v = this._ctx.dir === "next" ? 1 : -1;
      function x(A, E) {
        return st(h(A, p), h(E, p)) * v;
      }
      return this.toArray(function(A) {
        return A.sort(x);
      }).then(a);
    }, Ke.prototype.toArray = function(t) {
      var a = this;
      return this._read(function(i) {
        var c = a._ctx;
        if (c.dir === "next" && $n(c, !0) && 0 < c.limit) {
          var p = c.valueMapper, h = ra(c, c.table.core.schema);
          return c.table.core.query({ trans: i, limit: c.limit, values: !0, query: { index: h, range: c.range } }).then(function(x) {
            return x = x.result, p ? x.map(p) : x;
          });
        }
        var v = [];
        return Gn(c, function(x) {
          return v.push(x);
        }, i, c.table.core).then(function() {
          return v;
        });
      }, t);
    }, Ke.prototype.offset = function(t) {
      var a = this._ctx;
      return t <= 0 || (a.offset += t, $n(a) ? ba(a, function() {
        var i = t;
        return function(c, p) {
          return i === 0 || (i === 1 ? --i : p(function() {
            c.advance(i), i = 0;
          }), !1);
        };
      }) : ba(a, function() {
        var i = t;
        return function() {
          return --i < 0;
        };
      })), this;
    }, Ke.prototype.limit = function(t) {
      return this._ctx.limit = Math.min(this._ctx.limit, t), ba(this._ctx, function() {
        var a = t;
        return function(i, c, p) {
          return --a <= 0 && c(p), 0 <= a;
        };
      }, !0), this;
    }, Ke.prototype.until = function(t, a) {
      return Hn(this._ctx, function(i, c, p) {
        return !t(i.value) || (c(p), a);
      }), this;
    }, Ke.prototype.first = function(t) {
      return this.limit(1).toArray(function(a) {
        return a[0];
      }).then(t);
    }, Ke.prototype.last = function(t) {
      return this.reverse().first(t);
    }, Ke.prototype.filter = function(t) {
      var a;
      return Hn(this._ctx, function(i) {
        return t(i.value);
      }), (a = this._ctx).isMatch = In(a.isMatch, t), this;
    }, Ke.prototype.and = function(t) {
      return this.filter(t);
    }, Ke.prototype.or = function(t) {
      return new this.db.WhereClause(this._ctx.table, t, this);
    }, Ke.prototype.reverse = function() {
      return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
    }, Ke.prototype.desc = function() {
      return this.reverse();
    }, Ke.prototype.eachKey = function(t) {
      var a = this._ctx;
      return a.keysOnly = !a.isMatch, this.each(function(i, c) {
        t(c.key, c);
      });
    }, Ke.prototype.eachUniqueKey = function(t) {
      return this._ctx.unique = "unique", this.eachKey(t);
    }, Ke.prototype.eachPrimaryKey = function(t) {
      var a = this._ctx;
      return a.keysOnly = !a.isMatch, this.each(function(i, c) {
        t(c.primaryKey, c);
      });
    }, Ke.prototype.keys = function(t) {
      var a = this._ctx;
      a.keysOnly = !a.isMatch;
      var i = [];
      return this.each(function(c, p) {
        i.push(p.key);
      }).then(function() {
        return i;
      }).then(t);
    }, Ke.prototype.primaryKeys = function(t) {
      var a = this._ctx;
      if (a.dir === "next" && $n(a, !0) && 0 < a.limit) return this._read(function(c) {
        var p = ra(a, a.table.core.schema);
        return a.table.core.query({ trans: c, values: !1, limit: a.limit, query: { index: p, range: a.range } });
      }).then(function(c) {
        return c.result;
      }).then(t);
      a.keysOnly = !a.isMatch;
      var i = [];
      return this.each(function(c, p) {
        i.push(p.primaryKey);
      }).then(function() {
        return i;
      }).then(t);
    }, Ke.prototype.uniqueKeys = function(t) {
      return this._ctx.unique = "unique", this.keys(t);
    }, Ke.prototype.firstKey = function(t) {
      return this.limit(1).keys(function(a) {
        return a[0];
      }).then(t);
    }, Ke.prototype.lastKey = function(t) {
      return this.reverse().firstKey(t);
    }, Ke.prototype.distinct = function() {
      var t = this._ctx, t = t.index && t.table.schema.idxByName[t.index];
      if (!t || !t.multi) return this;
      var a = {};
      return Hn(this._ctx, function(p) {
        var c = p.primaryKey.toString(), p = ee(a, c);
        return a[c] = !0, !p;
      }), this;
    }, Ke.prototype.modify = function(t) {
      var a = this, i = this._ctx;
      return this._write(function(c) {
        var p = typeof t == "function" ? t : function(D) {
          return qr(D, t);
        }, h = i.table.core, E = h.schema.primaryKey, v = E.outbound, x = E.extractKey, A = 200, E = a.db._options.modifyChunkSize;
        E && (A = typeof E == "object" ? E[h.name] || E["*"] || 200 : E);
        function F(D, H) {
          var K = H.failures, H = H.numFailures;
          B += D - H;
          for (var Q = 0, re = P(K); Q < re.length; Q++) {
            var he = re[Q];
            M.push(K[he]);
          }
        }
        var M = [], B = 0, _ = [], O = t === oa;
        return a.clone().primaryKeys().then(function(D) {
          function L(H) {
            var Q = Math.min(A, D.length - H), re = D.slice(H, H + Q);
            return (O ? Promise.resolve([]) : h.getMany({ trans: c, keys: re, cache: "immutable" })).then(function(he) {
              var be = [], pe = [], me = v ? [] : null, ke = O ? re : [];
              if (!O) for (var $ = 0; $ < Q; ++$) {
                var Ie = he[$], Ze = { value: Ne(Ie), primKey: D[H + $] };
                p.call(Ze, Ze.value, Ze) !== !1 && (Ze.value == null ? ke.push(D[H + $]) : v || st(x(Ie), x(Ze.value)) === 0 ? (pe.push(Ze.value), v && me.push(D[H + $])) : (ke.push(D[H + $]), be.push(Ze.value)));
              }
              return Promise.resolve(0 < be.length && h.mutate({ trans: c, type: "add", values: be }).then(function(nt) {
                for (var ot in nt.failures) ke.splice(parseInt(ot), 1);
                F(be.length, nt);
              })).then(function() {
                return (0 < pe.length || K && typeof t == "object") && h.mutate({ trans: c, type: "put", keys: me, values: pe, criteria: K, changeSpec: typeof t != "function" && t, isAdditionalChunk: 0 < H }).then(function(nt) {
                  return F(pe.length, nt);
                });
              }).then(function() {
                return (0 < ke.length || K && O) && h.mutate({ trans: c, type: "delete", keys: ke, criteria: K, isAdditionalChunk: 0 < H }).then(function(nt) {
                  return aa(i.table, ke, nt);
                }).then(function(nt) {
                  return F(ke.length, nt);
                });
              }).then(function() {
                return D.length > H + Q && L(H + A);
              });
            });
          }
          var K = $n(i) && i.limit === 1 / 0 && (typeof t != "function" || O) && { index: i.index, range: i.range };
          return L(0).then(function() {
            if (0 < M.length) throw new Ye("Error modifying one or more objects", M, B, _);
            return D.length;
          });
        });
      });
    }, Ke.prototype.delete = function() {
      var t = this._ctx, a = t.range;
      return !$n(t) || t.table.schema.yProps || !t.isPrimKey && a.type !== 3 ? this.modify(oa) : this._write(function(i) {
        var c = t.table.core.schema.primaryKey, p = a;
        return t.table.core.count({ trans: i, query: { index: c, range: p } }).then(function(h) {
          return t.table.core.mutate({ trans: i, type: "deleteRange", range: p }).then(function(A) {
            var x = A.failures, A = A.numFailures;
            if (A) throw new Ye("Could not delete some values", Object.keys(x).map(function(E) {
              return x[E];
            }), h - A);
            return h - A;
          });
        });
      });
    }, Ke);
    function Ke() {
    }
    var oa = function(t, a) {
      return a.value = null;
    };
    function Yr(t, a) {
      return t < a ? -1 : t === a ? 0 : 1;
    }
    function Zr(t, a) {
      return a < t ? -1 : t === a ? 0 : 1;
    }
    function nn(t, a, i) {
      return t = t instanceof ia ? new t.Collection(t) : t, t._ctx.error = new (i || TypeError)(a), t;
    }
    function gn(t) {
      return new t.Collection(t, function() {
        return An("");
      }).limit(0);
    }
    function mn(t, a, i, c) {
      var p, h, v, x, A, E, F, M = i.length;
      if (!i.every(function(O) {
        return typeof O == "string";
      })) return nn(t, gr);
      function B(O) {
        p = O === "next" ? function(L) {
          return L.toUpperCase();
        } : function(L) {
          return L.toLowerCase();
        }, h = O === "next" ? function(L) {
          return L.toLowerCase();
        } : function(L) {
          return L.toUpperCase();
        }, v = O === "next" ? Yr : Zr;
        var D = i.map(function(L) {
          return { lower: h(L), upper: p(L) };
        }).sort(function(L, K) {
          return v(L.lower, K.lower);
        });
        x = D.map(function(L) {
          return L.upper;
        }), A = D.map(function(L) {
          return L.lower;
        }), F = (E = O) === "next" ? "" : c;
      }
      B("next"), t = new t.Collection(t, function() {
        return Gt(x[0], A[M - 1] + c);
      }), t._ondirectionchange = function(O) {
        B(O);
      };
      var _ = 0;
      return t._addAlgorithm(function(O, D, L) {
        var K = O.key;
        if (typeof K != "string") return !1;
        var H = h(K);
        if (a(H, A, _)) return !0;
        for (var Q = null, re = _; re < M; ++re) {
          var he = function(be, pe, me, ke, $, Ie) {
            for (var Ze = Math.min(be.length, ke.length), nt = -1, ot = 0; ot < Ze; ++ot) {
              var rn = pe[ot];
              if (rn !== ke[ot]) return $(be[ot], me[ot]) < 0 ? be.substr(0, ot) + me[ot] + me.substr(ot + 1) : $(be[ot], ke[ot]) < 0 ? be.substr(0, ot) + ke[ot] + me.substr(ot + 1) : 0 <= nt ? be.substr(0, nt) + pe[nt] + me.substr(nt + 1) : null;
              $(be[ot], rn) < 0 && (nt = ot);
            }
            return Ze < ke.length && Ie === "next" ? be + me.substr(be.length) : Ze < be.length && Ie === "prev" ? be.substr(0, me.length) : nt < 0 ? null : be.substr(0, nt) + ke[nt] + me.substr(nt + 1);
          }(K, H, x[re], A[re], v, E);
          he === null && Q === null ? _ = re + 1 : (Q === null || 0 < v(Q, he)) && (Q = he);
        }
        return D(Q !== null ? function() {
          O.continue(Q + F);
        } : L), !1;
      }), t;
    }
    function Gt(t, a, i, c) {
      return { type: 2, lower: t, upper: a, lowerOpen: i, upperOpen: c };
    }
    function An(t) {
      return { type: 1, lower: t, upper: t };
    }
    var ia = (Object.defineProperty(It.prototype, "Collection", { get: function() {
      return this._ctx.table.db.Collection;
    }, enumerable: !1, configurable: !0 }), It.prototype.between = function(t, a, i, c) {
      i = i !== !1, c = c === !0;
      try {
        return 0 < this._cmp(t, a) || this._cmp(t, a) === 0 && (i || c) && (!i || !c) ? gn(this) : new this.Collection(this, function() {
          return Gt(t, a, !i, !c);
        });
      } catch {
        return nn(this, Sn);
      }
    }, It.prototype.equals = function(t) {
      return t == null ? nn(this, Sn) : new this.Collection(this, function() {
        return An(t);
      });
    }, It.prototype.above = function(t) {
      return t == null ? nn(this, Sn) : new this.Collection(this, function() {
        return Gt(t, void 0, !0);
      });
    }, It.prototype.aboveOrEqual = function(t) {
      return t == null ? nn(this, Sn) : new this.Collection(this, function() {
        return Gt(t, void 0, !1);
      });
    }, It.prototype.below = function(t) {
      return t == null ? nn(this, Sn) : new this.Collection(this, function() {
        return Gt(void 0, t, !1, !0);
      });
    }, It.prototype.belowOrEqual = function(t) {
      return t == null ? nn(this, Sn) : new this.Collection(this, function() {
        return Gt(void 0, t);
      });
    }, It.prototype.startsWith = function(t) {
      return typeof t != "string" ? nn(this, gr) : this.between(t, t + cn, !0, !0);
    }, It.prototype.startsWithIgnoreCase = function(t) {
      return t === "" ? this.startsWith(t) : mn(this, function(a, i) {
        return a.indexOf(i[0]) === 0;
      }, [t], cn);
    }, It.prototype.equalsIgnoreCase = function(t) {
      return mn(this, function(a, i) {
        return a === i[0];
      }, [t], "");
    }, It.prototype.anyOfIgnoreCase = function() {
      var t = je.apply(ht, arguments);
      return t.length === 0 ? gn(this) : mn(this, function(a, i) {
        return i.indexOf(a) !== -1;
      }, t, "");
    }, It.prototype.startsWithAnyOfIgnoreCase = function() {
      var t = je.apply(ht, arguments);
      return t.length === 0 ? gn(this) : mn(this, function(a, i) {
        return i.some(function(c) {
          return a.indexOf(c) === 0;
        });
      }, t, cn);
    }, It.prototype.anyOf = function() {
      var t = this, a = je.apply(ht, arguments), i = this._cmp;
      try {
        a.sort(i);
      } catch {
        return nn(this, Sn);
      }
      if (a.length === 0) return gn(this);
      var c = new this.Collection(this, function() {
        return Gt(a[0], a[a.length - 1]);
      });
      c._ondirectionchange = function(h) {
        i = h === "next" ? t._ascending : t._descending, a.sort(i);
      };
      var p = 0;
      return c._addAlgorithm(function(h, v, x) {
        for (var A = h.key; 0 < i(A, a[p]); ) if (++p === a.length) return v(x), !1;
        return i(A, a[p]) === 0 || (v(function() {
          h.continue(a[p]);
        }), !1);
      }), c;
    }, It.prototype.notEqual = function(t) {
      return this.inAnyRange([[-1 / 0, t], [t, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
    }, It.prototype.noneOf = function() {
      var t = je.apply(ht, arguments);
      if (t.length === 0) return new this.Collection(this);
      try {
        t.sort(this._ascending);
      } catch {
        return nn(this, Sn);
      }
      var a = t.reduce(function(i, c) {
        return i ? i.concat([[i[i.length - 1][1], c]]) : [[-1 / 0, c]];
      }, null);
      return a.push([t[t.length - 1], this.db._maxKey]), this.inAnyRange(a, { includeLowers: !1, includeUppers: !1 });
    }, It.prototype.inAnyRange = function(K, a) {
      var i = this, c = this._cmp, p = this._ascending, h = this._descending, v = this._min, x = this._max;
      if (K.length === 0) return gn(this);
      if (!K.every(function(H) {
        return H[0] !== void 0 && H[1] !== void 0 && p(H[0], H[1]) <= 0;
      })) return nn(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", ve.InvalidArgument);
      var A = !a || a.includeLowers !== !1, E = a && a.includeUppers === !0, F, M = p;
      function B(H, Q) {
        return M(H[0], Q[0]);
      }
      try {
        (F = K.reduce(function(H, Q) {
          for (var re = 0, he = H.length; re < he; ++re) {
            var be = H[re];
            if (c(Q[0], be[1]) < 0 && 0 < c(Q[1], be[0])) {
              be[0] = v(be[0], Q[0]), be[1] = x(be[1], Q[1]);
              break;
            }
          }
          return re === he && H.push(Q), H;
        }, [])).sort(B);
      } catch {
        return nn(this, Sn);
      }
      var _ = 0, O = E ? function(H) {
        return 0 < p(H, F[_][1]);
      } : function(H) {
        return 0 <= p(H, F[_][1]);
      }, D = A ? function(H) {
        return 0 < h(H, F[_][0]);
      } : function(H) {
        return 0 <= h(H, F[_][0]);
      }, L = O, K = new this.Collection(this, function() {
        return Gt(F[0][0], F[F.length - 1][1], !A, !E);
      });
      return K._ondirectionchange = function(H) {
        M = H === "next" ? (L = O, p) : (L = D, h), F.sort(B);
      }, K._addAlgorithm(function(H, Q, re) {
        for (var he, be = H.key; L(be); ) if (++_ === F.length) return Q(re), !1;
        return !O(he = be) && !D(he) || (i._cmp(be, F[_][1]) === 0 || i._cmp(be, F[_][0]) === 0 || Q(function() {
          M === p ? H.continue(F[_][0]) : H.continue(F[_][1]);
        }), !1);
      }), K;
    }, It.prototype.startsWithAnyOf = function() {
      var t = je.apply(ht, arguments);
      return t.every(function(a) {
        return typeof a == "string";
      }) ? t.length === 0 ? gn(this) : this.inAnyRange(t.map(function(a) {
        return [a, a + cn];
      })) : nn(this, "startsWithAnyOf() only works with strings");
    }, It);
    function It() {
    }
    function At(t) {
      return Mt(function(a) {
        return fn(a), t(a.target.error), !1;
      });
    }
    function fn(t) {
      t.stopPropagation && t.stopPropagation(), t.preventDefault && t.preventDefault();
    }
    var ka = "storagemutated", Et = "x-storagemutated-1", En = wa(null, ka), br = (Pn.prototype._lock = function() {
      return te(!ue.global), ++this._reculock, this._reculock !== 1 || ue.global || (ue.lockOwnerFor = this), this;
    }, Pn.prototype._unlock = function() {
      if (te(!ue.global), --this._reculock == 0) for (ue.global || (ue.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
        var t = this._blockedFuncs.shift();
        try {
          Kn(t[1], t[0]);
        } catch {
        }
      }
      return this;
    }, Pn.prototype._locked = function() {
      return this._reculock && ue.lockOwnerFor !== this;
    }, Pn.prototype.create = function(t) {
      var a = this;
      if (!this.mode) return this;
      var i = this.db.idbdb, c = this.db._state.dbOpenError;
      if (te(!this.idbtrans), !t && !i) switch (c && c.name) {
        case "DatabaseClosedError":
          throw new ve.DatabaseClosed(c);
        case "MissingAPIError":
          throw new ve.MissingAPI(c.message, c);
        default:
          throw new ve.OpenFailed(c);
      }
      if (!this.active) throw new ve.TransactionInactive();
      return te(this._completion._state === null), (t = this.idbtrans = t || (this.db.core || i).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = Mt(function(p) {
        fn(p), a._reject(t.error);
      }), t.onabort = Mt(function(p) {
        fn(p), a.active && a._reject(new ve.Abort(t.error)), a.active = !1, a.on("abort").fire(p);
      }), t.oncomplete = Mt(function() {
        a.active = !1, a._resolve(), "mutatedParts" in t && En.storagemutated.fire(t.mutatedParts);
      }), this;
    }, Pn.prototype._promise = function(t, a, i) {
      var c = this;
      if (t === "readwrite" && this.mode !== "readwrite") return Bt(new ve.ReadOnly("Transaction is readonly"));
      if (!this.active) return Bt(new ve.TransactionInactive());
      if (this._locked()) return new k(function(h, v) {
        c._blockedFuncs.push([function() {
          c._promise(t, a, i).then(h, v);
        }, ue]);
      });
      if (i) return Cn(function() {
        var h = new k(function(v, x) {
          c._lock();
          var A = a(v, x, c);
          A && A.then && A.then(v, x);
        });
        return h.finally(function() {
          return c._unlock();
        }), h._lib = !0, h;
      });
      var p = new k(function(h, v) {
        var x = a(h, v, c);
        x && x.then && x.then(h, v);
      });
      return p._lib = !0, p;
    }, Pn.prototype._root = function() {
      return this.parent ? this.parent._root() : this;
    }, Pn.prototype.waitFor = function(t) {
      var a, i = this._root(), c = k.resolve(t);
      i._waitingFor ? i._waitingFor = i._waitingFor.then(function() {
        return c;
      }) : (i._waitingFor = c, i._waitingQueue = [], a = i.idbtrans.objectStore(i.storeNames[0]), function h() {
        for (++i._spinCount; i._waitingQueue.length; ) i._waitingQueue.shift()();
        i._waitingFor && (a.get(-1 / 0).onsuccess = h);
      }());
      var p = i._waitingFor;
      return new k(function(h, v) {
        c.then(function(x) {
          return i._waitingQueue.push(Mt(h.bind(null, x)));
        }, function(x) {
          return i._waitingQueue.push(Mt(v.bind(null, x)));
        }).finally(function() {
          i._waitingFor === p && (i._waitingFor = null);
        });
      });
    }, Pn.prototype.abort = function() {
      this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new ve.Abort()));
    }, Pn.prototype.table = function(t) {
      var a = this._memoizedTables || (this._memoizedTables = {});
      if (ee(a, t)) return a[t];
      var i = this.schema[t];
      if (!i) throw new ve.NotFound("Table " + t + " not part of transaction");
      return i = new this.db.Table(t, i, this), i.core = this.db.core.table(t), a[t] = i;
    }, Pn);
    function Pn() {
    }
    function Nn(t, a, i, c, p, h, v, x) {
      return { name: t, keyPath: a, unique: i, multi: c, auto: p, compound: h, src: (i && !v ? "&" : "") + (c ? "*" : "") + (p ? "++" : "") + Sa(a), type: x };
    }
    function Sa(t) {
      return typeof t == "string" ? t : t ? "[" + [].join.call(t, "+") + "]" : "";
    }
    function Ba(t, a, i) {
      return { name: t, primKey: a, indexes: i, mappedClass: null, idxByName: (c = function(p) {
        return [p.name, p];
      }, i.reduce(function(p, h, v) {
        return v = c(h, v), v && (p[v[0]] = v[1]), p;
      }, {})) };
      var c;
    }
    var zn = function(t) {
      try {
        return t.only([[]]), zn = function() {
          return [[]];
        }, [[]];
      } catch {
        return zn = function() {
          return cn;
        }, cn;
      }
    };
    function Na(t) {
      return t == null ? function() {
      } : typeof t == "string" ? (a = t).split(".").length === 1 ? function(i) {
        return i[a];
      } : function(i) {
        return ie(i, a);
      } : function(i) {
        return ie(i, t);
      };
      var a;
    }
    function vr(t) {
      return [].slice.call(t);
    }
    var un = 0;
    function qn(t) {
      return t == null ? ":id" : typeof t == "string" ? t : "[".concat(t.join("+"), "]");
    }
    function kr(t, a, A) {
      function c(L) {
        if (L.type === 3) return null;
        if (L.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
        var _ = L.lower, O = L.upper, D = L.lowerOpen, L = L.upperOpen;
        return _ === void 0 ? O === void 0 ? null : a.upperBound(O, !!L) : O === void 0 ? a.lowerBound(_, !!D) : a.bound(_, O, !!D, !!L);
      }
      function p(B) {
        var _, O = B.name;
        return { name: O, schema: B, mutate: function(D) {
          var L = D.trans, K = D.type, H = D.keys, Q = D.values, re = D.range;
          return new Promise(function(he, be) {
            he = Mt(he);
            var pe = L.objectStore(O), me = pe.keyPath == null, ke = K === "put" || K === "add";
            if (!ke && K !== "delete" && K !== "deleteRange") throw new Error("Invalid operation type: " + K);
            var $, Ie = (H || Q || { length: 1 }).length;
            if (H && Q && H.length !== Q.length) throw new Error("Given keys array must have same length as given values array.");
            if (Ie === 0) return he({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
            function Ze(Xt) {
              ++rn, fn(Xt);
            }
            var nt = [], ot = [], rn = 0;
            if (K === "deleteRange") {
              if (re.type === 4) return he({ numFailures: rn, failures: ot, results: [], lastResult: void 0 });
              re.type === 3 ? nt.push($ = pe.clear()) : nt.push($ = pe.delete(c(re)));
            } else {
              var me = ke ? me ? [Q, H] : [Q, null] : [H, null], Ge = me[0], Jt = me[1];
              if (ke) for (var Yt = 0; Yt < Ie; ++Yt) nt.push($ = Jt && Jt[Yt] !== void 0 ? pe[K](Ge[Yt], Jt[Yt]) : pe[K](Ge[Yt])), $.onerror = Ze;
              else for (Yt = 0; Yt < Ie; ++Yt) nt.push($ = pe[K](Ge[Yt])), $.onerror = Ze;
            }
            function Xa(Xt) {
              Xt = Xt.target.result, nt.forEach(function(Un, er) {
                return Un.error != null && (ot[er] = Un.error);
              }), he({ numFailures: rn, failures: ot, results: K === "delete" ? H : nt.map(function(Un) {
                return Un.result;
              }), lastResult: Xt });
            }
            $.onerror = function(Xt) {
              Ze(Xt), Xa(Xt);
            }, $.onsuccess = Xa;
          });
        }, getMany: function(D) {
          var L = D.trans, K = D.keys;
          return new Promise(function(H, Q) {
            H = Mt(H);
            for (var re, he = L.objectStore(O), be = K.length, pe = new Array(be), me = 0, ke = 0, $ = function(nt) {
              nt = nt.target, pe[nt._pos] = nt.result, ++ke === me && H(pe);
            }, Ie = At(Q), Ze = 0; Ze < be; ++Ze) K[Ze] != null && ((re = he.get(K[Ze]))._pos = Ze, re.onsuccess = $, re.onerror = Ie, ++me);
            me === 0 && H(pe);
          });
        }, get: function(D) {
          var L = D.trans, K = D.key;
          return new Promise(function(H, Q) {
            H = Mt(H);
            var re = L.objectStore(O).get(K);
            re.onsuccess = function(he) {
              return H(he.target.result);
            }, re.onerror = At(Q);
          });
        }, query: (_ = E, function(D) {
          return new Promise(function(L, K) {
            L = Mt(L);
            var H, Q, re, me = D.trans, he = D.values, be = D.limit, $ = D.query, pe = be === 1 / 0 ? void 0 : be, ke = $.index, $ = $.range, me = me.objectStore(O), ke = ke.isPrimaryKey ? me : me.index(ke.name), $ = c($);
            if (be === 0) return L({ result: [] });
            _ ? ((pe = he ? ke.getAll($, pe) : ke.getAllKeys($, pe)).onsuccess = function(Ie) {
              return L({ result: Ie.target.result });
            }, pe.onerror = At(K)) : (H = 0, Q = !he && "openKeyCursor" in ke ? ke.openKeyCursor($) : ke.openCursor($), re = [], Q.onsuccess = function(Ie) {
              var Ze = Q.result;
              return Ze ? (re.push(he ? Ze.value : Ze.primaryKey), ++H === be ? L({ result: re }) : void Ze.continue()) : L({ result: re });
            }, Q.onerror = At(K));
          });
        }), openCursor: function(D) {
          var L = D.trans, K = D.values, H = D.query, Q = D.reverse, re = D.unique;
          return new Promise(function(he, be) {
            he = Mt(he);
            var ke = H.index, pe = H.range, me = L.objectStore(O), me = ke.isPrimaryKey ? me : me.index(ke.name), ke = Q ? re ? "prevunique" : "prev" : re ? "nextunique" : "next", $ = !K && "openKeyCursor" in me ? me.openKeyCursor(c(pe), ke) : me.openCursor(c(pe), ke);
            $.onerror = At(be), $.onsuccess = Mt(function(Ie) {
              var Ze, nt, ot, rn, Ge = $.result;
              Ge ? (Ge.___id = ++un, Ge.done = !1, Ze = Ge.continue.bind(Ge), nt = (nt = Ge.continuePrimaryKey) && nt.bind(Ge), ot = Ge.advance.bind(Ge), rn = function() {
                throw new Error("Cursor not stopped");
              }, Ge.trans = L, Ge.stop = Ge.continue = Ge.continuePrimaryKey = Ge.advance = function() {
                throw new Error("Cursor not started");
              }, Ge.fail = Mt(be), Ge.next = function() {
                var Jt = this, Yt = 1;
                return this.start(function() {
                  return Yt-- ? Jt.continue() : Jt.stop();
                }).then(function() {
                  return Jt;
                });
              }, Ge.start = function(Jt) {
                function Yt() {
                  if ($.result) try {
                    Jt();
                  } catch (Xt) {
                    Ge.fail(Xt);
                  }
                  else Ge.done = !0, Ge.start = function() {
                    throw new Error("Cursor behind last entry");
                  }, Ge.stop();
                }
                var Xa = new Promise(function(Xt, Un) {
                  Xt = Mt(Xt), $.onerror = At(Un), Ge.fail = Un, Ge.stop = function(er) {
                    Ge.stop = Ge.continue = Ge.continuePrimaryKey = Ge.advance = rn, Xt(er);
                  };
                });
                return $.onsuccess = Mt(function(Xt) {
                  $.onsuccess = Yt, Yt();
                }), Ge.continue = Ze, Ge.continuePrimaryKey = nt, Ge.advance = ot, Yt(), Xa;
              }, he(Ge)) : he(null);
            }, be);
          });
        }, count: function(D) {
          var L = D.query, K = D.trans, H = L.index, Q = L.range;
          return new Promise(function(re, he) {
            var be = K.objectStore(O), pe = H.isPrimaryKey ? be : be.index(H.name), be = c(Q), pe = be ? pe.count(be) : pe.count();
            pe.onsuccess = Mt(function(me) {
              return re(me.target.result);
            }), pe.onerror = At(he);
          });
        } };
      }
      var h, v, x, F = (v = A, x = vr((h = t).objectStoreNames), { schema: { name: h.name, tables: x.map(function(B) {
        return v.objectStore(B);
      }).map(function(B) {
        var _ = B.keyPath, L = B.autoIncrement, O = I(_), D = {}, L = { name: B.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: _ == null, compound: O, keyPath: _, autoIncrement: L, unique: !0, extractKey: Na(_) }, indexes: vr(B.indexNames).map(function(K) {
          return B.index(K);
        }).map(function(re) {
          var H = re.name, Q = re.unique, he = re.multiEntry, re = re.keyPath, he = { name: H, compound: I(re), keyPath: re, unique: Q, multiEntry: he, extractKey: Na(re) };
          return D[qn(re)] = he;
        }), getIndexByKeyPath: function(K) {
          return D[qn(K)];
        } };
        return D[":id"] = L.primaryKey, _ != null && (D[qn(_)] = L.primaryKey), L;
      }) }, hasGetAll: 0 < x.length && "getAll" in v.objectStore(x[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), A = F.schema, E = F.hasGetAll, F = A.tables.map(p), M = {};
      return F.forEach(function(B) {
        return M[B.name] = B;
      }), { stack: "dbcore", transaction: t.transaction.bind(t), table: function(B) {
        if (!M[B]) throw new Error("Table '".concat(B, "' not found"));
        return M[B];
      }, MIN_KEY: -1 / 0, MAX_KEY: zn(a), schema: A };
    }
    function Sr(t, a, i, c) {
      var p = i.IDBKeyRange;
      return i.indexedDB, { dbcore: (c = kr(a, p, c), t.dbcore.reduce(function(h, v) {
        return v = v.create, d(d({}, h), v(h));
      }, c)) };
    }
    function _n(t, c) {
      var i = c.db, c = Sr(t._middlewares, i, t._deps, c);
      t.core = c.dbcore, t.tables.forEach(function(p) {
        var h = p.name;
        t.core.schema.tables.some(function(v) {
          return v.name === h;
        }) && (p.core = t.core.table(h), t[h] instanceof t.Table && (t[h].core = p.core));
      });
    }
    function Fa(t, a, i, c) {
      i.forEach(function(p) {
        var h = c[p];
        a.forEach(function(v) {
          var x = function A(E, F) {
            return q(E, F) || (E = U(E)) && A(E, F);
          }(v, p);
          (!x || "value" in x && x.value === void 0) && (v === t.Transaction.prototype || v instanceof t.Transaction ? we(v, p, { get: function() {
            return this.table(p);
          }, set: function(A) {
            W(this, p, { value: A, writable: !0, configurable: !0, enumerable: !0 });
          } }) : v[p] = new t.Table(p, h));
        });
      });
    }
    function La(t, a) {
      a.forEach(function(i) {
        for (var c in i) i[c] instanceof t.Table && delete i[c];
      });
    }
    function an(t, a) {
      return t._cfg.version - a._cfg.version;
    }
    function Qr(t, a, i, c) {
      var p = t._dbSchema;
      i.objectStoreNames.contains("$meta") && !p.$meta && (p.$meta = Ba("$meta", Cr("")[0], []), t._storeNames.push("$meta"));
      var h = t._createTransaction("readwrite", t._storeNames, p);
      h.create(i), h._completion.catch(c);
      var v = h._reject.bind(h), x = ue.transless || ue;
      Cn(function() {
        return ue.trans = h, ue.transless = x, a !== 0 ? (_n(t, i), E = a, ((A = h).storeNames.includes("$meta") ? A.table("$meta").get("version").then(function(F) {
          return F ?? E;
        }) : k.resolve(E)).then(function(F) {
          return B = F, _ = h, O = i, D = [], F = (M = t)._versions, L = M._dbSchema = Fn(0, M.idbdb, O), (F = F.filter(function(K) {
            return K._cfg.version >= B;
          })).length !== 0 ? (F.forEach(function(K) {
            D.push(function() {
              var H = L, Q = K._cfg.dbschema;
              Pa(M, H, O), Pa(M, Q, O), L = M._dbSchema = Q;
              var re = Va(H, Q);
              re.add.forEach(function(ke) {
                xr(O, ke[0], ke[1].primKey, ke[1].indexes);
              }), re.change.forEach(function(ke) {
                if (ke.recreate) throw new ve.Upgrade("Not yet support for changing primary key");
                var $ = O.objectStore(ke.name);
                ke.add.forEach(function(Ie) {
                  return ja($, Ie);
                }), ke.change.forEach(function(Ie) {
                  $.deleteIndex(Ie.name), ja($, Ie);
                }), ke.del.forEach(function(Ie) {
                  return $.deleteIndex(Ie);
                });
              });
              var he = K._cfg.contentUpgrade;
              if (he && K._cfg.version > B) {
                _n(M, O), _._memoizedTables = {};
                var be = dt(Q);
                re.del.forEach(function(ke) {
                  be[ke] = H[ke];
                }), La(M, [M.Transaction.prototype]), Fa(M, [M.Transaction.prototype], P(be), be), _.schema = be;
                var pe, me = R(he);
                return me && On(), re = k.follow(function() {
                  var ke;
                  (pe = he(_)) && me && (ke = Mn.bind(null, null), pe.then(ke, ke));
                }), pe && typeof pe.then == "function" ? k.resolve(pe) : re.then(function() {
                  return pe;
                });
              }
            }), D.push(function(H) {
              var Q, re, he = K._cfg.dbschema;
              Q = he, re = H, [].slice.call(re.db.objectStoreNames).forEach(function(be) {
                return Q[be] == null && re.db.deleteObjectStore(be);
              }), La(M, [M.Transaction.prototype]), Fa(M, [M.Transaction.prototype], M._storeNames, M._dbSchema), _.schema = M._dbSchema;
            }), D.push(function(H) {
              M.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(M.idbdb.version / 10) === K._cfg.version ? (M.idbdb.deleteObjectStore("$meta"), delete M._dbSchema.$meta, M._storeNames = M._storeNames.filter(function(Q) {
                return Q !== "$meta";
              })) : H.objectStore("$meta").put(K._cfg.version, "version"));
            });
          }), function K() {
            return D.length ? k.resolve(D.shift()(_.idbtrans)).then(K) : k.resolve();
          }().then(function() {
            Ua(L, O);
          })) : k.resolve();
          var M, B, _, O, D, L;
        }).catch(v)) : (P(p).forEach(function(F) {
          xr(i, F, p[F].primKey, p[F].indexes);
        }), _n(t, i), void k.follow(function() {
          return t.on.populate.fire(h);
        }).catch(v));
        var A, E;
      });
    }
    function Pr(t, a) {
      Ua(t._dbSchema, a), a.db.version % 10 != 0 || a.objectStoreNames.contains("$meta") || a.db.createObjectStore("$meta").add(Math.ceil(a.db.version / 10 - 1), "version");
      var i = Fn(0, t.idbdb, a);
      Pa(t, t._dbSchema, a);
      for (var c = 0, p = Va(i, t._dbSchema).change; c < p.length; c++) {
        var h = function(v) {
          if (v.change.length || v.recreate) return console.warn("Unable to patch indexes of table ".concat(v.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
          var x = a.objectStore(v.name);
          v.add.forEach(function(A) {
            _e && console.debug("Dexie upgrade patch: Creating missing index ".concat(v.name, ".").concat(A.src)), ja(x, A);
          });
        }(p[c]);
        if (typeof h == "object") return h.value;
      }
    }
    function Va(t, a) {
      var i, c = { del: [], add: [], change: [] };
      for (i in t) a[i] || c.del.push(i);
      for (i in a) {
        var p = t[i], h = a[i];
        if (p) {
          var v = { name: i, def: h, recreate: !1, del: [], add: [], change: [] };
          if ("" + (p.primKey.keyPath || "") != "" + (h.primKey.keyPath || "") || p.primKey.auto !== h.primKey.auto) v.recreate = !0, c.change.push(v);
          else {
            var x = p.idxByName, A = h.idxByName, E = void 0;
            for (E in x) A[E] || v.del.push(E);
            for (E in A) {
              var F = x[E], M = A[E];
              F ? F.src !== M.src && v.change.push(M) : v.add.push(M);
            }
            (0 < v.del.length || 0 < v.add.length || 0 < v.change.length) && c.change.push(v);
          }
        } else c.add.push([i, h]);
      }
      return c;
    }
    function xr(t, a, i, c) {
      var p = t.db.createObjectStore(a, i.keyPath ? { keyPath: i.keyPath, autoIncrement: i.auto } : { autoIncrement: i.auto });
      return c.forEach(function(h) {
        return ja(p, h);
      }), p;
    }
    function Ua(t, a) {
      P(t).forEach(function(i) {
        a.db.objectStoreNames.contains(i) || (_e && console.debug("Dexie: Creating missing table", i), xr(a, i, t[i].primKey, t[i].indexes));
      });
    }
    function ja(t, a) {
      t.createIndex(a.name, a.keyPath, { unique: a.unique, multiEntry: a.multi });
    }
    function Fn(t, a, i) {
      var c = {};
      return Z(a.objectStoreNames, 0).forEach(function(p) {
        for (var h = i.objectStore(p), v = Nn(Sa(E = h.keyPath), E || "", !0, !1, !!h.autoIncrement, E && typeof E != "string", !0), x = [], A = 0; A < h.indexNames.length; ++A) {
          var F = h.index(h.indexNames[A]), E = F.keyPath, F = Nn(F.name, E, !!F.unique, !!F.multiEntry, !1, E && typeof E != "string", !1);
          x.push(F);
        }
        c[p] = Ba(p, v, x);
      }), c;
    }
    function Pa(t, a, i) {
      for (var c = i.db.objectStoreNames, p = 0; p < c.length; ++p) {
        var h = c[p], v = i.objectStore(h);
        t._hasGetAll = "getAll" in v;
        for (var x = 0; x < v.indexNames.length; ++x) {
          var A = v.indexNames[x], E = v.index(A).keyPath, F = typeof E == "string" ? E : "[" + Z(E).join("+") + "]";
          !a[h] || (E = a[h].idxByName[F]) && (E.name = A, delete a[h].idxByName[F], a[h].idxByName[A] = E);
        }
      }
      typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && m.WorkerGlobalScope && m instanceof m.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (t._hasGetAll = !1);
    }
    function Cr(t) {
      return t.split(",").map(function(a, i) {
        var h = a.split(":"), c = (p = h[1]) === null || p === void 0 ? void 0 : p.trim(), p = (a = h[0].trim()).replace(/([&*]|\+\+)/g, ""), h = /^\[/.test(p) ? p.match(/^\[(.*)\]$/)[1].split("+") : p;
        return Nn(p, h || null, /\&/.test(a), /\*/.test(a), /\+\+/.test(a), I(h), i === 0, c);
      });
    }
    var ln = (wn.prototype._createTableSchema = Ba, wn.prototype._parseIndexSyntax = Cr, wn.prototype._parseStoresSpec = function(t, a) {
      var i = this;
      P(t).forEach(function(c) {
        if (t[c] !== null) {
          var p = i._parseIndexSyntax(t[c]), h = p.shift();
          if (!h) throw new ve.Schema("Invalid schema for table " + c + ": " + t[c]);
          if (h.unique = !0, h.multi) throw new ve.Schema("Primary key cannot be multiEntry*");
          p.forEach(function(v) {
            if (v.auto) throw new ve.Schema("Only primary key can be marked as autoIncrement (++)");
            if (!v.keyPath) throw new ve.Schema("Index must have a name and cannot be an empty string");
          }), p = i._createTableSchema(c, h, p), a[c] = p;
        }
      });
    }, wn.prototype.stores = function(i) {
      var a = this.db;
      this._cfg.storesSource = this._cfg.storesSource ? T(this._cfg.storesSource, i) : i;
      var i = a._versions, c = {}, p = {};
      return i.forEach(function(h) {
        T(c, h._cfg.storesSource), p = h._cfg.dbschema = {}, h._parseStoresSpec(c, p);
      }), a._dbSchema = p, La(a, [a._allTables, a, a.Transaction.prototype]), Fa(a, [a._allTables, a, a.Transaction.prototype, this._cfg.tables], P(p), p), a._storeNames = P(p), this;
    }, wn.prototype.upgrade = function(t) {
      return this._cfg.contentUpgrade = gt(this._cfg.contentUpgrade || C, t), this;
    }, wn);
    function wn() {
    }
    function Ka(t, a) {
      var i = t._dbNamesDB;
      return i || (i = t._dbNamesDB = new Rn(Oa, { addons: [], indexedDB: t, IDBKeyRange: a })).version(1).stores({ dbnames: "name" }), i.table("dbnames");
    }
    function $a(t) {
      return t && typeof t.databases == "function";
    }
    function Ha(t) {
      return Cn(function() {
        return ue.letThrough = !0, t();
      });
    }
    function Mr(t) {
      return !("from" in t);
    }
    var zt = function(t, a) {
      if (!this) {
        var i = new zt();
        return t && "d" in t && T(i, t), i;
      }
      T(this, arguments.length ? { d: 1, from: t, to: 1 < arguments.length ? a : t } : { d: 0 });
    };
    function sa(t, a, i) {
      var c = st(a, i);
      if (!isNaN(c)) {
        if (0 < c) throw RangeError();
        if (Mr(t)) return T(t, { from: a, to: i, d: 1 });
        var p = t.l, c = t.r;
        if (st(i, t.from) < 0) return p ? sa(p, a, i) : t.l = { from: a, to: i, d: 1, l: null, r: null }, Jn(t);
        if (0 < st(a, t.to)) return c ? sa(c, a, i) : t.r = { from: a, to: i, d: 1, l: null, r: null }, Jn(t);
        st(a, t.from) < 0 && (t.from = a, t.l = null, t.d = c ? c.d + 1 : 1), 0 < st(i, t.to) && (t.to = i, t.r = null, t.d = t.l ? t.l.d + 1 : 1), i = !t.r, p && !t.l && vt(t, p), c && i && vt(t, c);
      }
    }
    function vt(t, a) {
      Mr(a) || function i(c, A) {
        var h = A.from, v = A.to, x = A.l, A = A.r;
        sa(c, h, v), x && i(c, x), A && i(c, A);
      }(t, a);
    }
    function Ga(t, a) {
      var i = ca(a), c = i.next();
      if (c.done) return !1;
      for (var p = c.value, h = ca(t), v = h.next(p.from), x = v.value; !c.done && !v.done; ) {
        if (st(x.from, p.to) <= 0 && 0 <= st(x.to, p.from)) return !0;
        st(p.from, x.from) < 0 ? p = (c = i.next(x.from)).value : x = (v = h.next(p.from)).value;
      }
      return !1;
    }
    function ca(t) {
      var a = Mr(t) ? null : { s: 0, n: t };
      return { next: function(i) {
        for (var c = 0 < arguments.length; a; ) switch (a.s) {
          case 0:
            if (a.s = 1, c) for (; a.n.l && st(i, a.n.from) < 0; ) a = { up: a, n: a.n.l, s: 1 };
            else for (; a.n.l; ) a = { up: a, n: a.n.l, s: 1 };
          case 1:
            if (a.s = 2, !c || st(i, a.n.to) <= 0) return { value: a.n, done: !1 };
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
    function Jn(t) {
      var a, i, c = (((a = t.r) === null || a === void 0 ? void 0 : a.d) || 0) - (((i = t.l) === null || i === void 0 ? void 0 : i.d) || 0), p = 1 < c ? "r" : c < -1 ? "l" : "";
      p && (a = p == "r" ? "l" : "r", i = d({}, t), c = t[p], t.from = c.from, t.to = c.to, t[p] = c[p], i[p] = c[a], (t[a] = i).d = Ln(i)), t.d = Ln(t);
    }
    function Ln(i) {
      var a = i.r, i = i.l;
      return (a ? i ? Math.max(a.d, i.d) : a.d : i ? i.d : 0) + 1;
    }
    function Tn(t, a) {
      return P(a).forEach(function(i) {
        t[i] ? vt(t[i], a[i]) : t[i] = function c(p) {
          var h, v, x = {};
          for (h in p) ee(p, h) && (v = p[h], x[h] = !v || typeof v != "object" || ut.has(v.constructor) ? v : c(v));
          return x;
        }(a[i]);
      }), t;
    }
    function xa(t, a) {
      return t.all || a.all || Object.keys(t).some(function(i) {
        return a[i] && Ga(a[i], t[i]);
      });
    }
    j(zt.prototype, ((hn = { add: function(t) {
      return vt(this, t), this;
    }, addKey: function(t) {
      return sa(this, t, t), this;
    }, addKeys: function(t) {
      var a = this;
      return t.forEach(function(i) {
        return sa(a, i, i);
      }), this;
    }, hasKey: function(t) {
      var a = ca(this).next(t).value;
      return a && st(a.from, t) <= 0 && 0 <= st(a.to, t);
    } })[kt] = function() {
      return ca(this);
    }, hn));
    var wt = {}, Yn = {}, Ca = !1;
    function za(t) {
      Tn(Yn, t), Ca || (Ca = !0, setTimeout(function() {
        Ca = !1, Ir(Yn, !(Yn = {}));
      }, 0));
    }
    function Ir(t, a) {
      a === void 0 && (a = !1);
      var i = /* @__PURE__ */ new Set();
      if (t.all) for (var c = 0, p = Object.values(wt); c < p.length; c++) Ar(v = p[c], t, i, a);
      else for (var h in t) {
        var v, x = /^idb\:\/\/(.*)\/(.*)\//.exec(h);
        x && (h = x[1], x = x[2], (v = wt["idb://".concat(h, "/").concat(x)]) && Ar(v, t, i, a));
      }
      i.forEach(function(A) {
        return A();
      });
    }
    function Ar(t, a, i, c) {
      for (var p = [], h = 0, v = Object.entries(t.queries.query); h < v.length; h++) {
        for (var x = v[h], A = x[0], E = [], F = 0, M = x[1]; F < M.length; F++) {
          var B = M[F];
          xa(a, B.obsSet) ? B.subscribers.forEach(function(L) {
            return i.add(L);
          }) : c && E.push(B);
        }
        c && p.push([A, E]);
      }
      if (c) for (var _ = 0, O = p; _ < O.length; _++) {
        var D = O[_], A = D[0], E = D[1];
        t.queries.query[A] = E;
      }
    }
    function vo(t) {
      var a = t._state, i = t._deps.indexedDB;
      if (a.isBeingOpened || t.idbdb) return a.dbReadyPromise.then(function() {
        return a.dbOpenError ? Bt(a.dbOpenError) : t;
      });
      a.isBeingOpened = !0, a.dbOpenError = null, a.openComplete = !1;
      var c = a.openCanceller, p = Math.round(10 * t.verno), h = !1;
      function v() {
        if (a.openCanceller !== c) throw new ve.DatabaseClosed("db.open() was cancelled");
      }
      function x() {
        return new k(function(B, _) {
          if (v(), !i) throw new ve.MissingAPI();
          var O = t.name, D = a.autoSchema || !p ? i.open(O) : i.open(O, p);
          if (!D) throw new ve.MissingAPI();
          D.onerror = At(_), D.onblocked = Mt(t._fireOnBlocked), D.onupgradeneeded = Mt(function(L) {
            var K;
            F = D.transaction, a.autoSchema && !t._options.allowEmptyDB ? (D.onerror = fn, F.abort(), D.result.close(), (K = i.deleteDatabase(O)).onsuccess = K.onerror = Mt(function() {
              _(new ve.NoSuchDatabase("Database ".concat(O, " doesnt exist")));
            })) : (F.onerror = At(_), L = L.oldVersion > Math.pow(2, 62) ? 0 : L.oldVersion, M = L < 1, t.idbdb = D.result, h && Pr(t, F), Qr(t, L / 10, F, _));
          }, _), D.onsuccess = Mt(function() {
            F = null;
            var L, K, H, Q, re, he = t.idbdb = D.result, be = Z(he.objectStoreNames);
            if (0 < be.length) try {
              var pe = he.transaction((Q = be).length === 1 ? Q[0] : Q, "readonly");
              if (a.autoSchema) K = he, H = pe, (L = t).verno = K.version / 10, H = L._dbSchema = Fn(0, K, H), L._storeNames = Z(K.objectStoreNames, 0), Fa(L, [L._allTables], P(H), H);
              else if (Pa(t, t._dbSchema, pe), ((re = Va(Fn(0, (re = t).idbdb, pe), re._dbSchema)).add.length || re.change.some(function(me) {
                return me.add.length || me.change.length;
              })) && !h) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), he.close(), p = he.version + 1, h = !0, B(x());
              _n(t, pe);
            } catch {
            }
            na.push(t), he.onversionchange = Mt(function(me) {
              a.vcFired = !0, t.on("versionchange").fire(me);
            }), he.onclose = Mt(function() {
              t.close({ disableAutoOpen: !1 });
            }), M && (re = t._deps, pe = O, he = re.indexedDB, re = re.IDBKeyRange, $a(he) || pe === Oa || Ka(he, re).put({ name: pe }).catch(C)), B();
          }, _);
        }).catch(function(B) {
          switch (B == null ? void 0 : B.name) {
            case "UnknownError":
              if (0 < a.PR1398_maxLoop) return a.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), x();
              break;
            case "VersionError":
              if (0 < p) return p = 0, x();
          }
          return k.reject(B);
        });
      }
      var A, E = a.dbReadyResolve, F = null, M = !1;
      return k.race([c, (typeof navigator > "u" ? k.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(B) {
        function _() {
          return indexedDB.databases().finally(B);
        }
        A = setInterval(_, 100), _();
      }).finally(function() {
        return clearInterval(A);
      }) : Promise.resolve()).then(x)]).then(function() {
        return v(), a.onReadyBeingFired = [], k.resolve(Ha(function() {
          return t.on.ready.fire(t.vip);
        })).then(function B() {
          if (0 < a.onReadyBeingFired.length) {
            var _ = a.onReadyBeingFired.reduce(gt, C);
            return a.onReadyBeingFired = [], k.resolve(Ha(function() {
              return _(t.vip);
            })).then(B);
          }
        });
      }).finally(function() {
        a.openCanceller === c && (a.onReadyBeingFired = null, a.isBeingOpened = !1);
      }).catch(function(B) {
        a.dbOpenError = B;
        try {
          F && F.abort();
        } catch {
        }
        return c === a.openCanceller && t._close(), Bt(B);
      }).finally(function() {
        a.openComplete = !0, E();
      }).then(function() {
        var B;
        return M && (B = {}, t.tables.forEach(function(_) {
          _.schema.indexes.forEach(function(O) {
            O.name && (B["idb://".concat(t.name, "/").concat(_.name, "/").concat(O.name)] = new zt(-1 / 0, [[[]]]));
          }), B["idb://".concat(t.name, "/").concat(_.name, "/")] = B["idb://".concat(t.name, "/").concat(_.name, "/:dels")] = new zt(-1 / 0, [[[]]]);
        }), En(ka).fire(B), Ir(B, !0)), t;
      });
    }
    function qa(t) {
      function a(h) {
        return t.next(h);
      }
      var i = p(a), c = p(function(h) {
        return t.throw(h);
      });
      function p(h) {
        return function(A) {
          var x = h(A), A = x.value;
          return x.done ? A : A && typeof A.then == "function" ? A.then(i, c) : I(A) ? Promise.all(A).then(i, c) : i(A);
        };
      }
      return p(a)();
    }
    function Ja(t, a, i) {
      for (var c = I(t) ? t.slice() : [t], p = 0; p < i; ++p) c.push(a);
      return c;
    }
    var ko = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(t) {
      return d(d({}, t), { table: function(a) {
        var i = t.table(a), c = i.schema, p = {}, h = [];
        function v(M, B, _) {
          var O = qn(M), D = p[O] = p[O] || [], L = M == null ? 0 : typeof M == "string" ? 1 : M.length, K = 0 < B, K = d(d({}, _), { name: K ? "".concat(O, "(virtual-from:").concat(_.name, ")") : _.name, lowLevelIndex: _, isVirtual: K, keyTail: B, keyLength: L, extractKey: Na(M), unique: !K && _.unique });
          return D.push(K), K.isPrimaryKey || h.push(K), 1 < L && v(L === 2 ? M[0] : M.slice(0, L - 1), B + 1, _), D.sort(function(H, Q) {
            return H.keyTail - Q.keyTail;
          }), K;
        }
        a = v(c.primaryKey.keyPath, 0, c.primaryKey), p[":id"] = [a];
        for (var x = 0, A = c.indexes; x < A.length; x++) {
          var E = A[x];
          v(E.keyPath, 0, E);
        }
        function F(M) {
          var B, _ = M.query.index;
          return _.isVirtual ? d(d({}, M), { query: { index: _.lowLevelIndex, range: (B = M.query.range, _ = _.keyTail, { type: B.type === 1 ? 2 : B.type, lower: Ja(B.lower, B.lowerOpen ? t.MAX_KEY : t.MIN_KEY, _), lowerOpen: !0, upper: Ja(B.upper, B.upperOpen ? t.MIN_KEY : t.MAX_KEY, _), upperOpen: !0 }) } }) : M;
        }
        return d(d({}, i), { schema: d(d({}, c), { primaryKey: a, indexes: h, getIndexByKeyPath: function(M) {
          return (M = p[qn(M)]) && M[0];
        } }), count: function(M) {
          return i.count(F(M));
        }, query: function(M) {
          return i.query(F(M));
        }, openCursor: function(M) {
          var B = M.query.index, _ = B.keyTail, O = B.isVirtual, D = B.keyLength;
          return O ? i.openCursor(F(M)).then(function(K) {
            return K && L(K);
          }) : i.openCursor(M);
          function L(K) {
            return Object.create(K, { continue: { value: function(H) {
              H != null ? K.continue(Ja(H, M.reverse ? t.MAX_KEY : t.MIN_KEY, _)) : M.unique ? K.continue(K.key.slice(0, D).concat(M.reverse ? t.MIN_KEY : t.MAX_KEY, _)) : K.continue();
            } }, continuePrimaryKey: { value: function(H, Q) {
              K.continuePrimaryKey(Ja(H, t.MAX_KEY, _), Q);
            } }, primaryKey: { get: function() {
              return K.primaryKey;
            } }, key: { get: function() {
              var H = K.key;
              return D === 1 ? H[0] : H.slice(0, D);
            } }, value: { get: function() {
              return K.value;
            } } });
          }
        } });
      } });
    } };
    function Er(t, a, i, c) {
      return i = i || {}, c = c || "", P(t).forEach(function(p) {
        var h, v, x;
        ee(a, p) ? (h = t[p], v = a[p], typeof h == "object" && typeof v == "object" && h && v ? (x = Be(h)) !== Be(v) ? i[c + p] = a[p] : x === "Object" ? Er(h, v, i, c + p + ".") : h !== v && (i[c + p] = a[p]) : h !== v && (i[c + p] = a[p])) : i[c + p] = void 0;
      }), P(a).forEach(function(p) {
        ee(t, p) || (i[c + p] = a[p]);
      }), i;
    }
    function Ma(t, a) {
      return a.type === "delete" ? a.keys : a.keys || a.values.map(t.extractKey);
    }
    var Ya = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(t) {
      return d(d({}, t), { table: function(a) {
        var i = t.table(a), c = i.schema.primaryKey;
        return d(d({}, i), { mutate: function(p) {
          var h = ue.trans, v = h.table(a).hook, x = v.deleting, A = v.creating, E = v.updating;
          switch (p.type) {
            case "add":
              if (A.fire === C) break;
              return h._promise("readwrite", function() {
                return F(p);
              }, !0);
            case "put":
              if (A.fire === C && E.fire === C) break;
              return h._promise("readwrite", function() {
                return F(p);
              }, !0);
            case "delete":
              if (x.fire === C) break;
              return h._promise("readwrite", function() {
                return F(p);
              }, !0);
            case "deleteRange":
              if (x.fire === C) break;
              return h._promise("readwrite", function() {
                return function M(B, _, O) {
                  return i.query({ trans: B, values: !1, query: { index: c, range: _ }, limit: O }).then(function(D) {
                    var L = D.result;
                    return F({ type: "delete", keys: L, trans: B }).then(function(K) {
                      return 0 < K.numFailures ? Promise.reject(K.failures[0]) : L.length < O ? { failures: [], numFailures: 0, lastResult: void 0 } : M(B, d(d({}, _), { lower: L[L.length - 1], lowerOpen: !0 }), O);
                    });
                  });
                }(p.trans, p.range, 1e4);
              }, !0);
          }
          return i.mutate(p);
          function F(M) {
            var B, _, O, D = ue.trans, L = M.keys || Ma(c, M);
            if (!L) throw new Error("Keys missing");
            return (M = M.type === "add" || M.type === "put" ? d(d({}, M), { keys: L }) : d({}, M)).type !== "delete" && (M.values = y([], M.values)), M.keys && (M.keys = y([], M.keys)), B = i, O = L, ((_ = M).type === "add" ? Promise.resolve([]) : B.getMany({ trans: _.trans, keys: O, cache: "immutable" })).then(function(K) {
              var H = L.map(function(Q, re) {
                var he, be, pe, me = K[re], ke = { onerror: null, onsuccess: null };
                return M.type === "delete" ? x.fire.call(ke, Q, me, D) : M.type === "add" || me === void 0 ? (he = A.fire.call(ke, Q, M.values[re], D), Q == null && he != null && (M.keys[re] = Q = he, c.outbound || se(M.values[re], c.keyPath, Q))) : (he = Er(me, M.values[re]), (be = E.fire.call(ke, he, Q, me, D)) && (pe = M.values[re], Object.keys(be).forEach(function($) {
                  ee(pe, $) ? pe[$] = be[$] : se(pe, $, be[$]);
                }))), ke;
              });
              return i.mutate(M).then(function(Q) {
                for (var re = Q.failures, he = Q.results, be = Q.numFailures, Q = Q.lastResult, pe = 0; pe < L.length; ++pe) {
                  var me = (he || L)[pe], ke = H[pe];
                  me == null ? ke.onerror && ke.onerror(re[pe]) : ke.onsuccess && ke.onsuccess(M.type === "put" && K[pe] ? M.values[pe] : me);
                }
                return { failures: re, results: he, numFailures: be, lastResult: Q };
              }).catch(function(Q) {
                return H.forEach(function(re) {
                  return re.onerror && re.onerror(Q);
                }), Promise.reject(Q);
              });
            });
          }
        } });
      } });
    } };
    function ua(t, a, i) {
      try {
        if (!a || a.keys.length < t.length) return null;
        for (var c = [], p = 0, h = 0; p < a.keys.length && h < t.length; ++p) st(a.keys[p], t[h]) === 0 && (c.push(i ? Ne(a.values[p]) : a.values[p]), ++h);
        return c.length === t.length ? c : null;
      } catch {
        return null;
      }
    }
    var _r = { stack: "dbcore", level: -1, create: function(t) {
      return { table: function(a) {
        var i = t.table(a);
        return d(d({}, i), { getMany: function(c) {
          if (!c.cache) return i.getMany(c);
          var p = ua(c.keys, c.trans._cache, c.cache === "clone");
          return p ? k.resolve(p) : i.getMany(c).then(function(h) {
            return c.trans._cache = { keys: c.keys, values: c.cache === "clone" ? Ne(h) : h }, h;
          });
        }, mutate: function(c) {
          return c.type !== "add" && (c.trans._cache = null), i.mutate(c);
        } });
      } };
    } };
    function Xr(t, a) {
      return t.trans.mode === "readonly" && !!t.subscr && !t.trans.explicit && t.trans.db._options.cache !== "disabled" && !a.schema.primaryKey.outbound;
    }
    function la(t, a) {
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
    var So = { stack: "dbcore", level: 0, name: "Observability", create: function(t) {
      var a = t.schema.name, i = new zt(t.MIN_KEY, t.MAX_KEY);
      return d(d({}, t), { transaction: function(c, p, h) {
        if (ue.subscr && p !== "readonly") throw new ve.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(ue.querier));
        return t.transaction(c, p, h);
      }, table: function(c) {
        var p = t.table(c), h = p.schema, v = h.primaryKey, M = h.indexes, x = v.extractKey, A = v.outbound, E = v.autoIncrement && M.filter(function(_) {
          return _.compound && _.keyPath.includes(v.keyPath);
        }), F = d(d({}, p), { mutate: function(_) {
          function O($) {
            return $ = "idb://".concat(a, "/").concat(c, "/").concat($), Q[$] || (Q[$] = new zt());
          }
          var D, L, K, H = _.trans, Q = _.mutatedParts || (_.mutatedParts = {}), re = O(""), he = O(":dels"), be = _.type, ke = _.type === "deleteRange" ? [_.range] : _.type === "delete" ? [_.keys] : _.values.length < 50 ? [Ma(v, _).filter(function($) {
            return $;
          }), _.values] : [], pe = ke[0], me = ke[1], ke = _.trans._cache;
          return I(pe) ? (re.addKeys(pe), (ke = be === "delete" || pe.length === me.length ? ua(pe, ke) : null) || he.addKeys(pe), (ke || me) && (D = O, L = ke, K = me, h.indexes.forEach(function($) {
            var Ie = D($.name || "");
            function Ze(ot) {
              return ot != null ? $.extractKey(ot) : null;
            }
            function nt(ot) {
              return $.multiEntry && I(ot) ? ot.forEach(function(rn) {
                return Ie.addKey(rn);
              }) : Ie.addKey(ot);
            }
            (L || K).forEach(function(ot, Jt) {
              var Ge = L && Ze(L[Jt]), Jt = K && Ze(K[Jt]);
              st(Ge, Jt) !== 0 && (Ge != null && nt(Ge), Jt != null && nt(Jt));
            });
          }))) : pe ? (me = { from: (me = pe.lower) !== null && me !== void 0 ? me : t.MIN_KEY, to: (me = pe.upper) !== null && me !== void 0 ? me : t.MAX_KEY }, he.add(me), re.add(me)) : (re.add(i), he.add(i), h.indexes.forEach(function($) {
            return O($.name).add(i);
          })), p.mutate(_).then(function($) {
            return !pe || _.type !== "add" && _.type !== "put" || (re.addKeys($.results), E && E.forEach(function(Ie) {
              for (var Ze = _.values.map(function(Ge) {
                return Ie.extractKey(Ge);
              }), nt = Ie.keyPath.findIndex(function(Ge) {
                return Ge === v.keyPath;
              }), ot = 0, rn = $.results.length; ot < rn; ++ot) Ze[ot][nt] = $.results[ot];
              O(Ie.name).addKeys(Ze);
            })), H.mutatedParts = Tn(H.mutatedParts || {}, Q), $;
          });
        } }), M = function(O) {
          var D = O.query, O = D.index, D = D.range;
          return [O, new zt((O = D.lower) !== null && O !== void 0 ? O : t.MIN_KEY, (D = D.upper) !== null && D !== void 0 ? D : t.MAX_KEY)];
        }, B = { get: function(_) {
          return [v, new zt(_.key)];
        }, getMany: function(_) {
          return [v, new zt().addKeys(_.keys)];
        }, count: M, query: M, openCursor: M };
        return P(B).forEach(function(_) {
          F[_] = function(O) {
            var D = ue.subscr, L = !!D, K = Xr(ue, p) && la(_, O) ? O.obsSet = {} : D;
            if (L) {
              var H = function(me) {
                return me = "idb://".concat(a, "/").concat(c, "/").concat(me), K[me] || (K[me] = new zt());
              }, Q = H(""), re = H(":dels"), D = B[_](O), L = D[0], D = D[1];
              if ((_ === "query" && L.isPrimaryKey && !O.values ? re : H(L.name || "")).add(D), !L.isPrimaryKey) {
                if (_ !== "count") {
                  var he = _ === "query" && A && O.values && p.query(d(d({}, O), { values: !1 }));
                  return p[_].apply(this, arguments).then(function(me) {
                    if (_ === "query") {
                      if (A && O.values) return he.then(function(Ze) {
                        return Ze = Ze.result, Q.addKeys(Ze), me;
                      });
                      var ke = O.values ? me.result.map(x) : me.result;
                      (O.values ? Q : re).addKeys(ke);
                    } else if (_ === "openCursor") {
                      var $ = me, Ie = O.values;
                      return $ && Object.create($, { key: { get: function() {
                        return re.addKey($.primaryKey), $.key;
                      } }, primaryKey: { get: function() {
                        var Ze = $.primaryKey;
                        return re.addKey(Ze), Ze;
                      } }, value: { get: function() {
                        return Ie && Q.addKey($.primaryKey), $.value;
                      } } });
                    }
                    return me;
                  });
                }
                re.add(i);
              }
            }
            return p[_].apply(this, arguments);
          };
        }), F;
      } });
    } };
    function Tr(t, a, i) {
      if (i.numFailures === 0) return a;
      if (a.type === "deleteRange") return null;
      var c = a.keys ? a.keys.length : "values" in a && a.values ? a.values.length : 1;
      return i.numFailures === c ? null : (a = d({}, a), I(a.keys) && (a.keys = a.keys.filter(function(p, h) {
        return !(h in i.failures);
      })), "values" in a && I(a.values) && (a.values = a.values.filter(function(p, h) {
        return !(h in i.failures);
      })), a);
    }
    function Ia(t, a) {
      return i = t, ((c = a).lower === void 0 || (c.lowerOpen ? 0 < st(i, c.lower) : 0 <= st(i, c.lower))) && (t = t, (a = a).upper === void 0 || (a.upperOpen ? st(t, a.upper) < 0 : st(t, a.upper) <= 0));
      var i, c;
    }
    function Zn(t, a, B, c, p, h) {
      if (!B || B.length === 0) return t;
      var v = a.query.index, x = v.multiEntry, A = a.query.range, E = c.schema.primaryKey.extractKey, F = v.extractKey, M = (v.lowLevelIndex || v).extractKey, B = B.reduce(function(_, O) {
        var D = _, L = [];
        if (O.type === "add" || O.type === "put") for (var K = new zt(), H = O.values.length - 1; 0 <= H; --H) {
          var Q, re = O.values[H], he = E(re);
          K.hasKey(he) || (Q = F(re), (x && I(Q) ? Q.some(function($) {
            return Ia($, A);
          }) : Ia(Q, A)) && (K.addKey(he), L.push(re)));
        }
        switch (O.type) {
          case "add":
            var be = new zt().addKeys(a.values ? _.map(function(Ie) {
              return E(Ie);
            }) : _), D = _.concat(a.values ? L.filter(function(Ie) {
              return Ie = E(Ie), !be.hasKey(Ie) && (be.addKey(Ie), !0);
            }) : L.map(function(Ie) {
              return E(Ie);
            }).filter(function(Ie) {
              return !be.hasKey(Ie) && (be.addKey(Ie), !0);
            }));
            break;
          case "put":
            var pe = new zt().addKeys(O.values.map(function(Ie) {
              return E(Ie);
            }));
            D = _.filter(function(Ie) {
              return !pe.hasKey(a.values ? E(Ie) : Ie);
            }).concat(a.values ? L : L.map(function(Ie) {
              return E(Ie);
            }));
            break;
          case "delete":
            var me = new zt().addKeys(O.keys);
            D = _.filter(function(Ie) {
              return !me.hasKey(a.values ? E(Ie) : Ie);
            });
            break;
          case "deleteRange":
            var ke = O.range;
            D = _.filter(function(Ie) {
              return !Ia(E(Ie), ke);
            });
        }
        return D;
      }, t);
      return B === t ? t : (B.sort(function(_, O) {
        return st(M(_), M(O)) || st(E(_), E(O));
      }), a.limit && a.limit < 1 / 0 && (B.length > a.limit ? B.length = a.limit : t.length === a.limit && B.length < a.limit && (p.dirty = !0)), h ? Object.freeze(B) : B);
    }
    function Za(t, a) {
      return st(t.lower, a.lower) === 0 && st(t.upper, a.upper) === 0 && !!t.lowerOpen == !!a.lowerOpen && !!t.upperOpen == !!a.upperOpen;
    }
    function Po(t, a) {
      return function(i, c, p, h) {
        if (i === void 0) return c !== void 0 ? -1 : 0;
        if (c === void 0) return 1;
        if ((c = st(i, c)) === 0) {
          if (p && h) return 0;
          if (p) return 1;
          if (h) return -1;
        }
        return c;
      }(t.lower, a.lower, t.lowerOpen, a.lowerOpen) <= 0 && 0 <= function(i, c, p, h) {
        if (i === void 0) return c !== void 0 ? 1 : 0;
        if (c === void 0) return -1;
        if ((c = st(i, c)) === 0) {
          if (p && h) return 0;
          if (p) return -1;
          if (h) return 1;
        }
        return c;
      }(t.upper, a.upper, t.upperOpen, a.upperOpen);
    }
    function eo(t, a, i, c) {
      t.subscribers.add(i), c.addEventListener("abort", function() {
        var p, h;
        t.subscribers.delete(i), t.subscribers.size === 0 && (p = t, h = a, setTimeout(function() {
          p.subscribers.size === 0 && mt(h, p);
        }, 3e3));
      });
    }
    var xo = { stack: "dbcore", level: 0, name: "Cache", create: function(t) {
      var a = t.schema.name;
      return d(d({}, t), { transaction: function(i, c, p) {
        var h, v, x = t.transaction(i, c, p);
        return c === "readwrite" && (v = (h = new AbortController()).signal, p = function(A) {
          return function() {
            if (h.abort(), c === "readwrite") {
              for (var E = /* @__PURE__ */ new Set(), F = 0, M = i; F < M.length; F++) {
                var B = M[F], _ = wt["idb://".concat(a, "/").concat(B)];
                if (_) {
                  var O = t.table(B), D = _.optimisticOps.filter(function(Ie) {
                    return Ie.trans === x;
                  });
                  if (x._explicit && A && x.mutatedParts) for (var L = 0, K = Object.values(_.queries.query); L < K.length; L++) for (var H = 0, Q = (be = K[L]).slice(); H < Q.length; H++) xa((pe = Q[H]).obsSet, x.mutatedParts) && (mt(be, pe), pe.subscribers.forEach(function(Ie) {
                    return E.add(Ie);
                  }));
                  else if (0 < D.length) {
                    _.optimisticOps = _.optimisticOps.filter(function(Ie) {
                      return Ie.trans !== x;
                    });
                    for (var re = 0, he = Object.values(_.queries.query); re < he.length; re++) for (var be, pe, me, ke = 0, $ = (be = he[re]).slice(); ke < $.length; ke++) (pe = $[ke]).res != null && x.mutatedParts && (A && !pe.dirty ? (me = Object.isFrozen(pe.res), me = Zn(pe.res, pe.req, D, O, pe, me), pe.dirty ? (mt(be, pe), pe.subscribers.forEach(function(Ie) {
                      return E.add(Ie);
                    })) : me !== pe.res && (pe.res = me, pe.promise = k.resolve({ result: me }))) : (pe.dirty && mt(be, pe), pe.subscribers.forEach(function(Ie) {
                      return E.add(Ie);
                    })));
                  }
                }
              }
              E.forEach(function(Ie) {
                return Ie();
              });
            }
          };
        }, x.addEventListener("abort", p(!1), { signal: v }), x.addEventListener("error", p(!1), { signal: v }), x.addEventListener("complete", p(!0), { signal: v })), x;
      }, table: function(i) {
        var c = t.table(i), p = c.schema.primaryKey;
        return d(d({}, c), { mutate: function(h) {
          var v = ue.trans;
          if (p.outbound || v.db._options.cache === "disabled" || v.explicit || v.idbtrans.mode !== "readwrite") return c.mutate(h);
          var x = wt["idb://".concat(a, "/").concat(i)];
          return x ? (v = c.mutate(h), h.type !== "add" && h.type !== "put" || !(50 <= h.values.length || Ma(p, h).some(function(A) {
            return A == null;
          })) ? (x.optimisticOps.push(h), h.mutatedParts && za(h.mutatedParts), v.then(function(A) {
            0 < A.numFailures && (mt(x.optimisticOps, h), (A = Tr(0, h, A)) && x.optimisticOps.push(A), h.mutatedParts && za(h.mutatedParts));
          }), v.catch(function() {
            mt(x.optimisticOps, h), h.mutatedParts && za(h.mutatedParts);
          })) : v.then(function(A) {
            var E = Tr(0, d(d({}, h), { values: h.values.map(function(F, M) {
              var B;
              return A.failures[M] ? F : (F = (B = p.keyPath) !== null && B !== void 0 && B.includes(".") ? Ne(F) : d({}, F), se(F, p.keyPath, A.results[M]), F);
            }) }), A);
            x.optimisticOps.push(E), queueMicrotask(function() {
              return h.mutatedParts && za(h.mutatedParts);
            });
          }), v) : c.mutate(h);
        }, query: function(h) {
          if (!Xr(ue, c) || !la("query", h)) return c.query(h);
          var v = ((E = ue.trans) === null || E === void 0 ? void 0 : E.db._options.cache) === "immutable", M = ue, x = M.requery, A = M.signal, E = function(O, D, L, K) {
            var H = wt["idb://".concat(O, "/").concat(D)];
            if (!H) return [];
            if (!(D = H.queries[L])) return [null, !1, H, null];
            var Q = D[(K.query ? K.query.index.name : null) || ""];
            if (!Q) return [null, !1, H, null];
            switch (L) {
              case "query":
                var re = Q.find(function(he) {
                  return he.req.limit === K.limit && he.req.values === K.values && Za(he.req.query.range, K.query.range);
                });
                return re ? [re, !0, H, Q] : [Q.find(function(he) {
                  return ("limit" in he.req ? he.req.limit : 1 / 0) >= K.limit && (!K.values || he.req.values) && Po(he.req.query.range, K.query.range);
                }), !1, H, Q];
              case "count":
                return re = Q.find(function(he) {
                  return Za(he.req.query.range, K.query.range);
                }), [re, !!re, H, Q];
            }
          }(a, i, "query", h), F = E[0], M = E[1], B = E[2], _ = E[3];
          return F && M ? F.obsSet = h.obsSet : (M = c.query(h).then(function(O) {
            var D = O.result;
            if (F && (F.res = D), v) {
              for (var L = 0, K = D.length; L < K; ++L) Object.freeze(D[L]);
              Object.freeze(D);
            } else O.result = Ne(D);
            return O;
          }).catch(function(O) {
            return _ && F && mt(_, F), Promise.reject(O);
          }), F = { obsSet: h.obsSet, promise: M, subscribers: /* @__PURE__ */ new Set(), type: "query", req: h, dirty: !1 }, _ ? _.push(F) : (_ = [F], (B = B || (wt["idb://".concat(a, "/").concat(i)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[h.query.index.name || ""] = _)), eo(F, _, x, A), F.promise.then(function(O) {
            return { result: Zn(O.result, h, B == null ? void 0 : B.optimisticOps, c, F, v) };
          });
        } });
      } });
    } };
    function da(t, a) {
      return new Proxy(t, { get: function(i, c, p) {
        return c === "db" ? a : Reflect.get(i, c, p);
      } });
    }
    var Rn = (Nt.prototype.version = function(t) {
      if (isNaN(t) || t < 0.1) throw new ve.Type("Given version is not a positive number");
      if (t = Math.round(10 * t) / 10, this.idbdb || this._state.isBeingOpened) throw new ve.Schema("Cannot add version when database is open");
      this.verno = Math.max(this.verno, t);
      var a = this._versions, i = a.filter(function(c) {
        return c._cfg.version === t;
      })[0];
      return i || (i = new this.Version(t), a.push(i), a.sort(an), i.stores({}), this._state.autoSchema = !1, i);
    }, Nt.prototype._whenReady = function(t) {
      var a = this;
      return this.idbdb && (this._state.openComplete || ue.letThrough || this._vip) ? t() : new k(function(i, c) {
        if (a._state.openComplete) return c(new ve.DatabaseClosed(a._state.dbOpenError));
        if (!a._state.isBeingOpened) {
          if (!a._state.autoOpen) return void c(new ve.DatabaseClosed());
          a.open().catch(C);
        }
        a._state.dbReadyPromise.then(i, c);
      }).then(t);
    }, Nt.prototype.use = function(t) {
      var a = t.stack, i = t.create, c = t.level, p = t.name;
      return p && this.unuse({ stack: a, name: p }), t = this._middlewares[a] || (this._middlewares[a] = []), t.push({ stack: a, create: i, level: c ?? 10, name: p }), t.sort(function(h, v) {
        return h.level - v.level;
      }), this;
    }, Nt.prototype.unuse = function(t) {
      var a = t.stack, i = t.name, c = t.create;
      return a && this._middlewares[a] && (this._middlewares[a] = this._middlewares[a].filter(function(p) {
        return c ? p.create !== c : !!i && p.name !== i;
      })), this;
    }, Nt.prototype.open = function() {
      var t = this;
      return Kn(Lt, function() {
        return vo(t);
      });
    }, Nt.prototype._close = function() {
      this.on.close.fire(new CustomEvent("close"));
      var t = this._state, a = na.indexOf(this);
      if (0 <= a && na.splice(a, 1), this.idbdb) {
        try {
          this.idbdb.close();
        } catch {
        }
        this.idbdb = null;
      }
      t.isBeingOpened || (t.dbReadyPromise = new k(function(i) {
        t.dbReadyResolve = i;
      }), t.openCanceller = new k(function(i, c) {
        t.cancelOpen = c;
      }));
    }, Nt.prototype.close = function(i) {
      var a = (i === void 0 ? { disableAutoOpen: !0 } : i).disableAutoOpen, i = this._state;
      a ? (i.isBeingOpened && i.cancelOpen(new ve.DatabaseClosed()), this._close(), i.autoOpen = !1, i.dbOpenError = new ve.DatabaseClosed()) : (this._close(), i.autoOpen = this._options.autoOpen || i.isBeingOpened, i.openComplete = !1, i.dbOpenError = null);
    }, Nt.prototype.delete = function(t) {
      var a = this;
      t === void 0 && (t = { disableAutoOpen: !0 });
      var i = 0 < arguments.length && typeof arguments[0] != "object", c = this._state;
      return new k(function(p, h) {
        function v() {
          a.close(t);
          var x = a._deps.indexedDB.deleteDatabase(a.name);
          x.onsuccess = Mt(function() {
            var A, E, F;
            A = a._deps, E = a.name, F = A.indexedDB, A = A.IDBKeyRange, $a(F) || E === Oa || Ka(F, A).delete(E).catch(C), p();
          }), x.onerror = At(h), x.onblocked = a._fireOnBlocked;
        }
        if (i) throw new ve.InvalidArgument("Invalid closeOptions argument to db.delete()");
        c.isBeingOpened ? c.dbReadyPromise.then(v) : v();
      });
    }, Nt.prototype.backendDB = function() {
      return this.idbdb;
    }, Nt.prototype.isOpen = function() {
      return this.idbdb !== null;
    }, Nt.prototype.hasBeenClosed = function() {
      var t = this._state.dbOpenError;
      return t && t.name === "DatabaseClosed";
    }, Nt.prototype.hasFailed = function() {
      return this._state.dbOpenError !== null;
    }, Nt.prototype.dynamicallyOpened = function() {
      return this._state.autoSchema;
    }, Object.defineProperty(Nt.prototype, "tables", { get: function() {
      var t = this;
      return P(this._allTables).map(function(a) {
        return t._allTables[a];
      });
    }, enumerable: !1, configurable: !0 }), Nt.prototype.transaction = function() {
      var t = (function(a, i, c) {
        var p = arguments.length;
        if (p < 2) throw new ve.InvalidArgument("Too few arguments");
        for (var h = new Array(p - 1); --p; ) h[p - 1] = arguments[p];
        return c = h.pop(), [a, Je(h), c];
      }).apply(this, arguments);
      return this._transaction.apply(this, t);
    }, Nt.prototype._transaction = function(t, a, i) {
      var c = this, p = ue.trans;
      p && p.db === this && t.indexOf("!") === -1 || (p = null);
      var h, v, x = t.indexOf("?") !== -1;
      t = t.replace("!", "").replace("?", "");
      try {
        if (v = a.map(function(E) {
          if (E = E instanceof c.Table ? E.name : E, typeof E != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
          return E;
        }), t == "r" || t === fe) h = fe;
        else {
          if (t != "rw" && t != ga) throw new ve.InvalidArgument("Invalid transaction mode: " + t);
          h = ga;
        }
        if (p) {
          if (p.mode === fe && h === ga) {
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
        return p ? p._promise(null, function(F, M) {
          M(E);
        }) : Bt(E);
      }
      var A = (function E(F, M, B, _, O) {
        return k.resolve().then(function() {
          var D = ue.transless || ue, L = F._createTransaction(M, B, F._dbSchema, _);
          if (L.explicit = !0, D = { trans: L, transless: D }, _) L.idbtrans = _.idbtrans;
          else try {
            L.create(), L.idbtrans._explicit = !0, F._state.PR1398_maxLoop = 3;
          } catch (Q) {
            return Q.name === Le.InvalidState && F.isOpen() && 0 < --F._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), F.close({ disableAutoOpen: !1 }), F.open().then(function() {
              return E(F, M, B, null, O);
            })) : Bt(Q);
          }
          var K, H = R(O);
          return H && On(), D = k.follow(function() {
            var Q;
            (K = O.call(L, L)) && (H ? (Q = Mn.bind(null, null), K.then(Q, Q)) : typeof K.next == "function" && typeof K.throw == "function" && (K = qa(K)));
          }, D), (K && typeof K.then == "function" ? k.resolve(K).then(function(Q) {
            return L.active ? Q : Bt(new ve.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
          }) : D.then(function() {
            return K;
          })).then(function(Q) {
            return _ && L._resolve(), L._completion.then(function() {
              return Q;
            });
          }).catch(function(Q) {
            return L._reject(Q), Bt(Q);
          });
        });
      }).bind(null, this, h, v, p, i);
      return p ? p._promise(h, A, "lock") : ue.trans ? Kn(ue.transless, function() {
        return c._whenReady(A);
      }) : this._whenReady(A);
    }, Nt.prototype.table = function(t) {
      if (!ee(this._allTables, t)) throw new ve.InvalidTable("Table ".concat(t, " does not exist"));
      return this._allTables[t];
    }, Nt);
    function Nt(t, a) {
      var i = this;
      this._middlewares = {}, this.verno = 0;
      var c = Nt.dependencies;
      this._options = a = d({ addons: Nt.addons, autoOpen: !0, indexedDB: c.indexedDB, IDBKeyRange: c.IDBKeyRange, cache: "cloned" }, a), this._deps = { indexedDB: a.indexedDB, IDBKeyRange: a.IDBKeyRange }, c = a.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
      var p, h, v, x, A, E = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: C, dbReadyPromise: null, cancelOpen: C, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: a.autoOpen };
      E.dbReadyPromise = new k(function(M) {
        E.dbReadyResolve = M;
      }), E.openCanceller = new k(function(M, B) {
        E.cancelOpen = B;
      }), this._state = E, this.name = t, this.on = wa(this, "populate", "blocked", "versionchange", "close", { ready: [gt, C] }), this.once = function(M, B) {
        var _ = function() {
          for (var O = [], D = 0; D < arguments.length; D++) O[D] = arguments[D];
          i.on(M).unsubscribe(_), B.apply(i, O);
        };
        return i.on(M, _);
      }, this.on.ready.subscribe = xe(this.on.ready.subscribe, function(M) {
        return function(B, _) {
          Nt.vip(function() {
            var O, D = i._state;
            D.openComplete ? (D.dbOpenError || k.resolve().then(B), _ && M(B)) : D.onReadyBeingFired ? (D.onReadyBeingFired.push(B), _ && M(B)) : (M(B), O = i, _ || M(function L() {
              O.on.ready.unsubscribe(B), O.on.ready.unsubscribe(L);
            }));
          });
        };
      }), this.Collection = (p = this, ya(yr.prototype, function(K, L) {
        this.db = p;
        var _ = Fe, O = null;
        if (L) try {
          _ = L();
        } catch (H) {
          O = H;
        }
        var D = K._ctx, L = D.table, K = L.hook.reading.fire;
        this._ctx = { table: L, index: D.index, isPrimKey: !D.index || L.schema.primKey.keyPath && D.index === L.schema.primKey.name, range: _, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: O, or: D.or, valueMapper: K !== G ? K : null };
      })), this.Table = (h = this, ya(wr.prototype, function(M, B, _) {
        this.db = h, this._tx = _, this.name = M, this.schema = B, this.hook = h._allTables[M] ? h._allTables[M].hook : wa(null, { creating: [Re, C], reading: [z, G], updating: [Oe, C], deleting: [Ve, C] });
      })), this.Transaction = (v = this, ya(br.prototype, function(M, B, _, O, D) {
        var L = this;
        M !== "readonly" && B.forEach(function(K) {
          K = (K = _[K]) === null || K === void 0 ? void 0 : K.yProps, K && (B = B.concat(K.map(function(H) {
            return H.updatesTable;
          })));
        }), this.db = v, this.mode = M, this.storeNames = B, this.schema = _, this.chromeTransactionDurability = O, this.idbtrans = null, this.on = wa(this, "complete", "error", "abort"), this.parent = D || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new k(function(K, H) {
          L._resolve = K, L._reject = H;
        }), this._completion.then(function() {
          L.active = !1, L.on.complete.fire();
        }, function(K) {
          var H = L.active;
          return L.active = !1, L.on.error.fire(K), L.parent ? L.parent._reject(K) : H && L.idbtrans && L.idbtrans.abort(), Bt(K);
        });
      })), this.Version = (x = this, ya(ln.prototype, function(M) {
        this.db = x, this._cfg = { version: M, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
      })), this.WhereClause = (A = this, ya(ia.prototype, function(M, B, _) {
        if (this.db = A, this._ctx = { table: M, index: B === ":id" ? null : B, or: _ }, this._cmp = this._ascending = st, this._descending = function(O, D) {
          return st(D, O);
        }, this._max = function(O, D) {
          return 0 < st(O, D) ? O : D;
        }, this._min = function(O, D) {
          return st(O, D) < 0 ? O : D;
        }, this._IDBKeyRange = A._deps.IDBKeyRange, !this._IDBKeyRange) throw new ve.MissingAPI();
      })), this.on("versionchange", function(M) {
        0 < M.newVersion ? console.warn("Another connection wants to upgrade database '".concat(i.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(i.name, "'. Closing db now to resume the delete request.")), i.close({ disableAutoOpen: !1 });
      }), this.on("blocked", function(M) {
        !M.newVersion || M.newVersion < M.oldVersion ? console.warn("Dexie.delete('".concat(i.name, "') was blocked")) : console.warn("Upgrade '".concat(i.name, "' blocked by other connection holding version ").concat(M.oldVersion / 10));
      }), this._maxKey = zn(a.IDBKeyRange), this._createTransaction = function(M, B, _, O) {
        return new i.Transaction(M, B, _, i._options.chromeTransactionDurability, O);
      }, this._fireOnBlocked = function(M) {
        i.on("blocked").fire(M), na.filter(function(B) {
          return B.name === i.name && B !== i && !B._state.vcFired;
        }).map(function(B) {
          return B.on("versionchange").fire(M);
        });
      }, this.use(_r), this.use(xo), this.use(So), this.use(ko), this.use(Ya);
      var F = new Proxy(this, { get: function(M, B, _) {
        if (B === "_vip") return !0;
        if (B === "table") return function(D) {
          return da(i.table(D), F);
        };
        var O = Reflect.get(M, B, _);
        return O instanceof wr ? da(O, F) : B === "tables" ? O.map(function(D) {
          return da(D, F);
        }) : B === "_createTransaction" ? function() {
          return da(O.apply(this, arguments), F);
        } : O;
      } });
      this.vip = F, c.forEach(function(M) {
        return M(i);
      });
    }
    var Aa, hn = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", to = (Qn.prototype.subscribe = function(t, a, i) {
      return this._subscribe(t && typeof t != "function" ? t : { next: t, error: a, complete: i });
    }, Qn.prototype[hn] = function() {
      return this;
    }, Qn);
    function Qn(t) {
      this._subscribe = t;
    }
    try {
      Aa = { indexedDB: m.indexedDB || m.mozIndexedDB || m.webkitIndexedDB || m.msIndexedDB, IDBKeyRange: m.IDBKeyRange || m.webkitIDBKeyRange };
    } catch {
      Aa = { indexedDB: null, IDBKeyRange: null };
    }
    function Qa(t) {
      var a, i = !1, c = new to(function(p) {
        var h = R(t), v, x = !1, A = {}, E = {}, F = { get closed() {
          return x;
        }, unsubscribe: function() {
          x || (x = !0, v && v.abort(), M && En.storagemutated.unsubscribe(_));
        } };
        p.start && p.start(F);
        var M = !1, B = function() {
          return hr(O);
        }, _ = function(D) {
          Tn(A, D), xa(E, A) && B();
        }, O = function() {
          var D, L, K;
          !x && Aa.indexedDB && (A = {}, D = {}, v && v.abort(), v = new AbortController(), K = function(H) {
            var Q = Qt();
            try {
              h && On();
              var re = Cn(t, H);
              return re = h ? re.finally(Mn) : re;
            } finally {
              Q && on();
            }
          }(L = { subscr: D, signal: v.signal, requery: B, querier: t, trans: null }), Promise.resolve(K).then(function(H) {
            i = !0, a = H, x || L.signal.aborted || (A = {}, function(Q) {
              for (var re in Q) if (ee(Q, re)) return;
              return 1;
            }(E = D) || M || (En(ka, _), M = !0), hr(function() {
              return !x && p.next && p.next(H);
            }));
          }, function(H) {
            i = !1, ["DatabaseClosedError", "AbortError"].includes(H == null ? void 0 : H.name) || x || hr(function() {
              x || p.error && p.error(H);
            });
          }));
        };
        return setTimeout(B, 0), F;
      });
      return c.hasValue = function() {
        return i;
      }, c.getValue = function() {
        return a;
      }, c;
    }
    var Xn = Rn;
    function Rr(t) {
      var a = Vn;
      try {
        Vn = !0, En.storagemutated.fire(t), Ir(t, !0);
      } finally {
        Vn = a;
      }
    }
    j(Xn, d(d({}, Wt), { delete: function(t) {
      return new Xn(t, { addons: [] }).delete();
    }, exists: function(t) {
      return new Xn(t, { addons: [] }).open().then(function(a) {
        return a.close(), !0;
      }).catch("NoSuchDatabaseError", function() {
        return !1;
      });
    }, getDatabaseNames: function(t) {
      try {
        return a = Xn.dependencies, i = a.indexedDB, a = a.IDBKeyRange, ($a(i) ? Promise.resolve(i.databases()).then(function(c) {
          return c.map(function(p) {
            return p.name;
          }).filter(function(p) {
            return p !== Oa;
          });
        }) : Ka(i, a).toCollection().primaryKeys()).then(t);
      } catch {
        return Bt(new ve.MissingAPI());
      }
      var a, i;
    }, defineClass: function() {
      return function(t) {
        T(this, t);
      };
    }, ignoreTransaction: function(t) {
      return ue.trans ? Kn(ue.transless, t) : t();
    }, vip: Ha, async: function(t) {
      return function() {
        try {
          var a = qa(t.apply(this, arguments));
          return a && typeof a.then == "function" ? a : k.resolve(a);
        } catch (i) {
          return Bt(i);
        }
      };
    }, spawn: function(t, a, i) {
      try {
        var c = qa(t.apply(i, a || []));
        return c && typeof c.then == "function" ? c : k.resolve(c);
      } catch (p) {
        return Bt(p);
      }
    }, currentTransaction: { get: function() {
      return ue.trans || null;
    } }, waitFor: function(t, a) {
      return a = k.resolve(typeof t == "function" ? Xn.ignoreTransaction(t) : t).timeout(a || 6e4), ue.trans ? ue.trans.waitFor(a) : a;
    }, Promise: k, debug: { get: function() {
      return _e;
    }, set: function(t) {
      dn(t);
    } }, derive: ge, extend: T, props: j, override: xe, Events: wa, on: En, liveQuery: Qa, extendObservabilitySet: Tn, getByKeyPath: ie, setByKeyPath: se, delByKeyPath: function(t, a) {
      typeof a == "string" ? se(t, a, void 0) : "length" in a && [].map.call(a, function(i) {
        se(t, i, void 0);
      });
    }, shallowClone: dt, deepClone: Ne, getObjectDiff: Er, cmp: st, asap: Me, minKey: -1 / 0, addons: [], connections: na, errnames: Le, dependencies: Aa, cache: wt, semVer: "4.2.1", version: "4.2.1".split(".").map(function(t) {
      return parseInt(t);
    }).reduce(function(t, a, i) {
      return t + a / Math.pow(10, 2 * i);
    }) })), Xn.maxKey = zn(Xn.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (En(ka, function(t) {
      Vn || (t = new CustomEvent(Et, { detail: t }), Vn = !0, dispatchEvent(t), Vn = !1);
    }), addEventListener(Et, function(t) {
      t = t.detail, Vn || Rr(t);
    }));
    var pa, Vn = !1, no = function() {
    };
    return typeof BroadcastChannel < "u" && ((no = function() {
      (pa = new BroadcastChannel(Et)).onmessage = function(t) {
        return t.data && Rr(t.data);
      };
    })(), typeof pa.unref == "function" && pa.unref(), En(ka, function(t) {
      Vn || pa.postMessage(t);
    })), typeof addEventListener < "u" && (addEventListener("pagehide", function(t) {
      if (!Rn.disableBfCache && t.persisted) {
        _e && console.debug("Dexie: handling persisted pagehide"), pa != null && pa.close();
        for (var a = 0, i = na; a < i.length; a++) i[a].close({ disableAutoOpen: !1 });
      }
    }), addEventListener("pageshow", function(t) {
      !Rn.disableBfCache && t.persisted && (_e && console.debug("Dexie: handling persisted pageshow"), no(), Rr({ all: new zt(-1 / 0, [[]]) }));
    })), k.rejectionMapper = function(t, a) {
      return !t || t instanceof Ae || t instanceof TypeError || t instanceof SyntaxError || !t.name || !Ft[t.name] ? t : (a = new Ft[t.name](a || t.message, t), "stack" in t && we(a, "stack", { get: function() {
        return this.inner.stack;
      } }), a);
    }, dn(_e), d(Rn, Object.freeze({ __proto__: null, Dexie: Rn, liveQuery: Qa, Entity: zr, cmp: st, PropModification: Bn, replacePrefix: function(t, a) {
      return new Bn({ replacePrefix: [t, a] });
    }, add: function(t) {
      return new Bn({ add: t });
    }, remove: function(t) {
      return new Bn({ remove: t });
    }, default: Rn, RangeSet: zt, mergeRanges: vt, rangesOverlap: Ga }), { default: Rn }), Rn;
  });
})(Vs);
var el = Vs.exports;
const ri = /* @__PURE__ */ ui(el), ys = Symbol.for("Dexie"), Lr = globalThis[ys] || (globalThis[ys] = ri);
if (ri.semVer !== Lr.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${ri.semVer} and ${Lr.semVer}`);
const {
  liveQuery: tl,
  mergeRanges: nl,
  rangesOverlap: al,
  RangeSet: rl,
  cmp: ol,
  Entity: il,
  PropModification: sl,
  replacePrefix: cl,
  add: ul,
  remove: ll,
  DexieYProvider: dl
} = Lr, pl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Dexie: Lr,
  DexieYProvider: dl,
  Entity: il,
  PropModification: sl,
  RangeSet: rl,
  add: ul,
  cmp: ol,
  default: Lr,
  liveQuery: tl,
  mergeRanges: nl,
  rangesOverlap: al,
  remove: ll,
  replacePrefix: cl
}, Symbol.toStringTag, { value: "Module" })), fl = /* @__PURE__ */ Fs(pl);
var hl = "Expected a function", bs = NaN, gl = "[object Symbol]", ml = /^\s+|\s+$/g, wl = /^[-+]0x[0-9a-f]+$/i, yl = /^0b[01]+$/i, bl = /^0o[0-7]+$/i, vl = parseInt, kl = typeof lr == "object" && lr && lr.Object === Object && lr, Sl = typeof self == "object" && self && self.Object === Object && self, Pl = kl || Sl || Function("return this")(), xl = Object.prototype, Cl = xl.toString, Ml = Math.max, Il = Math.min, Xo = function() {
  return Pl.Date.now();
};
function Al(f, o, u) {
  var d, y, m, P, I, T, U = 0, J = !1, ee = !1, j = !0;
  if (typeof f != "function")
    throw new TypeError(hl);
  o = vs(o) || 0, oi(u) && (J = !!u.leading, ee = "maxWait" in u, m = ee ? Ml(vs(u.maxWait) || 0, o) : m, j = "trailing" in u ? !!u.trailing : j);
  function W(ie) {
    var se = d, dt = y;
    return d = y = void 0, U = ie, P = f.apply(dt, se), P;
  }
  function we(ie) {
    return U = ie, I = setTimeout(Ce, o), J ? W(ie) : P;
  }
  function ge(ie) {
    var se = ie - T, dt = ie - U, rt = o - se;
    return ee ? Il(rt, m - dt) : rt;
  }
  function q(ie) {
    var se = ie - T, dt = ie - U;
    return T === void 0 || se >= o || se < 0 || ee && dt >= m;
  }
  function Ce() {
    var ie = Xo();
    if (q(ie))
      return Z(ie);
    I = setTimeout(Ce, ge(ie));
  }
  function Z(ie) {
    return I = void 0, j && d ? W(ie) : (d = y = void 0, P);
  }
  function xe() {
    I !== void 0 && clearTimeout(I), U = 0, d = T = y = I = void 0;
  }
  function te() {
    return I === void 0 ? P : Z(Xo());
  }
  function Me() {
    var ie = Xo(), se = q(ie);
    if (d = arguments, y = this, T = ie, se) {
      if (I === void 0)
        return we(T);
      if (ee)
        return I = setTimeout(Ce, o), W(T);
    }
    return I === void 0 && (I = setTimeout(Ce, o)), P;
  }
  return Me.cancel = xe, Me.flush = te, Me;
}
function oi(f) {
  var o = typeof f;
  return !!f && (o == "object" || o == "function");
}
function El(f) {
  return !!f && typeof f == "object";
}
function _l(f) {
  return typeof f == "symbol" || El(f) && Cl.call(f) == gl;
}
function vs(f) {
  if (typeof f == "number")
    return f;
  if (_l(f))
    return bs;
  if (oi(f)) {
    var o = typeof f.valueOf == "function" ? f.valueOf() : f;
    f = oi(o) ? o + "" : o;
  }
  if (typeof f != "string")
    return f === 0 ? f : +f;
  f = f.replace(ml, "");
  var u = yl.test(f);
  return u || bl.test(f) ? vl(f.slice(2), u ? 2 : 8) : wl.test(f) ? bs : +f;
}
var Tl = Al, ii = { exports: {} }, tt = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ks;
function Rl() {
  if (ks) return tt;
  ks = 1;
  var f = Symbol.for("react.transitional.element"), o = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), m = Symbol.for("react.consumer"), P = Symbol.for("react.context"), I = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), U = Symbol.for("react.memo"), J = Symbol.for("react.lazy"), ee = Symbol.for("react.activity"), j = Symbol.iterator;
  function W(R) {
    return R === null || typeof R != "object" ? null : (R = j && R[j] || R["@@iterator"], typeof R == "function" ? R : null);
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
  }, ge = Object.assign, q = {};
  function Ce(R, ce, Ae) {
    this.props = R, this.context = ce, this.refs = q, this.updater = Ae || we;
  }
  Ce.prototype.isReactComponent = {}, Ce.prototype.setState = function(R, ce) {
    if (typeof R != "object" && typeof R != "function" && R != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, R, ce, "setState");
  }, Ce.prototype.forceUpdate = function(R) {
    this.updater.enqueueForceUpdate(this, R, "forceUpdate");
  };
  function Z() {
  }
  Z.prototype = Ce.prototype;
  function xe(R, ce, Ae) {
    this.props = R, this.context = ce, this.refs = q, this.updater = Ae || we;
  }
  var te = xe.prototype = new Z();
  te.constructor = xe, ge(te, Ce.prototype), te.isPureReactComponent = !0;
  var Me = Array.isArray;
  function ie() {
  }
  var se = { H: null, A: null, T: null, S: null }, dt = Object.prototype.hasOwnProperty;
  function rt(R, ce, Ae) {
    var De = Ae.ref;
    return {
      $$typeof: f,
      type: R,
      key: ce,
      ref: De !== void 0 ? De : null,
      props: Ae
    };
  }
  function Je(R, ce) {
    return rt(R.type, ce, R.props);
  }
  function ut(R) {
    return typeof R == "object" && R !== null && R.$$typeof === f;
  }
  function Rt(R) {
    var ce = { "=": "=0", ":": "=2" };
    return "$" + R.replace(/[=:]/g, function(Ae) {
      return ce[Ae];
    });
  }
  var Ne = /\/+/g;
  function Pt(R, ce) {
    return typeof R == "object" && R !== null && R.key != null ? Rt("" + R.key) : ce.toString(36);
  }
  function Be(R) {
    switch (R.status) {
      case "fulfilled":
        return R.value;
      case "rejected":
        throw R.reason;
      default:
        switch (typeof R.status == "string" ? R.then(ie, ie) : (R.status = "pending", R.then(
          function(ce) {
            R.status === "pending" && (R.status = "fulfilled", R.value = ce);
          },
          function(ce) {
            R.status === "pending" && (R.status = "rejected", R.reason = ce);
          }
        )), R.status) {
          case "fulfilled":
            return R.value;
          case "rejected":
            throw R.reason;
        }
    }
    throw R;
  }
  function kt(R, ce, Ae, De, Ye) {
    var et = typeof R;
    (et === "undefined" || et === "boolean") && (R = null);
    var Le = !1;
    if (R === null) Le = !0;
    else
      switch (et) {
        case "bigint":
        case "string":
        case "number":
          Le = !0;
          break;
        case "object":
          switch (R.$$typeof) {
            case f:
            case o:
              Le = !0;
              break;
            case J:
              return Le = R._init, kt(
                Le(R._payload),
                ce,
                Ae,
                De,
                Ye
              );
          }
      }
    if (Le)
      return Ye = Ye(R), Le = De === "" ? "." + Pt(R, 0) : De, Me(Ye) ? (Ae = "", Le != null && (Ae = Le.replace(Ne, "$&/") + "/"), kt(Ye, ce, Ae, "", function(Ft) {
        return Ft;
      })) : Ye != null && (ut(Ye) && (Ye = Je(
        Ye,
        Ae + (Ye.key == null || R && R.key === Ye.key ? "" : ("" + Ye.key).replace(
          Ne,
          "$&/"
        ) + "/") + Le
      )), ce.push(Ye)), 1;
    Le = 0;
    var Dt = De === "" ? "." : De + ":";
    if (Me(R))
      for (var ve = 0; ve < R.length; ve++)
        De = R[ve], et = Dt + Pt(De, ve), Le += kt(
          De,
          ce,
          Ae,
          et,
          Ye
        );
    else if (ve = W(R), typeof ve == "function")
      for (R = ve.call(R), ve = 0; !(De = R.next()).done; )
        De = De.value, et = Dt + Pt(De, ve++), Le += kt(
          De,
          ce,
          Ae,
          et,
          Ye
        );
    else if (et === "object") {
      if (typeof R.then == "function")
        return kt(
          Be(R),
          ce,
          Ae,
          De,
          Ye
        );
      throw ce = String(R), Error(
        "Objects are not valid as a React child (found: " + (ce === "[object Object]" ? "object with keys {" + Object.keys(R).join(", ") + "}" : ce) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return Le;
  }
  function Tt(R, ce, Ae) {
    if (R == null) return R;
    var De = [], Ye = 0;
    return kt(R, De, "", "", function(et) {
      return ce.call(Ae, et, Ye++);
    }), De;
  }
  function mt(R) {
    if (R._status === -1) {
      var ce = R._result;
      ce = ce(), ce.then(
        function(Ae) {
          (R._status === 0 || R._status === -1) && (R._status = 1, R._result = Ae);
        },
        function(Ae) {
          (R._status === 0 || R._status === -1) && (R._status = 2, R._result = Ae);
        }
      ), R._status === -1 && (R._status = 0, R._result = ce);
    }
    if (R._status === 1) return R._result.default;
    throw R._result;
  }
  var ht = typeof reportError == "function" ? reportError : function(R) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var ce = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof R == "object" && R !== null && typeof R.message == "string" ? String(R.message) : String(R),
        error: R
      });
      if (!window.dispatchEvent(ce)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", R);
      return;
    }
    console.error(R);
  }, je = {
    map: Tt,
    forEach: function(R, ce, Ae) {
      Tt(
        R,
        function() {
          ce.apply(this, arguments);
        },
        Ae
      );
    },
    count: function(R) {
      var ce = 0;
      return Tt(R, function() {
        ce++;
      }), ce;
    },
    toArray: function(R) {
      return Tt(R, function(ce) {
        return ce;
      }) || [];
    },
    only: function(R) {
      if (!ut(R))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return R;
    }
  };
  return tt.Activity = ee, tt.Children = je, tt.Component = Ce, tt.Fragment = u, tt.Profiler = y, tt.PureComponent = xe, tt.StrictMode = d, tt.Suspense = T, tt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = se, tt.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(R) {
      return se.H.useMemoCache(R);
    }
  }, tt.cache = function(R) {
    return function() {
      return R.apply(null, arguments);
    };
  }, tt.cacheSignal = function() {
    return null;
  }, tt.cloneElement = function(R, ce, Ae) {
    if (R == null)
      throw Error(
        "The argument must be a React element, but you passed " + R + "."
      );
    var De = ge({}, R.props), Ye = R.key;
    if (ce != null)
      for (et in ce.key !== void 0 && (Ye = "" + ce.key), ce)
        !dt.call(ce, et) || et === "key" || et === "__self" || et === "__source" || et === "ref" && ce.ref === void 0 || (De[et] = ce[et]);
    var et = arguments.length - 2;
    if (et === 1) De.children = Ae;
    else if (1 < et) {
      for (var Le = Array(et), Dt = 0; Dt < et; Dt++)
        Le[Dt] = arguments[Dt + 2];
      De.children = Le;
    }
    return rt(R.type, Ye, De);
  }, tt.createContext = function(R) {
    return R = {
      $$typeof: P,
      _currentValue: R,
      _currentValue2: R,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, R.Provider = R, R.Consumer = {
      $$typeof: m,
      _context: R
    }, R;
  }, tt.createElement = function(R, ce, Ae) {
    var De, Ye = {}, et = null;
    if (ce != null)
      for (De in ce.key !== void 0 && (et = "" + ce.key), ce)
        dt.call(ce, De) && De !== "key" && De !== "__self" && De !== "__source" && (Ye[De] = ce[De]);
    var Le = arguments.length - 2;
    if (Le === 1) Ye.children = Ae;
    else if (1 < Le) {
      for (var Dt = Array(Le), ve = 0; ve < Le; ve++)
        Dt[ve] = arguments[ve + 2];
      Ye.children = Dt;
    }
    if (R && R.defaultProps)
      for (De in Le = R.defaultProps, Le)
        Ye[De] === void 0 && (Ye[De] = Le[De]);
    return rt(R, et, Ye);
  }, tt.createRef = function() {
    return { current: null };
  }, tt.forwardRef = function(R) {
    return { $$typeof: I, render: R };
  }, tt.isValidElement = ut, tt.lazy = function(R) {
    return {
      $$typeof: J,
      _payload: { _status: -1, _result: R },
      _init: mt
    };
  }, tt.memo = function(R, ce) {
    return {
      $$typeof: U,
      type: R,
      compare: ce === void 0 ? null : ce
    };
  }, tt.startTransition = function(R) {
    var ce = se.T, Ae = {};
    se.T = Ae;
    try {
      var De = R(), Ye = se.S;
      Ye !== null && Ye(Ae, De), typeof De == "object" && De !== null && typeof De.then == "function" && De.then(ie, ht);
    } catch (et) {
      ht(et);
    } finally {
      ce !== null && Ae.types !== null && (ce.types = Ae.types), se.T = ce;
    }
  }, tt.unstable_useCacheRefresh = function() {
    return se.H.useCacheRefresh();
  }, tt.use = function(R) {
    return se.H.use(R);
  }, tt.useActionState = function(R, ce, Ae) {
    return se.H.useActionState(R, ce, Ae);
  }, tt.useCallback = function(R, ce) {
    return se.H.useCallback(R, ce);
  }, tt.useContext = function(R) {
    return se.H.useContext(R);
  }, tt.useDebugValue = function() {
  }, tt.useDeferredValue = function(R, ce) {
    return se.H.useDeferredValue(R, ce);
  }, tt.useEffect = function(R, ce) {
    return se.H.useEffect(R, ce);
  }, tt.useEffectEvent = function(R) {
    return se.H.useEffectEvent(R);
  }, tt.useId = function() {
    return se.H.useId();
  }, tt.useImperativeHandle = function(R, ce, Ae) {
    return se.H.useImperativeHandle(R, ce, Ae);
  }, tt.useInsertionEffect = function(R, ce) {
    return se.H.useInsertionEffect(R, ce);
  }, tt.useLayoutEffect = function(R, ce) {
    return se.H.useLayoutEffect(R, ce);
  }, tt.useMemo = function(R, ce) {
    return se.H.useMemo(R, ce);
  }, tt.useOptimistic = function(R, ce) {
    return se.H.useOptimistic(R, ce);
  }, tt.useReducer = function(R, ce, Ae) {
    return se.H.useReducer(R, ce, Ae);
  }, tt.useRef = function(R) {
    return se.H.useRef(R);
  }, tt.useState = function(R) {
    return se.H.useState(R);
  }, tt.useSyncExternalStore = function(R, ce, Ae) {
    return se.H.useSyncExternalStore(
      R,
      ce,
      Ae
    );
  }, tt.useTransition = function() {
    return se.H.useTransition();
  }, tt.version = "19.2.3", tt;
}
var Nr = { exports: {} };
Nr.exports;
var Ss;
function Dl() {
  return Ss || (Ss = 1, function(f, o) {
    var u = {};
    /**
     * @license React
     * react.development.js
     *
     * Copyright (c) Meta Platforms, Inc. and affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    u.NODE_ENV !== "production" && function() {
      function d(g, k) {
        Object.defineProperty(P.prototype, g, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              k[0],
              k[1]
            );
          }
        });
      }
      function y(g) {
        return g === null || typeof g != "object" ? null : (g = G && g[G] || g["@@iterator"], typeof g == "function" ? g : null);
      }
      function m(g, k) {
        g = (g = g.constructor) && (g.displayName || g.name) || "ReactClass";
        var de = g + "." + k;
        z[de] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          k,
          g
        ), z[de] = !0);
      }
      function P(g, k, de) {
        this.props = g, this.context = k, this.refs = Ve, this.updater = de || ne;
      }
      function I() {
      }
      function T(g, k, de) {
        this.props = g, this.context = k, this.refs = Ve, this.updater = de || ne;
      }
      function U() {
      }
      function J(g) {
        return "" + g;
      }
      function ee(g) {
        try {
          J(g);
          var k = !1;
        } catch {
          k = !0;
        }
        if (k) {
          k = console;
          var de = k.error, ye = typeof Symbol == "function" && Symbol.toStringTag && g[Symbol.toStringTag] || g.constructor.name || "Object";
          return de.call(
            k,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            ye
          ), J(g);
        }
      }
      function j(g) {
        if (g == null) return null;
        if (typeof g == "function")
          return g.$$typeof === gt ? null : g.displayName || g.name || null;
        if (typeof g == "string") return g;
        switch (g) {
          case ce:
            return "Fragment";
          case De:
            return "Profiler";
          case Ae:
            return "StrictMode";
          case Dt:
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
            case R:
              return "Portal";
            case et:
              return g.displayName || "Context";
            case Ye:
              return (g._context.displayName || "Context") + ".Consumer";
            case Le:
              var k = g.render;
              return g = g.displayName, g || (g = k.displayName || k.name || "", g = g !== "" ? "ForwardRef(" + g + ")" : "ForwardRef"), g;
            case Ft:
              return k = g.displayName || null, k !== null ? k : j(g.type) || "Memo";
            case Wt:
              k = g._payload, g = g._init;
              try {
                return j(g(k));
              } catch {
              }
          }
        return null;
      }
      function W(g) {
        if (g === ce) return "<>";
        if (typeof g == "object" && g !== null && g.$$typeof === Wt)
          return "<...>";
        try {
          var k = j(g);
          return k ? "<" + k + ">" : "<...>";
        } catch {
          return "<...>";
        }
      }
      function we() {
        var g = _e.A;
        return g === null ? null : g.getOwner();
      }
      function ge() {
        return Error("react-stack-top-frame");
      }
      function q(g) {
        if (dn.call(g, "key")) {
          var k = Object.getOwnPropertyDescriptor(g, "key").get;
          if (k && k.isReactWarning) return !1;
        }
        return g.key !== void 0;
      }
      function Ce(g, k) {
        function de() {
          pn || (pn = !0, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            k
          ));
        }
        de.isReactWarning = !0, Object.defineProperty(g, "key", {
          get: de,
          configurable: !0
        });
      }
      function Z() {
        var g = j(this.type);
        return it[g] || (it[g] = !0, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        )), g = this.props.ref, g !== void 0 ? g : null;
      }
      function xe(g, k, de, ye, Ee, He) {
        var ze = de.ref;
        return g = {
          $$typeof: je,
          type: g,
          key: k,
          props: de,
          _owner: ye
        }, (ze !== void 0 ? ze : null) !== null ? Object.defineProperty(g, "ref", {
          enumerable: !1,
          get: Z
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
          value: Ee
        }), Object.defineProperty(g, "_debugTask", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: He
        }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
      }
      function te(g, k) {
        return k = xe(
          g.type,
          k,
          g.props,
          g._owner,
          g._debugStack,
          g._debugTask
        ), g._store && (k._store.validated = g._store.validated), k;
      }
      function Me(g) {
        ie(g) ? g._store && (g._store.validated = 1) : typeof g == "object" && g !== null && g.$$typeof === Wt && (g._payload.status === "fulfilled" ? ie(g._payload.value) && g._payload.value._store && (g._payload.value._store.validated = 1) : g._store && (g._store.validated = 1));
      }
      function ie(g) {
        return typeof g == "object" && g !== null && g.$$typeof === je;
      }
      function se(g) {
        var k = { "=": "=0", ":": "=2" };
        return "$" + g.replace(/[=:]/g, function(de) {
          return k[de];
        });
      }
      function dt(g, k) {
        return typeof g == "object" && g !== null && g.key != null ? (ee(g.key), se("" + g.key)) : k.toString(36);
      }
      function rt(g) {
        switch (g.status) {
          case "fulfilled":
            return g.value;
          case "rejected":
            throw g.reason;
          default:
            switch (typeof g.status == "string" ? g.then(U, U) : (g.status = "pending", g.then(
              function(k) {
                g.status === "pending" && (g.status = "fulfilled", g.value = k);
              },
              function(k) {
                g.status === "pending" && (g.status = "rejected", g.reason = k);
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
      function Je(g, k, de, ye, Ee) {
        var He = typeof g;
        (He === "undefined" || He === "boolean") && (g = null);
        var ze = !1;
        if (g === null) ze = !0;
        else
          switch (He) {
            case "bigint":
            case "string":
            case "number":
              ze = !0;
              break;
            case "object":
              switch (g.$$typeof) {
                case je:
                case R:
                  ze = !0;
                  break;
                case Wt:
                  return ze = g._init, Je(
                    ze(g._payload),
                    k,
                    de,
                    ye,
                    Ee
                  );
              }
          }
        if (ze) {
          ze = g, Ee = Ee(ze);
          var ft = ye === "" ? "." + dt(ze, 0) : ye;
          return bt(Ee) ? (de = "", ft != null && (de = ft.replace(sn, "$&/") + "/"), Je(Ee, k, de, "", function(Qt) {
            return Qt;
          })) : Ee != null && (ie(Ee) && (Ee.key != null && (ze && ze.key === Ee.key || ee(Ee.key)), de = te(
            Ee,
            de + (Ee.key == null || ze && ze.key === Ee.key ? "" : ("" + Ee.key).replace(
              sn,
              "$&/"
            ) + "/") + ft
          ), ye !== "" && ze != null && ie(ze) && ze.key == null && ze._store && !ze._store.validated && (de._store.validated = 2), Ee = de), k.push(Ee)), 1;
        }
        if (ze = 0, ft = ye === "" ? "." : ye + ":", bt(g))
          for (var at = 0; at < g.length; at++)
            ye = g[at], He = ft + dt(ye, at), ze += Je(
              ye,
              k,
              de,
              He,
              Ee
            );
        else if (at = y(g), typeof at == "function")
          for (at === g.entries && ($t || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), $t = !0), g = at.call(g), at = 0; !(ye = g.next()).done; )
            ye = ye.value, He = ft + dt(ye, at++), ze += Je(
              ye,
              k,
              de,
              He,
              Ee
            );
        else if (He === "object") {
          if (typeof g.then == "function")
            return Je(
              rt(g),
              k,
              de,
              ye,
              Ee
            );
          throw k = String(g), Error(
            "Objects are not valid as a React child (found: " + (k === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : k) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return ze;
      }
      function ut(g, k, de) {
        if (g == null) return g;
        var ye = [], Ee = 0;
        return Je(g, ye, "", "", function(He) {
          return k.call(de, He, Ee++);
        }), ye;
      }
      function Rt(g) {
        if (g._status === -1) {
          var k = g._ioInfo;
          k != null && (k.start = k.end = performance.now()), k = g._result;
          var de = k();
          if (de.then(
            function(Ee) {
              if (g._status === 0 || g._status === -1) {
                g._status = 1, g._result = Ee;
                var He = g._ioInfo;
                He != null && (He.end = performance.now()), de.status === void 0 && (de.status = "fulfilled", de.value = Ee);
              }
            },
            function(Ee) {
              if (g._status === 0 || g._status === -1) {
                g._status = 2, g._result = Ee;
                var He = g._ioInfo;
                He != null && (He.end = performance.now()), de.status === void 0 && (de.status = "rejected", de.reason = Ee);
              }
            }
          ), k = g._ioInfo, k != null) {
            k.value = de;
            var ye = de.displayName;
            typeof ye == "string" && (k.name = ye);
          }
          g._status === -1 && (g._status = 0, g._result = de);
        }
        if (g._status === 1)
          return k = g._result, k === void 0 && console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
            k
          ), "default" in k || console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
            k
          ), k.default;
        throw g._result;
      }
      function Ne() {
        var g = _e.H;
        return g === null && console.error(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
        ), g;
      }
      function Pt() {
        _e.asyncTransitions--;
      }
      function Be(g) {
        if (Ht === null)
          try {
            var k = ("require" + Math.random()).slice(0, 7);
            Ht = (f && f[k]).call(
              f,
              "timers"
            ).setImmediate;
          } catch {
            Ht = function(ye) {
              jt === !1 && (jt = !0, typeof MessageChannel > "u" && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var Ee = new MessageChannel();
              Ee.port1.onmessage = ye, Ee.port2.postMessage(void 0);
            };
          }
        return Ht(g);
      }
      function kt(g) {
        return 1 < g.length && typeof AggregateError == "function" ? new AggregateError(g) : g[0];
      }
      function Tt(g, k) {
        k !== Zt - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        ), Zt = k;
      }
      function mt(g, k, de) {
        var ye = _e.actQueue;
        if (ye !== null)
          if (ye.length !== 0)
            try {
              ht(ye), Be(function() {
                return mt(g, k, de);
              });
              return;
            } catch (Ee) {
              _e.thrownErrors.push(Ee);
            }
          else _e.actQueue = null;
        0 < _e.thrownErrors.length ? (ye = kt(_e.thrownErrors), _e.thrownErrors.length = 0, de(ye)) : k(g);
      }
      function ht(g) {
        if (!ue) {
          ue = !0;
          var k = 0;
          try {
            for (; k < g.length; k++) {
              var de = g[k];
              do {
                _e.didUsePromise = !1;
                var ye = de(!1);
                if (ye !== null) {
                  if (_e.didUsePromise) {
                    g[k] = de, g.splice(0, k);
                    return;
                  }
                  de = ye;
                } else break;
              } while (!0);
            }
            g.length = 0;
          } catch (Ee) {
            g.splice(0, k + 1), _e.thrownErrors.push(Ee);
          } finally {
            ue = !1;
          }
        }
      }
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var je = Symbol.for("react.transitional.element"), R = Symbol.for("react.portal"), ce = Symbol.for("react.fragment"), Ae = Symbol.for("react.strict_mode"), De = Symbol.for("react.profiler"), Ye = Symbol.for("react.consumer"), et = Symbol.for("react.context"), Le = Symbol.for("react.forward_ref"), Dt = Symbol.for("react.suspense"), ve = Symbol.for("react.suspense_list"), Ft = Symbol.for("react.memo"), Wt = Symbol.for("react.lazy"), C = Symbol.for("react.activity"), G = Symbol.iterator, z = {}, ne = {
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
      }, Re = Object.assign, Ve = {};
      Object.freeze(Ve), P.prototype.isReactComponent = {}, P.prototype.setState = function(g, k) {
        if (typeof g != "object" && typeof g != "function" && g != null)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, g, k, "setState");
      }, P.prototype.forceUpdate = function(g) {
        this.updater.enqueueForceUpdate(this, g, "forceUpdate");
      };
      var Oe = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      };
      for (tn in Oe)
        Oe.hasOwnProperty(tn) && d(tn, Oe[tn]);
      I.prototype = P.prototype, Oe = T.prototype = new I(), Oe.constructor = T, Re(Oe, P.prototype), Oe.isPureReactComponent = !0;
      var bt = Array.isArray, gt = Symbol.for("react.client.reference"), _e = {
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
      }, dn = Object.prototype.hasOwnProperty, qt = console.createTask ? console.createTask : function() {
        return null;
      };
      Oe = {
        react_stack_bottom_frame: function(g) {
          return g();
        }
      };
      var pn, Ut, it = {}, Se = Oe.react_stack_bottom_frame.bind(
        Oe,
        ge
      )(), pt = qt(W(ge)), $t = !1, sn = /\/+/g, Ct = typeof reportError == "function" ? reportError : function(g) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
          var k = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: typeof g == "object" && g !== null && typeof g.message == "string" ? String(g.message) : String(g),
            error: g
          });
          if (!window.dispatchEvent(k)) return;
        } else if (typeof process == "object" && typeof process.emit == "function") {
          process.emit("uncaughtException", g);
          return;
        }
        console.error(g);
      }, jt = !1, Ht = null, Zt = 0, Lt = !1, ue = !1, Kt = typeof queueMicrotask == "function" ? function(g) {
        queueMicrotask(function() {
          return queueMicrotask(g);
        });
      } : Be;
      Oe = Object.freeze({
        __proto__: null,
        c: function(g) {
          return Ne().useMemoCache(g);
        }
      });
      var tn = {
        map: ut,
        forEach: function(g, k, de) {
          ut(
            g,
            function() {
              k.apply(this, arguments);
            },
            de
          );
        },
        count: function(g) {
          var k = 0;
          return ut(g, function() {
            k++;
          }), k;
        },
        toArray: function(g) {
          return ut(g, function(k) {
            return k;
          }) || [];
        },
        only: function(g) {
          if (!ie(g))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return g;
        }
      };
      o.Activity = C, o.Children = tn, o.Component = P, o.Fragment = ce, o.Profiler = De, o.PureComponent = T, o.StrictMode = Ae, o.Suspense = Dt, o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = _e, o.__COMPILER_RUNTIME = Oe, o.act = function(g) {
        var k = _e.actQueue, de = Zt;
        Zt++;
        var ye = _e.actQueue = k !== null ? k : [], Ee = !1;
        try {
          var He = g();
        } catch (at) {
          _e.thrownErrors.push(at);
        }
        if (0 < _e.thrownErrors.length)
          throw Tt(k, de), g = kt(_e.thrownErrors), _e.thrownErrors.length = 0, g;
        if (He !== null && typeof He == "object" && typeof He.then == "function") {
          var ze = He;
          return Kt(function() {
            Ee || Lt || (Lt = !0, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          }), {
            then: function(at, Qt) {
              Ee = !0, ze.then(
                function(on) {
                  if (Tt(k, de), de === 0) {
                    try {
                      ht(ye), Be(function() {
                        return mt(
                          on,
                          at,
                          Qt
                        );
                      });
                    } catch (kn) {
                      _e.thrownErrors.push(kn);
                    }
                    if (0 < _e.thrownErrors.length) {
                      var Dn = kt(
                        _e.thrownErrors
                      );
                      _e.thrownErrors.length = 0, Qt(Dn);
                    }
                  } else at(on);
                },
                function(on) {
                  Tt(k, de), 0 < _e.thrownErrors.length && (on = kt(
                    _e.thrownErrors
                  ), _e.thrownErrors.length = 0), Qt(on);
                }
              );
            }
          };
        }
        var ft = He;
        if (Tt(k, de), de === 0 && (ht(ye), ye.length !== 0 && Kt(function() {
          Ee || Lt || (Lt = !0, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), _e.actQueue = null), 0 < _e.thrownErrors.length)
          throw g = kt(_e.thrownErrors), _e.thrownErrors.length = 0, g;
        return {
          then: function(at, Qt) {
            Ee = !0, de === 0 ? (_e.actQueue = ye, Be(function() {
              return mt(
                ft,
                at,
                Qt
              );
            })) : at(ft);
          }
        };
      }, o.cache = function(g) {
        return function() {
          return g.apply(null, arguments);
        };
      }, o.cacheSignal = function() {
        return null;
      }, o.captureOwnerStack = function() {
        var g = _e.getCurrentStack;
        return g === null ? null : g();
      }, o.cloneElement = function(g, k, de) {
        if (g == null)
          throw Error(
            "The argument must be a React element, but you passed " + g + "."
          );
        var ye = Re({}, g.props), Ee = g.key, He = g._owner;
        if (k != null) {
          var ze;
          e: {
            if (dn.call(k, "ref") && (ze = Object.getOwnPropertyDescriptor(
              k,
              "ref"
            ).get) && ze.isReactWarning) {
              ze = !1;
              break e;
            }
            ze = k.ref !== void 0;
          }
          ze && (He = we()), q(k) && (ee(k.key), Ee = "" + k.key);
          for (ft in k)
            !dn.call(k, ft) || ft === "key" || ft === "__self" || ft === "__source" || ft === "ref" && k.ref === void 0 || (ye[ft] = k[ft]);
        }
        var ft = arguments.length - 2;
        if (ft === 1) ye.children = de;
        else if (1 < ft) {
          ze = Array(ft);
          for (var at = 0; at < ft; at++)
            ze[at] = arguments[at + 2];
          ye.children = ze;
        }
        for (ye = xe(
          g.type,
          Ee,
          ye,
          He,
          g._debugStack,
          g._debugTask
        ), Ee = 2; Ee < arguments.length; Ee++)
          Me(arguments[Ee]);
        return ye;
      }, o.createContext = function(g) {
        return g = {
          $$typeof: et,
          _currentValue: g,
          _currentValue2: g,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        }, g.Provider = g, g.Consumer = {
          $$typeof: Ye,
          _context: g
        }, g._currentRenderer = null, g._currentRenderer2 = null, g;
      }, o.createElement = function(g, k, de) {
        for (var ye = 2; ye < arguments.length; ye++)
          Me(arguments[ye]);
        ye = {};
        var Ee = null;
        if (k != null)
          for (at in Ut || !("__self" in k) || "key" in k || (Ut = !0, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), q(k) && (ee(k.key), Ee = "" + k.key), k)
            dn.call(k, at) && at !== "key" && at !== "__self" && at !== "__source" && (ye[at] = k[at]);
        var He = arguments.length - 2;
        if (He === 1) ye.children = de;
        else if (1 < He) {
          for (var ze = Array(He), ft = 0; ft < He; ft++)
            ze[ft] = arguments[ft + 2];
          Object.freeze && Object.freeze(ze), ye.children = ze;
        }
        if (g && g.defaultProps)
          for (at in He = g.defaultProps, He)
            ye[at] === void 0 && (ye[at] = He[at]);
        Ee && Ce(
          ye,
          typeof g == "function" ? g.displayName || g.name || "Unknown" : g
        );
        var at = 1e4 > _e.recentlyCreatedOwnerStacks++;
        return xe(
          g,
          Ee,
          ye,
          we(),
          at ? Error("react-stack-top-frame") : Se,
          at ? qt(W(g)) : pt
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
        var k = { $$typeof: Le, render: g }, de;
        return Object.defineProperty(k, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return de;
          },
          set: function(ye) {
            de = ye, g.name || g.displayName || (Object.defineProperty(g, "name", { value: ye }), g.displayName = ye);
          }
        }), k;
      }, o.isValidElement = ie, o.lazy = function(g) {
        g = { _status: -1, _result: g };
        var k = {
          $$typeof: Wt,
          _payload: g,
          _init: Rt
        }, de = {
          name: "lazy",
          start: -1,
          end: -1,
          value: null,
          owner: null,
          debugStack: Error("react-stack-top-frame"),
          debugTask: console.createTask ? console.createTask("lazy()") : null
        };
        return g._ioInfo = de, k._debugInfo = [{ awaited: de }], k;
      }, o.memo = function(g, k) {
        g == null && console.error(
          "memo: The first argument must be a component. Instead received: %s",
          g === null ? "null" : typeof g
        ), k = {
          $$typeof: Ft,
          type: g,
          compare: k === void 0 ? null : k
        };
        var de;
        return Object.defineProperty(k, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return de;
          },
          set: function(ye) {
            de = ye, g.name || g.displayName || (Object.defineProperty(g, "name", { value: ye }), g.displayName = ye);
          }
        }), k;
      }, o.startTransition = function(g) {
        var k = _e.T, de = {};
        de._updatedFibers = /* @__PURE__ */ new Set(), _e.T = de;
        try {
          var ye = g(), Ee = _e.S;
          Ee !== null && Ee(de, ye), typeof ye == "object" && ye !== null && typeof ye.then == "function" && (_e.asyncTransitions++, ye.then(Pt, Pt), ye.then(U, Ct));
        } catch (He) {
          Ct(He);
        } finally {
          k === null && de._updatedFibers && (g = de._updatedFibers.size, de._updatedFibers.clear(), 10 < g && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), k !== null && de.types !== null && (k.types !== null && k.types !== de.types && console.error(
            "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
          ), k.types = de.types), _e.T = k;
        }
      }, o.unstable_useCacheRefresh = function() {
        return Ne().useCacheRefresh();
      }, o.use = function(g) {
        return Ne().use(g);
      }, o.useActionState = function(g, k, de) {
        return Ne().useActionState(
          g,
          k,
          de
        );
      }, o.useCallback = function(g, k) {
        return Ne().useCallback(g, k);
      }, o.useContext = function(g) {
        var k = Ne();
        return g.$$typeof === Ye && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        ), k.useContext(g);
      }, o.useDebugValue = function(g, k) {
        return Ne().useDebugValue(g, k);
      }, o.useDeferredValue = function(g, k) {
        return Ne().useDeferredValue(g, k);
      }, o.useEffect = function(g, k) {
        return g == null && console.warn(
          "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), Ne().useEffect(g, k);
      }, o.useEffectEvent = function(g) {
        return Ne().useEffectEvent(g);
      }, o.useId = function() {
        return Ne().useId();
      }, o.useImperativeHandle = function(g, k, de) {
        return Ne().useImperativeHandle(g, k, de);
      }, o.useInsertionEffect = function(g, k) {
        return g == null && console.warn(
          "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), Ne().useInsertionEffect(g, k);
      }, o.useLayoutEffect = function(g, k) {
        return g == null && console.warn(
          "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), Ne().useLayoutEffect(g, k);
      }, o.useMemo = function(g, k) {
        return Ne().useMemo(g, k);
      }, o.useOptimistic = function(g, k) {
        return Ne().useOptimistic(g, k);
      }, o.useReducer = function(g, k, de) {
        return Ne().useReducer(g, k, de);
      }, o.useRef = function(g) {
        return Ne().useRef(g);
      }, o.useState = function(g) {
        return Ne().useState(g);
      }, o.useSyncExternalStore = function(g, k, de) {
        return Ne().useSyncExternalStore(
          g,
          k,
          de
        );
      }, o.useTransition = function() {
        return Ne().useTransition();
      }, o.version = "19.2.3", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
  }(Nr, Nr.exports)), Nr.exports;
}
var Ol = {};
Ol.NODE_ENV === "production" ? ii.exports = Rl() : ii.exports = Dl();
var yt = ii.exports, Wl = {
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
const Bl = /* @__PURE__ */ ui(Wl);
var Nl = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;
function Ps(f) {
  var o = { type: "tag", name: "", voidElement: !1, attrs: {}, children: [] }, u = f.match(/<\/?([^\s]+?)[/\s>]/);
  if (u && (o.name = u[1], (Bl[u[1]] || f.charAt(f.length - 2) === "/") && (o.voidElement = !0), o.name.startsWith("!--"))) {
    var d = f.indexOf("-->");
    return { type: "comment", comment: d !== -1 ? f.slice(4, d) : "" };
  }
  for (var y = new RegExp(Nl), m = null; (m = y.exec(f)) !== null; ) if (m[0].trim()) if (m[1]) {
    var P = m[1].trim(), I = [P, ""];
    P.indexOf("=") > -1 && (I = P.split("=")), o.attrs[I[0]] = I[1], y.lastIndex--;
  } else m[2] && (o.attrs[m[2]] = m[3].trim().substring(1, m[3].length - 1));
  return o;
}
var Fl = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g, Ll = /^\s*$/, Vl = /* @__PURE__ */ Object.create(null);
function Us(f, o) {
  switch (o.type) {
    case "text":
      return f + o.content;
    case "tag":
      return f += "<" + o.name + (o.attrs ? function(u) {
        var d = [];
        for (var y in u) d.push(y + '="' + u[y] + '"');
        return d.length ? " " + d.join(" ") : "";
      }(o.attrs) : "") + (o.voidElement ? "/>" : ">"), o.voidElement ? f : f + o.children.reduce(Us, "") + "</" + o.name + ">";
    case "comment":
      return f + "<!--" + o.comment + "-->";
  }
}
var Ul = { parse: function(f, o) {
  o || (o = {}), o.components || (o.components = Vl);
  var u, d = [], y = [], m = -1, P = !1;
  if (f.indexOf("<") !== 0) {
    var I = f.indexOf("<");
    d.push({ type: "text", content: I === -1 ? f : f.substring(0, I) });
  }
  return f.replace(Fl, function(T, U) {
    if (P) {
      if (T !== "</" + u.name + ">") return;
      P = !1;
    }
    var J, ee = T.charAt(1) !== "/", j = T.startsWith("<!--"), W = U + T.length, we = f.charAt(W);
    if (j) {
      var ge = Ps(T);
      return m < 0 ? (d.push(ge), d) : ((J = y[m]).children.push(ge), d);
    }
    if (ee && (m++, (u = Ps(T)).type === "tag" && o.components[u.name] && (u.type = "component", P = !0), u.voidElement || P || !we || we === "<" || u.children.push({ type: "text", content: f.slice(W, f.indexOf("<", W)) }), m === 0 && d.push(u), (J = y[m - 1]) && J.children.push(u), y[m] = u), (!ee || u.voidElement) && (m > -1 && (u.voidElement || u.name === T.slice(2, -1)) && (m--, u = m === -1 ? d : y[m]), !P && we !== "<" && we)) {
      J = m === -1 ? d : y[m].children;
      var q = f.indexOf("<", W), Ce = f.slice(W, q === -1 ? void 0 : q);
      Ll.test(Ce) && (Ce = " "), (q > -1 && m + J.length >= 0 || Ce !== " ") && J.push({ type: "text", content: Ce });
    }
  }), d;
}, stringify: function(f) {
  return f.reduce(function(o, u) {
    return o + Us("", u);
  }, "");
} };
function fo() {
  if (console && console.warn) {
    for (var f = arguments.length, o = new Array(f), u = 0; u < f; u++)
      o[u] = arguments[u];
    vn(o[0]) && (o[0] = `react-i18next:: ${o[0]}`), console.warn(...o);
  }
}
const xs = {};
function ho() {
  for (var f = arguments.length, o = new Array(f), u = 0; u < f; u++)
    o[u] = arguments[u];
  vn(o[0]) && xs[o[0]] || (vn(o[0]) && (xs[o[0]] = /* @__PURE__ */ new Date()), fo(...o));
}
const js = (f, o) => () => {
  if (f.isInitialized)
    o();
  else {
    const u = () => {
      setTimeout(() => {
        f.off("initialized", u);
      }, 0), o();
    };
    f.on("initialized", u);
  }
}, Cs = (f, o, u) => {
  f.loadNamespaces(o, js(f, u));
}, Ms = (f, o, u, d) => {
  vn(u) && (u = [u]), u.forEach((y) => {
    f.options.ns.indexOf(y) < 0 && f.options.ns.push(y);
  }), f.loadLanguages(o, js(f, d));
}, jl = function(f, o) {
  let u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const d = o.languages[0], y = o.options ? o.options.fallbackLng : !1, m = o.languages[o.languages.length - 1];
  if (d.toLowerCase() === "cimode") return !0;
  const P = (I, T) => {
    const U = o.services.backendConnector.state[`${I}|${T}`];
    return U === -1 || U === 2;
  };
  return u.bindI18n && u.bindI18n.indexOf("languageChanging") > -1 && o.services.backendConnector.backend && o.isLanguageChangingTo && !P(o.isLanguageChangingTo, f) ? !1 : !!(o.hasResourceBundle(d, f) || !o.services.backendConnector.backend || o.options.resources && !o.options.partialBundledLanguages || P(d, f) && (!y || P(m, f)));
}, Kl = function(f, o) {
  let u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return !o.languages || !o.languages.length ? (ho("i18n.languages were undefined or empty", o.languages), !0) : o.options.ignoreJSONStructure !== void 0 ? o.hasLoadedNamespace(f, {
    lng: u.lng,
    precheck: (y, m) => {
      if (u.bindI18n && u.bindI18n.indexOf("languageChanging") > -1 && y.services.backendConnector.backend && y.isLanguageChangingTo && !m(y.isLanguageChangingTo, f)) return !1;
    }
  }) : jl(f, o, u);
}, Ks = (f) => f.displayName || f.name || (vn(f) && f.length > 0 ? f : "Unknown"), vn = (f) => typeof f == "string", dr = (f) => typeof f == "object" && f !== null, $l = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, Hl = {
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
}, Gl = (f) => Hl[f], zl = (f) => f.replace($l, Gl);
let si = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: zl
};
const $s = function() {
  let f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  si = {
    ...si,
    ...f
  };
}, li = () => si;
let Hs;
const Gs = (f) => {
  Hs = f;
}, fr = () => Hs, ei = (f, o) => {
  if (!f) return !1;
  const u = f.props ? f.props.children : f.children;
  return o ? u.length > 0 : !!u;
}, ti = (f) => {
  if (!f) return [];
  const o = f.props ? f.props.children : f.children;
  return f.props && f.props.i18nIsDynamicList ? pr(o) : o;
}, ql = (f) => Array.isArray(f) && f.every(yt.isValidElement), pr = (f) => Array.isArray(f) ? f : [f], Jl = (f, o) => {
  const u = {
    ...o
  };
  return u.props = Object.assign(f.props, o.props), u;
}, zs = (f, o) => {
  if (!f) return "";
  let u = "";
  const d = pr(f), y = o.transSupportBasicHtmlNodes && o.transKeepBasicHtmlNodesFor ? o.transKeepBasicHtmlNodesFor : [];
  return d.forEach((m, P) => {
    if (vn(m))
      u += `${m}`;
    else if (yt.isValidElement(m)) {
      const {
        props: I,
        type: T
      } = m, U = Object.keys(I).length, J = y.indexOf(T) > -1, ee = I.children;
      if (!ee && J && !U)
        u += `<${T}/>`;
      else if (!ee && (!J || U) || I.i18nIsDynamicList)
        u += `<${P}></${P}>`;
      else if (J && U === 1 && vn(ee))
        u += `<${T}>${ee}</${T}>`;
      else {
        const j = zs(ee, o);
        u += `<${P}>${j}</${P}>`;
      }
    } else if (m === null)
      fo("Trans: the passed in value is invalid - seems you passed in a null child.");
    else if (dr(m)) {
      const {
        format: I,
        ...T
      } = m, U = Object.keys(T);
      if (U.length === 1) {
        const J = I ? `${U[0]}, ${I}` : U[0];
        u += `{{${J}}}`;
      } else
        fo("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.", m);
    } else
      fo("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.", m);
  }), u;
}, Yl = (f, o, u, d, y, m) => {
  if (o === "") return [];
  const P = d.transKeepBasicHtmlNodesFor || [], I = o && new RegExp(P.map((q) => `<${q}`).join("|")).test(o);
  if (!f && !I && !m) return [o];
  const T = {}, U = (q) => {
    pr(q).forEach((Z) => {
      vn(Z) || (ei(Z) ? U(ti(Z)) : dr(Z) && !yt.isValidElement(Z) && Object.assign(T, Z));
    });
  };
  U(f);
  const J = Ul.parse(`<0>${o}</0>`), ee = {
    ...T,
    ...y
  }, j = (q, Ce, Z) => {
    const xe = ti(q), te = we(xe, Ce.children, Z);
    return ql(xe) && te.length === 0 || q.props && q.props.i18nIsDynamicList ? xe : te;
  }, W = (q, Ce, Z, xe, te) => {
    q.dummy ? (q.children = Ce, Z.push(yt.cloneElement(q, {
      key: xe
    }, te ? void 0 : Ce))) : Z.push(...yt.Children.map([q], (Me) => {
      const ie = {
        ...Me.props
      };
      return delete ie.i18nIsDynamicList, yt.createElement(Me.type, {
        ...ie,
        key: xe,
        ref: Me.ref
      }, te ? null : Ce);
    }));
  }, we = (q, Ce, Z) => {
    const xe = pr(q);
    return pr(Ce).reduce((Me, ie, se) => {
      const dt = ie.children && ie.children[0] && ie.children[0].content && u.services.interpolator.interpolate(ie.children[0].content, ee, u.language);
      if (ie.type === "tag") {
        let rt = xe[parseInt(ie.name, 10)];
        Z.length === 1 && !rt && (rt = Z[0][ie.name]), rt || (rt = {});
        const Je = Object.keys(ie.attrs).length !== 0 ? Jl({
          props: ie.attrs
        }, rt) : rt, ut = yt.isValidElement(Je), Rt = ut && ei(ie, !0) && !ie.voidElement, Ne = I && dr(Je) && Je.dummy && !ut, Pt = dr(f) && Object.hasOwnProperty.call(f, ie.name);
        if (vn(Je)) {
          const Be = u.services.interpolator.interpolate(Je, ee, u.language);
          Me.push(Be);
        } else if (ei(Je) || Rt) {
          const Be = j(Je, ie, Z);
          W(Je, Be, Me, se);
        } else if (Ne) {
          const Be = we(xe, ie.children, Z);
          W(Je, Be, Me, se);
        } else if (Number.isNaN(parseFloat(ie.name)))
          if (Pt) {
            const Be = j(Je, ie, Z);
            W(Je, Be, Me, se, ie.voidElement);
          } else if (d.transSupportBasicHtmlNodes && P.indexOf(ie.name) > -1)
            if (ie.voidElement)
              Me.push(yt.createElement(ie.name, {
                key: `${ie.name}-${se}`
              }));
            else {
              const Be = we(xe, ie.children, Z);
              Me.push(yt.createElement(ie.name, {
                key: `${ie.name}-${se}`
              }, Be));
            }
          else if (ie.voidElement)
            Me.push(`<${ie.name} />`);
          else {
            const Be = we(xe, ie.children, Z);
            Me.push(`<${ie.name}>${Be}</${ie.name}>`);
          }
        else if (dr(Je) && !ut) {
          const Be = ie.children[0] ? dt : null;
          Be && Me.push(Be);
        } else
          W(Je, dt, Me, se, ie.children.length !== 1 || !dt);
      } else if (ie.type === "text") {
        const rt = d.transWrapTextNodes, Je = m ? d.unescape(u.services.interpolator.interpolate(ie.content, ee, u.language)) : u.services.interpolator.interpolate(ie.content, ee, u.language);
        rt ? Me.push(yt.createElement(rt, {
          key: `${ie.name}-${se}`
        }, Je)) : Me.push(Je);
      }
      return Me;
    }, []);
  }, ge = we([{
    dummy: !0,
    children: f || []
  }], J, pr(f || []));
  return ti(ge[0]);
};
function qs(f) {
  let {
    children: o,
    count: u,
    parent: d,
    i18nKey: y,
    context: m,
    tOptions: P = {},
    values: I,
    defaults: T,
    components: U,
    ns: J,
    i18n: ee,
    t: j,
    shouldUnescape: W,
    ...we
  } = f;
  const ge = ee || fr();
  if (!ge)
    return ho("You will need to pass in an i18next instance by using i18nextReactModule"), o;
  const q = j || ge.t.bind(ge) || ((Rt) => Rt), Ce = {
    ...li(),
    ...ge.options && ge.options.react
  };
  let Z = J || q.ns || ge.options && ge.options.defaultNS;
  Z = vn(Z) ? [Z] : Z || ["translation"];
  const xe = zs(o, Ce), te = T || xe || Ce.transEmptyNodeValue || y, {
    hashTransKey: Me
  } = Ce, ie = y || (Me ? Me(xe || te) : xe || te);
  ge.options && ge.options.interpolation && ge.options.interpolation.defaultVariables && (I = I && Object.keys(I).length > 0 ? {
    ...I,
    ...ge.options.interpolation.defaultVariables
  } : {
    ...ge.options.interpolation.defaultVariables
  });
  const se = I || u !== void 0 || !o ? P.interpolation : {
    interpolation: {
      ...P.interpolation,
      prefix: "#$?",
      suffix: "?$#"
    }
  }, dt = {
    ...P,
    context: m || P.context,
    count: u,
    ...I,
    ...se,
    defaultValue: te,
    ns: Z
  }, rt = ie ? q(ie, dt) : te;
  U && Object.keys(U).forEach((Rt) => {
    const Ne = U[Rt];
    if (typeof Ne.type == "function" || !Ne.props || !Ne.props.children || rt.indexOf(`${Rt}/>`) < 0 && rt.indexOf(`${Rt} />`) < 0) return;
    function Pt() {
      return yt.createElement(yt.Fragment, null, Ne);
    }
    U[Rt] = yt.createElement(Pt);
  });
  const Je = Yl(U || o, rt, ge, Ce, dt, W), ut = d !== void 0 ? d : Ce.defaultTransParent;
  return ut ? yt.createElement(ut, we, Je) : Je;
}
const Zl = {
  type: "3rdParty",
  init(f) {
    $s(f.options.react), Gs(f);
  }
}, Ur = yt.createContext();
class Ql {
  constructor() {
    ws(this, "getUsedNamespaces", () => Object.keys(this.usedNamespaces));
    this.usedNamespaces = {};
  }
  addUsedNamespaces(o) {
    o.forEach((u) => {
      this.usedNamespaces[u] || (this.usedNamespaces[u] = !0);
    });
  }
}
const Js = (f) => async (o) => {
  const u = f.getInitialProps ? await f.getInitialProps(o) : {}, d = Ys();
  return {
    ...u,
    ...d
  };
}, Ys = () => {
  const f = fr(), o = f.reportNamespaces ? f.reportNamespaces.getUsedNamespaces() : [], u = {}, d = {};
  return f.languages.forEach((y) => {
    d[y] = {}, o.forEach((m) => {
      d[y][m] = f.getResourceBundle(y, m) || {};
    });
  }), u.initialI18nStore = d, u.initialLanguage = f.language, u;
};
function Xl(f) {
  let {
    children: o,
    count: u,
    parent: d,
    i18nKey: y,
    context: m,
    tOptions: P = {},
    values: I,
    defaults: T,
    components: U,
    ns: J,
    i18n: ee,
    t: j,
    shouldUnescape: W,
    ...we
  } = f;
  const {
    i18n: ge,
    defaultNS: q
  } = yt.useContext(Ur) || {}, Ce = ee || ge || fr(), Z = j || Ce && Ce.t.bind(Ce);
  return qs({
    children: o,
    count: u,
    parent: d,
    i18nKey: y,
    context: m,
    tOptions: P,
    values: I,
    defaults: T,
    components: U,
    ns: J || Z && Z.ns || q || Ce && Ce.options && Ce.options.defaultNS,
    i18n: Ce,
    t: j,
    shouldUnescape: W,
    ...we
  });
}
const ed = (f, o) => {
  const u = yt.useRef();
  return yt.useEffect(() => {
    u.current = f;
  }, [f, o]), u.current;
}, Zs = (f, o, u, d) => f.getFixedT(o, u, d), td = (f, o, u, d) => yt.useCallback(Zs(f, o, u, d), [f, o, u, d]), di = function(f) {
  let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    i18n: u
  } = o, {
    i18n: d,
    defaultNS: y
  } = yt.useContext(Ur) || {}, m = u || d || fr();
  if (m && !m.reportNamespaces && (m.reportNamespaces = new Ql()), !m) {
    ho("You will need to pass in an i18next instance by using initReactI18next");
    const te = (ie, se) => vn(se) ? se : dr(se) && vn(se.defaultValue) ? se.defaultValue : Array.isArray(ie) ? ie[ie.length - 1] : ie, Me = [te, {}, !1];
    return Me.t = te, Me.i18n = {}, Me.ready = !1, Me;
  }
  m.options.react && m.options.react.wait !== void 0 && ho("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const P = {
    ...li(),
    ...m.options.react,
    ...o
  }, {
    useSuspense: I,
    keyPrefix: T
  } = P;
  let U = f || y || m.options && m.options.defaultNS;
  U = vn(U) ? [U] : U || ["translation"], m.reportNamespaces.addUsedNamespaces && m.reportNamespaces.addUsedNamespaces(U);
  const J = (m.isInitialized || m.initializedStoreOnce) && U.every((te) => Kl(te, m, P)), ee = td(m, o.lng || null, P.nsMode === "fallback" ? U : U[0], T), j = () => ee, W = () => Zs(m, o.lng || null, P.nsMode === "fallback" ? U : U[0], T), [we, ge] = yt.useState(j);
  let q = U.join();
  o.lng && (q = `${o.lng}${q}`);
  const Ce = ed(q), Z = yt.useRef(!0);
  yt.useEffect(() => {
    const {
      bindI18n: te,
      bindI18nStore: Me
    } = P;
    Z.current = !0, !J && !I && (o.lng ? Ms(m, o.lng, U, () => {
      Z.current && ge(W);
    }) : Cs(m, U, () => {
      Z.current && ge(W);
    })), J && Ce && Ce !== q && Z.current && ge(W);
    const ie = () => {
      Z.current && ge(W);
    };
    return te && m && m.on(te, ie), Me && m && m.store.on(Me, ie), () => {
      Z.current = !1, te && m && te.split(" ").forEach((se) => m.off(se, ie)), Me && m && Me.split(" ").forEach((se) => m.store.off(se, ie));
    };
  }, [m, q]), yt.useEffect(() => {
    Z.current && J && ge(j);
  }, [m, T, J]);
  const xe = [we, m, J];
  if (xe.t = we, xe.i18n = m, xe.ready = J, J || !J && !I) return xe;
  throw new Promise((te) => {
    o.lng ? Ms(m, o.lng, U, () => te()) : Cs(m, U, () => te());
  });
}, nd = function(f) {
  let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return function(d) {
    function y(P) {
      let {
        forwardedRef: I,
        ...T
      } = P;
      const [U, J, ee] = di(f, {
        ...T,
        keyPrefix: o.keyPrefix
      }), j = {
        ...T,
        t: U,
        i18n: J,
        tReady: ee
      };
      return o.withRef && I ? j.ref = I : !o.withRef && I && (j.forwardedRef = I), yt.createElement(d, j);
    }
    y.displayName = `withI18nextTranslation(${Ks(d)})`, y.WrappedComponent = d;
    const m = (P, I) => yt.createElement(y, Object.assign({}, P, {
      forwardedRef: I
    }));
    return o.withRef ? yt.forwardRef(m) : y;
  };
};
function ad(f) {
  const {
    ns: o,
    children: u,
    ...d
  } = f, [y, m, P] = di(o, d);
  return u(y, {
    i18n: m,
    lng: m.language
  }, P);
}
function rd(f) {
  let {
    i18n: o,
    defaultNS: u,
    children: d
  } = f;
  const y = yt.useMemo(() => ({
    i18n: o,
    defaultNS: u
  }), [o, u]);
  return yt.createElement(Ur.Provider, {
    value: y
  }, d);
}
const Qs = function(f, o) {
  let u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    i18n: d
  } = u, {
    i18n: y
  } = yt.useContext(Ur) || {}, m = d || y || fr();
  m.options && m.options.isClone || (f && !m.initializedStoreOnce && (m.services.resourceStore.data = f, m.options.ns = Object.values(f).reduce((P, I) => (Object.keys(I).forEach((T) => {
    P.indexOf(T) < 0 && P.push(T);
  }), P), m.options.ns), m.initializedStoreOnce = !0, m.isInitialized = !0), o && !m.initializedLanguageOnce && (m.changeLanguage(o), m.initializedLanguageOnce = !0));
}, od = () => function(o) {
  function u(d) {
    let {
      initialI18nStore: y,
      initialLanguage: m,
      ...P
    } = d;
    return Qs(y, m), yt.createElement(o, {
      ...P
    });
  }
  return u.getInitialProps = Js(o), u.displayName = `withI18nextSSR(${Ks(o)})`, u.WrappedComponent = o, u;
}, id = () => "", sd = () => "", cd = () => "", ud = () => "", ld = () => "", dd = () => "", pd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  I18nContext: Ur,
  I18nextProvider: rd,
  Trans: Xl,
  TransWithoutContext: qs,
  Translation: ad,
  composeInitialProps: Js,
  date: id,
  getDefaults: li,
  getI18n: fr,
  getInitialProps: Ys,
  initReactI18next: Zl,
  number: cd,
  plural: ld,
  select: ud,
  selectOrdinal: dd,
  setDefaults: $s,
  setI18n: Gs,
  time: sd,
  useSSR: Qs,
  useTranslation: di,
  withSSR: od,
  withTranslation: nd
}, Symbol.toStringTag, { value: "Module" })), fd = /* @__PURE__ */ Fs(pd), Xe = (f) => typeof f == "string", Br = () => {
  let f, o;
  const u = new Promise((d, y) => {
    f = d, o = y;
  });
  return u.resolve = f, u.reject = o, u;
}, Is = (f) => f == null ? "" : "" + f, hd = (f, o, u) => {
  f.forEach((d) => {
    o[d] && (u[d] = o[d]);
  });
}, gd = /###/g, As = (f) => f && f.indexOf("###") > -1 ? f.replace(gd, ".") : f, Es = (f) => !f || Xe(f), Fr = (f, o, u) => {
  const d = Xe(o) ? o.split(".") : o;
  let y = 0;
  for (; y < d.length - 1; ) {
    if (Es(f)) return {};
    const m = As(d[y]);
    !f[m] && u && (f[m] = new u()), Object.prototype.hasOwnProperty.call(f, m) ? f = f[m] : f = {}, ++y;
  }
  return Es(f) ? {} : {
    obj: f,
    k: As(d[y])
  };
}, _s = (f, o, u) => {
  const {
    obj: d,
    k: y
  } = Fr(f, o, Object);
  if (d !== void 0 || o.length === 1) {
    d[y] = u;
    return;
  }
  let m = o[o.length - 1], P = o.slice(0, o.length - 1), I = Fr(f, P, Object);
  for (; I.obj === void 0 && P.length; )
    m = `${P[P.length - 1]}.${m}`, P = P.slice(0, P.length - 1), I = Fr(f, P, Object), I && I.obj && typeof I.obj[`${I.k}.${m}`] < "u" && (I.obj = void 0);
  I.obj[`${I.k}.${m}`] = u;
}, md = (f, o, u, d) => {
  const {
    obj: y,
    k: m
  } = Fr(f, o, Object);
  y[m] = y[m] || [], y[m].push(u);
}, go = (f, o) => {
  const {
    obj: u,
    k: d
  } = Fr(f, o);
  if (u)
    return u[d];
}, wd = (f, o, u) => {
  const d = go(f, u);
  return d !== void 0 ? d : go(o, u);
}, Xs = (f, o, u) => {
  for (const d in o)
    d !== "__proto__" && d !== "constructor" && (d in f ? Xe(f[d]) || f[d] instanceof String || Xe(o[d]) || o[d] instanceof String ? u && (f[d] = o[d]) : Xs(f[d], o[d], u) : f[d] = o[d]);
  return f;
}, cr = (f) => f.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var yd = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const bd = (f) => Xe(f) ? f.replace(/[&<>"'\/]/g, (o) => yd[o]) : f;
class vd {
  constructor(o) {
    this.capacity = o, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  getRegExp(o) {
    const u = this.regExpMap.get(o);
    if (u !== void 0)
      return u;
    const d = new RegExp(o);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(o, d), this.regExpQueue.push(o), d;
  }
}
const kd = [" ", ",", "?", "!", ";"], Sd = new vd(20), Pd = (f, o, u) => {
  o = o || "", u = u || "";
  const d = kd.filter((P) => o.indexOf(P) < 0 && u.indexOf(P) < 0);
  if (d.length === 0) return !0;
  const y = Sd.getRegExp(`(${d.map((P) => P === "?" ? "\\?" : P).join("|")})`);
  let m = !y.test(f);
  if (!m) {
    const P = f.indexOf(u);
    P > 0 && !y.test(f.substring(0, P)) && (m = !0);
  }
  return m;
}, ci = function(f, o) {
  let u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!f) return;
  if (f[o]) return f[o];
  const d = o.split(u);
  let y = f;
  for (let m = 0; m < d.length; ) {
    if (!y || typeof y != "object")
      return;
    let P, I = "";
    for (let T = m; T < d.length; ++T)
      if (T !== m && (I += u), I += d[T], P = y[I], P !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof P) > -1 && T < d.length - 1)
          continue;
        m += T - m + 1;
        break;
      }
    y = P;
  }
  return y;
}, mo = (f) => f && f.replace("_", "-"), xd = {
  type: "logger",
  log(f) {
    this.output("log", f);
  },
  warn(f) {
    this.output("warn", f);
  },
  error(f) {
    this.output("error", f);
  },
  output(f, o) {
    console && console[f] && console[f].apply(console, o);
  }
};
class wo {
  constructor(o) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(o, u);
  }
  init(o) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = u.prefix || "i18next:", this.logger = o || xd, this.options = u, this.debug = u.debug;
  }
  log() {
    for (var o = arguments.length, u = new Array(o), d = 0; d < o; d++)
      u[d] = arguments[d];
    return this.forward(u, "log", "", !0);
  }
  warn() {
    for (var o = arguments.length, u = new Array(o), d = 0; d < o; d++)
      u[d] = arguments[d];
    return this.forward(u, "warn", "", !0);
  }
  error() {
    for (var o = arguments.length, u = new Array(o), d = 0; d < o; d++)
      u[d] = arguments[d];
    return this.forward(u, "error", "");
  }
  deprecate() {
    for (var o = arguments.length, u = new Array(o), d = 0; d < o; d++)
      u[d] = arguments[d];
    return this.forward(u, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(o, u, d, y) {
    return y && !this.debug ? null : (Xe(o[0]) && (o[0] = `${d}${this.prefix} ${o[0]}`), this.logger[u](o));
  }
  create(o) {
    return new wo(this.logger, {
      prefix: `${this.prefix}:${o}:`,
      ...this.options
    });
  }
  clone(o) {
    return o = o || this.options, o.prefix = o.prefix || this.prefix, new wo(this.logger, o);
  }
}
var jn = new wo();
class bo {
  constructor() {
    this.observers = {};
  }
  on(o, u) {
    return o.split(" ").forEach((d) => {
      this.observers[d] || (this.observers[d] = /* @__PURE__ */ new Map());
      const y = this.observers[d].get(u) || 0;
      this.observers[d].set(u, y + 1);
    }), this;
  }
  off(o, u) {
    if (this.observers[o]) {
      if (!u) {
        delete this.observers[o];
        return;
      }
      this.observers[o].delete(u);
    }
  }
  emit(o) {
    for (var u = arguments.length, d = new Array(u > 1 ? u - 1 : 0), y = 1; y < u; y++)
      d[y - 1] = arguments[y];
    this.observers[o] && Array.from(this.observers[o].entries()).forEach((P) => {
      let [I, T] = P;
      for (let U = 0; U < T; U++)
        I(...d);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach((P) => {
      let [I, T] = P;
      for (let U = 0; U < T; U++)
        I.apply(I, [o, ...d]);
    });
  }
}
class Ts extends bo {
  constructor(o) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    super(), this.data = o || {}, this.options = u, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(o) {
    this.options.ns.indexOf(o) < 0 && this.options.ns.push(o);
  }
  removeNamespaces(o) {
    const u = this.options.ns.indexOf(o);
    u > -1 && this.options.ns.splice(u, 1);
  }
  getResource(o, u, d) {
    let y = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const m = y.keySeparator !== void 0 ? y.keySeparator : this.options.keySeparator, P = y.ignoreJSONStructure !== void 0 ? y.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let I;
    o.indexOf(".") > -1 ? I = o.split(".") : (I = [o, u], d && (Array.isArray(d) ? I.push(...d) : Xe(d) && m ? I.push(...d.split(m)) : I.push(d)));
    const T = go(this.data, I);
    return !T && !u && !d && o.indexOf(".") > -1 && (o = I[0], u = I[1], d = I.slice(2).join(".")), T || !P || !Xe(d) ? T : ci(this.data && this.data[o] && this.data[o][u], d, m);
  }
  addResource(o, u, d, y) {
    let m = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const P = m.keySeparator !== void 0 ? m.keySeparator : this.options.keySeparator;
    let I = [o, u];
    d && (I = I.concat(P ? d.split(P) : d)), o.indexOf(".") > -1 && (I = o.split("."), y = u, u = I[1]), this.addNamespaces(u), _s(this.data, I, y), m.silent || this.emit("added", o, u, d, y);
  }
  addResources(o, u, d) {
    let y = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: !1
    };
    for (const m in d)
      (Xe(d[m]) || Array.isArray(d[m])) && this.addResource(o, u, m, d[m], {
        silent: !0
      });
    y.silent || this.emit("added", o, u, d);
  }
  addResourceBundle(o, u, d, y, m) {
    let P = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
      silent: !1,
      skipCopy: !1
    }, I = [o, u];
    o.indexOf(".") > -1 && (I = o.split("."), y = d, d = u, u = I[1]), this.addNamespaces(u);
    let T = go(this.data, I) || {};
    P.skipCopy || (d = JSON.parse(JSON.stringify(d))), y ? Xs(T, d, m) : T = {
      ...T,
      ...d
    }, _s(this.data, I, T), P.silent || this.emit("added", o, u, d);
  }
  removeResourceBundle(o, u) {
    this.hasResourceBundle(o, u) && delete this.data[o][u], this.removeNamespaces(u), this.emit("removed", o, u);
  }
  hasResourceBundle(o, u) {
    return this.getResource(o, u) !== void 0;
  }
  getResourceBundle(o, u) {
    return u || (u = this.options.defaultNS), this.options.compatibilityAPI === "v1" ? {
      ...this.getResource(o, u)
    } : this.getResource(o, u);
  }
  getDataByLanguage(o) {
    return this.data[o];
  }
  hasLanguageSomeTranslations(o) {
    const u = this.getDataByLanguage(o);
    return !!(u && Object.keys(u) || []).find((y) => u[y] && Object.keys(u[y]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var ec = {
  processors: {},
  addPostProcessor(f) {
    this.processors[f.name] = f;
  },
  handle(f, o, u, d, y) {
    return f.forEach((m) => {
      this.processors[m] && (o = this.processors[m].process(o, u, d, y));
    }), o;
  }
};
const Rs = {};
class yo extends bo {
  constructor(o) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), hd(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], o, this), this.options = u, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = jn.create("translator");
  }
  changeLanguage(o) {
    o && (this.language = o);
  }
  exists(o) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    if (o == null)
      return !1;
    const d = this.resolve(o, u);
    return d && d.res !== void 0;
  }
  extractFromKey(o, u) {
    let d = u.nsSeparator !== void 0 ? u.nsSeparator : this.options.nsSeparator;
    d === void 0 && (d = ":");
    const y = u.keySeparator !== void 0 ? u.keySeparator : this.options.keySeparator;
    let m = u.ns || this.options.defaultNS || [];
    const P = d && o.indexOf(d) > -1, I = !this.options.userDefinedKeySeparator && !u.keySeparator && !this.options.userDefinedNsSeparator && !u.nsSeparator && !Pd(o, d, y);
    if (P && !I) {
      const T = o.match(this.interpolator.nestingRegexp);
      if (T && T.length > 0)
        return {
          key: o,
          namespaces: Xe(m) ? [m] : m
        };
      const U = o.split(d);
      (d !== y || d === y && this.options.ns.indexOf(U[0]) > -1) && (m = U.shift()), o = U.join(y);
    }
    return {
      key: o,
      namespaces: Xe(m) ? [m] : m
    };
  }
  translate(o, u, d) {
    if (typeof u != "object" && this.options.overloadTranslationOptionHandler && (u = this.options.overloadTranslationOptionHandler(arguments)), typeof u == "object" && (u = {
      ...u
    }), u || (u = {}), o == null) return "";
    Array.isArray(o) || (o = [String(o)]);
    const y = u.returnDetails !== void 0 ? u.returnDetails : this.options.returnDetails, m = u.keySeparator !== void 0 ? u.keySeparator : this.options.keySeparator, {
      key: P,
      namespaces: I
    } = this.extractFromKey(o[o.length - 1], u), T = I[I.length - 1], U = u.lng || this.language, J = u.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (U && U.toLowerCase() === "cimode") {
      if (J) {
        const te = u.nsSeparator || this.options.nsSeparator;
        return y ? {
          res: `${T}${te}${P}`,
          usedKey: P,
          exactUsedKey: P,
          usedLng: U,
          usedNS: T,
          usedParams: this.getUsedParamsDetails(u)
        } : `${T}${te}${P}`;
      }
      return y ? {
        res: P,
        usedKey: P,
        exactUsedKey: P,
        usedLng: U,
        usedNS: T,
        usedParams: this.getUsedParamsDetails(u)
      } : P;
    }
    const ee = this.resolve(o, u);
    let j = ee && ee.res;
    const W = ee && ee.usedKey || P, we = ee && ee.exactUsedKey || P, ge = Object.prototype.toString.apply(j), q = ["[object Number]", "[object Function]", "[object RegExp]"], Ce = u.joinArrays !== void 0 ? u.joinArrays : this.options.joinArrays, Z = !this.i18nFormat || this.i18nFormat.handleAsObject, xe = !Xe(j) && typeof j != "boolean" && typeof j != "number";
    if (Z && j && xe && q.indexOf(ge) < 0 && !(Xe(Ce) && Array.isArray(j))) {
      if (!u.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const te = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(W, j, {
          ...u,
          ns: I
        }) : `key '${P} (${this.language})' returned an object instead of string.`;
        return y ? (ee.res = te, ee.usedParams = this.getUsedParamsDetails(u), ee) : te;
      }
      if (m) {
        const te = Array.isArray(j), Me = te ? [] : {}, ie = te ? we : W;
        for (const se in j)
          if (Object.prototype.hasOwnProperty.call(j, se)) {
            const dt = `${ie}${m}${se}`;
            Me[se] = this.translate(dt, {
              ...u,
              joinArrays: !1,
              ns: I
            }), Me[se] === dt && (Me[se] = j[se]);
          }
        j = Me;
      }
    } else if (Z && Xe(Ce) && Array.isArray(j))
      j = j.join(Ce), j && (j = this.extendTranslation(j, o, u, d));
    else {
      let te = !1, Me = !1;
      const ie = u.count !== void 0 && !Xe(u.count), se = yo.hasDefaultValue(u), dt = ie ? this.pluralResolver.getSuffix(U, u.count, u) : "", rt = u.ordinal && ie ? this.pluralResolver.getSuffix(U, u.count, {
        ordinal: !1
      }) : "", Je = ie && !u.ordinal && u.count === 0 && this.pluralResolver.shouldUseIntlApi(), ut = Je && u[`defaultValue${this.options.pluralSeparator}zero`] || u[`defaultValue${dt}`] || u[`defaultValue${rt}`] || u.defaultValue;
      !this.isValidLookup(j) && se && (te = !0, j = ut), this.isValidLookup(j) || (Me = !0, j = P);
      const Ne = (u.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && Me ? void 0 : j, Pt = se && ut !== j && this.options.updateMissing;
      if (Me || te || Pt) {
        if (this.logger.log(Pt ? "updateKey" : "missingKey", U, T, P, Pt ? ut : j), m) {
          const mt = this.resolve(P, {
            ...u,
            keySeparator: !1
          });
          mt && mt.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let Be = [];
        const kt = this.languageUtils.getFallbackCodes(this.options.fallbackLng, u.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && kt && kt[0])
          for (let mt = 0; mt < kt.length; mt++)
            Be.push(kt[mt]);
        else this.options.saveMissingTo === "all" ? Be = this.languageUtils.toResolveHierarchy(u.lng || this.language) : Be.push(u.lng || this.language);
        const Tt = (mt, ht, je) => {
          const R = se && je !== j ? je : Ne;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(mt, T, ht, R, Pt, u) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(mt, T, ht, R, Pt, u), this.emit("missingKey", mt, T, ht, j);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && ie ? Be.forEach((mt) => {
          const ht = this.pluralResolver.getSuffixes(mt, u);
          Je && u[`defaultValue${this.options.pluralSeparator}zero`] && ht.indexOf(`${this.options.pluralSeparator}zero`) < 0 && ht.push(`${this.options.pluralSeparator}zero`), ht.forEach((je) => {
            Tt([mt], P + je, u[`defaultValue${je}`] || ut);
          });
        }) : Tt(Be, P, ut));
      }
      j = this.extendTranslation(j, o, u, ee, d), Me && j === P && this.options.appendNamespaceToMissingKey && (j = `${T}:${P}`), (Me || te) && this.options.parseMissingKeyHandler && (this.options.compatibilityAPI !== "v1" ? j = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${T}:${P}` : P, te ? j : void 0) : j = this.options.parseMissingKeyHandler(j));
    }
    return y ? (ee.res = j, ee.usedParams = this.getUsedParamsDetails(u), ee) : j;
  }
  extendTranslation(o, u, d, y, m) {
    var P = this;
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
      const U = Xe(o) && (d && d.interpolation && d.interpolation.skipOnVariables !== void 0 ? d.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let J;
      if (U) {
        const j = o.match(this.interpolator.nestingRegexp);
        J = j && j.length;
      }
      let ee = d.replace && !Xe(d.replace) ? d.replace : d;
      if (this.options.interpolation.defaultVariables && (ee = {
        ...this.options.interpolation.defaultVariables,
        ...ee
      }), o = this.interpolator.interpolate(o, ee, d.lng || this.language || y.usedLng, d), U) {
        const j = o.match(this.interpolator.nestingRegexp), W = j && j.length;
        J < W && (d.nest = !1);
      }
      !d.lng && this.options.compatibilityAPI !== "v1" && y && y.res && (d.lng = this.language || y.usedLng), d.nest !== !1 && (o = this.interpolator.nest(o, function() {
        for (var j = arguments.length, W = new Array(j), we = 0; we < j; we++)
          W[we] = arguments[we];
        return m && m[0] === W[0] && !d.context ? (P.logger.warn(`It seems you are nesting recursively key: ${W[0]} in key: ${u[0]}`), null) : P.translate(...W, u);
      }, d)), d.interpolation && this.interpolator.reset();
    }
    const I = d.postProcess || this.options.postProcess, T = Xe(I) ? [I] : I;
    return o != null && T && T.length && d.applyPostProcessor !== !1 && (o = ec.handle(T, o, u, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...y,
        usedParams: this.getUsedParamsDetails(d)
      },
      ...d
    } : d, this)), o;
  }
  resolve(o) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, d, y, m, P, I;
    return Xe(o) && (o = [o]), o.forEach((T) => {
      if (this.isValidLookup(d)) return;
      const U = this.extractFromKey(T, u), J = U.key;
      y = J;
      let ee = U.namespaces;
      this.options.fallbackNS && (ee = ee.concat(this.options.fallbackNS));
      const j = u.count !== void 0 && !Xe(u.count), W = j && !u.ordinal && u.count === 0 && this.pluralResolver.shouldUseIntlApi(), we = u.context !== void 0 && (Xe(u.context) || typeof u.context == "number") && u.context !== "", ge = u.lngs ? u.lngs : this.languageUtils.toResolveHierarchy(u.lng || this.language, u.fallbackLng);
      ee.forEach((q) => {
        this.isValidLookup(d) || (I = q, !Rs[`${ge[0]}-${q}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(I) && (Rs[`${ge[0]}-${q}`] = !0, this.logger.warn(`key "${y}" for languages "${ge.join(", ")}" won't get resolved as namespace "${I}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), ge.forEach((Ce) => {
          if (this.isValidLookup(d)) return;
          P = Ce;
          const Z = [J];
          if (this.i18nFormat && this.i18nFormat.addLookupKeys)
            this.i18nFormat.addLookupKeys(Z, J, Ce, q, u);
          else {
            let te;
            j && (te = this.pluralResolver.getSuffix(Ce, u.count, u));
            const Me = `${this.options.pluralSeparator}zero`, ie = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (j && (Z.push(J + te), u.ordinal && te.indexOf(ie) === 0 && Z.push(J + te.replace(ie, this.options.pluralSeparator)), W && Z.push(J + Me)), we) {
              const se = `${J}${this.options.contextSeparator}${u.context}`;
              Z.push(se), j && (Z.push(se + te), u.ordinal && te.indexOf(ie) === 0 && Z.push(se + te.replace(ie, this.options.pluralSeparator)), W && Z.push(se + Me));
            }
          }
          let xe;
          for (; xe = Z.pop(); )
            this.isValidLookup(d) || (m = xe, d = this.getResource(Ce, q, xe, u));
        }));
      });
    }), {
      res: d,
      usedKey: y,
      exactUsedKey: m,
      usedLng: P,
      usedNS: I
    };
  }
  isValidLookup(o) {
    return o !== void 0 && !(!this.options.returnNull && o === null) && !(!this.options.returnEmptyString && o === "");
  }
  getResource(o, u, d) {
    let y = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(o, u, d, y) : this.resourceStore.getResource(o, u, d, y);
  }
  getUsedParamsDetails() {
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const u = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], d = o.replace && !Xe(o.replace);
    let y = d ? o.replace : o;
    if (d && typeof o.count < "u" && (y.count = o.count), this.options.interpolation.defaultVariables && (y = {
      ...this.options.interpolation.defaultVariables,
      ...y
    }), !d) {
      y = {
        ...y
      };
      for (const m of u)
        delete y[m];
    }
    return y;
  }
  static hasDefaultValue(o) {
    const u = "defaultValue";
    for (const d in o)
      if (Object.prototype.hasOwnProperty.call(o, d) && u === d.substring(0, u.length) && o[d] !== void 0)
        return !0;
    return !1;
  }
}
const ni = (f) => f.charAt(0).toUpperCase() + f.slice(1);
class Ds {
  constructor(o) {
    this.options = o, this.supportedLngs = this.options.supportedLngs || !1, this.logger = jn.create("languageUtils");
  }
  getScriptPartFromCode(o) {
    if (o = mo(o), !o || o.indexOf("-") < 0) return null;
    const u = o.split("-");
    return u.length === 2 || (u.pop(), u[u.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(u.join("-"));
  }
  getLanguagePartFromCode(o) {
    if (o = mo(o), !o || o.indexOf("-") < 0) return o;
    const u = o.split("-");
    return this.formatLanguageCode(u[0]);
  }
  formatLanguageCode(o) {
    if (Xe(o) && o.indexOf("-") > -1) {
      if (typeof Intl < "u" && typeof Intl.getCanonicalLocales < "u")
        try {
          let y = Intl.getCanonicalLocales(o)[0];
          if (y && this.options.lowerCaseLng && (y = y.toLowerCase()), y) return y;
        } catch {
        }
      const u = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"];
      let d = o.split("-");
      return this.options.lowerCaseLng ? d = d.map((y) => y.toLowerCase()) : d.length === 2 ? (d[0] = d[0].toLowerCase(), d[1] = d[1].toUpperCase(), u.indexOf(d[1].toLowerCase()) > -1 && (d[1] = ni(d[1].toLowerCase()))) : d.length === 3 && (d[0] = d[0].toLowerCase(), d[1].length === 2 && (d[1] = d[1].toUpperCase()), d[0] !== "sgn" && d[2].length === 2 && (d[2] = d[2].toUpperCase()), u.indexOf(d[1].toLowerCase()) > -1 && (d[1] = ni(d[1].toLowerCase())), u.indexOf(d[2].toLowerCase()) > -1 && (d[2] = ni(d[2].toLowerCase()))), d.join("-");
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? o.toLowerCase() : o;
  }
  isSupportedCode(o) {
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (o = this.getLanguagePartFromCode(o)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(o) > -1;
  }
  getBestMatchFromCodes(o) {
    if (!o) return null;
    let u;
    return o.forEach((d) => {
      if (u) return;
      const y = this.formatLanguageCode(d);
      (!this.options.supportedLngs || this.isSupportedCode(y)) && (u = y);
    }), !u && this.options.supportedLngs && o.forEach((d) => {
      if (u) return;
      const y = this.getLanguagePartFromCode(d);
      if (this.isSupportedCode(y)) return u = y;
      u = this.options.supportedLngs.find((m) => {
        if (m === y) return m;
        if (!(m.indexOf("-") < 0 && y.indexOf("-") < 0) && (m.indexOf("-") > 0 && y.indexOf("-") < 0 && m.substring(0, m.indexOf("-")) === y || m.indexOf(y) === 0 && y.length > 1))
          return m;
      });
    }), u || (u = this.getFallbackCodes(this.options.fallbackLng)[0]), u;
  }
  getFallbackCodes(o, u) {
    if (!o) return [];
    if (typeof o == "function" && (o = o(u)), Xe(o) && (o = [o]), Array.isArray(o)) return o;
    if (!u) return o.default || [];
    let d = o[u];
    return d || (d = o[this.getScriptPartFromCode(u)]), d || (d = o[this.formatLanguageCode(u)]), d || (d = o[this.getLanguagePartFromCode(u)]), d || (d = o.default), d || [];
  }
  toResolveHierarchy(o, u) {
    const d = this.getFallbackCodes(u || this.options.fallbackLng || [], o), y = [], m = (P) => {
      P && (this.isSupportedCode(P) ? y.push(P) : this.logger.warn(`rejecting language code not found in supportedLngs: ${P}`));
    };
    return Xe(o) && (o.indexOf("-") > -1 || o.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && m(this.formatLanguageCode(o)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && m(this.getScriptPartFromCode(o)), this.options.load !== "currentOnly" && m(this.getLanguagePartFromCode(o))) : Xe(o) && m(this.formatLanguageCode(o)), d.forEach((P) => {
      y.indexOf(P) < 0 && m(this.formatLanguageCode(P));
    }), y;
  }
}
let Cd = [{
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
}], Md = {
  1: (f) => +(f > 1),
  2: (f) => +(f != 1),
  3: (f) => 0,
  4: (f) => f % 10 == 1 && f % 100 != 11 ? 0 : f % 10 >= 2 && f % 10 <= 4 && (f % 100 < 10 || f % 100 >= 20) ? 1 : 2,
  5: (f) => f == 0 ? 0 : f == 1 ? 1 : f == 2 ? 2 : f % 100 >= 3 && f % 100 <= 10 ? 3 : f % 100 >= 11 ? 4 : 5,
  6: (f) => f == 1 ? 0 : f >= 2 && f <= 4 ? 1 : 2,
  7: (f) => f == 1 ? 0 : f % 10 >= 2 && f % 10 <= 4 && (f % 100 < 10 || f % 100 >= 20) ? 1 : 2,
  8: (f) => f == 1 ? 0 : f == 2 ? 1 : f != 8 && f != 11 ? 2 : 3,
  9: (f) => +(f >= 2),
  10: (f) => f == 1 ? 0 : f == 2 ? 1 : f < 7 ? 2 : f < 11 ? 3 : 4,
  11: (f) => f == 1 || f == 11 ? 0 : f == 2 || f == 12 ? 1 : f > 2 && f < 20 ? 2 : 3,
  12: (f) => +(f % 10 != 1 || f % 100 == 11),
  13: (f) => +(f !== 0),
  14: (f) => f == 1 ? 0 : f == 2 ? 1 : f == 3 ? 2 : 3,
  15: (f) => f % 10 == 1 && f % 100 != 11 ? 0 : f % 10 >= 2 && (f % 100 < 10 || f % 100 >= 20) ? 1 : 2,
  16: (f) => f % 10 == 1 && f % 100 != 11 ? 0 : f !== 0 ? 1 : 2,
  17: (f) => f == 1 || f % 10 == 1 && f % 100 != 11 ? 0 : 1,
  18: (f) => f == 0 ? 0 : f == 1 ? 1 : 2,
  19: (f) => f == 1 ? 0 : f == 0 || f % 100 > 1 && f % 100 < 11 ? 1 : f % 100 > 10 && f % 100 < 20 ? 2 : 3,
  20: (f) => f == 1 ? 0 : f == 0 || f % 100 > 0 && f % 100 < 20 ? 1 : 2,
  21: (f) => f % 100 == 1 ? 1 : f % 100 == 2 ? 2 : f % 100 == 3 || f % 100 == 4 ? 3 : 0,
  22: (f) => f == 1 ? 0 : f == 2 ? 1 : (f < 0 || f > 10) && f % 10 == 0 ? 2 : 3
};
const Id = ["v1", "v2", "v3"], Ad = ["v4"], Os = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
}, Ed = () => {
  const f = {};
  return Cd.forEach((o) => {
    o.lngs.forEach((u) => {
      f[u] = {
        numbers: o.nr,
        plurals: Md[o.fc]
      };
    });
  }), f;
};
class _d {
  constructor(o) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = o, this.options = u, this.logger = jn.create("pluralResolver"), (!this.options.compatibilityJSON || Ad.includes(this.options.compatibilityJSON)) && (typeof Intl > "u" || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = Ed(), this.pluralRulesCache = {};
  }
  addRule(o, u) {
    this.rules[o] = u;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(o) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi()) {
      const d = mo(o === "dev" ? "en" : o), y = u.ordinal ? "ordinal" : "cardinal", m = JSON.stringify({
        cleanedCode: d,
        type: y
      });
      if (m in this.pluralRulesCache)
        return this.pluralRulesCache[m];
      let P;
      try {
        P = new Intl.PluralRules(d, {
          type: y
        });
      } catch {
        if (!o.match(/-|_/)) return;
        const T = this.languageUtils.getLanguagePartFromCode(o);
        P = this.getRule(T, u);
      }
      return this.pluralRulesCache[m] = P, P;
    }
    return this.rules[o] || this.rules[this.languageUtils.getLanguagePartFromCode(o)];
  }
  needsPlural(o) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const d = this.getRule(o, u);
    return this.shouldUseIntlApi() ? d && d.resolvedOptions().pluralCategories.length > 1 : d && d.numbers.length > 1;
  }
  getPluralFormsOfKey(o, u) {
    let d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(o, d).map((y) => `${u}${y}`);
  }
  getSuffixes(o) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const d = this.getRule(o, u);
    return d ? this.shouldUseIntlApi() ? d.resolvedOptions().pluralCategories.sort((y, m) => Os[y] - Os[m]).map((y) => `${this.options.prepend}${u.ordinal ? `ordinal${this.options.prepend}` : ""}${y}`) : d.numbers.map((y) => this.getSuffix(o, y, u)) : [];
  }
  getSuffix(o, u) {
    let d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const y = this.getRule(o, d);
    return y ? this.shouldUseIntlApi() ? `${this.options.prepend}${d.ordinal ? `ordinal${this.options.prepend}` : ""}${y.select(u)}` : this.getSuffixRetroCompatible(y, u) : (this.logger.warn(`no plural rule found for: ${o}`), "");
  }
  getSuffixRetroCompatible(o, u) {
    const d = o.noAbs ? o.plurals(u) : o.plurals(Math.abs(u));
    let y = o.numbers[d];
    this.options.simplifyPluralSuffix && o.numbers.length === 2 && o.numbers[0] === 1 && (y === 2 ? y = "plural" : y === 1 && (y = ""));
    const m = () => this.options.prepend && y.toString() ? this.options.prepend + y.toString() : y.toString();
    return this.options.compatibilityJSON === "v1" ? y === 1 ? "" : typeof y == "number" ? `_plural_${y.toString()}` : m() : this.options.compatibilityJSON === "v2" || this.options.simplifyPluralSuffix && o.numbers.length === 2 && o.numbers[0] === 1 ? m() : this.options.prepend && d.toString() ? this.options.prepend + d.toString() : d.toString();
  }
  shouldUseIntlApi() {
    return !Id.includes(this.options.compatibilityJSON);
  }
}
const Ws = function(f, o, u) {
  let d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", y = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, m = wd(f, o, u);
  return !m && y && Xe(u) && (m = ci(f, u, d), m === void 0 && (m = ci(o, u, d))), m;
}, ai = (f) => f.replace(/\$/g, "$$$$");
class Td {
  constructor() {
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = jn.create("interpolator"), this.options = o, this.format = o.interpolation && o.interpolation.format || ((u) => u), this.init(o);
  }
  init() {
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    o.interpolation || (o.interpolation = {
      escapeValue: !0
    });
    const {
      escape: u,
      escapeValue: d,
      useRawValueToEscape: y,
      prefix: m,
      prefixEscaped: P,
      suffix: I,
      suffixEscaped: T,
      formatSeparator: U,
      unescapeSuffix: J,
      unescapePrefix: ee,
      nestingPrefix: j,
      nestingPrefixEscaped: W,
      nestingSuffix: we,
      nestingSuffixEscaped: ge,
      nestingOptionsSeparator: q,
      maxReplaces: Ce,
      alwaysFormat: Z
    } = o.interpolation;
    this.escape = u !== void 0 ? u : bd, this.escapeValue = d !== void 0 ? d : !0, this.useRawValueToEscape = y !== void 0 ? y : !1, this.prefix = m ? cr(m) : P || "{{", this.suffix = I ? cr(I) : T || "}}", this.formatSeparator = U || ",", this.unescapePrefix = J ? "" : ee || "-", this.unescapeSuffix = this.unescapePrefix ? "" : J || "", this.nestingPrefix = j ? cr(j) : W || cr("$t("), this.nestingSuffix = we ? cr(we) : ge || cr(")"), this.nestingOptionsSeparator = q || ",", this.maxReplaces = Ce || 1e3, this.alwaysFormat = Z !== void 0 ? Z : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const o = (u, d) => u && u.source === d ? (u.lastIndex = 0, u) : new RegExp(d, "g");
    this.regexp = o(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = o(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = o(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(o, u, d, y) {
    let m, P, I;
    const T = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, U = (W) => {
      if (W.indexOf(this.formatSeparator) < 0) {
        const Ce = Ws(u, T, W, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(Ce, void 0, d, {
          ...y,
          ...u,
          interpolationkey: W
        }) : Ce;
      }
      const we = W.split(this.formatSeparator), ge = we.shift().trim(), q = we.join(this.formatSeparator).trim();
      return this.format(Ws(u, T, ge, this.options.keySeparator, this.options.ignoreJSONStructure), q, d, {
        ...y,
        ...u,
        interpolationkey: ge
      });
    };
    this.resetRegExp();
    const J = y && y.missingInterpolationHandler || this.options.missingInterpolationHandler, ee = y && y.interpolation && y.interpolation.skipOnVariables !== void 0 ? y.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (W) => ai(W)
    }, {
      regex: this.regexp,
      safeValue: (W) => this.escapeValue ? ai(this.escape(W)) : ai(W)
    }].forEach((W) => {
      for (I = 0; m = W.regex.exec(o); ) {
        const we = m[1].trim();
        if (P = U(we), P === void 0)
          if (typeof J == "function") {
            const q = J(o, m, y);
            P = Xe(q) ? q : "";
          } else if (y && Object.prototype.hasOwnProperty.call(y, we))
            P = "";
          else if (ee) {
            P = m[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${we} for interpolating ${o}`), P = "";
        else !Xe(P) && !this.useRawValueToEscape && (P = Is(P));
        const ge = W.safeValue(P);
        if (o = o.replace(m[0], ge), ee ? (W.regex.lastIndex += P.length, W.regex.lastIndex -= m[0].length) : W.regex.lastIndex = 0, I++, I >= this.maxReplaces)
          break;
      }
    }), o;
  }
  nest(o, u) {
    let d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, y, m, P;
    const I = (T, U) => {
      const J = this.nestingOptionsSeparator;
      if (T.indexOf(J) < 0) return T;
      const ee = T.split(new RegExp(`${J}[ ]*{`));
      let j = `{${ee[1]}`;
      T = ee[0], j = this.interpolate(j, P);
      const W = j.match(/'/g), we = j.match(/"/g);
      (W && W.length % 2 === 0 && !we || we.length % 2 !== 0) && (j = j.replace(/'/g, '"'));
      try {
        P = JSON.parse(j), U && (P = {
          ...U,
          ...P
        });
      } catch (ge) {
        return this.logger.warn(`failed parsing options string in nesting for key ${T}`, ge), `${T}${J}${j}`;
      }
      return P.defaultValue && P.defaultValue.indexOf(this.prefix) > -1 && delete P.defaultValue, T;
    };
    for (; y = this.nestingRegexp.exec(o); ) {
      let T = [];
      P = {
        ...d
      }, P = P.replace && !Xe(P.replace) ? P.replace : P, P.applyPostProcessor = !1, delete P.defaultValue;
      let U = !1;
      if (y[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(y[1])) {
        const J = y[1].split(this.formatSeparator).map((ee) => ee.trim());
        y[1] = J.shift(), T = J, U = !0;
      }
      if (m = u(I.call(this, y[1].trim(), P), P), m && y[0] === o && !Xe(m)) return m;
      Xe(m) || (m = Is(m)), m || (this.logger.warn(`missed to resolve ${y[1]} for nesting ${o}`), m = ""), U && (m = T.reduce((J, ee) => this.format(J, ee, d.lng, {
        ...d,
        interpolationkey: y[1].trim()
      }), m.trim())), o = o.replace(y[0], m), this.regexp.lastIndex = 0;
    }
    return o;
  }
}
const Rd = (f) => {
  let o = f.toLowerCase().trim();
  const u = {};
  if (f.indexOf("(") > -1) {
    const d = f.split("(");
    o = d[0].toLowerCase().trim();
    const y = d[1].substring(0, d[1].length - 1);
    o === "currency" && y.indexOf(":") < 0 ? u.currency || (u.currency = y.trim()) : o === "relativetime" && y.indexOf(":") < 0 ? u.range || (u.range = y.trim()) : y.split(";").forEach((P) => {
      if (P) {
        const [I, ...T] = P.split(":"), U = T.join(":").trim().replace(/^'+|'+$/g, ""), J = I.trim();
        u[J] || (u[J] = U), U === "false" && (u[J] = !1), U === "true" && (u[J] = !0), isNaN(U) || (u[J] = parseInt(U, 10));
      }
    });
  }
  return {
    formatName: o,
    formatOptions: u
  };
}, ur = (f) => {
  const o = {};
  return (u, d, y) => {
    let m = y;
    y && y.interpolationkey && y.formatParams && y.formatParams[y.interpolationkey] && y[y.interpolationkey] && (m = {
      ...m,
      [y.interpolationkey]: void 0
    });
    const P = d + JSON.stringify(m);
    let I = o[P];
    return I || (I = f(mo(d), y), o[P] = I), I(u);
  };
};
class Dd {
  constructor() {
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = jn.create("formatter"), this.options = o, this.formats = {
      number: ur((u, d) => {
        const y = new Intl.NumberFormat(u, {
          ...d
        });
        return (m) => y.format(m);
      }),
      currency: ur((u, d) => {
        const y = new Intl.NumberFormat(u, {
          ...d,
          style: "currency"
        });
        return (m) => y.format(m);
      }),
      datetime: ur((u, d) => {
        const y = new Intl.DateTimeFormat(u, {
          ...d
        });
        return (m) => y.format(m);
      }),
      relativetime: ur((u, d) => {
        const y = new Intl.RelativeTimeFormat(u, {
          ...d
        });
        return (m) => y.format(m, d.range || "day");
      }),
      list: ur((u, d) => {
        const y = new Intl.ListFormat(u, {
          ...d
        });
        return (m) => y.format(m);
      })
    }, this.init(o);
  }
  init(o) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    this.formatSeparator = u.interpolation.formatSeparator || ",";
  }
  add(o, u) {
    this.formats[o.toLowerCase().trim()] = u;
  }
  addCached(o, u) {
    this.formats[o.toLowerCase().trim()] = ur(u);
  }
  format(o, u, d) {
    let y = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const m = u.split(this.formatSeparator);
    if (m.length > 1 && m[0].indexOf("(") > 1 && m[0].indexOf(")") < 0 && m.find((I) => I.indexOf(")") > -1)) {
      const I = m.findIndex((T) => T.indexOf(")") > -1);
      m[0] = [m[0], ...m.splice(1, I)].join(this.formatSeparator);
    }
    return m.reduce((I, T) => {
      const {
        formatName: U,
        formatOptions: J
      } = Rd(T);
      if (this.formats[U]) {
        let ee = I;
        try {
          const j = y && y.formatParams && y.formatParams[y.interpolationkey] || {}, W = j.locale || j.lng || y.locale || y.lng || d;
          ee = this.formats[U](I, W, {
            ...J,
            ...y,
            ...j
          });
        } catch (j) {
          this.logger.warn(j);
        }
        return ee;
      } else
        this.logger.warn(`there was no format function for ${U}`);
      return I;
    }, o);
  }
}
const Od = (f, o) => {
  f.pending[o] !== void 0 && (delete f.pending[o], f.pendingCount--);
};
class Wd extends bo {
  constructor(o, u, d) {
    let y = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = o, this.store = u, this.services = d, this.languageUtils = d.languageUtils, this.options = y, this.logger = jn.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = y.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = y.maxRetries >= 0 ? y.maxRetries : 5, this.retryTimeout = y.retryTimeout >= 1 ? y.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(d, y.backend, y);
  }
  queueLoad(o, u, d, y) {
    const m = {}, P = {}, I = {}, T = {};
    return o.forEach((U) => {
      let J = !0;
      u.forEach((ee) => {
        const j = `${U}|${ee}`;
        !d.reload && this.store.hasResourceBundle(U, ee) ? this.state[j] = 2 : this.state[j] < 0 || (this.state[j] === 1 ? P[j] === void 0 && (P[j] = !0) : (this.state[j] = 1, J = !1, P[j] === void 0 && (P[j] = !0), m[j] === void 0 && (m[j] = !0), T[ee] === void 0 && (T[ee] = !0)));
      }), J || (I[U] = !0);
    }), (Object.keys(m).length || Object.keys(P).length) && this.queue.push({
      pending: P,
      pendingCount: Object.keys(P).length,
      loaded: {},
      errors: [],
      callback: y
    }), {
      toLoad: Object.keys(m),
      pending: Object.keys(P),
      toLoadLanguages: Object.keys(I),
      toLoadNamespaces: Object.keys(T)
    };
  }
  loaded(o, u, d) {
    const y = o.split("|"), m = y[0], P = y[1];
    u && this.emit("failedLoading", m, P, u), !u && d && this.store.addResourceBundle(m, P, d, void 0, void 0, {
      skipCopy: !0
    }), this.state[o] = u ? -1 : 2, u && d && (this.state[o] = 0);
    const I = {};
    this.queue.forEach((T) => {
      md(T.loaded, [m], P), Od(T, o), u && T.errors.push(u), T.pendingCount === 0 && !T.done && (Object.keys(T.loaded).forEach((U) => {
        I[U] || (I[U] = {});
        const J = T.loaded[U];
        J.length && J.forEach((ee) => {
          I[U][ee] === void 0 && (I[U][ee] = !0);
        });
      }), T.done = !0, T.errors.length ? T.callback(T.errors) : T.callback());
    }), this.emit("loaded", I), this.queue = this.queue.filter((T) => !T.done);
  }
  read(o, u, d) {
    let y = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, m = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout, P = arguments.length > 5 ? arguments[5] : void 0;
    if (!o.length) return P(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: o,
        ns: u,
        fcName: d,
        tried: y,
        wait: m,
        callback: P
      });
      return;
    }
    this.readingCalls++;
    const I = (U, J) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const ee = this.waitingReads.shift();
        this.read(ee.lng, ee.ns, ee.fcName, ee.tried, ee.wait, ee.callback);
      }
      if (U && J && y < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, o, u, d, y + 1, m * 2, P);
        }, m);
        return;
      }
      P(U, J);
    }, T = this.backend[d].bind(this.backend);
    if (T.length === 2) {
      try {
        const U = T(o, u);
        U && typeof U.then == "function" ? U.then((J) => I(null, J)).catch(I) : I(null, U);
      } catch (U) {
        I(U);
      }
      return;
    }
    return T(o, u, I);
  }
  prepareLoading(o, u) {
    let d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, y = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), y && y();
    Xe(o) && (o = this.languageUtils.toResolveHierarchy(o)), Xe(u) && (u = [u]);
    const m = this.queueLoad(o, u, d, y);
    if (!m.toLoad.length)
      return m.pending.length || y(), null;
    m.toLoad.forEach((P) => {
      this.loadOne(P);
    });
  }
  load(o, u, d) {
    this.prepareLoading(o, u, {}, d);
  }
  reload(o, u, d) {
    this.prepareLoading(o, u, {
      reload: !0
    }, d);
  }
  loadOne(o) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const d = o.split("|"), y = d[0], m = d[1];
    this.read(y, m, "read", void 0, void 0, (P, I) => {
      P && this.logger.warn(`${u}loading namespace ${m} for language ${y} failed`, P), !P && I && this.logger.log(`${u}loaded namespace ${m} for language ${y}`, I), this.loaded(o, P, I);
    });
  }
  saveMissing(o, u, d, y, m) {
    let P = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, I = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(u)) {
      this.logger.warn(`did not save key "${d}" as the namespace "${u}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(d == null || d === "")) {
      if (this.backend && this.backend.create) {
        const T = {
          ...P,
          isUpdate: m
        }, U = this.backend.create.bind(this.backend);
        if (U.length < 6)
          try {
            let J;
            U.length === 5 ? J = U(o, u, d, y, T) : J = U(o, u, d, y), J && typeof J.then == "function" ? J.then((ee) => I(null, ee)).catch(I) : I(null, J);
          } catch (J) {
            I(J);
          }
        else
          U(o, u, d, y, I, T);
      }
      !o || !o[0] || this.store.addResource(o[0], u, d, y);
    }
  }
}
const Bs = () => ({
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
  overloadTranslationOptionHandler: (f) => {
    let o = {};
    if (typeof f[1] == "object" && (o = f[1]), Xe(f[1]) && (o.defaultValue = f[1]), Xe(f[2]) && (o.tDescription = f[2]), typeof f[2] == "object" || typeof f[3] == "object") {
      const u = f[3] || f[2];
      Object.keys(u).forEach((d) => {
        o[d] = u[d];
      });
    }
    return o;
  },
  interpolation: {
    escapeValue: !0,
    format: (f) => f,
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
}), Ns = (f) => (Xe(f.ns) && (f.ns = [f.ns]), Xe(f.fallbackLng) && (f.fallbackLng = [f.fallbackLng]), Xe(f.fallbackNS) && (f.fallbackNS = [f.fallbackNS]), f.supportedLngs && f.supportedLngs.indexOf("cimode") < 0 && (f.supportedLngs = f.supportedLngs.concat(["cimode"])), f), po = () => {
}, Bd = (f) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(f)).forEach((u) => {
    typeof f[u] == "function" && (f[u] = f[u].bind(f));
  });
};
class Vr extends bo {
  constructor() {
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, u = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = Ns(o), this.services = {}, this.logger = jn, this.modules = {
      external: []
    }, Bd(this), u && !this.isInitialized && !o.isClone) {
      if (!this.options.initImmediate)
        return this.init(o, u), this;
      setTimeout(() => {
        this.init(o, u);
      }, 0);
    }
  }
  init() {
    var o = this;
    let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, d = arguments.length > 1 ? arguments[1] : void 0;
    this.isInitializing = !0, typeof u == "function" && (d = u, u = {}), !u.defaultNS && u.defaultNS !== !1 && u.ns && (Xe(u.ns) ? u.defaultNS = u.ns : u.ns.indexOf("translation") < 0 && (u.defaultNS = u.ns[0]));
    const y = Bs();
    this.options = {
      ...y,
      ...this.options,
      ...Ns(u)
    }, this.options.compatibilityAPI !== "v1" && (this.options.interpolation = {
      ...y.interpolation,
      ...this.options.interpolation
    }), u.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = u.keySeparator), u.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = u.nsSeparator);
    const m = (J) => J ? typeof J == "function" ? new J() : J : null;
    if (!this.options.isClone) {
      this.modules.logger ? jn.init(m(this.modules.logger), this.options) : jn.init(null, this.options);
      let J;
      this.modules.formatter ? J = this.modules.formatter : typeof Intl < "u" && (J = Dd);
      const ee = new Ds(this.options);
      this.store = new Ts(this.options.resources, this.options);
      const j = this.services;
      j.logger = jn, j.resourceStore = this.store, j.languageUtils = ee, j.pluralResolver = new _d(ee, {
        prepend: this.options.pluralSeparator,
        compatibilityJSON: this.options.compatibilityJSON,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), J && (!this.options.interpolation.format || this.options.interpolation.format === y.interpolation.format) && (j.formatter = m(J), j.formatter.init(j, this.options), this.options.interpolation.format = j.formatter.format.bind(j.formatter)), j.interpolator = new Td(this.options), j.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, j.backendConnector = new Wd(m(this.modules.backend), j.resourceStore, j, this.options), j.backendConnector.on("*", function(W) {
        for (var we = arguments.length, ge = new Array(we > 1 ? we - 1 : 0), q = 1; q < we; q++)
          ge[q - 1] = arguments[q];
        o.emit(W, ...ge);
      }), this.modules.languageDetector && (j.languageDetector = m(this.modules.languageDetector), j.languageDetector.init && j.languageDetector.init(j, this.options.detection, this.options)), this.modules.i18nFormat && (j.i18nFormat = m(this.modules.i18nFormat), j.i18nFormat.init && j.i18nFormat.init(this)), this.translator = new yo(this.services, this.options), this.translator.on("*", function(W) {
        for (var we = arguments.length, ge = new Array(we > 1 ? we - 1 : 0), q = 1; q < we; q++)
          ge[q - 1] = arguments[q];
        o.emit(W, ...ge);
      }), this.modules.external.forEach((W) => {
        W.init && W.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, d || (d = po), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const J = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      J.length > 0 && J[0] !== "dev" && (this.options.lng = J[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((J) => {
      this[J] = function() {
        return o.store[J](...arguments);
      };
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((J) => {
      this[J] = function() {
        return o.store[J](...arguments), o;
      };
    });
    const T = Br(), U = () => {
      const J = (ee, j) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), T.resolve(j), d(ee, j);
      };
      if (this.languages && this.options.compatibilityAPI !== "v1" && !this.isInitialized) return J(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, J);
    };
    return this.options.resources || !this.options.initImmediate ? U() : setTimeout(U, 0), T;
  }
  loadResources(o) {
    let d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : po;
    const y = Xe(o) ? o : this.language;
    if (typeof o == "function" && (d = o), !this.options.resources || this.options.partialBundledLanguages) {
      if (y && y.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return d();
      const m = [], P = (I) => {
        if (!I || I === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(I).forEach((U) => {
          U !== "cimode" && m.indexOf(U) < 0 && m.push(U);
        });
      };
      y ? P(y) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((T) => P(T)), this.options.preload && this.options.preload.forEach((I) => P(I)), this.services.backendConnector.load(m, this.options.ns, (I) => {
        !I && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), d(I);
      });
    } else
      d(null);
  }
  reloadResources(o, u, d) {
    const y = Br();
    return typeof o == "function" && (d = o, o = void 0), typeof u == "function" && (d = u, u = void 0), o || (o = this.languages), u || (u = this.options.ns), d || (d = po), this.services.backendConnector.reload(o, u, (m) => {
      y.resolve(), d(m);
    }), y;
  }
  use(o) {
    if (!o) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!o.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return o.type === "backend" && (this.modules.backend = o), (o.type === "logger" || o.log && o.warn && o.error) && (this.modules.logger = o), o.type === "languageDetector" && (this.modules.languageDetector = o), o.type === "i18nFormat" && (this.modules.i18nFormat = o), o.type === "postProcessor" && ec.addPostProcessor(o), o.type === "formatter" && (this.modules.formatter = o), o.type === "3rdParty" && this.modules.external.push(o), this;
  }
  setResolvedLanguage(o) {
    if (!(!o || !this.languages) && !(["cimode", "dev"].indexOf(o) > -1))
      for (let u = 0; u < this.languages.length; u++) {
        const d = this.languages[u];
        if (!(["cimode", "dev"].indexOf(d) > -1) && this.store.hasLanguageSomeTranslations(d)) {
          this.resolvedLanguage = d;
          break;
        }
      }
  }
  changeLanguage(o, u) {
    var d = this;
    this.isLanguageChangingTo = o;
    const y = Br();
    this.emit("languageChanging", o);
    const m = (T) => {
      this.language = T, this.languages = this.services.languageUtils.toResolveHierarchy(T), this.resolvedLanguage = void 0, this.setResolvedLanguage(T);
    }, P = (T, U) => {
      U ? (m(U), this.translator.changeLanguage(U), this.isLanguageChangingTo = void 0, this.emit("languageChanged", U), this.logger.log("languageChanged", U)) : this.isLanguageChangingTo = void 0, y.resolve(function() {
        return d.t(...arguments);
      }), u && u(T, function() {
        return d.t(...arguments);
      });
    }, I = (T) => {
      !o && !T && this.services.languageDetector && (T = []);
      const U = Xe(T) ? T : this.services.languageUtils.getBestMatchFromCodes(T);
      U && (this.language || m(U), this.translator.language || this.translator.changeLanguage(U), this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(U)), this.loadResources(U, (J) => {
        P(J, U);
      });
    };
    return !o && this.services.languageDetector && !this.services.languageDetector.async ? I(this.services.languageDetector.detect()) : !o && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(I) : this.services.languageDetector.detect(I) : I(o), y;
  }
  getFixedT(o, u, d) {
    var y = this;
    const m = function(P, I) {
      let T;
      if (typeof I != "object") {
        for (var U = arguments.length, J = new Array(U > 2 ? U - 2 : 0), ee = 2; ee < U; ee++)
          J[ee - 2] = arguments[ee];
        T = y.options.overloadTranslationOptionHandler([P, I].concat(J));
      } else
        T = {
          ...I
        };
      T.lng = T.lng || m.lng, T.lngs = T.lngs || m.lngs, T.ns = T.ns || m.ns, T.keyPrefix !== "" && (T.keyPrefix = T.keyPrefix || d || m.keyPrefix);
      const j = y.options.keySeparator || ".";
      let W;
      return T.keyPrefix && Array.isArray(P) ? W = P.map((we) => `${T.keyPrefix}${j}${we}`) : W = T.keyPrefix ? `${T.keyPrefix}${j}${P}` : P, y.t(W, T);
    };
    return Xe(o) ? m.lng = o : m.lngs = o, m.ns = u, m.keyPrefix = d, m;
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
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const d = u.lng || this.resolvedLanguage || this.languages[0], y = this.options ? this.options.fallbackLng : !1, m = this.languages[this.languages.length - 1];
    if (d.toLowerCase() === "cimode") return !0;
    const P = (I, T) => {
      const U = this.services.backendConnector.state[`${I}|${T}`];
      return U === -1 || U === 0 || U === 2;
    };
    if (u.precheck) {
      const I = u.precheck(this, P);
      if (I !== void 0) return I;
    }
    return !!(this.hasResourceBundle(d, o) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || P(d, o) && (!y || P(m, o)));
  }
  loadNamespaces(o, u) {
    const d = Br();
    return this.options.ns ? (Xe(o) && (o = [o]), o.forEach((y) => {
      this.options.ns.indexOf(y) < 0 && this.options.ns.push(y);
    }), this.loadResources((y) => {
      d.resolve(), u && u(y);
    }), d) : (u && u(), Promise.resolve());
  }
  loadLanguages(o, u) {
    const d = Br();
    Xe(o) && (o = [o]);
    const y = this.options.preload || [], m = o.filter((P) => y.indexOf(P) < 0 && this.services.languageUtils.isSupportedCode(P));
    return m.length ? (this.options.preload = y.concat(m), this.loadResources((P) => {
      d.resolve(), u && u(P);
    }), d) : (u && u(), Promise.resolve());
  }
  dir(o) {
    if (o || (o = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !o) return "rtl";
    const u = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], d = this.services && this.services.languageUtils || new Ds(Bs());
    return u.indexOf(d.getLanguagePartFromCode(o)) > -1 || o.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, u = arguments.length > 1 ? arguments[1] : void 0;
    return new Vr(o, u);
  }
  cloneInstance() {
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : po;
    const d = o.forkResourceStore;
    d && delete o.forkResourceStore;
    const y = {
      ...this.options,
      ...o,
      isClone: !0
    }, m = new Vr(y);
    return (o.debug !== void 0 || o.prefix !== void 0) && (m.logger = m.logger.clone(o)), ["store", "services", "language"].forEach((I) => {
      m[I] = this[I];
    }), m.services = {
      ...this.services
    }, m.services.utils = {
      hasLoadedNamespace: m.hasLoadedNamespace.bind(m)
    }, d && (m.store = new Ts(this.store.data, y), m.services.resourceStore = m.store), m.translator = new yo(m.services, y), m.translator.on("*", function(I) {
      for (var T = arguments.length, U = new Array(T > 1 ? T - 1 : 0), J = 1; J < T; J++)
        U[J - 1] = arguments[J];
      m.emit(I, ...U);
    }), m.init(y, u), m.translator.options = y, m.translator.backendConnector.services.utils = {
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
const tc = Vr.createInstance();
tc.createInstance = Vr.createInstance;
var Nd = tc;
(() => {
  var f = { 847: (y, m) => {
    var P = { 2346: function(j, W, we) {
      var ge = this && this.__importDefault || function(Z) {
        return Z && Z.__esModule ? Z : { default: Z };
      };
      Object.defineProperty(W, "__esModule", { value: !0 }), W.getMostReadable = W.darkenColor = W.lightenColor = void 0;
      const q = ge(we(6535));
      W.lightenColor = (Z, xe) => Ce(Z, "lighten", xe), W.darkenColor = (Z, xe) => Ce(Z, "darken", xe);
      const Ce = (Z, xe, te) => {
        if (te && (te < 0 || te > 100)) throw new Error(`${te} must be a number between 0 and 100`);
        return (0, q.default)(Z)[xe](te).toString();
      };
      W.getMostReadable = (Z, xe) => q.default.mostReadable(Z, xe).toHexString();
    }, 2317: (j, W) => {
      Object.defineProperty(W, "__esModule", { value: !0 }), W.IconSize = W.Transition = W.LineHeight = W.FontWeight = W.FontSize = W.FontFamily = W.Shadow = W.Radius = W.UnitPx = W.Unit = W.SizeName = W.Size = W.Color = void 0, W.Color = { white: "#FFFFFF", lightGray1: "#FAFBFE", lightGray2: "#F3F5F8", lightGray3: "#ECEEF1", lightGray4: "#DDDFE4", lightGray5: "#C9CBD2", neutralGray: "#7D808A", neutralGray80: "rgba(125,128,138,0.8)", silverGray: "#C0C1C2", darkGray1: "#53565F", darkGray2: "#383A40", darkGray3: "#2F3136", darkGray4: "#24262B", darkGray5: "#1E1F23", darkGray6: "#111214", openFinDarkest: "#3D39CD", openFinDarker: "#4642E0", openFin: "#504CFF", openFinLight: "#5254FB", openFinLighter: "#5C5EFE", openFinLightest: "#6864FF", functional1: "#207735", functional2: "#46C8F1", functional3: "#0A76D3", functional4: "#6CADE5", functional5: "#0A76D3", functional6: "#882BFE", functional7: "#F31818", functional8: "#C93400", functional9: "#FF5E60", functional10: "#F48F00", purple: "#8C61FF", lightblue: "#36C3FE", aqua: "#00CC88", yellow: "#FFEB00", salmon: "#FF8C4C", pink: "#FF5E60", lightpink: "#FF8FB8", white00: "rgba(255,255,255,0.0)", white10: "rgba(255,255,255,0.1)", white20: "rgba(255,255,255,0.2)", white30: "rgba(255,255,255,0.3)", white40: "rgba(255,255,255,0.4)", white50: "rgba(255,255,255,0.5)", white60: "rgba(255,255,255,0.6)", white70: "rgba(255,255,255,0.7)", white80: "rgba(255,255,255,0.8)", white90: "rgba(255,255,255,0.9)", black00: "rgba(0,0,0,0.0)", black10: "rgba(0,0,0,0.1)", black20: "rgba(0,0,0,0.2)", black30: "rgba(0,0,0,0.3)", black40: "rgba(0,0,0,0.4)", black50: "rgba(0,0,0,0.5)", black60: "rgba(0,0,0,0.6)", black70: "rgba(0,0,0,0.7)", black80: "rgba(0,0,0,0.8)", black90: "rgba(0,0,0,0.9)", transparent: "transparent", openFinActive: "#4642FF", openFinHover: "#6965FF", lightGray4Active: "#D7DADF", lightGray4Hover: "#EBECEF", darkGray2Active: "#33353B", darkGray2Hover: "#44464E" }, W.Size = { xsmall: "xsmall", small: "small", base: "base", large: "large", xlarge: "xlarge", xxlarge: "xxlarge", xxxlarge: "xxxlarge", xxxxlarge: "xxxxlarge" }, W.SizeName = { [W.Size.xsmall]: "Extra Small", [W.Size.small]: "Small", [W.Size.base]: "Base", [W.Size.large]: "Large", [W.Size.xlarge]: "Extra Large", [W.Size.xxlarge]: "2X Large", [W.Size.xxxlarge]: "3X Large", [W.Size.xxxxlarge]: "4X Large" }, W.Unit = { [W.Size.xsmall]: 4, [W.Size.small]: 8, [W.Size.base]: 12, [W.Size.large]: 16, [W.Size.xlarge]: 20, [W.Size.xxlarge]: 24, [W.Size.xxxlarge]: 32, [W.Size.xxxxlarge]: 48 }, W.UnitPx = { [W.Size.xsmall]: "4px", [W.Size.small]: "8px", [W.Size.base]: "12px", [W.Size.large]: "16px", [W.Size.xlarge]: "20px", [W.Size.xxlarge]: "24px", [W.Size.xxxlarge]: "32px", [W.Size.xxxxlarge]: "48px" }, W.Radius = { [W.Size.xsmall]: "2px", [W.Size.small]: "4px", [W.Size.base]: "8px", [W.Size.large]: "24px", pill: "100vh", round: "50%", none: "0" }, W.Shadow = { [W.Size.base]: "0 4px 4px rgba(0, 0, 0, 0.25)" }, W.FontFamily = ["Inter", "system-ui", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen-Sans", "Ubuntu", "Cantarell", "Helvetica Neue", "sans-serif"].join(","), W.FontSize = { [W.Size.xsmall]: "8px", [W.Size.small]: "10px", [W.Size.base]: "12px", [W.Size.large]: "14px", [W.Size.xlarge]: "16px", [W.Size.xxlarge]: "18px", [W.Size.xxxlarge]: "20px", [W.Size.xxxxlarge]: "40px" }, W.FontWeight = { normal: 400, bold: 600 }, W.LineHeight = { ui: 1, heading: 1.2, text: 1.5 }, W.Transition = { base: "200ms cubic-bezier(0.16, 1, 0.3, 1)", none: "0ms" }, W.IconSize = { [W.Size.xsmall]: W.UnitPx.small, [W.Size.small]: W.UnitPx.base, [W.Size.base]: "15px", [W.Size.large]: W.UnitPx.xlarge, [W.Size.xlarge]: W.UnitPx.xxlarge, [W.Size.xxlarge]: W.UnitPx.xxxlarge, [W.Size.xxxlarge]: W.UnitPx.xxxxlarge };
    }, 6893: (j, W, we) => {
      Object.defineProperty(W, "__esModule", { value: !0 }), W.createTheme = void 0;
      const ge = we(2317), q = we(2346), Ce = we(5939), Z = { fontFamily: ge.FontFamily, fontSize: ge.FontSize, fontWeight: ge.FontWeight, lineHeight: ge.LineHeight, iconSize: ge.IconSize, radius: ge.Radius, shadow: ge.Shadow, transition: ge.Transition, unit: ge.Unit, px: ge.UnitPx }, xe = (te, Me) => ({ [`${te}Active`]: (0, q.darkenColor)(Me, 2), [`${te}Hover`]: (0, q.lightenColor)(Me, 5), [`${te}Focused`]: (0, q.getMostReadable)(Me, [ge.Color.white, ge.Color.darkGray5]), [`${te}Text`]: (0, q.getMostReadable)(Me, [ge.Color.white, ge.Color.darkGray5]) });
      W.createTheme = (te) => Object.assign(Object.assign({}, Z), { palette: Object.assign(Object.assign(Object.assign({}, xe(Ce.Palette.brandPrimary, te.brandPrimary)), xe(Ce.Palette.brandSecondary, te.brandSecondary)), te) });
    }, 5939: (j, W) => {
      Object.defineProperty(W, "__esModule", { value: !0 }), W.Palette = void 0, W.Palette = { background1: "background1", background2: "background2", background3: "background3", background4: "background4", background5: "background5", background6: "background6", brandPrimary: "brandPrimary", brandSecondary: "brandSecondary", brandPrimaryActive: "brandPrimaryActive", brandPrimaryHover: "brandPrimaryHover", brandPrimaryFocused: "brandPrimaryFocused", brandPrimaryText: "brandPrimaryText", brandSecondaryActive: "brandSecondaryActive", brandSecondaryHover: "brandSecondaryHover", brandSecondaryFocused: "brandSecondaryFocused", brandSecondaryText: "brandSecondaryText", inputBackground: "inputBackground", inputColor: "inputColor", inputPlaceholder: "inputPlaceholder", inputDisabled: "inputDisabled", inputFocused: "inputFocused", inputBorder: "inputBorder", statusSuccess: "statusSuccess", statusWarning: "statusWarning", statusCritical: "statusCritical", statusActive: "statusActive", textDefault: "textDefault", textHelp: "textHelp", textInactive: "textInactive", borderNeutral: "borderNeutral", contentBackground1: "contentBackground1", contentBackground2: "contentBackground2", contentBackground3: "contentBackground3", contentBackground4: "contentBackground4", contentBackground5: "contentBackground5", linkDefault: "linkDefault", linkHover: "linkHover" };
    }, 6535: function(j) {
      j.exports = function() {
        function W(C) {
          return (W = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(G) {
            return typeof G;
          } : function(G) {
            return G && typeof Symbol == "function" && G.constructor === Symbol && G !== Symbol.prototype ? "symbol" : typeof G;
          })(C);
        }
        var we = /^\s+/, ge = /\s+$/;
        function q(C, G) {
          if (G = G || {}, (C = C || "") instanceof q) return C;
          if (!(this instanceof q)) return new q(C, G);
          var z = function(ne) {
            var Re, Ve, Oe, bt = { r: 0, g: 0, b: 0 }, gt = 1, _e = null, dn = null, qt = null, pn = !1, Ut = !1;
            return typeof ne == "string" && (ne = function(it) {
              it = it.replace(we, "").replace(ge, "").toLowerCase();
              var Se, pt = !1;
              if (Tt[it]) it = Tt[it], pt = !0;
              else if (it == "transparent") return { r: 0, g: 0, b: 0, a: 0, format: "name" };
              return (Se = Ft.rgb.exec(it)) ? { r: Se[1], g: Se[2], b: Se[3] } : (Se = Ft.rgba.exec(it)) ? { r: Se[1], g: Se[2], b: Se[3], a: Se[4] } : (Se = Ft.hsl.exec(it)) ? { h: Se[1], s: Se[2], l: Se[3] } : (Se = Ft.hsla.exec(it)) ? { h: Se[1], s: Se[2], l: Se[3], a: Se[4] } : (Se = Ft.hsv.exec(it)) ? { h: Se[1], s: Se[2], v: Se[3] } : (Se = Ft.hsva.exec(it)) ? { h: Se[1], s: Se[2], v: Se[3], a: Se[4] } : (Se = Ft.hex8.exec(it)) ? { r: ce(Se[1]), g: ce(Se[2]), b: ce(Se[3]), a: et(Se[4]), format: pt ? "name" : "hex8" } : (Se = Ft.hex6.exec(it)) ? { r: ce(Se[1]), g: ce(Se[2]), b: ce(Se[3]), format: pt ? "name" : "hex" } : (Se = Ft.hex4.exec(it)) ? { r: ce(Se[1] + "" + Se[1]), g: ce(Se[2] + "" + Se[2]), b: ce(Se[3] + "" + Se[3]), a: et(Se[4] + "" + Se[4]), format: pt ? "name" : "hex8" } : !!(Se = Ft.hex3.exec(it)) && { r: ce(Se[1] + "" + Se[1]), g: ce(Se[2] + "" + Se[2]), b: ce(Se[3] + "" + Se[3]), format: pt ? "name" : "hex" };
            }(ne)), W(ne) == "object" && (Wt(ne.r) && Wt(ne.g) && Wt(ne.b) ? (Re = ne.r, Ve = ne.g, Oe = ne.b, bt = { r: 255 * je(Re, 255), g: 255 * je(Ve, 255), b: 255 * je(Oe, 255) }, pn = !0, Ut = String(ne.r).substr(-1) === "%" ? "prgb" : "rgb") : Wt(ne.h) && Wt(ne.s) && Wt(ne.v) ? (_e = De(ne.s), dn = De(ne.v), bt = function(it, Se, pt) {
              it = 6 * je(it, 360), Se = je(Se, 100), pt = je(pt, 100);
              var $t = Math.floor(it), sn = it - $t, Ct = pt * (1 - Se), jt = pt * (1 - sn * Se), Ht = pt * (1 - (1 - sn) * Se), Zt = $t % 6;
              return { r: 255 * [pt, jt, Ct, Ct, Ht, pt][Zt], g: 255 * [Ht, pt, pt, jt, Ct, Ct][Zt], b: 255 * [Ct, Ct, Ht, pt, pt, jt][Zt] };
            }(ne.h, _e, dn), pn = !0, Ut = "hsv") : Wt(ne.h) && Wt(ne.s) && Wt(ne.l) && (_e = De(ne.s), qt = De(ne.l), bt = function(it, Se, pt) {
              var $t, sn, Ct;
              function jt(Lt, ue, Kt) {
                return Kt < 0 && (Kt += 1), Kt > 1 && (Kt -= 1), Kt < 1 / 6 ? Lt + 6 * (ue - Lt) * Kt : Kt < 0.5 ? ue : Kt < 2 / 3 ? Lt + (ue - Lt) * (2 / 3 - Kt) * 6 : Lt;
              }
              if (it = je(it, 360), Se = je(Se, 100), pt = je(pt, 100), Se === 0) $t = sn = Ct = pt;
              else {
                var Ht = pt < 0.5 ? pt * (1 + Se) : pt + Se - pt * Se, Zt = 2 * pt - Ht;
                $t = jt(Zt, Ht, it + 1 / 3), sn = jt(Zt, Ht, it), Ct = jt(Zt, Ht, it - 1 / 3);
              }
              return { r: 255 * $t, g: 255 * sn, b: 255 * Ct };
            }(ne.h, _e, qt), pn = !0, Ut = "hsl"), ne.hasOwnProperty("a") && (gt = ne.a)), gt = ht(gt), { ok: pn, format: ne.format || Ut, r: Math.min(255, Math.max(bt.r, 0)), g: Math.min(255, Math.max(bt.g, 0)), b: Math.min(255, Math.max(bt.b, 0)), a: gt };
          }(C);
          this._originalInput = C, this._r = z.r, this._g = z.g, this._b = z.b, this._a = z.a, this._roundA = Math.round(100 * this._a) / 100, this._format = G.format || z.format, this._gradientType = G.gradientType, this._r < 1 && (this._r = Math.round(this._r)), this._g < 1 && (this._g = Math.round(this._g)), this._b < 1 && (this._b = Math.round(this._b)), this._ok = z.ok;
        }
        function Ce(C, G, z) {
          C = je(C, 255), G = je(G, 255), z = je(z, 255);
          var ne, Re, Ve = Math.max(C, G, z), Oe = Math.min(C, G, z), bt = (Ve + Oe) / 2;
          if (Ve == Oe) ne = Re = 0;
          else {
            var gt = Ve - Oe;
            switch (Re = bt > 0.5 ? gt / (2 - Ve - Oe) : gt / (Ve + Oe), Ve) {
              case C:
                ne = (G - z) / gt + (G < z ? 6 : 0);
                break;
              case G:
                ne = (z - C) / gt + 2;
                break;
              case z:
                ne = (C - G) / gt + 4;
            }
            ne /= 6;
          }
          return { h: ne, s: Re, l: bt };
        }
        function Z(C, G, z) {
          C = je(C, 255), G = je(G, 255), z = je(z, 255);
          var ne, Re, Ve = Math.max(C, G, z), Oe = Math.min(C, G, z), bt = Ve, gt = Ve - Oe;
          if (Re = Ve === 0 ? 0 : gt / Ve, Ve == Oe) ne = 0;
          else {
            switch (Ve) {
              case C:
                ne = (G - z) / gt + (G < z ? 6 : 0);
                break;
              case G:
                ne = (z - C) / gt + 2;
                break;
              case z:
                ne = (C - G) / gt + 4;
            }
            ne /= 6;
          }
          return { h: ne, s: Re, v: bt };
        }
        function xe(C, G, z, ne) {
          var Re = [Ae(Math.round(C).toString(16)), Ae(Math.round(G).toString(16)), Ae(Math.round(z).toString(16))];
          return ne && Re[0].charAt(0) == Re[0].charAt(1) && Re[1].charAt(0) == Re[1].charAt(1) && Re[2].charAt(0) == Re[2].charAt(1) ? Re[0].charAt(0) + Re[1].charAt(0) + Re[2].charAt(0) : Re.join("");
        }
        function te(C, G, z, ne) {
          return [Ae(Ye(ne)), Ae(Math.round(C).toString(16)), Ae(Math.round(G).toString(16)), Ae(Math.round(z).toString(16))].join("");
        }
        function Me(C, G) {
          G = G === 0 ? 0 : G || 10;
          var z = q(C).toHsl();
          return z.s -= G / 100, z.s = R(z.s), q(z);
        }
        function ie(C, G) {
          G = G === 0 ? 0 : G || 10;
          var z = q(C).toHsl();
          return z.s += G / 100, z.s = R(z.s), q(z);
        }
        function se(C) {
          return q(C).desaturate(100);
        }
        function dt(C, G) {
          G = G === 0 ? 0 : G || 10;
          var z = q(C).toHsl();
          return z.l += G / 100, z.l = R(z.l), q(z);
        }
        function rt(C, G) {
          G = G === 0 ? 0 : G || 10;
          var z = q(C).toRgb();
          return z.r = Math.max(0, Math.min(255, z.r - Math.round(-G / 100 * 255))), z.g = Math.max(0, Math.min(255, z.g - Math.round(-G / 100 * 255))), z.b = Math.max(0, Math.min(255, z.b - Math.round(-G / 100 * 255))), q(z);
        }
        function Je(C, G) {
          G = G === 0 ? 0 : G || 10;
          var z = q(C).toHsl();
          return z.l -= G / 100, z.l = R(z.l), q(z);
        }
        function ut(C, G) {
          var z = q(C).toHsl(), ne = (z.h + G) % 360;
          return z.h = ne < 0 ? 360 + ne : ne, q(z);
        }
        function Rt(C) {
          var G = q(C).toHsl();
          return G.h = (G.h + 180) % 360, q(G);
        }
        function Ne(C, G) {
          if (isNaN(G) || G <= 0) throw new Error("Argument to polyad must be a positive number");
          for (var z = q(C).toHsl(), ne = [q(C)], Re = 360 / G, Ve = 1; Ve < G; Ve++) ne.push(q({ h: (z.h + Ve * Re) % 360, s: z.s, l: z.l }));
          return ne;
        }
        function Pt(C) {
          var G = q(C).toHsl(), z = G.h;
          return [q(C), q({ h: (z + 72) % 360, s: G.s, l: G.l }), q({ h: (z + 216) % 360, s: G.s, l: G.l })];
        }
        function Be(C, G, z) {
          G = G || 6, z = z || 30;
          var ne = q(C).toHsl(), Re = 360 / z, Ve = [q(C)];
          for (ne.h = (ne.h - (Re * G >> 1) + 720) % 360; --G; ) ne.h = (ne.h + Re) % 360, Ve.push(q(ne));
          return Ve;
        }
        function kt(C, G) {
          G = G || 6;
          for (var z = q(C).toHsv(), ne = z.h, Re = z.s, Ve = z.v, Oe = [], bt = 1 / G; G--; ) Oe.push(q({ h: ne, s: Re, v: Ve })), Ve = (Ve + bt) % 1;
          return Oe;
        }
        q.prototype = { isDark: function() {
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
          var C, G, z, ne = this.toRgb();
          return C = ne.r / 255, G = ne.g / 255, z = ne.b / 255, 0.2126 * (C <= 0.03928 ? C / 12.92 : Math.pow((C + 0.055) / 1.055, 2.4)) + 0.7152 * (G <= 0.03928 ? G / 12.92 : Math.pow((G + 0.055) / 1.055, 2.4)) + 0.0722 * (z <= 0.03928 ? z / 12.92 : Math.pow((z + 0.055) / 1.055, 2.4));
        }, setAlpha: function(C) {
          return this._a = ht(C), this._roundA = Math.round(100 * this._a) / 100, this;
        }, toHsv: function() {
          var C = Z(this._r, this._g, this._b);
          return { h: 360 * C.h, s: C.s, v: C.v, a: this._a };
        }, toHsvString: function() {
          var C = Z(this._r, this._g, this._b), G = Math.round(360 * C.h), z = Math.round(100 * C.s), ne = Math.round(100 * C.v);
          return this._a == 1 ? "hsv(" + G + ", " + z + "%, " + ne + "%)" : "hsva(" + G + ", " + z + "%, " + ne + "%, " + this._roundA + ")";
        }, toHsl: function() {
          var C = Ce(this._r, this._g, this._b);
          return { h: 360 * C.h, s: C.s, l: C.l, a: this._a };
        }, toHslString: function() {
          var C = Ce(this._r, this._g, this._b), G = Math.round(360 * C.h), z = Math.round(100 * C.s), ne = Math.round(100 * C.l);
          return this._a == 1 ? "hsl(" + G + ", " + z + "%, " + ne + "%)" : "hsla(" + G + ", " + z + "%, " + ne + "%, " + this._roundA + ")";
        }, toHex: function(C) {
          return xe(this._r, this._g, this._b, C);
        }, toHexString: function(C) {
          return "#" + this.toHex(C);
        }, toHex8: function(C) {
          return function(G, z, ne, Re, Ve) {
            var Oe = [Ae(Math.round(G).toString(16)), Ae(Math.round(z).toString(16)), Ae(Math.round(ne).toString(16)), Ae(Ye(Re))];
            return Ve && Oe[0].charAt(0) == Oe[0].charAt(1) && Oe[1].charAt(0) == Oe[1].charAt(1) && Oe[2].charAt(0) == Oe[2].charAt(1) && Oe[3].charAt(0) == Oe[3].charAt(1) ? Oe[0].charAt(0) + Oe[1].charAt(0) + Oe[2].charAt(0) + Oe[3].charAt(0) : Oe.join("");
          }(this._r, this._g, this._b, this._a, C);
        }, toHex8String: function(C) {
          return "#" + this.toHex8(C);
        }, toRgb: function() {
          return { r: Math.round(this._r), g: Math.round(this._g), b: Math.round(this._b), a: this._a };
        }, toRgbString: function() {
          return this._a == 1 ? "rgb(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ")" : "rgba(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ", " + this._roundA + ")";
        }, toPercentageRgb: function() {
          return { r: Math.round(100 * je(this._r, 255)) + "%", g: Math.round(100 * je(this._g, 255)) + "%", b: Math.round(100 * je(this._b, 255)) + "%", a: this._a };
        }, toPercentageRgbString: function() {
          return this._a == 1 ? "rgb(" + Math.round(100 * je(this._r, 255)) + "%, " + Math.round(100 * je(this._g, 255)) + "%, " + Math.round(100 * je(this._b, 255)) + "%)" : "rgba(" + Math.round(100 * je(this._r, 255)) + "%, " + Math.round(100 * je(this._g, 255)) + "%, " + Math.round(100 * je(this._b, 255)) + "%, " + this._roundA + ")";
        }, toName: function() {
          return this._a === 0 ? "transparent" : !(this._a < 1) && (mt[xe(this._r, this._g, this._b, !0)] || !1);
        }, toFilter: function(C) {
          var G = "#" + te(this._r, this._g, this._b, this._a), z = G, ne = this._gradientType ? "GradientType = 1, " : "";
          if (C) {
            var Re = q(C);
            z = "#" + te(Re._r, Re._g, Re._b, Re._a);
          }
          return "progid:DXImageTransform.Microsoft.gradient(" + ne + "startColorstr=" + G + ",endColorstr=" + z + ")";
        }, toString: function(C) {
          var G = !!C;
          C = C || this._format;
          var z = !1, ne = this._a < 1 && this._a >= 0;
          return G || !ne || C !== "hex" && C !== "hex6" && C !== "hex3" && C !== "hex4" && C !== "hex8" && C !== "name" ? (C === "rgb" && (z = this.toRgbString()), C === "prgb" && (z = this.toPercentageRgbString()), C !== "hex" && C !== "hex6" || (z = this.toHexString()), C === "hex3" && (z = this.toHexString(!0)), C === "hex4" && (z = this.toHex8String(!0)), C === "hex8" && (z = this.toHex8String()), C === "name" && (z = this.toName()), C === "hsl" && (z = this.toHslString()), C === "hsv" && (z = this.toHsvString()), z || this.toHexString()) : C === "name" && this._a === 0 ? this.toName() : this.toRgbString();
        }, clone: function() {
          return q(this.toString());
        }, _applyModification: function(C, G) {
          var z = C.apply(null, [this].concat([].slice.call(G)));
          return this._r = z._r, this._g = z._g, this._b = z._b, this.setAlpha(z._a), this;
        }, lighten: function() {
          return this._applyModification(dt, arguments);
        }, brighten: function() {
          return this._applyModification(rt, arguments);
        }, darken: function() {
          return this._applyModification(Je, arguments);
        }, desaturate: function() {
          return this._applyModification(Me, arguments);
        }, saturate: function() {
          return this._applyModification(ie, arguments);
        }, greyscale: function() {
          return this._applyModification(se, arguments);
        }, spin: function() {
          return this._applyModification(ut, arguments);
        }, _applyCombination: function(C, G) {
          return C.apply(null, [this].concat([].slice.call(G)));
        }, analogous: function() {
          return this._applyCombination(Be, arguments);
        }, complement: function() {
          return this._applyCombination(Rt, arguments);
        }, monochromatic: function() {
          return this._applyCombination(kt, arguments);
        }, splitcomplement: function() {
          return this._applyCombination(Pt, arguments);
        }, triad: function() {
          return this._applyCombination(Ne, [3]);
        }, tetrad: function() {
          return this._applyCombination(Ne, [4]);
        } }, q.fromRatio = function(C, G) {
          if (W(C) == "object") {
            var z = {};
            for (var ne in C) C.hasOwnProperty(ne) && (z[ne] = ne === "a" ? C[ne] : De(C[ne]));
            C = z;
          }
          return q(C, G);
        }, q.equals = function(C, G) {
          return !(!C || !G) && q(C).toRgbString() == q(G).toRgbString();
        }, q.random = function() {
          return q.fromRatio({ r: Math.random(), g: Math.random(), b: Math.random() });
        }, q.mix = function(C, G, z) {
          z = z === 0 ? 0 : z || 50;
          var ne = q(C).toRgb(), Re = q(G).toRgb(), Ve = z / 100;
          return q({ r: (Re.r - ne.r) * Ve + ne.r, g: (Re.g - ne.g) * Ve + ne.g, b: (Re.b - ne.b) * Ve + ne.b, a: (Re.a - ne.a) * Ve + ne.a });
        }, q.readability = function(C, G) {
          var z = q(C), ne = q(G);
          return (Math.max(z.getLuminance(), ne.getLuminance()) + 0.05) / (Math.min(z.getLuminance(), ne.getLuminance()) + 0.05);
        }, q.isReadable = function(C, G, z) {
          var ne, Re, Ve, Oe, bt, gt = q.readability(C, G);
          switch (Re = !1, (Ve = z, (Oe = ((Ve = Ve || { level: "AA", size: "small" }).level || "AA").toUpperCase()) !== "AA" && Oe !== "AAA" && (Oe = "AA"), (bt = (Ve.size || "small").toLowerCase()) !== "small" && bt !== "large" && (bt = "small"), ne = { level: Oe, size: bt }).level + ne.size) {
            case "AAsmall":
            case "AAAlarge":
              Re = gt >= 4.5;
              break;
            case "AAlarge":
              Re = gt >= 3;
              break;
            case "AAAsmall":
              Re = gt >= 7;
          }
          return Re;
        }, q.mostReadable = function(C, G, z) {
          var ne, Re, Ve, Oe, bt = null, gt = 0;
          Re = (z = z || {}).includeFallbackColors, Ve = z.level, Oe = z.size;
          for (var _e = 0; _e < G.length; _e++) (ne = q.readability(C, G[_e])) > gt && (gt = ne, bt = q(G[_e]));
          return q.isReadable(C, bt, { level: Ve, size: Oe }) || !Re ? bt : (z.includeFallbackColors = !1, q.mostReadable(C, ["#fff", "#000"], z));
        };
        var Tt = q.names = { aliceblue: "f0f8ff", antiquewhite: "faebd7", aqua: "0ff", aquamarine: "7fffd4", azure: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "000", blanchedalmond: "ffebcd", blue: "00f", blueviolet: "8a2be2", brown: "a52a2a", burlywood: "deb887", burntsienna: "ea7e5d", cadetblue: "5f9ea0", chartreuse: "7fff00", chocolate: "d2691e", coral: "ff7f50", cornflowerblue: "6495ed", cornsilk: "fff8dc", crimson: "dc143c", cyan: "0ff", darkblue: "00008b", darkcyan: "008b8b", darkgoldenrod: "b8860b", darkgray: "a9a9a9", darkgreen: "006400", darkgrey: "a9a9a9", darkkhaki: "bdb76b", darkmagenta: "8b008b", darkolivegreen: "556b2f", darkorange: "ff8c00", darkorchid: "9932cc", darkred: "8b0000", darksalmon: "e9967a", darkseagreen: "8fbc8f", darkslateblue: "483d8b", darkslategray: "2f4f4f", darkslategrey: "2f4f4f", darkturquoise: "00ced1", darkviolet: "9400d3", deeppink: "ff1493", deepskyblue: "00bfff", dimgray: "696969", dimgrey: "696969", dodgerblue: "1e90ff", firebrick: "b22222", floralwhite: "fffaf0", forestgreen: "228b22", fuchsia: "f0f", gainsboro: "dcdcdc", ghostwhite: "f8f8ff", gold: "ffd700", goldenrod: "daa520", gray: "808080", green: "008000", greenyellow: "adff2f", grey: "808080", honeydew: "f0fff0", hotpink: "ff69b4", indianred: "cd5c5c", indigo: "4b0082", ivory: "fffff0", khaki: "f0e68c", lavender: "e6e6fa", lavenderblush: "fff0f5", lawngreen: "7cfc00", lemonchiffon: "fffacd", lightblue: "add8e6", lightcoral: "f08080", lightcyan: "e0ffff", lightgoldenrodyellow: "fafad2", lightgray: "d3d3d3", lightgreen: "90ee90", lightgrey: "d3d3d3", lightpink: "ffb6c1", lightsalmon: "ffa07a", lightseagreen: "20b2aa", lightskyblue: "87cefa", lightslategray: "789", lightslategrey: "789", lightsteelblue: "b0c4de", lightyellow: "ffffe0", lime: "0f0", limegreen: "32cd32", linen: "faf0e6", magenta: "f0f", maroon: "800000", mediumaquamarine: "66cdaa", mediumblue: "0000cd", mediumorchid: "ba55d3", mediumpurple: "9370db", mediumseagreen: "3cb371", mediumslateblue: "7b68ee", mediumspringgreen: "00fa9a", mediumturquoise: "48d1cc", mediumvioletred: "c71585", midnightblue: "191970", mintcream: "f5fffa", mistyrose: "ffe4e1", moccasin: "ffe4b5", navajowhite: "ffdead", navy: "000080", oldlace: "fdf5e6", olive: "808000", olivedrab: "6b8e23", orange: "ffa500", orangered: "ff4500", orchid: "da70d6", palegoldenrod: "eee8aa", palegreen: "98fb98", paleturquoise: "afeeee", palevioletred: "db7093", papayawhip: "ffefd5", peachpuff: "ffdab9", peru: "cd853f", pink: "ffc0cb", plum: "dda0dd", powderblue: "b0e0e6", purple: "800080", rebeccapurple: "663399", red: "f00", rosybrown: "bc8f8f", royalblue: "4169e1", saddlebrown: "8b4513", salmon: "fa8072", sandybrown: "f4a460", seagreen: "2e8b57", seashell: "fff5ee", sienna: "a0522d", silver: "c0c0c0", skyblue: "87ceeb", slateblue: "6a5acd", slategray: "708090", slategrey: "708090", snow: "fffafa", springgreen: "00ff7f", steelblue: "4682b4", tan: "d2b48c", teal: "008080", thistle: "d8bfd8", tomato: "ff6347", turquoise: "40e0d0", violet: "ee82ee", wheat: "f5deb3", white: "fff", whitesmoke: "f5f5f5", yellow: "ff0", yellowgreen: "9acd32" }, mt = q.hexNames = function(C) {
          var G = {};
          for (var z in C) C.hasOwnProperty(z) && (G[C[z]] = z);
          return G;
        }(Tt);
        function ht(C) {
          return C = parseFloat(C), (isNaN(C) || C < 0 || C > 1) && (C = 1), C;
        }
        function je(C, G) {
          (function(ne) {
            return typeof ne == "string" && ne.indexOf(".") != -1 && parseFloat(ne) === 1;
          })(C) && (C = "100%");
          var z = function(ne) {
            return typeof ne == "string" && ne.indexOf("%") != -1;
          }(C);
          return C = Math.min(G, Math.max(0, parseFloat(C))), z && (C = parseInt(C * G, 10) / 100), Math.abs(C - G) < 1e-6 ? 1 : C % G / parseFloat(G);
        }
        function R(C) {
          return Math.min(1, Math.max(0, C));
        }
        function ce(C) {
          return parseInt(C, 16);
        }
        function Ae(C) {
          return C.length == 1 ? "0" + C : "" + C;
        }
        function De(C) {
          return C <= 1 && (C = 100 * C + "%"), C;
        }
        function Ye(C) {
          return Math.round(255 * parseFloat(C)).toString(16);
        }
        function et(C) {
          return ce(C) / 255;
        }
        var Le, Dt, ve, Ft = (Dt = "[\\s|\\(]+(" + (Le = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)") + ")[,|\\s]+(" + Le + ")[,|\\s]+(" + Le + ")\\s*\\)?", ve = "[\\s|\\(]+(" + Le + ")[,|\\s]+(" + Le + ")[,|\\s]+(" + Le + ")[,|\\s]+(" + Le + ")\\s*\\)?", { CSS_UNIT: new RegExp(Le), rgb: new RegExp("rgb" + Dt), rgba: new RegExp("rgba" + ve), hsl: new RegExp("hsl" + Dt), hsla: new RegExp("hsla" + ve), hsv: new RegExp("hsv" + Dt), hsva: new RegExp("hsva" + ve), hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/, hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/ });
        function Wt(C) {
          return !!Ft.CSS_UNIT.exec(C);
        }
        return q;
      }();
    } }, I = {};
    function T(j) {
      var W = I[j];
      if (W !== void 0) return W.exports;
      var we = I[j] = { exports: {} };
      return P[j].call(we.exports, we, we.exports, T), we.exports;
    }
    var U = {};
    (() => {
      var j = U;
      Object.defineProperty(j, "__esModule", { value: !0 }), j.createTheme = j.Palette = j.Color = void 0;
      var W = T(2317);
      Object.defineProperty(j, "Color", { enumerable: !0, get: function() {
        return W.Color;
      } });
      var we = T(5939);
      Object.defineProperty(j, "Palette", { enumerable: !0, get: function() {
        return we.Palette;
      } });
      var ge = T(6893);
      Object.defineProperty(j, "createTheme", { enumerable: !0, get: function() {
        return ge.createTheme;
      } });
    })();
    var J = m;
    for (var ee in U) J[ee] = U[ee];
    U.__esModule && Object.defineProperty(J, "__esModule", { value: !0 });
  }, 877: () => {
  }, 67: () => {
  } }, o = {};
  function u(y) {
    var m = o[y];
    if (m !== void 0) return m.exports;
    var P = o[y] = { exports: {} };
    return f[y](P, P.exports, u), P.exports;
  }
  u.n = (y) => {
    var m = y && y.__esModule ? () => y.default : () => y;
    return u.d(m, { a: m }), m;
  }, u.d = (y, m) => {
    for (var P in m) u.o(m, P) && !u.o(y, P) && Object.defineProperty(y, P, { enumerable: !0, get: m[P] });
  }, u.o = (y, m) => Object.prototype.hasOwnProperty.call(y, m), u.r = (y) => {
    typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(y, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(y, "__esModule", { value: !0 });
  };
  var d = {};
  (() => {
    var gs, ms;
    u.r(d), u.d(d, { AppManifestType: () => ee, BookmarkItemContextMenuOptionType: () => ie, BrowserButtonType: () => dt, ColorSchemeOptionType: () => xe, CustomActionCallerType: () => ut, Dock: () => W, EnterpriseMainContextMenuOptionType: () => Me, GlobalContextMenuOptionType: () => Z, PageChangeEventType: () => Ce, PageTabContextMenuOptionType: () => te, PanelPosition: () => q, SUPPORTED_LANGUAGES: () => Rt, SaveButtonContextMenuOptionType: () => rt, SaveModalType: () => Ne, ViewTabMenuOptionType: () => se, WindowType: () => Je, getCurrentSync: () => c, init: () => Hu, wrapSync: () => i });
    var y = {};
    u.r(y), u.d(y, { createNamespacedLocalStorage: () => ba, getItem: () => Gn, removeItem: () => Jr, setItem: () => va });
    var m, P, I, T, U, J, ee, j, W = {};
    u.r(W), u.d(W, { init: () => ka }), function(e) {
      e.Fetching = "fetching", e.Fetched = "fetched", e.Complete = "complete";
    }(m || (m = {})), function(e) {
      e.UserAction = "user-action", e.FocusChange = "focus-change", e.Reload = "reload";
    }(P || (P = {})), function(e) {
      e.Active = "active", e.Default = "default";
    }(I || (I = {})), function(e) {
      e.Suggestion = "suggestion";
    }(T || (T = {})), function(e) {
      e.Contact = "Contact", e.Custom = "Custom", e.List = "List", e.Plain = "Plain", e.SimpleText = "SimpleText", e.Loading = "Loading", e.Error = "Error";
    }(U || (U = {})), function(e) {
      e.MultiSelect = "MultiSelect";
    }(J || (J = {})), function(e) {
      e.Snapshot = "snapshot", e.Manifest = "manifest", e.View = "view", e.External = "external";
    }(ee || (ee = {})), function(e) {
      e.LandingPage = "landingPage", e.AppGrid = "appGrid";
    }(j || (j = {}));
    var we, ge, q, Ce, Z, xe, te, Me, ie, se, dt, rt, Je, ut;
    (function(e) {
      e.Primary = "primary", e.Secondary = "secondary", e.TextOnly = "textOnly";
    })(we || (we = {})), function(e) {
      e.ActionButton = "ActionButton", e.DropdownButton = "DropdownButton";
    }(ge || (ge = {})), function(e) {
      e.Left = "Left", e.Right = "Right", e.Top = "Top", e.Bottom = "Bottom";
    }(q || (q = {})), function(e) {
      e.UrlChange = "URL_CHANGE", e.ViewAdded = "VIEW_ADDED", e.ViewRemoved = "VIEW_REMOVED", e.PageContextAdded = "PAGE_CONTEXT_ADDED", e.PageContextRemoved = "PAGE_CONTEXT_REMOVED";
    }(Ce || (Ce = {})), function(e) {
      e.NewWindow = "NewWindow", e.NewPage = "NewPage", e.SavePage = "SavePage", e.SavePageAs = "SavePageAs", e.Print = "Print", e.PrintAll = "PrintAll", e.PrintScreen = "PrintScreen", e.CloseWindow = "CloseWindow", e.RestoreChanges = "RestoreChanges", e.SaveWorkspace = "SaveWorkspace", e.SaveWorkspaceAs = "SaveWorkspaceAs", e.RenameWorkspace = "RenameWorkspace", e.SwitchWorkspace = "SwitchWorkspace", e.DeleteWorkspace = "DeleteWorkspace", e.Downloads = "Downloads", e.OpenStorefront = "OpenStorefront", e.ManageDesktopSignals = "ManageDesktopSignals", e.Appearance = "Appearance", e.Quit = "Quit", e.Custom = "Custom";
    }(Z || (Z = {})), function(e) {
      e.Light = "light", e.Dark = "dark", e.System = "system";
    }(xe || (xe = {})), function(e) {
      e.Close = "Close", e.Duplicate = "Duplicate", e.Rename = "Rename", e.Save = "Save", e.SaveAs = "Save As", e.NewPage = "New Page", e.DeletePage = "Delete Page", e.SaveWorkspaceAs = "SaveWorkspaceAs", e.Refresh = "Refresh", e.CloseOthers = "Close others", e.Delete = "Delete", e.Print = "Print", e.PrintAll = "PrintAll", e.PrintScreen = "PrintScreen", e.ManageDesktopSignals = "ManageDesktopSignals", e.AddToChannel = "AddToChannel", e.Custom = "Custom";
    }(te || (te = {})), function(e) {
      e.Lock = "Lock", e.ShowHideTabs = "ShowHideTabs", e.AddToChanel = "AddToChannel", e.ManageDesktopSignals = "ManageDesktopSignals", e.Print = "Print", e.Pin = "Pin";
    }(Me || (Me = {})), function(e) {
      e.EditName = "Edit Name", e.Move = "Move", e.Delete = "Delete";
    }(ie || (ie = {})), function(e) {
      e.NewView = "NewView", e.DuplicateViews = "DuplicateView", e.OpenWithDefaultBrowser = "OpenWithDefaultBrowser", e.ReloadViews = "ReloadTab", e.CloseViews = "CloseTab", e.AddToChannel = "AddToChannel", e.RemoveFromChannel = "RemoveFromChannel", e.Back = "Back", e.Forward = "Forward", e.Print = "Print", e.PrintAll = "PrintAll", e.PrintScreen = "PrintScreen", e.Custom = "Custom";
    }(se || (se = {})), function(e) {
      e.ShowHideTabs = "ShowHideTabs", e.ColorLinking = "ColorLinking", e.PresetLayouts = "PresetLayouts", e.LockUnlockPage = "LockUnlockPage", e.SaveMenu = "SaveMenu", e.SavePage = "SavePage", e.Minimise = "Minimise", e.Maximise = "Maximise", e.Close = "Close", e.Custom = "Custom";
    }(dt || (dt = {})), function(e) {
      e.SavePage = "SavePage", e.SaveWorkspace = "SaveWorkspace", e.SavePageAs = "SavePageAs", e.SaveWorkspaceAs = "SaveWorkspaceAs", e.Custom = "Custom";
    }(rt || (rt = {})), function(e) {
      e.Browser = "browser", e.Platform = "platform";
    }(Je || (Je = {})), function(e) {
      e.CustomButton = "CustomButton", e.StoreCustomButton = "StoreCustomButton", e.CustomDropdownItem = "CustomDropdownItem", e.GlobalContextMenu = "GlobalContextMenu", e.ViewTabContextMenu = "ViewTabContextMenu", e.PageTabContextMenu = "PageTabContextMenu", e.SaveButtonContextMenu = "SaveButtonContextMenu", e.API = "API";
    }(ut || (ut = {}));
    const Rt = ["en-US", "ja-JP", "zh-CN", "ko-KR", "ru-RU", "de-DE", "zh-Hant"];
    var Ne, Pt;
    (function(e) {
      e.SAVE_PAGE = "SAVE_PAGE", e.SAVE_WORKSPACE = "SAVE_WORKSPACE", e.SAVE_PAGE_AS = "SAVE_PAGE_AS", e.SAVE_WORKSPACE_AS = "SAVE_WORKSPACE_AS", e.RENAME_PAGE = "RENAME_PAGE", e.RENAME_WORKSPACE = "RENAME_WORKSPACE";
    })(Ne || (Ne = {})), function(e) {
      e.Local = "local", e.Dev = "dev", e.Staging = "staging", e.Prod = "prod";
    }(Pt || (Pt = {}));
    const Be = typeof window < "u" && typeof fin < "u", kt = typeof window < "u", Tt = kt && typeof indexedDB < "u", mt = kt ? window.origin : Pt.Local, ht = Be && fin.me.uuid, je = Be && fin.me.name, R = Be && fin.me.entityType, ce = (Pt.Local, Pt.Dev, Pt.Staging, Pt.Prod === "prod"), Ae = (e) => e.startsWith("http://") || e.startsWith("https://") ? e : mt + e, De = Ae("https://workspace.openfin.co/workspace/22.3.25"), Ye = Ae("https://workspace.openfin.co/workspace/22.3.25"), et = (typeof WORKSPACE_DOCS_PLATFORM_URL < "u" && Ae(WORKSPACE_DOCS_PLATFORM_URL), typeof WORKSPACE_DOCS_CLIENT_URL < "u" && Ae(WORKSPACE_DOCS_CLIENT_URL), "42.138.102.4"), Le = "22.3.25";
    typeof WORKSPACE_BUILD_SHA < "u" && WORKSPACE_BUILD_SHA;
    var Dt, ve;
    (function(e) {
      e.Home = "/home/", e.HomeSearch = "/home/?deeplink=search", e.HomePagesRename = "/home/pages/rename/", e.Dock = "/dock/", e.Docs = "/provider/docs/", e.Storefront = "/storefront/", e.DeprecatedAlert = "/provider/deprecated-alert/", e.Analytics = "/provider/analytics/", e.Provider = "/provider/";
    })(Dt || (Dt = {})), function(e) {
      e.Browser = "/browser/", e.BrowserPopupMenu = "/popup-menu/", e.BrowserPopupMenuSaveModal = "/popup-menu/save-modal/", e.BrowserPopupMenuLayouts = "/popup-menu/layouts/layouts/", e.BrowserPopupMenuColorLinking = "/popup-menu/color-linking/color-linking/", e.BrowserIndicator = "/indicator/", e.BrowserPopupMenuAddressSearchResultsView = "/popup-menu/address-search-results-view/", e.ResponseModal = "/popup-menu/response-modal/", e.CloseConfirmationModal = "/popup-menu/close-confirmation-modal/", e.EnterpriseBrowser = "/enterprise/", e.EnterpriseLandingPage = "/enterprise/landing/", e.EnterpriseContextMenu = "/context-menu/", e.EnterpriseBookmarkDialog = "/bookmark-dialog/", e.EnterpriseAboutPage = "/popup-menu/about/", e.DropdownMenu = "/dropdown-menu/", e.EnterpriseDock = "/dock/", e.ZoomControlsDialog = "/zoom-controls-dialog/", e.DesktopSignalsModal = "/popup-menu/desktop-signals-modal/";
    }(ve || (ve = {}));
    const Ft = { ...Dt, ...ve };
    var Wt;
    (function(e) {
      e.Search = "search";
    })(Wt || (Wt = {}));
    const C = Ft;
    async function G() {
      const e = "getManifestOverrides", { manifest: n, initialOptions: r } = await fin.Application.getCurrentSync().getInfo();
      return n != null && n.platform.workspace || n != null && n.platform.home || r != null && r.workspace || r != null && r.home || console.warn(`${e}: Missing Home development manifest overrides, using Desktop Owner Settings.`), n != null && n.platform.workspace ? (JSON.stringify(n == null ? void 0 : n.platform.workspace), n == null ? void 0 : n.platform.workspace) : n != null && n.platform.home ? (JSON.stringify(n == null ? void 0 : n.platform.home), n == null ? void 0 : n.platform.home) : r != null && r.workspace ? (JSON.stringify(r == null ? void 0 : r.workspace), r == null ? void 0 : r.workspace) : r != null && r.home ? (JSON.stringify(r == null ? void 0 : r.home), r == null ? void 0 : r.home) : {};
    }
    const z = (e) => fin.System.getSystemAppConfig(e);
    async function ne() {
      const e = "getDOSOverrides";
      if (!Be) return console.warn(`${e}: the fin API was not available, returning no result`), {};
      try {
        let n = await z("workspace").catch((r) => {
          console.warn(`${e}: customConfig entry for SystemApp workspace not available in Desktop Owner Settings. ${r == null ? void 0 : r.message}`);
        });
        return n || (n = await z("home")), JSON.stringify(n), n;
      } catch (n) {
        if (!ce) return {};
        if (!(n instanceof Error)) throw n;
        console.warn(`${e}: Missing Workspace Desktop Owner Settings configuration, using defaults. ${n == null ? void 0 : n.message}`);
      }
      return {};
    }
    let Re, Ve;
    async function Oe() {
      if (Re) return Re;
      const e = "getOverrides";
      if (!Be) return kt && console.warn(`${e}: The Fin API was not available. Returning an empty result.`), {};
      const [n, r] = await Promise.all([ne(), G()]);
      return Re = { ...r, ...n, disableRuntimeValidation: r.disableRuntimeValidation || n.disableRuntimeValidation }, Re;
    }
    function bt(e) {
      Ve = e;
    }
    const gt = (e) => e.replace(/\/$/, "");
    async function _e() {
      const e = (await Oe()).browserBaseUrl;
      if (e) try {
        const n = new URL(e);
        if (n.pathname.endsWith("/")) n.pathname = gt(n.pathname);
        else {
          if (n.pathname === "/workspace") return n.pathname += `/${Le}`, n.toString();
          console.warn(`@openfin/workspace-platform: browserOverrideBaseUrl must be a valid url, with path: /workspace. Expected <protocol>://<optional subdomain>.<domain>/workspace but got ${e}`);
        }
      } catch {
        console.warn(`@openfin/workspace-platform: browserOverrideBaseUrl must be a valid url. Expected <protocol>://<optional subdomain>.<domain>/workspace but got ${e}`);
      }
      return Ve ?? Ye;
    }
    async function dn(e = !1) {
      const n = await _e() + C.Browser;
      return e ? n : gt(n);
    }
    async function qt(e = !1) {
      const n = await _e() + C.EnterpriseBrowser;
      return e ? n : gt(n);
    }
    async function pn() {
      return await qt() + "/landing/";
    }
    const Ut = async (e, n = !1) => e ? qt(n) : dn(n), it = 56, Se = 728, pt = 150, $t = "dock3", sn = (e) => {
      const n = typeof fin < "u" && fin.me.identity.uuid;
      if (!n) throw new Error("UUID is required to get the Dock3 channel name.");
      return `${n}-dock3`;
    };
    var Ct, jt;
    (function(e) {
      e.Workspace = "openfin-workspace", e.OldWorkspace = "openfin-browser";
    })(Ct || (Ct = {})), function(e) {
      e.FinProtocol = "fin-protocol";
    }(jt || (jt = {}));
    const Ht = { uuid: ht }, Zt = (Ct.Workspace, (e) => {
      if (!Be) throw new Error("getApplication cannot be used in a non OpenFin env. Avoid using this during pre-rendering.");
      return fin.Application.wrapSync(e);
    }), Lt = () => Zt(Ht);
    var ue;
    (function(e) {
      e.Home = "openfin-home", e.Dock = "openfin-dock", e.Storefront = "openfin-storefront", e.HomeInternal = "openfin-home-internal", e.BrowserMenu = "openfin-browser-menu", e.BrowserSaveMenu = "openfin-browser-save-menu", e.DockSaveWorkspaceMenu = "openfin-dock3-save-workspace-menu", e.BrowserIndicator = "openfin-browser-indicator", e.BrowserWindow = "internal-generated-window", e.ClassicWindow = "internal-generated-classic-window", e.EnterpriseContextMenu = "openfin-enterprise-context-menu", e.BrowserAddressSearchPrefix = "openfin-browser-menu-address-search-", e.EnterpriseBookmarkDialogWindow = "openfin-enterprise-bookmark-dialog", e.DropdownMenu = "openfin-enterprise-dropdown-menu", e.DockCompanion = "openfin-dock-companion", e.AICompanionPrefix = "openfin-ai-companion-", e.UpdateVersionModal = "here-update-version-modal", e.ZoomControlsDialog = "here-zoom-controls-dialog", e.AboutPageWindow = "here-about-page", e.DesktopSignalsModal = "here-desktop-signals-modal";
    })(ue || (ue = {}));
    const Kt = (e) => ({ left: (e.left + (e.right ?? e.left + e.width)) / 2, top: (e.top + (e.bottom ?? e.top + e.height)) / 2 }), tn = (e, n) => {
      const r = n.width / 2, s = n.height / 2;
      return { left: Math.round(e.left - r), top: Math.round(e.top - s), width: n.width, height: n.height };
    };
    function g(e) {
      if (!Be) throw new Error("getOFWindow can only be used in an OpenFin env. Avoid calling this method during pre-rendering.");
      return fin.Window.wrapSync(e);
    }
    const k = { name: je, uuid: ht };
    ue.Home, Ct.Workspace, ue.Dock, Ct.Workspace;
    const de = { name: ue.Storefront, uuid: Ct.Workspace };
    Ct.Workspace, Ct.Workspace;
    async function ye(e) {
      const n = g(e);
      await n.getState() === "minimized" && await n.restore(), await n.show(), await n.setAsForeground();
    }
    const Ee = async (e) => {
      var n, r, s;
      try {
        const l = await fin.Window.wrapSync({ name: e.name, uuid: e.uuid ?? fin.me.uuid }).getOptions();
        return (((n = l.workspacePlatform) == null ? void 0 : n.windowType) === "browser" || ((r = l.workspacePlatform) == null ? void 0 : r.windowType) === "enterprise") && ((s = l.workspacePlatform) == null ? void 0 : s.pages);
      } catch (l) {
        return console.warn("isBrowserWindow error: ", l), !1;
      }
    };
    async function He() {
      const e = await fin.Application.getCurrentSync().getChildWindows(), n = await Promise.all(e.map(async (r) => Ee(r.identity)));
      return e.filter((r, s) => n[s]);
    }
    async function ze() {
      return (await fin.Application.getCurrentSync().getChildWindows()).filter((e) => e.identity.name.startsWith(ue.BrowserMenu));
    }
    const ft = (e) => g(e).getInfo().then(() => !0).catch(() => !1), at = () => ft(de);
    function Qt(e, n) {
      const r = e.top, s = e.left, l = e.top + e.height, w = e.left + e.width, S = n.monitorRect.top, b = n.monitorRect.left, N = n.monitorRect.bottom, V = n.monitorRect.right;
      if (r > N || l < S || s > V || w < b) return 0;
      const X = Math.max(r, S), Y = Math.max(s, b);
      return (Math.min(l, N) - X) * (Math.min(w, V) - Y) / (e.height * e.width);
    }
    async function on(e) {
      const n = await fin.System.getMonitorInfo();
      return [n.primaryMonitor, ...n.nonPrimaryMonitors].reduce((r, s) => {
        const l = Qt(e, s);
        return l > r.percentage ? { percentage: l, monitor: s } : r;
      }, { percentage: 0, monitor: n.primaryMonitor }).monitor;
    }
    const Dn = (e, n) => {
      var s, l, w;
      const r = e;
      return r.workspacePlatform || (r.workspacePlatform = {}), r.workspacePlatform._internalDeferShowOptions = { setAsForeground: !!n, deferShowEnabled: !0, autoShow: ((s = r.workspacePlatform) == null ? void 0 : s._internalAutoShow) || ((w = (l = r.workspacePlatform) == null ? void 0 : l._internalDeferShowOptions) == null ? void 0 : w.autoShow) || r.autoShow === void 0 || r.autoShow }, r.autoShow = !1, r;
    };
    var kn, Mt;
    (function(e) {
      e.RelativeToParentWindow = "relative-to-parent-window", e.RelativeToMonitor = "relative-to-monitor";
    })(kn || (kn = {})), function(e) {
      e.Top = "top", e.Below = "below";
    }(Mt || (Mt = {}));
    const Vt = async (e) => {
      const n = e && await g(e).getBounds();
      return { left: ((s = (e ? await on(n) : (await fin.System.getMonitorInfo()).primaryMonitor).availableRect).left + s.right) / 2, top: (s.top + s.bottom) / 2 };
      var s;
    }, jr = async (e, n, r = !1) => {
      let s;
      if (r) s = await Vt(n);
      else {
        const S = g(n), b = await S.getBounds();
        s = Kt(b);
      }
      const { defaultHeight: l, defaultWidth: w } = e;
      return tn(s, { height: l, width: w });
    };
    async function xn(e, n, r = !1) {
      const s = n && await g(n).getState() === "maximized", l = r || s || !n, w = await jr(e, n, l);
      return await (async (S) => {
        const b = await fin.System.getMonitorInfo(), N = [b.primaryMonitor, ...b.nonPrimaryMonitors];
        for (const V of N) if (Qt(S, V) === 1) return !1;
        return !0;
      })(w) ? (await g(n).center(), jr(e, n, l)) : (console.warn("Response modal isn't off screen, not centering parent window"), w);
    }
    const Da = () => (e) => e;
    var oe = u(847);
    const Kr = (e) => e.replace(/[^\d,]/g, "").split(","), Cn = (e) => {
      if (e.length < 2) throw new Error("Invalid color object, cannot convert to HSL.");
      const n = e[0] / 255, r = e[1] / 255, s = e[2] / 255, l = Math.min(n, r, s), w = Math.max(n, r, s), S = w - l;
      let b = 0, N = 0, V = 0;
      return b = S === 0 ? 0 : w === n ? (r - s) / S % 6 : w === r ? (s - n) / S + 2 : (n - r) / S + 4, b = Math.round(60 * b), b < 0 && (b += 360), V = (w + l) / 2, N = S == 0 ? 0 : S / (1 - Math.abs(2 * V - 1)), N = +(100 * N).toFixed(1), V = +(100 * V).toFixed(1), { hsl: `hsl(${b}, ${N}%, ${V}%)`, hsla: `hsl(${b}, ${N}%, ${V}%, 1)`, hue: b, lightness: V, saturation: N };
    }, On = (e) => {
      if (!e.includes("#")) throw new Error("Invalid hex value, cannot convert to RGB. Hex value begins with a hashtag.");
      let n = 0, r = 0, s = 0;
      if (e.length === 4) n = `0x${e[1]}${e[1]}`, r = `0x${e[2]}${e[2]}`, s = `0x${e[3]}${e[3]}`;
      else {
        if (e.length !== 7) throw new Error("Invalid hex string length, cannot convert to RGB.");
        n = `0x${e[1]}${e[2]}`, r = `0x${e[3]}${e[4]}`, s = `0x${e[5]}${e[6]}`;
      }
      return [+n, +r, +s];
    }, Mn = (e) => {
      const n = e;
      if (n.startsWith("#"))
        return { rgb: On(n).join(", "), alpha: 1 };
      const r = n.match(/\d{1,3}(\.\d+)?/g);
      if (r) {
        const [s, l, w, S] = r;
        return { rgb: `${s}, ${l}, ${w}`, alpha: S !== void 0 ? parseFloat(S) : 1 };
      }
      return { rgb: On(e).join(", "), alpha: 1 };
    }, ha = (e, n = !1) => {
      const r = ((s) => {
        if (!s) throw new Error("Color is not defined");
        const l = s.toLowerCase();
        let w;
        if (l.includes("rgb")) {
          const b = Kr(l);
          b.length > 3 && b.pop(), w = Cn(b).hue;
        }
        if (l.includes("#")) {
          const b = On(l);
          w = Cn(b).hue;
        }
        l.includes("hsl") && (w = Kr(l)[0]);
        const S = w == null ? void 0 : w.toString();
        if (!S) throw new Error(`Hue was unable to be extracted from "${l}", check color format. Accepted formats are: rgb(), rgba(), hex, hsl(), and hsla()`);
        return S;
      })(e);
      return n ? { background1: `hsla(${r}, 0%, 100%, 1)`, background2: `hsla(${r}, 67%, 99%, 1)`, background3: `hsla(${r}, 26%, 96%, 1)`, background4: `hsla(${r}, 15%, 94%, 1)`, background5: `hsla(${r}, 10%, 88%, 1)`, background6: `hsla(${r}, 80%, 80%, 1)` } : { background1: `hsla(${r}, 8%, 7%, 1)`, background2: `hsla(${r}, 8%, 13%, 1)`, background3: `hsla(${r}, 9%, 15%, 1)`, background4: `hsla(${r}, 6%, 23%, 1)`, background5: `hsla(${r}, 21%, 28%, 1)`, background6: `hsla(${r}, 5%, 51%, 1)` };
    }, $r = (e, n) => {
      const r = {};
      return Object.keys(e).forEach((s) => {
        r[s] = n[s] ? n[s] : e[s];
      }), r;
    };
    var Wn = u(877), Hr = u.n(Wn), Kn = u(67), Gr = u.n(Kn);
    const hr = { light: { symbol: ((gs = Gr()) == null ? void 0 : gs.src) || "" }, dark: { symbol: ((ms = Hr()) == null ? void 0 : ms.src) || "" } }, Bt = kt && document.readyState !== "complete" && new Promise((e) => document.addEventListener("readystatechange", () => {
      document.readyState === "complete" && e();
    }));
    function cn(e) {
      let n;
      const r = /* @__PURE__ */ new Set();
      return () => {
        if (!Be) throw new Error("getChannelClient cannot be used outside an OpenFin env. Avoid using this method during pre-rendering.");
        return n || (n = (async () => {
          await Bt;
          const s = { clientAPIVersion: Le }, l = await fin.InterApplicationBus.Channel.connect(e, { payload: s });
          return l.onDisconnection(async () => {
            r.forEach((w) => w()), r.clear(), console.warn(`disconnected from channel provider ${e}`), n = void 0;
          }), l;
        })().then((s) => (s.addDisconnectionListener = (l) => {
          r.add(l);
        }, s)).catch((s) => {
          throw n = void 0, new Error(`failed to connect to channel provider ${e}: ${s}`);
        })), n;
      };
    }
    var Sn, gr;
    (function(e) {
      e.Fetching = "fetching", e.Fetched = "fetched", e.Complete = "complete";
    })(Sn || (Sn = {})), function(e) {
      e[e.Initial = 0] = "Initial", e[e.Open = 1] = "Open", e[e.Close = 2] = "Close";
    }(gr || (gr = {}));
    const na = cn("__of_workspace_protocol__"), Oa = na;
    var fe;
    (function(e) {
      e.LaunchApp = "launchApp", e.SavePage = "savePage", e.GetSavedPage = "getSavedPage", e.CreateSavedPage = "createSavedPage", e.UpdateSavedPage = "updateSavedPage", e.DeleteSavedPage = "deleteSavedPage", e.GetSavedPages = "getSavedPages", e.CreateSavedPageInternal = "createSavedPageInternal", e.UpdateSavedPageInternal = "updateSavedPageInternal", e.DeleteSavedPageInternal = "deleteSavedPageInternal", e.UpdatePageForWindow = "updatePageForWindow", e.AttachPagesToWindow = "attachPagesToWindow", e.DetachPagesFromWindow = "detachPagesFromWindow", e.ReorderPagesForWindow = "reorderPagesForWindow", e.SetActivePage = "setActivePage", e.AddPage = "addPage", e.AddDefaultPage = "addDefaultPage", e.GetAllAttachedPages = "getAllAttachedPages", e.GetActivePageIdForWindow = "getActivePageIdForWindow", e.GetPagesForWindow = "getPagesForWindow", e.GetPageForWindow = "getPageForWindow", e.GetSavedPageMetadata = "getSavedPageMetadata", e.GetUniquePageTitle = "getUniquePageTitle", e.GetLastFocusedBrowserWindow = "getLastFocusedBrowserWindow", e.GetPageByViewIdentity = "getPageByViewIdentity", e.GetThemes = "getThemes", e.GetSelectedScheme = "getSelectedScheme", e.SetSelectedScheme = "setSelectedScheme", e.OpenGlobalContextMenuInternal = "openGlobalContextMenuInternal", e.OpenViewTabContextMenuInternal = "openViewTabContextMenuInternal", e.OpenPageTabContextMenuInternal = "openPageTabContextMenuInternal", e.OpenSaveButtonContextMenuInternal = "openSaveButtonContextMenuInternal", e.InvokeCustomActionInternal = "invokeCustomActionInternal", e.RequestQuitPlatformDialogInternal = "requestQuitPlatformDialogInternal", e.GetSavedWorkspace = "getSavedWorkspace", e.CreateSavedWorkspace = "createSavedWorkspace", e.UpdateSavedWorkspace = "updateSavedWorkspace", e.DeleteSavedWorkspace = "deleteSavedWorkspace", e.GetSavedWorkspaces = "getSavedWorkspaces", e.GetSavedWorkspacesMetadata = "getSavedWorkspacesMetadata", e.SaveWorkspace = "saveWorkspace", e.GetCurrentWorkspace = "getCurrentWorkspace", e.ApplyWorkspace = "applyWorkspace", e.RestoreLastSavedWorkspaceInternal = "restoreLastSavedWorkspaceInternal", e.SetActiveWorkspace = "setActiveWorkspace", e.IsBrowserInitialized = "isBrowserInitialized", e.Analytics = "analyticsInternal", e.GetLanguage = "getLanguage", e.GetLanguageResourcesInternal = "getLanguageResourcesInternal", e.SetLanguage = "setLanguage", e.GetDockProviderConfig = "getDockProviderConfig", e.SaveDockProviderConfig = "saveDockProviderConfig", e.HandleSaveModalOnPageClose = "handleSaveModalOnPageClose", e.ShouldPageClose = "shouldPageClose", e.ShouldWindowClose = "shouldWindowClose", e.CopyPage = "copyPage", e.HandlePageChanges = "handlePageChanges", e.MarkUnsavedPagesAsSavedInternal = "markUnsavedPagesAsSavedInternal", e.TrackRemovedTabInternal = "trackRemovedTabInternal", e.RestoreRemovedTabInternal = "restoreRemovedTabInternal", e.TrackVisitedSiteInternal = "trackVisitedSiteInternal", e.GetRecentlyVisitedSitesInternal = "getRecentlyVisitedSitesInternal", e.GetFrequentlyVisitedSitesInternal = "getFrequentlyVisitedSitesInternal", e.SearchSitesInternal = "searchSitesInternal", e.GetSearchProvidersInternal = "getSearchProvidersInternal", e.GetCuratedContentInternal = "getCuratedContentInternal", e.HandleRequestNavigationInternal = "handleRequestNavigationInternal", e.RefreshBookmarksInternal = "refreshBookmarksInternal", e.LaunchBookmarkInternal = "launchBookmarkInternal", e.GetNotificationsConfig = "getNotificationsConfig", e.UpdateDockFavoritesInternal = "updateDockFavoritesInternal", e.UpdateContentMenuInternal = "updateContentMenuInternal", e.LaunchDockEntryInternal = "launchDockEntryInternal", e.SetDockFavoritesOrderInternal = "setDockFavoritesOrderInternal", e.NavigateContentMenuInternal = "navigateContentMenuInternal", e.SetDefaultDockButtonsOrderInternal = "setDefaultDockButtonsOrderInternal", e.GetDockWorkspacesContextMenuInternal = "getDockWorkspacesContextMenuInternal", e.HandleDockWorkspacesMenuResponseInternal = "handleDockWorkspacesMenuResponseInternal", e.RemoveDockFavoriteInternal = "removeDockFavoriteInternal", e.AddDockFavoriteInternal = "addDockFavoriteInternal", e.FocusAndExpandSearchInternal = "focusAndExpandSearchInternal", e.SendUpdateVersionModalResponseInternal = "sendUpdateVersionModalResponseInternal", e.ShowUpdateVersionModalInternal = "showUpdateVersionModalInternal";
    })(fe || (fe = {}));
    const ga = async (e) => fin.Platform.wrapSync(e).getClient(), In = async (e) => {
      const n = await ga(e), r = "Target is not a Workspace Platform. Target must call WorkspacePlatform.init";
      let s;
      try {
        s = await n.dispatch("isWorkspacePlatform");
      } catch {
        throw new Error(r);
      }
      if (typeof s == "boolean" && s) return console.warn("You are using an older version of the workspace platform. Please update your workspace platform."), s;
      if (typeof s == "object" && s.isWorkspacePlatform) return s;
      throw new Error(r);
    }, Fe = async (e) => (await In(e), ga(e)), qe = async (e) => {
      const n = await In(e);
      if (typeof n == "object" && (n == null ? void 0 : n.isBrowserInitialized) !== !0) throw new Error("Target is not a Browser-enabled Workspace Platform.");
      return ga(e);
    }, zr = "dark", st = { [oe.Palette.brandPrimary]: "#0A76D3", [oe.Palette.brandPrimaryActive]: "#0A71C9", [oe.Palette.brandPrimaryHover]: "#0B84EB", [oe.Palette.brandPrimaryFocused]: oe.Color.white, [oe.Palette.brandPrimaryText]: oe.Color.white, [oe.Palette.statusSuccess]: oe.Color.functional1, [oe.Palette.statusWarning]: oe.Color.functional10, [oe.Palette.statusCritical]: oe.Color.functional7, [oe.Palette.statusActive]: oe.Color.functional3, [oe.Palette.contentBackground1]: "#0A76D3", [oe.Palette.contentBackground2]: "#000000", [oe.Palette.contentBackground3]: "#000000", [oe.Palette.contentBackground4]: "#000000", [oe.Palette.contentBackground5]: "#000000", [oe.Palette.borderNeutral]: oe.Color.silverGray }, Wa = { ...st, [oe.Palette.background1]: oe.Color.white, [oe.Palette.background2]: oe.Color.lightGray1, [oe.Palette.background3]: oe.Color.lightGray2, [oe.Palette.background4]: oe.Color.lightGray3, [oe.Palette.background5]: oe.Color.lightGray4, [oe.Palette.background6]: oe.Color.lightGray5, [oe.Palette.brandSecondary]: oe.Color.lightGray4, [oe.Palette.brandSecondaryActive]: oe.Color.lightGray4Active, [oe.Palette.brandSecondaryHover]: oe.Color.lightGray4Hover, [oe.Palette.brandSecondaryFocused]: oe.Color.darkGray5, [oe.Palette.brandSecondaryText]: oe.Color.darkGray5, [oe.Palette.inputBackground]: oe.Color.lightGray3, [oe.Palette.inputColor]: oe.Color.darkGray5, [oe.Palette.inputPlaceholder]: oe.Color.darkGray2, [oe.Palette.inputDisabled]: oe.Color.neutralGray, [oe.Palette.inputFocused]: oe.Color.lightGray5, [oe.Palette.inputBorder]: oe.Color.neutralGray, [oe.Palette.textDefault]: oe.Color.darkGray5, [oe.Palette.textHelp]: oe.Color.darkGray3, [oe.Palette.textInactive]: oe.Color.neutralGray }, ma = { ...st, [oe.Palette.background1]: oe.Color.darkGray6, [oe.Palette.background2]: oe.Color.darkGray5, [oe.Palette.background3]: oe.Color.darkGray4, [oe.Palette.background4]: oe.Color.darkGray3, [oe.Palette.background5]: oe.Color.darkGray2, [oe.Palette.background6]: oe.Color.darkGray1, [oe.Palette.brandSecondary]: oe.Color.darkGray2, [oe.Palette.brandSecondaryActive]: oe.Color.darkGray2Active, [oe.Palette.brandSecondaryHover]: oe.Color.darkGray2Hover, [oe.Palette.brandSecondaryFocused]: oe.Color.white, [oe.Palette.brandSecondaryText]: oe.Color.white, [oe.Palette.inputBackground]: oe.Color.darkGray1, [oe.Palette.inputColor]: oe.Color.white, [oe.Palette.inputPlaceholder]: oe.Color.lightGray5, [oe.Palette.inputDisabled]: oe.Color.neutralGray, [oe.Palette.inputFocused]: oe.Color.lightGray5, [oe.Palette.inputBorder]: oe.Color.neutralGray, [oe.Palette.textDefault]: oe.Color.white, [oe.Palette.textHelp]: oe.Color.lightGray5, [oe.Palette.textInactive]: oe.Color.neutralGray }, aa = [{ label: "OpenFin Default Light and Dark Theme", palettes: { light: { ...Wa, backgroundPrimary: oe.Color.darkGray5 }, dark: { ...ma, backgroundPrimary: oe.Color.darkGray5 } } }], Bn = (e) => {
      const { background: n, foreground: r } = e;
      return { background: n, foreground: r ?? "#FFFFFF" };
    }, mr = (e, n) => {
      var r, s, l;
      return { icons: { symbol: ((l = (s = (r = e.brand) == null ? void 0 : r.icons) == null ? void 0 : s[n]) == null ? void 0 : l.symbol) || hr[n].symbol } };
    }, qr = (e) => {
      const { light: n, dark: r } = "palettes" in e ? e.palettes : { light: e.palette, dark: e.palette }, s = $r(ma, r), l = $r(Wa, n), w = ((X, Y) => {
        const ae = { ...X }, le = { ...Y };
        let Pe = Y.backgroundPrimary ? ha(Y.backgroundPrimary, !0) : {}, Te = X.backgroundPrimary ? ha(X.backgroundPrimary) : {};
        return Pe = { ...Pe, ...le }, Te = { ...Te, ...ae }, { light: { ...Y, ...Pe }, dark: { ...X, ...Te } };
      })(r, n), S = { ...(0, oe.createTheme)({ ...s, ...w == null ? void 0 : w.dark }), brand: mr(e, "dark") }, b = { ...(0, oe.createTheme)({ ...l, ...w == null ? void 0 : w.light }), brand: mr(e, "light") }, { light: N, dark: V } = ((X) => {
        const Y = Object.keys(X.notificationIndicatorColors ?? {});
        if (Y != null && Y.length) {
          const ae = {}, le = {};
          return Y.forEach((Pe) => {
            const Te = X.notificationIndicatorColors[Pe];
            "background" in Te ? (ae[Pe] = Bn(Te), le[Pe] = Bn(Te)) : (ae[Pe] = Bn(Te.dark ?? Te.light), le[Pe] = Bn(Te.light ?? Te.dark));
          }), { light: le, dark: ae };
        }
        return { light: null, dark: null };
      })(e);
      return S.notificationIndicatorColors = V, b.notificationIndicatorColors = N, { dark: S, light: b };
    }, wr = async (e) => {
      const { themes: n, selectedScheme: r } = await (async (w) => {
        var b, N, V;
        const S = (V = (N = (b = fin == null ? void 0 : fin.__internal_) == null ? void 0 : b.initialOptions) == null ? void 0 : N.workspacePlatform) == null ? void 0 : V._themeData;
        return !S || w.uuid !== k.uuid ? { themes: await i(w).Theme.getThemes(), selectedScheme: await i(w).Theme.getSelectedScheme() } : S;
      })(e);
      var s, l;
      return (s = n != null && n.length ? n : aa, l = r, s.map((w) => {
        const S = "palettes" in w ? w.default : zr, { light: b, dark: N } = qr(w);
        return { label: w.label, logoUrl: w.logoUrl, theme: { dark: N, light: b }, defaultScheme: l ?? S };
      }))[0];
    }, St = async (e) => {
      const n = await Fe(e || fin.me.identity), r = await n.dispatch(fe.GetSelectedScheme, void 0);
      return r === xe.System ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : r;
    }, wa = async (e, n) => {
      var w, S;
      const r = await wr(fin.me.identity), s = await St(fin.me.identity) === xe.Dark, l = r == null ? void 0 : r.theme;
      return ((S = (w = l == null ? void 0 : l[s ? xe.Dark : xe.Light]) == null ? void 0 : w.palette) == null ? void 0 : S[e]) || n;
    };
    function ya(e) {
      return function(n, r) {
        const s = {};
        for (const l of r) l in n && (s[l] = n[l]);
        return s;
      }(e, Da()(["defaultLeft", "defaultTop", "defaultCentered", "saveWindowState", "taskbarIconGroup"]));
    }
    function $n() {
      let e, n;
      return { promise: new Promise((r, s) => {
        e = r, n = s;
      }), resolve: e, reject: n };
    }
    const Hn = fl, ba = (e) => ({ setItem: (n, r) => {
      localStorage.setItem(`${e}-${n}`, r);
    }, getItem: (n) => localStorage.getItem(`${e}-${n}`), removeItem: (n) => localStorage.removeItem(`${e}-${n}`) }), ra = ba(ht), va = ra.setItem, Gn = ra.getItem, Jr = ra.removeItem;
    var yr;
    (function(e) {
      e.CurrentWorkspaceId = "currentWorkspaceId", e.LastFocusedBrowserWindow = "lastFocusedBrowserWindow", e.MachineName = "machineName", e.NewTabPageLayout = "NewTabPageLayout", e.NewTabPageSort = "NewTabPageSort", e.DockPosition = "DockPosition", e.SelectedColorScheme = "SelectedColorScheme", e.ThemePaletteSheet = "ThemePaletteSheet", e.HasMovedStore = "HasMovedStore", e.PageDragState = "BrowserPageDragState", e.ThemePaletteDefaultScheme = "ThemePaletteDefaultScheme";
    })(yr || (yr = {}));
    const Ke = yr, oa = (e) => e + "-" + fin.me.uuid, Yr = (e, n) => {
      const r = Tt && Be && new Hn.Dexie(e);
      return r && r.version(0.1).stores({ [n]: "" }), r;
    }, Zr = (e, n) => {
      const r = Yr(oa(e), n), s = Yr(e, n);
      if (!r || !s) throw new Error("Unable to migrate store - IndexDB not supported");
      return (async (l, w, S) => {
        if (!l[S]) return void console.warn(`Legacy store ${S} not found, skipping migration`);
        const b = Gn(Ke.HasMovedStore), N = b ? JSON.parse(b) : {};
        if (N && N[S]) return;
        N[S] = !0, va(Ke.HasMovedStore, JSON.stringify(N));
        const V = await l[S].toArray();
        await w[S].bulkPut(V);
      })(s, r, e), r;
    }, nn = "dock3-provider-config", gn = Tt && Be && new Hn.Dexie(oa("dock3-provider-config"));
    gn && gn.version(0.1).stores({ [nn]: "" });
    var mn, Gt, An, ia, It = function(e, n, r, s, l) {
      if (typeof n == "function" ? e !== n || !0 : !n.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return n.set(e, r), r;
    }, At = function(e, n, r, s) {
      if (typeof n == "function" ? e !== n || !s : !n.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return r === "m" ? s : r === "a" ? s.call(e) : s ? s.value : n.get(e);
    };
    class fn {
      static getOverrideConstructor(...n) {
        return class extends fn {
          constructor() {
            super(...n);
          }
        };
      }
      constructor(n, r) {
        if (mn.set(this, void 0), Gt.set(this, void 0), An.set(this, null), ia.set(this, $n()), fn.instance) throw new Error("Dock3Provider has already been initialized.");
        fn.instance = this, It(this, mn, n), It(this, Gt, r), this.registerChannelActions();
      }
      async launchEntry(n) {
      }
      get ready() {
        return At(this, ia, "f").promise;
      }
      async bookmarkContentMenuEntry(n) {
      }
      get config() {
        return At(this, mn, "f");
      }
      set config(n) {
        It(this, mn, n);
      }
      async updateConfig(n) {
        await this.handleConfigChange(n);
      }
      async shutdown() {
        await Promise.all([At(this, Gt, "f").destroy(), this.getWindowSync().close(!0)]), fn.instance = null;
      }
      async saveConfig({ config: n }) {
        It(this, mn, n), await async function(r) {
          if (!gn) throw new Error("Unable to save Dock provider config - IndexedDb not supported");
          await gn[nn].put(r, "latest");
        }(n);
      }
      async handleConfigChange(n) {
        At(this, An, "f") && await At(this, Gt, "f").dispatch(At(this, An, "f"), "handle-dock-config-updated", n);
      }
      async loadConfig() {
        const n = await async function() {
          if (!gn) throw new Error("Unable to get Dock provider config - IndexedDB not supported");
          try {
            return await gn[nn].get("latest");
          } catch (r) {
            return void console.warn("Failed to retrieve Dock provider config from IndexedDB", r);
          }
        }();
        return n && It(this, mn, n), At(this, mn, "f");
      }
      getWindowSync() {
        return fin.Window.wrapSync({ uuid: fin.me.identity.uuid, name: $t });
      }
      registerChannelActions() {
        At(this, Gt, "f").register("launch-entry", this.launchEntry.bind(this)), At(this, Gt, "f").register("save-config", this.saveConfig.bind(this)), At(this, Gt, "f").register("bookmark-content-menu-entry", this.bookmarkContentMenuEntry.bind(this)), At(this, Gt, "f").onConnection((n) => {
          n.name === $t && It(this, An, n);
        }), At(this, Gt, "f").register("ready", async (n, r) => {
          var s;
          if (((s = At(this, An, "f")) == null ? void 0 : s.endpointId) !== r.endpointId) throw new Error(`Dock3Provider: 'ready' action received from unexpected client ${r.name} (${r.uuid})`);
          At(this, ia, "f").resolve();
        }), At(this, Gt, "f").onDisconnection((n) => {
          var r;
          ((r = At(this, An, "f")) == null ? void 0 : r.endpointId) === n.endpointId && (It(this, An, null), It(this, ia, $n()));
        });
      }
    }
    async function ka(e) {
      const { config: n, override: r } = e;
      if (fn.instance) throw new Error("Dock3Provider has already been initialized.");
      const s = await fin.InterApplicationBus.Channel.create(sn()), l = new (r(fn.getOverrideConstructor(n, s)))();
      return await l.loadConfig(), await async function(w, S, b, N) {
        var V, X, Y;
        if (!await ft({ uuid: k.uuid, name: w })) {
          let ae;
          ae = typeof ((V = b.dockPosition) == null ? void 0 : V.left) == "number" || typeof (N == null ? void 0 : N.defaultLeft) == "number" ? (X = b.dockPosition) == null ? void 0 : X.left : (await Vt(k)).left - Se / 2;
          const le = { name: w, url: S + C.EnterpriseDock, autoShow: !0, frame: !1, smallWindow: !0, saveWindowState: !1, defaultHeight: it, defaultWidth: Se, includeInSnapshots: !1, defaultTop: ((Y = b.dockPosition) == null ? void 0 : Y.top) ?? pt, defaultLeft: ae, workspacePlatform: { windowType: b.windowType, ...b }, throttling: "disabled", resizable: !1, maximizable: !1, backgroundColor: await wa("background1"), ...ya(N ?? {}) };
          await fin.Window.create(Dn(le));
        }
      }($t, await dn(), l.config, e.windowOptions), await l.ready, l;
    }
    mn = /* @__PURE__ */ new WeakMap(), Gt = /* @__PURE__ */ new WeakMap(), An = /* @__PURE__ */ new WeakMap(), ia = /* @__PURE__ */ new WeakMap(), fn.instance = null;
    const Et = async (e) => {
      var s;
      const n = e ? fin.Window.wrapSync(e) : fin.Window.getCurrentSync(), r = await n.getOptions();
      return ((s = r.workspacePlatform) == null ? void 0 : s.windowType) && r.workspacePlatform.windowType === "enterprise";
    }, En = (e) => {
      var r, s;
      return ((s = (r = e == null ? void 0 : e.defaultWindowOptions) == null ? void 0 : r.workspacePlatform) == null ? void 0 : s.windowType) === "enterprise";
    };
    let br;
    const Pn = (e) => {
      if (e) try {
        return new URL(e).pathname.includes(C.EnterpriseLandingPage.replace(/\/$/, ""));
      } catch {
        console.error("error parsing url: %O", e);
      }
      return !1;
    };
    var Nn;
    (function(e) {
      e.Browser = "Browser", e.Dock = "Dock", e.EnterpriseDock = "EnterpriseDock", e.Home = "Home", e.Notification = "Notification", e.Storefront = "Storefront", e.Platform = "Platform", e.Theming = "Theming", e.Microflow = "Microflow";
    })(Nn || (Nn = {}));
    const Sa = async (e, n, r = "workspace-licensing") => {
      const s = { apiVersion: n.apiVersion || Le, componentName: e, componentVersion: n.componentVersion || Le, allowed: n.allowed, rejectionCode: n.rejectionCode };
      fin.System.registerUsage({ type: r, data: s });
    };
    let Ba = !1;
    const zn = /* @__PURE__ */ new Map(), Na = (e) => {
      let n = zn.get(e.uuid);
      return n || (n = i(e), n.once("closed", () => {
        zn.delete(e.uuid);
      }), zn.set(e.uuid, n)), n;
    }, vr = async (e, n) => {
      try {
        await e._raiseAnalytics([n]);
      } catch (r) {
        console.error("failed to raise analytics event", r);
      }
    }, un = async (e) => {
      await vr(Na(fin.me.identity), { source: "Browser", ...e });
    };
    let qn;
    const kr = async (e) => {
      qn || (qn = new TextEncoder());
      const n = qn.encode(e), r = await window.crypto.subtle.digest("SHA-256", n);
      return Array.from(new Uint8Array(r)).map((s) => s.toString(16).padStart(2, "0")).join("");
    };
    function Sr(e) {
      return e && typeof e == "object" && !Array.isArray(e);
    }
    function _n(e, ...n) {
      if (!n.length) return e;
      const r = n.shift();
      return Sr(e) && Sr(r) && Object.entries(r).forEach(([s, l]) => {
        if (Sr(l)) return e[s] || (e[s] = {}), _n(e[s], l);
        e[s] = l;
      }), _n(e, ...n);
    }
    const Fa = Tl;
    var La = u.n(Fa);
    function an() {
      return typeof crypto !== void 0 && "randomUUID" in crypto && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (e) => (e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16));
    }
    function Qr() {
      return localStorage.getItem(Ke.MachineName) ?? "unknown";
    }
    let Pr;
    async function Va() {
      return Pr || (Pr = await fin.System.getMachineId()), Pr;
    }
    const xr = (e) => {
      var n;
      if (Array.isArray((n = e.workspacePlatform) == null ? void 0 : n.pages) && (e.layoutSnapshot || e.layout)) {
        const r = e.workspacePlatform.pages.find((s) => s.isActive);
        if (r) {
          const s = e.layoutSnapshot ? e.layoutSnapshot.layouts[r.layoutContainerKey] : e.layout;
          if (s) if (r.isLocked) {
            const l = O(s, r.layout);
            r.layout = l, e.layout = l;
          } else r.layout = s, e.layout = s;
        }
      }
      return e;
    };
    async function Ua(e) {
      var s;
      const n = e || await fin.Platform.getCurrentSync().getSnapshot();
      if ((s = n.snapshotDetails) != null && s.machineId) return n;
      const r = Qr();
      return { ...n, snapshotDetails: { ...n.snapshotDetails, machineId: await Va(), machineName: r } };
    }
    const ja = async (e) => ({ ...e, layoutDetails: { machineId: await Va(), machineName: Qr() } }), Fn = async (e, n) => ({ pageId: an(), title: e, layout: await ja(n), isReadOnly: !1 }), Pa = async (e) => {
      const n = await Fn(e.title, F(e.layout));
      return e.panels && (n.panels = e.panels.map((r) => ({ ...r, viewOptions: E(r.viewOptions) }))), { ...e, ...n };
    }, Cr = (e) => {
      const n = fin.Platform.Layout.wrapSync(e);
      return { show: async () => {
        const r = await n.getConfig(), { settings: s, dimensions: l } = r, w = await Et(e);
        await n.replace({ ...r, settings: { ...s, hasHeaders: !0, reorderEnabled: !0 }, dimensions: { ...l, headerHeight: w ? 28 : 30 } });
      }, hide: async (r) => {
        var S;
        const s = await n.getConfig(), { settings: l, dimensions: w } = await s;
        await n.replace({ ...s, settings: { ...l, hasHeaders: !1, reorderEnabled: ((S = r == null ? void 0 : r.settings) == null ? void 0 : S.reorderEnabled) ?? !1 }, dimensions: { ...w, headerHeight: 0 } });
      }, isShowingTabs: async () => {
        try {
          const r = await n.getConfig(), { settings: s } = await r;
          return s.hasHeaders;
        } catch (r) {
          return console.error("failed to get layout config: ", r), !0;
        }
      } };
    }, ln = "of-workspace-", wn = new class {
      mark(e) {
        performance.mark(`${ln}${e}`);
      }
      markStart(e) {
        performance.mark(`${ln}${e}-start`);
      }
      markEnd(e) {
        performance.mark(`${ln}${e}-end`);
      }
      markEndAndMeasure(e) {
        performance.mark(`${ln}${e}-end`);
        try {
          return performance.measure(`${ln}${e}`, `${ln}${e}-start`, `${ln}${e}-end`);
        } catch {
        }
      }
      markAndMeasure(e, n) {
        performance.mark(`${ln}${e}`);
        try {
          return performance.measure(`${ln}${e}-measure`, `${ln}${n}-start`, `${ln}${e}`);
        } catch {
        }
      }
      reportWorkspacePerformanceEntries() {
        return performance.getEntriesByType("measure").filter((e) => e.name.startsWith(ln));
      }
      reportWorkspacePerformance() {
        return this.reportWorkspacePerformanceEntries().map((e) => ({ name: e.name.replace(`${ln}`, "").replace("-measure", ""), duration: e.duration }));
      }
    }(), Ka = () => {
      const e = `browser-context-menu-startup-${an()}`;
      return wn.markStart(e), e;
    }, $a = (e) => {
      wn.markAndMeasure("browser-context-menu-called", e);
    }, Ha = (e) => {
      fin.Application.wrapSync({ uuid: fin.me.identity.uuid }).once("window-shown", () => {
        ((n) => {
          wn.markAndMeasure("browser-context-menu-shown", n);
        })(e);
      });
    }, Mr = (e, n) => n ? `${n}-${e.uuid}-${e.name}` : `__browser_window__-${e.uuid}-${e.name}`, zt = /* @__PURE__ */ new Map(), sa = (e) => (zt.has(e) || zt.set(e, cn(e)), zt.get(e)()), vt = (e, n) => {
      const r = Mr(e, n);
      return sa(r);
    };
    var Ga, ca, Jn, Ln, Tn, xa;
    (function(e) {
      e.CloseBrowserWindow = "close-browser-window", e.QuitPlatform = "quit-platform", e.ClosePage = "close-page", e.AddToChannel = "add-to-channel", e.RemoveFromChannel = "remove-from-channel", e.OpenSaveModalInternal = "open-save-modal-internal", e.DuplicatePage = "duplicate-page", e.SetSelectedScheme = "set-selected-scheme", e.ShowBrowserIndicator = "show-browser-indicator", e.SetSelectedLanguage = "set-selected-language", e.RefreshBookmarksInternal = "refresh-bookmarks", e.GetLayoutsWithSelectedViewsInternal = "get-layouts-with-selected-views", e.FocusAndExpandSearchInternal = "focus-and-expand-search";
    })(Ga || (Ga = {})), function(e) {
      e.GetPages = "get-pages", e.GetActivePageForWindow = "get-active-page-for-window", e.AttachPagesToWindow = "attach-pages-to-window", e.DetachPagesFromWindow = "detach-pages-from-window", e.SetActivePageForWindow = "set-active-page-for-window", e.RenamePage = "rename-page", e.ReorderPagesForWindow = "reorder-pages-for-window", e.UpdatePageForWindow = "update-page-for-window", e.UpdatePagesWindowOptions = "update-pages-window-options", e.IsDetachingPages = "is-detaching-pages", e.IsActivePageChanging = "is-active-page-changing";
    }(ca || (ca = {})), function(e) {
      e.GetApps = "get-apps", e.GetCuratedContent = "get-curated-content", e.GetRecentlyVisited = "get-recently-visited", e.GetSearchProviders = "get-search-providers";
    }(Jn || (Jn = {})), function(e) {
      e.CreateBookmarkNode = "create-bookmark-node", e.GetBookmarkNode = "get-bookmark-node", e.SearchBookmarkNodes = "search-bookmark-nodes", e.UpdateBookmarkNode = "update-bookmark-node", e.DeleteBookmarkNode = "delete-bookmark-node";
    }(Ln || (Ln = {})), function(e) {
      e.UpdateFavoriteEntries = "update-favorite-entries", e.UpdateContentMenu = "update-content-menu", e.NavigateContentMenu = "navigate-content-menu";
    }(Tn || (Tn = {})), function(e) {
      e.SendUpdateVersionModalResponse = "send-update-version-modal-response";
    }(xa || (xa = {}));
    const wt = { ...Ga, ...ca, ...Tn }, Yn = cn(`${typeof fin < "u" && (fin == null ? void 0 : fin.me.identity.uuid)}-enterprise-bookmarks`), Ca = (e) => ({ identity: e, openfinWindow: fin.Window.wrapSync(e), _bookmarks: { _createBookmarkNode: async (n) => (async (r) => (await Yn()).dispatch(Ln.CreateBookmarkNode, r))(n), _getBookmarkNode: async (n) => (async (r) => (await Yn()).dispatch(Ln.GetBookmarkNode, r))(n), _searchBookmarkNodes: async (n) => (async (r) => (await Yn()).dispatch(Ln.SearchBookmarkNodes, r))(n), _updateBookmarkNode: async (n) => (async (r) => (await Yn()).dispatch(Ln.UpdateBookmarkNode, r))(n), _deleteBookmarkNode: async (n) => (async (r) => (await Yn()).dispatch(Ln.DeleteBookmarkNode, r))(n) }, getPages: async () => (await qe(e)).dispatch(fe.GetPagesForWindow, e), getPage: async (n) => (await qe(e)).dispatch(fe.GetPageForWindow, { identity: e, pageId: n }), addPage: async (n) => c().Browser.wrapSync(e)._addPage(n), _addPage: async (n, r) => {
      const s = await qe(e), l = { identity: e, page: n, insertionIndex: r == null ? void 0 : r.index, multiInstanceViewBehavior: r == null ? void 0 : r.multiInstanceViewBehavior };
      return s.dispatch(fe.AddPage, l);
    }, _addPages: async (n, r) => {
      const s = await qe(e), l = n.map(({ page: S, opts: b }) => ({ ...S, multiInstanceViewBehavior: (b == null ? void 0 : b.multiInstanceViewBehavior) || "duplicate" })), w = { identity: e, pages: l, ...r };
      return s.dispatch(fe.AttachPagesToWindow, w);
    }, removePage: async (n) => (await qe(e)).dispatch(fe.DetachPagesFromWindow, { identity: e, pageIds: [n] }), reparentPage: async (n) => c().Browser.wrapSync(e)._reparentPage(n), _reparentPage: async (n) => {
      const { pageId: r } = n, s = await qe(e), l = (await s.dispatch(fe.GetAllAttachedPages, void 0)).find(({ pageId: S }) => S === r);
      if (!l) throw new Error(`Reparent Page Error: Target page with pageId ${r} not found`);
      l.multiInstanceViewBehavior = "reparent";
      const w = { identity: e, pages: [l], insertionIndex: n.index };
      return s.dispatch(fe.AttachPagesToWindow, w);
    }, setActivePage: async (n) => (await qe(e)).dispatch(fe.SetActivePage, { identity: e, pageId: n }), updatePage: async (n) => {
      const r = await qe(e);
      return n.identity = e, r.dispatch(fe.UpdatePageForWindow, n);
    }, reorderPages: async (n) => {
      const r = await qe(e);
      return n.identity = e, r.dispatch(fe.ReorderPagesForWindow, n);
    }, _openGlobalContextMenu: async (n) => {
      const r = await qe(e);
      return n.identity = e, r.dispatch(fe.OpenGlobalContextMenuInternal, n);
    }, replaceToolbarOptions: async (n) => {
      await qe(e), await fin.Window.wrapSync(e).updateOptions({ workspacePlatform: { toolbarOptions: n } });
    }, replaceWindowStateButtonOptions: async (n) => {
      await qe(e), await fin.Window.wrapSync(e).updateOptions({ workspacePlatform: { windowStateButtonOptions: n } });
    }, updateBrowserWindowTitle: async (n) => {
      const r = fin.Window.wrapSync(e);
      typeof n != "string" ? await r.updateOptions({ workspacePlatform: { title: n } }) : console.warn("Type string for window title is deprecated, please use WindowTitle type instead", n);
    }, _openViewTabContextMenu: async (n) => {
      const r = await qe(e);
      return n.identity = e, r.dispatch(fe.OpenViewTabContextMenuInternal, n);
    }, _openPageTabContextMenu: async (n) => {
      const r = await qe(e);
      return n.identity = e, r.dispatch(fe.OpenPageTabContextMenuInternal, n);
    }, _openSaveModal: async (n) => (await qe(e), (await vt(e)).dispatch(wt.OpenSaveModalInternal, n)), _getLayoutsWithSelectedViews: async () => (await vt(e)).dispatch(wt.GetLayoutsWithSelectedViewsInternal, e), _openSaveButtonContextMenu: async (n) => {
      const r = await qe(e);
      return n.identity = e, r.dispatch(fe.OpenSaveButtonContextMenuInternal, n);
    }, _addDefaultPage: async (n) => {
      const r = await qe(e);
      return n.identity = e, r.dispatch(fe.AddDefaultPage, n);
    }, _trackRemovedTab: async (n) => (await qe(e)).dispatch(fe.TrackRemovedTabInternal, n), _restoreRemovedTab: async (n) => (await qe(e)).dispatch(fe.RestoreRemovedTabInternal, n), _trackVisitedSite: async (n) => (await qe(e)).dispatch(fe.TrackVisitedSiteInternal, n), _getRecentlyVisitedSites: async (n) => (await qe(e)).dispatch(fe.GetRecentlyVisitedSitesInternal, n), _getFrequentlyVisitedSites: async (n) => (await qe(e)).dispatch(fe.GetFrequentlyVisitedSitesInternal, n), _searchSites: async (n) => (await qe(e)).dispatch(fe.SearchSitesInternal, { identity: e, req: n }), _getSearchProviders: async () => (await qe(e)).dispatch(fe.GetSearchProvidersInternal, { identity: e }), _getCuratedContent: async (n) => (await qe(e)).dispatch(fe.GetCuratedContentInternal, { identity: e, req: n }), _handleRequestNavigation: async (n) => (await qe(e)).dispatch(fe.HandleRequestNavigationInternal, n), _sendUpdateVersionModalResponse: async (n) => (await qe(e)).dispatch(fe.SendUpdateVersionModalResponseInternal, n) }), za = (e) => {
      const n = fin.Platform.wrapSync(e);
      return { wrapSync: (r) => Ca(r), createWindow: async (r) => {
        const s = (() => {
          const w = `browser-window-startup-${an()}`;
          return wn.markStart(w), w;
        })();
        ((w) => {
          fin.Application.wrapSync({ uuid: fin.me.identity.uuid }).once("window-shown", () => {
            wn.markAndMeasure("browser-window-shown", w);
          });
        })(s), await qe(e);
        const l = await n.createWindow(r);
        return ((w) => {
          wn.markAndMeasure("browser-window-started", w);
        })(s), Ca(l.identity);
      }, getAllAttachedPages: async () => (await qe(e)).dispatch(fe.GetAllAttachedPages, void 0), getAllWindows: async () => (await qe(e), (await He()).map((r) => Ca(r.identity))), getUniquePageTitle: async (r) => (await qe(e)).dispatch(fe.GetUniquePageTitle, r), getLastFocusedWindow: async () => (await qe(e)).dispatch(fe.GetLastFocusedBrowserWindow, void 0), getPageByViewIdentity: async (r) => (await qe(e)).dispatch(fe.GetPageByViewIdentity, r) };
    }, Ir = (e, n = 0) => {
      let r, s, l = !1;
      const w = async (S) => {
        const b = await e(...S);
        if (l) {
          await new Promise((V) => setTimeout(V, n));
          const N = r;
          return r = void 0, l = !1, w(N);
        }
        return b;
      };
      return (...S) => (s ? (l = !0, r = S) : s = w(S).catch((b) => {
        throw console.error("makeDebouncedFunc", b), b;
      }).finally(() => {
        s = void 0;
      }), s);
    };
    var Ar;
    (function(e) {
      e.Home = "/home", e.Browser = "/browser", e.Enterprise = "/enterprise", e.Provider = "/provider", e.Storefront = "/storefront", e.Dock = "/dock";
    })(Ar || (Ar = {}));
    function vo(e, n) {
      return async (r, ...s) => {
        e.has(r) && e.get(r).forEach((l) => l(...s)), n && await n({ event: r, payload: s });
      };
    }
    function qa(e, n) {
      return n && n((r) => {
        const { event: s, payload: l } = r;
        e.has(s) && e.get(s).forEach((w) => w(...l));
      }), (r, s) => {
        e.has(r) || e.set(r, /* @__PURE__ */ new Set()), e.get(r).add(s);
      };
    }
    function Ja(e) {
      return (n, r) => {
        e.has(n) || e.set(n, /* @__PURE__ */ new Set());
        const s = e.get(n), l = (...w) => {
          r(...w), s.delete(l);
        };
        s.add(l);
      };
    }
    function ko(e) {
      return (n, r) => {
        e.has(n) && e.get(n).delete(r);
      };
    }
    const Er = { name: ue.BrowserMenu, alwaysOnTop: !0, autoShow: !0, frame: !1, resizable: !1, backgroundColor: "#2f3136", smallWindow: !0, showTaskbarIcon: !1, backgroundThrottling: !1, saveWindowState: !1 };
    function Ma(e) {
      const n = { ...Er, ...e };
      return n.url = function(r, s) {
        if (!kt) throw new Error("resolveAbsolutePath can only be used in a window");
        const l = window.location;
        if (/^(?:[a-z]+:)?\/\//i.test(r)) return r;
        const w = `${l.protocol}//${l.hostname}`;
        return new URL(r, w).href;
      }(n.url ?? ""), n;
    }
    const Ya = function(e) {
      const n = /* @__PURE__ */ new Map();
      return { emit: vo(n, (r) => Be && fin.InterApplicationBus.publish(e, r)), addListener: qa(n, (r) => Be && fin.InterApplicationBus.subscribe({ uuid: fin.me.uuid }, e, r)), addListenerWithUUID: (r) => qa(n, (s) => Be && fin.InterApplicationBus.subscribe({ uuid: r }, e, s)), removeListener: ko(n), once: Ja(n) };
    }("window.menu"), ua = (e, n) => fin.Window.wrapSync(e).updateOptions({ opacity: n }), _r = (e) => Ya.emit("response", e), Xr = Ir(() => Lt().getChildWindows(), 500), la = /* @__PURE__ */ new Map();
    async function So(e, n, r) {
      var b, N;
      const s = Ma(e), l = await wr(fin.me.identity), w = await St(fin.me.identity) === xe.Dark, S = l == null ? void 0 : l.theme;
      return s.backgroundColor = ((N = (b = S == null ? void 0 : S[w ? xe.Dark : xe.Light]) == null ? void 0 : b.palette) == null ? void 0 : N.inputBackground) || s.backgroundColor, la.has(s.name) ? la.get(s.name) : new Promise((V) => {
        Ya.once("ready", async (Y) => {
          if (Y.name === s.name) {
            const ae = await la.get(s.name);
            s.preventBlur || ae.once("blurred", async () => {
              if (ua(Y, 0), ae.hide(), _r({ name: s.name, data: { actionName: "Cancel" } }), le = ae.identity.name, [ue.BrowserSaveMenu, ue.DockSaveWorkspaceMenu, ue.DesktopSignalsModal].includes(le)) {
                const Pe = await ae.getOptions();
                Pe.customContext !== "submitting" && Pe.customContext !== "error" && ae.close();
              } else ae.identity.name.startsWith(ue.BrowserMenu) && ae.close();
              var le;
            }), setTimeout(async () => {
              await ua(Y, 1), (await fin.Window.wrapSync(Y).getOptions()).opacity !== 1 && ua(Y, 1);
            }), V(ae);
          }
        });
        const X = (async () => {
          const Y = await fin.Platform.getCurrentSync().createWindow(Dn({ ...s, opacity: 0, url: n || s.url, defaultLeft: r == null ? void 0 : r.left, defaultTop: r == null ? void 0 : r.top, defaultWidth: r == null ? void 0 : r.width, defaultHeight: r == null ? void 0 : r.height, workspacePlatform: { preventBlur: e.preventBlur } }, !0));
          return Y.once("closed", () => {
            la.delete(s.name);
          }), Y;
        })();
        la.set(s.name, X);
      });
    }
    async function Tr(e, n) {
      const r = Ma(e), s = { top: r.top, left: r.left, width: r.defaultWidth || r.width, height: r.defaultHeight || r.height };
      return n.set("parentName", fin.Window.getCurrentSync().identity.name), { name: r.name, bounds: s, route: `${r.url}#${n.toString()}` };
    }
    async function Ia({ options: e, parameters: n }) {
      const r = n ?? new URLSearchParams(), s = Ma(e), { name: l, modalParentIdentity: w } = s;
      if (!r.has("isEnterprise")) {
        const b = `${await (async (N) => (br || (br = await Et(N)), br))(w)}`;
        r.set("isEnterprise", b);
      }
      let S = await async function(b) {
        return (await Xr()).find((N) => N.identity.name === b);
      }(l);
      if (S) await async function(b, N) {
        const { name: V, bounds: X, route: Y } = await Tr(b, N), ae = { uuid: fin.me.identity.uuid, name: V }, le = fin.Window.wrapSync(ae);
        await Promise.all([le.hide(), ua(ae, 0), le.setBounds(X)]), b.preventBlur || le.once("blurred", () => {
          ua(ae, 0), le.hide(), _r({ name: ae.name, data: { actionName: "Cancel" } });
        }), Ya.emit("update", V, X, Y), await _r({ name: V, data: { actionName: "Cancel" } });
      }(s, r);
      else {
        const { route: b, bounds: N } = await Tr(e, r);
        S = await So({ ...s }, b, N);
      }
      return S;
    }
    const Zn = async ({ options: e, content: n, parameters: r }) => {
      var S;
      const s = r ?? new URLSearchParams();
      s.set("content", JSON.stringify({ ...n, invocationId: an() }));
      const l = { ...e, name: `${e.name}--${((S = e.modalParentIdentity) == null ? void 0 : S.name) ?? ""}` }, w = await Ia({ options: l, parameters: s });
      return new Promise((b) => {
        Ya.once("response", async (N) => {
          N.name === l.name && (b({ data: N.data }), l != null && l.closeOnResponse && w.close());
        });
      });
    };
    let Za;
    async function Po(e) {
      return (await (Za || (Za = cn(`${typeof fin < "u" && fin.me.identity.uuid}-enterprise-modal`)()), Za)).dispatch(xa.SendUpdateVersionModalResponse, e);
    }
    const eo = async (e) => {
      const n = g(e), r = await n.getBounds(), s = Kt(r), l = tn(s, { height: 240, width: 432 });
      return Ia({ options: { smallWindow: !0, saveWindowState: !1, showTaskbarIcon: !0, includeInSnapshots: !1, workspacePlatform: { windowType: "enterprise" }, resizable: !1, name: ue.DesktopSignalsModal, url: await qt() + C.DesktopSignalsModal, defaultWidth: 432, defaultHeight: 240, preventBlur: !1, ...l }, parameters: new URLSearchParams({ title: "Desktop Signals Modal" }) });
    }, xo = (e) => ({ createPage: async (n) => (await qe(e)).dispatch(fe.CreateSavedPageInternal, n), deletePage: async (n) => (await qe(e)).dispatch(fe.DeleteSavedPageInternal, n), updatePage: async (n) => (await qe(e)).dispatch(fe.UpdateSavedPageInternal, n), getPage: async (n) => (await qe(e)).dispatch(fe.GetSavedPage, n), getPages: async (n) => (await qe(e)).dispatch(fe.GetSavedPages, n), savePage: async (n) => (await qe(e)).dispatch(fe.SavePage, n), createWorkspace: async (n) => (await Fe(e)).dispatch(fe.CreateSavedWorkspace, n), deleteWorkspace: async (n) => {
      const r = c(), s = await r.getCurrentWorkspace();
      if (s.workspaceId === n) throw new Error(`Cannot delete current active workspace ${s.title}`);
      return (await Fe(e)).dispatch(fe.DeleteSavedWorkspace, n);
    }, updateWorkspace: async (n) => (await Fe(e)).dispatch(fe.UpdateSavedWorkspace, n), getWorkspace: async (n) => (await Fe(e)).dispatch(fe.GetSavedWorkspace, n), getWorkspaces: async (n) => (await Fe(e)).dispatch(fe.GetSavedWorkspaces, n), getWorkspacesMetadata: async (n) => (await Fe(e)).dispatch(fe.GetSavedWorkspacesMetadata, n), saveWorkspace: async (n) => (await Fe(e)).dispatch(fe.SaveWorkspace, n), getDockProviderConfig: async (n) => (await Fe(e)).dispatch(fe.GetDockProviderConfig, n), saveDockProviderConfig: async (n) => (await Fe(e)).dispatch(fe.SaveDockProviderConfig, n) });
    var da;
    (function(e) {
      e.UpdatePlatformThemeScheme = "update-platform-theme-scheme";
    })(da || (da = {}));
    const Rn = cn("of-workspace-notifications-sync"), Nt = xe.Dark, Aa = (e) => Object.entries(e).reduce((n, [r, s]) => `${n}--workspace-palette-${r}: ${s};`, ""), hn = (e, n) => {
      const r = !!e.contentBackground5 && e.contentBackground5 !== "#000000", s = !!e.contentBackground4 && e.contentBackground4 !== "#000000", l = Mn(e.textDefault), w = Mn(e.textInactive), S = l.rgb, b = w.rgb, N = l.alpha ? parseFloat(l.alpha.toString()) : 1, V = w.alpha ? parseFloat(w.alpha.toString()) : 1;
      return { dockExpandedContainerBorderColor: r ? e.contentBackground5 : e.background4, dockExpandedContainerBorderRadius: r && n ? "0" : "10px", dockExpandedContainerBackground: s ? e.contentBackground4 : e.background1, fillerBackgroundColor: s ? e.contentBackground4 : "inherit", dockCompanionContainerBackground: s ? e.contentBackground4 : "inherit", dockComponentContainerBackground: r ? e.contentBackground5 : e.background5, styledDropdownActiveBackground: `${r ? e.contentBackground5 : e.background4}`, contentMenuWrapperInternalDivBorderColor: r ? e.contentBackground5 : e.background5, contentMenuItemContainerActiveBackground: r ? e.contentBackground5 : e.background3, contentMenuItemContainerHoverBackground: r ? e.contentBackground5 : e.background2, contentMenuHeaderBorderColor: r ? e.contentBackground5 : e.background5, dockCompanionSeparatorBorderColor: r ? e.contentBackground5 : e.background3, dockComponentContainerBorderColor: r ? e.contentBackground5 : e.background5, companionDockButtonActiveBackground: r ? e.contentBackground5 : e.background4, companionDockButtonHoverBackground: r ? e.contentBackground5 : e.background4, "computed-scrollbar-thumb-alpha": N, "computed-scrollbar-track-alpha": V, "scrollbar-thumb-rgb": S, "scrollbar-track-rgb": b };
    }, to = (e, n, r) => ({ selectedTab: n === "dark" ? e.background3 : e.background1, ...hn(e, r) }), Qn = new class {
      constructor(e) {
        this.providerStorage = e, this.getVarsByScheme = (n) => n === "dark" ? this.darkPaletteVars : this.lightPaletteVars, this.setWorkspaceStorage = (n) => {
          this.workspaceStorage = n;
        }, this.trySynchronizeWorkspaceStorage = () => {
          if (this.workspaceStorage && this.hasUserPreference()) {
            const n = this.getScheme();
            if (this.workspaceStorage.setItem(Ke.SelectedColorScheme, n), this.darkPaletteVars && this.lightPaletteVars) if (n === "dark" || n === "light") this.workspaceStorage.setItem(Ke.ThemePaletteSheet, `:root{${this.getVarsByScheme(n)}}`);
            else {
              const r = `@media (prefers-color-scheme: dark){:root {${this.getVarsByScheme("dark")}}}`, s = `@media (prefers-color-scheme: light){:root{${this.getVarsByScheme("light")}}}`;
              this.workspaceStorage.setItem(Ke.ThemePaletteSheet, `${s}${r}`);
            }
          }
        }, this.setPalettes = async ({ light: n, dark: r }, s) => {
          this.lightPaletteVars = Aa({ ...n, ...to(n, "light", s) }), this.darkPaletteVars = Aa({ ...r, ...to(r, "dark", s) });
        };
      }
      hasUserPreference() {
        return this.providerStorage.getItem(Ke.SelectedColorScheme) !== null;
      }
      setScheme(e) {
        this.providerStorage.setItem(Ke.SelectedColorScheme, e);
      }
      setThemeDefaultScheme(e) {
        const n = Object.values(xe);
        n.includes(e) ? this.providerStorage.setItem(Ke.ThemePaletteDefaultScheme, e) : console.warn(`Invalid theme default scheme '${e}'. Must be one of: ${n.join(", ")}. Ignoring default.`);
      }
      getScheme() {
        const e = this.providerStorage.getItem(Ke.SelectedColorScheme), n = this.providerStorage.getItem(Ke.ThemePaletteDefaultScheme);
        return e !== null ? e : n ?? Nt;
      }
    }(y), Qa = () => Qn, Xn = (e) => ({ getThemes: async () => (await Fe(e)).dispatch(fe.GetThemes, void 0), setSelectedScheme: async (n) => (await Fe(e)).dispatch(fe.SetSelectedScheme, n), getSelectedScheme: async () => (await Fe(e)).dispatch(fe.GetSelectedScheme, void 0) }), Rr = async (e) => {
      await (await Oa()).dispatch("set-selected-scheme", e);
    }, pa = async (e) => {
      await (await Rn()).dispatch(da.UpdatePlatformThemeScheme, { scheme: e });
    }, Vn = async (e) => {
      const n = await He();
      return Promise.all(n.map(async (r) => {
        await (await vt(r.identity)).dispatch(wt.SetSelectedScheme, e);
      }));
    }, no = async (e) => {
      const n = await ze();
      return Promise.all(n.map(async (r) => {
        await (await vt(r.identity)).dispatch(wt.SetSelectedScheme, e);
      }));
    }, t = async (e) => {
      try {
        const n = Qa();
        n.setScheme(e), await Promise.all([await n.trySynchronizeWorkspaceStorage(), pa(e), Vn(e), no(e), Rr(e)]);
      } catch (n) {
        console.error("failed to set the selected scheme: ", n);
      }
    }, a = () => {
      try {
        return Qa().getScheme();
      } catch (e) {
        console.error("failed to get the selected scheme: ", e);
      }
    }, i = (e) => {
      const n = fin.Platform.wrapSync(e);
      let r;
      return Object.assign(n, { applySnapshot: async (s, l) => {
        if (typeof s != "string" && !(s != null && s.windows)) throw new Error("Not a valid browser snapshot");
        return fin.Platform.wrapSync(e).applySnapshot(s, l);
      }, getSnapshot: () => fin.Platform.wrapSync(e).getSnapshot().then((s) => s), getViewSnapshot: (s) => fin.Platform.wrapSync(e).getViewSnapshot(s), createView: (s, l, w) => fin.Platform.wrapSync(e).createView(s, l, w), launchApp: async (s) => (console.warn("launchApp method is deprecated. It is recommended to use createView - https://developers.openfin.co/of-docs/docs/platform-getting-started#add-a-view-to-an-existing-window or  createWindow - https://developers.openfin.co/of-docs/docs/platform-getting-started#create-a-platform-window instead."), s.target || (s.target = { uuid: ht, name: je, entityType: R || "unknown" }), (await Fe(e)).dispatch(fe.LaunchApp, s)), _invokeCustomAction: async (s, l) => {
        const w = await Fe(e), S = { actionId: s, payload: { ...l, callerType: l.callerType || ut.API } };
        return w.dispatch(fe.InvokeCustomActionInternal, S);
      }, _requestQuitPlatformDialog: async (s) => (await Fe(e)).dispatch(fe.RequestQuitPlatformDialogInternal, s), _showUpdateVersionModal: async (s) => (await Fe(e)).dispatch(fe.ShowUpdateVersionModalInternal, s), getCurrentWorkspace: async (s) => (await Fe(e)).dispatch(fe.GetCurrentWorkspace, s), applyWorkspace: async (s, l) => (await Fe(e)).dispatch(fe.ApplyWorkspace, { ...s, options: l }), restoreLastSavedWorkspace: async (s) => (await Fe(e)).dispatch(fe.RestoreLastSavedWorkspaceInternal, s), setActiveWorkspace: async (s) => (await Fe(e)).dispatch(fe.SetActiveWorkspace, s), getLanguage: async () => (await Fe(e)).dispatch(fe.GetLanguage), _getLanguageResources: async () => (await Fe(e)).dispatch(fe.GetLanguageResourcesInternal), setLanguage: async (s) => (await Fe(e)).dispatch(fe.SetLanguage, s), _raiseAnalytics: async (s) => {
        var l;
        if (r || (r = await In(e)), typeof r == "object" && ((l = r == null ? void 0 : r.analytics) == null ? void 0 : l.isSupported))
          return (await Fe(e)).dispatch(fe.Analytics, s);
        e.uuid;
      }, getNotificationsConfig: async () => (await Fe(e)).dispatch(fe.GetNotificationsConfig), _refreshBookmarksInternal: async () => (await Fe(e)).dispatch(fe.RefreshBookmarksInternal), _launchBookmarkInternal: async (s) => (await Fe(e)).dispatch(fe.LaunchBookmarkInternal, s), _updateDockFavoritesInternal: async (s) => (await Fe(e)).dispatch(fe.UpdateDockFavoritesInternal, s), _updateContentMenuInternal: async (s) => (await Fe(e)).dispatch(fe.UpdateContentMenuInternal, s), _launchDockEntryInternal: async (s) => (await Fe(e)).dispatch(fe.LaunchDockEntryInternal, s), _setDockFavoritesInternal: async (s) => (await Fe(e)).dispatch(fe.SetDockFavoritesOrderInternal, s), _setDefaultDockButtonsOrderInternal: async (s) => (await Fe(e)).dispatch(fe.SetDefaultDockButtonsOrderInternal, s), _removeDockFavoriteInternal: async (s) => (await Fe(e)).dispatch(fe.RemoveDockFavoriteInternal, s), _addDockFavoriteInternal: async (s) => (await Fe(e)).dispatch(fe.AddDockFavoriteInternal, s), _navigateContentMenuInternal: async (s) => (await Fe(e)).dispatch(fe.NavigateContentMenuInternal, s), _openDockWorkspacesContextMenuInternal: async () => (await Fe(e)).dispatch(fe.GetDockWorkspacesContextMenuInternal), _handleDockWorkspacesMenuResponseInternal: async (s) => (await Fe(e)).dispatch(fe.HandleDockWorkspacesMenuResponseInternal, s), _focusAndExpandSearchInternal: async () => (await Fe(e)).dispatch(fe.FocusAndExpandSearchInternal), _showAboutPagePopup: async (s) => (async (l) => {
        const w = new URLSearchParams({ ...l, title: "About" }), S = await Vt(fin.me.identity), b = l.copyrightMessage ? 320 : 286, N = tn(S, { height: b, width: 360 });
        return Ia({ options: { frame: !0, smallWindow: !0, saveWindowState: !1, showTaskbarIcon: !0, includeInSnapshots: !1, workspacePlatform: { windowType: "enterprise" }, resizable: !1, name: ue.AboutPageWindow, url: await qt() + C.EnterpriseAboutPage, defaultWidth: 360, defaultHeight: b, preventBlur: !0, ...N }, parameters: w });
      })(s), Theme: Xn(e), Browser: za(e), Storage: xo(e) });
    }, c = () => i(fin.me.identity), p = { contextMenuOptions: { enabled: !0, template: ["spellCheck", "separator", "print", "separator", "cut", "copy", "paste", "undo", "redo", "selectAll", "inspect", "reload"] }, downloadShelf: { enabled: !0 } };
    function h(e, n) {
      return _n({}, p, n, e);
    }
    const v = "internal-generated-view-", x = (e, n) => e.content ? { ...e, content: e.content.map((r) => x(r, n)) } : { ...e, componentState: n(e.componentState) }, A = (e, n) => {
      var s;
      return r = h(e, n), { ...r, name: r.name ? r.name : `internal-generated-view-${an()}`, _internalWorkspaceData: { ...r._internalWorkspaceData, viewIdentifier: ((s = r._internalWorkspaceData) == null ? void 0 : s.viewIdentifier) || an() } };
      var r;
    }, E = (e) => ({ ...e, name: void 0 }), F = (e) => {
      const n = { ...e };
      return x(n, E);
    }, M = (e) => {
      const n = { ...e };
      return x(n, (r) => r.name && r.name.startsWith(v) ? E(r) : r);
    }, B = (e) => {
      const n = [];
      return (e && Array.isArray(e) ? e : []).forEach((r) => {
        if (r.type === "component") return n.push(r.componentState);
        const s = B(r.content);
        n.push(...s);
      }), n;
    }, _ = async (e, n, r = k) => {
      let s;
      return await Ee(r) && (s = (await g(r).getOptions()).layout || { settings: {} }), { ...s, content: [{ type: "stack", content: [{ type: "component", componentName: "view", componentState: { title: e, url: n } }] }] };
    }, O = (e, n) => {
      const r = B(n.content);
      return { ...x(e, (s) => {
        const l = r.find((S) => {
          var b, N;
          return ((b = S._internalWorkspaceData) == null ? void 0 : b.viewIdentifier) === ((N = s._internalWorkspaceData) == null ? void 0 : N.viewIdentifier);
        }), w = l ? l.isClosable : s.isClosable;
        return { ...s, isClosable: w };
      }), settings: n.settings };
    }, D = (e) => e ? B(e).length : 0, L = (La()(async (e) => {
      try {
        if (!e || !e.layoutContainerKey) return;
        const n = await (async (l) => fin.Platform.Layout.wrapSync({ ...fin.me.identity, layoutName: l }).getConfig())(e.layoutContainerKey), r = n.content ? B(n.content) : [], s = r.length;
        s > 1 ? (async (l) => {
          if (l.attachedPageType !== "multiView") {
            const w = await c().Browser.getUniquePageTitle();
            c().Browser.wrapSync(k).updatePage({ pageId: l.pageId, page: { title: l.title ?? w, singleViewName: null, attachedPageType: "multiView" } });
          }
        })(e) : s === 1 && (async (l, w) => {
          const S = c().Browser.wrapSync(k);
          if (l.attachedPageType !== "singleView") {
            const b = await Pa(l);
            delete b.layout, delete b.pageId;
            const N = fin.View.wrapSync({ uuid: k.uuid, name: w }), V = await N.getInfo(), X = { ...b, title: null, singleViewName: w, hasUnsavedChanges: !1, attachedPageType: "singleView", pageIcon: V.favicons[0] };
            await S.updatePage({ pageId: l.pageId, page: X });
          }
        })(e, r[0].name), await (async (l, w) => {
          const S = Cr({ ...k, layoutName: l.layoutContainerKey }), b = await S.isShowingTabs();
          w > 1 ? b || await S.show() : w === 1 && b && await S.hide({ settings: { reorderEnabled: !0 } });
        })(e, s);
      } catch {
      }
    }, 50, { leading: !1, trailing: !0 }), fd), K = Nd;
    var H = u.n(K);
    const Q = JSON.parse('{"contextMenu.newWindow":"新建窗口","contextMenu.newPage":"新建页面","contextMenu.restore":"还原到上次保存的更改","contextMenu.switchWorkspace":"切换工作区","contextMenu.manageDesktopSignals":"Manage Desktop Signals","contextMenu.appearance":"外观","contextMenu.saveWorkspace":"保存工作区","contextMenu.saveWorkspaceAs":"将工作区另存为...","contextMenu.renameWorkspace":"重命名工作区","contextMenu.deleteWorkspace":"删除工作区","contextMenu.downloads":"下载","contextMenu.savePage":"保存页面","contextMenu.savePageAs":"将页面另存为...","contextMenu.print":"打印...","contextMenu.printScreen":"打印屏幕","contextMenu.closeWindow":"关闭窗口","contextMenu.openStorefront":"开放式店面","contextMenu.quitPlatform":"退出平台","contextMenu.newView":"新建视图","contextMenu.openView":"使用默认 Web 浏览器打开视图","contextMenu.openViews":"使用默认 Web 浏览器打开视图","contextMenu.reload":"Reload CN","contextMenu.reloadView":"重新加载视图","contextMenu.reloadViews":"重新加载视图","contextMenu.duplicate":"Duplicate CN","contextMenu.duplicateView":"复制视图","contextMenu.duplicateViews":"复制视图","contextMenu.addView":"将视图添加到频道","contextMenu.addViews":"将视图添加到频道","contextMenu.removeView":"从频道中移除视图","contextMenu.removeViews":"从频道中移除视图","contextMenu.closeView":"关闭视图","contextMenu.closeViews":"关闭视图","contextMenu.closeTab":"Close Tab CN","contextMenu.duplicatePage":"复制页面","contextMenu.submenu.print":"打印","contextMenu.submenu.printAll":"全部打印","saveMenu.saveWorkspaceAs":"将工作区另存为","saveMenu.savePageAs":"将页面另存为","saveModal.enterValue":"Please enter a value CN","saveModal.alreadyExists":"{{title}} 已存在。","saveModal.pleaseEnterValidName":"请输入有效名称","saveModal.renamePage":"重新命名页面","saveModal.closePage":"关闭页面","saveModal.discardChanges":"放弃更改","saveModal.discardAll":"全部放弃","saveModal.saveAll":"全部保存","saveModal.savePagesCount":"关闭前保存 ({{count}}) 个页面？","defaultPageTitle":"Untitled Page CN","enterpriseDefaultPageTitle":"Untitled Supertab CN","addNewPage":"添加新页面","addNewTab":"添加新选项卡","addNewView":"新建视图","restoreModal":"您确定要还原到上次保存的更改吗？","modal.discardWarning":"任何未保存的更改都将丢失","modal.discardPageWarning":"对此页的任何未保存的更改都将丢失。","modal.saveChangesPrompt":"关闭前保存更改？","modal.pageClose":"关闭页面","switchWorkspaceModal":"您确定要切换到 {{workspace}} 吗？","switchWorkspaceModal.warning":"任何未保存的更改都将丢失","deleteWorkspaceModal":"您确定要永久删除此工作区吗？","replaceWorkspaceModal.warning":"名称为 {{workspace}} 的工作区已存在。您是否要替换它？","replaceWorkspaceModal.warning.body":"已存在同名的工作区。替换它将覆盖其当前内容。","replaceWorkspaceModal.replace":"替换","closePlatform":"关闭平台","closePlatform.workspace":"关闭 {{workspace}} 平台","closePlatform.warning":"关闭平台将关闭所有工作区、应用或任何正在运行的进程。","back":"后退","forward":"前进","reload":"重新加载","green":"绿色","purple":"紫色","orange":"橙色","red":"红色","pink":"粉红色","yellow":"黄色","theme.light":"浅色","theme.dark":"深色","theme.system":"与操作系统设置同步","toolbar.hideTabs":"隐藏选项卡","toolbar.showTabs":"显示选项卡","toolbar.lock":"锁定","toolbar.unlock":"解锁","toolbar.colorLinking":"颜色链接","toolbar.changeLayout":"更改布局","toolbar.saveMenu":"保存菜单","toolbar.maximizeWindow":"最大化窗口","toolbar.restoreWindow":"还原窗口","toolbar.minimizeWindow":"最小化窗口","changeLayout.fullWidth":"全宽","changeLayout.columns":"列数","changeLayout.Rows":"行数","changeLayout.Grid":"网格","successIndicator.workspaceSwitched":"已切换工作区","successIndicator.hidden":"选项卡已隐藏","successIndicator.shown":"选项卡已显示","successIndicator.locked":"页面已锁定","successIndicator.unlocked":"页面已解锁","successIndicator.workspaceSaved":"工作区已保存","successIndicator.workspaceSavedAs":"工作区已另存为 {{workspace}}","successIndicator.workspaceRenamed":"工作区已重命名","successIndicator.pageSaved":"页面已保存","successIndicator.pageHasBeenSaved":"\\"{{title}}\\" has been saved. CN","successIndicator.pageCopySaved":"页面已另存为 {{title}}","successIndicator.pageRenamed":"页面已重命名","successIndicator.contextGroupApplied":"已应用上下文组","successIndicator.namedContextGroupApplied":"已应用 {{colorName}} 上下文组","successIndicator.viewRemoved":"从上下文组中移除视图","successIndicator.viewsRemoved":"从上下文组中移除视图","successIndicator.layoutApplied":"已应用 {{layoutName}} 布局","successIndicator.workspaceDeleted":"工作区已删除","errorIndicator.pageSaveFailed":"页面保存失败","errorIndicator.workspaceSaveFailed":"工作区保存失败","errorIndicator.failedToDuplicatePage":"复制页面失败","infoIndicator.colorLinkAttempt":"我们尝试对此选项卡进行颜色链接，但网站/内容所有者尚未启用该功能","global.cancel":"取消","global.confirm":"确认","global.save":"保存","global.delete":"Delete CN","appResults.header":"Featured Content CN","recentlyClosed.header":"Recently Closed CN","landingPage.subheader":"Apps and websites selected by an admin will show here CN","aria.openBrowser":"打开浏览器菜单","aria.browserTabs":"浏览器选项卡","aria.viewTab":"查看 {{title}} 的选项卡","aria.closePage":"关闭 {{title}} 的页面选项卡按钮","aria.closeTab":"关闭选项卡 {{title}}","aria.title":"标题","aria.closeContextGroup":"使用转义关闭上下文组选择对话框","aria.colorLinking":"显示或隐藏颜色链接","aria.applyColorLinking":"请选择一个视图以应用颜色链接","aria.assignColorLinkingCurrentView":"分配给 {{name}} 上下文组的当前视图","aria.assignColorLinkingCurrentViews":"分配给 {{name}} 上下文组的当前视图","aria.setColorLinkingActiveView":"将活动视图设置为 {{name}} 上下文组","aria.setColorLinkingActiveViews":"将活动视图设置为 {{name}} 上下文组","aria.escapeLayoutDialog":"使用转义关闭更改布局对话框","global.supertab":"Supertab CN","global.tab":"Tab CN","bookmarks.editBookmark":"Edit Bookmark CN","bookmarks.bookmarkAdded":"Bookmark added CN","bookmarks.done":"Done CN","bookmarks.remove":"Remove CN","bookmarks.bookmarksPanel":"Bookmarks Panel CN","bookmarks.bookmarks":"Bookmarks CN","bookmarks.allBookmarks":"All Bookmarks CN","bookmarks.favorites":"Favorites CN","bookmarks.searchBookmarks":"Search Bookmarks CN","bookmarks.clearSearchInput":"Clear Search Input CN","bookmarks.createFolder":"Create New Folder CN","bookmarks.exitFolder":"Exit Folder CN","bookmarks.newFolder":"New Folder CN","bookmarks.namedFolder":"{{name}} Folder CN","bookmarks.bookmarkSettings":"{{name}} Bookmark Settings CN","bookmarks.folderSettings":"{{name}} Folder Settings CN","bookmarks.noResultsFound":"No results found CN","bookmarks.noResultsFoundSubtext":"There are no bookmarks that match your search CN","bookmarks.nothingToShow":"Nothing to show yet CN","bookmarks.nothingToShowSubtext":"Add a bookmark to this folder CN","bookmarks.resultsFoundIn":"Results found in {{name}} CN","bookmarks.resultsInOtherFolders":"Results found in other folders CN","bookmarks.allResultsFoundIn":"All results found in CN","bookmarks.editName":"Edit Name CN","bookmarks.move":"Move CN","bookmarks.bookmarkAddedTitle":"Bookmark Added CN","bookmarks.bookmarkAddedToFolder":"Your bookmark was added to \\"{{folderName}}\\" CN","bookmarks.bookmarkEditedTitle":"Bookmark Edited CN","enterpriseContextMenu.saveSupertab":"Save Supertab CN","enterpriseContextMenu.saveSupertabAs":"Save Supertab As... CN","enterpriseContextMenu.duplicate":"Duplicate CN","enterpriseContextMenu.deleteSupertab":"Delete Supertab CN","enterpriseContextMenu.newTab":"New Tab CN","enterpriseSaveMenu.saveSupertabAs":"Save Supertab As CN","enterpriseSaveModal":{"saveSupertabCount_one":"Save {{count}} Supertab before closing? CN","saveSupertabCount_other":"Save {{count}} Supertabs before closing? CN"},"enterpriseSaveModal.renameSupertab":"Rename CN","enterpriseSaveModal.unsavedChanges":"You have unsaved changes in this Tab. CN","enterpriseSaveModal.closeTab":"Close Tab CN","enterpriseSaveModal.closeSupertab":"Close Supertab CN","enterpriseModal.discardSupertabWarning":"Any unsaved changes will be lost. CN","enterpriseDeleteModal.deleteSupertab":"Delete the \\"{{title}}\\" Supertab? CN","enterpriseDeleteModal.deleteSupertabWarning":"Are you sure you want to delete this Supertab? This action cannot be undone and is permanent. CN","enterpriseSuccessIndicator.supertabSaved":"Supertab Saved CN","enterpriseSuccessIndicator.supertabHasBeenSaved":"\\"{{title}}\\" Supertab has been saved. CN","enterpriseSuccessIndicator.supertabDeleted":"Supertab Deleted CN","enterpriseSuccessIndicator.supertabHasBeenDeleted":"\\"{{title}}\\" Supertab has been deleted. CN","enterpriseErrorIndicator.failedToDuplicateTab":"Failed to duplicate Tab CN","enterpriseErrorIndicator.failedToDuplicateSupertab":"Failed to duplicate Supertab CN","enterpriseCommandBar.switchToSupertab":"Switch to Supertab CN","enterpriseCommandBar.goTo":"Go to {{type}} CN","enterpriseCommandBar.viewMore":"View More CN","sidePanel.aiCenter":"AI Center CN","sidePanel.newChat":"New Chat CN","sidePanel.toggleSidePanel":"Toggle Side Panel CN","sidePanel.closeSidePanel":"Close Side Panel CN","sidePanel.openAiCenter":"Open AI Center CN","contextMenu.quitEnterpriseBrowser":"Quit CN","dock.removeFavorite":"Remove CN"}'), re = JSON.parse('{"contextMenu.newWindow":"新視窗","contextMenu.newPage":"新頁面","contextMenu.restore":"還原到上次儲存的變更","contextMenu.switchWorkspace":"切換工作空間","contextMenu.manageDesktopSignals":"Manage Desktop Signals","contextMenu.appearance":"外觀","contextMenu.saveWorkspace":"儲存工作空間","contextMenu.saveWorkspaceAs":"將工作空間另存為...","contextMenu.renameWorkspace":"重新命名工作空間","contextMenu.deleteWorkspace":"刪除工作空間","contextMenu.downloads":"下載","contextMenu.savePage":"儲存頁面","contextMenu.savePageAs":"將頁面另存為...","contextMenu.print":"列印...","contextMenu.printScreen":"擷取畫面","contextMenu.closeWindow":"關閉視窗","contextMenu.openStorefront":"打開 Storefront","contextMenu.quitPlatform":"退出平台","contextMenu.newView":"新視圖","contextMenu.openView":"使用預設網頁瀏覽器打開視圖","contextMenu.openViews":"使用預設網頁瀏覽器打開視圖","contextMenu.reload":"Reload ZH","contextMenu.reloadView":"重新載入視圖","contextMenu.reloadViews":"重新載入視圖","contextMenu.duplicate":"Duplicate ZH","contextMenu.duplicateView":"複寫視圖","contextMenu.duplicateViews":"複寫視圖","contextMenu.addView":"將視圖新增至頻道","contextMenu.addViews":"將視圖新增至頻道","contextMenu.removeView":"從頻道中移除視圖","contextMenu.removeViews":"從頻道中移除視圖","contextMenu.closeView":"關閉視圖","contextMenu.closeViews":"關閉視圖","contextMenu.closeTab":"Close Tab ZH","contextMenu.duplicatePage":"複寫頁面","contextMenu.submenu.print":"列印","contextMenu.submenu.printAll":"列印全部","saveMenu.saveWorkspaceAs":"將工作空間另存為","saveMenu.savePageAs":"頁面另存為","saveModal.enterValue":"Please enter a value ZH","saveModal.alreadyExists":"{{title}} 已經存在。","saveModal.pleaseEnterValidName":"請輸入一個有效的名稱","saveModal.renamePage":"重新命名頁面","saveModal.closePage":"關閉頁面","saveModal.discardChanges":"捨棄變更","saveModal.discardAll":"全部捨棄","saveModal.saveAll":"儲存全部","saveModal.savePagesCount":"要先儲存 ({{count}}) 個頁面再關閉嗎？","defaultPageTitle":"Untitled Page ZH","enterpriseDefaultPageTitle":"Untitled Supertab ZH","addNewPage":"新增新頁面","addNewTab":"新增新索引標籤","addNewView":"新視圖","restoreModal":"您確定要還原到上次儲存的變更嗎？","modal.discardWarning":"任何未儲存的變更都將被捨棄","modal.discardPageWarning":"在此頁面任何未儲存的變更都將遺失。","modal.saveChangesPrompt":"要先儲存變更再關閉嗎？","modal.pageClose":"頁面關閉","switchWorkspaceModal":"您確定要切換到 {{workspace}}？","switchWorkspaceModal.warning":"任何未儲存的變更都將被捨棄","deleteWorkspaceModal":"您確定要永久刪除此工作空間嗎？","replaceWorkspaceModal.warning":"具有名稱 {{workspace}} 的工作空間已經存在。你要更換它嗎？","replaceWorkspaceModal.warning.body":"相同名稱的工作空間已經存在。更換它後，將會覆蓋目前內容。","replaceWorkspaceModal.replace":"更換","closePlatform":"關閉平台","closePlatform.workspace":"關閉 {{workspace}} 平台","closePlatform.warning":"關閉平台後，將關閉正在執行的任何工作空間、APP 或流程。","back":"上一頁","forward":"下一頁","reload":"重新載入","green":"綠","purple":"紫","orange":"橘","red":"紅色","pink":"粉紅","yellow":"黃","theme.light":"淺","theme.dark":"深","theme.system":"與 OS 設定同步","toolbar.hideTabs":"隱藏索引標籤","toolbar.showTabs":"顯示索引標籤","toolbar.lock":"上鎖","toolbar.unlock":"解鎖","toolbar.colorLinking":"顏色連結","toolbar.changeLayout":"變更版面","toolbar.saveMenu":"儲存選單","toolbar.maximizeWindow":"最大化視窗","toolbar.restoreWindow":"還原視窗","toolbar.minimizeWindow":"最小化視窗","changeLayout.fullWidth":"全螢幕寬度","changeLayout.columns":"行","changeLayout.Rows":"列","changeLayout.Grid":"網格","successIndicator.workspaceSwitched":"工作空間已切換","successIndicator.hidden":"索引標籤已隱藏","successIndicator.shown":"索引標籤已顯示","successIndicator.locked":"頁面已上鎖","successIndicator.unlocked":"頁面已解鎖","successIndicator.workspaceSaved":"工作空間已儲存","successIndicator.workspaceSavedAs":"工作空間已另存為 {{workspace}}","successIndicator.workspaceRenamed":"工作空間已重新命名","successIndicator.pageSaved":"頁面已儲存","successIndicator.pageHasBeenSaved":"\\"{{title}}\\" has been saved. ZH","successIndicator.pageCopySaved":"頁面已另存為 {{title}}","successIndicator.pageRenamed":"頁面已重新命名","successIndicator.contextGroupApplied":"脈絡群組已套用","successIndicator.namedContextGroupApplied":"{{colorName}} 脈絡群組已套用","successIndicator.viewRemoved":"從脈絡群組中移除的視圖","successIndicator.viewsRemoved":"從脈絡群組中移除的視圖","successIndicator.layoutApplied":"{{layoutName}} 版面已套用","successIndicator.workspaceDeleted":"工作空間已刪除","errorIndicator.pageSaveFailed":"頁面無法儲存","errorIndicator.workspaceSaveFailed":"工作空間無法儲存","errorIndicator.failedToDuplicatePage":"無法複寫頁面","infoIndicator.colorLinkAttempt":"我們嘗試對此索引標籤進行顏色連結，但網站/內容所有者尚未啟用該功能","global.cancel":"取消","global.confirm":"確認","global.save":"儲存","global.delete":"Delete ZH","appResults.header":"Featured Content ZH","recentlyClosed.header":"Recently Closed ZH","landingPage.subheader":"Apps and websites selected by an admin will show here ZH","aria.openBrowser":"開啟瀏覽器選單","aria.browserTabs":"瀏覽器索引標籤","aria.viewTab":"{{title}} 的視圖索引標籤","aria.closePage":"關閉 {{title}} 的頁面索引標籤按鈕","aria.closeTab":"關閉索引標籤 {{title}}","aria.title":"標題","aria.closeContextGroup":"使用 Esc 鍵關閉脈絡群組選取對話框","aria.colorLinking":"顯示或隱藏顏色連結","aria.applyColorLinking":"請選取要套用顏色連結的視圖","aria.assignColorLinkingCurrentView":"目前視圖分配給 {{name}} 脈絡群組","aria.assignColorLinkingCurrentViews":"目前視圖分配給 {{name}} 脈絡群組","aria.setColorLinkingActiveView":"將啟用視圖設定為 {{name}} 脈絡群組","aria.setColorLinkingActiveViews":"將啟用視圖設定為 {{name}} 脈絡群組","aria.escapeLayoutDialog":"使用 Esc 鍵關閉變更版面對話框","global.supertab":"Supertab ZH","global.tab":"Tab ZH","bookmarks.editBookmark":"Edit Bookmark ZH","bookmarks.bookmarkAdded":"Bookmark added ZH","bookmarks.done":"Done ZH","bookmarks.remove":"Remove ZH","bookmarks.bookmarksPanel":"Bookmarks Panel ZH","bookmarks.bookmarks":"Bookmarks ZH","bookmarks.allBookmarks":"All Bookmarks ZH","bookmarks.favorites":"Favorites ZH","bookmarks.searchBookmarks":"Search Bookmarks ZH","bookmarks.clearSearchInput":"Clear Search Input ZH","bookmarks.createFolder":"Create New Folder ZH","bookmarks.exitFolder":"Exit Folder ZH","bookmarks.newFolder":"New Folder ZH","bookmarks.namedFolder":"{{name}} Folder ZH","bookmarks.bookmarkSettings":"{{name}} Bookmark Settings ZH","bookmarks.folderSettings":"{{name}} Folder Settings ZH","bookmarks.noResultsFound":"No results found ZH","bookmarks.noResultsFoundSubtext":"There are no bookmarks that match your search ZH","bookmarks.nothingToShow":"Nothing to show yet ZH","bookmarks.nothingToShowSubtext":"Add a bookmark to this folder ZH","bookmarks.resultsFoundIn":"Results found in {{name}} ZH","bookmarks.resultsInOtherFolders":"Results found in other folders ZH","bookmarks.allResultsFoundIn":"All results found in ZH","bookmarks.editName":"Edit Name ZH","bookmarks.move":"Move ZH","bookmarks.bookmarkAddedTitle":"Bookmark Added ZH","bookmarks.bookmarkAddedToFolder":"Your bookmark was added to \\"{{folderName}}\\" ZH","bookmarks.bookmarkEditedTitle":"Bookmark Edited ZH","enterpriseContextMenu.saveSupertab":"Save Supertab ZH","enterpriseContextMenu.saveSupertabAs":"Save Supertab As... ZH","enterpriseContextMenu.duplicate":"Duplicate ZH","enterpriseContextMenu.deleteSupertab":"Delete Supertab ZH","enterpriseContextMenu.newTab":"New Tab ZH","enterpriseSaveMenu.saveSupertabAs":"Save Supertab As ZH","enterpriseSaveModal":{"saveSupertabCount_one":"Save {{count}} Supertab before closing? ZH","saveSupertabCount_other":"Save {{count}} Supertabs before closing? ZH"},"enterpriseSaveModal.renameSupertab":"Rename ZH","enterpriseSaveModal.unsavedChanges":"You have unsaved changes in this Tab. ZH","enterpriseSaveModal.closeTab":"Close Tab ZH","enterpriseSaveModal.closeSupertab":"Close Supertab ZH","enterpriseModal.discardSupertabWarning":"Any unsaved changes will be lost. ZH","enterpriseDeleteModal.deleteSupertab":"Delete the \\"{{title}}\\" Supertab? ZH","enterpriseDeleteModal.deleteSupertabWarning":"Are you sure you want to delete this Supertab? This action cannot be undone and is permanent. ZH","enterpriseSuccessIndicator.supertabSaved":"Supertab Saved ZH","enterpriseSuccessIndicator.supertabHasBeenSaved":"\\"{{title}}\\" Supertab has been saved. ZH","enterpriseSuccessIndicator.supertabDeleted":"Supertab Deleted ZH","enterpriseSuccessIndicator.supertabHasBeenDeleted":"\\"{{title}}\\" Supertab has been deleted. ZH","enterpriseErrorIndicator.failedToDuplicateTab":"Failed to duplicate Tab ZH","enterpriseErrorIndicator.failedToDuplicateSupertab":"Failed to duplicate Supertab ZH","enterpriseCommandBar.switchToSupertab":"Switch to Supertab ZH","enterpriseCommandBar.goTo":"Go to {{type}} ZH","enterpriseCommandBar.viewMore":"View More ZH","sidePanel.aiCenter":"AI Center ZH","sidePanel.newChat":"New Chat ZH","sidePanel.toggleSidePanel":"Toggle Side Panel ZH","sidePanel.closeSidePanel":"Close Side Panel ZH","sidePanel.openAiCenter":"Open AI Center ZH","contextMenu.quitEnterpriseBrowser":"Quit ZH","dock.removeFavorite":"Remove ZH"}'), he = JSON.parse('{"contextMenu.newWindow":"New Window","contextMenu.newPage":"New Page","contextMenu.restore":"Restore to Last Saved Changes","contextMenu.switchWorkspace":"Switch Workspace","contextMenu.manageDesktopSignals":"Manage Desktop Signals","contextMenu.appearance":"Appearance","contextMenu.saveWorkspace":"Save Workspace","contextMenu.saveWorkspaceAs":"Save Workspace As...","contextMenu.renameWorkspace":"Rename Workspace","contextMenu.deleteWorkspace":"Delete Workspace","contextMenu.downloads":"Downloads","contextMenu.savePage":"Save Page","contextMenu.savePageAs":"Save Page As...","contextMenu.print":"Print...","contextMenu.printScreen":"Print Screen","contextMenu.closeWindow":"Close Window","contextMenu.openStorefront":"Open Storefront","contextMenu.quitPlatform":"Quit {{platformLabel}}","contextMenu.newView":"New View","contextMenu.openView":"Open View with Default Web Browser","contextMenu.openViews":"Open Views with Default Web Browser","contextMenu.reload":"Reload","contextMenu.reloadView":"Reload View","contextMenu.reloadViews":"Reload Views","contextMenu.duplicate":"Duplicate","contextMenu.duplicateView":"Duplicate View","contextMenu.duplicateViews":"Duplicate Views","contextMenu.addView":"Add View to Channel","contextMenu.addViews":"Add Views to Channel","contextMenu.removeView":"Remove View from Channel","contextMenu.removeViews":"Remove Views from Channel","contextMenu.closeView":"Close View","contextMenu.closeViews":"Close Views","contextMenu.closeTab":"Close Tab","contextMenu.duplicatePage":"Duplicate Page","contextMenu.submenu.print":"Print","contextMenu.submenu.printAll":"Print All","saveMenu.saveWorkspaceAs":"Save Workspace As","saveMenu.savePageAs":"Save Page As","saveModal.enterValue":"Please enter a value","saveModal.alreadyExists":"{{title}} already exists.","saveModal.pleaseEnterValidName":"Please enter a valid name","saveModal.renamePage":"Rename Page","saveModal.closePage":"Close Page","saveModal.discardChanges":"Discard Changes","saveModal.discardAll":"Discard All","saveModal.saveAll":"Save All","saveModal.savePagesCount":"Save ({{count}}) pages before closing?","defaultPageTitle":"Untitled Page","enterpriseDefaultPageTitle":"Untitled Supertab","addNewPage":"New Page","addNewTab":"Add New Tab","addNewView":"New View","restoreModal":"Are you sure you want to restore to last saved changes?","modal.discardWarning":"Any unsaved changes will be discarded","modal.discardPageWarning":"Any unsaved changes to this page will be lost.","modal.saveChangesPrompt":"Save changes before closing?","modal.pageClose":"Page Close","switchWorkspaceModal":"Are you sure you want to switch to {{workspace}}?","switchWorkspaceModal.warning":"Any unsaved changes will be discarded","deleteWorkspaceModal":"Are you sure you want to permanently delete this workspace?","replaceWorkspaceModal.warning":"A Workspace with the name {{workspace}} already exists. Do you want to replace it?","replaceWorkspaceModal.warning.body":"A workspace with the same name already exists. Replacing it will overwrite its current contents.","replaceWorkspaceModal.replace":"Replace","closePlatform":"Close the platform","closePlatform.workspace":"Close the {{workspace}} Platform","closePlatform.warning":"Closing a platform will close any workspaces, apps or any processes that are running.","back":"Back","forward":"Forward","reload":"Reload","green":"Green","purple":"Purple","orange":"Orange","red":"Red","pink":"Pink","yellow":"Yellow","theme.light":"Light","theme.dark":"Dark","theme.system":"Sync with OS setting","toolbar.hideTabs":"Hide Tabs","toolbar.showTabs":"Show Tabs","toolbar.lock":"Lock","toolbar.unlock":"Unlock","toolbar.colorLinking":"Color Linking","toolbar.changeLayout":"Change Layout","toolbar.saveMenu":"Save Menu","toolbar.maximizeWindow":"Maximize Window","toolbar.restoreWindow":"Restore Window","toolbar.minimizeWindow":"Minimize Window","changeLayout.fullWidth":"Full Width","changeLayout.columns":"Columns","changeLayout.Rows":"Rows","changeLayout.Grid":"Grid","successIndicator.workspaceSwitched":"Workspace Switched","successIndicator.hidden":"Tabs are Hidden","successIndicator.shown":"Tabs are Shown","successIndicator.locked":"Page is Locked","successIndicator.unlocked":"Page is Unlocked","successIndicator.workspaceSaved":"Workspace saved","successIndicator.workspaceSavedAs":"Workspace saved as {{workspace}}","successIndicator.workspaceRenamed":"Workspace renamed","successIndicator.pageSaved":"Page Saved","successIndicator.pageHasBeenSaved":"\\"{{title}}\\" has been saved.","successIndicator.pageCopySaved":"Page saved as {{title}}","successIndicator.pageRenamed":"Page renamed","successIndicator.contextGroupApplied":"Context group applied","successIndicator.namedContextGroupApplied":"{{colorName}} context group applied","successIndicator.viewRemoved":"View removed from context group","successIndicator.viewsRemoved":"Views removed from context group","successIndicator.layoutApplied":"{{layoutName}} layout applied","successIndicator.workspaceDeleted":"Workspace deleted","errorIndicator.pageSaveFailed":"Page failed to save","errorIndicator.workspaceSaveFailed":"Workspace failed to save","errorIndicator.failedToDuplicatePage":"Failed to duplicate Page","infoIndicator.colorLinkAttempt":"We attempted to color link this tab, but the site/content owner has not enabled it yet","global.cancel":"Cancel","global.confirm":"Confirm","global.save":"Save","global.delete":"Delete","appResults.header":"Featured Content","recentlyClosed.header":"Recently Closed","landingPage.subheader":"Apps and websites selected by an admin will show here","aria.openBrowser":"Open Browser Menu","aria.browserTabs":"Browser Tabs","aria.viewTab":"View Tab for {{title}}","aria.closePage":"Close Page Tab Button for {{title}}","aria.closeTab":"Close Tab {{title}}","aria.title":"Title","aria.closeContextGroup":"Use escape to close context group selection dialog","aria.colorLinking":"Show or hide color linking","aria.applyColorLinking":"Please select a view to apply color linking","aria.assignColorLinkingCurrentView":"Current view assigned to {{name}} context group","aria.assignColorLinkingCurrentViews":"Current views assigned to {{name}} context group","aria.setColorLinkingActiveView":"Set active view to {{name}} context group","aria.setColorLinkingActiveViews":"Set active views to {{name}} context group","aria.escapeLayoutDialog":"Use escape to close change layout dialog","global.supertab":"Supertab","global.tab":"Tab","bookmarks.editBookmark":"Edit Bookmark","bookmarks.bookmarkAdded":"Bookmark added","bookmarks.done":"Done","bookmarks.remove":"Remove","bookmarks.bookmarksPanel":"Bookmarks Panel","bookmarks.bookmarks":"Bookmarks","bookmarks.allBookmarks":"All Bookmarks","bookmarks.favorites":"Favorites","bookmarks.searchBookmarks":"Search Bookmarks","bookmarks.clearSearchInput":"Clear Search Input","bookmarks.createFolder":"Create New Folder","bookmarks.exitFolder":"Exit Folder","bookmarks.newFolder":"New Folder","bookmarks.namedFolder":"{{name}} Folder","bookmarks.bookmarkSettings":"{{name}} Bookmark Settings","bookmarks.folderSettings":"{{name}} Folder Settings","bookmarks.noResultsFound":"No results found","bookmarks.noResultsFoundSubtext":"There are no bookmarks that match your search","bookmarks.nothingToShow":"Nothing to show yet","bookmarks.nothingToShowSubtext":"Add a bookmark to this folder","bookmarks.resultsFoundIn":"Results found in {{name}}","bookmarks.resultsInOtherFolders":"Results found in other folders","bookmarks.allResultsFoundIn":"All results found in","bookmarks.editName":"Edit Name","bookmarks.move":"Move","bookmarks.bookmarkAddedTitle":"Bookmark Added","bookmarks.bookmarkAddedToFolder":"Your bookmark was added to \\"{{folderName}}\\"","bookmarks.bookmarkEditedTitle":"Bookmark Edited","enterpriseContextMenu.saveSupertab":"Save Supertab","enterpriseContextMenu.saveSupertabAs":"Save Supertab As...","enterpriseContextMenu.duplicate":"Duplicate","enterpriseContextMenu.deleteSupertab":"Delete Supertab","enterpriseContextMenu.newTab":"New Tab","enterpriseSaveMenu.saveSupertabAs":"Save Supertab As","enterpriseSaveModal":{"saveSupertabCount_one":"Save {{count}} Supertab before closing?","saveSupertabCount_other":"Save {{count}} Supertabs before closing?"},"enterpriseSaveModal.renameSupertab":"Rename","enterpriseSaveModal.unsavedChanges":"You have unsaved changes in this Tab.","enterpriseSaveModal.closeTab":"Close Tab","enterpriseSaveModal.closeSupertab":"Close Supertab","enterpriseModal.discardSupertabWarning":"Any unsaved changes will be lost.","enterpriseDeleteModal.deleteSupertab":"Delete the \\"{{title}}\\" Supertab?","enterpriseDeleteModal.deleteSupertabWarning":"Are you sure you want to delete this Supertab? This action cannot be undone and is permanent.","enterpriseSuccessIndicator.supertabSaved":"Supertab Saved","enterpriseSuccessIndicator.supertabHasBeenSaved":"\\"{{title}}\\" Supertab has been saved.","enterpriseSuccessIndicator.supertabDeleted":"Supertab Deleted","enterpriseSuccessIndicator.supertabHasBeenDeleted":"\\"{{title}}\\" Supertab has been deleted.","enterpriseErrorIndicator.failedToDuplicateTab":"Failed to duplicate Tab","enterpriseErrorIndicator.failedToDuplicateSupertab":"Failed to duplicate Supertab","enterpriseCommandBar.switchToSupertab":"Switch to Supertab","enterpriseCommandBar.goTo":"Go to {{type}}","enterpriseCommandBar.viewMore":"View More","sidePanel.aiCenter":"AI Center","sidePanel.newChat":"New Chat","sidePanel.toggleSidePanel":"Toggle Side Panel","sidePanel.closeSidePanel":"Close Side Panel","sidePanel.openAiCenter":"Open AI Center","contextMenu.quitEnterpriseBrowser":"Quit","dock.removeFavorite":"Remove","dock.workspaceManagement":{"restoreSuccess":"Last Saved Changes Restored"}}'), be = JSON.parse('{"contextMenu.newWindow":"Neues Fenster","contextMenu.newPage":"Neue Seite","contextMenu.restore":"Wiederherstellen der zuletzt gespeicherten Änderungen","contextMenu.switchWorkspace":"Workspace wechseln","contextMenu.manageDesktopSignals":"Manage Desktop Signals","contextMenu.appearance":"Erscheinungsbild","contextMenu.saveWorkspace":"Workspace speichern","contextMenu.saveWorkspaceAs":"Workspace speichern unter...","contextMenu.renameWorkspace":"Workspace umbenennen","contextMenu.deleteWorkspace":"Workspace löschen","contextMenu.downloads":"Downloads","contextMenu.savePage":"Seite speichern","contextMenu.savePageAs":"Seite speichern unter...","contextMenu.print":"Drucken...","contextMenu.printScreen":"Bildschirmansicht drucken","contextMenu.closeWindow":"Fenster schließen","contextMenu.openStorefront":"Schaufenster öffnen","contextMenu.quitPlatform":"Plattform verlassen","contextMenu.newView":"Neue Ansicht","contextMenu.openView":"Ansicht mit Standard-Webbrowser öffnen","contextMenu.openViews":"Ansichten mit Standard-Webbrowser öffnen","contextMenu.reload":"Reload DE","contextMenu.reloadView":"Ansicht neu laden","contextMenu.reloadViews":"Ansichten neu laden","contextMenu.duplicate":"Duplicate DE","contextMenu.duplicateView":"Ansicht duplizieren","contextMenu.duplicateViews":"Ansichten duplizieren","contextMenu.addView":"Ansicht zum Channel hinzufügen","contextMenu.addViews":"Ansichten zum Channel hinzufügen","contextMenu.removeView":"Ansicht aus dem Channel entfernen","contextMenu.removeViews":"Ansichten aus dem Channel entfernen","contextMenu.closeView":"Ansicht schließen","contextMenu.closeViews":"Ansichten schließen","contextMenu.closeTab":"Close Tab DE","contextMenu.duplicatePage":"Seite duplizieren","contextMenu.submenu.print":"Drucken","contextMenu.submenu.printAll":"Alle drucken","saveMenu.saveWorkspaceAs":"Workspace speichern unter","saveMenu.savePageAs":"Seite speichern unter","saveModal.enterValue":"Please enter a value DE","saveModal.alreadyExists":"{{title}} existiert bereits.","saveModal.pleaseEnterValidName":"Bitte geben Sie einen gültigen Namen ein","saveModal.renamePage":"Seite umbenennen","saveModal.closePage":"Seite schließen","saveModal.discardChanges":"Änderungen verwerfen","saveModal.discardAll":"Alle verwerfen","saveModal.saveAll":"Alle speichern","saveModal.savePagesCount":"({{count}}) Seiten vor dem Schließen speichern?","defaultPageTitle":"Untitled Page DE","enterpriseDefaultPageTitle":"Untitled Supertab DE","addNewPage":"Neue Seite hinzufügen","addNewTab":"Neuen Tab hinzufügen","addNewView":"Neue Ansicht","restoreModal":"Sind Sie sicher, dass Sie die zuletzt gespeicherten Änderungen wiederherstellen wollen?","modal.discardWarning":"Alle nicht gespeicherten Änderungen werden verworfen","modal.discardPageWarning":"Alle nicht gespeicherten Änderungen auf dieser Seite gehen verloren.","modal.saveChangesPrompt":"Änderungen vor dem Schließen speichern?","modal.pageClose":"Seite schließen","switchWorkspaceModal":"Sind Sie sicher, dass Sie zu {{workspace}}wechseln wollen?","switchWorkspaceModal.warning":"Alle nicht gespeicherten Änderungen werden verworfen","deleteWorkspaceModal":"Sind Sie sicher, dass Sie diesen Workspace dauerhaft löschen wollen?","replaceWorkspaceModal.warning":"Ein Workspace mit dem Namen {{workspace}} existiert bereits. Möchten Sie ihn ersetzen?","replaceWorkspaceModal.warning.body":"Ein Workspace mit demselben Namen existiert bereits. Wenn Sie ihn ersetzen, wird der aktuelle Inhalt überschrieben.","replaceWorkspaceModal.replace":"Ersetzen","closePlatform":"Plattform schließen","closePlatform.workspace":"Die {{workspace}} Plattform schließen","closePlatform.warning":"Wenn Sie eine Plattform schließen, werden alle Workspaces, Apps und laufenden Prozesse beendet.","back":"Zurück","forward":"Weiter","reload":"Neu laden","green":"Grün","purple":"Lila","orange":"Orange","red":"Rot","pink":"Pink","yellow":"Gelb","theme.light":"Hell","theme.dark":"Dunkel","theme.system":"Synchronisierung mit OS-Einstellung","toolbar.hideTabs":"Tabs ausblenden","toolbar.showTabs":"Tabs anzeigen","toolbar.lock":"Sperren","toolbar.unlock":"Freischalten","toolbar.colorLinking":"Farbverknüpfung","toolbar.changeLayout":"Layout ändern","toolbar.saveMenu":"Menü speichern","toolbar.maximizeWindow":"Fenster maximieren","toolbar.restoreWindow":"Fenster wiederherstellen","toolbar.minimizeWindow":"Fenster minimieren","changeLayout.fullWidth":"Volle Breite","changeLayout.columns":"Spalten","changeLayout.Rows":"Zeilen","changeLayout.Grid":"Raster","successIndicator.workspaceSwitched":"Workspace gewechselt","successIndicator.hidden":"Tabs sind ausgeblendet","successIndicator.shown":"Tabs werden angezeigt","successIndicator.locked":"Seite ist gesperrt","successIndicator.unlocked":"Seite ist freigeschaltet","successIndicator.workspaceSaved":"Workspace gespeichert","successIndicator.workspaceSavedAs":"Workspace gespeichert als {{workspace}}","successIndicator.workspaceRenamed":"Workspace umbenannt","successIndicator.pageSaved":"Seite gespeichert","successIndicator.pageHasBeenSaved":"\\"{{title}}\\" has been saved. DE","successIndicator.pageCopySaved":"Seite gespeichert als {{title}}","successIndicator.pageRenamed":"Seite umbenannt","successIndicator.contextGroupApplied":"Angewandte Kontextgruppe","successIndicator.namedContextGroupApplied":"{{colorName}} angewandte Kontextgruppe","successIndicator.viewRemoved":"Ansicht aus der Kontextgruppe entfernt","successIndicator.viewsRemoved":"Ansichten aus der Kontextgruppe entfernt","successIndicator.layoutApplied":"{{layoutName}} angewandtes Layout","successIndicator.workspaceDeleted":"Workspace gelöscht","errorIndicator.pageSaveFailed":"Seite konnte nicht gespeichert werden","errorIndicator.workspaceSaveFailed":"Workspace konnte nicht gespeichert werden","errorIndicator.failedToDuplicatePage":"Seite kann nicht dupliziert werden","infoIndicator.colorLinkAttempt":"Wir haben versucht, diesem Tab eine Farbe zuordnen, aber der Eigentümer der Website/des Inhalts hat sie noch nicht aktiviert","global.cancel":"Abbrechen","global.confirm":"Bestätigen","global.save":"Speichern","global.delete":"Delete DE","appResults.header":"Featured Content DC","recentlyClosed.header":"Recently Closed DC","landingPage.subheader":"Apps and websites selected by an admin will show here DE","aria.openBrowser":"Browser-Menü öffnen","aria.browserTabs":"Browser-Tab","aria.viewTab":"Tab „Ansicht“ für {{title}}","aria.closePage":"Button „Seite schließen“ für {{title}}","aria.closeTab":"Tab schließen {{title}}","aria.title":"Bezeichnung","aria.closeContextGroup":"Verwenden Sie die Escape-Taste, um den Dialog zur Auswahl von Kontextgruppen zu schließen","aria.colorLinking":"Farbverknüpfung ein- oder ausblenden","aria.applyColorLinking":"Bitte wählen Sie eine Ansicht, um die Farbverknüpfung anzuwenden","aria.assignColorLinkingCurrentView":"Aktuelle Ansicht, die der Kontextgruppe {{name}} zugeordnet ist","aria.assignColorLinkingCurrentViews":"Aktuelle Ansichten, die der Kontextgruppe {{name}} zugeordnet sind","aria.setColorLinkingActiveView":"Aktive Ansicht auf die Kontextgruppe {{name}} setzen","aria.setColorLinkingActiveViews":"Aktive Ansichten auf die Kontextgruppe {{name}} setzen","aria.escapeLayoutDialog":"Verwenden Sie die Escape-Taste, um den Dialog zur Layoutänderung zu schließen","global.supertab":"Supertab DE","global.tab":"Tab DE","bookmarks.editBookmark":"Edit Bookmark DE","bookmarks.bookmarkAdded":"Bookmark added DE","bookmarks.done":"Done DE","bookmarks.remove":"Remove DE","bookmarks.bookmarksPanel":"Bookmarks Panel DE","bookmarks.bookmarks":"Bookmarks DE","bookmarks.allBookmarks":"All Bookmarks DE","bookmarks.favorites":"Favorites DE","bookmarks.searchBookmarks":"Search Bookmarks DE","bookmarks.clearSearchInput":"Clear Search Input DE","bookmarks.createFolder":"Create New Folder DE","bookmarks.exitFolder":"Exit Folder DE","bookmarks.newFolder":"New Folder DE","bookmarks.namedFolder":"{{name}} Folder DE","bookmarks.bookmarkSettings":"{{name}} Bookmark Settings DE","bookmarks.folderSettings":"{{name}} Folder Settings DE","bookmarks.noResultsFound":"No results found DE","bookmarks.noResultsFoundSubtext":"There are no bookmarks that match your search DE","bookmarks.nothingToShow":"Nothing to show yet DE","bookmarks.nothingToShowSubtext":"Add a bookmark to this folder DE","bookmarks.resultsFoundIn":"Results found in {{name}} DE","bookmarks.resultsInOtherFolders":"Results found in other folders DE","bookmarks.allResultsFoundIn":"All results found in DE","bookmarks.editName":"Edit Name DE","bookmarks.move":"Move DE","bookmarks.bookmarkAddedTitle":"Bookmark Added DE","bookmarks.bookmarkAddedToFolder":"Your bookmark was added to \\"{{folderName}}\\" DE","bookmarks.bookmarkEditedTitle":"Bookmark Edited DE","enterpriseContextMenu.saveSupertab":"Save Supertab DE","enterpriseContextMenu.saveSupertabAs":"Save Supertab As... DE","enterpriseContextMenu.duplicate":"Duplicate DE","enterpriseContextMenu.deleteSupertab":"Delete Supertab DE","enterpriseContextMenu.newTab":"New Tab DE","enterpriseSaveMenu.saveSupertabAs":"Save Supertab As DE","enterpriseSaveModal":{"saveSupertabCount_one":"Save {{count}} Supertab before closing? DE","saveSupertabCount_other":"Save {{count}} Supertabs before closing? DE"},"enterpriseSaveModal.renameSupertab":"Rename DE","enterpriseSaveModal.unsavedChanges":"You have unsaved changes in this Tab. DE","enterpriseSaveModal.closeTab":"Close Tab DE","enterpriseSaveModal.closeSupertab":"Close Supertab DE","enterpriseModal.discardSupertabWarning":"Any unsaved changes will be lost. DE","enterpriseDeleteModal.deleteSupertab":"Delete the \\"{{title}}\\" Supertab? DE","enterpriseDeleteModal.deleteSupertabWarning":"Are you sure you want to delete this Supertab? This action cannot be undone and is permanent. DE","enterpriseSuccessIndicator.supertabSaved":"Supertab Saved DE","enterpriseSuccessIndicator.supertabHasBeenSaved":"\\"{{title}}\\" Supertab has been saved. DE","enterpriseSuccessIndicator.supertabDeleted":"Supertab Deleted DE","enterpriseSuccessIndicator.supertabHasBeenDeleted":"\\"{{title}}\\" Supertab has been deleted. DE","enterpriseErrorIndicator.failedToDuplicateTab":"Failed to duplicate Tab DE","enterpriseErrorIndicator.failedToDuplicateSupertab":"Failed to duplicate Supertab DE","enterpriseCommandBar.switchToSupertab":"Switch to Supertab DE","enterpriseCommandBar.goTo":"Go to {{type}} DE","enterpriseCommandBar.viewMore":"View More DE","sidePanel.aiCenter":"AI Center DE","sidePanel.newChat":"New Chat DE","sidePanel.toggleSidePanel":"Toggle Side Panel DE","sidePanel.closeSidePanel":"Close Side Panel DE","sidePanel.openAiCenter":"Open AI Center DE","contextMenu.quitEnterpriseBrowser":"Quit DE","dock.removeFavorite":"Remove DE"}'), pe = JSON.parse('{"contextMenu.newWindow":"新しいウィンドウ","contextMenu.newPage":"新しいページ","contextMenu.restore":"最後に保存された変更に戻す","contextMenu.switchWorkspace":"ワークスペースに切り替える","contextMenu.manageDesktopSignals":"Manage Desktop Signals","contextMenu.appearance":"外観","contextMenu.saveWorkspace":"ワークスペースを保存","contextMenu.saveWorkspaceAs":"ワークスペースを別名で保存...","contextMenu.renameWorkspace":"ワークスペース名を変更","contextMenu.deleteWorkspace":"ワークスペースを削除","contextMenu.downloads":"ダウンロード","contextMenu.savePage":"ページを保存","contextMenu.savePageAs":"ページを別名で保存...","contextMenu.print":"印刷...","contextMenu.printScreen":"プリントスクリーン","contextMenu.closeWindow":"ウィンドウを閉じる","contextMenu.openStorefront":"ストアフロントを開く","contextMenu.quitPlatform":"プラットフォームを終了する","contextMenu.newView":"新しいビュー","contextMenu.openView":"デフォルトのウェブブラウザーでビューを開く","contextMenu.openViews":"デフォルトのウェブブラウザーでビューを開く","contextMenu.reload":"Reload JP","contextMenu.reloadView":"ビューをリロード","contextMenu.reloadViews":"ビューをリロード","contextMenu.duplicate":"Duplicate JP","contextMenu.duplicateView":"ビューを複製","contextMenu.duplicateViews":"ビューを複製","contextMenu.addView":"ビューをチャネルに追加","contextMenu.addViews":"ビューをチャネルに追加","contextMenu.removeView":"チャネルからビューを削除","contextMenu.removeViews":"チャネルからビューを削除","contextMenu.closeView":"ビューを閉じる","contextMenu.closeViews":"ビューを閉じる","contextMenu.closeTab":"Close Tab JP","contextMenu.duplicatePage":"ページを複製","contextMenu.submenu.print":"印刷","contextMenu.submenu.printAll":"すべてを印刷","saveMenu.saveWorkspaceAs":"ワークスペースを別名で保存","saveMenu.savePageAs":"ページを別名で保存","saveModal.enterValue":"Please enter a value JP","saveModal.alreadyExists":"{{title}}はすでに存在しています。","saveModal.pleaseEnterValidName":"有効な名前を入力してください","saveModal.renamePage":"ページ名を変更","saveModal.closePage":"ページを閉じる","saveModal.discardChanges":"変更を破棄","saveModal.discardAll":"すべて破棄","saveModal.saveAll":"すべて保存","saveModal.savePagesCount":"閉じる前に（{{count}}）つのページを保存しますか？","defaultPageTitle":"Untitled Page JP","enterpriseDefaultPageTitle":"Untitled Supertab JP","addNewPage":"新しいページを追加","addNewTab":"新しいタブを追加","addNewView":"新しいビュー","restoreModal":"本当に最後に保存された変更に戻しますか？","modal.discardWarning":"保存されていない変更は破棄されます","modal.discardPageWarning":"保存されていないこのページへの変更は失われます。","modal.saveChangesPrompt":"閉じる前に変更を保存しますか？","modal.pageClose":"ページを閉じる","switchWorkspaceModal":"本当に{{workspace}}に切り替えますか？","switchWorkspaceModal.warning":"保存されていない変更は破棄されます","deleteWorkspaceModal":"このワークスペースを永久に削除してもよろしいですか？","replaceWorkspaceModal.warning":"{{workspace}}という名前のワークスペースがすでに存在します。置き換えますか？","replaceWorkspaceModal.warning.body":"同じ名前のワークスペースがすでに存在します。置き換えると、現在の内容は上書きされます。","replaceWorkspaceModal.replace":"置き換える","closePlatform":"プラットフォームを閉じる","closePlatform.workspace":"{{workspace}}プラットフォームを閉じる","closePlatform.warning":"プラットフォームを閉じると、実行中のワークスペース、アプリ、プロセスがすべて閉じます。","back":"戻る","forward":"進む","reload":"リロード","green":"グリーン","purple":"パープル","orange":"オレンジ","red":"レッド","pink":"ピンク","yellow":"イエロー","theme.light":"ライト","theme.dark":"ダーク","theme.system":"OSの設定と同期","toolbar.hideTabs":"タブを非表示","toolbar.showTabs":"タブを表示","toolbar.lock":"ロック","toolbar.unlock":"ロック解除","toolbar.colorLinking":"カラーリンク","toolbar.changeLayout":"レイアウトを変更","toolbar.saveMenu":"メニューを保存","toolbar.maximizeWindow":"ウィンドウを最大化する","toolbar.restoreWindow":"ウィンドウを復元","toolbar.minimizeWindow":"ウィンドウを最小化する","changeLayout.fullWidth":"全幅","changeLayout.columns":"列","changeLayout.Rows":"行","changeLayout.Grid":"グリッド","successIndicator.workspaceSwitched":"ワークスペースが切り替わりました","successIndicator.hidden":"タブが非表示になっています","successIndicator.shown":"タブが表示されています","successIndicator.locked":"ページがロックされています","successIndicator.unlocked":"ページのロックが解除されています","successIndicator.workspaceSaved":"ワークスペースが保存されました","successIndicator.workspaceSavedAs":"ワークスペースが{{workspace}}として保存されました","successIndicator.workspaceRenamed":"ワークスペース名が変更されました","successIndicator.pageSaved":"ページが保存されました","successIndicator.pageHasBeenSaved":"\\"{{title}}\\" has been saved. JP","successIndicator.pageCopySaved":"ページが{{title}}として保存されました","successIndicator.pageRenamed":"ページ名が変更されました","successIndicator.contextGroupApplied":"コンテキストグループが適用されました","successIndicator.namedContextGroupApplied":"{{colorName}}コンテキストグループが適用されました","successIndicator.viewRemoved":"コンテキストグループからビューが削除されました","successIndicator.viewsRemoved":"コンテキストグループからビューが削除されました","successIndicator.layoutApplied":"{{layoutName}}レイアウトが適用されました","successIndicator.workspaceDeleted":"ワークスペースが削除されました","errorIndicator.pageSaveFailed":"ページを保存できませんでした","errorIndicator.workspaceSaveFailed":"ワークスペースを保存できませんでした","errorIndicator.failedToDuplicatePage":"ページを複製できませんでした","infoIndicator.colorLinkAttempt":"このタブをカラーリンクしようとしましたが、サイト/コンテンツのオーナーがまだこれを有効にしていません","global.cancel":"キャンセル","global.confirm":"確認","global.save":"保存","global.delete":"Delete JP","appResults.header":"Featured content JP","recentlyClosed.header":"Recently Closed JP","landingPage.subheader":"Apps and websites selected by an admin will show here JP","aria.openBrowser":"ブラウザーメニューを開く","aria.browserTabs":"ブラウザータブ","aria.viewTab":"{{title}}のタブを表示","aria.closePage":"{{title}}のページタブボタンを閉じる","aria.closeTab":"{{title}}タブを閉じる","aria.title":"タイトル","aria.closeContextGroup":"エスケープを使用して、コンテキストグループ選択ダイアログを閉じる","aria.colorLinking":"カラーリンクの表示/非表示","aria.applyColorLinking":"カラーリンクを適用するビューを選択してください","aria.assignColorLinkingCurrentView":"現在のビューは{{name}}コンテキストグループに割り当てられています","aria.assignColorLinkingCurrentViews":"現在のビューは{{name}}コンテキストグループに割り当てられています","aria.setColorLinkingActiveView":"アクティブビューを{{name}}コンテキストグループに設定","aria.setColorLinkingActiveViews":"アクティブビューを{{name}}コンテキストグループに設定","aria.escapeLayoutDialog":"エスケープを使用して、レイアウト変更選択ダイアログを閉じる","global.supertab":"Supertab JP","global.tab":"Tab JP","bookmarks.editBookmark":"Edit Bookmark JP","bookmarks.bookmarkAdded":"Bookmark added JP","bookmarks.done":"Done JP","bookmarks.remove":"Remove JP","bookmarks.bookmarksPanel":"Bookmarks Panel JP","bookmarks.bookmarks":"Bookmarks JP","bookmarks.allBookmarks":"All Bookmarks JP","bookmarks.favorites":"Favorites JP","bookmarks.searchBookmarks":"Search Bookmarks JP","bookmarks.clearSearchInput":"Clear Search Input JP","bookmarks.createFolder":"Create New Folder JP","bookmarks.exitFolder":"Exit Folder JP","bookmarks.newFolder":"New Folder JP","bookmarks.namedFolder":"{{name}} Folder JP","bookmarks.bookmarkSettings":"{{name}} Bookmark Settings JP","bookmarks.folderSettings":"{{name}} Folder Settings JP","bookmarks.noResultsFound":"No results found JP","bookmarks.noResultsFoundSubtext":"There are no bookmarks that match your search JP","bookmarks.nothingToShow":"Nothing to show yet JP","bookmarks.nothingToShowSubtext":"Add a bookmark to this folder JP","bookmarks.resultsFoundIn":"Results found in {{name}} JP","bookmarks.resultsInOtherFolders":"Results found in other folders JP","bookmarks.allResultsFoundIn":"All results found in JP","bookmarks.editName":"Edit Name JP","bookmarks.move":"Move JP","bookmarks.bookmarkAddedTitle":"Bookmark Added JP","bookmarks.bookmarkAddedToFolder":"Your bookmark was added to \\"{{folderName}}\\" JP","bookmarks.bookmarkEditedTitle":"Bookmark Edited JP","enterpriseContextMenu.saveSupertab":"Save Supertab JP","enterpriseContextMenu.saveSupertabAs":"Save Supertab As... JP","enterpriseContextMenu.duplicate":"Duplicate JP","enterpriseContextMenu.deleteSupertab":"Delete Supertab JP","enterpriseContextMenu.newTab":"New Tab JP","enterpriseSaveMenu.saveSupertabAs":"Save Supertab As JP","enterpriseSaveModal":{"saveSupertabCount_one":"Save {{count}} Supertab before closing? JP","saveSupertabCount_other":"Save {{count}} Supertabs before closing? JP"},"enterpriseSaveModal.renameSupertab":"Rename JP","enterpriseSaveModal.unsavedChanges":"You have unsaved changes in this Tab. JP","enterpriseSaveModal.closeTab":"Close Tab JP","enterpriseSaveModal.closeSupertab":"Close Supertab JP","enterpriseModal.discardSupertabWarning":"Any unsaved changes will be lost. JP","enterpriseDeleteModal.deleteSupertab":"Delete the \\"{{title}}\\" Supertab? JP","enterpriseDeleteModal.deleteSupertabWarning":"Are you sure you want to delete this Supertab? This action cannot be undone and is permanent. JP","enterpriseSuccessIndicator.supertabSaved":"Supertab Saved JP","enterpriseSuccessIndicator.supertabHasBeenSaved":"\\"{{title}}\\" Supertab has been saved. JP","enterpriseSuccessIndicator.supertabDeleted":"Supertab Deleted JP","enterpriseSuccessIndicator.supertabHasBeenDeleted":"\\"{{title}}\\" Supertab has been deleted. JP","enterpriseErrorIndicator.failedToDuplicateTab":"Failed to duplicate Tab JP","enterpriseErrorIndicator.failedToDuplicateSupertab":"Failed to duplicate Supertab JP","enterpriseCommandBar.switchToSupertab":"Switch to Supertab JP","enterpriseCommandBar.goTo":"Go to {{type}} JP","enterpriseCommandBar.viewMore":"View More JP","sidePanel.aiCenter":"AI Center JP","sidePanel.newChat":"New Chat JP","sidePanel.toggleSidePanel":"Toggle Side Panel JP","sidePanel.closeSidePanel":"Close Side Panel JP","sidePanel.openAiCenter":"Open AI Center JP","contextMenu.quitEnterpriseBrowser":"Quit JP","dock.removeFavorite":"Remove JP"}'), me = JSON.parse('{"contextMenu.newWindow":"새 창","contextMenu.newPage":"새 페이지","contextMenu.restore":"마지막으로 저장한 변경 사항으로 복원","contextMenu.switchWorkspace":"작업 공간 전환","contextMenu.manageDesktopSignals":"Manage Desktop Signals","contextMenu.appearance":"모양","contextMenu.saveWorkspace":"작업 공간 저장","contextMenu.saveWorkspaceAs":"다른 이름으로 작업 공간 저장...","contextMenu.renameWorkspace":"작업 공간 이름 바꾸기","contextMenu.deleteWorkspace":"작업 공간 삭제","contextMenu.downloads":"다운로드","contextMenu.savePage":"페이지 저장","contextMenu.savePageAs":"다른 이름으로 페이지 저장...","contextMenu.print":"인쇄...","contextMenu.printScreen":"화면 인쇄","contextMenu.closeWindow":"창 닫기","contextMenu.openStorefront":"매장 열기","contextMenu.quitPlatform":"플랫폼 종료","contextMenu.newView":"새 뷰","contextMenu.openView":"기본 웹 브라우저로 뷰 열기","contextMenu.openViews":"기본 웹 브라우저로 뷰 열기","contextMenu.reload":"Reload KR","contextMenu.reloadView":"뷰 다시 로드","contextMenu.reloadViews":"뷰 다시 로드","contextMenu.duplicate":"Duplicate KR","contextMenu.duplicateView":"뷰 복제","contextMenu.duplicateViews":"뷰 복제","contextMenu.addView":"채널에 뷰 추가","contextMenu.addViews":"채널에 뷰 추가","contextMenu.removeView":"채널에서 뷰 제거","contextMenu.removeViews":"채널에서 뷰 제거","contextMenu.closeView":"뷰 닫기","contextMenu.closeViews":"뷰 닫기","contextMenu.closeTab":"Close Tab KR","contextMenu.duplicatePage":"페이지 복제","contextMenu.submenu.print":"인쇄","contextMenu.submenu.printAll":"모두 인쇄","saveMenu.saveWorkspaceAs":"다른 이름으로 작업 공간 저장","saveMenu.savePageAs":"다른 이름으로 페이지 저장","saveModal.enterValue":"Please enter a value KR","saveModal.alreadyExists":"{{title}}이(가) 이미 존재합니다.","saveModal.pleaseEnterValidName":"유효한 이름을 입력하십시오.","saveModal.renamePage":"페이지 이름 바꾸기","saveModal.closePage":"페이지 닫기","saveModal.discardChanges":"변경 사항 폐기","saveModal.discardAll":"모두 폐기","saveModal.saveAll":"모두 저장","saveModal.savePagesCount":"닫기 전에 페이지({{count}}개)를 저장하시겠습니까?","defaultPageTitle":"Untitled Page KR","enterpriseDefaultPageTitle":"Untitled Supertab KR","addNewPage":"새 페이지 추가","addNewTab":"새 탭 추가","addNewView":"새 뷰","restoreModal":"마지막으로 저장한 변경 사항으로 복원하시겠습니까?","modal.discardWarning":"저장하지 않은 변경 사항은 모두 폐기됩니다","modal.discardPageWarning":"이 페이지의 저장하지 않은 변경 사항은 모두 손실됩니다.","modal.saveChangesPrompt":"닫기 전에 변경 사항을 저장하시겠습니까?","modal.pageClose":"페이지 닫기","switchWorkspaceModal":"{{workspace}}(으)로 전환하시겠습니까?","switchWorkspaceModal.warning":"저장하지 않은 변경 사항은 모두 폐기됩니다","deleteWorkspaceModal":"이 작업 공간을 영구적으로 삭제하시겠습니까?","replaceWorkspaceModal.warning":"{{workspace}}(이)라는 이름의 작업 공간이 이미 존재합니다. 교체하시겠습니까?","replaceWorkspaceModal.warning.body":"같은 이름의 작업 공간이 이미 존재합니다. 교체하면 현재 내용을 덮어쓰게 됩니다.","replaceWorkspaceModal.replace":"교체","closePlatform":"플랫폼 닫기","closePlatform.workspace":"{{workspace}} 플랫폼 닫기","closePlatform.warning":"플랫폼을 닫으면 실행 중인 모든 작업 공간, 앱 또는 프로세스가 닫힙니다.","back":"뒤로 가기","forward":"앞으로 가기","reload":"새로고침","green":"녹색","purple":"보라색","orange":"오렌지색","red":"빨간색","pink":"핑크색","yellow":"노란색","theme.light":"밝은","theme.dark":"어두운","theme.system":"OS 설정과 동기화","toolbar.hideTabs":"탭 숨기기","toolbar.showTabs":"탭 표시","toolbar.lock":"잠금","toolbar.unlock":"잠금 해제","toolbar.colorLinking":"색상 연결","toolbar.changeLayout":"레이아웃 변경","toolbar.saveMenu":"저장 메뉴","toolbar.maximizeWindow":"창 최대화","toolbar.restoreWindow":"창 복원","toolbar.minimizeWindow":"창 최소화","changeLayout.fullWidth":"전체 너비","changeLayout.columns":"열","changeLayout.Rows":"행","changeLayout.Grid":"그리드","successIndicator.workspaceSwitched":"작업 공간 전환","successIndicator.hidden":"탭 숨김","successIndicator.shown":"탭 표시","successIndicator.locked":"페이지 잠금","successIndicator.unlocked":"페이지 잠금 해제됨","successIndicator.workspaceSaved":"작업 공간 저장됨","successIndicator.workspaceSavedAs":"작업 공간이 {{workspace}}(으)로 저장됨","successIndicator.workspaceRenamed":"작업 공간 이름 변경됨","successIndicator.pageSaved":"페이지 저장됨","successIndicator.pageHasBeenSaved":"\\"{{title}}\\" has been saved. KR","successIndicator.pageCopySaved":"페이지가 {{title}}(으)로 저장됨","successIndicator.pageRenamed":"페이지 이름 변경됨","successIndicator.contextGroupApplied":"컨텍스트 그룹 적용됨","successIndicator.namedContextGroupApplied":"{{colorName}} 컨텍스트 그룹 적용됨","successIndicator.viewRemoved":"컨텍스트 그룹에서 뷰 제거됨","successIndicator.viewsRemoved":"컨텍스트 그룹에서 뷰 제거됨","successIndicator.layoutApplied":"{{layoutName}} 레이아웃 적용됨","successIndicator.workspaceDeleted":"작업 공간 삭제됨","errorIndicator.pageSaveFailed":"페이지 저장 실패","errorIndicator.workspaceSaveFailed":"작업 공간 저장 실패","errorIndicator.failedToDuplicatePage":"페이지 복제 실패","infoIndicator.colorLinkAttempt":"이 탭의 색상 링크를 시도했지만 사이트/콘텐츠 소유자가 아직 활성화하지 않았습니다.","global.cancel":"취소","global.confirm":"확인","global.save":"저장","global.delete":"Delete KR","appResults.header":"Featured Content KR","recentlyClosed.header":"Recently Closed KR","landingPage.subheader":"Apps and websites selected by an admin will show here KR","aria.openBrowser":"브라우저 메뉴 열기","aria.browserTabs":"브라우저 탭","aria.viewTab":"{{title}}의 뷰 탭","aria.closePage":"{{title}}의 페이지 닫기 탭","aria.closeTab":"탭 {{title}} 닫기","aria.title":"제목","aria.closeContextGroup":"이스케이프를 사용하여 컨텍스트 그룹 선택 대화상자 닫기","aria.colorLinking":"색상 연결 표시 또는 숨기기","aria.applyColorLinking":"색상 연결을 적용하려면 뷰를 선택하십시오.","aria.assignColorLinkingCurrentView":"{{name}} 컨텍스트 그룹에 할당된 현재 뷰","aria.assignColorLinkingCurrentViews":"{{name}} 컨텍스트 그룹에 할당된 현재 뷰","aria.setColorLinkingActiveView":"활성 뷰를 {{name}} 컨텍스트 그룹으로 설정","aria.setColorLinkingActiveViews":"활성 뷰를 {{name}} 컨텍스트 그룹으로 설정","aria.escapeLayoutDialog":"이스케이프를 사용하여 레이아웃 변경 대화상자 닫기","global.supertab":"Supertab KR","global.tab":"Tab KR","bookmarks.editBookmark":"Edit Bookmark KR","bookmarks.bookmarkAdded":"Bookmark added KR","bookmarks.done":"Done KR","bookmarks.remove":"Remove KR","bookmarks.bookmarksPanel":"Bookmarks Panel KR","bookmarks.bookmarks":"Bookmarks KR","bookmarks.allBookmarks":"All Bookmarks KR","bookmarks.favorites":"Favorites KR","bookmarks.searchBookmarks":"Search Bookmarks KR","bookmarks.clearSearchInput":"Clear Search Input KR","bookmarks.createFolder":"Create New Folder KR","bookmarks.exitFolder":"Exit Folder KR","bookmarks.newFolder":"New Folder KR","bookmarks.namedFolder":"{{name}} Folder KR","bookmarks.bookmarkSettings":"{{name}} Bookmark Settings KR","bookmarks.folderSettings":"{{name}} Folder Settings KR","bookmarks.noResultsFound":"No results found KR","bookmarks.noResultsFoundSubtext":"There are no bookmarks that match your search KR","bookmarks.nothingToShow":"Nothing to show yet KR","bookmarks.nothingToShowSubtext":"Add a bookmark to this folder KR","bookmarks.resultsFoundIn":"Results found in {{name}} KR","bookmarks.resultsInOtherFolders":"Results found in other folders KR","bookmarks.allResultsFoundIn":"All results found in KR","bookmarks.editName":"Edit Name KR","bookmarks.move":"Move KR","bookmarks.bookmarkAddedTitle":"Bookmark Added KR","bookmarks.bookmarkAddedToFolder":"Your bookmark was added to \\"{{folderName}}\\" KR","bookmarks.bookmarkEditedTitle":"Bookmark Edited KR","enterpriseContextMenu.saveSupertab":"Save Supertab KR","enterpriseContextMenu.saveSupertabAs":"Save Supertab As... KR","enterpriseContextMenu.duplicate":"Duplicate KR","enterpriseContextMenu.deleteSupertab":"Delete Supertab KR","enterpriseContextMenu.newTab":"New Tab KR","enterpriseSaveMenu.saveSupertabAs":"Save Supertab As KR","enterpriseSaveModal":{"saveSupertabCount_one":"Save {{count}} Supertab before closing? KR","saveSupertabCount_other":"Save {{count}} Supertabs before closing? KR"},"enterpriseSaveModal.renameSupertab":"Rename KR","enterpriseSaveModal.unsavedChanges":"You have unsaved changes in this Tab. KR","enterpriseSaveModal.closeTab":"Close Tab KR","enterpriseSaveModal.closeSupertab":"Close Supertab KR","enterpriseModal.discardSupertabWarning":"Any unsaved changes will be lost. KR","enterpriseDeleteModal.deleteSupertab":"Delete the \\"{{title}}\\" Supertab? KR","enterpriseDeleteModal.deleteSupertabWarning":"Are you sure you want to delete this Supertab? This action cannot be undone and is permanent. KR","enterpriseSuccessIndicator.supertabSaved":"Supertab Saved KR","enterpriseSuccessIndicator.supertabHasBeenSaved":"\\"{{title}}\\" Supertab has been saved. KR","enterpriseSuccessIndicator.supertabDeleted":"Supertab Deleted KR","enterpriseSuccessIndicator.supertabHasBeenDeleted":"\\"{{title}}\\" Supertab has been deleted. KR","enterpriseErrorIndicator.failedToDuplicateTab":"Failed to duplicate Tab KR","enterpriseErrorIndicator.failedToDuplicateSupertab":"Failed to duplicate Supertab KR","enterpriseCommandBar.switchToSupertab":"Switch to Supertab KR","enterpriseCommandBar.goTo":"Go to {{type}} KR","enterpriseCommandBar.viewMore":"View More KR","sidePanel.aiCenter":"AI Center KR","sidePanel.newChat":"New Chat KR","sidePanel.toggleSidePanel":"Toggle Side Panel KR","sidePanel.closeSidePanel":"Close Side Panel KR","sidePanel.openAiCenter":"Open AI Center KR","contextMenu.quitEnterpriseBrowser":"Quit KR","dock.removeFavorite":"Remove KR"}'), ke = JSON.parse('{"contextMenu.newWindow":"Новое окно","contextMenu.newPage":"Новая страница","contextMenu.restore":"Восстановить последние сохраненные изменения","contextMenu.switchWorkspace":"Переключить рабочую область","contextMenu.manageDesktopSignals":"Manage Desktop Signals","contextMenu.appearance":"Внешний вид","contextMenu.saveWorkspace":"Сохранить рабочую область","contextMenu.saveWorkspaceAs":"Сохранить рабочую область как...","contextMenu.renameWorkspace":"Переименовать рабочую область","contextMenu.deleteWorkspace":"Удалить рабочую область","contextMenu.downloads":"Загрузки","contextMenu.savePage":"Сохранить страницу","contextMenu.savePageAs":"Сохранить страницу как...","contextMenu.print":"Печать...","contextMenu.printScreen":"Распечатать экран","contextMenu.closeWindow":"Закрыть окно","contextMenu.openStorefront":"Открыть Storefront","contextMenu.quitPlatform":"Выйти из платформы","contextMenu.newView":"Новое представление","contextMenu.openView":"Открыть представление с помощью веб-браузера по умолчанию","contextMenu.openViews":"Открыть представления с помощью веб-браузера по умолчанию","contextMenu.reload":"Reload RU","contextMenu.reloadView":"Перезагрузить представление","contextMenu.reloadViews":"Перезагрузить представления","contextMenu.duplicate":"Duplicate RU","contextMenu.duplicateView":"Дублировать представление","contextMenu.duplicateViews":"Дублировать представления","contextMenu.addView":"Добавить представление на канал","contextMenu.addViews":"Добавить представления на канал","contextMenu.removeView":"Удалить представление из канала","contextMenu.removeViews":"Удалить представления из канала","contextMenu.closeView":"Закрыть представление","contextMenu.closeViews":"Закрыть представления","contextMenu.closeTab":"Close Tab RU","contextMenu.duplicatePage":"Дублировать страницу","contextMenu.submenu.print":"Печатать","contextMenu.submenu.printAll":"Печатать все","saveMenu.saveWorkspaceAs":"Сохранить рабочую область как","saveMenu.savePageAs":"Сохранить страницу как","saveModal.enterValue":"Please enter a value RU","saveModal.alreadyExists":"{{title}} уже существует.","saveModal.pleaseEnterValidName":"Введите подходящее имя","saveModal.renamePage":"Переименовать страницу","saveModal.closePage":"Закрыть страницу","saveModal.discardChanges":"Отменить изменения","saveModal.discardAll":"Отменить все","saveModal.saveAll":"Сохранить все","saveModal.savePagesCount":"Сохранить ({{count}}) страниц перед закрытием?","defaultPageTitle":"Untitled Page RU","enterpriseDefaultPageTitle":"Untitled Supertab RU","addNewPage":"Добавить новую страницу","addNewTab":"Добавить новую вкладку","addNewView":"Новое представление","restoreModal":"Вы уверены, что хотите восстановить последние сохраненные изменения?","modal.discardWarning":"Все несохраненные изменения будут отменены","modal.discardPageWarning":"Все несохраненные изменения на этой странице будут потеряны.","modal.saveChangesPrompt":"Сохранить изменения перед закрытием?","modal.pageClose":"Закрыть страницу","switchWorkspaceModal":"Вы уверены, что хотите перейти в {{workspace}}?","switchWorkspaceModal.warning":"Все несохраненные изменения будут отменены","deleteWorkspaceModal":"Вы уверены, что хотите навсегда удалить эту рабочую область?","replaceWorkspaceModal.warning":"Рабочая область с именем {{workspace}} уже существует. Вы хотите заменить ее?","replaceWorkspaceModal.warning.body":"Рабочая область с таким же именем уже существует. При ее замене текущее содержимое будет перезаписано.","replaceWorkspaceModal.replace":"Заменить","closePlatform":"Закрыть платформу","closePlatform.workspace":"Закрыть платформу {{workspace}}","closePlatform.warning":"Закрытие платформы приведет к закрытию всех рабочих областей, приложений и запущенных процессов.","back":"Назад","forward":"Вперед","reload":"Перезагрузить ","green":"Зеленый","purple":"Фиолетовый","orange":"Оранжевый","red":"Красный","pink":"Розовый","yellow":"Желтый","theme.light":"Светлый","theme.dark":"Темный","theme.system":"Синхронизировать с настройками ОС","toolbar.hideTabs":"Скрыть вкладки","toolbar.showTabs":"Показать вкладки","toolbar.lock":"Заблокировать","toolbar.unlock":"Разблокировать","toolbar.colorLinking":"Привязка к цвету","toolbar.changeLayout":"Изменить макет","toolbar.saveMenu":"Меню сохранения","toolbar.maximizeWindow":"Увеличить окно","toolbar.restoreWindow":"Восстановить окно","toolbar.minimizeWindow":"Свернуть окно","changeLayout.fullWidth":"Полная ширина","changeLayout.columns":"Столбцы","changeLayout.Rows":"Строки","changeLayout.Grid":"Сетка","successIndicator.workspaceSwitched":"Рабочая область переключена","successIndicator.hidden":"Вкладки скрыты","successIndicator.shown":"Вкладки показаны","successIndicator.locked":"Страница заблокирована","successIndicator.unlocked":"Страница разблокирована","successIndicator.workspaceSaved":"Рабочая область сохранена","successIndicator.workspaceSavedAs":"Рабочая область сохранена как {{workspace}}","successIndicator.workspaceRenamed":"Рабочая область переименована","successIndicator.pageSaved":"Страница сохранена","successIndicator.pageHasBeenSaved":"\\"{{title}}\\" has been saved. RU","successIndicator.pageCopySaved":"Страница сохранена как {{title}}","successIndicator.pageRenamed":"Страница переименована","successIndicator.contextGroupApplied":"Контекстная группа применена","successIndicator.namedContextGroupApplied":"Контекстная группа {{colorName}} применена","successIndicator.viewRemoved":"Представление удалено из контекстной группы","successIndicator.viewsRemoved":"Представления удалены из контекстной группы","successIndicator.layoutApplied":"Макет {{layoutName}} применен","successIndicator.workspaceDeleted":"Рабочая область удалена","errorIndicator.pageSaveFailed":"Не удалось сохранить страницу","errorIndicator.workspaceSaveFailed":"Не удалось сохранить рабочую область","errorIndicator.failedToDuplicatePage":"Не удалось продублировать страницу","infoIndicator.colorLinkAttempt":"Мы попытались привязать цвет к этой вкладке, но владелец сайта/контента еще не включил эту возможность","global.cancel":"Отменить","global.confirm":"Подтвердить","global.save":"Сохранить","global.delete":"Delete RU","appResults.header":"Featured Content RU","recentlyClosed.header":"Recently Closed RU","landingPage.subheader":"Apps and websites selected by an admin will show here RU","aria.openBrowser":"Открыть меню браузера","aria.browserTabs":"Вкладки браузера","aria.viewTab":"Вкладка представления {{title}}","aria.closePage":"Кнопка «Закрыть» на вкладке для страницы {{title}}","aria.closeTab":"Закрыть вкладку {{title}}","aria.title":"Название","aria.closeContextGroup":"Чтобы закрыть диалог выбора контекстной группы, используйте escape","aria.colorLinking":"Показать или скрыть привязку к цвету","aria.applyColorLinking":"Выберите представление, чтобы применить привязку к цвету","aria.assignColorLinkingCurrentView":"Текущее представление, назначенное контекстной группе {{name}}","aria.assignColorLinkingCurrentViews":"Текущие представления, назначенные контекстной группе {{name}}","aria.setColorLinkingActiveView":"Установить активное представление в контекстную группу {{name}}","aria.setColorLinkingActiveViews":"Установить активные представления в контекстную группу {{name}}","aria.escapeLayoutDialog":"Чтобы закрыть диалог изменения макета, используйте escape","global.supertab":"Supertab RU","global.tab":"Tab RU","bookmarks.editBookmark":"Edit Bookmark RU","bookmarks.bookmarkAdded":"Bookmark added RU","bookmarks.done":"Done RU","bookmarks.remove":"Remove RU","bookmarks.bookmarksPanel":"Bookmarks Panel RU","bookmarks.bookmarks":"Bookmarks RU","bookmarks.allBookmarks":"All Bookmarks RU","bookmarks.favorites":"Favorites RU","bookmarks.searchBookmarks":"Search Bookmarks RU","bookmarks.clearSearchInput":"Clear Search Input RU","bookmarks.createFolder":"Create New Folder RU","bookmarks.exitFolder":"Exit Folder RU","bookmarks.newFolder":"New Folder RU","bookmarks.namedFolder":"{{name}} Folder RU","bookmarks.bookmarkSettings":"{{name}} Bookmark Settings RU","bookmarks.folderSettings":"{{name}} Folder Settings RU","bookmarks.noResultsFound":"No results found RU","bookmarks.noResultsFoundSubtext":"There are no bookmarks that match your search RU","bookmarks.nothingToShow":"Nothing to show yet RU","bookmarks.nothingToShowSubtext":"Add a bookmark to this folder RU","bookmarks.resultsFoundIn":"Results found in {{name}} RU","bookmarks.resultsInOtherFolders":"Results found in other folders RU","bookmarks.allResultsFoundIn":"All results found in RU","bookmarks.editName":"Edit Name RU","bookmarks.move":"Move RU","bookmarks.bookmarkAddedTitle":"Bookmark Added RU","bookmarks.bookmarkAddedToFolder":"Your bookmark was added to \\"{{folderName}}\\" RU","bookmarks.bookmarkEditedTitle":"Bookmark Edited RU","enterpriseContextMenu.saveSupertab":"Save Supertab RU","enterpriseContextMenu.saveSupertabAs":"Save Supertab As... RU","enterpriseContextMenu.duplicate":"Duplicate RU","enterpriseContextMenu.deleteSupertab":"Delete Supertab RU","enterpriseContextMenu.newTab":"New Tab RU","enterpriseSaveMenu.saveSupertabAs":"Save Supertab As RU","enterpriseSaveModal":{"saveSupertabCount_one":"Save {{count}} Supertab before closing? RU","saveSupertabCount_other":"Save {{count}} Supertabs before closing? RU"},"enterpriseSaveModal.renameSupertab":"Rename RU","enterpriseSaveModal.unsavedChanges":"You have unsaved changes in this Tab. RU","enterpriseSaveModal.closeTab":"Close Tab RU","enterpriseSaveModal.closeSupertab":"Close Supertab RU","enterpriseModal.discardSupertabWarning":"Any unsaved changes will be lost. RU","enterpriseDeleteModal.deleteSupertab":"Delete the \\"{{title}}\\" Supertab? RU","enterpriseDeleteModal.deleteSupertabWarning":"Are you sure you want to delete this Supertab? This action cannot be undone and is permanent. RU","enterpriseSuccessIndicator.supertabSaved":"Supertab Saved RU","enterpriseSuccessIndicator.supertabHasBeenSaved":"\\"{{title}}\\" Supertab has been saved.RU","enterpriseSuccessIndicator.supertabDeleted":"Supertab Deleted RU","enterpriseSuccessIndicator.supertabHasBeenDeleted":"\\"{{title}}\\" Supertab has been deleted. RU","enterpriseErrorIndicator.failedToDuplicateTab":"Failed to duplicate Tab RU","enterpriseErrorIndicator.failedToDuplicateSupertab":"Failed to duplicate Supertab RU","enterpriseCommandBar.switchToSupertab":"Switch to Supertab RU","enterpriseCommandBar.goTo":"Go to {{type}} RU","enterpriseCommandBar.viewMore":"View More RU","sidePanel.aiCenter":"AI Center RU","sidePanel.newChat":"New Chat RU","sidePanel.toggleSidePanel":"Toggle Side Panel RU","sidePanel.closeSidePanel":"Close Side Panel RU","sidePanel.openAiCenter":"Open AI Center RU","contextMenu.quitEnterpriseBrowser":"Quit RU","dock.removeFavorite":"Remove RU"}'), $ = H().t, Ie = async (e) => await (await vt(e)).dispatch(wt.GetPages), Ze = async (e) => (await vt(e.identity)).dispatch(wt.UpdatePageForWindow, e);
    let nt, ot = !1;
    const rn = () => ot, Ge = () => nt || { enabled: !1 };
    async function Jt(e, n) {
      const r = !!n;
      let s = /* @__PURE__ */ new Set();
      if (r) {
        const { identity: l, pageId: w } = n, S = c().Browser.wrapSync(l), b = await S.getPage(w);
        b != null && b.panels && (s = new Set(b.panels.map(({ viewOptions: N }) => N.name)));
      }
      return e.map((l) => {
        const w = l.viewOptions.name;
        (w == null ? void 0 : w.startsWith(v)) && (!r || r && !s.has(w)) && delete l.viewOptions.name;
        const b = (N = l.viewOptions, N.name || (N.name = `${v}${an()}`), N);
        var N;
        return { ...l, viewOptions: { ...b, uuid: k.uuid } };
      });
    }
    async function Yt(e) {
      for (const n of e) n.panels && await Xt(n.panels);
    }
    const Xa = (e) => e !== null && typeof e == "object" && "message" in e && typeof e.message == "string" && /ERR_([A-Z]+_*)+/.test(e.message);
    async function Xt(e) {
      const n = e.map((r) => fin.Platform.getCurrentSync().createView(r.viewOptions, fin.me.identity).catch((s) => {
        if (!Xa(s)) throw s;
        console.error(s);
      }));
      return await Promise.all(n);
    }
    const Un = (e, n) => !n.find((r) => r === e), er = (e, n) => `${e} (${n})`, Co = (e, n) => {
      if (Un(e, n)) return e;
      let r = 1;
      const s = e.replace(/ *\(\d+\)$/, "");
      for (; !Un(er(s, r), n); ) r += 1;
      return er(s, r);
    }, Dr = async () => {
      const e = await He();
      return (await Promise.all(e.map(async (n) => {
        var r;
        try {
          return Ie(n.identity);
        } catch {
          return JSON.stringify(n.identity), ((r = (await n.getOptions()).workspacePlatform) == null ? void 0 : r.pages) || [];
        }
      }))).reduce((n, r) => n.concat(r), []);
    }, ac = async () => (await Fe(k)).dispatch(fe.GetSavedPages, void 0), pi = async (e) => (await Fe(k)).dispatch(fe.GetSavedPage, e), fi = async (e, n) => {
      const r = await (async (s) => (await Dr()).find((l) => l.pageId === s))(e);
      return !r || r.title === n.title && e === n.pageId || await Ze({ identity: r.parentIdentity, pageId: e, page: { pageId: n.pageId, title: n.title } }), r;
    }, hi = async ({ page: e }) => {
      await fi(e.pageId, e), await (async (n) => (await Fe(k)).dispatch(fe.CreateSavedPage, n))({ page: e });
    }, rc = async (e) => {
      await pi(e) && await (async (n) => (await Fe(k)).dispatch(fe.DeleteSavedPage, n))(e);
    }, gi = async ({ pageId: e, page: n }) => (await fi(e, n), await (async (r) => (await Fe(k)).dispatch(fe.UpdateSavedPage, r))({ pageId: e, page: n })), mi = async (e) => await pi(e.pageId) ? gi({ pageId: e.pageId, page: e }) : hi({ page: e }), oc = async (e) => {
      await (async (n) => (await vt(n.identity)).dispatch(wt.AttachPagesToWindow, n))(e);
    }, ic = async (e) => {
      const n = { ...e.page, panels: e.page.panels && await Jt(e.page.panels, e) };
      n.panels && await Xt(n.panels), await Ze({ ...e, page: n });
    }, sc = async (e) => {
      await (async (n) => (await vt(n.identity)).dispatch(wt.DetachPagesFromWindow, n))(e);
    }, cc = async (e) => {
      await (async (n) => (await vt(n.identity)).dispatch(wt.SetActivePageForWindow, n))(e);
    }, wi = (e) => Ie(e), uc = async ({ identity: e, pageId: n }) => (await wi(e)).find((r) => r.pageId === n), lc = async (e) => {
      await (async (n) => (await vt(n.identity)).dispatch(wt.ReorderPagesForWindow, n))(e);
    }, yi = new class {
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
    async function bi(e) {
      await yi.lock();
      try {
        const n = rn() ? $("enterpriseDefaultPageTitle") : $("defaultPageTitle"), r = e ?? n, [s, l] = await Promise.all([ac(), Dr()]), w = [...s, ...l].map(({ title: S }) => S);
        return Co(r, w);
      } finally {
        yi.unlock();
      }
    }
    async function dc({ page: e }) {
      return { shouldShowModal: !(!e || !e.hasUnsavedChanges) };
    }
    async function pc({ page: e, identity: n }) {
      if ((await fin.Application.getCurrentSync().getInfo()).initialOptions.enableBeforeUnload) {
        const s = await fin.Application.getCurrentSync().getViews(), l = B(e.layout.content).filter((S) => S.name && s.some((b) => b.identity.name === S.name)).map((S) => fin.View.wrapSync({ name: S.name, uuid: n.uuid })), w = await this.checkViewsForPreventUnload(l);
        if (w.viewsPreventingUnload.length > 0 && (await this.getUserDecisionForBeforeUnload({ ...w, windowId: n, windowShouldClose: !1, closeType: "page" })).viewsToClose.length !== l.length)
          return e.pageId, { shouldPageClose: !1 };
      }
      return { shouldPageClose: !0 };
    }
    async function fc({ pages: e, identity: n }) {
      const r = await Promise.all(e.map((w) => this.shouldPageClose({ page: w, closeType: "window", identity: n }))), { pagesPreventingClose: s, pagesNotPreventingClose: l } = e.reduce((w, S, b) => r[b].shouldPageClose ? { pagesPreventingClose: w.pagesPreventingClose, pagesNotPreventingClose: [...w.pagesNotPreventingClose, S] } : { pagesNotPreventingClose: w.pagesNotPreventingClose, pagesPreventingClose: [...w.pagesPreventingClose, S] }, { pagesPreventingClose: [], pagesNotPreventingClose: [] });
      return this.handlePagesAndWindowClose({ pagesNotPreventingClose: l, pagesPreventingClose: s, identity: n });
    }
    async function hc({ pagesPreventingClose: e, pagesNotPreventingClose: n, identity: r }) {
      return { shouldWindowClose: e.length === 0 };
    }
    async function gc({ page: e }) {
      return Pa(e);
    }
    async function mc(e) {
      return { hasUnsavedChanges: !0 };
    }
    const wc = async () => {
      const e = c(), n = (await He()).map((r) => e.Browser.wrapSync(r.identity));
      await Promise.all(n.map(async (r) => {
        const s = await r.getPages();
        await Promise.all(s.map(async (l) => {
          l.title, await r.updatePage({ pageId: l.pageId, page: { hasUnsavedChanges: !1 } }), l.pageId, l.title, await mi({ ...l, hasUnsavedChanges: !1 });
        }));
      }));
    }, Mo = /* @__PURE__ */ new Map(), yc = () => Mo, vi = (e) => Mo.delete(e);
    let Io = !1;
    const bc = () => {
      Io || (Io = !0, fin.Window.wrapSync(de).once("closed", () => {
        Io = !1, (async (e, n) => {
          await vr(Na(e), { source: "Store", ...n });
        })(fin.me.identity, { type: "Navigation", action: "Close Store", skipValueHashing: !0 });
      }));
    };
    let Ea, ki, Ao;
    const Si = async () => (Ao === void 0 && (Ao = !!(await Oe()).disableOpenFinAnalytics), Ao);
    async function vc(e) {
      e.forEach((r) => {
        var s, l;
        r.type === "Page" ? r.action === "Open Page" ? (s = r.data.uuid, l = r, Mo.set(s, l)) : r.action === "Close Page" && vi(r.data.uuid) : r.source === "Store" && r.action !== "Close" && bc();
      }), await (async (r) => {
        Ea != null && Ea.sendToOpenFin && (await Si() || r.forEach(async (s) => {
          const l = _n({}, s);
          l.entityId && (l.entityId.uuid = await kr(l.entityId.uuid), l.entityId.name = await kr(l.entityId.name)), !s.skipValueHashing && "value" in l && (l.value = await kr(l.value)), ki(l);
        }));
      })(e);
      const n = e.map(({ skipValueHashing: r, ...s }) => s);
      this.handleAnalytics(n);
    }
    const kc = async (e) => {
      Ea = e, Ea != null && Ea.sendToOpenFin && !await Si() && (() => {
        const r = De, s = r + C.Analytics, l = document.createElement("IFRAME");
        l.setAttribute("src", s), l.setAttribute("style", "width: 0px !important"), l.setAttribute("style", "height: 0px !important"), l.setAttribute("style", "display: none !important"), document.body.appendChild(l), ki = async (w) => {
          l.contentWindow.postMessage(w, r);
        };
      })();
      const n = fin.Application.getCurrentSync();
      n.addListener("view-created", async (r) => {
        var s;
        un({ type: "View", action: "Open View", value: r.viewIdentity.name, data: { uuid: r.viewIdentity.uuid, url: await (s = r.viewIdentity, fin.View.wrapSync(s).getInfo().then((l) => l.url)) } });
      }), n.addListener("view-destroyed", async (r) => {
        un({ type: "View", action: "Close View", value: r.viewIdentity.name, data: { uuid: r.viewIdentity.uuid } });
      }), n.addListener("window-closed", (r) => {
        r.name.startsWith(ue.BrowserMenu) || (un({ type: "Window", action: "Close Window", value: r.name, data: { uuid: r.uuid } }), (async () => {
          const s = yc(), l = await Dr();
          if (l.length === s.size) return;
          const w = l.reduce((S, b) => S.set(b.pageId, 1), /* @__PURE__ */ new Map());
          for (const [S, b] of s) w.has(S) || (b.action = "Close Page", un(b), vi(S));
        })());
      });
    }, Sc = Dn({ alwaysOnTop: !0, autoShow: !1, frame: !1, resizable: !1, showTaskbarIcon: !1 }), Pc = /* @__PURE__ */ function(e = Sc) {
      const n = /* @__PURE__ */ new Map();
      return async (r, s, l, w, S) => {
        if (n.has(r)) {
          const { currentUrl: X, currentName: Y } = n.get(r);
          if (X === s) return;
          await fin.Window.wrapSync({ uuid: fin.me.uuid, name: Y }).close();
        }
        const b = `${ue.BrowserIndicator}-${Date.now()}${Math.random()}`;
        n.set(r, { currentUrl: s, currentName: b });
        const N = `New ${w} indicator: ${l} ${S}`, V = await fin.Platform.getCurrentSync().createWindow({ ...e, name: b, url: s });
        ((X, Y) => {
          const ae = document.createElement("div");
          ae.setAttribute("role", "alert"), ae.setAttribute("aria-live", "polite"), ((le) => {
            le.style.position = "absolute", le.style.width = "1px", le.style.height = "1px", le.style.padding = "0", le.style.margin = "-1px", le.style.overflow = "hidden", le.style.whiteSpace = "nowrap", le.style.border = "0";
          })(ae), document.body.appendChild(ae), setTimeout(() => {
            ae.innerHTML = X;
          }, 300), setTimeout(() => {
            document.body.removeChild(ae);
          }, 1e3);
        })(N), V.once("closed", () => {
          n.delete(r);
        });
      };
    }();
    async function Eo(e) {
      const { parentBrowserName: n } = e;
      return n && n.includes(ue.BrowserWindow) && fin.me.name !== n ? (await vt({ uuid: fin.me.uuid, name: n })).dispatch(wt.ShowBrowserIndicator, e) : async function(r) {
        const { type: s, message: l, parentBrowserName: w, secondaryMessage: S, icon: b, isEnterprise: N, positioning: V } = r, X = new URLSearchParams();
        if (X.append("type", s), X.append("message", l), X.append("parentName", w || ""), X.append("secondaryMessage", S || ""), X.append("icon", b || ""), X.append("isEnterprise", `${N}` || ""), V === kn.RelativeToMonitor && X.append("positioning", kn.RelativeToMonitor), w) {
          const le = g(w ? { uuid: ht, name: w } : void 0), Pe = `${(Y = await le.getBounds()).top},${Y.left},${Y.height},${Y.width},${Y.bottom},${Y.right},${Y.content.top},${Y.content.left},${Y.content.height},${Y.content.width}`;
          X.append("parentBounds", Pe);
        }
        var Y;
        const ae = `${(N ? await qt() : await dn()) + C.BrowserIndicator}#${X.toString()}`;
        return Pc("browser" + w, ae, l, s, S);
      }(e);
    }
    async function ao(e) {
      const n = e.isEnterprise ?? await Et(e.parentBrowserName ? { uuid: ht, name: e.parentBrowserName } : void 0);
      return Eo({ type: "success", message: e.message, parentBrowserName: e.parentBrowserName, secondaryMessage: e.secondaryMessage, icon: e.icon, isEnterprise: n, positioning: e.positioning });
    }
    const _a = async (e = k) => {
      const { workspacePlatform: n } = await g(e).getOptions(), r = n == null ? void 0 : n.newPageUrl, s = n == null ? void 0 : n.newTabUrl;
      return { newPageUrl: r, newTabUrl: s };
    }, ro = async (e = k) => {
      const n = await Et(e) || rn(), r = n ? null : await c().Browser.getUniquePageTitle();
      let s;
      if (e && await Ee(e)) s = await (async (w, S = k) => {
        const { newPageUrl: b } = await _a(S);
        if (!b) throw new Error("Trying to create a new page without a newPageUrl set");
        return _(w, b, S);
      })(r, e);
      else if (n) {
        const w = await pn();
        s = await _(r, w);
      }
      n && (s.settings = s.settings ?? {}, s.dimensions = s.dimensions ?? {}, s.settings.hasHeaders = !1, s.settings.reorderEnabled = !0, s.dimensions.headerHeight = 0);
      const l = await Fn(r, s);
      return n && (l.hasUnsavedChanges = !1), l;
    }, xc = async (e, n, r) => {
      const { windowOptions: s, content: l } = await (async (b, N) => {
        const V = await Et(N);
        return { title: "Switch Workspace", windowOptions: { url: await Ut(V, !1) + C.ResponseModal, name: ue.BrowserMenu, defaultHeight: 134, defaultWidth: 410, modalParentIdentity: N }, content: { title: $("switchWorkspaceModal", { workspace: b }), body: $("switchWorkspaceModal.warning"), buttons: { right: [{ label: $("global.cancel"), type: "secondary", id: "Cancel" }, { label: $("global.confirm"), type: "primary", id: "Confirm" }] } } };
      })(n, r ? void 0 : e), w = await xn(s, e, r), S = { ...s, top: w.top, left: w.left };
      return (await Zn({ options: S, content: l })).data.actionName === "Confirm";
    }, Cc = async ({ workspaceTitle: e, windowIdentity: n }) => {
      const { windowOptions: r, content: s } = await (async ({ workspaceTitle: S, windowIdentity: b }) => {
        const N = await Et(b);
        return { title: "Delete Workspace", windowOptions: { url: await Ut(N, !1) + C.ResponseModal, name: ue.BrowserMenu, defaultHeight: 144, defaultWidth: 410, modalParentIdentity: b }, content: { title: $("deleteWorkspaceModal"), body: `${S}`, buttons: { right: [{ label: $("global.cancel"), type: "secondary", id: "Cancel" }, { label: $("global.confirm"), type: "primary", id: "Confirm" }] } } };
      })({ workspaceTitle: e, windowIdentity: n }), l = await xn(r, r.modalParentIdentity), w = { ...r, top: l.top, left: l.left };
      return (await Zn({ options: w, content: s })).data.actionName === "Confirm";
    }, Pi = async (e, n, r) => {
      const { windowOptions: s, content: l } = await (async (b, N, V) => {
        const X = await Et(b);
        return { title: "Platform Quit", windowOptions: { url: await Ut(X, !1) + C.ResponseModal, name: ue.BrowserMenu, defaultHeight: 134, defaultWidth: 410, modalParentIdentity: V ? void 0 : b }, content: { title: $(N === "Platform" ? "closePlatform" : "closePlatform.workspace", { workspace: N }), body: $("closePlatform.warning"), buttons: { right: [{ label: $("global.cancel"), type: "secondary", id: "Cancel" }, { label: $("global.confirm"), type: "primary", id: "Confirm" }] } } };
      })(e, n, r), w = await xn(s, e, r), S = { ...s, top: w.top, left: w.left };
      return (await Zn({ options: S, content: l })).data.actionName === "Confirm";
    }, Mc = async (e) => {
      const { windowOptions: n, content: r } = await (async (w) => {
        const S = await Et(w);
        return { title: "Restore Changes", windowOptions: { url: await Ut(S, !1) + C.ResponseModal, name: ue.BrowserMenu, defaultHeight: 134, defaultWidth: 410, modalParentIdentity: w }, content: { title: $("restoreModal"), body: $("modal.discardWarning"), buttons: { right: [{ label: $("global.cancel"), type: "secondary", id: "Cancel" }, { label: $("global.confirm"), type: "primary", id: "Confirm" }] } } };
      })(e), s = await xn(n, n.modalParentIdentity), l = { ...n, top: s.top, left: s.left };
      return (await Zn({ options: l, content: r })).data.actionName === "Confirm";
    }, Ic = async (e, n) => {
      const { windowOptions: r, content: s } = await (async (S, b) => {
        const N = await Et(S);
        return { title: "Delete Page", windowOptions: { url: new URL(await Ut(N, !1) + C.ResponseModal).toString(), name: ue.BrowserMenu, defaultHeight: 172, defaultWidth: 464, modalParentIdentity: S }, content: { title: $("enterpriseDeleteModal.deleteSupertab", { title: b }), body: $("enterpriseDeleteModal.deleteSupertabWarning"), buttons: { right: [{ label: $("global.cancel"), type: "secondary", id: "Cancel", variant: N ? "outline" : void 0 }, { label: $("global.delete"), type: "primary", id: "Delete", variant: N ? "submit" : void 0 }] } } };
      })(e, n), l = await xn(r, r.modalParentIdentity), w = { ...r, top: l.top, left: l.left };
      return (await Zn({ options: w, content: s })).data.actionName === "Delete";
    }, Ac = async ({ identity: e, title: n, description: r }) => {
      var N;
      const { windowOptions: s, content: l } = await (async (V, X, Y) => ({ title: "Update Version", windowOptions: { url: await qt() + C.ResponseModal, name: ue.UpdateVersionModal, defaultHeight: 172, defaultWidth: 464, modalParentIdentity: V, preventBlur: !0, closeOnResponse: !0, includeInSnapshots: !1 }, content: { title: X, body: Y, buttons: { right: [{ label: "Snooze", type: "secondary", id: "snooze" }, { label: "Restart", type: "primary", id: "restart" }] } } }))(e, n, r), w = fin.Window.wrapSync({ uuid: e.uuid, name: `${s.name}--${(N = s.modalParentIdentity) == null ? void 0 : N.name}` });
      try {
        if (await (w == null ? void 0 : w.isShowing())) return;
      } catch {
      }
      const S = await xn(s, s.modalParentIdentity), b = { ...s, top: S.top, left: S.left };
      return (await Zn({ options: b, content: l })).data;
    };
    async function xi({ options: e, ...n }) {
      var w;
      if (!(e != null && e.skipPrompt || await xc(e == null ? void 0 : e.promptContainerWindowIdentity, n.title, e == null ? void 0 : e.shouldCenterModalOnMonitor))) return !1;
      const s = !!(await fin.Application.getCurrentSync().getChildWindows()).find(({ identity: S }) => S.name === ue.DockCompanion || S.name === $t) || rn() ? { closeExistingWindows: !1, closeSnapshotWindows: !0 } : { closeExistingWindows: ((w = e == null ? void 0 : e.applySnapshotOptions) == null ? void 0 : w.closeExistingWindows) ?? !0 };
      return await c().applySnapshot(n.snapshot, { ...(e == null ? void 0 : e.applySnapshotOptions) ?? {}, ...s }), _o(n), Eo({ type: "success", message: $("successIndicator.workspaceSwitched"), positioning: kn.RelativeToMonitor }).catch(console.warn), !0;
    }
    async function Ec(e) {
      try {
        return await xi(e);
      } catch (n) {
        return console.error("failed to apply the current workspace: ", n), !1;
      }
    }
    async function Ci(e) {
      try {
        const n = await async function() {
          const r = c(), s = await r.getCurrentWorkspace({ skipSnapshotUpdate: !0 });
          return (await r.Storage.getWorkspaces()).find((l) => l.workspaceId === s.workspaceId);
        }();
        return n ? e != null && e.skipPrompt || await Mc(e == null ? void 0 : e.promptContainerWindowIdentity) ? (await xi({ options: { skipPrompt: !0, applySnapshotOptions: e == null ? void 0 : e.applySnapshotOptions }, ...n }), "success") : "user-declined" : "not-saved-workspace";
      } catch (n) {
        throw console.error("failed to restore last saved workspace: ", n), n;
      }
    }
    function _o(e) {
      if (typeof localStorage < "u") try {
        const n = JSON.stringify(e);
        va(Ke.CurrentWorkspaceId, n);
      } catch (n) {
        console.error("failed to set the active workspace: ", n);
      }
    }
    async function To() {
      const e = c(), n = await e.getSnapshot();
      return { workspaceId: an(), title: await Dc(), metadata: { APIVersion: Le }, snapshot: n };
    }
    async function _c(e) {
      if (typeof localStorage > "u") return To();
      const n = Gn(Ke.CurrentWorkspaceId);
      if (!n) return To();
      const r = JSON.parse(n);
      if (e != null && e.skipSnapshotUpdate) return r;
      const s = c(), l = await s.getSnapshot();
      return { ...r, metadata: { APIVersion: Le }, snapshot: l };
    }
    const Tc = async () => (await Fe(k)).dispatch(fe.GetSavedWorkspaces, void 0), Rc = async (e) => await (async (n) => (await Fe(k)).dispatch(fe.GetSavedWorkspace, n))(e.workspaceId) ? (async (n) => (await Fe(k)).dispatch(fe.UpdateSavedWorkspace, n))({ workspaceId: e.workspaceId, workspace: e }) : (async (n) => (await Fe(k)).dispatch(fe.CreateSavedWorkspace, n))({ workspace: e });
    async function Dc(e = "Untitled Workspace") {
      const n = (await Tc()).map(({ title: r }) => r);
      return Co(e, n);
    }
    const Oc = (e) => ({ ...e, snapshot: { ...e.snapshot, windows: e.snapshot.windows.map((n) => {
      var r, s;
      return { ...n, workspacePlatform: { ...n.workspacePlatform, pages: (s = (r = n.workspacePlatform) == null ? void 0 : r.pages) == null ? void 0 : s.map((l) => ({ ...l, hasUnsavedChanges: !1 })) } };
    }) } }), Wc = async (e, n) => {
      await (n ?? c()).Storage.saveWorkspace(Oc(e)), await (async () => (await Fe(k)).dispatch(fe.MarkUnsavedPagesAsSavedInternal, void 0))();
    }, Mi = async (e) => {
      const n = c();
      await (async ({ showModal: r, afterSuccessSave: s }) => {
        const l = c(), w = await l.getCurrentWorkspace(), S = await l.Storage.getWorkspacesMetadata(), b = w.workspaceId;
        S.some((N) => N.workspaceId === b) ? (await Wc(w, l), await l.setActiveWorkspace(w), await s()) : await r();
      })({ showModal: async () => {
        await n.Browser.wrapSync(e)._openSaveModal({ menuType: Ne.SAVE_WORKSPACE_AS });
      }, afterSuccessSave: async () => {
        await ao({ message: $("successIndicator.workspaceSaved"), parentBrowserName: e.name });
      } });
    }, Ro = (e) => {
      c().Browser.wrapSync(e)._openSaveModal({ menuType: Ne.SAVE_WORKSPACE_AS });
    }, Ii = async (e) => {
      const n = c().Browser.wrapSync(e), { newPageUrl: r } = await _a(), s = await ro(e), l = r || void 0;
      await n._addDefaultPage({ identity: e, page: s, newPageUrl: l });
    }, Do = async (e, n) => {
      const r = c().Browser.wrapSync(e), s = await c().Storage.getPages(), l = (await r.getPages()).find((V) => n ? V.pageId === n : V.isActive), w = s.some((V) => l.pageId === V.pageId), S = await Et(e);
      if (w) try {
        await c().Storage.savePage((N = l, { ...N, hasUnsavedChanges: void 0, parentIdentity: void 0, isActive: void 0, layout: M(N.layout) })), await r.updatePage({ pageId: l.pageId, page: { hasUnsavedChanges: !1 } }), ao({ message: $(S ? "enterpriseSuccessIndicator.supertabSaved" : "successIndicator.pageSaved"), parentBrowserName: e.name, secondaryMessage: $(S ? "enterpriseSuccessIndicator.supertabHasBeenSaved" : "successIndicator.pageHasBeenSaved", { title: l.title }), isEnterprise: S });
      } catch {
        Eo({ type: "error", message: (b = { message: $("errorIndicator.pageSaveFailed"), parentBrowserName: l.parentIdentity.name }).message, parentBrowserName: b.parentBrowserName, icon: b.icon, isEnterprise: b.isEnterprise || !1, positioning: b.positioning });
      }
      else r._openSaveModal({ id: l.pageId, menuType: Ne.SAVE_PAGE });
      var b, N;
    }, Oo = async (e, n) => {
      const r = c().Browser.wrapSync(e), s = (await r.getPages()).find((l) => n ? l.pageId === n : l.isActive);
      r._openSaveModal({ id: s.pageId, menuType: Ne.SAVE_PAGE_AS }), un({ type: "Page Modal", action: "Select Save As", value: s.title, skipValueHashing: !0 });
    }, Bc = async (e, n) => {
      await (async ({ workspaceItemData: r, winIdentity: s, positioning: l }) => {
        const w = c(), S = (await w.Storage.getWorkspacesMetadata()).find((b) => b.workspaceId === r.workspaceId);
        S && await Cc({ workspaceTitle: S.title, windowIdentity: s }) && (await w.Storage.deleteWorkspace(r.workspaceId), await ao({ message: $("successIndicator.workspaceDeleted"), parentBrowserName: s == null ? void 0 : s.name, positioning: l }));
      })({ workspaceItemData: n, winIdentity: e });
    }, Nc = { title: "Downloads", pageId: "downloads-page-id", layout: { content: [{ type: "stack", content: [{ type: "component", componentName: "view", componentState: { name: "show-download-view", url: "chrome://downloads/" } }] }] } }, Ai = async (e) => {
      const n = g(e), r = await n.getCurrentViews(), s = (await c().Browser.wrapSync(n.identity).getPages()).find((l) => l.isActive);
      try {
        const l = (await Promise.all(r.map(async (w) => ({ identity: w.identity, info: await fin.View.wrapSync(w.identity).getInfo() })))).find((w) => w.info.url === "chrome://downloads/");
        if (l) await fin.View.wrapSync(l.identity).focus();
        else {
          const w = c();
          if (s != null && s.isLocked) {
            const S = (await fin.Application.getCurrentSync().getChildWindows()).find((b) => b.identity.name === "show-download-window");
            return void (S ? await S.focus() : w.Browser.createWindow({ name: "show-download-window", workspacePlatform: { pages: [Nc] } }));
          }
          (await c().createView({ name: "show-download-view", url: "chrome://downloads/", target: e }, e)).focus();
        }
      } catch (l) {
        console.error("Couldn't open downloads view", l);
      }
    }, Wo = async (e) => {
      const n = e.map((r) => fin.View.wrapSync(r).print());
      await Promise.all(n);
    }, Ei = (e) => {
      const [n, r, s] = e.split(".").map((l) => l === "x" ? 0 : 1);
      return 100 * n + 10 * r + 1 * s;
    };
    class _i extends Error {
    }
    const Fc = async (e) => {
      try {
        const r = await async function() {
          const s = await Oe(), l = (s == null ? void 0 : s.translationOverridesUrl) ?? "https://workspace.openfin.co/workspace/assets/translation-override.json";
          if (l === "") throw new _i("Empty string provided as url to translationOverridesUrl, overrides will not be fetched.");
          return await fetch(l).then((w) => w.json());
        }();
        (n = ((s) => {
          const l = Le.split(".");
          return Object.keys(s).filter((w) => {
            const S = w.split(".");
            if (S.length !== 3) return console.warn(`Encountered a translation override version string in an unsupported format: ${w}. Versions must be in A.B.C format where A, B, C are either integers or the wildcard symbol 'x'.`), !1;
            const [b, N, V] = S;
            return !(b !== l[0] && b !== "x" || N !== l[1] && N !== "x" || V !== l[2] && V !== "x");
          });
        })(r), [...n].sort((s, l) => Ei(s) - Ei(l))).forEach((s) => {
          const l = r[s];
          Object.keys(l).forEach((w) => {
            e.addResourceBundle(w, "translation", l[w], !0, !0);
          });
        });
      } catch (r) {
        r instanceof _i ? console.warn(r.message) : console.error("Error applying a translation override: ", r);
      }
      var n;
    };
    function Ti() {
      return H().language;
    }
    const Lc = async (e) => {
      Ri(e), ((n) => {
        H().changeLanguage(n);
      })(e), await (async (n) => {
        const r = await He();
        return Promise.all(r.map(async (s) => {
          await (await vt(s.identity)).dispatch(wt.SetSelectedLanguage, n);
        }));
      })(e);
    };
    function Vc() {
      if (!H().options.resources) throw new Error("No language resources found");
      return { currentLanguage: Ti(), resources: H().options.resources };
    }
    async function Uc(e = "en-US") {
      Ri(e), function(n = "en-US") {
        H().use(L.initReactI18next).init({ lng: n, fallbackLng: "en-US", resources: { "en-US": { translation: he }, "ja-JP": { translation: pe }, "zh-CN": { translation: Q }, "ko-KR": { translation: me }, "ru-RU": { translation: ke }, "de-DE": { translation: be }, "zh-Hant": { translation: re } }, interpolation: { escapeValue: !1 } });
      }(e), await Fc(H());
    }
    function Ri(e) {
      if (!Rt.includes(e)) throw new Error(`The ISO language provided ${e} is not supported`);
    }
    const tr = /* @__PURE__ */ new Map();
    let Bo = Date.now();
    function Di() {
      const e = Date.now();
      return Bo = Math.max(e, Bo + 1), Bo;
    }
    async function jc() {
      const e = Array.from(tr.values()).sort((n, r) => r.lastFocusedTime - n.lastFocusedTime);
      if (e.length > 0) return e[0].identity;
      try {
        const n = Gn(Ke.LastFocusedBrowserWindow);
        if (!n) return;
        const r = JSON.parse(n);
        if (await ft(r)) return await Ta(r), r;
      } catch (n) {
        console.error("failed to get last focused browser window from localStorage:", n);
      }
    }
    async function Oi() {
      return (await fin.Application.getCurrentSync().getChildWindows()).filter((n) => n.identity.name.startsWith(ue.BrowserWindow));
    }
    async function Kc() {
      const e = c(), n = fin.Window.wrapSync({ uuid: fin.me.uuid, name: ue.DockCompanion }), r = await on(await n.getBounds()), s = await async function(w, S, b) {
        const N = await fin.System.getMonitorInfo(), V = (b == null ? void 0 : b.availableRect) ?? N.primaryMonitor.availableRect, X = { width: V.right - V.left, height: V.bottom - V.top }, Y = Math.min(w, X.height), ae = Math.min(S, X.width), le = V.top + Math.floor((X.height - Y) / 2);
        return { height: Y, width: ae, left: V.left + Math.floor((X.width - ae) / 2), top: le };
      }(600, 900, r), l = await ro();
      return (await e.Browser.createWindow({ defaultHeight: 600, defaultWidth: 900, defaultLeft: s.left, defaultTop: s.top, workspacePlatform: { pages: [l] } })).identity;
    }
    async function Ta(e, n, r = !1) {
      if (!await Ee(e)) return;
      const s = fin.Window.wrapSync(e), l = n ?? await s.isShowing(), w = tr.get(e.name), S = { identity: e, lastFocusedTime: r ? Di() : (w == null ? void 0 : w.lastFocusedTime) ?? Di(), isVisible: l };
      tr.set(e.name, S), r && function(b) {
        if (typeof localStorage < "u") try {
          const N = JSON.stringify(b);
          va(Ke.LastFocusedBrowserWindow, N);
        } catch (N) {
          console.error("failed to save last focused browser window: ", N);
        }
      }(e);
    }
    async function $c(e = fin.me.identity) {
      tr.delete(e.name);
    }
    const Hc = La()(async () => {
      const e = await fin.Platform.getCurrentSync().Application.getChildWindows();
      let n, r = !1;
      for (const s of e) if (s.identity.name === ue.BrowserMenu || s.identity.name === ue.BrowserSaveMenu ? n = s : await Ee(s.identity) && (r = !0), r) break;
      !r && n && n.close();
    }, 100, { leading: !1, trailing: !0 });
    let No = {};
    const Gc = async ({ actionId: e, payload: n }) => {
      if (typeof No[e] != "function") throw new Error(`Cannot find a configured function for the action '${e}'`);
      return No[e](n);
    };
    let Fo;
    const zc = () => `custom-context-menu-${c().identity.uuid}-${Le}`, qc = () => `custom-bookmark-context-menu-${c().identity.uuid}-${Le}`, Wi = async () => (Fo || (Fo = await fin.InterApplicationBus.Channel.connect(zc())), Fo);
    var Bi, nr;
    (function(e) {
      e.Save = "Save", e.SaveAs = "SaveAs";
    })(Bi || (Bi = {})), function(e) {
      e.GlobalMenu = "global-menu", e.ContextMenu = "context-menu", e.RenameSupertab = "rename-supertab", e.AddEditBookmark = "add-edit-bookmark", e.DropdownMenu = "dropdown-menu", e.ZoomControls = "zoom-controls";
    }(nr || (nr = {}));
    const Ni = (e, n = "") => e.toLowerCase().includes(n.toLowerCase()), oo = "visited-sites", Lo = "removed-tab-stack", ea = Tt && Be && Zr("openfin-home-pages", "pages"), ar = Tt && Be && new Hn.Dexie(oa("openfin-enterprise-site-history"));
    ar && ar.version(0.1).stores({ [oo]: "id, url" });
    const rr = Tt && Be && new Hn.Dexie(oa("openfin-enterprise-tab-history"));
    async function Vo(e) {
      if (!ea) throw new Error("Unable to get page - IndexDB not supported");
      const n = await ea.pages.get(e);
      if (n) return n.pageId = e.toString(), n.title = n.title || n.pageId, n;
    }
    async function Jc(e) {
      if (!ea) throw new Error("Unable to get page list - IndexDB not supported");
      const n = await ea.pages.toCollection().keys(), r = (await Promise.all(n.map((s) => Vo(s.toString())))).filter((s) => !!s);
      return e ? r.filter((s) => Ni(s.title, e)) : r;
    }
    async function Fi({ page: e }) {
      if (!ea) throw new Error("Unable to create page - IndexDB not supported");
      await ea.pages.put(e, e.pageId);
    }
    async function Li(e) {
      if (!ea) throw new Error("Unable to delete page - IndexDB not supported");
      await ea.pages.delete(e);
    }
    async function Yc({ pageId: e, page: n }) {
      if (!ea) throw new Error("Unable to update page - IndexDB not supported");
      if (await Vo(e) === void 0) throw new Error("page not found");
      await Fi({ page: n }), e !== n.pageId && await Li(e);
    }
    rr && rr.version(0.1).stores({ [Lo]: "" });
    const Zc = async (e) => {
      if (!rr) throw new Error("Unable to add removed tab - IndexDB not supported");
      const n = Date.now().toString(), r = { ...e, id: n };
      await rr[Lo].put(r, n);
    };
    function Qc(e) {
      return e.type === "app" || e.type === "website";
    }
    const Xc = async (e) => {
      if (e.type === "website") {
        const n = e, r = n.url || "";
        let s = await ar[oo].get(r);
        s && Qc(s) ? (s.icon = n.icon, s.title = n.title, s.type = n.type, s.visitCount = (s.visitCount || 0) + 1, s.url = n.url) : s = { ...n, id: r, visitCount: 1, accessTime: void 0 }, s.accessTime = Date.now(), await ar[oo].put(s, r);
      }
    }, eu = async () => {
      if (!ar) throw new Error("Unable to get frequently visited sites - IndexDB not supported");
      const e = ar[oo], n = await e.toCollection().toArray();
      return n.sort((r, s) => (s.visitCount || 0) - (r.visitCount || 0)), (n.length > 5 ? n.slice(0, 5) : n).map(({ id: r, ...s }) => s);
    }, Or = async () => (await fin.System.getHostSpecs()).name.toLowerCase().includes("windows"), Vi = async ({ browserIdentity: e, url: n, shiftKey: r, activePage: s, pages: l }) => {
      const w = c().Browser.wrapSync(e), S = await _(n, n, e), b = { ...await Fn(n, S), attachedPageType: "singleView", singleViewName: n }, N = l.findIndex((V) => V.pageId === s.pageId);
      await w._addPage(b, { index: N + 1 }), r && await w.setActivePage(b.pageId);
    }, tu = async (e) => {
      const { url: n } = e.bookmark, { sourceIdentity: r, sourceEvent: s } = e, l = await Or(), w = c();
      let S = !1, b = r;
      if (!await Ee(r)) {
        const Pe = await async function() {
          const Te = Array.from(tr.values());
          for (let lt = Te.length - 1; lt >= 0; lt--) if (Te[lt].isVisible) return Te[lt].identity;
        }();
        if (!Pe) return await (async (Te) => {
          const lt = c(), Ue = await _(Te.url, Te.url), ct = await Fn(Te.url, Ue);
          ye((await lt.Browser.createWindow({ workspacePlatform: { pages: [ct] } })).identity);
        })(e.bookmark);
        S = !0, b = Pe;
      }
      const N = w.Browser.wrapSync(b), V = await N.getPages(), X = (await N._getLayoutsWithSelectedViews()).find((Pe) => Pe.isActive);
      if (!X) throw Error(`Browser ${b} does not have any active layouts`);
      const Y = V.find((Pe) => Pe.isActive), ae = D(Y.layout.content) === 1, le = X.selectedViews[0];
      S ? await Vi({ browserIdentity: b, url: n, shiftKey: !0, activePage: Y, pages: V }) : ae ? await (async ({ isWindows: Pe, currentViewId: Te, browserIdentity: lt, url: Ue, activePage: ct, pages: Qe, sourceEvent: xt }) => {
        const { ctrlKey: yn, metaKey: $e, shiftKey: _t } = xt;
        (Pe ? yn : $e) ? await Vi({ browserIdentity: lt, url: Ue, shiftKey: _t, activePage: ct, pages: Qe }) : await fin.View.wrapSync(Te).navigate(Ue);
      })({ isWindows: l, currentViewId: le, browserIdentity: b, url: n, activePage: Y, pages: V, sourceEvent: s }) : await (async ({ isWindows: Pe, currentViewId: Te, browserIdentity: lt, url: Ue, activeLayout: ct, sourceEvent: Qe }) => {
        const { ctrlKey: xt, metaKey: yn, shiftKey: $e } = Qe;
        if (Pe ? xt : yn) {
          const _t = fin.View.wrapSync(Te), Ot = await _t.getCurrentStack(), bn = (await Ot.getViews()).findIndex((sr) => sr.name === Te.name), ir = { url: Ue, browserIdentity: lt, title: Ue };
          await Ot.addView(ir, { index: bn + 1 });
        } else await fin.View.wrapSync(ct.selectedViews[0]).navigate(Ue);
      })({ isWindows: l, currentViewId: le, browserIdentity: b, url: n, activeLayout: X, sourceEvent: s });
    };
    var We;
    (function(e) {
      e.Label = "normal", e.Separator = "separator", e.Submenu = "submenu", e.Checkbox = "checkbox";
    })(We || (We = {}));
    let Uo = { locked: !1, x: -1, y: -1 };
    const nu = async (e, n, r, s) => {
      if (!Be) throw new Error("showEnterpriseContextMenu can only be used in a Here env. Avoid calling this method during pre-rendering.");
      if (!s && !fin.me.isWindow) throw new Error("showEnterpriseContextMenu can only be used in a Here window.");
      const { x: l, y: w, template: S } = e;
      if (((X, Y) => {
        const { x: ae, y: le, locked: Pe } = Uo;
        return Pe && X === ae && Y === le;
      })(l, w)) return new Promise((X, Y) => X({ data: void 0 }));
      Uo = { locked: !0, x: l, y: w };
      const b = await Wi(), N = an(), V = new Promise((X, Y) => {
        b.register(`response-${N}`, (ae) => {
          Uo.locked = !1, b.remove(`response-${N}`), X(ae);
        });
      });
      return await b.dispatch("open", { parentIdentity: s.identity, responseIdentity: k, requestId: N, type: n, anchorBehavior: r, x: l, y: w, payload: { template: S } }), V;
    }, en = { type: We.Separator, data: void 0 }, au = async () => ({ type: We.Submenu, label: $("contextMenu.print"), submenu: [{ type: We.Label, label: $("contextMenu.submenu.print"), data: { type: se.Print } }, { type: We.Label, label: $("contextMenu.submenu.printAll"), data: { type: se.PrintAll } }, en, { type: We.Label, label: $("contextMenu.printScreen"), data: { type: se.PrintScreen } }] }), jo = () => ({ type: We.Label, label: $("contextMenu.closeWindow"), data: { type: Z.CloseWindow } }), Ko = (e) => ({ type: We.Label, label: $(e ? "contextMenu.quitEnterpriseBrowser" : "contextMenu.quitPlatform"), data: { type: Z.Quit } }), Ui = () => ({ type: We.Label, label: $("contextMenu.newWindow"), data: { type: Z.NewWindow } }), ji = (e) => ({ type: We.Label, label: $(e ? "enterpriseContextMenu.saveSupertab" : "contextMenu.savePage"), data: { type: Z.SavePage } }), Ki = (e) => ({ type: We.Label, label: $(e ? "enterpriseContextMenu.saveSupertabAs" : "contextMenu.savePageAs"), data: { type: Z.SavePageAs } }), $i = (e, n) => ({ type: We.Label, label: $(n ? "enterpriseContextMenu.newTab" : "contextMenu.newPage"), data: { type: Z.NewPage }, enabled: e }), Hi = () => ({ label: $("contextMenu.switchWorkspace") }), Gi = () => ({ label: $("contextMenu.deleteWorkspace") }), zi = () => ({ label: $("contextMenu.appearance") }), qi = (e, n, r) => n.map((s) => {
      const l = s.workspaceId === e.workspaceId;
      return { label: s.title, type: We.Checkbox, enabled: !l, checked: l, data: { type: r, workspaceId: s.workspaceId } };
    }), Ji = async () => {
      const e = await c().Theme.getSelectedScheme();
      return [{ label: $("theme.light"), type: We.Checkbox, checked: e === xe.Light, data: { type: Z.Appearance, scheme: xe.Light } }, { label: $("theme.dark"), type: We.Checkbox, checked: e === xe.Dark, data: { type: Z.Appearance, scheme: xe.Dark } }, { label: $("theme.system"), type: We.Checkbox, checked: e === xe.System, data: { type: Z.Appearance, scheme: xe.System } }];
    }, ru = async (e, n = []) => {
      const r = await at(), { newPageUrl: s } = await _a(e), l = await (async (Ue) => {
        const ct = g(Ue), { workspacePlatform: Qe } = await ct.getOptions();
        return Qe == null ? void 0 : Qe.disableMultiplePages;
      })(e), w = await (async (Ue) => {
        const ct = g(Ue), { workspacePlatform: Qe } = await ct.getOptions();
        return Qe == null ? void 0 : Qe.isLocked;
      })(e), S = await Et(e), b = [], N = n.length > 0;
      s && (b.push(Ui()), l || b.push($i(!w, S))), b.push(en);
      const V = c(), X = await V.getCurrentWorkspace({ skipSnapshotUpdate: !0 }), Y = await V.Storage.getWorkspacesMetadata(), ae = Y.find((Ue) => Ue.workspaceId === X.workspaceId), le = V.Browser.wrapSync(e), Pe = (await le.getPages()).find((Ue) => Ue.isActive), Te = !!Pe && await V.Storage.getPage(Pe.pageId);
      b.push({ type: We.Label, label: $("contextMenu.restore"), data: { type: Z.RestoreChanges }, enabled: !!ae }), b.push({ type: We.Label, label: $("contextMenu.saveWorkspace"), data: { type: Z.SaveWorkspace }, enabled: !!ae }), b.push({ type: We.Label, label: $("contextMenu.saveWorkspaceAs"), data: { type: Z.SaveWorkspaceAs } }), b.push({ type: We.Label, label: $("contextMenu.renameWorkspace"), data: { type: Z.RenameWorkspace }, enabled: !!ae }), Y.some((Ue) => Ue.workspaceId !== X.workspaceId) ? b.push({ label: Hi().label, submenu: qi(X, Y, Z.SwitchWorkspace), data: void 0 }, { label: Gi().label, submenu: qi(X, Y, Z.DeleteWorkspace), data: void 0 }) : b.push({ label: Hi().label, enabled: !1, data: void 0 }, { label: Gi().label, enabled: !1, data: void 0 }), b.push({ label: $("contextMenu.downloads"), data: { type: Z.Downloads } }), b.push({ label: zi().label, submenu: await Ji(), data: void 0 });
      const lt = { ...ji(S), enabled: !!Te };
      return b.push(en, lt, Ki(S), await (async (Ue) => {
        const ct = await Or();
        return { label: $("contextMenu.print"), submenu: [{ type: We.Label, label: $("contextMenu.submenu.print"), data: { type: Z.Print }, enabled: Ue }, { type: We.Label, label: $("contextMenu.submenu.printAll"), data: { type: Z.PrintAll } }, ...ct ? [en, { type: We.Label, label: $("contextMenu.printScreen"), data: { type: Z.PrintScreen } }] : []], data: void 0 };
      })(N)), r ? [...b, jo(), en, { type: We.Label, label: $("contextMenu.openStorefront"), data: { type: Z.OpenStorefront } }, en, Ko()] : [...b, en, jo(), en, Ko()];
    }, ou = async (e, n) => {
      const r = n.selectedViews[0], s = fin.View.wrapSync(r), l = await (async (w) => {
        const { newTabUrl: S } = await _a(w);
        if (!S) throw new Error("Trying to create a new page without a newTabUrl set");
        return { url: S, target: w, title: "New Tab" };
      })(e);
      await c().createView(l, e, s.identity);
    }, iu = async (e, n) => {
      const r = c().Browser.wrapSync(e), s = (await r.getPages()).find((S) => S.isActive), l = await fin.Window.wrapSync(e).getCurrentViews();
      if (n.length === l.length - (s.panels ?? []).length)
        return void (await vt(e)).dispatch(wt.ClosePage, { pageId: s == null ? void 0 : s.pageId });
      const w = fin.Platform.getCurrentSync();
      n.forEach(async (S) => {
        const b = await fin.View.wrapSync(S).getParentLayout();
        await w.closeView(S);
        const { hasUnsavedChanges: N } = await (async (V) => (await qe(k)).dispatch(fe.HandlePageChanges, V))({ page: { ...s, layout: await b.getConfig() }, identity: e, eventDetails: { type: Ce.ViewRemoved, viewIdentity: S } });
        N && await r.updatePage({ pageId: s.pageId, page: { hasUnsavedChanges: !0 } });
      });
    }, su = async (e, n) => {
      const r = await ((w) => Promise.all(w.map(async (S) => fin.View.wrapSync(S).getInfo())))(n), { newPageUrl: s, newTabUrl: l } = await _a(e);
      r.forEach(async (w) => {
        w.url !== s && w.url !== l && await fin.System.openUrlWithBrowser(w.url);
      });
    }, cu = (e, n) => {
      n.forEach(async (r) => {
        const s = fin.View.wrapSync(r);
        await (async (l, w) => {
          const { url: S } = await w.getInfo(), b = { ...await w.getOptions(), url: S, target: l, name: void 0 };
          await c().createView(b, l, w.identity);
        })(e, s);
      });
    }, Yi = async (e, n, r) => {
      const s = { newChannelId: n, selectedViews: r };
      (await vt(e)).dispatch(wt.AddToChannel, s);
    }, Zi = async (e, n) => {
      (await vt(e)).dispatch(wt.RemoveFromChannel, n);
    }, uu = async (e, n) => {
      if (!e) return;
      const r = n.identity, s = fin.Window.wrapSync(r);
      switch (un({ type: "View Tab Menu", action: "Select Menu Item", value: e.type, skipValueHashing: !0 }), e.type) {
        case se.Back:
          await (async (l) => {
            const w = l.map((S) => fin.View.wrapSync(S).navigateBack());
            await Promise.all(w);
          })(n.selectedViews);
          break;
        case se.Forward:
          await (async (l) => {
            const w = l.map((S) => fin.View.wrapSync(S).navigateForward());
            await Promise.all(w);
          })(n.selectedViews);
          break;
        case se.Print:
          await Wo(n.selectedViews);
          break;
        case se.PrintAll:
          await s.print({ content: "views", includeSelf: !1 });
          break;
        case se.PrintScreen:
          await s.print({ content: "screenshot" });
          break;
        case se.CloseViews:
          await iu(r, n.selectedViews);
          break;
        case se.OpenWithDefaultBrowser:
          await su(r, n.selectedViews);
          break;
        case se.ReloadViews:
          n.selectedViews.forEach(async (l) => {
            await fin.View.wrapSync(l).reload();
          });
          break;
        case se.NewView:
          await ou(r, n);
          break;
        case se.DuplicateViews:
          cu(r, n.selectedViews);
          break;
        case se.AddToChannel:
          Yi(r, e.option, n.selectedViews);
          break;
        case se.RemoveFromChannel:
          Zi(r, n.selectedViews);
          break;
        case se.Custom:
          if (e.action) {
            const l = { callerType: ut.ViewTabContextMenu, windowIdentity: r, selectedViews: n.selectedViews, customData: e.action.customData };
            c()._invokeCustomAction(e.action.id, l);
          }
      }
    }, $o = /* @__PURE__ */ new Map([["blue", { name: "Blue", color: "#0091EB" }], ["indigo", { name: "Indigo", color: "#6450FF" }], ["pink", { name: "Pink", color: "#E878CF" }], ["teal", { name: "Teal", color: "#24D1D1" }], ["green", { name: "Green", color: "#00AF78" }], ["orange", { name: "Orange", color: "#FF7D37" }], ["red", { name: "Red", color: "#F94144" }], ["yellow", { name: "Yellow", color: "#F9C74F" }], ["gray", { name: "Gray", color: "#828788" }]]);
    function Qi() {
      return { type: We.Label, label: $("contextMenu.manageDesktopSignals"), data: { type: te.ManageDesktopSignals } };
    }
    function Xi(e) {
      const n = Array.from($o.entries()), r = e.contextGroup;
      return { type: "widget", config: { type: "add-to-channel", channels: [...n.map(([s, l]) => ({ label: l.name, data: { type: te.AddToChannel, option: s }, color: l.color, checked: r === s })), { label: "unlink", data: { type: te.AddToChannel, option: "unlink" }, isNone: !0 }] }, label: "Link to Channel" };
    }
    let es = "Platform";
    const Ho = async () => es, lu = async (e, n) => {
      var S;
      if (!e) return;
      const r = n.identity, s = await vt(r), l = c().Browser.wrapSync(r), w = fin.Window.wrapSync(r);
      if (un({ type: "Global Menu", action: "Select Menu Item", value: e.type, skipValueHashing: !0, data: { action: (S = e.action) == null ? void 0 : S.id } }), !(await Et(r) && await (async (N, V) => {
        const X = V.identity, Y = c().Browser.wrapSync(X), ae = (await Y.getPages()).find((Te) => Te.isActive), le = Cr({ ...X, layoutName: ae.layoutContainerKey }), Pe = V.selectedViews;
        switch (N == null ? void 0 : N.type) {
          case Me.Lock:
            await Y.updatePage({ pageId: ae.pageId, page: { isLocked: !ae.isLocked } });
            break;
          case Me.AddToChanel:
            N.option ? await Yi(X, N.option, Pe) : N.option === null && await Zi(X, Pe);
            break;
          case Me.ManageDesktopSignals:
            await eo(X);
            break;
          case Z.NewWindow: {
            const Te = await ro(X);
            await c().Browser.createWindow({ workspacePlatform: { pages: [Te], windowType: "enterprise" } });
            break;
          }
          case Me.Pin: {
            const { alwaysOnTop: Te } = await Y.openfinWindow.getOptions();
            await Y.openfinWindow.updateOptions({ alwaysOnTop: !Te });
            break;
          }
          case Me.ShowHideTabs:
            await le.isShowingTabs() ? await le.hide() : await le.show();
            break;
          default:
            return !1;
        }
        return !0;
      })(e, n)))
        switch (e.type) {
          case Z.NewWindow: {
            const { newPageUrl: b } = await _a(r);
            if (!b) throw new Error("Trying to create a new empty window without a newPageUrl set");
            c().createView({ target: void 0, url: b });
            break;
          }
          case Z.NewPage:
            await Ii(r);
            break;
          case Z.CloseWindow:
            s.dispatch(wt.CloseBrowserWindow);
            break;
          case Z.SaveWorkspace:
            await Mi(r);
            break;
          case Z.SavePage:
            await Do(r);
            break;
          case Z.SavePageAs:
            await Oo(r);
            break;
          case Z.SaveWorkspaceAs:
            await Ro(r);
            break;
          case Z.RenameWorkspace:
            l._openSaveModal({ menuType: Ne.RENAME_WORKSPACE });
            break;
          case Z.SwitchWorkspace:
            await (async (b, N) => {
              const V = c(), X = (await V.Storage.getWorkspaces()).find((Y) => Y.workspaceId === N.workspaceId);
              V.applyWorkspace(X, { skipPrompt: !1, promptContainerWindowIdentity: b });
            })(r, e);
            break;
          case Z.DeleteWorkspace:
            await Bc(r, e);
            break;
          case Z.Downloads:
            await Ai(r);
            break;
          case Z.Appearance:
            await c().Theme.setSelectedScheme(e.scheme);
            break;
          case Z.Quit:
            {
              const b = Ho();
              await Pi(r, await b) && fin.Platform.getCurrentSync().quit();
            }
            break;
          case Z.OpenStorefront:
            (async () => await at() && ye(de))();
            break;
          case Z.RestoreChanges:
            await Ci();
            break;
          case Z.Print:
            await Wo(n.selectedViews);
            break;
          case Z.PrintAll:
            await w.print({ content: "views", includeSelf: !1 });
            break;
          case Z.PrintScreen:
            await w.print({ content: "screenshot" });
            break;
          case Z.Custom:
            if (e.action) {
              const b = { callerType: ut.GlobalContextMenu, windowIdentity: r, customData: e.action.customData };
              c()._invokeCustomAction(e.action.id, b);
            } else console.warn(`Encountered a Custom context menu option with an "action" property with value "${e.action}"`);
        }
    }, du = async (e, n, r) => {
      const s = c().Browser.wrapSync(n.identity), l = fin.Window.wrapSync(n.identity), w = await vt(n.identity), S = await Et();
      switch (e && un({ type: "Page Tab Menu", action: "Select Menu Item", value: e.type, skipValueHashing: !0 }), e == null ? void 0 : e.type) {
        case te.Save:
          await Do(n.identity, n.pageId);
          break;
        case te.SaveAs:
          await Oo(n.identity, n.pageId);
          break;
        case te.NewPage:
          await Ii(n.identity);
          break;
        case te.DeletePage:
          await (async (b, N) => {
            const V = c(), X = V.Browser.wrapSync(b), Y = (await V.Storage.getPages()).find((ae) => ae.pageId === N);
            Y && await Ic(b, Y.title) && (await V.Storage.deletePage(Y.pageId), await X.removePage(N), ao({ message: $("enterpriseSuccessIndicator.supertabDeleted"), parentBrowserName: b.name, secondaryMessage: $("enterpriseSuccessIndicator.supertabHasBeenDeleted", { title: Y.title }) }));
          })(n.identity, n.pageId);
          break;
        case te.Rename:
          await Et(n.identity) ? (await s.setActivePage(n.pageId), await (await Wi()).dispatch("open", { parentIdentity: n.identity, responseIdentity: k, type: nr.RenameSupertab, anchorBehavior: io.Center, x: r.left + r.width / 2 - 164, y: r.bottom - 8, payload: { pageId: n.pageId } })) : await s._openSaveModal({ menuType: Ne.RENAME_PAGE, id: n.pageId });
          break;
        case te.Duplicate:
          w.dispatch(wt.DuplicatePage, n.pageId);
          break;
        case te.Close:
          S ? await (async (b, N) => {
            const V = c().Browser.wrapSync(b), X = await V.getPages();
            for (const Y of X) if (Y.pageId === N) {
              await V.removePage(Y.pageId), await V._trackRemovedTab({ identity: b, page: Y });
              break;
            }
          })(n.identity, n.pageId) : w.dispatch(wt.ClosePage, { pageId: n.pageId });
          break;
        case te.Custom:
          if (e.action) {
            const b = { callerType: ut.PageTabContextMenu, windowIdentity: n.identity, pageId: n.pageId, customData: e.action.customData };
            c()._invokeCustomAction(e.action.id, b);
          } else console.warn(`Encountered a Custom context menu option with an "action" property with value "${e.action}"`);
          break;
        case te.Refresh:
          await (async (b, N) => {
            var ae;
            const V = c(), X = V.Browser.wrapSync(b), Y = (await X.getPages()).find((le) => N ? le.pageId === N : le.isActive);
            (ae = Y == null ? void 0 : Y.layout) != null && ae.content && B(Y.layout.content).forEach(async (le) => {
              (await fin.View.wrap({ uuid: V.identity.uuid, name: le.name })).reload();
            });
          })(n.identity, n.pageId);
          break;
        case te.CloseOthers:
          await (async (b, N) => {
            const V = c().Browser.wrapSync(b), X = await V.getPages();
            for (const Y of X) Y.pageId !== N && (await V.removePage(Y.pageId), await V._trackRemovedTab({ identity: b, page: Y }));
          })(n.identity, n.pageId);
          break;
        case te.SaveWorkspaceAs:
          await Ro(n.identity);
          break;
        case te.Print: {
          const b = await s._getLayoutsWithSelectedViews(), { selectedViews: N } = b.find((V) => V.pageId === n.pageId);
          await Wo(N);
          break;
        }
        case te.PrintAll:
          await s.setActivePage(n.pageId), await l.print({ content: "views", includeSelf: !1 });
          break;
        case te.PrintScreen:
          await s.setActivePage(n.pageId), await l.print({ content: "screenshot" });
          break;
        case te.AddToChannel:
          await s.updatePage({ pageId: n.pageId, page: { contextGroup: e.option === "unlink" ? null : e.option } });
          break;
        case te.ManageDesktopSignals:
          await eo(n.identity);
      }
    }, pu = async (e, n) => {
      if (e != null && e.type) {
        const r = n.identity;
        switch (e.type) {
          case rt.SavePage:
            await Do(r);
            break;
          case rt.SaveWorkspace:
            await Mi(r);
            break;
          case rt.SavePageAs:
            await Oo(r);
            break;
          case rt.SaveWorkspaceAs:
            await Ro(r);
            break;
          case rt.Custom:
            if (e.action) {
              const s = { callerType: ut.SaveButtonContextMenu, windowIdentity: n.identity, pageId: n.pageId, customData: e.action.customData };
              c()._invokeCustomAction(e.action.id, s);
            } else console.warn(`Encountered a Custom context menu option with an "action" property with value "${e.action}"`);
        }
      }
    };
    var io;
    (function(e) {
      e[e.TopLeft = 0] = "TopLeft", e[e.TopRight = 1] = "TopRight", e[e.BottomLeft = 2] = "BottomLeft", e[e.BottomRight = 3] = "BottomRight", e[e.Center = 4] = "Center";
    })(io || (io = {}));
    const so = async (e, n, r, s) => {
      const { x: l, y: w, identity: S, template: b, callback: N } = e, V = await Et(S), { data: X } = V ? await nu({ x: l, y: w, template: b }, r, s, fin.Window.wrapSync(S)) : await function(Y, ae) {
        if (!Be) throw new Error("showContextMenu can only be used in an OpenFin env. Avoid calling this method during pre-rendering.");
        if (!ae && !fin.me.isWindow) throw new Error("showContextMenu can only be used in an OpenFin window.");
        return (ae || fin.Window.getCurrentSync()).showPopupMenu(Y);
      }({ x: l, y: w, template: b }, fin.Window.wrapSync(S));
      N(X, e);
    };
    async function fu(e, n) {
      const r = Ka(), s = await Et(e.identity);
      s && Ha(r);
      const l = s ? await (async ({ identity: Y, selectedViews: ae }) => {
        const le = c(), Pe = le.Browser.wrapSync(Y), Te = (await Pe.getPages()).find((_t) => _t.isActive), lt = await le.Storage.getPage(Te.pageId), Ue = D(Te.layout.content) > 1, ct = await Et(Y), Qe = await le.Theme.getThemes(), xt = Qe[0] && "palettes" in Qe[0] || !Qe[0] || Qe.length === 0, yn = { ...ji(ct), enabled: !!lt }, $e = { ...Ki(ct), enabled: Ue };
        return [Ui(), $i(!0, ct), { type: We.Separator }, yn, $e, { type: We.Separator }, { type: We.Label, label: $("contextMenu.manageDesktopSignals"), data: { type: Z.ManageDesktopSignals } }, { type: We.Separator }, ...xt ? [{ type: We.Submenu, label: zi().label, submenu: await Ji() }] : [], { type: We.Separator }, jo(), { type: We.Separator }, Ko(!0)];
      })({ identity: e.identity, selectedViews: e.selectedViews }) : await ru(e.identity, e.selectedViews), w = await Ho();
      s || (l.find((Y) => {
        var ae;
        return ((ae = Y.data) == null ? void 0 : ae.type) === Z.Quit;
      }).label = `Quit ${w}`);
      const { rect: S, ...b } = e, { x: N, y: V } = s ? { x: S.left + S.width, y: S.bottom } : e, X = { ...b, x: N, y: V, template: l, callback: lu };
      $a(r), await this.openGlobalContextMenu(X, n);
    }
    async function hu(e, n) {
      const r = { ...e, callback: uu };
      await this.openViewTabContextMenu(r, n);
    }
    async function gu(e, n) {
      const r = Ka(), s = await Et(e.identity);
      s && Ha(r);
      const l = await (async (S, b, N) => {
        var Ue, ct;
        const V = await c().Storage.getPage(S), X = (await Dr()).find((Qe) => Qe.pageId === S), Y = D(X.layout.content) > 1, { workspacePlatform: ae } = await g(b).getOptions(), le = !(ae.isLocked || ae.preventPageClose || (Ue = X.closeButton) != null && Ue.disabled || (ct = X.closeButton) != null && ct.hidden), Pe = [{ type: We.Label, label: $("enterpriseContextMenu.newTab"), data: { type: te.NewPage } }, en, Xi(X), Qi(), en, { type: We.Label, label: $("reload"), data: { type: te.Refresh } }, { type: We.Label, label: $("enterpriseContextMenu.duplicate"), data: { type: te.Duplicate }, enabled: !ae.isLocked }, await au(), en, { type: We.Label, label: $(Y ? "enterpriseSaveModal.closeSupertab" : "enterpriseSaveModal.closeTab"), data: { type: te.Close }, enabled: le }], Te = [{ type: We.Label, label: $("enterpriseContextMenu.newTab"), data: { type: te.NewPage } }, en, Xi(X), Qi(), en, { type: We.Label, label: $("enterpriseSaveModal.renameSupertab"), data: { type: te.Rename }, enabled: !ae.isLocked && !!V && Y }, { type: We.Label, label: $("enterpriseContextMenu.duplicate"), data: { type: te.Duplicate }, enabled: !ae.isLocked }, en, { type: We.Label, label: $("enterpriseContextMenu.saveSupertab"), data: { type: te.Save }, enabled: Y && !!V }, { type: We.Label, label: $("enterpriseContextMenu.saveSupertabAs"), data: { type: te.SaveAs }, enabled: Y }, en, { type: We.Label, label: $("enterpriseContextMenu.deleteSupertab"), data: { type: te.DeletePage }, enabled: !!V }, en, { type: We.Label, label: $(Y ? "enterpriseSaveModal.closeSupertab" : "enterpriseSaveModal.closeTab"), data: { type: te.Close }, enabled: le }], lt = [{ type: We.Label, label: $("contextMenu.savePage"), data: { type: te.Save }, enabled: !!V }, { type: We.Label, label: $("saveMenu.savePageAs"), data: { type: te.SaveAs }, enabled: !0 }, { type: We.Label, label: "Save Workspace As", data: { type: te.SaveWorkspaceAs } }, { type: We.Label, label: "Refresh", data: { type: te.Refresh } }, en, { type: We.Label, label: $("saveModal.renamePage"), data: { type: te.Rename }, enabled: !!V }, { type: We.Label, label: $("contextMenu.duplicatePage"), data: { type: te.Duplicate }, enabled: !ae.isLocked }, en, { type: We.Label, label: $("saveModal.closePage"), data: { type: te.Close }, enabled: le }];
        return N ? Y ? Te : Pe : lt;
      })(e.pageId, e.identity, s), w = { ...e, template: l, callback: (S, b) => {
        du(S, b, e.rect);
      } };
      $a(r), await this.openPageTabContextMenu(w, n);
    }
    async function mu(e, n) {
      const r = await (async (l) => {
        const w = c(), S = await w.getCurrentWorkspace({ skipSnapshotUpdate: !0 }), b = (await w.Storage.getWorkspacesMetadata()).find((V) => V.workspaceId === S.workspaceId), N = await w.Storage.getPage(l);
        return [{ type: We.Label, label: $("contextMenu.saveWorkspace"), enabled: !!b, data: { type: rt.SaveWorkspace } }, { type: We.Label, label: $("saveMenu.saveWorkspaceAs"), data: { type: rt.SaveWorkspaceAs } }, { type: We.Separator, data: void 0 }, { type: We.Label, enabled: !!N, label: $("contextMenu.savePage"), data: { type: rt.SavePage } }, { type: We.Label, label: $("saveMenu.savePageAs"), data: { type: rt.SavePageAs } }];
      })(e.pageId), s = { ...e, template: r, callback: pu };
      await this.openSaveButtonContextMenu(s, n);
    }
    const co = "dock-companion-updates", uo = async () => (await fin.Application.getCurrentSync().getChildWindows()).find((e) => e.identity.name === ue.DockCompanion), Ra = cn(`${typeof fin < "u" && (fin == null ? void 0 : fin.me.identity.uuid)}-enterprise-dock`), wu = async () => {
      const e = c(), n = await async function() {
        const w = await Oi();
        await Promise.all(w.map(async (V) => {
          await Ta(V.identity);
        }));
        const S = Array.from(tr.values()).sort((V, X) => X.lastFocusedTime - V.lastFocusedTime), b = S.find((V) => V.isVisible);
        if (b)
          return await fin.Window.wrapSync(b.identity).focus(), b.identity;
        const N = S[0];
        if (N) {
          const V = fin.Window.wrapSync(N.identity);
          return await V.restore(), await V.focus(), N.identity;
        }
        return Kc();
      }(), r = e.Browser.wrapSync(n), s = (await r.getPages()).at(-1), l = B(s.layout.content);
      if (l.length === 1 && Pn(l[0].url)) await r.setActivePage(s.pageId);
      else {
        const w = await ro(n), { newPageUrl: S } = await _a();
        await r._addDefaultPage({ identity: r.identity, page: w, newPageUrl: S || void 0 });
      }
      (await vt(n)).dispatch(wt.FocusAndExpandSearchInternal);
    }, Go = "dock-provider-configs", or = Tt && Be && new Hn.Dexie(oa("dock-provider-configs"));
    async function yu(e) {
      if (!or) throw new Error("Unable to get Dock provider config - IndexedDB not supported");
      try {
        return await or[Go].get(e);
      } catch (n) {
        return void console.warn("Failed to retrieve Dock provider config from IndexedDb", n);
      }
    }
    async function bu(e) {
      if (!or) throw new Error("Unable to save Dock provider config - IndexedDb not supported");
      await or[Go].put(e, e.id);
    }
    or && or.version(0.1).stores({ [Go]: "" });
    const Wr = "workspaces", ta = Tt && Be && Zr("openfin-workspace-platform-workspaces", Wr);
    async function zo(e) {
      if (!ta) throw new Error("Unable to get workspace - IndexDB not supported");
      const n = await ta[Wr].get(e);
      return n && (n.workspaceId = e.toString(), n.title = n.title || n.workspaceId), n;
    }
    async function ts(e) {
      if (!ta) throw new Error("Unable to get workspaces - IndexDB not supported");
      const n = await ta[Wr].toCollection().keys(), r = (await Promise.all(n.map((s) => zo(s.toString())))).filter((s) => !!s);
      return e ? r.filter((s) => Ni(s.title, e)) : r;
    }
    async function ns({ workspace: e }) {
      if (!ta) throw new Error("Unable to create workspace - IndexDB not supported");
      const n = (await ts()).find((r) => r.title === e.title);
      if (n && n.workspaceId !== e.workspaceId) throw new Error(`Workspace with title '${e.title}' already exists.`);
      await ta[Wr].put(e, e.workspaceId);
    }
    async function as(e) {
      if (!ta) throw new Error("Unable to delete workspace - IndexDB not supported");
      await ta[Wr].delete(e);
    }
    async function vu({ workspaceId: e, workspace: n }) {
      if (!ta) throw new Error("Unable to update workspace - IndexDB not supported");
      if (!await zo(e)) throw new Error("workspace not found");
      await ns({ workspace: n }), e !== n.workspaceId && await as(e);
    }
    const ku = (e) => {
      const n = e.layout, r = n.content ? B(n.content) : [], s = r.length;
      return s > 1 ? { ...e, singleViewName: null } : s === 1 ? { ...e, singleViewName: r[0].name } : void 0;
    }, qo = async (e, n, r) => {
      var V, X, Y;
      const s = await c().Browser.getAllAttachedPages(), l = new Set(s.map((ae) => ae.title).filter((ae) => !!ae)), w = new Set(s.map((ae) => ae.pageId).filter((ae) => !!ae)), S = n == null ? void 0 : n.defaultPageOptions, b = ((V = r == null ? void 0 : r.workspacePlatform) == null ? void 0 : V.windowType) === "enterprise" || ((Y = (X = n == null ? void 0 : n.defaultWindowOptions) == null ? void 0 : X.workspacePlatform) == null ? void 0 : Y.windowType) === "enterprise", N = await (async (ae, le, Pe) => {
        var Ue, ct, Qe;
        if (Pe) return pn();
        const Te = (Ue = le == null ? void 0 : le.workspacePlatform) == null ? void 0 : Ue.newTabUrl;
        return Te || ((Qe = (ct = ae == null ? void 0 : ae.defaultWindowOptions) == null ? void 0 : ct.workspacePlatform) == null ? void 0 : Qe.newTabUrl) || void 0;
      })(n, r, b);
      return Promise.all(e.map(async (ae) => {
        var Ue, ct;
        if (ae.multiInstanceViewBehavior === "reparent") return { ...ae, layoutContainerKey: an() };
        ((Qe, xt) => {
          Qe.pageId || (Qe.pageId = an()), xt.has(Qe.pageId) && (console.warn("PageID collision detected. All Page IDs should be unique. A random new pageId will be generated"), Qe.pageId = an()), xt.add(Qe.pageId);
        })(ae, w), b || (ae.title = Co(ae.title, Array.from(l.keys()))), l.add(ae.title), (Ue = ae.panels) == null || Ue.reduce((Qe, xt) => {
          const yn = Object.values(q);
          if (!yn.includes(xt.position)) throw new Error(`Encountered a panel with unsupported position "${xt.position}". Supported positions are: ${yn.toString()}`);
          if (Qe[xt.position] == 1) throw new Error(`Found more than 1 panel at position: ${xt.position}. Only 1 panel at a given position is currently supported.`);
          return { ...Qe, [xt.position]: Qe[xt.position] + 1 };
        }, { [q.Left]: 0, [q.Right]: 0, [q.Top]: 0, [q.Bottom]: 0 });
        const le = "panels" in ae ? ae.panels : S == null ? void 0 : S.panels;
        let Pe = (Te = ae.layout, lt = n == null ? void 0 : n.defaultViewOptions, x({ ...Te }, (Qe) => A(Qe, lt)));
        var Te, lt;
        return N && !((ct = Pe == null ? void 0 : Pe.settings) != null && ct.newTabButton) && (Pe = { ...Pe, settings: { ...Pe == null ? void 0 : Pe.settings, newTabButton: { url: N } } }), { ...S, ...ae, panels: le && await Jt(le), layoutContainerKey: an(), layout: Pe, isLayoutCreated: !1 };
      }));
    }, rs = async (e, n) => {
      try {
        await fin.Platform.getCurrentSync().createView({ name: e, url: n, target: fin.me.identity, bounds: { top: 0, left: 0, width: 0, height: 0 } }, fin.me.identity);
      } catch {
      }
    }, Su = (e) => {
      var l, w, S, b;
      const n = e.name === ue.Home, r = (l = e.name) == null ? void 0 : l.startsWith(ue.HomeInternal), s = ((w = e.name) == null ? void 0 : w.startsWith(ue.BrowserMenu)) || ((S = e.name) == null ? void 0 : S.startsWith(ue.BrowserSaveMenu)) || ((b = e.name) == null ? void 0 : b.startsWith(ue.DockSaveWorkspaceMenu));
      return !n && !r && !s;
    }, fa = (e) => JSON.parse(JSON.stringify(e));
    async function Pu(e) {
      return e ? "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" : (await Oe()).displayViewTabDefaultIcon ? "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" : "data:image/svg+xml,%3Csvg%20style%3D%22background-color%3A%237D808A%22%20width%3D%2210%22%20height%3D%2210%22%20viewBox%3D%220%200%2010%2010%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M4.64648%200.874962C4.84174%200.6797%205.15833%200.6797%205.35359%200.874962L9.12482%204.6462C9.32009%204.84146%209.32009%205.15804%209.12482%205.3533L5.35359%209.12454C5.15833%209.3198%204.84174%209.3198%204.64648%209.12454L0.875245%205.3533C0.679982%205.15804%200.679982%204.84146%200.875245%204.6462L4.64648%200.874962ZM5.00003%201.93562L1.9359%204.99975L5.00003%208.06388L8.06416%204.99975L5.00003%201.93562Z%22%20fill%3D%22white%22%2F%3E%3C%2Fsvg%3E";
    }
    const xu = { dimensions: { borderWidth: 3, headerHeight: 30 } };
    async function Cu(e, n, r) {
      var S, b, N, V, X, Y, ae, le, Pe, Te, lt, Ue;
      let s = e;
      const l = ((S = s.workspacePlatform) == null ? void 0 : S.windowType) === "enterprise" || ((N = (b = n == null ? void 0 : n.defaultWindowOptions) == null ? void 0 : b.workspacePlatform) == null ? void 0 : N.windowType) === "enterprise";
      if (s.layout && !((X = (V = s.workspacePlatform) == null ? void 0 : V.pages) != null && X.length)) {
        const ct = await bi(), Qe = { ...await Fn(ct, s.layout), isActive: !0 };
        s.workspacePlatform || (s.workspacePlatform = {}), s.workspacePlatform.pages = await qo([Qe], n, s);
      }
      n != null && n.browserIconSize && (s.workspacePlatform || (s.workspacePlatform = {}), s.workspacePlatform.browserIconSize = n.browserIconSize);
      const w = (Y = r == null ? void 0 : r.themes) == null ? void 0 : Y[0];
      if ((le = (ae = s.workspacePlatform) == null ? void 0 : ae.pages) != null && le.length) {
        const ct = await qo(s.workspacePlatform.pages, n, s), Qe = ct, xt = (($e) => {
          if (!$e) return;
          let _t = $e.find((Ot) => Ot.isActive);
          return !_t && $e.length > 0 && ($e[0].isActive = !0, _t = $e[0]), _t;
        })(Qe);
        if (Qe.forEach(($e) => {
          $e.pageId !== (xt == null ? void 0 : xt.pageId) && ($e.isActive = !1);
        }), await Yt(Qe), s.workspacePlatform.pages = ct, s = _n({}, await (async ($e) => ({ contextMenuOptions: { enabled: !1 }, experimental: { showFavicons: !0, defaultFaviconUrl: await Pu($e) }, viewVisibility: { showViewsOnSplitterDrag: { enabled: !0 }, showViewsOnWindowResize: { enabled: !0 } } }))(l), n == null ? void 0 : n.defaultWindowOptions, s, await (async ($e) => ({ backgroundThrottling: !0, url: await Ut($e, !0), contextMenu: !0, closeOnLastViewRemoved: !1, permissions: { System: { openUrlWithBrowser: { enabled: !0, protocols: ["mailto"] } } } }))(l)), xt.layout = _n(xt.layout, xu), async function($e) {
          if ($e.icon || $e.taskbarIcon) {
            const _t = fin.Application.getCurrentSync(), Ot = await (await _t.getWindow()).getOptions();
            $e.taskbarIconGroup || ($e.taskbarIconGroup = Ot.taskbarIconGroup || fin.me.identity.uuid);
          }
          if ($e.workspacePlatform.icon) if (typeof $e.workspacePlatform.icon == "object") {
            const _t = window.matchMedia("(prefers-color-scheme: dark)");
            $e.icon = _t.matches ? $e.workspacePlatform.icon.dark : $e.workspacePlatform.icon.light;
          } else $e.icon = $e.workspacePlatform.icon;
        }(s), !s.backgroundColor && w) if ("palette" in w) s.backgroundColor = ((Pe = w == null ? void 0 : w.palette) == null ? void 0 : Pe.background2) || ((Te = w == null ? void 0 : w.palette) == null ? void 0 : Te.backgroundPrimary);
        else {
          const $e = r.selectedScheme === xe.Dark || r.selectedScheme === xe.System && window.matchMedia("(prefers-color-scheme: dark)") ? w == null ? void 0 : w.palettes.dark : w == null ? void 0 : w.palettes.light;
          s.backgroundColor = ($e == null ? void 0 : $e.background2) || ($e == null ? void 0 : $e.backgroundPrimary);
        }
        s = Dn(s, !0);
        const yn = await Ut(l, !0);
        if (yn && (s.url = yn), s.layout = xt.layout, s.layoutSnapshot = (($e, _t) => ({ layouts: $e.reduce((Ot, bn) => (!bn.isActive && (!_t || !ku(bn).singleViewName) || (Ot[bn.layoutContainerKey] = bn.layout), Ot), {}), pages: $e }))(s.workspacePlatform.pages, l), s.workspacePlatform.windowType = s.workspacePlatform.windowType ?? Je.Browser, l) {
          const $e = await pn();
          s.workspacePlatform.newPageUrl = $e, s.workspacePlatform.newTabUrl = $e, s.layout && (s.layout.dimensions.borderWidth = 4, s.layout.dimensions.headerHeight = 28), s.name = s.name || `${ue.BrowserWindow}-${an()}`, (async (Ot) => {
            const bn = await qt(), ir = ue.BrowserAddressSearchPrefix + Ot.name, sr = bn + C.BrowserPopupMenuAddressSearchResultsView, Qo = [], Gu = rs(ir, sr);
            Qo.push(Gu);
            const zu = ue.AICompanionPrefix + Ot.name, { url: qu, enabled: Ju } = Ge();
            if (Ju) {
              const Yu = rs(zu, qu);
              Qo.push(Yu);
            }
            await Promise.all(Qo);
          })(s);
          const { enabled: _t } = Ge();
          s.workspacePlatform.isAiEnabled = _t, s.minWidth = Math.max(654, s.minWidth ?? 0), s.minHeight = Math.max(488, s.minHeight ?? 0);
        } else s.minWidth = Math.max(232, s.minWidth ?? 0), function($e) {
          var ir, sr;
          const _t = (ir = $e.workspacePlatform) == null ? void 0 : ir.viewTabDimensions, Ot = (sr = $e.workspacePlatform) == null ? void 0 : sr.pageTabDimensions, bn = /^[0-9]+(px|%)$/;
          if (_t) {
            if (_t.minWidth && !bn.test(_t.minWidth)) throw new Error(`Provided viewTabDimensions.min value "${_t.minWidth}" is not in a supported format.`);
            if (_t.maxWidth && !bn.test(_t.maxWidth)) throw new Error(`Provided viewTabDimensions.max value "${_t.maxWidth}" is not in a supported format.`);
          }
          if (Ot) {
            if (Ot.minWidth && !bn.test(Ot.minWidth)) throw new Error(`Provided pageTabDimensions.min value "${Ot.minWidth}" is not in a supported format.`);
            if (Ot.maxWidth && !bn.test(Ot.maxWidth)) throw new Error(`Provided pageTabDimensions.max value "${Ot.maxWidth}" is not in a supported format.`);
          }
        }(s);
      }
      return s.cornerRounding && delete s.cornerRounding, s.name || s.layoutSnapshot ? ((Ue = (lt = s.contextMenuOptions) == null ? void 0 : lt.template) == null ? void 0 : Ue.length) > 0 ? s.contextMenuOptions.template = s.contextMenuOptions.template.filter((ct) => ct !== "print") : s.contextMenuOptions = { template: [], enabled: !1 } : s.name = `${ue.ClassicWindow}-${an()}`, s.workspacePlatform && r && (s.workspacePlatform._themeData = r), s;
    }
    const os = async (e, n) => {
      const r = { uuid: n.uuid, name: n.name };
      await Pi(r, e.title ?? await Ho(), e.shouldCenterOnMonitor) && fin.Platform.getCurrentSync().quit();
    }, is = async (e, n) => {
      const r = c(), s = await r.Browser.getLastFocusedWindow();
      if (!s) return;
      const l = r.Browser.wrapSync(s), { title: w, description: S } = e, b = await Ac({ title: w, description: S, identity: l.identity });
      b && l._sendUpdateVersionModalResponse({ identity: n, response: b });
    };
    async function ss(e, n, r) {
      const s = e.manifestUrl ? await n({ manifestUrl: e.manifestUrl }, r) : void 0;
      if (s != null && s.interop && e.interop) {
        const l = { ...e, ...s, interop: e.interop };
        return delete l.manifestUrl, l;
      }
      return e;
    }
    const cs = (e) => {
      var r;
      const n = fa(e);
      return (r = n._internalWorkspaceData) != null && r.browserNavigationButtons && (n.workspacePlatform = { ...n.workspacePlatform, browserNavigationButtons: n._internalWorkspaceData.browserNavigationButtons }, delete n._internalWorkspaceData.browserNavigationButtons), n;
    }, us = (e) => {
      const n = fa(e);
      return n.workspacePlatform && (n._internalWorkspaceData = { ...n._internalWorkspaceData, ...n.workspacePlatform }, delete n.workspacePlatform), n;
    }, Mu = { reload: [{ keys: "Ctrl+R", preventDefault: !0 }], back: [{ keys: "Alt+Left", preventDefault: !0 }], forward: [{ keys: "Alt+Right", preventDefault: !0 }] }, Iu = { reload: [{ keys: "Cmd+R", preventDefault: !0 }], back: [{ keys: "Cmd+[", preventDefault: !0 }, { keys: "Cmd+Left", preventDefault: !0 }], forward: [{ keys: "Cmd+]", preventDefault: !0 }, { keys: "Cmd+Right", preventDefault: !0 }] }, Au = async () => await Or() ? Mu : Iu, Eu = (e, n) => {
      const r = fin.View.wrapSync(e);
      if (!n) return;
      const s = (l) => {
        (async (w, S, b) => {
          if (b.inputType !== "keyDown") return;
          const N = await (async (X) => {
            var Pe;
            const Y = await X.getCurrentWindow(), ae = await Y.getOptions(), le = (Pe = ae.workspacePlatform) == null ? void 0 : Pe.navigationButtons;
            return le.enabled && !le.hotkeysDisabled;
          })(w), V = await Or();
          if (N) {
            if (S.reload) {
              const X = b.ctrlKey && !b.altKey && !b.metaKey && !b.shiftKey && b.key === "r", Y = !b.ctrlKey && !b.altKey && b.metaKey && !b.shiftKey && b.key === "r";
              (V ? X : Y) && (S != null && S.reload) && (w.reload(), un({ type: "View", action: "Reload", value: w.identity.name }));
            }
            if (S.back) {
              const X = !b.ctrlKey && b.altKey && !b.metaKey && !b.shiftKey && b.key === "ArrowLeft", Y = !b.ctrlKey && !b.altKey && b.metaKey && !b.shiftKey && b.key === "ArrowLeft", ae = !b.ctrlKey && !b.altKey && b.metaKey && !b.shiftKey && b.key === "[";
              (V ? X : Y || ae) && (S != null && S.back) && (w.navigateBack(), un({ type: "View", action: "Back", value: w.identity.name }));
            }
            if (S.forward) {
              const X = !b.ctrlKey && b.altKey && !b.metaKey && !b.shiftKey && b.key === "ArrowRight", Y = !b.ctrlKey && !b.altKey && b.metaKey && !b.shiftKey && b.key === "ArrowRight", ae = !b.ctrlKey && !b.altKey && b.metaKey && !b.shiftKey && b.key === "]";
              (V ? X : Y || ae) && (S != null && S.forward) && (w.navigateForward(), un({ type: "View", action: "Forward", value: w.identity.name }));
            }
          }
        })(r, n, l);
      };
      r.addListener("hotkey", s), r.once("destroyed", () => {
        r.removeListener("hotkey", s);
      });
    }, Jo = (e, n) => fa(e).map((r) => ("componentState" in r ? r.componentState = n(r.componentState) : "content" in r && (r.content = Jo(r.content, n)), r)), ls = (e) => {
      if (e) {
        const n = fa(e);
        return n.content && (n.content = Jo(n.content, cs)), n;
      }
      return e;
    }, ds = (e) => {
      if (e) {
        const n = fa(e);
        return n.content && (n.content = Jo(n.content, us)), n;
      }
      return e;
    };
    async function _u({ app: e, target: n }) {
      const r = fin.Platform.getCurrentSync();
      switch (e.manifestType) {
        case ee.Snapshot:
          return r.applySnapshot(e.manifest);
        case ee.View:
          return async function(s, l) {
            const w = fin.Platform.getCurrentSync();
            if (l.entityType === "view") {
              const S = fin.View.wrapSync(l);
              return await (await S.getParentLayout()).replaceView(l, { manifestUrl: s.manifest, url: void 0, target: void 0 }), S.destroy();
            }
            return w.createView({ name: void 0, url: void 0, manifestUrl: s.manifest, target: void 0 });
          }(e, n);
        case ee.External:
          return fin.System.launchExternalProcess({ path: e.manifest, uuid: e.appId });
        default:
          return fin.Application.startFromManifest(e.manifest);
      }
    }
    let Yo;
    const lo = () => (Yo || (Yo = cn(`${typeof fin < "u" && fin.me.identity.uuid}-enterprise-app-directory`)()), Yo);
    async function Tu(e) {
      return await Et(e.identity) ? (await lo()).dispatch(Jn.GetApps, e.req) : [];
    }
    async function Ru(e) {
      return await Et(e.identity) ? (await lo()).dispatch(Jn.GetSearchProviders, e) : [];
    }
    async function Du(e) {
      return (await lo()).dispatch(Jn.GetCuratedContent, e);
    }
    async function Ou(e) {
      return (await lo()).dispatch(Jn.GetRecentlyVisited, e);
    }
    async function Wu(e) {
      const n = (await He()).map(async (r) => {
        var l;
        const s = await r.getOptions();
        (l = s.workspacePlatform) != null && l.pages && s.layout && await (async (w) => (await vt(w)).dispatch(wt.UpdatePagesWindowOptions))(r.identity);
      });
      return await Promise.all(n), e ? e() : Ua();
    }
    let ps = [];
    const fs = () => ps;
    async function Bu(e) {
      const n = (s) => {
        if (!s.includes("#") && !s.includes("rgb") && !s.includes("hsl")) throw new Error("Background primary color is not the right format.");
      };
      e == null || e.forEach((s) => {
        "palette" in s && n(s.palette.backgroundPrimary), "palettes" in s && (n(s.palettes.dark.backgroundPrimary), n(s.palettes.light.backgroundPrimary));
      }), ps = ((s, l) => {
        if (!s || !s[0]) {
          const { dark: w, light: S } = aa[0].palettes;
          return Qn.setPalettes({ dark: w, light: S }, l), aa;
        }
        {
          const w = s[0];
          if ("default" in w && w.default && (w.default, Qn.setThemeDefaultScheme(w.default)), "palette" in w) {
            const { palette: S } = w, b = { ...ma, ...S };
            return Qn.setPalettes({ dark: b, light: b }, l), w.palette = b, s;
          }
          if ("palettes" in w) {
            const { dark: S, light: b } = w.palettes, N = { ...ma, ...S }, V = { ...Wa, ...b };
            return Qn.setPalettes({ dark: N, light: V }, l), w.palettes = { dark: N, light: V }, s;
          }
        }
      })(e, await Or());
    }
    const Nu = (e, n) => (r) => {
      const s = e !== null;
      return class extends r {
        constructor() {
          super(), this.isWorkspacePlatform = () => ({ isWorkspacePlatform: !0, isBrowserInitialized: !!e, analytics: { isSupported: !0 } }), this.detachPagesFromWindow = sc, this.getAllAttachedPages = Dr, this.getPagesForWindow = wi, this.getPageForWindow = uc, this.markUnsavedPagesAsSavedInternal = wc, this.launchApp = _u, this.savePage = mi, this.saveWorkspace = Rc, this.createSavedPageInternal = hi, this.updateSavedPageInternal = gi, this.deleteSavedPageInternal = rc, this.reorderPagesForWindow = lc, this.getUniquePageTitle = bi, this.updatePageForWindow = ic, this.getLastFocusedBrowserWindow = jc, this.getThemes = fs, this.invokeCustomActionInternal = Gc, this.requestQuitPlatformDialogInternal = os, this.getCurrentWorkspace = _c, this.setActiveWorkspace = _o, this.getLanguageResourcesInternal = Vc, this.getPageByViewIdentity = async (l) => {
            const w = await fin.Platform.Layout.getLayoutByViewIdentity(l), S = w.identity;
            if (!("layoutName" in S)) throw new Error("Failed to get layout's identity");
            const b = await c().Browser.wrapSync(w.identity).getPages(), N = b.findIndex((V) => V.layoutName === S.layoutName);
            if (N === -1) throw new Error("Failed to get page's index");
            return { windowIdentity: { name: w.identity.name, uuid: w.identity.uuid }, page: b[N], pageIndex: N };
          }, this.openGlobalContextMenuInternal = this.openGlobalContextMenuInternal.bind(this), this.openGlobalContextMenu = this.openGlobalContextMenu.bind(this), this.getSavedPages = this.getSavedPages.bind(this), this.getSavedPage = this.getSavedPage.bind(this), this.createSavedPage = this.createSavedPage.bind(this), this.updateSavedPage = this.updateSavedPage.bind(this), this.deleteSavedPage = this.deleteSavedPage.bind(this), this.handlePageChanges = this.handlePageChanges.bind(this), this.attachPagesToWindow = this.attachPagesToWindow.bind(this), this.openViewTabContextMenuInternal = this.openViewTabContextMenuInternal.bind(this), this.openViewTabContextMenu = this.openViewTabContextMenu.bind(this), this.openPageTabContextMenuInternal = this.openPageTabContextMenuInternal.bind(this), this.openPageTabContextMenu = this.openPageTabContextMenu.bind(this), this.getSavedWorkspaces = this.getSavedWorkspaces.bind(this), this.getSavedWorkspacesMetadata = this.getSavedWorkspacesMetadata.bind(this), this.getSavedWorkspace = this.getSavedWorkspace.bind(this), this.createSavedWorkspace = this.createSavedWorkspace.bind(this), this.updateSavedWorkspace = this.updateSavedWorkspace.bind(this), this.deleteSavedWorkspace = this.deleteSavedWorkspace.bind(this), this.getCurrentWorkspace = this.getCurrentWorkspace.bind(this), this.getDockProviderConfig = this.getDockProviderConfig.bind(this), this.saveDockProviderConfig = this.saveDockProviderConfig.bind(this), this.applyWorkspace = this.applyWorkspace.bind(this), this.restoreLastSavedWorkspaceInternal = this.restoreLastSavedWorkspaceInternal.bind(this), this.setActiveWorkspace = this.setActiveWorkspace.bind(this), this.openSaveButtonContextMenu = this.openSaveButtonContextMenu.bind(this), this.openSaveButtonContextMenuInternal = this.openSaveButtonContextMenuInternal.bind(this), this.getSelectedScheme = this.getSelectedScheme.bind(this), this.setSelectedScheme = this.setSelectedScheme.bind(this), this.analyticsInternal = this.analyticsInternal.bind(this), this.handleAnalytics = this.handleAnalytics.bind(this), this.getLanguage = this.getLanguage.bind(this), this.setLanguage = this.setLanguage.bind(this), this.handleSaveModalOnPageClose = this.handleSaveModalOnPageClose.bind(this), this.shouldPageClose = this.shouldPageClose.bind(this), this.shouldWindowClose = this.shouldWindowClose.bind(this), this.handlePagesAndWindowClose = this.handlePagesAndWindowClose.bind(this), this.setActivePage = this.setActivePage.bind(this), this.handlePageChanges = this.handlePageChanges.bind(this), this.copyPage = this.copyPage.bind(this), this.addPage = this.addPage.bind(this), this.addDefaultPage = this.addDefaultPage.bind(this), this.markUnsavedPagesAsSavedInternal = this.markUnsavedPagesAsSavedInternal.bind(this), this.trackRemovedTabInternal = this.trackRemovedTabInternal.bind(this), this.restoreRemovedTabInternal = this.restoreRemovedTabInternal.bind(this), this.trackVisitedSiteInternal = this.trackVisitedSiteInternal.bind(this), this.getRecentlyVisitedSitesInternal = this.getRecentlyVisitedSitesInternal.bind(this), this.getFrequentlyVisitedSitesInternal = this.getFrequentlyVisitedSitesInternal.bind(this), this.searchSitesInternal = this.searchSitesInternal.bind(this), this.getSearchProvidersInternal = this.getSearchProvidersInternal.bind(this), this.getCuratedContentInternal = this.getCuratedContentInternal.bind(this), this.handleRequestNavigationInternal = this.handleRequestNavigationInternal.bind(this), this.refreshBookmarksInternal = this.refreshBookmarksInternal.bind(this), this.launchBookmarkInternal = this.launchBookmarkInternal.bind(this), this.getNotificationsConfig = this.getNotificationsConfig.bind(this), this.updateDockFavoritesInternal = this.updateDockFavoritesInternal.bind(this), this.updateContentMenuInternal = this.updateContentMenuInternal.bind(this), this.launchDockEntryInternal = this.launchDockEntryInternal.bind(this), this.setDockFavoritesOrderInternal = this.setDockFavoritesOrderInternal.bind(this), this.navigateContentMenuInternal = this.navigateContentMenuInternal.bind(this), this.setDefaultDockButtonsOrderInternal = this.setDefaultDockButtonsOrderInternal.bind(this), this.getDockWorkspacesContextMenuInternal = this.getDockWorkspacesContextMenuInternal.bind(this), this.handleDockWorkspacesMenuResponseInternal = this.handleDockWorkspacesMenuResponseInternal.bind(this), this.removeDockFavoriteInternal = this.removeDockFavoriteInternal.bind(this), this.addDockFavoriteInternal = this.addDockFavoriteInternal.bind(this), this.focusAndExpandSearchInternal = this.focusAndExpandSearchInternal.bind(this), this.sendUpdateVersionModalResponseInternal = this.sendUpdateVersionModalResponseInternal.bind(this), this.requestQuitPlatformDialogInternal = os.bind(this), this.showUpdateVersionModalInternal = is.bind(this);
        }
        async applyWorkspace(...l) {
          return Ec.apply(this, l);
        }
        async restoreLastSavedWorkspaceInternal(...l) {
          return Ci.apply(this, l);
        }
        async getSnapshot() {
          const l = s ? await Wu(async () => Ua(await super.getSnapshot(void 0, fin.me.identity))) : await Ua(await super.getSnapshot(void 0, fin.me.identity));
          let w = { ...l, windows: l.windows.filter(Su).map(xr) };
          return w = ((S) => {
            const b = fa(S);
            return b.windows.forEach((N) => {
              var V, X;
              N.layout && (N.layout = ls(N.layout)), (X = (V = N.workspacePlatform) == null ? void 0 : V.pages) == null || X.forEach((Y) => {
                Y != null && Y.layout && (Y.layout = ls(Y.layout));
              });
            }), b;
          })(w), w;
        }
        async getViewSnapshot(l) {
          let w = await super.getViewSnapshot(l);
          return w = cs(w), w;
        }
        async applySnapshot({ snapshot: l, options: w }) {
          let S = l;
          typeof S == "string" && (S = await super.fetchManifest({ manifestUrl: S }, fin.me.identity));
          const b = function(N) {
            var V, X;
            for (const Y of N.windows) if ((X = (V = Y.workspacePlatform) == null ? void 0 : V.pages) != null && X.length) return !0;
            return !1;
          }(S);
          if (!s && b) throw new Error("This snapshot cannot be applied as the platform has been initialized without the browser.");
          return S = ((N) => {
            const V = fa(N);
            return V.windows.forEach((X) => {
              var Y, ae;
              X.layout = ds(X.layout), (ae = (Y = X.workspacePlatform) == null ? void 0 : Y.pages) == null || ae.forEach((le) => {
                le.layout = ds(le.layout);
              });
            }), V;
          })(S), super.applySnapshot({ snapshot: S, options: w });
        }
        async createWindow(l, w) {
          var V, X, Y, ae;
          if (s && l.reason === "tearout") {
            const le = await fin.Window.wrapSync(w).getOptions(), Pe = (V = le.workspacePlatform) == null ? void 0 : V.windowType;
            l.taskbarIconGroup = le.taskbarIconGroup, Pe && (l.workspacePlatform || (l.workspacePlatform = {}), l.workspacePlatform.windowType = le.workspacePlatform.windowType, Pe === Je.Platform && (l.url = le.url));
          }
          if (!s || ((X = l.workspacePlatform) == null ? void 0 : X.windowType) === Je.Platform) {
            const le = await super.createWindow(l, w);
            return un({ type: "Window", action: "Open Window", value: le.identity.name, data: { uuid: le.identity.uuid } }), le;
          }
          var S;
          S = { allowed: !0 }, Ba || (Ba = !0, Sa(Nn.Browser, S)), ((le = []) => {
            const Pe = le.filter((Ue) => Ue.type !== dt.Custom), Te = /* @__PURE__ */ new Set(), lt = [];
            for (const Ue of Pe) Te.has(Ue.type) && lt.push(Ue.type), Te.add(Ue.type);
            if (lt.length > 0) {
              const Ue = lt.join(", ");
              throw new Error(`Encountered a duplicate "${Ue}" toolbar button. No more than one instance of a button type may be provided.`);
            }
          })((ae = (Y = l.workspacePlatform) == null ? void 0 : Y.toolbarOptions) == null ? void 0 : ae.buttons);
          let b = ((le) => "workspacePlatform" in le ? le : (({ workstacks: Pe, pages: Te, ...lt }) => ({ ...lt, workspacePlatform: { pages: Te || Pe || null } }))(le))(l);
          b = await Cu(b, e, { themes: fs(), selectedScheme: this.getSelectedScheme() }), b = await (async (le) => {
            const Pe = await fin.System.getMonitorInfo();
            let Te = Pe.primaryMonitor;
            const lt = le.defaultLeft, Ue = le.defaultTop;
            Pe.nonPrimaryMonitors.forEach((xt) => {
              const { top: yn, bottom: $e, left: _t, right: Ot } = xt.availableRect;
              lt >= _t && lt <= Ot && Ue >= yn && Ue <= $e && (Te = xt);
            });
            const ct = Te.availableRect.bottom - Te.availableRect.top, Qe = Te.availableRect.right - Te.availableRect.left;
            return le.defaultHeight = Math.min(le.defaultHeight || 800, ct), le.defaultWidth = Math.min(le.defaultWidth || 800, Qe), le;
          })(b);
          const N = await (/* @__PURE__ */ ((le) => async (Pe, Te) => {
            var ct, Qe;
            let lt = !1;
            const Ue = await le(Pe, Te);
            return (Qe = (ct = Pe == null ? void 0 : Pe.workspacePlatform) == null ? void 0 : ct._internalDeferShowOptions) != null && Qe.deferShowEnabled && await Ue.addListener("show-requested", async () => {
              if (lt) return;
              const xt = await Ue.getOptions();
              await Ue.updateOptions({ workspacePlatform: { ...xt.workspacePlatform, _internalDeferShowOptions: { ...xt.workspacePlatform._internalDeferShowOptions, autoShow: !0 } } }), lt = !0;
            }), Ue;
          })((le, Pe) => super.createWindow(le, Pe)))(b, w);
          return un({ type: "Window", action: "Open Window", value: N.identity.name, data: { uuid: N.identity.uuid } }), N;
        }
        async createView(l, w) {
          var b;
          l.opts = h(l.opts, e == null ? void 0 : e.defaultViewOptions), l.opts = await ss(l.opts, this.fetchManifest, w), l.opts = await (async (N) => {
            var Y;
            const V = fa(N), X = (Y = V.workspacePlatform) == null ? void 0 : Y.browserNavigationButtons;
            if (X) {
              const ae = Object.keys(X);
              for (const le of ae) if (X[le]) {
                const Pe = (await Au())[le];
                V.hotkeys ? V.hotkeys.push(...Pe) : V.hotkeys = [...Pe];
              }
            }
            return V;
          })(l.opts), l.opts = us(l.opts);
          const S = await super.createView(l, w);
          return Eu(S.identity, (b = l.opts._internalWorkspaceData) == null ? void 0 : b.browserNavigationButtons), S;
        }
        async replaceView(l, w) {
          return l.opts.newView = await h(l.opts.newView, e == null ? void 0 : e.defaultViewOptions), l.opts.newView = await ss(l.opts.newView, this.fetchManifest, w), super.replaceView(l, w);
        }
        async replaceLayout(l, w) {
          var S;
          return await Et(w) || ((S = l.opts.layout) == null || delete S.dimensions), super.replaceLayout(l, w);
        }
        async getSavedPage(...l) {
          return Vo.apply(this, l);
        }
        async getSavedPages(...l) {
          return Jc.apply(this, l);
        }
        async createSavedPage(...l) {
          return Fi.apply(this, l);
        }
        async deleteSavedPage(...l) {
          return Li.apply(this, l);
        }
        async updateSavedPage(...l) {
          return Yc.apply(this, l);
        }
        async getSavedWorkspace(...l) {
          return zo.apply(this, l);
        }
        async getSavedWorkspaces(...l) {
          return ts.apply(this, l);
        }
        async getSavedWorkspacesMetadata(...l) {
          return (await this.getSavedWorkspaces(...l)).map((w) => ({ workspaceId: w.workspaceId, title: w.title }));
        }
        async createSavedWorkspace(...l) {
          return ns.apply(this, l);
        }
        async deleteSavedWorkspace(...l) {
          return as.apply(this, l);
        }
        async updateSavedWorkspace(...l) {
          return vu.apply(this, l);
        }
        async getDockProviderConfig(...l) {
          return yu.apply(this, l);
        }
        async saveDockProviderConfig(...l) {
          return bu.apply(this, l);
        }
        async attachPagesToWindow(l) {
          const w = await qo(l.pages, e);
          await Yt(w), await oc({ ...l, pages: w });
        }
        async addPage(l) {
          const w = await Et(l.identity), S = await qe(l.identity), { page: b, insertionIndex: N } = l;
          b != null && b.title || w || (b.title = await S.dispatch(fe.GetUniquePageTitle, void 0));
          const V = (await this.getAllAttachedPages()).find((Y) => Y.pageId === b.pageId || Y.title === b.title);
          if (V) {
            if (V.pageId === b.pageId) throw new Error(`page with id ${b.pageId} is already attached to a browser window ${V.parentIdentity.name}`);
            if (!w) throw new Error(`addPage title collision, page with title ${b.title} already exists, conflicting page id: ${V.pageId} with title ${V.title}`);
          }
          const X = { identity: l.identity, pages: [{ ...b, multiInstanceViewBehavior: l.multiInstanceViewBehavior || "duplicate" }], insertionIndex: N };
          await this.attachPagesToWindow(X);
        }
        async addDefaultPage(l) {
          await this.addPage(l), await this.setActivePage({ identity: l.identity, pageId: l.page.pageId });
        }
        async setActivePage(...l) {
          return cc.apply(this, l);
        }
        async openGlobalContextMenuInternal(...l) {
          return fu.apply(this, l);
        }
        async openGlobalContextMenu(...l) {
          return so.apply(this, [...l, nr.GlobalMenu, io.BottomRight]);
        }
        async openViewTabContextMenuInternal(...l) {
          return hu.apply(this, l);
        }
        async openViewTabContextMenu(...l) {
          return so.apply(this, [...l, nr.ContextMenu]);
        }
        async openPageTabContextMenuInternal(...l) {
          return gu.apply(this, l);
        }
        async openPageTabContextMenu(...l) {
          return so.apply(this, [...l, nr.ContextMenu]);
        }
        async openSaveButtonContextMenu(...l) {
          return so.apply(this, l);
        }
        async openSaveButtonContextMenuInternal(...l) {
          return mu.apply(this, l);
        }
        getSelectedScheme(...l) {
          return a.apply(this, l);
        }
        async setSelectedScheme(...l) {
          return t.apply(this, l);
        }
        async handlePageChanges(...l) {
          return mc.apply(this, l);
        }
        async analyticsInternal(...l) {
          return vc.apply(this, l);
        }
        async handleAnalytics(...l) {
        }
        async handleSaveModalOnPageClose(...l) {
          return dc.apply(this, l);
        }
        async shouldPageClose(...l) {
          return pc.apply(this, l);
        }
        async shouldWindowClose(...l) {
          return fc.apply(this, l);
        }
        handlePagesAndWindowClose(...l) {
          return hc.apply(this, l);
        }
        async copyPage(...l) {
          return gc.apply(this, l);
        }
        async getNotificationsConfig() {
          return n;
        }
        async setLanguage(...l) {
          return Lc.apply(this, l);
        }
        async getLanguage() {
          return Ti.apply(this);
        }
        async trackRemovedTabInternal(...l) {
          return Zc.apply(this, l);
        }
        async restoreRemovedTabInternal() {
          const l = await (async () => {
            if (!rr) throw new Error("Unable to pop last removed tab - IndexDB not supported");
            const w = rr[Lo], S = await w.toCollection().keys();
            if (S.length > 0) {
              const b = Math.max(...S.map((V) => Number(V))).toString(), N = await w.get(b);
              if (N) {
                await w.delete(b);
                const { id: V, ...X } = N;
                return X;
              }
            }
          })();
          if ("page" in l) if (await ft(l.identity)) {
            const w = c().Browser.wrapSync(l.identity);
            await w.addPage(l.page), await w.setActivePage(l.page.pageId);
          } else c().createWindow({ name: l.identity.name, workspacePlatform: { pages: [l.page], windowType: Je.Browser } });
          else (function(w) {
            return "window" in w;
          })(l) && c().createWindow({ workspacePlatform: { pages: l.window.pages, windowType: Je.Browser } });
        }
        async trackVisitedSiteInternal(...l) {
          return Xc.apply(this, l);
        }
        async getRecentlyVisitedSitesInternal(...l) {
          return await Ou.apply(this, l);
        }
        async getFrequentlyVisitedSitesInternal(...l) {
          return eu.apply(this, l);
        }
        async searchSitesInternal(...l) {
          return await Tu.apply(this, l);
        }
        async getSearchProvidersInternal(...l) {
          return await Ru.apply(this, l);
        }
        async getCuratedContentInternal(...l) {
          return await Du.apply(this, l);
        }
        async handleRequestNavigationInternal(...l) {
        }
        async launchBookmarkInternal(l) {
          return tu(l);
        }
        async refreshBookmarksInternal() {
          (await c().Browser.getAllWindows()).forEach(async ({ identity: l }) => {
            (await vt(l)).dispatch(wt.RefreshBookmarksInternal);
          }), (await sa(qc())).dispatch(wt.RefreshBookmarksInternal), await (async () => {
            const l = await uo();
            l && await (await vt(l.identity, co)).dispatch(wt.RefreshBookmarksInternal);
          })();
        }
        async updateDockFavoritesInternal(l) {
          return (async (w) => {
            const S = await uo();
            if (!S) throw new Error("Companion Dock window not found");
            await (await vt(S.identity, co)).dispatch(Tn.UpdateFavoriteEntries, w);
          })(l);
        }
        async updateContentMenuInternal(l) {
          return (async (w) => {
            const S = await uo();
            if (!S) throw new Error("Companion Dock window not found");
            await (await vt(S.identity, co)).dispatch(Tn.UpdateContentMenu, w);
          })(l);
        }
        async launchDockEntryInternal(l) {
          return (async (w) => (await Ra()).dispatch("launch-entry", w))(l);
        }
        async setDefaultDockButtonsOrderInternal(l) {
          return (async (w) => (await Ra()).dispatch("set-default-dock-buttons-order", w))(l);
        }
        async setDockFavoritesOrderInternal(l) {
          return (async (w) => (await Ra()).dispatch("set-dock-favorites-order", w))(l);
        }
        async addDockFavoriteInternal(l) {
          return (async (w) => (await Ra()).dispatch("add-favorite-entry", w))(l);
        }
        async removeDockFavoriteInternal(l) {
          return (async (w) => (await Ra()).dispatch("remove-favorite-entry", w))(l);
        }
        async navigateContentMenuInternal(l) {
          return (async (w) => {
            const S = await uo();
            if (!S) throw new Error("Companion Dock window not found");
            await (await vt(S.identity, co)).dispatch(Tn.NavigateContentMenu, w);
          })(l);
        }
        async getDockWorkspacesContextMenuInternal() {
          return (async () => (await Ra()).dispatch("get-dock-workspaces-context-menu", void 0))();
        }
        async handleDockWorkspacesMenuResponseInternal(l) {
          return (async (w) => (await Ra()).dispatch("handle-dock-workspaces-menu-response", w))(l);
        }
        async focusAndExpandSearchInternal() {
          return wu();
        }
        async sendUpdateVersionModalResponseInternal(l) {
          return Po(l);
        }
        async showUpdateVersionModalInternal(l, w) {
          return is(l, w);
        }
      };
    };
    function Fu(e, n, r) {
      const s = Nu(e, r);
      try {
        return typeof n == "function" ? (l) => n(s(l)) : Array.isArray(n) ? [...n, s] : (l) => new (s(l))();
      } catch (l) {
        throw new Error("WorkspacePlatform.init Error:", l);
      }
    }
    const Lu = ["green", "purple", "orange", "red", "pink", "yellow"], hs = "CONTEXT_GROUP_PAGE", Vu = () => (e) => class extends e {
      getContextGroups() {
        return super.getContextGroups().map((n) => {
          var r, s;
          return Lu.includes((r = n.displayMetadata) == null ? void 0 : r.name) ? { ...n, displayMetadata: { ...n.displayMetadata, name: $((s = n.displayMetadata) == null ? void 0 : s.name) } } : n;
        });
      }
    }, Uu = () => {
      const e = new Set($o.keys());
      return (n) => class extends n {
        constructor() {
          super(), this.onClientConnected = async (s) => {
            if (s.name.startsWith("internal-generated-view")) {
              const { page: l } = await c().Browser.getPageByViewIdentity(s), w = l.contextGroup;
              this.joinContextGroup({ contextGroupId: w ?? hs, target: s }, { uuid: this.fin.me.uuid, name: this.fin.me.name });
            }
          };
          const r = this.interopClients.set;
          this.interopClients.set = (s, l) => {
            r.call(this.interopClients, s, l), this.onClientConnected(l.clientIdentity);
          };
        }
        async joinContextGroup({ contextGroupId: r, target: s }, l) {
          if (r !== hs) return super.joinContextGroup({ contextGroupId: r, target: s }, l);
          try {
            const w = (await c().Browser.getPageByViewIdentity(s)).page.layoutName;
            if (!w) throw new Error("View does not belong to a page");
            if (!e.has(w) && (e.add(w), !this.contextGroupsById.has(w))) {
              const S = /* @__PURE__ */ new Map();
              this.contextGroupsById.set(w, S);
            }
            await super.joinContextGroup({ contextGroupId: w, target: s }, l), s.name;
          } catch (w) {
            JSON.stringify(s), w.stack;
          }
        }
        getContextGroups() {
          return Array.from(e).map((r) => ({ id: r, displayMetadata: $o.get(r) ?? {} }));
        }
        setContextForGroup(r, s) {
          if (!this.contextGroupsById.has(s)) {
            const l = /* @__PURE__ */ new Map();
            this.contextGroupsById.set(s, l);
          }
          return super.setContextForGroup(r, s);
        }
      };
    }, ju = (e, n) => {
      const r = ((s) => En(s) ? Uu() : Vu())(n);
      try {
        return typeof e == "function" ? (s) => e(r(s)) : Array.isArray(e) ? [...e, r] : (s) => new (r(s))();
      } catch (s) {
        throw new Error("WorkspacePlatform.init Error:", s);
      }
    };
    async function Ku() {
      (async () => Lt().on("window-closed", Hc))(), async function() {
        const e = fin.Application.getCurrentSync(), n = await Oi();
        await Promise.all(n.map(async (s) => {
          await Ta(s.identity, void 0, !0);
        }));
        const r = await fin.System.getFocusedWindow();
        r && r.name.startsWith(ue.BrowserWindow) && await Ta(r, void 0, !0), await e.addListener("window-focused", async (s) => {
          await Ta(s, void 0, !0);
        }), await e.addListener("window-minimized", async (s) => {
          await Ta(s, !1);
        }), await e.addListener("window-restored", async (s) => {
          await Ta(s, !0);
        }), await e.addListener("window-closed", $c);
      }(), _o(await To());
    }
    let Zo;
    function $u({ overrideCallback: e, interopOverride: n, browser: r, notifications: s, analytics: l, integrations: w = [], workspaceAsar: S }) {
      if (!Be) throw new Error("Cannot be used outside an OpenFin env.");
      return Zo || (Zo = (async () => {
        const b = fin.Platform.getCurrentSync();
        var N, V;
        if (b.once("platform-api-ready", () => Ku()), b.on("window-show-all-downloads", ({ name: ae, uuid: le }) => {
          Ai({ name: ae, uuid: le });
        }), r != null && r.title && (N = r.title, es = N), kc(l), S) {
          const ae = `workspace-${encodeURIComponent(fin.me.uuid)}`, { baseUrl: le } = await fin.System.serveAsset({ ...S, hostName: ae });
          bt(le);
        }
        r != null && r.browserBaseUrl && bt(r.browserBaseUrl), En(r) && (ot = !0, V = r, nt = V == null ? void 0 : V.aiPanelOptions, Ge());
        const X = Qa();
        var Y;
        return X.setWorkspaceStorage(ba(`${ht}-workspace`)), X.trySynchronizeWorkspaceStorage(), await fin.Platform.init({ overrideCallback: Fu(r, e || (r == null ? void 0 : r.overrideCallback), s), interopOverride: ju(n || (r == null ? void 0 : r.interopOverride), r) }), Y = { allowed: !0 }, Sa(Nn.Platform, Y), await Promise.all(w.map(async (ae) => {
          ((le, Pe) => {
            Sa(`${Nn.Microflow}:${le}`, Pe, "integration-feature");
          })(ae.workflowIntegrationName, { allowed: !0, apiVersion: et }), await ae._initializeWorkflows();
        })), b;
      })()), Zo;
    }
    const Hu = async ({ theme: e, customActions: n, language: r, ...s }) => {
      const l = et.split(".").map((b) => parseInt(b));
      if (!await (async (b) => {
        if ((await Oe()).disableRuntimeValidation || await Et()) return !0;
        const N = (await fin.System.getVersion()).split(".").map((V) => parseInt(V));
        return b.every((V, X) => !(X < 3) || N[X] === b[X]);
      })(l)) throw new Error(`Runtime version is not supported.  ${l[0]}.${l[1]}.${l[2]}.* is required`);
      var S;
      return Bu(e), e && (S = { allowed: !0 }, Sa(Nn.Theming, S)), n && (No = n), await Uc(r == null ? void 0 : r.initialLanguage), $u(s);
    };
  })(), Ls.exports = d;
})();
var nc = Ls.exports;
const Fd = /* @__PURE__ */ ui(nc), Ld = /* @__PURE__ */ Xu({
  __proto__: null,
  default: Fd
}, [nc]);
typeof window < "u" && (window.WorkspacePlatform = Ld);
export {
  Ld as default
};
