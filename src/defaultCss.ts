export const defaultCss = `
body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif, sans-serif;
  }
  :root {
    --red: #ff005d;
    --red-light: #ffebef;
    --green: #00c465;
    --green-light: #e3fff1;
    --yellow: #e0b300;
    --yellow-light: #fdf8e9;
    --blue: #0077ff;
    --blue-light: #e9f4ff;
    --grey-light: #e3e3e3;
    --grey: #74717b;
    --white: #fff;
    --black: #000;
  }
  .sn_notification {
    z-index: 99999;
    display: flex;
    width: 16rem;
    min-height: 1rem;
    padding: 0.75rem;
    flex-direction: column;
    justify-content: center;
    flex-wrap: nowrap;
    align-items: flex-start;
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
    border-style: solid;
    border-width: 1px;
    border-radius: 0.25rem;
    box-shadow: 0 2px 0.8rem -0.2rem hsla(245.45454545454544, 9.57%, 22.55%, 0.5);
    pointer-events: auto;
    transition-property: opacity;
    transition-duration: 200ms;
    transition-timing-function: ease;
  }
  .sn_notification.is-success {
    border-color: var(--green);
    background-color: var(--green-light);
  }

  .sn_notification.is-error {
    border-color: var(--red);
    background-color: var(--red-light);
    color: var(--black);
  }

  .sn_notification.is-warning {
    border-color: var(--yellow);
    background-color: var(--yellow-light);
  }

  .sn_notification.is-debug {
    border-color: var(--blue);
    background-color: var(--blue-light);
  }

  .sn_notification.is-loading {
    border-color: var(--grey-light);
    background-color: var(--grey);
    color: var(--white);
  }
  .sn_spinner {
    margin-top: 5px;
    width: 18px;
    height: 18px;
    border: 2px solid var(--grey-light);
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .sn_notification-wrapper {
    position: fixed;
    top: 0.5rem;
    right: 0.5rem;
    z-index: 9998;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
    pointer-events: none;
  }
  .sn_notification-heading-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
  .sn_notification-icon {
    display: flex;
    width: 1rem;
    height: 1rem;
    justify-content: center;
    align-items: center;
  }
  .sn_notification-heading {
    font-size: 0.875rem;
    font-weight: 600;
  }
  .sn_notification-message {
    font-size: 0.875rem;
  }
`;

export function injectCss() {
  const style = document.createElement('style');
  style.innerHTML = defaultCss;
  document.head.appendChild(style);
}
