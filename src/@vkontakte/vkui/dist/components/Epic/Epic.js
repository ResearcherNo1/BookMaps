"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _getClassName = _interopRequireDefault(require("../../helpers/getClassName"));

var _classNames = _interopRequireDefault(require("../../lib/classNames"));

var _withPlatform = _interopRequireDefault(require("../../hoc/withPlatform"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Epic = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Epic, _Component);

  var _super = _createSuper(Epic);

  function Epic() {
    (0, _classCallCheck2.default)(this, Epic);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Epic, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        hasTabbar: this.props.hasOwnProperty('tabbar')
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          activeStory = _this$props.activeStory,
          tabbar = _this$props.tabbar,
          children = _this$props.children,
          platform = _this$props.platform,
          restProps = (0, _objectWithoutProperties2.default)(_this$props, ["className", "activeStory", "tabbar", "children", "platform"]);
      return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, restProps, {
        className: (0, _classNames.default)((0, _getClassName.default)('Epic', platform), className)
      }), _react.default.Children.toArray(children).find(function (item) {
        return item.props.id === activeStory;
      }), tabbar);
    }
  }]);
  return Epic;
}(_react.Component);

(0, _defineProperty2.default)(Epic, "childContextTypes", {
  hasTabbar: _propTypes.default.bool
});

var _default = (0, _withPlatform.default)(Epic);

exports.default = _default;
//# sourceMappingURL=Epic.js.map