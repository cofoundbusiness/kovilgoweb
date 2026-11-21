# KovilGo Database Architecture & Guidelines

## 1. Overview

KovilGo uses **Supabase PostgreSQL** as its primary relational database, interfaced strictly through **Drizzle ORM**.

---

## 2. Connection Strategy for Serverless Next.js

Serverless execution environments (such as Vercel) spin up and tear down instances rapidly. Connecting directly to PostgreSQL (port 5432) can rapidly exhaust database connection limits.

### 2.1 Pooled Connections (Runtime)
- **Port:** `6543` (PgBouncer in Transaction mode)
- **Variable:** `DATABASE_URL`
- **Config:** `prepare: false` enabled in `src/lib/db/index.ts` to support transaction pooling without prepared statement collisions.

### 2.2 Direct Connections (Migrations)
- **Port:** `5432` (Direct PostgreSQL connection)
- **Variable:** `DIRECT_URL`
- **Usage:** Used exclusively by Drizzle Kit CLI during schema migrations (`npm run db:migrate`).

---

## 3. Schema Architecture (Phase 0 Stubs)

The schema definitions reside in `src/lib/db/schema/`:

| Table Name | Schema File | Primary Responsibility |
|---|---|---|
| `users` | `schema/users.ts` | Traveler and staff profiles tied to Supabase Auth UID |
| `destinations` | `schema/destinations.ts` | Spiritual, heritage, and offbeat travel destinations |
| `packages` | `schema/packages.ts` | Standardized and curated travel package listings |
| `bookings` | `schema/bookings.ts` | Booking reservations, reference numbers, dates, statuses |
| `payments` | `schema/payments.ts` | Cashfree transaction records, order IDs, settlements |
| `enquiries` | `schema/enquiries.ts` | Bespoke journey quotation requests and concierge leads |
| `audit_log` | `schema/audit_log.ts` | Immutable compliance and security audit trails |

---

## 4. Drizzle Kit Workflow

### Generating Migrations
```bash
npm run db:generate
```
Reads TypeScript schemas in `src/lib/db/schema/index.ts` and creates versioned SQL files in `drizzle/migrations/`.

### Applying Migrations
```bash
npm run db:migrate
```
Executes pending migrations against the target database via `DIRECT_URL`.

### Database Studio (GUI)
```bash
npm run db:studio
```
Spins up local Drizzle Studio to inspect schema relations and test rows.

---

## 5. Row Level Security (RLS) Principles

When database tables are provisioned in Phase 2:
1. Every table will enable RLS (`ALTER TABLE table_name ENABLE ROW LEVEL SECURITY;`).
2. Customers may only SELECT and UPDATE rows where `user_id = auth.uid()`.
3. Concierge and Admin roles access data conditionally based on their verified JWT claims.
4. The service-role key is reserved strictly for privileged server operations (webhooks, automated cron reconciliations).
