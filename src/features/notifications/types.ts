export interface NotificationDispatch {
  channel: 'sms' | 'email' | 'whatsapp';
  recipient: string;
  templateId: string;
  payload: Record<string, string | number>;
}
