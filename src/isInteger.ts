import isArray from './isArray'
import isNull from './isNull'

/**
 * 判断是否整数
 *
 * @param {Number, String} number 数值
 * @return {boolean}
 */
const isInteger = function (obj) {
  return !isNull(obj) && !isNaN(obj) && !isArray(obj) && obj % 1 === 0
}
export default isInteger
