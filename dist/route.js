"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Route = void 0;
var mobx_1 = require("mobx");
var query_string_1 = __importDefault(require("query-string"));
var regex_1 = require("./regex");
var utils_1 = require("./utils");
var Route = /** @class */ (function () {
    function Route(_a) {
        var path = _a.path, component = _a.component, onEnter = _a.onEnter, beforeExit = _a.beforeExit, onParamsChange = _a.onParamsChange, beforeEnter = _a.beforeEnter, onExit = _a.onExit, title = _a.title;
        //props
        Object.defineProperty(this, "path", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "originalPath", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "rootPath", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "component", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "title", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        //lifecycle methods
        Object.defineProperty(this, "onEnter", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "beforeEnter", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "beforeExit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "onParamsChange", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "onExit", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.path = path;
        this.component = component;
        this.onEnter = onEnter;
        this.beforeExit = beforeExit;
        this.onParamsChange = onParamsChange;
        this.beforeEnter = beforeEnter;
        this.title = title;
        this.onExit = onExit;
        this.originalPath = this.path;
        //if there are optional parameters, replace the path with a regex expression
        this.path =
            this.path.indexOf('?') === -1
                ? this.path
                : this.path.replace(regex_1.optionalRegex, '/?([^/]*)?$');
        this.rootPath = this.getRootPath();
        //bind
        this.getRootPath = this.getRootPath.bind(this);
        this.replaceUrlParams = this.replaceUrlParams.bind(this);
        this.getParamsObject = this.getParamsObject.bind(this);
    }
    /*
   Sets the root path for the current path, so it's easier to determine if the route entered/exited or just some params changed
   Example: for '/' the root path is '/', for '/profile/:username/:tab' the root path is '/profile'
   */
    Object.defineProperty(Route.prototype, "getRootPath", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function () {
            return "/".concat(this.path.split('/')[1]);
        }
    });
    /*
   replaces url params placeholders with params from an object
   Example: if url is /book/:id/page/:pageId and object is {id:100, pageId:200} it will return /book/100/page/200
   */
    Object.defineProperty(Route.prototype, "replaceUrlParams", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (params, queryParams) {
            if (queryParams === void 0) { queryParams = {}; }
            var jsParams = params && (0, mobx_1.toJS)(params);
            var jsQueryParams = (0, mobx_1.toJS)(queryParams);
            var queryParamsString = query_string_1.default
                .stringify(jsQueryParams)
                .toString();
            var hasQueryParams = queryParamsString !== '';
            var newPath = this.originalPath;
            (0, utils_1.getRegexMatches)(this.originalPath, regex_1.paramRegex, 
            // eslint-disable-next-line
            function (_a) {
                var _fullMatch = _a[0], paramKey = _a[1], paramKeyWithoutColon = _a[2];
                var value = jsParams
                    ? jsParams[paramKeyWithoutColon]
                    : undefined;
                newPath =
                    value !== undefined
                        ? newPath.replace(paramKey, value.toString())
                        : newPath.replace("/".concat(paramKey), '');
            });
            return "".concat(newPath).concat(hasQueryParams ? "?".concat(queryParamsString) : '').toString();
        }
    });
    /*
   converts an array of params [123, 100] to an object
   Example: if the current this.path is /book/:id/page/:pageId it will return {id:123, pageId:100}
   */
    Object.defineProperty(Route.prototype, "getParamsObject", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (paramValues) {
            var params = [];
            (0, utils_1.getRegexMatches)(this.originalPath, regex_1.paramRegex, 
            // eslint-disable-next-line
            function (_a) {
                var _fullMatch = _a[0], _paramKey = _a[1], paramKeyWithoutColon = _a[2];
                params.push(paramKeyWithoutColon);
            });
            var result = paramValues.reduce(function (obj, paramValue, index) {
                obj[params[index]] = paramValue;
                return obj;
            }, {});
            return result;
        }
    });
    return Route;
}());
exports.Route = Route;
//# sourceMappingURL=route.js.map