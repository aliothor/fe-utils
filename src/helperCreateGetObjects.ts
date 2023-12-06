import each from './each'

function helperCreateGetObjects(name, getIndex) {
  const proMethod = Object[name]
  return function (obj) {
    const result: any[] = []
    if (obj) {
      if (proMethod)
        return proMethod(obj)

      each(obj, getIndex > 1
        ? (key) => {
            result.push([`${key}`, obj[key]])
          }
        : function () {
          result.push(arguments[getIndex])
        })
    }
    return result
  }
}
export default helperCreateGetObjects
