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

var viewBox = '0 0 44 44';
var id = 'coins_outline_44';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" id="coins_outline_44"><g fill="none" fill-rule="evenodd"><path d="M0 0h44v44H0z" /><path d="M36.995 29.969C36.793 34.692 30.055 38 22 38c-8.178 0-15-3.411-15-8.25v-15l.005-.219C7.207 9.808 13.945 6.5 22 6.5c8.178 0 15 3.411 15 8.25v15zm-2.994-10.17C31.246 21.794 26.863 23 22 23c-4.862 0-9.245-1.206-12-3.2v2.45c0 2.617 5.266 5.25 12 5.25s12-2.633 12-5.25zM22 9.5c-6.734 0-12 2.633-12 5.25S15.266 20 22 20s12-2.633 12-5.25S28.734 9.5 22 9.5zm12 17.799c-2.754 1.995-7.137 3.201-12 3.201-4.862 0-9.245-1.206-12-3.2v2.45l.005.138C10.185 32.458 15.385 35 22 35c6.734 0 12-2.633 12-5.25z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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
    width: !isNaN(props.width) ? +props.width : 44,
    height: !isNaN(props.height) ? +props.height : 44
  }));
}

var _default = Icon;
exports.default = _default;