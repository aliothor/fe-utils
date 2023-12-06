import setupDefaults from './setupDefaults'
import staticWeekTime from './staticWeekTime'
import isNumber from './isNumber'
import isValidDate from './isValidDate'
import getWhatWeek from './getWhatWeek'
import helperGetDateTime from './helperGetDateTime'

function helperCreateGetDateWeek(getStartDate) {
  return function (date, firstDay) {
    const viewStartDay = isNumber(firstDay) ? firstDay : setupDefaults.firstDayOfWeek
    const targetDate = getWhatWeek(date, 0, viewStartDay, viewStartDay)
    if (isValidDate(targetDate)) {
      const targetOffsetDate = new Date(targetDate.getFullYear(), targetDate.getMonth(), targetDate.getDate())
      const targerStartDate = getStartDate(targetDate)
      const targetFirstDay = targerStartDate.getDay()
      if (targetFirstDay > viewStartDay)
        targerStartDate.setDate(7 - targetFirstDay + viewStartDay + 1)

      if (targetFirstDay < viewStartDay)
        targerStartDate.setDate(viewStartDay - targetFirstDay + 1)

      return Math.floor((helperGetDateTime(targetOffsetDate) - helperGetDateTime(targerStartDate)) / staticWeekTime + 1)
    }
    return Number.NaN
  }
}
export default helperCreateGetDateWeek
