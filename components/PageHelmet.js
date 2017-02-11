/* @flow */

// eslint-disable-next-line import/no-extraneous-dependencies, import/extensions
import {config} from 'config';
import Helmet from 'react-helmet';
import React, {PropTypes} from 'react';

const {siteTitle, siteDescription, hostname} = config;

const PageHelmet = (
  {
    title,
    mixpanelTitle,
    description,
    ogImageSrc,
    twitterImageSrc,
  }: {
    title?: string,
    mixpanelTitle: string,
    description?: string,
    ogImageSrc?: string,
    twitterImageSrc?: string,
  },
  {
    location,
  }: {
    location: {pathname: string},
  },
): React$Element<any> => {
  const meta: Array<{
    name?: string,
    property?: string,
    content: ?string,
  }> = [
    {
      name: 'description',
      content: description,
    },
    {
      name: 'mixpanelTitle',
      content: mixpanelTitle,
    },
    {
      property: 'og:title',
      content: title,
    },
    {
      name: 'og:description',
      content: description,
    },
    {
      property: 'og:url',
      content: `${hostname}${location.pathname}`,
    },
    {
      property: 'og:image',
      content: ogImageSrc,
    },
    {
      name: 'twitter:title',
      content: title,
    },
    {
      name: 'twitter:description',
      content: description,
    },
    {
      name: 'twitter:image',
      content: twitterImageSrc,
    },
  ];

  return <Helmet title={title} meta={meta} />;
};

PageHelmet.defaultProps = {
  title: siteTitle,
  description: siteDescription,
  ogImageSrc: (
    `${hostname}${((require('../static/og-image.jpg'): any): string)}`
  ),
  twitterImageSrc: (
    `${hostname}${((require('../static/twitter-image.jpg'): any): string)}`
  ),
};
PageHelmet.contextTypes = {
  location: PropTypes.object.isRequired,
};

export default PageHelmet;
