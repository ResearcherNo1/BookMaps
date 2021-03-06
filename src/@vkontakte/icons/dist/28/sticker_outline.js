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
var id = 'sticker_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="sticker_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M14.556 2.516l.137.126L25.33 13.281c.44.44.673 1.047.64 1.668a5.161 5.161 0 0 1-.012.175c-.584 6.087-5.712 10.847-11.952 10.847C7.376 25.97 2 20.595 2 13.964 2 7.753 6.716 2.644 12.762 2.02c.04-.004.127-.01.26-.017.56-.03 1.108.155 1.534.513zm5.717 14.182A9 9 0 0 1 11.995 4.16 10.01 10.01 0 0 0 4 13.964C4 19.49 8.48 23.97 14.007 23.97c4.798 0 8.852-3.392 9.799-7.963l.007-.034a8.946 8.946 0 0 1-3.54.724zM13.69 4.468l.247.248a6.966 6.966 0 0 0-.664 2.982 7 7 0 0 0 7 7c1.048 0 2.06-.23 2.982-.664l.35.349-9.915-9.915z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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