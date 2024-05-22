import { closeNotification } from './close-notification';
import { populateNotification } from './populate-notification';

export function createNotification(type, heading, message, duration) {
  const container = document.querySelector('[sn-notification-container]');
  const notificationId = Math.random().toString(36).substr(2, 9);

  const notification = populateNotification(
    container,
    type,
    heading,
    message,
    notificationId
  );

  // If duration is provided, close notification after duration
  if (duration) closeNotification(notification, duration);

  return notification;
}
