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
var id = 'lock_outline_56';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" id="lock_outline_56"><g fill="none" fill-rule="evenodd"><path d="M0 0h56v56H0z" /><path d="M28 5c5.523 0 10 4.477 10 10l.002 6.028c1.416.079 2.374.33 3.366.86a6.634 6.634 0 0 1 2.743 2.744c.66 1.234.889 2.417.889 4.496v11.744c0 2.079-.228 3.262-.889 4.496a6.634 6.634 0 0 1-2.743 2.743c-1.234.66-2.417.889-4.496.889H19.128c-2.079 0-3.262-.228-4.496-.889a6.634 6.634 0 0 1-2.743-2.743c-.66-1.234-.889-2.417-.889-4.496V29.128c0-2.079.228-3.262.889-4.496a6.634 6.634 0 0 1 2.743-2.743c.992-.53 1.95-.783 3.367-.861L18 15c0-5.523 4.477-10 10-10zm8.872 19H19.128c-1.783 0-2.43.186-3.082.534a3.635 3.635 0 0 0-1.512 1.512c-.348.652-.534 1.299-.534 3.082v11.744c0 1.783.186 2.43.534 3.082.349.652.86 1.163 1.512 1.512.652.348 1.299.534 3.082.534h17.744c1.783 0 2.43-.186 3.082-.534a3.635 3.635 0 0 0 1.512-1.512c.348-.652.534-1.299.534-3.082V29.128c0-1.783-.186-2.43-.534-3.082a3.635 3.635 0 0 0-1.512-1.512c-.652-.348-1.299-.534-3.082-.534zM28 30a3 3 0 0 1 1 5.829V39a1 1 0 0 1-2 0v-3.17A3.001 3.001 0 0 1 28 30zm0-22a7 7 0 0 0-7 7v6h14v-6a7 7 0 0 0-7-7z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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