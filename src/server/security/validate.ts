import 'server-only';
import { type ZodSchema } from 'zod';
import { ValidationError } from './errors';

/**
 * Validates arbitrary input data against a Zod schema.
 * Throws a typed ValidationError on failure with field-level issues.
 */
export function validateInput<T>(schema: ZodSchema<T>, data: unknown): T {
  const result = schema.safeParse(data);

  if (!result.success) {
    const formattedErrors = result.error.flatten().fieldErrors;
    throw new ValidationError('Input validation failed', formattedErrors);
  }

  return result.data;
}

/**
 * Parses and validates JSON payload from a Next.js Request.
 */
export async function parseJsonBody<T>(request: Request, schema: ZodSchema<T>): Promise<T> {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    throw new ValidationError('Invalid JSON body payload');
  }

  return validateInput(schema, body);
}
