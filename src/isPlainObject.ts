/**
 * 判断是否对象
 *
 * @param {object} obj 对象
 * @return {boolean}
 */
function isPlainObject(obj) {
  return obj ? obj.constructor === Object : false
}
export default isPlainObject
