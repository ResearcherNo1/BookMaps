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
var id = 'subtitles_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="subtitles_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M18.308 4c2.675 0 3.645.278 4.623.801a5.452 5.452 0 0 1 2.268 2.268c.523.978.801 1.948.801 4.623v4.616c0 2.675-.278 3.645-.801 4.623a5.452 5.452 0 0 1-2.268 2.268c-.978.523-1.948.801-4.623.801H9.692c-2.675 0-3.645-.278-4.623-.801a5.452 5.452 0 0 1-2.268-2.268C2.278 19.953 2 18.983 2 16.308v-4.616c0-2.675.278-3.645.801-4.623A5.452 5.452 0 0 1 5.07 4.801C6.047 4.278 7.017 4 9.692 4h8.616zm.283 2h-8.9c-2.136 0-2.896.147-3.678.565a3.453 3.453 0 0 0-1.448 1.448c-.4.746-.551 1.473-.564 3.396L4 16.309c0 2.136.147 2.896.565 3.678.337.63.818 1.111 1.448 1.448.782.418 1.542.565 3.679.565h8.616c2.137 0 2.897-.147 3.68-.565a3.453 3.453 0 0 0 1.447-1.448c.418-.782.565-1.542.565-3.679v-4.616c0-2.137-.147-2.897-.565-3.68a3.453 3.453 0 0 0-1.448-1.447c-.746-.4-1.473-.551-3.396-.564zM14 16a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2zm6 0a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2zm0-4a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2h6zm-10 0a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2h2z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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