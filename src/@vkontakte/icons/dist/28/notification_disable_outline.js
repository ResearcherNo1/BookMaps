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
var id = 'notification_disable_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="notification_disable_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M4.293 4.293a1 1 0 0 1 1.414 0l18.385 18.385a1 1 0 0 1-1.414 1.414l-2.596-2.595A1.014 1.014 0 0 1 20 21.5h-1.601C17.73 23.766 16.212 25 14 25s-3.731-1.235-4.399-3.5H7c-1.665 0-2.758-.574-3.242-1.604-.21-.446-.258-.809-.258-1.308 0-1.113.425-1.83 1.493-3.068.139-.16.203-.235.27-.314.539-.635.737-.99.737-1.299V12.08c0-1.36.283-2.67.818-3.845L4.293 5.707a1 1 0 0 1 0-1.414zM16.279 21.5h-4.558C12.17 22.543 12.899 23 14 23s1.829-.457 2.28-1.5zM14.005 3.5C18.535 3.5 22 7.294 22 12.081l-.005 1.826c0 .308.199.663.739 1.298.067.08.13.154.27.314.804.93 1.163 1.45 1.376 2.208.079.282.12.569.12.861a1 1 0 0 1-2 0c0-.106-.015-.21-.046-.32-.106-.378-.35-.731-.963-1.44l-.282-.328c-.828-.976-1.214-1.665-1.214-2.595L20 12.079C20 8.36 17.389 5.5 14.005 5.5a5.683 5.683 0 0 0-2.92.79 1 1 0 1 1-1.019-1.72 7.683 7.683 0 0 1 3.939-1.07zm4.081 16L8.361 9.776C8.124 10.499 8 11.275 8 12.079v1.828c0 .928-.384 1.617-1.212 2.592a44.99 44.99 0 0 1-.28.328c-.76.88-1.008 1.298-1.008 1.761 0 .226.016.347.068.457.124.264.488.455 1.432.455h11.086z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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