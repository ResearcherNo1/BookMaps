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

var viewBox = '0 0 16 16';
var id = 'gift_16';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="gift_16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z" /><path d="M14 6.339v.987c0 .37-.3.67-.67.67h-.83v4.825c0 .925-.75 1.675-1.675 1.675H5.177c-.925 0-1.675-.75-1.675-1.675V7.996h.667H2.67a.67.67 0 0 1-.67-.67v-.987c0-.74.6-1.34 1.34-1.34h9.32c.74 0 1.34.6 1.34 1.34zM8.248 4.995H8.5v3.003l3.993-.001-.003 1H8.5v5.5h-1V8.998l-4.001.001V8L7.5 7.998V4.995h.252c-1.94-.052-4.085-.704-4.085-1.663 0-1 1.333-2 2.333-1.667.666.222 1.333 1.332 1.999 3.33H8C8.667 2.997 9.334 1.887 10 1.665c1-.333 2.333.667 2.333 1.667 0 .959-2.145 1.611-4.085 1.663z" fill="currentColor" /></g></symbol>';

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
    width: !isNaN(props.width) ? +props.width : 16,
    height: !isNaN(props.height) ? +props.height : 16
  }));
}

var _default = Icon;
exports.default = _default;