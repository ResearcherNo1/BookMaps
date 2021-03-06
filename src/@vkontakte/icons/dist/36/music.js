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

var viewBox = '0 0 36 36';
var id = 'music_36';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" id="music_36"><g fill="none" fill-rule="evenodd"><path d="M0 0h36v36H0z" opacity=".4" /><path d="M25.582 2.284A4.5 4.5 0 0 1 31 6.689v15.756c0 3.55-1.527 6.244-4.003 7.547-2.267 1.193-4.999.975-6.606-.633-1.608-1.607-1.826-4.34-.633-6.606 1.303-2.476 3.998-4.003 7.547-4.003h.694v-7.156l-15 3.125L13 26.195c0 3.438-1.433 6.075-3.773 7.42l-.23.127c-2.267 1.193-4.999.975-6.606-.633-1.608-1.607-1.826-4.34-.633-6.606C3.061 24.027 5.756 22.5 9.305 22.5h.694l.003-12.399c.014-1.143.12-1.815.396-2.488l.072-.169a4.54 4.54 0 0 1 1.5-1.844c.697-.505 1.388-.77 2.773-1.058zM10 25.5h-.695c-4.521 0-6.507 3.774-4.793 5.488C6.226 32.702 10 30.716 10 26.195zm18-3.75h-.695c-4.521 0-6.507 3.774-4.793 5.488C24.226 28.952 28 26.966 28 22.445zm-.032-15.367a1.5 1.5 0 0 0-1.774-1.162L15.15 7.523c-.846.183-1.138.302-1.422.508a1.542 1.542 0 0 0-.52.638c-.154.345-.208.678-.208 1.706l-.001 1.28 15-3.124L28 6.689a1.5 1.5 0 0 0-.008-.153z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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
    width: !isNaN(props.width) ? +props.width : 36,
    height: !isNaN(props.height) ? +props.height : 36
  }));
}

var _default = Icon;
exports.default = _default;