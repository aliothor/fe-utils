/**
 * 获取一个指定范围内随机数
 *
 * @param {number} minVal 最小值
 * @param {number} maxVal 最大值
 * @return {number}
 */
function random(minVal, maxVal) {
  return minVal >= maxVal ? minVal : ((minVal = minVal >> 0) + Math.round(Math.random() * ((maxVal || 9) - minVal)))
}
export default random
