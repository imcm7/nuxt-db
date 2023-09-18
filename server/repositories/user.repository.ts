/**
 * @file
 */

import { EntityRepository } from '@mikro-orm/mariadb'

import { User } from '~/server/entities/user.entity'

export class UserRepository extends EntityRepository<User> {}
