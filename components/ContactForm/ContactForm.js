/* @flow */

// eslint-disable-next-line import/no-extraneous-dependencies, import/extensions
import { config } from 'config';
import autobind from 'autobind-decorator';
import axios from 'axios';
import cx from 'classnames';
import Form from 'react-formal';
import React, { Component } from 'react';
import yup from 'yup';

import { isDarkMode } from '../../utils';
import ErrorMessage from './ErrorMessage';
import FormField from './FormField';
import ThankYouMessage from './ThankYouMessage';

const { contactEmail } = config;
const contactFormSchema = yup.object({
  name: yup.string().required('Пожалуйста, введите ваше имя'),
  email: yup
    .string()
    .email('Пожалуйста, введите действительный email')
    .required('Пожалуйста, введите ваш email, чтобы мы могли ответить'),
  message: yup.string().required('Пожалуйста, введите ваше сообщение'),
});

type Model = {
  name: string,
  email: string,
  message: string,
};
type State = {
  model: Model,
  status: 'filling' | 'submitting' | 'error' | 'submitted',
};

export default class ContactForm extends Component {
  state: State;

  state = {
    model: {},
    status: 'filling',
  };

  @autobind
  _onSubmit() {
    this.setState({ status: 'submitting' });

    const action = `https://formspree.io/${contactEmail}`;

    axios
      .post(action, this.state.model)
      .then(this._onSubmitSuccess)
      .catch(this._showError);
  }

  @autobind
  _onSubmitSuccess({ status }: { status: number }) {
    if (status === 200) {
      this._showThankYou();
    } else {
      this._showError();
    }
  }

  @autobind
  _showError() {
    this.setState({ status: 'error' });
  }

  @autobind
  _showThankYou() {
    this.setState({ status: 'submitted' });
  }

  render(): React$Element<any> {
    const { status } = this.state;

    if (status === 'error') return <ErrorMessage />;
    if (status === 'submitted') return <ThankYouMessage />;

    const submitting = status === 'submitting';

    return (
      <Form
        schema={contactFormSchema}
        value={this.state.model}
        onChange={(model: Model) => this.setState({ model })}
        onSubmit={this._onSubmit}
      >
        <fieldset
          className={cx(
            'pa3 mb3',
            isDarkMode ? 'b--white' : 'b--dark-gray',
            status === 'submitting' && 'o-50',
          )}
          style={submitting ? { pointerEvents: 'none' } : {}}
        >
          <legend className="ph3 f4 f3-l">Написать нам</legend>

          <div className="flex-l">
            <FormField
              name="name"
              placeholder="Имя Фамилия"
              className="mb3 w-100 w-50-l mr2-l"
            />

            <FormField
              name="email"
              placeholder="username@gmail.com"
              className="mb3 w-100 w-50-l ml2-l"
            />
          </div>

          <FormField
            name="message"
            placeholder="Привет, Anvilabs!"
            textarea
          />
        </fieldset>
        <Form.Button
          type="submit"
          className={cx(
            'dim input-reset ph3 pv2 outline-0 ba pointer bg-transparent',
            isDarkMode ? 'b--white white' : 'b--dark-gray dark-gray',
          )}
        >
          {status === 'submitting' ? 'Отправляется' : 'Отправить'}
        </Form.Button>
      </Form>
    );
  }
}
