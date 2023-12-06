import each from './each'
import includes from './includes'
import isFunction from './isFunction'
import property from './property'

/**
 * 数组去重
 *
 * @param {*} array  数组
 * @param {*} iterate 字段或回调
 * @param {*} context
 * @returns
 */
function uniq(array, iterate?, context?) {
  const result: any[] = []
  if (iterate) {
    if (!isFunction(iterate))
      iterate = property(iterate)

    let val; const valMap = {}
    each(array, (item, key) => {
      val = iterate.call(context, item, key, array)
      if (!valMap[val]) {
        valMap[val] = 1
        result.push(item)
      }
    })
  }
  else {
    each(array, (value) => {
      if (!includes(result, value))
        result.push(value)
    })
  }
  return result
}
export default uniq
