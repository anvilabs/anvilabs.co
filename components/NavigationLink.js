/* @flow */

import { Link } from 'react-router';
import cx from 'classnames';
import React from 'react';

const NavigationLink = ({ to, title, className }: {
  to: string,
  title: string,
  className?: string,
}) => (
  to.startsWith('#') ? (
    <a
      href={to}
      className={cx('link dim dark-gray strikethrough', className)}
    >
      <span>{title}</span>
    </a>
  ) : (
    <Link
      to={to}
      className={cx('link dim dark-gray strikethrough', className)}
      activeClassName="active"
      onlyActiveOnIndex
    >
      <span>{title}</span>
    </Link>
  )
);

export default NavigationLink;
