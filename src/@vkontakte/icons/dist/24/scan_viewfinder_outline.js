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

var viewBox = '0 0 24 24';
var id = 'scan_viewfinder_outline_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="scan_viewfinder_outline_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M21 16.1a.9.9 0 0 1 .893.787L21.9 17v.43c0 1.083-.148 1.788-.507 2.46a3.626 3.626 0 0 1-1.503 1.503c-.61.326-1.25.478-2.174.503l-.287.004H17a.9.9 0 0 1-.113-1.793L17 20.1h.43c.806 0 1.225-.088 1.61-.294.333-.178.588-.433.766-.765.187-.351.277-.73.292-1.4l.002-.212V17a.9.9 0 0 1 .9-.9zm-18 0a.9.9 0 0 1 .893.787L3.9 17v.43c0 .806.088 1.225.294 1.61.178.333.433.588.765.766.351.187.73.277 1.4.292l.212.002H7a.9.9 0 0 1 .113 1.793L7 21.9h-.43c-1.083 0-1.788-.148-2.46-.507a3.626 3.626 0 0 1-1.503-1.503c-.326-.61-.478-1.25-.503-2.174l-.004-.287V17a.9.9 0 0 1 .9-.9zm14-2.7a.9.9 0 0 1 .893.787l.007.113v.384c0 .705-.114 1.232-.374 1.717a2.717 2.717 0 0 1-1.125 1.125c-.425.228-.88.343-1.46.369l-.257.005H9.316c-.705 0-1.232-.114-1.717-.374a2.717 2.717 0 0 1-1.125-1.125c-.228-.425-.343-.88-.369-1.46l-.005-.257V14.3a.9.9 0 0 1 1.793-.113l.007.113v.384c0 .426.051.664.16.868.091.17.219.297.388.387.175.094.375.145.696.158l.172.003h5.368c.426 0 .664-.051.868-.16a.918.918 0 0 0 .387-.388c.094-.175.145-.375.158-.696l.003-.172V14.3a.9.9 0 0 1 .9-.9zM7 11.914a.906.906 0 0 1-.146-.012L3.9 11.9a.9.9 0 1 1 0-1.8h2.199l.001-.536c0-.949.096-1.447.374-1.965a2.717 2.717 0 0 1 1.125-1.125c.475-.255.933-.357 1.737-.372l.228-.002h4.872c.949 0 1.447.096 1.965.374.483.258.867.642 1.125 1.125.255.475.357.933.372 1.737l.002.228-.001.536H20.1a.9.9 0 1 1 0 1.8l-12.954.002a.906.906 0 0 1-.146.012zM14.436 7.9H9.564c-.677 0-.894.042-1.116.16a.918.918 0 0 0-.387.388c-.096.18-.142.355-.156.774l-.005.342-.001.536h8.2l.001-.536-.004-.327c-.014-.43-.06-.608-.157-.79a.918.918 0 0 0-.387-.386c-.18-.096-.355-.142-.774-.156zM7 2.1a.9.9 0 0 1 .113 1.793l-.113.007H6.57c-.806 0-1.225.088-1.61.294a1.826 1.826 0 0 0-.766.765c-.187.351-.277.73-.292 1.4L3.9 7a.9.9 0 0 1-1.793.113L2.1 7v-.43c0-1.083.148-1.788.507-2.46A3.626 3.626 0 0 1 4.11 2.607c.61-.326 1.25-.478 2.174-.503L6.57 2.1zm10.43 0c1.084 0 1.79.148 2.46.507a3.626 3.626 0 0 1 1.504 1.503c.326.61.478 1.25.503 2.174l.004.287V7a.9.9 0 0 1-1.793.113L20.1 7v-.43c0-.806-.088-1.225-.294-1.61a1.826 1.826 0 0 0-.765-.766c-.351-.187-.73-.277-1.4-.292L17 3.9a.9.9 0 0 1-.113-1.793L17 2.1z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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
    width: !isNaN(props.width) ? +props.width : 24,
    height: !isNaN(props.height) ? +props.height : 24
  }));
}

var _default = Icon;
exports.default = _default;