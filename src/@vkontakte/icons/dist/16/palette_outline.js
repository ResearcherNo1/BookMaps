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

var viewBox = '0 0 16 16';
var id = 'palette_outline_16';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="palette_outline_16"><path d="M8 1a7.008 7.008 0 0 1 6.915 5.908c.323 2.65-1.796 4.507-4.003 4.507h-.59c-.593.005-.825.027-.981.087-.081.031-.23.154-.09.39l.207.358c.115.213.218.446.322.737C10.116 13.933 9.262 15 8 15c-3.72 0-7-3.203-7-7a7 7 0 0 1 7-7zm0 1.5A5.5 5.5 0 0 0 2.5 8c0 2.96 2.6 5.5 5.5 5.5.27 0 .256-.189.166-.418a3.714 3.714 0 0 0-.235-.478 1.936 1.936 0 0 1-.225-.715c-.096-.764.391-1.517 1.1-1.788.308-.118.572-.163 1.092-.179l.387-.006h.627c1.383 0 2.716-1.17 2.518-2.798A5.502 5.502 0 0 0 8 2.5zM4.313 6.667a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7.334 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM6.313 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3.334 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="currentColor" /></symbol>';

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
    width: !isNaN(props.width) ? +props.width : 16,
    height: !isNaN(props.height) ? +props.height : 16
  }));
}

var _default = Icon;
exports.default = _default;