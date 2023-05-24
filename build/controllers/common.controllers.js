"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateCeremony = exports.updateCaseFolder = exports.getTelephones = exports.getTelephone = exports.getFolders = exports.getEmails = exports.getEmail = exports.getCeremonies = exports.deleteTelephones = exports.deleteFolder = exports.deleteEmails = exports.createCeremony = exports.addTelephone = exports.addFolder = exports.addEmail = exports.addActaToFolder = void 0;
var _database = require("../database");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var getFolders = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var _yield$pool$query, _yield$pool$query2, respon;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _database.pool.query("SELECT * FROM folder");
        case 2:
          _yield$pool$query = _context.sent;
          _yield$pool$query2 = _slicedToArray(_yield$pool$query, 1);
          respon = _yield$pool$query2[0];
          res.json(respon);
        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getFolders(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.getFolders = getFolders;
var updateCaseFolder = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var id_folder, data, _yield$pool$query3, _yield$pool$query4, respon;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          id_folder = req.params.id_folder;
          data = req.body;
          _context2.prev = 2;
          _context2.next = 5;
          return _database.pool.query("UPDATE `folder` SET `id_case` = ? WHERE `id_folder` = ?", [data["case"], id_folder]);
        case 5:
          _yield$pool$query3 = _context2.sent;
          _yield$pool$query4 = _slicedToArray(_yield$pool$query3, 1);
          respon = _yield$pool$query4[0];
          if (!(respon.affectedRows === 0)) {
            _context2.next = 10;
            break;
          }
          return _context2.abrupt("return", res.status(404).json({
            message: "Folder not found"
          }));
        case 10:
          res.status(201).json({
            message: "Folder updated successfully"
          });
          _context2.next = 16;
          break;
        case 13:
          _context2.prev = 13;
          _context2.t0 = _context2["catch"](2);
          res.status(500).json(_context2.t0);
        case 16:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[2, 13]]);
  }));
  return function updateCaseFolder(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.updateCaseFolder = updateCaseFolder;
var addActaToFolder = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var id_folder, _yield$pool$query5, _yield$pool$query6, response;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          id_folder = req.params.id_folder;
          _context3.prev = 1;
          _context3.next = 4;
          return _database.pool.query("UPDATE `folder` SET `actas_num` = actas_num + 1 WHERE id_folder = ?", [id_folder]);
        case 4:
          _yield$pool$query5 = _context3.sent;
          _yield$pool$query6 = _slicedToArray(_yield$pool$query5, 1);
          response = _yield$pool$query6[0];
          if (!(response.affectedRows === 0)) {
            _context3.next = 9;
            break;
          }
          return _context3.abrupt("return", res.status(404).json({
            message: "Folder not found"
          }));
        case 9:
          res.status(201).json({
            message: "Acta added to Folder successfully"
          });
          _context3.next = 15;
          break;
        case 12:
          _context3.prev = 12;
          _context3.t0 = _context3["catch"](1);
          res.status(500).json(_context3.t0);
        case 15:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[1, 12]]);
  }));
  return function addActaToFolder(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.addActaToFolder = addActaToFolder;
var addFolder = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var sql, data, resp;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          sql = "INSERT INTO `folder` (`id_case`,`actas_num`) VALUES (?,?)";
          data = req.body;
          try {
            resp = _database.pool.query(sql, [data["case"], 0]);
            res.status(201).json({
              message: data["case"]
            });
          } catch (err) {
            res.status(500).json(err);
          }
        case 3:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function addFolder(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.addFolder = addFolder;
var deleteFolder = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var id_folder, _yield$pool$query7, _yield$pool$query8, respon;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          id_folder = req.params.id_folder.id_folder;
          _context5.prev = 1;
          _context5.next = 4;
          return _database.pool.query("DELETE FROM `folder` WHERE `id_folder`=?", [id_folder]);
        case 4:
          _yield$pool$query7 = _context5.sent;
          _yield$pool$query8 = _slicedToArray(_yield$pool$query7, 1);
          respon = _yield$pool$query8[0];
          if (!(respon.affectedRows <= 0)) {
            _context5.next = 9;
            break;
          }
          return _context5.abrupt("return", res.status(404).json({
            message: "Folder not found"
          }));
        case 9:
          res.status(201).json({
            message: "Folder deleted successfully"
          });
          _context5.next = 15;
          break;
        case 12:
          _context5.prev = 12;
          _context5.t0 = _context5["catch"](1);
          res.status(500).json(_context5.t0);
        case 15:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[1, 12]]);
  }));
  return function deleteFolder(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
exports.deleteFolder = deleteFolder;
var getCeremonies = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var _yield$pool$query9, _yield$pool$query10, respon;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return _database.pool.query("SELECT * FROM ceremony");
        case 2:
          _yield$pool$query9 = _context6.sent;
          _yield$pool$query10 = _slicedToArray(_yield$pool$query9, 1);
          respon = _yield$pool$query10[0];
          res.json(respon);
        case 6:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function getCeremonies(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
exports.getCeremonies = getCeremonies;
var createCeremony = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var sql, data, saved;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          sql = "INSERT INTO ceremony (date,cicle) VALUES (? ,?)";
          data = req.body;
          try {
            saved = _database.pool.query(sql, [data.date, data.cicle]);
            res.status(201).json({
              message: "Ceremony Saved successfully"
            });
          } catch (err) {
            res.status(500).json(err);
          }
        case 3:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function createCeremony(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
exports.createCeremony = createCeremony;
var updateCeremony = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var id_ceremony, data, _yield$pool$query11, _yield$pool$query12, respon;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          id_ceremony = req.params.id_ceremony;
          data = req.body;
          _context8.prev = 2;
          _context8.next = 5;
          return _database.pool.query("UPDATE `ceremony` SET `date` = ?,`cicle` = ?  WHERE `id_ceremony` = ?", [data.date, data.cicle, id_ceremony]);
        case 5:
          _yield$pool$query11 = _context8.sent;
          _yield$pool$query12 = _slicedToArray(_yield$pool$query11, 1);
          respon = _yield$pool$query12[0];
          if (!(respon.affectedRows === 0)) {
            _context8.next = 10;
            break;
          }
          return _context8.abrupt("return", res.status(404).json({
            message: "Ceremony not found"
          }));
        case 10:
          res.status(201).json({
            message: "Ceremony updated successfully"
          });
          _context8.next = 16;
          break;
        case 13:
          _context8.prev = 13;
          _context8.t0 = _context8["catch"](2);
          res.status(500).json(_context8.t0);
        case 16:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[2, 13]]);
  }));
  return function updateCeremony(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
exports.updateCeremony = updateCeremony;
var addTelephone = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var sql, data, review;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          sql = "INSERT INTO sinoidales_phones SET id_sinoidal = (SELECT id_sinoidales FROM sinoidales WHERE id_sinoidales = ?), telephone = ?";
          data = req.body;
          _context9.prev = 2;
          _context9.next = 5;
          return _database.pool.query(sql, [req.params.idSinoidal, data.phone]);
        case 5:
          review = _context9.sent;
          if (review.affectedRows === 0) res.status(404).json({
            message: "id sinoidal not found"
          });
          res.status(201).json({
            message: "Phone added successfully"
          });
          _context9.next = 13;
          break;
        case 10:
          _context9.prev = 10;
          _context9.t0 = _context9["catch"](2);
          res.status(500).json({
            message: _context9.t0
          });
        case 13:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[2, 10]]);
  }));
  return function addTelephone(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();
exports.addTelephone = addTelephone;
var getTelephones = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var _yield$pool$query13, _yield$pool$query14, respon;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          _context10.next = 3;
          return _database.pool.query("SELECT * FROM sinoidales_phones WHERE id_sinoidal=?", [req.params.idSinoidal]);
        case 3:
          _yield$pool$query13 = _context10.sent;
          _yield$pool$query14 = _slicedToArray(_yield$pool$query13, 1);
          respon = _yield$pool$query14[0];
          res.json(respon);
          _context10.next = 12;
          break;
        case 9:
          _context10.prev = 9;
          _context10.t0 = _context10["catch"](0);
          res.status(500).json({
            message: _context10.t0
          });
        case 12:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 9]]);
  }));
  return function getTelephones(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();
exports.getTelephones = getTelephones;
var getTelephone = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var id, _yield$pool$query15, _yield$pool$query16, respon;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          id = req.params.id;
          _context11.prev = 1;
          _context11.next = 4;
          return _database.pool.query("SELECT telephone FROM sinoidales_phones WHERE id_sinoidal=? LIMIT 1", [id]);
        case 4:
          _yield$pool$query15 = _context11.sent;
          _yield$pool$query16 = _slicedToArray(_yield$pool$query15, 1);
          respon = _yield$pool$query16[0];
          if (respon.length === 0) res.status(404).json({
            message: "Acta not found"
          });
          res.status(201).json(respon);
          _context11.next = 14;
          break;
        case 11:
          _context11.prev = 11;
          _context11.t0 = _context11["catch"](1);
          res.status(500).json({
            message: _context11.t0
          });
        case 14:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[1, 11]]);
  }));
  return function getTelephone(_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();
exports.getTelephone = getTelephone;
var deleteTelephones = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    var sql, data, get;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          sql = "DELETE FROM sinoidales_phones WHERE id_sinoidal=?";
          data = req.params;
          _context12.prev = 2;
          _context12.next = 5;
          return _database.pool.query(sql, [data.idSinoidal]);
        case 5:
          get = _context12.sent;
          if (get.affectedRows === 0) res.status(404).json({
            message: "Sinoidal not found"
          });
          res.status(201).json({
            message: "Phone deleted successfully"
          });
          _context12.next = 13;
          break;
        case 10:
          _context12.prev = 10;
          _context12.t0 = _context12["catch"](2);
          req.status(500).json({
            message: _context12.t0
          });
        case 13:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[2, 10]]);
  }));
  return function deleteTelephones(_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}();
exports.deleteTelephones = deleteTelephones;
var addEmail = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res) {
    var sql, data, _yield$pool$query17, _yield$pool$query18, review;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          sql = "INSERT INTO sinoidales_emails SET id_sinoidal = (SELECT id_sinoidales FROM sinoidales WHERE id_sinoidales = ?), email = ?";
          data = req.body;
          _context13.prev = 2;
          _context13.next = 5;
          return _database.pool.query(sql, [req.params.idSinoidal, data.email]);
        case 5:
          _yield$pool$query17 = _context13.sent;
          _yield$pool$query18 = _slicedToArray(_yield$pool$query17, 1);
          review = _yield$pool$query18[0];
          if (review.affectedRows === 0) res.status(404).json({
            message: "id sinoidal not found"
          });
          res.status(201).json({
            message: "Email added successfully"
          });
          _context13.next = 15;
          break;
        case 12:
          _context13.prev = 12;
          _context13.t0 = _context13["catch"](2);
          res.status(500).json({
            message: _context13.t0
          });
        case 15:
        case "end":
          return _context13.stop();
      }
    }, _callee13, null, [[2, 12]]);
  }));
  return function addEmail(_x25, _x26) {
    return _ref13.apply(this, arguments);
  };
}();
exports.addEmail = addEmail;
var getEmail = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(req, res) {
    var id, _yield$pool$query19, _yield$pool$query20, data;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          id = req.params.id;
          _context14.prev = 1;
          _context14.next = 4;
          return _database.pool.query("SELECT email FROM sinoidales_emails WHERE id_sinoidal=? LIMIT 1", [id]);
        case 4:
          _yield$pool$query19 = _context14.sent;
          _yield$pool$query20 = _slicedToArray(_yield$pool$query19, 1);
          data = _yield$pool$query20[0];
          if (data.length === 0) res.status(404).json({
            message: "sinoidal not found"
          });
          res.status(201).json(data);
          _context14.next = 14;
          break;
        case 11:
          _context14.prev = 11;
          _context14.t0 = _context14["catch"](1);
          res.status(500).json({
            message: _context14.t0
          });
        case 14:
        case "end":
          return _context14.stop();
      }
    }, _callee14, null, [[1, 11]]);
  }));
  return function getEmail(_x27, _x28) {
    return _ref14.apply(this, arguments);
  };
}();
exports.getEmail = getEmail;
var getEmails = /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(req, res) {
    var _yield$pool$query21, _yield$pool$query22, respon;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          _context15.prev = 0;
          _context15.next = 3;
          return _database.pool.query("SELECT * FROM sinoidales_emails WHERE id_sinoidal=?", [req.params.idSinoidal]);
        case 3:
          _yield$pool$query21 = _context15.sent;
          _yield$pool$query22 = _slicedToArray(_yield$pool$query21, 1);
          respon = _yield$pool$query22[0];
          res.json(respon);
          _context15.next = 12;
          break;
        case 9:
          _context15.prev = 9;
          _context15.t0 = _context15["catch"](0);
          res.status(500).json({
            message: _context15.t0
          });
        case 12:
        case "end":
          return _context15.stop();
      }
    }, _callee15, null, [[0, 9]]);
  }));
  return function getEmails(_x29, _x30) {
    return _ref15.apply(this, arguments);
  };
}();
exports.getEmails = getEmails;
var deleteEmails = /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(req, res) {
    var sql, data, _yield$pool$query23, _yield$pool$query24, get;
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          sql = "DELETE FROM sinoidales_emails WHERE id_sinoidal=?";
          data = req.params;
          _context16.prev = 2;
          _context16.next = 5;
          return _database.pool.query(sql, [data.idSinoidal]);
        case 5:
          _yield$pool$query23 = _context16.sent;
          _yield$pool$query24 = _slicedToArray(_yield$pool$query23, 1);
          get = _yield$pool$query24[0];
          if (get.affectedRows === 0) res.status(404).json({
            message: "Sinoidal not found"
          });
          res.status(201).json({
            message: "Email deleted successfully"
          });
          _context16.next = 15;
          break;
        case 12:
          _context16.prev = 12;
          _context16.t0 = _context16["catch"](2);
          res.status(500).json({
            message: _context16.t0
          });
        case 15:
        case "end":
          return _context16.stop();
      }
    }, _callee16, null, [[2, 12]]);
  }));
  return function deleteEmails(_x31, _x32) {
    return _ref16.apply(this, arguments);
  };
}();
exports.deleteEmails = deleteEmails;