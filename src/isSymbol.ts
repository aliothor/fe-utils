/**
 * 判断是否Symbol对象
 *
 * @param {object} obj 对象
 * @return {boolean}
 */
// const supportSymbol = typeof Symbol !== staticStrUndefined

function isSymbol(obj) {
  return typeof obj === 'symbol'
}
export default isSymbol
