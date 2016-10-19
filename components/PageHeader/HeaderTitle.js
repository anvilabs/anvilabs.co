/* @flow */

import cx from 'classnames';
import React from 'react';

const HeaderTitle = ({ className, children }: {
  className?: string,
  children?: React$Element<any> | Array<React$Element<any>>,
}) => (
  <h2 className={cx('f1 f-5-l fw3 mt0', className)}>{children}</h2>
);

export default HeaderTitle;
