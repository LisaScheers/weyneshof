import { type Config } from "drizzle-kit";

import { env } from "@weyneshof/website/env";

export default {
  schema: "./src/server/db/schema.ts",
  driver: "pg",
  dbCredentials: {
    connectionString: env.POSTGRES_URL,
  },
  tablesFilter: ["demo-app_*"],
} satisfies Config;
