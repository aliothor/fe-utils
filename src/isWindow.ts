import staticWindow from './staticWindow'

/**
 * 判断是否Window对象
 *
 * @param {object} obj 对象
 * @return {boolean}
 */
function isWindow(obj) {
  return staticWindow && !!(obj && obj === obj.window)
}
export default isWindow
