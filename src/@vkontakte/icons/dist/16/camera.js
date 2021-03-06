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
var id = 'camera_16';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="camera_16"><g fill="none"><path d="M0 0h16v16H0z" /><path d="M8 3l-.001.999H8V3h1.25c.747 0 .75.991 1.49 1h.017c.78 0 1.063.081 1.348.234.285.152.509.376.661.661.153.285.234.568.234 1.348v3.514c0 .78-.081 1.063-.234 1.348s-.376.509-.661.661-.568.234-1.348.234H5.243c-.78 0-1.063-.081-1.348-.234a1.59 1.59 0 0 1-.661-.661C3.08 10.82 3 10.537 3 9.757V6.243c0-.78.081-1.063.234-1.348a1.59 1.59 0 0 1 .661-.661C4.18 4.08 4.463 4 5.243 4h.017c.74-.009.743-1 1.49-1zm0 2.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5zM8 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" fill="currentColor" /></g></symbol>';

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