import { configure, config } from './config';
import { Spinner } from './spinner';
import { Notification } from './notification';

declare global {
  interface Window {
    notifyUtil: any;
  }
}

window.notifyUtil = {
  Spinner,
  Notification,
  configure,
  config
};
