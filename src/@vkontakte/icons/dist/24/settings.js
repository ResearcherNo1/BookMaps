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
var id = 'settings_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="settings_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M9.127 5.052c1.256-.72 1.473-1.469 1.623-2.219.167-.833.417-.833.833-.833h.834c.416 0 .583 0 .833.833.225.751.383 1.502 1.631 2.223 1.397.379 2.08.002 2.717-.422.707-.471.884-.294 1.178 0l.59.59c.294.294.412.412 0 1.178-.372.69-.791 1.333-.418 2.725.72 1.256 1.469 1.473 2.219 1.623.833.167.833.417.833.833v.834c0 .416 0 .583-.833.833-.751.225-1.502.383-2.223 1.631-.379 1.397-.002 2.08.422 2.717.471.707.294.884 0 1.178l-.59.59c-.294.294-.412.412-1.178 0-.69-.372-1.333-.791-2.725-.418-1.256.72-1.473 1.469-1.623 2.219-.167.833-.417.833-.833.833h-.834c-.416 0-.583 0-.833-.833-.225-.751-.383-1.502-1.631-2.223-1.397-.379-2.08-.002-2.717.422-.707.471-.884.294-1.178 0l-.59-.59c-.294-.294-.412-.412 0-1.178.372-.69.791-1.333.418-2.725-.72-1.256-1.469-1.473-2.219-1.623C2 13.083 2 12.833 2 12.417v-.834c0-.416 0-.583.833-.833.751-.225 1.502-.383 2.223-1.631.379-1.397.002-2.08-.422-2.717-.471-.707-.294-.884 0-1.178l.59-.59c.294-.294.412-.412 1.178 0 .69.372 1.333.791 2.725.418zM12 16.75a4.75 4.75 0 1 0 0-9.5 4.75 4.75 0 0 0 0 9.5z" fill="currentColor" /></g></symbol>';

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