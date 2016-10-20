/* @flow */

import React from 'react';

import {
  ContentContainer,
  PageFooter,
  PageHeader,
  PageHelmet,
  Separator,
  WorkList,
} from '../../components';
import works from '../../data/works';

const WorkPage = (): React$Element<any> => (
  <main>
    <PageHelmet mixpanelTitle="Work" />
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
