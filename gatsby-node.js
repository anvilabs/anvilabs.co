/* @flow */

import fs from 'fs';
import path from 'path';

import { parse as parseToml } from 'toml';

import postBuild from './post-build';

const { hostname } = parseToml(
  String(fs.readFileSync(path.join(__dirname, '/config.toml'))),
);

const modifyWebpackConfig = (
  config: Object,
  stage: string,
) => {
  const fileLoader = stage !== 'develop'
    ? `file-loader?name=${hostname}/[hash].[ext]`
    : 'file-loader?name=[name].[ext]';

  config.removeLoader('images');
  config.loader('images', {
    test: /\.(jpe?g|png|svg)(\?.*)?$/i,
    loader: fileLoader,
  });

  return config;
};

export { modifyWebpackConfig, postBuild };
