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
  TeamList,
} from '../../components';
import team from '../../data/team';

const ContactPage = (): React$Element<any> => (
  <Main>
    <PageHelmet mixpanelTitle="About" />
    <StickyNavigation />
    <PageHeader />
    <Separator />
    <ContentContainer>
      <p className="mt0 mb5">
        Мы маленькая, но очень <span className="emphasize">опытная и активная</span> команда, специализирующаяся на разработке мобильных и веб приложений.
        <br />
        Наша миссия - воплощать интересные идеи в реальность - быстро, грамотно и стильно.
      </p>
      <TeamList team={team} />
    </ContentContainer>
    <Separator />
    <PageFooter />
  </Main>
);

export default ContactPage;
