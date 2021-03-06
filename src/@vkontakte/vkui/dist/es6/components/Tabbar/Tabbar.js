import React from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import { isNumeric } from '../../lib/utils';
import usePlatform from '../../hooks/usePlatform';
import useInsets from '../../hooks/useInsets';

var Tabbar = function Tabbar(props) {
  var className = props.className,
      children = props.children,
      shadow = props.shadow,
      itemsLayout = props.itemsLayout;
  var platform = usePlatform();
  var insets = useInsets();

  var getItemsLayout = function getItemsLayout() {
    switch (itemsLayout) {
      case 'horizontal':
      case 'vertical':
        return itemsLayout;

      default:
        return React.Children.count(children) > 2 ? 'vertical' : 'horizontal';
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    className: classNames(getClassName('Tabbar', platform), className, "Tabbar--l-".concat(getItemsLayout()), {
      'Tabbar--shadow': shadow
    }),
    style: {
      paddingBottom: isNumeric(insets.bottom) ? insets.bottom : null
    }
  }, children);
};

Tabbar.defaultProps = {
  shadow: true
};
export default Tabbar;
//# sourceMappingURL=Tabbar.js.map