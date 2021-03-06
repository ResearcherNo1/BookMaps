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
var id = 'history_forward_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="history_forward_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M14.5 2c3.25 0 6.283 1.303 8.5 3.529V4l.007-.117A1 1 0 0 1 25 4v4l-.007.117A1 1 0 0 1 24 9h-4l-.117-.007A1 1 0 0 1 20 7h1.643A9.974 9.974 0 0 0 14.5 4c-5.523 0-10 4.477-10 10s4.477 10 10 10a9.964 9.964 0 0 0 7.072-2.93 1 1 0 1 1 1.415 1.414A11.963 11.963 0 0 1 14.5 26c-6.627 0-12-5.373-12-12s5.373-12 12-12zM14 8a1 1 0 0 1 1 1v4.586l2.707 2.707a1 1 0 0 1-1.414 1.414l-3-3A1 1 0 0 1 13 14V9a1 1 0 0 1 1-1z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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