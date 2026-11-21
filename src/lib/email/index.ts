import 'server-only';

export interface EmailMessage {
  to: string | string[];
  subject: string;
  html: string;
  from?: string;
}

/**
 * Resend Email Integration Stub.
 * Will dispatch transactional emails once RESEND_API_KEY is supplied.
 */
export async function sendEmail(message: EmailMessage): Promise<{ success: boolean; id?: string }> {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.info(`[Email Stub] Email to ${JSON.stringify(message.to)} suppressed (RESEND_API_KEY not configured)`);
    return { success: true, id: 'stub-email-id' };
  }

  // To be integrated with Resend SDK in notification phase
  return { success: true };
}
