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
var id = 'arrow_left_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="arrow_left_outline_28"><g fill="none" fill-rule="evenodd"><path d="M28 0H0v28h28z" /><path d="M12.293 6.293a1 1 0 0 1 1.414 1.414L8.414 13H22a1 1 0 0 1 .993.883L23 14a1 1 0 0 1-1 1H8.414l5.293 5.293a1 1 0 0 1 .083 1.32l-.083.094a1 1 0 0 1-1.414 0l-7-7-.073-.082A1.005 1.005 0 0 1 5 14l.004.09A1.006 1.006 0 0 1 5 14.02V14a1.02 1.02 0 0 1 .125-.484.878.878 0 0 1 .071-.111.999.999 0 0 1 .097-.112l-.08.09c.025-.031.051-.062.08-.09z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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