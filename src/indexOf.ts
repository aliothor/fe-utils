import helperCreateIndexOf from './helperCreateIndexOf'
import arrayIndexOf from './arrayIndexOf'

/**
 * 返回对象第一个索引值
 *
 * @param {object} obj 对象
 * @param {object} val 值
 * @return {number}
 */
const indexOf = helperCreateIndexOf('indexOf', arrayIndexOf)
export default indexOf
