/**
 * @file
 */

import {
  BaseEntity,
  BeforeCreate,
  BeforeUpdate,
  BigIntType,
  Cascade,
  Collection,
  DateType,
  Entity,
  EntityRepositoryType,
  ManyToMany,
  OneToMany,
  PrimaryKey,
  Property
} from '@mikro-orm/core'

@Entity({ collection: 'user', customRepository: () => UserRepository, tableName: 'user' })
export class User extends BaseEntity<User, 'id'> {
  [EntityRepositoryType]?: UserRepository

  @Property({ lazy: true, length: 320, nullable: false, unique: true, type: 'string' })
  email: string

  @PrimaryKey({ type: BigIntType })
  id: number

  // constructor(email: string) {
  //   super();
  //   this.email = email;
  // }
}
