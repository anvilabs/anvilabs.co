/* @flow */

import React from 'react';
import Form from 'react-formal';

const FormField = ({ name, placeholder, className, textarea }: {
  name: string,
  placeholder?: string,
  className?: string,
  textarea?: boolean,
}) => (
  <div className={className}>
    <Form.Field
      name={name}
      placeholder={placeholder}
      className="dib outline-0 pa2 mb1 input-reset ba b--black w-100"
      errorClass="b--red"
      {...(textarea ? {
        type: 'textarea',
        style: { resize: 'none' },
      } : {})}
    />
    <Form.Message
      className="red"
      // eslint-disable-next-line react/no-unknown-property
      for={name}
    />
  </div>
);

export default FormField;
