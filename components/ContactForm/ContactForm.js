/* @flow */

import {config} from 'config'; // eslint-disable-line import/no-unresolved, import/extensions
import axios from 'axios';
import cx from 'classnames';
import Form from 'react-formal';
import React, {Component} from 'react';
import yup from 'yup';

import {isDarkMode} from '../../utils';
import ErrorMessage from './ErrorMessage';
import FormField from './FormField';
import ThankYouMessage from './ThankYouMessage';

const OK_HTTP_STATUS = 200;

const {contactEmail} = config;
const contactFormSchema = yup.object({
  name: yup.string().required('Пожалуйста, введите ваше имя'),
  email: yup
    .string()
    .email('Пожалуйста, введите действительный email')
    .required('Пожалуйста, введите ваш email, чтобы мы могли ответить'),
  message: yup.string().required('Пожалуйста, введите ваше сообщение'),
});

type ModelType = {
  name: string,
  email: string,
  message: string,
};
type StateType = {
  model: ModelType,
  status: 'filling' | 'submitting' | 'error' | 'submitted',
};

class ContactForm extends Component {
  state: StateType;

  state = {
    model: {},
    status: 'filling',
  };

  onSubmit = () => {
    this.setState({status: 'submitting'});

    const action = `https://formspree.io/${contactEmail}`;

    /* eslint-disable promise/prefer-await-to-then */
    axios
      .post(action, this.state.model)
      .then(this.onSubmitSuccess)
      .catch(this.showError);
    /* eslint-enable promise/prefer-await-to-then */
  };

  onSubmitSuccess = ({status}: {status: number}) => {
    if (status === OK_HTTP_STATUS) {
      this.showThankYou();
    } else {
      this.showError();
    }
  };

  showError = () => {
    this.setState({status: 'error'});
  };

  showThankYou = () => {
    this.setState({status: 'submitted'});
  };

  render(): React$Element<any> {
    const {status} = this.state;

    if (status === 'error') return <ErrorMessage />;
    if (status === 'submitted') return <ThankYouMessage />;

    const submitting = status === 'submitting';

    return (
      <Form
        schema={contactFormSchema}
        value={this.state.model}
        onChange={(model: ModelType) => this.setState({model})}
        onSubmit={this.onSubmit}
      >
        <fieldset
          className={cx(
            'pa3 mb3',
            isDarkMode ? 'b--white' : 'b--dark-gray',
            status === 'submitting' && 'o-50'
          )}
          style={submitting ? {pointerEvents: 'none'} : {}}
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

          <FormField name="message" placeholder="Привет, Anvilabs!" textarea />
        </fieldset>
        <Form.Button
          type="submit"
          className={cx(
            'dim input-reset ph3 pv2 outline-0 ba pointer bg-transparent',
            isDarkMode ? 'b--white white' : 'b--dark-gray dark-gray'
          )}
        >
          {status === 'submitting' ? 'Отправляется' : 'Отправить'}
        </Form.Button>
      </Form>
    );
  }
}

export default ContactForm;
