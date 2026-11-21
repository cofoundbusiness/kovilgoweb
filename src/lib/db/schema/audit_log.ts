import 'server-only';
import { pgTable, uuid, varchar, timestamp, jsonb } from 'drizzle-orm/pg-core';
import { users } from './users';

/**
 * Audit Log Schema Stub — Critical for enterprise compliance and security tracing.
 * Captures administrative actions, booking changes, and security-relevant mutations.
 */
export const auditLog = pgTable('audit_log', {
  id: uuid('id').primaryKey().defaultRandom(),
  actorId: uuid('actor_id').references(() => users.id),
  action: varchar('action', { length: 100 }).notNull(), // e.g., 'BOOKING_CANCELLED', 'PAYMENT_SETTLED', 'USER_ROLE_CHANGED'
  entityType: varchar('entity_type', { length: 50 }).notNull(), // e.g., 'booking', 'payment', 'user'
  entityId: varchar('entity_id', { length: 64 }).notNull(),
  diff: jsonb('diff'),
  ipAddress: varchar('ip_address', { length: 45 }),
  userAgent: varchar('user_agent', { length: 512 }),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
});

export type AuditLogEntry = typeof auditLog.$inferSelect;
export type NewAuditLogEntry = typeof auditLog.$inferInsert;
