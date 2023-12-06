import helperCreatePickOmit from './helperCreatePickOmit'

/**
 * 根据 key 排除指定的属性值，返回一个新的对象
 *
 * @param {object} obj 对象
 * @param {String/Array} key 键数组
 * @return {object}
 */
const omit = helperCreatePickOmit(0, 1)
export default omit
