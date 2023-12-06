import staticStrUndefined from './staticStrUndefined'

/**
 * 判断是否Map对象
 *
 * @param {object} obj 对象
 * @return {boolean}
 */
const supportMap = typeof Map !== staticStrUndefined
function isMap(obj) {
  return supportMap && obj instanceof Map
}
export default isMap
