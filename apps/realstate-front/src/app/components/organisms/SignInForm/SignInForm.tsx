import React, { useContext } from 'react';
import { Form, FormField } from '../../molecules';

import { UserInfoContext } from '../../../contexts/UserInfoContext';
interface SignInFormProps {
  children?: React.ReactNode;
}

export const SignInForm: React.FC<SignInFormProps> = ({ children }) => {
  const { email, setEmail, password, setPassword } = useContext(UserInfoContext);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Email: ${email} Password: ${password}`);
  }

  return (
    <Form onSubmit={handleSubmit} buttonLabel="Sign In">
      <FormField label="Email" type="email" fieldName="email" placeholder="example@gmail.com" state={email} changeAction={setEmail} additionalStyles='block text-sm font-medium mb-2' />
      <FormField label="Password" type="password" fieldName="password" placeholder="*****************" state={password} changeAction={setPassword} additionalStyles='block text-sm font-medium mb-2' />
    </Form>
  )
};
