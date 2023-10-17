import React from 'react';
import { Header } from "../../organisms";
import { BackButton } from '../../molecules';

interface NewPasswordPageProps {
  children?: React.ReactNode;
}

export const NewPasswordPage: React.FC<NewPasswordPageProps> = ({children}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <BackButton />
        <Header headerText="New Password" subHeaderText="Your new password must be different from previously used passwords." />
        {children}
      </div>
    </div>
  );
};