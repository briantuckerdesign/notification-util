/**
 * Closes a notification element after a specified duration by fading it out and then removing it from the DOM.
 *
 * @param {HTMLElement} notification - The notification element to close.
 * @param {number} duration - The duration in milliseconds to wait before starting the close animation.
 */
export function closeNotification(notification, duration) {
  setTimeout(() => {
    notification.style.opacity = '0';
    setTimeout(() => {
      if (notification.parentNode)
        notification.parentNode.removeChild(notification);
    }, 250); // Assumes a 250ms fade-out animation duration
  }, duration);
}
