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
var id = 'song_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="song_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M13 11.485v5.648c0 4.513-.875 5.384-4.374 5.842C6.957 23.195 5 22.437 5 19.814c0-1.282.802-2.498 2.461-2.816 1.267-.243-.09.018 2.776-.515.696-.129.775-.378.775-.908l-.002-4.194h-.008V7.063s-.005-2.058 0-3.088c.007-1.23.68-1.683 2.664-2.084 0 0 3.023-.573 4.685-.875.368-.067.649.07.649.492 0 0-.01 2.622 0 4.054.003.416-.168.605-.59.68l-4.865.86c-.374.092-.545.355-.545.733v3.65z" fill="currentColor" /></g></symbol>';

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