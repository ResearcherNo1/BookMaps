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
var id = 'key_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="key_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M25 2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-2v2a1 1 0 0 1-.883.993L22 11h-2v2a1 1 0 0 1-.883.993L19 14h-2.556l.18.3c.58 1.02.917 2.17.969 3.371L17.6 18a7.5 7.5 0 1 1-5.78-7.301l.054.013 8.419-8.42a1 1 0 0 1 .576-.283L21 2zm-1 2h-2.586l-8.541 8.542a1 1 0 0 1-.904.274l-.12-.033a5.5 5.5 0 1 0 2.504 1.728 1 1 0 0 1 .064-1.341l.876-.877A1 1 0 0 1 16 12h2v-2a1 1 0 0 1 .883-.993L19 9h2V7a1 1 0 0 1 .883-.993L22 6h2V4zM8.5 18.2a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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