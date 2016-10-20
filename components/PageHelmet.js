/* @flow */

// eslint-disable-next-line import/no-extraneous-dependencies, import/extensions
import { config } from 'config';
import Helmet from 'react-helmet';
import React, { PropTypes } from 'react';

const { siteTitle, siteDescription, hostname } = config;

const PageHelmet = (
  {
    title,
    mixpanelTitle,
    description: rawDescription,
  }: {
    title?: string,
    mixpanelTitle: string,
    description?: string,
  },
  { location }: {
    location: { pathname: string },
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
      property: 'og:url',
      content: `${hostname}${location.pathname}`,
    },
    {
      name: 'twitter:title',
      content: title,
    },
    {
      name: 'twitter:description',
      content: description,
    },
  ];

  return (
    <Helmet
      title={title}
      meta={meta}
    />
  );
};

PageHelmet.defaultProps = {
  title: siteTitle,
  description: siteDescription,
};
PageHelmet.contextTypes = {
  location: PropTypes.object.isRequired,
};

export default PageHelmet;
