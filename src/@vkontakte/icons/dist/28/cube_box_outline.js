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
var id = 'cube_box_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="cube_box_outline_28"><g fill-rule="nonzero" fill="none"><path opacity=".216" d="M0 0h28v28H0z" /><path d="M13.507 1.545c.33-.06.655-.06.986 0 .33.059.599.154 1.134.397l8.58 3.9c.528.24.793.404 1.055.66.26.253.451.55.574.89.124.346.164.655.164 1.234v10.35c0 .579-.04.888-.164 1.233-.123.34-.315.638-.574.89-.262.257-.527.421-1.054.66l-8.77 3.986c-.414.181-.656.26-.945.312a2.75 2.75 0 0 1-.986 0c-.33-.059-.599-.154-1.134-.397l-8.58-3.9c-.528-.24-.793-.404-1.055-.66a2.337 2.337 0 0 1-.574-.89C2.04 19.863 2 19.554 2 18.975l.002-10.555c.01-.452.053-.726.162-1.028.123-.34.315-.638.574-.89.262-.257.527-.421 1.054-.66l8.77-3.985c.414-.182.656-.261.945-.313zM4 8.854v10.231a2 2 0 0 0 .024.372l.022.074c.02.055.046.096.088.137.07.069.151.119.486.27l8.38 3.81V12.932a3 3 0 0 1-.042-.015l-.2-.082L4 8.854zm20-.001l-8.759 3.982c-.079.036-.159.068-.24.097L15 23.748l8.38-3.81c.215-.097.325-.153.396-.198l.032-.022.058-.05a.339.339 0 0 0 .088-.137c.034-.093.046-.187.046-.555V8.853zM8.5 5.899L5.416 7.301l8.17 3.713a1 1 0 0 0 .713.044l.115-.044 2.669-1.213L8.5 5.899zm5.64-2.386a.752.752 0 0 0-.28 0c-.136.025-.262.07-.66.25L10.917 4.8 19.5 8.702l3.083-1.401-7.784-3.538c-.265-.12-.409-.18-.516-.214l-.05-.015z" fill="currentColor" /></g></symbol>';

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