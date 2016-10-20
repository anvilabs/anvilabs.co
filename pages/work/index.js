/* @flow */

import React from 'react';

import {
  ContentContainer,
  PageFooter,
  PageHeader,
  PageHelmet,
  Separator,
  StickyNavigation,
  WorkList,
} from '../../components';
import works from '../../data/works';

const WorkPage = (): React$Element<any> => (
  <main>
    <PageHelmet mixpanelTitle="Work" />
    <StickyNavigation />
    <PageHeader />
    <Separator />
    <ContentContainer>
      <WorkList works={works} />
    </ContentContainer>
    <Separator />
    <PageFooter />
  </main>
);

export default WorkPage;
