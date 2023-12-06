import toValueString from './toValueString'
import helperStringSubstring from './helperStringSubstring'
import helperStringUpperCase from './helperStringUpperCase'
import helperStringLowerCase from './helperStringLowerCase'
const camelCacheMaps = {}
/**
 * 将带字符串转成驼峰字符串,例如： project-name 转为 projectName
 *
 * @param {string} str 字符串
 * @return {string}
 */
function camelCase(str) {
  str = toValueString(str)
  if (camelCacheMaps[str])
    return camelCacheMaps[str]

  let strLen = str.length
  let rest = str.replace(/([-]+)/g, (text, flag, index) => {
    return index && index + flag.length < strLen ? '-' : ''
  })
  strLen = rest.length
  rest = rest.replace(/([A-Z]+)/g, (text, upper, index) => {
    const upperLen = upper.length
    upper = helperStringLowerCase(upper)
    if (index) {
      if (upperLen > 2 && index + upperLen < strLen)
        return helperStringUpperCase(helperStringSubstring(upper, 0, 1)) + helperStringSubstring(upper, 1, upperLen - 1) + helperStringUpperCase(helperStringSubstring(upper, upperLen - 1, upperLen))

      return helperStringUpperCase(helperStringSubstring(upper, 0, 1)) + helperStringSubstring(upper, 1, upperLen)
    }
    else {
      if (upperLen > 1 && index + upperLen < strLen)
        return helperStringSubstring(upper, 0, upperLen - 1) + helperStringUpperCase(helperStringSubstring(upper, upperLen - 1, upperLen))
    }
    return upper
  }).replace(/(-[a-zA-Z])/g, (text, upper) => {
    return helperStringUpperCase(helperStringSubstring(upper, 1, upper.length))
  })
  camelCacheMaps[str] = rest
  return rest
}
export default camelCase
