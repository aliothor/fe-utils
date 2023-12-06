import helperEqualCompare from './helperEqualCompare'
import helperDefaultCompare from './helperDefaultCompare'

/**
 * 深度比较两个对象之间的值是否相等
 *
 * @param {object} obj1 值1
 * @param {object} obj2 值2
 * @return {boolean}
 */
function isEqual(obj1, obj2) {
  return helperEqualCompare(obj1, obj2, helperDefaultCompare)
}
export default isEqual
