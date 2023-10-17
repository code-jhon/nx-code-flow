import React, { useState } from 'react';
import { Form, FormField } from '../../molecules';

interface SignInFormProps {
  children?: React.ReactNode;
}

export const SignInForm: React.FC<SignInFormProps> = ({children}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('submitting form');
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormField label="Email" type="email" fieldName="email" placeholder="" state={email} changeAction={setEmail} additionalStyles='block text-sm font-medium mb-2' />
      <FormField label="Password" type="password" fieldName="password" placeholder="" state={password} changeAction={setPassword} additionalStyles='block text-sm font-medium mb-2' />
    </Form>
  )
};
