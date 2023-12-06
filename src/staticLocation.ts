import staticStrUndefined from './staticStrUndefined'

/* eslint-disable valid-typeof */
const staticLocation = typeof location === staticStrUndefined ? 0 : location
export default staticLocation
