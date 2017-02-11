/* @flow */

import React from 'react';

const imageUrlWithSuffix = (imageUrl: string, suffix: string) =>
  imageUrl.replace(/(.*)\.(jpe?g|png)/, `$1${suffix}.$2`);
const srcSetFromImageUrl = (imageUrl: string) => [
  imageUrl,
  imageUrlWithSuffix(imageUrl, '@2x'),
  imageUrlWithSuffix(imageUrl, '@3x'),
];

const ResponsiveImage = (
  {
    srcSet,
    alt,
    className,
    style,
  }: {
    srcSet: [any, any, any],
    alt: string,
    className?: string,
    style?: Object,
  },
) => (
  <img
    src={srcSet[1]}
    srcSet={`${srcSet[0]} 1x, ${srcSet[1]} 2x, ${srcSet[2]} 3x`}
    alt={alt}
    className={className}
    style={style}
  />
);

export {srcSetFromImageUrl};
export default ResponsiveImage;
