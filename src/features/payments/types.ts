export interface PaymentSessionInfo {
  cashfreeOrderId: string;
  paymentSessionId: string;
  orderAmount: number;
  orderCurrency: 'INR';
  customerDetails: {
    customerId: string;
    customerPhone: string;
    customerEmail: string;
    customerName: string;
  };
}
