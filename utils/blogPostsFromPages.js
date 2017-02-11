/* @flow */

import _ from 'lodash/fp';

const blogPostPathRegex = /^\/blog\/.+/;

const blogPostsFromPages = _.flow(
  _.filter(
    _.flow(_.get('path'), blogPostPathRegex.test.bind(blogPostPathRegex)),
  ),
  _.sortBy(_.get('data.date')),
  _.map((
    {
      data,
      path,
      requirePath,
    }: {
      data: Object,
      path: string,
      requirePath: string,
    },
  ) => ({...data, path, requirePath})),
  _.reverse,
);

export default blogPostsFromPages;
