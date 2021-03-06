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
var id = 'document_outline_56';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" id="document_outline_56"><g fill="none" fill-rule="evenodd"><path d="M0 0h56v56H0z" /><path d="M30.798 4.231a6.723 6.723 0 0 1 2.095.868c.632.395 1.128.811 2.096 1.77l9.943 9.942c1.102 1.102 1.548 1.622 1.969 2.296.412.658.693 1.338.868 2.095.178.774.231 1.457.231 3.016v13.745c0 3.884-.356 5.726-1.38 7.64a9.678 9.678 0 0 1-4.017 4.018C40.69 50.644 38.847 51 34.963 51H22.037c-3.884 0-5.726-.356-7.64-1.38a9.678 9.678 0 0 1-4.018-4.017C9.356 43.69 9 41.847 9 37.963V15.632c0-2.492.445-4.489 1.38-6.235a9.678 9.678 0 0 1 4.017-4.018C16.143 4.445 18.14 4 20.632 4h7.15c1.56 0 2.242.053 3.016.231zm-2.772 2.77L20.632 7c-2.022 0-3.535.338-4.82 1.025a6.678 6.678 0 0 0-2.787 2.787C12.338 12.097 12 13.61 12 15.632v22.33c0 3.432.265 4.807 1.025 6.226a6.678 6.678 0 0 0 2.787 2.787c1.42.76 2.794 1.025 6.225 1.025h12.926c3.43 0 4.806-.265 6.225-1.025a6.678 6.678 0 0 0 2.787-2.787c.76-1.42 1.025-2.794 1.025-6.225V24.218c0-.561-.006-.973-.022-1.298-.15.053-.311.08-.478.08h-11a4.5 4.5 0 0 1-4.5-4.5v-11c0-.167.027-.328.078-.478-.274-.013-.613-.02-1.052-.022zM32 8.166V18.5a1.5 1.5 0 0 0 1.5 1.5l10.333.001a23.177 23.177 0 0 0-1.022-1.07L33.068 9.19c-.474-.473-.803-.79-1.068-1.022z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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