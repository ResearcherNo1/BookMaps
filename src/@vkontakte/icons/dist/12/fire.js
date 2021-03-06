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
var id = 'fire_12';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" id="fire_12"><g fill="none" fill-rule="evenodd"><path d="M0 0h12v12H0z" /><path d="M6.092.787a.188.188 0 0 1 .295.192.85.85 0 0 1-.1.27c-1.416 2.185-.794 3.5.16 3.64.988.147 1.71-.515 1.556-1.943l-.067-.622a.172.172 0 0 1 .266-.162c.321.212.706.596 1.153 1.154 1.591 1.985 1.653 3.646 1.644 4.36C10.967 10.239 9.071 12 6.5 12 3.93 12 2 10.239 2 7.677c.011-1.94.991-4.67 3.696-6.6l.396-.29z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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