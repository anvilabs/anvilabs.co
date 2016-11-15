/* @flow */

import React from 'react';
import segmentSnippet from '@segment/snippet';

const Analytics = (
  { writeKey }: { writeKey?: ?string },
): ?React$Element<any> => {
  if (!writeKey) return null;

  const snippet = segmentSnippet.min({
    host: 'cdn.segment.com',
    apiKey: writeKey,
  });

  return (
    <script
      type="text/javascript"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: snippet }}
    />
  );
};

export default Analytics;
