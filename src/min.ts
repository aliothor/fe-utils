import helperCreateMinMax from './helperCreateMinMax'

/**
 * 获取最小值
 *
 * @param {Array} arr 数组
 * @param {Function} iterate(item, index, obj) 回调
 * @return {number}
 */
const min = helperCreateMinMax((rest, itemVal) => {
  return rest > itemVal
})
export default min
