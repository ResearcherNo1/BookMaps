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
var id = 'logo_skype_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="logo_skype_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M12.043 17.751c-3.355 0-4.856-1.653-4.856-2.893 0-.635.468-1.08 1.113-1.08 1.436 0 1.064 2.066 3.743 2.066 1.371 0 2.129-.746 2.129-1.51 0-.46-.226-.969-1.13-1.192l-2.984-.747c-2.403-.604-2.84-1.906-2.84-3.13 0-2.543 2.389-3.497 4.63-3.497 2.066 0 4.5 1.144 4.5 2.67 0 .653-.564 1.033-1.209 1.033-1.225 0-1-1.7-3.468-1.7-1.224 0-1.903.555-1.903 1.351 0 .794.968 1.048 1.807 1.24l2.21.491c2.419.54 3.032 1.956 3.032 3.29 0 2.066-1.581 3.608-4.774 3.608m9.25-4.082l-.018.107-.034-.202c.018.031.034.064.051.095.103-.563.157-1.14.157-1.715 0-1.278-.25-2.518-.742-3.685a9.416 9.416 0 0 0-2.024-3.01 9.415 9.415 0 0 0-3.002-2.028 9.503 9.503 0 0 0-5.469-.574c.034.017.067.033.1.051l-.2-.03.1-.02A5.584 5.584 0 0 0 7.592 2a5.546 5.546 0 0 0-3.954 1.642A5.577 5.577 0 0 0 2 7.605c0 .953.244 1.89.703 2.717.006-.035.01-.07.017-.103l.034.198c-.018-.031-.033-.064-.05-.095a9.574 9.574 0 0 0-.143 1.632c0 1.278.25 2.517.743 3.685a9.426 9.426 0 0 0 2.023 3.009 9.4 9.4 0 0 0 3.002 2.028 9.343 9.343 0 0 0 3.677.745 9.47 9.47 0 0 0 1.653-.147c-.031-.018-.064-.034-.096-.053l.202.035c-.035.007-.07.011-.106.018a5.58 5.58 0 0 0 6.703-.915A5.57 5.57 0 0 0 22 16.396c0-.956-.246-1.896-.708-2.727" fill="currentColor" /></g></symbol>';

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