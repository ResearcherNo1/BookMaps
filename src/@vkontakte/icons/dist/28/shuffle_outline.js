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
var id = 'shuffle_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="shuffle_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M21.586 6.3c.122 0 .24.038.34.108l3.689 2.616a.586.586 0 0 1 0 .957l-3.69 2.616a.586.586 0 0 1-.925-.479V10.5h-4.2c-1.192 0-2.194.882-4.155 3.5 1.896 2.53 2.895 3.439 4.036 3.497l.119.003H21v-1.618a.586.586 0 0 1 .925-.479l3.69 2.616a.586.586 0 0 1 0 .957l-3.69 2.616a.586.586 0 0 1-.925-.478V19.5h-4.2c-1.988 0-3.231-.99-5.4-3.828C9.232 18.51 7.989 19.5 6 19.5H3a1 1 0 0 1 0-2h3c1.192 0 2.193-.882 4.154-3.499-1.895-2.531-2.894-3.44-4.035-3.498L6 10.5H3a1 1 0 0 1-.117-1.993L3 8.5h3c1.988 0 3.231.99 5.4 3.828C13.568 9.49 14.811 8.5 16.8 8.5H21V6.886c0-.324.262-.586.586-.586z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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