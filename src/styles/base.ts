const swatches = `
:root {
    --nu-white: #ffffff;
    --nu-slate-50: #f8fafc;
    --nu-slate-200: #e2e8f0;
    --nu-slate-300: #cbd5e1;
    --nu-slate-400: #94a3b8;
    --nu-slate-500: #64748b;
    --nu-slate-600: #475569;
    --nu-slate-700: #334155;
    --nu-slate-800: #1e293b;
    --nu-black: #000000;
  
    --nu-green-500: #22c55e;
    --nu-green-600: #16a34a;
    --nu-red-500: #ef4444;
    --nu-yellow-400: #facc15;
    --nu-yellow-500: #eab308;
    --nu-blue-300: #93c5fd;
    --nu-blue-600: #2563eb;
  }
`;

const animations = `
@keyframes nu_progress-bar {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}
@keyframes nu_spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`;

const icons = `
.nu_notification-icon {
    display: flex;
    width: 1rem;
    height: 1rem;
    justify-content: center;
    align-items: center;
  }
  .nu_notification-icon.is-success {
    color: var(--nu-success-icon);
  }
  .nu_notification-icon.is-warning {
    color: var(--nu-warning-icon);
  }
  .nu_notification-icon.is-info {
    color: var(--nu-info-icon);
  }
  .nu_notification-icon.is-error {
    color: var(--nu-error-icon);
  }
  .nu_notification-icon.is-debug {
    color: var(--nu-debug-icon);
  }
  .nu_notification-icon.is-spinner {
    width: 1rem;
    height: 1rem;
    border: 2px solid var(--nu-spinner-icon);
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: nu_spinner 1s linear infinite;
  }
`;

const notificationTypes = `
.nu_notification.is-info {
    border-top-color: var(--nu-info-border);
  }
  
  .nu_notification.is-success {
    border-top-color: var(--nu-success-border);
  }
  
  .nu_notification.is-error {
    border-top-color: var(--nu-error-border);
  }
  
  .nu_notification.is-warning {
    border-top-color: var(--nu-warning-border);
  }
  
  .nu_notification.is-debug {
    border-top-color: var(--nu-debug-border);
  }
  
  .nu_notification.is-spinner {
    border-top-color: var(--nu-spinner-border);
  }
`;

const notificationBase = `
.nu_notification {
    position: relative;
    z-index: 99999;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;
    width: 16rem;
    min-height: 1rem;
    padding: 1.25rem 1.5rem 1.5rem 1.5rem;
    pointer-events: auto;
    transition-property: opacity;
    transition-duration: 200ms;
    transition-timing-function: ease;
    box-shadow: 0rem 0.25rem 0.75rem 0rem hsla(0, 0%, 0%, 0.09);
    border-radius: 0.375rem;
    font-size: 1rem;
    background-color: var(--nu--background);
    border-color: var(--nu--border);
    border-style: solid;
    border-width: 1px;
    border-top-width: 0.5rem;
  }
  
  .nu_notification-heading-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;
  }
  
  .nu_notification-heading {
    font-weight: 500;
    color: var(--nu--heading);
  }
  
  .nu_notification-body {
    font-weight: 400;
    color: var(--nu--text);
  }
  
  .nu_notification-progress-bar {
    width: 0%;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 0.2rem;
    background-color: var(--nu-progress-bar);
  }
`;

export const baseStyles = `
${swatches}
${notificationBase}
${notificationTypes}
${animations}
${icons}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif,
    sans-serif;
}

.nu_notification-container {
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
}`;
