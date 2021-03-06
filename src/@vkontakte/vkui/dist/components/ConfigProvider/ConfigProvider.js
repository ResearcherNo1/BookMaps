"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _dom = require("../../lib/dom");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ConfigProviderContext = require("./ConfigProviderContext");

var _vkBridge = _interopRequireDefault(require("@vkontakte/vk-bridge"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ConfigProvider = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(ConfigProvider, _React$Component);

  var _super = _createSuper(ConfigProvider);

  function ConfigProvider(props) {
    var _this;

    (0, _classCallCheck2.default)(this, ConfigProvider);
    _this = _super.call(this, props);

    if (_dom.canUseDOM) {
      _this.setScheme(props.scheme);
    }

    return _this;
  }

  (0, _createClass2.default)(ConfigProvider, [{
    key: "mapOldScheme",
    value: function mapOldScheme(scheme) {
      switch (scheme) {
        case _ConfigProviderContext.Scheme.DEPRECATED_CLIENT_LIGHT:
          return _ConfigProviderContext.Scheme.BRIGHT_LIGHT;

        case _ConfigProviderContext.Scheme.DEPRECATED_CLIENT_DARK:
          return _ConfigProviderContext.Scheme.SPACE_GRAY;

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
      return /*#__PURE__*/_react.default.createElement(_ConfigProviderContext.ConfigProviderContext.Provider, {
        value: this.getChildContext()
      }, this.props.children);
    }
  }]);
  return ConfigProvider;
}(_react.default.Component);

exports.default = ConfigProvider;
(0, _defineProperty2.default)(ConfigProvider, "defaultProps", {
  webviewType: _ConfigProviderContext.WebviewType.VKAPPS,
  isWebView: _vkBridge.default.isWebView(),
  scheme: _ConfigProviderContext.Scheme.BRIGHT_LIGHT,
  appearance: _ConfigProviderContext.Appearance.LIGHT
});
(0, _defineProperty2.default)(ConfigProvider, "childContextTypes", {
  isWebView: _propTypes.default.bool,
  scheme: _propTypes.default.oneOf([_ConfigProviderContext.Scheme.SPACE_GRAY, _ConfigProviderContext.Scheme.BRIGHT_LIGHT, _ConfigProviderContext.Scheme.DEPRECATED_CLIENT_DARK, _ConfigProviderContext.Scheme.DEPRECATED_CLIENT_LIGHT]),
  webviewType: _propTypes.default.oneOf([_ConfigProviderContext.WebviewType.VKAPPS, _ConfigProviderContext.WebviewType.INTERNAL]),
  appearance: _propTypes.default.oneOf([_ConfigProviderContext.Appearance.DARK, _ConfigProviderContext.Appearance.LIGHT]),
  app: _propTypes.default.string
});
//# sourceMappingURL=ConfigProvider.js.map