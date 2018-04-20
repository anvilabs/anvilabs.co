/* @flow */

import {config} from 'config'; // eslint-disable-line import/no-unresolved, import/extensions
import React from 'react';

const {contactEmail} = config;

const ErrorMessage = (): React$Element<any> => (
  <div>
    <p className="fw4 f4">Произошла ошибка при отправке сообщения.</p>
    <p>
      {'Извиняемся за неудобства. Пожалуйста, напишите нам на '}
      <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
    </p>
  </div>
);

export default ErrorMessage;
