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
var id = 'place_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="place_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M23 12.015C23 7.036 18.971 3 14 3s-9 4.036-9 9.015c0 3.548 2.18 7.83 6.48 12.915a3.3 3.3 0 0 0 5.04 0c4.3-5.085 6.48-9.367 6.48-12.915zm-8.16 11.777a1.3 1.3 0 0 1-1.833-.153C8.983 18.88 7 14.983 7 12.015 7 8.14 10.134 5 14 5s7 3.14 7 7.015c0 2.968-1.983 6.866-6.007 11.624a1.3 1.3 0 0 1-.153.153zM10 12a4 4 0 1 1 8.001.001A4 4 0 0 1 10 12zm2 0a2 2 0 1 0 4.001-.001A2 2 0 0 0 12 12z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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