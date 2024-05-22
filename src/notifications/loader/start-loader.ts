import { getOptions } from '../options';
import { createNotification } from '../create-notification';

export function startLoader(userOptions: object) {
  // Does not support duration
  let { heading, message, duration } = getOptions(userOptions);
  return createNotification('loading', heading, message, null);
}
