import 'server-only';

const SENSITIVE_KEYS = new Set([
  'password',
  'token',
  'otp',
  'secret',
  'authorization',
  'apikey',
  'api_key',
  'service_role',
  'cvv',
  'cardnumber',
  'card_number',
  'client_secret',
]);

/**
 * Recursively redacts sensitive keys from objects before logging.
 */
export function sanitizeLogData<T>(data: T): T {
  if (data === null || data === undefined) {
    return data;
  }

  if (typeof data !== 'object') {
    return data;
  }

  if (Array.isArray(data)) {
    return data.map((item) => sanitizeLogData(item)) as unknown as T;
  }

  const sanitized: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(data as Record<string, unknown>)) {
    const lowerKey = key.toLowerCase();
    if (SENSITIVE_KEYS.has(lowerKey)) {
      sanitized[key] = '[REDACTED]';
    } else if (typeof value === 'object' && value !== null) {
      sanitized[key] = sanitizeLogData(value);
    } else {
      sanitized[key] = value;
    }
  }

  return sanitized as T;
}

export const logger = {
  info(message: string, context?: Record<string, unknown>) {
    const meta = context ? ` | ${JSON.stringify(sanitizeLogData(context))}` : '';
    console.log(`[INFO] [${new Date().toISOString()}] ${message}${meta}`);
  },
  warn(message: string, context?: Record<string, unknown>) {
    const meta = context ? ` | ${JSON.stringify(sanitizeLogData(context))}` : '';
    console.warn(`[WARN] [${new Date().toISOString()}] ${message}${meta}`);
  },
  error(message: string, error?: unknown, context?: Record<string, unknown>) {
    const errorDetails = error instanceof Error ? { message: error.message, stack: error.stack } : error;
    const meta = context ? sanitizeLogData(context) : {};
    console.error(
      `[ERROR] [${new Date().toISOString()}] ${message}`,
      JSON.stringify(sanitizeLogData({ error: errorDetails, ...meta }))
    );
  },
};
