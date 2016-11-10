/* @flow */

import smoothScroll from 'smoothscroll';

const onRouteUpdate = (location: Object) => {
  if (location.hash) {
    setTimeout(() => {
      smoothScroll(document.querySelector(`${location.hash}`));
    }, 0);
  } else if (
    location.action === 'PUSH' &&
    !location.pathname.startsWith('/blog') &&
    location.pathname !== '/'
  ) {
    setTimeout(() => {
      smoothScroll(document.querySelector('#content'));
    }, 0);
  }
};

export { onRouteUpdate }; // eslint-disable-line import/prefer-default-export
