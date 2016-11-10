/* @flow */

import cx from 'classnames';
import React from 'react';

import { isDarkMode } from '../utils';

const Main = ({ children }: {
  children?: React$Element<any> | Array<React$Element<any>>,
}) => (
  <main
    className={cx(
      'fw3',
      isDarkMode ? 'white dark-mode bg-dark-gray' : 'light-mode bg-white',
    )}
  >
    {children}
  </main>
);

export default Main;
