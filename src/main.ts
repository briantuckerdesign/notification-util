import { Loader } from './loader';
import { Notification } from './notification';

// export default { Loader, Notification };

async function test() {
  new Notification({
    type: 'success',
    heading: 'Success',
    message: 'This is a success message'
  });

  new Notification({
    type: 'error',
    heading: 'Error',
    message: 'This is an error message',
    duration: null
  });
  new Notification({
    type: 'warning',
    heading: 'Warning',
    message: 'This is a warning message',
    clickToClose: false
  });
  new Notification({
    type: 'debug',
    heading: 'Debug',
    message: 'This is a debug message'
  });

  const loader = new Loader({
    heading: 'Loading',
    message: 'Please wait...'
  });
  console.log('loader created');
  // delay 1 second
  await new Promise((resolve) => setTimeout(resolve, 1000));
  loader.update({
    heading: 'Loading',
    message: 'Almost there...'
  });
  console.log('loader updated');
  // delay 1 second
  await new Promise((resolve) => setTimeout(resolve, 1000));
  loader.close();
  console.log('loader closed');
}
test();
