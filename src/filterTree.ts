import eachTree from './eachTree'

/**
 * 从树结构中根据回调过滤数据
 *
 * @param {object} obj 对象/数组
 * @param {Function} iterate(item, index, items, path, parent) 回调
 * @param {object} options {children: 'children'}
 * @param {object} context 上下文
 * @return {Array}
 */
function filterTree(obj, iterate, options?, context?) {
  const result: any[] = []
  if (obj && iterate) {
    eachTree(obj, (item, index, items, path, parent, nodes) => {
      if (iterate.call(context, item, index, items, path, parent, nodes))
        result.push(item)
    }, options)
  }
  return result
}
export default filterTree
