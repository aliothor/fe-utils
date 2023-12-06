import setupDefaults from './setupDefaults'
import each from './each'
import assign from './assign'

function unTreeList(result, array?, opts?) {
  const optChildren = opts.children
  const optData = opts.data
  const optClear = opts.clear
  each(array, (item) => {
    const children = item[optChildren]
    if (optData)
      item = item[optData]

    result.push(item)
    if (children && children.length)
      unTreeList(result, children, opts)

    if (optClear)
      delete item[optChildren]
  })
  return result
}
/**
 * 将一个树结构转成数组列表
 *
 * @param {Array} array 数组
 * @param {object} options { children: 'children', data: 'data', clear: false }
 * @return {Array}
 */
function toTreeArray(array, options) {
  return unTreeList([], array, assign({}, setupDefaults.treeOptions, options))
}
export default toTreeArray
