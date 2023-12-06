import toValueString from './toValueString'
import helperStringRepeat from './helperStringRepeat'

/**
 * 将字符串重复 n 次
 *
 * @param {string} str 字符串
 * @param {number} count 次数
 * @return {string}
 */
function repeat(str, count) {
  return helperStringRepeat(toValueString(str), count)
}
export default repeat
