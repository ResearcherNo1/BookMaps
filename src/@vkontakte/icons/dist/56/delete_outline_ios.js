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
var id = 'delete_outline_ios_56';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" id="delete_outline_ios_56"><g fill="none" fill-rule="evenodd"><path d="M0 0h56v56H0z" /><path d="M28 4a8.001 8.001 0 0 1 7.938 7H46.5a1.5 1.5 0 0 1 0 3h-2.72l-2.429 33.197c-.124 1.705-.336 2.312-.7 2.92a3.624 3.624 0 0 1-1.503 1.398c-.634.319-1.255.485-2.964.485H19.816c-1.71 0-2.33-.166-2.964-.485a3.624 3.624 0 0 1-1.503-1.398c-.364-.608-.576-1.215-.7-2.92L12.219 14H9.5a1.5 1.5 0 0 1 0-3h10.562A8.001 8.001 0 0 1 28 4zm12.772 10H15.227l2.414 32.978c.082 1.13.144 1.368.282 1.6.072.119.153.194.277.257.226.113.453.16 1.413.164L36.184 49c1.133 0 1.375-.044 1.616-.165a.628.628 0 0 0 .277-.258c.138-.231.2-.47.282-1.599L40.772 14zM28 20a1.5 1.5 0 0 1 1.5 1.5v18a1.5 1.5 0 0 1-3 0v-18A1.5 1.5 0 0 1 28 20zm6.939.001l.144.001a1.5 1.5 0 0 1 1.415 1.581l-1 18a1.5 1.5 0 1 1-2.996-.166l1-18a1.5 1.5 0 0 1 1.581-1.415zm-14.022.001a1.5 1.5 0 0 1 1.58 1.415l1 18a1.5 1.5 0 1 1-2.995.166l-1-18a1.5 1.5 0 0 1 1.415-1.58zM28 7a5.002 5.002 0 0 0-4.9 4h9.8A5.002 5.002 0 0 0 28 7z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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