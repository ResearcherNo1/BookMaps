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
var id = 'message_read_outline_56';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" id="message_read_outline_56"><g fill="none" fill-rule="evenodd"><path d="M0 0h56v56H0z" /><path d="M28.472 6c4.501 0 8.81 1.158 12.476 3.299a1.5 1.5 0 0 1-1.512 2.59C36.23 10.02 32.443 9 28.472 9 17.674 9 9 16.501 9 25.638c0 4.606 2.206 8.925 6.059 12.056a1.5 1.5 0 0 1 .489 1.6c-.552 1.816-1.506 3.952-2.864 6.42 4.12-1.083 7.251-2.365 9.382-3.82a1.5 1.5 0 0 1 1.192-.221c1.683.399 3.432.603 5.214.603 10.799 0 19.472-7.501 19.472-16.638 0-1.918-.38-3.791-1.116-5.562a1.5 1.5 0 1 1 2.77-1.151 17.428 17.428 0 0 1 1.346 6.713c0 10.898-10.105 19.638-22.472 19.638a25.66 25.66 0 0 1-5.268-.542c-2.639 1.663-6.296 3.052-10.982 4.192a2.48 2.48 0 0 1-2.736-3.644c1.32-2.3 2.281-4.284 2.883-5.94C8.33 35.716 6 30.846 6 25.637 6 14.74 16.106 6 28.472 6zm19.839 4.94a1.5 1.5 0 0 1 0 2.12L30.06 31.31a1.5 1.5 0 0 1-2.122 0l-7.5-7.5a1.5 1.5 0 1 1 2.122-2.12L29 28.128l17.19-17.19a1.5 1.5 0 0 1 2.12 0z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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