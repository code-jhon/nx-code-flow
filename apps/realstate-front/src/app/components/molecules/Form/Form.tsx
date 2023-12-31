import React from 'react';
import { Button } from '../../atoms';

interface FormProps {
  children: React.ReactNode;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  buttonLabel?: string;
  isSubmitEnabled?: boolean;
}

export const Form: React.FC<FormProps> = ({ children, onSubmit, buttonLabel="Send", isSubmitEnabled=true }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="space-y-12">
        <div className="pb-6">
          {children}
          <div className="pt-3">
            <Button label={buttonLabel} variant="primary" fullWidth rounded disabled={!isSubmitEnabled} />
          </div>
        </div>
      </div>
    </form>
  )
}