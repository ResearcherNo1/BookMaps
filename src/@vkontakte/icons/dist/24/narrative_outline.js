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
var id = 'narrative_outline_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="narrative_outline_24"><path d="M14.298 1.435c.732.17 1.377.543 1.891 1.092.521.556.825 1.145 1.151 2.298l.79 2.944a1 1 0 1 1-1.931.518l-.72-2.69-.113-.401c-.215-.729-.377-1.024-.636-1.302a1.726 1.726 0 0 0-.887-.512c-.37-.086-.707-.078-1.445.1l-.405.104L6.866 4.96c-.854.228-1.254.394-1.51.583l-.06.047-.134.119c-.26.243-.43.539-.512.886-.093.4-.076.763.148 1.638l2.723 10.17.113.401c.215.729.377 1.024.636 1.302.244.26.54.43.887.512.401.093.745.076 1.607-.14a1 1 0 1 1 .487 1.94c-1.148.288-1.805.32-2.549.147a3.726 3.726 0 0 1-1.891-1.092c-.521-.556-.825-1.145-1.151-2.298L2.922 8.963c-.355-1.324-.405-2.027-.22-2.823a3.722 3.722 0 0 1 .93-1.728l.183-.182.179-.157c.496-.412 1.077-.685 2.091-.973l.263-.072 5.128-1.374c1.323-.355 2.026-.405 2.822-.22zM18.368 11c2 0 3.632 1.592 3.632 3.567 0 1.91-.772 2.851-3.78 5.134l-1.328 1.007c-.527.4-1.257.4-1.784 0l-1.328-1.007C10.772 17.418 10 16.476 10 14.567 10 12.592 11.631 11 13.632 11c.829 0 1.595.224 2.282.66l.086.057.086-.057a4.174 4.174 0 0 1 2.036-.653zm0 2c-.63 0-1.17.228-1.67.716l-.349.34a.5.5 0 0 1-.698 0l-.35-.34c-.5-.488-1.04-.716-1.67-.716-.906 0-1.631.707-1.631 1.567 0 .993.4 1.546 2.524 3.185L16 18.875l1.012-.767c2.45-1.859 2.957-2.442 2.988-3.44l.001-.1c0-.86-.725-1.568-1.632-1.568z" fill="currentColor" /></symbol>';

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