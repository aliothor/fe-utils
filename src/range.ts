/**
 * 序号列表生成函数
 *
 * @param {number} start 起始值
 * @param {number} stop 结束值
 * @param {number} step 自增值
 * @return {Array}
 */
function range(start, stop, step) {
  let index, len
  const result: any[] = []
  const args = arguments
  if (args.length < 2) {
    stop = args[0]
    start = 0
  }
  index = start >> 0
  len = stop >> 0
  if (index < stop) {
    step = step >> 0 || 1
    for (; index < len; index += step)
      result.push(index)
  }
  return result
}
export default range
