import each from './each'

/**
 * 根据回调过滤数据
 *
 * @param {object} obj 对象/数组
 * @param {Function} iterate(item, index, obj) 回调
 * @param {object} context 上下文
 * @return {object}
 */
function filter(obj, iterate, context?) {
  const result: any[] = []
  if (obj && iterate) {
    if (obj.filter)
      return obj.filter(iterate, context)

    each(obj, (val, key) => {
      if (iterate.call(context, val, key, obj))
        result.push(val)
    })
  }
  return result
}
export default filter
