import isArray from './isArray'
import isString from './isString'
import each from './each'

/**
 * 返回对象的长度
 *
 * @param {object} obj 对象
 * @return {number}
 */
function getSize(obj) {
  let len = 0
  if (isString(obj) || isArray(obj))
    return obj.length

  each(obj, () => {
    len++
  })
  return len
}
export default getSize
