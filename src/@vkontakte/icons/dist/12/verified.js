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

var viewBox = '0 0 12 12';
var id = 'verified_12';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" id="verified_12"><g fill="none" fill-rule="evenodd"><path d="M0 0h12v12H0z" /><path d="M5.809 11.293l-1.282.42a.615.615 0 0 1-.69-.224l-.79-1.093a.615.615 0 0 0-.309-.225l-1.284-.414a.615.615 0 0 1-.425-.586l.002-1.35a.615.615 0 0 0-.118-.363l-.795-1.09a.615.615 0 0 1 0-.724l.795-1.09a.615.615 0 0 0 .118-.363L1.03 2.842c-.001-.267.171-.504.425-.586l1.284-.414a.615.615 0 0 0 .31-.225l.79-1.093A.615.615 0 0 1 4.527.3l1.282.42c.124.04.258.04.382 0L7.473.3a.615.615 0 0 1 .69.224l.79 1.093a.615.615 0 0 0 .309.225l1.284.414a.615.615 0 0 1 .425.586l-.002 1.35c0 .13.041.257.118.362l.795 1.09a.615.615 0 0 1 0 .725l-.795 1.09a.615.615 0 0 0-.118.363l.002 1.349a.615.615 0 0 1-.425.586l-1.284.414a.615.615 0 0 0-.31.225l-.79 1.093a.615.615 0 0 1-.689.223l-1.282-.419a.615.615 0 0 0-.382 0zM3.959 6.04a.65.65 0 0 0-.919.92l1.5 1.5a.65.65 0 0 0 .92 0l3.5-3.5a.65.65 0 0 0-.92-.92L5 7.08 3.96 6.04z" fill="currentColor" /></g></symbol>';

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
    width: !isNaN(props.width) ? +props.width : 12,
    height: !isNaN(props.height) ? +props.height : 12
  }));
}

var _default = Icon;
exports.default = _default;