"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _withPlatform = _interopRequireDefault(require("../../hoc/withPlatform"));

var _FixedLayout = _interopRequireDefault(require("../FixedLayout/FixedLayout"));

var _Touch = _interopRequireDefault(require("../Touch/Touch"));

var _classNames = _interopRequireDefault(require("../../lib/classNames"));

var _getClassName = _interopRequireDefault(require("../../helpers/getClassName"));

var _dom = require("../../lib/dom");

var _transitionEvents = _interopRequireDefault(require("../../lib/transitionEvents"));

var _platform = require("../../lib/platform");

var _touch = require("../../lib/touch");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Snackbar = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2.default)(Snackbar, _PureComponent);

  var _super = _createSuper(Snackbar);

  function Snackbar(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Snackbar);
    _this = _super.call(this, props);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "innerEl", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "bodyElRef", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "closeTimeout", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "shiftXPercent", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "shiftXCurrent", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "touchStartTime", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "animationFrame", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "setCloseTimeout", function () {
      if (_dom.canUseDOM) {
        _this.closeTimeout = window.setTimeout(function () {
          _this.close();
        }, _this.props.duration);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "clearCloseTimeout", function () {
      clearTimeout(_this.closeTimeout);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onActionClick", function (e) {
      _this.close();

      if (_this.props.action && typeof _this.props.onActionClick === 'function') {
        _this.props.onActionClick(e);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getInnerRef", function (el) {
      return _this.innerEl = el;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onTouchStart", function () {
      _this.clearCloseTimeout();
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onTouchMoveX", function (event) {
      var shiftX = event.shiftX,
          startT = event.startT,
          originalEvent = event.originalEvent;
      originalEvent.preventDefault();

      if (!_this.state.touched) {
        _this.setState({
          touched: true
        });
      }

      _this.shiftXPercent = shiftX / _this.window.innerWidth * 100;
      _this.shiftXCurrent = (0, _touch.rubber)(_this.shiftXPercent, 72, 1.2, _this.props.platform === _platform.ANDROID);
      _this.touchStartTime = startT;

      _this.setBodyTransform(_this.shiftXCurrent);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onTouchEnd", function () {
      var newState = {
        touched: false
      };
      var callback;

      if (_this.state.touched) {
        var shiftXReal = _this.shiftXCurrent;
        var expectTranslateY = shiftXReal / (Date.now() - _this.touchStartTime.getTime()) * 240 * 0.6 * (_this.shiftXPercent < 0 ? -1 : 1);
        shiftXReal = shiftXReal + expectTranslateY;

        if (shiftXReal >= 50) {
          _this.clearCloseTimeout();

          _this.waitTransitionFinish(_this.bodyElRef.current, function () {
            _this.props.onClose();
          });

          _this.setBodyTransform(120);
        } else {
          callback = function callback() {
            _this.setCloseTimeout();

            _this.setBodyTransform(0);
          };
        }
      } else {
        _this.setCloseTimeout();
      }

      _this.setState(newState, callback);
    });
    _this.state = {
      closing: false,
      touched: false
    };
    _this.bodyElRef = _react.default.createRef();
    _this.shiftXPercent = 0;
    _this.shiftXCurrent = 0;
    return _this;
  }

  (0, _createClass2.default)(Snackbar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setCloseTimeout();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearCloseTimeout();
    }
  }, {
    key: "close",
    value: function close() {
      var _this2 = this;

      this.setState({
        closing: true
      });
      this.waitTransitionFinish(this.innerEl, function () {
        _this2.props.onClose();
      });
    }
  }, {
    key: "waitTransitionFinish",
    value: function waitTransitionFinish(element, eventHandler) {
      if (element) {
        var eventName = _transitionEvents.default.transitionEndEventName;
        element.removeEventListener(eventName, eventHandler);
        element.addEventListener(eventName, eventHandler);
      }
    }
  }, {
    key: "setBodyTransform",
    value: function setBodyTransform(percent) {
      var _this3 = this;

      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = requestAnimationFrame(function () {
        _this3.bodyElRef.current.style.transform = "translate3d(".concat(percent, "%, 0, 0)");
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          platform = _this$props.platform,
          layout = _this$props.layout,
          action = _this$props.action,
          before = _this$props.before,
          after = _this$props.after;
      var resolvedLayout = after ? 'vertical' : layout;
      return /*#__PURE__*/_react.default.createElement(_FixedLayout.default, {
        vertical: "bottom",
        className: (0, _classNames.default)((0, _getClassName.default)('Snackbar', platform), className, "Snackbar--l-".concat(resolvedLayout), {
          'Snackbar--closing': this.state.closing,
          'Snackbar--touched': this.state.touched
        })
      }, /*#__PURE__*/_react.default.createElement(_Touch.default, {
        className: "Snackbar__in",
        getRootRef: this.getInnerRef,
        onStart: this.onTouchStart,
        onMoveX: this.onTouchMoveX,
        onEnd: this.onTouchEnd
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "Snackbar__body",
        ref: this.bodyElRef
      }, before && /*#__PURE__*/_react.default.createElement("div", {
        className: "Snackbar__before"
      }, before), /*#__PURE__*/_react.default.createElement("div", {
        className: "Snackbar__content"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "Snackbar__content-text"
      }, children), action && /*#__PURE__*/_react.default.createElement("button", {
        className: "Snackbar__action",
        onClick: this.onActionClick
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "Snackbar__action-self"
      }, action))), after && /*#__PURE__*/_react.default.createElement("div", {
        className: "Snackbar__after"
      }, after))));
    }
  }, {
    key: "window",
    get: function get() {
      return this.context.window || window;
    }
  }]);
  return Snackbar;
}(_react.PureComponent);

(0, _defineProperty2.default)(Snackbar, "defaultProps", {
  duration: 4000
});
(0, _defineProperty2.default)(Snackbar, "contextTypes", {
  window: _propTypes.default.any,
  document: _propTypes.default.any
});

var _default = (0, _withPlatform.default)(Snackbar);

exports.default = _default;
//# sourceMappingURL=Snackbar.js.map