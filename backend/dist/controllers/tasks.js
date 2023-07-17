"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateSolicitudes = exports.updatePersona = exports.updateEquipo = exports.updateDevoluciones = exports.login = exports.getSolicitudesSi = exports.getSolicitudesId = exports.getSolicitudesCount = exports.getSolicitudesByCedula = exports.getSolicitudes = exports.getPersonasSi = exports.getPersonasCount = exports.getPersonasCedula = exports.getPersonas = exports.getEquiposSi = exports.getEquiposId = exports.getEquiposCount = exports.getEquipos = exports.getDevolucionesSi = exports.getDevolucionesId = exports.getDevolucionesCount = exports.getDevolucionesByCedula = exports.getDevoluciones = exports.getCustodiasCount = exports.getCustodiaSi = exports.getCustodiaId = exports.getCustodiaByCedula = exports.getCustodia = exports.deleteSolicitudes = exports.deletePersona = exports.deleteEquipo = exports.deleteDevoluciones = exports.deleteCustodia = exports.createSolicitudes = exports.createPersona = exports.createEquipo = exports.activateSolicitudes = exports.activatePersona = exports.activateEquipo = exports.activateDevoluciones = exports.activateCustodia = void 0;
var _database = require("../database");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
/* GETALL */

var getPersonas = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var connection, _yield$connection$que, _yield$connection$que2, rows;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context.sent;
          _context.next = 5;
          return connection.query('SELECT * FROM persona');
        case 5:
          _yield$connection$que = _context.sent;
          _yield$connection$que2 = _slicedToArray(_yield$connection$que, 1);
          rows = _yield$connection$que2[0];
          connection.end();
          res.json(rows);
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getPersonas(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.getPersonas = getPersonas;
var getEquipos = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var connection, _yield$connection$que3, _yield$connection$que4, rows;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context2.sent;
          _context2.next = 5;
          return connection.query('SELECT * FROM equipos');
        case 5:
          _yield$connection$que3 = _context2.sent;
          _yield$connection$que4 = _slicedToArray(_yield$connection$que3, 1);
          rows = _yield$connection$que4[0];
          connection.end();
          res.json(rows);
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function getEquipos(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.getEquipos = getEquipos;
var getSolicitudes = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var connection, _yield$connection$que5, _yield$connection$que6, rows;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context3.sent;
          _context3.next = 5;
          return connection.query('SELECT * FROM solicitudes');
        case 5:
          _yield$connection$que5 = _context3.sent;
          _yield$connection$que6 = _slicedToArray(_yield$connection$que5, 1);
          rows = _yield$connection$que6[0];
          connection.end();
          res.json(rows);
        case 10:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function getSolicitudes(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.getSolicitudes = getSolicitudes;
var getCustodia = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var connection, _yield$connection$que7, _yield$connection$que8, rows;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context4.sent;
          _context4.next = 5;
          return connection.query('SELECT * FROM custodia');
        case 5:
          _yield$connection$que7 = _context4.sent;
          _yield$connection$que8 = _slicedToArray(_yield$connection$que7, 1);
          rows = _yield$connection$que8[0];
          connection.end();
          res.json(rows);
        case 10:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function getCustodia(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.getCustodia = getCustodia;
var getDevoluciones = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var connection, _yield$connection$que9, _yield$connection$que10, rows;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context5.sent;
          _context5.next = 5;
          return connection.query('SELECT * FROM devoluciones');
        case 5:
          _yield$connection$que9 = _context5.sent;
          _yield$connection$que10 = _slicedToArray(_yield$connection$que9, 1);
          rows = _yield$connection$que10[0];
          connection.end();
          res.json(rows);
        case 10:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function getDevoluciones(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

/* GETSOME */
exports.getDevoluciones = getDevoluciones;
var getPersonasSi = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var connection, _yield$connection$que11, _yield$connection$que12, rows;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context6.sent;
          _context6.next = 5;
          return connection.query('SELECT * FROM persona WHERE estado = 1');
        case 5:
          _yield$connection$que11 = _context6.sent;
          _yield$connection$que12 = _slicedToArray(_yield$connection$que11, 1);
          rows = _yield$connection$que12[0];
          connection.end();
          res.json(rows);
        case 10:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function getPersonasSi(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
exports.getPersonasSi = getPersonasSi;
var getEquiposSi = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var connection, _yield$connection$que13, _yield$connection$que14, rows;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context7.sent;
          _context7.next = 5;
          return connection.query('SELECT * FROM equipos WHERE estado = 1 AND estado_equ = "Funcional" AND disponibilidad_equ = "Si"');
        case 5:
          _yield$connection$que13 = _context7.sent;
          _yield$connection$que14 = _slicedToArray(_yield$connection$que13, 1);
          rows = _yield$connection$que14[0];
          connection.end();
          res.json(rows);
        case 10:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function getEquiposSi(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
exports.getEquiposSi = getEquiposSi;
var getSolicitudesSi = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var connection, _yield$connection$que15, _yield$connection$que16, rows;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context8.sent;
          _context8.next = 5;
          return connection.query('SELECT * FROM solicitudes WHERE estado = 1');
        case 5:
          _yield$connection$que15 = _context8.sent;
          _yield$connection$que16 = _slicedToArray(_yield$connection$que15, 1);
          rows = _yield$connection$que16[0];
          connection.end();
          res.json(rows);
        case 10:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function getSolicitudesSi(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
exports.getSolicitudesSi = getSolicitudesSi;
var getCustodiaSi = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var connection, _yield$connection$que17, _yield$connection$que18, rows;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context9.sent;
          _context9.next = 5;
          return connection.query('SELECT * FROM custodia WHERE estado = 1');
        case 5:
          _yield$connection$que17 = _context9.sent;
          _yield$connection$que18 = _slicedToArray(_yield$connection$que17, 1);
          rows = _yield$connection$que18[0];
          connection.end();
          res.json(rows);
        case 10:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return function getCustodiaSi(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();
exports.getCustodiaSi = getCustodiaSi;
var getDevolucionesSi = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var connection, _yield$connection$que19, _yield$connection$que20, rows;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context10.sent;
          _context10.next = 5;
          return connection.query('SELECT * FROM devoluciones WHERE estado = 1');
        case 5:
          _yield$connection$que19 = _context10.sent;
          _yield$connection$que20 = _slicedToArray(_yield$connection$que19, 1);
          rows = _yield$connection$que20[0];
          connection.end();
          res.json(rows);
        case 10:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return function getDevolucionesSi(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();

/* GETID */
exports.getDevolucionesSi = getDevolucionesSi;
var getPersonasCedula = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var connection, _yield$connection$que21, _yield$connection$que22, rows;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context11.sent;
          _context11.next = 5;
          return connection.query('SELECT * FROM persona WHERE cedula_per = ?', [req.params.cedula_per]);
        case 5:
          _yield$connection$que21 = _context11.sent;
          _yield$connection$que22 = _slicedToArray(_yield$connection$que21, 1);
          rows = _yield$connection$que22[0];
          connection.end();
          res.json(rows[0]);
        case 10:
        case "end":
          return _context11.stop();
      }
    }, _callee11);
  }));
  return function getPersonasCedula(_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();
exports.getPersonasCedula = getPersonasCedula;
var getEquiposId = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    var connection, _yield$connection$que23, _yield$connection$que24, rows;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context12.sent;
          _context12.next = 5;
          return connection.query('SELECT * FROM equipos WHERE id_equ = ?', [req.params.id_equ]);
        case 5:
          _yield$connection$que23 = _context12.sent;
          _yield$connection$que24 = _slicedToArray(_yield$connection$que23, 1);
          rows = _yield$connection$que24[0];
          connection.end();
          res.json(rows[0]);
        case 10:
        case "end":
          return _context12.stop();
      }
    }, _callee12);
  }));
  return function getEquiposId(_x23, _x24) {
    return _ref12.apply(this, arguments);
  };
}();
exports.getEquiposId = getEquiposId;
var getSolicitudesId = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res) {
    var connection, _yield$connection$que25, _yield$connection$que26, rows;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _context13.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context13.sent;
          _context13.next = 5;
          return connection.query('SELECT * FROM solicitudes WHERE id_sol = ?', [req.params.id_sol]);
        case 5:
          _yield$connection$que25 = _context13.sent;
          _yield$connection$que26 = _slicedToArray(_yield$connection$que25, 1);
          rows = _yield$connection$que26[0];
          connection.end();
          res.json(rows[0]);
        case 10:
        case "end":
          return _context13.stop();
      }
    }, _callee13);
  }));
  return function getSolicitudesId(_x25, _x26) {
    return _ref13.apply(this, arguments);
  };
}();
exports.getSolicitudesId = getSolicitudesId;
var getCustodiaId = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(req, res) {
    var connection, _yield$connection$que27, _yield$connection$que28, rows;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          _context14.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context14.sent;
          _context14.next = 5;
          return connection.query('SELECT * FROM custodia WHERE id_cus=?', [req.params.id_cus]);
        case 5:
          _yield$connection$que27 = _context14.sent;
          _yield$connection$que28 = _slicedToArray(_yield$connection$que27, 1);
          rows = _yield$connection$que28[0];
          connection.end();
          res.json(rows[0]);
        case 10:
        case "end":
          return _context14.stop();
      }
    }, _callee14);
  }));
  return function getCustodiaId(_x27, _x28) {
    return _ref14.apply(this, arguments);
  };
}();
exports.getCustodiaId = getCustodiaId;
var getDevolucionesId = /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(req, res) {
    var connection, _yield$connection$que29, _yield$connection$que30, rows;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          _context15.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context15.sent;
          _context15.next = 5;
          return connection.query('SELECT * FROM devoluciones WHERE id_dev=?', [req.params.id_dev]);
        case 5:
          _yield$connection$que29 = _context15.sent;
          _yield$connection$que30 = _slicedToArray(_yield$connection$que29, 1);
          rows = _yield$connection$que30[0];
          connection.end();
          res.json(rows[0]);
        case 10:
        case "end":
          return _context15.stop();
      }
    }, _callee15);
  }));
  return function getDevolucionesId(_x29, _x30) {
    return _ref15.apply(this, arguments);
  };
}();

/* COUNTS */
exports.getDevolucionesId = getDevolucionesId;
var getPersonasCount = /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(req, res) {
    var connection, _yield$connection$que31, _yield$connection$que32, rows;
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          _context16.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context16.sent;
          _context16.next = 5;
          return connection.query('SELECT COUNT(*) FROM persona');
        case 5:
          _yield$connection$que31 = _context16.sent;
          _yield$connection$que32 = _slicedToArray(_yield$connection$que31, 1);
          rows = _yield$connection$que32[0];
          connection.end();
          res.json(rows[0]["COUNT(*)"]);
        case 10:
        case "end":
          return _context16.stop();
      }
    }, _callee16);
  }));
  return function getPersonasCount(_x31, _x32) {
    return _ref16.apply(this, arguments);
  };
}();
exports.getPersonasCount = getPersonasCount;
var getEquiposCount = /*#__PURE__*/function () {
  var _ref17 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(req, res) {
    var connection, _yield$connection$que33, _yield$connection$que34, rows;
    return _regeneratorRuntime().wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          _context17.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context17.sent;
          _context17.next = 5;
          return connection.query('SELECT COUNT(*) FROM equipos');
        case 5:
          _yield$connection$que33 = _context17.sent;
          _yield$connection$que34 = _slicedToArray(_yield$connection$que33, 1);
          rows = _yield$connection$que34[0];
          connection.end();
          res.json(rows[0]["COUNT(*)"]);
        case 10:
        case "end":
          return _context17.stop();
      }
    }, _callee17);
  }));
  return function getEquiposCount(_x33, _x34) {
    return _ref17.apply(this, arguments);
  };
}();
exports.getEquiposCount = getEquiposCount;
var getSolicitudesCount = /*#__PURE__*/function () {
  var _ref18 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(req, res) {
    var connection, _yield$connection$que35, _yield$connection$que36, rows;
    return _regeneratorRuntime().wrap(function _callee18$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          _context18.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context18.sent;
          _context18.next = 5;
          return connection.query('SELECT COUNT(*) FROM solicitudes');
        case 5:
          _yield$connection$que35 = _context18.sent;
          _yield$connection$que36 = _slicedToArray(_yield$connection$que35, 1);
          rows = _yield$connection$que36[0];
          connection.end();
          res.json(rows[0]["COUNT(*)"]);
        case 10:
        case "end":
          return _context18.stop();
      }
    }, _callee18);
  }));
  return function getSolicitudesCount(_x35, _x36) {
    return _ref18.apply(this, arguments);
  };
}();
exports.getSolicitudesCount = getSolicitudesCount;
var getCustodiasCount = /*#__PURE__*/function () {
  var _ref19 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(req, res) {
    var connection, _yield$connection$que37, _yield$connection$que38, rows;
    return _regeneratorRuntime().wrap(function _callee19$(_context19) {
      while (1) switch (_context19.prev = _context19.next) {
        case 0:
          _context19.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context19.sent;
          _context19.next = 5;
          return connection.query('SELECT COUNT(*) FROM custodia');
        case 5:
          _yield$connection$que37 = _context19.sent;
          _yield$connection$que38 = _slicedToArray(_yield$connection$que37, 1);
          rows = _yield$connection$que38[0];
          connection.end();
          res.json(rows[0]["COUNT(*)"]);
        case 10:
        case "end":
          return _context19.stop();
      }
    }, _callee19);
  }));
  return function getCustodiasCount(_x37, _x38) {
    return _ref19.apply(this, arguments);
  };
}();
exports.getCustodiasCount = getCustodiasCount;
var getDevolucionesCount = /*#__PURE__*/function () {
  var _ref20 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20(req, res) {
    var connection, _yield$connection$que39, _yield$connection$que40, rows;
    return _regeneratorRuntime().wrap(function _callee20$(_context20) {
      while (1) switch (_context20.prev = _context20.next) {
        case 0:
          _context20.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context20.sent;
          _context20.next = 5;
          return connection.query('SELECT COUNT(*) FROM devoluciones');
        case 5:
          _yield$connection$que39 = _context20.sent;
          _yield$connection$que40 = _slicedToArray(_yield$connection$que39, 1);
          rows = _yield$connection$que40[0];
          connection.end();
          res.json(rows[0]["COUNT(*)"]);
        case 10:
        case "end":
          return _context20.stop();
      }
    }, _callee20);
  }));
  return function getDevolucionesCount(_x39, _x40) {
    return _ref20.apply(this, arguments);
  };
}();

/* CREATES */
exports.getDevolucionesCount = getDevolucionesCount;
var createPersona = /*#__PURE__*/function () {
  var _ref21 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21(req, res) {
    var connection, _yield$connection$que41, _yield$connection$que42, result;
    return _regeneratorRuntime().wrap(function _callee21$(_context21) {
      while (1) switch (_context21.prev = _context21.next) {
        case 0:
          _context21.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context21.sent;
          _context21.next = 5;
          return connection.query("INSERT INTO persona(cedula_per, contrasenia_per, conf_contrasenia,nombre_per, apellido_per, telefono_per, correo_per, direccion_per, rol_per) VALUES (?,?,?,?,?,?,?,?,?)", [req.body.cedula_per, req.body.contrasenia_per, req.body.conf_contrasenia, req.body.nombre_per, req.body.apellido_per, req.body.telefono_per, req.body.correo_per, req.body.direccion_per, req.body.rol_per]);
        case 5:
          _yield$connection$que41 = _context21.sent;
          _yield$connection$que42 = _slicedToArray(_yield$connection$que41, 1);
          result = _yield$connection$que42[0];
          connection.end();
          res.json(_objectSpread({
            rows: result.affectedRows
          }, req.body));
        case 10:
        case "end":
          return _context21.stop();
      }
    }, _callee21);
  }));
  return function createPersona(_x41, _x42) {
    return _ref21.apply(this, arguments);
  };
}();
exports.createPersona = createPersona;
var createEquipo = /*#__PURE__*/function () {
  var _ref22 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22(req, res) {
    var connection, _yield$connection$que43, _yield$connection$que44, result;
    return _regeneratorRuntime().wrap(function _callee22$(_context22) {
      while (1) switch (_context22.prev = _context22.next) {
        case 0:
          _context22.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context22.sent;
          _context22.next = 5;
          return connection.query("INSERT INTO equipos(nombre_equ, descripcion_equ, estado_equ, disponibilidad_equ) VALUES (?,?,?,?)", [req.body.nombre_equ, req.body.descripcion_equ, req.body.estado_equ, req.body.disponibilidad_equ]);
        case 5:
          _yield$connection$que43 = _context22.sent;
          _yield$connection$que44 = _slicedToArray(_yield$connection$que43, 1);
          result = _yield$connection$que44[0];
          connection.end();
          res.json(_objectSpread({
            id: result.insertId
          }, req.body));
        case 10:
        case "end":
          return _context22.stop();
      }
    }, _callee22);
  }));
  return function createEquipo(_x43, _x44) {
    return _ref22.apply(this, arguments);
  };
}();
exports.createEquipo = createEquipo;
var createSolicitudes = /*#__PURE__*/function () {
  var _ref23 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee23(req, res) {
    var connection, _yield$connection$que45, _yield$connection$que46, result;
    return _regeneratorRuntime().wrap(function _callee23$(_context23) {
      while (1) switch (_context23.prev = _context23.next) {
        case 0:
          _context23.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context23.sent;
          _context23.next = 5;
          return connection.query("INSERT INTO solicitudes(cedula_per, id_equ) VALUES(?,?)", [req.body.cedula_per, req.body.id_equ]);
        case 5:
          _yield$connection$que45 = _context23.sent;
          _yield$connection$que46 = _slicedToArray(_yield$connection$que45, 1);
          result = _yield$connection$que46[0];
          connection.end();
          res.json(_objectSpread({
            id: result.insertId
          }, req.body));
        case 10:
        case "end":
          return _context23.stop();
      }
    }, _callee23);
  }));
  return function createSolicitudes(_x45, _x46) {
    return _ref23.apply(this, arguments);
  };
}();

/* UPDATES */
exports.createSolicitudes = createSolicitudes;
var updatePersona = /*#__PURE__*/function () {
  var _ref24 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee24(req, res) {
    var connection, result;
    return _regeneratorRuntime().wrap(function _callee24$(_context24) {
      while (1) switch (_context24.prev = _context24.next) {
        case 0:
          _context24.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context24.sent;
          _context24.next = 5;
          return connection.query("UPDATE persona SET ? WHERE cedula_per = ?", [req.body, req.params.cedula_per]);
        case 5:
          result = _context24.sent;
          connection.end();
          res.json(_objectSpread({
            id: result.affectedRows
          }, req.body));
        case 8:
        case "end":
          return _context24.stop();
      }
    }, _callee24);
  }));
  return function updatePersona(_x47, _x48) {
    return _ref24.apply(this, arguments);
  };
}();
exports.updatePersona = updatePersona;
var updateEquipo = /*#__PURE__*/function () {
  var _ref25 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee25(req, res) {
    var connection, result;
    return _regeneratorRuntime().wrap(function _callee25$(_context25) {
      while (1) switch (_context25.prev = _context25.next) {
        case 0:
          _context25.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context25.sent;
          _context25.next = 5;
          return connection.query("UPDATE equipos SET ? WHERE id_equ = ?", [req.body, req.params.id_equ]);
        case 5:
          result = _context25.sent;
          connection.end();
          res.json(_objectSpread({
            id: result.affectedRows
          }, req.body));
        case 8:
        case "end":
          return _context25.stop();
      }
    }, _callee25);
  }));
  return function updateEquipo(_x49, _x50) {
    return _ref25.apply(this, arguments);
  };
}();
exports.updateEquipo = updateEquipo;
var updateSolicitudes = /*#__PURE__*/function () {
  var _ref26 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee26(req, res) {
    var connection, result;
    return _regeneratorRuntime().wrap(function _callee26$(_context26) {
      while (1) switch (_context26.prev = _context26.next) {
        case 0:
          _context26.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context26.sent;
          _context26.next = 5;
          return connection.query("UPDATE solicitudes SET estado_sol = ?, observaciones_sol = ? WHERE id_sol = ?", [req.body.estado_sol, req.body.observaciones_sol, req.params.id_sol]);
        case 5:
          result = _context26.sent;
          connection.end();
          res.json(_objectSpread({
            id: result.affectedRows
          }, req.body));
        case 8:
        case "end":
          return _context26.stop();
      }
    }, _callee26);
  }));
  return function updateSolicitudes(_x51, _x52) {
    return _ref26.apply(this, arguments);
  };
}();
exports.updateSolicitudes = updateSolicitudes;
var updateDevoluciones = /*#__PURE__*/function () {
  var _ref27 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee27(req, res) {
    var connection, result;
    return _regeneratorRuntime().wrap(function _callee27$(_context27) {
      while (1) switch (_context27.prev = _context27.next) {
        case 0:
          _context27.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context27.sent;
          _context27.next = 5;
          return connection.query("UPDATE devoluciones SET estado_dev = ? WHERE id_dev = ?", [req.body.estado_dev, req.params.id_dev]);
        case 5:
          result = _context27.sent;
          connection.end();
          res.json(_objectSpread({
            id: result.affectedRows
          }, req.body));
        case 8:
        case "end":
          return _context27.stop();
      }
    }, _callee27);
  }));
  return function updateDevoluciones(_x53, _x54) {
    return _ref27.apply(this, arguments);
  };
}();

/* DELETES */
exports.updateDevoluciones = updateDevoluciones;
var deletePersona = /*#__PURE__*/function () {
  var _ref28 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee28(req, res) {
    var connection, result;
    return _regeneratorRuntime().wrap(function _callee28$(_context28) {
      while (1) switch (_context28.prev = _context28.next) {
        case 0:
          _context28.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context28.sent;
          _context28.next = 5;
          return connection.query("UPDATE persona SET estado = '0' WHERE cedula_per = ?", [req.params.cedula_per]);
        case 5:
          result = _context28.sent;
          connection.end();
          res.json(_objectSpread({
            id: result.affectedRows
          }, req.body));
        case 8:
        case "end":
          return _context28.stop();
      }
    }, _callee28);
  }));
  return function deletePersona(_x55, _x56) {
    return _ref28.apply(this, arguments);
  };
}();
exports.deletePersona = deletePersona;
var deleteEquipo = /*#__PURE__*/function () {
  var _ref29 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee29(req, res) {
    var connection, result;
    return _regeneratorRuntime().wrap(function _callee29$(_context29) {
      while (1) switch (_context29.prev = _context29.next) {
        case 0:
          _context29.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context29.sent;
          _context29.next = 5;
          return connection.query("UPDATE equipos SET estado = '0' WHERE id_equ = ?", [req.params.id_equ]);
        case 5:
          result = _context29.sent;
          connection.end();
          res.json(_objectSpread({
            id: result.affectedRows
          }, req.body));
        case 8:
        case "end":
          return _context29.stop();
      }
    }, _callee29);
  }));
  return function deleteEquipo(_x57, _x58) {
    return _ref29.apply(this, arguments);
  };
}();
exports.deleteEquipo = deleteEquipo;
var deleteSolicitudes = /*#__PURE__*/function () {
  var _ref30 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee30(req, res) {
    var connection, result;
    return _regeneratorRuntime().wrap(function _callee30$(_context30) {
      while (1) switch (_context30.prev = _context30.next) {
        case 0:
          _context30.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context30.sent;
          _context30.next = 5;
          return connection.query("UPDATE solicitudes SET estado = '0' WHERE id_sol = ?", [req.params.id_sol]);
        case 5:
          result = _context30.sent;
          connection.end();
          res.json(_objectSpread({
            id: result.affectedRows
          }, req.body));
        case 8:
        case "end":
          return _context30.stop();
      }
    }, _callee30);
  }));
  return function deleteSolicitudes(_x59, _x60) {
    return _ref30.apply(this, arguments);
  };
}();
exports.deleteSolicitudes = deleteSolicitudes;
var deleteCustodia = /*#__PURE__*/function () {
  var _ref31 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee31(req, res) {
    var connection, result;
    return _regeneratorRuntime().wrap(function _callee31$(_context31) {
      while (1) switch (_context31.prev = _context31.next) {
        case 0:
          _context31.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context31.sent;
          _context31.next = 5;
          return connection.query("UPDATE custodia SET estado = '0' WHERE id_cus = ?", [req.params.id_cus]);
        case 5:
          result = _context31.sent;
          connection.end();
          res.json(_objectSpread({
            id: result.affectedRows
          }, req.body));
        case 8:
        case "end":
          return _context31.stop();
      }
    }, _callee31);
  }));
  return function deleteCustodia(_x61, _x62) {
    return _ref31.apply(this, arguments);
  };
}();
exports.deleteCustodia = deleteCustodia;
var deleteDevoluciones = /*#__PURE__*/function () {
  var _ref32 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee32(req, res) {
    var connection, result;
    return _regeneratorRuntime().wrap(function _callee32$(_context32) {
      while (1) switch (_context32.prev = _context32.next) {
        case 0:
          _context32.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context32.sent;
          _context32.next = 5;
          return connection.query("UPDATE devoluciones SET estado = '0' WHERE id_dev = ?", [req.params.id_dev]);
        case 5:
          result = _context32.sent;
          connection.end();
          res.json(_objectSpread({
            id: result.affectedRows
          }, req.body));
        case 8:
        case "end":
          return _context32.stop();
      }
    }, _callee32);
  }));
  return function deleteDevoluciones(_x63, _x64) {
    return _ref32.apply(this, arguments);
  };
}();

/* ACTIVATES */
exports.deleteDevoluciones = deleteDevoluciones;
var activatePersona = /*#__PURE__*/function () {
  var _ref33 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee33(req, res) {
    var connection, result;
    return _regeneratorRuntime().wrap(function _callee33$(_context33) {
      while (1) switch (_context33.prev = _context33.next) {
        case 0:
          _context33.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context33.sent;
          _context33.next = 5;
          return connection.query("UPDATE persona SET estado = '1' WHERE cedula_per = ?", [req.params.cedula_per]);
        case 5:
          result = _context33.sent;
          connection.end();
          res.json(_objectSpread({
            id: result.affectedRows
          }, req.body));
        case 8:
        case "end":
          return _context33.stop();
      }
    }, _callee33);
  }));
  return function activatePersona(_x65, _x66) {
    return _ref33.apply(this, arguments);
  };
}();
exports.activatePersona = activatePersona;
var activateEquipo = /*#__PURE__*/function () {
  var _ref34 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee34(req, res) {
    var connection, result;
    return _regeneratorRuntime().wrap(function _callee34$(_context34) {
      while (1) switch (_context34.prev = _context34.next) {
        case 0:
          _context34.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context34.sent;
          _context34.next = 5;
          return connection.query("UPDATE equipos SET estado = '1' WHERE id_equ = ?", [req.params.id_equ]);
        case 5:
          result = _context34.sent;
          connection.end();
          res.json(_objectSpread({
            id: result.affectedRows
          }, req.body));
        case 8:
        case "end":
          return _context34.stop();
      }
    }, _callee34);
  }));
  return function activateEquipo(_x67, _x68) {
    return _ref34.apply(this, arguments);
  };
}();
exports.activateEquipo = activateEquipo;
var activateSolicitudes = /*#__PURE__*/function () {
  var _ref35 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee35(req, res) {
    var connection, result;
    return _regeneratorRuntime().wrap(function _callee35$(_context35) {
      while (1) switch (_context35.prev = _context35.next) {
        case 0:
          _context35.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context35.sent;
          _context35.next = 5;
          return connection.query("UPDATE solicitudes SET estado = '1' WHERE id_sol = ?", [req.params.id_sol]);
        case 5:
          result = _context35.sent;
          connection.end();
          res.json(_objectSpread({
            id: result.affectedRows
          }, req.body));
        case 8:
        case "end":
          return _context35.stop();
      }
    }, _callee35);
  }));
  return function activateSolicitudes(_x69, _x70) {
    return _ref35.apply(this, arguments);
  };
}();
exports.activateSolicitudes = activateSolicitudes;
var activateCustodia = /*#__PURE__*/function () {
  var _ref36 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee36(req, res) {
    var connection, result;
    return _regeneratorRuntime().wrap(function _callee36$(_context36) {
      while (1) switch (_context36.prev = _context36.next) {
        case 0:
          _context36.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context36.sent;
          _context36.next = 5;
          return connection.query("UPDATE custodia SET estado = '1' WHERE id_cus = ?", [req.params.id_cus]);
        case 5:
          result = _context36.sent;
          connection.end();
          res.json(_objectSpread({
            id: result.affectedRows
          }, req.body));
        case 8:
        case "end":
          return _context36.stop();
      }
    }, _callee36);
  }));
  return function activateCustodia(_x71, _x72) {
    return _ref36.apply(this, arguments);
  };
}();
exports.activateCustodia = activateCustodia;
var activateDevoluciones = /*#__PURE__*/function () {
  var _ref37 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee37(req, res) {
    var connection, result;
    return _regeneratorRuntime().wrap(function _callee37$(_context37) {
      while (1) switch (_context37.prev = _context37.next) {
        case 0:
          _context37.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context37.sent;
          _context37.next = 5;
          return connection.query("UPDATE devoluciones SET estado = '1' WHERE id_dev = ?", [req.params.id_dev]);
        case 5:
          result = _context37.sent;
          connection.end();
          res.json(_objectSpread({
            id: result.affectedRows
          }, req.body));
        case 8:
        case "end":
          return _context37.stop();
      }
    }, _callee37);
  }));
  return function activateDevoluciones(_x73, _x74) {
    return _ref37.apply(this, arguments);
  };
}();

/* LOGIN */
exports.activateDevoluciones = activateDevoluciones;
var login = /*#__PURE__*/function () {
  var _ref38 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee38(req, res) {
    var _req$body, cedula, contrasenia, connection, _yield$connection$que47, _yield$connection$que48, personaRows, _yield$connection$que49, _yield$connection$que50, personaEstudianteRows, _yield$connection$que51, _yield$connection$que52, personaDocenteRows;
    return _regeneratorRuntime().wrap(function _callee38$(_context38) {
      while (1) switch (_context38.prev = _context38.next) {
        case 0:
          _req$body = req.body, cedula = _req$body.cedula, contrasenia = _req$body.contrasenia;
          _context38.next = 3;
          return (0, _database.connect)();
        case 3:
          connection = _context38.sent;
          _context38.prev = 4;
          _context38.next = 7;
          return connection.query('SELECT * FROM persona WHERE cedula_per = ? AND contrasenia_per = ? AND rol_per = "Tecnico"', [cedula, contrasenia]);
        case 7:
          _yield$connection$que47 = _context38.sent;
          _yield$connection$que48 = _slicedToArray(_yield$connection$que47, 1);
          personaRows = _yield$connection$que48[0];
          if (!(personaRows.length > 0)) {
            _context38.next = 13;
            break;
          }
          // El usuario es un técnico
          res.json({
            message: 'Inicio de sesión exitoso como técnico',
            rol: 'Tecnico',
            ced: cedula
          });
          return _context38.abrupt("return");
        case 13:
          _context38.next = 15;
          return connection.query('SELECT * FROM persona WHERE cedula_per = ? AND contrasenia_per = ? AND rol_per = "estudiante"', [cedula, contrasenia]);
        case 15:
          _yield$connection$que49 = _context38.sent;
          _yield$connection$que50 = _slicedToArray(_yield$connection$que49, 1);
          personaEstudianteRows = _yield$connection$que50[0];
          if (!(personaEstudianteRows.length > 0)) {
            _context38.next = 21;
            break;
          }
          // El usuario es un estudiante
          res.json({
            message: 'Inicio de sesión exitoso como estudiante',
            rol: 'Estudiante',
            ced: cedula
          });
          return _context38.abrupt("return");
        case 21:
          _context38.next = 23;
          return connection.query('SELECT * FROM persona WHERE cedula_per = ? AND contrasenia_per = ? AND rol_per = "docente"', [cedula, contrasenia]);
        case 23:
          _yield$connection$que51 = _context38.sent;
          _yield$connection$que52 = _slicedToArray(_yield$connection$que51, 1);
          personaDocenteRows = _yield$connection$que52[0];
          if (!(personaDocenteRows.length > 0)) {
            _context38.next = 29;
            break;
          }
          // El usuario es un docente
          res.json({
            message: 'Inicio de sesión exitoso como docente',
            rol: 'Docente',
            ced: cedula
          });
          return _context38.abrupt("return");
        case 29:
          // Las credenciales no coinciden con ningún usuario
          res.status(401).json({
            error: 'Credenciales inválidas'
          });
          _context38.next = 36;
          break;
        case 32:
          _context38.prev = 32;
          _context38.t0 = _context38["catch"](4);
          console.error('Error en la función login:', _context38.t0);
          res.status(500).json({
            error: 'Error en el servidor'
          });
        case 36:
          _context38.prev = 36;
          connection.end(); // Cerrar la conexión en caso de error también
          return _context38.finish(36);
        case 39:
        case "end":
          return _context38.stop();
      }
    }, _callee38, null, [[4, 32, 36, 39]]);
  }));
  return function login(_x75, _x76) {
    return _ref38.apply(this, arguments);
  };
}();

/* BUSCAR */
exports.login = login;
var getSolicitudesByCedula = /*#__PURE__*/function () {
  var _ref39 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee39(req, res) {
    var connection, _yield$connection$que53, _yield$connection$que54, rows;
    return _regeneratorRuntime().wrap(function _callee39$(_context39) {
      while (1) switch (_context39.prev = _context39.next) {
        case 0:
          _context39.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context39.sent;
          _context39.next = 5;
          return connection.query('SELECT * FROM solicitudes WHERE cedula_per = ? AND estado = 1', [req.params.cedula_per]);
        case 5:
          _yield$connection$que53 = _context39.sent;
          _yield$connection$que54 = _slicedToArray(_yield$connection$que53, 1);
          rows = _yield$connection$que54[0];
          connection.end();
          res.json(rows);
        case 10:
        case "end":
          return _context39.stop();
      }
    }, _callee39);
  }));
  return function getSolicitudesByCedula(_x77, _x78) {
    return _ref39.apply(this, arguments);
  };
}();
exports.getSolicitudesByCedula = getSolicitudesByCedula;
var getCustodiaByCedula = /*#__PURE__*/function () {
  var _ref40 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee40(req, res) {
    var connection, _yield$connection$que55, _yield$connection$que56, rows;
    return _regeneratorRuntime().wrap(function _callee40$(_context40) {
      while (1) switch (_context40.prev = _context40.next) {
        case 0:
          _context40.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context40.sent;
          _context40.next = 5;
          return connection.query('SELECT * FROM custodia WHERE cedula_per = ? AND estado = 1', [req.params.cedula_per]);
        case 5:
          _yield$connection$que55 = _context40.sent;
          _yield$connection$que56 = _slicedToArray(_yield$connection$que55, 1);
          rows = _yield$connection$que56[0];
          connection.end();
          res.json(rows);
        case 10:
        case "end":
          return _context40.stop();
      }
    }, _callee40);
  }));
  return function getCustodiaByCedula(_x79, _x80) {
    return _ref40.apply(this, arguments);
  };
}();
exports.getCustodiaByCedula = getCustodiaByCedula;
var getDevolucionesByCedula = /*#__PURE__*/function () {
  var _ref41 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee41(req, res) {
    var connection, _yield$connection$que57, _yield$connection$que58, rows;
    return _regeneratorRuntime().wrap(function _callee41$(_context41) {
      while (1) switch (_context41.prev = _context41.next) {
        case 0:
          _context41.next = 2;
          return (0, _database.connect)();
        case 2:
          connection = _context41.sent;
          _context41.next = 5;
          return connection.query('SELECT * FROM devoluciones INNER JOIN custodia ON devoluciones.id_cus = custodia.id_cus WHERE custodia.cedula_per = ? AND devoluciones.estado = 1', [req.params.cedula_per]);
        case 5:
          _yield$connection$que57 = _context41.sent;
          _yield$connection$que58 = _slicedToArray(_yield$connection$que57, 1);
          rows = _yield$connection$que58[0];
          connection.end();
          res.json(rows);
        case 10:
        case "end":
          return _context41.stop();
      }
    }, _callee41);
  }));
  return function getDevolucionesByCedula(_x81, _x82) {
    return _ref41.apply(this, arguments);
  };
}();
exports.getDevolucionesByCedula = getDevolucionesByCedula;