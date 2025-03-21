"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRegexMatches = exports.viewsForDirector = exports.getObjectKeys = exports.isObject = void 0;
var query_string_1 = __importDefault(require("query-string"));
var isObject = function (obj) {
    return obj && typeof obj === "object" && !Array.isArray(obj);
};
exports.isObject = isObject;
var getObjectKeys = function (obj) {
    return (0, exports.isObject)(obj) ? Object.keys(obj) : [];
};
exports.getObjectKeys = getObjectKeys;
var viewsForDirector = function (views, store, config) {
    return (0, exports.getObjectKeys)(views).reduce(function (obj, viewKey) {
        var view = views[viewKey];
        obj[view.path] = function () {
            var paramsArr = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                paramsArr[_i] = arguments[_i];
            }
            var paramsObject = paramsArr
                ? view.getParamsObject(paramsArr)
                : undefined;
            var queryParamsObject;
            if (config.html5history === false) {
                // hash routing (query parameter not stored in location.search)
                var m = /\?.*$/.exec(window.location.hash);
                if (m) {
                    queryParamsObject = query_string_1.default.parse(m[0]);
                }
            }
            else {
                queryParamsObject = query_string_1.default.parse(window.location.search);
            }
            store.router.goTo(view, paramsObject || {}, queryParamsObject);
        };
        return obj;
    }, {});
};
exports.viewsForDirector = viewsForDirector;
var getRegexMatches = function (string, regexExpression, callback) {
    var match;
    while ((match = regexExpression.exec(string)) !== null) {
        callback(match);
    }
};
exports.getRegexMatches = getRegexMatches;
//# sourceMappingURL=utils.js.map