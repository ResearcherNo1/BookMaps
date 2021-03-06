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
var id = 'bug_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="bug_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M20.301 3.043a1 1 0 0 1-.05 1.413l-1.327 1.238a8.04 8.04 0 0 1 2.008 2.31L21 8h3a1 1 0 0 1 .117 1.993L24 10h-2.252c.164.639.252 1.31.252 2v2h4a1 1 0 0 1 .993.883L27 15a1 1 0 0 1-.883.993L26 16h-4v2c0 .69-.088 1.361-.252 2H24a1 1 0 0 1 .117 1.993L24 22h-3l-.07-.002A7.995 7.995 0 0 1 14 26a7.997 7.997 0 0 1-6.932-4.004L7 22H4a1 1 0 0 1-.117-1.993L4 20h2.252A8.014 8.014 0 0 1 6 18v-2H2a1 1 0 0 1-.993-.883L1 15a1 1 0 0 1 .883-.993L2 14h4v-2c0-.69.088-1.361.252-2H4a1 1 0 0 1-.117-1.993L4 8h3l.069.002a8.035 8.035 0 0 1 2.016-2.315l-1.32-1.231a1 1 0 0 1 1.267-1.543l.097.08 1.755 1.636A7.976 7.976 0 0 1 14 4c1.11 0 2.167.226 3.128.635l1.76-1.642a1 1 0 0 1 1.413.05zM14 6a6 6 0 0 0-6 6v6a6 6 0 1 0 12 0v-6a6 6 0 0 0-6-6zm1 11a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2h2zm-2-6h2a1 1 0 0 1 .117 1.993L15 13h-2a1 1 0 0 1-.117-1.993L13 11h2-2z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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