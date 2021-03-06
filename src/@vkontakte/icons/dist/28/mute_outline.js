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
var id = 'mute_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="mute_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M7.613 4.21l.094.083 16 16a1 1 0 0 1-1.32 1.497l-.094-.083L18 17.415V22a2 2 0 0 1-2 2c-.83 0-1.629-.302-2.25-.846L13.587 23l-5-5H6.458a2.458 2.458 0 0 1-2.453-2.297L4 15.542v-3.084a2.458 2.458 0 0 1 2.297-2.453L6.458 10h2.128l.999-1-3.292-3.293a1 1 0 0 1-.083-1.32l.083-.094a1 1 0 0 1 1.32-.083zM11 10.415l-1.293 1.292a1 1 0 0 1-.576.284L9 12H6.458a.458.458 0 0 0-.45.376L6 12.458v3.084c0 .225.162.412.376.45l.082.008H9a1 1 0 0 1 .608.206l.1.087L15 21.586c.232.232.536.375.86.407L16 22v-6.585l-5-5zM16 4a2 2 0 0 1 1.995 1.85L18 6v4a1 1 0 0 1-2 0V6c-.328 0-.645.114-.896.32L15 6.414l-.792.794a1.02 1.02 0 0 1-.658.242 1 1 0 0 1-.755-1.655l-.002-.002.033-.033.033-.033.727-.727c.64-.64 1.508-1 2.414-1z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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