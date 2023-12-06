import objectToString from './staticObjectToString'
import objectEach from './objectEach'
import arrayEach from './arrayEach'

function getCativeCtor(val, args?) {
  const Ctor = val.__proto__.constructor
  return args ? new Ctor(args) : new Ctor()
}
function handleValueClone(item, isDeep) {
  return isDeep ? copyValue(item, isDeep) : item
}
function copyValue(val, isDeep) {
  if (val) {
    switch (objectToString.call(val)) {
      case '[object Object]': {
        const restObj = Object.create(val.__proto__)
        objectEach(val, (item, key) => {
          restObj[key] = handleValueClone(item, isDeep)
        })
        return restObj
      }
      case '[object Date]':
      case '[object RegExp]': {
        return getCativeCtor(val, val.valueOf())
      }
      case '[object Array]':
      case '[object Arguments]': {
        const restArr: any[] = []
        arrayEach(val, (item) => {
          restArr.push(handleValueClone(item, isDeep))
        })
        return restArr
      }
      case '[object Set]': {
        const restSet = getCativeCtor(val)
        restSet.forEach((item) => {
          restSet.add(handleValueClone(item, isDeep))
        })
        return restSet
      }
      case '[object Map]': {
        const restMap = getCativeCtor(val)
        restMap.forEach((item, key) => {
          restMap.set(key, handleValueClone(item, isDeep))
        })
        return restMap
      }
    }
  }
  return val
}
/**
 * 浅拷贝/深拷贝
 *
 * @param {object} obj 对象/数组
 * @param {boolean} deep 是否深拷贝
 * @return {object}
 */
function clone(obj, deep?) {
  if (obj)
    return copyValue(obj, deep)

  return obj
}
export default clone
