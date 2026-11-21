import 'server-only';

/**
 * MSG91 SMS OTP Integration Configuration Stub.
 * Will be initialized when MSG91 credentials are provided.
 */
export const msg91Config = {
  authKey: process.env.MSG91_AUTH_KEY,
  templateId: process.env.MSG91_OTP_TEMPLATE_ID,
  senderId: process.env.MSG91_SENDER_ID || 'KOVILG',
  isConfigured: Boolean(process.env.MSG91_AUTH_KEY && process.env.MSG91_OTP_TEMPLATE_ID),
};
