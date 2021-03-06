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
var id = 'recent_outline_56';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" id="recent_outline_56"><g fill="none" fill-rule="evenodd"><path d="M0 0h56v56H0z" /><path d="M28 4c13.255 0 24 10.745 24 24S41.255 52 28 52 4 41.255 4 28 14.745 4 28 4zm0 3C16.402 7 7 16.402 7 28s9.402 21 21 21 21-9.402 21-21S39.598 7 28 7zm-1.339 21.677l-.022-.047a1.505 1.505 0 0 1-.1-.285l-.007-.035a1.19 1.19 0 0 1-.023-.144A1.51 1.51 0 0 1 26.5 28l.004.109a1.502 1.502 0 0 1-.003-.056L26.5 18.5a1.5 1.5 0 0 1 3 0v8.634l8.776 5.067a1.5 1.5 0 0 1 .616 1.92l-.067.129a1.5 1.5 0 0 1-2.049.549l-9.526-5.5a1.528 1.528 0 0 1-.255-.185l-.03-.029a1.257 1.257 0 0 1-.064-.064l-.034-.038a1.216 1.216 0 0 1-.131-.175 1.861 1.861 0 0 1-.061-.105l-.014-.026z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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