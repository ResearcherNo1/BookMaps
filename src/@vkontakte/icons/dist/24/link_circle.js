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
var id = 'link_circle_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="link_circle_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M14.5 10.914l-5.293 5.293a1 1 0 1 1-1.414-1.414L13.086 9.5H9.5a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-3.586zM12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11zm0-1.8a9.2 9.2 0 1 0 0-18.4 9.2 9.2 0 0 0 0 18.4z" fill="currentColor" /></g></symbol>';

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