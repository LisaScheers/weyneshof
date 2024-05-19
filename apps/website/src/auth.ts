import NextAuth from 'next-auth';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import Sendgrid from 'next-auth/providers/sendgrid';
import Google from 'next-auth/providers/google';
import { db, schema } from './server/db';

import { env } from './env';

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db, {
    accountsTable: schema.accounts,
    usersTable: schema.users,
    sessionsTable: schema.sessions,
    verificationTokensTable: schema.verificationTokens,
  }),

  callbacks: {
    session: async (params) => {
      return {
        ...params.session,
        user: {
          ...params.session.user,
          id: params.session.user.id,
        },
      };
    },
  },

  secret: env.AUTH_SECRET,
  debug: env.NODE_ENV === 'development',

  providers: [
    Sendgrid({
      from: env.EMAIL_FROM,
      apiKey: env.SENDGRID_API_KEY,
      name: 'sendgrid',
    }),
    Google({
      allowDangerousEmailAccountLinking: true,
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
  ],
});

export { useSession } from 'next-auth/react';
