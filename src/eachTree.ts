import helperCreateTreeFunc from './helperCreateTreeFunc'
import each from './each'

function eachTreeItem(parent, obj, iterate, context, path, node, parseChildren, opts) {
  let paths, nodes
  each(obj, (item, index) => {
    paths = path.concat([`${index}`])
    nodes = node.concat([item])
    iterate.call(context, item, index, obj, paths, parent, nodes)
    if (item && parseChildren) {
      paths.push(parseChildren)
      eachTreeItem(item, item[parseChildren], iterate, context, paths, nodes, parseChildren, opts)
    }
  })
}
/**
 * 从树结构中遍历数据的键、值、路径
 *
 * @param {object} obj 对象/数组
 * @param {Function} iterate(item, index, items, path, parent, nodes) 回调
 * @param {object} options {children: 'children', mapChildren: 'children}
 * @param {object} context 上下文
 */
const eachTree = helperCreateTreeFunc(eachTreeItem)

export default eachTree
