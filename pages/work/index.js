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

/* eslint-disable max-len */
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
/* eslint-enable max-len */

export default WorkPage;
