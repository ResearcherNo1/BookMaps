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
var id = 'profile_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="profile_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M14 2c6.627 0 12 5.373 12 12s-5.373 12-12 12S2 20.627 2 14 7.373 2 14 2zm0 18.5c-2.086 0-4.08.582-5.797 1.649A9.952 9.952 0 0 0 14 24c2.16 0 4.161-.685 5.796-1.85A10.94 10.94 0 0 0 14 20.5zM14 4C8.477 4 4 8.477 4 14a9.964 9.964 0 0 0 2.648 6.779A12.934 12.934 0 0 1 14 18.5c2.67 0 5.215.808 7.353 2.277A9.962 9.962 0 0 0 24 14c0-5.523-4.477-10-10-10zm0 3.5a4.749 4.749 0 0 1 4.75 4.75A4.749 4.749 0 0 1 14 17a4.749 4.749 0 0 1-4.75-4.75A4.749 4.749 0 0 1 14 7.5zm0 2c-1.52 0-2.75 1.23-2.75 2.75S12.48 15 14 15s2.75-1.23 2.75-2.75S15.52 9.5 14 9.5z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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