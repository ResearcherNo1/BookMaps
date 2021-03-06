import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React from 'react';
import { canUseDOM } from '../../lib/dom';
import PropTypes from 'prop-types';
import { Appearance, ConfigProviderContext, Scheme, WebviewType } from './ConfigProviderContext';
import vkBridge from '@vkontakte/vk-bridge';

var ConfigProvider = /*#__PURE__*/function (_React$Component) {
  _inherits(ConfigProvider, _React$Component);

  var _super = _createSuper(ConfigProvider);

  function ConfigProvider(props) {
    var _this;

    _classCallCheck(this, ConfigProvider);

    _this = _super.call(this, props);

    if (canUseDOM) {
      _this.setScheme(props.scheme);
    }

    return _this;
  }

  _createClass(ConfigProvider, [{
    key: "mapOldScheme",
    value: function mapOldScheme(scheme) {
      switch (scheme) {
        case Scheme.DEPRECATED_CLIENT_LIGHT:
          return Scheme.BRIGHT_LIGHT;

        case Scheme.DEPRECATED_CLIENT_DARK:
          return Scheme.SPACE_GRAY;

        default:
          return scheme;
      }
    }
  }, {
    key: "setScheme",
    value: function setScheme(scheme) {
      document.body.setAttribute('scheme', scheme);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.scheme !== this.props.scheme) {
        this.setScheme(this.mapOldScheme(this.props.scheme));
      }
    }
  }, {
    key: "getChildContext",
    value: function getChildContext() {
      return {
        isWebView: this.props.isWebView,
        webviewType: this.props.webviewType,
        scheme: this.mapOldScheme(this.props.scheme),
        appearance: this.props.appearance,
        app: this.props.app
      };
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(ConfigProviderContext.Provider, {
        value: this.getChildContext()
      }, this.props.children);
    }
  }]);

  return ConfigProvider;
}(React.Component);

_defineProperty(ConfigProvider, "defaultProps", {
  webviewType: WebviewType.VKAPPS,
  isWebView: vkBridge.isWebView(),
  scheme: Scheme.BRIGHT_LIGHT,
  appearance: Appearance.LIGHT
});

_defineProperty(ConfigProvider, "childContextTypes", {
  isWebView: PropTypes.bool,
  scheme: PropTypes.oneOf([Scheme.SPACE_GRAY, Scheme.BRIGHT_LIGHT, Scheme.DEPRECATED_CLIENT_DARK, Scheme.DEPRECATED_CLIENT_LIGHT]),
  webviewType: PropTypes.oneOf([WebviewType.VKAPPS, WebviewType.INTERNAL]),
  appearance: PropTypes.oneOf([Appearance.DARK, Appearance.LIGHT]),
  app: PropTypes.string
});

export { ConfigProvider as default };
//# sourceMappingURL=ConfigProvider.js.map