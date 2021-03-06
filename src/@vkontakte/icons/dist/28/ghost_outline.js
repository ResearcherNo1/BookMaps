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
var id = 'ghost_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="ghost_outline_28"><g fill-rule="nonzero" fill="none"><path d="M0 0h28v28H0z" /><path d="M9.75 11a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5zm6.081 6.007a1 1 0 1 1 1.338 1.486c-1.744 1.57-3.676 1.57-5.403.637a4.95 4.95 0 0 1-.935-.637 1 1 0 0 1 1.24-1.564l.098.078c.084.075.276.217.547.363 1.05.567 2.081.567 3.115-.363zM14 2c2.935 0 5.357 1.008 7.595 3.086C23.771 7.106 25 9.87 25 12.762l-.019 8.601c-.152 2.062-1.628 3.579-3.644 3.579-.768 0-1.298-.173-2.014-.551l-.261-.138-.134-.065c-.248-.115-.394-.138-.609-.102-.146.025-.303.107-.554.302-.097.075-.477.387-.533.432l-.196.152C16.123 25.66 15.251 26 14 26c-1.337 0-2.255-.393-3.243-1.177l-.597-.48c-.219-.165-.358-.236-.48-.257-.25-.042-.407-.004-.742.167l-.493.256c-.605.296-1.1.433-1.782.433-2.01 0-3.547-1.512-3.647-3.65L3 12.76c0-2.89 1.23-5.654 3.405-7.674C8.59 3.056 11.1 2 14 2zm0 2c-2.376 0-4.406.854-6.234 2.552C5.994 8.197 5 10.432 5 12.758l.015 8.485c.05 1.04.719 1.699 1.648 1.699.382 0 .627-.08 1.081-.32l.282-.148c.683-.35 1.245-.485 1.986-.36.492.083.899.29 1.351.631.148.112.617.496.637.511l.177.136c.582.429 1.07.608 1.823.608.829 0 1.322-.213 1.983-.742.035-.028.433-.355.558-.452l.181-.135c.416-.297.801-.479 1.266-.557.741-.125 1.303.01 1.986.36l.443.23c.357.176.586.238.92.238.922 0 1.572-.668 1.647-1.654L23 12.76c0-2.328-.994-4.563-2.766-6.208C18.356 4.807 16.415 4 14 4zm2.895 7.878c1.033-.556 2.225-.556 3.274.385.41.368.444.998.074 1.407a1.003 1.003 0 0 1-1.412.074l-.1-.082c-.298-.22-.565-.203-.885-.03-.097.051-.162.1-.177.112l-.098.078a1.003 1.003 0 0 1-1.314-.152.994.994 0 0 1 .074-1.407c.124-.111.314-.25.564-.385z" fill="currentColor" /></g></symbol>';

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