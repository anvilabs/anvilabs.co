/* @flow */

const isDarkMode = () => {
  if (!(typeof window !== 'undefined' && window.document)) {
    return false;
  }

  const time = new Date();
  const hours = time.getHours();

  return (hours >= 18 || hours < 7);
};

export default isDarkMode();
