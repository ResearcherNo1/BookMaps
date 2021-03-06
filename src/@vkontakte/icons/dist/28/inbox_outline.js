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
var id = 'inbox_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="inbox_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M19.815 4c1.204 0 1.803.096 2.448.38.604.268 1.11.673 1.501 1.205.419.567.642 1.132.903 2.308l1.31 5.89L26 14v3.872c0 1.777-.168 2.648-.652 3.553a4.634 4.634 0 0 1-1.923 1.923c-.905.484-1.776.652-3.553.652H8.128c-1.777 0-2.648-.168-3.553-.652a4.634 4.634 0 0 1-1.923-1.923C2.168 20.52 2 19.65 2 17.872V14l.024-.217 1.309-5.89c.261-1.176.484-1.74.903-2.308a3.701 3.701 0 0 1 1.5-1.204C6.383 4.096 6.982 4 8.187 4h11.629zM4 17.872c0 1.475.108 2.034.416 2.61.255.478.624.847 1.102 1.102.576.308 1.135.416 2.61.416h11.744c1.475 0 2.034-.108 2.61-.416a2.635 2.635 0 0 0 1.102-1.102c.308-.576.416-1.135.416-2.61V15h-5.1a5.002 5.002 0 0 1-9.8 0H4v2.872zM20.023 6.001L8.185 6c-.95 0-1.287.054-1.64.21-.285.126-.514.31-.7.561-.228.31-.354.629-.56 1.556L4.246 13H10a1 1 0 0 1 .993.883L11 14a3 3 0 0 0 6 0 1 1 0 0 1 1-1h5.753l-1.038-4.673c-.206-.927-.332-1.245-.56-1.556a1.702 1.702 0 0 0-.7-.561c-.326-.144-.639-.201-1.432-.209z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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