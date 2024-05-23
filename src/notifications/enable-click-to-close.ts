import { closeNotification } from './close-notification';

/**
 * Enables the notification to be closed by clicking on it.
 * It sets the cursor to a pointer on hover and adds a click event listener
 * that triggers the closeNotification function immediately.
 *
 * @param {HTMLElement} notification - The notification element to enable click-to-close functionality on.
 */
export function enableClickToClose(notification) {
  notification.style.cursor = 'pointer';
  notification.addEventListener('click', () =>
    closeNotification(notification, 0)
  );
}
