import helperNumberDivide from './helperNumberDivide'
import toNumber from './toNumber'

/**
 * 除法运算
 *
 * @param {number} num1 数值1
 * @param {number} num2 数值2
 * @return {number}
 */
function divide(num1, num2) {
  return helperNumberDivide(toNumber(num1), toNumber(num2))
}
export default divide
