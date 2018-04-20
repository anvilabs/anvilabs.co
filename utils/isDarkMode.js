/* @flow */

const DARK_MODE_START_HOUR = 16;
const DARK_MODE_END_HOUR = 7;

const isDarkMode = () => {
  if (!(typeof window !== 'undefined' && window.document)) {
    return false;
  }

  const time = new Date();
  const hours = time.getHours();

  return hours >= DARK_MODE_START_HOUR || hours < DARK_MODE_END_HOUR;
};

export default isDarkMode();
