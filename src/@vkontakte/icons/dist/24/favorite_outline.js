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

var viewBox = '0 0 24 24';
var id = 'favorite_outline_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="favorite_outline_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M11.525 4.386l-2.186 5.04-5.016.481c-.669.065-.787.457-.28.878l3.963 3.295-1.458 5.316c-.175.639.121.848.662.467L12 16.479l4.791 3.384c.545.385.837.173.661-.467l-1.457-5.316 3.963-3.295c.502-.417.382-.814-.28-.878l-5.017-.48-2.185-5.04c-.262-.606-.689-.607-.951 0zm4.365 3.35l3.96.38c2.246.215 2.998 2.608 1.259 4.054l-3.072 2.552 1.151 4.198c.62 2.263-1.505 3.776-3.435 2.413L12 18.683l-3.752 2.65c-1.923 1.358-4.056-.148-3.435-2.413l1.15-4.198-3.07-2.552c-1.745-1.45-.996-3.838 1.258-4.054l3.959-.38L9.873 3.67c.89-2.051 3.366-2.05 4.255 0l1.762 4.066z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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
    width: !isNaN(props.width) ? +props.width : 24,
    height: !isNaN(props.height) ? +props.height : 24
  }));
}

var _default = Icon;
exports.default = _default;