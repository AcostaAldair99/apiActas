"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateSinoidalActa = exports.updateActaSignatures = exports.updateActa = exports.getSignedFromActasSinoidales = exports.getCountFirmasBySinoidal = exports.getActasSinoidalesBySinoidal = exports.getActasSinoidalesByActa = exports.getActasSinoidales = exports.getActas = exports.getActaById = exports.deleteActaSinoidales = exports.deleteActaById = exports.createActa = exports.addSinoidalesActa = exports.addSignatureToActa = void 0;
var _database = require("../database");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var createActa = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var sql, data, idInsert, saved;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          sql = "INSERT INTO actas SET id_Folder_fk=(SELECT id_folder FROM folder WHERE id_folder = ?), id_ceremony_fk=(SELECT id_ceremony FROM ceremony WHERE id_ceremony=?), date_limit_fk=(SELECT date FROM ceremony WHERE id_ceremony=?), name_Student=?,lastName_Student=?,id_Student=?,degree=?,degree_plan=?,signatures=? ";
          data = req.body;
          idInsert = null;
          _context.prev = 3;
          saved = _database.pool.query(sql, [data.id_Folder, data.id_ceremony, data.id_ceremony, data.name_Student, data.lastName_Student, data.id_Student, data.degree, data.degree_plan, data.signatures]);
          saved.then(function (result) {
            res.status(201).json({
              actadata: result[0].insertId
            });
            console.log("This is the result\n" + result);
          });
          _context.next = 11;
          break;
        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](3);
          return _context.abrupt("return", res.status(500).json({
            message: _context.t0
          }));
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[3, 8]]);
  }));
  return function createActa(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.createActa = createActa;
var getActaById = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var sql, id, _yield$pool$query, _yield$pool$query2, data;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          sql = "SELECT * FROM actas WHERE id_actas=?";
          id = req.params.id;
          _context2.prev = 2;
          _context2.next = 5;
          return _database.pool.query(sql, [id]);
        case 5:
          _yield$pool$query = _context2.sent;
          _yield$pool$query2 = _slicedToArray(_yield$pool$query, 1);
          data = _yield$pool$query2[0];
          if (data.length === 0) res.status(404).json({
            message: "acta not found"
          });
          res.status(201).json(data);
          _context2.next = 15;
          break;
        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](2);
          res.status(500).json({
            message: _context2.t0
          });
        case 15:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[2, 12]]);
  }));
  return function getActaById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getActaById = getActaById;
var addSignatureToActa = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var sql, _req$params, idActa, Signatures, quer;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          sql = "UPDATE actas SET signatures = ? WHERE id_actas=?";
          _req$params = req.params, idActa = _req$params.idActa, Signatures = _req$params.Signatures;
          _context3.prev = 2;
          _context3.next = 5;
          return _database.pool.query(sql, [Signatures, idActa]);
        case 5:
          quer = _context3.sent;
          console.log(quer);
          if (quer.affectedRows === 0) res.status(404).json({
            message: "Acta not found"
          });
          res.status(201).json({
            message: "Acta Signatures updated successfully!"
          });
          _context3.next = 14;
          break;
        case 11:
          _context3.prev = 11;
          _context3.t0 = _context3["catch"](2);
          res.status(500).json({
            message: _context3.t0
          });
        case 14:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[2, 11]]);
  }));
  return function addSignatureToActa(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.addSignatureToActa = addSignatureToActa;
var addSinoidalesActa = function addSinoidalesActa(req, res) {
  var sql = "INSERT INTO actas_sinoidales SET id_ceremony=(SELECT id_ceremony FROM ceremony WHERE id_ceremony=?), date_fk=(SELECT date FROM ceremony WHERE id_ceremony=?), id_actas_fk=(SELECT id_actas FROM actas WHERE id_actas=?),id_sinoidales_fk=(SELECT id_sinoidales FROM sinoidales WHERE id_sinoidales=?),signed=0";
  var _req$params2 = req.params,
    idActa = _req$params2.idActa,
    idCeremony = _req$params2.idCeremony,
    idSinoidal = _req$params2.idSinoidal;
  try {
    var quer = _database.pool.query(sql, [idCeremony, idCeremony, idActa, idSinoidal]);
    res.status(201).json({
      message: "Set Sinoidal in Acta Successfully"
    });
  } catch (err) {
    res.status(500).json({
      message: err
    });
  }
};
exports.addSinoidalesActa = addSinoidalesActa;
var updateActa = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var sql, data, _yield$pool$query3, _yield$pool$query4, exe;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          sql = "UPDATE `actas` SET `id_ceremony_fk`=(SELECT id_ceremony FROM ceremony WHERE id_ceremony = ?),`id_folder_fk`=(SELECT id_folder FROM folder WHERE id_folder=?) WHERE `id_actas`=?";
          data = req.body;
          _context4.prev = 2;
          _context4.next = 5;
          return _database.pool.query(sql, [data.idCeremony, data.idFolder, req.params.idActa]);
        case 5:
          _yield$pool$query3 = _context4.sent;
          _yield$pool$query4 = _slicedToArray(_yield$pool$query3, 1);
          exe = _yield$pool$query4[0];
          if (exe.affectedRows === 0) res.status(404).json({
            message: "Acta not found"
          });
          res.status(201).json({
            message: "Acta update successfully"
          });
          _context4.next = 15;
          break;
        case 12:
          _context4.prev = 12;
          _context4.t0 = _context4["catch"](2);
          res.status(500).json({
            message: _context4.t0
          });
        case 15:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[2, 12]]);
  }));
  return function updateActa(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.updateActa = updateActa;
var updateSinoidalActa = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var sql, data, _yield$pool$query5, _yield$pool$query6, qe;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          sql = "UPDATE `actas_sinoidales` SET `id_sinoidales_fk` = (SELECT id_sinoidales FROM sinoidales WHERE id_sinoidales=?) WHERE `id_actas_fk` = ? AND `id_register`=? AND `signed`=0";
          data = req.body;
          _context5.prev = 2;
          _context5.next = 5;
          return _database.pool.query(sql, [data.idSinoidal, req.params.idActa, data.idRegister]);
        case 5:
          _yield$pool$query5 = _context5.sent;
          _yield$pool$query6 = _slicedToArray(_yield$pool$query5, 1);
          qe = _yield$pool$query6[0];
          if (!(qe.affectedRows === 0)) {
            _context5.next = 10;
            break;
          }
          return _context5.abrupt("return", res.status(404).json({
            message: "Id Acta not Found"
          }));
        case 10:
          res.status(201).json({
            message: "Register Updated successfully"
          });
          _context5.next = 16;
          break;
        case 13:
          _context5.prev = 13;
          _context5.t0 = _context5["catch"](2);
          res.status(500).json(_context5.t0);
        case 16:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[2, 13]]);
  }));
  return function updateSinoidalActa(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
exports.updateSinoidalActa = updateSinoidalActa;
var getActasSinoidales = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var _yield$pool$query7, _yield$pool$query8, resp;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return _database.pool.query("SELECT * FROM actas_sinoidales");
        case 2:
          _yield$pool$query7 = _context6.sent;
          _yield$pool$query8 = _slicedToArray(_yield$pool$query7, 1);
          resp = _yield$pool$query8[0];
          if (!(resp.length === 0)) {
            _context6.next = 7;
            break;
          }
          return _context6.abrupt("return", res.status(404).json({
            message: "Are not get sinoidales signing to any acta"
          }));
        case 7:
          res.json(resp);
        case 8:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function getActasSinoidales(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
exports.getActasSinoidales = getActasSinoidales;
var getActasSinoidalesByActa = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var idActa, _yield$pool$query9, _yield$pool$query10, resp;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          idActa = req.params.idActa;
          _context7.next = 3;
          return _database.pool.query("SELECT * FROM actas_sinoidales WHERE id_actas_fk=?", [idActa]);
        case 3:
          _yield$pool$query9 = _context7.sent;
          _yield$pool$query10 = _slicedToArray(_yield$pool$query9, 1);
          resp = _yield$pool$query10[0];
          if (!(resp.length === 0)) {
            _context7.next = 8;
            break;
          }
          return _context7.abrupt("return", res.status(404).json({
            message: "Acta not found"
          }));
        case 8:
          res.status(201).json(resp);
        case 9:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function getActasSinoidalesByActa(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
exports.getActasSinoidalesByActa = getActasSinoidalesByActa;
var getActasSinoidalesBySinoidal = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var idSinodal, _yield$pool$query11, _yield$pool$query12, resp;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          idSinodal = req.params.idSinodal;
          console.log(idSinodal);
          _context8.next = 4;
          return _database.pool.query("SELECT * FROM `actas_sinoidales` WHERE `id_sinoidales_fk`=?", [idSinodal]);
        case 4:
          _yield$pool$query11 = _context8.sent;
          _yield$pool$query12 = _slicedToArray(_yield$pool$query11, 1);
          resp = _yield$pool$query12[0];
          if (!(resp.length === 0)) {
            _context8.next = 9;
            break;
          }
          return _context8.abrupt("return", res.status(404).json({
            message: "Acta not found"
          }));
        case 9:
          res.status(201).json(resp);
        case 10:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function getActasSinoidalesBySinoidal(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
exports.getActasSinoidalesBySinoidal = getActasSinoidalesBySinoidal;
var getSignedFromActasSinoidales = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var _req$params3, idActa, idSinoidal, _yield$pool$query13, _yield$pool$query14, resp;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _req$params3 = req.params, idActa = _req$params3.idActa, idSinoidal = _req$params3.idSinoidal;
          _context9.prev = 1;
          _context9.next = 4;
          return _database.pool.query("SELECT `signed` FROM actas_sinoidales WHERE id_sinoidales_fk = ? AND id_actas_fk=?", [idSinoidal, idActa]);
        case 4:
          _yield$pool$query13 = _context9.sent;
          _yield$pool$query14 = _slicedToArray(_yield$pool$query13, 1);
          resp = _yield$pool$query14[0];
          if (resp.affectedRows === 0) res.status(404).json({
            message: "Indexes not found"
          });
          res.status(201).json(resp);
          _context9.next = 14;
          break;
        case 11:
          _context9.prev = 11;
          _context9.t0 = _context9["catch"](1);
          res.status(500).json({
            message: _context9.t0
          });
        case 14:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[1, 11]]);
  }));
  return function getSignedFromActasSinoidales(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();
exports.getSignedFromActasSinoidales = getSignedFromActasSinoidales;
var getActas = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var _yield$pool$query15, _yield$pool$query16, respon;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return _database.pool.query("SELECT * FROM actas");
        case 2:
          _yield$pool$query15 = _context10.sent;
          _yield$pool$query16 = _slicedToArray(_yield$pool$query15, 1);
          respon = _yield$pool$query16[0];
          if (!(respon.length === 0)) {
            _context10.next = 7;
            break;
          }
          return _context10.abrupt("return", res.status(404).json({
            message: "Are not Actas Registered"
          }));
        case 7:
          res.status(201).json(respon);
        case 8:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return function getActas(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();
exports.getActas = getActas;
var updateActaSignatures = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var sql, _req$params4, idActa, idSinoidal, val;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          sql = "UPDATE `actas_sinoidales` SET `signed` = 1 WHERE `id_actas_fk`=? AND `id_sinoidales_fk`=?";
          _req$params4 = req.params, idActa = _req$params4.idActa, idSinoidal = _req$params4.idSinoidal;
          _context11.prev = 2;
          _context11.next = 5;
          return _database.pool.query(sql, [idActa, idSinoidal]);
        case 5:
          val = _context11.sent;
          if (!(val.affectedRows === 0)) {
            _context11.next = 8;
            break;
          }
          return _context11.abrupt("return", res.status(404).json({
            message: "Acta not found"
          }));
        case 8:
          res.status(201).json({
            message: "Acta updated Successfully a sinoidal got signed the acta"
          });
          _context11.next = 14;
          break;
        case 11:
          _context11.prev = 11;
          _context11.t0 = _context11["catch"](2);
          res.status(500).json({
            message: "There is the limit for signatures",
            err: _context11.t0
          });
        case 14:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[2, 11]]);
  }));
  return function updateActaSignatures(_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();
exports.updateActaSignatures = updateActaSignatures;
var deleteActaById = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    var _yield$pool$query17, _yield$pool$query18, rows;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.prev = 0;
          _context12.next = 3;
          return _database.pool.query("DELETE FROM actas WHERE id_actas = ?", [req.params.idActa]);
        case 3:
          _yield$pool$query17 = _context12.sent;
          _yield$pool$query18 = _slicedToArray(_yield$pool$query17, 1);
          rows = _yield$pool$query18[0];
          if (!(rows.length <= 0)) {
            _context12.next = 8;
            break;
          }
          return _context12.abrupt("return", res.status(404).json({
            message: "error"
          }));
        case 8:
          res.status(201).json({
            message: "Acta deleted !!"
          });
          _context12.next = 14;
          break;
        case 11:
          _context12.prev = 11;
          _context12.t0 = _context12["catch"](0);
          res.status(500).json(_context12.t0);
        case 14:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[0, 11]]);
  }));
  return function deleteActaById(_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}();
exports.deleteActaById = deleteActaById;
var deleteActaSinoidales = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res) {
    var data;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _context13.prev = 0;
          _context13.next = 3;
          return _database.pool.query("DELETE FROM `actas_sinoidales` WHERE `id_actas_fk`=? AND `signed`=0", [req.params.idActa]);
        case 3:
          data = _context13.sent;
          if (data.affectedRows === 0) res.status(404).json({
            message: "ACTA NOT FOUND"
          });
          res.status(201).json({
            message: "Acta deleted successfully"
          });
          _context13.next = 11;
          break;
        case 8:
          _context13.prev = 8;
          _context13.t0 = _context13["catch"](0);
          res.status(500).json({
            message: _context13.t0
          });
        case 11:
        case "end":
          return _context13.stop();
      }
    }, _callee13, null, [[0, 8]]);
  }));
  return function deleteActaSinoidales(_x25, _x26) {
    return _ref13.apply(this, arguments);
  };
}();
exports.deleteActaSinoidales = deleteActaSinoidales;
var getCountFirmasBySinoidal = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(req, res) {
    var idSinodal, sql, _yield$pool$query19, _yield$pool$query20, query;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          idSinodal = req.params.idSinodal;
          sql = "SELECT COUNT(*) FROM `actas_sinoidales` WHERE `id_sinoidales_fk` = ? AND `signed`=1";
          _context14.prev = 2;
          _context14.next = 5;
          return _database.pool.query(sql, [idSinodal]);
        case 5:
          _yield$pool$query19 = _context14.sent;
          _yield$pool$query20 = _slicedToArray(_yield$pool$query19, 1);
          query = _yield$pool$query20[0];
          if (query.affectedRows === 0) res.status(404).json({
            message: "Sinodal not Found"
          });
          res.status(201).json(query);
          _context14.next = 15;
          break;
        case 12:
          _context14.prev = 12;
          _context14.t0 = _context14["catch"](2);
          res.status(500).json({
            message: _context14.t0
          });
        case 15:
        case "end":
          return _context14.stop();
      }
    }, _callee14, null, [[2, 12]]);
  }));
  return function getCountFirmasBySinoidal(_x27, _x28) {
    return _ref14.apply(this, arguments);
  };
}();
exports.getCountFirmasBySinoidal = getCountFirmasBySinoidal;