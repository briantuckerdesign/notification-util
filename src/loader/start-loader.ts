import { getOptions } from '../notifications/options';
import { createNotification } from '../notifications/create-notification';

export function startLoader(userOptions: object) {
  let { heading, body } = getOptions(userOptions);
  return createNotification('spinner', heading, body, null, false);
}
