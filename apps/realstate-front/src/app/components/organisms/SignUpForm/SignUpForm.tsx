import React, { useState } from 'react';
import { Form, FormField } from '../../molecules';
import { CheckBox } from '../../atoms';

interface SignUpFormProps {
  children?: React.ReactNode;
}

export const SignUpForm: React.FC<SignUpFormProps> = ({ children }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(true);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Name: ${name} Email: ${email} Password: ${password}`);
  }

  return (
    <Form isSubmitEnabled={isChecked} onSubmit={handleSubmit} buttonLabel="Sign Up">
      <FormField label="Name" type="name" fieldName="name" placeholder="John Doe" state={name} changeAction={setName} additionalStyles='block text-sm font-medium mb-2' />
      <FormField label="Email" type="email" fieldName="email" placeholder="example@gmail.com" state={email} changeAction={setEmail} additionalStyles='block text-sm font-medium mb-2' />
      <FormField label="Password" type="password" fieldName="password" placeholder="*****************" state={password} changeAction={setPassword} additionalStyles='block text-sm font-medium mb-2' hideForgotPassword />
      <CheckBox label="Agree with" linkToModal="Terms & Condition" fieldName="terms" checked={isChecked} changeAction={setIsChecked} additionalStyles='block text-sm font-medium mb-2' />
    </Form>
  )
};