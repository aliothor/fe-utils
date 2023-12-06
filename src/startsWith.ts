import toValueString from './toValueString'

/**
 * 判断字符串是否在源字符串的头部
 *
 * @param {string} str 字符串
 * @param {String/Number} val 值
 * @param {number} startIndex 开始索引
 * @return {string}
 */
function startsWith(str, val, startIndex) {
  const rest = toValueString(str)
  return (arguments.length === 1 ? rest : rest.substring(startIndex)).indexOf(val) === 0
}
export default startsWith
