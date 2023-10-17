import React from 'react';
import { Header, Footer } from "../../organisms";

interface SignInPageProps {
  children?: React.ReactNode;
}

export const SignInPage: React.FC<SignInPageProps> = ({children}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <Header />
        {children}        
        <Footer />
      </div>
    </div>
  );
};
