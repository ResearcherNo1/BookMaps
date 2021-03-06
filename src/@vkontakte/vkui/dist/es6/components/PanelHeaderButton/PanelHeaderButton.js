import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import Tappable from '../Tappable/Tappable';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';

var PanelHeaderButton = function PanelHeaderButton(_ref) {
  var className = _ref.className,
      children = _ref.children,
      primary = _ref.primary,
      restProps = _objectWithoutProperties(_ref, ["className", "children", "primary"]);

  var isPrimitive = typeof children === 'string' || typeof children === 'number';
  var Component = restProps.href ? 'a' : 'button';
  var platform = usePlatform();
  return /*#__PURE__*/React.createElement(Tappable, _extends({}, restProps, {
    Component: Component,
    activeEffectDelay: 200,
    className: classNames(getClassName('PanelHeaderButton', platform), className, {
      'PanelHeaderButton--primary': primary
    })
  }), isPrimitive ? /*#__PURE__*/React.createElement("span", {
    className: "PanelHeaderButton__primitive"
  }, children) : children);
};

PanelHeaderButton.defaultProps = {
  primary: false
};
export default PanelHeaderButton;
//# sourceMappingURL=PanelHeaderButton.js.map