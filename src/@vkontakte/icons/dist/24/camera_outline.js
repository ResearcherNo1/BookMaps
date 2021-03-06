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
var id = 'camera_outline_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="camera_outline_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M14.253 3c.903 0 1.544.29 2.101.947.009.01.472.59.696.867.077.096.431.186.995.186h.432C20.798 5 22.4 6.664 22.4 9.225v6.414c0 2.31-2.217 4.361-4.786 4.361H6.386C3.817 20 1.6 17.95 1.6 15.639V9.225C1.6 6.665 3.202 5 5.523 5h.432c.564 0 .918-.09.995-.186.224-.277.687-.857.696-.867C8.203 3.291 8.844 3 9.747 3h4.506zm0 1.8H9.747c-.38 0-.517.062-.73.313.013-.014-.425.532-.668.833-.525.65-1.326.854-2.394.854h-.432C4.212 6.8 3.4 7.643 3.4 9.225v6.414c0 1.283 1.381 2.561 2.986 2.561h11.228c1.605 0 2.986-1.278 2.986-2.561V9.225c0-1.582-.812-2.425-2.123-2.425h-.432c-1.068 0-1.87-.205-2.394-.854-.243-.3-.68-.847-.669-.833-.212-.25-.35-.313-.73-.313zM7.6 12.1a4.4 4.4 0 1 1 8.8 0 4.4 4.4 0 0 1-8.8 0zm1.8 0a2.6 2.6 0 1 0 5.2 0 2.6 2.6 0 0 0-5.2 0z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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