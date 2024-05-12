import NextAuth from "next-auth"
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import Sendgrid from "next-auth/providers/sendgrid"
import {db} from './server/db'

import {env} from './env'

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db),
  secret: env.AUTH_SECRET,

  providers: [Sendgrid({
    from: env.EMAIL_FROM,
    apiKey: env.SENDGRID_API_KEY,
    name: 'sendgrid',
  })],
})
