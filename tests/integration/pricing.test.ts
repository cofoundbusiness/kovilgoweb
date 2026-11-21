import { describe, it, expect } from 'vitest';
import { calculatePackagePrice } from '@/server/pricing/calculator';

describe('Pricing & Tax Calculations', () => {
  it('correctly calculates 5% GST on base travel package', () => {
    const baseAmount = 10000;
    const result = calculatePackagePrice(baseAmount);

    expect(result.baseAmountInr).toBe(10000);
    expect(result.gstAmountInr).toBe(500); // 5% of 10000
    expect(result.gstRatePercentage).toBe(5);
    expect(result.totalAmountInr).toBe(10500);
  });

  it('correctly incorporates convenience fee into total', () => {
    const baseAmount = 25000;
    const convenienceFee = 250;
    const result = calculatePackagePrice(baseAmount, convenienceFee);

    expect(result.baseAmountInr).toBe(25000);
    expect(result.gstAmountInr).toBe(1250); // 5% of 25000
    expect(result.convenienceFeeInr).toBe(250);
    expect(result.totalAmountInr).toBe(26500);
  });
});
