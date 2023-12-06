import helperNumberDivide from './helperNumberDivide'
import getSize from './getSize'
import sum from './sum'

/**
 * 求平均值函数
 *
 * @param {Array} array 数组
 * @param {Function/String} iterate 方法或属性
 * @param {object} context 上下文
 * @return {number}
 */
function mean(array, iterate, context?) {
  return helperNumberDivide(sum(array, iterate, context), getSize(array))
}
export default mean
