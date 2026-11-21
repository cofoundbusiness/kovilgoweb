import 'server-only';

/**
 * Service Layer Base Contracts.
 * Business logic orchestrating repositories, pricing, notifications, and transactions.
 */
export interface BaseServiceResult<T> {
  success: boolean;
  data?: T;
  error?: string;
}
