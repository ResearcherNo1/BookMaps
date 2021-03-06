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
var id = 'favorite_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="favorite_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M14 19.178l5.69 3.476a.205.205 0 0 0 .306-.223l-1.547-6.485 5.064-4.338a.205.205 0 0 0-.117-.36l-6.646-.533-2.56-6.156a.205.205 0 0 0-.38 0l-2.56 6.156-6.646.533a.205.205 0 0 0-.117.36l5.064 4.338-1.547 6.485a.205.205 0 0 0 .306.223L14 19.178zm0 2.344L9.352 24.36a2.205 2.205 0 0 1-3.294-2.393l1.264-5.297-4.136-3.543a2.205 2.205 0 0 1 1.258-3.873l5.429-.435 2.091-5.028a2.205 2.205 0 0 1 4.072 0l2.091 5.028 5.429.435a2.205 2.205 0 0 1 1.258 3.873l-4.136 3.543 1.264 5.297a2.205 2.205 0 0 1-3.294 2.393L14 21.522z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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