/* @flow */

import _ from 'lodash/fp';

const inseparablePhrases = ['Sozdik Bot'];

const transformBlogPostTitle = (title: string): string => _.reduce(
  (modifiedTitle: string, phrase: string) => modifiedTitle.replace(
    phrase,
    phrase.replace(' ', '&nbsp;'),
  ),
  title,
  inseparablePhrases,
);

export default transformBlogPostTitle;
