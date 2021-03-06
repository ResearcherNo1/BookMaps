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
var id = 'play_speed_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="play_speed_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M16.179 2.197a12.003 12.003 0 0 1-.001 23.606 1 1 0 0 1-.361-1.967 10.003 10.003 0 0 0 0-19.671 1 1 0 1 1 .362-1.968zM6.375 20.47a10.005 10.005 0 0 0 5.802 3.364 1 1 0 0 1-.362 1.967 12.005 12.005 0 0 1-6.964-4.036 1 1 0 1 1 1.524-1.295zM3.992 9.32a1 1 0 0 1 .6 1.28A9.98 9.98 0 0 0 4 14c0 1.127.186 2.228.547 3.27a1 1 0 0 1-1.89.654A11.984 11.984 0 0 1 2 14c0-1.407.243-2.783.712-4.08a1 1 0 0 1 1.28-.6zm8.208.759a.8.8 0 0 1 .397.105l5.462 3.121a.8.8 0 0 1 0 1.39l-5.462 3.121a.8.8 0 0 1-1.197-.695V10.88a.8.8 0 0 1 .8-.8zM12.981 3a1 1 0 0 1-.802 1.164 9.987 9.987 0 0 0-5.747 3.298 1 1 0 1 1-1.513-1.308 11.987 11.987 0 0 1 6.898-3.957 1 1 0 0 1 1.164.803z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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