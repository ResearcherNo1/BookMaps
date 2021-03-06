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
var id = 'list_like_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="list_like_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M21.46 12c2.5 0 4.54 1.99 4.54 4.46 0 2.323-.913 3.5-4.426 6.192l-1.464 1.112a2.663 2.663 0 0 1-3.058.114l-.162-.114-1.51-1.147-.57-.443C11.804 19.812 11 18.64 11 16.46c0-2.47 2.04-4.46 4.54-4.46.929 0 1.784.292 2.55.85l.207.158.202.172.217-.183c.667-.534 1.406-.862 2.204-.963l.268-.025.273-.009zm.063 1.999l-.224.007-.186.02a2.283 2.283 0 0 0-.937.375l-.173.127-1.19 1a.5.5 0 0 1-.646-.002l-1.126-.962c-.477-.385-.964-.564-1.502-.564C14.13 14 13 15.108 13 16.46c0 1.408.447 2.112 3.072 4.164l.518.4 1.509 1.147a.663.663 0 0 0 .71.059l.092-.06 1.692-1.286C23.524 18.624 24 17.91 24 16.46c0-1.298-1.042-2.371-2.317-2.456l-.16-.005zM8 18a1 1 0 0 1 0 2H4.5a1 1 0 0 1 0-2H8zm.5-6a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2h4zm13-6a1 1 0 0 1 0 2h-17a1 1 0 1 1 0-2h17z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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