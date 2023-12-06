/**
 * 判断是否为空对象
 *
 * @param {object} obj 对象
 * @return {boolean}
 */
function isEmpty(obj) {
  for (const key in obj)
    return false

  return true
}
export default isEmpty
