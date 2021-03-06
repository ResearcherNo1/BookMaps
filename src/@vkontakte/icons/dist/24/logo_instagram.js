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
var id = 'logo_instagram_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="logo_instagram_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M12 3.003c2.444 0 2.75.01 3.71.054.957.044 1.611.196 2.183.418a4.41 4.41 0 0 1 1.594 1.038c.5.5.808 1.002 1.038 1.593.222.573.374 1.227.418 2.184.044.96.054 1.267.054 3.71 0 2.444-.01 2.75-.054 3.71-.044.957-.196 1.611-.418 2.183a4.41 4.41 0 0 1-1.038 1.594c-.5.5-1.002.808-1.593 1.038-.573.222-1.227.374-2.184.418-.96.044-1.267.054-3.71.054-2.444 0-2.75-.01-3.71-.054-.957-.044-1.611-.196-2.183-.418a4.41 4.41 0 0 1-1.594-1.038 4.41 4.41 0 0 1-1.038-1.593c-.222-.573-.374-1.227-.418-2.184-.044-.96-.054-1.267-.054-3.71 0-2.444.01-2.75.054-3.71.044-.957.196-1.611.418-2.183a4.41 4.41 0 0 1 1.038-1.594 4.41 4.41 0 0 1 1.594-1.038c.572-.222 1.226-.374 2.183-.418.96-.044 1.267-.054 3.71-.054zm-.004 1.793c-2.345 0-2.623.009-3.549.051-.856.04-1.321.182-1.63.303-.41.159-.703.35-1.01.657a2.72 2.72 0 0 0-.657 1.01c-.12.309-.264.774-.303 1.63-.042.926-.051 1.204-.051 3.549 0 2.345.009 2.623.051 3.549.04.856.182 1.321.303 1.63.159.41.35.703.657 1.01.307.308.6.498 1.01.657.309.12.774.264 1.63.303.926.042 1.204.051 3.549.051 2.345 0 2.623-.009 3.549-.051.856-.04 1.321-.182 1.63-.303.41-.159.703-.35 1.01-.657.308-.307.498-.6.657-1.01.12-.309.264-.774.303-1.63.042-.926.051-1.204.051-3.549 0-2.345-.009-2.623-.051-3.549-.04-.856-.182-1.321-.303-1.63a2.72 2.72 0 0 0-.657-1.01 2.721 2.721 0 0 0-1.01-.657c-.309-.12-.774-.264-1.63-.303-.926-.042-1.204-.051-3.549-.051zM12 7.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6zm0 7.8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm5.882-7.803a1.08 1.08 0 1 1-2.159 0 1.08 1.08 0 0 1 2.16 0z" fill="currentColor" /></g></symbol>';

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