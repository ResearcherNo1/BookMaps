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
var id = 'delete_outline_android_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="delete_outline_android_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M22 10v10.5a4.5 4.5 0 0 1-4.5 4.5h-7A4.5 4.5 0 0 1 6 20.5V10h-.71A1.29 1.29 0 0 1 4 8.71V7.25A2.75 2.75 0 0 1 6.75 4.5h1.651A3.001 3.001 0 0 1 11 3h6c1.097 0 2.075.593 2.599 1.5h1.651A2.75 2.75 0 0 1 24 7.25v1.46A1.29 1.29 0 0 1 22.71 10H22zm-1-2h1v-.75a.75.75 0 0 0-.75-.75h-2.313a1 1 0 0 1-.968-.75A1 1 0 0 0 17 5h-6a1 1 0 0 0-.969.75 1 1 0 0 1-.968.75H6.75a.75.75 0 0 0-.75.75V8h15zM8 10v10.5a2.5 2.5 0 0 0 2.5 2.5h7a2.5 2.5 0 0 0 2.5-2.5V10H8z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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