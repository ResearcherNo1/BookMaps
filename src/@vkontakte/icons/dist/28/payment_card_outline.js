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
var id = 'payment_card_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="payment_card_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M19.59 4c2.23 0 3.037.232 3.852.668a4.543 4.543 0 0 1 1.89 1.89c.436.815.668 1.623.668 3.852v7.18c0 2.23-.232 3.037-.668 3.852a4.543 4.543 0 0 1-1.89 1.89c-.815.436-1.623.668-3.852.668H8.41c-2.23 0-3.037-.232-3.852-.668a4.543 4.543 0 0 1-1.89-1.89C2.232 20.627 2 19.82 2 17.59v-7.18c0-2.23.232-3.037.668-3.852a4.543 4.543 0 0 1 1.89-1.89C5.373 4.232 6.18 4 8.41 4h11.18zM24 13h-20L4 18.154c0 1.337.14 1.822.4 2.311.262.49.646.873 1.135 1.134.458.245.913.383 2.07.4l.24.001h12.31c1.336 0 1.821-.14 2.31-.4a2.726 2.726 0 0 0 1.134-1.135c.245-.458.383-.913.4-2.07l.001-.24L23.999 13zM8.745 16c.413 0 .58.046.743.134.163.087.291.215.378.378.088.163.134.33.134.743v.49c0 .413-.046.58-.134.743a.909.909 0 0 1-.378.378c-.163.088-.33.134-.743.134h-.49c-.413 0-.58-.046-.743-.134a.909.909 0 0 1-.378-.378c-.088-.163-.134-.33-.134-.743v-.49c0-.413.046-.58.134-.743a.909.909 0 0 1 .378-.378c.163-.088.33-.134.743-.134h.49zm11.41-10H7.844c-1.336 0-1.821.14-2.31.4A2.726 2.726 0 0 0 4.4 7.536c-.245.458-.383.913-.4 2.07L4 9.845 3.999 10h20L24 9.846c0-1.337-.14-1.822-.4-2.311A2.726 2.726 0 0 0 22.464 6.4c-.458-.245-.913-.383-2.07-.4L20.155 6z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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