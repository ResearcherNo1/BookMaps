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
var id = 'comment_outline_20';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" id="comment_outline_20"><g fill="none" fill-rule="evenodd"><path opacity=".4" d="M0 0h20v20H0z" /><path d="M6.25 15.75H5c-1.654 0-2.75-1.09-2.75-2.75V6c0-1.66 1.096-2.75 2.75-2.75h10c1.654 0 2.75 1.09 2.75 2.75v7c0 1.66-1.096 2.75-2.75 2.75h-3.678L8.77 18.444c-.611.618-1.334.77-1.914.33-.389-.295-.605-.814-.605-1.274v-1.75zm4.058-1.11a1.25 1.25 0 0 1 .907-.39H15c.827 0 1.25-.42 1.25-1.25V6c0-.83-.423-1.25-1.25-1.25H5c-.827 0-1.25.42-1.25 1.25v7c0 .83.423 1.25 1.25 1.25h1.999a.75.75 0 0 1 .53.22l.078.09a.75.75 0 0 1 .143.441v2.337l2.558-2.698z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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