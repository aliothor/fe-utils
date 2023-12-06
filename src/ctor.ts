import setupDefaults from './setupDefaults'
import arrayEach from './arrayEach'
import each from './each'
import isFunction from './isFunction'
import assign from './assign'

const XEUtils = function () { }
function mixin() {
  arrayEach(arguments, (methods) => {
    each(methods, (fn, name) => {
      XEUtils[name] = isFunction(fn)
        ? function () {
          const result = fn.apply(XEUtils.$context, arguments)
          XEUtils.$context = null
          return result
        }
        : fn
    })
  })
}
function setup(options) {
  return assign(setupDefaults, options)
}
XEUtils.VERSION = '@VERSION'
XEUtils.mixin = mixin
XEUtils.setup = setup
export default XEUtils
