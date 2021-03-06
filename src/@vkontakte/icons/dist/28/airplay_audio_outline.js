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
var id = 'airplay_audio_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="airplay_audio_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M12.5 15.375a2.5 2.5 0 0 1 3 0L21 19.5a2.5 2.5 0 0 1-1.5 4.5h-11A2.5 2.5 0 0 1 7 19.5zm1.8 1.6a.5.5 0 0 0-.6 0L8.2 21.1a.5.5 0 0 0 .3.9h11a.5.5 0 0 0 .3-.9zM13.8 3c5.412 0 9.8 4.388 9.8 9.8 0 1.387-.29 2.736-.841 3.978a1 1 0 0 1-1.828-.813c.44-.987.669-2.059.669-3.165a7.8 7.8 0 1 0-14.838 3.368 1 1 0 0 1-1.803.864A9.765 9.765 0 0 1 4 12.8C4 7.388 8.388 3 13.8 3zm0 4a5.8 5.8 0 0 1 5.723 6.75l-.076.377a1 1 0 1 1-1.947-.456l.01-.044a3.8 3.8 0 1 0-7.442-.106l.068.29.01.033a1 1 0 1 1-1.924.549l-.038-.14A5.8 5.8 0 0 1 13.8 7z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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