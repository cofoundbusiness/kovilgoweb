import 'server-only';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

/**
 * Global cache to prevent connection exhaustion during Next.js hot-reloads in development.
 */
declare global {
  var __kovilgo_db_client__: postgres.Sql | undefined;
}

const connectionString = process.env.DATABASE_URL;

function createDbClient() {
  if (!connectionString) {
    // Return a dummy proxy that will fail clearly if invoked without credentials
    return new Proxy({} as ReturnType<typeof drizzle<typeof schema>>, {
      get(_target, prop) {
        throw new Error(
          `Database access attempted (${String(prop)}) but DATABASE_URL is not configured. ` +
          `Set DATABASE_URL in your .env.local file to connect to Supabase PostgreSQL.`
        );
      },
    });
  }

  const client =
    global.__kovilgo_db_client__ ??
    postgres(connectionString, {
      max: process.env.NODE_ENV === 'production' ? 10 : 2,
      idle_timeout: 20,
      connect_timeout: 10,
      prepare: false, // Required for Supabase PgBouncer transaction mode
    });

  if (process.env.NODE_ENV !== 'production') {
    global.__kovilgo_db_client__ = client;
  }

  return drizzle(client, { schema });
}

export const db = createDbClient();
export type Database = typeof db;
