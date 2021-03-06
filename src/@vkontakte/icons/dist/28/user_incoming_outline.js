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
var id = 'user_incoming_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="user_incoming_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M10.25 15c4.951 0 9.25 1.763 9.25 5.643 0 2.016-.781 2.857-2.456 2.857H3.456C1.78 23.5 1 22.66 1 20.643 1 16.763 5.299 15 10.25 15zm0 2C6.304 17 3 18.355 3 20.643c0 .89-.071.863.372.858l13.672-.001c.536 0 .456.086.456-.857 0-2.288-3.304-3.643-7.25-3.643zm12.457-9.707a1 1 0 0 1 0 1.414L20.414 11H26a1 1 0 0 1 .993.883L27 12a1 1 0 0 1-1 1h-5.586l2.293 2.293a1 1 0 0 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0zM10 3c3.039 0 5.5 2.461 5.5 5.5S13.039 14 10 14a5.499 5.499 0 0 1-5.5-5.5C4.5 5.461 6.961 3 10 3zm0 2a3.499 3.499 0 0 0-3.5 3.5c0 1.934 1.566 3.5 3.5 3.5s3.5-1.566 3.5-3.5S11.934 5 10 5z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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