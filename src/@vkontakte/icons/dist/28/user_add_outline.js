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
var id = 'user_add_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="user_add_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M17.75 15c4.951 0 9.25 1.763 9.25 5.643 0 2.016-.781 2.857-2.456 2.857H10.956c-1.675 0-2.456-.84-2.456-2.857 0-3.88 4.299-5.643 9.25-5.643zm0 2c-3.946 0-7.25 1.355-7.25 3.643 0 .89-.071.863.372.858l13.672-.001c.536 0 .456.086.456-.857C25 18.355 21.696 17 17.75 17zM5 7a1 1 0 0 1 1 1v3h3a1 1 0 0 1 0 2H6v3a1 1 0 0 1-2 0v-3H1a1 1 0 0 1 0-2h3V8a1 1 0 0 1 1-1zm12.5-4C20.539 3 23 5.461 23 8.5S20.539 14 17.5 14A5.499 5.499 0 0 1 12 8.5C12 5.461 14.461 3 17.5 3zm0 2A3.499 3.499 0 0 0 14 8.5c0 1.934 1.566 3.5 3.5 3.5S21 10.434 21 8.5 19.434 5 17.5 5z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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