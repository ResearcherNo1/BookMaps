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
var id = 'podcast_outline_20';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" id="podcast_outline_20"><g fill="none" fill-rule="evenodd"><path opacity=".4" d="M0 0h20v20H0z" /><path d="M10 5a4 4 0 0 1 4 4v3c0 1.953-1.4 3.578-3.25 3.93v1.32a.75.75 0 1 1-1.5 0v-1.32A4.001 4.001 0 0 1 6 12V9a4 4 0 0 1 4-4zm0 1.5A2.5 2.5 0 0 0 7.5 9v3a2.5 2.5 0 0 0 4.502 1.498 3.114 3.114 0 0 1-.13.002H10.45a.75.75 0 1 1 0-1.5h2.05v-1.5h-2.05a.75.75 0 1 1 0-1.5h2.05A2.5 2.5 0 0 0 10 6.5zM10 2a7.001 7.001 0 0 1 6.938 6.065A1.5 1.5 0 0 1 18 9.5v3a1.5 1.5 0 0 1-3 0v-3c0-.428.18-.815.468-1.088a5.499 5.499 0 0 0-5.247-4.908L10 3.5a5.5 5.5 0 0 0-5.469 4.912c.29.273.469.66.469 1.088v3a1.5 1.5 0 0 1-3 0v-3a1.5 1.5 0 0 1 1.062-1.435A7.002 7.002 0 0 1 10 2z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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