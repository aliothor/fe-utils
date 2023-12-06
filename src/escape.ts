import staticEscapeMap from './staticEscapeMap'
import helperFormatEscaper from './helperFormatEscaper'

/**
 * 转义HTML字符串，替换&, <, >, ", ', `字符
 *
 * @param {string} str 字符串
 * @return {string}
 */
const escape = helperFormatEscaper(staticEscapeMap)
export default escape
