import { config } from '../config';
import { closeNotification } from './close-notification';
import { enableClickToClose } from './enable-click-to-close';
import { populateNotification } from './populate-notification';
import { getOptions } from './get-options';

/**
 * Creates and displays a notification with specified options.
 *
 * @param {string} type - The type of the notification (e.g., 'success', 'error').
 * @param {object} userOptions - The options for the notification.
 * @returns {HTMLElement} The notification element that was created and appended to the DOM.
 */
export function createNotification(type, userOptions: object) {
  let { heading, body, duration, clickToClose } = getOptions(userOptions);

  if (type === 'spinner') {
    duration = null;
    clickToClose = false;
  }

  // Where to append the notification
  const container = document.querySelector(config.containerSelector);

  // Generate a unique ID for the notification
  const notificationId = Math.random().toString(36).substring(2, 11);

  // Create the notification element
  const notification = populateNotification(
    container,
    type,
    heading,
    body,
    notificationId
  );

  // Append the notification to the container
  container.appendChild(notification);

  // Close the notification after a specified duration
  if (duration) {
    closeNotification(notification, duration);
  }

  // Enable click-to-close functionality
  if (clickToClose) enableClickToClose(notification);

  // Return the notification element for further manipulation
  return notification;
}
