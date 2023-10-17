import React from 'react';
import { Text, Img } from "../../atoms";
import AppleIcon from '../../../../assets/icons/apple-icon.svg';
import GoogleIcon from '../../../../assets/icons/google-icon.svg';
import FacebookIcon from '../../../../assets/icons/facebook-icon.svg';

export const Footer:React.FC = () => {
  return (
    <>
      <div className="flex justify-center mt-4">
        <Text textType="p" className="text-gray-600">Or sign in with</Text>
      </div>
      
      <div className="flex justify-center mt-2 p-4">
        <Img src={AppleIcon} className="w-10 h-10 rounded-full mx-4 p-2 hover:scale-105 cursor-pointer border-solid border-slate-950" alt="Apple Icon" />
        <Img src={GoogleIcon} className="w-10 h-10 rounded-full mx-4 p-2 hover:scale-105 cursor-pointer border-solid border-slate-950" alt="Google Icon" />
        <Img src={FacebookIcon} className="w-10 h-10 rounded-full mx-4 p-2 hover:scale-105 cursor-pointer border-solid border-slate-950" alt="Facebook Icon" />
      </div>
      
      <div className="flex justify-center mt-4">
        <Text textType="p" className="text-gray-600">Don't have an account? <span className="text-blue-500 hover:underline cursor-pointer">Sign Up</span></Text>
      </div>
    </>
  )
};