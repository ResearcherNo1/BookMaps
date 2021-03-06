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
var id = 'tag_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="tag_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M23.353 19.01l-4.661 4.6a4.856 4.856 0 0 1-6.822 0l-6.915-6.825A6.57 6.57 0 0 1 3 12.11V7.856A4.856 4.856 0 0 1 7.856 3h4.407a6.57 6.57 0 0 1 4.615 1.894l6.475 6.391a5.427 5.427 0 0 1 .05 7.675l-.05.05zm-1.405-1.423l.032-.032a3.427 3.427 0 0 0-.032-4.846l-6.475-6.392A4.57 4.57 0 0 0 12.263 5H7.856A2.856 2.856 0 0 0 5 7.856v4.254a4.57 4.57 0 0 0 1.36 3.252l6.915 6.825a2.856 2.856 0 0 0 4.012 0l4.661-4.6zM10 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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