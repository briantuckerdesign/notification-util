/**
 * The spinner class manages the lifecycle of a spinning indicator on the webpage.
 * It provides methods to initialize, update, and close the spinner with customizable text options.
 *
 * Private Properties:
 * - `element`: Holds the HTML element of the spinner. It is `null` when the spinner is not displayed.
 *
 * Methods:
 * - `constructor(options: { heading: string; body?: string })`: Initializes the spinner with a spinner notification.
 *   It creates and displays the spinner element using the `createNotification` function if `element` is `null`.
 * - `update(options: { heading?: string; body?: string })`: Updates the spinner's heading or body text.
 *   If `element` is not `null`, it calls `updateNotification` with the new options to modify the spinner's display.
 * - `close()`: Removes the spinner from the display. If `element` is not `null`, it removes the spinner element from the DOM
 *   and resets `element` to `null`.
 *
 * External Dependencies:
 * - `createNotification`: Creates and displays the spinner element with a spinner and the provided options.
 * - `updateNotification`: Updates the spinner element's display with new options.
 */

import { createNotification } from './notifications/create-notification';
import { updateNotification } from './notifications/update-notification';

export class Spinner {
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
