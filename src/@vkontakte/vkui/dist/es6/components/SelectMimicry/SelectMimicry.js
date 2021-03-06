import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import classNames from '../../lib/classNames';
import Icon24Dropdown from '@vkontakte/icons/dist/24/dropdown';
import FormField from '../FormField/FormField';

var SelectMimicry = function SelectMimicry(_ref) {
  var className = _ref.className,
      tabIndex = _ref.tabIndex,
      placeholder = _ref.placeholder,
      children = _ref.children,
      align = _ref.align,
      status = _ref.status,
      getRootRef = _ref.getRootRef,
      multiline = _ref.multiline,
      disabled = _ref.disabled,
      restProps = _objectWithoutProperties(_ref, ["className", "tabIndex", "placeholder", "children", "align", "status", "getRootRef", "multiline", "disabled"]);

  return /*#__PURE__*/React.createElement(FormField, _extends({}, restProps, {
    tabIndex: disabled ? null : tabIndex,
    className: classNames('Select', 'Select--mimicry', _defineProperty({
      'Select--not-selected': !children,
      'Select--multiline': multiline,
      'Select--disabled': disabled
    }, "Select--align-".concat(align), !!align), className),
    getRootRef: getRootRef,
    status: status
  }), /*#__PURE__*/React.createElement("div", {
    className: "Select__container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "Select__title"
  }, children || placeholder), /*#__PURE__*/React.createElement(Icon24Dropdown, null)));
};

SelectMimicry.defaultProps = {
  tabIndex: 0
};
export default SelectMimicry;
//# sourceMappingURL=SelectMimicry.js.map