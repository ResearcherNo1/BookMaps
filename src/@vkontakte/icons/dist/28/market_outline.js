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
var id = 'market_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="market_outline_28"><g fill-rule="nonzero" fill="none"><path d="M0 0h28v28H0z" /><path d="M21.154 8c1.337 0 1.822.14 2.311.4.49.262.873.646 1.134 1.135l.093.185c.201.438.308.956.308 2.126v7.103l-.005.582c-.04 2.018-.29 2.834-.73 3.655a4.998 4.998 0 0 1-2.079 2.08c-.896.479-1.785.734-4.237.734h-7.898l-.582-.005c-2.018-.04-2.834-.29-3.655-.73a4.998 4.998 0 0 1-2.08-2.079c-.459-.859-.712-1.71-.733-3.938L3 11.846c0-1.337.14-1.822.4-2.311A2.726 2.726 0 0 1 4.536 8.4l.185-.093c.407-.187.882-.292 1.885-.306L21.155 8zm0 2H6.846l-.353.003c-.629.011-.821.058-1.015.161a.727.727 0 0 0-.314.314c-.112.21-.157.418-.163 1.182L5 18.95c0 1.933.13 2.604.498 3.293.293.548.711.966 1.259 1.259.69.368 1.36.498 3.294.498h7.898c1.934 0 2.605-.13 3.294-.498.548-.293.966-.711 1.259-1.259.368-.69.498-1.36.498-3.294v-7.103c0-.917-.043-1.142-.164-1.368a.727.727 0 0 0-.314-.314c-.194-.103-.386-.15-1.015-.161L21.154 10zM19 12a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM9 12a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm5-10a6 6 0 0 1 6 6h-2a4 4 0 1 0-8 0H8a6 6 0 0 1 6-6z" fill="currentColor" /></g></symbol>';

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