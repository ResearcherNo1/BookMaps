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
var id = 'share_outline_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="share_outline_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M11.996 3.725A2.15 2.15 0 0 0 10 5.87l-.001 2.117-.02.005a9.904 9.904 0 0 0-7.827 10.721c.083.811 1.116 1.103 1.611.455l.187-.237a9.082 9.082 0 0 1 5.836-3.265l.213-.026.001 2.494a2.15 2.15 0 0 0 3.476 1.692l7.824-6.132a2.15 2.15 0 0 0 0-3.384l-7.824-6.132a2.15 2.15 0 0 0-1.326-.458zm.154 1.795a.35.35 0 0 1 .216.075l7.824 6.132a.35.35 0 0 1 0 .55l-7.824 6.133a.35.35 0 0 1-.566-.276l-.001-3.447a.9.9 0 0 0-.915-.9l-.233.004-.342.017a10.88 10.88 0 0 0-6.119 2.365l-.174.144.024-.135a8.103 8.103 0 0 1 6.968-6.537.9.9 0 0 0 .791-.893L11.8 5.87a.35.35 0 0 1 .35-.35z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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