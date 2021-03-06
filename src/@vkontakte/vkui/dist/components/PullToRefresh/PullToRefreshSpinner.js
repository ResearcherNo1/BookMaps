"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classNames = _interopRequireDefault(require("../../lib/classNames"));

function calcStrokeDashOffset(value, radius) {
  var progress = value / 100;
  return 2 * Math.PI * radius * (1 - progress);
}

var PullToRefreshSpinner = function PullToRefreshSpinner(_ref) {
  var on = _ref.on,
      progress = _ref.progress,
      size = _ref.size,
      strokeWidth = _ref.strokeWidth,
      style = _ref.style;
  var radius = 0.5 * size - 0.5 * strokeWidth;
  var dasharray = 2 * Math.PI * radius;
  var circleCenter = 0.5 * size;
  var dashoffset = calcStrokeDashOffset(on ? 80 : progress, radius);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classNames.default)('PullToRefresh__spinner', {
      'PullToRefresh__spinner--on': on
    }),
    style: style
  }, /*#__PURE__*/_react.default.createElement("svg", {
    className: "PullToRefresh__spinner-self",
    style: {
      width: size,
      height: size
    },
    viewBox: "0 0 ".concat(size, " ").concat(size),
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("g", {
    style: {
      width: size,
      height: size,
      transformOrigin: "".concat(circleCenter, "px ").concat(circleCenter, "px")
    }
  }, /*#__PURE__*/_react.default.createElement("circle", {
    className: "PullToRefresh__spinner-path",
    fill: "none",
    strokeDasharray: dasharray,
    strokeDashoffset: dashoffset,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    cx: circleCenter,
    cy: circleCenter,
    r: radius
  }))));
};

PullToRefreshSpinner.defaultProps = {
  size: 24,
  strokeWidth: 2.5,
  on: true,
  progress: null
};

var _default = _react.default.memo(PullToRefreshSpinner);

exports.default = _default;
//# sourceMappingURL=PullToRefreshSpinner.js.map