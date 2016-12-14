/* @flow */

// eslint-disable-next-line import/no-extraneous-dependencies, import/extensions
import { config } from 'config';
import React from 'react';

const { hostname } = config;

const DisqusComments = (
  { path }: { path: string },
): ?React$Element<any> => {
  const snippet = `
var disqus_config = function() {
  this.page.url = '${hostname}${path}';
  this.page.identifier = '${path}';
};
(function() {
  var d = document, s = d.createElement('script');
  s.src = 'https://anvilabs.disqus.com/embed.js';
  s.setAttribute('data-timestamp', +new Date());
  (d.head || d.body).appendChild(s);
})();
  `;

  return (
    <div>
      <div id="disqus_thread" />
      <script
        type="text/javascript"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: snippet }}
      />
    </div>
  );
};

export default DisqusComments;
