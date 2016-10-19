/* @flow */

import { config } from 'config';
import cx from 'classnames';
import React from 'react';

const { footerLinks } = config;

const FooterLinks = ({ className }: { className?: string }) => (
  <ul className={cx('list pa0', className)}>
    {footerLinks.map(({ href, title }: { href: string, title: string }) => (
      <li
        key={href}
      >
        <a href={href} className="link dim red">{title}</a>
      </li>
    ))}
  </ul>
);

export default FooterLinks;
