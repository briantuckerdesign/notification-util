import { getOptions } from './get-options';

export function updateNotification(notification, userOptions: object) {
  let { heading, body } = getOptions(userOptions);

  // Update the loader
  const headingElement = notification.querySelector(
    '[nu_notification-heading]'
  );
  if (headingElement && heading) headingElement.innerHTML = heading;

  // Update the body
  const bodyElement = notification.querySelector('[nu_notification-body]');

  if (bodyElement && body) {
    bodyElement.innerHTML = body;
    bodyElement.style.display = 'block';
  } else {
    bodyElement.innerHTML = '';
    bodyElement.style.display = 'none';
  }
}
