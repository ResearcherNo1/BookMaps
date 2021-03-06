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
var id = 'write_square_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="write_square_outline_28"><g fill-rule="nonzero" fill="none"><path d="M0 0h28v28H0z" /><path d="M10.074 3.002h7.928l.002 2h-7.882c-1.671.014-2.371.162-3.093.548-.64.342-1.137.839-1.48 1.48C5.143 7.79 5 8.528 5 10.41v7.18c0 1.881.142 2.62.55 3.38.342.641.839 1.138 1.48 1.48.68.365 1.343.517 2.822.545l.558.005h7.18l.558-.005c1.479-.028 2.141-.18 2.823-.545a3.543 3.543 0 0 0 1.48-1.48c.364-.68.516-1.343.544-2.822L23 17.59 22.996 10l2.001-.001L25 17.59c0 2.183-.203 3.233-.786 4.324a5.543 5.543 0 0 1-2.3 2.3c-1.091.583-2.14.786-4.324.786h-7.18c-2.183 0-3.233-.203-4.324-.786a5.543 5.543 0 0 1-2.3-2.3c-.553-1.034-.764-2.03-.784-3.988v-7.852c.02-1.958.231-2.954.784-3.988a5.543 5.543 0 0 1 2.3-2.3c1.034-.553 2.03-.764 3.988-.784zm13.104 1.82a1.1 1.1 0 0 1 0 1.555l-8.89 8.89a7.131 7.131 0 0 1-2.331 1.554l-.434.178a.4.4 0 0 1-.522-.522l.178-.434a7.131 7.131 0 0 1 1.553-2.33l8.89-8.891a1.1 1.1 0 0 1 1.556 0zM24 9a1 1 0 0 1 .993.883L25 10h-2a1 1 0 0 1 1-1zm-6-6a1 1 0 0 1 .117 1.993L18 5V3zm6.8-1a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z" fill="currentColor" /></g></symbol>';

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