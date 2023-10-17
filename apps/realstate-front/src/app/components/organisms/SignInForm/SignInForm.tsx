import React, { useState } from 'react';
import { Form, FormField } from '../../molecules';

interface SignInFormProps {
  children?: React.ReactNode;
}

export const SignInForm: React.FC<SignInFormProps> = ({children}) => {
  const [email, setEmail] = useState('');

  return (
    <Form>
      <FormField label="Email" type="email" fieldName="email" placeholder="" state={email} changeAction={setEmail} />
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
        <input type="email" id="email" placeholder="example@gmail.com" className="w-full p-2 border rounded-md" />
      </div>
      
      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
        <input type="password" id="password" className="w-full p-2 border rounded-md" />
        <p className="text-right text-blue-500 hover:underline mt-2 cursor-pointer">Forgot Password?</p>
      </div>
      
      {/* <Button label="Sign In" variant="primary" /> */}
    </Form>
  )
};
