import { describe, it, expect } from 'vitest';
import { clientEnvSchema, serverEnvSchema } from '@/config/env';

describe('Zod Environment Schema Validation', () => {
  it('validates client environment variables with defaults', () => {
    const validClientData = {
      NEXT_PUBLIC_APP_URL: 'https://kovilgo.com',
      NEXT_PUBLIC_SUPABASE_URL: 'https://mock.supabase.co',
      NEXT_PUBLIC_SUPABASE_ANON_KEY: 'mock-anon-key',
    };

    const result = clientEnvSchema.safeParse(validClientData);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.NEXT_PUBLIC_APP_URL).toBe('https://kovilgo.com');
    }
  });

  it('rejects invalid URLs in client environment schema', () => {
    const invalidClientData = {
      NEXT_PUBLIC_APP_URL: 'not-a-valid-url',
    };

    const result = clientEnvSchema.safeParse(invalidClientData);
    expect(result.success).toBe(false);
  });

  it('validates server environment defaults', () => {
    const validServerData = {
      NODE_ENV: 'production',
      CASHFREE_ENVIRONMENT: 'SANDBOX',
      EMAIL_FROM: 'KovilGo <concierge@kovilgo.com>',
    };

    const result = serverEnvSchema.safeParse(validServerData);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.NODE_ENV).toBe('production');
      expect(result.data.CASHFREE_ENVIRONMENT).toBe('SANDBOX');
    }
  });
});
