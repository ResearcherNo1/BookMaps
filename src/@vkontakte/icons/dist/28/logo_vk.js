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
var id = 'logo_vk_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="logo_vk_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M17.373 3C23.533 3 25 4.467 25 10.627v6.746C25 23.533 23.533 25 17.373 25h-6.746C4.467 25 3 23.533 3 17.373v-6.746C3 4.467 4.467 3 10.627 3h6.746zM8.73 9.875H7.125c-.458 0-.55.216-.55.454 0 .425.544 2.532 2.532 5.32 1.326 1.903 3.194 2.934 4.893 2.934 1.02 0 1.146-.229 1.146-.624v-1.438c0-.459.096-.55.42-.55.237 0 .645.119 1.597 1.037 1.088 1.087 1.267 1.575 1.879 1.575h1.604c.458 0 .687-.229.555-.681-.145-.45-.664-1.105-1.353-1.88-.374-.442-.935-.918-1.105-1.156-.238-.306-.17-.442 0-.713l.029-.04c.242-.344 1.94-2.78 2.13-3.648.102-.34 0-.59-.485-.59h-1.604c-.408 0-.596.216-.698.454 0 0-.816 1.988-1.972 3.28-.374.374-.544.493-.748.493-.102 0-.25-.12-.25-.46v-3.177c0-.408-.118-.59-.457-.59h-2.521c-.255 0-.408.19-.408.369 0 .386.577.476.637 1.563v2.363c0 .518-.094.611-.298.611-.543 0-1.866-1.997-2.65-4.282-.155-.445-.309-.624-.719-.624z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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