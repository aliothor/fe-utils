import slice from './slice'

/**
 * 创建一个绑定上下文的函数
 *
 * @param {Function} callback 函数
 * @param {object} context 上下文
 * @param {*} args 额外的参数
 * @return {object}
 */
function bind(callback, context?) {
  const args = slice(arguments, 2)
  return function () {
    return callback.apply(context, slice(arguments).concat(args))
  }
}
export default bind
