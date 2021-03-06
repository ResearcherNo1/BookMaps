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
var id = 'newsfeed_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="newsfeed_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M17.59 3c2.183 0 3.233.203 4.324.786a5.543 5.543 0 0 1 2.3 2.3c.583 1.091.786 2.14.786 4.324v7.18c0 2.183-.203 3.233-.786 4.324a5.543 5.543 0 0 1-2.3 2.3c-1.091.583-2.14.786-4.324.786h-7.18c-2.183 0-3.233-.203-4.324-.786a5.543 5.543 0 0 1-2.3-2.3C3.203 20.823 3 19.774 3 17.59v-7.18c0-2.183.203-3.233.786-4.324a5.543 5.543 0 0 1 2.3-2.3C7.177 3.203 8.226 3 10.41 3h7.18zM5 11L5 17.59c0 1.881.142 2.62.55 3.38.342.641.839 1.138 1.48 1.48.76.408 1.499.55 3.38.55h7.18c1.881 0 2.62-.142 3.38-.55a3.543 3.543 0 0 0 1.48-1.48c.408-.76.55-1.499.55-3.38L22.999 11h-18zM17.59 5h-7.18c-1.881 0-2.62.142-3.38.55-.641.342-1.138.839-1.48 1.48-.286.533-.441 1.056-.509 1.97H22.96c-.068-.914-.223-1.437-.509-1.97a3.543 3.543 0 0 0-1.48-1.48c-.76-.408-1.499-.55-3.38-.55z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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