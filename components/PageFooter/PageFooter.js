/* @flow */

import cx from 'classnames';
import React from 'react';

import {isDarkMode} from '../../utils';
import CTA from './CTA';
import FooterLinks from './FooterLinks';
import NewsletterForm from './NewsletterForm';

const PageFooter = () => (
  <footer className={cx('pa3 pa5-ns lh-copy', !isDarkMode && 'dark-gray')}>
    <div className="flex flex-wrap justify-between mb5">
      <CTA className="w-100 w-40-l ma0 mb5 mb0-l" />
      <FooterLinks className="w-100 w-40-m w-10-l ma0 mb5 mb0-ns" />
      <NewsletterForm className="w-100 w-60-m w-30-l ma0" />
    </div>
    <div className="flex flex-wrap">
      <p className="w-100 w-50-ns ma0">© 2018 ТОО «Anvilabs»</p>
      <p className="w-100 w-50-ns tr-ns ma0">
        Привет из Алматы,{' '}
        <span role="img" aria-label="Kazakhstan flag">
          🇰🇿
        </span>{' '}
        (
        <a href="https://github.com/anvilabs/anvilabs.co">Исходники сайта</a>
        )
      </p>
    </div>
  </footer>
);

export default PageFooter;
