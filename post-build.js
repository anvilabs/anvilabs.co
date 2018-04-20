/* @flow */

import fs from 'fs';
import path from 'path';

import {load as parseHtml} from 'cheerio';
import {parse as parseToml} from 'toml';
import _ from 'lodash/fp';
import frontMatter from 'front-matter';
import markdownIt from 'markdown-it';
import moment from 'moment';
import RSS from 'rss';
import sm from 'sitemap';

import {blogPostsFromPages} from './utils';
import {type BlogPostType} from './types';

const config = parseToml(
  String(fs.readFileSync(path.join(__dirname, '/config.toml')))
);
const {siteTitle, siteDescription, hostname} = config;

const generateSitemapUrl = (page: mixed): ?Object => {
  let pagePath;
  if (typeof page === 'object' && page !== null) {
    pagePath = page.path;
  } else {
    pagePath = page;
  }

  const nonIndexedPages = ['/404/'];
  const importantPages = ['/', '/work/', '/blog/'];
  const isRootPath = pagePath === '/';
  const isNonIndexedPage = _.some(_.identity, [
    _.includes(pagePath, nonIndexedPages),
    _.some(
      (nonIndexedPage: string) => _.startsWith(nonIndexedPage, pagePath),
      nonIndexedPages
    ),
  ]);
  const isImportantPage = _.includes(pagePath, importantPages);

  if (!pagePath || isNonIndexedPage) return null;

  return {
    url: pagePath,
    changefreq: isImportantPage ? 'daily' : 'monthly',
    priority: isRootPath ? 1 : 0.85, // eslint-disable-line no-magic-numbers
  };
};

const generateSitemap = (pages: $ReadOnlyArray<mixed>) => {
  const sitemapUrls = _.flow(_.map(x => generateSitemapUrl(x)), _.compact)(
    pages
  );

  const sitemap = sm.createSitemap({
    hostname,
    cacheTime: 600000,
    urls: sitemapUrls,
  });

  fs.writeFileSync(
    path.join(__dirname, '/public/sitemap.xml'),
    sitemap.toString()
  );
};

const generateFeed = (pages: $ReadOnlyArray<mixed>) => {
  const feed = new RSS({
    title: siteTitle,
    description: siteDescription,
    feed_url: `${hostname}/feed.xml`,
    site_url: hostname,
    copyright: '© 2018 ТОО «Anvilabs»',
    language: 'ru',
    pubDate: moment().toJSON(),
  });
  const md = markdownIt({
    html: true,
    linkify: true,
    typographer: true,
  });

  _.flow(
    blogPostsFromPages,
    _.filter(({draft}: {draft?: boolean}) => !draft),
    _.map((post: BlogPostType & {path: string, requirePath: string}) => {
      // read the markdown file
      const content = String(
        fs.readFileSync(path.join(__dirname, `/pages/${post.requirePath}`))
      );
      // extract yaml meta tags
      const meta = frontMatter(content);
      // render markdown to html
      const html = md.render(meta.body);
      // replace relative links with absolute ones
      const $ = parseHtml(html, {
        recognizeSelfClosing: true,
        decodeEntities: false,
      });
      $('img').each((idx: number, elem: Object) => {
        const src = _.last(
          $(elem)
            .attr('src')
            .split('./')
        );
        $(elem).attr('src', `${hostname}${post.path}${src}`);
      });

      return {...post, body: $.html()};
    }),
    _.forEach((post: BlogPostType & {path: string}) => {
      feed.item({
        ..._.pick(['title', 'author', 'date'], post),
        description: post.body,
        url: `${hostname}${post.path}`,
      });
    })
  )(pages);

  fs.writeFileSync(
    path.join(__dirname, './public/feed.xml'),
    feed.xml({indent: true})
  );
};

const generateRobots = () => {
  const fileContent = `User-agent: *\nAllow: /\n\nSitemap: ${hostname}/sitemap.xml`;

  fs.writeFileSync(path.join(__dirname, '/public/robots.txt'), fileContent);
};

const postBuild = (pages: $ReadOnlyArray<mixed>, callback: () => void) => {
  generateSitemap(pages);
  generateFeed(pages);
  generateRobots();

  callback();
};

export default postBuild;
