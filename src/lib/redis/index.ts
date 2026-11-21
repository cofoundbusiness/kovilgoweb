import 'server-only';

/**
 * Upstash Redis Configuration Stub for distributed caching and sliding-window rate limiting.
 */
export const redisConfig = {
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
  isConfigured: Boolean(process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN),
};
