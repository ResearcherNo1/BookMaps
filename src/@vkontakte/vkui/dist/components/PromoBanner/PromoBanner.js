"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _dismiss = _interopRequireDefault(require("@vkontakte/icons/dist/24/dismiss"));

var _Button = _interopRequireDefault(require("../Button/Button"));

var _Cell = _interopRequireDefault(require("../Cell/Cell"));

var _Avatar = _interopRequireDefault(require("../Avatar/Avatar"));

var _classNames = _interopRequireDefault(require("../../lib/classNames"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var PromoBanner = function PromoBanner(props) {
  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      currentPixel = _useState2[0],
      setCurrentPixel = _useState2[1];

  var statsPixels = (0, _react.useMemo)(function () {
    return props.bannerData.statistics ? props.bannerData.statistics.reduce(function (acc, item) {
      return _objectSpread({}, acc, (0, _defineProperty2.default)({}, item.type, item.url));
    }, {}) : {};
  }, [props.bannerData.statistics]);
  var onClick = (0, _react.useCallback)(function () {
    return setCurrentPixel(statsPixels.click || '');
  }, [statsPixels.click]);
  (0, _react.useEffect)(function () {
    if (statsPixels.playbackStarted) {
      setCurrentPixel(statsPixels.playbackStarted);
    }
  }, [statsPixels.playbackStarted]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classNames.default)('PromoBanner', props.className)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "PromoBanner__head"
  }, props.bannerData.ageRestriction && /*#__PURE__*/_react.default.createElement("span", {
    className: "PromoBanner__age"
  }, props.bannerData.ageRestriction, "+"), /*#__PURE__*/_react.default.createElement("span", {
    className: "PromoBanner__label"
  }, props.bannerData.advertisingLabel || 'Advertisement'), !props.isCloseButtonHidden && /*#__PURE__*/_react.default.createElement("div", {
    className: "PromoBanner__close",
    onClick: props.onClose
  }, /*#__PURE__*/_react.default.createElement(_dismiss.default, null))), /*#__PURE__*/_react.default.createElement("a", {
    href: props.bannerData.trackingLink,
    onClick: onClick,
    rel: "nofollow noopener noreferrer",
    target: "_blank",
    className: "PromoBanner__clickable-body"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "PromoBanner__content"
  }, /*#__PURE__*/_react.default.createElement(_Cell.default, {
    before: /*#__PURE__*/_react.default.createElement(_Avatar.default, {
      mode: "image",
      size: 48,
      src: props.bannerData.iconLink,
      alt: props.bannerData.title
    }),
    asideContent: /*#__PURE__*/_react.default.createElement(_Button.default, {
      mode: "outline"
    }, props.bannerData.ctaText),
    description: props.bannerData.domain
  }, props.bannerData.title))), currentPixel.length > 0 && /*#__PURE__*/_react.default.createElement("div", {
    className: "PromoBanner__pixels"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: currentPixel,
    alt: ""
  })));
};

var _default = PromoBanner;
exports.default = _default;
//# sourceMappingURL=PromoBanner.js.map