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

var viewBox = '0 0 56 56';
var id = 'users_outline_56';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" id="users_outline_56"><g fill="none" fill-rule="evenodd"><path d="M0 0h56v56H0z" /><path d="M39.5 31c5.609 0 10.5 2.699 10.5 8 0 2.625-1.833 4-4 4h-8.5a1.5 1.5 0 0 1 0-3H46c.667 0 1-.25 1-1 0-3.164-3.328-5-7.5-5-.71 0-1.482.07-2.226.208a1.5 1.5 0 1 1-.548-2.95A15.385 15.385 0 0 1 39.5 31zm-19-2c7.356 0 13.5 2.836 13.5 9 0 3.078-1.922 5-4.5 5h-18C8.814 43 7 41.59 7 38.5c0-6.545 6.065-9.5 13.5-9.5zm0 3C14.514 32 10 34.2 10 38.5c0 1.244.33 1.5 1.5 1.5h18c.922 0 1.5-.578 1.5-2 0-3.874-4.606-6-10.5-6zM39 15a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13zm-18.5-4a7.5 7.5 0 1 1 0 15 7.5 7.5 0 0 1 0-15zM39 18a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm-18.5-4a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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
    width: !isNaN(props.width) ? +props.width : 56,
    height: !isNaN(props.height) ? +props.height : 56
  }));
}

var _default = Icon;
exports.default = _default;