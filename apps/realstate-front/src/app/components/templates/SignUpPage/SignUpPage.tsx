import React from 'react';
import { Header, Footer } from "../../organisms";

interface SignUpPageProps {
  children?: React.ReactNode;
}

export const SignUpPage: React.FC<SignUpPageProps> = ({children}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <Header headerText="Create Account" subHeaderText="Fill your information below or register with your social account" />
        {children}        
        <Footer footerTitle="Or sign up with" footerText="Already have an account?" footerCta="Sign In" ctaDestination="/" />
      </div>
    </div>
  );
};