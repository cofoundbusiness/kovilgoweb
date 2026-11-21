export interface BookingDetail {
  id: string;
  bookingReference: string;
  userId: string;
  packageId: string;
  startDate: string;
  endDate: string;
  guestCount: number;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  totalAmountInr: number;
  paidAmountInr: number;
}
