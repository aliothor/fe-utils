import helperCreateToNumber from './helperCreateToNumber'

/**
 * 转数值
 * @param { String/Number } str 数值
 *
 * @return {number}
 */
const toNumber = helperCreateToNumber(Number.parseFloat)
export default toNumber
