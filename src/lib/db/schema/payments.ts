import 'server-only';
import { pgTable, uuid, varchar, integer, timestamp, jsonb } from 'drizzle-orm/pg-core';
import { bookings } from './bookings';

/**
 * Payments Schema Stub — To be expanded during Payments (Cashfree) phase.
 * Tracks Cashfree order IDs, payment sessions, and webhook settlement state.
 */
export const payments = pgTable('payments', {
  id: uuid('id').primaryKey().defaultRandom(),
  bookingId: uuid('booking_id').references(() => bookings.id).notNull(),
  cashfreeOrderId: varchar('cashfree_order_id', { length: 128 }).notNull().unique(),
  cashfreePaymentId: varchar('cashfree_payment_id', { length: 128 }),
  amountInr: integer('amount_inr').notNull(),
  currency: varchar('currency', { length: 10 }).notNull().default('INR'),
  status: varchar('status', { length: 50 }).notNull().default('PENDING'), // 'PENDING' | 'SUCCESS' | 'FAILED' | 'USER_DROPPED'
  paymentMethod: varchar('payment_method', { length: 50 }),
  metadata: jsonb('metadata'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
});

export type Payment = typeof payments.$inferSelect;
export type NewPayment = typeof payments.$inferInsert;
