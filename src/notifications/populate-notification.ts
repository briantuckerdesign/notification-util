import { icons } from '../icons';
import { notificationConfig } from '../config'; // Import the configuration

/**
 * Populates a given container with a notification element.
 *
 * @param {HTMLElement} container - The container to which the notification will be appended.
 * @param {string} type - The type of the notification (e.g., 'success', 'error'), used to determine the icon and styling.
 * @param {string} heading - The heading text of the notification.
 * @param {string} body - The body text of the notification.
 * @param {string} notificationId - A unique identifier for the notification, used for targeting the notification after creation.
 * @returns {HTMLElement} The newly created notification element.
 */
export function populateNotification(
  container,
  type,
  heading,
  body,
  notificationId
) {
  const {
    notificationClass,
    headingWrapperClass,
    iconClass,
    bodyClass,
    headingClass,
    progressBarClass
  } = notificationConfig.classes;

  const notificationToInject = `
<div nu_notification="${notificationId}" class="${notificationClass} is-${type}" >
  <div nu_heading-wrapper class="${headingWrapperClass}">
    <div nu_notification-icon class="${iconClass} is-${type}"">${icons.get(
    type
  )}</div>
    <div nu_notification-heading="true" class="${headingClass}">${heading}</div>
  </div>
  <div nu_notification-body class="${bodyClass}">${body}</div>
  <div nu_notification-progress-bar class="${progressBarClass}"></div>
</div>`;

  container.insertAdjacentHTML('beforeend', notificationToInject);
  const notification = container.querySelector(
    `[nu_notification="${notificationId}"]`
  );
  const bodyElement = notification.querySelector('[nu_notification-body]');
  if (!body) bodyElement.style.display = 'none';

  return notification;
}
