/* @flow */

import React from 'react';

const Separator = ({className}: {className?: string}) => (
  <div className={className}>
    <div className="separator ma0 w-100 h3" />
  </div>
);

Separator.defaultProps = {
  className: 'ph3 ph5-ns pv4 pv0-ns',
};

export default Separator;
