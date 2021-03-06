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
var id = 'smile_16';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="smile_16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z" /><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm14.5 0a6.5 6.5 0 1 0-13 0 6.5 6.5 0 0 0 13 0zm-9.125-.497a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25zm5.25 0a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25zm-6.2 3.047a.75.75 0 0 1 1.22-.872 2.886 2.886 0 0 0 4.703 0 .75.75 0 1 1 1.22.872 4.386 4.386 0 0 1-7.144 0z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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