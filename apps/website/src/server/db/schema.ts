// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import {
  index,
  integer,
  jsonb,
  pgTableCreator,
  primaryKey,
  text,
  timestamp,
} from 'drizzle-orm/pg-core';
import type { AdapterAccountType } from 'next-auth/adapters';

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `web_${name}`);

export const users = createTable('user', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text('name'),
  email: text('email').notNull(),
  emailVerified: timestamp('emailVerified', { mode: 'date' }),
  image: text('image'),
});

export const accounts = createTable(
  'account',
  {
    userId: text('userId')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    type: text('type').$type<AdapterAccountType>().notNull(),
    provider: text('provider').notNull(),
    providerAccountId: text('providerAccountId').notNull(),
    refresh_token: text('refresh_token'),
    access_token: text('access_token'),
    expires_at: integer('expires_at'),
    token_type: text('token_type'),
    scope: text('scope'),
    id_token: text('id_token'),
    session_state: text('session_state'),
  },
  (account) => ({
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
  }),
);

export const sessions = createTable('session', {
  sessionToken: text('sessionToken').primaryKey(),
  userId: text('userId')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  expires: timestamp('expires', { mode: 'date' }).notNull(),
});

export const verificationTokens = createTable(
  'verificationToken',
  {
    identifier: text('identifier').notNull(),
    token: text('token').notNull(),
    expires: timestamp('expires', { mode: 'date' }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey({ columns: [vt.identifier, vt.token] }),
  }),
);

// -- verhuur --
export const buildings = createTable(
  'building',
  {
    id: text('id').primaryKey(),
    name: text('name').unique().notNull(),
  },
  (building) => {
    return {
      nameIndex: index('building_name_index').on(building.name),
    };
  },
);

export const rentals = createTable(
  'rental',
  {
    id: text('id').primaryKey(),
    buildings: jsonb('buildings').notNull().$type<string[]>(),
    userId: text('userId')
      .notNull()
      .references(() => users.id, { onDelete: 'set default' })
      .default('default'),
    startDate: timestamp('startDate', { mode: 'date' }).notNull(),
    endDate: timestamp('endDate', { mode: 'date' }).notNull(),
    status: text('status').notNull(),
  },
  (rental) => {
    return {};
  },
);

export const rentalPayments = createTable(
  'rentalPayment',
  {
    id: text('id').primaryKey(),
    rentalId: text('rentalId')
      .notNull()
      .references(() => rentals.id, { onDelete: 'cascade' }),
    amount: integer('amount').notNull(),
    paidAt: timestamp('paidAt', { mode: 'date' }).notNull(),
  },
  (rentalPayment) => {
    return {};
  },
);
