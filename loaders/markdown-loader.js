/* @flow */

import _ from 'lodash/fp';
import excerptHtml from 'excerpt-html';
import frontMatter from 'front-matter';
import hljs from 'highlight.js';
import markdownIt from 'markdown-it';
import moment from 'moment';
import plural from 'plural-ru';
import readingTime from 'reading-time';
import slug from 'slug';
import striptags from 'striptags';

moment.locale('ru');

const highlight = (str: string, lang: string) => {
  if ((lang !== null) && hljs.getLanguage(lang)) {
    try {
      return hljs.highlight(lang, str).value;
    } catch (err) {
      console.error(err); // eslint-disable-line no-console
    }
  }

  try {
    return hljs.highlightAuto(str).value;
  } catch (err) {
    console.error(err); // eslint-disable-line no-console
  }

  return '';
};

const md = markdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight,
})
  .use(require('markdown-it-link-attributes'), {
    target: '_blank',
    rel: 'noopener noreferrer',
  })
  .use(require('markdown-it-anchor'), {
    permalink: true,
    permalinkBefore: true,
    permalinkSymbol: '§',
    slugify: _.curry(slug)(_, { lower: true }),
  })
  .use(require('markdown-it-table-of-contents'), {
    slugify: _.curry(slug)(_, { lower: true }),
  })
  .use(require('markdown-it-attrs'))
  .use(require('markdown-it-footnote'));

export default function (content: string) {
  this.cacheable();

  const meta = frontMatter(content);
  const body = md.render(meta.body);
  const {
    time: timeToRead,
    words: numberOfWords,
  } = readingTime(striptags(body), {
    wordsPerMinute: 275, // from Medium
  });
  const { description, date } = meta.attributes;
  const excerpt = description && md.render(description);

  const result = {
    ...meta.attributes,
    body,
    description: (excerpt && striptags(excerpt)) || excerptHtml(body, {
      stripTags: true,
      pruneLength: 250,
    }),
    excerpt: excerpt || excerptHtml(body, {
      stripTags: false,
      pruneLength: 300,
    }).replace(/<sup.+<\/sup>/, ''),
    formattedDate: moment(date).format('D MMMM YYYY г.'),
    readingTime: moment(timeToRead + (60 * 1000)) // normalize
      .from(0, true)
      .replace('несколько секунд', 'меньше минуты'),
    numberOfWords: plural(numberOfWords, '%d слово', '%d слова', '%d слов'),
  };

  this.value = result;

  return `module.exports = ${JSON.stringify(result)}`;
}
