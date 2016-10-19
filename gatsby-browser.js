/* @flow */

import smoothScroll from 'smoothScroll';

const onRouteUpdate = (location: Object) => {
  if (location.action === 'PUSH') {
    smoothScroll(document.querySelector('#content'));
  }
};

export { onRouteUpdate }; // eslint-disable-line import/prefer-default-export
