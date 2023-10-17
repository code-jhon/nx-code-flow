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
        
        <Footer />
      </div>
    </div>
  );
};
