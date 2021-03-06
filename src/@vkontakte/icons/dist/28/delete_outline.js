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
var id = 'delete_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="delete_outline_28"><g fill-rule="nonzero" fill="none"><path d="M0 0h28v28H0z" /><path d="M14 1.5c2.376 0 3.925 1.234 4.422 3.5H24.5a1 1 0 0 1 0 2h-1.105l-1.612 15.314A3 3 0 0 1 18.799 25H9.201a3 3 0 0 1-2.984-2.686L4.605 7H3.5a1 1 0 1 1 0-2h6.078c.497-2.266 2.046-3.5 4.422-3.5zM21.383 7H6.616l1.59 15.105a1 1 0 0 0 .995.895h9.598a1 1 0 0 0 .995-.895L21.383 7zM14 9a1 1 0 0 1 1 1v10a1 1 0 0 1-2 0V10a1 1 0 0 1 1-1zm4.05.001a1 1 0 0 1 .949 1.049l-.5 10a1 1 0 1 1-1.998-.1l.5-10a1 1 0 0 1 1.049-.949zm-8.1 0a1 1 0 0 1 1.049.95l.5 10a1 1 0 1 1-1.998.099l-.5-10A1 1 0 0 1 9.951 9zM14 3.5c-1.267 0-2 .454-2.352 1.5h4.704C16 3.954 15.267 3.5 14 3.5z" fill="currentColor" /></g></symbol>';

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