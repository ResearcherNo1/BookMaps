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
var id = 'headphones_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="headphones_outline_28"><g fill-rule="nonzero" fill="none"><path opacity=".216" d="M0 0h28v28H0z" /><path d="M5 21.059v-3.231a1.941 1.941 0 0 1 3.882 0v3.23a1.941 1.941 0 1 1-3.882 0zm0-1.628v-5.034a3.94 3.94 0 0 0-2 3.43v3.232a3.941 3.941 0 1 0 7.882 0v-3.231A3.941 3.941 0 0 0 5 14.397V14a9 9 0 1 1 18 0v.397a3.941 3.941 0 0 0-5.882 3.43v3.232a3.941 3.941 0 1 0 7.882 0v-3.231a3.94 3.94 0 0 0-2-3.431v4.9a1 1 0 0 0 2 0V14c0-6.075-4.925-11-11-11S3 7.925 3 14v5.43a1 1 0 0 0 2 0zm18-1.603v3.23a1.941 1.941 0 1 1-3.882 0v-3.23a1.941 1.941 0 0 1 3.882 0z" fill="currentColor" /></g></symbol>';

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