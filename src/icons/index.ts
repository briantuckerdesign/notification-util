import { debugIcon } from './debug';
import { errorIcon } from './error';
import { loadingIcon } from './loading';
import { successIcon } from './success';
import { getIcon, updateIcon } from './update-icon';
import { warningIcon } from './warning';

export let icons = {
  update: updateIcon,
  get: getIcon,
  svg: {
    success: successIcon,
    warning: warningIcon,
    error: errorIcon,
    debug: debugIcon,
    loading: loadingIcon
  }
};
