import React from 'react';

interface FormProps {
  children: React.ReactNode;
  onSubmit?: () => void;
}

export const Form: React.FC<FormProps> = ({ children, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      {children}
    </form>
  )
}