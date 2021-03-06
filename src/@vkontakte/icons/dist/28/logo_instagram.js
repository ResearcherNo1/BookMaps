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
var id = 'logo_instagram_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="logo_instagram_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M15.096 3c2.01.004 2.428.02 3.44.066 1.17.054 1.97.24 2.67.512a5.392 5.392 0 0 1 1.948 1.268 5.392 5.392 0 0 1 1.269 1.949c.271.7.457 1.499.51 2.67.047 1.011.063 1.429.066 3.439v2.192c-.003 2.01-.019 2.428-.065 3.44-.054 1.17-.24 1.97-.511 2.67a5.392 5.392 0 0 1-1.27 1.948 5.392 5.392 0 0 1-1.948 1.269c-.7.271-1.499.457-2.67.51-1.011.047-1.429.063-3.439.066h-2.192c-2.01-.003-2.428-.019-3.44-.065-1.17-.054-1.97-.24-2.67-.511a5.392 5.392 0 0 1-1.948-1.27 5.392 5.392 0 0 1-1.268-1.948c-.272-.7-.458-1.499-.512-2.67-.046-1.011-.062-1.429-.065-3.439v-2.192c.003-2.01.019-2.428.065-3.44.054-1.17.24-1.97.512-2.67a5.392 5.392 0 0 1 1.268-1.948 5.392 5.392 0 0 1 1.949-1.268c.7-.272 1.499-.458 2.67-.512 1.011-.046 1.429-.062 3.439-.065zm-.524 1.982h-1.144c-2.417.002-2.793.015-3.873.064-1.072.049-1.655.228-2.042.379-.514.2-.88.438-1.265.823a3.408 3.408 0 0 0-.823 1.265c-.15.387-.33.97-.379 2.042-.05 1.08-.062 1.456-.064 3.873v1.144c.002 2.417.015 2.793.064 3.873.049 1.072.228 1.655.379 2.042.2.514.438.88.823 1.265.385.385.751.624 1.265.823.387.15.97.33 2.042.379 1 .046 1.396.06 3.368.063h2.154c1.972-.003 2.368-.017 3.368-.063 1.072-.049 1.655-.228 2.042-.379.514-.2.88-.438 1.265-.823.385-.385.624-.751.823-1.265.15-.387.33-.97.379-2.042.046-1 .06-1.396.063-3.368v-2.153c-.003-1.973-.017-2.369-.063-3.369-.049-1.072-.228-1.655-.379-2.042-.2-.514-.438-.88-.823-1.265a3.408 3.408 0 0 0-1.265-.823c-.387-.15-.97-.33-2.042-.379-1.08-.05-1.456-.062-3.873-.064zm-.575 3.375a5.647 5.647 0 1 1 0 11.293 5.647 5.647 0 0 1 0-11.293zm0 1.981a3.666 3.666 0 1 0 0 7.331 3.666 3.666 0 0 0 0-7.331zm5.87-3.524a1.32 1.32 0 1 1 0 2.64 1.32 1.32 0 0 1 0-2.64z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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