/* @flow */

const isDarkMode = () => {
  const time = new Date();
  const hours = time.getHours();

  return (hours > 21 || hours < 7);
};

export default isDarkMode();
