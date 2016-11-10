/* @flow */

import React from 'react';

import {
  ContentContainer,
  Main,
  PageFooter,
  PageHeader,
  PageHelmet,
  Separator,
  StickyNavigation,
  WorkList,
} from '../../components';
import works from '../../data/works';

const WorkPage = (): React$Element<any> => (
  <Main>
    <PageHelmet mixpanelTitle="Work" />
    <StickyNavigation />
    <PageHeader />
    <Separator />
    <ContentContainer>
      <WorkList works={works} />
    </ContentContainer>
    <Separator />
    <PageFooter />
  </Main>
);

export default WorkPage;
