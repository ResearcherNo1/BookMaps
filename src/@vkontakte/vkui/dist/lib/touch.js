"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSupportedEvents = getSupportedEvents;
exports.rubber = rubber;
exports.touchEnabled = exports.coordY = exports.coordX = void 0;

/*
 * Получает кординату по оси абсцисс из touch- или mouse-события
 */
var coordX = function coordX(e) {
  return e.pageX || e.changedTouches && e.changedTouches[0].pageX;
};
/*
 * Получает кординату по оси ординат из touch- или mouse-события
 */


exports.coordX = coordX;

var coordY = function coordY(e) {
  return e.pageY || e.changedTouches && e.changedTouches[0].pageY;
};

exports.coordY = coordY;
var isClient = typeof window !== 'undefined';
var touchEnabled = isClient && 'ontouchstart' in window;
/*
 * Возвращает массив поддерживаемых событий
 * Если браузер поддерживает pointer events или подключена handjs, вернет события указателя.
 * Если нет, используем события мыши
 */

exports.touchEnabled = touchEnabled;

function getSupportedEvents() {
  if (touchEnabled) {
    return ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
  }

  return ['mousedown', 'mousemove', 'mouseup', 'mouseleave'];
}
/*
 * Рассчитывает "сопротивление" для iOS тач-событий
 */


function rubber(offset, dimension, resistanceRate, isAndroid) {
  if (isAndroid || offset < 0) {
    return offset;
  }

  var offsettedResistance = offset * resistanceRate;
  return offsettedResistance * dimension / (offsettedResistance + dimension);
}
//# sourceMappingURL=touch.js.map