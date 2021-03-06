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
var id = 'newsfeed_outline_56';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" id="newsfeed_outline_56"><g fill="none" fill-rule="evenodd"><path d="M0 0h56v56H0z" /><path d="M20.32 6l14.782.001c3.728.024 5.68.373 7.57 1.297l.42.215a10.586 10.586 0 0 1 4.395 4.395c1.048 1.96 1.458 3.851 1.508 7.583l.005.828v14.362l-.005.828c-.05 3.732-.46 5.624-1.508 7.583a10.586 10.586 0 0 1-4.395 4.395c-1.96 1.048-3.851 1.458-7.583 1.508l-.828.005H20.319l-.828-.005c-3.732-.05-5.624-.46-7.583-1.508a10.586 10.586 0 0 1-4.395-4.395c-1.048-1.96-1.458-3.851-1.508-7.583L6 34.681l.001-14.783c.024-3.728.373-5.68 1.297-7.57l.215-.42a10.586 10.586 0 0 1 4.395-4.395c1.96-1.048 3.851-1.458 7.583-1.508L20.319 6zM46 20.914a1.498 1.498 0 0 1-.5.086h-36c-.175 0-.343-.03-.5-.085V34.68l.004.737c.038 3.308.353 4.76 1.154 6.259a7.587 7.587 0 0 0 3.165 3.165c1.498.8 2.951 1.116 6.259 1.154l.737.004h14.362l.737-.004c3.308-.038 4.76-.353 6.259-1.154a7.587 7.587 0 0 0 3.165-3.165c.8-1.498 1.116-2.951 1.154-6.259l.004-.737zM34.68 9H20.32l-.738.004c-3.308.038-4.76.353-6.259 1.154a7.587 7.587 0 0 0-3.165 3.165c-.667 1.247-.997 2.464-1.11 4.745.143-.044.295-.068.452-.068h36a1.5 1.5 0 0 1 .452.07c-.113-2.283-.443-3.5-1.11-4.747a7.587 7.587 0 0 0-3.165-3.165C40.072 9.3 38.518 9 34.68 9z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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