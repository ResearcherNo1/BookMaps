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
var id = 'story_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="story_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M17.926 3.002c1.958.02 2.954.231 3.988.784a5.543 5.543 0 0 1 2.3 2.3c.553 1.034.764 2.03.784 3.988v7.852c-.02 1.958-.231 2.954-.784 3.988a5.543 5.543 0 0 1-2.3 2.3c-1.034.553-2.03.764-3.988.784h-7.852c-1.958-.02-2.954-.231-3.988-.784a5.543 5.543 0 0 1-2.3-2.3c-.553-1.034-.764-2.03-.784-3.988v-7.852c.02-1.958.231-2.954.784-3.988a5.543 5.543 0 0 1 2.3-2.3c1.034-.553 2.03-.764 3.988-.784h7.852zM17.59 5h-7.18l-.558.005c-1.479.028-2.141.18-2.823.545-.64.342-1.137.839-1.48 1.48-.364.68-.516 1.343-.544 2.822L5 10.41v7.18l.005.558c.028 1.479.18 2.141.545 2.823.342.64.839 1.137 1.48 1.48.68.364 1.343.516 2.822.544l.558.005h7.18l.558-.005c1.479-.028 2.141-.18 2.823-.545a3.543 3.543 0 0 0 1.48-1.48c.364-.68.516-1.343.544-2.822L23 17.59v-7.18l-.005-.558c-.028-1.479-.18-2.141-.545-2.823a3.543 3.543 0 0 0-1.48-1.48c-.68-.364-1.343-.516-2.822-.544L17.59 5zM14 8.75a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 2a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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