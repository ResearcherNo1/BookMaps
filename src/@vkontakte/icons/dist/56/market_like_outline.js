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
var id = 'market_like_outline_56';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" id="market_like_outline_56"><g fill="none"><path d="M0 0h56v56H0z" /><path d="M43.947 30.5c4.178 0 7.553 3.44 7.553 7.668 0 4.183-1.641 6.277-8.352 11.596l-3.095 2.453a2.5 2.5 0 0 1-3.106 0l-3.45-2.735c-6.414-5.113-7.997-7.205-7.997-11.314 0-4.229 3.375-7.668 7.553-7.668 1.955 0 3.71.808 5.237 2.35l.21.217.21-.217c1.454-1.469 3.115-2.271 4.96-2.345zm0 3c-1.51 0-2.891.882-4.206 2.819L38.5 38.148l-1.241-1.83c-1.315-1.936-2.696-2.818-4.206-2.818-2.508 0-4.553 2.084-4.553 4.668 0 2.952 1.187 4.466 7.216 9.245l2.784 2.206 3.108-2.464c5.641-4.491 6.848-6.031 6.89-8.827l.002-.16c0-2.584-2.045-4.668-4.553-4.668zM28 6c5.523 0 10 4.477 10 9.999l3.013.001c1.65 0 2.509.166 3.404.645a4.68 4.68 0 0 1 1.938 1.938c.45.84.623 1.647.643 3.104l.002.3v2.604a1.5 1.5 0 0 1-2.993.144L44 24.591v-2.604l-.004-.438c-.019-.863-.1-1.203-.286-1.551a1.68 1.68 0 0 0-.708-.708l-.162-.078c-.33-.143-.724-.203-1.598-.211L14.987 19c-1.196 0-1.588.076-1.99.29a1.68 1.68 0 0 0-.707.708l-.078.162c-.143.33-.203.724-.211 1.598L12 36.603c0 3.229.248 4.514.958 5.841a6.224 6.224 0 0 0 2.598 2.598l.295.15c1.184.571 2.45.79 5.195.807l.35.001h1.46A1.5 1.5 0 0 1 23 48.993l-.145.007h-1.458l-.76-.005c-3.172-.047-4.805-.403-6.496-1.308a9.223 9.223 0 0 1-3.828-3.828c-.94-1.756-1.288-3.45-1.312-6.868L9 21.987c0-1.65.166-2.509.645-3.404a4.68 4.68 0 0 1 1.938-1.938c.84-.45 1.647-.623 3.104-.643L35 15.999l-.004-.24A7 7 0 0 0 21 16h-3c0-5.523 4.477-10 10-10zm-8.5 16a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" fill="currentColor" /></g></symbol>';

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