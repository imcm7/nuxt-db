/**
 * @file
 */

import { defineEventHandler, fromNodeMiddleware } from 'h3'
import { useDatasource } from '~/server/composables/use-datasource.composable'

export default defineEventHandler(async (event) => {
  let { em, orm } = await useDatasource({ fork: true })
  event.context.orm = orm
  event.context.em = em
  console.log('[db] id: ', event.context.em.id)
})
