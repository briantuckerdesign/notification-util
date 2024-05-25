import { configureNotifications, notificationConfig } from './config';
import { Loader } from './loader';
import { Notification } from './notification';

declare global {
  interface Window {
    notificationUtil: any;
  }
}

window.notificationUtil = {
  Loader,
  Notification,
  configureNotifications,
  notificationConfig
};
