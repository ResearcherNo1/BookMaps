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

var viewBox = '0 0 20 20';
var id = 'mention_outline_20';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20" id="mention_outline_20"><defs><path id="mention_outline_20_a" d="M0 0h20v20H0z" /></defs><g fill="none" fill-rule="evenodd"><mask id="mention_outline_20_b" fill="#fff"><use xlink:href="#mention_outline_20_a" /></mask><path d="M11.7 7.3V7a.75.75 0 1 1 1.5 0v4c0 .654.232.938.45 1.15.218.212.523.301.874.301.372 0 .709-.05 1.026-.351.317-.301.549-.676.7-1.2.151-.524.25-1.225.25-1.926v-.343c0-1.09-.327-2.12-.85-2.981-.523-.86-1.32-1.464-2.25-1.95-.93-.486-1.973-.7-3.152-.7h-.085c-1.278 0-2.43.245-3.413.8A5.582 5.582 0 0 0 4.5 6.1a7.414 7.414 0 0 0-.9 3.52v.448c0 1.304.328 2.5.854 3.482.527.982 1.28 1.67 2.246 2.2.966.53 2.083.813 3.368.813h.085c.477 0 1.088-.049 1.797-.153.372-.049.588-.076.7-.076.204 0 .382.061.515.183.134.121.2.296.2.483a.662.662 0 0 1-.168.459.925.925 0 0 1-.485.28c-.68.174-1.552.261-2.612.261h-.095c-1.615 0-3-.305-4.205-.95A6.812 6.812 0 0 1 3 14.3c-.657-1.187-1-2.588-1-4.17v-.573c0-1.575.342-2.973 1.027-4.195a7.193 7.193 0 0 1 2.886-2.847C7.153 1.838 8.57 1.5 10.163 1.5h.085c1.488 0 2.82.304 3.997.91 1.176.608 2.096 1.448 2.76 2.52C17.668 6.002 18 7.22 18 8.58v.52c0 .701-.154 1.753-.463 2.468-.31.714-.632 1.284-1.187 1.683-.555.4-1.177.65-1.9.65-.653 0-1.107-.163-1.6-.5-.493-.337-.79-.847-.854-1.1-.11.243-.414.574-.646.8a2.6 2.6 0 0 1-.87.543 3.171 3.171 0 0 1-1.1.193c-.576 0-1.127-.139-1.555-.416-.428-.278-.759-.674-.99-1.187C6.603 11.719 6.5 11.1 6.5 10.4V9.37c0-.68.105-1.273.34-1.78a2.63 2.63 0 0 1 1.011-1.166A2.89 2.89 0 0 1 9.394 6c.52 0 1.063.145 1.456.398s.682.585.85.994V7.3zm-1.825.2c-.897 0-1.625.728-1.625 1.625v1.55a1.625 1.625 0 0 0 3.25 0v-1.55c0-.897-.728-1.625-1.625-1.625z" fill="currentColor" fill-rule="nonzero" mask="url(#mention_outline_20_b)" /></g></symbol>';

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
    width: !isNaN(props.width) ? +props.width : 20,
    height: !isNaN(props.height) ? +props.height : 20
  }));
}

var _default = Icon;
exports.default = _default;