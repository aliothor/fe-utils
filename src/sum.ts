import helperNumberAdd from './helperNumberAdd'
import isFunction from './isFunction'
import each from './each'
import get from './get'

/**
 * 求和函数，将数值相加
 *
 * @param {Array} array 数组
 * @param {Function/String} iterate 方法或属性
 * @param {object} context 上下文
 * @return {number}
 */
function sum(array, iterate, context?) {
  let result = 0
  each(array, iterate
    ? isFunction(iterate)
      ? function () {
        result = helperNumberAdd(result, iterate.apply(context, arguments))
      }
      : (val) => {
          result = helperNumberAdd(result, get(val, iterate))
        }
    : (val) => {
        result = helperNumberAdd(result, val)
      })
  return result
}
export default sum
