"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _getClassName = _interopRequireDefault(require("../../helpers/getClassName"));

var _classNames = _interopRequireDefault(require("../../lib/classNames"));

var _usePlatform = _interopRequireDefault(require("../../hooks/usePlatform"));

var Progress = function Progress(props) {
  var value = props.value,
      className = props.className,
      getRootRef = props.getRootRef,
      restProps = (0, _objectWithoutProperties2.default)(props, ["value", "className", "getRootRef"]);
  var platform = (0, _usePlatform.default)();
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, restProps, {
    ref: getRootRef,
    className: (0, _classNames.default)((0, _getClassName.default)('Progress', platform), className)
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "Progress__bg"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "Progress__in",
    style: {
      width: "".concat(value, "%")
    }
  }));
};

Progress.defaultProps = {
  value: 0
};
var _default = Progress;
exports.default = _default;
//# sourceMappingURL=Progress.js.map