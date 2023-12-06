import slice from './slice'

/**
 * 创建一个函数, 调用次数超过 count 次之后执行回调并将所有结果记住后返回
 *
 * @param {number} count 调用次数
 * @param {Function} callback 完成回调
 * @return {object}
 */
function after(count, callback, context?) {
  let runCount = 0
  const rests: any[] = []
  return function () {
    const args = arguments
    runCount++
    if (runCount <= count)
      rests.push(args[0])

    if (runCount >= count)
      callback.apply(context, [rests].concat(slice(args)))
  }
}
export default after
