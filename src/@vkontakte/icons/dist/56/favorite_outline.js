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
var id = 'favorite_outline_56';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" id="favorite_outline_56"><g fill="none" fill-rule="evenodd"><path d="M0 0h56v56H0z" /><path d="M26.81 12.089l-4.224 9.223a.401.401 0 0 1-.293.214l-8.873 1.119c-1.546.194-1.87 1.208-.7 2.261l6.626 5.955c.087.08.133.23.107.343L17.14 41.227c-.352 1.527.408 2.044 1.701 1.144l8.998-6.258a.306.306 0 0 1 .325 0l8.995 6.258c1.3.905 2.055.388 1.701-1.144l-2.313-10.023a.377.377 0 0 1 .107-.343l6.626-5.955c1.168-1.05.857-2.065-.7-2.261l-8.873-1.119a.41.41 0 0 1-.293-.214l-4.23-9.223c-.655-1.427-1.718-1.43-2.373 0zm16.145 7.58c4.114.518 5.404 4.705 2.33 7.468l-5.464 4.912 1.962 8.504c.971 4.208-2.786 6.751-6.337 4.281L28 39.654l-7.447 5.18c-3.542 2.464-7.308-.077-6.337-4.281l1.962-8.504-5.464-4.912c-3.079-2.767-1.77-6.952 2.33-7.469l7.423-.936 3.615-7.892c1.724-3.765 6.103-3.762 7.828-.002l3.62 7.894 7.424.936z" fill="currentColor" /></g></symbol>';

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