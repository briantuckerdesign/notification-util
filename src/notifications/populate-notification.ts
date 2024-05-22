import { icons } from '../icons';

export function populateNotification(
  container,
  type,
  heading,
  message,
  notificationId
) {
  let notificationClass = 'bt_notification';
  let headingWrapperClass = 'bt_notification-heading-wrapper';
  let iconClass = 'bt_notification-icon';
  let messageClass = 'bt_notification-message';
  let headingClass = 'bt_notification-heading';

  const notification = `
      <div sn-notification=${notificationId} class="${notificationClass} is-${type}" >
        <div sn-heading-wrapper class="${headingWrapperClass}">
          <div sn-notification-icon class="${iconClass}">${icons.get(
    type
  )}</div>
          <div bt-notification-heading="true" class="${headingClass}">${heading}</div>
        </div>
        <div bt-notification-message class="${messageClass}">${message}</div>
      </div>`;

  // INSERT
  container.insertAdjacentHTML('beforeend', notification);

  return container.querySelector(`[sn-notification="${notificationId}"]`);
}
