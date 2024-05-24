(() => {
const defaultCss = `
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
function injectCss() {
  const style = document.createElement("style");
  style.innerHTML = defaultCss;
  document.head.appendChild(style);
}
const debugIcon = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--bx" 
	width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
	<path fill="#0077ff" d="m16.895 6.519l2.813-2.812l-1.414-1.414l-2.846 2.846a6.575 6.575 0 0 0-.723-.454a5.778 5.778 0 0 0-5.45 0c-.25.132-.488.287-.722.453L5.707 2.293L4.293 3.707l2.813 2.812A8.473 8.473 0 0 0 5.756 9H2v2h2.307c-.065.495-.107.997-.107 1.5c0 .507.042 1.013.107 1.511H2v2h2.753c.013.039.021.08.034.118c.188.555.421 1.093.695 1.6c.044.081.095.155.141.234l-2.33 2.33l1.414 1.414l2.11-2.111a7.477 7.477 0 0 0 2.068 1.619c.479.253.982.449 1.496.58a6.515 6.515 0 0 0 3.237.001a6.812 6.812 0 0 0 1.496-.58c.465-.246.914-.55 1.333-.904c.258-.218.5-.462.734-.716l2.111 2.111l1.414-1.414l-2.33-2.33c.047-.08.098-.155.142-.236c.273-.505.507-1.043.694-1.599c.013-.039.021-.079.034-.118H22v-2h-2.308c.065-.499.107-1.004.107-1.511c0-.503-.042-1.005-.106-1.5H22V9h-3.756a8.494 8.494 0 0 0-1.349-2.481zM8.681 7.748c.445-.558.96-.993 1.528-1.294a3.773 3.773 0 0 1 3.581 0a4.894 4.894 0 0 1 1.53 1.295c.299.373.54.8.753 1.251H7.927c.214-.451.454-.879.754-1.252zM17.8 12.5c0 .522-.042 1.044-.126 1.553c-.079.49-.199.973-.355 1.436a8.28 8.28 0 0 1-.559 1.288a7.59 7.59 0 0 1-.733 1.11c-.267.333-.56.636-.869.898c-.31.261-.639.484-.979.664s-.695.317-1.057.41c-.04.01-.082.014-.122.023V14h-2v5.881c-.04-.009-.082-.013-.122-.023c-.361-.093-.717-.23-1.057-.41s-.669-.403-.978-.664a6.462 6.462 0 0 1-.871-.899a7.402 7.402 0 0 1-.731-1.108a8.337 8.337 0 0 1-.56-1.289a9.075 9.075 0 0 1-.356-1.438A9.61 9.61 0 0 1 6.319 11H17.68c.079.491.12.995.12 1.5z"></path>
</svg>
`;
const errorIcon = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" 
	class="iconify iconify--bx" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
	<path fill="#ff005d" d="M11.953 2C6.465 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.493 2 11.953 2zM12 20c-4.411 0-8-3.589-8-8s3.567-8 7.953-8C16.391 4 20 7.589 20 12s-3.589 8-8 8z"></path>
	<path fill="#ff005d" d="M11 7h2v7h-2zm0 8h2v2h-2z"></path>
</svg>`;
const loadingIcon = `<div><span class="sn_spinner"></span></div>`;
const successIcon = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" 
	class="iconify iconify--bx" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
	<path fill="#00c465" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8"></path>
	<path fill="#00c465" d="M9.999 13.587L7.7 11.292l-1.412 1.416l3.713 3.705l6.706-6.706l-1.414-1.414z"></path>
</svg>`;
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
    case "loading":
      iconHTML = notificationConfig.icons.loading;
      break;
  }
  return iconHTML;
}
const warningIcon = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" 
	class="iconify iconify--bx" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
	<path fill="#e0b300" d="M11.001 10h2v5h-2zM11 16h2v2h-2z"></path>
	<path fill="#e0b300" d="M13.768 4.2C13.42 3.545 12.742 3.138 12 3.138s-1.42.407-1.768 1.063L2.894 18.064a1.986 1.986 0 0 0 .054 1.968A1.984 1.984 0 0 0 4.661 21h14.678c.708 0 1.349-.362 1.714-.968a1.989 1.989 0 0 0 .054-1.968L13.768 4.2zM4.661 19L12 5.137L19.344 19H4.661z">
	</path>
</svg>`;
let icons = {
  get: getIcon,
  svg: {
    success: successIcon,
    warning: warningIcon,
    error: errorIcon,
    debug: debugIcon,
    loading: loadingIcon
  }
};
const notificationConfig = {
  containerSelector: "[sn-notification-container]",
  classes: {
    notificationClass: "sn_notification",
    headingWrapperClass: "sn_notification-heading-wrapper",
    iconClass: "sn_notification-icon",
    messageClass: "sn_notification-message",
    headingClass: "sn_notification-heading",
    durationClass: "sn_notification-duration"
  },
  icons: {
    success: icons.svg.success,
    warning: icons.svg.warning,
    error: icons.svg.error,
    debug: icons.svg.debug,
    loading: icons.svg.loading
  },
  injectCss: true
};
function configureNotifications(options) {
  const safeOptions = validateAndMergeOptions(options);
  deepMerge(notificationConfig, safeOptions);
  if (notificationConfig.injectCss) {
    injectCss();
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
  message: "",
  duration: 3500,
  clickToClose: true
};
function getOptions(userOptions) {
  let options = { ...defaultOptions, ...userOptions };
  let heading = options.heading;
  let message = options.message;
  let duration = options.duration;
  let clickToClose = options.clickToClose;
  return { heading, message, duration, clickToClose };
}
function closeNotification(notification, duration) {
  if (duration > 0) {
    const durationElement = notification.querySelector(
      "[sn-notification-duration]"
    );
    if (durationElement) {
      durationElement.style.animationName = "growWidth";
      durationElement.style.animationDuration = `${duration}ms`;
      durationElement.style.animationTimingFunction = "linear";
      durationElement.style.animationFillMode = "forwards";
    }
  }
  setTimeout(() => {
    notification.style.opacity = "0";
    setTimeout(() => {
      if (notification.parentNode)
        notification.parentNode.removeChild(notification);
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
function populateNotification(container, type, heading, message, notificationId) {
  const {
    notificationClass,
    headingWrapperClass,
    iconClass,
    messageClass,
    headingClass,
    durationClass
  } = notificationConfig.classes;
  const notificationToInject = `
<div sn-notification="${notificationId}" class="${notificationClass} is-${type}" >
  <div sn-heading-wrapper class="${headingWrapperClass}">
    <div sn-notification-icon class="${iconClass}">${icons.get(type)}</div>
    <div sn-notification-heading="true" class="${headingClass}">${heading}</div>
  </div>
  <div sn-notification-message class="${messageClass}">${message}</div>
  <div sn-notification-duration class="${durationClass}"></div>
</div>`;
  container.insertAdjacentHTML("beforeend", notificationToInject);
  const notification = container.querySelector(
    `[sn-notification="${notificationId}"]`
  );
  const messageElement = notification.querySelector(
    "[sn-notification-message]"
  );
  if (!message)
    messageElement.style.display = "none";
  return notification;
}
function createNotification(type, heading, message, duration, clickToClose) {
  const container = document.querySelector(
    notificationConfig.containerSelector
  );
  const notificationId = Math.random().toString(36).substring(2, 11);
  const notification = populateNotification(
    container,
    type,
    heading,
    message,
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
  let { heading, message } = getOptions(userOptions);
  return createNotification("loading", heading, message, null, false);
}
function updateLoader(loader, userOptions) {
  let { heading, message } = getOptions(userOptions);
  const headingElement = loader.querySelector("[sn-notification-heading]");
  if (headingElement && heading)
    headingElement.innerHTML = heading;
  const messageElement = loader.querySelector("[sn-notification-message]");
  if (messageElement && message) {
    messageElement.innerHTML = message;
    messageElement.style.display = "block";
  } else {
    messageElement.innerHTML = "";
    messageElement.style.display = "none";
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
  debug
};
function success(userOptions) {
  let { heading, message, duration, clickToClose } = getOptions(userOptions);
  return createNotification(
    "success",
    heading,
    message,
    duration,
    clickToClose
  );
}
function error(userOptions) {
  let { heading, message, duration, clickToClose } = getOptions(userOptions);
  return createNotification("error", heading, message, duration, clickToClose);
}
function warning(userOptions) {
  let { heading, message, duration, clickToClose } = getOptions(userOptions);
  return createNotification(
    "warning",
    heading,
    message,
    duration,
    clickToClose
  );
}
function debug(userOptions) {
  let { heading, message, duration, clickToClose } = getOptions(userOptions);
  return createNotification("debug", heading, message, duration, clickToClose);
}
class Notification {
  constructor({
    type,
    heading,
    message = "",
    duration = defaultOptions.duration,
    clickToClose = defaultOptions.clickToClose
  }) {
    this.element = null;
    this.type = type;
    this.heading = heading;
    this.message = message;
    this.duration = duration;
    this.clickToClose = clickToClose;
    switch (this.type) {
      case "success":
        this.element = notify.success({
          heading: this.heading,
          message: this.message,
          duration: this.duration,
          clickToClose: this.clickToClose
        });
        break;
      case "error":
        this.element = notify.error({
          heading: this.heading,
          message: this.message,
          duration: this.duration,
          clickToClose: this.clickToClose
        });
        break;
      case "warning":
        this.element = notify.warning({
          heading: this.heading,
          message: this.message,
          duration: this.duration,
          clickToClose: this.clickToClose
        });
        break;
      case "debug":
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
export {
  Loader,
  Notification,
  configureNotifications,
  notificationConfig
};
})()