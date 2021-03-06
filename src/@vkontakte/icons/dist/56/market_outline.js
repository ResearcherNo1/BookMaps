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
var id = 'market_outline_56';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" id="market_outline_56"><g fill-rule="nonzero" fill="none"><path d="M0 0h56v56H0z" /><path d="M28 6c5.523 0 10 4.477 10 10h2.59c2.23 0 3.037.232 3.852.668a4.543 4.543 0 0 1 1.89 1.89c.436.815.668 1.623.668 3.852v13.77c0 4.458-.464 6.075-1.336 7.704a9.086 9.086 0 0 1-3.78 3.78c-1.63.872-3.246 1.336-7.703 1.336H21.819c-4.457 0-6.074-.464-7.703-1.336a9.086 9.086 0 0 1-3.78-3.78C9.464 42.254 9 40.638 9 36.181V22.41c0-2.23.232-3.037.668-3.852a4.543 4.543 0 0 1 1.89-1.89c.815-.436 1.623-.668 3.852-.668H18c0-5.523 4.477-10 10-10zm12.83 13H15.41c-1.58 0-2.005.082-2.437.313a1.545 1.545 0 0 0-.66.66c-.219.409-.304.813-.312 2.197L12 36.18c0 3.612.255 4.931.981 6.29a6.087 6.087 0 0 0 2.55 2.549c1.358.726 2.677.981 6.288.981h12.362c3.61 0 4.93-.255 6.288-.981a6.087 6.087 0 0 0 2.55-2.55c.726-1.358.981-2.677.981-6.288V22.41c0-1.58-.082-2.005-.313-2.437a1.545 1.545 0 0 0-.66-.66c-.409-.219-.813-.304-2.197-.312zm-21.287 3c.328 0 .58.06.792.174.212.113.378.28.491.491.114.212.174.464.174.792v.086c0 .328-.06.58-.174.792-.113.212-.28.378-.491.491-.212.114-.464.174-.792.174h-.086c-.328 0-.58-.06-.792-.174a1.181 1.181 0 0 1-.491-.491c-.114-.212-.174-.464-.174-.792v-.086c0-.328.06-.58.174-.792.113-.212.28-.378.491-.491.212-.114.464-.174.792-.174h.086zm17 0c.328 0 .58.06.792.174.212.113.378.28.491.491.114.212.174.464.174.792v.086c0 .328-.06.58-.174.792-.113.212-.28.378-.491.491-.212.114-.464.174-.792.174h-.086c-.328 0-.58-.06-.792-.174a1.181 1.181 0 0 1-.491-.491c-.114-.212-.174-.464-.174-.792v-.086c0-.328.06-.58.174-.792.113-.212.28-.378.491-.491.212-.114.464-.174.792-.174h.086zM28 9a7 7 0 0 0-7 7h14a7 7 0 0 0-7-7z" fill="currentColor" /></g></symbol>';

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