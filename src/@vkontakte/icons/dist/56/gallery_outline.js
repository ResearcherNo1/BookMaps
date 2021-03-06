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
var id = 'gallery_outline_56';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" id="gallery_outline_56"><g fill="none" fill-rule="evenodd"><path d="M0 0h56v56H0z" /><path d="M20.32 6l15.782.001c3.728.024 5.68.373 7.57 1.297l.42.215a10.586 10.586 0 0 1 4.395 4.395c1.048 1.96 1.458 3.851 1.508 7.583l.005.828v15.362l-.005.828c-.05 3.732-.46 5.624-1.508 7.583a10.586 10.586 0 0 1-4.395 4.395c-1.96 1.048-3.851 1.458-7.583 1.508l-.828.005H20.319l-.828-.005c-3.732-.05-5.624-.46-7.583-1.508a10.586 10.586 0 0 1-4.395-4.395c-1.048-1.96-1.458-3.851-1.508-7.583L6 35.681l.001-15.783c.024-3.728.373-5.68 1.297-7.57l.215-.42a10.586 10.586 0 0 1 4.395-4.395c1.96-1.048 3.851-1.458 7.583-1.508zm13.158 22.046l-9.234 11.02a1.5 1.5 0 0 1-1.966.296l-.122-.089-5.097-4.092-7.137 7.024c.074.158.152.315.236.472a7.587 7.587 0 0 0 3.165 3.165c1.498.8 2.951 1.116 6.259 1.154l.737.004h15.362l.737-.004c3.308-.038 4.76-.353 6.259-1.154a7.587 7.587 0 0 0 3.165-3.165c.437-.818.73-1.623.911-2.723zM35.68 9H20.319l-.737.004c-3.308.038-4.76.353-6.259 1.154a7.587 7.587 0 0 0-3.165 3.165C9.3 14.928 9 16.482 9 20.32v15.362l.004.737c.01.92.043 1.698.1 2.372l6.803-6.682a1.5 1.5 0 0 1 1.868-.188l.122.089 4.99 4.005 9.284-11.077a1.5 1.5 0 0 1 2.031-.25l.115.092 12.68 11.365.003-.463V20.319l-.004-.737c-.038-3.308-.353-4.76-1.154-6.259a7.587 7.587 0 0 0-3.165-3.165C41.072 9.3 39.518 9 35.68 9zM19.5 17a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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