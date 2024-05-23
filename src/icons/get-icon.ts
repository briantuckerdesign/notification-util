import { icons } from '.';

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
      iconHTML = icons.svg.success;
      break;
    case 'debug':
      iconHTML = icons.svg.debug;
      break;
    case 'error':
      iconHTML = icons.svg.error;
      break;
    case 'warning':
      iconHTML = icons.svg.warning;
      break;
    case 'loading':
      iconHTML = icons.svg.loading;
      break;
  }

  return iconHTML;
}
