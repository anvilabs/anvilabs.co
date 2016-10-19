/* @flow */

type MenuLink = {
  to: string,
  title: string,
};
type FooterLink = {
  href: string,
  title: string,
};

type Config = {
  analyticsKey: string,
  contactEmail: string,
  hostname: string,
  mailchimpActionUrl: string,
  menuLinks: Array<MenuLink>,
  footerLinks: Array<FooterLink>,
};
const emptyConfig: Config = {
  analyticsKey: '',
  contactEmail: '',
  hostname: '',
  mailchimpActionUrl: '',
  menuLinks: [],
  footerLinks: [],
};

// eslint-disable-next-line import/prefer-default-export
export const config = emptyConfig;
