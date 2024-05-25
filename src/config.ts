import { icons } from './icons';
import { styles } from './styles';
import { deepMerge } from './utils/deep-merge';
import { injectCss } from './utils/inject-css';

export const config = {
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
  theme: 'light'
};

export function configure(options: any) {
  // Apply the safeOptions to your notificationConfig
  deepMerge(config, options);

  // Adds the appropriate styles based on the theme
  switch (config.theme) {
    case 'none':
      break;
    case 'light':
      injectCss(styles.light, styles.base);
      break;
    case 'dark':
      injectCss(styles.dark, styles.base);
      break;
    case 'auto':
      injectCss(styles.auto, styles.base);
      break;
  }
}
