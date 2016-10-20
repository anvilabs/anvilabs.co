/* @flow */

import { Link } from 'react-router';
import React from 'react';

import {
  ContentContainer,
  PageFooter,
  PageHeader,
  PageHelmet,
  Separator,
  WorkList,
} from '../components';
import works from '../data/works';

const Homepage = (): React$Element<any> => (
  <main>
    <PageHelmet mixpanelTitle="Home" />
    <PageHeader />
    <Separator />
    <ContentContainer>
      <WorkList works={works} compact />
      <div className="tr">
        <Link to="/work/" className="link red dim f4 f3-l">
          Посмотрите, что еще мы сделали →
        </Link>
      </div>
    </ContentContainer>
    <Separator />
    <PageFooter />
  </main>
);

export default Homepage;
