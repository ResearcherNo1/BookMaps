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
var id = 'send_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="send_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M6.934 18.123c-.763 2.044-1.242 3.48-1.438 4.307-.615 2.599-1.062 3.184 1.23 1.949 2.29-1.235 13.384-7.352 15.86-8.711 3.226-1.772 3.269-1.634-.174-3.516-2.622-1.433-13.585-7.39-15.687-8.56-2.101-1.17-1.844-.65-1.23 1.949.2.838.686 2.287 1.46 4.346a4.4 4.4 0 0 0 3.29 2.772l6.432 1.233a.11.11 0 0 1 0 .216L10.23 15.34a4.4 4.4 0 0 0-3.296 2.783z" fill="currentColor" /></g></symbol>';

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