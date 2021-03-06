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
var id = 'comment_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="comment_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M16.06 20.354c.298-.26.68-.404 1.076-.404h4.447c1.17 0 1.867-.697 1.867-1.867V8.75c0-1.17-.697-1.867-1.867-1.867h-14c-1.17 0-1.866.697-1.866 1.867v9.333c0 1.17.696 1.867 1.866 1.867H10.5c.816.235.816.235 1.051 1.051v3.3l4.51-3.947zm-5.752 5.934c-.551-.413-.858-1.142-.858-1.788v-2.45H7.583c-2.33 0-3.966-1.637-3.966-3.967V8.75c0-2.33 1.636-3.967 3.966-3.967h14c2.33 0 3.967 1.637 3.967 3.967v9.333c0 2.33-1.637 3.967-3.967 3.967h-4.272l-4.345 3.802c-.855.839-1.854 1.04-2.659.436z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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