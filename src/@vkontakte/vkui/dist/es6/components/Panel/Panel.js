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

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import Touch from '../Touch/Touch';
import { tabbarHeight } from '../../appearance/constants';
import withInsets from '../../hoc/withInsets';
import withPlatform from '../../hoc/withPlatform';
import { isNumeric } from '../../lib/utils';
import Separator from '../Separator/Separator';

var Panel = /*#__PURE__*/function (_Component) {
  _inherits(Panel, _Component);

  var _super = _createSuper(Panel);

  function Panel() {
    var _this;

    _classCallCheck(this, Panel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "container", void 0);

    _defineProperty(_assertThisInitialized(_this), "getRef", function (container) {
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

  _createClass(Panel, [{
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
          restProps = _objectWithoutProperties(_this$props, ["className", "centered", "children", "insets", "platform", "separator", "getRootRef"]);

      var tabbarPadding = this.context.hasTabbar ? tabbarHeight : 0;
      return /*#__PURE__*/React.createElement("div", _extends({}, restProps, {
        ref: this.getRef,
        className: classNames(getClassName('Panel', platform), className, {
          'Panel--centered': centered
        })
      }), /*#__PURE__*/React.createElement(Touch, {
        className: "Panel__in",
        style: {
          paddingBottom: isNumeric(insets.bottom) ? insets.bottom + tabbarPadding : null
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "Panel__in-before"
      }), separator && /*#__PURE__*/React.createElement(Separator, {
        className: "Panel__separator"
      }), centered ? /*#__PURE__*/React.createElement("div", {
        className: "Panel__centered"
      }, children) : children, /*#__PURE__*/React.createElement("div", {
        className: "Panel__in-after"
      })));
    }
  }]);

  return Panel;
}(Component);

_defineProperty(Panel, "childContextTypes", {
  panel: PropTypes.string
});

_defineProperty(Panel, "defaultProps", {
  children: '',
  centered: false,
  separator: true
});

_defineProperty(Panel, "contextTypes", {
  hasTabbar: PropTypes.bool
});

export default withPlatform(withInsets(Panel));
//# sourceMappingURL=Panel.js.map