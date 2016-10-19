/* @flow */

import React from 'react';

import {
  ContentContainer,
  PageFooter,
  PageHeader,
  PageHelmet,
  Separator,
  TeamList,
} from '../../components';

const team = [{
  name: 'Аян Енбекбай',
  role: 'Сооснователь, CEO',
  photoUrl: '/about/ayan.jpg',
  links: [{
    title: 'Facebook',
    href: 'https://facebook.com/yenbekbay',
  }, {
    title: 'Github',
    href: 'https://github.com/yenbekbay',
  }],
}, {
  name: 'Бинур Конарбай',
  role: 'Сооснователь, CTO',
  photoUrl: '/about/binur.jpg',
  links: [{
    title: 'Facebook',
    href: 'https://facebook.com/binchik',
  }, {
    title: 'Github',
    href: 'https://github.com/binchik',
  }],
}, {
  name: 'Айрис',
  role: 'Немецкий шпиц',
  photoUrl: '/about/ayris.jpg',
}];

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
      <p className="mt0 mb5">
        Мы маленькая, но очень <em>опытная и активная</em> команда, специализирующаяся на разработке мобильных и веб приложений.
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
