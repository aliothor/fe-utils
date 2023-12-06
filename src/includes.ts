import hasOwnProp from './hasOwnProp'

/**
 * 判断对象是否包含该值,成功返回true否则false
 *
 * @param {object} obj 对象
 * @param {object} val 值
 * @return {boolean}
 */
function includes(obj, val) {
  if (obj) {
    if (obj.includes)
      return obj.includes(val)

    for (const key in obj) {
      if (hasOwnProp(obj, key)) {
        if (val === obj[key])
          return true
      }
    }
  }
  return false
}
export default includes
