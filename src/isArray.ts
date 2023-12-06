import helperCreateInInObjectString from './helperCreateInInObjectString'

/**
 * 判断是否数组
 *
 * @param {object} obj 对象
 * @return {boolean}
 */
const isArray = Array.isArray || helperCreateInInObjectString('Array')
export default isArray
