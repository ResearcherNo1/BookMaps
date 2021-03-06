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
var id = 'privacy_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="privacy_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M5.995 5.18c.657 0 1.009.537 1.009 1.194v5.491c0 .216.253.395.47.395.223 0 .511-.18.511-.395V3.989c0-.66.33-1.192.99-1.192.658 0 1.021.531 1.021 1.192v7.079c0 .219.29.395.506.395.222 0 .495-.176.495-.395V3.19c0-.656.314-1.191.976-1.191.66 0 1.036.535 1.036 1.192v7.876c0 .219.242.395.464.395.216 0 .52-.176.52-.395V4.786c0-.661.319-1.177.975-1.177.66 0 1.022.516 1.022 1.176v10.729l2.286-2.676c.331-.447 1.004-.681 1.653-.257.337.197.859.81.194 1.678 0 0-2.444 3.088-3.803 4.738-1.295 1.654-3.81 2.503-5.514 2.503C5.248 21.5 5 17.712 5 16.43V6.374c0-.657.334-1.193.995-1.193" fill="currentColor" /></g></symbol>';

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