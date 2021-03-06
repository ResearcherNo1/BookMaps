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
var id = 'devices_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="devices_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M8.846 9l2.573.002c1.198.017 1.846.157 2.518.517.663.355 1.19.881 1.544 1.544.385.72.519 1.413.519 2.783v7.308c0 1.37-.134 2.063-.519 2.783a3.726 3.726 0 0 1-1.544 1.544c-.72.385-1.413.519-2.783.519H8.846c-1.37 0-2.063-.134-2.783-.519a3.726 3.726 0 0 1-1.544-1.544C4.134 23.217 4 22.524 4 21.154l.002-7.573c.017-1.198.157-1.846.517-2.518A3.726 3.726 0 0 1 6.063 9.52C6.783 9.134 7.476 9 8.846 9zm9.026-7c1.777 0 2.648.168 3.553.652a4.634 4.634 0 0 1 1.923 1.923c.455.852.631 1.674.65 3.248l.002.305v11.744c0 1.777-.168 2.648-.652 3.553a4.634 4.634 0 0 1-1.923 1.923c-.884.472-1.731.643-3.416.652a1 1 0 0 1-.01-2c1.384-.008 1.921-.116 2.483-.416a2.635 2.635 0 0 0 1.102-1.102c.272-.508.388-1.003.411-2.126l.005-.484V8.128l-.005-.484c-.023-1.123-.14-1.618-.411-2.126a2.635 2.635 0 0 0-1.102-1.102c-.508-.272-1.003-.388-2.125-.411L17.873 4l-3.006.001c-1.29.016-1.803.123-2.35.415a2.635 2.635 0 0 0-1.1 1.102c-.1.187-.17.347-.224.526l-.049.186a1 1 0 0 1-1.95-.448c.103-.444.246-.81.458-1.207a4.634 4.634 0 0 1 1.923-1.923c.806-.43 1.58-.61 2.99-.645l.29-.005L17.872 2zm-6.718 9l-2.527.001c-.904.01-1.258.087-1.62.282-.315.168-.556.409-.724.723-.21.391-.283.772-.283 1.84v7.308c0 1.068.073 1.449.283 1.84.168.314.409.555.723.723.335.18.663.26 1.422.278l.418.005h2.308c1.068 0 1.449-.073 1.84-.283.314-.168.555-.409.723-.723.18-.335.26-.663.278-1.422l.005-.418v-7.308c0-1.068-.073-1.449-.283-1.84a1.726 1.726 0 0 0-.723-.723c-.391-.21-.772-.283-1.84-.283z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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