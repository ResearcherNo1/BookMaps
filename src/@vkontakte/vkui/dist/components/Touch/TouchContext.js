"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

/**
 * Контекст для компонентов, использующих Touch в качестве корневой обёртки,
 * и для которых важно не предотвращать вспылие тач-событий от дочерних компонентов
 */
var TouchRootContext = (0, _react.createContext)(false);
var _default = TouchRootContext;
exports.default = _default;
//# sourceMappingURL=TouchContext.js.map