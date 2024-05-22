import { icons } from '.';

/**
 * Finds the icon container in the notification and updates the icon based on the type
 *
 * @param notification
 * @param type
 */
export function updateIcon(notification, type): void {
  const iconContainer = notification.querySelector('[sn-notification-icon]');

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

  iconContainer.innerHTML = iconHTML;

  console.log('Icon updated to:', type); // TODO: Remove
}

export function getIcon(type): string {
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
