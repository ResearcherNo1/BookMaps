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

var viewBox = '0 0 12 12';
var id = 'fire_verified_12';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" id="fire_verified_12"><g fill="none" fill-rule="evenodd"><path d="M0 0h12v12H0z" /><path d="M6.093.787a.188.188 0 0 1 .294.192.85.85 0 0 1-.1.27c-1.415 2.185-.794 3.5.161 3.64.988.147 1.71-.515 1.555-1.943l-.066-.622a.172.172 0 0 1 .266-.162c.32.212.705.596 1.152 1.154C10.947 5.301 11.01 6.962 11 7.676 10.968 10.239 9.071 12 6.5 12 3.929 12 2 10.24 2 7.677c.011-1.94.991-4.67 3.696-6.6l.397-.29zM4.62 7.129a.525.525 0 0 0-.742.742l1.5 1.5a.525.525 0 0 0 .742 0l3-3a.525.525 0 0 0-.742-.742L5.75 8.258l-1.129-1.13z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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
    width: !isNaN(props.width) ? +props.width : 12,
    height: !isNaN(props.height) ? +props.height : 12
  }));
}

var _default = Icon;
exports.default = _default;