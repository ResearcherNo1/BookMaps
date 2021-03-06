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

var viewBox = '0 0 24 24';
var id = 'chats_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="chats_24"><g fill="none"><path d="M0 0h24v24H0z" /><path d="M18.201 7.507C21.018 8.517 23 10.932 23 13.75c0 1.837-.843 3.503-2.211 4.718.146.703.472 1.58.977 2.633l.147.3.029.076a.4.4 0 0 1-.48.491c-1.794-.428-3.123-1.011-3.986-1.75a8.82 8.82 0 0 1-2.226.282c-2.786 0-5.228-1.28-6.594-3.202l.094.002c5.223 0 9.55-3.768 9.55-8.55 0-.423-.034-.838-.099-1.243zM8.75 2c4.28 0 7.75 3.022 7.75 6.75s-3.47 6.75-7.75 6.75a8.82 8.82 0 0 1-2.226-.283c-.863.74-2.192 1.323-3.986 1.751a.4.4 0 0 1-.48-.491l.029-.076.147-.3c.505-1.052.831-1.93.977-2.633C1.843 12.253 1 10.588 1 8.75 1 5.022 4.47 2 8.75 2z" fill="currentColor" /></g></symbol>';

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
    width: !isNaN(props.width) ? +props.width : 24,
    height: !isNaN(props.height) ? +props.height : 24
  }));
}

var _default = Icon;
exports.default = _default;