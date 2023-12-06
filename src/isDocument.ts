import staticDocument from './staticDocument'

/**
 * 判断是否Document对象
 *
 * @param {object} obj 对象
 * @return {boolean}
 */
function isDocument(obj) {
  return !!(obj && staticDocument && obj.nodeType === 9)
}
export default isDocument
