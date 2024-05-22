import { getOptions } from '../options';

export function updateLoader(loader, userOptions: object) {
  // Does not support duration
  let { heading, message, duration } = getOptions(userOptions);

  // Update the loader
  const headingElement = loader.querySelector('[bt-notification-heading]');
  if (headingElement) headingElement.innerHTML = heading;

  // Update the message
  const messageElement = loader.querySelector('[bt-notification-message]');
  if (messageElement) {
    messageElement.innerHTML = message;
  } else {
    messageElement.innerHTML = '';
  }
}
