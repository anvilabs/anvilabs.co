/* @flow */

import cx from 'classnames';
import React from 'react';

const HeaderTitle = ({
  className,
  children,
}: {
  className?: string,
  children?: React$Element<any> | $ReadOnlyArray<React$Element<any>>,
}) => <h2 className={cx('f3 f2-l fw3 ma0', className)}>{children}</h2>;

export default HeaderTitle;
