import keys from './keys'
import findIndexOf from './findIndexOf'
import isEqual from './isEqual'
import some from './some'
import includeArrays from './includeArrays'

/**
 * 判断属性中的键和值是否包含在对象中
 *
 * @param {Object/Array} obj 对象
 * @param {object} source 值
 * @return {boolean}
 */
function isMatch(obj, source) {
  const objKeys = keys(obj)
  const sourceKeys = keys(source)
  if (sourceKeys.length) {
    if (includeArrays(objKeys, sourceKeys)) {
      return some(sourceKeys, (key2) => {
        return findIndexOf(objKeys, (key1) => {
          return key1 === key2 && isEqual(obj[key1], source[key2])
        }) > -1
      })
    }
  }
  else {
    return true
  }
  return isEqual(obj, source)
}
export default isMatch
