import isNull from './isNull'
import isUndefined from './isUndefined'

/**
 * 判断是否 undefined 和 null
 * @param {object} obj 对象
 * @return {boolean}
 */
function eqNull(obj) {
  return isNull(obj) || isUndefined(obj)
}
export default eqNull
