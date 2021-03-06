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
var id = 'coins_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="coins_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M4.047 11.456C5.874 13.61 8.757 15 12 15c3.243 0 6.126-1.39 7.953-3.544.031.179.047.36.047.544 0 2.761-3.582 5-8 5s-8-2.239-8-5c0-.184.016-.365.047-.544zm0 4C5.874 17.61 8.757 19 12 19c3.243 0 6.126-1.39 7.953-3.544.031.179.047.36.047.544 0 2.761-3.582 5-8 5s-8-2.239-8-5c0-.184.016-.365.047-.544zM12 13c-4.418 0-8-2.239-8-5s3.582-5 8-5 8 2.239 8 5-3.582 5-8 5z" fill="currentColor" /></g></symbol>';

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