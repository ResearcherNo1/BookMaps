import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { useEffect, useState } from 'react';
import vkBridge from '@vkontakte/vk-bridge';
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

vkBridge.subscribe(function (e) {
  var insets = resolveInsets(e);

  if (insets) {
    initialState = insets;
  }
});
export default function useInsets() {
  var _useState = useState(initialState),
      _useState2 = _slicedToArray(_useState, 2),
      insets = _useState2[0],
      setInsets = _useState2[1];

  useEffect(function () {
    function connectListener(e) {
      var insets = resolveInsets(e);

      if (insets) {
        setInsets(insets);
      }
    }

    vkBridge.subscribe(connectListener);
    return function () {
      vkBridge.unsubscribe(connectListener);
    };
  }, []);
  return insets;
}
//# sourceMappingURL=useInsets.js.map