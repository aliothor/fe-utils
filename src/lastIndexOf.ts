import helperCreateIndexOf from './helperCreateIndexOf'
import arrayLastIndexOf from './arrayLastIndexOf'

/**
 * 从最后开始的索引值,返回对象第一个索引值
 *
 * @param {object} array 对象
 * @param {object} val 值
 * @return {number}
 */
const lastIndexOf = helperCreateIndexOf('lastIndexOf', arrayLastIndexOf)
export default lastIndexOf
