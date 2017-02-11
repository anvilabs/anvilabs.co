/* @flow */

import React from 'react';

const WebFonts = (
  {config}: {config: {[key: string]: Object}},
): ?React$Element<any> => {
  const snippet = `
(function() {
  if (WebFont) WebFont.load(${JSON.stringify(config)});
})();
`;

  return (
    <script
      type="text/javascript"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{__html: snippet}}
    />
  );
};

export default WebFonts;
