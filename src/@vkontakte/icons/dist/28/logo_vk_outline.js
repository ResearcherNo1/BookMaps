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
var id = 'logo_vk_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="logo_vk_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M17.59 3c2.183 0 3.233.203 4.324.786a5.543 5.543 0 0 1 2.3 2.3c.583 1.091.786 2.14.786 4.324v7.18c0 2.183-.203 3.233-.786 4.324a5.543 5.543 0 0 1-2.3 2.3c-1.091.583-2.14.786-4.324.786h-7.18c-2.183 0-3.233-.203-4.324-.786a5.543 5.543 0 0 1-2.3-2.3C3.203 20.823 3 19.774 3 17.59v-7.18c0-2.183.203-3.233.786-4.324a5.543 5.543 0 0 1 2.3-2.3C7.177 3.203 8.226 3 10.41 3h7.18zm0 2h-7.18c-1.881 0-2.62.142-3.38.55-.641.342-1.138.839-1.48 1.48-.408.76-.55 1.499-.55 3.38v7.18c0 1.881.142 2.62.55 3.38.342.641.839 1.138 1.48 1.48.76.408 1.499.55 3.38.55h7.18c1.881 0 2.62-.142 3.38-.55a3.543 3.543 0 0 0 1.48-1.48c.408-.76.55-1.499.55-3.38v-7.18c0-1.881-.142-2.62-.55-3.38a3.543 3.543 0 0 0-1.48-1.48c-.76-.408-1.499-.55-3.38-.55zm-8.059 5.575c.35 0 .481.153.612.532.67 1.948 1.797 3.65 2.26 3.65.157 0 .237-.064.252-.4l.002-.121v-2.014c-.05-.927-.543-1.003-.543-1.333 0-.134.1-.274.27-.307l.078-.007h2.149c.257 0 .366.122.387.394l.003.109v2.709c0 .29.126.391.213.391.174 0 .319-.101.638-.42.985-1.101 1.68-2.796 1.68-2.796.077-.18.213-.346.486-.38l.11-.007h1.367c.413 0 .5.213.413.503-.16.735-1.592 2.792-1.812 3.104l-.028.04c-.145.231-.203.347 0 .608.145.203.623.608.942.985.587.661 1.03 1.218 1.153 1.603.104.353-.052.547-.38.577l-.093.004h-1.368c-.521 0-.674-.416-1.601-1.344-.811-.782-1.16-.883-1.362-.883-.248 0-.34.063-.355.36l-.003.108v1.227c0 .336-.107.532-.976.532-1.45 0-3.041-.88-4.171-2.503-1.695-2.376-2.159-4.172-2.159-4.534 0-.183.063-.35.36-.382l.109-.005H9.53z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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