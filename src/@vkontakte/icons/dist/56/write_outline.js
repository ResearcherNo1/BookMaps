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
var id = 'write_outline_56';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" id="write_outline_56"><g fill-rule="nonzero" fill="none"><path d="M0 0h56v56H0z" /><path d="M21.32 7l13.782.001c.313.002.614.007.903.013v3c-.41-.01-.85-.014-1.324-.014H21.319l-.737.004c-3.308.038-4.76.353-6.259 1.154a7.587 7.587 0 0 0-3.165 3.165c-.83 1.552-1.137 3.055-1.157 6.62v14.114c.02 3.565.328 5.068 1.157 6.62a7.587 7.587 0 0 0 3.165 3.165c1.498.8 2.951 1.116 6.259 1.154l.737.004h13.362l.737-.004c3.308-.038 4.76-.353 6.259-1.154a7.587 7.587 0 0 0 3.165-3.165c.83-1.552 1.137-3.055 1.157-6.62V20.943a52.397 52.397 0 0 0-.013-.945h3c.006.289.01.588.013.9v14.204c-.026 4.004-.427 5.96-1.512 7.99a10.586 10.586 0 0 1-4.395 4.395c-1.96 1.048-3.851 1.458-7.583 1.508l-.828.005H21.319l-.828-.005c-3.732-.05-5.624-.46-7.583-1.508a10.586 10.586 0 0 1-4.395-4.395c-1.085-2.03-1.486-3.986-1.512-7.99V20.898c.026-4.004.427-5.96 1.512-7.99a10.586 10.586 0 0 1 4.395-4.395c1.96-1.048 3.851-1.458 7.583-1.508L21.319 7zm25.036 2.644a1.75 1.75 0 0 1 0 2.475L28.201 30.273c-.462.463-.915.876-1.38 1.254-.463.377-.938.72-1.442 1.041-.505.321-1.04.622-1.624.915l-.329.164a.8.8 0 0 1-1.073-1.073l.164-.329c.293-.584.594-1.119.915-1.624.321-.504.664-.979 1.041-1.443.378-.464.791-.917 1.254-1.38L43.88 9.645a1.75 1.75 0 0 1 2.475 0zM47.5 18a1.5 1.5 0 0 1 1.5 1.5v.5h-3v-.5a1.5 1.5 0 0 1 1.5-1.5zm-11-11a1.5 1.5 0 0 1 0 3H36V7h.5zM49 5a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" fill="currentColor" /></g></symbol>';

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