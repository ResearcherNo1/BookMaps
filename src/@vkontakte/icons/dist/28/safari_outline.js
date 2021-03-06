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
var id = 'safari_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="safari_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M13.833 2.333c6.351 0 11.5 5.149 11.5 11.5s-5.149 11.5-11.5 11.5-11.5-5.149-11.5-11.5 5.149-11.5 11.5-11.5zm0 2a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19z" fill="currentColor" fill-rule="nonzero" /><path d="M11.963 12.086l-2.575 6.067a.35.35 0 0 0 .459.46l6.066-2.575a.233.233 0 0 0 .123-.124l2.574-6.066a.35.35 0 0 0-.458-.459l-6.066 2.574a.233.233 0 0 0-.123.123z" stroke="currentColor" stroke-width="1.75" /></g></symbol>';

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