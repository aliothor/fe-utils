import each from './each'
import isFunction from './isFunction'
import property from './property'

/**
 * 指定方法后的返回值组成的新对象
 *
 * @param {object} obj 对象/数组
 * @param {Function} iterate(item, index, obj) 回调
 * @param {object} context 上下文
 * @return {object}
 */
function objectMap(obj, iterate, context?) {
  const result = {}
  if (obj) {
    if (iterate) {
      if (!isFunction(iterate))
        iterate = property(iterate)

      each(obj, (val, index) => {
        result[index] = iterate.call(context, val, index, obj)
      })
    }
    else {
      return obj
    }
  }
  return result
}
export default objectMap
