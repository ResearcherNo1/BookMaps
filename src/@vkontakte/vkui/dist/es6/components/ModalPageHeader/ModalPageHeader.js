import React from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';

var ModalPageHeader = function ModalPageHeader(props) {
  var platform = usePlatform();
  var className = props.className,
      left = props.left,
      right = props.right,
      children = props.children,
      noShadow = props.noShadow,
      getRef = props.getRef;
  var isPrimitive = typeof children === 'string' || typeof children === 'number';
  return /*#__PURE__*/React.createElement("div", {
    className: classNames(getClassName('ModalPageHeader', platform), className),
    ref: getRef
  }, /*#__PURE__*/React.createElement("div", {
    className: "ModalPageHeader__in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ModalPageHeader__left"
  }, left), /*#__PURE__*/React.createElement("div", {
    className: "ModalPageHeader__content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ModalPageHeader__content-in"
  }, isPrimitive ? /*#__PURE__*/React.createElement("span", null, children) : children)), /*#__PURE__*/React.createElement("div", {
    className: "ModalPageHeader__right"
  }, right)), !noShadow && /*#__PURE__*/React.createElement("div", {
    className: "ModalPageHeader__shadow"
  }));
};

export default ModalPageHeader;
//# sourceMappingURL=ModalPageHeader.js.map