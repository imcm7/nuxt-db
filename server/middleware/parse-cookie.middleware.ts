/**
 * @file
 */

import cookieParser from 'cookie-parser'
import { fromNodeMiddleware } from 'h3'

console.log('[cookie parser]')

export default fromNodeMiddleware(cookieParser())
