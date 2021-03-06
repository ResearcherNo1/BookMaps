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
var id = 'logo_google_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="logo_google_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M12.179 2.008c2.512-.114 4.874.96 6.798 2.468-.82.917-1.671 1.8-2.58 2.627-2.313-1.571-5.603-2.02-7.916-.206-3.31 2.249-3.46 7.558-.277 9.979 3.095 2.76 8.763 1.432 9.76-2.376-1.69-.029-4.047.062-5.986 0a483.28 483.28 0 0 1 0-3.75c3.241-.01 6.731-.024 9.977 0 .195 2.674-.212 5.348-1.884 7.558-2.532 3.5-7.615 4.521-11.58 3.022-3.98-1.49-6.8-5.62-6.464-9.83.088-5.152 4.908-9.663 10.152-9.492z" fill="currentColor" /></g></symbol>';

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