/* @flow */

import cx from 'classnames';
import React from 'react';

const HeaderTitle = ({ className, children }: {
  className?: string,
  children?: React$Element<any> | Array<React$Element<any>>,
}) => (
  <h4 className={cx('f3 f2-l fw3 ma0', className)}>{children}</h4>
);

export default HeaderTitle;
