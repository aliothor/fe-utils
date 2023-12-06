import helperMultiply from './helperMultiply'
import toNumber from './toNumber'

/**
 * 乘法运算
 *
 * @param {number} num1 数值1
 * @param {number} num2 数值2
 * @return {number}
 */
function multiply(num1, num2) {
  const multiplier = toNumber(num1)
  const multiplicand = toNumber(num2)
  return helperMultiply(multiplier, multiplicand)
}
export default multiply
