/* @flow */

// eslint-disable-next-line import/no-extraneous-dependencies, import/extensions
import { config } from 'config';
import Headroom from 'react-headroom';
import React from 'react';

import {
  ContentContainer,
  DisqusComments,
  Main,
  PageFooter,
  PageHelmet,
  PostArticle,
  Separator,
  TopNavigation,
} from '../components';
import type { BlogPost } from '../types';

const { hostname } = config;

const MarkdownWrapper = ({ route }: {
  route: {
    path: string,
    page: { data: BlogPost } & { path: string },
  },
}): React$Element<any> => {
  const { data: post, path } = route.page;

  return (
    <Main>
      <PageHelmet
        title={post.title}
        mixpanelTitle={post.title}
        description={post.description}
        ogImageSrc={`${hostname}${path}post-screenshot.jpg`}
        twitterImageSrc={`${hostname}${path}post-screenshot.jpg`}
      />
      <Headroom><TopNavigation /></Headroom>
      <ContentContainer className="mw7-l center">
        <PostArticle post={post} full />
        <DisqusComments path={route.path} />
      </ContentContainer>
      <Separator />
      <PageFooter />
    </Main>
  );
};

export default MarkdownWrapper;
