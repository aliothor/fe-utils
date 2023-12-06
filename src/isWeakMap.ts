import staticStrUndefined from './staticStrUndefined'

/**
 * 判断是否WeakMap对象
 *
 * @param {object} obj 对象
 * @return {boolean}
 */
const supportWeakMap = typeof WeakMap !== staticStrUndefined
function isWeakMap(obj) {
  return supportWeakMap && obj instanceof WeakMap
}
export default isWeakMap
