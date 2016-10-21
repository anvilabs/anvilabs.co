/* @flow */

import Headroom from 'react-headroom';
import React from 'react';

import {
  ContentContainer,
  PageFooter,
  PageHelmet,
  PostArticle,
  Separator,
  TopNavigation,
} from '../components';
import type { BlogPost } from '../types';

const MarkdownWrapper = ({ route }: {
  route: {
    page: { data: BlogPost },
  },
}): React$Element<any> => {
  const post = route.page.data;

  return (
    <main>
      <PageHelmet
        title={post.title}
        mixpanelTitle={post.title}
        description={post.description}
      />
      <Headroom><TopNavigation /></Headroom>
      <ContentContainer className="mw7-l center">
        <PostArticle post={post} full />
      </ContentContainer>
      <Separator />
      <PageFooter />
    </main>
  );
};

export default MarkdownWrapper;
