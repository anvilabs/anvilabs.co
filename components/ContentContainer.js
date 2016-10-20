/* @flow */

import cx from 'classnames';
import React from 'react';

const ContentContainer = ({ className, children }: {
  className?: string,
  children?: React$Element<any> | Array<React$Element<any>>,
}) => (
  <section
    id="content"
    className={cx('dark-gray lh-copy pa3 pa5-ns', className)}
  >
    {children}
  </section>
);

export default ContentContainer;
