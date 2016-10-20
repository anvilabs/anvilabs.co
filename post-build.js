/* @flow */

import fs from 'fs';
import path from 'path';

import { parse as parseToml } from 'toml';
import _ from 'lodash/fp';
import sm from 'sitemap';

const config = parseToml(
  String(fs.readFileSync(path.join(__dirname, '/config.toml'))),
);
const { hostname } = config;

const generateSitemapUrl = (page: mixed): ?Object => {
  /* eslint-disable fp/no-let, fp/no-mutation */
  let pagePath;
  if (typeof page === 'object' && page !== null) {
    pagePath = page.path;
  } else {
    pagePath = page;
  }
  /* eslint-enable fp/no-let, fp/no-mutation */

  const nonIndexedPages = ['/404/'];
  const importantPages = ['/', '/work/'];
  const isRootPath = pagePath === '/';
  const isNonIndexedPage = _.some(_.identity, [
    _.includes(pagePath, nonIndexedPages),
    _.some(
      (nonIndexedPage: string) => _.startsWith(nonIndexedPage, pagePath),
      nonIndexedPages,
    ),
  ]);
  const isImportantPage = _.includes(pagePath, importantPages);

  if (!pagePath || isNonIndexedPage) return null;

  return {
    url: pagePath,
    changefreq: isImportantPage ? 'daily' : 'monthly',
    priority: isRootPath ? 1 : 0.85,
  };
};

const generateSitemap = (pages: Array<mixed>) => {
  const sitemapUrls = _.flow(
    _.map(generateSitemapUrl),
    _.compact,
  )(pages);

  const sitemap = sm.createSitemap({
    hostname,
    cacheTime: 600000,
    urls: sitemapUrls,
  });

  fs.writeFileSync(
    path.join(__dirname, '/public/sitemap.xml'),
    sitemap.toString(),
  );
};

const generateRobots = () => {
  const fileContent = 'User-agent: *\n' +
    'Allow: /\n\n' +
    `Sitemap: ${hostname}/sitemap.xml`;

  fs.writeFileSync(
    path.join(__dirname, '/public/robots.txt'),
    fileContent,
  );
};

export default (pages: Array<mixed>, callback: () => void) => {
  generateSitemap(pages);
  generateRobots();

  callback();
};
