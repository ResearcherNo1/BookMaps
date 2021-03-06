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
var id = 'qr_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="qr_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M19.5 19H21a.5.5 0 0 1 .5.5V21a.5.5 0 0 1-.5.5h-1.5a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 0 1 .5-.5zM14 19h1.5a.5.5 0 0 1 .5.5V21a.5.5 0 0 1-.5.5H14a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 0 1 .5-.5zm2.75-2.75h1.5a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-.5.5h-1.5a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 0 1 .5-.5zm2.75-2.75H21a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-.5.5h-1.5a.5.5 0 0 1-.5-.5V14a.5.5 0 0 1 .5-.5zm-5.5 0h1.5a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-.5.5H14a.5.5 0 0 1-.5-.5V14a.5.5 0 0 1 .5-.5zM4.5 13h4a2.5 2.5 0 0 1 2.5 2.5v4A2.5 2.5 0 0 1 8.5 22h-4A2.5 2.5 0 0 1 2 19.5v-4A2.5 2.5 0 0 1 4.5 13zm.25 1.75a1 1 0 0 0-1 1v3.5a1 1 0 0 0 1 1h3.5a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1h-3.5zm1 1.5h1.5a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-.5.5h-1.5a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 0 1 .5-.5zM15.5 2h4A2.5 2.5 0 0 1 22 4.5v4a2.5 2.5 0 0 1-2.5 2.5h-4A2.5 2.5 0 0 1 13 8.5v-4A2.5 2.5 0 0 1 15.5 2zm.25 1.75a1 1 0 0 0-1 1v3.5a1 1 0 0 0 1 1h3.5a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1h-3.5zm1 1.5h1.5a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-.5.5h-1.5a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 0 1 .5-.5zM4.5 2h4A2.5 2.5 0 0 1 11 4.5v4A2.5 2.5 0 0 1 8.5 11h-4A2.5 2.5 0 0 1 2 8.5v-4A2.5 2.5 0 0 1 4.5 2zm.25 1.75a1 1 0 0 0-1 1v3.5a1 1 0 0 0 1 1h3.5a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1h-3.5zm1 1.5h1.5a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-.5.5h-1.5a.5.5 0 0 1-.5-.5v-1.5a.5.5 0 0 1 .5-.5z" fill="currentColor" /></g></symbol>';

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