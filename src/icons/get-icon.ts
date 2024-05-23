import { icons } from '.';
import { notificationConfig } from '../config';

/**
 * Retrieves the HTML string for a given icon type.
 *
 * @param {string} type - The type of icon to retrieve. Valid types are 'success', 'debug', 'error', 'warning', and 'loading'.
 * @returns {string} The HTML string representing the requested icon.
 */
export function getIcon(type: string): string {
  let iconHTML: string;

  switch (type) {
    case 'success':
      iconHTML = notificationConfig.icons.success;
      break;
    case 'debug':
      iconHTML = notificationConfig.icons.debug;
      break;
    case 'error':
      iconHTML = notificationConfig.icons.error;
      break;
    case 'warning':
      iconHTML = notificationConfig.icons.warning;
      break;
    case 'loading':
      iconHTML = notificationConfig.icons.loading;
      break;
  }

  return iconHTML;
}
