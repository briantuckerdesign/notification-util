import { injectCss } from './defaultCss';
import { icons } from './icons';

export const notificationConfig = {
  classes: {
    notificationClass: 'sn_notification',
    headingWrapperClass: 'sn_notification-heading-wrapper',
    iconClass: 'sn_notification-icon',
    messageClass: 'sn_notification-message',
    headingClass: 'sn_notification-heading'
  },
  icons: {
    success: icons.svg.success,
    warning: icons.svg.warning,
    error: icons.svg.error,
    debug: icons.svg.debug,
    loading: icons.svg.loading
  },
  injectCss: true
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
    injectCss();
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

// function deepMerge(target: any, source: any) {
//   Object.keys(source).forEach((key) => {
//     if (
//       source[key] &&
//       typeof source[key] === 'object' &&
//       !(source[key] instanceof Array)
//     ) {
//       if (!target[key]) {
//         target[key] = {};
//       }
//       deepMerge(target[key], source[key]);
//     } else {
//       target[key] = source[key];
//     }
//   });
// }

// export function configureNotifications(
//   options?: Partial<typeof notificationConfig>
// ) {
//   if (options) {
//     // Deep merge options into notificationConfig
//     deepMerge(notificationConfig, options);
//   }

//   if (notificationConfig.injectCss) {
//     injectCss();
//   }
// }

// export function configureNotifications(
//   options?: Partial<typeof notificationConfig>
// ) {
//   // Check if icons are provided in the options and merge them
//   if (options.icons) {
//     Object.assign(notificationConfig.icons, options.icons);
//     delete options.icons; // This line ensures the rest of the options can be merged without overwriting the entire icons object
//   }

//   Object.assign(notificationConfig, options);
//   if (notificationConfig.injectCss) {
//     injectCss();
//   }
// }
