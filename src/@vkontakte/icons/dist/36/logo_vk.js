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

var viewBox = '0 0 36 36';
var id = 'logo_vk_36';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" id="logo_vk_36"><g fill="none" fill-rule="evenodd"><path d="M0 0h36v36H0z" /><path d="M35.174 9.422c.25-.82 0-1.422-1.191-1.422h-3.939c-1 0-1.463.52-1.713 1.094 0 0-2.003 4.795-4.84 7.91-.918.901-1.335 1.188-1.836 1.188-.25 0-.613-.287-.613-1.106V9.422c0-.984-.29-1.422-1.125-1.422h-6.189c-.626 0-1.002.457-1.002.89 0 .932 1.419 1.147 1.565 3.77v5.696c0 1.25-.23 1.476-.73 1.476-1.336 0-4.583-4.817-6.51-10.328C6.674 8.433 6.295 8 5.29 8H1.35C.225 8 0 8.52 0 9.094c0 1.025 1.335 6.107 6.217 12.828C9.471 26.512 14.057 29 18.229 29c2.504 0 2.813-.553 2.813-1.505v-3.469c0-1.105.238-1.326 1.03-1.326.584 0 1.586.287 3.922 2.5 2.67 2.623 3.111 3.8 4.613 3.8h3.939c1.125 0 1.687-.553 1.363-1.643-.355-1.087-1.63-2.664-3.322-4.534-.918-1.065-2.295-2.213-2.712-2.786-.584-.738-.417-1.066 0-1.722 0 0 4.798-6.639 5.299-8.893z" fill="currentColor" /></g></symbol>';

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
    width: !isNaN(props.width) ? +props.width : 36,
    height: !isNaN(props.height) ? +props.height : 36
  }));
}

var _default = Icon;
exports.default = _default;