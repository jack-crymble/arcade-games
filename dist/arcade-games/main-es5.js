function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _snake_snake_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./snake/snake.component */
    "./src/app/snake/snake.component.ts");

    var routes = [{
      path: 'snake',
      component: _snake_snake_component__WEBPACK_IMPORTED_MODULE_3__["SnakeComponent"]
    }, {
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: '**',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }];

    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
      _classCallCheck(this, AppComponent);
    });

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _snake_snake_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./snake/snake.component */
    "./src/app/snake/snake.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _gameover_dialog_gameover_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./gameover-dialog/gameover-dialog.component */
    "./src/app/gameover-dialog/gameover-dialog.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");

    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _snake_snake_component__WEBPACK_IMPORTED_MODULE_4__["SnakeComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _gameover_dialog_gameover_dialog_component__WEBPACK_IMPORTED_MODULE_8__["GameoverDialogComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _snake_snake_component__WEBPACK_IMPORTED_MODULE_4__["SnakeComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _gameover_dialog_gameover_dialog_component__WEBPACK_IMPORTED_MODULE_8__["GameoverDialogComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/common/common.data.ts":
  /*!***************************************!*\
    !*** ./src/app/common/common.data.ts ***!
    \***************************************/

  /*! exports provided: SquareType, Game, Direction */

  /***/
  function srcAppCommonCommonDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SquareType", function () {
      return SquareType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Game", function () {
      return Game;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Direction", function () {
      return Direction;
    });

    var SquareType;

    (function (SquareType) {
      SquareType["EMPTY"] = "empty";
      SquareType["HEAD"] = "head";
      SquareType["BODY"] = "body";
      SquareType["TAIL"] = "tail";
      SquareType["FOOD"] = "food";
    })(SquareType || (SquareType = {}));

    ;
    var Game;

    (function (Game) {
      Game["SNAKE"] = "snake";
    })(Game || (Game = {}));

    ;
    var Direction;

    (function (Direction) {
      Direction["NORTH"] = "north";
      Direction["EAST"] = "east";
      Direction["SOUTH"] = "south";
      Direction["WEST"] = "west";
    })(Direction || (Direction = {}));

    ;
    ;
    ;
    ;
    /***/
  },

  /***/
  "./src/app/common/services/direction.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/common/services/direction.service.ts ***!
    \******************************************************/

  /*! exports provided: DirectionService */

  /***/
  function srcAppCommonServicesDirectionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DirectionService", function () {
      return DirectionService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _common_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../common.data */
    "./src/app/common/common.data.ts");

    var DirectionService = /*#__PURE__*/function () {
      function DirectionService() {
        var _this = this;

        _classCallCheck(this, DirectionService);

        this.VALID_KEY_CODES = ['ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft'];
        this.keyDown$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(document, 'keydown').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) {
          return _this.VALID_KEY_CODES.indexOf(event.code) > -1;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (event) {
          if (event.code === 'ArrowUp' && (_this._direction === _common_data__WEBPACK_IMPORTED_MODULE_3__["Direction"].EAST || _this._direction === _common_data__WEBPACK_IMPORTED_MODULE_3__["Direction"].WEST)) {
            _this._pendingDirection = _common_data__WEBPACK_IMPORTED_MODULE_3__["Direction"].NORTH;
          } else if (event.code === 'ArrowRight' && (_this._direction === _common_data__WEBPACK_IMPORTED_MODULE_3__["Direction"].NORTH || _this._direction === _common_data__WEBPACK_IMPORTED_MODULE_3__["Direction"].SOUTH)) {
            _this._pendingDirection = _common_data__WEBPACK_IMPORTED_MODULE_3__["Direction"].EAST;
          } else if (event.code === 'ArrowDown' && (_this._direction === _common_data__WEBPACK_IMPORTED_MODULE_3__["Direction"].EAST || _this._direction === _common_data__WEBPACK_IMPORTED_MODULE_3__["Direction"].WEST)) {
            _this._pendingDirection = _common_data__WEBPACK_IMPORTED_MODULE_3__["Direction"].SOUTH;
          } else if (event.code === 'ArrowLeft' && (_this._direction === _common_data__WEBPACK_IMPORTED_MODULE_3__["Direction"].NORTH || _this._direction === _common_data__WEBPACK_IMPORTED_MODULE_3__["Direction"].SOUTH)) {
            _this._pendingDirection = _common_data__WEBPACK_IMPORTED_MODULE_3__["Direction"].WEST;
          }
        }));
      }

      _createClass(DirectionService, [{
        key: "currentDirection",
        get: function get() {
          return this._direction;
        }
      }, {
        key: "init",
        value: function init() {
          this.resetDirection();
          this.keyDownSubscription = this.keyDown$.subscribe();
        }
      }, {
        key: "update",
        value: function update() {
          this._direction = this._pendingDirection;
        }
      }, {
        key: "resetDirection",
        value: function resetDirection() {
          this._direction = this._pendingDirection = _common_data__WEBPACK_IMPORTED_MODULE_3__["Direction"].EAST;
        }
      }, {
        key: "destroy",
        value: function destroy() {
          var _a;

          (_a = this.keyDownSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        }
      }]);

      return DirectionService;
    }();

    DirectionService.ɵfac = function DirectionService_Factory(t) {
      return new (t || DirectionService)();
    };

    DirectionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DirectionService,
      factory: DirectionService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DirectionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/common/services/game.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/common/services/game.service.ts ***!
    \*************************************************/

  /*! exports provided: GameService */

  /***/
  function srcAppCommonServicesGameServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameService", function () {
      return GameService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _common_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../common.data */
    "./src/app/common/common.data.ts");

    var GameService = /*#__PURE__*/function () {
      function GameService() {
        _classCallCheck(this, GameService);
      }

      _createClass(GameService, [{
        key: "generateSquareBoard",
        value: function generateSquareBoard(width) {
          var board = _toConsumableArray(Array(width)).map(function () {
            return Array(width).fill({
              type: _common_data__WEBPACK_IMPORTED_MODULE_1__["SquareType"].EMPTY
            });
          });

          board = JSON.parse(JSON.stringify(board));
          return board;
        }
      }]);

      return GameService;
    }();

    GameService.ɵfac = function GameService_Factory(t) {
      return new (t || GameService)();
    };

    GameService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GameService,
      factory: GameService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/common/services/highscore.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/common/services/highscore.service.ts ***!
    \******************************************************/

  /*! exports provided: HighscoreService */

  /***/
  function srcAppCommonServicesHighscoreServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HighscoreService", function () {
      return HighscoreService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HighscoreService = /*#__PURE__*/function () {
      function HighscoreService() {
        _classCallCheck(this, HighscoreService);
      }

      _createClass(HighscoreService, [{
        key: "save",
        value: function save(game, score) {
          var highscores = this.getHighscores(game);
          highscores.push({
            score: score
          });
          localStorage.setItem(this.buildID(game), JSON.stringify(highscores));
        }
      }, {
        key: "getHighscores",
        value: function getHighscores(game) {
          var highscores = JSON.parse(localStorage.getItem(this.buildID(game))) || [];
          return highscores.sort(function (a, b) {
            return b.score - a.score;
          }).slice(0, 5);
        }
      }, {
        key: "buildID",
        value: function buildID(game) {
          return "".concat(game, "_v1");
        }
      }]);

      return HighscoreService;
    }();

    HighscoreService.ɵfac = function HighscoreService_Factory(t) {
      return new (t || HighscoreService)();
    };

    HighscoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: HighscoreService,
      factory: HighscoreService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HighscoreService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/gameover-dialog/gameover-dialog.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/gameover-dialog/gameover-dialog.component.ts ***!
    \**************************************************************/

  /*! exports provided: GameoverDialogComponent */

  /***/
  function srcAppGameoverDialogGameoverDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameoverDialogComponent", function () {
      return GameoverDialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _common_services_highscore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../common/services/highscore.service */
    "./src/app/common/services/highscore.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function GameoverDialogComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var highscore_r1 = ctx.$implicit;
        var i_r2 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", i_r2 + 1, ":");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](highscore_r1.score);
      }
    }

    var GameoverDialogComponent = /*#__PURE__*/function () {
      function GameoverDialogComponent(dialogRef, data, highscoreService) {
        _classCallCheck(this, GameoverDialogComponent);

        this.dialogRef = dialogRef;
        this.data = data;
        this.highscoreService = highscoreService;
        this.highscores = [];
        this.highscores = highscoreService.getHighscores(data.game);
      }

      _createClass(GameoverDialogComponent, [{
        key: "save",
        value: function save() {
          this.highscoreService.save(this.data.game, this.data.score);
          this.close();
        }
      }, {
        key: "close",
        value: function close() {
          this.dialogRef.close();
        }
      }]);

      return GameoverDialogComponent;
    }();

    GameoverDialogComponent.ɵfac = function GameoverDialogComponent_Factory(t) {
      return new (t || GameoverDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_services_highscore_service__WEBPACK_IMPORTED_MODULE_2__["HighscoreService"]));
    };

    GameoverDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GameoverDialogComponent,
      selectors: [["app-gameover-dialog"]],
      decls: 11,
      vars: 2,
      consts: [[1, "sub-title"], [1, "highscores"], [1, "title"], ["class", "highscore", 4, "ngFor", "ngForOf"], [1, "buttons"], ["mat-raised-button", "", "cdkFocusInitial", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "highscore"], [1, "position"], [1, "score"]],
      template: function GameoverDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Previous Highscores");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GameoverDialogComponent_div_5_Template, 5, 2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameoverDialogComponent_Template_button_click_7_listener() {
            return ctx.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameoverDialogComponent_Template_button_click_9_listener() {
            return ctx.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Save score");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Your score was ", ctx.data.score, "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.highscores);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]],
      styles: [".sub-title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 24px;\n  padding: 2rem;\n}\n\n.highscores[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.highscores[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  text-align: center;\n  text-decoration: underline;\n  font-size: 18px;\n  padding-bottom: 1rem;\n}\n\n.highscores[_ngcontent-%COMP%]   .highscore[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  padding: 1rem;\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWNrLmNyeW1ibGUvUHJvamVjdHMvYXJjYWRlLWdhbWVzL3NyYy9hcHAvZ2FtZW92ZXItZGlhbG9nL2dhbWVvdmVyLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZ2FtZW92ZXItZGlhbG9nL2dhbWVvdmVyLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQ0NGOztBRENFO0VBQ0Usa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQ0NKOztBREVFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtBQ0FKOztBRElBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL2dhbWVvdmVyLWRpYWxvZy9nYW1lb3Zlci1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3ViLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI0cHg7XG4gIHBhZGRpbmc6IDJyZW07XG59XG5cbi5oaWdoc2NvcmVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAudGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIH1cblxuICAuaGlnaHNjb3JlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMXJlbTtcbiAgfVxufVxuXG4uYnV0dG9ucyB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDFyZW07XG59XG4iLCIuc3ViLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI0cHg7XG4gIHBhZGRpbmc6IDJyZW07XG59XG5cbi5oaWdoc2NvcmVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5oaWdoc2NvcmVzIC50aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG59XG4uaGlnaHNjb3JlcyAuaGlnaHNjb3JlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbn1cblxuLmJ1dHRvbnMge1xuICBwYWRkaW5nOiAxcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameoverDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-gameover-dialog',
          templateUrl: 'gameover-dialog.component.html',
          styleUrls: ['./gameover-dialog.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }, {
          type: _common_services_highscore_service__WEBPACK_IMPORTED_MODULE_2__["HighscoreService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(router) {
        _classCallCheck(this, HomeComponent);

        this.router = router;
      }

      _createClass(HomeComponent, [{
        key: "openGame",
        value: function openGame(game) {
          this.router.navigate([game]);
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 6,
      vars: 0,
      consts: [[1, "title"], [1, "games"], ["mat-raised-button", "", "color", "primary", 3, "click"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Choose a game");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_4_listener() {
            return ctx.openGame("snake");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Snake \uD83D\uDC0D");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]],
      styles: [".title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 48px;\n  padding: 2rem;\n}\n\n.games[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWNrLmNyeW1ibGUvUHJvamVjdHMvYXJjYWRlLWdhbWVzL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgcGFkZGluZzogMnJlbTtcbn1cblxuLmdhbWVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbn1cbiIsIi50aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiA0OHB4O1xuICBwYWRkaW5nOiAycmVtO1xufVxuXG4uZ2FtZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/snake/snake.component.ts":
  /*!******************************************!*\
    !*** ./src/app/snake/snake.component.ts ***!
    \******************************************/

  /*! exports provided: SnakeComponent */

  /***/
  function srcAppSnakeSnakeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SnakeComponent", function () {
      return SnakeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _common_common_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../common/common.data */
    "./src/app/common/common.data.ts");
    /* harmony import */


    var _gameover_dialog_gameover_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../gameover-dialog/gameover-dialog.component */
    "./src/app/gameover-dialog/gameover-dialog.component.ts");
    /* harmony import */


    var _common_services_game_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../common/services/game.service */
    "./src/app/common/services/game.service.ts");
    /* harmony import */


    var _common_services_direction_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../common/services/direction.service */
    "./src/app/common/services/direction.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function SnakeComponent_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
      }
    }

    var _c0 = function _c0(a0, a1, a2, a3) {
      return {
        "head": a0,
        "food": a1,
        "body": a2,
        "empty": a3
      };
    };

    function SnakeComponent_div_11_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var square_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction4"](1, _c0, square_r5.type === "head", square_r5.type === "food", square_r5.type === "body", square_r5.type === "empty"));
      }
    }

    function SnakeComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SnakeComponent_div_11_ng_container_1_Template, 2, 6, "ng-container", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var row_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", row_r2);
      }
    }

    var SnakeComponent = /*#__PURE__*/function () {
      function SnakeComponent(gameService, directionService, dialog) {
        var _this2 = this;

        _classCallCheck(this, SnakeComponent);

        this.gameService = gameService;
        this.directionService = directionService;
        this.dialog = dialog;
        this.boardSize = 11;
        this.bodyPositions = [];
        this.snakeLength = 1;
        this.spaceToStart$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'keydown').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) {
          return event.code === 'Space';
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function () {
          return !_this2.isPlaying;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
          return _this2.startGame();
        }));
      }

      _createClass(SnakeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.board = this.gameService.generateSquareBoard(this.boardSize);
          this.directionService.init();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.directionService.destroy();
        }
      }, {
        key: "startGame",
        value: function startGame() {
          this.board = this.gameService.generateSquareBoard(this.boardSize);
          this.headPosition = {
            x: Math.floor(this.boardSize / 2),
            y: Math.floor(this.boardSize / 2)
          };
          this.board[this.headPosition.x][this.headPosition.y].type = _common_common_data__WEBPACK_IMPORTED_MODULE_4__["SquareType"].HEAD;
          this.snakeLength = 1;
          this.isPlaying = true;
          this.addFoodToBoard();
          this.gameLoop();
        }
      }, {
        key: "endGame",
        value: function endGame() {
          this.isPlaying = false;
          this.isFoodOnBoard = false;
          this.bodyPositions = [];
          this.directionService.resetDirection();
          this.gameOverDialog();
        }
      }, {
        key: "gameOverDialog",
        value: function gameOverDialog() {
          this.dialog.open(_gameover_dialog_gameover_dialog_component__WEBPACK_IMPORTED_MODULE_5__["GameoverDialogComponent"], {
            data: {
              score: this.snakeLength - 1,
              game: _common_common_data__WEBPACK_IMPORTED_MODULE_4__["Game"].SNAKE
            }
          });
        }
      }, {
        key: "gameLoop",
        value: function gameLoop() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var previousHeadPosition;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!this.isPlaying) {
                      _context.next = 15;
                      break;
                    }

                    this.directionService.update();
                    previousHeadPosition = JSON.parse(JSON.stringify(this.headPosition));

                    if (this.directionService.currentDirection === _common_common_data__WEBPACK_IMPORTED_MODULE_4__["Direction"].NORTH) {
                      this.headPosition.x -= 1;
                    } else if (this.directionService.currentDirection === _common_common_data__WEBPACK_IMPORTED_MODULE_4__["Direction"].EAST) {
                      this.headPosition.y += 1;
                    } else if (this.directionService.currentDirection === _common_common_data__WEBPACK_IMPORTED_MODULE_4__["Direction"].SOUTH) {
                      this.headPosition.x += 1;
                    } else if (this.directionService.currentDirection === _common_common_data__WEBPACK_IMPORTED_MODULE_4__["Direction"].WEST) {
                      this.headPosition.y -= 1;
                    }

                    if (!(this.hasSnakeHitBoundary() || this.hasSnakeEatenSelf())) {
                      _context.next = 7;
                      break;
                    }

                    this.endGame();
                    return _context.abrupt("continue", 0);

                  case 7:
                    if (this.isFoodOnBoard) {
                      if (this.headPosition.x === this.foodPosition.x && this.headPosition.y === this.foodPosition.y) {
                        this.eat();
                      }
                    }

                    this.updateSquare(previousHeadPosition, _common_common_data__WEBPACK_IMPORTED_MODULE_4__["SquareType"].EMPTY);
                    this.updateSnakeBody(previousHeadPosition);
                    this.updateSquare(this.headPosition, _common_common_data__WEBPACK_IMPORTED_MODULE_4__["SquareType"].HEAD);
                    _context.next = 13;
                    return this.sleep(300);

                  case 13:
                    _context.next = 0;
                    break;

                  case 15:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "addFoodToBoard",
        value: function addFoodToBoard() {
          if (this.isFoodOnBoard) {
            return;
          }

          while (!this.isFoodOnBoard) {
            this.foodPosition = {
              x: Math.floor(Math.random() * this.boardSize),
              y: Math.floor(Math.random() * this.boardSize)
            };

            if (this.board[this.foodPosition.x][this.foodPosition.y].type === _common_common_data__WEBPACK_IMPORTED_MODULE_4__["SquareType"].EMPTY) {
              this.isFoodOnBoard = true;
            }
          }

          this.updateSquare(this.foodPosition, _common_common_data__WEBPACK_IMPORTED_MODULE_4__["SquareType"].FOOD);
        }
      }, {
        key: "hasSnakeHitBoundary",
        value: function hasSnakeHitBoundary() {
          return this.headPosition.x < 0 || this.headPosition.y < 0 || this.headPosition.x > this.boardSize - 1 || this.headPosition.y > this.boardSize - 1;
        }
      }, {
        key: "hasSnakeEatenSelf",
        value: function hasSnakeEatenSelf() {
          var square = this.board[this.headPosition.x][this.headPosition.y];
          return square.type === _common_common_data__WEBPACK_IMPORTED_MODULE_4__["SquareType"].BODY || square.type === _common_common_data__WEBPACK_IMPORTED_MODULE_4__["SquareType"].TAIL;
        }
      }, {
        key: "eat",
        value: function eat() {
          this.snakeLength += 1;
          this.isFoodOnBoard = false;
          this.updateSquare(this.foodPosition, _common_common_data__WEBPACK_IMPORTED_MODULE_4__["SquareType"].EMPTY);
          this.bodyPositions.push({
            x: this.foodPosition.x,
            y: this.foodPosition.y
          });
          this.foodPosition.x = -1;
          this.foodPosition.y = -1;
          this.addFoodToBoard();
        }
      }, {
        key: "updateSnakeBody",
        value: function updateSnakeBody(previousHeadPosition) {
          var _this3 = this;

          if (this.bodyPositions.length > 0) {
            this.removeTail();
            this.bodyPositions = [{
              x: previousHeadPosition.x,
              y: previousHeadPosition.y
            }].concat(_toConsumableArray(this.bodyPositions));
            this.bodyPositions.forEach(function (bodyPart) {
              _this3.board[bodyPart.x][bodyPart.y].type = _common_common_data__WEBPACK_IMPORTED_MODULE_4__["SquareType"].BODY;
            });
          }
        }
      }, {
        key: "removeTail",
        value: function removeTail() {
          var tail = this.bodyPositions[this.bodyPositions.length - 1];
          this.board[tail.x][tail.y].type = _common_common_data__WEBPACK_IMPORTED_MODULE_4__["SquareType"].EMPTY;
          this.bodyPositions.splice(this.snakeLength - 2, 1);
        }
      }, {
        key: "updateSquare",
        value: function updateSquare(position, newType) {
          this.board[position.x][position.y].type = newType;
        }
      }, {
        key: "sleep",
        value: function sleep() {
          var ms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;
          return new Promise(function (resolve) {
            return setTimeout(resolve, ms);
          });
        }
      }]);

      return SnakeComponent;
    }();

    SnakeComponent.ɵfac = function SnakeComponent_Factory(t) {
      return new (t || SnakeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_common_services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_common_services_direction_service__WEBPACK_IMPORTED_MODULE_7__["DirectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]));
    };

    SnakeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SnakeComponent,
      selectors: [["app-snake"]],
      decls: 15,
      vars: 8,
      consts: [[4, "ngIf"], [1, "title"], [1, "start"], [1, "score"], [1, "board"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "buttons"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], [1, "row"], [4, "ngFor", "ngForOf"], [1, "square", 3, "ngClass"]],
      template: function SnakeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SnakeComponent_ng_container_0_Template, 1, 0, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Snake!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Press space to begin...\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, SnakeComponent_div_11_Template, 2, 1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SnakeComponent_Template_button_click_13_listener() {
            return ctx.startGame();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Play!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 6, ctx.spaceToStart$));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("hidden", ctx.isPlaying);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Score: ", ctx.snakeLength - 1, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.board);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isPlaying);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]],
      styles: [".title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 48px;\n  text-decoration: underline;\n  padding: 2rem;\n}\n\n.score[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 24px;\n  padding: 1rem;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  display: flex;\n  justify-content: center;\n}\n\n.board[_ngcontent-%COMP%] {\n  margin: auto;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  border: 2px solid black;\n}\n\n.board[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.board[_ngcontent-%COMP%]   .square[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  padding: 1rem;\n  border: 0.5px solid black;\n}\n\n.start[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 18px;\n}\n\n.start.hidden[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.head[_ngcontent-%COMP%], .body[_ngcontent-%COMP%] {\n  background-color: green;\n}\n\n.food[_ngcontent-%COMP%] {\n  background-color: pink;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYWNrLmNyeW1ibGUvUHJvamVjdHMvYXJjYWRlLWdhbWVzL3NyYy9hcHAvc25ha2Uvc25ha2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NuYWtlL3NuYWtlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsdUJBQUE7QUNDRjs7QURDRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQ0NKOztBREVFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQ0FKOztBRElBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FDREY7O0FER0U7RUFDRSxVQUFBO0FDREo7O0FES0E7RUFDRSx1QkFBQTtBQ0ZGOztBREtBO0VBQ0Usc0JBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL3NuYWtlL3NuYWtlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDQ4cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBwYWRkaW5nOiAycmVtO1xufVxuXG4uc2NvcmUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuLmJ1dHRvbnMge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmJvYXJkIHtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuXG4gIC5yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG5cbiAgLnNxdWFyZSB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCBibGFjaztcbiAgfVxufVxuXG4uc3RhcnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcblxuICAmLmhpZGRlbiB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuXG4uaGVhZCwgLmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cblxuLmZvb2Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xufVxuXG4iLCIudGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIHBhZGRpbmc6IDJyZW07XG59XG5cbi5zY29yZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBwYWRkaW5nOiAxcmVtO1xufVxuXG4uYnV0dG9ucyB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYm9hcmQge1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG59XG4uYm9hcmQgLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5ib2FyZCAuc3F1YXJlIHtcbiAgZmxleC1ncm93OiAxO1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXI6IDAuNXB4IHNvbGlkIGJsYWNrO1xufVxuXG4uc3RhcnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5zdGFydC5oaWRkZW4ge1xuICBvcGFjaXR5OiAwO1xufVxuXG4uaGVhZCwgLmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cblxuLmZvb2Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SnakeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-snake',
          templateUrl: './snake.component.html',
          styleUrls: ['./snake.component.scss']
        }]
      }], function () {
        return [{
          type: _common_services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"]
        }, {
          type: _common_services_direction_service__WEBPACK_IMPORTED_MODULE_7__["DirectionService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/jack.crymble/Projects/arcade-games/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map