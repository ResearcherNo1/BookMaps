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
var id = 'attach_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="attach_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M14.189 10.897a1 1 0 1 1 1.414 1.414l-4.172 4.172a1.504 1.504 0 0 0 0 2.121c.6.6 1.554.567 2.121 0l7.778-7.778c1.602-1.601 1.514-4.143 0-5.657-1.514-1.514-4.055-1.601-5.656 0l-7.779 7.779c-2.55 2.55-2.503 6.689 0 9.192s6.642 2.55 9.193 0l4.172-4.172a1 1 0 0 1 1.414 1.414l-4.172 4.172c-3.34 3.34-8.744 3.277-12.02 0-3.278-3.277-3.34-8.682 0-12.02l7.777-7.779c2.406-2.405 6.212-2.274 8.486 0 2.274 2.274 2.405 6.08 0 8.485l-7.779 7.779c-1.327 1.327-3.546 1.403-4.95 0-1.403-1.404-1.326-3.623 0-4.95l4.173-4.172z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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