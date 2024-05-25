import { configure, config } from './config';
import { Notification } from './notification';

declare global {
  interface Window {
    notifyUtil: any;
  }
}

window.notifyUtil = {
  Notification,
  configure,
  config
};
