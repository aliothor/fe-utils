import toValueString from './toValueString'
import isUndefined from './isUndefined'
import helperStringRepeat from './helperStringRepeat'

/**
 * 用指定字符从前面开始补全字符串
 *
 * @param {string} str 字符串
 * @param {number} targetLength 结果长度
 * @param {number} padString 补全字符
 * @return {string}
 */
function padStart(str, targetLength, padString) {
  const rest = toValueString(str)
  targetLength = targetLength >> 0
  padString = isUndefined(padString) ? ' ' : `${padString}`
  if (rest.padStart)
    return rest.padStart(targetLength, padString)

  if (targetLength > rest.length) {
    targetLength -= rest.length
    if (targetLength > padString.length)
      padString += helperStringRepeat(padString, targetLength / padString.length)

    return padString.slice(0, targetLength) + rest
  }
  return rest
}
export default padStart
