import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React, { useContext } from 'react';
import usePlatform from '../../hooks/usePlatform';
import getClassname from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import FixedLayout from '../FixedLayout/FixedLayout';
import Separator from '../Separator/Separator';
import { ANDROID } from '../../lib/platform';
import { ConfigProviderContext, WebviewType } from '../ConfigProvider/ConfigProviderContext';

var PanelHeaderSimple = function PanelHeaderSimple(_ref) {
  var className = _ref.className,
      left = _ref.left,
      addon = _ref.addon,
      children = _ref.children,
      right = _ref.right,
      separator = _ref.separator,
      visor = _ref.visor,
      transparent = _ref.transparent,
      getRef = _ref.getRef,
      getRootRef = _ref.getRootRef,
      restProps = _objectWithoutProperties(_ref, ["className", "left", "addon", "children", "right", "separator", "visor", "transparent", "getRef", "getRootRef"]);

  var platform = usePlatform();

  var _useContext = useContext(ConfigProviderContext),
      webviewType = _useContext.webviewType;

  return /*#__PURE__*/React.createElement("div", _extends({}, restProps, {
    className: classNames(getClassname('PanelHeaderSimple', platform), {
      'PanelHeaderSimple--trnsp': transparent,
      'PanelHeaderSimple--vis': visor,
      'PanelHeaderSimple--sep': separator && visor,
      'PanelHeaderSimple--vkapps': webviewType === WebviewType.VKAPPS
    }, className),
    ref: getRootRef
  }), /*#__PURE__*/React.createElement(FixedLayout, {
    vertical: "top",
    className: "PanelHeaderSimple__fixed",
    getRootRef: getRef
  }, /*#__PURE__*/React.createElement("div", {
    className: "PanelHeaderSimple__in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "PanelHeaderSimple__left"
  }, /*#__PURE__*/React.createElement("div", {
    className: "PanelHeaderSimple__left-in"
  }, left), platform !== ANDROID && !!addon && /*#__PURE__*/React.createElement("div", {
    className: "PanelHeaderSimple__addon"
  }, addon)), /*#__PURE__*/React.createElement("div", {
    className: "PanelHeaderSimple__content"
  }, children), /*#__PURE__*/React.createElement("div", {
    className: "PanelHeaderSimple__right"
  }, webviewType !== WebviewType.VKAPPS && right))), separator && visor && /*#__PURE__*/React.createElement(Separator, {
    className: "PanelHeaderSimple__separator"
  }));
};

PanelHeaderSimple.defaultProps = {
  separator: true,
  transparent: false,
  visor: true
};
export default PanelHeaderSimple;
//# sourceMappingURL=PanelHeaderSimple.js.map