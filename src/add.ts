import helperNumberAdd from './helperNumberAdd'
import toNumber from './toNumber'

/**
 * 加法运算
 *
 * @param {number} num1 被加数
 * @param {number} num2 加数
 * @return {number}
 */
function add(num1, num2) {
  return helperNumberAdd(toNumber(num1), toNumber(num2))
}
export default add
