import { debugIcon } from './debug';
import { errorIcon } from './error';
import { spinnerIcon } from './spinner';
import { successIcon } from './success';
import { getIcon } from './get-icon';
import { warningIcon } from './warning';
import { infoIcon } from './info';

export let icons = {
  get: getIcon,
  svg: {
    success: successIcon,
    warning: warningIcon,
    error: errorIcon,
    debug: debugIcon,
    spinner: spinnerIcon,
    info: infoIcon
  }
};
