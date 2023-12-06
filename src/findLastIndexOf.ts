import helperCreateiterateIndexOf from './helperCreateiterateIndexOf'

/**
 * 从最后开始的索引值,返回对象第一个索引值
 *
 * @param {object} obj 对象/数组
 * @param {Function} iterate(item, index, obj) 回调
 * @param {object} context 上下文
 * @return {object}
 */
const findLastIndexOf = helperCreateiterateIndexOf((obj, iterate, context) => {
  for (let len = obj.length - 1; len >= 0; len--) {
    if (iterate.call(context, obj[len], len, obj))
      return len
  }
  return -1
})
export default findLastIndexOf
