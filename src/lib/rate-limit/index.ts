import 'server-only';
import { RateLimitError } from '@/server/security/errors';

export interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  reset: number;
}

/**
 * Baseline in-memory/fallback rate limiter.
 * Will connect to Upstash Redis sliding window in production.
 */
export async function checkRateLimit(
  _identifier: string,
  _limit = 60,
  _windowSeconds = 60
): Promise<RateLimitResult> {
  const isRedisConfigured = Boolean(
    process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
  );

  if (!isRedisConfigured) {
    // Permissive fallback during dev/unconfigured state
    return {
      success: true,
      limit: 60,
      remaining: 59,
      reset: Date.now() + 60000,
    };
  }

  // To be integrated with @upstash/ratelimit
  return {
    success: true,
    limit: 60,
    remaining: 59,
    reset: Date.now() + 60000,
  };
}

export async function assertRateLimit(identifier: string, limit = 60, windowSeconds = 60): Promise<void> {
  const result = await checkRateLimit(identifier, limit, windowSeconds);
  if (!result.success) {
    throw new RateLimitError();
  }
}
