/**
 * 判断是否TypeError对象
 *
 * @param {object} obj 对象
 * @return {boolean}
 */
function isTypeError(obj) {
  return obj ? obj.constructor === TypeError : false
}
export default isTypeError
