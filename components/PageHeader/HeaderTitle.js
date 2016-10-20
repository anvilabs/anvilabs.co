/* @flow */

import cx from 'classnames';
import React from 'react';

const HeaderTitle = ({ className, children }: {
  className?: string,
  children?: React$Element<any> | Array<React$Element<any>>,
}) => (
  <h1 className={cx('f1 f-5-l fw3 mt0', className)}>{children}</h1>
);

export default HeaderTitle;
