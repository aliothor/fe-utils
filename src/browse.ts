import staticStrUndefined from './staticStrUndefined'
import staticDocument from './staticDocument'
import staticWindow from './staticWindow'
import assign from './assign'
import arrayEach from './arrayEach'

function isBrowseStorage(storage) {
  try {
    const testKey = '__xe_t'
    storage.setItem(testKey, 1)
    storage.removeItem(testKey)
    return true
  }
  catch (e) {
    return false
  }
}

function isBrowseType(type) {
  return navigator.userAgent.includes(type)
}

/**
 * 获取浏览器内核
 * @return Object
 */
function browse() {
  let $body, isChrome, isEdge
  let isMobile = false
  let isLocalStorage = false
  let isSessionStorage = false
  const result = {
    isNode: false,
    isMobile,
    isPC: false,
    isDoc: !!staticDocument,
  }
  if (!staticWindow && typeof process !== staticStrUndefined) {
    result.isNode = true
  }
  else {
    isEdge = isBrowseType('Edge')
    isChrome = isBrowseType('Chrome')
    isMobile = /(Android|webOS|iPhone|iPad|iPod|SymbianOS|BlackBerry|Windows Phone)/.test(navigator.userAgent)
    if (result.isDoc) {
      $body = staticDocument.body || staticDocument.documentElement
      arrayEach(['webkit', 'khtml', 'moz', 'ms', 'o'], (core) => {
        result[`-${core}`] = !!$body[`${core}MatchesSelector`]
      })
    }
    try {
      isLocalStorage = isBrowseStorage(staticWindow.localStorage)
    }
    catch (e) { }
    try {
      isSessionStorage = isBrowseStorage(staticWindow.sessionStorage)
    }
    catch (e) { }
    assign(result, {
      edge: isEdge,
      firefox: isBrowseType('Firefox'),
      msie: !isEdge && result['-ms'],
      safari: !isChrome && !isEdge && isBrowseType('Safari'),
      isMobile,
      isPC: !isMobile,
      isLocalStorage,
      isSessionStorage,
    })
  }
  return result
}
export default browse
