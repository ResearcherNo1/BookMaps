import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import useInsets from '../hooks/useInsets';
export default function withInsets(Component) {
  function WithInsets(props) {
    var insets = useInsets(); // @ts-ignore

    return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
      insets: insets
    }));
  }

  return WithInsets;
}
//# sourceMappingURL=withInsets.js.map