import React from 'react';
import { Text, Img, Link } from "../../atoms";
import AppleIcon from '../../../../assets/icons/apple-icon.svg';
import GoogleIcon from '../../../../assets/icons/google-icon.svg';
import FacebookIcon from '../../../../assets/icons/facebook-icon.svg';

interface FooterProps {
  footerTitle: string;
  footerText: string;
  footerCta: string;
  ctaDestination: string;
}

export const Footer:React.FC<FooterProps> = ({footerTitle, footerText, footerCta, ctaDestination}) => {
  return (
    <>
      <div className="relative flex justify-center mt-4 mb-4">
        <div className="w-3/4 h-px bg-gray-300 m-3"></div>
        <Text textType="p" className="text-gray-400 absolute bg-white inset-y-1 flex items-center text-sm leading-5 p-2 ">{footerTitle}</Text>
      </div>
      
      <div className="flex justify-center mt-2 p-4">
        <Img src={AppleIcon} className="w-14 rounded-full mx-4 p-4 hover:scale-105 cursor-pointer border-solid border border-gray-300" alt="Apple Icon" />
        <Img src={GoogleIcon} className="w-14 rounded-full mx-4 p-4 hover:scale-105 cursor-pointer border-solid border border-gray-300" alt="Google Icon" />
        <Img src={FacebookIcon} className="w-14 rounded-full mx-4 p-4 hover:scale-105 cursor-pointer border-solid border border-gray-300" alt="Facebook Icon" />
      </div>
      
      <div className="flex justify-center mt-6">
        <Text textType="p" className="text-sm text-gray-600">{footerText} <Link to={ctaDestination} textType="span">{footerCta}</Link></Text>
      </div>
    </>
  )
};