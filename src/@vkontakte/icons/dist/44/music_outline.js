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

var viewBox = '0 0 44 44';
var id = 'music_outline_44';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" id="music_outline_44"><g fill="none" fill-rule="evenodd"><path d="M0 0h44v44H0z" /><path d="M18 26.395v3.695c0 7.032-6.874 10.65-10.61 6.915-3.735-3.736-.117-10.61 6.915-10.61zm-3 3h-.695c-4.521 0-6.507 3.774-4.793 5.488C11.226 36.598 15 34.612 15 30.09zM30.582 6.284A4.5 4.5 0 0 1 36 10.689V26.34c0 7.032-6.874 10.65-10.61 6.915s-.117-10.61 6.915-10.61h.694v-7.051l-15 3.125L18 28h-3V14.375c0-1.415.118-2.145.47-2.931a4.54 4.54 0 0 1 1.5-1.844c.697-.505 1.388-.77 2.773-1.058zM33 25.645h-.695c-4.521 0-6.507 3.774-4.793 5.488C29.226 32.848 33 30.862 33 26.34zm-.032-15.262a1.5 1.5 0 0 0-1.774-1.162l-10.84 2.258c-1.005.21-1.32.33-1.626.552a1.542 1.542 0 0 0-.52.638c-.154.345-.208.678-.208 1.706v1.28l15-3.124v-1.842a1.5 1.5 0 0 0-.008-.153z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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
    width: !isNaN(props.width) ? +props.width : 44,
    height: !isNaN(props.height) ? +props.height : 44
  }));
}

var _default = Icon;
exports.default = _default;