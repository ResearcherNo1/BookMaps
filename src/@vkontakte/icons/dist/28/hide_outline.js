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
var id = 'hide_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="hide_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M7.707 4.793l5.325 5.325h.003l4.848 4.847v.003l5.824 5.825a1 1 0 0 1-1.414 1.414l-1.875-1.873A13.315 13.315 0 0 1 14 22c-5.818 0-11.5-4.356-11.5-8 0-2.127 2.185-4.77 5.193-6.393l-1.4-1.4a1 1 0 0 1 1.414-1.414zM4.5 14c0 2.406 4.688 6 9.5 6 1.733 0 3.415-.41 4.934-1.15l-2.063-2.065a4 4 0 1 1-5.656-5.656L9.18 9.096C6.48 10.377 4.5 12.634 4.5 14zM14 6c5.818 0 11.5 4.356 11.5 8 0 .945-.433 1.998-1.197 3.033a1 1 0 0 1-1.61-1.187c.532-.72.807-1.389.807-1.846 0-2.406-4.688-6-9.5-6a1 1 0 0 1 0-2zm-1.37 6.544a2 2 0 1 0 2.827 2.827l-2.828-2.827z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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