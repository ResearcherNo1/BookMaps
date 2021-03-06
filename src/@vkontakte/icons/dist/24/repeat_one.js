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
var id = 'repeat_one_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="repeat_one_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M9.018 16H16.5c1.948 0 3-1.052 3-3a1 1 0 0 1 2 0c0 3.052-1.948 5-5 5H9.018v1.75c0 .284-.176.366-.393.2L5.16 17.3c-.21-.16-.217-.434 0-.6l3.465-2.65c.21-.16.393-.076.393.2V16zM15 8H7.5c-1.948 0-3 1.052-3 3a1 1 0 0 1-2 0c0-3.052 1.948-5 5-5H15V4.25c0-.276.183-.36.392-.2l3.466 2.65c.216.166.21.44 0 .6l-3.466 2.65c-.216.166-.392.084-.392-.2V8zm-2 1v6h-1.5v-4H10v-1l2-1h1z" fill="currentColor" /></g></symbol>';

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