import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React from 'react';
import classNames from '../../lib/classNames';
import Icon24Dropdown from '@vkontakte/icons/dist/24/dropdown';
import FormField from '../FormField/FormField';

var Select = /*#__PURE__*/function (_React$Component) {
  _inherits(Select, _React$Component);

  var _super = _createSuper(Select);

  function Select(props) {
    var _this;

    _classCallCheck(this, Select);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "isControlledOutside", void 0);

    _defineProperty(_assertThisInitialized(_this), "selectEl", void 0);

    _defineProperty(_assertThisInitialized(_this), "onChange", function (e) {
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

    _defineProperty(_assertThisInitialized(_this), "setTitle", function () {
      var selectedOption = _this.selectEl.options[_this.selectEl.selectedIndex];
      selectedOption && _this.setState({
        title: selectedOption.text,
        notSelected: selectedOption.value === '' && _this.props.hasOwnProperty('placeholder')
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getRef", function (element) {
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

  _createClass(Select, [{
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
          restProps = _objectWithoutProperties(_this$props, ["style", "value", "defaultValue", "onChange", "align", "status", "placeholder", "children", "className", "getRef", "getRootRef", "top", "bottom"]);

      return /*#__PURE__*/React.createElement(FormField, {
        Component: "label",
        className: classNames('Select', (_classNames = {}, _defineProperty(_classNames, 'Select--not-selected', this.state.notSelected), _defineProperty(_classNames, "Select--align-".concat(align), !!align), _classNames), className),
        style: style,
        getRootRef: getRootRef,
        status: status
      }, /*#__PURE__*/React.createElement("select", _extends({}, restProps, {
        className: "Select__el",
        onChange: this.onChange,
        value: this.value,
        ref: this.getRef
      }), placeholder && /*#__PURE__*/React.createElement("option", {
        value: ""
      }, placeholder), children), /*#__PURE__*/React.createElement("div", {
        className: "Select__container"
      }, /*#__PURE__*/React.createElement("div", {
        className: "Select__title"
      }, this.state.title), /*#__PURE__*/React.createElement(Icon24Dropdown, null)));
    }
  }, {
    key: "value",
    get: function get() {
      return this.isControlledOutside ? this.props.value : this.state.value;
    }
  }]);

  return Select;
}(React.Component);

export { Select as default };
//# sourceMappingURL=Select.js.map