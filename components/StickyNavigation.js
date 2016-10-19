/* @flow */

/* heavily borrows from https://github.com/KyleAMathews/react-headroom */

import { config } from 'config';
import { Link } from 'react-router';
import autobind from 'autobind-decorator';
import cx from 'classnames';
import prefixAll from 'inline-style-prefixer/static';
import raf from 'raf';
import React, { Component } from 'react';

import NavigationLink from './NavigationLink';

const { menuLinks } = config;

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
  state: 'unfixed',
  hidden: boolean,
  mobileMenuVisible: boolean,
};

export default class StickyNavigation extends Component {
  state: State;

  /* eslint-disable react/sort-comp */
  lastKnownScrollY = 0;
  ticking = false;
  state = {
    state: 'unfixed',
    hidden: true,
    mobileMenuVisible: false,
  };
  /* eslint-enable react/sort-comp */

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  @autobind
  handleScroll() {
    if (!this.ticking) {
      this.ticking = true;
      raf(this.update);
    }
  }

  unpin() {
    if (this.state.state === 'unpinned') return;

    this.setState({
      hidden: true,
      mobileMenuVisible: false,
    }, () => {
      setTimeout(() => {
        this.setState({ state: 'unpinned' });
      }, 0);
    });
  }

  pin() {
    if (this.state.state === 'pinned') return;

    this.setState({
      hidden: false,
      state: 'pinned',
    });
  }

  unfix() {
    if (this.state.state === 'unfixed') return;

    this.setState({
      hidden: true,
      state: 'unfixed',
      mobileMenuVisible: false,
    });
  }

  @autobind
  update() {
    const currentScrollY = getScrollY();
    const scrollerPhysicalHeight = getViewportHeight();
    const scrollerHeight = getDocumentHeight();

    const pastTop = currentScrollY < 0;
    const pastBottom = currentScrollY + scrollerPhysicalHeight > scrollerHeight;

    if (!pastTop && !pastBottom) {
      const distanceScrolled = currentScrollY - this.lastKnownScrollY;
      const sideNav = document.getElementById('side-nav');
      const sideNavBottom = sideNav.offsetTop + sideNav.offsetHeight;

      if (currentScrollY <= sideNavBottom) {
        // we're at the top and not fixed yet
        this.unfix();
      } else if (distanceScrolled > 0) {
        // we're past the header and scrolling down
        this.unpin();
      } else if (distanceScrolled < -5) {
        // we're scrolling up
        this.pin();
      }
    }

    this.lastKnownScrollY = currentScrollY;
    this.ticking = false;
  }

  render(): React$Element<any> {
    const { hidden, mobileMenuVisible } = this.state;

    return (
      <nav
        className="z-999 w-100 fixed top-0 left-0"
        style={prefixAll({
          transition: 'transform 0.2s ease',
          transform: `translateY(${hidden ? '-100%' : '0'})`,
        })}
      >
        <div
          // eslint-disable-next-line max-len
          className="z-1 relative pa3 ph5-ns bg-white flex items-center justify-between"
        >
          <a
            className="link dim dark-gray f4 dib db dn-ns pointer"
            onClick={() => {
              this.setState({
                mobileMenuVisible: !mobileMenuVisible,
              });
            }}
          >
            {mobileMenuVisible ? 'Закрыть' : 'Меню'}
          </a>
          <Link
            to="/"
            className="link dim"
          >
            <img
              src={require('../static/logo.png')}
              alt="Anvilabs Logo"
              className="dib w-auto"
              style={{ height: '3rem' }}
            />
          </Link>
          <div className="dn db-ns">
            {menuLinks.map((
              { to, title }: { to: string, title: string },
              idx: number,
            ) => (
              <NavigationLink
                key={to}
                to={to}
                title={title}
                className={cx(
                  'f5 f4-l dib',
                  (idx < menuLinks.length - 1) && 'mr3 mr4-ns',
                )}
              />
            ))}
          </div>
        </div>
        <div
          className="relative pa3 db dn-ns w-100 bg-white"
          style={{
            maxHeight: mobileMenuVisible ? '100%' : 0,
            opacity: mobileMenuVisible ? 1 : 0,
            visibility: mobileMenuVisible ? 'visible' : 'hidden',
            transform: `translateY(${mobileMenuVisible ? '0' : '-2em'})`,
            transition: 'transform 0.2s ease, opacity 0.2s ease, visibility 0s',
          }}
        >
          {menuLinks.map((
            { to, title }: { to: string, title: string },
          ) => (
            <NavigationLink
              key={to}
              to={to}
              title={title}
              className="db pv2 f4"
            />
          ))}
        </div>
      </nav>
    );
  }
}

