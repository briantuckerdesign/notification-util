import { notify } from '..';
import { getOptions } from '../options';

export function endLoader(loader, userOptions: object = {}) {
  let { heading, message, duration, clickToClose, showSuccess } =
    getOptions(userOptions);
  // Remove loader from DOM
  loader.parentNode.removeChild(loader);

  // Show success notification
  if (showSuccess)
    notify.success({
      heading: heading,
      message: message,
      duration: duration,
      clickToClose: clickToClose
    });
}
