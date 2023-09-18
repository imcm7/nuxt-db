/**
 * @file
 */

import morgan from 'morgan'
import { fromNodeMiddleware } from 'h3'

console.log('[morgan]')

export default fromNodeMiddleware(morgan('tiny'))
