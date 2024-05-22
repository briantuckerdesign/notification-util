export function closeNotification(notification, duration) {
  setTimeout(() => {
    notification.style.opacity = '0';
    setTimeout(() => {
      if (notification.parentNode)
        notification.parentNode.removeChild(notification);
    }, 250);
  }, duration);
}
