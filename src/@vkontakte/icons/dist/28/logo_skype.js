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
var id = 'logo_skype_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="logo_skype_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M8.856 2.334c1.067 0 2.122.266 3.059.766a11.125 11.125 0 0 1 1.671-.19l.42-.008c1.488 0 2.93.291 4.289.867a10.984 10.984 0 0 1 3.502 2.367 10.985 10.985 0 0 1 2.36 3.51c.576 1.362.867 2.809.867 4.3 0 .672-.063 1.345-.183 2.001.539.97.825 2.067.825 3.182a6.499 6.499 0 0 1-1.91 4.623 6.51 6.51 0 0 1-7.82 1.068c-.633.112-1.282.17-1.93.17a10.9 10.9 0 0 1-4.288-.868 10.967 10.967 0 0 1-3.503-2.366 10.998 10.998 0 0 1-2.36-3.51 10.99 10.99 0 0 1-.867-4.3c0-.639.057-1.278.166-1.904a6.542 6.542 0 0 1-.82-3.17c0-1.746.678-3.388 1.91-4.623a6.47 6.47 0 0 1 4.612-1.915zm4.968 4.396c-2.616 0-5.402 1.113-5.402 4.078 0 1.429.51 2.948 3.313 3.653l3.482.871c1.053.26 1.317.855 1.317 1.39 0 .892-.884 1.763-2.483 1.763-3.126 0-2.692-2.412-4.367-2.412-.753 0-1.299.52-1.299 1.262 0 1.446 1.75 3.375 5.666 3.375 3.724 0 5.57-1.8 5.57-4.21 0-1.556-.717-3.208-3.54-3.838l-2.576-.573c-.98-.224-2.11-.52-2.11-1.446 0-.93.793-1.578 2.222-1.578 2.88 0 2.616 1.984 4.046 1.984.752 0 1.41-.443 1.41-1.206 0-1.779-2.84-3.113-5.25-3.113z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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