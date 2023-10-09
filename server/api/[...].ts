import { createError, defineEventHandler } from 'h3'
import { User } from './server/entities/user.entity';

export default defineEventHandler(() => {
  console.log(Object.getOwnPropertyNames(User.prototype));
  return createError({
    statusCode: 404,
    statusMessage: 'Not found.'
  })
})
