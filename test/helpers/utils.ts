import { platformName } from './constants.ts';

export const ifiOS = (): boolean => {
  return platformName?.toLowerCase() === 'ios';
};
