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
var id = 'reply_outline_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="reply_outline_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M12.227 3.725a2.15 2.15 0 0 1 1.997 2.145v2.117l.021.005a9.904 9.904 0 0 1 7.826 10.721c-.083.811-1.115 1.103-1.61.455l-.187-.237a9.082 9.082 0 0 0-5.836-3.265l-.213-.026-.001 2.494a2.15 2.15 0 0 1-3.477 1.692l-7.823-6.132a2.15 2.15 0 0 1 0-3.384l7.823-6.132a2.15 2.15 0 0 1 1.327-.458zm-.153 1.795a.35.35 0 0 0-.216.075l-7.824 6.132a.35.35 0 0 0 0 .55l7.824 6.133a.35.35 0 0 0 .566-.276v-3.447a.9.9 0 0 1 .916-.9l.233.004.342.017a10.88 10.88 0 0 1 6.118 2.365l.175.144-.024-.135a8.103 8.103 0 0 0-6.968-6.537.9.9 0 0 1-.791-.893l-.001-2.882a.35.35 0 0 0-.35-.35z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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