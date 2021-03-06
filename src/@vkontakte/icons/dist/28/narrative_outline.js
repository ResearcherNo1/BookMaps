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
var id = 'narrative_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="narrative_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M15.298 2.435c.732.17 1.377.543 1.891 1.092.521.556.825 1.145 1.151 2.298l.845 3.145a1 1 0 0 1-1.932.518l-.774-2.89-.113-.402c-.215-.729-.377-1.024-.636-1.302a1.726 1.726 0 0 0-.887-.512c-.37-.086-.707-.078-1.445.1l-.405.104L7.866 5.96c-.854.228-1.254.394-1.51.583l-.06.047-.134.119c-.26.243-.43.539-.512.886-.093.4-.076.763.148 1.638l3.241 12.1c.277 1.033.446 1.381.749 1.705.244.26.54.43.887.511.338.08.626.08 1.208-.046l.206-.047.449-.113a1 1 0 0 1 .602 1.903l-.111.036-.465.117c-1.024.241-1.643.262-2.344.098a3.726 3.726 0 0 1-1.891-1.092c-.522-.556-.825-1.146-1.151-2.298L3.922 9.963c-.355-1.324-.405-2.027-.22-2.823a3.722 3.722 0 0 1 .93-1.728l.183-.182.179-.157c.496-.412 1.077-.685 2.091-.973l.263-.072 5.128-1.374c1.323-.355 2.026-.405 2.822-.22zM20.842 12A4.158 4.158 0 0 1 25 16.158c0 2.242-.892 3.358-4.447 6.124l-1.647 1.28a1.476 1.476 0 0 1-1.812 0l-1.647-1.28C11.892 19.516 11 18.4 11 16.158A4.158 4.158 0 0 1 15.158 12c.986 0 1.895.28 2.705.824l.137.096.137-.096a4.751 4.751 0 0 1 2.438-.817zm0 2c-.803 0-1.498.3-2.135.937l-.353.353a.501.501 0 0 1-.708 0l-.353-.353c-.637-.636-1.332-.937-2.135-.937A2.158 2.158 0 0 0 13 16.158c0 1.41.584 2.14 3.675 4.545L18 21.733l1.845-1.438c2.555-2.02 3.12-2.763 3.153-4.015l.002-.122A2.158 2.158 0 0 0 20.842 14z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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