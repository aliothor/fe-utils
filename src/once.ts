import slice from './slice'

/**
 * 创建一个只能调用一次的函数,只会返回第一次执行后的结果
 *
 * @param {Function} callback 函数
 * @param {object} context 上下文
 * @param {*} args 额外的参数
 * @return {object}
 */
function once(callback, context?) {
  let done = false
  let rest = null
  const args = slice(arguments, 2)
  return function () {
    if (done)
      return rest

    rest = callback.apply(context, slice(arguments).concat(args))
    done = true
    return rest
  }
}
export default once
