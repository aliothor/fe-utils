import isArray from './isArray'
import isString from './isString'
import hasOwnProp from './hasOwnProp'

function helperCreateIndexOf(name, callback) {
  return function (obj, val) {
    if (obj) {
      if (obj[name])
        return obj[name](val)

      if (isString(obj) || isArray(obj))
        return callback(obj, val)

      for (const key in obj) {
        if (hasOwnProp(obj, key)) {
          if (val === obj[key])
            return key
        }
      }
    }
    return -1
  }
}
export default helperCreateIndexOf
