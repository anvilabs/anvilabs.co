/* @flow */

import excerptHtml from 'excerpt-html';
import frontMatter from 'front-matter';
import hljs from 'highlight.js';
import markdownIt from 'markdown-it';
import moment from 'moment';
import plural from 'plural-ru';
import readingTime from 'reading-time';
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
  .use(require('markdown-it-implicit-figures'), {
    figcaption: true,
  })
  .use(require('markdown-it-link-attributes'), {
    target: '_blank',
    rel: 'noopener noreferrer',
  })
  .use(require('markdown-it-anchor'), {
    permalink: true,
    permalinkBefore: true,
    permalinkSymbol: '§',
  });

export default function (content: string) {
  this.cacheable();

  const meta = frontMatter(content);
  const body = md.render(meta.body);
  const {
    time: timeToRead,
    words: numberOfWords,
  } = readingTime(striptags(body));
  const { description, date } = meta.attributes;
  const momentDate = moment(date);

  const result = {
    ...meta.attributes,
    description: description || excerptHtml(body, { pruneLength: 250 }),
    formattedDate: momentDate.format('D MMMM YYYY г.'),
    isoDate: momentDate.toISOString(),
    readingTime: moment(timeToRead)
      .from(0, true)
      .replace('несколько секунд', 'меньше минуты'),
    numberOfWords: plural(numberOfWords, '%d слово', '%d слова', '%d слов'),
    body,
  };

  this.value = result;

  return `module.exports = ${JSON.stringify(result)}`;
}
