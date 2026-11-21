import 'server-only';
import { NextResponse } from 'next/server';
import { AppError } from './errors';
import { logger } from './logger';

export interface ApiSuccessResponse<T> {
  success: true;
  data: T;
  meta?: Record<string, unknown>;
}

export interface ApiErrorResponse {
  success: false;
  error: {
    code: string;
    message: string;
    details?: unknown;
  };
}

export function successResponse<T>(data: T, meta?: Record<string, unknown>, status = 200) {
  const payload: ApiSuccessResponse<T> = {
    success: true,
    data,
    meta,
  };
  return NextResponse.json(payload, { status });
}

export function errorResponse(error: unknown) {
  if (error instanceof AppError) {
    if (error.statusCode >= 500) {
      logger.error(`Server error: ${error.message}`, error);
    } else {
      logger.warn(`Operational client error: ${error.message}`, { code: error.code, details: error.details });
    }

    const payload: ApiErrorResponse = {
      success: false,
      error: {
        code: error.code,
        message: error.message,
        details: error.details,
      },
    };
    return NextResponse.json(payload, { status: error.statusCode });
  }

  // Unhandled / unexpected exception
  logger.error('Unhandled internal exception caught in API response handler', error);

  const payload: ApiErrorResponse = {
    success: false,
    error: {
      code: 'INTERNAL_SERVER_ERROR',
      message: 'An unexpected internal error occurred. Please contact KovilGo concierge support.',
    },
  };
  return NextResponse.json(payload, { status: 500 });
}
