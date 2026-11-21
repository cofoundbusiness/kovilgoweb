import { test, expect } from '@playwright/test';

test.describe('KovilGo Platform Smoke Test Suite', () => {
  test('serves healthcheck endpoint successfully', async ({ request }) => {
    const response = await request.get('/api/health');
    expect(response.status()).toBe(200);

    const json = await response.json();
    expect(json.success).toBe(true);
    expect(json.data.status).toBe('healthy');
    expect(json.data.service).toBe('kovilgo-web');
  });

  test('loads Phase 0 foundation page with correct brand tagline', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/KovilGo/);
    await expect(page.getByText('EVERY JOURNEY, BRIGHTER.')).toBeVisible();
  });
});
