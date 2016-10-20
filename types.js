/* @flow */

export type Work = {
  title: string,
  subtitle: string,
  links?: Array<{
    title: string,
    href: string,
  }>,
  imageUrl: string,
};
export type TeamMember = {
  name: string,
  role: string,
  photoUrl: string,
  links?: Array<{
    title: string,
    href: string,
  }>,
};
