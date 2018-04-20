/* @flow */

export type WorkType = {
  title: string,
  subtitle: string,
  links?: $ReadOnlyArray<{
    title: string,
    href: string,
  }>,
  imageUrl: string,
};
export type TeamMemberType = {
  name: string,
  role: string,
  photoUrl: string,
  links?: $ReadOnlyArray<{
    title: string,
    href: string,
  }>,
};
export type BlogPostType = {
  title: string,
  body: string,
  description: string,
  excerpt: string,
  author: string,
  formattedDate: string,
  date: string,
  readingTime: string,
  numberOfWords: string,
  path?: string,
  requirePath?: string,
};
