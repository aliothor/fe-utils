import staticParseInt from './staticParseInt'
import helperCreateToNumber from './helperCreateToNumber'

/**
 * 转整数
 * @param { String/Number } str 数值
 *
 * @return {number}
 */
const toInteger = helperCreateToNumber(staticParseInt)
export default toInteger
