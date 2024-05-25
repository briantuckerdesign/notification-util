import { createNotification } from './create-notification';
import { getOptions } from './options';

/**
 * Sends a notification with custom options. This applies to success, error, warning, and debug notifications.
 * Each function works the same way, differing only in the type of notification they send.
 *
 * @param {object} userOptions - The user-defined options for the notification, including heading, body, duration, and clickToClose.
 * @returns {HTMLElement} The notification element that was created and appended to the DOM.
 */
export const notify = {
  success,
  error,
  warning,
  debug,
  info
};

function success(userOptions: object) {
  let { heading, body, duration, clickToClose } = getOptions(userOptions);
  return createNotification('success', heading, body, duration, clickToClose);
}

function error(userOptions: object) {
  let { heading, body, duration, clickToClose } = getOptions(userOptions);
  return createNotification('error', heading, body, duration, clickToClose);
}

function warning(userOptions: object) {
  let { heading, body, duration, clickToClose } = getOptions(userOptions);
  return createNotification('warning', heading, body, duration, clickToClose);
}

function debug(userOptions: object) {
  let { heading, body, duration, clickToClose } = getOptions(userOptions);
  return createNotification('debug', heading, body, duration, clickToClose);
}

function info(userOptions: object) {
  let { heading, body, duration, clickToClose } = getOptions(userOptions);
  return createNotification('info', heading, body, duration, clickToClose);
}
