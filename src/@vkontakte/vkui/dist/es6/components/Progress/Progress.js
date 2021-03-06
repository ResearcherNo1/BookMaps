import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';

var Progress = function Progress(props) {
  var value = props.value,
      className = props.className,
      getRootRef = props.getRootRef,
      restProps = _objectWithoutProperties(props, ["value", "className", "getRootRef"]);

  var platform = usePlatform();
  return /*#__PURE__*/React.createElement("div", _extends({}, restProps, {
    ref: getRootRef,
    className: classNames(getClassName('Progress', platform), className)
  }), /*#__PURE__*/React.createElement("div", {
    className: "Progress__bg"
  }), /*#__PURE__*/React.createElement("div", {
    className: "Progress__in",
    style: {
      width: "".concat(value, "%")
    }
  }));
};

Progress.defaultProps = {
  value: 0
};
export default Progress;
//# sourceMappingURL=Progress.js.map