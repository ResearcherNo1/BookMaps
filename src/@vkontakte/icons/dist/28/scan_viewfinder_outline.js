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
var id = 'scan_viewfinder_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="scan_viewfinder_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M24 19.154a1 1 0 0 1 1 1c0 1.37-.134 2.063-.519 2.783a3.726 3.726 0 0 1-1.544 1.544c-.72.385-1.413.519-2.783.519a1 1 0 0 1 0-2l.418-.005c.76-.019 1.087-.098 1.422-.278.314-.168.555-.409.723-.723.21-.391.283-.772.283-1.84a1 1 0 0 1 1-1zm-20 0a1 1 0 0 1 1 1l.005.418c.019.76.098 1.087.278 1.422.168.314.409.555.723.723.391.21.772.283 1.84.283a1 1 0 0 1 0 2c-1.37 0-2.063-.134-2.783-.519a3.726 3.726 0 0 1-1.544-1.544C3.134 22.217 3 21.524 3 20.154a1 1 0 0 1 1-1zM20 15a1 1 0 0 1 .993.883L21 16v1.436c0 .964-.1 1.477-.385 2.012-.268.5-.666.9-1.167 1.167-.49.262-.962.367-1.78.383l-.232.002h-6.872c-.964 0-1.477-.1-2.012-.385a2.817 2.817 0 0 1-1.167-1.167c-.262-.49-.367-.962-.383-1.78L7 17.436V16a1 1 0 0 1 1.993-.117L9 16l.001 1.606c.006.47.04.667.117.837l.03.062a.818.818 0 0 0 .347.346c.187.1.37.141.9.148l.169.001 7.042-.001c.529-.007.712-.048.9-.148a.818.818 0 0 0 .345-.346c.1-.187.141-.37.148-.9l.001-.169V16a1 1 0 0 1 1-1zm-2.564-8c.964 0 1.477.1 2.012.385.5.268.9.666 1.167 1.167.262.49.367.962.383 1.78l.002.232V11h2a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2h2v-.436c0-.884.083-1.389.318-1.879l.067-.133c.268-.5.666-.9 1.167-1.167.49-.262.962-.367 1.78-.383L10.564 7zm.17 2.001h-7.212c-.529.007-.712.048-.9.148a.818.818 0 0 0-.345.346c-.1.187-.141.37-.148.9L9 11h9.999v-.606c-.006-.47-.04-.667-.117-.837l-.03-.062a.818.818 0 0 0-.347-.346c-.187-.1-.37-.141-.9-.148zM7.846 3a1 1 0 1 1 0 2l-.418.005c-.76.019-1.087.098-1.422.278-.314.168-.555.409-.723.723-.21.391-.283.772-.283 1.84a1 1 0 1 1-2 0c0-1.37.134-2.063.519-2.783A3.726 3.726 0 0 1 5.063 3.52C5.783 3.134 6.476 3 7.846 3zm12.308 0c1.37 0 2.063.134 2.783.519.663.355 1.19.881 1.544 1.544.385.72.519 1.413.519 2.783a1 1 0 0 1-2 0l-.005-.418c-.019-.76-.098-1.087-.278-1.422a1.726 1.726 0 0 0-.723-.723c-.391-.21-.772-.283-1.84-.283a1 1 0 0 1 0-2z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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