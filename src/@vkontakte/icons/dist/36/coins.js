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

var viewBox = '0 0 36 36';
var id = 'coins_36';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" id="coins_36"><g fill="none" fill-rule="evenodd"><path d="M0 0h36v36H0z" opacity=".1" /><path d="M31.995 26.707C31.801 31.037 25.51 34 18 34c-7.63 0-14-3.058-14-7.5v-16C4 6.058 10.37 3 18 3c7.51 0 13.8 2.963 13.995 7.293L32 10.5v16zM18 18c-4.42 0-8.419-1.027-11-2.754V18.5c0 2.185 4.822 4.5 11 4.5s11-2.315 11-4.5v-3.255C26.42 16.973 22.422 18 18 18zm0-12C11.822 6 7 8.315 7 10.5S11.822 15 18 15s11-2.315 11-4.5S24.178 6 18 6zm11 17.245C26.42 24.973 22.422 26 18 26c-4.42 0-8.419-1.027-11-2.754V26.5l.005.12C7.175 28.768 11.935 31 18 31c6.178 0 11-2.315 11-4.5z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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
    width: !isNaN(props.width) ? +props.width : 36,
    height: !isNaN(props.height) ? +props.height : 36
  }));
}

var _default = Icon;
exports.default = _default;