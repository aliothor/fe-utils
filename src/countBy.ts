import groupBy from './groupBy'
import objectEach from './objectEach'

/**
 * 集合分组统计,返回各组中对象的数量统计
 *
 * @param {Array} obj 对象
 * @param {Function} iterate 回调/对象属性
 * @param {object} context 上下文
 * @return {object}
 */
function countBy(obj, iterate, context?) {
  const result = groupBy(obj, iterate, context || this)
  objectEach(result, (item, key) => {
    result[key] = item.length
  })
  return result
}
export default countBy
