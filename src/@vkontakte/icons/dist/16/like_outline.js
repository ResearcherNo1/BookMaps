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
var id = 'like_outline_16';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="like_outline_16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z" /><path d="M10.96 2.5A4.04 4.04 0 0 1 15 6.54c0 2.214-.884 3.32-4.52 6.149l-1.099.854a2.25 2.25 0 0 1-2.762 0L5.52 12.69C1.884 9.86 1 8.754 1 6.539A4.04 4.04 0 0 1 5.04 2.5c1.111 0 2.103.482 2.96 1.404.857-.922 1.849-1.404 2.96-1.404zM5.04 4A2.54 2.54 0 0 0 2.5 6.54c0 1.59.653 2.407 3.94 4.965l1.1.854c.27.21.65.21.92 0l1.1-.854c3.287-2.558 3.94-3.375 3.94-4.966A2.54 2.54 0 0 0 10.96 4c-.848 0-1.618.482-2.343 1.53L8 6.423l-.617-.893C6.658 4.482 5.888 4 5.04 4z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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