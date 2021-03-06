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
var id = 'write_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="write_outline_28"><g fill-rule="nonzero" fill="none"><path d="M0 0h28v28H0z" /><path d="M22.121 4.289l1.586 1.585a3 3 0 0 1 0 4.243L21 12.824 10.146 23.678a4.5 4.5 0 0 1-3.181 1.318H5.05A2.05 2.05 0 0 1 3 22.946V21.03a4.5 4.5 0 0 1 1.318-3.182L15.172 6.996l2.707-2.707a3 3 0 0 1 4.242 0zM16.5 8.496L5.732 19.264A2.5 2.5 0 0 0 5 21.03v1.915c0 .027.022.05.05.05h1.915a2.5 2.5 0 0 0 1.767-.732L19.5 11.496l-3-3zm2.793-2.793L18 6.996l3 3 1.293-1.293a1 1 0 0 0 0-1.414l-1.586-1.586a1 1 0 0 0-1.414 0z" fill="currentColor" /></g></symbol>';

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