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

var viewBox = '0 0 20 20';
var id = 'pin_outline_20';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" id="pin_outline_20"><g fill="none" fill-rule="evenodd"><path d="M0 0h20v20H0z" /><path d="M11.332 2.604a.75.75 0 0 1 1.266-.384l5.182 5.183a.75.75 0 0 1-.383 1.265l-1.54.308a.297.297 0 0 0-.152.082l-2.463 2.463a.297.297 0 0 0-.086.187l-.297 3.858a1.012 1.012 0 0 1-1.724.638l-3.139-3.139-4.716 4.716a.75.75 0 0 1-1.133-.977l.073-.084 4.715-4.716-3.139-3.138a1.012 1.012 0 0 1-.084-1.336l.084-.095c.171-.171.397-.275.638-.294l3.859-.296a.297.297 0 0 0 .187-.086l2.463-2.464a.297.297 0 0 0 .081-.151zm1.196 1.668l-.033.166c-.07.348-.24.667-.491.918L9.54 7.819a1.797 1.797 0 0 1-1.133.521l-2.801.216 5.837 5.837.216-2.8c.03-.374.174-.729.413-1.015l.108-.118 2.464-2.463c.25-.251.57-.422.918-.492l.165-.033-3.2-3.2z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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
    width: !isNaN(props.width) ? +props.width : 20,
    height: !isNaN(props.height) ? +props.height : 20
  }));
}

var _default = Icon;
exports.default = _default;