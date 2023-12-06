import isArray from './isArray'
import arrayEach from './arrayEach'
import objectEach from './objectEach'

/**
 * 迭代器
 *
 * @param {object} obj 对象/数组
 * @param {Function} iterate(item, index, obj) 回调
 * @param {object} context 上下文
 * @return {object}
 */
function each(obj, iterate, context?) {
  if (obj)
    return (isArray(obj) ? arrayEach : objectEach)(obj, iterate, context)

  return obj
}
export default each
