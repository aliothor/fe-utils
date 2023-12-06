import helperEqualCompare from './helperEqualCompare'
import helperDefaultCompare from './helperDefaultCompare'
import isFunction from './isFunction'
import isUndefined from './isUndefined'

/**
 * 深度比较两个对象之间的值是否相等，使用自定义比较函数
 *
 * @param {object} obj1 值1
 * @param {object} obj2 值2
 * @param {Function} func 自定义函数
 * @return {boolean}
 */
function isEqualWith(obj1, obj2, func) {
  if (isFunction(func)) {
    return helperEqualCompare(obj1, obj2, (v1, v2, key, obj1, obj2) => {
      const result = func(v1, v2, key, obj1, obj2)
      return isUndefined(result) ? helperDefaultCompare(v1, v2) : !!result
    }, func)
  }
  return helperEqualCompare(obj1, obj2, helperDefaultCompare)
}
export default isEqualWith
