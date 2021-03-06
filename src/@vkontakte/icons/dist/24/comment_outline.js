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
var id = 'comment_outline_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="comment_outline_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M16.895 4h-9.79c-1.152 0-1.74.113-2.35.44A3.171 3.171 0 0 0 3.44 5.755c-.327.61-.44 1.198-.44 2.35v5.79c0 1.152.113 1.74.44 2.35.302.565.75 1.013 1.315 1.315l.14.071c.517.25 1.05.352 1.954.367L7.1 18v2.215c0 .432.17.846.472 1.155l.116.108a1.65 1.65 0 0 0 2.217-.085L13.366 18h3.53c1.151 0 1.738-.113 2.35-.44a3.171 3.171 0 0 0 1.314-1.315c.327-.61.44-1.198.44-2.35v-5.79c0-1.152-.113-1.74-.44-2.35a3.171 3.171 0 0 0-1.315-1.315c-.61-.327-1.198-.44-2.35-.44zM6.912 5.801l9.983-.001c.88 0 1.187.06 1.502.228.25.134.441.325.575.575.169.315.228.622.228 1.502v5.79l-.004.368c-.017.607-.081.867-.224 1.134-.134.25-.325.441-.575.575-.315.169-.622.228-1.502.228H13l-.117.008a.9.9 0 0 0-.513.25L8.9 19.856V17.1a.9.9 0 0 0-.9-.9h-.895l-.368-.004c-.607-.017-.867-.081-1.134-.224a1.372 1.372 0 0 1-.575-.575c-.169-.315-.228-.622-.228-1.502v-5.79l.004-.368c.017-.607.081-.867.224-1.134.134-.25.325-.441.575-.575.291-.156.574-.218 1.309-.227z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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