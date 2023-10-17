import React from 'react';
import { Header } from "../../organisms";

export const SignInPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <Header />
        
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
        
        <div className="flex justify-center mt-4">
          <p className="text-gray-600">Or sign in with</p>
        </div>
        
        <div className="flex justify-center mt-2">
          {/* Replace with your social icons */}
          <span className="w-8 h-8 bg-gray-300 rounded-full mx-2"></span>
          <span className="w-8 h-8 bg-gray-300 rounded-full mx-2"></span>
          <span className="w-8 h-8 bg-gray-300 rounded-full mx-2"></span>
        </div>
        
        <div className="flex justify-center mt-4">
          <p className="text-gray-600">Don't have an account? <span className="text-blue-500 hover:underline cursor-pointer">Sign Up</span></p>
        </div>
      </div>
    </div>
  );
};
