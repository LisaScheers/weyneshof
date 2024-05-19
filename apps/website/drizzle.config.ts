import { type Config } from 'drizzle-kit';

import { env } from './src/env';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'postgresql',
  tablesFilter: ['web_*'],
  dbCredentials: {
    url: env.POSTGRES_URL,
  },
  schema: './src/server/db/schema.ts',
});
