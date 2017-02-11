/* @flow */

import postBuild from './post-build';

const modifyWebpackConfig = (config: Object, stage: string) => {
  const imageLoader = stage !== 'develop'
    ? 'file?name=[name]-[hash].[ext]'
    : 'file';

  config.removeLoader('images');
  config.loader('images', {
    test: /\.(jpe?g|png|svg)(\?.*)?$/i,
    loader: imageLoader,
  });

  return config;
};

export {modifyWebpackConfig, postBuild};
