import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { useEffect, useMemo, useState, useCallback } from 'react';
import Icon24Dismiss from '@vkontakte/icons/dist/24/dismiss';
import Button from '../Button/Button';
import Cell from '../Cell/Cell';
import Avatar from '../Avatar/Avatar';
import classNames from '../../lib/classNames';

var PromoBanner = function PromoBanner(props) {
  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      currentPixel = _useState2[0],
      setCurrentPixel = _useState2[1];

  var statsPixels = useMemo(function () {
    return props.bannerData.statistics ? props.bannerData.statistics.reduce(function (acc, item) {
      return _objectSpread({}, acc, _defineProperty({}, item.type, item.url));
    }, {}) : {};
  }, [props.bannerData.statistics]);
  var onClick = useCallback(function () {
    return setCurrentPixel(statsPixels.click || '');
  }, [statsPixels.click]);
  useEffect(function () {
    if (statsPixels.playbackStarted) {
      setCurrentPixel(statsPixels.playbackStarted);
    }
  }, [statsPixels.playbackStarted]);
  return /*#__PURE__*/React.createElement("div", {
    className: classNames('PromoBanner', props.className)
  }, /*#__PURE__*/React.createElement("div", {
    className: "PromoBanner__head"
  }, props.bannerData.ageRestriction && /*#__PURE__*/React.createElement("span", {
    className: "PromoBanner__age"
  }, props.bannerData.ageRestriction, "+"), /*#__PURE__*/React.createElement("span", {
    className: "PromoBanner__label"
  }, props.bannerData.advertisingLabel || 'Advertisement'), !props.isCloseButtonHidden && /*#__PURE__*/React.createElement("div", {
    className: "PromoBanner__close",
    onClick: props.onClose
  }, /*#__PURE__*/React.createElement(Icon24Dismiss, null))), /*#__PURE__*/React.createElement("a", {
    href: props.bannerData.trackingLink,
    onClick: onClick,
    rel: "nofollow noopener noreferrer",
    target: "_blank",
    className: "PromoBanner__clickable-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "PromoBanner__content"
  }, /*#__PURE__*/React.createElement(Cell, {
    before: /*#__PURE__*/React.createElement(Avatar, {
      mode: "image",
      size: 48,
      src: props.bannerData.iconLink,
      alt: props.bannerData.title
    }),
    asideContent: /*#__PURE__*/React.createElement(Button, {
      mode: "outline"
    }, props.bannerData.ctaText),
    description: props.bannerData.domain
  }, props.bannerData.title))), currentPixel.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "PromoBanner__pixels"
  }, /*#__PURE__*/React.createElement("img", {
    src: currentPixel,
    alt: ""
  })));
};

export default PromoBanner;
//# sourceMappingURL=PromoBanner.js.map