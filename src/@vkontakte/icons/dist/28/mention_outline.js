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
var id = 'mention_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="mention_outline_28"><g fill="none"><path d="M0 0h28v28H0z" /><path d="M0 0h28v28H0z" /><path d="M13.673 24.65c-2.096 0-3.926-.423-5.49-1.271a8.86 8.86 0 0 1-3.622-3.61c-.853-1.558-1.279-3.376-1.279-5.455v-.751c0-2.07.445-3.906 1.333-5.51.889-1.604 2.138-2.85 3.746-3.74S11.81 2.98 13.878 2.98h.11c1.932 0 3.661.4 5.188 1.197 1.526.797 2.72 1.9 3.582 3.308.861 1.409 1.292 3.006 1.292 4.792v.684c0 1.221-.2 2.301-.602 3.24s-.961 1.67-1.681 2.195c-.72.524-1.55.786-2.489.786-.847 0-1.576-.178-2.187-.534-.61-.355-.975-.82-1.094-1.394h-.137c-.1.355-.3.681-.601.977-.301.297-.668.53-1.1.698a3.715 3.715 0 0 1-1.361.253c-.748 0-1.4-.183-1.955-.547-.556-.365-.985-.884-1.285-1.559-.301-.674-.452-1.472-.452-2.392v-1.368c0-.893.153-1.672.458-2.337s.743-1.176 1.313-1.532c.57-.355 1.237-.533 2.003-.533.674 0 1.267.166 1.777.5.51.332.848.767 1.012 1.305h.11v-.356c0-.364.1-.654.3-.868s.474-.321.82-.321c.338 0 .607.107.807.321s.3.504.3.868v5.469c0 .465.142.836.425 1.114.282.278.651.417 1.107.417.483 0 .907-.187 1.272-.56.364-.374.644-.905.84-1.593.196-.688.294-1.493.294-2.413v-.451c0-1.431-.34-2.712-1.018-3.842-.68-1.13-1.623-2.014-2.83-2.652-1.208-.638-2.577-.957-4.109-.957h-.11c-1.658 0-3.125.364-4.401 1.093S7.208 7.745 6.502 9.071c-.706 1.326-1.06 2.85-1.06 4.574v.587c0 1.714.342 3.216 1.026 4.505s1.652 2.284 2.905 2.98c1.253.698 2.714 1.047 4.382 1.047h.11c.62 0 1.39-.069 2.31-.205.483-.064.797-.096.943-.096.265 0 .483.08.656.24.174.159.26.361.26.608s-.073.455-.219.628c-.145.174-.355.297-.628.37-.885.227-2.015.341-3.391.341zm-2.188-10.28c0 .92.176 1.62.527 2.098.35.478.868.718 1.551.718.675 0 1.19-.23 1.545-.69.356-.461.534-1.129.534-2.004v-1.107c0-.802-.19-1.436-.568-1.9s-.89-.698-1.538-.698c-.647 0-1.15.244-1.51.732-.36.487-.54 1.168-.54 2.044z" fill="currentColor" /></g></symbol>';

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