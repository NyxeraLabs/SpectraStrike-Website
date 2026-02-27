export const EMAIL_CONFIG = {
  nyxera: {
    contact: 'founder@nyxera.cloud',
    security: 'security@nyxera.cloud',
    cc: 'founder@nyxera.cloud'
  },
  spectrastrike: {
    contact: 'contact@nyxera.cloud',
    security: 'security@nyxera.cloud',
    cc: 'founder@nyxera.cloud'
  }
} as const;

export const FORM_CONFIG = {
  endpoint: 'https://formsubmit.co'
} as const;

export function getFormAction(recipient: string) {
  return `${FORM_CONFIG.endpoint}/${encodeURIComponent(recipient)}`;
}
