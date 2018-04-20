/* @flow */

import {Link} from 'react-router';
import cx from 'classnames';
import React from 'react';

import {isDarkMode} from '../utils';

const NavigationLink = ({
  to,
  title,
  className,
}: {
  to: string,
  title: string,
  className?: string,
}) =>
  to.startsWith('#') ? (
    <a
      href={to}
      className={cx(
        'strikethrough',
        isDarkMode ? 'white' : 'dark-gray',
        className
      )}
    >
      <span>{title}</span>
    </a>
  ) : (
    <Link
      to={to}
      className={cx(
        'strikethrough',
        isDarkMode ? 'white' : 'dark-gray',
        className
      )}
      activeClassName="active"
      onlyActiveOnIndex
    >
      <span>{title}</span>
    </Link>
  );

export default NavigationLink;
