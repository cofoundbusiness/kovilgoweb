import { describe, it, expect } from 'vitest';
import nextConfig from '../../next.config';

describe('Application Security Headers Configuration', () => {
  it('defines mandatory security headers on all routes', async () => {
    expect(nextConfig.headers).toBeDefined();

    if (typeof nextConfig.headers === 'function') {
      const headerRoutes = await nextConfig.headers();
      const catchAllRoute = headerRoutes.find((r) => r.source === '/:path*');

      expect(catchAllRoute).toBeDefined();

      const headerMap = new Map(catchAllRoute?.headers.map((h) => [h.key, h.value]));

      // Verify essential security response headers
      expect(headerMap.get('X-Frame-Options')).toBe('DENY');
      expect(headerMap.get('X-Content-Type-Options')).toBe('nosniff');
      expect(headerMap.get('Referrer-Policy')).toBe('strict-origin-when-cross-origin');
      expect(headerMap.get('Permissions-Policy')).toContain('camera=()');
      expect(headerMap.has('Content-Security-Policy')).toBe(true);
    }
  });

  it('disables the powered-by header to prevent fingerprinting', () => {
    expect(nextConfig.poweredByHeader).toBe(false);
  });
});
