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
var id = 'privacy_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="privacy_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M24.442 12.058c.513.77.588 1.831.192 2.663l-2.679 5.625C20.435 23.539 16.54 26 12.998 26H12c-4.422 0-8-3.58-8-8.009v-7.863a2.746 2.746 0 0 1 3.5-2.642v-.732a2.75 2.75 0 0 1 3.571-2.629A2.749 2.749 0 0 1 13.75 2c1.47 0 2.67 1.15 2.746 2.604A2.748 2.748 0 0 1 20 7.254v4.264c1.299-1.278 3.357-1.087 4.442.54zM6.75 9.383a.746.746 0 0 0-.75.745v7.863A5.998 5.998 0 0 0 12 24h.998c2.773 0 5.964-2.02 7.151-4.514l2.679-5.625a.787.787 0 0 0-.05-.694c-.428-.642-1.123-.65-1.55-.01l-2.177 3.267c-.576.864-1.051.726-1.051-.323V7.255a.748.748 0 0 0-.75-.755.746.746 0 0 0-.75.747v5.757c0 .55-.448.996-1 .996-.556 0-1-.446-1-.995V4.752a.749.749 0 1 0-1.5 0v8.253c0 .54-.448.995-1 .995-.556 0-1-.446-1-.997v-6.25A.756.756 0 0 0 10.25 6a.75.75 0 0 0-.75.754v6.738c0 .551-.448 1.008-1 1.008-.556 0-1-.447-1-.999v-3.363a.751.751 0 0 0-.75-.755z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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