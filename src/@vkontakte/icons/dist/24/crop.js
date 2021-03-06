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

var viewBox = '0 0 24 24';
var id = 'crop_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="crop_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M17 19.7a.9.9 0 0 1 .893.787l.007.113v.705a.9.9 0 0 1-1.793.113l-.007-.113V20.6a.9.9 0 0 1 .9-.9zM7 1.997a.9.9 0 0 1 .893.788l.007.112V7l-.001.013L7.9 15.5a.6.6 0 0 0 .503.592l.097.008h7.601l.01-7.6a.6.6 0 0 0-.502-.592L15.51 7.9H10.6a.9.9 0 1 1 0-1.8h4.914a2.4 2.4 0 0 1 2.391 2.239l.006.164-.011 7.596 3.2.001a.9.9 0 0 1 .113 1.793l-.113.007H8.5a2.4 2.4 0 0 1-2.394-2.236L6.1 15.5l-.001-7.6H2.908A.904.904 0 0 1 2 7c0-.459.346-.837.794-.893l.114-.007h3.191L6.1 2.896a.9.9 0 0 1 .9-.9z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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
    width: !isNaN(props.width) ? +props.width : 24,
    height: !isNaN(props.height) ? +props.height : 24
  }));
}

var _default = Icon;
exports.default = _default;