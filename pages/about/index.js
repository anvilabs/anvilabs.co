/* @flow */

import React from 'react';

import {
  ContentContainer,
  PageFooter,
  PageHeader,
  PageHelmet,
  Separator,
  StickyNavigation,
  TeamList,
} from '../../components';
import team from '../../data/team';

/* eslint-disable max-len */
const ContactPage = (): React$Element<any> => (
  <main>
    <PageHelmet mixpanelTitle="About" />
    <StickyNavigation />
    <PageHeader />
    <Separator />
    <ContentContainer>
      <p className="mt0 mb5">
        Мы маленькая, но очень <strong>опытная и активная</strong> команда, специализирующаяся на разработке мобильных и веб приложений.
        <br />
        Наша миссия - воплощать интересные идеи в реальность - быстро, грамотно и стильно.
      </p>
      <TeamList team={team} />
    </ContentContainer>
    <Separator />
    <PageFooter />
  </main>
);
/* eslint-enable max-len */

export default ContactPage;
