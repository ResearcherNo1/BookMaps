"use strict";

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

var _react = _interopRequireDefault(require("react"));

var _classNames2 = _interopRequireDefault(require("../../lib/classNames"));

var _dropdown = _interopRequireDefault(require("@vkontakte/icons/dist/24/dropdown"));

var _FormField = _interopRequireDefault(require("../FormField/FormField"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Select = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(Select, _React$Component);

  var _super = _createSuper(Select);

  function Select(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Select);
    _this = _super.call(this, props);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "isControlledOutside", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "selectEl", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onChange", function (e) {
      _this.setTitle();

      if (!_this.isControlledOutside) {
        _this.setState({
          value: e.currentTarget.value
        });
      }

      if (_this.props.onChange) {
        _this.props.onChange(e);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "setTitle", function () {
      var selectedOption = _this.selectEl.options[_this.selectEl.selectedIndex];
      selectedOption && _this.setState({
        title: selectedOption.text,
        notSelected: selectedOption.value === '' && _this.props.hasOwnProperty('placeholder')
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getRef", function (element) {
      _this.selectEl = element;
      var getRef = _this.props.getRef;

      if (getRef) {
        if (typeof getRef === 'function') {
          getRef(element);
        } else {
          getRef.current = element;
        }
      }
    });
    var state = {
      title: '',
      notSelected: false
    };

    if (typeof props.value !== 'undefined') {
      _this.isControlledOutside = true;
    } else {
      state.value = props.defaultValue || '';
    }

    _this.state = state;
    return _this;
  }

  (0, _createClass2.default)(Select, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.value !== this.props.value || prevProps.children !== this.props.children) {
        this.setTitle();
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setTitle();
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props = this.props,
          style = _this$props.style,
          value = _this$props.value,
          defaultValue = _this$props.defaultValue,
          onChange = _this$props.onChange,
          align = _this$props.align,
          status = _this$props.status,
          placeholder = _this$props.placeholder,
          children = _this$props.children,
          className = _this$props.className,
          getRef = _this$props.getRef,
          getRootRef = _this$props.getRootRef,
          top = _this$props.top,
          bottom = _this$props.bottom,
          restProps = (0, _objectWithoutProperties2.default)(_this$props, ["style", "value", "defaultValue", "onChange", "align", "status", "placeholder", "children", "className", "getRef", "getRootRef", "top", "bottom"]);
      return /*#__PURE__*/_react.default.createElement(_FormField.default, {
        Component: "label",
        className: (0, _classNames2.default)('Select', (_classNames = {}, (0, _defineProperty2.default)(_classNames, 'Select--not-selected', this.state.notSelected), (0, _defineProperty2.default)(_classNames, "Select--align-".concat(align), !!align), _classNames), className),
        style: style,
        getRootRef: getRootRef,
        status: status
      }, /*#__PURE__*/_react.default.createElement("select", (0, _extends2.default)({}, restProps, {
        className: "Select__el",
        onChange: this.onChange,
        value: this.value,
        ref: this.getRef
      }), placeholder && /*#__PURE__*/_react.default.createElement("option", {
        value: ""
      }, placeholder), children), /*#__PURE__*/_react.default.createElement("div", {
        className: "Select__container"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "Select__title"
      }, this.state.title), /*#__PURE__*/_react.default.createElement(_dropdown.default, null)));
    }
  }, {
    key: "value",
    get: function get() {
      return this.isControlledOutside ? this.props.value : this.state.value;
    }
  }]);
  return Select;
}(_react.default.Component);

exports.default = Select;
//# sourceMappingURL=Select.js.map