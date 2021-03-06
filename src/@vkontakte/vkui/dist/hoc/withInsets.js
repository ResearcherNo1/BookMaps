"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = withInsets;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _useInsets = _interopRequireDefault(require("../hooks/useInsets"));

function withInsets(Component) {
  function WithInsets(props) {
    var insets = (0, _useInsets.default)(); // @ts-ignore

    return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({}, props, {
      insets: insets
    }));
  }

  return WithInsets;
}
//# sourceMappingURL=withInsets.js.map