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
var id = 'magic_wand_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="magic_wand_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M15.358 12.637a1 1 0 0 1 0 1.414L4.75 24.658a1 1 0 1 1-1.414-1.414l10.607-10.607a1 1 0 0 1 1.414 0zm8.587 1.543a.3.3 0 0 1 0 .28l-1.237 2.34 1.237 2.34a.3.3 0 0 1-.405.405l-2.34-1.237-2.34 1.237a.3.3 0 0 1-.405-.405l1.237-2.34-1.237-2.34a.3.3 0 0 1 .405-.405l2.34 1.237 2.34-1.237a.3.3 0 0 1 .405.125zm-10-10a.3.3 0 0 1 0 .28L12.708 6.8l1.237 2.34a.3.3 0 0 1-.405.406L11.2 8.309 8.86 9.546a.3.3 0 0 1-.405-.406L9.692 6.8 8.455 4.46a.3.3 0 0 1 .405-.405l2.34 1.237 2.34-1.237a.3.3 0 0 1 .405.125zm10 0a.3.3 0 0 1 0 .28L22.708 6.8l1.237 2.34a.3.3 0 0 1-.405.405L21.2 8.308l-2.34 1.237a.3.3 0 0 1-.405-.405l1.237-2.34-1.237-2.34a.3.3 0 0 1 .405-.405l2.34 1.237 2.34-1.237a.3.3 0 0 1 .405.125z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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