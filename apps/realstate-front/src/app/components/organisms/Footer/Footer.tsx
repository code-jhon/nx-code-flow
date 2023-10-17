import React from 'react';

export const Footer:React.FC = () => {
  return (
    <>
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
    </>
  )
};