/* @flow */

import {type WorkType} from '../types';

const works: $ReadOnlyArray<WorkType> = [
  {
    title: 'Сеансы',
    subtitle:
      'Лучшее в своем роде iOS приложение для просмотра афиши в кинотеатрах Казахстана.',
    links: [
      {
        title: 'Пройти на seansy.kz',
        href: 'http://seansy.kz',
      },
    ],
    imageUrl: '/work/seansy.png',
  },
  {
    title: 'Lavka',
    subtitle: 'Экспресс-доставка из магазинов и ресторанов вашего города.',
    links: [
      {
        title: 'Скачать с App Store',
        href: 'https://itunes.apple.com/app/id1314478760',
      },
      {
        title: 'Скачать с Google Play',
        href: 'https://play.google.com/store/apps/details?id=io.lavka.lavka',
      },
    ],
    imageUrl: '/work/lavka.png',
  },
  {
    title: 'WeVote',
    subtitle:
      'Независимая социальная сеть для политических выборов. Наше первое приложение написанное на React Native.',
    links: [
      {
        title: 'Скачать с App Store',
        href: 'https://itunes.apple.com/app/id1150985432',
      },
      {
        title: 'Скачать с Google Play',
        href:
          'https://play.google.com/store/apps/details?id=org.wevotenow.wevotenow',
      },
    ],
    imageUrl: '/work/wevote.png',
  },
  {
    title: 'Sozdik Bot',
    subtitle:
      'Бот на Telegram и Facebook Messenger, умеющий переводить слова и фразы с русского на казахский и обратно.',
    links: [
      {
        title: 'Написать в Telegram',
        href: 'https://telegram.me/SozdikBot',
      },
      {
        title: 'Написать в Messenger',
        href: 'http://m.me/sozdikbot',
      },
      {
        title: 'Посмотреть исходный код',
        href: 'https://github.com/yenbekbay/sozdik-bot',
      },
    ],
    imageUrl: '/work/sozdik-bot.png',
  },
  {
    title: 'Metio',
    subtitle:
      'iOS приложение, показывающее местную погоду на простом языке со всей нужной информацией для принятия решения.',
    links: [
      {
        title: 'Скачать с App Store',
        href: 'https://itunes.apple.com/app/id1055506207',
      },
      {
        title: 'Посмотреть исходный код',
        href: 'https://github.com/yenbekbay/metio',
      },
    ],
    imageUrl: '/work/metio.png',
  },
  {
    title: 'Never Drink Alone',
    subtitle:
      'iOS приложение, которое предлагает одно деловое знакомство в день с самыми интересными людьми вашего города (Проект закрыт).',
    links: [
      {
        title: 'Посмотреть исходный код',
        href: 'https://github.com/yenbekbay/never-drink-alone',
      },
    ],
    imageUrl: '/work/never-drink-alone.png',
  },
  {
    title: 'Kogershin',
    subtitle:
      'iOS приложение, позволяющее вам следить за вашими посылками через сервис Казпочты (Проект закрыт).',
    links: [
      {
        title: 'Посмотреть исходный код',
        href: 'https://github.com/yenbekbay/kogershin',
      },
    ],
    imageUrl: '/work/kogershin.png',
  },
  {
    title: 'Galileo',
    subtitle:
      'iOS приложение для чтения избранных статей из Википедии (Проект закрыт).',
    links: [
      {
        title: 'Посмотреть исходный код',
        href: 'https://github.com/yenbekbay/galileo',
      },
    ],
    imageUrl: '/work/galileo.png',
  },
  {
    title: 'Instamaniac ',
    subtitle:
      'iOS приложение для просмотра нестандартной статистики вашего аккаунта в Инстаграме (Проект закрыт).',
    links: [
      {
        title: 'Посмотреть исходный код',
        href: 'https://github.com/yenbekbay/instamaniac',
      },
    ],
    imageUrl: '/work/instamaniac.png',
  },
];

export default works;
