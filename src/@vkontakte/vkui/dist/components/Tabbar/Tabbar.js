"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _getClassName = _interopRequireDefault(require("../../helpers/getClassName"));

var _classNames = _interopRequireDefault(require("../../lib/classNames"));

var _utils = require("../../lib/utils");

var _usePlatform = _interopRequireDefault(require("../../hooks/usePlatform"));

var _useInsets = _interopRequireDefault(require("../../hooks/useInsets"));

var Tabbar = function Tabbar(props) {
  var className = props.className,
      children = props.children,
      shadow = props.shadow,
      itemsLayout = props.itemsLayout;
  var platform = (0, _usePlatform.default)();
  var insets = (0, _useInsets.default)();

  var getItemsLayout = function getItemsLayout() {
    switch (itemsLayout) {
      case 'horizontal':
      case 'vertical':
        return itemsLayout;

      default:
        return _react.default.Children.count(children) > 2 ? 'vertical' : 'horizontal';
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classNames.default)((0, _getClassName.default)('Tabbar', platform), className, "Tabbar--l-".concat(getItemsLayout()), {
      'Tabbar--shadow': shadow
    }),
    style: {
      paddingBottom: (0, _utils.isNumeric)(insets.bottom) ? insets.bottom : null
    }
  }, children);
};

Tabbar.defaultProps = {
  shadow: true
};
var _default = Tabbar;
exports.default = _default;
//# sourceMappingURL=Tabbar.js.map