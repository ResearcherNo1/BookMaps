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

var viewBox = '0 0 24 24';
var id = 'money_transfer_outline_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="money_transfer_outline_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M6.205 3.1h11.59c1.152 0 1.74.113 2.35.44.565.302 1.013.75 1.315 1.315.301.564.421 1.107.438 2.094l.002.256V12a.9.9 0 0 1-1.793.113L20.1 12l-.001-3.1h-16.2l.001 5.895c0 .88.06 1.187.228 1.502.134.25.325.441.575.575.291.156.574.218 1.309.227l.193.001h12.622l-1.463-1.464a.9.9 0 0 1-.08-1.18l.08-.092a.9.9 0 0 1 1.18-.08l.092.08 3 3a.9.9 0 0 1 .08 1.18l-.08.092-3 3a.9.9 0 0 1-1.353-1.18l.08-.092 1.464-1.464H6.205c-1.063 0-1.646-.097-2.21-.369l-.14-.071a3.171 3.171 0 0 1-1.315-1.315c-.301-.564-.421-1.107-.438-2.094l-.002-.256v-7.59c0-1.152.113-1.74.44-2.35A3.171 3.171 0 0 1 3.855 3.54c.564-.301 1.107-.421 2.094-.438l.256-.002h11.59zm11.59 1.8H6.205c-.88 0-1.187.06-1.502.228-.25.134-.441.325-.575.575-.156.291-.218.574-.227 1.309L3.9 7.1h16.198v-.088c-.008-.735-.07-1.018-.226-1.309a1.372 1.372 0 0 0-.575-.575c-.291-.156-.574-.218-1.309-.227l-.193-.001z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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
    width: !isNaN(props.width) ? +props.width : 24,
    height: !isNaN(props.height) ? +props.height : 24
  }));
}

var _default = Icon;
exports.default = _default;