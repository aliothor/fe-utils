import keys from './keys'
import slice from './slice'
import includes from './includes'
import arrayEach from './arrayEach'
import assign from './assign'

/**
 * 将一个或者多个对象值解构到目标对象
 *
 * @param {object} destination 目标对象
 * @param {...object}
 * @return {boolean}
 */
function destructuring(destination, sources) {
  if (destination && sources) {
    const rest = assign.apply(this, [{}].concat(slice(arguments, 1)))
    const restKeys = keys(rest)
    arrayEach(keys(destination), (key) => {
      if (includes(restKeys, key))
        destination[key] = rest[key]
    })
  }
  return destination
}
export default destructuring
