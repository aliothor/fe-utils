import staticParseInt from './staticParseInt'

function helperStringRepeat(str, count) {
  if (str.repeat)
    return str.repeat(count)

  const list = isNaN(count) ? [] : new Array(staticParseInt(count))
  return list.join(str) + (list.length > 0 ? str : '')
}
export default helperStringRepeat
