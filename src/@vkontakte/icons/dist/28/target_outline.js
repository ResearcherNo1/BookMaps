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
var id = 'target_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="target_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M14 2a1 1 0 0 1 1 1l.001 1.05c4.724.469 8.48 4.226 8.95 8.95H25a1 1 0 0 1 0 2l-1.05.001a10.003 10.003 0 0 1-8.949 8.95L15 25a1 1 0 0 1-2 0v-1.05a10.003 10.003 0 0 1-8.95-8.949L3 15a1 1 0 0 1 0-2h1.05A10.003 10.003 0 0 1 13 4.05V3a1 1 0 0 1 1-1zm1.001 4.062L15 7a1 1 0 0 1-2 0v-.938A8.004 8.004 0 0 0 6.062 13H7a1 1 0 0 1 0 2l-.938.001A8.004 8.004 0 0 0 13 21.938V21a1 1 0 0 1 2 0l.001.938a8.004 8.004 0 0 0 6.937-6.937L21 15a1 1 0 0 1 0-2h.938a8.004 8.004 0 0 0-6.937-6.938zM14 12a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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