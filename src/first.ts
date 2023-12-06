import values from './values'

/**
 * 获取对象第一个值
 *
 * @param {object} obj 对象/数组
 * @return {object}
 */
function first(obj) {
  return values(obj)[0]
}
export default first
