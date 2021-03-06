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

var viewBox = '0 0 16 16';
var id = 'user_add_16';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="user_add_16"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v16H0z" /><path d="M12.5 5.5a2.5 2.5 0 1 0-4.999-.001A2.5 2.5 0 0 0 12.5 5.5zM3.5 7h1.25a.75.75 0 0 1 0 1.5H3.5v1.25a.75.75 0 1 1-1.5 0V8.5H.75a.75.75 0 0 1 0-1.5H2V5.75a.75.75 0 0 1 1.5 0V7zM5 11.77C5 9.614 8.197 9 10 9s5 .615 5 2.77v.434c0 .44-.356.796-.796.796H5.796A.796.796 0 0 1 5 12.204v-.435z" fill="currentColor" /></g></symbol>';

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
    width: !isNaN(props.width) ? +props.width : 16,
    height: !isNaN(props.height) ? +props.height : 16
  }));
}

var _default = Icon;
exports.default = _default;