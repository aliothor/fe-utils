import staticStrUndefined from './staticStrUndefined'

/**
 * 判断是否WeakSet对象
 *
 * @param {object} obj 对象
 * @return {boolean}
 */
const supportWeakSet = typeof WeakSet !== staticStrUndefined
function isWeakSet(obj) {
  return supportWeakSet && obj instanceof WeakSet
}
export default isWeakSet
