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
var id = 'add_square_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="add_square_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M17.924 3c1.958.02 2.955.232 3.988.784a5.543 5.543 0 0 1 2.3 2.3c.553 1.034.764 2.03.785 3.989v7.851c-.021 1.958-.232 2.955-.785 3.988a5.543 5.543 0 0 1-2.3 2.3c-1.033.553-2.03.764-3.988.785h-7.851c-1.959-.021-2.955-.232-3.988-.785a5.543 5.543 0 0 1-2.3-2.3c-.553-1.033-.764-2.03-.785-3.988v-7.851c.02-1.959.232-2.955.784-3.988a5.543 5.543 0 0 1 2.3-2.3c1.034-.553 2.03-.764 3.989-.785h7.851zm-.335 1.998h-7.181l-.557.005c-1.48.028-2.142.18-2.823.545-.64.343-1.137.84-1.48 1.48-.364.681-.517 1.343-.545 2.823l-.005.557v7.18l.005.558c.028 1.48.18 2.142.545 2.823.343.64.84 1.137 1.48 1.48.681.364 1.343.516 2.823.544l.557.005h7.18l.558-.005c1.48-.028 2.142-.18 2.823-.544a3.543 3.543 0 0 0 1.48-1.48c.364-.681.516-1.344.544-2.823l.005-.557v-7.181l-.005-.557c-.028-1.48-.18-2.142-.544-2.823a3.543 3.543 0 0 0-1.48-1.48c-.681-.364-1.344-.517-2.823-.545l-.557-.005zM14 9a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 1-1z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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