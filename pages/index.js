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

/* eslint-disable max-len */
const Homepage = (): React$Element<any> => (
  <main>
    <PageHelmet
      title="Кузница мобильных решений | Anvilabs"
      mixpanelTitle="Home"
      description="Anvilabs - Проектируем и разрабатываем инновационные мобильные и веб приложения. (Алматы, Казахстан)"
    />
    <PageHeader
      title={<span>Кузница<br /><em>мобильных</em><br />решений.</span>}
      subtitle="Проектируем и разрабатываем инновационные мобильные и веб приложения."
    />
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
/* eslint-enable max-len */

export default Homepage;
