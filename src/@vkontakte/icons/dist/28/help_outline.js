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
var id = 'help_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="help_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M3 14C3 7.928 7.928 3 14 3s11 4.928 11 11-4.928 11-11 11S3 20.072 3 14zm1.8 0c0 5.078 4.122 9.2 9.2 9.2 5.078 0 9.2-4.122 9.2-9.2 0-5.078-4.122-9.2-9.2-9.2-5.078 0-9.2 4.122-9.2 9.2zm8.1 5.65v-.3a.95.95 0 0 1 .95-.95h.3a.95.95 0 0 1 .95.95v.3a.95.95 0 0 1-.95.95h-.3a.95.95 0 0 1-.95-.95zm2.97-5.447c-.477.488-.821.912-.966 1.652a2.2 2.2 0 0 0-.029.298.889.889 0 0 1-.887.847h-.01a.891.891 0 0 1-.89-.894c0-.25.008-.413.023-.49.138-.718.487-1.361.977-1.863l1.105-1.134c.316-.318.525-.774.525-1.269 0-.99-.801-1.8-1.781-1.8a1.78 1.78 0 0 0-1.493.82 3.745 3.745 0 0 0-.238.465.891.891 0 0 1-1.1.48l-.034-.012a.85.85 0 0 1-.513-1.128c.064-.155.125-.291.183-.41.612-1.245 1.764-2.015 3.195-2.015 1.968 0 3.563 1.611 3.563 3.6 0 .792-.32 1.512-.828 2.025l-.802.828z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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