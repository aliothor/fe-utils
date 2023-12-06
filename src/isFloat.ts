import isArray from './isArray'
import isInteger from './isInteger'
import isNull from './isNull'

/**
 * 判断是否小数
 *
 * @param {number} obj 数值
 * @return {boolean}
 */
function isFloat(obj) {
  return !isNull(obj) && !isNaN(obj) && !isArray(obj) && !isInteger(obj)
}
export default isFloat
