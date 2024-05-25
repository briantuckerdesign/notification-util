/**
 * Retrieves the HTML string for a given icon type.
 * This method allows the user to set their own icons, overwriting the default config icons.
 *
 * @param {string} type - The type of icon to retrieve. Valid types are 'success', 'debug', 'error', 'warning', and 'loading'.
 * @returns {string} The HTML string representing the requested icon.
 */
import { config } from '../config';

export function getIcon(type: string): string {
  let iconHTML: string;

  switch (type) {
    case 'success':
      iconHTML = config.icons.success;
      break;
    case 'debug':
      iconHTML = config.icons.debug;
      break;
    case 'error':
      iconHTML = config.icons.error;
      break;
    case 'warning':
      iconHTML = config.icons.warning;
      break;
    case 'spinner':
      iconHTML = config.icons.spinner;
      break;
    case 'info':
      iconHTML = config.icons.info;
      break;
  }

  return iconHTML;
}
