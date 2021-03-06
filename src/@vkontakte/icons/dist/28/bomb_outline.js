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
var id = 'bomb_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="bomb_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M20.98 7.065a1 1 0 0 1 .077 1.327l-.078.087-1.215 1.217c3.197 3.928 2.966 9.716-.693 13.375-3.905 3.905-10.237 3.905-14.142 0-3.905-3.905-3.905-10.237 0-14.142 3.674-3.674 9.496-3.892 13.424-.653l1.212-1.211a1 1 0 0 1 1.414 0zm-3.323 3.278A8 8 0 1 0 6.343 21.657a8 8 0 0 0 11.314-11.314zm2.289-8.727l.038.11.5 1.752a1 1 0 0 1-1.886.659l-.038-.11-.5-1.753a1 1 0 0 1 1.886-.658zm6.998 7.482c-.173.484-.694.758-1.202.651l-.116-.031-1.816-.603c-.541-.18-.829-.75-.643-1.271.174-.485.695-.76 1.202-.652l.117.032 1.815.602c.542.18.83.75.643 1.272zm-1.565-6.56a1 1 0 0 1 .078 1.327l-.078.087-1.6 1.6a1 1 0 0 1-1.492-1.327l.078-.087 1.6-1.6a1 1 0 0 1 1.414 0z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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