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
var id = 'shuffle_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="shuffle_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M19 15v-1.233a.502.502 0 0 1 .808-.4l2.92 2.234a.502.502 0 0 1 0 .798l-2.92 2.233a.502.502 0 0 1-.808-.399V17h-3.5c-1.702 0-2.746-.844-4.5-3.262C9.246 16.156 8.202 17 6.5 17H4a1 1 0 0 1 0-2h2.5c.893 0 1.706-.763 3.282-3C8.206 9.763 7.392 9 6.5 9H4a1 1 0 1 1 0-2h2.5c1.702 0 2.746.844 4.5 3.262C12.754 7.844 13.798 7 15.5 7H19V5.767a.502.502 0 0 1 .808-.4l2.92 2.234a.502.502 0 0 1 0 .798l-2.92 2.233a.502.502 0 0 1-.808-.399V9h-3.5c-.893 0-1.706.763-3.282 3 1.576 2.237 2.39 3 3.282 3H19z" fill="currentColor" /></g></symbol>';

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