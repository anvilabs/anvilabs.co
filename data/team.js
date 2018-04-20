/* @flow */

import {type TeamMemberType} from '../types';

const team: $ReadOnlyArray<TeamMemberType> = [
  {
    name: 'Аян Енбекбай',
    role: 'Основатель // дизайнер, full-stack мобильный и веб разработчик',
    photoUrl: '/about/ayan.jpg',
    links: [
      {
        title: 'Github',
        href: 'https://github.com/yenbekbay',
      },
      {
        title: 'Facebook',
        href: 'https://facebook.com/yenbekbay',
      },
    ],
  },
];

export default team;
