import shuffle from './shuffle'

/**
 * 从一个数组中随机返回几个元素
 *
 * @param {Array} array 数组
 * @param {number} number 个数
 * @return {Array}
 */
function sample(array, number) {
  const result = shuffle(array)
  if (arguments.length <= 1)
    return result[0]

  if (number < result.length)
    result.length = number || 0

  return result
}
export default sample
