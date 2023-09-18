/**
 * @file
 */

import { EntityManager, MikroORM } from '@mikro-orm/core'

import options from '~/server/data-source' 

let connection: {
  em: EntityManager,
  orm: MikroORM
} 

export const useDatasource = async (fork: boolean = false, reload?: boolean) => {
  if (!connection || reload) {
    const orm = await MikroORM.init(options)
    connection = {
      em: null,
      orm
    }
    console.log('[db connect]')
  }

  if (fork) {
    connection.em = connection.orm.em.fork()
  }
  else if (!connection.em) {
    connection.em = connection.orm.em
  }

  return connection
}
