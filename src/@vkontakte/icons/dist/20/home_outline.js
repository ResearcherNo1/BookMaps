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
var id = 'home_outline_20';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" id="home_outline_20"><g fill="none" fill-rule="evenodd"><path opacity=".4" d="M0 0h20v20H0z" /><path d="M3 10.999h-.04l-.182-.011a2.045 2.045 0 0 1-1.109-3.585L8.21 1.796a2.75 2.75 0 0 1 3.58 0l6.54 5.607A2.045 2.045 0 0 1 17 11v4.25a2.25 2.25 0 0 1-2.25 2.25h-2.8a.95.95 0 0 1-.95-.95V13.5a1 1 0 0 0-2 0v3.05a.95.95 0 0 1-.95.95h-2.8A2.25 2.25 0 0 1 3 15.25v-4.251zM14.75 16a.75.75 0 0 0 .75-.75v-4.9c0-.47.38-.85.85-.85H17a.545.545 0 0 0 .355-.958l-6.542-5.607a1.25 1.25 0 0 0-1.626 0L2.645 8.542a.545.545 0 0 0-.059.768c.09.105.217.172.314.183L3 9.5h.65c.47 0 .85.38.85.85v4.9c0 .414.336.75.75.75H7.5v-2.5a2.5 2.5 0 1 1 5 0V16h2.25z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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