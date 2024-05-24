export const defaultCss = `
body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif, sans-serif;
  }
  :root {
    --sn-red: #ff005d;
    --sn-red-light: #ffebef;
    --sn-green: #00c465;
    --sn-green-light: #e3fff1;
    --sn-yellow: #e0b300;
    --sn-yellow-light: #fdf8e9;
    --sn-blue: #0077ff;
    --sn-blue-light: #e9f4ff;
    --sn-grey-light: #e3e3e3;
    --sn-grey: #74717b;
    --sn-white: #fff;
    --sn-black: #000;
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
    overflow: hidden;
    position: relative;
  }
  .sn_notification.is-success {
    border-color: var(--sn-green);
    background-color: var(--sn-green-light);
  }

  .sn_notification.is-error {
    border-color: var(--sn-red);
    background-color: var(--sn-red-light);
    color: var(--sn-black);
  }

  .sn_notification.is-warning {
    border-color: var(--sn-yellow);
    background-color: var(--sn-yellow-light);
  }

  .sn_notification.is-debug {
    border-color: var(--sn-blue);
    background-color: var(--sn-blue-light);
  }

  .sn_notification.is-loading {
    border-color: var(--sn-grey-light);
    background-color: var(--sn-grey);
    color: var(--sn-white);
  }
  .sn_spinner {
    margin-top: 5px;
    width: 18px;
    height: 18px;
    border: 2px solid var(--sn-grey-light);
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
  .sn_notification-duration {
    width: 0%;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 0.125rem;
    background-color: var(--sn-black);
    opacity: 0.15;
  }
  @keyframes growWidth {
    from {
      width: 0%;
    }
    to {
      width: 100%;
    }
  }
`;

export function injectCss() {
  const style = document.createElement('style');
  style.innerHTML = defaultCss;
  document.head.appendChild(style);
}
