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
var id = 'brain_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="brain_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M13.981 2.423l.218-.066c2.84-.825 5.229.07 6.732 2.266l.1.15.186.077c3.944 1.687 4.591 5.852 2.81 9.029.957 1.289 1.159 2.569.67 3.753-.315.766-.836 1.363-1.55 1.925l-.038.029.005.194c.022 2.589-1.345 3.919-3.356 3.944-.556 1.148-1.513 1.885-2.813 2.152-1.157.239-2.175.014-2.982-.648-1.566 1.203-4.29.725-5.671-1.249l-.134-.202-.035-.001C5.784 23.672 4.559 22.1 4.775 19.9l.02-.178-.06-.031c-1.467-.823-2.151-2.696-1.69-4.475l.056-.197a4.29 4.29 0 0 1 .608-1.238C1.994 10.97 2.8 6.222 6.635 4.976l.15-.046.194-.248c.162-.206.305-.382.453-.552 1.751-2.023 3.788-2.791 6.55-1.707zm.87 1.62l-.002 19.537c.438.526.975.69 1.733.533.575-.118 1.004-.367 1.314-.774-.958-.51-1.501-1.536-1.605-2.951a.9.9 0 0 1 1.795-.131c.079 1.068.41 1.516 1.051 1.62 1.573.253 2.363-.404 2.147-2.636a.9.9 0 0 1 .38-.824c.69-.483 1.155-.95 1.37-1.47.193-.47.166-.98-.175-1.58-1.29 1.156-3.145 1.775-4.214 1.325a.9.9 0 0 1 .698-1.66c.442.187 2.11-.527 2.837-1.59 1.703-2.489 1.282-5.911-2.051-7.085a.9.9 0 0 1-.477-.392c-1.04-1.763-2.66-2.493-4.802-1.922zM8.792 5.308l-.259.31-.51.655a.9.9 0 0 1-.505.324c-2.714.638-3.43 3.946-2.428 5.972 1.15-.626 2.688-.801 4.488-.4a.9.9 0 1 1-.392 1.757c-2.443-.545-3.926.199-4.366 1.624-.364 1.18.139 2.387 1.073 2.69l.13.036a.9.9 0 0 1 .671 1.111c-.478 1.783.148 2.696 1.943 2.586a.9.9 0 0 1 .876.53c.746 1.661 2.833 1.992 3.537 1.112L13.05 3.997c-1.813-.623-3.026-.11-4.256 1.311zM7.788 15.869c1 .375 1.811.951 2.412 1.724.616.791.943 1.752.985 2.854a.9.9 0 1 1-1.798.07c-.029-.74-.232-1.336-.608-1.82-.39-.5-.925-.88-1.623-1.143a.9.9 0 0 1 .632-1.685zm10.637-7.904c.27.928.633 1.544 1.063 1.872.411.315 1.01.458 1.834.402a.9.9 0 0 1 .123 1.795c-1.23.085-2.259-.161-3.05-.767-.775-.592-1.331-1.533-1.699-2.8a.9.9 0 0 1 1.729-.502zM11.46 6.387a.9.9 0 0 1 .655 1.092c-.232.93-.726 1.645-1.472 2.093a4.241 4.241 0 0 1-2.215.606.9.9 0 1 1 0-1.8c.475 0 .899-.116 1.289-.35.316-.19.53-.5.652-.986a.9.9 0 0 1 1.091-.655z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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