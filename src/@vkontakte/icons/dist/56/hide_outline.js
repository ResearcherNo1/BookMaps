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
var id = 'hide_outline_56';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" id="hide_outline_56"><g fill-rule="nonzero" fill="none"><path d="M0 0h56v56H0z" /><path d="M12.44 10.44a1.5 1.5 0 0 1 2.12 0l31 31a1.5 1.5 0 0 1-2.12 2.12l-2.515-2.513C37.03 43.573 32.652 45 28 45c-6.256 0-12.004-2.583-16.639-6.832C7.644 34.761 5 30.484 5 28c0-3.35 4.362-9.256 9.932-12.947l-2.493-2.492a1.5 1.5 0 0 1 0-2.122zm4.662 6.784C12.052 20.387 8 25.732 8 28c0 1.454 2.232 5.063 5.389 7.957C17.505 39.73 22.556 42 28 42c3.828 0 7.46-1.118 10.75-3.129l-4.446-4.446a9 9 0 0 1-12.728-12.728zM28 11c6.256 0 12.004 2.583 16.639 6.832C48.356 21.239 51 25.516 51 28c0 1.99-1.714 5.171-4.331 8.11a1.5 1.5 0 0 1-2.24-1.996C46.6 31.676 48 29.078 48 28c0-1.454-2.232-5.063-5.389-7.957C38.495 16.27 33.444 14 28 14c-1.443 0-2.86.159-4.248.468a1.5 1.5 0 1 1-.652-2.928c1.6-.356 3.236-.54 4.9-.54zm-4.302 12.819a6 6 0 0 0 8.484 8.485zm5.93-3.295a1.5 1.5 0 0 1 1.975-.774 9.028 9.028 0 0 1 4.65 4.651 1.5 1.5 0 0 1-2.75 1.2 6.028 6.028 0 0 0-3.102-3.102 1.5 1.5 0 0 1-.774-1.975z" fill="currentColor" /></g></symbol>';

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