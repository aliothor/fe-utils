import helperCreateGetDateWeek from './helperCreateGetDateWeek'

/**
 * 返回某个月的第几周
 *
 * @param {Date} date 日期或数字
 * @param {number} firstDay 周视图的起始天，默认星期一
 * @return {number}
 */
const getMonthWeek = helperCreateGetDateWeek((targetDate) => {
  return new Date(targetDate.getFullYear(), targetDate.getMonth(), 1)
})
export default getMonthWeek
