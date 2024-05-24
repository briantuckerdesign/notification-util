# Notification util

Very simple notification system for JS/TS projects.

## Installation

`npm i notification-util`

## Configuration

Only has to be called once, before using the `Notification` or `Loader` class.

```typescript
import {
  Notification,
  Loader,
  configureNotifications
} from 'notification-util';

configureNotification({}); // Required, but can be empty
```

### Configuration options

You must run `configureNotification` before using the `Notification` or `Loader` class.

To run without customization, pass an empty object as argument.

You can override any of default settings by following the structure below.

![Notifiation dissection](./src/images/Notification%20breakdown.png)

| Option                | Description                                                                                     |
| --------------------- | ----------------------------------------------------------------------------------------------- |
| containerSelector     | Selector for notification container. Attribute, ID, class as `string` with `#` or `.` as needed |
| classes               | Override the default CSS classes by providing your own                                          |
| → notificationClass   | CSS class as `string`, no prefixed `.`                                                          |
| → headingWrapperClass | CSS class as `string`, no prefixed `.`                                                          |
| → iconClass           | CSS class as `string`, no prefixed `.`                                                          |
| → messageClass        | CSS class as `string`, no prefixed `.`                                                          |
| → headingClass        | CSS class as `string`, no prefixed `.`                                                          |
| icons                 | Override the default icons by providing your own.                                               |
| → success             | `string` injected as HTML                                                                       |
| → warning             | `string` injected as HTML                                                                       |
| → error               | `string` injected as HTML                                                                       |
| → debug               | `string` injected as HTML                                                                       |
| → loading             | `string` injected as HTML                                                                       |
| injectCss             | `boolean` Inject default CSS. If disabling, be sure to provide your own animation CSS.          |

#### Defaults

```typescript
configureNotification({
  containerSelector: '[sn-notification-container]',
  classes: {
    notificationClass: 'sn_notification',
    headingWrapperClass: 'sn_notification-heading-wrapper',
    iconClass: 'sn_notification-icon',
    messageClass: 'sn_notification-message',
    headingClass: 'sn_notification-heading'
  },
  icons: {
    success: icons.success,
    warning: icons.warning,
    error: icons.error,
    debug: icons.debug,
    loading: icons.loading
  },
  injectCss: false
});
```

#### Animation CSS provided

growWidth is used for showing duration of notification, rotation is used in loading icon.

```css
@keyframes growWidth {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
```

## Notification

Displays a notification with a heading and message. Can be closed by clicking on it when enabled.

Returns an object if you need to remove it programmatically. e.g.: `myNotification.remove()`.

### Options

```typescript
new Notification({
  type: 'success' | 'warning' | 'error' | 'debug', // Required
  heading: string, // Required
  message: string,
  duration: number | null, // Default: 3500 (ms), null for infinite
  clickToClose: boolean // Default: true
});
```

### Example usage

```typescript
import { Notification, configureNotifications } from 'notification-util';

configureNotification({}); // Required, but can be empty

new Notification({
  type: 'success',
  heading: 'Success heading',
  message: 'Success message'
});
```

## Loader

Displays a spinning loader with a heading and message. Returns an object with methods to update the loader and close it.

### Options

```typescript
new Loader({
  heading: string, // Required
  message: string
});
```

### Example usage

```typescript
import { Loader, configureNotifications } from 'notification-util';

configureNotification({}); // Required, but can be empty

const myLoaderMessage = new Loader({
  heading: 'Loader heading',
  message: 'Loader message'
});

// some time passes

myLoaderMessage.update({
  heading: 'Updated heading',
  message: 'Updated message'
});

// some time passes

myLoaderMessage.close();
```
