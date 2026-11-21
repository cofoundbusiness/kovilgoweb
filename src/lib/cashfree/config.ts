import 'server-only';

/**
 * Cashfree Payments Configuration Stub.
 * Will be initialized when CASHFREE_APP_ID & CASHFREE_SECRET_KEY are supplied.
 */
export const cashfreeConfig = {
  appId: process.env.CASHFREE_APP_ID,
  secretKey: process.env.CASHFREE_SECRET_KEY,
  apiVersion: process.env.CASHFREE_API_VERSION || '2023-08-01',
  environment: (process.env.CASHFREE_ENVIRONMENT || 'SANDBOX') as 'SANDBOX' | 'PRODUCTION',
  isConfigured: Boolean(process.env.CASHFREE_APP_ID && process.env.CASHFREE_SECRET_KEY),
};
