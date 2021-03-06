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
var id = 'fire_outline_56';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" id="fire_outline_56"><g fill="none" fill-rule="evenodd"><path d="M0 0h56v56H0z" /><path d="M27.617 4.02l.193.035.155.04a2.25 2.25 0 0 1 1.546 2.65c-.142.63-.333 1.146-.604 1.563-4.49 6.934-3.725 11.774-.396 12.267 3.097.458 4.918-1.54 4.538-5.845l-.028-.284-.268-2.49a2.19 2.19 0 0 1 3.383-2.06c1.439.949 3.075 2.588 4.953 4.93 5.34 6.66 6.983 12.456 6.908 18.399C47.86 44.22 39.682 52 28.5 52 17.268 52 9 44.174 9 33.197c.057-9.65 5.241-20.142 14.954-27.28l.613-.443 1.408-1.031a2.25 2.25 0 0 1 1.642-.423zM25.16 8.762l-.432.336C16.439 15.632 12.049 24.83 12 33.206 12 42.48 18.889 49 28.499 49c9.565 0 16.382-6.485 16.499-15.813.066-5.295-1.387-10.42-6.25-16.484-1.035-1.292-1.972-2.33-2.802-3.113l.057.533.03.305c.547 6.155-2.802 9.878-7.961 9.115-5.433-.804-6.918-7.002-3.075-14.469l.163-.312z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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