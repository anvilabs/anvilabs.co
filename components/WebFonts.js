/* @flow */

import React from 'react';

const WebFonts = (
  { config }: { config: { [key: string]: Object } },
): ?React$Element<any> => {
  /* eslint-disable max-len */
  const snippet = `
    WebFontConfig = ${JSON.stringify(config)};

    (function(d) {
        var wf = d.createElement('script'), s = d.scripts[0];
        wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js';
        s.parentNode.insertBefore(wf, s);
    })(document);
  `;
  /* eslint-enable max-len */

  return (
    <script
      type="text/javascript"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: snippet }}
    />
  );
};

export default WebFonts;
