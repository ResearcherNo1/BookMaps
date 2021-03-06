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
var id = 'inbox_outline_56';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" id="inbox_outline_56"><g fill="none" fill-rule="evenodd"><path d="M0 0h56v56H0z" /><path d="M37.01 9c2.377 0 3.527.187 4.758.742a6.908 6.908 0 0 1 2.815 2.308c.786 1.098 1.195 2.19 1.66 4.52l2.728 13.636c.02.101.029.197.029.294v7.308c0 2.665-.252 3.972-.979 5.33a6.952 6.952 0 0 1-2.883 2.883c-1.358.727-2.665.979-5.33.979H16.192c-2.665 0-3.972-.252-5.33-.979a6.952 6.952 0 0 1-2.883-2.883C7.252 41.78 7 40.473 7 37.808V30.5l.007-.144c.004-.048.011-.095.02-.141l.002-.01L9.756 16.57c.466-2.33.875-3.42 1.661-4.52a6.908 6.908 0 0 1 2.815-2.307C15.463 9.187 16.613 9 18.99 9h18.02zM10 37.808c0 2.212.162 3.05.624 3.915.383.717.936 1.27 1.653 1.653.864.462 1.703.624 3.915.624h23.616c2.212 0 3.05-.162 3.915-.624a3.952 3.952 0 0 0 1.653-1.653c.462-.864.624-1.703.624-3.915V32h-9.055a9.002 9.002 0 0 1-8.679 7.996L28 40a9.001 9.001 0 0 1-8.945-8H10v5.808zm27.3-25.807L18.99 12c-1.987 0-2.737.122-3.525.477a3.909 3.909 0 0 0-1.608 1.318c-.502.703-.77 1.414-1.159 3.363L10.33 29H20.5a1.5 1.5 0 0 1 1.493 1.356L22 30.5v.5a6 6 0 1 0 12 0v-.5a1.5 1.5 0 0 1 1.5-1.5h10.17l-2.368-11.842c-.39-1.949-.657-2.66-1.16-3.363a3.909 3.909 0 0 0-1.607-1.318c-.748-.337-1.463-.464-3.236-.476z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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