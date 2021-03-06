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
var id = 'fire_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="fire_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M13.71 1.534c.74.166 1.206.902 1.04 1.643-.078.342-.183.626-.336.863-2.161 3.336-1.813 5.537-.372 5.75 1.41.209 2.197-.692 1.97-2.79l-.134-1.245a1.345 1.345 0 0 1 2.078-1.265c.745.49 1.58 1.327 2.534 2.517 2.71 3.379 3.547 6.333 3.509 9.359-.071 5.636-4.273 9.634-10 9.634C8.25 26 4 21.978 4 16.347c.03-4.98 2.74-10.39 7.811-14.008.197-.14.456-.33.778-.568.321-.239.73-.325 1.12-.237zm-2.08 3.488C7.96 8.197 6.024 12.462 6 16.353 6 20.848 9.33 24 14 24c4.647 0 7.942-3.135 7.999-7.66.032-2.593-.678-5.1-3.07-8.082a18.578 18.578 0 0 0-.894-1.042c.163 3.068-1.613 4.948-4.286 4.553-2.706-.4-3.582-3.252-2.118-6.747z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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