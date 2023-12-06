import isNull from './isNull'

/**
 * 返回一个获取对象属性的函数
 *
 * @param {string} name 属性名
 * @param {object} defs 空值
 */
function property(name, defs?) {
  return function (obj) {
    return isNull(obj) ? defs : obj[name]
  }
}
export default property
