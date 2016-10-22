/* @flow */

// eslint-disable-next-line import/no-extraneous-dependencies, import/extensions
import { config } from 'config';
import Helmet from 'react-helmet';
import React from 'react';

import { Analytics, WebFonts } from './components';

const { hostname } = config;
const BUILD_TIME = new Date().getTime();

const Html = ({ body }: { body: string }): React$Element<any> => {
  const head = Helmet.rewind();
  const attrs = head.htmlAttributes.toComponent();

  /* eslint-disable fp/no-let, fp/no-mutation */
  let css;
  if (process.env.NODE_ENV !== 'development') {
    css = (
      <style
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: require('!raw!./public/styles.css'),
        }}
      />
    );
  }
  /* eslint-enable fp/no-let, fp/no-mutation */

  /* eslint-disable max-len */
  return (
    <html
      lang="en"
      {...attrs}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0" />
        <meta httpEquiv="Cache-Control" content="private" />
        {head.title.toComponent()}
        {head.meta.toComponent()}
        {css}

        <link rel="apple-touch-icon" sizes="180x180" href={require('./static/apple-touch-icon.png')} />
        <link rel="icon" type="image/png" href={require('./static/favicon-32x32.png')} sizes="32x32" />
        <link rel="icon" type="image/png" href={require('./static/favicon-16x16.png')} sizes="16x16" />
        <link rel="manifest" href={require('!file?name=/[hash].[ext]!./static/manifest.json')} />
        <link rel="mask-icon" href={require('./static/safari-pinned-tab.svg')} color="#ba4519" />
        <link rel="shortcut icon" href={require('!file?name=/[hash].[ext]!./static/favicon.ico')} />
        <link rel="alternate" href={`${hostname}/feed.xml`} type="application/rss+xml" title="Блог компании Anvilabs" />
        <meta name="apple-mobile-web-app-title" content="Anvilabs" />
        <meta name="application-name" content="Anvilabs" />
        <meta name="msapplication-config" content={require('!file?name=/[hash].[ext]!./static/browserconfig.xml')} />
        <meta name="theme-color" content="#ffffff" />

        <meta property="og:site_name" content="Anvilabs" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@anvilabs" />

        {head.link.toComponent()}
      </head>
      <body className="bg-white fw3">
        <div
          id="react-mount"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: body }}
        />
        <Analytics writeKey={config.analyticsKey} />
        <WebFonts
          config={{
            google: {
              families: ['Roboto+Mono:300,400,300i,400i:cyrillic'],
            },
          }}
        />
        <script src={`/bundle.js?t=${BUILD_TIME}`} />
      </body>
    </html>
  );
  /* eslint-enable max-len */
};

export default Html;
