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
var id = 'music_outline_56';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" id="music_outline_56"><g fill="none" fill-rule="evenodd"><path opacity=".4" d="M0 0h56v56H0z" /><path d="M45 33.927c0 4.551-1.938 7.971-5.07 9.62-2.84 1.495-6.245 1.222-8.222-.755-1.977-1.977-2.25-5.382-.755-8.222 1.649-3.132 5.069-5.07 9.62-5.07H42V18.843L21 23.22 21 38.927c0 4.551-1.938 7.971-5.07 9.62-2.84 1.495-6.245 1.222-8.222-.755-1.977-1.977-2.25-5.382-.755-8.222 1.649-3.132 5.069-5.07 9.62-5.07H18l.003-16.979c.015-1.508.15-2.356.502-3.209l.079-.182a5.554 5.554 0 0 1 1.836-2.258c.865-.626 1.724-.955 3.507-1.326l14.452-3.011A5.5 5.5 0 0 1 45 12.919v21.008zM18 37.5h-1.427c-3.468 0-5.85 1.35-6.965 3.467-.918 1.745-.76 3.722.221 4.704.982.981 2.959 1.14 4.704.22C16.65 44.779 18 42.396 18 38.928V37.5zm24-5h-1.427c-3.468 0-5.85 1.35-6.965 3.467-.918 1.745-.76 3.722.221 4.704.982.981 2.959 1.14 4.704.22C40.65 39.779 42 37.396 42 33.928V32.5zm-.053-20.09a2.5 2.5 0 0 0-2.957-1.938l-14.689 3.06c-1.062.23-1.544.398-1.944.649l-.18.121a2.555 2.555 0 0 0-.856 1.053c-.239.533-.321 1.044-.321 2.479v2.321l21-4.375v-2.86a2.5 2.5 0 0 0-.023-.342z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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