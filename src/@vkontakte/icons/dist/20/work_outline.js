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
var id = 'work_outline_20';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" id="work_outline_20"><g fill="none" fill-rule="evenodd"><path opacity=".4" d="M0 0h20v20H0z" /><path d="M10.795 2c1.115 0 1.519.116 1.926.334.407.218.727.538.945.945.203.38.318.758.332 1.712L14 5.5h1.363c1.033 0 1.45.116 1.858.334.407.218.727.538.945.945.218.407.334.825.334 1.858v1.8c0 .89-.093 1.214-.267 1.54-.17.317-.417.568-.731.742L17.5 14.25a3.25 3.25 0 0 1-3.066 3.245l-.184.005h-8.5a3.25 3.25 0 0 1-3.245-3.066L2.5 14.25v-1.532l-.134-.079a1.814 1.814 0 0 1-.599-.662c-.16-.301-.252-.6-.265-1.345L1.5 8.637c0-1.033.116-1.45.334-1.858.218-.407.538-.727.945-.945.378-.202.765-.317 1.645-.332L6 5.5v-.296c0-1.115.116-1.519.334-1.926.218-.407.538-.727.945-.945.38-.203.758-.318 1.712-.332L10.795 2zm5.207 11L4 12.999v1.251a1.75 1.75 0 0 0 1.606 1.744L5.75 16h8.5a1.75 1.75 0 0 0 1.744-1.606L16 14.25l.002-1.25zm-.469-6H4.467l-.309.01c-.357.018-.516.063-.672.147a.772.772 0 0 0-.33.33c-.104.194-.148.393-.155.98v2.118l.005.237c.008.2.024.302.052.377l.032.07a.319.319 0 0 0 .14.141l.07.032c.114.042.284.058.764.058h11.872c.48 0 .65-.016.763-.058l.07-.032a.319.319 0 0 0 .141-.14l.032-.07c.042-.114.058-.284.058-.764v-1.8c0-.72-.043-.937-.157-1.15a.772.772 0 0 0-.33-.33c-.194-.104-.393-.148-.98-.155zm-4.566-3.5H9.033l-.318.008c-.322.014-.49.045-.627.1l-.102.049a.772.772 0 0 0-.33.33l-.048.1c-.071.177-.102.404-.107.946L7.5 5.5h5v-.467l-.008-.318c-.014-.322-.045-.49-.1-.627l-.049-.102a.772.772 0 0 0-.33-.33l-.1-.048c-.177-.071-.404-.102-.946-.107z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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