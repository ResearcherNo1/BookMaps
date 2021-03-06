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
var id = 'download_cloud_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="download_cloud_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M14 11.125c.446 0 .814.334.868.765l.007.11v11.071l2.565-2.243a.875.875 0 0 1 1.206 1.262l-.086.082-4 3.5-.032.026a.868.868 0 0 1-.045.032l.077-.058a.88.88 0 0 1-.844.156 1.158 1.158 0 0 1-.143-.064.888.888 0 0 1-.133-.092l.077.058a.868.868 0 0 1-.045-.032l-.032-.026-4-3.5-.086-.082a.875.875 0 0 1 1.206-1.262l2.565 2.243V12c0-.483.392-.875.875-.875zM16.083 3a6.417 6.417 0 0 1 6.413 6.187l.004.213.066.036a4.75 4.75 0 0 1 2.429 3.93l.005.217c0 2.468-1.886 4.508-4.354 4.731l-.22.015L18 18.33a1 1 0 0 1-.117-1.993L18 16.33h2.38a2.75 2.75 0 0 0 .762-5.348 1 1 0 0 1-.67-1.06 4.417 4.417 0 0 0-7.833-3.269 1 1 0 0 1-1.21.278 2.75 2.75 0 0 0-3.892 2.933 1 1 0 0 1-.667 1.113 2.751 2.751 0 0 0 .712 5.351l.167.005 2.25-.001a1 1 0 0 1 .118 1.993l-.116.007-2.251.001a4.75 4.75 0 0 1-2.301-8.906l.051-.028.005-.2a4.75 4.75 0 0 1 4.528-4.527l.217-.005c.357 0 .708.04 1.05.116l.272.071.034-.033a6.395 6.395 0 0 1 4.21-1.815L16.083 3z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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