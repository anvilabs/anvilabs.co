/* @flow */

import React from 'react';

import {
  ContactForm,
  ContentContainer,
  Main,
  PageFooter,
  PageHeader,
  PageHelmet,
  Separator,
  StickyNavigation,
} from '../../components';

const ContactPage = (): React$Element<any> => (
  <Main>
    <PageHelmet mixpanelTitle="Contact" />
    <StickyNavigation />
    <PageHeader />
    <Separator />
    <ContentContainer>
      <p className="mt0 mb4">Свяжитесь с нами для бесплатной консультации!</p>
      <ContactForm />
    </ContentContainer>
    <Separator />
    <PageFooter />
  </Main>
);

export default ContactPage;
