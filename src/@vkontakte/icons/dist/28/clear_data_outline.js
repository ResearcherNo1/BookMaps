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
var id = 'clear_data_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="clear_data_outline_28"><g fill="none" fill-rule="evenodd"><path d="M28 0H0v28h28z" /><g fill-rule="nonzero"><path d="M0 0h28v28H0z" /><path d="M25.207 2.793a1 1 0 0 1 0 1.414l-2.191 2.191a5 5 0 0 1-.636 6.292l-.374.374c.348 4.356-1.192 8.26-4.575 11.643a1 1 0 0 1-.97.258c-2.775-.757-5.513-2.5-8.22-5.206-2.707-2.707-4.449-5.445-5.206-8.22a1 1 0 0 1 .258-.97c3.383-3.383 7.286-4.922 11.642-4.575l.375-.374a5 5 0 0 1 6.29-.636l2.193-2.191a1 1 0 0 1 1.414 0zm-5.2 10.352l-5.152-5.152-.371-.026c-3.462-.2-6.56.99-9.352 3.604.735 2.228 2.237 4.488 4.523 6.774 2.286 2.286 4.546 3.788 6.774 4.523 2.707-2.89 3.887-6.111 3.577-9.723zm.959-6.11a3 3 0 0 0-4.242 0l4.242 4.24a3 3 0 0 0 0-4.24z" fill="currentColor" /></g></g></symbol>';

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