import staticStrUndefined from './staticStrUndefined'
import helperCreateInTypeof from './helperCreateInTypeof'

/**
 * 判断是否Undefined
 *
 * @param {object} obj 对象
 * @return {boolean}
 */
const isUndefined = helperCreateInTypeof(staticStrUndefined)
export default isUndefined
