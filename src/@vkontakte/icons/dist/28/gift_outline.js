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
var id = 'gift_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="gift_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M12.436 3.693c.629.426 1.156 1.017 1.565 1.756.408-.74.935-1.33 1.564-1.756 1.49-1.01 3.376-.902 4.51.232 1.135 1.135 1.242 3.02.233 4.51a4.577 4.577 0 0 1-.453.565H21c.799 0 1.51.178 2.102.504.593.326 1.067.801 1.393 1.394C24.822 11.49 25 12.2 25 13v.429c0 1.007-.14 1.547-.4 2.036a2.726 2.726 0 0 1-1.135 1.134 2.986 2.986 0 0 1-.463.201L23 19.872c0 1.783-.186 2.43-.534 3.081a3.635 3.635 0 0 1-1.512 1.512c-.652.349-1.299.535-3.082.535h-7.744c-1.783 0-2.43-.186-3.082-.535a3.635 3.635 0 0 1-1.512-1.512C5.186 22.301 5 21.655 5 19.872V16.8a2.986 2.986 0 0 1-.465-.202A2.726 2.726 0 0 1 3.4 15.465c-.24-.448-.377-.94-.398-1.794L3 13c0-.8.178-1.51.505-2.102.326-.593.8-1.068 1.393-1.394C5.491 9.178 6.201 9 7 9h1.146a4.577 4.577 0 0 1-.453-.565c-1.01-1.49-.902-3.375.233-4.51 1.134-1.134 3.02-1.242 4.51-.232zM13 16.999H7v2.873c0 1.323.078 1.727.298 2.138.162.303.388.53.692.692.411.22.814.298 2.138.298L13 22.999v-6zm2 0v6h2.872c1.324 0 1.727-.077 2.138-.297.304-.163.53-.389.692-.692.22-.411.298-.815.298-2.138V17l-6-.001zm-2-6H7c-.458 0-.84.093-1.137.257a1.51 1.51 0 0 0-.607.606C5.092 12.16 5 12.542 5 13l.002.609c.009.506.06.722.162.913.075.14.174.238.314.313.21.113.45.164 1.075.165L13 14.999v-4zm8 0h-6v4h6.446l.163-.001c.506-.01.722-.06.913-.163a.727.727 0 0 0 .314-.313c.102-.191.153-.407.162-.913l.002-.61c0-.458-.092-.839-.256-1.137a1.51 1.51 0 0 0-.607-.606C21.84 11.092 21.458 11 21 11zm-6-2c3.65-.35 4.695-2.704 3.7-3.7-.995-.995-3.35.05-3.7 3.7zM9.301 5.3c-.995.996.05 3.35 3.7 3.7-.35-3.65-2.705-4.695-3.7-3.7z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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