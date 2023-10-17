import React, { useContext } from 'react';
import { Header } from "../../organisms";
import { BackButton } from '../../molecules';
import { UserInfoContext } from '../../../contexts/UserInfoContext';

interface PasswordRecoveryPageProps {
  children?: React.ReactNode;
}

export const PasswordRecoveryPage: React.FC<PasswordRecoveryPageProps> = ({children}) => {
  const { email } = useContext(UserInfoContext);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <BackButton />
        <Header headerText="Verify Code" subHeaderText="Please enter the code we just sent to the email" subText={email} />
        {children}
      </div>
    </div>
  );
};