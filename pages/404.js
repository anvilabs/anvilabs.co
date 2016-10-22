/* @flow */

import { Link } from 'react-router';
import React from 'react';

import {
  PageFooter,
  PageHeader,
  PageHelmet,
  Separator,
  StickyNavigation,
} from '../components';

const NotFoundPage = (): React$Element<any> => (
  <main>
    <PageHelmet
      title="404 – Страница не найдена | Anvilabs"
      mixpanelTitle="404"
      description="Страница, которую вы искали, не существует."
    />
    <StickyNavigation />
    <PageHeader
      title="404 – Страница не найдена."
      subtitle={
        <span>
          Страница, которую вы искали, не существует.
          <br /><br />
          <Link to="/" className="link red dim">Перейти на главную.</Link>
        </span>
      }
    />
    <Separator />
    <PageFooter />
  </main>
);

export default NotFoundPage;
