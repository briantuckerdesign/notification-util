(() => {
const defaultCss = `body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif,
    sans-serif;
}
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

  --nu--background: var(--nu-white);
  --nu--text: var(--nu-slate-600);
  --nu--heading: var(--nu-slate-800);
  --nu--border: var(--nu-slate-200);
  --nu-progress-bar: var(--nu-slate-200);

  --nu-success-icon: var(--nu-green-600);
  --nu-success-border: var(--nu-green-600);

  --nu-error-icon: var(--nu-red-500);
  --nu-error-border: var(--nu-red-500);

  --nu-warning-icon: var(--nu-yellow-500);
  --nu-warning-border: var(--nu-yellow-400);

  --nu-info-icon: var(--nu-slate-500);
  --nu-info-border: var(--nu-slate-300);

  --nu-debug-icon: var(--nu-blue-600);
  --nu-debug-border: var(--nu-blue-600);

  --nu-spinner-icon: var(--nu-slate-500);
  --nu-spinner-border: var(--nu-slate-400);
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
}

/* --------- Notification Base --------- */

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
  padding: 1.5rem;
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

/* --------- Notification Types --------- */

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

/* --------- Icons --------- */

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

/* --------- Animations --------- */

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
const darkModeVars = `
--nu--background: var(--nu-slate-800);
  --nu--text: var(--nu-slate-300);
  --nu--heading: var(--nu-slate-50);
  --nu--border: var(--nu-slate-700);
  --nu-progress-bar: var(--nu-slate-500);

  --nu-success-icon: var(--nu-green-500);
  --nu-success-border: var(--nu-green-600);

  --nu-error-icon: var(--nu-red-500);
  --nu-error-border: var(--nu-red-500);

  --nu-warning-icon: var(--nu-yellow-500);
  --nu-warning-border: var(--nu-yellow-400);

  --nu-info-icon: var(--nu-slate-400);
  --nu-info-border: var(--nu-slate-700);

  --nu-debug-icon: var(--nu-blue-300);
  --nu-debug-border: var(--nu-blue-600);

  --nu-spinner-icon: var(--nu-slate-400);
  --nu-spinner-border: var(--nu-slate-400);
`;
const darkModeCss = `
.nu_dark-mode {
  ${darkModeVars}
}
`;
const autoModeCss = `
@media (prefers-color-scheme: dark) {
  :root {
    ${darkModeVars}
  }
}
`;
function injectCss(cssToInject) {
  const style = document.createElement("style");
  style.innerHTML = cssToInject;
  document.head.appendChild(style);
}
const debugIcon = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2102_1592)">
<path d="M12 7.5C12 5.84315 10.6569 4.5 9 4.5C7.34315 4.5 6 5.84315 6 7.5V12C6 13.6569 7.34315 15 9 15C10.6569 15 12 13.6569 12 12V7.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.25 5.25L12 6.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.75 5.25L6 6.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.25 14.25L12 12.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.75 14.25L6 12.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 9.75H12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 9.75H6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.5 3L8.25 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.5 3L9.75 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2102_1592">
<rect width="18" height="18" fill="white"/>
</clipPath>
</defs>
</svg>

`;
const errorIcon = `
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2102_1582)">
<g clip-path="url(#clip1_2102_1582)">
<path d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.25 6.75L6.75 11.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.75 6.75L11.25 11.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</g>
<defs>
<clipPath id="clip0_2102_1582">
<rect width="18" height="18" fill="white"/>
</clipPath>
<clipPath id="clip1_2102_1582">
<rect width="18" height="18" fill="white"/>
</clipPath>
</defs>
</svg>
`;
const spinnerIcon = `<div></div>`;
const successIcon = `
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2102_1564)">
<g clip-path="url(#clip1_2102_1564)">
<path d="M16.5 8.30999V8.99999C16.4991 10.6173 15.9754 12.191 15.007 13.4864C14.0386 14.7817 12.6775 15.7293 11.1265 16.1879C9.57557 16.6465 7.91794 16.5914 6.40085 16.0309C4.88376 15.4704 3.58849 14.4346 2.70822 13.0778C1.82795 11.721 1.40984 10.116 1.51626 8.50223C1.62267 6.88841 2.24791 5.35223 3.29871 4.12279C4.34951 2.89335 5.76959 2.03653 7.34714 1.6801C8.92469 1.32367 10.5752 1.48674 12.0525 2.14499" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.5 3L9 10.5075L6.75 8.2575" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</g>
<defs>
<clipPath id="clip0_2102_1564">
<rect width="18" height="18" fill="white"/>
</clipPath>
<clipPath id="clip1_2102_1564">
<rect width="18" height="18" fill="white"/>
</clipPath>
</defs>
</svg>
`;
function getIcon(type) {
  let iconHTML;
  switch (type) {
    case "success":
      iconHTML = notificationConfig.icons.success;
      break;
    case "debug":
      iconHTML = notificationConfig.icons.debug;
      break;
    case "error":
      iconHTML = notificationConfig.icons.error;
      break;
    case "warning":
      iconHTML = notificationConfig.icons.warning;
      break;
    case "spinner":
      iconHTML = notificationConfig.icons.spinner;
      break;
    case "info":
      iconHTML = notificationConfig.icons.info;
      break;
  }
  return iconHTML;
}
const warningIcon = `
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2102_1587)">
<path d="M16.2976 13.5L10.2976 3C10.1667 2.76915 9.97702 2.57714 9.74776 2.44355C9.5185 2.30996 9.25791 2.23958 8.99257 2.23958C8.72723 2.23958 8.46664 2.30996 8.23738 2.44355C8.00812 2.57714 7.8184 2.76915 7.68757 3L1.68757 13.5C1.55533 13.729 1.48599 13.9889 1.48658 14.2534C1.48716 14.5178 1.55765 14.7774 1.6909 15.0059C1.82416 15.2343 2.01543 15.4234 2.24534 15.5541C2.47525 15.6848 2.73562 15.7524 3.00007 15.75H15.0001C15.2632 15.7497 15.5217 15.6802 15.7495 15.5485C15.9773 15.4167 16.1665 15.2273 16.298 14.9993C16.4294 14.7714 16.4986 14.5128 16.4985 14.2496C16.4985 13.9864 16.4292 13.7279 16.2976 13.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 6.75V9.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 12.75H9.0075" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2102_1587">
<rect width="18" height="18" fill="white"/>
</clipPath>
</defs>
</svg>
`;
const infoIcon = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2102_1792)">
<path d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 12V9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 6H9.0075" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2102_1792">
<rect width="18" height="18" fill="white"/>
</clipPath>
</defs>
</svg>
`;
let icons = {
  get: getIcon,
  svg: {
    success: successIcon,
    warning: warningIcon,
    error: errorIcon,
    debug: debugIcon,
    spinner: spinnerIcon,
    info: infoIcon
  }
};
const notificationConfig = {
  containerSelector: "[nu_notification-container]",
  classes: {
    notificationClass: "nu_notification",
    headingWrapperClass: "nu_notification-heading-wrapper",
    iconClass: "nu_notification-icon",
    headingClass: "nu_notification-heading",
    bodyClass: "nu_notification-body",
    progressBarClass: "nu_notification-progress-bar"
  },
  icons: {
    success: icons.svg.success,
    warning: icons.svg.warning,
    error: icons.svg.error,
    debug: icons.svg.debug,
    spinner: icons.svg.spinner,
    info: icons.svg.info
  },
  injectCss: true,
  theme: "light"
};
function configureNotifications(options) {
  const safeOptions = validateAndMergeOptions(options);
  deepMerge(notificationConfig, safeOptions);
  if (notificationConfig.injectCss) {
    injectCss(defaultCss);
    if (notificationConfig.theme === "dark") {
      injectCss(darkModeCss);
      document.body.classList.add("nu_dark-mode");
    }
    if (notificationConfig.theme === "auto") {
      injectCss(autoModeCss);
    }
  }
}
function validateAndMergeOptions(userOptions, defaults) {
  return userOptions;
}
function deepMerge(target, source) {
  Object.keys(source).forEach((key) => {
    if (source[key] && typeof source[key] === "object" && !(source[key] instanceof Array)) {
      if (!target[key]) {
        target[key] = {};
      }
      deepMerge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  });
}
const defaultOptions = {
  heading: "",
  // Required
  body: "",
  duration: 3500,
  clickToClose: true
};
function getOptions(userOptions) {
  let options = { ...defaultOptions, ...userOptions };
  let heading = options.heading;
  let body = options.body;
  let duration = options.duration;
  let clickToClose = options.clickToClose;
  return { heading, body, duration, clickToClose };
}
function closeNotification(notification, duration) {
  let closeTimeout;
  if (duration > 0) {
    const progressElement = notification.querySelector(
      "[nu_notification-progress-bar]"
    );
    if (progressElement) {
      progressElement.style.animationName = "nu_progress-bar";
      progressElement.style.animationDuration = `${duration}ms`;
      progressElement.style.animationTimingFunction = "linear";
      progressElement.style.animationFillMode = "forwards";
    }
    notification.addEventListener("mouseover", () => {
      if (progressElement) {
        progressElement.style.animationPlayState = "paused";
      }
      clearTimeout(closeTimeout);
    });
    notification.addEventListener("mouseout", () => {
      if (progressElement) {
        progressElement.style.animationPlayState = "running";
      }
      closeTimeout = setTimeout(() => {
        notification.style.opacity = "0";
        setTimeout(() => {
          if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
          }
        }, 250);
      }, duration);
    });
  }
  closeTimeout = setTimeout(() => {
    notification.style.opacity = "0";
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 250);
  }, duration);
}
function enableClickToClose(notification) {
  notification.style.cursor = "pointer";
  notification.addEventListener(
    "click",
    () => closeNotification(notification, 0)
  );
}
function populateNotification(container, type, heading, body, notificationId) {
  const {
    notificationClass,
    headingWrapperClass,
    iconClass,
    bodyClass,
    headingClass,
    progressBarClass
  } = notificationConfig.classes;
  const notificationToInject = `
<div nu_notification="${notificationId}" class="${notificationClass} is-${type}" >
  <div nu_heading-wrapper class="${headingWrapperClass}">
    <div nu_notification-icon class="${iconClass} is-${type}"">${icons.get(
    type
  )}</div>
    <div nu_notification-heading="true" class="${headingClass}">${heading}</div>
  </div>
  <div nu_notification-body class="${bodyClass}">${body}</div>
  <div nu_notification-progress-bar class="${progressBarClass}"></div>
</div>`;
  container.insertAdjacentHTML("beforeend", notificationToInject);
  const notification = container.querySelector(
    `[nu_notification="${notificationId}"]`
  );
  const bodyElement = notification.querySelector("[nu_notification-body]");
  if (!body)
    bodyElement.style.display = "none";
  return notification;
}
function createNotification(type, heading, body, duration, clickToClose) {
  const container = document.querySelector(
    notificationConfig.containerSelector
  );
  const notificationId = Math.random().toString(36).substring(2, 11);
  const notification = populateNotification(
    container,
    type,
    heading,
    body,
    notificationId
  );
  container.appendChild(notification);
  if (duration) {
    closeNotification(notification, duration);
  }
  if (clickToClose)
    enableClickToClose(notification);
  return notification;
}
function startLoader(userOptions) {
  let { heading, body } = getOptions(userOptions);
  return createNotification("spinner", heading, body, null, false);
}
function updateLoader(loader, userOptions) {
  let { heading, body } = getOptions(userOptions);
  const headingElement = loader.querySelector("[nu_notification-heading]");
  if (headingElement && heading)
    headingElement.innerHTML = heading;
  const bodyElement = loader.querySelector("[nu_notification-body]");
  if (bodyElement && body) {
    bodyElement.innerHTML = body;
    bodyElement.style.display = "block";
  } else {
    bodyElement.innerHTML = "";
    bodyElement.style.display = "none";
  }
}
class Loader {
  constructor(options) {
    this.element = null;
    if (!this.element) {
      this.element = startLoader(options);
    }
  }
  update(options) {
    if (!this.element)
      return;
    updateLoader(this.element, options);
  }
  close() {
    if (this.element) {
      this.element.remove();
    }
  }
}
const notify = {
  success,
  error,
  warning,
  debug,
  info
};
function success(userOptions) {
  let { heading, body, duration, clickToClose } = getOptions(userOptions);
  return createNotification("success", heading, body, duration, clickToClose);
}
function error(userOptions) {
  let { heading, body, duration, clickToClose } = getOptions(userOptions);
  return createNotification("error", heading, body, duration, clickToClose);
}
function warning(userOptions) {
  let { heading, body, duration, clickToClose } = getOptions(userOptions);
  return createNotification("warning", heading, body, duration, clickToClose);
}
function debug(userOptions) {
  let { heading, body, duration, clickToClose } = getOptions(userOptions);
  return createNotification("debug", heading, body, duration, clickToClose);
}
function info(userOptions) {
  let { heading, body, duration, clickToClose } = getOptions(userOptions);
  return createNotification("info", heading, body, duration, clickToClose);
}
class Notification {
  constructor({
    type,
    heading,
    body = "",
    duration = defaultOptions.duration,
    clickToClose = defaultOptions.clickToClose
  }) {
    this.element = null;
    this.type = type;
    this.heading = heading;
    this.body = body;
    this.duration = duration;
    this.clickToClose = clickToClose;
    switch (this.type) {
      case "success":
        this.element = notify.success({
          heading: this.heading,
          body: this.body,
          duration: this.duration,
          clickToClose: this.clickToClose
        });
        break;
      case "error":
        this.element = notify.error({
          heading: this.heading,
          body: this.body,
          duration: this.duration,
          clickToClose: this.clickToClose
        });
        break;
      case "warning":
        this.element = notify.warning({
          heading: this.heading,
          body: this.body,
          duration: this.duration,
          clickToClose: this.clickToClose
        });
        break;
      case "debug":
        this.element = notify.debug({
          heading: this.heading,
          body: this.body,
          duration: this.duration,
          clickToClose: this.clickToClose
        });
        break;
      case "info":
        this.element = notify.info({
          heading: this.heading,
          body: this.body,
          duration: this.duration,
          clickToClose: this.clickToClose
        });
        break;
    }
  }
  remove() {
    if (this.element) {
      this.element.remove();
    }
  }
}
window.notificationUtil = {
  Loader,
  Notification,
  configureNotifications,
  notificationConfig
};
})()