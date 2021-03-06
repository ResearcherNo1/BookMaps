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
var id = 'phone_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="phone_outline_28"><g fill-rule="nonzero" fill="none"><path d="M0 0h28v28H0z" /><path d="M16.112 17.259l-.734.734a.712.712 0 0 1-.75.166c-.73-.269-1.643-.95-2.74-2.047-1.095-1.096-1.778-2.01-2.045-2.74a.712.712 0 0 1 .164-.75l.736-.734c1.354-1.354 1.478-3.487.284-4.903l-.862-1.024c-.984-1.17-2.756-1.288-3.96-.264a3.319 3.319 0 0 0-.974 1.443 3.25 3.25 0 0 0-.159.752c-.44 3.272 1.137 6.707 4.733 10.303 3.596 3.596 7.03 5.174 10.303 4.733a3.318 3.318 0 0 0 2.195-1.134c1.024-1.202.905-2.976-.263-3.96l-1.025-.862c-1.417-1.192-3.55-1.067-4.903.287zm-2.81-2.561c.525.523.982.92 1.35 1.191 2.124-2.123 5.428-2.317 7.652-.447l1.023.862c2.03 1.708 2.233 4.751.49 6.798-.896 1.036-2.156 1.687-3.442 1.808-3.982.536-7.987-1.303-11.984-5.3-3.997-3.998-5.837-8.004-5.31-11.896.036-.414.122-.822.257-1.22A5.33 5.33 0 0 1 4.91 4.174c2.037-1.732 5.079-1.53 6.785.5l.86 1.023c1.873 2.22 1.681 5.527-.4 7.608.227.413.624.87 1.148 1.394z" fill="currentColor" /></g></symbol>';

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