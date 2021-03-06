"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _browserSymbol = _interopRequireDefault(require("svg-baker-runtime/browser-symbol"));

var _es6ObjectAssign = require("es6-object-assign");

var _sprite = _interopRequireDefault(require("../sprite"));

var _SvgIcon = _interopRequireDefault(require("../SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var viewBox = '0 0 28 28';
var id = 'money_history_backward_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="money_history_backward_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M14 2c6.627 0 12 5.373 12 12s-5.373 12-12 12c-3.226 0-6.251-1.28-8.487-3.516a1 1 0 0 1 1.415-1.414A9.964 9.964 0 0 0 14 24c5.523 0 10-4.477 10-10S19.523 4 14 4a9.974 9.974 0 0 0-7.143 3H8.5a1 1 0 0 1 .117 1.993L8.5 9h-4a1 1 0 0 1-.993-.883L3.5 8V4a1 1 0 0 1 1.993-.117L5.5 4v1.529A11.973 11.973 0 0 1 14 2zm1.177 6.67c2.481 0 3.884 1.386 3.884 3.56 0 2.084-1.295 3.52-3.91 3.52h-1.593v1.195h1.793c.523 0 .847.283.847.74 0 .456-.333.73-.847.73h-1.835v.78c-.116.58-.547.888-1.079.888-.523 0-.963-.307-1.079-.888v-.78h-.78c-.531 0-.847-.274-.847-.73 0-.457.316-.74.847-.74h.739V15.75h-.615c-.606-.008-.97-.332-.97-.872 0-.53.364-.863.97-.88h.615v-3.602c0-1.187.548-1.727 1.71-1.727zm-.382 1.784H13.55V14h1.054c1.477 0 2.175-.474 2.175-1.76 0-1.279-.706-1.785-1.984-1.785z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

if (_sprite.default) {
  var browserSymbol = new _browserSymbol.default({
    id: id,
    viewBox: viewBox,
    content: content
  });

  _sprite.default.add(browserSymbol);
}

function Icon(props) {
  return _react.default.createElement(_SvgIcon.default, (0, _es6ObjectAssign.assign)({}, props, {
    viewBox: viewBox,
    id: id,
    width: !isNaN(props.width) ? +props.width : 28,
    height: !isNaN(props.height) ? +props.height : 28
  }));
}

var _default = Icon;
exports.default = _default;