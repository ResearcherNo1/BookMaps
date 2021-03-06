"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.precisionRound = precisionRound;
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

var _Touch = _interopRequireDefault(require("../Touch/Touch"));

var _classNames = _interopRequireDefault(require("../../lib/classNames"));

var _getClassName = _interopRequireDefault(require("../../helpers/getClassName"));

var _withPlatform = _interopRequireDefault(require("../../hoc/withPlatform"));

var _dom = require("../../lib/dom");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function precisionRound(number, precision) {
  var factor = Math.pow(10, precision || 1);
  return Math.round(number * factor) / factor;
}

var Slider = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Slider, _Component);

  var _super = _createSuper(Slider);

  function Slider(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Slider);
    _this = _super.call(this, props);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "isControlledOutside", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "container", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onStart", function (e) {
      var absolutePosition = _this.validateAbsolute(e.startX - _this.state.containerLeft);

      var percentPosition = _this.absoluteToPecent(absolutePosition);

      _this.onChange(_this.percentToValue(percentPosition), e);

      if (_this.isControlledOutside) {
        _this.setState({
          startX: absolutePosition
        });
      } else {
        _this.setState({
          startX: absolutePosition,
          percentPosition: percentPosition
        });
      }

      var target = e.originalEvent.target;

      _this.setState({
        active: !!target.closest('.Slider__thumb')
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onMoveX", function (e) {
      var absolutePosition = _this.validateAbsolute(_this.state.startX + (e.shiftX || 0));

      var percentPosition = _this.absoluteToPecent(absolutePosition);

      _this.onChange(_this.percentToValue(percentPosition), e);

      if (!_this.isControlledOutside) {
        _this.setState({
          percentPosition: percentPosition
        });
      }

      e.originalEvent.preventDefault();
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onEnd", function () {
      _this.setState({
        active: false
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onResize", function (callback) {
      _this.setState({
        containerLeft: _this.container.offsetLeft,
        containerWidth: _this.container.offsetWidth
      }, function () {
        typeof callback === 'function' && callback();
      });
    });
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
    _this.state = {
      startX: 0,
      containerLeft: 0,
      percentPosition: 0,
      active: false,
      containerWidth: 0
    };
    _this.isControlledOutside = _this.props.hasOwnProperty('value');
    return _this;
  }

  (0, _createClass2.default)(Slider, [{
    key: "onChange",
    value: function onChange(value, e) {
      this.props.onChange && this.props.onChange(value, e);
    }
  }, {
    key: "validateAbsolute",
    value: function validateAbsolute(absolute) {
      var res = Math.max(0, Math.min(absolute, this.state.containerWidth));

      if (this.props.step > 0) {
        var stepCount = (this.props.max - this.props.min) / this.props.step;
        var absStep = this.state.containerWidth / stepCount;
        res = Math.round(res / absStep) * absStep;
      }

      return res;
    }
  }, {
    key: "validatePercent",
    value: function validatePercent(percent) {
      return Math.max(0, Math.min(percent, 100));
    }
  }, {
    key: "absoluteToPecent",
    value: function absoluteToPecent(absolute) {
      return absolute * 100 / this.state.containerWidth;
    }
  }, {
    key: "percentToValue",
    value: function percentToValue(percent) {
      var res = percent * (this.props.max - this.props.min) / 100 + this.props.min;

      if (this.props.step > 0) {
        var stepFloatPart = "".concat(this.props.step).split('.')[1] || '';
        return precisionRound(res, stepFloatPart.length);
      }

      return res;
    }
  }, {
    key: "valueToPercent",
    value: function valueToPercent(value) {
      return (value - this.props.min) * 100 / (this.props.max - this.props.min);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (_dom.canUseDOM) {
        window.addEventListener('resize', this.onResize);
        this.onResize(function () {
          _this2.setState({
            percentPosition: _this2.validatePercent(_this2.valueToPercent(_this2.value))
          });
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.isControlledOutside && this.props.value !== prevProps.value) {
        this.setState({
          percentPosition: this.validatePercent(this.valueToPercent(this.props.value))
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.onResize);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          min = _this$props.min,
          max = _this$props.max,
          step = _this$props.step,
          value = _this$props.value,
          defaultValue = _this$props.defaultValue,
          onChange = _this$props.onChange,
          getRootRef = _this$props.getRootRef,
          platform = _this$props.platform,
          top = _this$props.top,
          bottom = _this$props.bottom,
          restProps = (0, _objectWithoutProperties2.default)(_this$props, ["className", "min", "max", "step", "value", "defaultValue", "onChange", "getRootRef", "platform", "top", "bottom"]);
      return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, restProps, {
        className: (0, _classNames.default)((0, _getClassName.default)('Slider', platform), className),
        ref: this.getRef
      }), /*#__PURE__*/_react.default.createElement(_Touch.default, {
        onStart: this.onStart,
        onMoveX: this.onMoveX,
        onEnd: this.onEnd,
        className: "Slider__in"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "Slider__dragger",
        style: {
          width: "".concat(this.state.percentPosition, "%")
        }
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: (0, _classNames.default)('Slider__thumb', 'Slider__thumb--end', {
          'Slider__thumb--active': this.state.active
        })
      }))));
    }
  }, {
    key: "value",
    get: function get() {
      if (this.isControlledOutside) {
        return this.props.value;
      } else if (this.props.hasOwnProperty('defaultValue')) {
        return this.props.defaultValue;
      } else {
        return this.props.min;
      }
    }
  }]);
  return Slider;
}(_react.Component);

(0, _defineProperty2.default)(Slider, "defaultProps", {
  min: 0,
  max: 100,
  step: 0
});

var _default = (0, _withPlatform.default)(Slider);

exports.default = _default;
//# sourceMappingURL=Slider.js.map