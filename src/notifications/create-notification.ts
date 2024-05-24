import { notificationConfig } from '../config';
import { closeNotification } from './close-notification';
import { enableClickToClose } from './enable-click-to-close';
import { populateNotification } from './populate-notification';

/**
 * Creates and displays a notification with specified options.
 *
 * @param {string} type - The type of the notification (e.g., 'success', 'error').
 * @param {string} heading - The heading text of the notification.
 * @param {string} message - The message text of the notification.
 * @param {number|null} duration - The duration in milliseconds before the notification will automatically close. Pass `null` for notifications that do not auto-close.
 * @param {boolean} clickToClose - Whether the notification can be closed by clicking on it.
 * @returns {HTMLElement} The notification element that was created and appended to the DOM.
 */
export function createNotification(
  type,
  heading,
  message,
  duration,
  clickToClose
) {
  const container = document.querySelector(
    notificationConfig.containerSelector
  );
  const notificationId = Math.random().toString(36).substring(2, 11);

  const notification = populateNotification(
    container,
    type,
    heading,
    message,
    notificationId
  );

  container.appendChild(notification);

  if (duration) {
    closeNotification(notification, duration);
  }
  if (clickToClose) enableClickToClose(notification);

  return notification;
}
