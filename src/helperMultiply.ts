import helperNumberDecimal from './helperNumberDecimal'
import toNumberString from './toNumberString'

function helperMultiply(multiplier, multiplicand) {
  const str1 = toNumberString(multiplier)
  const str2 = toNumberString(multiplicand)
  return Number.parseInt(str1.replace('.', '')) * Number.parseInt(str2.replace('.', '')) / 10 ** (helperNumberDecimal(str1) + helperNumberDecimal(str2))
}
export default helperMultiply
