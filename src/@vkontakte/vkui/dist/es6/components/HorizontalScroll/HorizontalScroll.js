import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import classNames from '../../lib/classNames';

var HorizontalScroll = function HorizontalScroll(props) {
  var children = props.children,
      className = props.className,
      restProps = _objectWithoutProperties(props, ["children", "className"]);

  return /*#__PURE__*/React.createElement("div", _extends({}, restProps, {
    className: classNames('HorizontalScroll', className)
  }), /*#__PURE__*/React.createElement("div", {
    className: "HorizontalScroll__in"
  }, children));
};

export default HorizontalScroll;
//# sourceMappingURL=HorizontalScroll.js.map