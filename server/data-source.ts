/**
 * @file
 */

import 'reflect-metadata'
import { LoadStrategy } from '@mikro-orm/core'

import * as entities from '~/server/entities'

const options = {
  allowGlobalContext: false,
  dbName: 'nuxt',
  debug: true, // ['discovery', 'info', 'query', 'query-params'],
  discovery: {
    disableDynamicFileAccess: true,
    warnWhenNoEntities: true
  },
  entities: Object.values(entities),
  entitiesTS: Object.values(entities),
  loadStrategy: LoadStrategy.JOINED,
  password: 'changeme',
  populateAfterFlush: true,
  port: 3306,
  registerRequestContext: false,
  type: 'mariadb',
  user: 'root'
}

console.log('[datasource]')

export default options
