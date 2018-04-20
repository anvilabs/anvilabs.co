/* @flow */

import cx from 'classnames';
import React from 'react';

import {isDarkMode} from '../utils';

const ContentContainer = ({
  className,
  children,
}: {
  className?: string,
  children?: React$Element<any> | $ReadOnlyArray<React$Element<any>>,
}) => (
  <section
    id="content"
    className={cx('lh-copy pa3 pa5-ns', !isDarkMode && 'dark-gray', className)}
  >
    {children}
  </section>
);

export default ContentContainer;
