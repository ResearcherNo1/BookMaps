import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';

var Avatar = function Avatar(_ref) {
  var src = _ref.src,
      size = _ref.size,
      mode = _ref.mode,
      style = _ref.style,
      className = _ref.className,
      children = _ref.children,
      getRootRef = _ref.getRootRef,
      restProps = _objectWithoutProperties(_ref, ["src", "size", "mode", "style", "className", "children", "getRootRef"]);

  var Component = src ? 'img' : 'div';
  var platform = usePlatform();
  var borderRadius;

  switch (mode) {
    case 'default':
      borderRadius = '50%';
      break;

    case 'image':
      borderRadius = 4;
      break;

    case 'app':
      borderRadius = Math.floor(size * 10 / 48);
      break;
  }

  return /*#__PURE__*/React.createElement("div", {
    className: classNames(getClassName('Avatar', platform), className, "Avatar--type-".concat(mode)),
    ref: getRootRef
  }, /*#__PURE__*/React.createElement("div", {
    className: "Avatar__in"
  }, /*#__PURE__*/React.createElement(Component, _extends({}, restProps, {
    className: "Avatar__img",
    src: src,
    style: _objectSpread({}, style, {
      width: size,
      height: size,
      borderRadius: borderRadius
    })
  })), children && /*#__PURE__*/React.createElement("div", {
    className: "Avatar__children",
    style: {
      width: size,
      height: size,
      borderRadius: borderRadius
    }
  }, children)));
};

Avatar.defaultProps = {
  size: 48,
  mode: 'default'
};
export default Avatar;
//# sourceMappingURL=Avatar.js.map