import helperCreateIterateHandle from './helperCreateIterateHandle'

/**
 * 查找匹配第一条数据的键
 *
 * @param {object} obj 对象/数组
 * @param {Function} iterate(item, index, obj) 回调
 * @param {object} context 上下文
 * @return {object}
 */
const findKey = helperCreateIterateHandle('', 0, 2, true)
export default findKey
