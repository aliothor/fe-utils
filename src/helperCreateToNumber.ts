function helperCreateToNumber(handle) {
  return function (str) {
    if (str) {
      const num = handle(str && str.replace ? str.replace(/,/g, '') : str)
      if (!isNaN(num))
        return num
    }
    return 0
  }
}
export default helperCreateToNumber
