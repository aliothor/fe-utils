import staticEscapeMap from './staticEscapeMap'
import helperFormatEscaper from './helperFormatEscaper'
import each from './each'

const unescapeMap = {}
each(staticEscapeMap, (item, key) => {
  unescapeMap[staticEscapeMap[key]] = key
})
/**
 * 反转escape
 *
 * @param {string} str 字符串
 * @return {string}
 */
const unescape = helperFormatEscaper(unescapeMap)
export default unescape
