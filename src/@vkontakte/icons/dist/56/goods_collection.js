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
var id = 'goods_collection_56';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" id="goods_collection_56"><g fill="none" fill-rule="evenodd"><path d="M0 0h56v56H0z" /><path d="M49.295 25.5c1.243 0 1.923.131 2.633.511a3.771 3.771 0 0 1 1.56 1.56c.38.71.512 1.391.512 2.634V42.23c0 2.056-.2 3.094-.778 4.174a5.589 5.589 0 0 1-2.317 2.317c-1.08.577-2.118.778-4.174.778H34.27c-2.056 0-3.094-.2-4.174-.778a5.589 5.589 0 0 1-2.317-2.317c-.545-1.02-.755-2.003-.776-3.84L27 30.205c0-1.243.131-1.923.511-2.633a3.771 3.771 0 0 1 1.56-1.56c.71-.38 1.391-.512 2.634-.512h17.59zM24.5 4.5c5.631 0 10.227 4.433 10.488 10h1.102c2.259 0 3.386.218 4.56.845a6.043 6.043 0 0 1 2.505 2.505c.32.6.55 1.52.755 2.87a1.5 1.5 0 1 1-2.966.452c-.157-1.028-.324-1.7-.435-1.907a3.044 3.044 0 0 0-1.274-1.274c-.608-.325-1.2-.462-2.611-.487l-.534-.004H12.91c-1.806 0-2.466.127-3.145.49a3.044 3.044 0 0 0-1.274 1.275c-.364.68-.491 1.34-.491 3.145l.001 12.19c.02 3.529.33 5.032 1.157 6.58a7.587 7.587 0 0 0 3.165 3.165c1.603.857 3.159 1.158 6.967 1.158h3.085a1.5 1.5 0 0 1 0 3H19.29c-4.261 0-6.285-.392-8.382-1.513a10.586 10.586 0 0 1-4.395-4.395C5.392 40.499 5 38.475 5 34.213l.002-12.15c.022-2.03.249-3.101.843-4.213a6.043 6.043 0 0 1 2.505-2.505c1.174-.627 2.301-.845 4.56-.845h1.102c.261-5.567 4.857-10 10.488-10zm24.967 24H31.533l-.318.008c-.322.014-.49.045-.627.1l-.102.049a.772.772 0 0 0-.33.33l-.048.1c-.071.177-.102.404-.107.946L30 42.23c0 1.603.11 2.173.424 2.76a2.59 2.59 0 0 0 1.085 1.085c.518.277 1.023.395 2.235.42l.525.004H46.73l.525-.005c1.212-.024 1.717-.142 2.235-.419a2.59 2.59 0 0 0 1.085-1.085c.277-.518.395-1.023.42-2.235L51 42.23V30.033l-.008-.318c-.014-.322-.045-.49-.1-.627l-.049-.102a.772.772 0 0 0-.33-.33l-.1-.048c-.177-.071-.404-.102-.946-.107zM45.75 31.57a1.5 1.5 0 0 1 1.5 1.5v.1c0 3.567-2.989 6.431-6.645 6.431h-.21c-3.656 0-6.645-2.864-6.645-6.43a1.5 1.5 0 0 1 3 0c0 1.88 1.618 3.43 3.645 3.43h.21c2.027 0 3.645-1.55 3.645-3.43v-.101a1.5 1.5 0 0 1 1.5-1.5zM24.5 7.5a7.5 7.5 0 0 0-7.484 7h14.968a7.5 7.5 0 0 0-7.484-7z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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