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
var id = 'radiowaves_around_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="radiowaves_around_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M14 2c6.627 0 12 5.373 12 12 0 3.93-1.904 7.542-5.043 9.779a1 1 0 0 1-1.161-1.629A9.984 9.984 0 0 0 24 14c0-5.523-4.477-10-10-10S4 8.477 4 14a9.984 9.984 0 0 0 4.198 8.146 1 1 0 0 1-1.162 1.627A11.984 11.984 0 0 1 2 14C2 7.373 7.373 2 14 2zm0 5a7 7 0 0 1 4.496 12.366l-.033.027a1 1 0 0 1-1.276-1.54l.024-.02a5 5 0 1 0-6.402.016 1 1 0 1 1-1.278 1.539A7 7 0 0 1 14 7zm0 5a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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