/* @flow */

import prefixAll from 'inline-style-prefixer/static';
import raf from 'raf';
import React, { Component } from 'react';

import TopNavigation from './TopNavigation';

const getViewportHeight = (): number => (
  window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight
);
const getDocumentHeight = (): number => {
  const { body, documentElement } = document;

  return Math.max(
    body.scrollHeight, documentElement.scrollHeight,
    body.offsetHeight, documentElement.offsetHeight,
    body.clientHeight, documentElement.clientHeight,
  );
};
const getScrollY = (): number => {
  if (window.pageYOffset !== undefined) {
    return window.pageYOffset;
  } else if (window.scrollTop !== undefined) {
    return window.scrollTop;
  }

  return (
    document.documentElement ||
    document.body.parentNode ||
    document.body
  ).scrollTop;
};

type State = {
  pinned: boolean,
};

export default class StickyNavigation extends Component {
  state: State;

  /* eslint-disable react/sort-comp */
  lastKnownScrollY = 0;
  ticking = false;
  state = {
    pinned: false,
  };
  /* eslint-enable react/sort-comp */

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  shouldComponentUpdate(nextProps: any, nextState: State) {
    return nextState.pinned !== this.state.pinned;
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (!this.ticking) {
      this.ticking = true;
      raf(this.update);
    }
  };

  update = () => {
    const currentScrollY = getScrollY();
    const scrollerPhysicalHeight = getViewportHeight();
    const scrollerHeight = getDocumentHeight();

    const pastTop = currentScrollY < 0;
    const pastBottom = currentScrollY + scrollerPhysicalHeight > scrollerHeight;

    if (!pastTop && !pastBottom) {
      const distanceScrolled = currentScrollY - this.lastKnownScrollY;
      const sideNav = document.getElementById('side-nav');
      const sideNavBottom = sideNav.offsetTop + sideNav.offsetHeight;

      if (currentScrollY <= sideNavBottom || distanceScrolled > 0) {
        // we're at the top or past the header and scrolling down
        this.setState({ pinned: false });
      } else if (distanceScrolled < -5) {
        // we're scrolling up
        this.setState({ pinned: true });
      }
    }

    this.lastKnownScrollY = currentScrollY;
    this.ticking = false;
  };

  render(): React$Element<any> {
    return (
      <TopNavigation
        className="fixed z-999 w-100 top-0 left-0"
        style={prefixAll({
          transition: 'transform 0.2s ease',
          transform: `translateY(${this.state.pinned ? '0' : '-100%'})`,
        })}
        mobileMenuVisible={false}
      />
    );
  }
}

