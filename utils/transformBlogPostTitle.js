/* @flow */

import _ from 'lodash/fp';

const INSEPARABLE_PHRASES = ['Sozdik Bot'];

const transformBlogPostTitle = (title: string): string =>
  _.reduce(
    (modifiedTitle: string, phrase: string) =>
      modifiedTitle.replace(phrase, phrase.replace(' ', '&nbsp;')),
    title,
    INSEPARABLE_PHRASES
  );

export default transformBlogPostTitle;
