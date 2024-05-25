import { configure, config } from './config';
import { Loader } from './Loader';
import { Notification } from './Notification';

declare global {
  interface Window {
    notifyUtil: any;
  }
}

window.notifyUtil = {
  Loader,
  Notification,
  configure,
  config
};
