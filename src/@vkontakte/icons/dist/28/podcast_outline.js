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
var id = 'podcast_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="podcast_outline_28"><g fill-rule="nonzero" fill="none"><path d="M0 0h28v28H0z" /><path d="M14 6a6 6 0 0 1 6 6v6a6.002 6.002 0 0 1-5 5.917V25.5a1 1 0 0 1-2 0v-1.583A6.002 6.002 0 0 1 8 18v-6a6 6 0 0 1 6-6zm0 2a4 4 0 0 0-4 4h2.5a1 1 0 0 1 0 2H10v2h2.5a1 1 0 0 1 0 2H10a4 4 0 1 0 8 0h-1a1 1 0 0 1-.117-1.993L17 16h1v-2h-1a1 1 0 0 1-.117-1.993L17 12h1a4 4 0 0 0-4-4zm0-6c5.19 0 9.456 3.953 9.952 9.012.87.1 1.548.84 1.548 1.738v4.5a1.75 1.75 0 0 1-3.5 0V12a8 8 0 1 0-16 0v5.25a1.75 1.75 0 0 1-3.5 0v-4.5a1.75 1.75 0 0 1 1.549-1.739C4.544 5.953 8.81 2 14 2z" fill="currentColor" /></g></symbol>';

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