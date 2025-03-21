"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startRouter = void 0;
var director_1 = require("director/build/director");
var mobx_1 = require("mobx");
var utils_1 = require("./utils");
var createDirectorRouter = function (views, store, config) {
    if (config === void 0) { config = {}; }
    var router = new director_1.Router(__assign({}, (0, utils_1.viewsForDirector)(views, store, config)));
    router
        .configure(config)
        // set fallback to /#/ only when hash routing
        .init(config.html5history === false ? "/" : undefined);
    return router;
};
var startRouter = function (routes, store, config) {
    if (config === void 0) { config = {}; }
    //create director configuration
    var defaultDirectorConfig = {
        html5history: true,
    };
    var directorConfig = Object.assign(defaultDirectorConfig, config);
    var directorRouter = createDirectorRouter(routes, store, directorConfig);
    //autorun and watch for path changes
    (0, mobx_1.autorun)(function () {
        var currentPath = store.router.currentPath;
        if (currentPath) {
            if (directorConfig.html5history) {
                if (currentPath !== window.location.pathname + window.location.search) {
                    window.history.pushState(null, "", currentPath);
                }
            }
            else {
                var hash = "#".concat(currentPath);
                if (hash !== window.location.hash) {
                    window.history.pushState(null, "", "/".concat(hash));
                }
            }
        }
    });
    return directorRouter;
};
exports.startRouter = startRouter;
//# sourceMappingURL=start-router.js.map