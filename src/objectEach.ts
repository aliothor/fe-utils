import hasOwnProp from './hasOwnProp'

function objectEach(obj, iterate, context?) {
  if (obj) {
    for (const key in obj) {
      if (hasOwnProp(obj, key))
        iterate.call(context, obj[key], key, obj)
    }
  }
}
export default objectEach
