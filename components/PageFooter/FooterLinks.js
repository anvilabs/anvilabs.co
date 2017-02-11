/* @flow */

// eslint-disable-next-line import/no-extraneous-dependencies, import/extensions
import {config} from 'config';
import cx from 'classnames';
import React from 'react';

const {footerLinks} = config;

const FooterLinks = ({className}: {className?: string}) => (
  <ul className={cx('list pa0', className)}>
    {footerLinks.map(({href, title}: {href: string, title: string}) => (
      <li key={href} className="h2">
        <a href={href} className="v-mid">{title}</a>
      </li>
    ))}
  </ul>
);

export default FooterLinks;
