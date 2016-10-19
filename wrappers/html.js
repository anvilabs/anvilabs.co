/* @flow */

import React from 'react';

const HtmlWrapper = ({ route }: {
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
    <div>
      <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
      <div dangerouslySetInnerHTML={{ __html: post.body }} />
    </div>
  );
  /* eslint-enable react/no-danger */
};

export default HtmlWrapper;
