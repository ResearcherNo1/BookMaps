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

var viewBox = '0 0 44 44';
var id = 'smile_outline_44';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" id="smile_outline_44"><g fill="none" fill-rule="evenodd"><path d="M0 0h44v44H0z" /><path d="M22 40c-9.941 0-18-8.059-18-18S12.059 4 22 4s18 8.059 18 18-8.059 18-18 18zm0-3c8.284 0 15-6.716 15-15S30.284 7 22 7 7 13.716 7 22s6.716 15 15 15zm-6.582-8.863a1.5 1.5 0 0 1 2.194-2.046 6 6 0 0 0 8.775.002 1.5 1.5 0 1 1 2.191 2.049 9 9 0 0 1-13.16-.005zm11.645-7.262a2.437 2.437 0 1 1 0-4.875 2.437 2.437 0 0 1 0 4.875zm-10.125 0a2.437 2.437 0 1 1 0-4.875 2.437 2.437 0 0 1 0 4.875z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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
    width: !isNaN(props.width) ? +props.width : 44,
    height: !isNaN(props.height) ? +props.height : 44
  }));
}

var _default = Icon;
exports.default = _default;