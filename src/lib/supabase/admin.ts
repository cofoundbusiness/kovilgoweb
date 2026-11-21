import 'server-only';
import { createClient } from '@supabase/supabase-js';

/**
 * Privileged Supabase Admin Client.
 *
 * CRITICAL SECURITY INVARIANT:
 * - This client uses the SUPABASE_SERVICE_ROLE_KEY.
 * - It bypasses Row Level Security (RLS) policies.
 * - MUST ONLY be used in secure server contexts (cron jobs, webhooks, system tasks).
 * - NEVER import or expose to Client Components or browser bundles.
 */
export function createAdminSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error(
      'CRITICAL: Supabase admin client requested but SUPABASE_SERVICE_ROLE_KEY or NEXT_PUBLIC_SUPABASE_URL is not set.'
    );
  }

  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}
