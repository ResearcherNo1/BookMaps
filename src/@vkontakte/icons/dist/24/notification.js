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
var id = 'notification_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="notification_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M12.001 22.5c-1.692 0-3-.875-3-2.5h6c0 1.625-1.307 2.5-3 2.5zm5.994-7.79c0 1.714 2.148 2.143 2.148 3 0 .857-.429 1.285-2.143 1.285H6c-1.714 0-2.143-.428-2.143-1.285S6 16.424 6 14.71v-3c0-4.286 1.714-7.853 5.143-7.853 0-.643.428-.857.857-.857s.857.214.857.857c3.429 0 5.138 3.567 5.138 7.853v3z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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