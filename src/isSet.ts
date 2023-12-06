import staticStrUndefined from './staticStrUndefined'

/**
 * 判断是否Set对象
 *
 * @param {object} obj 对象
 * @return {boolean}
 */
const supportSet = typeof Set !== staticStrUndefined
function isSet(obj) {
  return supportSet && obj instanceof Set
}
export default isSet
