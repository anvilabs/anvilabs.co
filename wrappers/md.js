/* @flow */

// eslint-disable-next-line import/no-extraneous-dependencies, import/extensions
import { config } from 'config';
import Headroom from 'react-headroom';
import React from 'react';

import {
  ContentContainer,
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
        ogImageSrc={`${hostname}${path}screenshot-1200x630.jpg`}
        twitterImageSrc={`${hostname}${path}screenshot-600x315.jpg`}
      />
      <Headroom><TopNavigation /></Headroom>
      <ContentContainer className="mw7-l center">
        <PostArticle post={post} full />
      </ContentContainer>
      <Separator />
      <PageFooter />
    </Main>
  );
};

export default MarkdownWrapper;
