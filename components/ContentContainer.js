/* @flow */

import React from 'react';

const ContentContainer = ({ children }: {
  children?: React$Element<any> | Array<React$Element<any>>,
}) => (
  <section
    id="content"
    className="dark-gray lh-copy pa3 pa5-ns"
  >
    {children}
  </section>
);

export default ContentContainer;
