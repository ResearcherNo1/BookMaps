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
var id = 'backspace_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="backspace_outline_28"><g fill-rule="nonzero" fill="none"><path d="M0 0h28v28H0z" /><path d="M18.666 4c2.245 0 3.287.278 4.265.801a5.452 5.452 0 0 1 2.268 2.268c.523.978.801 2.02.801 4.265v5.332c0 2.245-.278 3.287-.801 4.265a5.452 5.452 0 0 1-2.268 2.268c-.978.523-2.02.801-4.265.801h-6.91c-1.124 0-1.52-.05-1.954-.165a3.51 3.51 0 0 1-1.182-.56l-.142-.108c-.306-.24-.605-.547-1.222-1.301L3.56 17.34c-1-1.226-1.26-1.757-1.43-2.39a3.605 3.605 0 0 1 0-1.902c.17-.633.43-1.164 1.43-2.39l3.96-4.842c.527-.626.786-.863 1.101-1.091a3.51 3.51 0 0 1 1.182-.56c.406-.109.777-.16 1.739-.165L18.666 4zm0 2l-7.28.002-.328.007c-.288.01-.463.028-.613.059l-.13.03a1.512 1.512 0 0 0-.523.248l-.105.08c-.176.145-.366.348-.758.823l-3.82 4.676c-.655.8-.881 1.148-1 1.486l-.048.157c-.08.293-.08.57 0 .864l.048.157c.119.338.345.686 1 1.486l3.82 4.676.332.392c.185.212.309.334.426.43l.105.08c.166.12.326.196.524.249l.142.033c.198.039.443.058.928.063l7.28.002c1.777 0 2.565-.16 3.321-.565a3.453 3.453 0 0 0 1.448-1.448c.38-.712.545-1.452.563-3.018v-5.938c-.018-1.566-.182-2.306-.563-3.018a3.453 3.453 0 0 0-1.448-1.448C21.231 6.16 20.443 6 18.666 6zm-6.873 4.293a1 1 0 0 1 1.414 0l2.293 2.292 2.293-2.292a1 1 0 0 1 1.414 1.414L16.915 14l2.292 2.293a1 1 0 0 1 .083 1.32l-.083.094a1 1 0 0 1-1.414 0L15.5 15.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L14.086 14l-2.293-2.293a1 1 0 0 1-.083-1.32z" fill="currentColor" /></g></symbol>';

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