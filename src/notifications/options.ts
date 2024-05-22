// Default options
export const defaultOptions = {
  heading: '', // Required
  message: '',
  duration: 3500,
  clickToClose: true,
  showSuccess: true
};

export function getOptions(userOptions: any) {
  let options = { ...defaultOptions, ...userOptions };
  if (!options.heading)
    throw new Error('Heading is required for success notification');
  let heading = options.heading;
  let message = options.message;
  let duration = options.duration;
  let clickToClose = options.clickToClose;
  let showSuccess = options.showSuccess;
  return { heading, message, duration, clickToClose, showSuccess };
}
