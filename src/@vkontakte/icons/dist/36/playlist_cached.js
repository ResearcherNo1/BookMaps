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

var viewBox = '0 0 36 36';
var id = 'playlist_cached_36';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" id="playlist_cached_36"><g fill="none" fill-rule="evenodd"><path d="M0 0h36v36H0z" /><path d="M23 10.999a1 1 0 0 0-.995-.999H4.995a.994.994 0 0 0-.995.999v1.002a1 1 0 0 0 .995.999h17.01c.55 0 .995-.443.995-.999v-1.002zm-4 6c0-.552-.449-.999-1.007-.999H5.007A1 1 0 0 0 4 16.999v1.002c0 .552.449.999 1.007.999h12.986A1 1 0 0 0 19 18.001v-1.002zM4 24.001v-1.002A.998.998 0 0 1 5.002 22h9.996c.546 0 1.002.447 1.002.999v1.002a.998.998 0 0 1-1.002.999H5.002A1.005 1.005 0 0 1 4 24.001zM32.034 22a.4.4 0 0 1 .283.683l-6.034 6.034a.4.4 0 0 1-.566 0l-6.034-6.034a.4.4 0 0 1 .283-.683H23v-6h6v6h3.034z" fill="currentColor" /></g></symbol>';

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
    width: !isNaN(props.width) ? +props.width : 36,
    height: !isNaN(props.height) ? +props.height : 36
  }));
}

var _default = Icon;
exports.default = _default;