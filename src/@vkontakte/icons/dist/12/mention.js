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
var id = 'mention_12';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" id="mention_12"><g fill="none" fill-rule="evenodd"><path d="M0 0h12v12H0z" /><path d="M6.165 11c.764 0 1.443-.096 1.895-.246.367-.12.495-.28.495-.49 0-.21-.14-.342-.391-.342-.061 0-.14.006-.239.024-.55.132-.971.216-1.57.216-2.629 0-4.401-1.497-4.401-4.09 0-2.51 1.644-4.24 4.144-4.24 2.182 0 3.948 1.312 3.948 3.725 0 1.257-.464 2.138-1.143 2.138-.44 0-.678-.234-.678-.641v-2.97c0-.335-.196-.54-.526-.54-.324 0-.525.205-.525.54v.3h-.062c-.25-.534-.819-.84-1.491-.84-1.216 0-2.078 1.007-2.078 2.486 0 1.503.862 2.533 2.12 2.533.71 0 1.26-.347 1.529-.958h.061c.11.605.685.958 1.443.958C10.12 8.563 11 7.275 11 5.485 11 2.755 8.952 1 6.11 1 3.09 1 1 2.982 1 6.036 1 9.15 3.164 11 6.165 11zm-.287-3.371c-.758 0-1.204-.6-1.204-1.593 0-.988.452-1.575 1.204-1.575.77 0 1.259.61 1.259 1.569 0 .982-.495 1.599-1.26 1.599z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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