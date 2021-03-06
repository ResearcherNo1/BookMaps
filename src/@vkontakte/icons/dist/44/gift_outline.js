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
var id = 'gift_outline_44';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" id="gift_outline_44"><g fill="none" fill-rule="evenodd"><path d="M0 0h44v44H0z" /><path d="M31.113 6.388c1.702 1.702 1.863 4.53.348 6.765-.201.297-.428.58-.677.846H32.5c1.198 0 2.264.268 3.153.757.889.49 1.6 1.201 2.09 2.09.49.89.757 1.955.757 3.153v.644c0 1.51-.209 2.32-.601 3.054a4.089 4.089 0 0 1-1.701 1.701 4.48 4.48 0 0 1-.697.303l-.001 4.607c0 2.674-.278 3.644-.801 4.622s-1.29 1.745-2.268 2.268-1.948.801-4.623.801H16.192c-2.675 0-3.645-.278-4.623-.801s-1.745-1.29-2.268-2.268-.801-1.948-.801-4.622V25.7a4.479 4.479 0 0 1-.698-.303 4.089 4.089 0 0 1-1.701-1.7c-.36-.673-.565-1.41-.597-2.691L5.5 19.999c0-1.198.267-2.264.757-3.153a5.263 5.263 0 0 1 2.09-2.09c.889-.49 1.955-.757 3.153-.757h1.718a6.865 6.865 0 0 1-.678-.846c-1.514-2.236-1.353-5.063.348-6.765 1.702-1.702 4.53-1.863 6.765-.349.944.64 1.735 1.525 2.348 2.634.613-1.109 1.403-1.994 2.347-2.634 2.236-1.514 5.063-1.353 6.765.349zM20.5 25.999h-9v4.309c0 1.985.117 2.59.447 3.207.243.455.582.794 1.037 1.037.617.33 1.222.447 3.208.447H20.5zm3 0v9h4.308c1.986 0 2.59-.116 3.208-.447a2.453 2.453 0 0 0 1.037-1.037c.33-.617.447-1.222.447-3.207v-4.309zm-3-9h-9c-.688 0-1.26.139-1.706.385a2.264 2.264 0 0 0-.91.91c-.245.446-.384 1.018-.384 1.705l.002.914c.014.76.091 1.083.244 1.37.113.21.26.357.47.47.317.169.678.245 1.619.246H20.5zm12 0h-8.999l-.001 6h9.664l.19-.001c.802-.011 1.136-.088 1.43-.245.21-.113.357-.26.47-.47.153-.287.23-.61.244-1.37L35.5 20c0-.687-.139-1.259-.385-1.705a2.264 2.264 0 0 0-.91-.91c-.446-.246-1.017-.385-1.705-.385zm-9-3c5.475-.524 7.043-4.057 5.55-5.55-1.493-1.493-5.025.075-5.55 5.55zm-8.549-5.55c-1.493 1.493.075 5.026 5.55 5.55-.524-5.475-4.056-7.043-5.55-5.55z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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