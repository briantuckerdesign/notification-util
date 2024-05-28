# notify-util

Very simple notification system for JS/TS projects.

[Live example](https://notify-util.bybrian.io/)

## Installation via NPM

`npm i notify-util`

Alternatively, you can include the bundled js file in `dist`, where `notifyUtil` is available in the window.


## Quick start

Have a div with attribute `sn-notification-container`. 
You can use the built in class if you want. It puts it in the top right of the page and adds gap between each notification.

```html
<div nu_notification-container class="nu_notification-container"></div>
```

```typescript
import notifyUtil from 'notify-util'

notifyUtil.configure({});

new notifyUtil.Notification({
  type: "success",
  heading: "Wow that was fast!",
  body: "Skrt skrt",
});
```

## Configuration

```typescript
import notifyUtil from 'notify-util'

notifyUtil.configure({
  // options here
});
```

### Configuration options

You must run `configure` before using the `Notification` class.

To run without customization, pass an empty object as argument.

You can override any of default settings by following the structure below.

![Notifiation dissection](./assets/Notification%20breakdown.png)

| Option                | Description                                                                                     |
| --------------------- | ----------------------------------------------------------------------------------------------- |
| containerSelector     | Selector for notification container. Attribute, ID, class as `string` with `#` or `.` as needed |
| classes               | Override the default CSS classes by providing your own                                          |
| → notificationClass   | CSS class as `string`, no prefixed `.`                                                          |
| → headingWrapperClass | CSS class as `string`, no prefixed `.`                                                          |
| → iconClass           | CSS class as `string`, no prefixed `.`                                                          |
| → headingClass        | CSS class as `string`, no prefixed `.`                                                          |
| → bodyClass           | CSS class as `string`, no prefixed `.`                                                          |
| → progressBarClass    | CSS class as `string`, no prefixed `.`                                                          |
| icons                 | Override the default icons by providing your own.                                               |
| → success             | `string` injected as HTML                                                                       |
| → warning             | `string` injected as HTML                                                                       |
| → error               | `string` injected as HTML                                                                       |
| → debug               | `string` injected as HTML                                                                       |
| → loading             | `string` injected as HTML                                                                       |
| → spinner             | `string` injected as HTML                                                                       |
| Theme                 | `string` light / dark / auto / none                                                             |

#### Defaults

```typescript
configureNotification({
  containerSelector: '[nu_notification-container]',
  classes: {
    notificationClass: 'nu_notification',
    headingWrapperClass: 'nu_notification-heading-wrapper',
    iconClass: 'nu_notification-icon',
    headingClass: 'nu_notification-heading',
    bodyClass: 'nu_notification-body',
    progressBarClass: 'nu_notification-progress-bar'
  },
  icons: {
    success: icons.svg.success,
    warning: icons.svg.warning,
    error: icons.svg.error,
    debug: icons.svg.debug,
    spinner: icons.svg.spinner,
    info: icons.svg.info
  },
  theme: 'light'
});
```

## Notification

Displays a notification with a heading and message. Can be closed by clicking on it when enabled.

Returns an object if you need to remove it programmatically. e.g.: `myNotification.remove()`.

### Options

For spinner, `clickToClose` is forced `false` and `duration` is forced `null`.

```typescript
new notifyUtil.Notification({
  type: 'success' | 'warning' | 'error' | 'debug' | 'info' | 'spinner', // Required
  heading: string, // Required
  body: string,
  duration: number | null, // Default: 3500 (ms), null for infinite
  clickToClose: boolean // Default: true
});
```

### Examples 

#### Success notification

```typescript
new notifyUtil.Notification({
  type: 'success',
  heading: 'Success heading',
  body: 'Success message'
});
```

#### Spinner

```typescript
const loadingIndicator = new notifyUtil.Notification({
  type: 'spinner',
  heading: 'Loading...',
  body: 'Working on it'
});

// some time passes

loadingIndicator.update({
  heading: 'Loading...',
  body: 'Almost there'
});

// some time passes

loadingIndicator.close();
```
