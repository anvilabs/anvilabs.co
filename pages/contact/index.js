/* @flow */

import React from 'react';

import {
  ContactForm,
  ContentContainer,
  PageFooter,
  PageHeader,
  PageHelmet,
  Separator,
  StickyNavigation,
} from '../../components';

const ContactPage = (): React$Element<any> => (
  <main>
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
  </main>
);

export default ContactPage;
