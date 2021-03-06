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
var id = 'reply_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="reply_outline_28"><g fill="none"><path d="M0 0h28v28H0z" /><path d="M14.138 4.007a2.588 2.588 0 0 1 2.393 2.589l.001 2.556.025.006C21.989 10.292 26 15.141 26 20.862c0 .416-.021.83-.063 1.24-.1.98-1.337 1.332-1.93.55l-.224-.286a10.866 10.866 0 0 0-6.995-3.942l-.256-.031v3.011c0 .58-.194 1.144-.55 1.601a2.564 2.564 0 0 1-3.617.442l-9.378-7.404a2.609 2.609 0 0 1 0-4.086l9.378-7.404A2.565 2.565 0 0 1 13.955 4zm-.184 2.166a.418.418 0 0 0-.258.09l-9.378 7.404a.425.425 0 0 0 0 .666l9.378 7.404a.417.417 0 0 0 .678-.333l.001-4.162c0-.607.494-1.097 1.096-1.087l.28.005.41.02a12.986 12.986 0 0 1 7.334 2.856l.209.174-.029-.163c-.77-4.124-4.117-7.372-8.352-7.892a1.084 1.084 0 0 1-.948-1.079l-.001-3.48a.421.421 0 0 0-.42-.423z" fill="currentColor" /></g></symbol>';

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