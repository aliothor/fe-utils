import isEmpty from './isEmpty'
import isObject from './isObject'
import isFunction from './isFunction'
import property from './property'
import each from './each'

function createiterateEmpty(iterate) {
  return function () {
    return isEmpty(iterate)
  }
}
/**
 * 集合分组,默认使用键值分组,如果有iterate则使用结果进行分组
 *
 * @param {Array} obj 对象
 * @param {Function} iterate 回调/对象属性
 * @param {object} context 上下文
 * @return {object}
 */
function groupBy(obj, iterate, context?) {
  let groupKey
  const result = {}
  if (obj) {
    if (iterate && isObject(iterate))
      iterate = createiterateEmpty(iterate)

    else if (!isFunction(iterate))
      iterate = property(iterate)

    each(obj, (val, key) => {
      groupKey = iterate ? iterate.call(context, val, key, obj) : val
      if (result[groupKey])
        result[groupKey].push(val)

      else
        result[groupKey] = [val]
    })
  }
  return result
}
export default groupBy
