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
var id = 'notification_outline_56';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" id="notification_outline_56"><g fill="none" fill-rule="evenodd"><path d="M0 0h56v56H0z" /><path d="M28.01 7c8.775 0 15.49 7.355 15.49 16.662l-.01 3.654c.001.77.445 1.564 1.596 2.918.137.16-.005-.003.544.632 2.063 2.387 2.87 3.746 2.87 5.81a6.1 6.1 0 0 1-.062.978 4.853 4.853 0 0 1-.473 1.51C47.045 40.975 45.06 42 42 42h-5.582l-.049.182C35.121 46.62 32.25 49 28 49c-4.307 0-7.198-2.445-8.42-6.999L14 42c-3.15 0-5.153-1.053-6.032-2.92a4.852 4.852 0 0 1-.414-1.442 6.586 6.586 0 0 1-.054-.962c0-2.064.805-3.422 2.864-5.81.548-.634.407-.47.543-.631 1.15-1.356 1.593-2.15 1.593-2.92v-3.657C12.5 14.358 19.23 7 28.01 7zm5.276 35H22.714c.943 2.753 2.64 4 5.286 4 2.647 0 4.343-1.247 5.286-4zm-5.277-32C20.95 10 15.5 15.958 15.5 23.658v3.656c0 1.7-.722 2.995-2.305 4.861l-.281.33-.278.322c-1.597 1.85-2.136 2.76-2.136 3.85 0 .52.04.821.183 1.126C11.021 38.522 11.931 39 14 39h28c2.004 0 2.926-.476 3.291-1.195.163-.32.209-.635.209-1.129 0-1.088-.54-1.997-2.14-3.848l-.278-.323a56.214 56.214 0 0 1-.282-.329c-1.586-1.866-2.31-3.16-2.31-4.862l.01-3.656C40.5 15.954 35.064 10 28.01 10z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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