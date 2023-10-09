/**
 * @file
 */

import { ColorName, getColor, colors } from 'consola/utils';
import chalk from 'chalk';
import consola from 'consola';
import { NitroApp } from 'nitropack';
import { defineNitroPlugin } from 'nitropack/dist/runtime/plugin';
import { User } from './server/entities/user.entity';

export default defineNitroPlugin((nitroApp: NitroApp) => {
    console.log(Object.getOwnPropertyNames(User.prototype));
    consola.info('test', chalk.blue('test'), chalk.green('test'));
    consola.info(colors.gray('copied to clipboard]'), 'test');
    consola.info([colors.gray('copied to clipboard]')]);
    consola.info([colors.gray('copied to clipboard]'), 'test']);
});
