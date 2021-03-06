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
var id = 'advertising_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="advertising_outline_28"><g fill-rule="nonzero" fill="none"><path d="M0 0h28v28H0z" /><path d="M13.952 20.477a3 3 0 0 1-5.908 1.042l-.458-2.598A5.5 5.5 0 0 1 8.5 8h7.917l3.972-2.528A3 3 0 0 1 25 8.002v10.996a3 3 0 0 1-4.611 2.53L16.417 19h-2.725l.26 1.477zm-3.939.694a1 1 0 0 0 1.97-.347l-.322-1.825h-2.03l.382 2.172zM21.463 7.16L17 10v7l4.463 2.841A1 1 0 0 0 23 18.998V8.002a1 1 0 0 0-1.537-.843zM15 9.999L8.5 10a3.5 3.5 0 0 0 0 7H15v-7z" fill="currentColor" /></g></symbol>';

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