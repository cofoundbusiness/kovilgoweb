import { describe, it, expect } from 'vitest';
import { sanitizeLogData } from '@/server/security/logger';

describe('Security Logger Sanitization', () => {
  it('redacts sensitive keys including password, token, otp, and secret', () => {
    const sensitivePayload = {
      user: 'traveler@example.com',
      password: 'supersecretpassword123',
      otp: '739201',
      token: 'jwt-access-token',
      cvv: '123',
      cardNumber: '4111222233334444',
      publicInfo: 'Madurai Temple Tour',
    };

    const sanitized = sanitizeLogData(sensitivePayload);

    expect(sanitized.user).toBe('traveler@example.com');
    expect(sanitized.publicInfo).toBe('Madurai Temple Tour');
    expect(sanitized.password).toBe('[REDACTED]');
    expect(sanitized.otp).toBe('[REDACTED]');
    expect(sanitized.token).toBe('[REDACTED]');
    expect(sanitized.cvv).toBe('[REDACTED]');
    expect(sanitized.cardNumber).toBe('[REDACTED]');
  });

  it('redacts nested objects recursively', () => {
    const nestedPayload = {
      booking: {
        id: 'bk_123',
        payment: {
          client_secret: 'cs_live_secretkey',
          amount: 5000,
        },
      },
    };

    const sanitized = sanitizeLogData(nestedPayload);

    expect(sanitized.booking.id).toBe('bk_123');
    expect(sanitized.booking.payment.amount).toBe(5000);
    expect(sanitized.booking.payment.client_secret).toBe('[REDACTED]');
  });
});
