export interface CustomQuotationRequest {
  id: string;
  customerName: string;
  email: string;
  phone: string;
  selectedDestinations: string[];
  startDate: string;
  durationDays: number;
  totalAdults: number;
  totalChildren: number;
  specialRequests?: string;
  status: 'PENDING' | 'ESTIMATED' | 'ACCEPTED' | 'EXPIRED';
}
