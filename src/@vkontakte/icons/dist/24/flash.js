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
var id = 'flash_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="flash_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M9.774 19.116c-.513 2.065.257 2.492 1.634.985l5.784-6.646c1.338-1.634 1.003-2.946-.924-3.274l-2.789-.517a.3.3 0 0 1-.237-.365l1.073-4.428c.515-2.078-.342-2.454-1.628-.982a788.508 788.508 0 0 1-4.21 4.72c-.335.37-.874.949-1.616 1.736-1.629 1.807-.772 3.117 1.111 3.445l2.666.478a.3.3 0 0 1 .238.367l-1.102 4.48z" fill="currentColor" /></g></symbol>';

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