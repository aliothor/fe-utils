import toValueString from './toValueString'

/**
 * 判断字符串是否在源字符串的尾部
 *
 * @param {string} str 字符串
 * @param {String/Number} val 值
 * @param {number} startIndex 开始索引
 * @return {string}
 */
function endsWith(str, val, startIndex) {
  const rest = toValueString(str)
  const argsLen = arguments.length
  return argsLen > 1 && (argsLen > 2 ? rest.substring(0, startIndex).indexOf(val) === startIndex - 1 : rest.indexOf(val) === rest.length - 1)
}
export default endsWith
