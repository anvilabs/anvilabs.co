/* @flow */

import postBuild from './post-build';

const modifyWebpackConfig = (
  config: Object,
  stage: string,
) => {
  const fileLoader = stage !== 'develop'
    ? 'file-loader?name=/[hash].[ext]'
    : 'file-loader?name=[name].[ext]';

  config.removeLoader('images');
  config.loader('images', {
    test: /\.(jpe?g|png|svg)(\?.*)?$/i,
    loader: fileLoader,
  });

  return config;
};

export { modifyWebpackConfig, postBuild };
