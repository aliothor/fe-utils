import helperCreateTreeFunc from './helperCreateTreeFunc'

function findTreeItem(parent, obj, iterate, context, path, node, parseChildren, opts) {
  if (obj) {
    let item, index, len, paths, nodes, match
    for (index = 0, len = obj.length; index < len; index++) {
      item = obj[index]
      paths = path.concat([`${index}`])
      nodes = node.concat([item])
      if (iterate.call(context, item, index, obj, paths, parent, nodes))
        return { index, item, path: paths, items: obj, parent, nodes }

      if (parseChildren && item) {
        match = findTreeItem(item, item[parseChildren], iterate, context, paths.concat([parseChildren]), nodes, parseChildren, opts)
        if (match)
          return match
      }
    }
  }
}
/**
 * 从树结构中查找匹配第一条数据的键、值、路径
 *
 * @param {object} obj 对象/数组
 * @param {Function} iterate(item, index, items, path, parent, nodes) 回调
 * @param {object} options {children: 'children'}
 * @param {object} context 上下文
 * @return {object} { item, index, items, path, parent, nodes }
 */
const findTree = helperCreateTreeFunc(findTreeItem)
export default findTree
