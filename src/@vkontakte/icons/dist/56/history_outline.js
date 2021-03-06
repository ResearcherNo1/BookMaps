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
var id = 'history_outline_56';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" id="history_outline_56"><g fill-rule="nonzero" fill="none"><path d="M0 0h56v56H0z" /><path d="M28 4c13.255 0 24 10.745 24 24S41.255 52 28 52a23.94 23.94 0 0 1-17.887-7.998A1.5 1.5 0 0 1 12.348 42 20.94 20.94 0 0 0 28 49c11.598 0 21-9.402 21-21S39.598 7 28 7a20.96 20.96 0 0 0-16.494 8H16.5c1.944 0 1.998 2.836.162 2.993L16.5 18H8a1.5 1.5 0 0 1-1.493-1.356L6.5 16.5V8a1.5 1.5 0 0 1 2.993-.144L9.5 8v4.71A23.956 23.956 0 0 1 28 4zm0 12a1.5 1.5 0 0 1 1.493 1.356l.007.144v9.879l6.06 6.06a1.5 1.5 0 0 1 .104 2.008l-.103.114a1.5 1.5 0 0 1-2.008.103l-.114-.103-6.5-6.5a1.5 1.5 0 0 1-.432-.913L26.5 28V17.5A1.5 1.5 0 0 1 28 16z" fill="currentColor" /></g></symbol>';

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