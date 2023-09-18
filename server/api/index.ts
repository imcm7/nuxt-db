import { useDatasource } from '~/server/composables/use-datasource.composable.ts';
import { User } from '~/server/entities/user.entity';

export default eventHandler(async () => {
  const { em } = await useDatasource();
  const user = await em.findOne(User, 1);
  return user;
})