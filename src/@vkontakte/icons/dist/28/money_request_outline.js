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
var id = 'money_request_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="money_request_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M19.293 19.293a1 1 0 0 1 1.414 1.414L19.413 22H27a1 1 0 0 1 .993.883L28 23a1 1 0 0 1-1 1h-7.585l1.292 1.293a1 1 0 0 1 .083 1.32l-.083.094a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414zM24 12.846c0-1.068-.073-1.449-.283-1.84a1.726 1.726 0 0 0-.723-.723c-.391-.21-.772-.283-1.84-.283H4v9.154c0 1.068.073 1.449.283 1.84.168.314.409.555.723.723.391.21.772.283 1.84.283H13a1 1 0 0 1 0 2H6.846c-1.37 0-2.063-.134-2.783-.519a3.726 3.726 0 0 1-1.544-1.544C2.134 21.217 2 20.524 2 19.154V8h.002v-.055c.017-1 .14-1.558.45-2.138a3.271 3.271 0 0 1 1.355-1.355C4.435 4.116 5.037 4 6.205 4h11.59c1.167 0 1.77.116 2.398.452a3.271 3.271 0 0 1 1.355 1.355c.317.594.439 1.166.451 2.213.845.055 1.383.202 1.938.499.663.355 1.19.881 1.544 1.544.385.72.519 1.413.519 2.783V19a1 1 0 0 1-2 0v-6.154zM20 15a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2h2zm-2.205-9H6.205c-.865 0-1.156.056-1.454.216-.234.124-.41.301-.535.535C4.069 7.024 4.01 7.29 4 8H20c-.01-.709-.068-.976-.215-1.25a1.272 1.272 0 0 0-.535-.534C18.951 6.056 18.66 6 17.795 6z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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