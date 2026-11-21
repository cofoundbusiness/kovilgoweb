import 'server-only';

export interface PriceBreakdown {
  baseAmountInr: number;
  gstAmountInr: number;
  gstRatePercentage: number;
  convenienceFeeInr: number;
  totalAmountInr: number;
}

export const GST_RATE = 0.05; // 5% GST for pilgrimage/tour operator services without input tax credit

export function calculatePackagePrice(baseAmountInr: number, convenienceFeeInr = 0): PriceBreakdown {
  const gstAmountInr = Math.round(baseAmountInr * GST_RATE);
  const totalAmountInr = baseAmountInr + gstAmountInr + convenienceFeeInr;

  return {
    baseAmountInr,
    gstAmountInr,
    gstRatePercentage: 5,
    convenienceFeeInr,
    totalAmountInr,
  };
}
