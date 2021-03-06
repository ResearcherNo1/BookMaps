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
var id = 'camera_off_outline_56';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" id="camera_off_outline_56"><g fill="none" fill-rule="evenodd"><path d="M0 0h56v56H0z" /><path d="M6.44 6.44a1.5 1.5 0 0 1 2.12 0l42 42a1.5 1.5 0 0 1-2.12 2.12L44.877 47l-30.164-.002c-4.805 0-8.575-3.752-8.71-8.146L6 38.606V21.698c0-4.057 2.046-7.128 5.328-8.087l.127-.035-5.016-5.015a1.5 1.5 0 0 1-.103-2.008zm7.432 9.553l-1.758.514c-1.84.568-3.03 2.31-3.11 4.91L9 21.697v16.908c0 2.786 2.372 5.27 5.485 5.387l.23.004L41.877 44l-9.022-9.022c-.114.08-.23.157-.348.23l-.287.172a8.5 8.5 0 0 1-11.36-11.994c.053-.082.113-.158.179-.226l-7.168-7.166zM33.328 9c1.613 0 2.767.49 3.778 1.592l.177.201 1.377 1.711c.326.404 1.156.75 2.002.797l.195.006h1.647c4.326 0 7.383 3.289 7.497 8.111l.003.28v18.908a1.5 1.5 0 0 1-2.993.145l-.007-.145V21.698c0-3.292-1.724-5.284-4.29-5.387l-.21-.004h-1.647c-1.752 0-3.556-.71-4.532-1.92l-1.331-1.655-.11-.124c-.393-.43-.73-.583-1.373-.605L33.328 12H22.386c-.829 0-1.184.163-1.666.732a1.5 1.5 0 1 1-2.289-1.939c.995-1.175 2.115-1.73 3.675-1.788l.28-.005h10.942zM23.197 25.318a5.5 5.5 0 0 0 7.533 7.458l-.049.026zm5.118-4.47a1.5 1.5 0 0 1 1.83-1.075 8.445 8.445 0 0 1 2.363 1.02 8.532 8.532 0 0 1 3.093 3.399c.402.8.675 1.662.807 2.557a1.5 1.5 0 1 1-2.967.438 5.45 5.45 0 0 0-.521-1.65 5.532 5.532 0 0 0-3.012-2.697 5.445 5.445 0 0 0-.519-.163 1.5 1.5 0 0 1-1.074-1.83z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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