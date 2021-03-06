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
var id = 'airplay_video_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="airplay_video_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M12.5 15.375a2.5 2.5 0 0 1 3 0L21 19.5a2.5 2.5 0 0 1-1.5 4.5h-11A2.5 2.5 0 0 1 7 19.5zm1.8 1.6a.5.5 0 0 0-.6 0L8.2 21.1a.5.5 0 0 0 .3.9h11a.5.5 0 0 0 .3-.9zM20 4a5 5 0 0 1 4.995 4.783L25 9v6c0 1.235-.45 2.403-1.252 3.31a1 1 0 0 1-1.499-1.325c.433-.49.695-1.104.743-1.764L23 15V9a3 3 0 0 0-2.824-2.995L20 6H8a3 3 0 0 0-2.995 2.824L5 9v6c0 .742.269 1.44.75 1.984a1 1 0 0 1-1.5 1.324 4.982 4.982 0 0 1-1.243-3.045L3 15V9a5 5 0 0 1 4.783-4.995L8 4h12z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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