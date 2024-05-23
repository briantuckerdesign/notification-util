import { getOptions } from '../notifications/options';
import { createNotification } from '../notifications/create-notification';

export function startLoader(userOptions: object) {
  let { heading, message } = getOptions(userOptions);
  return createNotification('loading', heading, message, null, false);
}
