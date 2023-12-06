import slice from './slice'

/**
 * 该方法和 setTimeout 一样的效果，区别就是支持上下文和额外参数
 *
 * @param {Function} callback 函数
 * @param {number} wait 延迟毫秒
 * @param {*} args 额外的参数
 * @return {number}
 */
function delay(callback, wait) {
  const args = slice(arguments, 2)
  const context = this
  return setTimeout(() => {
    callback.apply(context, args)
  }, wait)
}
export default delay
