import { createNotification } from './create-notification';

export const notify = {
  success: (options: object) => createNotification('success', options),
  error: (options: object) => createNotification('error', options),
  warning: (options: object) => createNotification('warning', options),
  debug: (options: object) => createNotification('debug', options),
  info: (options: object) => createNotification('info', options)
};
