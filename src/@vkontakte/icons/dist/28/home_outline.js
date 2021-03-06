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
var id = 'home_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="home_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M15.13 2.691l8.936 8.49A3 3 0 0 1 25 13.356v8.641a2.5 2.5 0 0 1-2.5 2.5h-6a1 1 0 0 1-1-1v-5.5a1.5 1.5 0 0 0-3 0v5.5a1 1 0 0 1-1 1h-6a2.5 2.5 0 0 1-2.5-2.5v-8.641a3 3 0 0 1 .934-2.175l8.936-8.49a1.64 1.64 0 0 1 2.26 0zM14 4.377L5.311 12.63a1 1 0 0 0-.311.725v8.641a.5.5 0 0 0 .5.5h5v-4.5a3.5 3.5 0 0 1 7 0v4.5h5a.5.5 0 0 0 .5-.5v-8.641a1 1 0 0 0-.311-.725L14 4.377z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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