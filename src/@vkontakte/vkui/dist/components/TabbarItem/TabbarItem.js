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

var TabbarItem = function TabbarItem(props) {
  var className = props.className,
      children = props.children,
      selected = props.selected,
      label = props.label,
      text = props.text,
      restProps = (0, _objectWithoutProperties2.default)(props, ["className", "children", "selected", "label", "text"]);
  var platform = (0, _usePlatform.default)();
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, restProps, {
    className: (0, _classNames.default)((0, _getClassName.default)('TabbarItem', platform), className, {
      'TabbarItem--selected': selected
    })
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "TabbarItem__in"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "TabbarItem__icon"
  }, children, label && /*#__PURE__*/_react.default.createElement("span", {
    className: "TabbarItem__label"
  }, label)), text && /*#__PURE__*/_react.default.createElement("div", {
    className: "TabbarItem__text"
  }, text)));
};

var _default = TabbarItem;
exports.default = _default;
//# sourceMappingURL=TabbarItem.js.map