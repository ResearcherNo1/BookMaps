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
var id = 'playlist_outline_56';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" id="playlist_outline_56"><g fill="none" fill-rule="evenodd"><path d="M0 0h56v56H0z" /><path d="M39 38.927c0 4.552-1.938 7.972-5.07 9.62-2.84 1.495-6.245 1.222-8.222-.755-2.039-2.039-2.295-5.509-.574-8.309 1.862-3.031 5.635-4.868 10.866-4.978v-17.45l.009-.303c.141-3.308 1.867-5.624 5.017-6.674 1.087-.363 3.24-.913 6.496-1.665l1.647-.376A1.5 1.5 0 0 1 51 9.501v4.205a6.7 6.7 0 0 1-4.974 6.473L39 22.053zm-3-1.421l-.393.013c-4.016.172-6.678 1.519-7.917 3.535-1.02 1.66-.877 3.6.14 4.617.98.981 2.958 1.14 4.703.221C34.65 44.778 36 42.395 36 38.927v-1.421zM27.5 22a1.5 1.5 0 0 1 0 3h-19a1.5 1.5 0 0 1 0-3h19zM48 11.382c-3.053.706-5.073 1.224-6.026 1.542l-.218.076c-1.926.715-2.788 2.055-2.756 4.334v1.614l6.253-1.667A3.7 3.7 0 0 0 48 13.706zM30.5 10a1.5 1.5 0 0 1 0 3h-22a1.5 1.5 0 0 1 0-3h22z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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