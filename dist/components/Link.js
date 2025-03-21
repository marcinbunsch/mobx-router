"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = void 0;
// eslint-disable-next-line
var react_1 = __importDefault(require("react"));
var mobx_react_lite_1 = require("mobx-react-lite");
var LinkBase = function (_a) {
    var route = _a.route, className = _a.className, params = _a.params, queryParams = _a.queryParams, _b = _a.refresh, refresh = _b === void 0 ? false : _b, _c = _a.style, style = _c === void 0 ? {} : _c, children = _a.children, title = _a.title, router = _a.router;
    if (!router) {
        console.error('The router prop must be defined for a Link component to work!');
        return null;
    }
    return (react_1.default.createElement("a", { style: style, className: className, onClick: function (e) {
            var middleClick = e.button === 2;
            var cmdOrCtrl = e.metaKey || e.ctrlKey;
            var openinNewTab = middleClick || cmdOrCtrl;
            var shouldNavigateManually = refresh || openinNewTab || cmdOrCtrl;
            if (!shouldNavigateManually) {
                e.preventDefault();
                router.goTo(route, params, queryParams);
            }
        }, href: route.replaceUrlParams(params, queryParams) }, title || children));
};
exports.Link = (0, mobx_react_lite_1.observer)(LinkBase);
//# sourceMappingURL=Link.js.map