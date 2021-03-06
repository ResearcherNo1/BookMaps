"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useInsets;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = require("react");

var _vkBridge = _interopRequireDefault(require("@vkontakte/vk-bridge"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var initialState = {
  bottom: null,
  top: null,
  left: null,
  right: null
};

function resolveInsets(e) {
  var _e$detail = e.detail,
      type = _e$detail.type,
      data = _e$detail.data;

  switch (type) {
    case 'VKWebAppUpdateConfig':
    case 'VKWebAppUpdateInsets':
      // Устаревшее событие vk-bridge
      var insets = data.insets;

      if (insets) {
        return _objectSpread({}, insets, {
          bottom: insets.bottom > 150 ? 0 : insets.bottom // если больше 150 – значит открылась клава и она сама работает как инсет, то есть наш нужно занулить

        });
      }

  }

  return null;
}

_vkBridge.default.subscribe(function (e) {
  var insets = resolveInsets(e);

  if (insets) {
    initialState = insets;
  }
});

function useInsets() {
  var _useState = (0, _react.useState)(initialState),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      insets = _useState2[0],
      setInsets = _useState2[1];

  (0, _react.useEffect)(function () {
    function connectListener(e) {
      var insets = resolveInsets(e);

      if (insets) {
        setInsets(insets);
      }
    }

    _vkBridge.default.subscribe(connectListener);

    return function () {
      _vkBridge.default.unsubscribe(connectListener);
    };
  }, []);
  return insets;
}
//# sourceMappingURL=useInsets.js.map