import React from 'react';
import { Button } from '../../atoms';

interface FormProps {
  children: React.ReactNode;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const Form: React.FC<FormProps> = ({ children, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          {children}
          <Button label="Sign In" variant="primary" fullWidth rounded />
        </div>
      </div>
    </form>
  )
}