import 'server-only';
import { pgTable, uuid, varchar, text, integer, boolean, timestamp } from 'drizzle-orm/pg-core';
import { destinations } from './destinations';

/**
 * Packages Schema Stub — To be expanded during Packages & Journeys phase.
 * Represents curated travel packages and multi-day spiritual/cultural itineraries.
 */
export const packages = pgTable('packages', {
  id: uuid('id').primaryKey().defaultRandom(),
  destinationId: uuid('destination_id').references(() => destinations.id),
  slug: varchar('slug', { length: 255 }).notNull().unique(),
  title: varchar('title', { length: 255 }).notNull(),
  subtitle: text('subtitle'),
  durationDays: integer('duration_days').notNull(),
  durationNights: integer('duration_nights').notNull(),
  basePriceInr: integer('base_price_inr').notNull(), // stored in paise or whole INR
  isPublished: boolean('is_published').notNull().default(false),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
});

export type Package = typeof packages.$inferSelect;
export type NewPackage = typeof packages.$inferInsert;
