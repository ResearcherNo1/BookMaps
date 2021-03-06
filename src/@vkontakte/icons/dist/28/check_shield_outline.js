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
var id = 'check_shield_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="check_shield_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M13.484 1.502c.35-.05.682-.05 1.032 0 .345.05.633.127 1.296.348l6.82 2.273A2 2 0 0 1 24 6.021V15.3c0 4.794-2.878 8.467-8.458 10.942l-.368.16a3 3 0 0 1-2.348 0C7.007 23.93 4 20.202 4 15.3V6.02a2 2 0 0 1 1.368-1.897l7.008-2.335c.533-.174.797-.242 1.108-.286zm.75 1.98a1.58 1.58 0 0 0-.467 0c-.2.029-.389.08-.947.265L6 6.021V15.3c0 4.016 2.471 7.078 7.609 9.262.25.106.532.106.775.003l.354-.154C19.641 22.236 22 19.226 22 15.3V6.02l-6.977-2.324a5.973 5.973 0 0 0-.668-.193zm5.173 7.01a1 1 0 0 1 .083 1.32l-.083.095-6 6a1 1 0 0 1-1.32.083l-.094-.083-3.25-3.25a1 1 0 0 1 1.32-1.497l.094.083 2.543 2.542 5.293-5.292a1 1 0 0 1 1.414 0z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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