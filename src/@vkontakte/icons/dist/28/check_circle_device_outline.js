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
var id = 'check_circle_device_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="check_circle_device_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M18 10a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm-5.128-8c1.777 0 2.648.168 3.553.652a4.634 4.634 0 0 1 1.923 1.923c.369.69.545 1.335.617 2.361a1 1 0 1 1-1.996.138c-.052-.752-.153-1.123-.385-1.556a2.635 2.635 0 0 0-1.102-1.102c-.508-.272-1.003-.388-2.125-.411L12.873 4l-3.006.001c-1.29.016-1.803.123-2.35.415a2.635 2.635 0 0 0-1.1 1.102c-.273.508-.389 1.003-.412 2.126L6 8.128l.001 12.005c.016 1.29.123 1.803.415 2.35.255.477.624.846 1.102 1.1.503.27.958.376 2.018.409a1 1 0 0 1-.061 1.999c-1.35-.042-2.104-.218-2.9-.643a4.634 4.634 0 0 1-1.923-1.923c-.43-.806-.61-1.58-.645-2.99l-.005-.29L4 8.128c0-1.777.168-2.648.652-3.553a4.634 4.634 0 0 1 1.923-1.923c.806-.43 1.58-.61 2.99-.645l.29-.005L12.872 2zM18 12a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm3.536 3.564a.9.9 0 0 1 .08 1.18l-.08.092-4 4a.9.9 0 0 1-1.18.08l-.092-.08-1.6-1.6a.9.9 0 0 1 1.18-1.353l.092.08.964.964 3.364-3.363a.9.9 0 0 1 1.272 0z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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