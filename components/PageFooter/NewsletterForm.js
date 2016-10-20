/* @flow */

// eslint-disable-next-line import/no-extraneous-dependencies, import/extensions
import { config } from 'config';
import React from 'react';

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
      <div className="flex bb b--black mt2">
        <input
          type="email"
          defaultValue=""
          name="EMAIL"
          placeholder="username@gmail.com"
          className="input-reset bn pv2 outline-0 w-100"
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
          // eslint-disable-next-line max-len
          className="dim input-reset outline-0 bn tr pv2 pointer w3 bg-transparent"
        />
      </div>
    </fieldset>
  </form>
);

export default NewsletterForm;
