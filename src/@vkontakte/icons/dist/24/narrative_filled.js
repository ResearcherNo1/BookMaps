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
var id = 'narrative_filled_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="narrative_filled_24"><path d="M11.436 3c.892 0 1.215.093 1.54.267.327.174.583.43.757.756.174.326.267.65.267 1.54v12.873c0 .892-.093 1.215-.267 1.54s-.43.583-.756.757-.65.267-1.54.267H5.563c-.892 0-1.215-.093-1.54-.267a1.817 1.817 0 0 1-.757-.756c-.174-.326-.267-.65-.267-1.54V5.563c0-.892.093-1.215.267-1.54.174-.327.43-.583.756-.757.326-.174.65-.267 1.54-.267zm7 2c.892 0 1.215.093 1.54.267.327.174.583.43.757.756.174.326.267.65.267 1.54v8.873c0 .892-.093 1.215-.267 1.54s-.43.583-.756.757-.65.267-1.54.267H16V5z" fill="currentColor" fill-rule="evenodd" /></symbol>';

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