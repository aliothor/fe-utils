import staticStrUndefined from './staticStrUndefined'

/**
 * 判断是否FormData对象
 *
 * @param {object} obj 对象
 * @return {boolean}
 */
const supportFormData = typeof FormData !== staticStrUndefined
function isFormData(obj) {
  return supportFormData && obj instanceof FormData
}
export default isFormData
