import isArray from './isArray'
import lastArrayEach from './lastArrayEach'
import lastObjectEach from './lastObjectEach'

/**
 * 迭代器,从最后开始迭代
 *
 * @param {object} obj 对象/数组
 * @param {Function} iterate(item, index, obj) 回调
 * @param {object} context 上下文
 * @return {object}
 */
function lastEach(obj, iterate, context?) {
  if (obj)
    return (isArray(obj) ? lastArrayEach : lastObjectEach)(obj, iterate, context)

  return obj
}
export default lastEach
