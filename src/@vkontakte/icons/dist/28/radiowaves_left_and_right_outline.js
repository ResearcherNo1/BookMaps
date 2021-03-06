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
var id = 'radiowaves_left_and_right_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="radiowaves_left_and_right_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M7.491 5.698a1 1 0 0 1-.033 1.414l-.033.03-.02.02A9.467 9.467 0 0 0 4.5 14a9.468 9.468 0 0 0 2.935 6.866 1 1 0 0 1-1.383 1.446A11.468 11.468 0 0 1 2.5 14c0-3.163 1.284-6.124 3.516-8.276l.026-.025.035-.034a1 1 0 0 1 1.414.033zm13.018 0a1 1 0 0 1 1.414-.033l.035.034.026.025A11.467 11.467 0 0 1 25.5 14c0 3.18-1.299 6.157-3.552 8.312a1 1 0 1 1-1.383-1.446A9.468 9.468 0 0 0 23.5 14a9.467 9.467 0 0 0-2.904-6.837l-.021-.02-.033-.031a1 1 0 0 1-.033-1.414zm-9.671 3.396a1 1 0 0 1-.057 1.413A4.734 4.734 0 0 0 9.25 14c0 1.345.56 2.598 1.53 3.492a1 1 0 1 1-1.356 1.47A6.733 6.733 0 0 1 7.25 14c0-1.91.799-3.694 2.175-4.963a1 1 0 0 1 1.413.057zm6.324 0a1 1 0 0 1 1.413-.057A6.733 6.733 0 0 1 20.75 14c0 1.91-.798 3.693-2.174 4.962a1 1 0 1 1-1.356-1.47A4.734 4.734 0 0 0 18.75 14c0-1.345-.56-2.598-1.53-3.493a1 1 0 0 1-.058-1.413zM14 11.75a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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