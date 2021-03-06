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
var id = 'gift_outline_56';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" id="gift_outline_56"><g fill="none" fill-rule="evenodd"><path d="M0 0h56v56H0z" /><path d="M39.56 6.944c2.321 2.32 2.203 5.81-.092 8.58-.444.536-.954 1.03-1.524 1.48H42a8 8 0 0 1 8 8v.86c0 2.014-.278 3.094-.801 4.071a5.452 5.452 0 0 1-2.268 2.268 5.972 5.972 0 0 1-.93.404L46 38.749l-.005.706c-.048 3.039-.414 4.243-1.064 5.457a7.27 7.27 0 0 1-3.024 3.024l-.27.14c-1.177.584-2.473.905-5.532.927H29.5v.002h-9.244c-3.567 0-4.86-.372-6.163-1.069a7.27 7.27 0 0 1-3.024-3.024l-.14-.27c-.585-1.177-.905-2.473-.928-5.532L10 32.607a5.972 5.972 0 0 1-.93-.404A5.452 5.452 0 0 1 6.8 29.935C6.278 28.958 6 27.878 6 25.864v-.86a8 8 0 0 1 8-8h4.052c-.57-.45-1.08-.944-1.524-1.48-2.295-2.77-2.413-6.26-.093-8.58 2.32-2.32 5.81-2.202 8.58.093 1.222 1.012 2.233 2.37 2.984 4 .749-1.63 1.76-2.988 2.981-4 2.77-2.295 6.26-2.414 8.58-.093zM26.5 33.004H13v6.06l.008.583c.036 1.938.205 2.819.59 3.622l.116.228a4.27 4.27 0 0 0 1.793 1.794c.95.508 1.876.699 4.434.713H26.5v-13zm16.5 0H29.5v13h6.56c2.557-.014 3.483-.205 4.433-.713a4.27 4.27 0 0 0 1.793-1.794l.116-.228c.44-.918.598-1.937.598-4.52v-5.744zm-16.5-13H14a5 5 0 0 0-5 5l.002 1.119c.016 1.25.153 1.851.445 2.397.243.455.582.795 1.037 1.038.546.292 1.148.43 2.398.445H26.5v-10zm15.5 0H29.5v9.999h13.618c1.25-.016 1.852-.153 2.398-.445a2.453 2.453 0 0 0 1.037-1.038c.312-.582.447-1.228.447-2.656v-.86a5 5 0 0 0-5-5zm-12.4-3.386l-.032.318.319-.03c6.747-.728 10.124-5.27 7.552-7.84-2.571-2.572-7.112.805-7.84 7.552zm-3.204 0c-.727-6.747-5.268-10.124-7.84-7.553-2.57 2.572.806 7.113 7.553 7.84l.319.031z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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