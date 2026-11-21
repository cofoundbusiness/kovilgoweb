'use client';

import { useEffect } from 'react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorBoundary({ error, reset }: ErrorProps) {
  useEffect(() => {
    // In production, this dispatches to the monitoring client
    console.error('Unhandled route error caught by error boundary:', error);
  }, [error]);

  return (
    <div
      role="alert"
      className="flex min-h-[70vh] w-full flex-col items-center justify-center p-6 text-center"
    >
      <div className="mx-auto max-w-md rounded-xl border border-destructive/20 bg-card p-8 shadow-sm">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10 text-destructive">
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
        <h2 className="text-xl font-bold tracking-tight text-foreground">Something went wrong</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          An unexpected issue interrupted your journey. Our team has been notified.
        </p>
        <button
          onClick={reset}
          type="button"
          className="mt-6 inline-flex items-center justify-center rounded-md bg-brand-yellow px-5 py-2.5 text-sm font-semibold text-brand-black transition hover:bg-brand-yellow-hover focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:ring-offset-2"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
