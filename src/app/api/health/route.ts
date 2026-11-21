import { successResponse } from '@/server/security/api-response';

export const dynamic = 'force-dynamic';

export async function GET() {
  return successResponse({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'kovilgo-web',
    phase: '0-foundation',
  });
}
