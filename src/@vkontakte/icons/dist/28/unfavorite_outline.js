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
var id = 'unfavorite_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="unfavorite_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M8.58 8.993L5.292 5.707a1 1 0 0 1 1.414-1.414l18 18a1 1 0 0 1-1.414 1.414l-1.619-1.619a2 2 0 0 1-2.94 2L14 21.517l-4.735 2.57a2 2 0 0 1-2.92-2.123l.98-5.296-3.906-3.71a2 2 0 0 1 1.115-3.433l4.045-.533zm1.781 1.783l-5.565.733 4.3 4.083a1 1 0 0 1 .295.907l-1.08 5.83 5.212-2.828a1 1 0 0 1 .954 0l5.212 2.829-.506-2.733-8.822-8.821zm7.764-1.954l5.34.704a2 2 0 0 1 1.116 3.434l-2.637 2.504a1 1 0 0 1-1.377-1.45l2.637-2.505-5.879-.775a1 1 0 0 1-.771-.56L14 4.822l-.77 1.614a1 1 0 1 1-1.805-.861l.77-1.614a2 2 0 0 1 3.61 0l2.32 4.861z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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