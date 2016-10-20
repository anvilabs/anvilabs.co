/* @flow */

import _ from 'lodash/fp';
import Headroom from 'react-headroom';
import React from 'react';

import {
  ContentContainer,
  PageFooter,
  PageHelmet,
  PostArticle,
  Separator,
  TopNavigation,
} from '../../components';
import type { BlogPost } from '../../types';

const BlogPage = ({ route }: {
  route: { pages: Array<Object> },
}): React$Element<any> => {
  const blogPostPathRegex = /^\/blog\/.+/;
  const blogPosts = _.flow(
    _.filter(_.flow(
      _.get('path'),
      blogPostPathRegex.test.bind(blogPostPathRegex),
    )),
    _.sortBy(_.get('data.isoDate')),
    _.map(
      ({ data, path }: { data: Object, path: string }) => ({ ...data, path }),
    ),
    _.reverse,
  )(route.pages);

  return (
    <main>
      <PageHelmet
        title="Блог | Anvilabs"
        description="Блог компании Anvilabs"
        mixpanelTitle="Blog"
      />
      <Headroom><TopNavigation /></Headroom>
      <ContentContainer className="mw7-l">
        {blogPosts.map((post: BlogPost, idx: number) => (
          <div key={post.isoDate}>
            <PostArticle post={post} full={false} />
            {idx < blogPosts.length - 1 && <Separator className="pv5" />}
          </div>
        ))}
      </ContentContainer>
      <Separator />
      <PageFooter />
    </main>
  );
};

export default BlogPage;
