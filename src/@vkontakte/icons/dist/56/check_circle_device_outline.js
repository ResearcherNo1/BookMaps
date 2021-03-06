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
var id = 'check_circle_device_outline_56';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" id="check_circle_device_outline_56"><g fill="none" fill-rule="evenodd"><path d="M0 0h56v56H0z" /><path d="M25.244 4l.744.005c2.981.046 4.526.385 6.127 1.24a8.765 8.765 0 0 1 3.475 3.347l.174.312.15.292c.774 1.558 1.068 3.19 1.085 6.283a1.5 1.5 0 0 1-3 .016l-.008-.638c-.04-2.032-.228-3.12-.627-4.035l-.126-.27-.13-.252A5.77 5.77 0 0 0 30.7 7.891c-1.187-.635-2.339-.873-5.115-.89L19.755 7c-2.737 0-4.003.2-5.071.698l-.133.064-.251.13a5.77 5.77 0 0 0-2.409 2.408c-.635 1.187-.873 2.339-.89 5.115L11 40.245c0 2.737.2 4.003.698 5.071l.064.133.13.251a5.77 5.77 0 0 0 2.408 2.409c1.1.588 2.134.825 4.438.88l.323.006.695.005h1.763a1.5 1.5 0 0 1 0 3h-1.775l-.718-.005c-2.989-.047-4.526-.377-6.14-1.24a8.765 8.765 0 0 1-3.476-3.347l-.174-.312-.15-.292c-.731-1.472-1.036-3.016-1.08-5.803L8 40.244V15.756l.005-.744c.046-2.981.385-4.526 1.24-6.127a8.765 8.765 0 0 1 3.347-3.475l.312-.174.292-.15c1.472-.731 3.016-1.036 5.803-1.08L19.756 4zM36 20c8.837 0 16 7.163 16 16s-7.163 16-16 16-16-7.163-16-16 7.163-16 16-16zm0 3c-7.18 0-13 5.82-13 13s5.82 13 13 13 13-5.82 13-13-5.82-13-13-13zm6.86 8.34a1.5 1.5 0 0 1 .104 2.007l-.103.114-8 8a1.5 1.5 0 0 1-2.008.103l-.114-.103-3.2-3.2a1.5 1.5 0 0 1 2.008-2.225l.114.103 2.139 2.14 6.94-6.94a1.5 1.5 0 0 1 2.12 0z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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