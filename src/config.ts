import { autoModeCss, darkModeCss, defaultCss, injectCss } from './defaultCss';
import { icons } from './icons';

export const notificationConfig = {
  containerSelector: '[nu_notification-container]',
  classes: {
    notificationClass: 'nu_notification',
    headingWrapperClass: 'nu_notification-heading-wrapper',
    iconClass: 'nu_notification-icon',
    headingClass: 'nu_notification-heading',
    bodyClass: 'nu_notification-body',
    progressBarClass: 'nu_notification-progress-bar'
  },
  icons: {
    success: icons.svg.success,
    warning: icons.svg.warning,
    error: icons.svg.error,
    debug: icons.svg.debug,
    spinner: icons.svg.spinner,
    info: icons.svg.info
  },
  injectCss: true,
  theme: 'light'
};

// Import or define the DeepPartial type if you're using it inside the function for any reason.
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export function configureNotifications(options: any) {
  // Runtime checks and merging logic here
  const safeOptions = validateAndMergeOptions(options, notificationConfig);

  // Apply the safeOptions to your notificationConfig
  deepMerge(notificationConfig, safeOptions);

  if (notificationConfig.injectCss) {
    injectCss(defaultCss);
    if (notificationConfig.theme === 'dark') {
      injectCss(darkModeCss);
      document.body.classList.add('nu_dark-mode');
    }
    if (notificationConfig.theme === 'auto') {
      injectCss(autoModeCss);
    }
  }
}

function validateAndMergeOptions(
  userOptions: any,
  defaults: typeof notificationConfig
): DeepPartial<typeof notificationConfig> {
  // Implement your validation and merging logic here
  // This is a placeholder function to illustrate the concept
  // You would need to recursively validate and merge the userOptions with your defaults
  return userOptions; // This should be the result of your actual merging logic
}

// Existing deepMerge function or similar logic to apply the safeOptions
function deepMerge(target: any, source: any) {
  Object.keys(source).forEach((key) => {
    if (
      source[key] &&
      typeof source[key] === 'object' &&
      !(source[key] instanceof Array)
    ) {
      if (!target[key]) {
        target[key] = {};
      }
      deepMerge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  });
}
