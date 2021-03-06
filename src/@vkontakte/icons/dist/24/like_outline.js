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
var id = 'like_outline_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="like_outline_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M15.992 4.006c-1.451.064-2.753.637-3.881 1.694l-.117.113-.122-.118C10.662 4.576 9.275 4 7.734 4 4.577 4 2 6.56 2 9.717c0 3.088 1.127 4.552 6.182 8.546l2.688 2.098a1.837 1.837 0 0 0 2.26 0l2.364-1.843.933-.74C20.965 14.144 22 12.676 22 9.718 22 6.56 19.423 4 16.266 4zm.274 1.794c2.165 0 3.934 1.757 3.934 3.917l-.005.294c-.076 2.156-1.062 3.341-5.509 6.852l-2.663 2.078a.038.038 0 0 1-.046 0l-2.364-1.843-.874-.691c-4.142-3.31-4.939-4.44-4.939-6.69C3.8 7.557 5.569 5.8 7.734 5.8c1.333 0 2.507.618 3.57 1.915a.9.9 0 0 0 1.398-.007C13.739 6.416 14.909 5.8 16.266 5.8z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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