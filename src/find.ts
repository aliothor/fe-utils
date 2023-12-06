import helperCreateIterateHandle from './helperCreateIterateHandle'

/**
 * 从左至右遍历，匹配最近的一条数据
 *
 * @param {object} obj 对象/数组
 * @param {Function} iterate(item, index, obj) 回调
 * @param {object} context 上下文
 * @return {object}
 */
const find = helperCreateIterateHandle('find', 1, 3, true)
export default find
