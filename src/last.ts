import values from './values'

/**
 * 获取对象最后一个值
 *
 * @param {object} obj 对象/数组
 * @return {object}
 */
function last(obj) {
  const list = values(obj)
  return list[list.length - 1]
}
export default last
