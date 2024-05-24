/**
 * The Notification class is designed to create and manage custom notification elements.
 * It supports different types of notifications such as success, error, warning, and debug,
 * each with customizable properties like heading, message, duration, and click-to-close functionality.
 *
 * - `element`: Holds the HTML element of the notification, initially null.
 * - `type`: Specifies the type of notification (e.g., success, error).
 * - `heading`: The text displayed as the heading of the notification.
 * - `message`: The main content or message of the notification.
 * - `duration`: How long the notification will be displayed before automatically closing.
 * - `clickToClose`: Allows the notification to be closed on click if set to true.
 *
 * The constructor takes an object with these properties, with `duration` and `clickToClose` falling back to default values if not provided.
 * It then creates the notification element based on the specified type and properties.
 *
 * The `remove` method allows for the manual removal of the notification's element from the DOM.
 */
import { notify } from './notifications';
import { defaultOptions } from './notifications/options';

export class Notification {
  private element: HTMLElement | null = null;

  type: string;
  heading: string;
  message: string;
  duration: number;
  clickToClose: boolean;

  constructor({
    type,
    heading,
    message = '',
    duration = defaultOptions.duration,
    clickToClose = defaultOptions.clickToClose
  }) {
    this.type = type;
    this.heading = heading;
    this.message = message;
    this.duration = duration;
    this.clickToClose = clickToClose;

    switch (this.type) {
      case 'success':
        this.element = notify.success({
          heading: this.heading,
          message: this.message,
          duration: this.duration,
          clickToClose: this.clickToClose
        });
        break;
      case 'error':
        this.element = notify.error({
          heading: this.heading,
          message: this.message,
          duration: this.duration,
          clickToClose: this.clickToClose
        });
        break;
      case 'warning':
        this.element = notify.warning({
          heading: this.heading,
          message: this.message,
          duration: this.duration,
          clickToClose: this.clickToClose
        });
        break;
      case 'debug':
        this.element = notify.debug({
          heading: this.heading,
          message: this.message,
          duration: this.duration,
          clickToClose: this.clickToClose
        });
    }
  }
  remove() {
    if (this.element) {
      this.element.remove();
    }
  }
}
