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

var viewBox = '0 0 20 20';
var id = 'music_outline_20';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" id="music_outline_20"><g fill="none" fill-rule="evenodd"><path d="M0 0h20v20H0z" /><path d="M14.733 2.048a2.28 2.28 0 0 1 2.746 2.233v7.985c0 3.575-3.491 5.413-5.387 3.517-1.895-1.895-.058-5.387 3.517-5.387h.37V6.765L8.004 8.434v5.815c0 3.505-3.356 5.34-5.274 3.624l-.113-.107c-1.895-1.896-.058-5.387 3.517-5.387l.37-.001V6.231c0-.64.047-1.004.183-1.357l.055-.133c.169-.377.425-.692.76-.934.354-.256.705-.39 1.409-.537zm-8.23 11.83h-.37c-2.319 0-3.34 1.942-2.455 2.827.885.885 2.826-.137 2.826-2.456v-.37zm9.476-1.982h-.37c-2.32 0-3.341 1.942-2.456 2.827.885.885 2.826-.137 2.826-2.457v-.37zm-.017-7.774a.78.78 0 0 0-.922-.605L9.058 4.772c-.392.088-.536.149-.677.25a.802.802 0 0 0-.27.332c-.08.178-.107.35-.107.877v.67l7.975-1.668v-.952a.78.78 0 0 0-.004-.08z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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
    width: !isNaN(props.width) ? +props.width : 20,
    height: !isNaN(props.height) ? +props.height : 20
  }));
}

var _default = Icon;
exports.default = _default;