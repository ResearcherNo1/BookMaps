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

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _getClassName = _interopRequireDefault(require("../../helpers/getClassName"));

var _classNames = _interopRequireDefault(require("../../lib/classNames"));

var _Touch = _interopRequireDefault(require("../Touch/Touch"));

var _constants = require("../../appearance/constants");

var _withInsets = _interopRequireDefault(require("../../hoc/withInsets"));

var _withPlatform = _interopRequireDefault(require("../../hoc/withPlatform"));

var _utils = require("../../lib/utils");

var _Separator = _interopRequireDefault(require("../Separator/Separator"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Panel = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Panel, _Component);

  var _super = _createSuper(Panel);

  function Panel() {
    var _this;

    (0, _classCallCheck2.default)(this, Panel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "container", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getRef", function (container) {
      _this.container = container;
      var getRootRef = _this.props.getRootRef;

      if (getRootRef) {
        if (typeof getRootRef === 'function') {
          getRootRef(container);
        } else {
          getRootRef.current = container;
        }
      }
    });
    return _this;
  }

  (0, _createClass2.default)(Panel, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        panel: this.props.id
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          centered = _this$props.centered,
          children = _this$props.children,
          insets = _this$props.insets,
          platform = _this$props.platform,
          separator = _this$props.separator,
          getRootRef = _this$props.getRootRef,
          restProps = (0, _objectWithoutProperties2.default)(_this$props, ["className", "centered", "children", "insets", "platform", "separator", "getRootRef"]);
      var tabbarPadding = this.context.hasTabbar ? _constants.tabbarHeight : 0;
      return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, restProps, {
        ref: this.getRef,
        className: (0, _classNames.default)((0, _getClassName.default)('Panel', platform), className, {
          'Panel--centered': centered
        })
      }), /*#__PURE__*/_react.default.createElement(_Touch.default, {
        className: "Panel__in",
        style: {
          paddingBottom: (0, _utils.isNumeric)(insets.bottom) ? insets.bottom + tabbarPadding : null
        }
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "Panel__in-before"
      }), separator && /*#__PURE__*/_react.default.createElement(_Separator.default, {
        className: "Panel__separator"
      }), centered ? /*#__PURE__*/_react.default.createElement("div", {
        className: "Panel__centered"
      }, children) : children, /*#__PURE__*/_react.default.createElement("div", {
        className: "Panel__in-after"
      })));
    }
  }]);
  return Panel;
}(_react.Component);

(0, _defineProperty2.default)(Panel, "childContextTypes", {
  panel: _propTypes.default.string
});
(0, _defineProperty2.default)(Panel, "defaultProps", {
  children: '',
  centered: false,
  separator: true
});
(0, _defineProperty2.default)(Panel, "contextTypes", {
  hasTabbar: _propTypes.default.bool
});

var _default = (0, _withPlatform.default)((0, _withInsets.default)(Panel));

exports.default = _default;
//# sourceMappingURL=Panel.js.map