import eqNull from './eqNull'

/**
 * JSON转字符串
 *
 * @param {object} obj 对象
 * @return {string} 返回字符串
 */
function toJSONString(obj) {
  return eqNull(obj) ? '' : JSON.stringify(obj)
}
export default toJSONString
