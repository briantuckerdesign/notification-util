/**
 * Injects one or more CSS strings into the document's `<head>` as a `<style>` element.
 *
 * @param {...string} cssStrings - One or more CSS strings to be injected.
 */
export function injectCss(...cssStrings: string[]) {
  const style = document.createElement('style');
  style.innerHTML = cssStrings.join('');
  document.head.appendChild(style);
}
