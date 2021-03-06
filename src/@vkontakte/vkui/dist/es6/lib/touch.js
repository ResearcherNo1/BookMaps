/*
 * Получает кординату по оси абсцисс из touch- или mouse-события
 */
var coordX = function coordX(e) {
  return e.pageX || e.changedTouches && e.changedTouches[0].pageX;
};
/*
 * Получает кординату по оси ординат из touch- или mouse-события
 */


var coordY = function coordY(e) {
  return e.pageY || e.changedTouches && e.changedTouches[0].pageY;
};

var isClient = typeof window !== 'undefined';
var touchEnabled = isClient && 'ontouchstart' in window;
/*
 * Возвращает массив поддерживаемых событий
 * Если браузер поддерживает pointer events или подключена handjs, вернет события указателя.
 * Если нет, используем события мыши
 */

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

export { getSupportedEvents, coordX, coordY, touchEnabled, rubber };
//# sourceMappingURL=touch.js.map