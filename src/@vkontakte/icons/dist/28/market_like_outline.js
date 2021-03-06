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
var id = 'market_like_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="market_like_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M21.842 15A4.158 4.158 0 0 1 26 19.158c0 2.242-.892 3.358-4.447 6.124l-1.647 1.28a1.476 1.476 0 0 1-1.812 0l-1.647-1.28C12.892 22.516 12 21.4 12 19.158A4.158 4.158 0 0 1 16.158 15c.986 0 1.895.28 2.705.824l.137.096.137-.096a4.751 4.751 0 0 1 2.438-.817zm-.688-7c1.337 0 1.822.14 2.311.4.49.262.873.646 1.134 1.135l.093.185c.201.438.308.956.308 2.126V12a1 1 0 0 1-2 0v-.154c0-.917-.043-1.142-.164-1.368a.727.727 0 0 0-.314-.314c-.194-.103-.386-.15-1.015-.161L21.154 10H6.846l-.353.003c-.629.011-.821.058-1.015.161a.727.727 0 0 0-.314.314c-.112.21-.157.418-.163 1.182L5 18.95c0 1.933.13 2.604.498 3.293.293.548.711.966 1.259 1.259.69.368 1.36.498 3.294.498H11a1 1 0 0 1 0 2h-.95l-.58-.005c-2.02-.04-2.835-.29-3.656-.73a4.998 4.998 0 0 1-2.08-2.079c-.459-.859-.712-1.71-.733-3.938L3 11.846c0-1.337.14-1.822.4-2.311A2.726 2.726 0 0 1 4.536 8.4l.185-.093c.407-.187.882-.292 1.885-.306zm.688 9c-.803 0-1.498.3-2.135.937l-.353.353a.501.501 0 0 1-.708 0l-.353-.353c-.637-.636-1.332-.937-2.135-.937A2.158 2.158 0 0 0 14 19.158c0 1.41.584 2.14 3.675 4.545L19 24.733l1.845-1.438c2.555-2.02 3.12-2.763 3.153-4.015l.002-.122A2.158 2.158 0 0 0 21.842 17zM9 12a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm5-10a6 6 0 0 1 6 6h-2a4 4 0 1 0-8 0H8a6 6 0 0 1 6-6z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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