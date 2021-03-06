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

var viewBox = '0 0 56 56';
var id = 'user_add_outline_56';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" id="user_add_outline_56"><g fill="none" fill-rule="evenodd"><path d="M0 0h56v56H0z" /><path d="M45 19.5c0-3.592-2.908-6.5-6.5-6.5a6.498 6.498 0 0 0-6.5 6.5c0 3.592 2.908 6.5 6.5 6.5s6.5-2.908 6.5-6.5zm3 0c0 5.248-4.252 9.5-9.5 9.5a9.498 9.498 0 0 1-9.5-9.5c0-5.248 4.252-9.5 9.5-9.5s9.5 4.252 9.5 9.5zM25.5 41.071c0 1.932-.003 1.929 1.147 1.929h24.706c1.15 0 1.147.003 1.147-1.929C52.5 36.565 46.338 34 39 34s-13.5 2.565-13.5 7.071zM39 31c8.838 0 16.5 3.19 16.5 10.071 0 3.533-1.278 4.929-4.147 4.929H26.647c-2.87 0-4.147-1.396-4.147-4.929C22.5 34.19 30.162 31 39 31zM11.5 14a1.5 1.5 0 0 1 1.5 1.5V24h8.5a1.5 1.5 0 0 1 0 3H13v8.5a1.5 1.5 0 0 1-3 0V27H1.5a1.5 1.5 0 0 1 0-3H10v-8.5a1.5 1.5 0 0 1 1.5-1.5z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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
    width: !isNaN(props.width) ? +props.width : 56,
    height: !isNaN(props.height) ? +props.height : 56
  }));
}

var _default = Icon;
exports.default = _default;