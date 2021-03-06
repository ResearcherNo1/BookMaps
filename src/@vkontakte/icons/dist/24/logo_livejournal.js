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
var id = 'logo_livejournal_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="logo_livejournal_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M6.801 4.448c.845-.628 2.446-1.12 3.167-.626-.822.095-1.794.495-2.699 1.169-.96.715-1.643 1.585-1.944 2.382C4.912 6.51 5.9 5.12 6.8 4.448zM9.1 8.123l4.504 6.009s.687 1.755-.638 3.462l-5.458-7.28C7.743 9.597 8.3 8.81 9.1 8.123zm8.349 5.622c-.836.723-3.032.615-3.484.12L9.449 7.84l.042-.035c.887-.659 1.836-1.056 2.644-1.16l5.314 7.1zM5.93 8.212c.276-.827.977-1.75 1.982-2.499.891-.662 1.843-1.058 2.655-1.162l1.016 1.359c-.83.087-1.816.489-2.735 1.173-.97.723-1.66 1.608-1.955 2.412L5.93 8.212zM18.517 18.95a1.565 1.565 0 0 0-1.054.785l-4.075-1.84c.306-.472 1.174-1.878.898-3.298 1.354.534 2.87-.018 3.458-.457l.075.102.698 4.708zM20.002 22l-1.056-8.257-8.013-10.669c-.805-1.074-2.94-.84-4.77.523-1.83 1.362-2.66 3.336-1.856 4.41l8.024 10.703 5.417 2.322a.85.85 0 0 0 .171.074l2.083.894z" fill="currentColor" /></g></symbol>';

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