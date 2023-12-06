import values from './values'
import each from './each'

/**
 * 根据键数组、值数组对转换为对象
 *
 * @param {Array} props 键数组
 * @param {number} arr 值数组
 * @return {object}
 */
function zipObject(props, arr) {
  const result = {}
  arr = arr || []
  each(values(props), (val, key) => {
    result[val] = arr[key]
  })
  return result
}
export default zipObject
