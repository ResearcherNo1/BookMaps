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
var id = 'message_add_badge_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="message_add_badge_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M11.744 3.187c.581-.096 1.086.37 1.086.96 0 .516-.393.945-.903 1.033-.457.08-.904.184-1.334.312l-.545.179-.386.146-.285.12-.305.138-.275.136-.137.07-.286.158-.233.137-.129.08-.25.162-.228.158-.187.137-.253.196-.222.184c-.176.15-.345.307-.507.468l-.145.148-.2.214-.252.296-.177.224-.132.177-.208.302-.115.18-.102.17-.13.232-.127.245-.114.242-.103.24-.042.105a7.186 7.186 0 0 0-.343 1.161l-.061.346c-.05.327-.074.657-.074.989 0 1.436.448 2.831 1.312 4.076a2 2 0 0 1 .344 1.372c-.125 1.078-.629 2.55-1.378 4.265 2.036-.191 3.395-.773 4.264-1.568a2 2 0 0 1 1.941-.435c1.103.341 2.282.521 3.497.521.351 0 .696-.014 1.035-.043l.363-.035.237-.03c.254-.033.504-.075.75-.124l.421-.093.334-.085.333-.096.32-.103.318-.113.303-.118.327-.14.299-.14.262-.131.305-.166.282-.166.275-.173.26-.176.103-.073a9.56 9.56 0 0 0 .953-.786 8.656 8.656 0 0 0 1.177-1.364c.217-.313.565-.518.946-.518.771 0 1.28.79.857 1.435a10.311 10.311 0 0 1-1.785 2.067l-.355.305-.222.178-.244.186-.197.142-.283.195-.26.168-.137.086c-.19.116-.383.227-.58.333l-.27.142-.428.207-.516.225-.42.164-.354.125-.325.105-.31.092-.346.093-.346.083-.368.078-.478.086-.476.068-.432.048-.346.028a14.064 14.064 0 0 1-5.07-.576c-1.46 1.336-3.603 2.039-6.38 2.146a1.518 1.518 0 0 1-.673-.13 1.457 1.457 0 0 1-.746-1.94c.949-2.062 1.472-3.579 1.577-4.48-1.085-1.562-1.67-3.352-1.67-5.218 0-.22.008-.44.024-.657l.038-.397.02-.157c.02-.142.043-.282.069-.422l.072-.346.064-.262.137-.472.113-.332.127-.33.077-.182.134-.294.125-.255c.068-.132.139-.263.213-.391L3.33 8.6c.29-.487.624-.952.998-1.39l.225-.256.25-.265.241-.24.224-.209.234-.208.18-.152.259-.208.406-.302.327-.225.203-.131.299-.184.379-.216.456-.238.348-.166.435-.19.342-.135.364-.133v.001l.161-.056a13.386 13.386 0 0 1 1.655-.435l.428-.076zM20 3a6 6 0 1 1 0 12 6 6 0 0 1 0-12zm0 2a1 1 0 0 0-.993.883L19 6v2h-2a1 1 0 0 0-.117 1.993L17 10h2v2a1 1 0 0 0 1.993.117L21 12v-2h2a1 1 0 0 0 .117-1.993L23 8h-2V6a1 1 0 0 0-1-1z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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