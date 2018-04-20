/* @flow */

import _ from 'lodash/fp';

const BLOG_POST_PATH_REGEX = /^\/blog\/.+/;

const blogPostsFromPages = _.flow(
  _.filter(page =>
    _.flow(_.get('path'), BLOG_POST_PATH_REGEX.test.bind(BLOG_POST_PATH_REGEX))(
      page
    )
  ),
  _.sortBy(_.get('data.date')),
  _.map(
    ({
      data,
      path,
      requirePath,
    }: {
      data: {[key: string]: any},
      path: string,
      requirePath: string,
    }) => ({...data, path, requirePath})
  ),
  _.reverse
);

export default blogPostsFromPages;
