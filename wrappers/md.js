/* @flow */

import {config} from 'config'; // eslint-disable-line import/no-unresolved, import/extensions
import Headroom from 'react-headroom';
import React from 'react';
import ReactDisqusThread from 'react-disqus-thread';

import {
  ContentContainer,
  Main,
  PageFooter,
  PageHelmet,
  PostArticle,
  Separator,
  TopNavigation,
} from '../components';
import {type BlogPostType} from '../types';

const {hostname} = config;

const MarkdownWrapper = ({
  route,
}: {
  route: {
    path: string,
    page: {data: BlogPostType} & {path: string},
  },
}): React$Element<any> => {
  const {data: post, path} = route.page;

  return (
    <Main>
      <PageHelmet
        title={post.title}
        mixpanelTitle={post.title}
        description={post.description}
        ogImageSrc={`${hostname}${path}post-screenshot.jpg`}
        twitterImageSrc={`${hostname}${path}post-screenshot.jpg`}
      />
      <Headroom>
        <TopNavigation />
      </Headroom>
      <ContentContainer className="mw7-l center">
        <PostArticle post={post} full />
        <ReactDisqusThread
          shortname="anvilabs"
          identifier={route.path}
          title={post.title}
          url={`${hostname}${route.path}`}
        />
      </ContentContainer>
      <Separator />
      <PageFooter />
    </Main>
  );
};

export default MarkdownWrapper;
