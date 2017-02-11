/* @flow */

import React from 'react';

import SideNavigation from './SideNavigation';
import HeaderTitle from './HeaderTitle';
import HeaderSubtitle from './HeaderSubtitle';

const PageHeader = ({ title, subtitle }: {
  title?: string | React$Element<any> | Array<React$Element<any>>,
  subtitle?: string | React$Element<any> | Array<React$Element<any>>,
}) => (
  <header
    className="pa3 pa5-ns flex flex-column flex-row-l justify-between"
    style={{
      minHeight: 600,
      height: '100vh',
    }}
  >
    <SideNavigation />
    <div
      className="w-100 w-60-l mw6 mw-none-l flex flex-column justify-center"
    >
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderSubtitle>{subtitle}</HeaderSubtitle>
    </div>
  </header>
);

PageHeader.defaultProps = {
  title: <span>Кузница<br /><span className="emphasize">мобильных</span><br />решений.</span>,
  subtitle: 'Проектируем и разрабатываем инновационные мобильные и веб приложения.',
};

export default PageHeader;
