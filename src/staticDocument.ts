import staticStrUndefined from './staticStrUndefined'

const staticDocument: any = typeof document === staticStrUndefined ? 0 : document

export default staticDocument
