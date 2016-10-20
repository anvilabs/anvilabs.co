/* @flow */

import React from 'react';

import {
  ContactForm,
  ContentContainer,
  PageFooter,
  PageHeader,
  PageHelmet,
  Separator,
} from '../../components';

/* eslint-disable max-len */
const ContactPage = (): React$Element<any> => (
  <main>
    <PageHelmet mixpanelTitle="Contact" />
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
/* eslint-enable max-len */

export default ContactPage;
