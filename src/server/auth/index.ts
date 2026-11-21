import 'server-only';
import { createServerSupabaseClient } from '@/lib/supabase/server';
import { UnauthorizedError } from '@/server/security/errors';

/**
 * Retrieves the current authenticated user session from Supabase SSR.
 * Throws UnauthorizedError if session is absent.
 */
export async function requireAuth() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    throw new UnauthorizedError('Valid session token required');
  }

  return user;
}
