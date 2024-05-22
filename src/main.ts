import { notify as simpliNoti } from './notifications';

// Pushes function to window object so it can be called in Webflow
if (typeof window !== 'undefined') {
  (window as any).simpliNoti = simpliNoti;
}

export { simpliNoti };

/**
 * expected usage:
 * should probably be a class instead of a function
 * That way it returns an instance of the loader, and the update
 * and end methods can be called on that instance
 * rather than passing the loader around
 *
 */
let loader = simpliNoti.loader.start({
  heading: 'Loading...',
  message: 'Please wait...'
});
simpliNoti.loader.update(loader, {
  heading: 'Almost there...',
  message: 'Just a few more seconds...'
});
simpliNoti.loader.end(loader, {
  heading: 'Done!',
  message: 'You did it!'
});

simpliNoti.success({
  heading: 'Success!',
  message: 'You did it!',
  duration: 5000,
  clickToClose: false
});
simpliNoti.error({
  heading: 'Error!',
  message: 'Something went wrong!',
  duration: null,
  clickToClose: true
});
