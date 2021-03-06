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
var id = 'camera_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="camera_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M15.697 2c.52 0 .993.065 1.43.202.458.143.87.364 1.244.665.356.288.673.645.961 1.078l.266.398.134.189c.097.13.162.197.235.258a.767.767 0 0 0 .28.15c.129.038.259.056.578.06h.218c1.192.052 1.871.216 2.587.599A4.271 4.271 0 0 1 25.4 7.37c.445.831.599 1.631.599 3.245v5.975c0 2.183-.203 3.233-.786 4.324a5.543 5.543 0 0 1-2.3 2.3c-1.091.583-2.14.786-4.324.786H9.41c-2.183 0-3.233-.203-4.324-.786a5.543 5.543 0 0 1-2.3-2.3c-.553-1.034-.764-2.03-.784-3.988v-6.604c.018-1.421.18-2.172.597-2.952A4.271 4.271 0 0 1 4.37 5.6c.691-.37 1.347-.534 2.451-.583l.089-.012L7 5h.175c.32-.004.45-.022.577-.06a.767.767 0 0 0 .28-.15c.104-.085.19-.184.37-.447l.266-.398c.288-.433.605-.79.961-1.078a3.74 3.74 0 0 1 1.244-.665c.437-.137.91-.202 1.43-.202h3.394zm0 2h-3.394c-.327 0-.6.037-.832.11a1.74 1.74 0 0 0-.586.313c-.19.154-.372.36-.553.632l-.304.452c-.27.392-.465.613-.72.824a2.766 2.766 0 0 1-.98.524c-.34.102-.65.14-1.187.145l-.054.006-.27.012c-.752.039-1.109.133-1.504.345-.412.22-.73.538-.95.95-.269.502-.363.99-.363 2.302v5.975c0 1.881.142 2.62.55 3.38.342.641.839 1.138 1.48 1.48.68.365 1.343.517 2.822.545L9.41 22h9.18l.558-.005c1.479-.028 2.141-.18 2.823-.545a3.543 3.543 0 0 0 1.48-1.48c.364-.68.516-1.343.544-2.822L24 16.59v-5.975l-.005-.455c-.021-.98-.123-1.407-.358-1.847a2.271 2.271 0 0 0-.95-.95c-.431-.23-.82-.325-1.687-.363l-.242-.002c-.476-.008-.769-.047-1.086-.143a2.766 2.766 0 0 1-.98-.524c-.255-.21-.45-.432-.72-.824l-.304-.452a2.777 2.777 0 0 0-.553-.632 1.74 1.74 0 0 0-.586-.313 2.777 2.777 0 0 0-.832-.11zM14 8.5A5.25 5.25 0 1 1 14 19a5.25 5.25 0 0 1 0-10.5zm0 2a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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