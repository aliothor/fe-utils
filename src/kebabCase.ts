import toValueString from './toValueString'
import helperStringSubstring from './helperStringSubstring'
import helperStringLowerCase from './helperStringLowerCase'
const kebabCacheMaps = {}
/**
 * 将带驼峰字符串转成字符串,例如： projectName 转为 project-name
 *
 * @param {string} str 字符串
 * @return {string}
 */
function kebabCase(str) {
  str = toValueString(str)
  if (kebabCacheMaps[str])
    return kebabCacheMaps[str]

  if (/^[A-Z]+$/.test(str))
    return helperStringLowerCase(str)

  let rest = str.replace(/^([a-z])([A-Z]+)([a-z]+)$/, (text, prevLower, upper, nextLower) => {
    const upperLen = upper.length
    if (upperLen > 1)
      return `${prevLower}-${helperStringLowerCase(helperStringSubstring(upper, 0, upperLen - 1))}-${helperStringLowerCase(helperStringSubstring(upper, upperLen - 1, upperLen))}${nextLower}`

    return helperStringLowerCase(`${prevLower}-${upper}${nextLower}`)
  }).replace(/^([A-Z]+)([a-z]+)?$/, (text, upper, nextLower) => {
    const upperLen = upper.length
    return helperStringLowerCase(`${helperStringSubstring(upper, 0, upperLen - 1)}-${helperStringSubstring(upper, upperLen - 1, upperLen)}${nextLower || ''}`)
  }).replace(/([a-z]?)([A-Z]+)([a-z]?)/g, (text, prevLower, upper, nextLower, index) => {
    const upperLen = upper.length
    if (upperLen > 1) {
      if (prevLower)
        prevLower += '-'

      if (nextLower)
        return `${(prevLower || '') + helperStringLowerCase(helperStringSubstring(upper, 0, upperLen - 1))}-${helperStringLowerCase(helperStringSubstring(upper, upperLen - 1, upperLen))}${nextLower}`
    }
    return (prevLower || '') + (index ? '-' : '') + helperStringLowerCase(upper) + (nextLower || '')
  })
  rest = rest.replace(/([-]+)/g, (text, flag, index) => {
    return index && index + flag.length < rest.length ? '-' : ''
  })
  kebabCacheMaps[str] = rest
  return rest
}
export default kebabCase
