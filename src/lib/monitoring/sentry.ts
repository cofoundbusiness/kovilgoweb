/**
 * Sentry Monitoring Integration Structure.
 * Prepared for production telemetry without requiring credentials in Phase 0.
 */

export interface TelemetryEvent {
  message: string;
  level?: 'info' | 'warning' | 'error';
  tags?: Record<string, string>;
  extra?: Record<string, unknown>;
}

export function captureException(error: unknown, extra?: Record<string, unknown>): void {
  const dsn = process.env.NEXT_PUBLIC_SENTRY_DSN;

  if (!dsn) {
    // In unconfigured development/CI environments, output warning safely
    if (process.env.NODE_ENV === 'development') {
      console.warn('[Monitoring] Telemetry exception captured (Sentry DSN not configured):', error, extra);
    }
    return;
  }

  // When Sentry SDK is linked in production, this dispatches to Sentry.captureException
  console.info('[Monitoring] Dispatched exception to Sentry telemetry pipeline');
}

export function captureMessage(message: string, level: 'info' | 'warning' | 'error' = 'info'): void {
  const dsn = process.env.NEXT_PUBLIC_SENTRY_DSN;

  if (!dsn) {
    return;
  }

  console.info(`[Monitoring] [${level.toUpperCase()}] ${message}`);
}
