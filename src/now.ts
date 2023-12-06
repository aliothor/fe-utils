import helperGetDateTime from './helperGetDateTime'
import helperNewDate from './helperNewDate'

/**
 * 返回当前时间戳
 *
 * @returns Number
 */
const now = Date.now || function () {
  return helperGetDateTime(helperNewDate())
}
export default now
