import React from 'react';
import { Header, Footer } from "../../organisms";

interface SignInPageProps {
  children?: React.ReactNode;
}

export const SignInPage: React.FC<SignInPageProps> = ({children}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <Header headerText='Sign In' subHeaderText="Hi! Welcome back, you've been missed" />
        {children}        
        <Footer footerTitle="Or sign in with" footerText="Don't have an account?" footerCta="Sign Up" ctaDestination="/sign-up" />
      </div>
    </div>
  );
};
