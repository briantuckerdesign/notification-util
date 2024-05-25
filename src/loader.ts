/**
 * The Loader class manages the lifecycle of a loading indicator on the webpage.
 * It provides methods to initialize, update, and close the loader with customizable text options.
 *
 * Private Properties:
 * - `element`: Holds the HTML element of the loader. It is `null` when the loader is not displayed.
 *
 * Methods:
 * - `constructor(options: { heading: string; body?: string })`: Initializes the loader with a spinner notification.
 *   It creates and displays the loader element using the `createNotification` function if `element` is `null`.
 * - `update(options: { heading?: string; body?: string })`: Updates the loader's heading or body text.
 *   If `element` is not `null`, it calls `updateNotification` with the new options to modify the loader's display.
 * - `close()`: Removes the loader from the display. If `element` is not `null`, it removes the loader element from the DOM
 *   and resets `element` to `null`.
 *
 * External Dependencies:
 * - `createNotification`: Creates and displays the loader element with a spinner and the provided options.
 * - `updateNotification`: Updates the loader element's display with new options.
 */

import { createNotification } from './notifications/create-notification';
import { updateNotification } from './notifications/update-notification';

export class Loader {
  private element: HTMLElement | null = null;

  constructor(options: { heading: string; body?: string }) {
    this.element = createNotification('spinner', options);
  }

  update(options: { heading?: string; body?: string }) {
    if (!this.element) return;
    updateNotification(this.element, options);
  }

  close() {
    if (!this.element) return;
    this.element.remove();
    this.element = null;
  }
}
