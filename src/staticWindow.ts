import staticStrUndefined from './staticStrUndefined'

/* eslint-disable valid-typeof */
const staticWindow: any = typeof window === staticStrUndefined ? 0 : window
export default staticWindow
