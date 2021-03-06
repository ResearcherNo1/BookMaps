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
var id = 'message_outline_20';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" id="message_outline_20"><g fill="none" fill-rule="evenodd"><path opacity=".4" d="M0 0h20v20H0z" /><path d="M6.828 15.752a.75.75 0 0 1 .821-.207A7.52 7.52 0 0 0 10.25 16c3.772 0 6.75-2.694 6.75-6s-2.978-6-6.75-6S3.5 6.694 3.5 10c0 1.21.4 2.367 1.14 3.349a.75.75 0 0 1 .15.49c-.04.756-.403 1.785-1.085 3.135 1.483-.116 2.514-.534 3.123-1.222zM3.242 18.5a1.204 1.204 0 0 1-1.101-1.767c.644-1.216 1.016-2.14 1.121-2.73A7.009 7.009 0 0 1 2 10c0-4.17 3.681-7.5 8.25-7.5S18.5 5.83 18.5 10s-3.681 7.5-8.25 7.5a9.077 9.077 0 0 1-2.66-.393c-.996.881-2.456 1.336-4.348 1.393z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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