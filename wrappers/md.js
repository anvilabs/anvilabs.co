/* @flow */

import React from 'react';

const MdWrapper = ({ route }: {
  route: {
    page: {
      data: {
        title: string,
        body: string,
      },
    },
  },
}): React$Element<any> => {
  const post = route.page.data;

  /* eslint-disable react/no-danger */
  return (
    <div className="markdown">
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.body }} />
    </div>
  );
  /* eslint-enable react/no-danger */
};

export default MdWrapper;
