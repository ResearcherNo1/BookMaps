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
var id = 'chain_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="chain_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M12.59 16.83c-.39.39-1.03.39-1.42 0a5.003 5.003 0 0 1 0-7.07l5.24-5.24a5.003 5.003 0 0 1 7.07 0 5.003 5.003 0 0 1 0 7.07l-1.436 1.436a.999.999 0 0 1-1.414-1.41l1.43-1.436a2.982 2.982 0 0 0 0-4.24 2.982 2.982 0 0 0-4.24 0l-5.23 5.23a2.982 2.982 0 0 0 0 4.24c.41.39.41 1.03 0 1.42zm2.82-5.66c.39-.39 1.03-.39 1.42 0a5.003 5.003 0 0 1 0 7.07l-5.24 5.24a5.003 5.003 0 0 1-7.07 0 5.003 5.003 0 0 1 0-7.07l1.431-1.431a1 1 0 0 1 1.414 0h.001c.39.392.39 1.025 0 1.415L5.94 17.82a2.982 2.982 0 0 0 0 4.24 2.982 2.982 0 0 0 4.24 0l5.23-5.23a2.982 2.982 0 0 0 0-4.24.973.973 0 0 1 0-1.42z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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