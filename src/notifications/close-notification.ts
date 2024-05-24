import { Notification } from '../notification';

/**
 * Closes a notification element after a specified duration by fading it out and then removing it from the DOM.
 *
 * @param {HTMLElement} notification - The notification element to close.
 * @param {number} duration - The duration in milliseconds to wait before starting the close animation.
 */
export function closeNotification(notification, duration) {
  if (duration > 0) {
    const durationElement = notification.querySelector(
      '[sn-notification-duration]'
    );
    if (durationElement) {
      durationElement.style.animationName = 'growWidth';
      durationElement.style.animationDuration = `${duration}ms`;
      durationElement.style.animationTimingFunction = 'linear';
      durationElement.style.animationFillMode = 'forwards'; // Keeps the state at the end of the animation
    }
  }
  setTimeout(() => {
    notification.style.opacity = '0';
    setTimeout(() => {
      if (notification.parentNode)
        notification.parentNode.removeChild(notification);
    }, 250); // Assumes a 250ms fade-out animation duration
  }, duration);
}
