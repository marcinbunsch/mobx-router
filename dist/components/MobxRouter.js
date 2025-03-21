"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobxRouter = void 0;
// eslint-disable-next-line
var react_1 = __importDefault(require("react"));
var mobx_react_lite_1 = require("mobx-react-lite");
exports.MobxRouter = (0, mobx_react_lite_1.observer)(function (_a) {
    var router = _a.store.router;
    return (react_1.default.createElement(react_1.default.Fragment, null, router.currentRoute && router.currentRoute.component ? (router.currentRoute.component) : (react_1.default.createElement("div", null))));
});
//# sourceMappingURL=MobxRouter.js.map