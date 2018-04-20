/* @flow */

type MenuLinkType = {
  to: string,
  title: string,
};
type FooterLinkType = {
  href: string,
  title: string,
};

type ConfigType = {
  siteTitle: string,
  siteDescription: string,
  analyticsKey: string,
  contactEmail: string,
  hostname: string,
  mailchimpActionUrl: string,
  menuLinks: $ReadOnlyArray<MenuLinkType>,
  footerLinks: $ReadOnlyArray<FooterLinkType>,
};

const emptyConfig: ConfigType = {
  siteTitle: '',
  siteDescription: '',
  analyticsKey: '',
  contactEmail: '',
  hostname: '',
  mailchimpActionUrl: '',
  menuLinks: [],
  footerLinks: [],
};

const config = emptyConfig;

export {config};
