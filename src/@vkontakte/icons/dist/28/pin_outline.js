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
var id = 'pin_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="pin_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M10.632 18.824l-5.657 5.657c-.943.943-2.357-.471-1.414-1.414l5.657-5.657-4.55-4.55a1.375 1.375 0 0 1 .867-2.343l5.528-.426a.5.5 0 0 0 .315-.145l3.529-3.529a.5.5 0 0 0 .137-.255l.441-2.206a1 1 0 0 1 1.688-.511l7.424 7.424a1 1 0 0 1-.51 1.688l-2.207.441a.5.5 0 0 0-.255.137l-3.53 3.529a.5.5 0 0 0-.145.315l-.425 5.528a1.375 1.375 0 0 1-2.343.867l-4.55-4.55zm5.324-1.998a2.5 2.5 0 0 1 .725-1.576l3.53-3.53a2.5 2.5 0 0 1 1.277-.683l.374-.075L17.08 6.18l-.075.374a2.5 2.5 0 0 1-.684 1.278l-3.529 3.529a2.5 2.5 0 0 1-1.576.725l-4.173.32L15.635 21l.321-4.173z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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