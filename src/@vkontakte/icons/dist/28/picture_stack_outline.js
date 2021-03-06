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
var id = 'picture_stack_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="picture_stack_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M19.872 7c1.783 0 2.43.186 3.082.534.652.349 1.163.86 1.512 1.512.348.652.534 1.299.534 3.082v6.744c0 1.783-.186 2.43-.534 3.082a3.635 3.635 0 0 1-1.512 1.512c-.652.348-1.299.534-3.082.534H8.128c-1.783 0-2.43-.186-3.082-.534a3.635 3.635 0 0 1-1.512-1.512c-.33-.618-.514-1.23-.532-2.81L3 12.128c0-1.783.186-2.43.534-3.082a3.635 3.635 0 0 1 1.512-1.512c.618-.33 1.23-.514 2.81-.532L19.872 7zM20 14.414l-4.938 4.94a1.5 1.5 0 0 1-2.008.103l-.114-.103L11 17.414l-4.483 4.483c.3.066.706.097 1.373.102L19.872 22c1.324 0 1.727-.078 2.138-.298.304-.162.53-.388.692-.692l.076-.155c.15-.345.213-.76.221-1.745v-1.696l-3-3zm.11-5.413H7.89l-.416.008c-.821.025-1.15.11-1.484.289-.304.162-.53.388-.692.692l-.076.155c-.15.345-.213.76-.221 1.745v7.22l.008.416c.013.43.043.726.094.958l4.836-4.838a1.5 1.5 0 0 1 2.008-.103l.114.103L14 17.586l4.94-4.94a1.5 1.5 0 0 1 2.007-.103l.114.103L23 14.585v-2.457c0-1.324-.078-1.727-.298-2.138a1.635 1.635 0 0 0-.692-.692l-.155-.076c-.345-.15-.76-.213-1.745-.221zM8.5 11a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm8.936-8c.892 0 1.215.093 1.54.267.327.174.583.43.757.756.131.246.216.49.25.976H8.017c.034-.486.119-.73.25-.976.174-.326.43-.582.756-.756.326-.174.65-.267 1.54-.267h6.873z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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