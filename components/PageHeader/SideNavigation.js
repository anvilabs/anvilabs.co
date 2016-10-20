/* @flow */

// eslint-disable-next-line import/no-extraneous-dependencies, import/extensions
import { config } from 'config';
import { Link } from 'react-router';
import cx from 'classnames';
import React from 'react';

import NavigationLink from '../NavigationLink';
import ResponsiveImage from '../ResponsiveImage';

const { menuLinks } = config;

const SideNavigation = ({ className }: { className?: string }) => (
  <nav id="side-nav" className={cx('cf', className)}>
    <Link
      to="/"
      className="v-mid dark-gray link dim fr fn-l"
    >
      <ResponsiveImage
        srcSet={[
          require('../../static/logo.png'),
          require('../../static/logo@2x.png'),
          require('../../static/logo@3x.png'),
        ]}
        alt="Anvilabs Logo"
        className="dib h3 w-auto"
      />
    </Link>
    <ul className="list pa0 mt0 mt5-l fl fn-l">
      {menuLinks.map((
        { to, title }: { to: string, title: string },
      ) => (
        <li key={to} className="db">
          <NavigationLink
            to={to}
            title={title}
            className="f3 db pv2"
          />
        </li>
      ))}
    </ul>
  </nav>
);

export default SideNavigation;
