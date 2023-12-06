import helperCreateTreeFunc from './helperCreateTreeFunc'
import arrayEach from './arrayEach'
import assign from './assign'

function searchTreeItem(parentAllow, parent, obj, iterate, context, path, node, parseChildren, opts) {
  let paths, nodes, rest, isAllow, hasChild
  const rests: any[] = []
  const hasOriginal = opts.original
  const sourceData = opts.data
  const mapChildren = opts.mapChildren || parseChildren
  arrayEach(obj, (item, index) => {
    paths = path.concat([`${index}`])
    nodes = node.concat([item])
    isAllow = parentAllow || iterate.call(context, item, index, obj, paths, parent, nodes)
    hasChild = parseChildren && item[parseChildren]
    if (isAllow || hasChild) {
      if (hasOriginal) {
        rest = item
      }
      else {
        rest = assign({}, item)
        if (sourceData)
          rest[sourceData] = item
      }
      rest[mapChildren] = searchTreeItem(isAllow, item, item[parseChildren], iterate, context, paths, nodes, parseChildren, opts)
      if (isAllow || rest[mapChildren].length)
        rests.push(rest)
    }
    else if (isAllow) {
      rests.push(rest)
    }
  })
  return rests
}
/**
 * 从树结构中根据回调查找数据
 *
 * @param {object} obj 对象/数组
 * @param {Function} iterate(item, index, items, path, parent, nodes) 回调
 * @param {object} options {children: 'children'}
 * @param {object} context 上下文
 * @return {Array}
 */
const searchTree = helperCreateTreeFunc((parent, obj, iterate, context, path, nodes, parseChildren, opts) => {
  return searchTreeItem(0, parent, obj, iterate, context, path, nodes, parseChildren, opts)
})
export default searchTree
