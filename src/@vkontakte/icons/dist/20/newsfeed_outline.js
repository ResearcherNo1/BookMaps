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

var viewBox = '0 0 20 20';
var id = 'newsfeed_outline_20';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" id="newsfeed_outline_20"><g fill="none" fill-rule="evenodd"><path opacity=".04" d="M0 0h20v20H0z" /><path d="M13.084 2c1.434 0 2.132.135 2.857.523.66.353 1.183.876 1.536 1.536.388.725.523 1.423.523 2.857v6.168c0 1.434-.135 2.132-.523 2.857a3.703 3.703 0 0 1-1.536 1.536c-.725.388-1.423.523-2.857.523H6.916c-1.434 0-2.132-.135-2.857-.523a3.703 3.703 0 0 1-1.536-1.536C2.135 15.216 2 14.518 2 13.084V6.916c0-1.434.135-2.132.523-2.857a3.703 3.703 0 0 1 1.536-1.536C4.784 2.135 5.482 2 6.916 2h6.168zM16.5 8h-13v5.084c0 1.207.09 1.671.345 2.15.214.399.522.707.921.92.479.256.943.346 2.15.346h6.168c1.207 0 1.671-.09 2.15-.345.399-.214.707-.522.92-.921.256-.479.346-.943.346-2.15V8zm-3.416-4.5H6.916c-1.207 0-1.671.09-2.15.345a2.203 2.203 0 0 0-.92.921c-.225.42-.321.827-.342 1.733h12.992c-.02-.906-.117-1.314-.341-1.733a2.203 2.203 0 0 0-.921-.92c-.479-.256-.943-.346-2.15-.346z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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
    width: !isNaN(props.width) ? +props.width : 20,
    height: !isNaN(props.height) ? +props.height : 20
  }));
}

var _default = Icon;
exports.default = _default;