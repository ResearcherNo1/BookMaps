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

var viewBox = '0 0 8 16';
var id = 'more_vertical_16';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 16" id="more_vertical_16"><g fill="none" fill-rule="evenodd"><path d="M0 0h8v16H0z" /><path d="M4 4.5c.825 0 1.5-.675 1.5-1.5S4.825 1.5 4 1.5 2.5 2.175 2.5 3 3.175 4.5 4 4.5zm0 2c-.825 0-1.5.675-1.5 1.5S3.175 9.5 4 9.5 5.5 8.825 5.5 8 4.825 6.5 4 6.5zm0 5c-.825 0-1.5.675-1.5 1.5s.675 1.5 1.5 1.5 1.5-.675 1.5-1.5-.675-1.5-1.5-1.5z" fill="currentColor" /></g></symbol>';

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
    width: !isNaN(props.width) ? +props.width : 8,
    height: !isNaN(props.height) ? +props.height : 16
  }));
}

var _default = Icon;
exports.default = _default;