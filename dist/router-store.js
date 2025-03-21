"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouterStore = void 0;
var mobx_1 = require("mobx");
var RouterStore = /** @class */ (function () {
    function RouterStore(store) {
        Object.defineProperty(this, "params", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {}
        });
        Object.defineProperty(this, "queryParams", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {}
        });
        Object.defineProperty(this, "currentRoute", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "store", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        (0, mobx_1.makeObservable)(this, {
            params: mobx_1.observable,
            queryParams: mobx_1.observable,
            currentRoute: mobx_1.observable,
            goTo: mobx_1.action,
            currentPath: mobx_1.computed,
        });
        this.store = store;
        //bind
        this.goTo = this.goTo.bind(this);
    }
    Object.defineProperty(RouterStore.prototype, "goTo", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (route, paramsObj, queryParamsObj) {
            return __awaiter(this, void 0, void 0, function () {
                var nextPath, pathChanged, routeChanged, currentParams, currentQueryParams, beforeExitResult, _a, beforeEnterResult, _b, nextParams, nextQueryParams;
                var _this = this;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            nextPath = route.replaceUrlParams(paramsObj, queryParamsObj);
                            pathChanged = nextPath !== this.currentPath;
                            if (!pathChanged) {
                                return [2 /*return*/];
                            }
                            routeChanged = !this.currentRoute || this.currentRoute !== route;
                            currentParams = (0, mobx_1.toJS)(this.params);
                            currentQueryParams = (0, mobx_1.toJS)(this.queryParams);
                            if (!(routeChanged && this.currentRoute && this.currentRoute.beforeExit)) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.currentRoute.beforeExit(this.currentRoute, currentParams, this.store, currentQueryParams, nextPath)];
                        case 1:
                            _a = _c.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            _a = true;
                            _c.label = 3;
                        case 3:
                            beforeExitResult = _a;
                            if (beforeExitResult === false) {
                                return [2 /*return*/];
                            }
                            if (!(routeChanged && route.beforeEnter)) return [3 /*break*/, 5];
                            return [4 /*yield*/, route.beforeEnter(route, (0, mobx_1.toJS)(paramsObj || {}), this.store, (0, mobx_1.toJS)(queryParamsObj || {}), nextPath)];
                        case 4:
                            _b = _c.sent();
                            return [3 /*break*/, 6];
                        case 5:
                            _b = true;
                            _c.label = 6;
                        case 6:
                            beforeEnterResult = _b;
                            if (beforeEnterResult === false) {
                                return [2 /*return*/];
                            }
                            routeChanged &&
                                this.currentRoute &&
                                this.currentRoute.onExit &&
                                this.currentRoute.onExit(this.currentRoute, currentParams, this.store, currentQueryParams, nextPath);
                            (0, mobx_1.runInAction)(function () {
                                _this.currentRoute = route;
                                _this.params = (0, mobx_1.toJS)(paramsObj);
                                _this.queryParams = (0, mobx_1.toJS)(queryParamsObj);
                            });
                            nextParams = (0, mobx_1.toJS)(this.params);
                            nextQueryParams = (0, mobx_1.toJS)(this.queryParams);
                            routeChanged &&
                                route.onEnter &&
                                route.onEnter(route, nextParams, this.store, nextQueryParams);
                            !routeChanged &&
                                this.currentRoute &&
                                this.currentRoute.onParamsChange &&
                                this.currentRoute.onParamsChange(this.currentRoute, nextParams, this.store, nextQueryParams);
                            return [2 /*return*/];
                    }
                });
            });
        }
    });
    Object.defineProperty(RouterStore.prototype, "currentPath", {
        get: function () {
            return this.currentRoute
                ? this.currentRoute.replaceUrlParams(this.params, this.queryParams)
                : '';
        },
        enumerable: false,
        configurable: true
    });
    return RouterStore;
}());
exports.RouterStore = RouterStore;
//# sourceMappingURL=router-store.js.map