import { endLoader } from './end-loader';
import { startLoader } from './start-loader';
import { updateLoader } from './update-loader';

export const loader = {
  start: startLoader,
  update: updateLoader,
  end: endLoader
};
