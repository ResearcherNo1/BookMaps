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
var id = 'playlist_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="playlist_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M24.78 4.025A1 1 0 0 1 26 5v2.102a3.6 3.6 0 0 1-2.672 3.479L20 11.468v7.926c0 4.687-4.583 7.1-7.073 4.61-2.576-2.578-.107-6.805 5.074-7.061L18 10.723V8.93c-.027-1.922.91-3.288 2.684-3.88.641-.213 1.993-.551 4.096-1.026zM18 18.944c-3.538.196-4.845 2.459-3.659 3.645C15.484 23.732 18 22.408 18 19.394zM8.5 17a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2h4zm5-6a1 1 0 0 1 0 2h-9a1 1 0 0 1 0-2h9zM24 6.256c-1.348.315-2.249.548-2.684.693-.934.311-1.331.89-1.316 1.968v.481l2.812-.75A1.6 1.6 0 0 0 24 7.102zM15 5a1 1 0 0 1 0 2H4.5a1 1 0 1 1 0-2H15z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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