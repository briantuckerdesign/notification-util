import { loader } from './loader';
import { createNotification } from './create-notification';
import { getOptions } from './options';

export const notify = {
  success,
  error,
  warning,
  debug,
  loader
};

function success(userOptions: object) {
  let { heading, message, duration } = getOptions(userOptions);
  createNotification('success', heading, message, duration);
}

function error(userOptions: object) {
  let { heading, message, duration } = getOptions(userOptions);
  createNotification('error', heading, message, duration);
}

function warning(userOptions: object) {
  let { heading, message, duration } = getOptions(userOptions);
  createNotification('warning', heading, message, duration);
}

function debug(userOptions: object) {
  let { heading, message, duration } = getOptions(userOptions);
  createNotification('debug', heading, message, duration);
}
