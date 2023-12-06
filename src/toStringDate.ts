import staticParseInt from './staticParseInt'
import helperGetUTCDateTime from './helperGetUTCDateTime'
import helperGetDateTime from './helperGetDateTime'
import isString from './isString'
import isDate from './isDate'

function getParseRule(txt) {
  return `(\\d{${txt}})`
}
function toParseMs(num) {
  if (num < 10)
    return num * 100

  else if (num < 100)
    return num * 10

  return num
}
function toParseNum(num) {
  return isNaN(num) ? num : staticParseInt(num)
}
const d2 = getParseRule(2)
const d1or2 = getParseRule('1,2')
const d1or7 = getParseRule('1,7')
const d3or4 = getParseRule('3,4')
const place = '.{1}'
const d1Or2RE = place + d1or2
const dzZ = '(([zZ])|([-+]\\d{2}:?\\d{2}))'
const defaulParseStrs = [d3or4, d1Or2RE, d1Or2RE, d1Or2RE, d1Or2RE, d1Or2RE, place + d1or7, dzZ]
const defaulParseREs: any[] = []
for (let len = defaulParseStrs.length - 1; len >= 0; len--) {
  let rule = ''
  for (var i = 0; i < len + 1; i++)
    rule += defaulParseStrs[i]

  defaulParseREs.push(new RegExp(`^${rule}$`))
}
/**
 * 解析默认格式
 */
function parseDefaultRules(str) {
  let matchRest; const resMaps: any = {}
  for (let i = 0, dfrLen = defaulParseREs.length; i < dfrLen; i++) {
    matchRest = str.match(defaulParseREs[i])
    if (matchRest) {
      resMaps.y = matchRest[1]
      resMaps.M = matchRest[2]
      resMaps.d = matchRest[3]
      resMaps.H = matchRest[4]
      resMaps.m = matchRest[5]
      resMaps.s = matchRest[6]
      resMaps.S = matchRest[7]
      resMaps.Z = matchRest[8]
      break
    }
  }
  return resMaps
}
const customParseStrs = [
  ['yyyy', d3or4],
  ['yy', d2],
  ['MM', d2],
  ['M', d1or2],
  ['dd', d2],
  ['d', d1or2],
  ['HH', d2],
  ['H', d1or2],
  ['mm', d2],
  ['m', d1or2],
  ['ss', d2],
  ['s', d1or2],
  ['SSS', getParseRule(3)],
  ['S', d1or7],
  ['Z', dzZ],
]
const parseRuleMaps = {}
const parseRuleKeys = ['\\[([^\\]]+)\\]']
for (var i = 0; i < customParseStrs.length; i++) {
  const itemRule = customParseStrs[i]
  parseRuleMaps[itemRule[0]] = `${itemRule[1]}?`
  parseRuleKeys.push(itemRule[0])
}
const customParseRes = new RegExp(parseRuleKeys.join('|'), 'g')
const cacheFormatMaps = {}
/**
 * 解析自定义格式
 */
function parseCustomRules(str, format) {
  let cacheItem = cacheFormatMaps[format]
  if (!cacheItem) {
    const posIndexs: any[] = []
    const re = format.replace(/([$(){}*+.?\\^|])/g, '\\$1').replace(customParseRes, (text, val) => {
      const firstChar = text.charAt(0)
      // 如果为转义符号:[关键字]
      if (firstChar === '[')
        return val

      posIndexs.push(firstChar)
      return parseRuleMaps[text]
    })
    cacheItem = cacheFormatMaps[format] = {
      _i: posIndexs,
      _r: new RegExp(re),
    }
  }
  const resMaps = {}
  const matchRest = str.match(cacheItem._r)
  if (matchRest) {
    const _i = cacheItem._i
    for (let i = 1, len = matchRest.length; i < len; i++)
      resMaps[_i[i - 1]] = matchRest[i]

    return resMaps
  }
  return resMaps
}
/**
 * 解析时区
 */
function parseTimeZone(resMaps) {
  // 如果为UTC 时间
  if (/^[zZ]/.test(resMaps.Z)) {
    return new Date(helperGetUTCDateTime(resMaps))
  }
  else {
    // 如果指定时区，时区转换
    const matchRest = resMaps.Z.match(/([-+])(\d{2}):?(\d{2})/)
    if (matchRest)
      return new Date(helperGetUTCDateTime(resMaps) - (matchRest[1] === '-' ? -1 : 1) * staticParseInt(matchRest[2]) * 3600000 + staticParseInt(matchRest[3]) * 60000)
  }
  return new Date('')
}
/**
 * 字符串转为日期
 *
 * @param {String/Number/Date} str 日期或数字
 * @param {string} format 解析日期格式(yyyy年份、MM月份、dd天、hh(12)HH(24)小时、mm分钟、ss秒、SSS毫秒、Z时区)
 * @return {Date}
 */
function toStringDate(str, format?) {
  if (str) {
    const isDType = isDate(str)
    if (isDType || (!format && /^[0-9]{11,15}$/.test(str)))
      return new Date(isDType ? helperGetDateTime(str) : staticParseInt(str))

    if (isString(str)) {
      const resMaps = format ? parseCustomRules(str, format) : parseDefaultRules(str)
      if (resMaps.y) {
        if (resMaps.M)
          resMaps.M = toParseNum(resMaps.M) - 1

        if (resMaps.S) {
          // 如果7位则是微秒，只精确到3位毫秒
          resMaps.S = toParseMs(toParseNum(resMaps.S.substring(0, 3)))
        }
        if (resMaps.Z)
          return parseTimeZone(resMaps)

        else
          return new Date(resMaps.y, resMaps.M || 0, resMaps.d || 1, resMaps.H || 0, resMaps.m || 0, resMaps.s || 0, resMaps.S || 0)
      }
    }
  }
  return new Date('')
}
export default toStringDate
