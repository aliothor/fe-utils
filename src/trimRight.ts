import toValueString from './toValueString'

/**
 * 去除字符串右边的空格
 *
 * @param {string} str 字符串
 * @return {string}
 */
function trimRight(str) {
  return str && str.trimRight ? str.trimRight() : toValueString(str).replace(/[\s\uFEFF\xA0]+$/g, '')
}
export default trimRight
