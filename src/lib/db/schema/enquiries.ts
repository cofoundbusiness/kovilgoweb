import 'server-only';
import { pgTable, uuid, varchar, text, timestamp } from 'drizzle-orm/pg-core';
import { users } from './users';

/**
 * Enquiries Schema Stub — To be expanded during Custom Quotations & Enquiries phase.
 * Tracks bespoke journey requests and concierge customer inquiries.
 */
export const enquiries = pgTable('enquiries', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id),
  fullName: varchar('full_name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  phone: varchar('phone', { length: 20 }).notNull(),
  destinationPreference: varchar('destination_preference', { length: 255 }),
  travelNotes: text('travel_notes'),
  status: varchar('status', { length: 50 }).notNull().default('NEW'), // 'NEW' | 'CONTACTED' | 'QUOTED' | 'RESOLVED'
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
});

export type Enquiry = typeof enquiries.$inferSelect;
export type NewEnquiry = typeof enquiries.$inferInsert;
