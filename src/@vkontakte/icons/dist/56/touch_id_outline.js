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

var viewBox = '0 0 56 56';
var id = 'touch_id_outline_56';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" id="touch_id_outline_56"><g fill="none" fill-rule="evenodd"><path d="M0 0h56v56H0z" /><path d="M31.5 42a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1-3 0v-5a1.5 1.5 0 0 1 1.5-1.5zm-3-18a4.5 4.5 0 0 1 4.495 4.288L33 28.5v9a1.5 1.5 0 0 1-3 0v-9a1.5 1.5 0 0 0-2.993-.144L27 28.5v19a1.5 1.5 0 0 1-3 0v-19a4.5 4.5 0 0 1 4.5-4.5zm-9 10a1.5 1.5 0 0 1 1.5 1.5v11a1.5 1.5 0 0 1-3 0v-11a1.5 1.5 0 0 1 1.5-1.5zm24 1a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-3 0v-8a1.5 1.5 0 0 1 1.5-1.5zm-7.735-14.08a10.47 10.47 0 0 1 3.23 7.246L39 28.5v15a1.5 1.5 0 0 1-3 0V28.521 28.5a7.473 7.473 0 0 0-2.31-5.415 1.5 1.5 0 0 1 2.075-2.166zm-14.318-5.747a1.5 1.5 0 0 1-.417 2.08A13.484 13.484 0 0 0 15 28.5v14a1.5 1.5 0 0 1-3 0V28.45l.001-.001.003-.32c.121-5.445 2.9-10.401 7.363-13.373a1.5 1.5 0 0 1 2.08.417zM7.5 36A1.5 1.5 0 0 1 9 37.5v3a1.5 1.5 0 0 1-3 0v-3A1.5 1.5 0 0 1 7.5 36zm35.463-24.736a22.45 22.45 0 0 1 8.033 16.797L51 28.5v9a1.5 1.5 0 0 1-3 0v-9c0-5.84-2.58-11.255-6.966-14.939a1.5 1.5 0 1 1 1.93-2.297zM28.5 6c2.904 0 5.733.551 8.373 1.61a1.5 1.5 0 1 1-1.117 2.784A19.442 19.442 0 0 0 28.5 9C17.845 9 9.186 17.546 9.003 28.157L9 28.5v3a1.5 1.5 0 0 1-3 0v-3C6 16.074 16.074 6 28.5 6zm0 6c9.005 0 16.326 7.215 16.497 16.18l.003.32v2a1.5 1.5 0 0 1-3 0v-2C42 21.044 35.956 15 28.5 15c-.76 0-1.511.063-2.249.186a1.5 1.5 0 0 1-.496-2.959A16.602 16.602 0 0 1 28.5 12zm0 6a1.5 1.5 0 0 1 0 3 7.5 7.5 0 0 0-7.496 7.257L21 28.5v1a1.5 1.5 0 0 1-3 0v-1C18 22.701 22.701 18 28.5 18z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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
    width: !isNaN(props.width) ? +props.width : 56,
    height: !isNaN(props.height) ? +props.height : 56
  }));
}

var _default = Icon;
exports.default = _default;