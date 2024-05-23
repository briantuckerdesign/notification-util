/**
 * The Loader class is designed to manage the lifecycle of a loading indicator on the webpage.
 * It encapsulates the functionality to start, update, and close the loader with customizable options.
 *
 * - `element`: A private property that holds the HTML element of the loader. Initially, it is null.
 *
 * The class provides three main methods:
 * - `constructor(options: { heading: string; message?: string })`: Initializes the loader. If the `element` property is null,
 *   it calls the `startLoader` function with the provided options to create and display the loader element.
 * - `update(options: { heading?: string; message?: string })`: Updates the loader's appearance or message. If the loader is already
 *   displayed (`element` is not null), it calls the `updateLoader` function with the new options.
 * - `close()`: Removes the loader from the display. If the loader is currently displayed (`element` is not null),
 *   it removes the loader element from the DOM.
 *
 * The class relies on two external functions imported from the same directory:
 * - `startLoader`: A function to create and display the loader element based on the provided options.
 * - `updateLoader`: A function to update the existing loader element with new options.
 */
import { startLoader } from './loader/start-loader';
import { updateLoader } from './loader/update-loader';

export class Loader {
  private element: HTMLElement | null = null;

  constructor(options: { heading: string; message?: string }) {
    if (!this.element) {
      this.element = startLoader(options);
    }
  }

  update(options: { heading?: string; message?: string }) {
    if (!this.element) return;
    updateLoader(this.element, options);
  }

  close() {
    if (this.element) {
      this.element.remove();
    }
  }
}
