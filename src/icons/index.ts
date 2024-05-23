import { debugIcon } from './debug';
import { errorIcon } from './error';
import { loadingIcon } from './loading';
import { successIcon } from './success';
import { getIcon } from './get-icon';
import { warningIcon } from './warning';

export let icons = {
  get: getIcon,
  svg: {
    success: successIcon,
    warning: warningIcon,
    error: errorIcon,
    debug: debugIcon,
    loading: loadingIcon
  }
};
