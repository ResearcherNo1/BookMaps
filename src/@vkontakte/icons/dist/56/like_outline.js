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

var viewBox = '0 0 56 56';
var id = 'like_outline_56';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" id="like_outline_56"><g fill="none" fill-rule="evenodd"><path d="M0 0h56v56H0z" /><path d="M18.29 11C11.501 11 6 16.502 6 23.29c0 6.865 2.752 10.308 14.455 19.41l5.396 4.198a3.5 3.5 0 0 0 4.298 0l5.396-4.197C47.248 33.598 50 30.155 50 23.289 50 16.502 44.498 11 37.71 11c-3.66 0-6.91 1.736-9.71 5.098C25.2 12.736 21.95 11 18.29 11zm0 3c3.129 0 5.933 1.756 8.476 5.434l.206.297a1.25 1.25 0 0 0 2.056 0l.206-.297C31.777 15.756 34.58 14 37.71 14A9.29 9.29 0 0 1 47 23.29c0 5.616-2.29 8.482-13.297 17.043l-5.396 4.197a.5.5 0 0 1-.614 0l-5.396-4.197C11.29 31.772 9 28.906 9 23.289A9.29 9.29 0 0 1 18.29 14z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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
    width: !isNaN(props.width) ? +props.width : 56,
    height: !isNaN(props.height) ? +props.height : 56
  }));
}

var _default = Icon;
exports.default = _default;