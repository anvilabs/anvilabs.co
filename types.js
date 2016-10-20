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
export type BlogPost = {
  title: string,
  body: string,
  description: string,
  author: string,
  formattedDate: string,
  date: string,
  readingTime: string,
  numberOfWords: string,
  path?: string,
  requirePath?: string,
};
