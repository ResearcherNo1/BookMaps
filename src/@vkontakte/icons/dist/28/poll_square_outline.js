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
var id = 'poll_square_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="poll_square_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M10.692 5c-2.137 0-2.897.147-3.68.565a3.453 3.453 0 0 0-1.447 1.448C5.147 7.795 5 8.555 5 10.692v6.616c0 2.137.147 2.897.565 3.68.337.629.818 1.11 1.448 1.447.782.418 1.542.565 3.679.565h6.616c2.137 0 2.897-.147 3.68-.565a3.453 3.453 0 0 0 1.447-1.448c.418-.782.565-1.542.565-3.679v-6.616c0-2.137-.147-2.897-.565-3.68a3.453 3.453 0 0 0-1.448-1.447C20.205 5.147 19.445 5 17.308 5h-6.616zm0-2h6.616c2.675 0 3.645.278 4.623.801a5.452 5.452 0 0 1 2.268 2.268c.523.978.801 1.948.801 4.623v6.616c0 2.675-.278 3.645-.801 4.623a5.452 5.452 0 0 1-2.268 2.268c-.978.523-1.948.801-4.623.801h-6.616c-2.675 0-3.645-.278-4.623-.801a5.452 5.452 0 0 1-2.268-2.268C3.278 20.953 3 19.983 3 17.308v-6.616c0-2.675.278-3.645.801-4.623A5.452 5.452 0 0 1 6.07 3.801C7.047 3.278 8.017 3 10.692 3zM11 19a1 1 0 0 1-2 0v-6a1 1 0 0 1 2 0v6zm4 0a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0v10zm4 0a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0v4z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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