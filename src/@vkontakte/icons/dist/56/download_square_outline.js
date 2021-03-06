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
var id = 'download_square_outline_56';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" id="download_square_outline_56"><g fill="none" fill-rule="evenodd"><path d="M0 0h56v56H0z" /><path d="M35.004 11l.62.001c3.222.024 4.826.355 6.49 1.245a8.786 8.786 0 0 1 3.65 3.658l.15.292c.731 1.472 1.036 3.016 1.08 5.803l.006.757v14.5l-.005.718c-.047 2.989-.377 4.526-1.24 6.14a8.786 8.786 0 0 1-3.66 3.65l-.29.15c-1.473.731-3.017 1.036-5.804 1.08l-.757.006h-14.5l-.718-.005c-2.989-.047-4.526-.377-6.14-1.24a8.786 8.786 0 0 1-3.65-3.66l-.15-.29c-.767-1.544-1.062-3.159-1.085-6.2V22.376c.024-3.222.355-4.826 1.245-6.49a8.786 8.786 0 0 1 3.658-3.65l.292-.15c1.543-.767 3.158-1.062 6.199-1.085H21a1.5 1.5 0 0 1 0 3l-.927.004c-2.383.035-3.512.255-4.522.757l-.251.13a5.77 5.77 0 0 0-2.409 2.408c-.61 1.14-.853 2.246-.887 4.789l-.004.666.001 14.84c.02 2.612.237 3.798.76 4.854l.13.251a5.77 5.77 0 0 0 2.409 2.409c1.15.615 2.228.846 4.76.886l.696.005h14.488c2.852 0 4.107-.217 5.205-.762l.251-.13a5.77 5.77 0 0 0 2.409-2.408c.615-1.15.846-2.228.886-4.76l.005-.696V22.756c0-2.852-.217-4.107-.762-5.205l-.13-.251a5.77 5.77 0 0 0-2.408-2.409c-1.235-.66-2.43-.891-5.456-.891h-.24a1.5 1.5 0 0 1 0-3zM28 5a1.5 1.5 0 0 1 1.5 1.5v27.378l4.94-4.939a1.5 1.5 0 0 1 2.007-.103l.114.103a1.5 1.5 0 0 1 0 2.122l-7.5 7.5a1.5 1.5 0 0 1-2.122 0l-7.5-7.5a1.5 1.5 0 0 1 2.122-2.122l4.938 4.939L26.5 6.5a1.5 1.5 0 0 1 1.356-1.493z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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