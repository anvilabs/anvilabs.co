/* @flow */

// eslint-disable-next-line import/no-extraneous-dependencies, import/extensions
import { config } from 'config';
import cx from 'classnames';
import React from 'react';

import { isDarkMode } from '../../utils';

const NewsletterForm = ({ className }: { className?: string }) => (
  <form
    action={config.mailchimpActionUrl}
    method="post"
    name="mc-embedded-subscribe-form"
    target="_blank"
    noValidate
    className={className}
  >
    <fieldset className="bn ma0 pa0">
      <legend>Подпишитесь на нашу рассылку</legend>
      <div
        className={cx(
          'flex bb mt2',
          isDarkMode ? 'b--white' : 'b--dark-gray',
        )}
      >
        <input
          type="email"
          defaultValue=""
          name="EMAIL"
          placeholder="username@gmail.com"
          className={cx(
            'bg-transparent input-reset bn pv2 outline-0 w-100',
            isDarkMode ? 'white' : 'dark-gray',
          )}
          style={{ flexGrow: 1 }}
        />
        <div style={{ position: 'absolute', left: -5000 }} aria-hidden>
          <input
            type="text"
            name="b_983b78ee49621c4871e7a16ea_0da8d3b335"
            tabIndex="-1"
            defaultValue=""
          />
        </div>
        <input
          type="submit"
          value="↵"
          name="subscribe"
          className={cx(
            'dim input-reset outline-0 bn tr pv2 pointer w3 bg-transparent',
            isDarkMode ? 'white' : 'dark-gray',
          )}
        />
      </div>
    </fieldset>
  </form>
);

export default NewsletterForm;
