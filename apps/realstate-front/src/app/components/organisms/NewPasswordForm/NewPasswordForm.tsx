import React, { useEffect, useState } from 'react';
import { Toast } from '../../atoms';
import { Form, FormField } from '../../molecules';

interface NewPasswordFormProps {
  children?: React.ReactNode;
}

export const NewPasswordForm: React.FC<NewPasswordFormProps> = ({ children }) => {
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [toast, setToast] = useState(<>""</>);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  }, [toast]);
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(password === passwordConfirmation && password.length > 0 && passwordConfirmation.length > 0) {
      setToast(<Toast type="success" message={'Passwords match'}  />);
      setIsVisible(true);
    }else {
      setToast(<Toast type="error" message={`Passwords doesn't match, please try again `}  />);
      setIsVisible(true);
    }
  }

  return (
    <Form onSubmit={handleSubmit} buttonLabel="Sign In">
      <FormField 
        label="Password" 
        type="password" 
        fieldName="password" 
        placeholder="*****************" 
        state={password} 
        changeAction={setPassword} 
        additionalStyles='block text-sm font-medium mb-2' 
        hideForgotPassword 
      />
      <FormField 
        label="Confirm Password" 
        type="password" 
        fieldName="confirm-password" 
        placeholder="*****************" 
        state={passwordConfirmation} 
        changeAction={setPasswordConfirmation} 
        additionalStyles='block text-sm font-medium mb-2' 
        hideForgotPassword 
      />
      {isVisible && toast}
    </Form>
  )
};
