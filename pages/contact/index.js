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
    <PageHelmet
      title="Кузница мобильных решений | Anvilabs"
      mixpanelTitle="Contact"
      description="Anvilabs - Проектируем и разрабатываем инновационные мобильные и веб приложения. (Алматы, Казахстан)"
    />
    <PageHeader
      title={<span>Кузница<br /><em>мобильных</em><br />решений.</span>}
      subtitle="Проектируем и разрабатываем инновационные мобильные и веб приложения."
    />
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
