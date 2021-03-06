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
var id = 'narrative_outline_20';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" id="narrative_outline_20"><g fill="none" fill-rule="evenodd"><path d="M0 0h20v20H0z" /><path d="M10.535 1.508c.684.16 1.285.507 1.766 1.02.526.561.817 1.16 1.162 2.447l.303 1.131a.75.75 0 1 1-1.449.389l-.303-1.132c-.286-1.068-.473-1.452-.808-1.81a1.976 1.976 0 0 0-1.012-.584c-.443-.104-.842-.085-1.752.147l-.22.058-2.23.597c-.882.237-1.31.415-1.6.63l-.07.055-.14.123A1.976 1.976 0 0 0 3.6 5.591c-.096.41-.087.78.097 1.551l.108.42 1.891 7.06.118.418c.225.76.403 1.086.69 1.392.278.296.617.492 1.012.584.478.112.904.081 1.971-.205l.568-.152a.75.75 0 0 1 .389 1.449l-.568.152c-1.287.345-1.95.392-2.7.217a3.476 3.476 0 0 1-1.766-1.02c-.492-.524-.778-1.08-1.094-2.198l-.069-.249-1.891-7.059c-.345-1.287-.392-1.95-.217-2.7.142-.609.432-1.151.865-1.612l.17-.168.173-.153c.465-.387 1.018-.646 2.003-.925l.256-.07 2.23-.598c1.286-.345 1.95-.392 2.7-.217zm5.597 6.742c1.733 0 3.118 1.477 3.118 3.276 0 1.759-.663 2.643-3.317 4.845l-1.15.954a1.226 1.226 0 0 1-1.566 0l-1.409-1.17C9.37 14.11 8.75 13.225 8.75 11.526c0-1.799 1.385-3.276 3.118-3.276.729 0 1.4.213 1.997.628l.135.099.135-.1a3.44 3.44 0 0 1 1.78-.62zm0 1.5c-.592 0-1.107.238-1.585.747l-.182.194a.5.5 0 0 1-.73 0l-.182-.194c-.478-.51-.993-.747-1.585-.747-.882 0-1.618.785-1.618 1.776 0 1.164.444 1.757 2.775 3.69l.975.809.975-.808c2.253-1.87 2.743-2.486 2.773-3.576l.002-.115c0-.991-.736-1.776-1.618-1.776z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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