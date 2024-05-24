import { configureNotifications, notificationConfig } from './config';
import { Loader } from './loader';
import { Notification } from './notification';

export { Loader, Notification, configureNotifications, notificationConfig };

/**
 * 1. call configureNotifications
 * Leave empty {} to use default values/styles
 * 
 * 
  containerSelector: selector, can be attr, class, etc
  classes: {
    notificationClass: CSS class as string,
    headingWrapperClass: CSS class as string,
    iconClass: CSS class as string,
    messageClass: CSS class as string,
    headingClass: CSS class as string,
  },
  icons: {
    success: HTML to be injected,
    warning: HTML to be injected,
    error: HTML to be injected,
    debug: HTML to be injected,
    loading: HTML to be injected,
  },
  injectCss: boolean, default true
 * 
 */
