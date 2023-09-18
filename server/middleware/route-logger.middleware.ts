/**
 * @file
 */

import { defineEventHandler, fromNodeMiddleware} from 'h3'

export default defineEventHandler(async (event) => {
  console.log('[route]', event.req.url)
})
