import { getOptions } from '../notifications/options';

export function updateLoader(loader, userOptions: object) {
  let { heading, message } = getOptions(userOptions);

  // Update the loader
  const headingElement = loader.querySelector('[sn-notification-heading]');
  if (headingElement) headingElement.innerHTML = heading;

  // Update the message
  const messageElement = loader.querySelector('[sn-notification-message]');
  if (messageElement) {
    messageElement.innerHTML = message;
  } else {
    messageElement.innerHTML = '';
  }
}
