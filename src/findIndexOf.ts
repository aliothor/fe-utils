import helperCreateiterateIndexOf from './helperCreateiterateIndexOf'

/**
 * 返回对象第一个索引值
 *
 * @param {object} obj 对象/数组
 * @param {Function} iterate(item, index, obj) 回调
 * @param {object} context 上下文
 * @return {object}
 */
const findIndexOf = helperCreateiterateIndexOf((obj, iterate, context) => {
  for (let index = 0, len = obj.length; index < len; index++) {
    if (iterate.call(context, obj[index], index, obj))
      return index
  }
  return -1
})
export default findIndexOf
