"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classNames = _interopRequireDefault(require("../../lib/classNames"));

var HorizontalScroll = function HorizontalScroll(props) {
  var children = props.children,
      className = props.className,
      restProps = (0, _objectWithoutProperties2.default)(props, ["children", "className"]);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, restProps, {
    className: (0, _classNames.default)('HorizontalScroll', className)
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "HorizontalScroll__in"
  }, children));
};

var _default = HorizontalScroll;
exports.default = _default;
//# sourceMappingURL=HorizontalScroll.js.map