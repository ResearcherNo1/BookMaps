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
var id = 'palette_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="palette_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M14 2.333c6.428 0 11.667 4.714 11.667 10.5 0 3.862-3.139 7-7 7h-2.065a.578.578 0 0 0-.584.584c0 .14.059.268.152.385.478.548.747 1.236.747 1.948A2.918 2.918 0 0 1 14 25.667C7.572 25.667 2.333 20.428 2.333 14S7.572 2.333 14 2.333zm-.005 1.997c-5.328 0-9.665 4.337-9.665 9.665 0 5.328 4.337 9.665 9.665 9.665a.598.598 0 0 0 .604-.604.653.653 0 0 0-.17-.423 3 3 0 0 1-.76-1.993 3.021 3.021 0 0 1 3.02-3.02h2.139a4.831 4.831 0 0 0 4.832-4.833c0-4.663-4.337-8.457-9.665-8.457zm-6.412 7.337a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5zm12.834 0a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5zM11.083 7a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5zm5.834 0a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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