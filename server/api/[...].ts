/**
 * @file
 */

import CredentialsProvider from '@auth/core/providers/credentials';
import GithubProvider from '@auth/core/providers/github';
import { H3Event }  from 'h3';

import type { AuthConfig } from '@auth/core/types';

import { NuxtAuthHandler } from '#auth';
import { useEvent } from 'nitropack/dist/runtime/context';

import { AuthController } from '~/server/controllers/auth.controller';

// The #auth virtual import comes from this module. You can use it on the client
// and server side, however not every export is universal. For example do not
// use sign-in and sign-out on the server side.

const runtimeConfig = useRuntimeConfig();

// Refer to Auth.js docs for more details
export const authOptions: AuthConfig = {
  // pages: {
  //   signIn: '/auth/signin',
  //   signOut: '/auth/signout',
  //   error: '/auth/error', // Error code passed in query string as ?error=
  //   verifyRequest: '/auth/verify-request', // (used for check email message)
  //   newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  // }
  callbacks: {
    async signIn() { // signIn({ user, account, profile, email, credentials })
      return true;
    },
    async redirect({ baseUrl }) { // redirect({ url, baseUrl })
      return baseUrl;
    },
    async session({ session, token }) { //  async session({ session, token, user })
      if (token && session && session.user) {
        session.user.email = token.email;
        session.user.id = token.id;
        session.user.firstName = token.firstName;
        session.user.lastName = token.lastName;
        session.user.roles = token.roles;
        session.user.userProfiles = token.userProfiles;
      }

      return session
    },
    async jwt({ token, user }) { //  jwt({ token, user, account, profile, isNewUser }) 
      if (user) {
        token.email = user.email;
        token.id = user.id;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
        token.roles = user.roles;
        token.userProfiles = user.userProfiles;
      }

      return token;
    },
  },
  secret: runtimeConfig.authJs.secret,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: {
          label: 'Username',
          type: 'text',
          placeholder: 'jsmith',
        },
        password: {
          label: 'Password',
          type: 'password',
        },
      },

      async authorize(credentials) { // authorize(credentials, request)
        const event: H3Event = useEvent();
        let authController: AuthController;
  
        try {
          authController = event.context.di.get(AuthController.name);
        } catch (error: any) {
          throw createError({
            statusCode: 500,
            statusMessage: 'No matching bindings found.',
          });
        }

        return authController?.login(credentials);
      },
    }),
    GithubProvider({
      clientId: runtimeConfig.github.clientId,
      clientSecret: runtimeConfig.github.clientSecret,
    })
  ],
};

export default NuxtAuthHandler(authOptions, runtimeConfig);
