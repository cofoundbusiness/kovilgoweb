import 'server-only';
import { pgTable, uuid, varchar, integer, timestamp, date } from 'drizzle-orm/pg-core';
import { users } from './users';
import { packages } from './packages';

/**
 * Bookings Schema Stub — To be expanded during Bookings phase.
 * Represents customer package bookings and reservation lifecycle.
 */
export const bookings = pgTable('bookings', {
  id: uuid('id').primaryKey().defaultRandom(),
  bookingReference: varchar('booking_reference', { length: 32 }).notNull().unique(),
  userId: uuid('user_id').references(() => users.id).notNull(),
  packageId: uuid('package_id').references(() => packages.id).notNull(),
  startDate: date('start_date').notNull(),
  endDate: date('end_date').notNull(),
  guestCount: integer('guest_count').notNull().default(1),
  status: varchar('status', { length: 50 }).notNull().default('pending'), // 'pending' | 'confirmed' | 'cancelled' | 'completed'
  totalAmountInr: integer('total_amount_inr').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
});

export type Booking = typeof bookings.$inferSelect;
export type NewBooking = typeof bookings.$inferInsert;
