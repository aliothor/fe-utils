import arrayEach from './arrayEach'
import keys from './keys'
import isArray from './isArray'
import clone from './clone'

const objectAssignFns = Object.assign
function handleAssign(destination, args, isClone?) {
  const len = args.length
  for (var source, index = 1; index < len; index++) {
    source = args[index]
    arrayEach(keys(args[index]), isClone
      ? (key) => {
          destination[key] = clone(source[key], isClone)
        }
      : (key) => {
          destination[key] = source[key]
        })
  }
  return destination
}
/**
 * 将一个或多个源对象复制到目标对象中
 *
 * @param {object} target 目标对象
 * @return {boolean}
 */
const assign = function (...target: any) {
  if (target) {
    const args = arguments
    if (target === true) {
      if (args.length > 1) {
        target = isArray(target[1]) ? [] : {}
        return handleAssign(target, args, true)
      }
    }
    else {
      return objectAssignFns ? objectAssignFns.apply(Object, args) : handleAssign(target, args)
    }
  }
  return target
}
export default assign
