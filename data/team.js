/* @flow */

import type { TeamMember } from '../types';

const team: Array<TeamMember> = [{
  name: 'Аян Енбекбай',
  role: 'Сооснователь // дизайнер, мобильный и веб разработчик',
  photoUrl: '/about/ayan.jpg',
  links: [{
    title: 'Github',
    href: 'https://github.com/yenbekbay',
  }, {
    title: 'Facebook',
    href: 'https://facebook.com/yenbekbay',
  }],
}, {
  name: 'Бинур Конарбай',
  role: 'Сооснователь // мобильный разработчик',
  photoUrl: '/about/binur.jpg',
  links: [{
    title: 'Github',
    href: 'https://github.com/binchik',
  }, {
    title: 'Facebook',
    href: 'https://facebook.com/binchik',
  }],
}, {
  name: 'Максат Жетписбаев',
  role: 'Управляющий финансами, идейный вдохновитель',
  photoUrl: '/about/maxat.jpg',
  links: [{
    title: 'LinkedIn',
    href: 'https://linkedin.com/in/maxat-zhetpisbayev-6403336b',
  }, {
    title: 'Facebook',
    href: 'https://facebook.com/maxat70baev',
  }],
}, {
  name: 'Айрис',
  role: 'Немецкий шпиц',
  photoUrl: '/about/ayris.jpg',
}];

export default team;
