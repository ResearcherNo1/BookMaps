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
var id = 'volume_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="volume_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M16 4a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2c-.906 0-1.774-.36-2.414-1l-5-5H6.458A2.458 2.458 0 0 1 4 15.542v-3.084C4 11.101 5.1 10 6.458 10h2.128l5-5c.64-.64 1.508-1 2.414-1zm0 2c-.375 0-.735.149-1 .414l-5.293 5.293A1 1 0 0 1 9 12H6.458a.458.458 0 0 0-.458.458v3.084c0 .253.205.458.458.458H9a1 1 0 0 1 .707.293L15 21.586c.265.265.625.414 1 .414zm7.864 1.436a1 1 0 0 1 1.415 0 9.283 9.283 0 0 1 0 13.128 1 1 0 0 1-1.415-1.414 7.283 7.283 0 0 0 0-10.3 1 1 0 0 1 0-1.414zm-2.97 2.97a1 1 0 0 1 1.415 0 5.083 5.083 0 0 1 0 7.188 1 1 0 1 1-1.414-1.414 3.083 3.083 0 0 0 0-4.36 1 1 0 0 1 0-1.414z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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